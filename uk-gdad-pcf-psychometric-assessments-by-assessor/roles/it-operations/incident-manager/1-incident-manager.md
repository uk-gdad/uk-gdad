# Incident Manager - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for incident manager, within the UK Government Digital and Data profession. These assessments are job-specific: they use the artefacts an incident manager genuinely handles — incident queues, priority matrices, configuration records, service level agreement (SLA) reports, escalation procedures, and knowledge articles — and the decisions genuinely made, such as diagnosing and prioritising incidents, deciding when to escalate a fault to major incident managers or problem managers, applying change control procedures, and coaching apprentices while the queue keeps moving.

The role's central purpose is to restore normal service operation as quickly as possible and minimise adverse effects on business operations. That purpose is cognitively demanding: every incident requires rapid pattern recognition (has this been seen before?), sound logical deduction (what could cause these symptoms?), careful error checking (does the configuration record match reality?), and disciplined prioritisation (which of several competing tickets genuinely matters most right now?). It is also numerically demanding — ticket volumes, SLA percentages, availability figures, and resolution times — and verbally demanding, since procedures and policy extracts are read under pressure and updates are written that colleagues and users must understand first time. Finally, it is behaviourally demanding: the role owns issues until a new owner is found, consults specialists effectively, and creates the right environment for a team, including apprentices being coached.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for this role, a mapping of the assessment dimensions to the specific skills in the incident manager capability framework, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed for this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Unlike a generic intelligence test, it presents the candidate with the everyday materials of the job — incident tickets, priority matrices, configuration management database (CMDB) records, change schedules, escalation rules, and diagnostic evidence — and asks them to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, comparing the candidate's responses against a norm group, and modern platforms often adapt question difficulty based on previous answers. Employers usually receive a breakdown of speed versus accuracy rather than a single score. Candidates are normally offered short, ungraded practice questions before the real test begins.

For an incident manager, cognitive ability assessment is particularly relevant because the role's professional value is structured thinking under time pressure. Restoring normal operations quickly means holding several moving parts in mind at once: which users and services are affected, what changed recently, which configuration items are involved, what the priority matrix says versus what judgement suggests, and whether a fault should be resolved at first contact or escalated to major incident management or problem management. A well-designed cognitive assessment simulates precisely those demands in miniature: it rewards the candidate who reads carefully, deduces only what the evidence supports, spots the inconsistent record, and ranks work by impact and urgency rather than by noise.

### How this assessment maps to the role

The assessment dimensions map directly to the skills in the incident manager capability framework:

- **Pattern recognition** maps to the **Incident management** and **Problem management** skills: diagnosing and prioritising incidents, and initiating actions to investigate patterns and trends, both depend on noticing recurring structure — five tickets that are really one fault, symptoms that repeat every Monday morning, errors that follow every deployment.
- **Logical deduction** maps to **Incident management** and **Change management**: investigating causes and finding resolutions means reasoning validly from symptoms and recent changes to plausible causes, and applying change control procedures means reasoning about what a rule permits and forbids.
- **Error checking** maps to **Asset and configuration management**: tracking, logging and correcting information to protect assets and components requires spotting mismatches between the CMDB, the asset register, and physical reality.
- **Prioritisation** maps to **Incident management** and **Ownership and initiative**: diagnosing and prioritising incidents, and owning an issue until a new owner is found or the problem is mitigated, depend on rapidly ranking what matters most and refusing to drop things.
- **Problem solving** maps to **Problem management**, **Service focus**, and the duty to provide first-time resolution by troubleshooting and diagnosing or escalating faults: users bring tangled technical symptoms that must be decomposed, tested efficiently, and — where required — escalated to specialists.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in an incident queue**

At 09:20 the candidate reviews the morning's new tickets:

1. "Cannot open shared finance drive" — Finance team, 3rd floor
2. "Printer offline" — HR, 1st floor
3. "Shared finance drive missing from file explorer" — Finance team, 3rd floor
4. "Access denied when opening finance drive" — Procurement, 3rd floor
5. "Laptop battery not charging" — Legal, 2nd floor

Which tickets most likely represent a single underlying fault?

- A) 1, 2 and 3
- B) 1, 3 and 4
- C) 2 and 5
- D) 3, 4 and 5

**Correct answer: B**

**Explanation:** Tickets 1, 3 and 4 share a common object (the finance shared drive), a common symptom family (cannot access), a common location (3rd floor), and a tight time window. Ticket 2 concerns a printer and ticket 5 concerns hardware power — different objects, different symptom families. Grouping related tickets is the first act of diagnosis: it converts three user reports into one incident with wider impact, which usually raises the priority and points investigation at a shared component (the file server, its permissions, or the network path to it) rather than at three individual desktops. This tests whether a candidate looks for the maximum number of shared attributes — object, symptom, location, timing — before grouping tickets.

**Question 2 (easy) — Logical deduction from an escalation rule**

The escalation procedure states: "If an incident affects more than 50 users, or affects any service on the critical services list, it must be escalated to the major incident manager." A colleague tells the candidate: "This incident affects 30 users and I have escalated it to the major incident manager." Which one of the following must be true?

- A) The incident affects a service on the critical services list.
- B) The colleague has breached the procedure.
- C) The procedure did not require this escalation, but it may still have been a reasonable judgement call.
- D) The incident should be de-escalated immediately.

**Correct answer: C**

**Explanation:** The rule says escalation is mandatory in two situations. It does not say escalation is forbidden in all other situations. With 30 users affected, the first trigger is not met, and nothing is stated about whether the service is on the critical list — so A is possible but not guaranteed. Because the rule only mandates escalation and never prohibits it, B cannot be concluded, and D goes far beyond the evidence. C is the only statement that must hold: the mandatory trigger for user numbers was not met, and nothing in the facts makes the escalation wrong. This tests whether a candidate reads exactly what a rule does and does not say — procedures set floors, not ceilings, and a candidate who accuses the colleague of a breach has over-read the rule.

**Question 3 (easy) — Error checking a CMDB record**

The candidate is correcting configuration records after a desk move. The CMDB shows:

| Asset tag | Type | Assigned user | Location | Status |
|---|---|---|---|---|
| LT-4471 | Laptop | A. Khan | Floor 2, Desk 14 | In use |
| LT-4472 | Laptop | B. Osei | Floor 2, Desk 15 | In storage |
| MN-2210 | Monitor | B. Osei | Floor 2, Desk 15 | In use |
| DK-0913 | Dock | Unassigned | Floor 2, Desk 15 | In use |

B. Osei works daily at Desk 15 using a laptop, monitor, and dock. Which record most clearly needs correcting?

- A) LT-4471
- B) LT-4472
- C) MN-2210
- D) DK-0913

**Correct answer: B**

**Explanation:** LT-4472 is assigned to B. Osei and located at their desk, yet its status reads "In storage" — contradicting the fact that B. Osei uses a laptop daily at that desk. The dock's "Unassigned" user field (D) is a lesser inconsistency worth tidying, but docks are sometimes deliberately assigned to desks rather than people, so it is not the clearest error; the question asks for the record that most clearly needs correcting. LT-4471 and MN-2210 are internally consistent. This tests the **Asset and configuration management** skill directly: track, log, and correct information to protect assets. A strong candidate's answer compares each record against the stated facts and picks the contradiction, not merely the untidiness.

**Question 4 (moderate) — Prioritisation using an impact and urgency matrix**

The priority matrix defines: Priority 1 = high impact + high urgency; Priority 2 = high impact + medium urgency, or medium impact + high urgency; Priority 3 = medium impact + medium urgency. Four incidents arrive within minutes:

1. The benefits-claim processing system is down for one regional office of 80 caseworkers; claims must be processed today to meet a statutory deadline.
2. A director cannot connect to the office wifi but has a working wired connection.
3. Email is delayed by around 30 minutes for the whole department; no data is lost.
4. One caseworker's monitor is flickering but usable.

Which incident should the candidate work first?

- A) Incident 1
- B) Incident 2
- C) Incident 3
- D) Incident 4

**Correct answer: A**

**Explanation:** Work the matrix, not the personalities. Incident 1 combines high impact (80 users, core business process stopped) with high urgency (statutory deadline today) — a clear Priority 1. Incident 3 has high breadth but low depth: everyone is affected, but email still flows with a delay and nothing is lost, so impact and urgency are both moderate at most. Incident 2 has a named senior person but a working alternative, which reduces urgency to low — seniority alone does not raise priority in a well-run process. Incident 4 is low on both axes. The trap in questions like this is the director: this item deliberately tests whether the candidate ranks by impact-weighted urgency or by who shouts loudest, and it directly probes the **Incident management** skill — diagnose and prioritise.

**Question 5 (moderate) — Deduction from recent changes**

At 08:00 Monday, users begin reporting that the case management application rejects their logins with "certificate error". The candidate gathers facts: (i) a security certificate on the application gateway was scheduled for renewal in Sunday night's change window; (ii) the change record for the renewal is marked "Completed — successful"; (iii) users of a second application behind the same gateway report no problems; (iv) the case management application uses its own additional certificate, which the gateway one does not replace. What is the most reasonable primary hypothesis to test first?

- A) The gateway certificate renewal failed despite the change record.
- B) The case management application's own certificate has expired or was disturbed.
- C) Users are typing their passwords incorrectly.
- D) The network path to the gateway is down.

**Correct answer: B**

**Explanation:** Reason from the discriminating evidence. If the gateway certificate were broken (A), the second application behind the same gateway would likely also fail — but it works, which weakens A. A network outage (D) would also affect both applications and would not usually produce a specific "certificate error". Password errors (C) do not generate certificate messages. That leaves the application's own certificate (B), which the gateway renewal did not touch and which fails only for this application — matching the observed pattern exactly. The technique tested is classic differential diagnosis: a strong candidate's answer prefers the hypothesis that explains why the failing thing fails and why the working things work, treats "the change record says successful" as evidence rather than proof, and still tests the most discriminating hypothesis first.

**Question 6 (moderate) — Error checking a change schedule against a freeze**

The change policy states: (i) standard changes may run any weeknight between 19:00 and 06:00; (ii) no changes at all may run during the last five calendar days of the financial year (1 April year end); (iii) emergency changes may run at any time with the service owner's approval. It is March. The schedule shows:

1. Standard patch, 25 March, 22:00
2. Standard firmware update, 28 March, 20:00
3. Emergency fix, 30 March, 14:00, service owner approval attached
4. Standard reboot, 31 March, 03:00

How many scheduled entries breach the policy?

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: C**

**Explanation:** The freeze covers the last five calendar days before 1 April: 27, 28, 29, 30, and 31 March. Entry 1 (25 March) is outside the freeze and inside the weeknight window — compliant. Entry 2 (28 March) is a standard change inside the freeze — breach. Entry 3 (30 March) is inside the freeze, but rule (iii) permits emergency changes at any time with service owner approval, which is attached — compliant. Entry 4 (31 March) is a standard change inside the freeze — breach, even though the time of day is otherwise acceptable. Two breaches. This tests whether the candidate establishes the freeze dates precisely before testing each entry against the rule that governs its type — applying change control procedures under supervision, the **Change management** skill, is exactly this kind of careful rule application.

**Question 7 (moderate) — Pattern and trend recognition across weeks**

Incident counts for the same application over six weeks: Week 1: 4, Week 2: 5, Week 3: 4, Week 4: 12, Week 5: 13, Week 6: 12. A colleague notes that a new software release was deployed at the start of Week 4. Which statement is the most defensible?

- A) The release caused the increase, and rolling it back will return counts to 4-5 per week.
- B) The step change coincides with the release, making the release a strong candidate cause that problem management should investigate.
- C) The variation is random noise and needs no action.
- D) Users have simply become more willing to report incidents.

**Correct answer: B**

**Explanation:** The data shows a step change, not a gradual drift: counts roughly triple exactly when the release lands, then hold at the new level. That pattern makes the release a strong candidate cause — but coincidence in time is evidence, not proof, so A overreaches by asserting causation and predicting the effect of a rollback. C ignores a sustained threefold shift that is far from noise. D invents an explanation with no supporting evidence and no reason it would begin precisely at Week 4. B states exactly what the evidence supports and routes it correctly: this tests the **Problem management** skill — initiating and monitoring actions to investigate patterns and trends, consulting specialists where required — and a strong candidate flags the correlation, protects the evidence, and passes a well-formed problem record to problem management rather than jumping to a fix.

**Question 8 (moderate) — Applied problem solving with limited test moves**

A user's laptop cannot reach any internal service, but a colleague's laptop at the next desk works normally. The candidate has time for exactly one test before deciding whether this is a device fault or a wider fault. Which single test gives the most diagnostic information?

- A) Restart the user's laptop and see if the problem clears.
- B) Plug the user's laptop into the working colleague's network port and cable.
- C) Ask the user when the problem started.
- D) Check whether the file server is up.

**Correct answer: B**

**Explanation:** The best single test is the one that splits the hypothesis space most evenly — a controlled swap. If the user's laptop works on the colleague's known-good port, the fault lies in the original port, cable, or socket configuration; if it still fails, the fault lies in the laptop itself. Either outcome eliminates roughly half the possibilities. A restart (A) might clear the fault without revealing what it was, and if it fails little is learned. Asking when it started (C) is good practice but is information gathering, not a discriminating test, and the question allows only one move. Checking the file server (D) is already effectively answered: the colleague reaches internal services, so shared infrastructure is very likely fine. This tests whether a candidate chooses tests by expected information gained — the same instinct that delivers first-time resolution instead of an afternoon of guesswork.

**Question 9 (challenging) — Multi-constraint scheduling of a fix**

A faulty network switch serving 40 users must be replaced. Constraints: (i) the replacement takes 2 hours and disconnects those users for the duration; (ii) the affected team runs statutory processing every weekday 09:00-12:00 that must not be interrupted; (iii) the only qualified engineer works 08:00-16:00 Monday to Friday; (iv) change control requires standard changes like this to start no earlier than one full working day after approval; (v) approval is granted at 14:00 on Monday. What is the earliest the replacement can start?

- A) Monday 14:00
- B) Tuesday 13:00
- C) Wednesday 08:00
- D) Wednesday 13:00

**Correct answer: D**

**Explanation:** Work the constraints in order. Rule (iv): approval at 14:00 Monday means Tuesday is the one full working day that must elapse, so the earliest start day is Wednesday — eliminating A and B. On Wednesday, the engineer is available from 08:00, but rule (ii) forbids disconnection during 09:00-12:00. Starting at 08:00 (option C) would run 08:00-10:00, overlapping the protected window — not allowed. The earliest start that keeps the entire 2-hour outage clear of 09:00-12:00 and inside the engineer's 08:00-16:00 day is 12:00 — but that time is not offered, and 13:00 comfortably satisfies every rule, finishing at 15:00 before the engineer leaves. D is therefore the earliest offered compliant start. This tests two things: whether the candidate translates each constraint into a concrete time restriction before combining them, and whether, when the computed ideal is not among the options, the candidate selects the earliest compliant option rather than abandoning the method.

**Question 10 (challenging) — Deduction with a misleading correlation**

Every time the nightly backup runs (02:00-04:00), the monitoring system logs high disk activity on Server X. This week, users report the case system on Server X is slow — but only between 10:00 and 11:00 each day. A colleague says: "The backups are obviously overloading Server X; move them to another server." Which observation most directly undermines the colleague's proposal?

- A) Backups are important and should not be moved.
- B) The slowness occurs six to eight hours after the backup finishes, so the backup activity and the user-visible slowness do not coincide.
- C) Server X has plenty of disk space.
- D) The monitoring system might be wrong.

**Correct answer: B**

**Explanation:** The colleague's causal story requires the load and the symptom to coincide, or at least for a mechanism to connect 02:00-04:00 activity to 10:00-11:00 slowness. Nothing offered supplies that mechanism, and the timing mismatch is direct evidence against the simple version of the claim. B attacks exactly the weak joint. A is a value statement, not evidence. C addresses disk space, but the claim was about activity load, not capacity — a subtle scope error. D is generic doubt that could be aimed at anything and therefore discriminates nothing. This tests whether a candidate checks that a proposed cause and the observed effect actually meet in time, rather than accepting a plausible-sounding cause with a timing flaw — the difference between a well-aimed problem investigation and a weekend spent moving backups for no benefit.

**Question 11 (challenging) — Prioritisation while coaching**

The candidate is mid-way through coaching an apprentice through their first server patch verification — a task they can almost do alone — when three things happen at once: a Priority 2 incident is assigned (finance system degraded, workaround exists, 4-hour response target), the service desk calls to say a director is "furious" about yesterday's closed ticket, and the apprentice reaches a step they have never done before. What is the most effective immediate allocation of attention?

- A) Abandon the coaching session, take the Priority 2, and tell the apprentice to wait until tomorrow.
- B) Acknowledge the Priority 2 within its response target, ask the service desk to log the director's complaint for follow-up today, and spend the next few minutes getting the apprentice safely through or safely paused at the new step.
- C) Deal with the director first — reputational issues always outrank incidents.
- D) Let the apprentice attempt the unfamiliar step alone while taking the Priority 2 and phoning the director.

**Correct answer: B**

**Explanation:** Test each demand for real urgency. The Priority 2 has a 4-hour response target and a workaround: it needs timely acknowledgement and a plan, not instant hands-on-keyboard. The director's complaint concerns a closed ticket — important for confidence in the service, but yesterday's issue, so a same-day commitment is proportionate. The apprentice is at the one moment where unsupervised action carries real technical risk: an unfamiliar step in a live patch verification. B sequences all three correctly: meet the formal target, convert the complaint into tracked work, and eliminate the live risk by supervising or safely pausing the apprentice's step. A pays for the incident with the apprentice's development and leaves work half-done; C mistakes loudness for priority; D creates avoidable operational risk. This reflects two named skills at once — **Community collaboration** (contribute to the work of others, create the right environment) and **Ownership and initiative** (own issues until properly handed over) — and tests whether the candidate sequences demands rather than sacrificing one for another.

**Question 12 (challenging) — Reconstructing an incident timeline**

Five events occurred during an outage, but the log timestamps come from three systems whose clocks differ. Facts: (i) the application error appeared in the app log at 10:12 app-clock; (ii) the network switch rebooted at 10:02 network-clock; (iii) the app-clock is known to run 5 minutes ahead of true time; (iv) the network-clock is known to run 3 minutes behind true time; (v) the service desk logged the first user call at 10:09 true time. In true time, what is the correct order of events?

- A) Switch reboot, application error, first user call
- B) Application error, switch reboot, first user call
- C) Switch reboot, first user call, application error
- D) First user call, switch reboot, application error

**Correct answer: A**

**Explanation:** Convert everything to true time before ordering. The application error: 10:12 app-clock minus the 5 minutes it runs fast = 10:07 true time. The switch reboot: 10:02 network-clock plus the 3 minutes it runs slow = 10:05 true time. The user call is already 10:09 true time. Ordered: switch reboot (10:05), application error (10:07), first user call (10:09) — option A. The direction of correction is where candidates commonly slip: a fast clock shows a later time than reality, so the correction subtracts; a slow clock shows an earlier time, so the correction adds. This matters beyond the test: incident timelines drive root cause analysis, and a timeline built from unadjusted clocks can make the victim look like the culprit — here, the corrected order supports "switch reboot caused the application error", while the raw timestamps suggest the reverse.

### Administration tips

- **Watch for whether a candidate groups tickets by shared attributes** (object, symptom, location, timing) before diagnosing, rather than treating each ticket in isolation.
- **Score for whether a candidate applies the priority matrix consistently**, and note if a senior person's issue is allowed to distort the ranking.
- **Note whether a candidate reads a rule for what it does and does not say** — most deduction items turn on the fourth category (unmentioned cases).
- **Keep timing consistent** across candidates for this level.
- **Use the timeline-reconstruction item (Question 12) to observe whether a candidate normalises data before comparing it**, a habit that also matters for CMDB checking.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that ranks by seniority instead of priority.** Apply impact and urgency; a candidate who lets a director's minor issue outrank a major service fault should not score well here.
- **Crediting an answer that concludes causation from coincidence.** "It broke after the change" makes the change a suspect, not a convict.
- **Missing when a candidate accuses someone of breaching a rule that the rule does not in fact forbid.**
- **Scoring a technically-fixed scenario as if the question asked for the fix.** Some items ask which test or interpretation is best, not what the remedy is.
- **Rushing table checks yourself when verifying an answer.** Check each row against each rule methodically before marking a response wrong.
- **Treating "my computed answer isn't listed" as a candidate error** without checking whether the candidate re-checked and chose the best-fitting option.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures a candidate's ability to interpret, manipulate and draw sound conclusions from numerical information of the kind this role genuinely produces. Rather than abstract arithmetic, the candidate works with service management data: ticket volumes, SLA achievement percentages, availability figures, mean time to resolve, first-time fix rates, capacity utilisation, and simple cost calculations.

Typical format: an online, timed test lasting 20 to 35 minutes with 15 to 25 questions, each presenting a table, chart, or short data description followed by multiple-choice options. Calculators are usually permitted — the test measures reasoning with numbers, not mental arithmetic for its own sake. Questions typically require percentages, ratios, averages, rates of change, and reading values accurately from tables. Adaptive versions adjust difficulty as the candidate goes, and employers typically see accuracy, speed, and consistency.

For an incident manager, numeric reasoning is core business: judging whether the service is meeting its SLA targets, whether an incident trend is rising or noise, whether capacity headroom is shrinking, and whether the team's first-time fix rate justifies the way work is routed. The role also uses numbers persuasively: escalating a fault or proposing a preventative measure usually rests on a numerical case — how many users, how many hours lost, how often it recurs. Numeric reasoning is assessed for this role because a manager who misreads a percentage or confuses an average with a target makes confident-sounding decisions on false foundations, and in incident management those decisions play out in real time against real users.

### How this assessment maps to the role

- **Percentages and targets** map to **Availability and capacity management**: explaining availability and capacity processes means working fluently with availability percentages, utilisation figures and headroom calculations.
- **Rates and averages** map to **Incident management**: diagnosing and prioritising incidents at scale involves resolution times, arrival rates and backlog arithmetic — knowing whether the queue is draining or growing.
- **Trend reading** maps to **Problem management**: initiating and monitoring actions to investigate patterns and trends requires distinguishing a genuine trend from week-to-week noise in incident counts.
- **Table accuracy** maps to **Asset and configuration management**: tracking, logging and correcting information is numerically careful work — counts of assets, licence totals, stock levels — where one misread cell corrupts a decision.
- **Evidence with data** maps to **User focus**: using quantitative and qualitative data about users to turn user focus into outcomes means computing the numbers that show where users are suffering most.
- **Cost and volume reasoning** maps to **Service focus** and **Change management**: establishing coherent frameworks that work, and implementing change requests, both benefit from weighing the numerical case for a fix or a change.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage of tickets resolved within SLA**

Last week the team closed 240 incidents. Of these, 204 were resolved within their SLA target time. What percentage were resolved within SLA?

- A) 82%
- B) 85%
- C) 87%
- D) 90%

**Correct answer: B**

**Explanation:** Percentage within SLA = (within SLA ÷ total) × 100. Step 1: 204 ÷ 240 = 0.85. Step 2: 0.85 × 100 = 85%. A quick sanity check: 10% of 240 is 24, so 90% would be 216 closed within SLA — more than 204, so the answer must be below 90%; and 80% would be 192 — fewer than 204, so the answer is between 80% and 90%. This is the single most common calculation in this role's reporting: SLA achievement drives conversations with service owners and identifies where **Availability and capacity management** attention is needed.

**Question 2 (easy) — First-time fix rate**

Of 150 incidents the team handled at first contact this month, 96 were fully resolved without escalation to major incident managers or problem managers. What is the first-time fix rate?

- A) 60%
- B) 64%
- C) 68%
- D) 72%

**Correct answer: B**

**Explanation:** First-time fix rate = resolved at first contact ÷ total handled × 100. Step 1: 96 ÷ 150 = 0.64. Step 2: 0.64 × 100 = 64%. If dividing by 150 feels awkward, simplify the fraction first: 96/150 = 32/50 = 64/100 = 64%. First-time resolution is named in the role description — providing first-time resolution by troubleshooting and diagnosing or escalating faults — so this is a metric the candidate will both compute and be measured by in the job. This tests basic percentage fluency on the role's own headline metric.

**Question 3 (easy) — Reading an availability table**

The monthly service report shows:

| Service | Target availability | Actual availability |
|---|---|---|
| Case management | 99.5% | 99.2% |
| Email | 99.0% | 99.4% |
| Intranet | 98.5% | 98.5% |
| Payments | 99.9% | 99.6% |

How many services missed their availability target?

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** Compare each row: Case management 99.2% against 99.5% — missed. Email 99.4% against 99.0% — met and exceeded. Intranet 98.5% against 98.5% — met exactly (meeting a target equals achieving it unless the report says "must exceed"). Payments 99.6% against 99.9% — missed. Two services missed. The traps are Intranet (exactly meeting a target is not a miss) and the temptation to skim rather than compare each pair. A strong candidate's answer also notes that Payments missed by 0.3 percentage points against the tightest target — in availability terms the most serious miss on the table, the kind of observation that makes reporting genuinely useful.

**Question 4 (moderate) — Converting availability to downtime**

A service has a 99.5% availability target measured over a 30-day month (720 hours). The service actually suffered 5 hours of unplanned downtime. Did the service meet its target, and what was its actual availability (to one decimal place)?

- A) Met the target; 99.5%
- B) Missed the target; 99.3%
- C) Met the target; 99.3%
- D) Missed the target; 98.6%

**Correct answer: B**

**Explanation:** Step 1: allowed downtime at 99.5% availability = 0.5% of 720 hours = 0.005 × 720 = 3.6 hours. Step 2: actual downtime of 5 hours exceeds 3.6 hours, so the target was missed. Step 3: actual availability = (720 − 5) ÷ 720 = 715 ÷ 720 = 0.99305… ≈ 99.3%. So: missed, 99.3%. The percentage-to-hours conversion is worth checking for fluency in both directions, because "99.5%" sounds close to "99.3%" until translated: the service was down for 1.4 hours longer than its whole monthly allowance. This tests whether a candidate can translate availability percentages into human terms — hours of users unable to work — which is what makes **Availability and capacity management** explanations land with non-technical stakeholders.

**Question 5 (moderate) — Mean time to resolve**

Five Priority 3 incidents were resolved with these durations: 2.0 hours, 3.5 hours, 1.5 hours, 6.0 hours, and 2.0 hours. What is the mean time to resolve, and how many of the five incidents took longer than the mean?

- A) Mean 3.0 hours; 1 incident above the mean
- B) Mean 3.0 hours; 2 incidents above the mean
- C) Mean 2.5 hours; 2 incidents above the mean
- D) Mean 3.5 hours; 1 incident above the mean

**Correct answer: B**

**Explanation:** Step 1: sum the durations: 2.0 + 3.5 = 5.5; 5.5 + 1.5 = 7.0; 7.0 + 6.0 = 13.0; 13.0 + 2.0 = 15.0 hours. Step 2: divide by the count: 15.0 ÷ 5 = 3.0 hours mean. Step 3: count incidents strictly above 3.0 hours: 3.5 (yes) and 6.0 (yes) — 2 incidents. The correct pairing is mean 3.0 hours with 2 incidents above it — option B. Two answer options share the computed mean of 3.0, so the second component decides it — this deliberately tests whether the candidate verifies each part independently rather than anchoring on the first match. It also tests whether the candidate notices that one long incident (6.0 hours) pulls the mean above the typical case: with skewed durations, the mean exceeds what most incidents experience, which is why many teams also track the median.

**Question 6 (moderate) — Queue arithmetic: is the backlog growing?**

The queue starts Monday with 30 open incidents. During the week, new incidents arrive at an average of 45 per day, and the team resolves an average of 42 per day, across 5 working days. How many open incidents remain at the end of Friday?

- A) 30
- B) 33
- C) 45
- D) 60

**Correct answer: C**

**Explanation:** Step 1: net daily change = arrivals − resolutions = 45 − 42 = +3 incidents per day. Step 2: over 5 days, the backlog grows by 3 × 5 = 15. Step 3: final backlog = 30 + 15 = 45. The important professional insight, which a strong candidate's answer often volunteers, is that a small daily gap compounds: resolving "nearly as many as arrive" still means a growing queue, and a queue that grows 50% in a week will breach SLAs soon after, because older tickets age toward their targets. This is the arithmetic behind capacity conversations: the team needs either 3 more resolutions per day or fewer arrivals, which is where **Problem management** — preventing recurrence — pays off.

**Question 7 (moderate) — Ratio of incidents to users across sites**

Site A has 600 users and raised 90 incidents last month. Site B has 250 users and raised 60 incidents. Which site has the higher incident rate per user, and what is that rate?

- A) Site A; 0.15 incidents per user
- B) Site A; 0.24 incidents per user
- C) Site B; 0.24 incidents per user
- D) Site B; 0.15 incidents per user

**Correct answer: C**

**Explanation:** Step 1: Site A rate = 90 ÷ 600 = 0.15 incidents per user. Step 2: Site B rate = 60 ÷ 250 = 0.24 incidents per user. Step 3: compare: 0.24 > 0.15, so Site B has the higher rate. The raw counts mislead — Site A raised more incidents in total, but only because it has more than twice the users. This tests whether a candidate normalises by population before comparing sites, teams or services of different sizes, which is exactly how **User focus** becomes quantitative: per-user rates show where users are genuinely suffering most, which is where investigation effort should go first.

**Question 8 (moderate) — Percentage change in incident volume**

Incident volume for a service was 160 in June and 200 in July. One colleague says "volume went up 25%", and another says "no, July is 20% higher than June is of July". What is the correct percentage increase from June to July?

- A) 20%
- B) 25%
- C) 40%
- D) 12.5%

**Correct answer: B**

**Explanation:** Percentage change is always measured against the starting value. Step 1: change = 200 − 160 = 40. Step 2: divide by the June (starting) figure: 40 ÷ 160 = 0.25. Step 3: × 100 = 25% increase. The second colleague computed 40 ÷ 200 = 20%, dividing by the ending value — a very common error that understates growth. This tests whether the candidate spots the wrong-base error, and a strong candidate's answer also notes the direction matters in reverse: if volume later falls from 200 back to 160, that is a 20% decrease (40 ÷ 200), not 25% — percentage changes are not symmetric.

**Question 9 (challenging) — Weighted SLA achievement across priorities**

The monthly report shows:

| Priority | Incidents closed | Within SLA |
|---|---|---|
| P1 | 10 | 7 |
| P2 | 40 | 32 |
| P3 | 150 | 135 |

What is the overall percentage of incidents resolved within SLA, and which priority band performed worst?

- A) 87%; P1 worst
- B) 90%; P3 worst
- C) 87%; P2 worst
- D) 85%; P1 worst

**Correct answer: A**

**Explanation:** Step 1: total closed = 10 + 40 + 150 = 200. Step 2: total within SLA = 7 + 32 + 135 = 174. Step 3: overall = 174 ÷ 200 = 0.87 = 87%. Step 4: band rates: P1 = 7 ÷ 10 = 70%; P2 = 32 ÷ 40 = 80%; P3 = 135 ÷ 150 = 90%. Worst band is P1 at 70%. So: 87% overall, P1 worst — option A. Two things this item tests. First, whether the candidate avoids simply averaging the band percentages (70 + 80 + 90) ÷ 3 = 80% — that unweighted average ignores the very different volumes and gives the wrong overall figure. Second, whether the candidate notices that the overall 87% hides the operationally worst news: the highest-impact incidents have the weakest SLA performance. A strong candidate's answer reports both numbers, because the headline can look healthy while the incidents that hurt users most are the ones breaching.

**Question 10 (challenging) — Capacity trend and headroom**

A file server's storage utilisation was 60% at the end of March, 66% in April, 72% in May, and 78% in June. Growth is roughly linear. The service's policy requires action before utilisation reaches 90%. If the pattern continues, during which month will utilisation first reach 90%?

- A) July
- B) August
- C) September
- D) October

**Correct answer: B**

**Explanation:** Step 1: find the monthly growth: 66 − 60 = 6; 72 − 66 = 6; 78 − 72 = 6 — a steady 6 percentage points per month. Step 2: project forward from June's 78%: July = 84%, August = 90%. Step 3: 90% is first reached in August. The follow-on professional judgement, which a strong candidate's answer volunteers, is that the policy requires action before 90%, and provisioning extra storage takes lead time, so the correct operational move is to raise the capacity action in July at the latest — ideally now. This is **Availability and capacity management** in its simplest useful form: three subtractions, one projection, and a service that never becomes an incident. This item rewards candidates who compute the growth rate from the data given rather than eyeballing the chart.

**Question 11 (challenging) — Cost of downtime versus cost of prevention**

A recurring fault causes an average of 2 outages per month, each lasting 3 hours, each affecting 120 caseworkers whose loaded staff cost is £25 per hour. A permanent fix costs £30,000 as a one-off. Ignoring all other factors, after how many months does the fix pay for itself?

- A) 1 month
- B) 2 months
- C) 3 months
- D) 4 months

**Correct answer: B**

**Explanation:** Step 1: cost per outage = 3 hours × 120 staff × £25 = £9,000. Step 2: monthly cost = 2 outages × £9,000 = £18,000. Step 3: payback = £30,000 ÷ £18,000 = 1.67 months, so the fix has fully paid for itself during the second month — after 2 months, cumulative avoided cost is £36,000, exceeding £30,000. Option A fails because after 1 month only £18,000 has been avoided. This is the arithmetic behind determining preventative measures in the **Problem management** skill: a fix that "costs a lot" is often cheap next to the quiet, recurring cost of lost staff hours, and this item tests whether a candidate can turn "we should fix this" into a payback period a budget holder could approve in one meeting.

**Question 12 (challenging) — Interpreting a two-way table without overclaiming**

A quarterly analysis of 400 incidents shows:

| | Resolved at first contact | Escalated |
|---|---|---|
| Hardware incidents | 90 | 30 |
| Software incidents | 150 | 130 |

A colleague concludes: "Software incidents are harder, and the software team is underperforming." Which statement is best supported by the data alone?

- A) The software team is underperforming and needs retraining.
- B) Hardware incidents had a higher first-contact resolution rate (75%) than software incidents (about 54%), but the data alone does not explain why.
- C) Software incidents are intrinsically harder than hardware incidents.
- D) Escalation rates are similar for both categories.

**Correct answer: B**

**Explanation:** Compute the rates first. Hardware: 90 resolved of 120 total = 90 ÷ 120 = 75% first-contact resolution. Software: 150 of 280 total = 150 ÷ 280 ≈ 53.6% ≈ 54%. So D is false — the rates differ substantially. A and C both go beyond the data: a lower first-contact rate could reflect harder incidents, different escalation rules for software, a staffing gap, or a new application bedding in; the table cannot distinguish these. B states the computed facts accurately and stops where the evidence stops. This tests the numeric twin of good incident diagnosis: the numbers tell a candidate where to look — they rarely tell them, on their own, what they will find. An answer with an honest "why is not yet known" is what makes trend reports trusted inputs to problem management rather than ammunition for blame.

### Administration tips

- **Check whether a candidate writes the formula before substituting numbers** — this predicts fewer wrong-base errors under time pressure.
- **Watch for whether a candidate sanity-checks an answer** — an implausible availability figure or a backlog that shrinks while arrivals exceed resolutions should prompt a re-check.
- **Note whether a candidate weights an average by volume** rather than averaging percentages across different-sized groups (Question 9 is designed to surface this).
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the two-way table item (Question 12) to observe whether a candidate stops at what the data supports** rather than overclaiming a cause.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong base.** Percentage change uses the starting value; SLA achievement uses total closed; per-user rates use the user population.
- **Accepting an unweighted average across different-sized groups** as if it were the true overall figure.
- **Missing when a candidate confuses a count with a rate** — the site with the most incidents is not necessarily the site with the worst service.
- **Not checking which row or column a candidate actually read** when their answer is wrong; a transcription error is a different signal from a reasoning error.
- **Crediting an answer that overclaims from a table** — "the rate is lower" is supported; "the team is underperforming" is not.
- **Ignoring skew.** One six-hour incident drags a mean upward; when an answer hinges on "typical" performance, check whether the candidate accounted for an outlier.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role actually uses: service management procedures, escalation policies, continuity plans, knowledge articles, incident communications, and extracts from standards. The dominant format presents a short passage followed by statements the candidate must classify as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage provides insufficient information either way). Other question types test inference, identifying the main point, and judging which piece of writing communicates most clearly.

Typical format: an online, timed test lasting 15 to 25 minutes with 20 to 30 statements across several passages. The discipline being tested is strict: the candidate must reason only from the passage, setting aside their own technical knowledge, even when the passage describes a process differently from how their department runs it. Employers often use adaptive difficulty and report both accuracy and pace.

For an incident manager, verbal precision is an operational skill, not an academic one. Escalation criteria are read while the clock runs, and misreading "and" as "or" changes who gets woken up. Change control procedures are read where "must" and "should" carry different weight. Incident updates are written that users, service desk colleagues, and senior managers will act on. And coaching apprentices routinely means translating dense procedure into plain instruction — which requires the candidate to have understood the dense version exactly. A strong verbal reasoning performance signals that the candidate can be trusted to act on written procedure under pressure without adding, dropping, or distorting its meaning.

### How this assessment maps to the role

- **Reading procedures precisely** maps to **Incident management** and **Change management**: diagnosing and prioritising within a defined process, and applying change control procedures under supervision, both require exact comprehension of what procedures mandate, permit, and forbid.
- **True/False/Cannot say discipline** maps to **Asset and configuration management** and **Continuity management**: correcting records and explaining the basic principles of continuity processes depend on distinguishing what a document states from what is assumed — the difference between evidence and belief.
- **Inference** maps to **Problem management**: investigating patterns and trends often begins with written evidence — incident notes, supplier bulletins, error digests — and requires drawing only the conclusions the text supports before consulting specialists.
- **Clear-writing judgement** maps to **User focus** and **Community collaboration**: engaging users and stakeholders to collate needs evidence, contributing to the work of others, and coaching apprentices all depend on writing that a busy, possibly non-technical reader understands first time.
- **Following the meaning of qualifications** ("unless", "except", "where possible") maps to **Ownership and initiative**: owning an issue until a new owner is found means knowing exactly where written responsibility begins and ends.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 (for Questions 1-4):**

"All Priority 1 incidents must be escalated to the major incident manager within 15 minutes of classification. Priority 2 incidents must be escalated only if no workaround is available. Where a workaround exists for a Priority 2 incident, the incident manager retains ownership and must review the incident every four hours until resolution. Incidents affecting the payments platform are automatically classified as Priority 1 regardless of the number of users affected. The service desk may reclassify an incident's priority only with the agreement of the incident manager."

**Question 1 (easy) — True, False, or Cannot say**

Statement: "A Priority 2 incident with an available workaround must be escalated to the major incident manager."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says Priority 2 incidents must be escalated "only if no workaround is available", and where a workaround exists "the incident manager retains ownership". The statement directly contradicts this: with a workaround available, escalation is not required and ownership stays with the incident manager. This tests whether the candidate classifies as False when the passage contradicts the statement, not merely when it fails to support it, and reads a qualifying word ("only if") with full weight — in a real escalation procedure, that word decides whether the major incident manager's phone rings.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "An incident affecting two users of the payments platform would be classified as Priority 1."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage states that incidents affecting the payments platform are "automatically classified as Priority 1 regardless of the number of users affected". Two users is a number of users; "regardless" covers it. This is True by direct application of the rule. The distractor thought — "surely two users can't be a P1" — is operational instinct, and this item explicitly tests whether the candidate can set that instinct aside and reason from the text alone. Real procedures often contain exactly such platform-based overrides, because impact on a critical service is not proportional to headcount.

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "The incident manager may reclassify an incident's priority without consulting anyone."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage constrains the service desk — it may reclassify "only with the agreement of the incident manager" — but says nothing about what the incident manager may or may not do alone. The statement is about a case the passage does not address, so the honest classification is Cannot say. Candidates often answer False by inverting the stated rule ("if the desk needs my agreement, I must need someone's too") — but that is an inference the text does not make. Equally, answering True assumes a permission the text never grants. Cannot say is the disciplined middle: the passage is silent, and this tests whether the candidate notices silence rather than filling it — a professional skill when reading real procedures, which are often precise about one actor and silent about another.

**Question 4 (moderate) — Inference**

Which of the following is the best inference from the passage as a whole?

- A) The organisation treats the payments platform as its most important service.
- B) The procedure is designed so that the most serious incidents reach the major incident manager quickly, while manageable ones stay under regular review with the incident manager.
- C) Workarounds are discouraged because they delay real fixes.
- D) The service desk frequently misclassifies incidents.

**Correct answer: B**

**Explanation:** B synthesises what the rules collectively do: a 15-minute escalation clock for P1s, escalation of P2s only when unmanageable, and a four-hour review cycle for retained incidents — a design that routes severity upward fast and keeps everything else actively owned. A overreaches: the payments override shows the platform is treated as critical, but "most important" of all services is a comparison the passage never makes. C reverses the text's stance — workarounds reduce the need to escalate, implying they are useful, not discouraged. D invents a frequency claim from a rule that merely allocates authority. This tests whether the candidate states the passage's design logic without adding rankings, motives or facts — the same discipline the role needs when explaining a procedure's intent to an apprentice.

**Passage 2 (for Questions 5-7):**

"The department's continuity plan requires that each critical service has a documented recovery procedure, tested at least annually. Where a test identifies a failure, the service owner must remediate within 30 days and retest. Services which have not passed a test within the previous 12 months must be reported to the risk board. The continuity team may grant a single 30-day extension where remediation requires supplier action. Recovery procedures must be stored in the resilience repository and must not exist solely on the service's own infrastructure."

**Question 5 (easy) — True, False, or Cannot say**

Statement: "A recovery procedure stored only on the service's own servers complies with the plan."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The final sentence forbids exactly this: procedures "must not exist solely on the service's own infrastructure". A copy may live there, but not the only copy. This tests whether the candidate spots that "stored only on" matches the forbidden "solely on" — the "basic principles of continuity management" the **Continuity management** skill asks the candidate to explain, and worth noting in a debrief even though the question does not ask for the rationale: a recovery document only reachable when the service is healthy is useless during the outage it exists for.

**Question 6 (moderate) — True, False, or Cannot say**

Statement: "A service that failed its annual test 45 days ago, received a 30-day supplier extension, and has not yet retested, must be reported to the risk board."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Track the conditions carefully. Reporting to the risk board is triggered by "not passed a test within the previous 12 months". The service failed 45 days ago — but the passage does not state whether it had passed a test earlier within the previous 12 months (for instance, eleven months ago, before this year's failure). If it had, the trigger is not met; if its last pass was over 12 months ago, the trigger is met. The extension is a distractor: it governs the remediation deadline, not the reporting rule. Because the decisive fact — the date of the last passed test — is missing, the answer is Cannot say. This is a hard version of the format: every fact in the statement is real, but the rule turns on a fact the statement omits, and it tests whether the candidate slows down to identify which fact a rule actually needs before applying it.

**Question 7 (moderate) — Main point**

Which sentence best captures the main point of Passage 2?

- A) Suppliers cause most continuity failures.
- B) Continuity depends on tested, accessible recovery procedures with clear deadlines and escalation when testing lapses.
- C) The risk board manages all recovery procedures.
- D) Annual testing is usually sufficient for critical services.

**Correct answer: B**

**Explanation:** The passage's elements — documented procedures, annual testing, 30-day remediation, risk-board reporting for lapsed services, and storage off the affected infrastructure — all serve one idea: recovery capability must be real (tested), current (deadlines), visible (escalation), and reachable (repository). B gathers all of that. A generalises from a single clause about supplier extensions. C misstates roles: the risk board receives reports; it does not manage procedures. D turns a minimum ("at least annually") into an adequacy claim ("usually sufficient") the passage never makes. This tests whether the candidate identifies the option that covers the whole passage at the right altitude — neither one detail nor a claim beyond the text.

**Passage 3 (for Questions 8-9):**

"From Monday 4 August, the service desk will route all hardware incidents for Building C directly to the on-site incident management team rather than to the central hardware group. This change follows a three-month trial in Building A, during which average resolution time for routed incidents fell from 9.1 hours to 4.3 hours. Routing for software incidents is unchanged. The central hardware group will continue to handle warranty repairs and stock management for all buildings. The trial report noted that resolution-time improvements were greatest for incidents involving desk moves and peripheral faults."

**Question 8 (easy) — True, False, or Cannot say**

Statement: "After 4 August, a software incident in Building C will be routed to the on-site incident management team."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states plainly: "Routing for software incidents is unchanged." The new direct routing applies to hardware incidents only. The statement contradicts the passage, so it is False. This tests the wider skill of noticing that notices about operational change routinely mix what changes with what stays the same, and that acting on the headline without the exceptions causes misrouted tickets and lost time — the "unchanged" sentences deserve as much weight as the new rule when briefing a service desk or an apprentice.

**Question 9 (challenging) — True, False, or Cannot say**

Statement: "Direct routing will reduce average resolution times for hardware incidents in Building C by more than half."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage reports a trial result in Building A: 9.1 hours falling to 4.3 hours — indeed more than half. But the statement predicts the outcome in Building C, a different building with possibly different incident mixes, distances, and staffing. The passage neither guarantees the result will transfer nor denies it; extrapolation from A to C is plausible operational reasoning, but it is not stated. Cannot say. This distinction — between what a document reports and what it predicts — is one this item specifically tests: trial evidence justifies trying the change, not promising its result. A candidate who answers True has imported a real number from one context into a claim about another, which is exactly the failure mode this item is designed to surface.

**Question 10 (moderate) — Clear-writing judgement**

An update must be sent to affected users during a live incident. Which version is best?

- A) "We are cognisant of an ongoing service degradation event impacting the case management application and are actioning remediation activities with appropriate urgency."
- B) "The case management system is running slowly. We are working on it now and expect it back to normal by 15:00. If you need urgent case access before then, call the service desk on extension 4100. Next update by 14:00."
- C) "IT is aware of issues. Please be patient."
- D) "Following the identification of anomalous latency metrics within the application tier, engineering resource has been allocated pending root cause determination, timeline TBC."

**Correct answer: B**

**Explanation:** Effective incident communication answers the user's four questions: what is wrong, what is being done, what should I do, and when will I hear more. B answers all four in plain words, with a concrete workaround route and a committed update time. A is jargon ("cognisant", "actioning remediation activities") wrapped around no information. C is honest but empty — no scope, no workaround, no next update. D is written for engineers, not users, and "TBC" abandons the reader. GDS-style plain language guidance exists precisely because users under stress read quickly and literally. This tests whether the candidate identifies plain, complete communication — the same judgement the **User focus** skill demands in production, where communication is part of the fix.

**Question 11 (moderate) — Interpreting an email chain**

A supplier emails: "The firmware defect affects switch models R200 and R210 shipped before January 2025. A patch is available for the R210. R200 units require replacement, which we will provide under warranty for units registered at purchase. We recommend applying the patch during a maintenance window as it restarts the device." The estate includes: 6 × R210 (shipped March 2025), 4 × R210 (shipped November 2024), 3 × R200 (shipped June 2024, registration status unknown). How many devices need action according to the email, and what is unresolved?

- A) 13 devices need action; nothing is unresolved.
- B) 7 devices need action; whether the 3 R200 replacements are free depends on registration, which is unknown.
- C) 4 devices need action; the R200s are unaffected.
- D) 7 devices need action; the patch can be applied at any time without disruption.

**Correct answer: B**

**Explanation:** Apply the scoping sentence first: the defect affects R200 and R210 units shipped before January 2025. The 6 R210s shipped March 2025 are out of scope. In scope: 4 R210s (November 2024) — patchable — and 3 R200s (June 2024) — requiring replacement. That is 7 devices needing action. The unresolved point: warranty replacement applies to units "registered at purchase", and the R200s' registration status is unknown — so cost is uncertain, not the need for action. D's claim about "any time" contradicts the restart warning, and the restart is also why the patch belongs in a change window under **Change management** procedures. This item mirrors daily reality: supplier bulletins are scoping exercises, and this tests whether the candidate's reading extracts exactly who is affected, what to do, and which facts remain to be chased.

**Question 12 (challenging) — Identifying the flawed argument**

A colleague argues: "Every incident we escalated to problem management last quarter took over a month to get a root cause. Escalating incidents is therefore pointless, and we should stop raising problem records." Which option best identifies the flaw in this argument?

- A) The argument is sound: slow root cause analysis means escalation has no value.
- B) It judges the value of escalation solely by the speed of one output, ignoring other benefits such as preventing recurrence, and concludes with an extreme remedy that does not follow even if the complaint is valid.
- C) The argument is flawed because root cause analysis never takes a month.
- D) The argument is flawed because incident managers are not allowed to raise problem records.

**Correct answer: B**

**Explanation:** The argument has two defects, and B names both. First, a measurement flaw: it evaluates escalation only by root-cause turnaround time, ignoring the purpose of problem management — preventing recurrence, which may deliver value even when analysis is slow. Second, a logical leap: even granting that analysis is too slow, the conclusion "stop raising problem records" does not follow; the proportionate response is to improve the process or its prioritisation. C tries to rebut with a factual assertion that is neither given nor generally true. D is factually wrong for this role — initiating actions to investigate patterns and trends is the named **Problem management** skill. This item tests whether the candidate can separate a legitimate grievance (slow turnaround) from an invalid conclusion (abandon the process) — a skill exercised daily when hearing frustrated reasoning in a team meeting.

### Administration tips

- **Drill on the three-verdict discipline when scoring.** Most errors are Cannot-say statements misclassified because the candidate supplied missing facts from experience — check answers against exactly what the passage states.
- **Note whether a candidate weights operators** such as "only", "unless", "all", "may", "must", "regardless" and "solely" — these small words carry the meaning of most items.
- **Watch for outside knowledge being imported.** A candidate's professional instincts are an asset at work and a liability here; if the passage says payments incidents are always P1, the correct answer follows the passage regardless of the candidate's own department's practice.
- **Score whether a candidate identifies the main point** at the right altitude — neither one supporting detail nor a claim the passage does not make.
- **Keep timing consistent** across candidates, and use the per-statement time-per-item guide (roughly 30 to 45 seconds) for session planning.

### Common pitfalls to watch for when scoring

- **Marking a Cannot-say response wrong because it "should obviously be true".** False requires contradiction; a statement the passage merely fails to mention is Cannot say, however plausible it sounds.
- **Missing when a candidate skims an exception clause.** Change notices and procedures hide their teeth in "unless", "except" and "unchanged" clauses.
- **Crediting an answer that treats a trial result as a guarantee** of the same result elsewhere.
- **Rewarding the fanciest-sounding communication option** in clear-writing items rather than the one that answers the reader's questions in plain words.
- **Losing the base document in multi-document items.** A correct answer applies the bulletin's scoping rules first, then maps them to the asset list — not the other way round.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. Unlike cognitive or numeric tests, there is often no single provably correct answer; instead, responses are scored against the judgement of experienced practitioners and the organisation's professional behaviours. Common formats include choosing the most effective response, choosing the most and least effective from a set, ranking all responses, or rating each response independently on an effectiveness scale.

Typical format: 12 to 25 scenarios in 25 to 40 minutes, usually untimed per item but timed overall. Scenarios for incident management roles concentrate on the pressure points of the job: competing priorities, escalation decisions, upset users, coaching responsibilities, procedural conflicts, and moments where ownership is easy to drop. Employers use SJTs for this role because technical knowledge alone does not predict who will keep users informed during an outage, hand over cleanly, resist the temptation to quietly bypass change control, or speak up about a colleague's unsafe shortcut.

The behaviours being assessed align with the values of the Government Digital and Data profession: user focus (outcomes for the people using the service), collaboration (working openly with the service desk, specialists, and major incident and problem managers), ownership (holding an issue until it genuinely has a new home), sound escalation (neither too early nor too late, with honest information), and inclusion (creating the right environment for every colleague, including apprentices, to contribute). When scoring, judge each option by what happens to the user, the team, and the truth.

### How this assessment maps to the role

- **Ownership dilemmas** map to **Ownership and initiative**: own an issue until a new owner has been found or the problem has been mitigated or resolved — scenarios test whether a candidate drops, dumps, or hands over.
- **Escalation dilemmas** map to **Incident management** and the duty to escalate faults to major incident managers and problem managers: scenarios test whether a candidate escalates at the right time with honest, complete information.
- **Team and coaching dilemmas** map to **Community collaboration**: contribute to the work of others, motivate and empower teams, create the right environment, recognise and deal with issues — including the development of apprentices being coached.
- **User communication dilemmas** map to **User focus**: identify and engage users, and use quantitative and qualitative data to turn user focus into outcomes, especially when the honest message is uncomfortable.
- **Procedural pressure dilemmas** map to **Change management** and **Continuity management**: applying change control under supervision and respecting continuity principles when someone senior wants a shortcut.
- **Cross-team investigation dilemmas** map to **Problem management** and **Service focus**: consulting specialists effectively and establishing coherent frameworks rather than heroic individual fixes.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The tempting quiet fix**

While investigating a fault on a shared print server, the candidate identifies a configuration change that would fix it. Change control requires even minor server changes to be logged and approved, though approval for this class of change is usually granted within an hour. The affected team is mildly inconvenienced but working. What is the most effective response?

- A) Make the change now and log it afterwards — the fix is obvious and the impact is small.
- B) Raise the change request, note the incident's workaround status, and apply the fix once approved.
- C) Leave the fault for the next shift to handle.
- D) Ask a colleague to make the change so the record shows their name.

**Correct answer: B**

**Explanation:** The scenario removes every excuse for bypassing process: the users are working, and approval typically takes an hour — so the cost of compliance is small and the fix is barely delayed. B follows the **Change management** skill (apply change control procedures under supervision) while keeping the incident moving. A is the classic unlogged change: if the "obvious" fix has a side effect, the next investigator finds no record and the outage is longer — unrecorded changes are one of the most common root causes problem managers uncover. C abandons ownership without handover. D is A with the added harm of falsified accountability, corrupting the very records the **Asset and configuration management** skill exists to protect. SJT scoring rewards responses that are both effective and honest; B is both.

**Question 2 (easy) — The frustrated user**

A caseworker phones the candidate directly, angry that their incident — a broken screen-reader configuration that stops them working — has been open for two days without an update. The ticket was assigned to a specialist team and has sat unacknowledged. What is the most effective first action?

- A) Explain that it is the specialist team's responsibility now and give the caseworker that team's number.
- B) Apologise for the silence, tell the caseworker the candidate will chase it and update them by an agreed time today, then contact the specialist team's lead to get it moving.
- C) Tell the caseworker to raise a complaint so the delay is formally recorded.
- D) Re-assign the ticket back to the candidate's own queue and start working on it immediately.

**Correct answer: B**

**Explanation:** Two failures are live: a user cannot work — and note this is an accessibility fault, so the impact on this user is total — and an assigned ticket has gone silent. B repairs both: the user gets an apology, a named owner, and a committed update time; the stalled assignment gets direct chasing. This is **Ownership and initiative** as the framework defines it — the issue does not have an effective new owner until someone is actually working on it, so it is still the candidate's to drive. A is technically true and behaviourally wrong: routing an already-failed handover back to the user transfers the candidate's job to them. C substitutes process for help. D feels heroic but is usually less effective: the specialist team exists because the fix needs their skills; duplicating their work delays it and hides the acknowledgement failure that needs fixing. This item rewards chasing first and escalating only if chasing fails.

**Question 3 (moderate) — Escalate or hold?**

At 11:40 the candidate is handling an incident: intermittent failures on the document upload service used by several casework teams. They have a plausible diagnosis and estimate resolution within an hour. At 11:55 the failure pattern changes — errors are now constant, two more services on the same infrastructure start alerting, and the fix attempt has no effect. The escalation guidance says major incidents are "significant outages affecting multiple services or large user groups". What is the most effective response?

- A) Continue troubleshooting alone for another hour — the candidate was close, and escalating now would look like failure.
- B) Escalate to the major incident manager now, handing over the timeline, symptoms, affected services, and what has already been tried.
- C) Escalate to the major incident manager but present only the current symptoms, leaving out the failed fix attempt.
- D) Ask the service desk to hold new tickets on these services so the incident appears smaller.

**Correct answer: B**

**Explanation:** Apply the criteria, not ego. Multiple services are now failing constantly — the situation squarely matches the major incident definition, and the trajectory is worsening. B escalates at the right moment with a complete handover, and the handover content matters: the timeline and failed fix attempt are diagnostic gold for the major incident manager, potentially eliminating a whole hypothesis branch. A is the most common real-world failure mode — escalation delayed by optimism and pride — and every minute of it extends a multi-service outage. C escalates but poisons the handover; concealing the failed attempt costs the receiving team time and costs the candidate trust. D is actively harmful: suppressing tickets distorts the impact data on which priority decisions depend. This tests whether the candidate treats escalating well as role design rather than failure — escalating faults to major incident managers is how the response scales with the incident.

**Question 4 (moderate) — The apprentice's mistake**

An apprentice tells the candidate privately that while closing tickets yesterday they accidentally closed a live incident belonging to another team, and the affected user has not noticed yet. They are visibly anxious and ask whether it can "just be left". What is the most effective response?

- A) Reopen the ticket quietly and say nothing further, to spare the apprentice embarrassment.
- B) Report the apprentice to their line manager for a records breach.
- C) Guide the apprentice through reopening the ticket and informing the owning team now, treat it as a learning moment, and check whether the closure process makes this mistake too easy.
- D) Agree to leave it, since the user has not complained.

**Correct answer: C**

**Explanation:** Three duties intersect: the operational fact (a live incident is wrongly closed and a user may be silently waiting), the developmental duty (coaching apprentices and sharing knowledge), and the systemic question (does the tooling invite this error?). C serves all three: the record is corrected immediately and transparently, the apprentice learns that mistakes are fixed openly and survivable — which is what "creating the right environment" from the **Community collaboration** skill means in practice — and the process improvement is sought, which is **Problem management** thinking applied to the candidate's own workflow. A fixes the data but teaches the apprentice that errors are hidden by seniors, and leaves the owning team uninformed. B escalates a coachable, self-reported error into a disciplinary event, guaranteeing the next mistake is not self-reported. D leaves a user abandoned to protect comfort. This item rewards the option that fixes the problem, grows the person, and improves the system.

**Question 5 (moderate) — Conflicting demands during a busy morning**

The candidate is the only incident manager on site. Simultaneously: (1) a P2 incident they own needs a status update to the service owner in 20 minutes; (2) the service desk asks them to accept a walk-up from a distressed staff member whose account is locked before a hearing that starts in 30 minutes; (3) the monitoring dashboard shows early warning signs — not yet failures — on a storage array. What is the most effective sequencing?

- A) Dashboard first — preventing an outage beats everything; the update and the walk-up can wait.
- B) Unlock the account first (a few minutes, hard deadline, real user harm), send the P2 update on time, then investigate the storage warnings.
- C) Send the P2 update first — formal commitments always come before users.
- D) Handle the P2 update and the storage array, and ask the service desk to tell the staff member to raise a ticket.

**Correct answer: B**

**Explanation:** Rank by deadline hardness, task duration, and harm. The account unlock is minutes of work against an immovable 30-minute deadline with concrete harm to a user's ability to participate in a hearing — it should be done first because it is both urgent and quick. The P2 update has a 20-minute soft-hard deadline but writing it takes moments once the unlock is done; it lands on time. The storage warnings are important — the **Ownership and initiative** skill says be proactive in searching for potential problems — but "early warning, not yet failing" defines them as important-not-urgent: next, with focus. A over-weights a non-urgent risk against a user in immediate difficulty. C treats process obligations as automatically outranking user outcomes — the inversion of **User focus**. D processes the human being into a queue precisely when the queue cannot help them in time. This item rewards clearing the quick, hard-deadlined, high-harm item first, keeping formal commitments, then investing in prevention.

**Question 6 (moderate) — The senior manager's shortcut**

A senior manager from a delivery team asks the candidate to install an unapproved file-sharing tool on their team's laptops today, "because the approved tool keeps failing and we have a deadline". The candidate knows the approved tool has open incidents. What is the most effective response?

- A) Install the unapproved tool — the manager outranks the candidate and accepts responsibility.
- B) Refuse and end the conversation; policy is policy.
- C) Decline the unapproved install, explain why briefly, prioritise diagnosing the approved tool's failures for this team today, and offer the manager the emergency change or exemption route if they want to pursue the alternative formally.
- D) Install the unapproved tool on two laptops only, as a compromise.

**Correct answer: C**

**Explanation:** The manager has a legitimate problem (a failing tool and a deadline) and an illegitimate solution (unapproved software, with unassessed security, data-handling and support implications — in government, potentially including information-handling obligations). C separates the two: it refuses the improper action, but takes real ownership of the underlying need — the open incidents on the approved tool become today's priority, which is the actual fastest compliant route to the manager's deadline — and it respects the manager's agency by pointing to the legitimate exception process. A confuses rank with authorisation; "I accept responsibility" does not transfer the risk being created. B wins the rule and loses the user: it treats **User focus** and **Change management** as opposites when the role needs to satisfy both. D is A at smaller scale — the security exposure is not halved by halving the laptops. This item rewards refusing the shortcut while sprinting on the legitimate path.

**Question 7 (moderate) — Handover at end of shift**

The candidate's shift ends in 15 minutes. They own a P3 incident mid-investigation: two causes have been ruled out, a vendor callback is due within two hours, and the affected user expects an update by 17:00. The evening incident manager is in the building. What is the most effective handover?

- A) Close the ticket with "no fault found" and let the user re-raise it if the problem persists.
- B) Keep the ticket in the candidate's name and pick it up tomorrow morning, on the basis that they know it best.
- C) Brief the evening manager verbally and in the ticket — findings so far, ruled-out causes, pending vendor callback, promised 17:00 user update — and confirm they accept ownership before leaving.
- D) Email the user that the case is "in progress" and leave the ticket unassigned overnight.

**Correct answer: C**

**Explanation:** The framework's ownership rule has two exits: a new owner is found, or the problem is mitigated or resolved. C executes the first exit properly — and note what "properly" contains: the ruled-out causes (so work is not repeated), the pending vendor callback (a two-hour window that would otherwise be missed), the user commitment (17:00 falls during the evening shift), written record plus verbal brief, and explicit acceptance. Without that last element a ticket is not handed over, merely abandoned in a new direction. B silently breaks the 17:00 promise and misses the vendor callback — "I know it best" is how continuity fails. A falsifies the record to empty a queue. D combines a hollow reassurance with an ownerless ticket. Handover quality is one of the most predictive behaviours SJTs measure for shift-based operations roles, because service quality is only as good as its worst handover.

**Question 8 (challenging) — A pattern nobody was asked to find**

While closing routine tickets, the candidate notices that eleven incidents across three weeks — logged by different service desk agents under different categories — all describe brief network drops in the same wing of the building, each individually closed as "no fault found". No one has connected them. The candidate's queue is full and none of these tickets is theirs. What is the most effective response?

- A) Note it mentally and carry on; the tickets are closed and none belongs to the candidate.
- B) Raise a problem record linking the eleven incidents, summarise the pattern (location, symptom, timing), notify the problem manager, and mention it to the service desk so future occurrences are linked.
- C) Reopen all eleven incidents and begin investigating the network wing personally.
- D) Email the network team saying the wing "seems flaky" and leave it with them.

**Correct answer: B**

**Explanation:** This is the **Problem management** skill written as a scenario: initiate and monitor actions to investigate patterns and trends, consult specialists, and determine preventative measures. B does exactly what the process intends: the pattern is captured formally with the evidence organised (the linked incidents are the case file), it reaches the role designed to own root cause analysis, and the service desk starts linking future occurrences so the pattern strengthens rather than dissolving into more "no fault found" closures. A lets a systemic fault keep burning eleven users' time because of queue boundaries — the opposite of proactive ownership. C misuses the incident process (the individual tickets were resolved as experienced) and the candidate's time; reopening closed tickets also muddies the metrics. D passes a vague impression instead of organised evidence, which predictably goes nowhere. This item scores seeing past ticket boundaries to the service, and routing what is seen through the frame that can fix it — **Service focus** in action.

**Question 9 (challenging) — The uncomfortable status report**

A service owner asks the candidate, in front of their team, whether this morning's outage is fully resolved. Service is restored, but the candidate knows the fix is a temporary workaround: the underlying fault remains and could recur, and problem management has not yet accepted the record raised. What is the most effective response?

- A) Say yes — service is up, the details would only worry people, and recurrence might not happen.
- B) Say service is restored, and be clear that it is running on a workaround while the root cause is investigated, with a problem record raised and a recurrence risk being monitored.
- C) Say the incident is not resolved, to keep pressure on problem management.
- D) Give the full technical detail of the fault and workaround, taking the meeting through the diagnostic history.

**Correct answer: B**

**Explanation:** The truthful state has two parts — restored service, unresolved cause — and B reports both at the right altitude, with the actions that make the risk managed rather than merely admitted. This is what accountability in the **Ownership and initiative** skill looks like when the audience is senior: no false comfort, no alarm, and a visible plan. A is the dangerous option: if the fault recurs — and workarounds do fail — the service owner learns the candidate knew, and their future "resolved" loses its meaning; trust is an operational asset spent once. C is inaccurate in the other direction and weaponises a status report against a partner team, corroding the collaboration with problem managers the role depends on. D answers a status question with a lecture, burying the decision-relevant fact (recurrence risk) under detail. This item rewards options that are honest, proportionate, and forward-moving over options that are merely comfortable or merely complete.

**Question 10 (challenging) — Visible team friction**

Over recent weeks the candidate notices that in team huddles, one experienced engineer repeatedly talks over a quieter colleague and dismisses her suggestions — twice, ideas she raised were later adopted when restated by others. The quieter colleague has begun staying silent. The candidate is not the line manager of either person. What is the most effective response?

- A) Stay out of it — without line authority, intervening would overstep.
- B) Publicly call out the engineer's behaviour at the next huddle so everyone hears the standard.
- C) Speak privately with the engineer about the pattern and its effect, actively credit and invite the quieter colleague's contributions in huddles, and if the behaviour continues raise it with the line manager.
- D) Advise the quieter colleague to be more assertive if she wants her ideas heard.

**Correct answer: C**

**Explanation:** The **Community collaboration** skill explicitly includes recognising and dealing with issues, creating the right environment for teams, and motivating and empowering — none of which is conditional on line authority. C is the graduated, inclusive response: a private conversation gives the engineer the chance to change without public shaming; deliberately crediting the quieter colleague ("as Priya suggested earlier…") repairs the environment in real time and costs nothing; and the escalation path acknowledges where the candidate's authority genuinely ends. The operational stake is real, not just interpersonal: a team member whose accurate suggestions are suppressed is diagnostic capacity the team's incidents are losing. A mistakes authority for responsibility. B may stop the behaviour but models humiliation as the team's correction tool, chilling exactly the openness needed. D locates the problem in its target — asking the person being talked over to fix being talked over — which is the definition of an exclusionary environment. Inclusion questions in SJTs consistently reward early, private, specific intervention plus visible environmental repair.

**Question 11 (challenging) — When the workaround becomes the fix**

Three months ago, a nightly manual restart was put in place as a "temporary" workaround for a memory leak in a case management component. It works, everyone has absorbed it into routine, and the problem record has sat inactive. Tonight the colleague who usually performs the restart is on leave, it is missed, and the service fails at 08:30 — the third such failure this quarter, each caused by a missed restart. After restoring service, what is the most effective follow-up?

- A) Add a second person to the restart rota so it is never missed again, and close the matter.
- B) Reactivate the problem record with the new evidence (three failures, quantified user impact), push for the root-cause fix to be prioritised, and in the meantime automate or double-cover the restart so the interim risk is controlled.
- C) Email the team a reminder that the restart is important.
- D) Raise an incident against the colleague on leave for failing to arrange cover.

**Correct answer: B**

**Explanation:** The deep fault here is not the missed restart — it is that a temporary mitigation silently became permanent infrastructure, fragile because it depends on human memory. B addresses both horizons: the reactivated problem record, now armed with the strongest possible evidence (a countable failure pattern and its cost — note how the numeric reasoning assessed earlier feeds directly into this), pushes the real fix; automation or double-cover removes the single point of human failure until the fix lands. This is **Problem management** (determine preventative measures) joined to **Continuity management** thinking (a process that fails when one person is on leave has no resilience). A and C treat the symptom-management process as the fix and guarantee a fourth failure — A more robustly than C, but neither touches the leak. D is scapegoating: the system that made one person's leave a service risk is the fault, not the person. This item tests whether the candidate can see the difference between "make the workaround reliable" and "make the workaround unnecessary" — the strongest answer does the first only as a bridge to the second.

**Question 12 (challenging) — Most and least effective**

A major incident manager asks the candidate to gather impact information urgently during a live multi-service outage. The service desk is overwhelmed, and the queue contains a mix of genuine new impact reports and duplicate calls. Consider the following actions:

1. Ask the service desk to tag all incoming calls related to the outage with a single reference code, and pull a de-duplicated summary of affected teams, locations and business functions for the major incident manager.
2. Forward the entire raw ticket queue to the major incident manager so they have everything.
3. Estimate the impact from memory of which teams usually use these services, to save time.
4. Post a brief status message on the department's service status page acknowledging the outage and directing users away from duplicate reporting.

Which combination identifies the most effective and least effective actions?

- A) Most effective: 1; least effective: 3
- B) Most effective: 2; least effective: 4
- C) Most effective: 4; least effective: 2
- D) Most effective: 1; least effective: 2

**Correct answer: A**

**Explanation:** Action 1 is clearly the most effective: it converts a chaotic queue into structured, de-duplicated intelligence — exactly what impact-based decisions need — and the tagging discipline keeps the picture current as calls continue. Action 4 is also genuinely useful (it reduces duplicate load at source and informs users), and action 2, while unhelpful — dumping raw noise on a decision-maker transfers work rather than doing it — at least passes on real data. Action 3 is the least effective because it is the only one that can inject false information into a live major incident: memory-based estimates presented as impact data can misdirect the response toward the wrong services and users, and wrong data is worse than slow data. So the pairing is most: 1, least: 3 — option A. When scoring most-and-least items, evaluate each action's best and worst case: the least effective action is usually the one whose failure mode actively causes harm, not merely the one that adds no value. Note the underpinning skills tested here: **Community collaboration** with the service desk, **User focus** in action 4's communication, and honest evidence handling as the foundation of the escalation relationship.

### Administration tips

- **Anchor scoring on the five behaviours, not the personalities in the scenario.** For each item, note which of user focus, collaboration, ownership, honest escalation and inclusion the model answer serves.
- **Apply the "next morning" test when judging a candidate's answer.** An option that survives being explained the next morning to a manager, the user, and an auditor is usually the stronger one.
- **Watch for the two classic decoys a candidate might choose.** SJTs for operations roles repeatedly plant the heroic solo fix (do it all yourself) and the clean-hands deflection (it's not my queue). The framework's answer to both is the same: own it until it truly has a new owner.
- **Score handover and escalation answers on completeness, not just direction.** The quality difference between "escalate" and "escalate with timeline, symptoms, attempts, and commitments" is what separates a mid-scoring from a top-scoring answer.
- **Read the question stem precisely when marking.** "Most effective first action" is not "only action" — an option is not wrong because other things also need doing later.

### Common pitfalls to watch for when scoring

- **Rewarding the option that avoids all discomfort.** Honest status reports, private challenges to colleagues, and refusals of senior shortcuts are uncomfortable and should score highly; comfort-seeking options (say yes, stay quiet, leave it) are consistent low-scorers.
- **Confusing deference with professionalism.** Rank does not authorise policy bypasses, and "the manager accepts responsibility" does not transfer risk.
- **Missing when a candidate drops ownership at a boundary.** "Assigned elsewhere", "not my queue", and "shift over" are exactly where this assessment looks for the ownership behaviour.
- **Crediting escalation that is dishonest or late.** Both failure modes should cost marks: concealing a failed attempt poisons the handover; troubleshooting past clear criteria extends the outage.
- **Rewarding an answer that disciplines an individual for a system failure**, over one that fixes the record, coaches the person, and improves the process.
- **Over-crediting "compromise" options.** Half a policy breach (install it on just two laptops) is still a breach.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an incident manager: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement, built from the materials of the role's working day — incident queues, priority matrices, CMDB records, SLA tables, availability reports, escalation procedures, supplier bulletins, and the human dilemmas of shift handovers, apprentice coaching, and honest status reporting.

The mental habits that score well here are the same habits that make someone effective on shift: grouping tickets by shared attributes before diagnosing; deducing only what the evidence guarantees; checking the base before computing a percentage; reading "only", "unless" and "unchanged" with full weight; and, when judging what to do, asking what happens to the user, the team, and the truth.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and connects assessment performance to real professional development — this role sits at a genuinely important junction, restoring services that citizens and caseworkers depend on, deciding when a fault becomes a major incident, and feeding patterns into problem management so incidents stop recurring.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can restore services under pressure, escalate honestly, and create the right environment for a team — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
