# Change and Release Analyst - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for change and release analyst, within the UK Government Digital and Data profession. These assessments are job-specific: rather than abstract puzzles, they use the materials a change and release analyst genuinely handles — change requests, release schedules, deployment checklists, configuration records, incident logs, and messages from DevOps colleagues and service designers.

A change and release analyst plans and rolls out software, and designs and carries out the procedures for distributing and installing changes to systems and services, analysing what happened after each release and setting the plan for upcoming changes. That work rewards four capabilities the assessment measures directly: cognitive ability (spotting a broken step in a deployment procedure before it causes an incident), numerical reasoning (working out a release success rate or reading a table of change volumes), verbal reasoning (understanding exactly what a change policy does and does not say), and situational judgement (choosing the right action when a release goes wrong at 4:55pm on a Friday).

This document is organised into four assessment sections, one for each assessment type. Each follows the same pattern: an overview of what the assessment measures and how it is usually run, a mapping of the assessment to the specific skills in the role, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring. Questions start easy and get gradually harder.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes the role demands, using practical workplace scenarios rather than abstract puzzles. Instead of asking a candidate to rotate shapes in their head, it presents the everyday materials of the job — change requests, release calendars, deployment runbooks, configuration management database (CMDB) records, and post-release reports — and asks them to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, against a norm group at this level. Many platforms are adaptive, and employers usually receive a breakdown of accuracy and speed rather than a single pass-or-fail mark; ungraded practice questions are usually offered first.

Cognitive assessment matters for this role because it is, at its heart, about careful structured thinking under time pressure. Planning a software rollout means holding several moving parts in mind at once: which environments the release passes through, which changes depend on which others, which release window is available, and what the back-out plan is if something fails. Post-release analysis means looking for patterns in what went well and what did not. Checking a change request means spotting missing or contradictory information before it reaches the change advisory board.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Asset and configuration management** skill: noticing when a CMDB record does not follow the naming convention, when the same server appears twice under different labels, or when a cluster of failed deployments shares a common feature. It also supports post-release analysis, where patterns in outcomes inform the next plan.
- **Logical deduction** maps to the **Change management** skill: analysing and assessing the impact of change requires reasoning from rules — change freeze policies, approval requirements, dependency statements — to their necessary consequences.
- **Error checking** maps to both **Asset and configuration management** and **Change management**: a single wrong field in a change record or a step out of order in an installation procedure can cause a failed release.
- **Prioritisation** maps to the **Incident management** skill and the **Ownership and topic** skill.
- **Applied problem solving** maps to the **Problem management** skill: decomposing a messy situation into causes and contributing to remedies, in liaison with DevOps and service designers.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in release version numbers**

Releases are named using the pattern "service name, hyphen, major version, dot, minor version, dot, patch number" — for example, "caseportal-2.4.1". The candidate is shown these five entries while preparing next month's release calendar:

1. caseportal-2.5.0
2. paygateway-1.12.3
3. docstore-3.0.1
4. notifyhub-4.2
5. caseportal-2.5.1

Which entry breaks the naming pattern?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** The pattern requires three numbers separated by dots: major, minor, and patch. Entry 4, "notifyhub-4.2", has only two numbers — the patch number is missing. Entry 2 might look odd because "12" is a two-digit minor version, but nothing in the rule limits how large each number can be. Entries 1, 3 and 5 all follow the rule exactly. This tests exactly the consistency check a change and release analyst performs to maintain accurate configuration information: a release calendar with inconsistent version labels causes real confusion when someone has to work out which patch is actually deployed in production. A strong candidate reads the rule carefully first, then checks each option against it one at a time, rather than relying on what "looks" wrong.

**Question 2 (easy) — Logical deduction from a change freeze rule**

The organisation's change policy states: "During the December change freeze, no changes may be deployed to production unless the change is classed as an emergency change and has been approved by the change and release manager." It is 12 December, inside the freeze. A colleague reports: "The fix for the payments service was deployed to production this morning." Which one of the following conclusions must be true?

- A) The fix was an emergency change approved by the change and release manager.
- B) The deployment breached the change policy.
- C) Either the fix was an approved emergency change, or the deployment breached the policy.
- D) The payments service had a major incident this morning.

**Correct answer: C**

**Explanation:** The policy is a rule with exactly one permitted exception. The facts establish that a production deployment happened during the freeze, but not whether it qualified for the exception — so option A is possible but not guaranteed, and option B is possible but not guaranteed. Option D invents information the question never gives. The only statement that must be true in every situation consistent with the facts is option C. This tests deducing only what the information guarantees, and a strong candidate's answer would check emergency change records before treating a colleague's deployment as a breach.

**Question 3 (easy) — Error checking a deployment checklist**

The standard installation procedure for a service update lists these steps in order: (1) confirm the change is approved; (2) take a backup of the current version; (3) deploy the new version to staging; (4) run smoke tests in staging; (5) deploy to production; (6) run smoke tests in production; (7) update the CMDB. A new team member has written up the procedure for a different service as: confirm approval, deploy to staging, take a backup, run staging smoke tests, deploy to production, run production smoke tests, update the CMDB. What is wrong with the new write-up?

- A) The backup step is missing entirely.
- B) The backup happens after deployment to staging instead of before it.
- C) The CMDB update should happen before production deployment.
- D) Nothing is wrong; the order is acceptable.

**Correct answer: B**

**Explanation:** Comparing the two sequences step by step: the standard procedure takes the backup as step 2, before anything is deployed anywhere. The new write-up moves the backup to after the staging deployment. The backup is present, so A is wrong, and the CMDB is correctly updated last, so C is wrong — a CMDB updated before deployment would briefly record a version that is not actually live. The order matters because the backup exists to support a back-out: a clean copy of the known-good state should exist before the change process begins, and procedures exist so the safe order becomes a habit that carries into production even where the immediate risk (in staging) is small. This tests methodical step-by-step comparison of old list against new list, the same technique used to verify the state of IT assets against their records.

**Question 4 (moderate) — Prioritisation on a busy morning**

It is 9:15 on Tuesday morning. Four items are waiting for the candidate:

1. A user has emailed directly reporting that the document upload feature has stopped working since last night's release. No incident ticket exists yet.
2. The post-release analysis report for last night's release is due to the manager by end of day.
3. A change request documented earlier is on the agenda for the change advisory board at 2pm, and the change and release manager has asked for the missing back-out plan to be added before the meeting.
4. The CMDB record for a decommissioned test server still shows it as live, noticed yesterday.

Which sequencing is most defensible?

- A) 1, 3, 2, 4 — register the incident, then complete the CAB paperwork, then the report, then the CMDB fix
- B) 2, 1, 3, 4 — the report has today's deadline, so do it first
- C) 3, 1, 2, 4 — the CAB meeting is the most senior audience, so prepare for it first
- D) 4, 1, 3, 2 — CMDB accuracy is the foundation of everything, so fix it first

**Correct answer: A**

**Explanation:** Weighing impact and urgency together: item 1 is a live service problem affecting users right now, possibly caused by the very release under analysis — and no incident ticket exists, so nothing will happen until someone registers it. This is the incident management skill exactly: identify, register, and allocate to the appropriate channel, which takes minutes and unblocks the whole resolution process, so it comes first. Item 3 has a hard 2pm deadline and blocks a governance decision. Item 2 is due by end of day and can follow the 2pm deadline. Item 4 is low risk and can wait. Option B confuses "due today" with "most urgent this minute"; option C prioritises by seniority of audience rather than impact; option D treats an important background task as an emergency. A strong candidate's answer shows quick unblocking actions taking priority even when bigger tasks loom.

**Question 5 (moderate) — Logical deduction about release scheduling**

The release calendar has these rules: (i) releases to the payments service may only happen in the Tuesday or Thursday evening windows; (ii) a release cannot be deployed until its change request has been approved at the weekly change advisory board, which meets on Wednesday afternoons; (iii) after approval, the DevOps team needs one full working day to prepare the deployment pipeline. A change request for the payments service is submitted on Monday and is expected to be approved at the next board. What is the earliest window in which the release can be deployed?

- A) Tuesday evening the same week
- B) Thursday evening the same week
- C) Tuesday evening the following week
- D) Thursday evening the following week

**Correct answer: B**

**Explanation:** Working forwards through the rules: the request is submitted Monday, the board meets Wednesday afternoon, so approval arrives Wednesday. Rule (iii) requires one full working day of pipeline preparation — Thursday. Thursday is a permitted window for payments (rule i), and by Thursday evening the full working day of preparation is complete. Tuesday evening the same week fails because it is before approval. A common error is to conclude Friday is the earliest ready date and push the release to the following Tuesday, but "one full working day after Wednesday afternoon approval" is satisfied by close of Thursday, with the evening window sitting after the working day ends. This tests drawing a quick timeline — exactly the reasoning behind setting a plan for upcoming changes and coordinating with DevOps on pipeline readiness.

**Question 6 (moderate) — Error checking CMDB records against a scan**

An automated discovery scan reports four servers in the web tier: WEB01 (OS version 8), WEB02 (version 8), WEB03 (version 9), WEB04 (version 8). The CMDB records read:

| CMDB record | Recorded OS version | Recorded status |
|---|---|---|
| WEB01 | 8 | Live |
| WEB02 | 7 | Live |
| WEB03 | 9 | Live |
| WEB05 | 8 | Live |

Assuming the scan is accurate, how many separate discrepancies are there between the scan and the CMDB?

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** Comparing systematically, item by item: WEB01 matches. WEB02 shows scan version 8 against CMDB version 7 — discrepancy one, a wrong attribute value. WEB03 matches. WEB04 appears in the scan but has no CMDB record — discrepancy two, a missing record. WEB05 is recorded live in the CMDB but absent from the scan — discrepancy three, a ghost record. Total: three. The tempting mistake is to treat WEB04 and WEB05 as a single mismatch — perhaps a mistyped name — and answer B, but the question asks how many discrepancies exist as the sources stand, and there are three distinct ones. This tests recording every discrepancy accurately before investigating causes — merging discrepancies too early can hide a real problem, since WEB04 and WEB05 might genuinely be two different machines.

**Question 7 (moderate) — Pattern recognition in release outcomes**

Reviewing six months of post-release analysis across 24 releases: 6 failed — release 3 (Friday, payments service), release 7 (Friday, document service), release 11 (Tuesday, payments service), release 15 (Friday, notifications service), release 19 (Friday, payments service), release 22 (Friday, case service). The 18 successful releases were spread across Tuesdays, Wednesdays and Thursdays, with two successes on Fridays. Which pattern is best supported by this data?

- A) The payments service causes most release failures.
- B) Friday releases fail disproportionately often.
- C) Releases fail more often as the year goes on.
- D) Tuesday is the safest release day.

**Correct answer: B**

**Explanation:** Testing each candidate pattern: five of the six failures happened on a Friday, and only two Friday releases succeeded — five of seven Friday releases failed (about 71%), against one failure in seventeen non-Friday releases (about 6%), a strong pattern. Payments appears in three of six failures, but also failed on a Tuesday, so the service pattern is weaker and mixed. The failure numbers show no worsening trend across the sequence. Tuesday had a failure (release 11), so it cannot be called safest on this evidence. The strongest supported statement is B. This tests finding the signal — a risky release day, perhaps due to reduced weekend support cover — that should change the plan for upcoming changes, such as proposing releases move away from Fridays.

**Question 8 (moderate) — Applied problem solving during a rollout**

A software update is rolling out to 200 branch office machines in batches of 50 per evening. After batch one, 46 machines updated successfully and 4 failed with the same error code. The procedure says a batch failure rate above 5% requires the rollout to be paused and investigated. What should happen next?

- A) Continue with batch two — 4 failures out of 200 machines is only 2%.
- B) Pause the rollout — 4 failures out of 50 machines is 8%, above the 5% threshold, and investigate the common error code.
- C) Retry the 4 failed machines immediately and continue if at least 2 succeed.
- D) Abandon the rollout and revert the 46 successful machines.

**Correct answer: B**

**Explanation:** The threshold applies to the batch: 4 out of 50 machines attempted is 8%, exceeding 5%. Option A divides by the total planned population (200) rather than machines actually attempted (50) — only 50 machines have been through the process, so only 50 can inform the rate. Option C invents a rule the procedure does not contain, and retrying without investigating wastes the clue that all four failures share the same error code, suggesting a common cause batch two would likely hit too. Option D is disproportionate given 46 successes and no evidence the update itself is harmful. This tests following the documented procedure calmly, then applying problem management: investigate the shared error code, understand whether the problem is operational or broader, contribute a remedy, then resume.

**Question 9 (challenging) — Multi-constraint release scheduling**

Three releases — Alpha (A), Bravo (B), and Charlie (C) — must be scheduled across five weekday evenings, Monday to Friday, at most one release per evening. Constraints: (i) B depends on a configuration change delivered by A, and needs at least one clear evening between A and B for verification; (ii) C must not be on the evening immediately after any other release, because the support team needs a quiet evening after each release before starting another with reduced cover; (iii) the DevOps engineer needed for A is only available Monday and Tuesday; (iv) Friday is reserved for emergency changes only. On which evening must B take place?

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) It cannot be scheduled within the constraints.

**Correct answer: C**

**Explanation:** Rule (iv) removes Friday, leaving Monday to Thursday. Rule (iii) puts A on Monday or Tuesday. Testing A on Monday: rule (i) requires a clear evening between A and B, so B is Wednesday or Thursday; checking each against rule (ii) for where C can then fit shows B on Wednesday leaves no valid slot for C, but B on Thursday allows C on Wednesday (Tuesday, its predecessor, is empty). Testing A on Tuesday: B must be Thursday, and C fits on Monday, since Wednesday would be immediately after Tuesday's A. In every valid arrangement, B lands on Thursday — answer C. This tests enumerating systematically and eliminating what breaks a rule, exactly how a real release calendar is built around dependency rules, staff availability, and protected windows.

**Question 10 (challenging) — Deduction from post-release evidence**

The morning after a release that changed three components — the web front end, the search index, and the payment connector — users report that searching works but every payment attempt fails. Overnight monitoring shows: the web front end served all pages normally; the search index rebuilt successfully at 2am; the payment connector logged "certificate not found" errors starting at 1:30am, when it was deployed. The payment provider confirms their systems were healthy all night. Which conclusion is best supported?

- A) The release's payment connector change is the most likely cause, and the certificate error is the lead to investigate.
- B) The payment provider caused the failure and is concealing it.
- C) The search index rebuild interfered with payments.
- D) The web front end is the most likely cause because users see the failure there.

**Correct answer: A**

**Explanation:** Reasoning by elimination and timing: the failure began exactly when the payment connector was deployed, and the connector is logging a specific, plausible error consistent with a deployment omitting a credential file. The provider reports healthy systems with no evidence against that, so B asserts far more than the facts support. The search rebuild succeeded and search works, with no evidence linking it to payments, so C is speculation. D confuses where users see a failure with where it originates, and the front end's own logs are clean. This tests following the evidence — correlation in time plus a specific error message — and applying problem management: understanding the level of the problem and starting investigation where the component changed and the errors began at the same moment.

**Question 11 (challenging) — Procedure logic with branching conditions**

The back-out procedure states: "If production smoke tests fail after deployment, first retry the smoke tests once. If they fail again, check whether any users have submitted data through the new version. If no user data has been submitted, restore the backup taken before deployment. If user data has been submitted, do not restore the backup; instead escalate to the change and release manager and keep the new version running." A deployment finished at 11pm. Smoke tests failed at 11:10pm and again on retry at 11:20pm. Logs show one user submitted a form through the new version at 11:15pm. According to the procedure, what should the on-call analyst have done?

- A) Restored the backup, because the smoke tests failed twice.
- B) Retried the smoke tests a third time before deciding.
- C) Escalated to the change and release manager and kept the new version running.
- D) Restored the backup but exported the user's form first.

**Correct answer: C**

**Explanation:** Following the branches exactly: the first failure triggers one retry; the second failure requires checking for user data submitted through the new version; the 11:15pm submission means user data exists, and the procedure's instruction for that branch is explicit — do not restore the backup, escalate and keep the new version running. Option A ignores the user-data condition that switches the branch, and restoring would silently destroy the submission. Option B invents a third retry the procedure does not contain. Option D sounds pragmatic but the procedure deliberately reserves that judgement for the escalation point rather than the on-call analyst, since handling user data during an incident carries risks that deserve a senior decision. This tests reading conditional procedures precisely — which branch applies, given these facts — a core skill both on paper and at 11:20pm in real life.

**Question 12 (challenging) — Integrated reasoning across artefacts**

Planning next month's changes, three sources are relevant. The release calendar shows the finance service has a protected freeze for the first week of the month (year-end processing). An email from a service designer says user research found the new accessibility fix for the finance service "should reach users as early as possible in the month". A change request from DevOps proposes deploying the accessibility fix together with a database upgrade in a single combined release "to save a release window", noting the database upgrade needs two evenings of preparation that can only start after year-end processing completes. What is the strongest recommendation?

- A) Schedule the combined release in week one — accessibility needs outweigh the freeze.
- B) Schedule the combined release in week three, after the freeze and the two evenings of preparation.
- C) Split the releases: deploy the accessibility fix alone in week two, and the database upgrade later once its preparation is complete.
- D) Delay both changes to the following month to avoid all risk.

**Correct answer: C**

**Explanation:** The freeze rules out week one, so option A breaches a protected window. The database upgrade cannot begin preparation until after week one and needs two evenings, realistically landing week two at the earliest, more comfortably week three. Combining the releases forces the accessibility fix to wait for the slowest component — the hidden cost of "saving a release window". Splitting lets the accessibility fix go out in week two, the earliest the freeze allows, while the database upgrade proceeds on its own timeline. Option B makes users wait an extra week for no user benefit. Option D delivers nothing. This tests reconciling all three sources, reflecting both liaison with DevOps and service designers and user focus — understanding the need behind a change request and serving it rather than just the calendar.

### Administration tips

- **Watch for whether a candidate restates the rule before checking options**, rather than relying on instinct.
- **Score scheduling questions for method**, not just the final answer — a candidate who draws a timeline is demonstrating a transferable technique.
- **Note whether a candidate counts every discrepancy before theorising about a shared cause**, in error-checking items.
- **Keep timing consistent** across candidates for this level.
- **Use the integrated reasoning item (Question 12) as debrief material.**

### Common pitfalls to watch for when scoring

- **Rewarding answers that divide by the wrong base** — using the planned total instead of the attempted population.
- **Crediting an answer that merges separate discrepancies** before they are counted individually.
- **Rewarding the dramatic option** in problem-solving questions when a targeted pause-and-investigate was available.
- **Missing when a candidate ignores a stated threshold or branch** in a procedure.
- **Accepting an answer that plans only for the happy path** in time-based scheduling questions.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the numbers this role genuinely produces: change volumes, release success rates, incident counts, availability percentages, capacity figures, and the tables they appear in. It is not a mathematics exam — nothing here goes beyond percentages, ratios, averages, rates, and careful table reading. What it rewards is care: choosing the right numbers, doing the right operation, and sense-checking the result.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. Each question usually presents a small table, chart, or short scenario with figures, followed by four or five options. An on-screen calculator is usually allowed. Scoring is against a norm group at this level, adaptive difficulty is common, and unfinished questions are normal.

Numeric reasoning matters for this role because it runs on operational numbers. Undertaking analysis after a release means computing success rates and comparing them to previous releases. Setting the plan for upcoming changes means counting change requests, estimating durations, and checking they fit available windows. Explaining availability and capacity management processes means discussing percentages of uptime and headroom before a threshold. A candidate who misreads a table or divides by the wrong number can pause a healthy rollout, or fail to pause an unhealthy one.

### How this assessment maps to the role

The numeric skills tested map directly to the named skills in the role summary:

- **Percentages and rates** map to the **Change management** skill and post-release analysis: release success rates, failure rates against thresholds, and month-on-month changes in volumes. They also underpin **Availability and capacity management**.
- **Averages and weighted averages** map to the **Incident management** skill: average incidents per day, average resolution effort, and correctly combining figures from teams of different sizes.
- **Ratios and proportions** map to the **Asset and configuration management** skill: sampling CMDB records for an accuracy audit and scaling the result, and splitting change volumes across categories.
- **Reading tables and identifying trends** maps to the duty to undertake analysis after release and set the plan for upcoming changes, plus **Continuity management** and **Availability and capacity management** knowledge.
- **Time and duration arithmetic** maps to the core duty of planning and rolling out software: fitting deployments, smoke tests, and back-out plans inside release windows.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Release success rate**

Last month a team implemented 40 changes. 34 were successful and 6 failed or were backed out. What was the change success rate?

- A) 80%
- B) 85%
- C) 88%
- D) 90%

**Correct answer: B**

**Explanation:** Success rate = successful changes ÷ total changes × 100 = 34 ÷ 40 = 85%. A sense-check via the failure side confirms it: 6 ÷ 40 = 15%, and 100% − 15% = 85%. This is the single most common figure in post-release analysis, and the base is 40 — all changes attempted — not a larger planned or requested figure. Choosing the right base is the heart of percentage work, and this calculation should be near-automatic for a strong candidate.

**Question 2 (easy) — Average incidents per day**

In the five working days after a major release, the service desk registered these numbers of release-related incidents: Monday 12, Tuesday 8, Wednesday 15, Thursday 9, Friday 6. What was the average (mean) number per day?

- A) 9
- B) 10
- C) 11
- D) 12

**Correct answer: B**

**Explanation:** Mean = total ÷ number of days. Adding: 12 + 8 + 15 + 9 + 6 = 50; 50 ÷ 5 = 10. A sense-check confirms the values range from 6 to 15, and 10 sits comfortably inside that range. A strong candidate's answer may note this average is useful as a baseline: if a previous release averaged 6 incidents per day, this release generated markedly more, a finding worth investigating.

**Question 3 (easy) — Ratio of change categories**

Changes last quarter split into standard, normal, and emergency categories in the ratio 7 : 4 : 1. There were 120 changes in total. How many were emergency changes?

- A) 8
- B) 10
- C) 12
- D) 17

**Correct answer: B**

**Explanation:** Total ratio parts = 12; one part = 120 ÷ 12 = 10; emergency changes = 1 part = 10. A full sense-check reproduces the total: standard 70, normal 40, emergency 10, summing to 120. This tests ratio reasoning applied to summarising a change mix, and a strong candidate may note that a rising proportion of emergency changes often signals planning being bypassed — a pattern worth surfacing.

**Question 4 (moderate) — Percentage change in failures**

In April, 15 changes failed. In May, 12 changes failed. By what percentage did the number of failed changes decrease from April to May?

- A) 3%
- B) 12.5%
- C) 20%
- D) 25%

**Correct answer: C**

**Explanation:** Percentage change = (difference ÷ original value) × 100, with the earlier figure as the original: (15 − 12) ÷ 15 = 20%. Option D divides by the later figure instead (3 ÷ 12 = 25%), a very common error; option A mistakes the absolute difference for a percentage. This tests precision about which base a comparison uses — the direction matters when reporting improvement, since "failures fell 20% from April" uses April as the base, and a later comparison from a different base gives a different percentage for the same gap.

**Question 5 (moderate) — Availability percentage**

The document service is expected to be available 24 hours a day. In a 30-day month it suffered two outages: one of 90 minutes and one of 126 minutes. What was the service's availability for the month?

- A) 99.0%
- B) 99.3%
- C) 99.5%
- D) 99.8%

**Correct answer: C**

**Explanation:** Total minutes in the month = 30 × 24 × 60 = 43,200. Total downtime = 90 + 126 = 216 minutes. Downtime fraction = 216 ÷ 43,200 = 0.5%. Availability = 100% − 0.5% = 99.5%. This calculation sits at the centre of explaining availability and capacity management processes, and a strong candidate's answer may note the reverse reading: a 99.5% target still permits over three and a half hours of downtime a month, which is one reason release windows sit in quiet hours.

**Question 6 (moderate) — Reading a change volume table**

| Category | Q1 changes | Q2 changes |
|---|---|---|
| Standard | 240 | 264 |
| Normal | 80 | 96 |
| Emergency | 20 | 27 |

Which category grew by the largest percentage from Q1 to Q2?

- A) Standard
- B) Normal
- C) Emergency
- D) They all grew by the same percentage

**Correct answer: C**

**Explanation:** Growth rates against the Q1 base: standard 10%, normal 20%, emergency 35%. Emergency grew fastest in percentage terms, even though its absolute increase (7 changes) is the smallest. This tests distinguishing absolute from percentage growth — standard changes added the most volume, but emergency changes growing 35% in a quarter is the finding that should reach the change advisory board, since emergency changes bypass normal planning and carry more risk.

**Question 7 (moderate) — Fitting a deployment into a release window**

Tonight's release window runs from 6:00pm to 10:00pm. The deployment takes 90 minutes, production smoke tests take 45 minutes, and — if the smoke tests fail — the back-out procedure takes 60 minutes and must be fully complete by the end of the window. What is the latest time the deployment can start?

- A) 6:00pm
- B) 6:25pm
- C) 6:45pm
- D) 7:45pm

**Correct answer: C**

**Explanation:** Planning for the worst case: deployment + smoke tests + back-out = 90 + 45 + 60 = 195 minutes = 3 hours 15 minutes. Subtracting from the window end: 10:00pm − 3h15m = 6:45pm. Starting then means a failed smoke test at 9:00pm still leaves exactly 60 minutes to back out by 10:00pm. Option D uses only the happy path (135 minutes), the classic planning error — a release plan that only fits if nothing goes wrong is a hope, not a plan. This tests always timetabling the back-out when designing distribution and installation procedures.

**Question 8 (moderate) — Weighted average success rate**

Two teams deployed changes last month. Team A implemented 60 changes with a 90% success rate. Team B implemented 40 changes with an 80% success rate. What was the overall success rate across both teams?

- A) 84%
- B) 85%
- C) 86%
- D) 88%

**Correct answer: C**

**Explanation:** 90% and 80% cannot simply be averaged, since the teams did different amounts of work. Team A successes = 54; Team B successes = 32; total = 86 out of 100 = 86%. The unweighted average (option B) is wrong whenever group sizes differ — here the answer sits closer to Team A's rate because Team A did more of the work. This tests returning to raw counts before combining percentages, which also protects against understating the larger, more successful team's contribution in a monthly report.

**Question 9 (challenging) — CMDB accuracy audit**

A random sample of 250 records out of 5,000 in the CMDB is audited. 235 are fully accurate and 15 contain at least one error. Based on this sample, approximately how many records in the whole CMDB would be expected to contain at least one error?

- A) 150
- B) 235
- C) 300
- D) 750

**Correct answer: C**

**Explanation:** Sample error rate = 15 ÷ 250 = 6%. Applying to the whole database: 6% of 5,000 = 300. Equivalently, the database is 20 times the sample, and 15 × 20 = 300. Option A halves the true figure; option D would follow from misreading 15 as 15%. This tests scaling a sample estimate correctly, and a strong candidate's answer notes that the result is an estimate — a different sample would give a slightly different figure — and should be reported with appropriate softness.

**Question 10 (challenging) — Forecasting change request volumes**

In January a team received 120 change requests, growing steadily by 15 requests each month. The team can process at most 200 requests per month. If the trend continues, in which month will the volume first exceed capacity?

- A) May
- B) June
- C) July
- D) August

**Correct answer: C**

**Explanation:** Volume in a given month = 120 + 15n, where n is months after January. Working forward: April 165, May 180, June 195, July 210. June's 195 is within capacity; July's 210 is the first month above it. Option B is the classic off-by-one error — June is close to capacity but does not exceed it. This tests exact arithmetic, and a strong candidate's answer notes that in real planning the flag should be raised well before July, since running at 97.5% of capacity in June leaves no room for a spike.

**Question 11 (challenging) — Rework as a share of total effort**

Last quarter a team implemented 250 changes, each taking 2 hours of implementation effort. 8% of the changes failed, and each failed change required an additional 3 hours of rework on top of its original effort. To one decimal place, what percentage of the team's total change effort was spent on rework?

- A) 8.0%
- B) 10.7%
- C) 12.0%
- D) 24.0%

**Correct answer: B**

**Explanation:** Failed changes = 8% of 250 = 20. Rework hours = 20 × 3 = 60. Original hours = 250 × 2 = 500. Total effort = 560 hours. Rework share = 60 ÷ 560 ≈ 10.7%. Option A wrongly assumes the rework share equals the failure rate, but rework hours per failure (3) differ from implementation hours per change (2). This tests converting a failure rate into a cost the whole team feels — a genuinely useful figure for making the case for preventative measures, since halving failures would recover about 30 hours a quarter.

**Question 12 (challenging) — Capacity headroom projection**

A database server has 1,000 GB of storage, of which 600 GB is currently used. Usage is growing by a steady 25 GB per month. The capacity management process raises an alert at 90% of total storage. If growth continues unchanged, in how many months will the alert threshold be reached?

- A) 10 months
- B) 12 months
- C) 14 months
- D) 16 months

**Correct answer: B**

**Explanation:** Alert threshold = 90% of 1,000 = 900 GB. Headroom = 900 − 600 = 300 GB. Time to threshold = 300 ÷ 25 = 12 months. Option D comes from using the full 1,000 GB instead of the 90% threshold — capacity processes alert early on purpose, since fixing storage takes lead time. This is the arithmetic behind availability and capacity management knowledge: headroom ÷ growth rate = time to act, applied to storage, transaction volumes, or licence counts.

### Administration tips

- **Score the four core moves**: percentage of a total, percentage change, weighted average, rate × time.
- **Watch for whether a candidate names the base before dividing.**
- **Note whether a candidate returns to raw counts before combining percentages** from unequal groups.
- **Keep an on-screen calculator available.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Accepting an answer that divides by the wrong base.**
- **Accepting a direct average of percentages from unequal groups.**
- **Missing an off-by-one error in a projection question** — the month a value first exceeds a threshold is not the month closest to it.
- **Rewarding a happy-path-only time plan** that omits a required contingency duration.
- **Confusing absolute change with percentage change** when scoring table-reading items.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and reasons about written material of the kind this role handles daily: change policy extracts, release procedure documents, emails from DevOps colleagues and service designers, incident notices, service standards, and user stories. The most common question style presents a short passage and a statement, then asks whether the statement is **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage gives too little information to decide). Other styles ask for the main point of a passage, a safe inference, an unstated assumption, or which of several rewrites communicates most clearly.

The typical format is an online, timed test lasting 15 to 25 minutes with 15 to 30 questions. The governing rule: answer only from the passage in front of the candidate. Scoring is against a norm group at this level, adaptive difficulty is common, and unfinished questions are normal.

Verbal reasoning matters for this role because written accuracy carries operational weight. A change advisory board decides based on exactly what was written in a change request, not what was meant. The difference between "must" and "should" in a change freeze policy determines whether a deployment is permitted. Procedures followed at 11pm must be read as written, and procedures written for others must be written precisely.

### How this assessment maps to the role

The verbal skills tested map directly to the named skills in the role summary:

- **Precise comprehension of rules and conditions** maps to the **Change management** skill: documenting change requests and actioning changes depends on reading approval conditions, freeze rules, and procedural branches exactly as written.
- **True/False/Cannot-say discipline** maps to the **Asset and configuration management** skill: verifying the location and state of IT assets is separating what is confirmed by evidence from what is merely assumed.
- **Inference and assumption-spotting** maps to the **Problem management** skill: reading incident notes and reports, drawing only the conclusions the evidence supports.
- **Clear-writing judgement** maps to the **User focus** and **Community collaboration** skills: writing release communications that non-technical readers can follow.
- **Reading for the appropriate channel** maps to the **Incident management** and **Ownership and topic** skills.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Passage 1 (for Questions 1–3)**

*Extract from the departmental change policy:* "All normal changes must be submitted to the change advisory board at least five working days before the proposed implementation date. Standard changes are pre-authorised and may be implemented without board review, provided they follow an approved template. Emergency changes may be implemented before board review, but must be reviewed retrospectively at the next board meeting. The board meets weekly. Changes submitted with incomplete back-out plans will be returned to the submitter without review."

**Question 1 (easy) — True/False/Cannot say**

Statement: "Standard changes do not require review by the change advisory board before implementation."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage states directly that standard changes "are pre-authorised and may be implemented without board review, provided they follow an approved template". The statement matches this. The exemption depends on the template proviso, but the statement claims only that prior board review is not required, which the passage supports — so True. This tests recognising that a statement matching a passage's plain meaning is True even where the passage adds conditions the statement does not contradict.

**Question 2 (easy) — True/False/Cannot say**

Statement: "Emergency changes are exempt from review by the change advisory board."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says emergency changes "may be implemented before board review, but must be reviewed retrospectively at the next board meeting" — so emergency changes are not exempt from review, only deferred until after implementation. The statement confuses "review happens later" with "no review happens", contradicted directly by the passage: False. This tests watching for statements that quietly strengthen a passage's claim — "later" becoming "never" — since strengthened claims are usually False or Cannot say.

**Question 3 (easy) — True/False/Cannot say**

Statement: "The change advisory board meets on Wednesdays."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage says the board "meets weekly" but never states which day. The answer is Cannot say. This is the discipline the whole test rests on: the difference between what a document states and what a candidate happens to know or expect from their own workplace.

**Passage 2 (for Questions 4–5)**

*Extract from the IT continuity procedure:* "In the event of a declared major incident affecting the primary data centre, services will be restored at the secondary site in priority order. Priority 1 services must be restored within four hours of declaration. Priority 2 services must be restored within twenty-four hours. The priority list is reviewed quarterly by service owners. Restoration at the secondary site uses the most recent overnight backup; data entered between the last backup and the incident may be lost. Release activity is suspended during a declared major incident, and any release in progress must be halted and assessed."

**Question 4 (moderate) — True/False/Cannot say**

Statement: "If a major incident is declared while a release is in progress, the release must be halted."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The final sentence states: "any release in progress must be halted and assessed". The statement is a direct match for the first half of that instruction; adding "and assessed" in the passage does not weaken the statement's claim, so True. This tests exactly the reading a candidate would need in real time — the halt comes before the assessment, and a strong candidate's answer might note that release runbooks should reference this continuity rule so the instruction reaches the person at the keyboard.

**Question 5 (moderate) — Inference from the passage**

Based on Passage 2, which of the following is the safest inference?

- A) Priority 1 services are more important to the organisation than Priority 2 services.
- B) The secondary site has less capacity than the primary site.
- C) No data is ever lost during failover to the secondary site.
- D) Service owners never change the priority list.

**Correct answer: A**

**Explanation:** The passage gives Priority 1 services a four-hour restoration target and Priority 2 services twenty-four hours; an ordering by "priority" with much tighter targets for Priority 1 clearly implies those services matter more. Option B introduces a claim about capacity the passage never makes. Option C is contradicted, since the passage warns data "may be lost". Option D over-reads a quarterly review as meaning the list never changes. This tests drawing the inference the text's own structure supports, neither exaggerating nor understating what a procedure promises.

**Question 6 (moderate) — Must, should, and may**

The release standards document contains: (i) "Deployments to production **must** be performed from the approved pipeline." (ii) "Deployment scripts **should** be peer reviewed before first use." (iii) "Analysts **may** schedule standard changes in any approved window." A colleague deployed to production manually last night, using a script that had been peer reviewed, in an approved window. Which requirement, if any, was breached?

- A) Requirement (i) only
- B) Requirement (ii) only
- C) Requirements (i) and (iii)
- D) No requirement was breached

**Correct answer: A**

**Explanation:** "Must" marks a mandatory requirement, "should" a strong recommendation permitting justified exceptions, and "may" a permission. A manual deployment breaches (i), which requires the approved pipeline. The script was peer reviewed, so (ii) is unaffected regardless. Permissions cannot be "breached" by using them, so (iii) is not in play. Exactly one requirement was breached. This graded vocabulary (following the RFC 2119 convention) is load-bearing across government and industry standards, and reading it precisely is part of the change management skill this item tests.

**Question 7 (moderate) — Clear-writing judgement**

A service notice about tonight's release must go to non-technical staff. Which version communicates most clearly?

- A) "Pursuant to change CHG-4471, the case management application will undergo scheduled maintenance activities during the designated release window, potentially impacting system availability for end users."
- B) "The case management system will be unavailable tonight between 8pm and 9pm while we install an update. Please save your work and log out before 8pm. It will work normally from 9pm."
- C) "Tonight we are deploying release 3.2.1 to the production environment via the blue-green pipeline, with a rollback checkpoint after smoke testing."
- D) "There may be some disruption to some systems at some point tonight due to essential works."

**Correct answer: B**

**Explanation:** Non-technical staff need to know what is affected, when, and what to do — option B gives exactly that, with specific times and a clear action. Option A is officialese that hides the two facts people need. Option C is accurate but written for the wrong audience, using terms that mean nothing to caseworkers. Option D is plain but uselessly vague. This tests writing that is specific, audience-appropriate, and action-oriented — the user focus skill applied to communication, and a strong candidate's answer would note that B's confident time window also reveals good release practice, which vague communication tends to hide.

**Passage 3 (for Questions 8–9)**

*User story from the service designer, with a note:* "As a caseworker, I need the document upload page to show a progress bar, so that I know my upload is working and do not refresh the page mid-upload. Note from the service designer: our research sessions showed that when uploads take more than a few seconds, many caseworkers refresh the page, which interrupts the upload and creates duplicate draft records. Support staff then spend time deleting duplicates. We believe a visible progress indicator will reduce refreshing. This change should be released before the winter peak if possible."

**Question 8 (moderate) — True/False/Cannot say**

Statement: "Caseworkers refreshing the page during uploads creates duplicate draft records."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The designer's note states directly that refreshing "interrupts the upload and creates duplicate draft records", so the statement is True. A candidate should distinguish this established finding from the next claim in the note — that a progress indicator "will reduce refreshing" — which is flagged as a belief ("we believe"), not an established fact. This tests noticing which parts of a passage are findings and which are hopes or hypotheses.

**Question 9 (challenging) — Identifying the unstated assumption**

The service designer's argument runs: caseworkers refresh slow uploads, which creates duplicates; a progress bar will reduce refreshing; therefore the change will reduce duplicate records. Which unstated assumption does this argument most depend on?

- A) Caseworkers refresh pages because they lack feedback that the upload is progressing, rather than for some other reason.
- B) The winter peak will increase upload volumes.
- C) Support staff dislike deleting duplicate records.
- D) The progress bar will be technically easy to implement.

**Correct answer: A**

**Explanation:** The step from "caseworkers refresh" to "a progress bar will reduce refreshing" only holds if the refreshing is caused by uncertainty about upload progress — if caseworkers refresh for a different reason (a performance bug, or habit), a progress bar might change nothing. Options B, C and D are plausible context that the argument's logic does not actually depend on. This tests spotting a load-bearing assumption — in post-release analysis, the difference between "we shipped the progress bar" and "we checked whether duplicate records actually fell", with option A's assumption the first place to look if they did not.

**Question 10 (challenging) — Reconciling two documents**

Document 1, the release procedure, states: "The CMDB must be updated within one working day of any production deployment." Document 2, last week's audit report, states: "Of the fifteen production deployments sampled, four had CMDB updates recorded more than one working day after deployment, and one had no CMDB update recorded at all." Which statement is best supported by the two documents together?

- A) The release procedure is unrealistic and should be relaxed.
- B) In the sampled deployments, the procedure's CMDB requirement was not met in five cases.
- C) Two-thirds of all production deployments comply with the CMDB requirement.
- D) The team responsible has been careless.

**Correct answer: B**

**Explanation:** The procedure sets a one-working-day requirement; the audit found four late updates and one missing update — five sampled deployments that did not meet it. Option A leaps from "the requirement was breached" to "the requirement is wrong", a policy recommendation the documents do not support. Option C generalises beyond the sample, claiming more than the evidence shows. Option D assigns blame the documents nowhere support. This tests stating exactly what the evidence establishes, without extending it — the discipline of audit findings that survive challenge at the change advisory board.

**Question 11 (challenging) — Main point of a passage**

*Extract from a post-implementation review:* "Release 4.1 was deployed successfully within its window, and all smoke tests passed. However, in the following week the service desk logged a 40% increase in calls about the redesigned search screen. Most callers were not reporting faults: the search worked as specified, but users could not find the filter controls, which had moved. Training materials had not been updated to reflect the new layout, because the training team was not informed of the change. We recommend that the release checklist include notifying the training team for any change that alters a user-facing screen."

Which sentence best expresses the main point of the passage?

- A) Release 4.1 failed and should have been backed out.
- B) A technically successful release still caused user disruption because a communication step was missing, and the process should be amended to include it.
- C) Users dislike change and will always call the service desk after a release.
- D) The training team is responsible for the increase in service desk calls.

**Correct answer: B**

**Explanation:** The passage's shape — technical success, an operational problem, a diagnosis, and a process recommendation — is captured whole by option B. Option A contradicts the passage, which reports the release worked as specified. Option C turns one incident into a cynical universal law. Option D misreads the diagnosis: the training team "was not informed", locating the gap in the release process rather than the training team's conduct. This tests reading for the author's intended action rather than the most memorable detail — the point of a post-implementation review is the checklist improvement it produces.

**Question 12 (challenging) — True/False/Cannot say with a subtle scope shift**

*Passage:* "Following January's incident, all changes to the payments service now require an additional security review before submission to the change advisory board. The security team aims to complete reviews within three working days. Since the new step was introduced, no payments change has been implemented late."

Statement: "The additional security review has not delayed any change to any service."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage is scoped to the payments service, and the statement widens this to "any service" while also swapping "was not implemented late" for "has not delayed" — a change could be internally delayed by three days of review yet still land on time against its planned date. The passage neither supports nor contradicts the statement's broader claim, so Cannot say. This tests catching scope-widening ("any service") and concept-swapping ("late" for "delayed") — the same alertness that keeps a release report honest, since "the release was on time" and "the release was not delayed" are not the same claim.

### Administration tips

- **Score Cannot say answers on their own merits.**
- **Watch for whether a candidate points to the exact words** supporting or contradicting a statement.
- **Note whether a candidate tracks the strength and scope of claims** — all, never, only, must, may, any service versus one service.
- **Use the clear-writing item (Question 7) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer drawn from outside knowledge** rather than the passage.
- **Penalising appropriate use of Cannot say.**
- **Missing negations and reversals** — "not exempt from review" versus "exempt from review".
- **Treating near-synonyms as synonyms when scoring** — "later" is not "never"; "delayed" is not "late".
- **Rewarding an answer that assigns blame** in main-point or inference questions where the text does not.
- **Accepting a hypothesis quoted from a passage as if it were a stated finding.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks how the candidate would respond. It has no arithmetic and no passages — instead it measures professional judgement: how a candidate balances user needs, process discipline, honesty, teamwork, and knowing when to act versus when to escalate. Question formats vary: most commonly the candidate chooses the **most effective** response from four options; others ask for the **least effective**, a rating of each option, or a ranking of all four.

The typical format is an online test of 20 to 40 minutes with 10 to 20 scenarios, usually untimed or generously timed, since considered judgement matters more than reflexes. Options are carefully built: alongside the best response there is typically one that is almost right but skips a step, one that avoids the problem, and one that overreacts. Scoring compares choices against a key set by experienced practitioners and calibrated to this level — at analyst level, the strong answer often involves doing the immediate safe thing and then involving the change and release manager, where at senior levels the right answer might be to decide alone.

Situational judgement matters for this role because it sits at a busy junction: developers want changes released quickly, users want stability, procedures impose discipline, and unexpected failures demand calm decisions, sometimes late in the evening when the analyst is the only person watching a deployment. Judgement — not technical skill alone — predicts who handles that junction well.

### How this assessment maps to the role

The judgement dimensions map directly to the named skills in the role summary:

- **Process discipline under pressure** maps to the **Change management** skill: holding the line, politely, when someone asks for a shortcut, and knowing which shortcuts are legitimate.
- **Escalation judgement** maps to the **Ownership and topic** skill: knowing what is the candidate's own to fix and what to raise.
- **Routing and information gathering** maps to the **Incident management** skill.
- **Working with others** maps to the **Community collaboration** skill.
- **User focus** maps to the **User focus** and **Service focus** skills.
- **Honesty and learning** maps to the **Problem management** skill: post-release analysis only works if it is honest, including when it points at the candidate's own work.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pressure to skip the process**

A developer messages: "Tiny fix for the reporting service, two lines of code, zero risk. Can you just push it out tonight? Raising a change request feels like overkill and the board doesn't meet until Wednesday." What is the most effective response?

- A) Deploy it tonight — maintaining a good relationship with developers matters, and it genuinely is a small change.
- B) Refuse and report the developer to their line manager for attempting to bypass change control.
- C) Explain that all production changes need a change record, help raise one quickly, and check whether it qualifies as a standard change that would not need to wait for Wednesday's board.
- D) Ignore the message until the developer raises a change request properly.

**Correct answer: C**

**Explanation:** Option C holds the process line while actively helping, and uses real process knowledge to solve the actual problem: a small, well-understood, repeatable fix may qualify as a pre-authorised standard change needing no board review. Option A trades away change control for likeability — "zero risk" is precisely the claim change assessment exists to test. Option B treats a common, usually innocent request as misconduct. Option D protects the process but abandons the colleague, teaching people to route around the analyst. This tests the scored pattern at analyst level: firm on the standard, generous with help, fluent in the legitimate fast paths.

**Question 2 (easy) — An own mistake in the CMDB**

Updating records after last night's release reveals that a fortnight ago the wrong server was recorded as hosting the notifications service, and the wrong record has been in the CMDB ever since. Nobody has noticed. What is the most effective response?

- A) Correct the record quietly — no harm was done, and mentioning it would only worry people.
- B) Correct the record, then tell the change and release manager what happened and check whether anything relied on the wrong information in the meantime.
- C) Leave the record as it is — changing it now might cause confusion.
- D) Report the error to the manager and wait for instruction before touching the record.

**Correct answer: B**

**Explanation:** Two duties operate here: fix the data, and deal honestly with the consequences of it having been wrong. Option B does both — the correction is squarely within role, and checking backwards for impact (an incident responder might have checked the wrong server; a change might have been assessed against the wrong dependency) is the "verify the state" habit this role values. Option A hides the exposure window. Option D over-escalates a correction well within competence and authority to make. This tests owning a mistake quickly and completely, one of the most reliable predictors of trustworthiness.

**Question 3 (easy) — A user reports a problem directly**

A caseworker known personally says: "Since your release last night, the search screen keeps freezing. Can you sort it?" This happens on the way to a meeting about next month's release plan. What is the most effective response?

- A) Promise to look at it personally as soon as the meeting ends.
- B) Explain that faults must go through the service desk and continue to the meeting.
- C) Thank them, gather the key details (what happens, since when, which screen, does it affect colleagues too), register the incident through the proper channel so it is tracked and routed, and share the reference so they can follow up.
- D) Say it is probably not related to the release, since the smoke tests all passed.

**Correct answer: C**

**Explanation:** This is the incident management skill verbatim — identify, gather information, allocate to the appropriate channel. Option C combines correct routing with user focus: the caseworker experiences a service that listened. Option A bypasses prioritisation and risks the report evaporating if the analyst is pulled elsewhere. Option B is procedurally correct but behaviourally poor, losing information and goodwill. Option D dismisses evidence because it is inconvenient — smoke tests passing means the tested paths worked, not that nothing broke. This tests routing an issue properly while treating the reporting person well.

**Question 4 (moderate) — A rollout starts failing while alone**

At 8:30pm, batch one of a scheduled deployment shows a higher failure rate than the procedure's pause threshold, so the rollout is paused, as the runbook requires. The runbook's next section assumes the on-call engineer is available, and tonight's on-call engineer is not answering. The release window closes at 10pm. An hour's solo investigation would probably diagnose the failures. What is the most effective response?

- A) Use the hour to investigate solo — the pause was correct, and fixing it alone would show initiative.
- B) Resume the rollout — the failures were only slightly over the threshold, and the window is closing.
- C) Keep the rollout paused, follow the escalation route to reach the change and release manager or the documented fallback contact, report the situation factually, and prepare for the likely outcome that the release completes another night with the back-out plan ready if needed.
- D) Back everything out immediately and email a full report for the morning.

**Correct answer: C**

**Explanation:** The pause was correct; the question is what follows when assumed support is missing. Option C reflects the ownership skill exactly as defined for this level: the system is in a safe, paused state, so the priority is getting the right decision-maker informed, not speed. A solo, unplanned late-evening investigation on production with the window closing converts a controlled pause into an uncontrolled experiment. Option B overrides a threshold that exists precisely so this decision is not made alone under time pressure. Option D is disproportionate given the paused state is stable. This tests the "hold safe, then escalate" pattern.

**Question 5 (moderate) — A senior colleague's incomplete change request**

Reviewing papers for tomorrow's change advisory board, a change request from a senior engineer with little patience for paperwork has no back-out plan, which policy says means it should be returned without review. The change itself looks important and well designed. What is the most effective response?

- A) Say nothing — the board can spot the gap themselves, and the engineer outranks the analyst.
- B) Contact the engineer today, point out the missing back-out plan, and offer to help add it in time for tomorrow's board.
- C) Write the back-out plan and attach it to the request without telling the engineer, so the board sees a complete paper.
- D) Flag the request to the board chair as non-compliant and recommend it be returned.

**Correct answer: B**

**Explanation:** Option B fixes the actual problem early, directly, and helpfully — seniority is irrelevant to whether a back-out plan is required, but relevant to tone, and this shape is how a junior colleague credibly holds a standard with a senior one. Option A lets an avoidable defect reach the board unaddressed. Option C is well-meant but risky: a back-out plan written by someone unfamiliar with the change's internals may be dangerously plausible, and attaching it without the engineer's knowledge muddles accountability if it is executed at 2am. Option D reaches for governance before conversation. This tests trying the cheap, human fix before escalating a defect that could still be resolved directly.

**Question 6 (moderate) — Caught between DevOps and a service designer**

A DevOps engineer wants next week's release to include a database migration alongside a user-facing fix: "One window, one set of approvals, done." A service designer wants the user-facing fix out as soon as possible, worried the migration's extra preparation will delay it. Both have emailed separately asking for their preference to be scheduled. What is the most effective response?

- A) Schedule it the DevOps engineer's way — they understand the technical risk better.
- B) Schedule it the service designer's way — user needs always outrank technical convenience.
- C) Bring the two of them and the analyst into one conversation, lay out the options with their consequences, and agree a recommendation to put to the change and release manager.
- D) Schedule both options provisionally and let whoever complains loudest win.

**Correct answer: C**

**Explanation:** The role summary names exactly this situation: liaising with DevOps and service designers. The failure mode is not technical — it is two colleagues negotiating separately through the analyst, guaranteeing someone feels overruled by a decision they never discussed. Option C fixes the structure with one conversation and a joint recommendation. Options A and B both decide by trusting a category of person rather than examining the case, and each teaches one colleague that emailing the analyst is how decisions get made. Option D is abdication dressed as flexibility. This tests bringing reasonable people with opposing views together rather than picking a winner privately.

**Question 7 (moderate) — Asked something not known**

In a release planning meeting, a service owner asks: "Is the continuity failover tested for the new document service? If the data centre fails mid-release, are we covered?" The general continuity procedure is known, but not whether this specific service's failover has been tested. What is the most effective response?

- A) Say yes — the continuity team is usually thorough, and it can be checked afterwards.
- B) Say the specific service's failover testing status is not certain, commit to finding out from the continuity team today, and share what is known: what the standard procedure requires and how the release's back-out plan interacts with it.
- C) Say it is not the analyst's area and suggest the continuity team be invited next time.
- D) Give a detailed answer about the continuity procedure in general, without mentioning that the specific answer is not known.

**Correct answer: B**

**Explanation:** Option B is honest about the boundary of knowledge, takes ownership of closing the gap with a concrete commitment, and still adds value by sharing what is genuinely known. Option A risks a guessed "yes" sitting unchallenged in meeting minutes and becoming the basis of a risk decision. Option D lets the room believe the question was answered through fluent generalities. Option C drops a question that is squarely relevant to the release being planned. This tests candour, ownership, and useful partial knowledge together — "I don't know, I'll find out by X" scored as a strength, not a weakness.

**Question 8 (moderate) — A struggling teammate before a big release**

Two weeks before the year's biggest release, a fellow analyst who owns key deployment procedures appears behind, stressed, staying late, and uncharacteristically short with a colleague in stand-up. What is the most effective response?

- A) Focus on one's own work — commenting on a peer's performance is the manager's job.
- B) Check in privately, ask how they are doing and whether they would like help, and if the release preparation genuinely is at risk, encourage them to raise it with the manager early — offering to share some of the load if capacity allows.
- C) Tell the change and release manager immediately that the release is at risk because of the colleague.
- D) Quietly take over parts of their preparation without discussing it, so the release stays on track and they are spared embarrassment.

**Correct answer: B**

**Explanation:** Option B leads with the person, then deals squarely with the work: if preparation is at risk, the manager needs to know early, best raised by the colleague themselves with support. This is the community collaboration skill in full: recognising and dealing with issues, including human ones. Option A looks away from exactly what "create the right environment" exists to rule out. Option C jumps over the colleague to the manager, converting a supportable wobble into a reported failure. Option D leaves procedures the original owner cannot answer for on release night, and hides a workload problem that will recur. This tests care for the person, honesty about the risk, and help with the load, in that order and in the open.

**Question 9 (challenging) — Discovering an unauthorised change**

Investigating a minor incident reveals the cause: a configuration change made directly on a production server three days ago, with no change record, made by a well-liked engineer who once helped out of a difficult spot. When mentioned informally, they say: "It was a tiny tweak to stop the disk filling up — I was going to raise the paperwork, honestly. Can we keep this between us? I'll raise it today." Which response would be least effective?

- A) Agree to keep it quiet as long as the change record is raised today as promised.
- B) Explain that the true cause must be recorded in the incident investigation, encourage self-reporting to the change and release manager right away, and give the engineer the chance to do so before escalating personally.
- C) Record the actual cause accurately in the incident record, including the unauthorised change.
- D) Explain why unrecorded production changes matter — this one caused an incident and cost investigation time precisely because nobody knew about it.

**Correct answer: A**

**Explanation:** The question asks for the least effective response, and it is A: agreeing to conceal. Concealment means the incident investigation would have to be silently falsified or left vague, losing the true lesson that an ungoverned change caused an outage, while making integrity purchasable for the price of a past favour — which the scenario is really testing. The other options are constructive parts of an effective response: B is honest about what must happen while offering the engineer first move to self-report; C is the non-negotiable core, that the record tells the truth; D turns an awkward moment into collegial learning. This tests whether gratitude and likeability are allowed to influence what gets recorded — they should not be.

**Question 10 (challenging) — An own plan caused the failure**

Post-release analysis of a failed release finds the cause: two changes were scheduled in the same window and their interaction was never assessed — the combined scheduling was the analyst's own suggestion, made to save a release window. The manager has asked for the analysis to be presented at Friday's team review. What is the most effective response?

- A) Present the findings fully, name the scheduling interaction as the cause and the scheduling decision as part of the chain, and propose a preventative measure — an interaction check whenever changes share a window.
- B) Present the technical interaction as the cause but leave out who scheduled the changes together, since blame is unhelpful.
- C) Ask the manager privately to reassign the presentation, since presenting an own mistake is a conflict of interest.
- D) Present the findings but emphasise that the change owners should have flagged the interaction.

**Correct answer: A**

**Explanation:** Option A is post-release analysis done honestly — the whole point of the analysis duty and the foundation of problem management: contributing to remedies and preventative measures. The preventative measure is only findable if the analysis truthfully includes the scheduling decision. Option B smuggles a half-truth under the banner of blamelessness, but blameless analysis means not punishing honest error, not omitting facts. Option D actively redirects responsibility. Option C misunderstands conflict of interest. This tests presenting an own mistake with a straight face and a good fix — the behaviour that builds, not costs, standing with a team.

**Question 11 (challenging) — A colleague being talked over**

In release retrospectives, a newer analyst — quieter than others and the only person on the team from their background — is repeatedly interrupted, and twice their suggestion has been re-stated ten minutes later by someone else and adopted with credit going to the re-stater. They have started saying less each meeting. What is the most effective response, given the observer is not the meeting chair?

- A) Say nothing in the meeting, but tell the newer analyst afterwards that their ideas are good and they should speak up more assertively.
- B) In the moment, redirect credit and attention naturally — "That builds on what Sam suggested earlier; Sam, can you say more?" — and separately mention the pattern to the chair so the meeting is run more inclusively.
- C) Raise it as a formal complaint about the interrupting colleagues.
- D) Start collecting the newer analyst's suggestions and present them on their behalf before each retrospective.

**Correct answer: B**

**Explanation:** Option B acts at both levels the problem lives at: the in-the-moment redirect costs little and returns floor and authorship to the person who earned them, while the word to the chair equips them to manage interruptions structurally. This is the community collaboration skill precisely. Option A locates the problem in the quiet colleague rather than the interrupting behaviour, coaching the wrong person. Option C reaches for formal machinery before ordinary human repairs are tried. Option D makes the newer analyst dependent and even less heard in their own voice. This tests recognising that inclusion is mostly made of small, prompt moves by peers who noticed.

**Question 12 (challenging) — Pressure to exceed authority**

The change and release manager is on leave until Monday and the deputy is off sick. On Thursday afternoon, a senior programme director says a ministerial announcement has moved to tomorrow morning and demands an emergency content update released tonight, approved on the spot: "You're the change and release person here — just approve it. I'll take full responsibility." Approving changes is beyond the analyst's authority. What is the most effective response?

- A) Approve it — a director has explicitly taken responsibility, and blocking a ministerial announcement would be career-limiting.
- B) Refuse and explain that nothing can be released until the manager returns on Monday.
- C) Explain that approval is beyond personal authority but that the emergency change procedure exists for exactly this situation, then actively help: locate the authorised approver on the escalation list or the manager's documented cover arrangement, connect the director to them fast, and prepare the change record and deployment so no time is lost once approval lands.
- D) Contact the manager on leave and ask them to approve it by phone.

**Correct answer: C**

**Explanation:** Option C honours a legitimate urgent need, a genuine limit of authority, and a procedure built for exactly this situation — and does most of it through action, preparing the record and deployment in parallel so approval is the only thing anyone waits for. Option A fails on a point worth remembering: "I'll take responsibility" is not a transferable instrument, and a verbal assurance at a desk is not what the procedure means by authorisation. Option B treats process as a wall rather than a route, leaving a genuine need unmet for four days. Option D skips documented cover arrangements as a first move. This tests being clear about the boundary and energetic about the path at the same time — under pressure, the strongest response is more procedural and more helpful together.

### Administration tips

- **Score for whether a candidate pairs a firm decline with active help toward the proper route.**
- **Watch for whether a candidate escalates before or after trying a direct, kind conversation**, except where integrity or security is genuinely at stake.
- **Treat any option built on concealment as a near-automatic low score**, however small the stated stakes.
- **Note whether a candidate acknowledges users** when a scenario places one in the room.
- **Keep candidates scored to analyst-level judgement** — safe hands, honest records, early escalation, generous collaboration — not to what a manager would decide.

### Common pitfalls to watch for when scoring

- **Rewarding the lone-hero option** — solo investigation, quietly rewriting a colleague's work, approving beyond authority.
- **Rewarding the pure-process option** that holds a standard without helping anyone forward.
- **Missing when kindness is actually avoidance** — hiding a risk to protect a colleague, or doing their work secretly to spare embarrassment.
- **Crediting an option built on concealment** as if discretion were a virtue in that context.
- **Scoring as if the candidate were being tested for a manager's decisions**, rather than analyst-level judgement.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a change and release analyst: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests checking release naming conventions, reasoning through change freeze rules, reconciling CMDB records against discovery scans, sequencing releases around dependencies and protected windows, and following branching back-out procedures precisely. The numeric section tests calculating success rates, availability percentages, weighted averages, audit projections, and capacity headroom. The verbal section tests holding the line between what a policy actually says and what might be assumed, and respecting the difference between must, should, and may. The situational judgement section tests the moments that define an analyst's reputation: holding a process line while helping a colleague, escalating early and well, owning a mistake in front of the team, and staying both procedural and helpful under pressure.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can plan releases carefully, read procedures precisely, and exercise sound judgement at the junction between process and people — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
