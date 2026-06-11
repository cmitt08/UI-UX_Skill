/* ============================================================
   Florida 4-40 Personal Lines Academy — Application Engine
   Vanilla JS single-page app. Content lives in js/content/*.js
   which push unit objects into window.PL before this runs.
   ============================================================ */

(function () {
  'use strict';

  var PL = window.PL || { units: [], finalExam: { questions: [] } };
  PL.units.sort(function (a, b) { return a.number - b.number; });

  var PASS_PCT = 70;
  var FINAL_COUNT = 100;
  var FINAL_MINUTES = 120;

  /* ---------------- Icons (Lucide-style inline SVG) ---------------- */

  function icon(name, size) {
    var s = size || 18;
    var paths = {
      book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      car: '<path d="M19 17H5a2 2 0 0 1-2-2v-3l2.4-5.6A2 2 0 0 1 7.2 5h9.6a2 2 0 0 1 1.8 1.4L21 12v3a2 2 0 0 1-2 2z"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/>',
      umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>',
      scale: '<path d="M16 11V3M8 11V3"/><path d="M12 3v18"/><path d="M8 21h8"/><path d="M3 7h18"/><path d="M6 7l-3 6a3 3 0 0 0 6 0z"/><path d="M18 7l-3 6a3 3 0 0 0 6 0z"/>',
      file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
      target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
      alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
      check: '<polyline points="20 6 9 17 4 12"/>',
      checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
      x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
      xCircle: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
      chevron: '<polyline points="9 18 15 12 9 6"/>',
      menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
      search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
      layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
      clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
      refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
      arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
      bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
      flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
      zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      grad: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
      list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
      info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
      bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
      download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
      trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
      flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'
    };
    return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || paths.book) + '</svg>';
  }

  /* ---------------- Progress store ---------------- */

  var KEY = 'pl440.v1';

  function defaultState() {
    return { lessons: {}, exams: {}, final: { best: 0, attempts: 0, last: 0 }, mastered: {}, answered: 0, lastLesson: null, activity: {} };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      var s = JSON.parse(raw);
      var d = defaultState();
      Object.keys(d).forEach(function (k) { if (s[k] === undefined) s[k] = d[k]; });
      return s;
    } catch (e) { return defaultState(); }
  }

  var state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage full/blocked */ }
  }

  function touchActivity() {
    var d = new Date();
    var key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    state.activity[key] = true;
  }

  function streak() {
    var n = 0;
    var d = new Date();
    for (;;) {
      var key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      if (state.activity[key]) { n++; d.setDate(d.getDate() - 1); }
      else if (n === 0 && Object.keys(state.activity).length) {
        // today has no activity yet; check from yesterday
        d.setDate(d.getDate() - 1);
        var k2 = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        if (!state.activity[k2]) break;
      } else break;
    }
    return n;
  }

  function lessonState(id) {
    if (!state.lessons[id]) state.lessons[id] = { complete: false, cp: {} };
    return state.lessons[id];
  }

  /* ---------------- Course helpers ---------------- */

  function allLessons() {
    var out = [];
    PL.units.forEach(function (u) {
      u.lessons.forEach(function (l) { out.push({ unit: u, lesson: l }); });
    });
    return out;
  }

  function findLesson(id) {
    for (var i = 0; i < PL.units.length; i++) {
      var u = PL.units[i];
      for (var j = 0; j < u.lessons.length; j++) {
        if (u.lessons[j].id === id) return { unit: u, lesson: u.lessons[j], idx: j };
      }
    }
    return null;
  }

  function findUnit(id) {
    for (var i = 0; i < PL.units.length; i++) if (PL.units[i].id === id) return PL.units[i];
    return null;
  }

  function unitProgress(u) {
    var done = 0;
    u.lessons.forEach(function (l) { if (lessonState(l.id).complete) done++; });
    return { done: done, total: u.lessons.length, pct: u.lessons.length ? Math.round(done / u.lessons.length * 100) : 0 };
  }

  function overallProgress() {
    var total = 0, done = 0;
    PL.units.forEach(function (u) {
      total += u.lessons.length;
      u.lessons.forEach(function (l) { if (lessonState(l.id).complete) done++; });
    });
    return { done: done, total: total, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function readiness() {
    var prog = overallProgress().pct;
    var examScores = [];
    PL.units.forEach(function (u) {
      if (u.exam && u.exam.questions && u.exam.questions.length) {
        examScores.push(state.exams[u.id] ? state.exams[u.id].best : 0);
      }
    });
    var avgExam = examScores.length ? examScores.reduce(function (a, b) { return a + b; }, 0) / examScores.length : 0;
    var finalScore = state.final.best || 0;
    return Math.round(prog * 0.4 + avgExam * 0.4 + finalScore * 0.2);
  }

  function nextLesson() {
    if (state.lastLesson) {
      var f = findLesson(state.lastLesson);
      if (f && !lessonState(f.lesson.id).complete) return f;
    }
    var all = allLessons();
    for (var i = 0; i < all.length; i++) {
      if (!lessonState(all[i].lesson.id).complete) return all[i];
    }
    return all.length ? all[0] : null;
  }

  /* ---------------- Chart rendering ---------------- */

  var chartPalette = ['#0E7C7B', '#16243A', '#D97706', '#C2410C', '#5B36B0', '#1D4ED8', '#1A7A3C', '#64748B'];
  var chartInstances = [];
  var pendingCharts = [];

  function destroyCharts() {
    chartInstances.forEach(function (c) { try { c.destroy(); } catch (e) {} });
    chartInstances = [];
    pendingCharts = [];
  }

  function queueChart(canvasId, cfg) { pendingCharts.push({ id: canvasId, cfg: cfg }); }

  function buildCharts() {
    if (typeof Chart === 'undefined') return;
    pendingCharts.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (!el) return;
      var cfg = item.cfg;
      var type = cfg.chartType || 'bar';
      var horizontal = type === 'hbar';
      if (horizontal) type = 'bar';
      var circular = (type === 'doughnut' || type === 'pie' || type === 'polarArea');
      var datasets = (cfg.datasets || []).map(function (ds, i) {
        var color = ds.color || chartPalette[i % chartPalette.length];
        return {
          label: ds.label || '',
          data: ds.data,
          backgroundColor: circular
            ? (cfg.labels || []).map(function (_, j) { return chartPalette[j % chartPalette.length]; })
            : (cfg.datasets.length === 1 && type === 'bar' && !cfg.singleColor
              ? ds.data.map(function (_, j) { return chartPalette[j % chartPalette.length]; })
              : color),
          borderColor: type === 'line' ? color : '#FFFFFF',
          borderWidth: type === 'line' ? 2.5 : (circular ? 2 : 0),
          borderRadius: type === 'bar' ? 6 : 0,
          fill: type === 'line' ? false : undefined,
          tension: 0.35,
          pointRadius: type === 'line' ? 3.5 : undefined,
          pointBackgroundColor: color
        };
      });
      var suffix = cfg.suffix || '';
      var showLegend = circular || (cfg.datasets && cfg.datasets.length > 1);
      try {
        chartInstances.push(new Chart(el.getContext('2d'), {
          type: type,
          data: { labels: cfg.labels, datasets: datasets },
          options: {
            indexAxis: horizontal ? 'y' : 'x',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: showLegend,
                position: 'bottom',
                labels: { font: { family: 'Inter', size: 12 }, color: '#5C6B80', boxWidth: 14, boxHeight: 14, padding: 14 }
              },
              tooltip: {
                backgroundColor: '#16243A',
                titleFont: { family: 'Inter', weight: '600' },
                bodyFont: { family: 'Inter' },
                padding: 10,
                cornerRadius: 8,
                callbacks: {
                  label: function (ctx) {
                    var v = circular ? ctx.parsed : (horizontal ? ctx.parsed.x : ctx.parsed.y);
                    return (ctx.dataset.label ? ctx.dataset.label + ': ' : '') + v + suffix;
                  }
                }
              }
            },
            scales: circular ? {} : {
              x: { grid: { display: horizontal, color: 'rgba(27,42,65,0.07)' }, ticks: { font: { family: 'Inter', size: 11.5 }, color: '#5C6B80' } },
              y: { grid: { display: !horizontal, color: 'rgba(27,42,65,0.07)' }, ticks: { font: { family: 'Inter', size: 11.5 }, color: '#5C6B80', callback: function (v) { return v + suffix; } } }
            }
          }
        }));
      } catch (e) { /* chart lib unavailable */ }
    });
    pendingCharts = [];
  }

  /* ---------------- Block renderers ---------------- */

  var uid = 0;
  function nextId(prefix) { uid++; return prefix + '-' + uid; }

  var calloutIcons = { definition: 'bookOpen', florida: 'flag', example: 'bulb', tip: 'target', warning: 'alert' };
  var calloutTitles = { definition: 'Definition', florida: 'Florida Law', example: 'Example', tip: 'Exam Tip', warning: 'Common Pitfall' };

  function renderBlock(block, lessonId, blockIdx) {
    switch (block.type) {
      case 'text':
        return '<div class="prose">' + block.html + '</div>';

      case 'callout': {
        var v = block.variant || 'definition';
        return '<div class="callout callout--' + v + '">' +
          '<div class="callout__icon">' + icon(calloutIcons[v] || 'info', 17) + '</div>' +
          '<div><div class="callout__title">' + (block.title || calloutTitles[v]) + '</div>' +
          '<div class="callout__body">' + block.html + '</div></div></div>';
      }

      case 'table': {
        var h = '<div class="tbl-wrap"><table class="tbl">';
        if (block.caption) h += '<caption>' + block.caption + '</caption>';
        h += '<thead><tr>' + block.headers.map(function (th) { return '<th scope="col">' + th + '</th>'; }).join('') + '</tr></thead><tbody>';
        block.rows.forEach(function (row) {
          h += '<tr>' + row.map(function (td) { return '<td>' + td + '</td>'; }).join('') + '</tr>';
        });
        return h + '</tbody></table></div>';
      }

      case 'compare': {
        var h2 = block.title ? '<div class="compare-caption">' + block.title + '</div>' : '';
        h2 += '<div class="compare">';
        [block.left, block.right].forEach(function (col) {
          h2 += '<div class="compare__col"><div class="compare__title">' + col.title + '</div><ul>' +
            col.items.map(function (it) { return '<li>' + it + '</li>'; }).join('') + '</ul></div>';
        });
        return h2 + '</div>';
      }

      case 'steps': {
        var h3 = block.title ? '<div class="compare-caption">' + block.title + '</div>' : '';
        h3 += '<div class="steps">';
        block.items.forEach(function (st, i) {
          h3 += '<div class="step"><div class="step__line"><div class="step__num">' + (i + 1) + '</div></div>' +
            '<div><div class="step__title">' + st.title + '</div><div class="step__text">' + st.text + '</div></div></div>';
        });
        return h3 + '</div>';
      }

      case 'chart': {
        var cid = nextId('chart');
        queueChart(cid, block);
        return '<div class="chart-block">' +
          (block.title ? '<div class="chart-block__title">' + block.title + '</div>' : '') +
          '<div class="chart-block__canvas"><canvas id="' + cid + '" role="img" aria-label="' + (block.title || 'Chart') + '"></canvas></div>' +
          (block.note ? '<div class="chart-block__note">' + block.note + '</div>' : '') + '</div>';
      }

      case 'flashcards': {
        var fid = nextId('fc');
        fcDecks[fid] = { cards: block.cards.slice(), idx: 0, trackMastery: true };
        return '<div class="fc-block" id="' + fid + '">' +
          '<div class="fc-block__head"><div class="fc-block__title">' + (block.title || 'Key Term Flashcards') + '</div>' +
          '<div class="fc-count" data-fc-count></div></div>' +
          '<div data-fc-card></div>' +
          '<div class="fc-controls">' +
          '<button class="btn btn--ghost btn--sm" data-fc-prev>' + icon('arrowLeft', 15) + ' Prev</button>' +
          '<button class="btn btn--ghost btn--sm" data-fc-shuffle>' + icon('refresh', 15) + ' Shuffle</button>' +
          '<button class="btn btn--primary btn--sm" data-fc-know>' + icon('check', 15) + ' I know this</button>' +
          '<button class="btn btn--ghost btn--sm" data-fc-next>Next ' + icon('arrowRight', 15) + '</button>' +
          '</div></div>';
      }

      case 'quiz': {
        var qid = lessonId + '-q' + blockIdx;
        quizBlocks[qid] = { questions: block.questions, lessonId: lessonId, blockIdx: blockIdx, answered: 0, correct: 0 };
        var h4 = '<div class="quiz" id="' + qid + '" data-quiz>' +
          '<div class="quiz__head"><div class="quiz__head-icon">' + icon('zap', 16) + '</div>' +
          '<div class="quiz__title">' + (block.title || 'Checkpoint — test yourself') + '</div>' +
          '<div class="quiz__score" data-quiz-score></div></div><div class="quiz__body">';
        block.questions.forEach(function (q, qi) {
          h4 += '<div class="qq" data-q="' + qi + '">' +
            '<div class="qq__text"><span class="qq__num">Q' + (qi + 1) + '.</span>' + q.q + '</div>' +
            '<div class="qq__choices">';
          q.choices.forEach(function (c, ci) {
            h4 += '<button class="choice" data-quiz-choice data-qid="' + qid + '" data-qi="' + qi + '" data-ci="' + ci + '">' +
              '<span class="choice__letter">' + 'ABCDEF'[ci] + '</span><span>' + c + '</span></button>';
          });
          h4 += '</div><div data-explain></div></div>';
        });
        return h4 + '</div></div>';
      }

      default:
        return '';
    }
  }

  /* ---------------- Flashcard decks ---------------- */

  var fcDecks = {};

  function fcRender(deckId) {
    var deck = fcDecks[deckId];
    var root = document.getElementById(deckId);
    if (!deck || !root) return;
    var card = deck.cards[deck.idx];
    var holder = root.querySelector('[data-fc-card]');
    var known = state.mastered[card.front] ? ' <span class="tag tag--green">Known</span>' : '';
    holder.innerHTML = '<div class="fc" tabindex="0" role="button" aria-label="Flashcard, click to flip">' +
      '<div class="fc__inner">' +
      '<div class="fc__face fc__front"><div class="fc__text">' + card.front + '</div><div class="fc__hint">Click to reveal</div></div>' +
      '<div class="fc__face fc__back"><div class="fc__text">' + card.back + '</div><div class="fc__hint">Click to flip back</div></div>' +
      '</div></div>';
    root.querySelector('[data-fc-count]').innerHTML = 'Card ' + (deck.idx + 1) + ' of ' + deck.cards.length + known;
    var fcEl = holder.querySelector('.fc');
    fcEl.addEventListener('click', function () { fcEl.classList.toggle('flipped'); });
    fcEl.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fcEl.classList.toggle('flipped'); } });
  }

  function fcBind(root) {
    root.querySelectorAll('.fc-block').forEach(function (blockEl) {
      var deckId = blockEl.id;
      var deck = fcDecks[deckId];
      if (!deck) return;
      blockEl.querySelector('[data-fc-prev]').addEventListener('click', function () {
        deck.idx = (deck.idx - 1 + deck.cards.length) % deck.cards.length; fcRender(deckId);
      });
      blockEl.querySelector('[data-fc-next]').addEventListener('click', function () {
        deck.idx = (deck.idx + 1) % deck.cards.length; fcRender(deckId);
      });
      blockEl.querySelector('[data-fc-shuffle]').addEventListener('click', function () {
        shuffle(deck.cards); deck.idx = 0; fcRender(deckId); toast('Deck shuffled');
      });
      blockEl.querySelector('[data-fc-know]').addEventListener('click', function () {
        var card = deck.cards[deck.idx];
        state.mastered[card.front] = true;
        touchActivity(); save();
        deck.idx = (deck.idx + 1) % deck.cards.length;
        fcRender(deckId);
      });
      fcRender(deckId);
    });
  }

  /* ---------------- Checkpoint quizzes ---------------- */

  var quizBlocks = {};

  function bindQuizzes(root) {
    root.querySelectorAll('[data-quiz-choice]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var qid = btn.getAttribute('data-qid');
        var qi = parseInt(btn.getAttribute('data-qi'), 10);
        var ci = parseInt(btn.getAttribute('data-ci'), 10);
        var qb = quizBlocks[qid];
        if (!qb) return;
        var q = qb.questions[qi];
        var qEl = document.getElementById(qid).querySelector('[data-q="' + qi + '"]');
        if (qEl.getAttribute('data-done')) return;
        qEl.setAttribute('data-done', '1');
        var isRight = ci === q.answer;
        qEl.querySelectorAll('.choice').forEach(function (c, idx) {
          c.disabled = true;
          if (idx === q.answer) c.classList.add('correct');
          else if (idx === ci && !isRight) c.classList.add('wrong');
        });
        qb.answered++;
        if (isRight) qb.correct++;
        state.answered++;
        var exp = qEl.querySelector('[data-explain]');
        exp.innerHTML = '<div class="qq__explain ' + (isRight ? 'qq__explain--right' : 'qq__explain--wrong') + '">' +
          icon(isRight ? 'checkCircle' : 'xCircle', 17) +
          '<div><strong>' + (isRight ? 'Correct. ' : 'Not quite. ') + '</strong>' + (q.explain || '') + '</div></div>';
        var scoreEl = document.getElementById(qid).querySelector('[data-quiz-score]');
        scoreEl.textContent = qb.correct + ' / ' + qb.answered + ' correct';
        if (qb.answered >= qb.questions.length) {
          var ls = lessonState(qb.lessonId);
          ls.cp[qb.blockIdx] = true;
        }
        touchActivity(); save();
        updateCompleteBar(qb.lessonId);
        renderSidebar();
      });
    });
  }

  function lessonQuizBlockIdxs(lesson) {
    var idxs = [];
    lesson.blocks.forEach(function (b, i) { if (b.type === 'quiz') idxs.push(i); });
    return idxs;
  }

  function checkpointsDone(lesson) {
    var ls = lessonState(lesson.id);
    var idxs = lessonQuizBlockIdxs(lesson);
    for (var i = 0; i < idxs.length; i++) if (!ls.cp[idxs[i]]) return false;
    return true;
  }

  function updateCompleteBar(lessonId) {
    var bar = document.querySelector('[data-complete-bar]');
    if (!bar) return;
    var f = findLesson(lessonId);
    if (!f) return;
    var ls = lessonState(lessonId);
    var btn = bar.querySelector('button');
    var msg = bar.querySelector('.complete-bar__msg');
    if (ls.complete) {
      bar.classList.add('done');
      msg.innerHTML = '<strong>Lesson complete.</strong> Nice work — your progress is saved.';
      if (btn) { btn.disabled = true; btn.innerHTML = icon('check', 16) + ' Completed'; }
    } else if (checkpointsDone(f.lesson)) {
      msg.innerHTML = '<strong>All checkpoints answered.</strong> Mark this lesson complete to log your progress.';
      if (btn) btn.disabled = false;
    }
  }

  /* ---------------- Utilities ---------------- */

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function toast(msg, iconName) {
    var t = document.getElementById('toast');
    t.innerHTML = icon(iconName || 'checkCircle', 17) + '<span>' + msg + '</span>';
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  function setCrumb(html) { document.getElementById('crumb').innerHTML = html; }

  function setTopPct() {
    var p = overallProgress();
    document.getElementById('topPct').innerHTML = icon('grad', 15) + ' ' + p.pct + '% complete';
  }

  var view = document.getElementById('view');

  /* Clears chart/deck/quiz registries. Must run BEFORE a view builds its
     html (renderBlock registers into these), never after. */
  function beginView() {
    destroyCharts();
    fcDecks = {};
    quizBlocks = {};
  }

  function mount(html) {
    view.innerHTML = html;
    window.scrollTo(0, 0);
    buildCharts();
    fcBind(view);
    bindQuizzes(view);
    closeSidebar();
  }

  /* ---------------- Sidebar ---------------- */

  function renderSidebar() {
    var hash = location.hash || '#/';
    var nav = document.getElementById('nav');
    var openUnits = nav._openUnits || {};
    // auto-open unit containing current lesson
    var m = hash.match(/^#\/lesson\/(.+)$/);
    if (m) { var f = findLesson(m[1]); if (f) openUnits[f.unit.id] = true; }
    var m2 = hash.match(/^#\/(?:unit|exam)\/(.+)$/);
    if (m2 && findUnit(m2[1])) openUnits[m2[1]] = true;
    nav._openUnits = openUnits;

    var h = '';
    h += navItem('#/', 'home', 'Dashboard', hash === '#/' || hash === '');
    h += navItem('#/glossary', 'bookOpen', 'Glossary', hash === '#/glossary');
    h += navItem('#/flashcards', 'layers', 'Flashcard Trainer', hash === '#/flashcards');
    h += '<div class="nav__section">Course Units</div>';

    PL.units.forEach(function (u) {
      var p = unitProgress(u);
      var isOpen = !!openUnits[u.id];
      var cls = 'nav__unit' + (isOpen ? ' open' : '') + (p.pct === 100 ? ' done' : '');
      h += '<div class="' + cls + '" data-unit-nav="' + u.id + '">';
      h += '<button class="nav__unit-head" data-unit-toggle="' + u.id + '" aria-expanded="' + isOpen + '">' +
        '<span class="nav__unit-num">' + (p.pct === 100 ? icon('check', 12) : u.number) + '</span>' +
        '<span class="nav__unit-title">' + u.title + '</span>' +
        '<span class="nav__unit-pct">' + p.pct + '%</span>' +
        '<span class="nav__chev">' + icon('chevron', 14) + '</span></button>';
      h += '<div class="nav__lessons">';
      u.lessons.forEach(function (l) {
        var done = lessonState(l.id).complete;
        var active = hash === '#/lesson/' + l.id;
        h += '<a class="nav__lesson' + (done ? ' done' : '') + (active ? ' active' : '') + '" href="#/lesson/' + l.id + '">' +
          '<span class="nav__dot">' + (done ? icon('check', 10) : '') + '</span><span>' + l.title + '</span></a>';
      });
      if (u.exam && u.exam.questions && u.exam.questions.length) {
        var ex = state.exams[u.id];
        var passed = ex && ex.best >= PASS_PCT;
        var activeEx = hash === '#/exam/' + u.id;
        h += '<a class="nav__lesson nav__lesson--exam' + (passed ? ' done' : '') + (activeEx ? ' active' : '') + '" href="#/exam/' + u.id + '">' +
          '<span class="nav__dot">' + (passed ? icon('check', 10) : '') + '</span><span>Unit ' + u.number + ' Exam' + (ex ? ' — best ' + ex.best + '%' : '') + '</span></a>';
      }
      h += '</div></div>';
    });

    h += '<div class="nav__section">Certification</div>';
    var fin = state.final;
    h += navItem('#/final', 'award', 'Final Practice Exam' + (fin.attempts ? ' — best ' + fin.best + '%' : ''), hash === '#/final');

    nav.innerHTML = h;

    nav.querySelectorAll('[data-unit-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-unit-toggle');
        openUnits[id] = !openUnits[id];
        renderSidebar();
      });
    });

    var p = overallProgress();
    document.getElementById('sideProgressPct').textContent = p.pct + '%';
    document.getElementById('sideProgressFill').style.width = p.pct + '%';
    document.getElementById('sideProgressCount').textContent = p.done + ' / ' + p.total + ' lessons';
    setTopPct();
  }

  function navItem(href, ic, label, active) {
    return '<a class="nav__item' + (active ? ' active' : '') + '" href="' + href + '">' + icon(ic, 17) + '<span>' + label + '</span></a>';
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
  }

  /* ---------------- Views ---------------- */

  function viewDashboard() {
    setCrumb('<strong>Dashboard</strong>');
    var p = overallProgress();
    var next = nextLesson();
    var ready = readiness();
    var circ = 2 * Math.PI * 52;

    var examBest = [];
    PL.units.forEach(function (u) {
      if (u.exam && u.exam.questions && u.exam.questions.length) examBest.push(state.exams[u.id] ? state.exams[u.id].best : 0);
    });
    var avgExam = examBest.length ? Math.round(examBest.reduce(function (a, b) { return a + b; }, 0) / examBest.length) : 0;

    var h = '<div class="hero"><div>' +
      '<span class="tag tag--amber">Florida 4-40 Customer Representative</span>' +
      '<h1>Personal Lines Academy</h1>' +
      '<p>A complete, exam-focused course covering every personal lines concept you need — property, auto, Florida law, and the rules of your 4-40 license. Work through each unit, pass the unit exams, then prove it on the 100-question final.</p>' +
      (next ? '<a class="btn btn--amber" href="#/lesson/' + next.lesson.id + '">' + icon('zap', 16) + (p.done ? ' Continue: ' : ' Start: ') + next.lesson.title + '</a>' : '') +
      '</div>' +
      '<div class="ring-wrap"><svg class="ring" width="130" height="130" viewBox="0 0 130 130">' +
      '<circle class="ring__bg" cx="65" cy="65" r="52" stroke-width="11"/>' +
      '<circle class="ring__fg" cx="65" cy="65" r="52" stroke-width="11" stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + (circ * (1 - p.pct / 100)).toFixed(1) + '"/>' +
      '<text class="ring-wrap__pct" x="65" y="73" text-anchor="middle">' + p.pct + '%</text>' +
      '</svg><div class="ring-wrap__label">Course progress</div></div></div>';

    h += '<div class="stat-row">' +
      statCard(p.done + ' / ' + p.total, 'Lessons completed') +
      statCard(avgExam + '%', 'Avg unit exam (best)') +
      statCard(String(Object.keys(state.mastered).length), 'Terms mastered') +
      statCard(String(streak()) + (streak() === 1 ? ' day' : ' days'), 'Study streak') +
      statCard(ready + '%', 'Exam readiness') +
      '</div>';

    h += '<h2 class="section-title">Course units</h2><div class="unit-grid">';
    PL.units.forEach(function (u) {
      var up = unitProgress(u);
      var ex = state.exams[u.id];
      h += '<div class="card unit-card" data-goto="#/unit/' + u.id + '" role="link" tabindex="0">' +
        '<div class="unit-card__head"><div class="unit-card__icon">' + icon(u.icon || 'book', 21) + '</div>' +
        '<div><div class="unit-card__kicker">Unit ' + u.number + ' · ' + u.lessons.length + ' lessons</div>' +
        '<h3 class="unit-card__title">' + u.title + '</h3></div></div>' +
        '<p class="unit-card__desc">' + (u.description || '') + '</p>' +
        '<div class="unit-card__foot"><div class="meter"><div class="meter__fill" style="width:' + up.pct + '%"></div></div>' +
        '<span class="unit-card__pct">' + up.pct + '%</span>' +
        (ex && ex.best >= PASS_PCT ? '<span class="tag tag--green">Exam ' + ex.best + '%</span>' : '') +
        '</div></div>';
    });
    h += '</div>';

    h += '<h2 class="section-title">Tools</h2><div class="unit-grid">' +
      toolCard('#/final', 'award', 'Final Practice Exam', FINAL_COUNT + ' questions · ' + FINAL_MINUTES + ' minutes · pass at ' + PASS_PCT + '%. Simulates the real certification experience.') +
      toolCard('#/flashcards', 'layers', 'Flashcard Trainer', 'Drill every key term in the course. Mark cards you know to track mastery.') +
      toolCard('#/glossary', 'bookOpen', 'Glossary', 'Search every defined term across all units in one place.') +
      '</div>';

    h += '<div style="margin-top:40px;display:flex;gap:10px;flex-wrap:wrap">' +
      '<button class="btn btn--ghost btn--sm" data-export>' + icon('download', 15) + ' Export progress</button>' +
      '<button class="btn btn--ghost btn--sm" data-reset>' + icon('trash', 15) + ' Reset progress</button></div>';

    mount(h);

    view.querySelectorAll('[data-goto]').forEach(function (el) {
      var go = function () { location.hash = el.getAttribute('data-goto'); };
      el.addEventListener('click', go);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
    var exp = view.querySelector('[data-export]');
    if (exp) exp.addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'pl440-progress.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });
    var rst = view.querySelector('[data-reset]');
    if (rst) rst.addEventListener('click', function () {
      if (confirm('Reset ALL progress? This clears lesson completion, exam scores, and mastered terms.')) {
        state = defaultState(); save(); renderSidebar(); viewDashboard(); toast('Progress reset', 'refresh');
      }
    });
  }

  function statCard(num, label) {
    return '<div class="card stat"><div class="stat__num">' + num + '</div><div class="stat__label">' + label + '</div></div>';
  }

  function toolCard(href, ic, title, desc) {
    return '<div class="card unit-card" data-goto="' + href + '" role="link" tabindex="0">' +
      '<div class="unit-card__head"><div class="unit-card__icon">' + icon(ic, 21) + '</div>' +
      '<div><h3 class="unit-card__title">' + title + '</h3></div></div>' +
      '<p class="unit-card__desc">' + desc + '</p></div>';
  }

  function viewUnit(unitId) {
    var u = findUnit(unitId);
    if (!u) return viewDashboard();
    setCrumb('Unit ' + u.number + ' · <strong>' + u.title + '</strong>');
    var up = unitProgress(u);
    var h = '<div class="lesson-head">' +
      '<div class="lesson-head__kicker"><span class="tag tag--navy">Unit ' + u.number + '</span>' +
      (up.pct === 100 ? '<span class="tag tag--green">Complete</span>' : '') + '</div>' +
      '<h1>' + u.title + '</h1>' +
      '<p style="color:var(--muted);max-width:68ch">' + (u.description || '') + '</p>' +
      '<div style="display:flex;align-items:center;gap:14px;margin-top:14px"><div class="meter" style="flex:1;max-width:320px"><div class="meter__fill" style="width:' + up.pct + '%"></div></div>' +
      '<span style="font-size:13px;font-weight:700;color:var(--muted)">' + up.done + ' / ' + up.total + ' lessons</span></div></div>';

    h += '<div style="display:grid;gap:12px">';
    u.lessons.forEach(function (l, i) {
      var done = lessonState(l.id).complete;
      h += '<div class="card unit-card" data-goto="#/lesson/' + l.id + '" role="link" tabindex="0" style="flex-direction:row;align-items:center;gap:16px">' +
        '<div class="nav__unit-num" style="width:34px;height:34px;border-radius:10px;font-size:13px;' + (done ? 'background:var(--green-soft);color:var(--green)' : '') + '">' + (done ? icon('check', 15) : (i + 1)) + '</div>' +
        '<div style="flex:1"><div class="unit-card__title" style="font-size:16px">' + l.title + '</div>' +
        '<div style="font-size:12.5px;color:var(--muted);margin-top:2px">' + icon('clock', 12) + ' ' + (l.minutes || 10) + ' min read' + (l.blocks ? ' · ' + l.blocks.filter(function (b) { return b.type === 'quiz'; }).length + ' checkpoint(s)' : '') + '</div></div>' +
        icon('chevron', 18) + '</div>';
    });
    if (u.exam && u.exam.questions && u.exam.questions.length) {
      var ex = state.exams[u.id];
      h += '<div class="card unit-card" data-goto="#/exam/' + u.id + '" role="link" tabindex="0" style="flex-direction:row;align-items:center;gap:16px;border-color:var(--amber-bright)">' +
        '<div class="unit-card__icon" style="background:var(--amber-soft);color:var(--amber);width:34px;height:34px;border-radius:10px">' + icon('award', 17) + '</div>' +
        '<div style="flex:1"><div class="unit-card__title" style="font-size:16px">Unit ' + u.number + ' Exam</div>' +
        '<div style="font-size:12.5px;color:var(--muted);margin-top:2px">' + u.exam.questions.length + ' questions · pass at ' + PASS_PCT + '%' + (ex ? ' · best score ' + ex.best + '%' : '') + '</div></div>' +
        (ex && ex.best >= PASS_PCT ? '<span class="tag tag--green">Passed</span>' : '') +
        icon('chevron', 18) + '</div>';
    }
    h += '</div>';
    mount(h);
    view.querySelectorAll('[data-goto]').forEach(function (el) {
      var go = function () { location.hash = el.getAttribute('data-goto'); };
      el.addEventListener('click', go);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
  }

  function viewLesson(lessonId) {
    var f = findLesson(lessonId);
    if (!f) return viewDashboard();
    var u = f.unit, l = f.lesson;
    state.lastLesson = lessonId;
    save();
    setCrumb('Unit ' + u.number + ' · ' + u.title + ' · <strong>' + l.title + '</strong>');

    var quizCount = lessonQuizBlockIdxs(l).length;
    var h = '<div class="lesson-head">' +
      '<div class="lesson-head__kicker"><span class="tag tag--navy">Unit ' + u.number + '</span><span class="tag tag--teal">Lesson ' + (f.idx + 1) + ' of ' + u.lessons.length + '</span></div>' +
      '<h1>' + l.title + '</h1>' +
      '<div class="lesson-head__meta"><span>' + icon('clock', 14) + (l.minutes || 10) + ' min read</span>' +
      (quizCount ? '<span>' + icon('zap', 14) + quizCount + ' checkpoint' + (quizCount > 1 ? 's' : '') + '</span>' : '') +
      ((l.terms && l.terms.length) ? '<span>' + icon('bookOpen', 14) + l.terms.length + ' key terms</span>' : '') +
      '</div></div>';

    if (l.objectives && l.objectives.length) {
      h += '<div class="objectives"><div class="objectives__title">' + icon('target', 13) + ' By the end of this lesson you should be able to…</div><ul>' +
        l.objectives.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>';
    }

    l.blocks.forEach(function (b, i) { h += renderBlock(b, l.id, i); });

    var ls = lessonState(l.id);
    var canComplete = ls.complete || checkpointsDone(l);
    h += '<div class="lesson-foot">' +
      '<div class="complete-bar' + (ls.complete ? ' done' : '') + '" data-complete-bar>' +
      '<div class="complete-bar__msg">' +
      (ls.complete ? '<strong>Lesson complete.</strong> Nice work — your progress is saved.'
        : (quizCount && !canComplete ? '<strong>Answer every checkpoint question</strong> in this lesson to unlock completion.'
          : '<strong>Ready to log it?</strong> Mark this lesson complete to track your progress.')) +
      '</div>' +
      '<button class="btn btn--primary" data-mark-complete ' + (canComplete && !ls.complete ? '' : 'disabled') + '>' +
      (ls.complete ? icon('check', 16) + ' Completed' : icon('check', 16) + ' Mark lesson complete') + '</button></div>';

    // pager
    var all = allLessons();
    var pos = -1;
    all.forEach(function (e, i) { if (e.lesson.id === lessonId) pos = i; });
    var prev = pos > 0 ? all[pos - 1] : null;
    var nxt = pos < all.length - 1 ? all[pos + 1] : null;
    h += '<div class="pager">';
    if (prev) h += '<button class="pager__btn" data-goto="#/lesson/' + prev.lesson.id + '"><span class="pager__dir">Previous</span><span class="pager__title">' + prev.lesson.title + '</span></button>';
    if (nxt) h += '<button class="pager__btn pager__btn--next" data-goto="#/lesson/' + nxt.lesson.id + '"><span class="pager__dir">Up next</span><span class="pager__title">' + nxt.lesson.title + '</span></button>';
    else h += '<button class="pager__btn pager__btn--next" data-goto="#/final"><span class="pager__dir">Up next</span><span class="pager__title">Final Practice Exam</span></button>';
    h += '</div></div>';

    mount(h);

    var mc = view.querySelector('[data-mark-complete]');
    if (mc) mc.addEventListener('click', function () {
      var lsNow = lessonState(lessonId);
      if (lsNow.complete) return;
      if (!checkpointsDone(l)) return;
      lsNow.complete = true;
      touchActivity(); save();
      renderSidebar();
      updateCompleteBar(lessonId);
      toast('Lesson complete — progress saved');
    });
    view.querySelectorAll('[data-goto]').forEach(function (el) {
      el.addEventListener('click', function () { location.hash = el.getAttribute('data-goto'); });
    });
  }

  /* ---------------- Exams ---------------- */

  var examSession = null;
  var examTimerInt = null;

  function stopTimer() { if (examTimerInt) { clearInterval(examTimerInt); examTimerInt = null; } }

  function finalPool() {
    var pool = (PL.finalExam && PL.finalExam.questions ? PL.finalExam.questions.slice() : []);
    PL.units.forEach(function (u) {
      if (u.exam && u.exam.questions) pool = pool.concat(u.exam.questions);
    });
    return pool;
  }

  function viewExamIntro(kind, unitId) {
    stopTimer();
    var isFinal = kind === 'final';
    var u = isFinal ? null : findUnit(unitId);
    if (!isFinal && !u) return viewDashboard();
    var qCount = isFinal ? Math.min(FINAL_COUNT, finalPool().length) : u.exam.questions.length;
    var rec = isFinal ? state.final : state.exams[unitId];
    setCrumb(isFinal ? '<strong>Final Practice Exam</strong>' : 'Unit ' + u.number + ' · <strong>Unit Exam</strong>');

    var h = '<div class="card exam-intro">' +
      '<div class="exam-intro__icon">' + icon('award', 34) + '</div>' +
      '<h1>' + (isFinal ? 'Final Practice Exam' : 'Unit ' + u.number + ' Exam: ' + u.title) + '</h1>' +
      '<p>' + (isFinal
        ? 'A full-length simulation drawing ' + qCount + ' questions from across the entire course. You have ' + FINAL_MINUTES + ' minutes. Answer every question, then submit to see your score, pass/fail status, and a full review with explanations.'
        : 'Test what you learned in this unit. Answer all ' + qCount + ' questions, then submit for your score and a question-by-question review with explanations.') + '</p>' +
      '<div class="exam-intro__stats">' +
      '<div class="exam-intro__stat"><div class="num">' + qCount + '</div><div class="lbl">Questions</div></div>' +
      '<div class="exam-intro__stat"><div class="num">' + (isFinal ? FINAL_MINUTES + ' min' : 'Untimed') + '</div><div class="lbl">' + (isFinal ? 'Time limit' : 'Take your time') + '</div></div>' +
      '<div class="exam-intro__stat"><div class="num">' + PASS_PCT + '%</div><div class="lbl">Passing score</div></div>' +
      (rec && rec.attempts ? '<div class="exam-intro__stat"><div class="num">' + rec.best + '%</div><div class="lbl">Your best</div></div>' : '') +
      '</div>' +
      '<button class="btn btn--amber" data-start-exam>' + icon('zap', 16) + ' Begin exam</button>' +
      '</div>';
    mount(h);
    view.querySelector('[data-start-exam]').addEventListener('click', function () {
      startExam(kind, unitId);
    });
  }

  function startExam(kind, unitId) {
    var isFinal = kind === 'final';
    var questions;
    if (isFinal) {
      questions = shuffle(finalPool()).slice(0, FINAL_COUNT);
    } else {
      var u = findUnit(unitId);
      questions = u.exam.questions.slice();
    }
    examSession = {
      kind: kind, unitId: unitId, questions: questions,
      answers: new Array(questions.length).fill(null),
      secondsLeft: isFinal ? FINAL_MINUTES * 60 : null
    };
    renderExam();
  }

  function renderExam() {
    var es = examSession;
    if (!es) return;
    beginView();
    var isFinal = es.kind === 'final';
    setCrumb(isFinal ? '<strong>Final Practice Exam — in progress</strong>' : '<strong>Unit Exam — in progress</strong>');

    var h = '<div class="exam-topbar">' +
      '<span class="exam-q-count" data-exam-count>0 / ' + es.questions.length + ' answered</span>' +
      '<div class="meter"><div class="meter__fill" data-exam-meter style="width:0%"></div></div>' +
      (isFinal ? '<span class="exam-timer" data-exam-timer>' + icon('clock', 15) + ' --:--</span>' : '') +
      '</div>';

    es.questions.forEach(function (q, qi) {
      h += '<div class="card" style="padding:20px 24px;margin-bottom:14px"><div class="qq" style="border:none;padding:0">' +
        '<div class="qq__text"><span class="qq__num">Q' + (qi + 1) + '.</span>' + q.q + '</div><div class="qq__choices">';
      q.choices.forEach(function (c, ci) {
        h += '<button class="choice" data-exam-choice data-qi="' + qi + '" data-ci="' + ci + '">' +
          '<span class="choice__letter">' + 'ABCDEF'[ci] + '</span><span>' + c + '</span></button>';
      });
      h += '</div></div></div>';
    });

    h += '<div style="text-align:center;margin-top:28px"><button class="btn btn--amber" data-submit-exam>' + icon('check', 16) + ' Submit exam</button></div>';
    mount(h);

    view.querySelectorAll('[data-exam-choice]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var qi = parseInt(btn.getAttribute('data-qi'), 10);
        var ci = parseInt(btn.getAttribute('data-ci'), 10);
        es.answers[qi] = ci;
        var parent = btn.closest('.qq__choices');
        parent.querySelectorAll('.choice').forEach(function (c) { c.classList.remove('sel'); });
        btn.classList.add('sel');
        var answered = es.answers.filter(function (a) { return a !== null; }).length;
        view.querySelector('[data-exam-count]').textContent = answered + ' / ' + es.questions.length + ' answered';
        view.querySelector('[data-exam-meter]').style.width = (answered / es.questions.length * 100) + '%';
      });
    });

    view.querySelector('[data-submit-exam]').addEventListener('click', function () {
      var unanswered = es.answers.filter(function (a) { return a === null; }).length;
      if (unanswered > 0 && !confirm(unanswered + ' question(s) unanswered — they will count as wrong. Submit anyway?')) return;
      submitExam();
    });

    if (isFinal) {
      stopTimer();
      var timerEl = view.querySelector('[data-exam-timer]');
      var showTime = function () {
        if (!timerEl) return;
        var mLeft = Math.floor(es.secondsLeft / 60);
        var sLeft = es.secondsLeft % 60;
        timerEl.innerHTML = icon('clock', 15) + ' ' + mLeft + ':' + String(sLeft).padStart(2, '0');
        if (es.secondsLeft <= 600) timerEl.classList.add('low');
      };
      showTime();
      examTimerInt = setInterval(function () {
        es.secondsLeft--;
        showTime();
        if (es.secondsLeft <= 0) {
          stopTimer();
          toast('Time is up — exam submitted', 'clock');
          submitExam();
        }
      }, 1000);
    }
  }

  function submitExam() {
    stopTimer();
    var es = examSession;
    if (!es) return;
    var correct = 0;
    es.questions.forEach(function (q, qi) { if (es.answers[qi] === q.answer) correct++; });
    var pct = Math.round(correct / es.questions.length * 100);
    var pass = pct >= PASS_PCT;

    if (es.kind === 'final') {
      state.final.attempts++;
      state.final.last = pct;
      if (pct > state.final.best) state.final.best = pct;
    } else {
      if (!state.exams[es.unitId]) state.exams[es.unitId] = { best: 0, attempts: 0, last: 0 };
      var rec = state.exams[es.unitId];
      rec.attempts++;
      rec.last = pct;
      if (pct > rec.best) rec.best = pct;
    }
    touchActivity(); save();
    renderSidebar();
    beginView();

    var h = '<div class="card result-hero">' +
      '<div class="result-hero__score ' + (pass ? 'pass' : 'fail') + '">' + pct + '%</div>' +
      '<div class="result-hero__label">' + correct + ' of ' + es.questions.length + ' correct</div>' +
      '<div class="result-banner ' + (pass ? 'pass' : 'fail') + '">' + icon(pass ? 'checkCircle' : 'xCircle', 17) + (pass ? ' PASS — at or above ' + PASS_PCT + '%' : ' Below the ' + PASS_PCT + '% pass mark — review and retake') + '</div>' +
      '<div style="margin-top:24px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
      '<button class="btn btn--primary" data-retake>' + icon('refresh', 15) + ' Retake</button>' +
      '<a class="btn btn--ghost" href="#/">' + icon('home', 15) + ' Dashboard</a></div></div>';

    h += '<h2 class="section-title">Question review</h2>';
    es.questions.forEach(function (q, qi) {
      var your = es.answers[qi];
      var right = your === q.answer;
      h += '<div class="card" style="padding:20px 24px;margin-bottom:14px"><div class="qq" style="border:none;padding:0">' +
        '<div class="qq__text"><span class="qq__num">Q' + (qi + 1) + '.</span>' + q.q + '</div><div class="qq__choices">';
      q.choices.forEach(function (c, ci) {
        var cls = 'choice';
        if (ci === q.answer) cls += ' correct';
        else if (ci === your) cls += ' wrong';
        h += '<button class="' + cls + '" disabled><span class="choice__letter">' + 'ABCDEF'[ci] + '</span><span>' + c + '</span></button>';
      });
      h += '</div><div class="qq__explain ' + (right ? 'qq__explain--right' : 'qq__explain--wrong') + '">' +
        icon(right ? 'checkCircle' : 'xCircle', 17) + '<div><strong>' + (right ? 'Correct. ' : (your === null ? 'Unanswered. ' : 'Incorrect. ')) + '</strong>' + (q.explain || '') + '</div></div></div></div>';
    });

    var kind = es.kind, unitId = es.unitId;
    examSession = null;
    mount(h);
    view.querySelector('[data-retake]').addEventListener('click', function () {
      if (kind === 'final') viewExamIntro('final');
      else viewExamIntro('unit', unitId);
    });
  }

  /* ---------------- Glossary & Flashcard trainer ---------------- */

  function collectTerms() {
    var map = {};
    PL.units.forEach(function (u) {
      u.lessons.forEach(function (l) {
        (l.terms || []).forEach(function (t) {
          if (!map[t.term]) map[t.term] = { def: t.def, src: 'Unit ' + u.number };
        });
      });
    });
    return map;
  }

  function viewGlossary() {
    setCrumb('<strong>Glossary</strong>');
    var terms = collectTerms();
    var keys = Object.keys(terms).sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });

    var h = '<div class="lesson-head"><h1>Glossary</h1>' +
      '<p style="color:var(--muted)">' + keys.length + ' defined terms across the whole course. Hover a dotted term inside any lesson for the same definitions.</p></div>' +
      '<div class="search-bar">' + icon('search', 17) + '<input type="search" id="glossSearch" placeholder="Search terms… e.g. coinsurance, PIP, peril" aria-label="Search glossary"></div>' +
      '<div id="glossList"></div>';
    mount(h);

    var listEl = document.getElementById('glossList');
    function renderList(filter) {
      var fl = (filter || '').toLowerCase();
      var out = '';
      var letter = '';
      var shown = 0;
      keys.forEach(function (k) {
        if (fl && k.toLowerCase().indexOf(fl) === -1 && terms[k].def.toLowerCase().indexOf(fl) === -1) return;
        var first = k[0].toUpperCase();
        if (first !== letter && !fl) { letter = first; out += '<div class="gloss-letter">' + letter + '</div>'; }
        out += '<dl class="gloss-item"><dt>' + k + '<span class="gloss-src">' + terms[k].src + '</span></dt><dd>' + terms[k].def + '</dd></dl>';
        shown++;
      });
      listEl.innerHTML = shown ? out : '<div class="empty">No terms match "' + filter + '"</div>';
    }
    renderList('');
    document.getElementById('glossSearch').addEventListener('input', function (e) { renderList(e.target.value); });
  }

  function viewFlashcards() {
    setCrumb('<strong>Flashcard Trainer</strong>');
    var terms = collectTerms();
    var cards = Object.keys(terms).map(function (k) { return { front: k, back: terms[k].def }; });
    shuffle(cards);
    var mastered = cards.filter(function (c) { return state.mastered[c.front]; }).length;

    var h = '<div class="lesson-head"><h1>Flashcard Trainer</h1>' +
      '<p style="color:var(--muted)">Every key term in the course, shuffled into one deck. Flip the card, then mark the ones you know — mastered terms feed your readiness score.</p>' +
      '<div style="display:flex;align-items:center;gap:14px;margin-top:10px"><div class="meter" style="flex:1;max-width:320px"><div class="meter__fill" style="width:' + (cards.length ? Math.round(mastered / cards.length * 100) : 0) + '%"></div></div>' +
      '<span style="font-size:13px;font-weight:700;color:var(--muted)">' + mastered + ' / ' + cards.length + ' mastered</span></div></div>';

    var fid = nextId('fc');
    fcDecks[fid] = { cards: cards, idx: 0 };
    h += '<div class="fc-block" id="' + fid + '">' +
      '<div class="fc-block__head"><div class="fc-block__title">Full course deck</div><div class="fc-count" data-fc-count></div></div>' +
      '<div data-fc-card></div>' +
      '<div class="fc-controls">' +
      '<button class="btn btn--ghost btn--sm" data-fc-prev>' + icon('arrowLeft', 15) + ' Prev</button>' +
      '<button class="btn btn--ghost btn--sm" data-fc-shuffle>' + icon('refresh', 15) + ' Shuffle</button>' +
      '<button class="btn btn--primary btn--sm" data-fc-know>' + icon('check', 15) + ' I know this</button>' +
      '<button class="btn btn--ghost btn--sm" data-fc-next>Next ' + icon('arrowRight', 15) + '</button>' +
      '</div></div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
    fcBind(view);
    closeSidebar();
  }

  /* ---------------- Router ---------------- */

  function route() {
    stopTimer();
    examSession = null;
    beginView();
    var hash = location.hash || '#/';
    renderSidebar();
    var m;
    if ((m = hash.match(/^#\/lesson\/(.+)$/))) viewLesson(m[1]);
    else if ((m = hash.match(/^#\/unit\/(.+)$/))) viewUnit(m[1]);
    else if ((m = hash.match(/^#\/exam\/(.+)$/))) viewExamIntro('unit', m[1]);
    else if (hash === '#/final') viewExamIntro('final');
    else if (hash === '#/glossary') viewGlossary();
    else if (hash === '#/flashcards') viewFlashcards();
    else viewDashboard();
  }

  /* ---------------- Boot ---------------- */

  document.getElementById('menuBtn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
  });
  document.getElementById('overlay').addEventListener('click', closeSidebar);

  window.addEventListener('hashchange', route);
  route();
})();
