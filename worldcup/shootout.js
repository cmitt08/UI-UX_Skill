/* Pitchside '26 — PK Battle: a cartoon penalty-shootout mini-game vs a bot.
   Self-contained: Shootout.mount(container, homeCode, awayCode, opts) reads
   team names/colors/flags from WC.TEAMS. Best-of-5 with sudden death; you
   shoot, then you keep goal, alternating. The bot keeper learns which way
   you like to shoot. */

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

  function zoneCenter(c, r) {
    return {
      x: GOAL.x + (c + 0.5) / 3 * GOAL.w,
      y: GOAL.y + (r + 0.55) / 2 * GOAL.h
    };
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
      canvas: container.querySelector('.pk-canvas'),
      msgEl: container.querySelector('.pk-msg'),
      statusEl: container.querySelector('.pk-status'),
      scoreEl: container.querySelector('.pk-score'),
      zonesEl: container.querySelector('.pk-zones'),
      ringEl: container.querySelector('.pk-ring'),
      gameEl: container.querySelector('.pk-game'),
      pickEl: container.querySelector('.pk-pick'),
      actionsEl: container.querySelector('.pk-actions'),
      crowd: null, raf: 0
    };
    S.ctx = S.canvas.getContext('2d');

    /* team pick cards */
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

    /* zone hotspots */
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

  const now = () => performance.now();

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
      /* track tendencies so the bot keeper can learn */
      S.aiCols[c]++; S.aiRows[r]++;
      const kc = botKeeperGuess();
      const topCorner = r === 0 && (c === 0 || c === 2);
      let outcome;
      if (topCorner && Math.random() < 0.1) outcome = 'miss';
      else if (kc[0] === c) outcome = Math.random() < (kc[1] === r ? 0.8 : 0.42) ? 'save' : 'goal';
      else outcome = Math.random() < 0.05 ? 'save' : 'goal';
      S.plan = { shooter: 'you', zone: [c, r], keeper: kc, outcome };
      setPhase('anim');
    } else if (S.phase === 'windup') {
      S.userDive = [c, r];
      S.zonesEl.querySelectorAll('.pk-zone').forEach(z => {
        z.classList.toggle('is-picked', +z.dataset.c === c && +z.dataset.r === r);
      });
    }
  }

  function botKeeperGuess() {
    /* mostly random, sometimes reads your favorite column/row */
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
    /* corners are tasty but riskier */
    const corner = Math.random() < 0.62;
    const c = corner ? (Math.random() < 0.5 ? 0 : 2) : Math.floor(Math.random() * 3);
    const r = Math.random() < 0.45 ? 0 : 1;
    let outcome;
    if (Math.random() < 0.07) outcome = 'miss';
    else {
      const d = S.userDive;
      if (!d) outcome = Math.random() < 0.06 ? 'save' : 'goal';
      else if (d[0] === c) outcome = Math.random() < (d[1] === r ? 0.76 : 0.4) ? 'save' : 'goal';
      else outcome = 'goal';
    }
    return { shooter: 'bot', zone: [c, r], keeper: S.userDive, outcome };
  }

  const WINDUP_MS = 1700;
  const ANIM = { kick: 220, arrive: 700, settle: 1500, next: 1900 };

  function animDone() {
    const p = S.plan;
    S.kicks[p.shooter].push(p.outcome);
    updateScore();
    S.plan = null;
    if (checkEnd()) { setPhase('over'); return; }
    /* alternate: you kick when counts are level (you go first) */
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

  /* ============================ render loop ============================ */

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
      S.plan.fromWindup = true;
    } else if (S.phase === 'anim' && t >= ANIM.next) {
      animDone();
    }
    if (S.phase === 'windup') {
      const k = Math.min(1, t / WINDUP_MS);
      S.ringEl.firstElementChild.style.transform = `scaleX(${1 - k})`;
      S.ringEl.firstElementChild.style.background = k > 0.7 ? '#ef4444' : '';
    }
  }

  /* ---- drawing helpers ---- */

  function draw() {
    const c = S.canvas, dpr = window.devicePixelRatio || 1;
    const W = c.clientWidth, H = c.clientHeight;
    if (!W) return;
    if (c.width !== W * dpr) { c.width = W * dpr; c.height = H * dpr; S.crowd = null; }
    const x = S.ctx;
    x.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawStadium(x, W, H);

    const t = now() - S.phaseStart;
    const keeperIsYou = S.phase === 'windup' || (S.phase === 'anim' && S.plan && S.plan.shooter === 'bot');
    const keeperTeam = keeperIsYou ? S.you : S.bot;
    const shooterTeam = keeperIsYou ? S.bot : S.you;

    /* keeper */
    let kx = 0.5, ky = GOAL.y + GOAL.h - 0.045, kAng = 0, kStretch = 0;
    if (S.phase === 'anim' && S.plan) {
      const dz = S.plan.keeper;
      if (dz) {
        const k = easeOut(Math.min(1, Math.max(0, (t - ANIM.kick) / (ANIM.arrive - ANIM.kick))));
        const target = zoneCenter(dz[0], dz[1]);
        kx = lerp(0.5, target.x, k);
        ky = lerp(ky, target.y + 0.05, k * 0.9);
        kAng = (target.x - 0.5) * 2.6 * k;
        kStretch = k;
      }
    } else {
      kx = 0.5 + (REDUCED ? 0 : Math.sin(now() / 460) * 0.012); // idle sway
    }
    drawKeeper(x, W, H, kx, ky, kAng, kStretch, keeperTeam);

    /* shooter figure (run-up during windup, kick pose during anim) */
    if (S.phase === 'windup') {
      const k = easeIn(Math.min(1, t / WINDUP_MS));
      drawShooter(x, W, H, lerp(0.72, 0.55, k), lerp(0.97, 0.9, k), shooterTeam, k);
    } else if (S.phase === 'anim' && t < ANIM.arrive) {
      drawShooter(x, W, H, 0.55, 0.9, shooterTeam, 1);
    }

    /* ball */
    let bx = SPOT.x, by = SPOT.y, bs = 1, rot = now() / 300;
    if (S.phase === 'anim' && S.plan) {
      const p = S.plan;
      const target = p.outcome === 'miss'
        ? { x: p.zone[0] === 0 ? GOAL.x - 0.07 : p.zone[0] === 2 ? GOAL.x + GOAL.w + 0.07 : zoneCenter(1, 0).x, y: GOAL.y - 0.09 }
        : zoneCenter(p.zone[0], p.zone[1]);
      if (t < ANIM.kick) { /* ball waits on the spot */ }
      else if (t < ANIM.arrive) {
        const k = easeOut((t - ANIM.kick) / (ANIM.arrive - ANIM.kick));
        const mx = (SPOT.x + target.x) / 2, my = Math.min(SPOT.y, target.y) - 0.16;
        bx = lerp(lerp(SPOT.x, mx, k), lerp(mx, target.x, k), k);
        by = lerp(lerp(SPOT.y, my, k), lerp(my, target.y, k), k);
        bs = lerp(1, 0.66, k);
        rot = k * 14;
      } else {
        /* settled: in the net, in the gloves, or gone wide */
        if (p.outcome === 'save') {
          const g = p.keeper ? zoneCenter(p.keeper[0], p.keeper[1]) : { x: 0.5, y: GOAL.y + GOAL.h - 0.1 };
          const k = Math.min(1, (t - ANIM.arrive) / 280);
          bx = g.x + (g.x > 0.5 ? 0.07 : -0.07) * k;
          by = g.y + 0.18 * k * k;
          bs = 0.66;
        } else if (p.outcome === 'miss') {
          const k = Math.min(1, (t - ANIM.arrive) / 380);
          bx = target.x + (target.x > 0.5 ? 0.05 : -0.05) * k;
          by = target.y - 0.07 * k + 0.16 * k * k;
          bs = lerp(0.66, 0.5, k);
        } else { bx = target.x; by = target.y; bs = 0.66; }
        if (t > ANIM.arrive && !S.plan.shown) {
          S.plan.shown = true;
          showMsg(p.outcome === 'goal' ? 'GOOOAL!' : p.outcome === 'save' ? 'SAVED!' : 'OFF TARGET!',
            p.outcome === 'goal' ? (p.shooter === 'you' ? 'goal' : 'miss') : p.outcome === 'save' ? (p.shooter === 'bot' ? 'goal' : 'miss') : 'miss');
        }
      }
    }
    drawBall(x, W, H, bx, by, bs, rot);
  }

  function drawStadium(x, W, H) {
    /* night sky */
    const sky = x.createLinearGradient(0, 0, 0, H * 0.62);
    sky.addColorStop(0, '#0a1230');
    sky.addColorStop(1, '#13204a');
    x.fillStyle = sky;
    x.fillRect(0, 0, W, H * 0.62);

    /* crowd (cached) */
    if (!S.crowd) {
      const oc = document.createElement('canvas');
      oc.width = W; oc.height = Math.round(H * 0.14);
      const o = oc.getContext('2d');
      o.fillStyle = '#0d1838';
      o.fillRect(0, 0, oc.width, oc.height);
      const cols = ['#3b4f86', '#5b6ba8', '#8d5b6b', '#5b8d74', '#a8985b', '#6b5b8d'];
      for (let row = 0; row < 4; row++) {
        for (let i = 0; i < W / 9; i++) {
          o.fillStyle = cols[(Math.random() * cols.length) | 0];
          o.beginPath();
          o.arc(i * 9 + (row % 2) * 4 + rnd(-1, 1), 6 + row * 8 + rnd(-1, 1), 2.6, 0, 7);
          o.fill();
        }
      }
      S.crowd = oc;
    }
    x.drawImage(S.crowd, 0, H * 0.02);

    /* floodlight beams */
    x.save();
    x.globalAlpha = 0.07;
    x.fillStyle = '#cde9ff';
    for (const fx of [0.12, 0.88]) {
      x.beginPath();
      x.moveTo(W * fx, 0);
      x.lineTo(W * (fx - 0.18), H * 0.7);
      x.lineTo(W * (fx + 0.18), H * 0.7);
      x.closePath();
      x.fill();
    }
    x.restore();

    /* pitch with mow stripes */
    const py = H * 0.55;
    const grass = x.createLinearGradient(0, py, 0, H);
    grass.addColorStop(0, '#1c7a3d');
    grass.addColorStop(1, '#27a854');
    x.fillStyle = grass;
    x.fillRect(0, py, W, H - py);
    x.globalAlpha = 0.1;
    x.fillStyle = '#ffffff';
    for (let i = 0; i < 6; i++) {
      if (i % 2) x.fillRect(0, py + (H - py) * i / 6, W, (H - py) / 6);
    }
    x.globalAlpha = 1;

    /* penalty box */
    x.strokeStyle = 'rgba(255,255,255,0.75)';
    x.lineWidth = 2;
    x.strokeRect(W * 0.04, H * 0.585, W * 0.92, H * 0.5);
    /* spot */
    x.fillStyle = 'rgba(255,255,255,0.9)';
    x.beginPath();
    x.ellipse(W * SPOT.x, H * (SPOT.y + 0.035), 5, 2.4, 0, 0, 7);
    x.fill();

    /* goal: net then frame */
    const gx = W * GOAL.x, gy = H * GOAL.y, gw = W * GOAL.w, gh = H * GOAL.h;
    x.strokeStyle = 'rgba(220,230,255,0.22)';
    x.lineWidth = 1;
    for (let i = 1; i < 14; i++) {
      x.beginPath(); x.moveTo(gx + gw * i / 14, gy); x.lineTo(gx + gw * i / 14, gy + gh); x.stroke();
    }
    for (let i = 1; i < 7; i++) {
      x.beginPath(); x.moveTo(gx, gy + gh * i / 7); x.lineTo(gx + gw, gy + gh * i / 7); x.stroke();
    }
    x.strokeStyle = '#f4f7ff';
    x.lineWidth = Math.max(5, W * 0.012);
    x.lineJoin = 'round';
    x.beginPath();
    x.moveTo(gx, gy + gh);
    x.lineTo(gx, gy);
    x.lineTo(gx + gw, gy);
    x.lineTo(gx + gw, gy + gh);
    x.stroke();
  }

  function drawKeeper(x, W, H, fx, fy, ang, stretch, team) {
    const px = fx * W, py = fy * H;
    const s = Math.max(0.8, W / 720);
    x.save();
    x.translate(px, py);
    x.rotate(ang * 0.5);
    /* shadow */
    x.globalAlpha = 0.25;
    x.fillStyle = '#06270f';
    x.beginPath(); x.ellipse(0, 30 * s, 30 * s, 7 * s, 0, 0, 7); x.fill();
    x.globalAlpha = 1;
    /* arms (stretch toward dive) */
    const reach = (26 + stretch * 26) * s;
    x.strokeStyle = team.color;
    x.lineWidth = 9 * s;
    x.lineCap = 'round';
    x.beginPath(); x.moveTo(-6 * s, -12 * s); x.lineTo(-reach, -28 * s - stretch * 12 * s); x.stroke();
    x.beginPath(); x.moveTo(6 * s, -12 * s); x.lineTo(reach, -28 * s - stretch * 12 * s); x.stroke();
    /* gloves */
    x.fillStyle = '#f4f7ff';
    for (const gx2 of [-reach, reach]) {
      x.beginPath(); x.arc(gx2, -28 * s - stretch * 12 * s, 7.5 * s, 0, 7); x.fill();
    }
    /* body */
    x.fillStyle = team.color;
    x.strokeStyle = 'rgba(2,6,23,0.5)';
    x.lineWidth = 2.5 * s;
    roundRect(x, -15 * s, -22 * s, 30 * s, 46 * s, 12 * s);
    x.fill(); x.stroke();
    /* head */
    x.fillStyle = '#ffd9a8';
    x.beginPath(); x.arc(0, -36 * s, 13 * s, 0, 7); x.fill(); x.stroke();
    /* face: two cartoon eyes looking at the ball */
    x.fillStyle = '#0b1220';
    x.beginPath(); x.arc(-4.5 * s, -37 * s, 2.2 * s, 0, 7); x.fill();
    x.beginPath(); x.arc(4.5 * s, -37 * s, 2.2 * s, 0, 7); x.fill();
    x.restore();
  }

  function drawShooter(x, W, H, fx, fy, team, k) {
    const px = fx * W, py = fy * H;
    const s = Math.max(0.7, W / 820);
    const bob = Math.sin(k * 26) * 3 * s;
    x.save();
    x.translate(px, py + bob);
    x.rotate(-0.12 * k);
    x.globalAlpha = 0.22;
    x.fillStyle = '#06270f';
    x.beginPath(); x.ellipse(0, 22 * s, 20 * s, 5 * s, 0, 0, 7); x.fill();
    x.globalAlpha = 1;
    x.fillStyle = team.color;
    x.strokeStyle = 'rgba(2,6,23,0.5)';
    x.lineWidth = 2 * s;
    roundRect(x, -11 * s, -16 * s, 22 * s, 32 * s, 9 * s);
    x.fill(); x.stroke();
    x.fillStyle = '#ffd9a8';
    x.beginPath(); x.arc(0, -26 * s, 10 * s, 0, 7); x.fill(); x.stroke();
    x.fillStyle = '#0b1220';
    x.beginPath(); x.arc(-3.4 * s, -27 * s, 1.8 * s, 0, 7); x.fill();
    x.beginPath(); x.arc(3.4 * s, -27 * s, 1.8 * s, 0, 7); x.fill();
    x.restore();
  }

  function drawBall(x, W, H, fx, fy, scale, rot) {
    const px = fx * W, py = fy * H;
    const r = Math.max(9, W / 52) * scale;
    x.save();
    /* shadow */
    x.globalAlpha = 0.25;
    x.fillStyle = '#06270f';
    x.beginPath(); x.ellipse(px, Math.min(py + r * 1.6, H * 0.97), r * 0.9, r * 0.3, 0, 0, 7); x.fill();
    x.globalAlpha = 1;
    x.translate(px, py);
    x.rotate(rot);
    x.fillStyle = '#f8fafc';
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

  function roundRect(x, rx, ry, rw, rh, rad) {
    x.beginPath();
    if (x.roundRect) { x.roundRect(rx, ry, rw, rh, rad); return; }
    x.moveTo(rx + rad, ry);
    x.arcTo(rx + rw, ry, rx + rw, ry + rh, rad);
    x.arcTo(rx + rw, ry + rh, rx, ry + rh, rad);
    x.arcTo(rx, ry + rh, rx, ry, rad);
    x.arcTo(rx, ry, rx + rw, ry, rad);
    x.closePath();
  }

  return { mount };
})();
