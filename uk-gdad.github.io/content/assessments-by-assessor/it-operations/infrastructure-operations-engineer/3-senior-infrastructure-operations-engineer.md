# Senior Infrastructure Operations Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior infrastructure operations engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they draw on the artefacts a senior infrastructure operations engineer genuinely handles — diagnostic logs and performance statistics, change impact assessments, problem trend analyses, test conditions and results, capacity forecasts, and the documentation through which projects are supported and colleagues mentored — and the judgements genuinely made, such as prioritising competing incidents by service impact, determining when a pattern of failures warrants a problem investigation, assessing the impact of a proposed change, and deciding when to consult a specialist rather than persist alone.

As second- or third-line support, this role is the level at which escalations stop: incidents that defeated first-line diagnosis arrive here, and reasoning quality determines whether they are resolved or bounce onward. The role provides specialist technical support to projects, ensuring delivery of non-functional requirements — which demands numerical fluency with performance, capacity, and availability figures. It also coaches and mentors junior team members — which demands the ability to articulate reasoning, not merely perform it, and to model professional judgement worth imitating.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. For a senior infrastructure operations engineer, the scenarios are drawn from second- and third-line work: interpreting diagnostic evidence across multiple systems, reasoning about change impact through dependency chains, spotting the inconsistency in a set of operational records, and sequencing work under interacting constraints.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many platforms adapt difficulty to rolling performance, and employers typically receive speed and accuracy separately.

At senior level, cognitive assessment carries a particular weight: it measures the very capability that distinguishes second- and third-line support from first-line execution. First-line work largely follows documented paths; this role's work begins where the documented path ends — the incident whose symptoms match no known error, the change whose impact assessment requires reasoning about undocumented interactions, the performance degradation whose cause hides across three systems' logs. Because the role also coaches junior engineers, the explicit techniques rehearsed here double as teaching material: the difference between a senior who diagnoses well and one who also teaches diagnosis well is the ability to name the method being used.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill — initiating and monitoring actions to investigate patterns and trends to resolve problems is pattern recognition sustained over weeks of data — and to the **Technical specialism** skill of using logical schemata to investigate problems and collect performance statistics.
- **Logical deduction** maps to the **Incident management** skill: diagnosing incidents, investigating their causes and finding resolutions is reasoning from symptoms through system structure to cause. It also underpins **Change management**: analysing and assessing the impact of change is deduction about consequences before they happen.
- **Error checking** maps to the **Asset and configuration management** skill (maintaining secure configuration and accurate information, verifying the location and state of assets) and the **Testing** skill — reviewing requirements and specifications and defining test conditions requires spotting gaps and contradictions in what is written.
- **Prioritisation** maps to the **Incident management** duty to prioritise incidents by impact and urgency, the **Availability and capacity management** responsibility for keeping service components against KPIs, and the **Ownership and topic** skill of owning issues until properly resolved or handed over.
- **Applied problem solving** maps to the **Technical specialism** skills of optimising performance and forecasting resource needs, the **Service focus** skill of establishing coherent frameworks that work, and the duty to provide specialist technical support to projects, ensuring delivery of non-functional requirements.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in performance statistics**

Weekly average response times (milliseconds) for four services over five weeks:

- Service W: 120, 118, 122, 119, 121
- Service X: 95, 110, 128, 149, 173
- Service Y: 210, 208, 212, 209, 211
- Service Z: 60, 58, 145, 59, 61

Which service shows a compounding degradation trend, as opposed to stability or a one-off spike?

- A) Service W
- B) Service X
- C) Service Y
- D) Service Z

**Correct answer: B**

**Explanation:** Classify each series. W and Y are stable — small oscillation around a flat level (Y's level is higher, but high-and-stable is a capacity conversation, not a degradation trend). Z shows a single anomalous week bracketed by normal readings — a one-off spike worth a log check, but the series recovered. X rises every week, and the increments themselves grow: +15, +18, +21, +24 — an accelerating, compounding pattern typical of a resource leak, an unbounded queue, or data growth degrading an unindexed query. This tests distinguishing trend from spike from level, the first analytical act in performance investigation: a strong candidate's answer computes or eyeballs the second difference (change of the change), which separates linear drift from compounding degradation.

**Question 2 (easy) — Deduction from an SLA rule**

An incident policy states: "Priority 1 incidents must be worked continuously until service is restored, and a P1 may only be downgraded if user impact has demonstrably ceased." A shift takeover finds incident INC-441, opened as P1 six hours ago, now recorded as P2. Which conclusion must be true?

- A) User impact demonstrably ceased at some point.
- B) The downgrade breached policy.
- C) If the downgrade complied with policy, user impact had demonstrably ceased at the time of downgrade.
- D) Service has been restored.

**Correct answer: C**

**Explanation:** The policy makes demonstrable cessation of user impact a necessary condition for a compliant downgrade. From the record alone whether the downgrade was compliant cannot be told — so A (assumes compliance) and B (assumes breach) each overreach. D confuses restoration with downgrade — the policy distinguishes them, and neither implies the other has occurred. C is the conditional the policy guarantees. This tests shift-takeover reasoning: an inherited record tells what was done, not whether it was justified, and a strong candidate's answer verifies the justification — checking whether impact evidence was recorded at downgrade — before either trusting or challenging it.

**Question 3 (easy) — Error checking a test specification**

Test conditions drafted by a junior engineer for a failover test are under review. The requirement states: "In the event of primary database failure, the standby must assume service within 60 seconds, with no committed transactions lost." The draft test conditions are:

1. Simulate primary failure by stopping the database process.
2. Measure time until standby accepts connections.
3. Verify standby accepts new transactions.
4. Record the result as PASS if failover completes within 60 seconds.

Which aspect of the requirement is not covered by any test condition?

- A) The 60-second failover time.
- B) The standby assuming service.
- C) The preservation of committed transactions.
- D) The simulation of primary failure.

**Correct answer: C**

**Explanation:** Map each requirement clause to a condition. Failure event: condition 1. Standby assumes service: conditions 2 and 3. Within 60 seconds: conditions 2 and 4. "No committed transactions lost": nothing — no condition commits transactions before the failure and verifies their presence on the standby afterwards. That omitted clause is the requirement's hardest and most important half: a failover that loses committed data "passes" every drafted condition while failing the business catastrophically. This tests reviewing requirements and specifications and defining test conditions with clause-by-clause traceability — a strong candidate's answer also identifies this as a coaching moment, since testing what is easy to measure is a universal early-career pattern.

**Question 4 (easy) — Prioritising an escalation queue**

Four items sit in a second-line queue at 09:00:

1. P2 incident: intranet search degraded for all staff; workaround (direct links) published; first-line monitoring it.
2. P1 incident escalated overnight: case management system down for a 200-person operational team; no workaround; the candidate is the named next responder.
3. Change impact assessment requested by a project, needed for Thursday's CAB (it is Tuesday).
4. A junior engineer is stuck mid-diagnosis on a P3 and has asked for fifteen minutes of coaching.

What should be done first?

- A) Item 3 — governance deadlines outrank incident noise.
- B) Item 1 — it affects all staff, the widest impact.
- C) Item 2 — an unworkarounded P1 with the candidate as named responder takes absolute precedence.
- D) Item 4 — developing people is a senior engineer's first duty.

**Correct answer: C**

**Explanation:** Impact-weighted urgency, applied honestly. Item 2 is a P1 — an operational team fully stopped, no workaround, explicit ownership: highest severity, highest urgency. Item 1 is wider in headcount but shallower in impact: search is degraded, a workaround exists, and first-line has it contained — breadth does not outrank depth times severity. Item 3 has a real deadline two days away. Item 4 matters, but a P3 diagnosis can pause. Option D romanticises development at the cost of a stopped operational team; option B mistakes breadth for severity; option A inverts incident and governance priorities. This tests weighing severity, workaround existence, ownership, and deferability together, since the strongest distractors each inflate a single dimension.

**Question 5 (moderate) — Deduction across a dependency chain under change**

The payroll service depends on database cluster DB-1 and file store FS-2. The HR portal depends on DB-1 only. The expenses service depends on FS-2 and the authentication service AUTH. A proposed change will take FS-2 offline for two hours on Saturday. AUTH has its own approved change the same Saturday, expected to cause three ten-minute authentication outages. Which services face disruption on Saturday, and from which sources?

- A) Payroll (FS-2), HR portal (DB-1), expenses (FS-2 and AUTH).
- B) Payroll (FS-2), expenses (FS-2 and AUTH); HR portal unaffected.
- C) Expenses only (AUTH); payroll and HR portal unaffected.
- D) All services, because changes propagate everywhere.

**Correct answer: B**

**Explanation:** Trace each service's dependency set against the changing components. Payroll depends on DB-1 and FS-2: FS-2 goes offline, so payroll is disrupted (DB-1 is untouched). HR portal depends only on DB-1: no DB-1 change is planned, so it is unaffected — option A invents a disruption. Expenses depends on FS-2 and AUTH: it inherits both the FS-2 outage and the authentication drops — a compounding of two approved changes that each looked contained alone. Option C misses the FS-2 dependency of both payroll and expenses; option D abandons analysis for superstition. This tests analysing and assessing the impact of change by building the union of impacts across concurrent changes rather than reviewing each in isolation — the professionally interesting finding is that expenses is hit twice in one day, which no single change record shows.

**Question 6 (moderate) — Pattern and trend investigation across incident data**

Three months of incidents for the document service, grouped:

- Logins failing: 9 incidents — scattered randomly across days and hours.
- Slow saves: 12 incidents — all between 13:45 and 14:15 on weekdays.
- Search timeouts: 3 incidents — all within one week in month two, none since.

Which grouping most warrants raising a problem record with a scheduled-cause hypothesis, and why?

- A) Logins — highest total after search, spread widely, so systemic.
- B) Slow saves — a tight, recurring time-of-day clustering on weekdays points to a scheduled or load-pattern cause worth investigating.
- C) Search timeouts — any cluster within one week is a trend.
- D) None — twelve incidents in three months is noise.

**Correct answer: B**

**Explanation:** Trend investigation is about structure, not volume. The slow-saves cluster has the signature of a discoverable cause: every occurrence inside the same half-hour weekday window — consistent with a scheduled job or a load pattern. That structure converts investigation from an open search into a short checklist. Logins' random scatter offers no such handle. Search timeouts are a resolved historical burst, not a live trend fitting a scheduled-cause hypothesis. Option D confuses low absolute counts with absence of signal. This tests the **Problem management** skill of initiating and monitoring actions to investigate patterns and trends, with the senior-level refinement that the shape of a pattern indicates which investigative tool to reach for.

**Question 7 (moderate) — Error checking a capacity forecast**

A junior engineer's capacity report states: "The archive volume holds 6.0 TB of 10 TB. Growth last quarter was 0.9 TB. At this rate we will reach the 80% action threshold (8 TB) in 9 months, so no action is needed this financial year." Assuming the data is correct and growth continues linearly, what is wrong with the conclusion?

- A) Nothing — 9 months is beyond reasonable planning horizons.
- B) The arithmetic is wrong: at 0.9 TB per quarter, the 2 TB of headroom to the threshold is consumed in about 6.7 months, not 9.
- C) The threshold should be 90%, not 80%.
- D) Growth figures should be measured monthly, not quarterly.

**Correct answer: B**

**Explanation:** Recompute rather than accept. Headroom to threshold: 8.0 − 6.0 = 2.0 TB. Rate: 0.9 TB per quarter = 0.3 TB per month. Time to threshold: 2.0 ÷ 0.3 ≈ 6.7 months, not 9. The conclusion then compounds the error: 6.7 months may well fall inside the financial year the report waves it beyond. Options C and D quibble with premises the question fixes; option A endorses an arithmetic mistake. This tests two senior habits: verifying derived figures before they enter decisions, and watching units across rate calculations — a strong candidate's answer identifies this as both a forecasting-accuracy issue and a mentoring moment, checking a junior's forecast before it is acted on.

**Question 8 (moderate) — Applied problem solving on performance optimisation**

A nightly reporting job has slowed from 2 to 5 hours over six months. These facts are established: (i) the job processes a table that has grown from 20M to 50M rows; (ii) CPU, memory and disk metrics on the database server remain moderate throughout the run; (iii) the job's queries perform full table scans; (iv) other jobs on the same server have not slowed. What is the most promising optimisation hypothesis?

- A) Add CPU and memory to the database server.
- B) The slowdown tracks table growth under full-scan access — indexing or partitioning to eliminate full scans is the most promising line, consistent with all four facts.
- C) Move the job to a faster server.
- D) Run the job twice nightly to halve its work.

**Correct answer: B**

**Explanation:** Fit hypotheses to all the evidence. The job's runtime grew roughly in proportion to table growth (2.5× rows, 2.5× duration) — fact (i) supplies the correlate. Full table scans (iii) supply the mechanism, since scan cost scales with table size. Facts (ii) and (iv) discriminate against the rival hypotheses: moderate server metrics and unaffected sibling jobs mean the server is not starved, so adding resources or migrating treats a bottleneck that does not exist. Option D misunderstands the work entirely. This tests the reasoning template — correlate, mechanism, discriminating evidence, remedy aimed at the mechanism — that is the core of optimising performance via logical schemata, and one worth teaching juniors.

**Question 9 (moderate) — Prioritisation within a project commitment**

As the operations specialist assigned to a project going live in three weeks, four things are requested by Friday: (1) sign-off on the backup design — already reviewed and sound; (2) a load test of the new service at twice forecast peak — not yet scheduled, needs a test environment slot with two days' notice; (3) agreement to skip the failover test "since the platform is proven" — this specific platform configuration has not been seen to fail over; (4) a review of firewall rules — 30 minutes' work. Which item most needs a challenge rather than compliance, and which needs scheduling action today?

- A) Challenge item 2; schedule item 3.
- B) Challenge item 3; schedule item 2.
- C) Challenge item 1; schedule item 4.
- D) Challenge item 4; schedule item 1.

**Correct answer: B**

**Explanation:** Separate the four asks by what they truly request. Items 1 and 4 are legitimate work within the role's gift: sign the reviewed backup design, do the half-hour firewall review. Item 2 is legitimate but logistics-bound: a two-day-notice environment slot against a Friday deadline means booking today. Item 3 is the challenge: it asks for verification of a non-functional requirement to be waived on the strength of "proven platform" when this specific configuration is unverified. This tests providing specialist support to projects and ensuring delivery of non-functional requirements — distinguishing requests to do work from requests to waive assurance, and refusing the latter collegially with a constructive alternative (a minimally sized failover test inside the three weeks).

**Question 10 (hard) — Multi-system timeline deduction**

Users of the claims service report intermittent 30-second freezes since Tuesday. Evidence assembled: (i) Monday 19:00 — storage firmware updated on the array serving both the claims database and the claims file share; (ii) Tuesday 08:00 onwards — application log shows bursts of "database query timeout" during each freeze; (iii) database server metrics normal except intermittent disk-write latency spikes aligning with each freeze; (iv) the HR system, on the same array but a different database server, logs matching write-latency spikes at the same timestamps; (v) network monitoring between users and the application is clean. Where does the evidence most strongly localise the fault?

- A) The claims application code.
- B) The claims database server's hardware.
- C) The storage array layer, implicating Monday's firmware update as the prime suspect change.
- D) The network path between users and the application.

**Correct answer: C**

**Explanation:** Follow the symptom down the stack and sideways across systems. The freezes correlate with database query timeouts (ii), which correlate with disk-write latency spikes (iii) — so the proximate bottleneck is beneath the database, at storage. The decisive fact is (iv): an unrelated system, sharing only the storage array, exhibits identical latency spikes at identical timestamps. Two independent database servers do not develop synchronised hardware faults; an application defect in claims cannot reach into HR's I/O metrics; clean user-side network data eliminates D. The shared component is the array, and the timeline supplies the suspect change: firmware updated Monday evening, symptoms from Tuesday morning. This tests third-line reasoning in full: correlation across layers, triangulation across systems sharing a component, and last-known-good timeline analysis converging on one testable conclusion, stated at correct strength ("prime suspect", pending confirmation).

**Question 11 (hard) — Constraint scheduling for a maintenance programme**

Four overnight activities must be scheduled in one working week (Monday to Friday nights), at most one activity per night: patch the database cluster (D), patch the application servers (A), replace a storage controller (S), and run the disaster-recovery rehearsal (R). Constraints: (i) R must take place after both D and A, because the rehearsal must exercise fully patched systems; (ii) S must not be on the night immediately before R, because the array needs a quiet running-in period before a rehearsal stresses it; (iii) D and A must be separated by at least one completely activity-free night, to give each patch a stability window; (iv) S is fixed on Wednesday night due to the supplier engineer's availability. Which schedule satisfies all four constraints?

- A) D Monday, A Tuesday, S Wednesday, R Thursday
- B) D Tuesday, A Thursday, S Wednesday, R Friday
- C) D Monday, A Thursday, S Wednesday, R Friday
- D) A Monday, D Tuesday, S Wednesday, R Thursday

**Correct answer: C**

**Explanation:** Check each option against each constraint mechanically. Option A: D Monday and A Tuesday are consecutive with no free night between — constraint (iii) fails; R Thursday also sits immediately after S Wednesday — constraint (ii) fails. Option B: the only night between D Tuesday and A Thursday is Wednesday, occupied by S, so no completely activity-free night separates the patches — constraint (iii) fails. Option D: A Monday and D Tuesday are consecutive — constraint (iii) fails — and R Thursday again follows S Wednesday directly — constraint (ii) fails. Option C passes everything: S is Wednesday (iv); D Monday and A Thursday are separated by the completely free Tuesday (iii); R Friday follows both D and A (i); the night before R (Thursday) hosts A, not S (ii). This tests verifying candidates against constraints in a grid rather than holistically, and reading constraints exactly — (iii) requires an activity-free separating night, which a storage-occupied Wednesday does not provide.

**Question 12 (hard) — Diagnosis with an inconvenient fact**

An overnight batch intermittently fails with corrupted output — roughly one night in five, no weekday pattern. The leading hypothesis, shared with a team lead, is a race condition introduced by last month's parallelisation change. A junior engineer then finds a counterexample in the archive: an identical corruption occurred four months ago — two months before the parallelisation change. What is the strongest reasoning response?

- A) Dismiss the old case — one ancient occurrence proves nothing, and the hypothesis explains the recent cluster.
- B) Abandon the race-condition hypothesis entirely — it is refuted.
- C) Treat the old case as evidence demanding hypothesis revision: either the cause predates parallelisation, or there are two causes, or parallelisation amplified a pre-existing fault — and design checks to discriminate (compare failure rates before and after the change; compare the old corruption's signature byte-for-byte with recent cases).
- D) Ask the junior engineer to stop searching the archive, as it complicates the investigation.

**Correct answer: C**

**Explanation:** The counterexample does real logical work, and the strongest response neither ignores nor overreacts to it. A single pre-change corruption does not refute the race-condition hypothesis (option B overcorrects): the recent frequency may still be driven by parallelisation even if a rarer fault existed before, and amplification of a pre-existing fault is a live possibility. But dismissing it (option A) commits the confirmation-bias error the scenario is built to detect. Option C enumerates the hypothesis space the new fact opens, then designs discriminating checks. Option D punishes a junior engineer for excellent investigative work, teaching the team that evidence contradicting the senior's theory is unwelcome — the opposite of the mentoring this role requires. This tests whether effectively consulting evidence — like effectively consulting specialists — means letting it change hypotheses in structured ways, since resolutions aimed at wrong hypotheses fail expensively.

### Administration tips

- **Watch for whether a candidate reads the second difference of a series** (the change of the change) rather than the raw level, when classifying a trend.
- **Score for whether a candidate frames a deduction as a conditional** ("if compliant, then X") rather than a categorical leap.
- **Note whether a candidate checks the omitted, hardest clause of a specification** rather than admiring the clauses that were covered.
- **Keep timing consistent** across candidates for this level.
- **Use the inconvenient-fact item (Question 12) to observe whether a candidate revises a hypothesis in structured proportion to new evidence**, rather than dismissing it or overcorrecting.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that anchors on the first hypothesis** and explains away the one fact that does not fit.
- **Crediting an answer that mistakes breadth for severity** in a prioritisation item.
- **Accepting a resource-stereotype fix** ("add CPU", "move to a faster server") where the evidence shows no saturation.
- **Missing when a candidate lets a senior voice in the scenario** ("the platform is proven") outrank the evidence.
- **Rushing a multi-constraint scheduling item** — these reward systematic checking, and a candidate who reasons holistically rather than against a grid should not be credited for a lucky right answer.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with quantitative operational data: percentages, ratios, weighted averages, rates, growth projections, and figures read from tables and charts. At senior level the emphasis shifts from computing correctly — assumed — to choosing the right computation, challenging the right baseline, and interpreting results in service terms.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions. Data is presented as tables, dashboards, or short scenarios; an on-screen calculator is normally available. Scoring compares accuracy and speed against a norm group, and senior-level variants weight interpretation questions — "what does this figure mean and is the stated conclusion sound?" — more heavily than pure calculation.

Numeric fluency matters so much at this level because the role sits where numbers become decisions. Optimising performance and forecasting resource needs is arithmetic on growth rates, and a unit error in a forecast becomes a procurement crisis two quarters later. Performance statistics and reports are acted on by others, so weighted averages and rates in them must be right. Supporting projects on non-functional requirements means availability targets, throughput commitments, and recovery-time objectives are all numbers with unforgiving arithmetic underneath.

### How this assessment maps to the role

- **Rates, baselines and percentage change** map to the **Problem management** skill: investigating patterns and trends honestly requires computing rates against the correct denominators, and distinguishing volume effects from genuine degradation.
- **Weighted averages and consolidation** map to the **Technical specialism** duty to collect performance statistics and create reports: consolidating figures across services, teams, or time periods without distortion is weighted-average discipline.
- **Growth projection and headroom arithmetic** map to the **Availability and capacity management** skill and the technical specialism of forecasting resource needs: time-to-threshold calculations, linear versus compound growth, and procurement lead-time margins.
- **Threshold and target arithmetic** map to the duty to deliver against KPIs and to support projects' non-functional requirements: availability percentages, downtime budgets, and SLA boundary conditions.
- **Impact quantification** maps to the **Change management** skill (analysing and assessing the impact of change often reduces to load and capacity arithmetic) and **Incident management** prioritisation, where user-impact figures rank the queue.
- **Test result analysis** maps to the **Testing** skill: analysing and reporting test activities and results means reading pass rates, failure distributions, and performance test outputs numerically.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Downtime budget from an availability target**

A supported service has a 99.9% availability target measured over a 30-day month (43,200 minutes). What is the maximum downtime per month consistent with the target?

- A) 4.32 minutes
- B) 43.2 minutes
- C) 72 minutes
- D) 432 minutes

**Correct answer: B**

**Explanation:** Permitted downtime = 0.1% of the period. 0.001 × 43,200 = 43.2 minutes. Option A is the slip for 0.01%, option D for 1%. This tests fluency with the availability-to-downtime conversion, and a strong candidate's answer notes the pattern worth holding as furniture: each added "nine" divides the budget by ten — 99% of a month is about 7.2 hours, 99.9% about 43 minutes, 99.99% about 4.3 minutes.

**Question 2 (easy) — CPU headroom percentage**

A virtualisation host has 64 vCPU capacity, of which 48 vCPUs are currently allocated. What percentage of capacity remains unallocated?

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Unallocated = 64 − 48 = 16 vCPUs; 16 ÷ 64 = 25%. Option D is the wrong-denominator trap: 16 ÷ 48 = 33% expresses headroom as a percentage of the allocated amount, not of capacity — a real ambiguity in capacity reports. This tests basic percentage fluency and whether a candidate states denominators explicitly, since a report that silently mixes "percentage of capacity" with "percentage of allocation" misleads everyone downstream.

**Question 3 (easy) — Mean time to resolve from a weekly table**

A second-line queue resolved incidents this week with these times: 2 h, 3 h, 5 h, 2 h, 8 h, 4 h. What is the mean resolution time?

- A) 3.5 hours
- B) 4.0 hours
- C) 4.5 hours
- D) 5.0 hours

**Correct answer: B**

**Explanation:** Mean = total ÷ count = 24 ÷ 6 = 4.0 hours. This tests basic mean calculation, and a strong candidate's answer notes the distribution behind the mean: four of six incidents resolved at or under 4 hours; the 8-hour case is the outlier pulling the average up — a senior engineer asked "why 4 hours?" answers better by naming the outlier than by defending the average.

**Question 4 (easy) — Failure rate from test results**

A regression test suite ran 250 test cases; 10 failed. What is the pass rate?

- A) 90%
- B) 94%
- C) 96%
- D) 98%

**Correct answer: C**

**Explanation:** Failure rate = 10 ÷ 250 = 4%; pass rate = 96%. Computing the small side and subtracting is quicker and less error-prone. This tests basic rate fluency, and a strong candidate's answer notes that rates never stand alone — 10 failures clustered in one module tell a different story from 10 scattered failures, so the rate should be paired with its distribution when reported.

**Question 5 (moderate) — Time-to-threshold with procurement lead time**

A database volume holds 7.2 TB of its 12 TB capacity. Growth is steady at 0.4 TB per month. The action threshold is 85% (10.2 TB), and expanding the volume requires an 8-week procurement and change lead time. Approximately how long is there before the expansion must be initiated to avoid crossing the threshold?

- A) 7.5 months — the time until the threshold is crossed.
- B) About 5.5 months — time to threshold minus the 2-month lead time.
- C) 12 months — the time until the volume is completely full.
- D) 3 months — half the time to threshold, as a safety margin.

**Correct answer: B**

**Explanation:** Headroom to threshold = 10.2 − 7.2 = 3.0 TB; time to threshold = 3.0 ÷ 0.4 = 7.5 months; subtracting the ~2-month lead time gives 5.5 months as the latest initiation point. Option A treated as a decision date guarantees a breach. Option C projects to exhaustion, which the threshold pre-empts. This tests the senior-level content of subtracting the response time from the projection — decision dates, not event dates, are what capacity reports should surface.

**Question 6 (moderate) — Weighted availability across services**

A consolidated availability figure is needed for three services over the same month, weighted by user base:

| Service | Users | Availability |
|---|---|---|
| Casework | 6,000 | 99.0% |
| Reporting | 3,000 | 99.8% |
| Archive | 1,000 | 97.0% |

What is the user-weighted average availability?

- A) 98.6%
- B) 99.0%
- C) 98.4%
- D) 99.3%

**Correct answer: B**

**Explanation:** Weighted sum: (6,000×99.0) + (3,000×99.8) + (1,000×97.0) = 990,400; divided by 10,000 users = 99.04% ≈ 99.0%. Option A, 98.6%, is the unweighted mean, which treats Archive's poor month as if it affected a third of users, when Archive serves only 10%. This tests weighting KPIs by the population each figure serves — an unweighted mean across unequal services is among the most common distortions in operational reporting, and a strong candidate's answer offers the fast plausibility check: 90% of users sit on services at 99.0% or better, so the estate figure must land close to 99.

**Question 7 (moderate) — Percentage change with the right baseline**

After adding an index, a nightly job's runtime fell from 5.0 hours to 3.5 hours. A colleague drafts the report: "Runtime improved by 43%." What is the accurate figure, and what did the colleague do?

- A) 30% improvement; the colleague divided the change by the new runtime instead of the original.
- B) 43% improvement; the colleague is correct.
- C) 30% improvement; the colleague measured against the wrong month.
- D) 35% improvement; the colleague rounded incorrectly.

**Correct answer: A**

**Explanation:** Improvement = (5.0 − 3.5) ÷ 5.0 = 30%. The colleague computed 1.5 ÷ 3.5 ≈ 43%, dividing by the new value rather than the original baseline. This tests correcting a percentage-change error before a report ships, and a strong candidate's answer notes why the reporting rule matters twice over — for accuracy, and because inflated improvement claims eventually deflate credibility when someone else recomputes them.

**Question 8 (moderate) — Change impact load arithmetic**

Two application servers are being consolidated onto one host during a hardware refresh. Server 1 averages 30% CPU on 8 cores; Server 2 averages 45% CPU on 8 cores. The target host has 16 cores. Assuming workloads simply add and cores are equivalent, what average CPU utilisation should the consolidated host show, and does it leave the 40% headroom the standard requires for peak absorption?

- A) 75% utilisation; no — headroom is only 25%.
- B) 37.5% utilisation; yes — headroom is 62.5%.
- C) 37.5% utilisation; no — the standard requires utilisation below 40%.
- D) 60% utilisation; yes — headroom is 40%.

**Correct answer: B**

**Explanation:** Convert to absolute core-load before combining: Server 1 = 2.4 cores; Server 2 = 3.6 cores; combined = 6.0 cores on a 16-core host = 37.5% utilisation, leaving 62.5% headroom, comfortably above the required 40%. Option A adds the raw percentages — the classic base error. Option C misreads the standard, which requires 40% headroom (utilisation up to 60%), not utilisation under 40%. This tests returning to absolute units (cores, GB, requests/second) before combining, then converting back to percentages — the pattern behind every consolidation, migration, and failover-capacity assessment.

**Question 9 (moderate) — Incident trend with a changing denominator**

Platform team data:

| Quarter | P1+P2 incidents | Changes implemented |
|---|---|---|
| Q1 | 12 | 300 |
| Q2 | 15 | 500 |
| Q3 | 18 | 750 |

The head of delivery says: "Serious incidents are up 50% since Q1 — our change process is deteriorating." What do the change-related rates show?

- A) The head is right: incidents per quarter rose from 12 to 18.
- B) Incidents per change fell from 4.0% in Q1 to 3.0% in Q2 to 2.4% in Q3 — per change implemented, the process is improving, and the absolute rise reflects the near-tripled change volume.
- C) The rates are flat, so nothing has changed.
- D) The data cannot bear on the question.

**Correct answer: B**

**Explanation:** Q1: 12÷300 = 4.0%. Q2: 15÷500 = 3.0%. Q3: 18÷750 = 2.4%. The per-change rate has fallen 40% while change volume rose 2.5×. This tests the double duty of a strong report: getting the rate right, and communicating both numbers, since 18 serious incidents still consume more response capacity than 12 regardless of the rate — a strong candidate's answer states both "per-change risk is down 40%" and "absolute incident load is up 50% with volume", since rates answer "is it getting worse?" and counts answer "how much does it cost us?"

**Question 10 (hard) — Compound growth versus linear planning**

A log analytics platform ingests 2.0 TB per day, growing 8% per month compound as more services onboard. Storage procurement is planned annually. A colleague budgets next year's peak daily ingest as "2.0 TB plus 12 × 8% = 96%, so about 3.9 TB/day". What is the more accurate compound estimate of daily ingest after 12 months, and what is the planning consequence?

- A) About 3.9 TB/day; the linear estimate is fine.
- B) About 5.0 TB/day; compounding makes the true figure roughly 29% higher than the linear estimate, so the annual budget must use the compound figure.
- C) About 4.4 TB/day; the difference is negligible.
- D) About 6.2 TB/day; the platform will more than triple.

**Correct answer: B**

**Explanation:** 2.0 × 1.08¹² ≈ 2.0 × 2.518 ≈ 5.04 TB/day. The linear estimate of 3.92 TB/day understates by roughly 29%. This tests recognising the planning consequence: an annual budget built on the linear figure runs out of storage around month nine or ten, converting a spreadsheet error into an emergency procurement. A strong candidate's answer uses the rule of 72 as a fast sanity check: at 8% monthly, doubling time ≈ 9 months, so 12 months must exceed a doubling — anything under 4.0 TB/day is immediately suspect. This tests matching the growth model (compound) to the growth mechanism (onboarding-driven, proportional).

**Question 11 (hard) — Percentile versus mean in a performance commitment**

A project's non-functional requirement states: "95% of requests must complete within 500 ms." A load test returns: mean response 320 ms; median 260 ms; 95th percentile 640 ms; 99th percentile 1,900 ms; 10,000 requests sampled. The project lead says: "Mean 320 against a 500 target — comfortably passing." What is the correct verdict?

- A) Pass — the mean is well under 500 ms.
- B) Fail — the requirement is a 95th-percentile commitment, and the 95th percentile is 640 ms: the slowest 5% of the distribution breaches the 500 ms bound, which is exactly what the requirement constrains.
- C) Pass — only the 99th percentile exceeds the target, and 99% is stricter than 95%.
- D) Cannot tell — percentiles cannot be compared with millisecond targets.

**Correct answer: B**

**Explanation:** "95% of requests within 500 ms" means the 95th-percentile response time must be at most 500 ms. Measured 95th percentile is 640 ms, so at least 5% of requests exceed 640 ms — a clear fail. The mean is irrelevant to a percentile commitment: response-time distributions are right-skewed, and the mean sits comfortably below a bound the tail is busy violating. Option C misreads which percentile the requirement names. This tests ensuring delivery of non-functional requirements literally: NFRs are contracts about distributions, not averages, and a strong candidate's answer notes the tail's diagnostic value too — a 99th percentile of 1,900 ms suggests a distinct slow path worth investigating before go-live.

**Question 12 (hard) — Reconciling two measurements of the same thing**

Two monitoring sources report on the same service's month. Source 1 (synthetic checks every 5 minutes from the data centre): 99.95% availability — 2 failed checks out of 8,640. Source 2 (real-user monitoring): 3.2% of user sessions experienced at least one failed request; 41,000 sessions in the month. The service owner asks which figure is "right". What is the soundest response?

- A) Source 1 — synthetic checks are objective; the users are mistaken.
- B) Source 2 — real users are the only truth; the synthetic figure should be discarded.
- C) Both are right about different questions: synthetic checks measure whether the service answered a simple probe from one location; real-user monitoring measures whether complete user journeys succeeded. The gap itself is the finding — failures are user-visible but largely invisible to the probe — and it directs investigation toward what the probe does not exercise.
- D) Average them: about 98.6% of things are fine.

**Correct answer: C**

**Explanation:** Verify the figures are not contradictory first: 2 ÷ 8,640 ≈ 99.977% ≈ 99.95% as stated, and 3.2% of 41,000 sessions ≈ 1,312 sessions with at least one failed request. Both can easily be true: a session contains many requests across many functions, and a fault affecting one transaction type produces thousands of degraded sessions while a simple health-endpoint probe from inside the data centre sails through. This tests the senior conclusion that neither number is "wrong" — their divergence localises the fault space and motivates better instrumentation. Options A and B each anoint one instrument and discard information; option D averages incommensurable quantities into nonsense. A strong candidate's answer notes that reports should always say what each metric measures — availability of what, to whom, from where.

### Administration tips

- **Score for whether a candidate converts to absolute units before combining** percentages, averages, or rates on different bases.
- **Watch for whether a candidate subtracts a response or lead time from a projection** to produce a decision date rather than an event date.
- **Note whether a candidate distinguishes a percentile commitment from a mean** when assessing a non-functional requirement.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the reconciling-sources item (Question 12) to observe whether a candidate treats a discrepancy between two measurements as a finding**, rather than discarding or averaging one away.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that averages averages or adds percentages** across unequal groups or bases.
- **Missing when a candidate uses the wrong baseline** in a percentage-change claim.
- **Accepting a linear projection of proportional (compounding) growth.**
- **Crediting a mean offered as evidence against a percentile-based commitment.**
- **Missing when a candidate reports a count without a rate, or a rate without a count**, when both are needed for a sound conclusion.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material of the kinds this role handles: service standards, change and release policies, supplier contracts and bulletins, incident and problem reports, test specifications, and project documentation on non-functional requirements.

The typical format is an online, timed test of 15 to 25 minutes: short passages followed by questions. The core type is true/false/cannot-say. Senior-level variants lean harder on multi-rule passages (which rule governs this case?), documents in tension (which source prevails, and from when?), inference-strength questions (what does this evidence actually support?), and clear-writing judgement.

At this level, verbal precision is load-bearing in at least four directions. Compliance: the difference between "must", "should", and "may" in a change or release document is the difference between mandatory and discretionary action. Assurance: reviewing requirements and specifications is the discipline of noticing what a specification actually commits to, and what it quietly leaves out. Communication: investigation findings, impact assessments, and reports are read by change boards, project leads, and service owners who act on the exact wording — a hypothesis phrased as a finding propagates as fact. Mentoring: reviewing what junior engineers write, and editing it, teaches them what precision looks like.

The golden rule remains: answer from the passage alone.

### How this assessment maps to the role

- **Multi-rule comprehension** maps to the **Change management** skill (analysing change requests against policy, actioning them compliantly) and **Service management framework knowledge**: framework practice is precisely fluency with systems of defined terms and scoped rules.
- **Specification reading** maps to the **Testing** skill: reviewing requirements and specifications, defining test conditions, and identifying issues and risks in work all begin with noticing what a document guarantees, forbids, and omits.
- **Inference-strength discipline** maps to the **Problem management** and **Incident management** skills: initiating investigations from patterns, consulting specialists effectively, and diagnosing causes all require holding written evidence at its correct strength.
- **Reconciling sources** maps to the **Asset and configuration management** skill (records versus reality, schedules versus notices) and the duty to work to industry and organisational best practices, standards and service requirements — plural sources that do not always agree.
- **Clear-writing judgement** maps to the mentoring duty and the **User focus** skill: coaching junior engineers on their tickets and reports, and communicating with stakeholders, both demand judging writing by whether its intended reader can act on it correctly.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Reading a release policy rule**

Read this extract from the release policy:

"Releases to production must be deployed from the artefact repository, using artefacts built by the CI pipeline. Manual builds must not be deployed to production under any circumstances. Emergency fixes may bypass the full regression suite, provided the change is tagged for retrospective regression within five working days."

Statement: "An emergency fix may be deployed to production from a manual build, provided it is tagged for retrospective regression."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The emergency provision relaxes exactly one control — the full regression suite — under a stated condition. The manual-build prohibition is separate and absolute: "must not be deployed to production under any circumstances", which by construction admits no emergency exception. The statement stitches the emergency flexibility onto the wrong control. This tests keeping each exception attached to the rule that owns it — a favourite manoeuvre of both test writers and pressured colleagues who assume "it's an emergency" bends every rule at once.

**Question 2 (easy) — What the report does not establish**

Read this extract from an incident report:

"The outage began at 11:20. The network team identified a misconfigured switch port at 11:55 and corrected it. Service was restored at 12:05. The switch port had been modified during change CH-8812, implemented the previous evening."

Statement: "The misconfigured switch port caused the outage."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage never states a causal link between the port and the outage, and the timeline alone cannot supply one: restoration "followed" correction, yet other recovery actions may have been in flight, and correlation of repair with recovery is weaker evidence than it feels. This tests suspending an operationally plausible instinct — the port probably was the cause, and that instinct is exactly what this item measures the ability to withhold. A strong candidate's answer notes that incident reports should state causation only when established, and that reviewing junior engineers' reports means catching causal claims resting solely on sequence — post hoc reasoning is the most common flaw in incident documentation.

**Question 3 (easy) — Which rule governs the case**

Read this extract from the data retention standard:

"Application logs: retain 90 days. Security audit logs: retain 2 years. Where a log file contains both application events and security audit events, the longer retention period applies to the whole file. Debug logs enabled temporarily for investigation are exempt from minimum retention and should be deleted when the investigation closes."

A mixed log file contains application events and security audit events. How long must it be retained?

- A) 90 days
- B) 2 years
- C) Whichever period the service owner chooses
- D) It should be deleted when the current investigation closes

**Correct answer: B**

**Explanation:** The passage anticipates exactly this case and resolves it explicitly: mixed files take "the longer retention period" — 2 years. Option A applies the application-log rule while ignoring the mixed-file provision; option C invents a discretion the standard does not grant; option D misapplies the debug-log exemption to a file the passage does not describe as temporary debug logging. This tests case-to-rule matching: enumerating the rules, identifying which one's conditions the case satisfies, and checking for a specific provision before falling back to a general one.

**Question 4 (easy) — Meaning in context**

Read this line from a supplier bulletin:

"Firmware 4.7.2 addresses the intermittent controller resets reported in 4.7.0 and 4.7.1. Customers experiencing resets should upgrade at the earliest maintenance opportunity. Customers not experiencing resets may defer to their next scheduled maintenance cycle."

An array runs firmware 4.7.1 and has not experienced controller resets. According to the bulletin, what applies?

- A) Immediate upgrade is required.
- B) The upgrade may be deferred to the next scheduled maintenance cycle.
- C) The bulletin does not apply to this firmware version.
- D) The array should never be upgraded, since it has no symptoms.

**Correct answer: B**

**Explanation:** Two conditions route through the bulletin: version 4.7.1 is named as affected (eliminating C), and the "not experiencing resets" population's instruction is "may defer to their next scheduled maintenance cycle" — option B verbatim. Option A applies the symptomatic customers' urgency to an asymptomatic case. Option D converts permission-to-defer into permission-to-ignore. This tests reading a supplier bulletin as a triage document that sorts customers into populations and assigns each an urgency — locating the right population, and no further.

**Question 5 (moderate) — Combining contract and policy**

Read these two extracts.

From the supplier support contract: "Severity A faults (service down) will receive a supplier response within 1 hour and continuous effort until resolution. Severity B faults (service degraded) will receive a response within 4 business hours."

From internal policy: "Any supplier fault affecting a citizen-facing service must be logged with the supplier at Severity A where the contract permits, and escalated to the supplier account manager if the contractual response time is missed."

A citizen-facing service is degraded — running, but slow — due to a supplier hardware fault. Which statement is best supported?

- A) The fault must be logged at Severity A, because the service is citizen-facing.
- B) The internal policy's Severity A instruction applies "where the contract permits" — but the contract defines Severity A as service down, and this service is degraded, not down; so the fault belongs at Severity B under the contract, and the policy's condition for Severity A is not met.
- C) The fault need not be logged at all, since the service is still running.
- D) Escalation to the account manager should happen immediately.

**Correct answer: B**

**Explanation:** The internal policy contains its own limiter: "at Severity A where the contract permits." The contract assigns "service down" to A and "service degraded" to B, and the service is degraded. This tests tracing that chain exactly rather than reading the policy's first half while dropping its qualifying clause — the most common error in policy application, since the qualifier is where drafters put the hard cases. Option D fires the escalation trigger early: escalation is conditioned on a missed contractual response time, which has not yet occurred.

**Question 6 (moderate) — Choosing the accurate summary for a change board**

Read this test report extract:

"Failover testing of the new payments platform completed 4 of 5 planned scenarios successfully. The fifth scenario — simultaneous failure of both network paths — was not executed, because the test environment cannot currently simulate dual-path failure. In the four executed scenarios, recovery met the 60-second objective (observed range: 22–48 seconds). The dual-path scenario is assessed by the project as low probability but high impact."

Which is the most accurate summary line for the change board paper?

- A) "Failover testing passed; recovery within objective."
- B) "Failover testing incomplete; results unreliable."
- C) "4 of 5 failover scenarios passed within the 60-second objective (22–48 s observed); the dual-path failure scenario — low probability, high impact — remains untested due to an environment limitation."
- D) "Failover testing passed except for a failure in the dual-path scenario."

**Correct answer: C**

**Explanation:** The passage contains three facts a change board needs: strong results in executed scenarios, one scenario not executed (with reason), and the risk character of the gap. Option C carries all three at correct strength. Option A conceals the residual risk the board exists to weigh. Option D commits the subtlest distortion: "a failure in the dual-path scenario" reports a test that failed, when the truth is a test that never ran. This tests analysing and reporting test activities and results with the distinctions executed versus passed, untested versus failed, since boards decide on the sentence and it must carry the evidence.

**Question 7 (moderate) — Inference strength from a problem investigation note**

Read this note from a problem record:

"Analysis of 14 memory-exhaustion incidents on the middleware tier over six months shows all occurred within 72 hours of a middleware restart being skipped during the weekly maintenance window (skips occur when the window overruns). No exhaustion incidents occurred in weeks where the restart completed. The restart was skipped in 11 weeks; exhaustion followed in 9 of them."

Which conclusion does the note best support?

- A) Skipped restarts are strongly associated with memory exhaustion — consistent with a memory leak accumulating past one week — and making the restart non-skippable (or fixing the leak) is a well-grounded preventative measure.
- B) The maintenance window overruns cause memory leaks.
- C) The middleware has no memory leak, since 2 skipped weeks saw no exhaustion.
- D) Fourteen incidents in six months is within normal bounds, so no action is indicated.

**Correct answer: A**

**Explanation:** Every exhaustion incident followed a skipped restart; no completed-restart week produced one; 9 of 11 skips were followed by exhaustion — a strong, consistent association with a mechanically plausible story. Option B garbles the causal chain: overruns cause skips; skips permit accumulation; nothing suggests overruns create the leak. Option C misreads noise as refutation. Option D retreats to a base-rate judgement the data has already superseded. This tests drawing conclusions the right size — big enough to act on, small enough to stay honest, the structure of a sound problem-management conclusion.

**Question 8 (moderate) — Conditional procedure with layered exceptions**

Read this extract from the major incident procedure:

"A major incident must be declared when a citizen-facing service is unavailable, or when three or more internal services are simultaneously unavailable. Declaration triggers the major incident bridge and stakeholder communications. A senior engineer may defer declaration for up to 15 minutes where restoration is imminent and confidently understood — except that no deferral is permitted for citizen-facing payment services."

At 14:00, two internal services and one citizen-facing information service go down. The information service's fault is a known, well-understood failure mode; restoration via a documented restart takes about 5 minutes. May a senior engineer defer declaration?

- A) No — three services are down, which mandates immediate declaration.
- B) Yes — deferral is available: the citizen-facing service qualifies (restoration imminent and understood), it is not a payment service, and the internal-services trigger requires three internal services, but only two are down.
- C) No — citizen-facing services can never be subject to deferral.
- D) Yes — but only if the two internal services also restore within 15 minutes.

**Correct answer: B**

**Explanation:** Work the triggers, then the exceptions. Trigger one (citizen-facing unavailable) is met; trigger two ("three or more internal services") is not, since only two internal services are down and the citizen-facing service does not count toward that threshold — option A's arithmetic misapplies the rule's scope. The deferral provision's condition (imminent, confidently understood restoration) is satisfied. The exception to the exception (no deferral for payment services) does not bite, since this is an information service — option C inflates "payment services" to all citizen-facing services. This tests threading every layer of a rule-exception-exception structure correctly, exactly the drafting real incident procedures use to manage judgement under pressure.

**Question 9 (moderate) — Clear-writing judgement in a handover under review**

A junior engineer drafts this handover line for the overnight shift, for review:

"The storage thing from earlier is mostly sorted but keep an eye on it and if it does the same thing again maybe try the fix we did or escalate if it looks bad."

Which revision best fixes the draft's problems?

- A) "The storage issue is resolved. No further action required."
- B) "Array PRD-ARR-2: write-latency spikes 13:10–13:40, mitigated at 13:40 by failing over to controller B. Root cause unconfirmed — supplier case #58211 open. If latency exceeds 20 ms for more than 5 minutes: fail back per runbook §4.2, and page storage on-call. Do not reboot controller A — supplier needs its diagnostic state."
- C) "Refer to the ticket for full details of the storage situation."
- D) "Significant latency anomalies were observed on the storage estate and remediated via controller failover; vigilance is advised overnight."

**Correct answer: B**

**Explanation:** Audit the draft against what an overnight reader must know: which component, what happened and when, what was done, what is still uncertain, a quantified watch condition, a definite response, an escalation trigger, and any hazards. Option B supplies every element. Option A converts "mostly sorted, cause unknown" into "resolved", a false record. Option C outsources the handover to a ticket the reader must excavate at 3 a.m. Option D is polished vagueness with zero executable content. This tests the mentoring duty in action: coaching a junior engineer to write for the reader who has none of their context, using quantified triggers, named components, and definite actions.

**Question 10 (hard) — Scope and definition tracking across a standard**

Read this extract from the infrastructure security standard:

"For the purposes of this standard, 'privileged access' means any access capable of modifying system configuration, and 'infrastructure systems' means servers, storage, and network devices, excluding end-user devices. All privileged access to infrastructure systems must use multi-factor authentication (MFA). Read-only monitoring access is exempt from the MFA requirement. Vendor-supplied maintenance consoles that cannot technically support MFA must instead be network-isolated and their use logged and reviewed monthly."

Statement: "An engineer using read-only monitoring access to a storage array is in breach of the standard if that access does not use MFA."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The storage array is an infrastructure system. But read-only monitoring access is not "privileged access" by the standard's own definition (which requires configuration-modifying capability), and the standard also grants an explicit exemption for read-only monitoring access. Twice over, the MFA obligation does not attach: the statement is contradicted. This tests resisting the pull of security instinct ("more MFA is better") converting the standard's actual scope (privileged access) into an imagined one (all access) — compliance judgements must follow the definitions, not the vibe.

**Question 11 (hard) — Reconciling three sources on effective obligations**

Read these three extracts.

Service catalogue (published January): "Database service maintenance window: Sundays 02:00–06:00."

Change freeze notice (issued by the change authority, effective 1–31 March): "No non-emergency production changes during March, in support of the fiscal year-end. Routine maintenance within published windows is exempt from this freeze, except for systems on the year-end critical list."

Year-end critical list (issued February, effective 1 March–15 April): "Systems: payroll, tax calculation, the finance database service."

It is Sunday 14 March, 03:00. May routine (non-emergency) maintenance be performed on (a) the HR database service and (b) the finance database service?

- A) Neither — the March freeze prohibits all maintenance.
- B) Both — routine maintenance in published windows is exempt from the freeze.
- C) (a) Yes — the HR database's routine window maintenance is exempt from the freeze; (b) No — the finance database is on the critical list, which the freeze's exemption explicitly excludes, so its routine maintenance is frozen until the freeze or listing lapses.
- D) (a) No; (b) Yes — critical systems get priority maintenance.

**Correct answer: C**

**Explanation:** All three documents are live on 14 March. The freeze prohibits non-emergency changes but exempts routine maintenance within published windows, except for critical-list systems, which claws the exemption back. HR database: in its window, not on the critical list — exemption holds. Finance database: in its window, but listed — the exception strips the exemption, and the base freeze rule governs. Option B skips the exception clause; option A skips the exemption; option D inverts the logic of criticality. This tests a three-layer resolution — rule, exemption, exception, each with dates and scopes — the way real operational calendars actually work.

**Question 12 (hard) — Evaluating an argument in a project document**

Read this extract from a project's go-live readiness paper:

"The new platform has run in pre-production for eight weeks without a single incident, demonstrating production readiness. Pre-production runs the same software versions as production will. We therefore recommend go-live without the previously planned two-week limited-user pilot, saving the programme a fortnight."

As the reviewing operations specialist, which critique most accurately identifies the argument's weakness?

- A) The argument is sound: eight incident-free weeks on identical software is sufficient evidence of production readiness.
- B) The argument equivocates on environment equivalence: identical software versions do not make pre-production equivalent to production — production differs in load, concurrency, data volumes and variety, user behaviour, and integration traffic, which are the dominant sources of go-live incidents. Eight quiet pre-production weeks therefore support software stability under pre-production conditions, not readiness for production conditions — which is precisely what the pilot was designed to test on real users at contained scale.
- C) The argument is weak because eight weeks is too short; sixteen incident-free pre-production weeks would demonstrate readiness.
- D) The argument is weak because pre-production environments never provide useful evidence.

**Correct answer: B**

**Explanation:** The paper's evidence is real and its stated premise true as far as it goes; the leap is from "same software" to "demonstrating production readiness", when the unmentioned dimensions — load, data, user behaviour, integrations — are exactly where go-lives fail. The recommendation cuts the one activity that tests those dimensions at contained risk, on the strength of evidence that cannot address them. Option C concedes the flawed premise and haggles over duration. Option D overshoots into nihilism. This tests providing specialist support to projects at its sharpest: finding the gap between a paper's evidence and its recommendation, and proposing a risk-managed alternative rather than a bare objection.

### Administration tips

- **Score for whether a candidate tracks defined terms as precisely as variables**, using a passage's own definitions rather than a candidate's own.
- **Watch for whether a candidate keeps an exception attached to the rule it modifies**, rather than letting it bleed across to a neighbouring rule.
- **Note whether a candidate grades inference strength explicitly** — "proves" versus "strongly associates" versus "is consistent with".
- **Keep timing consistent** across candidates for this level.
- **Use the multi-source item (Question 11) to observe whether a candidate resolves a rule-exemption-exception structure with dates and scopes**, rather than reading any one clause in isolation.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built from operational instinct rather than the passage's actual words.**
- **Missing post hoc causation** — sequence treated as mechanism ("fixed X, then it recovered" read as "X caused it").
- **Accepting scope inflation or deflation** — a defined subset read as the whole population, or vice versa.
- **Crediting an answer that treats "untested" as "failed"**, or "not executed" as "passed".
- **Rewarding the most polished-sounding option in a clear-writing item** over the one that is genuinely executable by its intended reader.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses — most effective, most and least effective, or a rating for each. The scenarios at senior level are not about knowing procedures; they are about exercising judgement where procedures run out: competing priorities with no clean answer, coaching moments tangled inside delivery pressure, specialist consultation timed well or badly, and the quiet integrity questions that surround records, reports, and credit.

The typical format is an online test of 25 to 40 minutes with 12 to 20 scenarios, generously timed. Scoring compares choices against experienced practitioners' consensus and against valued behaviours: ownership, user focus, collaboration, appropriate escalation and consultation, honesty, inclusion, and — distinctively at this level — the development of others.

Employers assess situational judgement at this level because seniors multiply culture: one senior engineer's habits propagate through every engineer they train. Second- and third-line work means the escalations with no runbook land here, and choices — persist or consult, act or escalate, restore fast or preserve evidence — set outcomes and precedents simultaneously.

### How this assessment maps to the role

- **Consultation judgement** maps to the **Problem management** skill: effectively consulting specialists where required is a timing-and-framing skill.
- **Coaching under pressure** maps to the duty to coach and mentor junior team members: scenarios repeatedly test whether people are developed through incidents and mistakes or around them.
- **Restore-versus-investigate trade-offs** map to the **Incident management** skill held in tension with the **Problem management** skill — the defining senior operations dilemma.
- **Assurance integrity** maps to the **Testing** skill and the **Change management** skill: impact assessments and test reports are only as good as the willingness to stand behind their inconvenient content.
- **Service and user perspective** maps to the **Service focus** and **User focus** skills.
- **Ownership through handover** maps to the **Ownership and topic** skill: owning issues until genuinely transferred, including across shifts, teams, and supplier boundaries.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The escalation that should not bounce**

First-line escalates an incident: intermittent database connection failures on a case management service. The escalation notes are thin — no timestamps, no error text, no affected-user count. The service supports a frontline operational team, and the incident is two hours old. What is the most effective response?

- A) Return the ticket to first-line with a note: "Insufficient information — please complete all fields before escalating."
- B) Accept the escalation, gather the missing information from monitoring and logs, resolve the incident — then, separately and afterwards, give first-line specific feedback on what a strong escalation contains, ideally with a template.
- C) Accept the escalation silently and say nothing about the poor notes, to avoid friction.
- D) Complain to the first-line team leader about escalation quality.

**Correct answer: B**

**Explanation:** Two problems coexist: a live incident affecting a frontline team, and a process weakness in escalation quality. Bouncing the ticket uses the live incident as the lever for process improvement — the user pays the delay while the lesson is administered. Silence fixes today at tomorrow's expense. Option B sequences correctly: service first, improvement second, delivered as specific, usable feedback. This tests the senior signature of absorbing the cost when users are waiting, then investing in the system so the cost stops recurring.

**Question 2 (easy) — A candidate's fix, someone else's credit**

During a major incident, a junior engineer being mentored spots the crucial log line while a different theory is being pursued; their observation leads directly to resolution. In the wash-up meeting, the incident manager credits "the senior engineer's diagnosis". What is the most effective response?

- A) Accept the credit — leadership of the response, and hierarchy is how these things are recorded.
- B) Correct the record in the meeting, briefly and warmly: "The key spot was actually [name]'s — they caught the log line while I was chasing the wrong theory," and reflect it in the written wash-up.
- C) Say nothing publicly, but thank the junior engineer privately afterwards.
- D) Say nothing now, but mention the junior's contribution in their next appraisal cycle.

**Correct answer: B**

**Explanation:** The moment is small and the stakes are large, because credit allocation is culture in its most visible form. Option B costs one sentence and buys an accurate record, a junior engineer who learns that good work is seen, and a team that watches its senior spend status honestly. Option A converts a colleague's insight into personal capital. Option C leaves the public record false. Option D defers recognition months from the moment that gave it meaning. This tests recognising that mentoring is conducted in exactly these seconds.

**Question 3 (easy) — The workaround that wants to become permanent**

Three weeks ago, during an urgent incident, a temporary workaround was applied: disabling the verification step in a data transfer job. It restored service and was recorded as temporary, pending a proper fix. Today the problem ticket for the proper fix is found to have been deprioritised twice, and the workaround is still running — meaning transfers are unverified. What is the most effective response?

- A) Leave it — the service is stable, users are happy, and the ticket will surface eventually.
- B) Re-escalate the problem ticket with a crisp risk statement: what the missing verification exposes, how likely, what it would cost, and a recommended deadline — and ask for an explicit, recorded decision to either fix or accept the risk at the right level.
- C) Quietly re-enable the verification step and see if the original fault recurs.
- D) Email the team a reminder that the workaround exists, for awareness.

**Correct answer: B**

**Explanation:** Temporary workarounds are loans against risk, and this one's interest is accruing invisibly: the system looks healthy precisely because the check that would reveal problems is off. Option B converts a fading ticket into a decision that cannot be ignored. Option A mistakes symptom-quiet for risk-quiet. Option C reverses an incident-driven change without change control. Option D performs awareness without seeking a decision. This tests determining preventative measures — including preventing a candidate's own mitigations from ossifying into permanent, unowned risk.

**Question 4 (moderate) — Restore fast or preserve evidence**

A production application server is in a degraded state causing intermittent failures for about 300 users. A restart will almost certainly restore service — and will also destroy the in-memory state that would allow diagnosis of why this keeps happening (this is the third occurrence in two months; the previous two restarts erased the evidence both times). Capturing diagnostics before restarting takes about 15 minutes. What is the most effective response?

- A) Restart immediately — users come first, always and without qualification.
- B) Leave the server degraded for as long as full diagnosis takes — root cause matters more than today's users.
- C) Take the 15 minutes to capture diagnostics, communicating the plan and the reason to stakeholders — a third evidence-free restart guarantees a fourth incident — then restart; escalate the trade-off first only if impact is more severe than described.
- D) Restart now, and diagnose from whatever the regular logs contain, as was done the last two times.

**Correct answer: C**

**Explanation:** This is the canonical senior operations dilemma — restore-now against understand-why — and the scenario rewards a considered middle: the degradation is partial, the diagnostic cost is bounded, and the history is decisive. Option C weighs exactly this, with an honesty clause: if impact were total or safety-relevant, escalation would precede the 15 minutes. Option A's principle is right-hearted but unexamined over a two-month horizon. Option D repeats a documented failure to learn. Option B treats users as instruments of engineering curiosity. This tests quantifying the trade-off, bounding the cost, communicating while acting, and letting incident history — not habit — set the balance.

**Question 5 (moderate) — When to pull in the specialist**

Six hours into diagnosing an intermittent SAN fabric fault — outside the deepest area of expertise, though narrowed meaningfully: it correlates with high-write windows and affects one fabric switch's ports only. The organisation's storage architect is a scarce, heavily contended specialist. The fault degrades backups but does not yet touch users; the nightly backup window is in ten hours. What is the most effective response?

- A) Continue alone — asking for help after only six hours would look weak, and progress is being made.
- B) Hand the whole problem to the architect: "The SAN is faulty, please investigate" — they are the expert.
- C) Contact the architect now with a tight consultation package — symptoms, timeline, the correlation and localisation established, what has been ruled out, and the specific question needing an answer — sized to fit the ten-hour window before the fault starts costing backups.
- D) Wait until the backup window fails tonight, which will justify engaging the architect with a P1 behind it.

**Correct answer: C**

**Explanation:** "Effectively consult specialists where required" has a timing half and a framing half. Timing: the consultation trigger is the point where the specialist's marginal value exceeds the generalist's, reached here since the generalist findings are exhausted and what remains is fabric-internal expertise, with a real deadline bounding the time available. Framing: a package of findings, exclusions, and a specific question lets the architect start from six hours of work instead of repeating them. Option B wastes exactly that. Option D manufactures user harm for administrative convenience. This tests knowing precisely when and how to consult as the strength, not a weakness.

**Question 6 (moderate) — The impact assessment under deadline pressure**

An impact assessment on a complex network change is needed by tomorrow morning for CAB. Done properly — tracing dependencies, checking failover paths, consulting the firewall team — it is two days' work. The programme manager suggests: "Just write 'low impact' — it's probably fine, and we can't slip the date." What is the most effective response?

- A) Write "low impact" — the programme manager owns the deadline and its risks.
- B) Refuse to provide anything until a full two days have been spent, whatever that does to the date.
- C) Provide what an honest day can produce: a bounded assessment stating what was verified, what remains unverified and why it matters, an interim risk rating reflecting the uncertainty, and options for CAB — defer the decision, accept the stated uncertainty explicitly, or split the change into an assessable first phase.
- D) Write "low impact" but keep private notes recording the actual uncertainty.

**Correct answer: C**

**Explanation:** The request is to sign an assurance not yet performed, and the scenario tests whether the dishonesty can be refused without becoming the obstacle. Option C treats the deadline as real while keeping the document honest, and relocates the risk decision to where it belongs: CAB, seeing honest uncertainty, can defer, accept, or phase. Option A launders uncertainty into assurance under a candidate's own name. Option D is option A plus consciousness of guilt. Option B mistakes rigidity for integrity. This tests honesty of the record, constructive engagement with real constraints, and moving decisions to accountable forums with accurate inputs.

**Question 7 (moderate) — A junior's mistake becomes visible**

A junior engineer being mentored implemented a change last night — reviewed and countersigned by the candidate — and made an error in one firewall rule, briefly blocking a partner agency's data feed this morning before monitoring caught it. The service manager asks in the team channel: "What happened with the feed?" The junior, mortified, asks privately: "That was my mistake. Should I own up publicly?" What is the most effective response?

- A) Reply in the channel: "Configuration error in last night's change — my review missed it; corrected at 08:40, feed restored, full check of the change's other rules underway. Post-incident note to follow." Then work through the incident with the junior privately as a learning review, and have them lead the post-incident note with support.
- B) Tell the junior to own up in the channel alone — accountability means facing the music personally.
- C) Reply in the channel: "[Junior's name] made an error in last night's change; they'll fix it and follow up."
- D) Reply vaguely: "Transient network issue, resolved" — protecting everyone from an awkward conversation.

**Correct answer: A**

**Explanation:** The candidate reviewed and countersigned the change, so the error reaching production is a review failure as much as an implementation one, and the public account should carry the senior signature. Option A gives the channel facts, correction status, and a named senior owner, while the junior gets a private learning review and leadership of the post-incident note. Option B outsources the exposure to the least protected person. Option C names the junior while omitting the reviewer's own role. Option D is a false record in a professional channel. This tests routing accountability along the authority: blameless does not mean ownerless, it means ownership lands on the system and its supervisors before its juniors.

**Question 8 (moderate) — Framework compliance versus framework purpose**

The team's change process requires full CAB review for production network changes. A security patch for an actively exploited vulnerability in internet-facing load balancers has just been released; threat intelligence confirms exploitation attempts against similar bodies this week. The next CAB is in six days. The change process includes an emergency change route — team lead plus change manager approval — which the team has historically been reluctant to use, viewing it as "queue jumping". What is the most effective response?

- A) Wait for the scheduled CAB — using the emergency route for anything but an outage would erode the process.
- B) Invoke the emergency change route today with a documented justification — active exploitation of an internet-facing vulnerability is precisely the risk class the route exists for — and raise the team's underuse of the route as a process-culture issue afterwards.
- C) Apply the patch now and tell the change manager afterwards — security trumps process.
- D) Ask the security team to formally accept the six-day risk, transferring the decision to them.

**Correct answer: B**

**Explanation:** The change framework is the whole structure, including the emergency route, which exists exactly for risks that cannot wait for the calendar. An actively exploited vulnerability on internet-facing infrastructure is the textbook case. Option B uses the framework as designed and then addresses the deeper finding: a team culture that reads legitimate emergency provisions as queue-jumping has miscalibrated. Option A is compliance-shaped negligence. Option C breaks the framework in the other direction. Option D dresses delay as governance. This tests framework knowledge as knowing the routes, and senior judgement as using the right one without embarrassment.

**Question 9 (hard) — Most and least effective: the failing service nobody owns**

Monitoring shows a legacy integration service degrading slowly — memory climbing week over week, restart intervals shortening. It sits in an ownership gap: built by a disbanded project, used by two business teams, on the candidate's team's infrastructure but not in its service catalogue. A crash would stop both teams' data exchange with an external partner. Which response is MOST effective and which is LEAST effective?

1. Document the risk and trajectory, apply a stabilising mitigation within the infrastructure remit (scheduled restarts, memory alerting), and drive the ownership question to resolution with service management — naming the crash consequence and a recommended owner.
2. Do nothing — it is explicitly not the team's service, and acting would set a precedent that the team absorbs every orphan.
3. Quietly adopt the service into the team's full support without raising the ownership question.
4. Email both business teams warning them the service may crash, so they can prepare contingencies.

- A) Most effective: 1; least effective: 2
- B) Most effective: 3; least effective: 4
- C) Most effective: 1; least effective: 3
- D) Most effective: 4; least effective: 2

**Correct answer: A**

**Explanation:** Response 1 separates what can rightfully be done now (stabilise within the infrastructure remit) from what must be decided elsewhere (ownership), does the first immediately, and drives the second to an accountable resolution. That is ownership-of-the-issue without theft-of-the-service. Response 2 is least effective: "not my service" is organisationally true and operationally bankrupt — the crash arrives regardless of the catalogue. Response 3 is generous but structurally wrong, papering over the ownership gap with unfunded, invisible goodwill. Response 4 alone transfers anxiety, not safety. This tests acting within authority immediately, escalating what exceeds it explicitly, and never letting either substitute for the other.

**Question 10 (hard) — The test result the project does not want**

As the operations specialist on a project one week from go-live, the final performance test shows the service meets its response-time targets — except for one transaction type, used by roughly 8% of users, which degrades badly under concurrent load: 95th percentile of 4 seconds against a 1-second target. The project board meets tomorrow to confirm go-live. The delivery manager, seeing the draft report, asks for the finding to be moved to an appendix and labelled "minor residual observation", saying: "8% is an edge case — we'll fix it in month one." What is the most effective response?

- A) Agree — 92% of users get a good service, the plan to fix is real, and go-live momentum matters.
- B) Keep the finding in the main report with its severity plainly stated, quantify it in user terms, assess the go-live options honestly (proceed with the degradation known and a funded fix committed; proceed with the transaction type temporarily routed differently; delay) — and present it to the board as a decision they own, whatever the delivery manager prefers.
- C) Refuse to finalise the report and demand go-live be postponed until the transaction performs to target.
- D) Move the finding to the appendix as asked, but email the technical architect separately so somebody senior knows.

**Correct answer: B**

**Explanation:** The delivery manager's request is to change the finding's visibility, which boards act on as if it were the finding itself. Option B holds the finding where decisions are made, translated into terms boards can weigh, accompanied by honest options rather than a bare objection — it does not oppose go-live, but ensures the board decides informed. Option A trades assurance for momentum. Option C overplays the finding into an ultimatum. Option D launders the appendix with a private conscience-copy. This tests identifying issues and risks and reporting results at its hard mode: the risk is real, the audience is senior, and the pressure is polite.

**Question 11 (hard) — Inclusion in the on-call rotation**

Reworking the second-line on-call rotation, a capable engineer discloses privately that the current overnight structure is unworkable due to caring responsibilities, and is considering leaving the team over it. Another team member, hearing a rumour of changes, remarks in a team meeting: "If people can't do the full rota, maybe they're in the wrong job — we all carried it." What is the most effective response?

- A) Keep the rotation as is — on-call is inherent to operations, and uniform obligations are the only fair ones.
- B) Quietly exempt the engineer from overnight duties without explanation, absorbing the extra load across everyone else silently.
- C) Address the design problem and the culture problem separately and properly: redesign the rotation around capability and constraint (weighted shifts, overnight/daytime splits, swap mechanisms) using everyone's constraints gathered consistently and privately — and answer the meeting remark on principle, without exposing anyone: sustainable coverage comes from designing for real lives, and "we all carried it" is how teams lose the people who carry other things too.
- D) Tell the engineer to raise their situation with HR, since accommodating personal circumstances is outside a rotation designer's role.

**Correct answer: C**

**Explanation:** Two failures are on offer: designing the rota for an imaginary uniform engineer, and handling a disclosed constraint as a secret favour. Option C avoids both — treating constraints as engineering inputs gathered consistently from everyone, then designed around with standard tools, while answering the culture problem on principle without exposing anyone. Option A elevates uniformity above capability. Option B is kindness structured as unfairness, breeding the resentment the meeting remark voiced. Option D outsources a design responsibility that belongs with the rotation designer. This tests owning team systems that either include deliberately or exclude accidentally.

**Question 12 (hard) — The supplier engineer's risky shortcut**

A supplier's field engineer is on site for a storage controller replacement under an approved change. Mid-work, they propose deviating from the approved method statement: skipping the pre-swap cache flush "to save forty minutes — the new controllers handle it fine, we do it everywhere". The approved procedure requires the flush; the supplier's own published documentation for this firmware version also requires it. The change window has two hours remaining; the full procedure fits, barely. What is the most effective response?

- A) Accept the deviation — the field engineer works with these controllers daily and knows current practice better than documents do.
- B) Decline the deviation: the approved change and the supplier's own documentation for this firmware both require the flush, the window still accommodates the full procedure, and an undocumented shortcut on a production array is uncosted risk; complete the work as approved, and afterwards route the engineer's claim through the supplier's formal channel — if practice has genuinely moved, the documentation and procedure should be updated for next time.
- C) Accept the deviation, but note it in the change record so the decision is documented.
- D) Halt the change entirely and reschedule once the supplier clarifies its documentation.

**Correct answer: B**

**Explanation:** The upside of the deviation is forty minutes in a window that does not need them; the downside is an unflushed cache during a controller swap risking data loss, against both the approved change and the supplier's own published requirements. Option B declines with the reasoning attached, completes as approved, and takes the engineer's claim seriously through the channel that can validate it. Option A substitutes anecdote for documentation at the moment of maximum consequence. Option C misunderstands that documentation is evidence of a decision, not absolution for a bad one. Option D overcorrects, since no new information has invalidated the approved procedure. This tests authority over the change, an evidence hierarchy (published documentation over verbal assurance), and converting a live disagreement into a process improvement rather than either a capitulation or a standoff.

### Administration tips

- **Score for whether a candidate's response does two things at once** — resolves the immediate situation and strengthens the system (the record, the process, the relationship) that will face the next one.
- **Watch for whether a candidate routes accountability along the authority** in a mentoring scenario — a countersigned error is a review failure as much as an implementation one.
- **Note whether a candidate frames a specialist consultation as a package** (findings, exclusions, a specific question, a deadline) rather than an unframed handoff.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.
- **Use the assurance-under-pressure items (Questions 6 and 10) to observe whether a candidate produces a bounded, honest document** rather than either an unverified assurance or an all-or-nothing refusal.

### Common pitfalls to watch for when scoring

- **Rewarding an option that uses a live incident or a junior's exposure to teach a lesson** rather than absorbing the cost and separating the coaching.
- **Crediting an answer that confuses documenting a bad decision with improving it** — an appendicised finding, a private note, a noted risk are not remedies.
- **Missing all-or-nothing assurance** — refusing to produce anything under time pressure scores as poorly as signing what has not been verified.
- **Accepting process literalism or process bypass** as equally valid responses to urgent risk, when the framework's own emergency route is the correct answer.
- **Rewarding kindness structured as unfairness** — silent exemptions, hidden adoptions of orphan services, vague public accounts — over deliberate, transparent design.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior infrastructure operations engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests reading trends rather than levels, tracing impact through dependency chains, verifying specifications clause by clause, triangulating faults across systems that share components, and holding hypotheses honestly when a counterexample arrives. The numeric section tests downtime budgets, weighted consolidations, compound growth, percentile commitments, and the discipline of decision dates rather than event dates. The verbal section tests definitions tracked like variables, exceptions kept attached to their rules, inference held at the strength the evidence licenses, and writing judged by whether its reader can act on it at 3 a.m. The situational judgement section tests the senior dilemmas that have no runbook: restore versus investigate, consult early or persist, honest assessments under deadline pressure, credit and accountability routed where they belong, and team systems designed to include rather than erode.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to how a candidate would coach junior engineers, consult specialists, and hold assurance under pressure.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can be trusted with the escalations that have no runbook, and can develop the engineers who watch how they are handled — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
