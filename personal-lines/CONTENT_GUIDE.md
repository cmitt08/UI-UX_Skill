# Personal Lines Academy — Content Authoring Guide

This guide defines the data format and editorial standard for course content files in
`personal-lines/js/content/`. **`unit1.js` is the canonical exemplar — match its depth,
voice, and structure exactly.**

## File format

Each unit file is a standalone browser script (no imports/exports) that pushes one unit
object onto the registry:

```js
/* Unit N — Title */
window.PL.units.push({
  id: 'uN',
  number: N,
  title: '...',
  icon: 'home',            // one of: shield, file, home, flag, car, zap, umbrella, scale, grad, layers
  description: '...',      // 1-2 sentences, shown on dashboard card
  lessons: [ { ...lesson }, ... ],
  exam: { questions: [ { ...question }, ... ] }   // 15 questions
});
```

The final-exam file appends to the dedicated bank instead:

```js
/* Final Exam dedicated question bank */
window.PL.finalExam.questions.push(
  { q: '...', choices: ['...','...','...','...'], answer: 0, explain: '...' },
  ...
);
```

## Lesson object

```js
{
  id: 'uNlM',              // unit N, lesson M — must be globally unique
  title: '...',
  minutes: 12,             // realistic read time, 10-18
  objectives: ['...'],     // 3-5 bullet outcomes, start with a verb
  blocks: [ ... ],         // see block types
  terms: [ { term: '...', def: '...' }, ... ]   // 8-15 glossary terms
}
```

## Block types

| type | shape |
|------|-------|
| `text` | `{ type:'text', html: \`<h3>..</h3><p>..</p><ul>..</ul>\` }` — use `<h3>` section heads, `<h4>` subheads, `<p>`, `<ul>/<ol>`, `<strong>`, `<em>`. Key terms may use `<span class="kt" title="short def">term</span>`. |
| `callout` | `{ type:'callout', variant:'definition'\|'florida'\|'example'\|'tip'\|'warning', title:'(optional)', html:'<p>..</p>' }` |
| `table` | `{ type:'table', caption:'..', headers:[..], rows:[[..],[..]] }` — every row same width as headers; cells may contain `<strong>`/`<em>` |
| `compare` | `{ type:'compare', title:'..', left:{title, items:[..]}, right:{title, items:[..]} }` — two-column contrast |
| `steps` | `{ type:'steps', title:'..', items:[{title, text}, ..] }` — numbered process |
| `chart` | `{ type:'chart', chartType:'bar'\|'hbar'\|'line'\|'doughnut'\|'pie', title:'..', labels:[..], datasets:[{label, data:[..]}], suffix:'%'(optional), note:'..' }` — data arrays must match labels length. Label illustrative data as illustrative in the note. |
| `flashcards` | `{ type:'flashcards', title:'..', cards:[{front, back}, ..] }` — 6-10 cards |
| `quiz` | `{ type:'quiz', title:'Checkpoint — ..', questions:[{q, choices:[4 strings], answer: index, explain}, ..] }` |

## Question object (checkpoints, unit exams, final bank)

```js
{ q: 'Scenario or concept question?', choices: ['A','B','C','D'], answer: 2, explain: 'Why the right answer is right AND why the tempting wrong one is wrong.' }
```

- 4 choices, exam-realistic distractors (plausible, not jokes).
- `answer` is the zero-based index. Vary its position.
- `explain` is mandatory and substantive (1-3 sentences).

## Per-lesson minimums (match unit1.js)

- 2-3 substantial `text` blocks totaling 500-900 words of teaching prose
- ≥2 callouts; use `florida` variant whenever Florida-specific law appears
- ≥1 `table` or `compare`
- a `chart` in at least half the lessons of each unit (labeled illustrative where invented)
- 1 `flashcards` block (6-10 cards)
- 1-2 `quiz` checkpoints, 3-5 questions each (≥6 questions per lesson total when 2 checkpoints)
- 8-15 `terms`

## Voice & style

- Plain-English teaching voice, second person, exam-focused. Explain WHY, not just WHAT.
- Bold the testable fact in each paragraph. Use memory hooks where natural.
- Use typographic apostrophes (’) inside content text. Use backtick template literals
  for `html` fields; never use `${` or a backtick character inside content.
- Numbers and day-counts that the exam tests must be stated explicitly and repeated in
  a flashcard or quiz question.
- Where recent Florida reforms changed a number, teach the current rule and note the
  change (e.g., "reduced from 90 days by the 2022 reforms").

## Validation

Every file must pass `node --check` and `node personal-lines/validate.js`.

---

# Course map & must-cover facts

## Unit 2 — Inside the Policy: Structure & Common Provisions (id u2, icon 'file', 4 lessons)
- u2l1 "Anatomy of a Policy: Declarations to Endorsements": DICEE — Declarations,
  Insuring agreement, Conditions, Exclusions, + Definitions & Endorsements; why exclusions
  exist; reading a dec page (a table mimicking one is great).
- u2l2 "Valuation, Limits & Deductibles": ACV = replacement cost − depreciation; RC;
  agreed value; stated amount; functional replacement; market value contrast; deductible
  mechanics; coinsurance/insurance-to-value with the 80% rule and the coinsurance formula
  (did/should × loss, minus deductible) with at least two worked examples and a quiz that
  makes the student compute one.
- u2l3 "Conditions Everyone Skips (and the Exam Loves)": duties after loss, notice/proof of
  loss, appraisal vs arbitration, other-insurance & pro-rata contribution (worked example),
  subrogation, assignment, abandonment (not allowed), salvage, vacancy vs unoccupancy,
  mortgagee clause rights, policy territory, liberalization.
- u2l4 "People & Interests in the Policy": named insured vs insured vs additional insured;
  first vs third party; loss payee; mortgagee; how claims flow — notice → investigation →
  settlement; ACV vs RC claims payment workflow; negotiated/appraised settlements.
- Unit exam: 15 q.

## Unit 3 — The Dwelling Policy (id u3, icon 'home', 3 lessons)
- u3l1 "DP Basics & the Three Forms": who needs a DP (rentals up to 4 units, older homes,
  vacation homes; no theft/liability in base form); DP-1 basic named perils (fire, lightning,
  internal explosion; EC + VMM optional), DP-2 broad named perils, DP-3 special/open peril on
  dwelling; comparison table mandatory.
- u3l2 "DP Coverages A–E & Other Coverages": A dwelling, B other structures (10%), C personal
  property, D fair rental value (10%, applies even if not rented? no — when rented), E
  additional living expense (DP-2/3 only); other coverages; valuation: DP-1 ACV, DP-2/3 RC
  on dwelling.
- u3l3 "DP Exclusions, Endorsements & Choosing DP vs HO": exclusions; broad theft endorsement,
  liability (CPL) added by endorsement; scenarios choosing between DP and HO.
- Unit exam: 15 q.

## Unit 4 — The Homeowners Policy (id u4, icon 'home', 6 lessons)
- u4l1 "HO Program & the Forms": eligibility (owner-occupant 1-4 family, seasonal OK; not
  commercial); HO-2 broad named perils, HO-3 (open peril dwelling / named peril contents),
  HO-4 renters, HO-5 (open peril both), HO-6 condo, HO-8 modified/older homes; comparison
  table + chart.
- u4l2 "Section I — Property Coverages A–D": A dwelling, B other structures (10% of A),
  C personal property (50% of A; worldwide; special sub-limits table: money $200, securities
  $1,500, watercraft $1,500, jewelry theft $1,500, firearms theft $2,500, silverware theft
  $2,500, business property), D loss of use (30% of A); additional coverages: debris removal,
  reasonable repairs, trees/shrubs ($500/item, 5%), fire dept service charge $500, credit card
  $500, loss assessment $1,000, ordinance or law 10%.
- u4l3 "Section I — Perils & Exclusions": broad named perils list; open-peril exclusions
  (ordinance, earth movement, water/flood, power failure, neglect, war, nuclear, intentional
  loss); water damage nuance (sudden discharge covered vs flood/seepage excluded); mold limits;
  theft exclusions; concurrent causation.
- u4l4 "Section II — Liability E & F": Coverage E personal liability ($100k min) — legal
  liability, defense costs in addition to limits; Coverage F med pay ($1,000 base) — no fault,
  guests only, not insureds; exclusions (business, professional, auto, intentional, etc.);
  additional coverages: claim expenses, first aid, damage to property of others ($1,000 —
  no liability needed).
- u4l5 "Conditions & Loss Settlement": insurable interest; duties after loss; loss settlement —
  dwelling RC if insured ≥80% of RC (with the formula + worked example), personal property ACV
  unless RC endorsement; pair & set; appraisal; mortgage clause; suit limits; our option.
- u4l6 "HO-4, HO-6 & Endorsements": renters and condo deep dive (HO-6 Coverage A $5,000 base,
  loss assessment); endorsements: scheduled personal property, personal property RC, water
  backup, personal injury, home business, inflation guard, sinkhole (FL), animal liability.
- Unit exam: 15 q.

## Unit 5 — Florida Property Essentials (id u5, icon 'flag', 4 lessons) — ALL florida callouts
- u5l1 "Hurricane Coverage & Deductibles": hurricane vs windstorm definitions; hurricane
  deductible options $500 / 2% / 5% / 10% of Coverage A; calendar-year (single-season)
  application; notice requirements in BOLD TYPE; wind mitigation credits & uniform mitigation
  verification form; opening protection; roof age underwriting & the 2022-2023 roof rules
  (15-year inspection right); Florida Building Code.
- u5l2 "Citizens, the Cat Fund & FIGA": Citizens Property Insurance Corp — state-created
  insurer of last resort, eligibility (comparable private offer within 20% premium rule),
  depopulation/takeout, assessments; FL Hurricane Catastrophe Fund (state reinsurance);
  FIGA — pays claims of insolvent admitted insurers (caps, $300,000 homeowners cap nuance),
  funded by assessments; surplus lines NOT covered.
- u5l3 "Sinkholes, Claims Timelines & the Valued Policy Law": catastrophic ground cover
  collapse (mandatory; 4 statutory criteria) vs optional sinkhole loss coverage; testing;
  valued policy law (total loss by covered peril → face amount); FL claim timelines after
  2022-23 reforms: acknowledge within 7 days, inspect within 30, pay/deny within 60 (was 90);
  3-yr → 1-yr/18-mo notice of claim deadlines (1 yr new/reopened, 18 mo supplemental);
  AOB ban for new policies; mediation program; appraisal.
- u5l4 "Flood Insurance & the NFIP": flood definition; excluded by HO/DP; NFIP emergency vs
  regular program; regular limits $250,000 building / $100,000 contents (residential);
  30-day waiting period + exceptions (loan closing); flood zones (A/V vs X); elevation
  certificates; private flood market growth in FL; FL statute requiring flood disclosure
  notice on HO policies; Risk Rating 2.0 in plain terms.
- Unit exam: 15 q.

## Unit 6 — The Personal Auto Policy (id u6, icon 'car', 5 lessons)
- u6l1 "PAP Overview & Definitions": eligibility; policy structure Parts A-F; definitions:
  you/family member (resident relative), covered auto (4 ways incl. newly acquired — 14-day
  notice), occupying, trailer; policy period & territory (US, territories, PR, Canada — NOT
  Mexico).
- u6l2 "Part A — Liability": insuring agreement (BI+PD, defense in addition to limits);
  who is an insured (you, family members, permissive users, vicarious); split limits vs CSL
  with worked math example (e.g., 100/300/50 applied to a 3-victim crash); supplementary
  payments ($250 bail etc.); exclusions; out-of-state minimum conformity; other insurance —
  insurance follows the CAR (primary) then driver (excess).
- u6l3 "Parts B & C — Med Pay and Uninsured Motorists": Part B med pay (3 yrs? no — reasonable
  expenses within 3 years, occupying or pedestrian); Part C UM concept — your insurer stands in
  for the at-fault uninsured/underinsured/hit-and-run driver's BI; FL UM details saved for U7
  but introduce stacking concept.
- u6l4 "Part D — Damage to Your Auto": collision vs other-than-collision (comprehensive) with
  a sortable list quiz (falling objects, fire, theft, glass, animal contact = OTC; upset =
  collision); deductibles; transportation expenses ($20/day, $600 max standard); non-owned
  autos; exclusions (wear/tear, freezing, custom equipment, racing); limit of liability =
  lesser of ACV or repair cost; appraisal; no abandonment; Parts E (duties) & F (general).
- u6l5 "Auto Endorsements & Special Situations": towing & labor; rental reimbursement
  (extended transportation); miscellaneous type vehicle (motorcycles, RVs); named non-owner;
  extended non-owned; joint ownership; gap concept; usage-based/telematics note; ride-sharing
  (TNC) exclusion and FL TNC law basics.
- Unit exam: 15 q.

## Unit 7 — Florida Auto Law (id u7, icon 'scale', 4 lessons) — heavy florida callouts
- u7l1 "Registration vs. Responsibility: Florida’s Two Auto Laws": mandatory to register a
  vehicle: PIP $10,000 + PDL $10,000 (10k/10k — NO mandatory BI for ordinary drivers);
  Financial Responsibility Law: BI 10/20 + PD 10 (10/20/10) triggered after crash with
  injuries, DUI, suspensions, serious violations; proof forms SR-22; FR-44 after DUI =
  100/300/50 (3 years); penalties for no insurance (license/plate suspension, reinstatement
  fees up to $500).
- u7l2 "No-Fault Deep Dive: PIP": PIP pays YOUR OWN injuries regardless of fault: 80% medical,
  60% lost income, $5,000 death benefit, $10,000 total limit; 14-day initial treatment rule;
  emergency medical condition: full $10k vs $2,500 cap without EMC; who is covered (named
  insured, resident relatives, passengers without own PIP, pedestrians struck); deductibles
  up to $2,000; tort exemption — can only sue for pain & suffering past the permanent-injury
  threshold (death, permanent injury, significant scarring, loss of bodily function).
- u7l3 "UM in Florida & Liability Lawsuits": UM must be offered = BI limits unless rejected in
  writing (signed rejection form); stacked vs non-stacked (stacked multiplies by vehicles,
  costs more, broader); dangerous instrumentality doctrine (owner vicariously liable);
  comparative negligence — modified 51% bar since March 2023 (was pure); bad faith basics;
  financial responsibility following judgments.
- u7l4 "Cancellations, Nonrenewals & FL Auto Rules": 45-day notice for cancellation/nonrenewal
  (10 days for nonpayment); 60-day underwriting window for new policies; permissible
  cancellation reasons after 60 days; windshield zero-deductible rule (comprehensive);
  totaled-vehicle/salvage basics; rate filing; fraud (staged accidents) and why PIP fraud
  drives FL rates; mandatory insurer reporting; insurance score & FL rules.
- Unit exam: 15 q.

## Unit 8 — Beyond Home & Auto: Other Personal Lines (id u8, icon 'umbrella', 4 lessons)
- u8l1 "Personal Umbrella": excess liability $1M-$5M over HO/PAP; required underlying limits;
  retained limit/SIR for losses covered by umbrella but not underlying; drop-down coverage;
  broader perils (personal injury — libel/slander); worked example of a $1.5M verdict flowing
  through PAP then umbrella; who needs one.
- u8l2 "Inland Marine & the Personal Articles Floater": origin (transportation → floaters);
  scheduled coverage for jewelry, furs, cameras, musical instruments, silverware, golf gear,
  fine art, stamps/coins; open-peril, often no deductible, agreed/appraised values; newly
  acquired property 30 days; pair & set; vs HO sub-limits (tie back to u4l2 table).
- u8l3 "Watercraft & Recreational Vehicles": HO limitations on boats ($1,500 property,
  liability only for small boats/motors); boatowners policy (physical damage + liability +
  medical + uninsured boater); PWC; yacht policies (hull, protection & indemnity, navigational
  warranties, lay-up); motorcycles & off-road vehicles via miscellaneous vehicle endorsement
  or specialty policies; golf carts in FL communities.
- u8l4 "Mobile Homes & Specialty Policies": FL mobile/manufactured home market (HO-7 style
  mobile home policy — ACV vs stated value, tie-down credits); travel trailers/RVs; pet
  liability note; travel insurance basics; identity theft endorsements; service-line &
  equipment breakdown endorsements.
- Unit exam: 15 q.

## Unit 9 — Regulation, Ethics & Your 4-40 License (id u9, icon 'scale', 5 lessons)
- u9l1 "Who Regulates What in Florida": DFS (headed by elected CFO) — licensing agents/CRs,
  consumer services, fraud division, agent discipline; OIR — licenses insurers (certificate
  of authority), approves rates & forms, solvency, market conduct; FLDFS vs federal (McCarran-
  Ferguson — insurance is state-regulated); NAIC role (models, no legal authority); guaranty
  fund recap.
- u9l2 "Getting & Keeping the 4-40": qualifications: 18+, FL resident (or registered non-
  resident rules), fingerprints/background, approved course or designation; application
  through DFS; appointment by agency/agent (not insurer), appointments renewed every 24 months;
  license vs appointment distinction; address/name change notice to DFS within 60 days;
  license inactive without appointment for 48 months → expires; CE: 4-40 generally exempt from
  CE but must stay compliant; moving up to 20-44 (4-40 + 1 yr? state the standard pathways:
  customer rep experience credit) and 2-20 pathways.
- u9l3 "Unfair Trade Practices": misrepresentation & false advertising; twisting (misrepresent
  to replace) vs churning (replace own company’s policy for commission) vs sliding (including
  unrequested coverage without consent); defamation; boycott/coercion/intimidation; unlawful
  rebating — BUT Florida’s legal rebate exception (§626.572: rebate from agent’s commission,
  available to all in same actuarial class, per filed schedule, no insurer inducement);
  free-insurance prohibition; illegal dealing in premiums; penalties (admin fines, suspension,
  revocation; criminal for fraud).
- u9l4 "Claims Conduct & Consumer Protection": unfair claim settlement practices (misrepresenting
  provisions, failing to acknowledge promptly, no reasonable standards, lowballing, failing to
  explain denials); FL civil remedy notice/bad faith concept; premium handling & fiduciary
  accounts; records (keep transaction records ≥3 years); privacy — GLBA notice basics; insurance
  fraud (§817.234) — felony, DFS Fraud Division; anti-money-laundering awareness.
- u9l5 "Ethics at the Front Desk: a 4-40 Survival Guide": scenarios — what you can say/do vs
  when to hand to the agent; quoting accurately; documenting conversations; E&O insurance and
  how CRs create/prevent E&O claims; handling angry insureds; social media & advertising rules
  (ads must identify insurer; agent responsible); do-not-call basics; realistic office
  scenarios as quiz questions.
- Unit exam: 15 q.

## Unit 10 — Exam Readiness (id u10, icon 'grad', 3 lessons)
- u10l1 "The Florida Numbers Cheat Sheet": one mega-lesson of every tested number organized in
  tables: contract/property numbers (80% coinsurance, HO sub-limits, NFIP 250/100, 30-day wait,
  hurricane deductibles 2/5/10%), auto numbers (10/20/10, 10k/10k, PIP 80/60/5k/10k/14-day/
  $2,500 EMC, FR-44 100/300/50, 45-day cancel notice, $20/day transportation), license numbers
  (60-day address change, 24-month appointments, 48-month expiration, 3-year records); each
  table followed by a rapid-fire quiz.
- u10l2 "Most-Missed Concepts & Traps": peril vs hazard; foreign vs alien; pro-rata vs
  short-rate; twisting vs churning vs sliding; cancellation vs nonrenewal; ACV vs RC; named
  peril vs open peril; PIP vs Med Pay vs BI; UM stacked vs non-stacked; mortgagee vs loss
  payee; binder myths; each as mini-sections with a "trap" warning callout + big checkpoint
  quizzes (10+ questions across the lesson).
- u10l3 "Test-Day Strategy & Study Plan": how the licensing process works (approved 40-hr
  course route, DFS application, fingerprints, MyProfile); exam mechanics & time strategy;
  elimination tactics for scenario questions; a 2-week study plan table; final-exam
  instructions for this site.
- Unit exam: 15 q (mixed cumulative review).

## Final exam bank (finalexam.js)
60 additional questions spanning ALL units in roughly real-exam proportions
(≈20% general concepts, 25% homeowners/dwelling, 25% auto/FL auto, 10% other lines,
20% FL law/regulation/ethics). Scenario-heavy, 4 choices, varied answer positions,
substantive explanations. The app samples these + all unit-exam questions to build a
100-question timed final.
