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
/*__MORE__*/
  ],
  exam: { questions: [] }
});
