# Apprentice Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for apprentice developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and workplace judgement that predict success in a role. For an apprentice developer, that means practical, everyday thinking: the assessments described here are job-specific, using artefacts the role genuinely handles — code naming rules, test results, simple scripts, build dashboards, user stories, runbooks, and short policy extracts — and decisions genuinely faced by someone learning on the job: shadowing more experienced developers, pairing to write code and tests, following a test-driven approach, and helping investigate service faults under direction.

At this level, how a candidate approaches a problem matters more than how much they already know. The material tests careful reading, step-by-step reasoning, checking work, and asking for help at the right time — the exact habits an apprenticeship is designed to build.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Expect a wide range of prior test-taking exposure at this level, and brief every candidate on the format with the same ungraded warm-up before timed sections begin. Score for method — applying a stated rule exactly, checking every condition rather than stopping at the first, verifying a conclusion against the evidence given — as much as for the final answer. Several situational judgement items reward a candidate who surfaces a problem early and uses the supervision structure around them, rather than either struggling silently or acting alone on something outside their remit; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the thinking skills this role uses every day, through practical scenarios rather than abstract puzzles — naming conventions in code, sequences of test results, simple rules in a script, a list of tasks to sort — that ask a candidate to reason about them quickly and carefully.

Typical format: an online, timed test lasting about 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

This is used for apprentice developers because the role is fundamentally about learning to think like a developer: writing clean, automatically tested code, following a test-driven approach, and helping investigate service faults under direction all depend on the same core abilities — noticing patterns, following rules exactly, spotting small errors before they become big ones, and working out what to do first.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (software engineering)**: spotting how files are named, how functions are structured, how test cases repeat a shape.
- **Logical deduction** maps to **Modern development standards** and the test-driven approach: working out correctly what a rule requires in a specific case.
- **Error checking** maps to **Programming and build** and **Service support**: spotting the small difference between what is written and what should be written.
- **Prioritisation** maps to the day-to-day working pattern of shadowing, pairing and building knowledge: deciding sensible orders for tasks.
- **Applied problem solving** maps to **Prototyping** and **User focus**: breaking a fuzzy problem into steps.

### Practice questions

**Question 1 (easy) — Pattern recognition in file naming**

Coding standard: test files are named after the file they test, with `_test` added before the extension. Files: (1) `payments.py` and `payments_test.py`; (2) `refunds.py` and `refunds_test.py`; (3) `invoices.py` and `test_invoices.py`; (4) `receipts.py` and `receipts_test.py`. Ask which pair breaks the naming pattern.

- A) Pair 1
- B) Pair 2
- C) Pair 3
- D) Pair 4

**Correct answer: C**

**Explanation:** The test file for `invoices.py` should be `invoices_test.py`; pair 3 puts "test" at the front instead. This tests checking a pattern precisely rather than by general resemblance — automated tools often find test files by name, so a wrongly named file might silently never run.

**Question 2 (easy) — Logical deduction from a test result**

Pair programming, following a test-driven approach: a test checks that `add_vat` returns 120 when given 100. Running the suite, the `add_vat` test fails. Ask which conclusion must be true.

- A) The function `add_vat` contains a bug.
- B) The test contains a bug.
- C) Either the function or the test does not currently behave as intended.
- D) The whole test suite is broken.

**Correct answer: C**

**Explanation:** A failing test shows a mismatch between expectation and behaviour, but not which side is wrong — A and B are each merely possible, and D goes far beyond the evidence. This tests concluding only what a failing test actually guarantees, the discipline behind investigating both sides before changing anything.

**Question 3 (easy) — Error checking a simple script**

Standard: every function must have a one-line comment above it. Four functions: `load_data` (comment above); `clean_data` (comment above); `save_data` (comment two lines below); `print_summary` (comment above). Ask how many functions breach the standard.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Only `save_data` breaches the rule, since its comment is below rather than above the function. This tests checking each item against the rule precisely — "it has a comment somewhere" is not the same as complying with a rule that specifies position.

**Question 4 (easy) — Prioritisation of a morning's tasks**

At 9:30 on Tuesday: (1) a pairing session at 10:00 requiring yesterday's code to be re-read first; (2) an apprenticeship portfolio entry due Friday; (3) a teammate's message asking for help testing a small fix "sometime today"; (4) a tutorial about a testing library, no deadline. Ask for the most sensible order.

- A) 2, 1, 3, 4
- B) 1, 3, 2, 4
- C) 4, 1, 2, 3
- D) 3, 4, 1, 2

**Correct answer: B**

**Explanation:** Item 1 is urgent (30 minutes away) and important (core learning); item 3 has a same-day timeframe; item 2 has three days' slack; item 4 has no deadline. This tests ordering by urgency and importance together rather than by a Friday deadline (A) or the least time-pressured item (C, D) coming first.

**Question 5 (moderate) — Pattern recognition in test output**

Failing tests over six pushes: 0, 0, 1, 0, 2, 4 — all new failures in the payments module, which the team began changing three pushes ago. Ask for the most reasonable reading of this pattern.

- A) The test framework has stopped working properly.
- B) The recent changes to the payments module are probably introducing failures, and the trend is getting worse.
- C) Four failures out of a large suite is normal, so nothing needs attention.
- D) The failures are random and will probably go away on their own.

**Correct answer: B**

**Explanation:** An upward trend beginning when payments work started, located in the payments module, is a strong linking pattern. This tests reading the shape and direction of data rather than a single point (C) or an unsupported explanation (A, D) — spotting the trend and raising it is the right apprentice behaviour.

**Question 6 (moderate) — Logical deduction from a deployment rule**

Rule: "Code may be merged only if the build is green and at least one other developer has approved the review." A change has one approval and the build is currently red because of a failing test. Ask which conclusion must be true.

- A) The change may be merged, because it has an approval.
- B) The change may not be merged at the moment.
- C) The approval does not count because the build is red.
- D) A second approver must be found.

**Correct answer: B**

**Explanation:** The rule is an "and" of two conditions; one is unmet (the build), so the whole rule is not satisfied, regardless of the approval. This tests reading a multi-condition rule precisely — C and D each invent a consequence the rule does not state.

**Question 7 (moderate) — Error checking data against a rule**

Rule: "Every environment name must be lowercase, and test environments must end in `-test`." List: `production`; `staging`; `Payments-Test`; `integration-test`. Ask which entries breach the rule.

- A) Entry 3 only
- B) Entries 3 and 4
- C) Entry 4 only
- D) Entries 2 and 3

**Correct answer: A**

**Explanation:** Only `Payments-Test` breaches the rule, since it contains capital letters (the lowercase requirement, not the `-test` suffix, is what fails). This tests checking each entry against every part of a rule — a fault is often caused by exactly this kind of small mismatch a computer treats as completely different data.

**Question 8 (moderate) — Problem solving with a step-by-step process**

Bug-fixing process: (1) reproduce with a failing test; (2) fix until it passes; (3) run the whole suite; (4) ask for review. A written test passes immediately, before any code change. Ask for the most sensible next step.

- A) Move on to step 2 and start changing the code anyway.
- B) Delete the test and skip straight to fixing the code.
- C) Pause and check the test — it may not actually be reproducing the bug.
- D) Mark the bug as fixed, since the test passes.

**Correct answer: C**

**Explanation:** In a test-driven approach, the first test should fail, since it describes currently broken behaviour; a test passing immediately has likely failed to capture the bug. This tests recognising a surprising result as a signal to stop and understand it, rather than proceeding as if nothing were wrong (A, D) or discarding the process (B).

**Question 9 (moderate) — Prioritisation during a service fault**

Shadowing during a live incident, asked to do three things by the investigating developer: (1) note error message times; (2) find the on-call DBA's phone number "in case we need it"; (3) fetch the runbook, which she says she needs first. A teammate then messages about lunch. Ask for the order to act in.

- A) Runbook, error times, phone number; ignore lunch until later.
- B) Lunch reply, runbook, phone number, error times.
- C) Error times, phone number, runbook; quick lunch reply in between.
- D) Phone number, runbook, error times; ignore lunch until later.

**Correct answer: A**

**Explanation:** The developer stated directly what she needs first — the runbook — and during an incident the investigation lead sets priorities. This tests following a stated priority exactly rather than reordering it (B, C, D), with the lunch message correctly deferred during a live incident.

**Question 10 (hard) — Multi-step deduction about a build pipeline**

Pipeline order: unit tests, then integration tests, then deployment. Rules: (i) unit test failure stops integration tests running; (ii) integration test failure stops deployment; (iii) deployment always happens if integration tests pass. Deployment did not happen this morning. Ask which conclusion must be true.

- A) The unit tests failed.
- B) The integration tests failed.
- C) The integration tests did not pass.
- D) The unit tests passed but the integration tests failed.

**Correct answer: C**

**Explanation:** Rule (iii) means deployment always follows passing integration tests, so no deployment means integration tests did not pass — but "did not pass" covers both "failed" and "never ran because unit tests failed first," so A, B and D are each only possibly true. This tests reasoning backwards to the conclusion every consistent scenario actually guarantees.

**Question 11 (hard) — Applying several rules at once**

Definition of done: (i) code written and reviewed; (ii) automated tests written and passing; (iii) documentation updated if behaviour changed; (iv) product owner has seen a demo. A story changing how error messages appear to users has: code reviewed, tests passing, and a demo seen yesterday. A pair says the story is done. Ask whether they are right.

- A) Yes — everything on the list has been completed.
- B) No — the documentation must be checked, because user-facing behaviour changed.
- C) No — the demo happened yesterday, and demos must happen on the day of completion.
- D) Yes — documentation only matters for major changes.

**Correct answer: B**

**Explanation:** Condition (iii) is triggered because behaviour visible to users changed, and nothing in the scenario confirms documentation was updated. This tests checking every condition against the specific facts without inventing exceptions that are not there (D) or timing requirements the rule does not state (C).

**Question 12 (hard) — Problem solving with incomplete information**

A script counting records with missing email addresses reports 0, but a mentor is certain some records have missing emails. The file has 5,000 records, the script read all 5,000, and it counts a record as missing when the email field equals the text "missing". Ask for the most likely explanation to investigate first.

- A) The file actually has no missing emails and the mentor is wrong.
- B) Records with missing emails may store something other than the word "missing" — for example an empty field — so the check never matches.
- C) The script is reading the wrong file.
- D) The counting logic can never work in this language.

**Correct answer: B**

**Explanation:** The record count matching rules out C, and D is not a real explanation. This tests recognising a fragile assumption in the script itself (that "missing" is the literal marker for absence) as the first thing to check when a program's answer conflicts with a trusted colleague's expectation, before assuming the colleague is wrong (A).

### Administration tips

- Score for whether the candidate applies a stated rule exactly, including every condition in a multi-part rule, rather than a general impression of compliance.
- Note whether the candidate concludes only what the given evidence guarantees, resisting a plausible but unproven explanation.
- Watch for whether a surprising or unexpected result (a test passing when it should fail, a count that does not match) is treated as a signal to investigate rather than ignored.
- Score for whether the candidate follows a stated priority or process step exactly as given, rather than substituting their own judgement about what matters more.
- Note whether the candidate reads backwards through a rule chain correctly, distinguishing "did not pass" from "failed".

### Common pitfalls to watch for when scoring

- Crediting an answer reasoned from outside knowledge or the candidate's own workplace conventions rather than the rule stated in the question.
- Missing when a candidate accepts a conclusion that goes beyond what the given facts guarantee.
- Rewarding a rule-check that stops once a plausible-looking condition is met, without checking every stated condition.
- Accepting an answer that treats a stated priority or instruction as open to the candidate's own reordering.
- Missing when a candidate assumes a passing test or matching result means everything is fine, without asking what was actually checked.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with numbers in the situations this role actually produces — test results, build times, story counts, and simple service statistics — rather than abstract mathematics.

Typical format: an online, timed test of about 20 to 30 minutes with 15 to 25 questions, each showing a small table or short description of numbers followed by a specific question. A calculator is usually permitted.

This is used for apprentice developers because software development is quietly full of numbers: test suites report pass rates, builds have durations, sprints have story counts, and services have availability percentages and error rates.

### How this assessment maps to the role

- **Percentages and rates** map to **Availability and capacity management**: understanding statements like "the service was available 99.5% of the time this month."
- **Reading tables** maps to **Programming and build (software engineering)** and **Service support**: test reports, build dashboards, and fault logs.
- **Averages and trends** map to building knowledge and working with other developers: sprint reviews and retrospectives.
- **Simple proportions and ratios** map to **User focus**: user research findings arriving as proportions.
- **Checking calculations** maps to the test-driven approach: verifying "does this number make sense?"

### Practice questions

**Question 1 (easy) — Percentage of passing tests**

A test suite has 200 tests; 190 pass, 10 fail. Ask what percentage passed.

- A) 90%
- B) 95%
- C) 92.5%
- D) 98%

**Correct answer: B**

**Explanation:** 190÷200=95%. This tests basic percentage calculation, checkable by a second route (10÷200=5% failing, 100−5=95%).

**Question 2 (easy) — Reading a build dashboard table**

Builds run/failed: Monday 8/1, Tuesday 10/0, Wednesday 12/3, Thursday 10/2. Ask on which day the largest number of builds succeeded.

- A) Monday
- B) Tuesday
- C) Wednesday
- D) Thursday

**Correct answer: B**

**Explanation:** Successes = run − failed: Monday 7, Tuesday 10, Wednesday 9, Thursday 8 — Tuesday highest. This tests computing the actual quantity asked for rather than answering from the wrong column (Wednesday has the most builds run, the trap in C).

**Question 3 (easy) — Simple average of story counts**

Four sprints completed 6, 8, 7, 9 stories. Ask for the mean.

- A) 7
- B) 7.5
- C) 8
- D) 30

**Correct answer: B**

**Explanation:** Sum 30÷4=7.5. This tests basic averaging, distinguishing the total (D, the common slip) from the mean, and checking the answer sits between the smallest and largest values.

**Question 4 (easy) — Proportion in user research**

12 of 40 participants could not complete the sign-in step. Ask what proportion that is.

- A) 25%
- B) 30%
- C) 33%
- D) 40%

**Correct answer: B**

**Explanation:** 12÷40=30%. This tests basic percentage calculation, and in a strong answer, recognising what "30% of participants failed to sign in" means as a user-focus signal.

**Question 5 (moderate) — Availability percentage to hours**

99% availability target over a 30-day month (720 hours). Ask roughly how much downtime that allows.

- A) About 72 minutes
- B) About 7.2 hours
- C) About 1.4 hours
- D) About 14.4 hours

**Correct answer: B**

**Explanation:** 1% of 720 hours = 7.2 hours. This tests converting an availability percentage into a concrete time allowance — 99% sounds like "almost never down" but allows over seven hours a month, a common surprise.

**Question 6 (moderate) — Percentage change in build time**

Average build time rises from 8 to 10 minutes. Ask for the percentage increase.

- A) 2%
- B) 20%
- C) 25%
- D) 80%

**Correct answer: C**

**Explanation:** (10−8)÷8=25%. This tests dividing by the original value — the trap (2÷10=20%, option B) divides by the new value instead.

**Question 7 (moderate) — Error rate per thousand requests**

In one hour, 24,000 requests, 60 errors. Ask for the error rate per 1,000 requests.

- A) 0.25 errors per 1,000
- B) 2.5 errors per 1,000
- C) 25 errors per 1,000
- D) 4 errors per 1,000

**Correct answer: B**

**Explanation:** 24,000÷1,000=24 groups; 60÷24=2.5 per 1,000. This tests converting a raw count into a comparable rate, checkable by multiplying back (2.5×24=60).

**Question 8 (moderate) — Reading a two-way table**

Tickets by type and priority: Bug (high 6, low 14, total 20); Question (high 2, low 18, total 20); totals (high 8, low 32, overall 40). Ask what percentage of high-priority tickets are bugs.

- A) 15%
- B) 30%
- C) 60%
- D) 75%

**Correct answer: D**

**Explanation:** 6÷8=75% (base is the high-priority total, 8). This tests identifying the correct base from the question's wording — "percentage of high-priority tickets" means dividing by the high-priority total, not the grand total (option A) or the bug total (option B).

**Question 9 (moderate) — Time arithmetic for a maintenance window**

Three scripts: 25, 40, 55 minutes, run in sequence, in a window from 22:00 to 24:00. Ask whether they finish inside the window, and with how much time to spare.

- A) Yes, with 20 minutes to spare
- B) Yes, with exactly 0 minutes to spare
- C) No, overrunning by 10 minutes
- D) No, overrunning by 20 minutes

**Correct answer: B**

**Explanation:** 25+40+55=120 minutes, exactly the 120-minute window. This tests careful addition and comparison, and in a strong answer, recognising an exact fit as a warning sign that leaves no room for delay.

**Question 10 (hard) — Combining pass rates from two suites**

Unit suite: 300 tests, 96% pass. Integration suite: 100 tests, 88% pass. Ask for the overall pass rate across all 400 tests.

- A) 92%
- B) 94%
- C) 95%
- D) 96%

**Correct answer: B**

**Explanation:** Passing: 300×0.96=288, 100×0.88=88, total 376÷400=94%. This tests computing from actual counts rather than averaging the two percentages unweighted (92%, the trap in A) — the larger suite should pull the combined rate closer to its own.

**Question 11 (hard) — Trend and projection from a table**

Automated tests: January 120, February 150, March 180, April 210. Ask, if the trend continues, how many tests there will be in July.

- A) 240
- B) 270
- C) 300
- D) 330

**Correct answer: C**

**Explanation:** Growing 30/month; April to July is 3 more months: 210+90=300. This tests correctly counting the number of steps from the known point to the target month, a common source of off-by-one slips (D adds one step too many).

**Question 12 (hard) — Ratio and sharing work fairly**

36 bugs shared between three pairs in ratio 2:3:4 (X:Y:Z). Ask how many bugs Pair Y takes.

- A) 8
- B) 12
- C) 16
- D) 18

**Correct answer: B**

**Explanation:** 9 parts total, 4 per part, Y=3×4=12. This tests the standard ratio method, checkable by confirming all three shares (8, 12, 16) sum to 36.

### Administration tips

- Score for whether the candidate identifies the correct base or denominator from the question's wording before dividing.
- Note whether the candidate computes from actual counts when combining rates or averages from groups of different sizes, rather than averaging percentages directly.
- Watch for whether a percentage change is measured against the original value, not the new one.
- Score for whether the candidate reads the specific column or quantity the question asks about, rather than the most prominent figure in a table.
- Note whether the candidate checks or verifies an answer by a second method where one is available.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of rates or percentages from groups of different sizes.
- Missing a percentage change computed against the new value instead of the original.
- Rewarding an answer read from the wrong column, row, or base in a table.
- Accepting a miscounted number of time or growth steps between two points.
- Missing a factor-of-ten or unit slip left unchecked by a sense-check.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and reasons about written material of the kind this role actually produces — coding standards, user stories, team emails, short policy extracts, runbook instructions, and documentation.

Typical format: an online, timed test of about 15 to 25 minutes, with short passages followed by statements to classify True (the passage says or guarantees it), False (the passage contradicts it), or Cannot say (insufficient information either way), or other formats testing summary, inference, or clear writing.

This is used for apprentice developers because almost everything a candidate learns in the role arrives as text — training materials, standards, user stories, review comments, and runbooks — and misreading a single word ("must" versus "should", "before" versus "after") can send a task in the wrong direction.

### How this assessment maps to the role

- **Reading comprehension of standards** maps to **Modern development standards**: explaining a standard well starts with reading it precisely.
- **Understanding user stories** maps to **User focus**: what a story does and does not commit the team to.
- **Following written instructions** maps to **Service support** and **Programming and build**: following a runbook exactly, including conditions and exceptions.
- **Distinguishing stated facts from inference** maps to **Information security**: reporting what guidance says, not a half-remembered version.
- **Clear-writing judgement** maps to documenting simple programs: the same skill as writing a clear commit message or comment.

### Practice questions

**Question 1 (easy) — True/False/Cannot say on a coding standard**

Passage: "All new code must be accompanied by automated tests. Code reviews are carried out by at least one other developer before merging. Documentation should be updated when behaviour visible to users changes."

Statement: "New code must be reviewed by at least one other developer before it is merged."

- A) True
- B) False
- C) Cannot say
- D) True, but only for user-visible changes

**Correct answer: A**

**Explanation:** The passage states the same thing in different words. This tests matching a statement to the exact governing sentence and comparing meaning rather than surface wording — option D wrongly imports a limitation from the unrelated documentation sentence.

**Question 2 (easy) — Understanding a user story**

Passage: "As a benefit claimant, I want to save my application part-way through, so that I can finish it later without starting again."

Statement: "This user story explains why the feature is wanted, from the user's point of view."

- A) True
- B) False
- C) Cannot say
- D) True, but user stories never mention users

**Correct answer: A**

**Explanation:** The "so that" clause states the reason, in the user's voice. This tests recognising the three-part user story structure (who, what, why) — option D contradicts itself given the story clearly names a user.

**Question 3 (easy) — Cannot-say discipline with an email**

Passage (email): "Hi all — the show-and-tell moves from Thursday to Friday at 14:00 this week only. Same video link as usual. Please update your calendars."

Statement: "The show-and-tell will be held on Friday at 14:00 every week from now on."

- A) True
- B) False
- C) Cannot say
- D) True, because the time is stated clearly

**Correct answer: B**

**Explanation:** "This week only" directly contradicts a claim of permanence. This tests recognising when a passage actively contradicts a statement (False) rather than merely failing to address it (Cannot say) — the limiting phrase makes the difference.

**Question 4 (easy) — What is being asked of you**

Passage (message): "When you get a chance today, could you run the linter on the reporting module and note any warnings in the ticket? Don't fix anything yet — we'll go through the warnings together tomorrow."

Ask which action matches the request.

- A) Fix all the linter warnings in the reporting module today.
- B) Run the linter, record the warnings in the ticket, and wait.
- C) Go through the warnings with the senior developer today.
- D) Run the linter on every module and fix the errors.

**Correct answer: B**

**Explanation:** B matches scope (one module), action (run and record), and boundary (don't fix yet). This tests noticing both what is asked and what is explicitly excluded — doing more than asked (A, D) can cause as much trouble as doing less.

**Question 5 (moderate) — Inference from a security policy extract**

Passage: "Passwords, API keys, and other credentials must never be committed to source code repositories. Where a service requires credentials, these must be stored in the approved secrets management tool. Any accidental commit of a credential must be reported to the security team immediately, and the credential must be rotated."

Statement: "If an API key is accidentally committed, reporting it to the security team is enough to resolve the incident."

- A) True
- B) False
- C) Cannot say
- D) True, provided the commit is deleted

**Correct answer: B**

**Explanation:** The policy requires both reporting and rotation, joined by "and". This tests recognising that a conjunctive requirement makes both actions mandatory — reporting alone (or deletion, invented in D) is not sufficient.

**Question 6 (moderate) — Best summary of a passage**

Passage: "Pair programming means two developers working together at one workstation. One writes code while the other reviews each line as it is written, and the two swap roles frequently. Studies in government teams suggest pairing spreads knowledge across the team, reduces defects, and helps new joiners learn faster, though it can feel slower on simple tasks."

Ask which option best summarises the passage.

- A) Pair programming is slower than working alone and should be avoided on simple tasks.
- B) Pair programming is two developers sharing one workstation, swapping roles often; it spreads knowledge and reduces defects, though it can feel slower on simple tasks.
- C) New joiners must always pair with a senior developer at one workstation.
- D) Studies show pairing is the fastest way to write code in government teams.

**Correct answer: B**

**Explanation:** B covers the definition, benefits, and caveat in proportion. This tests summarising without exaggerating — A promotes the caveat to the main message and adds unstated advice, and D overstates a claim the passage never makes.

**Question 7 (moderate) — True/False/Cannot say on a standards passage**

Passage: "The service standard requires teams to make new source code open by default. Code should be published under an appropriate open licence unless there is a good reason not to, such as unreleased security fixes or keys and credentials. Publishing code allows other teams, in government and beyond, to reuse it."

Statement: "The majority of government teams currently publish their code openly."

- A) True
- B) False
- C) Cannot say
- D) True, because the standard requires it

**Correct answer: C**

**Explanation:** The passage describes what the standard requires, not how widely it is actually followed. This tests never converting a stated requirement into a fact about behaviour — a rule existing does not establish how many people comply with it.

**Question 8 (moderate) — Following a runbook precisely**

Runbook: "If the queue length exceeds 500 messages for more than 10 minutes, restart the worker service. If a restart does not clear the queue within 15 minutes, escalate to the on-call engineer. Do not restart the worker service more than once per hour." Situation: queue at 620 messages for 12 minutes; the worker service was last restarted 20 minutes ago. Ask what the runbook directs.

- A) Restart the worker service now.
- B) Escalate to the on-call engineer without restarting.
- C) Wait 40 minutes, then restart the worker service.
- D) Do nothing, because the queue may clear itself.

**Correct answer: C**

**Explanation:** The restart trigger is met, but the once-per-hour limit forbids restarting for another 40 minutes; escalation as written follows a restart that has already failed to clear the queue, which has not yet been attempted. This tests applying every stated condition, including the "do not" ones, rather than acting on the first trigger met (A).

**Question 9 (moderate) — Clear-writing judgement**

Asked to write a comment explaining a function that removes duplicate customer records. Ask which comment is clearest and most useful.

- A) "This function, which was written during the March sprint following the meeting about data quality, processes records."
- B) "Removes duplicate customer records, keeping the most recently updated copy of each."
- C) "Does deduplication utilising record-comparison methodology to actualise data-quality outcomes."
- D) "Removes duplicates. Do not change this function."

**Correct answer: B**

**Explanation:** B states what the code does and the crucial tie-breaking detail (which duplicate survives) in plain language. This tests judging text against what a reader actually needs, rather than history (A), jargon (C), or an unexplained instruction (D).

**Question 10 (hard) — Two statements about one passage**

Passage: "Availability management aims to make sure services meet agreed availability targets. Capacity management aims to make sure services have enough resources — such as processing power and storage — to meet current and future demand. The two processes are related: a service without enough capacity will often fail its availability target, but availability can also be lost for reasons unrelated to capacity, such as software defects or network failures."

Statement 1: "Capacity problems are the only cause of missed availability targets."
Statement 2: "A service can miss its availability target even when it has enough capacity."

- A) Statement 1: True; Statement 2: False
- B) Statement 1: False; Statement 2: True
- C) Both statements: Cannot say
- D) Statement 1: False; Statement 2: Cannot say

**Correct answer: B**

**Explanation:** The passage directly contradicts Statement 1 ("availability can also be lost for reasons unrelated to capacity") and directly supports Statement 2 with the same sentence. This tests recognising when two statements are near-opposites answered by the same evidence.

**Question 11 (hard) — Inference about what a passage implies**

Passage (retrospective notes): "The team completed 7 of the 9 stories planned. The two unfinished stories both depended on the payments API test environment, which was unavailable for three days. Team members said pairing on the search feature worked well, and suggested pairing on all complex stories next sprint. No one raised concerns about the build pipeline."

Statement: "The team would have completed all 9 stories if the payments API test environment had been available."

- A) True
- B) False
- C) Cannot say
- D) True, because the notes identify the environment as the cause

**Correct answer: C**

**Explanation:** A stated dependency makes the environment a plausible cause, but does not guarantee the stories would certainly have finished — other problems could have arisen. This tests distinguishing a stated dependency from a guaranteed outcome, resisting the overreach in D.

**Question 12 (hard) — Precision with "must", "should", and "may"**

Passage: "Commit messages must describe what changed and why. Branches should be short-lived, ideally merged within two days. Developers may use the experimental linting rules, which are optional this quarter. Secrets must never appear in commit messages or code."

Statement: "A developer who keeps a branch open for a week has broken a mandatory rule."

- A) True
- B) False
- C) Cannot say
- D) True, because two days is the stated limit

**Correct answer: B**

**Explanation:** The branch rule uses "should... ideally," a recommendation, not a "must." This tests weighing modal verbs at their exact strength — a departure from a recommendation is not the same as breaking a mandate, and only the commit-message and secrets rules use "must" in this passage.

### Administration tips

- Score for whether the candidate matches a statement to its exact governing sentence and compares meaning rather than surface wording.
- Note whether the candidate distinguishes a passage that contradicts a statement (False) from one that is merely silent on it (Cannot say).
- Watch for whether modal verbs (must, should, may) are weighed at their stated strength, not treated as interchangeable.
- Score for whether every stated condition in a runbook or rule is applied, including prohibitions ("do not"), not just the first trigger noticed.
- Note whether the candidate resists converting a stated requirement or dependency into a claim about actual behaviour or a guaranteed outcome.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True or False on the strength of outside knowledge rather than the passage.
- Missing when a candidate treats a plausible cause as a guaranteed outcome.
- Rewarding a reading that ignores a limiting phrase ("this week only", "unless") attached to a rule or claim.
- Accepting "should" and "must" as interchangeable in a candidate's reasoning.
- Missing when a candidate answers a runbook question by acting on the first met condition without checking a stated prohibition.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge possible responses. There is often no single calculated right answer; each option reflects better or worse professional judgement, scored against the judgement of experienced practitioners.

Typical format: 10 to 20 scenarios, usually untimed or generously timed (20 to 40 minutes), because the point is judgement rather than speed.

For an apprentice developer, this arguably matters more than any other assessment type: technical skill is expected to be growing, not complete, and what the role most needs right now is good judgement about how to learn — when to ask for help, how to respond to feedback, what to do after a mistake, how to behave in pairing sessions, and when to speak up.

### How this assessment maps to the role

- **Asking and escalating well** maps to shadowing and working under direction: knowing when to try a little longer and when to ask.
- **Collaboration behaviours** map to **Prototyping** and working with other developers to write code and tests.
- **Ownership and honesty** map to **Programming and build** and the test-driven approach: protecting quality even when it is embarrassing or slow.
- **Security instincts** map to **Information security**: treating credentials and suspicious requests with appropriate caution and reporting promptly.
- **User focus** maps to **User focus**: keeping the end user's needs in view even in small technical decisions.
- **Service care** maps to **Service support**: calm, procedure-following behaviour during live faults.

### Practice questions

**Question 1 (easy) — Stuck on a task**

Stuck for 45 minutes on a small coding task; the mentor is at her desk with headphones on. Ask for the most effective response.

- A) Keep trying on your own all afternoon — asking would show you are not good enough.
- B) Spend a few more minutes noting what you have tried, then ask your mentor for help, showing her your notes.
- C) Quietly delete the failing test so the problem goes away.
- D) Post the error message in the team channel with the comment "this codebase is broken".

**Correct answer: B**

**Explanation:** A short bounded attempt followed by a prepared question is efficient and respectful. This tests recognising that asking early with evidence of effort is expected apprentice behaviour — C hides a real signal and breaks the test-driven approach, and D escalates publicly with blame before understanding the problem.

**Question 2 (easy) — A mistake reaches the shared branch**

Pushed code alone after a pairing session, accidentally breaking the team's build; the red build is noticed ten minutes later, nobody has said anything yet. Ask for the most effective response.

- A) Say nothing and hope someone else fixes it.
- B) Immediately tell your pair or mentor what happened, and offer to help fix it or revert your change.
- C) Wait until tomorrow's stand-up to mention it.
- D) Push more changes quickly, trying different fixes until something works.

**Correct answer: B**

**Explanation:** A broken build blocks the whole team, and the person who caused it can explain it fastest. This tests immediate, honest ownership — A and C waste team time and delay the fix, and D risks making things worse by thrashing on a shared branch under pressure.

**Question 3 (easy) — Uncomfortable pairing session**

Pairing with a developer who types fast, rarely explains, and has not offered the keyboard all morning. Ask for the most effective response.

- A) Say nothing — he is senior, so this must be how pairing works.
- B) Stop paying attention and quietly do your training modules instead.
- C) Politely say you would learn more if you could drive for a while, and ask him to talk through his thinking as you go.
- D) Complain to your mentor afterwards that the developer is bad at pairing.

**Correct answer: C**

**Explanation:** Addressing the problem directly, respectfully, and in the moment gives the colleague a chance to adjust. This tests recognising that mistaking seniority for correctness (A) or disengaging (B) both waste the session, while raising it directly first is fairer than complaining afterwards (D).

**Question 4 (easy) — A user story you do not understand**

Picking up a story alone: "As a caseworker, I want the export button to include archived cases, so that my monthly report is complete." Unsure whether "archived cases" includes deleted cases. Ask for the most effective response.

- A) Guess — include deleted cases, since more data seems safer.
- B) Ask the product owner or a teammate to clarify what the caseworker needs before you build.
- C) Build both versions so someone can choose later.
- D) Skip the story and pick a different one without telling anyone.

**Correct answer: B**

**Explanation:** A quick clarifying conversation resolves the ambiguity cheaply before building the wrong thing. This tests recognising that guessing on a detail with real accuracy or data-protection consequences (A) is risky, and that avoiding the problem (C, D) either doubles work or hides it.

**Question 5 (moderate) — Credentials in the open**

While reading code, a file appears to contain a real database password; uncertain whether it is a test password. Ask for the most effective response.

- A) Ignore it — you are an apprentice, and it is probably fine.
- B) Ask about it in a public team channel, quoting the password so people can check it.
- C) Delete the file yourself immediately.
- D) Tell your mentor or a senior developer privately, right away, without copying the password anywhere.

**Correct answer: D**

**Explanation:** Prompt, private reporting lets the right people assess and, if needed, rotate the credential without spreading the exposure further. This tests knowing that noticing and reporting is the expected apprentice contribution — B widens the exposure, A gambles on an uncertain judgement call not the apprentice's to make, and C destroys evidence and does not remove the password from history.

**Question 6 (moderate) — Pressure to skip the tests**

Late afternoon before a demo, a developer says: "Just push the change without tests — we'll write them after the demo, and no one will know." Ask for the most effective response.

- A) Push without tests — a more experienced developer told you to.
- B) Refuse loudly and say you will report him for breaking the rules.
- C) Say you are not comfortable skipping the team's approach, and suggest either writing a quick test together or asking your mentor how to handle the demo deadline.
- D) Secretly write the tests at home tonight and push everything at midnight.

**Correct answer: C**

**Explanation:** Stating the position honestly, offering a constructive alternative, and using the supervision structure appropriately holds the standard without damaging the relationship. This tests resisting the idea that a colleague's instruction transfers responsibility (A), while avoiding an disproportionate response (B) or hiding the problem (D).

**Question 7 (moderate) — Fault investigation beyond your brief**

Directed to gather error logs and attach them to an incident ticket; while doing so, a configuration value looks like the likely cause. Fixing it means changing the live service's configuration. Ask for the most effective response.

- A) Change the configuration value yourself — it will save everyone time.
- B) Finish gathering the logs, and tell the incident lead what you found and why you think it matters.
- C) Say nothing about your theory — cause analysis is not your job.
- D) Stop gathering logs and investigate your theory fully first.

**Correct answer: B**

**Explanation:** Completing the assigned task while surfacing the observation to the coordinating lead uses both halves of good apprentice judgement. This tests recognising that changing live configuration without authorisation (A) risks worsening an incident, while withholding a useful observation (C) or abandoning the assigned task (D) both fail the team.

**Question 8 (moderate) — Feedback that stings**

A senior developer leaves twelve blunt comments on a small change, including "this naming is confusing" and "this test doesn't actually test anything." Ask for the most effective response.

- A) Work through each comment, ask about the ones you do not understand, and make the changes — treating the review as free teaching.
- B) Make the changes without reading the comments properly, to get it over with.
- C) Reply defensively to each comment explaining why your original code was fine.
- D) Ask your mentor to tell the senior developer to review your code more gently in future.

**Correct answer: A**

**Explanation:** Extracting the full value of detailed review comments, separate from their tone, is how the same comments avoid reappearing next time. This tests treating review as learning (B "complies" without absorbing anything, C closes the learning channel), while D prematurely outsources a first reaction to a single review.

**Question 9 (moderate) — A quieter teammate in the mob**

In a five-person group programming session, another apprentice has not spoken for an hour and was interrupted the one time she tried. Ask for the most effective response.

- A) Stay quiet — it is not your place to manage the session.
- B) At a natural pause, say "I'd be interested in what Priya was starting to say earlier" to make space for her.
- C) Message her privately afterwards saying the team is like this sometimes.
- D) Tell the session leader afterwards that he ran an exclusionary session.

**Correct answer: B**

**Explanation:** A small, natural intervention opens the door without putting anyone on the spot. This tests recognising inclusion as something anyone in the session can practise, not a management task (A) or a private sympathy that changes nothing (C), nor an accusation before a gentler first step is tried (D).

**Question 10 (hard) — Most and least effective: the tempting shortcut**

Finishing a first solo feature; similar existing code could be copied in ten minutes, though two of its lines are not fully understood. Ask for the most and least effective response among: (1) copy the existing code, including the unclear lines, and submit for review; (2) ask the mentor for half an hour to understand the existing code, then reuse it knowingly; (3) write an original version from scratch without further reference; (4) copy the existing code but delete the two unclear lines, since they are probably unnecessary.

- A) Most effective: 1; Least effective: 3
- B) Most effective: 2; Least effective: 4
- C) Most effective: 3; Least effective: 1
- D) Most effective: 2; Least effective: 1

**Correct answer: B**

**Explanation:** Reuse with understanding gets the reuse benefit and the learning at a fair cost of mentor time. This tests recognising that deleting unfamiliar lines on the assumption they are unnecessary (4) risks silently removing error handling or a security check — worse than submitting unclear-but-intact code (1) for review to catch.

**Question 11 (hard) — Conflicting instructions**

Set a task by a mentor (finish validation with tests by Friday); on Wednesday, a delivery manager asks for two days of unrelated manual re-testing "because we're short of people," while the mentor is on leave until Friday. Ask for the most effective response.

- A) Do what the delivery manager asks — they are more senior than you.
- B) Refuse — your mentor's instructions always win, and the delivery manager should know that.
- C) Explain the existing Friday commitment, then contact the mentor's nominated cover (or ask the delivery manager to) so the priority call is made by someone with the authority to make it.
- D) Try to do both tasks by working late both evenings without telling anyone.

**Correct answer: C**

**Explanation:** Making the conflict visible and routing it to someone with the authority to decide is the right apprentice response to two legitimate but conflicting requests. This tests not silently abandoning a commitment (A) or inventing a fixed rule (B), and not hiding the conflict behind unsustainable hours (D).

**Question 12 (hard) — Ranking responses: accessibility concern near a deadline**

A form component due tomorrow shows error messages only as a colour change from grey to red; unsure of the exact accessibility rule, and the pair says "it looks fine to me, let's ship it." Ask for the ranking, most to least effective, among: (1) quickly check the accessibility guidance together now, and raise it with the team today if confirmed; (2) say nothing, given the deadline; (3) log a ticket suggesting the styling be reviewed "at some point" after shipping; (4) refuse to continue pairing until the component is rebuilt.

- A) 1, 3, 2, 4
- B) 1, 2, 3, 4
- C) 3, 1, 4, 2
- D) 1, 4, 3, 2

**Correct answer: A**

**Explanation:** Verifying quickly and raising it while there is still time to act is clearly strongest; logging a vague "at some point" ticket is a weak but real second; silence ships a possible barrier; refusing to work is disproportionate before the concern is even verified. This tests ranking responses to an uncertain but genuine user-focus concern by how quickly and constructively they act on it.

### Administration tips

- Score for whether the candidate's response involves appropriate support (asking with evidence, informing a mentor, escalating through the right channel) rather than acting entirely alone.
- Note whether a response is timely — problems surfaced early score consistently higher than the same response delayed.
- Watch for whether the candidate chooses concealment, silent workarounds, or unilateral action on something outside their remit, all of which cluster among weaker responses.
- Score for whether the candidate distinguishes seniority from correctness — deference to a colleague's instruction is never by itself sufficient justification to skip a standard or a check.
- Note whether details placed deliberately in a scenario (uncertainty, a mentor's absence, a deadline) are reflected in the response chosen.

### Common pitfalls to watch for when scoring

- Crediting deference to a senior colleague's instruction as sufficient justification on its own.
- Missing when a candidate chooses a "heroic" solo response (secret extra hours, an unauthorised live change) over a collaborative one.
- Rewarding honesty delivered aggressively (a loud refusal, a blunt accusation) over an equally honest but constructive alternative.
- Accepting a delayed disclosure (waiting for the next stand-up, logging something "for later") as equivalent to a timely one.
- Missing the least-effective option in a ranking or most/least item — half the marks in this format are for correctly identifying the worst response.

## Conclusion

This guide has worked through pattern and rule checking in code naming, test output, and configuration, applying rules exactly as written and reasoning backwards through a pipeline or dependency chain, and problem solving from evidence rather than assumption; percentages, averages, rates and ratios across test results, build times, and service statistics, each checkable by a second method; the discipline of judging True, False and Cannot say strictly from a passage, and weighing "must", "should" and "may" at their exact strength; and the situational judgement calls that define the apprentice stage — asking for help with evidence of effort, owning a mistake honestly and promptly, treating a security concern with appropriate caution, and holding a standard under pressure while staying collaborative.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward method and reasoning quality as much as the final choice, and this level in particular benefits from seeing exactly where a rule-check or a reading habit broke down. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
