# Service Readiness Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for service readiness analyst, within the UK Government Digital and Data profession. The material is job-specific: it uses the materials a service readiness analyst genuinely works with — test results, security checklists, change requests, risk logs, KPI reports, and readiness criteria — and the decisions genuinely made, such as checking whether an application meets its security criteria, assessing the impact of a change, spotting a risk that needs flagging, and escalating it clearly to a service transition manager.

This role tests products and is accountable for application acceptance and for checking whether security criteria have been met, and flags potential risks upward. That is a role built on careful, honest, methodical thinking. Cognitive items measure whether a candidate can spot the gap in a test report or follow a security rule to its correct conclusion. Numeric items measure whether a candidate can read a KPI table, work out a pass rate, or notice a trend that signals trouble. Verbal items measure whether a candidate can read a security standard or a supplier's email and understand exactly what it commits to — and what it quietly does not. Situational judgement items measure whether a candidate chooses sensible, professional responses when there is pressure to say "it's fine" and the evidence says "not yet".

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. At analyst level, consider offering the platform's ungraded practice questions first. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using realistic workplace scenarios rather than abstract puzzles: security checklists, test completion reports, risk logs, change impact notes, and release checklists.

The typical format is an online, timed test lasting 15 to 30 minutes, usually with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many platforms are adaptive, and ungraded practice questions usually precede the scored test.

Cognitive assessment matters for this role because professional value lies in systematic verification. Checking whether security criteria have been met is rule-based deduction. Testing a product against readiness criteria is error checking. Deciding which of today's readiness tasks to do first is prioritising under constraints. Noticing that a pattern of small test failures points at one underlying cause is applied problem solving.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Error checking** maps to the core duty of testing products and checking whether security criteria have been met.
- **Logical deduction** maps to the **Change management** skill: reasoning correctly from "this component changes" to "these services, users and controls are affected".
- **Pattern recognition** maps to the **Asset and configuration management** and **Problem management** skills.
- **Prioritisation** maps to the **Ownership and topic** and **Incident management** skills.
- **Applied problem solving** maps to the **Availability and capacity management** skill and the **Service focus** skill.
- **Structured thinking under pressure** supports the duty to flag risks and escalate them: a well-structured flag (what, evidence, impact, suggestion) makes escalation useful rather than alarming.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in test case IDs**

Test cases are numbered by module and sequence: SEC-001 to SEC-020 for security tests, PERF-001 to PERF-010 for performance tests, and FUNC-001 to FUNC-050 for functional tests. A completion report claims "all tests executed" and lists the executed IDs. A spot-check of the security range shows: SEC-001, SEC-002, SEC-003, SEC-005, SEC-006 ... SEC-020. What should be concluded?

- A) All security tests were executed — the report says so.
- B) SEC-004 does not appear in the executed list, so at least one security test seems unexecuted; the claim needs checking.
- C) SEC-004 was probably renamed, so there is no issue.
- D) The functional tests were not executed.

**Correct answer: B**

**Explanation:** The list jumps from SEC-003 to SEC-005, so SEC-004 is missing, directly contradicting "all tests executed". This tests scanning a numbered sequence for gaps rather than trusting a summary sentence over the detail beneath it — a strong candidate's answer treats "probably renamed" as an unverified guess, not a finding.

**Question 2 (easy) — Deduction from a security criterion**

Security criteria state: "An application may go live only if penetration testing has been completed AND all critical findings have been remediated." A supplier reports: "Penetration testing completed on 2 June; two critical findings raised." Based only on this, may the application go live?

- A) Yes — penetration testing is complete.
- B) No — critical findings were raised, so it can never go live.
- C) Not yet determinable — it needs to be known whether the two critical findings have been remediated.
- D) Yes — findings are normal in penetration tests.

**Correct answer: C**

**Explanation:** The criterion has two conditions joined by AND; only the first is confirmed, and remediation status is unstated. Option B misreads the criterion: findings do not forbid go-live, unremediated critical findings do. This tests checking every clause of a compound criterion and asking precisely for what is missing.

**Question 3 (easy) — Error checking a release checklist**

A release checklist requires: (1) code deployed to staging, (2) smoke tests passed in staging, (3) security scan run against the staging build, (4) sign-off from the readiness analyst. The log reads: 09:10 — Code deployed to staging (build 4.2.1); 09:40 — Security scan run against build 4.2.0; 10:15 — Smoke tests passed in staging (build 4.2.1). What is the problem?

- A) The smoke tests ran after the security scan, which is the wrong order.
- B) The security scan was run against the previous build (4.2.0), not the build being released (4.2.1).
- C) Step 4 is missing, so nothing else matters.
- D) There is no problem.

**Correct answer: B**

**Explanation:** The scan references the wrong build — real, recent evidence about the wrong thing. Option A invents an ordering rule the checklist does not state. This tests checking not just "was it done?" but "was it done to this?" — version and identifier mismatches are among the most common and dangerous findings in readiness work.

**Question 4 (easy) — Prioritising a readiness morning**

It is 9:00. Four items await: (1) a risk flagged yesterday needs one supporting screenshot before a 10:00 meeting where a service transition manager will present it; (2) a supplier has emailed asking for confirmation of receipt of their test report "when convenient"; (3) weekly KPI figures are due by end of day; (4) a colleague wants help interpreting a security scan result, and their work is paused until a response.

Which order is most sensible?

- A) 1, 4, 3, 2
- B) 3, 1, 4, 2
- C) 2, 1, 4, 3
- D) 4, 1, 2, 3

**Correct answer: A**

**Explanation:** Item 1 has the hardest, nearest deadline and feeds a manager's escalation — quick, and done first. Item 4 unblocks a colleague next. Item 3 has a full day. Item 2 is a courtesy. This tests sequencing by hard-near-deadline first, then unblocking others, then soft deadlines, then courtesies.

**Question 5 (moderate) — Impact assessment logic**

Change impact rules: (i) any change to the authentication service affects all applications that use single sign-on; (ii) applications A, B and C use single sign-on; application D uses its own login; (iii) any application affected by a change must have its smoke tests re-run before the change is closed. A change to the authentication service was implemented last night. Which statement must be true?

- A) Application D's smoke tests must be re-run.
- B) Applications A, B and C must have their smoke tests re-run before the change is closed.
- C) All four applications must be re-tested.
- D) No re-testing is needed because the change was to a shared service, not to the applications.

**Correct answer: B**

**Explanation:** The change affects every single sign-on application (A, B, C, not D), and affected applications need re-testing. This tests following a dependency chain precisely — no less (risk) and no more (waste) than the rules require.

**Question 6 (moderate) — Spotting the inconsistency in a readiness report**

A supplier's readiness report states: "User acceptance testing ran from 3 to 14 June with 25 testers. All 180 scenarios were completed. The defect log shows 42 defects raised during UAT, of which 39 are closed and 6 remain open." What is wrong?

- A) 25 testers is too few for 180 scenarios.
- B) 39 closed plus 6 open equals 45, which does not match the 42 defects raised.
- C) Twelve days is too short for user acceptance testing.
- D) Nothing is wrong.

**Correct answer: B**

**Explanation:** 39+6=45 ≠ 42 — three defects are unaccounted for. Options A and C are unsupported opinions, not findings. This tests the reconciliation habit — do the parts sum to the whole — one of the fastest checks available, and one that often reveals a process gap.

**Question 7 (moderate) — Deduction about environments**

Standards state: (i) performance testing results are valid only if run in an environment matching production sizing; (ii) the staging environment matches production sizing; the development environment does not; (iii) results from invalid environments may be used for early indication but never for acceptance. A project offers performance results run in development, and they are excellent. What is the correct position?

- A) Accept them — excellent results are excellent results.
- B) Reject them entirely and instruct the project to delete them.
- C) Treat them as early indication only, and require a performance run in staging (or another production-sized environment) for acceptance.
- D) Accept them if the project manager confirms development is "close enough" to production.

**Correct answer: C**

**Explanation:** Development does not match production sizing, so the results are invalid for acceptance but explicitly usable as early indication. This tests applying the rules mechanically rather than letting result quality override source validity, and a strong candidate's answer notes good rules often anticipate the tempting shortcut and provide a legitimate half-way house.

**Question 8 (moderate) — Sequencing readiness activities**

Five readiness activities before go-live: (i) security remediation verification must happen after a supplier fix, landing Wednesday morning; (ii) the operations handover session requires the final runbook, completed Tuesday; (iii) the go/no-go review is Friday and requires all other activities complete; (iv) the backup restoration test can run any day but occupies a full day; (v) at most one full-day activity per day, and the handover and verification are each half-day activities. Today is Monday. Which plan works?

- A) Monday: backup restoration test; Tuesday: handover; Wednesday: verification; Thursday: spare; Friday: go/no-go
- B) Monday: handover; Tuesday: backup restoration test; Wednesday: verification; Thursday: spare; Friday: go/no-go
- C) Monday: verification; Tuesday: backup restoration test; Wednesday: handover; Thursday: spare; Friday: go/no-go
- D) Monday: backup restoration test; Tuesday: verification; Wednesday: handover; Thursday: spare; Friday: go/no-go

**Correct answer: A**

**Explanation:** Plan A places every activity after its dependency: backup test any day (Monday), handover Tuesday (after the runbook completes Tuesday), verification Wednesday (after Wednesday's fix). The other plans each place an activity before its dependency exists. This tests converting each rule into "X not before Y" and walking each candidate plan day by day.

**Question 9 (moderate) — Choosing the appropriate channel**

Readiness testing discovers a configuration file in staging that appears to contain a live production database password. Which first action is most appropriate?

- A) Post a message in the project's open team channel asking "is this a real password?"
- B) Report it immediately through the organisation's security incident process and alert a service transition manager, so the credential can be changed and the exposure assessed.
- C) Try the password against the production database to check whether it is real.
- D) Remove the file from staging and carry on testing.

**Correct answer: B**

**Explanation:** A potentially exposed production credential is a security event with a proper channel. Option A broadcasts the secret's existence to a wide audience. Option C is itself unauthorised access. Option D hides the event without triggering the credential change that actually reduces risk. This tests the pattern for security discoveries: contain through the proper channel, inform the right people, never probe, never tidy up silently.

**Question 10 (hard) — Root-cause reasoning across test results**

Regression testing shows failures in four screens: case search, case summary, document upload, and audit history. Facts: (a) all four screens call the same shared records API; (b) the payments screen, which does not use that API, passes; (c) the records API was upgraded in this release; (d) each failing screen shows the same error: "field 'caseRef' not found". What is the best-supported conclusion and next step?

- A) Four separate screen defects; raise four unrelated bugs to four developers.
- B) The records API upgrade likely changed or removed the 'caseRef' field, breaking its consumers; raise one defect against the API with the four screens as evidence, and flag the impact to a service transition manager.
- C) The test environment is broken; re-run everything tomorrow.
- D) The payments screen is the anomaly and should be investigated first.

**Correct answer: B**

**Explanation:** One explanation accounts for all four facts: shared dependency, non-consumer passing, dependency changed in this release, identical error. This tests the reasoning pattern of finding what the failures share, what the passes lack, and connecting to what changed — a strong candidate's answer proposes one well-evidenced defect plus an upward flag about impact.

**Question 11 (hard) — KPI logic with competing constraints**

A managed service component has two KPIs: response time (95% of requests under 2 seconds) and cost (monthly infrastructure spend within budget). This month: response times meet target, but only because an engineer doubled the server count in an unrecorded change, pushing spend 40% over budget. Reversing the change would restore the budget but likely breach the response-time KPI at current demand. What is the most defensible immediate position?

- A) Keep the extra servers quietly — response time is what users feel.
- B) Reverse the change immediately — budget is budget.
- C) Flag the situation to a service transition manager: an unrecorded change is masking a genuine capacity shortfall, and the trade-off between cost and performance needs a proper decision, with the change retrospectively recorded either way.
- D) Split the difference by removing half the extra servers.

**Correct answer: C**

**Explanation:** Two separate problems exist: an unrecorded change (must be surfaced and recorded regardless) and a genuine cost-versus-performance trade-off (needs a decision from someone with authority over both). Options A and B each pick a side unilaterally and below the right level. This tests untangling two tangled problems rather than solving them as one.

**Question 12 (hard) — Building a coherent readiness framework**

Consolidating readiness checks from three sources into one checklist. Source 1 (security): penetration test complete; critical findings remediated; credentials vaulted. Source 2 (operations): runbook delivered; monitoring configured; on-call rota agreed. Source 3 (previous project's lessons): monitoring configured; rollback tested; credentials vaulted. Requirements: include every distinct check once; group into "security", "operations", and "resilience" so rollback testing sits under resilience; order groups security → operations → resilience. How many distinct checks are there, and which check appears last?

- A) 9 checks; rollback tested last
- B) 7 checks; rollback tested last
- C) 7 checks; on-call rota agreed last
- D) 8 checks; credentials vaulted last

**Correct answer: B**

**Explanation:** "Monitoring configured" and "credentials vaulted" each appear twice across the sources, leaving seven distinct checks; the resilience group contains only rollback tested, placed last by the ordering rule. This tests de-duplicating and grouping inputs from multiple sources into one coherent framework.

### Administration tips

- **Score for whether a candidate scans a numbered sequence for a gap** rather than trusting a summary claim.
- **Watch for whether a candidate checks every clause of a compound criterion** before concluding.
- **Note whether a candidate verifies evidence is about the correct build, environment, or version**, not merely present.
- **Note whether a candidate untangles two problems arriving knotted together** rather than solving them as one.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that trusts a summary sentence over the underlying detail.**
- **Crediting an answer that accepts evidence about the wrong build, environment, or version.**
- **Missing when a candidate lets result quality override source validity.**
- **Accepting an answer that invents a comforting explanation** rather than flagging an unresolved question.
- **Missing when a candidate merges two distinct problems into a single unilateral fix.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate handles numbers in realistic work situations: test pass rates, defect counts, KPI figures, capacity utilisation, incident volumes, and availability percentages. The whole test is built from percentages, ratios, averages, rates, and reading tables.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions, each giving a small data set followed by a calculation or comparison. Calculators are normally allowed.

Numeric reasoning matters for this role because acceptance decisions are numeric decisions wearing sentences. "Testing is essentially complete" means a specific pass percentage. Verifying a supplier's headline figure from their own raw numbers, and finding disagreement before go-live rather than after, is a core value this role provides.

### How this assessment maps to the role

- **Percentages and pass rates** map to the core duty of testing products and checking criteria.
- **KPI arithmetic** maps to the **Availability and capacity management** skill.
- **Defect and incident rates** map to the **Problem management** and **Incident management** skills.
- **Impact quantification** maps to the **Change management** skill.
- **Data reconciliation** maps to the **Asset and configuration management** skill.
- **Evidence-based flags** map to the escalation duty and the **User focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Test pass rate**

A test completion report shows 168 of 175 executed test cases passed. What is the pass rate, to the nearest whole percentage?

- A) 92%
- B) 94%
- C) 96%
- D) 98%

**Correct answer: C**

**Explanation:** 168÷175=96%. This tests basic pass-rate calculation, and a strong candidate's answer verifies from the smaller number (7 failed ÷ 175 = 4% failed, so 96% passed).

**Question 2 (easy) — Average defects per release**

The last five releases introduced 6, 9, 4, 11, and 10 defects respectively. What is the mean number of defects per release?

- A) 7
- B) 8
- C) 9
- D) 40

**Correct answer: B**

**Explanation:** 40÷5=8. Option D is the total, not the average. This tests distinguishing the total from the average, and sense-checking against the data's range (4 to 11).

**Question 3 (easy) — Reading a KPI table**

| Component | Availability target | Availability actual |
|---|---|---|
| Web front end | 99.5% | 99.7% |
| Records API | 99.9% | 99.6% |
| Document store | 99.0% | 99.2% |

Which component missed its availability target?

- A) Web front end
- B) Records API
- C) Document store
- D) None of them

**Correct answer: B**

**Explanation:** Records API's 99.6% falls below its 99.9% target, despite looking "high" in isolation. This tests comparing actual against target row by row, rather than judging figures against a general impression of "high" — targets differ by component's criticality.

**Question 4 (easy) — Percentage of users affected**

An impact assessment finds a change affects the case-search feature, used by 1,350 of the service's 4,500 registered users. What percentage of users is affected?

- A) 25%
- B) 30%
- C) 33%
- D) 35%

**Correct answer: B**

**Explanation:** 1,350÷4,500=30%. This tests basic percentage calculation, and a strong candidate's answer notes that quantifying impact as a proportion ("affects 30% of users") makes an escalation far more actionable than a vague claim.

**Question 5 (moderate) — Defect closure rate and projection**

Fourteen defects must be closed before go-live. Over the past four days the team closed 2, 3, 2 and 3 defects (10 in total). Go-live is 2 working days away. At the average closure rate of the past four days, how many of the 14 will remain open at go-live?

- A) 0
- B) 4
- C) 5
- D) 9

**Correct answer: A**

**Explanation:** 4 remain open now; average rate 2.5/day; over 2 days, ~5 more can close, exceeding the 4 remaining. This tests establishing the current position before projecting, and a strong candidate's answer notes a projection landing exactly on "just enough" has zero margin — worth flagging honestly rather than reporting as simply green.

**Question 6 (moderate) — Ratio of severities**

The open defect log shows 6 critical, 18 major, and 24 minor defects. What is the ratio of critical to major to minor, in simplest form?

- A) 6:18:24
- B) 1:3:4
- C) 3:1:4
- D) 1:2:4

**Correct answer: B**

**Explanation:** All divide by 6, giving 1:3:4. This tests simplifying a ratio and keeping it in the order the question names the categories.

**Question 7 (moderate) — Availability from downtime minutes**

A service ran for a 30-day month (43,200 minutes) with two outages: 54 minutes and 36 minutes. What availability percentage did it achieve, to two decimal places?

- A) 99.79%
- B) 99.90%
- C) 99.80%
- D) 99.98%

**Correct answer: A**

**Explanation:** Total downtime = 90 minutes; downtime fraction ≈0.208%; availability ≈99.79%. This tests computing the small downtime fraction and subtracting from 100%, and a strong candidate's answer notes the useful equivalence: a 99.9% target permits only about 43 minutes of monthly downtime.

**Question 8 (moderate) — Percentage change in incident volume after go-live**

In the four weeks before a change went live, a service averaged 45 incidents per week. In the two weeks after go-live, it recorded 63 and 57 incidents. What is the percentage increase of the post-go-live average over the pre-go-live average?

- A) 15%
- B) 25%
- C) 33%
- D) 60%

**Correct answer: C**

**Explanation:** Post-go-live average = 60/week; increase = 15÷45 ≈33%. Option B divides by the new value instead of the original. This tests dividing by the starting value, and a strong candidate's answer connects the figure to a concrete flag: "this change appears to have degraded service stability".

**Question 9 (moderate) — Weighted readiness score**

A readiness scorecard weights areas as: security 40%, operations 35%, documentation 25%. A product scores 65 (out of 100) on security, 90 on operations, and 80 on documentation. What is its weighted score, and does it meet an acceptance threshold of 80?

- A) 78.3 — no
- B) 77.5 — no
- C) 80.5 — yes
- D) 78.5 — no

**Correct answer: B**

**Explanation:** 65×0.4+90×0.35+80×0.25=26+31.5+20=77.5, below the 80 threshold. Option A is the unweighted mean, ignoring the deliberate emphasis on security. This tests weighted-average calculation, and a strong candidate's answer notes the weighting design deliberately prevents a strong operations score from compensating for weak security.

**Question 10 (hard) — Capacity trend against a KPI**

A database server's storage stands at 3.30 TB used of 4.00 TB capacity, up from 3.06 TB three months ago (steady growth). A standard requires flagging a capacity risk when usage is projected to exceed 90% of capacity within six months. Should it be flagged, and why?

- A) No — usage is currently at 82.5%, below the 90% trigger.
- B) Yes — at 0.08 TB/month growth, usage reaches the 3.60 TB (90%) trigger in about 3.75 months, inside the six-month window.
- C) No — the server will not be completely full for about 8.75 months.
- D) Yes — any usage above 80% must always be flagged.

**Correct answer: B**

**Explanation:** Growth = 0.08 TB/month; gap to the 90% trigger = 0.30 TB; time to trigger ≈3.75 months, inside the six-month window. Option A answers the current level, not the projected one; option C computes time to 100%, a different threshold. This tests projecting a trend against a stated trigger, not the current level or full capacity.

**Question 11 (hard) — Reconciling test counts across sources**

A supplier's summary says 240 test cases were planned. Their detailed report lists: 205 executed and passed, 18 executed and failed, and 12 descoped with approval. Separately, the test tool export shows 223 executions. How many planned cases are unaccounted for in the detailed report, and does the execution count reconcile with the tool?

- A) 5 unaccounted; tool reconciles with the report
- B) 17 unaccounted; tool reconciles with the report
- C) 17 unaccounted; tool shows 6 fewer executions than the report
- D) 5 unaccounted; tool shows 12 fewer executions than the report

**Correct answer: A**

**Explanation:** 205+18+12=235 accounted for against 240 planned = 5 unaccounted. Executions implied (205+18=223) match the tool's 223 exactly. This tests reconciling each pair of sources on its own terms, and being precise about which categories count in each — descoped counts as "accounted for" but never as "executed".

**Question 12 (hard) — Combining pass rates across modules**

Security testing covered two modules. Module One: 40 tests, 90% passed. Module Two: 160 tests, 95% passed. What was the overall pass rate across all security tests?

- A) 92.5%
- B) 94%
- C) 93%
- D) 95%

**Correct answer: B**

**Explanation:** Module One 36 passed, Module Two 152 passed; combined = 188÷200=94%. Averaging the percentages (92.5%) treats a 40-test module as equal weight to a 160-test module. This tests combining rates through raw counts, and sense-checking that the result sits closer to the larger module's figure.

**Question 13 (hard) — Reading a trend table for a go/no-go input**

| Week | Incidents raised | Incidents resolved | Backlog at week end |
|---|---|---|---|
| 1 | 30 | 24 | 26 |
| 2 | 34 | 30 | 30 |
| 3 | 38 | 32 | 36 |
| 4 | 36 | 30 | 42 |

The backlog at the start of week 1 was 20. Which statement gives the most accurate go/no-go input?

- A) Resolution is keeping pace with demand — the backlog is stable.
- B) The backlog has more than doubled in four weeks (20 to 42) because resolutions have trailed arrivals every single week; at the current net rate (about +5.5 per week), it will pass 60 within four more weeks.
- C) Incidents raised are falling, so the situation is improving.
- D) The backlog figures must be wrong because they do not follow from the other columns.

**Correct answer: B**

**Explanation:** Verifying each row (previous backlog + raised − resolved) confirms the table is internally consistent, ruling out D. Arrivals exceeded resolutions every week; average net growth is 5.5/week, projecting past 60 in four more weeks. This tests verifying, quantifying, and projecting a trend — the whole craft of numeric evidence for a go/no-go decision.

### Administration tips

- **Score for whether a candidate identifies the correct base or denominator** before dividing.
- **Watch for whether a candidate combines multi-source figures via raw counts**, not by averaging percentages.
- **Note whether a candidate reconciles table rows internally** before trusting a headline claim.
- **Note whether a candidate projects a trend against the correct threshold**, not a nearby one.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an average of percentages across differently sized groups.**
- **Crediting a projection answering a different threshold than the one asked about.**
- **Missing when a candidate skips reconciling a table's internal arithmetic.**
- **Accepting a percentage change divided by the wrong base.**
- **Missing when a candidate confuses a count with a rate.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, understands, and draws conclusions from written material: security standards, readiness criteria, supplier reports, service level agreements, incident procedures, and the emails in which project teams describe — sometimes optimistically — how ready their product really is.

The dominant question format is True / False / Cannot say. Other formats include choosing the best summary, identifying what follows logically, and judging which of several sentences communicates most clearly. A typical test runs 15 to 25 minutes with 20 to 30 questions.

The single most important rule: answer from the passage alone. Verbal precision matters for this role because acceptance decisions rest on documents, and documents are written by people with incentives. A supplier report that says "testing is substantially complete" is doing something different from one that says "all planned tests have been executed".

### How this assessment maps to the role

- **Precise comprehension** maps to the core accountability for application acceptance and security criteria.
- **True / false / cannot say discipline** maps to the risk-flagging duty.
- **Inference control** maps to the **Change management** skill.
- **Reading procedures accurately** maps to the **Continuity management**, **Incident management** and **Asset and configuration management** skills.
- **Clear-writing judgement** maps to the duty to document change requests and the **Community collaboration** skill.
- **Reading user evidence carefully** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 5, the candidate reads this extract from a departmental security standard.

> "Before any application handling official information is accepted into live service, a security assessment must be completed by an accredited assessor. Critical and high-severity findings must be remediated before go-live; medium-severity findings must either be remediated or have a risk acceptance signed by the Senior Information Risk Owner (SIRO). Low-severity findings may be carried into live service provided they are recorded in the risk register and reviewed within three months of go-live. Applications that do not handle official information follow the lightweight assurance route, which is documented separately."

**Question 1 (easy) — True / false / cannot say**

Statement: "Critical findings must be remediated before go-live."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Stated directly. This tests confirming an exact match against the text — with no flipped term — before banking an easy mark.

**Question 2 (easy) — True / false / cannot say**

Statement: "Medium-severity findings must always be remediated before go-live."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Two routes exist for medium findings — remediation, or a signed SIRO risk acceptance. "Must always be remediated" denies the second route. This tests catching an absolute word ("always") that converts a nuanced passage into a false statement.

**Question 3 (moderate) — True / false / cannot say**

Statement: "The SIRO must sign risk acceptances for low-severity findings carried into live service."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Low-severity findings require recording and review; the SIRO's signature attaches only to medium-severity risk acceptances. This tests reading a tiered rule tier by tier, rather than transplanting a requirement from one severity band to another.

**Question 4 (moderate) — True / false / cannot say**

Statement: "A case-tracking application that handles official information must have its security assessment completed by an accredited assessor before acceptance into live service."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage's first sentence covers "any application handling official information", and a case-tracking application handling official information is an instance of that category. This tests a valid deduction from a general rule to a specific case, which the True/False/Cannot Say format does allow.

**Question 5 (moderate) — Best summary**

Which sentence best summarises the passage?

- A) All findings must be fixed before any application goes live.
- B) Applications handling official information need an accredited security assessment, with remediation or governed acceptance requirements that scale with finding severity; other applications follow a separate lightweight route.
- C) The SIRO decides whether applications may go live.
- D) Low-severity findings can be ignored for three months.

**Correct answer: B**

**Explanation:** B captures scope, requirement, severity ladder, and the out-of-scope route without contradicting any detail. Option D turns "recorded and reviewed" into "ignored" — nearly the opposite. This tests sketching a passage's skeleton before matching against candidate summaries.

For Questions 6 to 9, the candidate reads this email from a supplier's delivery manager.

> "Following this week's testing, we're in good shape for the 28th. Performance testing is complete against the agreed profiles and all response-time thresholds were met. On security, the penetration test report arrived yesterday: no critical findings, three high-severity findings for which fixes are being developed, and some lower-severity items we'll talk through at the readiness review. Documentation is on track — the runbook draft is with your operations team for comment. One thing to note: the data migration dry run scheduled for Monday has been pushed back to Wednesday due to environment availability, which leaves it a little closer to the go-live date than we'd like, but we don't see this as a blocker."

**Question 6 (easy) — True / false / cannot say**

Statement: "All response-time thresholds were met in performance testing."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Directly stated, within the scoped claim ("against the agreed profiles"). This tests locating the supporting sentence and noticing the boundary of a scoped claim.

**Question 7 (moderate) — True / false / cannot say**

Statement: "The three high-severity security findings have been fixed."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** "Being developed" is present continuous — work in progress, not complete. This tests tense-precision: "being developed" describes activity, not completion, and a reader who treats it as "done" has accepted a promise as evidence.

**Question 8 (moderate) — True / false / cannot say**

Statement: "The delay to the data migration dry run was caused by problems with the migration scripts."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The email states a different cause: "environment availability". This tests recognising that an explicitly stated cause makes an alternative cause false, not merely unsupported.

**Question 9 (hard) — Reading what the email does not say**

Judged strictly against the email's content, which of the following is the strongest reason for caution about the 28th?

- A) Performance testing failed to cover the agreed profiles.
- B) The runbook has not been started.
- C) High-severity security findings exist without completed fixes, and the migration dry run has moved to within days of go-live — so two acceptance-critical items are unresolved.
- D) The supplier has admitted the date will be missed.

**Correct answer: C**

**Explanation:** Options A, B and D each misstate the email. Option C sticks to what is actually established. This tests reading past the email's confident tone ("good shape", "not a blocker") to inventory what is actually evidenced, pending, and at risk.

For Questions 10 to 12, the candidate reads this extract from an internal continuity procedure.

> "In the event of a complete failure of the primary data centre, services designated as priority one must be restored at the secondary site within four hours; priority two services within twenty-four hours. Restoration is performed in strict priority order. The continuity plan for each service must be tested at least annually, and any test that fails must be repeated within eight weeks. Service restoration times are measured from the formal declaration of a continuity incident, not from the initial failure."

**Question 10 (moderate) — True / false / cannot say**

Statement: "A priority two service could be restored more than twenty-four hours after the primary data centre initially fails, without breaching the procedure."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Restoration times run from formal declaration, not initial failure, so a delay between failure and declaration means the described scenario is genuinely possible without breach. This tests reading measurement clauses precisely — from when, to when — where SLA and continuity targets are genuinely won and lost.

**Question 11 (moderate) — True / false / cannot say**

Statement: "Continuity plan tests are carried out by the service readiness team."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The procedure states testing frequency but never states who performs the tests. This tests recognising silence about an owner as a genuine gap worth flagging, not filling with outside knowledge.

**Question 12 (hard) — Clear-writing judgement**

Writing a risk flag for a service transition manager about the supplier email in Questions 6 to 9, which version is most effective?

- A) "There are some concerns with the supplier's position that may warrant consideration ahead of the proposed implementation date."
- B) "Risk: three high-severity security findings are unfixed and the migration dry run has slipped to two days before go-live. Impact: security criteria cannot be evidenced, and a failed dry run would leave no time to respond. Suggested action: hold the go/no-go until fixes are verified and the dry run passes."
- C) "The supplier's optimism regarding the 28th appears potentially misplaced given various outstanding items of a security and migration-related nature."
- D) "As per my analysis of the aforementioned correspondence, several risk vectors have been identified for escalation purposes."

**Correct answer: B**

**Explanation:** B has the anatomy of a useful flag: risk, impact, suggested action — actionable within sixty seconds. Options A and C gesture at concern without naming anything specific. This tests writing a structured escalation, since flagging risks is the role's defining duty.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate reads tense and completion words precisely** — "being developed" versus "developed", "planned" versus "executed".
- **Note whether a candidate reads a measurement clause exactly** (from when, to when, against what scope).
- **Note whether a candidate's written flag follows a risk-impact-action structure.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside professional knowledge** rather than the passage.
- **Missing when a candidate reads tone as content** ("we're in good shape" treated as evidence).
- **Crediting an answer that transplants a requirement between tiers, severity bands, or priority levels.**
- **Missing when a candidate anchors a measurement clause to the wrong reference point.**
- **Rewarding a written flag chosen for formality over the risk-impact-action structure a reader can act on.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. Formats vary: the most common asks for the most effective response; variants ask for the least effective, a ranking, or a rating scale. Timing is usually relaxed — 20 to 30 minutes for 15 to 20 scenarios — because the test measures judgement, not speed.

This role concentrates a particular kind of pressure: findings can delay a go-live, and everyone with a stake in the date knows it. Suppliers frame their reports optimistically; project managers ask whether items are "really" blockers. An SJT explores how a candidate behaves inside that pressure.

### How this assessment maps to the role

- **Escalation quality** maps directly to the role summary: flagging potential risks and escalating them.
- **Integrity under date pressure** maps to accountability for application acceptance and security criteria.
- **Issue ownership** maps to the **Ownership and topic** skill.
- **Team scenarios** map to the **Community collaboration** skill.
- **Incident and security responses** map to the **Incident management** skill and the security-checking duty.
- **User-centred judgement** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The optimistic status report**

At a readiness checkpoint, a project manager presents a slide saying "Security: GREEN". The penetration test report includes two high-severity findings whose fixes have not yet been verified. The meeting is moving quickly to the next slide. What is the most effective response?

- A) Stay silent — it can be raised privately later this week.
- B) Speak up now, briefly and factually: security has two high-severity findings awaiting verified fixes, so it would be rated amber until verification evidence lands.
- C) Interrupt to say the whole report is unreliable and should be withdrawn.
- D) Let the meeting finish, then email the objection to everyone who attended.

**Correct answer: B**

**Explanation:** A wrong "GREEN" left standing risks decisions being taken on it. Option B corrects the record at the moment it matters, factually and proportionately. Option C disproportionately attacks the whole report. This tests timely, specific, proportionate honesty in the room where the record is being set.

**Question 2 (easy) — A blocked test and a waiting queue**

A security scan of a new build cannot start because the scanning account has been locked. Resetting it needs the identity team, whose queue says "responses within two working days". The scan is on the critical path for a review in three days. What is the most effective first action?

- A) Wait in the queue — two days still just fits.
- B) Raise the reset request immediately, note the critical-path dependency in the request, and tell a service transition manager the same day that the timeline now has no slack — so they can expedite if it slips.
- C) Borrow a colleague's credentials to run the scan today.
- D) Skip the scan this once — the previous build's scan was clean.

**Correct answer: B**

**Explanation:** Option B starts the clock, improves the odds of quick action, and protects the timeline by informing a manager while there is still time to act. Option C is a serious security breach. This tests acting through proper channels immediately while escalating the risk in parallel.

**Question 3 (easy) — Something broke**

Testing in the shared staging environment accidentally corrupts a data set another team is scheduled to use tomorrow morning. It is 16:30. What is the most effective response?

- A) Say nothing — they may not notice, and the environment team refreshes data weekly anyway.
- B) Tell the other team now, apologise, raise the refresh request with the environment team today, and follow it until the data is confirmed restored or a workaround is agreed.
- C) Send an anonymous note to the environment team asking for a refresh.
- D) Mention it to the other team tomorrow if their tests fail.

**Correct answer: B**

**Explanation:** Ownership ends at confirmed resolution, not at "I sent an email". Option A converts an accident into a concealment. Option C hides the cause. This tests speed and completeness of honest follow-through in an ownership scenario.

**Question 4 (moderate) — Least effective: the supplier pushes back**

A supplier's evidence for the backup-restoration criterion is missing. Their delivery manager replies: "We've done dozens of these deployments — restoration always works. Requiring a test here is box-ticking." Which response is LEAST effective?

- A) Acknowledge their experience, restate the criterion and why it exists, and offer to observe a restoration test this week so the evidence burden is as light as possible.
- B) Agree to waive the test given their track record.
- C) Take the disagreement to a service transition manager with both positions fairly stated.
- D) Hold the position in writing and copy a service transition manager.

**Correct answer: B**

**Explanation:** Option B substitutes the supplier's self-assessment for evidence on exactly the criterion whose failure modes only appear when untested. This tests recognising that a track record is context, never evidence about this deployment.

**Question 5 (moderate) — A teammate wants to skip the boring part**

A fellow analyst, overloaded this week, asks for a countersignature on a readiness checklist section they say is "basically finished — just the config checks left, and those never find anything". What is the most effective response?

- A) Countersign — team trust matters, and the checks are usually clean.
- B) Refuse and report them for attempted misconduct.
- C) Decline to countersign until the checks are done, and offer practical help: split the remaining config checks now, or agree who does them tomorrow morning.
- D) Countersign now on their promise to finish the checks tomorrow.

**Correct answer: C**

**Explanation:** A signature is an evidence artefact; options A and D both make the record say "complete" while reality says otherwise. Option C holds the integrity line while addressing the real cause — workload — with practical help. This tests protecting a record while making it easy for a struggling colleague to do the right thing.

**Question 6 (moderate) — Users versus the demo script**

Preparing for acceptance, a user research summary shows assisted-digital users — about 15% of the service's users — struggle with the new document upload flow, and recommends a simplified alternative path that is built but switched off pending "post-launch evaluation". The acceptance demo next week will show only the standard flow. What is the most effective response?

- A) Note it privately and see whether complaints emerge after launch.
- B) Raise it before the demo: circulate the research finding, and propose that the review explicitly considers the assisted-digital path's status — on or off at launch — as an acceptance question.
- C) Switch the alternative path on in staging so the demo includes it.
- D) Tell the researcher their finding has come too late to matter.

**Correct answer: B**

**Explanation:** The decision should be conscious and visible to the review, not made by default because the demo script omitted it. Option A outsources user advocacy to future complaints from the users least likely to complain through digital channels. This tests bringing user evidence to the decision point, in time, addressed to the people who own the decision.

**Question 7 (moderate) — The environment nobody owns**

Readiness testing keeps failing because the staging environment drifts from production: patches and config changes appear in production without reaching staging. This is the fourth cycle. What is the most effective response?

- A) Keep fixing and re-testing — it works eventually each time.
- B) Refuse to conduct further testing until someone fixes staging permanently.
- C) Document the pattern (four cycles, the specific drifts, the time cost), identify that environment parity has no owner, and escalate with a proposal: assign an owner and add a parity check to the release process.
- D) Quietly start testing in production instead, where the configuration is always current.

**Correct answer: C**

**Explanation:** Option C carries evidence, diagnosis, cost, and a proportionate proposal — converting a recurring symptom into a problem statement. Option D trades a staging problem for potential live-service incidents. This tests routing a process gap to the level that can fix the system, not the symptom.

**Question 8 (moderate) — Least effective: the awkward stand-up**

In stand-up, a quieter colleague is repeatedly talked over by two louder members; today she stopped contributing entirely, and it later emerges she had spotted a genuine risk in the release plan that went unmentioned. Which response is LEAST effective?

- A) Talk to her afterwards, hear the risk, and encourage her to raise it — offering to back her at tomorrow's stand-up.
- B) Suggest to the team a round-robin format so every member speaks without interruption.
- C) Do nothing — stand-up dynamics are the team lead's business, not this role's.
- D) Raise the general pattern with the team lead privately, without naming blame.

**Correct answer: C**

**Explanation:** A suppressed voice suppressed a risk, and the release plan is worse for it. This tests recognising that inclusion is not separate from assurance quality — meetings where only the loud speak are meetings where risks go unlogged.

**Question 9 (hard) — A manager is the bottleneck**

A significant security risk was flagged to a service transition manager eight days ago: a third-party component in the release has a published vulnerability, and the supplier's patch is unverified. The manager said "leave it with me" — but the go/no-go review is in two days, nothing has visibly happened, and yesterday's follow-up message got no reply. What is the most effective response?

- A) It was flagged and it is with the manager — responsibility has been discharged.
- B) Go around the manager directly to the programme director with the risk.
- C) Make one more direct, time-boxed attempt today — speak to the manager in person or by phone, state the two-day deadline, and ask explicitly whether they will take it forward or want it raised directly; if unreachable today, tell them in writing that the deadline requires raising it at the review, then do so.
- D) Say nothing, but if the review reaches go, mention the vulnerability afterwards so it is on record.

**Correct answer: C**

**Explanation:** Option A mistakes process for purpose — a flag that vanished into silence has not been transferred, and the risk still exists. Option D raises a known critical risk only after the decision, which is assurance theatre. This tests persistent ownership, respect for the escalation chain, and refusal to let a known risk miss its decision point.

**Question 10 (hard) — The finding that embarrasses a friend**

A readiness review of an application finds the operations runbook — written by a good friend on the operations team — significantly out of date: three procedures reference decommissioned systems, and the emergency contacts list is two reorganisations old. The findings report goes to the readiness review, where the friend's team lead will see it. What is the most effective approach?

- A) Soften the finding to "minor documentation improvements suggested" to protect the friend.
- B) Tell the friend first so they can quietly fix it, and delay the report until they have.
- C) Report the finding accurately and neutrally (factual gaps, no blame framing), and give the friend a heads-up that it is coming so they are not ambushed — while making clear the report itself cannot change.
- D) Ask another analyst to review the runbook instead to avoid the conflict.

**Correct answer: C**

**Explanation:** The report stays accurate, the framing stays factual, and the heads-up converts an ambush into a professional courtesy. Option A falsifies severity for a genuine operational risk (an out-of-date emergency contacts list). This tests keeping report integrity while extending professional kindness alongside honesty, not instead of it.

**Question 11 (hard) — Go-live day surprise**

On go-live morning, final checks reveal that last night someone applied an unapproved "quick fix" to the production configuration to resolve a performance issue found in the evening's rehearsal. The fix appears to work. The service goes live in three hours, stakeholders are assembled, and reversal would delay launch by at least a day. What is the most effective immediate action?

- A) Say nothing — the fix works, and launch pressure is enormous.
- B) Reverse the change immediately, since it was unapproved.
- C) Immediately inform a service transition manager and the change authority: an unapproved production change exists, here is what it does, here are the options (retrospective emergency approval with expedited review, or reversal and delay) — so the go/no-go is made with full knowledge.
- D) Approve the change retrospectively to regularise the paperwork before anyone asks.

**Correct answer: C**

**Explanation:** A decision is about to be made on an inaccurate picture of production; restoring decision integrity comes ahead of either endorsing or reversing the change. Option A makes a party to the concealment. Option D compounds the original offence with a deliberate integrity breach. This tests surfacing, informing, and presenting options for authority to decide with the truth in front of it.

**Question 12 (hard) — What the KPIs don't show**

Two weeks after a major release, the service dashboard is green: availability, response times, and incident volumes all within target. But the service desk mentions in passing that "call handling times are up because callers seem confused by the new screens", and task-completion feedback scores have dipped. Formal early-life-support exit is scheduled for Friday, based on the KPI dashboard. What is the most effective response?

- A) Support the Friday exit — the agreed KPIs are green, and the exit criteria are the exit criteria.
- B) Before Friday, gather the additional signals (call handling times, feedback scores, a quick word with the service desk lead), and bring them to a service transition manager with a recommendation: either extend early-life support or exit with a specific follow-up action on the usability signal.
- C) Declare early-life support failed and demand the release be rolled back.
- D) Log the observations in the service improvement backlog for consideration next quarter.

**Correct answer: B**

**Explanation:** KPIs are a sample of reality, not the whole of it; two independent signals point the same way. Option B corroborates quickly and puts an evidence-backed recommendation to the decision owner before the decision, without prejudging the answer. This tests user focus beyond the metrics, respecting the decision's timing rather than deferring evidence past the moment it could act.

### Administration tips

- **Score for whether a candidate's response follows the risk-impact-action-deadline structure** when escalating.
- **Watch for whether a candidate holds a line kindly** — firm on the standard, helpful on the path to meeting it.
- **Note whether a candidate discharges responsibility versus owns an issue to genuine resolution.**
- **Note whether a candidate acts through proper channels under pressure**, rather than unilaterally.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats "I flagged it" as the end of an issue still known to be live.**
- **Crediting an answer that softens a finding or waives a check for a friend, a struggling colleague, or a confident supplier.**
- **Missing when a candidate takes unilateral action under pressure** — reversing changes alone, testing in production, using found credentials.
- **Accepting silence in the room followed by an objection afterwards**, rather than a timely correction.
- **Missing when a candidate's response is disproportionate to the problem** — a rollback demand for a usability dip, or a backlog entry for a Friday decision.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a service readiness analyst: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested the verification disciplines at the centre of readiness work: finding the gap in a numbered sequence, chaining impact rules correctly, catching evidence that describes the wrong build or environment, and untangling two problems that arrive knotted together. The numeric section tested the three moves — part-of-whole, comparison, and division-by-count — applied to pass rates, availability, capacity projections, and reconciliation checks that catch what summary slides smooth over. The verbal section tested the reading that protects services: tenses that reveal completion status, measurement clauses that define what a target really means, tiered rules read tier by tier, and the discipline of "cannot say" when a document is silent. The situational judgement section tested the professional shape of the role: flagging early and specifically, holding evidence standards with kindness, owning issues to genuine resolution, and keeping absent users present in every decision.

The thread running through all four sections is verifying evidence precisely, quantifying honestly, and escalating well.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and strengthen the system that will face the situation's successor — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
