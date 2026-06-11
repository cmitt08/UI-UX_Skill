/* Unit 9 — Regulation, Ethics & Your 4-40 License */
window.PL.units.push({
  id: 'u9',
  number: 9,
  title: 'Regulation, Ethics & Your 4-40 License',
  icon: 'scale',
  description: 'Who regulates what in Florida, how you get and keep the 4-40 license, the unfair trade practices that end careers, claim-conduct rules, and the everyday ethics of working the front desk of an agency.',
  lessons: [

    /* ---------------- Lesson 9.1 ---------------- */
    {
      id: 'u9l1',
      title: 'Who Regulates What in Florida',
      minutes: 13,
      objectives: [
        'Distinguish the Department of Financial Services (DFS) from the Office of Insurance Regulation (OIR)',
        'Explain the certificate of authority and what "transacting insurance" means',
        'Describe the roles of the CFO, the NAIC, and the McCarran-Ferguson Act',
        'Identify which regulator handles agents, consumers, fraud, insurers, rates, and forms'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Two regulators, one bright line</h3>
<p>Florida splits insurance regulation between two bodies, and nearly every regulation question on the exam is really asking: <strong>which one?</strong></p>
<p>The <span class="kt" title="The Florida agency, headed by the elected Chief Financial Officer, that regulates insurance representatives and serves consumers">Department of Financial Services (DFS)</span> is headed by Florida’s elected <strong>Chief Financial Officer (CFO)</strong>. DFS regulates the <strong>people</strong> of insurance:</p>
<ul>
<li><strong>Licensing and discipline</strong> of agents, customer representatives, and adjusters</li>
<li><strong>Division of Consumer Services</strong> — the consumer helpline, complaint handling, and the mediation programs</li>
<li><strong>Insurance fraud investigation</strong> (the criminal investigations arm)</li>
<li>Administering appointments, continuing education, and license records (MyProfile)</li>
</ul>
<p>The <span class="kt" title="The Florida office that regulates insurance companies — solvency, rates, and forms">Office of Insurance Regulation (OIR)</span> regulates the <strong>companies</strong>:</p>
<ul>
<li>Issues the <strong>certificate of authority</strong> that makes an insurer "authorized"</li>
<li>Reviews and approves <strong>rates and policy forms</strong></li>
<li>Monitors <strong>solvency</strong> and conducts <strong>market conduct examinations</strong></li>
<li>Oversees acquisitions, withdrawals, and receiverships referrals</li>
</ul>`
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hook: <strong>DFS = Desks and Front-line Staff</strong> (people: licensees, consumers, fraud). <strong>OIR = Outfits In the Rate business</strong> (companies: certificates of authority, rates, forms, solvency). If the question says "agent" or "customer representative," the answer is DFS. If it says "insurer," "rates," or "forms," it is OIR.</p>`
        },
        {
          type: 'text',
          html: `<h3>Transacting insurance</h3>
<p>Florida law defines <strong>transacting insurance</strong> broadly: <strong>solicitation, negotiation, effectuation (selling), and transaction of matters after the sale</strong> (service). Doing any of these for an unauthorized insurer — or without the proper license — is a violation. This definition is why a 4-40, who solicits and services from the agency office, must be licensed at all.</p>
<h3>State regulation and the national picture</h3>
<p>The <strong>McCarran-Ferguson Act (1945)</strong> left insurance regulation to the <strong>states</strong> so long as states actually regulate. That is why Florida — not Washington — licenses you, approves your carriers’ forms, and disciplines violations. The <span class="kt" title="National Association of Insurance Commissioners — the regulators’ coordination body">NAIC</span> coordinates among state regulators by drafting <strong>model laws and regulations</strong>, accrediting state solvency oversight, and pooling data — but the NAIC itself has <strong>no legal authority</strong>; its models only matter once a state enacts them.</p>
<p>One more body completes the picture from Unit 5: when an admitted insurer fails, the court appoints the DFS as <strong>receiver</strong>, and <strong>FIGA</strong> picks up covered claims. Solvency problems flow OIR → receivership (DFS) → FIGA.</p>`
        },
        {
          type: 'table',
          caption: 'Which regulator? The exam’s favorite sorting drill',
          headers: ['Task', 'DFS', 'OIR'],
          rows: [
            ['License a customer representative', '<strong>✓</strong>', ''],
            ['Issue an insurer’s certificate of authority', '', '<strong>✓</strong>'],
            ['Investigate a staged-accident fraud ring', '<strong>✓</strong>', ''],
            ['Approve a homeowners rate filing', '', '<strong>✓</strong>'],
            ['Handle a consumer complaint hotline call', '<strong>✓</strong>', ''],
            ['Conduct a market conduct exam of an insurer', '', '<strong>✓</strong>'],
            ['Suspend an agent’s license', '<strong>✓</strong>', ''],
            ['Monitor insurer solvency', '', '<strong>✓</strong>']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — regulators',
          questions: [
            {
              q: 'A customer representative is accused of pocketing premium payments. The investigation and license discipline will come from:',
              choices: ['The Office of Insurance Regulation', 'The Department of Financial Services', 'The NAIC', 'FIGA'],
              answer: 1,
              explain: 'DFS — headed by the CFO — licenses and disciplines insurance representatives and houses the fraud investigators. OIR regulates companies, not licensees.'
            },
            {
              q: 'Before an insurer may lawfully sell policies in Florida it must obtain:',
              choices: [
                'An NAIC accreditation',
                'A certificate of authority from the Office of Insurance Regulation',
                'A FIGA membership card from DFS',
                'A federal insurance charter'
              ],
              answer: 1,
              explain: 'The certificate of authority — issued by OIR — is the company-side license. Operating without it makes the insurer unauthorized.'
            },
            {
              q: 'The NAIC’s model laws become binding in Florida:',
              choices: [
                'Immediately upon NAIC adoption',
                'Only when the Florida legislature enacts them',
                'When the CFO signs them',
                'They are always binding nationwide'
              ],
              answer: 1,
              explain: 'The NAIC has no legal authority. Its models standardize regulation, but each state must enact them for them to have force.'
            },
            {
              q: 'Which activity is NOT part of the statutory definition of "transacting insurance"?',
              choices: ['Soliciting an application', 'Negotiating coverage', 'Servicing a policy after the sale', 'Repairing a policyholder’s roof'],
              answer: 3,
              explain: 'Transaction = solicitation, negotiation, effectuation, and post-sale service of insurance matters. Roof repair is construction, not insurance transaction.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 9.1 key terms',
          cards: [
            { front: 'DFS', back: 'Department of Financial Services — headed by the elected CFO. Regulates PEOPLE: licenses/disciplines agents & CRs, consumer services, fraud.' },
            { front: 'OIR', back: 'Office of Insurance Regulation — regulates COMPANIES: certificates of authority, rates, forms, solvency, market conduct.' },
            { front: 'Chief Financial Officer', back: 'Elected Florida Cabinet officer who heads the DFS.' },
            { front: 'Certificate of authority', back: 'OIR-issued license allowing an insurer to transact insurance in Florida.' },
            { front: 'Transacting insurance', back: 'Solicitation, negotiation, effectuation, or post-sale servicing of insurance.' },
            { front: 'McCarran-Ferguson Act', back: '1945 federal law leaving insurance regulation to the states.' },
            { front: 'NAIC', back: 'Coordination body of state regulators; writes model laws but has NO legal authority.' },
            { front: 'Market conduct examination', back: 'OIR review of an insurer’s treatment of policyholders — sales, underwriting, claims.' }
          ]
        }
      ],
      terms: [
        { term: 'Department of Financial Services (DFS)', def: 'The Florida agency, headed by the elected CFO, that licenses and disciplines insurance representatives, serves consumers, and investigates insurance fraud.' },
        { term: 'Office of Insurance Regulation (OIR)', def: 'The Florida office regulating insurers: certificates of authority, rate and form approval, solvency, and market conduct.' },
        { term: 'Chief Financial Officer (CFO)', def: 'The elected Florida Cabinet member who heads the Department of Financial Services.' },
        { term: 'Certificate of authority', def: 'The license an insurer must hold to lawfully transact insurance in Florida.' },
        { term: 'Transacting insurance', def: 'Soliciting, negotiating, selling, or servicing insurance — each act requires proper licensure.' },
        { term: 'McCarran-Ferguson Act', def: 'The 1945 federal law confirming state—not federal—regulation of insurance.' },
        { term: 'NAIC', def: 'The National Association of Insurance Commissioners; drafts model laws and coordinates state regulators but has no enforcement power.' },
        { term: 'Market conduct examination', def: 'A regulatory examination of how an insurer treats consumers in sales, underwriting, and claims.' },
        { term: 'Receivership', def: 'The court-supervised process, with DFS as receiver, for rehabilitating or liquidating a failed insurer.' },
        { term: 'Division of Consumer Services', def: 'The DFS division operating the consumer helpline and complaint process.' }
      ]
    },

    /* ---------------- Lesson 9.2 ---------------- */
    {
      id: 'u9l2',
      title: 'Getting & Keeping the 4-40 License',
      minutes: 15,
      objectives: [
        'List the qualifications for the 4-40 customer representative license',
        'Explain appointments: who appoints a 4-40, the 24-month renewal cycle, and the 48-month expiration rule',
        'State the 60-day rule for name and address changes',
        'Describe the 4-40’s scope of authority and the paths to upgrade to a 20-44 or 2-20'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Qualifying for the license</h3>
<p>To receive a Florida 4-40 customer representative license, an applicant must:</p>
<ul>
<li>Be a <strong>natural person at least 18 years old</strong></li>
<li>Be a <strong>Florida resident</strong> (or qualify under non-resident reciprocity rules)</li>
<li>Submit the application to DFS with fees and <strong>fingerprints for a background check</strong></li>
<li>Demonstrate knowledge by completing an <strong>approved qualifying course</strong> (or holding a qualifying designation or degree) — the route most students take, and the reason this course exists</li>
<li>Not have a disqualifying criminal history; certain felonies bar licensure permanently or for waiting periods</li>
</ul>
<p>Applications are filed through the DFS online portal (<strong>MyProfile</strong>), which also tracks your license, appointments, and addresses for life.</p>
<h3>License vs. appointment — two different things</h3>
<p>The <strong>license</strong> is the state’s permission to hold yourself out in the business. The <span class="kt" title="The authority to transact insurance on behalf of an appointing entity, recorded with DFS">appointment</span> is the active authority to work for someone. A license without an appointment is a car without fuel: legal to own, going nowhere.</p>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — the 4-40 appointment rules',
          html: `<p>A customer representative is appointed by the <strong>agent or agency that employs them — never by an insurance company</strong>. (Agents are appointed by insurers; CRs are appointed by agents/agencies. The exam loves this contrast.)</p>
<p><strong>Appointments last 24 months</strong> and renew in the licensee’s birth month cycle. The appointing entity pays the appointment fees and must notify DFS when the relationship ends.</p>
<p>If a license goes <strong>48 months without any appointment, it expires</strong> and the former licensee must requalify from scratch. Keep something active.</p>`
        },
        {
          type: 'text',
          html: `<h3>Housekeeping rules that show up on exams (and in fines)</h3>
<ul>
<li><strong>Name or address changes</strong> (including email) must be reported to DFS <strong>within 60 days</strong>. Fines apply for late notice.</li>
<li><strong>Continuing education:</strong> 4-40 customer representatives are <strong>generally exempt from CE</strong> — one of the few licenses that is. (Agents are not: a 2-20 or 20-44 completes hours every 2 years.) Stay alert for law changes, but the baseline rule is exemption.</li>
<li><strong>One employer at a time:</strong> the CR works under the supervising agent(s) of the appointing agency and may only assist with lines that agent is licensed and appointed for.</li>
<li><strong>Office-based authority:</strong> the 4-40’s work happens in and from the agency office, primarily salaried — review Lesson 1.4 for the full may/may-not list, because Unit 9 exam questions assume it.</li>
</ul>
<h3>Moving up</h3>
<p>Many people use the 4-40 as the first rung. Time working as a customer representative earns <strong>experience credit toward the 20-44 personal lines agent and 2-20 general lines agent licenses</strong> — commonly substituting for part of the classroom requirement (for example, a year of full-time 4-40 work in an agency plus a shorter conversion course in place of the full 200-hour 2-20 course). The progression 4-40 → 20-44 → 2-20 is the classic Florida agency career ladder.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'The Florida agency career ladder — what each license may transact',
          labels: ['4-40 Customer Rep', '20-44 Personal Lines Agent', '2-20 General Lines Agent'],
          datasets: [{ label: 'Scope of authority (illustrative scale)', data: [35, 65, 100] }],
          suffix: '',
          note: 'Illustrative comparison: the 4-40 assists a supervising agent with personal lines from the office; the 20-44 transacts personal lines independently; the 2-20 adds commercial lines and full agency ownership authority.'
        },
        {
          type: 'quiz',
          title: 'Checkpoint — license mechanics',
          questions: [
            {
              q: 'Who appoints a 4-40 customer representative?',
              choices: [
                'Any authorized insurer',
                'The employing agent or agency',
                'The Office of Insurance Regulation',
                'The supervising adjuster'
              ],
              answer: 1,
              explain: 'CRs are appointed by the agent or agency employing them — never directly by an insurer. Agents, by contrast, are appointed by insurers.'
            },
            {
              q: 'A licensed customer representative leaves the business. With no appointment of any kind, her license will expire after:',
              choices: ['12 months', '24 months', '48 months', 'It never expires'],
              answer: 2,
              explain: 'A license that remains without any appointment for 48 months expires, and requalification is required. Appointments themselves renew every 24 months.'
            },
            {
              q: 'A customer representative moves to a new apartment. Florida law requires notifying DFS of the new address within:',
              choices: ['10 days', '30 days', '60 days', 'Only at renewal'],
              answer: 2,
              explain: 'Name, address, and email changes must reach DFS within 60 days — an easy fine to avoid by updating MyProfile promptly.'
            },
            {
              q: 'Which statement about continuing education is TRUE?',
              choices: [
                'A 4-40 must complete 24 CE hours every 2 years',
                'A 4-40 is generally exempt from continuing education',
                'CE applies only to adjusters',
                'CE is satisfied automatically by employment'
              ],
              answer: 1,
              explain: 'Customer representatives are generally CE-exempt in Florida. Agents (2-20, 20-44) carry ongoing CE obligations.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 9.2 key terms',
          cards: [
            { front: '4-40 qualifications', back: '18+, Florida resident, fingerprints/background check, approved course or qualifying designation, DFS application.' },
            { front: 'Who appoints a CR?', back: 'The employing AGENT or AGENCY — never an insurer.' },
            { front: 'Appointment cycle', back: 'Appointments last 24 months and renew on the licensee’s birth-month schedule.' },
            { front: '48-month rule', back: 'A license with no appointment for 48 continuous months expires; requalification required.' },
            { front: '60-day rule', back: 'Report name/address/email changes to DFS within 60 days.' },
            { front: 'CR continuing education', back: 'Generally EXEMPT — unlike agents.' },
            { front: 'MyProfile', back: 'The DFS online portal for applications, appointments, and licensee records.' },
            { front: 'Career ladder', back: '4-40 experience earns credit toward the 20-44 and 2-20 licenses.' }
          ]
        }
      ],
      terms: [
        { term: 'Appointment', def: 'The recorded authority to transact insurance for an appointing entity; for a 4-40, granted by the employing agent or agency.' },
        { term: '24-month appointment cycle', def: 'Florida appointments continue for 24 months and renew on the licensee’s birth-month schedule.' },
        { term: '48-month expiration rule', def: 'A license that remains unappointed for 48 months expires, requiring requalification.' },
        { term: '60-day notification rule', def: 'Licensees must notify DFS of name, address, or email changes within 60 days.' },
        { term: 'MyProfile', def: 'The DFS online account portal where licensees manage applications, appointments, and contact information.' },
        { term: 'Qualifying course', def: 'The DFS-approved pre-licensing education that satisfies the knowledge requirement for the 4-40.' },
        { term: 'Continuing education exemption (4-40)', def: 'Customer representatives are generally exempt from Florida CE requirements.' },
        { term: 'Experience credit', def: 'Time worked as a customer representative that substitutes for part of the education requirement for the 20-44 or 2-20 license.' },
        { term: 'Supervising agent', def: 'The licensed general lines or personal lines agent responsible for the customer representative’s insurance transactions.' }
      ]
    },

    /* ---------------- Lesson 9.3 ---------------- */
    {
      id: 'u9l3',
      title: 'Unfair Trade Practices: Twisting, Churning, Sliding & Rebating',
      minutes: 16,
      objectives: [
        'Define and distinguish twisting, churning, and sliding',
        'Identify misrepresentation, false advertising, defamation, and coercion violations',
        'Explain Florida’s rebating rule and the strict conditions that make a rebate legal',
        'Recognize the penalties for unfair trade practices'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The conduct rules that end careers</h3>
<p>Florida’s Unfair Insurance Trade Practices Act lists the sales behaviors that draw fines, suspensions, and revocations. Three replacement-related sins form the exam’s favorite trio — learn them as a set:</p>`
        },
        {
          type: 'table',
          caption: 'The big three: twisting vs. churning vs. sliding',
          headers: ['Practice', 'Definition', 'The telltale detail'],
          rows: [
            ['<strong>Twisting</strong>', 'Using misrepresentation or incomplete comparison to induce a policyholder to <strong>replace coverage with another insurer’s</strong> policy', 'Replacement based on lies — moving the client <em>between companies</em>'],
            ['<strong>Churning</strong>', 'Replacing a client’s policy with the <strong>same insurer’s</strong> product, funded by the existing policy’s values, primarily to generate <strong>new commissions</strong> with no benefit to the client', 'Same company, pointless replacement, commission motive'],
            ['<strong>Sliding</strong>', 'Charging for or including coverage the customer <strong>did not request or agree to</strong> — or representing that an ancillary product is required or free when it is not', 'Extra products slipped into the deal without informed consent']
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>An agency teammate quotes auto coverage and quietly adds a $60 motor-club membership to every sale "because everyone needs it," without telling customers it is optional and extra. That is <strong>sliding</strong> — the most common violation in personal lines offices, and one a 4-40 can commit at the front desk. If the customer did not knowingly agree to it, do not add it.</p>`
        },
        {
          type: 'text',
          html: `<h3>The rest of the prohibited list</h3>
<ul>
<li><strong>Misrepresentation</strong> — false statements about policy terms, benefits, dividends, or financial condition to induce a sale or lapse.</li>
<li><strong>False advertising</strong> — untrue or misleading ads; in Florida every advertisement must be truthful and not obscure the identity of the actual insurer.</li>
<li><strong>Defamation</strong> — spreading false, derogatory statements about an insurer’s financial condition.</li>
<li><strong>Boycott, coercion, and intimidation</strong> — anti-competitive pressure, such as a lender insisting a borrower buy insurance from its own agency as a condition of the loan.</li>
<li><strong>Unlawful inducements and "free insurance"</strong> — offering anything of significant value not specified in the contract to make the sale; advertising insurance as "free" is prohibited.</li>
<li><strong>Illegal dealing in premiums</strong> — collecting sums beyond the lawful premium and fees, or knowingly collecting for insurance not provided.</li>
<li><strong>Unfair discrimination</strong> — different rates or terms between insureds of the same actuarial class.</li>
</ul>
<h3>Rebating — illegal, except Florida’s narrow legal lane</h3>
<p><span class="kt" title="Returning part of the premium or commission, or giving anything of value, as an inducement to buy">Rebating</span> — giving the customer part of your commission or anything of value as a purchase inducement — is generally prohibited. But Florida is unusual: a statute makes rebates <strong>legal if strict conditions are all met</strong>:</p>
<ul>
<li>The rebate comes <strong>entirely out of the agent’s commission</strong> (the insurer contributes nothing and is not involved)</li>
<li>It follows a <strong>written rebate schedule filed at the agency</strong> and applied uniformly</li>
<li>It is available <strong>to all insureds in the same actuarial class</strong> without discrimination</li>
<li>The rebate may not exceed the agent’s commission on the sale</li>
</ul>
<p>An off-schedule, selective, or insurer-funded discount remains an illegal rebate. For a salaried 4-40 the practical rule is simpler: <strong>never promise any customer anything of value beyond the policy itself without the supervising agent confirming it fits the filed schedule.</strong></p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p>Violations bring <strong>administrative fines, license suspension or revocation, and cease-and-desist orders</strong>; willful violations stack larger fines, and fraudulent conduct crosses into criminal territory. Discipline follows the license forever through state databases — a $60 motor-club shortcut is not worth a career.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — unfair trade practices',
          questions: [
            {
              q: 'An agent persuades a client to drop her current homeowners policy with Company A and buy from Company B by falsely claiming Company A is nearly bankrupt. This is:',
              choices: ['Churning', 'Twisting', 'Sliding', 'Legal competition'],
              answer: 1,
              explain: 'Misrepresentation used to induce replacement with ANOTHER insurer’s policy is twisting. (The false bankruptcy claim is also defamation of Company A.)'
            },
            {
              q: 'Replacing a client’s policy with another policy from the SAME insurer, mainly to earn a new first-year commission, is:',
              choices: ['Twisting', 'Rebating', 'Churning', 'Coercion'],
              answer: 2,
              explain: 'Churning is internal replacement for commissions with no client benefit. Twisting moves the client between companies; both rely on deception or pointless replacement.'
            },
            {
              q: 'A customer discovers a $75 "roadside assistance" charge on her auto policy that she never requested or agreed to. The producer committed:',
              choices: ['Sliding', 'Defamation', 'Twisting', 'Unfair discrimination'],
              answer: 0,
              explain: 'Sliding is charging for unrequested coverage or representing optional add-ons as required or free. Informed consent is the cure: disclose, price it, and let the customer choose.'
            },
            {
              q: 'Under Florida law, a rebate is LEGAL only if, among other conditions, it is:',
              choices: [
                'Funded jointly by the agent and the insurer',
                'Paid entirely from the agent’s commission under a filed schedule available to all insureds in the same actuarial class',
                'Offered only to the agency’s best customers',
                'Less than $100 in value'
              ],
              answer: 1,
              explain: 'Florida’s rebate exception requires: agent’s commission only, a written filed schedule, uniform availability within the actuarial class, and no insurer involvement. Selective or insurer-funded rebates remain illegal.'
            },
            {
              q: 'A bank tells a mortgage applicant the loan will be approved only if she buys homeowners insurance through the bank’s own agency. This practice is:',
              choices: ['Churning', 'A lawful cross-sale', 'Coercion', 'Twisting'],
              answer: 2,
              explain: 'Tying the loan to insurance purchased from a particular source is coercion — an anti-competitive unfair trade practice. Borrowers choose their own insurance providers.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 9.3 key terms',
          cards: [
            { front: 'Twisting', back: 'Misrepresentation that induces replacement with ANOTHER insurer’s policy.' },
            { front: 'Churning', back: 'Replacing a policy with the SAME insurer’s product mainly to generate commissions.' },
            { front: 'Sliding', back: 'Charging for coverage the customer did not request, or calling optional add-ons required or free.' },
            { front: 'Rebating', back: 'Giving part of the commission/premium or anything of value to induce purchase. Legal in FL ONLY under the filed-schedule, commission-only conditions.' },
            { front: 'Legal FL rebate conditions', back: 'From agent’s commission only + written filed schedule + available to all in the same actuarial class.' },
            { front: 'Defamation (trade practice)', back: 'Spreading false statements about an insurer’s financial condition.' },
            { front: 'Coercion', back: 'Using power (like loan approval) to force insurance purchases from a particular source.' },
            { front: 'Unfair discrimination', back: 'Different rates/terms for insureds of the same actuarial class.' }
          ]
        }
      ],
      terms: [
        { term: 'Twisting', def: 'Inducing a policyholder, through misrepresentation or incomplete comparison, to replace coverage with another insurer’s policy.' },
        { term: 'Churning', def: 'Replacing a policy with the same insurer’s product, using its values, primarily to generate new commissions without benefit to the client.' },
        { term: 'Sliding', def: 'Charging for or including coverage or products the customer did not request, or misrepresenting ancillary products as required or free.' },
        { term: 'Rebating', def: 'Returning premium or commission or giving anything of value as a purchase inducement; legal in Florida only under strict filed-schedule conditions.' },
        { term: 'Misrepresentation (sales)', def: 'False or misleading statements about policy terms, benefits, or an insurer’s condition to induce a transaction.' },
        { term: 'False advertising', def: 'Untrue or misleading advertisement of insurance products or terms.' },
        { term: 'Defamation of insurer', def: 'Circulating false, derogatory statements about an insurer’s financial condition.' },
        { term: 'Boycott, coercion, and intimidation', def: 'Anti-competitive practices that restrain the insurance marketplace or force purchases.' },
        { term: 'Unlawful inducement', def: 'Offering anything of significant value not specified in the policy to make a sale; "free insurance" offers are prohibited.' },
        { term: 'Illegal dealing in premiums', def: 'Collecting amounts beyond lawful premiums and fees, or collecting premium for coverage not provided.' },
        { term: 'Unfair discrimination', def: 'Charging different rates or applying different terms to insureds of the same actuarial class.' }
      ]
    },

    /* ---------------- Lesson 9.4 ---------------- */
    {
      id: 'u9l4',
      title: 'Claims Conduct, Fiduciary Duty & Fraud',
      minutes: 14,
      objectives: [
        'Identify unfair claim settlement practices',
        'Explain fiduciary handling of premium funds and the 3-year record-keeping rule',
        'Describe Florida insurance fraud law (s. 817.234) and the duty to report',
        'Summarize privacy obligations under Gramm-Leach-Bliley'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Unfair claim settlement practices</h3>
<p>The conduct rules do not stop at the sale. Insurers (and everyone working claims) are prohibited from these <strong>unfair claim settlement practices</strong> when committed knowingly or with such frequency as to indicate a business practice:</p>
<ul>
<li><strong>Misrepresenting pertinent facts or policy provisions</strong> relating to the claim</li>
<li><strong>Failing to acknowledge and act promptly</strong> on claim communications</li>
<li>Failing to adopt and implement <strong>reasonable standards for prompt investigation</strong></li>
<li><strong>Denying claims without a reasonable investigation</strong> based on available information</li>
<li>Failing to <strong>affirm or deny coverage within a reasonable time</strong> after proof of loss</li>
<li>Offering <strong>substantially less</strong> than the amounts ultimately recovered in actions — lowballing to force suits</li>
<li>Failing to <strong>promptly explain the basis for denial</strong> by reference to the policy and facts</li>
</ul>
<p>When an insurer’s conduct crosses into bad faith, Florida allows a <strong>civil remedy</strong>: the claimant files a Civil Remedy Notice giving the insurer a 60-day cure window before a bad-faith suit. Customer representatives do not adjust claims, but they often take the first notice of loss — prompt, accurate intake and documentation is the office’s first defense.</p>
<h3>Money and records: the fiduciary core</h3>
<p>Every dollar of premium that passes through the agency is held <strong>in trust</strong>. The rules from Lesson 1.4 have regulatory teeth here:</p>
<ul>
<li>Premiums and return premiums must be <strong>accounted for and remitted promptly</strong> in the regular course of business</li>
<li><strong>Commingling</strong> trust funds with personal or general operating funds is unlawful; conversion (using them) is theft and grounds for revocation plus prosecution</li>
<li>Records of transactions must be kept and available to DFS for <strong>at least 3 years</strong> after the transaction</li>
</ul>`
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — insurance fraud (s. 817.234)',
          html: `<p>Insurance fraud — presenting a claim or application containing <strong>false, incomplete, or misleading information</strong> with intent to injure, defraud, or deceive an insurer — is a <strong>felony</strong> in Florida, graded by the amount involved (third-degree felony rising to first-degree for the largest schemes). Staged auto accidents and inflated PIP clinics are why Florida built a dedicated fraud force inside DFS. Applications and claim forms carry the statutory fraud warning, and licensees who participate — even "just helping" a customer round numbers up — lose their licenses and face prosecution. Suspected fraud should be reported to the DFS fraud division.</p>`
        },
        {
          type: 'text',
          html: `<h3>Privacy — Gramm-Leach-Bliley basics</h3>
<p>Agencies collect Social Security numbers, driver’s license numbers, claims history, and financial details. Under the federal <strong>Gramm-Leach-Bliley Act (GLBA)</strong> and Florida’s implementing rules, customers must receive a <strong>privacy notice</strong> describing what nonpublic personal information is collected and shared, with the right to <strong>opt out</strong> of sharing with nonaffiliated third parties. Day-to-day translation for the front desk: customer information is used for insurance purposes only, screens get locked, documents get shredded, and nothing gets discussed with unauthorized callers — including relatives not on the policy.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — claims conduct & fraud',
          questions: [
            {
              q: 'An insurer routinely offers storm victims 40% of documented damages, paying fairly only when policyholders hire lawyers. This pattern is:',
              choices: [
                'Aggressive but lawful negotiation',
                'An unfair claim settlement practice — offering substantially less than amounts ultimately recovered',
                'Churning',
                'Permissible cost control'
              ],
              answer: 1,
              explain: 'Systematic lowballing that forces litigation is a listed unfair claim settlement practice and bad-faith exposure for the insurer.'
            },
            {
              q: 'How long must Florida licensees keep records of insurance transactions available to DFS?',
              choices: ['1 year', '3 years', '5 years', '7 years'],
              answer: 1,
              explain: 'Transaction records must be maintained at least 3 years. They are the first thing investigators request.'
            },
            {
              q: 'A customer asks the CR to "add a couple TVs that were not actually stolen" to a burglary claim inventory. Helping him would expose both to:',
              choices: [
                'A civil fine only',
                'License discipline only',
                'Felony insurance fraud charges under s. 817.234 plus license revocation',
                'Nothing — the adjuster catches it anyway'
              ],
              answer: 2,
              explain: 'Knowingly presenting false claim information is felony insurance fraud. A licensee who assists shares the criminal exposure and loses the license.'
            },
            {
              q: 'Under Gramm-Leach-Bliley, before sharing a customer’s nonpublic personal information with nonaffiliated third parties, the agency must:',
              choices: [
                'Obtain a court order',
                'Provide a privacy notice and an opportunity to opt out',
                'Charge a disclosure fee',
                'Notify the OIR'
              ],
              answer: 1,
              explain: 'GLBA requires privacy notices describing information practices and an opt-out right for sharing with nonaffiliated third parties.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 9.4 key terms',
          cards: [
            { front: 'Unfair claim settlement practices', back: 'Misrepresenting provisions, slow acknowledgment, no reasonable investigation standards, lowballing, unexplained denials.' },
            { front: 'Civil Remedy Notice', back: 'Florida bad-faith prerequisite giving the insurer a 60-day window to cure before suit.' },
            { front: 'Fiduciary funds', back: 'Premiums held in trust — prompt remittance, no commingling, no personal use.' },
            { front: '3-year records rule', back: 'Transaction records must be available to DFS for at least 3 years.' },
            { front: 's. 817.234', back: 'Florida insurance fraud statute — false/misleading claim or application info with intent to deceive = felony.' },
            { front: 'DFS fraud division', back: 'The investigative arm where suspected insurance fraud is reported.' },
            { front: 'GLBA privacy notice', back: 'Required disclosure of information practices, with opt-out for nonaffiliated sharing.' }
          ]
        }
      ],
      terms: [
        { term: 'Unfair claim settlement practices', def: 'Prohibited claims conduct such as misrepresenting provisions, failing to act promptly, denying without reasonable investigation, and lowball offers.' },
        { term: 'Bad faith', def: 'An insurer’s failure to settle a claim fairly and honestly when it could and should have; actionable in Florida after a Civil Remedy Notice.' },
        { term: 'Civil Remedy Notice', def: 'The statutory notice a claimant files giving an insurer 60 days to cure alleged bad-faith conduct before suit.' },
        { term: 'Fiduciary capacity', def: 'The trust relationship in which licensees hold premium and return-premium funds.' },
        { term: 'Conversion', def: 'Unlawful use of fiduciary funds for personal or business purposes — treated as theft.' },
        { term: 'Record retention (3 years)', def: 'Florida’s requirement that transaction records remain available to DFS for at least three years.' },
        { term: 'Insurance fraud (s. 817.234)', def: 'Knowingly presenting false, incomplete, or misleading information on a claim or application — a felony graded by amount.' },
        { term: 'Gramm-Leach-Bliley Act (GLBA)', def: 'Federal law requiring privacy notices and opt-out rights before sharing nonpublic personal information with nonaffiliated third parties.' },
        { term: 'Nonpublic personal information', def: 'Customer financial and personal data collected by the agency that privacy law protects.' },
        { term: 'First notice of loss', def: 'The initial claim report — often taken by a customer representative — that starts the statutory claim clock.' }
      ]
    },

    /* ---------------- Lesson 9.5 ---------------- */
    {
      id: 'u9l5',
      title: 'Ethics at the Front Desk: A 4-40 Survival Guide',
      minutes: 15,
      objectives: [
        'Apply the 4-40 scope-of-authority rules to realistic office situations',
        'Recognize when a question must be handed to the supervising agent',
        'Use documentation habits that prevent E&O claims',
        'Handle quotes, payments, advertising, and angry customers within the rules'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The customer representative’s golden rules</h3>
<p>Everything in this unit compresses into habits. The customer representative who follows these never stars in a DFS case file:</p>`
        },
        {
          type: 'steps',
          title: 'Front-desk operating rules',
          items: [
            { title: 'Stay inside your authority', text: 'Take applications, quote, accept premiums at the office, service policies — for lines your supervising agent is licensed and appointed to write. Anything beyond that is the agent’s job.' },
            { title: 'Quote carefully, promise nothing', text: 'A quote is an estimate, not a binder. Never tell a customer "you’re covered" unless the agent has bound coverage per agency procedure. The phrase "subject to underwriting and the agent’s confirmation" prevents most E&O claims.' },
            { title: 'Document everything', text: 'Date, time, who, what was requested, what was said, what was declined. A customer who rejects flood or UM coverage should sign the rejection — and the note goes in the file the same day.' },
            { title: 'Handle money like a fiduciary', text: 'Receipt every payment, deposit promptly to the trust account, never accept cash without a receipt process, never borrow from the drawer — not even until Friday.' },
            { title: 'Disclose, never slide', text: 'Every optional product is presented as optional, with its own price. Consent first, always.' },
            { title: 'Escalate coverage opinions', text: 'Whether a specific loss would be covered is a coverage interpretation — route it to the agent or the insurer. Guessing wrong creates liability for everyone.' }
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>E&O (errors and omissions) insurance protects the agency from its own mistakes — but the cheapest E&O strategy is the file note. In E&O litigation, the side with contemporaneous documentation usually wins. "If it isn’t documented, it didn’t happen."</p>`
        },
        {
          type: 'text',
          html: `<h3>Advertising, communication & telemarketing basics</h3>
<ul>
<li>Advertisements must be <strong>truthful, approved per agency procedure, and identify the actual insurer</strong> — not just a catchy agency brand. The agent is responsible for what the office publishes, including social media.</li>
<li>Quoting a premium without disclosing surcharges, fees, or that the quote assumes a clean record can become <strong>misrepresentation</strong>.</li>
<li>Honor do-not-call rules and obtain consent for texts and robocalls; document consent like everything else.</li>
<li>When a customer is angry: listen, document, solve what you can, and escalate early. A complaint handled well at the desk never becomes a DFS Consumer Services file.</li>
</ul>
<h3>Scenario training</h3>
<p>The rest of this lesson is practice — the same style of judgment questions the exam (and your job) will throw at you.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — front-desk scenarios, round 1',
          questions: [
            {
              q: 'A walk-in customer wants to buy auto coverage immediately. The supervising agent is at lunch. The 4-40 should:',
              choices: [
                'Bind coverage herself so the customer can drive legally',
                'Take the application and payment per agency procedure and have the agent complete the binding',
                'Send the customer to a competitor',
                'Verbally promise coverage starts immediately'
              ],
              answer: 1,
              explain: 'A CR may take the application and premium in the office, but binding decisions belong to the agent and agency procedure. Never tell a customer they are covered before they are.'
            },
            {
              q: 'A longtime customer calls: "A branch fell on my screen enclosure — is that covered?" The best 4-40 response is to:',
              choices: [
                'Say yes — falling objects are a named peril',
                'Say no — screen enclosures are excluded in Florida',
                'Take the loss details, open the claim per procedure, and let the adjuster/agent address coverage',
                'Tell the customer to hire a public adjuster'
              ],
              answer: 2,
              explain: 'Coverage opinions are interpretations — many Florida policies treat screen enclosures specially. Take first notice of loss accurately and route coverage questions to the agent or insurer.'
            },
            {
              q: 'A customer declines uninsured motorist coverage to save money. The CR’s correct move is to:',
              choices: [
                'Remove it silently at renewal',
                'Have the customer sign the written UM rejection form and document the conversation in the file',
                'Refuse to process the request',
                'Lower the BI limits to match'
              ],
              answer: 1,
              explain: 'Florida requires a signed written rejection for UM. The signed form plus a dated file note is exactly the documentation that defeats a later "no one ever told me" E&O claim.'
            },
            {
              q: 'The agency’s top producer tells the CR to add a $50 "policy fee" in cash to every renewal "for office coffee." The CR should recognize this as:',
              choices: [
                'A routine service fee',
                'Illegal dealing in premiums — collecting sums beyond lawful premiums and fees',
                'A legal rebate',
                'Acceptable if customers do not complain'
              ],
              answer: 1,
              explain: 'Collecting unauthorized amounts above the lawful premium and filed fees is illegal dealing in premiums. Participating — even on instructions — puts the CR’s own license at risk.'
            }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — front-desk scenarios, round 2',
          questions: [
            {
              q: 'A customer’s nephew calls asking for his aunt’s policy details "to help her out." The CR should:',
              choices: [
                'Provide the details — he is family',
                'Decline to share nonpublic information with anyone not authorized on the policy and offer to call the aunt',
                'Read only the premium amount',
                'Email him the declarations page'
              ],
              answer: 1,
              explain: 'Privacy obligations bar sharing nonpublic personal information with unauthorized third parties — family included. Verify authority first; offer to contact the named insured.'
            },
            {
              q: 'While quoting a homeowners policy, the customer asks the CR to "leave off" the open claim from last year so the quote looks better. The CR should:',
              choices: [
                'Omit it — underwriting will find it anyway',
                'Explain the application must be complete and truthful, and that material misrepresentation can void coverage',
                'Quote both ways and let the customer choose',
                'Submit it and flag it privately to the underwriter'
              ],
              answer: 1,
              explain: 'Knowingly submitting false application information is misrepresentation — and with intent, fraud. A voided policy after a loss hurts the customer most of all; the honest application is protection, not bureaucracy.'
            },
            {
              q: 'A CR posts on her personal social media: "Switch to us — we are 40% cheaper than every other agency and claims are always paid in full!" The main problem is:',
              choices: [
                'CRs may not use social media',
                'It is false/misleading advertising and an unsubstantiated guarantee, for which the agency is accountable',
                'The post should have tagged DFS',
                'Nothing, if engagement is good'
              ],
              answer: 1,
              explain: 'Advertising rules cover social media. Blanket price claims and "always paid in full" promises are misleading; the agent is responsible for the office’s advertising, and the post invites discipline.'
            },
            {
              q: 'A customer pays a $1,400 premium in cash on Friday afternoon. The trust deposit run already happened. The CR should:',
              choices: [
                'Hold the cash in her purse over the weekend',
                'Issue a receipt and secure the funds per the agency’s trust procedure for Monday deposit',
                'Buy a money order with it personally',
                'Apply it to a different customer’s overdue balance temporarily'
              ],
              answer: 1,
              explain: 'Receipt + agency trust procedure. Funds belong to the fiduciary account untouched; "temporary" borrowing or cross-applying funds is conversion regardless of intent to repay.'
            },
            {
              q: 'The supervising agent loses his 2-20 license for twisting. The customer representatives he supervised:',
              choices: [
                'Continue working under his appointment as before',
                'May no longer transact under his supervision — supervision must come from a currently licensed and appointed agent',
                'Are automatically promoted to agents',
                'Lose their licenses permanently too'
              ],
              answer: 1,
              explain: 'A CR’s authority depends on a validly licensed, appointed supervising agent. When supervision evaporates, the CR’s transacting must stop until the agency provides another qualifying supervisor.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 9.5 key terms',
          cards: [
            { front: 'E&O insurance', back: 'Errors & omissions — professional liability protecting the agency from mistakes; documentation is the first line of defense.' },
            { front: '"You’re covered"', back: 'The phrase a CR avoids until coverage is actually bound by the agent per procedure.' },
            { front: 'Coverage opinion', back: 'Whether a specific loss is covered — escalate to the agent or insurer, never guess.' },
            { front: 'Signed rejection forms', back: 'UM and similar declinations need the customer’s signature plus a dated file note.' },
            { front: 'Advertising rule', back: 'Truthful, identifies the actual insurer, agent accountable — including social media.' },
            { front: 'Privacy at the desk', back: 'No policy details to unauthorized third parties — verify authority first.' },
            { front: 'Cash handling', back: 'Receipt every payment; trust account only; never borrow or cross-apply funds.' }
          ]
        }
      ],
      terms: [
        { term: 'Errors and omissions (E&O) insurance', def: 'Professional liability coverage protecting agencies and their staff against claims arising from mistakes or failures in their professional duties.' },
        { term: 'Coverage opinion', def: 'An interpretation of whether a policy covers a specific loss — outside a customer representative’s role to give.' },
        { term: 'File documentation', def: 'Contemporaneous dated notes of customer requests, advice, and declinations; the primary defense in E&O disputes.' },
        { term: 'Binding authority', def: 'The power to put coverage in force on the insurer’s behalf — exercised by agents under their company agreements, not by customer representatives independently.' },
        { term: 'Do-not-call compliance', def: 'Telemarketing rules requiring consent and honoring opt-out lists for calls and texts.' },
        { term: 'Trust account', def: 'The segregated account where premium funds are held before remittance to insurers.' },
        { term: 'Advertising accountability', def: 'The principle that the agent/agency is responsible for all office advertising, including employees’ business-related social media.' },
        { term: 'Escalation', def: 'Routing matters beyond the CR’s authority — binding, coverage opinions, complaints — to the supervising agent.' }
      ]
    }
  ],

  /* ---------------- Unit 9 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'The Florida Department of Financial Services is headed by:',
        choices: ['The Insurance Commissioner', 'The elected Chief Financial Officer', 'The Governor directly', 'The NAIC chair'],
        answer: 1,
        explain: 'DFS is led by the CFO, an elected Cabinet officer. The OIR, which regulates insurers, is led by the appointed Insurance Commissioner.'
      },
      {
        q: 'Approving a homeowners insurer’s new policy form is the job of:',
        choices: ['DFS', 'The Office of Insurance Regulation', 'FIGA', 'The Division of Consumer Services'],
        answer: 1,
        explain: 'OIR regulates companies — certificates of authority, rates, forms, solvency. DFS regulates licensees and serves consumers.'
      },
      {
        q: 'A 4-40 customer representative is appointed by:',
        choices: ['Each insurer the agency represents', 'The employing agent or agency', 'The OIR', 'No appointment is required'],
        answer: 1,
        explain: 'Customer representatives are appointed by the agent or agency that employs them. Agents are the ones appointed by insurers.'
      },
      {
        q: 'A licensee moves and forgets to tell anyone. Florida law required notice to DFS of the new address within:',
        choices: ['30 days', '45 days', '60 days', '90 days'],
        answer: 2,
        explain: 'Name and address changes must be reported within 60 days — typically through MyProfile.'
      },
      {
        q: 'A 4-40 license that goes without any appointment will expire after:',
        choices: ['24 months', '36 months', '48 months', '60 months'],
        answer: 2,
        explain: 'Forty-eight months without an appointment expires the license; the holder must requalify. Appointments themselves renew every 24 months.'
      },
      {
        q: 'An agent shows a client a misleading comparison to get her to drop her current carrier and buy his other company’s policy. This violation is:',
        choices: ['Sliding', 'Rebating', 'Twisting', 'Churning'],
        answer: 2,
        explain: 'Misrepresentation inducing replacement with ANOTHER insurer’s policy is twisting. Churning would be replacement within the same company for commissions.'
      },
      {
        q: 'Adding an optional accidental-death product to every auto policy without telling customers it is optional and extra is:',
        choices: ['Churning', 'Sliding', 'Coercion', 'Defamation'],
        answer: 1,
        explain: 'Sliding: charging for unrequested coverage or misrepresenting add-ons as required or free. Informed consent before adding anything is the cure.'
      },
      {
        q: 'In Florida, an agent may legally rebate part of his commission to a customer ONLY if:',
        choices: [
          'The insurer reimburses him afterward',
          'The rebate follows a written filed schedule, comes solely from his commission, and is available to all insureds in the same actuarial class',
          'The customer is a family member',
          'The rebate stays under 5% of premium'
        ],
        answer: 1,
        explain: 'Florida’s rebate exception is narrow: commission-only funding, a filed schedule, and uniform availability within the actuarial class. Anything selective or insurer-funded is illegal rebating.'
      },
      {
        q: 'Knowingly presenting a claim containing false or misleading information with intent to deceive an insurer is, under s. 817.234, a:',
        choices: ['Noncriminal infraction', 'Second-degree misdemeanor', 'Felony', 'Civil matter only'],
        answer: 2,
        explain: 'Insurance fraud is a felony in Florida, graded by amount. Licensees who assist share criminal exposure and lose their licenses.'
      },
      {
        q: 'Records of insurance transactions must remain available to DFS for at least:',
        choices: ['1 year', '2 years', '3 years', '10 years'],
        answer: 2,
        explain: 'Three years is the statutory record-retention floor for transaction records.'
      },
      {
        q: 'Premium funds an agency has collected but not yet remitted are:',
        choices: [
          'Agency operating income',
          'Trust funds held in a fiduciary capacity',
          'The CR’s responsibility personally',
          'Insurable only by FIGA'
        ],
        answer: 1,
        explain: 'Premiums are fiduciary trust funds — segregated, promptly remitted, never commingled or borrowed.'
      },
      {
        q: 'Which is an unfair CLAIM settlement practice?',
        choices: [
          'Requesting a sworn proof of loss',
          'Denying claims without conducting a reasonable investigation',
          'Applying the policy deductible',
          'Using the appraisal clause for a value dispute'
        ],
        answer: 1,
        explain: 'Denial without reasonable investigation is on the statutory list. Proofs of loss, deductibles, and appraisal are normal policy mechanics.'
      },
      {
        q: 'Which statement about continuing education is correct?',
        choices: [
          '4-40 licensees must complete 20 hours every two years',
          '4-40 licensees are generally exempt from CE requirements',
          'All Florida licensees are exempt from CE',
          'CE applies only in the first license year'
        ],
        answer: 1,
        explain: 'Customer representatives are generally CE-exempt; agents (2-20/20-44) carry biennial CE obligations.'
      },
      {
        q: 'A customer asks the front-desk CR whether her policy would cover a dog bite at the park. The CR’s best course is to:',
        choices: [
          'Assure her Section II applies anywhere in the world',
          'Tell her animal liability is always excluded in Florida',
          'Note the question, check the policy with the supervising agent, and respond with verified information',
          'Refuse to discuss anything about the policy'
        ],
        answer: 2,
        explain: 'Coverage interpretation gets escalated and verified — many Florida policies carry animal liability exclusions, so guessing either way risks a costly wrong answer.'
      },
      {
        q: 'Tying a mortgage approval to the borrower buying insurance from the lender’s own agency is the unfair trade practice of:',
        choices: ['Rebating', 'Coercion', 'Twisting', 'Unfair discrimination'],
        answer: 1,
        explain: 'Forcing the purchase through economic power is coercion. Lenders may require insurance — they may not dictate buying it from themselves.'
      }
    ]
  }
});
