/* Unit 6 — The Personal Auto Policy */
window.PL.units.push({
  id: 'u6',
  number: 6,
  title: 'The Personal Auto Policy',
  icon: 'car',
  description: 'The PAP from bumper to bumper: the six-part structure, who and what counts as a covered auto, liability and the split-limit math, med pay, uninsured motorists, physical damage, and the endorsements that patch the gaps.',
  lessons: [

    /* ---------------- Lesson 6.1 ---------------- */
    {
      id: 'u6l1',
      title: 'PAP Overview & Definitions',
      minutes: 14,
      objectives: [
        'Identify who is eligible for a Personal Auto Policy and name its six parts',
        'Define you, family member, occupying, and trailer as the PAP uses them',
        'List the four categories of your covered auto, including the newly acquired vehicle rule',
        'State the policy territory — and what country is famously NOT in it'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>One policy, six parts</h3>
<p>The Personal Auto Policy (PAP) is the standardized contract that insures most private passenger vehicles in America. It is written for <strong>individuals and married couples (and, by endorsement, other residents of the same household)</strong> who own or lease eligible vehicles: private passenger autos, pickups, and vans not used primarily for business delivery. A leased vehicle qualifies as an owned vehicle when leased under a written agreement for <strong>at least six months</strong>. Vehicles used as public livery — taxis, for-hire transport, and app-based ride-share while working — are not eligible under an unendorsed PAP, a gap that returns in Lesson 6.5.</p>
<p>Everything in this unit hangs on the policy’s skeleton: <strong>six lettered parts, A through F</strong>. The first four are coverages; the last two are the rules of the road for using the policy. Learn the map now and every later lesson becomes a guided tour rather than a maze.</p>`
        },
        {
          type: 'table',
          caption: 'The six parts of the Personal Auto Policy',
          headers: ['Part', 'Name', 'What it does'],
          rows: [
            ['<strong>Part A</strong>', 'Liability Coverage', 'Pays bodily injury and property damage you cause to OTHERS, plus your legal defense'],
            ['<strong>Part B</strong>', 'Medical Payments Coverage', 'Pays medical and funeral expenses for YOU and your passengers, regardless of fault'],
            ['<strong>Part C</strong>', 'Uninsured Motorists Coverage', 'Pays what an at-fault uninsured or hit-and-run driver should have paid for your injuries'],
            ['<strong>Part D</strong>', 'Coverage for Damage to Your Auto', 'Physical damage to your own vehicle — collision and other-than-collision'],
            ['<strong>Part E</strong>', 'Duties After an Accident or Loss', 'Your to-do list: notice, cooperation, documents, inspection'],
            ['<strong>Part F</strong>', 'General Provisions', 'Policy period, territory, changes, subrogation, termination — the fine print']
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hook: <strong>A-B-C-D in order of who gets paid</strong> — A pays the people you hurt, B pays the people in your car, C pays you when the other driver has nothing, D pays for the car itself. Then E is what you must <em>do</em>, and F is the fine print. The exam loves to ask which part a coverage lives in.</p>`
        },
        {
          type: 'text',
          html: `<h3>The defined words that decide claims</h3>
<p>PAP claims are won and lost on definitions, so the drafters put them up front:</p>
<ul>
<li><strong>You / your</strong> — the <strong>named insured shown in the declarations and a spouse who is a resident of the same household</strong>. A spouse who moves out keeps "you" status for a limited transition period (until the policy ends or 90 days, whichever comes first, under modern forms).</li>
<li><strong>Family member</strong> — a person <strong>related to you by blood, marriage, or adoption who is a resident of your household</strong>, including a ward or foster child. Residency is the hinge: your daughter away at college (still a resident) is a family member; your brother across town is not.</li>
<li><strong>Occupying</strong> — <strong>in, upon, getting in, on, out, or off</strong> a vehicle. Broader than "riding in": a person standing on the running board or climbing out the door is occupying.</li>
<li><strong>Trailer</strong> — a vehicle designed to be pulled by a private passenger auto, pickup, or van, including farm wagons and implements while towed. An owned trailer gets <em>liability</em> coverage automatically, but physical damage on a trailer must be scheduled.</li>
</ul>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Your Covered Auto',
          html: `<p><strong>Your covered auto</strong> means any of four things: <strong>(1)</strong> any vehicle shown in the declarations; <strong>(2)</strong> a newly acquired auto; <strong>(3)</strong> a trailer you own; and <strong>(4)</strong> a temporary substitute — any auto or trailer you do not own, used while your covered auto is out of normal use because of <em>breakdown, repair, servicing, loss, or destruction</em>.</p>`
        },
        {
          type: 'steps',
          title: 'The four ways a vehicle becomes your covered auto',
          items: [
            { title: 'Listed in the declarations', text: 'The vehicles you scheduled and paid premium for. The starting point for every coverage question.' },
            { title: 'Newly acquired auto', text: 'A vehicle you become the owner of during the policy period. A REPLACEMENT vehicle automatically carries the same coverage as the vehicle it replaced; an ADDITIONAL vehicle is covered only if you ask the insurer to insure it within 14 days of becoming the owner. For the broadest protection — especially physical damage — report every new vehicle within 14 days.' },
            { title: 'An owned trailer', text: 'Liability coverage extends automatically to trailers you own while towed by a covered vehicle. Physical damage on the trailer itself requires scheduling.' },
            { title: 'Temporary substitute', text: 'A borrowed or loaner auto used while your covered auto is in the shop, broken down, lost, or destroyed. The substitute steps into the covered auto’s shoes for liability — but note that under Part D, a temporary substitute is treated as a non-owned auto.' }
          ]
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p><strong>The 14-day rule is a favorite exam trap.</strong> Buy a third car on June 1 and never tell the insurer: an accident on June 10 is within the 14-day automatic window and covered, but an accident on June 20 is not. The safest professional advice — and the testable rule — is that a <strong>newly acquired vehicle must be reported within 14 days</strong> to lock in coverage.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — structure & definitions',
          questions: [
            {
              q: 'Medical and funeral expenses for the named insured’s own passengers, payable regardless of fault, are found in which part of the PAP?',
              choices: ['Part A', 'Part B', 'Part C', 'Part D'],
              answer: 1,
              explain: 'Part B is Medical Payments Coverage — no-fault medical and funeral expense protection for insureds. Part A pays people OUTSIDE your car whom you injure; Part C responds when the other driver is uninsured.'
            },
            {
              q: 'Under the PAP, "family member" means a person who is:',
              choices: [
                'Any blood relative, wherever they live',
                'Anyone who regularly drives the covered auto',
                'Related by blood, marriage, or adoption AND a resident of the household',
                'Listed by name in the declarations'
              ],
              answer: 2,
              explain: 'Both pieces are required — relationship AND residency. A cousin living across the state is a relative but not a family member; a foster child living in the home qualifies.'
            },
            {
              q: 'While Ana’s insured sedan is in the shop for a transmission rebuild, the dealer lends her a loaner. Under the PAP the loaner is:',
              choices: [
                'Not covered until added by endorsement',
                'Covered only if Ana buys a binder',
                'A newly acquired auto subject to the 14-day rule',
                'A temporary substitute auto — one of the four categories of your covered auto'
              ],
              answer: 3,
              explain: 'A non-owned auto used while the covered auto is out of use for breakdown, repair, servicing, loss, or destruction is a temporary substitute. The 14-day rule applies to vehicles she OWNS, not borrows.'
            },
            {
              q: 'Marco buys an additional pickup on March 1 and never notifies his insurer. The pickup is struck on March 25. His PAP will:',
              choices: [
                'Not respond — the 14-day notice window for an additional newly acquired vehicle has passed',
                'Respond in full, because newly acquired vehicles are always covered',
                'Respond, but only for liability with state minimum limits',
                'Respond after a 30-day waiting period'
              ],
              answer: 0,
              explain: 'An additional (not replacement) vehicle enjoys automatic coverage only when the insurer is asked to insure it within 14 days of acquisition. Day 25 is outside the window, so the claim fails.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Policy period and policy territory</h3>
<p>The PAP covers accidents and losses that occur <strong>during the policy period shown in the declarations</strong> and <strong>within the policy territory</strong>. The territory is a short, heavily tested list: <strong>the United States of America, its territories and possessions, Puerto Rico, and Canada</strong> — plus a covered auto while being <em>transported between their ports</em> (so the car is covered on a ferry from Miami to San Juan).</p>
<p>What is missing? <strong>Mexico.</strong> Drive a covered auto across the border at Tijuana and the PAP goes silent — Mexican authorities can detain drivers after an accident until financial responsibility is shown, which is why agents sell separate Mexican auto policies from Mexican insurers for those trips. Say it three times: <strong>US, US territories and possessions, Puerto Rico, Canada — never Mexico.</strong></p>`
        },
        {
          type: 'callout', variant: 'warning', title: 'Territory trap',
          html: `<p>Exam writers bait this constantly. Any answer choice that includes <strong>Mexico</strong> in the PAP territory is wrong. Any scenario placing the loss in Canada or Puerto Rico is inside the territory and covered. The ferry between US and Canadian or Puerto Rican ports is also covered.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 6.1 key terms',
          cards: [
            { front: 'The six parts of the PAP', back: 'A Liability, B Medical Payments, C Uninsured Motorists, D Damage to Your Auto, E Duties After Accident or Loss, F General Provisions.' },
            { front: 'You / your', back: 'The named insured in the declarations plus a resident spouse.' },
            { front: 'Family member', back: 'A resident of the household related by blood, marriage, or adoption (including ward or foster child).' },
            { front: 'Your covered auto — 4 categories', back: 'Declared vehicles, newly acquired autos, owned trailers, and temporary substitute autos.' },
            { front: 'Newly acquired additional vehicle', back: 'Covered automatically only if the insurer is asked to insure it within 14 days of ownership.' },
            { front: 'Temporary substitute auto', back: 'A non-owned auto used while the covered auto is out of use due to breakdown, repair, servicing, loss, or destruction.' },
            { front: 'Occupying', back: 'In, upon, getting in, on, out, or off a vehicle.' },
            { front: 'PAP policy territory', back: 'The US, its territories and possessions, Puerto Rico, and Canada — plus transport between their ports. NOT Mexico.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — period & territory',
          questions: [
            {
              q: 'Which trip takes a covered auto OUTSIDE the PAP policy territory?',
              choices: [
                'A drive from Tampa to Toronto, Canada',
                'A ferry crossing from Florida to Puerto Rico',
                'A vacation drive into Cancun, Mexico',
                'A move from Florida to the US Virgin Islands'
              ],
              answer: 2,
              explain: 'The territory is the US, its territories and possessions, Puerto Rico, and Canada, including transport between their ports. Mexico is never in the PAP territory — separate Mexican coverage is required.'
            },
            {
              q: 'A leased vehicle is treated as an owned vehicle under the PAP when the written lease term is at least:',
              choices: ['30 days', 'Six months', 'One year', 'Three years'],
              answer: 1,
              explain: 'A continuous lease of six months or longer under a written agreement makes the vehicle eligible as if owned. Short-term rentals are non-owned autos.'
            },
            {
              q: 'Which person is "occupying" a vehicle under the PAP definition?',
              choices: [
                'A pedestrian walking toward a parked car from across the lot',
                'A passenger climbing out of the back seat',
                'A neighbor watching the car from a porch',
                'A mechanic who repaired the car last week'
              ],
              answer: 1,
              explain: 'Occupying means in, upon, getting in, on, out, or off. Climbing out qualifies; merely walking toward the vehicle at a distance does not.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Personal Auto Policy (PAP)', def: 'The standardized policy insuring private passenger autos, pickups, and vans owned or long-term leased by individuals and families.' },
        { term: 'Named insured', def: 'The person or persons listed in the declarations; with a resident spouse, the policy’s "you."' },
        { term: 'Family member', def: 'A resident of the named insured’s household related by blood, marriage, or adoption, including a ward or foster child.' },
        { term: 'Your covered auto', def: 'Declared vehicles, newly acquired autos, owned trailers, and temporary substitute autos.' },
        { term: 'Newly acquired auto', def: 'A vehicle you become owner of during the policy period; an additional vehicle must be reported within 14 days for automatic coverage.' },
        { term: 'Replacement vehicle', def: 'A newly acquired auto that takes the place of a declared vehicle; it automatically carries the replaced vehicle’s coverage.' },
        { term: 'Temporary substitute auto', def: 'A non-owned auto or trailer used while the covered auto is out of normal use because of breakdown, repair, servicing, loss, or destruction.' },
        { term: 'Trailer', def: 'A vehicle designed to be pulled by a private passenger auto, pickup, or van; owned trailers get automatic liability coverage only.' },
        { term: 'Occupying', def: 'In, upon, getting in, on, out, or off a vehicle.' },
        { term: 'Policy territory (PAP)', def: 'The United States, its territories and possessions, Puerto Rico, and Canada, including transport between their ports. Mexico is excluded.' },
        { term: 'Livery use', def: 'Carrying persons or property for a fee — public livery use is excluded under the unendorsed PAP.' },
        { term: 'Declarations (auto)', def: 'The policy page identifying the named insured, vehicles, coverages, limits, and premiums.' }
      ]
    },

    /* ---------------- Lesson 6.2 ---------------- */
    {
      id: 'u6l2',
      title: 'Part A — Liability',
      minutes: 16,
      objectives: [
        'Explain the Part A insuring agreement, including why defense costs are paid in addition to limits',
        'Identify who is an insured under Part A, including permissive users and vicariously liable parties',
        'Apply split limits and a combined single limit to a multi-victim accident',
        'List the supplementary payments and explain the other-insurance rule — coverage follows the car'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The promise: pay damages, provide a defense</h3>
<p>Part A is the heart of the PAP. The insurer promises to <strong>pay damages for bodily injury (BI) or property damage (PD) for which an insured becomes legally responsible because of an auto accident</strong>, and to <strong>defend any suit asking for those damages</strong> — even a groundless or fraudulent one. Two features of that promise are tested relentlessly:</p>
<ul>
<li><strong>Defense costs are paid IN ADDITION to the limit of liability.</strong> A $50,000 legal defense does not shrink the $100,000 available to pay the victim.</li>
<li><strong>The duty to defend ends when the limit is exhausted</strong> by payment of judgments or settlements. Once the insurer has paid out the full limit, the lawyer bills become the insured’s problem.</li>
</ul>
<p>The insurer may investigate and settle any claim as it sees fit — the settlement decision belongs to the company, not the insured.</p>
<h3>Who is an insured under Part A</h3>
<p>Four groups qualify, and the breadth here explains most exam scenarios:</p>
<ol>
<li><strong>You and family members</strong> — for the ownership, maintenance, or use of <em>any</em> auto or trailer, owned or borrowed.</li>
<li><strong>Any person using your covered auto with permission</strong> — the <span class="kt" title="Someone driving the covered auto with the reasonable belief of permission">permissive user</span>. Lend your car to a friend and your policy defends your friend.</li>
<li><strong>Any person or organization vicariously liable for an insured’s use of the covered auto</strong> — for example, the charity held responsible because you crashed while delivering meals for it.</li>
<li><strong>Any person or organization vicariously liable for you or a family member using a non-owned auto</strong> (except its owner), with respect to that use.</li>
</ol>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p><strong>Insurance follows the CAR, not the driver.</strong> When a permissive user crashes your car, <strong>your policy (the policy on the car) pays first — it is primary</strong>. The driver’s own policy responds as <strong>excess</strong>, kicking in only after the owner’s limits are spent. Flip it around: when you borrow a friend’s car, the friend’s policy is primary and yours is excess. This single rule answers a remarkable share of exam questions.</p>`
        },
        {
          type: 'text',
          html: `<h3>Split limits vs. combined single limit</h3>
<p>Liability limits come in two shapes. <strong>Split limits</strong> read like 100/300/50 and mean three separate caps: <strong>$100,000 per person for BI, $300,000 per accident for BI, and $50,000 per accident for PD</strong>. No single injured person can collect more than the per-person cap, all injured people together cannot exceed the per-accident cap, and property damage has its own bucket. A <strong>combined single limit (CSL)</strong> is one pool — say $300,000 — that pays BI and PD in any mix, with no per-person ceiling. CSL is more flexible (and costs a bit more) because a single badly injured victim can absorb the whole limit.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example — 100/300/50 with three victims',
          html: `<p>Dana, insured at <strong>100/300/50</strong>, runs a red light and injures three people. The court awards BI damages of <strong>$150,000 to victim 1, $90,000 to victim 2, and $120,000 to victim 3</strong>, plus <strong>$65,000</strong> in damage to a storefront.</p>
<p><strong>Step 1 — apply the per-person cap ($100,000):</strong> victim 1 is capped at $100,000; victim 2 collects the full $90,000; victim 3 is capped at $100,000. Tentative BI total: $290,000.</p>
<p><strong>Step 2 — apply the per-accident BI cap ($300,000):</strong> $290,000 fits under $300,000, so all of it is paid.</p>
<p><strong>Step 3 — apply the PD limit ($50,000):</strong> only $50,000 of the $65,000 storefront damage is paid.</p>
<p><strong>Policy pays $290,000 BI + $50,000 PD = $340,000.</strong> Dana personally owes the shortfalls: $50,000 to victim 1, $20,000 to victim 3, and $15,000 to the store. Defense costs were paid on top of all of this.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'The 100/300/50 example — awarded vs. paid by the policy',
          labels: ['Victim 1 BI', 'Victim 2 BI', 'Victim 3 BI', 'Property damage'],
          datasets: [
            { label: 'Awarded', data: [150000, 90000, 120000, 65000] },
            { label: 'Policy pays', data: [100000, 90000, 100000, 50000] }
          ],
          note: 'Illustrative of the worked example. The per-person cap trims victims 1 and 3 to $100,000 each; the separate $50,000 PD limit trims the storefront claim. The insured owes every dollar of the gap.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — limits math',
          questions: [
            {
              q: 'Raul carries 50/100/25 split limits. He injures two people: awards are $70,000 and $40,000, plus $30,000 in property damage. How much does Part A pay in total?',
              choices: ['$140,000', '$125,000', '$115,000', '$100,000'],
              answer: 2,
              explain: 'Per-person cap trims $70,000 to $50,000; the second victim’s $40,000 is paid in full ($90,000 total, under the $100,000 per-accident BI cap). PD pays its $25,000 limit of the $30,000. $50,000 + $40,000 + $25,000 = $115,000.'
            },
            {
              q: 'The key advantage of a combined single limit over split limits of equal size is that a CSL:',
              choices: [
                'Costs less premium',
                'Has no per-person cap, so one pool pays BI and PD in any combination',
                'Covers punitive damages',
                'Eliminates the need for uninsured motorists coverage'
              ],
              answer: 1,
              explain: 'A CSL is a single pot — one catastrophically injured victim can receive the entire limit, which split limits forbid via the per-person cap. Flexibility costs slightly MORE, not less.'
            },
            {
              q: 'Defense costs under Part A of the PAP are:',
              choices: [
                'Paid in addition to the limit of liability, until the limit is exhausted by judgments or settlements',
                'Subtracted from the limit of liability',
                'Capped at $10,000 per accident',
                'Available only if the insured is found not at fault'
              ],
              answer: 0,
              explain: 'Defense is supplementary — it never erodes the limit. But once the insurer pays out the full limit in settlements or judgments, its duty to defend ends.'
            },
            {
              q: 'Lena lends her insured car to a coworker, who causes an accident. Which statement is correct?',
              choices: [
                'Only the coworker’s own policy responds',
                'Lena’s policy is primary because insurance follows the car; the coworker’s policy is excess',
                'The coworker’s policy is primary because insurance follows the driver',
                'Neither policy responds because permissive users are excluded'
              ],
              answer: 1,
              explain: 'Permissive users are insureds under the owner’s Part A, and the policy on the car pays first. The driver’s own policy sits excess above it.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Supplementary payments — extras on top of the limit</h3>
<p>Part A also pays certain expenses <strong>in addition to the limit of liability</strong>. The dollar figures are pure exam bait — memorize them:</p>`
        },
        {
          type: 'table',
          caption: 'Part A supplementary payments (paid in addition to limits)',
          headers: ['Payment', 'Amount'],
          rows: [
            ['Bail bonds required because of an accident resulting in BI or PD', '<strong>Up to $250</strong>'],
            ['Premiums on appeal bonds and bonds to release attachments', 'In any suit the insurer defends'],
            ['Interest accruing after a judgment is entered', 'No stated cap'],
            ['Loss of earnings for attending hearings or trials at the insurer’s request', '<strong>Up to $200 per day</strong>'],
            ['Other reasonable expenses incurred at the insurer’s request', 'As incurred']
          ]
        },
        {
          type: 'text',
          html: `<h3>What Part A will not do</h3>
<p>The exclusions cluster into themes. Part A does not cover: <strong>intentional injury or damage</strong>; damage to <strong>property owned or being transported by the insured</strong>; damage to <strong>property rented to, used by, or in the care of the insured</strong> (with an exception for a rented residence or private garage); injury to an <strong>employee of the insured</strong> in the course of employment (workers compensation territory); <strong>public livery use</strong> — carrying persons or property for a fee, which includes ride-share driving unless endorsed (carpool cost-sharing is fine); anyone working in the <strong>auto business</strong> (servicing, repairing, parking, selling) when using your car in that business; vehicles with <strong>fewer than four wheels</strong>; and use of a vehicle <strong>without a reasonable belief of permission</strong> — the joyriding thief is on his own.</p>
<h3>Out-of-state coverage</h3>
<p>Drive into a state with higher required minimum limits, or one demanding no-fault benefits, and Part A <strong>automatically adjusts upward to meet that state’s minimums</strong> for that trip. Your policy never makes you illegal anywhere in the policy territory — and it never adjusts downward.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A Georgia driver insured at her state’s minimums vacations in Florida and causes a crash. Her PAP automatically provides whatever Florida law requires of her for that accident. The conformity provision raises limits to the visited state’s floor — the insured never has to buy a separate policy for an interstate road trip.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 6.2 key terms',
          cards: [
            { front: 'Part A insuring agreement', back: 'Pays BI and PD an insured is legally liable for from an auto accident, and defends suits — defense in ADDITION to limits.' },
            { front: 'When the duty to defend ends', back: 'When the limit of liability is exhausted by payment of judgments or settlements.' },
            { front: 'Split limits 100/300/50', back: '$100k BI per person / $300k BI per accident / $50k PD per accident.' },
            { front: 'Combined single limit', back: 'One pool of money for BI and PD combined — no per-person cap.' },
            { front: 'Bail bond supplementary payment', back: 'Up to $250 for bail bonds required because of an accident.' },
            { front: 'Loss-of-earnings payment', back: 'Up to $200 per day for attending trials at the insurer’s request.' },
            { front: 'Permissive user', back: 'Anyone using the covered auto with a reasonable belief of permission — an insured under the owner’s Part A.' },
            { front: 'Other insurance (owned vs borrowed)', back: 'The policy on the CAR is primary; the driver’s own policy is excess.' },
            { front: 'Out-of-state coverage', back: 'Part A automatically rises to meet a visited state’s minimum limits or no-fault requirements.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — supplementary payments & exclusions',
          questions: [
            {
              q: 'After an at-fault accident, an insured is arrested and needs a bail bond. Part A pays up to:',
              choices: ['$100', '$200', '$250', '$500'],
              answer: 2,
              explain: 'The supplementary payments include up to $250 for bail bonds required because of an accident resulting in bodily injury or property damage — paid in addition to the limit of liability.'
            },
            {
              q: 'Which loss is EXCLUDED under Part A?',
              choices: [
                'A permissive user injures a pedestrian with the covered auto',
                'The insured’s borrowed cement mixer is damaged while in his care',
                'The insured damages a neighbor’s fence backing out of a driveway',
                'A family member injures another driver while using a non-owned auto'
              ],
              answer: 1,
              explain: 'Part A excludes damage to property rented to, used by, or in the care of the insured (except a rented residence or private garage). Liability to OTHER people and their property is exactly what Part A covers.'
            },
            {
              q: 'An insured drives weekend shifts for a food-delivery app using her personal car with an unendorsed PAP. Liability coverage during deliveries is:',
              choices: [
                'Provided, because food is property, not passengers',
                'Provided, but at state minimum limits only',
                'Provided if she keeps receipts',
                'Excluded — carrying persons or property for a fee is public livery use'
              ],
              answer: 3,
              explain: 'The livery exclusion bars coverage while carrying persons or property for a fee. Share-the-expense carpools are excepted, but commercial app deliveries are not — this is the gap TNC and delivery endorsements exist to fill.'
            },
            {
              q: 'A thief steals a covered auto and injures someone while fleeing. Under Part A the thief is:',
              choices: [
                'An insured, because insurance follows the car',
                'Not an insured — he lacked a reasonable belief of permission',
                'An insured only for property damage',
                'Covered under supplementary payments'
              ],
              answer: 1,
              explain: 'Permissive use requires a reasonable belief that the user was entitled to drive. A thief has none, so the policy owes him neither indemnity nor defense.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Bodily injury (BI)', def: 'Bodily harm, sickness, or disease, including death resulting from it.' },
        { term: 'Property damage (PD)', def: 'Physical injury to, destruction of, or loss of use of tangible property.' },
        { term: 'Duty to defend', def: 'The insurer’s obligation to defend suits seeking covered damages, paid in addition to limits, ending when limits are exhausted.' },
        { term: 'Split limits', def: 'Separate caps for BI per person, BI per accident, and PD per accident (e.g., 100/300/50).' },
        { term: 'Combined single limit (CSL)', def: 'A single limit applying to all BI and PD from one accident, with no per-person cap.' },
        { term: 'Per-person limit', def: 'The most one injured person can collect for BI under split limits.' },
        { term: 'Per-accident limit', def: 'The most all victims together can collect for BI (or PD) from a single accident.' },
        { term: 'Supplementary payments', def: 'Expenses paid in addition to the liability limit: $250 bail bonds, appeal bond premiums, post-judgment interest, $200/day lost earnings, other requested expenses.' },
        { term: 'Permissive user', def: 'A person using the covered auto within the scope of the owner’s permission; an insured under Part A.' },
        { term: 'Vicarious liability', def: 'Legal responsibility imposed on one party for the acts of another — e.g., an organization liable for an insured’s driving.' },
        { term: 'Primary coverage', def: 'The policy that pays first — for a borrowed car, the policy covering the vehicle.' },
        { term: 'Excess coverage', def: 'Coverage that pays only after primary limits are exhausted — the driver’s own policy when driving a borrowed car.' },
        { term: 'Out-of-state coverage provision', def: 'Automatically raises PAP limits to the minimum financial responsibility or no-fault requirements of a visited state.' },
        { term: 'Livery exclusion', def: 'Part A does not apply while the vehicle carries persons or property for a fee; share-the-expense carpools are excepted.' }
      ]
    },

    /* ---------------- Lesson 6.3 ---------------- */
    {
      id: 'u6l3',
      title: 'Parts B & C — Med Pay and Uninsured Motorists',
      minutes: 13,
      objectives: [
        'State what Part B medical payments covers, for whom, and within what time limit',
        'Distinguish the two ways an insured triggers med pay — occupying or as a pedestrian',
        'Define an uninsured motor vehicle and explain how Part C steps into the at-fault driver’s shoes',
        'Introduce the difference between stacked and non-stacked UM limits'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Part B — Medical Payments: small, fast, no-fault</h3>
<p>Part B pays <strong>reasonable medical and funeral expenses incurred within 3 years of the accident</strong>, up to a modest per-person limit (commonly $1,000 to $10,000), <strong>regardless of who was at fault</strong>. There is nothing to litigate: show the bills, get paid, up to the limit, per person, per accident.</p>
<p>Who collects? An insured — you or a family member — qualifies two ways:</p>
<ul>
<li><strong>While occupying a motor vehicle</strong> (any motor vehicle, not just the covered auto — remember the broad in, upon, getting in, on, out, or off definition), or</li>
<li><strong>As a pedestrian, when struck by a motor vehicle</strong> designed mainly for use on public roads.</li>
</ul>
<p>Other passengers in <em>your covered auto</em> are also insureds for med pay. Note the symmetry with Part A’s exclusions: no med pay while occupying a vehicle with fewer than four wheels, a vehicle used as a public livery, or a vehicle used as a residence, and no coverage for injuries in the course of employment when workers compensation applies.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — The Part B trigger',
          html: `<p>Part B pays an insured’s reasonable medical and funeral expenses <strong>incurred within 3 years of the date of the accident</strong>, while <strong>occupying</strong> a motor vehicle or when <strong>struck as a pedestrian</strong> by one. The 3-year window and the occupying-or-pedestrian trigger are the two facts the exam pulls from this coverage.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida note — Med Pay rides on top of PIP',
          html: `<p>In Florida, personal injury protection (PIP) — covered in depth in Unit 7 — pays first and covers only <strong>80% of medical bills</strong>. Florida drivers often buy Med Pay to pick up the <strong>20% of medical expenses PIP leaves behind</strong> and to keep paying after PIP’s $10,000 limit is gone. Knowing how the two coverages mesh is daily work for a Florida 4-40.</p>`
        },
        {
          type: 'text',
          html: `<h3>Part C — Uninsured Motorists: the other driver’s missing policy</h3>
<p>Liability insurance only works when the at-fault driver has it. When the driver who hurt you has nothing, <strong>Part C makes your own insurer stand in the at-fault driver’s shoes</strong> and pay the <strong>compensatory damages for bodily injury</strong> you were legally entitled to collect from that driver — medical bills, lost income, pain and suffering. Fault still matters: UM pays only what the uninsured driver was <em>legally responsible</em> for, and it never pays punitive damages.</p>
<p>An <strong>uninsured motor vehicle</strong> is one of four things:</p>
<ol>
<li>A vehicle with <strong>no BI liability insurance at all</strong>;</li>
<li>A vehicle whose limits are <strong>less than the law requires</strong> (and, with underinsured motorists coverage, less than your damages);</li>
<li>A <strong>hit-and-run vehicle</strong> whose driver cannot be identified;</li>
<li>A vehicle whose insurer <strong>denies coverage or becomes insolvent</strong>.</li>
</ol>
<p><strong>Underinsured motorists (UIM)</strong> coverage extends the idea: the at-fault driver has insurance, but not enough. Your UM/UIM pays the layer between the at-fault driver’s inadequate limits and your actual damages, up to your UM limit.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A hit-and-run driver sideswipes Priya’s car at night and vanishes. Priya suffers $40,000 in bodily injury damages. She cannot sue a ghost — but a hit-and-run vehicle IS an uninsured motor vehicle, so her own Part C pays the $40,000 (up to her UM limit), exactly as the phantom driver’s liability insurer should have. Her insurer takes over any rights she has against the driver if he is ever found — that is subrogation at work.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'Why UM exists: estimated share of drivers with no insurance (illustrative)',
          labels: ['Florida', 'US average', 'Best-insured states'],
          datasets: [{ label: 'Uninsured drivers', data: [20, 14, 6] }],
          suffix: '%',
          note: 'Illustrative figures based on industry estimates. Roughly one Florida driver in five carries no coverage at all — among the highest rates in the nation, and the reason agents urge every client to carry UM.'
        },
        {
          type: 'text',
          html: `<h3>Stacked vs. non-stacked — a first look</h3>
<p>When one policy covers multiple vehicles (or one household holds multiple policies), <strong>stacked UM</strong> lets the insured <strong>combine — stack — the UM limits across vehicles</strong>: two cars with $100,000 UM each become $200,000 of protection for one accident. <strong>Non-stacked UM</strong> confines you to the single per-vehicle limit. Stacking buys more protection and costs more premium. Florida has detailed rules about offering, rejecting, and electing these options — that is Unit 7’s territory; for now, lock in the concept.</p>`
        },
        {
          type: 'compare',
          title: 'Part B vs. Part C — different jobs',
          left: {
            title: 'Part B — Medical Payments',
            items: [
              'Pays <strong>regardless of fault</strong>',
              'Medical & funeral expenses only, <strong>within 3 years</strong>',
              'Trigger: <strong>occupying</strong> any motor vehicle or struck <strong>as a pedestrian</strong>',
              'Small limits, fast payment, no lawsuit needed'
            ]
          },
          right: {
            title: 'Part C — Uninsured Motorists',
            items: [
              'Pays only what an <strong>at-fault uninsured driver</strong> was legally liable for',
              'All compensatory BI damages — bills, lost wages, pain and suffering',
              'Trigger: uninsured, underinsured, hit-and-run, or insolvent-insurer vehicle',
              'Your insurer stands in the absent driver’s shoes'
            ]
          }
        },
        {
          type: 'flashcards',
          title: 'Lesson 6.3 key terms',
          cards: [
            { front: 'Part B time limit', back: 'Pays reasonable medical and funeral expenses incurred within 3 years of the accident.' },
            { front: 'Part B trigger', back: 'Injured while OCCUPYING a motor vehicle, or struck AS A PEDESTRIAN by one. Fault is irrelevant.' },
            { front: 'Uninsured motor vehicle — 4 types', back: 'No BI insurance; limits below legal requirements; hit-and-run; insurer denies coverage or is insolvent.' },
            { front: 'What Part C pays', back: 'Compensatory BI damages the insured was legally entitled to recover from the at-fault uninsured driver — never punitive damages.' },
            { front: 'Underinsured motorists (UIM)', back: 'Pays the gap when the at-fault driver’s limits are too small for your damages.' },
            { front: 'Hit-and-run driver', back: 'Counts as uninsured — your own Part C pays what the unknown driver owed.' },
            { front: 'Stacked UM', back: 'Combines UM limits across vehicles or policies — more protection, more premium.' },
            { front: 'Non-stacked UM', back: 'UM limited to the single per-vehicle limit regardless of how many vehicles are insured.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — med pay & UM',
          questions: [
            {
              q: 'Part B medical payments covers reasonable medical and funeral expenses incurred within what period after the accident?',
              choices: ['1 year', '2 years', '3 years', '5 years'],
              answer: 2,
              explain: 'Three years from the date of the accident. Expenses incurred after the window closes are not payable, even if they relate to the same crash.'
            },
            {
              q: 'A family member is struck by a car while jogging across an intersection. Under the PAP she may collect:',
              choices: [
                'Nothing — she was not in the covered auto',
                'Part B med pay, because an insured struck as a pedestrian by a motor vehicle is covered',
                'Part A liability from her own policy',
                'Part D, as an other-than-collision loss'
              ],
              answer: 1,
              explain: 'Med pay protects insureds occupying any motor vehicle OR struck as pedestrians. Part A pays people the insured injures, not the insured herself; Part D covers the car, not bodies.'
            },
            {
              q: 'Which at-fault vehicle does NOT meet the PAP definition of an uninsured motor vehicle?',
              choices: [
                'A car whose driver fled and was never identified',
                'A car insured by a company that became insolvent',
                'A car with no liability insurance at all',
                'A car insured at limits high enough to pay the victim’s damages in full'
              ],
              answer: 3,
              explain: 'A fully and adequately insured vehicle is simply not uninsured. Hit-and-run vehicles, insolvent insurers, and uninsured cars all trigger Part C.'
            },
            {
              q: 'An insured owns two cars on one policy with $100,000 of UM each. With STACKED coverage, the UM available to her in a single accident is:',
              choices: ['$50,000', '$100,000', '$200,000', '$300,000'],
              answer: 2,
              explain: 'Stacking combines the limits across the two insured vehicles: 2 x $100,000 = $200,000. Non-stacked coverage would hold her to a single $100,000 limit.'
            },
            {
              q: 'Part C uninsured motorists coverage pays:',
              choices: [
                'All of the insured’s medical bills regardless of fault',
                'Compensatory damages the insured was legally entitled to recover from the at-fault uninsured driver',
                'Damage to the insured’s vehicle caused by an uninsured driver',
                'Punitive damages assessed against the uninsured driver'
              ],
              answer: 1,
              explain: 'UM is fault-based: it pays what the uninsured driver legally owed for bodily injury. No-fault medical payment is Part B (or PIP in Florida); vehicle damage is Part D; punitive damages are never covered.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Medical payments coverage (Part B)', def: 'No-fault coverage for reasonable medical and funeral expenses incurred within 3 years of an auto accident.' },
        { term: 'Pedestrian (Part B)', def: 'An insured struck by a motor vehicle while not occupying one — covered under med pay.' },
        { term: 'Uninsured motorists coverage (Part C)', def: 'Pays compensatory BI damages an insured was legally entitled to recover from the owner or operator of an uninsured motor vehicle.' },
        { term: 'Uninsured motor vehicle', def: 'A vehicle with no BI coverage, inadequate legal limits, an unidentifiable hit-and-run driver, or an insurer that denies coverage or is insolvent.' },
        { term: 'Underinsured motorists coverage (UIM)', def: 'Pays the gap between an at-fault driver’s insufficient liability limits and the insured’s damages, up to the UM limit.' },
        { term: 'Hit-and-run vehicle', def: 'A vehicle whose operator cannot be identified; treated as an uninsured motor vehicle.' },
        { term: 'Compensatory damages', def: 'Damages that indemnify actual loss — medical costs, lost income, pain and suffering. UM pays these, never punitive damages.' },
        { term: 'Punitive damages', def: 'Damages meant to punish the wrongdoer; not covered by UM.' },
        { term: 'Stacked UM', def: 'Uninsured motorists limits multiplied or combined across insured vehicles or policies.' },
        { term: 'Non-stacked UM', def: 'UM coverage limited to one vehicle’s limit, with no combining across vehicles.' },
        { term: 'Subrogation (UM)', def: 'After paying a UM claim, the insurer takes over the insured’s right of recovery against the at-fault driver.' }
      ]
    },

    /* ---------------- Lesson 6.4 ---------------- */
    {
      id: 'u6l4',
      title: 'Part D — Damage to Your Auto (plus Parts E & F)',
      minutes: 17,
      objectives: [
        'Classify losses as collision or other-than-collision the way the PAP does',
        'Apply the transportation expenses coverage ($20 per day, $600 maximum) and its waiting periods',
        'Explain the limit of liability — the lesser of ACV or the cost to repair or replace',
        'Summarize the insured’s Part E duties and the key Part F general provisions'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The two physical damage coverages</h3>
<p>Part D promises to pay for <strong>direct and accidental loss</strong> to your covered auto or a non-owned auto you are using, minus the deductible — but only for the coverages shown in the declarations. There are two, and classification between them is the most predictable exam question in the auto unit:</p>
<ul>
<li><strong>Collision</strong> — the <strong>upset (overturn/rollover) of the vehicle, or its impact with another vehicle or object</strong>.</li>
<li><strong>Other-than-collision (OTC, traditionally called comprehensive)</strong> — everything else that is direct and accidental, with a famous list of named events that are <em>always</em> OTC no matter how much they feel like collisions.</li>
</ul>
<p>Why does classification matter? Because each coverage carries <strong>its own deductible</strong>, can be purchased separately (many insureds carry OTC only on an older car), and is priced differently — collision usually costs more.</p>`
        },
        {
          type: 'compare',
          title: 'Sorting losses: collision vs. other-than-collision',
          left: {
            title: 'Collision',
            items: [
              'Impact with another <strong>vehicle</strong>',
              'Impact with an <strong>object</strong> (tree, guardrail, pothole, building)',
              '<strong>Upset / rollover</strong> of the vehicle',
              'Hitting a deer carcass lying dead in the road (an object)'
            ]
          },
          right: {
            title: 'Other-than-collision (comprehensive)',
            items: [
              '<strong>Theft</strong> or larceny, <strong>fire</strong>, explosion, earthquake',
              '<strong>Missiles or falling objects</strong> (tree limb, dropped cargo)',
              'Windstorm, <strong>hail, water, flood</strong>',
              'Vandalism, riot or civil commotion, <strong>glass breakage</strong>',
              '<strong>Contact with a bird or animal</strong> (the live deer you hit)'
            ]
          }
        },
        {
          type: 'callout', variant: 'tip', title: 'The deer rule and the glass rule',
          html: `<p><strong>Hitting a live animal is ALWAYS other-than-collision</strong> — the drafters did not want juries debating whether a deer is an "object." But <strong>swerving to avoid the deer and hitting a tree is collision</strong>, and rolling the car in the swerve is also collision (upset). Glass breakage is OTC, but if the glass breaks in a collision, the insured may treat it as part of the collision loss — so one accident does not trigger two deductibles.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — classify the loss',
          questions: [
            {
              q: 'A covered auto skids on wet pavement and overturns into a ditch with no impact with any other object. The loss is:',
              choices: ['Other-than-collision', 'Collision — upset of the vehicle is collision', 'Excluded as a road hazard', 'Covered under Part A'],
              answer: 1,
              explain: 'Upset (overturn/rollover) is expressly part of the collision definition. OTC is reserved for the named list — fire, theft, glass, animals, falling objects, flood, and similar events.'
            },
            {
              q: 'Which loss is OTHER-THAN-COLLISION under the PAP?',
              choices: [
                'Backing into a concrete pillar',
                'Striking a stalled car on the interstate',
                'A tree limb falling onto the hood during a storm',
                'Sliding into a guardrail on ice'
              ],
              answer: 2,
              explain: 'Falling objects are on the OTC list. Impacts with vehicles and objects — pillars, stalled cars, guardrails — are collision.'
            },
            {
              q: 'A driver strikes a live deer that bounds onto the highway. The damage is classified as:',
              choices: [
                'Collision, because the deer is an object',
                'Other-than-collision, because contact with a bird or animal is on the OTC list',
                'Either, at the insurer’s option',
                'Uncovered unless the driver has towing coverage'
              ],
              answer: 1,
              explain: 'Contact with a bird or animal is always OTC. Swerving and hitting a tree instead would be collision — the exam tests both halves of the deer scenario.'
            },
            {
              q: 'A covered auto is stolen from a mall parking lot. The theft is payable under:',
              choices: [
                'Collision coverage',
                'Part A liability',
                'Neither — theft is excluded',
                'Other-than-collision coverage'
              ],
              answer: 3,
              explain: 'Theft and larceny appear on the OTC list. An insured who carries collision only — no OTC — has no theft coverage at all.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Transportation expenses, non-owned autos, and what Part D excludes</h3>
<p><strong>Transportation expenses:</strong> when a covered loss puts the car out of action, Part D pays <strong>up to $20 per day, to a maximum of $600</strong>, for substitute transportation (bus, rideshare, rental). For a <strong>total theft</strong>, payments begin <strong>48 hours after the theft</strong>; for other covered losses there is a short 24-hour waiting period, and payments end when the vehicle is repaired or replaced or the loss is paid. The extended transportation endorsement in Lesson 6.5 raises these numbers.</p>
<p><strong>Non-owned autos:</strong> Part D extends the <strong>broadest physical damage coverage carried on any declared vehicle</strong> to a non-owned auto (including a temporary substitute) in the custody of you or a family member. Borrow a friend’s car while yours is in the shop and your own collision/OTC — broadest on any of your cars — follows you, including its deductible.</p>
<p><strong>Key exclusions:</strong> <strong>wear and tear, freezing, mechanical or electrical breakdown</strong>, and <strong>road damage to tires</strong> (all maintenance, not fortuity — though all are covered if they result from the total theft of the vehicle); <strong>custom furnishings and equipment</strong> beyond limited amounts; electronic equipment not permanently installed; <strong>racing</strong> inside a facility; public livery use; destruction or <strong>confiscation by government authorities</strong>; and using a vehicle without reasonable belief of permission.</p>
<h3>How much Part D pays — the limit of liability</h3>
<p>Part D pays the <strong>LESSER of (1) the actual cash value of the damaged or stolen property, or (2) the amount necessary to repair or replace it</strong> with like kind and quality — minus the deductible. An adjustment for <strong>betterment</strong> may apply when repairs leave the car better than before (a brand-new tire replacing a bald one), and <strong>diminution in value</strong> — the market’s distaste for a repaired car — is expressly not covered. If insurer and insured cannot agree on the amount of loss, either may demand <strong>appraisal</strong>: each picks an appraiser, the appraisers pick an umpire, and agreement of any two binds both sides. And echoing every property policy: the insured <strong>may not abandon the vehicle</strong> to the insurer and demand its value — though the insurer may choose to take the salvage at an agreed or appraised value.</p>`
        },
        {
          type: 'callout', variant: 'example', title: 'Worked example — lesser of ACV or repair',
          html: `<p>Jo’s 9-year-old sedan has an ACV of <strong>$6,500</strong>. A collision produces a repair estimate of <strong>$8,200</strong>. Part D owes the lesser figure — the <strong>$6,500 ACV</strong> — minus her $500 deductible, so the check is <strong>$6,000</strong> and the car is a total loss. Reverse the numbers (ACV $8,200, repairs $6,500) and the insurer pays $6,500 minus $500 = $6,000 in repairs instead. The policy always takes the cheaper exit; that is the indemnity principle on four wheels.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'What other-than-collision claims look like (illustrative mix)',
          labels: ['Windshield / glass', 'Theft & vandalism', 'Weather (hail, flood, wind)', 'Animal contact', 'Fire & falling objects'],
          datasets: [{ label: 'Share of OTC claims', data: [38, 22, 20, 14, 6] }],
          suffix: '%',
          note: 'Illustrative distribution. Glass dominates OTC claim counts — one reason Florida wrote a special zero-deductible windshield rule into law, covered in Unit 7.'
        },
        {
          type: 'text',
          html: `<h3>Part E — Duties After an Accident or Loss</h3>
<p>Part E is the insured’s side of the conditional contract. Breach these duties badly enough — so the insurer is prejudiced — and the claim can fail.</p>
<h3>Part F — General Provisions worth knowing</h3>
<p>Part F holds the housekeeping: the policy period and territory rules from Lesson 6.1; <strong>bankruptcy</strong> of the insured does not relieve the insurer; <strong>no legal action</strong> may be brought against the insurer until the insured has complied with all policy terms; the insurer’s <strong>subrogation</strong> rights (the insured must do nothing after a loss to prejudice them); <strong>changes</strong> can only be made by the insurer in writing; and <strong>termination</strong> — cancellation and nonrenewal — operates under state law, which for Florida means the day-counts you will memorize in Unit 7.</p>`
        },
        {
          type: 'steps',
          title: 'Part E — the insured’s duties checklist',
          items: [
            { title: 'Prompt notice', text: 'Notify the insurer promptly of how, when, and where the accident or loss happened, with names and addresses of injured persons and witnesses.' },
            { title: 'Cooperate', text: 'Cooperate in the investigation, settlement, and defense of any claim or suit, and send the insurer copies of every legal paper received.' },
            { title: 'Submit to examination', text: 'Take physical exams as reasonably required and submit to examination under oath; provide authorization for medical reports and records.' },
            { title: 'Extra duty for UM claims', text: 'A hit-and-run must be reported to the POLICE promptly — that report is what separates a real phantom-vehicle claim from a fabricated one.' },
            { title: 'Extra duties for Part D claims', text: 'Take reasonable steps to protect the vehicle from further loss (the insurer reimburses those expenses), promptly notify the police if the vehicle is stolen, and permit inspection and appraisal before repair or disposal.' }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 6.4 key terms',
          cards: [
            { front: 'Collision (PAP definition)', back: 'Upset of the vehicle, or its impact with another vehicle or object — rollover counts as collision.' },
            { front: 'Always other-than-collision', back: 'Theft, fire, explosion, earthquake, windstorm, hail, water, flood, vandalism, riot, glass breakage, falling objects, contact with a bird or animal.' },
            { front: 'Transportation expenses', back: 'Up to $20 per day, $600 maximum; total theft payments begin 48 hours after the theft.' },
            { front: 'Part D limit of liability', back: 'The LESSER of the actual cash value or the cost to repair or replace — minus the deductible.' },
            { front: 'Diminution in value', back: 'Loss of market value after repair — expressly NOT covered by Part D.' },
            { front: 'Appraisal (Part D)', back: 'Either party may demand it on disputes over the AMOUNT of loss; two appraisers plus an umpire, any two bind.' },
            { front: 'No abandonment', back: 'The insured cannot dump the wreck on the insurer and demand payment; the insurer may elect to take salvage.' },
            { front: 'UM hit-and-run duty', back: 'Report the hit-and-run to the police promptly.' },
            { front: 'Non-owned auto under Part D', back: 'Gets the broadest physical damage coverage carried on any declared vehicle.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — Part D money rules & duties',
          questions: [
            {
              q: 'A covered auto is stolen and not recovered for 25 days. Standard transportation expenses coverage pays:',
              choices: [
                '$20 per day from the moment of theft, unlimited',
                '$20 per day beginning 48 hours after the theft, up to a $600 maximum',
                '$50 per day for up to 30 days',
                'Nothing unless a rental endorsement was purchased'
              ],
              answer: 1,
              explain: 'The standard provision is $20/day with a $600 cap, and total-theft payments start 48 hours after the theft. The extended transportation expenses endorsement is how insureds buy higher amounts.'
            },
            {
              q: 'A car with an ACV of $4,000 sustains $5,500 in collision damage. With a $500 deductible, Part D pays:',
              choices: ['$5,000', '$4,000', '$3,500', '$5,500'],
              answer: 2,
              explain: 'The limit of liability is the lesser of ACV ($4,000) or repair cost ($5,500). The lesser is $4,000; subtract the $500 deductible to get $3,500 — a total loss.'
            },
            {
              q: 'Which loss IS covered under other-than-collision coverage?',
              choices: [
                'An engine ruined by years of skipped oil changes',
                'Tires worn bald by normal driving',
                'A transmission that fails from mechanical breakdown',
                'An engine and tires lost when the entire car is stolen and never recovered'
              ],
              answer: 3,
              explain: 'Wear and tear, road damage to tires, and mechanical breakdown are excluded — but the exclusions do not apply when the damage results from the TOTAL THEFT of the vehicle. Theft of the whole car takes everything in it.'
            },
            {
              q: 'After a UM hit-and-run claim, which duty is unique to that claim under Part E?',
              choices: [
                'Submitting a sworn proof of loss within 6 months',
                'Hiring an attorney',
                'Promptly notifying the police of the hit-and-run',
                'Obtaining three repair estimates'
              ],
              answer: 2,
              explain: 'The PAP adds a specific duty for UM claims: report a hit-and-run to the police promptly. For Part D claims the added duties are protecting the vehicle, reporting theft to police, and allowing inspection.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Collision', def: 'The upset of a vehicle or its impact with another vehicle or object.' },
        { term: 'Other-than-collision (comprehensive)', def: 'Direct, accidental loss from the named non-collision events: theft, fire, glass breakage, falling objects, windstorm, hail, water, flood, vandalism, riot, earthquake, explosion, and contact with a bird or animal.' },
        { term: 'Deductible', def: 'The amount of each Part D loss the insured retains; collision and OTC carry separate deductibles.' },
        { term: 'Transportation expenses', def: 'Substitute transportation paid at up to $20 per day, $600 maximum, after a covered Part D loss; total-theft payments begin after 48 hours.' },
        { term: 'Non-owned auto (Part D)', def: 'An auto not owned by or furnished for the regular use of the insured; receives the broadest coverage on any declared vehicle.' },
        { term: 'Limit of liability (Part D)', def: 'The lesser of the actual cash value of the property or the amount necessary to repair or replace it.' },
        { term: 'Actual cash value (auto)', def: 'The vehicle’s depreciated market value immediately before the loss.' },
        { term: 'Betterment', def: 'An adjustment when repairs leave the vehicle better than pre-loss condition; the improvement portion may be borne by the insured.' },
        { term: 'Diminution in value', def: 'The reduction in resale value of a repaired vehicle; excluded under Part D.' },
        { term: 'Appraisal (auto)', def: 'The dispute process for the amount of loss: each side hires an appraiser, the appraisers select an umpire, and agreement of any two binds.' },
        { term: 'Abandonment (auto)', def: 'Not permitted — the insured cannot force the insurer to take the damaged vehicle; the insurer may elect to take salvage.' },
        { term: 'Duties after loss (Part E)', def: 'Prompt notice, cooperation, forwarding legal papers, exams under oath and physical exams, police reports for hit-and-run and theft, and protecting the vehicle.' },
        { term: 'Subrogation (Part F)', def: 'The insurer’s right to recover its payment from the responsible party; the insured must not impair that right.' }
      ]
    },

    /* ---------------- Lesson 6.5 ---------------- */
    {
      id: 'u6l5',
      title: 'Auto Endorsements & Special Situations',
      minutes: 14,
      objectives: [
        'Match the major PAP endorsements to the gaps they fill',
        'Explain who needs named non-owner and extended non-owned coverage',
        'Describe the gap problem on financed and leased vehicles',
        'Identify the ride-sharing (TNC) coverage gap and Florida’s TNC insurance requirements'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Patching the PAP</h3>
<p>The unendorsed PAP was built for a household that owns ordinary cars and drives them personally. Real customers own motorcycles, drive employer-furnished cars, rent vehicles on vacation, finance more than their car is worth, and flip on a ride-share app at dinnertime. Endorsements rebuild the policy around those realities — and the exam tests whether you can <strong>name the endorsement that fixes each gap</strong>.</p>
<ul>
<li><strong>Towing and labor costs</strong> — pays towing and roadside labor, but <strong>labor only at the place of disablement</strong>. A jump-start in your driveway is covered labor; the shop’s repair bill never is.</li>
<li><strong>Extended transportation expenses</strong> — raises the standard $20/day, $600 maximum rental allowance to higher daily and total limits. Often sold as rental reimbursement coverage.</li>
<li><strong>Miscellaneous type vehicle endorsement</strong> — brings <strong>motorcycles, mopeds, motor homes, golf carts, ATVs, and dune buggies</strong> into the PAP. Solves Part A’s fewer-than-four-wheels exclusion for the bike crowd.</li>
<li><strong>Joint ownership coverage</strong> — adapts the PAP for vehicles co-owned by people who are not married spouses — two siblings, unmarried partners, or other residents who jointly own a car.</li>
<li><strong>Optional limits transportation expenses, customizing equipment coverage, and excess electronic equipment</strong> — buy-backs for the dollar caps in Part D.</li>
</ul>`
        },
        {
          type: 'table',
          caption: 'Endorsement quick reference — gap and fix',
          headers: ['The gap', 'The endorsement'],
          rows: [
            ['Car breaks down; tow truck and roadside labor needed', '<strong>Towing and labor costs</strong> (labor covered only at the place of disablement)'],
            ['$20/day rental allowance is not enough', '<strong>Extended transportation expenses</strong> (rental reimbursement)'],
            ['Motorcycle, moped, motor home, golf cart, or ATV to insure', '<strong>Miscellaneous type vehicle endorsement</strong>'],
            ['Driver owns NO car but borrows and rents often', '<strong>Named non-owner coverage</strong>'],
            ['Company car furnished for regular use — excluded by the PAP', '<strong>Extended non-owned coverage</strong>'],
            ['Car co-owned by unmarried residents', '<strong>Joint ownership coverage</strong>'],
            ['Loan balance exceeds the totaled car’s ACV', '<strong>Gap coverage</strong> (auto loan/lease coverage)']
          ]
        },
        {
          type: 'text',
          html: `<h3>The two non-owned heroes</h3>
<p><strong>Named non-owner coverage</strong> is a policy for a person who <strong>does not own an automobile at all</strong> — a city dweller who borrows cars and rents on weekends, or a driver who must file proof of financial responsibility (an SR-22, see Unit 7) without owning a vehicle. It provides liability, and optionally med pay and UM, that follow the named person as excess over the borrowed car’s own insurance.</p>
<p><strong>Extended non-owned coverage</strong> solves a sneakier problem. The PAP quietly excludes vehicles <strong>furnished or available for the regular use</strong> of you or a family member — the employer-provided sedan, the take-home police cruiser, the long-term borrowed pickup. Occasional borrowing is fine; <em>regular use</em> is not, because the insurer never collected premium for a car that is effectively a second household vehicle. The extended non-owned endorsement buys that exclusion back for the named individual, layering your liability and med pay over the furnished car.</p>
<h3>Gap coverage and telematics</h3>
<p>New cars depreciate faster than loans amortize. Total a financed car worth $19,000 ACV while owing $24,000, and Part D pays $19,000 minus the deductible — leaving the insured writing checks for a car that no longer exists. <strong>Gap coverage (auto loan/lease coverage)</strong> pays the difference between the ACV settlement and the outstanding loan or lease balance. Lease contracts commonly require it.</p>
<p><strong>Usage-based (telematics) programs</strong> price the policy on observed driving — miles, braking, phone handling, time of day — via an app or plug-in device. They are a rating innovation, not a coverage change: the PAP’s promises are identical; only the premium moves.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Tessa’s employer furnishes her a company car she garages at home and drives daily; she also owns a weekend convertible insured on a PAP. Her PAP will NOT cover her liability in the company car — it is furnished for her regular use. The fix is the <strong>extended non-owned coverage endorsement</strong> naming Tessa. Her roommate Drew owns no car at all and borrows Tessa’s convertible twice a month; if Drew wants his own liability protection (and an SR-22 vehicle), he buys a <strong>named non-owner policy</strong>.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — match the endorsement',
          questions: [
            {
              q: 'Under the towing and labor costs endorsement, covered labor must be performed:',
              choices: [
                'At any licensed repair shop',
                'Within 50 miles of the insured’s home',
                'At the place of disablement',
                'By the insurer’s approved vendor'
              ],
              answer: 2,
              explain: 'Labor is covered only at the site where the car broke down — changing a flat on the shoulder, a roadside jump-start. Shop repair labor is a maintenance cost, never covered.'
            },
            {
              q: 'A customer wants to insure a motor home and two ATVs. The correct PAP solution is the:',
              choices: [
                'Named non-owner endorsement',
                'Miscellaneous type vehicle endorsement',
                'Joint ownership endorsement',
                'Extended transportation expenses endorsement'
              ],
              answer: 1,
              explain: 'The miscellaneous type vehicle endorsement adapts the PAP to motorcycles, mopeds, motor homes, golf carts, ATVs, and similar vehicles that the base policy will not insure.'
            },
            {
              q: 'A family member is regularly furnished a take-home company car. Without endorsement, the family’s PAP treats that car as:',
              choices: [
                'A temporary substitute auto',
                'A covered auto after 14 days',
                'A non-owned auto with full coverage',
                'Excluded — vehicles furnished or available for regular use are not covered'
              ],
              answer: 3,
              explain: 'The regular-use exclusion removes coverage for furnished vehicles because the insurer collected no premium for a de facto household car. Extended non-owned coverage is the buy-back.'
            },
            {
              q: 'A totaled financed vehicle has an ACV of $15,000 and a loan payoff of $19,500. The coverage designed to pay the $4,500 difference is:',
              choices: [
                'Gap (auto loan/lease) coverage',
                'Extended transportation expenses',
                'Optional limits collision',
                'Towing and labor'
              ],
              answer: 0,
              explain: 'Gap coverage pays the spread between the Part D ACV settlement and the outstanding loan or lease balance — the insured’s exposure on any rapidly depreciating financed car.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Ride-sharing: the gap the app opens</h3>
<p>The moment a driver turns on a transportation network company (TNC) app — Uber, Lyft, and similar platforms — the personal PAP’s <strong>public livery exclusion</strong> begins to bite. Coverage is analyzed in three periods, and the danger zone is the first one:</p>
<ul>
<li><strong>Period 1 — app on, no ride accepted:</strong> the driver is trolling for fares. The personal PAP excludes it; the TNC’s big commercial limits have not started. This is the classic <strong>TNC gap</strong>.</li>
<li><strong>Period 2 — ride accepted, en route to pick up</strong> and <strong>Period 3 — passenger aboard:</strong> the TNC’s commercial coverage applies at high limits.</li>
</ul>
<p>Insurers sell <strong>ride-sharing/TNC gap endorsements</strong> extending the personal policy through period 1 (some through all periods for physical damage). A 4-40 who hears "I drive a little Uber on Fridays" and says nothing has invited an uncovered claim and an E&O complaint.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — TNC insurance requirements (s. 627.748, F.S.)',
          html: `<p>Florida’s TNC statute fills the gap by force of law. While a driver is <strong>logged into the app but has not accepted a ride (period 1)</strong>, there must be primary auto coverage of at least <strong>$50,000 per person / $100,000 per accident for BI and $25,000 for PD (50/100/25)</strong>, plus PIP and any required UM. While <strong>engaged in a prearranged ride (periods 2 and 3)</strong>, primary coverage of at least <strong>$1 million</strong> for death, BI, and PD is required. The coverage may be carried by the driver, the TNC, or both — but if the driver’s policy lapses or excludes the activity, <strong>the TNC’s policy must step in from the first dollar</strong>.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Florida TNC required liability by period',
          labels: ['Personal driving (10/20 FR equivalent)', 'Period 1 — app on, no ride (50/100/25)', 'Periods 2-3 — engaged ride ($1M)'],
          datasets: [{ label: 'Required BI per accident (thousands of dollars)', data: [20, 100, 1000] }],
          note: 'Per-accident BI requirement shown in thousands of dollars for scale; period 1 also requires $25,000 PD and the engaged periods require $1 million covering death, BI, and PD combined. Illustrative comparison of statutory floors.'
        },
        {
          type: 'flashcards',
          title: 'Lesson 6.5 key terms',
          cards: [
            { front: 'Towing and labor costs', back: 'Pays towing plus labor — but labor only at the place of disablement.' },
            { front: 'Extended transportation expenses', back: 'Raises the $20/day, $600 max rental allowance — rental reimbursement coverage.' },
            { front: 'Miscellaneous type vehicle endorsement', back: 'Adds motorcycles, mopeds, motor homes, golf carts, and ATVs to the PAP.' },
            { front: 'Named non-owner coverage', back: 'Liability for a person who owns no auto but borrows or rents; excess over the vehicle’s own policy.' },
            { front: 'Extended non-owned coverage', back: 'Buys back the furnished-or-available-for-regular-use exclusion (company cars).' },
            { front: 'Joint ownership coverage', back: 'Adapts the PAP for co-owners who are not married — siblings, unmarried partners, co-resident relatives.' },
            { front: 'Gap coverage', back: 'Pays the difference between the totaled car’s ACV and the larger loan or lease payoff.' },
            { front: 'TNC period 1', back: 'App on, no ride accepted — the personal PAP excludes it; Florida requires 50/100/25 primary coverage.' },
            { front: 'TNC periods 2-3 in Florida', back: 'Ride accepted through drop-off: at least $1 million primary coverage for death, BI, and PD.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — special situations',
          questions: [
            {
              q: 'During which ride-share period does the classic coverage gap occur under an unendorsed personal auto policy?',
              choices: [
                'Period 1 — app on, no ride accepted',
                'Period 2 — en route to pick up a passenger',
                'Period 3 — passenger in the vehicle',
                'While the app is off'
              ],
              answer: 0,
              explain: 'With the app off, the PAP applies normally; in periods 2 and 3 the TNC’s $1 million coverage applies. Period 1 is where the livery exclusion has begun but the big TNC limits have not — the gap.'
            },
            {
              q: 'Under Florida’s TNC law, while a driver is engaged in a prearranged ride, primary coverage of at least what amount is required for death, BI, and PD?',
              choices: ['$300,000', '$500,000', '$1 million', '$100,000'],
              answer: 2,
              explain: 'Periods 2 and 3 require at least $1 million in primary coverage. Period 1 (app on, no ride) requires 50/100/25 plus PIP.'
            },
            {
              q: 'Which customer most clearly needs NAMED NON-OWNER coverage?',
              choices: [
                'A homeowner with three declared vehicles',
                'A driver furnished a company car for daily use who also owns a personal car',
                'A renter who owns no vehicle but must file an SR-22 and frequently borrows cars',
                'A couple leasing a new SUV'
              ],
              answer: 2,
              explain: 'Named non-owner coverage exists for people who own no auto but need their own liability protection — including those required to demonstrate financial responsibility. The company-car driver who owns a car needs EXTENDED non-owned coverage on the existing policy.'
            },
            {
              q: 'Usage-based (telematics) insurance programs primarily change:',
              choices: [
                'The policy territory',
                'The premium, by rating on observed driving behavior',
                'The Part D limit of liability',
                'The definition of family member'
              ],
              answer: 1,
              explain: 'Telematics is a rating tool — miles, braking, time of day feed the price. The coverage promises of the PAP are unchanged.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Towing and labor costs endorsement', def: 'Pays towing and roadside labor; labor is covered only at the place of disablement.' },
        { term: 'Extended transportation expenses endorsement', def: 'Increases the standard $20 per day / $600 maximum substitute transportation allowance; also called rental reimbursement.' },
        { term: 'Miscellaneous type vehicle endorsement', def: 'Extends the PAP to motorcycles, mopeds, motor homes, golf carts, ATVs, and similar vehicles.' },
        { term: 'Named non-owner policy', def: 'Liability (optionally med pay/UM) for a named individual who owns no auto; excess over the borrowed vehicle’s insurance.' },
        { term: 'Extended non-owned coverage', def: 'Endorsement restoring coverage for vehicles furnished or available for the insured’s regular use, such as company cars.' },
        { term: 'Regular-use exclusion', def: 'The PAP exclusion for non-owned vehicles furnished or available for the regular use of an insured.' },
        { term: 'Joint ownership coverage', def: 'Endorsement adapting the PAP for vehicles co-owned by non-spouses, such as unmarried partners or co-resident relatives.' },
        { term: 'Gap (auto loan/lease) coverage', def: 'Pays the difference between a totaled vehicle’s ACV settlement and the larger outstanding loan or lease balance.' },
        { term: 'Usage-based insurance (telematics)', def: 'Rating programs that price the policy on monitored driving behavior; coverage terms are unchanged.' },
        { term: 'Transportation network company (TNC)', def: 'An app-based prearranged ride service such as Uber or Lyft; personal PAPs exclude TNC driving as livery use.' },
        { term: 'TNC period 1', def: 'Driver logged into the app with no ride accepted; Florida requires 50/100/25 primary coverage plus PIP.' },
        { term: 'TNC periods 2 and 3', def: 'From ride acceptance through passenger drop-off; Florida requires at least $1 million in primary coverage.' }
      ]
    }
  ],

  /* ---------------- Unit 6 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Which PAP part contains the policy territory, subrogation, and termination provisions?',
        choices: ['Part C', 'Part D', 'Part E', 'Part F'],
        answer: 3,
        explain: 'Part F — General Provisions — is the fine print: period and territory, bankruptcy, changes, legal action, subrogation, and termination. Part E is the insured’s duties after a loss.'
      },
      {
        q: 'Which vehicle is NOT one of the four categories of "your covered auto"?',
        choices: [
          'A pickup listed in the declarations',
          'A friend’s car borrowed for a weekend trip while your own car sits at home in working order',
          'A trailer you own',
          'A loaner used while the declared car is being repaired'
        ],
        answer: 1,
        explain: 'A borrowed car qualifies as a temporary substitute only when YOUR covered auto is out of use for breakdown, repair, servicing, loss, or destruction. Borrowing for convenience makes it merely a non-owned auto — insureds still have liability protection, but the car is not a covered auto.'
      },
      {
        q: 'An insured buys an ADDITIONAL car during the policy period. For automatic coverage to continue, the insurer must be asked to insure it within:',
        choices: ['14 days', '10 days', '30 days', '60 days'],
        answer: 0,
        explain: 'Additional newly acquired vehicles enjoy automatic coverage only if reported within 14 days of acquisition. A replacement vehicle inherits the old car’s coverage automatically.'
      },
      {
        q: 'The PAP policy territory includes all of the following EXCEPT:',
        choices: ['Puerto Rico', 'Canada', 'Mexico', 'The US Virgin Islands'],
        answer: 2,
        explain: 'Territory = the US, its territories and possessions, Puerto Rico, and Canada, plus transport between their ports. Mexico is never included; a separate Mexican policy is needed.'
      },
      {
        q: 'Under Part A, the insurer’s duty to defend the insured ends when:',
        choices: [
          'The insured demands a particular attorney',
          'The limit of liability is exhausted by payment of judgments or settlements',
          'The first lawsuit is filed',
          'Defense costs equal the limit of liability'
        ],
        answer: 1,
        explain: 'Defense is paid in addition to the limits and never erodes them — but once the full limit has been paid out in settlements or judgments, the duty to defend stops.'
      },
      {
        q: 'An insured carries 100/300/50. A single accident injures four people, with BI awards of $120,000, $80,000, $60,000 and $90,000. The policy pays total BI of:',
        choices: ['$350,000', '$330,000', '$300,000', '$280,000'],
        answer: 2,
        explain: 'Per-person caps first: $100,000 + $80,000 + $60,000 + $90,000 = $330,000. Then the per-accident cap of $300,000 cuts the total to $300,000. The insured owes the remaining $30,000 plus the first victim’s capped $20,000.'
      },
      {
        q: 'Part A supplementary payments include a bail bond benefit of up to:',
        choices: ['$500', '$250', '$200 per day', '$1,000'],
        answer: 1,
        explain: 'Up to $250 for bail bonds required because of an accident, paid in addition to the limit. The $200-per-day figure is the loss-of-earnings benefit for attending trials at the insurer’s request.'
      },
      {
        q: 'Sam borrows his neighbor’s insured car with permission and causes an accident. The proper order of payment for liability is:',
        choices: [
          'Sam’s policy primary, the neighbor’s excess',
          'Both policies pro-rata from dollar one',
          'The neighbor’s policy primary, Sam’s policy excess',
          'Only Sam’s policy responds'
        ],
        answer: 2,
        explain: 'Insurance follows the car: the policy covering the borrowed vehicle is primary, and the driver’s own coverage applies as excess once the primary limits are spent.'
      },
      {
        q: 'Part B medical payments will respond to which injury?',
        choices: [
          'A family member hurt while riding a motorcycle',
          'The named insured injured as a pedestrian when struck by a delivery van',
          'A passenger injured in a taxi the insured was operating for fares',
          'The insured injured while the car is used as a residence'
        ],
        answer: 1,
        explain: 'Insureds are covered while occupying a motor vehicle or when struck as pedestrians. Vehicles with fewer than four wheels, public livery use, and vehicles used as residences are excluded.'
      },
      {
        q: 'Under Part C, which scenario triggers uninsured motorists coverage?',
        choices: [
          'The insured rear-ends a fully insured driver',
          'A windstorm damages the insured’s parked car',
          'The insured’s own insurer raises premiums',
          'An identified at-fault driver carries no BI liability insurance'
        ],
        answer: 3,
        explain: 'UM responds when the at-fault vehicle is uninsured, insufficiently insured, a hit-and-run, or insured by a company that denies coverage or fails. It pays the BI damages that driver legally owed the insured.'
      },
      {
        q: 'Which loss is classified as COLLISION under Part D?',
        choices: [
          'The car overturns after swerving on gravel',
          'A vandal keys the paint',
          'Floodwater submerges the engine',
          'The car strikes a deer standing in the road'
        ],
        answer: 0,
        explain: 'Upset (rollover) is collision by definition. Vandalism, flood, and contact with an animal all appear on the other-than-collision list.'
      },
      {
        q: 'A stolen covered auto is recovered after three weeks. Standard Part D transportation expenses pay at most:',
        choices: ['$15 per day / $450 total', '$30 per day / $900 total', '$20 per day / $600 total', '$25 per day / $750 total'],
        answer: 2,
        explain: 'The standard allowance is $20 per day to a $600 maximum, with total-theft payments beginning 48 hours after the theft. Higher limits require the extended transportation expenses endorsement.'
      },
      {
        q: 'A damaged vehicle has an ACV of $7,000 and a repair estimate of $9,400. Ignoring the deductible, the most Part D will pay is:',
        choices: ['$9,400', '$8,200', '$2,400', '$7,000'],
        answer: 3,
        explain: 'The Part D limit of liability is the LESSER of ACV or the cost to repair or replace. $7,000 is less than $9,400, so the car is totaled at ACV.'
      },
      {
        q: 'A customer who is regularly furnished a company car and owns one personal vehicle on a PAP should be offered which endorsement?',
        choices: [
          'Named non-owner coverage',
          'Extended non-owned coverage',
          'Miscellaneous type vehicle endorsement',
          'Joint ownership coverage'
        ],
        answer: 1,
        explain: 'The PAP excludes vehicles furnished or available for regular use; extended non-owned coverage buys the exclusion back. Named non-owner policies are for people who own NO auto at all.'
      },
      {
        q: 'A Florida driver logs into a ride-share app and cruises while waiting for a ride request. During this period, Florida law requires primary liability coverage of at least:',
        choices: [
          '50/100/25 plus PIP',
          '10/20/10',
          '$1 million combined',
          'No coverage is required until a passenger enters the car'
        ],
        answer: 0,
        explain: 'Period 1 (app on, no ride accepted) requires 50/100/25 plus PIP under s. 627.748. The $1 million requirement applies during periods 2 and 3, from ride acceptance through drop-off.'
      }
    ]
  }
});
