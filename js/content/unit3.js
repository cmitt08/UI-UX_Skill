/* Unit 3 — The Dwelling Policy */
window.PL.units.push({
  id: 'u3',
  number: 3,
  title: 'The Dwelling Policy',
  icon: 'home',
  description: 'The DP program from the ground up: who needs a dwelling policy, how DP-1, DP-2, and DP-3 differ, what Coverages A through E actually pay, and the endorsements — broad theft and personal liability — that fill the gaps the base forms leave wide open.',
  lessons: [

    /* ---------------- Lesson 3.1 ---------------- */
    {
      id: 'u3l1',
      title: 'DP Basics & the Three Forms',
      minutes: 15,
      objectives: [
        'Identify who needs a dwelling policy and the eligibility rules',
        'List the DP-1 basic perils and the extended coverage (EC) and VMM options',
        'Distinguish DP-1 basic, DP-2 broad, and DP-3 special form coverage approaches',
        'Recognize the two big gaps in every unendorsed DP: no theft and no liability'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Why the dwelling program exists</h3>
<p>The homeowners policy (Unit 4) is a package built for <strong>owner-occupants</strong>. But plenty of residential property does not fit that mold, and the <strong>dwelling policy (DP)</strong> is the market’s answer. A DP is the right tool when the property is:</p>
<ul>
<li><strong>A rental property</strong> — the classic DP customer is a landlord insuring a house or small building rented to tenants. <strong>The DP does not require owner occupancy.</strong></li>
<li><strong>A residential building of one to four units</strong> — single-family homes, duplexes, triplexes, and fourplexes, with up to <strong>five roomers or boarders</strong> allowed. Five or more units is commercial territory.</li>
<li><strong>A seasonal or vacation home</strong> — occupied part of the year, which many HO underwriters dislike but the DP accepts.</li>
<li><strong>An older or lower-value home</strong> that cannot meet homeowners underwriting or replacement-cost requirements — the DP-1’s ACV settlement keeps it insurable and affordable.</li>
<li><strong>A home that simply fails HO eligibility</strong> — under renovation, in probate, held by an estate or investor.</li>
</ul>
<p>Incidental service occupancies — a small office, private school, or studio — are permitted, but the building must be used <strong>principally for residential purposes</strong>. Mobile homes generally need their own program (Unit 8).</p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'The two famous DP gaps',
          html: `<p>Burn these into memory: an unendorsed dwelling policy provides <strong>NO theft coverage and NO liability coverage</strong>. DP-2 and DP-3 cover <em>damage a burglar does breaking in</em> — but not the property the burglar carries away. Both gaps are filled only by endorsement (Lesson 3.3): the broad or limited theft endorsement, and the personal liability supplement.</p>`
        },
        {
          type: 'text',
          html: `<h3>The three forms: basic, broad, special</h3>
<p><strong>DP-1 (Basic form).</strong> Out of the box it covers just three perils: <strong>fire, lightning, and internal explosion</strong>. For extra premium, two famous options bolt on:</p>
<ul>
<li><strong>Extended coverage (EC)</strong> adds eight perils: <strong>windstorm, hail, explosion, riot or civil commotion, aircraft, vehicles, smoke, and volcanic eruption</strong>. (Exam nugget: the vehicles peril excludes damage done by a vehicle owned or operated by the insured or a resident of the premises.)</li>
<li><strong>Vandalism and malicious mischief (VMM)</strong> may then be added — VMM rides on top of EC; you cannot buy it alone.</li>
</ul>
<p><strong>DP-2 (Broad form).</strong> Builds in the DP-1 perils, EC, and VMM, then adds the <strong>broad-form perils</strong>: damage by burglars, falling objects, weight of ice, snow or sleet, accidental discharge or overflow of water or steam, sudden and accidental tearing apart or bulging of heating/AC/sprinkler systems, freezing of plumbing, sudden and accidental damage from artificially generated electrical current, and glass breakage. Still <strong>named peril</strong> — if it is not on the list, it is not covered, and the <strong>insured carries the burden of proof</strong> (Unit 2).</p>
<p><strong>DP-3 (Special form).</strong> The flagship. The <strong>dwelling and other structures (Coverages A and B) are covered open peril</strong> — all risks of direct physical loss except what is excluded — while <strong>personal property (Coverage C) remains covered on the broad named perils</strong>. On an open-peril claim, the <strong>insurer must prove an exclusion applies</strong> to deny it.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hooks: DP-1’s base perils are <strong>F-L-IE — Fire, Lightning, Internal Explosion</strong>. For the forms: <strong>1 = basic list, 2 = bigger list, 3 = open peril on the building</strong>. And in every DP form, contents are never open peril — only the DP-3 <em>building</em> earns that treatment.</p>`
        },
        {
          type: 'table',
          caption: 'DP-1 vs. DP-2 vs. DP-3 — the mandatory comparison',
          headers: ['Feature', 'DP-1 Basic', 'DP-2 Broad', 'DP-3 Special'],
          rows: [
            ['Dwelling & other structures (A/B)', 'Named perils: fire, lightning, internal explosion; EC and VMM optional', 'Named perils: basic + EC + VMM + broad-form perils', '<strong>Open peril</strong> (all risk except exclusions)'],
            ['Personal property (C)', 'Same named perils as the dwelling', 'Broad named perils', 'Broad <strong>named</strong> perils (never open peril)'],
            ['Valuation of dwelling', '<strong>ACV</strong>', '<strong>Replacement cost</strong> (insured to 80% of RC)', '<strong>Replacement cost</strong> (insured to 80% of RC)'],
            ['Coverage D — fair rental value', 'Up to 10% of A, <em>part of</em> Coverage A; max 1/12 per month', 'Included — D + E combined are <em>additional</em> insurance', 'Included — D + E combined are <em>additional</em> insurance'],
            ['Coverage E — additional living expense', '<strong>Not available</strong>', 'Included', 'Included'],
            ['Vandalism (VMM)', 'Optional add-on (requires EC)', 'Built in', 'Built in'],
            ['Theft of property', 'Not covered', 'Not covered (only burglar <em>damage</em>)', 'Not covered (only burglar <em>damage</em>)'],
            ['Liability', 'Not covered', 'Not covered', 'Not covered']
          ]
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'How many perils each configuration names (illustrative count)',
          labels: ['DP-1 base (F-L-IE)', 'DP-1 + EC + VMM', 'DP-2 broad form'],
          datasets: [{ label: 'Named perils', data: [3, 12, 18] }],
          note: 'Illustrative counts — editions group perils differently. DP-3 is missing on purpose: its dwelling coverage is open peril, so there is no list to count; only its contents use the broad named perils.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — forms & perils',
          questions: [
            {
              q: 'With no optional coverages added, a DP-1 covers which perils?',
              choices: [
                'Fire, lightning, windstorm, and hail',
                'Fire, lightning, and internal explosion',
                'All risks of direct physical loss',
                'The broad-form perils'
              ],
              answer: 1,
              explain: 'The unendorsed DP-1 covers only fire, lightning, and internal explosion (F-L-IE). Windstorm and hail arrive only with the extended coverage (EC) option.'
            },
            {
              q: 'A landlord wants vandalism coverage on a DP-1. Vandalism and malicious mischief (VMM):',
              choices: [
                'Is automatically included in every DP-1',
                'Can never be added to a DP-1',
                'Replaces the fire peril when added',
                'May be added only in conjunction with extended coverage (EC)'
              ],
              answer: 3,
              explain: 'VMM is an optional DP-1 peril that rides on top of EC — you cannot buy VMM without EC. In DP-2 and DP-3, VMM is built in.'
            },
            {
              q: 'Under a DP-3, the dwelling itself is insured against:',
              choices: [
                'All risks of direct physical loss except those excluded',
                'Only fire, lightning, and internal explosion',
                'Only the broad named perils',
                'Theft and vandalism only'
              ],
              answer: 0,
              explain: 'DP-3 is the special (open peril) form for Coverages A and B. Personal property under the same policy remains on broad NAMED perils — a favorite exam distinction.'
            }
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida — where DPs live in the real market',
          html: `<p>Florida’s huge stock of rental houses, inherited older homes, and seasonal snowbird properties makes the DP program a daily reality for a 4-40. Two Florida twists to expect: <strong>hurricane deductibles</strong> (the $500/2%/5%/10% options from Unit 5) apply to dwelling policies just as they do to homeowners, and in designated coastal areas the <strong>windstorm peril may be excluded</strong> from the private policy and written separately — historically through Citizens Property Insurance Corporation, the state’s insurer of last resort (Unit 5).</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 3.1 key terms',
          cards: [
            { front: 'Who buys a DP?', back: 'Landlords (1-4 unit rentals), owners of seasonal/vacation homes, older homes, and homes that fail HO eligibility. Owner occupancy NOT required.' },
            { front: 'DP eligibility', back: 'Residential buildings of 1-4 units, up to 5 roomers or boarders; incidental occupancies OK; principally residential use.' },
            { front: 'DP-1 base perils', back: 'Fire, Lightning, Internal Explosion — F-L-IE. ACV settlement.' },
            { front: 'Extended coverage (EC)', back: 'Adds windstorm, hail, explosion, riot/civil commotion, aircraft, vehicles, smoke, volcanic eruption to a DP-1.' },
            { front: 'VMM', back: 'Vandalism & malicious mischief — optional on DP-1 and only with EC; built into DP-2/DP-3.' },
            { front: 'DP-2', back: 'Broad form: named perils = basic + EC + VMM + broad-form perils; RC on the dwelling.' },
            { front: 'DP-3', back: 'Special form: OPEN peril on dwelling/other structures, broad named perils on contents; RC on the dwelling.' },
            { front: 'The two DP gaps', back: 'No theft coverage and no liability coverage in any unendorsed DP form.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — eligibility & gaps',
          questions: [
            {
              q: 'Which property is NOT eligible for a dwelling policy?',
              choices: [
                'A duplex rented to two families',
                'A seasonal lakefront cottage',
                'A six-unit apartment building',
                'A single-family home owned by an estate'
              ],
              answer: 2,
              explain: 'The DP program stops at four residential units. Five or more units is a commercial habitational risk. Rentals, seasonal homes, and estate-owned homes are exactly what the DP exists for.'
            },
            {
              q: 'A burglar pries open the back door of a tenant-occupied rental insured on an unendorsed DP-3, wrecks the door frame, and steals the landlord’s refrigerator. The DP-3 pays for:',
              choices: [
                'The door damage only — theft of property is not covered',
                'The refrigerator only',
                'Both the door and the refrigerator',
                'Neither loss'
              ],
              answer: 0,
              explain: 'DP-2/DP-3 cover damage caused BY burglars (the door), but no unendorsed DP covers theft of property (the refrigerator). That requires the theft endorsement — Lesson 3.3.'
            },
            {
              q: 'A tenant slips on the stairs of a rental house and sues the landlord. The landlord’s unendorsed DP-3 will:',
              choices: [
                'Defend and pay up to the Coverage A limit',
                'Pay medical payments only',
                'Pay only if the tenant was a roomer or boarder',
                'Provide no protection — an unendorsed DP has no liability coverage'
              ],
              answer: 3,
              explain: 'Liability is the second famous DP gap. The landlord needed the personal liability supplement (CPL) or a separate liability policy. The base DP is pure property coverage.'
            },
            {
              q: 'Under extended coverage added to a DP-1, the "vehicles" peril would NOT pay when:',
              choices: [
                'A delivery truck crashes through the front porch',
                'The insured backs his own pickup into the garage wall',
                'A stranger’s car jumps the curb and hits the house',
                'A neighbor’s runaway trailer strikes the fence'
              ],
              answer: 1,
              explain: 'The EC vehicles peril excludes damage caused by vehicles owned or operated by the insured or a resident of the premises. Strangers’ vehicles are covered.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Dwelling policy (DP)', def: 'A monoline property policy for residential buildings of one to four units; does not require owner occupancy and contains no theft or liability coverage unless endorsed.' },
        { term: 'DP-1 (basic form)', def: 'The basic dwelling form covering fire, lightning, and internal explosion on an ACV basis, with EC and VMM available as options.' },
        { term: 'DP-2 (broad form)', def: 'The broad dwelling form covering the basic perils, EC, VMM, and the broad-form perils on a named-peril basis, with replacement cost on the dwelling.' },
        { term: 'DP-3 (special form)', def: 'The special dwelling form covering the dwelling and other structures open peril and personal property on broad named perils.' },
        { term: 'Extended coverage (EC)', def: 'An optional DP-1 peril package: windstorm, hail, explosion, riot or civil commotion, aircraft, vehicles, smoke, and volcanic eruption.' },
        { term: 'Vandalism and malicious mischief (VMM)', def: 'Willful damage to property; optional on the DP-1 (only with EC) and included in DP-2 and DP-3.' },
        { term: 'Internal explosion', def: 'An explosion occurring inside the dwelling or a structure containing covered property — one of the three DP-1 base perils.' },
        { term: 'Broad-form perils', def: 'The added DP-2 perils: burglar damage, falling objects, weight of ice/snow/sleet, accidental discharge of water or steam, tearing apart of heating systems, freezing, artificial electrical current, glass breakage.' },
        { term: 'Roomer or boarder', def: 'A person renting a room in the dwelling; DP eligibility allows up to five.' },
        { term: 'Seasonal dwelling', def: 'A dwelling occupied only part of the year, such as a vacation or snowbird home; eligible for the DP program.' },
        { term: 'Incidental occupancy', def: 'A permitted small business use — such as an office or studio — in a building used principally as a residence.' },
        { term: 'Open peril (DP-3 dwelling)', def: 'Coverage for all risks of direct physical loss except exclusions; the insurer bears the burden of proving an exclusion.' }
      ]
    },

    /* ---------------- Lesson 3.2 ---------------- */
    {
      id: 'u3l2',
      title: 'DP Coverages A–E & Other Coverages',
      minutes: 15,
      objectives: [
        'Describe Coverages A through E and their default percentage limits',
        'Distinguish fair rental value (Coverage D) from additional living expense (Coverage E)',
        'Identify the other coverages, including property removed time limits',
        'Apply DP valuation rules: ACV under DP-1, replacement cost on the DP-2/3 dwelling, ACV on contents always'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The five lettered coverages</h3>
<p><strong>Coverage A — Dwelling.</strong> The described building, <strong>structures attached to it</strong> (an attached garage or deck), and <strong>materials and supplies on or next to the premises</strong> for its construction or repair. Building service equipment is included; <strong>land is never covered</strong>.</p>
<p><strong>Coverage B — Other structures.</strong> Detached structures set apart from the dwelling by clear space — a detached garage, shed, or fence. The default limit is <strong>10% of Coverage A</strong>. In the DP-1 that 10% is <em>part of</em> Coverage A (using it reduces what is left for the house); in DP-2 and DP-3 it is <strong>additional insurance</strong>. Structures rented to non-tenants or used for business are excluded.</p>
<p><strong>Coverage C — Personal property.</strong> Household contents owned or used by the insured and resident family members, <strong>while at the described location</strong> — there is no automatic percentage tied to Coverage A; the insured selects the amount (a landlord may need only enough for appliances and window treatments). Up to <strong>10% of the Coverage C limit</strong> follows the property <strong>anywhere in the world</strong>.</p>
<p><strong>Coverage D — Fair rental value.</strong> When a covered loss makes <strong>the rented portion</strong> of the dwelling unfit to live in, Coverage D replaces the <strong>rent the landlord loses</strong> — the property’s rental value while it is being repaired, for the part actually <strong>rented or held for rental</strong>. It does not pay because a unit merely sits empty; the trigger is a covered loss making rented space uninhabitable. In the DP-1, up to <strong>10% of Coverage A</strong> may be used this way (as part of, not in addition to, Coverage A) with a monthly cap of <strong>1/12 of that amount</strong>. In DP-2 and DP-3, Coverages <strong>D and E combined provide up to 20% of Coverage A as additional insurance</strong>.</p>
<p><strong>Coverage E — Additional living expense (ALE).</strong> Available <strong>only in DP-2 and DP-3 — there is no Coverage E in a DP-1</strong>. ALE pays the <strong>increase in the insured’s own household living costs</strong> (hotel, meals, laundry) when a covered loss drives an owner-occupant out of the dwelling.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Fair rental value vs. ALE',
          html: `<p><strong>Fair rental value (D)</strong> = the <em>landlord’s lost rent</em> on the portion rented or held for rental. <strong>Additional living expense (E)</strong> = the <em>insured’s own extra cost of living elsewhere</em>. A pure landlord claims D; an owner-occupant burned out of the house claims E; an owner who lives in one half of a duplex and rents the other half may claim both after one fire.</p>`
        },
        {
          type: 'table',
          caption: 'DP coverages and default limits',
          headers: ['Coverage', 'What it pays', 'Default limit'],
          rows: [
            ['<strong>A — Dwelling</strong>', 'The building, attached structures, building materials on site', 'Amount selected on the declarations'],
            ['<strong>B — Other structures</strong>', 'Detached garage, shed, fence', '<strong>10% of A</strong> (part of A in DP-1; additional in DP-2/3)'],
            ['<strong>C — Personal property</strong>', 'Contents at the described location; 10% of C worldwide', 'Amount selected by the insured'],
            ['<strong>D — Fair rental value</strong>', 'Lost rent when a covered loss makes rented space unfit', 'DP-1: up to 10% of A within A, 1/12 per month; DP-2/3: D + E = <strong>20% of A additional</strong>'],
            ['<strong>E — Additional living expense</strong>', 'The insured’s increased cost of living elsewhere', '<strong>DP-2/3 only</strong> — shares the 20% of A with D']
          ]
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'Default DP percentage limits (standard ISO forms)',
          labels: ['Coverage B (% of A)', 'Coverage D, DP-1 (% of A)', 'D + E combined, DP-2/3 (% of A)', 'Off-premises contents (% of C)'],
          datasets: [{ label: 'Default percentage', data: [10, 10, 20, 10] }],
          suffix: '%',
          note: 'Standard ISO defaults — individual policies can be endorsed higher. Remember which percentages are PART OF Coverage A (DP-1) versus ADDITIONAL insurance (DP-2/3).'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — Coverages A–E',
          questions: [
            {
              q: 'A DP-3 insures a rental house for $200,000 under Coverage A. With no endorsements, the detached garage is automatically covered for up to:',
              choices: ['$20,000 — 10% of Coverage A, as additional insurance', '$10,000 — 5% of Coverage A', '$40,000 — 20% of Coverage A', 'Nothing unless scheduled'],
              answer: 0,
              explain: 'Coverage B (other structures) defaults to 10% of Coverage A — $20,000 here — and in DP-2/3 it is additional insurance. Only in the DP-1 does the 10% come out of Coverage A.'
            },
            {
              q: 'Which coverage is NOT available under any DP-1?',
              choices: ['Fair rental value', 'Other structures', 'Additional living expense', 'Personal property'],
              answer: 2,
              explain: 'Coverage E (ALE) exists only in DP-2 and DP-3. The DP-1 offers fair rental value (D) within Coverage A, but nothing for the insured’s own extra living costs.'
            },
            {
              q: 'A fire damages an unrented, never-advertised storage room in a dwelling insured on a DP-2. The landlord claims fair rental value for that room. Coverage D:',
              choices: [
                'Pays automatically for any unusable space',
                'Does not apply — the space was not rented or held for rental',
                'Pays double rent for up to 12 months',
                'Applies only after the mortgagee consents'
              ],
              answer: 1,
              explain: 'Fair rental value responds only for the portion of the property rented or held for rental that a covered loss makes unfit for use. Space never offered for rent generates no lost rent to indemnify.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>The other coverages — small print, real money</h3>
<p>Beyond the lettered coverages, the DP forms carry a set of <strong>other coverages</strong>. The tested ones:</p>
<ul>
<li><strong>Debris removal</strong> — the cost of hauling away the debris of covered property after a covered loss; included within the limit, not stacked on top.</li>
<li><strong>Improvements, alterations and additions</strong> — when the named insured is a <strong>tenant</strong> (yes, a tenant can buy a DP for built-ins), up to <strong>10% of Coverage C</strong> covers the tenant’s improvements to the building.</li>
<li><strong>Property removed</strong> — property moved out of harm’s way from a premises endangered by a covered peril is covered against direct loss from any cause for <strong>5 days under the DP-1</strong> and <strong>30 days under DP-2 and DP-3</strong>. A classic number question.</li>
<li><strong>Reasonable repairs</strong> — emergency measures to protect property from further damage (the Unit 2 duty, funded).</li>
<li><strong>Fire department service charge</strong> — up to <strong>$500</strong> when a fire department is called to protect covered property, no deductible.</li>
<li><strong>Trees, shrubs and plants</strong> (DP-2/3 only) — up to <strong>5% of Coverage A</strong> total, max <strong>$500 per item</strong>, and only for a short list of perils (fire, lightning, explosion, riot, aircraft, non-owned vehicles, vandalism) — <strong>not windstorm</strong>.</li>
<li><strong>Glass or safety glazing material and collapse</strong> — additional coverages in DP-2/3; newer editions also build in a modest <strong>ordinance or law</strong> allowance (commonly 10% of Coverage A) in the broad and special forms.</li>
</ul>
<h3>Valuation: the DP-1 vs. DP-2/3 dividing line</h3>
<p>Here is the rule the exam returns to again and again: <strong>the DP-1 settles every loss — building and contents — at actual cash value.</strong> <strong>DP-2 and DP-3 settle the dwelling and other structures at replacement cost</strong>, provided the insured carries coverage equal to at least <strong>80% of the building’s replacement cost</strong> at the time of loss — the insurance-to-value condition you mastered in Unit 2, complete with the did/should formula when coverage falls short. <strong>Personal property is settled at ACV under every DP form</strong>; no dwelling form gives contents replacement cost without an endorsement.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>The same 12-year-old roof ($18,000 to replace new, 40% depreciated) is destroyed by hail on two identical rental houses, each with a $1,000 deductible and adequate limits. House 1 is on a <strong>DP-1 with EC</strong>: settlement is ACV — $18,000 − $7,200 depreciation = $10,800, minus $1,000 = <strong>$9,800</strong>. House 2 is on a <strong>DP-3</strong> insured to at least 80% of replacement cost: settlement is RC — $18,000 − $1,000 = <strong>$17,000</strong>. Same storm, same roof, a $7,200 difference — the price gap between the forms suddenly looks small.</p>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>One-line valuation summary to memorize: <strong>DP-1 = ACV on everything. DP-2/3 = replacement cost on the building (insured to 80%), ACV on contents. Contents never get RC in any DP without an endorsement.</strong></p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 3.2 key terms',
          cards: [
            { front: 'Coverage A', back: 'The dwelling, attached structures, and building materials on or next to the premises. Land excluded.' },
            { front: 'Coverage B', back: 'Other (detached) structures — 10% of A. Part of A in DP-1; additional insurance in DP-2/3.' },
            { front: 'Coverage C', back: 'Personal property at the described location; amount selected; 10% of C applies worldwide.' },
            { front: 'Coverage D', back: 'Fair rental value — the landlord’s lost rent when a covered loss makes rented space unfit.' },
            { front: 'Coverage E', back: 'Additional living expense — the insured’s own increased living costs. DP-2/3 only.' },
            { front: 'D + E in DP-2/3', back: 'Combined, up to 20% of Coverage A — as ADDITIONAL insurance.' },
            { front: 'Property removed', back: 'Covered against ANY cause of loss for 5 days (DP-1) or 30 days (DP-2/3) after removal from endangered premises.' },
            { front: 'Fire dept service charge', back: 'Up to $500, no deductible.' },
            { front: 'DP valuation rule', back: 'DP-1: ACV everything. DP-2/3: RC on dwelling (80% rule), ACV on contents — always.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — other coverages & valuation',
          questions: [
            {
              q: 'As a wildfire approaches, a DP-3 insured hauls her furniture to a friend’s barn. Two weeks later the barn’s roof leaks and ruins a sofa. The DP-3:',
              choices: [
                'Pays nothing — the sofa left the described location',
                'Pays only if fire damaged the sofa',
                'Pays only the 10% worldwide limit',
                'Covers the loss — property removed is covered against any cause of loss for 30 days'
              ],
              answer: 3,
              explain: 'The property removed coverage protects property moved from endangered premises against direct loss from ANY cause — 30 days under DP-2/3, only 5 days under a DP-1.'
            },
            {
              q: 'A windstorm flattens $4,000 of landscaping at a DP-3 rental. The trees, shrubs and plants coverage pays:',
              choices: ['$4,000', 'Nothing — windstorm is not a covered peril for trees and shrubs', '$500 total', '5% of Coverage A'],
              answer: 1,
              explain: 'Trees, shrubs and plants are covered only for a short list of perils — fire, lightning, explosion, riot, aircraft, non-owned vehicles, vandalism — and windstorm is deliberately not among them. The 5%/$500-per-item limits apply only when a listed peril strikes.'
            },
            {
              q: 'A tenant insures her built-in bookshelves and upgraded kitchen in the apartment she rents. Under her dwelling policy, improvements, alterations and additions are covered for up to:',
              choices: ['10% of her Coverage C limit', '10% of the landlord’s Coverage A', '50% of Coverage C', '$500 per item'],
              answer: 0,
              explain: 'When the named insured is a tenant, the improvements/alterations other coverage provides up to 10% of the tenant’s Coverage C limit for improvements to the building she does not own.'
            },
            {
              q: 'Which loss settlement is correct for an adequately insured DP-2?',
              choices: [
                'Dwelling at ACV; contents at replacement cost',
                'Everything at ACV',
                'Dwelling at replacement cost; contents at ACV',
                'Everything at replacement cost'
              ],
              answer: 2,
              explain: 'DP-2 and DP-3 pay replacement cost on the dwelling and other structures when insured to at least 80% of RC; personal property is ACV in every DP form. ACV-on-everything describes the DP-1.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Coverage A — Dwelling', def: 'The described building, attached structures, building service equipment, and construction materials on or adjacent to the premises.' },
        { term: 'Coverage B — Other structures', def: 'Detached structures on the premises; default limit 10% of Coverage A (part of A under DP-1; additional insurance under DP-2/3).' },
        { term: 'Coverage C — Personal property', def: 'Household contents owned or used by the insured and resident family at the described location; up to 10% of the limit applies worldwide.' },
        { term: 'Coverage D — Fair rental value', def: 'The rental value of the portion rented or held for rental, payable when a covered loss makes it unfit for use.' },
        { term: 'Coverage E — Additional living expense', def: 'The increase in the insured’s own living costs after a covered loss; available only under DP-2 and DP-3.' },
        { term: 'Additional insurance', def: 'Coverage paid on top of the main limit rather than out of it — how DP-2/3 treat Coverages B, D, and E.' },
        { term: 'Debris removal', def: 'Coverage for removing debris of covered property after a covered loss, included within the applicable limit.' },
        { term: 'Improvements, alterations and additions', def: 'A tenant-insured’s betterments to the rented building, covered up to 10% of Coverage C.' },
        { term: 'Property removed', def: 'Coverage against any cause of loss for property moved from endangered premises: 5 days under DP-1, 30 days under DP-2/3.' },
        { term: 'Fire department service charge', def: 'Up to $500, without a deductible, for fire department charges to protect covered property.' },
        { term: 'Trees, shrubs and plants coverage', def: 'DP-2/3 other coverage: 5% of Coverage A total, $500 per item, limited perils that do NOT include windstorm.' },
        { term: 'Insurance-to-value (DP)', def: 'The DP-2/3 requirement to insure the dwelling to at least 80% of replacement cost to receive RC settlement.' }
      ]
    },

    /* ---------------- Lesson 3.3 ---------------- */
    {
      id: 'u3l3',
      title: 'DP Exclusions, Endorsements & Choosing DP vs. HO',
      minutes: 14,
      objectives: [
        'List the major dwelling policy exclusions',
        'Explain the broad theft and limited theft endorsements and who each is for',
        'Describe the personal liability supplement (Coverage L and Coverage M)',
        'Match realistic customers to the right form: DP-1, DP-2, DP-3, or a homeowners policy'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>What every DP excludes</h3>
<p>Even the open-peril DP-3 dwelling coverage is bounded by exclusions — most of them old friends from Unit 2’s "why exclusions exist" logic:</p>
<ul>
<li><strong>Ordinance or law</strong> — the increased cost of rebuilding to current code, beyond any small built-in allowance.</li>
<li><strong>Earth movement</strong> — earthquake, landslide, sinkhole activity (but see the Florida callout below).</li>
<li><strong>Water damage</strong> — <strong>flood and surface water, water backing up through sewers or drains, and water seeping below the surface</strong>. Sudden discharge from the home’s own plumbing is a covered peril; rising water from outside never is.</li>
<li><strong>Power failure</strong> occurring off the residence premises.</li>
<li><strong>Neglect</strong> — failing to use reasonable means to protect property at and after a loss.</li>
<li><strong>War and nuclear hazard</strong> — the ultimate catastrophic perils.</li>
<li><strong>Intentional loss</strong> — no policy pays the insured who causes the loss on purpose.</li>
<li>And on the DP-3’s open-peril dwelling coverage: <strong>wear and tear, deterioration, vermin, theft</strong>, freezing of plumbing while the dwelling is <strong>vacant or unoccupied</strong> (unless heat is maintained or the water shut off and drained), and <strong>vandalism when the dwelling has been vacant more than 60 consecutive days</strong>.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Water questions are sorted by direction: water from <strong>inside the plumbing, suddenly</strong> = covered broad-form peril. Water <strong>rising from outside</strong> (flood, surface water) or <strong>backing up through sewers and drains</strong> = excluded. Flood protection requires a separate flood policy — the NFIP or private flood, both in Unit 5.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida — what the legislature adds to every DP',
          html: `<p>Florida overlays its own rules on dwelling forms. Residential property policies in Florida must include <strong>catastrophic ground cover collapse</strong> coverage and must <strong>offer optional sinkhole loss coverage</strong> — the four statutory criteria and the testing process are in Unit 5. <strong>Hurricane deductibles</strong> ($500, 2%, 5%, or 10% of the dwelling limit) apply to DPs exactly as to homeowners policies, and they apply on a <strong>calendar-year</strong> basis. When quoting a Florida landlord, these are not options to mention casually — they are statutory features of the product.</p>`
        },
        {
          type: 'text',
          html: `<h3>The endorsements that finish the policy</h3>
<p><strong>Broad theft endorsement.</strong> Adds real theft coverage — including attempted theft and vandalism to property as part of a theft — to a DP whose named insured is an <strong>owner-occupant</strong>. On-premises coverage is the core, with off-premises theft coverage available as an option.</p>
<p><strong>Limited theft endorsement.</strong> The landlord’s version: for dwellings that are <strong>not owner-occupied</strong>, it covers theft of the <em>named insured’s</em> property at the insured location — the landlord’s appliances, mowers, and window units. (The tenants’ own belongings are never the landlord’s policy’s problem; tenants need an HO-4.)</p>
<p><strong>Personal liability supplement (comprehensive personal liability — CPL).</strong> Plugs the liability gap, either attached to the DP or written as a stand-alone companion:</p>
<ul>
<li><strong>Coverage L — Personal liability</strong>: pays sums the insured becomes <strong>legally obligated</strong> to pay for bodily injury or property damage, and <strong>defends the insured</strong> with defense costs paid in addition to the limit (commonly $100,000 minimum).</li>
<li><strong>Coverage M — Medical payments to others</strong>: a small, <strong>no-fault</strong> coverage (commonly $1,000 per person) for guests injured on the premises or injured by the insured’s activities — <strong>never for the insured or regular residents</strong>. It exists to pay the neighbor’s ER bill before anyone calls a lawyer.</li>
</ul>
<p>Other DP endorsements worth recognizing: <strong>dwelling under construction</strong>, <strong>automatic increase in insurance</strong> (inflation protection), and in coastal states, <strong>windstorm or hail exclusion</strong> endorsements used when wind is written separately.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A Sarasota landlord with a DP-3 and the personal liability supplement: a tenant’s dinner guest trips over a loose porch board. <strong>Coverage M</strong> quietly pays her $900 urgent-care bill with no fault admitted. When she later sues anyway, <strong>Coverage L</strong> hires the defense lawyer (costs outside the limit) and pays any judgment up to the limit. With an unendorsed DP-3, every dollar of that — defense included — would have come from the landlord’s pocket.</p>`
        },
        {
          type: 'compare',
          title: 'Choosing the policy: when a DP fits vs. when HO fits',
          left: {
            title: 'Dwelling policy territory',
            items: [
              '<strong>Landlord/investor</strong> renting a 1-4 unit property to tenants',
              '<strong>Seasonal or secondary home</strong> the owner occupies part-time',
              '<strong>Older or lower-value home</strong> that fails HO replacement-cost or condition rules (DP-1 ACV keeps it insurable)',
              'Homes in <strong>transition</strong> — estates, renovations, awaiting sale',
              'Buyer needs <strong>property-only</strong> coverage and will add CPL/theft by endorsement as needed'
            ]
          },
          right: {
            title: 'Homeowners policy territory',
            items: [
              '<strong>Owner-occupant</strong> of a 1-4 family dwelling who meets eligibility',
              'Wants the <strong>package</strong>: property + theft + liability + medical payments in one contract',
              '<strong>Tenants</strong> belong on an HO-4 (contents + liability), not on any DP',
              '<strong>Condo unit owners</strong> belong on an HO-6',
              'Generally <strong>broader and more efficient</strong> than a DP stacked with endorsements — when the customer qualifies'
            ]
          }
        },
        {
          type: 'quiz',
          title: 'Checkpoint — exclusions & endorsements',
          questions: [
            {
              q: 'Heavy rain causes a creek to overflow into a rental home insured on a DP-3. The water damage is:',
              choices: [
                'Covered — DP-3 dwellings are open peril',
                'Covered up to 10% of Coverage A',
                'Excluded — flood and surface water are water damage exclusions in every DP',
                'Covered only if the tenant caused it'
              ],
              answer: 2,
              explain: 'Open peril does not mean every peril: the water damage exclusion removes flood, surface water, sewer backup, and sub-surface seepage from all DP forms. Flood requires a separate policy (Unit 5).'
            },
            {
              q: 'Which customer is the LIMITED theft endorsement designed for?',
              choices: [
                'A landlord who keeps appliances in a tenant-occupied rental house',
                'An owner-occupant who wants theft coverage away from home',
                'A tenant insuring her own furniture',
                'A condo unit owner'
              ],
              answer: 0,
              explain: 'Limited theft serves NON-owner-occupied dwellings — it protects the landlord’s own property kept at the rental. Broad theft is for owner-occupants; tenants and condo owners belong in the HO program.'
            },
            {
              q: 'Under the personal liability supplement, Coverage M (medical payments to others) pays:',
              choices: [
                'Only after the insured is proven negligent',
                'The medical bills of the named insured’s resident family',
                'Unlimited medical bills for anyone injured anywhere',
                'Small medical bills of guests injured on the premises, regardless of fault'
              ],
              answer: 3,
              explain: 'Coverage M is no-fault goodwill coverage for OTHERS — typically about $1,000 per person. It never covers the insured or regular residents, and Coverage L is what responds to actual legal liability.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Putting it together: four customers, four answers</h3>
<p>The exam — and the front desk — tests this as scenarios. Practice the sorting logic:</p>
<ul>
<li><strong>The investor.</strong> Maria buys a Cape Coral duplex purely as a rental. She is not eligible for an HO (not an owner-occupant). Answer: <strong>DP-3</strong> for open-peril building coverage and RC settlement, modest Coverage C for her appliances, <strong>limited theft endorsement</strong>, and the <strong>personal liability supplement</strong> (or a landlord liability policy).</li>
<li><strong>The inherited 1948 cottage.</strong> The wiring is original, the market value is far below replacement cost, and HO underwriters keep declining it. Answer: a <strong>DP-1 with EC and VMM</strong> keeps it insured at ACV at a premium the estate will actually pay.</li>
<li><strong>The snowbird.</strong> Don occupies his Florida house November through April. A seasonal dwelling fits the <strong>DP program</strong> comfortably (some insurers will write a seasonal HO — eligibility is the deciding factor). Remind Don about the <strong>unoccupancy</strong> implications from Unit 2 and that theft coverage needs the endorsement.</li>
<li><strong>The owner-occupant.</strong> The Nguyens live year-round in the home they own and want one policy for the house, their belongings, theft, and liability. Answer: a <strong>homeowners policy</strong> — rebuilding HO coverage out of a DP plus endorsements would be clumsier and usually costlier. The full HO program is Unit 4.</li>
</ul>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 3.3 key terms',
          cards: [
            { front: 'DP water exclusions', back: 'Flood/surface water, sewer or drain backup, sub-surface seepage. Sudden internal plumbing discharge is covered (DP-2/3).' },
            { front: 'Vacancy & vandalism (DP)', back: 'Vandalism is excluded once the dwelling is vacant more than 60 consecutive days.' },
            { front: 'Broad theft endorsement', back: 'Adds theft coverage to a DP for OWNER-OCCUPANTS; off-premises coverage optional.' },
            { front: 'Limited theft endorsement', back: 'Theft of the LANDLORD’s property at a non-owner-occupied dwelling.' },
            { front: 'Coverage L', back: 'Personal liability — legal obligation for BI/PD; defense costs in addition to the limit.' },
            { front: 'Coverage M', back: 'Medical payments to others — small, no-fault, guests only, never the insured’s household.' },
            { front: 'Florida DP overlays', back: 'Catastrophic ground cover collapse included; sinkhole coverage must be offered; hurricane deductibles apply.' },
            { front: 'DP vs. HO in one line', back: 'Owner-occupant who qualifies = HO. Landlord, seasonal, older, or transitional home = DP.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — choosing the right policy',
          questions: [
            {
              q: 'A retired teacher rents out the Ocala house she inherited and wants open-peril building coverage, lost-rent protection, and coverage if a tenant’s guest sues her. The BEST recommendation is:',
              choices: [
                'An HO-3, because she owns the home',
                'A DP-3 with the personal liability supplement',
                'A DP-1 with EC and VMM',
                'An HO-4'
              ],
              answer: 1,
              explain: 'A non-occupant landlord is DP territory: the DP-3 gives open-peril dwelling coverage and fair rental value, and the personal liability supplement (CPL) covers the lawsuit. She is not an owner-occupant, so an HO-3 is unavailable, and HO-4 is for tenants.'
            },
            {
              q: 'A tenant living in a rented bungalow asks the agency to add her furniture and liability exposure to the landlord’s DP-3. The correct response is:',
              choices: [
                'Add her as a mortgagee',
                'Increase the landlord’s Coverage C',
                'Add the broad theft endorsement to the landlord’s policy',
                'Recommend she buy her own HO-4 renters policy'
              ],
              answer: 3,
              explain: 'The landlord’s DP protects the landlord’s interests. A tenant’s contents and personal liability belong on the tenant’s own HO-4. None of the landlord-policy maneuvers listed would insure her property or defend her.'
            },
            {
              q: 'A DP-3 dwelling has been vacant for 75 consecutive days when vandals smash every window and spray-paint the walls. The vandalism claim is:',
              choices: [
                'Denied — vandalism is excluded after 60 consecutive days of vacancy',
                'Paid in full — the dwelling is open peril',
                'Paid at 50%',
                'Denied only if the insurer proves arson'
              ],
              answer: 0,
              explain: 'The DP excludes vandalism once the dwelling has been vacant more than 60 consecutive days. At 75 days vacant, the exclusion applies — one more reason vacancy status matters to landlords between tenants.'
            },
            {
              q: 'Why does an owner-occupant who qualifies for a homeowners policy usually buy the HO instead of a DP-3 with theft and liability endorsements?',
              choices: [
                'A DP-3 cannot insure an owner-occupied home',
                'The HO settles all losses at agreed value',
                'The HO package is broader and more efficient than a DP rebuilt with endorsements',
                'Florida law prohibits owner-occupants from buying DPs'
              ],
              answer: 2,
              explain: 'Owner-occupants CAN be written on DPs (the broad theft endorsement exists precisely for them), but the HO package bundles property, theft, liability, and medical payments more broadly and economically. Eligibility — not legality — drives the choice.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Ordinance or law exclusion', def: 'Excludes the increased cost of rebuilding to current building codes beyond any small built-in allowance.' },
        { term: 'Earth movement exclusion', def: 'Excludes earthquake, landslide, and similar ground movement; Florida statutes add back catastrophic ground cover collapse.' },
        { term: 'Water damage exclusion', def: 'Excludes flood, surface water, sewer or drain backup, and sub-surface seepage in all DP forms.' },
        { term: 'Neglect exclusion', def: 'Excludes loss aggravated by the insured’s failure to use reasonable means to protect property at and after a loss.' },
        { term: 'Intentional loss exclusion', def: 'Excludes any loss the insured causes on purpose — the moral hazard backstop.' },
        { term: 'Broad theft endorsement', def: 'Adds on-premises (and optionally off-premises) theft coverage to a dwelling policy for an owner-occupant named insured.' },
        { term: 'Limited theft endorsement', def: 'Adds theft coverage for the named insured’s property at a non-owner-occupied (landlord) dwelling.' },
        { term: 'Personal liability supplement (CPL)', def: 'The endorsement or companion form adding Coverage L (personal liability) and Coverage M (medical payments to others) to a dwelling policy.' },
        { term: 'Coverage L — Personal liability', def: 'Pays sums the insured is legally obligated to pay for bodily injury or property damage and defends the insured, with defense costs in addition to the limit.' },
        { term: 'Coverage M — Medical payments to others', def: 'No-fault payment of necessary medical expenses for guests and others — never the insured or regular residents.' },
        { term: 'Catastrophic ground cover collapse', def: 'Florida-mandated coverage in residential property policies for abrupt ground collapse meeting four statutory criteria (detailed in Unit 5).' },
        { term: 'Dwelling under construction endorsement', def: 'Adapts a dwelling policy to cover a home while it is being built.' }
      ]
    }
  ],

  /* ---------------- Unit 3 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Which applicant is the dwelling program designed for?',
        choices: [
          'A family insuring the home they live in, with full theft and liability',
          'A renter insuring only her furniture',
          'An investor insuring a tenant-occupied triplex',
          'A business insuring a 12-unit apartment complex'
        ],
        answer: 2,
        explain: 'DPs insure 1-4 unit residential buildings without requiring owner occupancy — the landlord/investor case. Five or more units is commercial; tenants need an HO-4; owner-occupants wanting the full package belong in the HO program.'
      },
      {
        q: 'An unendorsed DP-1 covers which of the following losses?',
        choices: [
          'Lightning splits the chimney',
          'A windstorm tears off shingles',
          'Vandals break the windows',
          'A burglar steals the water heater'
        ],
        answer: 0,
        explain: 'Base DP-1 perils are fire, lightning, and internal explosion only. Windstorm requires the EC option, vandalism requires VMM (with EC), and theft is never covered by any unendorsed DP.'
      },
      {
        q: 'The DP-1 peril package consisting of windstorm, hail, explosion, riot or civil commotion, aircraft, vehicles, smoke, and volcanic eruption is called:',
        choices: ['The broad-form perils', 'Open peril coverage', 'The special form', 'Extended coverage (EC)'],
        answer: 3,
        explain: 'Those eight optional perils are the classic extended coverage package. The broad-form perils (burglar damage, falling objects, water discharge, etc.) are what DP-2 adds beyond basic + EC + VMM.'
      },
      {
        q: 'Under a DP-3, personal property is covered:',
        choices: [
          'Open peril, the same as the dwelling',
          'Against the broad named perils only',
          'Only against fire and lightning',
          'Not at all'
        ],
        answer: 1,
        explain: 'DP-3 is split: open peril on Coverages A and B, but broad NAMED perils on Coverage C. No dwelling form gives contents open-peril coverage.'
      },
      {
        q: 'A DP-2 insures the dwelling for $300,000. The detached workshop is automatically covered, as additional insurance, for up to:',
        choices: ['$30,000', '$15,000', '$60,000', '$3,000'],
        answer: 0,
        explain: 'Coverage B defaults to 10% of Coverage A — $30,000 — and in DP-2/3 it is additional insurance rather than part of the Coverage A limit.'
      },
      {
        q: 'A covered fire makes a rented Florida duplex unit uninhabitable for three months, costing the landlord $2,000 per month in rent. The coverage that responds is:',
        choices: ['Coverage E — additional living expense', 'Coverage B — other structures', 'Coverage D — fair rental value', 'Coverage M — medical payments'],
        answer: 2,
        explain: 'Fair rental value pays the landlord’s lost rent when a covered loss makes the rented portion unfit for use. Coverage E pays the insured’s own extra living costs — a different person’s loss entirely.'
      },
      {
        q: 'Which coverage exists in a DP-3 but NOT in a DP-1?',
        choices: ['Fair rental value', 'Additional living expense', 'Other structures', 'Debris removal'],
        answer: 1,
        explain: 'Coverage E (ALE) appears only in DP-2 and DP-3. The DP-1 has Coverages A through D — its Coverage D operates inside Coverage A with a 1/12-per-month cap.'
      },
      {
        q: 'A DP-1 insured’s furniture, moved out of a house threatened by an approaching brush fire, is damaged by a covered cause 4 days later at a storage site. The property removed coverage:',
        choices: [
          'Does not apply once property leaves the premises',
          'Applies for 30 days after removal',
          'Applies only to the dwelling itself',
          'Applies — DP-1 property removed coverage lasts 5 days'
        ],
        answer: 3,
        explain: 'Property removed from endangered premises is covered against any cause of loss for 5 days under the DP-1 (30 days under DP-2/3). Day 4 is inside the DP-1 window.'
      },
      {
        q: 'A hailstorm destroys the 15-year-old roof of a rental house insured on a DP-1 with EC. The settlement will be based on:',
        choices: [
          'Actual cash value — replacement cost minus depreciation',
          'Full replacement cost',
          'Agreed value',
          'Fair market value of the home'
        ],
        answer: 0,
        explain: 'The DP-1 settles all property — dwelling included — at ACV. Replacement cost on the dwelling is a DP-2/DP-3 feature (subject to the 80% insurance-to-value condition).'
      },
      {
        q: 'A DP-3 dwelling has a replacement cost of $250,000 and is insured for $220,000. A covered $40,000 loss occurs. The dwelling settlement basis is:',
        choices: [
          'ACV, because the home is a rental',
          'A pro-rata share based on did over should',
          'Full replacement cost — the insured carries more than 80% of RC ($200,000)',
          'Market value'
        ],
        answer: 2,
        explain: '80% of $250,000 is $200,000; carrying $220,000 satisfies insurance-to-value, so partial losses are paid at replacement cost up to the limit. The did/should penalty only bites below the 80% threshold.'
      },
      {
        q: 'Which loss IS covered by an unendorsed DP-2?',
        choices: [
          'A tenant’s stereo stolen from the unit',
          'Floodwater warping the hardwood floors',
          'The landlord sued over a tenant’s dog bite',
          'A pipe suddenly bursts and soaks the ceiling below'
        ],
        answer: 3,
        explain: 'Accidental discharge or overflow of water from plumbing is a broad-form peril. Theft and liability are the DP’s famous gaps, and flood is excluded under the water damage exclusion in every form.'
      },
      {
        q: 'The broad theft endorsement may be added to a dwelling policy when the named insured is:',
        choices: ['Any landlord', 'An owner-occupant of the dwelling', 'A tenant of the dwelling', 'A mortgagee'],
        answer: 1,
        explain: 'Broad theft is the owner-occupant version (with optional off-premises coverage). The limited theft endorsement is built for non-owner-occupied dwellings — the landlord’s appliances and equipment.'
      },
      {
        q: 'Under the personal liability supplement, defense costs the insurer incurs defending the insured are paid:',
        choices: [
          'Out of the Coverage L limit, reducing it',
          'Only if the insured wins the case',
          'In addition to the Coverage L limit',
          'By Coverage M'
        ],
        answer: 2,
        explain: 'Coverage L pays defense costs in addition to the limit of liability — the limit is preserved for damages. Coverage M is the small no-fault medical payments coverage for others, not a defense fund.'
      },
      {
        q: 'A Florida residential dwelling policy must automatically include which of the following?',
        choices: [
          'Catastrophic ground cover collapse coverage',
          'Full sinkhole loss coverage',
          'Flood coverage',
          'Personal liability coverage'
        ],
        answer: 0,
        explain: 'Florida law requires catastrophic ground cover collapse coverage in residential property policies; sinkhole loss coverage must be OFFERED but is optional. Flood is always separate, and DP liability exists only by endorsement.'
      },
      {
        q: 'A house insured on a DP-3 sits empty — no furniture, no occupants — for 90 days between tenants, and vandals then destroy the kitchen. The claim is denied because:',
        choices: [
          'The DP-3 never covers vandalism',
          'Vandalism is excluded after the dwelling is vacant more than 60 consecutive days',
          'The landlord failed to file a proof of loss',
          'Vacancy voids the entire policy automatically'
        ],
        answer: 1,
        explain: 'Vandalism coverage is suspended once vacancy exceeds 60 consecutive days. The policy as a whole is not void — other perils still apply — but this loss falls squarely in the vacancy exclusion. VMM is otherwise built into the DP-3.'
      }
    ]
  }
});
