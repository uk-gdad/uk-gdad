# DevOps Engineer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a DevOps engineer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — pipeline configurations, monitoring dashboards, capacity forecasts, deployment strategies, incident timelines, interface specifications, and security threat models — and decisions genuinely made, such as transforming technical requirements into DevOps processes, managing live test environments, and identifying and resolving the issues that prevent delivery.

At this level, the role delivers automated software components that form part of a development operations toolchain without additional support, builds complex stories independently, manages service components against business needs and key performance indicators, and designs solutions with security controls engineered to mitigate specific threats. That combination — independent technical delivery plus operational responsibility — is what the four assessment types probe.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate reasons precisely under the exact rules stated, rather than importing plausible outside experience — expertise frequently supplies confident wrong answers at this level. Several situational judgement items deliberately test whether a candidate recognises the boundary of their own remit — deciding what they own decisively while routing what belongs to others, with evidence, rather than either overstepping or deferring what is theirs to decide. Use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles: pipeline stage graphs, deployment strategies, environment configurations, alerting rule sets, dependency chains, and automation scripts.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a similar level, often adaptive, with speed and accuracy reported separately.

For a DevOps engineer, cognitive assessment is particularly relevant because professional value is largely structured reasoning applied at speed: decomposing a requirement into stages, dependencies, and failure modes; holding a mental model of what is deployed where; and identifying and resolving issues that prevent delivery under incomplete information.

### How this assessment maps to the role

- **Pattern recognition** maps to **Service support** and **Development process optimisation**: recognising deviations from normal, and identifying deficiencies as the recurring shapes of waste — rework loops, manual steps, queues.
- **Logical deduction** maps to **Systems integration** and **Availability and capacity management**: reasoning about what follows when one component of a toolchain changes, and tracing layered rules to their consequences.
- **Error checking** maps to **Modern development standards** and **Systems design**: auditing artefacts for internal consistency.
- **Prioritisation** maps to the duty to **identify and resolve issues that are preventing delivery**: ranking by impact on delivery and users, not by noise or recency.
- **Applied problem solving** maps to **Programming and build (software engineering)** and **Prototyping**: reasoning about cause, effect, and cost in the development process.

### Practice questions

**Question 1 (easy) — Pattern recognition in pipeline conventions**

Pipeline convention requires stages in order: `lint`, `build`, `test`, `scan`, `package`, `deploy`; optional stages may be omitted but never reordered. Four pipelines: (1) `lint`, `build`, `test`, `package`, `deploy`; (2) `build`, `test`, `scan`, `package`, `deploy`; (3) `lint`, `build`, `scan`, `test`, `package`, `deploy`; (4) `lint`, `test`, `package`. Ask which pipeline violates the convention.

- A) Pipeline 1
- B) Pipeline 2
- C) Pipeline 3
- D) Pipeline 4

**Correct answer: C**

**Explanation:** Pipelines 1, 2 and 4 omit stages but keep survivors in order; pipeline 3 contains all six stages but swaps `scan` and `test` — the one thing the convention forbids. This tests restating a rule precisely ("omission legal, inversion illegal") before scanning data, since automation and humans both key off stage order, and a security scan running after packaging examines the wrong artefact.

**Question 2 (easy) — Deduction from deployment gating rules**

Rules: (i) promotion to staging requires all tests passing and no critical security findings; (ii) promotion to production requires staging plus service owner sign-off. Build 417 is currently in staging. Ask which statement must be true.

- A) Build 417 has service owner sign-off.
- B) Build 417 passed all tests and had no critical security findings at promotion time.
- C) Build 417 will be promoted to production.
- D) Build 417 contains no defects.

**Correct answer: B**

**Explanation:** Rule (i) is a precondition for reaching staging, so it must have held. Sign-off belongs to a step that hasn't occurred (A); eligibility isn't destiny (C); a green pipeline certifies tested behaviours, not the absence of all defects (D). This tests deducing only what the rules guarantee, and knowing precisely what each gate does and does not certify.

**Question 3 (easy) — Error checking an environment matrix**

Intended state: TST-1 release 3.2/flags off; TST-2 release 3.3/flags on; PERF-1 release 3.2/flags on. Actual state: TST-1 release 3.2/flags off; TST-2 release 3.2/flags on; PERF-1 release 3.2/flags on. Ask how many environments diverge from the register.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Only TST-2's release (3.2 actual vs 3.3 intended) diverges; the other environments and attributes match. This tests a two-attribute checklist per row rather than pattern-skimming, since a test team believing they validate 3.3 while running 3.2 produces confidently wrong results — more expensive than obviously missing ones.

**Question 4 (easy) — Prioritising delivery blockers**

9:15am, four issues: (1) main pipeline failing at `package`, blocking every team; (2) a developer's artifact repository access request unapproved for two days; (3) nightly capacity report shows disk at 78% against an 85% alert threshold; (4) a teammate wants a pull request reviewed before an 11:00 demo. Ask what to address first.

- A) Issue 2 — a colleague has waited longest
- B) Issue 1 — the broken pipeline blocks all delivery
- C) Issue 3 — capacity problems compound if ignored
- D) Issue 4 — the demo has the nearest fixed deadline

**Correct answer: B**

**Explanation:** Issue 1 has maximal impact and immediate urgency, blocking every team's path to shipping. This tests ranking by impact times urgency together, rather than a single dimension (wait time, deadline proximity) alone — noting that "first" doesn't preclude interleaving the rest as the fix progresses.

**Question 5 (moderate) — Pattern recognition in a failure distribution**

A month's pipeline failures by stage: build 4, test 31, scan 3, package 2, deploy 5. Within the 31 test failures, 26 involve one integration suite, and 24 of those 26 pass on rerun with no code change. Ask for the most reasonable interpretation.

- A) The codebase has widespread quality problems concentrated in integration.
- B) The failures cluster in one flaky integration suite — an environmental or timing instability, not primarily a code quality issue — and stabilising that suite would remove most pipeline failures.
- C) Failures are spread evenly, so no single intervention will help much.
- D) The test stage should be removed since it causes most failures.

**Correct answer: B**

**Explanation:** The layered concentration (one stage, then one suite) plus the rerun-passes signature is the signature of flakiness, not defective code (which fails consistently). This tests a Pareto reading of failure data and recognising the rerun-pass pattern as one of the most useful diagnostics in pipeline operations.

**Question 6 (moderate) — Deduction through a dependency chain**

Dependencies: deployment requires the artifact repository; the artifact repository requires authentication; monitoring requires authentication; the `test` stage requires the test database, independent of authentication. Authentication goes down. Ask which capabilities are lost.

- A) Deployments only
- B) Deployments and the artifact repository only
- C) Deployments, the artifact repository, and monitoring — but the `test` stage can still run
- D) Everything, including the `test` stage

**Correct answer: C**

**Explanation:** Propagating along stated edges only: authentication → repository → deployment, and authentication → monitoring, both fail; the test database's explicit independence protects the `test` stage. This tests following transitive chains fully while resisting over-propagation to explicitly independent components — exactly the reasoning performed in the first minutes of an incident to predict blast radius.

**Question 7 (moderate) — Error checking a design against its requirements**

Requirement: "The log-shipping component must batch entries and transmit at most once per 30 seconds; transmit immediately, regardless of the interval, when a batch contains any entry of severity ERROR or above; and never hold more than 10,000 entries in memory." Design: batches transmit every 30 seconds; a batch with an ERROR transmits immediately; at 10,000 entries, new entries are dropped with a counter incremented. Ask which requirement the design's handling is most questionable against.

- A) The 30-second batching interval
- B) The immediate transmission on ERROR
- C) The 10,000-entry memory bound
- D) The design fully satisfies all three requirements

**Correct answer: C**

**Explanation:** The memory bound is honoured numerically, but by silently dropping entries — a legitimate strategy the requirement never specified, potentially discarding the very ERROR entries the second requirement treats as urgent. This tests spotting the gap between "satisfies the letter" and "satisfies the intent" — where a design makes an unstated, consequential choice that deserves an explicit challenge (backpressure? early flush? spill to disk?).

**Question 8 (moderate) — Choosing a deployment strategy by constraint**

Constraints: zero downtime; the schema change is backwards-compatible; the ability to shift a small percentage of real traffic to the new version first, and revert quickly if error rates rise. Ask which deployment approach fits.

- A) Big-bang deployment in a maintenance window announced to users
- B) Blue-green deployment with instant full cutover
- C) Canary deployment: route a small share of traffic to the new version, observe error rates, then progressively shift the remainder — reverting the routing if metrics degrade
- D) Deploy to the test environment only and soak for a week

**Correct answer: C**

**Explanation:** Applying each constraint as a filter eliminates A (downtime by appointment), B (all-or-nothing exposure), and D (never reaches real traffic). This tests requirement-to-mechanism matching by treating each stated constraint as a veto and seeing what survives — the fastest and most defensible way to justify a choice in a design review.

**Question 9 (moderate) — Applied problem solving: intermittent integration failure**

An interface fails intermittently — 2% of transfers timeout, spread across all hours, all document sizes, both data centres — but never in test, where the same code path runs clean under load. Ask for the hypothesis that best fits all the evidence.

- A) The interface code has a logic bug in size handling.
- B) A production-only environmental difference — such as a connection limit, network policy, or resource contention absent from test — intermittently delays requests past the timeout.
- C) The test environment load tests are not running.
- D) The document store is completely down 2% of the time.

**Correct answer: B**

**Explanation:** A logic bug would correlate with size (absent) and reproduce in test (it doesn't); an outage would cluster, not scatter evenly (it doesn't); C misreads the stem. Only B explains the whole pattern, including the absence of size correlation and the absence of reproduction in test. This tests disciplined differential diagnosis — a hypothesis must explain the entire evidence pattern, not just one convenient part.

**Question 10 (hard) — Multi-constraint maintenance scheduling**

Four operations across a week (Mon–Fri, one per day): database upgrade (U), storage migration (M, requires U first), certificate renewal (C, must be before Thursday's expiry), monitoring agent rollout (R, must be last). The database team is unavailable Monday and Tuesday, and must attend U. Ask which schedule satisfies all constraints.

- A) U Mon, M Tue, C Wed, R Fri
- B) C Mon, U Wed, M Thu, R Fri
- C) C Wed, U Thu, M Fri, R Fri
- D) U Wed, C Thu, M Thu, R Fri

**Correct answer: B**

**Explanation:** U cannot be Monday or Tuesday, eliminating A; C and D double-book a day and/or schedule C on the expiry day itself. B alone survives every check: C Monday (before Thursday, no database team needed), U Wednesday (team available), M Thursday (after U), R Friday (final). This tests mechanical elimination against each constraint rather than holistic guessing.

**Question 11 (hard) — Layered alerting logic under a change freeze**

Rules: (i) response time above 800ms sustained 5 minutes → WARNING; (ii) response time above 2,000ms at any point, or error rate above 5% → CRITICAL immediately; (iii) during a change freeze, WARNINGs are suppressed but CRITICALs page as normal; (iv) three or more WARNINGs (including suppressed) within an hour escalate to CRITICAL. Freeze in force. Between 14:00–15:00: sustained 800ms+ breaches at 14:05–14:12, 14:20–14:26, 14:40–14:47; peak 1,850ms; error rate peaked 3%. Ask what paging results.

- A) None — the freeze suppresses everything and no CRITICAL threshold was crossed directly.
- B) One page: the three WARNINGs within the hour escalate to a CRITICAL under rule (iv), and CRITICALs page despite the freeze.
- C) Three pages, one per WARNING.
- D) One page from rule (ii), because 1,850ms exceeded the sustained threshold.

**Correct answer: B**

**Explanation:** Three WARNINGs fire (rule i) but are individually suppressed (rule iii); however rule (iv) counts suppressed WARNINGs and escalates to CRITICAL, which pages despite the freeze (rule iii's own exception). D misapplies the instantaneous 2,000ms threshold to a lower peak. This tests tracing layered conditional rules against a timeline exactly, respecting each rule's precise trigger and the load-bearing parenthetical "(including suppressed ones)".

**Question 12 (hard) — Evaluating an optimisation trade-off**

Pipeline: build 6, test 25, scan 8, package 3 minutes, sequential (42 total). Proposal: parallelise test and scan, splitting test across four shards averaging 7 minutes. Objection: "Parallel shards sometimes fail unevenly — one slow shard and we gain nothing." Ask for the best assessment of the new duration and the objection.

- A) New duration about 16 minutes; the objection identifies a real variance risk but does not change the expected large saving.
- B) New duration about 24 minutes; the objection is decisive.
- C) New duration about 16 minutes; the objection is meaningless because parallel jobs always finish together.
- D) New duration about 33 minutes; parallelisation saves only the scan time.

**Correct answer: A**

**Explanation:** Critical path: 6 (build) + max(7, 8) (parallel block) + 3 (package) ≈ 17 minutes, a saving of roughly 25 minutes. The objection names a real risk (shard variance) that is partially absorbed by scan's 8-minute floor, without overturning the expected large gain. This tests computing a critical path (not a stage sum) and weighing a genuine objection fairly rather than dismissing or over-crediting it.

### Administration tips

- Score for whether the candidate restates a rule precisely, catching load-bearing qualifiers ("at most", "including suppressed", "before Thursday") before applying it.
- Note whether the candidate propagates a dependency chain fully but stops at explicitly independent components.
- Watch for whether the candidate computes a critical path (longest path) rather than a total of all durations when parallelism is involved.
- Score for whether the candidate reads a gate or certification as covering exactly what it certifies, no more.
- Note whether the candidate diagnoses failure clustering and flakiness signatures (rerun passes) correctly before proposing a fix.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from the candidate's own organisation's conventions rather than the rules stated in the scenario.
- Missing when a candidate reads a passed gate as a guarantee broader than what it actually certifies.
- Rewarding single-dimension prioritisation (wait time or deadline alone) over impact-weighted urgency.
- Accepting a hypothesis that explains only part of an evidence pattern, ignoring a detail that rules it out.
- Missing when a candidate computes a stage-duration sum instead of a critical path in a parallelism question.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantitative material this role produces: percentages, ratios, averages, rates, and trends, presented in tables and charts drawn from operational life — availability figures, capacity forecasts, error budgets, pipeline durations, environment costs, and KPI dashboards.

Typical format: an online, timed test of 20 to 30 minutes with 15 to 25 questions, calculator usually available.

Numeric fluency is a core skill for this role: managing service components to meet KPIs means availability percentages, error rates, and capacity against growth curves are numbers with consequences; managing live test environments means cost and utilisation arithmetic; development process optimisation means quantifying durations, failure rates, and the value of proposed improvements.

### How this assessment maps to the role

- **Percentages, thresholds, and error budgets** map to **Availability and capacity management**: converting between availability targets, downtime allowances, and headroom.
- **Rates and durations** map to **Development process optimisation**: quantifying pipeline times, failure rates, and throughput before and after a change.
- **Ratios and proportional allocation** map to **Systems design** and environment management: sizing instances and costing configurations.
- **Weighted averages and fair comparisons** map to **Service support** and **Systems integration**: comparing fault rates across interfaces or periods of different volume.
- **Trend reading and forecasting** maps to **User focus** and capacity planning: growth, peaks, and seasonality driving when capacity must be added.

### Practice questions

**Question 1 (easy) — Reading a KPI table**

Incident counts: A 7, B 12, C 4, D 9, E 8. Ask for the total.

- A) 38
- B) 40
- C) 42
- D) 44

**Correct answer: B**

**Explanation:** 7+12+4+9+8=40 — option B, verifiable by regrouping (12+8, 7+9, +4). This tests fast, verified addition, since a summary figure like this propagates into service reviews as an organisational "fact."

**Question 2 (easy) — Error rate against an error budget**

400,000 requests, 1,200 failed; KPI allows up to 0.5% failure. Ask for the actual rate and whether it's within budget.

- A) 0.3% — within budget
- B) 0.3% — over budget
- C) 3% — over budget
- D) 0.03% — within budget

**Correct answer: A**

**Explanation:** 1,200÷400,000=0.3%, under the 0.5% budget — option A. This tests basic percentage calculation with an anchor check (1% of 400,000 is 4,000), and framing the answer against the budget rather than as a bare number — the question a service owner actually asks.

**Question 3 (easy) — Mean pipeline duration**

Six runs: 14, 17, 13, 21, 16, 15 minutes. Ask for the mean.

- A) 15 minutes
- B) 16 minutes
- C) 17 minutes
- D) 18 minutes

**Correct answer: B**

**Explanation:** 96÷6=16 — option B, sitting between the minimum (13) and maximum (21). This tests basic averaging and, in a strong answer, noting that the mean smooths over the one 21-minute outlier worth investigating separately.

**Question 4 (easy) — Proportional allocation by ratio**

45 instances across environments in ratio 4:3:2 (integration:performance:exploratory). Ask how many go to performance.

- A) 10
- B) 12
- C) 15
- D) 20

**Correct answer: C**

**Explanation:** 9 parts total; one part=5; performance=3×5=15 — option C, distinct from the integration figure (20, option D) sitting there for a positional misread. This tests the standard ratio method and reading which position in the ratio was actually asked for.

**Question 5 (moderate) — Availability target to downtime allowance**

99.9% availability KPI, 30-day month. Ask for the downtime allowance to the nearest minute.

- A) 14 minutes
- B) 43 minutes
- C) 72 minutes
- D) 144 minutes

**Correct answer: B**

**Explanation:** 0.1% of 43,200 minutes ≈ 43 minutes — option B. This tests converting a percentage target to a time allowance, and, in a strong answer, having this conversion (roughly 43 minutes per "three nines" month) as an instant mental anchor.

**Question 6 (moderate) — Percentage change in deployment frequency**

Deployments: 48 (Q1) to 66 (Q2). Ask for the percentage increase.

- A) 27%
- B) 33.3%
- C) 37.5%
- D) 42%

**Correct answer: C**

**Explanation:** (66−48)÷48=37.5% — option C, not the wrong-base 27% (dividing by 66). This tests anchoring percentage change on the original value, a figure worth defending when it supports a prioritisation case.

**Question 7 (moderate) — Weighted average across environments**

Response times: production 140ms/90,000 requests; staging 260ms/8,000; demo 400ms/2,000. Ask for the overall average across all 100,000 requests.

- A) 155 ms
- B) 160 ms
- C) 200 ms
- D) 267 ms

**Correct answer: A**

**Explanation:** Weighted: (90,000×140+8,000×260+2,000×400)÷100,000≈155ms — option A, far from the unweighted 267ms (D) that overstates reality by nearly 75%. This tests weighting by request volume when group sizes differ dramatically — dashboards averaging averages systematically misrepresent user experience.

**Question 8 (moderate) — Capacity headroom forecast**

800 GB queue, 55% utilised, growing 3 percentage points/week; KPI requires action before 85%. Ask for the number of weeks that can elapse before the threshold arrives.

- A) 8 weeks
- B) 9 weeks
- C) 10 weeks
- D) 12 weeks

**Correct answer: C**

**Explanation:** Gap 30 points ÷ 3 points/week = 10 weeks — option C, confirmed in gigabytes (240GB headroom ÷ 24GB/week). This tests matching units to the given growth rate and cross-verifying in absolute terms, treating the forecast as a planning trigger rather than a snooze button.

**Question 9 (moderate) — Cost comparison for environment scheduling**

15 instances at £0.60/hour, currently 24/7. Proposal: full 15 instances 12 hours/day on 20 working days, 5-instance skeleton the rest of a 30-day month. Ask for the monthly saving.

- A) £2,592
- B) £2,880
- C) £3,240
- D) £3,600

**Correct answer: B**

**Explanation:** Current: 10,800 instance-hours=£6,480. Proposal: (3,600+2,400) instance-hours=£3,600. Saving £2,880 — option B, verified via the instance-hour gap (4,800×£0.60). This tests two-band cost decomposition for a mixed schedule — a single "hours × instances" line cannot represent it — and correctly computing the skeleton band's hours as the remainder of the month.

**Question 10 (hard) — Comparing interface failure rates fairly**

Interface Alpha: 150,000 messages, 900 failures. Interface Beta: 36,000 messages, 450 failures. An owner argues Alpha needs attention first "double the failures." Ask for the correct analysis.

- A) Alpha first: 900 failures exceed 450.
- B) Alpha's rate is 0.6% and Beta's is 1.25% — Beta fails more than twice as often per message, so Beta is the stronger candidate for attention on rate grounds.
- C) The rates are equal, so either order is fine.
- D) No comparison is possible without knowing message sizes.

**Correct answer: B**

**Explanation:** Alpha 0.6%, Beta 1.25% — the reverse of the raw-count comparison. This tests dividing before comparing volumes that differ fourfold, while noting (in a strong answer) that rate is the correct starting point, with impact-per-failure a legitimate second-stage consideration.

**Question 11 (hard) — Reading a trend table for capacity planning**

Weekly peak concurrent users, six weeks: 1,000; 1,100; 1,210; 1,331; 1,464; 1,610. Tested capacity: 2,500. Ask, if the pattern continues, in which future week (from week 6) peak concurrency first exceeds capacity.

- A) 3rd week after week 6
- B) 5th week after week 6
- C) 7th week after week 6
- D) 10th week after week 6

**Correct answer: B**

**Explanation:** The ratios are constant (×1.1 each week) — 10% compound growth, not linear. Projecting forward from 1,610 reaches 2,593 at week +5, the first value exceeding 2,500. This tests diagnosing growth pattern (constant ratio = compound, not constant difference = linear) before projecting — compound trends breach thresholds sooner than linear intuition expects.

**Question 12 (hard) — Error budget consumption mid-month**

99.5% monthly availability KPI, 30-day month. By day 12, 2 hours 24 minutes of downtime accumulated. Ask for the fraction of the error budget consumed and its implication.

- A) 40% consumed — comfortable margin remains.
- B) 67% consumed — about 1 hour 12 minutes of budget remains for 18 days, so risk tolerance must tighten.
- C) 100% consumed — the KPI is already breached.
- D) 50% consumed — consumption is exactly on pace.

**Correct answer: B**

**Explanation:** Monthly budget 216 minutes; consumed 144 minutes; 67% — option B, far ahead of the 40% elapsed-time mark (ruling out D's "on pace" claim). This tests distinguishing elapsed time from consumed budget, and drawing the operational implication (tighten risk tolerance for the remaining days) rather than stopping at the arithmetic.

### Administration tips

- Score for whether the candidate weights by volume before averaging across unequal groups.
- Note whether the candidate divides by the correct base for a percentage change (always the original value).
- Watch for whether the candidate distinguishes elapsed time from consumed budget/resource when the two diverge.
- Score for whether the candidate diagnoses linear versus compound growth (via differences versus ratios) before projecting a trend.
- Note whether the candidate verifies a multi-step calculation by a second, independent route.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of averages across groups of unequal size.
- Missing a percentage change divided by the new value instead of the original.
- Rewarding a linear projection of a demonstrably compound-growth trend.
- Accepting a claim that elapsed time and consumed budget are the same thing.
- Missing an order-of-magnitude (decimal-point) slip uncaught by an anchor check.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material this role runs on: standards documents, operational procedures, incident reports, interface contracts, security guidance, service descriptions, and correspondence between teams.

The dominant format presents a passage followed by statements to judge True, False, or Cannot say. Other formats include best-summary selection, identifying what a rule requires in a specific case, argument evaluation, and clear-writing judgement. Typical timing is 15 to 25 minutes for 20 to 30 questions.

The governing discipline: answer only from the passage. This role transforms written technical requirements into processes — a failure that occurs exactly where reading fails: a missed qualifier, an assumed default, a "should" treated as "must" — and produces text (design documentation, runbooks, incident writeups) others depend on.

### How this assessment maps to the role

- **Comprehension of requirements and procedures** maps to the duty to **transform technical requirements into DevOps processes**: scope, conditions, exceptions and modal force all carry design consequences.
- **True/false/cannot-say discipline** maps to **Information security**: representing guidance and threat information exactly.
- **Inference** maps to **Systems integration** and **Service support**: connecting stated facts into their guaranteed implications, no further.
- **Argument evaluation** maps to **Development process optimisation** and **Prototyping**: weighing evidence for proposed process or prototyping changes.
- **Clear-writing judgement** maps to **Systems design** and **User focus**: writing that survives a stressed reader, and summarising user needs without distortion.

### Practice questions

**Question 1 (easy) — True/false/cannot say from an operational notice**

Passage: "The artifact repository will be upgraded on Saturday between 08:00 and 12:00. During the upgrade, existing artifacts remain downloadable, but new uploads are disabled. Pipelines that only consume artifacts will be unaffected; pipelines that publish artifacts will fail at the publish step and should be re-run after 12:00."

Statement: "During the upgrade window, a pipeline that only downloads artifacts will fail."

- A) True
- B) False
- C) Cannot say
- D) True, but only between 08:00 and 12:00

**Correct answer: B**

**Explanation:** The passage directly states consume-only pipelines "will be unaffected." This tests locating the deciding sentence and correctly mapping the statement's terms (download = consume) onto the passage's — exactly the reading needed to tell teams accurately who needs to reschedule.

**Question 2 (easy) — What does the standard require in this case?**

Passage: "All production deployments must be performed through the pipeline. Production deployments must have a completed change record before they begin. Emergency fixes during a declared incident may skip the change record at deployment time, provided a retrospective change record is completed within 24 hours. Deployments to test environments require neither change records nor declarations." An emergency fix is deployed through the pipeline during a declared incident at 15:00 without a change record. Ask what the standard requires.

- A) Nothing further — emergencies are exempt from change records.
- B) A retrospective change record completed by 15:00 the next day.
- C) The deployment was non-compliant and must be rolled back.
- D) A change record before the next deployment, whenever that is.

**Correct answer: B**

**Explanation:** The emergency clause defers the change record rather than abolishing it, with an explicit proviso. This tests reading a conditional exemption's proviso as part of the permission, not an optional footnote — a common misreading that either wrongly declares total exemption or invents non-compliance where none exists.

**Question 3 (easy) — Best summary of a stakeholder email**

Email: "Thanks for the new deployment dashboard. Two things. First, the release annotations are brilliant — the support team can now correlate user complaints with releases in seconds, so please keep those. Second, the raw pod-restart counts mean nothing to my team and clutter the view; could they move to an advanced tab? If that's hard, even just renaming the column to something meaningful would help. No urgency — next sprint is fine."

Ask for the best one-sentence summary.

- A) The service manager dislikes the dashboard and wants it reworked urgently.
- B) The service manager values the release annotations, asks for pod-restart counts to be moved to an advanced tab or at least renamed, and is happy to wait until next sprint.
- C) The service manager wants the release annotations removed and the restart counts kept.
- D) The support team cannot use the dashboard.

**Correct answer: B**

**Explanation:** B preserves the positive to protect, the request with its fallback, and the priority signal. Options A and C invert facts and sentiment. This tests preserving every decision-relevant element of mixed feedback undistorted, so it converts correctly into a backlog item.

**Question 4 (easy) — Cannot-say discipline on a security bulletin**

Passage: "A vulnerability has been identified in versions 5.0 to 5.4 of the container runtime. Version 5.5, released this week, includes the fix. Systems running affected versions should be upgraded as soon as reasonably practicable. Exploitation requires local access to the host."

Statement: "The vulnerability has been exploited in production systems."

- A) True
- B) False
- C) Cannot say
- D) False, because exploitation requires local access

**Correct answer: C**

**Explanation:** The bulletin never addresses whether exploitation has occurred: Cannot say. Option D cites a true detail (a precondition for exploitation) that does not establish the conclusion (that it never happened). This tests resisting a seductive wrong-answer pattern: a true supporting detail laundering an unsupported claim.

**Question 5 (moderate) — Tracing a rollback procedure's branches**

Passage: "If a production deployment degrades the service, first check whether the deployment included a database migration. If it did not, roll back the application version immediately. If it did, do not roll back the application alone: assess whether the migration is reversible. If reversible, reverse the migration, then roll back the application. If not reversible, roll forward with a hotfix instead, and page the data engineering rota if data integrity is in question." The deployment included a migration, which is not reversible; data integrity is not in question. Ask what the procedure requires.

- A) Roll back the application immediately.
- B) Reverse the migration, then roll back the application.
- C) Roll forward with a hotfix; do not page data engineering.
- D) Roll forward with a hotfix and page the data engineering rota.

**Correct answer: C**

**Explanation:** The migration/irreversible branch prescribes a hotfix, with paging conditional only on integrity being in question — which it is not. This tests tracing exact facts through nested conditionals, and distinguishing what the procedure requires from what might feel prudent (option D over-applies the paging condition).

**Question 6 (moderate) — Inference from an interface contract**

Passage: "The reporting API guarantees that results are complete for any date range ending more than 48 hours in the past. Queries covering more recent periods may return partial results while ingestion completes, and the response includes a `complete` flag indicating whether the returned data is final. Consumers requiring finality must either query ranges older than 48 hours or check the flag." A query for yesterday's data returns `complete: true`. Ask for the best-supported conclusion.

- A) The response data is final, because the flag says so and the specification defines the flag as indicating finality.
- B) The response data cannot be trusted, because the range is within 48 hours.
- C) The query violated the specification.
- D) The consumer must re-query after 48 hours regardless of the flag.

**Correct answer: A**

**Explanation:** The contract explicitly provides the flag as an alternative finality guarantee for recent queries, and it returned true. This tests reading a contract as a system of complementary guarantees rather than collapsing to its most conservative clause — over-conservative reading wastes effort as surely as over-liberal reading corrupts data.

**Question 7 (moderate) — True/false/cannot say with an exception clause**

Passage: "Manual configuration changes are prohibited in all managed environments. During a declared major incident, the incident lead may authorise manual changes, which must be logged and reconciled through the pipeline within 48 hours of the incident closing. Unreconciled manual changes are treated as configuration drift and reverted automatically by the nightly enforcement job."

Statement: "A manual change authorised during a major incident will be automatically reverted if it is not reconciled within 48 hours of the incident closing."

- A) True
- B) False
- C) Cannot say
- D) False — authorised changes are never reverted

**Correct answer: A**

**Explanation:** An authorised-but-unreconciled change becomes "unreconciled" after its deadline lapses, entering the class subject to automatic reversion. This tests following a term as it picks up members from earlier clauses, rather than assuming authorisation grants permanent immunity (option D).

**Question 8 (moderate) — Clear-writing judgement in an incident summary**

Ask which incident summary best states impact, cause, resolution, and follow-up in language a service owner can act on.

- A) "There was an issue with the deployment tooling which has now been resolved. Various improvements have been identified."
- B) "Between 09:40 and 10:25, deployments were blocked for all teams because the artifact repository rejected uploads after its disk filled. We freed space and deployments resumed; a fix to the repository's retention policy is scheduled this sprint to prevent recurrence."
- C) "The artifact repository experienced an anomalous condition impacting operational throughput. Remediation was effectuated and preventative measures are under consideration."
- D) "Disk full on artifact repo, fixed. See ticket OPS-2214 for details."

**Correct answer: B**

**Explanation:** B states all four elements concretely and boundedly. A and C are vague or inflated; D contains real facts but no impact scope. This tests judging a summary against whether its reader can brief stakeholders and track the follow-up unaided — the genre that matters most when trust is lowest.

**Question 9 (moderate) — Evaluating a process-change argument**

Passage: "We should require two approvals instead of one for changes to pipeline configuration. Last quarter, two of our three pipeline outages were caused by configuration changes approved by a single reviewer who missed the error. A second reviewer would have caught both. The cost is small — configuration changes average four per week — and the outages each cost roughly a day of team-wide delivery."

Ask which fact, if true, would most strengthen the argument.

- A) Both single-reviewer misses involved subtle YAML indentation errors, and in a trial last month a second reviewer caught five of five seeded errors of the same type that first reviewers had missed.
- B) Other teams in the department also have pipeline outages.
- C) The team's pipeline configuration files are stored in version control.
- D) One of the proposal's authors is the team's most experienced engineer.

**Correct answer: A**

**Explanation:** A shores up the argument's asserted-but-unsupported counterfactual ("a second reviewer would have caught both") with actual measured evidence. Options B, C and D are irrelevant or an appeal to authority. This tests locating an argument's load-bearing bridge and identifying what evidence would actually bear its weight.

**Question 10 (hard) — Inference across an incident report**

Passage: "At 11:03, error rates on the payments interface rose to 12%. The on-call engineer rolled back the 10:45 payments-service release at 11:15, but error rates did not improve. At 11:32, investigation found that a dependency — the currency-rates service — had begun returning malformed responses at 11:01 following its own automated certificate renewal, which had loaded a misconfigured certificate bundle. The payments service's retry logic masked the failures in its own logs by classifying them as transient. Rates service certificates were corrected at 11:41 and error rates returned to baseline by 11:44. The 10:45 release was re-deployed at 14:00 without incident."

Ask which statement is best supported.

- A) The 10:45 release caused the incident, and the rollback was the correct fix.
- B) The incident was caused by the currency-rates service's certificate renewal; the 10:45 release was coincidental in timing, as shown by the rollback's failure to help and the release's later clean re-deployment.
- C) The payments service's retry logic caused the malformed responses.
- D) The on-call engineer's rollback prolonged the outage.

**Correct answer: B**

**Explanation:** Four independent strands — earlier failure onset, the rollback's ineffectiveness, timing of the certificate fix matching recovery, and the clean re-deployment — all point at B. C inverts a masking factor into a cause; D overreaches beyond what the report supports. This tests layered causal attribution — cause, trigger, masking factor, red herring — in exactly the reading real incidents demand.

**Question 11 (hard) — Modal force across a standards extract**

Passage: "Services must expose a health endpoint. The health endpoint must not require authentication. Services should expose a readiness endpoint distinct from the health endpoint; where a combined endpoint is used instead, it must document which checks gate readiness. New services must not use combined endpoints after Q3. Existing services are encouraged, but not required, to migrate."

Statement: "After Q3, an existing service using a documented combined endpoint breaches the standard."

- A) True
- B) False
- C) Cannot say
- D) True, unless the service migrates

**Correct answer: B**

**Explanation:** The post-Q3 prohibition binds only new services; existing services are explicitly "encouraged, but not required" to migrate. This tests resisting scope creep between clauses — each modal governs exactly the population its sentence names, which is how phase-in and grandfathering language actually functions.

**Question 12 (hard) — Which conclusion does the research summary support?**

Passage: "We interviewed nine caseworkers and observed six using the deployment status page. All six who were observed checked the page only after a deployment had already failed, using it to answer 'what broke and when'. Interviewees consistently said they would value proactive notification of failures. Two interviewees suggested a browser extension; none mentioned email. Observed participants found the current page's timestamp column confusing, with four of six misreading UTC times as local."

Ask for the best-supported conclusion for the next step.

- A) Build a browser extension, since users requested it.
- B) The evidence supports prioritising proactive failure notification and fixing the timestamp display; the notification *channel* needs further investigation, since the extension suggestion came from only two participants and alternatives went unexplored.
- C) Email notifications should be ruled out, since no interviewee mentioned email.
- D) The research is invalid because only six users were observed.

**Correct answer: B**

**Explanation:** The reactive-use pattern and desire for proactive notification are strong (consistent/unanimous); the extension suggestion is weak (two of nine, unexplored alternatives). This tests matching the strength of a conclusion to the strength of its underlying evidence, rather than treating any user suggestion as a settled requirement or silence as rejection.

### Administration tips

- Score for whether the candidate attaches each modal verb to its exact stated subject and population.
- Watch for whether the candidate traces a procedure's exact branch for given facts, resolving each condition explicitly before selecting an option.
- Note whether the candidate treats a true supporting detail as evidence for a broader, unsupported claim.
- For argument-evaluation items, score on whether the candidate identifies the specific load-bearing bridge in the argument.
- For research-summary items, score on whether conclusions are weighted to the strength of the underlying evidence.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from the candidate's operational experience rather than the passage's stated rules.
- Missing when a candidate drops a proviso attached to a conditional exemption.
- Rewarding a true-but-irrelevant detail used to support an unsupported conclusion.
- Accepting over-application of a conditional clause to a case it does not attach to.
- Missing when a candidate treats a weak, unprompted suggestion as a design requirement.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses — most effective, least effective, or a full ranking. Scoring reflects experienced practitioners' judgement and the behaviours UK government digital organisations value: user focus, collaboration across teams, ownership and honesty, proportionate escalation, and inclusion.

Typical format: 15 to 25 scenarios, untimed or generously timed (30 to 45 minutes).

This level delivers independently but operates inside a web of dependencies — other teams consume the toolchain, live test environments serve many masters, and resolved issues are often blocking someone else's delivery. Strong responses typically involve: acting decisively within one's own remit while communicating proactively across its edges; balancing delivery pressure against operational and security safety with explicit reasoning; escalating with evidence and options rather than problems alone; making automation and environments serve their users, not their maintainer; and treating process rules as things to follow and help improve through proper channels.

### How this assessment maps to the role

- **Balancing delivery against operational safety** maps to the duty to **identify and resolve issues that are preventing delivery** while managing live test environments.
- **Security judgement under pressure** maps to **Information security**: what happens when a control is inconvenient, bypassed, or challenged.
- **Cross-team collaboration** maps to **Systems integration** and **Programming and build**: boundaries, handoffs, and disagreement between teams.
- **Improving rather than circumventing process** maps to **Development process optimisation**: identifying deficiencies is rewarded; quietly routing around them is not.
- **Serving toolchain users** maps to **User focus** and **Prototyping**: whether evidenced user needs drive choices.
- **Documentation and handover integrity** maps to **Systems design**: documentation tested exactly when it is tempting to skip.

### Practice questions

**Question 1 (easy) — A blocked release and a failing gate**

Friday 15:30, a security scan is failing a build over a critical finding in a newly introduced third-party library. A delivery manager asks to disable the scan stage "just for this one release," citing three delays this month and promising to fix the finding next week. Ask for the most effective response.

- A) Disable the stage for this release — three delays is excessive, and they have committed to a fix next week.
- B) Keep the gate; explain that a critical finding on a newly introduced library is exactly what the gate exists to catch; offer immediate help — checking for a patched library version or an alternative — and if the team believes the risk is acceptable, point them to the documented risk-acceptance route with the security team, which can be fast-tracked.
- C) Refuse and end the conversation — the gate is the gate.
- D) Disable the stage but log a ticket noting that you did so.

**Correct answer: B**

**Explanation:** B keeps the control intact, offers real practical help, and routes risk acceptance to its legitimate owner. Options A and D convert schedule pressure into unreviewed risk on personal authority (a logged bypass is still a bypass); C holds the line but abandons the person, teaching them to route around rather than through the control next time. This tests holding controls while helping people through them, and routing risk-acceptance decisions to their proper owner rather than deciding unilaterally.

**Question 2 (easy) — Your automation broke someone else's morning**

A shared pipeline template change, tested only against the candidate's own repositories, broke builds overnight for two other teams using an older layout. Ask for the most effective response.

- A) Post in the affected channels immediately: your change caused it, a revert is underway, here is the workaround meanwhile — then revert, then fix properly with the older layout accounted for, and add both layouts to the template's test matrix.
- B) Revert quietly and let the builds recover; no need to add noise to their channels.
- C) Fix forward as fast as possible — a revert would delay your own team's improvement.
- D) Explain in the channels that the older repository layout is deprecated and the teams should migrate.

**Correct answer: A**

**Explanation:** A attributes fast, restores fast, and fixes the underlying test coverage gap. Option B leaves teams wondering, later reading as concealment; C holds two teams hostage to unproven confidence; D shifts blame under cover of a possibly-valid but separate roadmap point. This tests owning the blast radius of a shared-infrastructure change loudly and immediately.

**Question 3 (easy) — Credentials in a handover script**

Taking over a provisioning script, a hard-coded service account password is found, present in version control for two years, with many possible dependents. Ask for the most effective response.

- A) Replace the hard-coded password with a secrets-manager reference, and consider the matter closed.
- B) Report the exposure to the security team now; coordinate rotation of the credential with an inventory of what uses the account, so rotation does not cause an outage; move the script to the secrets manager; and check history for other secrets while you are there.
- C) Rotate the password immediately yourself — security first, dependencies later.
- D) Leave it — it has been fine for two years, and the account may be too entangled to touch.

**Correct answer: B**

**Explanation:** B treats the exposure as compromised (mandatory), reports to the owning team, and sequences rotation against a dependency inventory to avoid an outage. Option A ignores the historical exposure; C risks a self-inflicted incident; D is risk acceptance by inertia, decided by the wrong person. This tests treating exposure honestly and completely while sequencing remediation like an engineer, not a panic.

**Question 4 (easy) — The test environment turf conflict**

A performance testing team has an environment booked all week for pre-release load tests; a delivery team lead, blocked reproducing a scale-dependent production bug, asks to "borrow" it midweek. Ask for the most effective response.

- A) Agree — production bugs outrank pre-release rehearsal.
- B) Refuse — the booking system exists precisely to prevent this conversation.
- C) Broker it: put the two leads in direct contact with your read on options — whether the load test schedule has slack, whether an afternoon slot can be swapped, and whether another environment could be temporarily scaled up to realistic size for the bug work — and apply whichever agreement they reach.
- D) Let the delivery team use PERF-1 without telling the performance team, restoring it before tomorrow's tests.

**Correct answer: C**

**Explanation:** C recognises the environment manager owns the resource, not the two teams' relative priorities, and convenes an informed decision by the accountable parties. Options A and B both adjudicate unilaterally; D risks corrupting the performance team's baselines invisibly. This tests distinguishing what a role owns (the resource) from what it does not (competing teams' priorities), and never acting covertly on shared ground.

**Question 5 (moderate) — Pressure from above to skip the soak**

A senior manager, citing ministerial interest, asks for an immediate production push of a fee-change release, skipping the usual 24-hour payment-path soak as "overkill for a config-level change." The soak has caught two payment-path regressions this year. Ask for the most effective response.

- A) Comply — the seniority and the ministerial context make this their call.
- B) Reply with the trade-off made concrete: the soak's catch record on this exact path, what a payment regression would mean publicly, and what an expedited-but-not-skipped option looks like (e.g. a shortened soak with targeted payment-path checks); state that you will proceed with the expedited option unless they confirm they are directing a full skip — and if they do so direct, ensure the direction and your stated concern are recorded, then comply.
- C) Refuse outright — process is process, whatever the minister's office wants.
- D) Comply, but quietly run extra manual checks yourself after the production deployment.

**Correct answer: B**

**Explanation:** B makes the risk legible with evidence, offers a constructive middle path, states a default, and records an override if instructed. Option A defers without informing; C offers no alternative and reads as obstruction; D is compliance with post-hoc, too-late conscience-laundering. This tests making risk legible to seniority before a decision is finalised, offering a middle path, and recording an override rather than either blocking or silently complying.

**Question 6 (moderate) — A deficiency you keep working around**

A manual, error-prone provisioning step known only to the candidate causes teams to stall while waiting for them; during a two-day absence, four teams stalled. Ask for the most effective response.

- A) Apologise and commit to handling pings faster, including checking messages on leave.
- B) Document the manual step so any platform engineer can do it, then propose and build its automation as a prioritised piece of toolchain work, using this week's four-team stall as the evidence for prioritisation.
- C) Train one colleague as backup and continue otherwise as now.
- D) Tell teams to batch their provisioning requests for efficiency.

**Correct answer: B**

**Explanation:** B provides immediate resilience through documentation and eliminates the underlying single point of failure through automation, using the stall as prioritisation evidence. Option A deepens the personal-dependency anti-pattern; C is a partial first step, not a destination; D optimises the queue for the bottleneck's convenience rather than users. This tests recognising and eliminating a single point of failure the candidate has personally become, rather than working around it faster.

**Question 7 (moderate) — Integration disagreement between teams**

A published interface contract specifies events at most once per entity per minute; observed behaviour shows bursts of five events per second, and the other team's engineer says "the doc's aspirational — just handle the bursts." Reworking the design to absorb bursts would be significant. Ask for the most effective response.

- A) Silently rework your side to handle bursts — their advice reflects reality, and arguing wastes time.
- B) Raise it as a contract question between the teams: present your test evidence, ask whether the documented ceiling or the observed behaviour is the intended contract, and route the answer to whoever owns the interface agreement — because the answer determines whether they fix the burst, you absorb it, or the contract changes for every consumer.
- C) Insist they fix their service to honour the published ceiling.
- D) Escalate to your delivery manager that the other team is unreliable.

**Correct answer: B**

**Explanation:** B treats the discrepancy as a contract question to be resolved by the interface owner, not a private engineering absorption or an assertion of preferred outcome. Option A entrenches undocumented divergence for future consumers; C assumes an answer without owning the question; D reframes a technical issue as a relationship complaint. This tests raising an interface discrepancy as a contract question routed to its owner, rather than absorbing it privately or asserting one side's preference.

**Question 8 (moderate) — The prototype that would settle it**

Two sprint-planning sessions have deadlocked over a dashboard's grouping (by team vs by service), argued from conviction with no user input. Ask for the most effective contribution to a third session.

- A) Side with the more senior faction to end the deadlock.
- B) Propose a compromise: a toggle offering both groupings.
- C) Propose replacing the third debate with evidence: two clickable mock-ups, an hour with three or four actual users watching them attempt real tasks ("is anything blocking your team's release right now?"), and a decision at the session from what is observed.
- D) Suggest the team defer the dashboard until consensus forms naturally.

**Correct answer: C**

**Explanation:** C converts an argument about presumed user preference into a cheap, evidence-based test with real users doing real tasks. Option A resolves socially, not on the merits; B avoids the underlying decision and doubles maintenance surface; D hopes the same failed inputs will somehow resolve differently. This tests replacing unresolved debate about user preference with a cheap, direct test of actual user behaviour.

**Question 9 (moderate) — Mid-incident, out of your lane**

During an active incident with an assigned lead and roster (which does not include the candidate), monitoring evidence suggests the degradation timing matches a known platform-level autoscaling change rather than the database-index theory the responders are pursuing. Ask for the most effective response.

- A) Stay out of it — the incident has a lead, a roster, and a working theory, and interruptions cost focus.
- B) Post your observation in the incident channel, concisely: the timing correlation, the graph pattern, the autoscaling change reference — offered as a hypothesis for the lead to triage, and make yourself available if they want to pull the thread.
- C) Directly message individual responders that their database theory is wrong.
- D) Start investigating the autoscaling theory yourself and post results when you have proof.

**Correct answer: B**

**Explanation:** B contributes evidence through the incident's own channel of record, framed as a hypothesis for the lead to triage rather than a verdict. Option A withholds relevant evidence; C fragments the response into private side-channels; D delays sharing information others could check quickly. This tests contributing evidence to an incident through its structure, promptly and appropriately labelled, without either withholding it or hijacking the response.

**Question 10 (hard) — What the metrics say versus what gets reported**

A manager's draft quarterly slide claims "99% success," which includes automatic retries; first-attempt success is actually 91%, and retry storms are degrading throughput — a problem the candidate is trying to get prioritised. Ask for the most effective response.

- A) Let the slide stand — 99% is technically true, and it reflects well on the team's work.
- B) Before the review, show your manager both numbers and the retry-storm data; propose the slide present first-attempt success alongside effective success, framed as "reliability is high, but retry load is the next problem worth investment" — which is both more honest and a stronger case for the prioritisation you need.
- C) Say nothing beforehand, but correct the figure from the floor if the review discusses it.
- D) Raise the discrepancy with the review board directly, bypassing your manager.

**Correct answer: B**

**Explanation:** B recognises the inflated figure actually undermines the candidate's own priority (a board hearing "99%" won't fund retry-storm work), and fixes it privately, early, and constructively into a stronger narrative. Option A trades honest evidence for comfort; C ambushes the manager publicly; D bypasses before the direct route is tried. This tests recognising when an inflated metric undermines the candidate's own case, and correcting it privately and early rather than letting it stand or ambushing it publicly.

**Question 11 (hard) — The convenient exception becoming precedent**

A temporary manual deployment workaround, agreed a month ago for a since-fixed bug, is still in use two weeks after the fix — and a second team has copied it — causing configuration drift. Ask for the most effective response.

- A) Shut off the manual route immediately without discussion — the exception has expired.
- B) Say nothing — the teams are delivering, and the drift is manageable so far.
- C) Contact both teams: the exception existed for a bug now fixed, the drift it causes is already measurable, and the route closes on a stated date days away — paired with asking what makes the manual route faster, because that speed gap is pipeline feedback worth fixing so the sanctioned route becomes the attractive one.
- D) Report both teams' non-compliance to their delivery managers.

**Correct answer: C**

**Explanation:** C closes the exception with a reason and a firm near date, while treating the workaround's popularity as genuine feedback about the sanctioned route's usability. Option A is needlessly abrupt; B lets drift compound; D escalates before a conversation is tried, and ignores the candidate's own role in letting the exception outlive its reason. This tests closing an expired exception with a stated reason and date while treating its popularity as feedback to act on, rather than ignoring, abruptly shutting down, or escalating prematurely.

**Question 12 (hard) — Least effective: the post-incident actions list**

Of five agreed post-incident actions, the candidate's own (an alert) is complete; the application team has done one of two; the database team's action is not started, and a recent near-miss would have been caught by it; a runbook update is unassigned. Ask which response to bring to the follow-up meeting would be LEAST effective.

- A) Bring the status picture to the follow-up meeting, including the near-miss as evidence of live risk, and propose the unassigned runbook action get an owner and date.
- B) Since your own action is complete, report your part done at the meeting and leave the other teams' actions to their own management chains.
- C) Before the meeting, message the database team's lead: flag the near-miss connection to their unstarted action and ask whether help, context, or re-prioritisation would move it.
- D) Update the runbook yourself where you have the knowledge, noting the sections needing application-team input, and bring the remainder to the meeting.

**Correct answer: B**

**Explanation:** B treats incident follow-up as private chores rather than a shared defence against recurrence, despite the near-miss showing recurrence is live. Options A, C and D all proportionately extend ownership beyond the candidate's own single action toward the system-level outcome. This tests recognising that noticing a live, unmanaged risk creates a duty to make the system-level status visible, not merely to report one's own completed task.

### Administration tips

- Score for whether the candidate identifies whose decision a scenario actually belongs to before acting (risk acceptance, priority conflicts, contract questions) and routes accordingly.
- Note whether the candidate's response would still look sound a month later — the strongest responses avoid trading a short-term convenience for precedent, drift, or lost trust.
- Watch for quiet, unannounced fixes on shared infrastructure or environments, which score poorly even when technically sound.
- Score for whether a candidate holds a control while genuinely helping the person affected by it, rather than treating the control as either self-justifying or optional.
- Note whether the candidate remembers that developers, testers, and delivery teams are the toolchain's users, and optimises for them rather than for the maintainer's convenience.

### Common pitfalls to watch for when scoring

- Crediting a candidate who decides a question they do not own — accepting risk on someone else's behalf, adjudicating another team's priorities, declaring a contract's meaning unilaterally.
- Missing a quiet, unannounced fix on shared ground (a silent revert, covert environment use, an unadvertised workaround).
- Rewarding compliance theatre — a logged-but-unauthorised bypass, post-hoc manual checks, "my part is done" reporting while a system-level risk continues.
- Missing escalation pitched at the wrong time or altitude — too early, too late, too high, or framed as complaint rather than evidence.
- Accepting a response that optimises the toolchain for its own maintainer's convenience rather than its users.

## Conclusion

This guide has worked through pipeline and environment audits against intended state, dependency-chain propagation, deployment-strategy matching by constraint, and critical-path computation; error-budget and availability arithmetic, weighted averages across unequal volumes, and compound-versus-linear growth forecasting; exemption provisos, modal-verb scope, procedural branch tracing, and evidence-weighted research conclusions; and the situational judgement calls that define mid-level operational careers — holding a security gate while helping people through it, owning the blast radius of a shared change, making risk legible to seniority, closing a workaround with a date and a lesson, and contributing evidence to an incident without hijacking its structure.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around ownership boundaries and evidence quality. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
