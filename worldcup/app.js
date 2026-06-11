/* Pitchside '26 — live matchday engine + UI.
   The engine is pure (no DOM) so a real data feed can replace simulateTick()
   while every renderer keeps working off the same match-state shape. */
(function () {
  'use strict';

  /* ============================ utilities ============================ */

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const rand = (lo, hi) => lo + Math.random() * (hi - lo);
  const randInt = (lo, hi) => Math.floor(rand(lo, hi + 1));
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 2;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  function weightedPick(items, weightOf) {
    const total = items.reduce((s, it) => s + weightOf(it), 0);
    let r = Math.random() * total;
    for (const it of items) { r -= weightOf(it); if (r <= 0) return it; }
    return items[items.length - 1];
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

  /* ============================ engine ============================ */

  const PHRASES = {
    shotOff: ['drags the effort wide', 'fires over the bar', 'curls one just past the post', 'snatches at it — wide'],
    shotOn: ['stings the keeper\'s palms', 'forces a sharp save', 'tests the keeper from range', 'header straight at the keeper'],
    bigChance: ['HUGE chance goes begging', 'somehow stays out — chaos in the box', 'rattles the woodwork', 'inches away from the opener'],
    goal: ['buries it into the corner', 'finishes coolly', 'thunders it home', 'heads it in at the far post', 'slots the rebound'],
    corner: ['wins a corner off the block', 'forces another corner', 'corner — big bodies forward'],
    foul: ['cynical foul stops the break', 'late challenge in midfield', 'shirt pull spotted by the referee'],
    sub: ['fresh legs on', 'tactical switch', 'change up front']
  };

  function createMatch(fixture) {
    const home = WC.TEAMS[fixture.home], away = WC.TEAMS[fixture.away];
    const homeAdv = fixture.home === 'MEX' ? 4 : 2;
    const basePoss = 50 + (home.strength + homeAdv - away.strength) * 0.9;
    const m = {
      fixture, home, away, homeAdv, colors: teamColors(home, away),
      minute: 0, period: '1H', add1: randInt(1, 3), add2: randInt(3, 6), holdTicks: 0,
      score: [0, 0],
      stats: {
        shots: [0, 0], sot: [0, 0], xg: [0, 0], corners: [0, 0], big: [0, 0],
        fouls: [0, 0], offsides: [0, 0], saves: [0, 0], yellows: [0, 0], reds: [0, 0],
        passes: [0, 0], acc: [rand(80, 88), rand(78, 86)]
      },
      poss: clamp(basePoss, 32, 68), basePoss: clamp(basePoss, 32, 68),
      momentumVal: 0, momentum: [],
      events: [], shotMap: [],
      players: [
        (WC.ROSTERS[fixture.home] || []).map(initPlayer),
        (WC.ROSTERS[fixture.away] || []).map(initPlayer)
      ],
      tickCount: 0, ui: null
    };
    m.events.push({ min: 0, side: -1, type: 'ko', title: 'Kickoff', sub: `${home.name} get us underway at ${fixture.venue}` });
    return m;
  }

  function initPlayer(p) {
    return { ...p, shots: 0, goals: 0, passes: 0, acc: rand(76, 92), rating: 6.4 + rand(0, 0.5), yellow: 0, red: 0 };
  }

  function sideBias(m) {
    return ((m.home.strength + m.homeAdv) - m.away.strength) / 14;
  }

  function attackSide(m) {
    const p = 1 / (1 + Math.exp(-(sideBias(m) + m.momentumVal / 150)));
    return Math.random() < p ? 0 : 1;
  }

  function pushEvent(m, ev) {
    m.events.push(ev);
    if (typeof onKeyEvent === 'function' && ['goal', 'yellow', 'red', 'ht', 'ft', 'big'].includes(ev.type)) onKeyEvent(m, ev);
  }

  function scoreGoal(m, side, min, scorer) {
    const team = side === 0 ? m.home : m.away;
    m.score[side]++;
    m.stats.sot[side]++;
    m.momentumVal = side === 0 ? 60 : -60;
    if (scorer) { scorer.goals++; scorer.rating = clamp(scorer.rating + 0.55, 5.5, 10); }
    m.shotMap.push({ side, goal: true, min });
    pushEvent(m, {
      min, side, type: 'goal',
      title: `GOAL — ${team.name}`,
      sub: `${scorer ? scorer.name + ' ' : ''}${pick(PHRASES.goal)} · ${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}`
    });
  }

  /* One integer game-minute of simulation. Swap this out for a real feed. */
  function minuteTick(m) {
    const min = Math.floor(m.minute);
    m.momentumVal = clamp(m.momentumVal * 0.8 + gauss() * 30 + sideBias(m) * 9, -100, 100);
    m.momentum.push({ min, v: m.momentumVal });

    // possession drifts toward base + momentum pull
    m.poss = clamp(m.poss + (m.basePoss - m.poss) * 0.03 + m.momentumVal * 0.012 + gauss() * 0.7, 28, 72);

    // ball circulation
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

    if (Math.random() < 0.42) {
      const side = attackSide(m);
      const att = side === 0 ? m.home : m.away;
      const def = side === 0 ? m.away : m.home;
      const o = 1 - side;
      const roster = m.players[side];
      const r = Math.random();

      if (r < 0.58) { // a shot
        const q = 0.03 + 0.35 * Math.pow(Math.random(), 2.6);
        const shooter = roster.length ? weightedPick(roster, p => p.w) : null;
        m.stats.shots[side]++;
        m.stats.xg[side] += q;
        if (q > 0.25) m.stats.big[side]++;
        if (shooter) shooter.shots++;
        if (Math.random() < q * 0.82) {
          scoreGoal(m, side, min, shooter);
        } else if (Math.random() < 0.5) {
          m.stats.sot[side]++; m.stats.saves[o]++;
          m.shotMap.push({ side, goal: false, on: true, min });
          if (q > 0.22) pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: `${shooter ? shooter.name + ' ' : ''}${pick(PHRASES.shotOn)}` });
        } else {
          m.shotMap.push({ side, goal: false, on: false, min });
          if (q > 0.24) pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: `${shooter ? shooter.name + ' ' : ''}${pick(PHRASES.bigChance)}` });
        }
      } else if (r < 0.72) {
        m.stats.corners[side]++;
        if (m.stats.corners[side] % 3 === 1) pushEvent(m, { min, side, type: 'corner', title: `Corner — ${att.name}`, sub: pick(PHRASES.corner) });
      } else if (r < 0.86) {
        m.stats.fouls[o]++;
        const card = Math.random();
        if (card < 0.18) {
          m.stats.yellows[o]++;
          const offender = m.players[o].length ? weightedPick(m.players[o], p => 1 / (p.w + 0.4)) : null;
          if (offender) { offender.yellow++; offender.rating = clamp(offender.rating - 0.25, 5.5, 10); }
          pushEvent(m, { min, side: o, type: 'yellow', title: `Yellow card — ${def.name}`, sub: `${offender ? offender.name + ' — ' : ''}${pick(PHRASES.foul)}` });
        } else if (card < 0.195) {
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
        m.shotMap.push({ side, goal: false, on: true, min });
        pushEvent(m, { min, side, type: 'big', title: `Big chance — ${att.name}`, sub: pick(PHRASES.bigChance) });
      }
    }

    // substitutions
    if (m.period === '2H' && min > 57 && Math.random() < 0.05) {
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

  /* advance one real-time tick (~6 game-seconds) */
  function advance(m) {
    if (m.period === 'FT') return;
    m.tickCount++;
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
    let target = toMinute;
    if (toMinute > 45) { // burn through first half + HT
      crossMinutes(m, 0, 45 + m.add1);
      m.events.push({ min: 45, side: -1, type: 'ht', title: 'Half-time', sub: `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code} at the break` });
      m.period = '2H'; m.minute = 45;
      crossMinutes(m, 45, target);
    } else {
      crossMinutes(m, 0, target);
    }
  }

  function liveOdds(m) {
    const p = probsFor(m.home.strength, m.away.strength, m.homeAdv, m.minute, m.score[0], m.score[1]);
    const remH = p.lh, remA = p.la;
    const scorers = [];
    for (const side of [0, 1]) {
      const roster = m.players[side];
      if (!roster.length) continue;
      const sumW = roster.reduce((s, x) => s + x.w, 0);
      const lam = side === 0 ? remH : remA;
      for (const pl of roster.slice(0, 4)) {
        const share = clamp(pl.w / sumW * 1.6, 0.05, 0.5);
        const prob = 1 - Math.exp(-lam * share);
        scorers.push({ side, name: pl.name, pos: pl.pos, goals: pl.goals, odds: toAmerican(prob, 1.14), prob });
      }
    }
    return { ...p, scorers };
  }

  function clockText(m) {
    if (m.period === 'FT') return 'FT';
    if (m.period === 'HT') return 'HT';
    const base = Math.floor(m.minute);
    const sec = Math.floor((m.minute % 1) * 60);
    const over1 = m.period === '1H' && base >= 45;
    const over2 = m.period === '2H' && base >= 90;
    if (over1) return `45+${base - 44}'`;
    if (over2) return `90+${base - 89}'`;
    return `${String(base).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  const Engine = { createMatch, advance, fastForward, liveOdds, probsFor, toAmerican, clockText };

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
    chev: I('<polyline points="6 9 12 15 18 9"/>')
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

  /* set odds text + flash green/red on implied-probability change */
  function setOdds(node, text, prob) {
    const prev = parseFloat(node.dataset.prob || 'NaN');
    if (node.textContent !== text) {
      node.textContent = text;
      if (!isNaN(prev)) flash(node, prob - prev);
    }
    node.dataset.prob = String(prob);
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
          if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
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

  /* ============================ app state ============================ */

  const App = {
    matches: [],            // live engine states for today's fixtures
    dayId: WC.DAYS[0].id,
    tab: 'matches',
    ticker: [],
    picks: JSON.parse(localStorage.getItem('wc26-picks') || '{}')
  };

  /* engine → ticker bridge */
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
    if (ev.type === 'goal' || ev.type === 'ft') { renderGroups(); renderBoot(); renderPicks(); }
    if (ev.type === 'goal' && m.ui) {
      m.ui.scoreWrap.classList.remove('goal-pop');
      void m.ui.scoreWrap.offsetWidth;
      m.ui.scoreWrap.classList.add('goal-pop');
    }
  };

  /* ============================ ticker ============================ */

  function renderTicker() {
    const track = $('#tickerTrack');
    if (!track) return;
    const items = App.ticker.length ? App.ticker : ['Welcome to opening day — Estadio Azteca is bouncing'];
    const seq = items.map(t => `<span class="ticker__item">${ICONS.zap}${t}</span>`).join('');
    track.innerHTML = REDUCED ? seq : seq + seq; // duplicate for seamless loop
  }

  /* ============================ match sections ============================ */

  const STAT_DEFS = [
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
    { key: 'yellows', label: 'Yellow Cards' }
  ];

  function buildMatchSection(m, index) {
    const fx = m.fixture;
    const sec = h('section', 'match');
    sec.id = 'match-' + fx.id;

    if (index > 0) {
      const div = h('div', 'match-divider reveal');
      div.innerHTML = `<span class="match-divider__line"></span><span class="match-divider__label">${ICONS.chev} NEXT MATCH ${ICONS.chev}</span><span class="match-divider__line"></span>`;
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
    meta.innerHTML = `
      <span class="chip chip--group">GROUP ${fx.group}</span>
      <span class="chip">${ICONS.pin}${fx.venue} · ${fx.city}</span>
      <span class="chip">${ICONS.users}${fx.attendance}</span>
      <span class="chip">${ICONS.whistle}${fx.referee}</span>
      <span class="chip">${fx.weather}</span>`;
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
    const replay = h('button', 'btn-replay', `${ICONS.ball} Replay this match sim`);
    replay.type = 'button';
    replay.hidden = true;
    replay.addEventListener('click', () => replayMatch(m));
    center.append(status, scoreWrap, clock, replay);
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
    const odds = h('div', 'panel reveal');
    odds.innerHTML = `<div class="panel__head">${ICONS.zap}<h3>Live Betting Lines</h3><span class="sim-badge" title="Simulated demo feed">SIM FEED</span></div>`;
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
    odds.appendChild(h('p', 'fine-print', 'Odds are simulated for entertainment — this is not a sportsbook.'));
    sec.appendChild(odds);

    /* stats panel */
    const statsPanel = h('div', 'panel reveal');
    statsPanel.innerHTML = `<div class="panel__head">${ICONS.chart}<h3>Live Match Stats</h3><span class="panel__sub live-min"></span></div>`;
    const possRow = h('div', 'poss');
    possRow.innerHTML = `
      <div class="poss__nums"><span class="poss-h">50%</span><span class="poss__label">POSSESSION</span><span class="poss-a">50%</span></div>
      <div class="poss__bar"><div class="poss__fill" style="width:50%;background:${m.colors[0]}"></div></div>`;
    statsPanel.appendChild(possRow);
    const statList = h('div', 'stat-list');
    for (const def of STAT_DEFS) {
      const row = h('div', 'stat-row');
      row.dataset.key = def.key;
      row.innerHTML = `
        <span class="stat-row__val stat-row__val--h">0</span>
        <div class="stat-row__mid">
          <span class="stat-row__label">${def.label}</span>
          <div class="tug"><div class="tug__h" style="background:${m.colors[0]}"></div><div class="tug__a" style="background:${m.colors[1]}"></div></div>
        </div>
        <span class="stat-row__val stat-row__val--a">0</span>`;
      statList.appendChild(row);
    }
    statsPanel.appendChild(statList);
    sec.appendChild(statsPanel);

    /* momentum + shot map */
    const duo = h('div', 'grid2');
    const mom = h('div', 'panel reveal');
    mom.innerHTML = `<div class="panel__head">${ICONS.flame}<h3>Attack Momentum</h3><span class="panel__sub">last 90'</span></div>`;
    const canvas = document.createElement('canvas');
    canvas.className = 'momentum';
    canvas.height = 150;
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Attack momentum chart');
    mom.appendChild(canvas);
    mom.appendChild(h('div', 'legend', `<span><i style="background:${m.colors[0]}"></i>${m.home.code}</span><span><i style="background:${m.colors[1]}"></i>${m.away.code}</span>`));
    const shot = h('div', 'panel reveal');
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
    shot.appendChild(pitch);
    shot.appendChild(h('div', 'legend', `<span><i style="background:${m.colors[0]}"></i>${m.home.code} attack →</span><span><i style="background:${m.colors[1]}"></i>← ${m.away.code} attack</span>`));
    duo.append(mom, shot);
    sec.appendChild(duo);

    /* player stat lines */
    const pgrid = h('div', 'grid2');
    for (const side of [0, 1]) {
      const team = side === 0 ? m.home : m.away;
      const panel = h('div', 'panel reveal');
      panel.innerHTML = `<div class="panel__head">${ICONS.users}<h3>${team.name} — Stat Lines</h3></div>`;
      const scroller = h('div', 'table-scroll');
      const tbl = h('table', 'ptable');
      tbl.innerHTML = `<thead><tr><th scope="col">Player</th><th scope="col">Pos</th><th scope="col">Sh</th><th scope="col">G</th><th scope="col">Pass</th><th scope="col">Acc</th><th scope="col">Rate</th></tr></thead><tbody data-side="${side}"></tbody>`;
      scroller.appendChild(tbl);
      panel.appendChild(scroller);
      pgrid.appendChild(panel);
    }
    sec.appendChild(pgrid);

    /* timeline */
    const tl = h('div', 'panel reveal');
    tl.innerHTML = `<div class="panel__head">${ICONS.clock}<h3>Match Timeline</h3><span class="panel__sub">live feed</span></div><ol class="timeline" reversed></ol>`;
    sec.appendChild(tl);

    m.ui = {
      root: sec, sticky, stickyWrap, status, scoreWrap, clock: clock.querySelector('.clock-text'),
      liveDot: clock.querySelector('.live-dot'), replay,
      wp, oddsPanel: odds, statsPanel, statList, possRow, canvas,
      dots: pitch.querySelector('.pitch__dots'), timeline: tl.querySelector('.timeline'),
      renderedEvents: 0, renderedShots: 0
    };

    /* sticky bar appears only when the hero scoreboard scrolls out of view */
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => {
        const below = e.boundingClientRect.top < 0;
        stickyWrap.classList.toggle('show', !e.isIntersecting && below);
      }, { rootMargin: '-70px 0px 0px 0px' });
      io.observe(hero);
    }

    updateMatchUI(m, true);
    return sec;
  }

  function periodBadge(m) {
    if (m.period === 'FT') return ['FULL-TIME', 'ft'];
    if (m.period === 'HT') return ['HALF-TIME', 'ht'];
    return ['LIVE · ' + (m.period === '1H' ? '1ST HALF' : '2ND HALF'), 'live'];
  }

  function updateMatchUI(m, force) {
    const u = m.ui;
    if (!u || !document.body.contains(u.root)) return;

    const [label, cls] = periodBadge(m);
    if (u.status.dataset.cls !== cls || force) {
      u.status.dataset.cls = cls;
      u.status.className = 'status-badge status-badge--' + cls;
      u.status.textContent = label;
      u.liveDot.style.display = cls === 'ft' ? 'none' : '';
      u.replay.hidden = cls !== 'ft';
    }
    const scoreTxt = `${m.score[0]}&nbsp;–&nbsp;${m.score[1]}`;
    if (u.scoreWrap.innerHTML !== scoreTxt) u.scoreWrap.innerHTML = scoreTxt;
    u.clock.textContent = clockText(m);
    u.sticky.innerHTML = `
      <span class="ms-flag" style="background:${m.home.flag}"></span><b>${m.home.code}</b>
      <span class="ms-score">${m.score[0]} – ${m.score[1]}</span>
      <b>${m.away.code}</b><span class="ms-flag" style="background:${m.away.flag}"></span>
      <span class="ms-clock ${cls === 'live' ? 'is-live' : ''}">${clockText(m)}</span>`;

    /* odds + win prob */
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

    /* scorer props */
    for (const side of [0, 1]) {
      const list = u.oddsPanel.querySelector(`.props__list[data-side="${side}"]`);
      const rows = o.scorers.filter(s => s.side === side);
      if (list.children.length !== rows.length) {
        list.innerHTML = '';
        for (const s of rows) {
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
    const possH = Math.round(m.poss);
    u.possRow.querySelector('.poss-h').textContent = possH + '%';
    u.possRow.querySelector('.poss-a').textContent = (100 - possH) + '%';
    u.possRow.querySelector('.poss__fill').style.width = possH + '%';
    for (const def of STAT_DEFS) {
      const row = u.statList.querySelector(`[data-key="${def.key}"]`);
      const vh = m.stats[def.key][0], va = m.stats[def.key][1];
      const fmt = def.fmt || (v => String(Math.round(v)));
      row.querySelector('.stat-row__val--h').textContent = fmt(vh);
      row.querySelector('.stat-row__val--a').textContent = fmt(va);
      const sum = vh + va;
      row.querySelector('.tug__h').style.width = (sum ? vh / sum * 50 : 0) + '%';
      row.querySelector('.tug__a').style.width = (sum ? va / sum * 50 : 0) + '%';
    }

    /* shot map */
    while (u.renderedShots < m.shotMap.length) {
      const s = m.shotMap[u.renderedShots++];
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const x = s.side === 0 ? rand(64, 96) : rand(4, 36);
      const y = rand(10, 54);
      c.setAttribute('cx', x.toFixed(1));
      c.setAttribute('cy', y.toFixed(1));
      c.setAttribute('r', s.goal ? 2.4 : 1.4);
      c.setAttribute('class', 'shot-dot' + (s.goal ? ' shot-dot--goal' : ''));
      c.setAttribute('fill', s.goal ? m.colors[s.side] : 'transparent');
      c.setAttribute('stroke', m.colors[s.side]);
      u.dots.appendChild(c);
    }

    /* player tables */
    for (const side of [0, 1]) {
      const tbody = u.root.querySelector(`.ptable tbody[data-side="${side}"]`);
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

    /* timeline (newest first) */
    while (u.renderedEvents < m.events.length) {
      const ev = m.events[u.renderedEvents++];
      const li = h('li', 'tl-item tl-item--' + ev.type);
      const icon = { goal: ICONS.ball, yellow: ICONS.card, red: ICONS.card, sub: ICONS.sub, big: ICONS.flame, corner: ICONS.target, ht: ICONS.whistle, ft: ICONS.whistle, ko: ICONS.whistle }[ev.type] || ICONS.clock;
      const side = ev.side === 0 ? 'h' : ev.side === 1 ? 'a' : 'n';
      li.dataset.side = side;
      li.innerHTML = `<span class="tl-min">${ev.min ? ev.min + "'" : '—'}</span><span class="tl-icon">${icon}</span><div class="tl-body"><b>${ev.title}</b><span>${ev.sub || ''}</span></div>`;
      u.timeline.prepend(li);
      if (!REDUCED && !force) { li.classList.add('tl-enter'); }
    }
  }

  /* momentum chart */
  function drawMomentum(m) {
    const u = m.ui;
    if (!u || !document.body.contains(u.canvas)) return;
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
    // HT marker
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
    const idx = App.matches.indexOf(m);
    const fresh = createMatch(m.fixture);
    App.matches[idx] = fresh;
    const old = m.ui.root;
    const sec = buildMatchSection(fresh, idx);
    old.replaceWith(sec);
    sec.querySelectorAll('.reveal').forEach(r => r.classList.add('in'));
    drawMomentum(fresh);
  }

  /* ============================ matches view ============================ */

  function renderMatchesView() {
    const view = $('#view-matches');
    view.innerHTML = '';
    const day = WC.DAYS.find(d => d.id === App.dayId);

    /* hero strip */
    const hero = h('div', 'dayhero reveal');
    hero.innerHTML = `
      <div class="dayhero__left">
        <div class="dayhero__kicker">${ICONS.trophy} FIFA WORLD CUP 26™ · ${day.title.toUpperCase()}</div>
        <h2 class="dayhero__title">${day.live ? 'OPENING DAY.<br><span>IT ALL STARTS HERE.</span>' : day.title}</h2>
      </div>
      <div class="dayhero__chips" id="dayChips" role="tablist" aria-label="Pick a matchday"></div>`;
    view.appendChild(hero);
    const chips = hero.querySelector('#dayChips');
    for (const d of WC.DAYS) {
      const b = h('button', 'day-chip' + (d.id === App.dayId ? ' is-on' : ''), `${ICONS.calendar}<span>${d.label}</span><small>${d.fixtures.length} matches</small>`);
      b.type = 'button';
      b.setAttribute('aria-pressed', d.id === App.dayId ? 'true' : 'false');
      b.addEventListener('click', () => { App.dayId = d.id; renderMatchesView(); window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }); });
      chips.appendChild(b);
    }

    if (day.live) {
      /* quick-jump strip for live games */
      const jump = h('div', 'jumpstrip reveal');
      App.matches.forEach(m => {
        const a = h('a', 'jump-card', '');
        a.href = '#match-' + m.fixture.id;
        a.innerHTML = `<span class="jump-card__live"><span class="live-dot"></span>LIVE</span><b>${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}</b><small>${m.fixture.venue}</small>`;
        a.dataset.mid = m.fixture.id;
        jump.appendChild(a);
      });
      view.appendChild(jump);
      App.matches.forEach((m, i) => view.appendChild(buildMatchSection(m, i)));
      App.matches.forEach(m => drawMomentum(m));
    } else {
      const grid = h('div', 'upcoming-grid');
      day.fixtures.forEach(fx => grid.appendChild(buildUpcomingCard(fx)));
      view.appendChild(grid);
    }
    observeReveals(view);
  }

  function buildUpcomingCard(fx) {
    const home = WC.TEAMS[fx.home], away = WC.TEAMS[fx.away];
    const p = probsFor(home.strength, away.strength, 2, 0, 0, 0);
    const card = h('article', 'panel upcoming reveal');
    card.innerHTML = `
      <div class="upcoming__meta"><span class="chip chip--group">GROUP ${fx.group}</span><span class="chip">${ICONS.pin}${fx.venue} · ${fx.city}</span></div>
      <div class="upcoming__teams">
        <div class="upcoming__team"><span class="flag flag--lg" style="background:${home.flag}" role="img" aria-label="${home.name} flag"></span><b>${home.name}</b></div>
        <div class="upcoming__vs"><span class="upcoming__count" data-kick="${fx.kickoffUTC}">—</span><small>${fx.kickLocal}</small></div>
        <div class="upcoming__team"><span class="flag flag--lg" style="background:${away.flag}" role="img" aria-label="${away.name} flag"></span><b>${away.name}</b></div>
      </div>
      <div class="odds-row odds-row--secondary">
        <div class="odds-cell"><span class="odds-cell__label">${home.code} WIN</span><span class="odds-val">${toAmerican(p.pH)}</span></div>
        <div class="odds-cell"><span class="odds-cell__label">DRAW</span><span class="odds-val">${toAmerican(p.pD)}</span></div>
        <div class="odds-cell"><span class="odds-cell__label">${away.code} WIN</span><span class="odds-val">${toAmerican(p.pA)}</span></div>
      </div>
      <div class="upcoming__stars">${ICONS.flame} Ones to watch: <b>${(WC.STARS[fx.home] || []).join(', ')}</b> vs <b>${(WC.STARS[fx.away] || []).join(', ')}</b></div>`;
    return card;
  }

  function updateCountdowns() {
    document.querySelectorAll('[data-kick]').forEach(node => {
      const diff = new Date(node.dataset.kick).getTime() - Date.now();
      if (diff <= 0) { node.textContent = 'KICKOFF'; return; }
      const hrs = Math.floor(diff / 3.6e6), min = Math.floor(diff % 3.6e6 / 6e4), sec = Math.floor(diff % 6e4 / 1e3);
      node.textContent = `${hrs}H ${String(min).padStart(2, '0')}M ${String(sec).padStart(2, '0')}S`;
    });
  }

  /* ============================ groups ============================ */

  function liveTable(groupKey) {
    const codes = WC.GROUPS[groupKey];
    const rows = codes.map(c => ({ code: c, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, live: false }));
    for (const m of App.matches) {
      if (m.fixture.group !== groupKey) continue;
      const rh = rows.find(r => r.code === m.fixture.home);
      const ra = rows.find(r => r.code === m.fixture.away);
      const [gh, ga] = m.score;
      const done = m.period === 'FT';
      for (const [r, f, a] of [[rh, gh, ga], [ra, ga, gh]]) {
        r.p = 1; r.gf = f; r.ga = a; r.live = !done;
        if (f > a) { r.w = 1; r.pts = 3; } else if (f === a) { r.d = 1; r.pts = 1; } else r.l = 1;
      }
    }
    rows.sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf);
    return rows;
  }

  function renderGroups() {
    const view = $('#view-groups');
    if (!view) return;
    view.innerHTML = `<div class="view-head reveal">${ICONS.trophy}<h2>Group Standings</h2><span class="panel__sub">Group A updates live · top 2 + best thirds advance</span></div>`;
    const grid = h('div', 'groups-grid');
    for (const g of Object.keys(WC.GROUPS)) {
      const panel = h('div', 'panel reveal');
      panel.innerHTML = `<div class="panel__head"><h3>GROUP ${g}</h3>${g === 'A' ? '<span class="sim-badge sim-badge--live">LIVE</span>' : ''}</div>`;
      const tbl = h('table', 'gtable');
      tbl.innerHTML = `<thead><tr><th scope="col">Team</th><th scope="col">P</th><th scope="col">W</th><th scope="col">D</th><th scope="col">L</th><th scope="col">GD</th><th scope="col">Pts</th></tr></thead>`;
      const tb = h('tbody');
      liveTable(g).forEach((r, i) => {
        const t = WC.TEAMS[r.code];
        const tr = h('tr', r.live ? 'is-live' : '');
        tr.innerHTML = `
          <td class="gt-team"><span class="gt-rank ${i < 2 ? 'gt-rank--q' : ''}">${i + 1}</span><span class="flag" style="background:${t.flag}"></span>${t.short}${r.live ? '<span class="live-dot live-dot--sm"></span>' : ''}</td>
          <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gf - r.ga > 0 ? '+' : ''}${r.gf - r.ga}</td><td class="gt-pts">${r.pts}</td>`;
        tb.appendChild(tr);
      });
      tbl.appendChild(tb);
      panel.appendChild(tbl);
      grid.appendChild(panel);
    }
    view.appendChild(grid);
    observeReveals(view);
  }

  /* ============================ road to the final ============================ */

  function renderRoad() {
    const view = $('#view-road');
    view.innerHTML = `<div class="view-head reveal">${ICONS.zap}<h2>Road to the Final</h2><span class="panel__sub">104 matches · 48 teams · 3 nations</span></div>`;
    const strip = h('div', 'road');
    WC.STAGES.forEach((s, i) => {
      const card = h('div', 'road-stage reveal' + (s.final ? ' road-stage--final' : ''));
      card.style.transitionDelay = REDUCED ? '' : (i * 60) + 'ms';
      card.innerHTML = `
        <span class="road-stage__num">${s.final ? ICONS.trophy : String(i + 1).padStart(2, '0')}</span>
        <b>${s.name}</b><span class="road-stage__dates">${s.dates}</span>
        <small>${s.detail}</small><span class="road-stage__games">${s.games} ${s.games === 1 ? 'match' : 'matches'}</span>`;
      strip.appendChild(card);
    });
    view.appendChild(strip);
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

    const scorers = [];
    for (const m of App.matches) {
      for (const side of [0, 1]) {
        const team = side === 0 ? m.home : m.away;
        for (const p of m.players[side]) if (p.goals > 0) scorers.push({ name: p.name, team: team.name, code: team.code, flag: team.flag, goals: p.goals });
      }
    }
    scorers.sort((a, b) => b.goals - a.goals);

    const livePanel = h('div', 'panel reveal');
    livePanel.innerHTML = `<div class="panel__head"><h3>Tournament top scorers</h3><span class="sim-badge sim-badge--live">LIVE</span></div>`;
    if (!scorers.length) {
      livePanel.appendChild(h('p', 'road-note', 'No goals yet — the race starts today.'));
    } else {
      const ol = h('ol', 'boot-list');
      scorers.slice(0, 10).forEach((s, i) => {
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
    fut.innerHTML = `<div class="panel__head">${ICONS.zap}<h3>Golden Boot futures</h3><span class="sim-badge">SIM FEED</span></div>`;
    const grid = h('div', 'futures-grid');
    WC.GOLDEN_BOOT_FUTURES.forEach(f => {
      grid.appendChild(h('div', 'odds-cell', `<span class="odds-cell__label">${f.player} · ${f.team}</span><span class="odds-val">${f.odds}</span>`));
    });
    fut.appendChild(grid);
    fut.appendChild(h('p', 'fine-print', 'Futures are simulated for entertainment — not a sportsbook.'));
    view.appendChild(fut);
    observeReveals(view);
  }

  /* ============================ crew picks ============================ */

  function pickVerdict(fx) {
    const pickVal = App.picks[fx.id];
    if (!pickVal) return null;
    const m = App.matches.find(x => x.fixture.id === fx.id);
    if (!m) return { label: 'LOCKED IN', cls: 'wait' };
    const lead = m.score[0] > m.score[1] ? 'h' : m.score[0] < m.score[1] ? 'a' : 'd';
    if (m.period === 'FT') return pickVal === lead ? { label: 'WON', cls: 'won' } : { label: 'LOST', cls: 'lost' };
    return pickVal === lead ? { label: 'ON TRACK', cls: 'track' } : { label: 'BEHIND', cls: 'behind' };
  }

  function renderPicks() {
    const view = $('#view-picks');
    if (!view) return;
    view.innerHTML = `<div class="view-head reveal">${ICONS.users}<h2>Crew Picks</h2><span class="panel__sub">call every match — saved on this device, settle the bragging rights later</span></div>`;
    let won = 0, lost = 0;
    for (const day of WC.DAYS) {
      const panel = h('div', 'panel reveal');
      panel.innerHTML = `<div class="panel__head">${ICONS.calendar}<h3>${day.label} — ${day.title}</h3></div>`;
      for (const fx of day.fixtures) {
        const home = WC.TEAMS[fx.home], away = WC.TEAMS[fx.away];
        const row = h('div', 'pick-row');
        const verdict = pickVerdict(fx);
        if (verdict && verdict.cls === 'won') won++;
        if (verdict && verdict.cls === 'lost') lost++;
        row.innerHTML = `<span class="pick-row__match"><span class="flag" style="background:${home.flag}"></span>${home.code} v ${away.code}<span class="flag" style="background:${away.flag}"></span></span>`;
        const btns = h('div', 'pick-row__btns');
        [['h', home.code], ['d', 'DRAW'], ['a', away.code]].forEach(([val, label]) => {
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
      <p class="road-note">Settled today: <b class="pick-verdict--won">${won} won</b> · <b class="pick-verdict--lost">${lost} lost</b>. Share a screenshot in the group chat.</p>`;
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
    document.querySelectorAll('.tab-btn').forEach(b => {
      const on = b.dataset.tab === id;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== 'view-' + id; });
    const render = { matches: renderMatchesView, groups: renderGroups, road: renderRoad, boot: renderBoot, picks: renderPicks }[id];
    render();
    if (id === 'matches') App.matches.forEach(drawMomentum);
    window.scrollTo({ top: 0 });
  }

  /* ============================ boot ============================ */

  function init() {
    /* nav */
    const nav = $('#tabs');
    TABS.forEach(t => {
      const b = h('button', 'tab-btn', `${t.icon}<span>${t.label}</span>`);
      b.type = 'button';
      b.dataset.tab = t.id;
      b.addEventListener('click', () => setTab(t.id));
      nav.appendChild(b);
    });

    /* spin up today's matches and fast-forward to "now" */
    const today = WC.DAYS[0];
    for (const fx of today.fixtures) {
      const m = createMatch(fx);
      m.booting = true;
      fastForward(m, fx.startMinute);
      m.booting = false;
      App.matches.push(m);
    }

    /* seed ticker with the latest pre-existing events */
    const seedEvents = App.matches
      .flatMap(m => m.events.filter(e => ['goal', 'red', 'ht'].includes(e.type)).map(e => ({ m, e })))
      .sort((a, b) => b.e.min - a.e.min)
      .slice(0, 6);
    App.ticker = seedEvents.map(({ e }) => (e.type === 'goal' ? `GOAL ${e.min}' — ${e.sub}` : `${e.min}' ${e.title} — ${e.sub}`));
    renderTicker();

    setTab('matches');

    /* main loop: 1 real second ≈ 6 seconds of match time */
    setInterval(() => {
      for (const m of App.matches) {
        advance(m);
        updateMatchUI(m);
        const curMin = Math.floor(m.minute);
        if (m._lastDrawnMin !== curMin && m.period !== 'FT') { m._lastDrawnMin = curMin; drawMomentum(m); }
      }
      /* keep the quick-jump cards fresh */
      document.querySelectorAll('.jump-card').forEach(a => {
        const m = App.matches.find(x => x.fixture.id === a.dataset.mid);
        if (m) a.querySelector('b').textContent = `${m.home.code} ${m.score[0]}–${m.score[1]} ${m.away.code}`;
      });
      updateCountdowns();
      /* live score in the browser tab */
      const m1 = App.matches[0];
      if (m1) document.title = `${m1.home.code} ${m1.score[0]}–${m1.score[1]} ${m1.away.code} · ${clockText(m1)} — Pitchside '26`;
    }, 1000);

    window.addEventListener('resize', () => { if (App.tab === 'matches') App.matches.forEach(drawMomentum); });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
