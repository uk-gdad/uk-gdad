# Problem Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for problem analyst, within the UK Government Digital and Data profession. The material is job-specific: it draws on the artefacts a problem analyst genuinely handles — incident logs, known error records, configuration data, trend spreadsheets, service reports, knowledge articles, and emails from colleagues and specialists — and the judgements genuinely made: spotting a pattern across incident records, checking data carefully, reading procedures accurately, working out percentages and trends, and choosing sensible actions when the day gets busy.

Problem analysis is structured thinking. Supporting a problem manager means looking through incident records for patterns and trends. Maintaining systems means checking data carefully and noticing when something does not match. The four assessments here — cognitive, numeric, verbal, and situational — present small, tidy versions of exactly those challenges.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. At analyst level, consider offering the platform's ungraded practice questions first. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the thinking skills this role uses every day, through practical scenarios rather than abstract puzzles. For a problem analyst, that means questions built from incident records, error patterns, configuration data, simple procedures, and the kind of detective work involved when the same fault keeps coming back.

The typical format is an online, timed test lasting 15 to 30 minutes, covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many tests adapt as the candidate goes, and ungraded practice questions usually precede the scored test.

This assessment matters for the role because problem analysis is structured thinking. Supporting a problem manager means looking through incident records for patterns; maintaining systems means checking data carefully; a busy day means deciding what matters most. A cognitive test presents small, tidy versions of those same challenges.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill: initiating and monitoring actions to investigate patterns and trends is the heart of the role — noticing that five incidents are really one recurring problem.
- **Logical deduction** maps to **Incident management** and **Problem management**: diagnosing incidents and investigating their causes means reasoning carefully from evidence to conclusions.
- **Error checking** maps to **Asset and configuration management**: tracking, logging and correcting information to protect assets means spotting the record that does not match reality.
- **Prioritisation** maps to **Incident management** and **Ownership and initiative**: ranking work sensibly, and owning an issue until it has a new owner or is resolved.
- **Applied problem solving** maps to **Problem management** and **Service focus**: consulting specialists effectively, determining resolutions and preventative measures, and establishing coherent frameworks that work.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Spotting a pattern in incident records**

This week's incidents for the case management application:

1. Monday 09:05 — "Application slow to load" — Team A
2. Monday 09:10 — "Case screen takes ages to open" — Team B
3. Tuesday 14:30 — "Forgotten password" — Team A
4. Wednesday 09:08 — "System very slow this morning" — Team C
5. Friday 09:12 — "Application crawling again" — Team B

Which incidents most likely belong to one recurring problem?

- A) 1, 2 and 3
- B) 1, 2, 4 and 5
- C) 3 and 4
- D) All five

**Correct answer: B**

**Explanation:** Incidents 1, 2, 4 and 5 all describe the same symptom (slowness) on the same application, all occurring within a few minutes of 09:00. That timing pattern suggests one recurring cause. Incident 3 is different in every way: a password issue, mid-afternoon, unrelated symptom. This tests grouping related incidents by shared features — symptom, system, timing — not by team name or wording, which is the first step of turning separate reports into one problem record.

**Question 2 (easy) — Simple deduction from a rule**

A team's procedure says: "A problem record must be raised whenever the same fault causes three or more incidents in one month." The print service failed twice this month. A colleague says: "The procedure means we must not raise a problem record for it." Is the colleague right?

- A) Yes — the procedure forbids raising a record below three incidents.
- B) No — the procedure requires a record at three or more, but it does not forbid raising one earlier if it seems useful.
- C) Yes — problem records are only for major incidents.
- D) No — the procedure requires a record after every incident.

**Correct answer: B**

**Explanation:** The rule sets a floor — a point where a record becomes compulsory. It says nothing about what may be done below that point. The colleague has turned "must at three" into "must not below three", which the words do not say. This tests reading a procedure for what it requires, forbids, and leaves to judgement — three different categories a careless reading easily collapses.

**Question 3 (easy) — Error checking a configuration record**

Configuration records after a software upgrade:

| Server | Application version | Last patched | Status |
|---|---|---|---|
| SRV-01 | v4.2 | 2 June | Live |
| SRV-02 | v4.2 | 2 June | Live |
| SRV-03 | v3.9 | 2 June | Live |
| SRV-04 | v4.2 | 2 June | Retired |

The upgrade notes say all live servers were upgraded to v4.2 on 2 June, and retired servers were left alone. Which record needs investigating?

- A) SRV-01
- B) SRV-02
- C) SRV-03
- D) SRV-04

**Correct answer: C**

**Explanation:** SRV-01 and SRV-02 match the notes. SRV-04 showing v4.2 while retired is not clearly wrong — it may simply have already been on v4.2 before retirement. SRV-03 directly contradicts the notes: it is live, all live servers were said to be upgraded, yet it still shows v3.9. This tests picking the row that directly contradicts stated facts rather than a row that is merely slightly curious — the asset and configuration management skill of tracking, logging, and correcting.

**Question 4 (moderate) — Prioritising the morning**

Arriving at 09:00 to find four tasks:

1. The problem manager has asked for incident trend data by 11:00 for a meeting with the service owner.
2. A specialist has emailed answering a question about last week's database problem — no deadline.
3. The weekly configuration data check is due by the end of the day; it takes about an hour.
4. A colleague asks for help understanding a knowledge article "sometime today".

What is the most sensible order?

- A) 2, 4, 3, 1
- B) 1, 3, 2, 4
- C) 4, 3, 2, 1
- D) 3, 1, 4, 2

**Correct answer: B**

**Explanation:** Task 1 has the earliest hard deadline and feeds a meeting the problem manager depends on. Task 3 has a same-day deadline and known duration, so it comes next. Tasks 2 and 4 have no deadlines: reading the specialist's answer moves a real investigation forward, so it comes before the flexible help request. This tests sequencing by hard deadlines first, then important-but-flexible work — the ownership and initiative skill in daily form.

**Question 5 (moderate) — What changed before the fault?**

A reporting system worked fine until Thursday. Facts: (i) on Wednesday evening, a scheduled change updated the reporting system's database driver; (ii) on Thursday 08:00, users began getting "connection failed" errors; (iii) the database itself passes its health checks; (iv) a second system using the same database, but an older driver, works fine. What is the most reasonable first suspect?

- A) The database is down.
- B) The new database driver installed on Wednesday evening.
- C) Users are entering the wrong passwords.
- D) The network cable to the reporting server is unplugged.

**Correct answer: B**

**Explanation:** The fault appeared the morning after the driver change; the database passes health checks and serves another system fine, arguing against A; password errors would not usually say "connection failed" (C); an unplugged cable (D) has no supporting evidence. This tests recognising the driver as the most reasonable first suspect, not a proven cause — "what changed just before the fault?" is the single most useful first question in problem analysis.

**Question 6 (moderate) — Reading a pattern across the week**

Daily incident counts for the self-service portal over two weeks. Week 1: Mon 8, Tue 7, Wed 8, Thu 7, Fri 8. Week 2: Mon 8, Tue 7, Wed 21, Thu 8, Fri 7. What does this pattern most suggest?

- A) The portal is steadily getting worse.
- B) Something unusual happened on Wednesday of Week 2, and it is worth finding out what.
- C) The Week 2 Wednesday number must be a typing mistake.
- D) Wednesdays are always the worst day for the portal.

**Correct answer: B**

**Explanation:** Both weeks sit steadily at 7–8, except one day: Week 2 Wednesday spikes to 21 then returns to normal. That is a spike, not a trend. Week 1's Wednesday was a normal 8, ruling out D. Option C jumps to a conclusion without checking. This tests reading the shape of numbers honestly and treating an outlier as something to investigate, not something to already know the answer to.

**Question 7 (moderate) — Choosing the most informative check**

Users in one office report that the HR system logs them out every few minutes. The question is whether the fault is in the HR system itself or in that office's network. Which single check tells the most?

- A) Ask the affected users to restart their computers.
- B) Find out whether users in other offices are also being logged out.
- C) Read the HR system's user guide.
- D) Wait a day to see if it stops.

**Correct answer: B**

**Explanation:** If other offices have the same problem, the fault is probably central; if only this office suffers, the fault is probably local — one check whose either result cuts the search area in half. This tests isolating a fault by designing a check where both possible results teach something, rather than a check that only helps if the answer happens to be favourable.

**Question 8 (moderate) — Known error or new problem?**

A user reports document uploads fail with error code E-417. The known error database has a record: "E-417: upload fails when the file name contains special characters. Workaround: rename the file using letters and numbers only. Permanent fix scheduled in next quarter's release." The user's file is called "Report_Final(v2)!.docx". What should be done first?

- A) Raise a brand-new problem record for E-417.
- B) Apply the known workaround: ask the user to rename the file, confirm it works, and link the incident to the existing known error record.
- C) Tell the user the fix is coming next quarter and close the incident.
- D) Escalate to a specialist immediately.

**Correct answer: B**

**Explanation:** The error code matches and the file name contains special characters, so the known cause fits. The right first move is the documented workaround, confirmation, and linking the incident — keeping the affected-user count accurate, which is the evidence a problem manager uses to argue for the fix. This tests recognising the known error process working as designed, rather than duplicating a record or leaving the user stuck.

**Question 9 (challenging) — Five whys, one wrong turn**

After a service outage, a "five whys" analysis: (1) Why did the service stop? The application server ran out of disk space. (2) Why? Log files filled the disk. (3) Why? Log files were never being deleted. (4) Why? The clean-up job that deletes old logs stopped running three months ago. (5) Why? …The final answer written is: "Because the disk was too small," and the recommendation is to buy a bigger disk. What is the flaw in this conclusion?

- A) There is no flaw — a bigger disk would stop the outage happening.
- B) The final answer abandons the chain: the fourth answer points at the stopped clean-up job, so the fifth why should ask why that job stopped; a bigger disk only delays the same failure while the real cause remains.
- C) The analysis should have had six whys, not five.
- D) The first why is wrong because services stop for many reasons.

**Correct answer: B**

**Explanation:** Answers 1 to 4 link cleanly; the fifth answer should explain why the clean-up job stopped, but instead jumps sideways to disk size, which does not explain answer 4 at all. With a bigger disk and a still-broken clean-up job, logs simply take longer to fill the space — the outage is postponed, not prevented. This tests following a causal chain to a cause that can actually be fixed, part of the problem management skill of determining preventative measures.

**Question 10 (challenging) — Two changes, one fault**

On Friday night, two changes ran: Change X updated the email service, and Change Y updated the shared login service used by many systems, including email. On Monday, users report two things: email attachments fail to open, and the HR system — untouched by either change on its own software — rejects some logins. Which explanation fits all the evidence best?

- A) Change X caused both issues.
- B) Change Y caused both issues.
- C) Change X likely caused the attachment fault, and Change Y likely caused the login fault — two changes, two separate issues.
- D) Neither change is connected to the faults.

**Correct answer: C**

**Explanation:** Change X (email only) cannot explain the HR login failures. Change Y (shared login) is a stretch for attachment handling once logged in. Option C fits both symptoms cleanly to the change that touched what each symptom involves. This tests resisting the urge to force one cause onto every symptom, when the evidence supports two separate issues.

**Question 11 (challenging) — When the workaround hides the evidence**

A recurring fault crashes a case management service roughly once a week. The quick fix each time is to restart the service, which takes five minutes and clears the fault — but restarting also wipes the diagnostic logs that might show the cause. The specialist investigating has asked for those logs. The service has just crashed again, users are waiting, and the standard instruction is to restart immediately. What is the best action?

- A) Restart immediately, as always — users come first, and the logs are lost every time anyway.
- B) Leave the service down until the specialist can come and inspect it, however long that takes.
- C) Take two minutes to copy the diagnostic logs somewhere safe, then restart the service and send the logs to the specialist.
- D) Restart immediately, but write down from memory what the logs would probably have shown.

**Correct answer: C**

**Explanation:** Two minutes of log copying against a weekly crash that will otherwise recur forever because its evidence is destroyed every time — option C restores service almost as fast as A while finally giving the specialist what the investigation needs. This tests consulting specialists effectively (the problem management skill) by balancing service restoration against evidence preservation, rather than defaulting to one extreme.

**Question 12 (challenging) — Building the coherent picture**

A problem manager asks for a summary of everything known about a recurring network fault before a specialist meeting. Available: 14 linked incidents over 8 weeks; a note that 11 of the 14 occurred on Mondays; monitoring graphs showing bandwidth spikes each Monday 08:30–09:30; and an email from a specialist saying a Monday-morning data sync was doubled in size 9 weeks ago. Which summary best prepares the meeting?

- A) "We have 14 incidents and some graphs. The network team should look into it."
- B) "A recurring network fault (14 incidents, 8 weeks) occurs mainly on Monday mornings (11 of 14). Monitoring shows bandwidth spikes Mondays 08:30-09:30. A Monday data sync was doubled in size 9 weeks ago — just before the incidents began. Working theory: the enlarged sync saturates the network; proposed next step: test by rescheduling or throttling the sync."
- C) "The Monday data sync is definitely the cause and must be cancelled permanently."
- D) "Incidents happen at various times and no clear pattern has emerged yet."

**Correct answer: B**

**Explanation:** A good problem summary states the evidence, connects it into a working theory, and proposes a testable next step, while staying honest about what is theory and what is fact. This tests producing exactly that structure — a strong candidate's answer notes option C overshoots into a verdict, and D is simply false to the data.

### Administration tips

- **Score for whether a candidate groups incidents by shared features** rather than surface details like team name or wording.
- **Watch for whether a candidate reads a procedure's exact scope** — what it requires, forbids, and leaves to judgement.
- **Note whether a candidate treats a suspect as a suspect, not a proven cause**, and proposes a test rather than a verdict.
- **Note whether a candidate designs a diagnostic check whose either result is informative.**
- **Use the summary item (Question 12) to observe whether a candidate separates fact from working theory** in a written account.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that jumps from suspect to culprit** — treating "it broke after the change" as proof rather than a lead to test.
- **Missing when a candidate adds a rule a procedure does not contain.**
- **Crediting an answer that forces one cause onto two separate symptoms.**
- **Accepting a spike described as a trend**, or vice versa.
- **Missing a table-reading error where a candidate answers from the wrong row or column.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently a candidate works with the kinds of numbers this role genuinely handles: incident counts, percentages, averages, availability figures, simple trends, and tables of service data. The arithmetic stays simple — percentages, division, subtraction. What the test really measures is whether the candidate picks the right calculation, reads tables accurately, and draws honest conclusions from data.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions, each showing a small table, chart or short description of data, then a multiple-choice question. Calculators are almost always allowed.

Numeracy matters for this role because numbers are the analyst's evidence. Investigating patterns and trends usually means counting: how many incidents, how often, rising or falling. Making the case for a permanent fix means showing cost in numbers. An analyst who reads data accurately gets listened to.

### How this assessment maps to the role

- **Percentages and targets** map to **Availability and capacity management**: comparing actual figures against targets, and converting between percentages and real hours.
- **Counts, rates and trends** map to **Problem management**: initiating and monitoring the investigation of patterns and trends.
- **Averages** map to **Incident management**: understanding typical resolution times and noticing when one extreme value distorts the average.
- **Careful table reading** maps to **Asset and configuration management**: reading the right row and column every time.
- **Data about users** maps to **User focus**: using quantitative data about users to turn user focus into outcomes.
- **Simple cost reasoning** maps to **Problem management** and **Change management**: showing, with simple multiplication, that a fix costs less than the fault.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage of incidents from one cause**

Last month there were 120 incidents. 30 of them were caused by the same recurring printer fault. What percentage of incidents came from that fault?

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** 30 ÷ 120 = 0.25 = 25%. Option C repeats the raw number as a percentage. This tests basic part-of-whole calculation, and a strong candidate's answer notes this is exactly the sentence that persuades people a permanent fix is worth the effort — "one fault causes a quarter of all our incidents".

**Question 2 (easy) — Comparing before and after**

A permanent fix for a recurring fault went in at the end of June. Monthly incident counts: May 40, June 36, July 9. Roughly what percentage drop is July compared with June?

- A) 25%
- B) 50%
- C) 75%
- D) 90%

**Correct answer: C**

**Explanation:** Fall = 36 − 9 = 27; 27 ÷ 36 = 75%. This tests dividing by the starting value, not the new one — a strong candidate's answer notes the remaining 9 incidents are worth a look: same fault lingering, or something different being lumped in.

**Question 3 (easy) — Reading a table accurately**

Weekly report of open problem records by service:

| Service | Open problems | Of which: awaiting specialist | Of which: fix scheduled |
|---|---|---|---|
| Email | 6 | 2 | 3 |
| Case management | 9 | 5 | 1 |
| Portal | 4 | 1 | 2 |
| Printing | 7 | 3 | 4 |

Which service has the most problems awaiting a specialist?

- A) Email
- B) Case management
- C) Portal
- D) Printing

**Correct answer: B**

**Explanation:** Reading down the "awaiting specialist" column: Email 2, Case management 5, Portal 1, Printing 3. Case management is largest. Printing has the most total problems and most fixes scheduled, a common trap for anyone skimming. This tests reading the exact column the question names before comparing.

**Question 4 (moderate) — Average resolution time**

Five problems closed this quarter took: 5 days, 8 days, 6 days, 41 days, and 10 days. What is the average (mean) time, and what should be noticed about it?

- A) 14 days; nothing unusual.
- B) 14 days; one very long problem (41 days) has pulled the average well above the typical case.
- C) 10 days; the average equals the middle value.
- D) 7 days; ignore the 41 because it is clearly wrong.

**Correct answer: B**

**Explanation:** Sum = 70; mean = 70 ÷ 5 = 14. Four of the five problems took 10 days or less; the single 41-day case drags the average up. Option D invents a reason to delete real data. This tests recognising and reporting an outlier honestly — "typically under 10 days, one exception at 41" tells the true story that "average 14" hides.

**Question 5 (moderate) — Availability target in hours**

A service must be available 99% of the time over a 30-day month (720 hours). The service was down for a total of 9 hours. Did it meet the target?

- A) Yes — 9 hours is a small amount of downtime.
- B) Yes — the allowance is 10 hours and 9 is within it.
- C) No — the allowance is 7.2 hours and 9 exceeds it.
- D) No — any downtime at all breaches a 99% target.

**Correct answer: C**

**Explanation:** 1% of 720 = 7.2 hours allowance; actual downtime of 9 hours exceeds it. Confirming: achieved availability = 711÷720 = 98.75%, below 99%. This tests converting a percentage target into real hours precisely, rather than gut-feeling the answer or misunderstanding how availability targets work.

**Question 6 (moderate) — Incidents per user: which site suffers most?**

Two sites use the same case system. Site A: 300 users, 45 incidents last month. Site B: 120 users, 30 incidents last month. A colleague says: "Site A has the bigger problem — 45 incidents versus 30." What do the rates say?

- A) The colleague is right: Site A has more incidents, so it has the bigger problem.
- B) Site A: 0.15 incidents per user; Site B: 0.25 incidents per user — Site B's users are actually suffering more, per person.
- C) The sites are equal.
- D) Rates cannot be worked out from these numbers.

**Correct answer: B**

**Explanation:** Site A: 45÷300=0.15. Site B: 30÷120=0.25. The typical user at Site B experiences more incidents even though Site A generates more total tickets. This tests recognising that raw counts mislead when groups differ in size — user focus applied with numbers.

**Question 7 (moderate) — Is the trend real?**

Weekly incident counts for a document service over eight weeks: 12, 14, 11, 13, 12, 15, 18, 21. Which statement best describes the data?

- A) The counts are steady with no change.
- B) The counts were steady around 11-15 for six weeks, then rose in the last two weeks (18, 21) — a possible emerging trend worth investigating now.
- C) The counts have been rising steadily all eight weeks.
- D) The last two weeks are certainly random variation and can be ignored.

**Correct answer: B**

**Explanation:** Weeks 1–6 wobble in a normal range; weeks 7–8 step up in the same direction — the classic early signature of an emerging trend. Option C overstates a flat first six weeks; option D dismisses exactly the signal worth catching cheaply and early. This tests describing what the data actually shows, no more and no less.

**Question 8 (moderate) — Percentage of a percentage**

Of last month's 200 incidents, 40% related to the login service. Of those login incidents, 25% were caused by expired passwords. How many incidents were caused by expired passwords?

- A) 20
- B) 50
- C) 80
- D) 130

**Correct answer: A**

**Explanation:** Login incidents = 40%×200=80. Expired-password incidents = 25%×80=20. This tests chaining percentages by multiplying step by step, applying the second percentage to the smaller group — never adding percentages together.

**Question 9 (challenging) — Combining unequal months fairly**

A recurring database fault: April 10 incidents in 1,000 total incidents; May 30 in 2,000 total. A colleague calculates: "April 1%, May 1.5%, so on average the fault causes 1.25% of incidents." What is the true combined percentage across the two months?

- A) 1.25% — the colleague is right.
- B) 1.33% — combine the raw numbers: 40 fault incidents out of 3,000 total.
- C) 2.5% — add the two percentages.
- D) 1.5% — use the bigger month only.

**Correct answer: B**

**Explanation:** Combined = (10+30)÷(1,000+2,000) = 40÷3,000 = 1.33%. The colleague's average silently treats both months as the same size, when May had twice the incidents and deserves twice the weight. This tests recognising that percentages combine through their raw numbers, not through each other — a common workplace mistake and a common test trap.

**Question 10 (challenging) — Does the fix pay for itself?**

A recurring fault causes 6 incidents per month. Each incident takes a technician about 2 hours to resolve, and on average 15 users each lose 1 hour of work. Staff time is costed at £30 per hour for everyone involved. A permanent fix would take a specialist 3 full days (24 hours) at £60 per hour. Roughly how many months of avoided incidents pay for the fix?

- A) About half a month
- B) About 1 month
- C) About 3 months
- D) About 6 months

**Correct answer: A**

**Explanation:** Cost per incident: technician 2×£30=£60; users 15×1×£30=£450; total £510. Monthly cost: 6×£510=£3,060. Fix cost: 24×£60=£1,440. Payback: 1,440÷3,060≈0.47 months. This tests including everyone's lost time, not just the technician's, and comparing a monthly cost against a one-off cost — the arithmetic behind determining preventative measures.

**Question 11 (challenging) — Reading two measures together**

Monthly report for four services showing incident counts and average resolution times:

| Service | Incidents | Average resolution time |
|---|---|---|
| Email | 60 | 2 hours |
| Case management | 25 | 8 hours |
| Portal | 40 | 3 hours |
| Printing | 75 | 1 hour |

Which service consumed the most total resolution effort (incidents × average time)?

- A) Email
- B) Case management
- C) Portal
- D) Printing

**Correct answer: B**

**Explanation:** Email 120h, Case management 200h, Portal 120h, Printing 75h. Case management consumes the most total effort despite the fewest incidents. This tests the multiplication of frequency and duration — showing where organisational time actually goes, since a fault that is "rare but slow" can quietly cost more than the noisy frequent one.

**Question 12 (challenging) — Honest conclusions from a small table**

An analysis of 80 portal incidents shows resolution routes:

| Resolution route | Count | Average time to resolve |
|---|---|---|
| Known error workaround applied | 32 | 30 minutes |
| Restart by service desk | 28 | 45 minutes |
| Escalated to specialist | 20 | 6 hours |

A draft conclusion reads: "75% of portal incidents are resolved quickly without specialists, so the portal has no serious underlying problems." Which assessment of the draft is fairest?

- A) Fully correct — the numbers prove the portal is healthy.
- B) The 75% figure is right (60 of 80 resolved without escalation), but the conclusion overreaches: 32 incidents needed a known error workaround and 28 needed restarts — quick fixes repeated 60 times suggest underlying problems that are being patched, not absent.
- C) The figure is wrong — only half were resolved without specialists.
- D) Nothing can be concluded from only 80 incidents.

**Correct answer: B**

**Explanation:** The arithmetic checks out (32+28=60; 60÷80=75%), but a "known error workaround applied" 32 times means a real fault is still occurring 32 times a month. This tests distinguishing incident management's "how fast did we recover?" from problem management's "why did it keep happening?" — the table itself is a to-do list, not evidence of good health.

### Administration tips

- **Score for whether a candidate correctly identifies the base** in a percentage calculation.
- **Watch for whether a candidate combines multi-period figures via raw numbers**, not by averaging percentages.
- **Note whether a candidate compares rates rather than raw counts** when group sizes differ.
- **Note whether a candidate reports both an average and a distorting outlier.**
- **Use the resolution-routes item (Question 12) to observe whether a candidate distinguishes fast recovery from genuine health.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong base.**
- **Crediting an average of percentages taken from differently sized groups.**
- **Missing when a candidate judges by totals rather than rates when group sizes differ.**
- **Accepting an average reported without its distorting outlier.**
- **Missing when a candidate confuses fast resolution with the absence of an underlying problem.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands written material of the kind this role uses every day: procedures, knowledge articles, known error records, emails from specialists and suppliers, and extracts from service reports. The most common question type gives a short passage and then statements to judge as **True**, **False**, or **Cannot say**. Other questions ask for a sensible inference, the main point, or the clearest piece of writing.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 statements spread across several passages. The golden rule is to answer only from the passage, even when the candidate knows the topic well.

Verbal precision matters for this role because the work runs on accurate reading. Procedures use words like "must", "may", "unless" where one word changes what is required. Known error records must be applied exactly as written. A workaround applied to the wrong conditions, or a specialist's "possible cause" reported as "the cause", can send an investigation the wrong way for weeks.

### How this assessment maps to the role

- **Reading procedures precisely** maps to **Change management** and **Incident management**: applying change control procedures under supervision means doing exactly what the procedure says.
- **True/False/Cannot say discipline** maps to **Problem management** and **Asset and configuration management**: recording what an investigation has established, and only that.
- **Understanding technical explanations** maps to **Problem management**: consulting specialists effectively includes reading their answers accurately, including the difference between "confirmed", "likely" and "possible".
- **Reading continuity and process documents** maps to **Continuity management**.
- **Clear-writing judgement** maps to **User focus** and **Community collaboration**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 4, the candidate reads this passage.

> "When a known error record exists for a fault, service desk staff must apply the documented workaround before considering escalation. If the workaround fails, the incident must be escalated to the problem analyst, who will verify whether the failure indicates a new problem or a change in the existing one. Known error records may be updated only by the problem management team. Workarounds must be reviewed every three months to confirm they remain effective. A known error record may be closed only when the permanent fix has been deployed and verified."

**Question 1 (easy) — True, False, or Cannot say**

Statement: "Service desk staff may update a known error record if they discover the workaround no longer works."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Records "may be updated only by the problem management team" — "only" excludes everyone else. The correct action for the service desk is to escalate a failed workaround to the problem analyst. This tests noticing "only" as a small word that draws a hard boundary.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "A known error record can stay open even after the permanent fix has been deployed."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Closure requires the fix "deployed *and verified*" — two conditions. Between deployment and verification, the record remains open. This tests noticing that "and" joins two conditions that must both be met before a rule's consequence applies.

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "Workaround reviews happen every three months because workarounds often stop working."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage confirms the review cadence but gives no reason for it. This tests recognising a half-true statement — one clause supported, one clause (the "because") unsupported — making the whole statement unverifiable.

**Question 4 (moderate) — Inference**

Which of the following is the best inference from this passage as a whole?

- A) The process is designed so that quick relief (workarounds) and permanent cure (fixes) are both managed, with clear ownership at each step.
- B) The service desk is not trusted by the problem management team.
- C) Most known errors never receive a permanent fix.
- D) Workarounds are more important than permanent fixes.

**Correct answer: A**

**Explanation:** The rules collectively balance speed (workaround first) with thoroughness (analyst check, quarterly review, verified closure), each step owned. Options B, C and D each attribute a motive, frequency, or ranking the text does not support. This tests inferring what the text does, without inventing feelings or frequencies.

For Questions 5 to 7, the candidate reads this passage.

> "Specialist email, Tuesday: 'I have examined the logs you preserved from Monday's crash. The memory usage climbs steadily from 06:00 until the crash at around 11:30, which is consistent with a memory leak in the reporting module. I cannot yet confirm this is the cause — two other explanations remain possible, and I have requested the supplier's diagnostic tool to narrow it down. In the meantime, restarting the service each morning before 08:00 should prevent crashes, as memory will not reach critical levels within a working day. Please log each restart and note the memory reading at restart time; those readings will tell us more.'"

**Question 5 (easy) — True, False, or Cannot say**

Statement: "The specialist has confirmed that a memory leak in the reporting module caused Monday's crash."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The specialist explicitly says "I cannot yet confirm this is the cause". The statement claims confirmation the passage actively denies. This tests distinguishing "consistent with" from "confirmed" — a distinction that matters constantly in specialist correspondence.

**Question 6 (moderate) — True, False, or Cannot say**

Statement: "If the service is restarted at 07:30 each morning, memory will not reach critical levels before the end of the working day."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The specialist's claim applies to restarts "before 08:00", and 07:30 falls within that window. This tests applying the passage's own stated claim to a case it covers, without doubting a claim the passage itself commits to.

**Question 7 (moderate) — What is being asked?**

According to the passage, what exactly should be done each day, and why?

- A) Restart the service before 08:00, log each restart, and record the memory reading at restart time — the readings will give the specialist more evidence.
- B) Restart the service whenever memory looks high, and email the specialist each time.
- C) Run the supplier's diagnostic tool each morning.
- D) Restart the service before 08:00; nothing else is needed.

**Correct answer: A**

**Explanation:** Three instructions appear: restart before 08:00, log each restart, note the memory reading — with the stated purpose that the readings inform the investigation. Option B invents a judgement-based trigger the passage does not give; option C confuses who runs the diagnostic tool; option D drops the logging. This tests finding every imperative in a passage and keeping the stated purpose attached.

For Questions 8 to 9, the candidate reads this passage.

> "Change freeze notice: A change freeze will apply from 17:00 on Friday 20 March until 08:00 on Monday 30 March, covering all services in the casework group. During the freeze, standard and normal changes must not be scheduled or actioned. Emergency changes remain permitted, subject to the usual emergency approval process. Changes to services outside the casework group are unaffected by this freeze but remain subject to standard change control. The freeze supports the year-end processing period, during which system stability takes priority over all non-essential work."

**Question 8 (easy) — True, False, or Cannot say**

Statement: "During the freeze, an emergency change to a casework service can still go ahead if it passes the emergency approval process."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The notice states this directly. This tests remembering that a rule and its exception, and the exception's own condition, are all part of the same rule.

**Question 9 (challenging) — True, False, or Cannot say**

Statement: "A normal change to a payroll service — which is not in the casework group — scheduled for 25 March, is not permitted."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says services outside the casework group are "unaffected by this freeze but remain subject to standard change control" — the freeze does not forbid this change. This tests scope reading: what a rule covers and what it explicitly leaves alone, and distinguishing that from silence (which would warrant Cannot say).

**Question 10 (moderate) — Clear-writing judgement**

An update for the service desk about a recurring fault is needed. Which version is clearest and most useful?

- A) "Further to ongoing investigative activities concerning the intermittent degradation phenomenon, stakeholders should note that remediation timescales remain to be confirmed."
- B) "The document upload fault is still under investigation. Until it is fixed: if a user reports error E-417, ask them to rename the file using only letters and numbers, then retry. This works in almost all cases. Log each occurrence against problem record PR-2041. Next update: Friday."
- C) "The upload thing is being looked at. Do the usual workaround."
- D) "Please be advised that the problem management function is cognisant of the upload issue and is progressing it through the appropriate process channels."

**Correct answer: B**

**Explanation:** Option B answers what fault, what to do, how reliable it is, where to log it, and when to expect the next update — all in plain words. Options A and D are fog; option C omits the logging instruction, breaking the evidence trail. This tests judging clarity as complete and plain, neither formal nor casual.

**Question 11 (moderate) — Reading a supplier bulletin accurately**

A supplier bulletin reads: "Version 5.2 resolves the intermittent session-timeout defect for customers using single sign-on. Customers not using single sign-on are unaffected by the defect and do not require this update. Version 5.2 requires a database schema update, which is irreversible once applied. We recommend applying 5.2 in a test environment first." The department uses single sign-on. Which summary is most accurate?

- A) "Version 5.2 fixes our session-timeout problem. Because it includes an irreversible schema change, the supplier recommends testing first — so we should plan a test-environment installation before any production date."
- B) "Version 5.2 is optional for us since some customers do not need it."
- C) "Version 5.2 fixes the timeout problem and can be rolled back if it causes trouble."
- D) "We are unaffected by the defect."

**Correct answer: A**

**Explanation:** Applying the bulletin's conditions to the department's actual situation (single sign-on), the defect applies, the fix is relevant, the schema change is irreversible (contradicting C), and testing is recommended. This tests conditional reading — working out which sentences apply to the actual case before summarising, treating words like "irreversible" as load-bearing.

**Question 12 (challenging) — Spotting the unsupported conclusion**

A draft monthly report reads: "Incidents linked to the finance system fell from 60 in January to 45 in February. This 25% fall shows that the memory patch applied in late January has resolved the underlying problem. Problem record PR-1980 can therefore be closed." Which critique is most accurate?

- A) The arithmetic is wrong: 60 to 45 is not a 25% fall.
- B) The arithmetic is right, but the conclusions overreach: a one-month fall after the patch is encouraging evidence, not proof of resolution — February may differ from January for other reasons — and the closure rule for problem records (fix deployed *and verified*) needs more than one suggestive month.
- C) The paragraph is fine as written.
- D) The paragraph is wrong because incident counts can never tell us anything about problems.

**Correct answer: B**

**Explanation:** 15÷60=25% — the arithmetic is correct. But "shows that the patch has resolved" overclaims from one month's data, and "can therefore be closed" skips the verification the closure rule requires. This tests spotting exactly where a well-written paragraph steps beyond its evidence, without discarding the evidence entirely (option D).

### Administration tips

- **Score for whether a candidate distinguishes "supported", "contradicted", and "not stated"** rather than defaulting when Cannot Say is correct.
- **Watch for whether a candidate checks every clause of a compound statement**, not just the part that sounds plausible.
- **Note whether a candidate keeps the author's stated level of certainty** ("consistent with" versus "confirmed") when passing information on.
- **Note whether a candidate identifies conditions joined by "and"** as both required.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate confuses False with Cannot Say** — False needs a contradiction, not mere silence.
- **Crediting an answer that misses or oversteps a rule's stated scope.**
- **Missing when a candidate upgrades uncertainty** — treating "consistent with" as "caused by".
- **Rewarding a summary that drops a stated condition** from a multi-part instruction.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace situations and asks the candidate to judge how effective different responses would be. Formats include picking the most effective response, picking the most and least effective, ranking all the options, or rating each option separately.

The typical format is 12 to 25 scenarios in 25 to 40 minutes. For a problem analyst, the scenarios live where the real dilemmas live: a fix that is tempting to apply without approval, a workaround that keeps hiding the evidence, a busy day where a promise competes with a colleague's urgent request, a specialist's answer that is not fully understood, or a mistake — the candidate's own or someone else's — that would be easier not to mention.

### How this assessment maps to the role

- **Ownership dilemmas** map to **Ownership and initiative**: own an issue until a new owner has been found or the problem has been mitigated or resolved.
- **Evidence and honesty dilemmas** map to **Problem management** and **Asset and configuration management**.
- **Working-with-others dilemmas** map to **Community collaboration**.
- **Escalation and consultation dilemmas** map to **Problem management** and **Incident management**.
- **Process-under-pressure dilemmas** map to **Change management**.
- **User-outcome dilemmas** map to **User focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The tempting unapproved fix**

While investigating a recurring fault, a configuration setting is identified with confidence as the cause. Changing it takes thirty seconds. The team's procedure requires configuration changes to go through a change request, usually approved within a day. The fault is annoying but has a working workaround. What is the most effective response?

- A) Make the change now — it is tiny, confidence is high, and the paperwork can follow.
- B) Raise the change request today, noting the evidence that points to this setting, and apply the change once it is approved.
- C) Leave it — the workaround works, so nothing more is needed.
- D) Ask a colleague to make the change instead.

**Correct answer: B**

**Explanation:** The fault is managed and approval takes about a day, so the procedure's cost is small and its benefit real: the change is reviewed and recorded. Option A breaks change control for a one-day saving on a mitigated fault; option C abandons the permanent fix; option D just moves the rule-breaking to someone else. This tests ownership of the real fix through the proper route, with evidence attached.

**Question 2 (easy) — Not understanding the specialist's answer**

A database specialist's reply about a recurring fault is full of unfamiliar terms, and it is unclear whether they are saying the fault is fixed or needs more work. A summary is due to the problem manager tomorrow. What is the most effective response?

- A) Copy the specialist's paragraphs unchanged into the summary — that way nothing gets distorted.
- B) Reply to the specialist: thank them, say the aim is to represent them accurately, and ask them to confirm in plain terms whether the fault is resolved or what remains to be done. Then summarise.
- C) Guess the most likely meaning from context and write the summary from that.
- D) Leave the specialist's email out of the summary to avoid getting it wrong.

**Correct answer: B**

**Explanation:** The job is to carry meaning, not just text, to the problem manager. Asking a specialist to clarify is consulting specialists effectively, not a weakness. Option A passes the confusion downstream; option C risks building decisions on a guess; option D deletes evidence because it was inconvenient. This tests never passing on information that could not be explained in one's own words.

**Question 3 (easy) — The colleague's repeated question**

A newer colleague asks — for the third time this month — how to link incidents to a problem record, having been shown twice already. The explanation takes about ten minutes. What is the most effective response?

- A) Tell them, kindly, that they have already been shown twice and should have noted it down.
- B) Do it for them each time — it is quicker than teaching.
- C) Walk them through it once more, but this time have them do the steps while watching, and afterwards point them to (or quickly write) a short crib sheet for next time.
- D) Suggest they ask someone else this time.

**Correct answer: C**

**Explanation:** The previous explanations likely did not stick because the colleague watched instead of doing. Option C changes the method, not just the repetition, and produces a lasting artefact. Option A discourages asking; option B keeps the colleague dependent; option D passes the cost sideways. This tests community collaboration — solving the instance and preventing the next one.

**Question 4 (moderate) — Restore fast or preserve the evidence?**

The finance reporting service has crashed — the same crash a problem team has been chasing for a month. Users are waiting. The diagnostic state is lost at restart, and there has never yet been a capture from a live failure. Copying diagnostics takes about three minutes; then a restart takes five. A service desk colleague is already reaching for the restart. What is the most effective response?

- A) Let the restart go ahead — eight minutes versus five matters to waiting users.
- B) Ask the colleague to hold for three minutes to capture the diagnostics, then restart — and tell the specialist a capture is finally on its way.
- C) Insist the service stays down until a specialist can log on and inspect it live.
- D) Let the restart happen, then reconstruct what the diagnostics probably contained from monitoring graphs.

**Correct answer: B**

**Explanation:** Three minutes against the chance of ending a month-long investigation is one of the best trade-offs available, and option B still restores service within nine minutes. Option A repeats the pattern that has kept the fault alive; option C overcorrects; option D substitutes reconstruction for real evidence. This tests serving both the incident (restore quickly) and the problem (preserve evidence) at once.

**Question 5 (moderate) — The promise and the interruption**

A commitment was made to deliver the monthly trend analysis by 15:00 today; it needs about two more hours, and it is now 12:30. A team leader from another area arrives, stressed, about a jammed printer that "IT never fixes properly", wanting help now. The service desk handles printer faults, but the team leader came directly because of help given once before. What is the most effective response?

- A) Go and fix the printer — a user standing in front of someone always comes first.
- B) Say printers are not the candidate's job and turn back to the analysis.
- C) Take two minutes: log the fault with the service desk directly while the team leader is present (or hand it over warmly by phone), note that this is a recurring jam worth a problem-record look, and get back to the analysis so the 15:00 promise holds.
- D) Ask the team leader to come back after 15:00.

**Correct answer: C**

**Explanation:** Option C handles a live fault (routed to its right owner), a hard deadline (protected), and a problem signal (a recurring jam, harvested) in two minutes. Option A breaks a deadline for work someone else can dispatch; option B is technically correct but relationally poor and loses the recurrence signal; option D just delays B politely. This tests user focus, ownership, and community collaboration together.

**Question 6 (moderate) — A candidate's own mistake in the records**

While preparing trend data for the quarterly review, a discovery is made: a month ago, about twenty incidents were linked to the wrong problem record, making PR-1990 look much bigger than it really is — a problem the manager plans to highlight as needing investment. The review is in three days. Nobody else has noticed. What is the most effective response?

- A) Quietly fix the links and say nothing.
- B) Say nothing at all — the exaggerated figure supports a case for investment that is probably justified anyway.
- C) Tell the problem manager today: explain the error, show the corrected figures, and offer to re-run any analysis that used the wrong data before the review.
- D) Mention it casually after the quarterly review, once the moment has passed.

**Correct answer: C**

**Explanation:** Both the data and the decisions resting on it need repairing. Option A repairs only the data while the manager is about to present conclusions built on the old numbers. Option B knowingly lets false data argue for a decision. Option C repairs both, early, with corrected figures and an offer to help. This tests owning an error early — self-caught, self-reported errors build trust rather than costing it.

**Question 7 (moderate) — The specialist who has gone quiet**

Three weeks ago, a network specialist agreed to investigate the root cause behind a problem record being supported. There has been silence since; the incidents are still occurring, eight more since then, each resolved with the workaround. The problem manager has not asked about it yet. What is the most effective response?

- A) Wait until the specialist gets back — chasing might seem pushy.
- B) Contact the specialist with a friendly, useful nudge: the incident count since they took it on, an offer of whatever they need, and a question about timescale — and note the contact in the problem record so its status is current.
- C) Escalate immediately to the specialist's manager about the lack of progress.
- D) Report to the problem manager that the investigation has stalled and someone should probably do something.

**Correct answer: B**

**Explanation:** Three weeks of silence with the fault still firing is exactly when an open action needs its owner to act — monitoring initiated actions is a named part of the problem management skill. Option A drifts; option C escalates before a simple chase is tried; option D hands the monitoring duty upward in vague form. This tests holding threads, chasing with evidence and warmth, and keeping records truthful.

**Question 8 (challenging) — The pattern nobody asked to be found**

Routine weekly data checks reveal something odd: over six weeks, a small number of incidents across three different services all mention slow responses in the last week of the month — eleven incidents total, each closed individually, spread across teams that never see each other's tickets. There is plenty of assigned work, and nobody has asked about this. What is the most effective response?

- A) Ignore it — eleven incidents in six weeks across three services is too small to matter, and it is not assigned work.
- B) Spend two or three hours fully investigating the cause before telling anyone.
- C) Spend twenty minutes assembling what is known — the eleven incidents, the shared end-of-month timing, the three services — and bring it to the problem manager as a possible emerging problem worth a record and a look.
- D) Email the three service teams asking if they have noticed anything, and leave it with them.

**Correct answer: C**

**Explanation:** The end-of-month timing across three unconnected services hints at a shared cause, and the right-sized response is to organise the evidence briefly and route it to the person whose role is to decide what gets investigated. Option B inverts the division of labour, sinking hours before triage; option A dismisses a pattern on size alone, when early patterns are always small; option D scatters the question to teams who each hold only a third of the picture. This tests proactive noticing, proportionate effort, and evidence assembled before escalation.

**Question 9 (challenging) — Pressure to soften the findings**

Analysis for a post-problem review shows clearly that a fault recurred for four months mainly because the fix was deprioritised twice in favour of new feature work. A team leader involved in those decisions asks, before the review, to "soften the timeline section — no need to make it look like anyone sat on it. Just say the fix took time." The data is accurate and double-checked. What is the most effective response?

- A) Soften it as asked — reviews go better when nobody is embarrassed, and the fix is in now anyway.
- B) Keep the timeline factual, and explain the section will present it without blame: as a process finding about deprioritisation, not criticism of individuals — inviting the team leader to add context about the competing pressures to the review.
- C) Refuse and add more emphasis to the delays so the review cannot miss them.
- D) Remove the timeline section entirely to stay neutral.

**Correct answer: B**

**Explanation:** The team leader is entitled to fair, blame-free framing and the chance to explain context, not to a record that hides why users lived with the fault for four months. Option B gives each side its due. Option A trades the organisation's learning for one meeting's comfort. Option C weaponises accurate data. Option D destroys the finding to avoid the argument. This tests keeping the data true, the framing kind, and the lesson in the record.

**Question 10 (challenging) — Most and least effective: the failing workaround**

The workaround for known error KE-2201 (rename files before upload) has started failing for some users — roughly one attempt in five now fails even after renaming. The permanent fix is scheduled for a release two months away. The service desk is getting frustrated repeat calls. Four actions:

1. Gather the evidence of the change — failure examples, rates before and now, anything the failing cases share — and take it to the problem manager: a changed known error may mean the problem itself has changed, and the fix's timing and content may need revisiting.
2. Update the known error record directly to say "workaround now unreliable", so the desk at least has honest information.
3. Tell the service desk to keep applying the workaround and reassure users that a fix is coming in two months.
4. Ask the desk to log failed-workaround cases distinctly for the next few days for analysis.

Which pairing is correct?

- A) Most effective: 1; least effective: 2
- B) Most effective: 4; least effective: 3
- C) Most effective: 1; least effective: 3
- D) Most effective: 2; least effective: 4

**Correct answer: C**

**Explanation:** Action 1 recognises a workaround that started failing as a signal the underlying problem may have shifted, and escalates with evidence to the person who can revisit the fix and the story users are told. Action 4 is genuinely good but delays the escalation a changed problem deserves. Action 2 has the right instinct and the wrong route (only the problem management team updates records). Action 3 doubles down on a degrading workaround and treats a one-in-five failure rate as nothing. This tests treating a workaround's changing behaviour as data about the problem.

**Question 11 (challenging) — The handover before leave**

Leave begins tomorrow for two weeks. Currently held: (1) an active problem investigation awaiting a supplier response due next week; (2) the weekly data checks that only this person normally runs; (3) a promise to a service desk colleague to review a draft knowledge article "soon" — no date agreed; (4) monitoring of the KE-2201 situation from the previous question. It is 15:30 on the last day. What is the most effective use of the final ninety minutes?

- A) Work as late as needed tonight to finish everything, so nothing needs handing over.
- B) Write one detailed handover email to the whole team covering all four items, send it at 17:00, and go on leave.
- C) Prioritise the time-sensitive items: brief a named colleague (with management's agreement) on the supplier response due next week and the KE-2201 watch — live threads that cannot wait two weeks — and show them or write down the weekly checks; then tell the service desk colleague honestly that the article review will happen on return, offering a date.
- D) Set an out-of-office message directing people to the team inbox, and deal with everything on return.

**Correct answer: C**

**Explanation:** The supplier response and KE-2201 watch are live threads that would sit unread or unmonitored for two weeks without a named owner. The weekly checks need a temporary runner. The article review is genuinely deferrable and can be honestly re-promised. Option A cannot compress an investigation awaiting a supplier reply into one evening. Option B broadcasts to no one in particular. Option D schedules two weeks of dropped threads. This tests continuity: live threads get owners, routine duties get runners, deferrable promises get honest new dates.

**Question 12 (challenging) — When prevention is unpopular**

Root cause analysis of a painful outage found that a data-import job fails whenever a supplier file arrives in a slightly wrong format, and the permanent prevention is a validation step that would reject bad files at the door with a clear error message. The team that runs imports dislikes the idea ("more steps, more rejections to chase") and points out, accurately, that the outage has happened only twice in a year. An honest recommendation is requested before a decision is made. What is the most effective recommendation?

- A) Recommend dropping the validation idea — the operating team knows their work best, and twice a year is rare.
- B) Recommend imposing the validation step exactly as designed — root cause analysis has spoken, and teams adjust eventually.
- C) Recommend the prevention, but with the numbers and the team's concern addressed together: quantify the two outages' cost against the validation's ongoing effort, and propose co-designing the details with the import team — clear rejection messages and a simple resubmission route — so the step prevents outages without becoming the burden they fear; if the numbers do not justify it, say so.
- D) Recommend waiting for a third outage, which would settle the argument.

**Correct answer: C**

**Explanation:** Costing the two outages against the validation's ongoing effort usually collapses in prevention's favour, but the recommendation should say so honestly only if the numbers actually support it. The team's objection is real information about a usability flaw, and co-designing produces a control that survives because its operators helped shape it. Option A defers to convenience with a known root cause armed and waiting. Option B risks a bypassed control, trusted while absent. Option D outsources the decision to the next outage's victims. This tests evidence-costed, honestly bounded, co-designed prevention.

### Administration tips

- **Score for whether a candidate's answer pairs action with communication** — fix and inform, decline and offer an alternative, help now and flag the pattern.
- **Watch for whether a candidate escalates too early or too late** — the pattern to look for is a direct step with evidence first, escalation with evidence second.
- **Note whether a candidate holds ownership across a boundary** — a specialist, another team, or their own leave — rather than letting it drop.
- **Note whether a candidate treats a small signal (a handful of scattered incidents, a workaround's changing failure rate) as worth attention.**
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that buys comfort over honesty** — softening findings, staying quiet about a mistake, letting flattering-but-wrong data stand.
- **Crediting an answer that skips process because the fix is small.**
- **Missing when a candidate drops ownership at a boundary** — "it is with the specialist", "I am on leave".
- **Accepting an answer that escalates before a direct, evidence-based step is tried, or vice versa.**
- **Missing when a candidate leaves a frustrated user unhelped** even where the underlying routing is procedurally correct.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a problem analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested reasoning with incident patterns and configuration checks: grouping incidents by shared features, applying procedures exactly as written, spotting the record that contradicts stated facts, and following a causal chain to a cause that can actually be fixed. The numeric section tested the percentages and trends that make up an analyst's evidence: correct bases, honest averages, rates instead of raw counts, and the arithmetic that shows a fix costs less than the fault. The verbal section tested procedures and specialist emails: exact reading of "must", "may", "unless" and "and", and the discipline of keeping an author's stated level of certainty when passing information on. The situational judgement section tested the real dilemmas of an analyst's week: the tempting unapproved fix, the workaround that hides evidence, the promise under pressure, the honestly reported mistake, and the small pattern nobody asked about.

The thread running through all four sections is careful attention, honest reasoning, and genuine ownership. These are the working habits described in the role summary — problem management, incident management, asset and configuration management, and community collaboration — expressed one question at a time.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and treat colleagues and users well under pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
