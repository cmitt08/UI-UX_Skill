/* Final Exam dedicated question bank — 60 questions across the whole course.
   The app samples these plus all unit-exam questions to build each
   100-question timed final. */

/* Part 1: General concepts, contracts & marketplace (12) + Property (15) + Other lines (3) */
window.PL.finalExam.questions.push(
  {
    q: 'An applicant for homeowners insurance deliberately fails to mention that her roof was damaged in a storm two years ago and never repaired. This is best described as:',
    choices: ['A breach of warranty', 'Concealment of a material fact', 'An innocent misrepresentation', 'Estoppel'],
    answer: 1,
    explain: 'Intentionally withholding a material fact the insurer would want to know is concealment, and it can void the policy. A misrepresentation is an affirmative false statement; this was silence.'
  },
  {
    q: 'Which situation involves a speculative risk?',
    choices: [
      'A home exposed to hurricane damage',
      'A driver who may cause an at-fault accident',
      'An investor buying shares hoping the price rises',
      'A boat that may sink in a storm'
    ],
    answer: 2,
    explain: 'Speculative risk includes the chance of gain — investing qualifies and is uninsurable. The other three are pure risks: loss or no loss only.'
  },
  {
    q: 'The insurer’s consideration in an insurance contract is:',
    choices: [
      'The premium payment',
      'The promise to pay covered losses',
      'The agent’s commission',
      'The application'
    ],
    answer: 1,
    explain: 'Each side gives consideration: the insured pays premium and makes truthful representations; the insurer promises to indemnify covered losses.'
  },
  {
    q: 'A policy provision is ambiguous and both interpretations are reasonable. A Florida court will most likely:',
    choices: [
      'Interpret it in favor of the insured because the policy is a contract of adhesion',
      'Interpret it in favor of the insurer as drafter',
      'Void the entire policy',
      'Send the dispute to the NAIC'
    ],
    answer: 0,
    explain: 'Adhesion contracts are construed against the drafter. The insurer wrote every word, so ambiguity is resolved in the insured’s favor.'
  },
  {
    q: 'After paying its insured $18,000 for a crash caused by another driver, the insurer sues that driver to recover the payment. This right is:',
    choices: ['Salvage', 'Abandonment', 'Subrogation', 'Arbitration'],
    answer: 2,
    explain: 'Subrogation lets the insurer step into the insured’s shoes against the responsible party — preventing double recovery and holding the at-fault party accountable.'
  },
  {
    q: 'An insurer chartered in Georgia and holding a Florida certificate of authority is, in Florida:',
    choices: ['A domestic, authorized insurer', 'A foreign, authorized insurer', 'An alien, unauthorized insurer', 'A surplus lines insurer'],
    answer: 1,
    explain: 'Chartered in another state = foreign; the certificate of authority makes it authorized. Alien means chartered outside the U.S.'
  },
  {
    q: 'Which is TRUE of surplus lines insurance in Florida?',
    choices: [
      'It is backed by FIGA if the insurer fails',
      'It may be placed only after coverage is unavailable from authorized insurers, through a licensed surplus lines agent',
      'Any 4-40 may export risks to surplus lines carriers',
      'Its rates must be approved by the OIR'
    ],
    answer: 1,
    explain: 'Surplus lines is the lawful market of last resort via specially licensed agents — without FIGA protection or state-approved rates and forms.'
  },
  {
    q: 'A producer collects a premium but spends it on office rent, planning to replace it at commission time. The producer has:',
    choices: [
      'Done nothing wrong if the insurer is eventually paid',
      'Unlawfully converted fiduciary funds',
      'Made a permissible short-term loan',
      'Engaged in twisting'
    ],
    answer: 1,
    explain: 'Premiums are trust funds. Using them — even temporarily with intent to repay — is conversion: commingling and misuse of fiduciary funds, grounds for revocation and prosecution.'
  },
  {
    q: 'An insured cancels his policy halfway through the term. The refund is $480 although half the annual premium is $520. The difference reflects:',
    choices: ['Pro-rata cancellation', 'Short-rate cancellation', 'Flat cancellation', 'An illegal penalty'],
    answer: 1,
    explain: 'When the insured cancels mid-term, the insurer may retain a service charge — the short-rate method. Pro-rata (full unearned premium) applies when the insurer cancels.'
  },
  {
    q: 'The underwriting tool that reports a property’s past insurance claims is the:',
    choices: ['MVR', 'CLUE report', 'Elevation certificate', 'Dec page'],
    answer: 1,
    explain: 'The Comprehensive Loss Underwriting Exchange (CLUE) database shows prior claims on the property and applicant. MVRs cover driving records.'
  },
  {
    q: 'A binder issued Friday for a homeowners policy is BEST described as:',
    choices: [
      'A guarantee the policy will be issued',
      'Temporary evidence of coverage until the policy is issued or the binder is canceled',
      'An endorsement',
      'A premium receipt with no legal effect'
    ],
    answer: 1,
    explain: 'Binders provide real but temporary coverage evidence pending underwriting; they end when the policy issues or the binder is properly canceled, and issuance is not guaranteed.'
  },
  {
    q: 'Which of the following best illustrates the principle of indemnity?',
    choices: [
      'Paying replacement cost on a brand-new roof',
      'Paying the depreciated value of a 12-year-old roof so the insured is restored, not enriched',
      'Paying double for sentimental value',
      'Waiving the deductible for loyal customers'
    ],
    answer: 1,
    explain: 'Indemnity restores the pre-loss financial position without profit. ACV settlements, limits, and subrogation all enforce it.'
  },
  {
    q: 'The part of an insurance policy that states WHO is insured, for WHAT amounts, for WHAT period, and for WHAT premium is the:',
    choices: ['Insuring agreement', 'Conditions', 'Declarations', 'Exclusions'],
    answer: 2,
    explain: 'The declarations page personalizes the contract with names, addresses, limits, term, and premium. The insuring agreement is the insurer’s broad promise.'
  },
  {
    q: 'A homeowners policy requires insurance of at least 80% of replacement cost for full RC settlement. A $250,000-RC home carries $150,000 of coverage when a $20,000 covered loss occurs. Ignoring the deductible, the insurer pays:',
    choices: ['$20,000', '$15,000', '$12,000', '$10,000'],
    answer: 1,
    explain: 'Required: 80% × $250,000 = $200,000. Carried/required = 150/200 = 75%; 75% × $20,000 = $15,000 (or ACV if greater). Insuring to value avoids the penalty.'
  },
  {
    q: 'Two policies cover the same $30,000 property loss: Policy A with a $60,000 limit and Policy B with a $30,000 limit, both with pro-rata other-insurance clauses. Policy A pays:',
    choices: ['$10,000', '$15,000', '$20,000', '$30,000'],
    answer: 2,
    explain: 'Total limits = $90,000. A’s share = 60/90 = 2/3 × $30,000 = $20,000; B pays $10,000. Pro-rata contribution enforces indemnity across insurers.'
  },
  {
    q: 'Which dwelling form covers the dwelling on an open-peril basis?',
    choices: ['DP-1', 'DP-2', 'DP-3', 'All DP forms'],
    answer: 2,
    explain: 'The DP-3 is the special form — open peril on the dwelling and other structures (contents stay named-peril). DP-1 is basic and DP-2 broad named perils.'
  },
  {
    q: 'A landlord insures a rental house under a DP-3. A tenant’s guest is injured on the property and sues the landlord. The unendorsed DP-3 provides:',
    choices: [
      'Coverage E personal liability',
      'No liability coverage — dwelling policies exclude it unless endorsed',
      'Medical payments only',
      '$100,000 of automatic liability'
    ],
    answer: 1,
    explain: 'Dwelling forms are property-only. Liability must be added by endorsement or through a separate policy — a key DP vs. HO difference.'
  },
  {
    q: 'Under DP forms, Coverage D (fair rental value) pays when:',
    choices: [
      'The owner’s primary residence becomes unlivable',
      'A covered loss makes the rented portion uninhabitable, replacing the lost rent',
      'The tenant simply moves out',
      'Market rents decline'
    ],
    answer: 1,
    explain: 'Fair rental value replaces rental income lost because a covered peril made the rented premises unfit — not vacancy or market losses.'
  },
  {
    q: 'Which peril is covered by the unendorsed DP-1 basic form?',
    choices: ['Theft', 'Internal explosion', 'Falling objects', 'Weight of ice and snow'],
    answer: 1,
    explain: 'The base DP-1 covers fire, lightning, and internal explosion (extended coverage and VMM are optional add-ons). Theft and the broad-form perils require a broader form or endorsement.'
  },
  {
    q: 'An HO-3 insured’s detached workshop (a separate structure) burns. With Coverage A of $300,000, the maximum automatically available for the workshop is:',
    choices: ['$15,000', '$30,000', '$60,000', '$150,000'],
    answer: 1,
    explain: 'Coverage B (other structures) is 10% of Coverage A — $30,000 here — as an additional amount of insurance.'
  },
  {
    q: 'An insured’s laptop is stolen from her hotel room in Spain. Her Florida HO-3:',
    choices: [
      'Provides no coverage outside the U.S.',
      'Covers it — Coverage C applies worldwide, subject to the deductible and any sub-limits',
      'Covers it only with a travel endorsement',
      'Covers 10% because hotels are other residences'
    ],
    answer: 1,
    explain: 'Coverage C is worldwide. The 10% "other residence" limitation applies to property USUALLY KEPT at another residence, not property traveling with the insured.'
  },
  {
    q: 'Which loss would the HO-3 EXCLUDE?',
    choices: [
      'Lightning destroys the electronics panel',
      'A windstorm tears off shingles',
      'Rising storm-surge floodwater fills the ground floor',
      'A burst supply line soaks the kitchen'
    ],
    answer: 2,
    explain: 'Flood — including surge, surface water, and tidal overflow — is excluded from all standard HO/DP forms and needs a flood policy (NFIP or private).'
  },
  {
    q: 'The insured’s golf cart injures a pedestrian while being used to play golf. Under HO Section II this is:',
    choices: [
      'Excluded as a motor vehicle in all cases',
      'Covered — golf carts used for golfing fall within a motor-vehicle exclusion exception',
      'Covered only under Part D of a PAP',
      'Covered by workers compensation'
    ],
    answer: 1,
    explain: 'Section II excludes most motor vehicle liability, but golf carts used for golfing (and certain low-power recreational uses) are excepted — a classic exam nuance.'
  },
  {
    q: 'A guest’s fur coat is destroyed when the insured’s house fire spreads to the coat closet. The HO-3 may cover the guest’s property under:',
    choices: [
      'Coverage C, which can include property of guests while on the residence premises',
      'Coverage B',
      'Only the guest’s own policy',
      'Coverage D'
    ],
    answer: 0,
    explain: 'At the insured’s request, Coverage C may cover property of guests and residence employees while on the premises.'
  },
  {
    q: 'Hurricane winds make an insured Florida home unlivable for three months. The HO coverage paying for the family’s rental house and extra living costs is:',
    choices: ['Coverage A', 'Coverage C', 'Coverage D — loss of use', 'Ordinance or law'],
    answer: 2,
    explain: 'Coverage D pays additional living expenses (and fair rental value where applicable) while a covered loss makes the home uninhabitable.'
  },
  {
    q: 'Under Florida law, the notice that a homeowners policy does NOT cover flood must appear:',
    choices: [
      'Nowhere — flood exclusion is implied',
      'In the policy in clear, prominent (bold) language',
      'Only in the agent’s file',
      'Only on Citizens policies'
    ],
    answer: 1,
    explain: 'Florida requires a prominent statutory flood notice so insureds cannot miss that flood requires separate coverage.'
  },
  {
    q: 'A Citizens policyholder receives a takeout offer from a private insurer at a premium within the eligibility threshold. The policyholder:',
    choices: [
      'May always remain with Citizens regardless',
      'Generally loses Citizens eligibility because comparable private coverage is available within the 20% rule',
      'Must pay both premiums',
      'Automatically becomes uninsured'
    ],
    answer: 1,
    explain: 'Citizens is the market of last resort: a comparable private offer within 20% of the Citizens premium ends eligibility, including at takeout.'
  },
  {
    q: 'The mandatory Florida coverage that responds when a home is condemned and ordered vacated after an abrupt ground collapse with a visible depression and structural damage is:',
    choices: [
      'Optional sinkhole loss coverage',
      'Catastrophic ground cover collapse',
      'Earth movement coverage',
      'Ordinance or law'
    ],
    answer: 1,
    explain: 'Those are the four statutory criteria of catastrophic ground cover collapse — mandatory in Florida residential policies. Lesser sinkhole damage needs the optional coverage.'
  },
  {
    q: 'A personal umbrella policy typically requires the insured to:',
    choices: [
      'Drop all underlying coverage',
      'Maintain specified underlying liability limits on home and auto policies',
      'Buy flood insurance',
      'Insure only one vehicle'
    ],
    answer: 1,
    explain: 'Umbrellas sit excess of required underlying limits (e.g., 250/500 auto, $300k HO). Letting underlying coverage lapse leaves the insured paying the gap.'
  },
  {
    q: 'A scheduled personal articles floater typically provides:',
    choices: [
      'Named-peril coverage with a large deductible',
      'Open-peril coverage at agreed/appraised values, usually with no deductible',
      'Liability coverage for valuables',
      'ACV-only settlements'
    ],
    answer: 1,
    explain: 'Scheduling valuables buys open-peril protection (including mysterious disappearance) at appraised values, generally deductible-free — solving the HO sub-limit problem.'
  }
);

/* Part 2: Auto & Florida auto law (15) + Other lines (3) + Regulation & ethics (12) */
window.PL.finalExam.questions.push(
  {
    q: 'To register a private passenger vehicle in Florida, the owner must carry:',
    choices: [
      'Bodily injury liability of 10/20',
      'PIP of $10,000 and property damage liability of $10,000',
      'Comprehensive and collision',
      'Uninsured motorist coverage of 10/20'
    ],
    answer: 1,
    explain: 'Florida registration requires no-fault PIP ($10,000) plus $10,000 PDL. Bodily injury liability is generally not required until the Financial Responsibility Law is triggered (crash, DUI, serious violations).'
  },
  {
    q: 'After causing a crash with injuries, a previously BI-less Florida driver must demonstrate future financial responsibility of at least:',
    choices: ['10/20/10', '25/50/25', '100/300/50', 'PIP only'],
    answer: 0,
    explain: 'The Financial Responsibility Law requires 10/20/10 — $10,000 per person / $20,000 per accident BI plus $10,000 PD — typically proven by an SR-22.'
  },
  {
    q: 'Following a DUI conviction, a Florida driver must file an FR-44 showing liability limits of:',
    choices: ['10/20/10', '50/100/50', '100/300/50', '300/500/100'],
    answer: 2,
    explain: 'FR-44 = 100/300/50, maintained for three years — ten times the standard BI requirement. SR-22 (10/20/10) covers other triggers.'
  },
  {
    q: 'Florida PIP pays which combination of benefits?',
    choices: [
      '100% of medical bills and lost wages',
      '80% of medical expenses, 60% of lost income, and a $5,000 death benefit, up to $10,000 total',
      '50% of all expenses up to $20,000',
      'Medical bills only, up to $2,500 in all cases'
    ],
    answer: 1,
    explain: '80/60/$5,000 within the $10,000 limit. Without an emergency medical condition determination, medical benefits cap at $2,500.'
  },
  {
    q: 'To receive PIP medical benefits, an injured person must obtain initial treatment within:',
    choices: ['72 hours', '7 days', '14 days', '30 days'],
    answer: 2,
    explain: 'The 14-day initial treatment rule: no treatment within 14 days of the crash, no PIP medical benefits.'
  },
  {
    q: 'A Florida driver may sue an at-fault driver for pain and suffering only if the injury crosses the tort threshold, which includes all EXCEPT:',
    choices: [
      'Significant and permanent scarring or disfigurement',
      'Permanent injury within reasonable medical probability',
      'Death',
      'Two weeks of soreness and a bruised knee'
    ],
    answer: 3,
    explain: 'The no-fault tort exemption bars pain-and-suffering suits for minor injuries. The gateways are death, permanent injury, significant scarring/disfigurement, or permanent loss of an important bodily function.'
  },
  {
    q: 'Florida insurers must offer uninsured motorist limits equal to the BI limits unless the named insured:',
    choices: [
      'Rejects or selects lower limits in writing on the approved form',
      'Verbally declines at the point of sale',
      'Pays a UM surcharge',
      'Has a clean driving record'
    ],
    answer: 0,
    explain: 'UM equal to BI is the default; only a signed written rejection/selection changes it. The signed form is the agency’s proof.'
  },
  {
    q: 'Stacked UM coverage on a two-car Florida policy with 100/300 UM limits effectively allows per-person recovery up to:',
    choices: ['$100,000', '$200,000', '$300,000', '$50,000'],
    answer: 1,
    explain: 'Stacking multiplies UM limits by the number of insured vehicles — 2 × $100,000 = $200,000 per person. Non-stacked coverage stays at the stated limit but costs less.'
  },
  {
    q: 'Under Florida’s dangerous instrumentality doctrine, the OWNER of a car loaned to a friend who negligently injures someone is:',
    choices: [
      'Immune from liability',
      'Vicariously liable for the permissive driver’s negligence',
      'Liable only if the friend was on the owner’s errand',
      'Liable only in criminal court'
    ],
    answer: 1,
    explain: 'A motor vehicle is a dangerous instrumentality in Florida: entrusting it makes the owner vicariously liable for a permissive user’s negligent operation.'
  },
  {
    q: 'Since March 2023, a Florida plaintiff found 60% at fault in a negligence case (other than medical negligence) recovers:',
    choices: [
      '40% of damages',
      'Nothing — fault over 50% bars recovery under modified comparative negligence',
      'All damages',
      '60% of damages'
    ],
    answer: 1,
    explain: 'Florida moved from pure to modified comparative negligence with a 51% bar: a plaintiff more than 50% at fault recovers nothing.'
  },
  {
    q: 'In the PAP, "your covered auto" includes a newly acquired replacement vehicle automatically, but the insured should notify the insurer within:',
    choices: ['48 hours', '7 days', '14 days', '30 days'],
    answer: 2,
    explain: 'Newly acquired autos get automatic coverage windows — 14 days is the key number for asking the insurer to continue/add coverage (longer for adding physical damage in some cases).'
  },
  {
    q: 'A deer leaps into the insured’s car, then the car careens into a guardrail. Under Part D, the animal contact and the guardrail impact are, respectively:',
    choices: [
      'Both collision',
      'Other-than-collision; collision',
      'Collision; other-than-collision',
      'Both other-than-collision'
    ],
    answer: 1,
    explain: 'Contact with an animal is other-than-collision (comprehensive) by definition; striking the guardrail is collision. Classifying perils correctly decides which deductible applies.'
  },
  {
    q: 'An insured’s car is stolen. Her PAP transportation expenses coverage pays:',
    choices: [
      '$20 per day up to $600, after the waiting period',
      '$50 per day with no maximum',
      'Nothing — theft is excluded',
      'Only if she buys rental reimbursement'
    ],
    answer: 0,
    explain: 'The standard PAP pays $20/day to a $600 maximum for transportation expenses when a covered theft (or other Part D loss with the endorsement context) leaves the insured without the car.'
  },
  {
    q: 'The insurer’s maximum payment for physical damage to a covered auto under Part D is:',
    choices: [
      'The declared value plus 10%',
      'The lesser of actual cash value or the cost to repair or replace',
      'Replacement cost of a comparable new vehicle',
      'The loan balance'
    ],
    answer: 1,
    explain: 'Limit of liability = lesser of ACV or repair/replacement cost. Owing more than ACV is the gap that GAP coverage addresses.'
  },
  {
    q: 'A Florida personal auto insurer wants to cancel a policy that has been in force for eight months for excessive claims. It must give the insured written notice of at least:',
    choices: ['10 days', '20 days', '45 days', '90 days'],
    answer: 2,
    explain: 'Florida requires 45 days’ notice of cancellation or nonrenewal for personal auto (10 days for nonpayment of premium). After the first 60 days, allowable cancellation reasons are also restricted.'
  },
  {
    q: 'A boatowner with a 16-foot runabout and 90-horsepower motor relies on his HO-3 for boat liability. The result:',
    choices: [
      'Full liability coverage applies',
      'No Section II coverage — the boat exceeds the small-boat power limits, so a boatowners policy is needed',
      'Liability is covered but only on the residence premises',
      'The boat is covered under Coverage B'
    ],
    answer: 1,
    explain: 'HO Section II covers only small, low-power watercraft. Larger/faster boats need a boatowners or yacht policy; HO property coverage for boats is also capped at $1,500.'
  },
  {
    q: 'A yacht policy’s protection and indemnity (P&I) section corresponds most closely to which familiar coverage?',
    choices: ['Hull physical damage', 'Liability coverage', 'Medical payments', 'Uninsured boater'],
    answer: 1,
    explain: 'P&I is the marine liability section; hull coverage is the physical damage side. Lay-up warranties and navigation limits condition both.'
  },
  {
    q: 'A Florida mobile home policy often offers premium credits for:',
    choices: ['Carports', 'Approved tie-downs and anchoring', 'Window air conditioners', 'Older construction'],
    answer: 1,
    explain: 'Anchoring/tie-down systems reduce wind losses — the mobile home equivalent of mitigation credits.'
  },
  {
    q: 'Which entity issues an insurance company’s certificate of authority in Florida?',
    choices: ['DFS', 'OIR', 'FIGA', 'The NAIC'],
    answer: 1,
    explain: 'The Office of Insurance Regulation licenses insurers (certificates of authority) and approves rates and forms; DFS licenses the people.'
  },
  {
    q: 'A 4-40 customer representative may lawfully:',
    choices: [
      'Sell commercial general liability policies',
      'Take applications, give quotes, and accept premiums in the agency office under the supervising agent',
      'Open her own one-person agency',
      'Adjust property claims for a fee'
    ],
    answer: 1,
    explain: 'The 4-40’s authority is in-office, supervised, personal lines assistance. Commercial sales, independent agencies, and claim adjusting require other licenses.'
  },
  {
    q: 'A customer representative’s appointment must be renewed every:',
    choices: ['12 months', '24 months', '36 months', '48 months'],
    answer: 1,
    explain: 'Appointments run on 24-month cycles. The separate 48-month rule governs license expiration when no appointment exists at all.'
  },
  {
    q: 'An agent replaces a client’s policy with a new one from the same insurer purely to restart his commissions. This is:',
    choices: ['Twisting', 'Churning', 'Sliding', 'Rebating'],
    answer: 1,
    explain: 'Churning is internal replacement for commissions. Twisting involves moving the client to a different insurer through misrepresentation.'
  },
  {
    q: 'Telling a customer that an optional towing club is "included free with every policy" while quietly charging $40 for it is:',
    choices: ['Sliding', 'A lawful bundling strategy', 'Churning', 'Coercion'],
    answer: 0,
    explain: 'Misrepresenting an optional ancillary product as free or required — or charging without informed consent — is sliding.'
  },
  {
    q: 'Under Florida’s rebating statute, an agent may share his commission with a customer ONLY when:',
    choices: [
      'The insurer funds half the rebate',
      'The rebate follows a filed schedule, is available to all insureds in the same actuarial class, and comes solely from the agent’s commission',
      'The customer signs a confidentiality agreement',
      'The rebate is under $25'
    ],
    answer: 1,
    explain: 'Florida’s narrow legal-rebate lane: commission-only, written filed schedule, uniformly available within the actuarial class — otherwise it is illegal rebating.'
  },
  {
    q: 'Making a false statement about an insurer’s financial condition to scare its customers away is:',
    choices: ['Twisting', 'Defamation', 'Churning', 'Misappropriation'],
    answer: 1,
    explain: 'Defamation targets the insurer with false financial statements. If used to induce replacement, twisting can ride along — but the false-financial-condition element is defamation.'
  },
  {
    q: 'Which claim-handling behavior violates Florida’s unfair claim settlement practices rules?',
    choices: [
      'Requesting documentation of damaged items',
      'Failing to acknowledge a claim communication promptly',
      'Applying the hurricane deductible',
      'Inspecting the property within 30 days'
    ],
    answer: 1,
    explain: 'Prompt acknowledgment is mandatory (7 days for residential property claims). Documentation requests, deductibles, and timely inspections are normal practice.'
  },
  {
    q: 'Knowingly submitting an inflated inventory on a burglary claim is:',
    choices: [
      'A negotiation tactic',
      'Felony insurance fraud under Florida law',
      'Permitted if the adjuster approves',
      'A civil infraction with a $500 cap'
    ],
    answer: 1,
    explain: 'Presenting false or misleading claim information with intent to deceive is felony fraud under s. 817.234 — for the customer and anyone who helps.'
  },
  {
    q: 'A customer representative answering phones receives a first notice of loss for a hurricane claim. Her MOST important immediate duties are to:',
    choices: [
      'Estimate the settlement amount for the caller',
      'Record accurate loss details, start the claim per agency procedure, and document the call — the statutory clock is running',
      'Advise the customer whether the hurricane deductible applies',
      'Refer the caller to a public adjuster'
    ],
    answer: 1,
    explain: 'Accurate intake, prompt claim setup, and documentation are the CR’s role; the 7/30/60-day insurer deadlines start with that report. Coverage and settlement opinions belong to the adjuster and agent.'
  },
  {
    q: 'Before sharing a customer’s nonpublic personal information with an unaffiliated marketing firm, the agency must have provided:',
    choices: [
      'Nothing — sharing is always permitted',
      'A GLBA privacy notice and the chance to opt out',
      'An OIR filing',
      'A notarized customer affidavit'
    ],
    answer: 1,
    explain: 'Gramm-Leach-Bliley requires privacy notices and an opt-out opportunity before nonaffiliated third-party sharing.'
  },
  {
    q: 'Which violation pattern best matches: a producer convinces a customer that her solid policy with Insurer X is "about to be cancelled by regulators," and she should move to Insurer Y today?',
    choices: [
      'Sliding plus rebating',
      'Twisting plus defamation',
      'Churning plus coercion',
      'Legal replacement'
    ],
    answer: 1,
    explain: 'False statements about Insurer X’s condition (defamation) used to induce replacement with another insurer’s policy (twisting). Honest, complete comparisons are the lawful path.'
  }
);
