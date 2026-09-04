# Associate Infrastructure Operations Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for associate infrastructure operations engineer, within the UK Government Digital and Data profession. This is an entry-level role: the candidate would work in an established team, supporting infrastructure operations engineers in their daily work under their direction. These assessments are job-specific: they use the real materials of the working day — monitoring dashboards, incident tickets, checklists, handover notes, alert emails, and simple reports about the infrastructure that keeps government services running — rather than abstract puzzles about shapes or riddles.

This document is organised into four assessment sections: a workplace job-specific cognitive assessment, measuring pattern-spotting, error checking, logical reasoning, and prioritisation; a workplace job-specific numeric reasoning assessment, measuring work with the numbers met at work — ticket counts, percentages, uptime figures, and simple tables; a workplace job-specific verbal reasoning assessment, measuring how carefully written material such as procedures, emails, and policy extracts is read and understood; and a workplace job-specific situational judgement assessment, measuring how a candidate would choose to act in realistic workplace situations, such as an alert going off while a supervisor is away.

Each section follows the same pattern: an overview of what the assessment measures and why it matters for this role, a mapping to the specific named skills in the role summary, a full set of practice items with worked answers for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Because this is an entry-level assessment, be generous with time and with the platform's ungraded practice items, and consider a calm, unhurried setting. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the thinking skills this role uses every day, using workplace scenarios instead of abstract puzzles. For this role, that means items built around monitoring screens, incident tickets, checklists, server naming patterns, and the simple but important decisions a trainee makes: what to log, what to check, who to tell, and what to do first.

The typical format is an online, timed test lasting around 15 to 30 minutes, with somewhere between 15 and 30 questions. The questions usually cover pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Many modern platforms are adaptive, so the questions get slightly harder when a candidate answers correctly and slightly easier when they do not. Scoring is objective: answers are compared with those of many other people, and employers often see a balance of speed and accuracy rather than a single number. Before the real test begins, candidates are normally offered a few ungraded practice questions.

Employers use this kind of assessment for infrastructure operations roles because the job depends on careful, structured thinking. Production services send out streams of information: alerts, logs, dashboards, and tickets. Someone in this role needs to notice when something breaks a pattern, follow a process step by step without skipping anything, spot the one wrong entry in a list, and know when a situation needs to be passed to a more experienced engineer.

### How this assessment maps to the role

The assessment dimensions connect directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Incident management** skill. Identifying and registering incidents, gathering the required information and allocating it to the appropriate channel, means recognising patterns: which alerts belong together, which ticket looks like the one from last week, and which category an incident fits.
- **Logical deduction** maps to the **Problem management** skill. Investigating problems in systems, processes and services — and thinking about whether a problem is strategic, tactical or operational — means reasoning step by step from evidence to a sensible conclusion.
- **Error checking** maps to both **Incident management** and **Problem management**. Gathering the required information for an incident means noticing when a detail is missing or wrong. Contributing to the implementation of remedies and preventative measures means checking that a fix has actually been applied correctly.
- **Prioritisation** maps to the **Ownership and topic** skill. Showing an awareness of problem resolution processes and passing problems on to the team at this level requires knowing what to escalate first, and what can wait.
- **Applied problem solving** maps to the **User focus** skill. Showing an awareness of user experience analysis, and understanding the purpose of user stories and the focus on user needs, means always asking the practical question: what does this issue mean for the people using the service?

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in server names**

A team names its servers using this pattern: a three-letter service code, a hyphen, the environment (PRD for production or TST for test), a hyphen, and a two-digit number. For example: WEB-PRD-01. During a morning check, this list appears on the monitoring dashboard:

1. WEB-PRD-01
2. WEB-PRD-02
3. WEB-TST-01
4. WEBPRD-03
5. APP-TST-02

Which entry breaks the naming pattern?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** Check each entry against the rule: three letters, hyphen, environment code, hyphen, two digits. Entries 1, 2, 3 and 5 all follow it exactly. Entry 4, "WEBPRD-03", is missing the first hyphen between the service code and the environment. This matters at work because monitoring tools and scripts often rely on exact naming: a server with a broken name may be missed by automated checks. This tests spotting small format errors, part of gathering accurate information when registering incidents.

**Question 2 (easy) — Following a checklist in order**

A daily morning checklist says: (1) log in to the monitoring dashboard; (2) check overnight alerts; (3) record any new alerts in the ticket system; (4) tell the supervising engineer about any alert marked "critical". This morning there are two new alerts: one marked "warning" and one marked "critical". The candidate has logged in and looked at the alerts. According to the checklist, what should happen next?

- A) Tell the supervising engineer about the critical alert straight away, then record both alerts.
- B) Record both alerts in the ticket system, then tell the supervising engineer about the critical alert.
- C) Record only the critical alert, then tell the supervising engineer.
- D) Wait for the supervising engineer to arrive and ask what to do.

**Correct answer: B**

**Explanation:** The checklist gives the steps in a fixed order: step 3 (record any new alerts — that means both of them) comes before step 4 (tell the supervisor about critical alerts). Option B follows the checklist exactly. Option A swaps the order, and option C skips recording the warning alert. Option D delays action the checklist clearly requires. This tests whether a candidate can follow written process precisely — as a trainee working under direction, performing routine tasks according to process is exactly what a team relies on this role for.

**Question 3 (easy) — Spotting the odd one out in alerts**

Four alerts arrive within ten minutes:

1. "Disk space at 91% on WEB-PRD-01"
2. "Disk space at 93% on WEB-PRD-02"
3. "Disk space at 95% on WEB-PRD-03"
4. "Password expiry reminder for account svc-backup"

A senior engineer asks which alerts look like they might be related to one another. What is the best answer?

- A) All four alerts are related.
- B) Alerts 1, 2 and 3 look related; alert 4 is different.
- C) Alerts 3 and 4 look related; alerts 1 and 2 are different.
- D) None of the alerts are related.

**Correct answer: B**

**Explanation:** Alerts 1, 2 and 3 share a clear pattern: the same type of problem (disk space filling up), on three servers with the same naming stem (WEB-PRD), at similar levels (91-95%), at almost the same time. That pattern suggests a common cause. Alert 4 is a routine account notice with no connection to disk space. This tests grouping related alerts, a core part of identifying and registering incidents and allocating them to the appropriate channel: three related disk alerts might become one incident ticket rather than three, which helps whoever investigates.

**Question 4 (easy) — Simple deduction from a rule**

A team's rule says: "If a server alert is marked critical, it must be escalated to the on-call engineer within 15 minutes." An alert on APP-PRD-02 was escalated to the on-call engineer. Which one of the following conclusions must be true?

- A) The alert on APP-PRD-02 was marked critical.
- B) The alert on APP-PRD-02 was escalated within 15 minutes.
- C) The rule was followed correctly.
- D) None of the above must be true.

**Correct answer: D**

**Explanation:** This question rewards careful logic. The rule says critical alerts must be escalated — but it does not say only critical alerts get escalated. An engineer might escalate a warning alert too, just to be safe. So option A is not guaranteed. The timing of the escalation is not given, so option B is not guaranteed either. Because A and B cannot be confirmed, neither can C. The safe conclusion is D. This tests deducing only what the given facts guarantee, without adding assumptions — a habit that matters when contributing to problem investigations, where "the alert was escalated" is a fact and "the alert was critical" would be a guess dressed up as one.

**Question 5 (moderate) — Error checking a ticket record**

A new incident ticket must be checked before it is passed to the second-line team. The team's standard says every incident ticket must include: the affected server name, the time the alert was received, the alert severity, and the name of the person who logged it. The ticket reads:

"Incident 4821. Alert received 09:42. Severity: warning. Logged by: A. Begum. Description: repeated login failures reported by service desk."

What is wrong with this ticket?

- A) The severity is missing.
- B) The affected server name is missing.
- C) The time is in the wrong format.
- D) Nothing is wrong; the ticket is complete.

**Correct answer: B**

**Explanation:** Work through the standard like a checklist and tick off each required item: time received — present; severity — present; logged by — present; affected server name — not present anywhere in the ticket. This tests comparing a record against the required list item by item, rather than judging whether a ticket "feels" complete — exactly the quality check that makes a candidate valuable when identifying and registering incidents, since a ticket without the affected server name forces the next engineer to waste time asking questions.

**Question 6 (moderate) — Deduction about a sequence of events**

A senior engineer shows three facts from last night's logs: (i) the backup job on FIL-PRD-01 always runs after the antivirus scan finishes; (ii) the antivirus scan finished at 02:30; (iii) the backup job failed. A teammate says: "So the backup job failed some time after 02:30." Is the teammate's conclusion sound?

- A) Yes — the backup runs after the scan, the scan finished at 02:30, so the failure happened after 02:30.
- B) No — the backup job might have failed before 02:30.
- C) No — the antivirus scan might have caused the failure.
- D) Yes — because backup jobs always run in the early morning.

**Correct answer: A**

**Explanation:** Put the facts in order. The backup job always runs after the antivirus scan finishes (fact i). The scan finished at 02:30 (fact ii). So the backup job cannot have started, let alone failed, before 02:30. The failure (fact iii) must therefore have happened after 02:30. Option A states exactly this chain. Option B contradicts fact (i). Option C might be an interesting theory about the cause, but the question asks only whether the timing conclusion is sound. Option D reaches the right answer for a wrong, made-up reason. This tests reasoning about the order of events, a daily part of investigating problems in systems.

**Question 7 (moderate) — Prioritising alerts as a trainee**

A candidate is alone at their desk for twenty minutes while their supervising engineer is in a meeting (reachable by message for emergencies). Four things happen at once:

1. A critical alert: the production payments service is not responding.
2. A warning alert: disk space at 82% on a test server.
3. A colleague asks for help moving a monitor to another desk.
4. A routine reminder: a weekly timesheet is due by the end of the day.

What should be done first?

- A) Help the colleague — it only takes a minute.
- B) Message the supervising engineer about the critical payments alert, following the escalation process.
- C) Investigate and fix the payments service personally to save time.
- D) Clear the disk space warning on the test server first because it is the easiest.

**Correct answer: B**

**Explanation:** Rank the items by impact and urgency. A production payments service not responding affects real users right now. As an associate, the right action is not a solo fix on a critical production service (option C); it is to follow the escalation process and alert the supervising engineer immediately, which is exactly why they are reachable for emergencies. This reflects the **Ownership and topic** skill at this level: show awareness of the resolution process and pass problems to the team promptly. This tests the pattern for prioritisation questions: production before test, users before convenience, escalation before heroics.

**Question 8 (moderate) — Pattern recognition across time**

A simple tally of one recurring alert shows: over the past five Mondays, "memory usage high on APP-PRD-01" fired at 09:05, 09:02, 09:08, 09:04, and 09:06. Today is Monday and the alert fires at 09:05. A colleague suggests possible next steps. Which suggestion makes the best use of the pattern spotted?

- A) Ignore the alert — it happens every Monday, so it must be normal.
- B) Record the pattern in the problem ticket: the alert fires every Monday just after 09:00, which suggests a scheduled weekly task may be the cause, and pass this to the team.
- C) Restart APP-PRD-01 every Monday at 08:55 to prevent the alert.
- D) Delete the alert rule so it stops firing.

**Correct answer: B**

**Explanation:** The times cluster tightly: every Monday, within a few minutes of 09:00. That regularity is a strong clue that something scheduled — a weekly report, a batch job, a sync task — drives the memory spike. This tests choosing to record the evidence clearly and pass it to the team, matching the **Problem management** skill (investigate problems and contribute to remedies) and the **Ownership** skill (pass problems on to the team). Option A confuses "recurring" with "harmless". Options C and D treat the symptom or hide it: restarting a production server weekly without diagnosis could cause outages, and deleting the alert removes the early warning without fixing anything.

**Question 9 (moderate) — Error checking against two sources**

A team's asset list says the server BCK-PRD-01 is located in Rack 4 and runs "Backup Agent version 7.2". During a supervised check of Rack 4, BCK-PRD-01 is found present, but its screen shows "Backup Agent version 7.1". The supervising engineer asks for a summary of what was found. Which summary is accurate?

- A) "Everything matches the asset list."
- B) "The server is missing from Rack 4."
- C) "The server's location matches the asset list, but the software version does not: the list says 7.2 and the server shows 7.1."
- D) "The asset list is wrong and needs to be corrected to say 7.1."

**Correct answer: C**

**Explanation:** Compare the two sources field by field. Location: list says Rack 4; found in Rack 4 — match. Version: list says 7.2; server shows 7.1 — mismatch. Option C reports both findings precisely. Option A ignores the mismatch and option B is simply false. Option D goes one step too far: a discrepancy has been found, but it is not yet known which source is wrong — perhaps the list is out of date, or perhaps the server missed an upgrade it should have received. This tests careful, neutral reporting of differences between records and reality — stating exactly what was observed, no more and no less.

**Question 10 (hard) — Multi-step deduction about a failed change**

Last night, three changes were made to the web platform, one after another: Change 1 updated the firewall rules at 22:00; Change 2 patched the web servers at 23:00; Change 3 updated the load balancer at 23:45. This morning, users report they cannot reach the website. Three facts are known: (i) a test at 23:30 confirmed the website was working normally; (ii) no other changes happened after 23:45; (iii) the website was first reported broken at 00:10. Which change is the most likely cause of the outage?

- A) Change 1, the firewall update, because firewalls block traffic.
- B) Change 2, the web server patch, because patches often cause problems.
- C) Change 3, the load balancer update, because the site worked at 23:30 and only changed after 23:45.
- D) It is impossible to say anything useful from these facts.

**Correct answer: C**

**Explanation:** Build a timeline and place each fact on it. Changes 1 and 2 were both complete before the 23:30 test, and the test showed the site working normally. Between 23:30 and 00:10, exactly one thing changed: the load balancer update at 23:45 (fact ii rules out anything else). The site was then found broken at 00:10. The most likely cause is therefore Change 3. Options A and B rely on general prejudice instead of the actual timeline. Option D is too pessimistic: the facts do support a useful, testable conclusion. This tests timeline reasoning, the single most useful deduction technique in incident investigation: establish the last known good time, list what changed after it, and suspect those changes first.

**Question 11 (hard) — Prioritisation with dependencies**

Four tasks and one constraint are given for the afternoon: (1) update the asset list with three new laptops, 30 minutes; (2) run the monthly test-restore of a backup, 60 minutes, which must be started before 15:00 because the backup system locks at 16:00; (3) write up this morning's incident notes while memory is fresh, 30 minutes; (4) collect a delivery of cables from the post room, which closes at 17:00, 15 minutes. It is now 14:00, finishing at 17:00. The constraint: the test-restore, once started, must not be interrupted. What is the best order?

- A) 1, 2, 3, 4
- B) 2, 3, 1, 4
- C) 3, 2, 1, 4
- D) 4, 1, 3, 2

**Correct answer: B**

**Explanation:** Start with the hardest deadline: the test-restore must start before 15:00 and runs uninterrupted for 60 minutes. Starting it at 14:00 (option B) satisfies the deadline with the largest safety margin. It finishes at 15:00, leaving two hours for the three short tasks (75 minutes total), all comfortably fitting before their deadlines. Within those, doing the incident notes next respects the "while memory is fresh" advice, then the asset list, then the post room before 17:00. Option C also technically works but halves the safety margin for no benefit. Option D breaks the "start before 15:00" rule outright. Option A delays the deadline task behind a task with no deadline pressure. This tests identifying the task with the tightest, least movable constraint, scheduling it first with maximum margin, then fitting flexible tasks around it.

**Question 12 (hard) — Applied problem solving with user focus**

The service desk reports that some users of an internal HR application see a "page not found" error. Under an engineer's direction, these facts are gathered: (i) users on the Leeds office network all see the error; (ii) users on the Manchester office network can all use the application normally; (iii) the application runs on a single server, which the monitoring dashboard shows as healthy; (iv) no changes were made to the application this week. Which is the most reasonable working theory to suggest to the team?

- A) The application server is down.
- B) Something on the network path between the Leeds office and the application is the likely cause, because the problem affects one location while the server itself looks healthy.
- C) The users in Leeds are making mistakes typing the address.
- D) The application code has a bug affecting all users.

**Correct answer: B**

**Explanation:** Use elimination, fact by fact. Fact (iii) says the server is healthy, and fact (ii) proves it: Manchester users reach it normally — so option A falls, and so does option D, since a code bug would not choose victims by office. Option C is implausible at scale: every Leeds user mistyping at once is not credible, and it would be a poor, user-blaming theory to offer. That leaves the one factor separating affected from unaffected users: their location, and therefore their network path. Option B names it, with the reasoning attached. This tests the **User focus** skill: the investigation started from user reports, and the theory is built by asking which users are affected and what they share — describing an issue in terms of who is affected, rather than jumping to a component.

### Administration tips

- **Watch for whether a candidate checks each part of a naming or format rule** rather than judging a record by whether it "feels" right.
- **Score for whether a candidate concludes only what the given facts guarantee**, avoiding over-confident deductions.
- **Note whether a candidate builds a timeline before assigning a cause** to a failure.
- **Because this is an entry-level assessment, allow the platform's ungraded practice items first**, and keep timing consistent across candidates thereafter.
- **Use the applied-problem-solving item (Question 12) to observe whether a candidate reasons from who is affected and what they share**, rather than guessing at a single component.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that picks the most technical-sounding option** rather than the one the facts actually support.
- **Crediting an answer that skips or reorders steps in a described checklist or procedure.**
- **Missing when a candidate confuses "possible" with "must be true"** in a deduction item.
- **Rewarding a "quiet fix" option** where a candidate resolves a production issue alone rather than escalating.
- **Penalising a candidate too harshly for one difficult item** rather than assessing overall performance across the set.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the numbers that appear in this job. This is not a maths exam full of algebra; it is everyday workplace arithmetic: percentages, averages, simple ratios, rates, and reading small tables and charts — the kind of numbers that fill monitoring dashboards, ticket reports, and capacity summaries.

The typical format is an online, timed test of about 20 to 30 minutes, with 15 to 25 questions. Each question presents some data — a table of ticket counts, a disk usage figure, an uptime percentage — and asks for a calculation or interpretation from it. A basic on-screen calculator is usually allowed, and rough paper is useful. Scoring compares accuracy and speed against other people, and some platforms adapt difficulty as the candidate goes.

Employers test numeric reasoning for this role because infrastructure runs on numbers. Disk space is a percentage. Uptime is a percentage. Ticket queues are counts and averages. Backup windows are durations. Even at trainee level, a candidate will read dashboards where the difference between 89% and 98% disk usage is the difference between "note it" and "escalate it now".

### How this assessment maps to the role

- **Percentages and thresholds** map to the **Incident management** skill. Alerts fire at percentage thresholds — disk at 90%, memory at 85%. Registering an incident correctly means understanding what those figures mean and how close to the limit a system really is.
- **Counts, averages and rates** map to the **Problem management** skill. Investigating problems means noticing that a certain error happens, say, 12 times a day on average, or that a queue is growing at 20 tickets an hour.
- **Reading tables and simple charts** maps to the **Ownership and topic** skill. When a problem is passed to the team, it often carries a small table of evidence with it.
- **Practical estimation** maps to the **User focus** skill. Numbers become meaningful when translated into user impact.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Disk space percentage**

A server has a 500 GB disk. The monitoring dashboard shows that 350 GB is used. What percentage of the disk is used?

- A) 60%
- B) 65%
- C) 70%
- D) 75%

**Correct answer: C**

**Explanation:** Percentage used = (used ÷ total) × 100. Step 1: 350 ÷ 500 = 0.7. Step 2: 0.7 × 100 = 70%. A quick sense-check: half of 500 is 250, so 350 must be more than 50%; and 75% of 500 would be 375, so 350 must be a little less than 75%. This tests the habit of sense-checking against easy landmarks (50%, 75%), which catches calculator slips in seconds and is exactly how experienced engineers glance at a dashboard and know instantly whether a number looks right.

**Question 2 (easy) — Counting tickets across a week**

A team logged the following numbers of incident tickets: Monday 14, Tuesday 9, Wednesday 11, Thursday 16, Friday 10. How many tickets were logged in total that week?

- A) 58
- B) 60
- C) 62
- D) 64

**Correct answer: B**

**Explanation:** Add the daily counts step by step: 14+9=23; +11=34; +16=50; +10=60. The total is 60 tickets. This tests basic accurate arithmetic under time pressure — adding in a fixed order and keeping a running total on paper rather than holding it all in the head, since transcription slips are the most common cause of wrong answers on simple addition.

**Question 3 (easy) — Average tickets per day**

Using the same week of data (total 60 across 5 days), what was the average (mean) number of tickets per day?

- A) 10
- B) 11
- C) 12
- D) 13

**Correct answer: C**

**Explanation:** Mean = total ÷ number of days = 60 ÷ 5 = 12. This tests basic mean calculation, and a strong candidate's answer notes something useful about averages: no single day actually had 12 tickets — the mean is a summary, not a description of any one day, which is worth understanding before reacting to a day's figure as unusually high or low.

**Question 4 (easy) — Percentage of alerts that were critical**

Last month a team received 240 alerts. Of these, 36 were marked critical. What percentage of alerts were critical?

- A) 12%
- B) 15%
- C) 18%
- D) 20%

**Correct answer: B**

**Explanation:** Percentage = (part ÷ whole) × 100. 36 ÷ 240 = 0.15; × 100 = 15%. This tests basic percentage fluency, and a strong candidate's answer might simplify the fraction first (36/240 = 3/20 = 15%) — building fluency with a few friendly fractions (1/4, 1/5, 1/20) allows quick answers on simple items, saving time for harder ones later.

**Question 5 (moderate) — Uptime percentage and downtime minutes**

A production service has an availability target of 99.5% for a 30-day month. A 30-day month contains 43,200 minutes. What is the maximum downtime, in minutes, the service can have while still meeting the target?

- A) 43.2 minutes
- B) 216 minutes
- C) 432 minutes
- D) 2,160 minutes

**Correct answer: B**

**Explanation:** If the service must be up 99.5% of the time, it may be down at most 0.5% of the time. Step 1: 0.5% = 0.005. Step 2: 43,200 × 0.005 = 216 minutes. Option A misplaces the decimal (treating it as 0.1%); option C treats it as 1%. This tests basic availability arithmetic, and a strong candidate's answer notes what the figure means in practice: about 3.6 hours a month, which turns an abstract target into something that can genuinely be pictured.

**Question 6 (moderate) — Reading a table of disk usage**

The morning report shows disk usage on four production servers:

| Server | Disk size | Used | Alert threshold |
|---|---|---|---|
| WEB-PRD-01 | 200 GB | 150 GB | 90% |
| WEB-PRD-02 | 200 GB | 184 GB | 90% |
| APP-PRD-01 | 400 GB | 350 GB | 90% |
| FIL-PRD-01 | 1,000 GB | 870 GB | 90% |

Which server has crossed its alert threshold?

- A) WEB-PRD-01
- B) WEB-PRD-02
- C) APP-PRD-01
- D) FIL-PRD-01

**Correct answer: B**

**Explanation:** Work out each server's usage percentage, then compare with 90%. WEB-PRD-01: 75%. WEB-PRD-02: 92%. APP-PRD-01: 87.5%. FIL-PRD-01: 87%. Only WEB-PRD-02 has crossed the threshold. The trap in this question is judging by raw gigabytes: FIL-PRD-01 has by far the most data used, but it also has the biggest disk, so its percentage is fine. This tests converting to the same units (here, percent) before comparing servers of different sizes.

**Question 7 (moderate) — Growth rate and time to full**

A log folder on a server currently holds 60 GB, on a disk partition of 100 GB used only for logs. The folder grows by about 5 GB per week and nothing is deleted. At this rate, in how many weeks will the partition be full?

- A) 5 weeks
- B) 8 weeks
- C) 12 weeks
- D) 20 weeks

**Correct answer: B**

**Explanation:** Step 1: remaining space = 100 − 60 = 40 GB. Step 2: 40 ÷ 5 = 8 weeks. Option C divides the used space by the rate instead of the free space; option D divides the whole disk by the rate. This tests the formula time to full = remaining space ÷ growth rate — one of the most genuinely useful calculations in operations, turning "the disk is filling up" into "we have about eight weeks to act", exactly the kind of evidence a problem ticket wants.

**Question 8 (moderate) — Percentage change in incident volume**

In March a team logged 80 incidents. In April it logged 100 incidents. What was the percentage increase from March to April?

- A) 20%
- B) 25%
- C) 30%
- D) 80%

**Correct answer: B**

**Explanation:** Percentage change = (change ÷ original) × 100. Change = 20; 20 ÷ 80 = 0.25; × 100 = 25%. The classic trap is option A: dividing by the new figure (20 ÷ 100 = 20%) instead of the original. This tests always dividing by the starting value — "increase from March" means March is the baseline — and a strong candidate's answer notes that percentage changes are not symmetrical (a later fall from 100 back to 80 would be a 20% decrease, not 25%).

**Question 9 (moderate) — Backup success rate**

Over 30 nights, the backup job succeeded 27 times and failed 3 times. The team's standard requires a success rate of at least 95%. Did the backup meet the standard, and what was its success rate?

- A) Yes — the success rate was 97%.
- B) Yes — the success rate was 95%.
- C) No — the success rate was 90%.
- D) No — the success rate was 93%.

**Correct answer: C**

**Explanation:** Success rate = (successes ÷ attempts) × 100 = 27 ÷ 30 × 100 = 90%, below the 95% standard. A quick alternative route: 3 failures out of 30 is 10%, so success = 90%. This tests basic rate calculation, and a strong candidate's answer also notes that three failed backups in a month is a pattern worth flagging in its own right — exactly what "investigating patterns and trends" looks like in practice.

**Question 10 (hard) — Ratios of ticket allocation**

A service desk allocates infrastructure tickets to three queues — Network, Servers, and Storage — in the ratio 2 : 3 : 1. Last week 120 infrastructure tickets arrived in total. How many went to the Servers queue?

- A) 20
- B) 40
- C) 60
- D) 72

**Correct answer: C**

**Explanation:** A ratio of 2 : 3 : 1 splits tickets into 6 equal parts. Step 1: 120 ÷ 6 = 20 tickets per part. Step 2: Servers gets 3 parts: 3 × 20 = 60. Verify: Network 40 + Servers 60 + Storage 20 = 120 ✓. Option B is the Network queue's share. This tests the "total the parts, size one part, multiply" method, and a strong candidate's answer checks by adding the shares back to the total.

**Question 11 (hard) — Combining averages with a target**

The service desk answers calls with a target average answer time of 60 seconds or less each day. So far today, 40 calls have been answered with an average answer time of 66 seconds. There are expected to be 20 more calls today. What average answer time do those 20 calls need, so that the whole day's average meets the 60-second target exactly?

- A) 42 seconds
- B) 48 seconds
- C) 54 seconds
- D) 57 seconds

**Correct answer: B**

**Explanation:** Work in total seconds, because averages combine through totals. Step 1: target total for 60 calls at 60 seconds = 3,600 seconds. Step 2: first 40 calls used 40 × 66 = 2,640 seconds. Step 3: remaining budget = 3,600 − 2,640 = 960 seconds. Step 4: 960 ÷ 20 = 48 seconds. This tests recognising that averages cannot be combined by simply averaging them — converting to totals is the reliable method, in both tests and real service reporting.

**Question 12 (hard) — Interpreting a trend table with care**

A monthly report shows the number of failed login incidents and the total number of logins for an internal service:

| Month | Failed login incidents | Total logins |
|---|---|---|
| May | 30 | 10,000 |
| June | 45 | 18,000 |
| July | 60 | 30,000 |

A colleague says: "Failed login incidents have doubled from May to July — the service is getting worse." Based on the failure rate per login, what is the fairer conclusion?

- A) The colleague is right: the service is getting worse.
- B) The failure rate has actually fallen from 0.3% in May to 0.2% in July, so relative to usage the service is getting better, even though raw incident numbers rose.
- C) The failure rate is unchanged across the three months.
- D) The table cannot tell us anything about failure rates.

**Correct answer: B**

**Explanation:** Rate = incidents ÷ total logins × 100. May: 0.3%. June: 0.25%. July: 0.2%. The raw count doubled, but total logins tripled, so the failure rate per login fell steadily. This tests recognising that raw counts mislead when underlying volume changes — a growing service will naturally produce more incidents even as it becomes more reliable per use, and quoting the rate alongside the count keeps a problem investigation honest.

### Administration tips

- **Score for whether a candidate writes down each step** of a calculation before computing.
- **Watch for whether a candidate sense-checks an answer against a landmark figure** (50%, 10%) before finalising it.
- **Note whether a candidate converts to a common unit (percentage or rate) before comparing** items of different sizes.
- **Allow a calculator throughout**, since the test measures reasoning with numbers, not mental arithmetic.
- **Use the trend-table item (Question 12) to observe whether a candidate computes a rate rather than reading a raw count as if it were the whole story.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong baseline** in a percentage-change item.
- **Crediting a comparison of raw numbers where sizes differ** rather than converting to percentages or rates first.
- **Accepting an "average of averages"** rather than a total-based combination.
- **Missing a unit slip** — minutes versus hours, GB versus TB, per day versus per week.
- **Marking a calculation correct without checking the final interpretive step** — does the number cross the stated threshold, meet the stated standard?

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material — using the kinds of documents this role actually produces and consumes: procedure documents, incident notifications, policy extracts, emails from the service desk, handover notes, and short reports.

The typical format is an online, timed test lasting 15 to 25 minutes. A short passage is shown, followed by questions about it. The most common question type is "true / false / cannot say": deciding whether a statement is definitely true based on the passage, definitely false based on the passage, or whether the passage simply does not give enough information to decide. Other question types ask for the best summary of a passage, what a word or instruction means in context, or the clearest way to phrase a message. Scoring rewards accuracy under time pressure, and — importantly — rewards answering from the passage alone, not from background knowledge.

Employers test verbal reasoning for this role because the work runs on precise reading. A patching procedure that says "restart the service after the update" is different from one that says "restart the server after the update" — one word changes the action completely. Incident tickets, change notices, and security bulletins are written documents, and misreading them causes real outages.

The golden rule for this whole section: answer only from the passage. If the passage does not say it, and it does not follow necessarily from what the passage says, then the answer is "cannot say" — even if it happens to be true in the real world.

### How this assessment maps to the role

- **Reading comprehension of procedures** maps to the **Incident management** skill. Identifying and registering incidents means following written processes exactly.
- **True/false/cannot-say discipline** maps to the **Problem management** skill. Investigating problems requires separating what the evidence states from what a candidate is tempted to assume.
- **Inference from written reports** maps to the **Ownership and topic** skill. When a problem is passed to the team, the written material must be understood well enough to summarise it honestly.
- **Clear-writing judgement** maps to the **User focus** skill. Understanding user stories, and communicating with users or the service desk, depends on writing plainly, without jargon that hides the message.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Understanding a procedure step**

Read this extract from a team's patching procedure:

"All test servers must be patched on the first Tuesday of each month. Production servers must be patched no earlier than seven days after the test servers, and only if no problems have been reported on the test servers during those seven days."

Statement: "Production servers are patched exactly seven days after test servers."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The procedure says production servers are patched "no earlier than seven days after" the test servers — a minimum wait, not a fixed gap. Production patching could happen after eight, ten, or more days. The statement claims the gap is exactly seven days, which the passage does not support. This tests treating qualifier words ("no earlier than", "at least", "unless") as the load-bearing parts of a sentence.

**Question 2 (easy) — What the passage does not say**

Read this notification email:

"Planned maintenance: the file storage service will be unavailable on Saturday from 08:00 to 12:00 while the storage team replaces a network switch. Users should save their work before Friday evening. Email and calendar services are not affected."

Statement: "The maintenance is taking place because the network switch is faulty."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The email says the switch is being replaced but never gives the reason. Switches are also replaced as routine upgrades or for capacity. The passage neither confirms nor denies a fault, so the correct answer is "cannot say". This tests resisting a plausible assumption — the single most important verbal reasoning skill this role needs, since "switch replaced" is what is known and "switch was faulty" would be a guess unless someone states it.

**Question 3 (easy) — Identifying the required action**

Read this extract from the incident logging guide:

"When the service desk transfers a call about a possible infrastructure fault, first record the caller's name, team, and contact number. Next, record which service is affected and what the caller was doing when the problem occurred. Do not attempt to diagnose the fault during the call. Finally, tell the caller their incident reference number before ending the call."

According to the passage, which of the following should be done during the call?

- A) Diagnose the fault while the caller waits.
- B) Record the caller's details and what they were doing, and give them the incident reference number.
- C) Transfer the caller back to the service desk.
- D) Ask the caller to email the details instead.

**Correct answer: B**

**Explanation:** The passage instructs recording the caller's name, team and contact number, recording the affected service and activity, and giving the incident reference before ending the call — all captured by option B. Option A is explicitly forbidden. Options C and D describe actions the passage never mentions. This tests systematic matching of each part of an answer option against a sentence in the text.

**Question 4 (easy) — Meaning in context**

Read this line from a handover note:

"APP-PRD-02 was rebooted at 14:30; the memory alert has cleared, but keep an eye on it — if it recurs, raise a problem ticket rather than another incident."

In this note, "if it recurs" means:

- A) If the server is rebooted again.
- B) If the memory alert happens again.
- C) If the handover note is updated.
- D) If a problem ticket already exists.

**Correct answer: B**

**Explanation:** "Recur" means to happen again, and "it" points back to the most recent relevant subject — the memory alert. This tests reading pronouns carefully, a small skill with big consequences in operational writing, and a strong candidate's answer notices the useful operational idea embedded here: a fault that keeps returning becomes a problem to investigate, not a series of separate incidents.

**Question 5 (moderate) — True/false/cannot-say on a policy extract**

Read this extract from a security policy:

"Administrator passwords must be changed every 90 days. Service accounts are exempt from scheduled password changes, but their passwords must be changed immediately if a team member with knowledge of them leaves the organisation. All password changes must be recorded in the credential management system."

Statement: "If a team member who knows a service account password leaves, that password must be changed and the change must be recorded."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Combine two sentences: service account passwords "must be changed immediately if a team member with knowledge of them leaves" — covering the change — and "all password changes must be recorded" — "all" includes this one, covering the recording. This tests connecting two explicitly stated rules, which is safe deduction, unlike importing an unstated reason.

**Question 6 (moderate) — Choosing the accurate summary**

Read this short report:

"During Tuesday's incident, the monitoring system generated the first alert at 10:04. The on-call engineer acknowledged it at 10:06 and restored the service at 10:41. The root cause has not yet been confirmed, although early evidence points to a failed disk in the storage array. A full review is scheduled for Friday."

Which is the most accurate one-line summary for a handover?

- A) "Tuesday's incident was caused by a failed disk and resolved in 37 minutes."
- B) "Tuesday's incident was resolved in 37 minutes; root cause unconfirmed but a failed disk is suspected; review on Friday."
- C) "Tuesday's incident is still ongoing and under review."
- D) "The monitoring system failed on Tuesday and a review is scheduled."

**Correct answer: B**

**Explanation:** The service was restored 10:04 to 10:41 — 37 minutes, so "resolved in 37 minutes" is fair. The root cause "has not yet been confirmed", so option A overstates the disk theory as fact. Option C is false: only the review remains. Option D blames the monitoring system, which worked correctly. This tests summarising without upgrading a suspicion into a fact — the difference between an honest handover and a misleading one.

**Question 7 (moderate) — Inference from an email**

Read this email from the service desk manager:

"Since Monday's change to the login system, we have received 43 calls about slow logins, compared with a typical 5 per week. We have not received calls about failed logins. Could your team investigate whether the change is related? Until then, we are advising callers that the issue is known and under investigation."

Which conclusion is best supported by the email?

- A) Monday's change definitely caused the slow logins.
- B) Call volumes about slow logins are far above their usual level, and the timing coincides with the change, which justifies an investigation.
- C) The login system is failing for most users.
- D) The service desk has stopped taking calls about logins.

**Correct answer: B**

**Explanation:** The email establishes an unusual volume and a timing coincidence, and explicitly asks whether the change "is related" — the connection is a question, not a conclusion. Option A converts the coincidence into proven cause. Option C exaggerates. Option D misreads the final sentence. This tests holding a conclusion at exactly the strength the evidence supports — "coincides with" rather than "caused by".

**Question 8 (moderate) — Following conditional instructions**

Read this extract from the out-of-hours instructions:

"If a critical alert fires between 18:00 and 08:00, phone the on-call engineer. If the on-call engineer does not answer within 10 minutes, phone the duty manager. For warning alerts during these hours, log a ticket for the day team; do not phone anyone unless the same warning fires three or more times within one hour."

At 22:15 the same warning alert fires for the third time since 21:30. According to the instructions, what should be done?

- A) Log a ticket for the day team and take no further action.
- B) Phone the duty manager immediately.
- C) Phone the on-call engineer, because the warning has fired three times within one hour.
- D) Wait until 08:00 and tell the day team in person.

**Correct answer: C**

**Explanation:** Trace the conditions. The alert is a warning in the 18:00–08:00 window, so the default is log-only. But the exception — "three or more times within one hour" — is triggered (21:30 to 22:15 is 45 minutes). Phoning is now permitted, starting with the on-call engineer; the duty manager applies only if that engineer does not answer within 10 minutes. This tests establishing which conditions are met before choosing the action.

**Question 9 (moderate) — Clear-writing judgement**

A non-technical user needs to be told that their reported issue is fixed. Which message is best?

- A) "The incident has been remediated via a config rollback on the affected node; closing the ticket."
- B) "Your issue with saving documents is now fixed. Please try again and let us know if you have any further problems. We are closing this ticket, but you can reopen it by replying."
- C) "Fixed."
- D) "Following triage and RCA, we executed a rollback per the CAB-approved change; service restored to BAU."

**Correct answer: B**

**Explanation:** Options A and D are written in operations jargon that tells a non-technical user almost nothing. Option C is so brief it fails the user: fixed what? Option B names the issue in the user's terms, states the outcome, tells them what to do next, and leaves the door open. This tests the **User focus** skill in written form: communication succeeds when it works for the reader.

**Question 10 (hard) — True/false/cannot-say with a subtle scope**

Read this extract from a service standard:

"All production servers must send their logs to the central logging platform. Test servers may send logs to the central platform where capacity allows. Logs held on the central platform are retained for 12 months and are accessible to the operations and security teams."

Statement: "Logs from test servers are retained for 12 months."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Two careful steps. First, test server logs reach the platform only "where capacity allows" — sending is optional and conditional. Second, 12-month retention applies to "logs held on the central platform". So a test server's logs are retained 12 months only if they are on the platform, and for any test server not sending logs there, the passage says nothing about retention. This tests scope-tracking — noticing exactly which group each rule covers, distinguishing a universal rule ("all production servers") from a permission ("may … where capacity allows").

**Question 11 (hard) — Reconciling two documents**

Read these two extracts.

Extract 1, from the change schedule: "Change CH-2210: apply security patch to all web servers, Thursday 20:00–22:00. Approved."

Extract 2, from an email sent Wednesday by the change manager: "Please note CH-2210 has been rescheduled to Saturday 06:00–08:00 at the request of the web team, to avoid clashing with Thursday's product launch. The change schedule will be updated tomorrow."

On Thursday morning, a colleague checks only the change schedule and prepares to patch at 20:00. Based on both extracts, which statement is most accurate?

- A) The colleague is right to prepare for Thursday, because the schedule says Thursday and the schedule is the official record.
- B) The patch has been cancelled.
- C) The most current information says the change now happens Saturday 06:00–08:00; the schedule the colleague read had not yet been updated.
- D) The two documents contradict each other, so no one can know when the change will happen.

**Correct answer: C**

**Explanation:** Order the information in time. The schedule shows the original plan. The Wednesday email is later information: the change is rescheduled, and explains why the schedule still shows Thursday ("the change schedule will be updated tomorrow"). The documents do not truly conflict; one is simply newer than the other, and explains the older one's content. This tests reconciling sources by recency and explanation, a skill needed whenever documentation and email disagree.

**Question 12 (hard) — Inference about user needs from a user story**

Read this user story and its acceptance note, written by a service owner:

"As a caseworker, I need the case system to stay available during the lunch period, so that I can complete urgent child-protection referrals without delay. Note: caseworker usage peaks between 12:00 and 14:00, unlike most internal systems, which peak mid-morning. Any maintenance window for the case system must avoid the lunch period."

Which of the following best explains why the standard mid-day maintenance slot used for other internal systems would be wrong for this system?

- A) Because maintenance is never allowed on internal systems.
- B) Because this system's users, unusually, need it most at exactly the time other systems are quietest — and the work they do then is urgent and high-stakes.
- C) Because caseworkers do not take lunch breaks.
- D) Because the system is too old to be maintained safely.

**Correct answer: B**

**Explanation:** The user story states the need, the reason, and the evidence (usage peaks 12:00–14:00, unlike other systems). A mid-day maintenance slot works for most systems precisely because mid-day is quiet for them — but for this system, mid-day is the peak, and the work done then is urgent and serious. This tests reading a user story for the "so that" clause: the need behind the request, which is why standard technical decisions such as a default maintenance window can be wrong for users whose needs do not fit the standard pattern.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say.** This is the single most common error at this level.
- **Note whether a candidate weights qualifier words** ("all", "may", "must", "unless", "no earlier than") as decisive.
- **Watch for outside knowledge being imported** into an answer — the passage is the whole world for this test.
- **Because this is an entry-level candidate, allow generous time**, and consider a brief practice passage before the timed items begin.
- **Use the multi-document item (Question 11) to observe whether a candidate reconciles sources by recency** rather than treating an apparent contradiction as unresolvable.

### Common pitfalls to watch for when scoring

- **Marking a Cannot-say response wrong because it "sounds plausible".** Plausible is not proven.
- **Marking a True response wrong when it correctly combines two explicitly stated sentences** — that is safe deduction, not assumption.
- **Missing when a candidate applies a rule to the wrong subject** — a rule about production servers says nothing about test servers.
- **Missing when a candidate loses track of a pronoun** ("it", "this") in a short passage.
- **Rewarding a jargon-heavy option in a clear-writing item** over one the intended reader would actually understand and act on.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge how effective different responses would be. Unlike the other three assessments, there is no arithmetic and no passage to parse — the material is human: a colleague under pressure, an alert at an awkward moment, a mistake just noticed, a frustrated user. The candidate is typically asked either to pick the most effective response, to pick the most and least effective from a set, or to rate each response on a scale.

The typical format is an online test of 25 to 40 minutes with 12 to 20 scenarios. It is usually untimed or generously timed, because it measures judgement rather than speed. There are no trick questions, but there are carefully written wrong answers: responses that sound decisive but skip escalation, or sound humble but dodge responsibility. Scoring compares the candidate's choices against the judgement of experienced professionals and against the behaviours the organisation values — user focus, collaboration, taking ownership, escalating appropriately, and treating people with respect.

Employers assess this for associate infrastructure operations engineers because, at this level, judgement is mostly about knowing the edges of the role — a genuine skill, not a limitation. Working under the direction of experienced engineers means the most valuable trainee is not the one who tries to solve everything alone, nor the one who asks before every keystroke, but the one who reliably knows which situations to handle, which to check, and which to escalate immediately. Getting it wrong in production environments has real consequences: a well-meaning solo fix can take down a service that citizens depend on, and an unreported mistake can turn a small problem into a large one.

### How this assessment maps to the role

- **Escalation judgement** maps to the **Ownership and topic** skill: showing awareness of problem resolution processes and passing problems on to the team. Many scenarios test exactly when to handle, when to check, and when to escalate.
- **Honesty and accuracy under pressure** map to the **Incident management** skill: gathering the required information means reporting what actually happened — including a candidate's own mistakes — promptly and factually.
- **Curiosity with discipline** maps to the **Problem management** skill: contributing to investigations and remedies without exceeding one's authority or guessing beyond the evidence.
- **Care for the people affected** maps to the **User focus** skill: remembering, in every scenario, that behind each ticket is a person trying to get something done.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — An alert while the supervisor is away**

A candidate is monitoring the dashboard while their supervising engineer is at lunch. A critical alert fires: a production database server has stopped responding. The team's process says critical production alerts must be escalated immediately. What is the most effective response?

- A) Wait until the supervisor returns from lunch so as not to disturb them.
- B) Follow the escalation process immediately: contact the on-call engineer, log the incident, and let the supervisor know.
- C) Restart the database server personally to save time.
- D) Watch the alert for 30 minutes to see whether it clears on its own.

**Correct answer: B**

**Explanation:** The process exists for exactly this moment, and it does not pause for lunch breaks. Option B follows it: escalate immediately, record the incident, and keep the supervisor informed. Option A confuses politeness with effectiveness. Option C exceeds a trainee's remit on a critical production system — a restart at the wrong moment can corrupt data or destroy the evidence needed to diagnose the fault. Option D substitutes hope for action while users are affected. This tests whether a candidate treats escalating fast as the job done well, not as passing the buck.

**Question 2 (easy) — A mistake is made**

While updating the asset register under direction, a candidate accidentally deletes a row containing a server's details, and is fairly sure they could retype it from memory. What is the most effective response?

- A) Retype the row from memory and say nothing — no harm done.
- B) Tell the supervising engineer what happened straight away, and ask whether the record can be restored from a backup or a previous version rather than from memory.
- C) Leave the register as it is and hope nobody notices.
- D) Blame the register software for being confusing.

**Correct answer: B**

**Explanation:** Two values decide this scenario: honesty and accuracy. Option B is honest (reports the mistake promptly) and accurate (restoring from a backup or version history recovers the true data, whereas memory might silently introduce errors). Option A might reconstruct the row correctly, but conceals the incident and gambles on memory. Option C abandons ownership entirely, and option D deflects blame. This tests whether the candidate reports errors immediately, since organisations know everyone makes mistakes while learning, and what is assessed is what happens next.

**Question 3 (easy) — A frustrated user on the phone**

The service desk transfers a call to a candidate. The caller is audibly frustrated: their team's shared drive has been slow all morning and they have a deadline. The candidate's job is to log the incident; the cause is not known. What is the most effective response?

- A) Say "that's not my area" and transfer them back to the service desk.
- B) Tell them the drive seems fine from where the candidate is sitting, so it is probably their laptop.
- C) Listen, acknowledge the frustration, gather the details the incident process requires, give them their reference number, and explain what happens next.
- D) Promise the drive will be fixed within the hour so the caller feels better.

**Correct answer: C**

**Explanation:** Option C does everything within the role and does it with care: treats the caller with respect, captures accurate information (**Incident management**), and sets honest expectations. Option A bounces a frustrated user between teams. Option B dismisses their experience with a guess. Option D is dishonest in effect: a fix time cannot be promised when the cause is unknown, and a broken promise will make the user angrier than the original fault did. This tests the combination of empathy plus accuracy that is user focus from the operations side of a phone call.

**Question 4 (moderate) — Asked to skip a step**

A busy engineer from another team asks a candidate to apply a small configuration change to a test server for them, saying: "No need to raise a change record, it's only test — just do it now, I'll owe you one." The team's process says all configuration changes, including on test servers, need a change record. What is the most effective response?

- A) Apply the change without a record — it is only a test server, and helping colleagues matters.
- B) Refuse rudely and report the engineer to their manager.
- C) Explain that the process requires a change record even for test servers, offer to help raise one quickly, and check with the supervising engineer if the colleague pushes back.
- D) Apply the change secretly but write it down in a personal notebook in case anyone asks.

**Correct answer: C**

**Explanation:** The pressure here is social — a friendly colleague, a small favour, a plausible-sounding shortcut. Option C holds the process line while staying collaborative. Option A breaks a process test-server changes exist to protect, since "only test" systems feed into patching schedules and future production releases. Option B protects the process but wrecks the relationship. Option D is the most corrosive: it knows the change should be recorded yet hides it from the systems that exist to hold that record. This tests integrity under social pressure and constructive collaboration — "yes, via the right route" rather than a blunt "no".

**Question 5 (moderate) — Conflicting instructions**

A supervising engineer asked for the day to be spent checking and updating the asset register. Mid-morning, a different senior engineer from the team asks for help cabling a new rack for the rest of the day. Both cannot be done. What is the most effective response?

- A) Quietly stay on the asset register work, since it was assigned first, and hope the senior engineer forgets.
- B) Switch to the cabling work, since the request came from someone senior.
- C) Explain to the senior engineer that the supervising engineer assigned the register work, and ask the two of them (or message the supervisor) to agree priority before switching.
- D) Try to do both by alternating every half hour.

**Correct answer: C**

**Explanation:** The trap is choosing based on who asked most recently or most senior. As a trainee, task priorities are set through the supervising engineer, and the effective response makes the conflict visible to the people who can resolve it. Option C is transparent, respectful, and correct. Option A avoids the conversation. Option B silently abandons work the supervisor assigned. Option D serves both tasks badly. This tests communication and appropriate escalation when two legitimate instructions collide.

**Question 6 (moderate) — Something odd that nobody mentioned**

During a routine morning check, a production server's backup job is noticed to have shown "completed with warnings" for the past four nights. No alert has fired, nobody has mentioned it, and the checklist only says to confirm the job ran. What is the most effective response?

- A) Do nothing — the checklist only requires confirming the job ran, and it ran.
- B) Mention it to the supervising engineer, show them the four nights of warnings, and ask whether it should be logged as a problem for investigation.
- C) Delete the warning messages so the report looks clean.
- D) Rerun the backup job personally to see if the warnings disappear.

**Correct answer: B**

**Explanation:** This scenario tests the difference between doing the checklist and doing the job. Four consecutive nights of warnings is a pattern, and patterns are the raw material of problem management. Option B shows proactive awareness: notice, gather evidence, pass it to the team through the right person, framed as a question rather than a diagnosis. Option A is technically compliant and professionally hollow. Option C is falsification. Option D acts on a production backup system beyond the role's remit, and might mask the warnings without fixing whatever causes them.

**Question 7 (moderate) — Learning versus delivery pressure**

A supervising engineer is walking a candidate through diagnosing a network fault — a genuine learning opportunity. Halfway through, the service desk calls: a user needs their incident reference number from this morning, which only the candidate logged. The engineer says "we're at the interesting bit". What is the most effective response?

- A) Ignore the service desk call; learning comes first.
- B) Abandon the diagnosis session entirely and spend the rest of the hour with the service desk.
- C) Ask the engineer for two minutes, quickly look up and pass on the reference number, then rejoin the diagnosis session.
- D) Tell the service desk to find the number themselves.

**Correct answer: C**

**Explanation:** Weigh the two demands honestly. The user's need is small but real and time-bound. The learning session is valuable but can pause for two minutes without harm. Option C serves both. Option A inverts user focus. Option B overcorrects. Option D fails the user and pushes work onto colleagues who cannot do it. This tests proportionality: interruptions should cost what they need to cost and no more, with an ownership lesson too — logging the incident carries the follow-through.

**Question 8 (moderate) — A colleague's risky shortcut**

A fellow trainee is noticed logging into a shared administrator account using a password taped to the desk, rather than their own account, "because it's faster". The team's security guidance says administrative access must use individual accounts and passwords must never be written down. What is the most effective response?

- A) Say nothing — both are trainees, and it is not the candidate's place.
- B) Speak to the colleague directly and kindly: point out the guidance, suggest removing the taped password and using their own account, and if the practice continues, raise it with the supervising engineer.
- C) Immediately report them to the security team without speaking to them.
- D) Start using the taped password too, since it is clearly team custom.

**Correct answer: B**

**Explanation:** Security scenarios test whether a candidate acts at all, and then whether they act proportionately. Option B does both: a direct, friendly conversation gives the colleague a chance to fix an honest mistake, and the follow-up condition ensures the risk does not simply persist. Option A treats speaking up as above the candidate's grade. Option C skips the collegial step that would usually resolve it. Option D spreads the bad practice. This tests courage to raise concerns, respect for colleagues, and commitment to doing things properly.

**Question 9 (hard) — Pressure to close tickets**

It is the last day of the month, and the team's ticket-closure statistics are being reported tomorrow. An engineer says, half-joking: "Close out those five old incidents you logged — just mark them resolved, nobody checks. It makes our numbers look better." At least two of the five issues have not actually been confirmed as fixed with the users who reported them. What is the most effective response?

- A) Close all five — the engineer knows the team's ways better.
- B) Close the three that seem genuinely done, and quietly leave the other two open; say nothing about the request.
- C) Explain discomfort with marking unconfirmed incidents as resolved, offer to contact the two users today to check whether their issues are actually fixed, and mention the conversation to the supervising engineer if pressured further.
- D) Refuse and immediately email the whole team about the engineer's unethical behaviour.

**Correct answer: C**

**Explanation:** This scenario layers social pressure over a data-integrity issue with a user-focus cost: an incident closed without confirmation is a user abandoned. Option C declines the improper part clearly but without hostility, offers a constructive alternative, and keeps the escalation route ready if pressure continues. Option A outsources integrity to someone else's seniority. Option B gets the records half-right but ducks the interpersonal issue. Option D detonates a legitimate concern into public accusation. This tests integrity, user focus, constructive challenge, and proportionate escalation, in that order.

**Question 10 (hard) — The unattended mystery**

Arriving early, a candidate alone in the office notices the monitoring dashboard shows a production web server went offline at 06:40 — twenty minutes ago. No alert email was sent (it should have been), the on-call engineer has not been contacted, and nothing is logged. The team starts arriving in about half an hour. What is the most effective response?

- A) Log the incident now, contact the on-call engineer per the escalation process, and separately note that the alert email failed to send — two issues, both reported.
- B) Wait for the team to arrive; twenty more minutes will not matter.
- C) Restart the web server — early morning is a quiet time, so it is low risk.
- D) Log the incident but do not contact anyone, since the on-call window is nearly over.

**Correct answer: A**

**Explanation:** There are two faults here, not one: a production server offline, and the quieter, arguably more serious fault that the alerting system failed. Option A handles both through the proper channels. Option B wastes the exact advantage of being the person who noticed. Option C repeats the trap of a solo production restart with no one else aware, no incident logged, and no diagnosis. Option D follows half the process and abandons the half that gets the service fixed. This tests proactive ownership: applying the process faithfully even when the alert itself failed to arrive.

**Question 11 (hard) — Most and least effective**

A team is rolling out a change tonight that will briefly interrupt an internal service. This morning, the user-facing notice — drafted by the candidate and approved by their supervisor — is found to state the wrong date: tomorrow night, not tonight. Users are planning around wrong information. Which is the MOST effective and which is the LEAST effective?

1. Tell the supervising engineer immediately, own the drafting error, and offer to send a corrected notice as soon as they approve it.
2. Send a corrected notice right now without telling anyone, so the error is fixed fastest.
3. Say nothing — the interruption is brief, and most users will not notice.
4. Mention it casually to a teammate at lunch and see what they think should be done.

- A) Most effective: 1; least effective: 3
- B) Most effective: 2; least effective: 4
- C) Most effective: 1; least effective: 2
- D) Most effective: 4; least effective: 3

**Correct answer: A**

**Explanation:** Response 1 is the strongest: fast, honest, user-focused, and properly governed — the correction goes out through the same approval that the original had. Response 3 is the weakest: it knowingly leaves users with false information, gambling that a service interruption they were not warned about will not matter. Response 2 is flawed but not worst: its speed genuinely serves users, but bypassing the supervisor repeats the conditions that caused the first error. Response 4 delays action on a time-critical issue. This tests judging each response against honesty, user focus, ownership, and the right channel — and recognising that a well-meant wrong action usually ranks above a deliberate silence.

**Question 12 (hard) — Feeling out of a candidate's depth**

Three weeks into the role, a supervising engineer asks the candidate to run the Friday morning checks alone for the first time, saying "you're ready". Privately, the candidate is not confident about two of the fifteen steps, having only watched them done once. It is Thursday afternoon. What is the most effective response?

- A) Say nothing and attempt all fifteen steps on Friday; the two uncertain ones can probably be worked out.
- B) Say not ready and ask the engineer to keep doing the checks for another month.
- C) Say the candidate is glad to take it on, name the two steps that are unsure, and ask to walk through just those two together before Friday — or to have the engineer on call when reaching those steps.
- D) Ask another trainee to do the two difficult steps on Friday.

**Correct answer: C**

**Explanation:** This scenario measures self-awareness and honest communication about one's own limits — a behaviour that matters enormously in operations, where overconfidence causes outages. Option C accepts the development opportunity and targets the genuine gap with a specific, low-cost request. Option A gambles with production checks. Option B overcorrects, stalling development over two steps out of fifteen. Option D hides the gap from the one person who should know about it. This tests recognising that "yes, and here is the specific support I need" is almost always a stronger answer than either silent struggle or blanket refusal.

### Administration tips

- **Score for whether a candidate escalates rather than attempts a solo fix on production systems** — the recurring, defining test at this level.
- **Watch for whether a candidate reports their own mistakes promptly and factually** rather than concealing or minimising them.
- **Note whether a candidate holds a process line under social pressure while remaining collaborative and constructive.**
- **Because this is an entry-level candidate, allow generous or untimed conditions**, since judgement, not speed, is being measured.
- **Use the "out of a candidate's depth" item (Question 12) to observe whether a candidate asks for specific, targeted support** rather than either silent struggle or blanket refusal.

### Common pitfalls to watch for when scoring

- **Rewarding the "hero" option** — solo fixes on production systems that feel decisive but bypass escalation.
- **Rewarding pure deference** ("do whatever the senior person says") when a request conflicts with process or integrity.
- **Missing a "quiet fix" option** where a candidate resolves something without a record, report, or escalation.
- **Crediting a promise of an uncertain outcome or fix time** as kindness to a frustrated user, rather than as a failure of honesty.
- **Missing when a candidate over-escalates** a matter a direct conversation would resolve, or under-escalates a matter genuinely requiring formal action.

## Conclusion

This document has given you a set of practice materials covering all four assessment types most relevant to an associate infrastructure operations engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement, built from scenarios genuinely close to the role — server naming patterns, checklists, alert groupings, timelines of changes, disk percentages, ticket averages, uptime targets, procedures, policies, emails, user stories, and the everyday dilemmas of a trainee working under direction.

The cognitive section checks naming patterns against conventions, traces timelines through changes, and reasons carefully about rules with exceptions. The numeric section covers disk usage percentages, growth forecasting, uptime arithmetic, and rate-versus-count reasoning. The verbal section checks the True/False/Cannot say discipline and precise reading of procedures, policy extracts, and user stories. The situational judgement section rehearses the behaviours that make an associate genuinely valuable: escalating early, admitting mistakes quickly, handing over properly, helping colleagues, and holding onto process and security under friendly pressure.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. Because this is an entry-level candidate, a supportive debrief matters especially — a candidate who reasons well but is simply new to the format is a different signal from one who guesses or shows a genuine gap. A short, kind conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can support live infrastructure safely, follow procedure precisely, and escalate honestly and promptly — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
