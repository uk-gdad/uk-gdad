# End User Computing Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for end user computing engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the materials an end user computing engineer genuinely handles — incident tickets, asset registers, change requests, test scripts, KPI reports, and knowledge articles — and the decisions genuinely made, such as diagnosing a fault at a user's desk, deciding whether to resolve or escalate, applying change control procedures, and keeping customers informed while working.

This role works on-site, maintaining hardware and fixing technical problems as quickly as possible, valued for first-time resolution — troubleshooting and diagnosing faults, or escalating them cleanly to service desk managers, incident managers and problem managers when investigation needs to go deeper. That work rests on a compact set of mental skills: recognising patterns across incidents, reasoning logically through symptoms and causes, checking records and configurations for errors, prioritising a busy queue, working accurately with service data, reading procedures and messages precisely, and making sound judgement calls about users, colleagues, and process. The role also coaches associates and shares knowledge with team colleagues — explaining reasoning clearly enough that someone else can follow it.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for the role, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of shape sequences and number grids, it presents the everyday materials of desk-side support — ticket queues, asset registers, configuration records, escalation rules, diagnostic evidence — and asks the candidate to reason about them quickly and accurately.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, and many platforms adapt difficulty; employers typically receive speed and accuracy separately.

Cognitive assessment is particularly relevant for this role because diagnosis is structured thinking under time pressure. First-time resolution depends on generating hypotheses from symptoms, testing them in a sensible order, and knowing when the evidence says "escalate." Off the tools, maintaining secure configuration and accurate asset information means spotting inconsistencies in records; applying change control procedures means following conditional rules exactly; coaching associates means being able to articulate why a diagnostic step comes next.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill.
- **Logical deduction** maps to the **Incident management** and **Technical specialism** skills.
- **Error checking** maps to the **Asset and configuration management** skill.
- **Prioritisation** maps to the **Ownership and topic** skill.
- **Applied problem solving** maps to the **Change management** and **Testing** skills.
- **Structured thinking** overall maps to **Service management framework knowledge**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across incident tickets**

Monday's queue contains: 08:55 — Building C, floor 1: "Desktop shows no network connection"; 09:10 — Building C, floor 1: "Cannot reach shared drive"; 09:14 — Building A, floor 3: "Mouse not working"; 09:22 — Building C, floor 1: "Email stuck in outbox"; 09:40 — Building C, floor 2: "Printer offline." Which grouping most deserves investigation as a single underlying issue?

- A) Tickets 1, 2 and 4 — same location, all symptoms consistent with loss of network connectivity
- B) Tickets 3 and 5 — both involve hardware peripherals
- C) Tickets 1, 2, 4 and 5 — all in Building C
- D) All five tickets — they arrived within an hour

**Correct answer: A**

**Explanation:** Tickets 1, 2 and 4 share a floor and half-hour window, and all three symptoms are downstream effects of one plausible cause — a network fault on that floor. Ticket 5 shares a building but a different floor and a symptom with many unrelated causes. Option B groups by superficial category with no shared cause. Options C and D over-group by building or time alone, diluting an investigation with noise. This tests grouping incidents by plausible common cause rather than superficial resemblance — exactly how repeat issues get identified for escalation to problem managers.

**Question 2 (easy) — Logical deduction from a diagnostic test**

A user's laptop cannot connect to Wi-Fi at their desk. A colleague's laptop, signed in at the same desk, connects perfectly. The user's laptop is then taken to another floor: it still cannot connect. Which conclusion is best supported?

- A) The desk's Wi-Fi coverage is faulty.
- B) The user's account is misconfigured.
- C) The fault most likely lies with the user's laptop itself.
- D) The building's wireless network is failing.

**Correct answer: C**

**Explanation:** The first test clears the desk location and largely clears the account, since a different device and login succeed there. The second test clears the location again and shows the fault travels with the device. The user's laptop is the one element present in every failure and absent from every success. Option D is contradicted by the colleague's successful connection. This tests isolation testing — asking of each hypothesis whether it is present in all failures and absent in all successes, the engine of first-time resolution.

**Question 3 (easy) — Error checking an asset register**

Policy: every laptop record must show status ("In use", "In store", or "Retired"), a location, and — only when status is "In use" — an assigned user. An extract reads:

| Asset | Status | Location | Assigned user |
|---|---|---|---|
| LT-2201 | In use | Building A | R. Singh |
| LT-2202 | In store | IT store | T. Nowak |
| LT-2203 | Retired | Disposal store | — |
| LT-2204 | In use | Building B | — |

Which rows breach the policy?

- A) Rows 2 and 3
- B) Rows 2 and 4
- C) Rows 3 and 4
- D) Row 4 only

**Correct answer: B**

**Explanation:** Row 2 is "In store" but carries an assigned user — a phantom assignment. Row 4 is "In use" with no assigned user — an orphaned device that cannot be reliably audited, recalled, or patched. Row 1 and row 3 both satisfy the conditional rule correctly. This tests checking each row against the rule methodically, and recognising the two most operationally important register errors — the phantom assignment and the orphaned device — as the ones that break the ability to verify the location and state of IT assets.

**Question 4 (moderate) — Prioritisation of a mixed queue**

At 09:30, four items: (1) a P2 incident — a shared printer used by a 40-person casework team is down, statutory output due today; (2) a P3 incident diagnosed yesterday — one user's laptop needs a part; a loan laptop is working well; (3) a scheduled change — install approved software on six machines, change window closes at 17:00; (4) a message from an associate: "Stuck on a ticket — can you look when free? User is waiting at my desk." What is the most defensible order of attention?

- A) 1, 4, 3, 2 — restore the team-wide service, unblock the associate and their waiting user, complete the change in window, then progress the parts order
- B) 2, 1, 3, 4 — finish what was started yesterday first
- C) 1, 3, 4, 2 — incidents, then changes, then coaching
- D) 4, 1, 3, 2 — colleagues always come before tickets

**Correct answer: A**

**Explanation:** Item 1 is service-affecting with a statutory deadline, clearly first. Item 4 comes next — an associate is blocked and a user is physically waiting, and coaching associates is a named duty, not an optional extra. Item 3 has seven hours of slack. Item 2 is stable, since the user is working on a loan device. Option B confuses personal completion with priority. Option C applies rigid category ordering rather than judging the actual situations. Option D inverts the same error. This tests treating an associate's request as an operational item with real users behind it.

**Question 5 (moderate) — Deduction from change control rules**

The change procedure states: (i) standard changes (pre-approved, documented, low risk) may be implemented by any engineer; (ii) normal changes require approval at the weekly change board before implementation; (iii) emergency changes may be implemented immediately but must be retrospectively reviewed at the next board; (iv) any change touching the identity system is never a standard change. On Tuesday (the board meets Thursday), a documented, low-risk configuration update to the identity system is needed to fix a fault currently locking out a 60-person team. What does the procedure require?

- A) Implement it now as a standard change — it is documented and low risk.
- B) Wait for Thursday's board, then implement it as a normal change.
- C) Implement it now as an emergency change and take it to Thursday's board for retrospective review.
- D) The procedure does not permit this change at all.

**Correct answer: C**

**Explanation:** Rule (iv) removes the standard-change route regardless of how documented and low-risk the change is. A 60-person live lockout makes waiting two days for a board (option B) contradict the purpose of the emergency route. Rule (iii) fits exactly: implement immediately, retrospective review Thursday. Option D invents a prohibition the procedure does not contain. This tests recognising that exclusion rules override qualifying descriptions, and that the emergency route is a defined path with its own obligation — the retrospective review — not a loophole.

**Question 6 (moderate) — Error checking a test script execution**

A post-build test script, executed under supervision, says: Step 3: "Confirm disk encryption status shows 'Active'. Record the status shown. If not Active, stop and report — do not proceed to step 4." A checklist for three laptops reads: Laptop 1: step 3 recorded "Active"; steps 4–7 completed. Laptop 2: step 3 recorded "Pending activation"; steps 4–7 completed. Laptop 3: step 3 left blank; steps 4–7 completed. Which laptops were tested in breach of the script?

- A) Laptop 2 only
- B) Laptops 2 and 3
- C) Laptop 3 only
- D) None — all laptops completed every step

**Correct answer: B**

**Explanation:** Laptop 2 recorded a non-"Active" status but proceeded anyway, breaching the stop condition. Laptop 3's step 3 was left blank, breaching the recording duty, and with no recorded status there is no evidence the gate was checked before proceeding. Option D reflects a dangerous mindset — completing every step is not the goal; respecting the gates is. This tests reading stop conditions as hard rules, since an unencrypted laptop reaching a user is a security incident, not a paperwork slip.

**Question 7 (moderate) — Pattern recognition in performance data**

Weekly "laptop will not boot" incident counts: week 1: 3; week 2: 4; week 3: 3; week 4: 4; week 5: 11; week 6: 12. A colleague says the jump is random variation. What is the most reasonable position?

- A) Agree — small numbers always bounce around.
- B) The counts roughly tripled and stayed high for two consecutive weeks — that is a step change, not a bounce, and it warrants investigating what changed around week 5.
- C) Conclude that laptops are wearing out and order replacements.
- D) Wait ten more weeks to be statistically certain.

**Correct answer: B**

**Explanation:** Weeks 1–4 oscillate in a narrow band; weeks 5–6 sit roughly three times higher, sustained rather than a single spike — the shape of a genuine step change, likely tied to a recent update, build, or supplier batch. Option A ignores the shape. Option C leaps to an expensive remedy with no causal evidence. Option D confuses operational judgement with unnecessary statistical ceremony. This tests distinguishing noise from signal by shape and turning incident data into an investigation — exactly the problem management skill.

**Question 8 (moderate) — Applied problem solving at the desk**

A user reports their docking station "stopped working — no monitors, no keyboard." Observations: laptop battery charging when docked; both external monitors dead; USB keyboard dead; the same dock powers a colleague's laptop with full function. What is the most efficient next diagnostic step?

- A) Replace the docking station.
- B) Reinstall the laptop's operating system.
- C) Check and update the dock-related drivers and settings on the user's laptop, since power passes through the dock but data functions fail only for this laptop.
- D) Test each monitor on a different machine individually.

**Correct answer: C**

**Explanation:** The dock delivers power to this laptop and everything to the colleague's laptop, exonerating the dock itself. The failure is specific to this laptop's data connection through the dock — pointing at drivers, firmware negotiation, or port settings. Option A replaces hardware the evidence just exonerated. Option D retests peripherals that worked moments ago. Option B is a costly sledgehammer where a targeted step suffices. This tests listing what observations have already ruled out before choosing a next step — the discipline behind first-time resolution.

**Question 9 (challenging) — Multi-constraint scheduling**

Four tasks: (i) a 2-hour laptop build that must finish before the courier collection at 15:00; (ii) a 1-hour change implementation whose approved window is 12:00–14:00 only; (iii) a 30-minute desk-side fix for a director, who is only available 09:00–10:00; (iv) a 1-hour stint covering the walk-up desk, movable but must happen today. Starting at 09:00, finishing at 17:00, tasks cannot overlap. Which plan works?

- A) 09:00 director fix; 09:30 build; 11:30 desk cover; 12:30 change; finished by 13:30.
- B) 09:00 build; 11:00 director fix; 12:00 change; 13:00 desk cover.
- C) 09:00 desk cover; 10:00 director fix; 10:30 build; 12:30 change.
- D) 09:00 director fix; 09:30 change; 10:30 build; 12:30 desk cover.

**Correct answer: A**

**Explanation:** Plan A satisfies every constraint: director fix inside 09:00–10:00, build finishing well before 15:00, desk cover flexible, change inside 12:00–14:00. Plan B misses the director's availability window. Plan C pushes the director fix to 10:00, past availability. Plan D schedules the change at 09:30, outside its approved window — a change control breach. This tests anchoring on the narrowest windows first, then flowing flexible tasks around them.

**Question 10 (challenging) — Deduction with a misleading correlation**

After a printer driver update is deployed on Monday, "cannot print" tickets triple on Tuesday. A manager concludes: "The update broke printing — roll it back." Checking the evidence: the update went only to Building A, but Tuesday's tickets come almost equally from Buildings A, B and C; the print server also had an outage Tuesday morning affecting all buildings. What does the evidence best support?

- A) The manager is right — the timing proves the update caused the tickets.
- B) The building distribution undermines the update hypothesis: an update deployed only to Building A cannot explain tickets in B and C, while the all-building print server outage fits the pattern; the outage is the stronger explanation.
- C) Both the update and the outage caused equal numbers of tickets.
- D) The tickets are unrelated to either event.

**Correct answer: B**

**Explanation:** If the update caused the tickets, effects should concentrate in Building A, but tickets are spread across three buildings, two of which never received the update — while the server outage's footprint matches the distribution exactly. Option A commits the classic post hoc error. Option C invents an even split no data supports. This tests asking which candidate cause's footprint matches the symptom's footprint — where did it happen, not just when — the fastest route to root cause and the difference between evidence-led escalation and noisy guessing.

**Question 11 (challenging) — Prioritising evidence for an escalation**

Escalating a recurring fault to the problem manager: over three weeks, 14 users have reported intermittent audio failures in video calls, all on the same laptop model, mostly after resume from sleep, and a vendor forum thread describes an identical fault fixed by a firmware update. Only four items may be included in the escalation summary. Which set serves the investigation best?

- A) The 14 ticket references; the affected model; the "after resume from sleep" trigger pattern; the vendor firmware lead.
- B) A personal theory; the angriest user's complaint verbatim; the model; a request for urgent action.
- C) The 14 ticket references; the dates of each ticket; the names of each user; the buildings involved.
- D) The model; the vendor firmware lead; a note that users are frustrated; availability for a call.

**Correct answer: A**

**Explanation:** Option A carries the evidence base, the scope boundary, the reproducible trigger, and a candidate remedy — everything needed to reproduce the reasoning and act. Option B leads with opinion and emotion. Option C is evidence-rich but insight-poor, burying the signal in administrative detail. Option D omits the trigger pattern entirely. This tests the craft of curation — passing upward the smallest set of facts from which the whole picture can be rebuilt.

**Question 12 (challenging) — Coaching an associate's reasoning**

An associate's diagnosis: "User's laptop is slow. I checked and the disk is 95% full, so that's the cause. I'll delete temporary files and close the ticket." The ticket says the slowness began "suddenly, yesterday, especially in video calls." What is the best coaching response?

- A) Approve the plan — the associate found a genuine issue and needs the confidence.
- B) Take over the ticket and diagnose it properly while the associate watches.
- C) Ask the associate two questions — "does a 95% disk fit a sudden onset?" and "what else changed yesterday, and why would video calls be worst?" — then let them revise their own diagnosis with support.
- D) Tell the associate the diagnosis is wrong and to go and find the real cause.

**Correct answer: C**

**Explanation:** The disk finding is real but fits poorly with sudden onset and a symptom that singles out video calls, pointing instead toward something network-, driver- or update-related from yesterday. Option C hands the associate the exact tests their reasoning skipped, so the revised diagnosis is theirs. Option A trades the user's outcome for comfort. Option B teaches only spectating. Option D gives a verdict without a method. This tests transferring reasoning rather than just the answer — coaching that builds capability rather than dependence, checking that a diagnosis explains the onset, the pattern, and the timing.

### Administration tips

- **Watch for whether a candidate groups incidents by plausible common cause** rather than superficial resemblance.
- **Score isolation-testing logic explicitly**: is a hypothesis present in every failure and absent from every success?
- **Note whether a candidate reads exclusion rules and stop conditions as absolute**, not negotiable given urgency.
- **Keep timing consistent** across candidates for this level.
- **Use the coaching item (Question 12) to observe whether a candidate transfers reasoning rather than simply correcting an answer.**

### Common pitfalls to watch for when scoring

- **Rewarding grouping by resemblance** rather than shared cause.
- **Crediting timing-only correlation** without checking distribution or footprint.
- **Accepting an answer that treats a stop condition or gate as optional under pressure.**
- **Rewarding the biggest intervention** (replace, reinstall, roll back) over the smallest step that discriminates between hypotheses.
- **Missing when a candidate sequences by preference** ("finish what I started") rather than by actual impact and urgency.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely produces: ticket volumes, SLA percentages, resolution times, asset counts, stock levels, and KPI trends. Each question presents a small table, chart, or described dataset and asks for a calculation or interpretation a working engineer would actually need.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions. A calculator and rough paper are normally allowed; the test measures whether the right numbers and operation are chosen and the result sense-checked.

Numeric fluency runs through the whole role. IT service reporting means calculating closure rates and knowing when an average misleads. Incident work involves SLA clocks that pause and resume. Asset and configuration management involves counts and reconciliations. User focus has a numeric edge: reading numbers about waiting times and affected populations fairly.

### How this assessment maps to the role

- **Percentages and rates** map to the **IT service reporting** skill.
- **Reading tables and charts** maps to **IT service reporting** and **Problem management** together.
- **Counts and reconciliation** map to the **Asset and configuration management** skill.
- **Time and rate calculations** map to the **Incident management** skill and SLA duties.
- **Averages and distributions** map to the **User focus** skill.
- **Simple forecasting** maps to **Technical specialism** duties.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — SLA attainment percentage**

This week 240 incidents were closed, of which 204 were closed within the SLA target. What percentage of closed incidents met the target?

- A) 80%
- B) 82%
- C) 85%
- D) 88%

**Correct answer: C**

**Explanation:** 204 ÷ 240 = 85%. This tests the most common calculation in service reporting, done well enough to verify a report rather than merely repeat it.

**Question 2 (easy) — Reading a category table**

| Category | Closed | Reopened |
|---|---|---|
| Hardware | 62 | 4 |
| Software | 85 | 10 |
| Access | 48 | 1 |
| Network | 25 | 3 |

Which category has the highest reopen rate (reopened as a share of closed)?

- A) Hardware
- B) Software
- C) Access
- D) Network

**Correct answer: D**

**Explanation:** Network's rate (3 ÷ 25 = 12.0%) exceeds Software's (10 ÷ 85 ≈ 11.8%), even though Software has the larger raw count of reopens. This tests recognising that "rate" or "share" always requires a division before comparison — the largest raw count is not automatically the answer.

**Question 3 (easy) — Average resolution time**

Five hardware incidents took 30, 45, 60, 45, and 70 minutes to resolve. What was the mean resolution time?

- A) 45 minutes
- B) 50 minutes
- C) 52 minutes
- D) 55 minutes

**Correct answer: B**

**Explanation:** Mean = 250 ÷ 5 = 50 minutes. This tests the basic mean calculation, and a strong candidate's answer notes that comparing mean (50) with median (45) here shows no extreme outlier is distorting the figure — a quick check worth keeping for reporting work.

**Question 4 (moderate) — Percentage change in demand**

Incident volume rose from 320 in March to 400 in April, then fell to 360 in May. What were the month-on-month percentage changes?

- A) +25% then −10%
- B) +20% then −10%
- C) +25% then −11.1%
- D) +80% then −40%

**Correct answer: A**

**Explanation:** March–April: 80 ÷ 320 = +25%. April–May: −40 ÷ 400 = −10%. Option C wrongly divides by the ending month. This tests always dividing by the starting month for each change, and a strong candidate's answer may note the asymmetry: a +25% rise and a −10% fall do not return volume to its starting point, since the percentages act on different bases.

**Question 5 (moderate) — SLA clock with working hours**

Resolution SLA for P3 incidents is 8 working hours; working hours are 09:00–17:00, Monday to Friday. A P3 incident is logged at 14:00 on Friday. By when must it be resolved?

- A) 22:00 Friday
- B) 12:00 Monday
- C) 14:00 Monday
- D) 17:00 Monday

**Correct answer: C**

**Explanation:** 3 hours consumed by 17:00 Friday, leaving 5 hours from 09:00 Monday, giving 14:00 Monday. This tests tracking hours consumed and hours remaining as two explicit numbers rather than juggling clock times — accurate SLA arithmetic determines what can honestly be promised to a user.

**Question 6 (moderate) — Stock reconciliation**

The asset register showed 45 loan laptops at the start of the month. During the month: 12 were issued to users, 7 were returned, 3 new laptops were added, and 2 were retired. A physical count at month end finds 39 laptops in the store. What does the register predict, and what is the discrepancy?

- A) Register predicts 41; discrepancy of 2
- B) Register predicts 40; discrepancy of 1
- C) Register predicts 39; no discrepancy
- D) Register predicts 43; discrepancy of 4

**Correct answer: A**

**Explanation:** 45 − 12 + 7 + 3 − 2 = 41 predicted, against 39 counted — a discrepancy of 2. This tests correct signs for movements (issues and retirements subtract; returns and additions add), and recognising that a discrepancy means two devices whose location and state cannot be verified — worth investigating and correcting the register, not quietly adjusting the figure to match the shelf.

**Question 7 (moderate) — First-time fix rate with exclusions**

First-time fix (FTF) definition: incidents resolved by the first engineer without reassignment, as a percentage of all incidents closed; incidents reopened within 5 working days are excluded from the numerator but stay in the denominator. Last month: 180 incidents closed; 126 resolved by the first engineer without reassignment; of those 126, 9 were reopened within 5 working days. What is the FTF rate?

- A) 70%
- B) 65%
- C) 75%
- D) 61%

**Correct answer: B**

**Explanation:** Numerator = 126 − 9 = 117; denominator = 180; rate = 117 ÷ 180 = 65%. Option A forgets the exclusion. This tests building the fraction exactly as a KPI definition specifies, since inclusion and exclusion rules can move a headline figure by several points.

**Question 8 (moderate) — Interpreting a utilisation chart**

Walk-up desk visitors by hour: 09:00: 14; 10:00: 9; 11:00: 7; 12:00: 12; 13:00: 15; 14:00: 8; 15:00: 6; 16:00: 5. The desk can serve roughly 10 visitors per hour with one engineer. Which staffing conclusion does the data best support?

- A) Two engineers all day, to be safe.
- B) One engineer all day — the daily average of 9.5 visitors per hour is below capacity.
- C) One engineer for most of the day, with a second engineer covering the 09:00 opening and the 12:00–14:00 lunchtime peak.
- D) Close the desk from 15:00 — demand is too low to justify it.

**Correct answer: C**

**Explanation:** Demand exceeds capacity in three specific hours (09:00, 12:00, 13:00) and sits comfortably below it from 14:00 onward. Option B's average (9.5) smooths away exactly the peaks where queues actually form. Option A over-staffs quiet hours. Option D abandons reduced but real demand. This tests reading distribution rather than a daily average when matching resource to when users actually arrive.

**Question 9 (challenging) — Comparing performance fairly across engineers**

A league table: Engineer A closed 60 tickets averaging 40 minutes; Engineer B closed 45 tickets averaging 65 minutes. A manager concludes B is underperforming. Checking the mix: A's tickets were 80% password resets (target 15 minutes); B's were 70% hardware faults (target 90 minutes). What is the fairest reading?

- A) The manager is right — B is slower and closed fewer tickets.
- B) The raw comparison is invalid: the engineers handled different work mixes, and against category targets B's 65-minute average on mostly 90-minute-target work may actually be strong, while A's figures reflect a queue of quick tasks.
- C) A is underperforming, not B.
- D) Both engineers are performing identically.

**Correct answer: B**

**Explanation:** A's mix mechanically produces low averages and high counts; B's average is well inside its own targets given the harder work mix. This tests recognising that averages are only comparable when the underlying work is comparable, and that comparing each engineer against the targets for their own ticket mix — rather than a single league table — is the fair method, protecting against unfair comparisons that corrode morale.

**Question 10 (challenging) — Consumables run-out and reorder timing**

Laptop batteries are replaced at a steady rate of 6 per week. Stock today: 27 batteries. Supplier lead time: 4 weeks from order to delivery. Orders can only be placed on Mondays (today is Monday, and an order can be placed today). To avoid ever running out, what is the latest Monday an order can be placed, and how many batteries remain when the delivery arrives if ordered then?

- A) Order today; 3 remain at delivery
- B) Order next Monday (week 2); 0 remain — delivery arrives exactly at run-out
- C) Order today; 27 remain at delivery
- D) Order in week 3; 3 remain at delivery

**Correct answer: A**

**Explanation:** Stock runs out mid-week 5 (27 ÷ 6 = 4.5 weeks). Ordering today delivers at the start of week 5, leaving 27 − 24 = 3 batteries just before run-out. Ordering in week 2 delivers at the start of week 6, after stock has already run out mid-week 5. This tests finding the run-out date first, stepping back by the lead time, then respecting the ordering calendar — three constraints applied in order.

**Question 11 (challenging) — Weighted average across sites**

Site 1 closed 150 incidents with 90% inside SLA; Site 2 closed 50 incidents with 70% inside SLA. A colleague averages the percentages: "(90 + 70) ÷ 2 = 80% overall." What is the true combined SLA figure?

- A) 80%
- B) 82%
- C) 85%
- D) 87.5%

**Correct answer: C**

**Explanation:** Site 1's 135 plus Site 2's 35, over 200 total, gives 85%. The simple average treats the sites as equal when Site 1 closed three times as many incidents, deserving three times the weight. This tests always converting percentages to counts before combining unequal groups — an error that always biases toward the smaller group.

**Question 12 (challenging) — Trend and projection with a caveat**

Reopened-incident counts over four months: May 8, June 12, July 18, August 27. What should be expected in September, and how much confidence should be placed in that number?

- A) About 40 — each month has been roughly 1.5 times the previous month, and 27 × 1.5 ≈ 40; but a four-point trend is thin evidence, so treat it as a planning estimate and investigate the cause of the growth rather than just forecasting it.
- B) Exactly 41 — the pattern adds 4, then 6, then 9, so next it adds 14.
- C) About 33 — add the average monthly increase of 6.3 to August's 27.
- D) It cannot be estimated.

**Correct answer: A**

**Explanation:** Checking ratios (12÷8, 18÷12, 27÷18) gives a consistent ×1.5 monthly, supporting a compounding rather than linear model, so option C's straight-line addition undershoots. Option B forces an over-precise pattern the differences don't quite confirm. This tests pairing the right arithmetic with the right humility: four data points support a working estimate, not certainty, and a metric compounding at 50% monthly is a problem to investigate, not just forecast.

### Administration tips

- **Score the four core moves**: percentage, percentage change, weighted combination, mean versus median.
- **Watch for whether a candidate sketches a KPI's fraction** — numerator and denominator, including exclusions — before calculating.
- **Note whether a candidate converts percentages to counts before combining unequal groups.**
- **Keep timing consistent** across candidates for this level.
- **Use the fair-comparison item (Question 9) to observe whether a candidate questions a misleading raw comparison.**

### Common pitfalls to watch for when scoring

- **Rewarding a raw-count comparison** where the question asks for a rate.
- **Accepting a percentage change divided by the wrong (ending) base.**
- **Crediting an average-of-averages** that ignores group sizes.
- **Missing when a candidate lets a daily average obscure a peak** in a capacity question.
- **Accepting a linear projection of a compounding trend**, or vice versa.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material of the kind this role genuinely works with: knowledge articles, change procedures, security policies, handover notes, service announcements, and user emails.

The typical format is an online, timed test of 15 to 25 minutes. The dominant style is True / False / Cannot say. Other styles include best-summary selection, identifying what a message is actually requesting, and judging which of several drafts communicates most clearly. The governing rule: answer from the passage alone.

Reading is a safety-critical activity in desk-side support. A knowledge article's stop condition, a change procedure's exclusion clause, a security policy's "must" versus "should" carry operational force, and misreading them creates incidents rather than resolving them.

### How this assessment maps to the role

- **Comprehension of procedures** maps to the **Change management** and **Testing** skills.
- **True/false/cannot-say discipline** maps to the **Problem management** skill.
- **Extracting the real request** maps to the **User focus** and **Incident management** skills.
- **Reading definitions precisely** maps to **IT service reporting** and **Service management framework knowledge**.
- **Clear-writing judgement** maps to the role's duty of informing customers on progress and advising on workarounds, and to coaching associates.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — Comprehension of a knowledge article**

Passage: "Before replacing a suspected faulty docking station, test the user's laptop with a known-good dock. Replace the dock only if the known-good dock works normally with the user's laptop. If the known-good dock also fails, escalate to the hardware team — do not replace either device."

Statement: "If the user's laptop fails with the known-good dock, the user's dock should be replaced."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** This describes the branch where the known-good dock also fails, whose instruction is escalate and do not replace either device — the statement attaches the wrong branch's action. This tests reading conditional branches precisely, and recognising the underlying diagnostic logic: if the laptop fails with a good dock, the evidence points at the laptop, not the dock.

**Question 2 (easy) — What is the user actually reporting?**

A user emails: "Subject: URGENT laptop replacement needed. Hi — I'm sure my laptop is dying and needs replacing. It's got really slow over the past month, the fan is loud all the time, and yesterday a message popped up about my disk being almost full. I've got performance reviews to write this week and can't afford downtime. Please just swap it for a new one."

Which reading best captures the situation?

- A) The user needs an urgent replacement laptop this week.
- B) The user reports gradual slowness, constant fan noise, and a disk-nearly-full warning, and has requested a replacement; the symptoms suggest the request and the need may differ, and the real constraint is avoiding downtime during review-writing week.
- C) The laptop has a hardware fault and must be replaced.
- D) The user's real problem is the performance reviews.

**Correct answer: B**

**Explanation:** The symptoms (slowdown, fan noise, disk nearly full) suggest a resource-constrained machine, possibly fixable in place — which may serve the user's actual priority (no downtime) better than a replacement's migration. This tests separating the report, the request, and the need — users state solutions, engineers read for needs.

**Question 3 (easy) — True/false/cannot say on a service notice**

Passage: "The VPN service will be upgraded on Wednesday between 19:00 and 22:00. Users connected during this window will be disconnected and unable to reconnect until the upgrade completes. Office-based network access is unaffected."

Statement: "The upgrade will finish by 22:00 on Wednesday."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The window is a planned schedule, not a completion guarantee. This tests distinguishing a scheduled window from a promise of completion — a distinction with real communication consequences, since promising "definitely reconnected by 22:00" makes a commitment the notice never made.

**Question 4 (moderate) — Following a procedure with stacked conditions**

A security procedure states: "(1) All laptops must be encrypted before issue. (2) Laptops for staff handling protectively marked material must additionally have the enhanced security build. (3) Loan laptops are exempt from the enhanced build requirement, except loans to staff handling protectively marked material, which must have the enhanced build regardless of loan status. (4) No exemptions to rule 1 exist."

A caseworker who handles protectively marked material needs a loan laptop urgently. What does the procedure require?

- A) Encryption only — loan laptops are exempt from the enhanced build.
- B) Both encryption and the enhanced security build.
- C) The enhanced build only — encryption can follow later given the urgency.
- D) The procedure does not cover loans to such staff.

**Correct answer: B**

**Explanation:** Rule 4 forbids any exemption from encryption regardless of urgency. Rule 3's exemption for loan laptops is itself withdrawn for exactly this case. This tests reading an exception-within-exemption structure to its end — a half-read rule ("loan laptops are exempt") is how urgent loans go out insecure.

**Question 5 (moderate) — Inference from a handover note**

Passage: "INC-41022 — intermittent black screens on user's laptop during video calls. Ruled out: cable (replaced, no change), monitor (fault follows laptop to other monitors), recent OS update (rolled back, no change). Graphics driver update applied 16:40 — too late to test with a real call. User warned it may recur; asked to report either way tomorrow. If it recurs, next step is hardware diagnostics on the graphics chip."

Statement: "The engineer has identified the graphics driver as the cause of the fault."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The driver update is the current hypothesis under test, explicitly unconfirmed — neither established nor refuted by the note. This tests distinguishing a hypothesis under test from a stated conclusion, the epistemic state most live investigations occupy, and models the standard a good handover should meet.

**Question 6 (moderate) — Choosing the clearest user update**

A user's incident (intermittent laptop crashes) is with the hardware team awaiting a part; expected fix Thursday. The user is anxious and has chased twice. Which update is best?

- A) "Your incident remains open with our hardware resolver group pending component availability. SLA obligations continue to be monitored."
- B) "Hi — an update on your laptop crashes: the cause is a faulty memory module, and the replacement part is due Wednesday. We expect your repair to be finished by Thursday. I know you've chased twice and I'm sorry for the wait — I'll update you Wednesday when the part arrives, even if there's no other news. Meanwhile the loan laptop is yours as long as you need it."
- C) "Hi — this is now with the hardware team, so it's out of my hands. They'll be in touch."
- D) "Hi — good news, this will all be sorted very soon! Nothing to worry about at all."

**Correct answer: B**

**Explanation:** Option B states cause and status, gives a dated expectation, acknowledges the user's experience, commits to the next contact, and confirms the workaround. Option A is cold process-speak. Option C breaches the ownership duty — an issue is owned until a new owner has been found, and continuity should feel unbroken even after handover. Option D is content-free warmth. This tests writing an update with all five elements: cause, date, empathy, next contact, workaround.

**Question 7 (moderate) — Precise reading of a policy definition**

A policy defines: "A Major Incident is an incident causing, or likely to cause, service unavailability to fifty or more users, or any service unavailability affecting a service on the critical services register, regardless of user count. Major Incidents must be declared to the incident manager within fifteen minutes of identification."

Statement: "An incident making a critical-register service unavailable to twelve users must be declared to the incident manager within fifteen minutes."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The definition has two independent routes to Major Incident status; the critical-register route applies "regardless of user count", so twelve users is sufficient. This tests recognising that an "or" clause creates an independent door, not just the memorable headline threshold — precision of reading becomes speed of correct response at the moment of declaration.

**Question 8 (moderate) — Best summary of a change notice**

Passage: "From 1 June, the standard laptop build will move to version 12. New issues from that date will carry v12. Existing laptops will be upgraded in a phased programme over twelve weeks, scheduled by directorate; users will receive fourteen days' notice and can rebook once within their directorate's window. Devices not upgraded by the end of their window will lose access to the corporate network until upgraded. Known incompatibility: the legacy case-recording application does not run on v12; affected teams will receive the replacement application before their upgrade window opens."

Which summary is best?

- A) All laptops will be upgraded to v12 on 1 June, and the legacy case-recording application will stop working.
- B) From 1 June new laptops get v12; existing ones upgrade in phased, directorate-scheduled windows over twelve weeks with notice and one rebooking; missing the window costs network access until upgrade; teams using the incompatible legacy case-recording application get its replacement before their window.
- C) Users can postpone the v12 upgrade indefinitely, though they may lose network access.
- D) The upgrade mainly affects the case-recording application, which is being replaced from 1 June.

**Correct answer: B**

**Explanation:** Option B preserves all six operationally decisive elements without distortion. Option A compresses the phased programme into a single-day event. Option C inverts "rebook once" into "postpone indefinitely." Option D promotes a subordinate detail to the headline. This tests checking a summary against three classic distortions: compressed timelines, dropped qualifiers, and promoted side-issues.

**Question 9 (challenging) — Inference across two documents**

Document 1 (asset policy): "Devices unaccounted for after two consecutive physical audits must be reported as lost, and their remote-wipe initiated within one working day of the second audit."
Document 2 (audit report, dated today): "LT-3310: not located in March audit. Located June audit in Building D storeroom, unlogged. LT-3320: not located in March audit; not located in June audit. LT-3330: located March; not located June."

Statement: "The policy requires LT-3320's remote-wipe to be initiated within one working day of today's report, but does not require this for LT-3310 or LT-3330."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** LT-3320 missed two consecutive audits, triggering the wipe. LT-3310's June find breaks the consecutive-miss sequence. LT-3330 has only one miss so far, needing a second consecutive miss to trigger. This tests applying a general rule to a table of cases one at a time, resisting both over-application (any missing device) and distraction (LT-3310's messy reappearance).

**Question 10 (challenging) — Distinguishing framework terms in context**

Passage: "Fourteen users reported login failures on Tuesday (tickets logged individually). Wednesday's investigation traced all fourteen to a certificate that expired Monday night. A workaround — the web login route — was documented and shared. The certificate renewal is scheduled as a change for Friday's window. The certificate expiry has been recorded with its workaround for future reference."

Statement: "The passage describes fourteen problems, one incident, and one known error."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The fourteen user reports are fourteen incidents; the one underlying cause is one problem; once diagnosed and documented with its workaround it became a known error. The statement inverts the first two terms. This tests holding framework vocabulary steady against a passage that tries to blur it — a distinction that drives real process, since fourteen incidents clustering into one problem record means investigation happens once, not fourteen times.

**Question 11 (challenging) — Tone and content in a difficult message**

An email must go to a team of thirty users whose building's network will be down for four hours tomorrow because an earlier fix, applied incorrectly by the same team, must be redone. Which draft is best?

- A) "Due to unforeseen technical circumstances, network services will be unavailable tomorrow 08:00–12:00. We apologise for any inconvenience."
- B) "Hi all — the network in your building will be down tomorrow 08:00–12:00 while we redo a fix that our team applied incorrectly last week. We're sorry: this second outage is on us. What this means for you: no wired or Wi-Fi access in the building during the window; the ground-floor hub and home working are unaffected, and 4G tethering is available for anyone who needs a connection — reply and we'll set it up today. We'll confirm completion by email before 12:00."
- C) "Hi all — tomorrow's outage (08:00–12:00) is required because of an error in previous engineering work. Questions to the service desk."
- D) "Hi all — unfortunately the network will be down again tomorrow morning. These things unfortunately happen with complex systems and we appreciate your patience as always."

**Correct answer: B**

**Explanation:** Option B names the cause plainly as the team's own error, translates the outage into concrete user consequences, offers a same-day workaround, and commits to closing the loop. Option A hides the cause behind vague language. Option C admits the error in passive officialese and offers no workaround. Option D apologises for the world instead of the mistake. This tests combining plain acknowledgement with concrete mitigation when the fault is one's own team's.

### Administration tips

- **Score for whether a candidate points to the exact sentence** supporting or contradicting a statement.
- **Watch for whether a candidate reads a rule to its end**, including exceptions and "regardless of" clauses.
- **Note whether a candidate distinguishes False (contradicted) from Cannot say (silent)** correctly.
- **Use the clear-writing item (Question 6) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer drawn from outside technical knowledge** rather than the passage.
- **Rewarding a scheduled window read as a completion promise.**
- **Missing when a candidate stops at a memorable headline number** rather than checking an independent "or" clause.
- **Accepting a hypothesis-under-test treated as a stated conclusion.**
- **Rewarding a summary that compresses, drops a qualifier, or promotes a side-issue.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of different responses. The material is human rather than technical: a user under deadline pressure, a change that goes wrong mid-implementation, an associate out of their depth, a conflict between speed and process. For each scenario the candidate typically chooses the most effective response, the least effective response, or rates every option.

The typical format is 10 to 20 scenarios, untimed or generously timed. Scoring is against the pooled judgement of experienced professionals and the organisation's values: user focus, ownership, collaboration, honesty, appropriate escalation, and inclusion.

At this level, the difficult decisions are rarely purely technical. The role owns issues until a new owner is found or the problem is resolved, implements changes under control procedures that sometimes collide with urgent requests, and coaches associates — adding judgement calls about when to step in and how to correct without crushing.

### How this assessment maps to the role

- **Escalate or persist** maps to the **Ownership and topic** skill.
- **Process under pressure** maps to the **Change management** and **Asset and configuration management** skills.
- **Coaching judgement** maps to the role's duty to coach associates and share knowledge.
- **User care under failure** maps to the **User focus** skill and the duty of informing customers on progress and advising on workarounds.
- **Team collaboration** maps to the **Problem management** and **Service focus** skills.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Mid-change complication**

Implementing an approved change — replacing a failing network switch during the 12:00–14:00 window. At 12:40, with the old switch removed, the replacement unit turns out to have the wrong power cable. The correct cable is in the store, 20 minutes away; the window closes at 14:00; the affected floor is without network until the change finishes. What is the most effective response?

- A) Improvise with a similar-looking cable from a nearby cupboard to save time.
- B) Send for or fetch the correct cable immediately, notify the change coordinator of the complication and revised completion estimate, and update the affected floor's contact with the new expected time.
- C) Abandon the change, reinstall the old failing switch, and rebook the window for next week.
- D) Continue the physical installation and leave the power connection for whoever is on shift after 14:00.

**Correct answer: B**

**Explanation:** The 20-minute round trip still completes well inside the window; the coordinator learns of the complication while manageable; users get a revised expectation rather than silence. Option A gambles infrastructure equipment on a cable that only looks right. Option C over-corrects, buying a week of known risk to avoid a 20-minute delay. Option D leaves live disruption at a shift boundary with an undocumented handover. This tests absorbing a complication while keeping the plan honest and everyone informed.

**Question 2 (easy) — The VIP queue jump**

Mid-repair at a user's desk when a director's assistant arrives: "The director's laptop won't start and she has a board meeting in an hour — you need to come now." The current user's fault is genuine but not urgent: a second monitor issue, with a working laptop. Which response is most effective, and which is least effective?

- A) Refuse to move until the current job is finished — first come, first served.
- B) Explain the situation honestly to the current user, ensure they can work meanwhile, go to the director's machine, and register both contacts properly so the interrupted job is tracked and returned to.
- C) Drop everything and go immediately, without a word to the user whose desk is being worked at.
- D) Tell the assistant to log a ticket with the service desk and await triage like everyone else.

**Correct answer: most effective B; least effective C**

**Explanation:** Genuine urgency (a non-starting laptop before a board meeting) justifies re-prioritisation, but how it happens is what matters. Option B moves fast without leaving wreckage — the current user hears the reason and keeps a tracked ticket. Option C abandons a user mid-repair without explanation, least effective. Option A applies queue fairness as an absolute, ignoring impact. Option D is process-correct and judgement-poor. This tests re-prioritising genuinely urgent work while leaving no unexplained disruption behind.

**Question 3 (easy) — An associate's risky confidence**

Overhearing an associate on the phone confidently telling a user to delete a set of files to fix a disk-space problem — folder names indicate application data whose deletion would break the user's software. Which response is most effective?

- A) Interrupt immediately but calmly — ask the associate to put the user on hold, explain the risk privately, help them give corrected advice, and afterwards walk through how to verify a folder's purpose before advising deletion.
- B) Wait until the call ends, then explain the error so the associate is not embarrassed mid-call; the user can be called back to undo the advice.
- C) Say nothing — associates learn best from the consequences of their own mistakes.
- D) Take the phone from the associate and finish the call personally.

**Correct answer: A**

**Explanation:** Harm is in flight, so the interruption must be immediate — waiting (option B) risks the damage landing before a call-back can undo it. The hold-and-private-explanation preserves the associate's standing, letting them deliver the corrected advice themselves, and the afterwards conversation teaches the verification habit. Option C mistakes negligence for pedagogy. Option D protects the user but publicly displaces the associate. This tests stopping live harm immediately, correcting privately, and teaching the method afterwards.

**Question 4 (moderate) — Evidence versus a manager's instinct**

A service desk manager says: "These recurring login failures are obviously the users mistyping passwords — close the cluster as user error." Investigation of the fourteen tickets shows failures clustering between 08:50 and 09:10, affecting only one building, and including several users whose accounts show no failed-password events in the logs. What is the most effective response?

- A) Close the tickets as instructed — the manager owns the queue.
- B) Quietly keep investigating after closing the tickets, and reopen them if proof is found.
- C) Share the three findings with the manager — the time clustering, the single building, the absence of failed-password events — and recommend the cluster stay open as a possible problem record, escalating to the problem manager if the disagreement stands.
- D) Email the manager's manager stating that the diagnosis is wrong.

**Correct answer: C**

**Explanation:** The evidence contradicts the instructed diagnosis on three independent axes. Option C brings the evidence to the right person, findings first, with a legitimate escalation route if needed. Option A closes tickets against clear evidence. Option B splits actions from records, corrupting both. Option D leapfrogs the manager without ever showing them the evidence. This tests evidence-led challenge that respects process roles, with escalation as a route rather than a weapon.

**Question 5 (moderate) — The unauthorised-software discovery**

At a user's desk fixing an unrelated fault, unapproved file-sharing software is noticed — prohibited by security policy. The user says: "Oh, that — everyone in our team uses it to send big files to the printers' contractor. Please don't make it a thing." Which response is most effective, and which is least effective?

- A) Remove the software immediately without discussion — policy is policy.
- B) Say nothing — the visit was for a different fault, and the team clearly depends on it.
- C) Explain why the software is a genuine risk, be honest that it must be reported, and pair the report with the constructive half: capture the underlying need (large file transfer to an external contractor) so the security and service teams can provide an approved route — flagging that a whole team uses it, making it a systemic need.
- D) Tell the user it will be overlooked this once if they promise to uninstall it after their deadline.

**Correct answer: most effective C; least effective B**

**Explanation:** Discovery of a live data-security exposure obligates action, making option B — leaving it running team-wide — least effective. Option C reports the risk and represents the underlying need, converting enforcement into service improvement. Option A removes one installation while leaving the team's habit and workflow untouched. Option D makes the discoverer privately complicit. This tests enforcing policy while championing the need behind the workaround, treating "everyone does it" as scoping information for a fix.

**Question 6 (moderate) — Handover without a receiver**

At 16:50, shift ending at 17:00, mid-investigation on an incident: a caseworker's laptop loses network connection every few minutes, narrowed to either the port or the network adapter. The evening-shift engineer has called in sick; the next cover starts at 08:00 tomorrow. The user has a 10:00 deadline tomorrow. What is the most effective response?

- A) Update the ticket with findings and go home — the morning shift will pick it up.
- B) Stay as long as it takes tonight to finish the diagnosis, without telling anyone.
- C) Spend ten minutes securing the user's outcome — move them to a known-good port or spare machine so they can work now and tomorrow morning — then write a precise handover (ruled out, remaining hypotheses, exact next test), flag the 10:00 deadline to the morning shift's queue, and alert a team lead to the coverage gap.
- D) Give the user a personal number and ask them to call tonight if it gets worse.

**Correct answer: C**

**Explanation:** With no receiver until 08:00, ownership transfers to the artefacts left behind. Option C secures the outcome first, then makes the investigation resumable at full speed, and surfaces the coverage gap. Option A hands over the diagnosis but abandons the user without a workaround. Option B risks unrecorded lone working and hides a coverage gap the team lead cannot otherwise fix. Option D substitutes personal heroics for process. This tests manufacturing a new owner out of a workaround, a flag, and precise writing when no live receiver is available.

**Question 7 (moderate) — Credit and the knowledge base**

A colleague presents a diagnosis and knowledge article written after two evenings of investigation, describing it in the first person as work "I got to the bottom of," in front of an impressed team lead. Which response is most effective?

- A) Correct the record in the meeting: state clearly that the work and the article belong to the original author.
- B) Say nothing in the meeting, but afterwards stop sharing write-ups so this cannot happen again.
- C) In the meeting, add to the discussion constructively — extra detail on the diagnosis, the article reference for everyone's use — and afterwards raise the misattribution privately and directly with the colleague; involve the team lead only if it recurs.
- D) Reply-all to the meeting invite afterwards with the article's edit history attached.

**Correct answer: C**

**Explanation:** Contributing depth in the meeting keeps the discussion useful and naturally signals command of the work without confrontation; the attribution issue is then handled privately, proportionately, giving room for an honest slip to self-correct. Option A wins the moment and taxes the room. Option B punishes the whole team's future users for one colleague's behaviour, undermining the duty to share knowledge. Option D is passive aggression on carbon paper. This tests service before ego and proportionate directness.

**Question 8 (moderate) — The accessibility deprioritisation**

A team lead asks for a ticket to be deferred to next week to make room for a laptop refresh project: the ticket is from a user whose screen-reader stopped working after Tuesday's update, coping since by borrowing a colleague's eyes and not complaining. What is the most effective response?

- A) Defer the ticket as asked — the user is coping, the refresh has a deadline, and the team lead has decided.
- B) Push back immediately: explain that a broken screen-reader means the user cannot work independently at all — equivalent to a dead laptop, not a degraded one — that "coping by borrowing a colleague" is dependence rather than a workaround, and recommend it be treated as urgent, offering to absorb the refresh slippage elsewhere.
- C) Defer it officially but work on it secretly between refresh tasks.
- D) Advise the user to raise a complaint so the ticket's priority increases.

**Correct answer: B**

**Explanation:** A non-functioning screen-reader is total loss of independent working, and quiet coping is not evidence of low impact but of donated time and practised endurance. Option B corrects the impact assessment respectfully and offers something constructive. Option A executes an instruction based on a false premise. Option C leaves the team's priority model broken for the next such user. Option D outsources advocacy to the person the system just failed. This tests recognising invisible impact and advocating through the right channel.

**Question 9 (challenging) — A fix that caused an outage**

Monday, a routine driver update was applied to forty laptops in one directorate. Tuesday morning, eleven are blue-screening, and a colleague speculates in the team channel that "it looks like yesterday's Windows patch" — wrong; the central patch went nowhere near these machines. Only the person who applied the update knows it is the common factor. Which response is most effective, and which is least effective?

- A) Stay quiet and start quietly rolling back the driver on affected machines — the symptom will disappear and the patch theory will die naturally.
- B) Immediately state in the channel that the Monday driver update is the likely cause, share the affected-machine list, propose the rollback plan, alert the incident manager to the scale, and personally front the communication to the directorate.
- C) Let the patch theory stand for now — morale is better served by fixing than blaming — and correct the record in the post-incident review.
- D) Report that the cause is "under investigation" while verifying the driver theory for a day before naming it.

**Correct answer: most effective B; least effective A**

**Explanation:** Naming the actual cause immediately redirects the whole team's effort correctly, scopes the incident, and converts confession into remediation. Option A deletes evidence while colleagues chase a phantom cause, and reads as concealment if discovered — mistakes are recoverable, cover-ups are not, making it least effective. Option C spends colleague-hours on a known-false theory for weeks. Option D's day of silence is neither honest nor cautious enough. This tests speed and honesty compounding — withholding known-cause information is the one genuinely unprofessional option available.

**Question 10 (challenging) — Coaching versus the queue**

A team lead asks for ticket triage to be taken over permanently "because the associates keep misrouting things and you're faster." The real cause is that nobody has ever taught the associates the routing rules, and absorbing triage would cost two hours daily from measured incident work. What is the most effective response?

- A) Accept — the team lead has assessed the options and routing accuracy matters most.
- B) Decline — triage is associate-level work and incident metrics would suffer.
- C) Propose the developmental alternative: take triage temporarily while running the associates through the routing rules — paired triage sessions, a one-page routing guide, spot-checks with feedback — with a review in three weeks when the associates take it back, better; explain that permanent absorption fixes today's symptom while guaranteeing the skills gap persists.
- D) Accept the task but delegate it back to the associates informally without telling the team lead.

**Correct answer: C**

**Explanation:** Permanent absorption makes routing accurate this week and fragile forever, single-pointing triage capability. Option C fixes the symptom and the cause together, with an exit date and success measure, presented as a proposal that respects the team lead's authority. Option B correctly diagnoses without helping. Option D creates a secret gap between belief and reality. This tests offering to close a skills gap rather than permanently compensating for it.

**Question 11 (challenging) — The plausible caller**

A walk-up call transferred from reception: a confident caller identifies as a named senior manager (name checks out in the directory), locked out and needing a password reset "read out over the phone in the next five minutes." Identity-verification procedure requires a callback to the registered number or a video check; the caller says the registered phone is the locked laptop's softphone and there's no time for video: "I'll take responsibility — check my name, you can see who I am." What is the most effective response?

- A) Read out a temporary password after confirming personal details the caller offers — name, job title, and staff number all match the directory.
- B) Refuse verification shortcuts, but actively work the approved routes: attempt the registered callback anyway, offer the video check ("it takes two minutes"), and if both genuinely fail, escalate immediately to a team lead or the security desk for an authorised decision — keeping the caller informed of exactly what is being done and why.
- C) Tell the caller to email the service desk from their personal email address to prove identity, then reset on receipt.
- D) Reset the password but send it to the manager's registered work email rather than reading it out.

**Correct answer: B**

**Explanation:** The scenario has the exact shape of social engineering while being equally what a genuinely locked-out manager sounds like — the procedure exists for that uncertainty. Option B takes no shortcut but maximises energy inside approved routes, and escalates to someone authorised to decide. Option A treats directory knowledge as proof of identity. Option C invents an unapproved route. Option D launders the same failure — if the account is compromised, its mailbox may be too. This tests procedure under pressure combined with genuine helpfulness inside the rules.

### Administration tips

- **Score for whether a candidate serves the user's outcome, the process's integrity, and the relationship's health together.**
- **Watch for whether a candidate escalates with evidence rather than emotion.**
- **Note whether a candidate identifies the "second problem"** behind a scenario — the systemic issue an instance reveals.
- **Use most/least items to check whether a candidate rates each option on its own merits before ranking.**
- **Keep candidates scored to engineer-level judgement** — deliver and coach, not absorb everyone else's work.

### Common pitfalls to watch for when scoring

- **Rewarding heroic absorption** — silently staying late, taking over permanently, personally covering every gap.
- **Crediting comfortable silence** as if it were neutral rather than a decision to let harm continue.
- **Accepting process used as a shield or sacrificed as a casualty**, rather than kept and made to work harder.
- **Missing when a candidate postpones honest correction** to a later review rather than acting immediately.
- **Rewarding advocacy outsourced to the person with least power** — the affected user, the struggling associate.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an end user computing engineer: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests clustering incidents by plausible cause, isolating faults with discriminating tests, checking asset registers and test-script gates for the breaches that matter, and coaching an associate's reasoning rather than just correcting it. The numeric section tests SLA clocks, first-time-fix rates, weighted averages, and reorder points. The verbal section tests reading change procedures, policy definitions and handover notes with precision, and drafting honest, accountable messages when things go wrong. The situational judgement section tests judgement calls about mid-change complications, VIP interruptions, security pressure, one's own mistakes, and the development of associates.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can diagnose carefully, read procedures precisely, and exercise sound judgement about ownership, escalation, and coaching — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
