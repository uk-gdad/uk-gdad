# Associate Quality Assurance Test Analyst - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor — a line manager, panel member, or reviewer — administering a workplace job-specific psychometric assessment to a candidate for associate quality assurance test analyst within the UK Government Digital and Data profession. The candidate is at the start of a career in quality assurance testing, and this assessment is here to help you see, in a structured and comparable way, the thinking skills and workplace judgement that predict success at this level — whether you are using it for an internal development review, a recruitment or promotion process, or a learning conversation.

First, a reminder of what a psychometric assessment actually is, because it is easy to over-dramatise. A psychometric assessment is simply a structured, standardised set of exercises that measures the thinking skills and workplace judgement that predict success in a role. There are no trick questions designed to catch a candidate out. For an associate quality assurance test analyst, the items are job-specific: they use the kinds of things the role genuinely works with — user stories, test scripts, defect reports, test results tables, acceptance criteria, and messages from a team — and the kinds of decisions the role genuinely faces, such as spotting an error in a test report, deciding which defect to raise first, or working out what a user story is really asking for.

Why do these assessments matter for this role in particular? As an associate, a candidate works with other test professionals to learn quality assurance testing and analysis techniques, follows and applies test approaches under supervision, analyses artefacts such as user stories and prototypes with support, and executes basic tests, records outcomes, and helps resolve defects. Every one of those duties depends on careful, accurate thinking: noticing patterns, checking details, reading instructions precisely, working with simple numbers such as pass rates and defect counts, and making sensible choices about when to ask for help. This assessment measures exactly those abilities.

This document is organised into four main assessment sections:

1. A workplace job-specific cognitive assessment — pattern spotting, logical thinking, error checking, and prioritisation using real testing artefacts.
2. A numeric reasoning assessment — percentages, averages, and simple tables built from the test data the role handles.
3. A verbal reasoning assessment — reading and understanding testing documents, standards, and emails accurately.
4. A situational judgement assessment — realistic workplace situations for someone at this level, with guidance on the most and least effective responses.

Each section follows the same pattern: an explanation of what the assessment measures, a mapping to the specific skills in the role, a set of items that start easy and get gradually harder, full worked answers and explanations — your answer key — guidance on administering the section fairly, and common pitfalls for you to watch for when scoring.

Administer this fairly and consistently: give every candidate for this role level the same items under the same time limit, and hold the worked answers and explanations back until you are ready to score and debrief — they should never reach the candidate beforehand. Because this is an associate-level assessment, calibrate your expectations accordingly: candidates are not being compared with senior test analysts, and the items below start genuinely easy and build up gently, as a real assessment for this level should. Treat the result as one input among several — alongside interview, portfolio, and reference evidence — never as a standalone verdict on a candidate.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes a role demands, using practical workplace scenarios rather than abstract puzzles. Instead of shapes and number sequences with no context, it presents the candidate with the everyday materials of the job — test scripts, user stories, defect logs, naming conventions, and simple test plans — and asks them to reason quickly and accurately about them.

Administer this section under consistent conditions: an online, timed test lasting 15 to 30 minutes, with somewhere between 15 and 30 questions, is typical. The items usually cover five thinking skills: pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Score objectively — a candidate's answers compared against a norm group of comparable candidates — and note that many modern platforms adapt the difficulty of each question based on how the candidate answered the previous one, which can make raw scores harder to compare across candidates unless the platform normalises for it. Report a breakdown of speed and accuracy where you can, rather than a single score, so that working carefully is not penalised relative to working quickly. If your platform offers a few ungraded practice questions before the real test begins, let every candidate use them, so nobody is disadvantaged by unfamiliarity with the screen layout.

For an associate quality assurance test analyst, cognitive assessment is especially relevant because careful, structured attention is at the heart of the job. Executing a simple test with support means following a sequence precisely and noticing when reality differs from expectation. Analysing a user story means checking that the acceptance criteria are complete and consistent. Recording a defect means capturing accurate detail so that others can reproduce the problem. A well-designed cognitive assessment simulates precisely those demands in miniature, and the habits it surfaces — look closely, check twice, deduce only what the evidence supports — are the habits that make a good tester.

One point to hold in mind when scoring: at the associate level, items are calibrated to this level. A candidate is not being compared with senior test analysts, and the questions below start genuinely easy and build up gently, just as a real assessment for this level would.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Test analysis** skill: analysing information such as user stories, prototypes, processes, and designs, with support, means spotting recurring structures — a naming convention in test cases, a repeated step in a process, a field that appears in one screen but not another. It also supports **Designing and executing tests**, because simple tests are built from patterns: same setup, different data.
- **Logical deduction** maps to **Test analysis** and **Designing and executing tests**: following guidance to design simple tests that align to user needs and requirements means reasoning from a rule ("users under 18 cannot register") to its test consequences ("a 17-year-old attempting to register should be refused").
- **Error checking** maps to **Managing, reporting and resolving defects**: following a defect management process means recording defects with appropriate, accurate information, retesting carefully, and spotting when a report contradicts itself. It also supports **Test engineering**, because supporting the maintenance of automated tests requires noticing when a script and its data no longer match.
- **Prioritisation** maps to **Test and quality planning** and **Managing, reporting and resolving defects**: following a test plan with support still involves choosing sensibly what to do first, and knowing when a defect needs to be escalated rather than queued.
- **Applied problem solving** maps to **Test analysis** and **Communicating between the technical and non-technical**: when a test result is surprising, the candidate must work out what might explain it and describe the problem in a way both developers and non-technical colleagues can understand.

### Practice questions

**Question 1 (easy) — Pattern recognition in test case names**

A team names test cases using this pattern: the system code, a hyphen, the feature name, a hyphen, and a three-digit number. For example: `PAY-Login-001`. While tidying the test folder with their mentor, a candidate sees these five test cases:

1. `PAY-Login-002`
2. `PAY-Register-014`
3. `PAY-Login-21`
4. `PAY-Password-105`
5. `PAY-Register-009`

Which test case breaks the naming pattern?

- A) Test case 2
- B) Test case 3
- C) Test case 4
- D) Test case 5

**Correct answer: B**

**Explanation:** Work through the pattern piece by piece: system code (`PAY`), hyphen, feature name, hyphen, then a three-digit number. Test case 3 ends in `21`, which has only two digits — it should read `PAY-Login-021`. Every other entry follows the rule, including test case 4, where `105` is a perfectly valid three-digit number even though it is larger than the others. This is exactly the kind of consistency check the role requires when supporting the maintenance of tests: naming conventions look small, but a broken convention can make a test impossible to find later, or cause an automated tool to skip it. This item tests whether a candidate reads the rule slowly first, then checks each option against every part of the rule — many wrong answers come from checking only part of the pattern.

**Question 2 (easy) — Logical deduction from acceptance criteria**

A user story being analysed with support says: "If a citizen enters an invalid postcode, the system must show the message 'Please check your postcode' and must not save the form." During testing, a candidate enters an invalid postcode. The system shows the correct message, but the form is saved anyway. Which statement must be true?

- A) The system has fully met the acceptance criteria.
- B) The system has failed the acceptance criteria.
- C) The message text is wrong.
- D) The postcode entered was actually valid.

**Correct answer: B**

**Explanation:** The acceptance criteria contain two requirements joined by "and": show the message, and do not save the form. The system met the first requirement but broke the second — the form was saved. When a rule has two parts joined by "and", breaking either part breaks the rule, so B must be true. Option A is wrong because one of the two requirements failed. Option C is wrong because the scenario says the correct message appeared. Option D invents a possibility the scenario rules out. This mirrors the day-to-day work of testing outcomes and recording defects: a partial pass is still a fail, and a defect report should say precisely which part of the criteria was broken. This item rewards a candidate who deduces only what the given information guarantees.

**Question 3 (easy) — Error checking a defect report**

Before showing their mentor, a candidate reviews a defect report they have drafted:

> **Title:** Save button not working on registration page
> **Steps to reproduce:** 1. Open the registration page. 2. Fill in all fields with valid data. 3. Click Save.
> **Expected result:** An error message appears.
> **Actual result:** The record is saved and a confirmation message appears.

Something is wrong with this report. What is it?

- A) The title is too short.
- B) The steps to reproduce are in the wrong order.
- C) The expected and actual results appear to be swapped or wrong — with valid data, saving successfully is the correct behaviour.
- D) The report does not name the browser used.

**Correct answer: C**

**Explanation:** Read the report as a whole story. The steps say the tester entered valid data and clicked Save. With valid data, the expected result should be a successful save — yet the report claims the expected result is an error message, and describes the successful save as the defect. Either the expected and actual results have been swapped, or the steps should have said invalid data. As written, the report describes correct behaviour as a bug, which would confuse the developer who picks it up. Options A and D mention things that could be improved but are not the core error, and option B is untrue — the steps are in a sensible order. This item tests the **Managing, reporting and resolving defects** skill: a good habit is rereading every report end-to-end and asking "does this story make sense?" before submitting it. A strong candidate's answer will show that same habit, checking that all the parts of a document agree with each other.

**Question 4 (easy) — Following a test sequence**

A test script for a password change feature has five steps that must run in order: (1) log in, (2) open account settings, (3) enter the current password, (4) enter the new password twice, (5) click Confirm. A mentor asks: "If the system logs the user out unexpectedly after step 2, which steps can you still complete as written?"

- A) Steps 3, 4 and 5
- B) Steps 4 and 5 only
- C) None of steps 3, 4 or 5
- D) Step 5 only

**Correct answer: C**

**Explanation:** The script assumes the user stays logged in throughout. If the system logs the user out after step 2, then account settings are no longer accessible, so step 3 cannot be performed as written — and steps 4 and 5 depend on step 3. Because each step depends on the ones before it, losing the session breaks everything downstream: none of steps 3, 4 or 5 can be completed as written. In real testing this is the moment a tester records what happened, notes where the script stopped, and raises the unexpected logout as a defect or a query — exactly what executing simple tests with support involves. This item tests whether a candidate traces dependencies one step at a time rather than guessing.

**Question 5 (moderate) — Pattern recognition across test results**

A candidate has executed the same five smoke tests every morning this week with support from the team. The results are:

| Test | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| Login | Pass | Pass | Pass | Pass | Pass |
| Search | Pass | Pass | Fail | Pass | Fail |
| Save form | Pass | Pass | Fail | Pass | Fail |
| Print | Pass | Pass | Pass | Pass | Pass |
| Log out | Pass | Pass | Pass | Pass | Pass |

A mentor asks what the candidate notices. What is the most useful observation?

- A) The Login test is the most reliable, so it can be removed.
- B) Search and Save form fail together on the same days, which suggests a shared cause worth investigating.
- C) Friday is an unlucky day for testing.
- D) Three tests always pass, so the system is mostly fine.

**Correct answer: B**

**Explanation:** Look for what changes together. Search and Save form both failed on Wednesday and Friday, and both passed on all the other days — a matching pattern. When two tests fail on the same days, a shared cause is a strong possibility: perhaps both depend on the same database service or the same test environment, and that shared component was unavailable on those days. Spotting this pattern is far more useful than counting passes. Option A draws the wrong conclusion — a consistently passing test is not useless; it is doing its job. Option C treats a coincidence of days as a cause. Option D ignores the interesting signal entirely. This item tests the **Test analysis** skill in action: analysing information to explain what might be a risk in achieving quality goals. A strong candidate's answer connects two pieces of evidence rather than summarising a single row.

**Question 6 (moderate) — Logical deduction about test coverage**

A team's rule says: "Every user story must have at least one positive test (valid input, expected success) and at least one negative test (invalid input, expected rejection) before it can be marked as tested." Story S1 has two positive tests. Story S2 has one positive test and one negative test. Story S3 has three negative tests. Which stories can be marked as tested under the rule?

- A) S1, S2, and S3
- B) S2 only
- C) S1 and S2
- D) S2 and S3

**Correct answer: B**

**Explanation:** Apply the rule to each story separately. The rule demands at least one of each kind of test. S1 has two positive tests but no negative test, so it fails the rule. S2 has one of each, so it passes. S3 has three negative tests but no positive test, so it also fails — quantity does not substitute for coverage of both kinds. Only S2 qualifies. A tempting error is to think "S1 and S3 have two or more tests, so they are well tested", but the rule is about types of test, not the number. This mirrors why the rule exists in real projects: positive tests show the feature works for genuine users; negative tests show the system protects itself against mistakes and misuse. Checking both is part of following guidance to design simple tests that align to user needs and requirements. This item tests whether a candidate applies every condition of a rule to every option — partial matching is the classic trap.

**Question 7 (moderate) — Prioritising the morning**

A candidate arrives at 9:00 and finds four things waiting. The team's stand-up is at 10:00. Which order of attention is most sensible?

1. A developer has messaged: "Can you quickly retest defect D-101? The fix is deployed and we want to release at 11:00."
2. A mentor has asked the candidate to finish writing test cases for a new story by the end of tomorrow.
3. An automated overnight test run shows 40 failures, which usually means the test environment was down rather than 40 real bugs.
4. A promise was made to a colleague to tidy the shared test data spreadsheet this week.

- A) 2, 1, 3, 4 — finish one's own work first
- B) 1, 3, 2, 4 — retest for the release first, then check the environment, then the test cases, then the tidy-up
- C) 3, 4, 1, 2 — investigate the largest number of failures first
- D) 4, 3, 2, 1 — keep promises first

**Correct answer: B**

**Explanation:** Weigh urgency and impact together. Item 1 is both urgent (release at 11:00) and high impact (the release depends on the retest) — and retesting fixed defects is squarely within the role, so it comes first. Item 3 comes next: 40 failures sounds alarming, but experience suggests an environment problem; a quick check confirms whether anything real is hiding in there, and it can be raised at the 10:00 stand-up — exactly the right forum. Item 2 has a deadline of tomorrow evening, so it fits later today. Item 4 is a genuine commitment but has the loosest deadline ("this week"). Option C over-weights the biggest number: 40 suspected environment failures are less urgent than one release-blocking retest. Options A and D use single rules ("my work first", "promises first") instead of weighing impact and urgency. This item tests whether a candidate uses the team appropriately rather than juggling alone — the best plan also uses the stand-up to share item 3 with the team, which is good escalation practice at this level.

**Question 8 (moderate) — Error checking test data**

A test script needs three test users with specific set-ups:

- User A: registered, email verified, no saved applications
- User B: registered, email not verified
- User C: registered, email verified, one saved application

A candidate checks the test environment and finds: User A is registered and verified with one saved application; User B is registered and not verified; User C is registered and verified with one saved application. How many users are ready to use as specified?

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: C**

**Explanation:** Compare each user against every part of its specification. User A should have no saved applications, but has one — not ready. User B matches exactly — ready. User C matches exactly — ready. That gives two ready users. The trap here is that User A looks almost right: registered, verified — but the final condition fails, and "almost matching" test data is one of the most common causes of misleading test results. Running the script with User A as found would fail a test expecting an empty applications list even though the system works. This is why the **Test engineering** skill includes understanding why testing environments matter, and this item tests whether a candidate verifies data before trusting results, ticking off each condition explicitly rather than judging by overall impression.

**Question 9 (moderate) — Deducing what a prototype implies**

A candidate is analysing a prototype with support. The prototype of a form shows: a "Date of birth" field, a note saying "You must be 16 or over to apply", and a "Continue" button. The design notes say nothing else about age. Which of the following is a sensible question to raise, rather than an assumption to make?

- A) Assume users aged exactly 16 are allowed, and test only ages 15 and 17.
- B) Ask what should happen when a user enters a date of birth making them exactly 16 today, and what message under-16s should see.
- C) Assume under-16s see a generic error message, and write the test that way.
- D) Assume the age rule is handled by another team and skip it.

**Correct answer: B**

**Explanation:** "16 or over" establishes 16 is allowed, but two important details are genuinely unspecified: the exact boundary behaviour (is someone allowed on their 16th birthday? what about time zones or the date the application is processed?) and the error experience for under-16s (what message, and is it helpful?). The right move at this level is raising these as questions — analysing artefacts with support means noticing gaps and asking, not guessing. Option A tests near the boundary but quietly assumes the answer to the exact question that needs asking. Option C invents a message the design does not define. Option D abandons a risk without evidence. Boundary values — the numbers right at the edge of a rule — are where defects love to live, and this item tests whether a candidate notices an undefined boundary, one of the most valuable observations an associate can make.

**Question 10 (hard) — Applied problem solving with a failing test**

A test that passed yesterday fails today. The test logs in as User B, searches for "housing", and expects at least one result. Today it returns zero results. A candidate gathers these facts: (i) the search feature code has not changed since yesterday; (ii) the test data was refreshed overnight; (iii) User B can log in successfully; (iv) searching for "benefits" returns results. What is the most likely explanation to investigate first?

- A) The search feature is broken and a defect should be raised immediately.
- B) The overnight data refresh removed or changed the "housing" records the test relies on.
- C) User B's account is locked.
- D) The test tool is broken.

**Correct answer: B**

**Explanation:** Reason from what changed and what still works. The code did not change (fact i), so a sudden code defect is unlikely. Login works (fact iii), ruling out option C. Search itself works for "benefits" (fact iv), which makes options A and D much less likely — the feature and the tool both function. The one thing that did change overnight is the test data (fact ii), and the failure is exactly the kind that missing data would cause: zero results for a specific term. The most efficient next step is checking whether "housing" records still exist in the refreshed data. This is real diagnostic thinking from the job: before raising a defect, a good tester asks "did the system fail, or did my test's assumptions fail?" Raising option A without checking would waste a developer's time, which is exactly what careful diagnosis and defect reporting are meant to prevent. This item tests whether a candidate's answer is consistent with all the evidence, especially the evidence about what recently changed.

**Question 11 (hard) — Multi-rule deduction about defect severity**

A team's severity rules say: (i) a defect that prevents a citizen completing a service is Severity 1; (ii) a defect with a reasonable workaround is at most Severity 2; (iii) cosmetic issues such as spelling and alignment are Severity 3, unless they cause a citizen to misunderstand information, in which case rule (i) or (ii) applies as appropriate. A candidate finds that the fee amount on a payment page displays as "£1.50" when the true fee is "£15.00". Payment itself works correctly and charges £15.00. What severity fits best?

- A) Severity 3 — it is only a display issue.
- B) Severity 1 or 2 territory — the wrong amount causes citizens to misunderstand what they will pay, so the cosmetic rule's exception applies.
- C) No defect — the payment charges the right amount.
- D) Severity 1 automatically, because money is involved.

**Correct answer: B**

**Explanation:** Follow the rules in order and watch for the exception. At first glance this looks cosmetic — a display problem — which points to rule (iii) and Severity 3. But rule (iii) has an explicit exception: cosmetic issues that cause citizens to misunderstand information escalate to rules (i) or (ii). A citizen shown £1.50 who is charged £15.00 has been seriously misled about money, which could cause failed payments, complaints, and loss of trust. So the exception applies, and the defect belongs in Severity 1 or 2 territory depending on judgement about whether citizens can still complete the service. Option A stops reading the rule too early. Option C confuses "the system functions" with "the system is correct" — accurate information is part of quality. Option D invents a rule that does not exist. This item tests the careful rule-reading the defect management process requires, and it also tests whether a candidate can explain a defect's real-world impact when communicating it to non-technical stakeholders.

**Question 12 (hard) — Spotting the flaw in a testing argument**

A colleague says: "All ten of our automated tests passed last night, so the release has no defects." A mentor asks what the candidate thinks of this reasoning. What is the best response?

- A) Agree — ten passing tests is strong evidence of zero defects.
- B) Disagree — passing tests show only that the behaviours those ten tests check are working; they cannot prove the absence of defects elsewhere.
- C) Disagree — automated tests can never establish anything useful.
- D) Agree, provided the tests ran in under an hour.

**Correct answer: B**

**Explanation:** This is a classic reasoning error worth catching early in a career: testing can show the presence of defects, but it can never prove their absence. Ten tests examine ten specific behaviours; the release contains far more behaviour than that, including areas the tests never touch. So passing results are genuinely good news about the covered behaviours — but silence about everything else. Option B captures both halves: respect what the tests do tell you, and stay honest about what they cannot. Option C swings too far the other way; automation is valuable, which is why explaining the value of automation within testing is part of the **Designing and executing tests** skill. Options A and D confuse quantity or speed with coverage. This item tests whether a candidate would use precise language about test outcomes in the job — "the smoke tests passed" rather than "there are no bugs" — which is part of communicating between the technical and non-technical.

### Preparation tips

- **Draw items from real artefacts where possible.** Base the assessment on the kind of test script, defect report, or user story this role genuinely handles, and give every candidate for this role level the same set — this trains and tests the same muscles that make someone good at the job.
- **Present the rule and the scenario together, clearly.** Most cognitive items give a rule, a convention, or a set of conditions. Make sure the candidate has time to read it properly before the scenario is applied; errors usually come from a half-remembered rule, not from weak reasoning.
- **Score "almost matches" as wrong.** When a rule has multiple parts, a candidate should tick each part off explicitly. "Almost matches" is the most common wrong answer in error-checking items — and the most common cause of bad test data in real life — so do not give partial credit for a near-miss answer that has not checked every condition.
- **Offer the untimed practice questions to every candidate.** If your platform provides them, make sure each candidate uses them to settle in and learn the interface, so the timed items get everyone's full attention on equal terms.
- **Score steadiness as well as speed.** A calm, methodical pace with high accuracy should score at least as well as a rushed pace with mistakes — the same trade-off the role rewards when executing tests.
- **Give the sitting proper conditions.** A quiet space, a stable connection, and an unhurried pace protect the fairness of the signal you get, at this level as much as any other.
- **Ask about adjustments before the sitting.** If a candidate has a disability or condition that affects timed tests, invite the request for reasonable adjustments early, and apply it consistently.

### Common pitfalls

- **Letting a candidate's outside knowledge substitute for the given information.** The question sets the rules of its own little world. Score answers deduced from what is written, even where a candidate's own project does things differently — and probe the difference at debrief if it is unclear which the candidate was doing.
- **Rewarding the first plausible option.** In error-checking items, option A may look fine at first glance while option C contains the real answer. Check whether a candidate's working shows they considered all four options before committing, not just the first one.
- **Confusing "must be true" with "could be true" when marking.** If an item asks what must follow, an answer that is merely possible is wrong even if it sounds reasonable — hold that distinction as firmly as the item requires.
- **Reading a struggling candidate as failing.** Adaptive tests raise difficulty when a candidate is doing well, so a candidate who meets tougher questions later in the section may be performing strongly, not poorly — do not let that shape your impression prematurely.
- **Letting one item consume disproportionate time in a live sitting.** If observing, note candidates who sink significant time into a single item rather than making a reasoned choice and moving on — itself a signal worth discussing at debrief, since poor prioritisation under time pressure is part of what this section tests.
- **Missing an exception clause when checking a candidate's reasoning.** Rules in these items often contain "unless…" — make sure your own answer key reasoning, and your assessment of a candidate's explanation, reads to the end of every rule before applying it.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the kinds of numbers this role genuinely produces. This is not an advanced maths exam. There is no algebra, no geometry, and nothing beyond school-level arithmetic. Instead, it checks the practical number skills a test analyst uses every week: percentages (such as pass rates), averages, simple ratios, counts, differences, and reading tables and simple charts correctly.

Administer this section as an online, timed test of 20 to 30 minutes with 15 to 20 questions, presenting some data — often a small table, like a test results summary — and asking the candidate to extract or calculate a specific figure. Decide in advance and apply consistently whether a calculator is allowed, and give every candidate rough paper. As with the cognitive section, score against a norm group and reflect both accuracy and pace, and note that some platforms adapt difficulty as the candidate goes.

Why does numeric reasoning matter for an associate quality assurance test analyst? Because testing runs on numbers, and the numbers tell stories that a team relies on. Executing tests and developing reports means summarising results as counts and percentages: 45 tests run, 40 passed, an 89% pass rate. Recording outcomes means tracking how many defects were found, how many are fixed, and how many remain. Helping measure the effectiveness of quality testing approaches — something the **Test and quality planning** skill asks for — means looking at trends: is the pass rate improving? Are defects being fixed faster this sprint than last? Getting these numbers right matters, because a team and its stakeholders make decisions from them. A pass rate reported as 98% when it is really 89% could send a release out the door with problems in it — this section tests whether a candidate would catch that kind of error before it reaches a report.

The arithmetic itself is friendly, and every technique needed is shown step by step in the explanations below. At this level, the assessment focuses on careful reading of tables and correct application of simple calculations — precision, not sophistication.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Percentages and pass rates** map to **Designing and executing tests** and the duty to execute tests, develop reports and record outcomes: results are almost always communicated as percentages, and the role requires calculating and sanity-checking them.
- **Counts, differences and simple ratios** map to **Managing, reporting and resolving defects**: tracking how many defects were raised, fixed, reopened and closed — and noticing when the numbers do not add up — is defect management in numeric form.
- **Averages and rates** map to **Test engineering** and **Designing and executing tests**: how long test runs take on average, how many tests an automated suite executes per hour, and whether a slow run is unusual are everyday questions about the tools the role supports.
- **Reading tables and charts** maps to **Test analysis**: analysing information includes numeric information — a coverage table, a defect summary, a results dashboard — and extracting the right figure from the right row is a precision skill.
- **Trend awareness** maps to **Test and quality planning**: explaining how to measure the effectiveness of testing approaches, and why it is important, starts with reading simple trends — improving pass rates, falling defect counts — correctly and cautiously.
- **Explaining numbers simply** maps to **Communicating between the technical and non-technical**: a percentage is often the clearest way to give a non-technical stakeholder an honest picture, provided it was calculated correctly.

### Practice questions

**Question 1 (easy) — Calculating a pass rate**

A candidate executed 20 tests today with support from a mentor. 17 passed and 3 failed. What is the pass rate?

- A) 17%
- B) 75%
- C) 85%
- D) 90%

**Correct answer: C**

**Explanation:** A pass rate is the number of passes divided by the total number of tests, multiplied by 100 to make a percentage. Step by step: 17 ÷ 20 = 0.85. Then 0.85 × 100 = 85%. A quick sanity check: 17 out of 20 is a bit less than 18 out of 20, and 18 ÷ 20 would be 90%, so 85% sits sensibly just below it. Option A is the classic slip of writing the raw count (17) as a percentage. Option B would be 15 out of 20. This is the single most common calculation the role performs when developing reports and recording outcomes — this item tests whether it is automatic, and a strong candidate's answer should state both the percentage and the raw numbers ("85%, 17 of 20") the way a good report would.

**Question 2 (easy) — Counting defects by status**

A team's defect log shows: 6 defects with status "Open", 4 with status "Fixed - awaiting retest", 9 with status "Closed", and 1 with status "Reopened". How many defects still need some testing action (retesting or investigation) from the team, counting "Open", "Fixed - awaiting retest" and "Reopened"?

- A) 10
- B) 11
- C) 19
- D) 20

**Correct answer: B**

**Explanation:** Add only the statuses the question names: Open (6) + Fixed - awaiting retest (4) + Reopened (1) = 11. Step by step: 6 + 4 = 10, then 10 + 1 = 11. Closed defects (9) need no further action, so they are excluded. Option A forgets the reopened defect — an easy miss because there is only one, but reopened defects matter a great deal in practice: they mean a fix did not work, and retesting and escalating defects when needed is exactly the role's responsibility in the defect management process. Option C adds everything including Closed, and option D miscounts on top of that. This item tests the same discipline needed in real defect logs: being precise about which categories the question, or the report, actually asks for.

**Question 3 (easy) — Reading a results table**

A team's overnight automated run produced this summary:

| Test suite | Tests run | Passed | Failed |
|---|---|---|---|
| Login | 12 | 12 | 0 |
| Search | 25 | 20 | 5 |
| Payments | 18 | 16 | 2 |
| Reports | 15 | 15 | 0 |

Which suite had the most failures?

- A) Login
- B) Search
- C) Payments
- D) Reports

**Correct answer: B**

**Explanation:** Read straight down the "Failed" column: Login 0, Search 5, Payments 2, Reports 0. The largest number is 5, in the Search row, so Search had the most failures. This looks simple — and it is — but table-reading items catch a candidate who answers from the wrong column (for example, choosing Search because it also ran the most tests, which happens to give the same answer here, but often will not) or the wrong row. This item tests whether a candidate anchors on the exact column the question names and scans it once, since supporting the maintenance of automated tests means reading summaries like this most mornings.

**Question 4 (easy) — Simple average of test durations**

A candidate timed how long one manual test took to execute on four occasions: 8 minutes, 10 minutes, 7 minutes, and 11 minutes. What is the average (mean) duration?

- A) 8 minutes
- B) 9 minutes
- C) 10 minutes
- D) 36 minutes

**Correct answer: B**

**Explanation:** The mean is the total divided by the number of occasions. Step by step: 8 + 10 = 18; 18 + 7 = 25; 25 + 11 = 36 minutes in total. There were 4 occasions, so 36 ÷ 4 = 9 minutes. Option D is the total rather than the average — a common slip when rushing. A sanity check: the average must sit between the smallest value (7) and the largest (11), and 9 does. This item tests a genuinely useful workplace skill: if a team asks how long the regression pack will take, knowing that tests average 9 minutes each supports an honest estimate, and estimating is part of learning how test plans are built.

**Question 5 (moderate) — Percentage of tests automated**

A team has 60 regression tests. 21 of them are automated and the rest are manual. What percentage of the regression tests are automated?

- A) 21%
- B) 30%
- C) 35%
- D) 39%

**Correct answer: C**

**Explanation:** Divide the automated tests by the total and multiply by 100. Step by step: 21 ÷ 60 = 0.35. Then 0.35 × 100 = 35%. Option A is the raw count mistaken for a percentage — it would only be correct if there were exactly 100 tests. Option B comes from misreading 21 as 18 (30% of 60), and option D from dividing the wrong way round or arithmetic slips. A useful mental check: 50% of 60 would be 30 tests, and 21 is somewhat less than 30, so the answer must be somewhat under 50% — 35% fits. This item tests figures of exactly the kind that support explaining the value of automation within testing: "35% of our regression pack is automated; every test we automate frees manual time for exploratory work" is the sentence this calculation feeds.

**Question 6 (moderate) — Comparing pass rates between sprints**

In Sprint 4, a team ran 80 tests and 64 passed. In Sprint 5, the team ran 120 tests and 102 passed. Between the sprints, the pass rate:

- A) Fell from 85% to 80%
- B) Rose from 80% to 85%
- C) Stayed the same
- D) Rose from 64% to 102%

**Correct answer: B**

**Explanation:** Calculate each sprint's pass rate separately. Sprint 4: 64 ÷ 80 = 0.80, which is 80%. Sprint 5: 102 ÷ 120 = 0.85, which is 85%. So the pass rate rose from 80% to 85%. Option D treats the raw pass counts as percentages — and shows why that is nonsense: a pass rate over 100% is impossible, which is a sanity check worth remembering. The deeper lesson this item tests is that raw counts mislead when totals differ: Sprint 5 had more failures in absolute terms (18 versus 16), yet its pass rate is better because far more tests ran. When developing reports, comparing like with like — rates with rates — and mentioning the totals is what gives readers the full picture, and a strong candidate's answer should show that habit rather than simply arriving at the right figure.

**Question 7 (moderate) — Defect fix rate as a ratio**

This sprint, developers fixed 24 defects. Testers retested them and reopened 6 because the fix did not work. What is the ratio of successfully fixed defects to reopened defects, in its simplest form?

- A) 24:6
- B) 4:1
- C) 3:1
- D) 6:1

**Correct answer: C**

**Explanation:** Be careful — this question has a step before the ratio. Of the 24 fixed defects, 6 were reopened, so the successfully fixed defects number 24 − 6 = 18. The ratio of successfully fixed to reopened is therefore 18:6. Simplify by dividing both sides by 6: 18 ÷ 6 = 3 and 6 ÷ 6 = 1, giving 3:1. Option A is the unsimplified ratio of all fixes to reopens — it also fails the "simplest form" requirement. Option B (24:6 simplified) makes the same substantive mistake: comparing all fixes rather than successful fixes. This item tests reading exactly what is being compared — the heart of ratio questions, and of defect reporting. A team told "3 fixes stick for every 1 that fails retest" understands its quality position; a strong candidate's answer should reflect that retesting carefully matters as much as testing in the first place.

**Question 8 (moderate) — Percentage change in defect count**

A project's open defect count fell from 40 at the start of the month to 30 at the end. What was the percentage decrease?

- A) 10%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Percentage change is the change divided by the starting value, times 100. Step by step: the change is 40 − 30 = 10 defects. The starting value is 40. So 10 ÷ 40 = 0.25, and 0.25 × 100 = 25%. Option A confuses the raw change (10 defects) with the percentage. Option D comes from dividing by the final value (10 ÷ 30 ≈ 33%) — the classic percentage-change error; the divisor should always be the value the change started from. Notice the direction matters too: if the count had risen from 30 to 40, that would be a 33% increase (10 ÷ 30), because the starting value would then be 30. This item tests a convention used constantly to communicate testing effectiveness to stakeholders — "open defects down 25% this month" — so it is worth checking a candidate has the convention firmly right.

**Question 9 (moderate) — Estimating remaining test effort**

A candidate has 45 test cases to execute for a feature. In the first two days, 18 were executed. If this continues at the same rate, how many more full days will be needed to finish the rest?

- A) 2 days
- B) 3 days
- C) 4 days
- D) 5 days

**Correct answer: B**

**Explanation:** First find the rate: 18 tests in 2 days means 18 ÷ 2 = 9 tests per day. Next find the remaining work: 45 − 18 = 27 tests. Then divide the remaining work by the rate: 27 ÷ 9 = 3 days. A sanity check: 3 more days at 9 per day gives exactly 27, which matches. Option A underestimates (2 × 9 = 18, leaving 9 unfinished); options C and D overestimate. This item tests the three-step pattern — rate, remaining, divide — and the honest framing that goes with it: "about 3 days at the current rate, assuming no major defects" is exactly the kind of supported estimate an associate should be able to bring to a stand-up, showing they understand how test plans and timescales connect.

**Question 10 (hard) — Weighted totals across test types**

A team's test pack for a release contains 30 smoke tests taking 5 minutes each, 20 functional tests taking 15 minutes each, and 10 accessibility checks taking 12 minutes each. What is the total execution time, in hours and minutes?

- A) 7 hours 0 minutes
- B) 9 hours 30 minutes
- C) 9 hours 50 minutes
- D) 10 hours 30 minutes

**Correct answer: B**

**Explanation:** Work through each test type, then add. Smoke: 30 × 5 = 150 minutes. Functional: 20 × 15 = 300 minutes. Accessibility: 10 × 12 = 120 minutes. Total: 150 + 300 = 450; 450 + 120 = 570 minutes. Now convert minutes to hours: 570 ÷ 60 = 9 remainder 30, because 9 × 60 = 540 and 570 − 540 = 30. The total is therefore 9 hours 30 minutes. Option A comes from forgetting one of the three test types; option C from adding a stray 20 minutes; option D from converting carelessly. The method to check for in a candidate's working is: multiply each type's count by its duration, sum all the minutes, then convert once at the end — never convert part-way through, which is where errors creep in. This item tests estimating a pack's total run time, precisely how testers help a team plan a release day realistically: 9 hours 30 minutes tells a team at a glance that one tester cannot execute this pack in a single day, which starts exactly the right planning conversation.

**Question 11 (hard) — Interpreting a defect trend table**

The table shows defects found and fixed over four weeks:

| Week | Defects found | Defects fixed |
|---|---|---|
| 1 | 14 | 6 |
| 2 | 11 | 9 |
| 3 | 8 | 12 |
| 4 | 5 | 10 |

The project had 20 open defects at the start of Week 1. How many open defects remain at the end of Week 4?

- A) 11
- B) 21
- C) 31
- D) 38

**Correct answer: B**

**Explanation:** Each week, the open count rises by defects found and falls by defects fixed. Track the running total. Start: 20. Week 1: 20 + 14 − 6 = 28. Week 2: 28 + 11 − 9 = 30. Week 3: 30 + 8 − 12 = 26. Week 4: 26 + 5 − 10 = 21. So 21 defects remain open. A faster check: total found = 14 + 11 + 8 + 5 = 38; total fixed = 6 + 9 + 12 + 10 = 37; net change = 38 − 37 = +1; and 20 + 1 = 21 — the same answer by a different route, a good way to verify the arithmetic. Option D is the total found, and option A subtracts the wrong way. Notice the encouraging story in the trend: from Week 3, fixes outpace finds and the backlog shrinks — this item tests whether a candidate can see and explain that story from raw numbers, turning a defect log into useful management information.

**Question 12 (hard) — Percentages of percentages in test coverage**

A release has 200 requirements. A team has written tests covering 80% of them. Of the covered requirements, 90% have had their tests executed, and of those executed, 95% passed. How many requirements have passed testing?

- A) 121
- B) 136
- C) 137
- D) 144

**Correct answer: C**

**Explanation:** Take the percentages one stage at a time, always applying each percentage to the previous stage's result — never to the original total. Stage 1, coverage: 80% of 200 = 0.80 × 200 = 160 requirements have tests. Stage 2, execution: 90% of 160 = 0.90 × 160 = 144 requirements have had tests executed. Stage 3, passing: 95% of 144 = 0.95 × 144 = 136.8 — and since a requirement either passes or does not, this real-world framing would be reported as approximately 137 requirements. Option D stops after stage 2. Option B is the unrounded 136.8 truncated downwards; the nearest whole number is 137. The big trap is multiplying 200 by each percentage separately. Chained percentages appear constantly in coverage reporting, and this item also tests whether a candidate notices what the chain reveals: 80%, 90% and 95% each sound high, yet the chain ends at only about 68% of all requirements passed (137 ÷ 200) — a genuinely useful observation for a candidate to raise, gently, about whether coverage aligns with risk.

### Preparation tips

- **Confirm the two formulas that cover most items.** Pass rate = passes ÷ total × 100. Percentage change = change ÷ starting value × 100. Knowing these are the backbone of the section helps you judge quickly whether a candidate's working is on the right track.
- **Expect and credit written working.** A candidate who writes "17 ÷ 20 × 100" before computing is demonstrating the same discipline that prevents slips in written test steps — treat this as a positive signal, not a slow one.
- **Check whether a candidate sanity-checks their own answer.** Pass rates live between 0% and 100%. Averages live between the smallest and largest values. Remaining work cannot be negative. A candidate who catches their own out-of-range answer is showing real numeric judgement.
- **Where possible, use the team's own numbers.** A test summary or defect dashboard from the candidate's own context, if available, is the most calibrated practice or assessment material — real data reveals real fluency.
- **Look for the two-route check on harder items.** Where a result can be verified a second way (as in Question 11: week-by-week versus totals), a candidate who does this is showing strong self-checking habits.
- **Apply calculator rules consistently.** Decide in advance whether a calculator is allowed for this sitting, tell every candidate the same thing, and do not vary it between candidates.

### Common pitfalls

- **Missing a count-reported-as-a-percentage error.** "17 passed" is not "17%". This slip appears in options on nearly every numeric item — and occasionally in real status reports — so check specifically for it in a candidate's working.
- **Missing the wrong-base error.** Percentage change divides by the starting value; chained percentages apply to the previous stage, not the original total. When scoring, ask "percentage of what, exactly?" the same way the item does.
- **Assuming a wrong answer means poor arithmetic.** It is often a wrong table cell read under time pressure rather than weak calculation — check a candidate's working for which cell they used before concluding their numeric reasoning is weak.
- **Accepting a raw-count comparison where a rate comparison was needed.** More failures does not mean worse quality if far more tests ran. A candidate should convert to rates before comparing sprints, weeks, or suites — mark down an answer that compares raw counts across different totals.
- **Overlooking a units or conversion slip.** Minutes versus hours catches many candidates. Check the conversion step specifically rather than only the final figure.
- **Marking a partial answer as complete.** Many items are two-step or three-step; the most common candidate error is stopping after the first step (like option D in Question 12). Check whether the candidate answered the intermediate number or the one the question actually asked for.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material — using the kinds of documents this role genuinely involves. For an associate quality assurance test analyst, that means user stories and acceptance criteria, testing standards and process documents, defect descriptions, emails from a team, and extracts from guidance such as the Government Service Standard.

Administer this section as an online, timed test of 15 to 25 minutes. The candidate is shown a short passage and asked questions about it. The most common question type is **true / false / cannot say**: given only the passage, is the statement definitely true, definitely false, or is there not enough information to decide? Other question types include choosing the best summary of a passage, identifying what a passage implies, and judging which version of a sentence communicates most clearly. As with the other sections, score objectively against a norm group, reflecting both accuracy and pace.

The golden rule of verbal reasoning is: **use only the passage**. A candidate may know from work that a statement is probably true in real life, but if the passage does not say it, the correct answer is "cannot say" — this is not a test of a candidate's outside knowledge, only of their careful reading, and it should be scored that way.

Why does this matter so much for the role? Because precise reading is a core testing skill in disguise. Analysing a user story with support means deciding exactly what the words commit the system to doing — and what they leave unsaid. The gap between "the passage says" and "I assumed" is precisely the gap where defects hide: a developer assumed one thing, a tester assumed another, and the citizen using the service falls between the two. The role summary asks a candidate to analyse artefacts such as user stories, prototypes, processes and designs, and to explain things clearly to both technical and non-technical people. This section tests both the reading side (extract exactly what a document says) and the writing side (recognise which phrasing is clearest). A tester who misreads a requirement will faithfully test the wrong thing — accurately executing a misunderstanding — which is why this section matters as much as the numeric one.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Reading comprehension** maps to **Test analysis**: analysing information such as user stories, prototypes, processes, and designs, with support, begins with extracting exactly what a document says — no more and no less.
- **True / false / cannot say discipline** maps to **Designing and executing tests** and **Test analysis**: a test should check what the requirement actually states; treating an assumption as a stated fact leads to tests that pass while the real requirement fails. Recognising "cannot say" is the same skill as spotting a gap in acceptance criteria and asking about it.
- **Inference** maps to **Managing, reporting and resolving defects**: reading a defect description or a developer's reply and correctly understanding what is implied — and what is not — keeps the defect process moving without misunderstandings.
- **Clear-writing judgement** maps to **Communicating between the technical and non-technical**: the role requires understanding why it is important to communicate technical concepts in non-technical language; choosing the clearest phrasing in a test item rehearses choosing the clearest phrasing in a candidate's own reports and emails.
- **Understanding process documents** maps to **Test and quality planning** and **Test engineering**: following quality testing approaches, plans, strategies, and engineering standards, with support, requires reading those documents accurately — including the conditions and exceptions.

### Practice questions

For questions 1 to 6, the candidate reads the passage, then decides for each statement whether it is **True** (the passage says so), **False** (the passage says the opposite), or **Cannot say** (the passage does not give enough information). Hold the passages, statements, and answer key below back from the candidate until scoring.

**Passage 1:**

> Testing on the licensing service follows the team's agreed test approach. All new user stories must have acceptance criteria agreed before development starts. Test analysts design test cases from the acceptance criteria, and each test case must be reviewed by another team member before it is executed. Defects found during testing are recorded in the team's tracking tool on the day they are found. Defects rated Severity 1 must also be reported to the delivery manager by email within one hour of being recorded.

**Question 1 (easy) — True / false / cannot say**

Statement: "Each test case must be reviewed by another team member before it is executed."

- A) True
- B) False
- C) Cannot say
- D) True, but only for Severity 1 defects

**Correct answer: A**

**Explanation:** The passage states this almost word for word: "each test case must be reviewed by another team member before it is executed." When a statement restates the passage directly, the answer is True. Easy items like this reward one habit: going back to the passage and finding the exact sentence that supports the answer, rather than answering from memory of a first read. Option D muddles two different sentences — the review rule applies to test cases, while the one-hour email rule applies to Severity 1 defects. This item tests whether a candidate keeps rules attached to the right subjects, exactly the care needed when following a documented test approach, where mixing up which rule governs which artefact causes genuine process mistakes.

**Question 2 (easy) — True / false / cannot say**

Statement: "Defects rated Severity 2 must be reported to the delivery manager by email within one hour."

- A) True
- B) False
- C) Cannot say
- D) True, within one day

**Correct answer: C**

**Explanation:** The passage gives the one-hour email rule only for Severity 1 defects. It says nothing at all about how, whether, or when Severity 2 defects are reported to the delivery manager — only that all defects are recorded in the tracking tool on the day they are found. Because the passage neither confirms nor denies the statement, the answer is Cannot say. This is the most important verbal reasoning skill this section tests: resisting the pull to fill gaps. False would also be wrong — False requires the passage to contradict the statement, and it does not; perhaps the team does email Severity 2 defects too, perhaps not, but the passage is simply silent. A strong candidate's answer reflects the same instinct that should drive their day job: ask "what is the reporting expectation for Severity 2?" rather than assuming — the question-asking reflex and the Cannot say reflex are the same skill.

**Question 3 (easy) — True / false / cannot say**

Statement: "Development can start on a user story before its acceptance criteria are agreed."

- A) True
- B) False
- C) Cannot say
- D) Only with the delivery manager's approval

**Correct answer: B**

**Explanation:** The passage says: "All new user stories must have acceptance criteria agreed before development starts." The statement claims the opposite — that development can start first — so it is False. The word "must" in the passage makes the rule absolute as written; no exception is mentioned, so option D invents an approval route the passage never offers. Notice how False differs from Cannot say: here the passage actively contradicts the statement, which is what False requires. This item tests recognising which process statements are absolute ("must") and which are flexible ("should", "may") — a reading skill the role uses every time it follows a test approach or standard with support.

**Passage 2:**

> From: Delivery manager
> To: Test team
> Subject: Release 2.4 testing window
>
> The release 2.4 testing window runs from Monday 9 June to Friday 13 June. Regression testing should be completed by Wednesday evening so that Thursday and Friday are free for fixing and retesting. If regression testing finds any Severity 1 defect, the release decision meeting scheduled for Friday afternoon will be postponed. Please note the payments module is out of scope for this release and should not be tested. Aisha will be on leave on Monday, so her assigned smoke tests will be shared between the rest of the team for that day.

**Question 4 (moderate) — True / false / cannot say**

Statement: "If regression testing finds a Severity 2 defect, the release decision meeting will be postponed."

- A) True
- B) False
- C) Cannot say
- D) True, if there are more than three such defects

**Correct answer: C**

**Explanation:** The email states the postponement rule only for Severity 1 defects. It does not say what happens if a Severity 2 defect is found — the meeting might go ahead, or the delivery manager might postpone it anyway; the email simply does not address the case. So the answer is Cannot say. Be alert to a tempting misreading: "only Severity 1 postpones the meeting" is an inference many candidates add, but the email never says "only". False would require the email to state that Severity 2 defects do not postpone the meeting, and it does not. Option D invents a threshold from nowhere. This distinction is not pedantry: in real release weeks, a tester who accurately reports "the criteria mention Severity 1; the plan is silent on Severity 2" helps the team notice a gap in its own plan — a strong candidate's answer reflects exactly that kind of contribution.

**Question 5 (moderate) — True / false / cannot say**

Statement: "The payments module should not be tested during this release window."

- A) True
- B) False
- C) Cannot say
- D) True, except for smoke tests

**Correct answer: A**

**Explanation:** The email says directly: "the payments module is out of scope for this release and should not be tested." The statement matches, so it is True. Option D adds an exception for smoke tests that the email never makes — Aisha's smoke tests are mentioned in a separate sentence about Monday cover, and nothing links them to payments. This item rehearses a real workplace discipline: scope statements matter, and testing out-of-scope areas during a release window wastes limited time. For scoring purposes, the lesson is simpler: when two sentences sit near each other, a candidate should not let their meanings blur together — this item tests whether a candidate reads each sentence as its own rule and checks which subject each rule governs before combining them.

**Question 6 (moderate) — True / false / cannot say**

Statement: "Aisha will complete her assigned smoke tests on Tuesday."

- A) True
- B) False
- C) Cannot say
- D) True, because she returns from leave on Tuesday

**Correct answer: C**

**Explanation:** The email says Aisha is on leave on Monday and her Monday smoke tests will be shared among the team. It says nothing about what Aisha will do on Tuesday — it does not even explicitly say she returns on Tuesday (her leave might continue; the email only covers Monday's arrangements). Option D shows exactly how plausible assumptions sneak in: "on leave on Monday" strongly suggests a one-day absence, but suggestion is not statement, and the email never says she returns Tuesday, let alone what work she will do then. Because the passage gives no information about Tuesday's activities, the answer is Cannot say. This item tests the workplace parallel directly: when a colleague's cover arrangements are ambiguous in an email, the reliable move is to ask, not assume — precisely the habit this role level should be encouraged to build under supervision.

**Question 7 (moderate) — Identifying the main point**

Read this extract from a testing standards document:

> Exploratory testing complements scripted testing; it does not replace it. Scripted tests confirm that known requirements behave as specified, and their repeatability makes them suitable for regression and automation. Exploratory testing, by contrast, uses the tester's curiosity and knowledge to investigate areas scripts do not reach, and often finds defects that scripted tests miss. Teams achieve the best coverage when they plan time for both.

Which option best summarises the main point?

- A) Exploratory testing is better than scripted testing because it finds more defects.
- B) Scripted testing should be automated wherever possible.
- C) Scripted and exploratory testing serve different purposes, and teams get the best results by using both.
- D) Exploratory testing requires more experienced testers.

**Correct answer: C**

**Explanation:** The passage's structure signals its point: it opens with "complements... does not replace", describes each approach's distinct purpose, and closes with "best coverage when they plan time for both". Option C captures that balanced, both-are-needed message. Option A overstates one side — the passage says exploratory testing often finds defects scripts miss, not that it is better overall. Option B inflates a passing remark (repeatability makes scripted tests "suitable for automation") into the main message. Option D is not in the passage at all. Summary items reward reading for structure: what does the opening claim, what does the closing recommend, and what does the middle supply as evidence. This item tests the same skill needed to work with process and approach documents — being able to state a document's core message in one sentence is what lets a candidate follow it faithfully and explain it to others simply.

**Question 8 (moderate) — Inference from a defect conversation**

A developer replies to a candidate's defect report: "I can't reproduce this on my machine using the steps you listed. Could you confirm which browser and version you used, and whether you were on the test environment or the staging environment?" What can reasonably be inferred from this reply?

- A) The developer thinks the candidate invented the defect.
- B) The developer believes the defect may depend on the environment or browser, and needs more detail before investigating further.
- C) The defect has been rejected and will not be fixed.
- D) The defect only occurs on the staging environment.

**Correct answer: B**

**Explanation:** Infer from what the reply actually does: the developer tried the steps, could not reproduce the problem, and is asking for two specific details — browser/version and environment. Asking for those details implies the developer suspects the defect may show up only under particular conditions, which is very common in practice. Option A reads hostility into a neutral, professional request; assuming bad faith in written messages is a habit worth avoiding both in this section and at work. Option C confuses "cannot reproduce yet" with "rejected" — the developer is actively investigating. Option D converts the developer's open question into a conclusion the conversation has not reached. This item connects directly to the **Managing, reporting and resolving defects** skill: including browser, version and environment in the original report prevents this round trip entirely, which is why defect templates ask for "appropriate information" — a strong candidate's answer should draw that link.

**Question 9 (hard) — Choosing the clearest defect summary**

Four draft titles for the same defect. The defect: on the address entry page, when a user enters a postcode containing a space in the middle (such as "SW1A 1AA"), the Continue button stays greyed out, so the user cannot proceed. Which title communicates the problem most clearly to both technical and non-technical readers?

- A) "Continue button broken"
- B) "Postcode with space disables Continue button on address page, blocking user progress"
- C) "The system exhibits anomalous behaviour with respect to postcode-triggered state transitions of the Continue affordance"
- D) "URGENT!!! Nothing works on addresses!!!"

**Correct answer: B**

**Explanation:** A good defect title answers three tiny questions in one line: what happens, where, and why it matters. Option B does all three: the trigger (postcode with a space), the location (address page), the behaviour (Continue disabled), and the impact (blocks progress). Option A is too vague to find or prioritise — which button, under what conditions? Option C is technically dressed-up but communicates nothing extra; jargon like "state transitions of the Continue affordance" excludes non-technical readers, the opposite of what the **Communicating between the technical and non-technical** skill asks for. Option D substitutes emotion for information and exaggerates ("nothing works") — exaggeration erodes trust in reports. Clear-writing items in verbal assessments reward the same virtues as good defect reporting: specific, plain, complete, calm. This item tests whether a candidate applies a useful self-check to any title they write: could a colleague who has not seen the defect roughly reproduce it from the title alone?

**Question 10 (hard) — True / false / cannot say with careful qualifiers**

Read this extract from a service standard document:

> Teams should test their service with the assistive technologies most commonly used by their service's users. Where a service is used by the general public, testing should include at least one screen reader and one screen magnifier. Testing with assistive technology should take place on each major release. Teams may carry out additional assistive technology testing at any time.

Statement: "Teams must test with a screen reader on every release."

- A) True
- B) False
- C) Cannot say
- D) True for public services only

**Correct answer: C**

**Explanation:** Compare the statement's words with the passage's words, qualifier by qualifier. The passage says "should", not "must" — in standards documents these differ: "must" is mandatory, "should" is strong guidance. The screen reader requirement applies "where a service is used by the general public", not to all teams. And the testing cadence is "each major release", not "every release" — minor releases are not covered. The statement strengthens the passage in three ways (must/should, all teams/public services, every release/major releases), so the passage does not support it as written — but does the passage contradict it? Not quite: the passage does not forbid testing on every release, and stronger practice is explicitly permitted ("may carry out additional... testing at any time"). Since the statement asserts an obligation the passage neither imposes nor denies, the answer is Cannot say. This item tests forensic attention to "must/should/may" and to scope qualifiers — exactly how the role must read standards when following them with support, and it is where many candidates lose marks by answering from the gist rather than the words.

**Question 11 (hard) — Reconciling two documents**

A user story says: "As a citizen, I want to save my application and return later, so that I don't have to complete it in one sitting. Acceptance criteria: saved applications are kept for 28 days; users receive an email confirming the save." The prototype's on-screen message says: "Your application has been saved for 30 days. We have sent you a confirmation text message." As the tester analysing these artefacts with support, what is the most accurate description of the discrepancies?

- A) There is one discrepancy: the retention period differs (28 days versus 30 days).
- B) There are two discrepancies: the retention period differs, and the confirmation channel differs (email versus text message).
- C) There are no discrepancies; the prototype simply adds detail.
- D) The prototype is wrong and should be corrected to match the story.

**Correct answer: B**

**Explanation:** Compare the artefacts claim by claim. Retention: story says 28 days; prototype says 30 days — discrepancy one. Confirmation: story says email; prototype says text message — discrepancy two. Both differences would mislead users or fail testing if left unresolved, so option A undercounts by stopping at the first (and most numerical) difference — a very common miss when one discrepancy involves numbers and grabs the eye. Option C is wrong because the prototype does not add detail; it contradicts the story on two specific points. Option D goes beyond what analysis can establish: either artefact could be the outdated one — perhaps the retention period was extended to 30 days and the story was never updated. The correct professional move, and the one this role level describes, is reporting both discrepancies and asking which source is authoritative, rather than "fixing" in either direction unilaterally. This item tests completeness: finding all the differences, and not resolving ambiguity by guessing.

**Question 12 (hard) — Evaluating an argument in a team email**

An email from a colleague argues: "We should stop writing defect reports for minor issues. Writing a report takes ten minutes, and minor defects rarely get fixed anyway. Instead, we should just mention minor issues in stand-up. That way we save time and the developers still hear about them." Which option identifies the strongest weakness in this argument?

- A) It assumes spoken mentions at stand-up are a reliable record, but unwritten issues are easily forgotten, cannot be tracked or trended, and are invisible to anyone not at that stand-up.
- B) Ten minutes is actually a long time.
- C) Developers do not attend stand-ups.
- D) Minor defects are always fixed eventually.

**Correct answer: A**

**Explanation:** To evaluate an argument, find the load-bearing assumption. The colleague's proposal depends on stand-up mentions being an adequate substitute for written reports. Option A attacks exactly that assumption: spoken mentions leave no record, so issues are forgotten, cannot be counted or trended (and defect trends are how teams spot deeper quality problems), and are lost to absent colleagues or future team members. That weakness undermines the proposal even if the time saving is real. Option B merely quibbles with a premise without addressing the logic. Option C invents a fact not in evidence — and in most teams, false. Option D is both untrue to life and irrelevant: even if minor defects were always fixed, the tracking argument would remain. This item tests whether a candidate reaches the balanced conclusion a good tester would draw: the colleague has identified a real cost (reporting takes time), and the better response is making minor-defect reporting lighter, not abandoning the record. Explaining how to report and track defects — and why — is part of the role, and a strong candidate's answer should show the reasoning behind the process, not just reject the colleague's proposal.

### Preparation tips

- **Present the passage before the statements, and give time to read it.** On timed sittings, candidates who read the passage once for structure, then read each statement carefully and return to verify, tend to perform more reliably — make sure your platform or format supports that approach rather than rushing it.
- **Score by locating the evidence, not by the candidate's confidence.** For every answer, check whether the candidate (or your own key) can point to the exact sentence that supports it. An answer with no locatable evidence is probably an assumption — which usually means the correct answer was Cannot say.
- **Watch the small words when marking borderline answers.** "Must", "should", "may", "only", "all", "each major release" — qualifiers carry the meaning. A candidate's answer that ignores a qualifier has not read as carefully as the item requires.
- **Keep topics unfamiliar to the candidate, deliberately.** Passages may cover areas of government the candidate has never worked in. That is by design — everything needed is in the passage, so unfamiliarity should not disadvantage a careful reader, and you should not read it as a weakness if a candidate takes a moment to orient to unfamiliar material.
- **Time the section consistently across candidates.** Keep the limit uniform rather than allowing informal extra time to one candidate and not another.
- **Watch for confident wording standing in for accurate reading.** Neither in the item options nor in a candidate's own justification should confident or technical language substitute for evidence.

### Common pitfalls

- **Rewarding outside knowledge.** The most common error at every level is answering from what the candidate knows of real projects instead of what the passage says. Score against the passage's world, not the candidate's.
- **Treating plausible as stated when marking.** "She's on leave Monday" does not mean "she's back Tuesday". If the passage merely suggests something, the correct answer to "is it true?" is Cannot say — do not accept a candidate's inference as if it were a stated fact.
- **Confusing False with Cannot say in your own answer key.** False needs a contradiction in the passage; Cannot say means silence. Before marking, ask: does the passage actively deny this, or just not mention it?
- **Letting neighbouring sentences blur when checking an answer.** Rules about test cases, defects, and meetings may sit in one paragraph. Check that a candidate has attached each rule to its correct subject before combining anything.
- **Being swayed by confident or technical language in a candidate's justification.** The clearest option is usually the plainest one that keeps all the information. Jargon and capital letters are not evidence of quality — in the items or in a candidate's own explanation.
- **Missing a strengthened qualifier.** Statements that strengthen the passage's wording ("must" for "should", "every" for "each major") are the classic hard-question trap. Compare the statement's words with the passage's words one qualifier at a time before marking.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (often called an SJT) presents realistic workplace scenarios and asks the candidate to judge how effective different responses would be. Unlike the other sections in this document, there is no arithmetic and no passage analysis — the material being tested is a candidate's professional judgement: how they balance honesty, helpfulness, ownership, escalation, and teamwork when situations get awkward.

Administer this section as an online assessment of 20 to 40 minutes with 10 to 20 scenarios. Each scenario describes a situation a candidate could genuinely meet at this level, followed by four or five possible responses. The most common question styles are: pick the **most effective** response, pick the **least effective** response, pick both, or rate every response on a scale. There is usually no strict time pressure per question, but the overall assessment is timed. Score by comparing a candidate's judgements against those of experienced professionals and against the behaviours the employer values — in UK government digital roles, that typically means user focus, collaboration, taking ownership, honesty about problems, asking for help appropriately, and treating colleagues inclusively and with respect.

Hold this in mind when you administer and score: at the associate level, SJTs are not testing whether a candidate can solve every problem alone. Quite the opposite. Many scenarios test whether a candidate knows when to ask for help, when to escalate, and when to say "I don't know yet". A response that quietly struggles on alone often scores worse than one that asks a sensible question at the right moment — because in real teams, silent struggling is how small problems become big ones. This role level explicitly involves working under supervision and with support, so responses that use a mentor, a team, and processes well are not signs of weakness; they are the correct professional behaviour being assessed, and should be scored that way.

For this role, SJT scenarios tend to cluster around a few themes: what to do when a candidate finds a defect at an awkward moment; how to respond when unsure how to run a test; how to handle disagreement about whether something is a bug; how to react when asked to cut corners; and how to behave when a mistake is made. All of these connect directly to the duties of the role — executing tests, recording outcomes, supporting defect resolution, and communicating with technical and non-technical colleagues.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Honest reporting and ownership** maps to **Managing, reporting and resolving defects**: following a defect management process means recording what was actually found, even when it is inconvenient — and correcting one's own mistakes openly.
- **Knowing when to ask and when to escalate** maps to this role level's emphasis on working under supervision and with support, and to **Managing, reporting and resolving defects** ("retest and escalate defects when needed"): good escalation is a skill, not a failure.
- **Clear, calm communication** maps to **Communicating between the technical and non-technical**: several scenarios test whether a candidate explains problems in plain language, adapts to their audience, and keeps disagreements professional.
- **User focus** maps to **Test analysis** and **Designing and executing tests**: quality characteristics matter because real citizens depend on the service; the best responses usually protect the user, not just the schedule.
- **Improving practice** maps to the duty to seek to improve testing practices, and to **Test and quality planning**: scenarios about process problems reward constructive suggestions over silent compliance or complaint.
- **Collaboration and inclusion** maps to **Communicating between the technical and non-technical** and to the team-based nature of **Designing and executing tests**: respecting colleagues, sharing credit, and helping others learn are consistently high-scoring behaviours.

### Practice questions

For each scenario, ask the candidate to identify their most and least effective actions before you reveal the commentary below — it is the answer key.

**Scenario 1 (easy) — A defect found just before a demo**

At 13:40 a candidate finds what looks like a genuine defect: the confirmation page shows the wrong reference number format. The team is demonstrating the service to senior stakeholders at 14:00. The mentor is preparing the demo. What is the most effective response?

- A) Say nothing until after the demo — to avoid causing stress.
- B) Immediately tell the mentor what was found, show the evidence briefly, and let them decide how to handle it before the demo.
- C) Post a message in the team channel saying the service is broken.
- D) Try to fix the defect personally before 14:00.

**Most effective: B.**

**Explanation:** The team is about to show this service to senior stakeholders, and the mentor deserves the chance to decide — with the facts — whether to adjust the demo, mention the issue proactively, or proceed. Telling them promptly, with brief evidence, respects both the urgency and their judgement; twenty minutes is enough time for them to choose. Option A withholds information to avoid awkwardness — but if a stakeholder spots the wrong format live, the team looks worse, and trust in testing suffers. Option C broadcasts an exaggerated alarm ("broken") to the whole team without first informing the person who most needs to know; it creates noise rather than decision-useful information. Option D exceeds the role — associates do not fix production code, and attempting it minutes before a demo adds risk. This item tests ownership (report what was found), honest communication (accurate, not alarmist), and appropriate escalation (tell the right person first). A strong candidate's answer will also notice that the best response is the kindest to the mentor: surprises in private beat surprises in public.

**Scenario 2 (easy) — Unsure how to execute a test**

A candidate is executing a test script with a step that says "verify the audit log entry". They have never looked at the audit log and are not sure how to access it. The mentor is at lunch. What is the most effective response?

- A) Mark the step as passed — the rest of the test worked, so the log is probably fine.
- B) Skip the step, mark the test as passed, and plan to mention it sometime.
- C) Pause that test, note where it was stopped, continue with other tests that can be completed, and ask the mentor about audit log access when they return.
- D) Ask the developers to mark the step as passed on the candidate's behalf.

**Most effective: C.**

**Explanation:** This scenario tests honesty and sensible self-management, not audit log knowledge. Option C does everything right: it never records a result that has not been verified, it keeps the candidate productive in the meantime, it preserves an accurate record of exactly where the test stopped, and it uses the mentor appropriately — a short, specific question when they return. Options A and B both record a pass for something unverified, which corrupts the test record; if the audit log is actually broken, that "pass" hides it, and the defect surfaces later at greater cost. The difference between A and B is only self-awareness — both are dishonest records. Option D outsources verification to the people whose work is being checked, which undermines the point of independent testing (though asking a developer to show how to access the log, then verifying it independently, would be perfectly fine). This item tests whether a candidate's default is "I paused here because I wasn't sure, and here's my question" — exactly the behaviour this role level should show, since supervision only works when a candidate surfaces what they need.

**Scenario 3 (easy) — A colleague's test data mistake**

A candidate notices that a fellow associate has been running tests all morning against last month's test data, which the team refreshed yesterday — their results may be unreliable. They are friendly but seem stressed about their workload. What is the most effective response?

- A) Tell the team lead that the colleague's results cannot be trusted.
- B) Quietly tell the colleague what was noticed, help them point their tests at the refreshed data, and let them decide how to handle the morning's results.
- C) Say nothing — their tests are their responsibility.
- D) Mention it loudly at stand-up so everyone learns from the mistake.

**Most effective: B.**

**Explanation:** The best response fixes the problem at the smallest effective scale, preserves the colleague's dignity, and leaves them ownership of their own work. Telling them directly and kindly — and helping practically — is collaboration; they can then rerun what needs rerunning and mention it themselves at stand-up. Option A escalates over their head before giving them the chance to self-correct; escalation is for when direct resolution fails or the stakes demand it, not the first move against a peer's honest mistake. Option C fails the team: unreliable results may feed a release decision, so "not my responsibility" is not available to a professional whose job is quality. Option D makes a colleague's stressful morning into public theatre; lessons can be shared later, blamelessly, without names. This item tests inclusion and respect (address people directly and kindly), collaboration (help, don't just report), and quality focus (the results genuinely matter) — a strong candidate's answer will show the pattern that recurs throughout this section: the most effective responses usually combine honesty about the problem with generosity about the person.

**Scenario 4 (moderate) — Asked to hurry testing**

A delivery manager, friendly but under pressure, says to a candidate: "We're behind schedule. Can you just run the quick happy-path tests today and skip the negative tests? We can catch anything else later." The mentor is in meetings all afternoon. What is the most effective response?

- A) Agree — the delivery manager is more senior.
- B) Refuse — "I never cut corners" — and continue with the full plan without telling anyone.
- C) Explain briefly that skipping negative tests carries risk, say the mentor should be checked with before changing the agreed approach, and send the mentor a short message so a decision can be made quickly.
- D) Pretend to agree, but secretly run all the tests anyway.

**Most effective: C.**

**Explanation:** This scenario tests whether a candidate can hold a professional line politely while using the escalation route this level provides. Option C does three things well: it gives the delivery manager honest, plain-language information about the risk (negative tests are where input errors, misuse, and edge cases are caught — exactly the defects citizens hit in real life); it avoids either capitulating or refusing beyond the candidate's authority — because changing the agreed test approach is a decision for the approach's owners, not for an associate alone; and it triggers a fast decision by the right person with a short message rather than waiting passively. Option A abandons the agreed approach on one person's verbal request — seniority does not transfer accountability for quality decisions to the tester. Option B may reach the right outcome by accident, but refusing unilaterally and communicating with nobody escalates conflict and hides a genuine schedule problem from the team. Option D is dishonest in both directions and destroys trust whichever way it is discovered. This item tests honest communication about risk, appropriate escalation, and respect for agreed plans — following quality testing approaches with support is this role's explicit shape, and "with support" is exactly what option C uses.

**Scenario 5 (moderate) — A candidate's own mistake in a defect report**

Yesterday a candidate raised defect D-214: "Search returns no results for valid case numbers." Today the true cause becomes clear: the case number was mistyped during testing. The search feature works correctly. A developer has already spent an hour investigating the report. What is the most effective response?

- A) Quietly close the defect and hope nobody asks.
- B) Tell the developer promptly, apologise briefly, close the defect with an honest note explaining the cause, and mention what will be done differently (for example, copy-pasting case numbers from the data sheet).
- C) Leave the defect open — maybe there's a real bug somewhere near it.
- D) Ask the mentor to close it so it looks routine.

**Most effective: B.**

**Explanation:** Everyone raises a false defect eventually; what is being assessed is what happens next. Option B is prompt (the developer stops wasting time immediately), honest (the record shows the true cause, which keeps the defect data trustworthy), proportionate (a brief apology, not agonised self-blame), and improving (a concrete change to prevent recurrence — which is the role's "seek to improve testing practices" duty applied to oneself). Option A leaves the developer possibly still investigating and creates a mystery record; quiet closures are also usually noticed, and the silence costs more trust than the mistake. Option C rationalises leaving false information in the tracking system — if a nearby issue is genuinely suspected, the right move is closing D-214 honestly and investigating the new suspicion separately. Option D asks someone else to absorb the candidate's accountability, which helps neither their learning nor their reputation. This item tests whether a candidate treats an honest mistake as learning material — ownership, honesty, and correction without drama are exactly what makes that culture work.

**Scenario 6 (moderate) — A developer disagrees that it's a defect**

A candidate raised a defect: the error message for an invalid National Insurance number reads "Error 4022: NINO validation failure". The developer replies: "Working as designed — the validation is correct, so this isn't a defect." The candidate believes the message would confuse citizens. What is the most effective response?

- A) Accept the developer's view and close the defect — they know the design better.
- B) Reply that the validation logic is indeed correct, but the message's wording is a quality issue for real users; suggest re-categorising it as a content/usability defect and ask whether the team's content designer or the mentor should weigh in.
- C) Reopen the defect repeatedly until the developer gives in.
- D) Complain about the developer's attitude to the mentor.

**Most effective: B.**

**Explanation:** The disagreement here is really two people talking about different quality characteristics: the developer means "functionally correct" and the tester means "usable by citizens" — and both are legitimate parts of quality, which is exactly what the **Test analysis** skill's focus on quality characteristics teaches. Option B acknowledges what the developer is right about (a respectful, disarming move), restates the issue in terms of the user's experience ("Error 4022: NINO validation failure" is meaningless to most citizens and uses an unexplained acronym), and routes the question to the right expertise rather than turning it into a personal contest. That is user focus plus collaboration plus sensible escalation, all in one reply. Option A treats "working as designed" as the end of the conversation, but designs can be wrong for users — closing without discussion abandons the citizen's interest the tester is there to represent. Option C is escalation by attrition; it damages the relationship and settles nothing. Option D skips the direct conversation and frames a substantive disagreement as a behaviour problem — and there is no evidence of bad attitude, only a differing view. This item tests whether a candidate's most-effective response shares option B's shape: agree where possible, refocus on users, involve the right people.

**Scenario 7 (moderate) — Boring but important regression testing**

A candidate has been assigned two days of repetitive regression testing — the same checks run last release. A fellow associate says: "Just click through them fast and mark them passed; they never fail anyway." What is the most effective response?

- A) Take the advice — regression tests rarely find anything.
- B) Execute the tests properly and accurately, and separately mention to the mentor that some regression tests might be candidates for automation, since automation frees people from exactly this kind of repetition.
- C) Refuse the assignment and ask for more interesting work.
- D) Execute them properly but complain about the tedium at stand-up.

**Most effective: B.**

**Explanation:** Two things are being assessed: integrity in unglamorous work, and whether a candidate can turn a frustration into an improvement idea. Option B does both. Executing regression tests properly is non-negotiable — regression tests exist precisely because previously working features do break, and "they never fail" is only true until the day it isn't; a rushed pass on that day waves a real defect through to citizens. But the colleague has a half-point buried in their cynicism: highly repetitive, stable tests are classic automation candidates, and the role asks a candidate to explain the value of automation within testing and to seek to improve testing practices. Raising that suggestion — separately, constructively — is exactly the improvement behaviour worth rewarding at every level. Option A is a quiet integrity failure with the candidate's name on the results. Option C treats necessary work as beneath the candidate, which misreads what professionalism at any level looks like. Option D does the work but spends the improvement opportunity on complaint rather than suggestion; stand-up grumbling changes nothing, whereas "could we automate these?" might. The distinguishing behaviour between D and B, worth noting in a debrief, is constructive ownership: not just enduring a problem honestly, but proposing a way to make it better.

**Scenario 8 (moderate) — Least effective: an intermittent defect**

A candidate has twice seen the payment page freeze for about thirty seconds, but cannot make it happen reliably. Which response is **least** effective?

- A) Record what was observed, including both occasions, timings, and everything remembered about the conditions, and flag it to the mentor as intermittent.
- B) Not report it, because a defect that cannot be reproduced on demand would be embarrassing.
- C) Spend a limited, agreed amount of time trying to find a reproduction pattern, then report what has been found either way.
- D) Ask whether the team's logs or monitoring could show what happened at the times the freezes were observed.

**Least effective: B.**

**Explanation:** This question inverts the usual format — the candidate is looking for the worst response, so all four should be weighed before choosing. Option B is clearly the least effective: it suppresses a genuine observation because of how reporting it might feel. Intermittent defects are among the most dangerous kind — a payment page freezing intermittently could affect thousands of citizens at scale — and they are notoriously hard to reproduce; that is precisely why partial observations must be recorded rather than discarded. Professional teams expect reports like "seen twice, not yet reproducible, here's everything I observed" — that is a valuable report, not an embarrassing one. Options A, C and D are all effective and, in practice, combine well: A preserves the evidence, C invests bounded effort in reproduction (bounded matters — hunting indefinitely would be poor prioritisation), and D uses the team's engineering tools, which connects to the **Test engineering** understanding of why environments and tooling matter. This item tests courage in reporting: the duty to test outcomes and record defects includes the inconvenient, uncertain ones. When an SJT asks for "least effective", the answer is very often the option that hides information to protect feelings — a candidate's own or anyone else's — and a strong candidate's answer should recognise that pattern.

**Scenario 9 (hard) — Conflicting instructions**

A mentor asked a candidate this morning to spend today writing test cases for story S-31. At midday, a senior tester from another part of the team messages: "Drop that — I need you to retest a batch of fixed defects this afternoon, it's more urgent." The mentor is unreachable until 16:00. What is the most effective response?

- A) Ignore the senior tester — the mentor's instruction came first.
- B) Switch immediately — the senior tester outranks the mentor.
- C) Briefly explain to the senior tester what was asked, ask about the urgency to understand the priority, make a sensible judgement (likely helping with the urgent retests), send the mentor a short message explaining the change so they know when they surface, and return to S-31 afterwards.
- D) Do neither task well by alternating between them every twenty minutes.

**Most effective: C.**

**Explanation:** Conflicting instructions are a classic SJT scenario because there is no rule that resolves them — only judgement plus communication. Option C shows both: it surfaces the conflict to the person present (the senior tester may not know the candidate was mid-task), gathers the one fact that matters (how urgent, and why — perhaps a release depends on the retests), makes a defensible call, and crucially closes the loop with the mentor via a short message, so nobody is surprised at 16:00 and the S-31 work is consciously rescheduled rather than silently dropped. Options A and B both resolve the conflict by rank alone, in opposite directions — and both skip the communication that makes any choice safe. Rank is not a prioritisation algorithm; urgency, impact, and commitments are. Option D is the worst of all worlds: context-switching every twenty minutes means slow, error-prone progress on both tasks — poor prioritisation dressed up as fairness. This item tests ownership (making a reasoned call rather than freezing), transparent communication (both instruction-givers end the day informed), and the associate-level wisdom of keeping a supervisor in the loop precisely when a decision had to be made without them.

**Scenario 10 (hard) — Pressure to soften a test report**

A candidate has drafted their first test summary for a feature: 34 tests executed, 29 passed, 5 failed, including one Severity 2 defect affecting screen reader users. A colleague suggests: "Maybe leave the accessibility one out of the summary — it makes us look bad, and hardly anyone uses screen readers anyway." What is the most effective response?

- A) Leave it out — team harmony matters most.
- B) Keep the defect in the summary, and explain to the colleague that accessibility failures affect real users who often have the least ability to work around them, and that the summary must reflect what testing actually found; if they disagree, suggest raising it with the team rather than editing the record.
- C) Keep it in the summary but bury it in a footnote where nobody will notice.
- D) Report the colleague to HR for suggesting it.

**Most effective: B.**

**Explanation:** This scenario stacks three pressures — social ("makes us look bad"), minimising ("hardly anyone"), and seniority-of-sorts (a colleague advising on a first summary) — against a clear professional duty: test reports must reflect what testing found. Option B holds the line on the record while engaging the colleague's reasoning respectfully. Both of the colleague's claims deserve the gentle correction option B offers: accessibility is a legal and moral obligation for government services, which must work for everyone, including disabled users — and "hardly anyone uses screen readers" is both factually wrong at population scale and morally beside the point, since the people who do rely on them completely. Note also option B's ending: if disagreement persists, the route is an open team conversation, not a private edit. Option A trades users' interests for comfort. Option C is a subtler version of the same failure — technically present, practically hidden is not honest reporting; where a defect appears in a summary is part of what the summary communicates. Option D leaps to the most severe escalation for what is, most likely, a thoughtless suggestion best addressed by a direct, professional conversation first — proportionality is itself part of what this item tests. The behaviours mapped: integrity of records, user focus (especially for users who are easily overlooked), courteous challenge, and proportionate escalation.

**Scenario 11 (hard) — Improving a process as the newest person**

After a month in the team, a candidate notices that defects regularly bounce back from developers marked "cannot reproduce", usually because reports are missing environment details. The team's defect template does not ask for environment information. The candidate is the newest and most junior member. What is the most effective response?

- A) Say nothing — process change is not an associate's business.
- B) Start adding environment details to personal reports, and at the next retrospective, share the pattern noticed with a suggestion: adding an environment field to the template might reduce the bounce-backs.
- C) Change the team's shared defect template personally without asking.
- D) Email the head of profession recommending the team improve its defect process.

**Most effective: B.**

**Explanation:** The role explicitly includes seeking to improve testing practices, and this item tests whether a candidate can do that with the humility and evidence appropriate to being new. Option B is the model: lead by doing (the candidate's own reports improve immediately, quietly demonstrating the fix works), bring data rather than opinion (the bounce-back pattern is observable and countable), and use the team's own improvement forum — the retrospective exists precisely for this. A suggestion framed as "I noticed a pattern; would this help?" from the newest member is almost always welcomed, and often especially credible because fresh eyes see what veterans have stopped noticing. Option A wastes a genuine insight on a false belief — improvement suggestions are everyone's business in a healthy team, and the role summary says so explicitly. Option C has the right idea and the wrong method: shared artefacts belong to the team, and unilateral changes — even good ones — bypass the consent that makes process stick. Option D catapults a team-level suggestion several levels up the organisation, which embarrasses the team and marks the sender as someone who escalates before talking; escalation paths are for issues the team cannot resolve, and this is not one. The behaviours mapped: continuous improvement, evidence over assertion, respect for team ownership, and proportionate routing — quietly one of the most predictive judgement patterns this section measures.

**Scenario 12 (hard) — Most and least effective: end-of-day defect discovery**

At 16:45 on the day before a planned release, a candidate finds a defect: uploaded documents over 5MB fail silently — the page shows success, but the document is not saved. Citizens are known to use this feature to submit evidence. The mentor has left for the day; the delivery manager is still in the office. Consider these responses:

1. Record the defect fully now, with clear reproduction steps and the user impact, then tell the delivery manager in person before they leave, so tonight's release decision is made with full information.
2. Record the defect and plan to mention it at tomorrow morning's stand-up, after the release.
3. Decide it is probably rare for citizens to upload files over 5MB, and log it as low priority without telling anyone today.
4. Message the mentor's personal phone repeatedly until they respond.

Which is the most effective response, and which is the least effective?

- A) Most: 1; Least: 3
- B) Most: 1; Least: 4
- C) Most: 2; Least: 3
- D) Most: 4; Least: 2

**Most effective: 1. Least effective: 3.**

**Explanation:** Take the responses one at a time. Response 1 is clearly most effective: the defect silently loses citizens' evidence documents — a serious, user-harming failure — and a release decision is imminent; the person who owns that decision is present and must have this information tonight. Recording first (so the facts are precise) and then speaking in person (so the urgency lands) is exactly right, and it respects the role's boundary: the tester is not deciding whether to release — they are ensuring the decider knows. Response 2 records honestly but times the communication after the decision it should inform, which defeats the purpose of testing; a defect report that arrives after the release is history, not information. Response 3 is the least effective: it makes a risk-acceptance decision ("probably rare") that is far above an associate's authority, on no evidence, and then compounds it with silence — silent failures that destroy user data are precisely the defects that severity processes exist to escalate. Response 4 has the right instinct (urgency) aimed at the wrong target with the wrong intensity: the mentor has left; the delivery manager is present and is the actual decision-maker; and repeatedly ringing a personal phone is disproportionate when a better route exists. Comparing 3 and 4: response 4 is clumsy but is at least trying to escalate a serious issue; response 3 actively buries it — burying beats bothering for "least effective". This item tests user focus, honest and timely escalation, knowing decision boundaries, and choosing the escalation route that actually reaches the decision.

### Preparation tips

- **Anchor scoring on the organisation's stated values, then check for them in a candidate's choices.** UK government digital teams prize user focus, honesty about problems, collaboration, and inclusion. High-scoring responses usually serve users and surface truth; low-scoring ones usually protect comfort or hide information.
- **Credit asking well at this level.** Responses that consult a mentor at the right moment, with a specific question, generally beat both silent struggling and immediate escalation to senior people. "With support" is in this role's description on purpose, and your scoring should reflect that.
- **Read every option before scoring.** SJT options are often all plausible; the differences are in timing, audience, and tone. The best response is frequently "the honest thing, said to the right person, at the right moment, calmly" — check a candidate's justification reflects that, not just the letter they picked.
- **Watch for the two classic traps in a candidate's answer.** Trap one: the option that avoids awkwardness by staying silent. Trap two: the option that escalates dramatically past the person the candidate should simply talk to. Effective responses usually live between them.
- **Score authentic judgement over rehearsed answers.** SJTs are designed to catch inconsistency; a candidate's reasoning across several scenarios should hang together, and you should note if it does not.
- **Use the debrief to connect scenarios to the candidate's own experience.** Asking a candidate to recall a similar real moment, however small, tells you more about their judgement than the multiple-choice answer alone.

### Common pitfalls

- **Rewarding silence mistaken for kindness.** Withholding a defect, a mistake, or a concern to spare feelings (the candidate's own or others') is the most consistently penalised behaviour in SJTs — and the most damaging in real testing, where information is the entire product of the work. Do not let a soft-sounding answer read as diplomatic when it is actually silence.
- **Confusing deference with professionalism when scoring.** Agreeing to skip tests or soften reports because a senior person asked is not respect; it is abandoning the role's purpose. The high-scoring pattern is polite honesty plus appropriate consultation — mark accordingly even where a candidate frames deference as good manners.
- **Rewarding escalation that skips the conversation.** Going to managers, HR, or heads of profession before talking directly to the person involved usually scores poorly, unless the issue is serious misconduct. Most problems are one respectful conversation away from resolution.
- **Missing when an answer plays outside the role's decision boundary.** Fixing code, accepting risks, or changing agreed approaches unilaterally are decisions this level does not own. Recognising the boundary — and informing the person who does own the decision — is the skill being tested, so mark down an answer that quietly exceeds it.
- **Treating "least effective" questions carelessly when marking.** Candidates often pick a merely clumsy option over a genuinely harmful one. Rank the harm: hiding information and burying risks usually beats awkwardness for "least effective", and your own key should reflect that ranking.
- **Losing sight of the user as the tiebreaker.** In scenario after scenario, the tiebreaker between plausible options is which one protects the citizen using the service. When a candidate's answer is ambiguous, check which response serves the person the service exists for, and score with that in mind.

## Conclusion

You have now worked through the four assessment types most relevant to the associate quality assurance test analyst role with your candidate: cognitive ability exercised on test case names, results tables, and defect logic; numerical reasoning applied to pass rates, defect counts, and simple estimates; verbal reasoning tested against test approaches, release emails, and standards extracts; and situational judgement examined through the awkward, human moments of testing life — defects found at bad times, disagreements, mistakes, and pressure to cut corners.

A consistent thread runs through all four sections, and it is worth naming when you debrief the candidate: none of this is separate from the job. The habits that earn marks in this assessment — read the rule completely, check every condition, deduce only what the evidence supports, sanity-check the numbers, use only what the passage says, tell the right person the truth at the right time — are precisely the habits that make an excellent quality assurance test analyst. Score the candidate's performance against that thread as much as against individual right answers.

When scoring, work section by section against the worked answers above, and note not just whether an answer matches the key but how the candidate reasoned their way there — the explanation is often more informative than the verdict, particularly in the verbal and situational judgement sections where a close call can be argued either way. Because this is an associate-level assessment, calibrate your judgement to what a beginner in the role can reasonably be expected to know: a candidate who asks good questions, checks their own work, and reasons carefully from what they are given is showing exactly the professional judgement this level requires, even where a specific answer is wrong.

Keep your scoring notes and the candidate's raw answers on file, consistent with your organisation's recruitment and record-keeping policies, so the assessment can be reviewed if challenged. At debrief, share the areas of strength and the areas of concern candidly, using the explanations above to show your reasoning; a candidate who understands why an answer was scored as it was leaves with useful feedback even if unsuccessful.

Administer this assessment identically for every candidate for this role level: the same items, the same time limits, and the same conditions, so that no candidate is advantaged or disadvantaged by variation in delivery. Remember throughout that this is one input among several — alongside interview, portfolio evidence, and references — and, as the advisory above states, it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Used consistently and interpreted carefully, it gives you a structured, comparable signal about how a candidate reasons, calculates, reads, and judges — nothing more, and nothing less.
