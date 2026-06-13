/* Pitchside '26 — PK Battle: a cartoon penalty-shootout mini-game vs a bot.
   Self-contained: Shootout.mount(container, homeCode, awayCode, opts) reads
   team names/colors/flags from WC.TEAMS. Best-of-5 with sudden death; you
   shoot, then you keep goal, alternating. The bot keeper learns which way
   you like to shoot.

   Renderer: cached stadium backdrop (sky, stands, ad boards, floodlights,
   perspective pitch) + dynamic layer (sagging net with goal bulge,
   articulated keeper/shooter figures, ball with trail and spin, grass
   particles, camera shake, crowd flash bulbs). */

window.Shootout = (function () {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* stage geometry as fractions of the canvas */
  const GOAL = { x: 0.13, y: 0.17, w: 0.74, h: 0.40 };
  const SPOT = { x: 0.5, y: 0.86 };
  const ZONES = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]]; // [col,row]
  const ZONE_NAMES = ['top left', 'top middle', 'top right', 'low left', 'low middle', 'low right'];

  let S = null;

  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const easeIn = t => t * t * t;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const clamp01 = t => Math.min(1, Math.max(0, t));
  const now = () => performance.now();

  function zoneCenter(c, r) {
    return {
      x: GOAL.x + (c + 0.5) / 3 * GOAL.w + rndSeeded(c * 7 + r * 3) * 0.02,
      y: GOAL.y + (r + 0.55) / 2 * GOAL.h
    };
  }
  /* tiny deterministic jitter so shots don't all land dead-center of a zone */
  function rndSeeded(n) { return Math.sin(n * 127.1) * 0.5; }

  /* skin/hair variety keyed off team code so figures differ per matchup */
  const SKINS = ['#ffd9a8', '#e8b07a', '#c98a5a', '#8d5a3c', '#6b4226'];
  const HAIRS = ['#1c1006', '#3b2008', '#0b0b0b', '#5a3a14', '#2e2e38'];
  function look(team, salt) {
    let h = 0;
    const s = team.code + salt;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return { skin: SKINS[h % SKINS.length], hair: HAIRS[(h >> 3) % HAIRS.length] };
  }

  /* ============================ mount / DOM ============================ */

  function mount(container, homeCode, awayCode, opts) {
    opts = opts || {};
    const home = WC.TEAMS[homeCode], away = WC.TEAMS[awayCode];
    container.innerHTML = `
      <div class="pk">
        <div class="pk-top">
          <span class="pk-top__matchup"><span class="flag" style="background:${home.flag}"></span><b>${home.short}</b>
            <i>v</i><b>${away.short}</b><span class="flag" style="background:${away.flag}"></span>
            ${opts.live ? '<span class="pk-live"><span class="live-dot live-dot--sm"></span>LIVE NOW</span>' : '<span class="pk-last">LAST MATCH</span>'}</span>
          <span class="pk-top__record">${recordText()}</span>
        </div>
        <div class="pk-pick">
          <p class="pk-pick__title">PICK YOUR SIDE — THE BOT TAKES THE OTHER</p>
          <div class="pk-pick__cards"></div>
        </div>
        <div class="pk-game" hidden>
          <div class="pk-score"></div>
          <div class="pk-stage">
            <canvas class="pk-canvas" aria-label="Penalty shootout pitch"></canvas>
            <div class="pk-zones" role="group" aria-label="Goal target zones"></div>
            <div class="pk-ring" hidden><i></i></div>
            <div class="pk-msg" aria-hidden="true"></div>
          </div>
          <div class="pk-status" role="status" aria-live="polite"></div>
          <div class="pk-actions" hidden>
            <button type="button" class="btn-ghost pk-again">Rematch</button>
            <button type="button" class="btn-ghost pk-switch">Switch teams</button>
          </div>
        </div>
      </div>`;

    S = {
      root: container.querySelector('.pk'),
      teams: [home, away],
      youIdx: 0, you: home, bot: away,
      phase: 'pick', phaseStart: now(),
      kicks: { you: [], bot: [] },
      sudden: false, winner: null,
      aiCols: [1, 1, 1], aiRows: [1, 1],
      userDive: null, plan: null,
      trail: [], parts: [], shake: null, impact: null, cheer: 0,
      bg: null, bgW: 0,
      canvas: container.querySelector('.pk-canvas'),
      msgEl: container.querySelector('.pk-msg'),
      statusEl: container.querySelector('.pk-status'),
      scoreEl: container.querySelector('.pk-score'),
      zonesEl: container.querySelector('.pk-zones'),
      ringEl: container.querySelector('.pk-ring'),
      gameEl: container.querySelector('.pk-game'),
      pickEl: container.querySelector('.pk-pick'),
      actionsEl: container.querySelector('.pk-actions'),
      raf: 0
    };
    S.ctx = S.canvas.getContext('2d');

    const cards = container.querySelector('.pk-pick__cards');
    [home, away].forEach((t, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pk-team';
      b.style.setProperty('--pk-c', t.color);
      b.innerHTML = `<span class="flag flag--lg" style="background:${t.flag}"></span><b>${t.short}</b><small>PLAY AS ${t.code}</small>`;
      b.addEventListener('click', () => startGame(i));
      cards.appendChild(b);
    });

    ZONES.forEach(([c, r], i) => {
      const z = document.createElement('button');
      z.type = 'button';
      z.className = 'pk-zone';
      z.style.left = (GOAL.x + c / 3 * GOAL.w) * 100 + '%';
      z.style.top = (GOAL.y + r / 2 * GOAL.h) * 100 + '%';
      z.style.width = (GOAL.w / 3) * 100 + '%';
      z.style.height = (GOAL.h / 2) * 100 + '%';
      z.dataset.c = c; z.dataset.r = r;
      z.setAttribute('aria-label', ZONE_NAMES[i]);
      z.addEventListener('click', () => onZone(c, r));
      S.zonesEl.appendChild(z);
    });

    container.querySelector('.pk-again').addEventListener('click', () => resetGame(false));
    container.querySelector('.pk-switch').addEventListener('click', () => resetGame(true));

    loop();
  }

  function recordText() {
    const rec = JSON.parse(localStorage.getItem('wc26-pk-record') || '{"w":0,"l":0}');
    return `YOUR RECORD <b>${rec.w}W – ${rec.l}L</b>`;
  }
  function saveRecord(won) {
    const rec = JSON.parse(localStorage.getItem('wc26-pk-record') || '{"w":0,"l":0}');
    if (won) rec.w++; else rec.l++;
    localStorage.setItem('wc26-pk-record', JSON.stringify(rec));
    const el = S.root.querySelector('.pk-top__record');
    if (el) el.innerHTML = recordText();
  }

  /* ============================ game flow ============================ */

  function startGame(idx) {
    S.youIdx = idx;
    S.you = S.teams[idx];
    S.bot = S.teams[1 - idx];
    S.pickEl.hidden = true;
    S.gameEl.hidden = false;
    S.kicks = { you: [], bot: [] };
    S.sudden = false; S.winner = null;
    updateScore();
    setPhase('aim');
  }

  function resetGame(rePick) {
    S.kicks = { you: [], bot: [] };
    S.sudden = false; S.winner = null;
    S.actionsEl.hidden = true;
    S.msgEl.className = 'pk-msg';
    if (rePick) {
      S.gameEl.hidden = true;
      S.pickEl.hidden = false;
      setPhase('pick');
    } else {
      updateScore();
      setPhase('aim');
    }
  }

  function setPhase(p) {
    S.phase = p;
    S.phaseStart = now();
    S.userDive = null;
    const zonesOn = p === 'aim' || p === 'windup';
    S.zonesEl.classList.toggle('is-on', zonesOn);
    S.zonesEl.classList.toggle('is-keep', p === 'windup');
    S.zonesEl.querySelectorAll('.pk-zone').forEach(z => {
      z.disabled = !zonesOn;
      z.classList.remove('is-picked');
    });
    S.ringEl.hidden = p !== 'windup';
    if (p === 'aim') status(`<b>${S.you.code}</b> — you're shooting. Tap a corner of the goal.`);
    if (p === 'windup') status(`<b>${S.bot.code}</b> steps up… tap where you'll <b>dive</b> before the kick!`);
    if (p === 'over') {
      const youWon = S.winner === 'you';
      status(youWon
        ? `<b>${S.you.short} win the shootout!</b> The bot trudges off.`
        : `<b>${S.bot.short} take it.</b> The bot does a little robot dance.`);
      S.actionsEl.hidden = false;
      saveRecord(youWon);
      showMsg(youWon ? 'CHAMPIONS!' : 'BOT WINS', youWon ? 'goal' : 'miss', 2400);
      if (youWon) S.cheer = now();
      if (youWon && window.WCFX) {
        const r = S.canvas.getBoundingClientRect();
        window.WCFX.confetti(r.left + r.width / 2, r.top + r.height / 3, [S.you.color, '#ffffff']);
      }
    }
  }

  function status(html) { S.statusEl.innerHTML = html; }

  function showMsg(text, kind, holdMs) {
    S.msgEl.textContent = text;
    S.msgEl.className = 'pk-msg pk-msg--' + kind + ' show';
    clearTimeout(S.msgEl._t);
    S.msgEl._t = setTimeout(() => S.msgEl.classList.remove('show'), holdMs || 1100);
  }

  function onZone(c, r) {
    if (S.phase === 'aim') {
      S.aiCols[c]++; S.aiRows[r]++;
      const kc = botKeeperGuess();
      const topCorner = r === 0 && (c === 0 || c === 2);
      const roll = Math.random();
      let outcome;
      if (topCorner && roll < 0.06) outcome = 'post';
      else if (topCorner && roll < 0.11) outcome = 'miss';
      else if (kc[0] === c) outcome = Math.random() < (kc[1] === r ? 0.8 : 0.42) ? 'save' : 'goal';
      else outcome = Math.random() < 0.05 ? 'save' : 'goal';
      S.plan = makePlan('you', [c, r], kc, outcome);
      setPhase('anim');
    } else if (S.phase === 'windup') {
      S.userDive = [c, r];
      S.zonesEl.querySelectorAll('.pk-zone').forEach(z => {
        z.classList.toggle('is-picked', +z.dataset.c === c && +z.dataset.r === r);
      });
    }
  }

  function botKeeperGuess() {
    const colSum = S.aiCols[0] + S.aiCols[1] + S.aiCols[2];
    let c;
    if (Math.random() < 0.45) {
      let roll = Math.random() * colSum;
      c = S.aiCols.findIndex(w => (roll -= w) <= 0);
      if (c < 0) c = 1;
    } else c = Math.floor(Math.random() * 3);
    const r = Math.random() < S.aiRows[1] / (S.aiRows[0] + S.aiRows[1]) ? 1 : 0;
    return [c, r];
  }

  function botShotPlan() {
    const corner = Math.random() < 0.62;
    const c = corner ? (Math.random() < 0.5 ? 0 : 2) : Math.floor(Math.random() * 3);
    const r = Math.random() < 0.45 ? 0 : 1;
    const roll = Math.random();
    let outcome;
    if (roll < 0.04) outcome = 'post';
    else if (roll < 0.08) outcome = 'miss';
    else {
      const d = S.userDive;
      if (!d) outcome = Math.random() < 0.06 ? 'save' : 'goal';
      else if (d[0] === c) outcome = Math.random() < (d[1] === r ? 0.76 : 0.4) ? 'save' : 'goal';
      else outcome = 'goal';
    }
    return makePlan('bot', [c, r], S.userDive, outcome);
  }

  /* per-kick timeline: your kicks include your own run-up */
  function makePlan(shooter, zone, keeper, outcome) {
    const run = shooter === 'you' ? 560 : 150;
    return {
      shooter, zone, keeper, outcome,
      t: { run, kick: run + 90, arrive: run + 90 + 460, next: run + 90 + 460 + 1350 }
    };
  }

  const WINDUP_MS = 1700;

  function animDone() {
    const p = S.plan;
    S.kicks[p.shooter].push(p.outcome);
    updateScore();
    S.plan = null;
    S.trail = [];
    S.impact = null;
    if (checkEnd()) { setPhase('over'); return; }
    const next = S.kicks.you.length === S.kicks.bot.length ? 'aim' : 'windup';
    setPhase(next);
  }

  function checkEnd() {
    const gy = S.kicks.you.filter(k => k === 'goal').length;
    const gb = S.kicks.bot.filter(k => k === 'goal').length;
    const ty = S.kicks.you.length, tb = S.kicks.bot.length;
    if (!S.sudden) {
      if (gy > gb + (5 - tb)) { S.winner = 'you'; return true; }
      if (gb > gy + (5 - ty)) { S.winner = 'bot'; return true; }
      if (ty === 5 && tb === 5) {
        if (gy !== gb) { S.winner = gy > gb ? 'you' : 'bot'; return true; }
        S.sudden = true;
        status('Level after five — <b>sudden death!</b>');
      }
      return false;
    }
    if (ty === tb && ty > 5 && gy !== gb) { S.winner = gy > gb ? 'you' : 'bot'; return true; }
    return false;
  }

  function updateScore() {
    const dots = side => {
      const arr = S.kicks[side];
      const slots = Math.max(5, arr.length + (S.sudden ? 1 : 0));
      let out = '';
      for (let i = 0; i < slots; i++) {
        const k = arr[i];
        out += `<i class="pk-dot ${k === 'goal' ? 'is-goal' : k ? 'is-fail' : ''}"></i>`;
      }
      return out;
    };
    const gy = S.kicks.you.filter(k => k === 'goal').length;
    const gb = S.kicks.bot.filter(k => k === 'goal').length;
    S.scoreEl.innerHTML = `
      <span class="pk-side"><span class="flag" style="background:${S.you.flag}"></span><b>${S.you.code}</b><em>YOU</em><span class="pk-dots">${dots('you')}</span></span>
      <span class="pk-num">${gy}<i>–</i>${gb}</span>
      <span class="pk-side pk-side--r"><span class="pk-dots">${dots('bot')}</span><em>BOT</em><b>${S.bot.code}</b><span class="flag" style="background:${S.bot.flag}"></span></span>`;
  }

  /* ============================ loop ============================ */

  function loop() {
    if (!S || !S.canvas.isConnected) { S = null; return; }
    if (S.canvas.offsetParent !== null && !document.hidden) {
      tick();
      draw();
    }
    S.raf = requestAnimationFrame(loop);
  }

  function tick() {
    const t = now() - S.phaseStart;
    if (S.phase === 'windup' && t >= WINDUP_MS) {
      S.plan = botShotPlan();
      setPhase('anim');
    } else if (S.phase === 'anim' && S.plan && t >= S.plan.t.next) {
      animDone();
    }
    if (S.phase === 'windup') {
      const k = Math.min(1, t / WINDUP_MS);
      S.ringEl.firstElementChild.style.transform = `scaleX(${1 - k})`;
      S.ringEl.firstElementChild.style.background = k > 0.7 ? '#ef4444' : '';
    }
  }

  /* ============================ scene ============================ */

  function draw() {
    const c = S.canvas, dpr = window.devicePixelRatio || 1;
    const W = c.clientWidth, H = c.clientHeight;
    if (!W) return;
    if (c.width !== W * dpr) { c.width = W * dpr; c.height = H * dpr; S.bg = null; }
    const x = S.ctx;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!S.bg || S.bgW !== W) buildBackdrop(W, H);

    /* camera shake */
    let sx = 0, sy = 0;
    if (S.shake && !REDUCED) {
      const k = (now() - S.shake.t0) / 320;
      if (k < 1) {
        const m = S.shake.mag * (1 - k);
        sx = rnd(-m, m); sy = rnd(-m, m);
      } else S.shake = null;
    }
    x.save();
    x.translate(sx, sy);

    x.drawImage(S.bg, 0, 0, W, H);
    drawCrowdLife(x, W, H);
    drawNet(x, W, H);

    const t = S.plan ? now() - S.phaseStart : 0;
    const keeperIsYou = S.phase === 'windup' || (S.phase === 'anim' && S.plan && S.plan.shooter === 'bot');
    const keeperTeam = keeperIsYou ? S.you : S.bot;
    const shooterTeam = keeperIsYou ? S.bot : S.you;

    drawKeeperState(x, W, H, t, keeperTeam);
    drawShooterState(x, W, H, t, shooterTeam);
    drawBallState(x, W, H, t);
    drawParticles(x, W, H);

    x.restore();

    /* vignette */
    const v = x.createRadialGradient(W / 2, H * 0.5, W * 0.32, W / 2, H * 0.5, W * 0.75);
    v.addColorStop(0, 'rgba(2,6,23,0)');
    v.addColorStop(1, 'rgba(2,6,23,0.42)');
    x.fillStyle = v;
    x.fillRect(0, 0, W, H);
  }

  /* ---------- cached stadium backdrop ---------- */

  function buildBackdrop(W, H) {
    const oc = document.createElement('canvas');
    oc.width = W; oc.height = H;
    const x = oc.getContext('2d');

    /* night sky + stars + city glow */
    const sky = x.createLinearGradient(0, 0, 0, H * 0.5);
    sky.addColorStop(0, '#060b22');
    sky.addColorStop(1, '#14224e');
    x.fillStyle = sky;
    x.fillRect(0, 0, W, H * 0.5);
    for (let i = 0; i < 40; i++) {
      x.globalAlpha = rnd(0.2, 0.8);
      x.fillStyle = '#cfe3ff';
      x.fillRect(rnd(0, W), rnd(0, H * 0.16), 1.4, 1.4);
    }
    x.globalAlpha = 1;

    /* upper tier (dark silhouettes) + roof line */
    x.fillStyle = '#0a1334';
    x.fillRect(0, H * 0.13, W, H * 0.1);
    x.fillStyle = '#091029';
    x.fillRect(0, H * 0.115, W, H * 0.022);
    for (let i = 0; i < W / 7; i++) { // distant upper-tier crowd
      x.fillStyle = ['#27355f', '#3a4a78', '#54426b', '#42606b'][(Math.random() * 4) | 0];
      x.beginPath();
      x.arc(i * 7 + rnd(-1, 1), H * 0.155 + rnd(0, H * 0.05), 1.7, 0, 7);
      x.fill();
    }

    /* main stand crowd: rows of heads + shirt bodies */
    const standTop = H * 0.23, standBot = H * 0.43;
    x.fillStyle = '#0d1838';
    x.fillRect(0, standTop, W, standBot - standTop);
    const shirts = ['#3b4f86', '#5b6ba8', '#8d5b6b', '#5b8d74', '#a8985b', '#6b5b8d', '#8d6b5b', '#4a7a8d'];
    const rows2 = 5;
    for (let row = 0; row < rows2; row++) {
      const ry = standTop + (row + 0.5) * (standBot - standTop) / rows2;
      const sc = 1 + row * 0.12; // nearer rows slightly bigger
      for (let i = 0; i < W / (8 * sc); i++) {
        const px = i * 8 * sc + (row % 2) * 4 + rnd(-1.5, 1.5);
        const shirt = shirts[(Math.random() * shirts.length) | 0];
        x.fillStyle = shirt;
        x.fillRect(px - 2.6 * sc, ry, 5.2 * sc, 4.5 * sc); // body
        x.fillStyle = SKINS[(Math.random() * SKINS.length) | 0];
        x.beginPath(); x.arc(px, ry - 1.6 * sc, 2.1 * sc, 0, 7); x.fill(); // head
      }
    }
    /* stand shadow gradient for depth */
    const sg = x.createLinearGradient(0, standTop, 0, standBot);
    sg.addColorStop(0, 'rgba(2,6,23,0.55)');
    sg.addColorStop(1, 'rgba(2,6,23,0.05)');
    x.fillStyle = sg;
    x.fillRect(0, standTop, W, standBot - standTop);

    /* floodlight towers + halos */
    for (const fx of [0.07, 0.93]) {
      const tx = W * fx;
      x.strokeStyle = '#1d2950';
      x.lineWidth = 5;
      x.beginPath(); x.moveTo(tx, H * 0.13); x.lineTo(tx, H * 0.02); x.stroke();
      x.fillStyle = '#16204a';
      x.fillRect(tx - 17, H * 0.012, 34, 18);
      for (let i = 0; i < 6; i++) {
        x.fillStyle = '#fff6d9';
        x.beginPath();
        x.arc(tx - 11 + (i % 3) * 11, H * 0.022 + Math.floor(i / 3) * 9, 3.1, 0, 7);
        x.fill();
      }
      const halo = x.createRadialGradient(tx, H * 0.03, 4, tx, H * 0.03, W * 0.16);
      halo.addColorStop(0, 'rgba(255,246,217,0.5)');
      halo.addColorStop(1, 'rgba(255,246,217,0)');
      x.fillStyle = halo;
      x.fillRect(tx - W * 0.16, 0, W * 0.32, H * 0.2);
    }

    /* ad boards */
    const adY = standBot, adH = H * 0.055;
    const ag = x.createLinearGradient(0, adY, 0, adY + adH);
    ag.addColorStop(0, '#13235c');
    ag.addColorStop(1, '#0b163d');
    x.fillStyle = ag;
    x.fillRect(0, adY, W, adH);
    x.fillStyle = 'rgba(255,255,255,0.07)';
    x.fillRect(0, adY, W, adH * 0.45);
    x.font = `700 ${Math.round(adH * 0.55)}px 'Barlow Condensed', sans-serif`;
    x.textBaseline = 'middle';
    const ads = [`PITCHSIDE '26`, 'WORLD CUP 26™', (S.teams[0].name || '').toUpperCase(), 'GOOOAL!', (S.teams[1].name || '').toUpperCase(), 'PK BATTLE'];
    let ax = 14;
    for (let i = 0; ax < W; i++) {
      const txt = ads[i % ads.length];
      x.fillStyle = i % 2 ? '#7ee2a8' : '#e9d36b';
      x.fillText(txt, ax, adY + adH * 0.52);
      ax += x.measureText(txt).width + adH * 1.4;
    }

    /* pitch: perspective mow stripes converging to goal line */
    const py = adY + adH;
    const grass = x.createLinearGradient(0, py, 0, H);
    grass.addColorStop(0, '#22743c');
    grass.addColorStop(0.5, '#2a9a4e');
    grass.addColorStop(1, '#31b35a');
    x.fillStyle = grass;
    x.fillRect(0, py, W, H - py);
    /* radial stripes from a vanishing point behind the goal */
    const vp = { x: W * 0.5, y: py - H * 0.18 };
    x.globalAlpha = 0.1;
    x.fillStyle = '#ffffff';
    for (let i = -5; i < 5; i++) {
      if ((i + 10) % 2) continue;
      const x1 = W * 0.5 + i * W * 0.11, x2 = W * 0.5 + (i + 1) * W * 0.11;
      x.beginPath();
      x.moveTo(vp.x + (x1 - vp.x) * 0.32, py);
      x.lineTo(vp.x + (x2 - vp.x) * 0.32, py);
      x.lineTo(x2, H);
      x.lineTo(x1, H);
      x.closePath();
      x.fill();
    }
    x.globalAlpha = 1;
    /* grass speckle */
    for (let i = 0; i < W * 1.2; i++) {
      x.globalAlpha = rnd(0.04, 0.12);
      x.fillStyle = Math.random() < 0.5 ? '#0c4a22' : '#7fe3a3';
      const gy2 = rnd(py, H);
      x.fillRect(rnd(0, W), gy2, 2 * (gy2 - py) / (H - py) + 0.6, 1.2);
    }
    x.globalAlpha = 1;

    /* six-yard box + goal line in perspective */
    x.strokeStyle = 'rgba(255,255,255,0.8)';
    x.lineWidth = 2.5;
    x.beginPath(); // goal line
    x.moveTo(W * 0.02, py + 3);
    x.lineTo(W * 0.98, py + 3);
    x.stroke();
    x.beginPath(); // six-yard box trapezoid
    x.moveTo(W * 0.2, py + 3);
    x.lineTo(W * 0.155, H * 0.71);
    x.lineTo(W * 0.845, H * 0.71);
    x.lineTo(W * 0.8, py + 3);
    x.stroke();
    /* penalty spot */
    x.fillStyle = 'rgba(255,255,255,0.95)';
    x.beginPath();
    x.ellipse(W * SPOT.x, H * (SPOT.y + 0.035), 5.5, 2.6, 0, 0, 7);
    x.fill();

    /* goal frame with depth: back posts + roof bar drawn first */
    const gx = W * GOAL.x, gy = H * GOAL.y, gw = W * GOAL.w, gh = H * GOAL.h;
    const depth = W * 0.035;
    x.strokeStyle = '#aab6cf';
    x.lineWidth = Math.max(3, W * 0.007);
    x.beginPath(); // back frame (smaller, raised: net roof)
    x.moveTo(gx + depth, gy + gh - depth * 0.4);
    x.lineTo(gx + depth, gy + depth * 0.5);
    x.lineTo(gx + gw - depth, gy + depth * 0.5);
    x.lineTo(gx + gw - depth, gy + gh - depth * 0.4);
    x.stroke();
    x.beginPath(); // roof connectors
    x.moveTo(gx, gy); x.lineTo(gx + depth, gy + depth * 0.5);
    x.moveTo(gx + gw, gy); x.lineTo(gx + gw - depth, gy + depth * 0.5);
    x.stroke();
    /* front frame: posts + crossbar with subtle 3D shading */
    const pw = Math.max(6, W * 0.013);
    x.lineCap = 'round';
    x.lineWidth = pw;
    for (const px2 of [gx, gx + gw]) {
      const pg = x.createLinearGradient(px2 - pw, 0, px2 + pw, 0);
      pg.addColorStop(0, '#ffffff'); pg.addColorStop(0.55, '#eef2fb'); pg.addColorStop(1, '#b3bed4');
      x.strokeStyle = pg;
      x.beginPath(); x.moveTo(px2, gy + gh + pw * 0.3); x.lineTo(px2, gy); x.stroke();
    }
    const cg = x.createLinearGradient(0, gy - pw, 0, gy + pw);
    cg.addColorStop(0, '#ffffff'); cg.addColorStop(0.6, '#eef2fb'); cg.addColorStop(1, '#b3bed4');
    x.strokeStyle = cg;
    x.beginPath(); x.moveTo(gx - pw * 0.3, gy); x.lineTo(gx + gw + pw * 0.3, gy); x.stroke();
    /* post shadows on the grass */
    x.globalAlpha = 0.18;
    x.fillStyle = '#06270f';
    for (const px2 of [gx, gx + gw]) {
      x.beginPath();
      x.ellipse(px2 + 6, gy + gh + 5, pw * 1.6, pw * 0.5, 0, 0, 7);
      x.fill();
    }
    x.globalAlpha = 1;

    S.bg = oc;
    S.bgW = W;
  }

  /* ---------- live crowd touches: flash bulbs + goal bounce ---------- */

  function drawCrowdLife(x, W, H) {
    if (REDUCED) return;
    /* random camera flashes in the stand */
    const n = S.cheer && now() - S.cheer < 2400 ? 7 : 2;
    for (let i = 0; i < n; i++) {
      if (Math.random() < 0.3) {
        x.globalAlpha = rnd(0.4, 0.9);
        x.fillStyle = '#ffffff';
        const fy = rnd(H * 0.24, H * 0.42);
        const r = rnd(1, 2.4);
        x.beginPath(); x.arc(rnd(0, W), fy, r, 0, 7); x.fill();
      }
    }
    x.globalAlpha = 1;
  }

  /* ---------- net with sag + impact bulge ---------- */

  function drawNet(x, W, H) {
    const gx = W * GOAL.x, gy = H * GOAL.y, gw = W * GOAL.w, gh = H * GOAL.h;
    const depth = W * 0.035;
    let bulge = null;
    if (S.impact && !REDUCED) {
      const k = (now() - S.impact.t0) / 420;
      if (k < 1) bulge = { x: S.impact.x * W, y: S.impact.y * H, r: gw * 0.16, amt: depth * 1.5 * Math.sin(Math.min(1, k * 1.4) * Math.PI) };
      else S.impact = null;
    }
    const disp = (px, py) => {
      if (!bulge) return [px, py];
      const d = Math.hypot(px - bulge.x, py - bulge.y);
      if (d > bulge.r) return [px, py];
      const f = (1 - d / bulge.r) * bulge.amt;
      return [px, py + f * 0.6]; // strands push back into the goal
    };
    x.strokeStyle = 'rgba(215,228,255,0.3)';
    x.lineWidth = 1;
    const segs = 8;
    /* vertical strands with sag */
    for (let i = 0; i <= 16; i++) {
      const fx = i / 16;
      x.beginPath();
      for (let j = 0; j <= segs; j++) {
        const fy = j / segs;
        const sag = Math.sin(fx * Math.PI) * 4 * fy;
        let px = gx + fx * gw + (fx < 0.5 ? 1 : -1) * fy * depth * 0.8;
        let py = gy + depth * 0.5 + fy * (gh - depth * 0.5) + sag;
        const [dx, dy] = disp(px, py);
        j ? x.lineTo(dx, dy) : x.moveTo(dx, dy);
      }
      x.stroke();
    }
    /* horizontal strands */
    for (let j = 1; j <= 7; j++) {
      const fy = j / 7;
      x.beginPath();
      for (let i = 0; i <= 16; i++) {
        const fx = i / 16;
        const sag = Math.sin(fx * Math.PI) * 4 * fy;
        let px = gx + fx * gw + (fx < 0.5 ? 1 : -1) * fy * depth * 0.8;
        let py = gy + depth * 0.5 + fy * (gh - depth * 0.5) + sag;
        const [dx, dy] = disp(px, py);
        i ? x.lineTo(dx, dy) : x.moveTo(dx, dy);
      }
      x.stroke();
    }
    /* side netting */
    x.strokeStyle = 'rgba(215,228,255,0.18)';
    for (const side of [0, 1]) {
      const px0 = side ? gx + gw : gx;
      const pin = side ? gx + gw - depth : gx + depth;
      for (let j = 1; j < 5; j++) {
        x.beginPath();
        x.moveTo(px0, gy + j / 5 * gh);
        x.lineTo(pin, gy + depth * 0.5 + j / 5 * (gh - depth * 0.4));
        x.stroke();
      }
    }
  }

  /* ---------- articulated figures ---------- */

  function limb(x, x1, y1, x2, y2, w, color) {
    x.strokeStyle = color;
    x.lineWidth = w;
    x.lineCap = 'round';
    x.beginPath();
    x.moveTo(x1, y1);
    x.lineTo(x2, y2);
    x.stroke();
  }

  /* one cartoon footballer. pose carries joint targets in local units. */
  function drawPlayer(x, px, py, s, team, salt, pose, opts) {
    opts = opts || {};
    const lk = look(team, salt);
    x.save();
    x.translate(px, py);
    if (pose.rot) x.rotate(pose.rot);
    x.scale(s, s);

    /* shadow stays unrotated relative to ground — drawn by caller */

    const skin = lk.skin, hair = lk.hair;
    const jersey = team.color, dark = 'rgba(2,6,23,0.55)';
    const shorts = '#f4f7ff', socks = team.color2 && team.color2 !== team.color ? team.color2 : '#e2e8f0';

    /* trailing leg then near leg (behind torso) */
    for (const L of [pose.legB, pose.legF]) {
      limb(x, L.hip[0], L.hip[1], L.knee[0], L.knee[1], 7.5, shorts === jersey ? '#dfe6f3' : '#1b2944');
      limb(x, L.knee[0], L.knee[1], L.foot[0], L.foot[1], 6, socks);
      /* boot */
      x.fillStyle = '#101726';
      x.beginPath();
      x.ellipse(L.foot[0] + (L.bootDir || 3), L.foot[1] + 1.5, 5.5, 3, (L.bootRot || 0), 0, 7);
      x.fill();
    }
    /* shorts block */
    x.fillStyle = shorts;
    rr(x, -9, -4, 18, 12, 5); x.fill();

    /* far arm behind torso */
    drawArm(x, pose.armB, skin, jersey, opts.gloves);

    /* torso */
    x.fillStyle = jersey;
    x.strokeStyle = dark;
    x.lineWidth = 2;
    rr(x, -10.5, -26, 21, 25, 8); x.fill(); x.stroke();
    /* sleeve stripes */
    x.fillStyle = 'rgba(255,255,255,0.35)';
    x.fillRect(-10.5, -25, 21, 2.4);
    /* number */
    x.fillStyle = 'rgba(255,255,255,0.9)';
    x.font = '700 9px "Barlow Condensed", sans-serif';
    x.textAlign = 'center';
    x.fillText(opts.number || '9', 0, -12);

    /* near arm in front */
    drawArm(x, pose.armF, skin, jersey, opts.gloves);

    /* head + hair + face */
    const hx = pose.head[0], hy = pose.head[1];
    x.fillStyle = skin;
    x.strokeStyle = dark;
    x.beginPath(); x.arc(hx, hy, 9.5, 0, 7); x.fill(); x.stroke();
    x.fillStyle = hair;
    x.beginPath();
    x.arc(hx, hy - 2.5, 9.5, Math.PI * 1.05, Math.PI * 1.95);
    x.quadraticCurveTo(hx + 9, hy - 7, hx + 7, hy - 2);
    x.fill();
    /* eyes track the ball */
    const ex = pose.eye || 0;
    x.fillStyle = '#0b1220';
    x.beginPath(); x.arc(hx - 3 + ex, hy - 0.5, 1.5, 0, 7); x.fill();
    x.beginPath(); x.arc(hx + 3 + ex, hy - 0.5, 1.5, 0, 7); x.fill();

    x.restore();
  }

  function drawArm(x, A, skin, jersey, gloves) {
    limb(x, A.sh[0], A.sh[1], A.el[0], A.el[1], 6.5, jersey);
    limb(x, A.el[0], A.el[1], A.hand[0], A.hand[1], 5, skin);
    if (gloves) {
      x.fillStyle = '#f4f7ff';
      x.strokeStyle = 'rgba(2,6,23,0.45)';
      x.lineWidth = 1.5;
      x.beginPath(); x.arc(A.hand[0], A.hand[1], 5, 0, 7); x.fill(); x.stroke();
    }
  }

  function rr(x, rx, ry, rw, rh, rad) {
    x.beginPath();
    if (x.roundRect) { x.roundRect(rx, ry, rw, rh, rad); return; }
    x.rect(rx, ry, rw, rh);
  }

  function groundShadow(x, px, py, w) {
    x.globalAlpha = 0.25;
    x.fillStyle = '#06270f';
    x.beginPath(); x.ellipse(px, py, w, w * 0.26, 0, 0, 7); x.fill();
    x.globalAlpha = 1;
  }

  /* ---------- keeper ---------- */

  const READY_POSE = bounce => ({
    rot: 0,
    head: [0, -34 + bounce],
    eye: 0,
    armF: { sh: [8, -22 + bounce], el: [20, -16 + bounce], hand: [27, -6 + bounce] },
    armB: { sh: [-8, -22 + bounce], el: [-20, -16 + bounce], hand: [-27, -6 + bounce] },
    legF: { hip: [5, 4], knee: [12, 14], foot: [14, 26], bootDir: 3 },
    legB: { hip: [-5, 4], knee: [-12, 14], foot: [-14, 26], bootDir: -3 }
  });

  function divePose(dir, row, k) {
    /* dir -1 left, +1 right, 0 center (straight jump); row 0 high, 1 low */
    const reach = 30 + k * 22 + (row === 0 ? 8 : 0);
    return {
      rot: dir * (row === 0 ? 1.1 : 0.8) * k,
      head: [dir * 6 * k, -34],
      eye: dir * 2,
      armF: { sh: [8, -22], el: [8 + dir * 14 * k + 6, -28 - 8 * k], hand: [dir * reach * 0.6 + dir * 10 + 8, -30 - reach * 0.45] },
      armB: { sh: [-8, -22], el: [dir * 10 * k - 8, -26 - 6 * k], hand: [dir * reach * 0.55 - 4, -28 - reach * 0.4] },
      legF: { hip: [5, 4], knee: [10 - dir * 6 * k, 15], foot: [12 - dir * 14 * k, 26 - 6 * k], bootDir: 3 },
      legB: { hip: [-5, 4], knee: [-9 - dir * 8 * k, 16], foot: [-11 - dir * 18 * k, 27 - 8 * k], bootDir: -3 }
    };
  }

  function drawKeeperState(x, W, H, t, team) {
    const s = Math.max(0.85, W / 640);
    const baseY = (GOAL.y + GOAL.h) * H - 4 * s;
    let px = 0.5 * W, py = baseY, pose;
    if (S.phase === 'anim' && S.plan && S.plan.keeper) {
      const dz = S.plan.keeper;
      const k = easeOut(clamp01((t - S.plan.t.kick + 60) / (S.plan.t.arrive - S.plan.t.kick)));
      const target = zoneCenter(dz[0], dz[1]);
      const dir = dz[0] === 1 ? 0 : dz[0] === 0 ? -1 : 1;
      px = lerp(0.5 * W, target.x * W + dir * -8 * s, k);
      py = lerp(baseY, Math.max(target.y * H + 26 * s, baseY - (dz[1] === 0 ? 30 * s : 6 * s)), k * 0.95);
      pose = divePose(dir, dz[1], k);
      groundShadow(x, lerp(0.5 * W, target.x * W, k), baseY + 28 * s, 26 * s * (1 - k * 0.4));
    } else {
      const bounce = REDUCED ? 0 : Math.sin(now() / 260) * 1.6;
      px = 0.5 * W + (REDUCED ? 0 : Math.sin(now() / 700) * 6 * s);
      pose = READY_POSE(bounce);
      /* keeper watches the ball */
      pose.eye = clamp01((S.trail[0] ? S.trail[0].x : 0.5) - 0.5) * 4;
      groundShadow(x, px, baseY + 28 * s, 24 * s);
    }
    drawPlayer(x, px, py, s, team, 'gk', pose, { gloves: true, number: '1' });
  }

  /* ---------- shooter ---------- */

  function runPose(p, swing) {
    /* p: 0..1 run progress; swing: 0..1 kick swing-through */
    const step = Math.sin(p * Math.PI * 4);
    const lean = 0.1 + p * 0.12 + swing * 0.18;
    if (swing > 0) {
      const sw = easeOut(swing);
      return {
        rot: -lean,
        head: [2, -34], eye: -2,
        armF: { sh: [8, -22], el: [18, -18], hand: [24, -26] },
        armB: { sh: [-8, -22], el: [-18, -14], hand: [-24, -4] },
        legF: { hip: [5, 4], knee: [lerp(16, -8, sw), lerp(16, 6, sw)], foot: [lerp(26, -20, sw), lerp(24, 2, sw)], bootDir: -4, bootRot: -0.6 },
        legB: { hip: [-5, 4], knee: [-8, 15], foot: [-8, 27], bootDir: -3 }
      };
    }
    return {
      rot: -lean,
      head: [2, -34], eye: -2,
      armF: { sh: [8, -22], el: [14 + step * 6, -14], hand: [16 + step * 10, -4 - step * 6] },
      armB: { sh: [-8, -22], el: [-14 - step * 6, -14], hand: [-16 - step * 10, -4 + step * 6] },
      legF: { hip: [5, 4], knee: [10 + step * 8, 14], foot: [12 + step * 14, 25 - Math.max(0, step) * 6], bootDir: 3 },
      legB: { hip: [-5, 4], knee: [-10 - step * 8, 14], foot: [-12 - step * 14, 25 - Math.max(0, -step) * 6], bootDir: -3 }
    };
  }

  function drawShooterState(x, W, H, t, team) {
    const s = Math.max(0.78, W / 720);
    const startX = 0.66, startY = 0.99;
    const endX = SPOT.x + 0.052, endY = SPOT.y + 0.012;
    let fx2 = endX, fy2 = endY, pose = null, visible = false;

    if (S.phase === 'windup') {
      const k = easeIn(clamp01((now() - S.phaseStart) / WINDUP_MS));
      fx2 = lerp(startX, endX, k); fy2 = lerp(startY, endY, k);
      pose = runPose(k, 0);
      visible = true;
    } else if (S.phase === 'anim' && S.plan) {
      const T = S.plan.t;
      if (S.plan.shooter === 'you' && t < T.run) {
        const k = easeIn(clamp01(t / T.run));
        fx2 = lerp(startX, endX, k); fy2 = lerp(startY, endY, k);
        pose = runPose(k, 0);
        visible = true;
      } else if (t < T.arrive + 350) {
        const sw = clamp01((t - (T.kick - 90)) / 180);
        pose = runPose(1, sw);
        visible = true;
      }
    }
    if (visible) {
      groundShadow(x, fx2 * W, fy2 * H + 2 * s, 20 * s);
      drawPlayer(x, fx2 * W, fy2 * H - 26 * s, s, team, 'st', pose, { number: '9' });
    }
  }

  /* ---------- ball ---------- */

  function drawBallState(x, W, H, t) {
    let bx = SPOT.x, by = SPOT.y, bs = 1, rot = REDUCED ? 0 : now() / 600;
    let flying = false;

    if (S.phase === 'anim' && S.plan) {
      const p = S.plan, T = p.t;
      const postX = p.zone[0] === 0 ? GOAL.x + 0.004 : GOAL.x + GOAL.w - 0.004;
      const target = p.outcome === 'miss'
        ? { x: p.zone[0] === 0 ? GOAL.x - 0.08 : p.zone[0] === 2 ? GOAL.x + GOAL.w + 0.08 : zoneCenter(1, 0).x, y: GOAL.y - 0.1 }
        : p.outcome === 'post'
          ? { x: postX, y: zoneCenter(p.zone[0], p.zone[1]).y - 0.04 }
          : zoneCenter(p.zone[0], p.zone[1]);

      if (t < T.kick) { /* waiting on the spot */ }
      else if (t < T.arrive) {
        flying = true;
        const k = easeOut((t - T.kick) / (T.arrive - T.kick));
        const mx = (SPOT.x + target.x) / 2, my = Math.min(SPOT.y, target.y) - 0.15;
        bx = lerp(lerp(SPOT.x, mx, k), lerp(mx, target.x, k), k);
        by = lerp(lerp(SPOT.y, my, k), lerp(my, target.y, k), k);
        bs = lerp(1, 0.62, k);
        rot = k * 16;
        if (t - T.kick < 90 && S.parts.length < 26) spawnGrass(SPOT.x, SPOT.y);
      } else {
        /* settled */
        if (!p.shown) {
          p.shown = true;
          onArrive(p, target);
        }
        const k2 = clamp01((t - T.arrive) / 420);
        if (p.outcome === 'save') {
          const g = p.keeper ? zoneCenter(p.keeper[0], p.keeper[1]) : { x: 0.5, y: GOAL.y + GOAL.h - 0.1 };
          bx = g.x + (g.x >= 0.5 ? 0.09 : -0.09) * easeOut(k2);
          by = g.y + 0.22 * k2 * k2;
          bs = 0.62;
          rot = k2 * 6;
        } else if (p.outcome === 'post') {
          bx = target.x + (p.zone[0] === 0 ? 0.11 : -0.11) * easeOut(k2);
          by = target.y + 0.24 * k2 * k2;
          bs = 0.62;
          rot = -k2 * 9;
        } else if (p.outcome === 'miss') {
          bx = target.x + (target.x > 0.5 ? 0.05 : -0.05) * k2;
          by = target.y - 0.06 * k2 + 0.18 * k2 * k2;
          bs = lerp(0.62, 0.48, k2);
        } else { bx = target.x; by = target.y + Math.min(0.02, k2 * 0.02); bs = 0.62; }
      }
    }

    /* trail */
    if (flying && !REDUCED) {
      S.trail.unshift({ x: bx, y: by, s: bs });
      S.trail = S.trail.slice(0, 7);
      for (let i = S.trail.length - 1; i > 0; i--) {
        const tr = S.trail[i];
        x.globalAlpha = 0.1 * (1 - i / S.trail.length);
        x.fillStyle = '#ffffff';
        x.beginPath();
        x.arc(tr.x * W, tr.y * H, Math.max(8, W / 56) * tr.s, 0, 7);
        x.fill();
      }
      x.globalAlpha = 1;
    } else if (!flying) S.trail = [];

    drawBall(x, W, H, bx, by, bs, rot);
  }

  function onArrive(p, target) {
    if (p.outcome === 'goal') {
      S.impact = { x: target.x, y: target.y, t0: now() };
      S.shake = { t0: now(), mag: 4 };
      S.cheer = p.shooter === 'you' ? now() : 0;
    } else if (p.outcome === 'post') {
      S.shake = { t0: now(), mag: 7 };
    } else if (p.outcome === 'save') {
      S.shake = { t0: now(), mag: 2.5 };
    }
    showMsg(
      p.outcome === 'goal' ? 'GOOOAL!' : p.outcome === 'save' ? 'SAVED!' : p.outcome === 'post' ? 'OFF THE POST!' : 'OFF TARGET!',
      p.outcome === 'goal' ? (p.shooter === 'you' ? 'goal' : 'miss')
        : p.outcome === 'save' ? (p.shooter === 'bot' ? 'goal' : 'miss') : 'miss');
  }

  function drawBall(x, W, H, fx2, fy2, scale, rot) {
    const px = fx2 * W, py = fy2 * H;
    const r = Math.max(9, W / 52) * scale;
    x.save();
    x.globalAlpha = 0.25;
    x.fillStyle = '#06270f';
    x.beginPath(); x.ellipse(px, Math.min(py + r * 1.7, H * 0.975), r * 0.95, r * 0.3, 0, 0, 7); x.fill();
    x.globalAlpha = 1;
    x.translate(px, py);
    x.rotate(rot);
    const bg = x.createRadialGradient(-r * 0.35, -r * 0.35, r * 0.2, 0, 0, r);
    bg.addColorStop(0, '#ffffff');
    bg.addColorStop(1, '#cdd6e4');
    x.fillStyle = bg;
    x.beginPath(); x.arc(0, 0, r, 0, 7); x.fill();
    x.strokeStyle = 'rgba(2,6,23,0.6)';
    x.lineWidth = 2;
    x.stroke();
    x.fillStyle = '#0b1220';
    x.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 - Math.PI / 2;
      const vx = Math.cos(a) * r * 0.4, vy = Math.sin(a) * r * 0.4;
      i ? x.lineTo(vx, vy) : x.moveTo(vx, vy);
    }
    x.closePath(); x.fill();
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 - Math.PI / 2;
      x.beginPath();
      x.moveTo(Math.cos(a) * r * 0.4, Math.sin(a) * r * 0.4);
      x.lineTo(Math.cos(a) * r * 0.92, Math.sin(a) * r * 0.92);
      x.strokeStyle = 'rgba(2,6,23,0.4)';
      x.stroke();
    }
    x.restore();
  }

  /* ---------- particles (kicked-up grass) ---------- */

  function spawnGrass(fx2, fy2) {
    if (REDUCED) return;
    for (let i = 0; i < 3; i++) {
      S.parts.push({
        x: fx2, y: fy2,
        vx: rnd(-0.0012, 0.0012), vy: rnd(-0.004, -0.001),
        g: 0.00022, life: 0, ttl: rnd(20, 40),
        c: Math.random() < 0.5 ? '#1c5b30' : '#3fae62'
      });
    }
  }

  function drawParticles(x, W, H) {
    S.parts = S.parts.filter(p => p.life < p.ttl);
    for (const p of S.parts) {
      p.life++;
      p.x += p.vx; p.y += p.vy; p.vy += p.g;
      x.globalAlpha = 1 - p.life / p.ttl;
      x.fillStyle = p.c;
      x.fillRect(p.x * W, p.y * H, 2.5, 2.5);
    }
    x.globalAlpha = 1;
  }

  return { mount };
})();
