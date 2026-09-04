# Infrastructure Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for infrastructure engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the kinds of artefacts an infrastructure engineer genuinely handles — build sheets, configuration files, monitoring dashboards, physical and logical designs, test scripts, capacity reports, and change records — and the kinds of decisions genuinely made: building and configuring infrastructure solutions according to departmental policy, owning an issue until it is resolved or properly handed over, translating logical designs into physical designs, working with third parties who provide infrastructure services, and troubleshooting problems across different technology capabilities.

At this level a candidate would have moved beyond supervised support into genuine independent delivery: building, configuring, administering, and supporting solutions and services — networking and physical infrastructure, COTS software, open source packages, virtual and cloud computing — where other people rely on the work being right. The assessments map directly onto those demands: spotting the configuration that breaks the pattern, calculating whether a storage volume will survive until the next procurement, extracting precise obligations from a supplier contract clause, and choosing the most professional course of action when a change goes wrong at the worst possible moment.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why employers use it for this role, a mapping of the assessment dimensions to the specific named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring. The items progress from easy through moderate to hard, and every scenario is drawn from realistic infrastructure engineering work in a UK government context.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of shape sequences and letter grids, it presents the everyday materials of the job — configuration files, firewall rule sets, DNS records, patching schedules, dependency maps, and design documents — and asks the candidate to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, comparing the candidate's responses against a norm group of professionals at a similar level, and modern platforms often adapt question difficulty to performance. Employers typically receive a breakdown of speed versus accuracy rather than a single score. Short ungraded practice questions are normally offered before the timed section starts.

For an infrastructure engineer, cognitive assessment is particularly relevant because the core professional value is precise, structured thinking applied to systems. A firewall rule set is a logic problem. A configuration drift report is an error-checking exercise. An incident with three plausible causes is a deduction problem with real stakes. Translating a logical design into a physical design is exactly the kind of systematic mapping these tests measure, and troubleshooting across compute, storage, and networking is hypothesis-driven elimination under time pressure. Employers use these assessments because they predict how reliably an engineer will do all of that on an ordinary Tuesday, with a change window closing and a service owner waiting.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **IT infrastructure** skill: building, configuring, administering, and supporting solutions means working daily with structured artefacts — naming conventions, address schemes, rule sets, version matrices — where the anomaly that breaks the pattern is the defect the role exists to find.
- **Logical deduction** maps to the **Systems design** skill: translating logical designs into physical designs and producing detailed designs requires valid step-by-step reasoning — if the design requires resilience across two sites, what physically follows? It also maps to **Information security**, because security controls are conditional rules that must be applied exactly.
- **Error checking** maps to the **Systems design** duty to effectively document all work using required standards, and to the **Testing** skill: correctly executing test scripts means noticing every mismatch between expected and actual results.
- **Prioritisation** maps to the **Ownership and topic** skill — owning an issue until a new owner is found or the problem is mitigated or resolved forces constant judgements about what to do first — and to the duty to ensure services are delivered and used as required.
- **Applied problem solving** maps to the **Troubleshooting and problem resolution** skill (troubleshooting and identifying problems across different technology capabilities) and the **Problem management** skill (investigating problems in systems, processes, and services, and understanding whether a problem is strategic, tactical, or operational).
- **Working with structured tools** maps to the **Coding and scripting** skill: describing the scripting tools currently in use presumes the ability to follow the logic a script encodes — loops, conditions, and order of operations are pure applied deduction.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a configuration standard**

A team's standard for virtual machine names is: environment code (P for production, T for test), two-letter service code, role code (WEB, APP, DB), and a two-digit sequence number — for example, PHRWEB01 is production HR web server 1. A build sheet lists:

1. PHRWEB01
2. THRAPP02
3. PFIDB01
4. PFIWEB1
5. TFIAPP03

Which entry breaks the standard?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** Decompose each name against the four-part rule. Entry 1: P + HR + WEB + 01 — valid. Entry 2: T + HR + APP + 02 — valid. Entry 3: P + FI + DB + 01 — valid. Entry 4: P + FI + WEB + 1 — the sequence number has one digit, not two; the standard requires "01". Entry 5: T + FI + APP + 03 — valid. A single missing zero looks trivial, but automation does not forgive it: scripts that select servers by pattern, monitoring rules, and backup selections all key on exact formats, so PFIWEB1 could silently fall outside every automated process that expects PFIWEB01. This tests whether a candidate parses each candidate into its component fields and validates each field, the same discipline applied when reviewing build sheets before provisioning — faster and more reliable than reading names whole.

**Question 2 (easy) — Logical deduction from a firewall policy**

Departmental policy states: "Inbound connections from the internet are permitted only to servers in the DMZ network. Servers in the internal network may receive connections only from the DMZ or from other internal servers." A colleague proposes a design in which an internet-facing monitoring service connects directly to a database server in the internal network. Which one of the following must be true?

- A) The proposal complies with policy because monitoring traffic is read-only.
- B) The proposal does not comply with policy as stated.
- C) The proposal complies if the database server has a strong password.
- D) The policy does not cover monitoring services.

**Correct answer: B**

**Explanation:** Apply the rules literally. The database server is in the internal network. Policy permits internal servers to receive connections only from the DMZ or other internal servers. An internet-facing service connecting "directly" is neither, so the connection is not permitted: the proposal breaches policy as stated — option B. Option A invents an exemption for read-only traffic that the policy does not contain; the rules constrain sources of connections, not their purpose. Option C confuses authentication strength with network policy. Option D is wishful: the policy covers "inbound connections" generically, which includes monitoring. This tests exactly the **Information security** skill exercised in design reviews: testing a proposal against the control's exact wording, and — when the words forbid it — fixing the design rather than reinterpreting the control.

**Question 3 (easy) — Error checking expected versus actual test results**

A candidate is executing a test script for a new file service. The script's expected results and the recorded actuals are:

| Step | Expected | Actual |
|---|---|---|
| 1. Map drive | Drive maps as S: | Drive maps as S: |
| 2. Create file | File created, owner = tester | File created, owner = tester |
| 3. Set read-only permission | Other users can open but not edit | Other users cannot open |
| 4. Delete file | File moves to recycle store | File moves to recycle store |

Which step should be recorded as failed?

- A) Step 1
- B) Step 2
- C) Step 3
- D) Step 4

**Correct answer: C**

**Explanation:** Compare each expected/actual pair exactly. Steps 1, 2, and 4 match word for word. Step 3 does not: the expectation is "open but not edit" (read access preserved, write access removed), while the actual is "cannot open" (all access removed). The permission applied is more restrictive than designed — and "more secure than intended" is still a defect, because users who legitimately need to read the files cannot. This tests the core discipline of the **Testing** skill: a test passes only when the actual result matches the expected result, not when the result seems broadly acceptable. A strong candidate's answer records step 3 as failed with the exact observed behaviour, and this item rewards reading both columns completely rather than pattern-matching on the first few words.

**Question 4 (easy) — Prioritising a morning workload**

A candidate arrives to find four items: (1) an alert that a production web server's certificate expires in 48 hours; (2) a request from a project manager for a test server build, needed next week; (3) a monitoring warning that a development server's disk is 85% full; (4) an incident ticket — a shared printer used by one team is offline. Which item should be addressed first?

- A) Item 2, because project work drives delivery dates
- B) Item 1, because an expired certificate will cause a production outage with a known deadline
- C) Item 3, because disk alerts always precede failures
- D) Item 4, because incidents always outrank other work

**Correct answer: B**

**Explanation:** Weigh impact against urgency. Item 1 combines high impact (a production service will fail or show security warnings to every user when the certificate expires) with a hard, known deadline (48 hours, and renewal plus deployment takes time) — it is both important and urgent. Item 4 is an incident, but its impact is one team's printing — worth handling soon, not first; option D's "incidents always outrank" is a rule of thumb, not a law. Item 3 is a development system at 85% — worth a scheduled clean-up, low urgency. Item 2 has a week of runway. This tests the **Ownership and topic** skill: ranking by impact-weighted urgency and communicating — a strong candidate's answer notes that a quick message to the printer team and the project manager, stating when their items will be reached, turns prioritisation into managed expectations rather than silence.

**Question 5 (moderate) — Pattern recognition in a DNS record review**

A standard says every production application server must have: an A record (name to address), a PTR record (address to name), and a monitoring entry. Four servers are under review:

| Server | A record | PTR record | Monitoring |
|---|---|---|---|
| PFIAPP01 | 10.30.1.11 | 10.30.1.11 → PFIAPP01 | Yes |
| PFIAPP02 | 10.30.1.12 | 10.30.1.12 → PFIAPP02 | Yes |
| PFIAPP03 | 10.30.1.13 | 10.30.1.31 → PFIAPP03 | Yes |
| PFIAPP04 | 10.30.1.14 | 10.30.1.14 → PFIAPP04 | No |

How many servers have at least one defect against the standard?

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: C**

**Explanation:** Check each server against all three requirements. PFIAPP01: A record, matching PTR, monitored — clean. PFIAPP02: clean. PFIAPP03: the A record points to 10.30.1.13, but the PTR record is registered against 10.30.1.31 — the digits are transposed, so forward and reverse resolution disagree: one defect. PFIAPP04: records match, but monitoring is "No": one defect. Two servers are defective — option C. The transposition in PFIAPP03 hides in plain sight because 13 and 31 contain the same digits; mismatched reverse DNS then causes subtle failures in services that verify hostnames. The missing monitoring on PFIAPP04 is the more dangerous gap: an unmonitored production server fails silently. This tests whether a candidate reviews a matrix row by row, requirement by requirement, rather than scanning for anything that "looks odd" — exactly how infrastructure is administered reliably as part of the **IT infrastructure** skill.

**Question 6 (moderate) — Deduction through a script's logic**

A housekeeping script used by a team runs nightly with this logic: "For each log file in the target folder: if the file is older than 30 days AND larger than 100 MB, compress it. If the file is older than 90 days, delete it (whether or not compressed)." Tonight the folder contains: File W — 95 days old, 50 MB; File X — 40 days old, 200 MB; File Y — 20 days old, 500 MB; File Z — 95 days old, 2 GB. What happens to each file?

- A) W deleted; X compressed; Y untouched; Z deleted
- B) W untouched; X compressed; Y compressed; Z compressed
- C) W deleted; X compressed; Y compressed; Z deleted
- D) W compressed; X compressed; Y untouched; Z deleted

**Correct answer: A**

**Explanation:** Apply each condition exactly. File W: 95 days old — the delete rule (older than 90 days) applies regardless of size, so W is deleted; the compression rule's size condition (50 MB < 100 MB) is irrelevant because deletion does not depend on it. File X: 40 days old and 200 MB — older than 30 AND larger than 100 MB, so compressed; not older than 90, so kept. File Y: 20 days old — fails the age condition of the compression rule despite its 500 MB size (AND requires both), and is nowhere near deletion: untouched. File Z: 95 days — deleted. That is option A. The common errors: treating AND as OR (which would compress Y — option B), and assuming small old files escape deletion (option D keeps W). This tests precise reading of compound conditions — the **Coding and scripting** skill, since scripts do exactly what their conditions say, never what the author hoped — and a strong candidate's answer traces logic on paper before running it, the habit that avoids deleting the wrong files at 2 a.m.

**Question 7 (moderate) — Error checking a physical design against a logical design**

A logical design states: "The application tier comprises two servers in an active-active pair, each in a different data hall, each connected to both network switches, with shared storage accessible from both halls." The draft physical design allocates: Server 1 — Hall A, connected to Switch 1 and Switch 2; Server 2 — Hall A, connected to Switch 1 and Switch 2; storage array — Hall B, accessible from both halls. Which single change makes the physical design match the logical design?

- A) Connect each server to only one switch
- B) Move Server 2 to Hall B
- C) Move the storage array to Hall A
- D) Add a third server in Hall B

**Correct answer: B**

**Explanation:** Map each logical requirement to the physical allocation. Two servers, active-active: present. Each connected to both switches: satisfied. Shared storage accessible from both halls: satisfied. "Each in a different data hall": violated — both servers sit in Hall A, so a single hall failure takes down the entire application tier, defeating the resilience the logical design intends. Moving Server 2 to Hall B (option B) restores the separation with one change. Option A would break a satisfied requirement. Option C merely relocates storage without separating the servers. Option D adds cost the design does not call for. This tests the **Systems design** skill directly: "translate logical designs into physical designs" means preserving every property the logical design encodes, and resilience properties are the easiest to lose because the design still works on a sunny day.

**Question 8 (moderate) — Prioritisation during an incident with a change pending**

At 14:00 a candidate is mid-way through a scheduled, approved change: migrating file shares to a new server, currently at the step where both old and new servers are live and data is synchronising. At 14:10 the service desk reports a P2 incident: the email gateway is rejecting some external mail, affecting several teams, and the candidate is the only engineer available with gateway knowledge. The change window closes at 17:00, and rolling back or pausing the migration at this step is safe and documented. What is the most defensible course of action?

- A) Finish the migration first — approved changes take precedence over incidents.
- B) Pause the migration at the documented safe point, address the P2 incident, and resume or reschedule the migration depending on time remaining.
- C) Attempt to do both simultaneously, switching between tasks every few minutes.
- D) Ignore the incident — the service desk should find someone else.

**Correct answer: B**

**Explanation:** The scenario deliberately provides the fact that makes the decision safe: the migration has a documented safe pause point. A P2 incident affecting several teams' external mail has live business impact now; the migration's value is realised whenever it completes, and its window can be renegotiated. Pausing at a safe point, fixing the live impact, then making a clear-headed resume-or-reschedule decision (option B) protects users first and the change second — and both decisions remain controlled and documented. Option A inverts service priorities: changes exist to improve services, not to outrank their availability. Option C is the seductive wrong answer: context-switching between a live migration and a live incident invites errors in both. Option D abandons the **Ownership and topic** duty — the candidate is the available engineer with the knowledge; ownership means taking the issue until a proper handover exists, not hoping one appears. This item tests whether a candidate also identifies the implied communication step: telling the change approver about the pause keeps the change record honest.

**Question 9 (moderate) — Deduction from monitoring evidence**

Users on floor 3 report intermittent disconnections from all networked services. Users on other floors are unaffected. The evidence: (i) floor 3 connects through switch SW3, which uplinks to the core switch; (ii) the core switch reports no errors on any port except the SW3 uplink port, which shows intermittent errors; (iii) SW3's own logs show no errors on any user-facing port; (iv) servers and services show no faults. What is the most probable location of the fault?

- A) The core switch's software
- B) The uplink link between SW3 and the core switch (cable, transceivers, or ports)
- C) Floor 3 users' devices
- D) The servers hosting the affected services

**Correct answer: B**

**Explanation:** Localise by intersecting the evidence. All floor-3 services are affected, but only floor 3 — so the fault sits on the path unique to floor 3, which is SW3 and its uplink. SW3's user-facing ports are clean (iii), which argues against many independent device problems (option C — also implausible because every user would need a simultaneous fault). Services are healthy for other floors (iv), eliminating option D. The core switch reports errors on exactly one port — the SW3 uplink (ii) — which points not at core switch software (option A would affect other ports or floors) but at that specific link: cable, transceivers, or the ports at either end. Option B names the segment where every symptom intersects. This tests the elimination method at the heart of the **Troubleshooting and problem resolution** skill: drawing the path, marking what is proven healthy, and locating the fault in what remains. A strong candidate's answer also notes the practical next step — checking transceiver seating and cable integrity before replacing hardware.

**Question 10 (hard) — Multi-constraint scheduling of a build**

Five build tasks are needed for a new service: (1) rack and cable the hardware — 1 day; (2) install and configure the operating system — 1 day, requires task 1 complete; (3) configure storage — 1 day, requires task 2; (4) install the application — 1 day, requires task 3; (5) security scan — 1 day, requires task 4, and scans are only run by the security team on Tuesdays and Thursdays. Work starts Monday morning, one task per day, no weekend working. What is the earliest day the security scan can run?

- A) Friday of week 1
- B) Tuesday of week 2
- C) Thursday of week 1
- D) Monday of week 2

**Correct answer: B**

**Explanation:** Build the timeline. Monday: task 1. Tuesday: task 2. Wednesday: task 3. Thursday: task 4 — complete by Thursday evening. Task 5 requires task 4 complete, so the scan cannot run before Friday of week 1 — but scans run only on Tuesdays and Thursdays, and Friday is neither. Thursday of week 1 is impossible because task 4 finishes that same day (option C double-books the day). The next scan day after Thursday of week 1 is Tuesday of week 2 — option B. Options A and D ignore the security team's schedule constraint. This tests whether the candidate recognises that the critical path is not simply the sum of task durations — it is durations plus resource availability windows, and the three-day wait (Friday to Tuesday) is pure calendar loss caused by missing a window by one day, exactly the coordination the role's duty to ensure services are delivered as required implies.

**Question 11 (hard) — Root-cause deduction with a red herring**

A web application became slow at 09:00 and recovered at 11:30 without intervention. Facts: (i) a backup job on the application's database server ran from 02:00 to 03:15 — normal duration; (ii) the application's request volume this morning was typical; (iii) at 08:55 an operating system update began downloading, throttled to finish by 11:30, on the same virtual host that runs the application's database server; (iv) network monitoring shows the virtual host's storage traffic saturated from about 09:00 to 11:30; (v) a similar slowdown occurred last month on the same date. What is the most probable cause?

- A) The 02:00 backup job left the database in a degraded state.
- B) The OS update download saturated the virtual host's storage or network path, starving the database server from 09:00 to 11:30.
- C) Unusually high user demand overloaded the application.
- D) The application has a memory leak that clears itself every month.

**Correct answer: B**

**Explanation:** Align the timelines. The slowdown ran 09:00–11:30. The backup (option A) ended at 03:15 with normal duration — nearly six hours before onset, and nothing links its end state to a 09:00 start. Request volume was typical (ii), eliminating option C. The update download began at 08:55 and was throttled to finish at 11:30 — matching both onset and recovery almost exactly — and the saturation evidence (iv) covers the same window on the same virtual host that carries the database. Cause, mechanism, and timing all align: option B. Option D is built on fact (v), the deliberate red herring — a monthly recurrence pattern is consistent with a monthly scheduled update, which supports B rather than an unevidenced memory leak; leaks also degrade gradually, not with sharp start and end times. This tests the **Problem management** technique of plotting every event on one timeline and demanding that a candidate cause explain both the start and the end of the symptom, treating recurrence patterns as pointers to schedules rather than evidence of a self-clearing fault.

**Question 12 (hard) — Integration interface reasoning**

An interface transfers staff records nightly from the HR system to the access-control system. The specification says: (i) the HR system exports at 01:00; the export takes up to 45 minutes; (ii) the access-control system imports whatever file is present at 02:00 exactly, and an import of a partial file corrupts its database; (iii) the network file copy between systems takes up to 20 minutes; (iv) the transfer job can be scheduled at any time and must never deliver a partial file. Which design is safest?

- A) Schedule the copy at 01:30, so the file arrives before 02:00.
- B) Schedule the copy at 01:50, leaving just enough time before the import.
- C) Have the HR export write to a temporary name, rename it to the final name only on completion; the transfer job copies at 01:46 or later only if the final-name file exists, copying first to a temporary name at the destination and renaming on completion before 02:00.
- D) Copy the file continuously every five minutes so the latest version is always present.

**Correct answer: C**

**Explanation:** The hazard is partial files at either end. At 01:30 (option A) the export may still be running — up to 01:45 — so a half-written file could be copied. Option B starts after the latest export finish (01:45), but the copy itself takes up to 20 minutes, potentially still writing at 02:10 when the import already ran at 02:00 against a partial destination file. Option D makes the hazard continuous: some five-minute copy will inevitably catch the export mid-write. Option C engineers the hazard away with the write-then-rename pattern: a file only ever appears under its final name when complete, at both source and destination, so the 02:00 import can only ever see a whole file or no file — and "no file" is recoverable while corruption is not. The timing (01:46 earliest start + 20 minutes worst-case copy = 02:06) still risks missing the 02:00 import in the worst case, which option C's design converts from a corruption into a skipped night — the safest available failure mode, and a finding worth raising against the specification. This tests the **Systems integration** skill in earnest: building and testing simple interfaces between systems is mostly about designing for the failure cases, and atomic rename is one of the most useful patterns in the trade.

### Administration tips

- **Watch for whether a candidate parses structured data into fields** rather than scanning a whole entry — most pattern-recognition errors at this level come from skimming.
- **Score for whether a candidate reads rules exactly as written**, including compound (AND/OR) conditions, rather than reading them the way they "should" work.
- **Note whether a candidate verifies every clause of an option** rather than being sold by one matching detail.
- **Keep timing consistent** across candidates for this level.
- **Use the scheduling item (Question 10) to observe whether a candidate accounts for resource availability windows**, not just task durations.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that scans instead of parses.** Anomalies like transposed digits and single missing characters are invisible to a skim.
- **Accepting an answer that reads a rule the way it "should" work** rather than exactly as written.
- **Crediting an answer sold by one matching detail** without checking every clause against the scenario.
- **Missing when a candidate prioritises by category label** ("it's an incident", "it's an approved change") rather than by impact and urgency.
- **Rewarding anchoring on the first plausible cause** in a deduction item, without checking that the cause explains the whole timeline.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely produces: capacity figures, utilisation percentages, availability statistics, backup durations, licence counts, bandwidth calculations, and cost tables. The mathematics itself is deliberately modest — percentages, ratios, averages, rates, and reading tables and charts — because the test is not measuring mathematical education. It is measuring whether a candidate can extract the right figures from realistic operational data, perform accurate calculations under mild time pressure, and interpret the result sensibly.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting a small data set — a capacity table, an availability report, a supplier quote — followed by a multiple-choice question. Calculators are usually permitted (always check), rough paper is essential, and scoring compares accuracy and speed against a norm group. Adaptive difficulty is common.

For an infrastructure engineer, numeric fluency is not an adjacent skill — it is load-bearing. Capacity planning is division and rate-of-growth arithmetic. Availability reporting is percentage conversion. RAID and backup sizing are ratio problems. Bandwidth and transfer-window questions decide whether a migration plan is feasible before a server is ever touched. Providing input on whether a service meets its targets, or sanity-checking a supplier's invoice against the servers actually under support, is arithmetic turning opinion into evidence. Employers test numeric reasoning at this level because engineers who calculate confidently plan changes that fit their windows, size systems that survive their growth, and catch billing and capacity errors that others miss.

### How this assessment maps to the role

- **Percentages and capacity arithmetic** map to the **IT infrastructure** skill: building, configuring, and administering compute, storage, and networking means constant used-versus-total, headroom, and threshold calculations.
- **Rates, trends, and forecasting** map to the **Problem management** skill: investigating problems and contributing to preventative measures often begins with quantifying a trend — growth per week, errors per thousand requests — and projecting when it becomes an incident.
- **Averages and comparative statistics** map to the **Troubleshooting and problem resolution** skill: identifying the server whose metrics deviate from its peers requires accurate baselines and comparisons.
- **Reading tables and charts** maps to the duty to ensure services are delivered and used as required, and to the **Service focus** skill: establishing coherent frameworks from inputs starts with reading operational reports correctly.
- **Cost and licensing arithmetic** maps to the duty to work with and support third parties: supplier quotes, support tiers, and licence models are proportional-reasoning problems, and checking them protects public money.
- **Sizing and conversion calculations** map to the **Systems design** skill: producing detailed designs means committing to numbers — node counts, volume sizes, bandwidth requirements — that must be derived, not guessed.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Storage utilisation percentage**

A storage volume has a capacity of 2,000 GB and currently holds 1,440 GB. What is the utilisation percentage?

- A) 68%
- B) 70%
- C) 72%
- D) 76%

**Correct answer: C**

**Explanation:** Utilisation = used ÷ capacity × 100. Step 1: 1,440 ÷ 2,000 = 0.72. Step 2: 0.72 × 100 = 72%. Sanity check with landmarks: 70% of 2,000 is 1,400, and 1,440 is slightly above that, so the answer must sit just above 70% — confirming 72% and instantly eliminating 68%. This tests the habit of bracketing an answer with easy reference points (halves, tenths) to catch keying errors on the calculator — utilisation figures drive real decisions in **IT infrastructure** work, from alert thresholds to expansion requests, so moving fluently between gigabytes and percentages is daily currency.

**Question 2 (easy) — Average change duration**

The last five file-server changes took 45, 60, 35, 70, and 50 minutes. What is the average duration, to help plan future change windows?

- A) 48 minutes
- B) 50 minutes
- C) 52 minutes
- D) 55 minutes

**Correct answer: C**

**Explanation:** Mean = total ÷ count. Step 1: sum the durations: 45 + 60 = 105; 105 + 35 = 140; 140 + 70 = 210; 210 + 50 = 260. Step 2: divide by 5: 260 ÷ 5 = 52 minutes. This item also tests whether a strong candidate volunteers the professional interpretation: the average alone is not the whole story, since the worst case here was 70 minutes, so a 52-minute window would have failed one change in five — a sensible window uses the average for scheduling density and the maximum (plus rollback time) for the window itself, since an overrun against a closed window becomes an unauthorised change.

**Question 3 (easy) — Availability from downtime**

A service ran for a 30-day month (43,200 minutes) with two outages: one of 90 minutes and one of 40 minutes. What was its availability for the month, to one decimal place?

- A) 99.7%
- B) 99.5%
- C) 99.3%
- D) 98.7%

**Correct answer: A**

**Explanation:** Step 1: total downtime = 90 + 40 = 130 minutes. Step 2: downtime fraction = 130 ÷ 43,200 = 0.003009. Step 3: downtime percentage ≈ 0.3%. Step 4: availability = 100% − 0.3% = 99.7%. The subtract-from-100 route is faster and safer than computing uptime minutes (43,070 ÷ 43,200) directly, though both give the same answer. Common slips: using only one outage, or dividing by minutes in a week rather than the month. This tests availability arithmetic that underpins real service reporting, and a strong candidate's answer notes that translating 130 minutes into 0.3% helps bridge the engineer's view ("two outages, one bad") and the service report's view ("99.7%").

**Question 4 (easy) — Reading a patching compliance table**

The monthly security report shows:

| Estate | Servers | Fully patched |
|---|---|---|
| Production Windows | 80 | 72 |
| Production Linux | 50 | 46 |
| Test (all) | 70 | 49 |

Which estate has the highest patching compliance percentage?

- A) Production Windows
- B) Production Linux
- C) Test
- D) They are all equal

**Correct answer: B**

**Explanation:** Compute each percentage. Production Windows: 72 ÷ 80 = 0.90 = 90%. Production Linux: 46 ÷ 50 = 0.92 = 92%. Test: 49 ÷ 70 = 0.70 = 70%. Highest is Production Linux at 92% — option B. The trap is anchoring on absolute numbers: Windows has the most patched servers (72), but the question asks for the compliance rate. This tests whether a candidate establishes whether a figure is a count or a rate before comparing rows, and a strong candidate's answer also notes what the comparison reveals operationally: test at 70% is the outlier worth investigating, since unpatched test servers on the same network are still attack surface — an **Information security** consideration.

**Question 5 (moderate) — Forecasting disk exhaustion**

A database volume of 1,200 GB currently holds 840 GB. Analysis of the last eight weeks shows steady growth of 30 GB per week. The procurement process for additional storage takes six weeks from request to installation. If growth continues, how many weeks until the volume is 100% full, and is there enough time to procure more storage before then if requested today?

- A) 12 weeks until full; procurement fits comfortably
- B) 10 weeks until full; procurement fits with 4 weeks to spare
- C) 12 weeks until full; procurement does not fit
- D) 8 weeks until full; procurement fits exactly

**Correct answer: A**

**Explanation:** Step 1: remaining capacity = 1,200 − 840 = 360 GB. Step 2: weeks to full = 360 ÷ 30 = 12 weeks. Step 3: compare with procurement: 6 weeks needed, 12 available — it fits with 6 weeks of margin, so option A. Option B miscalculates the headroom (it uses 300 GB). This tests whether a candidate goes beyond the headline figure — in practice, one would not aim at 100%, so the working engineer's version targets, say, 90% (1,080 GB): (1,080 − 840) ÷ 30 = 8 weeks, which still accommodates six-week procurement but with only two weeks of margin, transforming "comfortable" into "request it today". This layered calculation — time to hard limit, time to safe limit, lead time — is capacity planning in its entirety, and it is how the **Problem management** skill converts a trend into a preventative measure instead of a 3 a.m. incident.

**Question 6 (moderate) — Backup window arithmetic**

A nightly backup must copy 4.5 TB of data, and the backup window is six hours. What minimum sustained throughput is required, in MB per second? (Use 1 TB = 1,000 GB and 1 GB = 1,000 MB.)

- A) About 125 MB/s
- B) About 208 MB/s
- C) About 750 MB/s
- D) About 21 MB/s

**Correct answer: B**

**Explanation:** Step 1: convert the data volume: 4.5 TB = 4,500 GB = 4,500,000 MB. Step 2: convert the window: 6 hours = 6 × 3,600 = 21,600 seconds. Step 3: required throughput = 4,500,000 ÷ 21,600 = 208.3 MB/s. So roughly 208 MB/s sustained — option B. Option A results from using 4 hours' worth of seconds incorrectly or mis-keying; option C from using minutes instead of hours somewhere; option D from a factor-of-ten slip. This tests whether a candidate writes units at every step and cancels them explicitly: MB ÷ seconds must give MB/s. A strong candidate's answer notes the follow-on design question — can the storage read, the network carry, and the backup target write at 208 MB/s simultaneously, since the lowest of those three is the real ceiling — backup-window arithmetic like this is one of the most frequently needed calculations in **IT infrastructure** work.

**Question 7 (moderate) — Percentage change in incident volume**

After rebuilding a problematic print server, weekly printing incidents fell from 35 to 21. What was the percentage reduction?

- A) 14%
- B) 33%
- C) 40%
- D) 67%

**Correct answer: C**

**Explanation:** Percentage change = (old − new) ÷ old × 100. Step 1: reduction = 35 − 21 = 14 incidents. Step 2: divide by the original figure: 14 ÷ 35 = 0.4. Step 3: × 100 = 40%. Option A is the raw difference masquerading as a percentage. Option B comes from dividing by the new figure incorrectly. Percentage-change questions hinge entirely on the base: reductions are measured against the starting value. This tests correct use of the base — a strong candidate's answer also notes that being able to state "the rebuild cut printing incidents by 40%" accurately is how the value of one's own work gets evidenced in service reviews, feeding directly into the duty to ensure services are delivered as required.

**Question 8 (moderate) — Licence and cost check**

A supplier invoices a team £13,800 for annual monitoring-tool licences, stating "60 licences at £230 each". The asset register shows 52 servers using the tool. Checking the invoice arithmetic and the licence count, which statement is correct?

- A) The arithmetic is right and the count matches the register.
- B) The arithmetic is right, but the invoice charges for 8 more licences than the register supports; the difference is £1,840.
- C) The arithmetic is wrong: 60 × £230 is £12,800.
- D) The arithmetic is wrong and the count is wrong.

**Correct answer: B**

**Explanation:** Step 1: verify the multiplication: 60 × £230 = £13,800 — the arithmetic is correct, eliminating options C and D. Step 2: compare counts: invoiced 60 versus registered 52 — a difference of 8 licences. Step 3: value the difference: 8 × £230 = £1,840. So option B. This tests whether a candidate follows through with the professional response as much as the arithmetic: a count mismatch is a query, not an accusation — perhaps licences cover test servers not in the register, or perhaps the supplier's count is stale from before decommissioning. The duty to work with and support third parties includes exactly this: reconciling supplier figures against a team's own records and raising discrepancies factually, and either outcome improves accuracy — £1,840 of public money justifies the ten minutes of checking.

**Question 9 (moderate) — Reading a utilisation trend chart**

A chart shows month-end memory utilisation for a virtualisation host over six months: March 58%, April 61%, May 65%, June 68%, July 72%, August 75%. The host must stay below 85% to guarantee failover capacity. If the trend continues at the same average monthly rate, in which month will the host first breach 85%?

- A) October
- B) November
- C) December
- D) January

**Correct answer: B**

**Explanation:** Step 1: find the average monthly growth: total rise = 75 − 58 = 17 percentage points over 5 intervals; 17 ÷ 5 = 3.4 points per month. Step 2: project forward from August's 75%: September ≈ 78.4%, October ≈ 81.8%, November ≈ 85.2%. Step 3: the first month at or above 85% is November — option B. October (option A) reaches only 81.8%, so it is the common off-by-one answer for anyone projecting from the wrong starting month or using 4 intervals. This tests two disciplines: dividing the total change by the number of intervals (5 gaps between 6 data points, not 6), and projecting from the last actual figure. A strong candidate's answer notes the operational payoff: roughly two months' planning horizon to migrate guests, add memory, or rebalance the cluster — a **Service focus** framework of "measure, project, act before the threshold" that turns monitoring history into scheduled work rather than emergencies.

**Question 10 (hard) — Weighted availability across services**

Availability is reported for three services: Service A (email relay) 99.8%, Service B (file service) 99.2%, Service C (print service) 98.5%. The services handle 60%, 30%, and 10% of user activity respectively. What is the activity-weighted average availability across the three services?

- A) 99.17%
- B) 99.49%
- C) 99.62%
- D) 99.50%

**Correct answer: B**

**Explanation:** Weight each availability by its activity share and sum the products. Step 1: Service A: 99.8 × 0.60 = 59.88. Step 2: Service B: 99.2 × 0.30 = 29.76. Step 3: Service C: 98.5 × 0.10 = 9.85. Step 4: sum: 59.88 + 29.76 = 89.64; 89.64 + 9.85 = 99.49. The activity-weighted average availability is 99.49% — option B. Option A (99.17%) is the simple unweighted mean of the three figures, the classic error: it treats the little-used print service as equal in importance to the heavily used email relay, dragging the figure down unfairly. Options C and D are near-miss distractors designed to punish rounding guesses. This tests two things: whether a candidate checks that the weights themselves total 100% before starting, and whether the final addition is re-verified by regrouping (a strong candidate's answer does this, since transpositions in the last step are the most common calculation error) — weighted averages appear whenever services differ in size, and reporting the unweighted mean misstates the experience users actually had.

**Question 11 (hard) — RAID and usable capacity**

Storage is being designed for a new file service, with 12 disks of 4 TB each. Option 1: RAID 10 (mirrored pairs striped together) gives usable capacity of half the raw total. Option 2: RAID 6 gives usable capacity of the raw total minus two disks' worth. The service needs 30 TB usable. Which statement is correct?

- A) Only RAID 10 meets the requirement.
- B) Only RAID 6 meets the requirement.
- C) Both meet the requirement.
- D) Neither meets the requirement.

**Correct answer: B**

**Explanation:** Step 1: raw capacity = 12 × 4 TB = 48 TB. Step 2: RAID 10 usable = 48 ÷ 2 = 24 TB — below the 30 TB requirement, so RAID 10 fails. Step 3: RAID 6 usable = 48 − (2 × 4) = 48 − 8 = 40 TB — meets the requirement with 10 TB of headroom. Therefore only RAID 6 qualifies — option B. The arithmetic is simple; the design judgement it feeds is the point: RAID 10 buys performance and fast rebuilds at a 50% capacity cost, while RAID 6 buys capacity and double-disk failure tolerance at a write-performance cost. This tests whether a candidate recognises that a capacity calculation is usually the first filter in a **Systems design** decision, not the whole decision — if the requirement had been 20 TB, both would pass and the decision would move to performance and rebuild-time criteria. A strong candidate's answer also notes that showing this arithmetic explicitly in detailed designs is what "effectively document all work using required standards" looks like in practice.

**Question 12 (hard) — Change window feasibility with combined tasks**

A migration change requires, in sequence: pre-checks (25 minutes), data copy of 300 GB over a link sustaining 100 MB/s, verification (35 minutes), and cutover (20 minutes). The agreed window is 03:00 to 06:00. Rollback, if needed, takes 30 minutes and must be complete by 06:00. By what time must the go/no-go rollback decision be made, and how much contingency does the plan have before that decision point? (Use 1 GB = 1,000 MB.)

- A) Decision by 06:00; contingency 50 minutes.
- B) Decision by 05:30; the plan finishes exactly at the decision point with no contingency.
- C) Decision by 05:00; contingency 10 minutes.
- D) Decision by 05:30; contingency 20 minutes.

**Correct answer: D**

**Explanation:** Work out the two halves separately: the decision deadline, then the plan duration. Step 1 — decision deadline: rollback takes 30 minutes and must be complete by 06:00, so the last safe moment to decide "roll back" is 06:00 − 30 minutes = 05:30. This is the binding constraint, not the raw window end — option A misses it entirely. Step 2 — copy time: 300 GB = 300,000 MB; 300,000 ÷ 100 MB/s = 3,000 seconds = 50 minutes. Step 3 — total planned duration: 25 + 50 + 35 + 20 = 130 minutes. Step 4 — finish time: 03:00 + 130 minutes = 05:10. Step 5 — contingency: the work should be verifiably complete by 05:10, and the rollback decision can be deferred until 05:30, so the plan can absorb 20 minutes of overrun before the decision point — option D. Option B assumes a 150-minute plan (a common slip: misreading the copy as 70 minutes); option C invents a 05:00 deadline by subtracting a full hour. This item tests window feasibility as task arithmetic plus the rollback deadline, and whether a candidate recognises that the rollback deadline almost always binds first — showing exactly this calculation in a change record is what makes approvers trust a change.

### Administration tips

- **Score for whether a candidate identifies the correct base before dividing** — percentage change uses the original value; compliance uses the required total; weighted averages use activity shares.
- **Watch for whether a candidate writes units at every step** and checks they cancel sensibly.
- **Note whether a candidate distinguishes counts from rates** when comparing rows in a table.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the weighted-availability item (Question 10) to observe whether a candidate weights by size** rather than taking an unweighted mean of unequal groups.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that compares a count against a rate** — 72 patched servers is not better than 92% compliance.
- **Accepting an unweighted average over unequal groups** as if it were the true overall figure.
- **Crediting a base-value error in a percentage-change item** — reductions and increases are measured against the starting figure, never the ending one.
- **Rewarding a rounded-down capacity requirement.** Servers, licences, and disks come in whole units; 4.13 of anything means 5.
- **Missing when a candidate loses the rollback deadline in a window calculation** — the binding constraint is usually "rollback must complete by close", not the window's raw length.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands, evaluates, and acts on written information of the kind this role genuinely handles: departmental policies, change and incident procedures, supplier contract clauses, vendor advisories, technical documentation, and operational emails. The dominant format presents a short passage followed by statements to judge as **True** (supported by the passage), **False** (contradicted by the passage), or **Cannot say** (neither supported nor contradicted). Supporting formats include best-summary questions, inference questions, and clear-writing judgements where the candidate selects the most effective rewrite of a poorly drafted communication.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. The governing rule throughout: judge every statement strictly against the passage, not against technical knowledge or experience. This is the hardest discipline for experienced engineers, who know so much that the passage does not say — the test deliberately probes whether that knowledge can be kept from contaminating the reading.

Employers use verbal reasoning tests for infrastructure engineers because, at this level, misread text becomes misconfigured systems. Departmental policy defines what a candidate may build and how; supplier advisories define what must be patched and by when; handover notes and change records are how work becomes safely operable by others. The role summary is explicit that solutions are supported and maintained "as directed and according to departmental policy" — and following policy precisely presumes reading it precisely. There is also the outbound direction: the role requires that all work is documented "using required standards", and engineers who write clearly reduce incidents, shorten handovers, and make their own work auditable. Verbal assessments sample both abilities — precise comprehension and sound judgement about clarity — in a standardised, job-relevant way.

### How this assessment maps to the role

- **Reading policy and control language precisely** maps to the **Information security** skill: explaining security controls, and building according to departmental policy, depends on parsing the exact force of "must", "may", "should", and their conditions.
- **Following and evaluating procedures** maps to the **IT infrastructure** skill and the duty to support services as directed: runbooks, vendor documentation, and change procedures reward literal, complete reading — and punish the confident skim.
- **Distinguishing statement from inference** maps to the **Problem management** and **Troubleshooting and problem resolution** skills: incident records state observations; causes are established by investigation, not by reading between lines — the exact discipline "Cannot say" trains.
- **Comprehending supplier communications** maps to the duty to work with and support third parties: contract clauses, support notices, and end-of-life advisories create obligations and deadlines a team must extract accurately.
- **Judging clear writing** maps to the **Systems design** documentation duty: producing detailed designs and documenting all work to required standards means recognising — and writing — prose a colleague can act on without ambiguity.
- **Understanding standards texts** maps to the **Modern development standards** skill: explaining the most important principles and applying them under guidance starts with digesting the written standards accurately.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — True/False/Cannot say on a change policy**

Passage: "All changes to production infrastructure require an approved change record before implementation. Standard changes — pre-approved, low-risk, repeatable changes — are recorded but do not require individual approval. Emergency changes may be implemented before a record is raised, provided a record is completed within 24 hours of implementation."

Statement: "A standard change may be implemented without any record being created."

- A) True
- B) False
- C) Cannot say
- D) True, provided the change is low risk

**Correct answer: B**

**Explanation:** The passage distinguishes two obligations: approval and recording. Standard changes escape individual approval, but the text says they "are recorded" — recording still applies. The statement claims no record is needed, which the passage contradicts: False. Option D fails for the same reason — low risk removes the approval step, not the record. This tests whether a candidate tracks each obligation in a policy separately, since sentences frequently relax one requirement while silently retaining another — in real change management, the record is what makes an unattended 2 a.m. configuration difference explicable three weeks later, and auditors treat unrecorded changes as unauthorised regardless of their risk level.

**Question 2 (easy) — Comprehension of a vendor advisory**

Passage (vendor advisory): "A vulnerability in the management interface of AppGate 400-series devices allows unauthenticated remote code execution. Devices running firmware 7.2 or later are not affected. For affected devices, apply hotfix HF-2214 immediately. As an interim mitigation only, restricting management-interface access to the administrative VLAN prevents exploitation from other networks; this does not remove the vulnerability."

Statement: "Restricting management access to the administrative VLAN removes the vulnerability from affected devices."

- A) True
- B) False
- C) Cannot say
- D) True, if the restriction is applied immediately

**Correct answer: B**

**Explanation:** The advisory could not be plainer: the VLAN restriction "does not remove the vulnerability" — it only "prevents exploitation from other networks" as an "interim mitigation only". The statement claims removal, which the passage explicitly contradicts: False, and option D's timing condition changes nothing. This tests the mitigation/remediation distinction, one of the most operationally important reading points in **Information security** work: a mitigation reduces exposure while the weakness remains; remediation removes the weakness. A strong candidate's answer notes that teams reading mitigations as fixes leave vulnerabilities in place indefinitely, and that triaging an advisory means extracting the affected condition, the remediation, and any interim mitigations separately, never letting the third substitute for the second.

**Question 3 (easy) — Cannot say discipline on a service report**

Passage: "In quarter two, the storage service achieved 99.9% availability, exceeding its 99.5% target. Two incidents occurred, both resolved within their target resolution times. Capacity utilisation ended the quarter at 71%."

Statement: "The storage service will meet its availability target in quarter three."

- A) True
- B) False
- C) Cannot say
- D) True, because the service exceeded its target in quarter two

**Correct answer: C**

**Explanation:** The passage reports quarter two only. A statement about quarter three is a prediction, and past performance — however encouraging — neither guarantees nor precludes future performance; the passage makes no claim about the future at all. Not supported, not contradicted: Cannot say. Option D names the exact cognitive slip being tested: converting evidence of past performance into certainty about the future. This tests that discipline directly — the professional habit is to keep observed history and forward projection explicitly separate, and to label projections as projections with their assumptions stated, since this same trap ("the service has always met its target" quietly becoming "the service will meet its target") drives real risk decisions in planning meetings.

**Question 4 (easy) — Choosing the clearest handover note**

A handover note about an unresolved issue is required. Which version is most effective?

- A) "There were some problems with the backup thing earlier, might be worth keeping an eye on it."
- B) "Backup job BK-114 (finance file server, PFIFS01) failed at 01:20 with 'destination unreachable'. I verified the network path at 08:30 — now clear — and re-ran the job at 08:45; it is in progress, about 40% complete. If it fails again, the runbook is KB-0231; escalate to the storage team via the on-call rota."
- C) "BK-114 failed. Re-run in progress. See KB-0231."
- D) "The backup infrastructure experienced an anomalous failure event which has been subjected to remedial re-execution and is currently pending completion assessment."

**Correct answer: B**

**Explanation:** A handover note succeeds when the reader can act without finding the writer. Option B delivers every element of actionability: what failed (job, server, service), when and how (time, error message), what has been done (verification, re-run, current progress), and what to do next (runbook reference, escalation route). Option A is vague on every axis. Option C is accurate but incomplete: it omits the error, the verification already done, and the escalation route, forcing the reader to rediscover the morning's work. Option D is the pompous passive at its worst — many words, no facts a responder can use. This tests the documentation duty — "effectively document all work using required standards" — that is exercised every time a note like this is written; the four-part pattern (what, when, done, next) is worth expecting as a reflex, since incidents change shifts and the note is the only memory that survives the handover.

**Question 5 (moderate) — Inference across a support contract clause**

Passage (contract extract): "The supplier will respond to Priority 1 incidents within 30 minutes and restore service within 4 hours, measured from the customer's logging of the incident in the supplier's portal. Incidents reported by telephone are logged by the supplier on the customer's behalf within 15 minutes of the call. Failure to meet restoration targets in two consecutive months triggers service credits under Schedule 4."

Statement: "A Priority 1 incident reported by telephone at 10:00 must be restored by 14:15 at the latest for the supplier to meet its target."

- A) True
- B) False
- C) Cannot say
- D) True, but only if service credits have been triggered

**Correct answer: A**

**Explanation:** Chain the clauses. Telephone reports are logged by the supplier "within 15 minutes of the call" — so a 10:00 call is logged by 10:15 at the latest. The 4-hour restoration clock runs "from the customer's logging of the incident in the supplier's portal" — here, the logging done on the customer's behalf, so the clock starts no later than 10:15, making the latest compliant restoration 14:15. Every link is in the passage; joining them is supported inference, so True. Option D confuses the remedy mechanism (credits after two consecutive failing months) with the target itself. This tests exactly how supplier agreements must be read in the duty to work with and support third parties: obligations are usually assembled from two or three separated clauses — a target, a measurement definition, and a start-the-clock rule — and the measurement definition is where suppliers and customers most often discover they disagree.

**Question 6 (moderate) — Reading a security standard's conditions**

Passage: "Administrative access to servers must use individual named accounts. Shared administrative accounts are permitted only where a system cannot technically support individual accounts; in such cases, the shared credential must be stored in the approved password vault, checked out per use, and rotated after each checkout. Storing credentials in documents, scripts, or configuration files is prohibited in all circumstances."

Statement: "A team may use a shared administrative account for a legacy system that cannot support individual accounts, keeping its password in an encrypted spreadsheet that only administrators can open."

- A) True
- B) False
- C) Cannot say
- D) True, because the spreadsheet is encrypted and access-controlled

**Correct answer: B**

**Explanation:** Two rules apply, and both must be satisfied. The shared account itself is permitted — the legacy system meets the "cannot technically support individual accounts" condition. But the storage requirement is specific: the approved password vault, with per-use checkout and rotation. An encrypted spreadsheet is a "document", and the final sentence prohibits credential storage in documents "in all circumstances" — an absolute clause that admits no exception for encryption or access control. One requirement satisfied plus one violated equals non-compliance: False. Option D is the realistic rationalisation — "it's encrypted, so surely it's fine" — that the absolute wording exists to defeat. This tests the reading technique of verifying each condition of a conditional permission independently and giving phrases like "in all circumstances" full blocking force, precisely how the **Information security** skill operates when colleagues propose almost-compliant arrangements.

**Question 7 (moderate) — Main point of a standards passage**

Passage: "Infrastructure as code brings the disciplines of software development to infrastructure operations. When server configurations are defined in version-controlled files rather than applied by hand, every change has an author, a timestamp, and a reviewable difference. Environments can be rebuilt identically on demand, which turns disaster recovery from a bespoke crisis into a routine deployment. Hand-built servers, by contrast, accumulate undocumented changes until no one can say with confidence how they work. The barrier to adoption is rarely tooling, which is mature, but habit: teams must stop making direct changes, even small ones, and that discipline is harder than any technology."

What is the main point of the passage?

- A) Infrastructure-as-code tooling is not yet mature enough for production use.
- B) Infrastructure as code delivers traceability and reproducibility, and the main obstacle to adoption is behavioural discipline rather than technology.
- C) Disaster recovery is impossible without infrastructure as code.
- D) Small direct changes to servers are acceptable if documented.

**Correct answer: B**

**Explanation:** The passage advances two connected claims: the benefits (authored, reviewable changes; identical rebuilds; disaster recovery as routine) and the obstacle (habit, not tooling — "that discipline is harder than any technology"). Option B captures both. Option A contradicts the passage, which calls tooling "mature". Option C overstates: the passage says infrastructure as code makes disaster recovery routine, not that recovery is otherwise impossible — a candidate should be alert to answer options that convert a comparative advantage into an absolute necessity. Option D contradicts the passage's insistence that teams stop direct changes "even small ones". This tests identifying a two-part main point, part of the **Modern development standards** skill of explaining the most important principles and applying them under guidance.

**Question 8 (moderate) — True/False/Cannot say on an incident report**

Passage (incident report): "At 11:42 the load balancer marked both application servers as unhealthy and stopped routing traffic, causing a complete service outage. Investigation found that a certificate on the health-check endpoint had expired at 11:40. The certificate had been excluded from the automated renewal system when the endpoint was rebuilt in March. Service was restored at 12:15 by temporarily disabling certificate validation on the health check, and a correctly issued certificate was deployed at 14:30."

Statement: "The engineer who rebuilt the endpoint in March failed to follow the rebuild procedure."

- A) True
- B) False
- C) Cannot say
- D) True, because the certificate was excluded from renewal

**Correct answer: C**

**Explanation:** The report establishes a factual chain: expiry at 11:40, health checks failing at 11:42, exclusion from automated renewal dating from the March rebuild. What it does not establish is why the exclusion happened — the rebuild procedure may not have covered renewal enrolment at all (a procedure gap), the enrolment may have failed silently (a tooling fault), or an engineer may indeed have missed a step. The statement asserts one specific explanation among several the passage leaves open: Cannot say. Option D repeats the fact of exclusion as if it identified a culprit — facts about the system are not findings about a person. This tests the distinction that carries directly into **Problem management** practice: good problem records separate observed facts from attributed causes, and any statement naming fault, intention, or motive deserves special suspicion, since passages rarely support them.

**Question 9 (moderate) — Evaluating an argument about third-party support**

Passage (email from a colleague): "We should bring storage support in-house when the supplier contract ends. The supplier took six hours to resolve last month's array fault, and we pay them £85,000 a year. Our own team knows the environment better than any supplier ever will, so we'd get faster fixes for free."

Which is the strongest criticism of the argument?

- A) Suppliers should never be criticised in writing.
- B) The argument generalises from a single incident, and "for free" ignores the real costs of in-house support — training, tooling, spare parts, and out-of-hours cover — as well as losing the supplier's specialist escalation routes.
- C) £85,000 a year is objectively cheap for storage support.
- D) The team does not know the environment better than the supplier.

**Correct answer: B**

**Explanation:** Test the argument's evidence and its accounting. Evidence: one six-hour resolution is a sample of one — it may be typical or exceptional, and the contract's target for that incident class is unstated. Accounting: "for free" is the fatal flaw — in-house support costs staff time, training and certification, diagnostic tooling, spares holding, and an out-of-hours rota; it also forfeits the supplier's access to manufacturer engineering escalation for complex faults. Option B captures both failures. Options C and D are counter-assertions, not criticisms of the reasoning. Option A is irrelevant. This tests weighing an argument like this, which is a live part of the duty to work with and support third parties: contract renewal decisions deserve total-cost comparison and representative performance data, and a strong candidate's answer asks "what does the full year's incident data show, and what would in-house actually cost?"

**Question 10 (hard) — Interacting conditions in an operational policy**

Passage: "Servers may be added to the production network only after: completion of a security build review; enrolment in monitoring; and enrolment in the backup service, except where the server is explicitly classified as stateless, in which case backup enrolment is not required. A server's stateless classification must be recorded in the configuration management database (CMDB) and approved by the service owner. Unapproved classifications are treated as if the server were stateful."

Statement: "A server whose stateless classification is recorded in the CMDB but not yet approved by the service owner may be added to the production network without backup enrolment, provided the build review and monitoring enrolment are complete."

- A) True
- B) False
- C) Cannot say
- D) True, because the classification is recorded in the CMDB

**Correct answer: B**

**Explanation:** Follow the classification rules to their conclusion. The backup exemption applies only to servers "explicitly classified as stateless", and classification requires two elements: CMDB record AND service-owner approval. This server has the record but not the approval — and the final sentence resolves exactly this case: "unapproved classifications are treated as if the server were stateful." A stateful server requires backup enrolment before joining production. The statement claims the exemption applies: False. Option D stops at the first condition and ignores the second — the standard trap in two-condition rules. This tests recognition of the drafting pattern common in real infrastructure policy: a general rule, an exception, conditions on the exception, and a default for incomplete cases — the default clause ("treated as if...") is the most powerful sentence in the passage, and spotting it quickly is a hallmark of engineers who build "according to departmental policy" rather than a half-remembered version of it.

**Question 11 (hard) — Inference from a migration plan**

Passage: "The virtualisation platform migration will move 240 guest servers from the legacy cluster to the new cluster over twelve weekends, in batches of 20. Each batch is selected two weeks in advance and its service owners notified. A batch may be deferred at the service owner's request no later than five working days before its scheduled weekend; deferred servers join the final batch. The final batch weekend has capacity for 40 servers. If deferrals would take the final batch above 40, the migration schedule will be extended."

Statement: "If 25 servers are deferred during the migration, the schedule will be extended."

- A) True
- B) False
- C) Cannot say
- D) True, because 25 exceeds the batch size of 20

**Correct answer: A**

**Explanation:** Work the arithmetic the passage implies. Twelve batches of 20 equals 240 servers, so the final batch already contains 20 scheduled servers. Deferred servers "join the final batch", so 25 deferrals would make the final batch 20 + 25 = 45 servers. The final weekend's capacity is 40, and the passage states that if deferrals take the final batch above 40, the schedule "will be extended". Since 45 exceeds 40, extension follows necessarily: True. Note why option D, though reaching the same verdict, reasons wrongly: the batch size of 20 is not the constraint — the final batch's special capacity of 40 is, and 21 deferrals (making 41) would already trigger extension while 20 would not. This tests whether a candidate extracts the quantities embedded in prose, computes, then returns to the conditional language to see what the result triggers — exactly the skill needed when reading a migration plan a team must actually deliver.

**Question 12 (hard) — Judging a complete communication**

Passage (draft email to service owners, written by a colleague for review): "Subject: Server patching. We will be patching servers this month as usual. Some downtime may occur on some systems at some point during the maintenance windows. If you experience issues afterwards, contact the service desk. No action is required."

The email will go to owners of services whose servers will be rebooted between 22:00 and 02:00 on specific dates listed in the change schedule. Which criticism of the draft is most important?

- A) The subject line should be more exciting to encourage opens.
- B) The email omits the specific dates, times, and affected systems, so "some downtime on some systems at some point" leaves owners unable to warn their users or plan around the reboots — and "no action is required" is arguably wrong, since owners should check their service afterwards.
- C) The email is too short; professional emails should be at least three paragraphs.
- D) The email should not mention downtime, to avoid alarming service owners.

**Correct answer: B**

**Explanation:** Judge the draft against its purpose: enabling service owners to protect their users through a known, scheduled disruption. The information that achieves this exists — specific dates, the 22:00–02:00 window, and the affected systems are all in the change schedule — and the draft withholds all of it behind three "some"s. An owner reading it cannot tell whether their service is affected, when, or for how long; and "no action is required" discourages the one genuinely useful action, a post-patching service check. Option B identifies both failures. Options A and C confuse style metrics with effectiveness; option D proposes concealment, which trades short-term calm for justified anger at unannounced downtime. This tests the reviewing skill that is part of the documentation duty: before approving any operational communication, asking "what decision or action should the reader be able to take, and does the text contain everything that requires?"

### Administration tips

- **Score for whether a candidate distinguishes False from Cannot say** — a mitigation that "does not remove" a vulnerability, and a fact about a system that is not a finding about a person, are the two clearest tests of this in the set.
- **Note whether a candidate tracks each obligation in a policy passage separately** rather than merging them.
- **Watch for whether a candidate gives absolute clauses** ("in all circumstances", "regardless of") their full force.
- **Keep timing consistent** across candidates for this level.
- **Use the clear-writing items (Questions 4 and 12) to observe whether a candidate values actionable content** over length, formality, or tone.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built from outside expertise rather than the passage.** A candidate's own knowledge of certificates, backups, and RAID may go beyond, or differ from, what the passage says; only the passage counts.
- **Treating "not mentioned" as "false".** Absence of support means Cannot say; False requires contradiction.
- **Missing when a candidate under-reads a default clause** — sentences like "unapproved classifications are treated as stateful" resolve the ambiguous cases a question targets.
- **Accepting the right verdict for the wrong reason.** An option that reaches a correct-sounding conclusion through faulty reasoning is still wrong when the item asks which statement is supported or which criticism is strongest.
- **Crediting an answer that confuses mitigation with remediation** in an advisory passage.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace scenarios and asks the candidate to evaluate possible responses — choosing the most effective, identifying the most and least effective, ranking all options, or rating each independently. Unlike the other assessment types, SJTs are scored against the consensus of experienced professionals and the organisation's valued behaviours rather than against a single provable answer. The typical format is an online test of 15 to 25 minutes with 10 to 20 scenarios, often untimed or generously timed, because it measures judgement rather than speed.

The scenarios at this level are not about whether the candidate can perform the technical work — that is assumed. They probe the judgement wrapped around the work: what to do when a change misbehaves mid-window, how to handle a third party who cuts corners, when to escalate versus persevere, how to balance a project deadline against an operational risk, and how honestly to communicate when the news is bad. The options are engineered so that several look reasonable; the difference lies in corners cut — an unlogged workaround, a silent assumption, a user impact accepted without communication — or in over-reactions that create new problems while solving old ones.

Employers use SJTs for infrastructure engineers because, at this level, decisions touch live services directly and often alone. Solutions are supported and maintained "as directed and according to departmental policy", issues are owned "until a new owner has been found or the problem has been mitigated or resolved", and the role works daily with third parties whose actions cannot be controlled but whose outcomes must still be answered for. The behaviours that score well are stable and learnable: protect users first, follow the process and improve it when it fails, communicate early and honestly — especially bad news — escalate at the right moment with the right information, and treat colleagues and suppliers with professional respect.

### How this assessment maps to the role

- **Issue ownership under pressure** maps directly to the **Ownership and topic** skill: owning an issue until it is resolved, mitigated, or properly handed over is the behavioural spine of most scenarios — the test probes whether ownership is held without being hoarded.
- **Change and incident discipline** maps to the **IT infrastructure** duty to support and maintain services according to departmental policy: scenarios about mid-change failures, workarounds, and unauthorised shortcuts test whether policy holds when it is inconvenient.
- **Working with third parties** maps to the role-level duty to work with and support third parties providing infrastructure services: scenarios test constructive challenge, verification, and escalation with suppliers.
- **Honest investigation and prevention** maps to the **Problem management** skill: contributing to remedies and preventative measures requires accurate accounts of what happened, including a candidate's own part in it.
- **Security behaviour under social pressure** maps to the **Information security** skill: access requests, credential handling, and policy exceptions test whether controls are applied when a person — sometimes a senior person — pushes back.
- **Team collaboration and quality** maps to the **Systems design**, **Testing**, and **Service focus** skills: scenarios about reviewing others' work, reporting inconvenient test results, and establishing workable frameworks test whether quality is raised without raising conflict.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A change starts going wrong mid-window**

A candidate is implementing an approved change to a storage array at 23:30, inside a window that closes at 02:00. Halfway through, an unexpected warning appears that the documentation does not mention. The remaining steps might work anyway; the rollback procedure is tested and takes 40 minutes. What is the most effective response?

- A) Continue with the remaining steps — the warning is probably cosmetic.
- B) Pause; spend a bounded amount of time investigating the warning against vendor documentation and, if it cannot be positively established as safe to proceed with time for rollback in hand, roll back and reschedule.
- C) Roll back immediately without investigating.
- D) Stop work, leave the array in its current state, and email the team to look at it in the morning.

**Correct answer: B**

**Explanation:** Option B is the disciplined middle path: a time-boxed investigation respects the possibility that the warning is benign, while the rollback deadline (02:00 minus 40 minutes means a decision by 01:20) keeps the safe exit open. The decisive principle is "proceed only on positive knowledge, not on hope" — the burden of proof sits on continuing, not on stopping. Option A gambles a storage array on "probably", and unexplained warnings during storage changes are precisely how data loss happens. Option C is safe but wasteful as a first move: rolling back at the first anomaly, with hours of window remaining and investigation unattempted, throws away the change unnecessarily — although it would become correct once the decision deadline nears. Option D is the genuinely dangerous answer: a half-applied change is an undefined state, and abandoning it converts a controlled situation into tomorrow's incident. This item tests whether the candidate identifies the follow-through the strong answer implies: whatever the decision, the change record should gain the warning, the investigation, and the outcome — the record that helps the next engineer avoid the same surprise.

**Question 2 (easy) — Discovering an earlier mistake**

While reviewing firewall rules for an unrelated task, a candidate notices a rule added three weeks earlier is broader than the change record specified — it permits a whole subnet where it should permit one server. Nothing bad appears to have happened. What is the most effective response?

- A) Quietly correct the rule to match the change record and move on.
- B) Correct the rule promptly through an appropriate change process, tell the team lead what was found, and check logs for any use of the unintended access during the three weeks.
- C) Leave it — the broader rule is working and changing it might break something.
- D) Correct the rule and update the old change record to match what was originally implemented, so the records are consistent.

**Correct answer: B**

**Explanation:** Three obligations arise, and option B meets all of them. Fix the exposure — through process, since firewall changes need records even when they are corrections. Be transparent — telling the team lead converts a private error into organisational learning, and protects the candidate far better than concealment if the log check finds something. Verify impact — three weeks of unintended access must be checked, not assumed innocent; "nothing bad appears to have happened" is an observation about tickets, not about traffic. Option A fixes the hole but hides the history and skips the impact check — the log review is arguably the most important step, and it is the one silence forecloses. Option C normalises an unauthorised exposure because remediation is inconvenient. Option D is the worst: falsifying the original record destroys the audit trail's integrity — records document what happened, not what should have happened — and in security contexts that edit can convert an honest mistake into misconduct. This item tests the fix-tell-verify pattern that the **Information security** and **Problem management** skills are both, at bottom, built on.

**Question 3 (easy) — Third-party engineer proposes an undocumented shortcut**

A supplier engineer is on site to replace a failed power supply in a production server. Partway through, he suggests also updating the server's firmware "while we're here — it takes ten minutes and saves you a visit", although the change record covers only the power supply. What is the most effective response?

- A) Agree — it is efficient, and he is the manufacturer's engineer.
- B) Decline the firmware update for today, explain that it needs its own assessed and approved change, and offer to raise that change and schedule the work properly.
- C) Agree, but ask him not to mention it to anyone.
- D) Decline and report the engineer to his employer for suggesting it.

**Correct answer: B**

**Explanation:** The suggestion is well-meant and genuinely tempting — which is exactly why it appears in SJTs. But firmware updates carry real risk (they can fail, change behaviour, or require reboots), and the change process exists to assess that risk, schedule user communication, and prepare rollback. "While we're here" work is unassessed, unapproved, and unannounced — the classic unauthorised change, whoever performs it. Option B declines cleanly while honouring the underlying good idea: raising a proper change captures the efficiency without the exposure, and treats the supplier as a partner whose suggestion had merit. Option A lets convenience outrank control. Option C adds concealment to the breach — the worst pairing available. Option D over-reacts: the suggestion was routine helpfulness in many commercial contexts, and escalating it as misconduct damages a working relationship the role-level duty to work with and support third parties requires maintaining. This item rewards being firm on the control, warm to the person, and constructive about the path.

**Question 4 (easy) — Conflicting demands on the day**

A candidate planned today for a project task: building two servers a delivery team needs by Friday. At 09:30, monitoring shows a production database server's disk filling rapidly — at the current rate it will be full, and the service down, by mid-afternoon. The database team has not noticed. The disk issue could be worked around by mid-morning, or ignored to stay on plan. What is the most effective response?

- A) Stay on the project task — the database team owns that server.
- B) Alert the database team immediately with the evidence and projection; agree who acts; if it falls to the candidate, address the disk risk first and tell the delivery team the build may slip.
- C) Silently fix the disk issue personally, then resume the project without telling anyone.
- D) Email the database team and continue with the project, assuming they will pick the alert up.

**Correct answer: B**

**Explanation:** A production outage projected for this afternoon outranks a build due Friday — impact and urgency both point the same way. But the scenario's subtlety is ownership: the server belongs to another team, so the first move is a direct, evidenced alert (rate of growth, projected full time), followed by explicit agreement on who acts — which is the **Ownership and topic** skill working properly: own the issue until it has an owner, not necessarily own the fix. Option B also handles the second-order consequence honestly: if the risk falls to the candidate, the delivery team learns about the possible slip now, not on Friday. Option A hides behind organisational boundaries while a preventable outage approaches — "not my server" is never "not my problem" when the information is already held. Option D discharges the duty in form but not substance: an unacknowledged email is not a transfer of ownership. Option C fixes the disk but silently changes another team's server (an unauthorised change from their perspective) and leaves the underlying cause uninvestigated.

**Question 5 (moderate) — Test results block a deadline**

A candidate is executing the test scripts for a new file service that a programme wants live on Monday. On Friday morning, one test fails: permissions on a shared area behave incorrectly in an edge case involving nested groups. The programme manager, under pressure, says: "It's one test out of forty. Mark it as passed with a note, and we'll fix it after go-live." What is the most effective response?

- A) Mark it passed with a note as instructed — the programme manager owns the deadline.
- B) Record the test accurately as failed, explain the actual risk in plain terms, and escalate the go/no-go decision with options — fix now, go live with a documented known issue and mitigation, or delay — to whoever owns the service risk.
- C) Refuse to sign off anything and tell the programme the launch is cancelled.
- D) Mark it failed but say nothing further, leaving the programme to notice.

**Correct answer: B**

**Explanation:** Two things must both survive this scenario: the integrity of the test record and the legitimacy of the decision. A test record that says "passed" when the test failed is a false record — the **Testing** skill's core discipline is that results are recorded as observed, then decisions are made about them. But accurate recording alone (option D) is passive: dropping a failed result into a report without explanation invites exactly the wrong outcome, a surprise in production. Option B does the full professional job — record accurately, translate the failure into risk language a decision-maker can weigh, and route the go/no-go to the risk owner with real options. Note that going live with a documented known issue can be a perfectly good decision — the difference between that and option A is that it is made knowingly by the right person, not embedded in a falsified record by the wrong one. Option C overcorrects: cancelling the launch is not the candidate's call either. This item tests whether a candidate keeps records straight under pressure to soften them.

**Question 6 (moderate) — A colleague's design has a flaw**

A teammate has produced a physical design for a service and asks the candidate to look it over before submission. Both redundant network links from a critical server are routed through the same physical switch — a single point of failure that contradicts the logical design's resilience requirement. The teammate is defensive about criticism and the design is due tomorrow. What is the most effective response?

- A) Say the design looks fine to avoid conflict — the reviewers will probably catch it.
- B) Raise it directly and specifically with the teammate today — framed against the logical design's requirement rather than as personal criticism — and offer to help rework the affected section before the deadline.
- C) Say nothing to the teammate but email their line manager about the flaw.
- D) Fix the design personally without telling them.

**Correct answer: B**

**Explanation:** The flaw is objective — the logical design demands resilience the physical design does not deliver — which makes the conversation easier than it feels: option B anchors the feedback in the requirement rather than in judgement of the person, which is precisely how defensiveness is defused. Offering rework help converts critic into collaborator and respects the deadline. Option A fails everyone: the teammate submits a flawed design, reviewers may or may not catch it, and if it ships, a single switch failure someday takes down a "resilient" service. Option C is a trust-destroying escalation of something a peer conversation resolves. Option D disrespects authorship and forfeits the learning. This item tests whether reviewing others' work honestly and kindly is treated as how the **Systems design** skill scales beyond one keyboard — SJTs consistently reward the direct-specific-supportive pattern.

**Question 7 (moderate) — Supplier misses a deadline that affects a commitment**

A third-party provider was due to deliver configured network equipment today; the project plan calls for installation this week, with the service owner expecting completion Friday. The supplier's account manager emails: the delivery will be five working days late, with no explanation. What is the most effective response?

- A) Wait for the equipment and explain the delay to the service owner on Friday when the deadline is missed.
- B) Reply demanding the equipment by tomorrow and threatening contract termination.
- C) Inform the service owner and team lead today with the revised dates and a re-planned schedule; ask the supplier for the cause of the delay, a firm new date, and any options to mitigate; and record the miss for the supplier's performance review.
- D) Source equivalent equipment from another supplier immediately.

**Correct answer: C**

**Explanation:** The delay is now a fact; the variables still controllable are communication, mitigation, and record. Option C works all three: telling the service owner today converts Friday's broken promise into today's managed re-plan (bad news ages terribly — early disclosure preserves trust); pressing the supplier for cause, firm date, and options treats them as a partner while testing whether five days is real; and recording the miss feeds the performance management the role-level duty to work with third parties implies. Option A chooses comfortable silence and makes the service owner's Friday worse than it needs to be. Option B is theatre: threats that cannot be executed spend relationship capital and speed nothing up. Option D exceeds authority and ignores procurement rules that govern government purchasing. This item tests the pattern: communicate early, mitigate realistically, escalate proportionately, record factually.

**Question 8 (moderate) — Asked for access outside the process**

A developer the candidate works with regularly and trusts messages: "Deployment's broken and the release is tonight. Can you give my account temporary admin on the app servers? The access request queue is two days deep. I'll only need it for an hour." Granting access without an approved request is against policy, but is technically possible. What is the most effective response?

- A) Grant it for an hour — the developer is trusted, and the release matters.
- B) Decline to grant unapproved access; instead, offer the legitimate fast paths — run the specific commands for them under the candidate's own authorised access, or invoke the emergency access procedure if one exists, or help get the request expedited.
- C) Decline and end the conversation — their deadline is not the candidate's problem.
- D) Grant it, but watch everything they do.

**Correct answer: B**

**Explanation:** The request is sympathetic, time-pressed, and from someone trustworthy — which is exactly the profile of most real access-control failures. The policy exists precisely because individual engineers cannot see what approvers check. Option B holds the control while genuinely solving the problem, and the first alternative it offers is usually the right one: executing specific commands under the candidate's own authorised access keeps accountability with an authorised person and gives the developer what they actually need — the deployment fixed, not the privilege itself. Emergency access procedures and expedited approvals are the other legitimate routes, and knowing them is part of applying the **Information security** skill in practice rather than in theory. Option A creates unauthorised, unaudited admin access on production — trust does not substitute for authorisation. Option D adds supervision to a breach without making it authorised. Option C keeps the rule and abandons the colleague. This item tests whether the rule is held while the need is met and the relationship stays intact.

**Question 9 (moderate) — An incident exposes a documentation gap**

Overnight, the on-call engineer struggled for two hours with a failed service built by the candidate, because the recovery runbook was missing a step performed from memory — a dependency that must restart in a specific order. The on-call engineer eventually worked it out and mentions it the next morning, tiredly but without hostility. What is the most effective response?

- A) Point out that a competent engineer should have worked it out faster.
- B) Thank them, fix the runbook today with the missing step and the reason for the ordering, ask them to review the fix, and check whether other runbooks carry similar from-memory gaps.
- C) Apologise and plan to update the runbook when there is next some quiet time.
- D) Suggest that in future they phone the candidate at home rather than rely on runbooks.

**Correct answer: B**

**Explanation:** The incident revealed a specific, fixable failure: knowledge held that the documentation does not — precisely the gap the **Systems design** documentation duty exists to close. Option B closes it with every professional refinement: same-day action (runbook gaps are live operational risk), the reason for the ordering included (rationale is what lets a stressed engineer adapt when reality deviates from the script), review by the person who found the gap (they know exactly what confused them at 3 a.m.), and the generalisation step — auditing other runbooks — which converts one incident into systematic prevention, the essence of the **Problem management** skill. Option C concedes the point but leaves the risk open indefinitely. Option A attacks the person the gap injured — reputationally corrosive and factually backwards. Option D institutionalises the problem: a service recoverable only via one person's phone number is a single point of failure. This item tests whether documentation debt is paid down promptly, since it is invisible until 3 a.m.

**Question 10 (hard) — Workaround becoming permanent**

Six weeks ago, during a major incident, a team applied a temporary workaround: disabling certificate validation between two internal services. The incident record says it would be reverted "within days" once the certificate issue was fixed. Today it emerges that the certificate was fixed five weeks ago, but the workaround was never reverted — validation is still off, nobody noticed, and reverting requires a change with a small outage. The team lead is focused on a big migration and unlikely to welcome extra work. What is the most effective response?

- A) Leave it — it has been fine for six weeks, and the migration is the priority.
- B) Revert it immediately without a change record, since it merely restores the intended state.
- C) Raise it today with the team lead as a security exposure with a specific proposal — a small assessed change to re-enable validation — and if it is deprioritised, ensure the risk is explicitly recorded and visible rather than forgotten.
- D) Add a note to the incident record that reversion is pending, and wait for someone to schedule it.

**Correct answer: C**

**Explanation:** Disabled certificate validation means the two services no longer verify each other's identity — a real, ongoing security exposure, invisible precisely because everything "works". Option C does the three things the situation demands. It surfaces the issue today, because silent known exposures are the ones that appear in breach post-mortems. It arrives with a proposal, not just a problem — a small assessed change is easy to say yes to, and easy for a busy lead to slot around a migration. And its final clause handles the realistic outcome that the lead says "not now": an explicitly recorded, visible risk is a decision the organisation has made; a forgotten workaround is a decision nobody made. Option A accepts indefinite exposure on the evidence that nothing has failed yet. Option B has a tempting rationale, but "restores intended state" still needs a change record: it causes an outage, and the record is what tells the next engineer why validation behaviour changed. Option D documents the gap where nobody is looking. This item tests proactive ownership of problems nobody assigned — the **Ownership and topic** skill's most valuable form.

**Question 11 (hard) — Balancing honest reporting against team image**

A team's monthly service report, drafted by a colleague, is about to go to the department's service board stating that all backups ran successfully throughout the month. It is known that backups for one system failed on four nights mid-month; the failures were fixed and re-runs completed within a day each time, so no recovery point was ultimately missed beyond 24 hours. The colleague says: "It rounds to fine. The board doesn't need the noise — it makes us look sloppy." The report goes tonight. What is the most effective response?

- A) Let the report go as drafted — the outcome was ultimately fine, and team credibility matters.
- B) Insist the report state the facts accurately but with the context that gives them fair meaning: four backup failures on one system, detected, re-run, and resolved within a day, with root cause and the prevention action taken.
- C) Escalate the inaccuracy directly to the service board chair before the report is sent.
- D) Refuse involvement and let the colleague send whatever they choose.

**Correct answer: B**

**Explanation:** The draft is not a rounding — it is false: "all backups ran successfully" is contradicted by four failures, and boards make risk decisions on these reports. But the colleague's fear points at something real: bare failure counts without context can mislead in the other direction. Option B threads it precisely — accurate facts plus fair context: failures occurred, detection worked, recovery worked, root cause is known, prevention is in place. That account is actually more creditable than "all fine": it demonstrates a team that detects, recovers, and learns. Option A makes the candidate party to a false record and teaches the team that reports are advertising. Option C skips the cheap fix — the report has not gone yet, and a conversation with the drafter resolves it tonight; leaping to the board chair converts a correctable draft into a colleague's public embarrassment. Option D is neutrality that isn't. This item tests the **Service focus** behaviour of honest reporting with fair context, since data feeding decisions must be true, or every downstream decision inherits the error.

**Question 12 (hard) — Handover before leave with an unresolved intermittent problem**

A candidate goes on two weeks' leave tomorrow evening. For the past week, an intermittent problem has been investigated: roughly twice a day, for a few minutes, authentication slows across several services. Evidence has been gathered — times of occurrence, affected services, a suspicion (not yet proven) that it correlates with a directory server's replication schedule — but no root cause. The problem is worsening slowly. No one else has context. Tomorrow is packed with pre-leave tasks. What is the most effective response?

- A) Keep investigating up to the last minute tomorrow — being closest to it might crack it.
- B) Park it until returning from leave — it is intermittent and brief, and the candidate will still be closest to it in two weeks.
- C) Today, package the investigation for transfer: write up the evidence, timeline, and hypothesis, brief a named colleague and the team lead in person, agree who owns it in the candidate's absence and its priority given the worsening trend, and log it formally as a problem record if not already done.
- D) Email the notes to the whole team tomorrow evening while leaving, so everyone has the information.

**Correct answer: C**

**Explanation:** This is the ownership-transfer scenario in its purest form, and the deadline structure is the test: transfer takes conversation and questions, so it must happen today, not in tomorrow's crush — option C's timing is as important as its content. The package it describes is the professional standard: evidence and timeline, the hypothesis clearly labelled as unproven (so it guides without anchoring), a named owner (accountability cannot be diffuse), an agreed priority informed by the worsening trend, and a formal problem record (so the investigation survives any individual's memory — the exact purpose of the **Problem management** skill's structures). Option A optimises for a heroic ending and, in the likely case of not cracking it, leaves the worst outcome: no fix and no transfer, with the problem worsening across two unowned weeks. Option B accepts fourteen days of degradation on a worsening fault. Option D transfers information without transferring ownership: an email to everyone is owned by no one, arrives too late for questions. This item tests whether "own the issue until a new owner has been found" is understood to mean the handshake, not the send button.

### Administration tips

- **Score for whether a candidate's response pauses on evidence rather than hope** in a mid-change anomaly item — the burden of proof should sit on proceeding.
- **Watch for whether a candidate protects a record's accuracy over its appearance** — softening, rounding, or backdating a record (test results, change records, service reports) should score low regardless of the stated motive.
- **Note whether a candidate lets trust substitute for authorisation.** Colleagues and suppliers still need approved access and assessed changes.
- **Because these scenarios reward proportionate escalation**, check that a candidate neither escalates first nor never escalates — a direct conversation before a formal one is usually the stronger pattern.
- **Use the handover item (Question 12) to observe whether a candidate transfers ownership**, not just information — a named owner who has accepted and can ask questions, not a broadcast email.

### Common pitfalls to watch for when scoring

- **Rewarding an option that hides behind an ownership boundary** — "their server", "their runbook", "their report" do not neutralise information a candidate holds about a live risk.
- **Crediting an unrecorded fix or undocumented workaround** that solves today's problem at tomorrow's expense.
- **Missing when a candidate confuses information broadcast with ownership transfer.**
- **Accepting an option that continues on hope** rather than pausing at an unexplained anomaly with a safe exit kept open.
- **Rewarding an option that solves a stated problem while creating a governance one** — "while we're here" work, unlogged fixes, and falsified records are the recurring trap in this set.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to an infrastructure engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests parsing naming standards field by field, applying firewall policy literally, tracing script logic through compound conditions, localising a network fault by elimination, and reasoning through scheduling constraints that mix task durations with resource windows. The numeric section tests converting downtime into availability, forecasting disk exhaustion against procurement lead times, sizing backup throughput from data volumes and windows, weighting averages by usage, and working a change window backwards from its rollback deadline. The verbal section tests holding the line between mitigation and remediation, separating recorded facts from attributed blame, assembling contractual obligations from scattered clauses, and judging handover notes and maintenance notices against the only standard that matters — whether the reader can act. The situational judgement section tests the behaviours that define a trusted engineer at this level: pausing changes on evidence rather than hope, correcting one's own mistakes through process and in the open, holding security controls against sympathetic pressure, transferring ownership properly before leave, and keeping records honest when honesty is inconvenient.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can build and support live infrastructure reliably, translate designs faithfully, and exercise sound judgement when a change goes wrong at the worst possible moment — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
