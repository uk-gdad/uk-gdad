# Senior Developer (Management) - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior developer on the management track. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a senior developer on the management track, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — pull requests, CI/CD pipeline configurations, sprint boards, capacity dashboards, incident reports, test suites, integration plans, and design review notes — and decisions genuinely made by someone who plans and leads development across sets of related stories, coaches and mentors more junior colleagues, operates the production services their team builds, and finds ways to improve system robustness, resilience and stability.

At this level the role sits where hands-on engineering meets people leadership. A candidate still needs to reason about clean, secure, test-driven code and systems of medium risk and complexity — but also needs to take responsibility for understanding the whole system and teaching it to others, for reviewing other people's designs, and for representing the team when working with other disciplines to understand what needs to be built. Cognitive, numerical, verbal and situational judgement assessment map directly onto those demands, from spotting a logical flaw in a deployment plan to interpreting a capacity trend before it becomes an outage, from extracting precise meaning from a security standard to choosing the most effective response when a mentee is struggling or a release is at risk.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and verbal items for whether a candidate concludes only what the stated rules or facts actually guarantee — several items are built so that a plausible, experience-informed answer is the wrong one, because the given text does not support it. Numeric items reward the candidate who names each intermediate figure and checks it for plausibility, not just the one who reaches the right final number. Situational judgement items at this level consistently reward a response that develops or informs the person on the other side of the scenario — a mentee, a peer, a stakeholder — rather than one that resolves the problem alone, and one that surfaces a risk or a slipping estimate rather than absorbing it silently.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract shapes and number sequences. Instead of a generic intelligence test, it presents the candidate with the everyday materials of the job — version-control histories, pipeline configurations, dependency graphs, release plans, monitoring dashboards, coding standards, and review comments — and asks them to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately. Candidates are normally offered short, ungraded practice questions before the real test begins.

For a senior developer on the management track, cognitive ability is particularly relevant because the role's professional value increasingly comes from structured thinking applied at the level of the whole system rather than the single function: planning and leading development on sets of related stories means holding many moving parts in mind at once — which stories depend on which, which services integrate with which, where a design decision contradicts an agreed standard. The role also reviews the work of others, where the core skill is error checking: finding the inconsistency that everyone else has read past.

### How this assessment maps to the role

- **Pattern recognition** maps to **Availability and capacity management** and **Service support**: identifying capacity issues before they bite, and locating service faults quickly, both depend on spotting the anomaly in a wall of otherwise normal signals.
- **Logical deduction** maps to **Systems design** and **Systems integration**: designing systems of medium risk and complexity, defining the integration build, and co-ordinating build activities across systems all require reasoning validly from constraints to their necessary consequences.
- **Error checking** maps to **Programming and build (software engineering)** and **Modern development standards**: reviewing specifications and code, applying agreed standards, means spotting where an artefact quietly contradicts the rules it claims to follow.
- **Prioritisation** maps to planning and leading development on sets of related stories and to operating the production services the team builds: production incidents, sprint commitments, coaching conversations and governance requests compete for the same hours.
- **Applied problem solving** maps to **Development process optimisation** and **Prototyping**: decomposing a messy situation into a solvable structure.
- Throughout, **User focus** shapes what counts as the right answer: the best reasoning in this role keeps sight of the users the service exists for.

### Practice questions

**Question 1 (easy) — Pattern recognition in release tags**

The team tags releases using semantic versioning: MAJOR.MINOR.PATCH, where the patch number increments for fixes, the minor number increments (and patch resets to zero) for backwards-compatible features, and the major number increments (resetting the others) for breaking changes. A junior developer's release history reads: (1) 2.4.1; (2) 2.4.2; (3) 2.5.0; (4) 2.5.1; (5) 2.6.1. Assuming each tag was created in the order shown and each release was either a fix or a backwards-compatible feature, ask which tag breaks the versioning pattern.

- A) Tag 2
- B) Tag 3
- C) Tag 4
- D) Tag 5

**Correct answer: D**

**Explanation:** Walking the sequence against the rules: 2.4.1 to 2.4.2 is a valid patch increment; 2.4.2 to 2.5.0 is a valid feature increment; 2.5.0 to 2.5.1 is a valid fix. But 2.5.1 to 2.6.1 increments the minor version without resetting patch to zero — a feature release should have produced 2.6.0. This tests a positional consistency check against a stated convention rather than a general sense that the numbers are "going up" — a broken convention like this misleads every downstream consumer about what changed, and spotting the structural break quickly, rather than re-deriving each rule from scratch, is what the item rewards.

**Question 2 (easy) — Logical deduction from a branch protection policy**

Policy: "Every pull request merged to main must have at least two approving reviews, unless it is a hotfix approved by the on-call lead." The audit log shows a pull request merged to main yesterday with only one approving review. Ask which conclusion must be true.

- A) The team has breached its branch protection policy.
- B) The pull request was a hotfix approved by the on-call lead.
- C) Either the pull request was a hotfix approved by the on-call lead, or the policy was breached.
- D) The branch protection rules were misconfigured in the repository settings.

**Correct answer: C**

**Explanation:** The policy is a conditional rule with a single permitted exception, and the facts given do not establish whether the exception applies — the merge might have been a legitimate on-call hotfix (making B true and A false) or an ordinary change pushed through with too little review (making A true and B false). Neither A nor B must hold on its own, and D introduces a mechanism the stem never mentions. This tests deducing only what the information guarantees, resisting the temptation to accuse a colleague of a breach before checking whether the exception applied.

**Question 3 (easy) — Error checking a CI pipeline definition**

The team's agreed pipeline standard requires stages in this order: lint, unit tests, build, integration tests, security scan, deploy to staging. A colleague's proposed pipeline for a new microservice lists: lint, unit tests, build, security scan, integration tests, deploy to staging. Ask which statement best describes the discrepancy.

- A) The pipeline is missing a required stage.
- B) Two adjacent stages are in the wrong order.
- C) The pipeline contains a stage the standard does not allow.
- D) The pipeline fully complies with the standard.

**Correct answer: B**

**Explanation:** Comparing the lists position by position: stages 1 to 3 match; the standard requires integration tests before security scan, but the proposal has them swapped. Nothing is missing and nothing extra has been added, so A and C are wrong, and D fails because order is part of the standard. This tests a positional walk-through rather than an impressionistic read — the trap is checking only whether all six familiar names appear, which is exactly how ordering errors survive review.

**Question 4 (moderate) — Prioritisation across delivery and people duties**

At 9:15 on a Monday morning, four items compete for attention: (1) the monitoring dashboard shows the payments service's error rate has risen from 0.1% to 2% over the past hour, with no alert yet fired; (2) sprint planning starts at 10:00, with the candidate due to present the proposed breakdown of the next set of related stories; (3) a mentee has asked for urgent feedback on a pull request they want to merge today; (4) the delivery manager needs input to the quarterly capacity report by Friday. Ask which sequencing is most defensible.

- A) 2, 1, 3, 4 — the meeting is closest in time, so prepare for it first
- B) 1, 2, 3, 4 — investigate the production anomaly first, then planning, then the review, then the report
- C) 3, 1, 2, 4 — unblock the mentee first because coaching is a core duty
- D) 1, 3, 2, 4 — production first, then the mentee, skipping preparation for sprint planning

**Correct answer: B**

**Explanation:** Item 1 is both urgent and high impact: a twenty-fold error-rate rise on a payments service signals a fault that may already be affecting users, and operating the production services the candidate builds means triaging first, even before an alert fires. Item 2 is next, time-anchored at 10:00 with the whole team's week depending on it. Item 3 matters, but "wants to merge today" is a preference rather than a production deadline, and a same-day review after planning still meets it. Item 4 has days of slack. This tests sequencing by impact-weighted urgency rather than proximity to the current time (A), a fixed rule of thumb elevating one duty above a live service risk (C), or abandoning a leadership commitment that ten minutes of preparation would meet (D).

**Question 5 (moderate) — Logical deduction about integration sequencing**

Defining the integration build for three services: (i) the notifications service cannot be integrated until the identity service is integrated; (ii) the reporting service must be integrated in the same phase as the notifications service or a later phase; (iii) each phase integrates exactly one service; (iv) there are exactly three phases. Ask which of the following must be true.

- A) The identity service is integrated in phase 1.
- B) The reporting service is integrated in phase 3.
- C) The notifications service is integrated in phase 2.
- D) All of A, B and C must be true.

**Correct answer: D**

**Explanation:** With one service per phase across three phases, all three are integrated in some order. Constraint (i) puts identity strictly before notifications; constraint (ii) puts reporting at or after notifications, but "same phase" is impossible under one-service-per-phase, so reporting comes strictly after notifications too. That forces the order identity → notifications → reporting, pinning each to phases 1, 2 and 3 respectively — so A, B and C are each individually necessary, and the answer is D. This tests recognising when a constraint set fully determines a schedule rather than stopping at the first option that must be true.

**Question 6 (moderate) — Pattern recognition in a capacity trend**

Weekly peak memory usage for a production service over eight weeks, as a percentage of the container limit: 58, 61, 59, 63, 66, 65, 70, 73. The service is restarted during each fortnightly deployment. Ask for the most reasonable first interpretation.

- A) Normal fluctuation — the figures move up and down, so no action is needed.
- B) An upward trend of roughly 2 percentage points per week that will approach the limit within weeks and warrants investigation now.
- C) A memory leak is confirmed, and the container limit should be doubled immediately.
- D) The monitoring data is unreliable because usage should be flat.

**Correct answer: B**

**Explanation:** Week to week the figures wobble by a point or two, but the trend is unmistakably upward — from 58 to 73 is 15 percentage points over seven intervals, roughly 2 points per week, with the last three readings the three highest. Option A pattern-matches on local wobble and misses the drift; option C over-concludes, since the growth survives fortnightly restarts in aggregate terms and is equally consistent with organic traffic growth; option D mistakes an unwelcome pattern for a broken instrument. This tests separating signal from noise and recognising a trend that calls for investigation while there is still headroom.

**Question 7 (moderate) — Error checking a story dependency board**

A sprint board for a set of related stories shows: Story A ("Create consent API") must finish before Story B ("Consent UI") and before Story C ("Consent audit log"); Story D ("Migrate legacy consent records") must finish before Story C. The board records: B "In progress", A "In progress", C "Done", D "Done". Ask which single status is impossible if the dependency rules were respected.

- A) A "In progress"
- B) B "In progress"
- C) C "Done"
- D) D "Done"

**Correct answer: C**

**Explanation:** D "Done" violates nothing, having no prerequisites; A "In progress" is fine in itself; B "In progress" is worth a second look but teams often start UI work against a stubbed API. C "Done" requires both A and D finished, and A is still in progress, so C cannot legitimately be complete — on a strict reading of "must finish before", C's completion is flatly contradictory. This tests reading statuses against dependency rules rather than trusting a board's columns at face value, and precisely parsing "finish before" language.

**Question 8 (moderate) — Deduction from a feature flag policy**

Rollout policy: (i) a feature flag may only be enabled in production after it has been enabled in staging for at least three days; (ii) any flag enabled in production must have a named owner; (iii) flags with no activity for 90 days must be removed. The "instant-payout" flag was enabled in staging on Monday morning and has a named owner; today is Wednesday afternoon of the same week. A product manager requests enabling it in production now, arguing "it has an owner, so we're compliant." Ask which response is logically correct.

- A) Enabling it now complies, because rule (ii) is satisfied.
- B) Enabling it now breaches rule (i), because staging exposure is roughly two and a half days, not at least three.
- C) Enabling it now breaches rule (iii).
- D) The rules conflict, so none of them can be applied.

**Correct answer: B**

**Explanation:** Rule (ii) is satisfied, but that is necessary rather than sufficient. Rule (i) requires at least three days in staging, and Monday morning to Wednesday afternoon is about two and a half days, so the condition fails. Rule (iii) concerns stale flags and is irrelevant to a flag created this week, and nothing conflicts. This tests separating independent rules and checking each rather than accepting a partial-compliance argument that cites the rule satisfied while omitting the one that is not.

**Question 9 (challenging) — Multi-constraint release scheduling**

Scheduling three activities in one working week (Monday to Friday, one per day): the database migration (M), the API release (R), and the integration test run (T). Constraints: (i) M must happen on an earlier day than R; (ii) T must happen on the day immediately after R; (iii) the change advisory board only permits migrations on Tuesdays and Thursdays; (iv) Friday is a change-freeze day — no migrations, releases, or test runs. Ask on which day R must take place.

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) It cannot be scheduled within these constraints.

**Correct answer: B**

**Explanation:** Anchoring on the most constrained activity: rule (iii) allows M only Tuesday or Thursday. If M is Thursday, rule (i) pushes R to Friday at the earliest, which rule (iv) bans — this case fails, so M must be Tuesday. R can then be Wednesday, Thursday or Friday under rule (i), with Friday removed by rule (iv). Testing Thursday: rule (ii) forces T onto Friday, which rule (iv) also bans — so R must be Wednesday, with T on Thursday. This tests enumerating the options of the most constrained item and eliminating cases by propagating consequences, confirming the survivor against every rule.

**Question 10 (challenging) — Fault isolation by elimination**

A nightly batch job has failed three nights running. Facts: (i) the job succeeds every night in staging, which runs identical code; (ii) the failures began the night after a production-only configuration change to database connection pooling; (iii) the job fails at a different record each night; (iv) re-running the failed job manually each morning succeeds. Ask which hypothesis best fits all four facts.

- A) A bug introduced in the latest code release.
- B) A data quality problem with specific bad records.
- C) Resource contention in production during the nightly window, aggravated by the connection pool change.
- D) A hardware fault on the production database server.

**Correct answer: C**

**Explanation:** A code bug is undermined by fact (i) — identical code succeeds in staging — and by fact (iv), since the same code succeeds in the morning. Bad records would fail deterministically at the same record each run, contradicting facts (iii) and (iv). A hardware fault does not explain the timing tied to the pooling change (ii) or the quiet mornings (iv). Resource contention aggravated by the pooling change fits every fact: production has nightly load staging lacks, the change altered behaviour under that load, contention strikes non-deterministically, and the quiet morning window succeeds. This tests testing every candidate hypothesis against every given fact, not just some of them.

**Question 11 (challenging) — Applied problem solving: on-call rota constraints**

Constructing next month's on-call rota for four developers — Priya, Sam, Tomás, and the candidate — over four consecutive weeks, one person per week. Constraints: (i) the candidate is on a residential leadership course in weeks 3 and 4, so can only take week 1 or week 2; (ii) Priya, the newest developer, must take the week immediately after the candidate's, for handover support; (iii) Priya's week must be one in which Sam is in the office for second-line cover, and Sam is on leave all of week 2; (iv) Tomás took the final on-call week last month and the team's no-consecutive-weeks rule means he cannot take week 1. Ask who must take week 1.

- A) Priya
- B) Sam
- C) Tomás
- D) The candidate

**Correct answer: B**

**Explanation:** Anchoring on the most constrained person — the candidate, restricted to week 1 or 2 by (i). Testing week 1: constraint (ii) puts Priya in week 2, but constraint (iii) bars Priya from week 2, since Sam is on leave and cannot provide cover — this case collapses. So the candidate takes week 2, and Priya takes week 3. That leaves weeks 1 and 4 for Sam and Tomás; constraint (iv) bars Tomás from week 1, so Sam takes week 1. This tests case-splitting on the most constrained element and propagating each choice through the remaining rules until a contradiction eliminates a branch.

**Question 12 (challenging) — Deduction across the whole system**

A service comprises a frontend, an API, a queue, and a worker: (i) if the queue is unhealthy, the worker cannot process jobs; (ii) if the worker cannot process jobs, user-facing exports are delayed; (iii) exports are currently delayed; (iv) the frontend and API dashboards are green. A stakeholder concludes: "Exports are delayed, so the queue must be unhealthy." Ask which statement about this reasoning is correct.

- A) The conclusion is valid: delayed exports imply an unhealthy queue.
- B) The conclusion is invalid: delayed exports are consistent with an unhealthy queue, but could have other causes, such as the worker failing while the queue is healthy.
- C) The conclusion is invalid because the green dashboards prove the queue is healthy.
- D) The conclusion is valid because rules (i) and (ii) chain together.

**Correct answer: B**

**Explanation:** Rules (i) and (ii) chain into "unhealthy queue → delayed exports". The stakeholder reasons in reverse — from delayed exports back to an unhealthy queue — the fallacy of affirming the consequent, since the worker could be crashed, misconfigured, or starved of capacity while the queue itself is healthy, with (ii) firing just the same. Option C over-reads the dashboards, which say nothing about the queue. This tests recognising the direction of implication and enumerating candidate causes of an observed symptom rather than reasoning backwards from a consequence to a single assumed cause.

### Administration tips

- Score for whether the candidate deduces only what a stated rule or set of facts guarantees, resisting a plausible-but-unproven claim.
- Note whether the candidate anchors scheduling and sequencing questions on the most constrained element before working outward.
- Watch for whether a deduction is verbalised as an explicit chain, rather than arrived at by an unstated leap.
- Score for whether the candidate tests a hypothesis against every given fact before selecting it, rather than the first plausible one.
- Note whether prioritisation weighs impact-weighted urgency across all items rather than proximity in time or a fixed rule of thumb.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that pattern-matches to familiar real-world experience rather than following the facts given in the scenario.
- Missing when a candidate treats "could be true" as "must be true".
- Rewarding a status or artefact read at face value rather than checked against the rule it claims to follow.
- Accepting a schedule that ignores a stated constraint (a scarce resource, a freeze window) in favour of the first workable-looking option.
- Missing a reverse inference — reasoning from a consequence back to a single assumed cause without ruling out the alternatives.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role genuinely produces. It is not a mental arithmetic contest: a calculator is almost always permitted, and the numbers themselves are rarely difficult. What is tested is whether the candidate selects the right operation, keeps track of units and denominators, reads tables and charts accurately, and resists the numerically plausible but wrong conclusion.

Typical format: an online, timed test of 20 to 35 minutes, usually 15 to 25 questions, each presenting a small data set — a table, a chart, or a short scenario with figures — followed by multiple-choice options. Percentages, ratios, averages, rates of change, and simple projections dominate, and most platforms report accuracy and speed separately.

For a senior developer on the management track, numeric reasoning is the daily language of the decisions the role leads. Sprint capacity is arithmetic over person-days; availability targets are percentages of elapsed time; capacity planning is compound growth against a fixed limit; error budgets, defect densities, test pass rates, build durations, and cloud costs are all numbers whose misreading has real consequences.

### How this assessment maps to the role

- **Percentages and proportions** map to **Availability and capacity management**: availability targets, utilisation percentages, and headroom calculations are the core arithmetic of identifying capacity issues and initiating remedial action before they become incidents.
- **Averages and weighted averages** map to **Programming and build (software engineering)** and planning and leading development on sets of related stories: velocity, defect density, and test pass rates are all averages, and knowing when a mean misleads is what keeps sprint commitments honest.
- **Rates and throughput** map to **Systems integration** and **Service support**: migration run-times, queue drain rates, and batch windows are rate problems.
- **Trends and projections** map to finding ways to improve system robustness, resilience and stability: reading an incident trend and projecting traffic growth against capacity are how stability work is shown to be paying off.
- **Cost and efficiency figures** map to **Development process optimisation**: identifying process optimisation opportunities almost always ends in a number that has to be computed correctly.
- **Interpreting data about users** maps to **User focus**: completion rates, error rates and response-time percentiles are how user needs show up in dashboards.

### Practice questions

**Question 1 (easy) — Average sprint velocity**

A team's completed story points over the last five sprints: 42, 38, 45, 40, 35. Ask for the team's mean velocity per sprint.

- A) 38 points
- B) 39 points
- C) 40 points
- D) 42 points

**Correct answer: C**

**Explanation:** Sum 200, divided by 5, gives 40. This tests basic averaging, checkable by noting the mean must sit within the range 35–45, which 40 comfortably does.

**Question 2 (easy) — Availability against an SLA**

A service has a 99.5% monthly availability target, and in a 30-day month was down for 190 minutes. Ask how many minutes of downtime the target permits, and whether the service met it.

- A) 216 minutes permitted; target met with 26 minutes to spare
- B) 216 minutes permitted; target missed by 26 minutes
- C) 144 minutes permitted; target missed by 46 minutes
- D) 43.2 minutes permitted; target missed by 146.8 minutes

**Correct answer: A**

**Explanation:** A 30-day month has 43,200 minutes; the target allows 0.5% downtime, so 0.005 × 43,200 = 216 minutes permitted; 190 is less than 216, so the target was met with 26 minutes to spare. Option D is the allowance for a 99.9% target instead of 99.5% — each additional "nine" shrinks the allowance sharply, and this tests catching that substitution.

**Question 3 (easy) — Defect density**

A team delivered 450 story points last quarter, with 18 defects attributable to that work. Ask for the defect density per 100 story points.

- A) 2.5 defects per 100 points
- B) 4 defects per 100 points
- C) 18 defects per 100 points
- D) 25 defects per 100 points

**Correct answer: B**

**Explanation:** 18 ÷ 450 = 0.04, scaled to per-100 gives 4. This tests normalising a count by output rather than reading it in isolation — raw defect counts mislead, since a team that delivered more work will usually log more defects.

**Question 4 (moderate) — Percentage improvement in build time**

Average CI build time fell from 14 minutes to 10.5 minutes after a pipeline optimisation. Ask for the percentage reduction.

- A) 20%
- B) 25%
- C) 33%
- D) 35%

**Correct answer: B**

**Explanation:** (14 − 10.5) ÷ 14 = 25%. Dividing by the new value instead gives 3.5 ÷ 10.5 = 33.3% (option C), the percentage by which the new build would need to grow to return to the old time, not the reduction achieved. This tests always dividing by the original value in a percentage-change calculation.

**Question 5 (moderate) — Projecting traffic against capacity**

Current peak load is 1,200 requests per second, load testing shows degradation beyond 2,000 rps, and peak traffic is growing 15% per quarter. Ask which quarter from now peak traffic will first exceed capacity, assuming continued growth.

- A) The second quarter
- B) The third quarter
- C) The fourth quarter
- D) The sixth quarter

**Correct answer: C**

**Explanation:** Compounding 15% per quarter: 1,380 → 1,587 → 1,825 → 2,099, the first figure above 2,000, in quarter 4. This tests applying compound rather than simple growth — simple growth (adding 15% of the original each time) wrongly suggests the limit survives four quarters — and translating the arithmetic into an operational conclusion: remedial work should land within three quarters, not four, to leave headroom before the breach.

**Question 6 (moderate) — Sprint capacity with absences**

Planning a two-week sprint for six developers, each normally contributing 8 productive days. One developer is on leave for 5 days; another works half-time throughout. Historical delivery rate is 1.2 story points per person-day. Ask for the largest whole number of story points the sprint plan should commit to within capacity.

- A) 39 points
- B) 46 points
- C) 48 points
- D) 58 points

**Correct answer: B**

**Explanation:** Baseline 48 person-days, minus 5 for leave, minus 4 for the half-time developer's reduction, gives 39 person-days; 39 × 1.2 = 46.8, rounded down to 46 since committing to 47 would exceed capacity. This tests converting absences correctly into person-days before applying the rate, and rounding down for a capacity commitment rather than up.

**Question 7 (moderate) — Weighted average test pass rate**

A test estate contains 1,200 unit tests at 98% pass rate, 300 integration tests at 92%, and 100 end-to-end tests at 85%. Ask for the overall pass rate, to one decimal place.

- A) 91.7%
- B) 95.0%
- C) 96.1%
- D) 98.0%

**Correct answer: C**

**Explanation:** A simple average of the three rates (91.7%, option A) is wrong because the suites are different sizes. Weighting by count: 1,176 + 276 + 85 = 1,537 passes out of 1,600 tests = 96.1%. This tests weighting by volume rather than averaging rates unweighted — and, in a strong candidate's answer, reporting the breakdown as well as the headline, since the healthy large unit suite masks 15 failing end-to-end tests that most likely represent broken user journeys.

**Question 8 (moderate) — Reading an incident trend table**

Monthly production incident counts before and after a resilience improvement programme completing end of March: Jan 12, Feb 15, Mar 9, Apr 8, May 7, Jun 6. Ask for the percentage reduction between the pre-improvement quarterly mean (Jan–Mar) and the post-improvement quarterly mean (Apr–Jun), to the nearest percentage point.

- A) 33%
- B) 42%
- C) 50%
- D) 58%

**Correct answer: B**

**Explanation:** Pre-improvement mean: 36 ÷ 3 = 12; post-improvement mean: 21 ÷ 3 = 7; reduction (12 − 7) ÷ 12 = 41.7% ≈ 42%. This tests comparing quarterly means rather than cherry-picking single months — March's 9 against June's 6 gives a flattering but noisy 33% — since monthly counts are volatile and averaging over the quarter smooths that noise.

**Question 9 (challenging) — Error budget consumption**

A service has a 99.9% availability objective over a rolling 30-day window, with two outages this window of 18.4 and 10.4 minutes. Ask what percentage of the error budget remains.

- A) 66.7% remains
- B) 43.2% remains
- C) 33.3% remains
- D) 14.4% remains

**Correct answer: C**

**Explanation:** The budget is 0.1% of 43,200 minutes = 43.2 minutes; downtime consumed is 28.8 minutes, or 66.7% of the budget; remaining is 33.3% (equivalently 14.4 minutes). Option A is the consumed fraction, not the remaining one — this tests reading the question stem precisely, since "remaining" and "consumed" answers typically both appear among the options, and option D confuses minutes with percentage.

**Question 10 (challenging) — Cloud cost comparison**

Current cost: 4 instances at £0.32 per instance-hour. Proposed: 3 instances of a newer type at £0.24 per instance-hour. Using a 730-hour month, ask for the monthly saving and the percentage of current cost it represents.

- A) £408.80 saving; 43.75%
- B) £408.80 saving; 56.25%
- C) £233.60 saving; 25.0%
- D) £525.60 saving; 43.75%

**Correct answer: A**

**Explanation:** Current: 4 × £0.32 × 730 = £934.40; proposed: 3 × £0.24 × 730 = £525.60; saving £408.80, which is 408.80 ÷ 934.40 = 43.75% of current cost. Option B pairs the right saving with the wrong percentage (the new cost as a share of the old); option D reports the new cost as though it were the saving. This tests keeping "what is now paid", "what would be paid", and "the difference" as three distinct labelled figures.

**Question 11 (challenging) — Migration throughput**

Migrating 90,000 records: Script A processes 400 records/minute; after 30 minutes, Script B may start in parallel at 200 records/minute, and both then run together until completion. Ask for the total elapsed time.

- A) 2 hours 30 minutes
- B) 2 hours 40 minutes
- C) 3 hours 0 minutes
- D) 3 hours 45 minutes

**Correct answer: B**

**Explanation:** Phase 1 (Script A alone, 30 minutes): 12,000 records, leaving 78,000. Phase 2 (both scripts, 600 records/minute): 78,000 ÷ 600 = 130 minutes. Total: 30 + 130 = 160 minutes = 2 hours 40 minutes. This tests breaking a rate problem into phases with different combined rates rather than applying a single rate throughout — option D is the single-script time for the whole job.

**Question 12 (challenging) — Mean versus median lead time**

Five completed stories' cycle times, in days: 2, 3, 3, 4, 21 (the last blocked two weeks awaiting an external dependency). A delivery manager asks for "the typical cycle time" for a forecast. Ask which figure best answers the question, and what the two candidate values are.

- A) The mean, 6.6 days; the median is 3 days
- B) The median, 3 days; the mean is 6.6 days
- C) The mean, 4.4 days; the median is 3.5 days
- D) The median, 4 days; the mean is 8.25 days

**Correct answer: B**

**Explanation:** Mean: 33 ÷ 5 = 6.6 days; median (middle of five sorted values): 3 days. The 21-day story is an outlier with a known special cause, dragging the mean to more than double what four of the five stories actually took, so the median is the honest answer for "typical" — this tests both computing each statistic correctly and judging which one the question actually calls for, plus, in a strong answer, flagging the outlier and its cause as management information in its own right.

### Administration tips

- Score for whether the candidate re-derives a weighted average from underlying counts rather than averaging rates or averages unweighted.
- Note whether a percentage change is measured consistently against the original value, not the new one.
- Watch for whether compound growth is applied where growth is stated per period, rather than simple growth.
- Score for whether the candidate labels each intermediate figure (allowed, actual, saving, new cost) rather than working purely by feel.
- Note whether the candidate reads the question's exact framing — remaining versus consumed, mean versus median — rather than substituting a more familiar statistic.

### Common pitfalls to watch for when scoring

- Crediting a percentage change computed against the new value instead of the original.
- Missing an average of averages across groups of unequal size.
- Rewarding simple growth applied where the scenario states compound, per-period growth.
- Accepting a mean cited as "typical" where an outlier with a known special cause makes the median the more honest answer.
- Missing when a candidate fails to notice a "remaining" or "consumed" distractor sitting among the options.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role requires reading — and, just as importantly, how well they resist reading in things that are not there. The classic format presents a short passage followed by statements to be judged **True** (the passage guarantees it), **False** (the passage contradicts it), or **Cannot say** (the passage neither guarantees nor contradicts it). Variants include inference questions, main-point questions, and clear-writing judgements.

Typical format: an online, timed test of 15 to 30 minutes with 20 to 40 short items. In a job-specific version, passages are drawn from the role's professional world: coding standards, security policies, service standards, incident reports, governance emails, and technical documentation.

For a senior developer on the management track, this assessment mirrors a striking amount of the real work: reading specifications collaboratively and reviewing them for gaps; applying and teaching modern development standards, with their load-bearing distinctions between must, should and may; operating production services under change freezes and security advisories, where misreading one qualifier can turn a permitted action into a breached control; and translating dense policy into something a junior developer or a non-technical stakeholder can act on without losing the meaning in transit.

### How this assessment maps to the role

- **Literal comprehension** maps to **Modern development standards** and **Programming and build (software engineering)**: applying standards begins with reading normative text at exactly its stated strength.
- **True/False/Cannot-say discipline** maps to **Information security** and **Service support**: the difference between "the policy forbids this" and "the policy does not mention this" determines what may happen next.
- **Inference** maps to **Systems design** and working with other disciplines to understand what needs to be built: requirements documents rarely state everything explicitly.
- **Clear-writing judgement** maps to teaching the whole system to others, coaching and mentoring more junior colleagues, and **User focus**: choosing the version of a message a mixed audience will actually understand.
- **Consistency checking across documents** maps to **Development process optimisation**: spotting that a team wiki contradicts a published policy is often the first step in identifying a process improvement.

### Practice questions

For each True/False/Cannot-say question, the candidate is asked to judge the statement strictly against the passage.

**Question 1 (easy) — Reading a coding standard**

Passage: "All new services must be written with automated tests. Unit tests must run on every commit. Integration tests must run at least once per day. Teams should aim for unit test execution to complete within ten minutes; where this is not achievable, the team must record the reason in the service's technical documentation." Statement: "Integration tests must run on every commit."

- A) True
- B) False
- C) Cannot say
- D) True, but only for new services

**Correct answer: C**

**Explanation:** The passage requires integration tests "at least once per day" — a floor, not a ceiling. Running them on every commit would satisfy that requirement but is not required by it, and the passage does not contradict the statement either. This tests distinguishing "the standard permits X" from "the standard requires X" — a distinction a candidate applying modern development standards will need to hold when a junior colleague reads a floor as a ceiling or vice versa.

**Question 2 (easy) — Comprehension of an open-source policy**

Passage: "Departmental source code is open by default. Teams must publish new code in the open unless it relates to unreleased policy, security controls whose disclosure would create vulnerabilities, or algorithms used for fraud detection. Where code is withheld, the team must record the exemption and review it every twelve months, because exemptions are expected to be temporary." Statement: "A team withholding fraud-detection code from publication is required to review that decision annually."

- A) True
- B) False
- C) Cannot say
- D) False — fraud-detection code must always be published

**Correct answer: A**

**Explanation:** Fraud-detection algorithms are a listed exemption ground, and the passage requires review "every twelve months" wherever code is withheld — matching "annually" in the statement. Both links are explicit, so the statement is guaranteed. This tests recognising a faithful paraphrase as still True, and knowing precisely when an "open by default" position may be set aside and what follows it.

**Question 3 (easy) — Main point of an incident email**

Email extract: "Team — following Tuesday's payments outage, the post-incident review identified that the alert for queue depth had been silenced during a previous maintenance window and never re-enabled. The fix took 18 minutes once the fault was located, but location took 74 minutes because we were blind to the queue. I have re-enabled the alert and added a weekly audit of silenced alerts to the run book. Please treat silenced alerts as changes that need an owner and an expiry, like feature flags." Ask for the main point of this email.

- A) The payments outage lasted 92 minutes in total.
- B) Silenced alerts must be treated as owned, expiring changes, because an orphaned silence caused most of the outage's duration.
- C) The queue depth alert has been re-enabled.
- D) The fix for the outage took only 18 minutes.

**Correct answer: B**

**Explanation:** Every option is textually accurate, so this is a weighting test rather than a truth test: the email's structure builds a case (silenced alert → blindness → 74 of 92 minutes) that exists to justify the closing instruction. This tests distinguishing the point an author wants the reader to act on from the supporting or flattering details around it — the same test a candidate applies when writing their own post-incident emails.

**Question 4 (moderate) — Cannot-say discipline with a security policy**

Passage: "Critical security patches must be applied to internet-facing services within 5 working days of vendor release. For internal services, critical patches must be applied within 10 working days. High-severity patches must be applied within one month regardless of exposure. The security team may, on written request, extend any deadline where patching would disrupt a live service event, provided compensating controls are in place." Statement: "A team that applied a critical patch to an internet-facing service 8 working days after release has breached the policy."

- A) True
- B) False
- C) Cannot say
- D) True, unless the patch was high-severity

**Correct answer: C**

**Explanation:** The default rule gives 5 working days, and 8 exceeds it — but the final sentence allows the security team to extend any deadline on written request with compensating controls, and the statement gives no information about whether that happened. This tests recognising an exception clause that neither confirms nor rules out a breach, the same shape as the feature-flag question in the cognitive section, and asserting "breach" before checking an exception is both a reasoning error and a relationship error in real security work.

**Question 5 (moderate) — Inference from a service standard extract**

Passage: "Teams must understand users and their needs, and should conduct research with participants who reflect the diversity of actual and intended users, including people with access needs and people with low digital confidence. Research findings must inform what the team builds. Where a team cannot recruit participants with particular access needs, it must state this limitation alongside its findings." Ask which conclusion is best supported.

- A) Research that omits participants with access needs is prohibited.
- B) The standard treats research findings as binding decisions that teams must implement without change.
- C) The standard anticipates that recruiting participants with particular access needs will not always be possible, and requires transparency when it is not.
- D) Teams with experienced designers are exempt from user research.

**Correct answer: C**

**Explanation:** Conducting research with diverse participants is a should, not an absolute, and the final sentence explicitly provides for recruitment failure by requiring disclosure — exactly what C states. Option A over-reads a disclosure requirement as a prohibition; option B inflates "findings must inform" into "findings are binding"; option D has no textual basis. This tests working from the exact strength of the passage's verbs to draw only the conclusion the text supports.

**Question 6 (moderate) — Clear-writing judgement for a mixed audience**

A status update for a service review attended by policy colleagues and a delivery manager first reads: "We remediated the N+1 query pathology in the eligibility microservice's ORM layer, yielding a p95 latency delta of −640ms." Ask which rewrite best serves this audience while staying accurate.

- A) "We fixed a database performance problem in the eligibility service. The slowest typical responses are now about two-thirds of a second faster."
- B) "We optimised the object-relational mapping layer to eliminate redundant query executions, reducing 95th-percentile latency by 640 milliseconds."
- C) "We made the eligibility service much better."
- D) "Following remediation activity, latency metrics have improved in line with expectations."

**Correct answer: A**

**Explanation:** A translates every technical element into plain terms while keeping both facts that matter — what was fixed and how much users gain. B is accurate but merely re-states the jargon more grammatically; C drops both facts; D is vague and evasive-sounding. This tests judging clear writing by completeness and accuracy for the stated audience, not formality — a skill this role uses whenever it teaches the whole system to others or works with other disciplines to understand what needs to be built.

**Question 7 (moderate) — True/False/Cannot-say on a testing policy**

Passage: "The department follows a test-driven approach. Developers write a failing test before writing the code that makes it pass, then refactor. Code reviews must confirm that tests exist and meaningfully exercise the change. Pair programming satisfies the review requirement, provided the pair records their session in the pull request description. Test coverage percentage is reported for information but no minimum threshold is mandated, because coverage figures can be gamed and high coverage does not guarantee meaningful tests." Statement: "A change developed by a pair that recorded their session in the pull request description requires no further code review."

- A) True
- B) False
- C) Cannot say
- D) False — all changes require an independent reviewer

**Correct answer: A**

**Explanation:** The passage states pair programming "satisfies the review requirement, provided the pair records their session" — the statement's scenario meets exactly that proviso, so the statement is guaranteed. Option D imports a rule from outside the text that the passage explicitly replaces for the pairing case. This tests answering from the passage rather than a plausible real-world norm, and being able to quote the passage's own rationale (a gameable metric, coverage not equalling meaningfulness) against a proposal to mandate a coverage threshold.

**Question 8 (moderate) — Modal verbs in a change-freeze notice**

Notice: "A change freeze applies from 17:00 Friday until 08:00 Monday. During the freeze, production deployments must not take place. Emergency fixes may be deployed only with the approval of the on-call service manager. Teams should complete their final deployments by 15:00 Friday to allow rollback time. Documentation changes are exempt from the freeze." Ask which action would breach the notice.

- A) Deploying a routine feature at 16:30 Friday.
- B) Deploying an emergency fix at 22:00 Saturday with the on-call service manager's approval.
- C) Publishing updated API documentation at 10:00 Sunday.
- D) Deploying a routine feature at 18:00 Friday.

**Correct answer: D**

**Explanation:** A is before the freeze starts and only misses an advisory (should) guideline; B meets the conditional permission for emergency fixes; C is explicitly exempt; D falls inside the freeze, where deployments "must not" take place, with no exemption applying. This tests mapping each action to the notice's exact normative hierarchy — must not, may only with, should, exempt — and distinguishing an outright breach from a merely inadvisable action.

**Question 9 (challenging) — Identifying the unstated assumption**

A design review comment: "We should build the notification component in-house rather than adopt the cross-government notification platform, because our department's messages include appointment reminders, and missed-appointment costs are high, so we need delivery guarantees we fully control." Ask which unstated assumption the argument depends on.

- A) Missed appointments are costly to the department.
- B) The cross-government notification platform cannot provide, or cannot be relied upon to provide, the delivery guarantees the service needs.
- C) The department sends appointment reminders.
- D) Building in-house is always cheaper than adopting a platform.

**Correct answer: B**

**Explanation:** A and C are stated premises, not assumptions; D is not needed, since the argument is about guarantees rather than cost. The load-bearing gap is B: the conclusion only follows if the existing platform's guarantees are inadequate or untrustworthy, and negating B collapses the argument. This tests identifying a design argument's necessary but unexamined claim about the alternative it rejects — the highest-value contribution a reviewer of others' systems designs can make.

**Question 10 (challenging) — Consistency across two documents**

Document 1 (departmental policy): "Secrets, including API keys and database credentials, must never be stored in source code repositories, including private repositories. Secrets must be stored in the approved secrets management service and injected at deployment time." Document 2 (team wiki): "For local development convenience, developers may keep a .env file with real service credentials in the repository, provided the repository is private and the file is listed in the deployment ignore list." Ask which statement best describes the relationship.

- A) They are consistent, because the wiki only covers private repositories.
- B) They are consistent, because the wiki concerns local development, which the policy does not mention.
- C) The wiki contradicts the policy: the policy prohibits real credentials in any repository, private ones included, and the wiki permits exactly that.
- D) Cannot say without knowing whether the secrets management service supports local development.

**Correct answer: C**

**Explanation:** The policy's prohibition is explicitly universal over repository types, and the wiki permits real credentials in a private repository — the precise case the policy names and forbids. Its conditions (private repo, ignore list) narrow the practice but cannot license it. This tests finding drift between two governing documents at their stated scope, a skill spanning information security, standards adherence, and process improvement — the fix is not just deleting the wiki page but providing the compliant path that made the shadow practice attractive.

**Question 11 (challenging) — Precise reading of accessibility requirements**

Passage: "Public sector websites and mobile applications must meet the WCAG 2.2 AA standard and must publish an accessibility statement. The statement must list any parts of the service that are not accessible, explain the reason, and describe planned remediation with dates, unless remediation would be a disproportionate burden, in which case the statement must explain the assessment behind that claim. Publishing an accessibility statement does not by itself make a service compliant." Statement: "A service that publishes a complete and honest accessibility statement thereby meets its accessibility obligations."

- A) True
- B) False
- C) Cannot say
- D) True, provided the statement includes remediation dates

**Correct answer: B**

**Explanation:** The passage sets out two distinct obligations — meeting the standard, and publishing a compliant statement — and closes off exactly the conflation the statement attempts: publishing a statement "does not by itself make a service compliant." This tests catching a subtle trap where required is mistaken for sufficient, and reading a closing sentence that directly contradicts an otherwise plausible-sounding claim.

**Question 12 (challenging) — Choosing the best summary**

A post-incident review paragraph: "The deployment tooling permitted a release while the database migration from the previous release was still running. The new code assumed the migrated schema, and requests that touched unmigrated rows failed. The rollback restored the old code but the half-completed migration left the table in a mixed state, extending recovery. We will add a deployment gate that verifies migration completion, and we will require all migrations to be backwards-compatible for at least one release cycle." Ask which summary best captures the lesson for a junior developer to take away.

- A) "Rollbacks don't work, so we should avoid them."
- B) "The outage happened because a release ran before its predecessor's migration finished; the fixes make that impossible (a completion gate) and make it survivable if it recurs (backwards-compatible migrations)."
- C) "Database migrations are risky and should be avoided where possible."
- D) "The deployment tooling was at fault, and it has now been fixed."

**Correct answer: B**

**Explanation:** B preserves the causal chain and the defence-in-depth logic of both remedies — the gate prevents the trigger, and backwards-compatible migrations remove the fragile assumption so a gate failure would not strand the service. A over-generalises from one hard rollback; C draws a lesson of avoidance where the review's own remedy is safer practice; D keeps only one fix and frames the incident as a tooling story alone. This tests summarising under fidelity constraints — a skill exercised whenever a candidate teaches the whole system to others, since the version of an incident the team remembers is the version told.

### Administration tips

- Score for whether the candidate treats Cannot Say as a genuine, comfortable third verdict rather than defaulting to True or False.
- Note whether the candidate reads modal verbs (must, should, may, unless) and exception clauses precisely.
- Watch for whether the candidate answers from the passage alone, resisting substitution of their own professional knowledge of "how this really works".
- Score main-point and summary items on whether the candidate identifies what the author wants the reader to act on, not merely an accurate supporting detail.
- For assumption items, check whether the candidate can justify the answer by negation — does the argument collapse without it.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of the candidate's own professional knowledge rather than the passage.
- Missing when a candidate treats a floor ("at least") as a ceiling, or a conditional permission ("may, with approval") as a requirement.
- Rewarding a breach verdict that ignores a stated exception clause.
- Accepting an accurate-but-minor detail as the main point over the passage's actual instruction or conclusion.
- Missing when a candidate is seduced by confident but empty phrasing in a clear-writing item.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios from this role and asks the candidate to identify effective and ineffective responses. For a senior developer on the management track, the scenarios involve planning and leading development across sets of related stories, coaching junior colleagues, operating the services the team builds, working with other disciplines, and holding quality when a date is under pressure.

The commonest formats ask for the most and least effective response, or a rating on a scale. Scoring is against a key derived from experienced practitioners at comparable levels — professional consensus rather than personal preference.

Three patterns run through the strong answers at this level. First, the candidate now owns outcomes produced by other people, which changes what a good response looks like: doing the work themselves is usually the fastest way to today's result and the slowest way to a team that can produce it without them. Second, the role explicitly includes operating what is built, so reasoning about robustness, resilience and stability in the role summary is not abstract. Third, the candidate works with colleagues in other disciplines — user researchers, designers, content designers, product people — who hold information they do not, and responses that gather that perspective before deciding consistently score higher than ones that resolve alone.

### How this assessment maps to the role

- **Leading development across related stories** maps to this role level's planning and leadership responsibility.
- **Coaching** maps to coaching and mentoring more junior colleagues.
- **Operational judgement** maps to **Service support** and **Availability and capacity management**.
- **Design review** maps to **Systems design**, reviewing the designs of others.
- **Security judgement** maps to **Information security**.
- **Cross-discipline working** maps to **User focus** and **Prototyping**.

### Practice questions

**Question 1 (easy) — Quality under a deadline**

Two days before a release, meeting the date means skipping the integration testing the team normally does. Ask for the most effective response.

- A) Skip it and test after release.
- B) Set out what skipping it means in concrete terms — which integrations would go untested and what would fail if they are broken — and put the options to the product manager, including releasing a reduced scope that avoids the untested paths.
- C) Refuse to release without the testing.
- D) Do a quick partial test and release.

**Most effective: B. Least effective: A**

**Explanation:** The date belongs to the product manager, and the risk is theirs to weigh — the candidate's job is to make sure the decision is made with the consequence visible rather than made silently. Option B also surfaces the option most often missed under time pressure: reducing scope so the risky paths are not in the release at all. This tests whether the candidate makes a quality trade-off visible to the person who owns it, rather than deciding it invisibly (A), removing the decision-maker from their own decision (C), or deciding the risk level alone inside a reasonable-looking action (D).

**Question 2 (easy) — A junior colleague's pull request**

A junior developer's pull request works but takes a roundabout approach. Ask for the most effective response.

- A) Approve it; it works.
- B) Ask what led them to the approach before suggesting the alternative — they may have hit a constraint that is not visible, and if not, the reasoning behind the simpler route is the part worth transferring rather than the instruction.
- C) Tell them to use the simpler approach.
- D) Rewrite it yourself before merging.

**Most effective: B. Least effective: D**

**Explanation:** Option B costs one conversation and buys two things: the possibility the junior developer is right, and a developer who can make the judgement unaided next time. Option D removes the work and teaches nothing, signalling that their code becomes the reviewer's whenever there is disagreement. This tests whether the candidate coaches by transferring reasoning rather than bypassing the person or transferring only an instruction (C), which works exactly once.

**Question 3 (moderate) — An incident at 3am**

On call, a service the candidate built is failing and the cause is uncertain. Ask for the most effective first action.

- A) Investigate the cause so the right fix can be applied.
- B) Restore service first by whatever safe means exists — reverting the most recent change, failing over, restarting the affected component — and diagnose afterwards from preserved logs and metrics, because users are affected now and the diagnosis will still be available in the morning.
- C) Wake a colleague to help diagnose.
- D) Increase capacity in case it is load-related.

**Most effective: B. Least effective: D**

**Explanation:** Restoration and diagnosis are different activities, and doing them in the wrong order costs users directly; option B restores service and preserves the evidence needed for later diagnosis. Option D risks deepening the outage by scaling against a possibly-struggling dependency on an unconfirmed hypothesis. This tests the operational instinct to restore before diagnosing, distinguishing it from the developer's instinct to investigate first (A).

**Question 4 (moderate) — Reviewing another team's design**

Asked to review a thorough design from another team, the candidate has a concern about behaviour under load. Ask for the most effective response.

- A) Note the concern in the review comments.
- B) State the concern as a specific prediction — at roughly what volume the problem is expected, and by what mechanism — and ask what the other team expects to happen at that point, since a testable claim converts a difference of opinion into a question with an answer and leaves room to be wrong.
- C) Ask them to load test it.
- D) Approve it; it is their design.

**Most effective: B. Least effective: D**

**Explanation:** A specific, checkable prediction is the most useful contribution a reviewer can make: it teaches the reasoning and does not require either party to defer to the other. Option D declines the review that was actually requested. This tests whether the candidate reviews another team's systems design with a testable claim rather than a vague note (A) or an outright deferral (D).

**Question 5 (moderate) — A user researcher's finding**

A user researcher reports that people are struggling with a flow the team built and is confident works well. Ask for the most effective response.

- A) Ask the researcher for the details — what people were trying to do, where they got stuck, how many participants — since that determines whether the fix is the flow, its wording, or something earlier in the journey, and the answer is frequently not the part that was built.
- B) Accept the finding and change the flow.
- C) Ask about the sample size and methodology.
- D) Ask to observe the next research session.

**Most effective: A. Least effective: C**

**Explanation:** "People struggled" is a fact about their experience, not yet a diagnosis, and option A gets the specifics that distinguish a flow problem from a content problem or a problem earlier in the journey. Option C, querying methodology in reply to an unwelcome finding, is what defensiveness sounds like and is the fastest way to stop being included in research. This tests whether the candidate seeks specifics before accepting or disputing a research finding.

**Question 6 (moderate) — Planning related stories**

Planning a set of related stories, one of which carries most of the technical uncertainty. Ask for the strongest sequencing.

- A) Do the straightforward stories first to build momentum.
- B) Address the uncertain one first, or timebox a spike on it, because the uncertainty affects what the other stories should look like, and discovering that late means reworking the work done to build momentum.
- C) Do them in the order the product manager prioritised.
- D) Split the uncertain story into smaller ones.

**Most effective: B. Least effective: A**

**Explanation:** Uncertainty resolved early is cheap; resolved late, it is expensive, because everything built in the meantime rested on an assumption. Option A feels productive while maximising the amount of work exposed to the unknown. This tests whether the candidate sequences the technically uncertain work first rather than by an unrelated preference for early momentum.

**Question 7 (harder) — A security issue in a senior colleague's code**

Reviewing a pull request from a more senior developer, the candidate finds an injection vulnerability. Ask for the most effective response.

- A) Approve it and raise the issue separately.
- B) Block the merge and describe the specific vulnerability with the input that would exploit it, treating it as a normal review finding — the standard does not vary by author, and a concrete exploit is a technical observation rather than a comment on competence.
- C) Fix it yourself and merge.
- D) Ask a security specialist to review it.

**Most effective: B. Least effective: A**

**Explanation:** This is an ordinary review finding that only feels difficult because of seniority, and handling it as ordinary is both correct and the least awkward path available. Option A puts code with a known injection vulnerability into production, deferring the real conversation until after the risk is live. This tests whether the candidate applies a review standard consistently regardless of the author's seniority.

**Question 8 (harder) — Recurring production problems**

A service has had three incidents in two months, each with a different immediate cause. Ask for the most effective response.

- A) Fix each cause thoroughly.
- B) Look for what the three have in common — most often that these conditions were not detected before becoming user-facing failures — since three different causes producing three outages usually points at a single missing property rather than three unrelated faults.
- C) Add more alerting.
- D) Schedule a resilience review.

**Most effective: B. Least effective: A**

**Explanation:** Three unrelated causes with the same consequence usually share a property — no leading indicators, no bounded resource use, no isolation — and fixing that property covers the next three incidents as well. Option A, fixing each cause thoroughly and stopping there, resolves three specific faults while leaving the shared property that let them become outages entirely intact. This tests whether the candidate looks for a single systemic explanation behind repeated failures with different immediate causes.

**Question 9 (harder) — A team member struggling**

A developer on the team is producing work that needs consistent rework, and others are starting to route around them. Ask for the most effective response.

- A) Raise it with the candidate's own manager.
- B) Talk to them directly with specific examples and establish what is going on — a knowledge gap, an unclear brief, something outside work, or a genuine mismatch all look identical from outside and need entirely different responses — while recognising that the routing-around is a second problem needing action either way.
- C) Give them simpler work.
- D) Pair with them on everything.

**Most effective: B. Least effective: C**

**Explanation:** A response cannot be chosen without knowing the cause, and the person most likely to know has not been asked. Option C looks considerate but removes any route to improvement, is immediately obvious to the person, and confirms to the team that they are not to be relied on. This tests whether the candidate diagnoses before acting and names the secondary problem — colleagues routing around someone — rather than leaving it to harden into permanent exclusion.

**Question 10 (harder) — Technical debt nobody has asked about**

A component the team maintains is becoming difficult to change, but nothing is failing and the backlog is full. Ask for the most effective response.

- A) Improve it gradually alongside feature work.
- B) Make it visible with evidence — how much longer changes in that area take, how many recent incidents touched it, what it is blocking — and put it to the product manager as a prioritisation decision, since it competes for the same time as everything else and needs to be chosen rather than smuggled in.
- C) Raise it at a retrospective.
- D) Add refactoring tickets to the backlog.

**Most effective: B. Least effective: A**

**Explanation:** Evidence turns an engineering opinion into a decision someone can actually make. Option A, unsanctioned work done alongside sanctioned work, makes both slower, is invisible if it succeeds, and looks like a missed estimate if it does not. This tests whether the candidate brings evidence and routes a prioritisation decision to the person who owns it, rather than absorbing the cost silently.

**Question 11 (harder) — Disagreement with a designer**

A designer's proposed interaction would be expensive to build, and the candidate believes a simpler pattern would serve users equally well. Ask for the most effective response.

- A) Build the simpler pattern and explain afterwards.
- B) Describe the cost difference concretely and ask what the interaction is doing for users that the simpler pattern would not — the designer may be solving a problem invisible from the specification, and if not, the comparison can be made together.
- C) Build what was specified; design decisions are theirs.
- D) Ask the product manager to decide.

**Most effective: B. Least effective: A**

**Explanation:** Option B brings the information only the candidate has (the cost) and asks for the information only the designer has (what the interaction achieves) — the shape of a productive cross-discipline disagreement. Option A, quietly building something other than what was specified, is a decision made on the designer's behalf without telling them, and damages the working relationship more than a direct disagreement would. This tests whether the candidate resolves a cross-discipline disagreement collaboratively rather than unilaterally or by pure deference.

**Question 12 (harder) — An estimate that slipped**

Work estimated at a week is going to take three, and the candidate knew by day three; it is now day six. Ask for the most effective response.

- A) Tell the product manager now and explain the reasons.
- B) Tell them now, say what was known and when, and be specific about why it was not raised on day three — the delay in telling is the more consequential problem, and being honest about it is what makes the next estimate believable.
- C) Push hard to recover as much of the time as possible.
- D) Tell them now and commit to a firmer process for future estimates.

**Most effective: B. Least effective: C**

**Explanation:** The estimate being wrong is ordinary; the three days of silence is what costs, because it removed three days in which someone could have replanned. Option B addresses both the news and the delay, which is what distinguishes it from A, a report that presents the news as though it has just arrived. Option C, working harder in silence, is what produced the six days in the first place, substituting effort for the information other people needed. This tests whether the candidate reports a slipping estimate with an honest account of the timeline, not just the outcome.

### Administration tips

- Score for whether a response makes a quality or delivery trade-off visible to the person who owns the decision, rather than absorbing it silently.
- Note whether the candidate restores service before diagnosing in an operational incident, and diagnoses before acting on a people problem.
- Watch for whether design or research disagreements are turned into testable, checkable claims rather than opinion versus opinion.
- Score for whether the candidate looks for a shared underlying cause behind repeated, superficially unrelated failures.
- Note whether an estimate or a risk is reported with a full, honest timeline of what was known and when, not just the eventual outcome.

### Common pitfalls to watch for when scoring

- Crediting a response where the candidate rewrites or takes over a junior colleague's work rather than coaching through it.
- Missing when a candidate would diagnose during a live incident instead of restoring service first.
- Rewarding a response that questions research methodology defensively rather than seeking the specifics of an unwelcome finding.
- Accepting unsanctioned work — refactoring, a design change — done quietly alongside committed work as equivalent to a transparent, prioritised decision.
- Missing when a candidate discloses a slipping estimate late without an honest account of what was known and when.

## Conclusion

This guide has worked through reasoning across a whole system rather than a single component — how pieces interact, what fails when a dependency is slow rather than absent, and why three incidents with three different causes usually share one explanation; the arithmetic that supports the operational half of this role — availability figures, capacity headroom, error rates against real volumes, and the recurring lesson that an average across dissimilar things hides exactly the information needed; precise reading of specifications and standards, where must, should and may are terms of art and an exception stops exactly where it says it stops; and the situational judgement that defines this level — accountable for work other people do, operating what is built, and working with disciplines whose expertise is not the candidate's own.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — the strongest situational judgement answers are rarely the most decisive ones; they are the ones that get the right decision made by the right person with the information they need, and that build a team able to do it again without the candidate. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
