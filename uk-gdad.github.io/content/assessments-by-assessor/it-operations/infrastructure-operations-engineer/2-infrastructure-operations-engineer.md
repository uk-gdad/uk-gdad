# Infrastructure Operations Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for infrastructure operations engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they draw on the artefacts an infrastructure operations engineer genuinely handles — monitoring dashboards, incident tickets, change requests, asset and configuration records, capacity reports, test scripts, and operational documentation — and the decisions genuinely made, such as deciding whether an alert warrants action, implementing a change request under change control, owning an issue until it is resolved or properly handed on, and keeping configuration information accurate and secure.

The role is responsible for the preparation and support of IT operations solutions and services, physical or virtual, according to industry and organisational best practices, standards, service requirements and key performance indicators throughout the product life cycle. That responsibility rests on a distinctive combination of mental skills: the vigilance to monitor infrastructure and application services and spot the signal among the noise; the precision to perform routine tasks according to process and checklists without drift; the numeracy to reason about capacity, availability, and KPIs; the reading discipline to apply change control procedures and follow documentation exactly; and the judgement to know when to act, when to escalate, and how to keep users informed.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for this role, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of shapes and number sequences, a candidate reasons about monitoring output, configuration records, change schedules, log excerpts, and operational checklists — the daily material of infrastructure operations.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, comparing the candidate's responses against a norm group, and many modern platforms adapt question difficulty to performance. Employers usually receive a breakdown of speed versus accuracy rather than a single score. Most platforms offer short, ungraded practice questions before the real test begins.

For an infrastructure operations engineer, cognitive assessment is particularly relevant because operational reliability is largely a thinking discipline. Monitoring infrastructure and application services means continuously distinguishing normal variation from genuine anomaly. Alerting and taking appropriate action means reasoning quickly from symptoms to plausible causes and from causes to safe next steps. Performing routine tasks according to process and checklists means holding a procedure in mind while executing it faithfully — and noticing when reality diverges from what the procedure assumes.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Incident management** skill — identifying and registering incidents, gathering the required information and allocating them to the appropriate channel depends on recognising which alerts and symptoms belong together — and to monitoring infrastructure and applications services, where anomaly detection is pattern recognition performed continuously.
- **Logical deduction** maps to the **Problem management** skill: investigating problems in systems, processes and services, and understanding whether a problem is strategic, tactical or operational, requires valid reasoning from logs, timelines, and symptoms to causes.
- **Error checking** maps to the **Asset and configuration management** skill — maintaining secure configuration and accurate information, and verifying the location and state of IT assets, is a sustained exercise in comparing records against reality — and to the **Testing** skill, where correctly executing test scripts under supervision means noticing every deviation from expected results.
- **Prioritisation** maps to the **Ownership and topic** skill (owning an issue until a new owner is found or the problem is mitigated or resolved requires ranking competing demands) and to the **Availability and capacity management** skill, where managing service components against business needs and KPIs means addressing the most service-critical risks first.
- **Applied problem solving** maps to the **Change management** skill (implementing change requests and applying change control procedures under supervision involves reasoning about sequence, dependency and rollback), the **Technical specialism** skill in support and maintenance activities, and the **Service focus** skill — taking inputs and establishing coherent frameworks that work is structured problem solving by definition.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in monitoring output**

A monitoring dashboard lists CPU utilisation for six production virtual machines, sampled every five minutes over the past half hour:

- VM-A: 34%, 36%, 33%, 35%, 34%, 35%
- VM-B: 41%, 40%, 42%, 41%, 43%, 41%
- VM-C: 28%, 29%, 27%, 61%, 88%, 97%
- VM-D: 55%, 54%, 56%, 55%, 54%, 55%
- VM-E: 12%, 13%, 11%, 12%, 14%, 12%
- VM-F: 47%, 46%, 48%, 47%, 45%, 47%

Which VM most warrants immediate attention, and why?

- A) VM-D, because it has the highest average utilisation.
- B) VM-C, because its utilisation is climbing steeply after a stable baseline.
- C) VM-E, because unusually low utilisation means the VM may have failed.
- D) VM-F, because 47% is close to half capacity.

**Correct answer: B**

**Explanation:** The question tests trend recognition, not level recognition. Five of the six VMs show stable readings with normal small variation. VM-C breaks pattern decisively: after a stable baseline around 28%, three successive samples show 61%, 88%, 97% — a steep, accelerating climb that will hit saturation imminently. VM-D's 55% is the highest steady level but is stable. VM-E's low, steady figure is consistent with a lightly loaded machine, still varying normally. Option D confuses an arbitrary landmark with a threshold. This tests whether a candidate reads the derivative rather than the value: a service at 55% forever is healthier than one that went from 28% to 97% in fifteen minutes — exactly how alerting and taking appropriate action starts.

**Question 2 (easy) — Logical deduction from a maintenance rule**

An operational standard states: "A production server may only be rebooted during business hours if an approved emergency change exists." Server APP-PRD-04 was rebooted at 14:20 on a Tuesday. Which conclusion must be true?

- A) An approved emergency change existed for the reboot.
- B) The standard was breached.
- C) Either an approved emergency change existed, or the standard was breached.
- D) The reboot was caused by a fault, not an engineer.

**Correct answer: C**

**Explanation:** The rule is conditional: a business-hours reboot is permitted only with an approved emergency change. The reboot occurred at 14:20 Tuesday — business hours — so one of exactly two situations holds: the required approval existed (rule followed) or it did not (rule breached). The facts given do not tell which, so neither A nor B is guaranteed individually. D introduces a cause the facts never mention. The only conclusion true in every scenario consistent with the facts is the disjunction, C. This tests concluding no more than the evidence guarantees — the same discipline needed when investigating problems: an unexplained reboot in the logs prompts checking the change record before writing "unauthorised reboot" in a ticket.

**Question 3 (easy) — Error checking a configuration record**

A configuration management database (CMDB) requires each server record to contain: hostname, environment (PRD or TST), IP address, operating system with version, and assigned support team. This new record is under review:

"Hostname: DB-PRD-03. Environment: PRD. IP: 10.20.31.7. OS: Linux. Support team: Database Operations."

What is wrong with the record?

- A) The IP address is in the wrong format.
- B) The operating system entry is missing its version.
- C) The environment code is invalid.
- D) Nothing — the record is complete.

**Correct answer: B**

**Explanation:** Audit the record against the requirement field by field. Hostname, environment, IP address, and support team are all present and valid. Operating system: the requirement says "operating system with version", and "Linux" names the OS but omits any version. This tests treating each required field as a distinct check rather than skimming a record for general plausibility — "Linux" tells a patching coordinator almost nothing, since whether the box needs a particular security update depends entirely on the distribution and version. A candidate should resist option D whenever a record "looks fine": completeness is verified, never assumed.

**Question 4 (easy) — Checklist logic under a changed condition**

A nightly checklist for the application platform reads: (1) confirm the overnight batch completed; (2) if the batch completed, archive the batch logs; (3) if the batch failed, do not archive logs — raise an incident and attach the logs to it; (4) update the shift handover note. Tonight the batch failed. Which sequence of actions follows the checklist?

- A) Archive the logs, raise an incident, update the handover note.
- B) Raise an incident with the logs attached, update the handover note.
- C) Update the handover note only.
- D) Raise an incident, archive the logs, update the handover note.

**Correct answer: B**

**Explanation:** Trace the conditional branches. Step 1 establishes the batch failed. Step 2's condition is not met, so archiving does not happen. Step 3's condition is met: raise an incident and attach the logs — and it explicitly forbids archiving in this branch, eliminating options A and D. Step 4 is unconditional. This tests executing a procedure's conditions, not just its verbs — the same skill as correctly executing test scripts, where the expected-result branch determines what happens next. A strong candidate's answer also notes the operational rationale: archiving on failure would move the logs away from where the investigating engineer expects them.

**Question 5 (moderate) — Deduction from a service dependency chain**

The intranet service depends on the web tier; the web tier depends on the application tier; the application tier depends on both the database tier and the authentication service. This morning: the database tier is confirmed healthy; users report the intranet is down; the authentication service's status is unknown; no other dependencies exist. Which of the following is a valid conclusion?

- A) The authentication service must be down.
- B) The fault must lie in the web tier.
- C) The fault lies in the web tier, the application tier, or the authentication service.
- D) The database tier is causing the outage.

**Correct answer: C**

**Explanation:** Model the dependency chain: intranet → web → application → (database AND authentication). The database tier is confirmed healthy, ruling out option D. That leaves three possible fault locations: the web tier, the application tier, or the authentication service (whose status is unknown — unknown means unknown, not down, so option A overreaches). Option B arbitrarily selects one of three live candidates. This tests the elimination structure of real incident diagnosis: enumerate the dependency chain, strike out what monitoring confirms healthy, and focus investigation on what remains, writing the surviving candidate list into the incident record rather than a premature single suspect.

**Question 6 (moderate) — Prioritising a morning queue**

Four items are in the queue at the start of a shift:

1. A monitoring alert fired 10 minutes ago: certificate on the public-facing service portal expires in 48 hours; renewal takes about an hour and is documented.
2. An incident ticket: one user cannot print to their local office printer.
3. A scheduled task due today: monthly verification of asset records for a rack row, takes two hours, deadline 17:00.
4. An email from the team lead: please peer-review a colleague's change request before the change board meets at 14:00.

It is 09:00. Which order of attention is most defensible?

- A) 1, 4, 3, 2
- B) 2, 1, 4, 3
- C) 3, 4, 1, 2
- D) 1, 2, 4, 3

**Correct answer: A**

**Explanation:** Rank by impact-weighted urgency. Item 1 is the standout: an expiring certificate on a public-facing service is a guaranteed future outage with a known deadline, and removing such time bombs early — while there is still margin if renewal hits a snag — is the correct operational reflex. Item 4 has a hard mid-day deadline and blocks a colleague. Item 3 has an end-of-day deadline and two hours of work. Item 2 affects one user's local printing: real, but lowest impact. Option B elevates a single-user inconvenience above a service-affecting deadline; option C leaves the certificate until afternoon; option D delays the deadline-bound review behind low-impact work. This tests sequencing by impact and deadline jointly, not by ticket age, ease, or arrival order.

**Question 7 (moderate) — Error checking across two artefacts**

The change schedule says: "CH-3401: increase memory on VM cluster from 256 GB to 320 GB, Wednesday 21:00." The capacity report for the same cluster says: "Current memory 256 GB; approved uplift to 384 GB scheduled Wednesday 21:00 under CH-3401." Assuming exactly one document contains a typing error, what can be concluded, and what should be done?

- A) The schedule is definitely wrong; proceed with 384 GB.
- B) The report is definitely wrong; proceed with 320 GB.
- C) The two documents disagree on the target (320 vs 384 GB); it cannot be told from these documents alone which is correct, so verify against the approved change record before Wednesday.
- D) The difference is immaterial; either figure will do.

**Correct answer: C**

**Explanation:** Compare the artefacts field by field: change reference, current memory, and timing all match; target memory is the sole mismatch. Nothing in the two documents indicates which one has the typo — options A and B each assume an answer the evidence cannot support. Option D fails on operational grounds — implementing the wrong uplift either under-delivers approved capacity or applies an unapproved larger change. This tests the disciplined conclusion of identifying a discrepancy precisely, then resolving it against the authoritative source — the approved change record — before implementation, exactly how change control procedures work when documents disagree.

**Question 8 (moderate) — Pattern recognition in recurring failures**

The failure history for a file transfer job over four weeks:

- Week 1: failed Tuesday 02:10, succeeded all other nights
- Week 2: failed Tuesday 02:15, succeeded all other nights
- Week 3: succeeded every night
- Week 4: failed Tuesday 02:05, succeeded all other nights

A database maintenance job runs every Tuesday from 02:00 to 02:30, except in week 3, when it was skipped for a bank holiday. What is the strongest hypothesis?

- A) The file transfer job fails randomly.
- B) The Tuesday database maintenance job contends with the file transfer job, causing the failures; week 3's success when maintenance was skipped supports this.
- C) Bank holidays cause the file transfer job to succeed.
- D) The file transfer job is misconfigured and should be rewritten.

**Correct answer: B**

**Explanation:** Line up the two schedules. The transfer job fails only within the 02:00–02:30 window when the maintenance job runs — three co-occurrences — and week 3, the one week maintenance did not run, is the one week the Tuesday transfer succeeded. That is a strong correlation with a plausible mechanism (resource contention or a lock on shared data). Option A ignores an obvious pattern. Option C confuses the mediating variable: the bank holiday mattered only because it removed the maintenance job. Option D leaps to a remedy with no mechanism. This tests framing a finding as a hypothesis at the right strength, which is exactly the confirming step problem management remedies build from.

**Question 9 (moderate) — Applied problem solving on a scripted task**

A handover note says: "Run the disk-cleanup script on the four web servers, one at a time, checking each server returns to normal service before starting the next. If any server fails to return to normal service within 10 minutes, stop — do not continue with remaining servers — and page the on-call engineer." Server 1: normal within 4 minutes. Server 2: normal within 6 minutes. Server 3: after 12 minutes, it has not returned to normal service. What should be done?

- A) Continue to server 4, then investigate server 3 afterwards.
- B) Re-run the script on server 3, since a second attempt may succeed.
- C) Stop — do not touch server 4 — and page the on-call engineer about server 3.
- D) Restore server 3 from backup.

**Correct answer: C**

**Explanation:** The instruction contains an explicit stop condition: any server not back to normal within 10 minutes halts the entire sequence and triggers a page. Server 3 has breached that condition (12 minutes and counting). Option A violates the stop rule and risks widening the impact. Option B improvises an unauthorised retry on an already-degraded server. Option D is a drastic recovery action nobody has authorised. This tests recognising that an explicit stop condition is the most important sentence in a procedure — the one-at-a-time design exists to limit blast radius, keeping one damaged server with three healthy peers rather than four damaged servers.

**Question 10 (hard) — Timeline deduction across overlapping changes**

Overnight, four events occurred on the payments platform: (i) 22:00 — storage firmware updated; (ii) 23:00 — automated health check passed all tests; (iii) 23:30 — application patch applied; (iv) 00:15 — network switch port reconfigured. At 00:40, monitoring detected elevated error rates, which have continued since. A second health check at 01:00 failed. No other changes occurred. Which statement best ranks the suspects?

- A) The storage firmware update is the prime suspect because firmware is riskiest.
- B) The application patch and the switch reconfiguration are the live suspects, with the firmware update effectively cleared by the 23:00 health check; between the two, both remain credible and should be checked, starting with the one most easily verified or reverted.
- C) The switch reconfiguration alone is the suspect because it is closest in time to the errors.
- D) All four events are equally suspect.

**Correct answer: B**

**Explanation:** Apply last-known-good reasoning. The 23:00 health check passed after the firmware update, substantially clearing event (i) — with the caveat that latent faults can pass a health check, hence "effectively cleared" rather than "impossible". Errors appeared at 00:40; between the last known good state and first known bad state, two changes occurred: the 23:30 patch and the 00:15 reconfiguration. Both precede the errors and neither has been exonerated. Option C's proximity-only reasoning is weaker, since a 23:30 patch can easily take an hour to misbehave. Option A substitutes a risk stereotype for the timeline; option D discards the information the passing health check provides. This tests the professional core of incident investigation: bound the window, list what changed inside it, order the checks by cost.

**Question 11 (hard) — Multi-constraint scheduling of operational work**

Three tasks must complete in tonight's maintenance window (20:00–00:00): a database backup (B) taking 90 minutes; an OS patch with reboot (P) taking 60 minutes; and a storage volume expansion (S) taking 45 minutes. Constraints: (i) the backup must complete before the patch begins, because a clean restore point is needed; (ii) the storage expansion cannot run at the same time as the backup, because both saturate the storage network; (iii) the patch and storage expansion can run in parallel; (iv) all tasks must finish by 00:00. If the backup starts at 20:00, what is the latest time the storage expansion can start?

- A) 21:30
- B) 22:30
- C) 23:00
- D) 23:15

**Correct answer: D**

**Explanation:** The backup runs 20:00–21:30 (90 minutes). Constraint (ii) forbids the expansion during the backup, so it cannot start before 21:30. Constraint (i) allows the patch from 21:30 onward. Constraint (iii) permits the expansion to overlap the patch, so the expansion is limited only by the backup's end and the window's end. The expansion takes 45 minutes, so its latest start is 00:00 − 45 minutes = 23:15 — option D. Option A is the earliest start, not the latest. Option B assumes the expansion must wait for the patch to finish, which constraint (iii) explicitly does not require. This tests separating "cannot start before" constraints from "must finish by" constraints, and computing the latest start as deadline minus duration.

**Question 12 (hard) — Isolating a variable with user reports**

Users report that the document management system is slow. These facts are gathered: (i) users connecting through the VPN report severe slowness; (ii) users on office networks report normal performance; (iii) the document system's server metrics — CPU, memory, disk, response time measured at the server — are all normal; (iv) the VPN concentrator's bandwidth graph shows it has been running at 98–100% capacity since Monday, when a new large team began working remotely. What is the most defensible conclusion?

- A) The document management system needs more server capacity.
- B) The evidence points to the saturated VPN concentrator, not the document system: the symptom tracks the connection path, the server itself measures healthy, and the saturation onset coincides with the new remote team's arrival.
- C) The new team is misusing the document system and should be told to stop.
- D) Users on the VPN are imagining the slowness, since server metrics are normal.

**Correct answer: B**

**Explanation:** Isolate the discriminating variable. The user population splits cleanly by connection path, and the server answers quickly as measured locally, so delay is being added in transit. Fact (iv) supplies mechanism and timing: a concentrator pinned at 98–100% since Monday, coinciding with a new remote workload, is a textbook bottleneck. Option A proposes spending on a component the evidence exonerates. Option C moralises a capacity problem — the new team's traffic is legitimate demand, and this becomes an availability and capacity management action. Option D prefers metrics over users, when server-side metrics measure the server, not the user's experience. This tests using quantitative data and user reports together to locate the truth.

### Administration tips

- **Watch for whether a candidate reads a trend rather than a level** in a monitoring item — the direction of change, not the current value alone.
- **Score for whether a candidate concludes only what the evidence guarantees**, treating "unknown" as unknown rather than as evidence either way.
- **Note whether a candidate audits a record or artefact field by field** rather than judging it as a whole.
- **Keep timing consistent** across candidates for this level.
- **Use the timeline item (Question 10) to observe whether a candidate applies last-known-good reasoning** — bounding the suspect window before assigning a cause.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built on a stereotype rather than the timeline** ("firmware is risky", "it's always the network").
- **Crediting a conclusion that treats "possible" as "must be true".**
- **Missing when a candidate treats an unknown status as if it were confirmed** in either direction.
- **Accepting an answer that ignores an explicit stop condition or exception clause** in a procedure item.
- **Rewarding an answer that prioritises by ease, recency, or loudness** rather than impact and deadline.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantitative material of this job: percentages, ratios, averages, rates, and data presented in tables and charts. For an infrastructure operations engineer, the data is drawn from the sources used daily — capacity reports, availability figures, incident statistics, backup success rates, storage growth trends, and KPI dashboards.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions. Each question presents data and asks for a calculation, comparison, or interpretation. An on-screen calculator is normally permitted, and rough working on paper is expected. Scoring compares accuracy and speed against a norm group.

Numeric reasoning matters so much for this role because the KPIs it works to are numbers, and misreading them has operational consequences. Availability targets are percentages with unforgiving arithmetic behind them — the difference between 99.5% and 99.9% is a factor of five in permitted downtime. Capacity management is applied trend arithmetic: a disk growing at a steady rate has a computable date on which it becomes an incident. The role summary makes this explicit: managing service components to ensure they meet business needs and key performance indicators quietly assumes the ability to read, compute, and challenge KPI figures.

### How this assessment maps to the role

- **Percentages and thresholds** map to the **Availability and capacity management** skill: availability targets, utilisation thresholds, and headroom calculations are the daily language of managing service components against KPIs.
- **Rates and trend projection** map to the **Problem management** skill — investigating patterns and trends in failures means computing rates over time — and to capacity forecasting, where growth per week converts directly into time-to-exhaustion.
- **Averages and distributions** map to the **Incident management** skill: mean resolution times, ticket volumes per day, and the difference between a typical day and an outlier day are statistical readings of the incident queue.
- **Reading tables and charts** maps to the **Asset and configuration management** skill (asset counts, licence reconciliations, and audit coverage are tabular data) and the **Testing** skill, where analysing results means comparing pass counts and failure rates against expectations.
- **Applied cost and resource arithmetic** maps to the **Service focus** and **Change management** skills: coherent operational frameworks and well-planned changes rest on correctly computed durations, capacities, and margins.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Utilisation percentage**

A storage array has a total capacity of 80 TB, of which 52 TB is currently used. What is the utilisation percentage?

- A) 60%
- B) 65%
- C) 68%
- D) 72%

**Correct answer: B**

**Explanation:** Utilisation = (used ÷ total) × 100. 52 ÷ 80 = 0.65; × 100 = 65%. Sense-check with landmarks: half of 80 is 40, so 52 is above 50%; three-quarters of 80 is 60, so 52 is below 75%. This tests basic percentage fluency, and landmark checking is the same reflex that lets an engineer glance at a capacity dashboard and notice a figure that cannot be right.

**Question 2 (easy) — Downtime from an availability figure**

A service achieved 99% availability over a 30-day month. A 30-day month contains 720 hours. For how many hours was the service unavailable?

- A) 0.72 hours
- B) 3.6 hours
- C) 7.2 hours
- D) 14.4 hours

**Correct answer: C**

**Explanation:** Unavailability = 100% − 99% = 1% of the period. 720 × 0.01 = 7.2 hours — about 7 hours 12 minutes. Option A is the decimal-place trap (treating it as 0.1%), and option B corresponds to 0.5%. This tests the availability-to-downtime conversion, and a strong candidate's answer notes the pattern worth memorising: each added "nine" divides permitted downtime by ten — 99% is about 7.2 hours down, 99.9% is about 43 minutes.

**Question 3 (easy) — Average incident volume**

A team logged the following incident counts over four weeks: 84, 91, 78, 95. What was the average (mean) weekly incident count?

- A) 85
- B) 87
- C) 88
- D) 90

**Correct answer: B**

**Explanation:** Mean = total ÷ number of weeks = 348 ÷ 4 = 87. This tests basic mean calculation, and a strong candidate's answer notes the spread: actual weeks ranged from 78 to 95, so a week of 95 is within normal variation, not automatically a crisis — distinguishing normal variation from genuine change is the first analytical step in a problem investigation.

**Question 4 (easy) — Patch compliance percentage**

Of 240 servers in an estate, 216 have received this month's security patch. What percentage of the estate is patched?

- A) 85%
- B) 88%
- C) 90%
- D) 92%

**Correct answer: C**

**Explanation:** 216 ÷ 240 = 0.9 = 90%. Alternatively, 240 − 216 = 24 unpatched; 24 ÷ 240 = 10% unpatched; 100% − 10% = 90%. This tests basic percentage fluency, and a strong candidate's answer notes that the unpatched count is the actionable number — 24 named servers needing attention — which is why patch reports usually show both the percentage and the count.

**Question 5 (moderate) — Storage growth projection**

A file share currently uses 3.0 TB of its 4.2 TB volume. Usage has grown steadily by 150 GB per month (1 TB = 1,000 GB). A team's standard requires action when a volume reaches 90% utilisation. In how many months will the volume reach the 90% action threshold?

- A) 4 months
- B) 5.2 months
- C) 8 months
- D) 12 months

**Correct answer: B**

**Explanation:** Step 1: 90% of 4.2 TB = 3.78 TB. Step 2: headroom before the threshold = 3.78 − 3.0 = 0.78 TB = 780 GB. Step 3: 780 ÷ 150 = 5.2 months. Option C (8 months) projects to 100% full instead of the 90% action point. This tests the formula time-to-threshold = (threshold level − current level) ÷ growth rate — among the most used formulas in operations, converting "when will it be full?" into "when must we act?", building in time to procure and implement.

**Question 6 (moderate) — Reading a KPI table**

The monthly service report shows four KPIs:

| KPI | Target | Achieved |
|---|---|---|
| Availability | ≥ 99.5% | 99.7% |
| Incidents resolved within SLA | ≥ 90% | 87% |
| Change success rate | ≥ 95% | 96% |
| Backup success rate | ≥ 98% | 98% |

How many KPIs met or exceeded their target?

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** Evaluate each row: availability met, incidents within SLA missed (87 < 90), change success met, backup success met (98 satisfies "at least 98" exactly). Three KPIs met, one missed. This tests two things: recognising that meeting a target exactly counts as achieving it, and identifying the row that missed rather than being distracted by the "good" rows — operationally the missed row is the one that drives action.

**Question 7 (moderate) — Percentage change in resolution time**

Last quarter, the mean incident resolution time was 8.0 hours. This quarter it is 6.0 hours. What is the percentage improvement (reduction) in mean resolution time?

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Percentage change = (change ÷ original) × 100 = 2.0 ÷ 8.0 × 100 = 25%. Option D is the reversed-baseline trap (2.0 ÷ 6.0 ≈ 33%), which would only apply to a different question. This tests always anchoring the denominator to the "from" value — a distinction that determines whether improvement figures survive scrutiny in a service report.

**Question 8 (moderate) — Ratio allocation of virtual resources**

A physical host with 96 GB of allocatable memory is to be divided among three VMs in the ratio 3 : 2 : 1 (application : database : monitoring). How much memory does the database VM receive?

- A) 16 GB
- B) 24 GB
- C) 32 GB
- D) 48 GB

**Correct answer: C**

**Explanation:** Total ratio parts = 6; one part = 96 ÷ 6 = 16 GB; database gets 2 parts = 32 GB. Verify: 48 + 32 + 16 = 96. Option D is the application share and option A the monitoring share. This tests the "total the parts, size one part, multiply" method, applicable unchanged to dividing CPU shares, bandwidth, licence counts, or budget.

**Question 9 (moderate) — Backup window arithmetic**

A nightly backup copies 5.4 TB of data. The backup system sustains a throughput of 600 GB per hour (1 TB = 1,000 GB). The backup window runs from 22:00 to 07:00. How much spare time remains in the window after the backup completes?

- A) No spare time — the backup overruns the window.
- B) 1 hour
- C) 2 hours
- D) 3 hours

**Correct answer: A**

**Explanation:** Step 1: 5.4 TB = 5,400 GB. Step 2: duration = 5,400 ÷ 600 = 9 hours. Step 3: the window (22:00 to 07:00) is also 9 hours. The backup exactly fills its window: zero spare time, and any slowdown, retry, or late start overruns. This tests recognising that a job filling its window has no margin — a plan that works only at nominal throughput is a plan that fails on a bad night, and this backup (with a growth trend) is a capacity problem waiting to be raised.

**Question 10 (hard) — Weighted average across teams**

Two teams handle incidents for a shared service. Team A resolved 60 incidents with a mean resolution time of 4.0 hours. Team B resolved 20 incidents with a mean resolution time of 8.0 hours. What is the overall mean resolution time across both teams?

- A) 5.0 hours
- B) 5.5 hours
- C) 6.0 hours
- D) 6.5 hours

**Correct answer: A**

**Explanation:** Averages combine through totals, weighted by volume. Team A total: 60 × 4.0 = 240 hours. Team B total: 20 × 8.0 = 160 hours. Combined: 400 hours across 80 incidents = 5.0 hours. Option C (6.0) is the unweighted trap, (4+8)÷2, correct only if both teams handled equal volumes. This tests weighted averaging, which matters whenever KPIs are consolidated across teams, services, or months of different sizes — the headline number in a service report is wrong if someone averaged the averages.

**Question 11 (hard) — Compound growth in capacity planning**

A database currently occupies 400 GB and grows by 10% per month (compound). Approximately how large will it be after three months?

- A) 520 GB
- B) 528 GB
- C) 532 GB
- D) 540 GB

**Correct answer: C**

**Explanation:** 400 × 1.10 = 440 → 484 → 532.4 GB, or 400 × 1.10³ = 532.4. Option A (520) is the simple-growth trap, adding 3 × 40 GB, which understates the true figure increasingly each month. This tests distinguishing linear from compound growth: at 10% compound, this database doubles in roughly seven to eight months, not the ten months linear thinking suggests — and a strong candidate's answer checks whether the growth mechanism is a steady increment or proportional to size before projecting.

**Question 12 (hard) — Rates versus counts in a failure report**

The quarterly report for an automated job scheduler shows:

| Month | Failed jobs | Total jobs run |
|---|---|---|
| April | 40 | 8,000 |
| May | 66 | 12,000 |
| June | 78 | 15,600 |

A manager comments: "Failures have nearly doubled since April — the scheduler is deteriorating." What do the failure rates show?

- A) The rates confirm deterioration: failures per job are rising each month.
- B) The failure rate is constant at 0.5% across all three months; failure counts rose only because job volume nearly doubled, so per-job reliability is unchanged.
- C) The failure rate is falling, so reliability is improving.
- D) Rates cannot be computed from this table.

**Correct answer: B**

**Explanation:** April: 40 ÷ 8,000 = 0.5%. May: 66 ÷ 12,000 = 0.55%. June: 78 ÷ 15,600 = 0.5%. The rate is essentially flat while volume grew from 8,000 to 15,600, explaining the rise in raw failures. This tests presenting both count and rate: the rate answers "is it getting worse?" (no), the count answers "how much work is it causing?" (more, because volume rose) — a strong candidate's answer notes both figures matter, since a constant rate on doubling workload still doubles absolute rework.

### Administration tips

- **Score for whether a candidate uses weighted totals rather than an average of averages** when combining figures across unequal groups.
- **Watch for whether a candidate identifies which endpoint a projection question asks for** — a threshold, not exhaustion.
- **Note whether a candidate distinguishes linear from compound growth** before projecting a trend.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the rates-versus-counts item (Question 12) to observe whether a candidate computes a rate when a table offers both a count and a volume.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that averages averages** rather than combining through totals.
- **Missing when a candidate divides by the wrong percentage-change baseline.**
- **Accepting a projection to the wrong endpoint** — exhaustion instead of a stated action threshold, or vice versa.
- **Crediting a linear-growth answer where compounding is the correct model.**
- **Missing a boundary-condition error** — "at least 98" is met by exactly 98; "more than 98" is not.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material — using documents of the kinds this role genuinely handles: operational procedures, change control policies, service standards, incident reports, supplier notices, and correspondence with users and service desks.

The typical format is an online, timed test of 15 to 25 minutes. A short passage is shown, followed by questions about it. The dominant question type is true/false/cannot-say: deciding whether a statement is guaranteed by the passage, contradicted by it, or simply not determinable from it. Supporting types include best-summary questions, meaning-in-context questions, and clear-writing judgements. Scoring rewards accuracy under time pressure and — critically — rewards answering strictly from the passage rather than from background knowledge.

Verbal precision is central to infrastructure operations because the role summary asks for documentation to be created and maintained, routine tasks performed according to process and checklists, and change control procedures applied. Every one of those is a reading-and-writing discipline. A change procedure that says a change "must not proceed without CAB approval unless designated an emergency change" contains three load-bearing qualifiers, and misreading any of them produces either an unauthorised change or an unnecessarily blocked one.

The golden rule for this section: answer from the passage alone. If the passage does not state it, and it does not follow necessarily from what the passage states, the answer is "cannot say".

### How this assessment maps to the role

- **Comprehension of procedures and standards** maps to the **Change management** skill (implementing change requests and applying change control procedures under supervision is faithful reading in action) and the **Service management framework knowledge**, where a Level 3 qualification rests on precise understanding of defined terms and processes.
- **True/false/cannot-say discipline** maps to the **Problem management** skill: separating what the evidence states from what a candidate is tempted to infer is the same restraint that keeps investigation notes factual, and the **Testing** skill applies it too.
- **Inference and summary** map to the **Incident management** and **Ownership and topic** skills: gathering required information, and owning an issue until a new owner is found, both depend on absorbing written reports accurately and handing them on without distortion.
- **Clear-writing judgement** maps to the duty to create and maintain documentation and the **User focus** skill: writing that the intended reader — often non-technical — can act on.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Reading a change control rule**

Read this extract from the change policy:

"Normal changes must be submitted to the Change Advisory Board (CAB) at least five working days before the proposed implementation date. Standard changes — pre-approved, low-risk, routine changes performed via a documented procedure — may be implemented without CAB submission. Emergency changes may be implemented before approval, but must be reviewed retrospectively at the next CAB meeting."

Statement: "All changes must be approved by the CAB before implementation."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage describes two explicit exceptions to prior CAB approval: standard changes "may be implemented without CAB submission", and emergency changes "may be implemented before approval". A statement claiming all changes need prior CAB approval is contradicted by the passage. This tests whether a candidate recognises that universal claims ("all", "every") are falsified by a single stated counterexample, which maps directly to real change work: knowing which category a change falls into determines its approval path.

**Question 2 (easy) — What the notice does not say**

Read this supplier notice:

"From 1 October, version 4 of the backup agent will no longer receive security updates. Customers are advised to upgrade to version 5 before this date. Version 5 requires a minimum of 8 GB of memory on the host server."

Statement: "Version 4 of the backup agent will stop working on 1 October."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The notice says version 4 stops receiving security updates — it says nothing about the software ceasing to function. Unsupported software commonly continues running, which is precisely why unsupported software is a risk. This tests distinguishing "unsupported" from "non-functional", the difference between an urgent outage-prevention task and a security risk-management task with different priorities, communications, and timelines.

**Question 3 (easy) — Identifying the required action**

Read this extract from the incident process:

"On receiving a monitoring alert for a production service, the engineer must first check whether an incident already exists for the affected service. If one exists, the alert details must be added to the existing incident. If none exists, a new incident must be raised and categorised. Duplicate incidents for the same underlying event must not be created."

A production alert arrives for the payroll service. An open incident is found for the payroll service covering the same event. According to the passage, what should be done?

- A) Raise a new incident and link it to the old one.
- B) Add the alert details to the existing incident.
- C) Close the existing incident and raise a fresh one.
- D) Ignore the alert, since an incident already exists.

**Correct answer: B**

**Explanation:** The passage prescribes a two-branch procedure: an incident exists, so "the alert details must be added to the existing incident" — option B verbatim. Option A creates precisely the duplicate the final sentence forbids. Option D fails the first branch's requirement, since adding the alert details is mandatory. This tests faithful execution once the branch-determining condition has been checked — real alert handling is the same discipline with the checking included.

**Question 4 (easy) — Meaning in context**

Read this line from a colleague's handover note:

"The disk replacement on FIL-PRD-02 is done, but the array is still rebuilding — expect degraded performance until it completes; don't schedule the backup verification until then."

In this note, "until it completes" refers to the completion of:

- A) The disk replacement.
- B) The array rebuild.
- C) The backup verification.
- D) The handover.

**Correct answer: B**

**Explanation:** The disk replacement is described as already "done", eliminating A; the backup verification has not started, eliminating C. The one process described as ongoing is the array rebuild, and both consequences in the sentence hang on its completion. This tests pronoun resolution, which in operational handovers determines what is waited for and when action is taken — a misread "it" here could trigger a backup verification against a degraded array.

**Question 5 (moderate) — Combining two rules**

Read this extract from the access policy:

"Administrative access to production servers must be requested through the access management system and approved by the service owner. All administrative sessions on production servers are logged, and the logs are reviewed weekly by the security team. Access not used for 90 days is automatically revoked."

Statement: "An engineer whose approved administrative access was granted 100 days ago, and who has never used it, no longer has that access."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The policy states access not used for 90 days is automatically revoked. The access is 100 days old and never used, exceeding 90 days — the automatic revocation applies. This tests noticing that the rule is automatic ("is automatically revoked"), not discretionary — had the wording been "may be revoked", the answer would flip to "cannot say", since discretion leaves the outcome undetermined.

**Question 6 (moderate) — Choosing the accurate summary**

Read this incident report extract:

"At 09:12 the load balancer began returning errors for approximately 30% of requests to the licensing service. The on-call engineer failed over to the standby load balancer at 09:31, restoring full service. The failed unit was found to have a corrupted configuration following an automatic firmware update at 03:00. The supplier has been asked to confirm whether the firmware version is faulty. Pending their response, automatic firmware updates have been disabled on both units."

Which is the most accurate summary?

- A) "A faulty firmware version corrupted the load balancer configuration; the supplier has confirmed the fault and updates are disabled."
- B) "Partial errors from 09:12 were resolved by failover at 09:31; the failed unit had a corrupted configuration after an automatic firmware update; supplier confirmation of a firmware fault is awaited, and automatic updates are disabled meanwhile."
- C) "The licensing service was completely down for 19 minutes due to a supplier error."
- D) "The standby load balancer corrupted its configuration at 03:00 and was replaced at 09:31."

**Correct answer: B**

**Explanation:** Option A upgrades a hypothesis ("the firmware version was faulty") into a confirmed fact. Option C converts 30% errors into "completely down". Option D misassigns the corruption to the standby unit. Option B preserves every fact at its stated strength: partial impact, timeline, found condition, suspected cause, and interim mitigation. This tests summarising without altering claim strength — the difference between a handover colleagues can trust and one that spreads misinformation.

**Question 7 (moderate) — Inference from a service desk email**

Read this email:

"Since the office move completed on Friday, we have logged 26 tickets from Building C users unable to reach the print service, versus none from Buildings A and B. The print server itself shows no errors and users in A and B are printing normally. Building C was recabled during the move. Could your team check the network path from Building C before we escalate to the cabling contractor?"

Which conclusion is best supported?

- A) The cabling contractor made an error in Building C.
- B) The print server is faulty.
- C) The fault pattern — confined to Building C, beginning after the move, with the server and other buildings unaffected — makes the Building C network path the right place to investigate first.
- D) The 26 users have misconfigured their laptops.

**Correct answer: C**

**Explanation:** The email establishes a differential: one building affected, two unaffected, onset coinciding with a recabling event in the affected building, destination server healthy. That pattern localises the likely fault to the path between Building C and the print service. Option A may eventually prove true, but the email is explicitly one step short of blaming the contractor. Option B is contradicted; option D is vanishingly unlikely. This tests holding a conclusion at the evidence's strength — "the right place to investigate first", not "proven".

**Question 8 (moderate) — Conditional instructions with an exception**

Read this extract from the patching runbook:

"Apply patches to servers in the order listed in Appendix A. After each server, run the verification script. If verification passes, continue to the next server. If verification fails, revert the patch on that server and continue to the next server — unless the failed server is a domain controller, in which case stop all patching and notify the infrastructure lead before proceeding."

Patching reaches the fifth server on the list — a file server — and its verification fails. According to the runbook, what should be done?

- A) Stop all patching and notify the infrastructure lead.
- B) Revert the patch on the file server and continue to the sixth server.
- C) Retry the patch on the file server before deciding.
- D) Continue to the sixth server without reverting, and log the failure.

**Correct answer: B**

**Explanation:** Verification failed, so the failure branch applies: revert and continue — unless the server is a domain controller, which a file server is not. Option A applies the exception to a case outside its scope. Option C invents a retry the runbook does not offer, and option D skips the mandatory revert. This tests locating the default rule, locating the exception, checking whether the exception's condition is met, and only then acting.

**Question 9 (moderate) — Clear-writing judgement for documentation**

The first line of a procedure that colleagues will follow during incidents is being written. Which opening line is best?

- A) "In the event that circumstances should arise wherein the service becomes unresponsive, it may be considered appropriate for remediation activities to be initiated by the responsible party."
- B) "If the service stops responding, the on-call engineer must restart it using the steps below."
- C) "Service unresponsiveness remediation initiation procedure follows."
- D) "As everyone knows, the usual thing to do when it breaks is the standard restart."

**Correct answer: B**

**Explanation:** Option B is direct, active, and complete: a clear trigger condition, a named actor, a mandatory verb, and a pointer to the method. Option A buries the same content in passive, hedged officialese. Option C is a noun pile-up with no instruction. Option D assumes shared knowledge the reader — possibly a new starter — may not have. This tests judging a line as an instruction to be executed under pressure, exactly what creating and maintaining documentation demands.

**Question 10 (hard) — Scope tracking across a standard**

Read this extract from the logging standard:

"All production servers must forward system logs to the central platform in near real time. Application logs must also be forwarded where the application supports remote logging; where it does not, application logs must be retained locally for 90 days. Test servers are outside the scope of this standard."

Statement: "A production server running an application that does not support remote logging is in breach of the standard if its application logs are only retained locally."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The server is production, so the standard applies, and its application does not support remote logging, so the applicable rule is the fallback: retain locally for 90 days. Local-only retention is exactly what the standard prescribes for this case, not a breach. The statement invites importing the headline rule ("must forward") while missing that the passage itself carves out this case. This tests attaching a case to the rule that actually governs it, rather than to the headline rule.

**Question 11 (hard) — Reconciling documents by recency and authority**

Read these two extracts.

Extract 1, from the published service catalogue: "The reporting service is available 24/7, with support hours 08:00–18:00 Monday to Friday."

Extract 2, from a service notice emailed yesterday by the service owner: "From next Monday, the reporting service moves to an overnight maintenance model: the service will be unavailable 02:00–04:00 daily. The catalogue entry will be updated to reflect this at the end of the month."

Today is Wednesday. A user asks whether the reporting service will be available at 03:00 this coming Saturday. Based on both extracts, what is the correct answer?

- A) No — the overnight maintenance window applies every day from now on.
- B) Yes — the change takes effect next Monday, so this Saturday at 03:00 the service is still on the 24/7 model.
- C) No — the catalogue is out of date, so the service should be assumed unavailable overnight.
- D) The documents contradict each other, so no answer can be given.

**Correct answer: B**

**Explanation:** Sequence the information twice. First, recency and authority: the service owner's notice is newer and explicitly supersedes the catalogue. Second, the notice's effective date: the new model starts "from next Monday" — this coming Saturday precedes next Monday, so the old 24/7 model still applies. Option A applies the new rule before its commencement date. Option D declares a contradiction where there is only an orderly transition with a stated switchover. This tests holding both the supersession and the effective date in view at once.

**Question 12 (hard) — Inference about user needs from research notes**

Read this extract from user research notes shared with the team:

"We interviewed 14 caseworkers about the case system's overnight batch window (currently 23:00–01:00). Twelve reported no impact. Two — both in the international team — reported regular disruption: they work UK evening hours to overlap with partners in Asia-Pacific time zones, and the batch window falls in the middle of their working peak. The international team is expected to triple in size next year. Caseworkers also asked, unprompted, for advance notice when the batch overruns, as overruns currently surface only when the system 'goes quiet'."

Which conclusion is best supported by the notes?

- A) The batch window suits almost everyone, so no action is needed.
- B) The window disrupts a small but growing user group whose working pattern differs from the majority, and users need proactive communication about overruns — two distinct needs the current arrangement does not meet.
- C) The batch window must be moved immediately to daytime.
- D) The two international caseworkers should change their working hours.

**Correct answer: B**

**Explanation:** The notes contain two separable findings: a minority-impact finding with a growth trend attached, and an unprompted communication need independent of when the window sits. Option A discards both the trend and the unprompted request. Option C converts evidence into a specific remedy the notes do not evaluate. Option D inverts user focus by redesigning the users. This tests using qualitative and quantitative data about users to turn user focus into outcomes — reading research notes for every distinct need they contain.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say**, and whether a candidate combines two explicitly stated rules correctly rather than importing an unstated one.
- **Note whether a candidate weights modal verbs and quantifiers** ("must", "may", "all", "unless", "at least") as decisive.
- **Watch for whether a candidate matches a case to the specific rule that governs it**, rather than the headline rule.
- **Keep timing consistent** across candidates for this level.
- **Use the multi-document item (Question 11) to observe whether a candidate reconciles sources by recency and effective date** rather than declaring an unresolved contradiction.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built from operational knowledge not stated in the passage.**
- **Missing when a candidate substitutes a neighbouring concept** ("stops being updated" read as "stops working").
- **Crediting an answer that applies a newer document's rule before its stated effective date.**
- **Missing when a candidate applies an exception clause outside its stated scope.**
- **Rewarding the most confident-sounding summary over the most faithful one.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. Question formats vary: choose the most effective response; choose the most and least effective from a set; or rate every response on a scale. The scenarios have no arithmetic and no passage-parsing — they test professional judgement: what to do when an alert fires mid-change, when a colleague pressures a shortcut, when a fix works but the cause is unclear, or when a user's complaint contradicts a dashboard.

The typical format is an online test of 25 to 40 minutes with 12 to 20 scenarios, usually generously timed because it measures judgement rather than speed. Scoring compares choices against the consensus of experienced practitioners and against the behaviours the organisation values: user focus, ownership, collaboration, appropriate escalation, honesty, and inclusion.

Employers assess this because at this level, judgement is the difference between an engineer who executes tasks and one who can be trusted with a production estate. Owning issues until a new owner is found or the problem is resolved requires judging when to persist and when to hand over. Applying change control under supervision requires judging what to do when reality departs from the change plan mid-implementation. Monitoring services and taking "appropriate action" — and appropriateness is precisely what situational judgement measures.

### How this assessment maps to the role

- **Ownership judgement** maps to the **Ownership and topic** skill: owning an issue until a new owner is found or the problem is mitigated or resolved is a series of judgement calls about persistence, handover quality, and follow-through.
- **Process integrity under pressure** maps to the **Change management** skill (applying change control procedures when others push for shortcuts) and the **Asset and configuration management** skill (keeping records accurate even when updating them is inconvenient).
- **Escalation and alerting judgement** maps to the **Incident management** skill and the duty to monitor, alert and take appropriate action.
- **Investigation discipline** maps to the **Problem management** and **Testing** skills: contributing to remedies without guessing, preserving evidence, and being honest about what is verified versus assumed.
- **Service and user orientation** maps to the **Service focus** and **User focus** skills: remembering that behind every component KPI is a service, and behind every service are users whose needs are the point of the work.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Alert during a routine task**

A candidate is mid-way through a routine, interruptible documentation task when monitoring raises a critical alert: the customer-facing booking service is returning errors for all requests. The incident process requires immediate logging and notification of the on-call lead for customer-facing outages. What is the most effective response?

- A) Finish the documentation section first so as not to lose the train of thought, then handle the alert.
- B) Pause the documentation, log the incident, notify the on-call lead per the process, and begin initial diagnostics while awaiting their response.
- C) Attempt a full solo fix first, notifying the on-call lead only if it cannot be resolved within an hour.
- D) Forward the alert email to the whole team and resume documentation.

**Correct answer: B**

**Explanation:** A total outage on a customer-facing service outranks any interruptible task, so option A fails on prioritisation. Option B follows the process precisely and adds appropriate initiative: logging creates the record, notifying the on-call lead engages the accountable responder, and starting initial diagnostics uses the waiting time productively without exceeding the candidate's remit. Option C delays the coordinated response the process exists to provide. Option D broadcasts without acting. This tests prioritisation by user impact, faithful process execution, and initiative within role boundaries.

**Question 2 (easy) — A discrepancy that could be ignored**

While completing an unrelated task, a candidate notices the CMDB lists a decommissioned server as live, in a rack where it can be seen it no longer exists. Updating the record is not today's task, and nobody has noticed. What is the most effective response?

- A) Leave it — it is not the candidate's task, and touching other records creates risk.
- B) Correct or flag the record through the team's configuration process now (or log it as a data-quality task if immediate correction is not permitted), so the CMDB reflects reality.
- C) Mention it verbally to a colleague and move on.
- D) Delete the server record entirely to tidy the database.

**Correct answer: B**

**Explanation:** Accurate configuration information is a standing duty, not a task-scoped one. Option B closes the gap through the proper route. Stale CMDB records have real costs — engineers plan patching, capacity, and incident response against them. Option A treats data quality as someone else's job; option C almost guarantees the fix is forgotten, since verbal mentions leave no record; option D exceeds the finding — decommissioned assets usually require a status change with history preserved, not deletion. This tests proactive ownership, respect for process, and understanding that records are shared infrastructure.

**Question 3 (easy) — A user disputes the dashboard**

A user phones: the HR system has been "unusably slow all morning" for their whole team. The monitoring dashboard shows the HR system healthy, with normal response times. What is the most effective response?

- A) Tell the user the system is fine because the dashboard proves it, and close the call.
- B) Take the report seriously: gather specifics (who is affected, since when, from where, doing what), log the incident, and investigate the gap between the users' experience and the dashboard — the path between them may be the problem.
- C) Advise the whole team to restart their computers and call back tomorrow.
- D) Escalate straight to the network team, telling them their network is broken.

**Correct answer: B**

**Explanation:** A green dashboard and a suffering user are not contradictory — dashboards measure what they are instrumented to measure, typically the server side, while users experience the whole chain. Option B treats the user report as data and investigates the discrepancy, often where the most instructive faults live. Option A elevates instrumentation over experience and abandons users who remain unable to work. Option C is a generic deflection. Option D escalates on a guess. This tests user focus, investigative honesty, and gathering required information before concluding.

**Question 4 (moderate) — Pressure to skip change control**

A project manager, under deadline pressure, asks for a firewall rule change to be applied this afternoon: "The change board doesn't meet until Thursday and we go live Wednesday. It's a tiny change — just do it, I'll take responsibility." The change is not in any approved self-serve category, and the process has an expedited/emergency route requiring team lead approval. What is the most effective response?

- A) Apply the change — the project manager has accepted responsibility, and go-live matters.
- B) Refuse flatly and tell the project manager to plan better next time.
- C) Explain that an unapproved change cannot be applied, and immediately offer the legitimate fast path: contact the team lead about the expedited route so the change can be properly approved before Wednesday.
- D) Apply the change but keep the project manager's message as evidence it was their decision.

**Correct answer: C**

**Explanation:** This scenario tests holding process under social pressure while staying genuinely helpful. Option C declines the improper request clearly and actively solves the real problem: the process provides an expedited route, comfortably beating Wednesday. Option A fails on a point worth internalising: a project manager cannot "take responsibility" for bypassing change control — accountability for applying unauthorised changes stays with the person who applies them. Option D is preparing for the consequences of a decision known to be wrong. Option B protects process but fails collaboration. This tests integrity under pressure, constructive collaboration, and process fluency.

**Question 5 (moderate) — Mid-change deviation**

An approved change to upgrade a monitoring agent across twenty servers is being implemented, following the change plan. On server twelve, the installer fails with an error the plan does not mention, though the server appears to keep functioning normally. The plan has no explicit instruction for this situation. What is the most effective response?

- A) Continue with the remaining eight servers and investigate server twelve later.
- B) Pause the rollout, record the error exactly, verify server twelve's monitoring is still working, and check with the change owner (or a supervisor) whether to proceed, fix, or invoke the rollback plan.
- C) Improvise a manual installation on server twelve using a workaround found online.
- D) Roll back all twelve servers immediately and abandon the change.

**Correct answer: B**

**Explanation:** An unplanned deviation during an approved change converts execution mode into judgement mode, and the effective judgement is to stop and consult, not to improvise or barrel on. Option B contains the four correct elements: pause, record, verify impact, and consult the accountable person before proceeding. Option A gambles that an ununderstood failure is isolated. Option C introduces an unauthorised, untested variation inside an approved change — a configuration drift that surfaces months later. Option D overreacts. This tests composure, evidence preservation, proportionality, and using supervision properly.

**Question 6 (moderate) — A fix works but nobody knows why**

An application service was failing intermittently. A component was restarted on a hunch, and the failures stopped. The incident can now be closed, users are happy, and it is nearly end of shift. What is the most effective response?

- A) Close the incident as resolved with the note "restarted component, issue resolved".
- B) Close the incident but record what was observed, what was done, and that the root cause is unknown — and raise or link a problem record so the underlying cause is investigated before it recurs.
- C) Keep the incident open indefinitely until root cause is found, regardless of user impact being over.
- D) Say nothing about the restart, in case it was the wrong thing to do.

**Correct answer: B**

**Explanation:** This scenario separates incident management from problem management. The incident (user impact) is genuinely resolved, so closing it is correct. But a fix that works for unknown reasons is a debt: the fault will likely return, and the next engineer starts from zero unless the observations survive. Option B pays the debt properly: honest closure notes plus a problem record. Option A implies understanding that does not exist. Option C misuses the incident record. Option D is concealment. This tests honesty about uncertainty, framework fluency, and ownership that extends past the visible symptom.

**Question 7 (moderate) — Handover of an owned issue**

Two days have been spent investigating a recurring storage fault, with detailed notes built up. A rota move to a different duty happens tomorrow, and the fault is not yet resolved; a colleague will take over. What is the most effective response?

- A) Tell the colleague "it's all in the ticket" and move on — they can read the notes.
- B) Update the ticket fully, then give the colleague a structured handover: what is confirmed, what is suspected, what has been ruled out, what the next planned step is — and remain available for questions until they confirm they have what they need.
- C) Take the fault along unofficially and keep working on it alongside the new duties.
- D) Suggest the investigation restart from scratch so the colleague forms their own view.

**Correct answer: B**

**Explanation:** The ownership skill is explicit: own an issue until a new owner has been found — and "found" means genuinely equipped, not merely named. Option B transfers the investigation's real asset: the structure of the reasoning, plus availability for follow-up questions. Option A performs a handover without ensuring one has happened. Option C means the issue has two half-owners and no accountable one. Option D discards two days of evidence for a ritual of independence. This tests complete ownership through transition and knowledge transfer as an active duty.

**Question 8 (moderate) — A colleague's unsafe habit**

An experienced colleague routinely makes small production configuration tweaks without change records — "twenty-second jobs, not worth the paperwork". This week, one such tweak coincided with a brief outage on another team's service, and nobody connected the two because nothing was recorded. What is the most effective response?

- A) Say nothing — the colleague is senior, and the habit is common.
- B) Speak with the colleague directly and without accusation: point out that this week's outage could not be traced because the tweak was unrecorded, suggest using the standard-change route for small jobs, and raise it with a team lead if the practice continues.
- C) Report the colleague to senior management immediately, citing this week's outage.
- D) Start keeping a private log of the colleague's tweaks to prove the connection next time.

**Correct answer: B**

**Explanation:** The scenario has moved past the hypothetical: unrecorded change activity has already produced an untraceable outage. Option B is proportionate and constructive: specific (this week's outage), offering a legitimate lightweight path, and setting an escalation boundary if the risk persists. Option C leaps past the collegial step to the most severe channel on a first conversation-worthy issue. Option D is surveillance in place of candour. This tests courage, proportionate escalation, process fluency, and treating a colleague as a partner to influence.

**Question 9 (hard) — Competing demands on a degraded service**

At 14:00 a disk array degrades: the finance service it backs is running but slow, and the array's remaining redundancy means a second disk failure would cause data loss. The documented fix is a disk replacement plus rebuild, requiring the service to run even slower for about three hours. Finance's quarter-end deadline is 17:00 today, and the finance manager begs for the rebuild to be delayed until tomorrow. A team lead is in a meeting, reachable by message. What is the most effective response?

- A) Delay the rebuild until tomorrow — the finance deadline is real, and the array will probably hold.
- B) Start the rebuild immediately — data integrity always beats deadlines; the finance manager will have to cope.
- C) Message the team lead now with a crisp summary — degraded array, data-loss exposure until rebuilt, rebuild slows finance through their 17:00 quarter-end — and a recommendation, so the risk trade-off is decided at the right level quickly; meanwhile prepare the replacement so no time is lost.
- D) Ask the finance manager to email accepting the risk, then delay until tomorrow.

**Correct answer: C**

**Explanation:** This is a genuine risk trade-off, and the mark of good judgement is recognising it is not one person's to settle alone — but that engaging the decision-maker fast and well is. Option C escalates immediately with a decision-ready summary and uses the waiting minutes to prepare, preserving both options. Options A and B each amputate the trade-off unilaterally. Option D is a subtle trap: the finance manager cannot own infrastructure risk, and an email "accepting risk" from the wrong owner is governance theatre. This tests escalation quality, risk articulation, preparation under uncertainty, and knowing which decisions belong at which level.

**Question 10 (hard) — Most and least effective**

During patching, it is noticed that the patch about to be applied to a production application server was reported this morning (in a supplier bulletin circulated to the team) as causing service crashes on a configuration matching this one. The change is approved and scheduled for tonight; the vulnerability it fixes is rated serious. Which response is MOST effective and which is LEAST effective?

1. Proceed as approved — the change went through CAB, and the schedule is the schedule.
2. Halt the patch for this server, take the bulletin to the change owner today, and ask for a decision: defer, apply with enhanced rollback readiness, or await a fixed patch version — documenting whichever is chosen.
3. Quietly skip that server, mark the change complete, and wait for a corrected patch.
4. Apply the patch to a matching test server first, if one exists, and share the result with the change owner before the production window.

- A) Most effective: 2; least effective: 3
- B) Most effective: 4; least effective: 1
- C) Most effective: 2; least effective: 1
- D) Most effective: 4; least effective: 3

**Correct answer: A**

**Explanation:** Response 2 is strongest: new material information invalidates the risk assessment the approval rested on, and surfacing it to the change owner today with realistic options framed is ownership and evidence-based challenge. Response 4 is genuinely good but second-best, since it acts unilaterally before engaging the accountable owner. Response 1 abandons professional judgement in favour of "the schedule is the schedule". Response 3 is worst: it combines an unmanaged vulnerability, a falsified record, and concealment. This tests the ranking principle that surfacing new risk through the accountable owner beats solo mitigation, which beats blind compliance, which beats deceptive non-compliance.

**Question 11 (hard) — An inclusion moment under pressure**

During a tense major incident bridge call, a service desk analyst — new, and audibly nervous — offers an observation: several affected users mentioned a VPN prompt just before the failures. A senior engineer talks over them: "Desk folks, please keep the line clear for engineering." The observation matches something noticed in the logs but not yet connected. What is the most effective response?

- A) Stay silent — challenging a senior engineer mid-incident undermines command.
- B) Say briefly: "Actually, the desk's VPN observation matches authentication errors I'm seeing in the logs — worth checking," crediting the analyst and putting the lead onto the connection.
- C) Message the analyst privately afterwards to say their input was good, but say nothing on the call.
- D) Wait until the post-incident review to raise both the VPN lead and the senior engineer's behaviour.

**Correct answer: B**

**Explanation:** Two things are at stake simultaneously: a live diagnostic lead and the collaborative climate that produces such leads. Option B serves both, briefly and substantively, and explicitly credits the analyst. Option A confuses hierarchy with incident command. Option C consoles the person but abandons both the live lead and the public correction. Option D delays a diagnostic lead for hours. This tests inclusion as an operational capability, courage with proportion, evidence over status, and keeping user-side information flowing into technical response.

**Question 12 (hard) — End of shift, untested assumption**

It is 17:40; a shift ends at 18:00. A change to log rotation on four production servers has just been implemented. The change plan's verification step says "confirm logs rotate correctly at the next scheduled rotation" — which happens at 02:00 tonight. The overnight shift is short-staffed, and nothing in the plan assigns the 02:00 verification to anyone. What is the most effective response?

- A) Leave at 18:00 — the implementation went cleanly, and rotation will almost certainly work.
- B) Before leaving: hand the verification explicitly to the overnight shift with exact instructions (what to check at 02:00, what "correct" looks like, what to do and who to contact if it fails), record this in the change ticket, and if the overnight shift cannot take it, agree an alternative with a lead — do not let the step silently own no one.
- C) Stay until 02:00 to do the verification personally.
- D) Set a personal reminder to check the logs the next day at 09:00.

**Correct answer: B**

**Explanation:** The scenario's trap is the orphaned step: a verification that everyone assumes will happen and no one owns. Option B closes it with a genuine handover: explicit assignment, executable instructions, a record in the change ticket, and an escalation path. This is the ownership skill applied to a task rather than an incident. Option A converts "almost certainly" into nobody checking. Option C over-serves the step at unsustainable personal cost. Option D leaves a seven-hour window unobserved. This tests foresight, complete ownership through handover, realistic self-management, and making accountability visible in shared records.

### Administration tips

- **Score for whether a candidate escalates a genuine risk trade-off** rather than resolving it unilaterally, while still preparing meanwhile.
- **Watch for whether a candidate's response to a fix of unknown cause pays the debt** — honest closure notes plus a problem record, not silent implication of understanding.
- **Note whether a candidate keeps process integrity under social pressure while remaining constructive**, offering the legitimate fast path rather than a blunt refusal.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.
- **Use the orphaned-responsibility items (Questions 10 and 12) to observe whether a candidate makes ownership explicit and recorded**, rather than leaving a step or risk unassigned.

### Common pitfalls to watch for when scoring

- **Rewarding the "hero" reflex** — solo fixes, solo risk decisions, staying until 02:00 — over coordinated responses that engage processes and people at the right moments.
- **Crediting "it was approved / scheduled" as justification for proceeding into newly known danger.**
- **Missing any falsified or silent record** — marking incomplete work complete, closing incidents with implied understanding, tweaking production without records.
- **Rewarding dismissal of user-side evidence** in favour of a green dashboard or senior voice.
- **Missing disproportionate escalation in either direction** — under-escalating a risk trade-off, or over-escalating a first conversation-worthy issue to senior management.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an infrastructure operations engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests reasoning with monitoring trends, dependency chains, configuration records, change timelines, and maintenance-window scheduling. The numeric section tests availability percentages and their downtime budgets, capacity thresholds and time-to-exhaustion, weighted resolution times, and failure rates versus failure counts. The verbal section tests true/false/cannot-say discipline on change policies, supplier notices, runbooks, and user research notes — the discipline that keeps investigation notes factual and handovers trustworthy. The situational judgement section tests the dilemmas that define operational professionalism: process integrity under pressure, mid-change deviations, honest closure of half-understood fixes, risk trade-offs escalated well, and ownership carried through to the last unglamorous verification step.

The same principles recur across all four sections: anchor to the last known good state and reason forwards; verify field by field rather than by general impression; hold conclusions at exactly the strength the evidence supports; match cases to the rules that actually govern them; keep records honest, keep users informed, and make sure every risk and task has a visible owner.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can be trusted with a production estate: monitoring it faithfully, changing it carefully, and escalating and recording honestly under pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
