# IT Service Analyst - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for IT service analyst, within the UK Government Digital and Data profession. The material is job-specific: it draws on the artefacts an IT service analyst genuinely handles — incident tickets, asset records, checklists, escalation rules, and knowledge base entries — and the judgements genuinely made: diagnosing an issue quickly, checking a record against a standard, working out whether an SLA is being met, and deciding when to resolve something directly and when to escalate it.

Frontline support is, at its heart, structured thinking under time pressure. When a user reports that "the system is broken", the analyst has to gather clues, spot the pattern, rule things out one by one, and either resolve the issue or route it to the right resolver group — all while the SLA clock is ticking. The four assessments here — cognitive, numeric, verbal, and situational — are a miniature version of exactly that: they check whether a candidate can hold a few facts in mind, apply a rule correctly, notice when a detail does not fit, and decide what matters most right now.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. At analyst level, consider offering the platform's ungraded practice questions first, so nerves about the screen layout do not distort the result. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

At this level, the items are calibrated for the analyst level. A candidate is not being compared with senior managers — the material asks for the careful, methodical thinking that makes a good frontline analyst, the thinking exercised every shift.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the thinking skills this role actually uses, through practical scenarios rather than abstract puzzles. Instead of asking a candidate to rotate shapes, it presents the materials of the working day — incident tickets, asset records, checklists, escalation rules, and knowledge base entries — and asks them to reason about them quickly and accurately.

The typical format is an online, timed test lasting 15 to 30 minutes, with somewhere between 15 and 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many modern platforms are adaptive, so the questions get slightly harder after a correct answer and slightly easier after an incorrect one, and employers often see speed and accuracy reported separately.

Why does this kind of test suit IT service analysts? Because frontline support is structured thinking under time pressure. A cognitive assessment is a miniature version of exactly that: it checks that the candidate can hold a few facts in mind, apply a rule correctly, notice when a detail does not fit, and decide what matters most right now.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **problem solving** duties and the **Business analysis (IT operations)** skill. Diagnosing complex problem situations means noticing patterns: five tickets in an hour all mentioning the same application, or printer faults that only happen on one floor.
- **Logical deduction** maps to the duty to **diagnose, evaluate and resolve complex problem situations or, when appropriate, escalate or route them to IT resolver groups**. Escalation rules are if-then rules; applying them correctly — and only deducing what the facts actually support — is logical deduction in action.
- **Error checking** maps to the **Asset and configuration management** skill: tracking, logging and correcting information to protect assets and components.
- **Prioritisation** maps to the duty to respond to and resolve service desk incident tickets **according to a service level agreement (SLA)**, and to the **Ownership and topic** skill.
- **Applied problem solving** maps to the **root cause analysis** duty and the work to **develop checklists for typical problems** and **recommend procedures and controls for problem prevention**.
- Working through questions quickly but accurately also reflects the **Service focus** skill — knowing which clues belong to which service.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a ticket queue**

The incoming ticket queue on Monday morning. The last six tickets read:

1. "Cannot log in to HR portal — password not accepted"
2. "Printer on floor 2 showing paper jam"
3. "HR portal rejects my password"
4. "HR portal login fails with error 401"
5. "Request: new starter needs a laptop"
6. "HR portal — locked out after password change"

What is the most likely pattern in this queue?

- A) A hardware fault is affecting floor 2
- B) Several tickets point to a possible shared issue with HR portal authentication
- C) The new starter's laptop is causing login failures
- D) There is no pattern; all six tickets are unrelated

**Correct answer: B**

**Explanation:** Four of the six tickets (1, 3, 4 and 6) mention the HR portal and a login or password failure — a cluster: several users, one service, one type of symptom, in a short time window. The most likely explanation is a shared issue, perhaps an authentication service problem, rather than four coincidences. Ticket 2 is a routine printer fault and ticket 5 is a service request, not an incident, so neither belongs to the cluster. Option A over-weights a single ticket, and option C invents a connection the facts do not support. This tests whether the candidate spots clusters — exactly how a frontline analyst turns repeated incidents into a single problem record, the first step of root cause analysis.

**Question 2 (easy) — Logical deduction from an escalation rule**

A service desk procedure says: "If an incident affects more than ten users, it must be escalated to the major incident manager immediately." A colleague reports: "I have an incident affecting exactly ten users." Based only on the rule and this fact, which statement must be true?

- A) The incident must be escalated to the major incident manager
- B) The incident must not be escalated under any circumstances
- C) The rule does not require this incident to be escalated
- D) The incident affects the HR portal

**Correct answer: C**

**Explanation:** Read the rule carefully: it applies when an incident affects *more than* ten users. Ten users is not more than ten, so the rule does not require escalation — that is all that can be deduced. Option A misreads "more than ten" as "ten or more". Option B goes too far the other way: the rule not requiring escalation is not the same as forbidding it. Option D introduces information that appears nowhere in the question. This tests the discipline of concluding only what the given words guarantee — the same discipline that stops an analyst escalating too early or too late on the desk.

**Question 3 (easy) — Error checking an asset record**

Logging a laptop into the asset register. The service desk standard says every asset record must contain: asset tag (format GOV-nnnnn, five digits), owner's staff ID (format two letters then four digits), and location code (three letters). A colleague has drafted this record:

- Asset tag: GOV-04213
- Staff ID: JT29A4
- Location: LDN

Which field is wrong?

- A) Asset tag
- B) Staff ID
- C) Location
- D) None; the record is correct

**Correct answer: B**

**Explanation:** Check each field against its rule, one at a time. The asset tag GOV-04213 matches "GOV-" plus five digits — correct. The location LDN is three letters — correct. The staff ID must be two letters then four digits, such as JT2904; but JT29A4 has a letter in the middle of the digits, so it breaks the format. This tests working methodically field by field rather than skimming a record that "looks about right" — the same discipline the asset and configuration management skill names, since one badly formatted staff ID can mean a laptop that cannot be traced to its owner when it matters.

**Question 4 (easy) — Prioritising two tickets**

It is 14:00. Two open tickets:

- Ticket A: a director cannot change her email signature. Priority 4 (low). SLA resolution target: 3 working days. Logged this morning.
- Ticket B: a caseworker cannot access the benefits processing system and has citizens waiting. Priority 2 (high). SLA resolution target: 4 hours. Logged at 11:30.

Which ticket should be worked on first, and why?

- A) Ticket A, because directors are senior and should never wait
- B) Ticket B, because it has higher priority and its SLA target is closer to breaching
- C) Ticket A, because it was logged first
- D) Ticket B, but only after Ticket A is finished, to keep the queue tidy

**Correct answer: B**

**Explanation:** Priority on a service desk is set by impact and urgency, not by the seniority of the person who logged the ticket. Ticket B stops a caseworker serving citizens — real business impact — and its 4-hour SLA target, started at 11:30, means it is due by 15:30: both higher priority and closer to breach. Ticket A is a minor inconvenience with three days of headroom. Option A confuses seniority with priority. Option C uses arrival order, ignoring impact entirely. Option D delays urgent work for no benefit. This tests whether the candidate works the queue by agreed priority — the everyday meaning of resolving tickets "in a timely manner according to a service level agreement".

**Question 5 (moderate) — Deduction during troubleshooting**

A user reports they cannot open a shared network folder. Facts established: (i) the user can open other network folders; (ii) a colleague sitting next to them, on the same network, can open the folder; (iii) the user could open the folder yesterday; (iv) the user's account was moved to a new security group last night as part of a planned change. What is the most likely cause to investigate first?

- A) The network cable at the user's desk is faulty
- B) The folder has been deleted from the server
- C) The user's permissions changed when their account moved security groups
- D) The whole network is down

**Correct answer: C**

**Explanation:** Use each fact to rule things out. Fact (i) — other folders open fine — rules out a general connection problem at the desk, so A is unlikely, and D is ruled out by both (i) and (ii). Fact (ii) — a colleague can open the folder — proves the folder still exists, ruling out B. Fact (iii) tells us something changed since yesterday, and fact (iv) hands us a known change that fits perfectly: security group membership controls folder permissions. This tests whether the candidate finds the hypothesis consistent with every fact — textbook root cause thinking, where "what changed?" is one of the most powerful diagnostic questions an analyst can ask.

**Question 6 (moderate) — Pattern recognition across a week**

Reviewing last week's incident log for the print service, as part of developing a problem-prevention checklist. Incidents occurred at these times: Monday 09:05, Tuesday 09:12, Wednesday 09:03, Thursday 09:08, Friday 09:10. Each incident cleared by itself after about 20 minutes. Which line of investigation does the pattern most strongly suggest?

- A) Random hardware failures with no common cause
- B) Something scheduled or load-related that happens shortly after 09:00 each weekday
- C) A single user misusing the printer
- D) A fault that only occurs on Mondays

**Correct answer: B**

**Explanation:** Five incidents, five weekdays, all within a nine-minute window just after 09:00, all self-clearing after roughly the same duration. Random failures (A) would scatter across the day; a Monday-only fault (D) contradicts four of the five data points; a single user (C) is possible but explains neither the precise timing nor the daily regularity as well as B does. This tests whether the candidate recognises a time-based pattern that points to something systematic — perhaps a scheduled job or the morning login surge — converting "the printer is flaky" into a specific, testable hypothesis for the resolver group.

**Question 7 (moderate) — Error checking a knowledge base article**

Reviewing a draft knowledge base article before it is published:

"To reset a locked account: (1) Verify the caller's identity using two approved checks. (2) Open the admin console and select Unlock. (3) Ask the caller to confirm they can log in. (4) If the caller fails identity verification, complete the unlock and then report the call to security."

Which step contains a serious error?

- A) Step 1
- B) Step 2
- C) Step 3
- D) Step 4

**Correct answer: D**

**Explanation:** Steps 1 to 3 form a sensible flow: verify, unlock, confirm. Step 4 is dangerous: it says that when a caller *fails* identity verification, the analyst should complete the unlock anyway and merely report it afterwards — defeating the entire purpose of verification, since an attacker could be handed the account. The correct procedure would refuse the unlock, keep the account secured, and report the attempt. This tests error checking by asking "what would actually happen if this step were followed exactly?" — a flawed knowledge article gets repeated by every analyst who trusts it, so catching the error before publication protects the whole desk.

**Question 8 (moderate) — Prioritisation with four competing demands**

It is 09:15. Four things need attention:

1. A Priority 2 ticket owned by the analyst, due to breach its SLA at 10:00, waiting on one final check that takes 10 minutes.
2. A walk-up user who says their mouse is "acting strangely" but they can still work.
3. A voicemail from a resolver group asking to confirm details on a ticket escalated yesterday; they cannot progress it without a reply.
4. A team leader has asked everyone to complete a mandatory security e-learning module "by the end of the week".

Which order is most defensible?

- A) 1, 3, 2, 4
- B) 2, 1, 3, 4
- C) 4, 1, 3, 2
- D) 3, 2, 4, 1

**Correct answer: A**

**Explanation:** Item 1 is urgent (45 minutes to SLA breach), high impact, and quick to finish — clearing it first prevents a breach on a ticket the analyst owns. Item 3 comes next: another team is blocked waiting for a reply, and the ownership and topic skill means an escalated ticket is still the analyst's issue until the new owner can genuinely progress it. Item 2 is a minor issue where the user can still work. Item 4 has a Friday deadline and no urgency today. Option B lets an SLA breach happen while looking at a working mouse; option C puts routine training ahead of everything; option D leaves the near-breach ticket until last. This tests sequencing by urgency and impact together, and recognising that unblocking other people multiplies an analyst's usefulness.

**Question 9 (moderate) — Applied problem solving with a checklist**

Building a first-line checklist for "user cannot connect to Wi-Fi" incidents, ordered to rule out the most common, quickest-to-test causes first. Which ordering best follows that principle?

- A) Check building network outage dashboard → check aeroplane mode / Wi-Fi toggle on device → forget and rejoin the network → escalate to network team
- B) Escalate to network team → check aeroplane mode → check outage dashboard → forget and rejoin
- C) Forget and rejoin the network → escalate to network team → check aeroplane mode → check outage dashboard
- D) Check aeroplane mode → forget and rejoin → check outage dashboard → escalate to network team

**Correct answer: A**

**Explanation:** A good diagnostic checklist tests broad, fast, high-probability causes before narrow or slow ones, and escalates only when first-line steps are exhausted. Checking the outage dashboard takes seconds and instantly reveals whether this is one user or a building-wide event — if there is an outage, every later step is wasted effort, so it earns first place. The device-level toggle check is next fastest and catches a very common cause. Forget-and-rejoin takes a little longer and changes device state, so it comes after the quick checks. Escalation is correctly last — options B and C escalate before doing the basics, wasting resolver group time; option D delays the seconds-long dashboard check to third. This tests the "cheap and likely first" principle at the heart of the duty to develop checklists for typical problems.

**Question 10 (hard) — Deduction with multiple rules**

Routing rules: (i) hardware faults go to the Desktop team; (ii) access requests go to the Identity team; (iii) any ticket mentioning suspected phishing goes to Security, and this rule overrides all others; (iv) if a ticket fits none of these, it stays with the service desk. A ticket reads: "My new keyboard arrived but I also got an email asking me to 'verify my payroll login' via a link — it looks suspicious. Also, please can I get access to the finance shared drive?" Where should the ticket go first?

- A) Desktop team, because a keyboard is hardware
- B) Identity team, because there is an access request
- C) Security, because suspected phishing overrides all other routing
- D) It stays with the service desk, because it fits several categories at once

**Correct answer: C**

**Explanation:** The ticket touches three rules: a hardware mention (keyboard), an access request (finance drive), and suspected phishing (the "verify your payroll login" email). Rule (iii) states explicitly that phishing routing *overrides all others*, so Security must see the ticket first — a phishing email is time-critical because other staff may have received the same message. Options A and B each apply a valid rule but ignore the stated override; option D invents a rule that does not exist. A strong candidate's answer also notes that the access request and keyboard note should be logged separately so they are not lost. This tests handling several rules at once and respecting explicit precedence — routing errors on security issues are among the most costly a frontline analyst can make.

**Question 11 (hard) — Root cause analysis from an incident timeline**

Root cause analysis on Friday's outage of the appointment booking service. Timeline: 08:00 nightly maintenance completes normally; 08:30 a configuration change is applied to the booking server; 08:45 monitoring shows response times rising; 09:10 users begin reporting timeouts; 09:30 the change is rolled back; 09:40 response times return to normal. Which conclusion does the timeline best support?

- A) The nightly maintenance caused the outage
- B) User reports caused the slow response times
- C) The 08:30 configuration change is the most likely cause, supported by symptoms starting after it and stopping after rollback
- D) The cause cannot be narrowed down at all from this timeline

**Correct answer: C**

**Explanation:** Root cause analysis leans on two questions: what changed before the symptoms started, and what made the symptoms stop? Maintenance finished at 08:00 with the service normal for 30 minutes afterwards, weakening option A. The configuration change at 08:30 is followed within 15 minutes by rising response times — and rolling back that change at 09:30 is followed within 10 minutes by recovery. Symptoms starting after a change and stopping after its reversal is strong evidence, far stronger than either clue alone. Option B reverses cause and effect. Option D is too pessimistic. This tests holding a conclusion with appropriate confidence ("most likely cause") — exactly what the root cause analysis duty and the business analysis skill require.

**Question 12 (hard) — Problem prevention reasoning**

Over three months, the desk logged 90 incidents of "user locked out after password expiry". Investigation shows: passwords expire every 90 days; the expiry warning email is sent only once, 14 days before expiry; and 80% of locked-out users say they never saw the warning. A recommendation for one control for problem prevention is requested. Which recommendation attacks the root cause most directly?

- A) Add more analysts to the desk on Mondays to handle lockout calls faster
- B) Improve the warning process — for example, repeated reminders through a channel users actually see, closer to the expiry date
- C) Tell users to write their passwords down so they do not forget them
- D) Increase the SLA time allowed for lockout tickets so they breach less often

**Correct answer: B**

**Explanation:** Separate the symptom (lockout calls) from the cause chain: expiry is routine, but the warning is not reaching users — 80% never saw the single email sent 14 days out. Option B attacks that link directly: more reminders, better timing, and a channel users notice would prevent lockouts before they happen. Option A treats the symptom without reducing volume. Option D changes the measurement, not the reality. Option C creates a security risk to solve a convenience problem. This tests the essence of the duty to recommend procedures and controls for problem prevention: a good control removes future incidents rather than absorbing them, and the evidence tells the candidate exactly which link in the chain is broken.

### Administration tips

- **Score for whether a candidate rules out options using only the given facts**, rather than adding assumptions the question never supplied.
- **Watch for misreading of thresholds and negatives** — "more than", "at least", "unless", "except".
- **Note whether a candidate lets seniority override stated priority** in prioritisation items.
- **Note whether a candidate escalates before doing the basic first-line checks**, in problem-solving items.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.
- **Use the multi-rule item (Question 10) to observe whether a candidate respects an explicit override** rather than applying the first rule that seems to fit.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that assumes facts the question never gave**, such as inferring seniority matters more than stated priority.
- **Missing a misread threshold or negative** that changes what a rule actually requires.
- **Crediting an answer that escalates before the reasonable first-line checks are done.**
- **Accepting a conclusion stated with more confidence than the evidence supports**, or one stated with too little confidence when the evidence is actually strong.
- **Rewarding a recommendation that treats a symptom** rather than the cause chain the evidence points to.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the kinds of numbers this role genuinely handles: ticket volumes, SLA percentages, resolution times, first-time fix rates, asset counts, and simple trends over weeks and months. The building blocks are percentages, averages, ratios, rates, and reading tables and simple charts — what the test really measures is whether the candidate can pick the right numbers out of a table, do the right calculation with them, and sanity-check the result.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. Each question usually shows a small table or chart plus a short scenario, then a multiple-choice question. Calculators are normally allowed. Accuracy and speed are both recorded, so a steady, methodical pace beats a rushed one.

Numeracy matters for this role because numbers run through everything a service desk does. The role's SLA obligation is a number with a promise attached, and the IT service reporting skill asks the analyst to produce reports, interpret a data set, and communicate it to others. The arithmetic itself is deliberately simple; the challenge is care — reading the right row, using the right base for a percentage, and not being rushed into a slip.

### How this assessment maps to the role

- **Reading tables and charts** maps directly to the **IT service reporting** skill: producing relevant reports in an appropriate format and agreed timeframe, and interpreting a data set to communicate it to others.
- **Percentages** map to SLA performance, the core measure of the role's day: percentage of tickets resolved within target, first-time fix percentage, percentage change in volumes.
- **Averages and rates** map to the **root cause analysis** duty and the **Business analysis (IT operations)** skill: investigating problems in existing processes often starts with a figure such as "the average handle time rose".
- **Ratios and proportions** map to the **Asset and configuration management** skill: stock levels, spares per site, and assets per user.
- **Trend reading** maps to the **User focus** skill and the **Strategic thinking** skill, because communicating how activities meet goals usually means showing a number moving in the right direction.
- **Communicating numbers clearly** maps to the **Stakeholder relationship management (IT operations)** skill: using evidence to explain decisions is only possible when the evidence has been read correctly.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage of tickets resolved within SLA**

Last week the desk closed 200 incident tickets. Of these, 178 were resolved within their SLA target. What percentage of tickets met the SLA?

- A) 82%
- B) 85%
- C) 89%
- D) 91%

**Correct answer: C**

**Explanation:** Percentage met = (tickets within SLA ÷ total tickets) × 100. Step 1: 178 ÷ 200 = 0.89. Step 2: 0.89 × 100 = 89%. A quick sanity check: 90% of 200 would be 180, and 178 is just below that, confirming 89%. This tests the single most common calculation in service desk reporting — if the desk's target is 95%, the week fell 6 percentage points short, the kind of clear, evidence-based statement the IT service reporting skill calls for.

**Question 2 (easy) — Average tickets per day**

Tickets logged over five days: Monday 46, Tuesday 38, Wednesday 41, Thursday 35, Friday 50. What was the average (mean) number of tickets per day?

- A) 40
- B) 42
- C) 44
- D) 46

**Correct answer: B**

**Explanation:** Step 1: add the daily totals: 46 + 38 = 84; 84 + 41 = 125; 125 + 35 = 160; 160 + 50 = 210. Step 2: divide by the number of days: 210 ÷ 5 = 42. Sanity check: the values range from 35 to 50, and 42 sits comfortably inside that range — an average outside the data's range always means a slip. This tests basic mean calculation and, a strong candidate's answer notes, why the figure matters: a baseline against which a sudden 70-ticket day stands out as a possible incident cluster worth investigating.

**Question 3 (easy) — Reading a simple table**

Open tickets by priority at 09:00 today:

| Priority | Open tickets | SLA target |
|---|---|---|
| P1 (critical) | 1 | 2 hours |
| P2 (high) | 6 | 4 hours |
| P3 (medium) | 28 | 2 days |
| P4 (low) | 45 | 5 days |

What fraction of all open tickets are Priority 3?

- A) 28/80
- B) 28/74
- C) 35/80
- D) 28/45

**Correct answer: A**

**Explanation:** Step 1: total open tickets = 1 + 6 + 28 + 45 = 80. Step 2: the P3 count is 28, so the fraction is 28/80 (35%). Option B forgets to include the P2 tickets in the total; option D compares P3 to P4 rather than to the whole; option C muddles the numerator. This tests whether a candidate finds the right base — "out of what?" — since in queue reporting the base is usually the whole queue, and getting it wrong quietly misleads a report a stakeholder relies on.

**Question 4 (easy) — Percentage change in ticket volume**

In June the desk received 1,200 tickets. In July it received 1,380. By what percentage did ticket volume increase from June to July?

- A) 12%
- B) 15%
- C) 18%
- D) 20%

**Correct answer: B**

**Explanation:** Percentage change = (difference ÷ original) × 100. Step 1: difference = 1,380 − 1,200 = 180. Step 2: divide by the *original* (June) figure: 180 ÷ 1,200 = 0.15. Step 3: 0.15 × 100 = 15%. The classic error is dividing by the new figure (180 ÷ 1,380 ≈ 13%). This tests recognising that the starting period is the base — a 15% monthly rise is exactly the kind of movement a report should flag with a suggested cause to investigate.

**Question 5 (moderate) — First-time fix rate comparison**

First-time fix (FTF) figures for two months:

| Month | Tickets closed | Fixed at first contact |
|---|---|---|
| September | 950 | 646 |
| October | 1,100 | 726 |

Which statement is correct?

- A) FTF rate improved from September to October
- B) FTF rate fell from 68% to 66%
- C) FTF rate stayed exactly the same
- D) FTF rate fell from 72% to 68%

**Correct answer: B**

**Explanation:** September: 646 ÷ 950 = 0.68 (68%). October: 726 ÷ 1,100 = 0.66 (66%). The rate fell by two percentage points even though the *number* of first-time fixes rose from 646 to 726. Option A is tempting because more tickets were fixed first time, but the desk also closed more tickets overall, and a rate compares like with like. This tests distinguishing counts from rates — a distinction that comes up constantly in service reporting, and a strong candidate's answer can explain it simply ("we fixed more, but we also received more").

**Question 6 (moderate) — SLA breach deadline arithmetic**

A Priority 2 ticket has a 4-working-hour resolution target. Working hours are 08:00 to 16:00. The ticket was logged at 14:30 on Tuesday. By what time must it be resolved to meet the SLA?

- A) 18:30 Tuesday
- B) 09:30 Wednesday
- C) 10:30 Wednesday
- D) 12:30 Wednesday

**Correct answer: C**

**Explanation:** The clock only runs during working hours. Step 1: from 14:30 to 16:00 on Tuesday is 1.5 working hours, leaving 4 − 1.5 = 2.5 hours on the clock. Step 2: the clock restarts at 08:00 Wednesday. Step 3: 08:00 + 2.5 hours = 10:30 Wednesday. Option A wrongly runs the clock past the end of the working day; option B only adds 1.5 hours on Wednesday; option D adds the full 4 hours from 08:30. This tests SLA clock arithmetic, bread and butter for working "in a timely manner according to a service level agreement" — knowing the real deadline prevents both needless panic and accidental breaches.

**Question 7 (moderate) — Asset stock ratio**

A site standard requires spare laptops in the ratio of 1 spare for every 25 staff. The site has 450 staff and currently holds 14 spare laptops. Which statement is correct?

- A) The site meets the standard exactly
- B) The site is 4 spares short of the standard
- C) The site holds 4 more spares than the standard requires
- D) The site is 11 spares short of the standard

**Correct answer: B**

**Explanation:** Step 1: required spares = staff ÷ 25 = 450 ÷ 25 = 18. Step 2: 18 required − 14 held = 4 short. Option D likely comes from 25 − 14 = 11, mixing up the ratio with a count. This tests a ratio check that sits inside the asset and configuration management skill — verifying stock against a standard and logging a replenishment request before a shortage bites during a busy week.

**Question 8 (moderate) — Weighted workload across categories**

Yesterday 20 tickets were closed: 12 password resets averaging 6 minutes each, 5 software installs averaging 18 minutes each, and 3 hardware faults averaging 30 minutes each. What was the average time per ticket across all 20 tickets?

- A) 12.6 minutes
- B) 14.4 minutes
- C) 18.0 minutes
- D) 10.8 minutes

**Correct answer: A**

**Explanation:** Simply averaging 6, 18 and 30 (giving 18, option C) is wrong because the categories have different volumes — weighting by ticket count is required. Step 1: total time = (12 × 6) + (5 × 18) + (3 × 30) = 72 + 90 + 90 = 252 minutes. Step 2: 252 ÷ 20 = 12.6 minutes. Sanity check: most tickets were quick 6-minute resets, so the overall average should sit much closer to 6 than to 30. This tests weighted averaging, one of the commonest reporting errors on any desk.

**Question 9 (moderate) — Reading a trend for a report**

Monthly SLA achievement for the desk: March 96%, April 95%, May 93%, June 92%, July 90%. The target is 95%. Which sentence is the most accurate summary for a monthly report?

- A) "Performance is stable and consistently above target."
- B) "Performance has declined for four consecutive months and has been below the 95% target since May."
- C) "Performance collapsed in July after a strong June."
- D) "Performance varies randomly with no clear direction."

**Correct answer: B**

**Explanation:** The series falls every month — 96, 95, 93, 92, 90 — so "stable" (A) and "random" (D) are both wrong. Option C invents a story: June (92%) was already below target and the July fall of 2 points matches the general slide. Option B states both facts that matter: a steady four-month decline, and below-target status starting in May. This tests writing a sentence that says exactly what the data shows, no more, no less — a steady decline is precisely the pattern that should trigger investigative work under the business analysis skill, since gradual erosion usually has a systemic cause.

**Question 10 (hard) — Percentage of a percentage**

Last month the desk received 1,500 tickets. 40% of them related to the case management system. Of those case management tickets, 15% were escalated to the applications resolver group. How many case management tickets were escalated?

- A) 60
- B) 90
- C) 225
- D) 600

**Correct answer: B**

**Explanation:** Step 1: case management tickets = 40% of 1,500 = 600. Step 2: escalated = 15% of *those 600* = 90. Option D stops after step 1; option C wrongly takes 15% of 1,500; option A takes 10% of 600. This tests keeping track of the base at each step of a chained percentage — the same pattern that appears in real reporting whenever a figure is drilled down.

**Question 11 (hard) — Estimating the impact of a prevention control**

A desk receives 90 password-expiry lockout tickets per quarter, each taking an average of 10 minutes of analyst time. A proposed reminder improvement is expected to prevent 70% of these tickets. Roughly how much analyst time per quarter would the improvement save?

- A) About 6.3 hours
- B) About 10.5 hours
- C) About 9 hours
- D) About 15 hours

**Correct answer: B**

**Explanation:** Step 1: tickets prevented = 70% of 90 = 63. Step 2: time saved = 63 × 10 minutes = 630 minutes. Step 3: 630 ÷ 60 = 10.5 hours per quarter. Option C is the *remaining* tickets' time miscounted; option D is the time for all 90 tickets; option A halves the correct figure. This tests the arithmetic behind the duty to recommend procedures and controls for problem prevention — a recommendation lands far better when it carries a quantified benefit that stakeholders can weigh against the cost of change.

**Question 12 (hard) — Combining two tables**

Two extracts from this week's reporting. Table 1, tickets received by channel: Phone 240, Email 160, Self-service portal 100. Table 2, percentage of each channel's tickets resolved within SLA: Phone 95%, Email 85%, Self-service portal 92%. How many tickets in total were resolved within SLA this week?

- A) 456
- B) 464
- C) 453
- D) 500

**Correct answer: A**

**Explanation:** Work channel by channel, then add. Phone: 95% of 240 = 228. Email: 85% of 160 = 136. Portal: 92% of 100 = 92. Total: 228 + 136 + 92 = 456. A common shortcut error is averaging the three percentages — (95 + 85 + 92) ÷ 3 ≈ 90.7% — and applying it to 500 tickets, giving about 453 (option C), which is wrong because the channels have different volumes. This tests combining tables correctly, respecting volumes — exactly what is needed to assemble a weekly report from several sources, and the resulting figure (456 ÷ 500 = 91.2%) is one a strong candidate could defend line by line if asked.

### Administration tips

- **Score for whether a candidate names the correct base** before computing a percentage — the whole queue, the original period, the relevant subgroup.
- **Watch for whether a candidate distinguishes a count from a rate** when the two move in different directions.
- **Note whether a candidate weights an average by volume** rather than averaging raw figures across unequal groups.
- **Note whether a candidate sanity-checks a result** against the range or shape of the underlying data.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that divides by the wrong base** — using the new figure instead of the original, or a subgroup instead of the whole.
- **Crediting an unweighted average of rates from differently sized groups.**
- **Missing when a candidate confuses a count with a rate.**
- **Accepting SLA deadline arithmetic that runs a clock through non-working hours.**
- **Rewarding an answer that stops one step early in a multi-step calculation.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material, using the kinds of documents this role actually involves: SLA definitions, service desk procedures, knowledge base articles, policy extracts, emails from users and stakeholders, and incident reports. The classic format shows a short passage and then asks whether statements that follow are **True** (the passage supports them), **False** (the passage contradicts them), or **Cannot say** (the passage gives too little information to decide either way).

The typical format is an online, timed test lasting 15 to 25 minutes, with 20 to 30 statements spread across several passages. The golden rule is to answer *only from the passage*, not from outside knowledge of how services usually work — a candidate with real IT experience may know more than the passage says, or even something that differs from it, and the passage must still win.

Verbal precision matters for this role because frontline support runs on precise reading and clear writing. The role summary asks the analyst to respond to and document incident tickets that others will rely on, and the stakeholder relationship management skill asks for communication tailored to stakeholders' needs. Misreading one clause of an SLA, or one step of a security procedure, has real consequences.

### How this assessment maps to the role

- **Comprehension of procedures and policies** maps to the duty to resolve tickets **according to a service level agreement** and to the **Service management framework knowledge** skill.
- **True/False/Cannot say discipline** maps to the **root cause analysis** duty and the **Business analysis (IT operations)** skill: investigation means separating what the evidence establishes from what it merely suggests.
- **Inference** maps to work with users under the **User focus** skill: users rarely describe faults in technical terms, so an analyst constantly infers the real issue from imperfect descriptions.
- **Clear-writing judgement** maps to the ticket documentation duty and the **IT service reporting** skill.
- **Reading stakeholder emails accurately** maps to the **Stakeholder relationship management (IT operations)** skill.
- **Understanding strategic context in documents** maps to the **Strategic thinking** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 5, the candidate reads this passage, then answers each question using only the passage.

> **Extract from the Service Desk Operations Manual**
> All Priority 1 incidents must be escalated to the duty incident manager within 15 minutes of being logged. Priority 2 incidents must be escalated within one hour if no resolver group has accepted the ticket. Analysts may reclassify a ticket's priority only with the agreement of their team leader, except where the standard priority matrix clearly indicates a different priority, in which case the analyst may reclassify and must record the reason. The service desk operates from 08:00 to 18:00 on working days. Outside these hours, Priority 1 incidents are handled by the on-call team; all other tickets are queued for the next working day.

**Question 1 (easy) — True, False, or Cannot say**

Statement: "A Priority 1 incident logged at 10:00 on a working day must be escalated to the duty incident manager by 10:15."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage states that all Priority 1 incidents must be escalated to the duty incident manager within 15 minutes of being logged. A ticket logged at 10:00 on a working day therefore has an escalation deadline of 10:15. This tests reading an SLA clause and correctly stating the deadline it creates for a specific ticket.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "Priority 2 incidents must always be escalated within one hour."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says Priority 2 incidents must be escalated within one hour *if no resolver group has accepted the ticket*. The rule is conditional; the statement drops the condition and adds "always", and the passage contradicts that absolute version, since a P2 accepted within the hour needs no escalation. This tests alertness to words like "always" and "never", which often convert a true conditional into a false absolute.

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "Analysts are never permitted to change a ticket's priority on their own."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage gives a general rule (reclassification needs team leader agreement) *and an exception*: where the standard priority matrix clearly indicates a different priority, the analyst may reclassify alone, recording the reason. The statement's "never... on their own" is directly contradicted. This tests whether the candidate reads past the general rule to the stated exception — exceptions are where procedures earn their keep, and where misreading causes real incidents to be wrongly prioritised.

**Question 4 (moderate) — True, False, or Cannot say**

Statement: "A Priority 3 ticket logged at 19:30 will be resolved on the next working day."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage says that outside desk hours, tickets other than Priority 1 are *queued* for the next working day. Queued is not resolved. The ticket will wait until the next working day before anyone works on it, but whether it will actually be resolved that day depends on facts the passage does not give. This tests noticing when a statement goes one step beyond the text — the same habit that stops an analyst promising a user "it will be fixed tomorrow" when all that is actually known is "it will be looked at tomorrow".

**Question 5 (moderate) — Inference from the passage**

Which of the following can properly be inferred from the passage?

- A) The on-call team resolves Priority 1 incidents faster than the day service desk
- B) The organisation treats Priority 1 incidents as needing urgent human attention at any hour
- C) Team leaders dislike analysts reclassifying tickets
- D) The service desk is closed at weekends

**Correct answer: B**

**Explanation:** Option A compares speeds — the passage says nothing about resolution speed. Option C attributes feelings to team leaders — unsupported. Option D is tempting (the desk operates "on working days") but the passage never actually says weekends are excluded. Option B is a safe inference: P1s get a 15-minute escalation clock in hours and a dedicated on-call team out of hours — the only category handled by humans around the clock — together showing the organisation treats P1s as urgent at any hour. This tests recognising that a proper inference is a conclusion the passage makes unavoidable, not merely plausible.

For Questions 6 to 8, the candidate reads this passage.

> **Email from the Facilities Programme Office**
> Subject: Desk moves — Building C, weeks 12 and 13
> The programme will relocate 120 staff from Building C to Building A in weeks 12 and 13. IT support requirements: each relocated member of staff will need their desktop equipment reconnected and tested at the new desk within one working day of their move. The programme office will supply the move schedule one week in advance. Please note that 30 of the staff use specialist accessibility equipment, which must be reconnected by a trained analyst. Network points in Building A have been tested, but floor 3 has six points still awaiting repair; staff allocated to those desks will need temporary Wi-Fi access until repairs are complete.

**Question 6 (easy) — Detail retrieval**

How many of the relocating staff use specialist accessibility equipment?

- A) 6
- B) 30
- C) 120
- D) The email does not say

**Correct answer: B**

**Explanation:** The email states directly: "30 of the staff use specialist accessibility equipment". Option A (6) is the number of faulty network points on floor 3 — a different fact from a nearby sentence, exactly how detail questions try to catch a skimming reader. Option C is the total number of relocating staff. This tests going back to the exact sentence rather than trusting memory when several numbers sit close together — the same habit that prevents mis-logged asset counts.

**Question 7 (moderate) — True, False, or Cannot say**

Statement: "All network points in Building A are working."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The email says network points in Building A "have been tested, but floor 3 has six points still awaiting repair" — points awaiting repair are, by clear implication, not currently working. The statement claims *all* points are working, contradicted by the passage. This tests slowing down at the qualification after "but", which is often the part of a workplace email that creates the actual work.

**Question 8 (hard) — Best summary for action**

A summary of the email's IT actions is needed for a team huddle, in one sentence. Which is best?

- A) "Facilities are moving some people and we should keep an eye on it."
- B) "120 staff move from Building C to A over weeks 12–13; we reconnect and test each desk within one working day of each move, trained analysts must handle 30 accessibility setups, and six floor-3 desks need temporary Wi-Fi until their points are repaired."
- C) "There are network problems in Building A so the move will probably be delayed."
- D) "We need to reconnect 120 desks in week 12."

**Correct answer: B**

**Explanation:** A good operational summary preserves every fact a team must act on, and nothing else. Option B keeps all five action-bearing facts: the volume, the window, the SLA, the accessibility constraint, and the Wi-Fi workaround. Option A is too vague to plan from. Option C invents a delay the email never mentions. Option D drops the second week, the accessibility requirement and the Wi-Fi workaround. This tests summarising — a core analyst skill, since ticket notes and handovers are summaries, and the test of a good one is that a colleague could act on it without reading the original.

For Questions 9 to 11, the candidate reads this passage.

> **Extract from the departmental IT policy**
> Users must not install unapproved software on departmental devices. Requests for new software must be submitted through the service catalogue and are assessed for security, licensing and cost. The assessment normally takes up to ten working days. Where software is needed urgently to meet a legal deadline, a director may sponsor an expedited assessment, which takes up to three working days. Approved software is added to the catalogue so that future requests can be fulfilled without a new assessment.

**Question 9 (moderate) — True, False, or Cannot say**

Statement: "A user who needs new software urgently for a legal deadline can always have it installed within three working days."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** An expedited assessment requires a director's sponsorship — not every urgent user will have that — and takes up to three working days for the *assessment*, which may still end in rejection, and says nothing about installation time after approval. The statement's "always... installed within three working days" is contradicted twice. This tests reading a process for what each stage actually delivers, so that a candidate sets user expectations about the process, not the outcome.

**Question 10 (moderate) — Purpose of a provision**

According to the passage, why is approved software added to the catalogue?

- A) So that future requests can be fulfilled without a new assessment
- B) To increase the department's software budget
- C) To make sure directors approve every installation
- D) The passage does not say

**Correct answer: A**

**Explanation:** The final sentence states the purpose explicitly. Options B and C are not in the passage at all, and C actually reverses the policy's logic, since the catalogue route exists so most requests need no senior involvement. This tests looking for purpose connectives ("so that") when a question asks "why" — and, a strong candidate's answer notes, understanding why a process step exists makes an analyst better at explaining it to an impatient user.

**Question 11 (hard) — Clear-writing judgement**

A user's software request was rejected on licensing grounds and needs an update. Which message is the clearest and most appropriate?

- A) "Per policy, your request has been declined pursuant to licensing assessment outcomes. Refer to the catalogue documentation."
- B) "Your software request was not approved. The licensing review found the product's licence doesn't permit use on departmental devices. You can ask us to look for an approved alternative in the catalogue — reply to this ticket and I'll help."
- C) "Request rejected."
- D) "Unfortunately the powers that be have said no to your software, sorry! Nothing I can do."

**Correct answer: B**

**Explanation:** Judge each message against three tests: is it accurate, is it plain, and does it help the user take a next step? Option B passes all three. Option A is accurate but wrapped in officialese. Option C is accurate but so bare it will generate a follow-up call. Option D is friendly but unprofessional, vague about the reason, and wrongly closes the door when an alternative route exists. This tests whether the candidate produces the answer that serves the reader, which is what "tailor communication to stakeholders' needs" means in practice.

**Question 12 (hard) — Combining two short texts**

Text 1, from the SLA: "Priority 3 incidents will be resolved within two working days." Text 2, from a team briefing: "From Monday, all incidents affecting the payments team are to be logged as Priority 2 while the year-end payment run is in progress." A payments team user reports a broken monitor on Tuesday, during the payment run. Based only on the two texts, which statement is true?

- A) The incident should be logged as Priority 3 because a monitor is minor
- B) The incident should be logged as Priority 2, so the two-working-day P3 target does not apply to it
- C) The incident cannot be logged until the payment run finishes
- D) The two texts contradict each other, so neither applies

**Correct answer: B**

**Explanation:** Text 2 creates a temporary rule: during the payment run, *all* incidents affecting the payments team are logged as Priority 2, no exception for seemingly minor items. So the monitor incident is P2, and the P3 target in Text 1 is simply not the applicable clause. Option A applies an instinct instead of the stated rule. Option C invents a restriction neither text contains. Option D miscalls a contradiction: the texts operate at different levels (a standing SLA and a temporary override) and fit together without conflict. This tests reading multiple documents and working out which rule governs the case in front of the candidate — daily life on a service desk around freezes and special business periods.

### Administration tips

- **Score for whether a candidate distinguishes "supported", "contradicted", and "not stated"** rather than defaulting to True or False when Cannot Say is correct.
- **Watch for whether a candidate answers from the passage** rather than from outside knowledge of how services usually work.
- **Note whether a candidate spots exceptions and conditions** attached to a general rule.
- **Note whether a summary a candidate produces adds a conclusion the source did not state.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer marked True or False for something the passage merely makes plausible.**
- **Missing an exception or condition** attached to a rule that changes the correct answer.
- **Accepting a stronger verb than the passage used** — "queued" read as "resolved", "assessed" read as "approved".
- **Missing when a candidate lets an absolute ("always", "never") slip past a qualified statement.**
- **Rewarding a summary that adds a conclusion, prediction, or judgement the source did not state.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge possible responses. Common formats include choosing the most effective response, choosing the least effective response, ranking all the responses from best to worst, or rating each response on a scale from "counterproductive" to "highly effective". The scenarios for this role are drawn from service desk life: an upset user, a ticket about to breach, a security worry, a colleague who needs help, a mistake, a procedure that does not quite fit the situation.

The typical format is an online test of 15 to 30 scenarios, often untimed or generously timed, because it measures judgement rather than speed. There is usually no single "trick" answer: several responses may be reasonable, and scoring reflects how closely a candidate's judgements match those of experienced practitioners and the organisation's professional behaviours — user focus, ownership, collaboration, honesty when things go wrong, appropriate escalation, and inclusion.

This role's judgement half — how a candidate treats users, when they escalate, how they behave under pressure, whether they own a problem to the end — is what actually determines the user's experience of the service desk. The role summary is full of judgement words: work independently, share information, assist others, own an issue until it is resolved or has a new owner, escalate "when appropriate".

### How this assessment maps to the role

- **User-focused choices** map to the **User focus** skill and the desk's core purpose of frontline support.
- **Ownership choices** map to the **Ownership and topic** skill: owning an issue until a new owner has been found or the problem has been mitigated or resolved.
- **Escalation choices** map to the duty to resolve problems "or, when appropriate, escalate or route them to IT resolver groups".
- **Collaboration choices** map to the duty to **work independently, share information and assist others with requests for service**, and to the **Stakeholder relationship management (IT operations)** skill.
- **Process and improvement choices** map to the **Business analysis (IT operations)** skill and the duties to develop checklists and recommend prevention controls.
- **Integrity and security choices** map to the **Asset and configuration management** skill and to professional honesty.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The frustrated user**

A user calls the desk. Their laptop crashed and they lost an hour's work on a report due this afternoon. They are audibly upset and say, "Your systems are useless." What is the most effective first response?

- A) Explain that crashes are usually caused by users running too many applications
- B) Acknowledge their frustration, reassure them help is starting now, and begin diagnosing while confirming the report deadline so the urgency is understood
- C) Ask them to log a ticket through the portal so it can be prioritised properly
- D) Apologise repeatedly for several minutes before beginning any technical questions

**Correct answer: B**

**Explanation:** The strongest response does two things at once: it treats the person and it starts on the problem. Acknowledging frustration costs seconds and defuses the emotion; confirming the deadline shows user focus and helps judge urgency honestly. Option A opens by blaming the user. Option C hides behind process when the analyst could log the ticket directly. Option D delays help. This tests user focus and ownership together — the user's experience of "the useless system" is now the analyst's to repair.

**Question 2 (easy) — A ticket that cannot be solved**

25 minutes have been spent on a software fault never seen before. The knowledge base has nothing, and the usual checks have not helped. The ticket's SLA allows four hours and one hour has passed. What is the most effective next step?

- A) Keep trying alone for the rest of the SLA period — asking for help looks weak
- B) Close the ticket and advise the user to restart their machine and log it again if it recurs
- C) Briefly summarise what has been tried, then ask an experienced colleague or route the ticket to the right resolver group with the findings attached
- D) Tell the user it is a known issue with no fix so they stop expecting a resolution

**Correct answer: C**

**Explanation:** Escalation "when appropriate" is a named part of the role, and this is what appropriate looks like: reasonable first-line checks done, documented, with plenty of SLA time left for the next person to succeed. Attaching findings saves the resolver group repeating the work and shows ownership rather than offloading. Option A confuses persistence with professionalism and risks a breach. Option B is a disguised abandonment. Option D is dishonest. This tests ownership, honesty, and collaborative escalation.

**Question 3 (easy) — The colleague who is drowning**

It is a busy Monday. One analyst's own queue is under control, but a newer colleague has twice as many open tickets as anyone else and looks stressed. What is the most effective action?

- A) Say nothing — their queue is their responsibility, and helping might embarrass them
- B) Offer to take a few of their tickets, and quietly let the team leader know the workload split may need adjusting
- C) Tell the team group chat that the colleague is behind and someone should help
- D) Take over their whole queue so they can watch how it is done

**Correct answer: B**

**Explanation:** The role description states explicitly: work independently, *share information and assist others*. Option B does both halves well: practical help now, plus a discreet flag to the person who can rebalance workload properly. Option A rationalises inaction. Option C helps publicly, in a way that embarrasses the colleague. Option D undermines the colleague's development and the helper's own SLAs. This tests collaboration and inclusion — supporting a colleague in a way they can accept with dignity.

**Question 4 (moderate) — A mistake made**

While clearing old records in the asset register, an analyst realises they yesterday marked the wrong laptop as "disposed" — the record deleted belonged to a device still in use by a member of staff. Nobody has noticed. What is the most effective action?

- A) Say nothing; it will probably never matter, and it can be quietly fixed if someone asks
- B) Correct the record immediately, tell the team leader what happened, and check whether the same slip occurred on any other records from that session
- C) Correct the record quietly and move on — informing anyone would just create fuss
- D) Report that the register "has some errors" without mentioning personal involvement

**Correct answer: B**

**Explanation:** Three steps make this the model answer: fix the error, own it openly, and check the blast radius. The asset and configuration management skill is about tracking, logging and *correcting* information to protect assets — an inaccurate register has real consequences. Telling the team leader matters because errors in shared data can propagate, and a desk where people admit slips quickly is a desk that catches them cheaply. Option A gambles on luck; option C fixes the instance but hides the risk pattern; option D is vague enough to be useless and evasive enough to damage trust if traced. This tests honesty, ownership, and proactive error checking.

**Question 5 (moderate) — Pressure to skip identity verification**

A caller says they are a senior manager locked out of their account before an important meeting. They are in a hurry, cannot remember the answers to the verification questions, and say, "Just unlock it — you can hear it's me, and I'll take responsibility." What is the most effective response?

- A) Unlock the account — a senior manager has accepted the responsibility
- B) Refuse abruptly and end the call, since the caller failed verification
- C) Politely explain identity must be verified for every account without exception, offer the alternative verification routes the procedure allows, and if none succeed, follow the failed-verification procedure while helping find another way into the meeting
- D) Unlock the account but email the manager afterwards asking them to confirm it was really them

**Correct answer: C**

**Explanation:** Identity verification exists precisely for this moment: urgency plus seniority plus charm is exactly how social-engineering attacks work. Option C holds the line without hostility, exhausts legitimate alternatives, and shows user focus by helping with the real underlying need. Option A transfers a risk the caller has no right to accept on the organisation's behalf. Option D unlocks first and verifies after — verification theatre. Option B follows the rule but fails the person. This tests integrity under pressure, protecting assets, and courteous firmness.

**Question 6 (moderate) — The recurring fault**

For the third time this month, the same user's application crash has been fixed with the same workaround from the knowledge base, taking 20 minutes each time. What is the most effective action after this third fix?

- A) Keep applying the workaround whenever it recurs — it works, and that is what the knowledge base says to do
- B) Tell the user to stop using the application feature that triggers the crash
- C) Log or update a problem record noting the recurrence pattern, attach the three incident references, and suggest the resolver group investigate the root cause; keep the workaround available meanwhile
- D) Attempt to fix the application's code directly, given the familiarity with the fault by now

**Correct answer: C**

**Explanation:** This scenario tests whether a candidate lifts their eyes from incidents to problems. Three identical incidents for one user in a month is a pattern, the raw material of the root cause analysis duty and the business analysis skill. Option C creates the record that makes the pattern visible, evidences it with ticket references, proposes the next step without overstepping, and keeps the user working meanwhile. Option A treats a chronic problem as an endless series of acute ones. Option B makes the user absorb a fault that is not theirs. Option D exceeds access, role, and change control. This tests ownership beyond the single ticket and proactive problem prevention.

**Question 7 (moderate) — Competing demands at the deadline**

At 15:45, working a Priority 2 ticket due to breach at 16:30 — a caseworker's system is down — a team leader messages: "Can you cover the phones for 30 minutes? Two analysts have gone home sick." Answering phones would mean pausing the P2 work. What is the most effective response?

- A) Silently ignore the message and keep working the P2 until it is resolved
- B) Reply immediately: explain the P2 is due to breach at 16:30, and ask whether the team leader wants it handed over, finished first, or the phones covered anyway — so the decision is made with the full picture
- C) Abandon the P2 and cover the phones — the team leader outranks the SLA
- D) Cover the phones and try to work the P2 between calls without telling anyone about the clash

**Correct answer: B**

**Explanation:** The core skill is surfacing a conflict rather than resolving it silently and wrongly. The team leader made a reasonable request without knowing about the near-breach P2; option B gives them that fact in one message and offers workable choices. It also respects the chain of accountability: the team leader is best placed to trade one risk against another once informed. Option A leaves the phones — and the team leader — in the dark. Option C swaps a known, imminent user impact for phone cover without even mentioning the clash. Option D guarantees both tasks are done badly and hides the situation. This tests transparent communication, prioritisation, and constructive escalation of conflicts.

**Question 8 (moderate) — The user who found their own workaround**

A user proudly reports solving their file-access problem by using a personal cloud storage account to move departmental documents between computers. The documents include citizens' personal information. What is the most effective response?

- A) Thank them for their initiative and close the ticket, since the problem is solved
- B) Explain calmly that personal cloud storage cannot be used for departmental data — especially citizens' information — help remove the files from the personal account, restore a proper access route, and report the data-handling incident through the required channel
- C) Report them to their line manager for a security breach without discussing it with them
- D) Advise them to keep using the workaround but delete the files afterwards each time

**Correct answer: B**

**Explanation:** This scenario braids three duties: user focus, data protection, and honest process. The user acted in good faith to stay productive, so the tone stays calm and blame-free — but citizens' personal data on a personal cloud account is a reportable data-handling incident. Option B fixes the underlying access problem, remediates the exposure, and makes the required report. Option A rewards a serious breach because the symptom disappeared. Option C escalates punitively before helping, teaching users to hide workarounds. Option D institutionalises the breach. This tests protecting information assets, following mandatory reporting, and maintaining the relationship while correcting the behaviour.

**Question 9 (hard) — Least effective: the major incident rumour**

Multiple tickets are arriving about the case management system running slowly; the infrastructure team is reportedly "looking at something". A press office colleague calls directly and asks, "Is the case system down? I need to know what to tell people." Which response is the LEAST effective?

- A) State what is factually known: multiple slowness reports are logged, investigation is under way, and route the query to the incident communications lead for an authoritative statement
- B) Explain not being the right source for external statements, and warmly hand off to the incident manager or communications lead
- C) Speculate helpfully: "It looks like the servers are overloaded again, probably the same crash as last month — I'd say it'll be down all afternoon"
- D) Take contact details, check the incident record for the approved status summary, and call back within ten minutes with that wording

**Correct answer: C**

**Explanation:** This is a least-effective format, and it is C. Speculation from a frontline analyst, delivered to someone whose job is to repeat statements externally, can become the department's public position within the hour — guesses dressed as facts, and wrong guesses about government services erode public trust. Options A, B and D are all defensible, differing only in style, and each sticks to known facts or routes the query to the accountable channel. This tests eliminating responses that are honest, bounded, and correctly routed — what remains involves speculation, overreach, or secrecy — protecting accurate information sharing and correct routing of incident communication.

**Question 10 (hard) — The accessibility request that is "not standard"**

A new starter with a visual impairment contacts the desk: the screen reader they rely on is not in the software catalogue, and their manager's request was auto-rejected as "non-standard software". They start their casework duties in three days. What is the most effective action?

- A) Explain that only catalogue software can be installed, and suggest managing without it until the catalogue is updated at the next quarterly review
- B) Treat it as a priority: own the ticket, contact the software assessment team directly to explain the accessibility need and the three-day deadline, invoke the organisation's expedited or workplace-adjustment route if one exists, and keep the user and their manager informed daily
- C) Install the software from the vendor's website directly, since accessibility is important enough to justify skipping assessment
- D) Advise the user to raise a complaint with HR, since accessibility is not an IT matter

**Correct answer: B**

**Explanation:** Accessibility needs are not "nice to have" requests: a screen reader is the difference between a colleague being able to do their job and not, and UK public sector organisations carry legal duties to make workplace adjustments. Option B owns the ticket, takes the case *to* the assessment process rather than leaving the user stuck behind an auto-rejection, uses the legitimate fast route, and communicates proactively. Option A treats a process artefact as more important than a person's ability to work. Option C skips assessment, which may itself pose security risks and sets a precedent that undermines the control. Option D wrongly bounces an IT-deliverable adjustment out of IT. This tests inclusion, ownership, urgency calibrated to human impact, and working through governance rather than around it.

**Question 11 (hard) — The tempting SLA shortcut**

On the last day of the month, a team leader mentions the desk is at 94.8% SLA achievement against a 95% target, and says, half-joking, "If a couple of those open tickets got closed today, we'd make it." Two open tickets are genuinely unresolved: the users are waiting on parts due next week. A colleague suggests closing them now and reopening them as "new" tickets tomorrow. What is the most effective response?

- A) Close and reopen the tickets as suggested — the target will be met and the users are no worse off
- B) Decline, and quietly leave the tickets as they are without comment
- C) Decline the close-and-reopen suggestion, keep the tickets honestly open with a clear "awaiting parts" status, and suggest the report note the two tickets pending parts — so the 94.8% is explained rather than massaged
- D) Ask the users to confirm their issues are "temporarily resolved" so the closures are technically justified

**Correct answer: C**

**Explanation:** This scenario tests integrity in reporting — the foundation of the IT service reporting skill, because a report only has value if the data underneath it is honest. Close-and-reopen laundering makes this month look better by making the data false and next month's data worse. Option C refuses the fix but converts the shortfall into information a stakeholder can act on — using evidence to explain outcomes is exactly what the stakeholder relationship management skill describes. Option B protects the candidate's own integrity but ducks the conversation. Option D manipulates the users into providing cover. Option A trades honesty for 0.2 of a percentage point. This tests integrity, transparent reporting, and constructive challenge upward.

**Question 12 (hard) — Ranking responses: the quiet handover risk**

An analyst is going on leave for two weeks from tomorrow evening, owning one complex ticket: an intermittent fault affecting a small team, with a resolver group engaged, a test planned for next week, and a user group anxious for updates. Rank these actions from most to least effective:

1. Write a full handover note in the ticket (history, current hypothesis, next steps, stakeholder expectations) and agree with a named colleague that they will own it, introducing them to the user contact.
2. Set an out-of-office message directing people to the service desk, and leave the ticket in the queue.
3. Mention the ticket verbally to a colleague at the end of the last working day and assume they will pick it up.
4. Update the ticket with a note saying the analyst is on leave and the next update will come in two weeks.

- A) 1, 3, 2, 4
- B) 1, 2, 3, 4
- C) 3, 1, 4, 2
- D) 1, 4, 2, 3

**Correct answer: A**

**Explanation:** The ownership and topic skill defines the standard exactly: own an issue *until a new owner has been found*. Action 1 is the complete version — documented context, a named and willing new owner, and a warm introduction to the stakeholders — so it ranks first. Action 3 (verbal mention) is flawed but at least attempts a transfer of ownership to a person. Action 2 transfers nothing to anyone, though the out-of-office at least tells people where to go. Action 4 is worst: it actively tells an anxious user group that a live, intermittent fault will receive no attention for two weeks, freezing the ticket rather than handing it over. This tests ownership through transitions, communication that serves the user, and planning ahead.

### Administration tips

- **Score for whether a candidate's answer pairs action with communication** — fix and inform, decline and offer an alternative, help now and flag the pattern.
- **In least-effective items, watch for whether a candidate identifies the response that hides information, speculates, blames, breaks a security rule, or abandons ownership.**
- **Note whether a candidate escalates everything, or nothing** — both patterns should be flagged.
- **Note whether a candidate's response holds a security or data rule under sympathetic pressure**, or bends it for urgency, seniority, or kindness.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding the technically fastest option over the humanly right one.**
- **Missing when a candidate escalates everything, or nothing**, rather than doing reasonable first-line work and escalating with findings attached.
- **Crediting an answer built on silence, delay, or vagueness about a problem or a mistake.**
- **Rewarding an answer that bends a security or data rule for a sympathetic reason.**
- **Missing when a candidate's answer punishes a colleague or user publicly** rather than correcting the behaviour and protecting the relationship.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an IT service analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested reasoning with the real materials of the job: spotting ticket clusters, applying escalation rules exactly as written, checking asset records field by field, sequencing a busy morning, and reasoning from an incident timeline to a likely root cause. The numeric section tested the numbers that run through every desk: SLA percentages, daily averages, first-time fix rates, breach deadlines, stock ratios, and the honest arithmetic behind a prevention recommendation. The verbal section tested the documents an analyst handles daily — procedures, policies, and stakeholder emails — and the discipline of saying "the text supports this", "the text contradicts this", or "the text does not say". The situational judgement section tested the moments that define a good analyst: the upset user, the mistake owned up to, the security rule held under pressure, the pattern raised as a problem, and the ticket handed over properly before leave.

The thread running through all four sections is careful attention, honest reasoning, and genuine care for the user. These are the working habits described in the role summary — problem solving, root cause analysis, ownership, service focus, and clear communication with stakeholders — expressed one question at a time.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and treat users well under pressure — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
