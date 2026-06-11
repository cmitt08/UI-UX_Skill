/* Unit 10 — Exam Readiness */
window.PL.units.push({
  id: 'u10',
  number: 10,
  title: 'Exam Readiness',
  icon: 'grad',
  description: 'Lock it in: every tested Florida number in one cheat sheet, the confusable pairs that sink test-takers, and a test-day game plan — capped by a cumulative exam that sweeps the whole course.',
  lessons: [

    /* ---------------- Lesson 10.1 ---------------- */
    {
      id: 'u10l1',
      title: 'The Florida Numbers Cheat Sheet',
      minutes: 16,
      objectives: [
        'Recall the core homeowners percentages and dollar sub-limits without hesitation',
        'State every Florida property number: hurricane deductible options, NFIP limits, and the 7/30/60 claim timeline',
        'Recite the Florida auto numbers: 10/10 registration, 10/20/10 financial responsibility, FR-44, and the full PIP benefit structure',
        'Lock in the license-law clocks: 24-month appointments, 48-month expiration, 60-day address change, 3-year records'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Numbers are free points — if you drill them</h3>
<p>A large slice of the state exam is pure recall: a percentage, a dollar limit, or a day-count. These questions have no nuance and no judgment call — <strong>you either know the number or you don’t</strong>. That makes them the cheapest points on the test, and missing one hurts twice because the same numbers also hide inside scenario questions as distractors.</p>
<p>This lesson is your master reference. Every tested number from Units 1–9 is collected into four tables — property, Florida property law, auto, and license law — and <strong>each table is followed by a rapid-fire quiz</strong>. Work the cycle: read a table, take its quiz, and re-take any quiz you don’t ace until you do. Return to this lesson the night before your exam and the morning of.</p>`
        },
        {
          type: 'table',
          caption: 'Property & homeowners percentages',
          headers: ['Number', 'What it is', 'Trigger to remember'],
          rows: [
            ['<strong>80%</strong>', 'Insurance-to-value (coinsurance) requirement', 'Insure the dwelling to at least 80% of replacement cost or partial losses get penalized'],
            ['<strong>10% of A</strong>', 'Coverage B — Other Structures', 'Detached garage, shed, fence — anything not attached to the dwelling'],
            ['<strong>50% of A</strong>', 'Coverage C — Personal Property', 'Contents, worldwide — but watch the special sub-limits below'],
            ['<strong>30% of A</strong>', 'Coverage D — Loss of Use (HO-3)', 'Additional living expense and fair rental value while the home is uninhabitable'],
            ['<strong>10% of A</strong>', 'Ordinance or Law additional coverage', 'The extra cost of rebuilding to current building code'],
            ['<strong>5% / $500</strong>', 'Trees, shrubs & plants', '5% of Coverage A aggregate, no more than $500 per single item'],
            ['<strong>$5,000</strong>', 'HO-6 Coverage A base limit', 'The condo form’s small dwelling limit for interior walls, fixtures and improvements']
          ]
        },
        {
          type: 'callout', variant: 'tip', title: 'The coinsurance formula in five seconds',
          html: `<p><strong>(Did ÷ Should) × Loss − Deductible.</strong> "Should" is 80% of replacement cost. Example: RC is $400,000, so "should" is $320,000. The insured carries $240,000 and suffers a $40,000 loss with a $1,000 deductible: 240 ÷ 320 = 0.75; 0.75 × $40,000 = $30,000; minus $1,000 = <strong>$29,000 paid</strong>. If the exam gives you numbers, it wants this math.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — rapid fire: property percentages',
          questions: [
            {
              q: 'An HO-3 is written with Coverage A of $250,000. With no endorsements, the Coverage C limit for personal property is:',
              choices: ['$25,000', '$75,000', '$125,000', '$250,000'],
              answer: 2,
              explain: 'Coverage C defaults to 50% of Coverage A — half of $250,000 is $125,000. Coverage B would be 10% ($25,000) and D would be 30% ($75,000); the exam loves to offer all three percentages as choices.'
            },
            {
              q: 'On the HO-3, Coverage D — Loss of Use — defaults to:',
              choices: ['30% of Coverage A', '10% of Coverage A', '20% of Coverage A', '50% of Coverage A'],
              answer: 0,
              explain: 'Loss of use is 30% of Coverage A on the HO-3. Memorize the trio together: B is 10%, C is 50%, D is 30%.'
            },
            {
              q: 'To collect full replacement cost on a partial dwelling loss, the insured must carry coverage of at least what percentage of the home’s replacement cost?',
              choices: ['90%', '80%', '70%', '50%'],
              answer: 1,
              explain: 'The insurance-to-value rule requires at least 80% of replacement cost at the time of loss. Below that, the (did ÷ should) penalty formula applies to partial losses.'
            },
            {
              q: 'A home is insured with Coverage A of $300,000. A detached workshop burns down. The most the policy pays under Coverage B is:',
              choices: ['$60,000', '$45,000', '$3,000', '$30,000'],
              answer: 3,
              explain: 'Coverage B — Other Structures — is 10% of Coverage A, so $30,000. It is an additional amount of insurance, but 10% is the cap for all detached structures combined.'
            }
          ]
        },
        {
          type: 'table',
          caption: 'Homeowners dollar amounts (Section I sub-limits and Section II bases)',
          headers: ['Dollar amount', 'What it applies to', 'Watch out'],
          rows: [
            ['<strong>$200</strong>', 'Money, bank notes, coins', 'Applies to ANY covered peril, not just theft'],
            ['<strong>$1,500</strong>', 'Securities, deeds, valuable papers', 'Any covered peril'],
            ['<strong>$1,500</strong>', 'Watercraft, including trailers and motors', 'Any covered peril — serious boats need their own policy (Unit 8)'],
            ['<strong>$1,500</strong>', 'THEFT of jewelry, watches, furs', 'Theft only — a fire that melts the same jewelry pays up to the full Coverage C limit'],
            ['<strong>$2,500</strong>', 'THEFT of firearms', 'Theft only'],
            ['<strong>$2,500</strong>', 'THEFT of silverware and goldware', 'Theft only'],
            ['<strong>$100,000</strong>', 'Coverage E — Personal Liability base limit', 'Defense costs are paid IN ADDITION to this limit'],
            ['<strong>$1,000</strong>', 'Coverage F — Medical Payments to Others, per person', 'No fault required; guests only, never the insureds themselves'],
            ['<strong>$1,000</strong>', 'Damage to Property of Others (Section II additional coverage)', 'Pays without any legal liability — the goodwill coverage'],
            ['<strong>$500</strong>', 'Fire department service charge; credit card/forgery coverage', 'Two separate $500 additional coverages'],
            ['<strong>$1,000</strong>', 'Loss assessment additional coverage', 'Assessments charged by an association for a covered loss']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — rapid fire: HO dollar amounts',
          questions: [
            {
              q: 'A burglar steals a $4,000 diamond ring from an HO-3 insured with no endorsements. The policy pays:',
              choices: ['$4,000', '$2,500', '$1,500', '$200'],
              answer: 2,
              explain: 'Theft of jewelry is capped at $1,500. Remember the fix from Unit 8: a scheduled personal property endorsement or personal articles floater covers the full appraised value.'
            },
            {
              q: 'The base limit for Coverage F — Medical Payments to Others — on a homeowners policy is:',
              choices: ['$1,000 per person', '$5,000 per accident', '$100,000 per occurrence', '$2,500 per person'],
              answer: 0,
              explain: 'Coverage F starts at $1,000 per person. It pays guests’ medical bills without regard to fault — and never pays the insureds or regular household residents.'
            },
            {
              q: 'Thieves take a hunting rifle collection valued at $7,000. The HO special limit that applies is:',
              choices: ['$1,500', '$2,000', '$200', '$2,500'],
              answer: 3,
              explain: 'Theft of firearms is capped at $2,500. Pair it mentally with silverware theft — also $2,500 — and jewelry theft at $1,500.'
            },
            {
              q: 'An insured’s 9-year-old accidentally shatters a neighbor’s television. No one claims the insured was negligent. The Section II additional coverage Damage to Property of Others will pay up to:',
              choices: ['$500', '$1,000', '$1,500', '$2,500'],
              answer: 1,
              explain: 'Damage to Property of Others pays up to $1,000 per occurrence with no requirement of legal liability — it exists exactly for these goodwill situations.'
            }
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — why the property timeline is 7/30/60',
          html: `<p>Florida’s 2022–2023 property insurance reforms compressed the claim clock: insurers must <strong>acknowledge a claim communication within 7 days, begin investigation/inspection within 30 days, and pay or deny within 60 days</strong> (reduced from 90). The same reforms cut the deadline for an insured to give notice of a new or reopened claim to <strong>1 year</strong> (18 months for a supplemental claim) and banned assignment-of-benefits agreements on new policies. Expect at least one question on these numbers.</p>`
        },
        {
          type: 'table',
          caption: 'Florida property numbers',
          headers: ['Number', 'Rule', 'Notes'],
          rows: [
            ['<strong>$500 / 2% / 5% / 10%</strong>', 'Hurricane deductible options', 'Percentages apply to Coverage A, not to the loss'],
            ['<strong>Calendar year</strong>', 'Hurricane deductible application', 'One hurricane deductible per season — a second storm gets the remaining hurricane deductible or the AOP deductible, whichever is greater'],
            ['<strong>$250,000 / $100,000</strong>', 'NFIP regular program residential limits', 'Building / contents — flood is excluded by HO and DP policies'],
            ['<strong>30 days</strong>', 'NFIP waiting period', 'Key exception: coverage required in connection with a loan closing'],
            ['<strong>7 days</strong>', 'Acknowledge claim communications', 'Part of the 7/30/60 reform timeline'],
            ['<strong>30 days</strong>', 'Begin investigation / physical inspection', 'Part of the 7/30/60 reform timeline'],
            ['<strong>60 days</strong>', 'Pay or deny the claim', 'Reduced from 90 days by the 2022–2023 reforms'],
            ['<strong>1 year / 18 months</strong>', 'Notice of claim deadlines', '1 year for new or reopened claims; 18 months for supplemental claims'],
            ['<strong>$300,000</strong>', 'FIGA homeowners claim cap (nuance)', 'FIGA pays claims of insolvent ADMITTED insurers; surplus lines are never covered'],
            ['<strong>20%</strong>', 'Citizens eligibility premium rule', 'Generally ineligible for Citizens if a comparable private offer is within 20% of the Citizens premium']
          ]
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'What a hurricane deductible really costs on a $300,000 Coverage A',
          labels: ['$500 flat', '2%', '5%', '10%'],
          datasets: [{ label: 'Deductible in dollars', data: [500, 6000, 15000, 30000] }],
          note: 'Actual math, not an estimate: percentage hurricane deductibles apply to the Coverage A limit. A 10% option on a $300,000 home means the insured retains the first $30,000 of hurricane damage.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — rapid fire: Florida property',
          questions: [
            {
              q: 'Which of the following is NOT one of Florida’s standard hurricane deductible options?',
              choices: ['$500', '2% of Coverage A', '5% of Coverage A', '15% of Coverage A'],
              answer: 3,
              explain: 'The statutory menu is $500, 2%, 5%, and 10% of Coverage A. There is no 15% standard option.'
            },
            {
              q: 'Under the NFIP regular program, the maximum building coverage on a single-family residence is:',
              choices: ['$100,000', '$500,000', '$250,000', '$350,000'],
              answer: 2,
              explain: 'Residential NFIP limits are $250,000 building and $100,000 contents. The exam pairs them — do not swap them.'
            },
            {
              q: 'After Florida’s recent reforms, a property insurer must pay or deny a claim within:',
              choices: ['60 days', '90 days', '30 days', '14 days'],
              answer: 0,
              explain: 'Pay or deny within 60 days — reduced from 90 by the 2022–2023 reforms. Acknowledge within 7, inspect within 30.'
            },
            {
              q: 'A Florida homeowner discovers hurricane damage and wants to file a claim. Notice of a new claim must be given to the insurer within:',
              choices: ['6 months of the loss', '1 year of the date of loss', '2 years of the date of loss', '3 years of the date of loss'],
              answer: 1,
              explain: 'The reforms cut the notice window to 1 year for new or reopened claims (18 months for supplemental claims). The old 3-year window is a classic outdated distractor.'
            }
          ]
        },
        {
          type: 'table',
          caption: 'Florida auto numbers',
          headers: ['Number', 'Rule', 'Notes'],
          rows: [
            ['<strong>$10,000 PIP + $10,000 PDL</strong>', 'Required to REGISTER a vehicle', 'The no-fault law — note that bodily injury liability is NOT required just to register'],
            ['<strong>10/20/10</strong>', 'Financial Responsibility limits', 'BI $10,000 per person / $20,000 per accident / PD $10,000 — triggered by crashes with injuries, DUI, serious violations'],
            ['<strong>100/300/50</strong>', 'FR-44 limits after a DUI conviction', 'Carried for 3 years'],
            ['<strong>80%</strong>', 'PIP medical expense reimbursement', 'Of reasonable medical expenses'],
            ['<strong>60%</strong>', 'PIP lost income reimbursement', 'Of lost gross income'],
            ['<strong>$5,000</strong>', 'PIP death benefit', 'Paid in addition to medical/disability amounts used, within the overall structure'],
            ['<strong>$10,000 / $2,500</strong>', 'PIP limit with / without an emergency medical condition', 'No EMC diagnosis = capped at $2,500'],
            ['<strong>14 days</strong>', 'PIP initial treatment window', 'No treatment within 14 days of the crash = no PIP benefits at all'],
            ['<strong>Up to $2,000</strong>', 'Optional PIP deductible', 'Named insured may elect it to cut premium'],
            ['<strong>$20/day, $600 max</strong>', 'Transportation expenses (PAP Part D)', 'The standard temporary substitute transportation benefit'],
            ['<strong>14 days</strong>', 'Newly acquired auto notice (PAP)', 'Tell the insurer about a replacement/additional vehicle for automatic coverage to continue'],
            ['<strong>$250</strong>', 'Bail bond supplementary payment (Part A)', 'Paid in addition to the liability limit'],
            ['<strong>45 days / 10 days</strong>', 'Auto cancellation & nonrenewal notice', '45 days generally; only 10 days for nonpayment of premium'],
            ['<strong>60 days</strong>', 'New-policy underwriting window', 'After 60 days the insurer may cancel only for statutorily permitted reasons'],
            ['<strong>3 years</strong>', 'Part B Medical Payments window', 'Pays reasonable expenses incurred within 3 years of the accident']
          ]
        },
        {
          type: 'callout', variant: 'warning', title: 'Trap — there are TWO 14-day rules',
          html: `<p><strong>14 days</strong> shows up twice in auto: (1) a PIP claimant must receive <strong>initial medical treatment within 14 days</strong> of the accident or PIP pays nothing, and (2) a PAP insured must <strong>notify the insurer of a newly acquired auto within 14 days</strong> for automatic coverage. Read the question stem carefully to see which rule is being tested — both appear as distractors for each other.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — rapid fire: auto numbers',
          questions: [
            {
              q: 'To register a private passenger vehicle in Florida, an owner must show proof of:',
              choices: ['BI 10/20 and PD $10,000', 'PIP $10,000 and PDL $10,000', 'PIP $10,000 only', 'BI 25/50 and PDL $10,000'],
              answer: 1,
              explain: 'Registration requires the no-fault package: $10,000 PIP plus $10,000 property damage liability. Bodily injury liability is not required to register — that is the 10/20/10 Financial Responsibility trap.'
            },
            {
              q: 'After a DUI conviction, a Florida driver must carry an FR-44 certificate with liability limits of:',
              choices: ['10/20/10', '50/100/25', '100/300/50', '300/500/100'],
              answer: 2,
              explain: 'FR-44 means 100/300/50 — ten times the ordinary financial responsibility BI limits — generally maintained for 3 years.'
            },
            {
              q: 'Florida PIP reimburses lost gross income at:',
              choices: ['60%', '80%', '100%', '50%'],
              answer: 0,
              explain: 'PIP pays 80% of medical expenses but only 60% of lost income. Swapping the two percentages is the single most common PIP error.'
            },
            {
              q: 'Under the standard PAP, transportation expenses are paid at:',
              choices: ['$15 per day, $450 maximum', '$25 per day, $750 maximum', '$30 per day, $900 maximum', '$20 per day, $600 maximum'],
              answer: 3,
              explain: 'The standard benefit is $20 per day up to a $600 maximum. The rental reimbursement endorsement can increase it.'
            },
            {
              q: 'A PIP claimant treats promptly but is never diagnosed with an emergency medical condition. Her medical benefits are capped at:',
              choices: ['$10,000', '$5,000', '$2,500', '$1,000'],
              answer: 2,
              explain: 'Without an EMC determination, PIP medical benefits stop at $2,500. With an EMC, the full $10,000 is available.'
            }
          ]
        },
        {
          type: 'table',
          caption: 'License & regulation numbers',
          headers: ['Number', 'Rule', 'Notes'],
          rows: [
            ['<strong>18</strong>', 'Minimum age for a 4-40 license', 'Plus Florida residency (or registered non-resident rules) and a clean background'],
            ['<strong>40 hours</strong>', 'Approved pre-licensing course', 'The standard course route to the 4-40 (Lesson 10.3 walks the whole process)'],
            ['<strong>24 months</strong>', 'Appointment renewal cycle', 'Appointments are renewed every 24 months; the 4-40 is appointed by the AGENT or AGENCY, not an insurer'],
            ['<strong>48 months</strong>', 'License expiration without appointment', 'A license that sits unappointed for 48 months expires'],
            ['<strong>60 days</strong>', 'Notify DFS of a change of address or name', 'Done through MyProfile'],
            ['<strong>3 years</strong>', 'Records retention', 'Keep records of insurance transactions at least 3 years']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — rapid fire: license law',
          questions: [
            {
              q: 'A 4-40 customer representative’s appointment must be renewed every:',
              choices: ['12 months', '24 months', '36 months', '48 months'],
              answer: 1,
              explain: 'Appointments renew every 24 months. Keep 24 (appointment renewal) and 48 (unappointed license expiration) straight — one is double the other.'
            },
            {
              q: 'A licensee who goes without any appointment will see the license expire after:',
              choices: ['24 months', '36 months', '48 months', '60 months'],
              answer: 2,
              explain: 'A license left unappointed for 48 months expires, and the person must requalify. The 24-month figure is the appointment renewal cycle — a deliberate distractor.'
            },
            {
              q: 'After moving to a new home, a licensee must notify the Department of Financial Services of the address change within:',
              choices: ['10 days', '30 days', '45 days', '60 days'],
              answer: 3,
              explain: 'Address and name changes must reach DFS within 60 days. The 45-day figure belongs to auto cancellation notice — a different rule entirely.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'The numbers that decide your score',
          cards: [
            { front: '80% rule', back: 'Insure the dwelling to at least 80% of replacement cost or partial losses are penalized: (did ÷ should) × loss − deductible.' },
            { front: 'HO percentages B / C / D', back: 'Coverage B 10% of A, Coverage C 50% of A, Coverage D 30% of A (HO-3).' },
            { front: 'Money / securities sub-limits', back: '$200 money, $1,500 securities — these apply to ANY covered peril.' },
            { front: 'Theft-only sub-limits', back: 'Jewelry/watches/furs $1,500, firearms $2,500, silverware $2,500 — theft only.' },
            { front: 'Coverage E / Coverage F bases', back: 'E personal liability $100,000 (defense in addition); F med pay $1,000 per person; damage to property of others $1,000.' },
            { front: 'NFIP', back: '$250,000 building / $100,000 contents (residential); 30-day waiting period except for loan closings.' },
            { front: 'Hurricane deductibles', back: '$500, 2%, 5%, or 10% of Coverage A — applied once per CALENDAR YEAR.' },
            { front: '7 / 30 / 60 / 1 year', back: 'FL property claims: acknowledge 7 days, inspect 30 days, pay or deny 60 days; insured’s notice of new claim within 1 year.' },
            { front: 'PIP package', back: '$10,000 total; 80% medical, 60% wages, $5,000 death; treat within 14 days; $2,500 cap without an emergency medical condition.' },
            { front: 'License clocks', back: 'Appointments renew every 24 months; unappointed license expires at 48 months; address change to DFS within 60 days; records kept 3 years.' }
          ]
        }
      ],
      terms: [
        { term: 'Insurance-to-value (80% rule)', def: 'The requirement to insure a dwelling to at least 80% of replacement cost to receive full replacement cost on partial losses.' },
        { term: 'Coverage B — Other Structures', def: 'Homeowners coverage for detached structures, defaulting to 10% of Coverage A.' },
        { term: 'Coverage C — Personal Property', def: 'Homeowners contents coverage, defaulting to 50% of Coverage A, subject to special sub-limits.' },
        { term: 'Coverage D — Loss of Use', def: 'Additional living expense and fair rental value coverage, defaulting to 30% of Coverage A on the HO-3.' },
        { term: 'Special (sub) limits', def: 'Dollar caps inside Coverage C — e.g., $200 money, $1,500 securities, $1,500 jewelry theft, $2,500 firearms theft.' },
        { term: 'Hurricane deductible', def: 'A separate deductible of $500, 2%, 5%, or 10% of Coverage A applying to hurricane losses, once per calendar year.' },
        { term: 'NFIP', def: 'The National Flood Insurance Program — regular program residential limits of $250,000 building / $100,000 contents with a 30-day wait.' },
        { term: '7/30/60 timeline', def: 'Florida property claim deadlines: acknowledge within 7 days, inspect within 30, pay or deny within 60.' },
        { term: 'Personal injury protection (PIP)', def: 'Florida’s $10,000 no-fault benefit: 80% medical, 60% lost wages, $5,000 death benefit, 14-day treatment rule.' },
        { term: 'Property damage liability (PDL)', def: 'The $10,000 liability coverage required, with PIP, to register a Florida vehicle.' },
        { term: 'FR-44', def: 'The certificate filed after a DUI conviction proving 100/300/50 liability limits, generally for 3 years.' },
        { term: 'Appointment', def: 'The authority that activates a license; a 4-40 is appointed by the agent or agency, and appointments renew every 24 months.' }
      ]
    },

    /* ---------------- Lesson 10.2 ---------------- */
    {
      id: 'u10l2',
      title: 'Most-Missed Concepts & Traps',
      minutes: 16,
      objectives: [
        'Distinguish the classic confusable pairs the exam uses to build wrong answers',
        'Apply the correct refund method, notice rule, and valuation method to a scenario in one read',
        'Separate PIP, medical payments, and bodily injury liability by who they pay and whether fault matters',
        'Identify twisting, churning, and sliding from a scenario without hesitation'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>How wrong answers are manufactured</h3>
<p>Exam writers rarely invent distractors from thin air. The wrong choices on a question are usually the <strong>sibling concept</strong> of the right one: the hazard when the answer is the peril, short-rate when the answer is pro-rata, churning when the answer is twisting. If you can tell each pair apart under pressure, you have neutralized most of the test’s traps.</p>
<p>Each mini-section below contrasts one confusable pair and flags the exact trap built around it. Three large checkpoints are spread through the lesson — treat them as a diagnostic, and reread any section you miss.</p>
<h3>Trap 1 — Peril vs. hazard</h3>
<p>The <strong>peril is the cause of loss itself</strong> (fire, wind, theft, collision). The <strong>hazard is a condition that increases the chance or severity</strong> of the peril (frayed wiring, icy steps, dishonesty, carelessness). Hazards come in three flavors: <strong>physical</strong> (tangible conditions), <strong>moral</strong> (dishonesty), and <strong>morale</strong> (carelessness because insurance exists).</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'The trap',
          html: `<p>A question asks for the <em>peril</em> and three of the four choices are hazards — or asks you to classify a hazard and offers "peril" as bait. Anchor on the verb: the peril <strong>does the damage</strong>; the hazard just <strong>raises the odds</strong>. And moral vs. morale: <strong>moral = dishonest, morale = careless</strong>.</p>`
        },
        {
          type: 'text',
          html: `<h3>Trap 2 — Foreign vs. alien insurers</h3>
<p>From Florida’s point of view: <strong>domestic = chartered in Florida, foreign = chartered in another U.S. state, alien = chartered in another country</strong>. In everyday English "foreign" means another country — which is exactly why the exam tests it.</p>
<h3>Trap 3 — Pro-rata vs. short-rate refunds</h3>
<p>Who cancels determines the math. <strong>Insurer cancels → pro-rata</strong>: the full unearned premium comes back, no penalty. <strong>Insured cancels mid-term → short-rate</strong>: unearned premium minus a service penalty. <strong>Flat cancellation</strong> (the policy never took effect) returns 100%.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'The traps',
          html: `<p><strong>Foreign/alien:</strong> "an insurer chartered in London" is ALIEN, not foreign. Memory hook: an <em>alien</em> crossed an ocean; a <em>foreign</em> insurer only crossed a state line.</p>
<p><strong>Refunds:</strong> when the INSURED cancels, the refund is <em>shorted</em> — short-rate. When the insurer cancels, the insured gets the fair pro-rata share. The exam flips the actor and hopes you follow the old answer.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — traps 1 to 3',
          questions: [
            {
              q: 'A rental property has a rotting exterior staircase the landlord refuses to fix. In insurance terms the staircase is:',
              choices: ['A peril', 'A physical hazard', 'A morale hazard', 'A moral hazard'],
              answer: 1,
              explain: 'The staircase is a tangible condition that increases the chance of an injury loss — a physical hazard. The peril would be the fall/collapse that actually causes the loss.'
            },
            {
              q: 'An insurer chartered in Toronto, Canada holds a Florida certificate of authority and writes auto policies in Miami. From Florida’s perspective it is:',
              choices: ['A foreign insurer', 'A domestic insurer', 'An alien insurer', 'An unauthorized insurer'],
              answer: 2,
              explain: 'Chartered outside the United States = alien. Foreign means another U.S. state, and the certificate of authority makes it fully authorized — domicile and authorization are separate questions.'
            },
            {
              q: 'Four months into a 12-month policy, the INSURED cancels to switch carriers. The return premium is calculated:',
              choices: ['Flat — full refund', 'Pro-rata — full unearned premium', 'There is no refund', 'Short-rate — unearned premium minus a penalty'],
              answer: 3,
              explain: 'Insured-initiated mid-term cancellation = short-rate: the unearned premium minus a service charge. Pro-rata (no penalty) applies when the insurer cancels.'
            },
            {
              q: 'An insurer cancels a $1,200 annual policy exactly at the 6-month mark for a permitted underwriting reason. The insured receives:',
              choices: ['$600 — the full unearned premium, pro-rata', '$540 — unearned premium minus a penalty', '$1,200 — a flat refund', 'Nothing'],
              answer: 0,
              explain: 'When the insurer cancels, the refund is pro-rata — the exact unused share, here 6 of 12 months = $600 with no penalty.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Trap 4 — Cancellation vs. nonrenewal</h3>
<p><strong>Cancellation ends coverage DURING the term; nonrenewal declines to continue AT THE END of the term.</strong> Both require advance written notice with reasons. For Florida personal auto, the notice is <strong>45 days</strong> for cancellation or nonrenewal — but only <strong>10 days</strong> for nonpayment of premium.</p>
<h3>Trap 5 — ACV vs. replacement cost</h3>
<p><strong>Actual cash value = replacement cost minus depreciation.</strong> Replacement cost pays today’s cost to replace with like kind and quality, no depreciation deduction. Neither one is market value — market value includes land and location, which insurance does not pay for. On the HO forms, the dwelling gets RC treatment only if the 80% rule is satisfied; personal property settles at ACV unless an RC endorsement is added.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'The traps',
          html: `<p><strong>Notice numbers:</strong> 45 days is the Florida auto cancellation/nonrenewal notice; 10 days is for nonpayment. Do not confuse 45 with the 60-day new-policy underwriting window or the 60-day DFS address-change rule — three different rules that all sound alike.</p>
<p><strong>Valuation:</strong> if a question subtracts depreciation, it is ACV. If a choice mentions "market value," it is almost always wrong — insurance indemnifies the structure, not the real-estate market.</p>`
        },
        {
          type: 'compare',
          title: 'Named peril vs. open peril (special form)',
          left: {
            title: 'Named peril',
            items: [
              'Covers ONLY the perils listed in the policy',
              '<strong>Insured</strong> bears the burden of showing a listed peril caused the loss',
              'Examples: DP-1, DP-2, HO-2, and HO-3 <strong>contents</strong>',
              'Cheaper, narrower'
            ]
          },
          right: {
            title: 'Open peril (special form)',
            items: [
              'Covers all causes of loss EXCEPT those excluded',
              '<strong>Insurer</strong> bears the burden of proving an exclusion applies',
              'Examples: DP-3 and HO-3 <strong>dwelling</strong>, HO-5 both, scheduled floaters',
              'Broader, costs more'
            ]
          }
        },
        {
          type: 'callout', variant: 'warning', title: 'The trap — HO-3 is a hybrid',
          html: `<p>The HO-3 is <strong>open peril on the dwelling (Coverages A and B) but named peril on personal property (Coverage C)</strong>. Questions describe a weird contents loss and bait you into saying "covered — HO-3 is special form." Check whether the damaged item is structure or contents before you answer.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — traps 4 to 6',
          questions: [
            {
              q: 'An insurer mails a notice that it will not continue an auto policy when the current term expires next month. This is a:',
              choices: ['Cancellation', 'Rescission', 'Nonrenewal', 'Lapse'],
              answer: 2,
              explain: 'Declining to continue at the natural end of the term is nonrenewal. Cancellation terminates coverage mid-term. In Florida auto, both generally require 45 days’ written notice.'
            },
            {
              q: 'Actual cash value is best defined as:',
              choices: ['Replacement cost minus depreciation', 'The market value of the home including land', 'The original purchase price minus the deductible', 'Replacement cost plus depreciation'],
              answer: 0,
              explain: 'ACV = replacement cost − depreciation. Market value reflects land and location, which property insurance does not cover — a perennial distractor.'
            },
            {
              q: 'On an unendorsed HO-3, which combination is correct?',
              choices: ['Dwelling and contents both open peril', 'Dwelling open peril; contents named peril', 'Dwelling named peril; contents open peril', 'Dwelling and contents both named peril'],
              answer: 1,
              explain: 'The HO-3 hybrid: Coverages A and B are open peril; Coverage C is named peril. The HO-5 covers both on an open-peril basis.'
            },
            {
              q: 'Under an open-peril (special form) policy, when a loss occurs:',
              choices: ['The insured must prove the peril was specifically listed', 'The adjuster must inspect within 7 days or coverage is automatic', 'Coverage applies automatically and no exclusions can be raised', 'The insurer bears the burden of proving an exclusion applies'],
              answer: 3,
              explain: 'Open peril flips the burden of proof: everything is covered unless the insurer can show an exclusion applies. Under named peril, the insured must show a listed peril caused the loss.'
            }
          ]
        },
        {
          type: 'table',
          caption: 'Twisting vs. churning vs. sliding — the unfair-trade triplets',
          headers: ['Practice', 'What it is', 'Memory hook'],
          rows: [
            ['<strong>Twisting</strong>', 'Misrepresenting or making incomplete comparisons to induce someone to lapse or replace a policy — classically a competitor’s policy', 'You <em>twist the truth</em> about the other company’s policy'],
            ['<strong>Churning</strong>', 'Replacing your OWN company’s policies, using policy values, primarily to generate new commissions with no benefit to the insured', 'You <em>churn your own butter</em> — your own book of business'],
            ['<strong>Sliding</strong>', 'Including coverage or products the customer did not request without informed consent — or charging for them — e.g., representing an ancillary product as required', 'Extras get <em>slid into</em> the deal unnoticed']
          ]
        },
        {
          type: 'callout', variant: 'warning', title: 'The trap',
          html: `<p>All three involve a producer profiting at the customer’s expense, so the scenarios feel interchangeable. Ask two questions: <strong>Whose policy is being replaced?</strong> (someone else’s = twisting; your own company’s = churning) and <strong>Was something added the customer never asked for?</strong> (= sliding, even if the customer is never charged a penny extra).</p>`
        },
        {
          type: 'table',
          caption: 'PIP vs. Med Pay vs. BI liability — who pays whom',
          headers: ['Coverage', 'Pays whom', 'Fault required?', 'Key numbers'],
          rows: [
            ['<strong>PIP (FL no-fault)</strong>', 'YOU and your household — your own injuries', 'No — pays regardless of fault', '$10,000; 80% medical / 60% wages / $5,000 death; 14-day rule; $2,500 non-EMC cap'],
            ['<strong>Med Pay (PAP Part B)</strong>', 'You and passengers occupying your auto (or you as a pedestrian)', 'No fault required', 'Reasonable expenses incurred within 3 years; supplements PIP in Florida'],
            ['<strong>BI liability (Part A)</strong>', 'OTHER people you injure', 'Yes — pays your legal liability to third parties', 'Not required to register in FL; 10/20 under financial responsibility; defense in addition to limits']
          ]
        },
        {
          type: 'compare',
          title: 'UM — stacked vs. non-stacked',
          left: {
            title: 'Stacked',
            items: [
              'Limits <strong>multiply across vehicles</strong> on the policy (and can combine across policies)',
              'Two cars with $50,000 UM each = <strong>$100,000</strong> available',
              'Broader and more expensive',
              'Florida default unless non-stacked is properly elected'
            ]
          },
          right: {
            title: 'Non-stacked',
            items: [
              'One limit applies <strong>per vehicle</strong>, no multiplying',
              'Two cars with $50,000 UM each = $50,000 available',
              'Cheaper; requires the insured’s signed election',
              'Still pays when an at-fault driver has no/too little BI'
            ]
          }
        },
        {
          type: 'callout', variant: 'warning', title: 'The trap — UM is rejected in WRITING',
          html: `<p>Florida insurers must offer UM at limits equal to BI. The insured can reject UM or choose lower limits ONLY with a <strong>signed written rejection</strong>. An oral "no thanks" does not count — without the signed form, UM equal to the BI limits is read into the policy. This is a favorite scenario question.</p>`
        },
        {
          type: 'text',
          html: `<h3>Trap 9 — Mortgagee vs. loss payee</h3>
<p>Both are lenders listed on a policy, but their rights differ. A <strong>mortgagee</strong> (home lender) has its own contractual rights: it gets named on claim checks, receives separate notice of cancellation, and <strong>can still collect even if the insured’s own claim is denied</strong> (for example, after the insured’s fraud), as long as the mortgagee meets its own duties. A <strong>loss payee</strong> (typically the lienholder on a car) is simply paid as its interest appears — its protection generally rises and falls with the insured’s coverage.</p>
<h3>Trap 10 — Binder myths</h3>
<p>A binder is <strong>temporary evidence of coverage</strong> pending policy issuance. It can be <strong>oral or written</strong>, it ends when the policy is issued or the binder is properly canceled, and — the tested part — it is <strong>NOT a guarantee the policy will be issued</strong>. Underwriting can still decline the risk.</p>
<h3>Trap 11 — DFS vs. OIR</h3>
<p>Two Tallahassee regulators split the job. The <strong>Department of Financial Services (DFS), headed by the elected Chief Financial Officer</strong>, regulates <em>people</em>: it licenses and disciplines agents, customer representatives, and adjusters, runs consumer services, and houses the fraud division. The <strong>Office of Insurance Regulation (OIR)</strong> regulates <em>companies</em>: it issues certificates of authority, approves rates and forms, and monitors insurer solvency.</p>`
        },
        {
          type: 'callout', variant: 'tip', title: 'One-line anchors',
          html: `<p><strong>DFS = people, OIR = companies.</strong> Mortgagee = home lender with independent rights; loss payee = car lienholder paid as interest appears. A binder binds <em>coverage</em>, not the <em>decision to issue</em>. Say each one out loud until it is automatic.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Where students lose points on practice finals',
          labels: ['Pro-rata vs short-rate', 'PIP vs Med Pay vs BI', 'Foreign vs alien', 'Twisting vs churning vs sliding', 'ACV vs RC', 'Stacked vs non-stacked UM'],
          datasets: [{ label: 'Share of trap-question misses', data: [21, 19, 17, 16, 14, 13] }],
          suffix: '%',
          note: 'Illustrative distribution based on common error patterns — the point is that ALL of these pairs are heavily tested, and each is worth a focused five minutes of review.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — traps 7 to 11',
          questions: [
            {
              q: 'An agent shows a prospect a misleading comparison that exaggerates the flaws of her current policy with a competing insurer, convincing her to lapse it and buy his product. This is:',
              choices: ['Sliding', 'Churning', 'Rebating', 'Twisting'],
              answer: 3,
              explain: 'Misrepresentation to induce replacement of another insurer’s policy is twisting. Churning would be replacing his own company’s policy to harvest commissions.'
            },
            {
              q: 'While quoting an auto policy, a producer adds a motor club membership the customer never requested and folds the charge into the quoted premium without explanation. This is:',
              choices: ['Twisting', 'Sliding', 'Churning', 'Defamation'],
              answer: 1,
              explain: 'Including unrequested coverage or products without the customer’s informed consent — or charging for them — is sliding.'
            },
            {
              q: 'A Florida driver runs a red light and breaks his wrist in the resulting crash. His own medical bills are paid first by:',
              choices: ['His bodily injury liability coverage', 'The other driver’s PDL', 'His PIP', 'His UM coverage'],
              answer: 2,
              explain: 'PIP pays the insured’s own injuries regardless of fault — that is the whole point of no-fault. BI liability pays people HE injures; UM responds when an at-fault OTHER driver is uninsured.'
            },
            {
              q: 'A Florida insured carries stacked UM of $50,000 on each of her two vehicles under one policy. The UM available for her serious injury caused by an uninsured driver is:',
              choices: ['$100,000', '$50,000', '$25,000', '$200,000'],
              answer: 0,
              explain: 'Stacked UM multiplies the limit by the number of vehicles: 2 × $50,000 = $100,000. Non-stacked coverage would stop at $50,000.'
            },
            {
              q: 'The state body that licenses and disciplines Florida customer representatives is:',
              choices: ['The Office of Insurance Regulation', 'The NAIC', 'FIGA', 'The Department of Financial Services'],
              answer: 3,
              explain: 'DFS — headed by the elected CFO — regulates licensees (people). OIR regulates insurers (companies): certificates of authority, rates, forms, solvency.'
            },
            {
              q: 'The lender named on a homeowners policy that retains a right to loss payment even if the insured’s own claim is denied for fraud is the:',
              choices: ['Loss payee', 'Additional insured', 'Mortgagee', 'Named insured'],
              answer: 2,
              explain: 'The mortgagee clause gives the home lender independent contractual rights, including payment despite the insured’s denied claim. A loss payee (auto lienholder) is simply paid as its interest appears.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Confusable pairs — say the difference out loud',
          cards: [
            { front: 'Peril vs. hazard', back: 'Peril = the cause of loss itself. Hazard = a condition increasing the chance/severity (physical, moral = dishonest, morale = careless).' },
            { front: 'Foreign vs. alien', back: 'Foreign = chartered in another U.S. STATE. Alien = chartered in another COUNTRY.' },
            { front: 'Pro-rata vs. short-rate', back: 'Insurer cancels = pro-rata (full unearned premium). Insured cancels = short-rate (penalty deducted).' },
            { front: 'Twisting / churning / sliding', back: 'Twist the truth about a competitor’s policy; churn your own company’s policies for commissions; slide in unrequested coverage.' },
            { front: 'Cancellation vs. nonrenewal', back: 'Cancellation = mid-term. Nonrenewal = at term end. FL auto: 45 days’ notice, 10 for nonpayment.' },
            { front: 'ACV vs. RC', back: 'ACV = replacement cost − depreciation. RC = today’s cost, no depreciation. Neither is market value.' },
            { front: 'PIP vs. Med Pay vs. BI', back: 'PIP = your own injuries, no fault. Med Pay = occupants/pedestrian, no fault, 3-year window. BI = others you injure, fault-based.' },
            { front: 'Stacked vs. non-stacked UM', back: 'Stacked multiplies limits across vehicles (2 × $50k = $100k); non-stacked keeps one per-vehicle limit; rejection/election must be in writing.' },
            { front: 'Mortgagee vs. loss payee', back: 'Mortgagee (home lender) has independent rights and can collect despite the insured’s denied claim; loss payee (auto lienholder) is paid as interest appears.' }
          ]
        }
      ],
      terms: [
        { term: 'Peril', def: 'The actual cause of a loss — fire, windstorm, theft, collision.' },
        { term: 'Hazard', def: 'A condition that increases the probability or severity of loss; physical, moral (dishonesty), or morale (carelessness).' },
        { term: 'Foreign insurer', def: 'An insurer chartered in another U.S. state.' },
        { term: 'Alien insurer', def: 'An insurer chartered in another country.' },
        { term: 'Pro-rata cancellation', def: 'Return of the full unearned premium with no penalty — used when the insurer cancels.' },
        { term: 'Short-rate cancellation', def: 'Return of unearned premium minus a service penalty — used when the insured cancels mid-term.' },
        { term: 'Twisting', def: 'Misrepresentation or incomplete comparison made to induce the lapse or replacement of a policy, classically a competitor’s.' },
        { term: 'Churning', def: 'Replacing one’s own company’s policies, using their values, primarily to generate commissions without benefit to the insured.' },
        { term: 'Sliding', def: 'Including unrequested coverage or products in a transaction without the customer’s informed consent, or charging for them.' },
        { term: 'Actual cash value (ACV)', def: 'Replacement cost minus depreciation.' },
        { term: 'Replacement cost (RC)', def: 'The cost to replace damaged property with like kind and quality at today’s prices, with no depreciation deduction.' },
        { term: 'Stacked UM', def: 'Uninsured motorist coverage whose limits multiply by the number of insured vehicles; broader and costlier than non-stacked.' },
        { term: 'Mortgagee clause', def: 'Policy provision giving the home lender independent rights to loss payment and notice, surviving even a denial of the insured’s claim.' },
        { term: 'Loss payee', def: 'A party (typically an auto lienholder) paid as its interest appears, whose protection generally follows the insured’s coverage.' }
      ]
    },

    /* ---------------- Lesson 10.3 ---------------- */
    {
      id: 'u10l3',
      title: 'Test-Day Strategy, the Licensing Process & Your 2-Week Plan',
      minutes: 14,
      objectives: [
        'Outline the path from the approved 40-hour course to an active, appointed 4-40 license',
        'Apply a repeatable elimination method to long scenario questions',
        'Manage exam time with a first-pass / flag-and-return rhythm',
        'Execute a structured 2-week study plan that ends with the Numbers Cheat Sheet'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The big picture: license first, appointment second</h3>
<p>Two separate things make you legal to work: the <strong>license</strong>, issued by the Department of Financial Services after you qualify, and the <strong>appointment</strong>, which activates that license. For a 4-40 customer representative, the appointment comes from the <strong>supervising agent or the agency — never from an insurance company</strong>. A license with no appointment is a card in a drawer: you cannot transact, and if it sits unappointed for <strong>48 months it expires</strong>.</p>
<p>The path below is the standard course route. Walk it in order — several steps cannot start until the previous one clears.</p>`
        },
        {
          type: 'steps',
          title: 'From student to appointed 4-40',
          items: [
            { title: 'Confirm you qualify', text: 'At least 18 years old, a Florida resident (registered non-resident rules exist), and no disqualifying criminal history. Gather your Social Security number and identity documents now.' },
            { title: 'Complete the approved 40-hour course', text: 'Finish a DFS-approved 40-hour customer representative pre-licensing course. Certain professional designations can substitute for the course — check the DFS list if you hold one.' },
            { title: 'Apply through MyProfile', text: 'MyProfile is the DFS online portal for everything license-related: submit the application, pay fees, and later manage your license there. The Bureau of Licensing reviews the application.' },
            { title: 'Get fingerprinted', text: 'Submit electronic fingerprints at an approved vendor for the state and federal background check. Results go straight to DFS; delays here are the most common bottleneck, so book early.' },
            { title: 'Pass the required examination', text: 'Depending on your qualification route, pass the state licensing exam or the approved course’s qualifying exam. Either way, the material tested is exactly what Units 1–9 covered. Bring required identification and arrive early.' },
            { title: 'Get appointed — and stay appointed', text: 'Your supervising agent or agency files the appointment with DFS, which activates the license. Appointments renew every 24 months. Keep DFS updated through MyProfile — address or name changes within 60 days — and keep transaction records at least 3 years.' }
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the clocks that follow you after licensing',
          html: `<p>Memorize the post-licensing housekeeping as a set: <strong>appointments renew every 24 months; a license unappointed for 48 months expires; address and name changes must reach DFS within 60 days; records of insurance transactions are kept at least 3 years.</strong> Every one of these numbers is exam material — and real-world compliance material the day you start work.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the licensing process',
          questions: [
            {
              q: 'A 4-40 customer representative’s appointment is filed by:',
              choices: ['The insurance company whose products the agency sells', 'The supervising agent or the agency', 'The Office of Insurance Regulation', 'The NAIC'],
              answer: 1,
              explain: 'Unlike agents, who are appointed by insurers, the 4-40 is appointed by the agent or agency that employs and supervises the customer representative.'
            },
            {
              q: 'MyProfile is best described as:',
              choices: ['The DFS online portal where licensees apply for, manage, and update their licenses', 'The exam vendor’s scheduling website', 'The OIR’s rate-filing database', 'A continuing-education tracking vendor'],
              answer: 0,
              explain: 'MyProfile is the Department of Financial Services portal — applications, fee payments, address changes, and appointment status all live there.'
            },
            {
              q: 'A licensee who holds a 4-40 but never obtains an appointment will find that after 48 months the license:',
              choices: ['Converts automatically to a 20-44', 'Remains valid indefinitely', 'Is suspended for 12 months', 'Expires'],
              answer: 3,
              explain: 'Forty-eight months without an appointment kills the license — the person must requalify. The 24-month figure is the appointment renewal cycle.'
            },
            {
              q: 'Which of the following is a required part of the Florida 4-40 application process?',
              choices: ['A four-year college degree', 'Sponsorship by an insurance company', 'Fingerprinting for a state and federal background check', 'Posting a surety bond'],
              answer: 2,
              explain: 'Electronic fingerprints feed the background check DFS runs on every applicant. No degree, insurer sponsorship, or bond is required for the 4-40.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Exam mechanics and the 70% mindset</h3>
<p>The licensing exam is multiple choice, scored against a <strong>passing standard of roughly 70%</strong> — your exam registration materials confirm the exact question count and time limit for your sitting. That standard changes how you should play: <strong>you can miss a meaningful number of questions and still pass comfortably</strong>, so no single question deserves panic or five minutes of agonizing.</p>
<p>Run the exam in two passes. <strong>Pass one:</strong> answer everything you know cold — the numbers questions, the definitions, the pairs you drilled in Lesson 10.2 — and flag anything that needs real thought. <strong>Pass two:</strong> return to the flags with the time you banked. Answer every question before time expires; <strong>blanks are scored as wrong, so a guess always beats a blank</strong>. Change an answer only when you can articulate a reason — "I misread the stem" is a reason; a vague feeling is not.</p>
<h3>A repeatable method for scenario questions</h3>
<p>Long scenarios are written to drown you in detail. Cut through them the same way every time:</p>`
        },
        {
          type: 'steps',
          title: 'The five-step elimination method',
          items: [
            { title: 'Name the line and the coverage part', text: 'Is this homeowners Section I or II? PAP Part A, B, C, or D? PIP? Identifying the coverage that responds eliminates choices aimed at the wrong coverage instantly.' },
            { title: 'Identify the parties', text: 'Who is the insured? Who was injured or damaged? First-party coverages (PIP, Part D, Coverage C) pay the insured; third-party coverages (BI, PD, Coverage E) pay others. Wrong-party choices die here.' },
            { title: 'Check the numbers against the cheat sheet', text: 'If the scenario includes amounts, run the math: percentages of Coverage A, sub-limits, split limits, the coinsurance formula. A choice that ignores a sub-limit or deductible is bait.' },
            { title: 'Hunt for the trap pair', text: 'Ask which Lesson 10.2 pair this question is built on — pro-rata/short-rate, stacked/non-stacked, twisting/churning. The wrong sibling is almost always among the choices.' },
            { title: 'Prefer the precise answer; distrust absolutes', text: 'When two choices survive, the more specific, conditional one usually wins. Choices containing "always" or "never" are usually wrong — insurance runs on conditions and exceptions.' }
          ]
        },
        {
          type: 'callout', variant: 'tip', title: 'Numbers questions are free points',
          html: `<p>Every number drilled in Lesson 10.1 — 80%, 10/50/30, the sub-limits, 7/30/60, 10/20/10, 80/60, 14 days, 45/10, 24/48/60/3 — will be asked directly or buried in a scenario. Reread the cheat sheet tables the morning of your exam while your memory is fresh. Ten minutes of review routinely buys five or more correct answers.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Approximate content mix to expect',
          labels: ['Homeowners, dwelling & FL property', 'Auto & FL auto law', 'General concepts & contracts', 'FL regulation, license law & ethics', 'Other personal lines'],
          datasets: [{ label: 'Share of questions', data: [25, 25, 20, 20, 10] }],
          suffix: '%',
          note: 'This is the blueprint used for this site’s 100-question practice final and a reasonable approximation of the real exam’s emphasis. Treat the exact mix on your sitting as approximate.'
        },
        {
          type: 'table',
          caption: 'The 2-week study plan',
          headers: ['Day', 'Focus', 'Goal'],
          rows: [
            ['<strong>Day 1</strong>', 'Units 1–2: foundations & policy structure', 'Reread weak lessons; redo every checkpoint until clean'],
            ['<strong>Day 2</strong>', 'Unit 2 valuation math', 'Ten coinsurance computations from scratch — formula from memory'],
            ['<strong>Day 3</strong>', 'Units 3–4: DP & HO forms', 'Rebuild the forms comparison table (DP-1/2/3, HO-2/3/4/5/6/8) from memory'],
            ['<strong>Day 4</strong>', 'Unit 4: Section I sub-limits & Section II', 'Flashcards to 100%; explain E vs. F out loud'],
            ['<strong>Day 5</strong>', 'Unit 5: Florida property', 'Hurricane deductibles, NFIP 250/100, 7/30/60, valued policy law'],
            ['<strong>Day 6</strong>', 'Cumulative: Units 1–5', 'Take unit exams 1–5 back to back; log every miss in a notebook'],
            ['<strong>Day 7</strong>', 'Rest', 'Light flashcards only — recovery consolidates memory'],
            ['<strong>Day 8</strong>', 'Unit 6: the PAP', 'Parts A–F; five split-limit math drills'],
            ['<strong>Day 9</strong>', 'Unit 7: Florida auto law', 'PIP structure cold: 80/60/$5,000, 14 days, $2,500 EMC cap; 10/20/10 vs. FR-44'],
            ['<strong>Day 10</strong>', 'Unit 8: other personal lines', 'Umbrella flow-through example; floater vs. HO sub-limits'],
            ['<strong>Day 11</strong>', 'Unit 9: regulation & ethics', 'DFS vs. OIR; twisting/churning/sliding; license clocks 24/48/60/3'],
            ['<strong>Day 12</strong>', 'Full practice final', '100 questions, timed, exam conditions — no notes, no pauses'],
            ['<strong>Day 13</strong>', 'Miss review', 'Rework every missed question; reread Lessons 10.1 and 10.2'],
            ['<strong>Day 14</strong>', 'Taper', 'Numbers Cheat Sheet only, twice through; early night — no cramming']
          ]
        },
        {
          type: 'callout', variant: 'warning', title: 'Two test-day mistakes that cost real points',
          html: `<p><strong>Cramming until midnight</strong> trades long-term recall for short-term anxiety — the taper on Day 14 exists for a reason. And <strong>changing answers on a hunch</strong> statistically hurts more than it helps: switch only when you can state exactly what you misread the first time.</p>`
        },
        {
          type: 'text',
          html: `<h3>Using this site’s final exam</h3>
<p>The practice final assembles <strong>100 timed questions sampled from every unit exam plus a dedicated final-exam bank</strong>, mixed in roughly the proportions in the chart above. Take it at least twice: once on Day 12 under strict exam conditions, and once after your Day 13 miss-review to confirm the gaps closed. Read the explanation on every question you miss <em>and</em> every question you guessed — a lucky guess is an unlearned fact wearing a disguise.</p>
<p>When you can score comfortably above 80% on a fresh practice final, you are ready. Book the exam, sleep, eat, arrive early — and go collect your free points.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — test-day strategy',
          questions: [
            {
              q: 'With three minutes left, a candidate has four unanswered questions she finds confusing. She should:',
              choices: ['Leave them blank to avoid penalties', 'Answer all four — unanswered questions are simply scored wrong', 'Spend all three minutes perfecting one of them', 'Ask the proctor for guidance'],
              answer: 1,
              explain: 'There is no guessing penalty — a blank scores exactly like a wrong answer, while a guess has at least a 25% chance. Always answer everything.'
            },
            {
              q: 'On a multiple-choice licensing exam, answer choices containing words like "always" and "never":',
              choices: ['Are usually the correct, most decisive answers', 'Make a choice more legally precise', 'Often signal an incorrect choice, because insurance rules run on conditions and exceptions', 'Are prohibited by the exam vendor'],
              answer: 2,
              explain: 'Absolute language is a red flag. Insurance is built from conditions, exclusions, and exceptions, so categorical statements are usually wrong — though you should still read every choice.'
            },
            {
              q: 'The recommended FIRST step when facing a long scenario question is to:',
              choices: ['Identify the line of business and which coverage part responds', 'Pick the longest, most detailed answer', 'Compute every number that appears in the stem', 'Eliminate the first choice automatically'],
              answer: 0,
              explain: 'Naming the coverage that responds (HO Section II, PAP Part D, PIP, etc.) immediately eliminates choices aimed at the wrong coverage and organizes the rest of your analysis.'
            },
            {
              q: 'This site’s practice final consists of:',
              choices: ['25 untimed questions from Unit 10 only', '60 questions drawn solely from the final bank', '15 questions per unit taken separately', '100 timed questions sampled from the unit exams plus a dedicated final-exam bank'],
              answer: 3,
              explain: 'The final mixes all unit-exam questions with the dedicated 60-question bank into a 100-question timed exam matching the course blueprint — take it at least twice before the real thing.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Process & strategy anchors',
          cards: [
            { front: 'MyProfile', back: 'The DFS online portal: applications, fees, address changes (within 60 days), and appointment status.' },
            { front: '40-hour course', back: 'The DFS-approved pre-licensing course that anchors the standard 4-40 qualification route.' },
            { front: 'Who appoints a 4-40?', back: 'The supervising agent or agency — never an insurance company. The appointment activates the license.' },
            { front: 'License vs. appointment', back: 'DFS issues the license; the appointment activates it. Unappointed for 48 months = the license expires.' },
            { front: 'Appointment renewal', back: 'Every 24 months.' },
            { front: 'Guessing rule', back: 'No penalty for guessing — a blank is scored wrong, so answer every question.' },
            { front: 'Absolutes rule', back: 'Choices with "always" or "never" are usually wrong; prefer precise, conditional answers.' },
            { front: 'Day-before plan', back: 'Taper: Numbers Cheat Sheet twice through, then sleep. No cramming, no midnight review.' }
          ]
        }
      ],
      terms: [
        { term: 'MyProfile', def: 'The Florida DFS online portal where licensees apply for, manage, and update their licenses and appointments.' },
        { term: 'Pre-licensing course', def: 'The DFS-approved 40-hour customer representative course that anchors the standard 4-40 qualification route.' },
        { term: 'Fingerprinting', def: 'Electronic prints submitted for the state and federal background check required of every license applicant.' },
        { term: 'Bureau of Licensing', def: 'The DFS unit that reviews license applications.' },
        { term: 'Appointment', def: 'The filing that activates a license; for a 4-40 it is made by the supervising agent or agency and renews every 24 months.' },
        { term: 'License expiration (48 months)', def: 'A license that remains without any appointment for 48 months expires, requiring requalification.' },
        { term: 'Department of Financial Services (DFS)', def: 'Headed by the elected CFO; licenses and disciplines agents, customer representatives, and adjusters.' },
        { term: 'Office of Insurance Regulation (OIR)', def: 'Regulates insurance companies: certificates of authority, rates, forms, and solvency.' },
        { term: 'Passing standard', def: 'The licensing exam’s roughly 70% threshold — confirm exact question count and timing in your registration materials.' },
        { term: 'Two-pass method', def: 'Answer everything you know cold first, flag the rest, then return with banked time; never leave blanks.' }
      ]
    }
  ],

  /* ---------------- Unit 10 Exam (cumulative review) ---------------- */
  exam: {
    questions: [
      {
        q: 'A friend asks you to invest in her new restaurant, noting you could double your money or lose it all. The venture is uninsurable because it is:',
        choices: ['A pure risk', 'A morale hazard', 'A speculative risk', 'A catastrophic exposure'],
        answer: 2,
        explain: 'Any chance of gain makes a risk speculative, and insurance covers only pure risks — loss or no loss, never profit.'
      },
      {
        q: 'A home’s replacement cost is $400,000 but it is insured for only $240,000. A kitchen fire causes $40,000 of damage and the policy carries a $1,000 deductible. Applying the 80% insurance-to-value formula, the insurer pays:',
        choices: ['$40,000', '$30,000', '$29,000', '$24,000'],
        answer: 2,
        explain: 'Required amount = 80% × $400,000 = $320,000. Did ÷ should = 240 ÷ 320 = 0.75. 0.75 × $40,000 = $30,000, minus the $1,000 deductible = $29,000.'
      },
      {
        q: 'A burglar steals $2,200 in cash from a dresser drawer. The unendorsed HO-3 pays:',
        choices: ['$200', '$1,500', '$2,200', '$2,500'],
        answer: 0,
        explain: 'Money is capped at $200 — and unlike the jewelry/firearms/silverware limits, the money limit applies to any covered peril, not just theft.'
      },
      {
        q: 'After a covered fire makes their home uninhabitable, a family incurs hotel bills and restaurant costs above their normal living expenses. These are paid under:',
        choices: ['Coverage B', 'Coverage C', 'Coverage D', 'Coverage E'],
        answer: 2,
        explain: 'Coverage D — Loss of Use — pays additional living expense (and fair rental value), defaulting to 30% of Coverage A on the HO-3.'
      },
      {
        q: 'In Florida, the hurricane deductible applies:',
        choices: ['Once per hurricane event', 'Once per calendar year', 'Once per policy term', 'Separately to each named storm'],
        answer: 1,
        explain: 'Florida uses a calendar-year (single-season) hurricane deductible. A second hurricane the same year is subject to the remaining hurricane deductible or the all-other-perils deductible, whichever is greater.'
      },
      {
        q: 'Which statement about NFIP flood coverage is correct?',
        choices: ['There is never a waiting period', 'Coverage begins after a 7-day wait', 'Coverage begins after a 60-day wait', 'A 30-day waiting period applies unless the purchase is connected to a loan closing'],
        answer: 3,
        explain: 'The NFIP imposes a 30-day waiting period; the major exception is coverage required in connection with making or modifying a loan.'
      },
      {
        q: 'Under Florida’s reformed property claim rules, an insurer must acknowledge a claim communication within:',
        choices: ['7 days', '14 days', '30 days', '60 days'],
        answer: 0,
        explain: 'The timeline is acknowledge within 7 days, begin investigation/inspection within 30, and pay or deny within 60 (reduced from 90 by the 2022–2023 reforms).'
      },
      {
        q: 'A PIP claimant with a diagnosed emergency medical condition incurs $8,000 in covered medical bills. PIP reimburses:',
        choices: ['$8,000', '$6,400', '$4,800', '$2,500'],
        answer: 1,
        explain: 'PIP pays 80% of reasonable medical expenses: 0.80 × $8,000 = $6,400, within the $10,000 limit. Without the EMC diagnosis, benefits would cap at $2,500.'
      },
      {
        q: 'To receive any PIP benefits at all, an injured person must obtain initial medical treatment within:',
        choices: ['30 days of the accident', '21 days of the accident', '14 days of the accident', '7 days of the accident'],
        answer: 2,
        explain: 'The 14-day initial treatment rule is absolute — no treatment within 14 days means no PIP benefits. Do not confuse it with the PAP’s 14-day newly acquired auto notice.'
      },
      {
        q: 'Under Florida’s Financial Responsibility Law limits of 10/20/10, the maximum payable for bodily injury to ONE person is:',
        choices: ['$10,000', '$20,000', '$30,000', '$40,000'],
        answer: 0,
        explain: '10/20/10 reads: $10,000 BI per person, $20,000 BI per accident, $10,000 property damage. The first number answers per-person questions.'
      },
      {
        q: 'A Florida applicant tells her agent over the phone that she does not want UM coverage. The insurer issues the policy without UM and without any signed form. After a crash with an uninsured driver:',
        choices: ['She has no UM because she declined it', 'UM equal to her BI limits is deemed part of the policy, because rejection must be in writing', 'UM applies but only at 50% of her BI limits', 'She may only claim against PIP'],
        answer: 1,
        explain: 'UM at limits equal to BI must be provided unless the insured signs a written rejection. An oral rejection is ineffective, so UM is read into the policy.'
      },
      {
        q: 'A Florida auto insurer cancels a policy because the premium was never paid. The minimum advance written notice is:',
        choices: ['45 days', '30 days', '20 days', '10 days'],
        answer: 3,
        explain: 'Nonpayment cancellations require only 10 days’ notice. The 45-day notice applies to other cancellations and to nonrenewal.'
      },
      {
        q: 'An agent systematically replaces his existing clients’ policies with new policies from the SAME insurer, primarily to generate first-year commissions, with no benefit to the clients. This is:',
        choices: ['Twisting', 'Sliding', 'Churning', 'Rebating'],
        answer: 2,
        explain: 'Replacing your own company’s business for commissions is churning. Twisting targets another insurer’s policy through misrepresentation; sliding adds unrequested products.'
      },
      {
        q: 'A new property insurer wants legal authority to transact insurance in Florida. The certificate of authority is issued by:',
        choices: ['The Department of Financial Services', 'FIGA', 'Citizens Property Insurance Corporation', 'The Office of Insurance Regulation'],
        answer: 3,
        explain: 'OIR regulates companies — certificates of authority, rates, forms, and solvency. DFS (under the elected CFO) regulates licensees such as agents and customer representatives.'
      },
      {
        q: 'From Florida’s viewpoint, an insurer chartered in Georgia and writing Florida homeowners business is a(n):',
        choices: ['Domestic insurer', 'Foreign insurer', 'Alien insurer', 'Surplus lines insurer'],
        answer: 1,
        explain: 'Foreign = chartered in another U.S. state. Alien = chartered in another country; domestic = chartered in Florida. Authorization status is a separate question from domicile.'
      }
    ]
  }
});
