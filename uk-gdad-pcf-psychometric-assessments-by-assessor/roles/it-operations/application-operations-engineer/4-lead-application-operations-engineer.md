# Lead Application Operations Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead application operations engineer, within the UK Government Digital and Data profession. At this level the role changes shape: defining the application strategy and the strategy for security administration, liaising with other leads across IT operations on how applications are performing and what changes need to be put in place, and remaining close enough to delivery to manage aspects of an application when complexity and business impact warrant it. A candidate at this level leads incident investigations rather than merely participating in them, manages high-impact complex changes rather than routine ones, sets standards rather than only following them, and develops the engineers around them.

Psychometric assessments are structured, standardised exercises measuring the cognitive capabilities and professional judgement that predict success in a role. For a lead application operations engineer, the relevant assessments are emphatically job-specific: they use the artefacts the role genuinely handles — release policies, incident command timelines, capacity and availability reports spanning multiple services, security standards, test strategies, cross-team change schedules — and the decisions the role genuinely makes, such as arbitrating between conflicting priorities across teams, judging when a complex change is safe to approve, deciding what an incident review should conclude, and choosing how to develop a struggling engineer.

Why does this matter at this level? Because leadership in operations is applied judgement at scale. Every dimension the four assessments measure — pattern recognition across noisy data, precise deduction from policy, numerical fluency with service data, exact reading of dense documents, and situational judgement under competing pressures — is a dimension of decisions whose consequences extend beyond the candidate's own work to their team's delivery, their peers' services, and the organisation's users.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and its typical format, a mapping of its dimensions to the named skills in the role summary, a substantial set of items with full worked explanations for you to use as an answer key, administration notes, and common pitfalls to watch for when scoring. The scenarios feature the textures of lead-level work: cross-team dependencies, strategy trade-offs, governance, mentoring, and ambiguity.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate you assess at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so your record is honest. Afterwards, use the explanations to structure a debrief. Several scenarios also make excellent material for a candidate's own future team development conversations — worth mentioning if the candidate is successful. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. For a lead application operations engineer it presents the materials of the working day — multi-service dashboards, release calendars, security standards, incident timelines, cross-team dependency maps — and asks the candidate to reason about them quickly and accurately: recognising patterns, deducing consequences from rules and policies, checking artefacts for inconsistency, prioritising under competing demands, and solving problems with several interacting constraints.

The typical format is an online, timed test lasting 15 to 30 minutes with 20 to 30 questions of graduated difficulty. Scoring is objective against a norm group; adaptive platforms adjust difficulty to performance, and employers typically receive a speed-versus-accuracy profile rather than a single figure. For senior and lead candidates, norm groups are often more demanding, and questions lean toward multi-step reasoning.

For this role, cognitive assessment is particularly relevant because leadership decisions are structured reasoning with organisational consequences. Defining an application strategy means deducing where current trajectories lead and which interventions change them. Managing high-impact, complex changes means holding a dependency graph, a risk register, and a calendar in mind simultaneously. Leading incident investigation means running hypothesis elimination while directing others and communicating upward. A well-designed cognitive assessment samples these demands in miniature — and at lead level, a candidate's accuracy would be inherited by everyone who acts on their conclusions.

### What it measures for the role

- **Pattern recognition** maps to **Problem management** and **Ownership and topic**: initiating investigations into patterns and trends, and being proactive in searching for potential problems, both mean seeing structure in operational noise before it becomes an outage.
- **Logical deduction** maps to **Change management** and **Service management framework knowledge**: managing high-impact, complex change requests and ensuring release policies are applied requires deducing exactly what a policy permits, forbids, and implies.
- **Error checking** maps to **Asset and configuration management** and **Technical specialism**: maintaining secure configuration and accurate information, and setting standards for the definition, security and integrity of objects, both come down to detecting the record, procedure, or artefact that contradicts the standard or reality.
- **Prioritisation** maps to **Incident management** and **Availability and capacity management**: leading the investigation and resolution of incidents while managing service components against business needs and KPIs demands rapid, defensible ranking across competing demands.
- **Applied problem solving** maps to **Service focus** and **Testing**: establishing coherent frameworks that work, and managing the planning of system and acceptance tests, are constraint-satisfaction problems at the scale of processes and programmes.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across service dashboards**

A candidate reviews the weekly error-rate summary (errors per 10,000 requests) for the four applications in their portfolio over four weeks:

| Application | W1 | W2 | W3 | W4 |
|---|---|---|---|---|
| Case Tracker | 3 | 3 | 4 | 3 |
| Document Store | 5 | 5 | 5 | 5 |
| Licensing | 2 | 4 | 8 | 16 |
| Notifications | 7 | 6 | 7 | 6 |

Which application most warrants proactive investigation, and why?

- A) Notifications — it has the highest average error rate.
- B) Licensing — its error rate is doubling weekly, a compounding trend that will dominate within weeks.
- C) Document Store — a perfectly flat rate suggests the monitoring is broken.
- D) Case Tracker — any variation deserves investigation.

**Correct answer: B**

**Explanation:** Distinguishing level from trajectory: Notifications runs the highest level (average 6.5) but is stable — worth scheduled attention, not urgency. Licensing runs the lowest starting level but shows geometric growth: 2, 4, 8, 16 doubles weekly; extrapolated, week 6 reaches 64 and week 8 reaches 256, overtaking everything in the portfolio. Trajectory outranks level when it compounds. Option C's suspicion is worth a passing check, but a stable 5 across four weeks is unremarkable for a mature service. Option D dissolves prioritisation entirely. This item probes the proactive clause of **Ownership and topic**: a lead is accountable for spotting the compounding curve while it is still small, because by the time it is large, it is an incident with their name on the review.

**Question 2 (easy) — Deduction from a release policy**

A release policy states: "High-impact changes require both CAB approval and a named rollback owner. Changes touching security infrastructure additionally require sign-off from the security administration lead. No change may have the same person as implementer and rollback owner." A proposed change is high-impact and touches security infrastructure; Priya is listed as implementer and rollback owner, and CAB approval is recorded. Which conditions remain unsatisfied?

- A) CAB approval only.
- B) Security sign-off only.
- C) Security sign-off, plus the rollback owner must be someone other than Priya.
- D) None — the change is ready.

**Correct answer: C**

**Explanation:** Enumerating the policy's conditions for this change class: CAB approval — recorded, satisfied; named rollback owner — named, but the separation rule must be tested next; security-touching sign-off — absent, unsatisfied; separation of implementer and rollback owner — Priya holds both, violated. Two defects remain, as option C states. The method matters more than the instance: policies are conjunctions of conditions, and the reliable technique is a checklist sweep, never a gestalt impression of "looks approved". Ensuring that release policies are applied is the **Change management** skill verbatim, and the separation-of-duties clause enforced here is a control a security administration strategy would itself contain.

**Question 3 (easy) — Error checking against a security standard**

An object security standard requires: (i) every database view exposing citizen data must be named with the prefix "sec_"; (ii) access to such views is granted to roles, never to individual accounts; (iii) every grant must have an expiry date. An audit extract shows four grants:

1. View sec_case_summary → role CASEWORK_READ, expires 2027-03-31
2. View sec_payments_detail → account j_donovan, expires 2027-01-31
3. View sec_referrals → role REFERRAL_READ, expires 2026-12-31
4. View case_notes_open (exposes citizen data) → role CASEWORK_READ, expires 2027-03-31

Which grants breach the standard?

- A) Grant 2 only
- B) Grants 2 and 4
- C) Grant 4 only
- D) Grants 2, 3 and 4

**Correct answer: B**

**Explanation:** Testing each grant against all three rules: Grant 1 is clean. Grant 2 is prefixed and has an expiry, but the grantee is an individual account, breaching rule (ii). Grant 3 satisfies all three rules. Grant 4 is role-based with expiry, but the view exposes citizen data without the "sec_" prefix, breaching rule (i) — and unprefixed views escape whatever automated tooling keys on the naming convention, which is why naming standards are security controls, not cosmetics. Two breaches: grants 2 and 4. Setting standards for object definition, security and integrity — and ensuring conformity — is the **Technical specialism** skill, and conformity checking means every object against every rule, with no gestalt shortcut.

**Question 4 (moderate) — Prioritisation across a lead's morning**

It is 09:00 Monday. Five demands compete:

1. A severity 1 incident on the licensing application started 20 minutes ago; the candidate's senior engineer is leading it competently and has not requested help.
2. The IT operations leads' meeting at 10:00 needs the candidate's quarterly performance summary, not yet finalised.
3. A departmental security bulletin requires the candidate to confirm by noon whether their applications use a newly vulnerable library.
4. A junior engineer is waiting for the 09:30 development conversation the candidate has already postponed twice.
5. A peer lead has emailed asking to discuss a change conflict for next month's release calendar.

Which ordering of attention is most defensible?

- A) 1 (take over), 3, 2, 4, 5 — a severity 1 demands the lead in command
- B) 3, 1 (brief check-in), 2, 4, 5 — start the security confirmation, verify incident command is sound, finalise the summary, keep the development conversation, schedule the peer discussion
- C) 2, 3, 1, 4, 5 — the leads' meeting is soonest
- D) 3, 2, 5, 1, 4 — externally imposed deadlines first, people last

**Correct answer: B**

**Explanation:** The discriminating judgement is item 1: a lead's instinct to command every severity 1 is a trap — the senior engineer is leading competently and has not asked for help, so taking over undermines their development and adds no diagnostic value, while ignoring it wholly is also wrong, since accountability remains with the lead. The calibrated move is a brief check-in. Item 3 starts first, its noon deadline external and hard. Item 2 fits before 10:00 once items 3 and 1 are in motion. Item 4 is the quiet leadership test: a twice-postponed development conversation cancelled a third time teaches the junior exactly how much they matter, and option B keeps it. Item 5 is genuinely schedulable. Option C puts an internal meeting above a security deadline; option D deprioritises a live severity 1 and postpones the junior again. Lead-level prioritisation is delegation-aware: not only "what matters most?" but "what needs me, and what needs me only to verify?"

**Question 5 (moderate) — Deduction in a cross-team incident**

A cross-cutting outage affects three services. A candidate establishes: (i) the shared authentication service was patched last night; (ii) Service A, which uses the shared authentication service, is down; (iii) Service B, which does not use it, is also down; (iv) Service C, which uses it, is healthy; (v) Services A and B — but not C — depend on the message queue cluster. Which hypothesis best fits all the evidence?

- A) The authentication patch broke dependent services.
- B) The message queue cluster is the common cause: it explains A and B being down and C being healthy.
- C) Two unrelated failures coincidentally began together.
- D) Service C is actually down but its monitoring is lying.

**Correct answer: B**

**Explanation:** Testing each hypothesis against all five facts: the authentication patch (A) is the seductive answer — it is the thing that changed — but it fails twice, since Service B is down without using authentication, and Service C uses authentication yet is healthy. The message queue hypothesis (B) fits perfectly: A and B share the queue dependency and are down; C lacks it and is healthy. Option C multiplies entities without need. Option D rescues a broken hypothesis by impeaching the evidence rather than verifying it. Part of leading an investigation — the **Incident management** skill — is steering the room from the most recent cause to the most consistent one, out loud, with the dependency facts visible to everyone.

**Question 6 (moderate) — Error checking a test strategy**

A test manager submits an acceptance test plan for a major release. It states: (i) "Functional coverage: all 14 user-facing workflows will be tested." (ii) "Non-functional coverage: performance testing will confirm the service sustains 500 concurrent users." (iii) "The performance environment is provisioned at 40% of production capacity." (iv) "Performance results will be reported as production-ready without adjustment." Assuming statements (i)-(iii) are accurate, which statement creates the problem, and why?

- A) Statement (i) — fourteen workflows is too many to test.
- B) Statement (ii) — 500 concurrent users is an arbitrary target.
- C) Statement (iv) — results from a 40%-capacity environment cannot be reported as production-ready without scaling analysis or caveat.
- D) There is no problem; the plan is coherent.

**Correct answer: C**

**Explanation:** The defect is the inference leap between (iii) and (iv). Testing on 40% of production capacity is common and legitimate, but results from it require extrapolation, stated assumptions, and caveats before they say anything about production behaviour, since performance rarely scales linearly. Statement (iv) launders environment-limited results into an unqualified production claim — exactly how a release passes testing and fails its first busy morning. Options A and B attack reasonable content. The **Testing** skill at lead level is precisely this review: co-ordinating functional and non-functional specifications and providing authoritative advice — here, "report the results with the scaling caveat, or provision a representative environment for the critical paths".

**Question 7 (moderate) — Applying ITIL life cycle knowledge**

A department is standing up a new citizen-facing application. Four pieces of work are proposed: (1) define the service's availability targets with the business; (2) design the monitoring and alerting for the service; (3) agree the process by which future changes to the service will be assessed; (4) run the service desk that handles its live incidents. In ITIL life cycle terms, which sequencing principle is soundest?

- A) All four belong to service operation and can proceed in parallel after go-live.
- B) Targets (1) belong to design-stage thinking and shape monitoring (2); change assessment (3) belongs to transition and must exist before go-live; incident handling (4) is operation — so 1 and 2 precede 3, which precedes live running of 4.
- C) The service desk (4) should be designed first, since incidents are inevitable.
- D) Change assessment (3) is only needed once the first change is requested.

**Correct answer: B**

**Explanation:** Availability targets are design decisions made with the business, and they drive monitoring design, since alerting thresholds derive from targets, not vice versa — so 1 shapes 2. Change assessment machinery belongs to service transition and must exist before go-live, because the first urgent post-launch fix will otherwise arrive with no assessment route — option D discovers this the expensive way. Incident handling is operation, running once live. Option A collapses the life cycle into operations, the anti-pattern the framework exists to prevent. Option C inverts priorities. **Service management framework knowledge** requires demonstrating life cycle understanding, and this is its practical form: knowing which decisions belong upstream so operations inherits a manageable service rather than an accident in progress.

**Question 8 (moderate) — Pattern recognition in change outcomes**

Reviewing six months of change records across a portfolio, a candidate finds: changes implemented by the originating team alone have a 4% failure rate; changes involving two teams have a 9% failure rate; changes involving three or more teams have a 23% failure rate. Volumes are similar across the categories. Multi-team changes also show clustering of failures around handover steps. What is the most useful conclusion for a change strategy?

- A) Ban changes involving three or more teams.
- B) The data suggests co-ordination — particularly at handovers — is the dominant failure driver; strengthen multi-team change controls: mandatory joint planning, explicit handover criteria, and a single named co-ordinator for 3+ team changes.
- C) The multi-team failure rate is acceptable because such changes are inherently harder.
- D) Redistribute engineers so every change can be done by one team.

**Correct answer: B**

**Explanation:** The pattern is steep — 4%, 9%, 23% — and clustering around handover steps localises the mechanism: it is not that multi-team work is uniformly harder, but that failures concentrate where responsibility transfers. Option B converts pattern into targeted intervention. Option A amputates capability the organisation needs. Option C normalises the signal — "inherently harder" is where improvement goes to die. Option D solves co-ordination by reorganising around it, an intervention whose cost dwarfs the problem. This is **Change management** at strategy altitude, and equally the **Problem management** pattern-and-trend duty applied to the change process itself.

**Question 9 (hard) — Multi-constraint release calendar arbitration**

Four teams need production windows in the same fortnight. Constraints: (i) the payments release (team P) must complete before the 15th for regulatory compliance; (ii) the infrastructure upgrade (team I) needs a full weekend and invalidates any release made in the 48 hours before it, because those releases would need re-certification on the upgraded platform; (iii) the casework release (team C) depends on the infrastructure upgrade being complete; (iv) the notifications release (team N) has no dependencies but its only available engineers are on training after the 10th; (v) weekends fall on the 6th-7th and 13th-14th. Which schedule satisfies all constraints?

- A) N on the 3rd, P on the 9th, I on the weekend of the 13th-14th, C on the 16th
- B) P on the 12th, I on the weekend of the 13th-14th, C on the 16th, N on the 17th
- C) N on the 3rd, I on the weekend of the 6th-7th, P on the 9th, C on the 11th
- D) I on the weekend of the 6th-7th, C on the 9th, P on the 14th, N on the 5th

**Correct answer: C**

**Explanation:** Option B fails immediately: P on the 12th sits inside the 48-hour invalidation window before the 13th-14th upgrade, forcing re-certification of a regulatory release with no margin before the 15th. Option D also fails: N on the 5th falls within 48 hours of the 6th-7th upgrade, and P on the 14th leaves the regulatory deadline hostage to a weekend upgrade running alongside it. That leaves A and C, both technically feasible. The discriminator is risk: under option A, the payments release ships on the 9th certified against the old platform, then the platform is upgraded beneath it on the 13th-14th, leaving regulatory-critical code running on infrastructure it was never released against. Under option C, the platform change happens first, so every subsequent release — including payments on the 9th — is certified on the platform it will actually run on, with days of margin. Liaising with peer leads on the changes that need to be put in place means choosing the schedule that minimises certification risk and preserves margin around regulatory dates: option C. Constraint satisfaction gets to feasible; risk-aware sequencing gets to defensible.

**Question 10 (hard) — Proactive problem detection from weak signals**

No incidents have been raised, but during a routine review a candidate notices three weak signals about the document store: (a) nightly backup duration has grown from 2 to 5 hours over six months; (b) two "disk latency" warnings appeared last month, each self-clearing within minutes; (c) the storage array's firmware version appears on the supplier's "recommended upgrade" list, with release notes mentioning "improved handling of degraded disk conditions". What is the strongest reading of these signals together?

- A) Three unrelated observations; note them individually and move on.
- B) The signals cohere into a hypothesis: storage performance is degrading (backup growth, latency warnings) and the supplier's firmware note hints at known degraded-disk handling issues — investigate the array's health now, before this becomes an unplanned outage.
- C) The backup growth is the only real issue; schedule a backup redesign for next quarter.
- D) Wait for an actual incident to confirm the hypothesis, since acting on weak signals wastes resources.

**Correct answer: B**

**Explanation:** Individually, each signal has an innocent explanation. The lead-level skill is conjunction: three independent weak signals pointing at the same subsystem multiply, not add. The composite hypothesis — the array is quietly degrading — is testable cheaply now and catastrophically expensive later. Option A refuses to synthesise. Option C treats a symptom as the disease. Option D inverts the proactive clause of **Ownership and topic** — waiting for the confirming incident means waiting for the harm. Proactive investigation on converging weak evidence is the cheapest moment available to buy back this particular outage.

**Question 11 (hard) — Designing a coherent operational framework**

A candidate inherits responsibility for a portfolio of five applications previously run by five separate teams, each with different practices: different severity definitions, different change categories, different on-call arrangements, and different monitoring tools. Leads across IT operations are asking for consistent reporting. Not everything can be changed at once without destabilising delivery. Which sequencing establishes coherence most effectively?

- A) Mandate a single toolset first — shared tooling will force practice convergence naturally.
- B) Standardise the shared *language* first (one severity scale, one change taxonomy, mapped from each team's current terms), so reporting and cross-team comparison work immediately; then converge processes (on-call, change flow) team by team by risk priority; migrate tooling last, once practices are stable enough to encode.
- C) Let each team keep its practices but build a translation layer in the reporting spreadsheet.
- D) Converge everything simultaneously in a single quarter with a hard cutover date.

**Correct answer: B**

**Explanation:** Testing each option against what "coherent frameworks that work" (**Service focus**) actually requires — comparability now, convergence over time, and no self-inflicted outages: option B sequences by dependency and cost. A shared severity scale and change taxonomy are cheap to adopt and unblock reporting immediately, creating the common language every later convergence conversation is conducted in. Process convergence follows, ordered by risk. Tooling migrates last, because tools encode practices, and migrating tools before practices converge either forces five practice changes at once (option D's chaos, compressed) or configures the new tool five different ways. Option C makes divergence permanent and load-bearing. The deep pattern: standardise semantics before processes, processes before tools.

**Question 12 (hard) — Strategy deduction under uncertainty**

A candidate is drafting the application strategy for a case management application. Facts: (i) the supplier has committed support until 2031, with no commitment beyond; (ii) the department's digital strategy mandates cloud hosting for all services by 2029; (iii) the application's current version cannot run in cloud environments, but the supplier's next major version (available 2027) can; (iv) a full replacement procurement would take an estimated three years; (v) user satisfaction with current functionality is high. Which strategic conclusion follows most soundly?

- A) Begin replacement procurement now — supplier support beyond 2031 is uncertain.
- B) Do nothing until 2030 — support runs to 2031 and users are satisfied.
- C) Plan to adopt the supplier's cloud-capable version around 2027-2028, satisfying the 2029 cloud mandate within the supported product line; simultaneously set a decision point around 2027 for the post-2031 question, when the supplier's roadmap and the version upgrade's success will be visible — preserving the replacement option (three-year lead time) against a 2031 horizon.
- D) Seek an exemption from the cloud mandate — migration is disruptive and users are happy.

**Correct answer: C**

**Explanation:** Laying the timelines against each other: the 2029 mandate is the nearer, harder constraint, satisfiable inside the current product line via the 2027 upgrade, without discarding functionality users value. The 2031 support horizon is the second constraint, and the three-year procurement lead time is the strategic arithmetic that matters — a replacement must begin by roughly 2028 to be safe if support ends in 2031, so option C's 2027 decision point is option-preservation timed to the last responsible moment, when two currently-unknowable facts will be known. Option A spends three years hedging a risk that may resolve itself, abandoning high satisfaction prematurely. Option B is the mirror error — by 2030, the replacement option has already expired. Option D gambles on an exemption that may be refused. Defining the application strategy — the role's headline duty — means sequencing commitments against constraint timelines so every future decision is made at the moment of maximum information, while the alternatives are still alive.

### Administration tips

- **Watch for how a candidate synthesises weak signals** (Questions 1 and 10) — the ability to conjoin independent low-confidence observations into an actionable hypothesis is one of the hardest lead-level skills to fake.
- **Score policy-sweep items (Questions 2 and 3) for method** — a candidate who visibly checks every clause is showing the governance habit the role needs, independent of whether one item slips.
- **Note how a candidate handles delegation-aware prioritisation** (Question 4) — resisting the urge to take over a competently-led incident is a strong positive signal, not hesitancy.
- **Keep timing consistent** across candidates for this level.
- **Use the multi-constraint items (Questions 9, 11, 12) as debrief material** — asking a candidate to talk through why one feasible schedule beats another feasible one often reveals more than the answer alone.

### Common pitfalls to watch for when scoring

- **Rewarding command-seizure over verification** in prioritisation scenarios.
- **Preferring the recent cause to the consistent one** in diagnosis items.
- **Accepting "feasible" when "defensible" is available** — two schedules can both satisfy the constraints; the one preserving margin and integrity is the stronger answer.
- **Under-weighting a candidate's mechanism-seeking over cliché** — "multi-team changes are inherently harder" is an analysis-terminating answer that should score lower than a quantified intervention.
- **Rewarding tooling-first answers** in framework-design items — language, then process, then tools is the pattern to look for.
- **Missing timeline errors dressed as prudence** — "wait and see" answers that silently overrun a lead time deserve a second look.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and insightfully a candidate works with the quantitative material a lead's decisions run on: portfolio-level availability and incident statistics, capacity and cost projections, change failure rates, test coverage figures, and user research data. Beyond calculating percentages, ratios, weighted averages, and rates of change, the lead-level emphasis falls on interpretation and decision: what does this trend commit us to, which of these two honest calculations should govern the decision, and what will this number cost or save?

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 data-based questions, calculators permitted. For senior and lead candidates, items increasingly present two or more datasets to reconcile, because reconciling datasets is what leads actually do with numbers.

Why does this matter for the role? Because these numbers travel. A performance summary presented at the IT operations leads' meeting shapes cross-team decisions; a capacity forecast signed off drives procurement; change failure statistics calibrate the organisation's risk appetite; KPI figures are how the business knows whether its services work. The role summary commits a candidate to managing service components against business needs and KPIs, and to liaising with leads on how applications are performing — both numerical acts performed in public.

Every item below uses data of the kind a portfolio genuinely produces, and every explanation shows the arithmetic step by step for your reference when scoring, since in this role showing the working is how a candidate would defend a figure when a peer lead or a finance partner challenges it.

### What it measures for the role

- **KPI and availability arithmetic** maps to **Availability and capacity management**: fluent conversion between availability percentages, downtime budgets, and user impact — across a portfolio, not just a service.
- **Trend analysis and forecasting** maps to **Ownership and topic** and **Technical specialism**: being proactive in searching for potential problems is often numerical.
- **Change and release statistics** map to **Change management**: managing high-impact changes depends on failure rates, and on knowing what those rates do and do not prove.
- **Test metrics** map to **Testing**: reading pass rates, coverage percentages, and performance results, including spotting when a number is being asked to claim more than it can.
- **Incident and problem statistics** map to **Incident management** and **Problem management**: computing rates, comparing baselines, and verifying that remedies actually moved the numbers.
- **User data interpretation** maps to **User focus**: representing users internally is frequently done with numbers, and championing user research includes keeping those numbers honest.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Portfolio availability**

A portfolio's four applications recorded these availability figures last month: 99.8%, 99.5%, 99.9%, and 98.8%. What was the simple average availability across the four applications?

- A) 99.5%
- B) 99.6%
- C) 99.4%
- D) 99.0%

**Correct answer: A**

**Explanation:** Sum the figures — 99.8 + 99.5 + 99.9 + 98.8 = 398.0 — and divide by 4: 99.5%. Note what this average conceals: three healthy services and one (98.8%) that missed a typical target by a wide margin. A portfolio average is a legitimate headline, but presented alone it would bury the one number requiring action — lead-level numeracy is calculating correctly and choosing which figures must accompany the summary.

**Question 2 (easy) — Change failure rate comparison**

Last quarter a portfolio implemented 150 changes with 12 failures. The quarter before, it implemented 120 changes with 12 failures. What happened to the change failure rate?

- A) It stayed the same — 12 failures both quarters.
- B) It fell from 10% to 8%.
- C) It rose from 8% to 10%.
- D) It fell from 12% to 10%.

**Correct answer: B**

**Explanation:** Earlier quarter: 12 ÷ 120 = 10%. Last quarter: 12 ÷ 150 = 8%. The rate fell — option B. Option A is the trap: identical failure counts conceal different rates when volumes differ, and volume grew 25%. A peer lead glancing at raw counts might claim no improvement, while the rate shows the process absorbed more change at lower risk per change.

**Question 3 (easy) — Downtime budget across services**

A shared platform underpins three of a portfolio's applications. Its availability KPI is 99.95% over a 30-day month (24-hour service). To the nearest minute, what is its monthly downtime budget?

- A) About 216 minutes
- B) About 43 minutes
- C) About 22 minutes
- D) About 130 minutes

**Correct answer: C**

**Explanation:** Minutes in the month = 30 × 24 × 60 = 43,200. Permitted downtime = 0.05% of that = 21.6 minutes ≈ 22 minutes. Option A is the 99.5% budget, option B the 99.9% budget — decimal-place neighbours designed to punish haste. A shared platform at 99.95% has a downtime budget shorter than most incident response times, which is why platforms underpinning multiple services carry tighter targets than the services themselves.

**Question 4 (moderate) — Weighted portfolio incident rate**

Four applications in a portfolio handled these volumes last month: Case Tracker 400,000 transactions with 32 incidents; Document Store 250,000 with 30 incidents; Licensing 100,000 with 18 incidents; Notifications 50,000 with 4 incidents. Which application has the highest incident rate per 100,000 transactions?

- A) Case Tracker
- B) Document Store
- C) Licensing
- D) Notifications

**Correct answer: C**

**Explanation:** Normalising: Case Tracker 8.0, Document Store 12.0, Licensing 18.0, Notifications 8.0 per 100,000. Licensing leads, more than double Case Tracker's rate despite half the incident count. The trap is Case Tracker's raw 32, the biggest absolute number. Normalisation is the entire game in portfolio comparison, and this is where **Problem management** trend work should point its effort.

**Question 5 (moderate) — Cost of an availability improvement**

The business asks what it would take to move a service from 99.5% to 99.9% availability. Analysis shows the main driver is recovery time: the service suffers about 4 significant failures per year, and mean recovery currently runs 11 hours per failure. Assuming failure frequency is unchanged, what mean recovery time per failure would meet 99.9% over a 365-day year (24-hour service)?

- A) About 2.2 hours
- B) About 4.4 hours
- C) About 8.8 hours
- D) About 1.1 hours

**Correct answer: A**

**Explanation:** Annual hours = 8,760. The 99.9% target permits 8.76 hours per year, spread across 4 failures = 2.2 hours mean recovery. Current state checks out: 4 × 11 = 44 hours ≈ 99.5%. The target demands recovery five times faster, rarely achievable by "trying harder" — it implies architectural investment. This is the arithmetic behind honest strategy conversations: the difference between 99.5% and 99.9% is a fivefold operational capability change with a budget attached.

**Question 6 (moderate) — Test coverage reconciliation**

A release has 40 functional requirements. The test report states: 34 requirements fully covered by passing tests, 4 partially covered, 2 not covered. The delivery manager's slide says "95% test coverage". Which statement most accurately characterises the claim?

- A) Accurate: 38 of 40 requirements have some coverage, and 38 ÷ 40 = 95%.
- B) The 95% conflates full and partial coverage: only 85% of requirements (34 ÷ 40) are fully covered by passing tests, and the slide should say so — with the 4 partial and 2 uncovered requirements listed for the release decision.
- C) Inaccurate: coverage is 92.5%.
- D) The distinction does not matter if the covered requirements are the important ones.

**Correct answer: B**

**Explanation:** 34 full + 4 partial = 38, and 38 ÷ 40 = 95% — so option A correctly derives the number, but "some coverage" and "tested" are different claims. Fully-covered-and-passing is 85%. Option D smuggles in an untested assumption. A coverage percentage is only as honest as its definition, and release decisions should see the definition, the number, and the named gaps — the **Testing** skill's authoritative-advice clause.

**Question 7 (moderate) — Capacity trend with seasonal spike**

A service's peak daily transaction volume has grown 3% per month (compounding) for the past year, currently standing at 200,000. Each January, renewals season adds a further 50% to that month's peak on top of the underlying trend. Tested capacity is 320,000 transactions per day. It is now the start of September (four months before January). What will the January peak be, and does capacity hold?

- A) About 225,000; capacity holds comfortably.
- B) About 337,000; capacity is exceeded — action is needed this autumn.
- C) About 300,000; capacity holds with a small margin.
- D) About 260,000; capacity holds.

**Correct answer: B**

**Explanation:** Underlying growth over four months: 200,000 × 1.03⁴ ≈ 225,100. Applying the seasonal multiplier: 225,100 × 1.5 ≈ 337,650, which exceeds capacity by roughly 5.5%. Option A stops after trend without season; option D applies 30% instead of 50%. The September timing is the point: four months to add capacity, ample if action starts now, desperate if the arithmetic first gets done in December.

**Question 8 (moderate) — Problem remedy verification with a confounder**

A preventative measure for a recurring fault was deployed on 1 June. Monthly incident counts for the fault: March 60, April 64, May 62, June 30, July 28. However, June and July are also known to be historically the service's quietest months, with transaction volumes about 25% below the March-May average. What is the soundest assessment of the remedy?

- A) The remedy roughly halved incidents — a clear success, case closed.
- B) Incidents fell about 53% while volume fell only 25%; even volume-adjusted, the incident *rate* fell substantially (roughly 38%), so the remedy shows real effect — but confirm after volumes recover in autumn before closing the problem record.
- C) The drop is entirely seasonal; the remedy did nothing.
- D) The data cannot say anything because two things changed at once.

**Correct answer: B**

**Explanation:** Baseline average 62, post-remedy average 29, a 53% fall. If incidents merely tracked the 25% volume fall, expect about 46.5 — the observed 29 is far below that, and the rate per unit volume falls about 38%. A substantial volume-adjusted improvement remains, but the honest caveat stands: a two-month window cannot fully exclude seasonality interacting with the fault mechanism, so the record stays open pending an autumn data point. This is the **Problem management** verification duty to lead standard: adjust for what can be adjusted, quantify the residual effect, schedule the confirming observation.

**Question 9 (hard) — Consolidation business case**

Two applications with overlapping functions cost, per year: App X £380,000 (hosting £120k, licences £90k, support effort £170k); App Y £240,000 (hosting £70k, licences £60k, support effort £110k). Consolidating onto App X would: eliminate App Y's hosting and licences entirely; migrate App Y's users at a one-off cost of £150,000; increase App X's support effort by 40% (absorbing App Y's workload); and take effect from the start of Year 1. What is the cumulative net saving by the end of Year 2?

- A) Impossible to determine
- B) £110,000
- C) £194,000
- D) £344,000

**Correct answer: C**

**Explanation:** Costs eliminated per year: £70k + £60k + £110k = £240k. New costs per year: 40% of £170k = £68k. Net annual saving = £172k. Year 1 net = £172k − £150k migration = £22k; Year 2 net = £172k. Cumulative = £194k. Option D forgets the migration cost; option B double-counts by removing App Y's support effort from savings while also adding App X's uplift. Consolidation cases live or die on support-effort assumptions, and the lead who can walk a finance partner through this arithmetic is the one whose strategy gets funded.

**Question 10 (hard) — Incident review statistics across teams**

Preparing for the leads' meeting, a candidate compares two teams' incident resolution over the quarter. Team Alpha: 90 incidents, mean resolution 6.0 hours, median 2.0 hours. Team Beta: 90 incidents, mean resolution 4.5 hours, median 4.0 hours. A peer lead concludes: "Beta resolves incidents faster — Alpha should adopt Beta's practices." What do the numbers actually support?

- A) The peer lead is right: Beta's mean is lower, so Beta is faster.
- B) Alpha resolves the *typical* incident twice as fast (median 2.0 vs 4.0 hours); Alpha's higher mean indicates a tail of long-running incidents dragging the average — so the teams likely differ in incident mix or tail handling, and the actionable comparison is of their distributions and their worst cases, not their means.
- C) The teams are equivalent since both handled 90 incidents.
- D) Alpha is better on both measures.

**Correct answer: B**

**Explanation:** When mean and median disagree, the disagreement is the finding. Alpha's mean three times its median implies a heavily right-skewed distribution: most incidents resolve fast, a minority run very long. Beta's compact distribution is consistently moderate with few extremes. Neither headline supports wholesale practice adoption — the useful questions are why Alpha's tail exists and whether Beta's consistency or Alpha's speed better fits each incident class. At the leads' meeting, any comparison resting on a single summary statistic deserves the question "what does the median say?" — skew is where operational truth hides.

**Question 11 (hard) — User research sampling judgement**

A candidate is championing user research for a case management redesign. The application has 3,000 registered users: 2,400 caseworkers, 450 team leaders, 150 administrators. The research plan proposes interviewing 30 users recruited by open invitation, and the sign-up list so far is: 6 caseworkers, 14 team leaders, 10 administrators. What is the most important numerical observation about this sample?

- A) Thirty interviews is 1% of users — too few to learn anything.
- B) The sample inverts the population: caseworkers are 80% of users but 20% of the sample, while administrators are 5% of users but 33% of the sample — self-selection has skewed recruitment, and findings would systematically underweight the majority user group unless recruitment is rebalanced.
- C) The sample is fine because all three user types are represented.
- D) Interview more administrators, since their high sign-up rate shows they care most.

**Correct answer: B**

**Explanation:** Population: caseworkers 80%, team leaders 15%, administrators 5%. Sample: caseworkers 20%, team leaders ≈47%, administrators ≈33%. The sample nearly inverts the population — a classic self-selection artefact. Option A misunderstands qualitative research: composition is the issue, not size. Option C settles for token representation. Option D doubles down on the bias. This is the **User focus** skill with numbers attached — championing research to focus on all users means exactly this check.

**Question 12 (hard) — KPI target negotiation**

The business wants a new KPI: "95% of severity 2 incidents resolved within 4 hours". A portfolio's last 200 severity 2 incidents show: 120 resolved within 2 hours, 40 more within 4 hours, 24 more within 8 hours, and 16 beyond 8 hours. Meeting the proposed target would require what change, and what is the honest negotiating position?

- A) Current performance is 80% within 4 hours (160 of 200); the target needs the 4-hour figure to rise by 15 percentage points, meaning 30 of the current 40 slower incidents must move inside 4 hours — describe the investment required, or negotiate the target toward current capability plus a funded improvement path.
- B) Current performance is 60% within 4 hours; the target is unreachable and should be refused.
- C) Current performance is 95% — accept the target; it is already met.
- D) Accept the target now and hope the tail incidents were one-offs.

**Correct answer: A**

**Explanation:** Within 4 hours: 120 + 40 = 160 of 200 = 80%. The target demands 190 of 200, 30 more than today — a capability change with costed candidates: faster escalation, out-of-hours cover, automated diagnostics, or re-architecting the components driving the tail. Option A offers the business a real choice: fund the capability, or set the target where capability currently sits with a funded path to 95%. Option D signs a commitment the data says will be missed. This is the negotiating arithmetic behind **Availability and capacity management**: ensuring the KPI is a contract both sides can honour.

### Administration tips

- **Watch for two-effect arithmetic (Questions 7 and 8)** — a candidate who applies compounding growth and a seasonal multiplier in the right order, or adjusts for a confounder before drawing a conclusion, is showing real numerical maturity.
- **Score the business-case item (Question 9) for structure** — the double-counting trap in option B is a common and instructive error worth discussing at debrief.
- **Note whether a candidate interrogates a single summary statistic** (Question 10) rather than accepting a mean at face value.
- **Keep timing consistent** across candidates for this level.
- **Use the explanations to debrief on real reporting practice** — several items map directly onto figures a candidate would produce for a leads' meeting.

### Common pitfalls to watch for when scoring

- **Ranking portfolios by raw counts rather than normalised rates.**
- **Treating identical failure counts as identical performance** across different volumes.
- **Letting one summary statistic carry a cross-team comparison.**
- **Forgetting one-off costs and lead times in forecasts and business cases.**
- **Accepting a target without computing the gap to current capability.**
- **Treating a confounded result as either proof or nothing**, rather than quantifying what survives adjustment.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate extracts meaning, obligations, and implications from the dense written material a lead's role runs on: policies and standards, supplier contracts and notices, governance papers, incident reviews, and cross-team correspondence. The core format presents a passage followed by statements to classify as **True**, **False**, or **Cannot say**. Complementary formats test inference, best-summary selection, and clear-writing judgement.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The governing discipline — answer from the passage alone — bears hardest on experienced candidates, who know how release policies, security standards, and framework definitions usually read; this section deliberately includes texts that deviate from convention to detect whether the candidate reads the document or their memory of documents like it.

Why does this matter for the role? Because at lead level a candidate is both a consumer and a producer of binding text: interpreting standards to settle cross-team disputes, drafting procedures others must follow exactly, and writing incident reviews and strategy papers that become the organisation's memory of events and intentions. A misread clause at this level propagates through everyone who takes the interpretation on trust, and a vaguely drafted procedure fails at 03:00 in the hands of an engineer who cannot ask what was meant.

The passages below reflect the role's genuine document diet: a security administration standard, an inter-lead governance exchange, and a post-incident review with strategic implications.

### What it measures for the role

- **Precise reading of standards and policies** maps to **Technical specialism** and **Change management**: setting standards and ensuring release policies are applied requires clause-level accuracy about what a standard mandates versus merely recommends.
- **Inference discipline** maps to **Incident management** and **Problem management**: leading investigations means holding the line between what evidence states, implies, and fails to exclude.
- **Framework-definition comprehension** maps to **Service management framework knowledge**: ITIL life cycle knowledge is a system of precise definitions.
- **Reading stakeholder and user language** maps to **User focus**: representing users internally begins with exact comprehension of what users and stakeholders actually said.
- **Clear-writing judgement** maps to **Technical specialism**'s drafting duty and **Ownership and topic**: procedures, reviews, and handovers succeed exactly insofar as they cannot be reasonably misread.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 — Security administration standard extract**

*"Privileged access to production applications must be granted only through the role-based access system, must be time-limited to a maximum of 90 days per grant, and must be re-certified by the application's lead engineer before renewal. Emergency ('break-glass') access may bypass the role-based system, but every use of break-glass credentials must be logged automatically, reviewed by the security administration lead within two working days, and reported quarterly to the service governance board. Break-glass credentials must be rotated within 24 hours of each use. Where an application cannot technically support time-limited grants, a documented exception must be approved by the security administration lead and reviewed every six months; applications operating under such exceptions must not process citizen data."*

**Question 1 (easy) — True, false, or cannot say**

Statement: "A privileged access grant may last up to six months before renewal."

- A) True
- B) False
- C) Cannot say
- D) True, where an exception is documented

**Correct answer: B**

**Explanation:** The standard sets the maximum grant at 90 days, so "up to six months" contradicts it — False. Option D tries to rescue the statement via the exceptions clause, but that clause covers applications that cannot technically support time-limited grants, and even there imposes six-monthly review of the exception, not six-month grants. The six-month figure belongs to exception reviews, transplanted onto grant duration. Numbers migrating between clauses is the signature verbal-reasoning trap, and in security standards it is also the signature audit finding.

**Question 2 (easy) — True, false, or cannot say**

Statement: "Every use of break-glass credentials must be reviewed by the service governance board within two working days."

- A) True
- B) False
- C) Cannot say
- D) True, but only quarterly

**Correct answer: B**

**Explanation:** The passage assigns two obligations to two different bodies on two different clocks: review by the security administration lead within two working days, and quarterly reporting to the governance board. The statement splices the board into the lead's two-day duty — contradicted on both actor and cadence. Governance text is dense with exactly this structure — multiple actors, multiple obligations, multiple clocks — and the reliable technique is a small margin table: who, must do what, by when.

**Question 3 (moderate) — True, false, or cannot say**

Statement: "An application that cannot technically support time-limited grants may continue to process citizen data provided the exception is approved and reviewed."

- A) True
- B) False
- C) Cannot say
- D) True, if the security administration lead approves

**Correct answer: B**

**Explanation:** The exceptions clause ends with an unconditional prohibition: applications operating under such exceptions must not process citizen data. Approval and review are necessary conditions for the exception to exist at all, not compensating controls that unlock the prohibited activity — False, and option D fails identically. The design of this trap is worth noting: it stacks legitimate-sounding safeguards to make a prohibited outcome feel governed. When ensuring conformity to standards, the terminal prohibition is the clause to check first, because it is the one process theatre most often obscures.

**Question 4 (moderate) — Inference from the standard**

Which one of the following can properly be inferred from the passage?

- A) Break-glass access has never been misused.
- B) The standard treats break-glass access as an auditable exception pathway: it trades the role-based system's preventive control for compensating detective controls — automatic logging, prompt review, credential rotation, and board visibility.
- C) The role-based access system logs all access automatically.
- D) Re-certification of privileged grants happens quarterly.

**Correct answer: B**

**Explanation:** Break-glass "may bypass the role-based system" (the preventive control is surrendered) while every use attracts logging, two-day review, 24-hour rotation, and quarterly board reporting (compensating controls). Characterising this as an auditable exception pathway names the pattern the facts form without adding anything. Option A infers an operational history the text never mentions. Option C transplants a requirement between clauses. Option D invents a cadence the passage does not state. Inferring the control pattern from a standard is legitimate; inferring unstated facts is not.

**Passage 2 — Inter-lead governance exchange**

*"From: Head of Service Transition. To: All IT operations leads. Following October's release collisions, the release calendar will operate as follows from 1 December. Each lead may reserve at most two production windows per month per application. Reservations become firm five working days before the window; before that point, the transition team may move them with 48 hours' notice to resolve conflicts. Firm reservations may only be moved with the owning lead's consent, except where a security-critical release requires the slot, in which case the transition team decides after consulting both leads. Unused firm windows are released back to the pool 24 hours before their start time. Leads wishing to exceed the two-window limit must present the business case at the fortnightly leads' meeting; the limit does not apply to emergency changes, which follow the existing emergency process."*

**Question 5 (moderate) — True, false, or cannot say**

Statement: "Once a reservation becomes firm, the transition team can never move it without the owning lead's consent."

- A) True
- B) False
- C) Cannot say
- D) True, except during October

**Correct answer: B**

**Explanation:** The passage grants firm reservations consent protection, then carves an exception: where a security-critical release requires the slot, the transition team decides after consulting both leads. Consulting is not consent — the transition team may move a firm reservation over the owning lead's objection, having heard it. "Never without consent" is contradicted. The consult/consent distinction is among the most consequential in governance reading: one obliges a conversation, the other confers a veto.

**Question 6 (moderate) — True, false, or cannot say**

Statement: "A lead who needs three production windows for one application in a single month has no route to obtain them."

- A) True
- B) False
- C) Cannot say
- D) True, unless the changes are emergencies

**Correct answer: B**

**Explanation:** The passage provides the route explicitly: leads wishing to exceed the limit must present the business case at the fortnightly leads' meeting. "No route" is contradicted. Option D endorses the false core claim while noting emergencies bypass the limit. Limits in well-drafted governance are usually defaults with escape valves, and the escape valves are where the text's real flexibility lives.

**Question 7 (hard) — Applying the rules to a scenario**

It is Tuesday. A candidate's firm reservation for a normal release is Thursday 22:00. Monday morning, the candidate learns the release will not be ready. According to the passage, what happens to the window if nothing is done, and what should be concluded?

- A) Nothing happens; firm windows belong to the reserving lead until used.
- B) The window is released back to the pool 24 hours before Thursday 22:00 — that is, Wednesday 22:00 — only if it is actually unused at that point; but "doing nothing" until then hoards a slot other leads could plan against, so the cooperative move is to release it as soon as it is known to be dead.
- C) The transition team will move the reservation with 48 hours' notice.
- D) The candidate loses the right to reserve windows next month.

**Correct answer: B**

**Explanation:** The reservation is firm, so the pre-firm 48-hour-move power no longer applies. No forfeiture-of-future-rights rule exists in the passage. The operative clause is that unused firm windows release back to the pool 24 hours before their start time — automatic, contradicting option A. Option B adds the judgement layer: the automatic release is a backstop, but a lead who knows on Monday that the window is dead and sits on it until Wednesday night denies peer leads planning certainty — legal under the text, corrosive to the system it exists to create. The strongest verbal reasoners at this level read both what the document requires and what its purpose invites beyond that.

**Passage 3 — Post-incident review extract**

*"PIR-88: The 14 March outage of the grants application lasted 6 hours 40 minutes. The trigger was a routine certificate renewal performed correctly by the operations team; the renewed certificate, however, exceeded the maximum key length supported by a legacy integration component, which failed closed. The component's limitation was documented in the supplier's compatibility notes but not in our own configuration records, and the renewal procedure did not include an integration compatibility check. The incident lead's decision to restore service via the backup integration path at hour two was sound; the further four hours were consumed by data reconciliation, for which no rehearsed procedure existed. Recommendations: R1 — add compatibility constraints to configuration records for all integration components; R2 — extend the certificate renewal procedure to include integration checks; R3 — develop and rehearse a data reconciliation runbook; R4 — assess all legacy integration components for similar constraints within 90 days. The review notes that the same legacy component was flagged as 'requiring modernisation' in the 2024 application strategy, but the work was deferred in two successive planning rounds."*

**Question 8 (moderate) — True, false, or cannot say**

Statement: "The operations team performed the certificate renewal incorrectly."

- A) True
- B) False
- C) Cannot say
- D) True, since the renewal triggered the outage

**Correct answer: B**

**Explanation:** The passage states the renewal was "performed correctly"; the failure arose from an undocumented constraint interacting with a correct action — contradicted, False. Option D collapses "triggered" into "performed incorrectly" — the exact reasoning error post-incident reviews exist to prevent. A trigger exposes a latent condition; culpability requires a deviation from procedure, and the procedure contained no compatibility check to deviate from. This distinction determines what gets fixed: blame the operator and the latent condition waits for the next correct action to trigger it; locate the gap in the procedure and records and the class of failure closes.

**Question 9 (hard) — True, false, or cannot say**

Statement: "Had the 2024 modernisation work not been deferred, the outage would not have occurred."

- A) True
- B) False
- C) Cannot say
- D) True, because the legacy component caused the failure

**Correct answer: C**

**Explanation:** The counterfactual is tempting, but the passage does not state what the modernisation would have entailed, whether it would have replaced the component, or whether the timing would have preceded 14 March. "Would not have occurred" asserts certainty about an unrealised history the text cannot underwrite — Cannot say. Option D mistakes a causal contribution in the actual world for proof about a hypothetical one. The review's own craft — noting the deferral without claiming the counterfactual — is deliberate: deferred-work observations inform future prioritisation, not retrospective blame with false precision.

**Question 10 (hard) — True, false, or cannot say**

Statement: "The incident lead's handling of the incident is criticised by the review."

- A) True
- B) False
- C) Cannot say
- D) True, since four hours were consumed by reconciliation under their command

**Correct answer: B**

**Explanation:** The review explicitly evaluates the incident lead's key decision as sound; the four reconciliation hours are attributed to the absence of a rehearsed procedure, a systemic gap generating recommendation R3, not to the lead's conduct. "Criticised by the review" is contradicted. Option D repeats the attribution error from Question 8 — events occurring on someone's watch are not thereby that person's failings. This separation is the load-bearing wall of blameless review culture: if leading competently through an unrehearsed situation earns criticism, no capable engineer will volunteer to lead incidents.

**Question 11 (hard) — Best summary for the leads' meeting**

Which option best summarises PIR-88 for the IT operations leads' meeting?

- A) "A certificate renewal error caused a 6-hour 40-minute grants outage; the team has been reminded to check compatibility."
- B) "A correctly performed certificate renewal exposed an undocumented key-length limit in a legacy integration component, causing a 6h40m grants outage — two-thirds of it spent on unrehearsed data reconciliation. Fixes: compatibility constraints into configuration records, renewal procedure extended, reconciliation runbook rehearsed, and a 90-day sweep of similar legacy components. Strategic note: this component's modernisation was flagged in 2024 and deferred twice — the deferral decision merits revisiting."
- C) "Legacy systems are risky and should all be replaced as soon as possible."
- D) "The outage lasted 6 hours 40 minutes and four recommendations were made. Details available on request."

**Correct answer: B**

**Explanation:** Option A misstates the mechanism and shrinks four recommendations into a reminder. Option C inflates one finding into an unfunded ideology. Option D is administratively true and informationally empty. Option B preserves the causal chain, quantifies where the time actually went, carries all four recommendations, and surfaces the deferral note as a planning question rather than an accusation — high enough to fit the meeting, low enough that nothing decision-relevant is lost.

**Question 12 (hard) — Clear-writing judgement in a procedure**

Recommendation R2 requires extending the certificate renewal procedure. Which drafting of the new step is most likely to be executed correctly by an engineer working alone at 02:00?

- A) "Before renewing any certificate, consider whether integration components might be affected and act accordingly."
- B) "Before renewal: (1) list the application's integration components from the configuration record; (2) for each, check the 'maximum supported key length' field against the new certificate's key length; (3) if any component's maximum is below the new key length, STOP — do not renew; raise a change task to resolve the constraint first. If the field is blank for any component, STOP and escalate to the on-call lead: a blank field means the check cannot be passed."
- C) "Renewals must be compatibility-validated in line with best practice and the relevant supplier documentation, which should be consulted as appropriate."
- D) "Check key lengths before renewing. See supplier notes."

**Correct answer: B**

**Explanation:** Option A delegates judgement entirely back to the reader. Option C is polished vagueness that would pass a document review and fail its first use. Option D compresses the right instinct past usability. Option B is executable by construction: enumerated steps, a named data source, an explicit comparison, and defined outcomes for both failure modes, including the subtle one — a blank field treated as a stop condition, since absence of evidence of incompatibility is not evidence of compatibility. A procedure is well written exactly when the least-contextualised competent reader, at the worst hour, does the right thing by following it literally.

### Administration tips

- **Watch for the who/what/when discipline** in how a candidate handles the governance and security passages (Questions 1-6) — this maps directly to how well they will draft and enforce similar documents.
- **Note the counterfactual and attribution items (Questions 9 and 10) as strong discriminators** — a candidate who resists a tempting but unsupported causal claim is showing genuine analytical restraint.
- **Use the clear-writing item (Question 12) as a live discussion point.**
- **Time by passage, not by statement.**
- **Debrief on the consult-versus-consent distinction (Question 5)** — it recurs constantly in real governance disputes at this level.

### Common pitfalls to watch for when scoring

- **Answering from experience instead of the passage** — the more standards a candidate has written, the stronger the pull to answer from convention.
- **Letting stacked safeguards launder a prohibition** — checking the terminal clause first is the discipline being tested.
- **Confusing voice with veto** — "after consulting" means the decision can go against the person consulted.
- **Collapsing "triggered" into "caused by error"** — blame-shaped paraphrases of blameless findings are contradictions.
- **Endorsing the near-miss paraphrase** — close is False; precision is the entire test.
- **Rewarding polished vagueness in drafting items** over an executable plain answer.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to evaluate possible responses — most effective, least effective, or full rankings. For lead-level roles, the scenarios change character fundamentally: the question is rarely "what should you do with your hands?" and almost always "what should you do with your influence?" Scenarios feature team members' mistakes and development, peer-lead conflicts, strategic pressure from above, standards being quietly eroded, and moments where accountability, honesty, and relationships pull in different directions.

The typical format is 12 to 20 scenarios, untimed or generously timed, four responses each, scored against the judgements of experienced professionals and the organisation's valued behaviours: user focus, ownership and accountability, collaboration across boundaries, developing others, integrity in reporting and governance, and proportionate escalation. At lead level, scorers particularly discriminate on delegation calibration, on whether responses build or consume organisational trust, and on whether the candidate protects systems and cultures, not just outcomes.

Why does this matter for lead roles? Because at this level, judgement is the job. The role summary makes a candidate accountable for issues that occur and proactively responsible for finding potential ones; leading incident investigations, managing high-impact changes, liaising with peer leads, and achieving excellent user outcomes through other people. Technical mastery is assumed; what distinguishes a strong lead is what they do when a peer's project threatens their service, when a team member fails, when governance is inconvenient, and when the truthful number is the unwelcome one.

As you score, notice the recurring anatomy of strong lead-level answers: they secure the service and the user first; they keep records, reports, and communications truthful; they operate governance skilfully rather than bypassing or weaponising it; they develop people through events rather than around them; and they address systems, not just instances. Weak answers hide, hoard, blame, bypass, or win the moment at the culture's expense.

### What it measures for the role

- **Incident leadership scenarios** map to **Incident management** and **Ownership and topic**: leading investigations under pressure, communicating honestly upward, holding accountability without seizing a team's agency.
- **Change and release dilemmas** map to **Change management**: arbitrating collisions between teams, holding release policy when inconvenient, knowing when the emergency route is legitimate.
- **Standards-erosion scenarios** map to **Technical specialism** and **Asset and configuration management**: standards are tested not on the day they are published but on the day compliance is expensive.
- **Team development scenarios** map to leadership of engineers: converting mistakes into learning, distributing growth opportunities honestly, giving difficult feedback early.
- **Cross-boundary and supplier scenarios** map to **Problem management** and **Service focus**: consulting specialists effectively, holding ownership across organisational seams.
- **User-versus-stakeholder scenarios** map to **User focus**: representing users internally, distinguishing user needs from user desires, championing research when opinion is louder than evidence.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A candidate's engineer's mistake becomes visible upward**

An engineer on a candidate's team misconfigured a deployment last week, causing a 40-minute outage. The candidate handled it: incident run properly, fix verified, lessons captured, the engineer coached. Today the service owner emails the candidate, copying their head of profession: "I hear this was human error. Who was responsible? We need accountability." What is the most effective response?

- A) Name the engineer, since the service owner asked directly and transparency matters.
- B) Reply that the accountable person is the candidate, as the lead responsible for the service and its safeguards; describe the systemic gap (the deployment pipeline permitted an invalid configuration) and the fixes now in place; and offer to walk the service owner through the review.
- C) Reply that it was a process failure and no individual was involved.
- D) Forward the email to the engineer and ask them to respond with an explanation.

**Correct answer: B**

**Explanation:** The email conflates two meanings of "accountability", and the lead's job is to answer the legitimate one. Accountability for the service and its defences sits with the lead — that is the actual org chart — and option B delivers what the service owner genuinely needs: the mechanism, the fix, and confidence recurrence is engineered against. Option A converts a coached, corrected mistake into a career event, and after which errors stop being surfaced honestly. Option C is a detectable evasion. Option D abandons the engineer to an audience they should never have to face alone. The pattern this item rewards: leads absorb blame upward and pass learning downward, never the reverse.

**Question 2 (easy) — Standards versus a deadline, in public**

At a cross-team planning meeting, a delivery manager announces that their team will skip a candidate's configuration documentation standard for this release "because the deadline is fixed and the standard is heavy — we'll backfill the records next month". Several other teams' representatives are present. What is the most effective response?

- A) Let it pass in the meeting to avoid conflict, then quietly note the exception.
- B) In the meeting, state clearly that undocumented production configuration is a risk that cannot be accepted for released services, and propose resolving it today: either scope the documentation to the minimum viable record so it fits the deadline, or bring the exception to the governance forum where risk acceptance belongs — then follow up constructively with the delivery manager afterwards.
- C) Publicly overrule the delivery manager and threaten to block the release.
- D) Agree to the backfill plan on condition it is done within a month.

**Correct answer: B**

**Explanation:** The public setting is the scenario's real content: whatever happens next is witnessed by every team deciding how seriously the standards bind them. Option A teaches the room the standard is negotiable by announcement. Option D lets backfill promises compete against the next deadline, reliably losing, and makes the lead the person absorbing risk on a handshake rather than the governance forum. Option C wins the exchange and poisons the well. Option B holds the line without hostility and offers routes: a scoped minimum record, or the governance forum where risk acceptance is legitimately decided. Firm on the risk, flexible on the path, generous in private follow-up is how standards survive their first expensive collision.

**Question 3 (moderate) — The incident a senior engineer is mishandling**

A candidate is accountable for a live severity 2 incident that one of their senior engineers is leading. Ninety minutes in, the candidate observes: the investigation is fixated on a single hypothesis despite contrary evidence, stakeholder updates are overdue, and two team members' suggestions have been talked over. The engineer is capable but visibly stressed. What is the most effective response?

- A) Take over command immediately — the incident is suffering.
- B) Say nothing during the incident; give thorough feedback afterwards.
- C) Intervene minimally and structurally: join the bridge, ask the questions that reopen the hypothesis space ("what evidence would rule this out? what are our other two candidates?"), take the stakeholder-update burden off the engineer's plate at their agreement, and make space for the overridden voices — leaving command with the engineer unless the service impact demands more.
- D) Privately message the two overridden team members to pursue their ideas separately without telling the incident lead.

**Correct answer: C**

**Explanation:** The incident has three live defects — hypothesis lock, communication debt, suppressed input — and none yet requires decapitating the command structure. Option C fixes each with the lightest touch that works: good questions reopen thinking without countermanding; absorbing the update burden supports rather than rebukes; inviting the quiet voices repairs the information flow. Command stays where it is, which matters beyond this incident — seniors rescued at the first wobble never become leads. Option A pays that development cost immediately and permanently. Option B honours development theory while the service absorbs ninety more minutes of drift. Option D creates a shadow investigation. The skill scored is graduated intervention: **Incident management** accountability exercised at the minimum altitude that restores the investigation.

**Question 4 (moderate) — Peer lead's change threatens a candidate's service**

A peer lead's team is deploying a shared-platform upgrade next week. Reviewing the change, a candidate's team finds its database migration will lock tables their case application reads during the deployment window, likely causing user-facing timeouts — the change record scopes impact as "platform services only". The candidate raised it with the peer lead, who replied: "Our testing shows minimal impact; we're not delaying a programme milestone for a theoretical timeout." What is the most effective response?

- A) Accept their assessment — it is their change, their accountability.
- B) Escalate to the CAB immediately with a formal objection to force a delay.
- C) Offer a joint technical session within a day: the candidate's engineers demonstrate the lock behaviour against a realistic read load; if the risk is confirmed, agree mitigations together (window shift, read-replica routing, or staged migration) and correct the change record's impact scope; if their testing withstands the demonstration, withdraw the concern and say so.
- D) Quietly schedule the candidate's application into read-only mode during their window without telling them, protecting its users either way.

**Correct answer: C**

**Explanation:** This is an evidence dispute wearing a governance costume, and the strong move resolves the evidence before invoking the governance. Option C's joint session is cheap, fast, and decisive in both directions, and committing in advance to withdraw if wrong keeps peer-lead relationships usable for the next collision. If confirmed, the change record's impact scope gets corrected — the mechanism by which the CAB approves reality rather than optimism, **Change management**'s entire premise. Option A abdicates. Option B escalates before attempting resolution. Option D degrades the candidate's own users' service to hedge an unproven risk and conceals material information from a change decision.

**Question 5 (moderate) — The flattering misuse of a candidate's report**

A candidate's quarterly performance report showed portfolio availability of 99.7%, up from 99.4%. They later see a programme board pack quoting these figures under the heading "Application modernisation programme delivers reliability gains" — but the candidate knows the improvement came almost entirely from their team's incident-response work and a decommissioned flaky component; the modernisation programme has not yet touched their applications. The programme director is influential and the attribution flatters the portfolio too. What is the most effective response?

- A) Let it stand — the numbers are accurate, only the interpretation is generous, and the goodwill is useful.
- B) Contact the programme director before the board meets: the availability figures are right, but the attribution is not supportable — offer corrected wording crediting the actual drivers, and offer to help define measures that will genuinely track the programme's future impact on the portfolio.
- C) Email the board directly to correct the record over the director's head.
- D) Correct the attribution only if someone at the board questions it.

**Correct answer: B**

**Explanation:** The numbers are the candidate's, so the inferences drawn from them travel on their credibility, and this attribution error is not victimless — a board believing modernisation already delivers reliability will fund and sequence on that belief. Option B corrects the error at the cheapest possible point, through the person who owns the pack, and the constructive coda converts the correction into an alliance. Option A prices integrity against goodwill and sells too cheap. Option C maximises relational damage. Option D gambles the truth on someone else's diligence. The scored behaviour is proactive stewardship of what one's data is used to claim — **Ownership and topic** extended to the information layer.

**Question 6 (moderate) — Distributing the golden opportunity**

A high-profile go-live needs one engineer seconded to the programme for three months — visible work, career-making. Two of a candidate's team volunteer: Sam, their strongest engineer, who delivered the last two such secondments flawlessly and whom the programme has asked for by name; and Aisha, slightly less experienced, consistently excellent, who has told the candidate in development conversations that she needs precisely this exposure and has never had it. Losing either is manageable. What is the most effective response?

- A) Send Sam — the programme asked for Sam, and go-lives deserve the strongest available engineer.
- B) Send Aisha, telling the programme she is the candidate's choice and standing behind her readiness; brief her thoroughly, arrange Sam as her named consultation point, and tell Sam candidly why — pairing it with a growth commitment that actually stretches Sam, whose development now needs novelty, not repetition.
- C) Ask the two of them to decide between themselves.
- D) Split the secondment: each does six weeks.

**Correct answer: B**

**Explanation:** A third identical secondment gains Sam nothing developmentally, so routing the opportunity by past performance alone serves the programme's convenience and nobody's development. Option B treats the secondment as a development asset to steward: public backing, thorough briefing, and a consultation line to Sam that converts his experience into infrastructure rather than incumbency, plus a candid conversation about why. Option C abdicates a judgement that is specifically the lead's. Option D halves the value for both and disrupts the programme. SJT items at this level score whether a candidate distributes growth deliberately.

**Question 7 (moderate) — Least effective: the strategy consultation**

A candidate is drafting the application strategy for their portfolio. A consultation draft is with peer leads, their team, and the service owner. Feedback arrives: two peer leads challenge the consolidation timeline as optimistic; the candidate's own senior engineers flag that a proposed platform choice conflicts with the department's cloud mandate; the service owner asks why user research does not appear in the evidence base. Which response is LEAST effective?

- A) Extend the timeline analysis with the peer leads' delivery data, and publish the revised assumptions with the change noted.
- B) Thank everyone for the feedback, note that consultation has now concluded, and publish the strategy substantively unchanged to maintain momentum.
- C) Commission the missing user research input, adjusting the strategy's evidence base and acknowledging the gap the service owner identified.
- D) Convene the senior engineers to work through the platform-mandate conflict and either change the choice or document the exemption case honestly.

**Correct answer: B**

**Explanation:** Options A, C and D are the three feedback threads handled properly, each leaving an honest audit trail. Option B is consultation theatre — the process ran, the feedback arrived, and none of it altered anything, converting engaged stakeholders into people who now know their engagement is decorative. A mandate conflict flagged by the candidate's own engineers is not an opinion to weigh but a defect to resolve; publishing across it means the strategy is knowingly non-compliant. "Momentum" is the tell: strategies gain real momentum from stakeholders who recognise their fingerprints in the final text, not from publication dates.

**Question 8 (hard) — The velvet request to reclassify**

End of quarter. A candidate's portfolio breached its availability KPI, driven by one major incident. Their head of operations says, in a corridor conversation: "That March outage — a fair chunk was really the network team's fault, wasn't it? Seems harsh for it all to land on your KPI. Have another look at the attribution before the figures go up — no pressure." Reattributing the network-related portion would bring the portfolio back within target. The incident genuinely did involve a network component, though the candidate's application's slow failover amplified the impact. What is the most effective response?

- A) Reattribute the network portion — it is arguably accurate and the head of operations has effectively endorsed it.
- B) Review the attribution honestly because the question is legitimate, but apply the standing measurement rules rather than the desired outcome: if the rules attribute user-facing downtime to the affected service regardless of cause, report the breach with a clear causal narrative — network trigger, amplified by the candidate's failover gap, with the improvement actions for the part they own — and tell the head of operations exactly that before publication.
- C) Refuse to look at the attribution at all, since reviewing it under pressure is already compromised.
- D) Split the difference: reattribute half the outage.

**Correct answer: B**

**Explanation:** The request's velvet construction is the scenario's point — real integrity tests rarely announce themselves. Option B finds the honest line: the question is legitimate (multi-cause incidents genuinely raise attribution questions), so refusing to examine it (option C) confuses integrity with rigidity, but the examination must run on standing measurement rules decided before this quarter's answer was wanted, not on what makes the KPI green. Most availability regimes attribute user-facing downtime to the affected service precisely so "whose fault" games cannot soften accountability, and the candidate's own failover gap genuinely amplified the impact, which the causal narrative owns along with its fix. Option A launders a metric rescue through a corridor endorsement. Option D treats truth as a negotiation. Telling the head of operations the outcome before publication respects their question while establishing that the figures are rule-governed.

**Question 9 (hard) — Ranking: the failing framework a candidate built**

Eighteen months ago a candidate designed the portfolio's on-call framework. Evidence now accumulates that it is failing: two strong engineers cite on-call load in exit interviews; incident response times degrade on weekends; and a near-miss occurred when a fatigued engineer almost applied the wrong fix. The candidate's head of operations praised the framework publicly last quarter. Rank these responses from most to least effective:

1. Present the evidence to the head of operations and peer leads as a framework failure requiring redesign, owning the original design decisions that aged badly, and propose a revision co-designed with the engineers who carry the load.
2. Make quiet incremental tweaks — rota adjustments, an extra escalation tier — without announcing a problem, protecting the framework's (and the candidate's own) reputation while easing the worst symptoms.
3. Commission an independent review of on-call across the portfolio, delaying any change until it reports in two months, so the redesign is evidence-based and externally validated.
4. Defend the framework: exit interviews are multi-causal, weekend degradation has other explanations, and one near-miss is an anecdote — the framework is sound and the narrative of failure is premature.

- A) 1, 3, 2, 4
- B) 1, 2, 3, 4
- C) 3, 1, 2, 4
- D) 1, 3, 4, 2

**Correct answer: A**

**Explanation:** Response 1 leads decisively: convergent evidence across retention, performance and safety, an urgent near-miss, and public ownership of the original design's failure — the highest-value move available. Ranking 3 against 2 is the discriminating judgement: response 3's virtue is honesty (a visible, on-the-record acknowledgment, de-biased by independence) against a two-month stall as its vice; response 2's virtue is immediacy against concealment as its deeper vice — the organisation never learns the framework failed, and the head of operations goes on publicly praising something known to be broken. Honest-but-slow outranks helpful-but-hidden. Response 4 is last without contest: three independent signals converging on one's own artefact is the moment for curiosity, and defending it is ego wearing analysis. The meta-lesson: the frameworks a lead builds are hypotheses, and **Service focus** includes being their most willing falsifier.

**Question 10 (hard) — User needs versus the loudest user**

A director-level "super user" of a candidate's case application lobbies persistently for a configurable dashboard — meetings, emails, a slot at the programme board. The candidate's user research tells a different story: caseworkers' dominant needs are reliability during morning peaks and a simpler document upload flow; dashboards rank near the bottom of every study; and the director's own team's usage data shows the current dashboard features barely used. Budget allows one major workstream this year. What is the most effective response?

- A) Build the dashboard — director-level sponsorship secures budget, and visible senior satisfaction benefits the whole portfolio.
- B) Bring the evidence to the decision: present the research and usage data at the programme board alongside the director's request, explicitly distinguishing expressed desires from evidenced needs; recommend the reliability-and-upload workstream; and offer the director a cheap evidence test — a prototype dashboard evaluated with real caseworkers — so their idea is respected as a hypothesis rather than rejected as a claim.
- C) Split the budget: half the dashboard, half the reliability work.
- D) Decline the dashboard privately and hope the director's attention moves on.

**Correct answer: B**

**Explanation:** **User focus** contains, verbatim, the distinction this scenario weaponises: explaining the difference between user needs and the desires of the user, and at lead level a candidate must make that distinction stick against seniority, in a governance setting, without making an enemy of a director. Option B brings the evidence and the request into the same forum, follows the recommendation from the research, and offers the prototype as a testable hypothesis, respectful and cheap. Option A purchases senior comfort with the portfolio's least-evidenced need. Option C halves both workstreams into ineffectiveness. Option D achieves the disagreement without the evidence or the forum. The scored behaviour: bring evidence to power respectfully, in the room where the decision lives.

**Question 11 (hard) — The supplier boundary and the peer lead's patience**

A persistent fault in a supplier-hosted integration degrades referrals between a candidate's case application and a peer lead's service. The supplier has cycled three engineers through the ticket in six weeks with no progress. The peer lead, whose users are equally affected, wants to invoke contractual penalties immediately and has drafted a joint escalation letter for the candidate's signature. The candidate's own assessment: the supplier's efforts have been genuinely incompetent rather than negligent, the contract's technical escalation route (a named senior architect) has never actually been invoked, and penalties would likely entrench positions while the fault continues. What is the most effective response?

- A) Sign the letter — peer solidarity matters, and six weeks is long enough.
- B) Refuse to sign and let the peer lead escalate alone if they insist.
- C) Propose to the peer lead a sequenced joint position: first invoke the contract's technical escalation route immediately — named architect, joint evidence pack, a two-week deadline with defined success criteria — with the penalty letter agreed, drafted, and explicitly next if the deadline fails; meanwhile stand up whatever interim mitigation protects both services' users.
- D) Bypass the dispute by building a workaround that re-routes referrals away from the supplier's component permanently.

**Correct answer: C**

**Explanation:** Both leads hold a piece of the truth — six weeks of cycling engineers is unacceptable, and unused escalation routes plus premature penalties is a losing sequence — so the strong answer synthesises. Option C invokes the technical escalation route immediately and jointly, with deadline and criteria, and the penalty letter pre-agreed as the credible next step. Interim mitigation runs in parallel because users do not care whose escalation theory wins. Option A signs up to a sequence likely to prolong the fault. Option B fractures the joint front the supplier most fears. Option D concedes the contracted service without extracting either fix or remedy. Leads who exhaust the designed routes before the punitive ones win both the fault and the relationship.

**Question 12 (hard) — Proactive discovery with a governance sting**

While preparing the quarterly configuration audit, a candidate discovers that a widely-used internal reporting tool — built years ago by a developer who has left, now embedded in four teams' daily work — runs on an unsupported framework version with two published critical vulnerabilities, has no entry in the CMDB, no owner, and direct read access to the case application's production database through credentials that predate the candidate's access standard. Nothing is currently on fire. What is the most effective response?

- A) Shut off the tool's database access today — unsupported software with critical vulnerabilities touching production citizen data is an unacceptable risk, whatever the workflow cost.
- B) Register the tool and its access in the CMDB as found; assess the actual exploitability of the vulnerabilities and the sensitivity of the accessed data within days, applying immediate low-disruption mitigations (credential rotation onto the standard, read scope reduction, network restriction); brief the four consuming teams and the security administration function honestly; and take an owned remediation decision — supported rebuild, managed replacement, or scheduled decommission — through governance with a dated plan.
- C) Add the tool to the risk register and schedule its consideration in next quarter's planning cycle.
- D) Quietly ask a developer on the candidate's team to patch the framework version informally, avoiding the bureaucracy since the tool is unofficial anyway.

**Correct answer: B**

**Explanation:** This tests what a candidate does when the proactive clause of **Ownership and topic** succeeds — an unowned risk that stops being unowned the moment it is found. Option B sequences record, understand, mitigate, decide: registration first so the record matches reality before decisions rely on it; real exploitability assessment rather than a headline; immediate cheap mitigations; honest briefing that converts the tool's users into participants rather than surprised victims; and an endgame through governance with a date. Option A pays maximum disruption for unmeasured risk. Option C is the pattern that created this situation — unowned risk, politely deferred. Option D compounds every original sin. Found risks get owners, records, measured urgency, and dated decisions.

### Administration tips

- **Score each option against the five-part anatomy of a strong answer**: secures the service, keeps records and communications truthful, runs processes rather than bypassing them, keeps users in view, keeps information flowing.
- **Watch for graduated intervention** (Question 3) — the minimal-touch answer is almost always the scored one, not seizure of command.
- **Note how a candidate ranks permanent versus temporary concealment** (Question 9) — one of the most senior-specific judgements in the set.
- **Check the polarity every time**, and ask whose interests each option serves.
- **Use these scenarios as debrief material** — asking a candidate to talk through their reasoning on the ranking items often reveals more than the score alone.

### Common pitfalls to watch for when scoring

- **Rewarding rescue over verification** — taking over a wobbling incident or redoing an engineer's imperfect work reads as ownership but should score as risk.
- **Rewarding purchases of senior comfort with user budget or evidence.**
- **Rewarding weaponised or worshipped governance** — escalating first to force outcomes, or refusing legitimate routes out of process purity.
- **Under-weighting concealment of a candidate's own artefacts failing** — quiet tweaks to a failing framework should score below owning the failure loudly.
- **Rewarding solidarity against a candidate's own judgement** — signing a peer's letter or accepting a superior's framing without offering a better alternative.
- **Under-weighting deferred discovered risk** — risk registers and next-quarter plans are where found problems go to become next year's incidents.

## Conclusion

This document has given you a complete set of assessment material for the four types most relevant to a lead application operations engineer: cognitive, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests synthesising weak signals into proactive investigations, sweeping policies as checklists, arbitrating release calendars past feasible to defensible, and running strategy timelines to their last responsible decision points — the structured thinking beneath application strategy and the **Change management** and **Problem management** duties. The numeric section tests normalising portfolio comparisons, pricing availability ambitions in recovery-time capability, verifying remedies through confounders, building consolidation arithmetic that survives finance scrutiny, and negotiating KPI targets from quantified baselines — the numerical spine of **Availability and capacity management**. The verbal section tests reading security standards, governance rules, and incident reviews at clause level — consult versus consent, trigger versus blame, prohibition versus process theatre — and judging drafting by whether a competent stranger executes it correctly alone at the worst hour. The situational judgement section rehearses the decisions that define lead careers: absorbing blame upward and passing learning downward, intervening at minimum altitude, holding standards in public, bringing evidence to power, owning a candidate's own artefacts' failures, and giving discovered risks owners and dates.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as your answer key and your talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more valuable to the candidate — and more informative to you — than the raw score.

**Records and consistency.** Keep a note of the conditions under which you administered this assessment alongside the result, and use the same items and conditions for every candidate you assess for this role level.

**One assessment among several.** A single thread runs through all four sections worth keeping in mind: at lead level, accuracy and integrity are infrastructure, and this assessment measures fragments of it. It is one input into a wider judgement about whether a candidate can be trusted with a portfolio, a team, and the decisions that shape both — never the whole of that judgement. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
