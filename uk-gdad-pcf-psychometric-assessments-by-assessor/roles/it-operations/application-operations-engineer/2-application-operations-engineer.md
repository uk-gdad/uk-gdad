# Application Operations Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for application operations engineer in UK government digital and data services. It gives you a structured instrument to present, score and debrief, whether you are running an internal assessment centre or interviewing an external applicant.

Psychometric assessments are structured exercises that measure the thinking skills and judgement a role genuinely requires, not trivia or memory. For this role, the material focuses on the abilities the job relies on: monitoring applications, running and checking batch processes, registering and routing incidents, implementing change requests under change control, investigating problems, keeping asset and configuration information accurate, and supporting the users who depend on the service. Job-specific material like this is used because it is fairer and more predictive of real performance than a generic aptitude test.

This document is organised into four assessment sections, each matched to the role:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and fault diagnosis using the artefacts the role handles daily: batch schedules, monitoring dashboards, configuration records, and test scripts.
2. **Workplace job-specific numeric reasoning assessment** — interpreting the numbers of application operations: availability percentages, capacity figures, incident volumes, batch run times, licence counts, and KPIs.
3. **Workplace job-specific verbal reasoning assessment** — reading and drawing accurate conclusions from the written material of the job: change control procedures, service management policies, incident reports, and user emails.
4. **Workplace job-specific situational judgement assessment** — realistic workplace dilemmas involving incidents, changes, users, security administration, and colleagues in service management.

Each section explains what the assessment measures, maps it to the specific skills in the role profile, then gives a generous set of items with full worked answers for you to use as an answer key, followed by administration notes and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate you assess at this role level. Hold the correct answers and explanations back until the candidate has responded — they are your scoring key, not preparation material. Let the candidate work through each section without interruption, and note anything unusual about the conditions so your record is honest. Afterwards, use the explanations to structure a debrief: what a strong answer looked like, and why. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Unlike a generic intelligence test, every item is built from the kinds of data and artefacts an application operations engineer really handles: batch schedules, monitoring alerts, configuration baselines, incident queues, access permission matrices, and test scripts.

The typical format is an online, timed test of 15 to 30 minutes, with short scenario-based questions. Results are usually compared against a benchmark group of people doing similar work, and modern platforms often report speed and accuracy separately rather than as a single score. Some platforms adapt item difficulty as the candidate goes, so increasing difficulty can be a sign of strong performance rather than struggle. Candidates are normally offered a few ungraded practice questions first to get used to the interface — worth letting them take these before the timed section begins.

For this role, cognitive ability matters because application operations is fundamentally a diagnostic discipline. When an overnight batch fails, when a monitoring dashboard shows an unusual pattern, or when a configuration record contradicts what is visible on the server, the engineer must reason quickly and accurately from incomplete information. Strong performance on this section signals that a candidate can spot the anomaly, deduce the cause, check for errors methodically, and decide what to do first.

### What it measures for the role

The assessment dimensions map directly onto the skills in the role profile:

- **Pattern recognition and fault diagnosis** support the duty to monitor applications and be accountable for batch processes, and the **problem management** skill: investigating problems in systems, processes and services, and understanding whether a problem is strategic, tactical or operational.
- **Error checking** supports the **asset and configuration management** skill: maintaining secure configuration and accurate information, controlling IT assets, and verifying the location and state of IT assets. Spotting a mismatch between a configuration record and reality is classic error-checking work.
- **Logical deduction** supports the **incident management** skill (identifying and registering incidents, gathering the required information and allocating it to the appropriate channel) and the **change management** skill (implementing change requests and applying change control procedures under supervision), both of which require following rule-based procedures precisely.
- **Prioritisation and problem solving** support the **ownership** skill — owning an issue until a new owner is found or the problem is mitigated or resolved — and the **availability and capacity management** skill, where service components are managed against business needs and KPIs.
- **Procedural reasoning** supports the **testing** skill (correctly executing test scripts under supervision and understanding the role of testing) and **service management framework knowledge**, since framework processes are essentially logical sequences.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Batch sequence pattern**

An overnight batch schedule runs jobs in a fixed dependency order: EXTRACT runs first, then VALIDATE, then TRANSFORM, then LOAD, then REPORT. Each job starts only when the previous job completes successfully. This morning the run log shows: EXTRACT completed 01:10, VALIDATE completed 01:35, TRANSFORM completed 02:20, REPORT completed 03:05. LOAD does not appear in the log at all.

Which of the following is the most logically sound conclusion?

- A) LOAD ran successfully but was not logged.
- B) The log is inconsistent with the stated dependency rules, so either the rules were not enforced or the log is incomplete or corrupted.
- C) REPORT must have failed.
- D) TRANSFORM ran twice.

**Correct answer: B.**

**Explanation:** The dependency rule says REPORT starts only when LOAD completes successfully. REPORT completed at 03:05, so under the rules LOAD must have completed before it — yet LOAD is absent from the log. Option A cannot be concluded safely, because an equally valid possibility is that the dependency enforcement was misconfigured and REPORT ran without LOAD. The only safe deduction is B: the evidence contradicts the stated rules, so something is wrong with either the enforcement or the log. Options C and D introduce claims the log does not support. This item tests whether a candidate would flag exactly this moment for investigation rather than assume the friendlier explanation — real operations depend on that instinct.

**Question 2 (easy) — Error checking a configuration record**

A candidate is verifying the state of IT assets. The configuration management database (CMDB) record for server APP-SVR-014 reads:

- Hostname: APP-SVR-014
- Operating system: Linux, version 8.6
- Application: CaseTrack v3.2.1
- Environment: Production
- Last patch date: 2026-05-14
- Owner team: Application Operations

The live server reports: hostname APP-SVR-014, OS Linux 8.6, CaseTrack v3.4.0, environment Production, last patch 2026-07-02.

How many fields in the CMDB record are inaccurate compared with the live server?

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B.**

**Explanation:** Comparing field by field: hostname matches; OS version matches (8.6 in both); application version differs (CMDB v3.2.1, live v3.4.0) — one discrepancy; environment matches; last patch date differs (2026-05-14 versus 2026-07-02) — a second discrepancy; owner team is not reported by the live server, so it cannot be judged inaccurate. Two fields are wrong, so B. This is precisely the "verify the location and state of IT assets" duty within the asset and configuration management skill — a candidate should compare careful, one field at a time, rather than letting the fields that match encourage skimming the rest.

**Question 3 (moderate) — Logical deduction from access rules**

A user administration procedure states: (1) A user may hold the Approver role only if they also hold the Caseworker role. (2) No user may hold both the Approver role and the Auditor role. (3) Every member of the Finance team holds the Auditor role.

Priya is a member of the Finance team. Which statement must be true?

- A) Priya holds the Caseworker role.
- B) Priya does not hold the Approver role.
- C) Priya holds only the Auditor role.
- D) Priya holds the Approver role but not the Auditor role.

**Correct answer: B.**

**Explanation:** From rule 3, Priya holds the Auditor role. From rule 2, no one holds both Approver and Auditor, so Priya cannot hold Approver — statement B must be true. Statement A is not forced: the rules only say Approver requires Caseworker; since Priya is not an Approver, nothing requires her to be a Caseworker. Statement C goes too far — she might hold Caseworker or other roles in addition to Auditor. Statement D directly contradicts rules 2 and 3. This mirrors the security administration the role is responsible for: role-based access rules behave exactly like logical premises, and this item tests whether the candidate draws only the deductions the rules force, not the ones they merely allow.

**Question 4 (moderate) — Monitoring pattern recognition**

An application monitoring dashboard shows the number of failed login attempts per hour over eight consecutive hours: 12, 11, 13, 12, 48, 51, 47, 12.

Which description best characterises this pattern?

- A) A steady upward trend across all eight hours.
- B) Random variation with no meaningful signal.
- C) A stable baseline of about 12 per hour, a sustained spike of roughly four times the baseline for three hours, then a return to baseline.
- D) A gradual decline interrupted by one outlier.

**Correct answer: C.**

**Explanation:** Hours one to four cluster tightly around 12 — a stable baseline. Hours five to seven jump to the high 40s and low 50s, roughly four times the baseline, and stay there for three consecutive hours — a sustained spike, not a single outlier. Hour eight returns to 12. That is exactly option C. Option A fails because the values fall back at the end; option B fails because the spike is far too consistent to be noise; option D misreads three elevated hours as one outlier. Recognising "sustained spike then return to baseline" matters for the monitoring duty because it suggests a time-bounded event — perhaps a credential-stuffing attempt or a misconfigured client — worth registering as an incident with the time window already identified.

**Question 5 (moderate) — Prioritisation of the morning queue**

A candidate arrives at 09:00 and finds four items waiting. The service's core hours begin at 09:30.

1. The overnight payments batch failed at step 3 of 7; downstream teams need its output by 11:00.
2. A user emails asking for a new starter's account to be created by Friday (today is Tuesday).
3. Monitoring shows disk usage on the production database server at 97% and climbing.
4. A colleague asks the candidate to re-run a test script in the test environment for a change scheduled next week.

Which order of attention is most defensible?

- A) 1, 2, 3, 4
- B) 3, 1, 2, 4
- C) 2, 4, 1, 3
- D) 4, 3, 1, 2

**Correct answer: B.**

**Explanation:** Item 3 is most urgent: a production database at 97% disk and climbing risks a full service outage affecting everything else, including any batch re-run — if the disk fills, item 1 may become unfixable. Item 1 comes next: it has a hard 11:00 deadline, but the service is not yet down. Item 2 has days of slack. Item 4 concerns next week's change and sits last. Option B orders by genuine impact and urgency; options A and C treat deadline proximity or arrival order as the only signal; option D puts routine test support ahead of a production risk. This is availability and capacity management thinking: protect the service first, then meet commitments, then handle routine requests.

**Question 6 (moderate) — Change control procedure logic**

A change control procedure, applied under supervision, states: "A standard change may be implemented without Change Advisory Board (CAB) review only if it is pre-approved, documented in the standard change catalogue, and has a tested rollback plan. All other changes require CAB review before implementation."

A candidate is asked to implement a change that is pre-approved and has a tested rollback plan, but does not appear in the standard change catalogue. What does the procedure require?

- A) Implement it, because it meets two of the three conditions.
- B) Implement it, because pre-approval overrides the catalogue requirement.
- C) Send it for CAB review before implementation.
- D) Add it to the catalogue personally and then implement it.

**Correct answer: C.**

**Explanation:** The exemption from CAB review requires all three conditions joined by "and": pre-approved, in the catalogue, and tested rollback. Missing any one condition means the change is "other", and the procedure says all other changes require CAB review. Two out of three is not enough (A), nothing in the wording makes pre-approval override the catalogue condition (B), and adding it to the catalogue unilaterally (D) is not a step the procedure gives — and for someone applying change control under supervision, amending the catalogue independently would exceed their authority. Reading conjunctions ("and", "only if") precisely is the heart of applying change control procedures correctly, and a candidate's handling of this item is a good signal of whether they would respect that boundary on the job.

**Question 7 (moderate) — Fault diagnosis by elimination**

Users of the grants application report that document uploads fail with a timeout. A candidate establishes these facts:

- Uploads fail from both the office network and remote connections.
- Downloads of existing documents work normally.
- The upload service writes files to a storage volume; monitoring shows the volume is healthy with 60% free space.
- The virus-scanning service, which every upload must pass through before storage, last reported a heartbeat 6 hours ago; its normal heartbeat interval is 5 minutes.
- No change was implemented on the network in the last week.

Which component is the most probable cause?

- A) The office network.
- B) The storage volume.
- C) The virus-scanning service.
- D) The download service.

**Correct answer: C.**

**Explanation:** Working by elimination: failures occur from both office and remote networks, so a single network is unlikely (A), and no network change was made. The storage volume is healthy with ample space (B eliminated). Downloads work, so the download path is fine and irrelevant to uploads anyway (D). The virus scanner sits in the upload path specifically — matching the symptom that only uploads fail — and its heartbeat is 72 intervals overdue, strong evidence it is down or hung. Uploads waiting on a dead scanner would time out exactly as reported. This item rewards the disciplined move of correlating the symptom's scope with the components unique to that path — core problem management investigation at the operational level.

**Question 8 (challenging) — Batch window arithmetic and logic**

Three batch jobs must all complete within a maintenance window that runs from 01:00 to 06:00. Job A takes 90 minutes. Job B takes 2 hours and must start only after A finishes. Job C takes 75 minutes, can run in parallel with anything, but must finish before B starts because it locks a table B needs released.

What is the latest time Job C can start?

- A) 01:00
- B) 01:15
- C) 02:30
- D) 03:25

**Correct answer: B.**

**Explanation:** A dependency-triggered scheduler starts each job the moment its predecessor finishes, so B fires as soon as A completes: A starts at 01:00 and finishes at 02:30, so B starts at 02:30. C must finish before B starts, so C must finish by 02:30, and 02:30 minus 75 minutes gives a latest start of 01:15 — option B. The lesson is that a candidate must apply the scheduler's actual behaviour — jobs firing the instant a predecessor completes — rather than an idealised one where jobs wait politely. Under that realistic assumption, C starting later than 01:15 would still hold its lock when B fires, and B would fail. This item rewards candidates who reason from how the scheduler actually behaves, exactly the judgement needed when accountable for batch processes.

**Question 9 (challenging) — Deduction across incident records**

Four incidents were raised today against the licensing application. The incident channel rules say: performance incidents go to the Capacity queue, security incidents go to the Security queue, data-quality incidents go to the Data queue, and anything affecting more than 50 users is also flagged "major".

- INC-201: "Screens taking 30+ seconds to load for the whole licensing team (80 users)."
- INC-202: "One user reports another user can see records outside their permission group."
- INC-203: "Report totals do not match source records for yesterday's applications."
- INC-204: "Twelve users report slow searches since 14:00."

Which incident should be routed to the Security queue, and which incidents should be flagged "major"?

- A) INC-202 to Security; INC-201 flagged major.
- B) INC-202 to Security; INC-201 and INC-204 flagged major.
- C) INC-203 to Security; INC-201 flagged major.
- D) INC-201 to Security; INC-202 flagged major.

**Correct answer: A.**

**Explanation:** INC-202 describes a user seeing records outside their permission group — an access-control failure, which is a security matter, so it routes to Security. INC-201 affects 80 users, exceeding the 50-user threshold, so it is flagged major; it is a performance incident (Capacity queue) as well. INC-204 affects only 12 users, so it is not major, eliminating B. INC-203 is a data-quality issue, not security, eliminating C. Option D reverses the classifications. This item exercises the incident management skill directly: gathering the required information (symptom type, user count) and allocating each incident to the appropriate channel by applying the routing rules mechanically and completely.

**Question 10 (challenging) — Test script logic**

A test script being executed under supervision contains these steps:

1. Log in as the test user.
2. If login succeeds, create a draft case; otherwise record failure and stop.
3. Submit the draft case.
4. If submission returns confirmation code "OK-100", mark the test passed; if it returns any other code, mark the test failed; if it returns no code within 60 seconds, repeat step 3 once.
5. If the repeated submission also returns no code, mark the test blocked.

The candidate runs the script. Login succeeds, the draft is created, the first submission returns no code within 60 seconds, and the second submission returns code "ERR-207". What is the correct test outcome?

- A) Passed
- B) Failed
- C) Blocked
- D) Stopped at step 2

**Correct answer: B.**

**Explanation:** Following the branches exactly: login succeeded, so step 2's failure branch is not taken (eliminating D). The first submission timed out with no code, so step 4 directs one repeat of step 3. The repeated submission returned a code — "ERR-207" — so step 5's "also returns no code" condition is not met, eliminating C. Step 4's rule applies to the returned code: anything other than "OK-100" means failed, and "ERR-207" is not "OK-100", so the test is failed, option B. This item tests whether a candidate honours the branch conditions as written even when a mid-run timeout tempts a premature "blocked" verdict — recording the accurate outcome, with the error code noted, gives a supervising tester exactly the evidence they need.

**Question 11 (challenging) — Root cause versus symptom**

Over three weeks a candidate observes: (week 1) the reporting batch overran its window twice; (week 2) it overran three times, and the input file sizes had grown about 20% since week 1; (week 3) it overran every night, input files grew a further 25%, and a database administrator mentions that an index on the main reporting table was dropped during maintenance three weeks ago and never recreated.

Which conclusion best distinguishes root cause from contributing factor?

- A) Growing input files are the root cause; the missing index is irrelevant.
- B) The missing index is the likely root cause of the sudden change; growing input volumes are a contributing factor that worsens the effect over time.
- C) The batch window is the root cause because it is too short.
- D) There is no way to distinguish cause from symptom without more data.

**Correct answer: B.**

**Explanation:** The timeline is the key evidence: the overruns began in the same period the index was dropped — a discrete change that plausibly explains a sudden step-change in performance, since a missing index forces slower scans. File growth of 20-25% is real but gradual, and on its own would be unlikely to turn a comfortably fitting batch into one that overruns nightly within three weeks — it amplifies the underlying problem rather than originating it. Option A ignores the suspicious coincidence of timing. Option C confuses a constraint with a cause. Option D is too pessimistic: certainty is not available, but "likely root cause plus contributing factor" is a sound working hypothesis to test, for example by recreating the index and comparing run times. This is the essence of the problem management skill: investigating at the operational level and contributing to remedies and preventative measures.

**Question 12 (challenging) — Prioritising under ownership**

A candidate owns an unresolved issue: intermittent errors in the permits application that they have mitigated with a temporary workaround. Today three things happen at once: (1) the workaround stops working and errors resume for about 30 users; (2) the problem manager asks the candidate for a written status update by end of day; (3) a fix from the supplier arrives, but applying it is a change that requires CAB approval, and the next CAB meets tomorrow morning.

Which action sequence best honours both the candidate's ownership duty and change control?

- A) Apply the supplier fix immediately since it addresses the root cause, then tell the CAB afterwards.
- B) Attempt to restore or adjust the workaround to re-mitigate the live impact, register the recurrence through incident management, submit the supplier fix to tomorrow's CAB (or request an emergency change if impact justifies it), and send the problem manager the status update.
- C) Send the status update first because it has a defined deadline, then look at the workaround.
- D) Hand the whole issue to the problem manager since a supplier fix now exists.

**Correct answer: B.**

**Explanation:** Option B does everything in defensible order: it treats live user impact as the first priority, respects the incident process by registering the recurrence, respects change control by routing the fix through CAB (or the emergency route, a judgement to raise with a supervisor since change control is applied under supervision), and still meets the reporting deadline. Option A violates change control by applying an unapproved change to production, however well-intentioned. Option C puts paperwork ahead of 30 users experiencing live errors. Option D abandons ownership — the skill definition is owning an issue until a new owner is found or the problem is mitigated or resolved, and a supplier fix existing is neither. Note that B also gives the problem manager a much better status update: recurrence registered, mitigation restored, fix scheduled through CAB — worth pointing out at debrief if a candidate reaches B by a different route.

**Question 13 (challenging) — Spotting the inconsistent record set**

A candidate is reconciling licence allocations. The asset register says 120 licences are owned for the CaseTrack application. The user administration system shows 108 active accounts and 20 disabled accounts. The vendor portal shows 115 licences consumed. The licensing rule is: every active account consumes one licence; disabled accounts consume none.

Which single statement is best supported?

- A) The organisation is within its licence entitlement and all systems agree.
- B) The vendor's consumption figure (115) cannot be reconciled with the account data (108 active), so at least one system's data is wrong or the licensing rule is not being applied as stated — and this must be investigated even though 115 is still within the 120 owned.
- C) The organisation has exceeded its licence entitlement.
- D) The 20 disabled accounts explain the difference between 108 and 115.

**Correct answer: B.**

**Explanation:** Applying the rule: 108 active accounts should consume exactly 108 licences. The vendor reports 115 consumed — 7 more than the rule predicts — so the systems do not agree (eliminating A), even though consumption is still under entitlement (eliminating C). Option D fails because the rule says disabled accounts consume nothing, so they cannot legitimately explain the gap — if disabled accounts are consuming licences, that is itself a rule violation to investigate. B captures the correct professional conclusion: no compliance breach today, but a data integrity discrepancy that the asset and configuration management skill obliges the role to chase down before it becomes a costly audit finding. The 7-licence gap could mean orphaned accounts, a vendor sync fault, or accounts created outside the standard process.

### Administration tips

- **Let the candidate see the format of the artefacts beforehand**, if your organisation has anonymised sample logs or CMDB extracts, so the format itself is not the barrier.
- **Score deduction items against the rule as written.** The most common error is a plausible-sounding answer that adds an assumption the rule does not support — mark accordingly.
- **Watch for elimination method on the harder items.** A candidate who visibly rules out options one by one is showing the diagnostic habit the job needs, independent of whether they land on the correct answer every time.
- **Keep timing consistent** across candidates at this level, and let the candidate use any ungraded warm-up items before the timed section starts.
- **Debrief using the explanations**, especially the "under supervision" items — a candidate who chooses to escalate or consult rather than act unilaterally is showing a strength worth noting explicitly, not a weakness to mark down.

### Common pitfalls to watch for when scoring

- **Answering from plausible experience rather than the given facts.** These items deliberately include "sounds right but isn't stated" traps, and a pattern of falling for them is informative.
- **Skimming data that mostly matches.** As in the CMDB item, a candidate who stops checking once several fields agree is scored on the discrepancies missed, not the matches found.
- **Losing the dependency thread** in sequence and scheduling items — checking each constraint once but not the interactions between them.
- **Spending too long on one hard multi-stage item** at the expense of several easy ones — the classic self-inflicted wound in timed tests, worth factoring into your read of the overall score.
- **Missing the authority boundary.** Some items test whether a candidate knows the limits of their authority; choosing to escalate or consult is the correct, stronger answer, not a weaker one.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from operational data at a steady pace. For an application operations engineer, the data is what the job looks at daily: batch run times and record counts, incident volumes and priorities, availability figures, disk and capacity headroom, and licence and asset counts.

The format is typically fifteen to twenty-five minutes with a calculator permitted, presenting tables followed by multiple-choice items. The arithmetic is not advanced; the challenge is doing it accurately under time pressure and reading the qualifiers correctly.

Three habits matter particularly for this role, and are worth watching for as you score.

The first is converting availability percentages into minutes instantly — knowing that a 99.9% target allows about 43 minutes a month before saying whether a maintenance window fits.

The second is that batch processing arithmetic can be checked before it goes wrong: records divided by throughput gives elapsed time, and comparing that against the window is a two-minute calculation that prevents a great many overnight failures.

The third is that a count and a rate answer different questions. More incidents this month may mean things got worse, or may mean more transactions were processed — and normalising before comparing separates a useful observation from a misleading one.

### What it measures for the role

- **Availability arithmetic** maps to **Availability and capacity management**.
- **Batch and throughput calculations** map to being accountable for batch processes.
- **Incident volumes and priorities** map to **Incident management**.
- **Capacity headroom** maps to monitoring applications.
- **Asset and licence counts** map to **Asset and configuration management**.
- **Reporting figures accurately** maps to **Service focus** and **Communicating information**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

*Table 1 — Overnight batch jobs, typical run*

| Job | Records | Throughput (records/second) | Window start | Window end |
|---|---|---|---|---|
| Extract | 1,200,000 | 900 | 22:00 | 23:00 |
| Validate | 1,200,000 | 400 | 23:00 | 02:00 |
| Load | 1,180,000 | 250 | 02:00 | 04:00 |
| Reconcile | 1,180,000 | 1,500 | 04:00 | 04:30 |

**Question 1 (easy) — Reading a table**

How long does the Extract job take at the stated throughput?

- A) About 22 minutes
- B) About 45 minutes
- C) About 1 hour 20 minutes
- D) About 13 minutes

**Correct answer: A**

**Explanation:** 1,200,000 / 900 = 1,333 seconds, which is 22.2 minutes, against a full hour window — comfortable headroom. Converting record counts and throughput into elapsed minutes is the single most useful piece of arithmetic in batch operations, and a candidate who reaches for it automatically is showing a genuinely useful habit.

**Question 2 (easy) — A job against its window**

Does the Validate job fit its window?

- A) Yes, with about 10 minutes to spare
- B) Yes, comfortably
- C) No, it overruns by about 20 minutes
- D) It exactly fills the window

**Correct answer: B**

**Explanation:** 1,200,000 / 400 = 3,000 seconds = 50 minutes, against a three-hour window from 23:00 to 02:00 — more than three times what the job needs. That headroom is worth a candidate noticing rather than glossing over, since a job with that much slack is a good candidate for absorbing a delay elsewhere in the chain.

**Question 3 (moderate) — The tight one**

Which job has the least headroom in its window?

- A) Extract
- B) Validate
- C) Load
- D) Reconcile

**Correct answer: C**

**Explanation:** Extract: 22 minutes in 60, using 37%. Validate: 50 minutes in 180, using 28%. Load: 1,180,000 / 250 = 4,720 seconds = 78.7 minutes, in a 120-minute window, using 66%. Reconcile: 1,180,000 / 1,500 = 787 seconds = 13.1 minutes in 30, using 44%. Load is tightest at 66% of its window — the job to watch as volumes grow, and the calculation tells a candidate that before an overnight failure does.

**Question 4 (moderate) — Growth headroom**

By approximately what percentage could record volume grow before the Load job overruns its window?

- A) About 20%
- B) About 50%
- C) About 34%
- D) About 66%

**Correct answer: B**

**Explanation:** Load currently takes 78.7 minutes in a 120-minute window. It can grow to 120 minutes, which is 120 / 78.7 = 1.525, about a 52% increase in volume before it overruns — roughly 50%. Answering "how much growth can this absorb" is far more useful than "does it fit today", since it tells someone when to act rather than that they already should have — a candidate who reaches this framing unprompted is showing genuine operational maturity.

**Question 5 (moderate) — Total chain time**

If all four jobs ran back to back with no gaps, how long would the chain take?

- A) About 2 hours 44 minutes
- B) About 3 hours 30 minutes
- C) About 2 hours 10 minutes
- D) About 4 hours

**Correct answer: A**

**Explanation:** 22.2 + 50 + 78.7 + 13.1 = 164 minutes, which is 2 hours 44 minutes. The scheduled windows span 22:00 to 04:30, six and a half hours, so the chain uses about 42% of the available time. That slack is what absorbs a slow night, and knowing the figure tells a candidate how much of a delay the chain can survive before it starts eating into the morning.

*Table 2 — Incidents, last three months*

| Month | Transactions processed | P1 | P2 | P3 | P4 |
|---|---|---|---|---|---|
| July | 410,000 | 1 | 6 | 34 | 71 |
| August | 520,000 | 2 | 9 | 41 | 88 |
| September | 480,000 | 1 | 5 | 38 | 79 |

**Question 6 (easy) — Total incidents**

How many incidents were raised in August?

- A) 140
- B) 129
- C) 112
- D) 98

**Correct answer: A**

**Explanation:** 2 + 9 + 41 + 88 = 140, the highest raw count of the three months — worth establishing before any comparison, which the next item puts in context.

**Question 7 (moderate) — Normalising by volume**

Which month had the highest incident rate per 10,000 transactions?

- A) July
- B) August
- C) September
- D) They are equal

**Correct answer: A**

**Explanation:** July: 112 incidents / 410,000 × 10,000 = 2.73. August: 140 / 520,000 × 10,000 = 2.69. September: 123 / 480,000 × 10,000 = 2.56. July is highest, narrowly, and August — which had the most incidents in raw terms — is actually slightly better than July once volume is accounted for. This item tests whether a candidate normalises before comparing months of different volume, since comparing raw counts alone rewards quiet months and penalises busy ones.

**Question 8 (moderate) — Severity mix**

What proportion of September's incidents were P1 or P2?

- A) About 4.9%
- B) About 7.9%
- C) About 12%
- D) About 2.4%

**Correct answer: A**

**Explanation:** September had 1 + 5 = 6 high-priority incidents out of 123 total, which is 4.9%. Tracking the severity mix rather than just the total is useful, because a stable total with a rising proportion of P1s and P2s is a service getting worse while its headline number stays flat — a distinction worth probing at debrief if a candidate only reports the raw total.

**Question 9 (harder) — Availability in minutes**

A service has a 99.9% monthly availability target. How much downtime does that allow in a 30-day month, and does a planned 90-minute maintenance window fit?

- A) About 43 minutes, so a 90-minute window does not fit within the target
- B) About 43 minutes, and the window fits
- C) About 72 minutes, so the window does not fit
- D) About 22 minutes, so the window does not fit

**Correct answer: A**

**Explanation:** A 30-day month is 43,200 minutes, and 0.1% of that is 43.2 minutes. A 90-minute maintenance window is more than double the entire monthly allowance, so unless planned maintenance is excluded from the availability calculation — worth the candidate asking explicitly — the service cannot take that window and hit its target. A useful figure for the candidate to have committed to memory: 99.9% ≈ 43 minutes a month, 99.95% ≈ 22, 99.99% ≈ 4.3.

**Question 10 (harder) — Disk headroom**

A filesystem is 68% full at 340 GB used. It grows by about 4 GB a week. Roughly how long until it reaches 90%?

- A) About 7 weeks
- B) About 27 weeks
- C) About 14 weeks
- D) About 3 weeks

**Correct answer: B**

**Explanation:** If 340 GB is 68%, total capacity is 340 / 0.68 = 500 GB. 90% of 500 is 450 GB, so there is 110 GB of growth available. At 4 GB a week that is 27.5 weeks, about 27. The step most candidates skip is deriving total capacity from the percentage and the absolute figure — once that is in hand, the rest is straightforward, and "about six months" is far more actionable to report than "it's getting full".

**Question 11 (harder) — A change in run time**

The Load job's run time has increased from 79 minutes to 96 minutes over three months, while record volume rose from 1,180,000 to 1,240,000. What is the strongest observation?

- A) The increase is explained by the extra volume.
- B) Volume rose about 5% while run time rose about 22%, so throughput has fallen — the job is now processing about 215 records a second against 250 — and something other than volume has changed.
- C) The job is approaching its window limit.
- D) The job needs more resource.

**Correct answer: B**

**Explanation:** Volume: 1,240,000 / 1,180,000 = 1.051, a 5% rise. Run time: 96 / 79 = 1.215, a 22% rise. If throughput were unchanged, a 5% volume rise would give roughly a 5% time rise. Actual throughput is 1,240,000 / (96 × 60) = 215 records a second, down from 250, so the job has genuinely slowed — an index, a growing table, contention, or a resource constraint — and option A's explanation does not survive the arithmetic. Option C is true and secondary; option D prescribes before diagnosing, which this item is designed to catch.

**Question 12 (harder) — Licence counts**

An application has 340 named user licences. 312 are assigned. Of those, 47 belong to users who have not logged in for over 90 days. What is the strongest statement?

- A) There are 28 licences available.
- B) There are 28 unassigned licences, and a further 47 assigned to dormant accounts — so up to 75 could be available if the dormant accounts are genuinely no longer needed, which is worth confirming before reclaiming them.
- C) 75 licences are available.
- D) The service needs more licences.

**Correct answer: B**

**Explanation:** 340 − 312 = 28 genuinely unassigned. The 47 dormant accounts are assigned and may belong to people on long-term leave, secondment, or seasonal roles, so they are candidates for reclamation rather than available licences. Option B distinguishes the two correctly and names the check; option C treats candidates as available, which is how someone returns from six months' leave to find their access removed. This distinction between "unused" and "reclaimable" is core to **Asset and configuration management**, and a candidate who draws it unprompted is showing real command of the skill.

**Question 13 (harder) — A reported figure that needs a qualifier**

A candidate is asked for last month's availability. The service was down for 38 minutes unplanned and 90 minutes for notified planned maintenance. What is the most accurate response?

- A) 99.91% availability, counting unplanned downtime only, with the 90 minutes of planned maintenance stated separately — because whether planned maintenance counts against the target depends on the agreement, and reporting a single number without saying which convention was used is how figures get disputed.
- B) 99.70%, counting all downtime.
- C) 99.91%.
- D) 99.91% or 99.70% depending on the convention.

**Correct answer: A**

**Explanation:** Unplanned only: 38 / 43,200 = 0.088%, so 99.91%. All downtime: 128 / 43,200 = 0.296%, so 99.70%. Both are correct arithmetic under different conventions, and option A states the figure with the convention named and the other component visible, which is what makes it usable. Option D identifies the ambiguity without resolving it, leaving the requester to choose. Options B and C each pick a convention silently, which is exactly how two people end up quoting different availability figures for the same month — this item tests whether a candidate would surface that ambiguity rather than hide it.

### Administration tips

- **Allow a calculator and rough working.** This section measures method, not mental arithmetic speed.
- **Watch specifically for the normalising and weighted-figure traps** — comparing raw incident counts across months, or averaging percentages from different-sized groups — since both appear constantly in real operations reporting.
- **Score partial working where visible.** A candidate who divides by the wrong base but shows their steps is easier to coach than one whose answer is simply wrong.
- **Debrief with the team's real reports if you can**, showing how these calculations appear in an actual monthly report.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Comparing raw incident counts across months of different volume**, rather than normalising first.
- **Assuming a longer run time is fully explained by more records**, without checking whether throughput itself has changed.
- **Reporting availability without stating whether planned maintenance is included.**
- **Treating dormant licences as straightforwardly available.**
- **Checking that a batch job fits today without checking how much growth it can absorb.**
- **Reading a filesystem percentage without working out the absolute headroom behind it.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. For an application operations engineer, the material is runbooks and knowledge articles, incident and change policy, service level agreements, security administration standards, and vendor documentation for the applications supported.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means it settles neither — regardless of what the candidate happens to know from running a similar system.

A candidate's own familiarity with how applications like this behave is the main hazard in this section. They may know how a system normally behaves and what a team normally does, while the passage in front of them describes what a document actually says — and in a real incident at 3am, the document is what someone else will be following.

Three specifics matter particularly for this role, and are worth watching for as you score.

The first is that priority definitions usually combine impact and urgency, and reading one as the whole is the commonest source of misclassification.

The second is that change policy allocates authority narrowly: who may implement what, in which circumstances, and what must be recorded. This role includes user and security administration, where acting outside the stated authority is a governance matter rather than a technical one.

The third is that runbooks are written to be followed under pressure by someone who may not be the author. Reading one for exactly what it covers — and noticing where it stops — is a skill used both as a reader and as an author of such documents.

### What it measures for the role

- **Reading incident policy precisely** maps to **Incident management**.
- **Reading change policy** maps to **Change management**.
- **Reading service level agreements** maps to **Service focus** and **Availability and capacity management**.
- **Reading security administration standards** maps to the role's user and security administration duties.
- **Reading runbooks and knowledge articles** maps to **Technical specialism** and **Service management framework knowledge**.
- **Reading and recording accurately** maps to **Asset and configuration management**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

*Passage A — for Questions 1 to 4*

"Incident priority is determined by impact and urgency. Priority 1 requires both high impact and high urgency. Response targets run from the time an incident is logged, not from the time it is reported. Resolution targets are suspended while an incident awaits information from the user and resume when the information is provided. A workaround that restores the user's ability to work is treated as a resolution for target purposes; the underlying fault is managed as a problem. Only the incident manager may change an incident's priority after it has been assigned, and must record the reason."

**Question 1 (easy)**

Statement: An incident with high impact and low urgency is Priority 1.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: Priority 1 "requires both high impact and high urgency". A conjunctive definition is not satisfied by one half. A batch failure affecting a whole department's reporting, which nobody needs until month-end, has high impact and low urgency, and it is not Priority 1, however loudly it is reported.

**Question 2 (moderate)**

Statement: A candidate can raise an incident's priority if the user tells them it is more urgent than first assessed.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states that "only the incident manager may change an incident's priority after it has been assigned". So whatever the user reports, the reassignment is not the engineer's to make — the correct action is to pass the new information to the incident manager. This is precisely the sort of authority boundary that is easy to cross with good intentions under pressure from a user, and a candidate's answer here is a useful signal about that discipline.

**Question 3 (moderate)**

Statement: Time spent waiting for a user to provide information counts against the resolution target.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: resolution targets "are suspended while an incident awaits information from the user and resume when the information is provided". The suspension exists to exclude exactly that time. Worth noting operationally: this is a legitimate provision and also a route by which a service can meet its targets while a user waits a long time in real terms, so a target-met figure and the user's experience can diverge considerably.

**Question 4 (harder)**

Statement: An incident resolved by a workaround has been fixed.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage draws the distinction explicitly: a workaround "is treated as a resolution for target purposes; the underlying fault is managed as a problem". So the incident is closed against target and the fault persists — treated, not fixed. Holding this distinction is what stops a service reporting strong resolution figures while the same fault generates incidents indefinitely, which is why problem management exists as a separate discipline.

*Passage B — for Questions 5 to 8*

"Standard changes are pre-approved and may be implemented by any authorised engineer without further approval, provided they are recorded within one working day. Normal changes require approval by the change advisory board, which meets weekly. Emergency changes may be implemented with the approval of the on-call incident manager and must be presented to the next change advisory board for retrospective review. A change may be classified as standard only where it has been implemented successfully at least five times as a normal change and has an approved implementation procedure. Changes affecting user access rights are never classified as standard."

**Question 5 (easy)**

Statement: Standard changes require approval before implementation.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: standard changes "are pre-approved and may be implemented by any authorised engineer without further approval". The pre-approval is the whole point of the category; the recording obligation within one working day is a separate duty, not prior approval.

**Question 6 (moderate)**

Statement: A routine password reset procedure implemented successfully twenty times can be classified as a standard change.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states that "changes affecting user access rights are never classified as standard". A password reset affects user access rights, so however many times it has been done successfully, it cannot be a standard change. The five-implementation rule is satisfied and irrelevant, because the access-rights exclusion is absolute. This matters directly for the role's security administration duties, where the temptation to treat routine access work as standard is constant, and a candidate's handling of it is worth probing further at debrief.

**Question 7 (moderate)**

Statement: An emergency change does not need change advisory board involvement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: emergency changes "must be presented to the next change advisory board for retrospective review". The board's involvement is deferred, not removed. Reading the emergency route as bypassing governance entirely is the natural error, and the retrospective review is precisely what makes an emergency route safe to have — without it, "emergency" becomes everyone's preferred route.

**Question 8 (harder)**

Statement: A change implemented successfully six times as a normal change can be classified as standard.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Six exceeds the five-implementation threshold, and the passage attaches a second condition — the change must also have "an approved implementation procedure" — about which the statement says nothing. It also does not say whether the change affects user access rights, which would exclude it regardless. So two conditions are unestablished and the answer cannot be True. Checking every condition in a compound requirement, rather than the one the statement draws attention to, is the discipline this item tests.

*Passage C — for Questions 9 to 13*

"The application's batch scheduler runs jobs in dependency order. A job whose predecessor has failed is held rather than skipped. Held jobs are released automatically when the predecessor completes successfully. The scheduler retries a failed job twice at ten-minute intervals before raising an incident. Jobs marked as critical raise a Priority 2 incident on failure; other jobs raise Priority 3. The runbook instructs the on-call engineer to check the source file for completeness before re-running a failed extract job. It does not cover the case where the source file is absent."

**Question 9 (easy)**

Statement: A job whose predecessor has failed will be skipped.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this directly: such a job "is held rather than skipped". The distinction matters operationally — a held job resumes automatically when the predecessor succeeds, so fixing the upstream failure clears the chain without further intervention, whereas a skipped job would need to be run separately.

**Question 10 (moderate)**

Statement: A failed critical job raises a Priority 2 incident immediately.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The scheduler "retries a failed job twice at ten-minute intervals before raising an incident", so the incident is raised after roughly twenty minutes of retries, not immediately. This is useful for a candidate to know when reconstructing a timeline: the incident timestamp sits about twenty minutes after the first failure, which matters when working out whether a job could still have made its window.

**Question 11 (moderate)**

Statement: The runbook tells the on-call engineer what to do if the source file is missing.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states that the runbook "does not cover the case where the source file is absent" — directly contradicting the statement. This is the most useful sentence in the passage from a practical standpoint: a documented gap in a runbook is a gap that will be discovered at 3am by whoever is on call, and a candidate who notices and names this kind of gap is showing exactly the awareness the role needs.

**Question 12 (moderate)**

Statement: A non-critical job that fails three times raises a Priority 3 incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The scheduler retries twice after the initial failure — three attempts in total — and then raises an incident, and non-critical jobs raise Priority 3. So a job that has failed three times has exhausted its retries and raised a Priority 3 incident, which the passage establishes. The arithmetic of "retries twice" meaning three total attempts is the easy thing to get wrong, and worth watching for specifically when scoring.

**Question 13 (harder)**

Statement: If a critical job fails and its successor is held, resolving the critical job's incident will release the successor.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Held jobs "are released automatically when the predecessor completes successfully" — completion is the trigger, not incident resolution. An incident can be resolved in ways that do not involve the job completing: cancelled, deferred to the next night, or resolved by a workaround that bypasses it. So resolving the incident does not necessarily release the successor. The passage establishes what releases a held job and says nothing about what "resolving the incident" involves, which is why this is Cannot Say rather than False.

### Administration tips

- **Emphasise the "use only the passage" rule before starting** — a candidate who answers from general system knowledge, however sensible, should be scored against what the text actually supports.
- **Watch specifically for the compound-condition items** (Questions 6 and 8) — checking every condition rather than the one a statement draws attention to is the discipline being tested.
- **Note the retries-versus-attempts arithmetic (Question 12) as a specific scoring point.**
- **Time by passage, not by statement**, letting the candidate see all statements for a passage together if your platform allows it.
- **Use the runbook-gap item (Question 11) as a natural debrief discussion point** — it maps directly onto the real documentation the role will maintain.

### Common pitfalls to watch for when scoring

- **Treating high impact alone as Priority 1.**
- **Assuming a user's report can change a priority directly.**
- **Assuming an emergency change bypasses the board entirely.**
- **Classifying access-rights work as a standard change regardless of implementation count.**
- **Reading "resolved" as "fixed".**
- **Assuming an incident is raised at the moment of first failure rather than after retries.**
- **Assuming resolving an incident automatically restarts a held job.**

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. For an application operations engineer, the scenarios involve monitoring and incidents, batch failures overnight, user and security administration requests, and working with the people who own the application and the people who use it.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners in comparable roles.

Three patterns run through the strong answers, and are worth watching for as you score.

The first is working within defined authority. This role administers access, implements changes and manages incidents inside a framework that says who may do what, and the strong answers consistently stay within it and escalate rather than obliging a user who is pressing them.

The second is that restoring service and understanding the cause are separate activities. During an incident the priority is getting people working; afterwards it is finding out why. Doing them in the wrong order costs users.

The third is that the person in this role sees things nobody else sees — watching the batch, the disk, the error rate — and a trend noticed and mentioned three weeks early is worth more than any amount of skill applied on the night it fails.

### What it measures for the role

- **Incident handling** maps to **Incident management**.
- **Batch accountability** maps to being accountable for batch processes.
- **Access administration** maps to the role's user and security administration duties.
- **Change discipline** maps to **Change management**.
- **Noticing trends** maps to **Availability and capacity management** and monitoring applications.
- **Working with users** maps to **User focus** and **Service focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A batch failure overnight**

A candidate is on call. A critical batch job has failed and they are not sure why. The processing window closes in two hours. What is the most effective response?

- A) Follow the runbook first — check the things it says to check — and if that does not resolve it, escalate early enough that there is still time to act, rather than at the point the window closes.
- B) Investigate the cause thoroughly before doing anything.
- C) Re-run the job and see what happens.
- D) Wait until morning and let the day team handle it.

**Correct answer: A. Least effective: D**

**Explanation:** The runbook exists for this moment and covers the common causes, so it is both the fastest route and the one an engineer can be held to. The second half of option A is what distinguishes it: escalating with ninety minutes left gives someone options, escalating with ten minutes left gives them a fact. Option D is least effective — a missed processing window has consequences that compound through the next day, and being on call means the decision is the candidate's to make now. Option C is sound when the runbook says so and a guess on its own. Option B spends the window understanding rather than fixing.

**Question 2 (easy) — A user asking for access**

A senior manager asks a candidate directly to give a new starter access to the application today, bypassing the usual request process. What is the most effective response?

- A) Grant it; the manager is senior and the need is real.
- B) Explain what the process requires and help them through it quickly — most access processes have a fast route for genuine urgency — because access grants outside the process are unauditable, and this is exactly where the role's security administration duties matter.
- C) Refuse and point them at the process.
- D) Grant it and ask them to submit the request afterwards.

**Correct answer: B. Least effective: A**

**Explanation:** The need is legitimate and the route is what is in question. Option B keeps the audit trail intact while solving the actual problem, which is speed — and knowing the fast route is what makes an engineer useful rather than obstructive. Option A is least effective: an unauditable access grant is a control failure in exactly the area the role is personally responsible for, and seniority does not change that. Option D is the same failure with a promise attached, and the retrospective request frequently does not arrive. Option C is correct and unhelpful.

**Question 3 (moderate) — A trend noticed early**

Over several weeks a candidate has noticed the nightly load job creeping closer to its window. Nothing has failed. What is the most effective response?

- A) Work out how much growth remains before it overruns, and raise it with the application owner with that figure and a rough date.
- B) Mention it at the next team meeting.
- C) Wait until it fails; then it will be prioritised.
- D) Try to optimise the job personally.

**Correct answer: A. Least effective: C**

**Explanation:** A trend spotted early is worth far more than skill applied on the night it fails, and option A converts an observation into something someone can plan around — "this overruns in about eight weeks at current growth" is actionable in a way that "it's getting slower" is not. Option C is least effective and is a genuine temptation, because a failure does get attention; it also means a missed window, a recovery, and an avoidable incident. Option D may or may not be within the candidate's remit, and it comes before anyone has decided this is the right fix. Option B is fine and slower and less specific than it needs to be.

**Question 4 (moderate) — A user reports something intermittent**

A user reports that the application "sometimes" logs them out unexpectedly. A candidate cannot reproduce it. What is the most effective response?

- A) Gather the specifics — when it last happened, what they were doing, how long they had been in the application, which browser and device — and check whether other users have reported anything similar, because intermittent faults are solved by patterns rather than by reproduction.
- B) Close it as unable to reproduce.
- C) Ask them to report it next time it happens.
- D) Restart their session and see whether it recurs.

**Correct answer: A. Least effective: B**

**Explanation:** Intermittent issues are the hardest to diagnose and the most valuable to catch, and option A does the two things that work: gathering enough detail to spot a pattern, and checking whether the report is isolated. "How long had you been in the application" is often the question that cracks it, since session timeouts are a common cause. Option B is least effective: closing an unreproduced intermittent fault means it recurs, the user stops reporting it, and the reports that would have shown the pattern are lost. Option C is worth asking as well and puts the whole burden on the user. Option D changes something without knowing what.

**Question 5 (moderate) — Conflicting instructions**

The application owner asks a candidate to make a configuration change today. It would normally require a normal change with board approval. What is the most effective response?

- A) Make the change; the application owner is accountable for the application.
- B) Explain what the change process requires, establish whether it genuinely qualifies as an emergency, and if it does, follow the emergency route with the incident manager's approval — because the emergency route exists for this and using it properly is different from skipping the process.
- C) Refuse until it goes through the board.
- D) Make the change and raise a retrospective record.

**Correct answer: B. Least effective: D**

**Explanation:** Option B distinguishes the two things that get confused here — genuine urgency, which has a defined route, and inconvenience, which does not. Following the emergency route properly gets the change made today with the approvals and the record intact. Option D is least effective: an unapproved change with a record added afterwards looks like compliance and is not, and it is the habit that makes a change process meaningless. Option A ignores the process entirely. Option C is correct if it is not an emergency and forecloses the question of whether it is.

**Question 6 (moderate) — During an incident**

A Priority 2 incident is in progress. A colleague suggests a change that might fix it, but neither of them is sure what it would do. What is the most effective response?

- A) Try it; the service is degraded and something needs to happen.
- B) Check what it would affect before doing it, and prefer actions known to be reversible — because an untested change during an incident can turn a degraded service into a broken one, and the recovery from that is much longer.
- C) Wait for the incident manager to decide.
- D) Restart the application instead.

**Correct answer: B. Least effective: A**

**Explanation:** The instinct to do something during an incident is strong and is exactly when discipline matters. Option B gives the practical test — what does it affect, and can it be undone — the right filter under time pressure. Option A is least effective: acting on an unknown change during a live incident is how a Priority 2 becomes a Priority 1, and it happens regularly. Option C is appropriate for a decision above the candidate's authority and is not a substitute for thinking. Option D is a specific action offered without knowing whether it is relevant.

**Question 7 (harder) — A mistake made**

A candidate realises a change they made yesterday has caused a problem that has not yet been noticed. What is the most effective response?

- A) Report it now, say what was done and what the effect is, and propose the fix.
- B) Fix it quietly before anyone notices.
- C) Wait to see whether it causes an actual incident.
- D) Fix it and mention it at the next team meeting.

**Correct answer: A. Least effective: C**

**Explanation:** Everyone makes mistakes in operations, and how they are handled is what people remember. Option A is quick and lets someone else assess whether the impact is wider than the candidate can judge alone, since they may not know what depends on what they changed. Option C is least effective: waiting means the problem is found by someone else, later, with no idea of the cause, and the diagnosis costs hours that disclosure would have saved. Option B removes anyone's chance to check the wider impact. Option D delays by days.

**Question 8 (harder) — A workaround that keeps being used**

A known fault has been generating incidents for months, each resolved by the same workaround. Nothing has been done about the underlying cause. What is the most effective response?

- A) Continue applying the workaround; it restores service.
- B) Put together what the recurrence has cost — how many incidents, how much engineer time, how much user disruption — and raise it as a problem needing a permanent fix, because an efficient workaround removes the pressure to solve anything.
- C) Ask the application owner to prioritise a fix.
- D) Stop applying the workaround so the problem gets attention.

**Correct answer: B. Least effective: D**

**Explanation:** This is the specific failure mode of a good workaround: it resolves incidents against target while the fault persists indefinitely, and because service is restored every time, nothing ever forces the issue. Option B converts the accumulated cost into a case, which is what gets a fix funded. Option D is least effective and is genuinely tempting — deliberately letting users suffer to make a point is not a legitimate route, and it damages the people the service exists for. Option C is the right ask made without the evidence that would carry it. Option A accepts the position permanently.

**Question 9 (harder) — An access review**

A quarterly access review shows 40 accounts that have not been used for over 90 days. What is the most effective response?

- A) Check what each account is before acting — long-term leave, secondment, seasonal roles and service accounts all look dormant — then remove the ones confirmed as no longer needed and record what was done.
- B) Remove all 40 accounts.
- C) Leave them; they are not causing harm.
- D) Ask each account holder's manager to confirm.

**Correct answer: A. Least effective: B**

**Explanation:** Dormant accounts are a real security risk, and dormancy is a poor proxy for "no longer needed" — which is what makes option A the right sequence: check, act on what is confirmed, and record. Option B is least effective: removing a service account or the account of someone on maternity leave causes an outage or a very bad first day back, and both are avoidable with one check. Option D is a reasonable part of the checking and slow as the whole approach for 40 accounts. Option C ignores a control the candidate is responsible for.

**Question 10 (harder) — Something outside a candidate's remit**

Investigating an incident, a candidate concludes the cause lies in an infrastructure component another team owns. What is the most effective response?

- A) Pass it to them with what was found — the evidence, the timings, what was ruled out — because a handover with the diagnostic work attached saves them repeating it, and a bare reassignment usually comes back.
- B) Reassign the incident to them.
- C) Investigate further to be certain before passing it on.
- D) Fix it personally if possible.

**Correct answer: A. Least effective: D**

**Explanation:** Cross-team handovers fail when they arrive without evidence, because the receiving team starts from nothing and frequently sends it back. Option A gives them everything established, including what was ruled out, often the most useful part. Option D is least effective: changing another team's component without their knowledge is outside the candidate's authority, may break something invisible to them, and leaves the owning team with an unexplained change. Option C delays a handover already grounded in evidence. Option B is the right destination delivered in the least useful form.

**Question 11 (harder) — Documentation that is wrong**

Following a runbook during an incident, a candidate finds a step that is out of date and does not work, and resolves the incident another way. What is the most effective response?

- A) Update the runbook now while the details of what was wrong and what worked instead are still fresh.
- B) Mention it to the team.
- C) Leave it; the right way is now known.
- D) Raise a ticket to update it.

**Correct answer: A. Least effective: C**

**Explanation:** The runbook will next be used at 3am by someone who does not know what the candidate now knows, and the details fade within days. Option A costs ten minutes at the point of maximum knowledge. Option C is least effective: knowledge held only by one person is knowledge the on-call rota does not have, and it guarantees the next person hits the same dead end under the same pressure. Option D is better and puts a delay between the knowledge and the record. Option B shares it with people who are awake now rather than the person on call in three weeks.

**Question 12 (harder) — Too much at once**

Several things need attention: a batch job that will finish late, a user waiting on an access request, and a monitoring alert that is not recognised. What is the most effective approach?

- A) Deal with them by what deteriorates if delayed — the unrecognised alert first if it could indicate something spreading, then the batch job while there is still time to affect the outcome, then the access request — and tell the waiting user roughly when they will be reached.
- B) Deal with them in the order they arrived.
- C) Deal with the access request first; it is quickest.
- D) Escalate all three.

**Correct answer: A. Least effective: B**

**Explanation:** Option A prioritises by deterioration, the right criterion — an unrecognised alert may be the early sign of something that gets much worse, while an access request is equally solvable in an hour. Telling the waiting user when they will be reached is the small thing that stops a reasonable wait becoming a complaint. Option B is least effective: order of arrival ignores every piece of information available about consequence. Option C optimises for getting something finished. Option D escalates work that belongs to the candidate.

### Administration tips

- **Give the candidate room to think.** SJTs work best untimed or generously timed; rushing defeats their purpose.
- **Note the "most effective / least effective" paired format** used throughout this section, and score both halves of each item.
- **Watch for the authority-boundary pattern specifically** (Questions 2, 5, 6) — candidates who choose the properly-followed emergency or escalation route over a shortcut are showing strength, not caution.
- **Use these scenarios as debrief material.** Asking a candidate to talk through their reasoning often reveals more than the score alone.
- **Calibrate to the level.** The strongest answers at this level often include asking for direction or passing something on — score that as competence, not hesitancy.

### Common pitfalls to watch for when scoring

- **Rewarding an unaudited access grant for a senior requester over the properly-followed fast route.**
- **Rewarding an untested change made during a live incident.**
- **Rewarding closure of an intermittent fault as unable to reproduce, over patient evidence-gathering.**
- **Under-weighting the value of raising a creeping trend early**, versus waiting for a failure to force attention.
- **Rewarding a change made first and recorded afterwards.**
- **Rewarding removal of dormant accounts without checking what they are first.**
- **Rewarding a bare incident reassignment over one with diagnostic evidence attached.**
- **Under-weighting the discipline of correcting documentation immediately, while the detail is fresh.**

## Conclusion

This document has given you four assessment sections built around the reasoning an application operations engineer actually uses, and it is worth drawing them together for scoring and debrief.

The cognitive section tests reading operational evidence carefully — spotting the pattern across a set of findings, following a dependency or a rule through several steps, and checking data that mostly matches rather than assuming the rest does. The numeric section tests the arithmetic this job runs on: records divided by throughput against the window, availability percentages converted into minutes, incident counts normalised by transaction volume, and growth headroom worked out before something overruns rather than after — none of it advanced, and all of it rewarding the candidate who does the division rather than estimates. The verbal section tests reading the documents that define what may be done and what is expected: priority as impact *and* urgency, only the incident manager changing a priority, access-rights changes never standard, "retries twice" meaning three attempts, and a runbook that says plainly where it stops. The situational judgement section comes back to three habits worth watching for across every scenario: staying inside defined authority while knowing the fast route so that staying inside it is not obstructive; restoring service first and diagnosing afterwards, preferring reversible actions; and raising things early — a creeping batch job, a candidate's own mistake, a runbook step that no longer works.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as your answer key and your talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses, and the explanations will help you tell the two apart. A short debrief conversation afterwards, walking through where the candidate's reasoning matched or diverged from the model answer, is often more valuable to them — and more informative to you — than the raw score.

**Records and consistency.** Keep a note of the conditions under which you administered this assessment alongside the result, and use the same items and conditions for every candidate you assess for this role level.

**One assessment among several.** This is work that most of the organisation only notices when it stops, and the result here is one input into a wider judgement about whether a candidate can keep it from stopping — never the whole of that judgement. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
