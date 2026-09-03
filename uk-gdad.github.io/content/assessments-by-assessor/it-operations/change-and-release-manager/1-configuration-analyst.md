# Configuration Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for configuration analyst, within the UK Government Digital and Data profession. These assessments are job-specific: rather than abstract puzzles, they use the materials a configuration analyst genuinely handles — configuration management database (CMDB) records, asset registers, discovery scan reports, change control procedures, audit findings, and requests from engineers and a change and release manager.

A configuration analyst provides administrative support to the change and release manager, helps maintain the integrity of the CMDB, and independently solves smaller problems. That is detail work with real consequences: an accurate CMDB is what lets incident responders find the right server at 2am, lets change assessors see what a change will really touch, and lets an organisation know what it owns, where it is, and what state it is in. The four assessment types in this document measure the capabilities that work depends on: cognitive ability (spotting the one record that contradicts the others), numerical reasoning (turning an audit sample into an accuracy percentage), verbal reasoning (reading a data standard or a disposal procedure precisely), and situational judgement (deciding what to do when someone asks to "just tweak a record" without a change reference).

This document is organised into four assessment sections, one per assessment type. Each follows the same pattern: an overview of what the assessment measures and how it usually runs, a mapping of the assessment to the specific skills named in the role, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring. Questions start easy and build gradually.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the mental processes the role actually demands, using practical workplace scenarios rather than abstract puzzles. For a configuration analyst, that means questions built from CMDB records, asset registers, naming conventions, dependency maps, discovery scans, and the procedures that govern how records may be created, changed, and retired.

The typical format is an online, timed test of 15 to 30 minutes with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, against a norm group at this level. Many platforms are adaptive, and separate accuracy and speed reporting is standard; ungraded warm-up questions are usually offered first.

Cognitive assessment matters for this role because its professional value is exactness at scale. A CMDB holds thousands of records, and its usefulness depends on consistency maintainable only by noticing small things: a naming convention broken in one entry, a status field that contradicts a relationship, a server that appears in the register but not in the scan. The role also reasons with structure — if the payroll application depends on a database which depends on a server, then a change to that server touches payroll, whether or not anyone says so out loud. And because the role independently solves smaller problems, it regularly decomposes a puzzle — a sync job that keeps failing, a count that will not reconcile — into causes that can be checked one by one.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Asset and configuration management** skill: maintaining secure configuration and accurate information means recognising conventions — naming patterns, status lifecycles, record structures — and noticing the entry that breaks them.
- **Logical deduction** maps to the **Change management** skill: applying change control procedures under supervision means reasoning from rules to consequences.
- **Error checking** maps to the core duty of helping to maintain the integrity of the CMDB, and to **Asset and configuration management** (verifying the location and state of IT assets).
- **Prioritisation** maps to the **Incident management** skill (identifying and registering incidents and allocating them to the appropriate channel) and the **Ownership and topic** skill.
- **Applied problem solving** maps to the **Problem management** skill and to the role's distinctive phrase "independently solving smaller problems".

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in configuration item names**

The CMDB naming standard for server configuration items is: three-letter site code, hyphen, three-letter platform code, hyphen, three-digit number — for example, "LDS-WIN-014" for a Windows server in Leeds. The candidate is shown these entries:

1. LDS-WIN-015
2. MAN-LNX-002
3. LDS-WIN-16
4. NCL-LNX-101
5. MAN-WIN-033

Which entry breaks the naming standard?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: B**

**Explanation:** Checking each entry against the three parts of the rule: three-letter site code, three-letter platform code, three-digit number. Entries 1, 2, 4 and 5 all fit. Entry 3, "LDS-WIN-16", has only a two-digit number — it should read "LDS-WIN-016". The missing leading zero looks trivial, but in a real CMDB it matters: sorted lists misorder, automated matching against other systems fails, and someone may later create "LDS-WIN-016" as a duplicate of the same machine. This tests consistency checking of exactly the kind a configuration analyst performs daily. A strong candidate restates the rule before checking each option mechanically against it, rather than scanning for what "looks odd" — well-formed oddities (like the three-digit "101" in entry 4) are placed there to distract.

**Question 2 (easy) — Logical deduction from an access rule**

The CMDB procedure states: "Records may only be edited by staff who have completed the data standards training, and every edit must reference an approved change or an approved data correction request." The audit log shows a colleague, Priya, edited a server record yesterday, and the edit references an approved data correction request. Which one of the following conclusions must be true?

- A) Priya has completed the data standards training.
- B) Priya's edit complied with the procedure in full — if she has completed the data standards training.
- C) The edit was authorised by the change and release manager personally.
- D) Priya is a configuration analyst.

**Correct answer: B**

**Explanation:** The procedure imposes two conditions: trained editor, and a valid reference. The audit log confirms the second condition but says nothing about the first. Option A is not guaranteed — the log shows the edit happened, not that it was permitted. Option B is the careful conclusion: the edit satisfied the reference requirement, so full compliance now turns only on the training condition, which is exactly what B states. Option C invents an authoriser the procedure never mentions. Option D guesses at Priya's job from no evidence. This tests concluding only what the evidence guarantees and naming the condition still unverified — the discipline an assessor should look for in how a candidate reads an audit log: one confirmed condition is not the same as compliance.

**Question 3 (easy) — Error checking within a single record**

The candidate reviews a CMDB record before an audit:

- Name: LDS-WIN-021
- Status: Decommissioned
- Decommission date: 12 March
- Location: Leeds data centre, rack B4
- Relationships: "hosts — Payroll application (Live)"
- Last verified: 3 January

What is the most significant inconsistency in this record?

- A) The last verified date is before the decommission date.
- B) A decommissioned server is still recorded as hosting a live application.
- C) The location field should be blank for a decommissioned server.
- D) The name does not match the naming standard.

**Correct answer: B**

**Explanation:** Reading the fields as claims about the world and asking whether they can all be true together: a server decommissioned on 12 March cannot currently be hosting a live payroll application — one of those statements is wrong, and the contradiction is dangerous in both directions: either payroll is really running on a machine everyone believes is switched off, or the relationship is stale and an incident responder chasing a payroll fault will waste time on a dead server. Option A is not an inconsistency — verification naturally happened before decommissioning. Option C is wrong because decommissioned assets still have locations until physically disposed of. Option D is false: the name fits the standard from Question 1. This tests cross-field consistency checking: not "is each field plausible alone?" but "can these fields all be true of the same asset at the same time?"

**Question 4 (moderate) — Prioritisation on a busy morning**

It is 9:00 on Thursday morning. Four items are waiting for the candidate:

1. The change and release manager has asked for the configuration records for tomorrow's change advisory board papers by midday.
2. An engineer has emailed: their team cannot find the record for a network switch they need to modify tonight under an approved change, and they think the record may be missing.
3. The weekly discovery scan report arrived overnight showing 30 new unreconciled discrepancies — the routine review normally done on Thursdays.
4. A colleague mentions in passing that the printers on floor 2 are offline; no ticket exists.

Which sequencing is most defensible?

- A) 1, 2, 4, 3
- B) 4, 2, 1, 3
- C) 2, 4, 1, 3
- D) 3, 1, 2, 4

**Correct answer: C**

**Explanation:** This tests weighing urgency and impact together, and noticing which items are quick. Item 2 blocks an approved change happening tonight — if the switch's record is genuinely missing, the change assessment is working blind, and finding or creating the record takes investigation time that cannot wait until afternoon; it is both urgent and squarely a CMDB-integrity duty, so it leads. Item 4 takes two minutes — identifying and registering the incident and allocating it to the appropriate channel is a small unblocking action that fits next. Item 1 has a hard midday deadline and supports the manager's governance duties. Item 3 is genuinely important but routine and unscheduled beyond "Thursday"; it absorbs whatever time remains. Option A delays the tonight-blocking record hunt behind a midday task; option B puts a two-minute routing job ahead of a time-critical investigation and then still defers the investigation behind nothing else; option D puts routine reconciliation first purely because it arrived first. A strong candidate's answer shows quick unblocking actions slotting in early, hard deadlines protected, and routine work flexing around both.

**Question 5 (moderate) — Deduction across dependency relationships**

The CMDB records these relationships: the HR portal depends on the identity service and on database DB-HR. Database DB-HR runs on server LDS-LNX-007. The identity service runs on servers LDS-LNX-001 and LDS-LNX-002, and stays available as long as at least one of its two servers is running. Tonight's approved change will take LDS-LNX-007 and LDS-LNX-002 offline simultaneously for patching. Assuming the records are accurate, what is the impact on the HR portal during the patching window?

- A) No impact — the identity service stays available on LDS-LNX-001.
- B) The HR portal will be unavailable, because DB-HR will be offline.
- C) The HR portal will be unavailable, because the identity service will be offline.
- D) Cannot be determined from the records.

**Correct answer: B**

**Explanation:** Tracing each dependency separately: the identity service needs at least one of LDS-LNX-001 and LDS-LNX-002; the change takes only LDS-LNX-002 offline, so the identity service survives on LDS-LNX-001 — which rules out C. Database DB-HR runs on LDS-LNX-007, which the change takes offline, so DB-HR goes down with it. The HR portal depends on both the identity service and DB-HR; losing either breaks it, so the portal is unavailable, caused by the database — answer B. Option A checks only the redundant dependency and forgets the single-point one, the classic error in impact assessment, because redundancy in one branch feels like safety everywhere. Option D underrates the records, which the question states are accurate and complete. This item rehearses exactly why CMDB relationship data matters: the change was approved for two servers, but its real impact statement should have said "HR portal outage" — keeping relationships current is what makes that impact visible before the change advisory board rather than after the service desk phones start ringing.

**Question 6 (moderate) — Error checking licences against installations**

The software register says the organisation holds 80 licences for a diagram tool. The quarterly installation scan reports the tool installed on 84 machines. Checking the details: 3 of the 84 machines are marked "rebuilt — awaiting software removal verification", and 2 of the 84 are in the training suite, where the supplier's contract allows unlicensed classroom use. What is the most accurate current position?

- A) A shortfall of 4 licences — 84 installations against 80 licences.
- B) No shortfall — the exceptions cover the gap.
- C) A possible shortfall of up to 2 licences: 79 countable installations are confirmed against 80 licences, but the 3 unverified rebuilds could raise the count to 82.
- D) A shortfall of 2 licences.

**Correct answer: C**

**Explanation:** Working the numbers with their statuses, not just totals: start at 84 detected installations. The 2 training-suite machines are contractually exempt, so they never count: 84 − 2 = 82 potentially countable. The 3 rebuilt machines are awaiting verification that the software was removed — each might still have it or not — so the countable figure sits between 79 (if all three are clean) and 82 (if none are). Against 80 licences, that range means anything from 1 licence spare to 2 short. Option C states this precisely. Option A ignores both exception categories; option B asserts safety the unverified machines cannot yet guarantee; option D asserts a definite shortfall that is equally unproven. A strong candidate's answer notes that the professional next step is to verify the state of those 3 assets — the named skill — which collapses the uncertainty to a single true number.

**Question 7 (moderate) — Pattern recognition in duplicate records**

Reviewing four suspect pairs of possible duplicate laptop records:

- Pair 1: same serial number, same user, names "LT-4471" and "LT-4471a"
- Pair 2: same serial number, different users, one marked "In use", one marked "In store"
- Pair 3: different serial numbers, same user, same model
- Pair 4: same serial number, same name, identical in every field

Which pair is most likely NOT a duplicate — that is, most likely to represent two genuinely different assets?

- A) Pair 1
- B) Pair 2
- C) Pair 3
- D) Pair 4

**Correct answer: C**

**Explanation:** The strongest identity evidence for hardware is the serial number, because manufacturers assign it uniquely to a physical machine. Pairs 1, 2 and 4 all share a serial number, so each pair almost certainly describes one physical laptop recorded twice: pair 4 is a pure duplicate, pair 1 is a duplicate with a name-mangling history, and pair 2 is a duplicate where the two records have drifted apart — the most dangerous kind, since each looks internally plausible and they disagree about who has the machine and where it is. Pair 3 has different serial numbers, and one person holding two laptops of the same model is entirely ordinary. So pair 3 is most likely two real assets — answer C. This tests anchoring on the field with the strongest claim to uniqueness and treating matching weak fields as suggestive only. A strong candidate also notes the follow-up: pair 2's drift means physically verifying that laptop's location and holder before merging the records.

**Question 8 (moderate) — Independently solving a smaller problem**

Every night, an automated job syncs new records from the procurement system into the CMDB. The job has failed with a "row rejected" error on three of the last five nights. The logs show each failure rejected exactly one row, and each rejected row was a purchase from the same new supplier, whose product descriptions include an unusual special character. Rows from all other suppliers load cleanly, including on the nights the job "failed". What is the best characterisation and next step?

- A) A random intermittent fault — re-run the failed rows and monitor.
- B) A systematic data-format problem with one supplier's descriptions — reproduce it with one rejected row, then raise a specific fix, noting other suppliers are unaffected.
- C) A major CMDB integrity failure — escalate to the change and release manager as urgent before doing anything.
- D) A procurement-system fault — pass the whole issue to the procurement team.

**Correct answer: B**

**Explanation:** Testing each characterisation against the evidence: random fault is contradicted, since the failures correlate perfectly with one supplier and one data feature — the signature of a systematic, narrow cause, which is also why C over-reads it: the blast radius is one row per night from one supplier, contained and understood. D gives the problem away prematurely: the rows may be perfectly valid data that the sync job handles badly, in which case the fix belongs on this side, which cannot be known until reproduced. Option B is the shape of independent problem solving the role summary names: form a hypothesis from the pattern, confirm it cheaply, then raise a precise, evidenced fix — sized to "independently solving smaller problems". A strong candidate also connects this to problem management: an operational-level problem with a clear preventative measure, so that every future supplier with quirky descriptions loads cleanly.

**Question 9 (challenging) — Multi-constraint scheduling of verification visits**

The candidate must physically verify assets at four sites — Leeds (L), Manchester (M), Newcastle (N), and Sheffield (S) — one site per day, Monday to Thursday. Constraints: (i) the Newcastle server room is only accessible on Tuesday and Wednesday; (ii) the same security escort accompanies the visits to Leeds and Sheffield, must complete the Leeds visit first, and needs at least one clear day between the two visits to process the Leeds access paperwork that Sheffield's site requires; (iii) Manchester must be visited before Sheffield, because Sheffield's check needs a barcode scanner currently in Manchester that travels back after that visit; (iv) Monday cannot be Leeds, because Leeds access passes are only issued from Monday afternoon. On which day must Sheffield be visited?

- A) Monday
- B) Tuesday
- C) Wednesday
- D) Thursday

**Correct answer: D**

**Explanation:** Eliminating day by day, starting with Monday: Monday cannot be Leeds (iv), cannot be Newcastle (i), and cannot be Sheffield — Sheffield needs both Manchester (iii) and Leeds (ii) completed before it, impossible on the first day. So Monday must be Manchester. That leaves Tuesday, Wednesday and Thursday for Leeds, Newcastle and Sheffield. Applying constraint (ii): Leeds before Sheffield with at least one clear day between them — among the three remaining days, the only pair with a whole clear day between them is Tuesday and Thursday. Therefore Leeds is Tuesday and Sheffield is Thursday, leaving Newcastle on Wednesday, inside its access window. Checking the finished schedule against every rule confirms no other arrangement survives the elimination. This tests fixing the most constrained slot first, then letting each placement shrink the remaining choices until only one arrangement is left — the technique real verification tours require, with escort bookings, access windows, and shared equipment as the constraints.

**Question 10 (challenging) — Deduction: which record must be wrong?**

Three sources describe the same four servers. The CMDB says: A is Live, B is Live, C is Decommissioned, D is Live. The monitoring system, which can only see powered-on servers, currently reports data from A, C, and D. The data centre's physical log, updated this morning and considered reliable, records that exactly three of the four servers are powered on and racked, and that B was physically removed last week. Assuming the physical log is correct and monitoring is working normally, which CMDB record must be wrong?

- A) Only B's record
- B) Only C's record
- C) Both B's and C's records
- D) The records are consistent with the evidence.

**Correct answer: C**

**Explanation:** Using the reliable source as the anchor: the physical log says B was removed last week, so the CMDB's "B is Live" must be wrong. That eliminates options B and D. Checking C: the CMDB says C is Decommissioned, but monitoring — which can only see powered-on servers — is currently receiving data from C. A decommissioned server should not be powered on and reporting; since monitoring is working normally, C is running, so "Decommissioned" must also be wrong. The physical log corroborates: exactly three servers are powered on, and monitoring sees A, C, D. So both B's and C's records are wrong: answer C. The method — anchor on the most reliable source, then test each record against every independent signal — is exactly how a configuration analyst reconciles the CMDB against discovery scans and physical audits. A strong candidate also names the two failure directions: B is a ghost record, while C is the reverse (the world has a running server the CMDB has written off) — usually the more dangerous kind, since unmanaged running kit receives no patches, no monitoring attention by policy, and no change control.

**Question 11 (challenging) — Following a branching retirement procedure**

The asset retirement procedure states: "On receiving an approved retirement request: set the asset's status to 'Pending disposal'. If the asset stores data, it must be securely wiped and a wipe certificate attached to the record before collection may be booked. If the asset is leased, notify the leasing coordinator, who arranges return instead of disposal collection. Only when either a disposal collection is completed or a lease return is confirmed may the status be set to 'Retired', and the record must retain its history rather than being deleted." An approved retirement request arrives for a leased laptop with a hard drive. The drive has been securely wiped and the certificate is attached. What is the correct next step?

- A) Book a disposal collection, then set the status to Retired when collection completes.
- B) Notify the leasing coordinator and await confirmed lease return before setting the status to Retired.
- C) Set the status to Retired now — the wipe certificate is attached, which was the blocking condition.
- D) Delete the record once the wipe certificate is attached, since the asset is leaving the organisation.

**Correct answer: B**

**Explanation:** Walking the branches against this asset's attributes: it stores data and it is leased. The data branch required a secure wipe and certificate before collection could be booked — done. But the lease branch redirects the exit route entirely: leased assets go back to the lessor via the leasing coordinator, and Retired status requires either a completed disposal collection or a confirmed lease return — for a leased asset, only the second applies. So the next step is notifying the leasing coordinator, and Retired waits for the confirmed return — option B. Option A books the wrong exit route for an asset the organisation does not own. Option C mistakes a completed precondition for a completed process. Option D violates the explicit instruction to retain history — deleting records is the cardinal sin of configuration management. This tests reading procedures attribute-by-attribute — which branches does this asset trigger, and what does each require — exactly the skill of applying change control procedures under supervision.

**Question 12 (challenging) — Reconciling three sources under a deadline**

An external audit starts Monday. On Friday afternoon the candidate reconciles the count of live Windows servers across three sources: the CMDB says 120, the discovery scan says 116, and the licensing report generated from the CMDB last month says 124. There are two hours available. Investigating the CMDB-versus-scan gap of 4 quickly confirms: 2 servers were decommissioned this week but their CMDB status was not yet updated, and 2 sit on an isolated network segment the scanner cannot reach. What is the strongest position to take into Monday's audit?

- A) Report 116 as the true figure, since the scan measures reality directly.
- B) Report that the sources conflict and the count is unknowable before Monday.
- C) Correct the 2 stale CMDB records to give a reconciled current figure of 118 — the scan's 116 plus the 2 verified unscannable servers — and explain the licensing report's 124 as last month's snapshot, which predates this week's decommissions.
- D) Adjust the CMDB to 116 to match the scan exactly, so all current sources agree before the auditors arrive.

**Correct answer: C**

**Explanation:** A reconciliation is finished when every difference is explained, not when the numbers are forced to match. Working the arithmetic: the scan sees 116; it cannot see the isolated segment, whose 2 servers are verified live, so reality is 116 + 2 = 118. The CMDB's 120 exceeds that by exactly the 2 servers decommissioned this week whose statuses lag — correcting those records brings the CMDB to 118 too. The licensing report's 124 needs explaining, not fixing: it is a snapshot from last month. Option A worships the scanner and understates the estate by the 2 unscannable servers. Option B surrenders with the answer two corrections away. Option D is the worst: editing the CMDB to match a source known to be blind makes the sources agree by making one of them wrong — cosmetic consistency over truth. A strong candidate's answer produces one reconciled figure with every source's deviation explained, and the corrections made through proper process — auditors are rarely troubled by differences; they are troubled by unexplained ones.

### Administration tips

- **Watch for restating the rule before checking options** — this shows a candidate is testing options against the rule mechanically rather than relying on instinct.
- **Note whether a candidate anchors on the strongest evidence** in reconciliation questions, rather than averaging across sources.
- **Score cross-field consistency checking directly** — asking "can all these claims be true of one asset at once?" is the heart of the integrity checking this role performs.
- **Time-box the multi-constraint item (Question 9)** — a candidate who draws the structure rather than reasoning purely in their head is demonstrating a transferable technique.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding a tidy-looking record read as compliant** without checking substance against reality.
- **Accepting an answer that stops at the first fault found**, when a dataset may hold several independent problems.
- **Crediting an answer that forces sources to agree** rather than explaining every difference.
- **Missing whether a candidate accounts for what a source cannot see** — scanners miss isolated segments; monitoring misses powered-off machines.
- **Rewarding a procedure answer that skips a branch** the asset's own attributes should have triggered.
- **Confusing a completed step with a completed process** — check whether a candidate reads the procedure's closing condition before naming a final status.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the numbers this role genuinely produces: record counts, accuracy percentages, audit samples, licence positions, discrepancy trends, and the small tables and reports they live in. It is not a mathematics exam — nothing here goes beyond percentages, ratios, averages, rates, and careful table reading. What it rewards is exactly what the role rewards: picking the right numbers, applying the right operation, and sense-checking the result before relying on it.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. Each question presents a short scenario, table, or chart with figures, followed by four or five options. An on-screen calculator is usually permitted. Scoring compares the candidate with a norm group at this level, adaptive difficulty is common, and it is entirely normal for a candidate not to finish every question.

Numeric reasoning matters for this role because it turns numbers into trust. When a change and release manager reports CMDB accuracy to senior stakeholders, the percentage comes from an audit the configuration analyst helped run. When a licence review asks whether the organisation is compliant, the answer is a comparison of counts the role maintains. A configuration analyst who can compute a sample-based estimate correctly, or spot that two figures use different bases, protects the organisation from confidently wrong conclusions.

### How this assessment maps to the role

The numeric skills tested map directly to the named skills in the role summary:

- **Percentages and proportions** map to the **Asset and configuration management** skill: record accuracy rates, verification coverage, and licence utilisation are all percentage work, and audit sampling is proportional reasoning applied to maintaining accurate information.
- **Averages and rates** map to day-to-day administrative support duties: records processed per day, average time to clear a discrepancy, and how long a verification exercise will take at a given rate.
- **Comparing counts across sources** maps to the core duty of maintaining CMDB integrity: reconciling register counts, scan counts, and report snapshots.
- **Trends and projections** map to **Availability and capacity management** knowledge: headroom, growth rates, and time-to-threshold.
- **Reading data tables carefully** maps to **Incident management** and **Problem management** skills: incident counts by category and discrepancy trends across audits both start with extracting the right figures from a table before drawing any conclusion.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Record accuracy percentage**

A spot check compares 60 CMDB records against physical assets. 51 records are fully accurate and 9 contain at least one error. What is the accuracy rate of the checked records?

- A) 80%
- B) 85%
- C) 88%
- D) 91%

**Correct answer: B**

**Explanation:** Accuracy rate = accurate records ÷ records checked × 100. Step 1: 51 ÷ 60 = 0.85. Step 2: 0.85 × 100 = 85%. A sense-check via the error side confirms it: 9 ÷ 60 = 15%, and 100% − 15% = 85%. The base is records checked (60), not the whole CMDB — a spot check speaks only to the records inspected, and whether it may be generalised further depends on how the sample was chosen. This calculation is the headline number of configuration work and should be automatic for a strong candidate.

**Question 2 (easy) — Average records processed per day**

Over five working days a candidate processed the following numbers of record updates: 34, 28, 41, 30, 37. What was the average (mean) number of updates per day?

- A) 32
- B) 33
- C) 34
- D) 36

**Correct answer: C**

**Explanation:** Mean = total ÷ number of days. Adding in stages: 34 + 28 = 62; 62 + 41 = 103; 103 + 30 = 133; 133 + 37 = 170; then 170 ÷ 5 = 34. A sense-check confirms the daily values run from 28 to 41, and 34 sits comfortably inside that range — a mean outside the range always signals an arithmetic slip. This kind of average is how a configuration analyst plans realistically and makes commitments to a manager that can actually be kept.

**Question 3 (easy) — Ratio of configuration item types**

The CMDB contains hardware, software, and network configuration items in the ratio 5 : 3 : 2. There are 4,000 configuration items in total. How many are network items?

- A) 400
- B) 800
- C) 1,200
- D) 2,000

**Correct answer: B**

**Explanation:** Total ratio parts = 5 + 3 + 2 = 10. One part = 4,000 ÷ 10 = 400 items. Network items = 2 parts = 800. A full sense-check reproduces the total: hardware 2,000, software 1,200, network 800, summing to 4,000. Option A is the one-part value, and option D is the hardware count — both plausible slips. Ratios appear whenever the shape of the estate is summarised, for audit scoping, dividing verification work fairly, or judging whether a category's growth is changing the balance of what is managed.

**Question 4 (moderate) — Percentage change in discrepancies**

The monthly reconciliation between the CMDB and the discovery scan found 64 discrepancies in June and 48 in July. By what percentage did discrepancies fall from June to July?

- A) 16%
- B) 20%
- C) 25%
- D) 33%

**Correct answer: C**

**Explanation:** Percentage change = (difference ÷ original) × 100, with the earlier month as the original. Difference = 64 − 48 = 16; 16 ÷ 64 = 0.25 = 25%. Option D divides by the later figure instead (16 ÷ 48 = 33%), the classic wrong turn; option A mistakes the raw difference for a percentage. Being precise about which base a percentage change uses is what makes data-quality reporting to a change and release manager dependable, and month-on-month discrepancy trends are among the most closely watched numbers in configuration management.

**Question 5 (moderate) — Licence utilisation and headroom**

The organisation holds 150 licences for a project management tool. The CMDB shows the software installed and in use on 129 machines. The procurement pipeline shows 12 new starters next month who will each need the tool. Will the current licences cover next month's need, and what will utilisation be if all 12 are installed?

- A) Yes — utilisation will be 94%
- B) Yes — utilisation will be 86%
- C) No — there will be a shortfall of 9 licences
- D) Yes — utilisation will be 96%

**Correct answer: A**

**Explanation:** Projected installations = 129 + 12 = 141, which is within 150, so the licences cover the need, with 9 spare — note option C tries to recycle that same 9 as a shortfall by subtracting in the wrong direction. Utilisation = 141 ÷ 150 = 94%. Option B is current utilisation (129 ÷ 150 = 86%), true today but not what was asked. This two-part shape — a yes/no comparison, then a percentage — is common in real licence reviews, and a strong candidate's answer notes that 94% utilisation with continued hiring means the next review will likely need a purchase recommendation.

**Question 6 (moderate) — Reading an audit results table**

Two successive audits categorised CMDB record errors as follows:

| Error category | Spring audit | Autumn audit |
|---|---|---|
| Wrong location | 40 | 30 |
| Wrong owner | 25 | 15 |
| Wrong status | 20 | 18 |
| Missing relationship | 15 | 12 |

Which error category improved by the largest percentage between audits?

- A) Wrong location
- B) Wrong owner
- C) Wrong status
- D) Missing relationship

**Correct answer: B**

**Explanation:** Computing each category's percentage fall against the spring figure: wrong location 25%, wrong owner 40%, wrong status 10%, missing relationship 20%. The largest percentage improvement is wrong owner at 40%. The trap is option A: wrong location fell by the joint-largest absolute amount (10 errors) but from a much bigger base, so its percentage improvement is smaller. A strong candidate's answer distinguishes "where were the most errors removed?" from "which problem is improving fastest?", and may note the laggard: wrong status improved only 10%, a pattern worth flagging for investigation under problem management.

**Question 7 (moderate) — Time to complete a verification exercise**

Before the annual audit, 320 assets must be physically verified. Verification runs at 8 assets per hour, and 2 hours per day can be spent on verification alongside other duties. There are 22 working days before the audit. Will the exercise finish in time, and with how many days to spare, if any?

- A) Yes, with 2 days to spare
- B) Yes, with 4 days to spare
- C) No, 2 days short
- D) Yes, with exactly no days to spare

**Correct answer: A**

**Explanation:** Daily verification capacity = 8 × 2 = 16 assets per day. Days needed = 320 ÷ 16 = 20 days. Comparing with 22 available days leaves 2 days to spare — option A. A strong candidate's answer weighs that margin: 2 days out of 22 is thin protection against sick days, urgent interruptions, or assets harder to locate than planned, and would flag this as "on track, but with little slack" to a manager rather than simply "on track". Rate × time calculations like this are how the role turns a mountain of records into a plan, and how it makes commitments that can actually be kept.

**Question 8 (moderate) — Weighted average accuracy across domains**

An audit checks two domains of the CMDB. In the server domain, 200 records are checked with 90% found accurate. In the laptop domain, 300 records are checked with 80% found accurate. What is the overall accuracy across all checked records?

- A) 84%
- B) 85%
- C) 86%
- D) 88%

**Correct answer: A**

**Explanation:** 90% and 80% cannot simply be averaged to 85%, because the domains contributed different numbers of records. Accurate server records = 180; accurate laptop records = 240; total accurate = 420 out of 500 checked = 84%. The overall figure sits closer to the laptop domain's 80% because laptops contributed more records — that is what "weighted" means. The unweighted 85% (option B) is the classic error, and here it flatters the database by a full percentage point, which matters when the figure feeds a report a manager signs to a governance board. This tests always returning to raw counts before combining percentages.

**Question 9 (challenging) — Scaling a sample estimate**

The CMDB holds 12,000 records. For the quarterly quality check, a random sample of 400 records is audited and 22 are found with at least one error. Based on the sample, approximately how many records in the whole CMDB would be expected to contain at least one error?

- A) 220
- B) 550
- C) 660
- D) 880

**Correct answer: C**

**Explanation:** Sample error rate = 22 ÷ 400 = 5.5%. Applying the rate to the full database: 5.5% of 12,000 = 660. The scaling route agrees: 12,000 ÷ 400 = 30, and 22 × 30 = 660. Option A forgets to scale at all; option B and D follow from misreadings of the multiplier or the error count. This tests whether a candidate recognises that scaling is only valid because the sample was random — a sample of only recently touched records, for instance, could not be projected the same way — and reports the projection with appropriate softness ("around 660, based on a 400-record sample") rather than false precision.

**Question 10 (challenging) — Backlog clearance with ongoing arrivals**

The discrepancy backlog currently holds 180 items. Each week, the reconciliation process adds an average of 20 new discrepancies, and the team clears an average of 35. At these rates, in how many weeks will the backlog be fully cleared?

- A) 5 weeks (rounding to the nearest week)
- B) 9 weeks
- C) 12 weeks
- D) The backlog will never clear at these rates

**Correct answer: C**

**Explanation:** The backlog changes each week by arrivals minus clearances: 20 − 35 = −15 net reduction per week. Time to clear = 180 ÷ 15 = 12 weeks. Option A comes from dividing 180 by the clearance rate alone, quietly ignoring new arrivals — the single most common error in backlog arithmetic, producing promises that cannot be kept. This tests recognising that backlogs fall only as fast as the gap between out and in, and a strong candidate's answer may note the second lever: if a chunk of the 20 weekly arrivals trace to one systematic cause, fixing that cause can nearly double the net clearance rate — the best backlog work often happens at the inlet, not the outlet.

**Question 11 (challenging) — The cost of ghost records**

An audit identifies that 45 of the estate's recorded servers are "ghosts" — decommissioned machines never removed from support contracts. Each ghost server costs £30 per month in support fees. The one-off administrative cost of properly verifying and removing all 45 from the contracts is £8,100. After how many months of savings does the removal exercise pay for itself?

- A) 4 months
- B) 6 months
- C) 8 months
- D) 12 months

**Correct answer: B**

**Explanation:** Monthly saving once removed = 45 × £30 = £1,350. Payback time = £8,100 ÷ £1,350 = 6 months. This is the calculation that turns data hygiene into a business case: ghost records are usually discussed as a tidiness problem, but real support fees are paid for machines that no longer exist, and verification work — confirming the location and state of IT assets — is what finds and stops the leak. A strong candidate's answer converts "we should tidy the CMDB" into "this pays for itself by [date] and saves £16,200 a year" — the kind of sentence that gets data-quality work funded.

**Question 12 (challenging) — Verification coverage target with mixed progress**

The team's target is to physically verify 90% of the estate's 2,400 assets by year end. So far, 1,824 assets have been verified. Of the remaining unverified assets, 96 are known to be in a locked storage facility that will not be accessible until January. Can the 90% target still be met this year, and what is the minimum number of additional assets that must be verified to meet it?

- A) No — the locked assets make the target impossible.
- B) Yes — verify at least 336 more assets.
- C) Yes — verify at least 240 more assets.
- D) Yes — verify at least 216 more assets.

**Correct answer: B**

**Explanation:** The target in assets = 90% of 2,400 = 2,160. Additional verifications needed = 2,160 − 1,824 = 336. Checking feasibility: unverified assets = 576, of which 96 are inaccessible, leaving 480 that can still be verified this year — since 480 ≥ 336, the target remains achievable. Option A gives up without checking feasibility. Options C and D misapply the percentage or subtract the locked assets from the requirement itself rather than from the available pool. This tests the three-step shape — convert the percentage target to a count, find the gap, then check the gap fits within what is actually reachable — and a strong candidate's answer notes the margin (480 available versus 336 needed) as useful planning information in its own right.

### Administration tips

- **Score the five core moves**: percentage of a total, percentage change, weighted average, rate × time, and net rate (in minus out). Nearly every item above is one of these.
- **Watch for whether a candidate names the base before dividing** — out of records checked, out of the earlier month, out of assets still accessible.
- **Note whether a candidate returns to raw counts before combining percentages** from unequal groups, rather than averaging directly.
- **Keep an on-screen calculator available**, since the assessment measures reasoning, not mental arithmetic.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Accepting an answer that divides by the wrong base.**
- **Accepting a direct average of percentages from unequal groups.**
- **Missing whether a candidate accounts for inflow in a backlog question**, not just the clearance rate.
- **Confusing absolute change with percentage change** when scoring Question 6-style items.
- **Accepting a projection from a sample without checking whether the candidate notes it depends on the sample being random.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and reasons about written material of the kind this role handles daily: data standards, asset disposal procedures, audit findings, change control policies, status definitions, and emails from engineers and a change and release manager. The most common question style presents a short passage and a statement, then asks whether the statement is **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage does not give enough information to decide). Other styles ask for the main point of a passage, a safe inference, an unstated assumption, or a judgement about which version of a piece of writing communicates most clearly.

The typical format is an online, timed test of 15 to 25 minutes with 15 to 30 questions. The governing rule: answer only from the passage in front of the candidate. Scoring is against a norm group at this level, adaptive difficulty is common, and unfinished questions are normal.

Verbal reasoning matters for this role because it is built on precise reading. A CMDB is only as good as the definitions behind it: what "Live" means, when "Retired" may be set, which edits need which approvals. Those definitions live in written standards, and applying them correctly — especially under supervision, where documented procedures are followed rather than personal judgement — depends on reading them exactly.

### How this assessment maps to the role

The verbal skills tested map directly to the named skills in the role summary:

- **Precise comprehension of definitions and conditions** maps to the **Asset and configuration management** skill: applying written definitions exactly as a standard states them.
- **True/False/Cannot-say discipline** maps to the core duty of maintaining CMDB integrity: a record's claim is verified, contradicted, or unverified.
- **Reading procedures branch by branch** maps to the **Change management** skill: following the written branch that matches the case in front of the candidate, and recognising when a case matches no branch.
- **Inference and assumption-spotting** maps to the **Problem management** skill: reading audit findings and incident notes, drawing only the conclusions the evidence supports.
- **Clear-writing judgement** maps to the **Community collaboration** and **User focus** skills: writing data correction requests, audit notes, and emails that busy colleagues can act on first time.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Passage 1 (for Questions 1–3)**

*Extract from the CMDB data standard:* "Every configuration item must have exactly one status from the approved list: Ordered, In build, Live, In maintenance, Withdrawn, or Retired. The status Live may only be set once acceptance testing is complete. Retired may only be set by the configuration analyst or the change and release manager, and only after disposal or return has been confirmed. Records for Retired items must be kept for seven years and must not be deleted. Status changes must reference an approved change or an approved data correction request."

**Question 1 (easy) — True/False/Cannot say**

Statement: "A configuration item may hold two statuses at the same time while it moves between states."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The standard's first sentence says every configuration item must have "exactly one status" from the approved list. "Exactly one" rules out two statuses at any time, including during transitions — so the statement contradicts the passage and the answer is False. Reading quantity words — exactly, at least, at most, only — with full attention is the core habit both this test and this role's data-quality work depend on: these small words are where standards carry their force, and where sloppy reading creates records that pass a casual glance but fail an audit.

**Question 2 (easy) — True/False/Cannot say**

Statement: "Only the change and release manager may set an item's status to Retired."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage says Retired "may only be set by the configuration analyst or the change and release manager". The statement drops the configuration analyst and claims the manager alone holds the permission — a direct contradiction, so False. This is the classic "narrowed claim" trap: a fast reader who latches onto "only... change and release manager" from the sentence's end will wrongly answer True. This tests reading the whole permission, not the half the eye lands on — and knowing exactly which permissions a role holds, and which it does not, is what "applying procedures under supervision" means in practice.

**Question 3 (easy) — True/False/Cannot say**

Statement: "Acceptance testing is carried out by the service desk team."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage mentions acceptance testing once, as a precondition, and says nothing about who performs it. The answer is Cannot say. This is the discipline the whole test rests on: the difference between what the document states and what a candidate might know from elsewhere. It has a direct workplace parallel: when a record's field is blank, the truthful position is "unverified", not a best guess — and when a procedure is silent about who does something, the right move is to ask, not to assume.

**Passage 2 (for Questions 4–5)**

*Extract from the asset disposal procedure:* "Assets awaiting disposal must be stored in the secure holding area. Data-bearing assets must not leave the building until a certified data wipe or physical destruction of the storage media has been completed and certificated. The disposal contractor collects on the last Friday of each month. The configuration analyst updates each asset's record within two working days of collection, attaching the contractor's collection receipt. Where an asset cannot be located at collection time, the analyst must record it as 'Missing — under investigation' and notify the change and release manager the same day."

**Question 4 (moderate) — True/False/Cannot say**

Statement: "A laptop whose drive has not yet been wiped may be moved to the secure holding area inside the building."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Tracking what the two rules actually restrict: assets awaiting disposal must be stored in the secure holding area — that is where an unwiped laptop awaiting disposal belongs. Data-bearing assets must not leave the building until wiped or destroyed — moving to the holding area inside the building does not involve leaving the building, so this rule is not engaged. The statement is supported: True. The trap is a blurred reading that remembers "unwiped assets must not be moved", but the restriction is on leaving the building, not on movement generally — this tests reading exactly which action a rule restricts, since over-reading it stalls the process while under-reading it risks a data protection incident.

**Question 5 (moderate) — Inference from the passage**

Based on Passage 2, which of the following is the safest inference?

- A) The procedure anticipates that assets will sometimes be missing at collection time.
- B) The disposal contractor is responsible for wiping data-bearing assets.
- C) Assets are collected weekly.
- D) The secure holding area is outside the main building.

**Correct answer: A**

**Explanation:** The passage dedicates its final sentence to exactly what must happen "where an asset cannot be located at collection time" — a documented branch, with a status value and a same-day notification duty. Procedures do not build branches for situations their authors consider impossible, so the existence of the missing-asset path is solid evidence the procedure anticipates it. Option B misassigns the wipe, which the passage requires before collection and never assigns to the contractor. Option C contradicts "last Friday of each month". Option D contradicts the logic of Question 4. This tests inference that stays one small, well-supported step from the text — reading a procedure's structure for what it implies is a genuinely useful skill when a candidate is later asked to improve one.

**Question 6 (moderate) — Must, should, and may in a data standard**

A data standard states: (i) "Every server record **must** include the physical location field." (ii) "Records **should** include the warranty expiry date where the information is available." (iii) "Analysts **may** add free-text notes to any record." A server record has a location, no warranty date, and no notes. The warranty date is available in the procurement system. Which requirement, if any, does the record breach?

- A) Requirement (i)
- B) Requirement (ii) — although as a "should", it is a compliance gap rather than an absolute breach
- C) Requirement (iii)
- D) The record is fully compliant

**Correct answer: B**

**Explanation:** Applying each word at its defined strength: (i) "must" is satisfied, since the location is present; (iii) "may" cannot be breached by not using a permission. (ii) "should" asks for the warranty date "where the information is available", which the question confirms it is — so the record falls short of the recommendation, but "should" marks a strong recommendation rather than an absolute rule, so the precise verdict is a compliance gap, not a hard breach. Option D fails because it treats "should" as ignorable. This graded vocabulary (following the RFC 2119 convention) is load-bearing in this role's work: audit findings need to distinguish must-breaches from should-gaps, because mixing them makes reports both alarmist and vague. A strong candidate's answer shows this distinction clearly.

**Question 7 (moderate) — Clear-writing judgement**

An engineer needs to be emailed asking them to confirm details so a record can be corrected. Which version communicates most clearly?

- A) "Hi — regarding the aforementioned server, there appear to be certain discrepancies in respect of the configuration data held, which it would be appreciated if you could look into at your earliest convenience."
- B) "Hi — quick one: the CMDB thinks LDS-WIN-021 is in rack B4, but Tuesday's scan puts it in rack C1. Can you confirm which rack it's actually in? If you can reply by Thursday I'll correct the record before Friday's audit extract. Thanks!"
- C) "Hi — the CMDB is wrong again. Please fix your server's record."
- D) "Hi — please see the attached spreadsheet of all 340 discrepancies from this week's scan and confirm each row."

**Correct answer: B**

**Explanation:** Judging each version by whether a busy reader can act on it first time: option B names the asset, states the specific conflict with sources for each claim, asks one answerable question, gives a deadline with its reason, and says what happens next — the engineer can reply in one line. Option A is fog: "aforementioned server", "certain discrepancies", "earliest convenience" transmit no information. Option C is an accusation with no detail to act on. Option D drowns one urgent question in 340 rows. The pattern behind B is worth scoring for in any correction request: specific item, both conflicting claims with sources, one clear question, a dated reason to reply. Clear writing is not decoration in this role — it is how the CMDB actually gets corrected.

**Passage 3 (for Questions 8–9)**

*Extract from an internal audit finding:* "Finding 4: Of 60 sampled laptop records, 12 showed a different assigned user from the person actually holding the device. In 9 of the 12 cases, the device had been legitimately transferred between users, but the transfer form had not been submitted to the configuration team. The remaining 3 cases are unexplained and have been referred for investigation. The audit team notes that the transfer form is a four-page document requiring three signatures, and that several interviewees described it as 'too slow for how teams actually work'. Recommendation: the configuration team should review the transfer process with a view to simplification, and re-audit in six months."

**Question 8 (moderate) — True/False/Cannot say**

Statement: "In most of the mismatched cases, the device had been legitimately transferred but the paperwork had not reached the configuration team."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Checking the arithmetic inside the words: 9 of 12 mismatched cases is three-quarters — comfortably "most" — and matches the statement's two parts. So the statement is supported: True. This tests verifying a quantity claim numerically rather than by impression, and noticing what the finding is really saying: the records were wrong not because people were careless with data but because the process was heavier than the behaviour it tried to govern. This pattern — accurate-data-loses-to-inconvenient-process — is one of the most common root causes of CMDB drift, and recognising it in text is the first step to fixing it in fact.

**Question 9 (challenging) — Identifying the unstated assumption**

The audit's recommendation moves from "the transfer form is slow and often skipped" to "simplify the transfer process". Which unstated assumption does the recommendation most depend on?

- A) If the process were simpler, more transfers would be recorded, improving record accuracy.
- B) The three unexplained cases will turn out to be thefts.
- C) Laptops are transferred more often than desktops.
- D) The audit sample of 60 records was too small.

**Correct answer: A**

**Explanation:** An assumption is the unstated bridge an argument must cross. The finding establishes that forms are burdensome and 9 of 12 mismatches came from unsubmitted forms; the recommendation prescribes simplification. The bridge is that the burden causes the non-submission — so reducing it will increase submission and, through it, accuracy. That is option A, and if false (say, people skip the form through unawareness rather than complexity), simplification would change little. Option B concerns the 3 referred cases, which the recommendation does not depend on. Option C compares device types the passage never mentions. Option D attacks the sample size rather than supporting the recommendation. This tests assumption-spotting that is directly useful in the role: asking "what is this assuming about why people currently don't comply?" is often the difference between a fix that works and a simpler form that is skipped just as cheerfully.

**Question 10 (challenging) — Reconciling two documents**

Document 1, the CMDB standard, states: "Records for Retired items must be kept for seven years and must not be deleted." Document 2, a data protection guidance note, states: "Personal data must not be retained longer than necessary for the purpose for which it was collected. Asset records containing the names of assigned users should have user-identifying fields cleared when the record is no longer operationally required." Which statement best describes how the two documents relate?

- A) They contradict each other, and one must be withdrawn.
- B) They are compatible: a Retired record can be kept for seven years with its user-identifying fields cleared once no longer operationally needed.
- C) Document 2 overrides Document 1, so Retired records should be deleted when no longer needed.
- D) Document 1 overrides Document 2, so user names must stay on records for seven years.

**Correct answer: B**

**Explanation:** Looking precisely at what each document governs: Document 1 governs the record — keep it seven years, never delete it. Document 2 governs particular data within records — clear user-identifying fields when no longer operationally required. A record can be retained while a field within it is cleared, so the two instructions operate on different objects and can both be satisfied at once — option B. Options C and D both assume a conflict and pick a winner where none exists once the scopes are read carefully. This question rehearses a valuable standards-reading skill: apparent contradictions usually dissolve when what each document applies to is identified precisely — whole record versus field, retention versus deletion.

**Question 11 (challenging) — Main point of a passage**

*Extract from a quarterly report:* "This quarter the configuration team processed 2,140 record updates, an 8% increase on last quarter, while the team's error rate on processed updates fell from 2.1% to 1.6%. However, the volume of updates arriving by email rather than through the request portal rose to 40%. Email requests take roughly twice as long to process, because details must be extracted manually and are often incomplete, requiring follow-up. If email volumes continue to rise, the team's throughput gains will be absorbed by rework, and processing times will lengthen despite the team's improved accuracy. We recommend that email requesters be redirected to the portal, and that the portal's request form be reviewed to understand why users avoid it."

Which sentence best expresses the main point of the passage?

- A) The team is performing badly and processing times are already unacceptable.
- B) The team's productivity and accuracy improved, but the growing share of email requests threatens those gains, so request channels need attention.
- C) Users who email requests instead of using the portal should be reported to their managers.
- D) The portal should be decommissioned since 40% of users avoid it.

**Correct answer: B**

**Explanation:** Mapping the passage's shape — good news, a threat, a projection, and a two-part recommendation — option B captures the whole arc. Option A contradicts the reported improvements and asserts a present crisis the passage only forecasts conditionally. Option C invents an enforcement measure the passage never proposes. Option D turns a signal to investigate into the opposite conclusion. This tests reading for structure — what does the author want the reader to take away and do — rather than latching onto the most memorable number, and a strong candidate's answer notices that the passage treats email avoidance as a signal to investigate, not misbehaviour to punish.

**Question 12 (challenging) — True/False/Cannot say with a subtle scope shift**

*Passage:* "Following the spring audit, all laptop records in the Leeds office were physically verified, and any errors found were corrected at the point of verification. The verification exercise took three weeks. Since it concluded, all new laptop records for Leeds have been created using the barcode scanning process, which eliminates manual transcription of serial numbers."

Statement: "All laptop records in the Leeds office are now free of errors."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Tracing what the passage guarantees, and when: the verification corrected the errors it found, at the time it ran, but records can drift after verification, and the protection since covers only newly created records, and even for those, barcode scanning eliminates one error source rather than all errors. So "all records are now free of errors" is neither guaranteed nor contradicted by the passage — Cannot say. This statement is engineered from three quiet inflations: "were corrected then" becomes "are correct now"; "new records use scanning" becomes "all records are protected"; "eliminates transcription errors" becomes "eliminates errors". This tests exactly the discipline this role's records depend on: a verified record is accurate as of its verification date, and an honest CMDB carries that humility in its "last verified" field.

### Administration tips

- **Score Cannot say answers on their own merits** — a candidate reaching for Cannot say appropriately is showing discipline, not hedging.
- **Watch for whether a candidate points to the exact words** supporting or contradicting a statement before answering.
- **Note whether a candidate reads small quantity and modal words carefully** — exactly, only, must, should, until.
- **Use the clear-writing item (Question 7) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer drawn from outside knowledge** rather than the passage.
- **Penalising appropriate use of Cannot say** as if it were a wrong answer.
- **Missing a paraphrase that quietly changes a rule's scope** — "must not leave the building" is not "must not be moved".
- **Treating "should" as either binding or ignorable** when scoring Question 6.
- **Accepting a declared contradiction between two documents** without checking whether their scopes actually differ.
- **Rewarding an answer built on a memorable number** rather than the passage's intended action, in main-point questions.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks how the candidate would respond. It contains no arithmetic and no comprehension passages — instead it measures professional judgement: how a candidate balances data integrity, process discipline, helpfulness, honesty, and knowing when to act independently versus when to ask. Question formats vary: most commonly the candidate chooses the **most effective** response from four options; sometimes they identify the **least effective**, rate each option, or rank all four.

The typical format is an online test of 20 to 40 minutes with 10 to 20 scenarios, usually generously timed, since considered judgement matters more than reflexes. Options are carefully built: alongside the best response there is typically one that is nearly right but skips a step, one that avoids the issue, and one that overreacts. Scoring compares choices against a key set by experienced practitioners and calibrated to this level — at configuration analyst level, the strong answer often involves doing the safe immediate thing and then checking with a manager, rather than making a manager's decisions.

Situational judgement matters for this role because it sits where accuracy meets people. Engineers want records changed quickly; auditors want evidence; managers want dependable support; and the procedures that protect the CMDB can feel, to busy colleagues, like obstacles. The moments that define this role's effectiveness are rarely technical: the request to "just tweak a record" without a reference, an error found in a senior person's work, pressure before an audit to make numbers look tidier than they are, and the judgement call about which problems to solve alone and which to pass on.

### How this assessment maps to the role

The judgement dimensions map directly to the named skills in the role summary:

- **Integrity under pressure** maps to the core duty of maintaining CMDB integrity and the **Asset and configuration management** skill.
- **Process discipline with helpfulness** maps to the **Change management** skill: declining undocumented shortcuts while actively helping requesters use the proper route.
- **Escalation judgement** maps to the **Ownership and topic** skill: knowing which problems are "smaller" ones to solve independently and which to raise.
- **Routing and information gathering** maps to the **Incident management** skill.
- **Working well with others** maps to the **Community collaboration** skill.
- **Serving the people behind the records** maps to the **User focus** and **Service focus** skills.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — "Just tweak the record"**

An engineer messages: "The record for LDS-WIN-021 shows the wrong rack. It's in C1, not B4 — I moved it myself last week. Can you just update it? No time for a data correction request today, I'm mid-migration." The procedure requires every edit to reference an approved change or data correction request. What is the most effective response?

- A) Update the record — the engineer has first-hand knowledge, and the CMDB should reflect reality as soon as possible.
- B) Refuse and tell them to come back when they have raised the request.
- C) Explain that edits need a reference, offer to raise the data correction request using the details just given, and make the edit as soon as it is approved.
- D) Update the record now and raise the request retrospectively when time allows.

**Correct answer: C**

**Explanation:** Option C keeps both things that matter: the control (every edit traceable to an approved reference) and the outcome (the record corrected quickly, the busy engineer helped rather than bounced). Raising the request is squarely within administrative support duties and turns a process refusal into a service. Option A abandons the control — "first-hand knowledge" is exactly what the reference documents, and its absence leaves an audit trail showing an edit justified by nothing, while also setting a precedent that edits are available on request. Option B protects the process and fails the person, leaving the record wrong once the migration and the request are both forgotten. Option D inverts the control, depending on memory during a busy day. This tests the scored pattern at this level: hold the line, carry the load.

**Question 2 (easy) — An error in a manager's work**

While preparing records for the change advisory board papers, a candidate notices that a dependency the change and release manager added to the CMDB last week links the payroll application to the wrong database server — the candidate is confident it should be DB-HR, not DB-FIN. The papers go out tomorrow morning. What is the most effective response?

- A) Say nothing — correcting a manager could seem presumptuous, and they probably know something the candidate does not.
- B) Quietly fix the record without mentioning it, so the papers are right and nobody is embarrassed.
- C) Tell the manager today what was found and why it appears wrong, so the record and the papers can be corrected before they go out.
- D) Mention it to a colleague and ask them to raise it with the manager.

**Correct answer: C**

**Explanation:** Option C treats the finding exactly as the role should: data integrity is the duty, and the person who can confirm the correction fastest is the person who made the entry. Explaining the reasoning makes the conversation evidence-based rather than presumptuous, and leaves room for the possibility that the manager knows something the candidate does not — either outcome is good, which is the signature of a strong response. Option A lets a known-suspect record flow into governance papers. Option B is the subtle trap: the record ends up right, but the manager is unaware their papers changed, and quiet corrections of a supervisor's work corrode trust in both directions. Option D outsources a conversation the candidate is perfectly entitled to have. This tests whether a candidate raises a genuine finding directly, promptly, and with evidence.

**Question 3 (easy) — A corridor report**

A colleague from the finance team says: "You're the computer records person, right? My laptop's been crashing all week and I lose my spreadsheets every time. Can you sort it?" No ticket exists. What is the most effective response?

- A) Explain that the role maintains the configuration database, not laptops, and suggest they contact someone else.
- B) Take the laptop's asset number, promise to look into the crashes personally, and add it to a to-do list.
- C) Sympathise, capture the key details (asset number, what happens, since when), register the incident through the service desk channel so it reaches the right team with the information attached, and give them the reference number.
- D) Tell them to log a ticket with the service desk when they get a chance.

**Correct answer: C**

**Explanation:** This is the incident management skill verbatim — identify and register incidents, gather the required information, allocate to the appropriate channel — delivered warmly. Option C routes properly while treating the colleague as a person: they leave with a reference number, and the fixing team receives a well-formed ticket with the asset number attached. Option A is accurate about the job description and unhelpful about the situation. Option D points at the right channel but leaves the work and the momentum with the person least equipped to know what details matter. Option B misroutes the problem to someone unable to fix it and bypasses the prioritisation that might reveal a pattern across several laptops. This tests routing properly, capturing well, and treating the person as a user of a service.

**Question 4 (moderate) — Unsure mid-task**

A manager asked for a bulk update this afternoon: applying a new location code to 400 records following an office move, using a script the team has used before. Partway through preparing it, the candidate notices the script's filter would also catch 30 records for assets in storage, which the office move should not affect. The manager is in meetings until 5pm; the update was meant to be done by then. What is the most effective response?

- A) Run the update as instructed — the manager set the task, and 30 records out of 400 is a small proportion.
- B) Exclude the 30 storage records, run the update for the remaining 370, note exactly what was changed and why, and flag the 30 to the manager for their decision.
- C) Pause the whole task until the manager is available at 5pm, missing the deadline.
- D) Run the update on all 400, then correct the 30 storage records afterwards if the manager confirms they were wrong.

**Correct answer: B**

**Explanation:** The 370 genuinely moved and that part of the task is unambiguous and deadline-bound. The 30 storage records are well-founded doubts, since assets in storage do not move with an office — excluding them is the cautious action for the doubtful subset, leaving those records unchanged and reversible by definition. Option B completes the certain work, protects the uncertain records, documents the judgement, and hands the residual decision to the right person — independent problem-solving sized precisely to this level. Option A knowingly writes 30 probable errors into the database to honour the letter of an instruction. Option D prefers editing records twice to pausing once. Option C treats one doubtful subset as if it poisoned the whole task. This tests separating the certain from the uncertain, acting on the certain, holding the uncertain, and communicating.

**Question 5 (moderate) — Tidying the numbers before an audit**

Three days before an external audit, a senior colleague reviewing the reconciliation report says: "These 14 unresolved discrepancies look bad. Most are probably just scan glitches — mark them resolved, and if any turn out to be real we'll fix them after the audit." The 14 have not yet been investigated, so which are glitches is unknown. What is the most effective response?

- A) Mark them resolved as suggested — the colleague is senior and is probably right about scan glitches.
- B) Explain that uninvestigated discrepancies cannot be marked resolved, propose spending the three days investigating as many as possible so the genuine number is as small — and as true — as possible, and let the manager know the position.
- C) Mark them resolved but keep a private list to investigate later.
- D) Refuse, and tell the auditors on day one that falsifying the report was requested.

**Correct answer: B**

**Explanation:** The scenario asks the candidate to record as fact something nobody has established, to make a report look better for an audit — that is falsification, however casually proposed. Option B declines cleanly and does the genuinely useful thing: three real days of investigation, an honest report at the end, and the manager informed proportionately since they own the audit position. Option A trades professional integrity for deference, and "probably right" does all the work — one "resolved" discrepancy that reopens under sampling costs more credibility than fourteen honest open items. Option C is quiet complicity with a guilty conscience attached. Option D rockets past every intermediate step, treating a correctable moment as a scandal before giving the internal escalation route a chance to work. This tests whether a candidate distinguishes a poor suggestion from an established fact, and responds with a plan rather than either compliance or overreaction.

**Question 6 (moderate) — An access request while a manager is away**

The change and release manager is on leave. An engineer not well known to the candidate asks for edit access to the CMDB "for the afternoon" to update records for servers being rebuilt, citing the two-day access request process as too slow. Granting access is technically possible but the procedure says access is approved by the change and release manager. What is the most effective response?

- A) Grant the access for the afternoon and remove it before end of day — accurate records matter most.
- B) Decline to grant access, but offer to make the record updates from the engineer's information, and help them submit the access request through the proper route for the future.
- C) Decline and tell them to wait until the manager returns.
- D) Grant the access but email the manager so they know what was done.

**Correct answer: B**

**Explanation:** Separating what the engineer needs (accurate records this week) from what they asked for (approval authority exercised informally): option B serves the need fully while declining the authority, keeping every change inside accountable, referenced access, and fixing next week's process too. Option A grants an unknown colleague edit rights that the approval step exists to consider, replacing a designed control with a memory-dependent one. Option D is option A plus a confession, quietly transferring the awkwardness to a manager on leave. Option C protects the boundary and abandons the need. This tests refusing the shortcut while absorbing the legitimate work it was trying to reach, and routing the requester onto the proper path for next time.

**Question 7 (moderate) — A colleague's recurring error**

A newer teammate keeps recording the model number in the serial number field when registering incidents. The candidate has quietly corrected eleven of their tickets over three weeks. The teammate is enthusiastic, hard-working, and has not noticed. What is the most effective response?

- A) Keep correcting the tickets — it takes seconds, and pointing it out might dent their confidence.
- B) Report the pattern to a manager so it can be addressed through their probation review.
- C) Show the teammate the pattern kindly and directly with one example, explain why the distinction matters downstream, and suggest a note in the team's quick-reference guide since the fields are easily confused.
- D) Post a general reminder in the team channel about using the correct fields, without naming anyone.

**Correct answer: C**

**Explanation:** Eleven corrections over three weeks is a pattern with a simple cause and a kind, five-minute fix. Option C delivers it directly to the person, concretely, with the downstream harm attached, and with a systemic tail — a line in the quick-reference guide fixes the confusion for every future joiner too. This is the community collaboration skill in miniature. Option A costs indefinite time and denies the colleague feedback they would plainly want. Option B escalates a coaching moment into a personnel matter disproportionately. Option D is passive-aggressive: the person who needs the message rarely decodes it. This tests giving early, private, generous feedback rather than silence, escalation, or vague broadcasting.

**Question 8 (challenging) — Evidence of an unauthorised change**

Reconciling the CMDB against the discovery scan, a production server's memory is found doubled some time in the past month. There is no change record, no data correction request, and the server sits in a cluster the organisation's most experienced infrastructure engineer looks after. It is not known for certain that the engineer did it, or whether an emergency change record exists elsewhere. What is the most effective response?

- A) Record the discrepancy and mention the missing change reference to the change and release manager, while asking the engineer neutrally whether they know the history — treating it as an unexplained discrepancy to be resolved, not an accusation.
- B) Update the CMDB to show the new memory size, since the scan proves current reality, and move on.
- C) Email the engineer's line manager stating that an unauthorised change appears to have been made.
- D) Leave the CMDB unchanged until someone explains the discrepancy, so the database does not legitimise an unauthorised change.

**Correct answer: A**

**Explanation:** There is a verified discrepancy and two honest unknowns — who, and whether an emergency record exists beyond view. Option A handles each layer correctly: the discrepancy is recorded, the missing reference goes to the manager (who may have visibility the candidate lacks), and the engineer is asked as a source rather than confronted as a suspect. Option B updates the record to match the scan but erases the trace of the governance gap — the discrepancy is the evidence, and reconciliation's job is to surface it, not launder it. Option D inverts the same mistake: the CMDB should reflect reality, flagged and under investigation, since an incident responder tonight needs the true memory size regardless of who authorised it. Option C leaps to a conclusion the candidate does not hold, in writing, bypassing their own line, risking real damage if the engineer holds an emergency authorisation. This tests the professional sequence: record faithfully, escalate through the line, inquire without accusing.

**Question 9 (challenging) — "Just mark them verified"**

The annual verification deadline is Friday, and 60 low-value peripheral assets remain unverified, all in the basement store. A teammate says: "Nobody audits the basement junk. Mark them verified — they were all fine last year, and we'll be down there in a month anyway for the disposal run. Missing the deadline looks worse than a formality." Which response would be least effective?

- A) Mark the 60 assets as verified, as suggested.
- B) Report the honest position to the manager: the deadline will be met for all assets except 60 basement peripherals, and propose either a focused push to verify them by Friday or an agreed short extension for that batch.
- C) Spend an hour checking whether the basement batch can realistically be verified before Friday.
- D) Suggest to the teammate that combining the verification with next month's disposal run be proposed to the manager as a formal re-plan, rather than done silently.

**Correct answer: A**

**Explanation:** Recording sixty verifications that never happened is least effective. "Verified" is a factual claim that a person confirmed an asset's existence, location, and state on a date; writing it falsely converts the CMDB's strongest field into decoration. Each plank of the teammate's reasoning fails on inspection — audits sample precisely to catch what nobody expects to be checked, last year's verification is last year's fact, and "we'll be there next month anyway" is exactly option D's legitimate move made openly instead of silently. The effective options form a sequence: C first (an hour of feasibility checking may dissolve the dilemma), then B (the honest position with two workable proposals), with D as a variant of B. This tests recognising that almost every "just fudge it" suggestion contains a reasonable plan trying to get out — the fudge is the silence, not the schedule.

**Question 10 (challenging) — An independent fix keeps coming back**

Last month, untagged mobile phone records were traced to a broken onboarding form field, fixed with the form's owner, and the affected records cleaned — a tidy piece of independent problem-solving. This week untagged phone records are appearing again: the form's owner rolled back their system to an earlier version, restoring the broken field, and mentions their team does this "most months" during their release cycle. What is the most effective response?

- A) Fix the form again and re-clean the records — the previous solution worked; it just needs re-applying.
- B) Recognise this as a recurring problem with a systemic cause beyond individual reach, raise it to the change and release manager with the pattern documented — the fix, the rollback cycle, the recurrence — and suggest what a durable remedy might need, such as the fix being incorporated into the other team's baseline version.
- C) Ask the form's owner to give advance notice before every rollback so the fix can be re-applied each time.
- D) Add a weekly task to check for and clean up untagged phone records.

**Correct answer: B**

**Explanation:** Last month's judgement was right — one broken field, one owning team, one fix: analyst-sized. The recurrence reveals the true shape: the other team's release cycle systematically reverts the fix, so the durable remedy lives inside their versioning practice, which is a conversation between owners rather than something arranged from the side. Option B is the problem management skill executed exactly as written for this level: the pattern is investigated, the level of the problem is understood as having moved from operational to tactical, and it is passed to where it can actually be resolved while contributing to the remedy. Options A, C and D are three costumes on the same mistake — treating a recurring systemic problem as a repeating local one, each institutionalising the symptom rather than fixing it. This tests recognising when a problem has outgrown "independently solving smaller problems".

**Question 11 (challenging) — The colleague nobody briefs**

A team of four includes a part-time colleague who works Wednesday to Friday. Decisions and context from Monday and Tuesday — new conventions agreed, priorities shifted, quirks discovered — reach the full-timers by osmosis but often never reach her. Twice this month she has spent her Wednesday morning doing work that Monday's decisions had made unnecessary, and was corrected in a meeting for using a naming convention that changed while she was off. She has started apologising for "always being behind". The candidate is not the team lead. What is the most effective response?

- A) Reassure her privately that nobody minds and that being part-time inevitably means missing things.
- B) Start a simple shared decisions log the whole team keeps, personally brief her on Monday–Tuesday changes in the meantime, and suggest to the team lead that briefing part-time colleagues on what changed be made a standing habit rather than luck.
- C) Suggest she switch to full-time hours if she wants to stay properly informed.
- D) Mention to the team lead that she seems to be struggling to keep up.

**Correct answer: B**

**Explanation:** The correct diagnosis is that the information flow is broken along the line of her working pattern, not that she is "behind". Option A tells her to keep absorbing a fixable structural problem as a personal cost. Option C solves the exclusion by asking her to stop being part-time — assimilation rather than inclusion. Option D reports her as the problem when the team's habits are the problem, risking that framing following her into performance conversations she does not deserve. Option B fixes the mechanism at three levels: a decisions log that helps everyone, an interim personal briefing that stops the immediate waste, and a suggestion to the team lead that converts a peer's workaround into a team norm. This tests recognising and dealing with issues in the team environment — the community collaboration skill.

**Question 12 (challenging) — Credit where it is not due**

At the quarterly service review, a senior manager praises the CMDB accuracy improvement — from 84% to 93% — and congratulates the change and release manager, who accepts the praise and moves on. The improvement came almost entirely from a data-cleansing method a junior teammate designed and ran over three months; the manager was barely involved and knows it. The junior teammate was not at the meeting, hears about it second-hand, and says flatly: "That's the last extra effort I put in here." What is the most effective response?

- A) Advise the teammate to let it go — credit drifts upward in every organisation, and complaining changes nothing.
- B) Tell the senior manager directly that the change and release manager took false credit.
- C) Encourage the teammate to raise it with the change and release manager themselves, and separately mention to the manager — factually, without accusation — that the teammate designed and ran the cleansing work and is feeling unrecognised.
- D) Post the true story in the team channel so everyone knows who did the work.

**Correct answer: C**

**Explanation:** A manager accepting praise for a team's results is ambiguous and not necessarily deliberate; what is unambiguous is the effect on the person who did the work. Option C addresses the effect through the two people who can repair it: encouraging the teammate to speak for themselves respects their ownership of the work, and the factual, non-accusatory mention to the manager supplies information and lets the manager choose the repair — most managers, faced with the fact, act quickly. Option A converts one bad afternoon into settled cynicism and abandons a fixable situation. Option B outruns the evidence about intent and bypasses the manager's own chance to fix it. Option D performs the correction as public shaming. This tests fixing the recognition, not the scoreboard.

### Administration tips

- **Score for whether a candidate pairs a firm decline with active help toward the proper route** — "hold the line, carry the load" is the pattern that distinguishes a strong answer from a merely compliant one.
- **Watch for whether a candidate separates certain from uncertain elements** within a single scenario.
- **Treat any option that records an unestablished fact as a near-automatic low score**, regardless of how small the stated stakes are.
- **Note whether a candidate prefers a direct, kind conversation to escalation, and escalation to silence**, except where integrity or security is genuinely at stake.
- **Keep the distinction between "most effective" and "least effective" clear when scoring**, since they pull in opposite directions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that trades integrity for tidiness** — clean-looking reports and matched numbers manufactured rather than earned.
- **Crediting deference to seniority as if it were good judgement.**
- **Rewarding self-reliance beyond the role's remit** — granting access informally, re-fixing systemic problems indefinitely, secretly redoing others' work.
- **Missing when "come back with a form" without help is scored as compliant** when it is actually obstructive.
- **Rewarding escalation before conversation**, except where integrity or security is at stake.
- **Missing when a scenario shows someone repeatedly disadvantaged by a structural pattern**, and the strong answer fixes the mechanism rather than the person.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a configuration analyst: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests catching a broken naming convention, reasoning from access rules to what an audit log does and does not prove, finding fields that cannot all be true at once, tracing dependencies to their real impact, and reconciling three disagreeing sources into one explained figure. The numeric section tests computing accuracy rates and weighted averages correctly, scaling a sample to a database, working a backlog's net rate, and turning ghost records into a payback period. The verbal section tests holding statements strictly to what a standard actually says, and reading "exactly one", "should", and "must not leave the building" for their precise permissions. The situational judgement section tests the moments that define a configuration analyst's reputation: declining an undocumented shortcut while carrying the legitimate load, raising an error in a manager's work promptly, refusing to mark the unverified as verified, and noticing whose chair the information never reaches.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can maintain accurate records under real pressure, read procedures precisely, and exercise sound judgement at the boundary between process and people — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
