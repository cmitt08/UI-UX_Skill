/* Unit 5 — Florida Property Essentials */
window.PL.units.push({
  id: 'u5',
  number: 5,
  title: 'Florida Property Essentials',
  icon: 'flag',
  description: 'The Florida-only layer on top of everything you just learned: hurricane deductibles and mitigation credits, Citizens and the Cat Fund, FIGA, sinkholes versus catastrophic ground cover collapse, the valued policy law, the post-2022 claim timelines, and flood insurance through the NFIP.',
  lessons: [

    /* ---------------- Lesson 5.1 ---------------- */
    {
      id: 'u5l1',
      title: 'Hurricane Coverage, Deductibles & Mitigation',
      minutes: 15,
      objectives: [
        'Define hurricane coverage and explain when the hurricane deductible applies',
        'List the hurricane deductible options ($500, 2%, 5%, 10%) and explain the calendar-year application',
        'Describe wind mitigation credits and the uniform mitigation verification inspection',
        'Explain how roof age and the Florida Building Code shape underwriting'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Why Florida property insurance is its own subject</h3>
<p>Everything in Units 2–4 applies in Florida — and then Florida adds a layer of law shaped by one fact: <strong>this state takes more hurricane risk than anywhere else in America.</strong> The legislature has built special deductibles, a state-run insurer, a state reinsurance fund, a guaranty association, and detailed claim deadlines around that risk. A 4-40 customer representative lives inside these rules every day of storm season.</p>
<h3>Hurricane coverage and the hurricane deductible</h3>
<p>Florida residential policies must cover the peril of <strong>windstorm</strong> unless properly excluded, and the law defines a special subset: <span class="kt" title="Loss caused by a storm the National Hurricane Center has declared a hurricane">hurricane coverage</span>. The <strong>hurricane deductible</strong> applies only to losses caused by a hurricane — defined by the time window from the issuance of a hurricane watch or warning for any part of Florida until 72 hours after the last watch or warning ends.</p>
<p>Insurers must offer hurricane deductible choices of <strong>$500, 2%, 5%, and 10% of the Coverage A (dwelling) limit</strong>. Because the percentage applies to the dwelling limit — not the loss — the dollars get big fast.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A home insured for <strong>Coverage A = $400,000</strong> with a <strong>2% hurricane deductible</strong> carries an $8,000 deductible for hurricane losses ($400,000 × 0.02). At 5% it would be $20,000; at 10%, $40,000. The all-other-perils deductible (often $1,000 or $2,500) still applies to non-hurricane claims like a kitchen fire.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the calendar-year (single-season) hurricane deductible',
          html: `<p>The hurricane deductible is applied on a <strong>calendar-year basis</strong>: the insured pays it only <strong>once per calendar year</strong> with the same insurer, no matter how many hurricanes strike. If a second hurricane causes loss in the same year, the insured owes only the regular all-perils deductible (if higher amounts remain, the policy applies the greater of the remaining hurricane deductible or the other-perils deductible). Policies must also display the deductible in <strong>bold type</strong> on the declarations and include the statutory notice: "THIS POLICY CONTAINS A SEPARATE DEDUCTIBLE FOR HURRICANE LOSSES, WHICH MAY RESULT IN HIGH OUT-OF-POCKET EXPENSES TO YOU."</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'Hurricane deductible in dollars on a $400,000 Coverage A home',
          labels: ['$500 flat', '2%', '5%', '10%'],
          datasets: [{ label: 'Deductible', data: [500, 8000, 20000, 40000] }],
          suffix: '',
          note: 'Percentage deductibles apply to the Coverage A limit, not to the amount of the loss. Customer representatives quote these trade-offs constantly: a bigger deductible cuts premium but transfers serious risk back to the insured.'
        },
        {
          type: 'text',
          html: `<h3>Wind mitigation — Florida’s biggest discount</h3>
<p>Florida law <strong>requires insurers to give premium credits for construction features that reduce hurricane damage</strong>. The features are documented on the <span class="kt" title="The standard statewide form an inspector completes to document wind-resistant construction features">uniform mitigation verification inspection form</span>, completed by a licensed inspector and good for five years. The big credit drivers:</p>
<ul>
<li><strong>Roof covering and installation</strong> — Florida Building Code-rated covering and nailing patterns.</li>
<li><strong>Roof-to-wall attachment</strong> — toe nails vs. clips vs. single or double wraps (hurricane straps).</li>
<li><strong>Roof geometry</strong> — a <strong>hip roof</strong> (slopes on all sides) outperforms gable ends in wind.</li>
<li><strong>Secondary water resistance</strong> — a sealed roof deck that keeps water out after the covering blows off.</li>
<li><strong>Opening protection</strong> — impact-rated windows, doors, and shutters protecting every opening.</li>
</ul>
<p>Mitigation credits can cut the wind portion of a premium dramatically, and the wind portion is most of a Florida premium. Knowing how to read a mitigation form is a genuinely valuable office skill.</p>
<h3>Roofs and the modern Florida market</h3>
<p>Roof age drives both insurability and claims. Under recent reforms, an insurer <strong>may not refuse to write or renew a home solely because a roof is under 15 years old</strong>, and for older roofs the homeowner may obtain an inspection showing at least five years of useful life remaining. Insurers may also offer <strong>roof deductible options</strong> (up to 2% of Coverage A or 50% of roof replacement cost) with proper notice. After Hurricane Andrew (1992), the <strong>Florida Building Code</strong> became one of the strictest in the nation — homes built to the post-2001 code suffer measurably less damage, and rating reflects that.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — hurricane deductibles & mitigation',
          questions: [
            {
              q: 'A Florida homeowner with Coverage A of $300,000 chose a 5% hurricane deductible. A hurricane causes $60,000 of damage. The insurer pays:',
              choices: ['$57,000', '$45,000', '$60,000', '$15,000'],
              answer: 1,
              explain: 'The deductible is 5% of the $300,000 Coverage A limit = $15,000, leaving $45,000 payable. Percentage deductibles apply to the limit, not the loss.'
            },
            {
              q: 'Two hurricanes hit Florida in the same calendar year, each damaging the insured’s home. Under Florida law the hurricane deductible:',
              choices: [
                'Applies in full to each storm',
                'Applies only once per calendar year with the same insurer',
                'Doubles for the second storm',
                'Is waived entirely for the second storm, with no other deductible due'
              ],
              answer: 1,
              explain: 'Florida’s hurricane deductible is a calendar-year deductible — paid once per year per insurer. For later storms that year, the all-other-perils deductible (or any unused remainder) applies instead.'
            },
            {
              q: 'Which roof shape earns the best wind mitigation credit?',
              choices: ['Gable', 'Flat', 'Hip', 'Gambrel'],
              answer: 2,
              explain: 'A hip roof slopes on all sides and presents no flat gable end to the wind, so it performs best — and earns the geometry credit on the uniform mitigation form.'
            },
            {
              q: 'The hurricane deductible applies to losses occurring:',
              choices: [
                'Any time between June 1 and November 30',
                'From the issuance of a hurricane watch or warning anywhere in Florida until 72 hours after the last one ends',
                'Only while sustained winds exceed 74 mph at the insured location',
                'Whenever the insurer declares a catastrophe'
              ],
              answer: 1,
              explain: 'The statutory window runs from the first hurricane watch or warning for any part of Florida until 72 hours after the final watch or warning is lifted — covering the named storm’s entire impact period.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 5.1 key terms',
          cards: [
            { front: 'Hurricane deductible options', back: 'Insurers must offer $500, 2%, 5%, and 10% of Coverage A. Percentage applies to the LIMIT, not the loss.' },
            { front: 'Calendar-year hurricane deductible', back: 'Paid only once per calendar year with the same insurer, no matter how many hurricanes strike.' },
            { front: 'Hurricane coverage window', back: 'From the first hurricane watch/warning in Florida until 72 hours after the last one ends.' },
            { front: 'Uniform mitigation verification form', back: 'The statewide inspection form documenting wind-resistant features for premium credits; valid 5 years.' },
            { front: 'Hip roof', back: 'A roof sloped on all sides — the best-performing geometry for mitigation credits.' },
            { front: 'Opening protection', back: 'Impact-rated windows/doors/shutters on all openings — a major mitigation credit.' },
            { front: 'Secondary water resistance', back: 'A sealed roof deck that resists water intrusion after the roof covering fails.' },
            { front: '15-year roof rule', back: 'Insurers may not refuse to write/renew solely due to roof age if the roof is under 15 years old.' }
          ]
        }
      ],
      terms: [
        { term: 'Hurricane coverage', def: 'Coverage for loss caused by a hurricane during the statutory window — from the first Florida hurricane watch or warning until 72 hours after the last expires.' },
        { term: 'Hurricane deductible', def: 'A separate deductible for hurricane losses; insurers must offer $500, 2%, 5%, and 10% of Coverage A options, applied per calendar year.' },
        { term: 'Calendar-year deductible', def: 'Florida’s rule that the hurricane deductible is satisfied once per calendar year with the same insurer.' },
        { term: 'All-other-perils deductible', def: 'The standard policy deductible applying to non-hurricane losses.' },
        { term: 'Wind mitigation credits', def: 'Mandatory premium discounts for construction features that reduce hurricane damage.' },
        { term: 'Uniform mitigation verification inspection', def: 'The standard Florida inspection form documenting wind-resistant features; the basis for mitigation credits.' },
        { term: 'Roof-to-wall attachment', def: 'How the roof structure ties to the walls (toe nails, clips, wraps); stronger attachments earn larger credits.' },
        { term: 'Hip roof', def: 'A roof sloping on all four sides; earns the best roof-geometry mitigation credit.' },
        { term: 'Opening protection', def: 'Impact-rated protection (shutters, impact glass) for all windows and doors.' },
        { term: 'Florida Building Code', def: 'The statewide construction code strengthened after Hurricane Andrew; post-2001 homes earn building-code credits.' },
        { term: 'Roof deductible', def: 'An optional separate deductible for roof claims (up to 2% of Coverage A or 50% of roof replacement cost) insurers may offer with required notices.' }
      ]
    },

    /* ---------------- Lesson 5.2 ---------------- */
    {
      id: 'u5l2',
      title: 'Citizens, the Cat Fund & FIGA — Florida’s Safety Nets',
      minutes: 14,
      objectives: [
        'Describe Citizens Property Insurance Corporation’s purpose, eligibility rule, and assessments',
        'Explain depopulation/takeout programs',
        'Describe the Florida Hurricane Catastrophe Fund as state reinsurance',
        'Explain what FIGA does when an insurer becomes insolvent and what it does not cover'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Three safety nets, three different jobs</h3>
<p>Florida’s property market is supported by three state-created mechanisms that students constantly confuse. Keep their jobs straight:</p>
<ul>
<li><strong>Citizens</strong> sells policies when the private market won’t — an <em>insurer of last resort</em>.</li>
<li><strong>The Florida Hurricane Catastrophe Fund (Cat Fund)</strong> sells cheap <em>reinsurance</em> to insurers after big hurricanes.</li>
<li><strong>FIGA</strong> pays the claims of <em>insolvent</em> insurers.</li>
</ul>
<h3>Citizens Property Insurance Corporation</h3>
<p><span class="kt" title="Florida’s state-created property insurer of last resort">Citizens</span> is a state-created, not-for-profit insurer formed in 2002 (merging earlier wind and residual pools). It exists to cover Floridians who cannot find coverage in the voluntary market at a lawful price — heavy on coastal and older homes the private market avoids.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — Citizens eligibility and the 20% rule',
          html: `<p>A risk is <strong>not eligible for Citizens</strong> if a comparable offer of coverage exists from an authorized private insurer at a premium <strong>within 20% of the Citizens premium</strong>. In plain terms: if private coverage costs no more than 120% of the Citizens price, the applicant belongs in the private market. At renewal, a takeout offer within the threshold likewise ends Citizens eligibility. Citizens also enforces maximum dwelling value limits and requires flood coverage on certain wind-exposed policies under recent reforms.</p>`
        },
        {
          type: 'text',
          html: `<h3>Assessments — the "Citizens tax" and depopulation</h3>
<p>Citizens charges actuarially capped rates, so a monster storm can leave it short. The shortfall is filled by <strong>assessments</strong>: first surcharges on Citizens’ own policyholders, then emergency assessments collected through the premiums of <strong>nearly every property and casualty policy in Florida</strong> (not just Citizens customers). Every Florida policyholder effectively backstops Citizens — a favorite exam point.</p>
<p>To shrink that exposure, Citizens runs <span class="kt" title="Programs that move Citizens policies back to private insurers">depopulation (takeout) programs</span>: approved private insurers assume blocks of Citizens policies. Policyholders receive takeout offers; if the offered premium is within the eligibility threshold, the policy leaves Citizens.</p>
<h3>The Florida Hurricane Catastrophe Fund</h3>
<p>The <strong>FHCF (Cat Fund)</strong> is a state trust fund — administered by the State Board of Administration — that sells <strong>mandatory-participation reinsurance</strong> to residential property insurers at below-market prices. After a major hurricane, insurers recover part of their losses from the fund, which keeps private reinsurance costs (and therefore premiums) lower and keeps carriers solvent after landfalls. If the fund runs short, it too can levy emergency assessments on most Florida policies.</p>
<h3>FIGA — when an insurer fails</h3>
<p>The <span class="kt" title="Florida Insurance Guaranty Association — pays covered claims of insolvent admitted P&C insurers">Florida Insurance Guaranty Association</span> steps in when an <strong>authorized (admitted) property/casualty insurer is declared insolvent</strong>. FIGA takes over covered claims and pays them subject to statutory caps — including a cap of <strong>$300,000 for homeowners claims</strong> (with special additional allowances for damage to structure and contents) and a <strong>$100 per-claim deductible</strong> on most claims. FIGA is funded by assessments on member insurers, which may be passed through to policyholders.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>FIGA protects policyholders of insolvent <strong>admitted</strong> insurers only. <strong>Surplus lines policies have no FIGA protection</strong> — repeat it until automatic, because it is tested from both directions (Unit 1 and here). Also keep FIGA (insolvency) separate from Citizens (availability) and the Cat Fund (reinsurance).</p>`
        },
        {
          type: 'table',
          caption: 'Florida’s three property safety nets at a glance',
          headers: ['Mechanism', 'Job', 'Who it helps', 'Funded by'],
          rows: [
            ['<strong>Citizens</strong>', 'Insurer of last resort', 'Consumers who cannot find private coverage within the 20% rule', 'Premiums + policyholder surcharges + statewide emergency assessments'],
            ['<strong>Cat Fund (FHCF)</strong>', 'State reinsurance for hurricane losses', 'Residential insurers (and indirectly their policyholders)', 'Insurer premiums + emergency assessments'],
            ['<strong>FIGA</strong>', 'Pays claims of insolvent admitted insurers', 'Policyholders and claimants of failed carriers', 'Assessments on member insurers']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the safety nets',
          questions: [
            {
              q: 'A homeowner receives a private-market quote of $4,600. The comparable Citizens premium would be $4,000. Is she eligible for Citizens?',
              choices: [
                'Yes — she may always choose Citizens',
                'No — the private offer is within 20% of the Citizens premium ($4,800 or less)',
                'Yes — private coverage exceeds the Citizens premium',
                'No — Citizens only writes condos'
              ],
              answer: 1,
              explain: 'Eligibility ends when a comparable private offer is within 20% of the Citizens premium. The threshold here is $4,000 × 1.20 = $4,800; the $4,600 offer disqualifies her.'
            },
            {
              q: 'After a catastrophic season, Citizens runs a deficit. The shortfall may ultimately be collected from:',
              choices: [
                'Only Citizens policyholders',
                'The federal government',
                'Emergency assessments on most Florida property & casualty policyholders',
                'FIGA reserves'
              ],
              answer: 2,
              explain: 'After surcharging its own policyholders, Citizens levies emergency assessments collected through the premiums of nearly all Florida P&C policies — every Florida insured backstops Citizens.'
            },
            {
              q: 'The Florida Hurricane Catastrophe Fund functions as:',
              choices: [
                'A direct insurer of coastal homes',
                'A state reinsurance fund reimbursing residential insurers after major hurricanes',
                'A guaranty fund for insolvent insurers',
                'A federal flood program'
              ],
              answer: 1,
              explain: 'The Cat Fund is reinsurance — insurers pay premiums into the state trust fund and recover a share of their hurricane losses from it, lowering reinsurance costs and supporting solvency.'
            },
            {
              q: 'An admitted Florida homeowner insurer is declared insolvent with thousands of open Hurricane claims. Those claims are handled by:',
              choices: ['Citizens', 'The Office of Insurance Regulation directly', 'FIGA, subject to statutory caps', 'The surplus lines association'],
              answer: 2,
              explain: 'FIGA assumes covered claims of insolvent admitted P&C insurers, paying within statutory caps (including the homeowners-related caps). Surplus lines claims get no FIGA protection.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 5.2 key terms',
          cards: [
            { front: 'Citizens Property Insurance Corp.', back: 'Florida’s state-created insurer of last resort for property coverage unavailable in the private market.' },
            { front: 'Citizens 20% eligibility rule', back: 'Ineligible for Citizens if a comparable private offer is within 20% of the Citizens premium.' },
            { front: 'Depopulation / takeout', back: 'Programs moving Citizens policies to approved private insurers.' },
            { front: 'Citizens assessments', back: 'Deficits are funded by policyholder surcharges, then emergency assessments on most Florida P&C policies.' },
            { front: 'FL Hurricane Catastrophe Fund', back: 'State reinsurance trust fund reimbursing residential insurers for hurricane losses.' },
            { front: 'FIGA', back: 'Pays covered claims of insolvent ADMITTED P&C insurers, within caps. Never covers surplus lines.' },
            { front: 'FIGA homeowners cap', back: 'Covered homeowners claims are paid subject to a $300,000 statutory cap (with specific additional allowances).' }
          ]
        }
      ],
      terms: [
        { term: 'Citizens Property Insurance Corporation', def: 'Florida’s state-created, not-for-profit property insurer of last resort.' },
        { term: 'Insurer of last resort', def: 'A residual-market insurer covering risks the voluntary market declines.' },
        { term: '20% eligibility rule (Citizens)', def: 'A risk is ineligible for Citizens when a comparable private offer is priced within 20% of the Citizens premium.' },
        { term: 'Depopulation (takeout)', def: 'Programs in which approved private insurers assume policies from Citizens.' },
        { term: 'Emergency assessment', def: 'A statewide charge on most Florida P&C premiums used to fund Citizens or Cat Fund deficits.' },
        { term: 'Florida Hurricane Catastrophe Fund (FHCF)', def: 'A state trust fund providing low-cost hurricane reinsurance to residential property insurers.' },
        { term: 'Florida Insurance Guaranty Association (FIGA)', def: 'The association that pays covered claims of insolvent admitted property and casualty insurers, subject to statutory caps and a small deductible.' },
        { term: 'Insolvency', def: 'A court/regulatory determination that an insurer cannot meet its obligations; triggers FIGA for admitted carriers.' },
        { term: 'Takeout offer', def: 'A private insurer’s offer to assume a Citizens policy during depopulation; an offer within the threshold ends Citizens eligibility.' }
      ]
    },

    /* ---------------- Lesson 5.3 ---------------- */
    {
      id: 'u5l3',
      title: 'Sinkholes, Claim Deadlines & the Valued Policy Law',
      minutes: 15,
      objectives: [
        'Distinguish catastrophic ground cover collapse (mandatory) from sinkhole loss coverage (optional)',
        'State the four statutory criteria for catastrophic ground cover collapse',
        'Recite Florida’s property claim timelines: 7-day acknowledgment, 30-day inspection, 60-day pay-or-deny, 1-year notice of claim',
        'Explain the valued policy law, the AOB ban, and the DFS mediation program'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Two kinds of holes in the ground</h3>
<p>Florida sits on limestone that dissolves, so the legislature created two distinct coverages — and the exam tests the difference relentlessly.</p>
<p><strong>Catastrophic ground cover collapse</strong> is <strong>mandatory</strong> in every Florida residential property policy. It pays only when <strong>all four</strong> statutory criteria are met:</p>`
        },
        {
          type: 'steps',
          title: 'The four criteria for catastrophic ground cover collapse — ALL must be present',
          items: [
            { title: 'Abrupt collapse of the ground cover', text: 'A sudden event — not gradual settling, cracking, or subsidence over time.' },
            { title: 'A depression visible to the naked eye', text: 'You can see the hole or depression without instruments or engineering tests.' },
            { title: 'Structural damage to the covered building, including the foundation', text: 'The building itself — not just the yard or driveway — must be structurally damaged.' },
            { title: 'The structure is condemned and ordered vacated', text: 'The governmental agency with authority must condemn the home and order it vacated.' }
          ]
        },
        {
          type: 'text',
          html: `<p><span class="kt" title="Optional coverage for sinkhole damage that does not meet the catastrophic criteria">Sinkhole loss coverage</span> is the <strong>optional</strong> add-on. It covers <strong>structural damage caused by sinkhole activity even when the four catastrophic criteria are not met</strong> — the far more common scenario of cracking walls and settling floors with no visible crater and no condemnation order. Insurers must make it available (they may inspect first and may apply a separate deductible of 1%, 2%, 5%, or 10%), and disputes often involve professional <strong>sinkhole testing</strong> by engineers and geologists.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Cracks spider across a Tampa home’s walls and the floor slopes, but the house is livable and no depression is visible. Engineers confirm sinkhole activity below. <strong>Catastrophic ground cover collapse pays nothing</strong> — no abrupt collapse, no visible depression, no condemnation. Only the <strong>optional sinkhole loss coverage</strong> would respond. A customer representative who never offered it has an unhappy customer and an E&O problem.</p>`
        },
        {
          type: 'text',
          html: `<h3>Florida’s property claim clock</h3>
<p>After the 2022–2023 reform laws, Florida insurers work on tight statutory deadlines for residential property claims:</p>`
        },
        {
          type: 'table',
          caption: 'Florida residential property claim timelines (post-2022 reforms)',
          headers: ['Deadline', 'Requirement'],
          rows: [
            ['<strong>7 days</strong>', 'Insurer must acknowledge receipt of the claim (was 14 days before the reforms)'],
            ['<strong>7 days</strong>', 'Begin the claim investigation after receiving proof of loss'],
            ['<strong>30 days</strong>', 'Conduct any physical inspection of the property (if one is needed)'],
            ['<strong>60 days</strong>', 'Pay or deny the claim, in whole or in part (reduced from 90 days)'],
            ['<strong>1 year</strong>', 'Insured’s deadline to give notice of a new or reopened claim (was 2–3 years historically)'],
            ['<strong>18 months</strong>', 'Insured’s deadline for a supplemental claim']
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — valued policy law, AOB, and mediation',
          html: `<p><strong>Valued policy law:</strong> when a building is a <strong>total loss from a covered peril</strong>, the insurer must pay the <strong>full face amount</strong> of the policy — no arguing after the fact that the building was worth less than its insured value. (Partial losses are adjusted normally, and the rule does not apply to perils like flood that the policy never covered.)</p>
<p><strong>Assignment of benefits (AOB):</strong> for residential property policies issued in 2023 and later, policyholders <strong>may not assign their policy benefits to contractors</strong> — a reform aimed at the AOB litigation machine that drove premiums up. The insured can still hire anyone; they just cannot sign away the claim itself.</p>
<p><strong>DFS mediation:</strong> the Department of Financial Services runs a <strong>free, non-binding mediation program</strong> for disputed residential property claims — a consumer-friendly alternative before appraisal or court.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — sinkholes & claims law',
          questions: [
            {
              q: 'Which scenario triggers the MANDATORY catastrophic ground cover collapse coverage?',
              choices: [
                'Gradual foundation settling confirmed by engineers',
                'An abrupt collapse leaving a visible depression, structural damage, and a condemnation order to vacate',
                'Cosmetic stucco cracking after a dry summer',
                'A sinkhole opening in the street in front of the home'
              ],
              answer: 1,
              explain: 'All four statutory criteria must exist: abrupt collapse, depression visible to the naked eye, structural damage to the building including the foundation, and condemnation with an order to vacate.'
            },
            {
              q: 'Under post-reform Florida law, an insurer must pay or deny a residential property claim within:',
              choices: ['14 days', '30 days', '60 days', '90 days'],
              answer: 2,
              explain: 'The 2022 reforms cut the pay-or-deny deadline from 90 to 60 days. Acknowledgment is due in 7 days and any physical inspection within 30.'
            },
            {
              q: 'A home insured for $350,000 burns to the ground — a total loss by fire. The insurer believes the home was really worth $300,000. Under Florida’s valued policy law it must pay:',
              choices: ['$300,000', '$350,000', 'The replacement cost as calculated after the loss', 'Actual cash value only'],
              answer: 1,
              explain: 'For a total loss caused by a covered peril, the valued policy law requires payment of the policy’s face amount — the insurer set and charged for that value when it issued the policy.'
            },
            {
              q: 'A homeowner discovers hurricane damage 14 months after the storm and files a new claim. Under current Florida law the claim is:',
              choices: [
                'Timely — insureds have 3 years',
                'Timely — insureds have 2 years',
                'Untimely — notice of a new claim is due within 1 year',
                'Untimely — notice was due within 60 days'
              ],
              answer: 2,
              explain: 'The reforms shortened the notice window to 1 year for new or reopened claims (18 months for supplemental claims). Late notice bars the claim.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 5.3 key terms',
          cards: [
            { front: 'Catastrophic ground cover collapse', back: 'MANDATORY coverage requiring all 4: abrupt collapse, visible depression, structural damage incl. foundation, condemnation/order to vacate.' },
            { front: 'Sinkhole loss coverage', back: 'OPTIONAL coverage for structural damage from sinkhole activity without the catastrophic criteria; separate 1/2/5/10% deductible allowed.' },
            { front: 'Valued policy law', back: 'Total loss by a covered peril = insurer pays the full face amount of the policy.' },
            { front: '7 / 30 / 60', back: 'Acknowledge claim in 7 days, inspect within 30, pay or deny within 60.' },
            { front: '1 year / 18 months', back: 'Notice of new or reopened claim: 1 year. Supplemental claim: 18 months.' },
            { front: 'Assignment of benefits ban', back: 'Residential policies issued 2023+ cannot have benefits assigned to contractors.' },
            { front: 'DFS mediation', back: 'Free, non-binding state-run mediation for disputed residential property claims.' }
          ]
        }
      ],
      terms: [
        { term: 'Catastrophic ground cover collapse', def: 'Mandatory Florida coverage paying when an abrupt ground collapse leaves a visible depression, structurally damages the building, and the home is condemned and ordered vacated.' },
        { term: 'Sinkhole loss coverage', def: 'Optional Florida coverage for structural damage caused by sinkhole activity that does not meet the catastrophic ground cover collapse criteria.' },
        { term: 'Sinkhole activity', def: 'Settlement or systematic weakening of the earth supporting a structure caused by movement of limestone or similar rock formations.' },
        { term: 'Valued policy law', def: 'Florida law requiring payment of the policy’s full face amount when a building is a total loss from a covered peril.' },
        { term: 'Notice of claim deadline', def: 'One year for new or reopened residential property claims; eighteen months for supplemental claims.' },
        { term: 'Pay-or-deny deadline', def: 'Sixty days for Florida residential property claims after the 2022 reforms.' },
        { term: 'Assignment of benefits (AOB)', def: 'Transferring policy benefits to a third party such as a contractor; banned for Florida residential policies issued in 2023 and later.' },
        { term: 'DFS mediation program', def: 'A free, non-binding dispute resolution program for residential property claims run by the Department of Financial Services.' },
        { term: 'Supplemental claim', def: 'A claim for additional amounts on a previously reported loss; due within 18 months in Florida.' }
      ]
    },

    /* ---------------- Lesson 5.4 ---------------- */
    {
      id: 'u5l4',
      title: 'Flood Insurance & the NFIP',
      minutes: 14,
      objectives: [
        'Define flood and explain why standard HO/DP policies exclude it',
        'State the NFIP regular program limits ($250,000 / $100,000) and the 30-day waiting period',
        'Describe flood zones, elevation, and how flood premiums are set under Risk Rating 2.0',
        'Explain Florida’s flood disclosure requirements and the private flood market'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The flood gap</h3>
<p>Remember the chain from Unit 1: flood is a <strong>catastrophic, concentrated peril</strong>, so every standard homeowners and dwelling policy excludes it. Yet a foot of water in a living room routinely causes six-figure damage — and <strong>most flood claims come from properties outside high-risk zones</strong>. Congress filled the gap in 1968 with the <span class="kt" title="National Flood Insurance Program — the federal flood insurance program administered by FEMA">National Flood Insurance Program (NFIP)</span>, run by FEMA.</p>
<p><strong>Flood, by definition,</strong> is a general and temporary condition of partial or complete inundation of two or more acres or two or more properties from overflow of inland or tidal waters, rapid runoff of surface waters, mudflow, or related erosion. Water must generally touch the ground outside before entering — wind-driven rain through a torn roof is a windstorm loss; storm surge across the yard is flood.</p>
<h3>How the NFIP works</h3>
<p>Communities join the NFIP by adopting floodplain management rules; only then can their residents buy NFIP policies. Coverage is sold two ways: directly through the NFIP and through private carriers in the <strong>Write Your Own (WYO)</strong> program — private insurers issue and service NFIP policies in their own names while the federal government bears the risk.</p>`
        },
        {
          type: 'table',
          caption: 'NFIP coverage limits',
          headers: ['Program phase', 'Building (1–4 family residential)', 'Contents'],
          rows: [
            ['<strong>Emergency program</strong> (community newly joining)', '$35,000', '$10,000'],
            ['<strong>Regular program</strong>', '<strong>$250,000</strong>', '<strong>$100,000</strong>']
          ]
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Memorize <strong>$250,000 building / $100,000 contents</strong> for the regular program — the single most-tested flood fact. Also remember what NFIP <em>doesn’t</em> do well: basements (very limited), additional living expense (<strong>none</strong>), and contents valued at ACV. Homes worth more than $250,000 need <strong>excess flood</strong> or a private policy.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the 30-day wait and flood disclosures',
          html: `<p>A new NFIP policy generally has a <strong>30-day waiting period</strong> before coverage takes effect — you cannot buy flood insurance while watching the hurricane cone. The key exception: <strong>coverage purchased in connection with a loan closing</strong> (making, increasing, extending, or renewing a mortgage) is effective immediately; a map-revision purchase carries a 1-day wait. Florida also requires homeowners policies to display a bold-type notice that <strong>flood is not covered</strong>, and recent law requires Citizens policyholders with wind coverage to maintain flood insurance on a phased schedule. Florida sellers of real property must now disclose flood risk and prior flood claims to buyers.</p>`
        },
        {
          type: 'text',
          html: `<h3>Zones, elevation, and Risk Rating 2.0</h3>
<p>FEMA flood maps assign <strong>zones</strong>: <strong>V zones</strong> (coastal, wave action — highest risk), <strong>A zones</strong> (high-risk inundation areas; the "Special Flood Hazard Area" where federally backed mortgages <strong>require</strong> flood insurance), and <strong>B, C, and X zones</strong> (moderate to low risk — where flood coverage is optional but often the best bargain in insurance). An <strong>elevation certificate</strong> documents how a building’s lowest floor compares to the base flood elevation.</p>
<p>Under <strong>Risk Rating 2.0</strong>, NFIP premiums are priced per property using distance to water, expected flood frequency and depth, rebuilding cost, and structure characteristics — not just the zone letter. The practical effect: two neighbors in the same zone can pay very different premiums.</p>
<p>Florida also has a fast-growing <strong>private flood market</strong> (admitted and surplus lines). Private policies can offer higher limits, replacement-cost contents, additional living expense, and shorter waits — but a surplus lines flood policy carries no FIGA protection, and lenders must accept the private policy for it to satisfy a mortgage requirement.</p>`
        },
        {
          type: 'chart',
          chartType: 'doughnut',
          title: 'Where NFIP flood claims come from (illustrative)',
          labels: ['High-risk zones (A & V)', 'Moderate/low-risk zones (B, C, X)'],
          datasets: [{ label: 'Share of claims', data: [60, 40] }],
          suffix: '%',
          note: 'Illustrative split based on FEMA’s long-running statistic that roughly 40% (often quoted as 1 in 4 to 1 in 3) of flood claims arise OUTSIDE high-risk zones — the core argument for offering flood coverage to every Florida homeowner, not just those near the coast.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — flood & the NFIP',
          questions: [
            {
              q: 'The maximum building coverage for a single-family home under the NFIP regular program is:',
              choices: ['$100,000', '$250,000', '$350,000', '$500,000'],
              answer: 1,
              explain: '$250,000 building / $100,000 contents are the regular-program residential limits. Higher values require excess or private flood coverage.'
            },
            {
              q: 'A client closes on a home purchase Friday and buys an NFIP policy the same day as required by her lender. Coverage begins:',
              choices: [
                'After the standard 30-day wait',
                'Immediately — the loan-closing exception waives the waiting period',
                'After a 14-day wait',
                'Only on the next policy anniversary'
              ],
              answer: 1,
              explain: 'The 30-day waiting period is waived when flood coverage is purchased in connection with making, increasing, extending, or renewing a loan — coverage is effective at closing.'
            },
            {
              q: 'Storm surge from a hurricane pushes three feet of seawater through a neighborhood, damaging dozens of homes. Under standard definitions this loss is:',
              choices: [
                'Covered by the HO-3 as windstorm',
                'Flood — excluded by the HO-3 and covered only by flood insurance',
                'Covered under the hurricane deductible provision',
                'Covered by FIGA'
              ],
              answer: 1,
              explain: 'Surge is rising water from tidal overflow — the textbook definition of flood. The HO-3 covers wind damage from the same storm but excludes the water. Many Floridians learn this distinction the hard way.'
            },
            {
              q: 'In the Write Your Own program:',
              choices: [
                'Private insurers issue and service NFIP policies while the federal government bears the flood risk',
                'Homeowners write their own coverage terms',
                'Surplus lines carriers assume NFIP risk',
                'FEMA adjusts all claims directly'
              ],
              answer: 0,
              explain: 'WYO carriers sell and service NFIP policies under their own names for a fee, but the NFIP retains the underwriting risk. Terms and limits are identical to direct NFIP policies.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 5.4 key terms',
          cards: [
            { front: 'NFIP regular program limits', back: '$250,000 building / $100,000 contents for residential property.' },
            { front: '30-day waiting period', back: 'Standard NFIP wait before coverage starts. Waived for purchases connected to a loan closing.' },
            { front: 'Flood (definition)', back: 'General, temporary inundation of 2+ acres or 2+ properties from overflow of waters, runoff, mudflow, or related erosion.' },
            { front: 'Write Your Own (WYO)', back: 'Private insurers issue/service NFIP policies; the federal government keeps the risk.' },
            { front: 'Special Flood Hazard Area', back: 'A/V zones where federally backed mortgages REQUIRE flood insurance.' },
            { front: 'V zone vs A zone', back: 'V = coastal with wave action (highest risk); A = high-risk inundation without wave velocity.' },
            { front: 'Elevation certificate', back: 'Documents the building’s lowest floor versus base flood elevation.' },
            { front: 'Risk Rating 2.0', back: 'FEMA’s property-specific pricing: distance to water, flood depth/frequency, rebuild cost.' }
          ]
        }
      ],
      terms: [
        { term: 'Flood', def: 'A general and temporary inundation of two or more acres or two or more properties by overflow of inland/tidal waters, surface runoff, or mudflow.' },
        { term: 'National Flood Insurance Program (NFIP)', def: 'The FEMA-administered federal flood insurance program available in participating communities.' },
        { term: 'Emergency program', def: 'The initial NFIP phase for newly joining communities, with reduced limits ($35,000/$10,000 residential).' },
        { term: 'Regular program', def: 'The full NFIP phase with residential limits of $250,000 building and $100,000 contents.' },
        { term: 'Write Your Own (WYO) program', def: 'An arrangement in which private insurers issue and service NFIP policies while the federal government bears the risk.' },
        { term: '30-day waiting period', def: 'The standard delay before a new NFIP policy takes effect; waived for loan-closing purchases.' },
        { term: 'Special Flood Hazard Area (SFHA)', def: 'High-risk A and V zones where flood insurance is mandatory for federally backed mortgages.' },
        { term: 'Elevation certificate', def: 'A document comparing a structure’s lowest floor elevation to the base flood elevation.' },
        { term: 'Risk Rating 2.0', def: 'FEMA’s pricing methodology rating each property individually on flood frequency, depth, distance to water, and rebuild cost.' },
        { term: 'Excess flood insurance', def: 'Private coverage stacked above NFIP limits for higher-value homes.' },
        { term: 'Private flood insurance', def: 'Non-NFIP flood coverage from admitted or surplus lines insurers, often with broader terms.' }
      ]
    }
  ],

  /* ---------------- Unit 5 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'A Florida insurer must offer hurricane deductible options of:',
        choices: [
          '$500, 1%, 2%, and 5% of Coverage A',
          '$500, 2%, 5%, and 10% of Coverage A',
          '$1,000, 5%, 10%, and 15% of Coverage A',
          '2%, 5%, 10%, and 25% of the loss amount'
        ],
        answer: 1,
        explain: 'The statutory menu is $500, 2%, 5%, and 10% of the dwelling (Coverage A) limit — percentages of the limit, never the loss.'
      },
      {
        q: 'A home with Coverage A of $500,000 and a 2% hurricane deductible suffers $30,000 in hurricane damage. The insured’s out-of-pocket deductible is:',
        choices: ['$600', '$5,000', '$10,000', '$30,000'],
        answer: 2,
        explain: '2% of the $500,000 Coverage A limit = $10,000. The insurer pays $20,000.'
      },
      {
        q: 'The hurricane deductible in Florida applies:',
        choices: [
          'To every named storm separately',
          'Once per calendar year with the same insurer',
          'Once per policy lifetime',
          'Only to homes east of I-95'
        ],
        answer: 1,
        explain: 'It is a calendar-year (single-season) deductible: satisfied once per year per insurer regardless of how many hurricanes cause loss.'
      },
      {
        q: 'Which feature does NOT appear on the uniform mitigation verification inspection form?',
        choices: ['Roof-to-wall attachment', 'Opening protection', 'Roof geometry', 'Interior paint quality'],
        answer: 3,
        explain: 'Mitigation credits flow from structural wind-resistance features: roof covering, attachment, geometry, secondary water resistance, and opening protection.'
      },
      {
        q: 'A homeowner is offered comparable private coverage for $5,500 when Citizens would charge $5,000. The homeowner:',
        choices: [
          'Is eligible for Citizens because the private quote is higher',
          'Is ineligible for Citizens because the private offer is within 20% of the Citizens premium',
          'Must take the private coverage at a discount',
          'May choose either with no restriction'
        ],
        answer: 1,
        explain: '20% above $5,000 is $6,000. A $5,500 private offer falls within the threshold, so the risk is ineligible for Citizens.'
      },
      {
        q: 'Citizens Property Insurance Corporation deficits after a catastrophic hurricane season are ultimately backed by:',
        choices: [
          'The Florida general revenue fund only',
          'FEMA grants',
          'Surcharges on Citizens policyholders and emergency assessments on most Florida P&C policyholders',
          'The National Flood Insurance Program'
        ],
        answer: 2,
        explain: 'Citizens first surcharges its own insureds, then levies emergency assessments collected through nearly all Florida property and casualty policies.'
      },
      {
        q: 'The Florida Hurricane Catastrophe Fund provides:',
        choices: [
          'Direct homeowners coverage for coastal properties',
          'Low-cost reinsurance that reimburses residential insurers for hurricane losses',
          'Claims payment for insolvent insurers',
          'Flood coverage above NFIP limits'
        ],
        answer: 1,
        explain: 'The Cat Fund is mandatory state reinsurance for residential property insurers — it stabilizes the market by replacing some expensive private reinsurance.'
      },
      {
        q: 'FIGA protects Florida consumers when:',
        choices: [
          'Any insurer raises rates excessively',
          'An authorized (admitted) property/casualty insurer becomes insolvent',
          'A surplus lines insurer becomes insolvent',
          'Citizens runs a deficit'
        ],
        answer: 1,
        explain: 'FIGA pays covered claims of insolvent ADMITTED P&C insurers within statutory caps. Surplus lines policies have no guaranty protection — a recurring exam trap.'
      },
      {
        q: 'Which is one of the four required elements of catastrophic ground cover collapse?',
        choices: [
          'Gradual settling over at least five years',
          'The structure is condemned and ordered vacated',
          'Damage limited to driveways and landscaping',
          'A geologist’s report, regardless of visible damage'
        ],
        answer: 1,
        explain: 'The four: abrupt collapse, depression visible to the naked eye, structural damage to the building including the foundation, and condemnation with an order to vacate. All must be present.'
      },
      {
        q: 'A home suffers wall cracking from confirmed sinkhole activity, but remains livable with no visible depression. Coverage exists only if the insured purchased:',
        choices: [
          'Catastrophic ground cover collapse coverage',
          'The hurricane endorsement',
          'Optional sinkhole loss coverage',
          'Ordinance or law coverage'
        ],
        answer: 2,
        explain: 'Without all four catastrophic criteria, only the optional sinkhole loss coverage responds to sinkhole-caused structural damage.'
      },
      {
        q: 'Under Florida’s post-2022 claim rules, an insurer receiving a residential property claim must acknowledge it within ____ and pay or deny it within ____.',
        choices: ['14 days; 90 days', '7 days; 60 days', '10 days; 30 days', '7 days; 90 days'],
        answer: 1,
        explain: 'The reforms set 7 days to acknowledge, 30 days for any physical inspection, and 60 days to pay or deny.'
      },
      {
        q: 'A $280,000 (face amount) insured home is totally destroyed by a covered fire. The insurer’s investigation suggests the home was only worth $240,000. Florida’s valued policy law requires payment of:',
        choices: ['$240,000', '$280,000', 'Actual cash value as determined by appraisal', 'Replacement cost less depreciation'],
        answer: 1,
        explain: 'Total loss + covered peril = face amount. The insurer accepted and charged premium on $280,000 of value.'
      },
      {
        q: 'For Florida residential policies issued after the 2023 reforms, assignment of benefits to a repair contractor is:',
        choices: ['Permitted with notarized consent', 'Prohibited', 'Permitted up to $10,000', 'Required for emergency repairs'],
        answer: 1,
        explain: 'The reform legislation banned AOB agreements on policies issued on or after January 1, 2023, ending the assignment-driven litigation model. Insureds may still hire any contractor.'
      },
      {
        q: 'The NFIP regular program will pay AT MOST how much for a single-family dwelling building loss?',
        choices: ['$100,000', '$185,000', '$250,000', '$500,000'],
        answer: 2,
        explain: '$250,000 building / $100,000 contents. Values above that need excess or private flood coverage.'
      },
      {
        q: 'Which NFIP purchase takes effect WITHOUT the 30-day waiting period?',
        choices: [
          'A policy bought as a hurricane approaches the coast',
          'A policy purchased in connection with a mortgage closing',
          'Any policy paid in full at purchase',
          'A policy for a home in an X zone'
        ],
        answer: 1,
        explain: 'The loan-transaction exception makes coverage effective immediately at closing. The 30-day wait exists precisely to stop storm-watching purchases.'
      }
    ]
  }
});
