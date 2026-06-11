/* Unit 7 — Florida Auto Law */
window.PL.units.push({
  id: 'u7',
  number: 7,
  title: 'Florida Auto Law',
  icon: 'scale',
  description: 'Florida’s two-track auto system: the 10/10 no-fault registration requirements, the 10/20/10 Financial Responsibility Law, the PIP deep dive with every tested number, UM rules, the dangerous instrumentality doctrine, and the day-counts that govern cancellation.',
  lessons: [

    /* ---------------- Lesson 7.1 ---------------- */
    {
      id: 'u7l1',
      title: 'Registration vs. Responsibility: Florida’s Two Auto Laws',
      minutes: 15,
      objectives: [
        'State the coverages required to register a vehicle in Florida — PIP $10,000 and PDL $10,000',
        'Explain when the Financial Responsibility Law’s 10/20/10 limits are triggered',
        'Distinguish the SR-22 from the FR-44 and state the FR-44 limits and duration',
        'Describe the penalties and reinstatement fees for driving without required insurance'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Two laws, two different questions</h3>
<p>Florida regulates auto insurance with <strong>two separate statutes that answer two separate questions</strong>, and almost every exam trap in this unit comes from mixing them up.</p>
<p><strong>Question 1 — what must I carry to put a tag on my car?</strong> The <strong>Motor Vehicle No-Fault Law</strong> answers: to register a four-wheeled motor vehicle in Florida you must maintain <strong>personal injury protection (PIP) of $10,000</strong> and <strong>property damage liability (PDL) of $10,000</strong> — the famous <strong>10/10</strong>. Notice what is missing: <strong>Florida does NOT require ordinary drivers to carry bodily injury (BI) liability coverage at all.</strong> A driver can be perfectly legal at registration with no BI whatsoever — one of only a couple of states where that is true, and a fact the exam tests bluntly.</p>
<p><strong>Question 2 — what happens after I prove I am a risk?</strong> The <strong>Financial Responsibility Law</strong> answers: once a driver is involved in a <strong>crash causing injury</strong>, is convicted of <strong>DUI</strong>, racks up a <strong>license suspension for points</strong>, or commits other <strong>serious violations</strong>, that driver must demonstrate the ability to respond in damages — by maintaining BI liability of <strong>$10,000 per person / $20,000 per accident plus $10,000 PD: the 10/20/10</strong> — or face suspension of license and registration. Financial responsibility is the after-the-fact law; no-fault is the up-front law.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the two requirement sets',
          html: `<p><strong>To REGISTER a vehicle:</strong> PIP $10,000 + PDL $10,000 (10/10). No BI required.</p>
<p><strong>Under the FINANCIAL RESPONSIBILITY LAW</strong> (after a crash with injuries, DUI, or serious violations): BI <strong>$10,000 per person / $20,000 per accident</strong> + PD <strong>$10,000</strong> — <strong>10/20/10</strong>. The obligation can be met with an insurance policy, a surety bond, a deposit, or self-insurance, but for real customers it means buying BI coverage.</p>`
        },
        {
          type: 'table',
          caption: 'Who must prove what in Florida',
          headers: ['Situation', 'Required coverage', 'Proof filing'],
          rows: [
            ['Registering any four-wheeled auto', '<strong>PIP $10,000 + PDL $10,000</strong>', 'Insurance reported electronically by the insurer to the DHSMV'],
            ['After a crash with injuries, points suspension, or other serious violations', '<strong>BI 10/20 + PD 10 (10/20/10)</strong>', '<strong>SR-22</strong> certificate filed by the insurer, typically maintained for 3 years'],
            ['After a DUI conviction (on or after Oct. 1, 2007)', '<strong>BI 100/300 + PD 50 (100/300/50)</strong>', '<strong>FR-44</strong> certificate, maintained for <strong>3 years</strong>']
          ]
        },
        {
          type: 'text',
          html: `<h3>SR-22 and FR-44 — the proof certificates</h3>
<p>The state does not take a driver’s word that coverage exists. It demands a certificate <strong>filed by the insurer</strong> promising to notify the state if the policy lapses:</p>
<ul>
<li>The <strong>SR-22</strong> is the standard financial responsibility filing, proving the driver carries at least <strong>10/20/10</strong>. It follows judgments, point suspensions, crashes by the uninsured, and similar triggers.</li>
<li>The <strong>FR-44</strong> is Florida’s heavyweight filing for drivers convicted of <strong>DUI</strong>. It requires liability limits of <strong>100/300/50 — ten times the ordinary BI minimums</strong> — and must generally be maintained for <strong>3 years</strong> from reinstatement. Let the policy lapse and the insurer reports it; the license and tag go back into suspension.</li>
</ul>
<p>A driver who owns no vehicle but needs a filing buys a <strong>named non-owner policy</strong> (Unit 6) and files the certificate on it.</p>
<h3>The price of driving bare</h3>
<p>Drive without the required coverage and the DHSMV suspends the <strong>driver license, registration, and plates</strong> — a suspension that can run <strong>up to 3 years</strong>. Getting back on the road requires proof of coverage plus a reinstatement fee that escalates with each offense: <strong>$150 for the first, $250 for the second, and $500 for the third and subsequent offenses within 3 years</strong>. There is no jail for simply driving uninsured, but the administrative bite — plus being personally on the hook for any crash — is the talking point every 4-40 should have ready when a customer asks why they cannot just drop coverage for a month.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'Exam trap — "Florida minimum BI"',
          html: `<p>If a question asks what coverage is required to <strong>register</strong> a car in Florida, the answer is <strong>PIP $10,000 and PDL $10,000 — no BI</strong>. If it asks what the <strong>Financial Responsibility Law</strong> requires after a qualifying event, the answer is <strong>10/20/10</strong>. If the event was a <strong>DUI</strong>, the answer jumps to <strong>100/300/50 on an FR-44 for 3 years</strong>. Read which law the question is invoking before touching an answer.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'How the required dollars stack up: registration vs. FR vs. FR-44',
          labels: ['PIP (registration)', 'PDL (registration)', 'BI per person (FR 10/20/10)', 'BI per accident (FR 10/20/10)', 'BI per person (FR-44)', 'BI per accident (FR-44)'],
          datasets: [{ label: 'Required limit (thousands of dollars)', data: [10, 10, 10, 20, 100, 300] }],
          note: 'Statutory minimums shown in thousands. The FR-44 after a DUI demands ten times the ordinary financial responsibility BI limits — 100/300 — plus $50,000 PD, maintained for 3 years.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the two laws',
          questions: [
            {
              q: 'To lawfully register a private passenger auto in Florida, an owner must carry:',
              choices: [
                'BI 10/20 and PD 10',
                'PIP $10,000 and property damage liability $10,000',
                'PIP $10,000 and BI $25,000',
                'Full coverage including collision'
              ],
              answer: 1,
              explain: 'Registration requires only the no-fault package: PIP $10,000 plus PDL $10,000. Bodily injury liability is NOT required of ordinary drivers — that is the single most-tested fact in Florida auto law.'
            },
            {
              q: 'Florida’s Financial Responsibility Law requires 10/20/10 limits after all of the following EXCEPT:',
              choices: [
                'A crash involving bodily injury',
                'A license suspension for excessive points',
                'A DUI conviction',
                'Renewing a registration with a clean record'
              ],
              answer: 3,
              explain: 'Financial responsibility is triggered by bad events — injury crashes, point suspensions, serious violations. A clean renewal needs only PIP and PDL. (And note: a DUI actually triggers the higher FR-44 limits, not just 10/20/10.)'
            },
            {
              q: 'After a DUI conviction, a Florida driver must file an FR-44 certifying liability limits of:',
              choices: ['10/20/10', '50/100/25', '100/300/50', '25/50/10'],
              answer: 2,
              explain: 'The FR-44 requires 100/300/50 — $100,000 per person, $300,000 per accident BI, and $50,000 PD — generally maintained for 3 years. The SR-22 at 10/20/10 is for non-DUI triggers.'
            },
            {
              q: 'A third offense of driving without required insurance within 3 years carries a reinstatement fee of:',
              choices: ['$150', '$250', '$350', '$500'],
              answer: 3,
              explain: 'Fees escalate: $150 first offense, $250 second, $500 third and subsequent within 3 years — on top of the suspension of license, registration, and plates.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 7.1 key terms',
          cards: [
            { front: 'Florida registration requirement', back: 'PIP $10,000 + property damage liability $10,000 (10/10). No BI required.' },
            { front: 'Financial Responsibility Law limits', back: 'BI $10,000 / $20,000 + PD $10,000 — 10/20/10 — after injury crashes, DUI, or serious violations.' },
            { front: 'SR-22', back: 'Insurer-filed certificate proving 10/20/10 financial responsibility coverage.' },
            { front: 'FR-44', back: 'Post-DUI filing: 100/300/50 limits, maintained for 3 years.' },
            { front: 'Is BI required to register in FL?', back: 'No. Florida generally does not mandate bodily injury liability for ordinary drivers.' },
            { front: 'Penalty for no insurance', back: 'Suspension of license, registration, and plates for up to 3 years until proof and fees are provided.' },
            { front: 'Reinstatement fees', back: '$150 first offense, $250 second, $500 third within 3 years.' },
            { front: 'Filing without owning a car', back: 'A named non-owner policy carries the SR-22 or FR-44.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — filings & penalties',
          questions: [
            {
              q: 'Who files the SR-22 or FR-44 certificate with the state?',
              choices: [
                'The driver, at any tax collector office',
                'The insurance company, which must also report any lapse',
                'The driver’s attorney',
                'The body shop after repairs'
              ],
              answer: 1,
              explain: 'The insurer files the certificate and promises to notify the DHSMV if the policy cancels or lapses — which immediately re-suspends the driver. That ongoing reporting is the whole point of the filing.'
            },
            {
              q: 'How long must a Florida driver generally maintain the FR-44 filing after a DUI?',
              choices: ['1 year', '2 years', '3 years', '5 years'],
              answer: 2,
              explain: 'Three years. Dropping the 100/300/50 coverage during that window triggers a lapse report and a new suspension.'
            },
            {
              q: 'A customer with no qualifying violations asks whether she must add BI coverage to keep her Florida registration legal. The correct answer is:',
              choices: [
                'No — registration requires only PIP and PDL, though BI is strongly recommended',
                'Yes — Florida requires 10/20 BI of every registrant',
                'Yes — but only 5/10 BI',
                'No — Florida requires no auto insurance at all'
              ],
              answer: 0,
              explain: 'Only PIP $10,000 and PDL $10,000 are required to register. BI becomes mandatory only when the Financial Responsibility Law is triggered — but going without it leaves her personal assets exposed, which is why agents recommend it anyway.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Motor Vehicle No-Fault Law', def: 'The Florida statute requiring registrants of four-wheeled vehicles to maintain PIP of $10,000 and property damage liability of $10,000.' },
        { term: 'Personal injury protection (PIP)', def: 'Florida’s no-fault first-party coverage paying the insured’s own injury benefits regardless of fault; $10,000 required to register.' },
        { term: 'Property damage liability (PDL)', def: 'Coverage for damage the insured causes to others’ property; $10,000 required to register a vehicle in Florida.' },
        { term: 'Financial Responsibility Law', def: 'The Florida law requiring proof of ability to pay damages — 10/20/10 — after injury crashes, DUI, suspensions, or serious violations.' },
        { term: '10/20/10', def: 'BI $10,000 per person, $20,000 per accident, and PD $10,000 — the financial responsibility limits.' },
        { term: 'SR-22', def: 'A certificate of financial responsibility filed by an insurer proving required coverage is in force.' },
        { term: 'FR-44', def: 'The certificate required after a Florida DUI conviction, proving 100/300/50 limits, maintained for 3 years.' },
        { term: '100/300/50', def: 'BI $100,000 per person / $300,000 per accident and PD $50,000 — the FR-44 limits after DUI.' },
        { term: 'DHSMV', def: 'The Florida Department of Highway Safety and Motor Vehicles — administers licenses, registrations, suspensions, and insurance reporting.' },
        { term: 'Reinstatement fee', def: 'The fee to restore driving privileges after an insurance suspension: $150, $250, then $500 for repeat offenses within 3 years.' },
        { term: 'Self-insurance (auto)', def: 'An alternative way to satisfy financial responsibility by proving sufficient net unencumbered assets instead of buying a policy.' },
        { term: 'Named non-owner policy (FR use)', def: 'The policy a carless driver buys to carry an SR-22 or FR-44 filing.' }
      ]
    },

    /* ---------------- Lesson 7.2 ---------------- */
    {
      id: 'u7l2',
      title: 'No-Fault Deep Dive: PIP',
      minutes: 17,
      objectives: [
        'State the PIP benefit percentages and limits: 80% medical, 60% lost income, $5,000 death benefit, $10,000 total',
        'Apply the 14-day initial treatment rule and the $2,500 cap without an emergency medical condition',
        'Identify who a Florida PIP policy covers and the maximum allowable deductible',
        'Explain the tort exemption and the permanent-injury threshold for pain-and-suffering lawsuits'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The no-fault bargain</h3>
<p>Florida’s no-fault system rests on a trade. <strong>Your own insurer pays your injury benefits promptly, no matter who caused the crash</strong> — that is PIP. In exchange, you give up the right to sue the other driver for <strong>pain and suffering</strong> unless your injury crosses a serious-injury threshold. Fast, certain, partial payment instead of slow, uncertain, full litigation: that is the bargain, and every PIP rule below is one of its moving parts.</p>
<h3>What PIP pays — the four tested numbers</h3>
<ul>
<li><strong>80% of reasonable and necessary medical expenses</strong> — physician, hospital, ambulance, rehabilitation, and related care.</li>
<li><strong>60% of lost gross income</strong> and the replacement cost of services the injured person can no longer perform (housekeeping, child care).</li>
<li><strong>A $5,000 death benefit</strong>, payable per deceased person, on top of the medical and disability benefits paid before death.</li>
<li>All of it inside a <strong>total PIP limit of $10,000</strong> per person, per crash.</li>
</ul>
<p>Run the math the way the exam will: a covered person with $10,000 in medical bills receives 80% — $8,000 — leaving $2,000 of room under the limit for lost wages at 60 cents on the dollar. The percentages and the $10,000 ceiling work together, and questions love to make you apply both.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the PIP benefit package',
          html: `<p><strong>80% of medical expenses + 60% of lost income + $5,000 death benefit, all capped at $10,000.</strong> Benefits are payable regardless of fault. Chant it: <strong>80 — 60 — 5 — 10.</strong></p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'PIP on a real claim: billed vs. what PIP pays (illustrative)',
          labels: ['Hospital bill $9,000', 'Lost wages $3,000', 'Death benefit (if fatal)'],
          datasets: [
            { label: 'Amount claimed', data: [9000, 3000, 5000] },
            { label: 'PIP pays', data: [7200, 1800, 5000] }
          ],
          note: 'Illustrative: PIP pays 80% of the $9,000 medical bill ($7,200) and 60% of $3,000 in lost income ($1,800) — $9,000 total, inside the $10,000 limit. The $5,000 death benefit is paid in full in fatal cases.'
        },
        {
          type: 'text',
          html: `<h3>The 14-day rule and the $2,500 EMC cap</h3>
<p>The 2012 PIP reforms added two gatekeepers that now dominate exam questions:</p>
<ul>
<li><strong>The 14-day initial treatment rule.</strong> The injured person must receive <strong>initial services within 14 days of the crash</strong> — from a hospital, ambulance, physician, dentist, chiropractor, or similar qualified provider. Wait until day 15 to first seek care and <strong>PIP owes nothing at all</strong>.</li>
<li><strong>The emergency medical condition (EMC) determination.</strong> The <strong>full $10,000</strong> is available only when an authorized medical provider determines the patient had an <strong>emergency medical condition</strong> — one with acute symptoms severe enough that lack of immediate attention could seriously jeopardize health. <strong>Without an EMC determination, PIP medical benefits are capped at $2,500.</strong> Massage and acupuncture are not reimbursable at all.</li>
</ul>
<h3>Who a Florida PIP policy covers</h3>
<p>PIP follows people, with the vehicle as backdrop. A policy covers: <strong>(1) the named insured</strong> while occupying any motor vehicle or when struck as a pedestrian or bicyclist by a motor vehicle; <strong>(2) resident relatives</strong> of the named insured’s household on the same terms (if they do not own their own car requiring separate PIP); <strong>(3) passengers</strong> in the insured vehicle who do not own a vehicle with PIP of their own (those who do collect from their own policies first); and <strong>(4) pedestrians and bicyclists</strong> who are Florida residents struck by the insured vehicle and not covered by their own PIP.</p>
<h3>The deductible</h3>
<p>An insurer must offer PIP deductibles of up to <strong>$2,000</strong>, applicable to the named insured and dependent resident relatives. A deductible cuts premium but comes straight out of the first benefits paid — agents must explain that choosing $2,000 means the customer self-funds the first layer of an already thin $10,000 coverage.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'Two traps inside one claim',
          html: `<p>Picture the customer call: crash on June 1, first chiropractor visit on June 18. <strong>Claim denied — treatment began after the 14-day window.</strong> Now rewind: treatment on June 3, but no provider documents an emergency medical condition. <strong>Benefits stop at $2,500</strong> even though the bills hit $9,000. The 14-day rule decides IF PIP pays; the EMC determination decides HOW MUCH room the medical benefit has — $2,500 or the full $10,000.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — PIP benefits',
          questions: [
            {
              q: 'Florida PIP pays what percentage of reasonable medical expenses and lost gross income, respectively?',
              choices: ['100% and 80%', '80% and 60%', '60% and 80%', '80% and 80%'],
              answer: 1,
              explain: '80% of medical expenses and 60% of lost income, with a $5,000 death benefit, all inside the $10,000 limit. Flipping the percentages is the favorite distractor.'
            },
            {
              q: 'An insured suffers $4,000 in covered medical bills with a valid EMC determination and no deductible. PIP pays:',
              choices: ['$4,000', '$2,500', '$3,200', '$2,400'],
              answer: 2,
              explain: '80% of $4,000 = $3,200. The $2,500 cap does not apply because an emergency medical condition was determined; the $10,000 limit is not yet reached.'
            },
            {
              q: 'A crash victim first seeks medical care 20 days after the accident. Her PIP claim is:',
              choices: [
                'Paid at 80% as usual',
                'Paid, but capped at $2,500',
                'Paid at 60%',
                'Not payable — initial treatment must occur within 14 days of the crash'
              ],
              answer: 3,
              explain: 'The 14-day initial treatment rule is absolute: no qualifying care within 14 days means no PIP medical benefits at all. The $2,500 cap is a different rule, for claims WITHOUT an EMC determination.'
            },
            {
              q: 'Without a determination that the patient had an emergency medical condition, PIP medical benefits are limited to:',
              choices: ['$10,000', '$5,000', '$2,500', '$1,000'],
              answer: 2,
              explain: 'The full $10,000 requires an EMC determination by an authorized provider. Without one, medical benefits stop at $2,500.'
            },
            {
              q: 'The maximum PIP deductible a Florida insurer may offer is:',
              choices: ['$500', '$1,000', '$1,500', '$2,000'],
              answer: 3,
              explain: 'Deductibles up to $2,000 may be elected, applying to the named insured and dependent resident relatives. It reduces premium but consumes the first layer of a $10,000 benefit.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>The tort exemption — when can you still sue?</h3>
<p>Here is the other half of the no-fault bargain. Because PIP pays your own economic losses, Florida law grants drivers a <strong>limited tort exemption</strong>: an injured person <strong>cannot sue the at-fault driver for pain and suffering (non-economic damages) unless the injury crosses the statutory threshold</strong>. The threshold has four doors, any one of which opens the courthouse:</p>
<ol>
<li><strong>Death</strong>;</li>
<li><strong>Significant and permanent loss of an important bodily function</strong>;</li>
<li><strong>Permanent injury</strong> within a reasonable degree of medical probability (other than scarring or disfigurement);</li>
<li><strong>Significant and permanent scarring or disfigurement</strong>.</li>
</ol>
<p>Two clarifications the exam rewards: the exemption blocks only <strong>non-economic</strong> damages — economic losses beyond PIP (the unpaid 20% of medicals, wages over the limit, all damages above $10,000) can still be pursued against the at-fault driver. And the exemption protects only those who complied with the no-fault law; an owner who failed to carry required PIP loses the shield and can be sued like any tortfeasor.</p>`
        },
        {
          type: 'compare',
          title: 'What PIP handles vs. what still goes to court',
          left: {
            title: 'PIP (no lawsuit needed)',
            items: [
              '<strong>80%</strong> of medical bills, promptly, regardless of fault',
              '<strong>60%</strong> of lost gross income and replacement services',
              '<strong>$5,000</strong> death benefit',
              'All within the <strong>$10,000</strong> limit'
            ]
          },
          right: {
            title: 'Lawsuit against the at-fault driver',
            items: [
              'Economic losses PIP did not pay (the other 20%, excess wages, amounts over $10,000)',
              '<strong>Pain and suffering — ONLY past the threshold:</strong>',
              'death; significant and permanent loss of an important bodily function;',
              'permanent injury; significant and permanent scarring or disfigurement'
            ]
          }
        },
        {
          type: 'flashcards',
          title: 'Lesson 7.2 key terms',
          cards: [
            { front: 'PIP benefit package', back: '80% medical, 60% lost income, $5,000 death benefit, $10,000 total limit.' },
            { front: '14-day rule', back: 'Initial medical treatment must occur within 14 days of the crash or PIP pays nothing.' },
            { front: 'Emergency medical condition (EMC)', back: 'Required determination to unlock the full $10,000; without it, medical benefits cap at $2,500.' },
            { front: 'Maximum PIP deductible', back: '$2,000, applicable to the named insured and dependent resident relatives.' },
            { front: 'Who PIP covers', back: 'Named insured, resident relatives, passengers without their own PIP, and Florida-resident pedestrians or bicyclists struck by the vehicle.' },
            { front: 'PIP death benefit', back: '$5,000 per deceased person, in addition to benefits paid before death.' },
            { front: 'Tort threshold (4 doors)', back: 'Death; significant and permanent loss of an important bodily function; permanent injury; significant and permanent scarring or disfigurement.' },
            { front: 'What the tort exemption blocks', back: 'Only pain-and-suffering (non-economic) suits below the threshold — excess economic damages may still be pursued.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the tort exemption',
          questions: [
            {
              q: 'A crash victim fully recovers in six weeks with no permanent effects. Under Florida’s no-fault law she may:',
              choices: [
                'Sue the at-fault driver for pain and suffering',
                'Collect PIP benefits and pursue unpaid economic damages, but not pain and suffering',
                'Collect nothing at all',
                'Sue only if her medical bills exceed $2,500'
              ],
              answer: 1,
              explain: 'With no permanent injury, the tort exemption bars non-economic (pain and suffering) claims. PIP pays its 80/60 benefits, and economic losses PIP leaves unpaid can still be claimed against the tortfeasor.'
            },
            {
              q: 'Which injury does NOT open the threshold for a pain-and-suffering lawsuit?',
              choices: [
                'A fully healed broken wrist with no lasting impairment',
                'Significant and permanent facial scarring',
                'Permanent loss of an important bodily function',
                'Death'
              ],
              answer: 0,
              explain: 'The four threshold doors are death, significant and permanent loss of an important bodily function, permanent injury, and significant and permanent scarring or disfigurement. A complete recovery opens none of them.'
            },
            {
              q: 'A passenger injured in the insured’s car owns her own vehicle with PIP coverage. Whose PIP pays her benefits?',
              choices: [
                'The vehicle owner’s policy, always',
                'Both policies split 50/50',
                'Her own PIP policy — passengers look to their own coverage first',
                'Neither, because passengers are not covered'
              ],
              answer: 2,
              explain: 'PIP follows the person: anyone who owns a vehicle with required PIP collects from their own policy. The host vehicle’s PIP covers passengers who have no PIP of their own.'
            },
            {
              q: 'A pedestrian who is a Florida resident is struck by an insured vehicle. She owns no car. Her injury benefits come from:',
              choices: [
                'The striking vehicle’s PIP coverage',
                'The state’s pedestrian fund',
                'Medicare only',
                'No source — pedestrians are excluded from no-fault'
              ],
              answer: 0,
              explain: 'Florida-resident pedestrians and bicyclists without their own PIP collect from the PIP of the vehicle that struck them. PIP is personal INJURY protection — it never pays property damage.'
            }
          ]
        }
      ],
      terms: [
        { term: 'No-fault insurance', def: 'A system in which each driver’s own insurer pays injury benefits regardless of fault, in exchange for limits on lawsuits.' },
        { term: 'PIP medical benefit', def: '80% of reasonable and necessary medical expenses, within the $10,000 limit.' },
        { term: 'PIP disability benefit', def: '60% of lost gross income plus replacement services for tasks the injured person can no longer perform.' },
        { term: 'PIP death benefit', def: '$5,000 per deceased person, paid in addition to other benefits already paid.' },
        { term: '14-day initial treatment rule', def: 'PIP pays nothing unless initial medical services are received within 14 days of the accident.' },
        { term: 'Emergency medical condition (EMC)', def: 'An acute condition requiring immediate care; the determination that unlocks the full $10,000 of PIP medical benefits.' },
        { term: '$2,500 non-EMC cap', def: 'The limit on PIP medical benefits when no emergency medical condition is determined.' },
        { term: 'PIP deductible', def: 'An elective deductible of up to $2,000 applying to the named insured and dependent resident relatives.' },
        { term: 'Tort exemption', def: 'The no-fault shield preventing pain-and-suffering lawsuits unless the injury crosses the permanent-injury threshold.' },
        { term: 'Permanent injury threshold', def: 'Death, significant and permanent loss of an important bodily function, permanent injury, or significant and permanent scarring or disfigurement.' },
        { term: 'Non-economic damages', def: 'Pain, suffering, mental anguish, and loss of enjoyment of life — recoverable only past the threshold.' },
        { term: 'Replacement services', def: 'Household and care tasks the injured person can no longer perform, reimbursed under the 60% disability benefit.' }
      ]
    },

    /* ---------------- Lesson 7.3 ---------------- */
    {
      id: 'u7l3',
      title: 'UM in Florida & Liability Lawsuits',
      minutes: 15,
      objectives: [
        'Explain Florida’s UM offer requirement — limits equal to BI unless rejected in writing',
        'Compare stacked and non-stacked UM and compute a stacked limit',
        'Describe the dangerous instrumentality doctrine and who it makes liable',
        'Apply Florida’s modified comparative negligence rule with the 51% bar'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>UM: mandatory offer, optional purchase</h3>
<p>Florida does not force drivers to buy uninsured motorist coverage — but it forces insurers to offer it, loudly. Whenever a policy includes <strong>bodily injury liability coverage</strong>, the insurer must provide <strong>UM with limits equal to the BI limits</strong> unless the named insured <strong>rejects UM entirely, or selects lower limits, in writing on the state-approved form</strong>. The signed rejection (or election of lower limits) is binding on everyone insured under the policy and carries forward on renewals. No signed form? Then by law the policy is treated as carrying <strong>UM equal to the BI limits</strong> — a drafting failure that becomes the insurer’s expensive problem.</p>
<p>This matters because of the arithmetic from Lesson 7.1: with no BI required at registration, roughly one in five Florida drivers carries nothing for the people they injure. <strong>UM is how careful drivers insure against everyone else’s empty policies.</strong></p>
<h3>Stacked vs. non-stacked</h3>
<p>Florida lets the insured choose the shape of UM:</p>
<ul>
<li><strong>Stacked UM</strong> — the default concept: limits <strong>multiply across the vehicles on the policy</strong> (and can combine across separate household policies). Three cars at $50,000 each = <strong>$150,000</strong> available to an injured insured. Stacked coverage is broader and follows the insured more generously — and costs more.</li>
<li><strong>Non-stacked UM</strong> — one per-vehicle limit, period, in exchange for a meaningfully lower rate. Florida law requires the insured to sign a <strong>written election</strong> acknowledging the limitation before non-stacked coverage applies.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the UM offer rules',
          html: `<p>UM must be provided at <strong>limits equal to BI</strong> unless the named insured signs a <strong>written rejection or election of lower limits</strong> on the approved form. The election binds all insureds and renewals. <strong>Non-stacked</strong> coverage likewise requires a signed acknowledgment in exchange for the reduced premium. UM limits may never exceed the BI limits on the policy.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'Stacked vs. non-stacked: UM available to one injured insured',
          labels: ['1 vehicle at $100k', '2 vehicles at $100k', '3 vehicles at $100k'],
          datasets: [
            { label: 'Stacked', data: [100000, 200000, 300000] },
            { label: 'Non-stacked', data: [100000, 100000, 100000] }
          ],
          note: 'Stacking multiplies the per-vehicle UM limit by the number of insured vehicles; non-stacked coverage holds at a single limit no matter how many cars are on the policy. Premium tracks the protection.'
        },
        {
          type: 'text',
          html: `<h3>The dangerous instrumentality doctrine</h3>
<p>Florida common law treats an automobile as a <strong>dangerous instrumentality</strong> — a machine capable of grave harm. The consequence: <strong>an owner who entrusts a vehicle to another driver is vicariously liable for that driver’s negligent operation</strong>, even if the owner did nothing careless. Lend your car to a friend with a flawless record; if the friend injures someone, <strong>the owner is on the hook along with the driver</strong>. Statutes cap an innocent owner’s vicarious exposure ($100,000 per person / $300,000 per incident for injury, plus up to $50,000 more for economic damages when the driver is uninsured or underinsured — caps that do not protect negligent entrustment), but the doctrine is why Florida agents preach two things: be careful whose hands the keys land in, and carry real BI limits if anyone else ever drives your car.</p>
<h3>Comparative negligence — the 2023 sea change</h3>
<p>When both drivers share blame, Florida apportions damages by percentage of fault. For decades Florida used <strong>pure</strong> comparative negligence — a plaintiff 90% at fault could still collect 10%. <strong>House Bill 837 (March 2023) switched Florida to MODIFIED comparative negligence with a 51% bar:</strong> a plaintiff <strong>more than 50% at fault recovers NOTHING</strong> in most negligence cases (medical negligence claims keep the old rule). At 50% fault or less, recovery is simply reduced by the plaintiff’s share.</p>
<h3>Bad faith and judgments</h3>
<p>Two more pieces complete the lawsuit picture. <strong>Bad faith:</strong> an insurer that fails to settle a claim fairly and honestly when it could and should have, exposing its insured to an excess judgment, can be liable beyond its policy limits — the insured (or a claimant) generally must first file a <strong>civil remedy notice</strong>, giving the insurer <strong>60 days to cure</strong>. <strong>Judgments:</strong> an unsatisfied auto-accident judgment triggers the Financial Responsibility Law — the debtor’s license and registration are suspended until the judgment is satisfied and proof of future responsibility (SR-22) is filed.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example — the 51% bar',
          html: `<p>A jury finds total damages of <strong>$100,000</strong>. If the plaintiff is <strong>30% at fault</strong>, she recovers <strong>$70,000</strong>. At <strong>50% fault</strong>, she still recovers <strong>$50,000</strong>. At <strong>51% fault, she recovers $0</strong> — the bar slams shut. Under the pre-2023 pure rule she would have collected $49,000 at 51% fault; that result is now history for crashes governed by the new law.</p>`
        },
        {
          type: 'table',
          caption: 'Florida negligence rules at a glance',
          headers: ['Doctrine', 'Rule', 'Why it matters'],
          rows: [
            ['<strong>Dangerous instrumentality</strong>', 'The vehicle owner is vicariously liable for any permissive driver’s negligence (statutory caps protect only innocent owners)', 'Lending the car means lending your balance sheet'],
            ['<strong>Modified comparative negligence (since March 2023)</strong>', 'Recovery reduced by the plaintiff’s fault share; barred entirely if the plaintiff is more than 50% at fault', 'Replaced pure comparative negligence under HB 837; medical negligence cases excepted'],
            ['<strong>Bad faith</strong>', 'Insurer mishandling of settlement can create liability above policy limits; civil remedy notice gives 60 days to cure', 'Why insurers take reasonable settlement demands seriously'],
            ['<strong>Unsatisfied judgment</strong>', 'License and registration suspended until the judgment is satisfied and an SR-22 is filed', 'The Financial Responsibility Law’s enforcement teeth']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — UM rules',
          questions: [
            {
              q: 'A Florida policy is issued with 100/300 BI limits and no signed UM selection form of any kind. The UM coverage on the policy is:',
              choices: [
                'Zero — UM must be affirmatively purchased',
                'The statutory minimum of 10/20',
                '100/300 — UM equals the BI limits unless rejected or reduced in writing',
                '50/100, half the BI limits'
              ],
              answer: 2,
              explain: 'UM rides along at limits equal to BI unless the named insured signs a written rejection or election of lower limits. With no signed form, the law deems full UM in force.'
            },
            {
              q: 'A household policy covers three vehicles with $50,000 of stacked UM each. The UM available to one injured insured is:',
              choices: ['$50,000', '$100,000', '$150,000', '$300,000'],
              answer: 2,
              explain: 'Stacking multiplies the per-vehicle limit by the number of vehicles: 3 x $50,000 = $150,000. A non-stacked policy would pay at most $50,000.'
            },
            {
              q: 'For non-stacked UM coverage to be valid in Florida, the insurer must obtain:',
              choices: [
                'Verbal consent recorded by the agent',
                'The named insured’s signed written election acknowledging the limitation',
                'Approval from the DHSMV',
                'Nothing — non-stacked is the automatic default'
              ],
              answer: 1,
              explain: 'Non-stacked UM trades breadth for premium, and Florida requires the insured’s signed acknowledgment of that trade. Without it, the coverage is treated as stacked.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 7.3 key terms',
          cards: [
            { front: 'Florida UM offer rule', back: 'UM limits must equal BI limits unless the named insured rejects or reduces them in writing on the approved form.' },
            { front: 'Stacked UM (3 cars at $100k)', back: '$300,000 — the per-vehicle limit multiplies across insured vehicles.' },
            { front: 'Non-stacked UM requirement', back: 'A signed written election; in exchange, the premium is lower but one limit applies.' },
            { front: 'Dangerous instrumentality doctrine', back: 'A vehicle owner is vicariously liable for the negligence of any permissive driver.' },
            { front: 'Modified comparative negligence', back: 'Since March 2023 (HB 837): recovery reduced by fault share and BARRED if the plaintiff is more than 50% at fault.' },
            { front: 'The 51% bar in numbers', back: '$100k damages: 30% fault recovers $70k; 50% recovers $50k; 51% recovers nothing.' },
            { front: 'Bad faith cure period', back: 'A civil remedy notice gives the insurer 60 days to cure before a bad-faith suit.' },
            { front: 'Unsatisfied judgment', back: 'Suspends license and registration until paid, with an SR-22 filed as proof of future responsibility.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — doctrines & lawsuits',
          questions: [
            {
              q: 'Tara lends her car to a friend, who negligently injures a cyclist. Under Florida’s dangerous instrumentality doctrine, Tara is:',
              choices: [
                'Liable only if she knew the friend was a bad driver',
                'Immune because she was not in the car',
                'Liable only for property damage',
                'Vicariously liable for the friend’s negligent operation of her vehicle'
              ],
              answer: 3,
              explain: 'The doctrine imposes vicarious liability on the owner who entrusts this dangerous instrumentality to another — no personal carelessness required. Statutory caps soften, but do not erase, an innocent owner’s exposure.'
            },
            {
              q: 'After a 2024 crash, a jury finds the plaintiff 60% at fault with $200,000 in damages. Under current Florida law the plaintiff recovers:',
              choices: ['Nothing — fault above 50% bars recovery', '$80,000', '$120,000', '$200,000'],
              answer: 0,
              explain: 'HB 837 (March 2023) adopted modified comparative negligence with a 51% bar: a plaintiff more than 50% at fault takes nothing. Under the old pure rule the answer would have been $80,000 — exam writers love that contrast.'
            },
            {
              q: 'Florida switched from pure to modified comparative negligence in:',
              choices: ['2012, with the PIP reforms', 'March 2023, under HB 837', '2007, with the FR-44 rule', '1971, when no-fault began'],
              answer: 1,
              explain: 'The tort reform act of March 2023 made the change. Medical negligence cases are the carve-out that keeps the older approach.'
            },
            {
              q: 'Before suing a Florida insurer for bad faith, a claimant generally must file a civil remedy notice giving the insurer how long to cure the violation?',
              choices: ['30 days', '45 days', '60 days', '90 days'],
              answer: 2,
              explain: 'The civil remedy notice opens a 60-day cure window. Paying the claim or otherwise curing within it generally defeats the bad-faith action.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Uninsured motorist coverage (Florida)', def: 'Coverage that must be offered with limits equal to BI whenever BI is purchased; rejection or reduction requires a signed written form.' },
        { term: 'Written rejection (UM)', def: 'The state-approved signed form by which the named insured declines UM or selects lower limits; binding on all insureds and renewals.' },
        { term: 'Stacked UM', def: 'UM limits that multiply across the vehicles insured (and may combine across household policies).' },
        { term: 'Non-stacked UM', def: 'UM confined to a single per-vehicle limit, valid only with the insured’s signed election, in exchange for a lower rate.' },
        { term: 'Dangerous instrumentality doctrine', def: 'Florida common law holding a vehicle owner vicariously liable for the negligence of any permissive operator.' },
        { term: 'Vicarious liability (auto)', def: 'Liability imposed on the owner for the driver’s negligence; statutory caps protect only innocent owners.' },
        { term: 'Negligent entrustment', def: 'Lending a vehicle to someone the owner knew or should have known was unfit — liability beyond the vicarious caps.' },
        { term: 'Pure comparative negligence', def: 'The pre-2023 Florida rule: recovery reduced by fault share with no bar, even above 50%.' },
        { term: 'Modified comparative negligence (51% bar)', def: 'The current Florida rule under HB 837: plaintiffs more than 50% at fault recover nothing; others recover damages reduced by their share.' },
        { term: 'HB 837 (2023)', def: 'The March 2023 Florida tort reform that adopted the 51% bar, among other litigation changes.' },
        { term: 'Bad faith', def: 'An insurer’s failure to settle fairly and honestly when it could and should have; can expose it beyond policy limits.' },
        { term: 'Civil remedy notice', def: 'The pre-suit notice that gives an insurer 60 days to cure an alleged bad-faith violation.' },
        { term: 'Unsatisfied judgment suspension', def: 'Loss of license and registration until an auto judgment is satisfied and an SR-22 is filed.' }
      ]
    },

    /* ---------------- Lesson 7.4 ---------------- */
    {
      id: 'u7l4',
      title: 'Cancellations, Nonrenewals & FL Auto Rules',
      minutes: 14,
      objectives: [
        'State Florida’s auto cancellation and nonrenewal notice periods — 45 days, and 10 days for nonpayment',
        'Explain the 60-day underwriting window and the permissible grounds for cancellation after it closes',
        'Apply the zero-deductible windshield rule and the total-loss threshold',
        'Recognize PIP fraud patterns and the reporting and rating rules that surround Florida auto policies'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Ending a Florida auto policy: the day-counts</h3>
<p>Florida wraps personal auto policies in consumer-protection timing rules, and the exam tests the numbers cold:</p>
<ul>
<li><strong>Cancellation or nonrenewal notice: 45 days</strong>, in writing, with the reason stated.</li>
<li><strong>Nonpayment of premium: only 10 days’ notice</strong> is required.</li>
<li><strong>The 60-day underwriting window:</strong> during the <strong>first 60 days</strong> a new policy is in force, the insurer may cancel for <strong>any lawful underwriting reason</strong> — this is its inspection period. (Cancellation for nonpayment still needs its 10-day notice.)</li>
</ul>
<p><strong>After the policy has been in force 60 days</strong> (or upon renewal), the insurer’s freedom collapses to a short statutory list. It may cancel mid-term only for: <strong>(1) nonpayment of premium; (2) material misrepresentation or fraud; or (3) suspension or revocation of the driver license or registration</strong> of the named insured or a household resident operator — during the policy period or, for a license suspension, the 180 days immediately preceding the effective date. Everything else must wait for nonrenewal at term’s end, with its 45-day notice.</p>`
        },
        {
          type: 'table',
          caption: 'Florida personal auto termination rules',
          headers: ['Event', 'Notice required', 'Key condition'],
          rows: [
            ['Cancellation (most grounds)', '<strong>45 days</strong>, written, with reason', 'After 60 days in force, grounds limited to the statutory list'],
            ['Cancellation for nonpayment', '<strong>10 days</strong>', 'Available at any time premium goes unpaid'],
            ['Nonrenewal', '<strong>45 days</strong> before the end of the term', 'Reason must be stated; renewal-cycle equivalent of cancellation'],
            ['New-business underwriting cancellation', '45 days (10 for nonpayment)', 'Only during the policy’s <strong>first 60 days</strong>'],
            ['Mid-term cancellation after 60 days', '45 days (10 for nonpayment)', 'Only nonpayment, material misrepresentation/fraud, or license/registration suspension or revocation']
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the windshield rule',
          html: `<p>When a Florida policy includes <strong>comprehensive (other-than-collision) coverage</strong>, the insurer may apply <strong>NO deductible to the repair or replacement of a damaged windshield</strong>. A cracked windshield is fixed for free under comprehensive — a safety rule meant to keep drivers from postponing glass repairs. Note the boundaries: it requires comprehensive coverage on the policy, and it applies to <strong>windshields</strong>, not every piece of glass on the car.</p>`
        },
        {
          type: 'text',
          html: `<h3>Total losses, salvage, and rates</h3>
<p><strong>When is a Florida car totaled?</strong> A vehicle is a <strong>total loss</strong> when it is stolen and unrecovered, or when the cost of repair is <strong>80% or more of its actual cash value</strong>. The owner surrenders the title, and the vehicle is rebranded with a <strong>salvage certificate of title</strong> — rebuilt vehicles must pass inspection and carry the brand forever. For total losses, settlement practice requires paying ACV plus the associated taxes and fees the customer must spend to replace the car.</p>
<p><strong>Rate regulation:</strong> Florida auto rates are filed with the Office of Insurance Regulation under a <strong>file-and-use or use-and-file</strong> system — file first and wait for review, or use immediately and file within a short statutory window, refunding if the rate is later disapproved. Either way, rates must be <strong>adequate, not excessive, and not unfairly discriminatory</strong>, the same trinity from Unit 1.</p>
<p><strong>Credit and insurance scores:</strong> Florida permits credit-based insurance scoring in rating, with guardrails — an insurer cannot refuse, cancel, or nonrenew <strong>solely</strong> on the basis of a credit report or score without consideration of other underwriting factors, must use filed scoring models, and cannot penalize consumers with thin or absent credit histories disproportionately.</p>
<h3>PIP fraud — why Florida premiums hurt</h3>
<p>No-fault’s prompt-pay promise made Florida a national capital of <strong>staged accidents</strong>: organized rings choreograph low-speed crashes, recruit "passengers," and funnel them to complicit clinics that bill PIP to the $10,000 ceiling for treatment never rendered. The 14-day rule, the EMC cap, licensing standards for clinics, and the DFS Division of Investigative and Forensic Services all exist substantially to fight this — and <strong>PIP fraud is a felony</strong>. Insurers must also report coverage information electronically to the DHSMV, including new policies, cancellations, and nonrenewals, so the state can match every registered vehicle to live insurance and flag the gaps. For a 4-40, the practical duties are humbler but real: verify identities, document odometer and vehicle photos when asked, and route any whiff of a staged claim to the agent and the carrier’s SIU rather than handling it solo.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'Red flags of a staged accident',
          html: `<p>A sudden stop with a car full of strangers; "phantom" passengers added to the report days later; immediate solicitation by a clinic or attorney the customer never contacted; minimal vehicle damage paired with maximal injury claims. None of these proves fraud — but each is a documented referral trigger, and insurers’ special investigative units (SIUs) exist precisely for them.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A customer buys a policy on May 1. On June 10 (day 40), the insurer’s inspection reveals an unlisted teenage driver with a suspended license, and it issues a 45-day cancellation notice — lawful, because the policy is inside its <strong>first 60 days</strong>. Had the same discovery come on August 1, the insurer could cancel mid-term only if it could prove <strong>material misrepresentation</strong> on the application (or wait and nonrenew with 45 days’ notice). Same facts, different clock, different rights.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — termination timing',
          questions: [
            {
              q: 'A Florida insurer cancels an auto policy for nonpayment of premium. The required advance notice is:',
              choices: ['45 days', '20 days', '10 days', 'None'],
              answer: 2,
              explain: 'Nonpayment carries the short 10-day notice. All other cancellations and nonrenewals require 45 days with the reason stated.'
            },
            {
              q: 'Seven months into the policy term, an insurer wants to cancel because the insured filed two not-at-fault claims. The insurer:',
              choices: [
                'May cancel with 45 days’ notice for any reason',
                'May not cancel mid-term — after 60 days, claims activity is not a permitted cancellation ground; it must wait to nonrenew',
                'May cancel with 10 days’ notice',
                'May cancel only with DHSMV approval'
              ],
              answer: 1,
              explain: 'After the first 60 days, mid-term cancellation is limited to nonpayment, material misrepresentation or fraud, and license/registration suspension or revocation. Unwanted risk profiles must be handled by 45-day nonrenewal at the end of the term.'
            },
            {
              q: 'During the first 60 days a new Florida auto policy is in force, the insurer may:',
              choices: [
                'Cancel for any lawful underwriting reason discovered during its review',
                'Not cancel under any circumstances',
                'Cancel only for nonpayment',
                'Cancel without sending any notice'
              ],
              answer: 0,
              explain: 'The first 60 days are the underwriting window — the insurer’s chance to inspect and walk away for lawful reasons. Notice requirements still apply.'
            },
            {
              q: 'A rock cracks the windshield of a car insured with comprehensive coverage in Florida. The insured pays:',
              choices: [
                'The comprehensive deductible',
                'Half the deductible',
                '$50 by statute',
                'Nothing — Florida bars any deductible on windshield repair or replacement under comprehensive'
              ],
              answer: 3,
              explain: 'The zero-deductible windshield rule applies whenever the policy carries comprehensive coverage. With no comprehensive on the policy, there is no glass coverage at all — the rule does not create coverage from nothing.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 7.4 key terms',
          cards: [
            { front: 'Cancellation / nonrenewal notice (FL auto)', back: '45 days, written, with the reason — 10 days for nonpayment of premium.' },
            { front: '60-day underwriting window', back: 'During a new policy’s first 60 days, the insurer may cancel for any lawful underwriting reason.' },
            { front: 'Mid-term cancellation grounds after 60 days', back: 'Nonpayment; material misrepresentation or fraud; suspension/revocation of license or registration (policy period or 180 days before inception).' },
            { front: 'Windshield rule', back: 'No deductible may be applied to windshield repair or replacement under comprehensive coverage.' },
            { front: 'Florida total-loss threshold', back: 'Repair cost at 80% or more of ACV (or unrecovered theft) — the vehicle takes a salvage title.' },
            { front: 'Rate standards', back: 'Adequate, not excessive, not unfairly discriminatory — filed file-and-use or use-and-file with the OIR.' },
            { front: 'Credit score limits', back: 'No refusal, cancellation, or nonrenewal based SOLELY on credit; models must be filed.' },
            { front: 'PIP fraud', back: 'Staged crashes and clinic overbilling — a felony, fought by the 14-day rule, the EMC cap, and DFS investigators.' },
            { front: 'Insurer reporting duty', back: 'Insurers electronically report policies, cancellations, and nonrenewals to the DHSMV to match cars with coverage.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — totals, rates & fraud',
          questions: [
            {
              q: 'A Florida vehicle with an ACV of $10,000 sustains $8,500 in damage. The vehicle is:',
              choices: [
                'Repairable at the insurer’s option only',
                'A total loss — repairs are 80% or more of ACV, so a salvage title results',
                'Not a total loss until repairs exceed 100% of ACV',
                'Automatically rebranded as rebuilt'
              ],
              answer: 1,
              explain: 'Florida’s total-loss threshold is 80% of ACV; $8,500 is 85%. The owner is paid ACV (plus replacement taxes and fees) and the title is branded salvage.'
            },
            {
              q: 'Which practice is a hallmark of staged-accident PIP fraud?',
              choices: [
                'Reporting a crash to the insurer the same day it happens',
                'Seeking treatment at a hospital emergency room',
                'Phantom passengers appearing on the claim days after a minor collision',
                'Photographing vehicle damage at the scene'
              ],
              answer: 2,
              explain: 'Late-added "passengers," recruiter-directed clinics, and major injury claims from minor impacts are classic staging markers. Prompt reporting and ER treatment are what legitimate claims look like.'
            },
            {
              q: 'Under Florida law, an insurer’s use of credit information in personal auto underwriting:',
              choices: [
                'Is prohibited entirely',
                'Is unregulated',
                'May be the sole basis for refusing or canceling coverage',
                'Is permitted, but coverage cannot be refused, canceled, or nonrenewed solely because of credit'
              ],
              answer: 3,
              explain: 'Credit-based insurance scores are lawful rating tools in Florida, but they cannot stand alone as the only reason to refuse, cancel, or nonrenew, and scoring models must be filed.'
            },
            {
              q: 'Florida insurers report auto policy issuance and termination data to the DHSMV so the state can:',
              choices: [
                'Calculate agent commissions',
                'Match registered vehicles against live coverage and suspend the uninsured',
                'Publish premium comparisons',
                'Assign salvage titles'
              ],
              answer: 1,
              explain: 'Electronic insurer reporting lets the DHSMV detect coverage lapses on registered vehicles and start the suspension process — the enforcement engine behind the registration requirements of Lesson 7.1.'
            }
          ]
        }
      ],
      terms: [
        { term: '45-day notice', def: 'The written notice, with reason, required for cancellation or nonrenewal of a Florida personal auto policy.' },
        { term: '10-day notice', def: 'The shortened notice permitted when cancellation is for nonpayment of premium.' },
        { term: '60-day underwriting window', def: 'The first 60 days of a new policy, during which the insurer may cancel for any lawful underwriting reason.' },
        { term: 'Permissible mid-term cancellation grounds', def: 'After 60 days: nonpayment, material misrepresentation or fraud, or suspension/revocation of a driver license or registration.' },
        { term: 'Zero-deductible windshield rule', def: 'Florida law barring any deductible on windshield repair or replacement when the policy includes comprehensive coverage.' },
        { term: 'Total loss (Florida)', def: 'An unrecovered stolen vehicle, or one whose repair cost is 80% or more of its actual cash value.' },
        { term: 'Salvage title', def: 'The branded certificate of title issued when a vehicle is declared a total loss; rebuilt vehicles carry the brand permanently.' },
        { term: 'File and use / use and file', def: 'Florida’s rate-filing options: file and await review, or use immediately and file within the statutory window subject to refund.' },
        { term: 'Credit-based insurance score', def: 'A rating score derived from credit history; in Florida it cannot be the sole basis for refusal, cancellation, or nonrenewal.' },
        { term: 'Staged accident', def: 'A deliberately caused or fabricated crash designed to generate fraudulent PIP and liability claims; a felony in Florida.' },
        { term: 'Special investigative unit (SIU)', def: 'The insurer team that investigates suspected fraud referrals.' },
        { term: 'DHSMV insurance reporting', def: 'Mandatory electronic reporting of policy issuance, cancellation, and nonrenewal used to enforce continuous coverage.' }
      ]
    }
  ],

  /* ---------------- Unit 7 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'The minimum coverage required to register a private passenger vehicle in Florida is:',
        choices: [
          'BI 10/20 and PD 10',
          'PIP $10,000 and BI $10,000',
          'PIP $10,000 and property damage liability $10,000',
          'PIP $10,000, BI 10/20, and PD $10,000'
        ],
        answer: 2,
        explain: 'Registration requires the no-fault pair: PIP $10,000 plus PDL $10,000. Bodily injury liability is not required of ordinary Florida drivers — only the Financial Responsibility Law imposes it, after qualifying events.'
      },
      {
        q: 'Florida’s Financial Responsibility Law requires limits of 10/20/10 from a driver:',
        choices: [
          'At every registration renewal',
          'After a crash involving bodily injury or other qualifying violations',
          'Only when leasing a vehicle',
          'Whenever a policy includes comprehensive coverage'
        ],
        answer: 1,
        explain: 'Financial responsibility is event-triggered — injury crashes, point suspensions, serious violations, judgments. Routine registration needs only PIP and PDL.'
      },
      {
        q: 'The FR-44 certificate required after a Florida DUI conviction proves limits of:',
        choices: ['10/20/10', '100/300/50', '50/100/25', '30/60/10'],
        answer: 1,
        explain: 'The FR-44 demands 100/300/50 — ten times the standard BI minimums — generally maintained for 3 years. The SR-22 at 10/20/10 serves non-DUI triggers.'
      },
      {
        q: 'Florida PIP pays which combination of benefits?',
        choices: [
          '100% of medical expenses and 80% of lost wages',
          '80% of medical expenses, 60% of lost income, and a $5,000 death benefit, up to $10,000',
          '80% of medical expenses and 80% of lost income, up to $20,000',
          '60% of medical expenses and 40% of lost income, up to $10,000'
        ],
        answer: 1,
        explain: 'The tested package is 80/60/$5,000 inside a $10,000 limit. Any other combination of percentages is a distractor.'
      },
      {
        q: 'To receive any PIP medical benefits, an injured person must obtain initial treatment within:',
        choices: ['72 hours of the crash', '7 days of the crash', '14 days of the crash', '30 days of the crash'],
        answer: 2,
        explain: 'The 14-day initial treatment rule is a complete bar: no qualifying care within 14 days, no PIP benefits at all.'
      },
      {
        q: 'An injured insured receives prompt treatment, but no provider determines an emergency medical condition. Her PIP medical benefits are capped at:',
        choices: ['$2,500', '$5,000', '$10,000', '$1,000'],
        answer: 0,
        explain: 'Without an EMC determination, medical benefits stop at $2,500. The EMC finding unlocks the full $10,000.'
      },
      {
        q: 'The largest PIP deductible a Florida insured may elect is:',
        choices: ['$250', '$500', '$1,000', '$2,000'],
        answer: 3,
        explain: 'Insurers must offer PIP deductibles up to $2,000, applicable to the named insured and dependent resident relatives.'
      },
      {
        q: 'Under Florida’s no-fault tort exemption, a victim may sue the at-fault driver for pain and suffering only if the injury involves:',
        choices: [
          'More than $2,500 in medical bills',
          'Any fracture, however minor',
          'Death, permanent injury, significant and permanent scarring, or significant and permanent loss of an important bodily function',
          'A police report filed within 14 days'
        ],
        answer: 2,
        explain: 'The threshold has four doors — death, permanent injury, significant and permanent scarring or disfigurement, and significant and permanent loss of an important bodily function. Dollar amounts of medical bills are irrelevant to the threshold.'
      },
      {
        q: 'A Florida policy carries 50/100 BI limits. Unless the named insured signs a written rejection or selection of lower limits, UM coverage is:',
        choices: ['Not included', '10/20 by default', '25/50 by default', '50/100 — equal to the BI limits'],
        answer: 3,
        explain: 'UM must equal BI unless rejected or reduced in writing on the approved form. Absent a signed form, full UM is deemed in force.'
      },
      {
        q: 'An insured carries non-stacked UM of $100,000 on each of her two cars. Injured by an uninsured driver, she may collect UM of at most:',
        choices: ['$100,000', '$200,000', '$300,000', '$50,000'],
        answer: 0,
        explain: 'Non-stacked coverage confines her to the single per-vehicle limit. Stacked coverage — at a higher premium — would have combined the two limits into $200,000.'
      },
      {
        q: 'The Florida doctrine that makes a vehicle owner liable for the negligent driving of anyone operating the car with permission is:',
        choices: [
          'Respondeat superior',
          'The dangerous instrumentality doctrine',
          'The family purpose doctrine',
          'Joint and several liability'
        ],
        answer: 1,
        explain: 'Florida treats the automobile as a dangerous instrumentality: entrusting it to another carries vicarious liability for the driver’s negligence, with statutory caps protecting only innocent owners.'
      },
      {
        q: 'After the March 2023 reforms, a Florida auto-negligence plaintiff found 55% at fault recovers:',
        choices: ['55% of damages', '45% of damages', 'Nothing — recovery is barred above 50% fault', 'Full damages reduced by a fixed 25%'],
        answer: 2,
        explain: 'HB 837 replaced pure comparative negligence with a modified 51%-bar system: more than 50% at fault means zero recovery. At 45% fault, the plaintiff would have collected 55% of damages.'
      },
      {
        q: 'Except for nonpayment of premium, a Florida personal auto insurer canceling or nonrenewing a policy must give written notice of:',
        choices: ['10 days', '20 days', '30 days', '45 days'],
        answer: 3,
        explain: '45 days with the reason stated; nonpayment alone drops the requirement to 10 days.'
      },
      {
        q: 'Nine months into the policy term, which discovery WOULD permit an insurer to cancel a Florida auto policy mid-term?',
        choices: [
          'The insured was at fault in one fender-bender',
          'The named insured’s driver license was revoked during the policy period',
          'The insured turned 80 years old',
          'The vehicle depreciated faster than expected'
        ],
        answer: 1,
        explain: 'After the first 60 days, mid-term cancellation is limited to nonpayment, material misrepresentation or fraud, and suspension or revocation of a license or registration. Age, claims history, and depreciation are at most nonrenewal considerations.'
      },
      {
        q: 'A Florida insured with comprehensive coverage needs a cracked windshield replaced. Under Florida law the insurer must:',
        choices: [
          'Apply the comprehensive deductible',
          'Apply half the deductible',
          'Replace it with no deductible at all',
          'Deny the claim unless collision coverage was purchased'
        ],
        answer: 2,
        explain: 'Florida’s zero-deductible windshield rule applies whenever the policy includes comprehensive coverage. Glass losses are OTC events, so collision coverage is irrelevant.'
      }
    ]
  }
});
