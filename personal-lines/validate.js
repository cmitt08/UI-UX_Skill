/* Dev tool: validates course content files. Run: node personal-lines/validate.js */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const contentDir = path.join(__dirname, 'js', 'content');
const sandbox = { window: { PL: { units: [], finalExam: { questions: [] } } } };
vm.createContext(sandbox);

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.js')).sort();
const errors = [];
const warns = [];

for (const f of files) {
  const src = fs.readFileSync(path.join(contentDir, f), 'utf8');
  try {
    vm.runInContext(src, sandbox, { filename: f });
  } catch (e) {
    errors.push(`${f}: failed to execute — ${e.message}`);
  }
}

const PL = sandbox.window.PL;
const blockTypes = ['text', 'callout', 'table', 'compare', 'steps', 'chart', 'flashcards', 'quiz'];
const calloutVariants = ['definition', 'florida', 'example', 'tip', 'warning'];
const seenUnitIds = new Set();
const seenLessonIds = new Set();

function checkQuestion(q, where) {
  if (!q.q || typeof q.q !== 'string') errors.push(`${where}: missing question text`);
  if (!Array.isArray(q.choices) || q.choices.length < 3) errors.push(`${where}: needs >=3 choices`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.choices || []).length)
    errors.push(`${where}: answer index ${q.answer} out of range`);
  if (!q.explain) warns.push(`${where}: missing explanation`);
}

let lessonCount = 0, questionCount = 0, termCount = 0, cardCount = 0, chartCount = 0;

for (const u of PL.units) {
  const uw = `unit ${u.number} (${u.id})`;
  if (!u.id || seenUnitIds.has(u.id)) errors.push(`${uw}: missing/duplicate unit id`);
  seenUnitIds.add(u.id);
  if (!u.title) errors.push(`${uw}: missing title`);
  if (!Array.isArray(u.lessons) || !u.lessons.length) { errors.push(`${uw}: no lessons`); continue; }

  for (const l of u.lessons) {
    lessonCount++;
    const lw = `${uw} lesson ${l.id}`;
    if (!l.id || seenLessonIds.has(l.id)) errors.push(`${lw}: missing/duplicate lesson id`);
    seenLessonIds.add(l.id);
    if (!l.title) errors.push(`${lw}: missing title`);
    if (!Array.isArray(l.blocks) || !l.blocks.length) { errors.push(`${lw}: no blocks`); continue; }

    let quizzes = 0;
    l.blocks.forEach((b, i) => {
      const bw = `${lw} block ${i} (${b.type})`;
      if (!blockTypes.includes(b.type)) { errors.push(`${bw}: unknown block type`); return; }
      if (b.type === 'text' && !b.html) errors.push(`${bw}: missing html`);
      if (b.type === 'callout') {
        if (!calloutVariants.includes(b.variant)) errors.push(`${bw}: bad variant "${b.variant}"`);
        if (!b.html) errors.push(`${bw}: missing html`);
      }
      if (b.type === 'table') {
        if (!Array.isArray(b.headers) || !Array.isArray(b.rows)) errors.push(`${bw}: needs headers+rows`);
        else b.rows.forEach((r, ri) => { if (r.length !== b.headers.length) errors.push(`${bw}: row ${ri} width ${r.length} != headers ${b.headers.length}`); });
      }
      if (b.type === 'compare' && (!b.left || !b.right || !Array.isArray(b.left.items) || !Array.isArray(b.right.items)))
        errors.push(`${bw}: needs left/right with items`);
      if (b.type === 'steps' && (!Array.isArray(b.items) || !b.items.length)) errors.push(`${bw}: needs items`);
      if (b.type === 'chart') {
        chartCount++;
        if (!Array.isArray(b.labels) || !Array.isArray(b.datasets)) errors.push(`${bw}: needs labels+datasets`);
        else b.datasets.forEach((ds, di) => { if (!Array.isArray(ds.data) || ds.data.length !== b.labels.length) errors.push(`${bw}: dataset ${di} length mismatch`); });
      }
      if (b.type === 'flashcards') {
        if (!Array.isArray(b.cards) || b.cards.length < 4) errors.push(`${bw}: needs >=4 cards`);
        else { cardCount += b.cards.length; b.cards.forEach((c, ci) => { if (!c.front || !c.back) errors.push(`${bw}: card ${ci} missing front/back`); }); }
      }
      if (b.type === 'quiz') {
        quizzes++;
        if (!Array.isArray(b.questions) || !b.questions.length) errors.push(`${bw}: no questions`);
        else b.questions.forEach((q, qi) => { questionCount++; checkQuestion(q, `${bw} q${qi + 1}`); });
      }
    });
    if (!quizzes) warns.push(`${lw}: no checkpoint quiz`);
    if (!Array.isArray(l.terms) || l.terms.length < 5) warns.push(`${lw}: only ${(l.terms || []).length} terms`);
    termCount += (l.terms || []).length;
  }

  if (!u.exam || !Array.isArray(u.exam.questions) || u.exam.questions.length < 10)
    warns.push(`${uw}: unit exam has ${(u.exam && u.exam.questions || []).length} questions (<10)`);
  (u.exam && u.exam.questions || []).forEach((q, qi) => { questionCount++; checkQuestion(q, `${uw} exam q${qi + 1}`); });
}

PL.finalExam.questions.forEach((q, qi) => { questionCount++; checkQuestion(q, `final bank q${qi + 1}`); });

console.log(`Units: ${PL.units.length} | Lessons: ${lessonCount} | Questions: ${questionCount} | Flashcards: ${cardCount} | Terms: ${termCount} | Charts: ${chartCount} | Final bank: ${PL.finalExam.questions.length}`);
if (warns.length) { console.log(`\nWARNINGS (${warns.length}):`); warns.forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log(`\nERRORS (${errors.length}):`); errors.forEach(e => console.log('  - ' + e)); process.exit(1); }
console.log('\nValidation passed.');
