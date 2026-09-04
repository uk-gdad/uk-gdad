# Associate Application Operations Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for associate application operations engineer, within the UK Government Digital and Data profession. The candidate is either applying for this role or being considered for progression into it, and this material gives you a structured, job-specific instrument to present to them.

A psychometric assessment is a structured set of questions that measures the thinking skills and workplace judgement that predict success in a job. Employers across government use assessments like this when people apply for roles, move between teams, or take part in development programmes — and workplace job-specific assessments, tied to the real duties of a role rather than generic aptitude, give a fairer and more informative picture than an abstract test.

This particular role is a good fit for job-specific material, because an associate application operations engineer's daily work already exercises the exact abilities these assessments measure: identifying and registering incidents draws on error checking and logical thinking; reading ticket queues and monitoring screens draws on pattern recognition; reading runbooks, knowledge base articles and service desk emails draws on verbal comprehension; and the day-to-day judgement calls of working under direction in a busy team draw on situational judgement.

This document is organised into four assessment sections:

1. A workplace job-specific cognitive assessment — patterns, logic, error checking, and prioritising.
2. A workplace job-specific numeric reasoning assessment — percentages, averages, and reading tables of the kind of data this team handles, such as ticket volumes and service levels.
3. A workplace job-specific verbal reasoning assessment — reading short workplace passages and answering questions carefully.
4. A workplace job-specific situational judgement assessment — realistic workplace situations for someone at this level, with questions about the most effective and least effective responses.

Each section explains what the assessment measures and what the format usually looks like, maps it to the actual skills in the role, then gives a set of items that start easy and get harder, each with the correct answer and a full worked explanation you can use as an answer key. Every section closes with administration notes and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate you assess for this role level — consistency is what makes the comparison meaningful and defensible. Hold the correct answers and explanations back from the candidate until after they have answered; they are your scoring key, not a study guide to hand over in advance. Give the candidate the item instructions plainly, let them work through it without interruption, and keep a note of anything unusual about the conditions (an interruption, extra time given, a technical issue) so the record is honest. Afterwards, use the explanations to structure a debrief: what a strong answer looked like, and why. This assessment is one input among several — pair it with a look at the candidate's experience, a conversation, and whatever else your process requires; see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures how well a candidate thinks through everyday work problems. Instead of abstract puzzles about shapes and symbols, it uses realistic material from a job like this one: incident tickets, monitoring alerts, runbooks, log entries, and support rotas. The items ask the candidate to spot patterns, follow rules to a logical conclusion, check details for errors, decide what to do first, and solve small practical problems.

The typical format is an online, timed test lasting between 15 and 30 minutes, with somewhere between 15 and 30 questions, each usually with four answer options and exactly one correct answer. Many modern platforms are adaptive, so items get slightly harder after a correct answer and slightly easier after an incorrect one — worth knowing if you are watching a live session, since increasing difficulty can be a sign the candidate is doing well rather than struggling. Scoring is objective and usually compares the candidate's answers against a norm group. Most platforms offer a couple of ungraded warm-up items first, so the candidate can get used to the screen layout before anything is scored.

Why does this matter for this role? Because accuracy under time pressure is the heart of the job. When an incident comes in, the engineer needs to read it carefully, notice what information is missing, follow the routing rules correctly, and allocate it to the appropriate channel. A small slip — the wrong category, a missed detail, a step done out of order — can slow down the whole team. A cognitive assessment is a safe, low-stakes way to measure exactly that carefulness and clear thinking before someone is trusted with it on the job.

One note for calibrating your expectations: at associate level, this material is aimed at people early in their careers. The items below start gently and build up, and every one is grounded in tasks an associate genuinely does — identifying and registering incidents, gathering required information, passing problems to the team, and following the team's processes. Do not expect the polish of a senior engineer's answer; look instead for care, method, and a willingness to check.

### How this assessment maps to the role

Each thinking skill measured connects directly to a named skill in the role's summary:

- **Pattern recognition** maps to **Problem management**. When investigating problems in systems, processes and services, the first clue is often a pattern: the same error appearing at the same time each day, the same application failing after each update, the same users reporting the same issue. Spotting the pattern is the start of every investigation.
- **Logical deduction** maps to **Incident management**. Registering incidents and allocating them to the appropriate channel means applying routing rules correctly: if the incident matches this condition, it goes to that channel. Deduction items test whether the candidate follows rules exactly, without adding assumptions.
- **Error checking** also maps to **Incident management**, because gathering the required information means noticing when a ticket is incomplete or inconsistent — a missing contact detail, a wrong application name, a severity that does not match the description.
- **Prioritisation** maps to **Ownership and topic**. Showing awareness of problem resolution processes includes knowing what needs attention first and when to pass problems on to the team rather than sitting on them.
- **Applied problem solving** maps to **Problem management** and **User focus** together. Understanding whether a problem is strategic, tactical or operational, and contributing to remedies and preventative measures, means reasoning step by step from evidence — always remembering the user need behind the ticket.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in ticket references**

A team's ticketing system creates incident references in a fixed pattern: the letters "INC", then a dash, then the two-digit year, then a dash, then a five-digit number (for example, INC-26-00417). While tidying a spreadsheet, a candidate sees these five references:

1. INC-26-00512
2. INC-26-00513
3. INC-2600514
4. INC-26-00515
5. INC-26-00516

Which reference breaks the pattern?

- A) Reference 1
- B) Reference 2
- C) Reference 3
- D) Reference 5

**Correct answer: C**

**Explanation:** Working through the pattern piece by piece — "INC", a dash, a two-digit year, another dash, then five digits — references 1, 2, 4 and 5 all follow it exactly. Reference 3 is missing the second dash, reading "INC-2600514" instead of "INC-26-00514". This is a small detail, but small details matter in this role: a malformed reference can stop a ticket being found later, break links between related records, and slow down an investigation. A strong candidate checks each element of a pattern in order rather than glancing at the whole string, since the eye will happily "auto-correct" a missing character otherwise — the same element-by-element checking the role needs when gathering the required information for an incident record.

**Question 2 (easy) — Logical deduction from a routing rule**

A team's routing rule says: "Every incident affecting the payments application must be allocated to the Payments Support channel, unless the incident is flagged as a security issue, in which case it must be allocated to the Security channel." A new incident affects the payments application. Which one of the following must be true?

- A) The incident must be allocated to the Payments Support channel.
- B) The incident must be allocated to the Security channel.
- C) The incident must be allocated to either the Payments Support channel or the Security channel.
- D) The incident should wait until a senior engineer decides.

**Correct answer: C**

**Explanation:** The rule has two branches. If the incident is not flagged as a security issue, it goes to Payments Support; if it is, it goes to Security. The item does not say whether the security flag applies, so neither A nor B is individually guaranteed — each is only possible. What is guaranteed is that one of the two branches applies, which is exactly what option C says. Option D invents a step the rule does not contain. This item tests whether the candidate concludes only what the given information guarantees, nothing more — the same discipline that keeps allocation accurate on the job, where the flag is checked first and the routing follows, rather than being guessed at.

**Question 3 (easy) — Error checking an incident record**

A team requires every incident record to contain: (i) the affected application name, (ii) the reporting user's contact details, (iii) a severity level from 1 to 4, and (iv) a short description. A candidate is reviewing this draft record before submitting it:

- Application: Case Tracker
- Contact: j.smith@department.gov.uk
- Severity: 5
- Description: User cannot save case notes; error message "save failed" appears each time.

What is wrong with the record?

- A) The application name is missing.
- B) The severity level is outside the allowed range.
- C) The description is too long.
- D) Nothing is wrong.

**Correct answer: B**

**Explanation:** Checking each required field against its rule: the application name is present ("Case Tracker"), so A is wrong; the contact details are present; the description is short, clear, and includes the exact error message — a good description, not a fault, so C is wrong. The severity, however, is recorded as 5, and the allowed range is 1 to 4, so the record fails validation. This is the "gathering the required information" part of the **Incident management** skill: before an incident is allocated to a channel, someone must confirm the record is complete and valid. A strong candidate sweeps systematically through every field rather than stopping at the first field that looks fine.

**Question 4 (easy) — Following a runbook sequence**

A runbook for restarting the reporting application lists these steps in order: (1) notify the service desk that a restart is starting; (2) put the application into maintenance mode; (3) restart the application service; (4) run the health check script; (5) take the application out of maintenance mode; (6) notify the service desk that the restart is complete. A colleague performed the steps in this order: 1, 2, 3, 5, 4, 6. What is the risk created by their ordering?

- A) The service desk was never told the restart was happening.
- B) The application was never restarted.
- C) Users could reach the application before the health check confirmed it was working.
- D) There is no risk; the order does not matter.

**Correct answer: C**

**Explanation:** Comparing the performed order with the runbook order step by step: steps 1, 2 and 3 match, then the colleague swapped steps 4 and 5, taking the application out of maintenance mode before running the health check. That means real users could reach the application during the window when nobody yet knew whether the restart had worked — and if the health check had then failed, users would have been using a broken application. Options A and B are contradicted by the list (steps 1 and 3 were done), and D ignores why the runbook puts verification before release. Runbooks encode the team's hard-won experience — following them in order is a core part of working under direction, and a strong candidate should notice when an order has been changed, since that is a valuable observation even at associate level.

**Question 5 (moderate) — Pattern recognition in application logs**

A candidate is watching the error log for a document upload application, and notices "timeout" errors at these times: 09:00, 09:30, 10:00, 10:30, 11:00. Each error lasts less than a minute. Which explanation best fits the pattern and would be most useful to mention when passing this to the team?

- A) The errors are random and there is nothing to report.
- B) The errors occur every 30 minutes on the hour and half hour, which suggests a scheduled task or job may be involved.
- C) The application is completely down.
- D) Users are uploading documents incorrectly.

**Correct answer: B**

**Explanation:** The spacing — 09:00, 09:30, 10:00, 10:30, 11:00 — is a perfectly regular 30-minute interval, aligned to the clock. Regular, clock-aligned errors are a classic signature of something scheduled: a batch job, a backup, a report generation task, or a monitoring probe that briefly overloads the application. Option A ignores an obvious pattern. Option C overstates the evidence — errors lasting under a minute every half hour mean the application is mostly up. Option D invents a cause with no supporting evidence and unfairly blames users. The behaviour this item rewards is exactly what the **Problem management** skill describes: investigating enough to describe the pattern clearly, then passing the problem to the team with that useful observation attached. "Timeouts every 30 minutes on the hour and half hour" gives an experienced engineer an immediate head start.

**Question 6 (moderate) — Prioritisation of a morning workload**

It is 09:05 on Tuesday. Four items are in front of a candidate:

1. A senior engineer has asked the candidate to gather log files for a live severity 2 incident they are working on right now.
2. The candidate's queue contains six new routine tickets waiting to be registered and allocated.
3. The candidate promised to update a knowledge base article by the end of the week.
4. An automated alert says the test environment (used only by the development team, not by end users) is down.

Which order of attention is most sensible?

- A) 3, 2, 1, 4 — keep the promise first
- B) 1, 2, 4, 3 — support the live incident, then clear the queue, then flag the test environment, then the article
- C) 4, 1, 2, 3 — alerts always come first
- D) 2, 1, 3, 4 — first in, first out

**Correct answer: B**

**Explanation:** Weighing urgency and impact together: item 1 is both urgent and high impact — a live severity 2 incident affects real users now, and a senior engineer is waiting — supporting the team's incident work under direction is the core of this role. Item 2 comes next, since unregistered tickets may hide something important and registering and allocating them is bread-and-butter work. Item 4 matters, but the test environment affects developers rather than end users, so it can be flagged after the queue. Item 3 has a Friday deadline and can safely wait until the urgent work is done. Option A confuses a soft promise with a hard priority; option C treats all alerts as equally urgent regardless of impact; option D uses arrival order instead of importance. This item rewards reasoning about impact and urgency together, never a single rule applied blindly — worth probing further at debrief if the candidate's reasoning was sound but they picked the wrong order.

**Question 7 (moderate) — Logical deduction from escalation rules**

A team's escalation rules state: (i) if a severity 1 incident is not acknowledged within 15 minutes, it must be escalated to the duty manager; (ii) if any incident remains unresolved after 4 hours, it must be reviewed at the next team stand-up. A severity 1 incident was raised at 14:00 and acknowledged at 14:10. It was resolved at 17:30. Which of the following must be true?

- A) The incident was escalated to the duty manager.
- B) The incident must be reviewed at the next team stand-up.
- C) Both A and B.
- D) Neither A nor B.

**Correct answer: D**

**Explanation:** Testing each rule against the facts: rule (i) — the incident was acknowledged at 14:10, ten minutes after it was raised, within the 15-minute limit, so the escalation condition was never triggered and A is not required. Rule (ii) — the incident was resolved at 17:30, 3 hours 30 minutes after 14:00, under the 4-hour threshold, so the stand-up review condition was never triggered either, and B is not required. Since neither condition fired, the answer is D. The common trap is feeling that a severity 1 incident "must surely" involve escalation or review, but this item tests whether the candidate applies the written rule to the actual numbers rather than a general impression — the same precision the job needs, since escalating when the rules do not require it wastes senior colleagues' time, while failing to escalate when they do require it delays help.

**Question 8 (moderate) — Error checking a severity mapping table**

A team uses this severity guide:

| Severity | Meaning | Example |
|---|---|---|
| 1 | Whole service down for all users | Application unreachable for everyone |
| 2 | Major feature down for many users | Document upload failing for all users |
| 3 | Minor feature affected, workaround exists | One report format broken; another format works |
| 4 | Cosmetic issue, no loss of function | Logo displaying at wrong size |

A colleague has drafted four tickets. Which one has been given the wrong severity?

- A) "Application unreachable for everyone" — Severity 1
- B) "Search feature down for all users of the case system" — Severity 2
- C) "Spelling mistake on the help page" — Severity 3
- D) "One export format broken; CSV export still works" — Severity 3

**Correct answer: C**

**Explanation:** Checking each ticket against the table: A matches the severity 1 example exactly. B describes a major feature down for many users, fitting severity 2. D describes a minor feature affected with a workaround available (CSV still works), fitting severity 3. C, however, is a spelling mistake — a cosmetic issue with no loss of function — which the table maps to severity 4, not 3. Classifying it as severity 3 would make it look more urgent than it is, distorting the queue for the whole team. This is a realistic associate task: severity classification is part of gathering the required information and allocating incidents correctly, and the way to get it right is to match the description to the definitions in the guide, not to a gut feeling about how annoying an issue sounds.

**Question 9 (moderate) — Applied problem solving with monitoring facts**

The web application a candidate supports runs on two servers, Server A and Server B, behind a load balancer that shares users between them. Users report that "roughly half the time" pages fail to load, and refreshing sometimes fixes it. Monitoring shows Server A responding normally and Server B not responding at all. What is the most reasonable explanation to note when registering this incident?

- A) The load balancer is broken and must be replaced.
- B) Server B appears to be down, so requests sent to it fail while requests sent to Server A succeed — matching the "roughly half the time" reports.
- C) Users are imagining the problem, because Server A is healthy.
- D) The application code has a bug affecting all servers.

**Correct answer: B**

**Explanation:** Connecting the evidence: the load balancer shares users between two servers, so if Server B is down, roughly half of requests — those routed to Server B — will fail, while the other half succeed on Server A. Refreshing sometimes fixes it because a refresh may be routed to the healthy server. Every reported symptom fits this explanation. Option A blames the load balancer, but sharing traffic is exactly what the evidence shows it doing. Option C dismisses users even though monitoring confirms a real fault — this is where the **User focus** skill bites: user reports are evidence, not noise. Option D contradicts the monitoring, which shows Server A responding normally. A strong candidate would register the incident with this reasoning noted and pass it promptly to the team — a clearly described hypothesis speeds up the fix.

**Question 10 (hard) — Multi-constraint scheduling**

A maintenance task on the HR application needs a two-hour window and must follow these constraints: (i) it must happen between Monday and Friday; (ii) it cannot run during business hours, which are 09:00 to 17:00; (iii) the senior engineer supervising the candidate is only available Monday, Wednesday and Thursday; (iv) the overnight backup runs 22:00 to 00:00 every night, and the task cannot overlap it; (v) the task must finish before 22:00 or start after 00:00, and the team prefers evening slots over early-morning slots. Which slot satisfies all constraints and the team's preference?

- A) Wednesday 17:30 to 19:30
- B) Tuesday 18:00 to 20:00
- C) Thursday 21:00 to 23:00
- D) Monday 10:00 to 12:00

**Correct answer: A**

**Explanation:** Applying each constraint as a filter: constraint (ii) removes D, which sits inside business hours. Constraint (iii) removes B, since the supervising senior engineer is not available on Tuesday — and as a trainee working under direction, supervision is a genuine constraint, not a nice-to-have. Constraints (iv) and (v) remove C: a 21:00 start with a two-hour duration runs until 23:00, overlapping the 22:00 to 00:00 backup and breaking the "finish before 22:00" rule. That leaves A: Wednesday 17:30 to 19:30 is outside business hours, on a day the senior engineer is available, finishes well before the backup, and is an evening slot, matching the team's preference. The technique this item rewards is elimination: testing every option against every constraint rather than trying to construct the answer from scratch — quicker and far less error-prone.

**Question 11 (hard) — Classifying a problem's level**

A team asks a candidate to help sort three problems by level: strategic, tactical, or operational. The problems are: (P1) a single user's saved search keeps disappearing and needs to be restored each time; (P2) the case application's database server is running out of disk space and will need a bigger allocation within the next month; (P3) the case application is built on a software platform whose supplier has announced end of support in three years, so the department will eventually need to replace or re-platform it. Which classification is most reasonable?

- A) P1 strategic, P2 tactical, P3 operational
- B) P1 operational, P2 tactical, P3 strategic
- C) P1 tactical, P2 strategic, P3 operational
- D) P1 operational, P2 strategic, P3 tactical

**Correct answer: B**

**Explanation:** The **Problem management** skill asks a candidate to understand the level of a problem: strategic, tactical, or operational. Operational problems are immediate, day-to-day issues affecting current work — P1, a single user's recurring inconvenience handled through routine support, fits that. Tactical problems need planned action over weeks or months and often involve resources or process changes — P2, disk space that must be expanded within a month, is a classic tactical issue: not an emergency today, but needing a plan soon. Strategic problems affect long-term direction and major decisions — P3, replacing an entire platform because of supplier end of support in three years, will involve budgets, procurement and senior decision makers, making it strategic. Options A, C and D each misplace at least one problem. Getting the level right matters because it determines who needs to know and how quickly — a candidate who can say "I think this one is bigger than day-to-day" and pass it upward is demonstrating a genuinely useful associate-level judgement.

**Question 12 (hard) — Combining conditions across a runbook and an alert**

The runbook for the licensing application says: "If the nightly data load fails, re-run it before 08:00. If the re-run also fails, raise a problem record and do not re-run again. If the data load succeeds but takes longer than 90 minutes, add a note to the weekly performance log." This morning a candidate finds: the nightly load failed at 02:00; the automatic re-run started at 03:00 and completed successfully at 04:45. What should be done?

- A) Raise a problem record and stop.
- B) Re-run the load a third time to be safe.
- C) Nothing — the re-run succeeded, so no further action is needed.
- D) Add a note to the weekly performance log, because the successful re-run took longer than 90 minutes.

**Correct answer: D**

**Explanation:** Walking through the conditions in order: the nightly load failed, so a re-run was required before 08:00 — that happened, starting at 03:00. Did the re-run also fail? No — it completed successfully at 04:45, so the "raise a problem record" branch does not apply, ruling out A. Option B is explicitly against the runbook's spirit and unnecessary after a success. The subtle part: the runbook says a successful load that takes longer than 90 minutes must be noted in the performance log, and the re-run started at 03:00 and finished at 04:45 — 1 hour 45 minutes, or 105 minutes, longer than 90 minutes. So the correct action is D, and option C misses this final condition. This item exists because real runbooks have exactly these layered conditions, and the strongest candidates are the ones who read all the way to the end and apply every applicable rule, not just the first one.

### Administration tips

- **Give the candidate the real materials, not abstractions.** If your organisation has anonymised sample tickets, runbooks or severity guides, pointing a candidate at them beforehand (without the assessment items themselves) helps them prepare fairly.
- **Time the session consistently.** Use the same time allowance for every candidate at this level, and note if anything disrupted the session.
- **Watch for method, not just answers.** For error-checking items, a candidate who visibly works through fields in order is demonstrating the habit the job needs, even if they occasionally slip.
- **Score against the rule as written.** Deduction items are designed to catch a plausible-sounding answer that adds an assumption the rule does not support — mark against the stated rule, not what "feels" right.
- **Debrief using the explanations.** After scoring, walk the candidate through where their reasoning matched or diverged from the explanation — this is often more useful to them than the score itself.
- **Keep the session calm.** Cognitive performance drops under unnecessary pressure; a calm, well-explained session gets a truer measure of ability than a rushed one.

### Common pitfalls to watch for when scoring

- **Adding assumptions to rules.** A candidate who invents a condition a rule does not mention is showing a pattern worth probing further — the job rewards conclusions the evidence actually supports.
- **Stopping at the first plausible option.** Options are often written so an early one looks fine until later ones are checked; a candidate who picks quickly without comparing all four may be guessing.
- **Letting severity feel emotional.** A confident-sounding answer that classifies by how alarming an issue sounds, rather than against the severity guide, is a sign to probe the candidate's method at debrief.
- **Ignoring units and durations.** Answers that skip converting "1 hour 45 minutes" to 105 minutes before comparing against a threshold like "90 minutes" often reveal a rushed rather than careful approach.
- **Rushing the easy items.** A candidate who loses marks on early, easy items despite doing well later may simply have been settling in — worth noting in your record rather than over-weighting.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the numbers this job actually produces. For an application operations team, that means ticket volumes, resolution counts, service level agreement (SLA) percentages, response times, uptime figures, and simple trends over days, weeks and months. The candidate will be asked to read small tables and charts, calculate percentages, averages, ratios and rates, and interpret what the numbers mean for the service.

The typical format is an online, timed test lasting 20 to 30 minutes, with 15 to 20 questions. Each item presents some data — often a table — and four answer options. Calculators are usually allowed, and rough paper helps. As with cognitive items, many platforms adapt difficulty to performance, and scores compare the candidate against a norm group. Speed matters, but accuracy matters more: a steady, careful pace with correct working beats a rushed pace with slips.

Why does this matter for the role? Because operations runs on numbers. The team reports how many incidents arrived, how many were resolved within SLA, how long the application was available, and whether things are getting better or worse. Even at associate level, a candidate will read these figures in dashboards and stand-ups, and may help gather them. Someone who can spot that "94% of 50 tickets" and "94% of 500 tickets" are very different situations, or that a rising trend in timeouts deserves a mention, is genuinely useful from day one.

A note on calibration: the arithmetic in this material is deliberately manageable — percentages, averages, ratios, and differences, nothing beyond school-level maths. The skill being tested is applying that arithmetic carefully to workplace data, under mild time pressure, without mixing up what the numbers refer to. Every item uses data of the kind the team genuinely handles, and every explanation shows the arithmetic step by step for your reference when scoring.

### How this assessment maps to the role

- **Percentages and SLA figures** map to **Incident management**. Incident work is measured with percentages: the share of incidents acknowledged on time, resolved within target, or reopened. Registering incidents accurately is what makes those percentages trustworthy in the first place.
- **Averages and rates** map to **Problem management**. Investigating problems often starts with numbers: the average number of errors per day, the rate of failures per week, and whether a remedy actually reduced the numbers afterwards.
- **Reading tables and trends** maps to **Ownership and topic**. Showing awareness of problem resolution processes includes reading the team's dashboards, noticing when a number moves in the wrong direction, and passing that observation to the team promptly.
- **Interpreting user-related data** maps to **User focus**. Numbers about complaints, satisfaction scores, and usage tell a candidate about user experience, and understanding what a percentage of affected users really means keeps the user need at the centre of the work.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage of tickets resolved**

On Monday a team received 40 incident tickets and resolved 30 of them the same day. What percentage of Monday's tickets were resolved the same day?

- A) 30%
- B) 70%
- C) 75%
- D) 80%

**Correct answer: C**

**Explanation:** A percentage is the part divided by the whole, multiplied by 100: 30 ÷ 40 = 0.75, and 0.75 × 100 = 75%. A common slip is answering 30% by confusing the count of resolved tickets with a percentage — a strong candidate always asks "out of how many?" before writing an answer. This is exactly the kind of figure the team reports at stand-ups, and understanding how it is calculated helps a new starter spot when a dashboard number looks wrong.

**Question 2 (easy) — Average tickets per day**

Over five days, a team logged the following numbers of new incidents: Monday 22, Tuesday 18, Wednesday 25, Thursday 20, Friday 15. What was the average (mean) number of new incidents per day?

- A) 18
- B) 20
- C) 22
- D) 25

**Correct answer: B**

**Explanation:** The mean is the total divided by the number of days: 22 + 18 + 25 + 20 + 15 = 100, and 100 ÷ 5 = 20. A quick sense-check — the average should sit between the smallest value (15) and the largest (25), and it does — catches most arithmetic slips in a couple of seconds. Teams use daily averages to plan cover, so a candidate who can produce and sanity-check this figure quickly is demonstrating a genuinely useful habit.

**Question 3 (easy) — Reading an SLA table**

A team's SLA target is to acknowledge 95% of incidents within 15 minutes. This month's report shows:

| Week | Incidents | Acknowledged within 15 min |
|---|---|---|
| 1 | 60 | 57 |
| 2 | 80 | 76 |

In which week (or weeks) did the team meet the 95% target?

- A) Week 1 only
- B) Week 2 only
- C) Both weeks
- D) Neither week

**Correct answer: C**

**Explanation:** Calculating each week separately: Week 1, 57 ÷ 60 = 0.95, exactly 95%; Week 2, 76 ÷ 80 = 0.95, also exactly 95%. Both weeks meet the target. A useful shortcut is visible here — 95% of 60 is 57 (5% of 60 is 3, and 60 − 3 = 57), and 95% of 80 is 76 (5% of 80 is 4, and 80 − 4 = 76) — and a candidate who reaches for it is showing comfort with the team's everyday SLA arithmetic rather than relying on long division for every figure.

**Question 4 (moderate) — Percentage change in ticket volume**

The reporting application generated 150 incident tickets in March and 180 in April. What was the percentage increase from March to April?

- A) 16.7%
- B) 20%
- C) 30%
- D) 83.3%

**Correct answer: B**

**Explanation:** Percentage change is the difference divided by the original value, times 100: 180 − 150 = 30, and 30 ÷ 150 = 0.2, giving 20%. The classic trap is dividing by the new value instead — 30 ÷ 180 = 0.167, giving 16.7%, which is option A, placed there deliberately to catch candidates who do not anchor to the starting figure. Option C is the raw difference dressed up as a percentage, and D is 150 ÷ 180. A 20% month-on-month rise in tickets for one application is exactly the kind of trend the team would want flagged, connecting this arithmetic directly to problem management.

**Question 5 (moderate) — Ratio of incidents across applications**

A team supports three applications. Last month's incident counts were: Case Tracker 90, Document Store 60, Reporting 30. What is the simplest ratio of incidents across Case Tracker, Document Store and Reporting?

- A) 9 : 6 : 3
- B) 3 : 2 : 1
- C) 90 : 60 : 30
- D) 1 : 2 : 3

**Correct answer: B**

**Explanation:** A ratio is simplified by dividing every part by the highest common factor — here, 30 — giving 3 : 2 : 1. Options A and C are correct ratios but not fully simplified (A only divided by 10), and the item asks for the simplest form. Option D reverses the order, which would wrongly suggest Reporting has the most incidents. Ratios like this help a team see workload balance at a glance: for every one Reporting incident, Case Tracker generates three, which might influence where preventative effort goes.

**Question 6 (moderate) — Converting uptime percentage to downtime**

The case application has an availability target of 99% over a 30-day month. Assuming the application is expected to be available 24 hours a day, how many hours of downtime would exactly meet (but not exceed) the 99% target?

- A) 3 hours
- B) 7.2 hours
- C) 30 hours
- D) 0.72 hours

**Correct answer: B**

**Explanation:** Total hours in the month = 30 × 24 = 720. 99% availability means 1% downtime is allowed, and 1% of 720 = 7.2 hours. Option D slips a decimal place (0.1% rather than 1%); option C confuses 30 days with 30 hours; option A has no basis in the calculation. Understanding this conversion changes how a candidate reads availability numbers: "99%" sounds almost perfect, yet it allows more than seven hours of outage a month — which is why teams supporting important public services often aim higher, and why every incident's duration matters.

**Question 7 (moderate) — Average resolution time with different group sizes**

Last week a team resolved 20 severity 3 incidents with an average resolution time of 4 hours, and 5 severity 2 incidents with an average resolution time of 10 hours. What was the overall average resolution time across all 25 incidents?

- A) 5.2 hours
- B) 7 hours
- C) 6 hours
- D) 4.8 hours

**Correct answer: A**

**Explanation:** Simply averaging 4 and 10 to get 7 (option B, the classic trap) ignores the different group sizes. Weighting by group size instead: (20 × 4) + (5 × 10) = 80 + 50 = 130 hours total, divided by 25 incidents = 5.2 hours. A sense-check confirms it — because there are far more 4-hour incidents than 10-hour ones, the answer should sit closer to 4 than to 10, and 5.2 does. Weighted averages appear constantly in operations reporting, and recognising when a simple average is wrong is a mark of numerical maturity worth noting at this level.

**Question 8 (moderate) — Reading a combined table**

This table shows one month of incidents for the applications a team supports:

| Application | Severity 1–2 | Severity 3–4 | Total |
|---|---|---|---|
| Case Tracker | 12 | 48 | 60 |
| Document Store | 6 | 34 | 40 |
| Reporting | 2 | 18 | 20 |
| **Total** | **20** | **100** | **120** |

What percentage of all incidents were severity 1–2 incidents on Case Tracker?

- A) 20%
- B) 12%
- C) 10%
- D) 60%

**Correct answer: C**

**Explanation:** The item asks for Case Tracker severity 1–2 incidents as a percentage of all incidents: 12 ÷ 120 = 0.1, giving 10%. Option A is what results from dividing by Case Tracker's own total instead (12 ÷ 60) — a different question ("what share of Case Tracker's incidents were severe?"). Options B and D simply repeat raw counts. Table items are mostly about choosing the correct numerator and denominator, and a candidate who narrates "12 out of which total?" before dividing is showing exactly the habit that prevents dashboards' subtotals being confused with totals.

**Question 9 (hard) — Backlog burn-down rate**

A team's ticket backlog stands at 84 open tickets. Each working day the team resolves an average of 15 tickets, but an average of 9 new tickets arrive. If these rates continue, after how many working days will the backlog first reach zero?

- A) 6 days
- B) 14 days
- C) 10 days
- D) 9 days

**Correct answer: B**

**Explanation:** The backlog changes by the net rate, not the resolution rate alone: net reduction per day = 15 − 9 = 6, so days needed = 84 ÷ 6 = 14. Option A comes from ignoring arrivals entirely (84 ÷ 15 ≈ 6) — the most tempting error, since 15 is the number that describes the team's effort. This net-rate thinking is exactly what underlies real backlog forecasts, and a candidate who reaches for it unprompted is showing genuine numeracy rather than a memorised formula.

**Question 10 (hard) — Percentage points versus percentages**

In June, 88% of incidents were resolved within SLA. In July, the figure was 92%. Which statement is accurate?

- A) Performance improved by 4%.
- B) Performance improved by 4 percentage points, which is an increase of about 4.5% on June's figure.
- C) Performance improved by 4 percentage points, which is the same as a 4% increase.
- D) Performance worsened, because more incidents were resolved late in July.

**Correct answer: B**

**Explanation:** This distinction trips up experienced managers, so testing it early is worthwhile. The difference between 88% and 92% is 4 percentage points (92 − 88 = 4), but the relative increase is calculated against the starting figure: 4 ÷ 88 ≈ 4.5%. Option A uses loose language that a careful analyst would flag as imprecise; option C explicitly claims the two are the same, which they are not; option D contradicts the data. Note also that the item gives no information about total incident numbers, so nothing can be concluded about the count of late incidents — only the proportions. A candidate who catches this precisely is showing the kind of numerical care that keeps a team's reporting honest.

**Question 11 (hard) — Forecasting from a trend**

Timeout errors on the document application have been rising steadily: week 1: 40 errors; week 2: 48; week 3: 56; week 4: 64. If the trend continues in the same pattern, how many timeout errors would be expected in week 6, and what is the most useful action to take now?

- A) 72 errors; wait until the number exceeds 100 before mentioning it.
- B) 80 errors; describe the trend and pass the problem to the team now.
- C) 80 errors; fix the application personally, immediately, without passing it to the team.
- D) 128 errors; raise a severity 1 incident.

**Correct answer: B**

**Explanation:** The weekly increase is constant at 8 (48 − 40 = 56 − 48 = 64 − 56 = 8), a linear trend, so week 5 = 72 and week 6 = 80. Option D assumes doubling, an exponential pattern with no evidence behind it. The judgement half of this item matters as much as the arithmetic: a steady four-week rise is a problem signal, and the **Problem management** skill calls for investigating enough to describe it, then passing it to the team — not waiting for an arbitrary threshold (option A), not attempting a solo fix beyond this level and outside direction (option C), and not declaring a severity 1 emergency when the service is still functioning (option D). The best answer combines correct extrapolation with proportionate action.

**Question 12 (hard) — Multi-step SLA calculation**

A team's monthly report needs one combined figure: the percentage of all incidents resolved within SLA across two applications. Case Tracker had 60 incidents, of which 54 were resolved within SLA. Document Store had 40 incidents, of which 30 were resolved within SLA. A colleague suggests averaging the two percentages. What is the correct combined figure, and how does it compare with the colleague's method?

- A) 84%, which is higher than the average-of-percentages method gives.
- B) 82.5%, and both methods agree.
- C) 84%, and both methods agree.
- D) 82.5%, which is lower than the average-of-percentages method gives.

**Correct answer: A**

**Explanation:** Working both methods reveals the gap. Correct method: combine the raw numbers first — (54 + 30) ÷ (60 + 40) = 84 ÷ 100 = 84%. Colleague's method: average the percentages — Case Tracker 54 ÷ 60 = 90%, Document Store 30 ÷ 40 = 75%, average (90 + 75) ÷ 2 = 82.5%. The two disagree because the applications had different numbers of incidents, and a simple average treats a 40-incident application as equal in weight to a 60-incident one. The true combined figure, 84%, is higher than the colleague's 82.5% — option A. A candidate who catches this and can explain why is demonstrating exactly the numerical maturity that lets someone politely and correctly query a report figure.

### Administration tips

- **Allow a calculator and rough paper.** The test measures whether the candidate applies the right method, not mental arithmetic speed.
- **Score the working, not just the final number, where you can see it.** A candidate who divides by the wrong base but shows their steps is easier to coach than one whose answer is simply wrong.
- **Watch for the weighted-average and percentage-points traps specifically.** Both appear repeatedly in real operations reporting, so a candidate's handling of them here is a good predictor of accuracy on the job.
- **Debrief with the team's real reports if you can.** Showing the candidate afterwards how these same calculations appear in an actual monthly report reinforces the assessment's relevance.
- **Keep timing consistent** across candidates for this level, and note anything that disrupted the session.

### Common pitfalls to watch for when scoring

- **Dividing by the wrong base.** A candidate who calculates "from 150 to 180" as 30 ÷ 180 rather than 30 ÷ 150 is a common and instructive error to flag at debrief.
- **Averaging percentages from different-sized groups**, rather than combining the raw counts first, is one of the most frequent mistakes at this level and worth specific coaching.
- **Ignoring net rates** — treating a backlog as falling by the resolution rate alone rather than resolved-minus-arrived.
- **Misreading tables under pressure** — using a subtotal when the question wants the total, or vice versa.
- **Confusing hours, minutes and days** without converting to one unit before comparing.
- **Spending too long on one item.** A candidate who stalls badly on one hard question and rushes the rest may simply need better time management, which is coachable, rather than lacking the underlying skill.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material of the kind this job produces: incident management procedures, service emails, knowledge base articles, policy extracts, and user stories. The most common format presents a short passage followed by statements the candidate must judge as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage gives too little information to decide either way). Other item types ask for the best summary of a passage, what can properly be inferred, or the clearest piece of writing.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 statements spread across several passages. The golden rule for the candidate is to answer using only the passage — not their own knowledge or experience, even if they happen to know a team does something differently in practice. That rule can feel strange to a candidate at first, so it is worth stating plainly before the assessment begins.

Why does this matter for the role? Because the work runs on precise reading. An application operations engineer follows runbooks where one word — "before", "unless", "all" — changes what should be done; reads incident descriptions and must separate what a user actually reported from what is assumed; reads handover notes and must notice what has been checked and what has not; and the **User focus** skill depends on reading user stories and understanding exactly what need they express. Misreading costs time and sometimes causes new incidents; careful reading prevents them.

At associate level, the passages are short and practical, and the skill being tested is care rather than vocabulary. The items below use the documents a candidate genuinely meets: a procedure extract, a service desk email, a knowledge base article, and a user story.

### How this assessment maps to the role

- **Comprehension of procedures** maps to **Incident management**. Identifying and registering incidents, gathering the required information, and allocating to the appropriate channel all follow written procedures. The True/False/Cannot say discipline mirrors the discipline of following a procedure exactly as written.
- **Inference and restraint** map to **Problem management**. When investigating problems, a candidate must distinguish what the evidence states from what they are tempted to conclude. "Cannot say" is the verbal reasoning version of "we need more information before we decide".
- **Reading user language** maps to **User focus**. Understanding the purpose of user stories and the focus on user needs starts with reading them accurately: who is the user, what do they want, and why?
- **Clear-writing judgement** maps to **Ownership and topic**. When a problem is passed to the team, the handover is written words, and choosing clear, complete, unambiguous wording is what makes a handover useful rather than confusing.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 — Incident logging procedure extract**

*"All incidents reported by telephone must be logged in the ticketing system before the end of the call, except when the system itself is unavailable, in which case the incident must be recorded on the paper form and entered into the system within four hours of the system becoming available again. Incidents reported by email are logged automatically. The engineer who logs an incident is responsible for confirming the reporting user's contact details. Severity is assigned at the point of logging and may be changed later only by the duty manager."*

**Question 1 (easy) — True, false, or cannot say**

Statement: "Incidents reported by email must be logged manually before the end of the call."

- A) True
- B) False
- C) Cannot say
- D) True, but only when the system is unavailable

**Correct answer: B**

**Explanation:** The relevant sentence — "Incidents reported by email are logged automatically" — directly contradicts the statement, and the phrase "before the end of the call" belongs to the telephone rule, not the email rule, so the statement mixes up two different parts of the procedure. When a statement contradicts the passage, the answer is False, not Cannot say. A candidate who locates the exact sentence dealing with the statement's topic and compares it word by word will avoid being pulled by the familiar rhythm of the telephone rule into applying it to email.

**Question 2 (easy) — True, false, or cannot say**

Statement: "If the ticketing system is unavailable during a telephone report, the incident must be recorded on the paper form."

- A) True
- B) False
- C) Cannot say
- D) False, because incidents can wait until the system returns

**Correct answer: A**

**Explanation:** The passage's exception clause — "except when the system itself is unavailable, in which case the incident must be recorded on the paper form" — is restated accurately by the statement, so it is True. Option D describes what happens after the paper form (entry into the system within four hours of availability returning), but the paper form itself is still required first, so D misreads the sequence. A candidate who notices that "must" appears with matching strength in both passage and statement is checking the right thing — if the passage had said "may", a statement saying "must" would not be supported.

**Question 3 (easy) — True, false, or cannot say**

Statement: "The duty manager assigns the initial severity of each incident."

- A) True
- B) False
- C) Cannot say
- D) True for telephone incidents only

**Correct answer: B**

**Explanation:** The passage states: "Severity is assigned at the point of logging and may be changed later only by the duty manager" — so the initial severity is assigned by whoever logs the incident, and the duty manager's special role is changing severity later, not assigning it initially. The statement swaps those two responsibilities, contradicting the passage, so it is False. This is a classic verbal reasoning pattern: the statement reuses the passage's own words but rearranges the relationship between them. A candidate who reads for relationships — who does what, when — rather than just spotting familiar words is showing the precision the role needs, where assuming the wrong person owns a step can leave the step undone.

**Question 4 (moderate) — True, false, or cannot say**

Statement: "Most incidents are reported by telephone."

- A) True
- B) False
- C) Cannot say
- D) False, because email logging is automatic

**Correct answer: C**

**Explanation:** The passage describes the procedure for telephone reports and the procedure for email reports, but never compares their volumes, so "most" cannot be judged either way — the answer is Cannot say. Option D sounds analytical, but automatic logging tells a candidate nothing about how many emails arrive. This item tests restraint: the passage's silence is itself the answer. On the job, that restraint sounds like "the procedure covers both routes, but I don't have data on which is more common" — a much stronger position than guessing.

**Passage 2 — Email from the service desk**

*"Hi team — heads-up for this afternoon. The supplier will apply a security patch to the document store between 14:00 and 15:00. Users may experience slower document opening during this window, but uploads should not be affected. Please do not restart the document store service during the window, even if monitoring shows raised response times, because a restart during patching can corrupt the update. If any user reports being completely unable to open documents, treat it as severity 2 and phone the supplier's hotline rather than using the online portal. Normal service is expected from 15:00. — Service Desk"*

**Question 5 (moderate) — True, false, or cannot say**

Statement: "During the patching window, raised response times on monitoring are expected and are not, by themselves, a reason to restart the service."

- A) True
- B) False
- C) Cannot say
- D) True, but only after 15:00

**Correct answer: A**

**Explanation:** Two parts of the email support this: "Users may experience slower document opening during this window" shows slower responses are anticipated, and "Please do not restart the document store service during the window, even if monitoring shows raised response times" makes explicit that raised response times are not a reason to restart. The statement combines both accurately, so it is True. Option D inverts the timing — the restriction applies during the window, not after it. This is genuinely how operations teams communicate temporary rule changes, and the skill this item tests — extracting exactly what is expected, forbidden, and when — is the job skill. The phrase "even if" exists precisely to stop a well-meaning engineer doing the normally sensible thing at the wrong time, and a candidate's handling of it is worth noting.

**Question 6 (moderate) — Inference from the email**

Which one of the following can properly be inferred from the email?

- A) The supplier's online portal is broken this afternoon.
- B) Complete inability to open documents during the window is being treated as more serious than slowness.
- C) Uploads will definitely work normally throughout the window.
- D) The patch will finish exactly at 15:00.

**Correct answer: B**

**Explanation:** Testing each option: A claims the portal is "broken", but the email only prefers the hotline "rather than using the online portal" without giving a reason. C claims uploads will "definitely" work, but the email only says they "should not be affected" — expectation, not certainty. D claims the patch finishes "exactly" at 15:00, but the email only says normal service is "expected" from then. B holds up: slowness gets no special action, while complete inability to open documents gets a severity 2 classification and an urgent phone route — a clearly more serious treatment, and the only inference the wording genuinely supports. The general technique this item rewards: hedged words ("should", "expected", "may") never support absolute claims ("definitely", "exactly"), and differences in prescribed action reveal differences in seriousness.

**Passage 3 — Knowledge base article and user story**

*"Article KB-2114: Clearing a stuck print queue in the case application. Symptoms: documents sent to print remain in 'queued' status for more than ten minutes and no error is shown. Resolution: first, confirm with the user that they are printing to the office printer rather than the PDF printer, because PDF jobs are processed by a different service and this article does not apply to them. Second, ask the user to log out and back in; this clears the queue in most cases. If the queue remains stuck, escalate to second-line support with the user's login name and the time of the first stuck job. Do not delete jobs from the queue manually, as manual deletion can leave orphaned records that cause the same user further printing failures later."*

*"Related user story: As a caseworker, I need my documents to print promptly, so that I can include them in case files that are collected for court each afternoon."*

**Question 8 (moderate) — Comprehension of conditions**

According to the article, when does the article's resolution NOT apply?

- A) When the user has waited fewer than ten minutes
- B) When the user is printing to the PDF printer
- C) Both A and B describe situations outside the article's scope
- D) When the user has already logged out and back in

**Correct answer: C**

**Explanation:** The symptom definition says jobs remain queued "for more than ten minutes", so a shorter wait does not yet match the symptoms and the article's resolution is not yet triggered (A is out of scope). The first resolution step says PDF jobs "are processed by a different service and this article does not apply to them" (B is explicitly excluded). Both A and B therefore describe situations the article does not cover, making C correct. Option D is wrong because a user who has logged out and back in without success is exactly who the article's escalation step is for — still within scope. Scope-checking is a real support skill, and applying the right knowledge base article to the wrong situation wastes the user's time and can make things worse.

**Question 9 (hard) — True, false, or cannot say**

Statement: "Manually deleting stuck jobs resolves the immediate problem but is forbidden because it can cause repeat failures for the same user."

- A) True
- B) False
- C) Cannot say
- D) False, because manual deletion never clears a queue

**Correct answer: C**

**Explanation:** This item requires careful reading of a bundled claim. The article says: "Do not delete jobs from the queue manually, as manual deletion can leave orphaned records that cause the same user further printing failures later." The prohibition is real, and the stated reason is real. But the statement also claims manual deletion "resolves the immediate problem", which the article never confirms or denies. Because part of the statement is unsupported (rather than contradicted) while the rest is supported, the statement as a whole cannot be confirmed — Cannot say. Option D makes the opposite error, asserting "never clears", which the article also does not say. This is the hardest and most common trap at this level: a candidate needs to separate each claim inside a statement and check each against the text individually.

**Question 10 (hard) — Understanding the user story**

The user story reads: "As a caseworker, I need my documents to print promptly, so that I can include them in case files that are collected for court each afternoon." Which option best explains why the "so that" part matters to a team's handling of print incidents?

- A) It identifies the printer model the caseworker uses.
- B) It shows the user need has a hard daily deadline, which helps the team understand the real urgency of print incidents for caseworkers.
- C) It proves all print incidents should be severity 1.
- D) It is decorative and can be ignored, because the technical symptom is the same either way.

**Correct answer: B**

**Explanation:** A user story has three parts — who, what, and why — and the "so that" clause here reveals a hard, externally imposed daily deadline: court collection each afternoon. That context should change how a support team thinks about a "printer is slow" ticket at 15:30 versus 09:00. Option A is not in the story at all. Option C overcorrects: context informs urgency, but classification still follows the severity guide. Option D is the mindset the **User focus** skill exists to prevent: the technical symptom may be identical, but the user impact is not, and understanding the purpose of user stories means using the "so that" to see the need behind the ticket. This item directly rehearses what "explain the purpose of user stories and the focus on user needs" looks like in practice.

**Question 11 (hard) — Choosing the clearest handover**

A candidate is ending their shift and must hand over an unresolved issue. Which handover note is clearest and most useful for the next engineer?

- A) "Printing thing still broken for that user from earlier, tried the usual, might need escalating maybe."
- B) "Print queue issue ongoing. See ticket."
- C) "INC-26-00891: caseworker j.patel reports print jobs stuck in 'queued' since 13:40. Confirmed office printer (not PDF). Log out/in tried at 14:05 — queue still stuck. Per KB-2114, needs escalation to second-line with login name and first stuck job time (13:40). Not yet escalated."
- D) "Escalated j.patel's printing to second line, all sorted, nothing to do."

**Correct answer: C**

**Explanation:** A good handover answers: which ticket, which user, what symptoms, what has been tried, what happened, what remains to be done. Option C covers all six: the reference, the user, the symptom and its start time, the scope check from the knowledge base article, the attempted fix and its result, the next required step, and the honest status "Not yet escalated". Option A is vague on every element. Option B forces the next engineer to reconstruct everything from the ticket, defeating handover's whole purpose. Option D is worse than vague: it claims an action was taken that the scenario says has not happened — an inaccurate handover destroys trust and can leave a caseworker without documents for the afternoon court collection. This item rewards completeness, specificity, and honesty, which is exactly what the team needs from a real handover.

**Question 12 (hard) — Best summary of a passage**

Re-read Passage 1 (the incident logging procedure). Which option best summarises it?

- A) All incidents must be logged on paper forms and entered into the system within four hours.
- B) Telephone incidents are logged in the system during the call (or on paper if the system is down, then entered within four hours of its return); email incidents log automatically; the logging engineer confirms contact details; severity is set at logging and only the duty manager may change it later.
- C) The duty manager logs all incidents and assigns all severities.
- D) Incidents may be logged whenever convenient, provided contact details are confirmed.

**Correct answer: B**

**Explanation:** A strong summary preserves every rule, keeps the conditions attached to the right rules, and adds nothing. Option B checks out against the passage line by line: telephone logging before the end of the call is present, the system-unavailable exception is present and correctly attached, automatic email logging is present, contact detail confirmation by the logging engineer is present, and the severity rule is present. Option A promotes the exception (paper forms) into the general rule. Option C misassigns both logging and severity to the duty manager. Option D contradicts the timing requirements entirely. Summary items are really compression tests — can a candidate shrink a passage without breaking any of its conditional links — which is also the skill of summarising an incident accurately when registering it: compressing a user's five-minute phone call into a record that loses nothing that matters.

### Administration tips

- **Emphasise the "use only the passage" rule before starting.** A candidate who answers from outside knowledge, however sensible, should be scored against what the text actually supports.
- **Watch for the False/Cannot say distinction specifically.** Confusing the two is the single most common verbal reasoning error, and a candidate's pattern here is informative.
- **Note hedge-word handling.** Candidates who correctly treat "should"/"may"/"expected" as weaker than "must"/"always"/"never" are showing precision that matters on the job.
- **Time by passage, not by statement**, and let the candidate see all statements for a passage together if your platform allows it.
- **Use the summary and handover items as a natural discussion point** in debrief — they map directly onto real on-the-job writing.

### Common pitfalls to watch for when scoring

- **Answering from job knowledge instead of the passage.** A candidate who says "but in practice we'd..." is answering a different question from the one asked.
- **Treating Cannot say as a weak or lazy answer**, when confident, correct use of it is a sign of strong verbal reasoning.
- **Confusing False with Cannot say** — False requires contradiction by the passage; silence is Cannot say, not False.
- **Missing exception clauses.** Words like "except", "unless", "only", and "even if" carry the meaning of operational documents, and a candidate who glosses over them will get several items wrong in a pattern worth noting.
- **Rushing long passages** rather than reading once carefully and re-reading only what a specific statement needs.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (often called an SJT) presents realistic workplace scenarios and asks the candidate to judge possible responses. Unlike the other assessments in this document, there is no arithmetic and no passage analysis — the material is human: a confused user, a busy colleague, a mistake, a deadline, an awkward moment. Typical item formats include choosing the most effective response, choosing the least effective response, ranking all responses from best to worst, or rating each response on a scale.

The typical format is an online, untimed or generously timed test of 10 to 20 scenarios, each with four possible responses. There is usually no single "trick" — the responses are all things a real person might do, and the candidate's task is to judge which serves the situation best. Scoring compares the candidate's judgements with those of experienced professionals and with the behaviours the organisation values: user focus, collaboration, honesty, taking appropriate ownership, escalating at the right moment, and treating everyone with respect.

Why does this matter for an associate-level operations role? Because at this level, judgement about when to act and when to ask matters more than deep technical knowledge. A candidate at this level will work under direction in an established team, and the most valuable associate behaviours are: communicating early, being honest about mistakes and uncertainty, keeping the user's experience in view, following process while staying alert, and passing problems on rather than letting them silently grow. None of these require years of experience — they require good instincts, which this assessment is designed to surface.

A note for calibrating your scoring: SJTs are not personality tests trying to catch candidates out, and they are not asking what a heroic expert would do. They ask what a sensible, honest, user-focused trainee should do. Usually the strongest answers share a shape: they deal with the immediate risk, are honest, involve the right people, and protect the user. The weakest answers usually hide something, guess beyond the person's level, ignore the user, or dump a problem on someone else without information.

### How this assessment maps to the role

- **Escalation and asking for help** map to **Ownership and topic**: showing awareness of problem resolution processes and passing problems on to the team is literally the behaviour many SJT scenarios test. Good associates neither sit on problems nor throw them over the wall — they pass them on with useful information.
- **Careful process behaviour** maps to **Incident management**: scenarios about logging, categorising, and routing test whether a candidate follows the process even when busy, and gathers the required information before allocating.
- **Investigation instincts** map to **Problem management**: scenarios about recurring issues test whether a candidate notices patterns, contributes observations, and supports remedies and preventative measures rather than treating every recurrence as brand new.
- **Empathy and service** map to **User focus**: scenarios involving frustrated or confused users test whether a candidate keeps the user's need in view — remembering there is a person behind every ticket, often trying to deliver a public service to citizens.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Unsure how to categorise an incident**

A candidate is registering a telephone incident. The user's description does not clearly fit any of the categories in the system, and the senior engineer who usually helps them is at lunch. The service desk asks the candidate to hurry because calls are queuing. What is the most effective response?

- A) Pick a category at random so the queue keeps moving; someone will fix it later.
- B) Choose the closest-fitting category, add a clear note explaining the uncertainty and what the user actually said, and ask the senior colleague to check it when they return.
- C) Leave the incident unregistered until the senior engineer returns from lunch.
- D) Tell the user to email instead, because email incidents are categorised automatically.

**Correct answer: B**

**Explanation:** Option B does four good things at once: it keeps the process moving, preserves the truth by capturing the user's actual words, is honest about uncertainty by flagging the categorisation as provisional, and uses the team correctly with a light-touch check rather than an interruption. Option A moves fast but plants a hidden error — miscategorised incidents get routed to the wrong channel and lost time is invisible until someone complains. Option C protects accuracy but abandons timeliness and the queuing users. Option D pushes the problem onto the user, failing the **User focus** skill — users should never have to work around internal processes. This item rewards choosing "good, honest, and flagged for review" over "fast and silent" or "slow and safe" when a perfect option is not available.

**Question 2 (easy) — A mistake is made**

While closing tickets at the end of the day, a candidate realises they accidentally closed the wrong ticket an hour ago — an unresolved incident from a user who is still waiting for help. Nobody has noticed. What is the most effective response?

- A) Reopen the ticket quietly and say nothing; no harm done.
- B) Leave it closed — the user will call back if it still matters.
- C) Reopen the ticket immediately, tell a senior colleague what happened, and check whether the user has lost time or needs an update.
- D) Wait until tomorrow to see if anyone mentions it.

**Correct answer: C**

**Explanation:** Three duties are in play here: fix the error, be transparent, and protect the user. Option C does all three — the ticket is reopened at once, the team is told so knock-on effects can be caught and trust maintained, and the user's position is checked since they may have been waiting silently. Option A fixes the record but hides the event, which corrodes team trust and prevents the team spotting patterns. Option B transfers the cost of the mistake to the user. Option D adds delay to concealment. SJT scoring consistently rewards early, matter-of-fact honesty about mistakes, and it is worth using this item at debrief to hear how the candidate frames their own past mistakes.

**Question 3 (easy) — A frustrated user on the phone**

A user calls, audibly frustrated: "This is the third time this month the case system has lost my work! You people never fix anything!" A candidate can see two previous incidents from this user in the system. What is the most effective first response?

- A) Explain that the previous incidents were closed as resolved, so this must be a new issue.
- B) Acknowledge their frustration, take the details of what has just happened carefully, and note the two previous incidents in the new record so the pattern is visible to the team.
- C) Transfer the call to a senior colleague immediately, since the user is angry.
- D) Point out that "you people" is unfair, because the candidate has never personally handled their tickets.

**Correct answer: B**

**Explanation:** The user is giving two valuable things wrapped in frustration: a new incident and evidence of a possible recurring problem. Option B captures both — it treats the person with empathy, gathers the required information properly, and connects the three incidents so the team can see a pattern worth investigating, which is **Problem management** awareness in action: three losses of work in a month is a problem signal, not just a third incident. Option A leads with a defence of the record rather than the user's need. Option C escalates a routine (if uncomfortable) call that is within this level's remit. Option D wins an argument and loses the user. Empathy first, accuracy second, pattern-spotting third — in that order — is what B delivers.

**Question 4 (moderate) — Colleague suggests skipping the process**

It is a very busy afternoon. A colleague on the team says: "Don't bother logging the small stuff today — just fix the quick ones and move on, we'll never clear the queue otherwise." What is the most effective response?

- A) Follow their suggestion — they are more experienced.
- B) Refuse loudly and tell the rest of the team what they said.
- C) Keep logging everything but say nothing, and let them do it their way.
- D) Say the logging should continue because unlogged incidents hide patterns and skew the team's figures, and suggest asking the team lead whether there is an approved short-form logging option for busy periods.

**Correct answer: D**

**Explanation:** The colleague's goal — clear the queue — is legitimate, but the method — skip logging — is not, because unlogged incidents make problems invisible and skew the team's workload figures. Option D holds the line on process while staying collegiate: it explains the reason rather than just citing the rule, and routes the genuine pressure problem to someone who can actually solve it. Option A follows experience into a bad practice. Option C protects individual conduct but leaves the team's data quietly corrupted. Option B turns a process disagreement into a public confrontation without fixing the pressure. This item rewards pairing "do the right thing" with "surface the underlying problem to the right person" — a pattern worth listening for in a candidate's own words at debrief.

**Question 5 (moderate) — Noticing a recurring pattern**

While registering incidents over two weeks, a candidate notices that the expenses application produces a burst of login failures every Monday morning between 09:00 and 09:30, which then stop by themselves. Each burst generates a handful of tickets that resolve without action. Nobody has mentioned it. What is the most effective response?

- A) Do nothing — the incidents resolve themselves, so there is no impact.
- B) Gather the evidence (dates, times, ticket references, number of users affected), and raise it with the team as a possible underlying problem worth investigating.
- C) Investigate the application's authentication service personally on Monday morning to find the cause, without direction.
- D) Warn users informally to avoid logging in before 09:30 on Mondays.

**Correct answer: B**

**Explanation:** This scenario is the **Problem management** skill in miniature: incidents are individual events, and a problem is the underlying cause behind recurring ones. A weekly, time-boxed burst of login failures is a textbook problem signature. Option B does exactly what an associate should — investigate to the point of describing the pattern clearly, then pass it to the team with evidence attached, which turns "I've noticed a thing" into an actionable investigation. Option A mistakes "self-resolving" for "no impact". Option C exceeds this level's remit — working under direction means not poking at an authentication service unsupervised. Option D institutionalises the fault by training users around it, hiding the demand signal. Noticing what nobody mentioned is valuable; passing it on well is what makes the noticing count.

**Question 6 (moderate) — Asked to do something beyond a candidate's training**

A severity 2 incident is running, and the engineer leading it is deep in investigation. They call over: "Run the database cleanup script on the live server, would you? It's in the tools folder." The candidate has never run this script, has not been trained on it, and knows the incident is urgent. What is the most effective response?

- A) Run the script immediately — the incident is urgent and the candidate was told to.
- B) Say it has not been run before, and ask them to either talk the candidate through it as they go or confirm the exact command and expected outcome before running anything on the live server.
- C) Quietly find the script and work it out from the file name, to avoid interrupting them.
- D) Refuse, saying live servers are not a trainee's responsibility.

**Correct answer: B**

**Explanation:** Working "under direction" cuts both ways: acting on instructions, and being entitled to enough direction to act safely. Option B is honest about experience level, takes only seconds of the lead engineer's attention, and converts a risky instruction into a supervised task. During an incident is the worst time for an untrained person to improvise on production (option C). Option A treats urgency as a licence for risk, when urgency is precisely when mistakes are most costly. Option D over-refuses and misstates the role — associates do work on live systems, with direction. SJTs at this level frequently test whether a candidate can decline the risky version of a task while accepting the safe one — that is not weakness, it is exactly the judgement the team wants.

**Question 7 (moderate) — Conflicting instructions**

A candidate's senior engineer asked them this morning to spend today updating the runbook screenshots. At midday, an engineer from another team appears at their desk: "Drop that — I need you to test something for me this afternoon, it's important." What is the most effective response?

- A) Do what the other engineer asks — they seem senior and it sounds important.
- B) Keep working on the screenshots and pretend not to have understood the request.
- C) Explain that the senior engineer has set the candidate's work for today, offer to check with them whether the candidate can be released to help, and let the two of them agree the priority.
- D) Try to do both tasks at once, half-finishing each.

**Correct answer: C**

**Explanation:** This is two incompatible instructions from different teams, and an associate does not own the authority to arbitrate between them, but does own the responsibility to surface the conflict quickly and honestly. Option C is respectful to the requester, transparent with the senior engineer, and places the prioritisation decision where it belongs. Option A lets assertiveness override the actual reporting line. Option B is dishonest and leaves the other team's need unaddressed. Option D is the classic multitasking trap that helps nobody. The transferable pattern this item rewards: when instructions conflict, escalate the conflict, not the stress.

**Question 8 (moderate) — Least effective response: the quiet security worry**

While gathering information for a routine ticket, a user mentions in passing: "Oh, and we all share the team login for the reporting application — saves time." A candidate knows shared credentials are against the department's security policy. The user's actual ticket is about something unrelated. Which response is LEAST effective?

- A) Handle the user's ticket as normal, then report the shared-login practice to a senior engineer or the appropriate security contact.
- B) Decide it is not the candidate's business — a trainee, and the ticket is about something else — and mention it to no one.
- C) Note the security concern factually in the appropriate channel without blaming the user, and continue helping them with their ticket in a friendly way.
- D) Ask the user a little more about the practice (how many people, which team) so the report is useful, while making clear the user is not being told off.

**Correct answer: B**

**Explanation:** This item asks for the LEAST effective response — SJTs regularly switch polarity, and scoring should account for the possibility a candidate answers the "most effective" question they expected instead. Options A, C and D are all reasonable variations of the same good behaviour: keep serving the user, avoid blame, and route the concern to people who can address it. Option B is the failure: shared credentials undermine accountability and access control, and "not my business" is exactly how known risks persist until they become breaches. Nobody expects an associate to fix a security policy violation, but everybody expects it to be passed on — the **Ownership and topic** skill applied to risk: not owning the solution, but not orphaning the problem either. None of the good options scold the user, which is worth noting — punishing openness teaches people to hide things.

**Question 9 (hard) — Pressure to close tickets early**

It is the last day of the month. A colleague mentions that the team is close to its monthly resolution target and says: "That ticket of yours — the user hasn't replied for two days. Close it as resolved, it'll count for this month." The team's process says tickets await user confirmation for five working days before closure. What is the most effective response?

- A) Close it as resolved — the user has probably forgotten about it, and the team benefits.
- B) Keep the ticket open per the five-day process, send the user a friendly follow-up message, and if the pressure to close early continues, mention it to a senior engineer.
- C) Close it as resolved, but reopen it quietly next month if the user comes back.
- D) Keep it open but say nothing to anyone, and avoid that colleague in future.

**Correct answer: B**

**Explanation:** This is an integrity scenario in everyday clothes. Closing an unconfirmed ticket to hit a monthly figure misrepresents the service's performance — the target exists to measure user outcomes, and gaming it converts a measurement into a fiction. Option B follows the written process, actively serves the user, and handles the interpersonal side proportionately: a single comment warrants a light response, but a continuing pattern of pressure is something the senior engineer should know about. Option A prioritises the metric over the truth. Option C is A with a concealment plan attached. Option D gets the ticket right but ducks both the relationship and the systemic issue. This item rewards proportionate escalation — matching the size of the response to the size of the problem, while never trading accuracy for appearances.

**Question 10 (hard) — The unhelpful handover**

A candidate arrives for their shift and finds a handover note from the outgoing engineer: "Document store playing up again, keep an eye on it." Ten minutes later, a severity 3 ticket arrives from a user who cannot open documents. The outgoing engineer has gone home and is not answering messages. What is the most effective response?

- A) Wait until the outgoing engineer replies, since they know the history.
- B) Treat the new ticket as unrelated to the note, because the note is too vague to use.
- C) Register and work the new ticket properly; check recent tickets, alerts and logs for the document store to reconstruct what "playing up" meant; link anything found to the new ticket; and tell a senior engineer what is known and not known.
- D) Close the new ticket, since the team already knows the document store is having issues.

**Correct answer: C**

**Explanation:** This is a poor handover, which happens, and the item tests whether a candidate can recover from one without either freezing or ignoring it. Option C works with what is available: the new ticket gets proper attention, the system itself becomes the handover by way of recent tickets, alerts and logs, linking related records rebuilds the pattern, and briefing the senior engineer with an honest "known and unknown" summary invites direction, which is exactly right for this level. Option A leaves a user unserved for an unknown duration. Option B wastes real evidence. Option D is the serious failure — "the team knows" is not a resolution, and closing an open user issue abandons the **User focus** skill entirely. This scenario also mirrors the model handover in the verbal reasoning section, worth pointing out at debrief.

**Question 11 (hard) — Balancing learning against delivery**

A candidate's team lead has encouraged them to spend two hours each Friday on structured learning, and today is Friday. This morning, a burst of incidents arrived after a supplier update, and the queue is double its normal size. The candidate's learning module on incident categorisation is booked for 14:00. The team has not asked them to cancel it. What is the most effective response?

- A) Take the learning time as planned without telling anyone — it is agreed and protected.
- B) Cancel the learning quietly and work the queue — real work always beats training.
- C) Tell the team lead the queue is double normal size, offer to move the learning slot, and follow their decision.
- D) Compress the two-hour module into a distracted 30 minutes at the desk while watching the queue.

**Correct answer: C**

**Explanation:** Both commitments here are genuine, and the key insight is that resolving the trade-off is the team lead's decision, with the candidate's job being to give them the information and the offer. Option C does exactly that and accepts either outcome gracefully — many leads will say the queue is covered and to go ahead and learn, and protected time stays protected precisely because people ask rather than silently erode it. Option A withholds information the lead needs to manage the day. Option B silently sacrifices development and hides the decision from the person accountable for both growth and the service. Option D delivers the worst of both: ineffective learning and distracted queue-watching. The mature behaviour this item rewards is surfacing trade-offs early and letting the accountable person choose.

**Question 12 (hard) — Ranking responses: a user asks a candidate to bypass the queue**

A caseworker helped by a candidate last week calls their direct line: "You were so helpful before — can you just fix my login now? I know if I go through the service desk it'll take ages, and I'm in court this afternoon." Rank these responses from most to least effective:

1. Log the incident properly right now, note the court deadline as impact information, tell her what will happen next, and flag the urgency to the team working the queue.
2. Fix her login immediately without logging anything — she is in a hurry and the candidate knows how.
3. Tell her it cannot be helped and she must hang up and call the service desk number like everyone else.
4. Log the incident properly and note the deadline, but tell her it will be handled in strict queue order regardless of her court commitment.

- A) 1, 4, 3, 2
- B) 1, 4, 2, 3
- C) 2, 1, 4, 3
- D) 4, 1, 2, 3

**Correct answer: A**

**Explanation:** Response 1 is clearly best: the incident enters the system so nothing is lost, the genuine deadline becomes recorded impact information that legitimately informs prioritisation, and the user gets clarity. Response 4 is second: everything is logged correctly, but refusing to even flag a hard court deadline mistakes rigidity for fairness — impact-based prioritisation is part of the process, not a violation of it. The subtle judgement is third versus fourth: response 3 is unhelpful and cold, but the incident still ultimately enters the proper channel; response 2 feels kind but is worst, since an unlogged fix on a live account leaves no record for security, no data for patterns, and teaches users that personal contacts beat the queue, unfairly disadvantaging every user without one. The order is 1, 4, 3, 2 — option A. This item tests whether a candidate understands that process exists to make help fair and repeatable, and that the best answer bends effort, not process, toward the user.

### Administration tips

- **Give the candidate room to think.** SJTs work best untimed or generously timed; rushing defeats their purpose.
- **Score the shape of the answer, not just whether it matches the key exactly**, especially where a candidate's own words show the same reasoning as the model answer.
- **Watch specifically for the "most effective" versus "least effective" polarity switch**, and note if a candidate seems to be answering the wrong question.
- **Use these scenarios as debrief material.** Asking a candidate to talk through why they ranked responses as they did often reveals more than the score alone.
- **Calibrate to the level.** The best answer for an associate candidate often includes asking for direction or passing something on — score that as strength, not hesitancy.

### Common pitfalls to watch for when scoring

- **Rewarding the heroic answer.** Solo fixes on live systems, working through protected time, absorbing pressure silently — these should score poorly, since they create risk and hide information, however capable they might look.
- **Rewarding pure rule-quoting over service.** Responses that only cite the rule, without helping the person or surfacing the underlying problem, are usually second-best; the strongest answers pair the rule with service.
- **Penalising a candidate for warmth toward someone who reveals a problem.** Options that scold users or colleagues for revealing issues teach people to hide things, and a candidate who avoids that is showing good instinct.
- **Missing escalation calibration.** Reflexive escalation clogs a team; silent absorption starves it. Watch for whether a candidate matches escalation to genuine risk and to their level's remit.
- **Under-weighting integrity scenarios.** Any option that improves a number by misrepresenting reality is a trap regardless of how team-spirited it sounds, and a candidate's handling of it is a strong signal.

## Conclusion

This document has given you a full set of assessment material covering the four types most commonly used for associate application operations engineer: cognitive, numeric reasoning, verbal reasoning, and situational judgement.

Each section maps directly onto the skills this role level actually needs. The cognitive items test error checking on ticket references and incident records, following routing and escalation rules exactly as written, spotting patterns in logs, and working through multi-step runbook conditions — the precise thinking behind **Incident management** and **Problem management**. The numeric items test the SLA percentages, averages, ratios, and trends that fill a team's dashboards, along with the traps — wrong denominators, unweighted averages, percentage points versus percentages — that catch even experienced staff. The verbal items test reading procedures, service emails, knowledge base articles, and a user story with the word-by-word care that safe operations depends on. The situational judgement items rehearse the moments that define an associate's reputation: honesty about mistakes, asking for direction before touching live systems, passing problems on with useful evidence, and keeping the user's need at the centre of every decision.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, and use the explanations above as your answer key and your talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses — the explanations will help you tell the two apart. After scoring, a short debrief conversation using the explanations as a guide is often more valuable to the candidate, and more informative to you, than the raw score.

**Records and consistency.** Keep a note of the conditions under which you administered this assessment — timing, any interruptions, anything you had to clarify — alongside the result, and use the same items and conditions for every candidate you assess for this role level. Consistent administration is what makes a comparison between candidates fair and defensible.

**One assessment among several.** This result is one input into a wider decision, never the whole of it. Pair it with the candidate's experience, a conversation, and whatever else your process requires, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
