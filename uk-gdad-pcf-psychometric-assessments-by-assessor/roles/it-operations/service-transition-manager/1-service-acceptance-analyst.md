# Service Acceptance Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for service acceptance analyst, within the UK Government Digital and Data profession. The material is job-specific: it uses the kinds of materials a service acceptance analyst genuinely handles — acceptance criteria checklists, change requests, configuration records, incident logs, test evidence packs, and emails from project teams — and the kinds of decisions genuinely made, such as checking whether a change meets its acceptance criteria, gathering the right evidence, registering an incident correctly, and knowing when to pass a problem on to a team.

This role co-ordinates across IT operations and manages the acceptance criteria for changes in its area. The work protects live services: careful validation of a change helps make sure beneficial changes happen with minimum disruption. Cognitive items check whether a candidate can spot an error in a checklist or follow a rule step by step. Numeric items check whether a candidate can read a table of change success rates or work out a percentage. Verbal items check whether a candidate can read a change policy extract and understand exactly what it does and does not say. Situational judgement items check whether a candidate chooses sensible, professional actions in everyday workplace situations — including knowing when to ask for help, which at this level is a strength, not a weakness.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. At analyst level, consider offering the platform's ungraded practice questions first. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of rotating shapes or completing number squares, it presents the everyday materials of the job — change requests, acceptance criteria checklists, configuration records, incident tickets, and evidence packs — and asks the candidate to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with somewhere between 15 and 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many platforms adapt difficulty, and ungraded practice questions usually precede the scored test.

Cognitive assessment matters for this role because the core of the job is careful checking. Validating a change against its acceptance criteria is error checking. Deciding which of four waiting tasks to do first is prioritising. Working out what a change freeze rule means for a specific request is logical deduction.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Asset and configuration management** skill: noticing when a record breaks the expected pattern — a naming convention, a version sequence, a status code that does not fit.
- **Logical deduction** maps to the **Change management** skill: following conditional rules correctly and drawing only the conclusions the rules allow.
- **Error checking** maps directly to the core duty of validating changes against acceptance criteria and gathering evidence.
- **Prioritisation** maps to the **Incident management** skill and the **Ownership and topic** skill.
- **Applied problem solving** maps to the **Problem management** and **Service focus** skills: breaking a messy situation into steps that can be reasoned about.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in change request IDs**

A team's change requests follow a naming pattern: the letters "CHG", a hyphen, the two-digit year, a hyphen, then a four-digit sequence number — for example, CHG-25-0142. Tidying the change log reveals five entries:

1. CHG-25-0871
2. CHG-25-0872
3. CHG-0873-25
4. CHG-25-0874
5. CHG-25-0875

Which entry breaks the naming pattern?

- A) Entry 1
- B) Entry 2
- C) Entry 3
- D) Entry 5

**Correct answer: C**

**Explanation:** Entry 3 swaps the order: the four-digit number comes before the year. This tests saying the pattern in words first ("letters, year, number") and then checking each entry element by element — a small naming error looks trivial but can stop a search finding the record later, under time pressure.

**Question 2 (easy) — Logical deduction from an acceptance rule**

Acceptance criteria state: "A change may be marked as accepted only if the test evidence pack is complete AND the rollback plan has been approved." A colleague reports: "Change CHG-25-0901 has a complete test evidence pack." Based only on this information, which conclusion is correct?

- A) CHG-25-0901 may be marked as accepted.
- B) CHG-25-0901 may not be marked as accepted.
- C) It cannot yet be told — it still needs to be checked whether the rollback plan has been approved.
- D) The rollback plan has probably been approved, because the evidence pack is complete.

**Correct answer: C**

**Explanation:** The rule needs both conditions true; only one has been confirmed. Option D guesses at a fact that can be checked. This tests never letting one confirmed criterion imply the others — every criterion is checked independently.

**Question 3 (easy) — Error checking a configuration record**

An asset record should show: asset tag, location, status (In use / In storage / Retired), and last verified date.

| Asset tag | Location | Status | Last verified |
|---|---|---|---|
| LT-4471 | Leeds office | In use | Today |
| LT-4472 | Leeds office | Retired | Today |
| LT-4473 | Storage room B | In storage | Today |
| LT-4474 | Leeds office | In use | Today |

An audit found LT-4472 on a desk in the Leeds office, switched on and being used by a caseworker. Which correction should be logged?

- A) Change LT-4472's location to Storage room B
- B) Change LT-4472's status from Retired to In use
- C) Change LT-4472's last verified date to yesterday
- D) No correction is needed

**Correct answer: B**

**Explanation:** The audit shows the laptop in active use, but the record says Retired — the status field is wrong. This tests the asset and configuration management skill of tracking, logging and correcting information — and a strong candidate's answer notes a "retired" device still in active use is also worth flagging as a possible security question.

**Question 4 (easy) — Allocating an incident to the right channel**

Incidents route by category: hardware faults go to the End User Computing queue, application errors go to the Applications queue, and anything affecting many users at once is flagged as a major incident candidate and escalated immediately. A caller reports that the benefits calculation screen shows an error for her, and — as far as she knows — for everyone in her 40-person office. What should be done first?

- A) Log it in the End User Computing queue, because she called about her computer
- B) Log it in the Applications queue and move on to the next call
- C) Register the incident with the details gathered, and flag it as a major incident candidate for immediate escalation because many users are affected
- D) Ask her to restart her computer and call back if the problem continues

**Correct answer: C**

**Explanation:** The application-error rule applies, but the "many users at once" rule takes priority, and 40 people qualifies. This tests recognising when one routing rule is explicitly marked as taking priority over another, rather than stopping at the first rule that fits.

**Question 5 (moderate) — Deduction from a change freeze rule**

A change policy says: "During the change freeze, only emergency changes may be implemented. An emergency change requires approval from the on-call service owner." It is currently the change freeze period. Change CHG-25-0917 was implemented yesterday. Which one of the following must be true?

- A) CHG-25-0917 was an emergency change approved by the on-call service owner.
- B) CHG-25-0917 broke the change policy.
- C) Either CHG-25-0917 was an approved emergency change, or the change policy was broken.
- D) The on-call service owner was available yesterday.

**Correct answer: C**

**Explanation:** The change was implemented via the one lawful route, or the policy was broken — either A or B, but not certainly one or the other from the facts given. This tests concluding only the disjunction the facts guarantee, and a strong candidate's answer notes the practical corollary: check for the emergency approval record before assuming wrongdoing.

**Question 6 (moderate) — Prioritising the morning**

It is 9:00 on Tuesday. Four items are waiting:

1. A change is scheduled for go/no-go review at 11:00 today, and a validation evidence summary is the missing input.
2. A colleague has asked for a configuration record to be double-checked "sometime this week".
3. An incident registered yesterday has been sitting unallocated in the wrong queue — users are waiting.
4. A team lead has asked for availability for a training course next month.

Which order is most sensible?

- A) 3, 1, 2, 4
- B) 1, 2, 3, 4
- C) 4, 1, 3, 2
- D) 1, 3, 4, 2

**Correct answer: A**

**Explanation:** Item 3 unblocks waiting users in minutes and comes first. Item 1's hard 11:00 deadline follows. Items 2 and 4 have looser deadlines further out. This tests sequencing quick actions that unblock other people first, then hard deadlines, then everything else by date.

**Question 7 (moderate) — Matching evidence to acceptance criteria**

A change has four acceptance criteria: (i) all regression tests passed; (ii) release notes published; (iii) service desk briefed; (iv) rollback plan tested. An evidence pack contains: a regression test report showing 212 of 212 tests passed; a link to published release notes; an email confirming the rollback plan was written and peer-reviewed. Which criteria are NOT yet evidenced?

- A) (i) and (ii)
- B) (iii) only
- C) (iv) only
- D) (iii) and (iv)

**Correct answer: D**

**Explanation:** (i) and (ii) are evidenced directly. Nothing evidences (iii). The rollback email is the trap: peer-reviewed is not tested, so (iv) remains unevidenced too. This tests matching evidence to the exact wording of a criterion, not something nearby that sounds similar — "close enough" evidence is a common gap in acceptance work.

**Question 8 (moderate) — Sequence deduction in a release plan**

A release runbook has these rules: (i) the database backup must finish before the code deployment starts; (ii) the code deployment must finish before smoke testing starts; (iii) the service desk notification must be sent before the code deployment starts; (iv) the acceptance sign-off happens last. If the database backup finishes at 19:30, the code deployment takes 60 minutes, and smoke testing takes 30 minutes, what is the earliest time acceptance sign-off can begin, assuming the service desk notification was sent in the afternoon?

- A) 20:30
- B) 21:00
- C) 21:30
- D) 19:30

**Correct answer: B**

**Explanation:** Deployment starts 19:30, ends 20:30; smoke testing starts 20:30, ends 21:00; sign-off can begin at 21:00. This tests walking forward through a dependency chain step by step, and a strong candidate's answer writes the timeline down rather than holding it in memory.

**Question 9 (moderate) — Spotting the inconsistency in test evidence**

An evidence pack states: "All 48 test cases were executed on 14 May. 45 passed, 2 failed and were fixed, and the remaining case was descoped with approval. The fixed cases were retested and passed on 13 May." What is wrong with this evidence?

- A) 45 + 2 + 1 does not add up to 48
- B) The retest date (13 May) is before the original test date (14 May), which is impossible as described
- C) Descoping a test case is never allowed
- D) Nothing is wrong

**Correct answer: B**

**Explanation:** The arithmetic reconciles (45+2+1=48), and descoping with approval is a normal practice, so options A and C fail. But the retest date precedes the failure date, an impossible sequence as written. This tests reading evidence across three dimensions — arithmetic, rules, and timeline — since any one can hide the inconsistency.

**Question 10 (hard) — Multi-rule deduction about change categories**

A change procedure defines three categories: Standard (pre-approved, low risk, documented template), Normal (needs Change Advisory Board approval), and Emergency (needs on-call service owner approval, used only when delay would cause harm). Rules: (i) any change touching the payments system is never Standard; (ii) any change during business hours affecting more than 100 users must be Normal or Emergency; (iii) Emergency is only valid if delay would cause harm. A team proposes a lunchtime (business hours) update to the payments system affecting 250 users; delaying it a week would cause no harm. Which category must it be?

- A) Standard
- B) Normal
- C) Emergency
- D) It cannot proceed under any category

**Correct answer: B**

**Explanation:** Rule (i) eliminates Standard. Rule (ii) narrows to Normal or Emergency. Rule (iii) eliminates Emergency, since delay causes no harm. Only Normal survives, and nothing forbids it. This tests the elimination technique — crossing out what the rules forbid and seeing what remains — applied across three interacting rules.

**Question 11 (hard) — Applied problem solving across a service framework**

Repeated incidents occur every Monday morning: users cannot log in to the case management system between 08:00 and 08:20. Facts gathered: (a) a weekly maintenance job runs Sundays at 23:00 and normally finishes by midnight; (b) the maintenance log shows the job has recently been finishing at 08:15 on Mondays; (c) the system rejects logins while the job runs; (d) data volumes have grown 40% in six months. Which explanation best fits all the facts, and what is the most useful next step at this level?

- A) Users are typing their passwords wrong on Mondays; send a password reminder email.
- B) The growing data volume has made the maintenance job overrun into Monday mornings, blocking logins; report this pattern to the team with the evidence so the job can be rescheduled or resized.
- C) The login system is broken; raise an emergency change to replace it.
- D) The 08:00–08:20 window is a coincidence; keep monitoring.

**Correct answer: B**

**Explanation:** Growing data (d) lengthens the job (b), and the job blocks logins while it runs (c), producing exactly the Monday pattern. Options A, C and D each fail to account for at least two of the four facts. This tests fitting an explanation to every available fact, and a strong candidate's answer names the correct next step at this level: investigate, gather evidence, and contribute findings to the team, rather than personally attempting a fix beyond the role's remit.

**Question 12 (hard) — Building a coherent framework from messy inputs**

Three project teams each send a "definition of done" for changes entering an area. Team X requires: tests passed, release notes, service desk briefing. Team Y requires: tests passed, rollback tested, security check. Team Z requires: release notes, rollback tested, tests passed. A single acceptance checklist is needed that (i) includes every item at least one team requires, (ii) lists shared items only once, and (iii) orders items so that anything needed before go-live sign-off (tests, security, rollback) comes before communication items (release notes, briefing). How many items will the checklist contain, and which item comes last under the ordering rule if communication items keep the order "release notes, then briefing"?

- A) 5 items; service desk briefing last
- B) 6 items; release notes last
- C) 5 items; rollback tested last
- D) 9 items; service desk briefing last

**Correct answer: A**

**Explanation:** The distinct items across all three lists are five: tests passed, release notes, service desk briefing, rollback tested, security check. Applying the ordering rule, the communication items come last, ending with the service desk briefing. This tests merging, de-duplicating, and ordering inputs from multiple sources into one coherent framework — a miniature of the service focus skill.

### Administration tips

- **Score for whether a candidate checks a record or pattern element by element** rather than at a glance.
- **Watch for whether a candidate concludes only what a rule's stated conditions guarantee**, resisting the urge to fill a gap with a guess.
- **Note whether a candidate matches evidence to the exact wording of a criterion** rather than accepting "close enough" evidence.
- **Note whether a candidate prioritises by impact and deadline hardness** rather than arrival order or loudness.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that concludes more than the given facts allow.**
- **Missing when a candidate accepts "nearby" evidence** (reviewed, not tested; drafted, not published) as satisfying a criterion.
- **Crediting an answer where one confirmed criterion is allowed to imply the others.**
- **Missing a table or record-reading error** where a candidate answers from the wrong row or field.
- **Accepting a rule-application answer that ignores an explicit precedence or exception clause.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with numbers in job-realistic situations: change success rates, incident volumes, service level agreement (SLA) percentages, test pass rates, and capacity figures. The arithmetic itself is friendly — percentages, ratios, averages, rates of change, and reading tables.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions, each presenting a small table, chart, or short numeric statement. Calculators are usually allowed.

Numeric reasoning matters for this role because evidence work is quietly numerical. "All regression tests passed" is a claim about 212 out of 212. "The change failure rate improved" is a claim about two percentages. The analyst is often the person who checks that the numbers in a pack actually support the sentence written above them.

### How this assessment maps to the role

- **Percentages and pass rates** map to the core duty of validating changes against acceptance criteria.
- **Reading tables** maps to the **Asset and configuration management** skill.
- **Rates and volumes** map to the **Incident management** skill.
- **Averages and trends** map to the **Problem management** skill.
- **Capacity and availability figures** map to the **Availability and capacity management** and **Continuity management** skills.
- **Turning data into decisions** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Test pass percentage**

An evidence pack shows that 190 of 200 regression tests passed. What is the pass rate as a percentage?

- A) 90%
- B) 95%
- C) 98%
- D) 19%

**Correct answer: B**

**Explanation:** 190÷200=95%. This tests basic percentage calculation, and a strong candidate's answer cross-checks with a second route (10 failed of 200 = 5% failed, so 95% passed).

**Question 2 (easy) — Change volumes across a month**

Change requests processed over four weeks: week 1: 12, week 2: 18, week 3: 15, week 4: 15. What was the average (mean) number of changes per week?

- A) 14
- B) 15
- C) 16
- D) 60

**Correct answer: B**

**Explanation:** Total 60÷4=15. Option D is the total, mistaken for the average. This tests distinguishing what a question asks for, and a strong candidate's answer sense-checks that the average sits between the smallest (12) and largest (18) values.

**Question 3 (easy) — Reading an incident queue table**

| Queue | Monday | Tuesday | Wednesday |
|---|---|---|---|
| Applications | 24 | 31 | 27 |
| End User Computing | 18 | 16 | 21 |
| Network | 9 | 12 | 8 |

How many incidents arrived in the Applications queue across the three days?

- A) 72
- B) 82
- C) 55
- D) 27

**Correct answer: B**

**Explanation:** 24+31+27=82. This tests reading a single row accurately under time pressure, rather than misreading an adjacent cell (option A) or stopping early (option C).

**Question 4 (easy) — Percentage of changes needing rework**

Last quarter, 8 of the 64 changes validated needed rework before acceptance. What percentage needed rework?

- A) 8%
- B) 10%
- C) 12.5%
- D) 15%

**Correct answer: C**

**Explanation:** 8÷64=12.5%. This tests part-of-whole calculation, and a strong candidate's answer uses the tidy fraction 1/8=12.5% as a shortcut, since 8×8=64.

**Question 5 (moderate) — SLA percentage from raw counts**

An SLA requires 90% of incidents to be resolved within target time. This week, 234 of 260 incidents were resolved within target. Did the desk meet the SLA, and what was the actual percentage?

- A) Yes — 90%
- B) Yes — 92%
- C) No — 88%
- D) No — 89%

**Correct answer: A**

**Explanation:** 234÷260=90%, meeting a threshold requiring 90%. This tests exact threshold reading — "at least 90%" and "above 90%" are not always interchangeable, and this contract's wording admits an exact match.

**Question 6 (moderate) — Ratio of standard to normal changes**

Last month there were 45 standard changes and 27 normal changes. What is the ratio of standard to normal changes in its simplest form?

- A) 45:27
- B) 9:5
- C) 5:3
- D) 3:5

**Correct answer: C**

**Explanation:** Both divide by 9, giving 5:3. Option D reverses the order the question asked for. This tests simplifying a ratio and matching its order to the question's wording.

**Question 7 (moderate) — Availability percentage**

A service was unavailable for 90 minutes during a 30-day month (43,200 minutes total). Approximately what availability percentage did it achieve?

- A) 99.99%
- B) 99.79%
- C) 99.20%
- D) 97.90%

**Correct answer: B**

**Explanation:** 90÷43,200≈0.208% downtime; availability ≈99.79%. This tests computing the small downtime fraction and subtracting from 100%, and a strong candidate's answer converts the percentage into a felt quantity — roughly an hour and a half of downtime.

**Question 8 (moderate) — Percentage change in incident volume**

Monday-morning login incidents numbered 25 in April and 35 in May. What was the percentage increase from April to May?

- A) 10%
- B) 29%
- C) 40%
- D) 71%

**Correct answer: C**

**Explanation:** (35−25)÷25=40%. Option B divides by the new value instead of the original. This tests always dividing by the starting value for percentage change.

**Question 9 (moderate) — Weighted evidence scoring**

An acceptance scorecard weights evidence areas: testing 50%, documentation 30%, communications 20%. A change scores 90 on testing, 70 on documentation, and 60 on communications. What is its weighted overall score?

- A) 73.3
- B) 78
- C) 80
- D) 84

**Correct answer: B**

**Explanation:** 90×0.5+70×0.3+60×0.2=45+21+12=78. Option A is the unweighted average, ignoring the weights. This tests weighted-average calculation, and a strong candidate's answer sense-checks that the weighted result sits between the scores and, since testing scored best and is weighted heaviest, above the plain average.

**Question 10 (hard) — Capacity headroom projection**

A file store is at 720 GB used out of 1,000 GB capacity, growing by 40 GB per month. A capacity increase must be requested when usage reaches 90% of capacity. In how many months will the store reach the 90% trigger point?

- A) 2.5 months
- B) 4.5 months
- C) 7 months
- D) 9 months

**Correct answer: B**

**Explanation:** Trigger = 900 GB; headroom = 180 GB; 180÷40=4.5 months. Option C computes time to full capacity (100%), not the 90% trigger. This tests the two-step structure of finding the threshold, then dividing the gap by the rate.

**Question 11 (hard) — Reconciling an asset audit**

An asset register lists 480 laptops. A physical audit finds: 462 verified in expected locations, 6 found in unexpected locations, and 3 devices found on site that were not on the register at all. How many registered laptops were not found at all, and what percentage of the register does that represent?

- A) 12 laptops; 2.5%
- B) 15 laptops; 3.125%
- C) 9 laptops; 1.875%
- D) 12 laptops; 2.6%

**Correct answer: A**

**Explanation:** Accounted for = 462+6=468; missing = 480−468=12; 12÷480=2.5%. This tests keeping two populations separate — the unregistered devices belong to a different problem (records to create) than the missing registered ones (assets to trace), and mixing them muddles both investigations.

**Question 12 (hard) — Interpreting a trend table with a target**

| Month | Changes implemented | Failed changes |
|---|---|---|
| March | 40 | 4 |
| April | 50 | 4 |
| May | 60 | 6 |

The target is a change failure rate of no more than 10%. Which statement is accurate?

- A) The failure rate worsened every month and the target was missed in May.
- B) The failure rate improved from March to April, worsened in May, and the target was met in all three months.
- C) The failure rate was constant because failures stayed at 4 in March and April.
- D) The failure rate improved every month.

**Correct answer: B**

**Explanation:** Rates are 10%, 8%, 10% — improved then worsened, all at or below the 10% target. Option C commits the count-versus-rate error (4 failures out of 40 is a different rate from 4 out of 50). This tests computing each month's rate before comparing, since a constant count against growing volume is a falling rate, not a steady one.

**Question 13 (hard) — Combining volumes and SLA maths**

Queue P received 150 incidents and resolved 132 within target. Queue Q received 90 incidents and resolved 84 within target. What was the combined within-target percentage across both queues?

- A) 88%
- B) 90%
- C) 91%
- D) 93%

**Correct answer: B**

**Explanation:** Combined = (132+84)÷(150+90) = 216÷240 = 90%. Averaging the two queue percentages (88% and 93.3%) would give a slightly different, wrong figure. This tests combining raw counts before computing a percentage, essential whenever evidence is aggregated across teams or systems.

### Administration tips

- **Score for whether a candidate correctly identifies the base** before computing a percentage.
- **Watch for whether a candidate combines multi-source figures via raw counts**, not by averaging percentages.
- **Note whether a candidate distinguishes a count from a rate** when volumes differ.
- **Note whether a candidate sense-checks a result against a plausible range.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that averages percentages from different-sized groups.**
- **Crediting a percentage change divided by the wrong base.**
- **Missing when a candidate confuses a count with a rate.**
- **Missing a table-reading error where a candidate answers from the wrong row or column.**
- **Accepting an answer that stops at a total when the question asked for an average, or vice versa.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material: change policies, acceptance criteria, service management framework extracts, incident procedures, emails from project teams, and continuity plans. The most common format presents a short passage and statements to judge as **True**, **False**, or **Cannot say**.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 questions across several passages. The golden rule is to answer from the passage alone.

Verbal precision matters for this role because the work runs on precise reading. "The rollback plan has been tested" means something different from "the rollback plan has been reviewed", and this role is the one that must notice.

### How this assessment maps to the role

- **Precise comprehension** maps to the core duty of managing acceptance criteria.
- **True/False/Cannot say discipline** maps to the **Change management** skill.
- **Inference control** maps to the **Incident management** and **Problem management** skills.
- **Reading process documents** maps to the **Continuity management** and **Availability and capacity management** skills.
- **Clear-writing judgement** maps to the duty of creating materials and the **Community collaboration** skill.
- **Reading user evidence** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 5, the candidate reads this extract from a departmental change policy.

> "All changes to production services must be recorded in the change management system before implementation. Standard changes are pre-approved and may be implemented by any trained team member. Normal changes require approval from the Change Advisory Board (CAB), which meets every Wednesday. Emergency changes may be implemented before approval is recorded, but must be reviewed retrospectively by the CAB at its next meeting. Changes implemented without any record will be treated as unauthorised and investigated. The service transition team is responsible for auditing change records monthly."

**Question 1 (easy) — True, False, or Cannot say**

Statement: "Normal changes require approval from the Change Advisory Board."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Stated directly. This tests basic comprehension, and a strong candidate's answer still checks the wording carefully in case of a single flipped word.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "Standard changes require approval from the CAB before implementation."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Standard changes "are pre-approved" — approval already exists in the template, so no per-change CAB approval is needed. This tests distinguishing "false" (the passage contradicts it) from "cannot say" (the passage is silent).

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "The CAB meets more than once a week when there are many emergency changes to review."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage says the CAB "meets every Wednesday" and reviews emergency changes "at its next meeting" — nothing about extra meetings in busy periods. This tests distinguishing what a document says from what a reader pictures around it.

**Question 4 (moderate) — Inference within limits**

Based on the passage, a change implemented yesterday with no record in the change management system will be:

- A) Approved retrospectively at the next CAB meeting
- B) Treated as unauthorised and investigated
- C) Ignored if it caused no incidents
- D) Recorded by the service transition team during the monthly audit

**Correct answer: B**

**Explanation:** Stated explicitly. Option A confuses this with the emergency route, which still involves a record — only approval is deferred, not recording. This tests precision about what exactly an exception permits.

**Question 5 (moderate) — Best summary**

Which sentence best summarises the passage as a whole?

- A) The CAB approves all changes to production services every Wednesday.
- B) Every change must be recorded, with an approval route that depends on its category, and unrecorded changes are investigated.
- C) Emergency changes are forbidden unless the CAB has met.
- D) The service transition team approves standard changes monthly.

**Correct answer: B**

**Explanation:** B captures the passage's three-part skeleton without contradicting any detail. This tests structural reading before matching against candidate summaries.

For Questions 6 to 9, the candidate reads this email from a project manager.

> "Hi — ahead of Friday's acceptance review for the caseworker portal release, here's where we are. Functional testing finished Monday: 96 of 100 test cases passed. The four failures are all in the reporting module, which — as agreed with the service owner in April — is out of scope for this release and switched off in production. Performance testing is complete and the results are within the agreed thresholds. The support team training session is booked for Thursday. We're still chasing the supplier for the final security certificate, which they've promised by Wednesday. Assuming that lands, we believe everything will be green for Friday."

**Question 6 (easy) — True, False, or Cannot say**

Statement: "Functional testing finished on Monday."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Stated directly. This tests locating the exact supporting sentence rather than answering from a general impression.

**Question 7 (moderate) — True, False, or Cannot say**

Statement: "The four failed test cases will be fixed before the release."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The email states the module is out of scope and switched off, but never says whether the failures will be fixed. This tests resisting a reasonable-sounding inference — "switched off, so won't be fixed" is not what the text asserts.

**Question 8 (moderate) — True, False, or Cannot say**

Statement: "The security certificate has been received."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** "Still chasing" makes the current state definite: not yet received. This tests reading the passage's actual state rather than drifting toward "cannot say" because the certificate might arrive later — the statement is about now, and the passage speaks to it directly.

**Question 9 (hard) — Evaluating the claim against the evidence**

The email concludes: "we believe everything will be green for Friday." Judged strictly against the email's own content, which item most weakens that claim?

- A) The four failed test cases
- B) The performance results
- C) The outstanding security certificate
- D) The Thursday training session

**Correct answer: C**

**Explanation:** The certificate is outstanding, depends on an external supplier, and the email itself flags the uncertainty with "assuming that lands". This tests ranking open items by how much uncertainty they carry and who controls them — external dependencies near a deadline are the weakest link.

For Questions 10 to 12, the candidate reads this extract from a service management framework study guide.

> "Service transition ensures that new, modified or retired services meet the expectations of the business as documented in the service design stage. Within service transition, change management aims to ensure that standardised methods are used for the efficient and prompt handling of all changes, in order to minimise the impact of change-related incidents upon service quality. Service asset and configuration management maintains information about configuration items required to deliver services, including their relationships. Effective service transition reduces unpredicted outcomes, but it cannot eliminate risk entirely."

**Question 10 (moderate) — True, False, or Cannot say**

Statement: "Change management aims to eliminate all change-related incidents."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says "minimise", and separately that service transition "cannot eliminate risk entirely" — the statement contradicts both. This tests the one-word distinction between minimise and eliminate, which matters as much for writing acceptance criteria as for reading them.

**Question 11 (moderate) — Comprehension of relationships**

According to the passage, what does service asset and configuration management maintain?

- A) The service design documentation
- B) Information about configuration items and their relationships
- C) The change management system
- D) The business's expectations of services

**Correct answer: B**

**Explanation:** Stated directly. This tests ownership-mapping — noting which process "owns" which noun as the passage is read.

**Question 12 (hard) — Clear-writing judgement**

Drafting a sentence for an acceptance review summary, which version communicates most clearly to a mixed audience of technical and non-technical stakeholders?

- A) "Utilisation of the rollback capability was validated via execution of the reversion procedure in the pre-production environment."
- B) "We tested the rollback plan by running it in the pre-production environment, and it worked."
- C) "Rollback validation activities have been progressed in line with the agreed assurance approach."
- D) "The reversion mechanism's operability was confirmed subsequent to procedural execution."

**Correct answer: B**

**Explanation:** B states who did what, where, with what result, in plain words. Option C is the most dangerous kind of sentence — it sounds like progress while committing to nothing. This tests choosing the sentence that names an actor, an action, and a result, over formal-sounding alternatives.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate resists a reasonable-sounding inference the text does not actually assert.**
- **Note whether a candidate catches a single flipped word** ("minimise" for "eliminate", "reviewed" for "tested") between a passage and a statement.
- **Note whether a candidate ranks open items by uncertainty and control** when evaluating a claim's weakest support.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate treats False and Cannot Say as interchangeable.**
- **Crediting an answer seduced by a reasonable-sounding inference the passage does not support.**
- **Missing a single substituted word between a passage and a statement.**
- **Rewarding a summary or clear-writing choice that favours formality over plain, actionable clarity.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge possible responses. Formats vary: the most common asks for the most effective response from four options; some also ask for the least effective; others ask for a rating or ranking of every response.

The typical format is an online test of 20 to 30 minutes for 15 to 20 scenarios, usually generously timed, because it measures judgement rather than speed. Scoring compares choices against a key agreed by experienced professionals, aligned to a behaviour framework: user focus, collaboration, ownership, honesty about problems, appropriate escalation, and inclusion.

This role sits at a junction of pressures: project teams want their change accepted on schedule, operations colleagues want stability, users want working services, and a supervisor wants honest, timely information. At this level, the assessment is not looking for heroics — it rewards calm, honest, procedure-aware behaviour, asking for help at the right moments, and keeping users at the centre.

### How this assessment maps to the role

- **Escalation and asking for help** maps to the **Ownership and topic** skill.
- **Integrity under delivery pressure** maps to the central duty of managing acceptance criteria.
- **Teamworking scenarios** map to the **Community collaboration** skill.
- **Incident-handling scenarios** map to the **Incident management** skill.
- **User-centred choices** map to the **User focus** skill.
- **Process-improvement scenarios** map to the **Problem management** and **Service focus** skills.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A missing piece of evidence, a pressing deadline**

A project manager asks for acceptance sign-off today. Checking the pack reveals the service desk briefing — one of the agreed criteria — has not happened. The project manager says: "It's a tiny thing, we'll do it next week, can you just tick it?" What is the most effective response?

- A) Tick it — the briefing genuinely is a small item, and relationships matter.
- B) Refuse and report the project manager to their line manager for applying pressure.
- C) Explain that the criterion cannot be recorded as met until it is, offer to help get the briefing arranged quickly, and let the service transition manager know the pack is one item short of complete.
- D) Say nothing today and quietly leave the pack unsigned until they chase.

**Correct answer: C**

**Explanation:** Option C holds the line on the criterion, actively helps close the gap, and keeps the manager informed. Option A falsifies a record and teaches project teams that criteria are negotiable. Option D is avoidance that damages trust more than a clear "not yet, and here's how". This tests honesty, helpfulness, and appropriate escalation together.

**Question 2 (easy) — An angry caller with a real incident**

A frustrated user calls: her case management screen has been failing all morning, and she has already called once with "nothing happened". She is talking quickly and angrily. What is the most effective first response?

- A) Tell her that anger will not speed things up and ask her to call back when calmer.
- B) Listen, acknowledge the frustration, then calmly gather the required details — including her earlier reference number — so the incident can be found and allocated correctly.
- C) Promise the problem will be fixed within the hour to calm her down.
- D) Transfer her immediately to a team lead.

**Correct answer: B**

**Explanation:** Option B gathers the required information and allocates to the appropriate channel while treating the user with respect. Option C makes an unevidenced promise that breeds a formal complaint if broken. This tests calm ownership and user focus together.

**Question 3 (easy) — A mistake is made**

Reviewing yesterday's own work reveals an incident allocated to the wrong queue, sitting unworked for a day. Nobody else has noticed. What is the most effective response?

- A) Reallocate it quietly — no harm in staying silent since it is fixed.
- B) Reallocate it immediately, add a note explaining the delay, apologise to the affected queue, and mention it to a supervisor so any impact on the user can be checked.
- C) Leave it — reallocating now will draw attention to the mistake.
- D) Reallocate it and blame the ticketing system's confusing interface in the notes.

**Correct answer: B**

**Explanation:** Option B fixes the problem fast, documents honestly, and tells a supervisor so impact can be checked. This tests honest ownership of error — the first instinct on finding a mistake should be user impact, honest record, quick word upward.

**Question 4 (moderate) — Least effective: a colleague's evidence looks wrong**

A friendly senior colleague hands over an evidence pack: "All done, just needs your check." The performance test results turn out to be from the previous release, not this one. Which response is LEAST effective?

- A) Point out the mismatch privately and ask whether the current release's results exist.
- B) Check quietly whether the current results are in the test system before raising it.
- C) Accept the pack — the colleague is senior and presumably knows what they are doing.
- D) Raise it at the acceptance review meeting in front of everyone without warning the colleague first.

**Correct answer: C**

**Explanation:** Deferring to seniority over evidence defeats the entire purpose of the role. This tests recognising that "presumably knows" is not evidence, and that letting potentially wrong evidence through unchallenged is worse than an awkward but honest public correction.

**Question 5 (moderate) — Conflicting instructions**

A service transition manager has asked for today to be spent finishing validation materials for Thursday's review. Mid-morning, a project manager from another team asks for their change paperwork to be tested "urgently" instead, saying "your manager won't mind". What is the most effective response?

- A) Do what the project manager asks — they said it was urgent.
- B) Refuse outright and continue the assigned work without explanation.
- C) Tell the project manager there is a conflicting priority, and quickly check with the service transition manager which task should come first.
- D) Try to do both at once, splitting attention between them all day.

**Correct answer: C**

**Explanation:** Option C is honest with the project manager and lets the person who owns priorities make the call, in minutes. Option A lets an unconfirmed claim ("your manager won't mind") outrank an actual instruction. This tests transparency and appropriate escalation of a genuine priority conflict.

**Question 6 (moderate) — The user evidence contradicts the plan**

Preparing acceptance materials for a portal change reveals survey data showing 60% of users primarily access the service on mobile phones — but the acceptance criteria only cover desktop browser testing. Go-live is in two weeks. What is the most effective response?

- A) Say nothing — the criteria were agreed months ago and reopening them causes delay.
- B) Raise the gap now with the service transition manager, showing the survey data, and suggest the review considers whether mobile testing evidence is needed before go-live.
- C) Personally test the service on a phone this weekend and add the findings to the pack.
- D) Email the project team that go-live must be cancelled.

**Correct answer: B**

**Explanation:** Option B brings evidence, early, to the right person, framed as a question for the review. Option A privileges an agreed plan over the users it exists to serve. Option D overreaches authority entirely. This tests the evidence-early-upward-proportionate shape of good escalation.

**Question 7 (moderate) — A teammate is struggling**

A new teammate has been stuck for two days on their first evidence pack, visibly stressed, and snapped at someone in stand-up this morning. Own workload is full but not critical. What is the most effective response?

- A) Stay out of it — their work is their responsibility.
- B) Report to a manager that the teammate is underperforming.
- C) Offer help directly: ask how it's going, share a checklist and example pack, and suggest raising the workload pressure at stand-up or with the team lead if it continues.
- D) Take the evidence pack off them and do it that evening instead.

**Correct answer: C**

**Explanation:** Option C offers practical help while keeping ownership intact and signposting the proper channel for anything bigger. Option D solves today at the cost of the teammate learning nothing. This tests community collaboration through direct, respectful support.

**Question 8 (moderate) — Least effective: something looks like a security risk**

Validating a change reveals deployment notes containing a shared admin password written in plain text, stored on a drive the whole department can read. Which response is LEAST effective?

- A) Flag it immediately to a service transition manager and the document owner so the password can be changed and the document secured.
- B) Follow the organisation's security incident reporting process, since credentials have potentially been exposed.
- C) Delete the document alone without telling anyone, to remove the exposure quickly.
- D) Note it in validation findings so the acceptance review addresses it.

**Correct answer: C**

**Explanation:** Acting alone and silently destroys the evidence trail, fails to trigger a password change, and leaves nobody aware an exposure occurred. This tests recognising that with security concerns, silence never helps and unilateral cleanup is usually the worst kind of speed.

**Question 9 (hard) — Pressure from above**

A senior manager outside the team says: "The director has promised this change goes live Friday. I hear you're the one holding up the paperwork." In fact, the pack is missing rollback test evidence, flagged to the project team two days ago with no response. What is the most effective response?

- A) Accept the pack — a director's promise outranks a missing document.
- B) Calmly explain the specific gap and its risk, mention it was flagged two days ago, offer to re-check the moment evidence arrives, and immediately brief a service transition manager on the conversation.
- C) Tell the senior manager to talk to the service transition manager, and walk away.
- D) Work late that evening running the rollback test personally so the pack is complete.

**Correct answer: B**

**Explanation:** Option B is calm, specific, fair (naming that the delay sits with the project team without blame), constructive, and safe — the manager hears about senior pressure promptly. Option D blurs validating evidence with manufacturing it, outside the role's competence and authority. This tests composure, specificity, and widening the circle under pressure.

**Question 10 (hard) — A recurring problem nobody owns**

Over a month, the same pattern appears in three separate change validations: each project team was surprised by the service desk briefing criterion and scrambled at the last minute, delaying acceptance each time. Redesigning the process is not this role's job, but the pattern is clearly visible from here. What is the most effective response?

- A) Keep flagging each instance as it happens — the process is not this role's to change.
- B) Write a short note describing the pattern, its cost in delays, and a suggestion (add the briefing criterion to the project kick-off checklist), and share it with a service transition manager for the next process review.
- C) Unilaterally email all project managers announcing a new mandatory kick-off checklist.
- D) Remove the service desk briefing criterion from future packs since teams keep missing it.

**Correct answer: B**

**Explanation:** Option B contributes evidence, a plausible fix, and routes it to the person with authority to act — exactly sized for this level. Option D removes a control because it is inconvenient, transferring risk to the service desk and users. This tests the "see the pattern, evidence it, propose, route it" shape that lets analysts grow into process ownership.

**Question 11 (hard) — Inclusion in the acceptance process**

Organising an acceptance review meeting reveals the service desk representative — whose team the briefing criterion protects — works part-time and cannot attend the usual Friday afternoon slot. A colleague suggests: "Just go ahead without them; they can read the minutes." What is the most effective response?

- A) Go ahead Friday — minutes are a reasonable substitute.
- B) Move the meeting to a time the service desk representative can attend, or if that is impossible, gather their input beforehand and present it at the review with their agreement.
- C) Mark the service desk criterion as met since their representative is unavailable to dispute it.
- D) Postpone the review indefinitely until everyone can attend every time.

**Correct answer: B**

**Explanation:** Option B treats inclusion as a solvable logistics problem — adjust the slot or capture input properly with consent. Option C is startlingly bad: absence is not agreement. This tests adjusting a process that quietly excludes an affected voice, rather than adjusting the person or falsifying the record.

**Question 12 (hard) — Honest reporting when the news is unwelcome**

Validation of a high-profile change finds seven of nine criteria met; the two gaps are real but modest. A service transition manager is on leave today, and the review is this afternoon. The project sponsor phones: "Can you give me a preview? Tell me it's all green." What is the most effective response?

- A) Say "it's all green" — seven of nine is close enough, and the sponsor wants good news.
- B) Refuse to say anything at all until the manager returns.
- C) Give an accurate preview: seven criteria met, two specific gaps with their practical implications, and what would close them — so the sponsor walks into the review informed rather than surprised.
- D) Tell the sponsor the change has failed validation.

**Correct answer: C**

**Explanation:** Option C is honest and constructive at once — no surprises this afternoon, and a clear path to green. Option A is a small lie whose gaps surface at the review anyway, spending the analyst's core professional currency: credibility. This tests reporting the number, the meaning, and the path forward, in that order.

### Administration tips

- **Score for whether a candidate's answer follows the "evidence, early, upward, proportionate" shape** for raising a concern.
- **Watch for whether a candidate holds a line without hostility** — acknowledging pressure, stating the specific gap, offering a path to yes.
- **Note whether a candidate fixes things visibly** rather than through a quiet, undocumented workaround.
- **Note whether a candidate defers to seniority over evidence**, in items designed to test exactly that.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that chooses deference over evidence** because of who said something.
- **Crediting an answer that confuses escalation with weakness**, or over-escalates trivial matters.
- **Missing when a candidate fixes something silently**, destroying the shared record a team depends on.
- **Accepting an answer that punishes a user or colleague for being difficult** rather than solving the actual problem.
- **Missing when a candidate applies a rule with no warmth or judgement**, or the reverse — warmth with no rule.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a service acceptance analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested the checking disciplines at the heart of service acceptance: spotting the record that breaks the pattern, deducing only what a rule guarantees, matching evidence to the exact words of a criterion, and prioritising by impact rather than noise. The numeric section tested the three moves — percentages, comparisons, and averages — that let a candidate verify whether an evidence pack's numbers support its claims. The verbal section tested the discipline of separating what a document says from what a reader assumes around it, and the willingness to answer "cannot say" when the evidence is silent. The situational judgement section tested the professional shape of the role: honest early flags, kind firmness under pressure, asking for help at the right moments, and keeping users and excluded voices in the room.

The thread running through all four sections is careful checking, honest reporting, and knowing when to ask for help — the working habits described in the role summary.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and treat colleagues and users well under pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
