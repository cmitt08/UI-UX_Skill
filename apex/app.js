/* ============================================================
   APEX — gym progress tracker
   Vanilla JS + Chart.js. Data lives in localStorage.
   ============================================================ */

(() => {
  'use strict';

  /* ---------- constants & state ---------- */

  const STORE_KEY = 'apex.sessions.v1';
  const UNIT_KEY = 'apex.unit';
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const COLORS = {
    volt: '#D7FF3E',
    cyan: '#4DE3FF',
    pink: '#FF5C7A',
    amber: '#FFC53D',
    purple: '#B07CFF',
    mint: '#7DFFB2',
    muted: '#9AA3B5',
    grid: 'rgba(255,255,255,0.06)',
    panel: '#161B2B',
  };

  const MUSCLE_GROUPS = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core', 'Other'];

  const EXERCISES = {
    'Bench Press': 'Chest', 'Incline Bench Press': 'Chest', 'Dumbbell Press': 'Chest',
    'Incline Dumbbell Press': 'Chest', 'Cable Fly': 'Chest', 'Push-Up': 'Chest', 'Dip': 'Chest',
    'Deadlift': 'Back', 'Barbell Row': 'Back', 'Dumbbell Row': 'Back', 'Pull-Up': 'Back',
    'Chin-Up': 'Back', 'Lat Pulldown': 'Back', 'Seated Cable Row': 'Back', 'Face Pull': 'Back',
    'Squat': 'Legs', 'Front Squat': 'Legs', 'Leg Press': 'Legs', 'Romanian Deadlift': 'Legs',
    'Lunge': 'Legs', 'Bulgarian Split Squat': 'Legs', 'Leg Curl': 'Legs', 'Leg Extension': 'Legs',
    'Hip Thrust': 'Legs', 'Calf Raise': 'Legs',
    'Overhead Press': 'Shoulders', 'Dumbbell Shoulder Press': 'Shoulders',
    'Lateral Raise': 'Shoulders', 'Rear Delt Fly': 'Shoulders', 'Shrug': 'Shoulders',
    'Bicep Curl': 'Arms', 'Hammer Curl': 'Arms', 'Preacher Curl': 'Arms',
    'Tricep Pushdown': 'Arms', 'Skull Crusher': 'Arms', 'Overhead Tricep Extension': 'Arms',
    'Plank': 'Core', 'Hanging Leg Raise': 'Core', 'Cable Crunch': 'Core', 'Ab Wheel': 'Core',
  };

  const GROUP_KEYWORDS = [
    ['Chest', ['bench', 'chest', 'fly', 'push-up', 'pushup', 'dip', 'pec']],
    ['Back', ['deadlift', 'row', 'pull-up', 'pullup', 'chin', 'pulldown', 'lat ', 'back']],
    ['Legs', ['squat', 'leg', 'lunge', 'calf', 'hip thrust', 'glute', 'hamstring', 'rdl']],
    ['Shoulders', ['press', 'shoulder', 'lateral', 'delt', 'shrug', 'ohp']],
    ['Arms', ['curl', 'tricep', 'bicep', 'extension', 'pushdown', 'arm']],
    ['Core', ['plank', 'crunch', 'ab ', 'abs', 'core', 'leg raise']],
  ];

  let sessions = loadSessions();
  let unit = localStorage.getItem(UNIT_KEY) === 'kg' ? 'kg' : 'lbs';
  let charts = {};
  let chartsReady = false;
  let countersArmed = false;

  /* ---------- tiny helpers ---------- */

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  };

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function parseDate(s) {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function dateStr(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function weekStart(d) {
    const w = new Date(d);
    w.setDate(w.getDate() - ((w.getDay() + 6) % 7)); // back to Monday
    return w;
  }

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const shortDate = (d) => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

  function fmtInt(n) { return Math.round(n).toLocaleString('en-US'); }

  function fmtCompact(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 2) + 'M';
    if (n >= 1e4) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return fmtInt(n);
  }

  function muscleGroup(name) {
    if (EXERCISES[name]) return EXERCISES[name];
    const lower = (name || '').toLowerCase();
    for (const [group, words] of GROUP_KEYWORDS) {
      if (words.some((w) => lower.includes(w))) return group;
    }
    return 'Other';
  }

  /* ---------- calculations ---------- */

  // Epley estimated one-rep max
  function e1rm(weight, reps) {
    if (!weight || !reps) return 0;
    return reps === 1 ? weight : weight * (1 + reps / 30);
  }

  const entryVolume = (en) => en.sets * en.reps * (en.weight || 0);
  const sessionVolume = (s) => s.entries.reduce((sum, en) => sum + entryVolume(en), 0);
  const totalVolume = () => sessions.reduce((sum, s) => sum + sessionVolume(s), 0);

  function weekStreak() {
    if (!sessions.length) return 0;
    const weeks = new Set(sessions.map((s) => dateStr(weekStart(parseDate(s.date)))));
    let cursor = weekStart(new Date());
    // Current week doesn't break the streak while it's still in progress
    if (!weeks.has(dateStr(cursor))) cursor.setDate(cursor.getDate() - 7);
    let streak = 0;
    while (weeks.has(dateStr(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 7);
    }
    return streak;
  }

  // A PR = beating your previous best estimated 1RM on a lift
  function countPRs() {
    const best = {};
    let prs = 0;
    for (const s of sessions) {
      const sessionBest = {};
      for (const en of s.entries) {
        const max = e1rm(en.weight, en.reps);
        if (max <= 0) continue;
        sessionBest[en.exercise] = Math.max(sessionBest[en.exercise] || 0, max);
      }
      for (const [ex, max] of Object.entries(sessionBest)) {
        if (best[ex] !== undefined && max > best[ex]) prs += 1;
        if (best[ex] === undefined || max > best[ex]) best[ex] = max;
      }
    }
    return prs;
  }

  /* ---------- storage ---------- */

  function loadSessions() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(raw) ? raw.filter(validSession) : [];
    } catch {
      return [];
    }
  }

  function validSession(s) {
    return s && typeof s.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s.date)
      && Array.isArray(s.entries) && s.entries.every((en) =>
        en && typeof en.exercise === 'string'
        && en.sets > 0 && en.reps > 0 && en.weight >= 0);
  }

  function persist() {
    sessions.sort((a, b) => a.date.localeCompare(b.date));
    localStorage.setItem(STORE_KEY, JSON.stringify(sessions));
  }

  /* ---------- toast ---------- */

  let toastTimer;
  function toast(msg, isError = false) {
    const node = $('#toast');
    node.textContent = msg;
    node.classList.toggle('is-error', isError);
    node.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove('is-on'), 3200);
  }

  /* ---------- workout form ---------- */

  const entriesBox = $('#entries');

  function entryHead() {
    const head = el('div', 'entry__head');
    head.innerHTML = '<span>Exercise</span><span>Sets</span><span>Reps</span><span data-unit-label>Weight (lbs)</span><span></span>';
    return head;
  }

  function addEntryRow(prefill = {}) {
    const row = el('div', 'entry');

    const ex = el('input');
    ex.type = 'text';
    ex.setAttribute('list', 'exerciseList');
    ex.placeholder = 'Bench Press';
    ex.required = true;
    ex.value = prefill.exercise || '';
    ex.setAttribute('aria-label', 'Exercise name');
    ex.style.textAlign = 'left';

    const mk = (ph, min, val, label) => {
      const input = el('input');
      input.type = 'number';
      input.placeholder = ph;
      input.min = min;
      input.inputMode = 'decimal';
      if (val !== undefined && val !== '') input.value = val;
      input.setAttribute('aria-label', label);
      return input;
    };

    const sets = mk('3', 1, prefill.sets, 'Sets');
    const reps = mk('8', 1, prefill.reps, 'Reps');
    const weight = mk('135', 0, prefill.weight, 'Weight');
    weight.step = 'any';

    const remove = el('button', 'entry__remove');
    remove.type = 'button';
    remove.setAttribute('aria-label', 'Remove exercise row');
    remove.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    remove.addEventListener('click', () => {
      if (entriesBox.querySelectorAll('.entry').length > 1) row.remove();
      else { ex.value = ''; sets.value = ''; reps.value = ''; weight.value = ''; }
    });

    row.append(ex, sets, reps, weight, remove);
    entriesBox.appendChild(row);
    return row;
  }

  function resetForm() {
    entriesBox.innerHTML = '';
    entriesBox.appendChild(entryHead());
    addEntryRow();
    $('#sessionDate').value = todayStr();
    $('#sessionNote').value = '';
    applyUnitLabels();
  }

  function collectForm() {
    const date = $('#sessionDate').value;
    if (!date) return { error: 'Pick a date for the session.' };

    const entries = [];
    for (const row of entriesBox.querySelectorAll('.entry')) {
      const [ex, sets, reps, weight] = row.querySelectorAll('input');
      const name = ex.value.trim();
      if (!name && !sets.value && !reps.value && !weight.value) continue; // blank row
      const s = parseInt(sets.value, 10);
      const r = parseInt(reps.value, 10);
      const w = parseFloat(weight.value || '0');
      if (!name) return { error: 'Every row needs an exercise name.' };
      if (!(s > 0) || !(r > 0)) return { error: `Add sets and reps for ${name}.` };
      if (!(w >= 0)) return { error: `Weight for ${name} can't be negative.` };
      entries.push({ exercise: name, sets: s, reps: r, weight: w });
    }

    if (!entries.length) return { error: 'Log at least one exercise.' };
    const note = $('#sessionNote').value.trim();
    return { session: { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, date, note, entries } };
  }

  $('#workoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const { session, error } = collectForm();
    if (error) { toast(error, true); return; }
    sessions.push(session);
    persist();
    renderAll();
    resetForm();
    toast(`Session saved — ${fmtInt(sessionVolume(session))} ${unit} moved. Nice work.`);
  });

  $('#addEntry').addEventListener('click', () => {
    const row = addEntryRow();
    row.querySelector('input').focus();
  });

  /* ---------- history ---------- */

  function renderHistory() {
    const list = $('#historyList');
    list.innerHTML = '';
    const recent = [...sessions].reverse().slice(0, 12);
    $('#historyEmpty').hidden = recent.length > 0;

    for (const s of recent) {
      const li = el('li');

      const date = el('span', 'history__date');
      date.textContent = shortDate(parseDate(s.date));

      const meta = el('div', 'history__meta');
      const names = s.entries.map((en) => en.exercise);
      const shown = names.slice(0, 2).join(', ') + (names.length > 2 ? ` +${names.length - 2}` : '');
      const title = el('strong');
      title.textContent = s.note || shown;
      const sub = el('span');
      sub.textContent = `${fmtInt(sessionVolume(s))} ${unit} · ${s.entries.length} exercise${s.entries.length === 1 ? '' : 's'}`;
      meta.append(title, sub);

      const del = el('button', 'history__del');
      del.type = 'button';
      del.setAttribute('aria-label', `Delete session from ${s.date}`);
      del.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';
      del.addEventListener('click', () => {
        if (!confirm(`Delete the ${s.date} session? This can't be undone.`)) return;
        sessions = sessions.filter((x) => x.id !== s.id);
        persist();
        renderAll();
        toast('Session deleted.');
      });

      li.append(date, meta, del);
      list.appendChild(li);
    }
  }

  /* ---------- stats & counters ---------- */

  function animateCount(node, to, fmt) {
    const from = parseFloat(node.dataset.now || '0');
    if (REDUCED || Math.abs(to - from) < 1) {
      node.textContent = fmt(to);
      node.dataset.now = to;
      return;
    }
    const dur = 1300;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
      else node.dataset.now = to;
    };
    requestAnimationFrame(tick);
  }

  function renderStats() {
    const vol = totalVolume();
    const streak = weekStreak();
    const prs = countPRs();

    $('#heroSessions').textContent = fmtInt(sessions.length);
    $('#heroStreak').textContent = streak;
    $('#heroVolume').textContent = fmtCompact(vol) + ' ' + unit;

    if (countersArmed) {
      animateCount($('#statSessions'), sessions.length, fmtInt);
      animateCount($('#statVolume'), vol, fmtCompact);
      animateCount($('#statStreak'), streak, fmtInt);
      animateCount($('#statPRs'), prs, fmtInt);
    }
    // if counters aren't armed yet, the intersection observer animates
    // them with freshly computed values once the stat band scrolls in
  }

  function armCounters() {
    if (countersArmed) return;
    countersArmed = true;
    animateCount($('#statSessions'), sessions.length, fmtInt);
    animateCount($('#statVolume'), totalVolume(), fmtCompact);
    animateCount($('#statStreak'), weekStreak(), fmtInt);
    animateCount($('#statPRs'), countPRs(), fmtInt);
  }

  /* ---------- data shaping for charts ---------- */

  function weekSeries(maxWeeks) {
    const end = weekStart(new Date());
    let start = sessions.length ? weekStart(parseDate(sessions[0].date)) : new Date(end);
    const cap = new Date(end);
    cap.setDate(cap.getDate() - 7 * (maxWeeks - 1));
    if (start < cap) start = cap;

    const weeks = [];
    const cursor = new Date(start);
    while (cursor <= end) {
      weeks.push(dateStr(cursor));
      cursor.setDate(cursor.getDate() + 7);
    }

    const volume = Object.fromEntries(weeks.map((w) => [w, 0]));
    const count = Object.fromEntries(weeks.map((w) => [w, 0]));
    for (const s of sessions) {
      const key = dateStr(weekStart(parseDate(s.date)));
      if (key in volume) {
        volume[key] += sessionVolume(s);
        count[key] += 1;
      }
    }
    return { weeks, volume, count };
  }

  function splitByMuscle() {
    const totals = {};
    for (const s of sessions) {
      for (const en of s.entries) {
        const g = muscleGroup(en.exercise);
        totals[g] = (totals[g] || 0) + entryVolume(en);
      }
    }
    return MUSCLE_GROUPS.filter((g) => totals[g] > 0).map((g) => [g, totals[g]]);
  }

  function exercisesByVolume() {
    const totals = {};
    for (const s of sessions) {
      for (const en of s.entries) {
        if (en.weight > 0) totals[en.exercise] = (totals[en.exercise] || 0) + entryVolume(en);
      }
    }
    return Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([name]) => name);
  }

  function e1rmHistory(exercise) {
    const points = [];
    for (const s of sessions) {
      let best = 0;
      for (const en of s.entries) {
        if (en.exercise === exercise) best = Math.max(best, e1rm(en.weight, en.reps));
      }
      if (best > 0) points.push({ date: s.date, value: Math.round(best) });
    }
    return points;
  }

  /* ---------- charts ---------- */

  function chartDefaults() {
    Chart.defaults.font.family = "'Manrope', system-ui, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = COLORS.muted;
    Chart.defaults.borderColor = COLORS.grid;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.backgroundColor = COLORS.panel;
    Chart.defaults.plugins.tooltip.borderColor = 'rgba(255,255,255,0.14)';
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.titleColor = '#F2F5F7';
    Chart.defaults.plugins.tooltip.bodyColor = COLORS.muted;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 10;
    Chart.defaults.plugins.tooltip.displayColors = false;
    Chart.defaults.animation.duration = REDUCED ? 0 : 900;
    Chart.defaults.animation.easing = 'easeOutQuart';
  }

  function destroyCharts() {
    Object.values(charts).forEach((c) => c.destroy());
    charts = {};
  }

  function chartsUnavailable() {
    if (typeof Chart !== 'undefined') return false;
    document.querySelectorAll('.chart-card__body').forEach((body) => {
      if (!body.querySelector('.chart-card__offline')) {
        const note = el('p', 'chart-card__offline');
        note.textContent = "Charts couldn't load — check your connection and refresh.";
        body.appendChild(note);
      }
    });
    return true;
  }

  function buildCharts() {
    if (chartsUnavailable()) return;
    destroyCharts();
    if (!sessions.length) return;

    const axisOpts = {
      x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkipPadding: 12 } },
      y: { grid: { color: COLORS.grid }, border: { display: false }, beginAtZero: true },
    };

    /* weekly volume — area */
    const wk = weekSeries(26);
    const volCanvas = $('#volumeChart');
    const vctx = volCanvas.getContext('2d');
    const grad = vctx.createLinearGradient(0, 0, 0, volCanvas.parentElement.clientHeight || 320);
    grad.addColorStop(0, 'rgba(215,255,62,0.35)');
    grad.addColorStop(1, 'rgba(215,255,62,0.0)');

    charts.volume = new Chart(volCanvas, {
      type: 'line',
      data: {
        labels: wk.weeks.map((w) => shortDate(parseDate(w))),
        datasets: [{
          data: wk.weeks.map((w) => wk.volume[w]),
          borderColor: COLORS.volt,
          backgroundColor: grad,
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: COLORS.volt,
          pointBorderColor: 'rgba(0,0,0,0.4)',
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: axisOpts,
        plugins: {
          tooltip: {
            callbacks: {
              title: (items) => `Week of ${items[0].label}`,
              label: (item) => `${fmtInt(item.parsed.y)} ${unit} moved`,
            },
          },
        },
      },
    });

    /* sessions per week — bars */
    const wk12 = weekSeries(12);
    charts.freq = new Chart($('#freqChart'), {
      type: 'bar',
      data: {
        labels: wk12.weeks.map((w) => shortDate(parseDate(w))),
        datasets: [{
          data: wk12.weeks.map((w) => wk12.count[w]),
          backgroundColor: 'rgba(77,227,255,0.65)',
          hoverBackgroundColor: COLORS.cyan,
          borderRadius: 7,
          borderSkipped: false,
          maxBarThickness: 34,
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: axisOpts.x,
          y: { ...axisOpts.y, ticks: { stepSize: 1 } },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (items) => `Week of ${items[0].label}`,
              label: (item) => `${item.parsed.y} session${item.parsed.y === 1 ? '' : 's'}`,
            },
          },
        },
      },
    });

    /* muscle split — doughnut */
    const split = splitByMuscle();
    const palette = [COLORS.volt, COLORS.cyan, COLORS.pink, COLORS.amber, COLORS.purple, COLORS.mint, COLORS.muted];
    charts.split = new Chart($('#splitChart'), {
      type: 'doughnut',
      data: {
        labels: split.map(([g]) => g),
        datasets: [{
          data: split.map(([, v]) => v),
          backgroundColor: palette.slice(0, split.length),
          borderColor: '#11151F',
          borderWidth: 3,
          hoverOffset: 10,
        }],
      },
      options: {
        maintainAspectRatio: false,
        cutout: '64%',
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: { boxWidth: 12, boxHeight: 12, borderRadius: 3, useBorderRadius: true, padding: 14, font: { weight: 600 } },
          },
          tooltip: {
            callbacks: {
              label: (item) => {
                const total = split.reduce((s, [, v]) => s + v, 0);
                return `${fmtCompact(item.parsed)} ${unit} (${Math.round((item.parsed / total) * 100)}%)`;
              },
            },
          },
        },
      },
    });

    buildE1rmChart();
  }

  function buildE1rmChart() {
    if (chartsUnavailable()) return;
    if (charts.e1rm) { charts.e1rm.destroy(); delete charts.e1rm; }
    const exercise = $('#exerciseSelect').value;
    if (!exercise) return;

    const points = e1rmHistory(exercise);
    let running = 0;
    const isPR = points.map((p) => {
      const pr = p.value > running;
      running = Math.max(running, p.value);
      return pr;
    });

    charts.e1rm = new Chart($('#e1rmChart'), {
      type: 'line',
      data: {
        labels: points.map((p) => shortDate(parseDate(p.date))),
        datasets: [{
          data: points.map((p) => p.value),
          borderColor: COLORS.cyan,
          borderWidth: 2.5,
          tension: 0.3,
          fill: false,
          pointRadius: isPR.map((pr) => (pr ? 6 : 3.5)),
          pointHoverRadius: 8,
          pointBackgroundColor: isPR.map((pr) => (pr ? COLORS.volt : COLORS.cyan)),
          pointBorderColor: 'rgba(0,0,0,0.45)',
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkipPadding: 12 } },
          y: { grid: { color: COLORS.grid }, border: { display: false } },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (item) => `Est. 1RM: ${fmtInt(item.parsed.y)} ${unit}${isPR[item.dataIndex] ? '  ·  PR' : ''}`,
            },
          },
        },
      },
    });
  }

  function renderExerciseSelect() {
    const select = $('#exerciseSelect');
    const prev = select.value;
    const options = exercisesByVolume();
    select.innerHTML = '';
    for (const name of options) {
      const opt = el('option');
      opt.value = opt.textContent = name;
      select.appendChild(opt);
    }
    if (options.includes(prev)) select.value = prev;
  }

  $('#exerciseSelect').addEventListener('change', buildE1rmChart);

  /* ---------- heatmap ---------- */

  function renderHeatmap() {
    const box = $('#heatmap');
    box.innerHTML = '';

    const dayVolume = {};
    for (const s of sessions) {
      dayVolume[s.date] = (dayVolume[s.date] || 0) + sessionVolume(s);
    }
    const peak = Math.max(1, ...Object.values(dayVolume));

    const start = weekStart(new Date());
    start.setDate(start.getDate() - 7 * 25); // 26 columns of weeks
    const today = new Date();

    const cursor = new Date(start);
    while (cursor <= today || cursor.getDay() !== 1) {
      const key = dateStr(cursor);
      const cell = el('i');
      const v = dayVolume[key] || 0;
      let lvl = 0;
      if (v > 0) lvl = v < peak * 0.25 ? 1 : v < peak * 0.5 ? 2 : v < peak * 0.8 ? 3 : 4;
      cell.className = `hm-${lvl}`;
      cell.title = v > 0
        ? `${shortDate(cursor)} — ${fmtInt(v)} ${unit}`
        : `${shortDate(cursor)} — rest`;
      if (cursor > today) cell.style.visibility = 'hidden';
      box.appendChild(cell);
      cursor.setDate(cursor.getDate() + 1);
      if (cursor > today && cursor.getDay() === 1) break;
    }
  }

  /* ---------- PR board ---------- */

  function renderPRs() {
    const grid = $('#prGrid');
    grid.innerHTML = '';

    const lifts = {};
    for (const s of sessions) {
      for (const en of s.entries) {
        const max = e1rm(en.weight, en.reps);
        if (max <= 0) continue;
        const rec = lifts[en.exercise] || (lifts[en.exercise] = { first: max, best: 0 });
        if (max > rec.best) {
          rec.best = max;
          rec.weight = en.weight;
          rec.reps = en.reps;
          rec.date = s.date;
        }
      }
    }

    const top = Object.entries(lifts)
      .sort((a, b) => b[1].best - a[1].best)
      .slice(0, 6);

    $('#prEmpty').hidden = top.length > 0;

    top.forEach(([name, rec], i) => {
      const card = el('article', 'pr-card reveal');
      card.style.setProperty('--d', `${i * 0.07}s`);
      const gain = rec.first > 0 ? Math.round(((rec.best - rec.first) / rec.first) * 100) : 0;
      card.innerHTML = `
        <h3 class="pr-card__name"></h3>
        <div class="pr-card__big">${fmtInt(rec.best)}<small>${unit} e1RM</small></div>
        <p class="pr-card__set">Best set: ${fmtInt(rec.weight)} ${unit} × ${rec.reps}</p>
        <div class="pr-card__foot">
          <span>${shortDate(parseDate(rec.date))}</span>
          <span class="pr-card__delta ${gain <= 0 ? 'is-flat' : ''}">${gain > 0 ? '+' + gain + '%' : 'baseline'}</span>
        </div>`;
      card.querySelector('.pr-card__name').textContent = name;
      grid.appendChild(card);
      observeReveal(card);
    });
  }

  /* ---------- import / export / demo ---------- */

  $('#exportBtn').addEventListener('click', () => {
    if (!sessions.length) { toast('Nothing to export yet.', true); return; }
    const blob = new Blob([JSON.stringify(sessions, null, 2)], { type: 'application/json' });
    const a = el('a');
    a.href = URL.createObjectURL(blob);
    a.download = `apex-workouts-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast(`Exported ${sessions.length} sessions.`);
  });

  $('#importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!Array.isArray(data) || !data.every(validSession)) throw new Error();
        if (sessions.length && !confirm(`Replace your current ${sessions.length} sessions with ${data.length} imported ones?`)) return;
        sessions = data;
        persist();
        renderAll();
        toast(`Imported ${data.length} sessions.`);
      } catch {
        toast("That file doesn't look like an APEX export.", true);
      }
    };
    reader.readAsText(file);
  });

  function mulberry32(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateDemo() {
    const rnd = mulberry32(2026);
    const round5 = (n) => Math.round(n / 5) * 5;
    const plan = [
      // [weekday, name, [exercise, startWeight, weeklyGain, sets, reps]]
      [1, 'Push day', [
        ['Bench Press', 135, 2.6, 4, 6],
        ['Overhead Press', 85, 1.4, 3, 8],
        ['Incline Dumbbell Press', 50, 1.2, 3, 10],
        ['Lateral Raise', 15, 0.4, 3, 12],
        ['Tricep Pushdown', 45, 0.8, 3, 12],
      ]],
      [3, 'Pull day', [
        ['Deadlift', 225, 4.4, 3, 5],
        ['Barbell Row', 135, 2.2, 4, 8],
        ['Lat Pulldown', 120, 1.6, 3, 10],
        ['Bicep Curl', 30, 0.5, 3, 12],
        ['Face Pull', 40, 0.6, 3, 15],
      ]],
      [5, 'Leg day', [
        ['Squat', 185, 4.0, 4, 6],
        ['Romanian Deadlift', 155, 2.6, 3, 8],
        ['Leg Press', 270, 4.5, 3, 10],
        ['Leg Curl', 90, 1.2, 3, 12],
        ['Calf Raise', 135, 1.4, 4, 12],
      ]],
      [6, 'Arms & core', [
        ['Hammer Curl', 30, 0.5, 3, 10],
        ['Skull Crusher', 55, 0.8, 3, 10],
        ['Cable Crunch', 80, 1.0, 3, 15],
        ['Lateral Raise', 15, 0.4, 3, 15],
      ]],
    ];

    const out = [];
    const WEEKS = 18;
    const monday = weekStart(new Date());
    monday.setDate(monday.getDate() - 7 * (WEEKS - 1));

    for (let w = 0; w < WEEKS; w++) {
      const deload = w === 10; // planned light week, keeps the chart honest
      for (const [weekday, note, lifts] of plan) {
        if (weekday === 6 && rnd() < 0.5) continue; // saturday is optional
        if (rnd() < 0.1) continue;                  // life happens
        const d = new Date(monday);
        d.setDate(d.getDate() + 7 * w + (weekday - 1));
        if (d > new Date()) continue;

        const entries = lifts.map(([name, start, gain, sets, reps]) => {
          const wobble = 1 + (rnd() - 0.5) * 0.06;
          const weight = round5(start * (deload ? 0.85 : 1) * wobble + gain * w);
          const r = Math.max(3, reps + Math.floor((rnd() - 0.5) * 3));
          return { exercise: name, sets, reps: r, weight };
        });

        out.push({
          id: `demo-${w}-${weekday}`,
          date: dateStr(d),
          note,
          entries,
        });
      }
    }
    return out;
  }

  function loadDemo() {
    if (sessions.length && !confirm(`Replace your current ${sessions.length} sessions with demo data?`)) return;
    sessions = generateDemo();
    persist();
    renderAll();
    toast('Demo data loaded — scroll the dashboard. Clear it any time via Import or by logging fresh.');
  }

  $('#demoBtn').addEventListener('click', loadDemo);
  $('#demoBtn2').addEventListener('click', loadDemo);

  /* ---------- unit toggle ---------- */

  function applyUnitLabels() {
    $('#unitToggle').textContent = unit.toUpperCase();
    document.querySelectorAll('[data-unit]').forEach((n) => { n.textContent = unit; });
    document.querySelectorAll('[data-unit-label]').forEach((n) => { n.textContent = `Weight (${unit})`; });
  }

  $('#unitToggle').addEventListener('click', () => {
    unit = unit === 'lbs' ? 'kg' : 'lbs';
    localStorage.setItem(UNIT_KEY, unit);
    applyUnitLabels();
    renderAll();
    toast(`Showing ${unit.toUpperCase()}. Existing numbers aren't converted — just relabeled.`);
  });

  /* ---------- render everything ---------- */

  function renderAll() {
    const hasData = sessions.length > 0;
    $('#charts').style.display = hasData ? '' : 'none';
    $('#chartsEmpty').hidden = hasData;

    renderStats();
    renderHistory();
    renderExerciseSelect();
    renderHeatmap();
    renderPRs();
    applyUnitLabels();
    if (chartsReady) buildCharts();
  }

  /* ============================================================
     SCROLL FX
     ============================================================ */

  const revealObserver = new IntersectionObserver((items) => {
    for (const item of items) {
      if (item.isIntersecting) {
        item.target.classList.add('in');
        revealObserver.unobserve(item.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  function observeReveal(node) {
    if (REDUCED) { node.classList.add('in'); return; }
    revealObserver.observe(node);
  }

  document.querySelectorAll('.reveal, .line-mask').forEach(observeReveal);

  /* counters fire when the stat band scrolls in */
  new IntersectionObserver((items, obs) => {
    if (items.some((i) => i.isIntersecting)) {
      armCounters();
      obs.disconnect();
    }
  }, { threshold: 0.3 }).observe($('#statband'));

  /* charts build lazily the first time the dashboard scrolls near */
  new IntersectionObserver((items, obs) => {
    if (items.some((i) => i.isIntersecting)) {
      chartsReady = true;
      if (typeof Chart !== 'undefined') chartDefaults();
      buildCharts();
      obs.disconnect();
    }
  }, { rootMargin: '200px 0px' }).observe($('#dashboard'));

  /* progress bar, nav state, parallax, marquee — one scroll loop */
  const progressBar = $('#scrollProgress');
  const nav = $('#nav');
  const marqueeTrack = $('#marqueeTrack');
  const parallaxEls = [...document.querySelectorAll('.hero [data-speed]')];
  const heroGhost = $('.hero__ghost');
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      nav.classList.toggle('is-scrolled', y > 12);

      if (!REDUCED) {
        if (y < window.innerHeight * 1.3) {
          for (const node of parallaxEls) {
            const offset = y * parseFloat(node.dataset.speed);
            node.style.transform = node === heroGhost
              ? `translate(-50%, calc(-50% + ${offset}px))`
              : `translate3d(0, ${offset}px, 0)`;
          }
        }
        if (marqueeTrack) {
          const period = marqueeTrack.scrollWidth / 3;
          marqueeTrack.style.transform = `translate3d(${-((y * 0.4) % period)}px, 0, 0)`;
        }
      }
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- init ---------- */

  function buildDatalist() {
    const list = el('datalist');
    list.id = 'exerciseList';
    for (const name of Object.keys(EXERCISES)) {
      const opt = el('option');
      opt.value = name;
      list.appendChild(opt);
    }
    document.body.appendChild(list);
  }

  buildDatalist();
  resetForm();
  renderAll();
})();
