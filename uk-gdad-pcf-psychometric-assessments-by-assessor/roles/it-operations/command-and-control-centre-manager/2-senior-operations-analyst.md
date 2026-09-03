# Senior Operations Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior operations analyst, within a command and control centre in the UK Government Digital and Data profession. These assessments are job-specific: they draw on the materials a senior operations analyst genuinely handles — monitoring dashboards, notification queues, incident records, change requests and impact assessments, asset and configuration data, virtual environment consoles, and on-call rotas — and the decisions genuinely made, such as prioritising incoming messages for the team, diagnosing incidents and investigating their causes, assessing the impact of proposed changes, and initiating investigations into recurring patterns and trends.

A senior operations analyst is the team's filter and its first line of diagnosis. They prioritise what arrives, ensure the correct flow of information, and keep records and data capture accurate, so the whole team's picture of reality depends on their care. They detect notifications and conduct monitor checks to confirm systems are running correctly, and in emergencies may be on call outside working hours, making judgement calls with limited information and no one standing beside them. The four assessment types here map directly onto those demands: cognitive questions measure the pattern recognition and diagnostic deduction behind monitor checks; numeric questions measure fluency with the KPIs, capacity figures, and trend data dashboards provide; verbal questions measure exact reading of procedures, change records, and escalation messages; situational judgement questions measure the trickier calls — when to wake someone at 03:00, how to handle conflicting priorities, and how to keep information flowing under pressure.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why employers use it for this role, a mapping of the assessment's dimensions to the specific named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role actually demands, using practical operational scenarios rather than abstract shapes. It presents the working materials of a command and control centre — notification queues, monitor check schedules, configuration records, change impact matrices, virtual environment topologies — and asks the candidate to reason about them quickly and accurately.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective and norm-referenced against people at a similar level, and many platforms adapt question difficulty. Employers typically receive a breakdown of speed against accuracy. Short ungraded practice questions are usually offered before the scored section begins.

Cognitive assessment is particularly relevant for this role because its professional value is fast, structured reasoning over operational data. Monitor checks are pattern-matching current behaviour against known-good baselines. Diagnosing an incident is differential reasoning: which of several possible causes best explains this combination of symptoms? Assessing the impact of a change is tracing dependencies forward to their consequences. Prioritising the team's incoming messages is ranking by impact and urgency under time pressure. And on call at 03:00 with a logged event that is "not functioning", all of this happens with limited information and nobody to check the working.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the duty to detect notifications and conduct monitor checks, and to **Problem management**: initiating and monitoring actions to investigate patterns and trends starts with recognising that a set of events forms a pattern at all.
- **Logical deduction** maps to **Incident management** and **Change management**: diagnosing incidents is differential reasoning from symptoms to cause; assessing change impact is deduction from dependency rules to consequences.
- **Error checking** maps to **Asset and configuration management** and the duty to ensure correct information flow, record keeping and data capture.
- **Prioritisation** maps directly to the role-defining duty to prioritise incoming messages for the team, and to **Ownership and initiative**.
- **Applied problem solving** maps to **Availability and capacity management**, **Continuity management** and **Service focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a notification queue**

The monitoring platform tags notifications with a code in the format `<SYSTEM>-<TYPE>-<NUMBER>`, where TYPE is either ALR (alert) or INF (informational), for example `PAY-ALR-0031`. This morning's queue contains:

1. PAY-ALR-0142
2. CRM-INF-0087
3. DNS-0093-ALR
4. VDI-ALR-0201

Which notification breaks the tagging pattern?

- A) Notification 1
- B) Notification 2
- C) Notification 3
- D) Notification 4

**Correct answer: C**

**Explanation:** The pattern is system code, then type, then number. Notifications 1, 2 and 4 follow it; notification 3 places the number before the type. This matters operationally because routing rules and filters usually parse these codes positionally, so a malformed tag can drop a genuine alert into the wrong queue or exclude it from a report entirely. This tests checking each candidate against the rule field by field rather than trusting a glance, since the eye tends to normalise transposed segments — exactly why the error survives in real queues too.

**Question 2 (easy) — Deduction from a monitoring rule**

The monitor check procedure states: "A green status requires all three of the following: heartbeat received within the last 5 minutes, disk usage below 85%, and no unacknowledged critical alerts." A server shows: heartbeat received 2 minutes ago; disk usage 82%; one unacknowledged critical alert from overnight. What status should the check record?

- A) Green, because two of the three conditions are met.
- B) Green, because the heartbeat is the most important condition.
- C) Not green, because all three conditions are required and one fails.
- D) Not green, because disk usage above 80% is a warning.

**Correct answer: C**

**Explanation:** The rule is a conjunction requiring all three conditions; the unacknowledged critical alert fails the third, so the status cannot be green. Option D invents an 80% threshold the procedure does not state — the procedure's disk threshold is 85%. Options A and B convert "all" into "most" or "the important one". This tests deducing from the stated rule, the whole rule, and nothing but the rule — the fidelity a monitor check's value depends on entirely.

**Question 3 (easy) — Error checking a configuration record**

Verifying virtual machine records against the virtualisation console. The register states:

| VM name | vCPUs | RAM | Host |
|---|---|---|---|
| VM-CASE-01 | 4 | 16 GB | HOST-A |
| VM-CASE-02 | 4 | 16 GB | HOST-A |
| VM-RPT-01 | 8 | 32 GB | HOST-B |
| VM-RPT-02 | 8 | 32 GB | HOST-B |

The console shows all four VMs exist with the stated vCPUs and RAM, but VM-RPT-02 is running on HOST-A, having been migrated during a maintenance window last month. How many register rows are inaccurate, and what is the correct action?

- A) 0 rows; no action needed since the migration was authorised.
- B) 1 row; update VM-RPT-02's host to HOST-A and note the correction.
- C) 2 rows; both RPT entries need updating for consistency.
- D) 1 row; migrate VM-RPT-02 back to HOST-B so the register becomes correct.

**Correct answer: B**

**Explanation:** Three rows match the console; VM-RPT-02's host field does not — one inaccurate row. Records exist to describe reality, so when reality changed legitimately, the record is what must move — option B. Option D inverts this, disrupting a service to fix a paperwork problem. Option A confuses "the change was authorised" with "the record is accurate". Option C invents a second defect. This tests the asset and configuration skill precisely — verify the location and state of IT assets, maintain accurate information — and illustrates why post-change record updates belong in every change checklist.

**Question 4 (easy) — Prioritising the team's queue**

Four items arrive within two minutes. The team's priority rule is: live citizen-facing impact first, then risk of imminent impact, then internal impact, then routine. Which is routed for action first?

1. An informational notification that a batch job completed late (no downstream deadline affected).
2. An alert that the licensing portal's error rate has jumped from 0.5% to 12% in ten minutes.
3. An email from a manager asking for last week's availability figures by end of day.
4. A warning that a certificate on an internal admin tool expires in 20 days.

- A) Item 1
- B) Item 2
- C) Item 3
- D) Item 4

**Correct answer: B**

**Explanation:** Item 2 is live citizen-facing impact happening now, outranking everything immediately. Item 4 is a genuine risk but weeks away; item 3 has a deadline and internal impact; item 1 is routine. Option C confuses a manager's request with automatic urgency; option A clears an easy item first. This tests applying a stated priority rule in order — the defining duty at this level, worth making instinctive since there will be no time to derive it on a bad Monday.

**Question 5 (moderate) — Differential diagnosis from symptoms**

At 07:40, three near-simultaneous notifications: (i) users in one regional office cannot reach the case system; (ii) the same office's IP phones have dropped; (iii) monitoring shows the case system's application servers healthy, with normal response times for all other offices. Which cause best fits all the evidence?

- A) The case system's database has failed.
- B) A network failure affecting that office's connectivity.
- C) The case system's application servers have crashed.
- D) A password expiry policy has locked out the office's users.

**Correct answer: B**

**Explanation:** A database or application failure would degrade the case system for all offices, contradicted by (iii). A password lockout might explain (i) but not the dropped phones, and mass simultaneous expiry is implausible. A network failure at the office boundary explains everything at once — both the case system access and the phones depend on connectivity, while central services remain genuinely healthy. This tests the incident management skill of diagnosing from evidence: listing symptoms and striking out any hypothesis one symptom contradicts, then routing to the team whose diagnosis actually fits.

**Question 6 (moderate) — Change impact assessment**

Assessing change request CR-1088: "Upgrade the shared authentication service, requiring a 30-minute outage, proposed for Tuesday 07:00–07:30." Dependency records show: the case system, the licensing portal and the internal HR tool all require the authentication service for new logins; existing logged-in sessions continue working during an outage; the licensing portal's peak citizen usage is 07:00–09:00; nightly batch jobs complete by 05:30 and do not authenticate. What is the most significant impact to document?

- A) Nightly batch jobs will fail during the outage.
- B) New logins to the licensing portal will fail during its morning peak, affecting citizens.
- C) Existing HR tool sessions will be terminated.
- D) There is no impact because the outage is only 30 minutes.

**Correct answer: B**

**Explanation:** Batch jobs finish by 05:30 and don't authenticate, eliminating A. Existing sessions survive the outage, eliminating C. The genuine exposure is new logins between 07:00 and 07:30, and the licensing portal is entering its citizen peak at exactly that time. Option D mistakes brevity for harmlessness. This tests deduction plus timing plus users, and a strong candidate's answer would recommend shifting the window and confirming session-survival behaviour with the service team rather than assuming the records are current.

**Question 7 (moderate) — Error checking across two records**

The change log shows: "CR-1090 implemented Sunday 02:00–02:40: storage expansion on HOST-B, completed successfully." The monitoring history shows: HOST-B unreachable Sunday 02:05–02:35; VM-RPT-01 and VM-RPT-02 (both recorded as running on HOST-B) show no monitoring gap at all on Sunday. Given Question 3's finding that VM-RPT-02 actually runs on HOST-A, which statement best reconciles the records?

- A) The monitoring system failed on Sunday and its history is unreliable.
- B) VM-RPT-01's lack of a monitoring gap is expected; VM-RPT-02's is the anomaly.
- C) VM-RPT-02's lack of a gap is consistent with it running on HOST-A; VM-RPT-01's lack of a gap is the anomaly worth investigating.
- D) The change did not actually happen.

**Correct answer: C**

**Explanation:** VM-RPT-02 shows no gap, consistent with living on HOST-A — not anomalous. VM-RPT-01, recorded and presumed actually on HOST-B, shows no gap either — that is the genuine discrepancy, suggesting it too may have moved without a record update, or its monitoring path doesn't traverse the affected route. Option B trusts the stale register over the verified fact. Options A and D leap to distrusting a whole record on one discrepancy. This tests cross-record consistency checking — the analytical heart of maintaining accurate configuration information, and how quiet drift in a virtual environment gets caught.

**Question 8 (moderate) — Prioritisation on call, alone**

At 02:30, on call, three logged events await a check: (i) the overnight payments reconciliation job has stopped mid-run — it must complete by 06:00 or the day's payment file misses the banking cut-off; (ii) a disk-space warning at 82% on a development server; (iii) a monitoring agent on one host has stopped reporting, so that host is currently unmonitored, though no service alarms are associated with it. In what order should these be addressed?

- A) (ii), (iii), (i) — clear the quick items first.
- B) (i), (iii), (ii) — deadline-critical job first, then restore monitoring coverage, then the development warning.
- C) (iii), (i), (ii) — nothing can be trusted until all monitoring is restored.
- D) (i) only — the others can be ignored entirely until the morning.

**Correct answer: B**

**Explanation:** Event (i) carries a hard, citizen-affecting business deadline and the clock is already running — unambiguously first. Event (iii) is a blind spot, and blind spots at night are where second incidents grow unseen — restoring coverage is the prudent second move. Event (ii) is low-priority overnight and can wait for the day team. Option A is the quick-win trap in nocturnal form. Option C overweights the blind spot above a known failing deadline. Option D abandons the professional baseline of assess, sequence, and record. This tests ranking by impact and urgency together under night-shift conditions.

**Question 9 (moderate) — Trend recognition across weeks**

Four weeks of monitor check logs show the case system's morning check recording page-load times (seconds) each Monday: 1.2, 1.2, 1.3, 1.2 — and each Thursday: 1.3, 1.7, 2.2, 2.8. The alert threshold is 4.0 seconds. What is the most defensible reading?

- A) No action needed: every reading is comfortably below threshold.
- B) The system is degrading generally and an emergency should be declared.
- C) A Thursday-specific degradation is worsening week on week; initiate a problem investigation into what differs about Thursdays before the threshold is reached.
- D) The Thursday readings are probably measurement errors.

**Correct answer: C**

**Explanation:** Mondays are a flat, stable baseline; Thursdays climb with increments of +0.4, +0.5, +0.6 — a worsening, day-specific trend. Projecting conservatively reaches the threshold in about two weeks. Option A reads each number in isolation. Option B ignores that Mondays are healthy, over-generalising. Option D dismisses four consistent readings as error, which their consistency argues against. This tests recognising a day-specific pattern and connecting it to the problem management skill of initiating investigation before the threshold is breached — monitor checks as time series, not just pass/fail gates.

**Question 10 (challenging) — Multi-constraint recovery sequencing**

A storage failure has taken down four services. The continuity runbook gives restoration constraints: (i) the authentication service must be restored before the case system and the licensing portal, which both depend on it; (ii) the reporting service must not be started until the case system has been stable for 1 hour; (iii) each restoration takes 30 minutes, and only one can run at a time; (iv) the licensing portal must be up by 09:00 for citizen peak. It is 06:00. Which sequence meets all constraints with the licensing portal restored as early as possible?

- A) Authentication 06:00–06:30; case system 06:30–07:00; licensing portal 07:00–07:30; reporting after 08:00.
- B) Authentication 06:00–06:30; licensing portal 06:30–07:00; case system 07:00–07:30; reporting from 08:30.
- C) Licensing portal 06:00–06:30; authentication 06:30–07:00; case system 07:00–07:30; reporting 07:30–08:00.
- D) Authentication 06:00–06:30; case system and licensing portal in parallel 06:30–07:00; reporting 08:00.

**Correct answer: B**

**Explanation:** Authentication must go first, eliminating option C. Only one restoration at a time, eliminating option D's parallelism. Between options A and B, both are feasible, but B restores the portal earliest (06:30–07:00, well ahead of the 09:00 deadline) while A delays it behind the case system. Checking option B's reporting constraint against the case system's completion and stability window confirms it holds. This tests identifying hard dependencies first, then optimising free choices against the stated objective — distinguishing feasibility from optimality, since real continuity events and assessments alike usually ask the harder of the two questions.

**Question 11 (challenging) — Deduction under incomplete information**

At 03:15, on call: the backup job for the document store reported success at 02:50; the document store's own logs show write errors beginning at 02:30 and continuing; backup verification is configured to run weekly and last ran four days ago. A colleague's note says "backups are fine — the job succeeded." Which conclusion is soundest?

- A) The backup is definitely valid, because the job reported success.
- B) The backup is definitely corrupt, because write errors were occurring during it.
- C) The backup's validity is uncertain: the job's success message is evidence, but writes were failing during the backup window and verification has not run since; treat the backup as unverified and flag it for priority verification.
- D) The write errors must be false alarms, because the backup succeeded.

**Correct answer: C**

**Explanation:** "Job reported success" establishes only that the job's own completion criteria were met, not that captured data is consistent, especially with write errors overlapping the window. Equally, write errors do not prove corruption by themselves. Certainty in either direction (A, B) outruns the evidence, and D reasons backwards from the desired conclusion. This tests holding genuine uncertainty honestly and converting it into action — flagging for priority verification and recording the reasoning as "unverified, evidence conflicting" rather than "fine", since the next reader acts on exactly what is written.

**Question 12 (challenging) — Coherent framework from messy inputs**

A triage rule set for the team's incoming notifications is requested, based on last month's data: 1,800 notifications; 1,350 were informational and required no action; 380 were warnings, of which 40 later became incidents; 70 were critical alerts, of which 60 were genuine incidents and 10 were false positives from one misconfigured sensor. Which proposal is the most coherent framework?

- A) Route everything to an analyst for individual review, since any notification might matter.
- B) Auto-file informationals; queue warnings for review within an hour with a documented checklist; treat criticals as immediate; and separately, fix the misconfigured sensor and monitor whether warning-to-incident conversion justifies tightening warning thresholds.
- C) Suppress all informational and warning notifications so the team only ever sees criticals.
- D) Treat all 1,800 notifications as incidents to be safe.

**Correct answer: B**

**Explanation:** Individual review of 1,800 items spends scarce attention on the 75% that needed none. Suppressing warnings discards the tier that produced 40 real incidents. Option D collapses all signal into noise. Option B fits the evidence tier by tier and treats the framework as improvable: the misconfigured sensor is a specific, fixable defect, and the warning conversion rate becomes a monitored metric for future tuning. This tests the service focus skill of taking inputs and establishing coherent frameworks that work, with every rule traceable to the data and a feedback loop built in.

### Administration tips

- **Watch for whether a candidate treats diagnosis as elimination**, testing each hypothesis against every symptom rather than the loudest one.
- **Score for whether a candidate trusts verified reality over a stale record** when the two disagree.
- **Note whether a candidate distinguishes a "success" message from a guaranteed outcome.**
- **Keep timing consistent** across candidates for this level.
- **Use the multi-constraint scheduling item (Question 10) to observe whether a candidate identifies the tightest constraint first.**

### Common pitfalls to watch for when scoring

- **Rewarding a hypothesis that fits one symptom but contradicts another.**
- **Accepting an answer that adds a condition a stated rule does not contain**, or drops one it does.
- **Rewarding quick-win queue clearing** over impact-ranked prioritisation.
- **Missing when a candidate treats a job-completed or check-passed message as proof of outcome** rather than process.
- **Crediting an answer that loses composure or method under a harder question**, rather than slowing down to re-read.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantitative material this role genuinely produces: availability percentages, capacity utilisation, incident volumes and rates, resolution times, error budgets, and trend data. It is not a mathematics exam, but it is unforgiving of the practical errors that corrupt operational reporting: wrong denominators, unconverted units, unweighted averages, and misread tables.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each built around a small data set. On-screen calculators are usually provided. Scoring is norm-referenced on accuracy and speed, and adaptive difficulty is common.

For a senior operations analyst, numeric reasoning is close to the centre of the job. Correct record keeping and data capture is a defining duty, and much of what is captured is numeric. Service components are managed against KPIs defined and breached numerically. Change impact assessments often turn on numbers, and problem investigations rest on numeric patterns. An error made here becomes an error the whole team's reporting repeats.

### How this assessment maps to the role

- **Percentages, availability and error budgets** map to **Availability and capacity management**.
- **Rates, averages and weighted averages** map to **Incident management** and the record keeping and data capture duty.
- **Trend arithmetic and projection** map to the duty to detect notifications and conduct monitor checks, and to **Problem management**.
- **Capacity and utilisation calculations** map to **Asset and configuration management** and oversight of the virtual environment.
- **Impact quantification** maps to **Change management**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Total and share from a notification table**

Last week's notification counts by category:

| Category | Count |
|---|---|
| Informational | 310 |
| Warning | 95 |
| Critical | 15 |
| Total | 420 |

What percentage of notifications were warnings, to the nearest whole percent?

- A) 95%
- B) 23%
- C) 4%
- D) 26%

**Correct answer: B**

**Explanation:** 95 ÷ 420 ≈ 22.6%, rounding to 23%. An estimate confirms it: a quarter of 420 is 105, and 95 is a little less, so "a bit under 25%" checks out. Option C answers a different question (the critical share); option A mistakes a raw count for a percentage. This tests basic percentage calculation, and a strong candidate's answer may note that estimating before calculating is the cheapest error-detector available, catching transposed digits and wrong denominators before a report is sent upward.

**Question 2 (easy) — Downtime from availability**

A service achieved 99.6% availability in a 30-day month (43,200 minutes). How many minutes was the service unavailable?

- A) 43.2 minutes
- B) 259.2 minutes
- C) 172.8 minutes
- D) 400 minutes

**Correct answer: C**

**Explanation:** Unavailability = 0.4% of 43,200 = 172.8 minutes. Option A is 0.1%; option B follows from a subtraction slip. This conversion should run reflexively in both directions, since stakeholders speak both languages — "99.6%" sounds reassuring, "nearly three hours of downtime" sounds alarming, and both describe the same month.

**Question 3 (easy) — Average resolution time with unit conversion**

Five incidents were resolved on shift, with resolution times of 20 minutes, 35 minutes, 50 minutes, 1 hour 15 minutes, and 2 hours. What was the mean resolution time?

- A) 60 minutes
- B) 64 minutes
- C) 76 minutes
- D) 55 minutes

**Correct answer: A**

**Explanation:** Converting to minutes first (75 and 120), total = 300 minutes, mean = 60 minutes. The distractors encode common slips: misreading "1 hour 15 minutes" as 95 minutes, misconverting 2 hours, or omitting one incident from the sum. This tests converting, then adding, then dividing as three separate passes, and a strong candidate's answer notes that the mean here (60) sits above the median (50), pulled up by the two long incidents — worth recording alongside the mean to keep the picture honest.

**Question 4 (easy) — Ratio of virtual to physical resources**

A virtualisation host has 32 physical CPU cores. The VMs on it have been allocated a total of 96 vCPUs. What is the vCPU-to-core overcommit ratio, in simplest form?

- A) 2:1
- B) 3:1
- C) 4:1
- D) 96:32

**Correct answer: B**

**Explanation:** 96:32 simplifies to 3:1. Option D is unsimplified. This tests ratio simplification, and a strong candidate's answer may note that overcommit ratios are a genuine capacity signal: modest overcommit is normal, but a climbing ratio can turn into contention that shows up as mysterious slowness across many VMs at once — a pattern otherwise chased as separate incidents.

**Question 5 (moderate) — Error budget mid-month**

The monthly SLA is 99.5% availability, permitting 216 minutes of downtime in a 30-day month (43,200 minutes). By end of day 12, the service has accrued 150 minutes of downtime. What percentage of the monthly downtime budget remains, and is the service on track?

- A) 30.6% remains; on track, since more than a quarter of the budget is left.
- B) 30.6% remains; at risk — 69.4% of the budget is spent but only 40% of the month has elapsed.
- C) 66 minutes remain; on track because 66 is more than zero.
- D) 44.4% remains; comfortably on track.

**Correct answer: B**

**Explanation:** Remaining budget = 216 − 150 = 66 minutes = 30.6%. 12 of 30 days is 40% of the month elapsed, but 69.4% of the budget is spent — the burn rate is well ahead of elapsed time, and at the current average burn the budget exhausts around day 17. Options A and D compute a percentage but skip the comparison against elapsed time, which is the entire content of "on track". This tests burn-rate reasoning — the analytical move that lets a KPI risk be flagged mid-month rather than discovered at breach.

**Question 6 (moderate) — Percentage change with a base-rate check**

Critical alerts rose from 15 last month to 24 this month. Warnings rose from 95 to 106. Which category grew faster in percentage terms, and by how much?

- A) Warnings: +11 is bigger than +9.
- B) Criticals: +60% versus warnings' +11.6%.
- C) Criticals: +37.5% versus warnings' +10.4%.
- D) They grew at about the same rate.

**Correct answer: B**

**Explanation:** Criticals: 9 ÷ 15 = +60%. Warnings: 11 ÷ 95 ≈ +11.6%. Criticals grew roughly five times faster despite the smaller absolute change. Option A commits the absolute-versus-relative confusion; option C divides by the new values instead of the originals. This tests percentage change against the correct base, and a strong candidate's answer notes that a 60% month-on-month rise in criticals is exactly the trend a problem management investigation should catch.

**Question 7 (moderate) — Two-way table with a denominator choice**

Incidents by service and time-to-resolve for last month:

| Service | Resolved ≤ 4 hours | Resolved > 4 hours | Total |
|---|---|---|---|
| Case system | 36 | 12 | 48 |
| Licensing portal | 45 | 5 | 50 |
| Reporting | 9 | 13 | 22 |
| Total | 90 | 30 | 120 |

The KPI is "80% of incidents resolved within 4 hours, per service". Which services met the KPI?

- A) All three — overall performance was 90 ÷ 120 = 75%, close enough.
- B) Case system and licensing portal only.
- C) Licensing portal only.
- D) Case system only.

**Correct answer: C**

**Explanation:** Per service: case system 36 ÷ 48 = 75% (fails); licensing portal 45 ÷ 50 = 90% (meets); reporting 9 ÷ 22 ≈ 41% (fails badly). Only the licensing portal met the KPI. Option B likely rounds 75% up toward the target, but a threshold is not a vicinity. Option A substitutes an aggregate for the per-service test the KPI explicitly requires. This tests honouring "per service" as a denominator instruction, row by row — since per-service breakdowns exist precisely so a struggling service cannot hide inside a passable average.

**Question 8 (moderate) — Arrival rate versus clearance rate**

Notifications arrive at an average of 42 per hour. A team of three analysts each clears an average of 12 per hour. The queue currently holds 30 items. If rates stay constant, what will the queue hold after 2 hours?

- A) 30 items — the queue is in balance.
- B) 42 items.
- C) 18 items.
- D) 6 items.

**Correct answer: B**

**Explanation:** Clearance = 3 × 12 = 36/hour; net = 42 − 36 = +6/hour; after 2 hours, 30 + 12 = 42 items. Option C subtracts in the wrong direction; option A assumes balance the numbers refute. This tests net-rate reasoning, and a strong candidate's answer notes the management implication: a queue growing at 6/hour looks calm early but holds 78 by the end of an 8-hour shift, and the moment to act is when the net rate turns positive, not when the queue feels long.

**Question 9 (moderate) — Weighted average across services**

Two services report last month's availability: the case system at 99.2% with 4 million requests, and the licensing portal at 99.9% with 1 million requests. What is the request-weighted average availability across the two, and how does it compare with the simple average?

- A) Weighted 99.34%, simple 99.55% — the weighted figure is lower.
- B) Weighted 99.55%, simple 99.34% — the weighted figure is higher.
- C) Both are 99.55%.
- D) Weighted 99.34%, simple 99.55% — the weighted figure is higher.

**Correct answer: A**

**Explanation:** Weighted average = (99.2 × 4 + 99.9 × 1) ÷ 5 = 99.34%; simple average = 99.55%. The weighted figure is lower because the worse-performing service carried four times the traffic. This tests weighting by usage rather than simple averaging, and a strong candidate's answer notes that a summary reporting only the simple average understates user-experienced downtime substantially in budget terms — the user focus skill expressed in arithmetic.

**Question 10 (challenging) — Projection with a changed rate**

A storage volume of 2,000 GB currently holds 1,400 GB. Growth averaged 25 GB/week over the last quarter, but three weeks ago a new document-scanning service came online, and growth in those three weeks was 40, 45, and 50 GB. The capacity policy requires expansion to be requested when usage is projected to reach 90% within 8 weeks. Using the recent trend, should expansion be requested now?

- A) No — at 25 GB/week, usage in 8 weeks is 1,600 GB (80%), below the 1,800 GB trigger.
- B) Yes — recent growth is accelerating by 5 GB/week; projecting forward gives 580 GB over 8 weeks, reaching 1,980 GB (99%), so the 90% point falls inside 8 weeks.
- C) No — the recent weeks are an anomaly and the quarterly average should be used.
- D) Yes — but only because it is always safer to buy storage.

**Correct answer: B**

**Explanation:** The old 25 GB/week average predates a known structural change, so the recent, accelerating series (40, 45, 50, projected +5/week) is the relevant basis. Summing 8 weeks of accelerating growth gives 580 GB, reaching 1,980 GB — 99% — with the 90% trigger point (1,800 GB) crossed around week 6. Option A projects a retired rate. Option C calls a mechanism-explained pattern an "anomaly" despite the mechanism being permanent. Option D reaches the right action without reasoning. This tests recognising when a structural change means the baseline for projection must change too, and documenting why.

**Question 11 (challenging) — Reconciling counts across records**

A handover summary must reconcile three sources: the ticket system shows 27 incidents opened yesterday; the monitoring platform auto-created 19 incident records; the service desk logged 11 user-reported incidents. A colleague says: "19 + 11 = 30, but the ticket system says 27 — three tickets have gone missing." What is the soundest response?

- A) Agree — three tickets are missing and an urgent search should begin.
- B) The discrepancy more likely means some incidents were both auto-created and user-reported (duplicates merged), so the two sources overlap; verify by checking yesterday's merged/duplicate-closed tickets before declaring anything lost.
- C) The monitoring platform's count must be wrong.
- D) The service desk's count must be wrong.

**Correct answer: B**

**Explanation:** The colleague's arithmetic assumes the two sources are disjoint, but overlap is operationally expected — a real outage often triggers both monitoring and user calls, merged into one ticket. If 3 incidents were reported by both routes, 19 + 11 − 3 = 27, exactly matching the ticket system with nothing missing. Options C and D blame a source without evidence; option A launches a search on an unverified assumption. This tests set-overlap reasoning (inclusion–exclusion in work clothes), and a strong candidate's answer asks "could these sources overlap?" before "which source is wrong?" — answered from the records, not from confidence.

**Question 12 (challenging) — Building the KPI picture for an impact assessment**

Change CR-1102 proposes a 45-minute outage to the licensing portal. Traffic data: the portal averages 8,000 requests/hour across the day, but the proposed window (11:00–11:45) sits in the daily peak, which runs at 2.5 times the daily average. Of peak-hour requests, 30% are new licence applications (which fail hard during an outage) and the rest are status checks (which can be served from a cached page). Estimate the number of hard-failing requests during the outage window.

- A) 6,000
- B) 4,500
- C) 15,000
- D) 2,250

**Correct answer: B**

**Explanation:** Peak rate = 8,000 × 2.5 = 20,000/hour. Window traffic = 20,000 × 0.75 = 15,000. Hard-failing share = 15,000 × 0.30 = 4,500. Option C stops one step early, ignoring the cached-status mitigation. Option A uses the daily average rate for a peak window. This tests building an estimate in stages, and a strong candidate's answer notes that a quantified figure — "roughly 4,500 citizens' applications would fail" — argues for moving a change window in a way a vague "significant impact" never will, and the same staged model immediately prices alternative windows for comparison.

### Administration tips

- **Score the four core conversions**: availability percent to downtime minutes, per-hour to per-shift rates, mixed time units, and ratios.
- **Watch for whether a candidate estimates before calculating**, catching gross errors early.
- **Note whether a candidate interrogates an average** for whether it should be weighted and whether an outlier is carrying it.
- **Keep timing consistent** across candidates for this level.
- **Use the reconciliation item (Question 11) to observe whether a candidate checks for overlap** before declaring data lost or a source wrong.

### Common pitfalls to watch for when scoring

- **Accepting a calculation over the wrong denominator** — "per service", "of peak traffic", "of the remaining budget" each name one.
- **Rewarding a projection from a retired baseline** after a known structural change.
- **Missing when a candidate assumes two data sources are disjoint** without checking for overlap.
- **Accepting an unweighted average over unequal populations** where usage-weighting is the honest measure.
- **Crediting an answer that computes without completing the comparison** a threshold or target question requires.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and reasons from written material of the kind this role genuinely traffics in: operational procedures, change records, escalation emails, service bulletins, continuity extracts, supplier notices, and shift handover notes.

The typical format is an online, timed test of 15 to 25 minutes. Short passages are presented with judgements to make about them. The dominant style is True / False / Cannot say. Other styles include best-summary selection, inference identification, argument evaluation, and clear-writing judgement. Scoring is objective and norm-referenced, tracking accuracy and pace.

Verbal precision is a duty for this role, not a nicety. Correct information flow depends on reading what monitoring, users, engineers and suppliers write, and writing what the team, the next shift and the escalation chain will act on. The costs of imprecision are concrete: an "acknowledge" read as "resolve", a "may" read as "must", a change window's "from" confused with "until".

### How this assessment maps to the role

- **Precise procedural comprehension** maps to **Change management** and **Continuity management**.
- **Fact extraction and record accuracy** map to the defining duty of correct information flow, record keeping and data capture, and to **Incident management**.
- **True/false/cannot-say discipline** maps to **Problem management**.
- **Argument evaluation** maps to **Availability and capacity management** and **Asset and configuration management**.
- **Clear-writing judgement** maps to **Community collaboration**, **Service focus** and **User focus**.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — Comprehension of a maintenance notice**

Passage: "The supplier will apply security patches to the database cluster on Wednesday between 20:00 and 23:00. The cluster remains available throughout, but performance may be degraded. Batch jobs scheduled within the window should be moved outside it. The change freeze beginning Thursday 00:01 is unaffected by this work."

Statement: "The database cluster will be unavailable on Wednesday evening."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states directly that "the cluster remains available throughout" — a direct contradiction, so False. The distractor trades on the mental shortcut "maintenance = outage". A strong candidate's answer would also note the second-order consequences the passage establishes: performance degradation is possible (so Wednesday-evening readings need interpreting in context, or false alerts will fire), and batch jobs need rescheduling. This tests reading a notice for both facts and operational implications, without importing an outage it never announces.

**Question 2 (easy) — True/false/cannot-say on causation**

Passage: "At 14:20 the licensing portal's response times rose sharply. At 14:25 the on-duty analyst noticed a scheduled report extraction running against the portal's database. The extraction was paused at 14:30, and response times returned to normal by 14:33. The extraction has been rescheduled to overnight."

Statement: "The report extraction caused the rise in response times."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage gives a tight temporal correlation and a team acting as though the connection were real, but never states causation — the answer is Cannot say. This tests distinguishing what a text establishes from what a professional would reasonably conclude and act on. A strong candidate's answer would note that operational records should keep the same separation the passage itself keeps: "extraction paused; response normal three minutes later; extraction is the working hypothesis" — the honest gap where problem management investigation happens.

**Question 3 (easy) — Extracting the actionable facts**

Passage (email from a supplier): "Dear team, please be advised that the licence for the monitoring agent software on your estate expires on 30 September. Renewal requires a purchase order raised at least 15 working days before expiry. Agents continue running after expiry but stop receiving signature updates, and support requests cannot be raised against unlicensed software. Regards, Vendor Ltd."

Which summary best captures what the records and escalation need?

- A) "Monitoring software stops working on 30 September."
- B) "Licence expires 30 Sep; PO needed 15 working days prior (early September); after expiry agents run but without updates or support — escalate for purchase decision now."
- C) "Vendor emailed about licences; no action needed since agents keep running."
- D) "Support requests cannot be raised against the monitoring agents."

**Correct answer: B**

**Explanation:** Option B captures the deadline, the lead-time requirement (which converts the expiry date into an early-September action date), the precise degradation mode, and the consequent action. Option A overstates the failure mode. Option C understates it and drops the purchase deadline. Option D lifts one clause out of context. This tests proportionate extraction — preserving every fact a decision depends on, and working backwards from a stated deadline through a lead time to an action date.

**Question 4 (easy) — Applying a written escalation rule**

Passage (from the escalation procedure): "SEV2 incidents must be escalated to the service owner if unresolved after 2 hours. SEV1 incidents must be escalated to the service owner immediately, and additionally to the head of operations if unresolved after 1 hour. Escalation must be recorded in the incident ticket at the time it is made."

A SEV1 incident opened at 10:00 remains unresolved at 11:30. According to the procedure, what escalations should have occurred by now?

- A) Service owner at 12:00 only.
- B) Service owner immediately at 10:00, and head of operations at 11:00 — both recorded in the ticket.
- C) Head of operations at 10:00 only.
- D) Service owner at 10:00; the head of operations only if the incident reaches 2 hours.

**Correct answer: B**

**Explanation:** The SEV1 rule has two clauses: immediate service-owner escalation, and additionally head of operations if unresolved after 1 hour — both triggers have fired by 11:30. Option A applies SEV2 timing to a SEV1; option D transplants the SEV2 threshold into the SEV1 clause. This tests reading parallel rule structures without letting their parameters bleed into each other, and recognising that "additionally" means the second escalation supplements rather than replaces the first.

**Question 5 (moderate) — Inference from a continuity extract**

Passage: "Each Tier 1 service must have a tested continuity plan. A continuity plan is considered tested only if a full failover exercise has been completed within the preceding 12 months. The case system is a Tier 1 service. The case system's last full failover exercise was completed 13 months ago; an exercise scheduled for last month was postponed due to a change freeze."

Statement: "The case system currently fails the continuity requirement."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Chaining the passage's definitions: Tier 1 services need a tested plan; "tested" means an exercise within 12 months; the case system's last exercise was 13 months ago, exceeding the limit — the requirement is currently failed, and every link is supplied by the passage. The postponement sentence explains why the gap exists but contains no exemption. This tests whether sympathetic context is allowed to sway a reading of a strict definition — strong analysts report the rule's verdict and the context, without letting either soften the other.

**Question 6 (moderate) — Best summary of a policy passage**

Passage: "Access to production systems is granted on a least-privilege basis: staff receive the minimum access their duties require. Access rights must be reviewed quarterly, and rights unused for 90 days are automatically revoked. Emergency elevated access may be granted during a declared major incident, must be time-limited to 24 hours, and triggers a mandatory retrospective review."

Which option best summarises the passage?

- A) "Staff can get emergency access whenever they need it."
- B) "Access is minimised by default, kept under regular and automatic review, and emergency elevation is possible but tightly bounded and always reviewed afterwards."
- C) "All access rights are revoked every 90 days."
- D) "Access reviews happen every 24 hours."

**Correct answer: B**

**Explanation:** Option B holds the three moving parts — default principle, maintenance mechanisms, bounded exception — in correct relation. Option C garbles the revocation rule (unused rights only). Option D transplants the 24-hour elevation limit onto the review cycle. Option A erases every bound on the exception. This tests summarising while preserving a passage's structure, which matters when a summary is what a team actually remembers.

**Question 7 (moderate) — Two documents in tension**

Passage 1 (runbook, last updated January): "To restart the reporting service, run the restart script on HOST-B, then confirm the service dashboard shows green within 10 minutes."

Passage 2 (change record, June): "CR-1095 implemented: reporting service migrated from HOST-B to the new virtual cluster. All operational documentation to be updated by end of July."

It is August. Statement: "Following the runbook as written will restart the reporting service."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The runbook predates the June migration; the change record establishes the service no longer runs on HOST-B, so running a HOST-B script cannot restart it — the statement is contradicted, so False. This tests recognising that stale documentation contradicted by a later authoritative record should not produce "Cannot say" through invented uncertainty, and connects to the operational duty to flag or fix a stale document once found, since the next reader may not have both passages in front of them.

**Question 8 (moderate) — Clear-writing judgement for a handover**

Ending a day shift during which an intermittent fault has been under investigation. Which handover entry serves the night shift best?

- A) "The portal thing is still happening on and off. The engineers know. Probably fine but keep half an eye on it."
- B) "INC-5201 (licensing portal, intermittent 502 errors, ~2% of requests). Pattern: bursts of 2–5 min, roughly hourly, since 09:40. Network team engaged 14:15, suspect load balancer node 3; their next update due 22:00. Action: if error rate exceeds 10% or bursts exceed 15 min, call network on-call (ref runbook NET-7); otherwise log burst times against INC-5201."
- C) "Intermittent portal errors under investigation by networks. No action for nights."
- D) "See INC-5201 for full details of the portal issue."

**Correct answer: B**

**Explanation:** Option B carries a reference, the quantified symptom, the observed pattern, ownership and expected communication, and an explicit escalation threshold with the action and runbook reference attached — the decision rule intermittent faults degenerate without at night. Option C strips the decision rule. Option D delegates to the ticket, which is a record, not a briefing. This tests whether the decision rules an issue depends on travel with the handover entry — otherwise the ticket transfers but the judgement does not.

**Question 9 (moderate) — False versus cannot-say discipline**

Passage: "All change requests targeting production must include a rollback plan. CR-1104, targeting production, was approved by the change board on Tuesday."

Statement: "CR-1104 does not include a rollback plan."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The rule requires a rollback plan for production changes; CR-1104 was approved, but the passage never states the board checks or certifies compliance — boards do approve non-compliant items in texts and in life. The statement is neither established nor contradicted: Cannot say. This tests the near-miss reasoning "approved, therefore compliant" as an assumption about institutional behaviour, not a fact in the text — a distinction that matters directly for someone documenting change requests, where "it was approved" and "it met the requirements" are different claims.

**Question 10 (challenging) — Evaluating a capacity argument**

Passage (from a supplier proposal): "Your incident volumes have grown 8% in each of the last two quarters. Growth will therefore continue at 8% per quarter, and within two years your team will be overwhelmed. Our automation platform resolves 40% of incidents at comparable organisations. Purchasing it is therefore the only way to avoid doubling your headcount."

Which is the strongest criticism of the argument?

- A) The 8% figures are probably fabricated.
- B) It extrapolates two quarters into a two-year certainty, imports a 40% figure from unspecified "comparable" organisations without establishing comparability, and presents a false choice between purchase and doubling headcount, ignoring alternatives.
- C) Automation never works in operational settings.
- D) The proposal should have been written by the network team.

**Correct answer: B**

**Explanation:** Three flaws stack: extrapolation from two data points stated as certainty, an unevidenced comparability claim, and a false dilemma ignoring threshold tuning, problem management, or partial automation. Option A attacks unstated premises. Option C substitutes a counter-dogma. Option D is irrelevant. This tests decomposing an argument into premises, inferential steps, and conclusion, then naming precisely which step fails — the skill that lets a decision-maker actually use an assessment, rather than a vague "it feels salesy".

**Question 11 (challenging) — Modal precision in an on-call policy**

Passage (on-call policy extract): "Out-of-hours contact is permitted only for incidents graded SEV2 or higher. The on-call analyst must acknowledge contact within 20 minutes. Acknowledgement does not oblige immediate remedial work; the analyst must, however, assess severity within 1 hour of acknowledgement. If the analyst reasonably concludes the incident is graded incorrectly, they may downgrade it, in which case work may wait until the next working day, provided the downgrade rationale is recorded at the time."

Which statement is consistent with the passage?

- A) An analyst who acknowledges within 20 minutes has met all obligations until morning.
- B) An analyst may be contacted out of hours about a SEV3 incident if it seems likely to worsen.
- C) An analyst who downgrades an incident at 02:00 and records the rationale then may defer work to the next working day.
- D) Downgrading an incident requires approval from the head of operations.

**Correct answer: C**

**Explanation:** Option A fails because a further "must" (severity assessment within 1 hour) remains after acknowledgement. Option B fails on "only" — contact is permitted only for SEV2 or higher, with no likely-to-worsen exception stated. Option D invents an approval requirement the passage does not contain. Option C tracks the text exactly: downgrade permitted, deferral permitted, and the "recorded at the time" condition satisfied by contemporaneous 02:00 recording. This tests reading only, must, may, and provided with precision — the grammar on-call texts are written in because they govern tired people acting alone.

**Question 12 (challenging) — Reconciling three sources under supersession**

Passage 1 (standing procedure): "Monitor checks run at 07:00 and 19:00 daily. Failures are escalated to the duty engineer."

Passage 2 (email, Monday): "For the duration of the migration project, an additional check at 13:00 is required on migration-affected systems. All other checking arrangements are unchanged."

Passage 3 (email, Wednesday): "Migration complete as of this morning. All temporary arrangements associated with the project cease immediately; standing procedures resume in full."

It is Thursday. Statement: "A 13:00 check is required today on the previously migration-affected systems."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Passage 2's 13:00 check was explicitly scoped to the migration project's duration; Passage 3, the latest and controlling authority, ends the project and terminates "all temporary arrangements... immediately". The 13:00 check has therefore ceased — the statement is false. The two designed errors are anchoring on Passage 2 for its specificity (recency and authority govern, not detail) and drifting toward "Cannot say" because Passage 3 doesn't name the 13:00 check explicitly (a universal quantifier — "all temporary arrangements" — needs no enumeration). This tests reading layered instructions in date order and treating the latest authoritative statement as controlling.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say correctly**, especially where an "approved, therefore compliant" style inference tempts a False answer.
- **Watch for whether a candidate reads modal words** (only, must, may, provided) with precision.
- **Note whether a candidate date-orders multiple documents** before judging a statement against them.
- **Use the clear-writing item (Question 8) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer built on operational plausibility** rather than what the passage establishes.
- **Rewarding the inference that approval implies compliance.**
- **Missing parameter bleed between parallel rules** — numbers migrating between adjacent SEV or threshold clauses.
- **Rewarding anchoring on the most detailed document** rather than the latest authoritative one.
- **Accepting sympathetic context as amending a stated rule** rather than merely explaining a breach of it.
- **Crediting a handover-style answer that hands over records rather than decision rules.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of different responses. Where the cognitive, numeric and verbal assessments measure reasoning over material, this measures judgement over situations: reading what a moment requires, weighing competing goods — speed against accuracy, candour against diplomacy, autonomy against escalation — and choosing the response a skilled professional at this level would choose.

The typical format is an online test of 20 to 40 minutes containing 10 to 20 scenarios, each followed by three to five responses. Question styles include selecting the most effective response, selecting the least effective, ranking, or independent rating. Scoring compares judgements with those of experienced practitioners, so answers reflect established professional norms rather than trick logic.

Situational judgement carries particular weight for this role because it sits at a hinge point: senior enough to make real calls alone — prioritising the team's queue, diagnosing and escalating incidents, deciding at 03:00 whether to wake an engineer — yet not the manager, so influence, escalation and collaboration matter as much as authority.

### How this assessment maps to the role

- **Escalation and on-call judgement** map to **Incident management** and the duty to be on call in emergencies.
- **Queue and priority dilemmas** map to the defining duty to prioritise incoming messages for the team.
- **Truthful-record scenarios** map to **Asset and configuration management** and correct record keeping and data capture.
- **Specialist and team scenarios** map to **Problem management** and **Community collaboration**.
- **Change pressure scenarios** map to **Change management**.
- **User-facing dilemmas** map to **User focus** and **Ownership and initiative**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A wrong diagnosis**

Yesterday, an incident was diagnosed as a network fault and routed to the network team. This morning they report the network is clean, and fresh evidence points to a database configuration issue — the incident sat in the wrong queue overnight and resolution has been delayed. What is the most effective response?

- A) Quietly reroute the ticket to the database team without comment, hoping the detour goes unnoticed.
- B) Reroute promptly with a note explaining the original diagnosis, the new evidence, and what was ruled out; apologise to the network team for the redundant work and update the user on the revised expectation.
- C) Defend the original diagnosis to avoid losing credibility, asking the network team to check again.
- D) Ask a manager to reroute it so the correction carries more authority.

**Correct answer: B**

**Explanation:** Diagnostic errors are inherent to triage; the differentiator is the speed and transparency of correction. Option B reroutes immediately, transfers the diagnostic reasoning as valuable evidence for the database team, repairs the relationship with the network team, and keeps the user's expectations truthful. Option A corrupts the information flow with a silent zigzag. Option C spends the team's time defending an ego. Option D outsources a correction squarely within the role's own authority. This tests owning the mitigation of one's own mistakes as much as one's successes.

**Question 2 (easy) — Pressure to pre-approve a change record**

An engineer needs an emergency change actioned tonight and asks for the request to be documented afterwards: "Just write it up tomorrow and date it today — same thing, less delay." A genuine emergency change procedure exists that permits expedited approval with retrospective review, not retrospective creation of the record. What is the most effective response?

- A) Agree — the emergency is real and the paperwork is a formality.
- B) Refuse all changes tonight since the normal process cannot complete.
- C) Invoke the actual emergency change procedure: raise the request now, however briefly, obtain the expedited approval it defines, action the change, and complete the fuller documentation in the review step — declining to backdate anything.
- D) Action the change without any record and mention it verbally at tomorrow's stand-up.

**Correct answer: C**

**Explanation:** The scenario tests the difference between expedited process and no process. Option C serves the genuine emergency at full speed while keeping the record truthful — emergency procedures exist precisely so urgency never requires falsification. Option A creates a backdated, falsified document that misleads any subsequent incident review. Option B weaponises process against the service by ignoring the route built for this case. Option D leaves an undocumented production change invisible to the next shift and to rollback. This tests procedural fluency under pressure and record integrity together.

**Question 3 (easy) — A user's report contradicts the dashboard**

A caseworker phones: "The case system keeps freezing every few minutes." The dashboard shows the case system fully green, all checks passing. What is the most effective response?

- A) Tell the caseworker the system is fine and the problem must be their machine, then close the call.
- B) Take structured details (what action freezes, since when, how many colleagues affected, exact times), open a ticket, and investigate the gap — checking whether monitoring covers the user's pathway — while giving the caseworker a realistic next step.
- C) Declare a major incident on the case system based on the call.
- D) Log the call for the morning meeting without investigation, since monitoring outranks anecdote.

**Correct answer: B**

**Explanation:** A green dashboard and a freezing user are jointly diagnostic, not contradictory — monitoring measures what it was built to measure, and users experience the full path. Option B treats the report as data, converts anecdote into investigable signal, and treats a coverage gap as a finding in itself. Options A and D make the dashboard the arbiter of the user's reality. Option C over-escalates on a single uncorroborated call. This tests respecting both evidence sources and investigating the discrepancy rather than dismissing either.

**Question 4 (easy) — A colleague's shortcut in monitor checks**

A teammate has been marking the full 19:00 monitor check complete in about four minutes — a check that takes twenty for others — and last night one system on their checklist had an unnoticed fault that surfaced this morning. What is the most effective response?

- A) Report the colleague to a manager as falsifying checks.
- B) Say nothing but redo their checks each evening to be safe.
- C) Raise it with the colleague directly and without accusation — mention the morning's fault, ask how they run the check, and compare approaches; if it becomes clear steps are being skipped and the behaviour continues, escalate honestly.
- D) Suggest at the team meeting that checks should be automated so speed won't matter.

**Correct answer: C**

**Explanation:** Option C starts with a direct, curious conversation that leaves room for legitimate explanations, anchored by the morning's fault as a concrete, non-personal starting point, and commits to escalation if the evidence firms up and behaviour persists. Option A escalates on inference before conversation. Option B doubles the workload and leaves a misleading record — a signature attesting to checks not actually done. Option D dodges the present issue. This tests dealing with issues at the right level and in the right order, with honesty about where the sequence leads if unresolved.

**Question 5 (moderate) — Priority conflict between two seniors**

At 10:00, the service owner of the licensing portal asks for intermittent errors affecting a small number of citizens to be prioritised. At 10:10, the head of the case-working unit — more senior — demands the team prioritise a report data refresh needed for a 15:00 board meeting, "ahead of whatever else you're doing". What is the most effective response?

- A) Prioritise the head of unit's refresh — seniority settles it.
- B) Prioritise the citizen-facing investigation, ignore the refresh, and let the 15:00 meeting discover the gap.
- C) Apply the prioritisation framework (citizen impact first), explain to the head of unit that the intermittent errors take precedence, give a realistic time for the refresh against the 15:00 deadline, and flag the conflict to a manager so the call is visible and reversible.
- D) Split the team's attention evenly between both so neither stakeholder is upset.

**Correct answer: C**

**Explanation:** Option C applies the citizen-impact rule while communicating the call to the disadvantaged stakeholder with a realistic alternative, and makes the conflict visible to a manager so overriding a senior stakeholder is inspectable and reversible if judged wrongly. Option A lets rank reorder impact. Option B gets the priority right and the collaboration disastrously wrong. Option D usually leaves both parties dissatisfied later. This tests principled prioritisation paired with transparent communication of an unwelcome call.

**Question 6 (moderate) — On call, uncertain severity, 02:40**

On call, paged: monitoring has logged the document store as not functioning. Checks from home show the service responding but slowly; the overnight batch that files scanned tribunal documents is running at half speed. If it fails to finish by 08:00, hearings that day could be affected — but it might still finish in time at current speed. The storage specialist is not on call tonight; waking him means an unpopular 02:40 call. What is the most effective response?

- A) Go back to sleep — the batch will probably finish, and "probably" has been good enough before.
- B) Calculate whether current throughput finishes the batch before 08:00 with margin; monitor at intervals; prepare the escalation (symptoms, timings, evidence) now so it is one call away; and wake the specialist as soon as the projection says the deadline is at genuine risk — recording the reasoning and observations either way.
- C) Wake the specialist immediately — better safe than sorry, every time.
- D) Restart the storage array now, since restarts fixed slowness before.

**Correct answer: B**

**Explanation:** This is the archetypal senior-analyst night. Option B converts "might finish in time" into a projection, monitors rather than assumes, pre-stages the escalation so a needed call is crisp and evidenced, and records the reasoning so the morning shift inherits a decision trail. Option A gambles tribunal hearings on optimism with no trace left behind. Option C spends a colleague's night and escalation credibility on an unsized risk. Option D is gravest — an unauthorised restart mid-batch could corrupt the very filings being protected. This tests quantifying before deciding, preparing before needing, and escalating on evidence at the earliest sign of genuine risk.

**Question 7 (moderate) — Statistics pressure from above**

Preparing the monthly report, the case system missed its availability KPI: 99.1% against a 99.5% target, driven by two long incidents. A manager one level up suggests: "Report it against the quarterly average instead — the quarter still passes. No one needs the monthly noise." The report template asks for monthly figures. What is the most effective response?

- A) Use the quarterly figure as suggested — it is technically true and the manager owns the report.
- B) Report the monthly figure as the template requires, alongside honest context — the two driving incidents, the fixes underway — and offer to add the quarterly view as supplementary context rather than substitution; if the manager insists on substitution alone, state a clear position and ensure the accurate monthly data supplied remains on record.
- C) Report the monthly figure and email the manager's suggestion to their director as attempted misreporting.
- D) Leave the availability section blank and let the manager fill it in.

**Correct answer: B**

**Explanation:** Adding context is reporting; substituting a flattering frame for the required figure is concealment. Option B holds the template's line while addressing the manager's real concern — fair framing — through addition rather than substitution, and preserves the accurate figures on record even if overruled. Option A makes the analyst co-author of a misleading report. Option C leaps to the gravest interpretation and most destructive channel before testing whether a constructive offer would resolve it. Option D abandons both record and responsibility. This tests integrity with the record paired with a constructive alternative before confrontation.

**Question 8 (moderate) — The specialist who won't engage**

For three weeks, a recurring Thursday degradation (trend data solid) has been raised with the application specialist, who has twice replied "known behaviour, by design, nothing to investigate" without addressing the data. This Thursday's degradation was the worst yet; projection says two more weeks until user-visible impact. What is the most effective response?

- A) Accept the specialist's judgement — they know the application; the trend must be misleading.
- B) Stop consulting the specialist and open a change request to modify the application's Thursday schedule directly.
- C) Put the evidence in writing to the specialist in a problem record — the trend data, the projection, the specific question ("if by design, what bounds the growth?") — copying the problem management process rather than going around it; if the response still doesn't engage the evidence, escalate through a manager with the record attached.
- D) Raise it loudly in the team channel so public pressure forces the specialist to respond.

**Correct answer: C**

**Explanation:** Effectively consulting specialists means changing the medium and sharpening the question, not repeating the ask or abandoning it. Option C moves the exchange into a written problem record, asks a precise question the dismissal must actually answer, and builds an honest escalation file if needed. Option A surrenders three weeks of solid data to unexamined authority. Option B exceeds authority, breaking both change discipline and collaboration. Option D substitutes social pressure for evidence and burns the relationship. This tests persistence proportional to evidence and questions that make a dismissal answer the data.

**Question 9 (moderate) — Handover not ready to give**

A family emergency requires leaving two hours into a shift. Live context in mind: a SEV2 under investigation with a promising hypothesis not yet in the ticket; a supplier due to call back within the hour about a licence renewal; a half-completed impact assessment for tonight's change board. The only available colleague is capable but has been away for two weeks. What is the most effective response?

- A) Leave immediately — family first; the colleague will piece things together from the systems.
- B) Stay the full shift; the handover gap is too risky.
- C) Take fifteen minutes (if the emergency allows) to do triage-quality transfer: dump the SEV2 hypothesis and evidence into the ticket, brief the colleague verbally on the top three items with explicit decision rules, hand the supplier call and impact assessment to them with a manager copied so support can be arranged — then go.
- D) Leave, but keep the phone on and ask the colleague to call about everything all day.

**Correct answer: C**

**Explanation:** Ownership is transferable by design — exactly what "owning an issue until a new owner has been found" means. Option C externalises the perishable, in-the-head context into tickets and a focused briefing, and copying a manager converts a fragile one-person handoff into a supported one. Option A treats systems of record as containing what was never written. Option B fails the human test and the judgement test together — a distracted analyst covering a full shift is its own operational risk. Option D exports the shift into the emergency and prevents genuine transfer. This tests rapid externalisation of context and explicit transfer under genuine time pressure.

**Question 10 (challenging) — Least effective: the quiet compliance drift**

A quarterly asset verification is due Friday. Roughly 8% of records for one site are stale — machines moved or rebuilt without updates. Verifying and correcting properly will take two days that are barely available; the previous analyst reportedly "just confirmed" such records when time was short, and the compliance return only asks whether verification was "completed". Which response would be LEAST effective?

- A) Correct what can be done by Friday, report the verification as partially complete with the true figures, and propose a plan for the remainder.
- B) Ask a manager now for either the two days or a decision on scope, presenting the 8% finding and the options honestly.
- C) Confirm the stale records as verified — the drift is minor, the practice has precedent, and the return will show "completed" either way.
- D) Complete the sites that can be verified properly and formally defer the drifted site's verification to a scheduled date next week, recording the deferral and reason.

**Correct answer: C**

**Explanation:** Options A, B and D are all honest variants of the same judgement: verification quality cannot be conjured, so scope, timing, or resources must move, and the record must say which. Option C is the only response that falsifies the control itself — a verification is a claim that reality was checked, and confirming unchecked records launders staleness into certified accuracy, more dangerous than an acknowledged gap because every downstream decision now trusts it. This tests recognising that pressure scenarios rarely reward heroic overwork or rigid refusal; the least effective option is almost always the one that keeps every commitment on paper only.

**Question 11 (challenging) — Improvement suggestion meets team resistance**

Three months of queue data support a triage rule change that would auto-file 60% of informational notifications, saving roughly an hour a day. At the team meeting, two experienced colleagues push back hard: "We've been burned by auto-filing before — a filed informational preceded the 2023 outage. Manual review of everything is the only safe way." The team lead looks for a response. What is the most effective one?

- A) Withdraw the proposal — experienced colleagues' scar tissue outranks three months of data.
- B) Take the objection seriously as evidence: ask for the 2023 specifics, check whether the proposed rules would have filed that notification, and propose a bounded trial — auto-file with a daily sampled review and an agreed rollback trigger — so the decision moves from memory versus data to a test both sides can trust.
- C) Point out that manual review of 1,350 monthly informationals is itself the risk, and ask the team lead to simply impose the change.
- D) Implement the rules quietly for own shifts only, letting results speak for themselves.

**Correct answer: B**

**Explanation:** Option B treats the 2023 story as data — checking whether the proposed rules would have caught or missed that notification either sharpens the rules or converts the objection into supporting evidence — and the bounded trial gives sceptics a pre-agreed exit without requiring them to lose an argument. Option A confuses respecting experience with obeying it. Option C is analytically defensible and relationally ruinous, since an imposed change the most experienced operators distrust gets quietly worked around. Option D fragments the team's operational model. This tests converting objection into a reversible test rather than winning or losing an argument.

**Question 12 (challenging) — Most and least in one scenario: the inherited mess**

Taking over the on-call phone at 19:00 with no handover: three tickets sit open with no updates for four hours, one marked "awaiting user confirmation" actually contains an unanswered user question from 13:40, and the day analyst — a friend — has already gone home after what is known to have been a brutal shift. Consider:

(i) Work the gap now: triage the three tickets, answer the user (or route the answer), reconstruct state from the records, and note the missing handover factually in the shift log.
(ii) Phone the friend at home and require them to return or dictate a full handover tonight.
(iii) Work the tickets but leave the shift log silent about the handover gap, protecting the friend.
(iv) Email a team lead tonight demanding disciplinary action for the day analyst.

Which is the MOST effective response, and which is the LEAST effective?

- A) Most: (i); Least: (iv)
- B) Most: (ii); Least: (iii)
- C) Most: (i); Least: (iii)
- D) Most: (iii); Least: (ii)

**Correct answer: A**

**Explanation:** Response (i) serves users first, reconstructs state from records, and handles the process failure factually in the log without silence or accusation. Response (iv) is least effective: it converts a single process gap with a known mitigating context directly into a disciplinary demand, bypassing the colleague and every proportionate step, and does so before the tickets are even worked, prioritising blame over the waiting user. Response (iii) is genuinely poor — falsifying the record by omission — but (iv) is worse on every axis, since escalation outrunning both evidence and remedy poisons team trust and teaches everyone to hide bad shifts. Response (ii) recalls an exhausted colleague when records plus reconstruction can carry the night. This tests the professional sequence when process fails: users, then state, then a truthful record, then, through the right channel, the pattern. Blame is not a step; visibility is.

### Administration tips

- **Score for whether a candidate stages an escalation** (evidence gathered, threshold defined, contact known) rather than acting immediately or waiting passively.
- **Watch for the truthful-record reflex under pressure** — backdating, quiet confirmation, silent logs, and flattering frames are the scenarios that usually decide scores.
- **Note whether a candidate converts an objection into a bounded, reversible test** in team-resistance scenarios.
- **Use most/least items to check whether a candidate rates every option independently** before ranking, rather than anchoring on the first plausible one.
- **Keep candidates scored to this level's authority map** — what is decided alone, what invokes a process, and what belongs to others.

### Common pitfalls to watch for when scoring

- **Rewarding heroics over clean handoffs.**
- **Crediting silence sold as loyalty** — an incomplete record protecting a colleague.
- **Missing when escalation is used as a first resort, or conversely as delegation of a decision that belongs to this role.**
- **Rewarding rank as if it decided priority**, rather than the stated impact framework.
- **Treating "better safe than sorry" as universally correct**, when habitual maximum caution is also a judgement failure.
- **Accepting an option that resolves pressure by adjusting what the record says** rather than what actually happened.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior operations analyst: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests diagnosing incidents by elimination, catching the entry that contradicts the rest across notification queues and configuration records, and recognising the reconciliation instinct of asking whether sources overlap. The numeric section tests converting availability percentages into downtime minutes and error-budget burn rates, projecting trends across changed baselines, weighting averages by the traffic users actually experience, and quantifying change impact. The verbal section tests reading procedures and layered instructions with modal precision, and judging whether a handover carries its decision rules. The situational judgement section tests the hinge-point calls of this level: correcting one's own diagnosis in the open, holding the record truthful under pressure from above, escalating a specialist's dismissal through evidence, and deciding at 02:40, alone, when a projection justifies waking someone.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can diagnose carefully, quantify honestly, read precisely, and exercise sound judgement alone under pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
