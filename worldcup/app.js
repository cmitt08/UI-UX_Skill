/* Pitchside '26 — live matchday engine + UI.

   Data flow:
   - feed.js (ESPN public API, no key) supplies the full tournament schedule,
     live scores/clocks/scorers polled every 60s, and per-match team stats.
   - Real matches render REAL data only. The deterministic seeded sim engine
     below powers Demo mode, alt-universe replays, and the automatic fallback
     when the feed is unreachable — always labeled as a sim. */
(function () {
  'use strict';

  /* ============================ utilities ============================ */

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  /* engine randomness goes through RNG so sims can be seeded per match */
  let RNG = Math.random;
  const rand = (lo, hi) => lo + RNG() * (hi - lo);
  const randInt = (lo, hi) => Math.floor(rand(lo, hi + 1));
  const gauss = () => (RNG() + RNG() + RNG() - 1.5) * 2;
  const pick = arr => arr[Math.floor(RNG() * arr.length)];

  function weightedPick(items, weightOf) {
    const total = items.reduce((s, it) => s + weightOf(it), 0);
    let r = RNG() * total;
    for (const it of items) { r -= weightOf(it); if (r <= 0) return it; }
    return items[items.length - 1];
  }

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  /* if both kits read as the same color on charts, switch the away side to its alt */
  function hexRGB(hx) { const n = parseInt(hx.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function teamColors(home, away) {
    const A = hexRGB(home.color), B = hexRGB(away.color);
    const dist = Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]);
    return [home.color, dist < 110 ? (away.color2 || away.color) : away.color];
  }

  /* ============================ odds math ============================ */

  const FACT = [1, 1, 2, 6, 24, 120, 720, 5040];
  const pois = (l, k) => Math.exp(-l) * Math.pow(l, k) / FACT[k];

  /* Remaining-goals Poisson matrix → live 1X2 / total / BTTS probabilities */
  function outcomeProbs(lh, la, gh, ga, line) {
    let pH = 0, pD = 0, pA = 0, pOver = 0, pBtts = 0, s = 0;
    for (let i = 0; i <= 6; i++) {
      for (let j = 0; j <= 6; j++) {
        const p = pois(lh, i) * pois(la, j);
        const fh = gh + i, fa = ga + j;
        s += p;
        if (fh > fa) pH += p; else if (fh === fa) pD += p; else pA += p;
        if (fh + fa > line) pOver += p;
        if (fh > 0 && fa > 0) pBtts += p;
      }
    }
    return { pH: pH / s, pD: pD / s, pA: pA / s, pOver: pOver / s, pBtts: pBtts / s };
  }

  function probsFor(sH, sA, homeAdv, minute, gh, ga) {
    const frac = clamp(1 - minute / 93, 0, 1);
    const exp = 1 / (1 + Math.pow(10, -((sH + homeAdv) - sA) / 16));
    const lamTotal = 2.6 * frac;
    const lh = lamTotal * exp, la = lamTotal * (1 - exp);
    const total = gh + ga;
    const line = Math.max(2.5, Math.floor(total + lh + la) + 0.5);
    const o = outcomeProbs(lh, la, gh, ga, line);
    return { ...o, lh, la, line, exp };
  }

  function toAmerican(p, juice) {
    const imp = clamp(p * (juice || 1.06), 0.02, 0.985);
    let n;
    if (imp >= 0.5) n = -Math.round(100 * imp / (1 - imp) / 5) * 5;
    else n = Math.round(100 * (1 - imp) / imp / 5) * 5;
    n = clamp(n, -4000, 2500);
    if (n > -105 && n < 100) n = 100;
    return n > 0 ? '+' + n : String(n);
  }

  /* ============================ sim engine ============================ */

  const PHRASES = {
    shotOn: ['stings the keeper\'s palms', 'forces a sharp save', 'tests the keeper from range', 'header straight at the keeper'],
    bigChance: ['HUGE chance goes begging', 'somehow stays out — chaos in the box', 'rattles the woodwork', 'inches away from the opener'],
    goal: ['buries it into the corner', 'finishes coolly', 'thunders it home', 'heads it in at the far post', 'slots the rebound'],
    corner: ['wins a corner off the block', 'forces another corner', 'corner — big bodies forward'],
    foul: ['cynical foul stops the break', 'late challenge in midfield', 'shirt pull spotted by the referee'],
    sub: ['fresh legs on', 'tactical switch', 'change up front']
  };

  function createMatch(fixture, opts) {
    opts = opts || {};
    const home = WC.TEAMS[fixture.home], away = WC.TEAMS[fixture.away];
    const homeAdv = fixture.home === 'MEX' ? 4 : 2;
    const seed = opts.seed != null ? opts.seed : hashStr(fixture.id + ':wc26');
    const rng = mulberry32(seed);
    RNG = rng;
    const basePoss = 50 + (home.strength + homeAdv - away.strength) * 0.9;
    const m = {
      fixture, home, away, homeAdv, colors: teamColors(home, away),
      rng, mode: opts.mode || 'real',
      minute: 0, period: opts.mode === 'sprint' ? '1H' : 'pre',
      add1: randInt(1, 3), add2: randInt(3, 6), holdTicks: 0,
      score: [0, 0],
      stats: {
        shots: [0, 0], sot: [0, 0], xg: [0, 0], corners: [0, 0], big: [0, 0],
        fouls: [0, 0], offsides: [0, 0], saves: [0, 0], yellows: [0, 0], reds: [0, 0],
        passes: [0, 0], acc: [rand(80, 88), rand(78, 86)]
      },
      poss: clamp(basePoss, 32, 68), basePoss: clamp(basePoss, 32, 68),
      momentumVal: 0, momentum: [],
      events: [], shotMap: [], goalLog: [],
      players: [
        (WC.ROSTERS[fixture.home] || []).map(initPlayer),
        (WC.ROSTERS[fixture.away] || []).map(initPlayer)
      ],
      ui: null, booting: false
    };
    /* fixtures with a known real result get a scripted recreation (sim fallback only) */
    m.script = (m.mode === 'real' && fixture.official && !opts.ignoreOfficial) ? fixture.official : null;
    return m;
  }

  function initPlayer(p) {
    return { ...p, shots: 0, goals: 0, passes: 0, acc: rand(76, 92), rating: 6.4 + rand(0, 0.5), yellow: 0, red: 0 };
  }

  const sideBias = m => ((m.home.strength + m.homeAdv) - m.away.strength) / 14;

  function attackSide(m) {
    const p = 1 / (1 + Math.exp(-(sideBias(m) + m.momentumVal / 150)));
    return RNG() < p ? 0 : 1;
  }

  function pushEvent(m, ev) {
    m.events.push(ev);
    if (typeof onKeyEvent === 'function' && ['goal', 'yellow', 'red', 'ht', 'ft', 'big'].includes(ev.type)) onKeyEvent(m, ev);
  }

  const shotXY = side => side === 0 ? { x: rand(64, 96), y: rand(10, 54) } : { x: rand(4, 36), y: rand(10, 54) };

  function scoreGoal(m, side, min, scorer) {
    const team = side === 0 ? m.home : m.away;
    m.score[side]++;
    m.stats.sot[side]++;
    m.momentumVal = side === 0 ? 60 : -60;
    if (scorer) { scorer.goals++; scorer.rating = clamp(scorer.rating + 0.55, 5.5, 10); }
    m.goalLog.push({ name: scorer ? scorer.name : 'Unknown', team });
    const xy = side === 0 ? { x: rand(78, 95), y: rand(18, 46) } : { x: rand(5, 22), y: rand(18, 46) };
    m.shotMap.push({ side, goal: true, min, x: xy.x, y: xy.y });
    pushEvent(m, {
      min, side, type: 'goal',
      title: `GOAL — ${team.name}`,
      sub: `${scorer ? scorer.name + ' ' : ''}${pick(PHRASES.goal)} · ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}`
    });
  }

  /* One integer game-minute of simulation */
  function minuteTick(m) {
    const min = Math.floor(m.minute);

    /* scripted recreation of an official result */
    if (m.script) {
      for (const g of m.script.goals) {
        if (g.min === min) {
          const scorer = m.players[g.side].find(p => p.name === g.scorer) || null;
          m.stats.shots[g.side]++; m.stats.xg[g.side] += 0.42; m.stats.big[g.side]++;
          if (scorer) scorer.shots++;
          scoreGoal(m, g.side, min, scorer);
        }
      }
      for (const r of m.script.reds) {
        if (r.min === min) {
          m.stats.reds[r.side]++;
          const team = r.side === 0 ? m.home : m.away;
          pushEvent(m, { min, side: r.side, type: 'red', title: `RED CARD — ${team.name}`, sub: 'Down to ' + (m.stats.reds[r.side] > 1 ? 'nine' : 'ten') });
        }
      }
    }

    m.momentumVal = clamp(m.momentumVal * 0.8 + gauss() * 30 + sideBias(m) * 9, -100, 100);
    m.momentum.push({ min, v: m.momentumVal });
    m.poss = clamp(m.poss + (m.basePoss - m.poss) * 0.03 + m.momentumVal * 0.012 + gauss() * 0.7, 28, 72);

    for (const side of [0, 1]) {
      const share = side === 0 ? m.poss / 100 : 1 - m.poss / 100;
      m.stats.passes[side] += Math.round(5 * share * rand(0.7, 1.3) + 2);
      m.stats.acc[side] = clamp(m.stats.acc[side] + gauss() * 0.25, 68, 94);
      for (const p of m.players[side]) {
        p.passes += randInt(0, p.pos === 'CM' || p.pos === 'DM' ? 4 : 2);
        p.acc = clamp(p.acc + gauss() * 0.3, 60, 97);
        p.rating = clamp(p.rating + gauss() * 0.02, 5.5, 9.9);
      }
    }

    if (RNG() < 0.42) {
      const side = attackSide(m);
      const att = side === 0 ? m.home : m.away;
      const def = side === 0 ? m.away : m.home;
      const o = 1 - side;
      const roster = m.players[side];
      const r = RNG();

      if (r < 0.58) { // a shot
        const q = 0.03 + 0.35 * Math.pow(RNG(), 2.6);
        const shooter = roster.length ? weightedPick(roster, p => p.w) : null;
        m.stats.shots[side]++;
        m.stats.xg[side] += q;
        if (q > 0.25) m.stats.big[side]++;
        if (shooter) shooter.shots++;
        if (!m.script && RNG() < q * 0.82) {
          scoreGoal(m, side, min, shooter);
        } else if (RNG() < 0.5) {
          m.stats.sot[side]++; m.stats.saves[o]++;
          m.shotMap.push({ side, goal: false, on: true, min, ...shotXY(side) });
          if (q > 0.22) pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: `${shooter ? shooter.name + ' ' : ''}${pick(PHRASES.shotOn)}` });
        } else {
          m.shotMap.push({ side, goal: false, on: false, min, ...shotXY(side) });
          if (q > 0.24) pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: `${shooter ? shooter.name + ' ' : ''}${pick(PHRASES.bigChance)}` });
        }
      } else if (r < 0.72) {
        m.stats.corners[side]++;
        if (m.stats.corners[side] % 3 === 1) pushEvent(m, { min, side, type: 'corner', title: `Corner — ${att.name}`, sub: pick(PHRASES.corner) });
      } else if (r < 0.86) {
        m.stats.fouls[o]++;
        const card = RNG();
        if (card < 0.18) {
          m.stats.yellows[o]++;
          const offender = m.players[o].length ? weightedPick(m.players[o], p => 1 / (p.w + 0.4)) : null;
          if (offender) { offender.yellow++; offender.rating = clamp(offender.rating - 0.25, 5.5, 10); }
          pushEvent(m, { min, side: o, type: 'yellow', title: `Yellow card — ${def.name}`, sub: `${offender ? offender.name + ' — ' : ''}${pick(PHRASES.foul)}` });
        } else if (!m.script && card < 0.195) {
          m.stats.reds[o]++;
          const offender = m.players[o].length ? weightedPick(m.players[o], p => 1 / (p.w + 0.4)) : null;
          if (offender) { offender.red++; offender.rating = clamp(offender.rating - 1.2, 5.5, 10); }
          pushEvent(m, { min, side: o, type: 'red', title: `RED CARD — ${def.name}`, sub: `${offender ? offender.name + ' is off! ' : ''}Down to ten` });
        }
      } else if (r < 0.93) {
        m.stats.offsides[side]++;
      } else {
        m.stats.shots[side]++; m.stats.sot[side]++; m.stats.saves[o]++;
        const q = rand(0.15, 0.4); m.stats.xg[side] += q; m.stats.big[side]++;
        m.shotMap.push({ side, goal: false, on: true, min, ...shotXY(side) });
        pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: pick(PHRASES.bigChance) });
      }
    }

    if (m.period === '2H' && min > 57 && RNG() < 0.05) {
      const side = randInt(0, 1);
      pushEvent(m, { min, side, type: 'sub', title: `Substitution — ${(side === 0 ? m.home : m.away).name}`, sub: pick(PHRASES.sub) });
    }
  }

  function crossMinutes(m, from, to) {
    for (let k = Math.floor(from) + 1; k <= Math.floor(to); k++) {
      m.minute = k;
      minuteTick(m);
    }
    m.minute = to;
  }

  /* ---- real-time anchoring for sim-fallback matches ---- */

  function matchPhase(m, now) {
    const kick = new Date(m.fixture.kickoffUTC).getTime();
    const e = (now - kick) / 60000;
    if (e < 0) return { period: 'pre' };
    const h1 = 45 + m.add1, h2start = h1 + 15;
    if (e < h1) return { period: '1H', minute: e };
    if (e < h2start) return { period: 'HT', minute: 45 };
    const g2 = 45 + (e - h2start);
    if (g2 < 90 + m.add2) return { period: '2H', minute: g2 };
    return { period: 'FT', minute: 90 + m.add2 };
  }

  function kickoffEvent(m) {
    pushEvent(m, { min: 0, side: -1, type: 'ko', title: 'Kickoff', sub: `${m.home.name} get us underway at ${m.fixture.venue}` });
  }

  function simulateTo(m, ph) {
    if (ph.period === 'pre') { m.period = 'pre'; return; }
    RNG = m.rng;
    if (m.period === 'pre') { m.period = '1H'; m.minute = 0; kickoffEvent(m); }
    if (m.period === '1H') {
      if (ph.period === '1H') { crossMinutes(m, m.minute, ph.minute); return; }
      crossMinutes(m, m.minute, 45 + m.add1);
      pushEvent(m, { min: 45, side: -1, type: 'ht', title: 'Half-time', sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code} at the break` });
      m.period = 'HT'; m.minute = 45;
    }
    if (m.period === 'HT') {
      if (ph.period === 'HT') return;
      m.period = '2H'; m.minute = 45;
      pushEvent(m, { min: 45, side: -1, type: 'ko', title: 'Second half', sub: 'Back underway' });
    }
    if (m.period === '2H') {
      if (ph.period === '2H') { crossMinutes(m, m.minute, ph.minute); return; }
      crossMinutes(m, m.minute, 90 + m.add2);
      m.period = 'FT';
      pushEvent(m, { min: 90, side: -1, type: 'ft', title: 'Full-time', sub: `Final: ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}` });
    }
  }

  function tickReal(m, now) {
    if (m.period === 'FT') return;
    simulateTo(m, matchPhase(m, now));
  }

  /* ---- sprint mode (demo / alt-universe replays): ~6 game-seconds per second ---- */

  function advance(m) {
    if (m.period === 'FT') return;
    RNG = m.rng;
    if (m.period === 'HT') {
      m.holdTicks--;
      if (m.holdTicks <= 0) { m.period = '2H'; m.minute = 45; pushEvent(m, { min: 45, side: -1, type: 'ko', title: 'Second half', sub: 'Back underway' }); }
      return;
    }
    const next = m.minute + 0.1;
    crossMinutes(m, m.minute, next);
    if (m.period === '1H' && m.minute >= 45 + m.add1) {
      m.period = 'HT'; m.holdTicks = 14;
      pushEvent(m, { min: 45, side: -1, type: 'ht', title: 'Half-time', sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code} at the break` });
    } else if (m.period === '2H' && m.minute >= 90 + m.add2) {
      m.period = 'FT';
      pushEvent(m, { min: 90, side: -1, type: 'ft', title: 'Full-time', sub: `Final: ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}` });
    }
  }

  function fastForward(m, toMinute) {
    RNG = m.rng;
    if (toMinute > 45) {
      crossMinutes(m, 0, 45 + m.add1);
      m.events.push({ min: 45, side: -1, type: 'ht', title: 'Half-time', sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code} at the break` });
      m.period = '2H'; m.minute = 45;
      crossMinutes(m, 45, toMinute);
    } else {
      crossMinutes(m, 0, toMinute);
    }
  }

  function liveOdds(m) {
    const p = probsFor(m.home.strength, m.away.strength, m.homeAdv || 2, m.minute, m.score[0], m.score[1]);
    const scorers = [];
    for (const side of [0, 1]) {
      const roster = m.players[side];
      if (!roster || !roster.length) continue;
      const sumW = roster.reduce((s, x) => s + x.w, 0);
      const lam = side === 0 ? p.lh : p.la;
      for (const pl of roster.slice(0, 4)) {
        const share = clamp(pl.w / sumW * 1.6, 0.05, 0.5);
        const prob = 1 - Math.exp(-lam * share);
        scorers.push({ side, name: pl.name, pos: pl.pos, goals: pl.goals, odds: toAmerican(prob, 1.14), prob });
      }
    }
    return { ...p, scorers };
  }

  function clockText(m) {
    if (m.period === 'pre') return '—';
    if (m.period === 'FT') return 'FT';
    if (m.period === 'HT') return 'HT';
    const base = Math.floor(m.minute);
    const sec = Math.floor((m.minute % 1) * 60);
    if (m.period === '1H' && base >= 45) return `45+${base - 44}'`;
    if (m.period === '2H' && base >= 90) return `90+${base - 89}'`;
    return `${String(base).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  const Engine = { createMatch, advance, tickReal, matchPhase, simulateTo, fastForward, liveOdds, probsFor, toAmerican, clockText };

  /* node smoke-test hook (no DOM below this point runs in node) */
  if (typeof document === 'undefined') {
    if (typeof module !== 'undefined') module.exports = Engine;
    return;
  }

  /* ============================ icons ============================ */

  const I = (d, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}${extra || ''}</svg>`;
  const ICONS = {
    ball: I('<circle cx="12" cy="12" r="10"/><path d="M12 7l4.5 3.3-1.7 5.4H9.2L7.5 10.3 12 7z"/><path d="M12 2v5M4.7 8.7l2.8 1.6M6.4 18.4l2.8-2.7M14.8 15.7l2.8 2.7M16.5 10.3l2.8-1.6"/>'),
    clock: I('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    flame: I('<path d="M12 22c4.4 0 7-2.8 7-6.5 0-3-1.6-4.9-3-6.5-1.2-1.5-2.5-3-3-6-3 2-5 5-5 8 0-1-1-2-1-2-1.3 1.6-2 3.6-2 5.5C5 19.2 7.6 22 12 22z"/>'),
    target: I('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
    trophy: I('<path d="M6 9a6 6 0 0 0 12 0V3H6v6z"/><path d="M6 5H3v2a4 4 0 0 0 4 4M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 15v3M8 21h8M10 18h4"/>'),
    chart: I('<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>'),
    users: I('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    calendar: I('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    card: I('<rect x="6" y="3" width="12" height="18" rx="2"/>'),
    sub: I('<path d="M7 4v12M3 8l4-4 4 4M17 20V8M13 16l4 4 4-4"/>'),
    whistle: I('<circle cx="9" cy="15" r="6"/><path d="M9 12v3l2 1M14 9l7-4M14 12h7M13 6.5 17 3"/>'),
    pin: I('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
    zap: I('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    check: I('<polyline points="20 6 9 17 4 12"/>'),
    chev: I('<polyline points="6 9 12 15 18 9"/>'),
    bulb: I('<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/>'),
    crown: I('<path d="M2 18h20M4 18l-1-9 5 4 4-7 4 7 5-4-1 9H4z"/>'),
    copy: I('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
    play: I('<polygon points="5 3 19 12 5 21 5 3"/>'),
    wifi: I('<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/>')
  };

  /* ============================ UI helpers ============================ */

  const $ = sel => document.querySelector(sel);
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function h(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function flash(node, dir) {
    if (REDUCED) return;
    node.classList.remove('up', 'down');
    void node.offsetWidth;
    node.classList.add(dir > 0 ? 'up' : 'down');
  }

  function setOdds(node, text, prob) {
    const prev = parseFloat(node.dataset.prob || 'NaN');
    if (node.textContent !== text) {
      node.textContent = text;
      if (!isNaN(prev)) flash(node, prob - prev);
    }
    node.dataset.prob = String(prob);
  }

  function toast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  function countUp(el) {
    const mm = el.textContent.trim().match(/^(\d+(?:\.\d+)?)(%?)$/);
    if (!mm) return;
    const target = parseFloat(mm[1]);
    if (!target) return;
    const dec = mm[1].includes('.') ? 2 : 0, suf = mm[2];
    el.dataset.counting = '1';
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / 750);
      el.textContent = (target * (1 - Math.pow(1 - k, 3))).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(step);
      else { el.textContent = target.toFixed(dec) + suf; delete el.dataset.counting; }
    })(t0);
  }

  let revealObserver = null;
  function observeReveals(scope) {
    const targets = (scope || document).querySelectorAll('.reveal:not(.in)');
    if (REDUCED || !('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('in'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            e.target.querySelectorAll('.stat-row__val, .poss-h, .poss-a').forEach(countUp);
            revealObserver.unobserve(e.target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    targets.forEach(t => revealObserver.observe(t));
  }

  function flagEl(team, size) {
    const f = h('span', 'flag' + (size ? ' flag--' + size : ''));
    f.style.background = team.flag;
    f.setAttribute('role', 'img');
    f.setAttribute('aria-label', team.name + ' flag');
    return f;
  }

  /* ============================ FX: cursor kicks + goal confetti ============================ */

  const FX = (() => {
    let canvas, ctx, parts = [], running = false;
    function ensure() {
      if (canvas) return true;
      canvas = $('#fx');
      if (!canvas) return false;
      ctx = canvas.getContext('2d');
      resize();
      window.addEventListener('resize', resize);
      return true;
    }
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function start() {
      if (running) return;
      running = true;
      requestAnimationFrame(loop);
    }
    function loop() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter(p => p.life < p.ttl);
      for (const p of parts) {
        p.life++;
        p.x += p.vx; p.y += p.vy;
        p.vy += p.g; p.vx *= 0.99;
        p.rot += p.vr;
        const a = 1 - p.life / p.ttl;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = a;
        if (p.kind === 'ball') drawBall(p.r);
        else if (p.kind === 'conf') { ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * (0.4 + 0.6 * Math.abs(Math.sin(p.life / 6)))); }
        else { ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(0, 0, p.r, 0, 7); ctx.fill(); }
        ctx.restore();
      }
      if (parts.length) requestAnimationFrame(loop);
      else { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
    }
    function drawBall(r) {
      ctx.fillStyle = '#f4f6f8';
      ctx.beginPath(); ctx.arc(0, 0, r, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(2,6,23,.55)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#0b1220';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * Math.PI * 2 - Math.PI / 2;
        const px = Math.cos(a) * r * 0.42, py = Math.sin(a) * r * 0.42;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath(); ctx.fill();
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * Math.PI * 2 - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r * 0.42, Math.sin(a) * r * 0.42);
        ctx.lineTo(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.95);
        ctx.strokeStyle = 'rgba(2,6,23,.35)';
        ctx.stroke();
      }
    }
    function kick(x, y) {
      if (REDUCED || !ensure()) return;
      parts.push({ kind: 'ball', x, y, vx: rand2(-3.4, 3.4), vy: rand2(-9.5, -6), g: 0.32, rot: 0, vr: rand2(-0.3, 0.3), r: 9, life: 0, ttl: 70 });
      for (let i = 0; i < 6; i++) {
        parts.push({ kind: 'spark', x, y, vx: rand2(-2.6, 2.6), vy: rand2(-3, 0.5), g: 0.12, rot: 0, vr: 0, r: rand2(1, 2.4), color: pick2(['#22c55e', '#eab308', '#f1f5f9']), life: 0, ttl: 38 });
      }
      start();
    }
    function confetti(x, y, colors) {
      if (REDUCED || !ensure()) return;
      const palette = colors.concat(['#eab308', '#f1f5f9', '#22c55e']);
      for (let i = 0; i < 90; i++) {
        parts.push({
          kind: 'conf', x, y,
          vx: rand2(-6, 6), vy: rand2(-9, -2), g: 0.18,
          rot: rand2(0, 6), vr: rand2(-0.25, 0.25),
          w: rand2(4, 7), h: rand2(6, 11),
          color: palette[Math.floor(Math.random() * palette.length)],
          life: 0, ttl: 110
        });
      }
      start();
    }
    const rand2 = (a, b) => a + Math.random() * (b - a);
    const pick2 = a => a[Math.floor(Math.random() * a.length)];
    return { kick, confetti };
  })();

  function goalFlash(m, ev) {
    const node = $('#goalFlash');
    if (!node || REDUCED) return;
    const team = ev.side === 0 ? m.home : m.away;
    node.innerHTML = `<span class="goal-flash__word">GOOOAL!</span><span class="goal-flash__team">${team.name}</span>`;
    node.classList.remove('show');
    void node.offsetWidth;
    node.classList.add('show');
    clearTimeout(node._timer);
    node._timer = setTimeout(() => node.classList.remove('show'), 1700);
    const rect = m.ui && document.body.contains(m.ui.scoreWrap) ? m.ui.scoreWrap.getBoundingClientRect() : null;
    const onScreen = rect && rect.top > -40 && rect.top < innerHeight;
    FX.confetti(onScreen ? rect.left + rect.width / 2 : innerWidth / 2, onScreen ? rect.top + rect.height / 2 : 170, m.colors);
  }

  /* ============================ app state ============================ */

  const params = new URLSearchParams(location.search);
  const App = {
    days: WC.DAYS,                 // replaced by the live schedule when the feed loads
    groups: WC.GROUPS,
    standings: null,               // official group tables from the feed
    standingsAt: 0,
    schedule: new Map(),           // espn event id -> normalized event (feed mode)
    feedOn: false, feedStale: false,
    matches: [], matchById: {},
    demoMatches: {},
    dayId: null,
    tab: 'matches',
    roadStage: null,
    demo: params.get('demo') === '1',
    nofeed: params.get('nofeed') === '1',
    timeOffset: params.get('simnow') ? new Date(params.get('simnow')).getTime() - Date.now() : 0,
    ticker: [],
    triviaIdx: Math.floor(Math.random() * (WC.TRIVIA || []).length),
    triviaOpen: false,
    picks: JSON.parse(localStorage.getItem('wc26-picks') || '{}'),
    motm: JSON.parse(localStorage.getItem('wc26-motm') || '{}')
  };

  const nowMs = () => Date.now() + App.timeOffset;
  const getMatch = id => App.demo && App.demoMatches[id] ? App.demoMatches[id] : App.matchById[id];
  const isLive = m => m && m.period !== 'pre' && m.period !== 'FT';
  const currentDay = () => App.days.find(d => d.id === App.dayId) || App.days[0];

  /* engine/feed → ticker/fx bridge */
  window.onKeyEvent = function (m, ev) {
    if (m.booting) return;
    const minTxt = ev.min ? `${ev.min}'` : '';
    let txt = '';
    if (ev.type === 'goal') txt = `GOAL ${minTxt} — ${ev.sub}`;
    else if (ev.type === 'yellow') txt = `${minTxt} Yellow — ${ev.sub}`;
    else if (ev.type === 'red') txt = `${minTxt} ${ev.title}`;
    else if (ev.type === 'ht' || ev.type === 'ft') txt = `${ev.title}: ${ev.sub}`;
    else if (ev.type === 'big') txt = `${minTxt} ${ev.title}`;
    if (txt) { App.ticker.unshift(txt); App.ticker = App.ticker.slice(0, 12); renderTicker(); }
    if (ev.type === 'goal' || ev.type === 'ft') {
      renderGroups(); renderBoot(); renderPicks();
      if (App.tab === 'road') renderRoad();
    }
    if (ev.type === 'goal') {
      goalFlash(m, ev);
      if (m.ui) {
        m.ui.scoreWrap.classList.remove('goal-pop');
        void m.ui.scoreWrap.offsetWidth;
        m.ui.scoreWrap.classList.add('goal-pop');
      }
    }
  };

  /* ============================ feed match state ============================ */

  function createFeedMatch(fx) {
    const home = WC.TEAMS[fx.home], away = WC.TEAMS[fx.away];
    return {
      fixture: fx, home, away, homeAdv: fx.home === 'MEX' ? 4 : 2,
      colors: teamColors(home, away), mode: 'feed',
      period: 'pre', minute: 0, score: [0, 0],
      realStats: null, events: [], seen: new Set(), goalLog: [],
      feedMinute: null, feedAt: 0, espn: { homeId: '', awayId: '' },
      players: [[], []], ui: null, booting: false
    };
  }

  function pushFeedEvent(m, ev) {
    m.events.push(ev);
    if (!m.booting && typeof onKeyEvent === 'function' && ['goal', 'yellow', 'red', 'ht', 'ft'].includes(ev.type)) onKeyEvent(m, ev);
  }

  /* apply one normalized feed event onto a feed match state */
  function applyFeed(m, ne, quiet) {
    const wasBooting = m.booting;
    if (quiet) m.booting = true;
    try {
      m.espn.homeId = ne.homeId; m.espn.awayId = ne.awayId;

      let newPeriod;
      if (ne.state === 'pre') newPeriod = 'pre';
      else if (ne.state === 'post') newPeriod = 'FT';
      else newPeriod = ne.halftime ? 'HT' : (ne.period >= 2 ? '2H' : '1H');

      if (newPeriod !== 'pre' && m.period === 'pre' && !m.events.length) {
        pushFeedEvent(m, { min: 0, side: -1, type: 'ko', title: 'Kickoff', sub: `${m.home.name} v ${m.away.name} under way${m.fixture.venue ? ' at ' + m.fixture.venue : ''}` });
      }

      /* clock */
      if (ne.clockMin != null && newPeriod !== 'pre') {
        m.feedMinute = ne.clockMin; m.feedAt = Date.now();
        m.minute = ne.clockMin;
      } else if (newPeriod === 'HT') { m.minute = 45; m.feedMinute = null; }
      else if (newPeriod === 'FT') { m.minute = Math.max(m.minute, 90); m.feedMinute = null; }

      /* new goal/card details */
      const details = (ne.details || []).slice().sort((a, b) => (a.min || 0) - (b.min || 0));
      for (const d of details) {
        if (m.seen.has(d.key)) continue;
        m.seen.add(d.key);
        const rawSide = d.teamId === ne.homeId ? 0 : d.teamId === ne.awayId ? 1 : -1;
        if (d.goal && rawSide !== -1) {
          const side = d.ownGoal ? 1 - rawSide : rawSide;
          m.score[side]++;
          const team = side === 0 ? m.home : m.away;
          if (d.player) m.goalLog.push({ name: d.player, team });
          pushFeedEvent(m, {
            min: d.min || 0, side, type: 'goal',
            title: `GOAL — ${team.name}`,
            sub: `${d.player ? d.player + ' ' : ''}${d.penalty ? 'converts the penalty' : d.ownGoal ? '(own goal)' : 'scores'} · ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}`
          });
        } else if (d.red && rawSide !== -1) {
          const team = rawSide === 0 ? m.home : m.away;
          pushFeedEvent(m, { min: d.min || 0, side: rawSide, type: 'red', title: `RED CARD — ${team.name}`, sub: d.player || 'Down to ten' });
        } else if (d.yellow && rawSide !== -1) {
          const team = rawSide === 0 ? m.home : m.away;
          pushFeedEvent(m, { min: d.min || 0, side: rawSide, type: 'yellow', title: `Yellow card — ${team.name}`, sub: d.player || '' });
        }
      }

      /* absolute score sync — the feed total is the truth */
      if (Array.isArray(ne.score)) {
        for (const side of [0, 1]) {
          while (m.score[side] < ne.score[side]) {
            m.score[side]++;
            const team = side === 0 ? m.home : m.away;
            pushFeedEvent(m, {
              min: Math.round(m.minute) || 0, side, type: 'goal',
              title: `GOAL — ${team.name}`,
              sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}`
            });
          }
          if (m.score[side] > ne.score[side]) m.score[side] = ne.score[side]; // VAR correction
        }
      }

      /* period transition events */
      if (newPeriod !== m.period) {
        if (newPeriod === 'HT') pushFeedEvent(m, { min: 45, side: -1, type: 'ht', title: 'Half-time', sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code} at the break` });
        if (newPeriod === '2H' && m.period === 'HT') pushFeedEvent(m, { min: 45, side: -1, type: 'ko', title: 'Second half', sub: 'Back underway' });
        if (newPeriod === 'FT') pushFeedEvent(m, { min: Math.max(90, Math.round(m.minute)), side: -1, type: 'ft', title: 'Full-time', sub: `Final: ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}` });
        m.period = newPeriod;
      }

      if (ne.attendance) m.fixture.attendance = ne.attendance.toLocaleString('en-US');
    } finally {
      m.booting = wasBooting;
    }
  }

  /* clock keeps moving between polls */
  function tickFeed(m) {
    if (m.period !== '1H' && m.period !== '2H') return;
    if (m.feedMinute == null) return;
    const cap = m.period === '1H' ? 53 : 100;
    m.minute = Math.min(m.feedMinute + (Date.now() - m.feedAt) / 60000, m.feedMinute + 2.5, cap);
  }

  function ensureMatch(fx) {
    let m = App.matchById[fx.id];
    if (m) return m;
    if (fx.feed && App.feedOn) {
      m = createFeedMatch(fx);
      const ne = App.schedule.get(fx.espnId);
      if (ne && ne.state !== 'pre') applyFeed(m, ne, true);
    } else {
      m = createMatch(fx);
      m.booting = true;
      tickReal(m, nowMs());
      m.booting = false;
    }
    App.matchById[fx.id] = m;
    App.matches.push(m);
    return m;
  }

  /* ============================ feed polling ============================ */

  let pollBusy = false;
  async function pollActiveDay(initial) {
    if (!App.feedOn || pollBusy) return;
    pollBusy = true;
    try {
      const day = currentDay();
      const map = await Feed.pollDay(day.fixtures);
      if (!map) { App.feedStale = true; return; }
      App.feedStale = false;
      let layoutChanged = false;
      for (const fx of day.fixtures) {
        const ne = map.get(fx.espnId);
        if (!ne) continue;
        App.schedule.set(ne.id, ne);
        if (ne.state === 'pre') continue;
        const existed = !!App.matchById[fx.id];
        const m = ensureMatch(fx);
        const before = m.period;
        if (existed || !initial) applyFeed(m, ne, initial);
        if ((before === 'pre' || !existed) && m.period !== 'pre') layoutChanged = true;
      }
      if (layoutChanged && App.tab === 'matches' && !App.demo) renderMatchesView();

      /* keep the official tables fresh while matches are running */
      if (day.fixtures.some(fx => isLive(App.matchById[fx.id]))) refreshStandings();

      /* real team stats for matches that are underway or done */
      const targets = day.fixtures
        .map(fx => App.matchById[fx.id])
        .filter(m => m && m.mode === 'feed' && m.period !== 'pre')
        .slice(0, 8);
      await Promise.all(targets.map(async m => {
        const stats = await Feed.summary(m.fixture.espnId, m.espn.homeId, m.espn.awayId);
        if (stats && Object.keys(stats).length) m.realStats = stats;
      }));
    } finally {
      pollBusy = false;
    }
  }

  async function refreshSchedule() {
    if (!App.feedOn) return;
    const sched = await Feed.loadSchedule();
    if (!sched) return;
    for (const e of sched.events) App.schedule.set(e.id, e);
    if (Object.keys(sched.groups).length) App.groups = sched.groups;
    refreshStandings();
  }

  async function refreshStandings(force) {
    if (!App.feedOn) return;
    if (!force && Date.now() - App.standingsAt < 120000) return; // at most every 2 min
    App.standingsAt = Date.now();
    const standings = await Feed.loadStandings();
    if (standings) {
      App.standings = standings;
      if (App.tab === 'groups') renderGroups();
    }
  }

  /* ============================ ticker ============================ */

  function renderTicker() {
    const track = $('#tickerTrack');
    if (!track) return;
    const items = App.ticker.length ? App.ticker : ['Welcome to the World Cup — live scores update every minute'];
    const seq = items.map(t => `<span class="ticker__item">${ICONS.zap}${t}</span>`).join('');
    track.innerHTML = REDUCED ? seq : seq + seq;
  }

  /* ============================ match sections ============================ */

  const SIM_STAT_DEFS = [
    { key: 'shots', label: 'Shots' },
    { key: 'sot', label: 'On Target' },
    { key: 'xg', label: 'Expected Goals (xG)', fmt: v => v.toFixed(2) },
    { key: 'big', label: 'Big Chances' },
    { key: 'corners', label: 'Corners' },
    { key: 'saves', label: 'Saves' },
    { key: 'fouls', label: 'Fouls' },
    { key: 'offsides', label: 'Offsides' },
    { key: 'passes', label: 'Passes' },
    { key: 'acc', label: 'Pass Accuracy', fmt: v => Math.round(v) + '%' },
    { key: 'yellows', label: 'Yellow Cards' },
    { key: 'reds', label: 'Red Cards' }
  ];

  /* feed stats use ESPN's stat names */
  const FEED_STAT_DEFS = [
    { key: 'totalShots', label: 'Shots' },
    { key: 'shotsOnTarget', label: 'On Target' },
    { key: 'wonCorners', label: 'Corners' },
    { key: 'saves', label: 'Saves' },
    { key: 'foulsCommitted', label: 'Fouls' },
    { key: 'offsides', label: 'Offsides' },
    { key: 'totalPasses', label: 'Passes' },
    { key: 'possessionPct', label: 'Possession %', fmt: v => Math.round(v) + '%' },
    { key: 'yellowCards', label: 'Yellow Cards' },
    { key: 'redCards', label: 'Red Cards' }
  ];

  function buildMatchSection(m, index) {
    const fx = m.fixture;
    const feed = m.mode === 'feed';
    const sec = h('section', 'match');
    sec.id = 'match-' + fx.id;
    sec.style.setProperty('--tc-h', m.colors[0]);
    sec.style.setProperty('--tc-a', m.colors[1]);

    if (index > 0) {
      const div = h('div', 'match-divider reveal');
      div.innerHTML = `<span class="match-divider__line"></span><span class="match-divider__circle">${ICONS.ball}</span><span class="match-divider__label">NEXT MATCH</span><span class="match-divider__circle">${ICONS.ball}</span><span class="match-divider__line"></span>`;
      sec.appendChild(div);
    }

    /* sticky mini scoreboard */
    const stickyWrap = h('div', 'match-sticky');
    const sticky = h('div', 'match-sticky__bar');
    stickyWrap.appendChild(sticky);
    sec.appendChild(stickyWrap);

    /* hero scoreboard */
    const hero = h('header', 'match-hero reveal');
    const meta = h('div', 'match-meta');
    let modeChip;
    if (feed) modeChip = `<span class="chip chip--official">${ICONS.wifi}LIVE DATA · ESPN</span>`;
    else if (m.mode === 'sprint') modeChip = `<span class="chip chip--sim">${App.demo ? 'DEMO SIM · 6×' : 'ALT-UNIVERSE SIM · 6×'}</span>`;
    else if (m.script) modeChip = `<span class="chip chip--official">OFFICIAL RESULT</span>`;
    else modeChip = `<span class="chip chip--sim">SIM FALLBACK</span>`;
    meta.innerHTML = `
      <span class="chip chip--group">${fx.group ? 'GROUP ' + fx.group : 'WORLD CUP 26'}</span>${modeChip}
      ${fx.venue ? `<span class="chip">${ICONS.pin}${fx.venue}${fx.city ? ' · ' + fx.city : ''}</span>` : ''}
      ${fx.attendance ? `<span class="chip">${ICONS.users}${fx.attendance}</span>` : ''}
      ${fx.referee ? `<span class="chip">${ICONS.whistle}${fx.referee}</span>` : ''}
      ${fx.weather ? `<span class="chip">${fx.weather}</span>` : ''}`;
    hero.appendChild(meta);

    const board = h('div', 'scoreboard');
    const tH = h('div', 'scoreboard__team');
    tH.appendChild(flagEl(m.home, 'xl'));
    tH.appendChild(h('div', 'scoreboard__name', `<strong>${m.home.name}</strong><span>${m.home.code} · HOME</span>`));
    const center = h('div', 'scoreboard__center');
    const status = h('div', 'status-badge', '');
    const scoreWrap = h('div', 'scoreboard__score', '0&nbsp;–&nbsp;0');
    scoreWrap.setAttribute('aria-live', 'off');
    const clock = h('div', 'scoreboard__clock', `<span class="live-dot" aria-hidden="true"></span><span class="clock-text">00:00</span>`);
    const note = h('div', 'scoreboard__note', !feed && m.script && m.script.note ? m.script.note : '');
    const replay = h('button', 'btn-replay', `${ICONS.play} Run an alt-universe sim`);
    replay.type = 'button';
    replay.hidden = true;
    replay.addEventListener('click', () => replayMatch(m));
    center.append(status, scoreWrap, clock, note, replay);
    const tA = h('div', 'scoreboard__team scoreboard__team--away');
    tA.appendChild(flagEl(m.away, 'xl'));
    tA.appendChild(h('div', 'scoreboard__name', `<strong>${m.away.name}</strong><span>${m.away.code} · AWAY</span>`));
    board.append(tH, center, tA);
    hero.appendChild(board);

    /* win probability */
    const wp = h('div', 'winprob');
    wp.innerHTML = `
      <div class="winprob__labels"><span class="wp-h"></span><span class="wp-d"></span><span class="wp-a"></span></div>
      <div class="winprob__bar" role="img" aria-label="Live win probability">
        <div class="winprob__seg winprob__seg--h"></div><div class="winprob__seg winprob__seg--d"></div><div class="winprob__seg winprob__seg--a"></div>
      </div>`;
    hero.appendChild(wp);
    sec.appendChild(hero);

    /* odds panel */
    const odds = h('div', 'panel panel--accent reveal');
    odds.innerHTML = `<div class="panel__head">${ICONS.zap}<h3>Live Betting Lines</h3><span class="sim-badge" title="Model-derived from the live score — not a sportsbook">MODEL ODDS</span></div>`;
    const ml = h('div', 'odds-row');
    ml.innerHTML = `
      <div class="odds-cell"><span class="odds-cell__label">${m.home.code} WIN</span><span class="odds-val" data-k="h">—</span></div>
      <div class="odds-cell"><span class="odds-cell__label">DRAW</span><span class="odds-val" data-k="d">—</span></div>
      <div class="odds-cell"><span class="odds-cell__label">${m.away.code} WIN</span><span class="odds-val" data-k="a">—</span></div>`;
    const totals = h('div', 'odds-row odds-row--secondary');
    totals.innerHTML = `
      <div class="odds-cell"><span class="odds-cell__label" data-k="over-label">OVER 2.5</span><span class="odds-val" data-k="over">—</span></div>
      <div class="odds-cell"><span class="odds-cell__label" data-k="under-label">UNDER 2.5</span><span class="odds-val" data-k="under">—</span></div>
      <div class="odds-cell"><span class="odds-cell__label">BOTH TEAMS TO SCORE</span><span class="odds-val" data-k="btts">—</span></div>`;
    odds.append(ml, totals);

    const hasRosters = m.players[0].length && m.players[1].length;
    if (hasRosters) {
      const props = h('div', 'props');
      for (const side of [0, 1]) {
        const team = side === 0 ? m.home : m.away;
        const col = h('div', 'props__col');
        col.appendChild(h('div', 'props__head', `${team.code} — TO SCORE (REST OF MATCH)`));
        const list = h('div', 'props__list');
        list.dataset.side = String(side);
        col.appendChild(list);
        props.appendChild(col);
      }
      odds.appendChild(props);
    }
    odds.appendChild(h('p', 'fine-print', 'Lines are derived from the live score by our model, for entertainment — this is not a sportsbook.'));
    sec.appendChild(odds);

    /* stats panel */
    const statsPanel = h('div', 'panel panel--accent reveal');
    statsPanel.innerHTML = `<div class="panel__head">${ICONS.chart}<h3>Live Match Stats</h3><span class="sim-badge stats-src">${feed ? 'AWAITING FEED' : 'SIM'}</span><span class="panel__sub live-min"></span></div>`;
    const possRow = h('div', 'poss');
    possRow.innerHTML = `
      <div class="poss__nums"><span class="poss-h">—</span><span class="poss__label">POSSESSION</span><span class="poss-a">—</span></div>
      <div class="poss__bar"><div class="poss__fill" style="width:50%;background:${m.colors[0]}"></div></div>`;
    statsPanel.appendChild(possRow);
    const statList = h('div', 'stat-list');
    const defs = feed ? FEED_STAT_DEFS.filter(d => d.key !== 'possessionPct') : SIM_STAT_DEFS;
    for (const def of defs) {
      const row = h('div', 'stat-row');
      row.dataset.key = def.key;
      row.innerHTML = `
        <span class="stat-row__val stat-row__val--h">—</span>
        <div class="stat-row__mid">
          <span class="stat-row__label">${def.label}</span>
          <div class="tug"><div class="tug__h" style="background:${m.colors[0]}"></div><div class="tug__a" style="background:${m.colors[1]}"></div></div>
        </div>
        <span class="stat-row__val stat-row__val--a">—</span>`;
      statList.appendChild(row);
    }
    statsPanel.appendChild(statList);
    sec.appendChild(statsPanel);

    /* sim-only texture: momentum, shot map, player stat lines, MOTM */
    let canvas = null, dots = null;
    if (!feed) {
      const duo = h('div', 'grid2');
      const mom = h('div', 'panel reveal reveal-l');
      mom.innerHTML = `<div class="panel__head">${ICONS.flame}<h3>Attack Momentum</h3><span class="panel__sub">last 90'</span></div>`;
      canvas = document.createElement('canvas');
      canvas.className = 'momentum';
      canvas.height = 150;
      canvas.setAttribute('role', 'img');
      canvas.setAttribute('aria-label', 'Attack momentum chart');
      mom.appendChild(canvas);
      mom.appendChild(h('div', 'legend', `<span><i style="background:${m.colors[0]}"></i>${m.home.code}</span><span><i style="background:${m.colors[1]}"></i>${m.away.code}</span>`));
      const shot = h('div', 'panel reveal reveal-r');
      shot.innerHTML = `<div class="panel__head">${ICONS.target}<h3>Shot Map</h3><span class="panel__sub">● goal ○ attempt</span></div>`;
      const pitch = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      pitch.setAttribute('viewBox', '0 0 100 64');
      pitch.setAttribute('class', 'pitch');
      pitch.setAttribute('role', 'img');
      pitch.setAttribute('aria-label', 'Shot locations on the pitch');
      pitch.innerHTML = `
        <rect x="1" y="1" width="98" height="62" rx="2" class="pitch__line"/>
        <line x1="50" y1="1" x2="50" y2="63" class="pitch__line"/>
        <circle cx="50" cy="32" r="7" class="pitch__line"/>
        <rect x="1" y="18" width="12" height="28" class="pitch__line"/>
        <rect x="87" y="18" width="12" height="28" class="pitch__line"/>
        <g class="pitch__dots"></g>`;
      dots = pitch.querySelector('.pitch__dots');
      shot.appendChild(pitch);
      shot.appendChild(h('div', 'legend', `<span><i style="background:${m.colors[0]}"></i>${m.home.code} attack →</span><span><i style="background:${m.colors[1]}"></i>← ${m.away.code} attack</span>`));
      duo.append(mom, shot);
      sec.appendChild(duo);

      if (hasRosters) {
        const pgrid = h('div', 'grid2');
        for (const side of [0, 1]) {
          const team = side === 0 ? m.home : m.away;
          const panel = h('div', 'panel reveal ' + (side === 0 ? 'reveal-l' : 'reveal-r'));
          panel.innerHTML = `<div class="panel__head">${ICONS.users}<h3>${team.name} — Stat Lines</h3></div>`;
          const scroller = h('div', 'table-scroll');
          const tbl = h('table', 'ptable');
          tbl.innerHTML = `<thead><tr><th scope="col">Player</th><th scope="col">Pos</th><th scope="col">Sh</th><th scope="col">G</th><th scope="col">Pass</th><th scope="col">Acc</th><th scope="col">Rate</th></tr></thead><tbody data-side="${side}"></tbody>`;
          scroller.appendChild(tbl);
          panel.appendChild(scroller);
          pgrid.appendChild(panel);
        }
        sec.appendChild(pgrid);

        const motm = h('div', 'panel reveal');
        motm.innerHTML = `<div class="panel__head">${ICONS.crown}<h3>Crew Man of the Match</h3><span class="panel__sub">tap to vote — saved on this device</span></div><div class="motm" data-fx="${fx.id}"></div>`;
        sec.appendChild(motm);
      }
    }

    /* timeline */
    const tl = h('div', 'panel reveal');
    tl.innerHTML = `<div class="panel__head">${ICONS.clock}<h3>Match Timeline</h3><span class="panel__sub">${feed ? 'live feed' : 'sim feed'}</span></div><ol class="timeline" reversed></ol>`;
    sec.appendChild(tl);

    m.ui = {
      root: sec, sticky, stickyWrap, status, scoreWrap, clock: clock.querySelector('.clock-text'),
      liveDot: clock.querySelector('.live-dot'), replay, hero,
      wp, oddsPanel: odds, statsPanel, statList, possRow, canvas, dots,
      timeline: tl.querySelector('.timeline'),
      motm: sec.querySelector('.motm'),
      renderedEvents: 0, renderedShots: 0
    };

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => {
        const below = e.boundingClientRect.top < 0;
        stickyWrap.classList.toggle('show', !e.isIntersecting && below);
      }, { rootMargin: '-70px 0px 0px 0px' });
      io.observe(hero);
    }

    if (m.ui.motm) renderMotm(m);
    updateMatchUI(m, true);
    return sec;
  }

  function renderMotm(m) {
    if (!m.ui || !m.ui.motm) return;
    const all = [];
    for (const side of [0, 1]) {
      const team = side === 0 ? m.home : m.away;
      for (const p of m.players[side]) all.push({ p, team });
    }
    all.sort((a, b) => b.p.rating - a.p.rating);
    const current = App.motm[m.fixture.id];
    m.ui.motm.innerHTML = '';
    all.slice(0, 6).forEach(({ p, team }) => {
      const on = current === p.name;
      const b = h('button', 'motm-chip' + (on ? ' is-on' : ''), `${on ? ICONS.crown : ''}<span class="flag" style="background:${team.flag}"></span>${p.name}<small>${p.rating.toFixed(1)}</small>`);
      b.type = 'button';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.addEventListener('click', () => {
        App.motm[m.fixture.id] = on ? undefined : p.name;
        localStorage.setItem('wc26-motm', JSON.stringify(App.motm));
        renderMotm(m);
        if (!on) toast(`${p.name} is your Man of the Match`);
      });
      m.ui.motm.appendChild(b);
    });
  }

  function periodBadge(m) {
    if (m.period === 'FT') return [m.mode === 'feed' ? 'FULL-TIME · OFFICIAL' : m.script ? 'FULL-TIME · OFFICIAL' : 'FULL-TIME', 'ft'];
    if (m.period === 'HT') return ['HALF-TIME', 'ht'];
    return ['LIVE · ' + (m.period === '1H' ? '1ST HALF' : '2ND HALF'), 'live'];
  }

  function updateMatchUI(m, force) {
    const u = m.ui;
    if (!u || !document.body.contains(u.root) || m.period === 'pre') return;
    const feed = m.mode === 'feed';

    const [label, cls] = periodBadge(m);
    if (u.status.dataset.cls !== cls || force) {
      u.status.dataset.cls = cls;
      u.status.className = 'status-badge status-badge--' + cls;
      u.status.textContent = label;
      u.liveDot.style.display = cls === 'ft' ? 'none' : '';
      u.replay.hidden = cls !== 'ft';
      u.hero.classList.toggle('is-live', cls !== 'ft');
    }
    const scoreTxt = `${m.score[0]}&nbsp;–&nbsp;${m.score[1]}`;
    if (u.scoreWrap.innerHTML !== scoreTxt) u.scoreWrap.innerHTML = scoreTxt;
    u.clock.textContent = clockText(m);
    u.sticky.innerHTML = `
      <span class="ms-flag" style="background:${m.home.flag}"></span><b>${m.home.code}</b>
      <span class="ms-score">${m.score[0]} – ${m.score[1]}</span>
      <b>${m.away.code}</b><span class="ms-flag" style="background:${m.away.flag}"></span>
      <span class="ms-clock ${cls === 'live' ? 'is-live' : ''}">${clockText(m)}</span>`;

    /* odds + win prob (model-derived from the live score in every mode) */
    const o = liveOdds(m);
    const set = (k, txt, prob) => setOdds(u.oddsPanel.querySelector(`[data-k="${k}"]`), txt, prob);
    if (m.period === 'FT') {
      const res = m.score[0] > m.score[1] ? 'h' : m.score[0] < m.score[1] ? 'a' : 'd';
      for (const k of ['h', 'd', 'a']) {
        const node = u.oddsPanel.querySelector(`[data-k="${k}"]`);
        node.textContent = k === res ? 'WON' : 'LOST';
        node.classList.toggle('settled-won', k === res);
        node.classList.toggle('settled-lost', k !== res);
      }
      const tot = m.score[0] + m.score[1];
      u.oddsPanel.querySelector('[data-k="over"]').textContent = tot > 2.5 ? 'HIT' : 'MISS';
      u.oddsPanel.querySelector('[data-k="under"]').textContent = tot < 2.5 ? 'HIT' : 'MISS';
      u.oddsPanel.querySelector('[data-k="btts"]').textContent = (m.score[0] > 0 && m.score[1] > 0) ? 'YES ✓' : 'NO';
    } else {
      set('h', toAmerican(o.pH), o.pH);
      set('d', toAmerican(o.pD), o.pD);
      set('a', toAmerican(o.pA), o.pA);
      u.oddsPanel.querySelector('[data-k="over-label"]').textContent = 'OVER ' + o.line;
      u.oddsPanel.querySelector('[data-k="under-label"]').textContent = 'UNDER ' + o.line;
      set('over', toAmerican(o.pOver), o.pOver);
      set('under', toAmerican(1 - o.pOver), 1 - o.pOver);
      const bothScored = m.score[0] > 0 && m.score[1] > 0;
      const bttsNode = u.oddsPanel.querySelector('[data-k="btts"]');
      if (bothScored) { bttsNode.textContent = 'YES ✓'; bttsNode.classList.add('settled-won'); }
      else set('btts', toAmerican(o.pBtts), o.pBtts);
    }

    /* scorer props (only when rosters exist) */
    for (const side of [0, 1]) {
      const list = u.oddsPanel.querySelector(`.props__list[data-side="${side}"]`);
      if (!list) continue;
      const rows = o.scorers.filter(s => s.side === side);
      if (list.children.length !== rows.length) {
        list.innerHTML = '';
        for (let i = 0; i < rows.length; i++) {
          const row = h('div', 'prop-row');
          row.innerHTML = `<span class="prop-row__name"></span><span class="prop-row__goals"></span><span class="odds-val odds-val--sm"></span>`;
          list.appendChild(row);
        }
      }
      rows.forEach((s, i) => {
        const row = list.children[i];
        row.querySelector('.prop-row__name').textContent = `${s.name} · ${s.pos}`;
        row.querySelector('.prop-row__goals').innerHTML = s.goals ? `${ICONS.ball}<b>${s.goals}</b>` : '';
        if (m.period === 'FT') row.querySelector('.odds-val').textContent = s.goals ? 'SCORED' : '—';
        else setOdds(row.querySelector('.odds-val'), s.odds, s.prob);
      });
    }

    /* win prob bar */
    const ph = Math.round(o.pH * 100), pa = Math.round(o.pA * 100), pd = Math.max(0, 100 - ph - pa);
    u.wp.querySelector('.wp-h').textContent = `${m.home.code} ${ph}%`;
    u.wp.querySelector('.wp-d').textContent = `DRAW ${pd}%`;
    u.wp.querySelector('.wp-a').textContent = `${m.away.code} ${pa}%`;
    u.wp.querySelector('.winprob__seg--h').style.width = ph + '%';
    u.wp.querySelector('.winprob__seg--h').style.background = m.colors[0];
    u.wp.querySelector('.winprob__seg--d').style.width = pd + '%';
    u.wp.querySelector('.winprob__seg--a').style.width = pa + '%';
    u.wp.querySelector('.winprob__seg--a').style.background = m.colors[1];

    /* stats */
    u.statsPanel.querySelector('.live-min').textContent = m.period === 'FT' ? 'final' : `updating · ${clockText(m)}`;
    const srcBadge = u.statsPanel.querySelector('.stats-src');
    if (feed) {
      const got = m.realStats && Object.keys(m.realStats).length;
      srcBadge.textContent = got ? 'LIVE FEED' : 'AWAITING FEED';
      srcBadge.classList.toggle('sim-badge--live', !!got);
    }

    if (feed) {
      const rs = m.realStats || {};
      const poss = rs.possessionPct;
      const pH2 = u.possRow.querySelector('.poss-h'), pA2 = u.possRow.querySelector('.poss-a');
      if (poss) {
        if (!pH2.dataset.counting) pH2.textContent = Math.round(poss[0]) + '%';
        if (!pA2.dataset.counting) pA2.textContent = Math.round(poss[1]) + '%';
        u.possRow.querySelector('.poss__fill').style.width = Math.round(poss[0]) + '%';
      }
      for (const def of FEED_STAT_DEFS) {
        if (def.key === 'possessionPct') continue;
        const row = u.statList.querySelector(`[data-key="${def.key}"]`);
        if (!row) continue;
        const pair = rs[def.key];
        const vhEl = row.querySelector('.stat-row__val--h'), vaEl = row.querySelector('.stat-row__val--a');
        if (!pair) { vhEl.textContent = '—'; vaEl.textContent = '—'; continue; }
        const fmt = def.fmt || (v => String(Math.round(v)));
        if (!vhEl.dataset.counting) vhEl.textContent = fmt(pair[0]);
        if (!vaEl.dataset.counting) vaEl.textContent = fmt(pair[1]);
        const sum = pair[0] + pair[1];
        row.querySelector('.tug__h').style.width = (sum ? pair[0] / sum * 50 : 0) + '%';
        row.querySelector('.tug__a').style.width = (sum ? pair[1] / sum * 50 : 0) + '%';
      }
    } else {
      const possH = Math.round(m.poss);
      const pH2 = u.possRow.querySelector('.poss-h'), pA2 = u.possRow.querySelector('.poss-a');
      if (!pH2.dataset.counting) pH2.textContent = possH + '%';
      if (!pA2.dataset.counting) pA2.textContent = (100 - possH) + '%';
      u.possRow.querySelector('.poss__fill').style.width = possH + '%';
      for (const def of SIM_STAT_DEFS) {
        const row = u.statList.querySelector(`[data-key="${def.key}"]`);
        if (!row) continue;
        const vh = m.stats[def.key][0], va = m.stats[def.key][1];
        const fmt = def.fmt || (v => String(Math.round(v)));
        const vhEl = row.querySelector('.stat-row__val--h'), vaEl = row.querySelector('.stat-row__val--a');
        if (!vhEl.dataset.counting) vhEl.textContent = fmt(vh);
        if (!vaEl.dataset.counting) vaEl.textContent = fmt(va);
        const sum = vh + va;
        row.querySelector('.tug__h').style.width = (sum ? vh / sum * 50 : 0) + '%';
        row.querySelector('.tug__a').style.width = (sum ? va / sum * 50 : 0) + '%';
      }
    }

    /* shot map (sim texture only) */
    if (u.dots) {
      while (u.renderedShots < m.shotMap.length) {
        const s = m.shotMap[u.renderedShots++];
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', (s.x || 50).toFixed(1));
        c.setAttribute('cy', (s.y || 32).toFixed(1));
        c.setAttribute('r', s.goal ? 2.4 : 1.4);
        c.setAttribute('class', 'shot-dot' + (s.goal ? ' shot-dot--goal' : ''));
        c.setAttribute('fill', s.goal ? m.colors[s.side] : 'transparent');
        c.setAttribute('stroke', m.colors[s.side]);
        u.dots.appendChild(c);
      }
    }

    /* player tables (sim texture only) */
    if (!feed) {
      for (const side of [0, 1]) {
        const tbody = u.root.querySelector(`.ptable tbody[data-side="${side}"]`);
        if (!tbody) continue;
        const roster = m.players[side];
        if (tbody.children.length !== roster.length) {
          tbody.innerHTML = roster.map(() =>
            `<tr><td class="pt-name"></td><td class="pt-pos"></td><td></td><td class="pt-g"></td><td></td><td></td><td><span class="rating"></span></td></tr>`
          ).join('');
        }
        roster.forEach((p, i) => {
          const tr = tbody.children[i];
          const cards = (p.yellow ? '<span class="mini-card mini-card--y"></span>' : '') + (p.red ? '<span class="mini-card mini-card--r"></span>' : '');
          tr.children[0].innerHTML = `${p.name}${p.goals ? ' ' + ICONS.ball : ''}${cards}`;
          tr.children[1].textContent = p.pos;
          tr.children[2].textContent = p.shots;
          tr.children[3].textContent = p.goals;
          tr.children[3].classList.toggle('has-goal', p.goals > 0);
          tr.children[4].textContent = p.passes;
          tr.children[5].textContent = Math.round(p.acc) + '%';
          const r = tr.children[6].firstElementChild;
          r.textContent = p.rating.toFixed(1);
          r.className = 'rating ' + (p.rating >= 7.4 ? 'rating--hot' : p.rating < 6.3 ? 'rating--cold' : '');
        });
      }
    }

    /* timeline (newest first) */
    while (u.renderedEvents < m.events.length) {
      const ev = m.events[u.renderedEvents++];
      const li = h('li', 'tl-item tl-item--' + ev.type);
      const icon = { goal: ICONS.ball, yellow: ICONS.card, red: ICONS.card, sub: ICONS.sub, big: ICONS.flame, corner: ICONS.target, ht: ICONS.whistle, ft: ICONS.whistle, ko: ICONS.whistle }[ev.type] || ICONS.clock;
      li.dataset.side = ev.side === 0 ? 'h' : ev.side === 1 ? 'a' : 'n';
      li.innerHTML = `<span class="tl-min">${ev.min ? ev.min + "'" : '—'}</span><span class="tl-icon">${icon}</span><div class="tl-body"><b>${ev.title}</b><span>${ev.sub || ''}</span></div>`;
      u.timeline.prepend(li);
      if (!REDUCED && !force) li.classList.add('tl-enter');
    }
  }

  function drawMomentum(m) {
    const u = m.ui;
    if (!u || !u.canvas || !document.body.contains(u.canvas)) return;
    const c = u.canvas, dpr = window.devicePixelRatio || 1;
    const w = c.clientWidth, ht = c.clientHeight;
    if (!w) return;
    if (c.width !== w * dpr) { c.width = w * dpr; c.height = ht * dpr; }
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, ht);
    const mid = ht / 2;
    ctx.strokeStyle = 'rgba(148,163,184,.25)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid); ctx.stroke();
    const x45 = 45 / 96 * w;
    ctx.strokeStyle = 'rgba(148,163,184,.15)';
    ctx.beginPath(); ctx.moveTo(x45, 4); ctx.lineTo(x45, ht - 4); ctx.stroke();
    const bw = Math.max(2, w / 96 - 1.5);
    for (const pt of m.momentum) {
      const x = pt.min / 96 * w;
      const v = clamp(pt.v, -100, 100) / 100;
      if (v >= 0) {
        ctx.fillStyle = m.colors[0] + 'cc';
        ctx.fillRect(x, mid - v * (mid - 6), bw, v * (mid - 6));
      } else {
        ctx.fillStyle = m.colors[1] + 'cc';
        ctx.fillRect(x, mid, bw, -v * (mid - 6));
      }
    }
  }

  function replayMatch(m) {
    const fresh = createMatch(m.fixture, { mode: 'sprint', seed: (Math.random() * 2 ** 31) | 0, ignoreOfficial: true });
    RNG = fresh.rng;
    fresh.booting = true;
    kickoffEvent(fresh);
    fresh.booting = false;
    /* replays live in the demo slot so the real feed state stays untouched */
    App.demoMatches[m.fixture.id] = fresh;
    fresh._replayOnly = true;
    const old = m.ui.root;
    const sec = buildMatchSection(fresh, 0);
    old.replaceWith(sec);
    sec.querySelectorAll('.reveal').forEach(r => r.classList.add('in'));
    drawMomentum(fresh);
    toast('Alt-universe sim running — anything can happen');
  }

  /* ============================ matches view ============================ */

  function stageFor(dayId) {
    if (dayId <= '2026-06-27') return 'Group Stage';
    if (dayId <= '2026-07-03') return 'Round of 32';
    if (dayId <= '2026-07-07') return 'Round of 16';
    if (dayId <= '2026-07-11') return 'Quarterfinals';
    if (dayId <= '2026-07-15') return 'Semifinals';
    if (dayId <= '2026-07-18') return 'Third Place';
    return 'The Final';
  }

  /* bracket-stage key for a calendar day; 'final' covers third place + the final */
  function stageKeyFor(dayId) {
    if (dayId <= '2026-06-27') return 'group';
    if (dayId <= '2026-07-03') return 'r32';
    if (dayId <= '2026-07-07') return 'r16';
    if (dayId <= '2026-07-11') return 'qf';
    if (dayId <= '2026-07-15') return 'sf';
    return 'final';
  }

  function stageFixtures(stageKey) {
    const out = [];
    for (const day of App.days) {
      if (stageKeyFor(day.id) !== stageKey) continue;
      for (const fx of day.fixtures) out.push({ fx, dayId: day.id });
    }
    return out;
  }

  function renderMatchesView() {
    const view = $('#view-matches');
    view.innerHTML = '';
    const day = currentDay();

    /* hero strip */
    const hero = h('div', 'dayhero reveal');
    hero.innerHTML = `
      <div class="dayhero__left">
        <div class="dayhero__kicker">${ICONS.trophy} FIFA WORLD CUP 26™ · ${stageFor(day.id).toUpperCase()} ${App.feedOn ? '· <span class="feed-pill">' + (App.feedStale ? 'FEED STALE' : 'LIVE FEED') + '</span>' : '· SIM MODE'}</div>
        <h2 class="dayhero__title">${day.id === '2026-06-11' ? 'OPENING DAY.<br><span>IT ALL STARTS HERE.</span>' : (day.title || day.id).toUpperCase() + '<span>.</span>'}</h2>
        <div class="dayhero__status" id="heroStatus"></div>
      </div>`;
    view.appendChild(hero);

    /* full-tournament day strip */
    const strip = h('div', 'dayscroll reveal');
    const chips = h('div', 'dayscroll__track');
    chips.id = 'dayChips';
    chips.setAttribute('aria-label', 'Pick a matchday');
    for (const d of App.days) {
      const liveNow = d.fixtures.some(fx => isLive(App.matchById[fx.id]));
      const b = h('button', 'day-chip' + (d.id === day.id ? ' is-on' : ''),
        `<span class="day-chip__top">${d.label}${liveNow ? '<span class="live-dot live-dot--sm"></span>' : ''}</span><small>${d.fixtures.length} ${d.fixtures.length === 1 ? 'match' : 'matches'}</small>`);
      b.type = 'button';
      b.setAttribute('aria-pressed', d.id === day.id ? 'true' : 'false');
      b.addEventListener('click', () => {
        App.dayId = d.id;
        if (App.demo) buildDemoDay();
        renderMatchesView();
        if (App.feedOn && !App.demo) pollActiveDay();
        window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
      });
      chips.appendChild(b);
    }
    strip.appendChild(chips);
    view.appendChild(strip);
    requestAnimationFrame(() => {
      const on = chips.querySelector('.is-on');
      if (on) chips.scrollLeft = Math.max(0, on.offsetLeft - chips.clientWidth / 2 + on.clientWidth / 2);
    });

    /* quick-jump strip */
    const dayMatches = day.fixtures.map(fx => getMatch(fx.id)).filter(m => m && m.period !== 'pre');
    if (dayMatches.length > 1) {
      const jump = h('div', 'jumpstrip reveal');
      dayMatches.forEach(m => {
        const a = h('a', 'jump-card', '');
        a.href = '#match-' + m.fixture.id;
        a.dataset.mid = m.fixture.id;
        jump.appendChild(a);
      });
      view.appendChild(jump);
    }

    /* match sections + upcoming cards, in fixture order */
    let grid = null, sectionIndex = 0;
    for (const fx of day.fixtures) {
      let m = getMatch(fx.id);
      if (!m && App.feedOn && fx.feed) {
        const ne = App.schedule.get(fx.espnId);
        if (ne && ne.state !== 'pre') m = ensureMatch(fx);
      } else if (!m && !App.feedOn) {
        m = ensureMatch(fx);
      }
      if (!m || m.period === 'pre') {
        if (!grid) { grid = h('div', 'upcoming-grid'); view.appendChild(grid); }
        grid.appendChild(buildUpcomingCard(fx));
      } else {
        grid = null;
        view.appendChild(buildMatchSection(m, sectionIndex++));
      }
    }
    dayMatches.forEach(m => drawMomentum(m));

    view.appendChild(buildTrivia());

    updateJumpCards();
    updateHeroStatus();
    observeReveals(view);
  }

  function buildUpcomingCard(fx) {
    const home = WC.TEAMS[fx.home], away = WC.TEAMS[fx.away];
    const tbd = fx.home === 'TBD' || fx.away === 'TBD';
    const card = h('article', 'panel panel--accent upcoming reveal');
    card.style.setProperty('--tc-h', home.color);
    card.style.setProperty('--tc-a', teamColors(home, away)[1]);
    let oddsRow = '';
    if (!tbd) {
      const p = probsFor(home.strength, away.strength, fx.home === 'MEX' ? 4 : 2, 0, 0, 0);
      oddsRow = `
      <div class="odds-row odds-row--secondary">
        <div class="odds-cell"><span class="odds-cell__label">${home.code} WIN</span><span class="odds-val">${toAmerican(p.pH)}</span></div>
        <div class="odds-cell"><span class="odds-cell__label">DRAW</span><span class="odds-val">${toAmerican(p.pD)}</span></div>
        <div class="odds-cell"><span class="odds-cell__label">${away.code} WIN</span><span class="odds-val">${toAmerican(p.pA)}</span></div>
      </div>`;
    }
    const stars = (WC.STARS[fx.home] || []).length || (WC.STARS[fx.away] || []).length
      ? `<div class="upcoming__stars">${ICONS.flame} Ones to watch: <b>${(WC.STARS[fx.home] || ['—']).join(', ')}</b> vs <b>${(WC.STARS[fx.away] || ['—']).join(', ')}</b></div>` : '';
    card.innerHTML = `
      <div class="upcoming__meta"><span class="chip chip--group">${fx.group ? 'GROUP ' + fx.group : stageFor((fx.kickoffUTC || '').slice(0, 10)).toUpperCase()}</span>${fx.venue ? `<span class="chip">${ICONS.pin}${fx.venue}${fx.city ? ' · ' + fx.city : ''}</span>` : ''}</div>
      <div class="upcoming__teams">
        <div class="upcoming__team"><span class="flag flag--lg" style="background:${home.flag}" role="img" aria-label="${home.name} flag"></span><b>${home.name}</b></div>
        <div class="upcoming__vs"><span class="upcoming__count" data-kick="${fx.kickoffUTC}">—</span><small>${fx.kickLocal || ''}</small></div>
        <div class="upcoming__team"><span class="flag flag--lg" style="background:${away.flag}" role="img" aria-label="${away.name} flag"></span><b>${away.name}</b></div>
      </div>
      ${oddsRow}${stars}`;
    return card;
  }

  function buildTrivia() {
    const wrap = h('div', 'panel panel--trivia reveal');
    wrap.innerHTML = `<div class="panel__head">${ICONS.bulb}<h3>Kickoff Trivia</h3><span class="panel__sub">for the group chat</span></div>
      <p class="trivia__q"></p><p class="trivia__a" hidden></p>
      <div class="trivia__btns">
        <button type="button" class="btn-ghost" data-t="reveal">${ICONS.zap} Reveal answer</button>
        <button type="button" class="btn-ghost" data-t="next">Next question ${ICONS.chev}</button>
      </div>`;
    const qEl = wrap.querySelector('.trivia__q'), aEl = wrap.querySelector('.trivia__a');
    const sync = () => {
      const t = WC.TRIVIA[App.triviaIdx % WC.TRIVIA.length];
      qEl.textContent = t.q;
      aEl.textContent = t.a;
      aEl.hidden = !App.triviaOpen;
    };
    wrap.querySelector('[data-t="reveal"]').addEventListener('click', () => { App.triviaOpen = !App.triviaOpen; sync(); });
    wrap.querySelector('[data-t="next"]').addEventListener('click', () => { App.triviaIdx++; App.triviaOpen = false; sync(); });
    sync();
    return wrap;
  }

  function updateJumpCards() {
    document.querySelectorAll('.jump-card').forEach(a => {
      const m = getMatch(a.dataset.mid);
      if (!m) return;
      const live = isLive(m);
      a.innerHTML = `<span class="jump-card__live ${live ? '' : 'is-ft'}">${live ? '<span class="live-dot"></span>LIVE ' + clockText(m) : 'FULL-TIME'}</span>
        <b>${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}</b><small>${m.fixture.venue || ''}</small>`;
    });
  }

  function updateHeroStatus() {
    const el = $('#heroStatus');
    if (!el) return;
    const day = currentDay();
    const live = day.fixtures.map(fx => getMatch(fx.id)).filter(isLive);
    if (live.length) {
      el.innerHTML = `<span class="hero-live"><span class="live-dot"></span>${live.length === 1 ? '1 MATCH LIVE NOW' : live.length + ' MATCHES LIVE NOW'}</span>${App.feedOn ? ' <span class="hero-feed">scores refresh every 60s</span>' : ''}`;
      return;
    }
    const preFx = day.fixtures
      .filter(fx => { const m = getMatch(fx.id); return !m || m.period === 'pre'; })
      .sort((a, b) => new Date(a.kickoffUTC) - new Date(b.kickoffUTC))
      .find(fx => new Date(fx.kickoffUTC).getTime() > nowMs() - 3 * 3600e3);
    if (preFx) {
      el.innerHTML = `${ICONS.clock} NEXT KICKOFF IN <b data-kick="${preFx.kickoffUTC}">—</b> — ${preFx.home} v ${preFx.away}
        ${App.demo ? '' : `<button type="button" class="btn-ghost btn-ghost--sm" id="demoHint">${ICONS.play} CAN'T WAIT? RUN A DEMO SIM</button>`}`;
      const hint = el.querySelector('#demoHint');
      if (hint) hint.addEventListener('click', toggleDemo);
    } else {
      el.innerHTML = `${ICONS.check} MATCHDAY COMPLETE — FULL RESULTS BELOW`;
    }
  }

  function updateCountdowns() {
    document.querySelectorAll('[data-kick]').forEach(node => {
      const diff = new Date(node.dataset.kick).getTime() - nowMs();
      if (diff <= 0) { node.textContent = 'KICKOFF'; return; }
      const hrs = Math.floor(diff / 3.6e6), min = Math.floor(diff % 3.6e6 / 6e4), sec = Math.floor(diff % 6e4 / 1e3);
      node.textContent = `${hrs}H ${String(min).padStart(2, '0')}M ${String(sec).padStart(2, '0')}S`;
    });
  }

  /* ============================ groups ============================ */

  /* every played/playing result, from the feed schedule or the sim fallback */
  function resultEntries() {
    if (App.feedOn) {
      return [...App.schedule.values()]
        .filter(e => e.state !== 'pre')
        .map(e => ({ group: e.group, home: e.home, away: e.away, score: e.score, live: e.state === 'in' }));
    }
    return App.matches
      .filter(m => m.period !== 'pre' && m.mode !== 'sprint')
      .map(m => ({ group: m.fixture.group, home: m.fixture.home, away: m.fixture.away, score: m.score, live: m.period !== 'FT' }));
  }

  function liveTable(groupKey, entries) {
    const codes = App.groups[groupKey] || [];
    const rows = codes.map(c => ({ code: c, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, live: false }));
    for (const e of entries) {
      if (e.group !== groupKey) continue;
      const rh = rows.find(r => r.code === e.home);
      const ra = rows.find(r => r.code === e.away);
      if (!rh || !ra) continue;
      const [gh, ga] = e.score;
      for (const [r, f, a] of [[rh, gh, ga], [ra, ga, gh]]) {
        r.p++; r.gf += f; r.ga += a;
        if (e.live) r.live = true;
        if (f > a) { r.w++; r.pts += 3; } else if (f === a) { r.d++; r.pts += 1; } else r.l++;
      }
    }
    rows.sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf);
    return rows;
  }

  function groupRow(r, i, t, live) {
    const tr = h('tr', live ? 'is-live' : '');
    tr.innerHTML = `
      <td class="gt-team"><span class="gt-rank ${i < 2 ? 'gt-rank--q' : ''}">${i + 1}</span><span class="flag" style="background:${t.flag}"></span>${t.short}${live ? '<span class="live-dot live-dot--sm"></span>' : ''}</td>
      <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gd > 0 ? '+' : ''}${r.gd}</td><td class="gt-pts">${r.pts}</td>`;
    return tr;
  }

  function groupPanel(label, rows, liveCodes) {
    const anyLive = rows.some(r => liveCodes.has(r.code));
    const panel = h('div', 'panel reveal');
    panel.innerHTML = `<div class="panel__head"><h3>${label}</h3>${anyLive ? '<span class="sim-badge sim-badge--live">LIVE</span>' : ''}</div>`;
    const tbl = h('table', 'gtable');
    tbl.innerHTML = `<thead><tr><th scope="col">Team</th><th scope="col">P</th><th scope="col">W</th><th scope="col">D</th><th scope="col">L</th><th scope="col">GD</th><th scope="col">Pts</th></tr></thead>`;
    const tb = h('tbody');
    rows.forEach((r, i) => {
      const t = WC.TEAMS[r.code];
      if (t) tb.appendChild(groupRow(r, i, t, liveCodes.has(r.code)));
    });
    tbl.appendChild(tb);
    panel.appendChild(tbl);
    return panel;
  }

  /* teams currently in an in-progress match */
  function liveTeamCodes() {
    const live = new Set();
    if (App.feedOn) {
      for (const e of App.schedule.values()) {
        if (e.state === 'in') { live.add(e.home); live.add(e.away); }
      }
    } else {
      for (const m of App.matches) {
        if (isLive(m) && m.mode !== 'sprint') { live.add(m.fixture.home); live.add(m.fixture.away); }
      }
    }
    return live;
  }

  function renderGroups() {
    const view = $('#view-groups');
    if (!view) return;
    const official = App.standings && App.standings.length;
    view.innerHTML = `<div class="view-head reveal">${ICONS.trophy}<h2>Group Standings</h2><span class="panel__sub">${official ? 'official tables · live matches marked' : 'computed from results'} · top 2 + best thirds advance</span></div>`;
    const grid = h('div', 'groups-grid');
    const liveCodes = liveTeamCodes();

    if (official) {
      /* authoritative group memberships + table order from the feed */
      for (const g of App.standings) {
        grid.appendChild(groupPanel(g.label, g.rows, liveCodes));
      }
    } else {
      const entries = resultEntries();
      for (const g of Object.keys(App.groups).sort()) {
        const table = liveTable(g, entries).map(r => ({ ...r, gd: r.gf - r.ga }));
        if (!table.length) continue;
        grid.appendChild(groupPanel('GROUP ' + g, table, liveCodes));
      }
    }
    view.appendChild(grid);
    observeReveals(view);
  }

  /* ============================ road to the final ============================ */

  const TBD_TEAM = { code: 'TBD', name: 'To be decided', short: 'TBD', flag: 'linear-gradient(135deg,#334155 0 50%,#475569 50%)' };

  function bracketCard(item) {
    const fx = item.fx;
    const ne = App.feedOn && fx.espnId ? App.schedule.get(fx.espnId) : null;
    const state = ne ? ne.state : 'pre';
    const score = ne ? ne.score : [0, 0];
    const card = h('button', 'bracket-match');
    card.type = 'button';
    const when = new Date(fx.kickoffUTC);
    const dateTxt = isNaN(when) ? '' : when.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const badge = state === 'in'
      ? '<span class="bracket-match__badge is-live"><span class="live-dot live-dot--sm"></span>LIVE</span>'
      : state === 'post' ? '<span class="bracket-match__badge">FT</span>'
      : `<span class="bracket-match__badge">${dateTxt}</span>`;
    const row = (code, sc, winner) => {
      const t = WC.TEAMS[code] || TBD_TEAM;
      const tbd = !code || code === 'TBD';
      return `<span class="bracket-team ${tbd ? 'is-tbd' : ''} ${winner ? 'is-winner' : ''}">
        <span class="flag" style="background:${t.flag}"></span>
        <span class="bracket-team__name">${tbd ? 'TBD' : t.short}</span>
        ${state !== 'pre' ? `<b class="bracket-team__score">${sc}</b>` : ''}</span>`;
    };
    const done = state === 'post';
    card.innerHTML = `
      <span class="bracket-match__top">${badge}<small>${fx.venue || ''}${fx.city ? ' · ' + fx.city : ''}</small></span>
      ${row(fx.home, score[0], done && score[0] > score[1])}
      ${row(fx.away, score[1], done && score[1] > score[0])}`;
    card.addEventListener('click', () => {
      App.dayId = item.dayId;
      if (App.demo) buildDemoDay();
      setTab('matches');
      if (App.feedOn && !App.demo) pollActiveDay();
    });
    return card;
  }

  function renderRoad() {
    const view = $('#view-road');
    view.innerHTML = `<div class="view-head reveal">${ICONS.zap}<h2>Road to the Final</h2><span class="panel__sub">104 matches · 48 teams · 3 nations · tap a stage to open its bracket</span></div>`;
    const strip = h('div', 'road');
    WC.STAGES.forEach((s, i) => {
      const isGroup = s.key === 'group';
      const open = App.roadStage === s.key;
      const card = h('button', 'road-stage reveal' + (s.final ? ' road-stage--final' : '') + (open ? ' is-open' : ''));
      card.type = 'button';
      card.style.transitionDelay = REDUCED ? '' : (i * 60) + 'ms';
      card.setAttribute('aria-expanded', isGroup ? 'false' : String(open));
      card.innerHTML = `
        <span class="road-stage__num">${s.final ? ICONS.trophy : String(i + 1).padStart(2, '0')}</span>
        <b>${s.name}</b><span class="road-stage__dates">${s.dates}</span>
        <small>${s.detail}</small>
        <span class="road-stage__games">${s.games} ${s.games === 1 ? 'match' : 'matches'}<span class="road-stage__cta">${isGroup ? 'VIEW GROUPS' : open ? 'CLOSE BRACKET' : 'VIEW BRACKET'} ${ICONS.chev}</span></span>`;
      card.addEventListener('click', () => {
        if (isGroup) { setTab('groups'); return; }
        App.roadStage = open ? null : s.key;
        renderRoad();
        if (!open) {
          const b = $('#bracketPanel');
          if (b) b.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
        }
      });
      strip.appendChild(card);
    });
    view.appendChild(strip);

    /* bracket for the selected knockout stage */
    if (App.roadStage) {
      const stage = WC.STAGES.find(s => s.key === App.roadStage);
      const items = stageFixtures(App.roadStage);
      const panel = h('div', 'panel panel--accent reveal');
      panel.id = 'bracketPanel';
      const slots = items.length * 2;
      const claimed = items.reduce((n, it) => n + (it.fx.home !== 'TBD' ? 1 : 0) + (it.fx.away !== 'TBD' ? 1 : 0), 0);
      panel.innerHTML = `<div class="panel__head">${ICONS.trophy}<h3>${stage.name} — Bracket</h3>
        <span class="panel__sub">${items.length ? `${claimed} of ${slots} spots claimed · updates as teams advance` : ''}</span></div>`;
      if (!items.length) {
        panel.appendChild(h('p', 'road-note', App.feedOn
          ? 'Fixtures for this stage haven\'t been scheduled in the feed yet — check back soon.'
          : 'Brackets need the live feed — they\'ll appear when it\'s reachable.'));
      } else {
        const grid = h('div', 'bracket');
        items.forEach(it => grid.appendChild(bracketCard(it)));
        panel.appendChild(grid);
        panel.appendChild(h('p', 'fine-print', 'Tap any matchup to open its matchday. TBD slots fill in automatically as teams qualify.'));
      }
      view.appendChild(panel);
    }

    const note = h('div', 'panel reveal');
    note.innerHTML = `<div class="panel__head">${ICONS.pin}<h3>The big one</h3></div>
      <p class="road-note">Sunday, <b>July 19, 2026</b> — the final at <b>MetLife Stadium</b>, New York / New Jersey.
      First 48-team World Cup, first ever Round of 32, and the first final on US soil since 1994.</p>`;
    view.appendChild(note);
    observeReveals(view);
  }

  /* ============================ golden boot ============================ */

  function renderBoot() {
    const view = $('#view-boot');
    if (!view) return;
    view.innerHTML = `<div class="view-head reveal">${ICONS.ball}<h2>Golden Boot Race</h2><span class="panel__sub">live tournament scorers + futures</span></div>`;

    /* aggregate goal scorers across the whole tournament feed */
    const tally = new Map();
    if (App.feedOn) {
      for (const e of App.schedule.values()) {
        for (const d of (e.details || [])) {
          if (!d.goal || !d.player || d.ownGoal) continue;
          const teamCode = d.teamId === e.homeId ? e.home : d.teamId === e.awayId ? e.away : null;
          const team = teamCode && WC.TEAMS[teamCode];
          const k = d.player + '|' + (teamCode || '');
          const cur = tally.get(k) || { name: d.player, team: team ? team.name : '', flag: team ? team.flag : '', goals: 0 };
          cur.goals++;
          tally.set(k, cur);
        }
      }
    } else {
      for (const m of App.matches) {
        if (m.mode === 'sprint') continue;
        for (const g of m.goalLog) {
          const k = g.name + '|' + g.team.code;
          const cur = tally.get(k) || { name: g.name, team: g.team.name, flag: g.team.flag, goals: 0 };
          cur.goals++;
          tally.set(k, cur);
        }
      }
    }
    const scorers = [...tally.values()].filter(s => s.name && s.name !== 'Unknown').sort((a, b) => b.goals - a.goals);

    const livePanel = h('div', 'panel reveal');
    livePanel.innerHTML = `<div class="panel__head"><h3>Tournament top scorers</h3><span class="sim-badge sim-badge--live">LIVE</span></div>`;
    if (!scorers.length) {
      livePanel.appendChild(h('p', 'road-note', 'No goals logged yet — the race is on.'));
    } else {
      const ol = h('ol', 'boot-list');
      scorers.slice(0, 12).forEach((s, i) => {
        const li = h('li', 'boot-row' + (i === 0 ? ' boot-row--lead' : ''));
        li.innerHTML = `<span class="boot-rank">${i + 1}</span><span class="flag" style="background:${s.flag}"></span>
          <span class="boot-name">${s.name}<small>${s.team}</small></span>
          <span class="boot-goals">${s.goals} ${ICONS.ball}</span>`;
        ol.appendChild(li);
      });
      livePanel.appendChild(ol);
    }
    view.appendChild(livePanel);

    const fut = h('div', 'panel reveal');
    fut.innerHTML = `<div class="panel__head">${ICONS.zap}<h3>Golden Boot futures</h3><span class="sim-badge">MODEL ODDS</span></div>`;
    const grid = h('div', 'futures-grid');
    WC.GOLDEN_BOOT_FUTURES.forEach(f => {
      grid.appendChild(h('div', 'odds-cell', `<span class="odds-cell__label">${f.player} · ${f.team}</span><span class="odds-val">${f.odds}</span>`));
    });
    fut.appendChild(grid);
    fut.appendChild(h('p', 'fine-print', 'Futures are model estimates for entertainment — not a sportsbook.'));
    view.appendChild(fut);
    observeReveals(view);
  }

  /* ============================ crew picks ============================ */

  function pickVerdict(fx) {
    const pickVal = App.picks[fx.id];
    if (!pickVal) return null;
    let state = null;
    if (App.feedOn && fx.espnId) {
      const ne = App.schedule.get(fx.espnId);
      if (ne && ne.state !== 'pre') state = { score: ne.score, done: ne.state === 'post' };
    } else {
      const m = App.matchById[fx.id];
      if (m && m.period !== 'pre') state = { score: m.score, done: m.period === 'FT' };
    }
    if (!state) return { label: 'LOCKED IN', cls: 'wait' };
    const lead = state.score[0] > state.score[1] ? 'h' : state.score[0] < state.score[1] ? 'a' : 'd';
    if (state.done) return pickVal === lead ? { label: 'WON', cls: 'won' } : { label: 'LOST', cls: 'lost' };
    return pickVal === lead ? { label: 'ON TRACK', cls: 'track' } : { label: 'BEHIND', cls: 'behind' };
  }

  /* days worth showing in the picks tab: recent past + near future + anything picked */
  function pickableDays() {
    const today = new Date(nowMs());
    const lo = new Date(today); lo.setDate(lo.getDate() - 2);
    const hi = new Date(today); hi.setDate(hi.getDate() + 5);
    const loId = lo.toISOString().slice(0, 10), hiId = hi.toISOString().slice(0, 10);
    return App.days.filter(d =>
      (d.id >= loId && d.id <= hiId) || d.fixtures.some(fx => App.picks[fx.id]));
  }

  function picksShareText() {
    const lines = ["My World Cup '26 crew picks:"];
    for (const day of App.days) {
      for (const fx of day.fixtures) {
        const pickVal = App.picks[fx.id];
        if (!pickVal) continue;
        const label = pickVal === 'h' ? fx.home : pickVal === 'a' ? fx.away : 'DRAW';
        const v = pickVerdict(fx);
        lines.push(`${fx.home} v ${fx.away}: ${label}${v && (v.cls === 'won' || v.cls === 'lost') ? ' — ' + v.label : ''}`);
      }
    }
    lines.push("— picked on Pitchside '26");
    return lines.join('\n');
  }

  function renderPicks() {
    const view = $('#view-picks');
    if (!view) return;
    view.innerHTML = `<div class="view-head reveal">${ICONS.users}<h2>Crew Picks</h2><span class="panel__sub">call every match — saved on this device, settle the bragging rights later</span></div>`;
    let won = 0, lost = 0;
    for (const day of pickableDays()) {
      const panel = h('div', 'panel reveal');
      panel.innerHTML = `<div class="panel__head">${ICONS.calendar}<h3>${day.label} — ${day.title || ''}</h3></div>`;
      for (const fx of day.fixtures) {
        if (fx.home === 'TBD' && fx.away === 'TBD') continue;
        const home = WC.TEAMS[fx.home], away = WC.TEAMS[fx.away];
        const row = h('div', 'pick-row');
        const verdict = pickVerdict(fx);
        if (verdict && verdict.cls === 'won') won++;
        if (verdict && verdict.cls === 'lost') lost++;
        row.innerHTML = `<span class="pick-row__match"><span class="flag" style="background:${home.flag}"></span>${fx.home} v ${fx.away}<span class="flag" style="background:${away.flag}"></span></span>`;
        const btns = h('div', 'pick-row__btns');
        [['h', fx.home], ['d', 'DRAW'], ['a', fx.away]].forEach(([val, label]) => {
          const b = h('button', 'pick-btn' + (App.picks[fx.id] === val ? ' is-on' : ''), label);
          b.type = 'button';
          b.setAttribute('aria-pressed', App.picks[fx.id] === val ? 'true' : 'false');
          b.addEventListener('click', () => {
            App.picks[fx.id] = App.picks[fx.id] === val ? undefined : val;
            localStorage.setItem('wc26-picks', JSON.stringify(App.picks));
            renderPicks();
          });
          btns.appendChild(b);
        });
        row.appendChild(btns);
        row.appendChild(h('span', 'pick-verdict' + (verdict ? ' pick-verdict--' + verdict.cls : ''), verdict ? verdict.label : ''));
        panel.appendChild(row);
      }
      view.appendChild(panel);
    }
    const summary = h('div', 'panel reveal pick-summary');
    summary.innerHTML = `<div class="panel__head">${ICONS.trophy}<h3>Your record</h3></div>
      <p class="road-note">Settled so far: <b class="pick-verdict--won">${won} won</b> · <b class="pick-verdict--lost">${lost} lost</b>. More matchdays unlock as the tournament rolls on.</p>
      <button type="button" class="btn-ghost" id="sharePicks">${ICONS.copy} Copy picks for the group chat</button>`;
    summary.querySelector('#sharePicks').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(picksShareText());
        toast('Picks copied — paste them in the chat');
      } catch (e) {
        toast('Could not copy — your browser blocked it');
      }
    });
    view.appendChild(summary);
    observeReveals(view);
  }

  /* ============================ tabs ============================ */

  const TABS = [
    { id: 'matches', label: 'Matchday', icon: ICONS.ball },
    { id: 'groups', label: 'Groups', icon: ICONS.chart },
    { id: 'road', label: 'Road to Final', icon: ICONS.zap },
    { id: 'boot', label: 'Golden Boot', icon: ICONS.trophy },
    { id: 'picks', label: 'Crew Picks', icon: ICONS.users }
  ];

  function setTab(id) {
    App.tab = id;
    document.querySelectorAll('.tab-btn:not(.tab-btn--demo)').forEach(b => {
      const on = b.dataset.tab === id;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== 'view-' + id; });
    const render = { matches: renderMatchesView, groups: renderGroups, road: renderRoad, boot: renderBoot, picks: renderPicks }[id];
    render();
    window.scrollTo({ top: 0 });
  }

  /* ============================ demo mode ============================ */

  function buildDemoDay() {
    App.demoMatches = {};
    const day = currentDay();
    const starts = [57, 14, 33, 72, 8, 49, 25, 64];
    day.fixtures.forEach((fx, i) => {
      if (fx.home === 'TBD' || fx.away === 'TBD') return;
      const m = createMatch(fx, { mode: 'sprint', seed: (Math.random() * 2 ** 31) | 0, ignoreOfficial: true });
      RNG = m.rng;
      m.booting = true;
      kickoffEvent(m);
      fastForward(m, fx.startMinute != null ? fx.startMinute : starts[i % starts.length]);
      m.booting = false;
      App.demoMatches[fx.id] = m;
    });
  }

  function toggleDemo() {
    App.demo = !App.demo;
    const btn = $('#demoBtn');
    if (btn) { btn.classList.toggle('is-on', App.demo); btn.setAttribute('aria-pressed', App.demo ? 'true' : 'false'); }
    if (App.demo) buildDemoDay(); else App.demoMatches = {};
    setTab('matches');
    toast(App.demo ? 'Demo sim running at 6× speed — not real scores' : App.feedOn ? 'Back to the live feed' : 'Back to the matchday clock');
  }

  /* ============================ boot ============================ */

  function pickToday() {
    const todayId = (() => {
      const d = new Date(nowMs());
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    })();
    const exact = App.days.find(d => d.id === todayId);
    if (exact) return exact.id;
    const next = App.days.find(d => d.id > todayId);
    return next ? next.id : App.days[App.days.length - 1].id;
  }

  function initSimMatches() {
    /* sim fallback: engine states for the static fixture list */
    for (const day of App.days) {
      for (const fx of day.fixtures) ensureMatch(fx);
    }
  }

  function seedTicker() {
    const evs = App.matches
      .flatMap(m => m.events.filter(e => ['goal', 'red', 'ht', 'ft'].includes(e.type)))
      .slice(-6).reverse();
    App.ticker = evs.map(e => (e.type === 'goal' ? `GOAL ${e.min}' — ${e.sub}` : `${e.title} — ${e.sub}`));
    renderTicker();
  }

  async function bootData() {
    let sched = null, standings = null;
    if (!App.nofeed && window.Feed) {
      [sched, standings] = await Promise.all([Feed.loadSchedule(), Feed.loadStandings()]);
    }
    if (sched) {
      App.feedOn = true;
      App.days = sched.days;
      App.schedule = new Map(sched.events.map(e => [e.id, e]));
      if (Object.keys(sched.groups).length) App.groups = sched.groups;
      if (standings) { App.standings = standings; App.standingsAt = Date.now(); }
    } else {
      App.feedOn = false;
      App.days = WC.DAYS;
      App.groups = WC.GROUPS;
    }
    App.dayId = pickToday();
    if (App.feedOn) {
      await pollActiveDay(true);
    } else {
      initSimMatches();
      toast('Live feed unreachable — running labeled sim mode');
    }
    if (App.demo) buildDemoDay();
    seedTicker();
    setTab('matches');
    startLoops();
  }

  function startLoops() {
    /* 1s UI tick: clocks, countdowns, sprints */
    setInterval(() => {
      const live = [];
      for (const m of App.matches) {
        if (m.mode === 'feed') tickFeed(m);
        else if (m.mode === 'real') tickReal(m, nowMs());
        updateMatchUI(m);
        if (m.mode !== 'feed') {
          const curMin = Math.floor(m.minute);
          if (m._lastDrawnMin !== curMin && m.period !== 'FT') { m._lastDrawnMin = curMin; drawMomentum(m); }
        }
        if (isLive(m)) live.push(m);
      }
      for (const id of Object.keys(App.demoMatches)) {
        const m = App.demoMatches[id];
        advance(m);
        updateMatchUI(m);
        const curMin = Math.floor(m.minute);
        if (m._lastDrawnMin !== curMin && m.period !== 'FT') { m._lastDrawnMin = curMin; drawMomentum(m); }
      }
      updateJumpCards();
      updateCountdowns();

      const day = currentDay();
      const lead = day.fixtures.map(fx => getMatch(fx.id)).find(isLive) || getMatch((day.fixtures[0] || {}).id);
      if (lead && lead.period !== 'pre') {
        document.title = `${lead.home.code} ${lead.score[0]}–${lead.score[1]} ${lead.away.code} · ${clockText(lead)} — Pitchside '26`;
      } else if (day.fixtures[0]) {
        document.title = `${day.fixtures[0].home} v ${day.fixtures[0].away} soon — Pitchside '26`;
      }
    }, 1000);

    if (App.feedOn) {
      /* the root fix: fresh scores from the feed every 60 seconds */
      setInterval(() => { if (!App.demo) pollActiveDay(); }, 60000);
      setInterval(refreshSchedule, 300000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden && !App.demo) pollActiveDay(); });
    }

    window.addEventListener('resize', () => {
      if (App.tab !== 'matches') return;
      App.matches.forEach(drawMomentum);
      Object.values(App.demoMatches).forEach(drawMomentum);
    });
  }

  function init() {
    const nav = $('#tabs');
    TABS.forEach(t => {
      const b = h('button', 'tab-btn', `${t.icon}<span>${t.label}</span>`);
      b.type = 'button';
      b.dataset.tab = t.id;
      b.addEventListener('click', () => setTab(t.id));
      nav.appendChild(b);
    });
    const demoBtn = h('button', 'tab-btn tab-btn--demo' + (App.demo ? ' is-on' : ''), `${ICONS.play}<span>Demo</span>`);
    demoBtn.type = 'button';
    demoBtn.id = 'demoBtn';
    demoBtn.title = 'Toggle a sped-up demo sim of this matchday';
    demoBtn.setAttribute('aria-pressed', App.demo ? 'true' : 'false');
    demoBtn.addEventListener('click', toggleDemo);
    nav.appendChild(demoBtn);

    $('#view-matches').innerHTML = `<div class="boot-splash">${ICONS.ball}<span>Loading the matchday…</span></div>`;
    renderTicker();

    document.addEventListener('pointerdown', e => {
      if (e.target.closest('a, input, textarea')) return;
      FX.kick(e.clientX, e.clientY);
    });

    const prog = $('#scrollProgress');
    if (prog) {
      let raf = 0;
      window.addEventListener('scroll', () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const max = document.documentElement.scrollHeight - innerHeight;
          prog.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
        });
      }, { passive: true });
    }

    bootData();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
