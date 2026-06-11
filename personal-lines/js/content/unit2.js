/* Unit 2 — Inside the Policy: Structure & Common Provisions */
window.PL.units.push({
  id: 'u2',
  number: 2,
  title: 'Inside the Policy: Structure & Common Provisions',
  icon: 'file',
  description: 'How to read any property policy: the DICEE structure from declarations to endorsements, how losses are valued (ACV vs. replacement cost and the 80% coinsurance math), the conditions the exam loves, and who the people named in a policy actually are.',
  lessons: [

    /* ---------------- Lesson 2.1 ---------------- */
    {
      id: 'u2l1',
      title: 'Anatomy of a Policy: Declarations to Endorsements',
      minutes: 14,
      objectives: [
        'Name the structural parts of an insurance policy using the DICEE framework',
        'Locate the key facts on a declarations page',
        'Explain why every policy contains exclusions and what endorsements do',
        'Distinguish named-peril from open-peril insuring agreements and who carries the burden of proof under each'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Every policy tells the same story</h3>
<p>Open any personal lines policy — homeowners, dwelling, auto — and you will find the same skeleton underneath. Learn the skeleton once and you can read every policy you will ever touch. The exam tests the parts by name, so memorize them with the acronym <strong>DICEE</strong>:</p>
<ul>
<li><strong>D — Declarations.</strong> The personalized cover page: <strong>who</strong> is insured, <strong>what</strong> property or vehicle, <strong>when</strong> the policy period runs, <strong>how much</strong> coverage (the limits), the deductibles, and the premium. The dec page is the only part of the policy customized to the individual insured.</li>
<li><strong>I — Insuring agreement.</strong> The heart of the contract: <strong>the insurer’s promise to pay</strong> for covered losses, and a broad statement of what is covered — either a list of named perils or an open-peril promise.</li>
<li><strong>C — Conditions.</strong> The rules of the game: what both parties must do for the promise to be enforceable — pay premium, report losses promptly, cooperate, submit to appraisal, and so on. Lesson 2.3 lives here.</li>
<li><strong>E — Exclusions.</strong> What the insurer will <strong>not</strong> pay for: perils, property, people, and situations carved out of the broad promise.</li>
<li><strong>E — Endorsements (and Definitions).</strong> Endorsements are attached forms that <strong>modify</strong> the base contract; the definitions section nails down exactly what words like "insured," "occurrence," and "residence premises" mean wherever they appear in quotation marks.</li>
</ul>
<p>Some textbooks teach the same structure as <strong>DICE</strong> (folding definitions and endorsements together). Either way, the testable skill is matching a piece of information to the section where it lives.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hook: the dec page answers the reporter questions — <strong>who, what, where, when, how much</strong>. If an exam question asks where to find the policy limits, the deductible, the named insured, or the policy period, the answer is the <strong>declarations</strong>. If it asks where the insurer’s basic promise lives, the answer is the <strong>insuring agreement</strong>.</p>`
        },
        {
          type: 'table',
          caption: 'Reading a (simplified) homeowners declarations page',
          headers: ['Dec page item', 'Sample entry', 'What it tells you'],
          rows: [
            ['Named insured & mailing address', 'Robert & Lena Cruz, 414 Palm Ave, Tampa FL', 'Who holds the contract rights — the first person listed is the primary named insured'],
            ['Policy period', '06/01/2026 to 06/01/2027, 12:01 a.m. standard time', 'Coverage starts and ends at <strong>12:01 a.m.</strong> at the insured location'],
            ['Insured location', '414 Palm Ave, Tampa FL 33606', 'The "residence premises" the property coverages attach to'],
            ['Coverages & limits', 'A $350,000 / B $35,000 / C $175,000 / D $105,000 / E $300,000 / F $5,000', 'The most the insurer will pay under each coverage'],
            ['Deductibles', 'All other perils $1,000; hurricane 2% of Coverage A ($7,000)', 'What the insured retains on each loss — note the percentage hurricane deductible'],
            ['Annual premium', '$3,840', 'The insured’s consideration'],
            ['Forms & endorsements', 'HO-3 04/91; water backup; scheduled jewelry', 'Every attached document that is part of the contract'],
            ['Mortgagee', 'Coast Bank ISAOA, loan #88121', 'The lender whose interest is protected by the mortgagee clause (Lesson 2.3)']
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — hurricane deductibles on the dec page',
          html: `<p>Florida requires hurricane deductibles to be disclosed prominently — the policy must display the hurricane deductible in <strong>bold type</strong> and the dec page typically shows it both as a percentage and as its <strong>dollar equivalent</strong> (2% of a $350,000 Coverage A limit = $7,000). Unit 5 covers the hurricane deductible options ($500, 2%, 5%, 10%) in depth; for now, know that a percentage deductible is a percentage of the <em>coverage limit</em>, not of the loss.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the parts of a policy',
          questions: [
            {
              q: 'An insured wants to know how much her policy would pay for her detached garage and what her hurricane deductible is. She should look at the:',
              choices: ['Insuring agreement', 'Conditions', 'Declarations', 'Exclusions'],
              answer: 2,
              explain: 'Limits, deductibles, named insureds, locations, and the policy period all live on the declarations page — the only personalized part of the policy. The insuring agreement is the general promise, not the numbers.'
            },
            {
              q: 'The section of the policy containing the insurer’s basic promise to pay for covered losses is the:',
              choices: ['Insuring agreement', 'Declarations', 'Endorsements', 'Definitions'],
              answer: 0,
              explain: 'The insuring agreement states the insurer’s promise and the scope of covered perils. The declarations personalize that promise with names, limits, and dates.'
            },
            {
              q: 'Throughout a homeowners policy the word "insured" appears in quotation marks. The precise meaning of that word is found in the:',
              choices: ['Declarations', 'Definitions section', 'Conditions', 'Insuring agreement'],
              answer: 1,
              explain: 'Words in quotation marks are defined terms. The definitions section controls their meaning everywhere they appear — a frequent source of coverage disputes and exam questions.'
            },
            {
              q: 'A homeowners policy that begins on June 1 actually starts providing coverage at:',
              choices: ['Noon on June 1', 'Midnight, whenever the premium clears', '9:00 a.m. on June 1', '12:01 a.m. standard time on June 1 at the insured location'],
              answer: 3,
              explain: 'Standard property policies incept at 12:01 a.m. standard time at the described location on the first day of the policy period.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Why exclusions exist (they are not the enemy)</h3>
<p>New licensees often treat exclusions as fine-print trickery. They are actually the pricing engine of the policy. Insurers exclude losses for a handful of predictable reasons, and the exam expects you to recognize them:</p>
<ul>
<li><strong>Catastrophic exposure</strong> — flood, war, and nuclear hazard can strike enormous numbers of insureds at once, breaking the law of large numbers. They are excluded and handled (if at all) by special programs like the NFIP.</li>
<li><strong>Not accidental</strong> — intentional loss, neglect, and wear and tear are not fortuitous, so they are not insurable events at all.</li>
<li><strong>Moral hazard control</strong> — excluding intentional damage and limiting coverage for high-theft valuables keeps dishonest insureds from converting a policy into a payday.</li>
<li><strong>Coverage belongs elsewhere</strong> — the homeowners policy excludes most auto and business exposures because the personal auto policy and commercial policies are built for them. Excluding duplication keeps premiums down.</li>
<li><strong>Uninsurable or better handled by endorsement</strong> — predictable maintenance losses are uninsurable; unusual exposures (a home business, a valuable coin collection) can be bought back by endorsement for those who need them, instead of being baked into everyone’s premium.</li>
</ul>
<h3>Endorsements: the contract’s edit history</h3>
<p>An <span class="kt" title="A written form attached to the policy that adds, removes, or modifies coverage">endorsement</span> (called a <em>rider</em> in life and health insurance) is a form attached to the policy that changes it — adding coverage, removing it, correcting information, or complying with state law. Two rules matter:</p>
<ul>
<li><strong>An endorsement overrides the base policy language wherever the two conflict.</strong> The most recent, most specific document wins.</li>
<li>Endorsements must be listed on the declarations page to be part of the contract — which is why reading the forms list matters.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Endorsement',
          html: `<p>An <strong>endorsement</strong> is a written amendment attached to a property/casualty policy that modifies the original contract. Where an endorsement conflicts with the base policy form, <strong>the endorsement controls</strong>.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A base homeowners form excludes water backing up through sewers and drains. The insured buys a <strong>water backup endorsement</strong> with a $10,000 limit. A drain backup floods the laundry room with $6,000 of damage. The base form says "no"; the endorsement says "yes, up to $10,000." The endorsement controls — the claim is paid (minus the deductible). Without that form listed on the dec page, the answer would still be no.</p>`
        },
        {
          type: 'text',
          html: `<h3>Named peril vs. open peril — and who must prove what</h3>
<p>Insuring agreements come in two flavors, and the difference decides <strong>who carries the burden of proof</strong> after a loss. This idea returns constantly in Units 3 and 4, so plant it now.</p>`
        },
        {
          type: 'compare',
          title: 'Named peril vs. open peril ("special form")',
          left: {
            title: 'Named peril',
            items: [
              'Covers <strong>only the perils listed</strong> in the policy',
              'If the cause of loss is not on the list, there is no coverage',
              '<strong>The insured must prove</strong> the loss was caused by a named peril',
              'Examples: DP-1, DP-2, HO-2, personal property under HO-3'
            ]
          },
          right: {
            title: 'Open peril (special form)',
            items: [
              'Covers <strong>all risks of direct physical loss except</strong> what is excluded',
              'If the cause is not excluded, it is covered',
              '<strong>The insurer must prove</strong> an exclusion applies to deny the claim',
              'Examples: the dwelling under DP-3 and HO-3'
            ]
          }
        },
        {
          type: 'flashcards',
          title: 'Lesson 2.1 key terms',
          cards: [
            { front: 'DICEE', back: 'Declarations, Insuring agreement, Conditions, Exclusions, Endorsements (plus Definitions) — the structure of every policy.' },
            { front: 'Declarations page', back: 'The personalized page: who, what, where, when, limits, deductibles, premium, forms list, mortgagee.' },
            { front: 'Insuring agreement', back: 'The insurer’s core promise to pay for covered losses — named peril or open peril.' },
            { front: 'Conditions', back: 'The rules both parties must follow for the promise to be enforceable.' },
            { front: 'Exclusions', back: 'Losses the policy will not cover — catastrophic, intentional, uninsurable, or belonging in another policy.' },
            { front: 'Endorsement', back: 'An attached form that modifies the policy; it overrides conflicting base-policy language.' },
            { front: 'Named peril form', back: 'Covers only listed perils; the INSURED must prove a listed peril caused the loss.' },
            { front: 'Open peril form', back: 'Covers everything not excluded; the INSURER must prove an exclusion applies.' },
            { front: 'Policy inception time', back: '12:01 a.m. standard time at the insured location on the first day of the period.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — exclusions, endorsements & burden of proof',
          questions: [
            {
              q: 'Flood is excluded from standard homeowners and dwelling policies primarily because:',
              choices: [
                'Flood losses are impossible to measure',
                'Flood is a catastrophic peril that can strike huge numbers of insureds at once',
                'Homeowners never want flood coverage',
                'Federal law prohibits private flood insurance'
              ],
              answer: 1,
              explain: 'Flood violates the "not catastrophic" requirement of an ideally insurable risk — one event hits thousands of homes in the same area, so it is excluded and handled through the NFIP and private flood market (Unit 5). Private flood insurance is legal and growing.'
            },
            {
              q: 'A base policy form and an attached endorsement give conflicting answers about the same loss. The claim will be decided by:',
              choices: [
                'The base policy form, because it was issued first',
                'Whichever document favors the insurer',
                'State arbitration in every case',
                'The endorsement, which overrides conflicting base-policy language'
              ],
              answer: 3,
              explain: 'Endorsements modify the contract; where they conflict with the base form, the endorsement controls. Remember too that ambiguity is construed against the insurer (adhesion, Unit 1) — never automatically in its favor.'
            },
            {
              q: 'Under an open-peril (special form) policy, a claim may be denied only if:',
              choices: [
                'The insurer proves the loss falls under an exclusion',
                'The insured fails to prove the loss was caused by a listed peril',
                'The loss was caused by any peril not specifically listed',
                'The adjuster cannot determine the cause of loss'
              ],
              answer: 0,
              explain: 'Open peril flips the burden of proof: all direct physical loss is covered unless the insurer can show an exclusion applies. Having to prove a listed peril caused the loss is the insured’s burden under a NAMED peril form.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Declarations', def: 'The personalized section of a policy showing the named insured, location, policy period, coverages, limits, deductibles, premium, and attached forms.' },
        { term: 'Insuring agreement', def: 'The section containing the insurer’s promise to pay for covered losses and the scope of perils covered.' },
        { term: 'Conditions', def: 'The section setting out the duties and rules both parties must follow for coverage to apply.' },
        { term: 'Exclusions', def: 'The section listing perils, property, persons, and situations the policy will not cover.' },
        { term: 'Definitions', def: 'The section that fixes the precise meaning of terms shown in quotation marks throughout the policy.' },
        { term: 'Endorsement', def: 'A written form attached to a property/casualty policy that adds, removes, or modifies coverage; it overrides conflicting base-policy language.' },
        { term: 'Rider', def: 'The life and health insurance name for an endorsement.' },
        { term: 'Named peril policy', def: 'A policy covering only the causes of loss specifically listed; the insured must prove a listed peril caused the loss.' },
        { term: 'Open peril policy', def: 'A policy covering all risks of direct physical loss except those excluded; the insurer must prove an exclusion applies. Also called special form.' },
        { term: 'Policy period', def: 'The span during which coverage applies, beginning and ending at 12:01 a.m. standard time at the insured location.' },
        { term: 'Burden of proof', def: 'Who must prove what after a loss: the insured proves a named peril applies; the insurer proves an exclusion applies under open peril.' },
        { term: 'Forms list', def: 'The declarations entry listing every form and endorsement that is part of the contract.' }
      ]
    },

    /* ---------------- Lesson 2.2 ---------------- */
    {
      id: 'u2l2',
      title: 'Valuation, Limits & Deductibles',
      minutes: 17,
      objectives: [
        'Define and apply ACV, replacement cost, agreed value, stated amount, functional replacement cost, and market value',
        'Explain how deductibles work and why they exist',
        'State the 80% insurance-to-value rule and compute a coinsurance penalty with the did/should formula',
        'Recognize that payment never exceeds the limit, the loss, or the insured’s interest'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>How much is the loss worth? Six answers</h3>
<p>Before an insurer can pay a claim, it must put a dollar value on the loss. Policies use several valuation methods, and the exam tests all of them by definition and by math.</p>
<ul>
<li><strong>Actual cash value (ACV)</strong> — the default in much of property insurance: <strong>replacement cost minus depreciation</strong>. The insured absorbs the wear-and-tear the property had already suffered. ACV is the purest expression of indemnity — made whole, not made new.</li>
<li><strong>Replacement cost (RC)</strong> — the cost to repair or replace with <strong>new materials of like kind and quality, with no deduction for depreciation</strong>. The insured gets a new roof for an old roof. Insurers accept this small breach of strict indemnity because it keeps insureds whole in the real world — but they demand adequate insurance-to-value in exchange (the 80% rule below).</li>
<li><strong>Market value</strong> — what a willing buyer would pay for the property, <strong>including the land and location</strong>. Property insurance does <em>not</em> use market value: the land does not burn, and location-driven prices have nothing to do with rebuilding cost.</li>
<li><strong>Agreed value</strong> — insurer and insured agree on the item’s value <strong>up front</strong>, when the policy is written; a total loss pays exactly that amount with no depreciation argument afterward. Used for fine art, antiques, collectibles — things with no easy replacement price.</li>
<li><strong>Stated amount</strong> — a declared maximum: the policy pays the <strong>lesser of</strong> the stated amount, the ACV, or the repair cost. Common for customized vehicles and classic cars. Notice the trap: stated amount is a <em>ceiling</em>, not a guarantee.</li>
<li><strong>Functional replacement cost</strong> — repairs or replaces with <strong>less costly but functionally equivalent</strong> modern materials (drywall instead of hand-finished plaster). Used for older or historic homes where true like-kind replacement would be wildly expensive — it is the valuation idea behind the HO-8 (Unit 4).</li>
</ul>`
        },
        {
          type: 'table',
          caption: 'Valuation methods at a glance',
          headers: ['Method', 'Pays', 'Typical use'],
          rows: [
            ['<strong>Actual cash value</strong>', 'Replacement cost − depreciation', 'Default for personal property; DP-1 dwellings; older roofs under many Florida policies'],
            ['<strong>Replacement cost</strong>', 'Cost of new like kind and quality, no depreciation', 'Dwellings under DP-2/DP-3 and HO forms (with insurance-to-value condition)'],
            ['<strong>Market value</strong>', 'Sale price including land/location', '<em>Not used</em> in property insurance — a distractor on exams'],
            ['<strong>Agreed value</strong>', 'A value fixed at policy inception', 'Fine art, antiques, collectibles, scheduled valuables'],
            ['<strong>Stated amount</strong>', 'Lesser of stated amount, ACV, or repair cost', 'Classic/customized autos'],
            ['<strong>Functional replacement cost</strong>', 'Modern, functionally equivalent materials', 'Older/historic homes (HO-8 concept)']
          ]
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Actual Cash Value',
          html: `<p><strong>ACV = Replacement Cost − Depreciation.</strong> Depreciation reflects age, wear, and obsolescence. A 10-year-old roof halfway through a 20-year life has lost roughly half its value — and an ACV settlement pays accordingly.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A hailstorm destroys a roof that costs <strong>$20,000</strong> to replace new. The roof was 10 years into a 20-year expected life, so it was <strong>50% depreciated</strong>. ACV settlement: $20,000 − $10,000 depreciation = <strong>$10,000</strong>, minus the deductible. Under a replacement cost policy the insurer would pay the full $20,000 (minus the deductible), usually releasing the held-back depreciation once repairs are completed (Lesson 2.4).</p>`
        },
        {
          type: 'chart',
          chartType: 'line',
          title: 'RC vs. ACV payout on a $20,000 roof as it ages',
          labels: ['New', '5 yrs', '10 yrs', '15 yrs', '20 yrs'],
          datasets: [
            { label: 'Replacement cost payout', data: [20000, 20000, 20000, 20000, 20000] },
            { label: 'ACV payout', data: [20000, 15000, 10000, 5000, 0] }
          ],
          note: 'Illustrative straight-line depreciation over a 20-year useful life, before deductible. The gap between the lines is the depreciation the insured absorbs under an ACV settlement — and why roof age dominates Florida underwriting.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — valuation methods',
          questions: [
            {
              q: 'A fire destroys a 6-year-old water heater that costs $1,500 to replace new and had a 12-year useful life. Under an ACV policy with no deductible, the insured collects:',
              choices: ['$1,500', '$1,250', '$750', '$125'],
              answer: 2,
              explain: 'The heater was 6/12 = 50% depreciated. ACV = $1,500 replacement cost − $750 depreciation = $750. The full $1,500 would be a replacement cost settlement.'
            },
            {
              q: 'The valuation method best suited to a one-of-a-kind antique armoire, where insurer and insured fix the value when the policy is written, is:',
              choices: ['Agreed value', 'Actual cash value', 'Functional replacement cost', 'Market value'],
              answer: 0,
              explain: 'Agreed value sets the payout in advance, eliminating depreciation disputes for items with no ready replacement market. Stated amount, by contrast, is only a ceiling — it pays the lesser of stated amount, ACV, or repair cost.'
            },
            {
              q: 'Why is market value NOT used to settle dwelling losses?',
              choices: [
                'Market value is always lower than replacement cost',
                'State law prohibits insurers from knowing market values',
                'Market value can only be determined after a sale',
                'Market value includes land and location, which are not destroyed by the loss'
              ],
              answer: 3,
              explain: 'A fire does not consume the lot or the neighborhood. Rebuilding cost — not sale price — measures the actual loss, so policies use replacement cost or ACV, never market value.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Deductibles: retention you choose on purpose</h3>
<p>A <span class="kt" title="The amount of each covered loss the insured pays before the insurer pays">deductible</span> is the slice of every covered loss the insured pays first; the insurer pays the rest, up to the limit. Deductibles exist for two reasons you should be able to recite: they <strong>eliminate small nuisance claims</strong> (which cost more to adjust than to pay), and they <strong>give the insured a financial stake in preventing losses</strong>, reducing morale hazard. The reward for accepting a larger deductible is a <strong>lower premium</strong> — the insured is retaining more risk (Unit 1’s retention technique in action).</p>
<p>Two mechanics matter for the exam:</p>
<ul>
<li><strong>Flat (dollar) deductibles</strong> apply per occurrence: a $1,000 deductible comes off the top of each separate covered loss.</li>
<li><strong>Percentage deductibles</strong> — standard for hurricane coverage in Florida — are a percentage <strong>of the coverage limit, not of the loss</strong>. A 2% hurricane deductible on $350,000 of Coverage A is $7,000, whether the loss is $10,000 or $300,000.</li>
</ul>
<h3>Insurance to value and the 80% rule</h3>
<p>Replacement cost coverage comes with a string attached. Most partial losses are small, so an underinsured homeowner could buy half the coverage, pay half the premium, and still collect in full on the typical kitchen fire. To keep that from gutting the premium pool, property policies require the insured to carry coverage equal to at least <strong>80% of the building’s replacement cost</strong> at the time of loss. Carry at least 80% and partial losses are paid at <strong>full replacement cost</strong> (up to the limit). Carry less, and the policy pays only a <strong>proportion</strong> of the loss — the coinsurance penalty.</p>`
        },
        {
          type: 'steps',
          title: 'The coinsurance formula, step by step',
          items: [
            { title: 'Find what the insured SHOULD carry', text: 'Multiply the building’s replacement cost at the time of loss by the coinsurance percentage — usually 80%. RC $400,000 × 80% = $320,000 required.' },
            { title: 'Build the fraction: DID over SHOULD', text: 'Divide the amount of insurance actually carried by the required amount. Carried $240,000 ÷ required $320,000 = 0.75.' },
            { title: 'Multiply the fraction by the loss', text: 'The policy pays only that share of the loss: 0.75 × $40,000 loss = $30,000.' },
            { title: 'Subtract the deductible', text: '$30,000 − $1,000 deductible = $29,000 paid.' },
            { title: 'Apply the ceilings', text: 'The insurer never pays more than the policy limit, more than the actual loss, or more than the insured’s interest — whichever is least.' }
          ]
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example #1 — underinsured',
          html: `<p>Replacement cost of the home: <strong>$400,000</strong>. Required: 80% × $400,000 = <strong>$320,000</strong>. The insured carries only <strong>$240,000</strong>. A kitchen fire causes a <strong>$40,000</strong> loss; the deductible is <strong>$1,000</strong>.</p>
<p>Did ÷ should = $240,000 ÷ $320,000 = <strong>0.75</strong>. Payment = 0.75 × $40,000 = $30,000, minus $1,000 = <strong>$29,000</strong>. The insured eats $11,000 of a fully covered peril purely for being underinsured.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example #2 — and the no-penalty case',
          html: `<p>Replacement cost <strong>$250,000</strong>; required 80% = <strong>$200,000</strong>; carried <strong>$150,000</strong>; windstorm loss <strong>$80,000</strong>; deductible <strong>$500</strong>. Did ÷ should = $150,000 ÷ $200,000 = 0.75. Payment = 0.75 × $80,000 = $60,000 − $500 = <strong>$59,500</strong>.</p>
<p>Now rerun it with adequate coverage: had she carried $200,000 (the full 80%), the same loss would pay <strong>$79,500</strong> — the entire $80,000 at replacement cost, minus the $500 deductible. Carrying at least 80% switches the penalty off.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Exam traps to dodge: the percentage in a hurricane deductible applies to the <strong>Coverage A limit, not the loss</strong>. The coinsurance fraction is <strong>did over should</strong> — flipping it is the most common math error. And no matter what the formula produces, payment is capped at the <strong>least of</strong> the adjusted loss, the policy limit, and the insured’s insurable interest.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 2.2 key terms',
          cards: [
            { front: 'Actual cash value (ACV)', back: 'Replacement cost minus depreciation — made whole, not made new.' },
            { front: 'Replacement cost (RC)', back: 'Cost of new property of like kind and quality, with NO deduction for depreciation.' },
            { front: 'Market value', back: 'Sale price including land and location — NOT used to settle property losses.' },
            { front: 'Agreed value', back: 'Value fixed at policy inception; a total loss pays exactly that amount. For art, antiques, collectibles.' },
            { front: 'Stated amount', back: 'Pays the LESSER of the stated amount, ACV, or repair cost — a ceiling, not a promise.' },
            { front: 'Functional replacement cost', back: 'Repairs with modern, functionally equivalent (cheaper) materials — the HO-8 idea for older homes.' },
            { front: '80% coinsurance formula', back: '(Did ÷ Should) × Loss − Deductible. "Should" = replacement cost × 80%.' },
            { front: 'Percentage deductible', back: 'A percentage of the COVERAGE LIMIT (not the loss) — Florida hurricane deductibles work this way.' },
            { front: 'Why deductibles exist', back: 'Eliminate small claims and reduce morale hazard; bigger deductible = lower premium.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — compute the claim',
          questions: [
            {
              q: 'A home has a replacement cost of $300,000 and the policy has an 80% coinsurance requirement. The owner carries $180,000 of coverage. A fire causes $60,000 of damage and the deductible is $1,000. The policy pays:',
              choices: ['$45,000', '$44,000', '$59,000', '$60,000'],
              answer: 1,
              explain: 'Should = $300,000 × 80% = $240,000. Did ÷ should = $180,000 ÷ $240,000 = 0.75. 0.75 × $60,000 = $45,000 − $1,000 deductible = $44,000. Choosing $45,000 means you forgot the deductible; $59,000 means you skipped the coinsurance penalty.'
            },
            {
              q: 'A home with a $400,000 replacement cost is insured for $320,000 under a policy with an 80% coinsurance clause. A $50,000 partial loss occurs ($1,000 deductible). The insurer pays:',
              choices: ['$49,000 — the insured met the 80% requirement, so the loss is paid in full minus the deductible', '$40,000', '$39,000', '$32,000'],
              answer: 0,
              explain: 'Required coverage is 80% × $400,000 = $320,000, which is exactly what she carries. The did/should fraction is 1.00 — no penalty. Payment = $50,000 − $1,000 = $49,000.'
            },
            {
              q: 'A Florida policy carries a 2% hurricane deductible and a Coverage A limit of $250,000. After hurricane damage of $30,000, the insured’s deductible is:',
              choices: ['$600', '$2,500', '$5,000', '$2,000'],
              answer: 2,
              explain: 'Percentage hurricane deductibles apply to the Coverage A limit: 2% × $250,000 = $5,000. Applying 2% to the $30,000 loss ($600) is the classic trap.'
            },
            {
              q: 'Raising a policy deductible from $500 to $2,500 will generally:',
              choices: [
                'Increase the premium, because the insurer takes on more risk',
                'Have no effect on premium',
                'Void replacement cost coverage',
                'Lower the premium, because the insured retains more of each loss'
              ],
              answer: 3,
              explain: 'A larger deductible is greater retention: the insured absorbs more small losses, the insurer adjusts fewer nuisance claims, and the premium drops in exchange.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Actual cash value (ACV)', def: 'Replacement cost minus depreciation; the default measure of indemnity for much of property insurance.' },
        { term: 'Replacement cost (RC)', def: 'The cost to repair or replace property with new materials of like kind and quality, without deduction for depreciation.' },
        { term: 'Depreciation', def: 'Loss in value from age, wear, and obsolescence; the difference between replacement cost and ACV.' },
        { term: 'Market value', def: 'The price property would bring in a sale, including land and location; not used to settle property insurance losses.' },
        { term: 'Agreed value', def: 'A valuation method in which insurer and insured fix the property’s value when the policy is written; a total loss pays that amount.' },
        { term: 'Stated amount', def: 'A valuation method paying the lesser of the stated amount, the ACV, or the cost to repair or replace.' },
        { term: 'Functional replacement cost', def: 'Settlement using less expensive but functionally equivalent modern materials; used for older or historic buildings.' },
        { term: 'Deductible', def: 'The portion of each covered loss the insured pays before the insurer pays; larger deductibles lower premiums.' },
        { term: 'Percentage deductible', def: 'A deductible calculated as a percentage of the coverage limit (not the loss); standard for Florida hurricane coverage.' },
        { term: 'Insurance to value', def: 'Carrying a limit that reflects the property’s full replacement cost, so premiums and exposures stay aligned.' },
        { term: 'Coinsurance clause', def: 'A condition requiring the insured to carry at least a stated percentage (usually 80%) of replacement cost or face a proportional payment penalty.' },
        { term: 'Coinsurance formula', def: 'Did ÷ should, multiplied by the loss, minus the deductible — capped at the limit, the loss, and the insured’s interest.' },
        { term: 'Limit of liability', def: 'The maximum amount the insurer will pay under a coverage, shown on the declarations.' }
      ]
    },

    /* ---------------- Lesson 2.3 ---------------- */
    {
      id: 'u2l3',
      title: 'Conditions Everyone Skips (and the Exam Loves)',
      minutes: 17,
      objectives: [
        'List the insured’s duties after a loss, including notice and proof of loss',
        'Distinguish appraisal from arbitration and compute a pro-rata other-insurance split',
        'Explain subrogation, assignment, abandonment, and salvage',
        'Define vacancy vs. unoccupancy and describe the mortgagee clause, policy territory, and liberalization'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Duties after loss: the insured’s side of the deal</h3>
<p>The conditions section is where the policy stops promising and starts demanding. Because the contract is <strong>conditional</strong> (Unit 1), the insurer’s duty to pay depends on the insured performing these duties after a loss:</p>
<ul>
<li><strong>Give prompt notice</strong> to the insurer or agent (and to the police if a law was broken — theft — or to the credit card company for card losses).</li>
<li><strong>Protect the property from further damage</strong> and make reasonable emergency repairs — the policy reimburses reasonable repair costs, but it will not pay for rain pouring through a hole the insured never tarped.</li>
<li><strong>Prepare an inventory</strong> of damaged personal property with details and supporting documents.</li>
<li><strong>Show the damaged property</strong> as often as reasonably required, provide records, and <strong>submit to examination under oath</strong> if asked.</li>
<li><strong>File a signed, sworn proof of loss</strong> — the insured’s formal statement of the claim — within the time stated in the policy (commonly <strong>60 days after the insurer’s request</strong>).</li>
<li><strong>Cooperate</strong> with the investigation and settlement.</li>
</ul>
<p>Breach a duty in a way that prejudices the insurer and the claim can be denied — which is why a customer representative’s first-call coaching ("tarp the roof, photograph everything, keep the receipts") genuinely protects the customer.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the claim clock',
          html: `<p>Florida sets hard deadlines around property claims. After the 2022–2023 reforms, a policyholder must give the insurer <strong>notice of a new or reopened claim within 1 year</strong> of the date of loss (down from 3 years), and <strong>notice of a supplemental claim within 18 months</strong>. The insurer’s own deadlines (acknowledge within 7 days, pay or deny within 60 days) are covered with the rest of Florida claims law in Unit 5 — but the 1-year/18-month insured-side deadlines belong in your memory now.</p>`
        },
        {
          type: 'table',
          caption: 'The common policy conditions — cheat sheet',
          headers: ['Condition', 'What it says', 'Exam angle'],
          rows: [
            ['<strong>Appraisal</strong>', 'Either party may demand appraisal when the dispute is over the AMOUNT of loss', 'Amount disputes only — not coverage disputes; each side hires an appraiser, the appraisers pick an umpire, agreement of any two binds'],
            ['<strong>Other insurance (pro-rata)</strong>', 'If two policies cover the same loss, each pays its proportional share', 'Share = that policy’s limit ÷ total of all limits — worked example below'],
            ['<strong>Subrogation</strong>', 'After paying, the insurer takes over the insured’s right to recover from the responsible third party', 'Insured must do nothing after a loss to impair the insurer’s recovery rights'],
            ['<strong>Assignment</strong>', 'The policy cannot be transferred to someone else without the insurer’s written consent', 'Because the contract is personal — it insures a person’s interest, not the property itself'],
            ['<strong>Abandonment</strong>', 'The insured may NOT dump damaged property on the insurer and demand its full value', 'No abandonment, ever; common distractor'],
            ['<strong>Salvage</strong>', 'Once the insurer pays for the property, it may take the damaged property and sell it', 'Salvage rights offset the insurer’s payout; the insured cannot keep both the money and the wreck'],
            ['<strong>Vacancy vs. unoccupancy</strong>', 'Vacant = no people AND no contents; unoccupied = furnished but nobody living there', 'Extended vacancy (commonly 60 days) suspends perils like vandalism and glass breakage'],
            ['<strong>Mortgagee clause</strong>', 'Protects the lender’s interest independently of the insured', 'Lender gets loss payment as interests appear, advance notice of cancellation, and can pay premium to keep the policy alive'],
            ['<strong>Policy territory</strong>', 'Where coverage applies', 'Standard property forms: the United States, its territories and possessions, and Canada'],
            ['<strong>Liberalization</strong>', 'If the insurer broadens coverage without extra premium, in-force policies get the broader coverage automatically', 'Applies only to broadenings, never restrictions'],
            ['<strong>Suit against us</strong>', 'The insured must comply with all conditions before suing and must sue within the stated period', 'In Florida property policies the suit window is set by statute — and conditions precedent matter']
          ]
        },
        {
          type: 'text',
          html: `<h3>Appraisal vs. arbitration — different fights, different referees</h3>
<p><strong>Appraisal</strong> resolves exactly one kind of fight: <em>how much</em> the loss is worth, when both sides agree the loss is covered. Either party demands it in writing; <strong>each party hires its own competent appraiser and pays that appraiser; the two appraisers select an umpire</strong>; and a written agreement of <strong>any two of the three</strong> sets the amount. The umpire’s cost is shared equally. Appraisal does not decide whether the policy covers the loss at all.</p>
<p><strong>Arbitration</strong> is the broader tool: a neutral arbitrator (or panel) can resolve wider disputes between the parties — including coverage questions — when the policy or the parties agree to it, and its decision is generally binding. The exam-ready distinction: <strong>appraisal = amount only; arbitration = broader disputes</strong>.</p>
<h3>Other insurance: the pro-rata split</h3>
<p>When two policies cover the same property and the same loss, the principle of indemnity forbids collecting twice. Property policies handle the overlap with <strong>pro-rata contribution</strong> (contribution by equal shares exists too, mostly in liability forms — pro-rata is what the property exam tests). Each insurer pays the proportion of the loss that <strong>its limit bears to the total of all limits</strong>.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example — pro-rata contribution',
          html: `<p>A home is mistakenly insured under two policies: Insurer A with a <strong>$100,000</strong> limit and Insurer B with <strong>$300,000</strong>. Total insurance = $400,000. A covered fire causes a <strong>$40,000</strong> loss.</p>
<p>Insurer A pays $100,000 ÷ $400,000 = 25% of the loss = <strong>$10,000</strong>. Insurer B pays $300,000 ÷ $400,000 = 75% = <strong>$30,000</strong>. The insured collects exactly $40,000 — indemnified once, never twice.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Pro-rata sharing of the $40,000 loss',
          labels: ['Insurer A — $100,000 limit (25%)', 'Insurer B — $300,000 limit (75%)'],
          datasets: [{ label: 'Share of loss paid', data: [10000, 30000] }],
          note: 'Each insurer pays the share of the loss that its limit bears to the total limits ($400,000). The split tracks limits, not who was the "first" or "older" policy.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — duties, appraisal & sharing',
          questions: [
            {
              q: 'An insurer and its insured agree a kitchen fire is covered but are $18,000 apart on what the repairs are worth. The policy condition designed for this dispute is:',
              choices: ['Appraisal', 'Subrogation', 'Liberalization', 'Abandonment'],
              answer: 0,
              explain: 'Appraisal settles disputes over the AMOUNT of a covered loss: each side hires an appraiser, the appraisers choose an umpire, and any two of the three bind both parties. It does not decide coverage questions.'
            },
            {
              q: 'Two policies cover the same dwelling: Insurer X for $50,000 and Insurer Y for $150,000. A covered $20,000 loss occurs. Under pro-rata other insurance, Insurer Y pays:',
              choices: ['$20,000', '$10,000', '$15,000', '$5,000'],
              answer: 2,
              explain: 'Y’s share = $150,000 ÷ $200,000 total = 75%; 75% × $20,000 = $15,000. Insurer X pays the remaining $5,000 (25%). The insured never collects more than the $20,000 loss.'
            },
            {
              q: 'After a windstorm tears a hole in the roof, the insured does nothing for two weeks and rain ruins the living room. The insurer may refuse to pay the rain damage because the insured breached the duty to:',
              choices: ['Submit to appraisal', 'Protect the property from further damage', 'Assign the policy', 'File suit within the policy period'],
              answer: 1,
              explain: 'Duties after loss require reasonable steps — like tarping the roof — to prevent further damage. The policy reimburses reasonable emergency repairs, but it will not pay for preventable aggravation of the loss.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Subrogation: the insurer steps into your shoes</h3>
<p><span class="kt" title="The insurer’s right, after paying a loss, to recover from the third party who caused it">Subrogation</span> means that once the insurer pays your loss, it acquires <strong>your legal right to recover from whoever caused it</strong>. A neighbor’s contractor burns down your fence; your insurer pays you, then pursues the contractor. Subrogation serves indemnity twice over: the <strong>negligent party — not the premium pool — ultimately bears the cost</strong>, and the insured cannot collect from both the insurer and the wrongdoer and come out ahead. The tested duty: <strong>after a loss, the insured must do nothing to impair the insurer’s subrogation rights</strong> — signing a release with the at-fault party can void coverage. (Policies do permit waiving recovery rights <em>in writing before</em> a loss.)</p>
<h3>Assignment, abandonment & salvage</h3>
<p><strong>Assignment:</strong> because property insurance is a personal contract, the policy cannot be transferred to a new owner <strong>without the insurer’s written consent</strong>. Selling the house does not sell the policy. <strong>Abandonment:</strong> the insured can never force the insurer to take damaged property and pay its full value — there is <strong>no abandonment</strong> in property insurance. <strong>Salvage:</strong> the flip side — when the insurer chooses to pay for property (say, totals a shed full of smoke-damaged contents), it may <strong>take the salvage</strong> and resell it to offset the payout.</p>
<h3>Vacancy, the mortgagee, territory & liberalization</h3>
<p><strong>Vacant</strong> means the residents <em>and their belongings</em> are gone; <strong>unoccupied</strong> means the furniture stayed but the people are away (a snowbird’s summer, a hospital stay). The distinction has teeth: after a long vacancy — <strong>commonly 60 consecutive days</strong> — policies suspend or restrict perils like vandalism, glass breakage, and water damage, because empty buildings attract trouble. Unoccupancy alone does not trigger the restriction.</p>
<p>The <strong>mortgagee clause</strong> (standard mortgage clause) makes the lender a protected party whose rights are <strong>independent of the insured’s conduct</strong>: the lender is paid <strong>as its interest appears</strong> (up to the loan balance), collects <strong>even if the insured’s own claim is denied</strong> for fraud or intentional acts, must receive <strong>advance written notice</strong> before cancellation or nonrenewal, and may <strong>pay the premium</strong> to keep the policy alive. In exchange the lender must notify the insurer of changes in ownership or occupancy it learns about, and if the insurer pays the lender on a claim it denied to the insured, the insurer takes over that much of the mortgage debt.</p>
<p><strong>Policy territory</strong> for standard property forms is the <strong>United States, its territories and possessions, and Canada</strong>. <strong>Liberalization</strong> says that if the insurer broadens the form without charging more premium, existing policyholders get the broadened coverage <strong>automatically</strong> — no endorsement needed. It never applies to restrictions.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Distractor alert: <strong>abandonment is never allowed</strong>, but <strong>salvage is the insurer’s option</strong>. The insured cannot force property onto the insurer; the insurer can choose to take it after paying. Questions love to swap these.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>An insured deliberately burns his own house. His claim is denied — intentional loss. But Coast Bank, the mortgagee, still collects its <strong>$180,000 loan balance</strong> under the mortgagee clause, because the lender’s protection is independent of the insured’s misconduct. The insurer then steps into the bank’s shoes for that $180,000 of mortgage debt and pursues the arsonist-insured.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 2.3 key terms',
          cards: [
            { front: 'Proof of loss', back: 'The insured’s signed, sworn statement of claim — commonly due within 60 days of the insurer’s request.' },
            { front: 'Appraisal', back: 'Resolves disputes over the AMOUNT of loss only: two appraisers + an umpire; any two bind.' },
            { front: 'Pro-rata other insurance', back: 'Each insurer pays: (its limit ÷ total limits) × the loss.' },
            { front: 'Subrogation', back: 'After paying, the insurer takes the insured’s right to recover from the at-fault party. Don’t impair it.' },
            { front: 'Assignment', back: 'Transferring the policy requires the insurer’s written consent — it’s a personal contract.' },
            { front: 'Abandonment', back: 'Never allowed — the insured cannot force damaged property onto the insurer.' },
            { front: 'Vacant vs. unoccupied', back: 'Vacant = no people, no contents. Unoccupied = contents remain. Vacancy 60+ days suspends certain perils.' },
            { front: 'Mortgagee clause', back: 'Lender paid as interests appear, even if the insured’s claim is denied; gets notice of cancellation; may pay premium.' },
            { front: 'Liberalization', back: 'Free broadenings of the form apply automatically to in-force policies.' },
            { front: 'Florida claim notice', back: '1 year to report a new/reopened claim; 18 months for a supplemental claim (2022-23 reforms).' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — subrogation, salvage & the lender',
          questions: [
            {
              q: 'After a covered collision caused by another driver, an insured accepts $500 from the at-fault driver and signs a release of all claims, then files with her own insurer. The insurer may:',
              choices: [
                'Pay the claim and recover from the at-fault driver anyway',
                'Pay double damages',
                'Cancel the at-fault driver’s policy',
                'Deny the claim because the insured impaired its subrogation rights'
              ],
              answer: 3,
              explain: 'Signing a release destroyed the insurer’s right to recover from the responsible party. The conditions require the insured to do nothing after a loss to impair subrogation — breaching that duty jeopardizes the claim.'
            },
            {
              q: 'A snowbird leaves her fully furnished Naples condo every summer for five months. During that time the unit is best described as:',
              choices: ['Vacant', 'Unoccupied', 'Abandoned', 'Uninsurable'],
              answer: 1,
              explain: 'The contents remain, so the home is unoccupied, not vacant. Vacancy — no people AND no property — is what triggers the suspension of perils like vandalism after the stated period (commonly 60 days).'
            },
            {
              q: 'Which statement about the standard mortgagee clause is TRUE?',
              choices: [
                'The mortgagee can collect even when the insured’s claim is denied for an intentional act',
                'The mortgagee’s rights end the moment the insured breaches a policy condition',
                'The mortgagee is paid the full policy limit regardless of the loan balance',
                'The mortgagee may never pay the premium on the insured’s behalf'
              ],
              answer: 0,
              explain: 'The lender’s protection is independent of the insured’s conduct: it is paid as its interest appears (up to the loan balance), receives advance notice of cancellation, and may pay premium to keep coverage alive.'
            },
            {
              q: 'An insurer pays a total loss on smoke-damaged furniture and then sells the furniture to a restoration liquidator. The insurer is exercising its right of:',
              choices: ['Abandonment', 'Liberalization', 'Salvage', 'Assignment'],
              answer: 2,
              explain: 'Once the insurer pays for property, it may take and sell the salvage to offset the payout. Abandonment is the insured trying to force property on the insurer — which is never allowed.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Duties after loss', def: 'The insured’s post-loss obligations: prompt notice, protecting property, inventory, exhibiting property, proof of loss, and cooperation.' },
        { term: 'Proof of loss', def: 'The insured’s signed, sworn formal statement of claim, commonly due within 60 days after the insurer requests it.' },
        { term: 'Appraisal (condition)', def: 'A method for resolving disputes over the amount of a covered loss: each party’s appraiser plus an umpire; agreement of any two binds.' },
        { term: 'Umpire', def: 'The neutral third party selected by the two appraisers; the umpire’s cost is shared equally.' },
        { term: 'Arbitration', def: 'Dispute resolution by a neutral arbitrator whose decision is generally binding; broader in scope than appraisal.' },
        { term: 'Other insurance clause', def: 'A condition coordinating overlapping policies — in property forms, each insurer pays pro-rata by limits.' },
        { term: 'Pro-rata contribution', def: 'Each policy pays the share of the loss its limit bears to the total of all limits covering the loss.' },
        { term: 'Subrogation', def: 'The insurer’s right, after paying a loss, to take over the insured’s claim against the responsible third party.' },
        { term: 'Assignment', def: 'Transfer of the policy to another party; valid only with the insurer’s written consent.' },
        { term: 'Abandonment condition', def: 'The insured may not abandon damaged property to the insurer and demand its full value.' },
        { term: 'Salvage', def: 'The insurer’s right to take and sell property it has paid for, offsetting the claim payment.' },
        { term: 'Vacancy', def: 'A dwelling without occupants AND without contents; extended vacancy (commonly 60 days) suspends certain perils.' },
        { term: 'Unoccupancy', def: 'A dwelling whose occupants are away but whose contents remain; does not trigger vacancy restrictions by itself.' },
        { term: 'Mortgagee clause', def: 'A provision protecting the lender: payment as interests appear, rights independent of the insured’s acts, notice of cancellation, and the option to pay premium.' },
        { term: 'Liberalization clause', def: 'A condition extending free coverage broadenings automatically to existing policies.' }
      ]
    },

    /* ---------------- Lesson 2.4 ---------------- */
    {
      id: 'u2l4',
      title: 'People & Interests in the Policy',
      minutes: 13,
      objectives: [
        'Distinguish the named insured, insureds, and additional insureds',
        'Classify claims as first-party or third-party',
        'Compare the rights of a mortgagee and a loss payee',
        'Trace a property claim from notice through investigation to settlement, including the RC holdback workflow'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Who is "the insured," exactly?</h3>
<p>Policies protect people in layers, and exam questions hinge on which layer someone occupies:</p>
<ul>
<li><strong>Named insured</strong> — the person or persons listed by name on the declarations. The <strong>first named insured</strong> has special contract powers: receiving notices, requesting changes, canceling the policy, and the duty to pay premium. A <strong>resident spouse</strong> is generally treated as a named insured even if not listed.</li>
<li><strong>Insured</strong> — a broader, defined class who get coverage without being listed: typically <strong>resident relatives</strong> of the named insured’s household and <strong>persons under a stated age (commonly under 21) in the care of</strong> the named insured or a resident relative. The definitions section controls.</li>
<li><strong>Additional insured</strong> — an outside person or entity added by endorsement because they have an insurable interest or liability exposure tied to the insured’s property or activities: a co-owner, a landlord listed on a tenant’s policy, a trust holding title to the home.</li>
</ul>
<h3>First party vs. third party</h3>
<p>The simplest sorting question in claims: <strong>who is making the claim against whom?</strong></p>`
        },
        {
          type: 'compare',
          title: 'First-party vs. third-party claims',
          left: {
            title: 'First-party claim',
            items: [
              'The <strong>insured</strong> claims under their <strong>own policy</strong>',
              'Property coverages: your house burns, your contents are stolen',
              'Insurer’s duty runs directly to its policyholder',
              'Valuation rules (ACV/RC), deductibles, and proof of loss apply'
            ]
          },
          right: {
            title: 'Third-party claim',
            items: [
              'An <strong>outside party</strong> claims against the insured, and the <strong>liability coverage</strong> responds',
              'A guest trips on your stairs; your dog bites a neighbor',
              'Insurer defends the insured and pays the third party on the insured’s behalf',
              'No deductible on personal liability coverages; the duty to defend is owed to the insured'
            ]
          }
        },
        {
          type: 'text',
          html: `<h3>Lenders in the policy: mortgagee vs. loss payee</h3>
<p>Both are creditors protected because they have an insurable interest in property they financed — the difference is the kind of property and the strength of their rights.</p>`
        },
        {
          type: 'table',
          caption: 'Mortgagee vs. loss payee',
          headers: ['Feature', 'Mortgagee', 'Loss payee'],
          rows: [
            ['Type of property', '<strong>Real property</strong> — the home and the land', '<strong>Personal property</strong> — a financed car, boat, or equipment'],
            ['How they appear', 'Named in the mortgagee clause on the dec page', 'Named in a loss payable provision/endorsement'],
            ['Claim payment', 'Paid <strong>as interests appear</strong>, jointly or directly, up to the loan balance', 'Named on the settlement check with the insured'],
            ['If the insured’s claim is denied', '<strong>Still protected</strong> — rights independent of the insured’s acts (standard mortgagee clause)', 'Generally <strong>shares the insured’s fate</strong> — a simple loss payee has no independent right of recovery'],
            ['Notices', 'Entitled to advance written notice of cancellation/nonrenewal; may pay premium', 'Typically entitled to notice of cancellation under the loss payable endorsement']
          ]
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Additional Insured',
          html: `<p>An <strong>additional insured</strong> is a person or organization added to the policy by endorsement so that the policy’s protection extends to them — because of ownership, financial interest, or potential liability arising from the named insured’s property or operations. Unlike a mortgagee or loss payee, an additional insured gets <em>coverage status</em>, not just payment rights.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Quick sort for the exam: lender on the <strong>house</strong> = <strong>mortgagee</strong>. Lender on the <strong>car or boat</strong> = <strong>loss payee</strong>. Landlord wanting protection under a tenant’s liability policy = <strong>additional insured</strong>. A spouse living in the home = treated as a <strong>named insured</strong> automatically.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — people in the policy',
          questions: [
            {
              q: 'A neighbor injured by the insured’s dog files a claim under the insured’s homeowners liability coverage. This is a:',
              choices: ['First-party property claim', 'Subrogation claim', 'Third-party claim', 'Salvage claim'],
              answer: 2,
              explain: 'A third-party claim is brought by someone outside the policy against the insured; the liability coverage defends the insured and pays the injured party. A first-party claim is the insured claiming under their own policy.'
            },
            {
              q: 'A credit union finances the insured’s boat and wants its interest protected on the boat policy. The credit union should be listed as a:',
              choices: ['Mortgagee', 'Loss payee', 'Named insured', 'Beneficiary'],
              answer: 1,
              explain: 'Lenders on personal property (cars, boats, equipment) are loss payees — named on settlement checks. Mortgagee status, with its stronger independent rights, applies to lenders on real property.'
            },
            {
              q: 'The 12-year-old foster child living in the named insured’s household is covered by the homeowners policy because she is:',
              choices: [
                'A loss payee',
                'An additional insured added by endorsement',
                'The first named insured',
                'An "insured" under the policy definitions — a minor in the care of the named insured'
              ],
              answer: 3,
              explain: 'The definition of "insured" typically includes resident relatives and persons under 21 in the care of the named insured or a resident relative — no endorsement needed.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>How a property claim actually flows</h3>
<p>A customer representative is usually the <strong>first notice of loss</strong> — the person who takes the panicked phone call. Knowing the downstream process lets you set accurate expectations (and avoid practicing claims adjusting without a license).</p>
<p><strong>Notice → investigation → settlement.</strong> After notice, the file goes to an adjuster. Know the three adjuster types: a <strong>staff adjuster</strong> is the insurer’s employee; an <strong>independent adjuster</strong> is hired by the insurer as a contractor (surge capacity after hurricanes); a <strong>public adjuster</strong> is hired by — and represents — <strong>the insured</strong>, for a fee regulated in Florida. The adjuster verifies coverage, investigates cause and value, and then settlement happens one of several ways: the insurer may <strong>pay the loss in money, or repair, rebuild, or replace</strong> the property (its option under most forms); the parties may reach a <strong>negotiated settlement</strong>; or a value dispute may go to <strong>appraisal</strong> and be set by the appraisers and umpire.</p>
<h4>The replacement-cost holdback</h4>
<p>RC settlements usually arrive in two checks. The insurer first pays the <strong>ACV of the loss</strong>, withholding the depreciation. When the insured actually completes repairs or replacement, the insurer releases the <strong>recoverable depreciation</strong> — the difference between RC and ACV. The holdback enforces indemnity: nobody pockets new-roof money while living under the old tarp. Most forms also let the insured initially claim ACV and later make an RC claim within a stated time after the loss.</p>`
        },
        {
          type: 'steps',
          title: 'Life of a first-party property claim',
          items: [
            { title: 'First notice of loss', text: 'The insured reports the loss to the agency or carrier. The CR documents date, cause, and damage, reminds the insured of duties (protect the property, keep receipts, photos), and transmits the claim promptly.' },
            { title: 'Acknowledgment & assignment', text: 'The insurer acknowledges the claim and assigns a staff or independent adjuster. In Florida the acknowledgment clock is short — see the callout below.' },
            { title: 'Investigation', text: 'The adjuster confirms coverage (policy in force? peril covered? exclusions?), inspects, documents scope of damage, and may request records, an examination under oath, or a proof of loss.' },
            { title: 'Valuation', text: 'Scope is priced. ACV settlements subtract depreciation; RC settlements compute full replacement cost subject to the insurance-to-value condition (Lesson 2.2).' },
            { title: 'Settlement & payment', text: 'Pay, repair, or replace — negotiated, or set by appraisal if the parties disagree on amount. Checks include the mortgagee or loss payee as their interests appear.' },
            { title: 'Recoverable depreciation release', text: 'On RC policies, the depreciation holdback is paid once the insured completes repairs and submits documentation.' }
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — insurer claim deadlines (preview)',
          html: `<p>Under Florida’s post-2022 claims timeline, a property insurer must <strong>acknowledge the claim within 7 days</strong>, begin its investigation and conduct any physical inspection <strong>within 30 days</strong> (when required), and <strong>pay or deny the claim within 60 days</strong> — a window the 2022–2023 reforms cut from 90 days. Unit 5 drills these numbers; recognize them now so the claims-flow picture is complete.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 2.4 key terms',
          cards: [
            { front: 'Named insured', back: 'Listed on the declarations; the FIRST named insured holds the contract powers (notices, changes, cancellation).' },
            { front: 'Insured (defined)', back: 'Named insureds, resident spouse, resident relatives, and minors (commonly under 21) in their care.' },
            { front: 'Additional insured', back: 'An outside party endorsed onto the policy for coverage status — co-owner, landlord, trust.' },
            { front: 'First-party claim', back: 'The insured claiming under their own policy.' },
            { front: 'Third-party claim', back: 'An outsider claiming against the insured; liability coverage defends and pays.' },
            { front: 'Loss payee', back: 'Lender on personal property (car/boat); named on the settlement check; no independent rights like a mortgagee.' },
            { front: 'Public adjuster', back: 'Adjuster hired by and representing the INSURED — not the insurer. Fee-regulated in Florida.' },
            { front: 'Recoverable depreciation', back: 'The RC − ACV holdback, released after repairs are actually completed.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — claims flow',
          questions: [
            {
              q: 'After Hurricane season overwhelms its staff, an insurer hires contract adjusters to handle the surge. An adjuster working for the insurer on contract is a(n):',
              choices: ['Independent adjuster', 'Public adjuster', 'Staff adjuster', 'Umpire'],
              answer: 0,
              explain: 'Independent adjusters are contractors representing the INSURER. Staff adjusters are insurer employees. A public adjuster represents the insured — the one type that never works for the carrier.'
            },
            {
              q: 'An RC policy settles a $25,000 roof claim where the depreciation is $8,000 and the deductible is $1,000. The first check the insured receives will most likely be:',
              choices: ['$25,000', '$24,000', '$8,000', '$16,000'],
              answer: 3,
              explain: 'The initial payment is the ACV less the deductible: $25,000 − $8,000 depreciation = $17,000 ACV, minus $1,000 = $16,000. The $8,000 recoverable depreciation is released after repairs are completed.'
            },
            {
              q: 'Which person has the right to request policy changes and cancel the policy?',
              choices: [
                'Any resident relative',
                'The first named insured',
                'The mortgagee',
                'The public adjuster'
              ],
              answer: 1,
              explain: 'Contract powers — receiving notices, requesting changes, canceling — belong to the first named insured. Resident relatives are insureds for coverage purposes but do not control the contract.'
            },
            {
              q: 'A homeowner and her insurer agree the hurricane loss is covered but cannot agree on the repair price, so each hires an appraiser and the appraisers select an umpire. The amount set when any two of the three agree is a(n):',
              choices: ['Negotiated settlement', 'Subrogated settlement', 'Appraised settlement', 'Ex gratia payment'],
              answer: 2,
              explain: 'That is the appraisal process producing an appraised settlement of the amount of loss. A negotiated settlement is reached directly between adjuster and insured without invoking appraisal.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Named insured', def: 'The person or entity listed by name on the declarations; the first named insured holds the key contract rights and duties.' },
        { term: 'First named insured', def: 'The first person listed on the declarations — receives notices, may request changes, cancels the policy, and owes the premium.' },
        { term: 'Insured', def: 'Anyone qualifying for coverage under the policy definitions — typically the named insureds, resident relatives, and minors in their care.' },
        { term: 'Additional insured', def: 'A person or organization endorsed onto the policy to receive coverage because of an interest in the insured property or exposure to liability from it.' },
        { term: 'First-party claim', def: 'A claim made by the insured against the insured’s own policy.' },
        { term: 'Third-party claim', def: 'A claim made against the insured by another party, handled by the insured’s liability coverage.' },
        { term: 'Loss payee', def: 'A creditor with an interest in insured personal property, named on claim payments under a loss payable provision.' },
        { term: 'Staff adjuster', def: 'A claims adjuster employed directly by the insurer.' },
        { term: 'Independent adjuster', def: 'A contractor hired by insurers to adjust claims, often for surge capacity after catastrophes.' },
        { term: 'Public adjuster', def: 'A licensed adjuster hired by the insured to prepare and negotiate the insured’s claim for a fee.' },
        { term: 'Recoverable depreciation', def: 'The difference between replacement cost and ACV that an RC insurer holds back until repairs are completed.' },
        { term: 'Negotiated settlement', def: 'A claim amount agreed between the insured and the insurer’s adjuster without appraisal or litigation.' }
      ]
    }
  ],

  /* ---------------- Unit 2 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Which part of an insurance policy contains the names of the insureds, the policy period, the limits, and the deductibles?',
        choices: ['The insuring agreement', 'The declarations', 'The conditions', 'The definitions'],
        answer: 1,
        explain: 'The declarations page personalizes the contract — who, what, where, when, and how much. The insuring agreement is the general promise to pay.'
      },
      {
        q: 'A policy excludes flood, war, and nuclear hazard. The common underwriting reason is that these perils:',
        choices: [
          'Are too inexpensive to insure profitably',
          'Never cause measurable losses',
          'Only occur outside the policy territory',
          'Are catastrophic — one event can strike a huge share of insureds at once'
        ],
        answer: 3,
        explain: 'Catastrophic perils break the law of large numbers because losses are not independent. They are excluded from standard forms and addressed by special mechanisms like the NFIP.'
      },
      {
        q: 'A homeowners policy form says cosmetic marble damage is excluded, but an attached endorsement adds the coverage back. The loss is:',
        choices: [
          'Covered — the endorsement overrides the conflicting base form',
          'Excluded — the base form always controls',
          'Split 50/50 between insurer and insured',
          'Decided by the umpire'
        ],
        answer: 0,
        explain: 'Endorsements modify the contract, and where the two conflict the endorsement controls. The umpire only appears in the appraisal process for amount disputes.'
      },
      {
        q: 'Under a named-peril dwelling form, the burden of proving that a covered peril caused the loss falls on:',
        choices: ['The insurer', 'The mortgagee', 'The insured', 'The appraiser'],
        answer: 2,
        explain: 'Named-peril coverage requires the insured to show a listed peril caused the loss. Under open-peril forms the burden flips — the insurer must prove an exclusion applies.'
      },
      {
        q: 'ACV is best defined as:',
        choices: [
          'The market value of the property including land',
          'Replacement cost minus depreciation',
          'The original purchase price',
          'The amount stated on the declarations'
        ],
        answer: 1,
        explain: 'Actual cash value = replacement cost minus depreciation, reflecting the used condition of the property at the time of loss. Market value includes land and location and is not used.'
      },
      {
        q: 'A classic-car policy pays the lesser of $40,000, the ACV, or the cost to repair. This valuation method is:',
        choices: ['Stated amount', 'Agreed value', 'Functional replacement cost', 'Replacement cost'],
        answer: 0,
        explain: 'Stated amount is a ceiling — the policy pays the LEAST of the stated figure, ACV, or repair cost. Agreed value, by contrast, guarantees the agreed figure on a total loss.'
      },
      {
        q: 'A home with a replacement cost of $500,000 is insured for $300,000 under a policy with an 80% coinsurance requirement. A covered loss of $100,000 occurs and the deductible is $2,500. The policy pays:',
        choices: ['$100,000', '$97,500', '$75,000', '$72,500'],
        answer: 3,
        explain: 'Required: 80% × $500,000 = $400,000. Did ÷ should = $300,000 ÷ $400,000 = 0.75. Payment = 0.75 × $100,000 = $75,000 − $2,500 deductible = $72,500.'
      },
      {
        q: 'The MAIN purposes of a deductible are to:',
        choices: [
          'Increase the insurer’s premium income and eliminate underwriting',
          'Guarantee replacement cost settlements',
          'Eliminate small nuisance claims and reduce morale hazard',
          'Transfer all risk to the insured'
        ],
        answer: 2,
        explain: 'Deductibles screen out small claims that cost more to adjust than to pay and keep the insured financially interested in preventing losses. In exchange, the insured pays a lower premium.'
      },
      {
        q: 'A dispute arises solely over the dollar amount of a covered fire loss. Under the policy conditions, either party may demand:',
        choices: ['Arbitration of coverage', 'Appraisal', 'Subrogation', 'Liberalization'],
        answer: 1,
        explain: 'Appraisal is the amount-only dispute mechanism: each party selects an appraiser, the appraisers select an umpire, and agreement of any two of the three is binding.'
      },
      {
        q: 'Two policies cover the same building: Policy 1 for $80,000 and Policy 2 for $120,000. A covered $50,000 loss occurs. Under pro-rata other insurance, Policy 1 pays:',
        choices: ['$20,000', '$25,000', '$30,000', '$50,000'],
        answer: 0,
        explain: 'Policy 1’s share = $80,000 ÷ $200,000 = 40%; 40% × $50,000 = $20,000. Policy 2 pays the other $30,000. Together they indemnify the loss exactly once.'
      },
      {
        q: 'After paying its insured for a fence destroyed by a careless landscaping company, the insurer sues the landscaper to recover its payment. This is:',
        choices: ['Salvage', 'Assignment', 'Subrogation', 'Abandonment'],
        answer: 2,
        explain: 'Subrogation lets the insurer step into the insured’s shoes against the party who caused the loss — placing the cost on the wrongdoer and preventing the insured from collecting twice.'
      },
      {
        q: 'A homeowner moves out, takes every stick of furniture, and lists the house for sale. Seventy days later vandals wreck the interior. The likely coverage result under a standard property form is:',
        choices: [
          'Full payment — vandalism is always covered',
          'Payment of half the loss',
          'Payment only if the mortgagee consents',
          'Denial — the dwelling was VACANT beyond the stated period, suspending vandalism coverage'
        ],
        answer: 3,
        explain: 'No people and no contents = vacant. After the stated vacancy period (commonly 60 consecutive days), perils such as vandalism are suspended. Had the furniture remained, the home would merely be unoccupied.'
      },
      {
        q: 'An insured intentionally damages the insured dwelling and the claim is denied. The mortgagee named in the standard mortgagee clause:',
        choices: [
          'Also collects nothing',
          'Still collects up to its insurable interest in the property',
          'Collects only if it forecloses first',
          'Must sue the insured to recover'
        ],
        answer: 1,
        explain: 'The standard mortgagee clause gives the lender rights independent of the insured’s conduct — it is paid as its interest appears even when the insured’s own claim is denied, and the insurer then takes over that share of the mortgage debt.'
      },
      {
        q: 'A licensed professional hired BY THE INSURED to prepare, document, and negotiate a hurricane claim in exchange for a fee is a(n):',
        choices: ['Staff adjuster', 'Independent adjuster', 'Public adjuster', 'Umpire'],
        answer: 2,
        explain: 'Public adjusters represent policyholders, never insurers. Staff adjusters are insurer employees and independent adjusters are contractors working for insurers.'
      },
      {
        q: 'An insurer broadens its homeowners form mid-year at no additional premium. Under the liberalization clause, an in-force policyholder:',
        choices: [
          'Receives the broadened coverage automatically',
          'Must purchase an endorsement to receive it',
          'Must wait until renewal',
          'Receives it only after filing a proof of loss'
        ],
        answer: 0,
        explain: 'Liberalization extends free broadenings to existing policies automatically — no endorsement, no waiting. It applies only to broadenings, never to restrictions.'
      }
    ]
  }
});
