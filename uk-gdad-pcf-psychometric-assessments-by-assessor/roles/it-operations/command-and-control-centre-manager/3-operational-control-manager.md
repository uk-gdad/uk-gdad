# Operational Control Manager - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for operational control manager, within a command and control centre in the UK Government Digital and Data profession. These assessments are job-specific: every scenario is drawn from the territory this role is accountable for — day-to-day IT operations, incident and problem escalation, high-impact change requests, release governance, continuity runbooks and their testing, availability and capacity KPIs across groups of services, and the on-call accountability that follows the postholder beyond working hours. The questions use the artefacts the role actually handles — major incident timelines, change advisory board papers, capacity models, runbook test results, post-incident reviews — and the decisions genuinely made: when to invoke continuity procedures, how to sequence a risky release, whether a problem investigation has genuinely found root cause, and how to balance a service owner's demands against the stability of the wider estate.

This role concentrates risk. The postholder is the escalation point: incidents and problems arrive precisely when they have exceeded someone else's judgement or authority. They are accountable for change management processes that preserve availability, lead incident investigations where the cost of a wrong deduction is measured in citizen-facing downtime, and operate across IT operations as a whole, seeing the bigger picture across groups of services — demanding exactly the pattern recognition, numerical fluency, precise reading, and situational judgement these four assessments measure.

The document is organised into four assessment sections, each with the same structure: what the assessment measures and why employers use it for this role, a mapping of its dimensions to the named skills in the role summary, a substantial set of items with complete worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring. Several items are deliberately uncomfortable — ambiguity, conflicting stakeholders, imperfect options — because that is the honest texture of the role at this level.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental operations this role demands — pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving — using operational scenarios rather than abstract puzzles. For an operational control manager, that means reasoning over major incident evidence, change schedules and their dependency chains, runbook logic, cross-service failure patterns, and the governance artefacts of release and problem management.

The typical format is an online, timed test of 15 to 30 minutes with 15 to 30 questions, adaptive difficulty, and norm-referenced scoring that reports accuracy and speed separately. At senior levels, norm groups are typically managerial, so questions lean toward multi-constraint and multi-source reasoning rather than single-rule application.

Cognitive assessment is used for this role because it is, cognitively, a concentration point. When an incident escalates to this level, the easy diagnoses have failed: what remains is differential reasoning under pressure, across services, with incomplete and partly contradictory evidence. When a high-impact change request arrives, the question is rarely "does this follow the template?" but what the change actually touches, in what order, with what failure modes, and whether the rollback logic survives contact with the dependency graph.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to **Service focus** and the duty of proactive and preventative measures: seeing the bigger picture across groups of services means recognising when apparently unrelated events across the estate form one pattern.
- **Logical deduction** maps to **Incident management** and **Change management**: leading investigation and resolution is structured differential diagnosis; managing high-impact changes means deducing consequences through dependency chains, release constraints, and rollback paths.
- **Error checking** maps to **Problem management**, **Asset and configuration management** and **Continuity management**.
- **Prioritisation** maps to the role of escalation point and to **Ownership and initiative**.
- **Applied problem solving** maps to **Availability and capacity management** and service management framework knowledge.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern across services**

Overnight logs show: 02:10 — case system slow responses; 02:12 — licensing portal slow responses; 02:11 — HR tool slow responses; 02:40 — all three recover simultaneously. The three services run on separate application servers but share a storage array and an authentication service. Database servers are dedicated per service. What is the most productive first hypothesis?

- A) Three independent application faults occurring coincidentally.
- B) A fault in a shared dependency — the storage array or authentication service — affecting all three.
- C) A fault in the case system's dedicated database that spread to the others.
- D) Network issues at three separate user sites.

**Correct answer: B**

**Explanation:** Three services degrading within two minutes and recovering in the same minute is a synchronisation signature that independent faults do not produce. Dedicated databases cannot explain cross-service correlation, and site network issues would affect users by location rather than services by shared infrastructure. Only the shared dependencies — storage array, authentication service — predict exactly this signature. This tests the bigger-picture reasoning the service focus skill names: at escalation level, the diagnostic unit is the estate, and the highest-value first question on any multi-service incident is what the affected services share that the unaffected ones don't.

**Question 2 (easy) — Deduction through a release rule**

The release policy states: (i) high-impact changes require CAB approval and a tested rollback plan; (ii) changes to the authentication service are always high-impact; (iii) a rollback plan is "tested" only if executed successfully in the staging environment within the 30 days preceding implementation. A team proposes an authentication service change for the 20th, with a rollback plan last executed in staging 45 days before that date. Which statement must be true?

- A) The change may proceed if CAB approves it, since approval can substitute for testing.
- B) The change cannot proceed compliantly on the 20th unless the rollback plan is re-executed successfully in staging beforehand.
- C) The change is low-impact if the team classifies it as routine.
- D) The rollback plan is invalid and must be rewritten from scratch.

**Correct answer: B**

**Explanation:** Rule (ii) makes the change high-impact categorically, so team classification cannot override it (eliminating C). Rule (i) requires both CAB approval and a tested rollback plan as a conjunction, so approval cannot substitute for testing (eliminating A). Rule (iii)'s 30-day window is exceeded at 45 days, so the plan is currently untested in the policy's sense — the only compliant path is re-execution within the window. Option D overreaches: the plan is stale, not necessarily wrong. This tests reading load-bearing definitions ("tested", "high-impact") precisely, and a strong candidate's answer notes the constructive framing available: not "no", but "re-run the rollback in staging this week and you're compliant".

**Question 3 (easy) — Error checking a major incident timeline**

A draft post-incident timeline reads: "14:02 monitoring alert fired. 14:10 incident declared SEV1. 14:25 service restored via failover. 14:20 failover initiated. 14:45 incident closed. Total user impact: 23 minutes." Which criticism of the draft is most accurate?

- A) The timeline is internally consistent and the impact figure is correct.
- B) The entries are out of order and the impact figure of 23 minutes matches restoration (14:25) minus alert (14:02), which may understate impact if users were affected before the alert fired.
- C) The impact should be 43 minutes, measured to incident closure.
- D) The failover cannot have been initiated before restoration was complete.

**Correct answer: B**

**Explanation:** Two defects: the entries are disordered (14:20 listed after 14:25), and the 23-minute figure is computed from alert to restoration, but alerts fire when monitoring notices, not when impact begins — if degradation preceded the alert threshold, real impact exceeds 23 minutes. Option C measures to closure, an administrative event, inflating the figure the other way. Option D misreads the disordered entries rather than re-sequencing them. This tests reviewing incident artefacts for ordering, denominator choice, and measurement anchors — the timeline that gets signed off becomes the organisation's memory of the incident.

**Question 4 (moderate) — Prioritisation at the escalation point**

It is 09:30. Four items compete for personal attention as duty escalation manager:

1. A SEV2 on the licensing portal, 90 minutes old, being competently worked by a senior analyst who has just given a confident update; resolution expected within the hour.
2. A junior team's request that the emergency change to fix the SEV2 be approved — the change record looks thin on rollback detail.
3. A director's office chasing a promised briefing note on last week's major incident, due at noon.
4. A pattern noticed twenty minutes ago: the storage array serving three services is showing intermittent latency spikes of a kind that preceded a major outage two months ago — no service impact yet, no one else has flagged it.

What should be attended to first?

- A) Item 1 — the live incident always comes first.
- B) Item 2 — the emergency change is blocking incident resolution.
- C) Item 4 — a precursor pattern to a multi-service outage, currently unowned.
- D) Item 3 — commitments to directors protect the centre's credibility.

**Correct answer: C**

**Explanation:** Item 1 is owned and progressing — a competent analyst with a confident update needs little intervention. Item 2 needs attention soon but is bounded. Item 3 has a deadline hours away. Item 4 is the discriminating case: a recognised precursor to a multi-service outage, affecting shared infrastructure, and unowned — no analyst is watching it, so its risk is compounding silently. This tests recognising that at the escalation point, the scarcest resource is attention to what nobody else is holding, and the highest-value use of seniority is converting unowned risk into owned work — options A and D anchor on visibility and rank, option B mistakes urgent-adjacent for urgent.

**Question 5 (moderate) — Runbook logic under test**

Reviewing a continuity runbook test result. The runbook states: "Step 3: initiate database failover to the secondary site. Step 4: once failover completes (typically 8 minutes), redirect application traffic. Step 5: verify transactions succeed end-to-end. Note: if failover has not completed within 20 minutes, abort and fail back." In the test, failover completed in 26 minutes, the team proceeded to Steps 4 and 5, and all verifications passed. The test report concludes: "Runbook validated — all steps completed successfully." What is the soundest assessment?

- A) The test validates the runbook: every step ultimately succeeded.
- B) The test invalidates the failover mechanism and it must be replaced.
- C) The test reveals two findings: the failover breached its 20-minute abort threshold (so the runbook as written was not followed and its timing assumption failed), and the team's decision to continue past a mandatory abort point went untested for risk — the report's conclusion is unsound.
- D) The test is void and must simply be re-run.

**Correct answer: C**

**Explanation:** The verifications passed, but the runbook was not executed as written — at minute 20, the mandated action was abort-and-fail-back, and the team continued instead. The test proves neither that the runbook works as timed nor that ignoring the abort is safe; in a real event, continuing past the abort point would have been a gamble. Option A conflates a passed verification with a validated procedure. Option B overcorrects from one slow failover. Option D wastes the test's information. This tests distinguishing "the procedure worked as designed" from "we deviated and got away with it" — continuity assurance lives entirely in that distinction.

**Question 6 (moderate) — Deduction across a change collision**

Friday's schedule contains: Change A (network team): core switch firmware upgrade, 20:00–22:00, requires the monitoring platform to be suppressed for the affected segment during the window. Change B (application team): case system release with post-deployment verification 21:00–21:30, whose verification plan states "confirm via monitoring dashboards that error rates remain below 1%". Both changes are individually approved. What has the approval process missed?

- A) Nothing — the changes touch different systems and different teams.
- B) Change B's verification depends on monitoring that Change A suppresses during the overlap: at 21:00–21:30 the dashboards cannot evidence the error rates, so B's success criteria are unverifiable as scheduled.
- C) Change A should never be scheduled on a Friday.
- D) Change B should be cancelled permanently.

**Correct answer: B**

**Explanation:** The collision is evidential, not technical: B's verification method is exactly what A's window suppresses, meaning a bad release could be declared "verified" against blind dashboards and surface as Saturday's incident with a green change record. This is the characteristic failure mode of change processes assessing requests individually — each sound alone, the calendar making them jointly unsound. Options C and D reach for policy bluntness where sequencing precision is needed. This tests reading a schedule as a system, since the CAB approves individual changes but someone must approve the combination.

**Question 7 (moderate) — Error checking a problem investigation**

A problem record submitted for sign-off reads: "Recurring Monday-morning case system slowness investigated. Analysis: slowness correlates with the weekend backup completing late. Root cause: backup overrun. Action: backup window moved earlier. Result: next two Mondays showed no slowness. Problem closed — root cause confirmed." What is the most important weakness?

- A) Two clean Mondays is decent evidence, but the record never establishes why the backup overran — the true root cause remains uninvestigated, so recurrence risk (backup drifting late again as data grows) is unmanaged.
- B) The correlation with backups was probably coincidental.
- C) Two Mondays of confirmation is excessive; one would have sufficed.
- D) The record should not have been closed until six months of Mondays were observed.

**Correct answer: A**

**Explanation:** "Backup overrun" is a mechanism, not a root cause — nothing explains why a backup that once fitted its window stopped fitting. Whatever the driver, it is still operating, and if it is growth, the backup will eventually overrun the new window too, returning under a different timestamp. Option B contradicts the evidence without grounds. Options C and D quibble the confirmation period in opposite directions, treating the record's strongest element as its weakest. This tests chasing causation to the level at which prevention is possible, and asking of every closed root cause: could this recur by the same mechanism that produced it?

**Question 8 (moderate) — Capacity reasoning across a group of services**

Three services share a database cluster rated at 10,000 transactions per second (TPS). Current peaks: case system 4,200 TPS, licensing portal 2,800 TPS, reporting 1,500 TPS — total 8,500 TPS, though their daily peaks do not currently coincide. Two facts arrive: (i) the licensing portal expects a 50% peak increase at next month's renewal deadline; (ii) a proposed change would move reporting's heavy extracts into the same morning window as the other services' peaks. What does the combined picture imply?

- A) No issue: 8,500 TPS is within rating, and growth can be absorbed.
- B) The licensing increase alone (2,800 → 4,200) brings the non-coincident total to 9,900 TPS — tight but survivable if peaks stay separated; the reporting-window change is what converts it to a coincident ~9,900+ TPS peak against a 10,000 rating, leaving no headroom for incident-driven spikes. The change and the growth are individually absorbable but jointly unsafe as scheduled.
- C) The cluster must be replaced immediately regardless of the change.
- D) Reporting should be deleted from the cluster.

**Correct answer: B**

**Explanation:** Licensing at +50% is 4,200 TPS; a coincident peak would be 4,200 + 4,200 + 1,500 = 9,900 against 10,000 — 1% headroom, effectively none once failover transients and retry storms are considered. Today's temporal separation is an unpriced capacity subsidy that the reporting change spends by manufacturing a coincident peak. This tests recognising that two individually reasonable developments can combine into risk, with the remedy being sequencing and separation rather than panic procurement (C) or service removal (D) — availability and capacity management at estate level, where temporal separation is itself capacity that must not be spent by accident.

**Question 9 (moderate) — Pattern in post-incident data**

Reviewing six months of major incident reviews: of 14 majors, 9 involved a change implemented within the preceding 48 hours; of those 9, 7 were changes classified "low-impact" and therefore not CAB-reviewed; the 2 CAB-reviewed changes had both received conditions that were not verified before implementation. What is the most defensible conclusion?

- A) Changes cause most incidents, so change volume should be halved.
- B) The change process has two specific control gaps concentrated where scrutiny is lightest: "low-impact" classification is admitting risky changes unreviewed, and CAB conditions lack a verification step — both are addressable process defects the data localises precisely.
- C) The CAB is ineffective and should be disbanded.
- D) Fourteen incidents is too small a sample to conclude anything.

**Correct answer: B**

**Explanation:** The data localises the defect twice: 7 of 9 change-related majors came through the unreviewed path (indicting the classification gate), and both reviewed changes failed at the same point — conditions imposed but never verified (indicting the absent enforcement step, not the CAB's judgement). Option A punishes safe changes for a locatable few. Option C reads the CAB data backwards. Option D is worth answering directly: 14 is small for statistical inference, but concentration in one path and identical failure at another are structural findings about how failures route, actionable at this evidence level while data collection continues. This tests resolving a pattern to the specific control that failed.

**Question 10 (challenging) — Multi-constraint major incident sequencing**

A storage failure at 05:30 has taken down four services. Constraints: (i) authentication must be restored before the case system and licensing portal (dependency); (ii) restoring any service requires a 30-minute engineer slot, one restoration at a time; (iii) the payments batch must be dispatched from the case system by 09:00 or the day's payments slip 24 hours — dispatch requires the case system up and a 30-minute batch run; (iv) the licensing portal's citizen peak begins at 09:00; (v) reporting has no morning deadline; (vi) one engineer is available until 08:00, when a second arrives, allowing parallel restorations from 08:00. It is 06:00. Which plan meets the hard deadlines?

- A) Auth 06:00–06:30; case 06:30–07:00; batch 07:00–07:30; portal 07:30–08:00; reporting 08:00–08:30.
- B) Auth 06:00–06:30; portal 06:30–07:00; case 07:00–07:30; batch 07:30–08:00; reporting 08:00–08:30.
- C) Case 06:00–06:30; auth 06:30–07:00; batch 07:00–07:30; portal 07:30–08:00.
- D) Auth 06:00–06:30; case 06:30–07:00; portal 07:00–07:30 and batch 07:00–07:30 in parallel; reporting 08:00.

**Correct answer: A**

**Explanation:** Option C fails the dependency, restoring the case system before authentication. Option D violates single-threaded restoration before the second engineer arrives at 08:00. Between A and B, both respect the dependency, but A dispatches payments 07:00–07:30 (90 minutes of margin before the 09:00 cut-off) while B delays the batch to 07:30–08:00 for no benefit, since the portal only needed to be up by 09:00 and A already delivers it by 08:00. This tests identifying the binding deadline and sequencing to maximise its slack — spending margin on a non-binding constraint (as B does) is activity masquerading as progress.

**Question 11 (challenging) — Deduction from conflicting evidence on an incident bridge**

07:40, major incident bridge. Evidence: the application team reports their servers healthy, blaming the database; the database team shows normal query times for completed queries, blaming the network; the network team shows clean links, blaming the application. Additional facts: connection counts on the database have climbed steadily since 07:00 and are near the configured maximum; application logs show rising "connection timeout" errors; a change record shows the application's connection-pool settings were modified last night to "improve reuse". What does the evidence best support?

- A) Someone is wrong and the three teams should each re-run their diagnostics until the guilty component confesses.
- B) The evidence pattern is consistent with connection-pool exhaustion: last night's pool change is leaking or hoarding connections; the database is healthy for queries that get connections (explaining its clean metrics), the network is genuinely clean, and the application's timeouts are queue-for-connection symptoms. Working hypothesis: the pool change; test by inspecting pool metrics and staged rollback.
- C) The database's configured connection maximum should be raised immediately to make the errors stop.
- D) All three teams' evidence cannot be simultaneously true.

**Correct answer: B**

**Explanation:** All three teams are right about their own components; the incident lead's job is finding the failure mode under which every team's clean evidence is simultaneously true. Connection-pool exhaustion satisfies everything: completed queries run fast, packets flow, servers compute, yet requests starve queuing for connections — with the climbing count and last night's pool change supplying mechanism and trigger. Option C treats the symptom and defers exhaustion while destroying a natural experiment. Option A generates confidence, not information, by re-running clean diagnostics. This tests interrogating interactions rather than components when every silo reports healthy — and giving recent changes to the interaction layer first claim on suspicion.

**Question 12 (challenging) — Preventative design against a recurrence pattern**

The storage latency signature from Question 4 was investigated: intermittent spikes recur every few weeks, each preceded — as two months ago — by the same sequence: a firmware bug degrades one array controller, load shifts to the second controller, and if a busy period hits before the degraded controller is reset, a multi-service outage follows. The permanent firmware fix ships in "one to two quarters". Which interim control set best reflects accountability for preventative measures?

- A) Wait for the firmware fix; interim engineering would be wasted work.
- B) Rely on staff vigilance: brief all analysts to watch latency dashboards more closely.
- C) Layered interim controls: an automated alert on the specific precursor signature (controller degradation, not just latency); a documented, tested runbook for the reset procedure with a defined trigger threshold; a standing agenda check on controller state before known busy periods; and a review date tied to the firmware fix's arrival — with the residual risk and its acceptance recorded.
- D) Declare the storage array unusable and migrate all services off it this month.

**Correct answer: C**

**Explanation:** With the mechanism fully characterised (known precursor, known window, known manual remedy, known horizon), option A accepts a recurring risk when interim mitigation is cheap. Option B relies on vigilance, which decays and doesn't survive shift boundaries. Option D exceeds the risk with an emergency migration whose own change risk likely exceeds the threat. Option C is layered interim control mapped to the mechanism's stages: precursor-specific alert (proactive monitoring of the cause, not the symptom), tested reset runbook with a trigger threshold (continuity management), a pre-busy-period check (institutionalising what vigilance left informal), and a review date with recorded residual risk (the governance seal). This tests the design principle: one control per stage of a characterised mechanism, plus one governance wrapper.

### Administration tips

- **Watch for whether a candidate reasons at estate level**, asking what affected services share rather than diagnosing per-service.
- **Score for whether a candidate treats a mechanism as distinct from a root cause**, asking "could this recur by the same driver?"
- **Note whether a candidate identifies the binding constraint first** in multi-constraint sequencing items.
- **Keep timing consistent** across candidates for this level.
- **Use the incident bridge item (Question 11) to observe whether a candidate looks for interactions rather than blaming a single component.**

### Common pitfalls to watch for when scoring

- **Rewarding component-level diagnosis when the fault is an interaction.**
- **Accepting a mechanism as if it were a root cause.**
- **Crediting "we got away with it" as validation** of a procedure or threshold.
- **Missing when a candidate assesses changes individually** where risk is combinatorial.
- **Rewarding effort spent on a non-binding constraint** over margin on the binding one.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures fluency with the quantitative material this role is accountable for: availability and error-budget arithmetic across service groups, capacity models and their projections, incident and change statistics, KPI reporting, and the cost-benefit reasoning behind preventative investment. It is not a mathematics examination; it tests whether the numbers flowing through decisions — and outward under the candidate's signature — are handled with precision.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, calculator permitted, difficulty often adaptive, scoring norm-referenced against managerial peers. Multi-step calculations are common, as are questions testing whether a candidate notices when a presented figure is misleading.

For an operational control manager, numeric reasoning is inseparable from accountability. Availability KPIs across groups of services are arithmetic. High-impact changes are approved on the strength of quantified impact assessments. Reports travel upward, and numerical errors at this level don't stay personal — they become the organisation's picture of its own operations.

### How this assessment maps to the role

- **Availability arithmetic and error budgets** map to **Availability and capacity management**.
- **Capacity modelling and projection** map to **Service focus** and **Asset and configuration management**.
- **Incident and change statistics** map to **Incident management**, **Problem management** and **Change management**.
- **Cost and risk quantification** map to accountability for proactive and preventative measures and service management framework knowledge.
- **Report interrogation** maps to **Ownership and initiative** and **User focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Downtime budget across a quarter**

A service has a 99.7% availability KPI measured quarterly. Taking a 91-day quarter as 131,040 minutes, what is the quarterly downtime budget, to the nearest minute?

- A) 131 minutes
- B) 393 minutes
- C) 262 minutes
- D) 1,310 minutes

**Correct answer: B**

**Explanation:** Permitted downtime = 0.3% of 131,040 ≈ 393 minutes (about 6.5 hours per quarter). Option A is 0.1%, option C is 0.2%, option D is 1%. This tests the basic budget conversion, and a strong candidate's answer notes that expressing budgets in minutes rather than percentages changes conversations — a proposed 4-hour maintenance window becomes visibly 61% of an entire quarter's budget.

**Question 2 (easy) — Burn rate against elapsed time**

Thirty-eight days into the 91-day quarter, the case system has consumed 250 of its 393-minute downtime budget. What percentage of budget is consumed versus percentage of quarter elapsed, and what does the comparison indicate?

- A) 64% consumed vs 42% elapsed — burning roughly 1.5 times too fast; on current trend the budget exhausts around day 60, well before quarter end.
- B) 64% consumed vs 42% elapsed — comfortably on track since consumption is below 100%.
- C) 36% consumed vs 58% elapsed — under-burning.
- D) The comparison is meaningless because incidents are random.

**Correct answer: A**

**Explanation:** Consumption 250 ÷ 393 = 64%; elapsed 38 ÷ 91 = 42%; the ratio of about 1.5 means downtime is accruing faster than time is passing. Projecting the current burn rate (6.58 minutes/day) forward exhausts the remaining budget around day 60. Option B compares consumption to 100% rather than to elapsed time — the definitive burn-rate error. Option D mistakes stochastic arrival for unanalysable arrival. This tests the early-warning value of burn-rate review, enabling action at day 38 rather than an explanatory conversation at day 61.

**Question 3 (easy) — Weighted availability for a service group**

A monthly report aggregates three services: case system 99.2% availability, 6 million requests; licensing portal 99.8%, 3 million; reporting 98.9%, 1 million. What is the request-weighted availability for the group, and how does it compare with the simple average?

- A) Weighted 99.35%, simple 99.30% — weighting flatters slightly.
- B) Weighted 99.32%, simple 99.30% — effectively identical.
- C) Weighted 99.35%, simple 99.30% — the weighted figure is higher because the busiest service performed mid-pack.
- D) Weighted 99.30%, simple 99.35%.

**Correct answer: C**

**Explanation:** Weighted average = 993.5 ÷ 10 = 99.35%; simple average = 99.30%. The weighted figure sits higher here because the heaviest-traffic service performed mid-pack while the weakest service carries the least traffic. This tests recognising that weighting does not always punish — a strong candidate's answer states which question each figure answers: weighted answers "what did users experience?", simple answers "how did our services do on average?" — and notes that a supplier presenting whichever flatters them is exactly what review should catch.

**Question 4 (easy) — Change success rate with a base-rate twist**

Last quarter: 480 standard changes with 6 failures; 45 high-impact changes with 4 failures. A report states: "Overall change success rate: 98.1% — process healthy." What is the more informative reading?

- A) The overall figure is correct and sufficient; 98.1% is healthy.
- B) Overall (515 changes, 10 failures → 98.06%) is arithmetically right but blends two populations: standard changes fail at 1.25%, high-impact at 8.9% — seven times the rate, on exactly the changes with the largest blast radius. The blended figure conceals the concentration of risk.
- C) The overall figure is wrong: 10 failures in 515 changes is 94%.
- D) High-impact changes should be compared only with other organisations' benchmarks.

**Correct answer: B**

**Explanation:** The blended rate is correct (eliminating C) but is dominated by the 480 routine changes, so the headline is effectively a statement about the easy population, while the risky population fails nearly one in eleven times. This tests decomposing a mixed-population rate before it reassures — blended KPIs are where concentrated risk hides, and a strong candidate's answer notes that 8.9% is the figure that should drive action.

**Question 5 (moderate) — Impact quantification for a change window**

A proposed emergency change requires taking the licensing portal offline for 40 minutes. Traffic data: daily average 6,000 requests/hour; the proposed slot (14:00–14:40) runs at 1.8× daily average; 25% of afternoon requests are new applications that fail hard offline; the alternative slot (05:00–05:40) runs at 0.15× daily average with the same 25% application share. How many hard-failing requests does each slot cost, and what is the ratio?

- A) 14:00 slot: 1,800; 05:00 slot: 150; ratio 12:1.
- B) 14:00 slot: 1,080; 05:00 slot: 90; ratio 12:1.
- C) 14:00 slot: 2,700; 05:00 slot: 225; ratio 12:1.
- D) 14:00 slot: 1,080; 05:00 slot: 150; ratio about 7:1.

**Correct answer: A**

**Explanation:** Afternoon: 6,000 × 1.8 = 10,800/hour; × 2/3 hour (40 minutes) = 7,200 in-window; × 25% = 1,800 hard failures. Early: 6,000 × 0.15 = 900/hour; × 2/3 = 600; × 25% = 150. Ratio 12:1. This tests building a staged model correctly (rate × multiplier × duration × share) and a strong candidate's answer notes that a quantified ratio makes the change-window decision priceable rather than adjectival, letting a CAB weigh "genuinely cannot wait" against roughly 1,650 additional failed applications.

**Question 6 (moderate) — Trend with seasonality**

Monthly incident counts for the estate over twelve months: 82, 79, 85, 88, 84, 90, 118, 121, 92, 95, 91, 97 (January to December; July and August contain the annual licensing renewal peak). A report claims: "Incidents rose 18% over the year (82 → 97): sustained deterioration." What is the sounder analysis?

- A) The claim is correct: 97 is 18% above 82.
- B) Comparing single endpoint months overstates certainty; excluding the known July–August seasonal peak, the series runs roughly 82–97 with a mild upward drift, and 97 in December versus 82 in January is consistent with that drift — real but modest, and the "18%" framing anchored on the lowest early month exaggerates it. The July–August spike is seasonal load, not deterioration, and should be analysed separately against last year's peak.
- C) There is no trend: the differences are noise.
- D) The July–August figures should be averaged into the trend to avoid bias.

**Correct answer: B**

**Explanation:** The 18.3% arithmetic is correct, but endpoint-to-endpoint comparison stakes everything on two months' idiosyncrasies. Excluding the peak, the series does drift upward (roughly 15% on quarter-averages, more robust than endpoints) — so option C's "no trend" is wrong. What B correctly rejects is the framing: "sustained deterioration" implicitly folds in the seasonal peak, which is a separate question about seasonal resilience. Option D would corrupt both analyses. This tests separating seasonal from secular trend and preferring period-averages to endpoints.

**Question 7 (moderate) — Problem investigation: before/after with a denominator check**

A problem fix for recurring printing failures was deployed on 1 June. Evidence offered for closure: "May: 40 printing incidents. June: 22 — a 45% reduction, fix confirmed." Additional context: May had 21 working days, June 20; and on 10 June the largest user site (historically ~35% of printing incidents) began a phased office move, with roughly half its staff off-site for the rest of the month. What is the sound assessment?

- A) 45% reduction confirms the fix; close the record.
- B) Adjust for working days: May 1.90/day, June 1.10/day — a 42% daily-rate reduction, so the conclusion stands unchanged.
- C) The working-day adjustment still shows ~42% down, but the site move removed a large share of exposure for two-thirds of June: the site contributing ~35% of incidents halved its usage from 10 June, plausibly accounting for a sizeable slice of the reduction on its own. The fix may well be working, but the evidence is confounded; require either site-level incident breakdown or another clean month before closure.
- D) The fix clearly failed because incidents did not fall to zero.

**Correct answer: C**

**Explanation:** Per-working-day rates survive the adjustment (as B correctly computes), but the exposure confound — the site move removing roughly 12% of expected incidents, not the whole 42% — leaves the fix's true effect materially uncertain. Option A closes on headline arithmetic; option D demands a standard the fix never promised. This tests two questions before any closure: "per what?" and "what else changed?" — before/after comparisons are only evidence when denominators and exposure are held level.

**Question 8 (moderate) — Capacity cost-benefit for a preventative measure**

The storage precursor alert from the cognitive section (Question 12) needs a business case. Engineering estimate: 5 days' effort at £600/day. Historical data: the failure mechanism produced one multi-service outage in the past two quarters, valued at £45,000. The firmware fix is expected in at most two quarters; without controls the outage recurs once per two quarters until then, and with controls the recurrence probability is cut by 80%. What is the expected net benefit of building the controls?

- A) £45,000 − £3,000 = £42,000.
- B) Expected loss avoided = £45,000 × 1 occurrence × 80% = £36,000; cost = 5 × £600 = £3,000; expected net benefit ≈ £33,000, an ~11:1 return.
- C) £3,000 cost with no benefit, since the firmware fix makes controls redundant.
- D) The case cannot be made because outage costs are estimates.

**Correct answer: B**

**Explanation:** Expected loss avoided = £45,000 × 0.8 = £36,000; cost = £3,000; net benefit ≈ £33,000. Option A claims the full outage cost as benefit, ignoring probability and the 20% residual — the classic overselling that gets preventative cases discounted. Option C repeats the "interim work is waste" fallacy numerically refuted. This tests expected-value reasoning for prevention, and a strong candidate's answer addresses D directly: sensitivity-checking the £45,000 estimate (even halved, the return is still ~6:1) shows the decision is insensitive to the estimate's uncertainty — exactly what makes a case robust before a sceptical reviewer.

**Question 9 (moderate) — Reading a percentile, not an average**

A service's response-time report shows: mean 380 ms, median 210 ms, 95th percentile 1,900 ms, 99th percentile 4,800 ms, against a user-experience target of "95% of requests under 2,000 ms". A stakeholder reads the mean and concludes: "380 ms — miles under 2,000; excellent month." What is the accurate reading?

- A) The stakeholder is right: 380 ms is well under target.
- B) The service technically meets the stated target (95th percentile 1,900 < 2,000) but by only 5%, and the tail is severe: the worst 1% of requests take over 4,800 ms — nearly 23 times the median. The mean sits far above the median precisely because that tail drags it; the target is met with almost no margin, and any tail worsening breaches it. "Excellent" misreads a distribution as a number.
- C) The service breaches the target because 4,800 > 2,000.
- D) Mean and median should be averaged to give a fair summary (295 ms).

**Correct answer: B**

**Explanation:** The target binds on the 95th percentile (1,900 vs 2,000, met with 5% margin). Option C tests the 99th percentile against a 95th-percentile target. Option A reads the mean as typical, when the large mean/median gap signals a heavily right-skewed distribution the mean does not describe. Option D invents a statistic. This tests matching the statistic to what the SLA actually binds on, and a strong candidate's answer notes the management action a thin margin implies: tail investigation now, before a bad deploy or capacity notch breaches the KPI.

**Question 10 (challenging) — Reconciling KPI figures from two systems**

The monthly availability figure for the case system comes from two sources. The monitoring platform reports 99.42% (synthetic checks every 60 seconds from the data centre). The user-experience tool reports 98.9% (real user sessions). The service desk logged 214 minutes of user-reported disruption; the monitoring platform's outage log totals 253 minutes for a 43,800-minute month. Which reconciliation is soundest?

- A) Report 99.42% — the monitoring platform is the system of record.
- B) Report 98.9% — real users outrank synthetic checks.
- C) First check internal consistency: 253 outage minutes ÷ 43,800 = 0.578% unavailability → 99.42%, so the platform's own figures cohere. The user-experience gap (98.9% → ~482 user-impacted minutes) exceeds the platform's 253 minutes by ~229 minutes, indicating impact the synthetic checks miss. Report both figures with the gap explained, and open an action on monitoring coverage: the 229-minute blind spot is itself a finding.
- D) Average the two: 99.16%.

**Correct answer: C**

**Explanation:** The platform's own figures are internally consistent (253 ÷ 43,800 matches 99.42%). Converting the user-experience figure to minutes gives roughly 482 — a 229-minute gap the synthetic checks miss, corroborated by the desk's 214 logged minutes. Options A and B each pick a winner between two measurements of different things; option D averages them, producing a number with no referent. This tests reporting both figures with the gap explained and converting the gap into an action — a stable small gap is measurement physics, a growing one is monitoring aging out of the architecture it watches.

**Question 11 (challenging) — Queue dynamics during a major incident**

During a major incident, the service desk receives calls at 150/hour (normal: 20/hour). Desk capacity is 90 calls/hour; calls not answered within the hour abandon. The incident is expected to run 3 more hours. Two mitigations are available, separately or together: (i) a recorded status message expected to deflect 40% of incoming calls before they need an agent; (ii) borrowing staff to raise capacity to 130 calls/hour, available from one hour from now. What best characterises the options?

- A) Neither helps: 150 > 130, so calls are lost regardless.
- B) Message alone: effective arrivals 150 × 0.6 = 90/hour = capacity, so abandonment stops immediately. Borrowed staff alone: hour 1 loses 60 calls, hours 2–3 lose 20/hour — 100 abandoned over 3 hours. Both together: arrivals 90 vs capacity 130 from hour 2 — 40/hour of spare capacity but only after an hour in which the message alone already sufficed. The status message is the decisive mitigation; staff add resilience if deflection underperforms its estimate.
- C) Borrowed staff alone solve it: 130 > 90.
- D) Both must be implemented because more capacity is always better.

**Correct answer: B**

**Explanation:** The message alone matches deflected arrivals (90) to capacity (90), stopping abandonment immediately. Staff alone still loses 100 calls over 3 hours (worse than message alone, though better than no mitigation). Together, the two combine, but the message is what does the decisive work. Option C misses that 130 exceeds deflected arrivals but not raw arrivals. This tests modelling demand-side and supply-side mitigations separately, and a strong candidate's answer names the knife-edge risk: 90 vs 90 has zero margin, so staff act as resilience against deflection underperforming its estimate — the fastest fix for an overwhelmed desk is usually upstream (reducing demand) rather than downstream (adding capacity).

**Question 12 (challenging) — Interrogating a supplier's SLA report**

A managed-infrastructure supplier reports: "Q2 SLA performance: 99.95% availability achieved (target 99.9%). Note: figures exclude the emergency maintenance of 14 May (4 hours), performed to prevent imminent disk failure, as emergency preventative maintenance is excludable under contract clause 7.3." The 4-hour window fell at 10:00–14:00 on a Wednesday. The affected platform hosted services totalling 2,184 hours in the quarter. What is the availability including the excluded window, and what should the governance response be?

- A) Including the window: 4 ÷ 2,184 = 0.183% additional unavailability → ~99.77%, below the 99.9% target. Response: accept the exclusion since clause 7.3 permits it, but record that experienced availability was 99.77%, challenge whether preventative maintenance necessitated a peak-hours window, and take the pattern to contract review: exclusions that convert a breached quarter into a bonus-qualifying one merit scrutiny of both the clause and its invocation.
- B) 99.95% stands; contract clauses are not operational business.
- C) Including the window: ~99.77%; response: refuse payment and declare the supplier in breach.
- D) The exclusion is irrelevant because 4 hours is negligible.

**Correct answer: A**

**Explanation:** Including the window gives ~99.77%, below the 99.9% target — the exclusion is doing decisive work. Option C ignores that the clause permits the exclusion; refusing payment on a permitted exclusion loses both the dispute and the relationship. Option B mistakes contractual truth for operational truth. Option D is refuted by the arithmetic — 0.18% is nearly double the SLA's entire quarterly failure allowance. This tests recomputing a headline figure including all exclusions before accepting it, reporting both figures, and treating any exclusion that flips the compliance verdict as a governance event rather than a footnote — plus challenging whether "emergency preventative" maintenance of a predicted failure genuinely needed to sit at the most expensive hour on the clock.

### Administration tips

- **Score for whether a candidate compares consumption to elapsed time**, not to 100%, in burn-rate items.
- **Watch for whether a candidate decomposes a blended rate** before accepting a headline figure.
- **Note whether a candidate treats a trend claim built on two endpoints with appropriate scepticism.**
- **Keep timing consistent** across candidates for this level.
- **Use the SLA interrogation item (Question 12) to observe whether a candidate recomputes a figure inclusive of its exclusions before accepting it.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that compares consumption to 100%** rather than to elapsed time.
- **Accepting a blended rate without decomposition.**
- **Crediting an endpoint-to-endpoint trend claim** without checking for seasonality or cherry-picked bases.
- **Missing when a candidate ignores exposure changes** in a before/after comparison.
- **Accepting an average of two measurements of different things** (contractual versus experienced, synthetic versus real-user) as if it answered either question.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures precision in reading, interpreting and reasoning from written material — using the document classes this role turns on: incident and problem records, change and release policies, continuity procedures, supplier contracts and reports, post-incident reviews, governance papers, and escalation correspondence.

The typical format is an online, timed test of 15 to 25 minutes: short passages followed by true/false/cannot-say judgements, best-summary selection, inference identification, argument evaluation, and clear-writing judgement. At managerial levels, passages trend longer and contain deliberate tensions between documents, rewarding the reader who tracks exactly what each text commits to versus what it merely invites assumption about.

Verbal precision is a governance instrument for this role. The documents reaching this level have already been read once by someone whose reading proved insufficient — the value here is the second, exact reading. Change governance is textual: policies, conditions, exemptions, and definitions decide whether a change was compliant. Problem records and post-incident reviews are signed off here, where a conclusion worded one notch stronger than its evidence becomes tomorrow's false institutional memory.

### How this assessment maps to the role

- **Precise policy and procedure comprehension** maps to **Change management** and service management framework knowledge.
- **Evidence-conclusion discipline** maps to **Incident management** and **Problem management**.
- **Cross-document reasoning** maps to **Continuity management** and **Asset and configuration management**.
- **Argument evaluation** maps to **Availability and capacity management** and accountability for preventative measures.
- **Clear-writing judgement** maps to **Community collaboration**, **User focus** and **Ownership and initiative**.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — What a policy commits to**

Passage (release policy extract): "Releases to production may occur on any weekday. Releases affecting citizen-facing services must not occur on the last two working days of the month, when transaction volumes peak. The release manager may grant exemptions to the end-of-month restriction where a critical security fix is required."

Statement: "A release affecting a citizen-facing service can never compliantly occur on the last working day of the month."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The restriction is explicit, but so is its exemption: a granted security exemption makes a last-working-day citizen-facing release compliant — "never" is contradicted by the passage's own exception clause. This tests holding a rule-plus-exception structure whole rather than absolutising the default while skimming past the exemption — both halves are enforceable, and both failures (rigidity and looseness) are policy failures.

**Question 2 (easy) — Evidence versus conclusion in an incident update**

Passage (update from an incident bridge): "18:40 update: error rates on the case system returned to baseline at 18:22, eleven minutes after the network team rolled back this afternoon's routing change. The network team consider the routing change the likely cause. Application logs from the affected period are still being analysed."

Statement: "The routing change caused the case system errors."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Strong circumstantial evidence and a stated opinion do not amount to an established fact, and the passage explicitly flags incomplete analysis — Cannot say. This tests keeping "acting on a hypothesis" and "asserting a fact" as separate acts: an escalation manager would rightly act on the hypothesis while refusing to let the incident record say "cause: routing change" until analysis lands, since "likely" hardening into "confirmed" through repetition produces reviews aimed at the wrong mechanism.

**Question 3 (easy) — Reading a continuity test requirement**

Passage (continuity standard): "Each critical service's runbook must be tested at least every six months. A test is valid only if conducted against the production-equivalent environment and observed by a person independent of the team that maintains the runbook. Desk-based walkthroughs may supplement, but do not replace, environment tests."

The case system's runbook was tested four months ago in the production-equivalent environment, observed by the runbook team's own lead. Last month the team completed a thorough desk-based walkthrough observed by an independent quality manager. Statement: "The case system currently holds a valid runbook test under the standard."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The environment test fails the independence condition; the walkthrough, however independently observed, cannot substitute for an environment test. Neither event satisfies both conditions at once, and no valid test exists — False. This tests reading validity conditions as conjunctive per event, rather than merging two partial events into compliance — a schedule full of activity can still contain zero valid tests.

**Question 4 (moderate) — Best summary of a governance paper**

Passage: "The change advisory board's remit is to assess risk, not to guarantee outcomes. Approval indicates that a change's documented risk is acceptable given its documented benefit, on the information presented. Teams remain accountable for the accuracy of what they present, and implementation teams remain accountable for executing as approved. Where a change fails despite approval, the review question is whether the failure arose from information the CAB should have probed, from inaccurate submission, or from execution divergence — each indicating a different remedy."

Which option best summarises the passage?

- A) "The CAB is accountable for change failures because it approved them."
- B) "CAB approval transfers risk acceptance, not accountability: submission accuracy stays with the proposing team, execution fidelity with the implementers, and post-failure review sorts which link failed to target the right remedy."
- C) "Change failures are usually caused by inaccurate submissions."
- D) "The CAB should probe information more thoroughly."

**Correct answer: B**

**Explanation:** Option B preserves the passage's three-way accountability allocation plus its diagnostic rule. Option A inverts the central point. Options C and D each promote one branch of a diagnostic taxonomy — possibilities to distinguish in review — into a general claim the passage never makes. This tests structural fidelity in summarising a governance text, since mis-summarising it as A conducts a blame exercise rather than the intended three-question review.

**Question 5 (moderate) — Inference from a supplier notification**

Passage (supplier email): "As part of our platform modernisation, the legacy reporting API your organisation uses will be deprecated on 1 March. Deprecated APIs remain operational but receive no further fixes, and are removed no earlier than twelve months after deprecation. Migration guides for the replacement API are attached. We recommend beginning migration promptly, as the replacement API's authentication model differs significantly."

Which statement is best supported by the passage?

- A) The legacy API will stop working on 1 March.
- B) The legacy API will be removed on 1 March of the following year.
- C) After 1 March, a newly discovered fault in the legacy API would remain unfixed, and removal could come as soon as twelve months later — so the safe migration window is bounded and the risk of staying grows from deprecation day, not removal day.
- D) The replacement API requires no significant changes to integrate.

**Correct answer: C**

**Explanation:** Option A confuses deprecation with removal. Option B converts a stated floor ("no earlier than") into a scheduled date. Option D is contradicted directly. Option C assembles only what the text supports and draws the licensed inference: risk begins accruing at deprecation, since unsupported software then runs with a removal clock whose earliest expiry is known. This tests translating supplier modernisation language into operational risk language — the entry belongs in a risk register as "unsupported from 1 March; removal possible from 1 March next year", not "problem in twelve months".

**Question 6 (moderate) — The instruction about to be sent**

A release will proceed tonight under condition that it aborts if error rates rise. An instruction is being drafted for the overnight team. Which version carries the intent with least ambiguity?

- A) "Proceed with tonight's release, but abort if things look bad."
- B) "Proceed with tonight's release. Abort criteria: sustained error rate above 2% for 10 consecutive minutes on the case system dashboard (link), measured from deployment completion. On abort: execute rollback plan RB-114, notify me regardless of hour, and record timings in the change record. If the dashboard itself is unavailable, treat as abort."
- C) "Proceed with tonight's release. Abort if error rates rise significantly. Use your judgement — you're a capable team."
- D) "Proceed with tonight's release. Abort if the error rate exceeds 2%."

**Correct answer: B**

**Explanation:** Option B specifies the metric and source, threshold, persistence requirement, measurement anchor, abort action, communication rule, record-keeping duty, and the failure mode of the criterion itself — a blind dashboard defaults to abort, not hope. Option A and C both delegate the decision, C dressed in flattery. Option D is a plausible near-miss missing persistence, source, action, and default-on-failure. This tests writing an instruction complete enough that the recipient can execute every branch — including instrument failure — without waking the author, since anything less transfers accountability downward without transferring the authority to discharge it.

**Question 7 (moderate) — Two records in tension**

Passage 1 (configuration record, updated January): "Database failover for the case system: automatic, initiated within 60 seconds of primary failure, no manual action required."

Passage 2 (post-incident review, June): "During the 12 June incident, database failover did not initiate automatically. The on-call DBA initiated manual failover 34 minutes after primary failure. Cause: automatic failover was disabled during the April storage migration and not re-enabled. Action 7: re-enable automatic failover and verify. Action owner: database team. Status at review sign-off: open."

It is September. Statement: "The case system's database failover will initiate automatically if the primary fails today."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The January record was falsified by April–June events; the June review's remedial action was open at sign-off; nothing in the texts establishes today's state. This tests recognising that "cannot say" is the correct answer here on paper — and an unacceptable answer operationally, requiring the current status of Action 7 to be verified rather than assumed either way. Open post-incident actions decay precisely because their reviews are signed off and filed.

**Question 8 (moderate) — Argument evaluation: the outsourcing case**

Passage (from a proposal): "Our command and control centre resolved 71% of incidents without specialist escalation last year. VendorCo's managed operations centre advertises a 90% non-escalation rate. Moving our monitoring and first response to VendorCo would therefore improve our resolution performance by 19 points, freeing specialist teams. VendorCo's rate is audited and genuine."

Which is the strongest criticism of the argument?

- A) The 71% figure is probably measured wrongly.
- B) Even granting both figures as accurate, the comparison assumes the rates are commensurable — but non-escalation rate depends on incident mix, escalation policy and what counts as "resolved"; VendorCo's 90% on its portfolio does not transfer to our estate's mix, and a high non-escalation rate can even indicate under-escalation. The inference from "their rate is higher" to "our rate would become theirs" is the unsupported step.
- C) Outsourcing is always a mistake for public services.
- D) VendorCo's audit was probably not independent.

**Correct answer: B**

**Explanation:** The passage pre-empts attacks on the number by stipulating it is "audited and genuine", disarming options A and D. The logical gap is transferability — a non-escalation rate is a joint property of incident mix, escalation policy, and resolution definitions, none of which are shared. Option C substitutes ideology for analysis. This tests granting an argument's premises and attacking the transfer step — the highest-yield skill for reading vendor cases and benchmark comparisons — and a strong candidate's answer notes non-escalation is not unambiguously good, since it can indicate under-escalation.

**Question 9 (moderate) — False versus cannot-say at the contract boundary**

Passage: "Under the support contract, SEV1 incidents must receive a supplier response within 15 minutes, 24/7. On Saturday at 03:10 the centre raised INC-7201 with the supplier as SEV1. The supplier's first response arrived at 03:52."

Statement: "The supplier breached the support contract."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Response due by 03:25; first response 03:52 — 27 minutes late, against an unconditional obligation. Every element of a breach is on the page: True. This tests cannot-say discipline in the other direction — after several genuinely indeterminate items, a candidate should not manufacture doubt ("perhaps there's an exclusions schedule") where rule, trigger, and violating fact are all supplied; the deduction closes.

**Question 10 (challenging) — Reconciling three documents under supersession**

Passage 1 (standing change policy): "All production changes require CAB approval no less than 48 hours before implementation."

Passage 2 (emergency procedure, referenced by the policy): "Emergency changes — those addressing active or imminent service failure — may be approved by the duty operational control manager, with full documentation completed within 24 hours after implementation and retrospective CAB review at its next sitting."

Passage 3 (email from the head of operations, Tuesday): "Following this morning's board discussion of audit findings, with immediate effect all uses of the emergency change route require my personal approval in addition to existing controls, pending the review of emergency change governance. Standing policy is otherwise unchanged."

On Thursday night, an active service failure requires an immediate production change. The head of operations is uncontactable. Statement: "The duty operational control manager can tonight authorise the change in full compliance with the applicable rules."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Under Passages 1 and 2 alone, tonight's authorisation would be compliant. Passage 3, the most recent authority, adds a conjunctive control — personal approval from the head of operations, in addition to existing controls, with no stated exception for unavailability — which is unobtainable tonight. Full compliance is not achievable, so False. This tests refusing an imported "surely they'd want the service saved" exception that the text does not contain, while recognising that false-on-compliance does not mean frozen-in-action — a strong candidate's answer notes the professional response: act with maximum procedural honesty, log attempted contact, document within the emergency procedure's timeframe, self-report the deviation, and flag the control's gap for the governance review.

**Question 11 (challenging) — The post-incident review's quiet overstatement**

Passage (draft post-incident review conclusion): "The outage was caused by the failed disk controller. The incident demonstrates that our monitoring performed well, generating the initial alert within 90 seconds of failure. Staff response followed procedure throughout. No process changes are required; the hardware has been replaced and the risk is closed."

Earlier sections of the same review record: the alert fired at 04:31; it was acknowledged at 05:14 because the overnight alert routing sent it to a mailbox rather than the on-call phone (a known configuration issue logged three weeks earlier); service restoration began at 05:20.

Which criticism of the conclusion is most important?

- A) The disk controller cause is probably wrong.
- B) "Monitoring performed well" is half-true and the conclusion's closure claim doesn't follow: detection was fast (90 seconds) but the alert then sat unacknowledged for 43 minutes due to a known, logged routing defect — so "staff response followed procedure" may be literally true while the procedure's delivery mechanism failed, and "no process changes are required" is contradicted by the review's own body. The risk closed is the hardware instance; the routing defect remains open and pre-dates the incident.
- C) The review is too short.
- D) The replacement hardware should have been a different model.

**Correct answer: B**

**Explanation:** The causal claim is consistent with the body; options A and D attack it without textual basis. The overstatement is evaluative: "monitoring performed well" merges detection (excellent) and notification (failed) into one verdict, and "no process changes are required" directly contradicts the body's own known, logged routing defect. This tests reading a conclusion against its own supporting evidence — the defining act of sign-off — and locating each evaluative sentence's evidence to check its scope matches.

**Question 12 (challenging) — Precision under modal and temporal load**

Passage (from the major incident procedure): "The duty manager must declare a major incident when two or more citizen-facing services are simultaneously degraded, or when any single citizen-facing service is fully unavailable for longer than 15 minutes. The duty manager may declare a major incident at their discretion in other circumstances. Once declared, a major incident may be stood down only when all triggering conditions have ceased and the duty manager has confirmed stability for 30 continuous minutes. Declaration obligations are assessed on service status, not on incident ticket status."

At 11:00, the licensing portal (citizen-facing) becomes fully unavailable. At 11:10, the case system (citizen-facing) becomes degraded. At 11:13, the portal recovers fully; the case system remains degraded. No declaration has yet been made. Statement: "As of 11:14, the duty manager is in breach of the mandatory declaration duty."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Trigger two (full unavailability over 15 minutes) never fires — the portal was down 11:00–11:13, thirteen minutes. Trigger one (simultaneous degradation) held only during the 11:10–11:13 window, which has closed by 11:14 — the procedure's own language ("must declare when [conditions hold]") and its stand-down clause both anchor obligation to current status. At 11:14 no mandatory condition subsists, so no breach — False. This tests running modal words, temporal conditions, and an assessment timestamp together without letting any slip — precisely what reading a major incident procedure at 11:14 on a bad morning requires, since over-declaring erodes the signal and under-declaring erodes the response.

### Administration tips

- **Score for whether a candidate holds a rule-plus-exception structure whole**, neither absolutising the rule nor over-reading the exception.
- **Watch for whether a candidate keeps "likely cause" from hardening into "cause"** in evidence-based items.
- **Note whether a candidate checks conditions per event** in compositional-compliance items, rather than merging partial matches.
- **Use the instruction-writing item (Question 6) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer that absolutises a rule past its stated exception**, or treats an exception as a general permission.
- **Rewarding an evaluative sentence that merges separable stages** (detection versus notification; procedure versus luck) under one verdict.
- **Missing compositional-compliance errors** where two partial matches are treated as one full one.
- **Accepting a stated floor as if it were a scheduled date.**
- **Rewarding manufactured doubt** where rule, trigger, and fact are all supplied and a deduction should close.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to evaluate the effectiveness of possible responses — selecting the most effective, the least effective, ranking, or rating each independently. Scoring compares judgements against those of experienced practitioners and validated competency frameworks; there are rarely perfect options, only better and worse resolutions of genuine tensions.

The typical format is 10 to 20 scenarios over 20 to 40 minutes. At managerial levels, scenarios shift character: less "what should you do?" and more "what should you do about what others are doing?" — directing without micromanaging, holding standards without breaking people, escalating upward, deciding under authority gaps, and absorbing pressure without passing it on amplified.

The dilemmas below are drawn from this role's actual territory: leading incident investigations where seniors want answers faster than evidence arrives; holding change and release discipline against delivery pressure; managing runbooks and continuity when tests reveal inconvenient truths; being on call 24/7 with authority that sometimes exceeds information; team dynamics surfaced by Agile health checks; and user-focus calls where operational convenience and citizen outcomes pull apart. Assessors consistently reward responses that keep accountability where it belongs, keep records truthful, convert pressure into structured action rather than transmitted stress, address behaviour directly before escalating, and protect users first when goods conflict; they penalise heroics that bypass process, delegation that abandons, deference that falsifies, and any resolution of tension achieved by making the record say what reality doesn't.

### How this assessment maps to the role

- **Incident leadership dilemmas** map to **Incident management** and **Ownership and initiative**.
- **Change and release pressure scenarios** map to **Change management**.
- **Continuity and assurance dilemmas** map to **Continuity management** and **Asset and configuration management**.
- **Team and feedback scenarios** map to **Community collaboration**.
- **Escalation and governance scenarios** map to the escalation-point role and service management framework knowledge.
- **User-outcome dilemmas** map to **User focus** and **Availability and capacity management**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The confident wrong answer on the bridge**

Ninety minutes into a SEV1, the most experienced engineer on the bridge announces: "It's the load balancer — I've seen this exact pattern before. I'm restarting it now." The evidence built so far points elsewhere: database connection metrics point elsewhere, and a load balancer restart would drop all current sessions, worsening impact if wrong. The engineer is already typing. What is the most effective response?

- A) Let it proceed — they have twenty years' experience and challenging them publicly would undermine them.
- B) Intervene now, directly and without heat: "Hold the restart — connection metrics don't fit the load balancer pattern; walk me through what you're seeing first." Make the decision explicitly the incident lead's, weigh their pattern against the metrics openly, and choose the next diagnostic step that discriminates between the two hypotheses.
- C) Overrule them silently by revoking their access to the load balancer mid-incident.
- D) Allow the restart but note disagreement in the incident record for the review.

**Correct answer: B**

**Explanation:** Leading the investigation means owning the decision layer: hypotheses are welcome from everyone, but actions with blast radius go through the lead. Option B stops the irreversible action before it fires, engages the engineer's evidence rather than their status, and converts disagreement into the next discriminating test. Option A inverts the accountability structure — the incident lead, not the engineer, will own a worsened incident. Option D is accountability theatre, permitting a believed-wrong action while papering the dissent. Option C humiliates a senior colleague mid-crisis and teaches the bridge that disagreement is dangerous. This tests intervening at the right altitude and teaching the team the bridge runs on evidence.

**Question 2 (easy) — Pressure from above during the incident**

Two hours into a citizen-facing outage, a director messages directly: "The minister's office is asking. Tell me it's fixed in 30 minutes." Honest status: a fix is being tested; realistic restoration is 60–90 minutes; a rushed deployment of the untested fix could restore in 20 minutes or could corrupt data and double the outage. What is the most effective response?

- A) Commit to 30 minutes and push the untested fix — the pressure is real and the fix will probably work.
- B) Reply with the honest position, structured for their need: current state, the tested path (60–90 minutes), the rushed path and its data-corruption risk, a recommendation (tested path), and a committed update cadence — then hold the recommendation unless explicitly directed otherwise at the director's own accountability level.
- C) Stop answering the director until the incident is resolved.
- D) Tell the director 60–90 minutes but privately instruct the team to try the rushed fix in parallel, hedging both.

**Correct answer: B**

**Explanation:** Option B meets the legitimate need (something true and useful to send upward) without transmitting the pressure into engineering risk, and keeps the risk decision at the level entitled to make it. Option A makes the incident lead author of an unkept commitment and an unnecessary risk. Option D is the subtle trap — running the risky path without informed authorisation while claiming not to is dishonesty upward plus unauthorised risk, and "in parallel" is false comfort since the rushed fix's failure mode doesn't stay contained. Option C invites escalated interruption. This tests absorbing pressure and returning structure — the incident lead's core upward skill.

**Question 3 (easy) — The health check surfaces something real**

A team's Agile health check returns a sharp drop on "safe to raise problems", with anonymous comments: "mistakes get remembered here" and "when the monitoring gap was found last month, the first question was whose fault it was." That question was asked, intending diagnosis rather than blame. What is the most effective response?

- A) Announce that the health check shows a perception problem and that people should feel safer, effective immediately.
- B) Treat the data as accurate about impact regardless of intent: acknowledge to the team, specifically, that the "whose fault" question landed as blame and that the practice is changing ("what let this happen?" not "who"); change the visible behaviour in the next real incident; and re-check the measure next cycle rather than declaring it fixed.
- C) Investigate the anonymous comments to identify who wrote them so their concerns can be addressed individually.
- D) Quietly stop asking fault-related questions but say nothing, letting behaviour change speak for itself.

**Correct answer: B**

**Explanation:** Option B names the specific behaviour without defending the intent (irrelevant to impact), makes the replacement behaviour public and specific, and defers re-measurement honestly. Option A locates the problem in the team's perception rather than the behaviour. Option C would destroy the survey instrument permanently and confirm the comments' thesis in one stroke. Option D forfeits the acknowledgement that does half the repair work. This tests treating feedback about impact as operational data — a team that hides mistakes is a team whose incidents are learned about late.

**Question 4 (easy) — The runbook test nobody wanted to see**

Three weeks before a major planned migration that depends on the continuity runbook, a scheduled test fails: failover took 26 minutes against a 20-minute abort threshold, and two runbook steps referenced infrastructure that no longer exists. The migration sponsor, hearing a "test issue", says: "We can't slip the date — just note it and we'll fix the runbook after migration." What is the most effective response?

- A) Agree — the runbook is only needed if something goes wrong, and slipping a major date over a test is disproportionate.
- B) Refuse to discuss the date and simply declare the migration blocked.
- C) Separate the findings from the date decision: fix the two stale steps now, re-test the failover to determine whether 26 minutes is capacity drift or one-off, and bring the sponsor a quantified risk position — migration with a runbook proven at X minutes versus the date cost of fixing it — so the go/no-go is made on evidence at the sponsor's accountability level, with a recommendation attached.
- D) Fix the runbook quietly and re-date the test report so the migration paperwork shows a clean pass.

**Correct answer: C**

**Explanation:** The sponsor's framing treats the runbook as migration paperwork; it is the migration's parachute, needed exactly if the migration goes wrong. Option C proceeds with the cheap fixes immediately, gets the discriminating re-test for the ambiguous finding, and returns a quantified choice with a recommendation, respecting that date-versus-risk trade-offs belong to the sponsor while the truth of the information does not. Option A flies without the parachute because unpacking it is inconvenient. Option D is disqualifying — a falsified assurance record. This tests bringing sponsors a re-test and priced options rather than arguing adjectives, since sponsors overrule adjectives but rarely overrule arithmetic they must sign.

**Question 5 (moderate) — Emergency change authority, 02:00, imperfect information**

02:00, on call. A failing certificate will expire at 06:00, taking down the licensing portal's citizen login. The fix is routine in daylight, but the engineer available tonight has never performed it on this system; the specialist who has is unreachable. The emergency change route is available. Rollback is documented but untested for this path. If nothing is done, a guaranteed 4+ hour outage begins at 06:00, into the morning peak. What is the most effective response?

- A) Do nothing until the specialist surfaces — an unpractised change at night is worse than a predictable outage.
- B) Authorise the emergency change now: have the engineer walk the documented procedure with a second pair of eyes on the call, checkpoint by checkpoint, with an explicit pre-agreed stop-and-revert rule at each stage, timed to leave a revert-and-retry window before 06:00; document the risk decision and reasoning in the emergency record as it proceeds.
- C) Authorise the engineer to proceed alone and quickly — process ceremony wastes the hours available.
- D) Wake the head of operations to make the call, since the risk decision exceeds on-call authority.

**Correct answer: B**

**Explanation:** Path one (option A) is a certain multi-hour citizen-facing outage starting at peak, chosen deliberately over a shapeable risk. Option B shapes path two with paired execution, staged stop-and-revert rules agreed before stress arrives, timing that preserves a revert-and-retry window, and contemporaneous documentation — the authority is on-call authority, exercised visibly. Option C strips the controls the four hours exist to fund. Option D up-delegates a decision squarely inside on-call authority, teaching the organisation that authority is decorative. This tests exercising delegated authority with its controls attached rather than either freezing or acting recklessly.

**Question 6 (moderate) — The team lead gaming the change classification**

Reviewing change statistics, one delivery team classifies a suspiciously high share of its changes "low-impact", avoiding CAB review; two of last quarter's majors trace to that team's "low-impact" changes. The team lead, when challenged, is candid: "The CAB adds a week. We're under delivery pressure you don't see, and honestly, most of our changes are fine." What is the most effective response?

- A) Report the team lead to their director for process circumvention with the incident evidence attached.
- B) Tighten enforcement: require personal countersignature on all of that team's classifications until further notice.
- C) Engage both halves of what the lead just said: the classification gaming stops — the two majors are the non-negotiable evidence, and an audit of classifications against criteria will run for a period — and simultaneously take the "CAB adds a week" problem seriously as a process defect: examine whether standard changes, pre-approved patterns, or a faster CAB lane can give compliant changes a quicker path, and involve the lead in designing it.
- D) Accept the explanation — delivery pressure is real and most changes are indeed fine.

**Correct answer: C**

**Explanation:** The lead has handed over a diagnosis wrapped in a confession: the control is evaded because it is expensive, and evasion will migrate to whatever route stays expensive. Option C runs both repairs — enforcement is non-optional given two traced majors, and the process redesign addresses the incentive that generated the evasion, with the lead as co-author of the compliant fast path. Option B is enforcement-only and bottlenecks on the manager. Option A escalates before managing, teaching every team lead to stop being candid. Option D accepts a control failure on a sympathetic explanation the two majors already refute. This tests enforcing the boundary and fixing the incentive together, publicly linked.

**Question 7 (moderate) — What the user data says versus what operations wants**

A proposal from the operations team would consolidate two overnight maintenance windows into one longer monthly window, 01:00–05:00 — operationally cleaner, fewer change collisions, easier staffing. User research shows the affected service has a small but dependent overnight user population: shift workers and carers filing time-sensitive applications, disproportionately vulnerable users, for whom 01:00–05:00 is not dead time. The operations team's view: "It's 2% of traffic. You can't run operations around 2%." What is the most effective response?

- A) Approve the consolidation — 98% of users benefit from the improved stability, and 2% is a rounding error.
- B) Reject the consolidation — vulnerable users must never be affected by maintenance.
- C) Take the research seriously as design input rather than veto: work with the researcher to characterise the 2% (who they are, what they need mid-window, what fails hard versus degrades), then redesign the proposal against those needs — read-only mode, deferred-submission queuing, a shorter hard-outage core inside a longer degraded window, or scheduling against observed overnight troughs — and bring the CAB a version whose user impact is designed, measured and honestly stated.
- D) Approve it but ask the communications team to notify overnight users in advance.

**Correct answer: C**

**Explanation:** The operations team has framed a binary in which 2% loses to staffing convenience, but the research dissolves the binary — once the overnight users' actual need is known, engineering options multiply, most costing days, not the proposal. Option A performs a percentage-of-traffic error where impact-weighting is needed: a failed 03:00 application from a carer with a deadline is not offset by smoother daytime maintenance. Option B is an unpriced "never" that teaches operations to stop sharing research. Option D is notification-as-absolution. This tests treating user research as design input that changes the design, not a factor to override or merely announce around.

**Question 8 (moderate) — A predecessor's paper compliance, discovered**

Newly confident in the role, it becomes apparent that the quarterly asset verification the centre has certified for the past two years was, under a predecessor, largely performative for one datacentre: records "confirmed" without physical or scan verification. A genuine first verification finds 6% of that site's records wrong — including two decommissioned servers still listed as hosting a service's failover capacity. Nothing has yet failed. The certifications carry the centre's name; the predecessor is now a peer in another division. What is the most effective response?

- A) Fix the records quietly going forward; the past certifications are the predecessor's problem and raising them creates noise without benefit.
- B) Correct the records, then disclose the finding through the governance chain: the certifications were unreliable for that site and period, here is the verified current state, here is the control change preventing recurrence, and here is the risk assessment of the two failover-capacity errors — factually, without prosecuting the predecessor.
- C) Report the predecessor to their current division head for historical falsification before doing anything else.
- D) Re-certify the current quarter accurately but leave the historical record untouched and unmentioned.

**Correct answer: B**

**Explanation:** Two questions separate here: the estate (records wrong now, two dangerously so — phantom failover capacity that only reveals itself during an invocation) and the certifications (documents bearing the centre's name that downstream consumers may have relied on). Option B corrects and verifies urgently, then discloses through the proper chain, framed as finding-plus-fix-plus-control-change, without prosecuting a predecessor whose villainy is not the organisational need. Option A converts silence from discovery onward into knowing concealment. Option D is A with better paperwork. Option C leads with the person and defers the estate, and routes to the wrong chain. This tests disclosing a falsified inherited record with a fix attached — the only version that ages well.

**Question 9 (moderate) — The specialist bottleneck during a long-running problem**

A cross-service problem investigation (intermittent authentication timeouts, six weeks running) has stalled: the one identity specialist whose analysis it needs keeps deprioritising it for project work, his project manager protects his time fiercely, and consultation requests get 15-minute fragments that restart from scratch each time. What is the most effective response?

- A) Instruct analysts to keep requesting time and copy a manager into the requests for weight.
- B) Escalate to the specialist's project manager's director, citing the stalled problem record.
- C) Restructure the ask before escalating the priority: package the investigation state into a one-page evidence brief with three specific technical questions, request a single 90-minute working session instead of fragments, and take the priority conflict — project delivery versus a cross-service problem affecting three estates — to the project manager as an explicit trade-off with the incident data attached; escalate jointly only if the trade-off can't be agreed at that level.
- D) Have analysts work around the specialist and attempt the identity analysis themselves from documentation.

**Correct answer: C**

**Explanation:** The 15-minute fragments are an ask-structure problem, not only a time-quantity one — fragmented consultation wastes whatever time is granted. Option C converts the ask from "lend us your specialist indefinitely" into "answer these, once, well", and takes the priority trade-off to the level that owns it, with the fallback of joint escalation. Option A adds weight to a still-broken ask. Option B escalates two levels before the level-one conversation has happened. Option D risks confident wrong fixes on a non-obvious failure mode. This tests restructuring a stalled consultation before escalating its priority.

**Question 10 (challenging) — Least effective: the morning after a misjudgement**

On call the previous night, a decision was made not to invoke the continuity runbook for a degraded storage array, judging the degradation self-limiting — defensible on the information available at 01:30, but a precursor signature the team documented two months ago (and which the decision-maker signed off) was in the monitoring history, unlooked-at. The array failed at 05:00; the delayed failover extended a citizen-facing outage by roughly 40 minutes into the morning peak. The post-incident review is tomorrow, chaired as usual by the same person. Which response would be LEAST effective?

- A) Present the 01:30 decision and its information basis fully in the review, including the missed precursor check, and let the timeline show the 40-minute extension plainly; ask a peer to chair the session given the decision is in scope.
- B) Chair the review as usual, but present the decision with the same evidence standards applied to others, inviting the team to probe it.
- C) Present the decision as sound risk management that simply encountered bad luck, keep the precursor signature out of the timeline as a distracting detail, and focus the review on the storage vendor's firmware defect as root cause.
- D) Before the review, tell a manager directly: the decision, the missed precursor, the 40-minute cost, and the process change proposed (precursor check added to the on-call decision aid).

**Correct answer: C**

**Explanation:** Option A is strongest — full presentation plus handing the chair to a peer, removing the structural conflict of a chair whose own decision is in scope. Option D is strong and complementary. Option B is solid but loses to A only on structure. Option C commits three integrity failures at once: reframing a knowable miss as "bad luck", suppressing the single most learning-dense fact from the timeline, and redirecting root cause to deflect from the unchecked precursor — each compounded by the fact that this person chairs every review, setting the centre's evidence standard by example. This tests recognising that the least effective option at leadership level is often the one that uses the leader's process power to protect the leader, corrupting the process for every future user.

**Question 11 (challenging) — Conflicting duties in the same hour**

09:00 Monday. Three items, one hour, no delegation available until 10:00: (i) the CAB sits at 09:30 to decide a high-impact change with material concerns (thin rollback evidence, not yet in writing) — without input it likely passes on the proposing team's assurances; (ii) a director wants a 09:15 call about Friday's incident, politically hot but operationally closed; (iii) a senior analyst — the one from last month's health check concerns — has asked for twenty minutes "before the day starts, it's important", looking visibly strained. What is the most effective approach?

- A) Director call first (seniority), CAB second, analyst when the schedule clears.
- B) Send written CAB input now (ten minutes: specific rollback concerns and a recommendation to defer pending evidence — written concerns cannot be talked past), take the analyst's twenty minutes at 09:15, and offer the director 10:00 with a written incident summary in the meantime — the closed incident's facts will keep; a strained person who asked for help "before the day starts" may not.
- C) Attend the CAB in person at 09:30 as the priority, asking the analyst to book time this afternoon and the director's office to reschedule.
- D) Take the analyst first for twenty minutes, then join the CAB late, then the director.

**Correct answer: B**

**Explanation:** The three demands differ in transformability, not just importance. The CAB input converts to written form and arguably improves — specific, documented concerns cannot be smoothed over in the room and force a decision against a documented objection if proceeding. The director's need also converts well, since the incident's facts are stable. The analyst's request does not convert — a strained person who timed the ask to their courage rarely gets the same conversation later, and given last month's health check data, this is both a duty of care and operational risk management. This tests triaging by what each demand actually needs — record, information, or presence — rather than by rank or order of asking.

**Question 12 (challenging) — Most and least: the estate-wide morning**

07:50. Overnight, three things happened: (i) a security patch mandated centrally ("apply within 24 hours") failed on 2 of 14 servers, now running unpatched but stable; (ii) the overnight shift, misreading a runbook threshold, escalated a routine batch overrun to the duty engineer at 03:00 unnecessarily — the engineer is publicly irritated in the team channel and the overnight analyst, new, has gone quiet; (iii) monitoring shows the storage precursor signature firing again — controls are in place, the runbook is tested, the reset is scheduled within its threshold. Four candidate first hours:

(1) Personally drive the two failed patch installs to completion, as the central mandate has a deadline and security trumps everything.
(2) Sequence by residual risk: confirm the storage reset is proceeding under its tested control (five minutes — it is), assign patch remediation to the day team with the 24-hour deadline and a check-in, then spend real time on (ii): a public word in the channel reframing the escalation as the runbook ambiguity it was, a private word with the engineer about tone, a private word with the analyst confirming the escalation instinct was right even though the threshold reading was wrong, and a task to fix the ambiguous runbook wording.
(3) Spend the hour on the storage signature personally, since it has preceded a major outage before.
(4) Post a channel message that overnight escalation criteria will be reviewed, and schedule that review for next week.

Which is the MOST effective first hour, and which is the LEAST effective?

- A) Most: (2); Least: (3)
- B) Most: (1); Least: (4)
- C) Most: (2); Least: (4)
- D) Most: (3); Least: (1)

**Correct answer: A**

**Explanation:** The storage signature sounds most alarming but is precisely the item already de-risked — five minutes' confirmation is correct; an hour of personal attention (option 3) re-buys insurance already owned, spending the scarcest resource on the best-controlled risk while two live items wait. The patches carry bounded risk with 22 hours of deadline remaining and are squarely delegable — option (1) confuses the mandate's importance with a need for personal hands. Item (ii) is the most time-critical and least delegable: a new analyst is deciding, this morning, what escalating will cost them next time, and under-escalation cultures are built in exactly these mornings. Option (2)'s three-part repair — public reframe, private tone conversation, private confirmation to the analyst, and the runbook fix — is the full treatment. Option (4) leaves the analyst silent for a week and implicitly blames the criteria. This tests allocating personal attention to the risk only the manager can retire that hour — this morning, a cultural risk, not a technical one.

### Administration tips

- **Score for whether a candidate keeps accountability at its own level** rather than deferring decisions inside their own authority or over-escalating them.
- **Watch for whether a candidate converts pressure into structured communication** rather than transmitting it downward amplified.
- **Note whether a candidate treats a culture-wound scenario (a quiet analyst, a health check dip) with the same urgency as a technical one.**
- **Use most/least items to check whether a candidate rates each option on users, truth, authority-level, and second-order teaching** before ranking.
- **Keep candidates scored to this level's authority map** — what is decided alone, what needs consultation, and what belongs to others.

### Common pitfalls to watch for when scoring

- **Rewarding deference that spends what the candidate is accountable for** — letting seniority or pressure override evidence held.
- **Crediting heroic personal execution of delegable work** over the allocation judgement that is actually the job.
- **Missing when an option resolves tension by making the record say something reality doesn't** — re-dated tests, softened timelines, "bad luck" framings.
- **Treating a culture-wound scenario as a soft item** that can be deferred behind technical work.
- **Rewarding redundant vigilance on an already-controlled risk** as if it were diligence rather than an opportunity cost.

## Conclusion

This document has given you a demanding set of assessment material for the four types most relevant to an operational control manager: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests diagnosing across shared dependencies, sequencing recoveries against binding deadlines, catching the collision hiding in an approved change calendar, and pushing problem investigations past mechanism to root cause. The numeric section tests running burn rates against elapsed time, decomposing blended statistics to find concentrated risk, pricing preventative controls in expected value, reconciling measurements that answer different questions, and recomputing a supplier's headline with its exclusions restored. The verbal section tests holding rule-plus-exception structures whole, keeping "likely cause" from hardening into "cause", reading floors as floors rather than schedules, and narrowing a review's conclusions back to the scope of its evidence. The situational judgement section tests the calls that define the level: stopping a confident senior's irreversible action, converting a director's pressure into decision-grade structure, repairing a team's psychological safety after a health check, holding continuity truth against a sponsor's date, exercising 02:00 authority with its controls attached, and putting one's own misjudgement fully into evidence before a review normally chaired by the same person.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can diagnose across a complex estate, quantify honestly, read governance text precisely, and exercise sound judgement under authority and pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
