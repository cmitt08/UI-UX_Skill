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
/*__MORE__*/
  ],
  exam: { questions: [] }
});
