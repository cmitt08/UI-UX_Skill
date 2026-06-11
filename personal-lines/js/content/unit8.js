/* Unit 8 — Beyond Home & Auto: Other Personal Lines */
window.PL.units.push({
  id: 'u8',
  number: 8,
  title: 'Beyond Home & Auto: Other Personal Lines',
  icon: 'umbrella',
  description: 'The rest of the personal lines toolbox: the personal umbrella that sits above your HO and auto limits, floaters for valuables, boat and yacht policies, mobile home coverage, and the specialty endorsements customers ask about at the front desk.',
  lessons: [

    /* ---------------- Lesson 8.1 ---------------- */
    {
      id: 'u8l1',
      title: 'The Personal Umbrella Policy',
      minutes: 15,
      objectives: [
        'Explain what a personal umbrella policy does and the limits typically sold',
        'List the underlying limits an umbrella insurer requires and what happens when they are not maintained',
        'Define the self-insured retention and drop-down coverage and know when each applies',
        'Trace a large liability verdict through the PAP layer and the umbrella layer'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Why a million-dollar policy costs a few hundred dollars</h3>
<p>Everything you have studied so far — Coverage E on the homeowners policy, Part A on the personal auto policy — has a ceiling. A serious at-fault crash or a guest paralyzed in a backyard accident can produce a verdict far beyond a $300,000 HO limit or a 100/300 auto limit. When the primary policy is exhausted, the insured’s savings, home equity, and future wages are on the table.</p>
<p>The <span class="kt" title="Excess liability coverage that sits above the limits of underlying home, auto, and watercraft policies">personal umbrella policy</span> answers that exposure. It is <strong>excess liability insurance, normally sold in limits of $1 million to $5 million</strong>, that sits on top of (“over”) the insured’s underlying homeowners, personal auto, and watercraft liability policies. Because the umbrella only pays after a large underlying limit is used up — a rare event — the premium for $1 million of protection is remarkably small.</p>
<p>Umbrellas do two jobs at once. First, they add <strong>more dollars</strong> above the underlying limits. Second, they add <strong>broader protection</strong>: most umbrellas cover some claims the underlying policies never touch, such as <span class="kt" title="Liability arising from offenses like libel, slander, false arrest, and invasion of privacy">personal injury</span> offenses — libel, slander, defamation of character, false arrest, false imprisonment, malicious prosecution, and invasion of privacy. Coverage is typically worldwide.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Personal Umbrella Policy',
          html: `<p>A <strong>personal umbrella</strong> is a liability policy providing high limits — usually <strong>$1 million to $5 million</strong> — in excess of required underlying home, auto, and watercraft liability limits, and covering some losses the underlying policies exclude (subject to a self-insured retention).</p>`
        },
        {
          type: 'text',
          html: `<h3>The price of admission: required underlying limits</h3>
<p>An umbrella insurer will not sit one inch above a bare-minimum policy. The umbrella contract <strong>requires the insured to carry and maintain specified underlying liability limits</strong> on every exposure — auto, home, boats, recreational vehicles. Typical requirements look like this (exact figures vary by insurer):</p>`
        },
        {
          type: 'table',
          caption: 'Commonly required underlying liability limits (varies by insurer)',
          headers: ['Underlying policy', 'Typical required limit'],
          rows: [
            ['Personal auto (Part A)', '<strong>250/500/100 split limits</strong> or a $300,000–$500,000 combined single limit'],
            ['Homeowners (Coverage E)', '<strong>$300,000</strong> personal liability'],
            ['Watercraft liability', '$300,000–$500,000 if a boat is owned'],
            ['Recreational vehicles', 'Limits comparable to the auto requirement']
          ]
        },
        {
          type: 'callout', variant: 'warning', title: 'Maintenance of underlying — the trap question',
          html: `<p>If the insured lets a required underlying policy <strong>lapse or drops its limits</strong>, the umbrella does NOT drop down to fill the hole. The umbrella pays only what it would have paid <strong>had the required underlying coverage been in force</strong> — the insured personally pays the gap. Letting an auto policy cancel for nonpayment can turn a fully insured family into one with a quarter-million-dollar self-funded layer.</p>`
        },
        {
          type: 'text',
          html: `<h3>The self-insured retention and drop-down coverage</h3>
<p>What happens when the umbrella covers a claim the underlying policies do not cover at all — say, a slander suit, which the HO policy ignores? There is no underlying limit to exhaust, so the umbrella <strong>drops down</strong> and pays from the first dollar… almost. The insured first pays a <span class="kt" title="The deductible-like amount the insured pays on claims covered by the umbrella but not by any underlying policy">self-insured retention (SIR)</span>, also called the <strong>retained limit</strong> — commonly $250 to $1,000, sometimes higher.</p>
<p>Keep the two situations straight, because the exam will test them:</p>`
        },
        {
          type: 'compare',
          title: 'When does the SIR apply?',
          left: {
            title: 'Loss covered by underlying AND umbrella',
            items: [
              'Underlying policy pays first, up to its limit',
              'Umbrella pays the excess, up to the umbrella limit',
              '<strong>No SIR</strong> — the underlying limit serves as the “deductible”',
              'Example: a $1.5M auto verdict over a 250/500 PAP'
            ]
          },
          right: {
            title: 'Loss covered by umbrella ONLY',
            items: [
              'No underlying policy responds',
              'Umbrella <strong>drops down</strong> and pays from near first dollar',
              'Insured pays the <strong>self-insured retention</strong> (e.g., $1,000)',
              'Example: a libel or invasion-of-privacy suit'
            ]
          }
        },
        {
          type: 'quiz',
          title: 'Checkpoint — umbrella mechanics',
          questions: [
            {
              q: 'A personal umbrella policy is BEST described as:',
              choices: [
                'A replacement for homeowners and auto liability coverage',
                'A property policy covering high-value homes',
                'Excess liability coverage of $1 million or more sitting above required underlying policies',
                'A government program for hard-to-insure drivers'
              ],
              answer: 2,
              explain: 'The umbrella does not replace the HO or PAP — it requires them as underlying coverage and adds $1 million or more of excess liability protection (plus some broader coverage) above them.'
            },
            {
              q: 'An insured’s umbrella requires 250/500/100 underlying auto limits, but she quietly reduced her PAP to 100/300/50 to save money. After a $900,000 bodily injury verdict against her, the umbrella will:',
              choices: [
                'Pay as if the 250/500 limits were still in force, leaving her to pay the difference herself',
                'Pay the entire amount above her actual 100/300 limits',
                'Drop down and pay from the first dollar after the SIR',
                'Pay nothing because the policy is automatically void'
              ],
              answer: 0,
              explain: 'The maintenance-of-underlying condition makes the umbrella respond as though the required limits existed. She collects $100,000 from the PAP, the umbrella pays above the required $250,000 point, and she personally owes the $150,000 gap. The policy is not void — it just will not fill the hole she created.'
            },
            {
              q: 'A neighbor sues an umbrella insured for slander — a claim no underlying policy covers. Before the umbrella pays, the insured must absorb:',
              choices: [
                'The full underlying auto limit',
                'The self-insured retention (retained limit)',
                'Twenty percent of the judgment',
                'Nothing — drop-down coverage is always first dollar'
              ],
              answer: 1,
              explain: 'When a loss is covered by the umbrella but by no underlying policy, the umbrella drops down — but the insured first pays the SIR (commonly $250–$1,000). The SIR never applies when an underlying policy responds.'
            },
            {
              q: 'Which claim illustrates the “personal injury” coverage an umbrella adds beyond a typical HO policy?',
              choices: [
                'A guest breaks an ankle on the insured’s stairs',
                'The insured rear-ends another car',
                'A hurricane destroys the insured’s roof',
                'The insured is sued for false arrest after detaining a suspected package thief'
              ],
              answer: 3,
              explain: 'Personal injury means offenses like libel, slander, false arrest, false imprisonment, malicious prosecution, and invasion of privacy. The ankle and the rear-end crash are ordinary bodily injury claims; the roof is a property loss, not liability at all.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Worked example: a verdict flows through the layers</h3>
<p>Marcus carries a PAP with <strong>250/500/100</strong> split limits and a <strong>$1 million umbrella</strong> with a $1,000 SIR. He runs a red light and severely injures one pedestrian. A jury awards the victim <strong>$1,500,000</strong> in bodily injury damages. Follow the money:</p>`
        },
        {
          type: 'steps',
          title: 'How the $1.5M verdict gets paid',
          items: [
            { title: 'The PAP responds first', text: 'Part A pays its per-person bodily injury limit: $250,000. The PAP also paid Marcus’s defense costs along the way — in addition to the limit.' },
            { title: 'The umbrella pays the excess', text: 'The umbrella sits directly above the exhausted PAP limit and pays the next $1,000,000. No SIR applies, because an underlying policy covered the loss.' },
            { title: 'Tally the layers', text: 'PAP $250,000 + umbrella $1,000,000 = $1,250,000 of the verdict paid by insurance. Marcus is personally responsible for the remaining $250,000.' },
            { title: 'The lesson', text: 'Even a $1M umbrella can be outrun. Insureds with significant assets or income often buy $2M–$5M. Note that with NO umbrella, Marcus would have owed $1,250,000 personally.' }
          ]
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Who pays the $1.5M verdict (in $ thousands)',
          labels: ['PAP Part A (250/500)', 'Personal umbrella ($1M)', 'Marcus personally'],
          datasets: [{ label: 'Share of verdict ($000s)', data: [250, 1000, 250] }],
          note: 'The worked example from this lesson. The underlying PAP pays its per-person limit first, the umbrella pays the next layer, and anything beyond the umbrella limit falls back on the insured.'
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Same facts, different claim: a magazine sues Marcus for <strong>defamation</strong> over a blog post and wins $50,000. His HO and PAP pay nothing — defamation is not bodily injury or property damage from an occurrence they cover. His umbrella covers personal injury offenses, so it <strong>drops down</strong>: Marcus pays his $1,000 SIR and the umbrella pays $49,000, plus defense.</p>`
        },
        {
          type: 'text',
          html: `<h3>Who needs an umbrella?</h3>
<p>Anyone whose assets and future earnings exceed their primary liability limits — which is more people than you might think. Classic triggers: a swimming pool or trampoline, teenage drivers, boats, rental property, dogs, a public profile (coaching, blogging, volunteering on boards). Because the umbrella requires healthy underlying limits, recommending one often <em>improves</em> the customer’s whole program: the agency raises the HO and PAP limits to qualify, then adds the umbrella for a few hundred dollars a year. As a customer representative you should recognize these triggers and flag the account for your supervising agent.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 8.1 key terms',
          cards: [
            { front: 'Personal umbrella policy', back: 'Excess liability coverage of $1M–$5M above required underlying home, auto, and watercraft limits; also covers some claims the underlying policies exclude.' },
            { front: 'Required underlying limits', back: 'The minimum liability limits (e.g., 250/500/100 auto, $300k HO Coverage E) the insured must carry and maintain beneath the umbrella.' },
            { front: 'Maintenance of underlying', back: 'If required underlying coverage lapses, the umbrella pays only as if it were still in force — the insured pays the gap.' },
            { front: 'Self-insured retention (SIR)', back: 'The amount (commonly $250–$1,000) the insured pays on losses covered by the umbrella but by NO underlying policy.' },
            { front: 'Drop-down coverage', back: 'The umbrella paying at a level an underlying policy would normally occupy — when no underlying policy covers the claim (above the SIR).' },
            { front: 'Personal injury (umbrella)', back: 'Libel, slander, defamation, false arrest/imprisonment, malicious prosecution, invasion of privacy.' },
            { front: 'Excess liability', back: 'Coverage that pays only after an underlying limit is exhausted.' },
            { front: 'Umbrella limits sold', back: 'Typically $1 million to $5 million, in $1M increments.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the verdict walkthrough',
          questions: [
            {
              q: 'An insured carries a 250/500/100 PAP and a $2 million umbrella. A jury awards one injured person $1,800,000. How much does the umbrella pay?',
              choices: ['$1,800,000', '$2,000,000', '$1,550,000', '$1,300,000'],
              answer: 2,
              explain: 'The PAP pays its $250,000 per-person limit first. The umbrella pays the excess: $1,800,000 − $250,000 = $1,550,000, well within its $2M limit. The insured pays nothing out of pocket.'
            },
            {
              q: 'The umbrella’s self-insured retention applies:',
              choices: [
                'To every claim the umbrella pays',
                'Only when the insured was negligent',
                'Whenever the underlying insurer becomes insolvent',
                'Only when the loss is covered by the umbrella but by no underlying policy'
              ],
              answer: 3,
              explain: 'When an underlying policy responds, its limit is the entry point and no SIR applies. The SIR is the insured’s share only on drop-down claims that no underlying policy covers.'
            },
            {
              q: 'Which customer is the WEAKEST candidate for a personal umbrella?',
              choices: [
                'A renter with no car, no pets, minimal assets, and a small HO-4 policy',
                'A homeowner with a pool and two teenage drivers',
                'A retiree with substantial savings and a boat',
                'A landlord who owns a rental duplex'
              ],
              answer: 0,
              explain: 'Umbrellas protect assets and future income against large verdicts. The pool, teen drivers, boat, savings, and rental property are classic triggers; the asset-light renter has the least exposure (though even that person is not risk-free).'
            },
            {
              q: 'A personal umbrella premium is relatively inexpensive primarily because:',
              choices: [
                'The state subsidizes umbrella rates',
                'Losses rarely pierce the large underlying limits beneath it',
                'It provides no defense coverage',
                'It only covers property damage'
              ],
              answer: 1,
              explain: 'The umbrella sits above big underlying limits, so it pays only in rare, severe cases — low frequency makes high limits affordable. Umbrellas do provide defense for claims not covered by underlying policies, and they cover BI, PD, and personal injury.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Personal umbrella policy', def: 'A personal excess liability policy, typically $1M–$5M, sitting above required underlying home, auto, and watercraft liability limits.' },
        { term: 'Excess liability', def: 'Coverage that pays only after the limit of an underlying policy has been exhausted.' },
        { term: 'Underlying policy', def: 'The primary policy (HO, PAP, watercraft) whose limits must be exhausted before the umbrella pays.' },
        { term: 'Required underlying limits', def: 'Minimum liability limits the umbrella insurer requires the insured to carry on each exposure, such as 250/500/100 auto and $300,000 HO Coverage E.' },
        { term: 'Maintenance of underlying condition', def: 'The umbrella requirement that underlying coverage stay in force; if it lapses, the umbrella pays as if it had not, leaving the insured to fund the gap.' },
        { term: 'Self-insured retention (SIR)', def: 'The deductible-like amount (commonly $250–$1,000) the insured pays on claims covered by the umbrella but by no underlying policy. Also called the retained limit.' },
        { term: 'Retained limit', def: 'Another name for the umbrella’s self-insured retention.' },
        { term: 'Drop-down coverage', def: 'The umbrella paying down at the primary level (above the SIR) when no underlying policy covers an otherwise-covered claim.' },
        { term: 'Personal injury', def: 'A group of intentional-tort offenses — libel, slander, defamation, false arrest, false imprisonment, malicious prosecution, invasion of privacy — covered by umbrellas.' },
        { term: 'Libel', def: 'Defamation in written or published form.' },
        { term: 'Slander', def: 'Defamation in spoken form.' },
        { term: 'Defense costs', def: 'Legal costs the insurer pays to defend the insured; under umbrellas, provided for covered claims the underlying policies do not defend.' }
      ]
    },

    /* ---------------- Lesson 8.2 ---------------- */
    {
      id: 'u8l2',
      title: 'Inland Marine & the Personal Articles Floater',
      minutes: 14,
      objectives: [
        'Explain the origin of inland marine insurance and why “floaters” exist',
        'List the nine classes of property insurable under the personal articles floater',
        'Describe PAF features: scheduled, open-peril, agreed/appraised value, little or no deductible, worldwide territory',
        'Apply the newly acquired property clause (30 days) and the pair-and-set clause'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>From the high seas to your jewelry box</h3>
<p>Marine insurance is the oldest branch of the business — covering ships and cargo on the ocean. As goods began traveling inland by rail and truck, insurers extended marine concepts to property in <em>domestic transit</em>, and <strong>inland marine</strong> insurance was born. From there it was a short step to insuring property that simply <em>moves around with its owner</em> — a camera that goes on vacation, a ring worn everywhere. Policies covering such movable property are nicknamed <span class="kt" title="A policy covering movable personal property wherever it goes">floaters</span>, because coverage “floats” with the property.</p>
<p>Why does a homeowner need one? Think back to the Coverage C special sub-limits in Unit 4: <strong>theft of jewelry capped at $1,500, theft of silverware at $2,500</strong>, money at $200 — and the HO perils and deductible apply on top. An engagement ring appraised at $9,000 that vanishes down a drain gets <em>nothing</em> from the HO policy (losing it is not theft or any named peril) and at most $1,500 if it is stolen. The fix is the <span class="kt" title="An inland marine policy that schedules specific valuables for open-peril, agreed-value coverage">personal articles floater (PAF)</span> — sold as a standalone inland marine policy or as the scheduled personal property endorsement to the HO policy.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Floater / Scheduled coverage',
          html: `<p>A <strong>floater</strong> covers movable personal property wherever it goes — coverage follows the property. <strong>Scheduled coverage</strong> means each item (or class of items) is specifically listed on the policy with its own description and amount of insurance, usually supported by a <strong>recent appraisal or bill of sale</strong>.</p>`
        },
        {
          type: 'table',
          caption: 'The nine classes of property under the personal articles floater',
          headers: ['Class', 'Notes the exam likes'],
          rows: [
            ['<strong>Jewelry</strong>', 'Appraisal generally required; the most commonly scheduled class'],
            ['<strong>Furs</strong>', 'Includes garments trimmed with fur'],
            ['<strong>Cameras</strong>', 'Bodies, lenses, and equipment — each item listed'],
            ['<strong>Musical instruments</strong>', 'Playing for pay voids coverage unless a professional-use endorsement is added'],
            ['<strong>Silverware</strong>', 'Silverware, goldware, pewterware — no $2,500 theft cap once scheduled'],
            ['<strong>Golf equipment</strong>', 'Clubs and gear; golf balls covered for fire and burglary only; clothes in a locker covered while golfing'],
            ['<strong>Fine arts</strong>', 'Paintings, antiques, statuary — written on a true <strong>agreed value</strong> basis; breakage of fragile items excluded unless bought back'],
            ['<strong>Postage stamps</strong>', 'Collections; excludes fading, creasing, denting, and damage from handling'],
            ['<strong>Rare and current coins</strong>', 'Collections; same handling-type exclusions as stamps']
          ]
        },
        {
          type: 'text',
          html: `<h3>How PAF coverage actually works</h3>
<p>Four features define the floater, and together they explain why serious collectors and ring-owners buy it:</p>
<ul>
<li><strong>Open peril.</strong> All risks of direct physical loss are covered except a short exclusion list (wear and tear, gradual deterioration, <span class="kt" title="A quality within the property itself that causes it to deteriorate or destroy itself">inherent vice</span>, insects and vermin, war, nuclear). Crucially, <strong>mysterious disappearance is covered</strong> — the ring that slips off in the ocean is paid.</li>
<li><strong>Little or no deductible.</strong> Most PAF classes are written with no deductible at all.</li>
<li><strong>Agreed/appraised value.</strong> Items are insured for the amount scheduled, based on appraisals. <strong>Fine arts pay the full scheduled (agreed) amount in a total loss</strong> — true agreed value. Other classes typically pay the least of the scheduled amount, repair, replacement, or actual cash value — so keep appraisals current.</li>
<li><strong>Worldwide territory.</strong> Coverage follows the property anywhere in the world (fine arts are the common exception — often limited to the United States and Canada).</li>
</ul>
<h3>Two clauses you must know cold</h3>
<p><strong>Newly acquired property:</strong> for the <strong>jewelry, furs, cameras, and musical instruments</strong> classes, property bought during the policy period is automatically covered for up to <strong>30 days</strong>, for the lesser of <strong>25% of the class limit or $10,000</strong> — provided the insured reports the item and pays premium from the purchase date. Buy a bracelet on vacation and it is covered on the flight home, but only if a class is already scheduled and you report it within 30 days.</p>
<p><strong>Pair and set:</strong> lose one earring and the insurer does not owe the full pair. It may repair or replace the part, or pay the <strong>difference between the value of the set before and after the loss</strong> — not the whole set’s value.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Numbers to memorize: <strong>30 days</strong> of automatic coverage for newly acquired jewelry, furs, cameras, and musical instruments, capped at the <strong>lesser of 25% of that class limit or $10,000</strong>. The exam loves to offer “60 days” and “50%” as distractors.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Dana’s $9,000 engagement ring slides off while she swims in the Gulf. Her HO-3 pays <strong>$0</strong> — losing a ring is not a named peril for contents, and even theft would have been capped at $1,500. If the ring had been scheduled on a PAF: <strong>mysterious disappearance is covered, open peril, no deductible — she collects the scheduled amount.</strong> That contrast is the whole sales story for floaters.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'The $9,000 stolen ring: HO-3 alone vs. scheduled on a PAF',
          labels: ['HO-3 only (theft sub-limit)', 'Scheduled on a PAF'],
          datasets: [{ label: 'Amount paid ($)', data: [1500, 9000] }],
          note: 'Illustrative claim from this lesson, before any HO deductible. The HO theft sub-limit caps jewelry recovery at $1,500; the floater pays the scheduled amount with no deductible — and also covers losses HO ignores entirely, like mysterious disappearance.'
        },
        {
          type: 'compare',
          title: 'HO Coverage C vs. the personal articles floater',
          left: {
            title: 'Unscheduled under HO Coverage C',
            items: [
              'Named perils (HO-3) and policy deductible apply',
              'Special sub-limits: <strong>$1,500 jewelry theft, $2,500 silverware theft</strong>, $200 money',
              'No coverage for mysterious disappearance or breakage',
              'Valuation: ACV unless RC endorsement'
            ]
          },
          right: {
            title: 'Scheduled on a PAF',
            items: [
              '<strong>Open peril</strong> — including mysterious disappearance',
              'Usually <strong>no deductible</strong>',
              'Each item insured to its appraised/scheduled amount; fine arts at agreed value',
              'Worldwide coverage; newly acquired items auto-covered 30 days (4 classes)'
            ]
          }
        },
        {
          type: 'quiz',
          title: 'Checkpoint — floater fundamentals',
          questions: [
            {
              q: 'Which loss is covered by a personal articles floater but NOT by an unendorsed HO-3?',
              choices: [
                'A scheduled diamond ring that mysteriously disappears',
                'A television destroyed by lightning',
                'A bicycle stolen from the garage',
                'Smoke damage to scheduled furs from a kitchen fire'
              ],
              answer: 0,
              explain: 'The PAF is open peril and covers mysterious disappearance, which HO forms do not. Lightning, theft, and smoke are HO perils too — those losses would be covered (subject to limits) either way.'
            },
            {
              q: 'Which of the following is NOT one of the nine personal articles floater classes?',
              choices: ['Golf equipment', 'Postage stamps', 'Firearms', 'Musical instruments'],
              answer: 2,
              explain: 'The nine classes: jewelry, furs, cameras, musical instruments, silverware, golf equipment, fine arts, stamps, and coins. Firearms can be scheduled by other means, but they are not a PAF class — they have their own HO theft sub-limit ($2,500).'
            },
            {
              q: 'A violinist schedules her instrument on a PAF, then starts performing in a paid orchestra. Her coverage:',
              choices: [
                'Continues unchanged — the PAF is open peril',
                'Is voided for losses while played for pay, unless a professional-use endorsement is added',
                'Doubles automatically to match her income',
                'Converts to named-peril coverage'
              ],
              answer: 1,
              explain: 'The musical instruments class excludes instruments played for pay unless the insurer agrees by endorsement (at a higher rate). This is the classic PAF exclusion question.'
            },
            {
              q: 'Property newly acquired in the jewelry class is automatically covered for:',
              choices: [
                '60 days, up to 50% of the class limit',
                '90 days, up to the full class limit',
                '14 days, up to $5,000',
                '30 days, up to the lesser of 25% of the class limit or $10,000'
              ],
              answer: 3,
              explain: 'The newly acquired property clause gives 30 days of automatic coverage — lesser of 25% of the class limit or $10,000 — for jewelry, furs, cameras, and musical instruments, provided the item is reported and premium paid.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 8.2 key terms',
          cards: [
            { front: 'Inland marine insurance', back: 'Coverage that grew out of ocean marine to insure property in domestic transit and movable property — the home of floaters.' },
            { front: 'Floater', back: 'A policy covering movable property wherever it goes — coverage floats with the property.' },
            { front: 'Personal articles floater (PAF)', back: 'Schedules valuables in nine classes for open-peril, appraised-value coverage, usually with no deductible, worldwide.' },
            { front: 'The nine PAF classes', back: 'Jewelry, furs, cameras, musical instruments, silverware, golf equipment, fine arts, stamps, coins.' },
            { front: 'Newly acquired property clause', back: '30 days automatic coverage for new jewelry, furs, cameras, musical instruments — lesser of 25% of class limit or $10,000.' },
            { front: 'Pair and set clause', back: 'Insurer pays the difference in value of the set before and after losing one piece — not the full set.' },
            { front: 'Agreed value (fine arts)', back: 'Fine arts pay the full scheduled amount in a total loss — no depreciation argument.' },
            { front: 'Mysterious disappearance', back: 'Property simply vanishing — covered by the open-peril PAF, not by HO named perils.' },
            { front: 'Inherent vice', back: 'A self-destructive quality within property itself (e.g., fabric rot) — excluded by floaters.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — clauses & valuation',
          questions: [
            {
              q: 'One earring from a scheduled $8,000 pair is lost. Under the pair-and-set clause the insurer will most likely pay:',
              choices: [
                'The full $8,000 scheduled amount',
                'Nothing — both pieces must be lost',
                'The difference between the set’s value before and after the loss',
                '50% of the scheduled amount in every case'
              ],
              answer: 2,
              explain: 'Pair and set lets the insurer repair/replace the lost part or pay the reduction in the set’s value — which may be more or less than half, but is never automatically the full set.'
            },
            {
              q: 'A scheduled fine-arts statue insured for $20,000 is destroyed in a covered loss. Its market value had drifted to $17,000. The fine arts class pays:',
              choices: ['$17,000', '$20,000', 'Actual cash value less depreciation', 'Repair cost only'],
              answer: 1,
              explain: 'Fine arts are written on a true agreed value basis — a total loss pays the scheduled amount, full stop. Other PAF classes typically pay the least of scheduled amount, repair, replacement, or ACV.'
            },
            {
              q: 'Why do insurers require a current appraisal before scheduling jewelry?',
              choices: [
                'Florida law requires appraisals for all personal property',
                'The scheduled amount drives both the premium and the payout, so it must reflect real value',
                'Appraisals transfer title to the insurer',
                'It eliminates the need for an insurable interest'
              ],
              answer: 1,
              explain: 'Scheduled coverage insures a stated amount; the appraisal supports that amount for pricing and prevents over- or under-insurance. No statute requires appraisals for all property, and they have nothing to do with title or insurable interest.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Inland marine insurance', def: 'The branch of insurance, descended from ocean marine, covering property in domestic transit and movable property; the source of personal floaters.' },
        { term: 'Floater', def: 'A policy or endorsement covering movable personal property wherever it is located — coverage follows the property.' },
        { term: 'Personal articles floater (PAF)', def: 'An inland marine policy (or HO scheduled property endorsement) providing open-peril, scheduled coverage on nine classes of valuables.' },
        { term: 'Scheduled coverage', def: 'Insurance listing each item with its own description and amount, typically supported by appraisal or bill of sale.' },
        { term: 'Open peril (all-risk)', def: 'Coverage for all causes of direct physical loss except those specifically excluded.' },
        { term: 'Agreed value', def: 'A valuation basis paying the full scheduled amount in a total loss; used for fine arts on the PAF.' },
        { term: 'Appraisal (valuation)', def: 'A professional valuation used to set the scheduled amount for items like jewelry and fine art.' },
        { term: 'Newly acquired property clause', def: 'PAF provision covering newly purchased jewelry, furs, cameras, and musical instruments automatically for 30 days, up to the lesser of 25% of the class limit or $10,000.' },
        { term: 'Pair and set clause', def: 'Provision limiting recovery for loss of part of a pair or set to the difference in value before and after the loss (or repair/replacement of the part).' },
        { term: 'Mysterious disappearance', def: 'The vanishing of property with no explanation — covered under open-peril floaters but not under HO named perils.' },
        { term: 'Inherent vice', def: 'A quality within property that causes it to damage or destroy itself; excluded under floaters.' },
        { term: 'Professional use exclusion', def: 'PAF musical instruments are not covered while played for pay unless a professional-use endorsement is added.' }
      ]
    },

    /* ---------------- Lesson 8.3 ---------------- */
    {
      id: 'u8l3',
      title: 'Watercraft & Recreational Vehicles',
      minutes: 15,
      objectives: [
        'State the HO policy’s watercraft limitations on both the property and liability sides',
        'Describe the four coverage parts of a boatowners policy',
        'Explain yacht policy features: hull, protection & indemnity, lay-up warranties, and navigation limits',
        'Identify how motorcycles, off-road vehicles, and golf carts are insured — including Florida’s golf cart rules'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The homeowners policy barely floats</h3>
<p>Customers routinely assume the HO policy covers their boat. It barely does. On the <strong>property</strong> side, Coverage C carries a special sub-limit of <strong>$1,500 on watercraft of all types — including their trailers, furnishings, equipment, and outboard motors</strong>. On top of that tiny limit, two peril restrictions bite: <strong>windstorm or hail damages a boat only while it is inside a fully enclosed building</strong>, and <strong>theft of watercraft away from the residence premises is excluded</strong>. A $15,000 bass boat stolen from the lake marina collects nothing; stolen out of the insured’s backyard, it collects at most $1,500.</p>
<p>On the <strong>liability</strong> side (Section II), the HO policy covers only small, low-powered craft — think <strong>sailboats under 26 feet</strong> and boats with <strong>small outboard motors (25 total horsepower or less if owned)</strong>; larger owned inboard or inboard-outdrive boats are excluded. Anything bigger or faster needs its own policy. Personal watercraft (jet skis) are commonly excluded from HO liability as well.</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'The two numbers customers never believe',
          html: `<p><strong>$1,500</strong> — the HO property sub-limit on watercraft, trailers, equipment, and outboard motors combined. <strong>Liability only for small craft</strong> — generally sailboats under 26 feet and small-horsepower outboards. Real boats need a real boat policy. Quote accordingly and document the conversation.</p>`
        },
        {
          type: 'text',
          html: `<h3>The boatowners policy</h3>
<p>The <span class="kt" title="A package policy combining physical damage, liability, medical payments, and uninsured boater coverage for smaller pleasure boats">boatowners policy</span> is the PAP’s nautical cousin — a package policy for typical pleasure boats (roughly under 26 feet) combining four coverages:</p>
<ul>
<li><strong>Physical damage (hull coverage)</strong> — open-peril coverage on the boat, motor, trailer, and equipment, usually settled at <strong>ACV or, on newer boats, agreed value</strong>, subject to a deductible. Collision with another boat, sinking, fire, theft, storm — covered.</li>
<li><strong>Liability</strong> — bodily injury and property damage arising from ownership or operation of the boat, including water-skier liability; defense provided.</li>
<li><strong>Medical payments</strong> — no-fault medical for people injured aboard, similar in spirit to HO Coverage F and PAP Part B.</li>
<li><strong>Uninsured boater</strong> — pays the insured’s bodily injury caused by an uninsured boat operator; the marine version of UM. (Notice the parallel: the boatowners package mirrors PAP Parts A, B, C, and D.)</li>
</ul>
<p><strong>Personal watercraft (PWC)</strong> — jet skis and the like — are insured under a boatowners-style or specialty PWC policy, since HO liability commonly excludes them and rental waivers are full of holes.</p>
<h3>Yacht policies: bigger boat, older vocabulary</h3>
<p>Larger vessels (generally 26 feet and up) move into <strong>yacht policies</strong>, which use ocean marine language:</p>`
        },
        {
          type: 'table',
          caption: 'Yacht policy components and warranties',
          headers: ['Feature', 'What it provides'],
          rows: [
            ['<strong>Hull coverage</strong>', 'Open-peril physical damage on the vessel, typically written at <strong>agreed value</strong> — a total loss pays the scheduled amount'],
            ['<strong>Protection & indemnity (P&I)</strong>', 'The yacht’s <strong>liability</strong> coverage — bodily injury and property damage from ownership/operation, including defense'],
            ['<strong>Medical payments</strong>', 'No-fault medical for injuries aboard'],
            ['<strong>Lay-up warranty</strong>', 'A premium credit in exchange for the boat being <strong>out of service (laid up) during stated months</strong>; operating it during lay-up voids coverage'],
            ['<strong>Navigation limits (navigational warranty)</strong>', 'Coverage applies only within the <strong>stated cruising territory</strong> — venture outside it and coverage is suspended']
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A Tampa yacht owner’s policy carries a lay-up warranty of November through February and navigation limits of Florida coastal waters and the Bahamas. In January he takes the boat out for a warm-weekend cruise and strikes a sandbar. The claim is <strong>denied — the vessel was warranted out of service during lay-up</strong>. Same result if he had cruised to Mexico in July: outside the navigation limits, coverage does not apply. Marine warranties are strictly enforced.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — boats',
          questions: [
            {
              q: 'A $22,000 ski boat on its trailer is stolen from the insured’s driveway. An unendorsed HO-3 pays at most:',
              choices: ['$22,000', '$1,500', '$2,500', 'Nothing — theft of watercraft is always excluded'],
              answer: 1,
              explain: 'The Coverage C watercraft sub-limit is $1,500 including the trailer and motor. Theft from the residence premises is covered (up to that sub-limit); theft AWAY from the premises is what the HO excludes entirely.'
            },
            {
              q: 'Which coverage in a boatowners policy responds when an uninsured operator slams into the insured’s boat and injures her?',
              choices: ['Hull coverage', 'Medical payments', 'Uninsured boater coverage', 'Protection & indemnity'],
              answer: 2,
              explain: 'Uninsured boater coverage is the marine version of UM — it pays the insured’s bodily injury caused by an at-fault uninsured boater. Hull pays the boat’s damage; med pay is small no-fault medical; P&I is the insured’s own liability to others.'
            },
            {
              q: 'The liability section of a yacht policy is called:',
              choices: ['Coverage E', 'Hull coverage', 'Lay-up coverage', 'Protection & indemnity (P&I)'],
              answer: 3,
              explain: 'Yacht policies use ocean marine vocabulary: hull = physical damage, P&I = liability. Coverage E is homeowners language; lay-up is a warranty, not a coverage.'
            },
            {
              q: 'A yacht insured with a November–February lay-up warranty sinks during a December joyride. The insurer will:',
              choices: [
                'Pay, because sinking is a covered peril',
                'Pay half the loss as a compromise',
                'Deny the claim — the vessel was operated during the warranted lay-up period',
                'Pay only the medical payments portion'
              ],
              answer: 2,
              explain: 'The lay-up warranty traded a premium credit for the promise the boat stays out of service during those months. Operating during lay-up breaches the warranty and voids coverage for the loss.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Motorcycles, off-road toys & golf carts</h3>
<p>The personal auto policy is built for private passenger autos, so two-wheelers and off-road vehicles need their own arrangements. The usual route is the <strong>miscellaneous type vehicle endorsement</strong> on a PAP — extending coverage to motorcycles, mopeds, motor homes, ATVs, dune buggies, and golf carts — or a standalone specialty policy from a motorcycle/powersports insurer. Remember from Unit 4 that HO Section II excludes liability for motor vehicles generally, with narrow exceptions (vehicles in dead storage, lawn equipment — and <strong>golf carts while used to play golf on a golf course</strong>).</p>
<p>Golf carts deserve special attention in Florida, where entire communities run on them.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida — golf carts vs. low-speed vehicles',
          html: `<p>Florida law distinguishes a <strong>golf cart</strong> (top speed 20 mph or less) from a <strong>low-speed vehicle (LSV)</strong> (capable of more than 20 mph but not more than 25 mph). Golf carts may be driven on roads <strong>designated for golf cart use</strong> by the city or county without registration or mandatory insurance — but an unendorsed HO policy gives little or no protection off the golf course, so a golf cart endorsement or specialty policy is strongly recommended. An <strong>LSV must be titled, registered, and insured with PIP and property damage liability</strong> like other motor vehicles. Modify a cart to exceed 20 mph and you have created an LSV — with all of its registration and insurance obligations.</p>`
        },
        {
          type: 'compare',
          title: 'HO policy vs. boatowners policy for a typical powerboat',
          left: {
            title: 'Relying on the HO policy',
            items: [
              'Property capped at <strong>$1,500</strong> (boat + trailer + motor)',
              'No windstorm coverage unless inside a fully enclosed building',
              'No theft coverage away from the residence premises',
              'Liability only if the boat/motor is small enough to squeak under Section II’s exceptions'
            ]
          },
          right: {
            title: 'Buying a boatowners policy',
            items: [
              '<strong>Open-peril physical damage</strong> on boat, motor, trailer, equipment (ACV or agreed value)',
              'Liability for ownership and operation, including water-skiers',
              'Medical payments for those injured aboard',
              '<strong>Uninsured boater</strong> protection'
            ]
          }
        },
        {
          type: 'flashcards',
          title: 'Lesson 8.3 key terms',
          cards: [
            { front: 'HO watercraft property sub-limit', back: '$1,500 total — boat, trailer, furnishings, equipment, and outboard motors combined.' },
            { front: 'HO watercraft liability', back: 'Only small craft: generally sailboats under 26 feet and small owned outboards (25 hp or less). Bigger boats are excluded.' },
            { front: 'Boatowners policy', back: 'Package for smaller pleasure boats: physical damage + liability + medical payments + uninsured boater.' },
            { front: 'Uninsured boater coverage', back: 'Pays the insured’s bodily injury caused by an uninsured at-fault boat operator — UM for the water.' },
            { front: 'Hull coverage', back: 'Yacht physical damage coverage, typically open peril at agreed value.' },
            { front: 'Protection & indemnity (P&I)', back: 'The liability section of a yacht policy.' },
            { front: 'Lay-up warranty', back: 'Boat warranted out of service during stated months for a premium credit; operating during lay-up voids coverage.' },
            { front: 'Navigation limits', back: 'The cruising territory stated in a yacht policy; coverage applies only inside it.' },
            { front: 'Miscellaneous type vehicle endorsement', back: 'Extends PAP coverage to motorcycles, motor homes, ATVs, golf carts, and similar vehicles.' },
            { front: 'Florida LSV rule', back: 'Low-speed vehicles (20–25 mph) must be titled, registered, and insured with PIP and PDL; true golf carts (≤20 mph) on designated roads need neither.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — wheels & warranties',
          questions: [
            {
              q: 'A retiree’s golf cart tops out at 24 mph after a speed kit was installed. Under Florida law the cart:',
              choices: [
                'Is now a low-speed vehicle that must be titled, registered, and insured with PIP and PDL',
                'Remains an unregulated golf cart if driven only in his neighborhood',
                'May be driven anywhere a bicycle may go',
                'Is covered automatically by his HO policy on any public road'
              ],
              answer: 0,
              explain: 'Capable of more than 20 mph (up to 25) = low-speed vehicle, with title, registration, and PIP/PDL insurance requirements. The HO policy’s narrow golf cart exception is for golfing use, not street use.'
            },
            {
              q: 'Which vehicle is the BEST fit for the miscellaneous type vehicle endorsement to a PAP?',
              choices: ['A leased sedan', 'A Harley-Davidson motorcycle', 'A 30-foot sailboat', 'A commercial delivery van'],
              answer: 1,
              explain: 'The misc type vehicle endorsement adapts the PAP to motorcycles, mopeds, motor homes, ATVs, and golf carts. Sedans are already eligible autos; the sailboat needs a marine policy; the delivery van is a commercial exposure.'
            },
            {
              q: 'Hurricane winds destroy a boat parked on its trailer in the insured’s open carport. The HO policy pays:',
              choices: [
                'Up to $1,500 under the watercraft sub-limit',
                'The boat’s full ACV',
                'Nothing — windstorm damages watercraft only while inside a fully enclosed building',
                'Only the trailer, not the boat'
              ],
              answer: 2,
              explain: 'The HO covers windstorm/hail damage to watercraft only when the boat is inside a fully enclosed building. An open carport does not qualify, so the HO pays nothing — a boatowners policy with open-peril hull coverage would have responded.'
            },
            {
              q: 'A boatowners policy generally parallels which familiar policy’s structure?',
              choices: ['The dwelling policy', 'The NFIP flood policy', 'The homeowners Section I only', 'The personal auto policy'],
              answer: 3,
              explain: 'Physical damage, liability, medical payments, and uninsured boater mirror PAP Parts D, A, B, and C. Recognizing the parallel makes the boatowners package easy to remember.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Watercraft sub-limit', def: 'The HO Coverage C special limit of $1,500 on watercraft, including trailers, furnishings, equipment, and outboard motors.' },
        { term: 'Boatowners policy', def: 'A package policy for smaller pleasure boats combining open-peril physical damage, liability, medical payments, and uninsured boater coverage.' },
        { term: 'Personal watercraft (PWC)', def: 'Jet-ski-type craft, typically excluded under HO liability and insured under a specialty or boatowners-style policy.' },
        { term: 'Uninsured boater coverage', def: 'Boatowners coverage paying the insured’s bodily injury caused by an uninsured at-fault boat operator.' },
        { term: 'Yacht policy', def: 'An ocean marine-style policy for larger vessels, combining hull coverage, protection & indemnity, and marine warranties.' },
        { term: 'Hull coverage', def: 'Physical damage coverage on a vessel, usually open peril and written at agreed value on yacht policies.' },
        { term: 'Protection & indemnity (P&I)', def: 'The liability coverage of a yacht policy for bodily injury and property damage arising from the vessel.' },
        { term: 'Lay-up warranty', def: 'A yacht policy warranty that the vessel will be out of service during stated months in exchange for a premium credit.' },
        { term: 'Navigation limits', def: 'The geographic cruising territory within which yacht coverage applies; losses outside it are not covered.' },
        { term: 'Miscellaneous type vehicle endorsement', def: 'A PAP endorsement extending coverage to motorcycles, mopeds, motor homes, ATVs, dune buggies, and golf carts.' },
        { term: 'Golf cart (Florida)', def: 'A vehicle with a top speed of 20 mph or less; may operate on designated roads without registration or mandatory insurance.' },
        { term: 'Low-speed vehicle (LSV)', def: 'A vehicle capable of more than 20 but not more than 25 mph; Florida requires title, registration, and PIP/PDL insurance.' }
      ]
    },

    /* ---------------- Lesson 8.4 ---------------- */
    {
      id: 'u8l4',
      title: 'Mobile Homes & Specialty Coverages',
      minutes: 14,
      objectives: [
        'Describe the mobile home policy and how it differs from a standard HO form',
        'Compare ACV, stated value, and replacement cost settlement options for mobile homes',
        'Explain Florida tie-down credits and why wind drives mobile home underwriting',
        'Recognize the specialty endorsements and products customers ask about: RV, pet liability, travel, identity theft, service line, equipment breakdown'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Mobile homes: a Florida staple with its own policy</h3>
<p>Florida has one of the largest manufactured-housing populations in the country, so a 4-40 in this state will quote mobile home coverage constantly. A <span class="kt" title="A factory-built home transported to its site; insured under a mobile home policy rather than a standard HO form">mobile (manufactured) home</span> does not fit the standard HO program — it is built in a factory, moved on a chassis, and behaves differently in wind — so insurers use a <strong>mobile home policy</strong> (in ISO terms, the HO program adapted by a mobile home endorsement; many Florida carriers write a standalone form, often called an HO-7 style policy). The shape is familiar: dwelling coverage, other structures (carports, sheds, Florida rooms), personal property, loss of use, personal liability, and medical payments — a true package policy.</p>
<p>The big differences are <strong>valuation and wind</strong>. Mobile homes depreciate more like vehicles than like site-built houses, so insurers offer three settlement approaches:</p>
<ul>
<li><strong>Actual cash value (ACV)</strong> — replacement cost minus depreciation; the default for older homes and the cheapest option.</li>
<li><strong>Stated value (stated amount)</strong> — the home is insured for a specific agreed figure listed on the declarations; a total loss pays that stated amount. Popular in Florida because it removes the depreciation argument after a hurricane.</li>
<li><strong>Replacement cost</strong> — available mainly on newer homes meeting current construction standards.</li>
</ul>
<p>A useful extra: most mobile home policies offer a small <strong>transportation/permission-to-move coverage</strong> (commonly about 30 days of collision and upset protection while the home is professionally moved to a new site — moving a home without telling the insurer is a coverage problem, not a paperwork detail).</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida — tie-downs, credits & the wind problem',
          html: `<p>Wind is the defining peril for Florida mobile homes — older units fare poorly in hurricanes, which is why post-1994 HUD wind standards and the post-Andrew rules matter so much to underwriters. Florida insurers (including Citizens, which writes a large share of the state’s mobile homes) give <strong>premium credits for tie-downs — ground anchors and straps that secure the home against uplift</strong> — and for newer wind-rated construction. Expect underwriting questions about the home’s age, HUD wind zone, anchoring, and skirting, and expect hurricane deductibles to apply just as they do on site-built homes.</p>`
        },
        {
          type: 'compare',
          title: 'ACV vs. stated value on a mobile home total loss',
          left: {
            title: 'ACV settlement',
            items: [
              'Pays replacement cost <strong>minus depreciation</strong>',
              'Cheapest premium',
              'On an older single-wide, the check can be painfully small',
              'Depreciation is argued <em>after</em> the loss'
            ]
          },
          right: {
            title: 'Stated value settlement',
            items: [
              'Home insured for a <strong>specific dollar amount agreed up front</strong>',
              'Total loss pays the stated amount — no depreciation fight',
              'Costs more than ACV',
              'The number is settled <em>before</em> the loss — clarity after a hurricane'
            ]
          }
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'What drives Florida mobile home claims (illustrative)',
          labels: ['Hurricane / windstorm', 'Other weather (hail, tornado)', 'Fire', 'Water (non-weather)', 'Theft, liability & other'],
          datasets: [{ label: 'Share of claim dollars', data: [55, 14, 13, 10, 8] }],
          suffix: '%',
          note: 'Illustrative distribution to show why wind mitigation (tie-downs, newer wind-rated construction) dominates mobile home underwriting and pricing in Florida.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — mobile homes',
          questions: [
            {
              q: 'A 1998 single-wide insured on a stated value basis for $48,000 is totally destroyed by a hurricane (deductible aside). The insurer pays:',
              choices: [
                'Replacement cost of a comparable new home',
                'ACV as determined after the loss',
                '$48,000 — the stated amount on the declarations',
                'Market value of the home and lot'
              ],
              answer: 2,
              explain: 'Stated value settles a total loss at the amount agreed up front and shown on the declarations — that is its entire appeal. ACV would deduct depreciation, and the land is never insured.'
            },
            {
              q: 'Florida insurers grant mobile home premium credits primarily for:',
              choices: [
                'Screened porches',
                'Tie-downs and ground anchors that resist wind uplift',
                'Carpeted interiors',
                'Monthly payment plans'
              ],
              answer: 1,
              explain: 'Wind is the dominant peril; anchoring systems measurably reduce hurricane losses, so tie-down credits (and newer wind-rated construction) earn discounts.'
            },
            {
              q: 'An insured hires a transport company to relocate her mobile home to a new lot. Her mobile home policy most likely:',
              choices: [
                'Covers the home in transit automatically and indefinitely',
                'Excludes the home permanently once it moves',
                'Converts to a personal auto policy during the move',
                'Provides roughly 30 days of collision/upset coverage for a permitted professional move'
              ],
              answer: 3,
              explain: 'The transportation/permission-to-move provision gives short-term (about 30 days) collision and upset protection for an authorized move. Moving the home without notifying the insurer jeopardizes coverage.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>The specialty shelf: small policies, big questions</h3>
<p>Front-desk reality: customers call about everything they own and everywhere they go. Know what each of these is, what it covers, and when to flag the agent:</p>
<h4>RVs and travel trailers</h4>
<p>A <strong>motor home</strong> is a motor vehicle — it needs auto-style coverage (via the miscellaneous type vehicle endorsement or a specialty RV policy that adds extras like <em>vacation liability</em> while parked as a residence and coverage for attached accessories). A <strong>travel trailer</strong> is towed: liability from towing generally extends from the tow vehicle’s PAP, but <strong>physical damage on the trailer itself must be bought separately</strong> — a fact that surprises owners after the first blowout.</p>
<h4>Pet and animal liability</h4>
<p>Dog bites are ordinarily covered by HO Coverage E — but many Florida-market policies carry <strong>animal liability exclusions or low sub-limits</strong>, and Florida’s dog-bite statute makes owners liable for bites <strong>regardless of the dog’s prior behavior</strong> (strict liability). When the HO excludes the dog, a standalone animal liability policy fills the gap. Always check the policy, never assume.</p>
<h4>Travel insurance</h4>
<p>Trip cancellation/interruption (prepaid, nonrefundable costs), baggage coverage, emergency medical, and <strong>medical evacuation</strong> — the coverage that matters most abroad, where domestic health plans may pay little. Sold per trip or annually.</p>
<h4>Identity theft endorsement</h4>
<p>Reimburses the <strong>expenses of restoring identity</strong> — lost wages, notary and mailing costs, attorney fees, re-applying for loans — typically with a modest limit (often $15,000–$25,000). It does not repay money actually stolen from accounts; banks and card issuers handle that.</p>
<h4>Service line endorsement</h4>
<p>Base HO policies do <strong>not</strong> cover the underground pipes and wiring between the street and the house — water service lines, sewer laterals, buried power and data lines. The service line endorsement covers failure (wear, tree roots, rodents, freezing) of those buried lines plus the excavation to fix them.</p>
<h4>Equipment breakdown endorsement</h4>
<p>Covers sudden <strong>mechanical or electrical breakdown</strong> of home systems and appliances — the AC compressor, heat pump, well pump, built-in appliances — perils the HO excludes as wear/inherent defect. In air-conditioned Florida, this inexpensive endorsement earns its keep.</p>`
        },
        {
          type: 'table',
          caption: 'Specialty endorsements at a glance',
          headers: ['Product / endorsement', 'Fills this gap', 'Remember'],
          rows: [
            ['RV / motor home policy', 'Motorized RVs need auto-style coverage plus vacation liability', 'Travel trailer physical damage is NOT automatic from the tow vehicle’s PAP'],
            ['Animal liability policy', 'HO forms with animal exclusions or sub-limits', 'Florida dog-bite law is strict liability — prior good behavior is no defense'],
            ['Travel insurance', 'Trip cancellation, baggage, emergency medical & evacuation', 'Medical evacuation is the headline benefit abroad'],
            ['Identity theft endorsement', 'Costs of restoring a stolen identity', 'Pays restoration expenses, not the stolen funds themselves'],
            ['Service line endorsement', 'Buried pipes/wiring from street to home', 'Base HO excludes these lines entirely'],
            ['Equipment breakdown endorsement', 'Mechanical/electrical failure of home systems', 'Covers the AC compressor the HO calls excluded wear and tear']
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Pattern to spot on the exam: each specialty endorsement exists because the base HO policy <strong>excludes</strong> something specific — buried service lines, mechanical breakdown, identity-restoration expenses, certain animals. If a question asks why an endorsement exists, the answer is almost always “because the unendorsed policy does not cover it.”</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A customer’s AC compressor seizes in July (mechanical breakdown — HO excludes it), the same week tree roots crush her water service line under the front yard (buried service line — HO excludes it). With the <strong>equipment breakdown</strong> and <strong>service line</strong> endorsements, both are covered, including the digging. Two endorsements that together often cost less than one service call.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 8.4 key terms',
          cards: [
            { front: 'Mobile home policy', back: 'An HO-style package (HO-7 style / mobile home endorsement) adapted to manufactured homes — dwelling, contents, loss of use, liability, med pay.' },
            { front: 'Stated value (mobile home)', back: 'Home insured for a specific agreed dollar amount; a total loss pays that amount with no depreciation dispute.' },
            { front: 'Tie-down credit', back: 'Florida premium credit for ground anchors and straps that secure a mobile home against wind uplift.' },
            { front: 'Transportation/permission to move', back: 'About 30 days of collision and upset coverage while a mobile home is professionally moved with insurer permission.' },
            { front: 'Travel trailer trap', back: 'Towing liability extends from the tow vehicle’s PAP, but trailer physical damage must be purchased separately.' },
            { front: 'Identity theft endorsement', back: 'Reimburses identity-restoration expenses (typically $15k–$25k limit) — not the funds actually stolen.' },
            { front: 'Service line endorsement', back: 'Covers failure of buried pipes/wiring between street and home, plus excavation — excluded by base HO.' },
            { front: 'Equipment breakdown endorsement', back: 'Covers sudden mechanical/electrical breakdown of home systems (AC, heat pump) the HO excludes.' },
            { front: 'Florida dog-bite liability', back: 'Strict liability — the owner is liable for bites regardless of the dog’s prior behavior; many FL policies exclude animal liability.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the specialty shelf',
          questions: [
            {
              q: 'A customer’s identity is stolen; thieves drain $9,000 from her checking account and she spends $3,200 on attorneys, notarized affidavits, and lost work time untangling it. Her HO identity theft endorsement pays:',
              choices: [
                'The $3,200 of restoration expenses, within the endorsement limit',
                'The full $12,200',
                'Only the $9,000 stolen from the account',
                'Nothing — identity theft is uninsurable'
              ],
              answer: 0,
              explain: 'The endorsement reimburses the expenses of restoring identity — legal fees, lost wages, paperwork costs. Stolen funds are recovered through the bank and card issuers, not this endorsement.'
            },
            {
              q: 'Which loss would the SERVICE LINE endorsement cover that the base HO policy excludes?',
              choices: [
                'A burst pipe inside the kitchen wall',
                'Tree roots collapsing the buried water line between the street and the house',
                'A flooded living room after a hurricane storm surge',
                'A worn-out roof'
              ],
              answer: 1,
              explain: 'Service line coverage exists precisely for buried exterior lines, which base HO forms do not cover. The in-wall pipe burst is already an HO covered peril; storm surge is flood; a worn roof is excluded maintenance either way.'
            },
            {
              q: 'A family’s travel trailer is destroyed when it fishtails and flips on I-75. The tow vehicle carries a full-coverage PAP; the trailer had no separate physical damage coverage. The trailer’s damage is:',
              choices: [
                'Covered by the tow vehicle’s collision coverage automatically',
                'Covered by the tow vehicle’s liability coverage',
                'Covered by the family’s HO policy as personal property without limit',
                'Not covered — trailer physical damage must be separately insured'
              ],
              answer: 3,
              explain: 'The PAP extends liability to a towed trailer, but NOT physical damage on the trailer itself — that must be scheduled or separately written. This is the classic RV-counter mistake an alert customer representative prevents.'
            },
            {
              q: 'Why do Florida insureds with older, ACV-settled mobile homes often upgrade to stated value?',
              choices: [
                'Stated value is always cheaper',
                'ACV is illegal on mobile homes in Florida',
                'Stated value fixes the total-loss payout in advance, avoiding a depreciation battle after a hurricane',
                'Stated value includes the land value'
              ],
              answer: 2,
              explain: 'Stated value trades a higher premium for certainty: the declarations amount is the total-loss payout. ACV remains legal and common but invites depreciation disputes; land is never part of any settlement.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Mobile (manufactured) home', def: 'A factory-built home transported to its site on a chassis; insured under a mobile home policy rather than a standard HO form.' },
        { term: 'Mobile home policy', def: 'An HO-style package policy (HO-7 style or HO program with mobile home endorsement) covering the home, contents, loss of use, liability, and medical payments.' },
        { term: 'Stated value', def: 'A settlement option insuring the mobile home for a specific agreed amount that is paid in a total loss, avoiding post-loss depreciation disputes.' },
        { term: 'Tie-downs', def: 'Ground anchors and straps securing a mobile home against wind uplift; earn Florida premium credits.' },
        { term: 'Transportation (permission to move) coverage', def: 'Short-term (about 30 days) collision and upset coverage while a mobile home is moved with insurer permission.' },
        { term: 'Vacation liability', def: 'RV policy coverage for liability while the RV is parked and used as a temporary residence.' },
        { term: 'Travel trailer', def: 'A towed RV; liability extends from the tow vehicle’s PAP, but physical damage must be separately insured.' },
        { term: 'Animal liability exclusion', def: 'A common Florida policy provision removing or capping coverage for injuries caused by the insured’s animals.' },
        { term: 'Trip cancellation/interruption', def: 'Travel insurance reimbursing prepaid, nonrefundable trip costs lost to covered causes.' },
        { term: 'Medical evacuation coverage', def: 'Travel insurance paying emergency transport to adequate medical care — the key benefit abroad.' },
        { term: 'Identity theft endorsement', def: 'HO endorsement reimbursing the expenses of restoring a stolen identity, not the stolen funds themselves.' },
        { term: 'Service line endorsement', def: 'Covers failure of buried service pipes and wiring between the street and the home, including excavation costs.' },
        { term: 'Equipment breakdown endorsement', def: 'Covers sudden mechanical or electrical breakdown of home systems and appliances otherwise excluded by the HO policy.' }
      ]
    }
  ],

  /* ---------------- Unit 8 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Personal umbrella policies are typically sold with limits of:',
        choices: ['$100,000 to $300,000', '$1 million to $5 million', '$50,000 to $500,000', '$10 million minimum'],
        answer: 1,
        explain: 'Umbrellas provide catastrophe-level liability protection, normally $1M–$5M, above required underlying home, auto, and watercraft limits.'
      },
      {
        q: 'An umbrella insured failed to renew his homeowners policy. A guest is later injured at his home and wins a $400,000 judgment. The umbrella, which required $300,000 underlying HO liability, will pay:',
        choices: [
          'The full $400,000',
          '$400,000 minus the SIR',
          'Only the amount above $300,000 — about $100,000 — leaving the insured to fund the first $300,000 himself',
          'Nothing, because the umbrella automatically cancelled'
        ],
        answer: 2,
        explain: 'Under the maintenance-of-underlying condition, the umbrella responds as if the required $300,000 HO limit were in force, paying only the excess layer. The insured personally absorbs what the lapsed policy would have paid.'
      },
      {
        q: 'The self-insured retention in a personal umbrella applies when:',
        choices: [
          'Any underlying policy pays its full limit',
          'The insured is sued for an auto accident',
          'The umbrella premium is overdue',
          'The umbrella covers a loss that no underlying policy covers'
        ],
        answer: 3,
        explain: 'The SIR (retained limit) is the insured’s share only on drop-down claims — losses inside the umbrella’s broader coverage but outside every underlying policy, like libel or slander.'
      },
      {
        q: 'A driver with 250/500/100 PAP limits and a $1 million umbrella injures one person, who wins a $1.2 million verdict. The insured personally pays:',
        choices: ['Nothing', '$200,000', '$950,000', '$1,000', ],
        answer: 0,
        explain: 'PAP pays $250,000 (per-person limit); the umbrella pays the remaining $950,000, within its $1M limit. No SIR applies because an underlying policy covered the loss — the insured owes nothing.'
      },
      {
        q: 'Coverage that follows movable personal property wherever it goes is called a:',
        choices: ['Binder', 'Floater', 'Rider of adhesion', 'Schedule of authority'],
        answer: 1,
        explain: 'Floaters — descendants of marine insurance — cover property that moves with its owner. The personal articles floater is the personal lines flagship.'
      },
      {
        q: 'All of the following are classes under the personal articles floater EXCEPT:',
        choices: ['Fine arts', 'Golf equipment', 'Furs', 'Motorized watercraft'],
        answer: 3,
        explain: 'The nine PAF classes are jewelry, furs, cameras, musical instruments, silverware, golf equipment, fine arts, stamps, and coins. Watercraft need a boatowners or yacht policy.'
      },
      {
        q: 'Which valuation applies to a total loss of scheduled FINE ARTS under the PAF?',
        choices: [
          'Actual cash value',
          'Market value at time of loss',
          'The full scheduled (agreed) amount',
          'Replacement cost minus the deductible'
        ],
        answer: 2,
        explain: 'Fine arts are written on a true agreed value basis: a total loss pays the scheduled amount. Other classes generally pay the least of scheduled amount, repair, replacement, or ACV.'
      },
      {
        q: 'On June 1 a PAF insured with a scheduled jewelry class buys a $6,000 watch. With no other action, the watch is automatically covered:',
        choices: [
          'For 30 days, up to the lesser of 25% of the jewelry class limit or $10,000',
          'For 90 days, up to the full class limit',
          'Until renewal, with no dollar cap',
          'Not at all until it is appraised'
        ],
        answer: 0,
        explain: 'The newly acquired property clause (jewelry, furs, cameras, musical instruments) gives 30 days of automatic coverage, capped at the lesser of 25% of the class limit or $10,000 — provided the insured reports it and pays premium from purchase.'
      },
      {
        q: 'A $30,000 center-console boat is stolen from a marina ten miles from the insured’s home. The unendorsed HO-3 pays:',
        choices: ['$1,500', '$2,500', 'The boat’s ACV', 'Nothing — theft of watercraft away from the residence premises is excluded'],
        answer: 3,
        explain: 'HO theft coverage excludes watercraft stolen away from the residence premises. Even at home, the watercraft property sub-limit would cap recovery at $1,500 — both facts make the boatowners policy essential.'
      },
      {
        q: 'Which boatowners coverage corresponds to uninsured motorists coverage on the PAP?',
        choices: ['Hull coverage', 'Uninsured boater coverage', 'Protection & indemnity', 'Lay-up coverage'],
        answer: 1,
        explain: 'Uninsured boater coverage pays the insured’s bodily injury caused by an at-fault uninsured boat operator — the direct marine parallel to UM.'
      },
      {
        q: 'A yacht policy’s navigational warranty states Florida and Bahamian waters. The insured sails to Grand Cayman and the vessel is damaged there. The result:',
        choices: [
          'Covered, because the loss was fortuitous',
          'Covered at 50% as a compromise settlement',
          'Not covered — the loss occurred outside the navigation limits',
          'Covered under protection & indemnity only'
        ],
        answer: 2,
        explain: 'Navigation limits define where coverage exists; marine warranties are strictly enforced. Outside the stated territory, hull and liability protection simply do not apply.'
      },
      {
        q: 'Under Florida law, a low-speed vehicle (capable of 21–25 mph) must:',
        choices: [
          'Stay on golf courses only',
          'Carry only a boatowners policy',
          'Be operated only by drivers over 65',
          'Be titled, registered, and insured with PIP and property damage liability'
        ],
        answer: 3,
        explain: 'LSVs are treated as motor vehicles: title, registration, and PIP/PDL insurance are required. True golf carts (20 mph or less) on designated roads escape those requirements.'
      },
      {
        q: 'The settlement option that pays a pre-agreed dollar amount for a total loss of a mobile home — eliminating the post-hurricane depreciation argument — is:',
        choices: ['Actual cash value', 'Stated value', 'Functional replacement cost', 'Pro-rata value'],
        answer: 1,
        explain: 'Stated value fixes the total-loss payout at the declarations amount agreed in advance. ACV deducts depreciation after the loss; functional replacement substitutes modern materials, a different concept.'
      },
      {
        q: 'Florida mobile home insurers grant premium credits primarily for:',
        choices: [
          'Tie-downs and wind-rated construction',
          'Annual interior inspections',
          'Carports and screened lanais',
          'Homes located in flood zone A'
        ],
        answer: 0,
        explain: 'Wind dominates Florida mobile home losses, so anchoring systems and newer HUD wind-zone construction earn the meaningful credits. Flood zone A would raise, not lower, concern — and flood is excluded anyway.'
      },
      {
        q: 'A customer wants coverage for the buried water pipe running from the city main to her house — a line her HO policy excludes. The correct solution is the:',
        choices: ['Equipment breakdown endorsement', 'Identity theft endorsement', 'Service line endorsement', 'Ordinance or law endorsement'],
        answer: 2,
        explain: 'The service line endorsement covers failure of buried exterior pipes and wiring plus excavation. Equipment breakdown covers mechanical/electrical failure of systems and appliances — a different gap.'
      }
    ]
  }
});
