# Head of Command and Control - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for head of command and control, within the UK Government Digital and Data profession. These assessments are job-specific: every scenario draws on the territory this role is responsible for — the strategy roadmap for command and control, the integration of monitoring and operational tooling across the estate, the capability and resilience of the team, service compliance and risk, capacity decisions and remedial action, high-impact change governance, continuity assurance, and the strategic reading of user needs as they shift over time and across channels. The artefacts in these items are the ones that cross this desk — tooling business cases, compliance dashboards, capacity investment papers, major incident reviews, supplier contracts, workforce plans, board summaries — and the decisions are the ones only this level can make: which tools the centre standardises on, which risks are accepted and which remediated, how the team's capability is grown, and how the whole function proves its value to the organisation it protects.

This document contains four assessment sections, each with the same structure: what the assessment measures and why it is used for this role, a mapping of its dimensions to the named skills in the role summary, items with complete worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring. Questions progress from straightforward to genuinely hard, and the hardest deliberately reproduce the texture of head-level work: incomplete information, plausible options that differ mainly in their second-order and organisational effects, and tensions between governance, delivery, people and users that cannot all be fully satisfied.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures pattern recognition, logical deduction, error checking, prioritisation and applied problem solving through operational scenarios rather than abstract items. At head level, scenarios shift altitude: less "diagnose this incident" and more "diagnose this portfolio" — patterns across services, quarters, and teams; deductions through policy, contract, and architecture simultaneously; error checking of analyses and assurances others have already signed; prioritisation of organisational attention rather than personal task lists; and problem solving where the constraints are budget, capability and risk appetite as much as dependency and time.

The typical format is an online, timed test of 15 to 30 minutes, adaptive difficulty, with accuracy and speed reported separately against senior norm groups. Expect multi-source questions requiring reconciliation across a table, a policy extract and a claim.

Cognitive assessment is used at this level because the role concentrates judgement about judgement. The postholder rarely executes analysis; they decide whether analyses are sound, whether patterns warrant investment, whether assurances deserve belief, and where the organisation's attention should go. Errors at that layer are expensive precisely because they are wholesale.

### How this assessment maps to the role

- **Pattern recognition** maps to **Service focus** and responsibility for the strategy roadmap.
- **Logical deduction** maps to **Change management** and **Asset and configuration management**: deducing consequences through layered rules — policy, contract, architecture — without letting any layer slip.
- **Error checking** maps to **Problem management** and **Continuity management**: auditing the causal reasoning in what is signed, and auditing assurance rather than performing the test.
- **Prioritisation** maps to **Ownership and initiative** and the duty to address issues across IT operations: allocating organisational attention to the risks only this level can retire.
- **Applied problem solving** maps to **Availability and capacity management** and the duty to ensure tools are fit for purpose.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern across a year of majors**

The annual review tabulates 16 major incidents: 6 traced to a single legacy integration layer; 4 to capacity exhaustion in shared components, each preceded by an unactioned trend warning; 3 to failed high-impact changes; 3 with unique causes. Which reading best serves the strategy roadmap?

- A) Sixteen majors is the headline; target a 25% reduction across the board.
- B) Two structural concentrations dominate: the legacy integration layer (6) is an architectural liability for the roadmap, and the four capacity majors reveal a process gap — warnings are generated but not actioned — which is cheaper to fix than the architecture and should move first.
- C) The three failed changes prove change governance is the priority.
- D) The unique causes show incidents are random; no pattern exists.

**Correct answer: B**

**Explanation:** The integration layer's 6 is an asset problem needing roadmap investment; the capacity cluster's 4 is a process gap — warnings existed and were unactioned — fixable in weeks by repairing the trend-to-action pathway. Sequencing the cheap process fix ahead of the expensive architectural one is portfolio logic. Option A spreads attention evenly over concentrated causes. Option C elevates the smallest cluster. Option D misreads the residual: three unique causes alongside two concentrations is a normal distribution, and the concentrations are the signal. This tests reading annual incident data as a portfolio of causes with differently-shaped fixes, not a count.

**Question 2 (easy) — Deduction through policy and contract together**

The release policy: "High-impact changes to citizen-facing services require a tested rollback and CAB approval." The supplier contract for the managed hosting platform: "Supplier-initiated platform maintenance is not subject to customer change approval, but the supplier must give 10 working days' notice of maintenance affecting service availability." The supplier emails: "Platform upgrade in 12 days; brief availability impact expected on hosted citizen services; as per contract, proceeding under our maintenance provisions." Which statement must be true?

- A) The upgrade requires CAB approval because citizen-facing services are affected.
- B) The supplier has breached the contract's notice requirement.
- C) The release policy does not bind the supplier's maintenance, and the contractual notice condition is met (12 days ≥ 10 working days is not yet established — 12 calendar days may be fewer than 10 working days, so notice compliance actually cannot be confirmed without a calendar).
- D) The supplier's maintenance is exempt from CAB, and whether the 10-working-day notice is satisfied depends on whether the 12 days contain at least 10 working days — which the email alone does not establish.

**Correct answer: D**

**Explanation:** The release policy binds the organisation's own changes; the contract explicitly carves supplier maintenance out of customer approval, so option A fails regardless of citizen-facing impact. The notice question turns on a unit trap: the contract counts working days, the email counts calendar days — twelve calendar days spanning two weekends contains only 8 working days, while twelve working days would comfortably satisfy the requirement, and the email doesn't say which. Option C reasons correctly and then contradicts its own parenthesis, which is itself an error-checking exercise — an option whose conclusion and reasoning diverge is wrong even when part of the reasoning is right. Option D holds the exemption established and the notice question genuinely open. This tests recognising that compliance verdicts issued before defined units are checked are guesses.

**Question 3 (easy) — Error checking a compliance dashboard**

The quarterly compliance dashboard reports: "Runbook currency: 94% (47 of 50 runbooks reviewed within 12 months). Continuity tests: 100% of scheduled tests completed. Configuration accuracy: 98.2% (sample audit)." A footnote reads: "Continuity test schedule revised in Q2; tests for 8 services deferred to next year as their runbooks were under review." What is the most important observation?

- A) The dashboard shows strong compliance across all three measures.
- B) The 100% continuity figure is true of the revised schedule but conceals that 8 services went untested this year — the denominator was edited to fit the numerator, and those 8 services' continuity assurance is a year staler than the dashboard's headline implies.
- C) The 94% runbook currency is the weakest figure and should be the priority.
- D) The sample-based configuration figure is meaningless without the sample size.

**Correct answer: B**

**Explanation:** The dashboard's most dangerous number is its best one — "100% of scheduled tests completed" is literally true and materially misleading because the schedule itself was edited mid-year to remove 8 services. Denominator management — editing the base until the percentage pleases — is the signature pathology of compliance reporting, and the footnote is where it lives. Option C picks the number that looks weakest, the trap's mirror image. Option D raises a fair but second-order point. This tests reading dashboards as arguments rather than facts, since every percentage has a denominator and every denominator has a history.

**Question 4 (moderate) — Prioritisation of the head's attention**

Monday, 08:30. Four items: (i) final sign-off on the monitoring tool procurement — the business case is solid, operational control managers are unanimous, deadline Friday; (ii) a director's request to "have a look at" a peer division's incident data as a favour, no deadline; (iii) the third consecutive monthly rise in a junior team's attrition, now visible in the workforce report, cause unknown; (iv) a vendor briefing on an AI operations product the roadmap tentatively references for next year. Where should personal attention go first, and why?

- A) Item (i) — the deadline is nearest and the sum is largest.
- B) Item (iii) — it is the only item where something is genuinely unknown, worsening, and unowned; the procurement is decision-ready and can be signed after, the favour and the briefing can be scheduled.
- C) Item (ii) — director requests take precedence.
- D) Item (iv) — strategy must lead operations.

**Correct answer: B**

**Explanation:** Item (i) is large but finished thinking — unanimous managers, a solid case, schedulable with certainty. Items (ii) and (iv) are elastic and schedulable. Item (iii) is the discriminating case: a worsening trend, cause unknown, and unowned — attrition shows up in no one else's objectives until it becomes a capability crisis. This tests distinguishing decision-ready from investigation-needed, and recognising that head-level attention is the scarcest resource in the function, belonging to what is worsening, unknown and unowned — not to what is large, loud or senior.

**Question 5 (moderate) — Integration logic in tooling strategy**

The roadmap must consolidate monitoring: today, four tools cover infrastructure, application performance, user-experience and security monitoring, each with its own alerting; correlation across them is manual, and post-incident reviews repeatedly cite "correlation delay" as a resolution-time driver. Three consolidation options are costed: (1) replace all four with a single-vendor platform — highest cost, longest migration, one alerting model; (2) keep all four, build an event-correlation layer that ingests from each — lowest cost, fastest, adds a fifth component to operate; (3) consolidate infrastructure and application tools into one platform now (the two whose correlation gap drives most cited delay), defer user-experience and security consolidation, revisit in 18 months. Post-incident data shows 80% of correlation-delay citations involve exactly the infrastructure-application boundary. Which option does the evidence best support?

- A) Option 1 — a single pane of glass is the recognised end-state.
- B) Option 2 — lowest cost and fastest is the fiduciary choice.
- C) Option 3 — it applies 20%-effort-to-80%-cited-problem, tests consolidation on the highest-value boundary before committing to the full end-state, and keeps the security tool's specialised requirements out of a general-purpose migration.
- D) None — more analysis is needed before any choice.

**Correct answer: C**

**Explanation:** 80% of cited correlation delay lives at one boundary, and option 3 spends effort exactly there, with the deferred remainder as sequenced learning rather than indecision. It also respects that security monitoring has retention, access-separation and audit requirements a general-purpose migration serves poorly. Option 1 is architecture by brochure — end-states are hypotheses until estate data supports them. Option 2 answers the cost question and dodges the operational one, adding complexity at the exact spot complexity is already the problem. Option D fails the evidence already in hand. This tests demonstrating tool fitness against the organisation's own incident data, sequenced to learn before committing.

**Question 6 (moderate) — Error checking an availability improvement claim**

A paper for sign-off claims: "Since the resilience programme began in January, major incidents have fallen from 11 (previous year) to 6 (this year to October) — a 45% reduction demonstrating programme effectiveness. Recommend extending the programme with £250k next year." Independently known: this year's figure covers 10 months; two services were migrated out of the estate in March; and the previous year included a single cluster of 4 majors from one firmware defect since fixed by the vendor. What is the soundest assessment?

- A) The reduction is real and the extension justified as argued.
- B) Annualise first: 6 in 10 months projects to ~7.2 in 12 — against 11, a ~35% fall, not 45%. Then adjust the baseline: 4 of the prior year's 11 came from one vendor-fixed defect (leaving ~7 comparable), and the estate shrank by two services in March. The like-for-like comparison is roughly 7 against 7 — the data does not yet demonstrate programme effect, which neither proves nor disproves the programme; the paper must be sent back for an attribution analysis before £250k rides on it.
- C) The programme has failed and should be cancelled.
- D) Incident counts are too noisy to analyse; decide on judgement alone.

**Correct answer: B**

**Explanation:** Annualising drops the claimed 45% to ~35%. Removing a single externally-fixed cluster from the baseline and accounting for the estate shrinking in March leaves an approximately flat like-for-like picture. Option C overshoots symmetrically — the flat comparison doesn't show failure either, since underlying risk may have risen while the programme held the line. Option D abandons analysis because the first analysis was flawed, when the corrections themselves prove the data is analysable. This tests the annualise-adjust-attribute sequence before an improvement claim is believed and funded.

**Question 7 (moderate) — Deduction about capability coverage**

The on-call rota requires two qualified incident leads available at all times. Qualification requires completing the incident leadership programme (6 months) plus shadowing (3 months). Today there are 5 qualified leads. Known futures: one retires in 4 months; one starts maternity leave in 6 months; promotion of one into a day-role that removes rota eligibility is agreed for month 8. Two candidates entered the programme last month. When does coverage first become impossible to guarantee, and what does that imply now?

- A) Month 8 — when the third lead leaves the rota, 2 remain, exactly meeting the requirement with zero resilience; but "two available at all times" across leave and sickness cannot be guaranteed with only 2 qualified people, so the genuine exposure begins at month 6 when the pool drops to 3.
- B) Month 12 — when the maternity leave begins.
- C) Never — the two candidates qualify in time.
- D) Month 4 — the retirement immediately breaks the requirement.

**Correct answer: A**

**Explanation:** The pool falls to 4 at month 4, 3 at month 6, 2 at month 8, while the two candidates who entered last month complete around month 8–9 — arriving at or after the crunch, not before. A pool of exactly 2 cannot guarantee "two available at all times" against leave and sickness, so the planning exposure begins at month 6. This tests tracking pool arithmetic against a requirement's real meaning, and treating qualified-lead coverage as a monitored capacity metric with the same projection discipline applied to storage — capability as capacity with a nine-month lead time.

**Question 8 (moderate) — The anomaly in a familiar report**

The monthly service report has shown user-experience availability within 0.2 points of infrastructure availability for eighteen consecutive months. This month: infrastructure 99.7%, user-experience 97.1% — a 2.6-point gap — while incident counts, change volumes and desk contacts are all normal. The report's commentary does not mention the gap. What is the best first move?

- A) Accept the report; all the operational indicators are normal.
- B) Treat the divergence of two normally-coupled metrics as the month's most important finding despite — indeed because of — the normal indicators everywhere else: commission a specific investigation and ask why the commentary process failed to surface a 13-fold departure from the historical gap.
- C) Ask for the user-experience figure to be re-measured; it is probably wrong.
- D) Report the infrastructure figure upward this month since the two usually agree.

**Correct answer: B**

**Explanation:** Eighteen months of tight coupling makes the relationship between these metrics an instrument in its own right, and this month it moved while every conventional indicator stayed still — either something real is harming users invisibly to operational telemetry, or a measurement system has silently changed or broken; both branches matter, and both are invisible to a process that only investigates when operational indicators move. Option C picks one branch by assumption. Option D is disqualifying — knowingly reporting the flattering metric. This tests noticing when a trusted relationship between metrics breaks and treating the reporting process's silence on it as a defect in its own right.

**Question 9 (challenging) — Multi-constraint remediation sequencing**

Audit has issued three findings with deadlines: (F1) legacy integration layer lacks failover — remediate within 12 months (est. 8 months' work, £400k); (F2) monitoring gaps on two citizen services — remediate within 6 months (est. 3 months, £80k); (F3) continuity tests outstanding for 8 services — complete within 9 months (est. 4 months elapsed, mostly coordination). Constraints: the same two senior engineers are critical-path for F1 and F2; continuity tests (F3) require change-freeze windows that conflict with F1's migration phases; budget releases quarterly at £150k. Which plan satisfies all deadlines?

- A) Sequence F1 first (months 1–8), F2 next (9–11), F3 last (12–15) — biggest risk first.
- B) F2 first (months 1–3, engineers dedicated, £80k inside Q1's release), F3 in parallel from month 1 (coordination-led, using pre-migration freeze windows, completing ~month 5), then F1 from month 4 with both engineers freed (months 4–11, £400k spread across remaining quarterly releases) — F2 done month 3 (deadline 6), F3 month 5 (deadline 9), F1 month 11 (deadline 12).
- C) F1 and F2 in parallel from month 1, sharing the engineers; F3 from month 6.
- D) Request deadline extensions for all three before planning.

**Correct answer: B**

**Explanation:** Option A breaches F2's deadline at month 9. Option C's parallelism is fictional — sharing two critical-path engineers halves both efforts, pushing F2 to a knife-edge and F1 to breach. Option D concedes before analysing, and B proves the concession unnecessary: F2 lands month 3, F3 runs pre-migration when freeze windows are plentiful and completes month 5, and F1 gets both engineers from month 4, landing month 11 with a month of margin, funded across three quarterly releases. This tests scheduling the deadline-tightest short work first when it shares scarce resources with long work, and routing non-competing workstreams around the resource constraint entirely.

**Question 10 (challenging) — Judging a problem investigation portfolio**

Reviewing the problem management function's quarterly output: 22 problem records closed. Sampling the closures: 9 closed with root cause identified and preventative action completed; 6 closed as "no longer reproducible" after low investigation effort; 4 closed with workarounds documented but root cause "not economically justifiable to pursue"; 3 closed with root cause found and preventative actions raised but transferred to delivery teams' backlogs, status unknown. Which assessment best serves the function?

- A) A 100% closure achievement — the function is performing.
- B) Four distinct closure qualities are being counted as one outcome: the 9 are genuine; the 6 "not reproducible" closures at low effort are a recurrence pool; the 4 economic judgements may each be sound but need a visible risk-acceptance record with an owner, not a closure; and the 3 with actions lost into unowned backlogs are prevention promised but not delivered. The function needs closure categories with different exit criteria, recurrence tracking against "not reproducible" closures, and a followed-through path for transferred actions.
- C) The 6 "not reproducible" closures should be prohibited; problems must stay open until reproduced.
- D) The sample is too small to conclude anything about the function.

**Correct answer: B**

**Explanation:** "Closed" is doing four different jobs, each with a different failure mode. The 6 "not reproducible" closures individually make sense but collectively signal intermittent problems presenting exactly this way; the control is recurrence tracking, not prohibition (which would freeze the register with unfalsifiable open records). The 4 economic closures are actually risk acceptances needing an owner and review date, not mere closures. The 3 transferred closures represent the largest prevention leak — output handed to an unaudited backlog. This tests separating closure categories by their exit criteria, since what gets counted as done defines what the function actually does.

**Question 11 (challenging) — Strategic deduction from user-channel data**

Five-year channel data for a citizen service: phone contact share fallen 60%→35%; digital share risen 30%→58%; assisted-digital stable at ~7%. Overnight digital usage (22:00–06:00) has tripled and now carries 18% of digital transactions. The operational posture is unchanged from five years ago: full support 08:00–18:00, skeleton overnight cover, maintenance windows concentrated 01:00–04:00. Deduce the strategic misalignments and the appropriate roadmap response.

- A) None — the service meets its availability targets on current measures.
- B) Three misalignments: support weighting still mirrors the old channel mix; maintenance windows sit inside a window now carrying material and growing usage — the "quiet hours" assumption has expired; and the availability measures themselves, set in the phone era, likely under-weight overnight digital harm. Roadmap response: rebalance support capability toward digital-incident response, re-derive maintenance windows from current usage-trough data with a periodic review trigger, and re-specify availability measures to weight when users actually transact — while protecting the stable assisted-digital minority in any change.
- C) Close the phone channel to fund digital support, since the trend is clear.
- D) Move maintenance to daytime, when staff are plentiful.

**Correct answer: B**

**Explanation:** Support posture, maintenance windows, and the availability measures themselves are all expired assumptions from the phone era, and "meets its targets" (option A) is the symptom rather than the reassurance, since a phone-era measure can be met while overnight digital users absorb unmeasured harm. Option C converts channel evolution into exclusion of a stable minority that cannot shift channel — exactly the population public services exist to reach. Option D solves staffing by scheduling outages into peak usage. This tests recognising that usage data ages operational assumptions silently, and that the roadmap's job is to re-derive them on evidence, on a cycle, with a vulnerable minority protected by design.

**Question 12 (challenging) — The assurance chain under load**

A ministerial priority service launches in 6 weeks and will route through the command and control centre. Assurances currently held: the delivery programme reports "monitoring integration complete" (their own test); the tooling team reports the integration "receiving events but not yet validated against failure scenarios"; the continuity runbook exists but is untested ("no test window before launch," says the programme); and the on-call rota for the launch period shows the qualified-lead thinning from Question 7 already beginning. The programme director asks for confirmation to the senior responsible owner that "command and control is ready". What does sound reasoning require the confirmation to contain?

- A) Confirm readiness — the components exist, and the programme's own test covers the integration.
- B) Decline to confirm anything until every element is fully tested, whatever the launch consequence.
- C) A differentiated assurance: state what is verified (events flowing), what is claimed but unverified (integration under failure scenarios — with a proposal to run scenario validation in weeks 1–2), what is untested with a mitigation (runbook — desk walkthrough plus an on-call specialist retainer for the launch month, and a test scheduled at the first post-launch window), and what is being resourced to guarantee (named incident leads for the launch period, borrowed if needed) — so the SRO receives a readiness statement whose every clause is either evidenced or accompanied by its compensating control and residual risk.
- D) Confirm readiness verbally but keep an internal note of the gaps in case of later challenge.

**Correct answer: C**

**Explanation:** A differentiated statement carries every clause's evidence status: verified plainly asserted; claimed-but-unverified converted into a two-week validation plan; untested-with-mitigation named honestly with its compensating control; committed-and-resourced items named as owned. Option A signs off on the programme's self-assessment. Option B's binary standard converts confirmation into either an obstacle or, under pressure, a rubber stamp. Option D is concealment with an audit trail — worse than concealment, since the note proves prior knowledge. This tests the template every "confirm readiness" moment requires: verified / claimed-unverified with a plan / untested with mitigation and residual / committed-and-resourced.

### Administration tips

- **Score for whether a candidate resolves a distribution into differently-shaped causes** rather than treating a total as the object.
- **Watch for whether a candidate applies each defined unit (working days, calendar days) precisely** before pronouncing compliance.
- **Note whether a candidate reads footnotes as load-bearing** rather than treating a headline percentage at face value.
- **Keep timing consistent** across candidates for this level.
- **Use the differentiated-assurance item (Question 12) to observe whether a candidate separates verified from claimed from untested explicitly.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that signs the best-looking number** without checking its denominator or footnote.
- **Confusing size or seniority of a request with genuine need for personal attention.**
- **Accepting architecture-by-end-state reasoning** without evidence from the organisation's own data.
- **Accepting self-assessment as if it were independent verification.**
- **Missing when a candidate treats an expired operational assumption** (quiet hours, channel mix, an old measure) as still valid.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures fluency and rigour with the quantitative material a head of function is accountable for: budgets and their phasing, availability and risk economics, capacity investment cases, workforce and capability arithmetic, supplier commercials, and the KPI structures by which the function is judged and judges others. The format is standard, but content at this level leans hard toward interrogation: not "compute the figure" so much as "decide whether the computed figure means what the paper claims".

For this role, the relevance is structural: budget authority means every business case argues in numbers, and approving arithmetic that hasn't been stress-tested delegates authority to whoever built the spreadsheet. Service compliance and risk is increasingly quantified, and each quantification embeds choices — denominators, weightings, exclusions — that review either audits or inherits. Figures sent upward carry the function's implicit warranty.

### How this assessment maps to the role

- **Budget and investment arithmetic** maps to responsibility for the strategy roadmap and tools fit for purpose.
- **Risk and availability economics** map to service compliance and risk and **Availability and capacity management**.
- **Workforce and capability arithmetic** maps to building the capability of the team.
- **Supplier and contract figures** map to **Change management** and **Continuity management** at governance level.
- **KPI structure and aggregation** map to **Service focus**, **User focus** and **Problem management**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Budget phasing check**

The roadmap's tooling consolidation is costed at £520k: £190k in Q1, £150k in Q2, £110k in Q3, £70k in Q4. Finance releases £140k per quarter, with unspent allocation carrying forward. In which quarter, if any, does the plan first exceed available funds?

- A) Q1
- B) Q2
- C) Q3
- D) It never exceeds available funds

**Correct answer: A**

**Explanation:** Q1 alone is short by £50k (£140k available against £190k needed), and the carry-forward mechanism has nothing to draw on yet. The year funds the plan in total (£560k against £520k), but the profile fails from the first quarter. This tests recognising the most common defect in roadmap financials — annual affordability presented as quarterly feasibility — by running cumulative-versus-cumulative rather than comparing totals.

**Question 2 (easy) — Cost of attrition versus cost of retention**

Replacing a senior analyst costs roughly £45k (recruitment, backfill gap, and a productivity ramp). Junior-team attrition is running at 6 leavers/year above historical norm. A proposed retention package costs £120k/year and is projected to halve the excess attrition. What is the first-year net position, and what should be checked before believing it?

- A) Net cost £120k — retention packages are an expense.
- B) Excess attrition costs 6 × £45k = £270k/year; halving saves £135k against a £120k spend — net +£15k in year one, roughly break-even. Check the two load-bearing assumptions: the £45k replacement cost (audit against actual recruitment data) and especially the "halve attrition" projection (what evidence supports it?). Near-break-even in year one with retained capability as the real return.
- C) Savings of £270k make it a clear win.
- D) The package should be rejected because attrition is a market condition beyond influence.

**Correct answer: B**

**Explanation:** Net benefit is £270k × 0.5 − £120k = +£15k, roughly break-even, not the full £270k saving option C claims (an effect-size error, since the package addresses half the problem by its own projection). This tests recognising a near-break-even case rests entirely on its two soft numbers — the replacement cost (auditable) and the halving projection (fragile, needing a mechanism check against exit-interview themes) — and a strong candidate's answer notes that operational resilience (on-call depth, incident experience, mentoring capacity) is a real return the cash arithmetic only partially prices.

**Question 3 (easy) — Weighted risk scoring**

The risk register scores risks as likelihood (1–5) × impact (1–5). Three open risks: R1 likelihood 4, impact 2 (score 8); R2 likelihood 1, impact 5 (score 5); R3 likelihood 3, impact 3 (score 9). The register ranks remediation priority by score: R3, R1, R2. What is the strongest caveat to this ranking?

- A) The ranking is arithmetically wrong.
- B) Multiplicative scoring treats a likely-minor risk (R1) as more urgent than a rare-catastrophic one (R2), but a 1×5 risk — low-probability, maximum-impact — is exactly the class where score-driven deprioritisation is most dangerous: the impact axis is usually capped and non-linear in reality, so tail risks need a floor rule — any impact-5 risk gets senior review regardless of score — alongside the arithmetic ranking.
- C) Likelihood should be weighted double, as it is more measurable.
- D) The register should rank alphabetically to avoid bias.

**Correct answer: B**

**Explanation:** The arithmetic is correct, which is precisely why the question matters — the defect is in the instrument, not the computation. Multiplicative scores silently assert linearity that top-of-scale impact events (multi-service outages, data breaches) don't actually have, and their low likelihood is often the least reliable estimate on the register. This tests recognising the need for a floor rule at the instrument level — a standard maturity feature — rather than replacing one arbitrary scheme with another (options C and D).

**Question 4 (moderate) — Comparing tooling options on total cost**

Two monitoring consolidation options over 4 years. Option P (platform): £300k implementation + £120k/year licence + one 0.5 FTE administrator (£35k/year all-in). Option Q (build on open source): £150k implementation + £20k/year hosting + 2.0 FTE engineering support (£70k/year each all-in). What are the 4-year totals, and which non-arithmetic factor most deserves weight in the decision?

- A) P: £920k; Q: £790k — Q is cheaper; choose Q.
- B) P: £300k + 4×(£120k + £35k) = £920k. Q: £150k + 4×(£20k + £140k) = £790k. Q is £130k cheaper over 4 years — but Q's cost is 71% specialist staffing: the decision should weight whether the organisation can sustain 2.0 FTE of niche engineering capability (recruitment, retention, key-person risk, and the opportunity cost of those engineers not working the roadmap) against P's contractual certainty; a £130k saving that depends on retaining two specialists in a market that pays more for them is a projection, not a price.
- C) P: £820k; Q: £710k — Q is cheaper.
- D) The options cannot be compared because one involves staff.

**Correct answer: B**

**Explanation:** P totals £920k, Q totals £790k (option C drops a year of running costs). Q wins by £130k, real but not decisive. This tests decomposing totals by cost behaviour before comparing — £560k of Q's £790k is specialist staffing carrying key-person risk, market risk, and opportunity cost, which P converts into a contract instead. Equal totals with different compositions are different risks, and a strong candidate's answer would surface this rather than stop at the headline saving.

**Question 5 (moderate) — SLA penalty arithmetic**

The hosting contract: service credits of 2% of the £80k monthly charge per 0.1 percentage points below 99.9% availability, capped at 20% of the monthly charge. This month the supplier delivered 99.4% availability. What credit applies, and what does the cap structure reveal?

- A) £8,000 — 5 increments of 0.1pp below target × 2% × £80k.
- B) The shortfall is 0.5pp = 5 increments; 5 × 2% = 10% of £80k = £8,000. The cap (20% = £16,000) engages at 1.0pp below target, i.e. at 98.9%: below that, every further point of failure is free to the supplier — so for severe outages the credit regime stops incentivising recovery, and protection must come from other clauses (termination triggers, service improvement obligations), which should be verified before a bad month, not during one.
- C) £16,000 — the cap always applies to any breach.
- D) No credit — 99.4% rounds to 99.9% within tolerance.

**Correct answer: B**

**Explanation:** The computed credit (£8,000) is arithmetically identical between A and B, but B reads the structure: the cap binds at 98.9%, meaning a catastrophic 24-hour outage yields the same £16,000 as a bad-but-bounded month. This tests recognising service credits as an incentive instrument for moderate underperformance only, and identifying where a capped or stepped commercial structure loses its marginal incentive — the point at which a different mechanism must take over.

**Question 6 (moderate) — Capacity investment timing**

A shared platform runs at 68% peak utilisation, growing 2 percentage points per month. Performance degrades above 85%, and procurement-plus-implementation of the capacity expansion takes 5 months. Finance asks: "Why buy now? We're only at 68%." What is the correct quantitative answer?

- A) Buy later — 17 points of headroom remain, which is 8.5 months at current growth.
- B) At +2pp/month, 85% is reached in 8.5 months. The expansion takes 5 months, so the decision deadline is 8.5 − 5 = 3.5 months away — "now" is not required, but "within one quarter" is, and any acceleration in growth shortens it; the honest position for finance is a commitment this quarter with the growth rate monitored monthly against the trigger.
- C) Buy immediately — capacity should always lead demand by a wide margin.
- D) Wait until 85% is reached, then expedite procurement.

**Correct answer: B**

**Explanation:** The order must be placed by month 3.5 (threshold minus lead time), or the platform crosses into degradation before capacity lands. Option A performs half the calculation — headroom must be measured in decision time, not threshold time. Option D guarantees 5 months of degradation by initiating the process at the threshold. This tests recognising that the initiation date is itself a computed quantity, defensible to finance in lead-time arithmetic — precisely how remedial action gets funded on time.

**Question 7 (moderate) — Interpreting a fall in reported incidents**

Two quarters after a new incident categorisation policy (stricter criteria for what counts as an "incident" versus a "service request"), the board pack shows incidents down 30% and celebrates improved stability. Desk contact volumes are flat; monitoring alert volumes are flat; user-experience availability is unchanged. What is the sound interpretation?

- A) Stability has improved 30% as reported.
- B) Every independent indicator is flat: the 30% fall coincides with the reclassification and most plausibly measures the policy, not the estate. The board pack is committing an innocent measurement-change attribution error, and the honest correction is to restate the trend on a like-for-like basis, with the definitional break annotated in the pack permanently.
- C) The desk should be investigated for suppressing contact volumes.
- D) Both things are true: the policy changed and stability improved 30%.

**Correct answer: B**

**Explanation:** If stability had genuinely improved, correlated indicators should move — none do, so the change lives in the one thing that did change: the counting rule. This tests triangulating a claimed improvement against independent indicators before accepting it, and a strong candidate's answer flags option D as the seductive error — comfortable to believe with one's own policy in the numerator, exactly when the discipline matters most.

**Question 8 (moderate) — Expected value across a remediation portfolio**

£300k of discretionary remediation budget; four candidates. (W) legacy integration failover, £200k, removes an estimated 2 major incidents/year at £60k each; (X) trend-to-action process automation, £40k, removes an estimated 3 majors/year at £60k each; (Y) monitoring gap closure, £80k, removes 1 major/year at £60k plus £30k/year of prolonged-minor costs; (Z) continuity test acceleration, £60k, cuts estimated invocation-failure risk, valued at £45k/year expected. Which portfolio maximises first-year expected return within budget?

- A) W + X (£240k): benefit £120k + £180k = £300k.
- B) X + Y + Z (£180k): benefit £180k + £90k + £45k = £315k, leaving £120k unspent.
- C) W + X + Z (£300k): benefit £120k + £180k + £45k = £345k.
- D) X + Y + Z, then reconsider W next year — ranked returns are X (4.5:1), Y (1.1:1), Z (0.75:1), W (0.6:1) — so best value-per-pound is X, Y, Z, W; but within the £300k cap, total benefit is maximised by C's £345k, so approve C while noting X carries the portfolio.

**Correct answer: C**

**Explanation:** Ratio-maximising (buying in value-per-pound order until budget runs out) gives option B's £315k; but the stated objective is maximum benefit within the £300k cap, which option C achieves by spending the full budget on W+X+Z for £345k. This tests recognising that ratio-maximising and budget-constrained-benefit-maximising are different objectives choosing different portfolios, and a strong candidate's answer notes option D reasons correctly and then contradicts its own hedge by approving C anyway — an option at war with itself fails even when its components are sound.

**Question 9 (challenging) — The benchmarking claim**

A consultancy's benchmarking report states: "Comparable government operations centres run at 2.1 incidents per analyst per day; yours runs at 1.4 — a 33% productivity gap indicating overstaffing of approximately 5 FTE." It is established that: the benchmark population's "incident" definition includes service requests (the reclassified organisation's does not); the centre carries the 24/7 on-call obligation in-house while three of the five comparators outsource overnight; and analysts spend a recorded 25% of time on problem investigation and preventative work the benchmark's activity model doesn't capture. What is the sound response?

- A) Accept the finding — external benchmarks are independent and the directorate commissioned it.
- B) Reject benchmarking entirely as impossible across organisations.
- C) Show the comparison is currently uninterpretable and rebuild it: the definitional mismatch inflates the comparator numerator by an unknown but estimable factor — desk data suggests the like-for-like figure is nearer 2.8; the 24/7 in-house obligation loads roster hours the comparators don't carry; and 25% of recorded time is preventative output the metric counts as idle. Offer the consultancy the organisation's data to re-run like-for-like, and present the directorate the corrected picture including whatever residual gap survives.
- D) Quietly increase the incidents-per-analyst figure by reversing the reclassification policy so future benchmarks compare favourably.

**Correct answer: C**

**Explanation:** Three distortions each need correcting before the delta means anything: the definitional mismatch potentially reverses the headline's direction entirely; the structural mismatch (in-house 24/7 versus outsourced overnight) is an apples-to-staffing-model comparison; and the activity-model mismatch treats preventative work as slack. This tests engaging a benchmark rather than dismissing it wholesale (option B) or accepting it uncritically (option A), and recognises option D as corrosive — reshaping measurement policy to game future comparisons subordinates information quality to appearance.

**Question 10 (challenging) — Weighted aggregation for the board**

The board KPI aggregates availability across five services as a simple average. This month: four back-office services at 99.9% each, and the flagship citizen service — carrying 70% of all user transactions — at 97.0%. Simple average: 99.32%. The board target is 99.3%. What does weighting show, and what should be reported?

- A) 99.32% — target met; report as usual.
- B) Weighted: (97.0 × 0.70) + (99.9 × 0.30) = 97.87% — dramatically below both the simple average and the target, because the failing service is where the users are. Report the weighted figure alongside the simple one, flag that the KPI's construction has been masking user-experienced performance, and propose the board adopt transaction weighting permanently — accepting that this makes the headline worse this month and honest thereafter.
- C) Weighted: 98.45% — marginally below target; note it verbally.
- D) Report 99.32% this month but adopt weighting from next month so the change doesn't coincide with a bad result.

**Correct answer: B**

**Explanation:** The weighted figure (97.87%) is a 1.45-point gap from the simple average — roughly 22 hours of user-experienced monthly downtime the simple average conceals, because averaging services pretends each matters equally when one carries 70% of users. Option D adopts the honest measure only once it stops hurting — the same pathology as a measurement change timed to flatter. This tests recognising that KPI construction is user representation, and reporting the honest weighting in the month it costs credibility, since a board that later learns the weighting was known and deferred learns something about every number ever sent to it.

**Question 11 (challenging) — Continuity investment under uncertainty**

A full failover capability for the flagship service costs £450k to build and £50k/year to maintain, and would reduce estimated annual downtime from major events by 20 hours. The citizen-impact cost model values flagship downtime at £8k/hour, but the model is acknowledged rough: defensible range £4k–£15k/hour. Over a 5-year horizon (ignore discounting), what does the analysis support?

- A) Central case: benefit 5 × 20 × £8k = £800k against cost £700k — net +£100k; proceed.
- B) Run the range, not just the centre. Costs: £700k. Benefits: at £4k/hour, £400k (net −£300k); at £8k, £800k (net +£100k); at £15k, £1.5m (net +£800k). The decision flips within the model's own uncertainty range, so the arithmetic alone cannot decide: the case rests on where the true hourly cost sits, and unmodelled factors. The analysis supports either commissioning a better impact estimate before deciding, or making the decision explicitly on risk appetite with the range disclosed — not presenting +£100k as if it settled the matter.
- C) Reject: at the low end the case loses £300k.
- D) Proceed: at the high end it nets £800k.

**Correct answer: B**

**Explanation:** The decision changes sign within the stated uncertainty range, and options A, C and D each pick one point on the range and pronounce. This tests recognising a sign-flip as the analytical finding itself, and presenting the range to the decision-maker rather than a single point estimate — a head who presents +£100k without the range is transferring hidden uncertainty to people who were not told they were receiving it.

**Question 12 (challenging) — The workforce plan's compound arithmetic**

The 3-year capability plan: the centre needs 24 qualified analysts steady-state. Current: 21 qualified, 5 in training (9-month pipeline, historically 80% completion). Annual attrition among qualified staff runs at 15%, applying to the pool including newly-qualified staff. Recruitment into training can run at most 8/year. Does a steady intake of 8/year reach and hold 24, and what does the arithmetic reveal about the plan's real constraint?

- A) Yes, comfortably: 8 recruits against ~3 leavers per year grows the pool rapidly.
- B) Model year by year: the pool treads water in year 1 (pipeline lag), grows past 24 from year 2, and eventually over-provisions toward ~43 at steady 8/year intake — so the plan doesn't fail, but the real constraints are the year-1 transition dip (below the 24 requirement while the pipeline delivers) and the 15% attrition rate itself: holding 24 needs only ~4.5/year intake once reached, and a 5-point improvement in retention (15%→10%) roughly halves the required intake — making retention the cheapest capacity instrument in the plan.
- C) No: attrition outpaces an 8/year intake permanently.
- D) The question cannot be answered without monthly cohort data.

**Correct answer: B**

**Explanation:** Year 1 exposes a transition problem — current trainees deliver fewer completions than attrition removes, so the pool treads water below the 24 requirement for the whole pipeline lag, fixable only by anticipation (retention focus, borrowed staff, tolerable overtime), not by intake decisions now. From year 2, sustained 8/year intake overshoots the eventual steady state substantially. This tests differentiating the levers in a stock-and-flow system: recruitment capacity is not the binding constraint after year 1; the pipeline lag and the attrition rate are, and retention improvements are the cheapest capacity lever — the strategic insight that makes the retention package in Question 2 a capacity instrument, not an HR nicety.

### Administration tips

- **Score for whether a candidate distinguishes cumulative feasibility from annual affordability** in budget-phasing items.
- **Watch for whether a candidate presents a range rather than a point estimate** when the decision could flip within model uncertainty.
- **Note whether a candidate annotates or restates a measurement-change break** rather than crediting it as performance.
- **Keep timing consistent** across candidates for this level.
- **Use the workforce arithmetic item (Question 12) to observe whether a candidate distinguishes the binding constraint from the obvious one.**

### Common pitfalls to watch for when scoring

- **Rewarding annual affordability read as quarterly feasibility.**
- **Accepting a point estimate where the range would flip the decision's sign.**
- **Crediting a measurement change as genuine performance improvement.**
- **Accepting or rejecting a benchmark wholesale** rather than auditing its definitions, structures, and activity models.
- **Missing when a candidate optimises without stating the objective**, conflating ratio-maximising with budget-constrained benefit-maximising.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures exactness in reading, interpreting and reasoning from written material, using the document classes a head of function actually governs by: policy and standards text, contracts and their schedules, audit findings and management responses, board papers, assurance statements, ministerial correspondence trails, and strategic documents where a single loose sentence can commit a function to something its author never intended.

The typical format is an online, timed test of 15 to 25 minutes: passages followed by true/false/cannot-say judgements, best-summary selection, inference identification, argument evaluation, and clear-writing judgement. At senior levels, passages lengthen and layer, rewarding the reader who tracks precisely what each text commits its author to.

Verbal precision operates at organisational scale for this role. Upward-bound text carries the function's warranty before it is signed. Downward-bound text carries its authority — an ambiguity signed becomes a hundred divergent interpretations on shifts no one sees. Inward-bound text (contracts, benchmarks, programme assurances) is read adversarially when needed.

### How this assessment maps to the role

- **Precise policy and standards comprehension** maps to **Change management** and expert service management framework knowledge.
- **Assurance-language discipline** maps to **Continuity management**, **Asset and configuration management** and **Ownership and initiative**.
- **Cross-document and supersession reasoning** maps to **Incident management** and **Problem management** at governance level.
- **Argument evaluation** maps to **Availability and capacity management**, **Service focus** and the roadmap responsibility.
- **Clear-writing judgement** maps to **Community collaboration** and **User focus**.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — What an assurance statement commits to**

Passage (from a programme's readiness report): "Monitoring integration has been tested by the delivery team and no critical defects remain open against it. Performance testing is scheduled for completion before go-live. The operations acceptance criteria have been reviewed by the programme."

Statement: "The operations acceptance criteria have been met."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage says the criteria have been reviewed by the programme — an activity performed on the criteria, not a verdict rendered against them, compatible with met, partially met, or found unmeetable. This tests the assurance-verb discipline: distinguishing "tested" (by whom, against what?), "reviewed" (outcome unstated), "scheduled" (not done), and reading readiness reports for what they commit rather than what they suggest — a follow-up question that either lands now or the gap surfaces at go-live.

**Question 2 (easy) — Policy text versus policy intent**

Passage (from the organisation's change policy): "Emergency changes may be authorised outside CAB by the duty operational control manager. All emergency changes must be reviewed at the next CAB sitting. Changes authorised under the emergency provision more than three times in any rolling month by the same team trigger a process review of that team's change planning."

Last month, one team used the emergency route three times. Statement: "The team's usage has triggered a process review under the policy."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The trigger is "more than three times" — three uses equals the boundary and does not exceed it, so False. This tests reading application as textual rather than intent-based: if three-per-month is genuinely the concerning threshold, the fix is amending the policy prospectively, not reading it creatively — creative reading teaches every team that written rules are drafts.

**Question 3 (easy) — Extracting the operative obligation from audit text**

Passage (audit finding and management response): "Finding 4 (Medium): Configuration records for the secondary data centre could not be reconciled to physical assets within the audit sample; 6 of 40 sampled items showed discrepancies. Management response: Accepted. A full reconciliation of the secondary data centre's configuration records will be completed by 31 October, with quarterly sample-based verification thereafter. Owner: Head of Command and Control."

It is 15 September. Which statement accurately describes the current obligations under this text?

- A) Complete a full reconciliation of all data centres' records by 31 October.
- B) Complete a full reconciliation of the secondary data centre's records by 31 October, and thereafter operate quarterly sample-based verification — both owned by the role, with the commitment already made ("accepted"), so the residual question is delivery, not negotiation.
- C) Improve the sample pass rate above 85% by year end.
- D) No obligation yet — audit findings become binding only after the following audit cycle.

**Correct answer: B**

**Explanation:** Option A inflates the scope beyond what the text commits to. Option C converts a finding's evidence into a target the text never sets. Option D invents a deferral rule misreading the document's lifecycle stage — "Accepted" closes the negotiation phase. This tests reading a management response as the binding contract it is, including its scope, its dated versus open-ended obligations, and its ownership.

**Question 4 (moderate) — Best summary of a strategy extract**

Passage: "The centre's tooling strategy will prioritise consolidation where incident evidence demonstrates correlation failures between existing tools, and integration elsewhere. Wholesale replacement will be considered only where a tool fails its fitness review and integration costs exceed replacement costs. Fitness reviews will run annually against documented operational requirements, and no procurement will be initiated without a completed review. The strategy explicitly accepts a heterogeneous tooling estate as a legitimate end-state where the evidence supports it."

Which option best summarises the strategy?

- A) "The centre will consolidate its tools into a single platform over time."
- B) "Evidence-gated pragmatism: consolidate where incident data proves correlation failure, integrate otherwise, replace only on failed fitness review plus adverse integration economics, procure nothing without a current review — and heterogeneity is an acceptable outcome, not a transitional state."
- C) "Tool procurement requires an annual review."
- D) "The centre prefers integration to consolidation."

**Correct answer: B**

**Explanation:** Option A asserts the exact end-state the passage disclaims. Options C and D each extract one clause or flatten the conditional hierarchy. This tests structural fidelity in summarising a governance text, since strategies are enacted mostly through their summaries — a strategy whose summary loses its gates becomes, in practice, gateless.

**Question 5 (moderate) — Inference from a workforce policy tension**

Passage 1 (HR policy): "Staff on formal development programmes must be released for all scheduled training modules; operational pressure does not constitute grounds for withdrawal."
Passage 2 (minimum-staffing standard): "No shift may operate below four qualified analysts. Where staffing would fall below this level, the duty manager must secure cover before the shift begins."
Next Tuesday's night shift roster shows four qualified analysts, one of whom has a scheduled training module that evening under a formal development programme.

Statement: "The documents, taken together, require the duty manager to secure additional cover for Tuesday night."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Passage 1 removes withdrawal as an option, taking the shift to three qualified analysts against a floor of four; Passage 2 then makes securing cover mandatory. This tests recognising when two documents that never mention each other jointly convert one event (a training calendar) into a binding obligation — document interactions are where gaps actually open, and building the team's capability depends on development commitments that survive contact with the roster.

**Question 6 (moderate) — Argument evaluation: the board paper**

Passage (from a paper seeking budget): "Industry analysis shows organisations with AI-assisted operations centres resolve incidents 40% faster. Our resolution times have plateaued for three quarters. Investment in the proposed AI operations platform will therefore reduce our resolution times by approximately 40%, delivering the attached benefits case. Delay carries competitive risk, as peer departments are already procuring similar platforms."

Which is the strongest criticism of the argument?

- A) The 40% industry figure is probably invented.
- B) Three inferential failures compound: the 40% is a cross-sectional association, not a treatment effect; even as a treatment effect it would not transfer at full size to an estate whose plateau's causes are unexamined; and "peer departments are procuring" is social proof, not evidence of fitness for this organisation's requirements — the argument moves from correlation to causation to transfer to urgency without earning any of the steps.
- C) AI platforms are overhyped and the paper should be rejected on principle.
- D) The paper should have been longer.

**Correct answer: B**

**Explanation:** Each link fails differently: population correlation mistaken for causal effect, an undiagnosed plateau assumed to be fixed by the same mechanism regardless of cause, and peer procurement deployed as urgency rather than as a prompt to investigate. Option A attacks a premise without grounds and the argument fails even granting it. Option C substitutes counter-dogma. This tests decomposing an argument's chain and naming precisely which step fails — a standard anatomy worth using as a checklist for technology-investment arguments.

**Question 7 (moderate) — Two versions of a runbook clause**

Passage 1 (runbook v3.1, current): "On invocation, the duty manager notifies the head of command and control, who decides within 30 minutes whether to activate the full continuity team."
Passage 2 (draft v3.2, circulated for approval): "On invocation, the duty manager activates the full continuity team and notifies the head of command and control. The head may stand the team down if activation proves unnecessary."

Which statement best captures the governance effect of the proposed change?

- A) The change is cosmetic; the same people are involved either way.
- B) The change moves the default: v3.1 makes activation an opt-in decision held by the head inside a 30-minute window (risking delay if unreachable); v3.2 makes activation automatic with the head's role becoming stand-down authority — faster and more resilient to unavailability, at the cost of more false-positive activations, whose burden the draft accepts implicitly rather than analysing.
- C) The change removes the head of command and control from continuity decisions entirely.
- D) The change is invalid because runbooks cannot alter decision rights.

**Correct answer: B**

**Explanation:** The edit swaps a default — from safe-by-default-inactivity to safe-by-default-activity — with each carrying a different failure mode and a different party bearing its cost. This tests finding the default in a procedural edit and who bears the cost when it is wrong, since the same people involved (option A) can mean radically different failure modes, and approval should require the underlying analysis (invocation frequency, false-positive rate, the cost of delay against recovery-time targets), not just the diff.

**Question 8 (moderate) — The ministerial correspondence trail**

Passage (three extracts, in sequence): (i) Private office to the director, Monday: "The Minister has asked for assurance that the licensing service outage of 14 May cannot recur." (ii) Director's request, Monday: "Please draft assurance for the Minister that the 14 May outage cannot recur." (iii) Closed problem record, June: "Root cause: firmware defect in storage controller, vendor patch applied and verified. Residual risk: the same failure mode is eliminated; however, comparable multi-service impact could arise from other single points of failure in the shared storage layer, remediation of which is on the roadmap for Q3."

Which draft assurance is the only professionally defensible one?

- A) "The Minister may be assured that the outage cannot recur."
- B) "The specific cause of the 14 May outage — a storage controller firmware defect — has been remediated and verified, and that failure mode is eliminated. Comparable impact from related single points of failure in the shared storage layer remains possible until the remediation scheduled for Q3 completes; the interim controls are [X]. We can therefore assure that this outage cannot recur, and that the wider risk it revealed is scheduled for elimination with a defined date."
- C) "Recurrence is unlikely and the service is stable."
- D) "The outage cannot recur, though minor residual risks remain as with any system."

**Correct answer: B**

**Explanation:** The narrow, verified claim ("this outage cannot recur") has drifted through two forwarding layers toward the broad claim ("nothing like this can happen again"), which the closed problem record contradicts. Option D describes a named, material, dated risk as generic boilerplate — concealment with a disclaimer's grammar. This tests matching claim-scope to evidence-scope exactly, and a strong candidate's answer notes assurance language must survive being read aloud at the inquiry into the next incident.

**Question 9 (challenging) — True/false/cannot-say across a document stack**

Passage 1 (supplier master agreement, 2023): "Service credits are the customer's sole financial remedy for availability failures, save where failure results from supplier negligence."
Passage 2 (contract variation, January this year): "Clause 12 (service credits) is amended to increase credit rates as per Schedule A. All other provisions remain in force."
Passage 3 (supplier's letter, July): "Regarding the June outage: as service credits have been applied at the enhanced Schedule A rates, the matter is financially closed under the sole-remedy provision."

Statement: "If the June outage resulted from supplier negligence, the matter is not financially closed by the credits."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The 2023 agreement's carve-out for negligence survives the rate-only variation intact; the supplier's letter cites the sole-remedy provision while omitting its exception. The statement is conditional, and its truth follows from the texts regardless of whether the antecedent (negligence) holds — True. This tests distinguishing a conditional's guaranteed truth from its antecedent's unestablished truth, and recognising selectively complete correspondence (citing a rule while omitting its exception) as the passage's real teaching.

**Question 10 (challenging) — Clear-writing judgement: the delegation being drafted**

Out-of-hours authority is being delegated to three operational control managers. Which drafting best serves the function?

- A) "Operational control managers are empowered to take necessary action out of hours, exercising sound judgement, escalating where appropriate."
- B) "Out of hours, the duty operational control manager holds delegated authority to: authorise emergency changes within the emergency procedure; invoke continuity runbooks; commit unplanned expenditure to £10k per incident; and stand down non-critical services to protect critical ones. Excluded and reserved, waking the head if needed: public/ministerial communications; expenditure above £10k; accepting data-loss risk; and any decision to keep a citizen-facing service degraded beyond 2 hours for operational convenience. When a needed decision falls in a gap between these lists, take the reversible option, record the reasoning, and inform the head by 09:00. This delegation is reviewed quarterly against the incidents that exercised it."
- C) "All decisions remain the head's; call for any out-of-hours matter of significance."
- D) "The duty manager may do whatever the situation requires; complete trust is placed in the managers."

**Correct answer: B**

**Explanation:** Options A and D delegate everything and nothing, discovered only in retrospective judgement. Option C makes personal availability the function's single point of failure. Option B has enumerated powers with limits, enumerated reservations with a waking instruction, an explicit gap rule, and a review cycle tied to actual use. This tests whether a delegation is executable at 03:00 by someone under pressure without its author present — the test every real delegation should pass.

**Question 11 (challenging) — The health-check narrative and its data**

Passage (from a quarterly report to the directorate): "Team health continues to improve. The latest Agile health check shows 'delivery confidence' up from 3.1 to 3.8 and 'tooling satisfaction' up from 2.9 to 3.4. 'Psychological safety' declined from 3.9 to 3.2, attributed to the restructure period, and is expected to recover. Overall, the team is in its strongest position for two years."

Which criticism of the draft is most important?

- A) The report should not include health-check data at all.
- B) The narrative's headline is built on the two rising metrics while the steepest movement in the data — psychological safety falling 0.7, the largest single change in either direction — is subordinated, pre-attributed to a cause without evidence offered, and dismissed with an expectation no action supports. Safety is the leading indicator the other two lag: teams stop reporting problems before they stop delivering — so the draft buries the one number that predicts the others' future.
- C) The scores should be reported to one more decimal place.
- D) "Attributed to the restructure period" should name the individuals responsible.

**Correct answer: B**

**Explanation:** The largest movement in the data is the one the narrative subordinates and explains away without evidence. This tests auditing narrative against data even — especially — in one's own function's self-report, recognising safety as a leading indicator whose fall predicts future falls in the metrics the narrative celebrates, and recognising that a self-authored report about a self-caused restructure raises rather than lowers the required candour standard.

**Question 12 (challenging) — Supersession, scope and silence**

Passage 1 (departmental security standard, 2024): "Operational tooling holding citizen data must be hosted within approved UK regions. Exceptions require CISO approval, renewed annually."
Passage 2 (tooling strategy, signed March): "All monitoring and operational tooling procurements will comply with departmental security standards current at the time of procurement."
Passage 3 (procurement paper for sign-off, this week): "The proposed incident-analytics platform processes telemetry in the supplier's EU region before storage in the UK region. Telemetry excludes citizen data except where incident records reference user identifiers. A CISO exception was granted to the pilot in 2024."

Statement: "Signing the procurement as presented is consistent with the documents."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Two comfort clauses each leave a gap unresolved: whether identifier-referencing telemetry and transient EU processing trigger the standard at all is a definitional question the texts don't answer, and whether the 2024 exception's scope (granted to "the pilot") and currency (annual renewal) cover this full procurement is unestablished. This tests recognising that neither consistency nor inconsistency is established, and that "cannot say" about one's own estate is not an answer to accept — it identifies exactly which two questions (definitional ruling, exception status and scope) must be answered before signature.

### Administration tips

- **Score for whether a candidate distinguishes an assurance verb's actual commitment** from what it merely suggests.
- **Watch for whether a candidate applies policy text over inferred intent**, especially at a boundary condition.
- **Note whether a candidate finds the default in a procedural edit** and who bears the cost when it is wrong.
- **Use the delegation-drafting item (Question 10) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding intent over text** when the two diverge at a policy boundary.
- **Accepting a comfort clause at face value** without checking its scope and currency.
- **Missing scope drift in an assurance statement** — a narrow verified claim inflated into a broad promise.
- **Crediting vague trust language as if it were a working delegation.**
- **Rewarding an answer that exempts a candidate's own hypothetical documents from the same reading discipline** applied to others'.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic scenarios and asks the candidate to evaluate responses — most effective, least effective, ranked, or rated. Scoring is calibrated against experienced senior practitioners and leadership competency frameworks; options are rarely wrong so much as differently costly, and discrimination happens at the level of second-order and organisational effects.

At head-of-function level, the scenario space changes character: less "what do you do in the room" and more "what do your choices do to the system" — what handling one manager's failure teaches every manager, what a response to an inconvenient finding does to the probability of being shown the next one, which precedents exceptions set, and how relationships with delivery, audit, suppliers and the centre compound over years.

### How this assessment maps to the role

- **Strategy and investment dilemmas** map to the strategy roadmap and **Service focus**.
- **Capability and people dilemmas** map to building the capability of the team and **Community collaboration**.
- **Governance and integrity dilemmas** map to **Asset and configuration management** (service compliance and risk), **Change management** and **Ownership and initiative**.
- **Cross-boundary dilemmas** map to the duty to address issues across IT operations and expert service management framework knowledge.
- **Incident and continuity leadership dilemmas** map to **Incident management**, **Problem management** and **Continuity management** at head level.
- **User-outcome dilemmas** map to **User focus** and **Availability and capacity management**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A manager's first major incident, going wrong slowly**

Visible in the incident channel as a SEV1 unfolds. The newest operational control manager is leading it — their first major — and their sequencing is suboptimal: teams are working two hypotheses judged less likely, and the bridge is slightly behind the incident. Nothing dangerous is happening, but resolution is probably 30–45 minutes slower on this path. What is the most effective response?

- A) Take over the incident lead; users are affected and speed matters.
- B) Stay out entirely; they must learn, and intervention undermines them.
- C) Enter the bridge briefly as a resource, not a replacement: one or two targeted questions ("what would rule out the storage path?") that reshape the reasoning without seizing it, explicit public confidence in their lead, availability signalled — then out, with a proper debrief tomorrow.
- D) Send private step-by-step instructions through the channel so the bridge doesn't see the involvement.

**Correct answer: C**

**Explanation:** The instance cost (30–45 minutes, non-dangerous) is small against the developmental and cultural stakes of a first major. Option A spends both to buy back half an hour, teaching the manager that majors are the head's job and the team that their manager leads only until it matters. Option D is covert puppetry, teaching dependence rather than judgement. Option C is coaching at operational tempo — questions that upgrade the reasoning while leaving decisions and credit with the leader. This tests recognising that the examined variable in "your subordinate is doing it imperfectly" scenarios is what the intervention style does to authority and learning.

**Question 2 (easy) — The finding that could quietly be absorbed**

Preparing the annual assurance statement, the compliance lead reports a discovery: for eight months, a monitoring exclusion list was never cleaned up, and two citizen services ran with materially reduced monitoring. Nothing failed; the gap is now closed. The assurance statement could truthfully say monitoring controls "are operating effectively" as of today. What is the most effective response?

- A) Report controls effective as of today; the gap is closed and nothing failed.
- B) Include the gap in the assurance statement as a control failure discovered and remediated — duration, exposure, why it persisted, and the systemic fix now implemented — and commend the compliance lead's discovery visibly.
- C) Include the gap but frame it as a "process improvement opportunity" rather than a failure.
- D) Omit it from the statement but fix the exclusion process quietly.

**Correct answer: B**

**Explanation:** A statement that is technically accurate as of today while omitting a known eight-month failure is functionally misleading to anyone calibrating trust from it. Option C is softened disclosure — disclosure defeated, in genre-vocabulary that prevents weighing the finding. This tests recognising that heads are shown inconvenient findings at exactly the rate their handling of previous findings deserves, and that commending the discoverer is the cultural keystone that keeps information flowing honestly.

**Question 3 (easy) — The roadmap versus the loud quarter**

Six months into the year, a director suggests: "Pause the trend-to-action automation and the capability programme this quarter and lend those people to the delivery push — the roadmap can absorb a quarter's slip." Data shows the automation is the highest-return roadmap item and the capability programme is the fix for a qualified-lead crunch arriving in month 8. What is the most effective response?

- A) Agree fully — directors see the whole picture, and one quarter is recoverable.
- B) Refuse fully — the roadmap is signed strategy and lending operations staff to delivery sets a precedent.
- C) Come back with a differentiated counter-offer built on the numbers: identify what genuinely can slip a quarter cheaply, show why these two items specifically cannot — the automation's per-quarter deferral cost, the capability programme's cliff and its lead time — and propose equivalent staffing from the deferrable work, so the director gets the help and the roadmap keeps its two load-bearing items.
- D) Agree publicly but quietly keep both programmes running at reduced pace.

**Correct answer: C**

**Explanation:** The director's request treats the roadmap as uniformly deferrable when its items carry radically different deferral costs — the capability programme in particular defers into a cliff a quarter's pause converts from managed transition to guaranteed breach. Option B defends the least valuable roadmap items alongside the most, spending relationship capital indiscriminately. Option D is covert non-compliance. This tests never defending a portfolio uniformly — pricing the items, conceding the cheap ones loudly, and holding the load-bearing ones with numbers.

**Question 4 (moderate) — The star manager and the health-check pattern**

The strongest operational control manager — best incident leader, best delivery record — shows a pattern: their unit's health-check safety scores are the centre's lowest for the third consecutive cycle, attrition is double the centre's average, and two exit interviews this quarter named the manager's behaviour under pressure specifically. Previously raised informally, the manager said: "My team performs. The scores reflect high standards." What is the most effective response?

- A) Accept the framing — performance is real, standards are high, and some attrition is the price of excellence.
- B) Move to a formal performance conversation: the pattern (three cycles, double attrition, named behaviours) is now data, not impression; the behaviour is a defined problem with defined change expectations, a support offer, a review timeline, and clarity that continued pattern has consequences — while being equally explicit about what is valued and worth keeping.
- C) Restructure to move the affected team members away from the manager, preserving the manager's delivery.
- D) Wait one more cycle to be certain the pattern is real.

**Correct answer: B**

**Explanation:** The manager's framing is testable and refuted by the data — genuinely high-standards teams show high challenge and high safety together, not low safety plus double attrition plus named behaviours in exits. Option A prices excellence at the cost of the capability the role exists to build. Option C preserves the behaviour and ships it to a new team. Option D requests a fourth cycle of certainty at further cost per cycle. This tests using a formal performance conversation as management doing its actual job — pattern named as data, support and consequences both real, strengths affirmed.

**Question 5 (moderate) — The exception that wants to become policy**

A delivery programme with ministerial visibility asks to bypass the release policy's soak-test requirement "just for this launch window", with a credible technical argument that this release's rollback is trivially fast. The policy has no fast-track lane. Two other programmes are watching the answer. What is the most effective response?

- A) Refuse: the policy is the policy, and exceptions unravel it.
- B) Approve quietly for this programme only, and ask them not to publicise it.
- C) Approve it as a formal, recorded exception with the risk assessment attached and the compensating condition explicit — and use the case to commission the policy amendment it has revealed: a defined fast-track lane with criteria, so the next qualifying release has a legitimate route and the next non-qualifying one has a clear refusal.
- D) Approve it and simultaneously waive the requirement for the two watching programmes to be fair.

**Correct answer: C**

**Explanation:** The request is individually reasonable and systemically dangerous, and only option C handles both properties: recorded (visible, auditable), conditioned (the justifying property verified, not asserted), and metabolised into a policy amendment. Option A wastes a technically sound exception and teaches evasion. Option B creates a secret rule that watchers will discover. Option D generalises before checking whether the watchers share the justifying property. This tests treating every exception request as simultaneously a decision and a data point about the rules.

**Question 6 (moderate) — Cross-boundary standards without command**

A sister division's operations team — outside line management — configures alerting on a shared dependency to notify only their own rota; during a recent incident, this centre learned of the dependency failure eleven minutes late. Their head responds to an informal raise: "Our configuration works for our services. Your eleven minutes is an integration issue, not our problem." What is the most effective response?

- A) Escalate immediately to a shared director with the incident evidence.
- B) Accept the boundary and build detection redundancy on this side only.
- C) Reframe from blame to shared interest before escalating: bring the peer a specific, low-cost proposal (dual-notification on the shared dependency's alerts) with the incident timeline showing the mutual exposure, and propose making shared-dependency alerting a standing agreement; escalate jointly-framed only if the peer declines the near-free fix.
- D) Have engineers subscribe to their alert streams without asking, since the technical access exists.

**Correct answer: C**

**Explanation:** The peer's "not our problem" is wrong on the facts — the shared dependency exposes their services too, with roles potentially reversed next time — making the disagreement informational before it is political. The proposal is near-zero cost to the peer, narrowly scoped, and institutionalised so it survives both tenures. Option A escalates a solvable configuration gap into a political event first. Option D poisons the exact cooperation the fix requires. This tests the cross-boundary template: mutual-exposure evidence, near-free proposal, institutionalised agreement, joint escalation as fallback.

**Question 7 (moderate) — The launch pressure returns, one level up**

A ministerial launch's differentiated assurance (verified/unverified/mitigated/committed) has gone to the SRO, who phones directly: "The programme board reads your statement as a yellow light. The Minister has announced the date. I need you to move your assurance to green, or the delay is being attributed to command and control." What is the most effective response?

- A) Move to green — the SRO owns the launch decision and has heard the risks.
- B) Hold the statement exactly as written, restating that its clauses are evidenced; offer the fastest legitimate path to a stronger statement (a dated plan to upgrade the specific unverified clause); make explicit that the launch decision with the current risk profile is the SRO's to take and that the function will support launch fully under either decision; and record the exchange.
- C) Move to green but email a director afterwards noting it was done under pressure.
- D) Refuse and go to the Minister's office directly to correct the record about where delay risk originates.

**Correct answer: B**

**Explanation:** The actual request is to change the evidence, not to move a launch decision the statement never blocked. Option A's comfort — "the SRO has heard the risks" — dissolves once the record shows the risks withdrawn. Option C is capitulation with a self-protective memo. Option D converts a disagreement into political warfare unnecessarily. This tests holding the line that the statement means what the evidence says while doing everything legitimate to help — a dated upgrade plan, and returning accountability to where it belongs.

**Question 8 (moderate) — Succession and the internal favourite**

The deputy — loyal, long-serving, competent, and who covered the role well during a prior absence — expects an operational control manager vacancy. Honest assessment: strong operationally, with two genuine development gaps, and the open recruitment process has produced a visibly stronger external field. The deputy has hinted that being passed over would "probably be the sign to move on." What is the most effective response?

- A) Appoint the deputy — retention of a proven insider outweighs marginal candidate differences.
- B) Run the process straight, and invest in the deputy regardless of outcome: an honest pre-panel conversation about the field's strength and their genuine gaps; if not selected, a serious, resourced development plan targeted at the two gaps with a credible path to the next role — and acceptance that they may still leave, taken knowingly rather than avoided by an appointment.
- C) Quietly discourage the strongest external candidates so the process produces the deputy legitimately.
- D) Appoint the strongest candidate and let HR handle the deputy's disappointment through normal channels.

**Correct answer: B**

**Explanation:** The hint is a retention threat entering a merit process. Option A appoints a manager with known gaps and teaches every ambitious insider that tenure plus threat is the real currency. Option C corrupts the process itself. Option D outsources the most consequential conversation of the deputy's decade to a process letter. This tests paying every legitimate cost — honest pre-panel calibration and a resourced development path — while accepting genuinely that the deputy may leave anyway, since a head who cannot tolerate that possibility is governed by whoever hints hardest.

**Question 9 (challenging) — The supplier failure with a co-authored cause**

A major supplier's platform failed for six hours last month — the worst outage of the year, citizen-visible, ministerial questions asked. The post-incident analysis, honestly done, finds a co-authored cause: the supplier's change collided with a configuration the organisation's own team had modified outside the agreed change window, undocumented; either act alone would have been survivable. The sole-remedy carve-out is in play, and a director wants maximum commercial recovery, asking to "keep the analysis focused on their change." What is the most effective response?

- A) Keep the analysis focused as directed — the supplier's change was genuinely the trigger, and the commercial recovery serves the public purse.
- B) Produce the complete analysis — both causes, documented — and advise that the commercial strategy must be built on the full facts: pursue recovery for the supplier's share on honest ground, disclose and fix the team's own window breach through the normal problem process, and let the commercial negotiation price both truths.
- C) Bury both the analysis and the claim — pursuing recovery risks exposing the team's breach, so let the credits stand as settlement.
- D) Disclose the team's contribution to the supplier informally and privately, peer to peer, so the negotiation stays friendly.

**Correct answer: B**

**Explanation:** Configuration changes leave histories, and a curated claim has a failure mode worse than weakness: collapse at maximum exposure when the supplier's own investigation finds the undocumented modification — after which the legitimate half of the claim (their genuine share, real regardless of co-authorship) reprices along with everything else the function has ever asserted. Option A is the strategy with the worst expected value dressed as pragmatism. Option D gives away negotiation information without authority. This tests recognising that integrity is the commercial strategy correctly understood, and that the embarrassing half of a co-authored cause is also the half that can actually be fixed.

**Question 10 (challenging) — Least effective: the quiet quarter**

An unusually calm quarter, genuine discretionary time for the first time in a year. Four candidate uses: (1) run the continuity exercise programme incidents keep displacing — full failover test, no-notice invocation drill, a tabletop for the highest-rated but never-rehearsed risk; (2) advance deferred analytical roadmap work; (3) invest in delayed development conversations, skip-levels, and succession/pipeline work the workforce arithmetic flagged; (4) tighten reporting — rebuild the board pack around weighted-availability and leading-indicator work, annotate measurement breaks, pre-empt next quarter's questions. Which is the LEAST effective use of the quiet quarter?

- A) Option (1)
- B) Option (2)
- C) Option (3)
- D) Option (4)

**Correct answer: D**

**Explanation:** Options (1) and (3) both score highest on requiring calm and addressing compounding exposures — exercises and development conversations are the first casualties of operational pressure. Option (2) is calendar-flexible and survives a moderately busy quarter. Option (4) is least effective not because reporting hygiene is worthless, but because it displaces genuinely calm-dependent, compounding work with the most schedulable and delegable of the four — and reporting work is visible upward while drills at 03:00 are not, which is exactly the temptation this tests. The heuristic: spend quiet on what only quiet enables, and on what compounds while waiting.

**Question 11 (challenging) — The user harm nobody is measuring**

A routine deep-dive surfaces something the dashboards don't show: the licensing service's assisted-digital channel — used disproportionately by elderly and vulnerable users, stable at ~7% of transactions — has a completion rate that has quietly fallen from 84% to 61% over a year, caused by three separate "digital-first" changes, each individually approved, each fine for the majority channel, each adding friction to the assisted route. No SLA covers assisted-digital completion; no board metric captures it; the service owner (a peer) considers the digital-first programme a success on measured KPIs. What is the most effective response?

- A) Note the finding and file it — no SLA is breached, the service owner's KPIs are green, and cross-directorate measurement gaps are above this level.
- B) Fix what is in this estate quietly and leave the rest.
- C) Treat it as the systemic finding it is, on three fronts: immediately, take the evidence to the service owner peer-to-peer, framed as "your programme's measured success is hiding an unmeasured harm; here is the data you'd want to see"; structurally, propose assisted-digital completion become a measured KPI with a floor; internally, revert or remediate the change in this estate now, and commend the analyst's deep-dive visibly.
- D) Escalate directly to the service owner's director with the data, since vulnerable users are being harmed and speed matters more than protocol.

**Correct answer: C**

**Explanation:** This is aggregate optimisation harming an unmeasured minority — each change individually rational, collectively catastrophic for a population appearing in no KPI. Option A's "no SLA breached" is precisely the problem, since the absence of the measure is the finding. Option B fixes a third of the harm silently, leaving the mechanism intact for the next change. Option D skips the cheap move a peer would likely act on, spending escalation before it's needed. This tests the three fronts of a full repair — instance, relationship-mediated instance, and system — and recognising that measured populations are protected populations.

**Question 12 (challenging) — Most and least: the last morning of the quarter**

08:30, quarter-end Friday. Four items: (i) a director asks for a view today on absorbing a suddenly-vacant peer function, doubling scope, board paper by Monday; (ii) two resignations landed this morning, making next month's on-call incident-lead coverage arithmetically impossible without intervention; (iii) an assurance statement for a ministerial launch is due for final signature by noon, with yesterday's 10-day validation results unread on the desk; (iv) the best operational control manager, offered the vacant peer role in (i), asks for an hour of honest counsel before responding today. Which approach is most effective?

- A) Morning on (i) — delegate (iii)'s reading, hold (ii) until Monday, fifteen minutes for (iv).
- B) Sequence by irreversibility and dependency: read (iii) first (the noon signature is the morning's only irreversible act, and the validation is its entire evidential basis); then (iv) in full (time-bound today, and its outcome is input to (i)); give the director a structured interim on (i) declining a same-day verdict; convert (ii) into a 30-minute triage today with a decision reserved for Monday.
- C) Morning on (ii) — people first; ask for the assurance deadline to move, postpone (iv).
- D) Morning on (iv) and (i) together; sign (iii) on a verbal summary that validation "went fine"; slot (ii) for Monday.

**Correct answer: B**

**Explanation:** Approach B reads (iii) personally, since signing an assurance without reading its completed evidence would repeat privately the exact failure resisted publicly elsewhere; gives (iv) the full hour it is genuinely time-bound and career-defining for; converts (i) from a same-day verdict to a structured interim, since doubling scope on stale information is the pressure-tempo at which heads absorb functions they shouldn't; and right-sizes (ii) as urgent-this-week rather than urgent-this-morning. Approach D's treatment of (iii) — signing on a verbal summary — is disqualifying regardless of its other elegance. Approach C misreads which people-problem is today's. Approach A inverts the dependency order. This tests sequencing by irreversibility and dependency rather than by loudness or rank, and doing personally what a signature makes personal.

### Administration tips

- **Score for whether a candidate treats a system-level lesson as more valuable than an instance fix** in every scenario.
- **Watch for whether a candidate prices both sides of a people-decision** — the visible cost of acting and the compounding cost of not acting.
- **Note whether a candidate identifies the disqualifying option first** in most/least items — often the one that spends integrity or corrupts a process, dressed as efficiency.
- **Use the succession item (Question 8) and the supplier item (Question 9) to observe whether integrity holds under commercial and personal pressure simultaneously.**
- **Keep candidates scored to head-level judgement** — system effects, precedent, and organisational-scale accountability — not operational-level judgement.

### Common pitfalls to watch for when scoring

- **Rewarding an instance fix that leaves the system's mechanism intact.**
- **Crediting comfort purchased with curation** — a softened finding, a green-shifted assurance, a buried decline.
- **Missing when loyalty or delivery performance is rewarded with exemption from standards.**
- **Rewarding escalation as a first resort across organisational boundaries**, rather than a fallback after a peer conversation with evidence.
- **Accepting a same-day verdict on a structural question** as if pressure-set tempo were a legitimate constraint on analysis.

## Conclusion

This document has given you a demanding set of assessment material for the four types most relevant to a head of command and control: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests reading incident portfolios as strategy input, deducing through policy and contract simultaneously, catching an edited denominator in a compliance dashboard, and building differentiated assurance for a launch that cannot wait for perfection. The numeric section tests budget profiles rather than totals, pricing retention against attrition, finding where a service-credit cap stops incentivising a supplier, and refusing to let a point estimate decide a case whose sign flips inside its own uncertainty. The verbal section tests the assurance-verb lexicon, boundary conditions applied exactly even against inferred policy intent, tracing a carve-out through a document stack, and drafting a delegation executable at 03:00. The situational judgement section tests the calls that define headship: coaching a first-time incident leader without taking the bridge, disclosing a finding that could have been absorbed, holding an assurance against pressure, running succession straight against a retention threat, and spending a quiet quarter on readiness and people rather than visibility.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can lead a function's judgement about judgement — reading evidence precisely, quantifying honestly, and protecting long-term system health under pressure to trade it for short-term comfort — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
