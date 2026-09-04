# Associate Infrastructure Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for associate infrastructure engineer, within the UK Government Digital and Data profession. This is an entry-level role: the candidate would work in an established team, supporting experienced infrastructure engineers in their daily work, and learning under their direction. These assessments are job-specific: they use scenarios drawn directly from the role — server naming conventions, patching schedules, monitoring alerts, ticket queues, and simple system diagrams — rather than abstract puzzles with no workplace context.

An associate infrastructure engineer supports the infrastructure services that underpin everything a department does — the servers, storage, networks, cloud services, and software packages that internal users and members of the public rely on. Even at trainee level, the daily work involves spotting things that look wrong, following runbooks and checklists accurately, reading tickets and instructions carefully, and knowing when to pass a problem on to the team. Those are exactly the abilities that cognitive, numerical, verbal, and situational judgement assessments measure.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment dimensions to the specific skills in the role's capability framework, a set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring. The items start easy and get gradually harder.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Because this is an entry-level assessment, be generous with the interface's ungraded practice questions before the timed test begins, and consider a calm, unhurried setting — nerves affect a first assessment disproportionately. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of asking a candidate to rotate shapes or complete number sequences with no context, it presents the everyday materials of the job — server naming conventions, patching schedules, monitoring alerts, ticket queues, and simple system diagrams — and asks the candidate to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with somewhere between 15 and 30 questions. The questions cover pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective: the candidate's answers are compared against a norm group of people at a similar career stage, not against engineers with twenty years of experience. Many modern platforms adapt the difficulty of questions based on previous answers, so a test that feels hard to the candidate is often one they are doing well on. Employers usually receive a breakdown of speed versus accuracy rather than a single score. Candidates are normally offered short, ungraded practice questions before the real test begins.

Employers use this kind of assessment for associate infrastructure engineers because, at this level, raw experience is limited by definition — the candidate is a trainee — so the assessment checks for the underlying thinking abilities that predict how quickly and safely someone will learn. Infrastructure work is detail-critical: a single wrong character in a hostname, a missed step in a checklist, or a misread alert can affect a live service that the public depends on. Cognitive assessment is a fair way to check that a candidate can hold details in mind, follow rules exactly, and notice when something does not fit the pattern.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **IT infrastructure** skill: supporting computer, storage, networking, physical infrastructure, software, COTS packages, and open source solutions means working with structured information every day — naming conventions, IP address ranges, version numbers, and configuration lists. Spotting the entry that breaks the pattern is a core support skill.
- **Logical deduction** maps to the **Systems integration** skill: explaining the process and principles of integrating systems requires following if-then reasoning — if system A sends data to system B, and B is down, what follows? It also maps to **Information security**, because security controls are rules, and applying rules correctly is deduction.
- **Error checking** maps to the **Troubleshooting and problem resolution** skill: demonstrating basic troubleshooting capability starts with noticing what is wrong — a mismatched configuration, an alert that contradicts a dashboard, a checklist step that was skipped.
- **Prioritisation** maps to the **Ownership and topic** skill: showing an awareness of problem resolution processes and knowing when to pass problems on to the team means judging what needs attention first and what can wait.
- **Applied problem solving** maps to the **Problem management** skill: investigating problems in systems, processes, and services — and understanding whether a problem is strategic, tactical, or operational — is structured problem solving in action, and to the **Systems design** skill, because assisting a team with the design of components means reasoning about how parts fit together.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in server names**

A team names servers using this convention: two letters for the site (LN for London, MC for Manchester), then three letters for the function (WEB, APP, DBS), then a two-digit number. For example, LNWEB01 is the first web server in London. Checking a server list, the candidate sees these entries:

1. LNWEB01
2. MCAPP03
3. LNDBS12
4. WEBLN02
5. MCWEB07

Which entry breaks the naming convention?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** Work through the rule one part at a time: site code first, then function, then number. Entry 1 is LN + WEB + 01 — correct. Entry 2 is MC + APP + 03 — correct. Entry 3 is LN + DBS + 12 — correct. Entry 4 begins with WEB, which is a function code, not a site code: the parts are in the wrong order, so it breaks the convention. Entry 5 is MC + WEB + 07 — correct. This tests whether a candidate checks each entry against the rule piece by piece rather than trusting a first glance. In real support work, naming conventions matter because scripts, monitoring tools, and colleagues all rely on them; a wrongly named server can be missed by backups or patching.

**Question 2 (easy) — Logical deduction about a patching rule**

A team's rule says: "Every Windows server must be patched during the monthly maintenance window, unless it is tagged 'exempt' by the security team." A colleague tells the candidate: "Server MCAPP03 is a Windows server and it was not patched during this month's window." Which one of the following must be true?

- A) The team forgot to patch MCAPP03.
- B) MCAPP03 is tagged 'exempt' by the security team.
- C) Either MCAPP03 is tagged 'exempt', or the rule was broken.
- D) MCAPP03 is not really a Windows server.

**Correct answer: C**

**Explanation:** The rule has exactly one permitted exception: an 'exempt' tag. From the facts given, whether that exception applies cannot be told. So option A is only a possibility, not a certainty — perhaps the server is exempt. Option B is also only a possibility — perhaps the team really did forget. Option D contradicts the facts given. The only statement that must be true in every case is option C: either the exception applies, or the rule was broken. This tests the disciplined habit of concluding only what the information guarantees — exactly what is needed when investigating problems as part of the **Problem management** skill: check the exemption list before assuming a mistake, and check the facts before blaming anyone.

**Question 3 (easy) — Error checking a checklist**

The candidate is following a runbook to restart a service. The runbook says: Step 1: notify the service desk. Step 2: check no batch jobs are running. Step 3: stop the service. Step 4: wait two minutes. Step 5: start the service. Step 6: confirm the service responds. Step 7: notify the service desk that work is complete. A colleague's notes from last night read: "Notified service desk, checked batch jobs, stopped service, started service, confirmed responding, notified completion." Which step appears to have been skipped?

- A) Step 2
- B) Step 4
- C) Step 6
- D) Step 7

**Correct answer: B**

**Explanation:** Match the notes against the runbook step by step. Notified service desk = Step 1. Checked batch jobs = Step 2. Stopped service = Step 3. Started service = Step 5. Confirmed responding = Step 6. Notified completion = Step 7. The two-minute wait (Step 4) is missing from the notes. Waiting steps are the easiest to skip because they produce no visible output, yet they often exist for good technical reasons — for example, letting connections close cleanly. This tests whether a candidate compares what was done against what should have been done, a genuinely valuable contribution at this level: fresh eyes catch skipped steps. The technique is simple and reliable: tick off each recorded action against the list, and whatever has no tick is the answer.

**Question 4 (easy) — Prioritising two tickets**

The candidate is monitoring the team's ticket queue under supervision. Two new tickets arrive at the same time. Ticket 1: "Printer on floor 3 is showing a low toner warning." Ticket 2: "Staff in the contact centre report they cannot log in to the case system — citizens are waiting on calls." The supervisor is at lunch. What is the most sensible first action?

- A) Deal with the toner warning first because it arrived at the top of the queue.
- B) Flag the contact centre ticket to the team straight away, because it is stopping a live service to the public.
- C) Wait until the supervisor returns before doing anything.
- D) Close the toner ticket because toner warnings are not real incidents.

**Correct answer: B**

**Explanation:** Prioritisation means comparing impact and urgency, not queue position. Ticket 2 describes many users unable to work and citizens directly affected — high impact and high urgency. Ticket 1 is a warning, not a failure: the printer still works, so it is low impact and low urgency. Option A confuses arrival order with importance. Option C delays a serious issue unnecessarily — the role summary asks for awareness of problem resolution processes and passing problems on to the team, which is exactly what option B does: the candidate is not expected to fix the login system, but is expected to raise it promptly. Option D is wrong because the toner ticket is valid work; it just comes later. This tests whether a candidate identifies that the best answer is not "fix it yourself" — at this level, fast, accurate escalation is the professional response.

**Question 5 (moderate) — Pattern recognition in IP addresses**

A site uses the address range 10.20.0.0/16, and the team convention is: the third number identifies the floor (1 to 4), and the fourth number identifies the device, where numbers 1–99 are workstations and 100–199 are printers. Checking four devices recorded in the asset register:

1. 10.20.2.45 — workstation, floor 2
2. 10.20.4.120 — printer, floor 4
3. 10.20.3.150 — workstation, floor 3
4. 10.20.1.7 — workstation, floor 1

Which record is inconsistent with the convention?

- A) Record 1
- B) Record 2
- C) Record 3
- D) Record 4

**Correct answer: C**

**Explanation:** Check each record against both parts of the rule. Record 1: third number 2 matches floor 2; fourth number 45 is in the workstation range 1–99, and the record says workstation — consistent. Record 2: floor 4 matches; 120 is in the printer range 100–199, and the record says printer — consistent. Record 3: floor 3 matches; but 150 is in the printer range 100–199, and the record says workstation — inconsistent. Record 4: floor 1 matches; 7 is in the workstation range — consistent. This tests whether the candidate checks both properties (floor and device type) rather than stopping after the first one matches — a habit that matters in real infrastructure support, where an inaccurate asset register causes wasted visits and failed changes.

**Question 6 (moderate) — Deduction about system dependencies**

The candidate is told: (i) the payroll application depends on the database server; (ii) the database server depends on the storage array; (iii) the intranet does not use the database server or the storage array. This morning the storage array went offline for ten minutes. Which of the following must have been affected during those ten minutes?

- A) The intranet only
- B) The database server and the payroll application
- C) The payroll application only
- D) Nothing, because ten minutes is too short to matter

**Correct answer: B**

**Explanation:** Follow the dependency chain step by step. The storage array went offline. The database server depends on the storage array, so the database server was affected. The payroll application depends on the database server, so the payroll application was affected too. The intranet uses neither, so it carried on unaffected — eliminating option A. Option C forgets the middle link: if the payroll application was affected through the database, the database itself was certainly affected. Option D is wishful thinking — duration changes how serious an outage is, not whether dependent systems were affected. This tests understanding of dependency chains, the foundation of **Systems integration**: knowing what connects to what tells an engineer who to warn, what to check, and where a fault will show up next, and a strong candidate's answer traces the full chain rather than just the first hop.

**Question 7 (moderate) — Error checking a change request**

A colleague drafts a change request for a quick review before submission. It says: "Change: apply firmware update to switch LNSW02. Date: Saturday 14 June. Window: 02:00–04:00. Impact: brief network interruption on floor 2. Rollback: reapply the new firmware. Approver: network team lead." What is the clearest error in this change request?

- A) The window is at the weekend, which is not allowed.
- B) The rollback plan reapplies the new firmware instead of restoring the old firmware.
- C) The impact statement mentions floor 2.
- D) The approver should be the service desk.

**Correct answer: B**

**Explanation:** Read each field and ask "does this make sense for its purpose?" A rollback plan exists to return to the previous known-good state if the change fails. Reapplying the new firmware would repeat the failed change, not undo it — the plan should say "restore the previous firmware version". Option A is wrong because weekend windows are common precisely to reduce impact on users. Option C is not an error — stating which users are affected is good practice. Option D invents a rule: approvers vary by organisation, and a network team lead is a plausible approver for a switch change. This tests exactly the "basic troubleshooting capability" and error-checking the **Troubleshooting and problem resolution** skill describes: a strong candidate thinks about what each safeguard is for, then tests whether it would really work.

**Question 8 (moderate) — Prioritisation with an escalation process**

A team's escalation process says: Priority 1 (P1) incidents affect a whole service and must be escalated to the on-call engineer immediately; Priority 2 (P2) incidents affect several users and must be escalated within one hour; Priority 3 (P3) incidents affect one user and are handled in normal queue order. At 09:00 three unassigned tickets are visible: Ticket X (logged 08:55): one user's monitor is flickering. Ticket Y (logged 08:20): the department's file-sharing service is down for everyone. Ticket Z (logged 08:45): six users in finance cannot print. In what order should the tickets be actioned according to the process?

- A) X, Y, Z — oldest personal issue first
- B) Y, Z, X — P1 immediately, then P2 within the hour, then P3
- C) Z, Y, X — most users first regardless of service impact
- D) Y, X, Z — P1 first, then the oldest remaining ticket

**Correct answer: B**

**Explanation:** Classify each ticket first, then apply the process. Ticket Y affects a whole service for everyone: P1, escalate immediately. Ticket Z affects several users: P2, escalate within one hour — and it was logged at 08:45, so the one-hour clock is already running. Ticket X affects one user: P3, normal queue order. So the order is Y, then Z, then X — option B. Option C looks tempting because Z names six users while Y just says "everyone", but a whole-service outage outranks a several-user fault in any standard model. Option D wrongly promotes the P3 above the P2 based on age; the process says priority classes come first, and age orders tickets within a class. This tests the **Ownership and topic** skill in action: the candidate does not need to fix any of these — the task is to route each one correctly and promptly.

**Question 9 (moderate) — Applied problem solving with monitoring alerts**

At 10:15 the monitoring system shows: web server LNWEB01 — CPU at 98% for 20 minutes; web server LNWEB02 — CPU at 30%; both servers sit behind a load balancer that should share traffic equally between them. Users report the website is slow. Which is the most reasonable first hypothesis to investigate?

- A) Both servers are underpowered and need to be replaced.
- B) The load balancer is not distributing traffic evenly, so LNWEB01 is doing nearly all the work.
- C) Users are imagining the slowness because LNWEB02 is fine.
- D) The monitoring system is broken and both figures are wrong.

**Correct answer: B**

**Explanation:** Good troubleshooting starts by asking "what single explanation fits all the evidence?" The evidence: one server overloaded, its twin nearly idle, and a device in between whose whole job is to share traffic equally. If the load balancer were working, both servers would show similar load. The pattern — one hot, one cold — points at uneven distribution, so option B fits everything. Option A does not fit: if both servers were underpowered, both would be busy. Option C dismisses user reports that are consistent with the data from LNWEB01. Option D assumes two independent readings are both wrong with no supporting evidence. This tests preferring the explanation that requires the fewest extra assumptions, and a strong candidate's answer notes they would report this hypothesis to the team rather than reconfigure the load balancer personally — investigate, form a hypothesis, and pass the problem on with useful evidence attached is exactly the right behaviour at this level.

**Question 10 (hard) — Deduction with multiple conditions**

A team's backup rules state: (i) every production server is backed up nightly; (ii) every server that holds citizen data is encrypted; (iii) test servers are never backed up nightly. It is learned that server LNAPP09 is backed up nightly and is not encrypted. Which one of the following must be true?

- A) LNAPP09 is a production server that holds citizen data.
- B) LNAPP09 is not a test server, and it does not hold citizen data.
- C) LNAPP09 is a test server.
- D) LNAPP09 holds citizen data.

**Correct answer: B**

**Explanation:** Take the facts one at a time. LNAPP09 is backed up nightly. Rule (iii) says test servers are never backed up nightly, so LNAPP09 cannot be a test server — that eliminates option C. LNAPP09 is not encrypted. Rule (ii) says every server holding citizen data is encrypted; since LNAPP09 is not encrypted, it cannot hold citizen data — that eliminates options A and D. Both remaining conclusions — not a test server, and no citizen data — are guaranteed, so option B must be true. Notice one subtle point: it cannot be concluded that LNAPP09 is a production server. Rule (i) says production servers are backed up nightly, but it does not say only production servers are — there might be other categories. This tests the "the rule points one way, not both ways" trap that appears constantly in assessments and in real security and backup policies, which is why reading **Information security** controls precisely is a named skill at this level.

**Question 11 (hard) — Problem solving across a sequence of events**

A service failed at 03:00 on Tuesday. These facts are gathered: (i) a patch was applied to the server at 22:00 on Monday; (ii) the same patch was applied to an identical server at another site at 22:00 on Monday, and that server is fine; (iii) a scheduled disk clean-up job runs on the failed server at 02:45 every night; (iv) the clean-up job does not run on the other site's server; (v) the failed service came back by itself at 03:20 without anyone doing anything. Which line of investigation does the evidence best support?

- A) The patch alone caused the failure.
- B) The clean-up job, or the clean-up job interacting with the newly patched system, caused a temporary failure.
- C) The other site's server will fail within 24 hours.
- D) The failure was caused by a hardware fault.

**Correct answer: B**

**Explanation:** Use comparison and timing — two of the most powerful troubleshooting tools. If the patch alone were the cause, the identical patched server at the other site should also have failed; it did not, which weakens option A. What differs between the two servers? The 02:45 clean-up job runs only on the failed server, and the failure began at 03:00, shortly after the job started — timing and difference both point at the job, possibly interacting with the fresh patch, which is option B. Option C is a prediction the evidence does not support: the other server has no clean-up job, so the suspected trigger is absent there. Option D fits poorly because hardware faults rarely resolve themselves neatly at 03:20 with no intervention, whereas a job that finishes and releases resources would. This tests the **Problem management** skill in miniature: investigate by comparing what is the same, what is different, and what happened when — then contribute findings so the team can implement a remedy, such as re-timing the job or testing the interaction.

**Question 12 (hard) — Integration reasoning under constraints**

A team must connect a new HR system to three existing systems: the identity service, the payroll system, and the reporting warehouse. The constraints are: (i) the identity connection must be built and tested before any other connection, because the other systems trust identity for login; (ii) the payroll connection can only be tested in the last week of the month, when the payroll test environment is refreshed; (iii) the reporting connection needs two weeks of build work and can start any time after identity is done; (iv) it is now the first week of the month, and the identity connection needs one week to build and test. What is the earliest the payroll connection can be tested, and what should the team work on while waiting?

- A) Test payroll in week 2; build reporting afterwards.
- B) Test payroll in the last week of the month; build the reporting connection during weeks 2 and 3 while waiting.
- C) Test payroll in the last week of the month; do nothing until then because identity must finish first.
- D) Test payroll immediately, because it is the most important system.

**Correct answer: B**

**Explanation:** Lay out the timeline. Week 1: build and test identity (constraint i and iv). Payroll can only be tested in the last week of the month (constraint ii), so week 2 is impossible — eliminating options A and D, which both ignore a hard constraint. That leaves the question of what to do in weeks 2 and 3. Constraint (iii) says reporting needs two weeks and can start any time after identity — so weeks 2 and 3 are exactly enough. Option C wastes two weeks: identity blocks the start of other connections, but once it is finished in week 1, nothing blocks reporting. Option B respects every constraint and uses the waiting time productively. This mirrors the challenges the role summary describes in **Systems integration** — designing, building, and testing interfaces between systems is mostly about sequencing work around dependencies and environment availability, and this item tests whether a candidate converts wordy constraints into a simple week-by-week grid and reads the answer off it.

### Administration tips

- **Watch for whether a candidate checks each part of a naming or IP convention** rather than trusting a first glance at the whole entry.
- **Score for whether a candidate concludes only what the information guarantees** — most deduction errors at this level over-conclude from a partial rule.
- **Note whether a candidate traces a full dependency chain** rather than stopping at the first hop.
- **Because this is an entry-level assessment, allow the interface's ungraded practice items first**, and keep timing consistent across candidates thereafter.
- **Use the integration-reasoning item (Question 12) to observe whether a candidate lays out a timeline or grid** before answering, rather than reasoning purely in their head.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that trusts a first glance.** Pattern questions are designed so the broken entry looks normal at speed.
- **Crediting a conclusion that goes beyond what the facts allow.** "Must be true" means true in every possible case, not "probably true".
- **Missing when a candidate reads a rule backwards** — "all production servers are backed up" does not mean "everything backed up is a production server".
- **Accepting an answer that prioritises by queue order or loudness** rather than impact and urgency.
- **Rewarding "fix it yourself" over "flag it promptly with good evidence"** — at associate level, escalation is usually the stronger answer, not heroics.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely produces: disk space figures, ticket counts, uptime percentages, patching completion rates, bandwidth readings, and simple cost tables. It is not a maths exam. There is no algebra, no trigonometry, and nothing beyond school-level mathematics — percentages, ratios, averages, rates, and reading tables and charts. What the assessment really measures is whether a candidate can extract the right numbers from realistic workplace data and do simple calculations with them carefully, sometimes under mild time pressure.

The typical format is an online, timed test lasting 20 to 30 minutes with 15 to 20 questions. Each question presents a small data set — a table of ticket volumes, a chart of server capacity, a summary of an invoice — followed by a multiple-choice question. Calculators are usually allowed (check the instructions each time), and rough paper is strongly recommended. Scores compare accuracy and speed against a norm group at a similar level. As with cognitive tests, many platforms adapt difficulty as the candidate goes.

Employers use numeric assessments for associate infrastructure engineers because infrastructure runs on numbers: storage support means reading capacity figures, monitoring support means reading utilisation percentages, and team reporting means counting tickets, measuring uptime, and tracking patching progress. Even at trainee level working under direction, a candidate will be asked to gather figures, sanity-check them, and notice when a number looks wrong — a disk filling faster than expected, an uptime figure that does not match a remembered outage. Numeric assessment checks that numbers are a tool the candidate can handle, not a source of anxiety.

### How this assessment maps to the role

- **Percentages and capacity calculations** map to the **IT infrastructure** skill: supporting storage, computing, and networking means constantly reading "used versus total" figures — disk usage, memory usage, licence counts — and converting between absolute numbers and percentages.
- **Rates and trends** map to the **Problem management** skill: investigating problems often means asking "how fast is this growing?" — a disk filling at 2 GB a day, a ticket type rising week on week — and contributing to preventative measures before the trend becomes an incident.
- **Averages and comparisons** map to the **Troubleshooting and problem resolution** skill: a server whose response time is far above the average of its identical twins is a clue, and recognising it requires comfortable, accurate averaging.
- **Reading tables and charts** maps to the **Ownership and topic** skill and awareness of problem resolution processes: ticket queues, SLA reports, and monitoring dashboards are all tables and charts, and routing problems correctly depends on reading them correctly.
- **Simple proportional reasoning** maps to the **Systems design** and **Systems integration** skills: assisting with component design and understanding interfaces involves sizing questions — if one server handles 200 users, how many servers do 900 users need? — that are ratio problems in work clothes.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Disk space percentage**

A file server has a 500 GB disk. The monitoring dashboard shows 350 GB used. What percentage of the disk is used?

- A) 60%
- B) 65%
- C) 70%
- D) 75%

**Correct answer: C**

**Explanation:** Percentage used = used ÷ total × 100. Step 1: 350 ÷ 500 = 0.7. Step 2: 0.7 × 100 = 70%. A quick sanity check: half of 500 is 250, so 350 is clearly more than half (50%) but less than four-fifths (400 GB would be 80%), and 70% sits comfortably in that range. This tests fluency with a calculation done daily when supporting storage as part of the **IT infrastructure** skill, and many teams have alert thresholds at 70%, 80%, and 90% — so translating between gigabytes and percentages is genuinely everyday work, not exam artifice.

**Question 2 (easy) — Counting tickets**

Last week a team closed the following numbers of tickets: Monday 12, Tuesday 15, Wednesday 9, Thursday 14, Friday 10. What was the average (mean) number of tickets closed per day?

- A) 11
- B) 12
- C) 13
- D) 14

**Correct answer: B**

**Explanation:** The mean = total ÷ number of days. Step 1: add the daily figures: 12 + 15 = 27; 27 + 9 = 36; 36 + 14 = 50; 50 + 10 = 60. Step 2: divide by the 5 days: 60 ÷ 5 = 12. The average is 12 tickets per day. This basic average appears in every weekly team report, and knowing it gives a baseline: a day with 25 closures or 3 closures then stands out as worth a question — the beginning of the pattern-and-trend thinking the **Problem management** skill describes.

**Question 3 (easy) — Uptime percentage**

A service is expected to be available 24 hours a day. Yesterday it was down for 36 minutes. Roughly what was its availability percentage for the day? (There are 1,440 minutes in a day.)

- A) 92.5%
- B) 95.0%
- C) 97.5%
- D) 99.5%

**Correct answer: C**

**Explanation:** Step 1: minutes up = 1,440 − 36 = 1,404. Step 2: availability = 1,404 ÷ 1,440 × 100. Step 3: 1,404 ÷ 1,440 = 0.975. Step 4: 0.975 × 100 = 97.5%. A faster route: work out the downtime percentage first — 36 ÷ 1,440 = 0.025 = 2.5% — then subtract from 100% to get 97.5%. This tests the faster subtraction route, which is how availability is calculated in real service reports. Availability percentages are the common currency of infrastructure services — a candidate who is comfortable converting between "minutes down" and "percentage available" understands what a team is measured against.

**Question 4 (easy) — Reading a simple table**

The patching report for four servers reads:

| Server | Patches required | Patches applied |
|---|---|---|
| LNWEB01 | 20 | 20 |
| LNWEB02 | 20 | 15 |
| LNAPP01 | 30 | 24 |
| LNDBS01 | 10 | 10 |

Which server has the lowest percentage of required patches applied?

- A) LNWEB01
- B) LNWEB02
- C) LNAPP01
- D) LNDBS01

**Correct answer: B**

**Explanation:** Calculate each percentage. LNWEB01: 20 ÷ 20 = 100%. LNWEB02: 15 ÷ 20 = 0.75 = 75%. LNAPP01: 24 ÷ 30 = 0.8 = 80%. LNDBS01: 10 ÷ 10 = 100%. The lowest is LNWEB02 at 75%. Note the trap: LNAPP01 has the most missing patches in absolute terms (6 missing versus LNWEB02's 5), but the question asks about percentage, and 5 missing out of 20 (25% missing) is proportionally worse than 6 missing out of 30 (20% missing). This tests whether a candidate re-reads the question to check which measure is being asked for — assessments, and real patching reports, frequently mix absolute counts and percentages. Patch compliance percentages connect directly to the **Information security** awareness of the controls that protect services.

**Question 5 (moderate) — Disk growth rate**

A log disk currently holds 240 GB of data on a 400 GB volume. The data is growing steadily at 8 GB per week. In how many weeks will the disk reach its 90% alert threshold?

- A) 10 weeks
- B) 15 weeks
- C) 20 weeks
- D) 25 weeks

**Correct answer: B**

**Explanation:** Step 1: find the 90% threshold in gigabytes: 90% of 400 = 0.9 × 400 = 360 GB. Step 2: find the remaining headroom: 360 − 240 = 120 GB. Step 3: divide headroom by the weekly growth rate: 120 ÷ 8 = 15 weeks. So the alert will trigger in 15 weeks. Common errors: using the full 400 GB instead of the 360 GB threshold (giving 160 ÷ 8 = 20 weeks, option C), or forgetting to subtract the current usage. This "when will we hit the threshold?" calculation is one of the most genuinely useful pieces of arithmetic in infrastructure support: it turns a monitoring number into a forecast, which lets a team plan a fix calmly instead of reacting to an alert at 2 a.m. — exactly the preventative thinking the **Problem management** skill asks a candidate to contribute to.

**Question 6 (moderate) — Ratio for sizing**

Guidance says one application server comfortably supports 150 concurrent users. A new internal service is expected to have 620 concurrent users at peak. Following the guidance, how many application servers are needed at minimum?

- A) 3
- B) 4
- C) 5
- D) 6

**Correct answer: C**

**Explanation:** Step 1: divide users by capacity per server: 620 ÷ 150 = 4.13 (to two decimal places). Step 2: because a fraction of a server cannot be deployed, and 4 servers would only support 4 × 150 = 600 users — leaving 20 users unsupported at peak — the answer must round up to 5 servers. Rounding down 4.13 to 4 (option B) is the classic error, and in real life it produces a service that falls over at peak. Check: 5 × 150 = 750 ≥ 620, so 5 works. This tests proportional reasoning applied to sizing, the same arithmetic used when assisting with component design as part of the **Systems design** skill — designs are full of "how many do we need?" questions, and the answer is always "divide, then round up".

**Question 7 (moderate) — Percentage change in incidents**

In March a team logged 160 incidents. In April the team logged 184 incidents. What was the percentage increase from March to April?

- A) 12%
- B) 15%
- C) 18%
- D) 24%

**Correct answer: B**

**Explanation:** Percentage change = (new − old) ÷ old × 100. Step 1: find the change: 184 − 160 = 24. Step 2: divide by the original (March) figure: 24 ÷ 160 = 0.15. Step 3: multiply by 100: 15%. The most common error is dividing by the new figure (24 ÷ 184 ≈ 13%) — percentage change is always measured against the starting value. Another trap is option D, which is just the raw difference (24) dressed as a percentage. This tests whether the candidate identifies the correct base — a 15% month-on-month rise in incidents is the kind of trend a team would investigate, and quantifying it correctly is the first contribution a candidate can make to that investigation.

**Question 8 (moderate) — Bandwidth and transfer time**

A 90 GB backup file must be copied to another site over a link that sustains 60 MB per second. Roughly how long will the transfer take? (Use 1 GB = 1,000 MB.)

- A) 15 minutes
- B) 25 minutes
- C) 40 minutes
- D) 90 minutes

**Correct answer: B**

**Explanation:** Step 1: convert the file size to megabytes: 90 GB × 1,000 = 90,000 MB. Step 2: divide by the transfer rate: 90,000 ÷ 60 = 1,500 seconds. Step 3: convert to minutes: 1,500 ÷ 60 = 25 minutes. So the transfer takes about 25 minutes. The unit conversions are where errors creep in: a strong candidate keeps units next to numbers (MB, MB/s, seconds, minutes) and checks they cancel sensibly. This kind of arithmetic matters whenever a team moves backups, restores data during an incident, or plans a migration window: "how long will this take?" is often the first question a supervisor asks.

**Question 9 (moderate) — Reading a chart of CPU usage**

A bar chart shows average CPU usage for server LNAPP01 across five days: Monday 40%, Tuesday 45%, Wednesday 85%, Thursday 44%, Friday 41%. The team considers anything above 80% "high". Which statement best describes the week?

- A) CPU usage was high all week.
- B) CPU usage was normal all week.
- C) CPU usage was normal except for a spike on Wednesday, which deserves investigation.
- D) CPU usage rose steadily through the week.

**Correct answer: C**

**Explanation:** Compare each day against the 80% threshold: Monday 40 (normal), Tuesday 45 (normal), Wednesday 85 (high), Thursday 44 (normal), Friday 41 (normal). Four days cluster in the low 40s and one day spikes above the threshold — a single outlier, not a steady rise (eliminating D) and not a uniformly high or normal week (eliminating A and B). This tests recognising that an outlier "deserves investigation", not instant alarm — perhaps a batch job ran, perhaps a backup overlapped with a busy period, perhaps something genuinely misbehaved. Reading charts against thresholds and spotting outliers is precisely how monitoring dashboards are used in the **Troubleshooting and problem resolution** skill: the chart shows where to look, and the investigation shows what it means.

**Question 10 (hard) — Combining percentages across servers**

A team manages 60 Windows servers and 40 Linux servers. This month, 90% of the Windows servers and 75% of the Linux servers were fully patched. How many servers in total were fully patched, and what percentage of the whole estate is that?

- A) 84 servers; 84%
- B) 82 servers; 82%
- C) 84 servers; 82.5%
- D) 80 servers; 80%

**Correct answer: A**

**Explanation:** Work each group separately, then combine. Step 1: Windows: 90% of 60 = 0.9 × 60 = 54 servers. Step 2: Linux: 75% of 40 = 0.75 × 40 = 30 servers. Step 3: total patched = 54 + 30 = 84 servers. Step 4: total estate = 60 + 40 = 100 servers, so the overall percentage = 84 ÷ 100 = 84%. Because the estate happens to total 100, the count and the percentage match. Note the tempting error in option C: averaging the two percentages (90% and 75%) gives 82.5%, but a simple average is wrong when the groups are different sizes — the Windows group is bigger, so it pulls the overall figure up. This tests recognition of the "weighted versus simple average" distinction, one of the most common traps in workplace numeric tests and in real compliance reporting alike.

**Question 11 (hard) — SLA arithmetic across a month**

A service has a 99.5% monthly availability target. In a 30-day month, how many minutes of downtime can the service have while still meeting the target, and did it meet the target if it actually had 3 hours 20 minutes of downtime? (30 days = 43,200 minutes.)

- A) Allowance 216 minutes; actual 200 minutes; target met
- B) Allowance 216 minutes; actual 220 minutes; target missed
- C) Allowance 432 minutes; actual 200 minutes; target met
- D) Allowance 216 minutes; actual 200 minutes; target missed

**Correct answer: A**

**Explanation:** Step 1: the allowed downtime is 100% − 99.5% = 0.5% of the month. Step 2: 0.5% of 43,200 minutes = 0.005 × 43,200 = 216 minutes. Step 3: convert the actual downtime: 3 hours 20 minutes = (3 × 60) + 20 = 180 + 20 = 200 minutes. Step 4: compare: 200 ≤ 216, so the target was met — option A. Option B miscalculates the actual downtime (3 hours 40 minutes would be 220). Option C doubles the allowance by using 1% instead of 0.5%. Option D does the arithmetic correctly but draws the wrong conclusion. This tests whether a candidate finishes the question, not just the calculation — SLA arithmetic like this is the backbone of service reporting, and understanding how minutes convert into percentages explains why a 20-minute outage at month-end can cause so much concern when the allowance is nearly spent.

**Question 12 (hard) — Cost comparison table**

A team is choosing between two support options for a software package used on 25 servers. Option 1: £40 per server per month. Option 2: a flat £700 per month for up to 20 servers, plus £25 per month for each server above 20. Over a full year, how much cheaper is the better option?

- A) £1,500 cheaper
- B) £2,100 cheaper
- C) £1,800 cheaper
- D) The options cost the same

**Correct answer: B**

**Explanation:** Cost each option per month, then per year. Step 1 — Option 1: 25 servers × £40 = £1,000 per month. Step 2 — Option 2: the flat £700 covers the first 20 servers; the extra 5 servers cost 5 × £25 = £125; total = £700 + £125 = £825 per month. Step 3 — monthly saving with the cheaper option (Option 2): £1,000 − £825 = £175. Step 4 — yearly saving: £175 × 12 = £175 × 10 + £175 × 2 = £1,750 + £350 = £2,100. So the better option is £2,100 cheaper over a year — option B. Option C (£1,800) comes from the common slip of costing the extra servers at £40 instead of £25 (£850 per month gives £150 × 12 = £1,800); option A comes from forgetting the extra-server charge entirely. This tests whether a candidate verifies with a second pass (recomputing 25 × 40 and 700 + 125 separately) before committing — cost comparisons like this are real associate-level work, and a careful pair of eyes on the arithmetic saves genuine money.

### Administration tips

- **Score for whether a candidate writes down the calculation** before computing — jotting "350 ÷ 500 × 100" catches the most common slip.
- **Watch for whether a candidate sanity-checks an answer against a landmark figure** (50%, 80%) rather than trusting the first computed number.
- **Note whether a candidate identifies which figure a question wants** — absolute number or percentage, increase or final value, per month or per year.
- **Allow a calculator throughout**, since the test measures reasoning with numbers, not mental arithmetic.
- **Use the weighted-average item (Question 10) to observe whether a candidate combines underlying counts** rather than averaging percentages from different-sized groups.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong base.** Percentage change uses the original value; patch compliance uses the required count; availability uses total minutes.
- **Crediting an answer that rounds down when capacity says round up.** 4.13 servers means 5 servers.
- **Accepting an average of percentages from different-sized groups** rather than a calculation from the underlying counts.
- **Missing a unit slip.** GB versus MB, hours versus minutes, per-month versus per-year.
- **Marking a calculation correct without checking the final comparison was made** — a candidate may compute 216 minutes correctly and still pick the wrong option by forgetting to compare it against the actual downtime.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands and evaluates written information of the kind this role really uses: security policy extracts, change procedures, supplier emails, incident reports, and knowledge-base articles. The classic format presents a short passage followed by statements the candidate must judge as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage gives neither enough support nor a contradiction). Other question types ask for the best summary of a passage, what can properly be inferred, or the clearest rewrite of a clumsy sentence.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. The golden rule throughout is: judge every statement using only the passage in front of the candidate, not their background knowledge. This feels strange for technical people, who know things about servers and networks that a passage might not mention — but the test measures careful reading, not technical knowledge.

Employers use verbal reasoning tests for associate infrastructure engineers because the working day is full of text that must be understood exactly. A runbook step misread is a service broken. A security policy skimmed is a control missed. An email from a supplier half-understood becomes a wrong configuration on a live system. At this level a candidate is often the person turning written instructions into careful actions under direction, so precise reading is arguably the most job-relevant skill an assessment can measure. Verbal assessments also check the other direction: recognising clear writing, since government work runs on clear tickets, handover notes, and written questions.

### How this assessment maps to the role

- **Reading policies and controls precisely** maps to the **Information security** skill: explaining information security and the security controls available to protect solutions and services starts with reading control descriptions exactly — what is mandatory, what is recommended, and what is conditional.
- **Following written procedures** maps to the **IT infrastructure** skill: supporting solutions, COTS software, and cloud services is guided by runbooks, vendor documentation, and departmental policy, all of which reward the careful, literal reading these tests measure.
- **Distinguishing fact from assumption** maps to the **Problem management** and **Troubleshooting and problem resolution** skills: an incident report tells the reader what was observed; a good investigator refuses to "read in" causes the report does not state — precisely the discipline behind "Cannot say".
- **Understanding explanations of process** maps to the **Systems integration** and **Modern development standards** skills: explaining the principles of integrating systems and the importance of modern development standards means digesting written explanations and repeating them accurately to others.
- **Knowing when to pass information on** maps to the **Ownership and topic** skill: passing problems to the team effectively depends on reading a ticket well enough to summarise it faithfully.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — True/False/Cannot say on a backup policy**

Passage: "All production servers must be backed up every night. Backup copies must be retained for 30 days. Test servers may be backed up at the discretion of the service team, but any backup taken of a test server must also be retained for 30 days."

Statement: "Test servers must be backed up every night."

- A) True
- B) False
- C) Cannot say
- D) True, but only at weekends

**Correct answer: B**

**Explanation:** The passage says test server backups are "at the discretion of the service team" — meaning optional, decided case by case. The statement claims they are compulsory every night, which directly contradicts the discretionary wording, so the answer is False. Notice the structure of the policy: one mandatory rule (production, nightly), one discretionary rule (test, optional), and one condition that applies once a choice is made (30-day retention either way). This tests whether a candidate slows down on "must" and "may" placed close together, which skim-readers merge — in **Information security** and backup work, the must/may distinction is exactly the difference between a compliance breach and a local choice.

**Question 2 (easy) — Comprehension of a service desk email**

Passage (email from the service desk): "Hi team — we're seeing repeated reports from floor 2 that the wifi drops out around 10:00 each morning. It reconnects by itself after a few minutes. No reports from other floors so far. Could someone take a look when you get a chance? It's annoying rather than urgent, but it's been happening all week."

Which summary best captures the email?

- A) The whole building loses wifi every morning and it is urgent.
- B) Floor 2 has a recurring, self-resolving wifi drop-out around 10:00 each morning; it is low urgency but persistent.
- C) Floor 2's wifi has failed permanently and needs immediate replacement.
- D) The service desk has fixed a wifi problem on floor 2.

**Correct answer: B**

**Explanation:** Test each summary against the email's facts. Option A over-extends "floor 2" to the whole building and contradicts "annoying rather than urgent". Option C contradicts "it reconnects by itself". Option D claims a fix the email never mentions — the desk is asking for help, not reporting a resolution. Option B matches every element: the location (floor 2), the pattern (around 10:00, all week), the behaviour (self-resolving after a few minutes), and the urgency ("annoying rather than urgent, but persistent"). This tests summarising a ticket faithfully — neither inflating nor shrinking it — a daily associate task, since when a problem is passed to the team, as the **Ownership and topic** skill describes, the team acts on that summary, so its accuracy directly shapes what happens next.

**Question 3 (easy) — Cannot say discipline**

Passage: "The department's standard build for laptops includes full-disk encryption, automatic screen locking after five minutes, and the approved antivirus package. Laptops that do not meet the standard build must not connect to the departmental network."

Statement: "The department's laptops are more secure than its desktop computers."

- A) True
- B) False
- C) Cannot say
- D) True, because encryption makes laptops secure

**Correct answer: C**

**Explanation:** The passage describes laptop controls only. It says nothing at all about desktop computers — their encryption, locking, antivirus, or anything else. Without any information about desktops, the two cannot be compared, so the answer is Cannot say. This is the discipline the True/False/Cannot say format exists to test: the statement is not contradicted (so not False), but it is not supported either (so not True). Option D shows the classic trap — using outside technical reasoning ("encryption is good, so laptops must be more secure") to fill the gap the passage leaves. This tests resisting that trap: the same discipline protects real incident notes, where the professional habit is to record what was observed, and resist recording what is merely assumed.

**Question 4 (easy) — Choosing the clearest rewrite**

A teammate drafts this ticket update: "The issue pertaining to the aforementioned server's non-functionality was in due course subjected to investigation by the undersigned, and remediation was effectuated via a restart." Which rewrite is clearest while keeping the meaning?

- A) "I investigated the server issue and fixed it by restarting the server."
- B) "The server issue, having been investigated, was resolved through the medium of a restart operation."
- C) "Investigation of non-functionality was effectuated; restart remediation followed."
- D) "The server was broken so somebody did something and now it's probably fine."

**Correct answer: A**

**Explanation:** Clear writing says who did what, in plain words, in natural order. Option A does exactly that: I investigated; I restarted; it is fixed — three facts, twelve words. Option B keeps the pompous passive constructions ("through the medium of"). Option C compresses the jargon but keeps it, and loses the actor entirely. Option D is informal to the point of being useless: "somebody did something" and "probably fine" destroy the information a ticket exists to record. This tests recognition of GOV.UK-style plain writing — short sentences, active voice, everyday words — which matters because ticket updates and handover notes are read by colleagues at 3 a.m. during incidents.

**Question 5 (moderate) — Inference from a change procedure**

Passage: "Standard changes are pre-approved, low-risk changes with a documented, repeatable procedure — for example, adding disk space to a virtual server. Normal changes require assessment and approval by the Change Advisory Board (CAB), which meets every Wednesday. Emergency changes may be implemented before approval, but must be reviewed retrospectively by the CAB at its next meeting."

Statement: "A change implemented on Friday to resolve a major outage, without prior approval, must be reviewed by the CAB the following Wednesday."

- A) True
- B) False
- C) Cannot say
- D) True, but only if the change fails

**Correct answer: A**

**Explanation:** Chain the passage's rules together. A change implemented before approval to resolve a major outage fits the emergency change description ("may be implemented before approval"). Emergency changes "must be reviewed retrospectively by the CAB at its next meeting". The CAB "meets every Wednesday". A change made on Friday therefore faces the CAB at the next Wednesday meeting. Every link is stated in the passage; joining them is inference, but supported inference — which makes the statement True rather than Cannot say. Option D adds a condition (only if it fails) that appears nowhere. This tests distinguishing supported inference (combining things the passage says) from unsupported assumption (adding things it does not) — the heart of moderate-level verbal questions, and of reading real change procedures, where the obligations that bite are often assembled from two separate sentences.

**Question 6 (moderate) — Reading a security control description**

Passage: "Multi-factor authentication (MFA) is required for all remote access to departmental systems. On-site access from managed devices connected to the wired network does not require MFA. Access from personal devices is prohibited regardless of location or authentication method."

Statement: "A member of staff working from home on a departmental laptop can access departmental systems if they use MFA."

- A) True
- B) False
- C) Cannot say
- D) False, because home working is prohibited

**Correct answer: A**

**Explanation:** Classify the scenario against each rule. Working from home is remote access, so the MFA requirement applies. The device is a departmental laptop, not a personal device, so the prohibition on personal devices does not apply. The staff member uses MFA, satisfying the requirement. Nothing in the passage blocks the access, and the MFA rule positively provides the route, so the statement is True. Option D invents a prohibition on home working the passage never states — it prohibits personal devices, which is a different thing. This tests a skill at the centre of the **Information security** skill: reading a control and applying it to a concrete case, exactly as a colleague might ask "am I allowed to…?" and expect a precise answer.

**Question 7 (moderate) — Identifying the main point of a standards passage**

Passage: "Modern development standards — such as version control for all configuration, automated testing, and infrastructure as code — are not only for software developers. When infrastructure teams keep server configurations in version control, changes become visible, reversible, and reviewable. When they automate testing of changes, mistakes are caught before they reach live services. Teams that adopt these standards spend less time firefighting and more time improving services."

What is the main point of the passage?

- A) Software developers should learn about infrastructure.
- B) Version control is too complicated for infrastructure teams.
- C) Modern development standards benefit infrastructure teams, not just developers.
- D) Automated testing eliminates all mistakes.

**Correct answer: C**

**Explanation:** The passage's opening sentence announces the thesis — these standards "are not only for software developers" — and every following sentence supports it with infrastructure-specific benefits: visibility and reversibility from version control, early error detection from automated testing, less firefighting overall. Option A reverses the direction of the argument. Option B contradicts the passage's positive tone. Option D overstates: the passage says mistakes are "caught before they reach live services", not eliminated — absolute words like "all" and "eliminates" in an answer option should always prompt a check of the passage's actual strength of claim. This tests quick recognition of main points, part of the **Modern development standards** skill, which asks a candidate to explain the importance of these standards — and explaining well starts with identifying the core message accurately.

**Question 8 (moderate) — True/False/Cannot say on a supplier notice**

Passage (supplier notice): "From 1 September, version 4 of the storage management software will no longer receive security updates. Customers on version 4 are advised to upgrade to version 5 before this date. Version 5 requires a minimum of 16 GB of memory on the management server. Customers with a current support contract can upgrade at no additional licence cost."

Statement: "Customers who stay on version 4 after 1 September will experience a security breach."

- A) True
- B) False
- C) Cannot say
- D) True, because unsupported software is always breached

**Correct answer: C**

**Explanation:** The notice says version 4 will stop receiving security updates — which increases risk — but it makes no claim that a breach will occur. "Will experience a security breach" is a prediction the passage neither supports nor contradicts: staying on version 4 might lead to a breach, or might not. So the answer is Cannot say. Option D's word "always" is doing dishonest work: unsupported software is riskier, not automatically breached, and in any case the passage does not say it. This tests reading a supplier notice with precision — a strong candidate's answer also notes what the passage does establish, since a follow-up question could test it: the deadline (1 September), the memory prerequisite (16 GB), and the licence cost condition (free only with a current support contract).

**Question 9 (moderate) — Inference from an incident report**

Passage (incident report extract): "At 14:05 users began reporting slow file access. At 14:20 monitoring confirmed high latency on the storage network. At 14:35 engineers identified a failed network card in storage switch B; traffic had automatically failed over to switch A, which was carrying double its usual load. The card was replaced at 16:10 and latency returned to normal by 16:25. No data was lost."

Which statement can properly be inferred from the report?

- A) Switch A cannot handle failover traffic.
- B) The failover mechanism worked, but performance degraded while one switch carried the full load.
- C) Users lost files during the incident.
- D) The network card failed because of poor maintenance.

**Correct answer: B**

**Explanation:** Option B assembles only what the report states: traffic "automatically failed over" (so the mechanism worked — the service stayed up), and switch A carried "double its usual load" while users experienced slowness (so performance degraded under single-switch load). Option A overstates: switch A did handle the traffic — with degraded performance, not failure. Option C is contradicted by "No data was lost". Option D invents a cause: the report says the card failed, not why. This tests the reading discipline the **Problem management** skill requires: the report gives observations and confirmed findings; causes beyond those findings are hypotheses to investigate, not facts to assert.

**Question 10 (hard) — Two conditions interacting in a policy**

Passage: "Administrative access to production servers is granted only to staff who have completed the privileged-access training and hold a current security clearance. Training completions expire after two years. Where clearance is under routine renewal, access may continue provided the renewal application was submitted before the previous clearance expired."

Statement: "A staff member whose training was completed 18 months ago, and whose clearance expired last week without a renewal application being submitted, may retain administrative access."

- A) True
- B) False
- C) Cannot say
- D) True, because the training is still valid

**Correct answer: B**

**Explanation:** The policy requires both conditions: current training and current clearance. Check each. Training: completed 18 months ago, expiry is at two years, so training is still valid. Clearance: expired last week. The continuation provision applies only "provided the renewal application was submitted before the previous clearance expired" — and the statement says no application was submitted. So the clearance condition fails, and the exception cannot rescue it. With one required condition failed, access may not be retained: the statement is False. Option D shows the "one good condition" trap — a conjunction ("and") needs every part true, and a valid training record cannot compensate for lapsed clearance. This tests correct application of a two-condition policy, part of explaining security controls under the **Information security** skill: list each required condition, check each independently, and remember that any single failure fails the whole.

**Question 11 (hard) — Evaluating an argument in an email**

Passage (email from a colleague): "We should stop applying the monthly patches to the print servers. In the last six months, two of our print outages happened within a day of patching. Patching takes the servers down for twenty minutes anyway, so users lose printing either way. Skipping patches would give users a more reliable service."

Which is the strongest criticism of the argument?

- A) It relies on only two incidents and ignores the security risk that patching exists to reduce, so the conclusion does not follow from the evidence.
- B) Print servers never have outages after patching.
- C) Twenty minutes of downtime is too long to be acceptable.
- D) Users do not care about printing reliability.

**Correct answer: A**

**Explanation:** Evaluate what the argument claims versus what its evidence supports. Two outages "within a day of patching" in six months is a small sample, and closeness in time does not prove the patches caused the outages. More importantly, the argument counts only the costs of patching (brief downtime, possible instability) and entirely omits its purpose — closing security vulnerabilities — so "more reliable service" ignores the risk of unpatched servers being compromised, which would cause far worse outages. Option A captures both flaws: weak evidence and a missing consideration. Option B is factually contradicted by the email itself. Options C and D are opinions that neither strengthen nor weaken the logic. This tests whether a candidate weighs an argument like this — colleagues will propose shortcuts with persuasive-sounding reasoning, and the **Modern development standards** and **Information security** awareness at this level equips a candidate to ask the quiet, useful question: "what does this control exist to prevent?"

**Question 12 (hard) — Precision across a whole passage**

Passage: "The data centre migration will proceed in three phases. Phase 1 moves development and test systems and is complete. Phase 2, scheduled for October, moves internal business systems; it requires a four-hour outage of each system, agreed with system owners at least two weeks in advance. Phase 3, moving public-facing services, will be scheduled only after a review of Phase 2, and no earlier than January. Any system found to have unsupported operating systems will not be migrated until upgraded."

Which statement is supported by the passage?

- A) Phase 3 will take place in January.
- B) A business system whose owner agreed an outage window one week in advance can be migrated in Phase 2 as planned.
- C) Development systems have already been moved, and a public-facing service running an unsupported operating system will not be migrated before it is upgraded.
- D) The Phase 2 review has already begun.

**Correct answer: C**

**Explanation:** Check each option against the exact wording. Option A converts "no earlier than January" into "in January" — a floor is not a date, so unsupported. Option B fails the stated condition: outages must be agreed "at least two weeks in advance", and one week breaches it. Option D refers to a review that can only happen after Phase 2, which is scheduled for October and not stated as complete — unsupported. Option C joins two things the passage does state: Phase 1 (development and test) "is complete", so development systems have moved; and the final sentence applies to "any system", which includes public-facing services, so an unsupported operating system blocks migration until upgraded. This tests systematic elimination on a long passage — testing each option's every clause, and preferring the option whose every part can be pointed to in the text, exactly how migration plans and policies should be read in **IT infrastructure** work.

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say.** This is the single most common error at this level, and Question 3 and Question 8 are both designed to surface it.
- **Note whether a candidate underlines or otherwise weights modal verbs** (must, may, should, can) rather than treating them as interchangeable.
- **Watch for outside technical knowledge being imported** into an answer — the passage is the whole world for this test.
- **Because this is an entry-level candidate, allow generous time**, and consider a brief practice passage before the timed items begin.
- **Use the clear-writing item (Question 4) to observe whether a candidate values plain, active language** over jargon dressed as competence.

### Common pitfalls to watch for when scoring

- **Marking a Cannot-say response wrong because it "seems obviously true".** False requires contradiction; a statement the passage merely fails to mention is Cannot say, however implausible it sounds.
- **Missing when a candidate skims a policy exception clause.** The "unless", "provided that", and "regardless of" clauses usually decide the answer.
- **Letting a passage's tone sway judgement** rather than its content — a friendly email can contain an unjustified conclusion, and a dry policy can be perfectly logical.
- **Crediting an answer that over-reads a cause into a report.** "The card failed" does not tell the reader why it failed.
- **Rewarding a summary that adds drama** — the best summary neither inflates nor deflates the passage's actual claims.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace scenarios and asks the candidate to judge the effectiveness of different responses. Unlike cognitive, numeric, and verbal tests, there is often no mathematically provable answer — instead, responses are scored against the judgement of experienced professionals and the behaviours the organisation values. Common formats include: choose the most effective response; choose the most and least effective responses; rank all responses from best to worst; or rate each response independently on an effectiveness scale.

The typical format is an online test of 15 to 25 minutes with 10 to 20 scenarios. It may be untimed or generously timed, because it measures judgement rather than speed. There are no trick questions, but there are carefully written "plausible but flawed" options — responses that feel decisive or helpful but cut a corner that matters, such as skipping an escalation, guessing instead of checking, or protecting the candidate's own comfort at a user's expense.

Employers use SJTs for associate infrastructure engineers because, at this level, judgement about how to act matters even more than technical knowledge. Working under direction in an established team raises constant small dilemmas: when to try something and when to ask; what to do on spotting something wrong that nobody has noticed; how to respond to a mistake; what comes first when two people want help at once. The safe, professional answers to these questions are what keep live public services stable while a candidate learns. The behaviours that score well are consistent and learnable: focus on users, be honest — especially about mistakes — ask for help early, follow the process, take ownership of handing things over properly, and treat colleagues with respect.

### How this assessment maps to the role

- **Escalation and passing problems on** maps directly to the **Ownership and topic** skill: showing awareness of problem resolution processes and passing problems to the team is the professional behaviour most SJT scenarios at this level test — not whether a candidate can fix everything, but whether they route things well.
- **Careful, honest handling of incidents** maps to the **Problem management** skill: contributing to the investigation of problems and to remedies and preventative measures requires honesty about what happened, including a candidate's own errors.
- **Safe hands with live systems** maps to the **IT infrastructure** and **Information security** skills: scenarios about changes, access requests, and security concerns test whether the candidate respects the controls that protect solutions and services.
- **Learning under direction** maps to the role level itself — a trainee in an established team: scenarios about asking for help, receiving feedback, and admitting the limits of knowledge test the learning behaviours this level is built around.
- **Team collaboration** maps to the **Systems design** and **Systems integration** skills, exercised "as part of a team": scenarios about sharing information, supporting colleagues, and communicating clearly test whether the candidate makes the team stronger.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Unsure about a runbook step**

The candidate is following a runbook to apply a routine update to a server, supervised loosely by a senior engineer who is at her desk nearby. Step 6 says "confirm replication has completed before proceeding", but the candidate is not sure how to check replication status. What is the most effective response?

- A) Skip step 6 — the update has always worked before, so replication is probably fine.
- B) Pause, and ask the senior engineer to show how to check replication status before continuing.
- C) Stop the whole task and log a ticket asking for the runbook to be rewritten.
- D) Guess which console screen shows replication and proceed if anything looks green.

**Correct answer: B**

**Explanation:** Option B is exactly what "working under direction" is designed for: pausing at the point of uncertainty, asking a specific question, and learning the skill for next time — the update proceeds safely and capability grows. Option A skips a safety check because of past luck; runbook steps exist because someone once learned their importance the hard way. Option D is guessing dressed as checking — "anything looks green" is not a verification. Option C over-reacts: the runbook may be fine and the gap may be in the candidate's own knowledge, which a two-minute conversation fixes; suggesting a runbook improvement afterwards would be a good extra step, but stopping the task entirely is disproportionate. This item tests honesty about what is not known and asking for help early — both of which score well at this level.

**Question 2 (easy) — A mistake is made**

While tidying user accounts under instruction, the candidate accidentally disables the account of an active staff member instead of a leaver with a similar name, realising the mistake ten minutes later. Nobody has noticed yet. What is the most effective response?

- A) Quietly re-enable the account and say nothing — no harm done.
- B) Re-enable the account immediately, then tell the supervisor what happened and how the two names were confused.
- C) Say nothing and hope the user does not report it.
- D) Tell the supervisor that the account system behaved strangely.

**Correct answer: B**

**Explanation:** Option B combines the two things that matter: fix the impact fast (re-enable the account), and be honest about the cause. Telling the supervisor is not self-punishment — it lets the team check for consequences that might not be visible (did the user lose access to anything mid-task? does the disablement appear in a security log that will confuse someone later?) and it may reveal a process weakness, such as leavers' names not being clearly marked, that the team can fix for everyone. That is the **Problem management** skill in behavioural form: remedies and preventative measures start with accurate information. Option A fixes the symptom but hides the information. Option C leaves a colleague locked out. Option D is actively dishonest and would poison trust if discovered. This item tests whether the candidate identifies honesty after a mistake as the reliably rewarded behaviour, in SJTs and in the culture that keeps government IT services safe.

**Question 3 (easy) — A user asks for a rule to be bypassed**

A friendly senior manager from another team stops the candidate in the corridor: "I need admin rights on my laptop for a conference demo tomorrow — the request process takes days. You can just do it quickly, can't you? I'll take responsibility." What is the most effective response?

- A) Grant the rights — a senior manager has accepted responsibility.
- B) Politely explain that rights cannot be granted outside the process, and offer to help raise an expedited request or find who can approve it urgently.
- C) Refuse and walk away without explanation.
- D) Grant the rights but ask the manager to keep it quiet.

**Correct answer: B**

**Explanation:** Access controls are part of the security controls that protect solutions and services — the **Information security** skill — and they exist independently of seniority or charm. "I'll take responsibility" is not a real control: the manager cannot absorb the consequences of malware installed with admin rights on a departmental device, and the action would still have been taken outside the process. Option B refuses the bypass while genuinely helping: many departments have urgent-request routes, and pointing the manager to one respects both the rule and the real need — that combination of firmness and helpfulness is what SJTs reward. Option A confuses authority with authorisation. Option C protects the rule but abandons the user. Option D is the worst: a policy breach plus concealment. This item tests whether the candidate finds the legitimate path rather than either complying or simply refusing.

**Question 4 (easy) — Two requests at once**

The candidate is alone at the team desk over lunch. A colleague from finance phones: her team's shared drive is inaccessible and month-end processing is due today. At the same moment, an engineer from the team messages asking for a cable from the store room for a job this afternoon. What is the most effective response?

- A) Fetch the cable first — the candidate's own team comes first.
- B) Take the finance caller's details, raise and prioritise their incident, alert the on-duty engineer to it, and tell the teammate the cable will follow shortly.
- C) Tell the finance caller to ring back when the team is back from lunch.
- D) Try to fix the shared drive personally and immediately without logging anything.

**Correct answer: B**

**Explanation:** Compare impact and urgency: a finance team blocked on month-end processing today is a live business impact with a deadline; a cable for an afternoon job can wait twenty minutes. Option B handles the urgent item properly — logged, prioritised, and escalated to someone who can fix it, which is exactly the "pass problems on to the team" behaviour in the **Ownership and topic** skill — while still committing to the smaller task. Option A prioritises social closeness over business impact. Option C abandons a user with a same-day deadline; "the team is at lunch" is a problem to solve by escalation, not the user's problem to solve by waiting. Option D has generous intent but skips logging (losing the record the team needs) and launches an unsupervised fix on a live service, which at this level risks making things worse. This item tests whether the candidate identifies the pattern that runs through associate-level SJTs: route it fast, log it properly, keep everyone informed.

**Question 5 (moderate) — Something wrong that nobody mentioned**

While checking backup job reports as part of morning tasks, the candidate notices that backups for one file server have failed silently for the last three nights. The server is not one the candidate looks after, and its named administrator is on leave this week. What is the most effective response?

- A) Note it down to mention when the administrator returns from leave next week.
- B) Raise it with the supervisor or the team straight away, with the evidence — the affected server and the three failed dates — so cover can be arranged.
- C) Attempt to fix the backup configuration personally since the administrator is away.
- D) Assume someone else has already noticed, since the reports are circulated to the whole team.

**Correct answer: B**

**Explanation:** Three nights of failed backups means the server currently has no recent recovery point: if it fails before the backups are fixed, data is lost. That risk grows every day, so option A's one-week delay is genuinely dangerous. Option D is the diffusion-of-responsibility trap — "someone else will have seen it" is precisely how silent failures stay silent; wide circulation makes it more likely everyone assumes someone else is acting. Option C exceeds the candidate's remit on an unfamiliar system: well-meant, but an incorrect backup change could quietly make things worse. Option B is proactive ownership scaled to this level: noticing, gathering specific evidence, and putting it in front of people who can act while the administrator is away. This item tests the **Ownership and topic** and **Problem management** skills — awareness of resolution processes, passing problems on effectively — the behaviour that builds a reputation as a safe, observant engineer.

**Question 6 (moderate) — Receiving critical feedback**

A supervisor reviews a set of server checks the candidate completed and points out, in front of another team member, that two checks were recorded as "passed" that were not actually performed, because the console page would not load and the candidate assumed they were fine. The supervisor is calm but clearly unimpressed. What is the most effective response?

- A) Explain that the console was broken, so it was not the candidate's fault.
- B) Acknowledge the mistake, correct the records now, perform or arrange the missed checks, and agree how to record inaccessible checks in future.
- C) Apologise profusely and offer to redo every check ever done.
- D) Say nothing, but privately resolve to argue the case to the team later.

**Correct answer: B**

**Explanation:** The core error was recording as done something that was not done — in infrastructure work, false "passed" records are worse than honest gaps, because the team plans around them. Option B owns that fully: acknowledge, correct the record, close the actual gap (the unperformed checks), and — the mark of a learner — agree the right procedure for next time, which turns the episode into a process improvement. That final step matters: "console would not load" is real information the team needs a convention for, such as recording "unable to verify — console error, escalated". Option A leads with self-defence; the console problem explains the difficulty but not the false record. Option C is disproportionate emotion that transfers the burden of reassurance to the supervisor. Option D converts feedback into grievance. This item tests how a candidate receives correction, a strong predictor of growth: the winning pattern is acknowledge, repair, prevent — without either defensiveness or collapse.

**Question 7 (moderate) — A colleague is struggling**

A fellow associate joined the team a month after the candidate. The candidate notices he has been stuck for most of the morning on a storage task learned last month, and he looks stressed. He has not asked anyone for help. The candidate's own task list for today is full but not urgent. What is the most effective response?

- A) Leave him to it — struggling alone is how everyone learns.
- B) Quietly offer to pair with him on the task for twenty minutes, showing what was learned, and suggest he checks the result with a senior engineer afterwards.
- C) Tell the supervisor that he is not coping with the role.
- D) Do the task for him while he watches, so it gets done quickly.

**Correct answer: B**

**Explanation:** Option B helps the person and the work while respecting everyone's role: pairing shares recent learning (recent learners often teach basics best, because they remember what was confusing), a time-box keeps commitments realistic, and routing the result past a senior engineer respects the fact that both are still trainees — the candidate's own knowledge is a month deep, so verification protects the service. Option A confuses productive struggle with abandonment; an established team is exactly the environment where asking and offering help should be normal. Option C escalates a normal learning moment into a performance concern behind his back — disproportionate and trust-damaging. Option D completes the task but not the learning, leaving him equally stuck next time. This item tests collaboration and inclusion — making the team one where it is safe to not know things yet — behaviours SJTs consistently reward.

**Question 8 (moderate) — Pressure to finish before the window closes**

The candidate is assisting a senior engineer with a maintenance task inside an agreed two-hour change window. With twenty minutes left, the senior engineer is called away to an urgent incident and says, "You've seen me do the remaining steps — finish it off, or roll it back, your call." The candidate has watched the remaining steps but never performed them. What is the most effective response?

- A) Finish the steps from memory — the window is closing and the steps have been watched.
- B) Check whether a documented procedure exists for the remaining steps; if it can be followed verifiably within the window, proceed carefully, and if not, perform the practised rollback and report the situation.
- C) Do nothing and let the window expire with the change half-applied.
- D) Phone the senior engineer repeatedly at the incident until he talks through each step.

**Correct answer: B**

**Explanation:** The decision hinges on verifiability. "I watched someone do it once" is not a safe basis for changing live infrastructure — but a documented procedure that can be followed step by step, within time, may be: that is what runbooks are for, and the engineer has explicitly delegated the call. If no such document exists or time is too tight, the rollback — a practised, planned path back to a known-good state — is the professionally safe choice, and reporting it promptly lets the team reschedule. That is option B: a genuine decision process, not a reflex. Option A gambles a live service on memory under time pressure. Option C is the worst technical outcome: a half-applied change is an undefined state, less safe than either completing or rolling back. Option D interferes with an urgent incident. This item tests the deeper **IT infrastructure** lesson that rollback is not failure; it is the system working as designed — a candidate should be rewarded for treating "safe retreat plus honest report" as a success.

**Question 9 (moderate) — Third-party engineer on site**

An engineer from a supplier arrives to replace a disk array controller. He is friendly and competent, but the candidate notices he is about to work on the array in rack 7, while the change ticket clearly says rack 9. He says, "The ticket's probably wrong — this is the model I usually work on." What is the most effective response?

- A) Let him proceed — he is the specialist and works on these arrays every week.
- B) Ask him to pause, and verify the correct array with the team before any work starts, explaining that the ticket and his intention disagree.
- C) Insist he works on rack 9 because the ticket says so.
- D) Let him proceed but note the concern in the ticket afterwards.

**Correct answer: B**

**Explanation:** Two authoritative sources disagree: the ticket says rack 9; the specialist says rack 7. Either could be wrong — tickets do contain errors, and specialists do assume. Working on the wrong array could take down a healthy production system, so the only safe move is to stop and verify before anything is touched, which is option B. Option A trusts expertise over verification; expertise is about how to do the work, not necessarily which system needs it. Option C makes the opposite error — enforcing the ticket without checking, when the engineer's doubt is itself evidence worth investigating. Option D is the most insidious: it recognises the risk and documents it while letting the risk happen; a note written after wrong-array work is an autopsy, not a control. This item tests the "pause and verify when sources disagree" behaviour — suppliers are partners, and the candidate who politely says "let's confirm before we start" is doing exactly the quality-assurance job the department needs.

**Question 10 (hard) — A security concern involving a senior colleague**

While shadowing a senior engineer, the candidate notices he logs into a shared administrator account using a password kept on a sticky note under the keyboard, remarking, "Everyone on the team uses this one — it's easier than personal admin accounts." Induction training established that shared administrator accounts and written-down passwords are against departmental security policy. What is the most effective response?

- A) Say nothing — he is senior, and this is apparently how the team works.
- B) Report him to the security team immediately without speaking to anyone else.
- C) Ask him about it at a suitable moment — mentioning what the training said — and if the practice continues unaddressed, raise the concern with the supervisor or the security team.
- D) Start using the shared account too, since everyone does.

**Correct answer: C**

**Explanation:** This scenario tests whether a candidate can hold onto a security principle under social pressure, and act on it proportionately. Option C does both: it starts with a direct, respectful conversation — perhaps there is context the candidate lacks, perhaps the team has an exemption, or more likely the practice has drifted and the question prompts a fix — and it commits to escalation if the risk remains, because shared credentials on a sticky note defeat accountability (no audit trail shows who acted) and are exactly what the **Information security** skill teaches controls exist to prevent. Option A makes seniority a reason to ignore policy; SJT scoring consistently penalises silent acquiescence on security matters. Option D actively joins the breach — the worst answer: "everyone does it" has never made a control unnecessary. Option B is not wrong in principle — security teams do want reports — but as a first move it skips the cheapest, fastest remedy (a conversation) and can damage team trust unnecessarily; it becomes the right move if the conversation fails. Proportionate escalation — person, then supervisor, then security team — is the professional pattern this item rewards.

**Question 11 (hard) — Balancing learning against delivery**

A supervisor offers the candidate a choice for the next fortnight: (a) continue doing daily ticket triage, now done quickly and confidently, because the team is busy and the candidate's speed genuinely helps; or (b) hand triage to another associate and join a project decommissioning old servers, never attempted before and which would stretch the candidate, but where the project would initially slow down. The supervisor says either choice is acceptable and asks what the candidate thinks. What is the most effective response?

- A) Choose triage — the team is busy and the candidate's speed helps most right now.
- B) Choose the project without discussion — development always comes first.
- C) Discuss it briefly: propose joining the decommissioning project for the learning, while offering to spend a short handover period coaching the other associate on triage so the team keeps its speed.
- D) Ask the supervisor to decide, since she knows best.

**Correct answer: C**

**Explanation:** There is no trap here — both (a) and (b) are defensible, which is why the strongest answer is the one that engages with the trade-off rather than picking a side blindly. Option C does three professional things at once: it prioritises development (a trainee who only repeats mastered tasks stops being trained — and the role level exists to grow into an infrastructure engineer), it mitigates the cost of that choice through a planned handover and coaching, and it treats the supervisor's question as a real invitation to think aloud, itself a skill being assessed. Option A is generous but short-sighted: it optimises this fortnight at the expense of growth and leaves the team with a single point of triage knowledge — the handover in option C actually reduces that risk. Option B grabs the development without acknowledging the team impact. Option D refuses the invitation to exercise judgement. This item tests whether a candidate chooses growth and takes responsibility for softening its costs.

**Question 12 (hard) — An incident during handover**

It is 17:25; the candidate's shift ends at 17:30, and there is a college class tonight. Five minutes ago the candidate noticed intermittent errors in the monitoring console for a database server that supports a public-facing service. It is not certain whether this is a real problem — it could be monitoring noise — and the evening on-call engineer takes over at 17:30. What is the most effective response?

- A) Leave at 17:30 — the on-call engineer will see the errors on the console if they matter.
- B) Stay as long as it takes to diagnose the errors personally, missing the class.
- C) Spend the remaining minutes writing a clear handover note — what was seen, when it started, which server and service — and directly brief the on-call engineer before leaving at 17:30.
- D) Silence the alerts so the console is tidy for the evening, and mention the errors tomorrow.

**Correct answer: C**

**Explanation:** The professional core of this scenario is the **Ownership and topic** skill in its purest form: own an issue until it has a new owner. Option C achieves exactly that transfer: the on-call engineer starts the evening knowing what to watch, when it began, and where — the observations only the candidate currently holds — and the shift ends on time with the issue safely handed over. A direct brief plus a written note is the gold standard, because spoken context and a durable record cover each other's gaps. Option A gambles that the engineer will notice, and discards the most valuable contribution: the time-of-onset context that consoles do not show. Option B is unsustainable heroism: uncertain monitoring errors do not justify missing commitments when a paid, prepared on-call engineer exists precisely for this. Option D is the genuinely harmful answer: silencing alerts removes the very signal the on-call engineer would need, converting possible noise into guaranteed blindness. This item tests handover quality, one of the most operationally important behaviours in 24/7 services.

### Administration tips

- **Score for whether a candidate escalates rather than attempts heroics** — "fix it yourself immediately" options usually skip logging, supervision, or expertise, and at associate level fast, accurate escalation is the strong move.
- **Watch for whether a candidate holds a line on controls even under friendly senior pressure**, while still offering a legitimate path forward.
- **Note whether a candidate's response to a mistake is fix, then tell, then prevent** — any option involving silence, cover-up, or a misleading account should score low.
- **Because this is an entry-level candidate, allow generous or untimed conditions**, since judgement, not speed, is being measured.
- **Use the handover item (Question 12) to observe whether a candidate transfers information explicitly** — a note, a brief, a logged ticket — rather than assuming the next person will find out.

### Common pitfalls to watch for when scoring

- **Rewarding an option where the candidate does nothing because "it is not my job".** Silent failures, struggling colleagues, and wrong-rack engineers are everyone's business to raise.
- **Crediting over-escalation as a first move** when a respectful conversation would resolve the issue.
- **Rewarding an option where the candidate sacrifices themselves unnecessarily** — missing commitments or skipping breaks often looks virtuous but models unsustainable behaviour.
- **Missing when a candidate lets seniority override controls** — managers, specialists, and even the candidate's own supervisor do not outrank security policy or change process in these scenarios.
- **Accepting a rollback or pause as if it were a weak answer** rather than recognising it as frequently the highest-scoring choice.

## Conclusion

This document has given you a set of practice materials covering all four assessment types most relevant to an associate infrastructure engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement, built from scenarios genuinely close to the role — server names and conventions, disk usage and SLA arithmetic, security policies and supplier notices, and the everyday dilemmas of a trainee working under direction.

The cognitive section checks server names against conventions, traces dependency chains, and reasons carefully about rules with exceptions. The numeric section covers disk usage percentages, growth forecasting, SLA arithmetic, and weighted averages. The verbal section checks the True/False/Cannot say discipline and precise reading of policies, supplier notices, and incident reports. The situational judgement section rehearses the behaviours that make an associate genuinely valuable: escalating early, admitting mistakes quickly, handing over properly, helping colleagues, and holding onto security controls even under friendly pressure.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. Because this is an entry-level candidate, a supportive debrief matters especially — a candidate who reasons well but lands on the wrong answer, or who is simply new to the format, is a different signal from one who guesses or shows a genuine gap. A short, kind conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can support live infrastructure safely, follow procedure precisely, and escalate honestly and promptly — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
