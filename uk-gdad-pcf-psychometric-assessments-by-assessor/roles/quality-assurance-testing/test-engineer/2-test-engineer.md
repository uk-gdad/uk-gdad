# Test Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor evaluating a candidate for the test engineer role in the UK Government Digital and Data profession, whether for hiring, promotion, or a development review. It gives you a structured, job-specific assessment to administer — not a generic aptitude test, but one built from the artefacts a test engineer genuinely handles and the decisions a test engineer genuinely makes.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. The material below is job-specific: it uses the kinds of artefacts a test engineer genuinely handles — test code, CI/CD pipeline output, defect logs, acceptance criteria, coverage reports, risk registers, and stakeholder emails — and the kinds of decisions a test engineer genuinely makes, such as selecting appropriate test types and techniques, assessing dependencies and risks, communicating defect impact to stakeholders, and deciding when a flaky automated check deserves investigation rather than a rerun.

Why does this matter for the test engineer role in particular? A test engineer is responsible for writing, debugging and refactoring test code. They work closely with software developers to reach a common understanding of the code base and unit-level test coverage, collaborate with analysts to make sure required business scenarios are covered in acceptance test scripts, work across both functional and non-functional areas of an application, and coach and mentor testers. Every one of those responsibilities depends on the four capabilities this assessment measures: structured cognitive reasoning about complex systems, accurate numeric work with test and defect data, precise reading of requirements and reports, and sound professional judgement when priorities, personalities, and pressure collide.

This document is organised into four main assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for the role, a mapping of the assessment dimensions to the specific skills in the test engineer capability framework, a substantial set of items with full worked answers held back as your answer key, notes on administering the section fairly, and common pitfalls to watch for in a candidate's answers. The four sections are:

1. A workplace job-specific cognitive assessment — pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving using testing artefacts.
2. A workplace job-specific numeric reasoning assessment — pass rates, defect trends, coverage percentages, velocity and effort arithmetic, and reading tables under time pressure.
3. A workplace job-specific verbal reasoning assessment — comprehension of standards extracts, requirements, and reports, with true/false/cannot-say discipline and clear-writing judgement.
4. A workplace job-specific situational judgement assessment — realistic dilemmas involving developers, analysts, delivery pressure, mentoring, and defect communication.

Administer this assessment fairly and consistently. Use the same items and the same time limit for every candidate you assess for this role level — do not swap questions between candidates, or extend time for one and not another. Keep the worked answers and explanations back as your answer key: do not share them with the candidate before or during the assessment. Score each section against the key, then debrief the candidate afterwards — walk through what the assessment covered, where their answers were strong, and where they differed from the key, so the exercise is useful to them as well as to you. Finally, remember that this is one input among several. Treat it alongside the interview, any work-sample evidence, and references, and never as the sole basis for a hiring, promotion, or performance decision — see the advisory below.

Set aside unhurried time to prepare, read through each section before you administer it, and keep this document itself away from the candidate until scoring is complete.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes the test engineer role demands, using practical workplace scenarios rather than abstract puzzles. Instead of asking the candidate to complete letter sequences, present them with the everyday materials of the job — failing pipeline logs, test suite structures, defect clusters, environment configurations, acceptance criteria — and ask them to reason about them quickly and accurately.

Administer it as a timed exercise lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Score objectively, comparing the candidate's responses against the answer key below and, where you have one, a norm group of professionals at a similar level. If you use an adaptive platform, be aware that a test that feels progressively harder to the candidate is usually one they are doing well on. Report a breakdown of speed versus accuracy rather than a single score, so that working both quickly and carefully is recognised. Offer the candidate short, ungraded practice questions before the timed section begins, so they can settle into the format without pressure — give every candidate at this role level the same warm-up.

For a test engineer, cognitive assessment is particularly relevant because the role's core professional value is structured, sceptical thinking about how systems behave and fail. Debugging a test is deduction; recognising that five defects share a root cause is pattern recognition; spotting that an acceptance script contradicts a wireframe is error checking; deciding which failing check to investigate first when the pipeline is red is prioritisation under uncertainty. A well-designed cognitive assessment simulates precisely those demands in miniature, which is why a candidate's reasoning here is a reasonable proxy for their reasoning on the job.

### How this assessment maps to the role

The assessment dimensions map directly onto the named skills in the test engineer role summary:

- **Pattern recognition** maps to the candidate's **Managing, reporting and resolving defects** skill: critically assessing dependencies, defects and risks means seeing structure in noise — defects clustering in one module, failures correlating with one environment, flakiness correlating with one time of day.
- **Logical deduction** maps to the candidate's **Test analysis** skill: determining what to test following an agreed approach, and analysing information to identify risks, requires valid reasoning from requirements, designs and constraints to their consequences — including the consequences nobody wrote down.
- **Error checking** maps to the candidate's **Designing and executing tests** skill: designing, building, maintaining and executing tests that align to user needs and requirements depends on spotting mismatches between artefacts — a script that checks the wrong boundary, an assertion that can never fail, an acceptance criterion the tests silently skip.
- **Prioritisation** maps to the candidate's **Test and quality planning** skill: creating or adapting quality testing approaches based on risk is prioritisation formalised — ranking what to test, fix, and investigate first by impact and likelihood.
- **Applied problem solving** maps to the candidate's **Test engineering** skill: following practices such as source control and CI/CD pipelines, integrating and executing tests for early feedback, and creating and maintaining automated tests all involve diagnosing why something behaves as it does — the daily detective work of a test engineer.

### Assessment items

**Question 1 (easy) — Pattern recognition in a failing pipeline**

Present the candidate with this scenario. A CI pipeline they are responsible for runs four stages in order: Build, Unit tests, Integration tests, Deploy to test environment. The last six runs show:

| Run | Build | Unit | Integration | Deploy |
|---|---|---|---|---|
| 41 | Pass | Pass | Pass | Pass |
| 42 | Pass | Pass | Fail | — |
| 43 | Pass | Pass | Fail | — |
| 44 | Pass | Pass | Pass | Pass |
| 45 | Pass | Pass | Fail | — |
| 46 | Pass | Pass | Fail | — |

Which observation is best supported?

- A) The build is unstable.
- B) Integration tests fail intermittently while build and unit stages are consistently stable.
- C) Unit tests are masking integration failures.
- D) The deploy stage is broken.

**Correct answer: B**

**Explanation:** Read the table stage by stage. Build and Unit pass in all six runs — consistently stable. Integration fails in four of six runs with passes in between — the signature of intermittent failure. Deploy never fails; it simply does not run after an integration failure (the dash means "not reached", not "failed"), so D misreads absence as breakage. A is contradicted by six straight build passes. C asserts a mechanism the data cannot show — a passing unit test establishes nothing about "masking". Distinguishing "did not run" from "ran and failed" is a small reading discipline with large consequences: in real pipeline triage it is the difference between investigating the right stage and burning an afternoon on the wrong one. Intermittent integration failures typically point to environment dependencies, timing assumptions, or shared test data — the risks the role expects a test engineer to identify and communicate.

**Question 2 (easy) — Logical deduction from acceptance criteria**

An acceptance criterion states: "If an application is submitted with a valid National Insurance number and all mandatory fields complete, the system must issue a reference number immediately." A tester reports: "I submitted an application and no reference number was issued." Assuming the system behaved according to the criterion, which conclusion must be true?

- A) The National Insurance number was invalid.
- B) A mandatory field was incomplete.
- C) Either the National Insurance number was invalid, or at least one mandatory field was incomplete, or both.
- D) The system has a defect.

**Correct answer: C**

**Explanation:** The criterion is a conditional: valid NINO AND all mandatory fields complete → reference issued. The reference was not issued, and we are told the system behaved according to the criterion, so the antecedent must have been false — meaning the conjunction failed. A conjunction fails if either part fails (or both), which is exactly option C. Options A and B each pick one disjunct and assert it as certain, which the evidence cannot support. Option D contradicts the stem's explicit assumption. This is contrapositive reasoning, and it is the formal skeleton of everyday defect triage: before raising a defect, a test engineer checks whether the preconditions of the expected behaviour actually held. Half of all "defects" rejected as works-as-designed are cases where the antecedent quietly failed — wrong test data, wrong configuration — and the discipline of option C thinking is what catches them before they reach the log.

**Question 3 (easy) — Error checking an assertion**

Present the candidate with this pseudocode, said to be from a junior colleague's automated test:

```
response = submitForm(validData)
expected = 200
if response.status == expected OR response.status == 500:
    markTestPassed()
```

What is the most important problem?

- A) The variable name "expected" is too vague.
- B) The test passes even when the server returns an error (500), so it can never catch that failure.
- C) The test should use a 201 status rather than 200.
- D) The test data should be invalid rather than valid.

**Correct answer: B**

**Explanation:** The OR condition means the test passes on a 200 (correct behaviour) and also on a 500 (server error). A test that passes when the system fails is worse than no test at all, because it manufactures false confidence — the suite stays green while the feature is broken. That is the most important problem by a wide margin. Option A is a style nicety. Option C might or might not apply depending on the API contract — the stem gives no basis to decide, and it is secondary regardless. Option D describes a different test (negative testing is valuable, but it does not repair this one). Assertions that cannot fail, or that accept failure modes, are among the most common real-world automation defects, often introduced while "getting a flaky test to pass". Writing and reviewing coded solutions is a named part of the role, and this is exactly the kind of review finding that mentoring a junior tester should surface — kindly, and with the explanation of why it matters.

**Question 4 (easy) — Prioritising a red morning**

Present the candidate with this scenario. They arrive to find four issues. The release goes to production tomorrow. Which should they investigate first?

1. The overnight regression run failed on 2 of 300 checks, both in the payments module that ships tomorrow.
2. A cosmetic misalignment on an internal admin screen, reported by a colleague.
3. The test environment's disk is 80% full; at the current rate it will be full in about two weeks.
4. A developer asks them to review a test refactoring pull request, no deadline stated.

- A) Issue 1
- B) Issue 2
- C) Issue 3
- D) Issue 4

**Correct answer: A**

**Explanation:** Rank by impact and urgency together. Issue 1 combines tomorrow's hard deadline with direct evidence of possible defects in exactly the module being released — the two failing checks could be flaky tests or genuine payment defects, and distinguishing those before the release decision is the highest-value work available. Issue 3 is real but has a two-week fuse; a maintenance task or ticket suffices today. Issue 4 matters for team flow and deserves a response, but an unstated deadline yields to a hard one. Issue 2 is low-impact and internal. The pattern to look for in a candidate's reasoning: deadline-bearing evidence of risk in shipping code outranks everything else on the board. Note also what strong prioritisation is not — it is not doing only issue 1 and ignoring the rest, but sequencing them and communicating that sequence, which is what adapting a quality testing approach based on risk looks like at daily scale.

**Question 5 (moderate) — Pattern recognition in defect clustering**

A project's last 40 defects break down as follows: 22 in the calculations module (which is 15% of the codebase), 8 in the UI layer (40% of the codebase), 6 in integrations (25% of the codebase), 4 elsewhere (20% of the codebase). Which conclusion is best supported?

- A) The UI layer is the highest quality part of the system.
- B) Defects are distributed roughly in proportion to code size.
- C) The calculations module shows markedly disproportionate defect density and warrants focused testing attention.
- D) The team should stop testing the UI layer.

**Correct answer: C**

**Explanation:** Compare defect share with code share. Calculations: 22/40 = 55% of defects from 15% of the code — a density ratio of roughly 55 ÷ 15 ≈ 3.7 times "its share". UI: 20% of defects from 40% of the code — about half its share. Integrations: 15% from 25% — below its share. So B is clearly false; the distribution is heavily skewed. C states exactly what the data supports and draws the professional consequence: defect clustering is one of the most reliable empirical patterns in testing (defects predict defects), and risk-based test approaches concentrate effort where density is high. A overreaches — lower defect counts may reflect quality, or may reflect thinner testing of the UI; the data cannot separate those. D turns a proportionality observation into an absolute policy no evidence supports. Critically assessing defects and risks, and adapting the testing approach based on them, is precisely a stated skill for this role — this item tests that skill in numeric miniature.

**Question 6 (moderate) — Deduction about test environment states**

Present the candidate with three facts: (i) whenever the nightly data refresh fails, the smoke suite fails the next morning; (ii) this morning the smoke suite passed; (iii) the integration suite fails whenever either the data refresh fails or the message queue is down. This morning the integration suite failed. What can validly be concluded?

- A) The data refresh failed last night.
- B) The message queue is down.
- C) The data refresh succeeded last night, and the message queue is down.
- D) The data refresh succeeded last night; the integration failure is consistent with the message queue being down, but other causes are possible.

**Correct answer: D**

**Explanation:** Work through it. From (i), refresh failure → smoke failure. The smoke suite passed (ii), so by contraposition the refresh did not fail: the refresh succeeded. That rules out A. Now the integration failure: (iii) says refresh failure or queue outage each guarantee integration failure — but it does not say they are the only causes. The refresh is eliminated; the queue being down would explain the failure, but (iii) is a one-way conditional, and the failure might have another cause entirely (a genuine code defect, test data drift). So B and C assert more than the logic licenses; D states exactly what follows and no more. This distinction — "consistent with" versus "proven" — is the logical heart of triage. Test engineers who treat plausible causes as established causes close investigations early and wrongly; the strongest habit is to hold the hypothesis (check the queue first) while remembering it is a hypothesis. That is analysing information to identify risks, done with formal care.

**Question 7 (moderate) — Error checking coverage against scenarios**

Present the candidate with this scenario. An analyst lists five business scenarios for a fee-calculation feature: (S1) standard fee, (S2) reduced fee for eligible applicants, (S3) fee waiver for exceptional cases, (S4) refund after withdrawal, (S5) fee change mid-application. The acceptance test suite contains: T1 "standard fee calculated correctly" (S1), T2 "reduced fee applied when eligibility flag set" (S2), T3 "waiver applied for exceptional cases" (S3), T4 "refund issued after withdrawal" (S4), T5 "reduced fee applied when eligibility flag set — mobile browser" (S2). Which statement is correct?

- A) All five scenarios are covered.
- B) S5 is uncovered, and S2 is covered twice.
- C) S4 and S5 are uncovered.
- D) The suite has no redundancy.

**Correct answer: B**

**Explanation:** Map tests to scenarios systematically: S1←T1, S2←T2 and T5, S3←T3, S4←T4, S5←nothing. So S5 (fee change mid-application) has no test, and S2 is exercised twice — once per browser context, which may be deliberate but is still double coverage of one scenario while another has none. A misses the gap; C wrongly counts S4 as uncovered (T4 covers it); D is false because T2/T5 overlap. The method matters more than this instance: a coverage check is a completeness proof done with a table, not an impression formed by reading the test names. Collaborating with analysts to ensure required business scenarios are covered in acceptance scripts is one of the role's explicit duties — and the scenarios that go missing in real projects are exactly the awkward, stateful ones like "change mid-application", because they are hardest to script. Finding the uncovered awkward case is where a test engineer earns their keep.

**Question 8 (moderate) — Prioritisation with dependencies**

Present the candidate with this scenario. Four tasks remain before testing can be declared complete: (1) fix the broken test data generator, which task 2 needs; (2) run the full non-functional suite, which requires the generator and takes four hours; (3) retest two fixed defects, independent of other tasks, one hour; (4) write the test summary report, which needs the results of tasks 2 and 3, one hour. The generator fix takes one hour. One working day (7.5 hours) is available. What is the correct ordering, and does everything fit?

- A) 1, 2, 3, 4 — total 7 hours, it fits.
- B) 3, 1, 2, 4 — total 7 hours, it fits.
- C) Either A or B works; both respect dependencies and total 7 hours, leaving half an hour of slack.
- D) It cannot be done in one day.

**Correct answer: C**

**Explanation:** Check dependencies first: task 2 needs task 1; task 4 needs tasks 2 and 3; task 3 is independent. Any order in which 1 precedes 2, and both 2 and 3 precede 4, is valid — both A's ordering and B's ordering satisfy that. Now the arithmetic: 1 + 4 + 1 + 1 = 7 hours against 7.5 available, leaving 30 minutes of slack either way. So C is the complete answer: the sequences are equivalent in feasibility, and recognising that equivalence is the point. In real planning, a test engineer might still prefer B — doing the independent retest first (task 3) means that if the generator fix overruns, progress already banked does not depend on it. That is risk-aware sequencing: when total time is fixed, order by dependency first, then by resilience to overrun. Half an hour of slack on a 7-hour critical path is thin; a test engineer would flag that to the team rather than discover it at 16:45.

**Question 9 (moderate) — Problem solving a flaky test**

Present the candidate with this scenario. An automated checkout test fails roughly once in every five runs with a timeout waiting for the order confirmation element. It always passes on rerun. The team has started ignoring its failures. Which hypothesis best fits the evidence, and what should be done first?

- A) The application has an intermittent performance problem in order confirmation; investigate response times in the test environment before touching the test code.
- B) The test is simply flaky; increase the timeout to 60 seconds and move on.
- C) The element locator is wrong; rewrite it.
- D) The test is worthless; delete it and rely on manual checks.

**Correct answer: A**

**Explanation:** Examine what the evidence pattern distinguishes. A wrong locator (C) would fail every run, not one in five. A "just flaky, raise the timeout" response (B) treats the symptom while destroying the information — if order confirmation intermittently takes over the current timeout, that may be a genuine non-functional defect users will feel, and a 60-second timeout would simply hide it forever. Deletion (D) discards signal entirely. The one-in-five timeout pattern is exactly what an intermittent performance problem looks like from the outside, so the first move is to look at the system, not the test: check application response times and logs for the confirmation step in the test environment. If the system is fast and the environment is the culprit, then adjust the test with evidence in hand. The role spans functional and non-functional areas explicitly — and the graveyard of ignored flaky tests is where real performance defects hide. A team that reruns until green has quietly stopped testing; noticing that, and saying it, is engineering leadership at this level.

**Question 10 (challenging) — Multi-constraint scheduling**

Present the candidate with this scenario. Four test activities must be completed in one week (Monday–Friday, one activity per day, one day each): performance testing (P), accessibility testing (A), security regression (S), and exploratory testing (E). Constraints: (i) P requires the load-injection environment, available only Tuesday and Thursday; (ii) S must happen after the security patch deploys, which occurs Tuesday evening; (iii) A must be completed before E, because E uses A's findings; (iv) the accessibility specialist who pairs on this work is unavailable Monday. Which statement about scheduling performance testing (P) is correct?

- A) P must run on Tuesday.
- B) P must run on Thursday.
- C) P can feasibly run on either Tuesday or Thursday.
- D) P must run on Wednesday.

**Correct answer: C**

**Explanation:** Work the constraints jointly and enumerate cases rather than trusting the first arrangement found. From (i), P is Tuesday or Thursday. From (ii), S can run only Wednesday, Thursday, or Friday. From (iv), A cannot be Monday, and from (iii) A must precede E. First establish Monday: it cannot host P (environment unavailable), S (patch not yet deployed), or A (specialist unavailable) — and it cannot host E either, because A must come first and nothing precedes Monday. With four activities across five days, that makes Monday the free day, and A, P, S, E fill Tuesday to Friday. Now test each P placement. Case 1, P on Tuesday: the remaining days Wednesday–Friday must hold A, S, E with A before E — A(Wed), S(Thu), E(Fri) satisfies everything. Case 2, P on Thursday: Tuesday and Wednesday hold A and S in some order; S cannot be Tuesday (the patch deploys Tuesday evening), so S(Wed) and A(Tue), leaving E(Fri) — again every constraint holds. Both placements are feasible, so no "must" claim survives: the correct answer is C. Options A, B and D each assert a necessity the case analysis disproves. The assessment lesson: "must" claims require every alternative to fail, so enumerate before concluding. The job lesson is identical — when someone claims "we can only run performance testing on Thursday", a careful test engineer walks the constraints rather than taking the claim on trust; schedules, like test results, deserve verification rather than trust.

**Question 11 (challenging) — Root cause reasoning across defects**

Present the candidate with this scenario. Five defects were raised this sprint: D1 "date shows off by one day in confirmation email", D2 "application deadline calculated one day early", D3 "audit log timestamps one hour ahead overnight", D4 "reminder sent a day late for some users", D5 "misspelled label on the summary page". A developer suggests fixing each independently. What is the strongest testing observation?

- A) Five unrelated defects; fix in severity order.
- B) D1, D2 and D4 look like one date-boundary root cause, and D3 looks like a timezone/daylight-saving handling issue; recommend investigating shared causes before independent fixes, with D5 as a genuine standalone.
- C) All five share one root cause.
- D) D3 and D5 should be fixed first because they are easiest.

**Correct answer: B**

**Explanation:** Cluster by mechanism, not by surface. D1, D2 and D4 are all off-by-one-day errors in different features — the classic signature of a shared date-boundary defect (inclusive/exclusive comparison, midnight cut-off, or date arithmetic applied inconsistently), likely in shared code or a shared pattern. D3's "one hour ahead overnight" points to a different mechanism: timezone or daylight-saving handling. D5 is cosmetic and genuinely independent. So C over-clusters (an hour is not a day; a spelling error is neither), A under-clusters and forfeits the efficiency and safety of a root-cause fix (fixing D1 alone leaves the same fault live in D2 and D4's code paths — and possibly in paths nobody has tested yet), and D confuses ease with value. Using defect patterns to reason about causes, and communicating that reasoning to developers, is exactly the collaborative code-level understanding the role calls for. The practical move that follows B is also worth naming: once a shared root cause is suspected, a test engineer designs targeted tests around the suspected mechanism — date boundaries at midnight, month ends, year ends — to find the instances not yet reported.

**Question 12 (challenging) — Error checking a test design against a requirement**

Present the candidate with this requirement and test design. Requirement: "Applicants may upload up to 3 documents. Each document must be a PDF no larger than 5MB. If any upload fails validation, the applicant must be told which document failed and why, and the other documents must remain attached." A colleague's test design contains: T1 upload 1 valid PDF (expect success); T2 upload 3 valid PDFs (expect success); T3 upload 4 valid PDFs (expect rejection of the fourth); T4 upload a 6MB PDF (expect rejection with reason); T5 upload a 5MB PNG (expect rejection with reason). Which important behaviour in the requirement is untested?

- A) The maximum document count.
- B) The file size limit.
- C) That when one document in a multi-document upload fails validation, the others remain attached.
- D) The file type restriction.

**Correct answer: C**

**Explanation:** Audit the design against each clause. Count limit: T2 (at the boundary, 3) and T3 (beyond it, 4) — covered. Size: T4 tests over-limit; note 5MB exactly (the boundary itself) is only touched by T5, which is invalid for a different reason (PNG), so the "5MB valid PDF" boundary case is thin — a good secondary finding. Type: T5 — covered. But the requirement's final clause describes composite behaviour: a mixed upload where one document fails and the others must persist, with a per-document reason. Every existing failure test (T3, T4, T5) fails a single document in isolation; none verifies the "others remain attached" guarantee or the "told which document" specificity in a mixed batch. That is option C, and it is the clause most likely to be broken in implementation, because it requires per-item error handling rather than all-or-nothing validation — precisely the kind of behaviour that unit-level tests miss and acceptance tests must own. The reviewing skill demonstrated here — walking the requirement clause by clause and demanding a test that could fail for each — is the core of designing tests that align to user needs and requirements, and it is what a strong candidate demonstrates when coaching testers in review.

### Administering this section

- **Allow rough working.** A candidate who annotates the table, writes out the conditional, or lists case-by-case reasoning on paper is applying the discipline this section tests — provide scratch paper or an equivalent, and do not penalise visible working.
- **Watch for the "did not run" versus "failed" distinction.** This is the single most common table misread. A candidate who classifies every non-pass entry correctly before reasoning about it is showing exactly the habit the role needs.
- **Time-box consistently.** Give every candidate for this role level the same time per item — 90 to 120 seconds is a reasonable guide — and apply it uniformly rather than rushing some candidates and not others.
- **Offer an untimed warm-up.** A short, ungraded example before the timed section settles a candidate into the format without affecting the result, and every candidate at this role level should get the same one.
- **Score reasoning, not just the letter.** Where you ask a candidate to explain their answer, the explanation often reveals more than the choice — a correct answer reached by guessing and a wrong answer reached by sound but incomplete reasoning are different signals, and both are worth noting in your evidence log.
- **Recognise review instinct.** Several items reward the same instinct a test engineer uses reviewing code or test designs — "what would I flag here?" A candidate who approaches the item that way is demonstrating a transferable professional habit, not just answering a puzzle.

### Common candidate pitfalls

- **Asserting one cause when the logic only narrows to several.** Some candidates state as certain what the evidence only supports as one of several possibilities. "Consistent with" is not "proven"; the strongest answers state exactly what follows and no more, just as good triage notes distinguish hypothesis from finding.
- **Reading test names instead of test content.** In coverage items, some candidates treat a test's title as evidence rather than mapping it against the requirement clause by clause.
- **Treating symptoms as the answer in problem-solving items.** Raising timeouts, rerunning until green, and deleting noisy tests all discard information; watch for candidates who reach for those before investigating the system.
- **Confusing ease with priority.** Quick fixes and cosmetic items are a tempting answer under time pressure; the correct answer is nearly always impact-weighted urgency.
- **Stopping case analysis early.** A candidate who checks only one arrangement before answering a "must" or "cannot" item has an example, not a proof — a pattern worth probing in debrief.
- **Rushing tables.** Errors are usually committed before any calculation begins, from misreading row and column headers. A candidate who reads headers before arithmetic is showing good discipline.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and quickly a candidate works with the quantitative material this role genuinely produces: pass rates and failure rates, defect densities and trends, coverage percentages, execution and automation effort, environment costs, and the small tables and charts that populate test reports and sprint reviews. The mathematics itself rarely exceeds percentages, ratios, weighted averages, rates of change, and multi-step arithmetic — the challenge is precision under time pressure, correct choice of denominator, and disciplined reading of what is actually asked.

Administer it as a timed exercise of 20 to 30 minutes with 15 to 20 questions, each presenting a data extract followed by multiple-choice options. Decide in advance whether calculators are allowed for this session, and apply the same rule to every candidate; rough working is expected, and scoring compares accuracy and speed against the answer key below and, where available, a norm group at this professional level.

Why does numeric reasoning matter for a test engineer? Because quantities are how testing speaks to the rest of delivery. When a test engineer clearly communicates risks and the impact of defects to stakeholders, the credibility of the message rests on correct numbers: a reopen rate, a coverage gap, a trend in escaped defects. When a test engineer contributes to estimation, they are doing applied arithmetic about effort and duration. When they assess whether automation is paying its way, they are comparing maintenance cost against execution savings. And when a dashboard offers a flattering metric, numeric fluency is what lets them spot the wrong denominator behind it. This section exists because a test engineer who misreads data does not just lose marks — they misinform release decisions.

### How this assessment maps to the role

- **Percentages, rates and trends** map to the candidate's **Managing, reporting and resolving defects** skill: communicating risks and defect impact to stakeholders means expressing defect data as rates, changes, and trajectories — accurately.
- **Reading tables and charts** maps to the candidate's **Test analysis** skill: analysing information to identify risks includes extracting the right figures from results tables, burndown charts, and defect dashboards before reasoning about them.
- **Weighted averages and combined rates** map to the candidate's **Test engineering** skill: suite-level pass rates, pipeline duration budgets, and coverage figures combine unequal groups — the weighted-average discipline keeps automation reporting honest.
- **Effort and estimation arithmetic** map to the candidate's **Test and quality planning** skill: creating or adapting quality testing approaches based on risk requires effort estimates, capacity checks, and trade-off calculations.
- **Proportional reasoning** maps to the candidate's **Designing and executing tests** skill: distributing limited testing effort across features by risk and size is ratio work, done well or badly.

### Assessment items

**Question 1 (easy) — Suite pass rate**

Last night's regression suite ran 320 checks: 296 passed, 24 failed. What is the pass rate?

- A) 90.0%
- B) 92.5%
- C) 94.0%
- D) 96.0%

**Correct answer: B**

**Explanation:** Pass rate = passed ÷ total × 100 = 296 ÷ 320. Step by step: 296 ÷ 320 = 0.925, and 0.925 × 100 = 92.5%. Sense-check via the complement: 24 failures ÷ 320 = 0.075 = 7.5% failed, and 100 − 7.5 = 92.5 — the routes agree. When reporting suite health in a stand-up or a pipeline dashboard summary, this is the calculation behind the headline figure, and the complement check takes three seconds. Worth remembering, too, that a pass rate describes checks executed — if some checks were skipped, they belong in neither numerator nor denominator, and a rate that quietly includes skips as passes is a defect in the report, not the software.

**Question 2 (easy) — Defect closure arithmetic**

At sprint start, 42 defects were open. During the sprint, 17 new defects were raised and 28 were closed. How many were open at sprint end?

- A) 25
- B) 29
- C) 31
- D) 33

**Correct answer: C**

**Explanation:** Open at end = open at start + raised − closed. Step by step: 42 + 17 = 59; then 59 − 28 = 31. The answer is 31. This is stock-and-flow arithmetic: the open-defect count is a stock, and raising/closing are flows. Options A and B come from subtracting before adding or transposing digits — the standard slips when working fast. In reporting, the flows matter as much as the stock: "31 open" alone hides whether the team is gaining ground (closure outpacing discovery: here 28 closed versus 17 raised, so net −11) or drowning. A test engineer who reports stock and net flow together — "open defects fell from 42 to 31; we closed 28 against 17 new" — gives stakeholders the trend, not just the position, which is exactly what communicating defect impact clearly means.

**Question 3 (easy) — Automation coverage percentage**

Of 240 regression test cases, 156 are automated and the rest are manual. What percentage remains manual?

- A) 30%
- B) 35%
- C) 40%
- D) 65%

**Correct answer: B**

**Explanation:** Manual cases = 240 − 156 = 84. Percentage manual = 84 ÷ 240 × 100. Step by step: 84 ÷ 240 = 0.35, so 35%. Alternatively compute automated first: 156 ÷ 240 = 0.65 = 65%, and 100 − 65 = 35% manual. Option D (65%) answers the opposite question — the automated share — and it is the single most tempting wrong answer because 156 is the number the eye lands on. The final clause reads "remains manual", worth reading twice. In automation planning conversations, both figures earn their place: the 65% shows progress; the 35% — roughly 84 cases — is the remaining manual execution burden every regression cycle, and the starting point for the next automation business case.

**Question 4 (easy) — Execution progress and projection**

Mid-way through a test cycle, the plan contains 180 test cases; after 4 days, 120 have been executed. At the same daily rate, how many more days will the remaining cases take?

- A) 1 day
- B) 2 days
- C) 3 days
- D) 4 days

**Correct answer: B**

**Explanation:** Daily rate = 120 ÷ 4 = 30 cases per day. Remaining cases = 180 − 120 = 60. Days needed = 60 ÷ 30 = 2 days. The answer is 2. The technique — compute the rate, compute the remainder, divide — is the backbone of every "will we finish in time?" conversation, and it is worth doing explicitly rather than by feel. Also worth carrying from real experience: late-cycle cases are often the harder ones (the awkward integrations, the ones waiting on data), so a straight-line projection is a best case, not a promise. Presenting it as "two days at the current rate, with a risk that the remaining cases run slower because they include the complex integration scenarios" is the difference between a number and an analysis.

**Question 5 (moderate) — Percentage change in failure rate**

A nightly suite's failure rate rose from 4% of checks last month to 7% this month. Which statement is numerically correct?

- A) The failure rate rose by 3 percentage points, which is a 75% relative increase.
- B) The failure rate rose by 3%, which is a 3% relative increase.
- C) The failure rate rose by 7 percentage points.
- D) The failure rate fell relative to suite size.

**Correct answer: A**

**Explanation:** Two different measures are in play, and the question tests whether the candidate keeps them apart. The absolute change is 7 − 4 = 3 percentage points. The relative change is (7 − 4) ÷ 4 = 3 ÷ 4 = 0.75 = 75% — the failure rate is now 75% higher than it was. Option A states both correctly. Option B conflates percentage points with percent — the classic confusion, and one that materially distorts stakeholder communication: "failures up 3%" sounds negligible; "failures up 75%" prompts the investigation this trend deserves. Options C and D misread the figures outright. When reporting trend data, choose the framing deliberately and, ideally, give both: "from 4% to 7% — three points, a 75% relative rise". Stakeholders decide differently depending on framing, and a test engineer's job is to inform accurately, not soothe accidentally.

**Question 6 (moderate) — Weighted pass rate across suites**

A pipeline runs three suites: unit (800 checks, 99% pass), integration (150 checks, 92% pass), end-to-end (50 checks, 80% pass). What is the overall pass rate across all 1,000 checks?

- A) 90.3%
- B) 94.0%
- C) 97.0%
- D) 97.6%

**Correct answer: C**

**Explanation:** Never average the percentages directly — the suites differ in size by an order of magnitude, so each must count in proportion to its checks. Convert to counts. Unit passes: 0.99 × 800 = 792. Integration passes: 0.92 × 150 = 138. End-to-end passes: 0.80 × 50 = 40. Total passes: 792 + 138 = 930, and 930 + 40 = 970. Overall rate: 970 ÷ 1,000 = 0.97 = 97.0%. The answer is 97.0%. Option A is the unweighted average of the three percentages ((99 + 92 + 80) ÷ 3 = 90.3) — the classic trap, and the figure a naive dashboard formula produces. Notice how the overall rate leans hard towards the unit suite simply because it is sixteen times larger than the end-to-end suite. That is precisely why a 97% headline can coexist with an end-to-end suite failing one check in five — and end-to-end checks are usually the ones closest to real user journeys. When reporting pipeline health, give the breakdown alongside the blend: "97% overall, but end-to-end at 80% — investigating those ten journeys first" is the honest, risk-ordered message stakeholders need.

**Question 7 (moderate) — Defect detection percentage**

In the last release, 60 defects were found during testing and 15 more were found in production after release. What was the defect detection percentage (defects found in testing as a share of all defects found)?

- A) 25%
- B) 60%
- C) 75%
- D) 80%

**Correct answer: D**

**Explanation:** Detection percentage = found in testing ÷ (found in testing + found in production) × 100 = 60 ÷ (60 + 15) = 60 ÷ 75. Step by step: 60 ÷ 75 = 0.8, so 80%. The denominator is the crucial move: it is all known defects, both phases combined — not the testing count alone and not the production count. Option C (75%) comes from a mangled denominator; option A inverts the question. Defect detection percentage is one of the standard measures of testing effectiveness, and the role includes capturing and using exactly this kind of measure for continuous improvement. Apply it with care in real reporting: production defects surface over time, so early calculations flatter the result, and a falling detection rate might mean weaker testing or better production monitoring. A number plus its caveats is analysis; a number alone is a hostage to fortune.

**Question 8 (moderate) — Reading a defect severity table**

This sprint's defect log:

| Severity | Raised | Closed | Reopened |
|---|---|---|---|
| Critical | 4 | 4 | 1 |
| High | 12 | 9 | 2 |
| Medium | 20 | 15 | 3 |
| Low | 14 | 8 | 0 |

What percentage of closed defects were reopened (to the nearest whole percent)?

- A) 12%
- B) 17%
- C) 20%
- D) 24%

**Correct answer: B**

**Explanation:** Build both totals from the correct columns. Closed: 4 + 9 + 15 + 8 = 36. Reopened: 1 + 2 + 3 + 0 = 6. Reopen rate = 6 ÷ 36 = 0.1667 ≈ 17%. The answer is 17%. Option A (12%) divides reopens by raised (6 ÷ 50) — a defensible-sounding but different metric; the question specifies "of closed defects", so closed is the denominator. This distinction is not pedantry: reopens-per-closure measures fix quality, while reopens-per-raised muddles fix quality with discovery volume. In practice a 17% reopen rate — one fix in six bouncing — is a signal worth raising with the development team, and the split by severity (a Critical reopen among only four closures) sharpens the conversation. Extracting the right ratio from a table, then saying what it means, is the candidate's defect-communication skill in numeric form.

**Question 9 (moderate) — Automation return-on-effort**

A manual regression pack takes 20 hours per cycle and runs 6 cycles per quarter. Automating it will cost 150 hours up front, after which each automated cycle needs 2 hours of maintenance and review. How many hours does automation save in the first quarter, and does it pay back within that quarter?

- A) Saves 108 hours net; pays back in the first quarter.
- B) Costs 42 hours net in the first quarter; pays back during the second quarter.
- C) Costs 30 hours net; pays back in the third quarter.
- D) Never pays back.

**Correct answer: B**

**Explanation:** Work each side. Manual cost per quarter: 20 × 6 = 120 hours. Automated cost in the first quarter: 150 (build) + 2 × 6 = 150 + 12 = 162 hours. First-quarter difference: 162 − 120 = 42 hours worse off — so automation costs 42 hours net in quarter one. Ongoing quarters: automated cost is 12 hours versus 120 manual, saving 108 hours per quarter. The remaining 42-hour deficit is recovered during the second quarter (well inside it, since 108 > 42). So option B is exactly right. Option A misapplies the ongoing saving to the build quarter. This build-cost-versus-run-cost structure is the honest arithmetic behind every automation proposal, and the role — creating and maintaining automated tests, and integrating them for continuous feedback — will regularly require a test engineer to make this case. Note what strengthens it further in real life: automated cycles also run more often and earlier, so the value exceeds the hours; but lead with arithmetic that survives scrutiny, then add the qualitative benefits.

**Question 10 (challenging) — Ratio reasoning for test effort allocation**

60 hours of exploratory testing must be allocated across three modules in proportion to their risk scores: Payments (score 8), Accounts (score 5), Reporting (score 2). How many hours does Accounts receive?

- A) 8 hours
- B) 15 hours
- C) 20 hours
- D) 24 hours

**Correct answer: C**

**Explanation:** Total risk score = 8 + 5 + 2 = 15. Each risk point is worth 60 ÷ 15 = 4 hours. Accounts: 5 × 4 = 20 hours. The answer is 20. (Cross-check by completing the allocation: Payments 8 × 4 = 32, Reporting 2 × 4 = 8; total 32 + 20 + 8 = 60 ✓ — the completeness check catches most ratio slips.) Option D (24) comes from misreading which module the question asks about; option B halves the correct share. Allocating effort in proportion to risk is the numeric core of risk-based testing — this role's stated foundation — and the mechanics generalise: any budget (hours, test cases, pipeline minutes) divided over any scored list follows this unit-value method. In practice a test engineer would round to sensible session lengths and sanity-check the model itself: risk scores are inputs someone estimated, and a test engineer asks where they came from before building a plan on them.

**Question 11 (challenging) — Trend analysis across a burnup table**

Cumulative test cases executed by end of each day of a 10-day cycle (plan: 400 total):

| Day | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Executed (cumulative) | 30 | 65 | 105 | 150 | 200 |

The daily execution rate is rising. If the Day 5 rate (Day 5's daily increment) continues for the rest of the cycle, on which day will execution complete?

- A) Day 8
- B) Day 9
- C) Day 10
- D) Execution will not finish within the cycle.

**Correct answer: B**

**Explanation:** First extract the daily increments from the cumulative row: Day 1: 30; Day 2: 65 − 30 = 35; Day 3: 105 − 65 = 40; Day 4: 150 − 105 = 45; Day 5: 200 − 150 = 50. The rate rises by 5 per day, but the question fixes the projection at the Day 5 rate: 50 cases per day. Remaining work: 400 − 200 = 200 cases. Days needed: 200 ÷ 50 = 4 more days — Days 6, 7, 8, 9 — so execution completes on Day 9. The answer is B. Option A comes from counting only three further days (an off-by-one), and option C from projecting the earlier, slower rates. Two disciplines matter here: converting cumulative figures to increments before reasoning about rates (burnup charts mislead the eye otherwise), and following the question's stated assumption rather than the pattern noticed (the rising trend is real, but the question says "if the Day 5 rate continues"). Both are exactly the care a test engineer applies when reading progress dashboards before telling a delivery manager whether the cycle is on track.

**Question 12 (challenging) — Multi-step capacity and risk calculation**

Release testing needs: 45 scripted scenarios at 40 minutes each, plus 6 exploratory sessions at 90 minutes each, plus 10% of the total scripted-plus-exploratory time as contingency for defect retesting. Two testers are available, each with 12 effective hours over the remaining two days. Does the work fit, and with what margin?

- A) Work totals 42.9 hours against 24 hours capacity; it does not fit, short by 18.9 hours.
- B) Work totals 39.0 hours against 24 hours capacity; it does not fit, short by 15 hours.
- C) Work totals 33.0 hours against 24 hours capacity; it does not fit, short by 9 hours.
- D) Work totals 21.5 hours against 24 hours capacity; it fits with 2.5 hours spare.

**Correct answer: A**

**Explanation:** Compute each component in minutes, then convert — and verify the dominant term first. Scripted: 45 × 40 = 1,800 minutes = 30 hours (recheck, since this is three-quarters of the total: 45 × 40 = 1,800 ✓, and 1,800 ÷ 60 = 30 ✓). Exploratory: 6 × 90 = 540 minutes = 9 hours. Subtotal: 30 + 9 = 39 hours. Contingency: 10% of 39 = 3.9 hours. Total: 39 + 3.9 = 42.9 hours. Capacity: 2 testers × 12 hours = 24 hours. Shortfall: 42.9 − 24 = 18.9 hours. The answer is A. The distractors each embody a specific omission: B forgets the contingency; C applies the 10% to scripted time only and drops exploratory altogether; D halves the workload — the error of "dividing by two testers" after already using combined capacity, a genuinely common double-count. Two professional lessons follow. First, multi-component estimates fail through forgotten or double-counted components far more often than through bad multiplication — so a strong candidate lists the components, then ticks them off. Second, and more important: a capacity analysis showing roughly 43 hours of need against 24 of supply is a finding to escalate today, with options (reduce scope by risk, add people, extend the window) rather than a private problem to absorb. Shortfalls surfaced early get fixed by planning; shortfalls surfaced late get fixed by quiet corner-cutting — the thing the role exists to prevent.

### Administering this section

- **Confirm the calculator policy in advance**, and apply the same rule to every candidate for this role level.
- **Watch for named denominators.** A candidate who states the denominator aloud or in their working — "out of closed defects", "out of all known defects" — is showing the habit most numeric errors in testing metrics violate.
- **Check whether cumulative figures are differenced before reasoning.** Burnups, running totals, and cumulative dashboards must be converted to increments before rates make sense; a candidate who reasons directly from the cumulative row is a common and instructive slip to note.
- **Allow rough working and a scratch calculation.** The four core moves this section tests — rates, percentage change, weighted combination, rate-remainder projection — are ordinary arithmetic performed under time pressure; visible working tells you more than the final letter alone.
- **Note percentage points versus percent.** Confusing the two is the single most consequential numeric error for this role, because it distorts how a candidate would communicate risk in the job itself.
- **Ask a candidate to recheck the dominant term if time allows.** In multi-step items, an error in the largest component swamps everything else, and asking a candidate to identify which component they would recheck first is a useful debrief question.

### Common candidate pitfalls

- **Averaging percentages across unequal groups.** A common error is averaging suite pass rates directly rather than converting to counts, summing, and dividing — worth flagging in the debrief as it is a real reporting error, not just a test artefact.
- **Answering the mirror question.** Some candidates give the automated share when manual share was asked, or the pass rate when the failure rate was asked. The final clause of the question is the specification, and candidates who read it twice tend to avoid this.
- **Percentage points versus percent.** A rise from 4% to 7% is 3 points and a 75% relative increase; candidates who conflate the two are showing a gap that would miscommunicate risk on the job.
- **Wrong-denominator ratios.** Reopens over raised versus reopens over closed are different metrics with different meanings; watch for candidates who default to whichever denominator is easiest rather than the one the question specifies.
- **Off-by-one in projections.** "4 more days from Day 5" ends on Day 9, not Day 8 — a common slip worth distinguishing from a genuine misunderstanding of the method.
- **Abandoning verified working under option pressure.** A candidate whose twice-checked answer matches no option and who then recalculates repeatedly to force a match is showing exactly the panic-driven behaviour that produces wrong answers on the job as well as in the assessment; note it, but do not penalise a candidate who instead picks the closest option and moves on.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts, evaluates, and communicates meaning from written material of the kind this role lives on: acceptance criteria, requirement documents, standards extracts, defect narratives, release notes, policy guidance, and stakeholder correspondence. The dominant format presents a passage followed by statements the candidate must classify as **true** (the passage supports it), **false** (the passage contradicts it), or **cannot say** (the passage provides insufficient information). Supplementary formats include best-summary selection, valid-inference identification, and clear-writing judgement — choosing the sentence that communicates a technical point most effectively to a given audience.

Administer it as a timed exercise of 15 to 25 minutes covering 20 to 30 statements across several passages, scored against the answer key below and, where available, norms for professionals at this level. The governing rule to make explicit to the candidate beforehand: judge each statement using only the passage, however much relevant technical knowledge they bring. Their expertise should get them to the answer faster; it must never substitute for the text.

For a test engineer, verbal precision is not a soft skill — it is load-bearing infrastructure. Acceptance criteria are conditional sentences; a test engineer's tests are only as correct as their parsing of them. Defect reports persuade or fail on the accuracy of their wording. This role explicitly includes communicating effectively with technical and non-technical stakeholders, supporting discussions within a multidisciplinary team with potentially difficult dynamics, and managing differing stakeholder perspectives — all of which begin with reading exactly what was written and saying exactly what is meant. This section exists because ambiguity tolerated in reading becomes defects tolerated in production.

### How this assessment maps to the role

- **Comprehension of requirements** maps to the candidate's **Test analysis** skill: determining what to test following an agreed approach means converting written requirements into test conditions without loss or invention — reading comprehension with consequences.
- **True/false/cannot-say discipline** maps to the candidate's **Designing and executing tests** skill: a test verifies what the specification states; "cannot say" is the assessment twin of "this criterion is ambiguous — clarify before scripting", one of the highest-value sentences a test engineer says.
- **Inference judgement** maps to the candidate's **Managing, reporting and resolving defects** skill: critically assessing defects and risks requires distinguishing what the evidence establishes from what it merely suggests — in prose as in triage.
- **Clear-writing judgement** maps to the candidate's **Communicating between the technical and non-technical** skill: advocating for the team externally and managing differing stakeholder perspectives depends on choosing wording that is accurate for engineers and meaningful to everyone else.
- **Reading standards and process text** maps to the candidate's **Test engineering** and **Test and quality planning** skills: following practices and standards such as source control and CI/CD conventions, and contributing to quality strategies, begins with faithful reading of the governing documents.

### Assessment items

**Question 1 (easy) — True/false/cannot-say on a testing policy extract**

Passage: "All code changes must be accompanied by automated tests before merging to the main branch. Changes classified as emergency fixes may merge without accompanying tests, provided a retrospective test is added within five working days. The classification of a change as an emergency fix requires approval from the technical lead."

Statement: "A routine change may merge to the main branch without accompanying automated tests."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The general rule requires accompanying tests for all changes before merging. The only stated exception is for emergency fixes — which require technical lead approval — and a "routine change" by definition is not an emergency fix, so no exception applies. The statement contradicts the general rule, making it False. The reading pattern: identify the rule, identify the exception's scope, and check whether the case in the statement falls inside that scope. This is the same parsing a test engineer applies to branch policies and definition-of-done documents in real work, where the practical stakes are identical — a team member who believes routine changes can merge untested has misread the policy in exactly the way this statement does, and the test engineer is often the person who catches it.

**Question 2 (easy) — True/false/cannot-say on the same passage**

Passage (as in Question 1): "All code changes must be accompanied by automated tests before merging to the main branch. Changes classified as emergency fixes may merge without accompanying tests, provided a retrospective test is added within five working days. The classification of a change as an emergency fix requires approval from the technical lead."

Statement: "Retrospective tests for emergency fixes are usually added on the fifth working day."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage sets a deadline — within five working days — but says nothing about when, within that window, teams usually add the tests. "Usually on the fifth day" is a claim about typical behaviour; the passage addresses only permitted behaviour. It neither supports the statement (no frequency information exists) nor contradicts it (adding tests on day five would comply), so the answer is Cannot say. Note the trap's construction: the statement reuses the passage's own phrase ("five working days"), creating a false glow of familiarity. Lexical overlap is not logical support — a principle worth carrying into defect review, where a report can quote a requirement verbatim and still claim something the requirement never said.

**Question 3 (easy) — Parsing an acceptance criterion**

Passage: "Given a user has saved a draft application, when they return within 28 days, then the draft must be restored with all previously entered data. Drafts older than 28 days are deleted, and the user must be informed that their draft has expired."

Statement: "A user returning 30 days after saving a draft will see their previously entered data restored."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Thirty days exceeds the 28-day window, so the restore clause does not apply; the passage states that drafts older than 28 days are deleted and the user is told the draft has expired. Restoration of data from a deleted draft contradicts the passage, so the statement is False. This is precisely the parsing a test engineer performs when converting Given/When/Then criteria into test conditions: the boundary (28 days), the in-window behaviour (restore all data), and the out-of-window behaviour (delete plus inform) are three distinct testable claims. A test engineer would also note what the criterion leaves unspecified — is exactly 28 days inside or outside the window? — and would raise that as a clarification rather than assuming. This item only asks the candidate to classify the 30-day case, which is cleanly outside; the professional instinct to spot the ambiguous boundary case is a bonus a strong candidate's answer may show.

**Question 4 (easy) — Clear writing for a mixed audience**

A team must tell a service owner (non-technical) why a release is delayed. Which sentence does it best?

- A) "The regression suite surfaced a P1 in the eligibility microservice's date-handling logic post-merge, so we're holding the release train."
- B) "We found a serious defect in how the service calculates eligibility dates. We are delaying the release until it is fixed and retested, and we expect to confirm a new date by Thursday."
- C) "Due to unforeseen technical circumstances impacting quality gates, release timelines have been recalibrated pending remediation."
- D) "There's a bug so it's delayed."

**Correct answer: B**

**Explanation:** Option B tells the service owner what happened (a serious defect in eligibility date calculation — translated, not jargonised), what the team is doing (delay, fix, retest), and what happens next (new date by Thursday) — the three things a decision-maker needs, in plain language, without hiding the severity. Option A is accurate between engineers but asks a service owner to decode "P1", "microservice", and "release train". Option C is the worst kind of professional prose: grammatically polished, informationally empty, and faintly evasive — stakeholders correctly read such sentences as concealment. Option D is honest but transfers almost nothing: which bug, how serious, what next? This role includes being an advocate for the team externally and communicating with technical and non-technical stakeholders; option B models the standard — concrete subject, translated severity, action, and a commitment the stakeholder can plan around.

**Question 5 (moderate) — Cannot-say discipline on a report extract**

Passage: "Performance testing of the search service was completed on 14 June. Under a simulated load of 500 concurrent users, the 95th percentile response time was 1.8 seconds against a target of 2 seconds. Peak memory usage remained within allocated limits throughout the test."

Statement: "The search service will meet its response time target in production."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage reports a test result: under simulated load of 500 concurrent users, the service met its target with 0.2 seconds to spare. The statement makes a claim about production — a different environment, potentially different load patterns, data volumes, and infrastructure. The passage neither guarantees production behaviour (test results are evidence, not prophecy) nor contradicts the statement (the result is encouraging). So the answer is Cannot say. This distinction is the epistemology of testing itself, compressed into one question: testing demonstrates behaviour under specified conditions; it does not prove behaviour under all conditions. A test engineer writes reports in exactly this register — "met target under simulated load of 500 users" rather than "will be fine" — and the discipline this item tests is the same discipline that keeps a test engineer's summaries trustworthy when stakeholders push for stronger claims than the evidence supports.

**Question 6 (moderate) — Valid inference from a standards extract**

Passage: "The Technology Code of Practice requires government services to use open standards where possible and to make source code open by default. Teams may keep specific code closed where there is a good reason, such as code relating to security or fraud detection, and must document such decisions."

Which one of the following can properly be inferred?

- A) All government code must be open source.
- B) Fraud detection code must always be kept closed.
- C) A team keeping code closed must document the decision.
- D) Open standards are optional for government services.

**Correct answer: C**

**Explanation:** The passage's final clause states that teams "must document such decisions" — decisions to keep specific code closed. Option C restates this directly. Option A ignores the explicit exception mechanism ("open by default" with documented exceptions is not "all code must be open"). Option B inverts the logic: fraud detection is given as an example of a good reason permitting closure, not a category requiring it — "may keep closed" is permission, not obligation. Option D misreads "where possible" as optionality; the requirement stands wherever openness is possible. Reading policy text with this precision matters in this role because standards like these shape test engineering choices — open-source tools, open repositories for test code, documented exceptions — and because teams routinely paraphrase policy from memory. The engineer who can point to what the text actually requires, versus permits, versus exemplifies, resolves many arguments before they harden into difficult dynamics.

**Question 7 (moderate) — Assembling facts across messages**

Passage: "Message 1, Monday, from delivery manager: 'Release 4.1 is scheduled for Thursday, subject to regression sign-off.' Message 2, Tuesday, from developer: 'The fix for D-231 missed the 4.1 cut; it will ship in 4.2.' Message 3, Wednesday, from test engineer: 'Regression for 4.1 passed except the known issue D-231, which has an agreed workaround documented for support staff.'"

Statement: "Release 4.1 will ship on Thursday containing the fix for D-231."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Split the statement into its two claims and test each against the thread. Claim one: 4.1 ships Thursday — Message 1 says "scheduled for Thursday, subject to regression sign-off", and Message 3 reports regression passed apart from a known, workaround-documented issue; encouraging, but sign-off itself is not stated, so this half alone would be Cannot say. Claim two: 4.1 contains the fix for D-231 — Message 2 states directly that the fix missed the 4.1 cut and ships in 4.2. That half is contradicted outright, and a conjunction containing one false claim is false, so the statement is False. The technique — decompose compound statements, judge each part, and remember that one contradicted conjunct settles the whole — mirrors release-note review in real work, where compound claims ("shipped Thursday with all priority fixes") routinely bundle a true half with a false one, and the test engineer's close reading is what catches the bundle before stakeholders rely on it.

**Question 8 (moderate) — Best summary of a technical passage**

Passage: "Contract testing verifies that two services agree on the structure and content of the messages they exchange, without requiring both services to be deployed together in a full integration environment. The consumer defines its expectations as a contract; the provider verifies against that contract in its own pipeline. Contract tests run faster and localise failures better than end-to-end tests, but they do not verify infrastructure, configuration, or full user journeys, so teams use them alongside — not instead of — a small set of end-to-end tests."

Which is the best summary?

- A) Contract testing replaces end-to-end testing with faster, more reliable checks.
- B) Contract testing verifies message agreements between services independently of full integration environments; it is faster and localises failures well, but complements rather than replaces a small end-to-end set.
- C) Contract testing means the consumer and provider deploy together to verify their contract.
- D) End-to-end tests are obsolete for services that use contracts.

**Correct answer: B**

**Explanation:** The passage makes four claims: what contract testing verifies (message structure and content agreements), how it works without co-deployment (consumer defines, provider verifies in its own pipeline), its advantages (speed, failure localisation), and its limits (no infrastructure, configuration, or journey coverage — hence "alongside, not instead of"). Option B preserves all four with correct emphasis. Options A and D both convert the passage's explicit "alongside — not instead of" into replacement, the exact distortion the author pre-empted. Option C contradicts the mechanism: the passage's point is that co-deployment is not required. Summary judgement of this kind is a working skill: when a test engineer researches and tries new test types and techniques — a duty named in the role — they will often be the person explaining them to the team, and the difference between B-quality and A-quality summaries is the difference between a team that adopts a technique correctly and one that deletes its end-to-end suite because "the new thing replaces it".

**Question 9 (moderate) — Following procedural text under a branch condition**

Passage: "Defect triage procedure: (1) Reproduce the defect in the test environment. (2) If it cannot be reproduced, request further information from the reporter and set status to 'Needs info' — do not close it. (3) If reproduced, assess severity using the agreed matrix. (4) Severity assessments for Critical defects must be confirmed by a second engineer before communication to stakeholders."

A reported defect cannot be reproduced after several careful attempts. What does the procedure require?

- A) Close the defect as not reproducible.
- B) Set the status to "Needs info" and request further information from the reporter.
- C) Assess its severity using the matrix.
- D) Ask a second engineer to confirm the severity assessment.

**Correct answer: B**

**Explanation:** This situation matches the branch in step 2: reproduction failed. The procedure's instruction for that branch is explicit and two-part — request further information and set status to "Needs info" — with an explicit prohibition: do not close it. Option B follows the branch precisely. Option A does the prohibited thing; closure-on-first-failure-to-reproduce is a real-world anti-pattern the procedure is clearly written to prevent (reporters often hold the missing environmental detail that unlocks reproduction). Options C and D belong to the "reproduced" branch, which has not been reached. Procedural questions reward locating the correct branch and executing it faithfully — and resisting the pull of later, more interesting steps. The same discipline governs real defect process work: a process the team collaborated to create only delivers its value when its branches are followed as written, and when experience says a branch is wrong, the professional move is to change the process, not to silently deviate from it.

**Question 10 (challenging) — Negation and scope**

Passage: "The accessibility audit found that none of the twelve public-facing screens failed WCAG 2.2 AA criteria, although three internal admin screens did. Two of the failing admin screens have remediation scheduled this sprint. The audit did not cover the new document upload journey, which launches next month."

Statement: "The audit found that every screen it covered met WCAG 2.2 AA criteria."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Track the scopes carefully. The passage distinguishes three groups: twelve public-facing screens (all passed — "none failed"), three internal admin screens (all three failed — "although three internal admin screens did [fail]"), and the upload journey (not covered). The statement claims every covered screen met the criteria — but the three failing admin screens were covered (the audit found their failures), so the statement contradicts the passage: False. The engineered difficulty is the double negation ("none... failed") sitting beside a quiet contrast clause ("although... did"); hurried readers bank the reassuring first clause and skim the concession. Technique: rewrite negations positively ("all twelve public screens passed") and give contrast words — although, however, except — a full stop of attention, because they exist precisely to reverse or limit what preceded them. In audit reports and test summaries, the concession clause is usually where the risk lives; reading it closely is how a test engineer avoids telling a stakeholder "everything passed" when three screens did not.

**Question 11 (challenging) — Identifying the unsupported claim in a release note**

Passage: "Release 5.0 regression: 412 of 420 checks passed. The eight failures all occurred in the legacy reporting module, which is scheduled for decommissioning in Q3. No new defects were raised against the redesigned application journey during this cycle. Exploratory testing of the application journey was reduced this cycle owing to tester availability."

A colleague drafts four statements for stakeholders. Which is NOT supported by the passage?

- A) "Just over 98% of regression checks passed."
- B) "All regression failures were confined to the legacy reporting module."
- C) "The redesigned application journey is defect-free."
- D) "Exploratory coverage of the application journey was lower than usual this cycle."

**Correct answer: C**

**Explanation:** Verify each. A: 412 ÷ 420 = 0.9809… ≈ 98.1%, so "just over 98%" is supported. B: restates the passage directly. D: restates the final sentence. C makes the classic inferential leap from "no defects were raised" to "defect-free" — and the passage itself supplies the reason to refuse the leap: exploratory testing of that very journey was reduced this cycle. Absence of evidence is weakest exactly where searching was lightest. This is more than a logic point; it is the central honesty of test reporting. Testing can demonstrate the presence of defects, never their absence, and the professional formulation is "no defects found, with reduced exploratory coverage this cycle" — which keeps the caveat attached to the claim it qualifies. Spotting the colleague's over-claim before it reaches stakeholders is exactly the kind of review the candidate's communication skill describes: managing perspectives honestly rather than letting comfortable sentences drift into the record.

**Question 12 (challenging) — Reconciling documents with different authority**

Passage: "Test strategy (approved, version 2.0): 'All Critical and High defects must be resolved or formally waived by the service owner before release.' Team wiki page (last edited eight months ago): 'Critical defects block release; High defects may be carried into release with test lead agreement.' Email from service owner, yesterday: 'Reminder — as per the approved strategy v2.0, I am the only person who can waive Critical or High defects for release.'"

Statement: "According to the currently authoritative guidance, the test lead can agree to carry a High defect into release without the service owner."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Establish precedence before judging. The approved strategy v2.0 requires resolution or formal service-owner waiver for both Critical and High defects; yesterday's email from the service owner reconfirms exactly that, explicitly invoking the approved strategy. The wiki page — eight months stale and contradicted by both the approved document and the most recent authoritative communication — is the outlier. The currently authoritative guidance therefore does not permit test-lead-only carriage of High defects, and the statement is False. The trap is the wiki's specificity: detailed, plausible process text feels authoritative regardless of its standing, and candidates (and teams) anchor on it. The reading discipline — approved and current beats informal and stale — has a real-world action attached: flag the outdated wiki for correction, because the next reader may not have the email. The role's communication skill includes managing differing stakeholder perspectives; many "perspective differences" in real teams are simply different people reading different vintages of the truth, and the engineer who reconciles the documents dissolves the argument.

### Administering this section

- **State the governing rule up front.** Tell the candidate explicitly that each statement is judged against the passage alone, however much relevant expertise they bring — worth saying before the timed section starts, for every candidate.
- **Watch the order of the true/false/cannot-say check.** A candidate applying "does the passage support it, then does it contradict it" in that order, and answering cannot-say only when both are no, is showing the discipline this section rewards.
- **Note how a candidate handles compound statements.** Statements joining two claims are judged claim by claim; a candidate who treats the whole statement as one unit and misses a contradicted half is a useful debrief point.
- **Notice reactions to contrast words.** Although, however, except, unless, provided that — these reverse or limit what came before them, and passages are often built so the material risk sits just after one. A candidate who slows down there is showing careful reading.
- **Ask the candidate to translate one technical fact for two audiences**, if time allows beyond the scored items — the clear-writing items test exactly this, and a live example is a useful supplement for debrief.
- **In multi-document items, check whether the candidate weighs authority and date**, not just detail. Specificity is not authority, and a candidate who defaults to the most detailed document over the most current one is showing a pattern worth discussing afterwards.

### Common candidate pitfalls

- **Letting expertise overwrite the passage.** A candidate may know how pipelines, audits, and releases usually work; the passage may differ. In this assessment, the passage is the whole world, and a candidate who answers from outside knowledge is answering the wrong question.
- **Mistaking lexical overlap for support.** A statement that reuses the passage's phrases can still assert something the passage never claimed; watch for candidates who match words rather than meanings.
- **Treating "no defects found" as "no defects".** The inference from absence-of-report to absence-of-fault is unsupported in the assessment and dangerous in test summaries — especially when coverage was reduced, as in Question 11.
- **Skimming past concession clauses.** "Although", "except", and "however" mark exactly where reassuring sentences stop being true; a candidate who reads to the end of the sentence tends to catch these, and one who does not tends to miss them.
- **Confusing permission, obligation, and example.** "May keep closed" is not "must keep closed"; "such as" introduces an example, not a rule. Modal precision is the whole game in items like Question 6.
- **Anchoring on the most detailed document.** Specificity is not authority. A candidate who favours vivid but stale text over approved and current guidance is showing a pattern that also plays out in real process disputes.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses. Each scenario describes a situation a test engineer could plausibly face, followed by four actions. Common formats ask for the most effective response, the least effective response, or both; some ask the candidate to rate or rank every option. There is rarely a time crunch — offer 15 to 25 scenarios over 25 to 45 minutes — and there is no need for adaptive difficulty. Score the candidate's choices against the key below, built from the judgements of experienced practitioners and occupational psychologists.

The scoring key is not a secret code. It consistently rewards a recognisable cluster of professional behaviours: user focus, honesty about evidence and uncertainty, collaboration across disciplines, ownership of problems within the candidate's remit, timely escalation beyond it, respect for colleagues in disagreement, and protection of quality when pressure mounts. A candidate who has internalised those values will tend to apply them reliably even when the options are engineered to make shortcuts look attractive.

Why use SJTs for test engineers? Because at this level, judgement is the job. The role operates at the friction points of delivery: between developers and analysts, between the plan and the deadline, between what the evidence shows and what stakeholders hope. The role explicitly includes supporting and hosting discussions within a multidisciplinary team with potentially difficult dynamics, managing differing stakeholder perspectives, clearly communicating risks and defect impact, and coaching and mentoring testers. None of those is a technique that can be memorised; each is a series of judgement calls under social and temporal pressure. An SJT rehearses those calls safely, and a candidate's reasoning through the explanations below — if you choose to discuss them in debrief — is genuine developmental value, not just a test result.

### How this assessment maps to the role

- **Defect and risk communication scenarios** map to the candidate's **Managing, reporting and resolving defects** skill: choosing when, how, and to whom to communicate a defect's impact — and holding the line on evidence when others prefer optimism.
- **Cross-discipline collaboration scenarios** map to the role's core duties: working closely with developers on code-level understanding and unit coverage, and collaborating with analysts on acceptance scenario coverage — including when those relationships get strained.
- **Pressure-on-quality scenarios** map to the candidate's **Test and quality planning** skill: adapting approaches based on risk when time shrinks, rather than abandoning them; and to the **Test analysis** skill of advocating for test needs such as data, access, and environments.
- **Mentoring scenarios** map to the candidate's coaching and mentoring duty: developing testers without doing their work for them, and correcting without discouraging.
- **Stakeholder dynamics scenarios** map to the candidate's **Communicating between the technical and non-technical** skill: hosting difficult discussions, advocating for the team externally, and managing differing perspectives without either capitulation or combat.

### Assessment items

**Question 1 (easy) — A defect found on release morning**

At 08:30 on release day, the final smoke run finds that the citizen-facing eligibility checker returns a wrong result for one uncommon but realistic input combination. Release sign-off is at 10:00. What is the most effective response?

- A) Say nothing until after release — one uncommon case should not derail the day.
- B) Immediately investigate enough to characterise the defect (scope, severity, affected users), record it, and bring the evidence to the sign-off meeting so the decision-makers can decide with full information.
- C) Declare on the team channel that the release must be cancelled.
- D) Quietly ask a developer friend to hotfix it before anyone notices.

**Correct answer: B**

**Explanation:** The release decision belongs to the accountable decision-makers — but it is only a real decision if it is informed, and informing it is precisely the test engineer's job. Option B does the work in the right order: rapidly characterise the defect (who is affected, how often, how badly — the difference between "an edge case affecting 0.1% of checks" and "wrong answers for a whole applicant category"), record it properly, and put the evidence in front of the sign-off meeting. That is clearly communicating risks and the impact of defects, under pressure, without usurping the decision. Option A substitutes a private risk appetite for the organisation's and hides material information from a governance gate. Option C makes the decision unilaterally in the other direction — and announcing cancellation on a channel before characterising the defect spends credibility that may be needed at 10:00. Option D bypasses source control discipline, review, and retest — the practices this role exists to uphold — and an unreviewed hotfix at 08:45 is a fine way to convert one defect into two. The rewarded behaviours: evidence before opinion, transparency before comfort, and respect for decision rights.

**Question 2 (easy) — A developer disputes a tester's defect severity**

A defect was rated High: postcode validation rejects some valid postcodes, meaning some genuine applicants cannot submit. The developer re-rates it Low, commenting "rare formats, tiny minority, cosmetic really". The tester believes the original rating is right. What is the most effective response?

- A) Change it back to High without comment.
- B) Accept Low — the developer knows the code better.
- C) Bring data to a conversation: estimate how many real applicants use the affected formats, restate the user impact (blocked submission is not cosmetic), and agree the rating against the team's severity definitions — escalating to triage only if agreement is not reached.
- D) Post in the team channel that developers should not re-rate testers' defects.

**Correct answer: C**

**Explanation:** Severity disputes are settled by definitions and evidence, not by role or by edit-war. Option C does three things in the right order: it grounds the discussion in data (even a rough estimate — affected postcode formats are enumerable, and "some valid applicants cannot submit at all" is a user-impact statement, not an opinion); it applies the team's agreed severity definitions, which exist precisely to depersonalise these calls; and it reserves escalation to the triage forum for genuine deadlock, which keeps the relationship intact and the process legitimate. Option A starts a status-field edit war — the least productive argument format ever devised. Option B defers on a question where code knowledge is not the relevant expertise: the developer knows how the validation works; the tester knows what blocked submission means for users, and user impact is what severity measures. Option D converts a technical disagreement into a public territorial one. This role includes managing differing stakeholder perspectives and hosting discussions with difficult dynamics — this is the daily, small-scale version, and the pattern (data, definitions, then escalation path) is the one that scales.

**Question 3 (easy) — Asked to skip the process "just this once"**

A delivery manager asks a test engineer to mark the regression run as complete in the release checklist, although 40 of 300 cases remain unexecuted: "We'll finish them tomorrow after go-live — I just need the checklist green for the board report tonight." What is the most effective response?

- A) Mark it complete — the remaining cases are probably fine.
- B) Refuse and report the delivery manager to their line manager immediately.
- C) Decline to record an untrue status, and offer what can honestly be provided tonight: a precise statement of progress (260 of 300 complete, remaining cases and their risk areas listed, completion forecast), so the board sees an accurate picture that is almost as reassuring.
- D) Mark it complete but keep a private note recording the objection.

**Correct answer: C**

**Explanation:** A checklist status is a factual record feeding a governance decision; recording it falsely is falsifying quality evidence, and no seniority makes that request proper. But notice what option C understands that a bare refusal misses: the delivery manager has a legitimate need — something credible for the board tonight — wrapped in an illegitimate ask. Meeting the need honestly ("260 of 300, remaining 40 are in low-risk admin screens, completion by 11:00 tomorrow") usually dissolves the pressure entirely, because a precise, nearly-complete truth serves a board better than a hollow green. Option A gambles users' service on "probably". Option B escalates before attempting the professional conversation — escalation is the backstop if the pressure persists, not the opening move against a colleague under deadline stress. Option D is the worst combination: the record lies, and the private note proves the falsity was known at the time. The rewarded pattern — decline the improper act, serve the legitimate need underneath it, escalate only on persistence — recurs across professional life, and test engineers who master it protect both quality and relationships.

**Question 4 (easy) — A mentee's work has a flaw spotted late**

A test engineer is mentoring a junior tester. Reviewing their executed test evidence, the mentor finds that for the past week the junior misunderstood one feature's expected behaviour and marked several genuinely failing cases as passed. The results fed into yesterday's progress report. What is the most effective response?

- A) Quietly rerun and correct everything so the junior never finds out.
- B) Tell the junior to fix it and say nothing to anyone else.
- C) Work through one example with the junior so they understand the misunderstanding, have them re-execute and correct the records, and inform the team promptly that part of yesterday's reported results needs revision — treating it as a normal correction, not a blame event.
- D) Report the junior's error to their line manager as a performance concern.

**Correct answer: C**

**Explanation:** Three obligations converge: the record must be corrected, the team must know a report they relied on was partly wrong, and the junior must actually learn — and option C is the only one honouring all three. Working through one example together converts an embarrassing week into a durable lesson (misread expected behaviour is among the most instructive tester mistakes); having the junior perform the correction keeps ownership where growth happens; prompt, matter-of-fact notification to the team keeps the quality record trustworthy and models that corrections are normal professional hygiene. Option A fixes the data but steals the lesson and hides the report revision. Option B corrects records while leaving the team trusting a stale report — the report belongs to the team, not to the mentor alone to leave silently wrong. Option D converts a supervised-learning event into a disciplinary one; mentoring means the first response to error is teaching, and a week-long misunderstanding is partly a mentoring gap too — worth reflecting on check-in frequency. Coaching and mentoring testers is a named duty of this role; this is what it looks like when it is hardest and most valuable.

**Question 5 (moderate) — Analyst and developer disagree about intended behaviour**

Mid-sprint, a test engineer discovers that the analyst's acceptance script and the developer's implementation disagree: the script expects applications saved after the deadline to be rejected; the implementation accepts them but flags them for manual review. Both people are adamant they are right, and each has asked the test engineer to "just test it my way". What is the most effective response?

- A) Test against the analyst's script — analysts own requirements.
- B) Test against the implementation — code is the ultimate truth.
- C) Test both behaviours and report both sets of results.
- D) Pause testing of this behaviour, get the analyst and developer together (with the product owner if needed) to agree the intended behaviour, record the decision, then test against it.

**Correct answer: D**

**Explanation:** The disagreement is not a testing problem — it is an unresolved requirement wearing a testing costume, and no amount of test execution resolves it. Option D treats it correctly: convene the people who own intent (the analyst, the developer, and where policy is implicated — as a deadline rule surely is — the product owner), get a decision, record it where the next person can find it, and only then test, because until intent is agreed there is no "expected result" and thus no test. This is the role's collaboration duty in its purest form: working with analysts on scenario coverage and with developers on shared understanding, and hosting exactly the difficult discussion the candidate's communication skill describes. Option A and option B each pick a side by job title — but titles do not settle intent, and "code is truth" is precisely the fallacy testing exists to reject: code is the claim; requirements are the standard. Option C sounds diligent but is expensive theatre: two result sets against two contested standards produce no decision, just better-documented confusion. The rewarded behaviours: recognising a requirements gap, convening rather than adjudicating, and making the resolution durable by recording it.

**Question 6 (moderate) — Least effective: the flaky suite before a demo**

A team demos to the programme board in an hour. The end-to-end suite just went red on three checks that have a history of flakiness but also cover the journey being demonstrated. The delivery manager says "they're the flaky ones, ignore them". Which response is LEAST effective?

- A) Quickly rerun the three checks and glance at the failure output to see whether the signature matches the known flakiness pattern.
- B) Agree they are probably flaky, but spend ten minutes manually walking the demo journey as insurance.
- C) Ignore the failures without any check, as instructed, and prepare the demo.
- D) Tell the delivery manager fifteen minutes will be spent distinguishing flake from failure, reporting back before the demo.

**Correct answer: C**

**Explanation:** This question asks for the least effective option — check the format before judging. Option C is weakest because it converts a plausible hypothesis ("history of flakiness") into an untested assumption at exactly the moment it is cheapest to test and most expensive to be wrong: the checks cover the very journey about to be shown to the programme board, and a live demo failure costs more credibility than any fifteen-minute delay. The other three all add verification proportionate to the time available: A uses the failure signature (flaky failures usually look different from real ones — timeouts versus assertion mismatches); B hedges with a manual walkthrough of the actual demo path; D makes the verification visible and time-boxed, which also gently renegotiates the instruction rather than either obeying or defying it. Note that the least effective option is the most obedient one — SJTs at this level regularly test whether a candidate treats instructions from busy managers as information to incorporate rather than obligations that override evidence. "Known flaky" is a fact about history; today's red is a fact about now; only a check connects them.

**Question 7 (moderate) — Advocating for test needs nobody funded**

A team's performance tests run against a shared environment so unrepresentative that results are nearly meaningless, and two performance defects have already reached production that better testing would have caught. Environment improvements were left out of this quarter's plan. What is the most effective response?

- A) Stop running performance tests, since the results are meaningless anyway.
- B) Keep running them and reporting results without caveats — some data is better than none.
- C) Build a short evidence-based case — the two escaped defects, their production impact, what a representative environment costs — and bring it to the test lead and delivery manager with a concrete, costed proposal.
- D) Complain about the environment in each sprint retrospective until someone acts.

**Correct answer: C**

**Explanation:** Identifying and advocating for test needs — data, access, environments — is a named skill of this role, and option C is what advocacy actually means: converting a grievance into a decision-ready case. The two escaped defects are the strongest asset available, because they translate "unrepresentative environment" (an engineer's complaint) into production incidents with user impact and remediation cost (a manager's business case); pairing that with a costed proposal gives decision-makers something they can approve. Option A abandons coverage entirely and silently — if performance testing stops, that is a risk-acceptance decision the team should make knowingly, not a default. Option B is subtly worse than it sounds: uncaveated results from a bad environment are misinformation wearing data's clothes, and stakeholders will rely on them; if testing must continue, the results need explicit caveats. Option D mistakes repetition for escalation — retrospective complaints without a proposal are how issues become wallpaper. The rewarded behaviours: evidence-building, translation between technical and business registers, and constructive persistence through the right channels.

**Question 8 (moderate) — A teammate's automation habit creates hidden risk**

A developer on the team, trying to help, has been "fixing" red end-to-end checks by adding retries and broadening assertions — the suite is greener, but one of their changes made an assertion so loose it would now pass even if the page showed an error. They are proud of having "stabilised the suite". What is the most effective response?

- A) Revert all their changes and tell the team automation belongs to testers.
- B) Say nothing — the suite is greener and they meant well.
- C) Pair with them: show the specific loosened assertion and how it now passes on failure, agree what the check must still guarantee, fix it together, and propose a lightweight review convention for test-code changes so the whole team keeps assertion strength visible.
- D) Raise their changes as a defect and assign it to them.

**Correct answer: C**

**Explanation:** Two things are true at once: the developer has degraded the suite's power to detect failure — an assertion that passes on error is a disabled alarm — and the developer is exactly the kind of engaged teammate quality culture depends on. Option C honours both. Pairing on the concrete example teaches the one distinction that matters in test code (a green check must mean something is verified, not merely that nothing threw), fixing it together preserves their ownership and goodwill, and the review-convention proposal fixes the system rather than just the instance — test code deserves the same review discipline as production code, which is precisely the source-control and review practice named in the role's test engineering skill. Option A wins the battle, loses the collaborator, and entrenches a testers-versus-developers boundary this role exists to dissolve. Option B trades tomorrow's escaped defect for today's comfort; a greener suite that detects less is a worse suite. Option D uses the defect process as a passive-aggressive messenger for what should be a conversation. The rewarded behaviours: teaching over territorialism, fixing systems over instances, and protecting detection power over cosmetic green.

**Question 9 (moderate) — Exploratory findings versus the scripted plan**

Halfway through a tight scripted regression window, exploratory instincts flag something odd: an error message during one script exposed a stack trace mentioning a payment component supposedly untouched by this release. Investigating properly would cost half a day against a plan with no slack. What is the most effective response?

- A) Note it for after the release and complete the scripted plan — the plan is the commitment.
- B) Raise it immediately with the test lead and delivery manager: describe what was seen and why it suggests unexpected change in a high-risk component, and recommend re-planning the remaining window to include targeted investigation, stating what scripted coverage would be traded away.
- C) Silently drop half a day of scripted cases to investigate — the judgement call is what a test engineer is paid for.
- D) Ask a developer whether the payment component changed, and accept their answer either way.

**Correct answer: B**

**Explanation:** A stack trace surfacing an allegedly untouched payment component is exactly the class of signal risk-based testing exists to catch: possible undisclosed change in a high-impact area. But the response tests something subtler than noticing — it tests how a candidate re-plans under constraint. Option B keeps the plan a shared, visible artefact: bring the evidence, the risk argument, and — crucially — the explicit trade-off (which scripted cases would be dropped or deferred), so the team adapts the approach knowingly. That is "creating or adapting quality testing approaches based on risk" done properly: adaptation as a team decision with stated costs, not a private swerve. Option A treats the plan as sacred when the plan's purpose — risk reduction — is better served by amending it; plans serve risk, not vice versa. Option C makes the right technical call the wrong way: silent unilateral re-planning means the team believes coverage exists that does not. Option D gathers useful input but then delegates a risk decision to a single assertion from the very artefact under suspicion — the developer may honestly not know (transitive dependency changes are invisible in code review); their answer is evidence, not adjudication. Rewarded behaviours: signal recognition, transparent trade-offs, and shared re-planning.

**Question 10 (challenging) — Production incident implicates a candidate's testing**

A production incident affects several hundred users; the root cause is a scenario the acceptance suite should plausibly have covered but did not. In the incident review, a senior manager asks pointedly: "How did testing miss this?" What is the most effective response?

- A) Explain that testing can never catch everything, so no process change is warranted.
- B) Point out that the analyst never documented that scenario, so it was not testing's miss.
- C) Answer factually: the scenario was not in the covered set; show how the coverage decision was made at the time; own the gap on behalf of the quality process; and bring (or commit to bring) specific changes — how the scenario class will be covered, and what in the analysis-to-coverage chain will change to catch its siblings.
- D) Accept full personal blame and promise to test everything more thoroughly.

**Correct answer: C**

**Explanation:** Incident reviews are where a team's quality culture is either built or spent, and the test engineer's contribution sets the tone. Option C models blameless-but-accountable: factual reconstruction (what was covered, what was not, and why the line was drawn where it was — coverage decisions are made under constraints, and showing the decision honours that), ownership of the process gap rather than deflection of it, and — the part that makes the answer complete — systemic improvement targeting the scenario's whole class, since an escaped defect is a message about the coverage method, not just one missing test. Option A is true in general ("testing cannot prove absence of defects") but deployed here as a thought-terminating shield; the question is not whether testing can be perfect but whether this gap teaches anything, and it does. Option B may even be factually accurate — and is still the wrong answer, because scenario coverage is explicitly collaborative in this role (a test engineer works with analysts to ensure business scenarios are covered), so "their miss" is a category error, and blame-routing in front of senior managers poisons the collaboration the fix depends on. Option D overcorrects into theatrical self-blame and an impossible promise ("test everything") that debases the currency of real commitments. Rewarded behaviours: factual honesty, process ownership, systemic learning, and protecting collaborative relationships under fire.

**Question 11 (challenging) — Mentoring versus delivery under deadline**

Two days before a release, a junior mentee volunteers to take the remaining accessibility checks — a growth area for them, but they work at half the mentor's speed and the timeline has little slack. They visibly want the responsibility. What is the most effective response?

- A) Decline kindly — deadlines outrank development, and the mentor will be faster.
- B) Give them the full set and step back completely; ownership means ownership.
- C) Split the set: give them a meaningful portion sized so the timeline holds even at their pace, pair briefly on the first check, schedule a mid-point review, and keep the highest-risk checks with the mentor.
- D) Let them do all the checks, then quietly redo the important ones overnight.

**Correct answer: C**

**Explanation:** The tension is real — development needs stretch, delivery needs certainty — and the strongest answer refuses to sacrifice either wholesale. Option C is structured delegation: the portion is sized so that even the worst plausible case (they run at half speed) does not break the timeline; the brief pairing calibrates quality at the start, where correction is cheapest; the mid-point review catches drift while recovery is still possible; and risk allocation keeps the highest-stakes checks with the more experienced hand. This is coaching and mentoring as the role means it — building capability inside real delivery, with the risk consciously managed rather than wished away. Option A protects this release while quietly teaching the mentee that responsibility only arrives when it is costless, which is never; juniors who are only given safe work stay junior. Option B confuses abandonment with empowerment — full ownership without calibration or checkpoints, two days before release, sets them up to fail in public. Option D is the most corrosive: it spends the mentor's evening, hides the mentor's distrust, falsifies the development experience (the junior believes they delivered; they did not), and if they ever discover the redo, the mentoring relationship is over. Rewarded behaviours: risk-sized delegation, early calibration, honest support, and growing people without gambling users.

**Question 12 (challenging) — The metric that flatters and the truth that does not**

A delivery manager plans to tell the programme board that quality is improving, citing the defect count: 34 raised last quarter, 19 this quarter. The fuller picture: this quarter the team lost a tester, exploratory testing halved, and production incidents ticked up from 2 to 4. The report goes out tomorrow. What is the most effective response?

- A) Let it go out — the number is accurate, and the framing is the delivery manager's call.
- B) Speak to the delivery manager today: show that falling found-defects alongside halved exploratory effort and doubled production incidents suggests reduced detection, not improved quality; propose reporting the fuller set together, with what the team is doing about detection capacity.
- C) Email the programme board directly tonight with the production incident figures.
- D) Raise it at the next retrospective, after the report has gone out.

**Correct answer: B**

**Explanation:** The defect count is accurate and the conclusion drawn from it is false — fewer defects found under substantially reduced looking is evidence of weaker detection, and the production incident rise (found-in-live is the one detection channel that never stops) points the same way. Option B acts on the two features that matter: timing (today, before the board relies on the claim — quality information has a shelf life, and correction after reliance costs far more trust than correction before) and channel (the delivery manager first, with evidence and a proposed joint reframing, preserving both the relationship and their ownership of the report). Note that B also brings a constructive element — what the team is doing about detection capacity — which turns an awkward correction into a credible plan, the register boards respond to. Option A hides behind a division of labour that does not survive contact with this role: clearly communicating risks and defect impact to stakeholders is a named skill for the candidate, and staying silent while a misleading quality claim goes to governance is a failure of it, however accurate the isolated number. Option C torches the delivery manager's trust and presents raw figures without collaborative context — the nuclear option before diplomacy was attempted. Option D is honesty on a timetable that renders it useless. Rewarded behaviours: metric literacy, timely courage through the right channel, and correcting claims while strengthening relationships rather than spending them.

### Administering this section

- **Score against values, not optics.** The keyed answer is usually the one that best serves users, evidence, and the team's long-term trust, not the one that sounds most decisive — hold the key steady against that standard rather than your own instinct in the moment.
- **Watch for the legitimate need inside the improper ask.** Several scenarios wrap a real need (reassurance for a board, a green demo) in a bad request (falsify, skip, ignore). Strong candidate answers decline the request and serve the need — weaker answers do one or the other.
- **Read the most/least instruction line twice yourself before scoring.** Reversed-format questions catch out assessors as well as candidates; double-check which direction the question asks before applying the key.
- **Use the explanations in debrief, not before.** Talking a scenario through with the candidate afterwards — what they chose and why — often reveals more about their judgement than the choice alone, and is genuine developmental value to offer them.
- **Notice escalation calibration in a candidate's answers.** At test engineer level, keyed answers usually attempt the direct professional conversation first, escalate on persistence or deadlock, and always keep the record honest. Options that escalate instantly, or never, are usually distractors — and a candidate who is drawn to them consistently is worth a follow-up question in interview.
- **Note where trade-offs are stated explicitly.** Many strong options include "and say what it costs" — re-planning with stated coverage trade-offs, corrections with revision notices. A candidate whose chosen answers consistently name the trade-off is showing a mature pattern worth recording in your evidence log.

### Common candidate pitfalls

- **Obedience as a default.** "The manager said so" does not make ignoring evidence, skipping verification, or falsifying status acceptable. Candidates who select options like these are treating instructions as binding rather than as input — the keyed answers do the opposite.
- **Unilateral heroics.** Silently re-planning coverage, quietly redoing a mentee's work, hotfixing around process — options where the candidate alone absorbs or hides a problem score poorly, because they break the team's shared picture of reality.
- **Blame-routing under pressure.** Even when another discipline genuinely contributed to a failure, options that route blame in front of stakeholders score below options that own the shared process and fix it.
- **Comfortable silence.** Letting a flattering metric, an over-claimed release note, or a stale green suite pass unchallenged is the quiet failure mode this section probes for. If a scenario includes a silence option, it is almost never the key.
- **Punitive responses to good-faith error.** Juniors who misunderstand, developers who loosen assertions while helping — the keyed response teaches and fixes systems; disciplinary or territorial options are distractors.
- **All-or-nothing framing.** Cancel the release versus say nothing; full delegation versus none. The keyed answers, and real professional judgement, tend to live in the structured middle: characterise, time-box, split, verify, state the trade-off.

## Conclusion

You have now worked through a complete, role-specific psychometric assessment for the test engineer role in the UK Government Digital and Data profession, and administering it well is itself a skilled task worth taking seriously.

To score, work section by section against the answer keys above. In the cognitive and numeric sections, mark each item against its correct answer and note where a candidate's working shows sound reasoning that nonetheless landed on the wrong option — that distinction is worth recording separately from the raw score. In the verbal section, keep true/false/cannot-say errors distinct from each other in your notes, since a candidate who over-reads (calling something true or false when the passage is silent) is showing a different pattern from one who is too cautious (calling something cannot-say when the passage does support or contradict it). In the situational judgement section, score against the key's cluster of rewarded behaviours — user focus, evidence over optimism, collaboration, ownership, timely escalation, respect in disagreement, protection of quality under pressure — rather than against your own instinct for what you would have chosen.

Debrief the candidate after scoring, not before. Walk through what the assessment covered, where their answers matched the key, and where they diverged — the situational judgement and verbal reasoning sections in particular reward a short discussion, since a candidate's reasoning often tells you more than their choice of letter. Keep the debrief constructive: this is developmental information for the candidate as well as a data point for you, and several of the explanations above double as genuine coaching material if you choose to share them.

Keep records. Note the date, the time allowed, and the score for each section, alongside any observations from the debrief, and keep them consistent in form across every candidate you assess for this role level — that consistency is what protects the process, and the candidates going through it, from an unfair or arbitrary result. Administer the same items and the same time limit to every candidate at this role level, in the same sitting conditions as far as you reasonably can, and hold the answer key back from every candidate until their own assessment is complete.

Finally, remember what this assessment is and is not. It samples, in miniature, the structured reasoning about evidence, risk, and human systems that the test engineer role asks for every day — and a strong result here is a genuinely useful signal. But it is one input among several, alongside the interview, any work-sample evidence, and references, and it must never be the sole basis for a hiring, promotion, pay, performance, or disciplinary decision. Use it as one part of a fair, well-rounded process, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on it — the advisory above says why.
