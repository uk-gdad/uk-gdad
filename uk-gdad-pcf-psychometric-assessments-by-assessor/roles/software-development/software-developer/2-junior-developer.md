# Junior Developer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for junior developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a junior developer, that means practical, everyday thinking: the assessments described here are job-specific, using artefacts the role genuinely handles — user stories, test suites, code review comments, integration diagrams, sprint boards, and monitoring dashboards — and decisions genuinely made by someone learning on the job by delivering software components, working under supervision to deliver stories in a multidisciplinary team, becoming proficient in different types of testing, and beginning to coach and mentor colleagues more junior than themselves.

At this level, how a candidate thinks, learns, and judges situations predicts their trajectory better than their current technical knowledge. The material tests careful reasoning, precise reading, numerical comfort, and situational judgement under supervision.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Expect a wide range of prior test-taking exposure at this level, and brief every candidate on the format with the same ungraded warm-up before timed sections begin. Score for whether a candidate concludes only what a rule, test result, or passage actually guarantees, rather than what is merely plausible or matches their own experience — several items are deliberately built so an overconfident conclusion is the wrong one. Situational judgement items at this level consistently reward raising a problem, a mistake, or a concern early, through the supervision structure, rather than working alone in silence; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles — test suites, branching rules, interface contracts, sprint boards, log files — that ask a candidate to reason about them quickly and accurately.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

This is used for junior developers because the core work at this level is structured thinking under guidance: decomposing stories into steps, reasoning about what each test type can and cannot prove, holding several constraints in mind at once, and understanding how rules interact across a system boundary.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (software engineering)** and **Systems design**: spotting recurring structures — naming conventions, repeated code shapes, common failure patterns.
- **Logical deduction** maps to **Modern development standards** and testing proficiency: working out exactly what follows from a rule or a test result, and what does not.
- **Error checking** maps to **Service support** and **Programming and build**: spotting the precise difference between what is and what should be.
- **Prioritisation** maps to delivering stories under supervision in a multidisciplinary team: choosing what to do first, what to raise, what can wait.
- **Applied problem solving** maps to **Systems integration** and **Prototyping**: decomposing an unclear problem into checkable steps.

### Practice questions

**Question 1 (easy) — Pattern recognition in branch names**

Convention: `<type>/<ticket>-<short-description>`, type being `feature`, `bugfix`, or `chore`. Branches: (1) `feature/ABC-101-add-export-button`; (2) `bugfix/ABC-114-fix-date-format`; (3) `feature/add-search-ABC-120`; (4) `chore/ABC-131-update-dependencies`. Ask which branch breaks the convention.

- A) Branch 1
- B) Branch 2
- C) Branch 3
- D) Branch 4

**Correct answer: C**

**Explanation:** Branch 3 puts the description before the ticket, inverting the required order even though all elements are present. This tests spotting a structural inversion — right pieces, wrong order — which matters because tools linking branches to tickets often parse the name, and a misordered branch can silently break traceability.

**Question 2 (easy) — Logical deduction about test types**

Testing guide: "Unit tests verify a single component in isolation. Integration tests verify that components work together. A passing unit test suite does not guarantee that components work together." All unit tests pass this morning. Ask which conclusion must be true.

- A) The components work together correctly.
- B) The integration tests will pass.
- C) Each tested component behaves correctly in isolation, as far as its tests check.
- D) There are no bugs in the system.

**Correct answer: C**

**Explanation:** The guide explicitly rules out A (isolation success does not guarantee cooperation), B predicts a different suite's results with no evidence, and D claims far more than any test suite can establish. This tests recognising exactly what a passing suite proves, phrased carefully with "as far as its tests check" — the reasoning behind why teams need both unit and integration tests.

**Question 3 (easy) — Error checking a data mapping**

Specification: `customer_id → clientRef`, `postcode → postCode`, `date_of_birth → dob`, `email → emailAddress`. Implemented: `customer_id → clientRef`; `postcode → postcode`; `date_of_birth → dob`; `email → emailAddress`. Ask how many implemented mappings differ from the specification.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Only the second mapping differs — `postcode` versus the specified `postCode`, a one-letter difference most systems treat as a completely different field. This tests comparing pairs character by character rather than skimming for approximate similarity, since integration defects are frequently born exactly this way — a receiving system silently ignoring an unrecognised field name.

**Question 4 (easy) — Prioritisation of a junior developer's morning**

At 9:15: (1) the overnight build is red, with the candidate's story from yesterday one of three changes in it; (2) stand-up at 9:45; (3) a mentored apprentice's first pull request, to look at "when you have a moment"; (4) the candidate's own next story, waiting to start. Ask for the most sensible order.

- A) 4, 1, 2, 3 — start your story while your energy is high
- B) 1, 2, 3, 4 — investigate the red build first, attend stand-up, then the apprentice's review, then your story
- C) 3, 1, 2, 4 — mentoring always comes first
- D) 2, 4, 1, 3 — wait for stand-up to discuss the build

**Correct answer: B**

**Explanation:** A red build blocks the team and the candidate's own change is a suspect, so it comes first; stand-up is fixed and also a place to report findings; the apprentice's flexible request fits right after. This tests ranking by team impact and fixed commitments rather than personal convenience (A), a rigid rule (C), or needlessly delaying action (D).

**Question 5 (moderate) — Pattern recognition in failing tests**

Nightly failures over five nights: 0, 3 (export module), 0, 3 (export module), 0. Export tests call another team's reporting service. Ask for the most reasonable first hypothesis.

- A) The export code has a permanent bug that appears every night.
- B) The failures are intermittent and correlate with something that varies — for example, the reporting service's availability on alternate nights.
- C) The test framework randomly fails three tests at a time.
- D) Someone is deleting the export tests on alternating nights.

**Correct answer: B**

**Explanation:** The same three tests fail together in one module, but only on some nights — an intermittent pattern pointing to a varying external factor, most plausibly the dependency on another team's service. This tests reading the shape of the data (A cannot explain the passing nights) rather than an unevidenced explanation (C, D).

**Question 6 (moderate) — Logical deduction from a deployment policy**

Policy: "A change may be deployed to production only if it has passed the staging tests and been approved by the service owner. Emergency security patches are exempt from service owner approval but still require staging tests." A change was deployed this morning. Ask which conclusion must be true.

- A) The change was approved by the service owner.
- B) The change passed the staging tests.
- C) The change was an emergency security patch.
- D) The change passed staging tests and was approved by the service owner.

**Correct answer: B**

**Explanation:** Both permitted routes to production require passing staging tests; only the normal route requires approval. This tests finding the condition common to every permitted route — A and C each assume one specific route, and D bundles in a condition the emergency route makes optional.

**Question 7 (moderate) — Error checking a capacity configuration**

Standard: "Each application server must have at least 4 GB of memory; the pool must contain at least 3 servers; total pool memory must be at least 16 GB." Pool: Server A 8 GB, Server B 4 GB, Server C 3 GB. Ask which requirements are breached.

- A) Only the per-server minimum.
- B) Only the total memory minimum.
- C) The per-server minimum and the total memory minimum.
- D) All three requirements.

**Correct answer: C**

**Explanation:** Server C breaches the 4 GB minimum; total memory (15 GB) breaches the 16 GB minimum; the server-count rule ("at least 3") is satisfied by exactly 3. This tests checking each clause of a compound standard independently, rather than assuming one failure means all fail (D) or misreading "at least 3" as excluding 3.

**Question 8 (moderate) — Problem solving in test-driven order**

Story: "Validate that uploaded CSV files have exactly 5 columns; reject others with a clear error message." Following a test-driven approach, ask for the best first step.

- A) Write the validation code, then write tests that match what the code does.
- B) Write a failing test that submits a 4-column file and expects rejection with the error message.
- C) Test manually with a few files, and add automated tests later if there is time.
- D) Ask the designers for the error message wording, and do nothing until it arrives.

**Correct answer: B**

**Explanation:** A test-driven approach expresses the requirement as a failing test before writing implementation code. This tests recognising that tests written to match existing code (A) merely document it, bugs included, while noting D correctly spots a dependency but responds by stopping entirely rather than proceeding with a placeholder and confirming in parallel.

**Question 9 (moderate) — Prioritisation during a service fault**

On support duty with a senior engineer; an alert fires for 20% error rate on document upload. Procedure: (1) acknowledge; (2) check dashboard; (3) capture error samples; (4) notify the service channel; (5) attempt remediation. Alert acknowledged, dashboard confirms errors. A product manager messages directly: "Is the upload service down? A stakeholder demo is in 10 minutes!" Ask what to do next.

- A) Stop the procedure and write the product manager a detailed reply about possible causes.
- B) Ignore the product manager entirely until the incident is resolved.
- C) Continue the procedure — capture error samples and notify the service channel, which will also answer the product manager — and send her a one-line pointer to that channel.
- D) Skip to the remediation step immediately, since the demo makes this urgent.

**Correct answer: C**

**Explanation:** Continuing the agreed procedure keeps the incident handled consistently, and step 4 (notifying the service channel) is itself the communication mechanism that also answers the product manager. This tests recognising that urgency argues for following the procedure crisply, not skipping evidence-gathering steps (D) or hand-writing bespoke speculation (A).

**Question 10 (hard) — Multi-step deduction about an integration failure**

System A sends records to a queue; System B reads the queue and writes to a database; a dashboard reads the database. Facts: (i) if A stops sending, the queue empties within 5 minutes; (ii) if B stops reading, the queue grows continuously; (iii) the dashboard shows data up to 30 minutes ago and nothing since; (iv) the queue length has been stable and normal for the last hour. Ask for the most strongly supported conclusion.

- A) System A stopped sending about 30 minutes ago.
- B) System B stopped reading the queue about 30 minutes ago.
- C) The problem is most likely between B's reading and the dashboard — for example B's database writes or the dashboard's reads — since the queue behaviour rules out A stopping and B stopping.
- D) The queue lost 30 minutes of messages.

**Correct answer: C**

**Explanation:** A stopping would empty the queue within 5 minutes (contradicted by iv); B stopping would grow the queue continuously (also contradicted); nothing suggests message loss. This tests eliminating options using each stated fact in turn, localising the fault to what remains — downstream of the queue — the reasoning method for narrowing an integration fault before touching anything.

**Question 11 (hard) — Applying a definition of done with interacting rules**

Definition of done: (i) code reviewed by at least one developer who did not write it; (ii) unit and integration tests written and passing; (iii) accessibility checks passed for user-facing changes; (iv) documentation updated for API changes. A pair-written story adds a field to a public API response, changes no screens; tests pass; the pairing partner reviewed the code as it was written; documentation is untouched. Ask which items remain outstanding.

- A) Nothing — pairing counts as review, and there were no user-facing changes.
- B) Documentation only.
- C) Review and documentation.
- D) Review, documentation, and accessibility checks.

**Correct answer: C**

**Explanation:** Tests pass (satisfied); no screens changed, so accessibility does not trigger (ruling out D); the API response change triggers documentation (outstanding); and as written, rule (i) requires review by someone who did not write the code — neither pairing partner qualifies under that exact wording, so review is also outstanding. This tests applying each clause exactly as stated rather than assuming a common practice (pairing as review) the definition does not actually state.

**Question 12 (hard) — Problem solving with a prototype decision**

Disagreement about caseworker search screen behaviour. Options: build the full feature (about 3 weeks); build a clickable prototype for research sessions next week (about 2 days); survey caseworkers; study last year's requirements document. Ask which option best resolves the disagreement, and why.

- A) Build the full feature — real software is the ultimate test.
- B) Build the clickable prototype — it tests actual behaviour with real users next week at low cost, turning opinions into evidence before committing 3 weeks.
- C) Run the survey — asking users what they want is always the most reliable evidence.
- D) Study the requirements document — it already states what users need.

**Correct answer: B**

**Explanation:** The disagreement is about user behaviour, and a fast, cheap prototype in front of scheduled research sessions gets behavioural evidence before a 3-week commitment. This tests matching the technique to the uncertainty — surveys (C) capture stated preference, which often differs from actual behaviour, and a year-old document (D) is doubly removed from current need.

### Administration tips

- Score for whether the candidate concludes only what a rule, test result, or set of facts actually guarantees, resisting a plausible but unproven claim.
- Note whether every clause of a compound rule or standard is checked independently, rather than one failure being assumed to contaminate the rest.
- Watch for whether the candidate uses elimination (ruling out what a fact contradicts) to localise a fault or narrow a conclusion.
- Score for whether prioritisation weighs team-blocking impact and fixed commitments over personal convenience or a fixed rule of thumb.
- Note whether the candidate applies a written rule exactly as stated, rather than substituting a common practice the rule does not actually permit.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that goes beyond what a passing test, a deployed change, or a stated fact actually establishes.
- Missing a near-identical detail (a single-character difference in a mapping or name) treated as immaterial.
- Rewarding a rule-check where one clause's failure is assumed to mean every clause failed, or vice versa.
- Accepting a prioritisation that favours personal task progress over a team-blocking issue.
- Missing when a candidate assumes an unstated exception or common practice applies to a rule that does not actually state it.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role's job actually produces — pass rates, velocity, defect counts, availability percentages, and capacity figures — through percentages, ratios, averages, rates, and table reading rather than advanced mathematics.

Typical format: an online, timed test of 20 to 35 minutes with 15 to 25 questions, most built around a small table or chart. A calculator is usually permitted.

This is used for junior developers because delivery runs on numbers: sprint planning uses velocity, quality tracking uses defect counts and pass rates, and services operate on availability percentages, error rates, and capacity figures.

### How this assessment maps to the role

- **Percentages and rates** map to **Availability and capacity management**: converting between availability percentages, downtime hours, error rates, and utilisation.
- **Reading tables and charts** maps to **Service support**: reading monitoring dashboards, ticket queues, and log summaries accurately.
- **Averages and trends** map to delivering stories in a multidisciplinary team: sprint velocity, cycle times, and defect trends.
- **Ratios and proportions** map to **Systems design** and **Systems integration**: load distribution and queue arithmetic.
- **Checking and estimating** map to **Programming and build** and testing proficiency: sense-checking magnitudes.

### Practice questions

**Question 1 (easy) — Test suite pass rate**

240 tests, 228 passed, 12 failed. Ask for the pass rate.

- A) 92%
- B) 94%
- C) 95%
- D) 96%

**Correct answer: C**

**Explanation:** 228÷240=95%. This tests basic percentage calculation, checkable by a second route (12÷240=5% failing, 100−5=95%).

**Question 2 (easy) — Sprint velocity average**

Five sprints: 21, 25, 18, 26, 25 story points. Ask for the mean velocity.

- A) 22
- B) 23
- C) 24
- D) 25

**Correct answer: B**

**Explanation:** Sum 115÷5=23. This tests basic averaging, distinguishing the mean from the mode (25, the most frequent value, the trap in D).

**Question 3 (easy) — Reading a ticket queue table**

Open tickets by age: Uploads (under 1 day: 4, 1–3 days: 6, over 3 days: 2); Payments (7, 3, 1); Search (2, 5, 4). Ask which service has the most tickets open for more than one day.

- A) Uploads
- B) Payments
- C) Search
- D) They are equal

**Correct answer: C**

**Explanation:** "More than one day" combines the last two columns: Uploads 8, Payments 4, Search 9. This tests translating a verbal condition into the correct subset of a table, rather than reading a single column or all three columns.

**Question 4 (easy) — Percentage of stories carried over**

16 planned, 12 completed, the rest carried over. Ask what percentage of planned stories was carried over.

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** (16−12)÷16=25%. This tests using the correct base ("of planned stories" means 16, not the completed count 12, which gives the trap answer 33% in D).

**Question 5 (moderate) — Availability target in downtime minutes**

99.5% availability target over a 30-day month (720 hours). Ask for the maximum downtime allowed, in hours and minutes.

- A) 1 hour 12 minutes
- B) 3 hours 36 minutes
- C) 7 hours 12 minutes
- D) 36 minutes

**Correct answer: B**

**Explanation:** 720×0.005=3.6 hours=3h36m. This tests converting a percentage carefully (0.5%=0.005, not 0.05) and converting decimal hours to minutes correctly.

**Question 6 (moderate) — Percentage change in response time**

API response time falls from 250ms to 180ms. Ask for the percentage decrease.

- A) 28%
- B) 30%
- C) 32%
- D) 39%

**Correct answer: A**

**Explanation:** (250−180)÷250=28%. This tests dividing by the original value — the trap (70÷180≈39%, option D) divides by the new value instead.

**Question 7 (moderate) — Error rate comparison across services**

Service X: 50,000 requests, 40 errors. Service Y: 8,000 requests, 12 errors. Ask which statement is correct.

- A) Service X has the higher error rate, because 40 errors is more than 12.
- B) Service Y has the higher error rate: 1.5 errors per 1,000 requests versus 0.8 per 1,000 for X.
- C) The services have equal error rates.
- D) Error rates cannot be compared across services of different sizes.

**Correct answer: B**

**Explanation:** X: 0.8/1,000; Y: 1.5/1,000. This tests converting to a common rate before comparing volumes that differ, rather than comparing raw counts (A) or giving up on comparison entirely (D).

**Question 8 (moderate) — Defect trend across releases**

Defects: 1.0→24, 1.1→18, 1.2→12, 1.3→9. Ask which statement best describes the trend.

- A) Defects fall by exactly 6 per release.
- B) Defects fall by exactly 25% per release.
- C) Defects are falling, but neither by a constant amount nor by a constant percentage.
- D) Defects fall by a constant third per release.

**Correct answer: C**

**Explanation:** Differences are −6, −6, −3 (breaking A); percentage falls are 25%, 33.3%, 25% (breaking B and D). This tests checking a claimed pattern against every data point, not just the first two — choosing the claim the data actually supports rather than an overstated one.

**Question 9 (moderate) — Capacity headroom calculation**

Peak load 1,200 rps; capacity 2,000 rps; traffic forecast to grow 30%. Ask whether capacity will still exceed forecast peak, and the utilisation at the new peak.

- A) Yes — new peak 1,560 rps, utilisation 78%
- B) Yes — new peak 1,440 rps, utilisation 72%
- C) No — new peak 2,160 rps exceeds capacity
- D) Yes — new peak 1,560 rps, utilisation 65%

**Correct answer: A**

**Explanation:** 1,200×1.3=1,560; 1,560÷2,000=78%. This tests applying a percentage increase correctly (B applies 20% instead of 30%) and dividing correctly for utilisation, recognising the shrinking headroom (from 40% spare to 22% spare) as an early-warning insight.

**Question 10 (hard) — Weighted pass rate across suites**

Unit: 500 tests, 98% pass. Integration: 200 tests, 94% pass. End-to-end: 50 tests, 80% pass. Ask for the overall pass rate across all 750 tests, to the nearest percent.

- A) 91%
- B) 93%
- C) 96%
- D) 97%

**Correct answer: C**

**Explanation:** Passes: 490+188+40=718; 718÷750≈96%. This tests computing from actual counts rather than averaging the three percentages unweighted (91%, the trap in A) — the overall rate should sit closer to 98% since the largest suite dominates.

**Question 11 (hard) — Queue drain time during an incident**

Queue holds 3,600 messages; arrivals continue at 20/minute; the restored consumer processes 80/minute. Ask how long until the queue is empty.

- A) 45 minutes
- B) 60 minutes
- C) 36 minutes
- D) 72 minutes

**Correct answer: B**

**Explanation:** Net drain rate 80−20=60/min; 3,600÷60=60 minutes. This tests using the net rate (processing minus arrivals), not the raw processing rate alone (the trap in A, which forgets continuing arrivals).

**Question 12 (hard) — Interpreting a burn-down with a scope change**

Sprint: 40 points over 10 days. After 6 days, 18 points done; an urgent 8-point story is added. Ask for the average daily rate needed for the remaining days, and how it compares with the rate achieved so far.

- A) 5.5 points/day needed, versus 3 points/day so far — nearly double the current rate.
- B) 7.5 points/day needed, versus 3 points/day so far — two and a half times the current rate.
- C) 4.4 points/day needed, versus 4 points/day so far — about the same.
- D) 5.5 points/day needed, versus 4.5 points/day so far — slightly faster.

**Correct answer: B**

**Explanation:** Remaining work = 40−18+8=30 points over 4 remaining days = 7.5/day, against 18÷6=3/day achieved so far. This tests correctly accounting for added scope (a common omission) and computing both figures for comparison — recognising 2.5× the demonstrated rate as a signal the plan is no longer realistic.

**Question 13 (hard) — Proportional allocation of regression tests**

180 tests split in proportion to hours: Asha 6, Ben 4, Chris 2. Ask how many tests Ben takes.

- A) 30
- B) 45
- C) 60
- D) 90

**Correct answer: C**

**Explanation:** 12 hour-parts total, 15 tests per part, Ben=4×15=60. This tests the standard ratio method, checkable by confirming all three shares (90, 60, 30) sum to 180.

### Administration tips

- Score for whether the candidate identifies the correct base or denominator from the question's wording before dividing.
- Note whether the candidate computes from actual counts when combining rates from groups of different sizes, rather than averaging percentages unweighted.
- Watch for whether a percentage change is measured against the original value, and a percentage increase applied correctly to the base.
- Score for whether a claimed trend or pattern is checked against every data point given, not just the first two.
- Note whether the candidate accounts for added or changed scope fully when recomputing a required rate.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of rates or percentages from groups of different sizes.
- Missing a percentage change computed against the new value instead of the original.
- Rewarding a claimed constant-amount or constant-percentage trend that a later data point actually contradicts.
- Accepting a queue or capacity calculation that ignores a continuing inflow or a scope change.
- Missing an answer read from the wrong column, row, or base in a table.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment checks whether a candidate can work out exactly what a piece of writing says, no more and no less — a ticket description, a coding standard, a testing policy, a README, a bug report, or library documentation, followed by statements to mark True (the passage says it), False (the passage says the opposite), or Cannot Say (the passage does not settle it either way).

Typical format: an online, timed test of 15 to 25 minutes with short passages and statements. Cannot Say is a genuine, confident answer whenever the passage does not contain the information, however plausible the statement feels from outside knowledge.

Two things matter particularly: "must", "should" and "may" mean different things in technical writing (must is a requirement, should a strong recommendation departable with good reason, may an option), and a candidate's own knowledge is the main trap — a statement can be true in real life and still Cannot Say if the passage never states it.

### How this assessment maps to the role

- **Reading standards precisely** maps to **Modern development standards**: applying principles under guidance starts with reading them correctly.
- **Reading tickets and specifications** maps to delivering stories in a multidisciplinary team.
- **Reading test documentation** maps to testing proficiency.
- **Reading security guidance** maps to **Information security**: using available controls.
- **Reading operational documentation** maps to **Availability and capacity management**.
- **Explaining things accurately to others** maps to coaching and mentoring more junior colleagues.

### Practice questions

*Passage A — for Questions 1 to 4*

"All code must be reviewed by at least one other developer before it is merged. Code that changes how users are authenticated must be reviewed by two developers, one of whom should be a senior developer. Reviewers must check that automated tests cover the change. Where a change is urgent and no second reviewer is available, a developer may merge with a single review, provided the change is re-reviewed within two working days. Changes to documentation only do not require review."

**Question 1 (easy)**

Statement: All code changes must be reviewed before merging.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The final sentence exempts documentation-only changes, contradicting "all." This tests reading to the end of a passage before answering — exceptions are usually placed at the bottom.

**Question 2 (easy)**

Statement: A change to how users log in needs two reviewers.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** "Authenticated" is the formal term for logging in, and the passage requires two reviewers for it. This tests straightforward matching of a paraphrase to the governing sentence.

**Question 3 (moderate)**

Statement: An authentication change must be reviewed by a senior developer.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage uses "should" for the senior-developer part, a recommendation rather than a requirement, in deliberate contrast to "must" used twice in the same sentence for other parts. This tests distinguishing "should" from "must" precisely — the most common way to lose marks in this section.

**Question 4 (moderate)**

Statement: If a change is urgent and only one reviewer is available, it can be merged and never looked at again.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The single-review merge is conditional on re-review within two working days. This tests recognising that a clause following "provided" is a condition attached to the permission, not an optional extra.

*Passage B — for Questions 5 to 8*

"The bug was reported by a user at 14:20. The support team reproduced it at 14:45 and passed it to the development team. A developer identified that the error occurs only when a customer's address contains an apostrophe. A fix was deployed at 16:30. The team has added a test covering addresses containing apostrophes. The same code path also handles addresses containing hyphens, which were not tested."

**Question 5 (easy)**

Statement: The bug was reported before the support team reproduced it.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** 14:20 precedes 14:45. This tests reading stated times rather than assuming sentence order reflects event order.

**Question 6 (moderate)**

Statement: The bug also affects addresses containing hyphens.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states hyphens share the code path and were not tested — a reason to be worried, not a stated fact about whether they are affected. This tests distinguishing "untested" from "broken", resisting a professionally sound but unstated inference.

**Question 7 (moderate)**

Statement: The fix was deployed less than three hours after the bug was reported.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** 14:20 to 16:30 is 2 hours 10 minutes. This tests doing the actual subtraction rather than estimating.

**Question 8 (hard)**

Statement: The developer found the cause of the bug before 16:30.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** A fix cannot be deployed for a cause not yet identified, and identification is described before deployment. This tests combining two stated facts into a necessary conclusion, rather than requiring an explicit timestamp.

*Passage C — for Questions 9 to 12*

"The library provides two functions for reading configuration. `readConfig` returns the configuration as a plain object and throws an error if the file cannot be read. `tryReadConfig` returns the configuration or, if the file cannot be read, returns null. Neither function validates the contents of the file. Both functions cache their result; a subsequent call returns the cached value without reading the file again. The cache can be cleared by calling `clearConfigCache`."

**Question 9 (easy)**

Statement: `tryReadConfig` throws an error when the file cannot be read.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** `tryReadConfig` returns null in that case; `readConfig` is the one that throws. This tests keeping two similarly-named functions' behaviours straight rather than conflating them.

**Question 10 (moderate)**

Statement: If the configuration file contains invalid values, `readConfig` will throw an error.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** `readConfig` throws only if the file "cannot be read"; the passage explicitly states neither function validates contents. This tests distinguishing an unreadable file from one with invalid contents — different failure modes the passage treats differently.

**Question 11 (moderate)**

Statement: Calling `readConfig` twice will read the file twice.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Both functions cache their result, and a subsequent call does not read the file again. This tests catching a caching detail easy to skim past in documentation but consequential in practice.

**Question 12 (hard)**

Statement: After calling `clearConfigCache`, a call to `readConfig` will return the current contents of the file.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states the cache can be cleared but never states what happens on the next call afterwards. This tests resisting a highly plausible, professionally reasonable inference the passage simply does not make explicit.

### Administration tips

- Score for whether the candidate reads to the end of a passage before answering, catching exceptions typically placed last.
- Note whether the candidate distinguishes "must" from "should" precisely, especially where both appear in the same passage.
- Watch for whether a candidate treats "untested" or "unstated" as equivalent to "broken" or "false".
- Score for whether the candidate can point to the specific sentence supporting a verdict, rather than reasoning from outside knowledge of how similar systems usually work.
- Note whether a candidate correctly follows a condition attached by "provided" or "unless" as part of a permission, not an optional addendum.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True on the strength of outside knowledge rather than the passage.
- Missing when a candidate reads "should" as "must" or vice versa.
- Rewarding a plausible-but-unstated inference marked True instead of Cannot Say.
- Accepting a verdict that misses an exception placed at the end of a passage.
- Missing when a candidate conflates two similar functions or rules described in the same passage.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment gives realistic situations from the role's working life and asks what the candidate would do — working under supervision, asking for help, receiving feedback, spotting something that looks wrong, and working with people from other disciplines.

Typical format: choosing the most and least effective response, or rating each, scored against a key built from experienced practitioners.

Three things explain most of the key at this level: asking for help early is a strength, not a weakness, since working under supervision is the arrangement working as designed; saying what a candidate does not know is safe and valuable; and raising a concern is welcome even when the candidate turns out to be wrong, since the occasional false alarm costs far less than an unmentioned real problem.

### How this assessment maps to the role

- **Working under supervision** maps directly to the role level's description.
- **Testing judgement** maps to understanding and being proficient in different types of testing.
- **Security awareness** maps to **Information security**: aware of, not responsible for, security.
- **Applying standards** maps to **Modern development standards** under guidance.
- **Working with other disciplines** maps to delivering stories in a multidisciplinary team.
- **Helping others** maps to coaching and mentoring more junior colleagues.

### Practice questions

**Question 1 (easy) — Stuck on a problem**

Stuck for most of the morning; the team is busy. Ask for the most and least effective response.

- Option A: Keep going; you should be able to work it out.
- Option B: Ask a colleague, saying briefly what you are trying to do, what you have tried, and where you are stuck — because a few minutes of someone's time now saves the rest of your day, and the summary makes it quick for them to help.
- Option C: Move to a different task and come back to it.
- Option D: Wait until the next stand-up to mention it.

**Most effective: B. Least effective: D.**

**Explanation:** A morning is long enough for a genuine attempt, and the three-part summary (what I'm doing, what I've tried, where I'm stuck) turns an interruption into a quickly answerable question. This tests recognising that waiting until stand-up (D) can waste a further whole day, while struggling alone (A) treats silence as a virtue it is not.

**Question 2 (easy) — Feedback on your code**

A senior developer leaves many comments on a pull request. Ask for the most and least effective response.

- Option A: Make all the changes without asking about them.
- Option B: Work through them, make the changes you understand, and ask about any you do not — because the reason behind a comment is the part that stops the same thing happening again, and reviewers expect questions.
- Option C: Explain why you did it your way.
- Option D: Ask a different colleague whether the comments are fair.

**Most effective: B. Least effective: D.**

**Explanation:** Understanding the reasoning is what prevents the same review recurring next time. This tests recognising that quietly checking a reviewer's fairness with someone else (D) goes around the person trying to help, worse than complying without understanding (A) or explaining a choice defensively as a first move (C).

**Question 3 (moderate) — Something looks wrong**

Unrelated code looks like it might have a bug, unconfirmed. Ask for the most and least effective response.

- Option A: Leave it; it is not your ticket and you might be wrong.
- Option B: Mention it to a colleague or raise it as a ticket, saying what you noticed and that you are not certain — because it takes a couple of minutes, and someone with more context can tell quickly whether it matters.
- Option C: Fix it as part of your current change.
- Option D: Investigate it thoroughly before saying anything.

**Most effective: B. Least effective: C.**

**Explanation:** Mentioning something with appropriate uncertainty attached costs almost nothing. This tests recognising that fixing unrelated code inside an unrelated change (C) muddles the review and commits to a fix nobody decided was needed, worse than leaving it unmentioned (A) or over-investigating alone (D).

**Question 4 (moderate) — Testing**

A change is finished and existing tests all pass. Ask for the most and least effective next step.

- Option A: Raise the pull request; the tests pass.
- Option B: Add tests covering the behaviour you just changed, and check what happens in the awkward cases — empty input, very long input, the error path — because passing existing tests shows you have not broken anything, not that your new code works.
- Option C: Test it manually in your local environment.
- Option D: Ask a colleague to test it.

**Most effective: B. Least effective: A.**

**Explanation:** Existing tests protect existing behaviour and say nothing about newly added behaviour. This tests recognising that a green build (A) is evidence about something the build never actually examined — the weakest option, since it treats absence of new evidence as proof.

**Question 5 (moderate) — A ticket you do not understand**

Unsure what a ticket is actually asking for. Ask for the most and least effective response.

- Option A: Start on the part you do understand and work the rest out as you go.
- Option B: Ask whoever wrote it what the user is trying to achieve — because a ticket is usually a short summary of a longer conversation, and the writer can explain the intent in two minutes.
- Option C: Make a sensible assumption and note it in the pull request.
- Option D: Ask a colleague what they think it means.

**Most effective: B. Least effective: A.**

**Explanation:** Asking the person who knows the intent, framed around what the user needs, gives the most useful basis for decisions the ticket does not spell out. This tests recognising that building part-understood, part-improvised work (A) risks a day's work being thrown away, worse than asking a colleague who is also guessing (D).

**Question 6 (moderate) — A security-looking problem**

Code appears to write user passwords into a log file; security is not the candidate's responsibility. Ask for the most and least effective response.

- Option A: Raise it straight away with your team lead or a senior developer, describing what you saw.
- Option B: Leave it; security is not your responsibility at your level.
- Option C: Fix it yourself.
- Option D: Add it to the backlog.

**Most effective: A. Least effective: B.**

**Explanation:** Being "aware of but not responsible for" security means raising what is seen, even without owning the fix. This tests recognising that "not my responsibility" (B) applies to who fixes it, not to who may mention a serious issue, worse than a slow backlog entry (D) or a well-meant but under-informed unilateral fix (C).

**Question 7 (hard) — A mistake you made**

A change made yesterday has caused a problem in a test environment; nobody has noticed. Ask for the most and least effective response.

- Option A: Tell your team now, say what you think happened, and fix it.
- Option B: Fix it quietly before anyone notices.
- Option C: Wait to see whether it causes an actual problem.
- Option D: Fix it and mention it at the next retrospective.

**Most effective: A. Least effective: C.**

**Explanation:** Prompt, honest disclosure lets someone assess whether the problem is bigger than it looks. This tests recognising that waiting to see (C) means the problem is eventually found by someone else with no context on the cause, costing the team far more than the original mistake — worse than a quiet fix (B) that at least resolves the symptom.

**Question 8 (hard) — Being asked something you do not know**

A product manager asks in a meeting whether something is technically possible; unsure. Ask for the most and least effective response.

- Option A: Say you are not sure, say what you would need to check, and offer to come back to them by a specific time.
- Option B: Say it is probably possible.
- Option C: Say you would need to ask a senior developer.
- Option D: Say you do not know.

**Most effective: A. Least effective: B.**

**Explanation:** Honesty, a concrete next step, and a committed time reads as competent and gives the product manager something to plan around. This tests recognising that a guess offered in a meeting (B) gets written down and planned against, worse than an honest "I don't know" (D) that at least leaves nothing false on the record.

**Question 9 (hard) — Helping someone newer than you**

A new starter asks how something works; only roughly known, not in detail. Ask for the most and least effective response.

- Option A: Tell them what you know, being clear about which parts you are confident on and which you are not, and point them at where to find more.
- Option B: Explain it as best you can.
- Option C: Send them to a senior developer.
- Option D: Offer to look into it and get back to them.

**Most effective: A. Least effective: B.**

**Explanation:** Labelling confidence levels lets the new starter know how much to rely on the answer. This tests recognising that a confidently delivered but uncertain explanation (B) is how wrong information spreads undetected — worse than deferring entirely (C) or offering to look into it (D), both of which are honest, just less immediately useful.

**Question 10 (hard) — Estimating**

Asked how long unfamiliar work will take. Ask for the most and least effective response.

- Option A: Give a range rather than a single number, say what you are unsure about, and offer to give a better estimate after a short look at the code.
- Option B: Give your best guess as a single number.
- Option C: Say you cannot estimate it.
- Option D: Give a generous estimate so you are safe.

**Most effective: A. Least effective: D.**

**Explanation:** An honest range with a stated uncertainty and an offer to refine it gives planners a genuine sense of scale. This tests recognising that padding an estimate to be safe (D) quietly distorts everyone else's planning and erodes trust in future estimates once the padding becomes visible — worse than a single-number guess (B) that at least states its actual belief.

**Question 11 (hard) — Disagreeing with a more experienced colleague**

A senior developer directs a particular approach; a better one seems apparent. Ask for the most and least effective response.

- Option A: Ask about it — explain the approach you had in mind and ask what you are missing — because you may be right, you may be missing context, and either way the question is a reasonable one to ask.
- Option B: Do it their way; they are more experienced.
- Option C: Do it your way and see if anyone notices.
- Option D: Ask another senior developer for a second opinion.

**Most effective: A. Least effective: C.**

**Explanation:** "What am I missing?" is honest, easy to ask, and easy to answer either way. This tests recognising that silently doing something different (C) causes confusion, wastes review time, and damages trust — worse than deferring without understanding why (B) or going around the person disagreed with (D).

**Question 12 (hard) — Too much work**

Given more work than can realistically be finished this sprint. Ask for the most and least effective response.

- Option A: Say so now, explain which items you think are at risk and why, and ask what the priority order is.
- Option B: Do your best and see how far you get.
- Option C: Work extra hours to get it done.
- Option D: Mention it at the end of the sprint if you have not finished.

**Most effective: A. Least effective: D.**

**Explanation:** Raising it at the start gives the team the chance to reprioritise while the information is still useful. This tests recognising that information arriving after the sprint (D) cannot change anything, worse than working extra hours to hide the problem (C), which is at least visible sooner even if unsustainable.

### Administration tips

- Score for whether a candidate's response involves timely disclosure — raising a problem, mistake, or concern as early as possible rather than delaying it.
- Note whether uncertainty is stated honestly (a range, a labelled confidence level, a committed follow-up time) rather than papered over with a guess or a generous estimate.
- Watch for whether the candidate uses the supervision structure appropriately (asking, informing, escalating) rather than working alone in silence or going around a colleague.
- Score for whether feedback or review comments are treated as something to understand, not merely comply with.
- Note whether a candidate distinguishes what a passing test or check actually established from what it did not.

### Common pitfalls to watch for when scoring

- Crediting a response that stays silent to avoid looking inexperienced.
- Missing when a candidate makes review changes without understanding the reasoning behind them.
- Rewarding an estimate padded "to be safe" over an honest range with stated uncertainty.
- Accepting a delayed disclosure (waiting for a stand-up, a retrospective, or the end of a sprint) as equivalent to a timely one.
- Missing when a candidate treats a passing existing test as evidence that new, untested behaviour is correct.

## Conclusion

This guide has worked through pattern and rule checking across branch names, test types, and capacity standards, applying compound rules clause by clause and eliminating options by testing them against every given fact; percentages, rates, weighted averages and ratios across pass rates, availability, and capacity, each checkable by a second method or a sanity check; the discipline of judging True, False and Cannot Say strictly from a passage, distinguishing "must" from "should" and "untested" from "broken"; and the situational judgement calls that define the junior stage — asking for help with a clear summary of what has been tried, raising a mistake or concern early and honestly, and giving an honest estimate or answer rather than a guess dressed as certainty.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward method and reasoning quality as much as the final choice, and this level in particular benefits from seeing exactly where a rule-check or a reading habit broke down. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
