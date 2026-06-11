/* Unit 1 — Foundations of Insurance */
window.PL.units.push({
  id: 'u1',
  number: 1,
  title: 'Foundations of Insurance',
  icon: 'shield',
  description: 'How insurance actually works: risk, perils and hazards, the law of large numbers, what makes a risk insurable, and the core ideas — indemnity and insurable interest — that everything else in this course is built on.',
  lessons: [

    /* ---------------- Lesson 1.1 ---------------- */
    {
      id: 'u1l1',
      title: 'Risk, Peril & Hazard — How Insurance Works',
      minutes: 14,
      objectives: [
        'Define risk and distinguish pure risk from speculative risk',
        'Explain the difference between a peril and a hazard, and name the three hazard types',
        'Describe the law of large numbers and why insurers rely on it',
        'List the four risk-management techniques and identify the elements of an ideally insurable risk'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>What insurance really is</h3>
<p>Strip away the paperwork and insurance is a simple deal: <strong>many people who face the same kind of loss each pay a small, certain amount (the premium) into a pool, and the pool pays the few who actually suffer the loss.</strong> The policyholder trades a small certain cost for protection against a large uncertain one. The insurer can make that promise because it covers thousands of similar risks at once and can predict, with surprising accuracy, how many losses the whole group will have.</p>
<p>That mechanism is called the <span class="kt" title="Spreading the cost of losses among a large group of similar risks">transfer of risk</span>: the financial consequences of a loss move from the insured to the insurance company, and the company spreads those consequences across the whole pool of premium payers.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Risk',
          html: `<p><strong>Risk</strong> is uncertainty about whether a loss will occur. Insurance does not eliminate the event (your house can still burn); it eliminates the <em>financial uncertainty</em> the event creates.</p>`
        },
        {
          type: 'text',
          html: `<h3>Pure risk vs. speculative risk</h3>
<p>Insurers will only touch one of the two families of risk:</p>`
        },
        {
          type: 'compare',
          title: 'Only pure risk is insurable',
          left: {
            title: 'Pure risk — insurable',
            items: [
              'Only two outcomes: <strong>loss or no loss</strong>',
              'No possibility of gain',
              'Examples: house fire, car crash, hurricane, theft, a lawsuit against you',
              'This is the entire world of personal lines insurance'
            ]
          },
          right: {
            title: 'Speculative risk — NOT insurable',
            items: [
              'Three outcomes: <strong>loss, no loss, or gain</strong>',
              'Entered into voluntarily hoping to profit',
              'Examples: gambling, stock investing, starting a business',
              'Insurance never covers a chance of profit'
            ]
          }
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>The exam loves this distinction. If a question describes any chance of <em>gain</em> — betting, investing, business ventures — the answer is <strong>speculative risk, not insurable</strong>. If the only outcomes are "something bad happens" or "nothing happens," it is pure risk.</p>`
        },
        {
          type: 'text',
          html: `<h3>Peril vs. hazard — the most-confused pair in insurance</h3>
<p>A <span class="kt" title="The actual cause of a loss">peril</span> is the <strong>cause of loss itself</strong> — fire, windstorm, lightning, theft, collision, hail. Policies are literally organized around perils: a "named peril" policy lists exactly which causes of loss it covers.</p>
<p>A <span class="kt" title="A condition that increases the chance or severity of loss">hazard</span> is anything that <strong>increases the likelihood or severity</strong> of a peril occurring. Hazards come in three flavors, and you must be able to classify them:</p>`
        },
        {
          type: 'table',
          caption: 'The three types of hazards',
          headers: ['Type', 'What it is', 'Classic examples'],
          rows: [
            ['<strong>Physical hazard</strong>', 'A tangible condition you can see, touch, or measure', 'Frayed wiring, icy sidewalk, wood-shingle roof, swimming pool with no fence, bald tires'],
            ['<strong>Moral hazard</strong>', 'Dishonesty — a person of bad character who may <em>cause</em> or fake a loss', 'Arson for profit, padding a claim, faking an injury, lying on an application'],
            ['<strong>Morale hazard</strong>', 'Carelessness or indifference <em>because</em> insurance exists', 'Leaving keys in the car, not fixing a leaky pipe, "why lock the door — I’m insured"']
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A kitchen grease fire damages a home. The <strong>fire is the peril</strong>. The pan of grease left unattended on a hot stove is a <strong>morale hazard</strong> (carelessness). If the stove had faulty wiring, that would be a <strong>physical hazard</strong>. If the homeowner set the fire intentionally to collect insurance money, that is a <strong>moral hazard</strong> — and also fraud, which is never covered.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — risk, peril, hazard',
          questions: [
            {
              q: 'A homeowner leaves her doors unlocked because "the insurance company will pay if anything is stolen." This attitude is best described as a:',
              choices: ['Physical hazard', 'Moral hazard', 'Morale hazard', 'Peril'],
              answer: 2,
              explain: 'Carelessness or indifference toward loss because insurance exists is a morale hazard. Moral hazard involves dishonesty (intentionally causing or faking a loss); morale hazard is just sloppiness.'
            },
            {
              q: 'Which of the following is a peril?',
              choices: ['An unfenced swimming pool', 'Lightning', 'A driver with three DUI convictions', 'Worn brake pads'],
              answer: 1,
              explain: 'A peril is the actual cause of loss — lightning, fire, wind, theft. The pool, brakes, and driving record are hazards: conditions that increase the chance a peril will cause loss.'
            },
            {
              q: 'Why is gambling NOT insurable?',
              choices: [
                'Because losses are too small to matter',
                'Because it is a speculative risk that includes the possibility of gain',
                'Because it is illegal in Florida',
                'Because the law of large numbers does not apply to card games'
              ],
              answer: 1,
              explain: 'Insurance only covers pure risks — situations with no possibility of profit. Gambling is the textbook speculative risk: you may lose, break even, or gain.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>The law of large numbers</h3>
<p>No one can predict whether <em>your</em> house will burn this year. But an insurer covering 500,000 similar homes can predict the group's total fire losses within a very small margin of error. The <span class="kt" title="The larger the group of similar risks, the more accurately losses can be predicted">law of large numbers</span> says: <strong>as the number of similar exposure units increases, actual losses get closer and closer to expected losses.</strong></p>
<p>This is the mathematical engine of insurance. It is why insurers want big pools of <em>similar, independent</em> risks, and why they charge premiums that are calculated, not guessed.</p>`
        },
        {
          type: 'chart',
          chartType: 'line',
          title: 'Law of large numbers: prediction error shrinks as the pool grows',
          labels: ['100 homes', '1,000', '10,000', '100,000', '500,000', '1,000,000'],
          datasets: [{ label: 'Prediction error', data: [32, 18, 9, 4, 2, 1] }],
          suffix: '%',
          note: 'Illustrative only. With 100 homes, actual fire losses might differ wildly from the forecast; with a million homes, the forecast is reliable enough to price premiums with confidence.'
        },
        {
          type: 'text',
          html: `<h3>The four ways to manage any risk</h3>
<p>Insurance is only one tool in the risk-management toolbox. Every risk a person faces can be handled one of four ways (remember <strong>"the 4 R’s aren’t all insurance"</strong>):</p>`
        },
        {
          type: 'steps',
          title: 'Risk management techniques',
          items: [
            { title: 'Avoidance', text: 'Eliminate the exposure entirely. Never fly? You avoided the risk of a plane crash. Effective but rarely practical — you cannot avoid owning a home by sleeping outdoors.' },
            { title: 'Retention', text: 'Keep the risk and pay losses yourself. Deductibles are partial retention you choose on purpose; going uninsured is retention by default (and sometimes by ignorance).' },
            { title: 'Reduction (control)', text: 'Lower the frequency or severity of losses — smoke detectors, hurricane shutters, defensive driving, a fence around the pool. Insurers reward reduction with credits and discounts.' },
            { title: 'Transfer', text: 'Shift the financial consequences to someone else. Insurance is the most important transfer mechanism; hold-harmless agreements in contracts are another.' }
          ]
        },
        {
          type: 'text',
          html: `<h3>What makes a risk ideally insurable?</h3>
<p>Insurers cannot pool just any pure risk. To be insurable, a risk should meet these requirements (a favorite exam list):</p>
<ul>
<li><strong>Due to chance</strong> — the loss must be accidental and outside the insured’s control. Intentional losses are never covered.</li>
<li><strong>Definite and measurable</strong> — the loss must be verifiable as to time, place, cause, and dollar amount.</li>
<li><strong>Statistically predictable</strong> — a large number of similar exposure units must exist so the law of large numbers works.</li>
<li><strong>Not catastrophic to the insurer</strong> — losses should not strike a huge share of insureds at once. (Hurricanes and floods strain this rule — that is exactly why Florida has special market mechanisms and why flood is excluded from standard policies. Units 5 and 6 cover those.)</li>
<li><strong>Premium must be economically feasible</strong> — affordable relative to the amount of protection. If the premium approaches the size of the potential loss, transferring the risk makes no sense.</li>
<li><strong>Randomly selected pool</strong> — the insurer needs a fair cross-section of risks, not only the people most likely to have losses (the problem of <span class="kt" title="The tendency of higher-risk individuals to seek insurance more eagerly than average-risk individuals">adverse selection</span>, which underwriting exists to fight).</li>
</ul>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Adverse Selection',
          html: `<p><strong>Adverse selection</strong> is the tendency of people with a higher-than-average chance of loss to seek insurance more eagerly than people with average or low risk. Left unchecked, the pool fills with bad risks and premiums spiral. Underwriting — selecting and pricing risks — is the insurer’s defense.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 1.1 key terms',
          cards: [
            { front: 'Risk', back: 'Uncertainty about whether a loss will occur. Insurance addresses the financial uncertainty, not the event itself.' },
            { front: 'Pure risk', back: 'A risk with only two outcomes — loss or no loss. The only kind of risk insurance covers.' },
            { front: 'Speculative risk', back: 'A risk that includes the possibility of gain (gambling, investing). Never insurable.' },
            { front: 'Peril', back: 'The actual cause of a loss — fire, wind, theft, collision.' },
            { front: 'Hazard', back: 'A condition that increases the chance or severity of loss. Three types: physical, moral, morale.' },
            { front: 'Law of large numbers', back: 'The larger the pool of similar risks, the more accurately total losses can be predicted.' },
            { front: 'Adverse selection', back: 'High-risk people seek insurance more eagerly than low-risk people; underwriting fights it.' },
            { front: 'Risk transfer', back: 'Shifting the financial consequences of loss to another party — the core function of insurance.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the insurance mechanism',
          questions: [
            {
              q: 'The law of large numbers allows an insurer to:',
              choices: [
                'Eliminate losses entirely',
                'Predict group losses with increasing accuracy as the pool of similar risks grows',
                'Guarantee no single insured ever has a loss',
                'Avoid the need for underwriting'
              ],
              answer: 1,
              explain: 'The law of large numbers does not prevent losses — it makes total losses across a large pool predictable, which lets actuaries set adequate premiums.'
            },
            {
              q: 'Choosing a $2,500 hurricane deductible instead of $500 is an example of which risk-management technique?',
              choices: ['Avoidance', 'Reduction', 'Retention', 'Transfer'],
              answer: 2,
              explain: 'A deductible is a deliberate, partial retention of risk: you keep responsibility for the first $2,500 of loss and transfer the rest.'
            },
            {
              q: 'Which requirement of an ideally insurable risk explains why standard homeowners policies exclude flood?',
              choices: [
                'The loss must be due to chance',
                'The loss must not be catastrophic — too many insureds suffer loss at once',
                'The premium must be economically feasible',
                'The loss must be definite and measurable'
              ],
              answer: 1,
              explain: 'Flood is a catastrophic peril: one event can damage tens of thousands of homes in the same area at the same time, breaking the principle that losses should hit only a small share of the pool. That is why flood requires its own program (the NFIP — covered in Unit 5).'
            },
            {
              q: 'Installing hurricane shutters and a monitored alarm system is an example of:',
              choices: ['Risk retention', 'Risk avoidance', 'Risk reduction', 'Risk transfer'],
              answer: 2,
              explain: 'Shutters and alarms lower the frequency or severity of losses — that is reduction (loss control). Insurers reward it with premium credits, which matters a lot in Florida.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Risk', def: 'Uncertainty about whether a loss will occur.' },
        { term: 'Pure risk', def: 'A risk involving only the chance of loss or no loss, with no possibility of gain. The only insurable type of risk.' },
        { term: 'Speculative risk', def: 'A risk involving the possibility of loss, no loss, or gain (e.g., gambling, investing). Not insurable.' },
        { term: 'Peril', def: 'The actual cause of a loss, such as fire, windstorm, theft, or collision.' },
        { term: 'Hazard', def: 'A condition that increases the probability or severity of a loss. Classified as physical, moral, or morale.' },
        { term: 'Physical hazard', def: 'A tangible condition that increases the chance of loss, such as faulty wiring or an unfenced pool.' },
        { term: 'Moral hazard', def: 'A dishonesty-based hazard — the risk that a person will intentionally cause or exaggerate a loss.' },
        { term: 'Morale hazard', def: 'Carelessness or indifference to loss because insurance exists.' },
        { term: 'Law of large numbers', def: 'The principle that as the number of similar exposure units increases, actual losses approach expected losses, making accurate prediction possible.' },
        { term: 'Adverse selection', def: 'The tendency of higher-risk individuals to seek insurance more eagerly than average-risk individuals.' },
        { term: 'Exposure unit', def: 'A single unit of risk (one home, one car) used to measure and pool similar risks.' },
        { term: 'Risk retention', def: 'Keeping a risk and paying losses yourself — deductibles are intentional partial retention.' },
        { term: 'Risk avoidance', def: 'Eliminating an exposure to loss entirely by not engaging in the activity.' },
        { term: 'Risk reduction', def: 'Actions that lower the frequency or severity of losses, such as alarms or hurricane shutters.' }
      ]
    },

    /* ---------------- Lesson 1.2 ---------------- */
    {
      id: 'u1l2',
      title: 'The Insurance Contract: Elements, Features & Legal Principles',
      minutes: 16,
      objectives: [
        'Name the four essential elements of a valid contract',
        'Describe the special characteristics of insurance contracts (adhesion, aleatory, unilateral, conditional, personal, utmost good faith)',
        'Explain indemnity and insurable interest and when insurable interest must exist in property insurance',
        'Distinguish representations, warranties, concealment, and fraud, and define waiver and estoppel'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>A policy is a contract first</h3>
<p>Every insurance policy is a legally enforceable contract, so it must contain the same four elements as any other contract. Miss any one and there is no contract at all.</p>`
        },
        {
          type: 'steps',
          title: 'The four essential elements of a valid contract',
          items: [
            { title: 'Agreement — offer and acceptance', text: 'The applicant makes the offer by submitting the application (usually with premium). The insurer accepts by issuing the policy — or counteroffers by issuing on different terms. The agent does not "accept"; the company does.' },
            { title: 'Consideration', text: 'Each side must give something of value. The insured’s consideration is the premium AND the statements in the application. The insurer’s consideration is its promise to pay covered losses.' },
            { title: 'Competent parties', text: 'Both parties must be legally able to contract: the insurer licensed, the applicant of legal age (or an emancipated minor), sane, and not under duress.' },
            { title: 'Legal purpose', text: 'The contract cannot insure illegal activity or be against public policy. You cannot insure your cocaine inventory — and the requirement of insurable interest is part of what keeps insurance legal rather than a wager.' }
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>Memory hook: <strong>CALC</strong> — <strong>C</strong>onsideration, <strong>A</strong>greement, <strong>L</strong>egal purpose, <strong>C</strong>ompetent parties. The exam may also phrase "agreement" as "offer and acceptance."</p>`
        },
        {
          type: 'text',
          html: `<h3>What makes insurance contracts special</h3>
<p>Insurance contracts have a personality of their own. Each of these traits is a tested vocabulary word:</p>`
        },
        {
          type: 'table',
          caption: 'Distinct characteristics of insurance contracts',
          headers: ['Characteristic', 'Meaning', 'Practical consequence'],
          rows: [
            ['<strong>Contract of adhesion</strong>', 'One party (the insurer) writes it; the other takes it or leaves it', 'Ambiguities are interpreted <em>against the insurer</em> and in favor of the insured'],
            ['<strong>Aleatory</strong>', 'Unequal exchange of values depending on chance', 'A $1,200 premium may buy a $400,000 payout — or nothing at all'],
            ['<strong>Unilateral</strong>', 'Only one party makes an enforceable promise', 'Only the insurer can be sued for breaking its promise; the insured can simply stop paying'],
            ['<strong>Conditional</strong>', 'The insurer’s duty to pay depends on conditions being met', 'No payment unless the insured pays premium, reports the loss, cooperates, etc.'],
            ['<strong>Personal contract</strong>', 'It insures a person’s interest in property, not the property itself', 'Property policies cannot be assigned to a new owner without insurer consent'],
            ['<strong>Utmost good faith</strong>', 'Both sides rely on each other’s honesty (uberrimae fidei)', 'Misrepresentation, concealment, and fraud can void coverage']
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — contract characteristics',
          questions: [
            {
              q: 'Because an insurance policy is drafted entirely by the insurer and offered on a take-it-or-leave-it basis, courts resolve ambiguous language in favor of the insured. This reflects the policy being a contract of:',
              choices: ['Indemnity', 'Adhesion', 'Utmost good faith', 'Subrogation'],
              answer: 1,
              explain: 'A contract of adhesion is drafted by one party. The trade-off imposed by the courts: any ambiguity is construed against the drafter — the insurer.'
            },
            {
              q: 'An insured pays $800 in premium and collects $90,000 after a kitchen fire. The unequal exchange of value illustrates which contract characteristic?',
              choices: ['Unilateral', 'Conditional', 'Aleatory', 'Personal'],
              answer: 2,
              explain: 'Aleatory means the values exchanged are unequal and depend on an uncertain event. One side may receive far more than it gave.'
            },
            {
              q: 'In forming the insurance contract, the applicant’s consideration consists of:',
              choices: [
                'The premium only',
                'The premium and the representations made in the application',
                'The promise to never file a claim',
                'The signature of the agent'
              ],
              answer: 1,
              explain: 'The insured’s consideration is the premium plus the truthful statements on the application; the insurer’s consideration is its promise to pay covered losses.'
            }
          ]
        },
        {
          type: 'text',
          html: `<h3>Indemnity: made whole, not made rich</h3>
<p>The <span class="kt" title="Restoring the insured to the financial position held before the loss — no better, no worse">principle of indemnity</span> says insurance should restore you to the financial position you were in <strong>just before the loss — no better, no worse</strong>. You should never profit from a loss. Indemnity is enforced by tools you will meet throughout this course: actual cash value, policy limits, "other insurance" clauses, and subrogation.</p>
<h3>Insurable interest: skin in the game</h3>
<p>You can only insure something if its loss would hurt <em>you</em> financially. That financial stake is <span class="kt" title="A financial stake in the property such that its loss would cause you direct monetary harm">insurable interest</span>. Without it, an insurance policy is just a bet on someone else’s misfortune — which is both a moral hazard machine and an illegal wager.</p>`
        },
        {
          type: 'callout', variant: 'warning',
          html: `<p><strong>Timing matters and it is tested.</strong> In <strong>property insurance, insurable interest must exist at the time of LOSS</strong> (most exam answers also accept "at the time of loss" as the only required moment). Compare: in life insurance it must exist at the time of <em>application</em>. If you sell your house in June and it burns in July, you cannot collect — no interest at the time of loss.</p>`
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>Maria owns a home with a $250,000 mortgage from Coast Bank. Who has insurable interest? <strong>Both.</strong> Maria as owner (full value), and Coast Bank to the extent of the loan balance — which is why lenders are listed on the policy under a mortgagee clause (Unit 2) and get paid first from a loss settlement, up to their interest.</p>`
        },
        {
          type: 'text',
          html: `<h3>Honesty mechanics: representations, warranties, concealment, fraud</h3>
<p>Because insurance runs on utmost good faith, the law grades the statements people make:</p>
<ul>
<li><strong>Representation</strong> — a statement the applicant believes to be true. The standard for application answers. A misrepresentation matters only if it is <strong>material</strong> — i.e., the insurer would have decided differently had it known the truth.</li>
<li><strong>Warranty</strong> — a statement or promise <em>guaranteed</em> to be true and made part of the contract. A breached warranty can void coverage even without intent to deceive. (Rare in personal lines; common in marine insurance.)</li>
<li><strong>Concealment</strong> — staying silent about a material fact you know the insurer would want. Intentional concealment of material facts can void the policy.</li>
<li><strong>Fraud</strong> — an intentional lie designed to deceive and induce the insurer to part with value. Fraud is grounds for denial, rescission, and criminal prosecution.</li>
</ul>
<h3>Waiver and estoppel</h3>
<p><strong>Waiver</strong> is the voluntary giving up of a known right — for example, an insurer that issues a policy knowing the application is incomplete may waive its right to object later. <strong>Estoppel</strong> stops a party from asserting a right after its own conduct led the other side to reasonably rely on the opposite. If an agent repeatedly accepts late payments, the insurer may be estopped from denying a claim solely because a payment was late.</p>`
        },
        {
          type: 'flashcards',
          title: 'Lesson 1.2 key terms',
          cards: [
            { front: 'Indemnity', back: 'Restoring the insured to the pre-loss financial position — no better, no worse. No profit from a loss.' },
            { front: 'Insurable interest', back: 'A financial stake in the insured property. In property insurance, it must exist at the time of LOSS.' },
            { front: 'Contract of adhesion', back: 'Drafted by one party (insurer); ambiguities are construed against the drafter.' },
            { front: 'Aleatory contract', back: 'Exchange of unequal values dependent on an uncertain event.' },
            { front: 'Unilateral contract', back: 'Only one party (the insurer) makes a legally enforceable promise.' },
            { front: 'Representation', back: 'A statement believed to be true. Voids coverage only if material to the risk.' },
            { front: 'Warranty', back: 'A statement guaranteed to be true, made part of the contract; breach can void coverage.' },
            { front: 'Concealment', back: 'Intentionally withholding a material fact the insurer would want to know.' },
            { front: 'Waiver', back: 'The voluntary surrender of a known legal right.' },
            { front: 'Estoppel', back: 'A party is barred from asserting a right after conduct that led the other side to rely on the opposite.' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — indemnity & good faith',
          questions: [
            {
              q: 'Tom sold his rental house in March but kept the insurance policy. The house burned down in May while owned by the buyer. Tom’s claim will be denied because:',
              choices: [
                'The policy was a unilateral contract',
                'Tom had no insurable interest at the time of loss',
                'Fire is excluded after a sale',
                'The buyer concealed a material fact'
              ],
              answer: 1,
              explain: 'In property insurance, insurable interest must exist at the time of loss. After the sale Tom had no financial stake in the property, so he suffered no loss to indemnify.'
            },
            {
              q: 'An applicant honestly answers that her roof is 8 years old when it is actually 9. The insurer later tries to void the policy. The insurer will likely fail because the misstatement was:',
              choices: ['A warranty breach', 'Concealment', 'Not material to the risk', 'Fraudulent'],
              answer: 2,
              explain: 'Application answers are representations. A misrepresentation only voids coverage if material — if the truth would have changed the underwriting decision. One year of roof age almost certainly would not.'
            },
            {
              q: 'For years an insurer accepted premium payments 10 days late without comment. When a loss occurs during a similar late period, the insurer denies the claim for late payment. The insured’s best legal argument is:',
              choices: ['Adhesion', 'Estoppel', 'Subrogation', 'Indemnity'],
              answer: 1,
              explain: 'The insurer’s repeated conduct led the insured to reasonably rely on late payments being acceptable; estoppel prevents the insurer from suddenly asserting the right it appeared to abandon.'
            },
            {
              q: 'Which principle prevents an insured from collecting the full value of the same loss from two insurers and pocketing the surplus?',
              choices: ['Adhesion', 'Indemnity', 'Aleatory exchange', 'Utmost good faith'],
              answer: 1,
              explain: 'Indemnity limits recovery to the actual financial loss. "Other insurance" clauses and pro-rata sharing (Unit 2) are the contract tools that enforce it.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Indemnity', def: 'The principle that insurance restores the insured to the financial position held immediately before the loss — no profit allowed.' },
        { term: 'Insurable interest', def: 'A financial stake in property such that its loss causes direct monetary harm. In property insurance it must exist at the time of loss.' },
        { term: 'Contract of adhesion', def: 'A contract drafted entirely by one party and offered take-it-or-leave-it; ambiguities are construed against the drafter (the insurer).' },
        { term: 'Aleatory contract', def: 'A contract in which the values exchanged are unequal and depend on an uncertain event.' },
        { term: 'Unilateral contract', def: 'A contract in which only one party (the insurer) makes a legally enforceable promise.' },
        { term: 'Conditional contract', def: 'A contract in which the insurer’s obligation to perform depends on the insured meeting policy conditions.' },
        { term: 'Utmost good faith', def: 'The doctrine that both parties to an insurance contract rely on each other’s complete honesty.' },
        { term: 'Representation', def: 'A statement made by an applicant believed to be true; grounds for voiding coverage only if material.' },
        { term: 'Material misrepresentation', def: 'A false statement that would have changed the insurer’s underwriting or pricing decision had the truth been known.' },
        { term: 'Warranty (contract)', def: 'A statement or promise guaranteed to be true and made part of the insurance contract.' },
        { term: 'Concealment', def: 'The intentional withholding of a material fact from the insurer.' },
        { term: 'Fraud', def: 'An intentional deception designed to induce another party to part with something of value.' },
        { term: 'Waiver', def: 'The intentional and voluntary giving up of a known right.' },
        { term: 'Estoppel', def: 'A legal bar preventing a party from asserting a right after conduct that caused another to rely on the contrary.' },
        { term: 'Consideration', def: 'The value each party gives in a contract — the insured’s premium and representations; the insurer’s promise to pay.' }
      ]
    },

    /* ---------------- Lesson 1.3 ---------------- */
    {
      id: 'u1l3',
      title: 'Insurance Companies & the Marketplace',
      minutes: 13,
      objectives: [
        'Classify insurers by ownership (stock vs. mutual), domicile (domestic, foreign, alien), and authorization status',
        'Explain admitted vs. non-admitted insurers and the role of surplus lines',
        'Describe reinsurance, residual markets, and why they exist',
        'Identify how insurer financial strength is rated and why it matters to consumers'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>Who actually sells you the promise</h3>
<p>Insurers are classified several different ways at once — by who owns them, where they are chartered, and whether they are approved to operate in a given state. The same company can be a stock insurer, a foreign insurer, and an authorized insurer all at the same time. Learn each axis separately.</p>
<h4>Axis 1 — Ownership</h4>`
        },
        {
          type: 'compare',
          title: 'Stock vs. mutual insurers',
          left: {
            title: 'Stock insurer',
            items: [
              'Owned by <strong>shareholders</strong>',
              'Profits paid as <strong>dividends to stockholders</strong> (taxable)',
              'Issues <strong>non-participating</strong> policies',
              'Board elected by stockholders'
            ]
          },
          right: {
            title: 'Mutual insurer',
            items: [
              'Owned by its <strong>policyholders</strong>',
              'Surplus may be returned as <strong>policy dividends to policyholders</strong> (a non-guaranteed return of premium, generally not taxable)',
              'Issues <strong>participating</strong> policies',
              'Board elected by policyholders'
            ]
          }
        },
        {
          type: 'text',
          html: `<h4>Other ownership forms worth recognizing</h4>
<ul>
<li><strong>Reciprocal exchange</strong> — an unincorporated group of subscribers who insure each other, managed by an <em>attorney-in-fact</em>.</li>
<li><strong>Lloyd’s of London</strong> — not an insurer but a <em>marketplace</em> where syndicates of underwriters accept unusual or very large risks.</li>
<li><strong>Risk retention groups & self-insurers</strong> — entities that retain and pool their own risks rather than buying traditional coverage.</li>
<li><strong>Fraternal benefit societies</strong> — member organizations (mostly life insurance; rarely relevant in personal lines).</li>
</ul>
<h4>Axis 2 — Domicile (where chartered)</h4>`
        },
        {
          type: 'table',
          caption: 'Domestic, foreign, and alien insurers — from Florida’s point of view',
          headers: ['Classification', 'Chartered in…', 'Example'],
          rows: [
            ['<strong>Domestic</strong>', 'Florida', 'An insurer incorporated in Tallahassee doing business in Florida'],
            ['<strong>Foreign</strong>', 'Another U.S. state or territory', 'A Georgia-chartered insurer writing policies in Florida'],
            ['<strong>Alien</strong>', 'Another country', 'A Bermuda or London company writing in Florida']
          ]
        },
        {
          type: 'callout', variant: 'tip',
          html: `<p>"Foreign" trips people up every year. On the exam, <strong>foreign = another STATE</strong>, not another country. Another country is <strong>alien</strong>.</p>`
        },
        {
          type: 'text',
          html: `<h4>Axis 3 — Authorization</h4>
<p>An insurer that has been issued a <span class="kt" title="The license a state issues to an insurer permitting it to transact insurance there">certificate of authority</span> by the Florida Office of Insurance Regulation is an <strong>authorized (admitted)</strong> insurer. One without it is <strong>unauthorized (non-admitted)</strong> — and transacting insurance for an unauthorized entity is a serious violation (it is how people end up selling fake insurance).</p>
<p>There is one legal lane for non-admitted companies: the <span class="kt" title="Coverage placed with an eligible non-admitted insurer when no admitted insurer will accept the risk">surplus lines</span> market. When no admitted insurer will take a risk (a beachfront mansion, an exotic exposure), a specially licensed <strong>surplus lines agent</strong> may place it with an eligible non-admitted insurer. Two consumer warnings apply: surplus lines policies are <strong>not protected by the Florida Insurance Guaranty Association (FIGA)</strong>, and rates/forms are not state-approved.</p>
<h3>Reinsurance — insurance for insurers</h3>
<p><span class="kt" title="A contract in which one insurer transfers part of its risk to another insurer">Reinsurance</span> lets an insurer (the <em>ceding company</em>) transfer part of its risk to a <em>reinsurer</em>, smoothing results and protecting against catastrophes. In Florida this is not academic: hurricane reinsurance costs are one of the biggest drivers of homeowners premiums, and the state even runs its own reinsurance pool — the Florida Hurricane Catastrophe Fund (Unit 5).</p>
<h3>Residual markets — the market of last resort</h3>
<p>When the voluntary market will not write a risk at any reasonable price, states create <strong>residual (shared) markets</strong>. Florida’s flagship example is <strong>Citizens Property Insurance Corporation</strong>, the state-created property insurer of last resort (Unit 5 covers it in depth). Auto has assigned-risk style plans for drivers no one will insure voluntarily.</p>
<h3>Financial strength ratings</h3>
<p>A promise to pay is only as good as the company behind it. Independent agencies — <strong>A.M. Best</strong> (the best known in insurance), S&P, Moody’s, Fitch, and Demotech — grade insurers’ ability to pay claims. A.M. Best’s scale runs from A++ down through F. Customer representatives should know how to look up a rating and why a B- carrier’s cheap quote is not automatically a bargain.</p>`
        },
        {
          type: 'chart',
          chartType: 'hbar',
          title: 'Where Florida homeowners premiums roughly go (illustrative)',
          labels: ['Expected losses (claims)', 'Reinsurance cost', 'Operating expense & commissions', 'Taxes & fees', 'Profit/contingency'],
          datasets: [{ label: 'Share of premium', data: [48, 24, 18, 4, 6] }],
          suffix: '%',
          note: 'Illustrative breakdown. Note how large reinsurance looms in Florida compared with most states — hurricane exposure must be ceded to global reinsurers, and that cost flows into premiums.'
        },
        {
          type: 'flashcards',
          title: 'Lesson 1.3 key terms',
          cards: [
            { front: 'Stock insurer', back: 'Owned by shareholders; issues non-participating policies; profits go to stockholders.' },
            { front: 'Mutual insurer', back: 'Owned by policyholders; issues participating policies; may pay policy dividends.' },
            { front: 'Domestic insurer', back: 'Chartered in Florida (from Florida’s viewpoint).' },
            { front: 'Foreign insurer', back: 'Chartered in another U.S. state.' },
            { front: 'Alien insurer', back: 'Chartered in another country.' },
            { front: 'Certificate of authority', back: 'The state license allowing an insurer to transact insurance — makes it "authorized/admitted."' },
            { front: 'Surplus lines', back: 'The legal route to place hard-to-insure risks with eligible non-admitted insurers. No FIGA protection.' },
            { front: 'Reinsurance', back: 'Insurance bought by insurers; the ceding company transfers part of its risk to a reinsurer.' },
            { front: 'Residual market', back: 'State-created market of last resort for risks the voluntary market refuses (e.g., Citizens in Florida).' }
          ]
        },
        {
          type: 'quiz',
          title: 'Checkpoint — the marketplace',
          questions: [
            {
              q: 'A policyholder-owned insurer that issues participating policies is a:',
              choices: ['Stock insurer', 'Mutual insurer', 'Reciprocal exchange', 'Surplus lines insurer'],
              answer: 1,
              explain: 'Mutual insurers are owned by policyholders, who may receive policy dividends on participating policies. Stock insurers are owned by shareholders.'
            },
            {
              q: 'From Florida’s perspective, an insurer chartered in Texas and writing business in Florida is a(n):',
              choices: ['Domestic insurer', 'Alien insurer', 'Foreign insurer', 'Unauthorized insurer'],
              answer: 2,
              explain: 'Foreign = chartered in another U.S. state. Alien = chartered in another country. Domicile says nothing about authorization — a foreign insurer with a Florida certificate of authority is fully authorized.'
            },
            {
              q: 'Which statement about surplus lines coverage in Florida is TRUE?',
              choices: [
                'It may be placed by any licensed customer representative',
                'It is backed by the Florida Insurance Guaranty Association if the insurer fails',
                'It may be used when coverage cannot be obtained from authorized insurers',
                'Its rates and forms are approved by the Office of Insurance Regulation'
              ],
              answer: 2,
              explain: 'Surplus lines exists for risks the admitted market declines, placed through specially licensed surplus lines agents. The trade-offs: no FIGA guaranty protection and no state-approved rates/forms.'
            },
            {
              q: 'An insurer that transfers a portion of its hurricane exposure to another insurer is engaging in:',
              choices: ['Subrogation', 'Retrocession by the state', 'Reinsurance', 'Adverse selection'],
              answer: 2,
              explain: 'Reinsurance is risk transfer between insurers — the ceding company pays a premium to the reinsurer to take part of its risk. It is a major cost component of Florida property insurance.'
            }
          ]
        }
      ],
      terms: [
        { term: 'Stock insurer', def: 'An insurance company owned by shareholders, who elect the board and receive corporate dividends. Issues non-participating policies.' },
        { term: 'Mutual insurer', def: 'An insurance company owned by its policyholders. Issues participating policies and may pay policy dividends.' },
        { term: 'Participating policy', def: 'A policy (typically from a mutual insurer) eligible for policy dividends.' },
        { term: 'Reciprocal exchange', def: 'An unincorporated group of subscribers insuring one another, administered by an attorney-in-fact.' },
        { term: 'Lloyd’s of London', def: 'A marketplace where underwriting syndicates, not a single company, accept large or unusual risks.' },
        { term: 'Domestic insurer', def: 'An insurer chartered in the state in question (Florida, for this course).' },
        { term: 'Foreign insurer', def: 'An insurer chartered in another U.S. state.' },
        { term: 'Alien insurer', def: 'An insurer chartered in a country other than the United States.' },
        { term: 'Certificate of authority', def: 'The license issued by a state permitting an insurer to transact insurance there; the holder is an authorized (admitted) insurer.' },
        { term: 'Authorized (admitted) insurer', def: 'An insurer holding a certificate of authority to transact insurance in the state.' },
        { term: 'Surplus lines insurance', def: 'Coverage placed with an eligible non-admitted insurer through a surplus lines agent when authorized insurers will not write the risk.' },
        { term: 'Reinsurance', def: 'A contract under which one insurer (the ceding company) transfers part of its risk to another insurer (the reinsurer).' },
        { term: 'Ceding company', def: 'The insurer that transfers risk to a reinsurer.' },
        { term: 'Residual market', def: 'A government-created market of last resort for risks the voluntary market will not insure.' },
        { term: 'A.M. Best', def: 'The best-known rating agency for insurer financial strength (scale A++ to F).' }
      ]
    },

    /* ---------------- Lesson 1.4 ---------------- */
    {
      id: 'u1l4',
      title: 'Agents, Agency Law & the Florida License Family',
      minutes: 15,
      objectives: [
        'Explain the law of agency and the three types of agent authority',
        'Distinguish agents from brokers and describe fiduciary duty',
        'Identify the main Florida license types — 2-20, 20-44, 4-40 — and what each may do',
        'Describe what a 4-40 customer representative may and may not do, and the supervision requirement'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>The law of agency</h3>
<p>An <span class="kt" title="A person authorized to act on behalf of another (the principal)">agent</span> is someone authorized to act on behalf of a <strong>principal</strong> — in insurance, the principal is the <strong>insurance company</strong>. The crucial legal consequence: <strong>the acts of an agent within the scope of authority are the acts of the insurer itself.</strong> Knowledge given to the agent is presumed known by the company; money paid to the agent is presumed paid to the company.</p>
<h4>Three kinds of authority</h4>`
        },
        {
          type: 'steps',
          title: 'How an agent gets authority',
          items: [
            { title: 'Express authority', text: 'Authority explicitly granted in writing in the agency agreement/contract — "you may solicit applications and bind coverage up to $500,000."' },
            { title: 'Implied authority', text: 'Authority not written down but reasonably necessary to carry out the express duties — using the company logo, collecting initial premiums, explaining coverage.' },
            { title: 'Apparent authority', text: 'Authority the public reasonably believes the agent has because of the insurer’s conduct or appearances it permitted — signage, business cards, blank forms. If the insurer let it look authorized, the insurer is bound.' }
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>An insurer terminates an agent but never collects its application forms or signage. The "former" agent takes an application and a premium check from a customer who has no idea of the termination. The insurer is likely on the hook under <strong>apparent authority</strong> — it allowed the appearance of an agency relationship to continue.</p>`
        },
        {
          type: 'text',
          html: `<h3>Agent vs. broker, and the fiduciary duty</h3>
<p>An <strong>agent</strong> legally represents the <em>insurer</em>. A <strong>broker</strong> represents the <em>buyer</em>, shopping among companies (Florida personal lines is overwhelmingly an agency system — and Florida law treats anyone transacting insurance for an insurer as its agent). Either way, anyone who handles other people’s premium money is a <span class="kt" title="A person in a position of special trust handling another’s money or affairs">fiduciary</span>: premiums and return premiums are <strong>trust funds</strong>, must not be commingled with personal funds, and must be promptly forwarded. Misusing them is conversion — essentially theft — and a license-killer.</p>
<h3>The Florida license family</h3>
<p>Florida licenses people, not job titles. The licenses you must be able to tell apart:</p>`
        },
        {
          type: 'table',
          caption: 'Key Florida property & casualty license types',
          headers: ['License', 'Name', 'What it permits'],
          rows: [
            ['<strong>2-20</strong>', 'General Lines Agent', 'Full property & casualty authority — personal AND commercial lines. May own/run an agency, bind coverage, appoint customer representatives.'],
            ['<strong>20-44</strong>', 'Personal Lines Agent', 'Property & casualty limited to <em>personal lines</em> — products sold to individuals and families for noncommercial purposes.'],
            ['<strong>4-40</strong>', 'Customer Representative', 'Salaried employee of an agency working <em>in the office</em> under the supervision of a licensed general lines or personal lines agent. Assists with transacting insurance the supervising agent is authorized to handle.'],
            ['<strong>0-55</strong>', 'Claims Adjuster (all-lines)', 'Investigates and settles claims (separate career path; mentioned for contrast).']
          ]
        },
        {
          type: 'callout', variant: 'florida', title: 'Florida Law — what a 4-40 may and may not do',
          html: `<p>A customer representative works under a supervising agent and generally <strong>may</strong>: take applications and information, provide quotes, explain products, accept premiums at the office, service existing policies, and discuss coverages incidental to that service.</p>
<p>A 4-40 <strong>may NOT</strong>: work outside the supervision of the appointing agent/agency, solicit or transact insurance away from the agency office as an independent operator, bind coverage on the agency’s behalf unless authorized procedures permit it, sell lines the supervising agent is not licensed for, or be compensated primarily by commissions dependent on production (compensation must be primarily salary-based).</p>
<p>The 4-40 is appointed by the <strong>agency or agent</strong> — not by an insurance company.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — agency law',
          questions: [
            {
              q: 'A customer pays a premium to a licensed agent, but the agent never forwards the money and the insurer claims the policy lapsed. Under agency law:',
              choices: [
                'The customer is unprotected and must pay again',
                'Payment to the agent is considered payment to the insurer, so coverage stands',
                'The agent’s appointment is automatically transferred',
                'The customer can only sue the agent’s spouse'
              ],
              answer: 1,
              explain: 'Within the scope of authority, the agent’s acts are the insurer’s acts — money received by the agent is treated as received by the company. The insurer’s remedy is against its own agent.'
            },
            {
              q: 'Authority that is not spelled out in the agency contract but is reasonably necessary to carry out the agent’s duties is called:',
              choices: ['Express authority', 'Apparent authority', 'Implied authority', 'Fiduciary authority'],
              answer: 2,
              explain: 'Implied authority fills the practical gaps around the written (express) grant. Apparent authority arises from appearances the insurer permits third parties to rely on.'
            },
            {
              q: 'Which Florida license allows the holder to transact BOTH personal and commercial property/casualty insurance?',
              choices: ['4-40 Customer Representative', '20-44 Personal Lines Agent', '2-20 General Lines Agent', '0-55 Adjuster'],
              answer: 2,
              explain: 'The 2-20 general lines agent has full P&C authority. The 20-44 is limited to personal lines, and the 4-40 assists a supervising agent from the agency office.'
            },
            {
              q: 'A 4-40 customer representative is asked to spend Saturdays selling auto policies at a kiosk in the mall, alone, paid purely on commission. This arrangement is:',
              choices: [
                'Permitted if the kiosk displays the agency name',
                'Improper — a 4-40 must work under supervision from the agency office and primarily for salary',
                'Permitted with the customer’s written consent',
                'Permitted because auto is a personal line'
              ],
              answer: 1,
              explain: 'A customer representative’s authority exists inside the agency, under the supervision of the appointing agent, with compensation primarily salary-based — not independent commission selling in the field.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 1.4 key terms',
          cards: [
            { front: 'Law of agency', back: 'The acts of an agent within the scope of authority are legally the acts of the principal (the insurer).' },
            { front: 'Express authority', back: 'Authority explicitly granted in the written agency agreement.' },
            { front: 'Implied authority', back: 'Unwritten authority reasonably necessary to carry out express duties.' },
            { front: 'Apparent authority', back: 'Authority the public reasonably believes exists because of appearances the insurer permitted.' },
            { front: 'Fiduciary', back: 'A person in a position of special financial trust — premiums held are trust funds that must never be commingled.' },
            { front: '2-20 license', back: 'Florida General Lines Agent — full personal and commercial P&C authority.' },
            { front: '20-44 license', back: 'Florida Personal Lines Agent — P&C limited to personal lines products.' },
            { front: '4-40 license', back: 'Florida Customer Representative — salaried, in-office, supervised by a general lines or personal lines agent.' }
          ]
        }
      ],
      terms: [
        { term: 'Agent', def: 'A person authorized to represent and act on behalf of an insurer (the principal) in transacting insurance.' },
        { term: 'Principal', def: 'The party an agent represents — in insurance, the insurance company.' },
        { term: 'Express authority', def: 'Authority specifically granted to an agent in the written agency contract.' },
        { term: 'Implied authority', def: 'Authority not expressly granted but reasonably necessary for the agent to perform express duties.' },
        { term: 'Apparent authority', def: 'Authority a third party reasonably believes an agent has, based on appearances the principal allowed.' },
        { term: 'Broker', def: 'A person who represents the insurance buyer rather than the insurer when placing coverage.' },
        { term: 'Fiduciary duty', def: 'The obligation of special trust owed when handling another’s funds; premiums are trust funds that must not be commingled.' },
        { term: 'Commingling', def: 'Improperly mixing client or insurer funds (premiums) with personal or business funds.' },
        { term: '2-20 General Lines Agent', def: 'Florida license with full property and casualty authority, personal and commercial.' },
        { term: '20-44 Personal Lines Agent', def: 'Florida license limited to property and casualty products sold to individuals for noncommercial purposes.' },
        { term: '4-40 Customer Representative', def: 'Florida license for a salaried agency employee who assists in transacting personal lines under the supervision of a licensed agent, from the agency office.' },
        { term: 'Appointment', def: 'The authority granted by an insurer (or, for a 4-40, by an agent/agency) to transact insurance on its behalf; recorded with the Florida DFS.' }
      ]
    },

    /* ---------------- Lesson 1.5 ---------------- */
    {
      id: 'u1l5',
      title: 'Underwriting, Rating & the Life of a Policy',
      minutes: 14,
      objectives: [
        'Trace a policy from application through issuance, renewal, and termination',
        'Explain what underwriters do and what sources of information they may use',
        'Define binders and explain their limits',
        'Distinguish cancellation from nonrenewal, and flat vs. short-rate vs. pro-rata return premiums'
      ],
      blocks: [
        {
          type: 'text',
          html: `<h3>From application to policy</h3>
<p>The <span class="kt" title="The form completed by the applicant that becomes the insurer’s primary source of underwriting information">application</span> is the starting document — the applicant’s offer, and the underwriter’s primary information source. In personal lines the producer (and often the customer representative) gathers it: property details, prior losses, drivers and vehicles, protective devices, occupancy.</p>
<p><span class="kt" title="The process of selecting, classifying, and pricing risks">Underwriting</span> is the insurer’s process of <strong>selecting</strong> which risks to accept, <strong>classifying</strong> them into groups of similar expected loss, and <strong>pricing</strong> them. The underwriter’s mission is to defeat adverse selection and build a profitable, balanced book. Information sources include the application, inspection reports, loss-history databases (CLUE reports for property and auto), motor vehicle records (MVRs), credit-based insurance scores where lawful, and photographs or inspections of the property.</p>`
        },
        {
          type: 'callout', variant: 'definition', title: 'Definition — Binder',
          html: `<p>A <strong>binder</strong> is temporary evidence of coverage issued before the policy itself — oral or written, by an authorized agent or the insurer. It lasts until the policy is issued or the binder is canceled, and it is <strong>not</strong> a guarantee the policy will be issued. Binders matter at car dealerships and real-estate closings, where proof of coverage is needed the same day.</p>`
        },
        {
          type: 'text',
          html: `<h3>Rating — turning risk into a price</h3>
<p>Rating converts the underwriter’s classification into a premium. The <strong>rate</strong> is the price per unit of exposure (e.g., per $1,000 of dwelling value; per car); the <strong>premium</strong> is the rate multiplied by the number of exposure units, then adjusted by credits and debits.</p>
<ul>
<li><strong>Class rating</strong> — most personal lines: everyone in the same class (similar home, territory, construction, protection class) gets the same base rate.</li>
<li><strong>Individual/judgment rating</strong> — unique risks priced one at a time (rare in personal lines).</li>
<li><strong>Merit/experience adjustments</strong> — credits and surcharges that move an individual off the class base: claim-free discounts, hurricane mitigation credits, multi-policy discounts, accident surcharges.</li>
</ul>
<p>Florida requires rates to be <strong>adequate</strong> (enough to pay losses), <strong>not excessive</strong>, and <strong>not unfairly discriminatory</strong> — discrimination between insureds is only lawful when based on actuarially supported differences in expected loss.</p>`
        },
        {
          type: 'chart',
          chartType: 'bar',
          title: 'What moves a Florida homeowners premium (illustrative effect on base rate)',
          labels: ['Older roof (15+ yrs)', 'Coastal wind zone', 'Prior claims', 'Hurricane shutters', 'New roof', 'Monitored alarm'],
          datasets: [{ label: 'Premium effect', data: [35, 35, 25, -15, -20, -5] }],
          suffix: '%',
          note: 'Illustrative directional effects: surcharges push premium up; mitigation credits (negative bars) pull it down. Florida’s uniform mitigation verification inspection documents the credits.'
        },
        {
          type: 'text',
          html: `<h3>Ending a policy: cancellation vs. nonrenewal</h3>
<p><strong>Cancellation</strong> ends coverage <em>during</em> the policy term. <strong>Nonrenewal</strong> is the insurer (or insured) declining to continue at the natural end of the term. Both are heavily regulated — Florida requires advance written notice with the reason, and the required notice period depends on the line and circumstances (Florida specifics are covered with exact day-counts in Units 5, 7, and 9).</p>
<h4>Return premium math</h4>`
        },
        {
          type: 'table',
          caption: 'How unearned premium is returned',
          headers: ['Method', 'When it applies', 'What the insured gets back'],
          rows: [
            ['<strong>Pro-rata</strong>', 'Insurer cancels (or insurer-initiated termination)', 'The exact unused share — full unearned premium, no penalty'],
            ['<strong>Short-rate</strong>', 'Insured cancels mid-term', 'Unearned premium minus a service penalty — slightly less than pro-rata'],
            ['<strong>Flat</strong>', 'Policy canceled as of inception (never took effect)', '100% of premium returned']
          ]
        },
        {
          type: 'callout', variant: 'example',
          html: `<p>A 12-month policy with a $1,200 premium is canceled exactly at the 6-month mark. Unearned premium is $600. If the <strong>insurer</strong> cancels: the insured receives the full $600 (pro-rata). If the <strong>insured</strong> cancels: the refund is a bit less than $600 (short-rate penalty). If the policy is flat-canceled from day one, the full $1,200 comes back.</p>`
        },
        {
          type: 'quiz',
          title: 'Checkpoint — underwriting & the policy lifecycle',
          questions: [
            {
              q: 'The primary purpose of underwriting is to:',
              choices: [
                'Maximize the number of policies sold',
                'Protect the insurer against adverse selection by selecting and properly pricing risks',
                'Investigate claims after losses occur',
                'Guarantee every applicant receives coverage'
              ],
              answer: 1,
              explain: 'Underwriting selects, classifies, and prices risks so the pool is balanced and premiums match expected losses — the defense against adverse selection. Claims investigation belongs to adjusters.'
            },
            {
              q: 'A binder issued by an authorized agent:',
              choices: [
                'Permanently guarantees the policy will be issued',
                'Provides temporary evidence of coverage until the policy is issued or the binder is canceled',
                'Is illegal in Florida',
                'May only be issued after the policy is delivered'
              ],
              answer: 1,
              explain: 'A binder is temporary proof of coverage — it can be oral or written, and it ends when the policy is issued or the binder is properly canceled. It does not guarantee issuance.'
            },
            {
              q: 'An insured cancels her auto policy four months into a twelve-month term. The return premium will be calculated:',
              choices: ['Pro-rata', 'Short-rate', 'Flat', 'There is no refund when the insured cancels'],
              answer: 1,
              explain: 'When the insured cancels mid-term, most policies return the unearned premium short-rate — pro-rata minus a service charge. Pro-rata applies when the insurer cancels.'
            },
            {
              q: 'Florida law requires that insurance rates be all of the following EXCEPT:',
              choices: ['Adequate', 'Not excessive', 'Not unfairly discriminatory', 'Identical for every insured in the state'],
              answer: 3,
              explain: 'Rates must be adequate, not excessive, and not unfairly discriminatory. Different prices for different insureds are lawful — and required — when based on real differences in expected loss.'
            }
          ]
        },
        {
          type: 'flashcards',
          title: 'Lesson 1.5 key terms',
          cards: [
            { front: 'Underwriting', back: 'Selecting, classifying, and pricing risks to protect the insurer from adverse selection.' },
            { front: 'Binder', back: 'Temporary evidence of coverage before policy issuance; ends when the policy is issued or the binder is canceled.' },
            { front: 'Rate vs. premium', back: 'Rate = price per exposure unit. Premium = rate × units, adjusted by credits/debits.' },
            { front: 'Cancellation', back: 'Termination of coverage during the policy term.' },
            { front: 'Nonrenewal', back: 'Declining to continue coverage at the end of the policy term.' },
            { front: 'Pro-rata return', back: 'Full unearned premium returned — used when the INSURER cancels.' },
            { front: 'Short-rate return', back: 'Unearned premium minus a penalty — used when the INSURED cancels mid-term.' },
            { front: 'CLUE report', back: 'Comprehensive Loss Underwriting Exchange — the claims-history database underwriters check.' }
          ]
        }
      ],
      terms: [
        { term: 'Underwriting', def: 'The insurer’s process of selecting, classifying, and pricing risks.' },
        { term: 'Application', def: 'The form completed by an applicant; the primary source of underwriting information and the applicant’s offer to contract.' },
        { term: 'Binder', def: 'Temporary evidence of insurance coverage issued before the policy, lasting until the policy is issued or the binder is canceled.' },
        { term: 'Rate', def: 'The price of insurance per unit of exposure.' },
        { term: 'Premium', def: 'The total price of coverage: rate multiplied by exposure units, adjusted by credits and surcharges.' },
        { term: 'Cancellation', def: 'Termination of an insurance policy during its term.' },
        { term: 'Nonrenewal', def: 'A decision by insurer or insured not to continue coverage at the end of the policy term.' },
        { term: 'Pro-rata cancellation', def: 'Return of the full unearned premium with no penalty, used when the insurer cancels.' },
        { term: 'Short-rate cancellation', def: 'Return of unearned premium minus a service penalty, used when the insured cancels mid-term.' },
        { term: 'Unearned premium', def: 'The portion of paid premium covering the part of the policy period that has not yet elapsed.' },
        { term: 'CLUE report', def: 'Comprehensive Loss Underwriting Exchange — a database of prior insurance claims used in underwriting.' },
        { term: 'Motor vehicle record (MVR)', def: 'A driver’s state driving history — violations, suspensions — used in auto underwriting.' }
      ]
    }
  ],

  /* ---------------- Unit 1 Exam ---------------- */
  exam: {
    questions: [
      {
        q: 'Insurance is best described as a mechanism for:',
        choices: [
          'Eliminating the possibility of loss',
          'Transferring pure risk to an insurer that pools many similar risks',
          'Converting speculative risk into pure risk',
          'Guaranteeing a profit after a covered loss'
        ],
        answer: 1,
        explain: 'Insurance transfers the financial consequences of pure risk to an insurer, which uses pooling and the law of large numbers to make group losses predictable. It never eliminates the event or creates profit.'
      },
      {
        q: 'Which of the following is the best example of a moral hazard?',
        choices: [
          'A wood-frame house in a high-wind zone',
          'A business owner who burns his failing store for the insurance money',
          'A driver who speeds because traffic is light',
          'A homeowner who forgets to replace smoke-detector batteries'
        ],
        answer: 1,
        explain: 'Moral hazard is dishonesty — intentionally causing or faking losses. Carelessness (batteries) is morale hazard; the wood-frame house is a physical hazard.'
      },
      {
        q: 'An insured’s 10-year-old roof is destroyed by hail and the insurer pays its depreciated value rather than the cost of a brand-new roof. The principle at work is:',
        choices: ['Subrogation', 'Indemnity', 'Adhesion', 'Utmost good faith'],
        answer: 1,
        explain: 'Indemnity restores the insured to the pre-loss financial position — no better. Paying actual cash value (replacement cost minus depreciation) prevents profit from the loss.'
      },
      {
        q: 'In property insurance, insurable interest must exist:',
        choices: ['At the time of application only', 'At the time of loss', 'Continuously for five years', 'Only when the policy is assigned'],
        answer: 1,
        explain: 'Property insurance requires insurable interest at the time of loss — without a financial stake at that moment, there is nothing to indemnify.'
      },
      {
        q: 'Which element of a valid contract is satisfied by the applicant’s premium payment and truthful statements on the application?',
        choices: ['Competent parties', 'Legal purpose', 'Consideration', 'Acceptance'],
        answer: 2,
        explain: 'Consideration is the value each party brings: the insured’s premium and representations, exchanged for the insurer’s promise to pay covered losses.'
      },
      {
        q: 'A contract in which only the insurer makes a legally enforceable promise is called:',
        choices: ['Aleatory', 'Bilateral', 'Unilateral', 'Conditional'],
        answer: 2,
        explain: 'Unilateral means one-sided promising: the insurer must perform if conditions are met, while the insured makes no enforceable promise (they can simply stop paying).'
      },
      {
        q: 'From Florida’s viewpoint, an insurer chartered in London, England and authorized to do business in Florida is:',
        choices: ['A domestic insurer', 'A foreign insurer', 'An alien insurer', 'An unauthorized insurer'],
        answer: 2,
        explain: 'Alien = chartered outside the United States. Foreign = chartered in another U.S. state. Authorization is separate from domicile — this alien insurer is authorized.'
      },
      {
        q: 'The Florida license that permits a salaried employee to assist a supervising agent with personal lines transactions from the agency office is the:',
        choices: ['2-20', '20-44', '4-40', '6-20'],
        answer: 2,
        explain: 'The 4-40 customer representative license. The 2-20 is the full general lines agent; the 20-44 is the personal lines agent.'
      },
      {
        q: 'An agent hands a customer a company-branded receipt for a premium payment even though the agency agreement says nothing about receipts. The authority to do so is:',
        choices: ['Express', 'Implied', 'Apparent', 'Fiduciary'],
        answer: 1,
        explain: 'Implied authority covers acts reasonably necessary to perform express duties even though not specifically written into the contract.'
      },
      {
        q: 'Premium funds held by an agency before being forwarded to the insurer are legally:',
        choices: [
          'The agency’s operating revenue',
          'Trust funds held in a fiduciary capacity',
          'The agent’s commission',
          'A loan from the policyholder'
        ],
        answer: 1,
        explain: 'Premiums are trust funds. Commingling them with operating money or using them personally is conversion and grounds for license revocation.'
      },
      {
        q: 'Coverage for a beachfront home that every authorized insurer has declined is legally placed with an eligible non-admitted insurer. This is the:',
        choices: ['Residual reinsurance market', 'Surplus lines market', 'Federal flood program', 'Assigned risk plan'],
        answer: 1,
        explain: 'Surplus lines is the lawful route to non-admitted insurers for risks the admitted market refuses — placed by a surplus lines agent, without FIGA guaranty protection.'
      },
      {
        q: 'A binder is BEST described as:',
        choices: [
          'A permanent insurance contract',
          'A receipt proving premium payment',
          'Temporary evidence of coverage pending policy issuance',
          'An endorsement modifying coverage'
        ],
        answer: 2,
        explain: 'A binder provides temporary coverage evidence until the policy is issued or the binder is canceled; it does not guarantee the policy will be issued.'
      },
      {
        q: 'When the INSURER cancels a policy mid-term, the unearned premium must be returned:',
        choices: ['Short-rate', 'Pro-rata', 'Flat', 'Not at all'],
        answer: 1,
        explain: 'Insurer-initiated cancellation returns the full unearned premium (pro-rata). Short-rate (with penalty) applies when the insured cancels.'
      },
      {
        q: 'Underwriting exists primarily to combat:',
        choices: ['The law of large numbers', 'Adverse selection', 'Subrogation', 'Apparent authority'],
        answer: 1,
        explain: 'Without underwriting, the people most likely to have losses would dominate the pool (adverse selection), making adequate pricing impossible.'
      },
      {
        q: 'Which requirement of an ideally insurable risk is violated when one event can damage a huge share of an insurer’s policyholders at once?',
        choices: [
          'The loss must be due to chance',
          'The loss must be definite and measurable',
          'The loss must not be catastrophic',
          'The premium must be economically feasible'
        ],
        answer: 2,
        explain: 'Catastrophic concentration — hurricane, flood, war — breaks the independence the pool relies on. It is why such perils get special treatment: exclusions, reinsurance, the NFIP, and Florida’s Cat Fund.'
      }
    ]
  }
});
