# Operations Analyst - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for operations analyst, within a command and control centre in the UK Government Digital and Data profession. These assessments are job-specific: rather than abstract puzzles, they use the kinds of materials an operations analyst genuinely handles every day — monitoring dashboards, incident tickets, alert queues, asset registers, change request forms, and shift handover notes.

An operations analyst is often the first pair of eyes on a live service. They proactively monitor performance trends to identify potential problems, track, log and correct information to protect assets and components, identify and register incidents with the right information, and alert support staff when something needs attention. They also provide administrative support to their manager, which makes accuracy, tidiness, and reliability count. The four assessment types in this document map directly onto those demands: cognitive questions measure pattern spotting and error checking; numeric questions measure confidence with the percentages, counts, and averages that fill monitoring dashboards; verbal questions measure precise reading of procedures, emails, and handover notes; situational judgement questions measure the everyday decisions of the job, such as when to escalate and when to keep watching.

This document is organised into four assessment sections. Each follows the same pattern: an overview of what the assessment measures and how it usually works, a mapping of the assessment to the specific skills in the role, a set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own. This is an early-career assessment: expect care, attention, honesty, and steady thinking from a candidate, not the judgement of a service owner or head of operations.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract shapes and symbols. Instead of rotating a triangle in the head, a candidate is shown the everyday materials of the job — an alert queue, an asset register extract, a shift rota, a set of incident tickets, or a monitoring dashboard — and asked to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a similar level. Many platforms are adaptive, and employers usually see a breakdown of speed and accuracy. Ungraded practice questions are normally offered first.

Cognitive assessment is used for this role because its core value to the command and control centre is attentive, accurate thinking. Proactive monitoring, asset and configuration correction, and incident registration are all, at heart, cognitive tasks: noticing what has changed, checking what doesn't match, deciding what matters most, and reasoning carefully from the rules given.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the core duty of proactive monitoring and to **Availability and capacity management**: spotting a trend in a dashboard is pattern recognition applied to service components and their KPIs.
- **Error checking** maps to **Asset and configuration management**: comparing records against reality and catching the entry that doesn't fit.
- **Logical deduction** maps to **Change management** and **Continuity management**: following written rules exactly and working out what they mean in a specific case.
- **Prioritisation** maps to **Incident management** and **Ownership and initiative**.
- **Applied problem solving** maps to **Problem management** and **Service focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in an alert queue**

The monitoring tool labels alerts with a severity code and a source system, in the fixed format "SEV<number>-<SYSTEM>", for example "SEV2-PAYMENTS". This morning's queue shows:

1. SEV1-CASEWORK
2. SEV3-PAYMENTS
3. PAYMENTS-SEV2
4. SEV2-IDENTITY

Which entry breaks the labelling pattern?

- A) Entry 1
- B) Entry 2
- C) Entry 3
- D) Entry 4

**Correct answer: C**

**Explanation:** The pattern puts the severity code first, then a hyphen, then the source system. Entries 1, 2 and 4 all follow it; entry 3 reverses the order. This matters in real monitoring work because tools often sort, filter, and route alerts based on the label format, so a reversed label can slip past a filter. This tests scanning each option against the stated rule methodically rather than trusting a first glance — the eye tends to "auto-correct" reversed text.

**Question 2 (easy) — Logical deduction from a procedure**

The incident procedure states: "If an alert affects a citizen-facing service, register an incident immediately. If an alert affects only an internal test system, log it in the daily notes instead." An alert arrives for the system "Benefits Portal", which the service catalogue lists as citizen-facing. What should happen, according to the procedure?

- A) Log the alert in the daily notes.
- B) Register an incident immediately.
- C) Wait to see whether a second alert arrives.
- D) Ask the test team whether the portal is in a test window.

**Correct answer: B**

**Explanation:** The procedure gives two clear rules, and the facts show which applies: the Benefits Portal is citizen-facing, so an incident must be registered immediately. Options C and D add extra steps the procedure does not require, and option A applies the wrong rule. This tests doing exactly what a written rule says for the case at hand, without importing outside knowledge or inventing caveats — the discipline behind applying change control procedures under supervision and registering incidents correctly.

**Question 3 (easy) — Error checking an asset register**

Checking a printout of the asset register against the four monitors physically present in the control room. The register lists:

| Asset tag | Item | Location |
|---|---|---|
| MON-101 | 27-inch monitor | Control room desk 1 |
| MON-102 | 27-inch monitor | Control room desk 2 |
| MON-103 | 27-inch monitor | Storage cupboard B |
| MON-104 | 27-inch monitor | Control room desk 4 |

In the room, monitors tagged MON-101, MON-102, MON-103 and MON-104 are found, one on each desk. How many register rows need correcting?

- A) 0
- B) 1
- C) 2
- D) 4

**Correct answer: B**

**Explanation:** Comparing each row with reality: MON-101, MON-102 and MON-104 match. MON-103 is recorded in "Storage cupboard B" but is actually on a desk in the control room, so that row needs correcting. This tests a row-by-row, one-fact-at-a-time comparison rather than trying to hold the whole table in mind — a wrong location seems harmless until someone needs that asset urgently during an incident and looks in the wrong place.

**Question 4 (easy) — Prioritisation of incoming alerts**

Three items arrive within the same minute. The team's rule is: severity first, then citizen impact, then age. Which is dealt with first?

1. A SEV3 alert on an internal reporting tool, arrived 10 minutes ago.
2. A SEV1 alert on the citizen-facing appointments service, arrived just now.
3. A SEV2 alert on an internal staff directory, arrived 5 minutes ago.

- A) Item 1, because it has waited longest
- B) Item 2, because it has the highest severity
- C) Item 3, because it is mid-severity and mid-age
- D) Whichever is quickest to close

**Correct answer: B**

**Explanation:** The rule compares severity first, and item 2 is SEV1, the highest severity present, so it comes first — the tie-breakers are not even needed. Option A confuses "oldest" with "most important". Option D ignores the rule entirely; closing easy items first can leave a serious incident unattended. This tests applying a stated priority rule in its given order, mirroring the duty to allocate each incident to the appropriate channel promptly.

**Question 5 (moderate) — Pattern recognition in a performance trend**

The average response time of a service, measured at the same hour each day, has been: Monday 210 ms, Tuesday 215 ms, Wednesday 224 ms, Thursday 238 ms, Friday 257 ms. The alert threshold is 300 ms. What is the most accurate description of this trend?

- A) The service is fine because it has never breached the threshold.
- B) Response time is rising, and the daily increase is itself getting bigger, so it is worth flagging before the threshold is breached.
- C) Response time is rising at a steady rate of 5 ms per day.
- D) The figures are random noise and no action is needed.

**Correct answer: B**

**Explanation:** The day-to-day increases are +5, +9, +14, +19 — accelerating, not steady. That pattern suggests something building up, and if it continues, the service could pass 300 ms early the following week. Option A is technically true today but misses the point of proactive monitoring: identifying potential problems before they become incidents. Option C describes a steady rise the numbers contradict. This tests recognising acceleration in a trend and connecting it to availability and capacity management — acting on the trend, not just the current value.

**Question 6 (moderate) — Logical deduction about change windows**

The change control procedure states: (i) standard changes may be implemented on any weekday outside business hours; (ii) business hours are 08:00 to 18:00; (iii) any change to the payments system, of any type, additionally requires written approval from the payments service manager before implementation. A standard change request exists for the payments system, and it is currently 19:30 on a Tuesday. Which statement must be true?

- A) The change may be implemented now.
- B) The change may be implemented now only if the payments service manager's written approval has been given.
- C) The change must wait until the weekend.
- D) The change is forbidden because payments changes cannot be standard changes.

**Correct answer: B**

**Explanation:** Rules (i) and (ii) are satisfied — it is a weekday, and 19:30 is outside business hours. Rule (iii) additionally requires the service manager's approval because the change touches payments. Option A ignores rule (iii). Options C and D invent requirements the rules do not contain. This tests reading "additionally" correctly — one rule being satisfied does not switch off the others — and applying every applicable condition rather than stopping at the first one found.

**Question 7 (moderate) — Error checking a shift handover note**

A handover note from the night shift reads: "Three incidents open at handover: INC-4411 (network, SEV2, opened 02:10), INC-4412 (email, SEV3, opened 03:40), INC-4413 (portal, SEV2, opened 05:55). Total open incidents: 3. Oldest open incident: INC-4412." Which single statement in the note is wrong?

- A) The total count of open incidents
- B) The identity of the oldest open incident
- C) The severity of INC-4411
- D) Nothing is wrong

**Correct answer: B**

**Explanation:** Three incidents are listed and the total states 3, so the count is right, and the severities are simply restated. The "oldest" claim is checkable: INC-4411 opened at 02:10, earlier than INC-4412's 03:40, so INC-4411 is actually the oldest — the note's claim is wrong. This tests an internal-consistency check against the note's own listed facts. In this role, an inaccurate handover claim like this sends the day shift's attention to the wrong incident first — exactly what accurate handover exists to prevent.

**Question 8 (moderate) — Applied problem solving with a runbook**

A morning check shows the report-generation service failed overnight. The continuity runbook gives this recovery order: (1) confirm the database service is running; (2) restart the report service; (3) re-run the failed report job; (4) confirm output appears in the shared folder. The database is confirmed running, the report service restarts cleanly, and the failed job is re-run, but no output appears in the shared folder. What is the most sensible next step?

- A) Restart the database, because it must be the real cause.
- B) Mark the check complete, because three of the four steps worked.
- C) Check whether the job actually ran successfully and whether the shared folder path is correct, then escalate with what is found.
- D) Delete the failed job and wait for tomorrow's scheduled run.

**Correct answer: C**

**Explanation:** Steps 1 to 3 succeeded, and the failure is now specifically at step 4. The disciplined move is to gather information at the point of failure before escalating — did the job report success, is the folder path correct, has permission changed — giving support staff something concrete to work with. Option A jumps to a cause the evidence doesn't support, since the database was confirmed running. Option B is the most dangerous option: a check is complete when the outcome is achieved, not when most steps ran. Option D hides the problem for a day. This tests capturing facts at the point of failure and passing the issue to the right channel while retaining ownership until it is resolved.

**Question 9 (moderate) — Prioritisation with a manager's request**

At 09:00 a manager asks for the weekly performance summary to be prepared for a 14:00 meeting; it usually takes about an hour. At 09:05 a SEV2 alert appears on the citizen-facing licensing service. At 09:06 a colleague asks for help finding a missing keyboard listed in the asset register. What order should these be handled in?

- A) Summary, alert, keyboard — the manager asked first.
- B) Alert first (register and escalate it), then the summary, then the keyboard.
- C) Keyboard first because it is quickest, then the alert, then the summary.
- D) Summary and keyboard first, leaving the alert for the afternoon.

**Correct answer: B**

**Explanation:** A SEV2 alert on a citizen-facing service is the most time-critical duty in this list, and registering and escalating it may take only minutes before support staff take over. The summary has a real deadline, 14:00, with ample time remaining after the alert is handled. The keyboard is not urgent. Option A confuses "asked first" with "most important". Option C falls for the quick-win trap. Option D fails the basic test of the role: live services come first. This tests recognising that the best answer is to do one's own part (register, gather information, escalate) quickly and correctly, not to solve the alert alone.

**Question 10 (challenging) — Deduction across two records**

The change log says: "Change CH-208 (update firewall rule) was implemented Tuesday at 21:00." The incident log says: "INC-4460 opened Wednesday 08:15: staff in Office A cannot reach the case system. Resolved Wednesday 10:05 after the Tuesday firewall change was rolled back." Does this prove the firewall change caused the incident?

- A) Yes — the rollback fixed it, so the change was definitely the cause.
- B) No — the timing is a coincidence and the change should be re-applied at once.
- C) The evidence strongly suggests the change was involved, but it is not absolute proof; the investigation should confirm the mechanism before final conclusions.
- D) It is impossible to say anything at all from these records.

**Correct answer: C**

**Explanation:** The change preceded the incident, and the incident resolved when the change was rolled back — strong circumstantial evidence, and the leading hypothesis in problem management terms. But "resolved after rollback" is not quite "resolved because of rollback": something else could have changed at the same time, or the rollback could have restarted a component failing for a different reason. Option A overstates the certainty; option B ignores the evidence; option D understates it. This tests keeping a strong hypothesis while asking the investigation to confirm the mechanism — evidence-ranked reasoning that does not leap past what is established.

**Question 11 (challenging) — Multi-condition scheduling**

Three routine tasks are due today: a configuration audit (2 hours, must finish before the 15:00 change freeze), the daily monitoring check (30 minutes, must be done between 09:00 and 10:00), and a records tidy-up (1 hour, can be done any time). The day starts at 09:00 with lunch 12:30–13:00. Assuming tasks cannot overlap, which schedule works?

- A) 09:00 check; 09:30 audit until 11:30; 11:30 tidy-up until 12:30; lunch; free afternoon.
- B) 09:00 audit until 11:00; 11:00 check; 11:30 tidy-up until 12:30; lunch.
- C) 09:00 tidy-up until 10:00; 10:00 check; 10:30 audit until 12:30; lunch.
- D) 09:00 check; 09:30 tidy-up until 10:30; 10:30 audit until 12:30, finishing after the freeze.

**Correct answer: A**

**Explanation:** Testing each option against the three constraints (check within 09:00–10:00, audit finished by 15:00, no overlap with lunch): option A places the check at 09:00–09:30, the audit at 09:30–11:30, and the tidy-up before lunch — everything fits. Option B does the check at 11:00, outside its window. Option C's check starts at 10:00, just as the window closes. Option D's own description misstates its schedule as finishing after the freeze. This tests methodical elimination of options against constraints, and reading every word of an option's stated schedule carefully rather than accepting a claim at face value.

**Question 12 (challenging) — Identifying the level of a problem**

Over the last month: (a) the same disk-space alert fires on the reporting server every Friday evening; (b) each time, the on-call engineer clears temporary files and the alert stops; (c) no one has investigated why the files build up. How would the situation and the right level of contribution at this level best be described?

- A) Operational only — the weekly fix works, so nothing more is needed.
- B) A recurring operational symptom pointing to an unaddressed underlying problem; register it as a problem record and contribute the pattern evidence gathered.
- C) Strategic — it requires a change to the organisation's five-year IT strategy.
- D) Tactical — the reporting server's storage should be personally redesigned.

**Correct answer: B**

**Explanation:** The Friday alert and file clearance are operational events keeping the service running today, but a symptom recurring weekly with a workaround and no root-cause investigation is the textbook trigger for problem management. It is not strategic, and redesigning the server is beyond an analyst's remit and skips the investigation step. This tests recognising that the right contribution at this level is registering the problem and attaching the pattern evidence gathered — proactive monitoring in action, since workarounds hide problems and patterns reveal them.

### Administration tips

- **Watch for whether a candidate reads rules like a checklist**, numbering conditions and testing each against the scenario.
- **Score for answering from the page, not from outside knowledge.**
- **Note whether a candidate checks the easy things** — counts, dates, and labels — where errors most often hide.
- **Keep timing consistent** across candidates for this level.
- **Use the scheduling item (Question 11) to observe whether a candidate verifies a claimed schedule** rather than accepting it at face value.

### Common pitfalls to watch for when scoring

- **Rewarding the "hero" answer** that has a candidate fixing everything alone, when the strong answer at this level usually involves gathering information, registering, and escalating well.
- **Accepting the first plausible option** without checking all four.
- **Rewarding an answer that ignores a stated rule in favour of common sense.**
- **Missing when a candidate confuses "oldest" with "most important"** in prioritisation items.
- **Crediting an answer that stops at a partial match** rather than checking every condition in a rule.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how well a candidate works with numbers in the situations this job actually presents. It is not a maths exam — nothing beyond percentages, averages, ratios, rates, and careful table reading is required. The typical format is an online, timed test lasting 20 to 30 minutes, with roughly 15 to 20 questions, each showing a small data set and asking a focused question about it. Calculators are normally allowed. Scoring compares accuracy and speed against a norm group at this level.

Numeric reasoning matters for this role because the command and control centre runs on numbers. Availability is a percentage. Capacity is a ratio of used to total. Incident workload is a count with a trend. KPIs are all numeric. When an administrative summary is prepared for a manager, it is often exactly these figures being summarised, and a small numeric slip can send a wrong signal up the chain.

### How this assessment maps to the role

- **Percentages and uptime** map to **Availability and capacity management**.
- **Counts, averages and trends** map to the core duty of proactive monitoring of live services and performance trends.
- **Table reading and cross-checking** map to **Asset and configuration management**.
- **Rates and workload figures** map to **Incident management** and **Problem management**.
- **Simple resource arithmetic** maps to administrative support duties and **Service focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Reading a ticket volume table**

The incident counts for last week were:

| Day | Incidents |
|---|---|
| Monday | 12 |
| Tuesday | 9 |
| Wednesday | 15 |
| Thursday | 10 |
| Friday | 14 |

How many incidents were registered in total last week?

- A) 58
- B) 60
- C) 62
- D) 55

**Correct answer: B**

**Explanation:** Adding the daily counts in order: 12 + 9 + 15 + 10 + 14 = 60. This tests running totals rather than jumping around the table, which invites double-counting or missing a row — the baseline every subsequent percentage in a weekly summary depends on.

**Question 2 (easy) — A simple average**

Using the same table (12, 9, 15, 10, 14), what was the average (mean) number of incidents per day?

- A) 11
- B) 12
- C) 13
- D) 15

**Correct answer: B**

**Explanation:** Mean = 60 ÷ 5 = 12. A strong candidate's answer may note that the average is a summary, not a fact about any single day, and that pairing it with the highest day (Wednesday's 15) keeps a summary from hiding the peak — a habit that makes a monitoring summary useful for spotting capacity pressure.

**Question 3 (easy) — Percentage of alerts escalated**

Yesterday the control centre received 40 alerts. 8 of them were registered as incidents and escalated to support staff. What percentage of alerts were escalated?

- A) 8%
- B) 15%
- C) 20%
- D) 25%

**Correct answer: C**

**Explanation:** 8 ÷ 40 = 20%. A sense-check confirms it: 10% of 40 is 4, so 8 is 20%. This tests basic percentage calculation, and a strong candidate's answer may note that escalation rate is a figure managers genuinely watch, since a rising rate can signal declining stability and a falling rate can signal loosely set thresholds.

**Question 4 (easy) — Uptime percentage**

A service was unavailable for a total of 90 minutes during a 30-day month (43,200 minutes). What was the service's availability percentage, to two decimal places?

- A) 99.79%
- B) 99.90%
- C) 98.75%
- D) 99.98%

**Correct answer: A**

**Explanation:** Available minutes = 43,200 − 90 = 43,110; availability = 43,110 ÷ 43,200 ≈ 99.79%. A common error is dividing the downtime instead (90 ÷ 43,200 ≈ 0.21%, which subtracted from 100% gives the same answer — a built-in cross-check). This tests the basic availability calculation at the centre of the availability and capacity management skill.

**Question 5 (moderate) — Comparing against an SLA target**

The service level agreement requires 99.5% availability per month. In a 30-day month (43,200 minutes), what is the maximum downtime, in minutes, that still meets the SLA?

- A) 43.2 minutes
- B) 216 minutes
- C) 100 minutes
- D) 129.6 minutes

**Correct answer: B**

**Explanation:** Permitted downtime = 0.5% of 43,200 = 216 minutes. Option A is 0.1% (a much stricter target); option D is 0.3%. This "downtime budget" way of thinking is how control centres genuinely track SLA risk mid-month, and a strong candidate's answer may note that if most of the budget is spent early in the month, that is an early warning proactive monitoring should raise before the KPI is breached.

**Question 6 (moderate) — Percentage change in incident volume**

The control centre registered 250 incidents in June and 290 incidents in July. What was the percentage increase from June to July, to the nearest whole percent?

- A) 14%
- B) 16%
- C) 40%
- D) 86%

**Correct answer: B**

**Explanation:** (290 − 250) ÷ 250 = 16%. Option A divides by the new value instead of the original — always divide by the earlier figure. Option C mistakes the raw change for a percentage. This tests correct base selection, and a strong candidate's answer may pair the number with a possible cause, turning a statistic into monitoring insight.

**Question 7 (moderate) — Ratio of alerts to incidents**

Over a week, the monitoring system produced 360 alerts, of which 45 were registered as incidents. What is the ratio of alerts to incidents, in simplest form?

- A) 9:1
- B) 8:1
- C) 45:360
- D) 7:1

**Correct answer: B**

**Explanation:** 360:45 simplifies (dividing both by 45) to 8:1. Option C is unsimplified and backwards; option A comes from a wrong division. This tests ratio simplification, and a strong candidate's answer may note that an 8:1 ratio tells a story about signal and noise — a shift toward 20:1 might mean thresholds are too sensitive, and a shift toward 2:1 might mean they are too loose.

**Question 8 (moderate) — Average resolution time with a twist**

Four incidents were resolved today with resolution times of 30 minutes, 45 minutes, 25 minutes, and 4 hours. What was the mean resolution time?

- A) 60 minutes
- B) 85 minutes
- C) 100 minutes
- D) 76 minutes

**Correct answer: B**

**Explanation:** Converting 4 hours to 240 minutes first: total = 30 + 45 + 25 + 240 = 340; mean = 340 ÷ 4 = 85 minutes. Option A averages only the three short times, forgetting to convert. This tests unit conversion before calculation, and a strong candidate's answer may note that reporting both the mean and the outlier ("one long-running network incident skewed the average") gives the honest picture.

**Question 9 (moderate) — Reading a two-way table**

Incidents by service and severity for last month:

| Service | SEV1 | SEV2 | SEV3 | Total |
|---|---|---|---|---|
| Portal | 2 | 8 | 30 | 40 |
| Payments | 1 | 6 | 13 | 20 |
| Reporting | 0 | 4 | 36 | 40 |
| Total | 3 | 18 | 79 | 100 |

What percentage of the Payments service's incidents were SEV2?

- A) 6%
- B) 20%
- C) 30%
- D) 33%

**Correct answer: C**

**Explanation:** 6 SEV2 incidents out of 20 Payments incidents = 30%. Option D wrongly uses the SEV2 column total (18) as the denominator, answering a different question. This tests choosing the correct denominator in a two-way table — care that keeps weekly summary statistics accurate and defensible.

**Question 10 (challenging) — Capacity headroom projection**

A file store currently holds 720 GB of data on a 1,000 GB volume. Usage has grown by 20 GB in each of the last four weeks. A capacity warning is raised when usage is projected to exceed 90% within four weeks. Should the warning be raised, and why?

- A) No — usage is only 72% now, well below 90%.
- B) Yes — in four weeks usage is projected at 800 GB, which is 80%, and that breaches the rule.
- C) Yes — in four weeks usage is projected at 800 GB, which is 80%; but 90% of 1,000 GB is 900 GB, so no breach is projected — this option contradicts itself.
- D) No — projected usage in four weeks is 720 + (4 × 20) = 800 GB, which is 80% of the volume, below the 90% trigger, so the rule does not require a warning yet.

**Correct answer: D**

**Explanation:** Projected usage = 720 + 80 = 800 GB, against a 900 GB trigger — no breach yet. Option A reaches the right action for the wrong reason, since the rule is about the projection, not today's figure. Option B correctly projects but misreads 80% as breaching 90%. Option C is self-contradictory. This tests correctly projecting a trend against a stated trigger, and a strong candidate's answer may add that at this rate the trigger arrives in 9 weeks — worth a note, since proactive monitoring means knowing when a warning will come due, not just whether it is due today.

**Question 11 (challenging) — Weighted availability across services**

An overall availability figure across two services, weighted by usage, is requested. Service A had 99.0% availability and handled 3 million requests. Service B had 99.8% availability and handled 1 million requests. What is the usage-weighted average availability?

- A) 99.40%
- B) 99.20%
- C) 99.60%
- D) 99.80%

**Correct answer: B**

**Explanation:** (99.0 × 3 + 99.8 × 1) ÷ 4 = 396.8 ÷ 4 = 99.20%. The unweighted average, 99.4%, is option A — the classic trap. This tests weighting by traffic volume rather than simple averaging, and a strong candidate's answer may note that the weighted figure is lower because the less reliable service carries three times the traffic, so it is the KPI that reflects what users actually experienced.

**Question 12 (challenging) — Trend, rate, and a deadline**

At 09:00 a message queue contains 6,000 items. Messages arrive at 900 per hour and are processed at 600 per hour. The alert threshold is 9,000 items, and the daily change freeze starts at 17:00, after which no fix can be applied until tomorrow. Will the queue breach the threshold before the freeze, and roughly when?

- A) No — the queue is shrinking because processing is continuous.
- B) Yes — the queue grows by 300 items per hour and reaches 9,000 at 19:00, which is after the freeze, so a fix must be arranged before 17:00 anyway.
- C) Yes — the queue reaches 9,000 at 14:00, well before the freeze.
- D) No — the queue reaches only 8,400 by 17:00 and the threshold is never relevant.

**Correct answer: B**

**Explanation:** Net growth = 900 − 600 = 300/hour; gap to threshold = 3,000; time to breach = 10 hours, i.e. 19:00 — after the 17:00 freeze, which is exactly why the situation is urgent: unaddressed before 17:00, the breach at 19:00 becomes unavoidable until the next day. Option D's arithmetic for 17:00 (8,400) is correct but its conclusion ignores what happens at 19:00. This tests combining a net rate, a threshold, and an operational calendar before deciding whether "later today" means someone else's problem or an urgent flag now.

### Administration tips

- **Score for whether a candidate names the denominator before dividing.**
- **Watch for unit conversion errors** — minutes and hours, or GB and TB, mixed within one question.
- **Note whether a candidate estimates before calculating**, catching gross errors quickly.
- **Keep timing consistent** across candidates for this level.
- **Use the capacity and trend items (Questions 10 and 12) to observe whether a candidate compares a projection against a threshold explicitly**, not just computes the projection.

### Common pitfalls to watch for when scoring

- **Accepting a percentage change divided by the wrong (later) figure.**
- **Rewarding an unweighted average of percentages** where the underlying groups differ in size or traffic.
- **Missing when a candidate reads the wrong row or column** in a two-way table.
- **Accepting an answer that omits a required unit conversion.**
- **Crediting an answer that stops at a calculation without completing the comparison** the question asks for.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and reasons from written material of the kind this job really involves: procedure extracts, incident notifications, handover notes, service bulletins, emails from support teams, and short policy passages about change control and continuity.

The typical format is an online, timed test of 15 to 25 minutes, showing a short passage and asking questions about it. The most common style is True / False / Cannot say. Other styles include choosing the best summary, identifying what a passage implies, and judging which of several sentences communicates a point most clearly.

Verbal reasoning matters for this role because so much of the work arrives as text and leaves as text. Procedures must be applied exactly; alerts and notifications must yield the facts that matter; incident records must capture required information precisely. Misreading a single word — "may" instead of "must", "all" instead of "some" — can turn a correct action into a wrong one.

### How this assessment maps to the role

- **Comprehension of procedures** maps to **Change management** and **Continuity management**.
- **Extracting facts from notifications** maps to **Incident management**.
- **True/false/cannot-say discipline** maps to **Asset and configuration management** and record keeping.
- **Inference and tone** map to **Community collaboration** and **User focus**.
- **Clear-writing judgement** maps to administrative support duties and **Service focus**.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — Basic comprehension of a bulletin**

Passage: "The service desk will move to the new ticketing system on Monday 3 June. From that date, all new incidents must be registered in the new system. Incidents already open in the old system will continue to be worked there until they are closed. The old system becomes read-only on 1 July."

Statement: "After 3 June, a brand-new incident may be registered in the old system."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says that from 3 June "all new incidents must be registered in the new system" — "all" leaves no exceptions, so the statement is contradicted. This tests reading for the categories a passage sets up — new versus existing incidents — and applying the right rule to the right category, rather than skim-reading into a record-keeping error.

**Question 2 (easy) — True/false/cannot say on a status update**

Passage: "At 10:20 the payments service began returning errors for approximately 15% of transactions. The support team identified a failed component at 10:45 and restarted it. Error rates returned to normal levels by 11:05. The root cause is under investigation."

Statement: "The failed component caused the transaction errors."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** A component failed, was restarted, and errors then stopped — but the passage explicitly says the root cause is under investigation. The sequence suggests causation but does not state it. This tests keeping facts and conclusions separate — "errors ceased after the restart" is a fact; "the component caused the errors" is a conclusion still under investigation.

**Question 3 (easy) — Extracting required information**

Passage (email from a user): "Hi team — since about half past nine this morning, nobody in our Leeds office has been able to open the case tracking system. We just get a spinning wheel. The Manchester office says theirs is fine. We have a tribunal deadline today so this is quite urgent. Thanks, Priya."

Which set of facts should go into the incident record?

- A) System affected: case tracking. Impact: all users nationally. Start: 09:30 approx. Urgency: high.
- B) System affected: case tracking. Impact: Leeds office users; Manchester unaffected. Start: 09:30 approx. Urgency: high (tribunal deadline today).
- C) System affected: email. Impact: Leeds office. Start: this morning. Urgency: normal.
- D) System affected: case tracking. Impact: Leeds office. Start: 09:30 approx. Urgency: low, since Manchester is working.

**Correct answer: B**

**Explanation:** The system is case tracking, not email. The impact is the Leeds office, with the Manchester detail worth recording as diagnostic evidence pointing toward a local rather than full outage. The start time is approximately 09:30, and urgency is high because of a same-day deadline. Option A inflates the impact; option D wrongly deflates urgency. This tests extracting exactly the required information — system, impact, start time, urgency — without adding or losing anything.

**Question 4 (easy) — Following written instructions exactly**

Passage (from the monitoring procedure): "Perform the morning checks between 08:30 and 09:30. Record each check result as PASS or FAIL in the checks log. If any check FAILS, register an incident and note the incident number next to the FAIL entry. Do not mark the morning checks complete until every line has either a PASS or a FAIL with an incident number."

Nine checks have been completed: eight PASS, one FAIL. An incident, INC-5120, has been registered for the failure. What remains before the checks may be marked complete?

- A) Nothing — all checks have results and the incident exists.
- B) Confirm the incident number INC-5120 is written next to the FAIL entry in the log.
- C) Re-run the failed check until it passes.
- D) Wait until 09:30, since checks cannot be completed early.

**Correct answer: B**

**Explanation:** The completion condition requires every line to show either PASS, or FAIL with an incident number noted beside it — a step still outstanding. Option A skips that final recording step. Option C invents a requirement the procedure never states. Option D misreads 08:30–09:30 as a bar on finishing early, when it is only the window checks must be performed within. This tests reading a procedure's precise completion condition rather than assuming completion once the substantive work is done.

**Question 5 (moderate) — Inference from a continuity policy extract**

Passage: "Each critical service must have a documented continuity procedure. Continuity procedures must be reviewed at least annually. The case tracking system's continuity procedure was last reviewed fourteen months ago. The case tracking system is classified as a critical service."

Statement: "The case tracking system's continuity procedure is currently out of compliance with the review requirement."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Critical services need reviews at least annually (within twelve months); case tracking is critical; its procedure was reviewed fourteen months ago, exceeding twelve — so the requirement is currently unmet. Every link in this chain comes directly from the passage, making it a valid deduction rather than an assumption. This tests distinguishing "the passage guarantees this" from "the passage merely hints at this".

**Question 6 (moderate) — Identifying the main point**

Passage: "Monitoring thresholds exist to draw attention to abnormal conditions. If thresholds are set too tightly, analysts receive frequent alerts for conditions that resolve themselves, and genuine problems risk being lost in the noise. If thresholds are set too loosely, genuine problems may not generate alerts until users are already affected. Threshold reviews should therefore use recent operational data to balance sensitivity against noise."

Which option best states the main point?

- A) Monitoring thresholds should be as sensitive as possible so nothing is missed.
- B) Analysts receive too many alerts.
- C) Threshold settings involve a trade-off, and reviews should use real data to balance it.
- D) Users are usually affected before alerts fire.

**Correct answer: C**

**Explanation:** The passage's shape — a purpose, two opposite failure modes, and a recommendation — is captured whole by option C. Option A contradicts the passage's explicit warning against over-tight thresholds. Options B and D each take one half of one failure mode and present it as the whole message. This tests summarising a balanced passage faithfully, which matters because a manager who reads only a summary line may act on a one-sided version of a balanced bulletin.

**Question 7 (moderate) — True/false/cannot say with tempting outside knowledge**

Passage: "The department's change calendar shows a firewall update scheduled for Thursday evening. The change record states that no user-facing services will be affected. The control centre has been asked to monitor the appointments service closely on Thursday evening as a precaution."

Statement: "The firewall update will affect the appointments service."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The change record states no impact is expected, but that is a prediction, not a confirmed outcome; the request to monitor "as a precaution" is prudent action, not evidence of expected failure. Neither guarantees the statement true nor false. This tests keeping a stated claim, a precautionary action, and an actual outcome in three separate boxes — everyday discipline in a control centre, where records say one thing and precautions hint at another.

**Question 8 (moderate) — Choosing the clearest rewrite**

A draft handover line reads: "The thing with the reports that was happening before is still sort of going on, though it's better than it was, but keep an eye on it." Which rewrite is clearest and most useful for the next shift?

- A) "Reports issue ongoing. Monitor."
- B) "INC-5133 (report generation delays) remains open. Delays have reduced from 40 minutes to 10 minutes since 14:00. Continue monitoring; escalate to the data team if delays exceed 20 minutes."
- C) "The report generation situation has substantially ameliorated relative to its antecedent state, notwithstanding residual latency."
- D) "Reports were broken earlier. Someone should probably check them at some point."

**Correct answer: B**

**Explanation:** Good operational writing answers three questions for the next reader: what exactly is the situation, what has changed, and what should happen next. Option B answers all three with a reference, concrete numbers, a timestamp, and an action with a trigger. Option A is short but strips out the reference, trend, and escalation trigger. Option C uses long words to say almost nothing; option D is vague about both state and action. This tests recognising that clarity is not the same as brevity — the clearest option is the longest here because the content earns its space.

**Question 9 (moderate) — Inference about process, not content**

Passage: "All change requests must be submitted using form CR-1. Requests submitted by email will be returned to the sender with a link to the form. On Tuesday, Sam emailed a change request to the change team."

Statement: "Sam's request will be processed after the change team transfers it into form CR-1."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states that emailed requests are "returned to the sender with a link to the form" — the sender must resubmit, and nothing says the team transfers the request itself. Since the statement describes a different process from the one the passage defines, it is False, not merely unsupported. This tests distinguishing False (actively contradicted) from Cannot say (the passage is silent) — reading a procedure precisely enough to know not just what must happen, but who must do it.

**Question 10 (challenging) — Reconciling two passages**

Passage 1 (service bulletin, Monday): "Planned maintenance will take the document store offline on Saturday from 06:00 to 12:00. Users should save local copies of any documents they need during this window."

Passage 2 (email, Thursday): "Following stakeholder feedback, the document store maintenance has been shortened. The store will now be offline on Saturday from 06:00 to 09:00 only. All other details in Monday's bulletin still apply."

Statement: "According to the latest information, a user who needs a document at 10:00 on Saturday will need a local copy."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Passage 2 updates the offline window to 06:00–09:00, so at 10:00 the store is back online — the statement is false. This tests recognising that a later document supersedes an earlier one on the point it changes, and applying the new window rather than anchoring on the first passage's 12:00 end time — everyday work when notices are revised and change windows move.

**Question 11 (challenging) — Evaluating an argument's logic**

Passage: "Last month we introduced daily configuration audits. This month, configuration errors found in live services fell by 60%. Therefore the daily audits caused the reduction in errors, and every team should adopt daily audits immediately."

Which is the strongest criticism of this argument?

- A) The percentage is suspicious because 60 is a round number.
- B) The argument moves from a sequence in time to a claim of cause, without ruling out other explanations, and generalises from one team's month to all teams.
- C) Configuration audits are a waste of time.
- D) The argument should have used weekly audits as the comparison.

**Correct answer: B**

**Explanation:** Two logical leaps occur: "errors fell after we introduced audits" becomes "audits caused the fall" without ruling out other explanations, and one team's single-month experience becomes a recommendation for every team immediately. Option A attacks an irrelevant feature of the number. Option C rejects the conclusion without engaging the reasoning. Option D proposes a different study rather than criticising this one. This tests spotting both logical leaps at once — treating a before/after story as a hypothesis to test rather than a conclusion to file, part of the problem management discipline.

**Question 12 (challenging) — Precision with modal language**

Passage (extract from the on-call guidance): "Analysts may be contacted outside working hours only when a SEV1 incident is open. When contacted, an analyst must acknowledge within 30 minutes. An analyst who is unavailable must have arranged cover in advance. Acknowledging an incident does not require the analyst to begin work on it immediately; it confirms the contact was received."

Which statement is consistent with the passage?

- A) An analyst contacted about a SEV2 incident out of hours must acknowledge within 30 minutes.
- B) Acknowledging within 30 minutes commits the analyst to starting work immediately.
- C) An analyst who has arranged cover in advance may be unavailable when contacted.
- D) Analysts must be available at all times without exception.

**Correct answer: C**

**Explanation:** Option A fails because out-of-hours contact is permitted only for SEV1 — a SEV2 scenario falls entirely outside the rules the passage sets. Option B is directly contradicted. Option D is contradicted by the cover arrangement. Option C restates the cover rule correctly. This tests precision with modal words — may, must, only, does not require — the small words that carry the entire meaning of operational policies, and that misreading, especially out of hours under pressure, causes well-meaning breaches.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say correctly.**
- **Watch for whether a candidate notices when a later document supersedes an earlier one.**
- **Note whether a candidate separates a stated claim from a suggested one.**
- **Use the clear-writing item (Question 8) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate anchors on an earlier document** rather than a later, superseding one.
- **Confusing suggestion with statement when scoring a Cannot say item.**
- **Equating brevity with clarity** in the clear-writing item.
- **Missing category words** — new versus existing, critical versus all services — that a passage sets up as distinct.
- **Accepting the first plausible option without checking all four.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge how effective different responses would be. It has no arithmetic and no passage analysis; it measures practical judgement — instinct for what a professional at this level should do when situations are messy, time is short, and people are involved.

The typical format is an online test of 20 to 40 minutes with 10 to 20 scenarios, each followed by three to five possible responses. Question styles vary: choosing the most effective response, the least effective, ranking all responses, or rating each independently. Scoring compares judgements against those of experienced professionals, so the "right" answers reflect how effective behaviour is generally understood in roles like this one, not trick logic.

An operations analyst's day is full of judgement calls no procedure fully covers: whether to interrupt a busy engineer, when to escalate versus keep watching, how to report a mistake, how to respond to a frustrated user. At this level, the most effective responses usually combine honesty, promptness, appropriate escalation, and care for users and colleagues; the least effective usually involve hiding problems, exceeding authority, delaying without reason, or passing blame.

### How this assessment maps to the role

- **Escalation judgement** maps to **Incident management** and the duty to alert support staff when necessary.
- **Ownership behaviours** map to **Ownership and initiative**.
- **Team scenarios** map to **Community collaboration**.
- **User scenarios** map to **User focus**.
- **Integrity and accuracy scenarios** map to **Asset and configuration management** and **Change management**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A mistake in own work**

While preparing this week's report for a manager, it becomes clear that last week's report — already sent — overstated the number of resolved incidents by 15. Nobody has noticed. What is the most effective response?

- A) Say nothing; it is unlikely anyone will check, and this week's report will be correct.
- B) Tell the manager promptly, explain the error and its size, and send a short correction so decisions aren't based on wrong figures.
- C) Quietly adjust this week's figures downward by 15 to make the totals balance out over time.
- D) Wait to see whether anyone queries the figure, and correct it only if asked.

**Correct answer: B**

**Explanation:** Option B is honest, prompt, and practical, fixing the record and protecting any decisions relying on the figure. Option A gambles credibility on nobody checking. Option C deliberately falsifies a second report to conceal the first error. Option D outsources responsibility to chance. This tests ownership — owning issues until resolved applies doubly to issues one created oneself — and recognises that the speed and openness of a correction is what distinguishes a trusted analyst, since a cover-up costs far more than the moment's awkwardness of an honest mistake.

**Question 2 (easy) — Unsure whether to escalate**

An unusual pattern on the monitoring dashboard: a service's error rate has doubled in the past hour, but it is still below the formal alert threshold. The manager is in a meeting, and the procedure doesn't cover this exact situation. What is the most effective response?

- A) Do nothing until the formal threshold is breached, since the procedure defines that as the trigger.
- B) Register a full SEV1 incident immediately to be safe.
- C) Make a note of the pattern with timestamps, mention it to the relevant support team as a heads-up, and keep watching closely; brief the manager after the meeting.
- D) Restart the affected service before it gets worse.

**Correct answer: C**

**Explanation:** This scenario sits exactly where proactive monitoring is meant to operate — noticing potential problems before thresholds force everyone's hand. Option C records evidence, alerts the right people proportionately, continues monitoring, and briefs the manager. Option A treats the procedure as permission to ignore an observation, when procedures set minimum triggers, not maximum attentiveness. Option B over-escalates, spending the team's trust and risking desensitisation to real emergencies. Option D exceeds the role's authority and bypasses change control. This tests proportionality: acting early and visibly, at the right level.

**Question 3 (easy) — A colleague asks to skip a step**

An engineer asks for a change to be logged as already approved "because the approval will definitely come through this afternoon, and we're in a hurry." What is the most effective response?

- A) Do it — the approval is a formality and the team's speed matters.
- B) Refuse rudely and report the engineer to their manager immediately.
- C) Politely decline to record an approval that hasn't happened, offer to prepare everything else so the change can proceed the moment approval arrives, and flag the time pressure to the manager if the approval is genuinely urgent.
- D) Log it as approved but keep a private note that it wasn't, in case questions come up later.

**Correct answer: C**

**Explanation:** The record must say what is true — the bedrock of change management and asset and configuration duties. Option C declines the false entry, actively helps with everything legitimate, and uses the proper escalation route if the delay is a real problem. Option A makes the analyst the author of a false record. Option D is an official record known privately to be false plus a secret note — indefensible. Option B gets the refusal right and the delivery wrong, escalating a first-time, likely well-intentioned request straight to management with rudeness. This tests holding a standard while offering a legitimate path to the same goal.

**Question 4 (easy) — Handling a frustrated user**

A user phones the control centre, angry: "This is the third time this month the portal has crashed while I was in the middle of an application. You people clearly don't care." What is the most effective response?

- A) Point out that the control centre doesn't build the portal, so it isn't their fault.
- B) Listen, acknowledge the frustration, take full details of all three occurrences, register the incident, and explain what will happen next — then make sure the repeat pattern is flagged, not just today's crash.
- C) Tell them to raise a complaint through the official complaints process and end the call.
- D) Apologise repeatedly but take no details, to keep the call short.

**Correct answer: B**

**Explanation:** Option B treats the caller as a person and the call as data. Acknowledging frustration de-escalates; taking details of all three occurrences turns the call into exactly the user evidence the user focus skill calls for; flagging the repeat pattern feeds problem management, since three crashes in a month is a problem signature. Option A is technically accurate and unhelpful — users experience the service, not the org chart. Option C abandons a live issue and a user mid-need. Option D offers sympathy without a record. This tests treating the user's repeat bad experience as an ownership issue until properly registered and moving toward resolution.

**Question 5 (moderate) — Conflicting instructions**

A manager asked this morning for the day to be spent tidying the asset register before Friday's audit. At noon, a senior engineer from the network team requests the afternoon instead, to help test a new dashboard, saying "the audit stuff can wait." What is the most effective response?

- A) Follow the engineer's instruction — they are more senior.
- B) Refuse the engineer flatly and continue with the register without telling anyone.
- C) Ignore both tasks and work the normal monitoring queue.
- D) Explain that the manager has prioritised the audit preparation, and offer to check with the manager right away whether the priority should change.

**Correct answer: D**

**Explanation:** The strong move in a tasking conflict is to be transparent and route the priority decision to the person who owns priorities. Option D does this while treating the engineer respectfully, leaving room for the genuine possibility that the dashboard should take priority. Option A lets seniority override an explicit management instruction without anyone agreeing to the change. Option B gets the priority right but the collaboration wrong. Option C dodges the conflict entirely. This tests resolving competing legitimate demands openly through the right person rather than either deferring blindly or acting unilaterally.

**Question 6 (moderate) — Spotting a colleague's error**

Reviewing yesterday's records reveals a fellow analyst, on shift again today, registered an incident against the wrong service — the ticket says "Payments" but the details clearly describe the reporting system. What is the most effective response?

- A) Correct the record silently so no one ever knows.
- B) Mention it to the colleague directly and kindly, so they can correct it and learn from it; if the miscategorisation has already misdirected any work, make sure the affected team is told.
- C) Email the whole team about the importance of accurate categorisation, without naming anyone.
- D) Report the error to the manager before speaking to the colleague.

**Correct answer: B**

**Explanation:** Going to the colleague first is proportionate for an ordinary, non-recurring error, and preserves their ownership and learning; checking whether any work was misdirected matters operationally, since someone may be investigating the wrong system right now. Option A hides the learning and, in a shared record system, edits a colleague's record without their knowledge. Option C is passive-aggressive and corrects nothing directly. Option D escalates before the simplest, kindest step has been tried. This tests the community collaboration skill of recognising and dealing with issues directly and kindly.

**Question 7 (moderate) — Pressure to close incidents before month end**

On the last day of the month, a team lead suggests closing five open incidents "since they're basically done", to improve the monthly resolution statistics. Two of the five are genuinely resolved but awaiting user confirmation; three still have outstanding actions. What is the most effective response?

- A) Close all five — they will probably be fine, and the team's statistics matter for funding.
- B) Close none and say nothing, quietly leaving all five open.
- C) Close only what the process genuinely allows (chase the two user confirmations today so they may close properly), leave the three unfinished incidents open, and be straightforward with the team lead about why.
- D) Close the two awaiting confirmation without chasing the users, and leave the other three open.

**Correct answer: C**

**Explanation:** Statistics exist to describe reality, not to be manufactured. Option C chases legitimate month-end closures for the two awaiting confirmation, keeps the three unfinished incidents honestly open, and explains the reasoning to the team lead directly. Option A prioritises appearances over truth and users. Option D closes tickets whose defining requirement (confirmation) is unmet. Option B protects the record but avoids the human moment, leaving the team lead thinking a bad suggestion was fine. This tests integrity in record keeping alongside the confidence to disagree politely with someone senior.

**Question 8 (moderate) — An alert during handover**

Ten minutes from the end of a shift, mid-handover, a SEV2 alert fires on the appointments service, and the incoming colleague hasn't finished reading the handover note. What is the most effective response?

- A) Leave on time — the incoming analyst is now responsible for everything that happens on their shift.
- B) Register and triage the alert now, tell the incoming colleague exactly what has been done and what remains, add it to the handover note, and leave once the handover of this incident is genuinely complete.
- C) Handle the entire incident to resolution alone, however long it takes, without involving the incoming colleague.
- D) Ask the incoming colleague to deal with it alone while finishing the handover note about other matters.

**Correct answer: B**

**Explanation:** Ownership ends at a successful transfer, not at a shift boundary. Option B takes immediate action that can't wait, transfers explicitly with a spoken briefing and a written record, and leaves only once the new owner genuinely has it. Option A follows the clock rather than the service. Option C denies the colleague the handover needed to own their own shift. Option D forces action without context. This tests the literal meaning of the ownership skill: owning an issue until a new owner has genuinely been found.

**Question 9 (moderate) — Asked for data of uncertain authorisation**

A contractor working with a supplier emails directly: "Can you send me the full asset register export for the data centre? Need it for our planning work." Access exists to the export, but it is unclear whether the contractor is authorised to receive it. What is the most effective response?

- A) Send it — they're working with the department, and being helpful matters.
- B) Ignore the email; if it's important they'll ask someone else.
- C) Refuse and say asset data is never shared with anyone.
- D) Reply promptly to say authorisation will be checked, then confirm with a manager or the information owner whether and how the data may be shared, and follow their steer.

**Correct answer: D**

**Explanation:** The asset register is exactly the kind of information the asset and configuration management skill exists to protect. Option D balances helpfulness with protection: it replies promptly with a clear path, and checks before sharing rather than after. Option A confuses friendliness with due care. Option B is discourteous and may push the contractor to a less careful source. Option C invents a blanket rule that blocks legitimate work. This tests protective ownership of information alongside courteous, prompt handling of a legitimate-seeming request under uncertainty.

**Question 10 (challenging) — When an escalation is dismissed**

Yesterday, a concern was escalated: a nightly backup job has failed three nights running, and the continuity runbook lists that backup as critical for service recovery. The engineer who received the escalation replied, "Known issue, don't worry about it," but the failures are continuing and nothing in the record shows a fix in progress. What is the most effective response?

- A) Accept the engineer's answer — they know the systems better.
- B) Re-raise the concern with the engineer, referencing the continuity impact and asking what the plan is; if the answer still doesn't address the recovery risk, tell the engineer it will need to be flagged to a manager, and then do so with the evidence.
- C) Go straight to the engineer's head of service and report them for negligence.
- D) Fix the backup job personally using instructions found online.

**Correct answer: B**

**Explanation:** The risk is concrete (a critical backup failing repeatedly) and the reassurance is unevidenced (no fix in progress). Option B persists proportionately: a sharper, evidence-based question first, which gives the engineer a fair chance to reveal context; then transparent escalation if the risk is still unaddressed. Option A abandons a continuity-critical concern on the strength of unevidenced reassurance. Option C leaps to an accusation. Option D risks corrupting the very recovery capability being protected, unauthorised and outside change control. This tests evidence-based persistence, fair warning, and clean escalation.

**Question 11 (challenging) — A quiet team member and a looming deadline**

Preparing evidence for a service review due in three days, a newer colleague clearly has relevant information from a previous rotation, but a louder colleague keeps talking over them, and they have stopped contributing. The team lead hasn't noticed. What is the most effective response?

- A) Stay out of it — team dynamics are the team lead's job.
- B) In the next discussion, deliberately make space — "Before we move on, I'd like to hear Alex's view; they worked on this system last year" — and, if the pattern continues, mention it privately to the team lead as something worth watching.
- C) Publicly tell the louder colleague to stop interrupting people.
- D) Collect the quiet colleague's information privately and present it personally so the review gets it.

**Correct answer: B**

**Explanation:** The community collaboration skill's helping create the right team environment applies at any level. Option B acts at the lowest effective level: a warm invitation in the moment, credit to the colleague's expertise, and a private word with the team lead if the pattern persists. Option A treats a fixable, deadline-relevant problem as someone else's. Option C risks a public confrontation. Option D takes the credit and voice away from the colleague. This tests choosing the gentlest intervention that actually works, and recognising that inclusive teams surface more evidence faster.

**Question 12 (challenging) — Least effective: an ambiguous emergency out of hours**

Not on call tonight, but at 22:30 a public social media post is noticed saying the department's licensing portal appears to be down. It cannot be verified from home whether it's a real outage. Which response would be LEAST effective?

- A) Decide it's not a problem tonight, do nothing, and don't mention it tomorrow.
- B) Send a short message to the on-call analyst or duty channel with a link to the post — "not verified, spotted this, over to you" — and leave it with them.
- C) Do nothing tonight but check the monitoring history and mention the post first thing tomorrow.
- D) Try to log in to the admin console from a personal device to investigate and restart services personally.

**Correct answer: A**

**Explanation:** Option B is clearly the best response: a thirty-second, zero-drama handoff to the person on duty. Option D is risky — investigating from a personal device outside authority creates security and change-control risks — but stems from a desire to help. Option C is imperfect but defensible, neither risking nor hiding anything. Option A combines every failing: the service may be down for citizens all night, the on-call analyst never gets a free early warning, and next-day silence converts an understandable evening judgement into concealment. This tests recognising that passivity plus concealment is worse than even reckless helpfulness, and that a thirty-second handoff is genuinely all that is required when off duty.

### Administration tips

- **Score for whether a candidate combines action with communication** — the strongest options both do something and tell someone.
- **Watch for whether a candidate rates each option on its own merits** in most/least questions, rather than comparing impressionistically.
- **Note whether a candidate treats a record-keeping dimension as part of the answer**, not just the human handling.
- **Keep candidates scored to analyst-level judgement** — proportionate escalation, honest correction, clean handover — not heroics or pure deference.
- **Use the least-effective item (Question 12) to check whether a candidate can rank negatively as well as positively.**

### Common pitfalls to watch for when scoring

- **Rewarding heroics** — fixing everything alone rather than escalating and handing over well.
- **Rewarding pure deference to seniority** when it means falsifying records or dropping a manager's priorities without a word.
- **Crediting an option that reports a colleague before speaking to them first.**
- **Confusing silence with diplomacy** — not telling, not correcting, not replying usually scores as avoidance.
- **Missing the record-keeping dimension of a scenario** even when the human handling is good.
- **Missing when a response serves appearances over the user behind a ticket or statistic.**

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an operations analyst: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests checking asset registers and handover notes for the entry that doesn't fit, reading change procedures condition by condition, and recognising the level of a recurring problem. The numeric section tests availability percentages, downtime budgets, escalation rates, and weighted averages, and combining a trend, a threshold, and a calendar into an early warning. The verbal section tests keeping what a passage states, what it suggests, and what it never says in separate boxes. The situational judgement section tests the calls that define this job: when to escalate, how to correct a mistake, how to hold a standard kindly, and how to hand over an incident so ownership genuinely transfers.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can monitor carefully, read procedures precisely, and exercise sound judgement in the everyday moments of a control centre — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
