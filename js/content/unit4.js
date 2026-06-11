/* Unit 4 — The Homeowners Policy */
window.PL.units.push({
  id: 'u4',
  number: 4,
  title: 'The Homeowners Policy',
  icon: 'home',
  description: 'The heart of the 4-40 exam: the HO forms (HO-2 through HO-8), Section I property coverages A–D with their percentages and sub-limits, the perils and exclusions, Section II liability and medical payments, loss settlement with the 80% rule, and the renters, condo, and endorsement picture.',
  lessons: [

    /* ---------------- Lesson 4.1 ---------------- */
    {
      id: 'u4l1',
      title: 'HO Program & the Forms',
      minutes: 15,
      objectives: [
        'State the eligibility rules for a homeowners policy',
        'Distinguish named peril coverage from open peril coverage and explain who carries the burden of proof under each',
        'Identify the six HO forms and the perils approach each takes on the dwelling and on personal property',
        'Match a living situation — owner, renter, condo owner, historic-home owner — to the correct HO form'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>One policy, two halves</h3>
<p>The homeowners policy is a <span class="kt" title="A single policy combining two or more types of coverage">package policy</span>: it bundles <strong>Section I — property coverage</strong> on the home and its contents with <strong>Section II — personal liability and medical payments</strong>, all for a single premium. That packaging is the big difference from the dwelling policy you met in Unit 3, which covers property only and needs an endorsement to add liability.</p>
<h3>Who can buy one</h3>
<p>Eligibility is tested, so learn it precisely. A homeowners policy may be issued to the <strong>owner-occupant of a one- to four-family dwelling</strong> used exclusively for residential purposes. The keys:</p>
<ul>
<li><strong>Owner AND occupant.</strong> An investor who rents the house to tenants needs a dwelling policy, not an HO. (The exceptions: HO-4 is for renters who own no part of the building, and HO-6 is for condo unit owners.)</li>
<li><strong>One to four family units</strong>, and incidental rental is tolerated — the insured may rent out rooms or hold an incidental office, but the property cannot be primarily commercial and cannot be a working farm.</li>
<li><strong>Seasonal and secondary residences are eligible</strong> — a Florida snowbird’s winter home can carry its own HO policy.</li>
<li>A dwelling <strong>under construction</strong> can be written for the intended owner-occupant.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Package policy',
          html: `<p>A <strong>package policy</strong> combines two or more lines of coverage in one contract — for homeowners, property (Section I) plus liability (Section II). One policy, one premium, fewer gaps.</p>`
        },
        {
          type: 'text',
          html: `<h3>Named peril vs. open peril — the organizing idea</h3>
<p>Every HO form answers one question two different ways: <em>which causes of loss are covered?</em> A <strong>named peril</strong> form lists the covered perils — if the cause of loss is not on the list, there is no coverage. An <strong>open peril</strong> form (also called <em>special</em> or, loosely, all-risk) covers <strong>any direct physical loss EXCEPT what the exclusions remove</strong>. The practical difference shows up at claim time as the burden of proof:</p>`
        },
        {
          type: 'compare',
          title: 'Named peril vs. open peril',
          left: {
            title: 'Named peril',
            items: [
              'Covers only the perils <strong>listed</strong> in the policy',
              '<strong>Insured</strong> must prove the loss was caused by a listed peril',
              'Basic and broad forms are named peril',
              'Examples: HO-2 dwelling and contents; contents under HO-3'
            ]
          },
          right: {
            title: 'Open peril (special form)',
            items: [
              'Covers <strong>all direct physical loss except exclusions</strong>',
              '<strong>Insurer</strong> must prove an exclusion applies to deny',
              'Broader protection, higher premium',
              'Examples: HO-3 dwelling; HO-5 dwelling AND contents'
            ]
          }
        },
        {
          type: 'text',
          html: `<h3>The six HO forms</h3>
<p>The ISO homeowners program runs on six forms. The fastest way to master them: ask two questions of each form — <em>how does it treat the dwelling?</em> and <em>how does it treat personal property (contents)?</em></p>
<ul>
<li><strong>HO-2 (Broad form)</strong> — <strong>named</strong> (broad) perils on both dwelling and contents.</li>
<li><strong>HO-3 (Special form)</strong> — the workhorse of American home insurance: <strong>open peril on the dwelling and other structures, named (broad) perils on contents</strong>.</li>
<li><strong>HO-4 (Contents broad form)</strong> — the <strong>renters</strong> policy: no dwelling coverage, named perils on the tenant’s personal property, plus loss of use and liability.</li>
<li><strong>HO-5 (Comprehensive form)</strong> — <strong>open peril on BOTH the dwelling and contents</strong>. The broadest and most expensive form.</li>
<li><strong>HO-6 (Unit-owners form)</strong> — the <strong>condominium</strong> policy: a small amount of dwelling-type coverage for the parts of the unit the owner is responsible for, named perils, plus contents and liability.</li>
<li><strong>HO-8 (Modified coverage form)</strong> — for <strong>older or historic homes</strong> whose replacement cost far exceeds market value: limited named perils and <strong>ACV or functional replacement cost</strong> settlement instead of full replacement cost.</li>
</ul>`
        },
        {
          type: 'table',
          caption: 'The HO forms at a glance',
          headers: ['Form', 'Nickname', 'Dwelling perils', 'Contents perils', 'Designed for'],
          rows: [
            ['<strong>HO-2</strong>', 'Broad', 'Named (broad)', 'Named (broad)', 'Owner-occupants wanting a budget named-peril form'],
            ['<strong>HO-3</strong>', 'Special', '<strong>Open peril</strong>', 'Named (broad)', 'The standard owner-occupant choice — most common form'],
            ['<strong>HO-4</strong>', 'Contents broad', 'None (no Coverage A/B)', 'Named (broad)', 'Renters and tenants'],
            ['<strong>HO-5</strong>', 'Comprehensive', '<strong>Open peril</strong>', '<strong>Open peril</strong>', 'Owners wanting the broadest protection'],
            ['<strong>HO-6</strong>', 'Unit-owners', 'Limited (named perils)', 'Named (broad)', 'Condominium and co-op unit owners'],
            ['<strong>HO-8</strong>', 'Modified', 'Limited named (basic)', 'Limited named (basic)', 'Older homes — settled at ACV / functional replacement cost']
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hooks the exam rewards: <strong>3 = split</strong> (open peril building, named peril contents), <strong>5 = both</strong> (open peril on both), <strong>4 = renters</strong> (4 walls you don’t own), <strong>6 = condo</strong> (a 6th-floor unit), <strong>8 = old</strong> (an antique). If a question says open peril on the dwelling but named peril on contents, the answer is <strong>HO-3</strong> — every time.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — eligibility & the forms',
          questions: [
            {
              q: 'Which homeowners form provides open peril coverage on the dwelling but named peril coverage on personal property?',
              choices: ['HO-2', 'HO-5', 'HO-3', 'HO-8'],
              answer: 2,
              explain: 'The HO-3 special form splits its approach: open peril on Coverages A and B, named (broad) perils on Coverage C. The HO-5 is open peril on both; the HO-2 is named peril on both.'
            },
            {
              q: 'An investor owns a duplex and rents both units to tenants. She wants property coverage on the building. She should buy:',
              choices: ['An HO-3, because the building has fewer than four units', 'A dwelling policy, because she is not an owner-occupant', 'An HO-4 contents form', 'An HO-6 unit-owners form'],
              answer: 1,
              explain: 'Homeowners eligibility requires an owner-OCCUPANT. A non-occupant landlord needs the dwelling policy from Unit 3. HO-4 is for the tenants themselves; HO-6 is for condo owners.'
            },
            {
              q: 'Under an open peril form, who bears the burden of proving whether a loss is covered?',
              choices: [
                'The insured must prove the loss came from a listed peril',
                'The agent must certify the cause of loss',
                'Neither party — open peril covers everything without exception',
                'The insurer must prove an exclusion applies in order to deny the claim'
              ],
              answer: 3,
              explain: 'Open peril covers all direct physical loss unless excluded, so the insurer must point to an exclusion to deny. Under named peril forms the burden flips: the insured must show a listed peril caused the loss.'
            },
            {
              q: 'Which statement about HO eligibility is TRUE?',
              choices: [
                'A seasonal residence can be covered by a homeowners policy',
                'A working farm qualifies if the farmhouse has four or fewer units',
                'Only year-round primary residences qualify',
                'A dwelling under construction can never be insured'
              ],
              answer: 0,
              explain: 'Seasonal and secondary owner-occupied residences are eligible — important in snowbird-heavy Florida. Farms and primarily commercial property are not eligible, and a dwelling under construction can be written for the intended owner-occupant.'
            }
          ]
        },
        {
          type: 'chart',
          chartType: 'doughnut',
          title: 'Which HO forms American households actually buy (illustrative)',
          labels: ['HO-3 special', 'HO-4 renters', 'HO-6 condo', 'HO-5 comprehensive', 'HO-2 / HO-8 / other'],
          datasets: [{ label: 'Share of HO policies', data: [62, 16, 12, 7, 3] }],
          suffix: '%',
          note: 'Illustrative proportions. The HO-3 dominates the owner-occupied market, which is why the exam drills its split personality — open peril dwelling, named peril contents — harder than any other fact in this unit.'
        },
        {
          type: 'text',
          html: `<h3>A closer look at the odd one out: HO-8</h3>
<p>Picture a 1920s bungalow with plaster walls, heart-pine floors, and ornate millwork. Its <em>market value</em> might be $180,000, but rebuilding it with matching materials could cost $450,000. Insuring it for full replacement cost invites moral hazard — the house is worth far more burned down than standing. The <strong>HO-8 modified form</strong> solves this: it covers a short list of <strong>basic named perils</strong> and settles losses at <strong>actual cash value or functional replacement cost</strong> — repairing with modern, functionally equivalent materials (drywall instead of plaster) rather than exact restoration. Theft coverage under HO-8 is also tighter, typically limited to about $1,000 and to theft on the residence premises.</p>
<p>Functional replacement cost is the testable phrase: <strong>repair or replace with common construction materials and methods that are functionally equivalent</strong> to the obsolete or custom originals.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Do not confuse the two split-the-difference forms. <strong>HO-3 splits the perils approach</strong> (open on building, named on contents). <strong>HO-8 cuts back valuation</strong> (ACV / functional replacement instead of replacement cost). A question about an older home whose replacement cost far exceeds its market value is pointing to <strong>HO-8</strong>.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.1 key cards',
          cards: [
            { front: 'Package policy', back: 'One contract combining property (Section I) and liability (Section II) coverage — the homeowners design.' },
            { front: 'HO eligibility', back: 'Owner-occupant of a 1-4 family residential dwelling; seasonal OK; no farms or primarily commercial use.' },
            { front: 'HO-2', back: 'Broad form — named (broad) perils on both dwelling and contents.' },
            { front: 'HO-3', back: 'Special form — OPEN peril on dwelling/other structures, NAMED perils on contents. The most common form.' },
            { front: 'HO-4', back: 'Contents broad form for renters — no dwelling coverage; named perils on personal property plus loss of use and liability.' },
            { front: 'HO-5', back: 'Comprehensive form — open peril on BOTH dwelling and contents. Broadest, priciest.' },
            { front: 'HO-6', back: 'Unit-owners form for condos — limited dwelling-type coverage plus contents, named perils.' },
            { front: 'HO-8', back: 'Modified form for older homes — basic named perils, settled at ACV or functional replacement cost.' },
            { front: 'Open peril', back: 'Covers all direct physical loss except what is excluded; insurer bears the burden of proving an exclusion.' },
            { front: 'Functional replacement cost', back: 'Repair/replace with modern, functionally equivalent materials — drywall for plaster. The HO-8 settlement basis.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — picking the right form',
          questions: [
            {
              q: 'A client wants the broadest possible homeowners coverage — open peril protection on her house AND her personal property. Recommend the:',
              choices: ['HO-5', 'HO-3', 'HO-2', 'HO-8'],
              answer: 0,
              explain: 'Only the HO-5 comprehensive form applies open peril coverage to both the dwelling and contents. The HO-3 is open peril on the dwelling only.'
            },
            {
              q: 'A 1915 Victorian would cost $500,000 to rebuild with matching materials but has a market value of $200,000. The appropriate form and settlement basis is:',
              choices: [
                'HO-3 with replacement cost on the dwelling',
                'HO-5 with agreed value',
                'HO-8 with ACV or functional replacement cost',
                'HO-4 with actual cash value'
              ],
              answer: 2,
              explain: 'The HO-8 modified form exists exactly for this gap between replacement cost and market value — it settles at ACV or functional replacement cost using modern equivalent materials, removing the over-insurance moral hazard.'
            },
            {
              q: 'Maria leases an apartment and owns nothing but her furniture, clothes, and electronics. The form designed for her is the:',
              choices: ['HO-6', 'HO-4', 'HO-2', 'DP-3'],
              answer: 1,
              explain: 'The HO-4 contents broad form covers a tenant’s personal property on named perils, with loss of use and liability — no dwelling coverage, because she owns no part of the building. HO-6 is for unit OWNERS.'
            },
            {
              q: 'Which pair correctly matches form to perils treatment?',
              choices: [
                'HO-2 — open peril on dwelling and contents',
                'HO-5 — named perils on contents only',
                'HO-8 — open peril on the dwelling',
                'HO-3 — open peril dwelling, named peril contents'
              ],
              answer: 3,
              explain: 'The HO-3 split is the single most tested fact about the forms. HO-2 is named peril on both, HO-5 is open peril on both, and HO-8 is limited NAMED perils.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Package policy', def: 'A policy combining two or more coverage types — in homeowners, Section I property and Section II liability — under one contract.' },
        { term: 'Owner-occupant', def: 'A person who both owns and lives in the dwelling; the basic homeowners eligibility requirement.' },
        { term: 'Named peril coverage', def: 'Coverage only for causes of loss specifically listed in the policy; the insured must prove a listed peril caused the loss.' },
        { term: 'Open peril coverage', def: 'Coverage for all direct physical loss except causes specifically excluded; the insurer must prove an exclusion applies to deny.' },
        { term: 'HO-2 broad form', def: 'Homeowners form with named (broad) perils on both dwelling and personal property.' },
        { term: 'HO-3 special form', def: 'The most common homeowners form: open peril on the dwelling and other structures, named (broad) perils on contents.' },
        { term: 'HO-4 contents broad form', def: 'The renters form: named peril coverage on a tenant’s personal property plus loss of use and liability; no dwelling coverage.' },
        { term: 'HO-5 comprehensive form', def: 'Homeowners form with open peril coverage on both the dwelling and personal property — the broadest HO form.' },
        { term: 'HO-6 unit-owners form', def: 'The condominium form: limited dwelling-type coverage for parts of the unit the owner is responsible for, plus contents and liability.' },
        { term: 'HO-8 modified coverage form', def: 'Homeowners form for older homes whose replacement cost exceeds market value; basic named perils settled at ACV or functional replacement cost.' },
        { term: 'Functional replacement cost', def: 'Settlement basis that repairs or replaces with modern, functionally equivalent materials rather than identical restoration.' },
        { term: 'Seasonal dwelling', def: 'A residence occupied only part of the year; eligible for homeowners coverage when owner-occupied.' }
      ]
    },

    /* ---------------- Lesson 4.2 ---------------- */
    {
      id: 'u4l2',
      title: 'Section I — Property Coverages A–D',
      minutes: 17,
      objectives: [
        'Describe Coverages A, B, C, and D and state the default percentage limits for B, C, and D',
        'Apply the special sub-limits on money, securities, watercraft, jewelry, firearms, silverware, and business property',
        'Explain where personal property is covered (worldwide) and how Coverage D loss of use works',
        'List the Section I additional coverages and their dollar or percentage limits'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The four property coverages</h3>
<p>Section I of every HO form is built from four coverages. The percentages below are the standard defaults for the owner forms (HO-2, HO-3, HO-5) — they can be increased, and the renter and condo forms recalculate them (Lesson 4.6).</p>
<h4>Coverage A — Dwelling</h4>
<p>The house itself and <strong>structures attached to it</strong> (an attached garage, a screened lanai bolted to the house), plus materials and supplies on or next to the premises for use in construction or repair. Land is never covered. Coverage A is the anchor: <strong>B, C, and D are all set as percentages of A.</strong></p>
<h4>Coverage B — Other Structures (10% of A)</h4>
<p>Structures on the residence premises <strong>separated from the dwelling by clear space</strong> — a detached garage, fence, gazebo, storage shed, in-ground pool. The default limit is <strong>10% of Coverage A</strong>, and using it does <em>not</em> reduce the Coverage A limit. Excluded: structures rented to non-tenants (other than as a private garage), and structures used for business.</p>
<h4>Coverage C — Personal Property (50% of A)</h4>
<p>The contents: furniture, clothing, electronics — <strong>personal property owned or used by an insured anywhere in the world</strong>. A laptop stolen from a hotel in Rome is covered by the HO policy back home. The default limit is <strong>50% of Coverage A</strong>. Property usually kept at another residence of the insured (a beach condo wardrobe) is limited to 10% of C or $1,000, whichever is greater. Guests’ and residence employees’ property can be covered at the insured’s request while it is in a residence occupied by an insured.</p>
<h4>Coverage D — Loss of Use (30% of A)</h4>
<p>When a covered loss makes the home unfit to live in, Coverage D pays two things: <strong>additional living expense</strong> — the increase over normal costs to maintain the household’s standard of living (hotel, restaurant meals, extra commuting) — and <strong>fair rental value</strong> of any portion rented to others. The default limit is <strong>30% of Coverage A</strong>. If a civil authority prohibits use of the premises because a neighboring property suffered a covered peril, Coverage D pays for up to two weeks.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Default Section I limits on a $300,000 HO-3 (owner forms)',
          labels: ['A — Dwelling', 'C — Personal property (50% of A)', 'D — Loss of use (30% of A)', 'B — Other structures (10% of A)'],
          datasets: [{ label: 'Limit in $ thousands', data: [300, 150, 90, 30] }],
          note: 'The percentages — B 10%, C 50%, D 30% — are the tested facts. Each is a separate, additional amount of insurance; using Coverage B does not eat into Coverage A.'
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Quick math drill you should be able to do cold: Coverage A is $250,000. Then Coverage B is <strong>$25,000</strong> (10%), Coverage C is <strong>$125,000</strong> (50%), and Coverage D is <strong>$75,000</strong> (30%). If a question gives you Coverage A, the other three default limits are one multiplication away.</p>`
        },
        {
          type: 'text',
          html: `<h3>The special sub-limits on Coverage C</h3>
<p>Certain property is easy to steal, hard to value, or really a business exposure, so Coverage C caps it with <strong>special limits of liability</strong>. Two patterns matter: some limits apply to <em>any covered loss</em>, while others apply <strong>only to theft</strong>. The dollar amounts are pure memorization — and they are tested relentlessly.</p>`
        },
        {
          type: 'table',
          caption: 'Coverage C special sub-limits (per loss, not per item)',
          headers: ['Property', 'Sub-limit', 'Applies to'],
          rows: [
            ['Money, bank notes, coins and coin collections', '<strong>$200</strong>', 'Any covered loss'],
            ['Securities, deeds, valuable papers, tickets, stamps', '<strong>$1,500</strong>', 'Any covered loss'],
            ['Watercraft, including trailers, furnishings and motors', '<strong>$1,500</strong>', 'Any covered loss'],
            ['Trailers not used with watercraft', '<strong>$1,500</strong>', 'Any covered loss'],
            ['Jewelry, watches, furs, precious stones', '<strong>$1,500</strong>', '<strong>Theft only</strong>'],
            ['Firearms and related equipment', '<strong>$2,500</strong>', '<strong>Theft only</strong>'],
            ['Silverware, goldware, pewterware', '<strong>$2,500</strong>', '<strong>Theft only</strong>'],
            ['Business property ON the residence premises', '<strong>$2,500</strong>', 'Any covered loss'],
            ['Business property AWAY from the premises', '<strong>$500</strong>', 'Any covered loss']
          ]
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Read the trigger column carefully. If a <strong>fire</strong> destroys a $9,000 diamond ring, the $1,500 jewelry sub-limit does <strong>not</strong> apply — it is a theft-only limit, so the full value is covered under Coverage C (up to its limit). If the same ring is <strong>stolen</strong>, recovery stops at $1,500. The cure for valuable items is the <strong>scheduled personal property endorsement</strong> (Lesson 4.6), which insures listed items at agreed values, open peril, usually with no deductible.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — A through D and the sub-limits',
          questions: [
            {
              q: 'A homeowner carries Coverage A of $400,000 on an HO-3. What is the default Coverage C limit?',
              choices: ['$40,000', '$120,000', '$200,000', '$400,000'],
              answer: 2,
              explain: 'Coverage C defaults to 50% of Coverage A: $200,000. Coverage B would be $40,000 (10%) and Coverage D $120,000 (30%).'
            },
            {
              q: 'A burglar steals $800 in cash, a $4,000 watch, and a $3,000 shotgun. Ignoring the deductible, the HO policy pays at most:',
              choices: ['$7,800 — the full amount', '$200 + $1,500 + $2,500 = $4,200', '$200 + $4,000 + $2,500 = $6,700', '$1,500 total for all stolen property'],
              answer: 1,
              explain: 'Apply each sub-limit: money is capped at $200 for any loss; jewelry/watches at $1,500 for theft; firearms at $2,500 for theft. The sub-limits apply per category of property, per loss.'
            },
            {
              q: 'Which structure would be covered under Coverage B — Other Structures?',
              choices: [
                'An attached two-car garage',
                'A detached shed the insured rents to a neighbor for storage',
                'A detached gazebo in the backyard',
                'A detached workshop used to run a cabinetry business'
              ],
              answer: 2,
              explain: 'Coverage B requires separation from the dwelling by clear space — and it excludes structures rented to non-tenants (except as a private garage) and structures used for business. The attached garage is part of Coverage A.'
            },
            {
              q: 'An insured’s suitcase and clothing are stolen from a hotel room in London. Under her HO-3:',
              choices: [
                'There is no coverage outside the United States',
                'Coverage applies only up to 10% of Coverage C for any off-premises loss',
                'Coverage C applies because personal property is covered worldwide',
                'Only Coverage D responds'
              ],
              answer: 2,
              explain: 'Coverage C follows personal property anywhere in the world. The 10%-of-C limitation applies only to property USUALLY KEPT at another residence of the insured — not to property traveling with her.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Additional coverages — the extras Section I throws in</h3>
<p>Beyond A through D, every HO form includes a menu of <strong>additional coverages</strong>. Most supplement the main limits; a few carry their own famous dollar caps:</p>
<ul>
<li><strong>Debris removal</strong> — the cost of hauling away debris of covered property is included in the limit; if the loss plus debris removal exceeds the limit, an extra <strong>5%</strong> of the limit is available. Tree debris removal (when a tree fells onto a covered structure or blocks the driveway) carries a small per-tree/per-loss cap.</li>
<li><strong>Reasonable repairs</strong> — emergency measures to protect property from further damage (tarping the roof). Part of, not in addition to, the limit on the damaged property.</li>
<li><strong>Trees, shrubs and other plants</strong> — up to <strong>5% of Coverage A total, maximum $500 for any one tree, shrub or plant</strong>. Covered perils for plants are limited (fire, lightning, explosion, riot, aircraft, non-resident vehicles, vandalism, theft) — <strong>windstorm is NOT a covered peril for the plants themselves</strong>.</li>
<li><strong>Fire department service charge</strong> — up to <strong>$500</strong> when a fire department is called to protect covered property, with <strong>no deductible</strong>. Not available if the property is inside the city or district furnishing the response.</li>
<li><strong>Property removed</strong> — open peril ("any cause") coverage on property being removed from premises endangered by a covered peril, for up to 30 days.</li>
<li><strong>Credit card, EFT card, forgery and counterfeit money</strong> — up to <strong>$500</strong>, no deductible, for the insured’s legal obligation from unauthorized card use, forged checks, or counterfeit currency accepted in good faith.</li>
<li><strong>Loss assessment</strong> — up to <strong>$1,000</strong> for the insured’s share of an assessment charged by an association of property owners for direct loss by a Section I covered peril to commonly owned property.</li>
<li><strong>Collapse</strong> — covers collapse of a building caused by specified perils, hidden decay or insect damage, and certain construction defects.</li>
<li><strong>Ordinance or law</strong> — up to <strong>10% of Coverage A</strong> as additional insurance for the increased costs of construction required by building codes when repairing or rebuilding after a covered loss.</li>
<li><strong>Glass or safety glazing material</strong> — breakage of glass that is part of a covered building.</li>
<li><strong>Landlord’s furnishings</strong> — up to $2,500 for appliances and furnishings in an apartment on the premises rented to others (named perils, no theft).</li>
</ul>`
        },
        {
          type: 'table',
          caption: 'Additional coverage dollar facts the exam tests',
          headers: ['Additional coverage', 'Limit', 'Memory peg'],
          rows: [
            ['Trees, shrubs & plants', '<strong>$500 per item, 5% of A total</strong>', 'One plant = one fire department charge: $500'],
            ['Fire department service charge', '<strong>$500</strong>, no deductible', 'Call the trucks, owe five hundred'],
            ['Credit card / EFT / forgery / counterfeit', '<strong>$500</strong>, no deductible', 'Plastic and paper crime: $500'],
            ['Loss assessment', '<strong>$1,000</strong>', 'Association bill: one grand'],
            ['Debris removal (overflow)', 'Extra <strong>5%</strong> of the limit', 'Five percent for the dumpster'],
            ['Ordinance or law', '<strong>10% of Coverage A</strong>', 'Code upgrades: ten percent']
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Cluster the numbers to memorize them: the <strong>$500 club</strong> (per-plant limit, fire department charge, credit card/forgery), the <strong>$1,000 loss assessment</strong>, and the <strong>percent pair</strong> — 5% extra for debris removal, 10% of A for ordinance or law. Florida adds its own ordinance-or-law options on top; Unit 5 explains why code-upgrade money matters so much after hurricanes.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.2 key cards',
          cards: [
            { front: 'Coverage A', back: 'The dwelling and attached structures, plus construction materials on site. Land is never covered.' },
            { front: 'Coverage B default limit', back: '10% of Coverage A — detached structures separated by clear space. Additional insurance.' },
            { front: 'Coverage C default limit', back: '50% of Coverage A — personal property, covered WORLDWIDE.' },
            { front: 'Coverage D default limit', back: '30% of Coverage A on owner forms — additional living expense plus fair rental value.' },
            { front: 'Money sub-limit', back: '$200 — any covered loss, not just theft.' },
            { front: 'Securities sub-limit', back: '$1,500 for securities, deeds, valuable papers — any covered loss.' },
            { front: 'Jewelry / watches / furs', back: '$1,500 — THEFT only. A fire loss to jewelry is not capped by this sub-limit.' },
            { front: 'Firearms & silverware', back: '$2,500 each category — THEFT only.' },
            { front: 'Watercraft sub-limit', back: '$1,500 including trailers, furnishings, and motors — any covered loss.' },
            { front: 'Fire dept service charge', back: '$500, no deductible — when the department is called to protect covered property.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — limits in action',
          questions: [
            {
              q: 'A kitchen fire makes a home uninhabitable for three months. The family’s normal monthly costs are $3,000; living in a rental while repairs run costs $4,200 a month. Coverage D pays:',
              choices: ['$12,600 — the full rental cost', '$3,600 — the increase over normal living expenses', '$9,000 — their normal expenses', 'Nothing, because they chose to move out'],
              answer: 1,
              explain: 'Additional living expense pays only the INCREASE over normal expenses needed to maintain the household’s standard of living: ($4,200 − $3,000) × 3 = $3,600. It is not a blank check for all living costs.'
            },
            {
              q: 'A windstorm topples the insured’s prize oak tree onto the lawn, damaging nothing else. The trees-and-shrubs additional coverage pays:',
              choices: [
                '$500 for the tree',
                '5% of Coverage A',
                'Nothing — windstorm is not a covered peril for trees and plants',
                'The full value of the tree under Coverage A'
              ],
              answer: 2,
              explain: 'The plant coverage applies only to a short list of perils — fire, lightning, explosion, riot, aircraft, non-resident vehicles, vandalism, theft. Windstorm is conspicuously absent. (Removing tree DEBRIS that hits a covered structure is a separate, small coverage.)'
            },
            {
              q: 'After a covered fire, the city requires the rebuilt portion of the home to meet the current building code at an extra cost of $22,000. On a $250,000 Coverage A policy, the ordinance or law additional coverage provides up to:',
              choices: ['$22,000 with no cap', '$2,500', '$12,500', '$25,000'],
              answer: 3,
              explain: 'Ordinance or law provides 10% of Coverage A — here $25,000 — as additional insurance for code-required upgrade costs. The $22,000 need fits within it.'
            },
            {
              q: 'The condo association assesses every unit owner $1,800 after fire damages the commonly owned clubhouse. The loss assessment additional coverage in an unendorsed HO policy pays:',
              choices: ['$500', '$1,000', '$1,800', 'Nothing — assessments are never covered'],
              answer: 1,
              explain: 'Loss assessment is capped at $1,000 in the base policy when the assessment results from a covered Section I peril. Higher limits are available by endorsement — a big deal for Florida condo owners.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Coverage A — Dwelling', def: 'Covers the dwelling, attached structures, and construction materials on the premises; the base from which B, C, and D limits are calculated.' },
        { term: 'Coverage B — Other Structures', def: 'Covers structures separated from the dwelling by clear space; defaults to 10% of Coverage A as additional insurance.' },
        { term: 'Coverage C — Personal Property', def: 'Covers personal property owned or used by an insured anywhere in the world; defaults to 50% of Coverage A on owner forms.' },
        { term: 'Coverage D — Loss of Use', def: 'Pays additional living expense and fair rental value when a covered loss makes the residence unfit to live in; defaults to 30% of Coverage A on owner forms.' },
        { term: 'Additional living expense', def: 'The increase over normal living costs required to maintain the household’s standard of living after a covered loss.' },
        { term: 'Fair rental value', def: 'The rental income value of a portion of the premises rented to others, payable under Coverage D during untenantability.' },
        { term: 'Special limits of liability', def: 'Sub-limits within Coverage C capping recovery on categories such as money ($200), securities ($1,500), and theft of jewelry ($1,500).' },
        { term: 'Theft-only sub-limits', def: 'Caps that apply only when the cause of loss is theft: jewelry/watches/furs $1,500, firearms $2,500, silverware $2,500.' },
        { term: 'Debris removal', def: 'Additional coverage for removing debris of covered property; up to an extra 5% of the limit when loss plus removal exceeds the limit.' },
        { term: 'Fire department service charge', def: 'Up to $500, with no deductible, for charges incurred when a fire department is called to protect covered property.' },
        { term: 'Loss assessment coverage', def: 'Up to $1,000 for the insured’s share of an association assessment caused by a covered direct loss to common property.' },
        { term: 'Ordinance or law coverage', def: 'Additional coverage of 10% of Coverage A for increased construction costs required by building codes after a covered loss.' },
        { term: 'Credit card and forgery coverage', def: 'Up to $500, no deductible, for losses from unauthorized card use, forgery, or counterfeit money accepted in good faith.' }
      ]
    },

    /* ---------------- Lesson 4.3 ---------------- */
    {
      id: 'u4l3',
      title: 'Section I — Perils & Exclusions',
      minutes: 16,
      objectives: [
        'List the broad named perils that drive HO-2, HO-3 contents, and HO-4 coverage',
        'Name the major open-peril exclusions: ordinance, earth movement, water, power failure, neglect, war, nuclear, intentional loss',
        'Distinguish covered sudden water discharge from excluded flood, surface water, and seepage',
        'Explain the theft limitations, the vacancy rule for vandalism, and the idea of concurrent causation'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The broad named perils</h3>
<p>The named-peril side of the program — HO-2 on everything, HO-3 and HO-5 contents (HO-3 contents, to be exact), HO-4, and HO-6 — runs on the <strong>broad form perils</strong>. Learn them as the basic list plus the broad add-ons:</p>
<h4>The basic-form core</h4>
<ul>
<li><strong>Fire or lightning</strong></li>
<li><strong>Windstorm or hail</strong> (interior water damage only if wind first breaches the roof or walls)</li>
<li><strong>Explosion</strong></li>
<li><strong>Riot or civil commotion</strong></li>
<li><strong>Aircraft</strong> (including self-propelled missiles and spacecraft)</li>
<li><strong>Vehicles</strong></li>
<li><strong>Smoke</strong> (sudden and accidental — not from agricultural smudging or industrial operations)</li>
<li><strong>Vandalism or malicious mischief</strong></li>
<li><strong>Theft</strong> (including attempted theft)</li>
<li><strong>Volcanic eruption</strong> (but not earthquake or tremors)</li>
</ul>
<h4>The broad-form additions</h4>
<ul>
<li><strong>Falling objects</strong> (the building exterior must be damaged first for interior contents to be covered)</li>
<li><strong>Weight of ice, snow or sleet</strong></li>
<li><strong>Accidental discharge or overflow of water or steam</strong> from plumbing, heating, AC, or appliances</li>
<li><strong>Sudden and accidental tearing apart, cracking, burning or bulging</strong> of a steam, hot water, or AC system</li>
<li><strong>Freezing</strong> of plumbing, heating, AC, or appliances (but not if the dwelling is vacant/unoccupied unless heat was maintained or systems drained)</li>
<li><strong>Sudden and accidental damage from artificially generated electrical current</strong> (power surge — but not to tubes, transistors, and similar electronic components)</li>
</ul>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Pattern to spot on the exam: the broad-form additions love the words <strong>“sudden and accidental.”</strong> Slow, gradual, expected damage — a pipe that seeped for months, rust, wear and tear — is maintenance, not a peril, and it is never covered on any form.</p>`
        },
        {
          type: 'text',
          html: `<h3>The open-peril exclusions — the list that defines HO-3 and HO-5</h3>
<p>Open peril does not mean all peril. The special forms cover any direct physical loss <em>except</em> these excluded causes, and the exam expects you to recognize every one:</p>
<ul>
<li><strong>Ordinance or law</strong> — code-upgrade costs beyond the 10% additional coverage.</li>
<li><strong>Earth movement</strong> — earthquake, landslide, mudflow, mine subsidence, sinking and shifting of earth. (Florida law forces two big exceptions back in — see the callout below.)</li>
<li><strong>Water damage</strong> — <strong>flood</strong>, surface water, waves, tidal water and storm surge; water that backs up through sewers or drains; water below the surface that seeps through foundations, floors, or walls.</li>
<li><strong>Power failure</strong> — loss caused by utility failure that occurs <strong>off the residence premises</strong>. (If a covered peril on the premises knocks out power, ensuing loss is covered.)</li>
<li><strong>Neglect</strong> — failure to use reasonable means to protect property at and after a loss.</li>
<li><strong>War</strong> — including undeclared war, civil war, insurrection, and any nuclear weapon discharge even if accidental.</li>
<li><strong>Nuclear hazard</strong> — radiation and contamination.</li>
<li><strong>Intentional loss</strong> — any loss arising from an act committed by or at the direction of an insured with intent to cause loss. Arson by the owner voids recovery.</li>
<li><strong>Governmental action</strong> — destruction or seizure by government order (except destruction to stop the spread of fire).</li>
</ul>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — earth movement has two carve-outs here',
          html: `<p>The standard earth-movement exclusion sweeps in sinkholes — but Florida statute pushes back. Every Florida residential property policy <strong>must include catastrophic ground cover collapse</strong> coverage, and insurers <strong>must offer optional sinkhole loss coverage</strong> for the broader range of sinkhole damage. The four statutory criteria for catastrophic ground cover collapse, and how the optional coverage differs, are a centerpiece of Unit 5, Lesson 3.</p>`
        },
        {
          type: 'compare',
          title: 'Water damage: the covered/excluded fault line',
          left: {
            title: 'Covered water losses',
            items: [
              '<strong>Sudden accidental discharge</strong> — a burst supply line floods the kitchen',
              'Overflow from plumbing, heating, AC, or a household appliance',
              'Rain entering through a roof opening <strong>created by wind or hail</strong>',
              'Freezing of plumbing (if heat maintained or system drained when away)'
            ]
          },
          right: {
            title: 'Excluded water losses',
            items: [
              '<strong>Flood</strong>, surface water, waves, tidal water, storm surge — needs a flood policy (Unit 5, Lesson 4)',
              'Water or sewage <strong>backing up through sewers or drains</strong> (buy the water backup endorsement)',
              '<strong>Seepage</strong> of groundwater through the foundation, floors, or walls',
              'Continuous or repeated leakage over weeks or months — that is maintenance'
            ]
          }
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Two ruined living rooms, two different answers. House 1: the washing machine hose bursts while the family is at work — <strong>covered</strong>, a sudden and accidental discharge. House 2: three days of rain swells the creek behind the house and four inches of water flows in under the doors — <strong>excluded</strong>, that is surface water/flood, no matter how sudden it felt. Same carpet, same smell, opposite outcomes — the <em>source</em> of the water decides everything.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — perils and the water line',
          questions: [
            {
              q: 'Which loss is EXCLUDED under an unendorsed HO-3?',
              choices: [
                'A pipe suddenly bursts inside a wall and soaks the drywall',
                'Hurricane storm surge pushes seawater through the first floor',
                'Wind tears off shingles and rain damages the ceiling below',
                'Lightning destroys the home’s electrical panel'
              ],
              answer: 1,
              explain: 'Storm surge is tidal water — part of the water damage exclusion — even when a hurricane causes it. Wind damage and the rain that enters through the wind-created opening are covered; the burst pipe is a covered sudden discharge.'
            },
            {
              q: 'A power plant failure ten miles away spoils $600 of food in the insured’s freezer. The HO policy:',
              choices: [
                'Pays under Coverage C because spoilage is sudden',
                'Pays under Coverage D loss of use',
                'Excludes the loss — the power failure occurred off the residence premises',
                'Pays only if the insured files within 7 days'
              ],
              answer: 2,
              explain: 'The power failure exclusion applies to utility failures occurring OFF premises. If lightning had struck the home’s own service line — a covered peril on premises — resulting loss would be covered.'
            },
            {
              q: 'Which of the following is a broad-form named peril?',
              choices: ['Flood', 'Earthquake', 'Gradual foundation seepage', 'Weight of ice, snow or sleet'],
              answer: 3,
              explain: 'Weight of ice/snow/sleet is one of the broad-form additions. Flood and earthquake are excluded perils on every standard HO form, and gradual seepage is excluded maintenance-type damage.'
            },
            {
              q: 'The named perils windstorm and falling objects share a common condition before INTERIOR damage is covered:',
              choices: [
                'The loss must occur during daylight hours',
                'The exterior of the building must first be damaged, creating the opening',
                'A government authority must declare an emergency',
                'The insured must prove the building was occupied'
              ],
              answer: 1,
              explain: 'For both perils, interior and contents damage is covered only if the peril first breaches the exterior — wind must open the roof or wall; the falling object must damage the outside on its way in.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Theft limitations, vacancy, and other traps</h3>
<p><strong>Theft</strong> is a covered peril, but the policy strips it down in specific situations:</p>
<ul>
<li>Theft <strong>committed by an insured</strong> is never covered (your roommate-son taking your watch is a family problem, not a claim).</li>
<li>Theft <strong>in or from a dwelling under construction</strong>, including materials and supplies, until completed and occupied.</li>
<li>Theft <strong>from a part of the premises rented to someone who is not an insured</strong>.</li>
<li>Off-premises theft of <strong>watercraft, their trailers and equipment, and campers/trailers</strong> is not covered.</li>
</ul>
<p><strong>Vandalism and the 60-day vacancy rule:</strong> vandalism, malicious mischief, and glass breakage are excluded if the dwelling has been <strong>vacant for more than 60 consecutive days</strong> immediately before the loss. Vacant means empty of people <em>and</em> property; an unoccupied home still furnished does not trigger the rule.</p>
<p><strong>Mold, fungus and wet rot</strong> are excluded or tightly sub-limited except when hidden within walls, floors, or ceilings and resulting from an accidental discharge of water — modern policies typically attach a small dollar cap for mold remediation.</p>
<h3>Concurrent causation — when two causes collide</h3>
<p>What happens when an excluded peril and a covered peril team up — hurricane wind (covered) plus storm surge (excluded) wreck the same house? The policy answers with <strong>anti-concurrent causation language</strong>: losses caused by an excluded peril are excluded <em>regardless of any other cause contributing concurrently or in any sequence</em>. In practice, adjusters allocate: damage traceable to wind is paid; damage traceable to flood is not — which is exactly why Floridians need both a wind-covering HO policy <em>and</em> a flood policy. Unit 5 returns to this fight in detail.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'What actually damages homes — claim frequency by peril (illustrative)',
          labels: ['Wind & hail', 'Non-weather water', 'Weather water/freeze', 'Fire & lightning', 'Theft & vandalism', 'All other'],
          datasets: [{ label: 'Share of HO claims', data: [40, 20, 11, 9, 6, 14] }],
          suffix: '%',
          note: 'Illustrative national pattern. Wind/hail dominates frequency — and in Florida it dominates severity too, which is why hurricane deductibles, mitigation credits, and the wind market get their own unit.'
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.3 key cards',
          cards: [
            { front: 'The open-peril exclusions', back: 'Ordinance or law, earth movement, water damage, power failure (off premises), neglect, war, nuclear hazard, intentional loss, governmental action.' },
            { front: 'Water damage exclusion covers…', back: 'Flood/surface/tidal water and storm surge; sewer or drain backup; below-surface seepage through foundations.' },
            { front: 'Covered water loss', back: 'SUDDEN and ACCIDENTAL discharge or overflow from plumbing, heating, AC, or appliances.' },
            { front: 'Vandalism vacancy rule', back: 'Vandalism and glass breakage are excluded after the dwelling is VACANT more than 60 consecutive days.' },
            { front: 'Theft never covered when…', back: 'Committed by an insured; from a dwelling under construction; from a part of premises rented to a non-insured.' },
            { front: 'Power failure exclusion', back: 'Applies only when the utility failure happens OFF the residence premises.' },
            { front: 'Intentional loss', back: 'Loss caused by or at the direction of an insured intending the loss — excluded for everyone, always.' },
            { front: 'Anti-concurrent causation', back: 'If an excluded cause contributes to the loss in any sequence, the excluded portion stays excluded — wind paid, flood not.' },
            { front: 'Volcanic eruption vs earthquake', back: 'Volcanic eruption is a NAMED PERIL; earthquake is part of the excluded earth movement group.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — exclusions and traps',
          questions: [
            {
              q: 'A home has sat completely empty — no furniture, no occupants — for 75 days when vandals smash the windows and spray-paint the walls. The HO-3 pays:',
              choices: [
                'The full loss, because vandalism is a named peril',
                'Only the glass breakage',
                'Half the loss under the pair-and-set clause',
                'Nothing — vandalism is excluded after more than 60 consecutive days of vacancy'
              ],
              answer: 3,
              explain: 'Vandalism, malicious mischief, and glass breakage are excluded once the dwelling has been vacant more than 60 consecutive days before the loss. Vacant means empty of both people and property.'
            },
            {
              q: 'During a hurricane, wind destroys the roof of a coastal home and storm surge guts the first floor. Under an unendorsed HO-3 with wind coverage:',
              choices: [
                'The wind damage is covered; the surge damage is excluded as water damage',
                'The entire loss is covered because wind started it',
                'The entire loss is excluded because flood contributed',
                'Coverage depends on which peril struck first'
              ],
              answer: 0,
              explain: 'Adjusters allocate between causes: wind damage is a covered open peril; storm surge falls squarely in the water damage exclusion regardless of sequence. The flood policy (NFIP or private) picks up the surge — if the homeowner bought one.'
            },
            {
              q: 'Which theft IS covered under an unendorsed HO-3?',
              choices: [
                'Lumber stolen from the insured’s house under construction',
                'A television stolen by the insured’s resident son',
                'A laptop stolen from the insured’s locked car in a mall parking lot',
                'Tools stolen from a bedroom rented to a non-relative boarder, taken from the boarder’s space by the boarder'
              ],
              answer: 2,
              explain: 'Coverage C is worldwide and theft away from premises is generally covered for the insured’s property. The other three hit specific theft limitations: dwellings under construction, theft by an insured, and theft from a rented portion of the premises.'
            },
            {
              q: 'A power surge from the utility grid (originating off premises) fries the insured’s home theater. An HO-2 covers the loss:',
              choices: [
                'In full, because electrical damage is a broad peril',
                'No — the power failure exclusion and the electronic-components limitation point to little or no coverage here',
                'Only if the insured unplugged the equipment',
                'Under Coverage B'
              ],
              answer: 1,
              explain: 'The artificially-generated-electricity peril excludes damage to tubes, transistors, and similar electronic components, and off-premises utility problems trigger the power failure exclusion. This combination is a favorite trick question.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Broad form perils', def: 'The named perils of HO-2 and of contents coverage under HO-3: the basic perils plus falling objects, weight of ice/snow/sleet, accidental discharge, tearing apart, freezing, and artificial electrical current.' },
        { term: 'Windstorm or hail peril', def: 'Covers wind and hail damage; interior damage is covered only when wind or hail first creates an opening in the roof or walls.' },
        { term: 'Accidental discharge or overflow', def: 'A broad peril covering sudden water or steam escape from plumbing, heating, AC, or household appliances.' },
        { term: 'Ordinance or law exclusion', def: 'Excludes code-upgrade and demolition costs beyond the policy’s 10% ordinance or law additional coverage.' },
        { term: 'Earth movement exclusion', def: 'Excludes earthquake, landslide, mudflow, and sinking or shifting of earth; Florida statute adds back catastrophic ground cover collapse and offers sinkhole coverage.' },
        { term: 'Water damage exclusion', def: 'Excludes flood, surface and tidal water (including storm surge), sewer/drain backup, and below-surface seepage.' },
        { term: 'Power failure exclusion', def: 'Excludes loss caused by utility service failure occurring off the residence premises.' },
        { term: 'Neglect exclusion', def: 'Excludes loss the insured could have avoided by using reasonable means to save and preserve property at and after a loss.' },
        { term: 'Intentional loss exclusion', def: 'Excludes any loss arising from an act committed by or at the direction of an insured with intent to cause the loss.' },
        { term: 'Vacancy (vandalism) rule', def: 'Vandalism, malicious mischief, and glass breakage are excluded when the dwelling has been vacant more than 60 consecutive days before the loss.' },
        { term: 'Vacant vs. unoccupied', def: 'Vacant means without people AND contents; unoccupied means the residents are temporarily away but furnishings remain.' },
        { term: 'Concurrent causation', def: 'A loss produced by two or more causes; anti-concurrent causation wording keeps excluded causes excluded regardless of sequence.' },
        { term: 'Mold limitation', def: 'Fungus and mold losses are excluded or capped at small sub-limits except when hidden and caused by a covered accidental water discharge.' }
      ]
    },

    /* ---------------- Lesson 4.4 ---------------- */
    {
      id: 'u4l4',
      title: 'Section II — Liability (E) & Medical Payments (F)',
      minutes: 15,
      objectives: [
        'Explain Coverage E personal liability, its $100,000 base limit, and why defense costs are paid in addition to the limit',
        'Explain Coverage F medical payments to others — $1,000 base, no fault required, never for insureds',
        'Identify who counts as an insured under Section II and recognize the major liability exclusions',
        'Describe the Section II additional coverages, especially damage to property of others ($1,000)'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Coverage E — Personal Liability</h3>
<p>Section II turns the homeowners policy into a personal shield. <strong>Coverage E pays on behalf of an insured when a claim or suit is brought for bodily injury or property damage caused by an occurrence to which coverage applies</strong> — the dog bites the mail carrier, a guest tumbles down unlit stairs, your kid line-drives a baseball through the neighbor’s bay window and into their television.</p>
<p>The mechanics you must know cold:</p>
<ul>
<li><strong>Base limit: $100,000 per occurrence</strong>, a single limit covering bodily injury and property damage combined. Higher limits ($300,000, $500,000) cost surprisingly little and are routinely recommended — Florida juries are not shy.</li>
<li><strong>Legal liability is required.</strong> Coverage E pays only what the insured becomes <em>legally obligated</em> to pay — through judgment or settlement. Sympathy is not a trigger.</li>
<li><strong>Defense is in ADDITION to the limit.</strong> The insurer provides and pays for the defense lawyer, and those costs do not reduce the $100,000. The duty to defend exists even for groundless or fraudulent suits — but it <strong>ends when the limit is exhausted</strong> by payment of judgments or settlements.</li>
<li>Coverage follows the insured for personal activities <strong>worldwide</strong> — it is not confined to the residence premises.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Occurrence',
          html: `<p>An <strong>occurrence</strong> is an accident, including continuous or repeated exposure to substantially the same harmful conditions, that results in bodily injury or property damage during the policy period — <strong>neither expected nor intended</strong> by the insured. The word does the gatekeeping: planned harm is not an occurrence.</p>`
        },
        {
          type: 'text',
          html: `<h3>Coverage F — Medical Payments to Others</h3>
<p>Coverage F is the goodwill coverage: it pays <strong>necessary medical expenses for people injured on the insured location with permission, or injured away from it by the insured, a resident employee, or an animal owned by an insured — without any need to prove the insured was at fault.</strong> Expenses must be incurred within three years of the accident.</p>
<p>The two facts the exam circles back to every time:</p>
<ul>
<li><strong>Base limit: $1,000 per person.</strong></li>
<li><strong>It NEVER pays the named insured or regular residents of the household</strong> (except residence employees). Your own family’s injuries are a health-insurance matter; Coverage F exists for guests and neighbors.</li>
</ul>
<p>Why carry it? Paying a guest’s $800 urgent-care bill quickly and without an admission of fault keeps small mishaps from ripening into Coverage E lawsuits.</p>`
        },
        {
          type: 'compare',
          title: 'Coverage E vs. Coverage F',
          left: {
            title: 'E — Personal Liability',
            items: [
              'Pays when the insured is <strong>legally liable</strong>',
              'Base limit <strong>$100,000 per occurrence</strong> (BI + PD combined)',
              '<strong>Defense costs in addition</strong> to the limit',
              'Pays third parties — never the insured’s own injuries',
              'Triggered by claims and lawsuits'
            ]
          },
          right: {
            title: 'F — Medical Payments to Others',
            items: [
              '<strong>No fault required</strong> — pays regardless of liability',
              'Base limit <strong>$1,000 per person</strong>',
              'Medical expenses incurred within <strong>3 years</strong> of the accident',
              'Pays <strong>guests and others — never insureds</strong> or regular residents (except residence employees)',
              'A goodwill tool that heads off lawsuits'
            ]
          }
        },
        {
          type: 'text',
          html: `<h3>Who is an insured, and what Section II refuses to touch</h3>
<p><strong>Insureds under Section II</strong> include the named insured and spouse, <strong>resident relatives</strong>, and anyone under 21 in the care of an insured. Students temporarily away at school remain insureds (relatives under 24; non-relatives under 21 in an insured’s care). Also insured: persons legally responsible for covered animals or watercraft (a friend walking your dog), and residence employees operating covered vehicles within their job.</p>
<h4>The exclusions that pay the exam’s bills</h4>
<ul>
<li><strong>Expected or intended injury</strong> — the punch thrown on purpose.</li>
<li><strong>Business pursuits</strong> — liability arising out of a business, including most home businesses and regular child care for pay (incidental activities and some part-time youth activities escape). The home business endorsement (Lesson 4.6) buys it back.</li>
<li><strong>Professional services</strong> — malpractice belongs in professional liability policies.</li>
<li><strong>Motor vehicles</strong> — autos belong to the PAP (Unit 6). Limited exceptions: vehicles in dead storage on premises, vehicles used solely to service the residence, golf carts in certain settings, motorized wheelchairs.</li>
<li><strong>Watercraft</strong> — larger boats and powerful motors are excluded (small boats and low-horsepower craft retain coverage); Unit 8 covers boat policies.</li>
<li><strong>Aircraft</strong> — excluded outright (hobby drones not designed to carry people are generally fine).</li>
<li><strong>Rental of premises</strong> — except occasional rental of the residence, rental of part of it as a residence, or rental for office/school/studio use.</li>
<li><strong>War, communicable disease, abuse, controlled substances</strong> — public-policy exclusions.</li>
<li><strong>Property OWNED by, or in the care, custody or control of, the insured</strong> — Coverage E does not pay you for breaking your own things or the things you borrowed. (The fix for borrowed property is below.)</li>
<li><strong>Workers compensation</strong> obligations.</li>
</ul>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — E & F mechanics',
          questions: [
            {
              q: 'A guest slips on the insured’s wet pool deck and sues. The court awards $100,000, and the insurer also spent $40,000 defending. With a base Coverage E limit, the insurer pays a total of:',
              choices: ['$100,000', '$60,000', '$140,000 — the judgment plus defense, because defense costs are in addition to the limit', '$40,000'],
              answer: 2,
              explain: 'Defense costs are supplementary — paid in addition to the limit of liability. The full $100,000 judgment is within the limit, and the $40,000 defense bill rides on top.'
            },
            {
              q: 'Coverage F medical payments would pay for the injuries of which person?',
              choices: [
                'The named insured, who fell off her own ladder',
                'The insured’s 16-year-old resident son, hurt skateboarding in the driveway',
                'The insured’s tenant-farm business customer',
                'A dinner guest who burns her hand on the insured’s stove'
              ],
              answer: 3,
              explain: 'Coverage F pays guests and other non-residents — never the named insured or regular residents of the household. Business-related injuries fall to the business pursuits exclusion.'
            },
            {
              q: 'The base Section II limits in an unendorsed HO policy are:',
              choices: [
                '$100,000 Coverage E per occurrence and $1,000 Coverage F per person',
                '$300,000 Coverage E and $5,000 Coverage F',
                '$25,000 Coverage E and $500 Coverage F',
                '$100,000 Coverage E per person and $10,000 Coverage F per occurrence'
              ],
              answer: 0,
              explain: 'Memorize the pair: E is $100,000 per occurrence (single limit, BI and PD combined); F is $1,000 per person. Both can be increased for modest premium.'
            },
            {
              q: 'Which claim would Section II of a homeowners policy cover?',
              choices: [
                'The insured rear-ends another car on the highway',
                'A client is injured during a massage in the insured’s home massage studio',
                'The insured’s dog bites a jogger at the park two miles from home',
                'The insured intentionally shoves a heckler at a softball game'
              ],
              answer: 2,
              explain: 'Personal liability follows the insured (and the insured’s animals) anywhere in the world. The car crash is excluded as a motor vehicle loss, the massage client hits the business/professional exclusions, and the shove is expected or intended injury.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Section II additional coverages</h3>
<p>Section II carries its own short list of extras, paid in addition to the limits:</p>
<ul>
<li><strong>Claim expenses</strong> — defense costs, premiums on appeal bonds, post-judgment interest, and the insured’s loss of earnings up to <strong>$250 per day</strong> for helping with the defense at the insurer’s request.</li>
<li><strong>First aid expenses</strong> — first aid to others rendered at the time of a covered bodily injury (never to an insured).</li>
<li><strong>Damage to property of others</strong> — up to <strong>$1,000 per occurrence, at replacement cost, with NO requirement of legal liability</strong>. This is the borrowed-ladder coverage: your child breaks a friend’s bicycle, you crack a borrowed pressure washer — the policy pays even though no one is suing. Not covered: property an insured owns or rents, intentional damage by an insured <strong>age 13 or older</strong>, damage arising from business, and motor-vehicle damage.</li>
<li><strong>Loss assessment</strong> — up to $1,000 for the insured’s share of an association assessment arising from liability exposures, parallel to the Section I version.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>The insured’s 10-year-old throws a baseball through the neighbor’s window: $480 in glass. The neighbor is a friend and nobody is suing. <strong>Damage to property of others</strong> pays the $480 at replacement cost, no lawsuit, no liability finding, no deductible. Note the age trigger: intentional damage by a child <strong>under 13</strong> is still payable; an angry 16-year-old who does the same thing on purpose gets nothing.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Keep the two famous $1,000 figures separate. <strong>Coverage F med pay = $1,000 per person</strong> for injuries to non-insureds. <strong>Damage to property of others = $1,000 per occurrence</strong> for property of non-insureds. One body, one stuff — both small, both goodwill-driven, both tested.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.4 key cards',
          cards: [
            { front: 'Coverage E base limit', back: '$100,000 per occurrence — bodily injury and property damage combined, legal liability required.' },
            { front: 'Defense costs under Coverage E', back: 'Paid IN ADDITION to the limit; the duty to defend ends when the limit is exhausted by judgments or settlements.' },
            { front: 'Coverage F base limit', back: '$1,000 per person — medical expenses incurred within 3 years of the accident.' },
            { front: 'Who Coverage F never pays', back: 'The named insured and regular residents of the household (residence employees excepted). Guests only.' },
            { front: 'Occurrence', back: 'An accident, including repeated exposure to the same conditions, neither expected nor intended by the insured.' },
            { front: 'Damage to property of others', back: '$1,000 per occurrence, replacement cost, NO legal liability required. Intentional damage excluded only for insureds 13 and older.' },
            { front: 'Section II insureds', back: 'Named insured, spouse, resident relatives, persons under 21 in an insured’s care, students temporarily away.' },
            { front: 'Big Section II exclusions', back: 'Intentional injury, business pursuits, professional services, motor vehicles, large watercraft, aircraft, war.' },
            { front: 'Claim expenses', back: 'Defense, appeal bond premiums, post-judgment interest, and up to $250/day of the insured’s lost earnings.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — Section II scenarios',
          questions: [
            {
              q: 'The insured borrows a neighbor’s riding mower and accidentally backs it into a tree, causing $700 in damage. There is no lawsuit. The best source of payment is:',
              choices: [
                'Coverage E, after the neighbor wins a judgment',
                'Damage to property of others — up to $1,000 with no liability required',
                'Coverage C, because the mower was in the insured’s possession',
                'No coverage — borrowed property is always excluded everywhere in the policy'
              ],
              answer: 1,
              explain: 'Coverage E excludes property in the insured’s care, custody, or control — but the damage-to-property-of-others additional coverage pays up to $1,000 at replacement cost precisely for these no-fault, goodwill situations.'
            },
            {
              q: 'The duty to defend under Coverage E ends when:',
              choices: [
                'The insurer has spent an amount equal to the limit on lawyers',
                'The insured demands a second opinion',
                'The limit of liability is exhausted by payment of judgments or settlements',
                'The claim is six months old'
              ],
              answer: 2,
              explain: 'Defense costs themselves never erode the limit — only paid judgments and settlements do. Once those payments exhaust the limit, the defense obligation stops.'
            },
            {
              q: 'A neighbor’s child, age 9 and in the insured’s care for the afternoon, is injured on the insured’s trampoline. Which is TRUE?',
              choices: [
                'Coverage F can pay the child’s medical bills even if the insured was not negligent',
                'The child is an insured, so no Section II coverage applies to her injury',
                'Only Coverage D responds',
                'Coverage E pays automatically without any claim of liability'
              ],
              answer: 0,
              explain: 'A visiting child injured on the premises with permission is a classic Coverage F claimant — no fault required, up to the per-person limit. (A child under 21 in an insured’s care counts as an insured for LIABILITY protection purposes, but Coverage F looks at residency: a non-resident guest’s injuries remain payable. If she were a regular household resident, F would not pay.)'
            },
            {
              q: 'Which exposure is EXCLUDED by Section II of the homeowners policy?',
              choices: [
                'The insured’s dog injures a guest in the backyard',
                'A foul ball from the insured’s recreational softball swing injures a spectator',
                'A delivery driver trips over a garden hose on the insured’s walkway',
                'A paying daycare client’s child is injured in the insured’s home daycare'
              ],
              answer: 3,
              explain: 'Regular child care for compensation is a business pursuit — excluded without an endorsement. The dog bite, recreational sports injury, and premises trip-and-fall are core covered occurrences.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Coverage E — Personal Liability', def: 'Pays sums an insured is legally obligated to pay for bodily injury or property damage from a covered occurrence; base limit $100,000 per occurrence.' },
        { term: 'Coverage F — Medical Payments to Others', def: 'Pays necessary medical expenses of non-insureds injured in covered circumstances, without regard to fault; base limit $1,000 per person, expenses within 3 years.' },
        { term: 'Occurrence', def: 'An accident, including continuous or repeated exposure to substantially the same harmful conditions, neither expected nor intended by the insured.' },
        { term: 'Duty to defend', def: 'The insurer’s obligation to provide and pay for legal defense, even against groundless suits, ending when the limit is exhausted by judgments or settlements.' },
        { term: 'Supplementary (claim) expenses', def: 'Defense costs, appeal bond premiums, post-judgment interest, and up to $250 per day of the insured’s lost earnings — paid in addition to the limit.' },
        { term: 'Damage to property of others', def: 'Section II additional coverage paying up to $1,000 per occurrence at replacement cost for property of others damaged by an insured, with no liability requirement.' },
        { term: 'Business pursuits exclusion', def: 'Excludes liability arising from an insured’s business activities, including regular paid child care; buy-back available by endorsement.' },
        { term: 'Care, custody or control exclusion', def: 'Coverage E does not cover damage to property owned by, rented to, or in the care of an insured.' },
        { term: 'Expected or intended injury exclusion', def: 'Excludes injury or damage the insured meant to cause or could expect to result from the act.' },
        { term: 'Insured (Section II)', def: 'Named insured, spouse, resident relatives, persons under 21 in an insured’s care, students temporarily away at school, plus persons responsible for covered animals or watercraft.' },
        { term: 'Residence employee', def: 'A domestic worker (housekeeper, nanny) whose duties relate to the household; one of the few non-guests Coverage F can pay.' },
        { term: 'First aid expenses', def: 'Section II additional coverage for first aid to others rendered by the insured at the time of covered bodily injury.' }
      ]
    },

    /* ---------------- Lesson 4.5 ---------------- */
    {
      id: 'u4l5',
      title: 'Conditions & Loss Settlement — the 80% Rule',
      minutes: 16,
      objectives: [
        'List the insured’s duties after a property loss',
        'Apply the dwelling loss settlement provision: replacement cost when insured to at least 80% of replacement cost, with the formula',
        'Work a complete underinsurance example, including the greater-of-ACV floor',
        'Explain pair and set, appraisal, the mortgage clause, our option, and the other Section I conditions'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Conditions: the rulebook of the claim</h3>
<p>Section I conditions set the ground rules between insured and insurer. Start with the bookends: <strong>insurable interest and limit of liability</strong> — the insurer never pays more than the insured’s insurable interest, nor more than the applicable limit — and the insured’s <strong>duties after loss</strong>, because failing them can forfeit an otherwise valid claim.</p>`
        },
        {
          type: 'steps',
          title: 'Duties after loss — what the insured must do',
          items: [
            { title: 'Give prompt notice', text: 'Notify the insurer or agent promptly. In theft losses, also notify the police; in credit card losses, notify the card issuer. (Florida adds hard statutory deadlines — 1 year to give notice of a new claim — covered in Unit 5.)' },
            { title: 'Protect the property', text: 'Make reasonable and necessary emergency repairs to prevent further damage — tarp the roof, shut off the water — and keep the receipts. Failing to do so triggers the neglect exclusion.' },
            { title: 'Inventory the loss', text: 'Prepare an inventory of damaged personal property showing quantity, description, and actual cash value, with bills and receipts attached.' },
            { title: 'Show the property and submit to examination', text: 'Exhibit the damaged property as often as reasonably required, provide records, and submit to examination under oath if requested.' },
            { title: 'File proof of loss', text: 'Send a signed, sworn proof of loss within 60 days of the insurer’s request, stating the time, cause, interests, values, and other details of the loss.' }
          ]
        },
        {
          type: 'text',
          html: `<h3>Loss settlement — the heart of the lesson</h3>
<p>How much a Section I claim pays depends on <em>what</em> was damaged:</p>
<ul>
<li><strong>Personal property (Coverage C)</strong>, along with carpeting, appliances, awnings, antennas, and outdoor equipment, is settled at <strong>actual cash value</strong> — replacement cost minus depreciation — unless the personal property replacement cost endorsement is attached (Lesson 4.6).</li>
<li><strong>The dwelling and other structures (A and B)</strong> are settled at <strong>replacement cost — but only if the insured carried insurance equal to at least 80% of the dwelling’s replacement cost at the time of loss.</strong></li>
</ul>
<p>Carry less than 80%, and the policy pays the <strong>greater</strong> of:</p>
<ul>
<li>the <strong>actual cash value</strong> of the damaged part, or</li>
<li>the proportion of the loss that the formula produces: <strong>(amount carried ÷ amount you should have carried) × loss</strong>, where the amount you should have carried is <strong>80% of replacement cost</strong>.</li>
</ul>
<p>Then apply the deductible, and never pay more than the limit. This is the homeowners cousin of the coinsurance formula from Unit 2 — same did-over-should arithmetic, fixed at 80%.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example — the 80% rule start to finish',
          html: `<p>Replacement cost of the dwelling: <strong>$400,000</strong>. Required insurance: 80% × $400,000 = <strong>$320,000</strong>. The insured carries only <strong>$240,000</strong>. A kitchen fire causes an <strong>$80,000</strong> loss (ACV of the damaged part: $52,000; deductible $1,000).</p>
<p>Formula: ($240,000 ÷ $320,000) × $80,000 = <strong>0.75 × $80,000 = $60,000</strong>. Compare with ACV ($52,000) and take the greater: <strong>$60,000</strong>. Subtract the $1,000 deductible: the claim check is <strong>$59,000</strong> — a $20,000 underinsurance penalty on an $80,000 loss.</p>
<p>Had the insured carried $320,000 or more, the insurer would simply pay the <strong>full replacement cost of the repair, $80,000 minus the deductible</strong>.</p>`
        },
        {
          type: 'chart',
          chartType: 'line',
          title: 'Share of a partial loss paid vs. percent of replacement cost insured (illustrative)',
          labels: ['50%', '60%', '70%', '80%', '90%', '100%'],
          datasets: [{ label: 'Percent of partial loss paid (before deductible)', data: [63, 75, 88, 100, 100, 100] }],
          suffix: '%',
          note: 'Illustrative curve from the did/should formula with the 80% benchmark. At or above 80% of replacement cost, partial losses are paid in full at replacement cost; below it, every claim is shaved — subject to the ACV floor.'
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Two settlement quirks the exam likes: the insurer pays only the ACV portion <strong>until repair or replacement is actually completed</strong> (the insured can claim the replacement-cost holdback afterward), and for losses under both 5% of the insurance amount and $2,500, the insurer skips the holdback and pays replacement cost up front. Memorize the headline rule first: <strong>80% of replacement cost buys replacement-cost settlement</strong>.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — compute the settlement',
          questions: [
            {
              q: 'A home would cost $300,000 to rebuild. The insured carries $180,000 of Coverage A. Wind causes a $40,000 roof loss (ACV $26,000). Before the deductible, the policy pays:',
              choices: ['$40,000', '$26,000', '$30,000 — (180,000 ÷ 240,000) × 40,000', '$24,000'],
              answer: 2,
              explain: 'Required amount = 80% × $300,000 = $240,000. The formula gives (180,000 ÷ 240,000) × $40,000 = $30,000, which beats the $26,000 ACV — the policy pays the greater of the two.'
            },
            {
              q: 'On the same $300,000-replacement-cost home, how much Coverage A guarantees full replacement-cost settlement on partial losses?',
              choices: ['$150,000', '$300,000 only', '$240,000 or more', '$200,000'],
              answer: 2,
              explain: 'The threshold is 80% of replacement cost: 0.80 × $300,000 = $240,000. At or above that figure, partial dwelling losses are settled at replacement cost without penalty.'
            },
            {
              q: 'Under an unendorsed HO-3, damaged personal property is settled at:',
              choices: ['Replacement cost in all cases', 'Actual cash value', 'Agreed value', 'Market value'],
              answer: 1,
              explain: 'Coverage C is settled at ACV — replacement cost minus depreciation — unless the personal property replacement cost endorsement is purchased. The 80% replacement-cost rule applies to the DWELLING, not contents.'
            },
            {
              q: 'A sworn proof of loss must be submitted within how many days after the insurer requests it?',
              choices: ['30 days', '90 days', '14 days', '60 days'],
              answer: 3,
              explain: 'The HO conditions give the insured 60 days from the insurer’s request to file the signed, sworn proof of loss. Do not confuse this with Florida’s claim-handling deadlines for the insurer (Unit 5).'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>The rest of the conditions toolbox</h3>
<p>Each of these is a one-line exam answer waiting to happen:</p>
<ul>
<li><strong>Pair and set</strong> — lose one earring of a pair and the insurer may restore the set or pay the <em>difference in value</em> between the set before and after the loss. It does not owe the full pair’s value for half a pair.</li>
<li><strong>Appraisal</strong> — when insurer and insured agree coverage exists but disagree on the <em>amount</em>: each side hires its own appraiser (and pays for it), the appraisers select an umpire, and agreement of any two binds both parties. The parties share the umpire’s cost.</li>
<li><strong>Other insurance</strong> — if other insurance covers the same Section I loss, this policy pays its <strong>pro-rata</strong> share based on limits.</li>
<li><strong>Suit against us</strong> — legal action requires compliance with all policy terms and must be brought within the time allowed (the form says within a stated period after the loss; Florida law sets its own clock, covered in Unit 5).</li>
<li><strong>Our option</strong> — the insurer may choose to <strong>repair or replace</strong> with like kind and quality instead of paying cash, on written notice.</li>
<li><strong>Loss payment</strong> — payment is due within 60 days after agreement, entry of final judgment, or filing of an appraisal award.</li>
<li><strong>Abandonment</strong> — the insurer need not accept abandoned property. You cannot dump the charred house on the company and demand the limit.</li>
<li><strong>Mortgage clause</strong> — the lender named in the declarations gets paid as its interest appears, and its right to recover survives the insured’s misdeeds: <strong>even if the insured’s claim is denied (say, for arson or concealment), the mortgagee still collects</strong>, provided it pays any premium due, notifies the insurer of changes in ownership or hazard it knows about, and submits its own proof of loss. The insurer that pays the mortgagee takes over the mortgage rights (subrogation against the insured).</li>
<li><strong>No benefit to bailee</strong> — a dry cleaner or mover holding your property cannot collect under your policy.</li>
<li><strong>Recovered property</strong> — if stolen property turns up after payment, the insured may keep it and return the money, or keep the money and surrender the property.</li>
<li><strong>Volcanic eruption period</strong> — all eruptions within a <strong>72-hour</strong> period count as one occurrence (one deductible).</li>
<li><strong>Policy period</strong> — only losses occurring during the policy period are covered. <strong>Concealment or fraud</strong> by an insured voids coverage as to that insured.</li>
</ul>`
        },
        {
          type: 'table',
          caption: 'Condition quick-match (a favorite exam format)',
          headers: ['Situation', 'Condition that answers it'],
          rows: [
            ['Insured and insurer agree the loss is covered but are $30,000 apart on value', '<strong>Appraisal</strong> — two appraisers plus an umpire; any two agreeing binds'],
            ['One of a pair of antique lamps is destroyed', '<strong>Pair and set</strong> — pay the difference in value of the set, not the whole set'],
            ['Insured torches his own house; the bank still wants its money', '<strong>Mortgage clause</strong> — the innocent mortgagee is still paid as its interest appears'],
            ['Insurer prefers to rebuild rather than write a check', '<strong>Our option</strong> — repair or replace with like kind and quality on written notice'],
            ['Insured ships the wreckage to the insurer and demands the limit', '<strong>Abandonment</strong> — the insurer is not obligated to accept abandoned property'],
            ['Stolen painting recovered a year after the claim was paid', '<strong>Recovered property</strong> — insured chooses: keep property and refund, or keep payment'],
            ['Two policies cover the same house fire', '<strong>Other insurance</strong> — each pays its pro-rata share by limits']
          ]
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>The mortgage clause question is nearly guaranteed. The mortgagee’s protection is <strong>independent of the insured’s conduct</strong> — denial of the homeowner’s claim for fraud, arson, or breached conditions does <em>not</em> defeat the lender’s recovery, so long as the lender honors its own small duties (pay premium on demand, give notice of known ownership or hazard changes, file proof of loss). That independence is the whole point of the standard mortgage clause.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.5 key cards',
          cards: [
            { front: 'The 80% rule', back: 'Dwelling losses settle at replacement cost only if insurance ≥ 80% of the dwelling’s replacement cost at the time of loss.' },
            { front: 'Underinsured formula', back: '(Amount carried ÷ 80% of replacement cost) × loss — pay the GREATER of that or ACV, minus deductible.' },
            { front: 'Personal property settlement', back: 'Actual cash value (RC minus depreciation), unless the replacement cost endorsement is added.' },
            { front: 'Proof of loss deadline', back: 'Within 60 days after the insurer requests it — signed and sworn.' },
            { front: 'Appraisal', back: 'For disputes over AMOUNT only: each party an appraiser, appraisers pick an umpire, any two in agreement bind.' },
            { front: 'Pair and set', back: 'Insurer pays the difference between the value of the set before and after losing one piece.' },
            { front: 'Mortgage clause', back: 'Lender is paid as its interest appears — even when the insured’s own claim is denied for fraud or arson.' },
            { front: 'Our option', back: 'Insurer may elect to repair or replace with like kind and quality instead of paying cash.' },
            { front: 'Abandonment', back: 'Not allowed — the insurer never has to accept abandoned property.' },
            { front: 'Volcanic eruption period', back: 'All eruptions within 72 hours = one occurrence, one deductible.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — conditions in practice',
          questions: [
            {
              q: 'After a covered fire, the insured and insurer agree the loss is covered but cannot agree whether the repair is worth $45,000 or $70,000. The policy’s mechanism is:',
              choices: ['Arbitration before the DFS', 'Appraisal — each picks an appraiser, the appraisers pick an umpire', 'Immediate lawsuit', 'Subrogation'],
              answer: 1,
              explain: 'Appraisal resolves disputes over the AMOUNT of a covered loss. Each side pays its own appraiser and splits the umpire; agreement of any two is binding. Coverage disputes (is it covered at all?) are not appraisal material.'
            },
            {
              q: 'An insured is convicted of burning down his own insured home. The mortgagee bank with a properly listed interest:',
              choices: [
                'Collects nothing because the insured committed fraud',
                'Collects only if it forecloses first',
                'Is paid to the extent of its mortgage interest despite the denial of the insured’s claim',
                'Must sue the insured’s spouse'
              ],
              answer: 2,
              explain: 'The standard mortgage clause gives the lender rights independent of the insured. The insurer pays the mortgagee’s interest and is subrogated to the bank’s mortgage rights against the arsonist insured.'
            },
            {
              q: 'One of the insured’s matched pair of $6,000 candlesticks (worth $2,000 each alone) is stolen. Under pair and set, the insurer owes:',
              choices: [
                '$6,000 — the value of the pair',
                '$2,000 — the single-item value',
                '$3,000 — half the pair value automatically',
                '$4,000 — the difference between the pair’s value before ($6,000) and after ($2,000) the loss'
              ],
              answer: 3,
              explain: 'Pair and set pays the difference in value of the set before and after the loss: $6,000 − $2,000 = $4,000. The insured is indemnified for the real economic harm, not gifted a full new pair.'
            },
            {
              q: 'A home insured for $250,000 has a replacement cost of $250,000. A covered $30,000 partial loss occurs (deductible $2,500). The settlement is:',
              choices: ['$27,500 at replacement cost — the 80% test is satisfied', '$24,000 after a coinsurance penalty', '$30,000 with no deductible', 'The ACV of the damaged part only'],
              answer: 0,
              explain: 'Carrying 100% of replacement cost easily clears the 80% benchmark ($200,000), so the partial loss is paid at full replacement cost minus the deductible: $30,000 − $2,500 = $27,500.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Duties after loss', def: 'The insured’s claim obligations: prompt notice, protect the property, inventory, exhibit and cooperate, and sworn proof of loss within 60 days of request.' },
        { term: 'Proof of loss', def: 'The insured’s signed, sworn statement of the loss details, due within 60 days after the insurer requests it.' },
        { term: 'Loss settlement (dwelling)', def: 'Replacement cost settlement on Coverages A and B when insurance equals at least 80% of the dwelling’s replacement cost at the time of loss.' },
        { term: '80% rule', def: 'The insurance-to-value benchmark for replacement cost settlement; below it the insurer pays the greater of ACV or the did/should proportion of the loss.' },
        { term: 'Actual cash value (ACV)', def: 'Replacement cost minus depreciation — the default settlement basis for personal property.' },
        { term: 'Replacement cost', def: 'The cost to repair or replace with like kind and quality at current prices, without deduction for depreciation.' },
        { term: 'Pair and set clause', def: 'For loss to part of a pair or set, the insurer pays the difference in value of the set before and after the loss, or restores the set.' },
        { term: 'Appraisal condition', def: 'The method for resolving disputes over loss amount: two party-chosen appraisers and an umpire; agreement of any two binds.' },
        { term: 'Our option', def: 'The insurer’s right to repair or replace damaged property with like kind and quality instead of paying cash.' },
        { term: 'Abandonment condition', def: 'The insurer is not required to accept property abandoned by the insured.' },
        { term: 'Standard mortgage clause', def: 'Protects the lender’s interest independently of the insured’s conduct; the mortgagee is paid even when the insured’s claim is denied.' },
        { term: 'No benefit to bailee', def: 'A party holding the insured’s property for a fee cannot benefit from the insured’s coverage.' },
        { term: 'Recovered property', def: 'When paid-for stolen property is recovered, the insured elects to keep the property and refund the payment, or keep the payment.' },
        { term: 'Other insurance (pro-rata)', def: 'When two policies cover the same loss, each pays in proportion to its limit.' }
      ]
    },

    /* ---------------- Lesson 4.6 ---------------- */
    {
      id: 'u4l6',
      title: 'HO-4, HO-6 & the Endorsements That Matter',
      minutes: 15,
      objectives: [
        'Explain what the HO-4 covers for tenants and why Coverage D is based on Coverage C',
        'Describe the HO-6 condo form, its small Coverage A, and where the association’s master policy stops',
        'Identify the major homeowners endorsements and the gap each one closes',
        'Recommend the right form and endorsements for common Florida living situations'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>HO-4 — the renter’s package</h3>
<p>A tenant owns no building, so the HO-4 (Contents Broad Form) strips Section I down to what a renter actually needs: <strong>Coverage C personal property on the broad named perils, Coverage D loss of use at 30% of C</strong>, and the full Section II liability package (Coverage E and F). There is no Coverage A or B in any meaningful amount.</p>
<p>Two HO-4 features earn exam questions:</p>
<ul>
<li><strong>Building additions and alterations</strong> — an additional coverage equal to <strong>10% of Coverage C</strong> for improvements the tenant installs at their own cost (built-in shelving, upgraded fixtures). The landlord’s policy does not cover the tenant’s improvements; this does.</li>
<li><strong>Same liability, same sub-limits</strong> — everything you learned about Coverage C special limits, Coverage E, Coverage F, and damage to property of others applies to renters exactly as it does to homeowners.</li>
</ul>
<p>Renters insurance is cheap because the big-ticket item — the building — belongs to someone else. The biggest agency failure with tenants is simply not offering it.</p>
<h3>HO-6 — the condo unit-owner’s form</h3>
<p>A condominium splits one building between many owners plus an association, so the HO-6 has to dovetail with the <strong>association’s master policy</strong>. The unit-owner’s HO-6 provides:</p>
<ul>
<li><strong>Coverage A (dwelling)</strong> — a deliberately small base amount (commonly <strong>$5,000</strong>, increasable) for the parts of the building the unit-owner is responsible for: interior walls, floors, cabinets, fixtures, and improvements, as defined by the condo documents.</li>
<li><strong>Coverage C</strong> — personal property on broad named perils, with <strong>Coverage D at 50% of C</strong>.</li>
<li><strong>Loss assessment coverage</strong> — pays the insured’s share of an assessment the association levies after a loss to common property exceeds the master policy.</li>
</ul>`
        },
        {
          type: 'compare',
          title: 'Where the master policy ends and the HO-6 begins',
          left: {
            title: 'Association master policy',
            items: [
              'The building shell, roof, and common elements',
              '<strong>Bare walls</strong> versions stop at the unfinished interior surfaces',
              '<strong>All-in</strong> versions include fixtures and standard finishes',
              'Paid for through association dues'
            ]
          },
          right: {
            title: 'Unit-owner’s HO-6',
            items: [
              'Interior finishes, cabinets, fixtures, improvements (Coverage A)',
              'All personal property (Coverage C)',
              'Personal liability and medical payments (E and F)',
              'Loss assessment for the owner’s share of master-policy shortfalls'
            ]
          }
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — condo association vs. unit owner',
          html: `<p>Florida statute draws the property line for condos: the association insures the building as originally constructed, while the <strong>unit owner is responsible for floor coverings, wall coverings, ceiling coverings, cabinets, countertops, appliances, water heaters, and built-in fixtures within the unit</strong>. In a state full of condos, knowing this split is daily bread for a customer representative — it determines how much Coverage A an HO-6 needs.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — HO-4 and HO-6',
          questions: [
            {
              q: 'A tenant spends $4,000 installing custom shelving in her rented apartment. A covered fire destroys it. Her HO-4 responds under:',
              choices: [
                'Coverage A — dwelling',
                'Building additions and alterations — 10% of Coverage C',
                'Coverage B — other structures',
                'The landlord’s policy only'
              ],
              answer: 1,
              explain: 'The HO-4 has no Coverage A, but its building additions and alterations additional coverage (10% of Coverage C) covers improvements the tenant installed at their own expense.'
            },
            {
              q: 'After a hurricane damages the condo clubhouse, the association assesses every unit owner $3,000 for repairs above the master policy limits. The HO-6 coverage designed for this is:',
              choices: ['Coverage B', 'Ordinance or law', 'Loss assessment coverage', 'Fair rental value'],
              answer: 2,
              explain: 'Loss assessment coverage pays the unit owner’s share of assessments levied because a covered loss to common property exceeded the association’s insurance.'
            },
            {
              q: 'Coverage D (loss of use) in an HO-6 is what percentage of Coverage C?',
              choices: ['10%', '20%', '30%', '50%'],
              answer: 3,
              explain: 'HO-6 Coverage D is 50% of Coverage C. The HO-4 uses 30% of C, and the HO-2/3/5 use 30% of Coverage A.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Endorsements — tailoring the package</h3>
<p>Endorsements modify the standard form. Each of the following exists to close a specific gap you already know about — connect the endorsement to the gap and the exam questions answer themselves.</p>`
        },
        {
          type: 'table',
          caption: 'Major homeowners endorsements and the gap each closes',
          headers: ['Endorsement', 'The gap it closes', 'What it does'],
          rows: [
            ['<strong>Scheduled personal property</strong>', 'Coverage C sub-limits ($1,500 jewelry theft, etc.) and named perils', 'Lists specific items at appraised values with open-peril coverage, typically no deductible'],
            ['<strong>Personal property replacement cost</strong>', 'Contents settle at ACV by default', 'Upgrades Coverage C settlement to replacement cost'],
            ['<strong>Water backup / sump overflow</strong>', 'Backup through sewers and drains is excluded', 'Buys back a stated limit for water backup losses'],
            ['<strong>Personal injury</strong>', 'Coverage E covers only bodily injury and property damage', 'Adds libel, slander, false arrest, invasion of privacy, wrongful eviction'],
            ['<strong>Home business / permitted incidental occupancy</strong>', 'Business property sub-limits and the business liability exclusion', 'Restores property and liability coverage for an in-home business'],
            ['<strong>Inflation guard</strong>', 'Coverage A falls behind rising construction costs', 'Automatically increases limits a set percentage each year'],
            ['<strong>Ordinance or law (increased)</strong>', 'Base policy gives only 10% of A for code upgrades', 'Raises the percentage for demolition and code-required rebuilding'],
            ['<strong>Sinkhole loss coverage (FL)</strong>', 'Only catastrophic ground cover collapse is automatic', 'Optional Florida endorsement covering sinkhole damage (Unit 5)'],
            ['<strong>Animal liability buy-back (FL market)</strong>', 'Many Florida carriers exclude dog liability', 'Restores liability for animal-related injuries']
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A client’s engagement ring is appraised at $9,000. Her HO-3 would pay at most <strong>$1,500 if it is stolen</strong> (the jewelry theft sub-limit) and nothing if she simply loses it (theft is a named peril; "mysterious disappearance" is not). Scheduled on a personal property endorsement at $9,000, the ring is covered <strong>open-peril — including accidental loss — at its appraised value with no deductible</strong>. That conversation is the classic cross-service moment for a customer representative.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Endorsement questions are usually gap-matching questions in disguise. Memorize the pairs: sub-limits → scheduled property; ACV contents → replacement cost endorsement; sewer backup exclusion → water backup; libel/slander → personal injury; business exclusion → home business endorsement.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 4.6 key terms',
          cards: [
            { front: 'HO-4', back: 'Tenant’s form: Coverage C broad named perils + D (30% of C) + full Section II. No dwelling coverage.' },
            { front: 'Building additions & alterations (HO-4)', back: 'Additional coverage — 10% of Coverage C — for improvements the tenant installs.' },
            { front: 'HO-6', back: 'Condo unit-owner’s form: small Coverage A (base ~$5,000), Coverage C broad perils, D = 50% of C.' },
            { front: 'Loss assessment coverage', back: 'Pays the insured’s share of an association assessment after a covered loss exceeds the master policy.' },
            { front: 'Scheduled personal property endorsement', back: 'Open-peril, appraised-value coverage for listed valuables; bypasses sub-limits; usually no deductible.' },
            { front: 'Personal property replacement cost endorsement', back: 'Upgrades Coverage C settlement from ACV to replacement cost.' },
            { front: 'Water backup endorsement', back: 'Buys back the excluded peril of water backing up through sewers and drains.' },
            { front: 'Personal injury endorsement', back: 'Adds libel, slander, false arrest, and similar offenses to Section II.' },
            { front: 'Inflation guard', back: 'Automatically increases policy limits annually to keep pace with construction costs.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — endorsements',
          questions: [
            {
              q: 'A client runs a bookkeeping business from her spare bedroom with $6,000 of office equipment and regular client visits. Her unendorsed HO-3 leaves her exposed because:',
              choices: [
                'Business property has reduced sub-limits and business liability is excluded',
                'Home offices void the entire policy',
                'Coverage D does not apply to bedrooms',
                'Client visits are covered only under Coverage F'
              ],
              answer: 0,
              explain: 'On-premises business property faces a small sub-limit and Section II excludes business liability entirely. A home business or incidental occupancy endorsement closes both gaps.'
            },
            {
              q: 'Which endorsement changes the SETTLEMENT BASIS of Coverage C rather than adding a new peril or limit?',
              choices: ['Water backup', 'Personal property replacement cost', 'Personal injury', 'Inflation guard'],
              answer: 1,
              explain: 'The personal property replacement cost endorsement converts contents settlement from ACV to replacement cost. Water backup adds a peril; personal injury adds offenses; inflation guard adjusts limits.'
            },
            {
              q: 'A neighbor sues your insured for slander after a heated HOA dispute. The unendorsed HO-3 provides:',
              choices: [
                'Coverage E defense and damages',
                'Coverage F medical payments',
                'No coverage — slander is not bodily injury or property damage',
                'Coverage up to $1,000 under damage to property of others'
              ],
              answer: 2,
              explain: 'Coverage E responds to bodily injury and property damage. Slander is a personal injury offense, covered only if the personal injury endorsement was added.'
            },
            {
              q: 'For a Florida condo unit owner whose association master policy is written "bare walls," the BEST advice is to:',
              choices: [
                'Skip Coverage A since the association insures the building',
                'Increase HO-6 Coverage A to cover interior finishes, cabinets, and fixtures',
                'Buy an HO-8 instead',
                'Rely on loss assessment coverage for interior damage'
              ],
              answer: 1,
              explain: 'Bare-walls master policies stop at unfinished interior surfaces, leaving floors, cabinets, fixtures, and finishes to the unit owner — exactly what HO-6 Coverage A must be sized to rebuild.'
            }
          ]
        }
      ],
      terms: [
        { term: 'HO-4 (Contents Broad Form)', def: 'The homeowners form for tenants: broad named-peril personal property coverage plus liability, with no dwelling coverage.' },
        { term: 'HO-6 (Unit-Owners Form)', def: 'The homeowners form for condominium unit owners, pairing a small Coverage A with personal property and liability coverage.' },
        { term: 'Building additions and alterations', def: 'HO-4 additional coverage (10% of Coverage C) for improvements a tenant installs at their own expense.' },
        { term: 'Master policy', def: 'The condominium association’s policy covering the building and common elements; written bare-walls or all-in.' },
        { term: 'Bare walls coverage', def: 'A master policy approach insuring only to the unfinished interior surfaces, leaving finishes to the unit owner.' },
        { term: 'Loss assessment coverage', def: 'Coverage for the insured’s share of an association assessment resulting from a covered loss to common property.' },
        { term: 'Scheduled personal property endorsement', def: 'An endorsement listing valuables individually at agreed values with open-peril coverage and usually no deductible.' },
        { term: 'Personal property replacement cost endorsement', def: 'An endorsement upgrading Coverage C loss settlement from actual cash value to replacement cost.' },
        { term: 'Water backup endorsement', def: 'An endorsement restoring coverage for water that backs up through sewers, drains, or sump systems.' },
        { term: 'Personal injury endorsement', def: 'An endorsement adding offenses such as libel, slander, false arrest, and invasion of privacy to Section II.' },
        { term: 'Inflation guard endorsement', def: 'An endorsement that automatically increases policy limits by a set percentage to track construction costs.' },
        { term: 'Animal liability exclusion', def: 'A common Florida market exclusion removing liability coverage for injuries caused by the insured’s animals, reversible by buy-back endorsement.' }
      ]
    }
  ],

  /* ---------------- Unit 4 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Which homeowners form insures the dwelling on an OPEN-peril basis but personal property on NAMED perils?',
        choices: ['HO-2', 'HO-3', 'HO-5', 'HO-8'],
        answer: 1,
        explain: 'The HO-3 is the hybrid: open peril on Coverages A and B, broad named perils on Coverage C. The HO-5 is open peril on both; the HO-2 named peril on both.'
      },
      {
        q: 'A home insured under an HO-3 has Coverage A of $400,000. Without any endorsement, Coverage C is:',
        choices: ['$40,000', '$120,000', '$200,000', '$400,000'],
        answer: 2,
        explain: 'Coverage C defaults to 50% of Coverage A — here $200,000. Coverage B is 10% and Coverage D is 30% of A.'
      },
      {
        q: 'Burglars steal $6,000 of jewelry and $400 in cash from an insured home. The unendorsed HO-3 pays at most:',
        choices: ['$6,400', '$1,700', '$1,900', '$2,000'],
        answer: 1,
        explain: 'Theft of jewelry is capped at $1,500 and money at $200 — $1,700 total before the deductible. Scheduling the jewelry would have avoided the cap.'
      },
      {
        q: 'Which loss is COVERED under the HO-3 open-peril dwelling coverage?',
        choices: [
          'Foundation cracking from earth movement',
          'A tree crashing through the roof during a thunderstorm',
          'Gradual seepage of groundwater into the basement',
          'Flood surge from a nearby river'
        ],
        answer: 1,
        explain: 'Open peril covers everything not excluded — a falling tree qualifies. Earth movement, flood, and gradual seepage are all excluded perils.'
      },
      {
        q: 'Coverage E provides defense costs:',
        choices: [
          'Within the liability limit, reducing what is available for damages',
          'Only if the insured is ultimately found liable',
          'In addition to the limit of liability',
          'Only after the insured pays a defense deductible'
        ],
        answer: 2,
        explain: 'Defense is supplementary — paid in addition to the Coverage E limit, and owed even for groundless suits, until the insurer has paid its limit in damages.'
      },
      {
        q: 'A dinner guest slips on the insured’s wet patio and needs $800 of stitches. No one was negligent. The fastest-responding coverage is:',
        choices: ['Coverage E', 'Coverage F — medical payments to others', 'Coverage D', 'Damage to property of others'],
        answer: 1,
        explain: 'Coverage F pays reasonable medical expenses for guests injured on the premises without regard to fault — designed precisely to handle small injuries without a liability fight.'
      },
      {
        q: 'The insured’s 9-year-old son breaks a neighbor’s $700 camera. With no negligence claim filed, the HO-3 can pay under:',
        choices: [
          'Damage to property of others — up to $1,000',
          'Coverage C',
          'Coverage B',
          'Loss assessment'
        ],
        answer: 0,
        explain: 'Damage to property of others is a Section II additional coverage paying up to $1,000 per occurrence on a goodwill basis, no liability required.'
      },
      {
        q: 'A $300,000-replacement-cost home is insured for $210,000 when wind causes $40,000 of roof damage. Ignoring the deductible, the loss settlement formula pays:',
        choices: ['$40,000', '$35,000', '$28,000', '$21,000'],
        answer: 1,
        explain: '80% of $300,000 is $240,000. The insured carried $210,000, so the policy pays (210,000 ÷ 240,000) × $40,000 = $35,000 (or ACV if greater). Insuring to 80% would have produced full replacement cost.'
      },
      {
        q: 'Personal property of an insured student living in a college dorm is covered under the parents’ HO-3:',
        choices: [
          'Not at all',
          'Worldwide, subject to the 10% limit for property usually located at another residence',
          'Only while the student is home on break',
          'Only with a scheduled property endorsement'
        ],
        answer: 1,
        explain: 'Coverage C applies worldwide; property usually kept at another residence (like a dorm) is limited to 10% of Coverage C. Resident-relative students away at school remain insureds.'
      },
      {
        q: 'Which is an EXCLUDED loss under Section II of the homeowners policy?',
        choices: [
          'A guest bitten by the insured’s dog at a backyard barbecue',
          'Bodily injury caused intentionally by the insured',
          'A golf ball the insured hooks into a spectator',
          'The insured’s dog biting a delivery driver at the front door'
        ],
        answer: 1,
        explain: 'Intentional injury is excluded — insurance covers accidents. Dog bites and errant golf balls are classic covered occurrences (absent a specific animal exclusion).'
      },
      {
        q: 'The HO-8 exists primarily for:',
        choices: [
          'Newly built luxury homes',
          'Older homes whose replacement cost far exceeds market value',
          'Tenants in older buildings',
          'Mobile homes'
        ],
        answer: 1,
        explain: 'The HO-8 settles losses on an ACV/functional replacement basis so an older home with ornate construction can be insured near market value without moral hazard.'
      },
      {
        q: 'A condo unit owner needs coverage for her share of a $250,000 association shortfall after a hurricane damages the building lobby. The HO-6 coverage that responds is:',
        choices: ['Coverage A', 'Coverage C', 'Loss assessment', 'Ordinance or law'],
        answer: 2,
        explain: 'Loss assessment coverage pays the unit owner’s share of assessments levied for covered losses to common property exceeding the master policy.'
      },
      {
        q: 'Which endorsement would cover an insured sued for libel over a social media post?',
        choices: ['Personal injury', 'Home business', 'Water backup', 'Scheduled personal property'],
        answer: 0,
        explain: 'Libel, slander, defamation, false arrest, and invasion of privacy are personal injury offenses, added to Section II only by the personal injury endorsement.'
      },
      {
        q: 'An HO-4 differs from an HO-3 in that the HO-4:',
        choices: [
          'Has no Section II liability coverage',
          'Covers the dwelling on a named-peril basis',
          'Provides no dwelling coverage and bases Coverage D on Coverage C',
          'Cannot be endorsed'
        ],
        answer: 2,
        explain: 'The tenant form drops Coverages A and B (the landlord owns the building) and sets loss of use at 30% of Coverage C. Section II is identical to other HO forms.'
      },
      {
        q: 'Sudden discharge of water from a burst supply pipe ruins an insured’s wood floors. Under the HO-3 this loss is:',
        choices: [
          'Excluded as water damage',
          'Covered — sudden and accidental discharge is not an excluded water loss',
          'Covered only with a flood policy',
          'Limited to $1,500'
        ],
        answer: 1,
        explain: 'The water damage exclusion targets flood, surface water, sewer backup, and seepage. A sudden discharge from plumbing is a covered loss (the resulting damage, not the worn pipe itself).'
      }
    ]
  }
});

