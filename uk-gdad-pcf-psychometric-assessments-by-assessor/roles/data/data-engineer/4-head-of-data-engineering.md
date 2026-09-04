# Data Engineer (Head of Data Engineering) - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for head of data engineering, within the UK Government Digital and Data profession. The material is job-specific: it presents what a head of data engineering genuinely handles — data models, integration standards, test reports, pipeline dependency maps, platform budgets, capacity figures, and stakeholder correspondence — and the judgements the role turns on, rather than abstract puzzles.

A head of data engineering leads multi-functional delivery teams that build robust data services for their department, for other government departments, and for private sector partners. They inspire best practice, build capability across a community of engineers, and work alongside other senior leaders to identify, plan, develop, and deliver data services at enterprise scale. Because the decisions have a large blast radius — an error in reasoning propagates through everything the teams build — cognitive, numeric, verbal, and situational judgement assessments map directly onto that daily reasoning.

This document is organised into four main assessment sections, each of which follows the same pattern:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation and problem solving using the artefacts a head of data engineering genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — tables, percentages, ratios, budgets, capacity figures and performance metrics reviewed weekly at head-of-profession level.
3. **Workplace job-specific verbal reasoning assessment** — dense passages drawn from policies, standards, emails and reports, followed by True / False / Cannot Say and comprehension questions.
4. **Workplace job-specific situational judgement assessment** — realistic leadership dilemmas involving stakeholders, an engineering community and delivery teams.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile, provides a substantial set of items with fully worked explanations for use as an answer key, and closes with administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Present every candidate for this role level with the same items and the same time limit, under the same conditions. Keep the worked answers and explanations back from the candidate until scoring and debrief. Let the candidate attempt each question before seeing the explanation. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes needed for this role, using practical workplace scenarios and data rather than abstract puzzles. Every stimulus is drawn from the kind of material a head of data engineering genuinely handles: entity-relationship diagrams, pipeline dependency graphs, integration standards documents, test summaries, incident logs, and metadata catalogues.

Typical format and timing: online, timed at around 15 to 30 minutes, with objective scoring against a benchmark or norm group appropriate to senior digital and data roles. Many platforms are adaptive, adjusting difficulty as the candidate answers, and most offer a few ungraded practice items first.

Cognitive assessment matters at this level for a particular reason: decisions here have a large blast radius. Approving an integration design, setting a programming standard, or triaging a portfolio of problems across several delivery teams means an error in reasoning propagates through everything the teams build. This section looks for evidence that a candidate can hold complex structures in mind, detect inconsistencies quickly, deduce consequences rigorously, and prioritise soundly under time pressure.

### How this assessment maps to the role

The dimensions of a cognitive assessment map directly onto the skills in the role profile:

- **Problem management**: logical deduction and root-cause analysis questions test the ability to anticipate problems, understand how a problem fits into the larger picture, and describe it precisely.
- **Data modelling**: questions asking a candidate to reverse-engineer a model from sample records, or to spot a violation of normalisation or referential integrity, test the skill of producing, maintaining and reverse-engineering data models from live systems.
- **Data integration design** and **data development process**: error-checking and consistency questions about integration standards, naming conventions and life cycle procedures test the ability to establish enterprise-scale standards and to notice when teams have drifted from them.
- **Data analysis and synthesis**: pattern-recognition questions about profiling outputs and conformed models test the ability to bring multiple data sources together and to help teams apply profiling techniques.
- **Testing**: questions about test conditions, coverage and risk test the ability to review requirements, define test conditions and identify issues and risks.
- **Programming and build (data engineering)**: sequence and dependency questions mirror technical responsibility for all stages and iterations of a development project.
- **Metadata management**: catalogue-consistency questions test the same care for accuracy that robust metadata governance demands.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pipeline dependency logic.**

A platform team documents the following facts about a nightly batch estate: Pipeline A must complete before Pipeline B starts. Pipeline B and Pipeline C can run in parallel, but both must complete before Pipeline D starts. Pipeline C cannot start until Pipeline A completes. Pipeline E depends only on Pipeline D.

Which one of the following statements must be true?

- (a) Pipeline B must complete before Pipeline C starts.
- (b) Pipeline E cannot start until Pipeline A has completed.
- (c) Pipeline C must start before Pipeline B.
- (d) Pipeline D can start as soon as Pipeline B completes.

**Correct answer: (b).**

**Explanation:** Trace the dependency chain. E depends on D; D depends on both B and C; B and C each depend on A. Therefore nothing downstream of A — including E — can start until A completes, so (b) must be true. Option (a) is false because B and C are explicitly parallel. Option (c) states an ordering nowhere required. Option (d) is false because D needs C as well as B. This tests sketching a quick directed graph rather than holding structure in the head — a strong candidate's answer avoids the classic error of confusing "can run in parallel" with "must run in a particular order".

**Question 2 (easy) — Error checking a metadata catalogue.**

A metadata repository lists four dataset entries. Which entry contains an internal inconsistency?

- (a) Dataset: `benefit_claims_daily`; Classification: OFFICIAL; Refresh: daily at 02:00; Last refreshed: yesterday 02:04.
- (b) Dataset: `address_reference`; Classification: OFFICIAL; Refresh: monthly; Last refreshed: 11 days ago; Next refresh due: 19 days from today.
- (c) Dataset: `payments_ledger`; Classification: OFFICIAL-SENSITIVE; Refresh: weekly on Mondays; Last refreshed: last Wednesday.
- (d) Dataset: `staff_directory`; Classification: OFFICIAL; Refresh: quarterly; Last refreshed: 2 months ago.

**Correct answer: (c).**

**Explanation:** Entry (c) claims a weekly Monday refresh but records its last refresh on a Wednesday — the schedule and the history contradict each other, exactly the kind of drift a robust metadata governance process should surface. Entry (b) is consistent: 11 days elapsed plus 19 days remaining equals a 30-day cycle, fitting "monthly". Entries (a) and (d) contain no contradictions. This tests the metadata management skill directly: governance that keeps repositories up to date depends on spotting precisely this kind of inconsistency at a glance.

**Question 3 (moderate) — Reverse-engineering a data model.**

Three sample rows from a live system table named `CASE_EVENTS`:

| case_id | event_type | event_date | officer_id | officer_name | officer_grade |
|---|---|---|---|---|---|
| 1041 | OPENED | 2026-03-01 | O-77 | J. Achebe | SEO |
| 1041 | REVIEWED | 2026-03-09 | O-82 | P. Singh | G7 |
| 1053 | OPENED | 2026-03-02 | O-77 | J. Achebe | SEO |

Based only on this evidence, which design weakness can be most confidently identified?

- (a) The table lacks a primary key entirely.
- (b) Officer attributes are repeated for each event, indicating the table is not normalised and officer details should live in a separate entity.
- (c) The event_date column stores dates in an inconsistent format.
- (d) case_id and officer_id should be combined into a single column.

**Correct answer: (b).**

**Explanation:** Officer O-77 appears twice with identical name and grade, showing that officer attributes depend on officer_id, not on the event — a transitive dependency that violates third normal form and creates update anomalies. This is exactly what to look for when reverse-engineering data models from a live system. Option (a) overreaches: a composite key may exist; the sample cannot prove absence of a key. Option (c) is false — all dates shown share one format. This tests choosing the conclusion the evidence supports most confidently, not the boldest claim.

**Question 4 (moderate) — Standards compliance deduction.**

A published integration standard states: "All new inbound interfaces must (1) use the approved API gateway, (2) validate payloads against a registered schema, and (3) write rejected records to the quarantine store with a reason code." An audit of four interfaces built this quarter reports:

- Interface W: uses the gateway; validates against a registered schema; discards rejected records silently.
- Interface X: uses the gateway; validates against a schema held only in the developer's repository; quarantines rejects with reason codes.
- Interface Y: bypasses the gateway for performance reasons with a documented waiver; validates against a registered schema; quarantines rejects with reason codes.
- Interface Z: uses the gateway; validates against a registered schema; quarantines rejects with reason codes.

Assuming the waiver process is itself part of the standard, how many interfaces are fully compliant?

- (a) One
- (b) Two
- (c) Three
- (d) Four

**Correct answer: (b).**

**Explanation:** Z is compliant on all three clauses. Y is compliant because a documented waiver is a recognised route within the standard, and it meets clauses (2) and (3). W fails clause (3): silent discard is precisely what the quarantine requirement forbids. X fails clause (2): the schema must be *registered*, and a private repository copy does not satisfy that. This tests two core duties: ensuring adherence to established standards, and reading compliance evidence with the precision needed to advise teams on standards application.

**Question 5 (moderate) — Prioritisation under constraint.**

It is 08:30. Four delivery teams each escalate one item, and there is time to intervene personally in only one before a 10:00 cross-government board:

- (a) Team 1: a conformed reporting model feeding a ministerial dashboard has shown stale data since 06:00; the dashboard is used in the board meeting being attended.
- (b) Team 2: a developer requests a decision on which of two orchestration tools to adopt for a project starting next month.
- (c) Team 3: a partner department reports intermittent authentication failures on a data-sharing API, with a workaround in place.
- (d) Team 4: the weekly test report shows coverage has dropped from 82% to 78% on one service.

Which item should be addressed first?

**Correct answer: (a).**

**Explanation:** Apply impact and urgency jointly. Item (a) combines the highest impact (a ministerial-facing artefact is wrong) with hard urgency (the board meets at 10:00 and will rely on that dashboard); it is also the only item whose deadline precedes the meeting. Item (c) has a workaround, reducing urgency. Item (b) has a month of runway. Item (d) is a trend worth a conversation this week. This tests correctly sequencing what only the candidate can unblock — a core element of the problem management skill.

**Question 6 (moderate) — Pattern recognition in data profiling output.**

A citizen contact dataset is profiled weekly. Null rates for the `postcode` field over six weeks are: 2.1%, 2.0%, 2.2%, 2.1%, 8.9%, 9.1%. The volume of records per week is stable. Which hypothesis best fits the pattern and should be investigated first?

- (a) Citizens have suddenly stopped providing postcodes.
- (b) A change deployed around week five — such as a form change or an upstream mapping error — is dropping postcode values.
- (c) The profiling tool is miscounting nulls in all six weeks.
- (d) Weeks one to four were measured incorrectly.

**Correct answer: (b).**

**Explanation:** The signature is a step change: four stable readings around 2%, then a jump to a new stable level around 9%. Step changes in data quality metrics almost always correspond to a discrete system event, not gradual behavioural drift, which would appear as a slope. Options (c) and (d) attack the measurement, but the internal consistency of each period suggests the instrument is working. This tests recognising step change versus drift — one of the most practical applications of the data analysis and synthesis skill.

**Question 7 (moderate) — Logical deduction about testing.**

A test manager reports: "Every interface that passed schema validation testing also passed volume testing. Interface K failed volume testing. Interface L passed schema validation testing." Which of the following can validly be concluded?

- (a) Interface K failed schema validation testing.
- (b) Interface L passed volume testing.
- (c) Interface K passed schema validation testing.
- (d) Interface L failed volume testing at first attempt.

**Correct answer: both (a) and (b) are valid — note carefully why (a) is also entailed.**

**Explanation:** The rule is: pass(schema) implies pass(volume). Its contrapositive is: fail(volume) implies fail(schema). Interface K failed volume testing, so by the contrapositive K must have failed schema validation — conclusion (a) follows. Interface L passed schema validation, so by the rule directly L passed volume testing — conclusion (b) follows. Option (d) adds "at first attempt", a detail the premises never mention. This tests both the direct inference and the contrapositive — the two moves underpinning rigorous review of requirements, specifications and test conditions.

**Question 8 (hard) — Root cause isolation.**

A conformed analytical model combines three sources: HR system (people), finance system (cost centres), and estates system (locations). Analysts report that 4% of people records fail to join to a cost centre. Established facts: (1) the HR extract row count matches the HR system exactly; (2) every cost centre code in the finance extract is present in the reference list; (3) 4% of HR records carry cost centre codes marked as "closed" in the reference list; (4) the join logic excludes closed cost centres.

What is the most precise statement of the root cause?

- (a) The finance extract is incomplete.
- (b) The HR system contains people assigned to cost centres that have since been closed, and the model's join rule excludes closed cost centres rather than handling them.
- (c) The reference list is out of date.
- (d) The join logic contains a coding defect.

**Correct answer: (b).**

**Explanation:** Work through the evidence eliminatively. Fact (1) clears the HR extract of data loss. Fact (2) clears the finance extract of invalid codes, ruling out (a). Fact (3) shows the failing 4% are exactly the records pointing at closed cost centres, and fact (4) shows the model excludes those by design — so the join is behaving as specified, ruling out (d); the defect is in the *rule*, not the code. Option (c) is the subtle distractor: the reference list correctly records the cost centres as closed. This tests separating "code defect" from "design assumption defect" — what makes a problem description actionable.

**Question 9 (hard) — Sequencing a programme of work.**

Five workstreams for an enterprise data integration programme must be sequenced. Constraints: the canonical data model (M) must be signed off before either the ingestion framework build (I) or the metadata repository setup (R) can complete. The quality rules engine (Q) requires the ingestion framework (I) to be complete. Analyst onboarding (O) requires both R and Q. Only two workstreams can run at once due to resourcing.

Which sequencing plan is feasible and finishes O earliest, assuming each workstream takes one quarter?

- (a) Q1: M alone; Q2: I and R; Q3: Q and O; Q4: nothing.
- (b) Q1: M and I; Q2: R and Q; Q3: O.
- (c) Q1: M alone; Q2: I and R; Q3: Q alone; Q4: O.
- (d) Q1: I and R; Q2: M and Q; Q3: O.

**Correct answer: (c).**

**Explanation:** First test feasibility. Plan (d) starts I and R before M is signed off — infeasible. Plan (b) runs I concurrently with M, but I cannot complete before M is signed off, so completing both in Q1 breaks the constraint. Plan (a) schedules O in Q3 alongside Q, but O requires Q to be *complete*, so O cannot run concurrently with Q — infeasible. Plan (c) respects every constraint: M finishes Q1; I and R finish Q2; Q (needing I) finishes Q3; O (needing R and Q) finishes Q4. This tests distinguishing "starts after" from "completes after", and testing each plan against every constraint rather than accepting the first that looks tidy.

**Question 10 (hard) — Spotting the flawed inference in a horizon-scanning brief.**

A supplier's whitepaper argues: "Departments that adopted our real-time streaming platform reported a 40% reduction in data incident volumes within a year. Therefore, adopting streaming architectures reduces data incidents." Which is the strongest single criticism of this inference?

- (a) The sample may exclude departments whose adoption failed, and adopters may differ systematically from non-adopters, so the correlation cannot establish causation.
- (b) Streaming platforms are more expensive than batch platforms.
- (c) A 40% reduction is too small to matter.
- (d) Government departments should not use private sector case studies.

**Correct answer: (a).**

**Explanation:** The argument generalises from self-selected, possibly survivor-biased evidence to a causal claim. Departments that chose and successfully deployed the platform likely already had stronger engineering practices — a confound — and failed adoptions rarely appear in vendor whitepapers — survivorship bias. Option (a) names both defects. Options (b), (c) and (d) do not address the logic. This tests separating genuine signal from persuasive but logically unsound vendor narrative — the cognitive core of horizon-scanning and investigating emerging trends.

**Question 11 (moderate) — Test condition coverage.**

A specification for a new ingestion service states: "The service must accept files up to 2 GB; reject files with an invalid schema; and process a valid 2 GB file within 30 minutes." A test manager proposes three test conditions: (1) submit a valid 1 GB file and confirm acceptance; (2) submit an invalid-schema file and confirm rejection; (3) submit a valid 2 GB file and confirm processing completes within 30 minutes.

Which requirement aspect remains untested?

- (a) Rejection of invalid schemas.
- (b) Behaviour at and just beyond the 2 GB boundary (e.g. that a file slightly over 2 GB is rejected or handled as specified).
- (c) Processing time of the 2 GB file.
- (d) Acceptance of valid files.

**Correct answer: (b).**

**Explanation:** Conditions (1)-(3) cover valid acceptance, invalid-schema rejection, and the performance clause. What no condition exercises is the upper boundary itself from the other side: what happens with a 2.1 GB file? Boundary value analysis says defects cluster at limits, so a complete condition set tests at the boundary and just beyond it. This tests the testing skill's core review question — "which boundary is unexercised?" — which at head-of level is applied in review and coached into others more often than executed directly.

**Question 12 (hard) — Conformed model consistency.**

Two source systems feed a conformed customer model. System P holds 120,000 customer records; System F holds 95,000. Matching analysis shows 80,000 customers exist in both systems. The conformed model, built as a full union of distinct customers, contains 142,000 records. What does this indicate?

- (a) The model is correct.
- (b) The model contains about 7,000 duplicate or spurious records, because the expected distinct count is 120,000 + 95,000 - 80,000 = 135,000.
- (c) The model has lost about 7,000 records.
- (d) The matching analysis must be wrong because the numbers cannot be compared.

**Correct answer: (b).**

**Explanation:** Apply the inclusion-exclusion principle: distinct customers = 120,000 + 95,000 − 80,000 = 135,000. The model holds 142,000, which is 7,000 *more* than expected — the signature of failed de-duplication. Option (c) reverses the direction of the discrepancy. Option (d) surrenders too early. This tests bringing multiple data sources together in a conformed model, and the inclusion-exclusion check as one of the fastest smoke tests for validating any entity-resolution exercise.

**Question 13 (moderate) — Odd one out in standards.**

A naming standard requires: raw layer tables prefixed `raw_`, curated layer tables `cur_`, and published data products `pub_`; all names lower-case with underscores; source system code as a suffix on raw tables only. Which table name violates the standard?

- (a) `raw_payments_sap`
- (b) `cur_customer_addresses`
- (c) `pub_monthly_spend_sap`
- (d) `raw_hr_positions_wfm`

**Correct answer: (c).**

**Explanation:** The suffix `_sap` is a source system code, and the standard permits source codes on raw tables *only*. A published data product should be source-agnostic, so `pub_monthly_spend_sap` breaks the rule. This tests the everyday texture of establishing standards, keeping them up to date and ensuring adherence: violations are rarely dramatic, and a candidate who has internalised the standard will notice a suffix in the wrong layer within seconds.

### Administration tips

- **Score for whether a candidate sketches structure immediately** for dependency and deduction questions, rather than holding the graph or rule in their head.
- **Watch for whether a candidate answers only from the evidence given**, resisting the temptation to fill gaps with what is usually true in real estates.
- **Note whether a candidate chooses the modest, well-supported conclusion over the boldest one.**
- **Note whether a candidate reads compliance wording precisely** — "registered", "documented", "only" carry entire questions.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that confuses "can" with "must"** in dependency and logic items.
- **Crediting the boldest diagnosis rather than the best-supported one.**
- **Missing when a candidate imports outside knowledge** rather than reasoning from the stated facts.
- **Letting a time-sink question distort the overall picture** — a candidate who gets stuck on one instead of banking easier marks first is showing a weaker self-management pattern.
- **Missing when a candidate skims compliance wording** rather than reading a standard's clauses precisely.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret and make sound decisions using numerical data of the kind this role genuinely generates: platform budgets, cloud consumption tables, pipeline throughput and capacity figures, service level percentages, team resourcing plans, and data quality metrics. The emphasis is business mathematics — percentages, ratios, rates, cost-benefit comparisons and projections.

Typical format and timing: online, strictly timed (often around 60 to 90 seconds per question), with an onscreen calculator usually allowed. The test prioritises interpretation over mental arithmetic. Questions frequently include scale qualifiers ("figures in thousands", "per month") that change the answer entirely if missed.

Numeric reasoning matters at this level because a head of data engineering is accountable for decisions with significant financial and operational consequences — whether a platform migration is affordable, whether a pipeline estate can absorb a new department's workload, whether a team's velocity justifies its cost, whether an SLA breach is a blip or a trend. Senior stakeholders will rarely check the arithmetic; they will act on the interpretation.

### How this assessment maps to the role

- **Data development process** — managing resources so data services work effectively at an enterprise level: budget, resourcing and capacity questions test the quantitative core of this duty.
- **Data analysis and synthesis**: questions requiring combining figures from multiple tables mirror bringing multiple data sources together in a conformed model.
- **Problem management**: trend and threshold questions test the ability to anticipate problems and judge when a number signals a problem worth defending against.
- **Testing**: defect and coverage arithmetic tests the ability to analyse and report test activities and results.
- **Data innovation**: cost-benefit and projection questions mirror evaluating emerging approaches and building the numerical case for new ways of working.
- **Communicating between the technical and non-technical**: every worked explanation models the discipline of showing arithmetic plainly.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage change in pipeline failures.**

A monthly engineering report shows pipeline failure counts across the estate: January 140, February 119. What is the percentage change from January to February?

- (a) A decrease of 21%
- (b) A decrease of 15%
- (c) A decrease of 17.6%
- (d) An increase of 15%

**Correct answer: (b).**

**Explanation:** Percentage change = (119 − 140) ÷ 140 × 100 = −15%. Option (a) confuses the absolute change (21 failures) with the percentage. Option (c) divides by the new value instead of the starting value. This tests dividing by the correct base and sanity-checking direction before calculating.

**Question 2 (easy) — Storage capacity headroom.**

An analytical platform has 480 TB of provisioned storage and currently holds 312 TB. A new data service is projected to add 9 TB per month. Assuming no other growth and no purge, in how many whole months will the platform exceed 90% of provisioned capacity?

- (a) 12 months
- (b) 13 months
- (c) 14 months
- (d) 18 months

**Correct answer: (c).**

**Explanation:** 90% of 480 TB = 432 TB. Headroom = 432 − 312 = 120 TB. At 9 TB/month, 120 ÷ 9 = 13.33 months. After 13 whole months the platform holds 429 TB (still under); after 14 months, 438 TB (exceeding). This tests correctly rounding to the boundary month when a question asks when a threshold is *exceeded*.

**Question 3 (moderate) — Cloud cost comparison.**

Two ingestion architectures are costed for a new cross-government data service:

| Cost element | Option A (batch) | Option B (streaming) |
|---|---|---|
| Fixed platform cost per month | £18,000 | £26,000 |
| Cost per million records processed | £42 | £28 |

The service will process 400 million records per month. What is the monthly cost difference between the options?

- (a) Option B costs £2,400 less per month
- (b) Option B costs £8,000 more per month
- (c) Option A costs £2,400 less per month
- (d) The options cost the same

**Correct answer: (c).**

**Explanation:** Option A: £18,000 + (400 × £42) = £34,800. Option B: £26,000 + (400 × £28) = £37,200. Difference = £2,400, with Option A cheaper. Option (a) reverses the direction. This tests computing fixed-plus-variable totals correctly and, for a strong candidate's answer, extracting the break-even volume (≈571 million records/month) as the more persuasive figure for a non-technical stakeholder than a single-point comparison.

**Question 4 (moderate) — SLA availability.**

A data-sharing API has a 99.5% monthly availability SLA. In a 30-day month, what is the maximum downtime allowed, and did the service — which recorded 4 hours 20 minutes of downtime — breach its SLA?

- (a) Maximum 3.6 hours; the service breached the SLA
- (b) Maximum 3.6 hours; the service met the SLA
- (c) Maximum 7.2 hours; the service met the SLA
- (d) Maximum 7.2 hours; the service breached the SLA

**Correct answer: (a).**

**Explanation:** 30-day month = 720 hours. Allowed downtime = 0.5% × 720 = 3.6 hours. Recorded downtime (4h20m) exceeds this, so the SLA was breached. Options (c)/(d) use 1% instead of 0.5%. This tests converting an availability percentage to its complement before calculating, and reading the unit correctly (3.6 hours is 3:36, not 3:60).

**Question 5 (moderate) — Team resourcing ratio.**

A data engineering community comprises 48 engineers across four teams. The agreed operating model requires a ratio of one senior engineer to every three engineers at other grades. There are currently 10 senior engineers. How many more senior engineers are needed to meet the ratio, assuming total headcount stays at 48?

- (a) 2
- (b) 6
- (c) 12
- (d) 4

**Correct answer: (a).**

**Explanation:** A 1:3 ratio means seniors are 1 part in 4 total parts, so required seniors = 48 ÷ 4 = 12. Current: 10, so 2 more are needed. The common error reads "1 to every 3" as 1/3 of the total (option b). This tests correctly converting a ratio to a fraction of the whole — a frequent workforce-planning calculation.

**Question 6 (moderate) — Data quality improvement.**

A profiling report on a conformed customer model shows 2.4 million records, of which 6.5% fail address validation. An improved standardisation rule resolves 70% of the failing records. How many records still fail?

- (a) 46,800
- (b) 109,200
- (c) 156,000
- (d) 63,000

**Correct answer: (a).**

**Explanation:** Failing records = 6.5% × 2,400,000 = 156,000. Resolved = 70% × 156,000 = 109,200. Remaining = 156,000 − 109,200 = 46,800. Option (c) stops too early; option (b) answers the number resolved rather than remaining. This tests writing intermediate figures down on two-step percentage problems, which is where errors most commonly occur under time pressure.

**Question 7 (moderate) — Throughput and deadline.**

An overnight batch window runs from 01:00 to 06:00. A new ingestion job must load 540 million records, and the pipeline sustains 45 million records per hour. Existing jobs already occupy the window until 02:30. Can the new job complete within the window, and with how much margin or shortfall?

- (a) Yes, with 30 minutes to spare
- (b) No, it overruns by 8.5 hours
- (c) No, it overruns by 8 hours 30 minutes minus the window — it needs 12 hours in total
- (d) No, it needs 12 hours of processing but only 3.5 hours are available, an 8.5-hour shortfall

**Correct answer: (d).**

**Explanation:** Processing time needed = 540 ÷ 45 = 12 hours. Available window = 3.5 hours. Shortfall = 8.5 hours. This tests correctly framing a capacity shortfall precisely enough that the follow-up options — parallelising the load, incremental loading, or challenging the requirement — become visible, since no amount of scheduling fits 12 hours into 3.5.

**Question 8 (hard) — Budget allocation with constraints.**

An annual data platform budget is £2.4 million, allocated: 45% staff, 30% cloud infrastructure, 15% licences, 10% training, and community development. Mid-year, cloud costs rise 20% for the second half of the year while all other categories stay on plan. If the total budget cannot increase, and the overrun must come entirely from the training allocation, what percentage of the original training budget remains for the second half of the year?

- (a) 70%
- (b) 40%
- (c) 55%
- (d) 25%

**Correct answer: (b).**

**Explanation:** Cloud budget = £720,000/year, £360,000/half-year. A 20% rise for the second half adds £72,000. Training budget = £240,000/year, £120,000/half. £120,000 − £72,000 = £48,000 remains, which is 40% of the original half-year training budget. Option (a) subtracts £72k from the annual £240k, misreading the timeframe. This tests careful timeframe tracking in a multi-step budget calculation, and, for a strong candidate's answer, noting that this trade-off — sacrificing 60% of half-year community development — is exactly the kind that should be surfaced upward rather than absorbed silently.

**Question 9 (hard) — Interpreting a multi-team delivery table.**

Quarterly figures for four delivery teams (story points delivered, and defects escaping to production):

| Team | Q1 points | Q2 points | Q1 defects | Q2 defects |
|---|---|---|---|---|
| Ingest | 240 | 276 | 12 | 12 |
| Platform | 180 | 171 | 9 | 6 |
| Products | 300 | 330 | 10 | 22 |
| Integration | 210 | 231 | 7 | 7 |

Which team's defect rate per 100 story points worsened the most from Q1 to Q2?

- (a) Ingest
- (b) Platform
- (c) Products
- (d) Integration

**Correct answer: (c).**

**Explanation:** Compute defects per 100 points each quarter. Ingest and Platform and Integration all improve; Products goes from ≈3.3 to ≈6.7 — roughly doubling. Judging by raw defect counts alone hides this: Ingest and Integration look "flat", Products merely "up a bit". This tests normalising to a rate before comparing teams of different sizes and velocities — the single most important habit for analysing and reporting test activities and results across an estate.

**Question 10 (hard) — Migration projection with compound growth.**

A legacy warehouse holds 200 TB and grows at 5% per quarter (compound). A migration plan moves 40 TB per quarter to the new platform, starting now. After two quarters, approximately how much data remains on the legacy platform? (Assume growth applies to the remaining legacy data at the end of each quarter, after that quarter's migration.)

- (a) 120.0 TB
- (b) 138.5 TB
- (c) 134.4 TB
- (d) 128.0 TB

**Correct answer: (c).**

**Explanation:** Q1: 200 − 40 = 160, then × 1.05 = 168 TB. Q2: 168 − 40 = 128, then × 1.05 = 134.4 TB. Option (d) stops one step early; option (b) reverses the stated order (growth before migration); option (a) ignores growth entirely. This tests following a stated order of operations strictly, and — the professional point — recognising that a migration removing 40 TB per quarter against 5% compound growth is barely outrunning the growth at all, worth making explicit to any board that believes the legacy estate is shrinking fast.

**Question 11 (moderate) — Defect detection percentage.**

In user acceptance testing for a new data service, teams raised 180 defects. Post go-live, a further 20 defects were found in the first month that existed before release. What was the defect detection percentage of testing (defects found in testing as a percentage of all pre-release defects)?

- (a) 90%
- (b) 88.9%
- (c) 11.1%
- (d) 111%

**Correct answer: (a).**

**Explanation:** Total pre-release defects = 180 + 20 = 200. Detection percentage = 180 ÷ 200 = 90%. Option (c) is the escape rate misused. This tests identifying the correct base for a detection percentage — a standard measure in any mature test report.

**Question 12 (moderate) — Weighted average for a conformed model.**

Three sources are conformed into a single citizen contact model. Source volumes and duplicate rates: Source 1 — 1.2 million records, 4% duplicates; Source 2 — 0.6 million records, 9% duplicates; Source 3 — 0.2 million records, 15% duplicates. What is the overall duplicate rate across all records?

- (a) 9.3%
- (b) 6.6%
- (c) 5.4%
- (d) 7.0%

**Correct answer: (b).**

**Explanation:** Duplicates: 48,000 + 54,000 + 30,000 = 132,000 of 2,000,000 total = 6.6%. Option (a) is the simple, unweighted mean of 4%, 9% and 15% — wrong whenever populations differ in size. This tests volume-weighted averaging of quality metrics across sources of very different scale.

**Question 13 (hard) — Cost per outcome for an innovation pilot.**

Two approaches to automated metadata capture are piloted. Approach P costs £84,000 and correctly catalogued 5,600 data assets. Approach Q costs £59,500 and correctly catalogued 3,500 data assets. Which gives better value, and by how much per asset?

- (a) P at £15 per asset, Q at £17 per asset; P is £2 per asset better
- (b) P at £15 per asset, Q at £17 per asset; Q is £2 per asset better
- (c) P at £6.67 per asset, Q at £5.88 per asset; Q is better
- (d) Q is better because it costs £24,500 less overall

**Correct answer: (a).**

**Explanation:** Unit cost P = £84,000 ÷ 5,600 = £15. Unit cost Q = £59,500 ÷ 3,500 = £17. P is £2 per asset cheaper. Option (d) commits the total-cost fallacy: Q spends less but achieves proportionally less. This tests computing a unit rate rather than comparing totals, and, for a strong candidate's answer, noting that unit cost is necessary but not sufficient — coverage and quality also matter.

**Question 14 (moderate) — Percentage points versus percentages.**

A quarterly performance pack states: "Pipeline first-time success rate improved from 92% to 95% this quarter." A board member asks whether that is "a 3% improvement". Which statement is numerically correct?

- (a) Yes — the rate improved by exactly 3%.
- (b) The rate improved by 3 percentage points, which is a relative improvement of about 3.3%; and the failure rate fell from 8% to 5%, a relative reduction of 37.5%.
- (c) The failure rate fell by 3%, so the two statements are equivalent.
- (d) The improvement cannot be quantified without volume figures.

**Correct answer: (b).**

**Explanation:** The success rate rose by 3 percentage points; as a relative change that is ≈3.3%. The failure rate fell from 8% to 5%, a 3-point fall but a 37.5% relative reduction. This tests the percentage-points-versus-percent distinction, and, for a strong candidate's answer, recognising that "we cut failures by 37.5%" and "we improved success by 3%" describe the same quarter — a framing choice that matters when representing performance to different audiences with integrity.

### Administration tips

- **Score for whether a candidate reads units and scale qualifiers first** — "per month", "in thousands", "TB", "per 100 points" — before touching the numbers.
- **Watch for whether a candidate writes intermediate results down** on multi-step problems.
- **Note whether a candidate sanity-checks direction and magnitude** before calculating precisely.
- **Note whether a candidate computes a unit rate rather than comparing totals** when judging value.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads a chart or table label** — monthly confused with quarterly, or a missed scale qualifier.
- **Crediting a percentage divided by the wrong base** — percentage change uses the original value; detection rates use the total defect population; weighted averages use total volume.
- **Rewarding over-calculation** where estimation would have identified the only plausible option.
- **Missing when a candidate falls for the total-cost fallacy** — judging value by the smaller invoice rather than the unit rate.
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses and draws correct conclusions from written business information that mirrors the exact reading demands of this role: cross-government data-sharing agreements, technology standards, governance board papers, escalation emails from partner departments, supplier proposals, and test summary reports. Questions typically require a strict choice between True (the passage logically entails the statement), False (the passage contradicts it), or Cannot Say (insufficient information), plus some multiple-choice comprehension items.

Two rules define the format. First, fact-based logic: answer strictly from the text provided, setting aside outside knowledge. Second, time pressure: tests usually allow less than a minute per question.

Verbal reasoning matters at this level because the role profile puts communication at its centre — mediating between people, managing stakeholder expectations, moderating difficult discussions about high-risk and complex topics within constrained timescales, and speaking on behalf of the community to large audiences. Every one of those duties rests on a prior skill: reading precisely.

### How this assessment maps to the role

- **Communicating between the technical and non-technical**: comprehension items test whether the core argument of dense text can be extracted — the prerequisite for translating it faithfully for ministers, boards and citizens.
- **Data integration design** — establishing standards, keeping them up to date and ensuring adherence: True/False/Cannot Say items on standards documents test reading normative language ("must", "should", "may") with the precision that writing and enforcing standards demands.
- **Metadata management** — communicating the value of metadata repositories: passages about governance test grasp of exactly what a policy commits the organisation to.
- **Problem management** — identifying and describing problems, and helping others to describe them: distinguishing what a report states, implies and omits is the reading half of precise problem description.
- **Data innovation** — investigating emerging trends and performing horizon-scanning: critical-reading items about supplier and industry claims test the defence against persuasive overstatement.
- **Testing** — analysing and reporting test activities and results: comprehension of test reports depends on separating recorded fact from inference.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage A — Cross-government data-sharing agreement (for Questions 1-4).**

> "Under this agreement, the Provider department will make the Address Reference Extract available to the Recipient department each calendar month, no later than the fifth working day. The Extract must be transferred exclusively through the approved secure transfer service; transfer by any other mechanism, including departmental email, constitutes a reportable incident. The Recipient may use the Extract solely for the validation of citizen correspondence addresses and must not link it to any other dataset without the prior written consent of the Provider's Data Governance Board. Consent decisions will normally be issued within twenty working days of a complete application. The Recipient must delete each monthly Extract within forty working days of receipt, except where a linking consent is in force, in which case retention terms will be specified in the consent instrument."

**Question 1 (easy).** True, False, or Cannot Say: "The Recipient may link the Extract to other datasets if the Provider's Data Governance Board has given prior written consent."

**Correct answer: True.**

**Explanation:** The passage states the Recipient "must not link it to any other dataset *without* the prior written consent" of the Board — a conditional prohibition, so linking with such consent is permitted. This tests converting "must not X without Y" into "may X with Y", a valid reading exercised daily when establishing enterprise-scale integration procedures involving other departments.

**Question 2 (moderate).** True, False, or Cannot Say: "Consent decisions are always issued within twenty working days of a complete application."

**Correct answer: False.**

**Explanation:** The passage says decisions "will *normally* be issued within twenty working days". "Normally" explicitly allows exceptions, contradicting "always". This tests the single most tested distinction in verbal reasoning at senior level: qualified commitments versus absolute ones.

**Question 3 (moderate).** True, False, or Cannot Say: "Transferring the Extract via a commercial file-sharing website would constitute a reportable incident."

**Correct answer: True.**

**Explanation:** The agreement requires transfer "exclusively through the approved secure transfer service" and states that "transfer by any other mechanism, including departmental email, constitutes a reportable incident." A commercial file-sharing website falls within "any other mechanism"; "including departmental email" is an example, not a limit. This tests recognising that "including" signals a non-exhaustive list.

**Question 4 (hard).** True, False, or Cannot Say: "If no linking consent is in force, the Recipient must delete each monthly Extract within forty working days of the fifth working day of the month."

**Correct answer: False.**

**Explanation:** The deletion clock runs from *receipt*, not from the fifth working day, which is merely the latest permitted delivery date. The statement substitutes the delivery deadline for the receipt date, misstating the rule. This tests anchoring an obligation to its correct trigger event, exactly the precision needed when setting retention rules in integration procedures.

**Passage B — Draft engineering standard (for Questions 5-7).**

> "All data pipelines deployed to the production environment must emit structured run-telemetry to the central observability service. Pipelines classified as business-critical must, in addition, define automated alerting with a named on-call rota. Teams should adopt the shared ingestion framework for new pipelines; teams choosing an alternative framework must record the decision and its rationale in the architecture decision log before the first production deployment. This standard applies to pipelines built or substantially modified after 1 April; pipelines predating that date are expected to achieve compliance at their next substantial modification."

**Question 5 (easy).** True, False, or Cannot Say: "A team may build a new pipeline on an alternative framework provided it records the decision and rationale in the architecture decision log before first production deployment."

**Correct answer: True.**

**Explanation:** The standard says teams "should" adopt the shared framework — a recommendation, not an obligation — and explicitly provides the route for alternatives. This tests the must/should distinction — the load-bearing vocabulary of standards documents that a candidate reads and writes for a living at this level.

**Question 6 (moderate).** True, False, or Cannot Say: "A business-critical pipeline that emits run-telemetry but has no automated alerting is compliant with the standard."

**Correct answer: False.**

**Explanation:** Business-critical pipelines "must, in addition, define automated alerting with a named on-call rota". A pipeline lacking automated alerting fails a mandatory clause, so it cannot be compliant. This tests recognising that conjunctive requirements ("must, in addition") demand all clauses, not just the one satisfied.

**Question 7 (hard).** True, False, or Cannot Say: "A pipeline built in January and not modified since must emit run-telemetry to the central observability service."

**Correct answer: False.**

**Explanation:** The standard applies to pipelines built or substantially modified after 1 April; older, unmodified pipelines are only "expected to achieve compliance at their next substantial modification". The "must" does not yet attach to this pipeline. This tests reading transition and grandfathering clauses precisely — where standards adherence disputes actually happen in large estates.

**Passage C — Escalation email from a partner department (for Questions 8-10).**

> "Dear colleague, I am writing to escalate our concerns about the reliability of the citizen address validation API. Since the start of last month we have logged eleven authentication failures, three of which caused our overnight correspondence run to be postponed to the following evening. Your service desk has been responsive, and we recognise that the workaround your team supplied has prevented further postponements since it was applied two weeks ago. However, our director has asked me to seek assurance on two points before we extend the service into our benefits correspondence programme: first, a root cause and remediation date for the authentication failures; second, confirmation that the API can sustain a doubling of our current call volume. We would welcome a joint session with your engineers in the next two weeks. Please treat this as a formal escalation under section 6 of our service agreement."

**Question 8 (easy).** True, False, or Cannot Say: "The workaround has prevented further postponements of the correspondence run since it was applied."

**Correct answer: True.**

**Explanation:** Stated directly, near-verbatim. This tests locating a keyword-scannable direct statement quickly — a legitimate technique under one-minute-per-question timing.

**Question 9 (moderate).** True, False, or Cannot Say: "All eleven authentication failures caused the partner department's overnight correspondence run to be postponed."

**Correct answer: False.**

**Explanation:** Three of eleven failures caused postponement, not all. This tests catching quantifier substitution ("some" becoming "all") — one of the most frequent verbal reasoning traps, and one that matters operationally when reporting incident impact accurately.

**Question 10 (hard).** True, False, or Cannot Say: "The partner department will not extend the service into its benefits correspondence programme unless both assurances are provided."

**Correct answer: Cannot Say.**

**Explanation:** The director "asked... to seek assurance on two points *before* we extend" — a sequencing request, not a stated condition of refusal. This tests resisting a highly plausible inference the passage stops short of asserting — the hardest discipline of the format.

**Passage D — Supplier proposal excerpt (for Questions 11-12).**

> "Our lakehouse platform is the market-leading choice for public sector data engineering. Departments using our platform have reported reductions in pipeline development time of up to 60%. The platform's built-in metadata catalogue automatically harvests technical metadata from every connected source, eliminating manual cataloguing effort. Migration from legacy warehouse estates is typically completed within two quarters. Our proposal includes a dedicated public sector success team and assumes your engineers will complete our certification programme during the first quarter of the engagement."

**Question 11 (moderate).** Which of the following is a claim of *fact* in the passage, as opposed to a qualified or promotional claim?

- (a) The platform reduces pipeline development time by 60%.
- (b) The proposal assumes the department's engineers will complete the supplier's certification programme during the first quarter.
- (c) Migration from legacy estates always completes within two quarters.
- (d) The platform is objectively the best choice for public sector data engineering.

**Correct answer: (b).**

**Explanation:** Option (b) restates an unqualified, verifiable statement about the proposal's own content. Option (a) inflates "up to 60%" into a general effect. Option (c) hardens "typically" into "always". Option (d) converts promotional language into an objective superlative. This tests sorting a supplier document into verifiable commitments, qualified evidence and marketing language — substantially what horizon-scanning requires before any of it reaches a business case.

**Question 12 (moderate).** True, False, or Cannot Say: "The platform's metadata catalogue harvests business definitions and data ownership information from connected sources."

**Correct answer: Cannot Say.**

**Explanation:** The passage says the catalogue harvests *technical* metadata — a different category from business definitions and ownership, about which the passage is silent. This tests setting aside professional knowledge (that automated harvesting of business metadata is rare) and answering strictly from what the supplier actually claimed.

**Passage E — Test summary report (for Questions 13-14).**

> "Performance testing of the conformed reporting model completed on schedule. Of the forty-two test conditions defined from the requirements, forty were executed; two conditions relating to year-end volume peaks could not be executed because representative data was unavailable and are deferred to the next cycle. Thirty-seven executed conditions passed. The three failures all concern incremental refresh under concurrent user load; a fix is in development and will require regression testing. The test manager assesses the residual risk of the deferred conditions as medium, on the basis that year-end volumes are approximately 2.4 times the tested peak."

**Question 13 (easy).** True, False, or Cannot Say: "More than 90% of the executed test conditions passed."

**Correct answer: True.**

**Explanation:** 37 ÷ 40 = 92.5% — more than 90%. Dividing by the 42 defined conditions instead gives ≈88.1%, which would flip the answer, but the statement says "executed", and the passage distinguishes defined from executed conditions. This tests identifying the correct population named by a statement before computing.

**Question 14 (hard).** True, False, or Cannot Say: "The conformed reporting model has been shown to perform acceptably at year-end volumes."

**Correct answer: False.**

**Explanation:** The two year-end volume conditions "could not be executed" and were deferred — the model has explicitly not been tested at year-end volumes, contradicting a claim of demonstrated acceptability. This tests distinguishing "untested" from "failed": if the statement said only "performs acceptably", the answer would be Cannot Say, but "has been *shown* to perform" is a claim about evidence, which the passage directly contradicts.

**Passage F — Data governance board paper (for Questions 15-16).**

> "The board is asked to note progress on the metadata repository programme and to approve the next phase. Since the last meeting, 62% of the department's priority datasets have complete catalogue entries, up from 41%. Entries are considered complete when they include a named data owner, a business description, a retention classification and lineage to at least the immediate upstream source. The programme team attributes the improvement principally to the appointment of data stewards in three directorates; the two directorates without stewards account for the majority of the remaining incomplete entries. The next phase proposes extending stewardship to the remaining directorates and integrating the repository with the pipeline deployment process, so that a production deployment cannot proceed unless the affected datasets' catalogue entries are complete. The board should note that this integration would introduce a new dependency between the repository's availability and the release process, and that mitigation options are set out in Annex B."

**Question 15 (moderate).** True, False, or Cannot Say: "A catalogue entry that includes a named data owner, a business description and a retention classification is considered complete."

**Correct answer: False.**

**Explanation:** Completeness requires four elements including lineage; the statement lists only three, omitting lineage. This tests checking every conjunct of an enumerated definition — a statement that silently drops one element is False, not Cannot Say, because the definition itself supplies the missing information.

**Question 16 (hard).** Which of the following is the most accurate summary of the risk the paper asks the board to note?

- (a) The metadata repository may contain incomplete entries after the next phase.
- (b) Making deployment conditional on catalogue completeness couples the release process to the repository's availability, so a repository outage could block production deployments.
- (c) Data stewards may not be appointed in the remaining directorates.
- (d) The repository integration will slow down all production deployments.

**Correct answer: (b).**

**Explanation:** The paper states the integration "would introduce a new dependency between the repository's availability and the release process" — precisely option (b). Option (a) describes the current state, not the flagged risk. Option (d) overstates a conditional exposure into a certainty. This tests summarising the actual stated risk without diluting or inflating it — a comprehension skill exercised when briefing boards with candour about operational coupling.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate catches trigger words** — "normally", "typically", "up to", "including", "should" versus "must", "expected to".
- **Note whether a candidate scans for the statement's keyword** before re-reading closely, rather than reading the whole passage cold.
- **Note whether a candidate quarantines outside expertise** rather than answering from what real agreements or standards usually say.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate confuses "likely" with "stated"** — a highly plausible business inference is still Cannot Say if the text stops short of asserting it.
- **Crediting a quantifier or qualifier slip** — "three of eleven" read as "all", "normally" read as "always".
- **Missing when a candidate reads "including" as exhaustive** rather than as an example within a broader category.
- **Missing the difference between "untested" and "failed"** — matching a statement's verb to what the passage can actually support.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill and professional conduct by presenting realistic workplace dilemmas and asking how they would respond. There is no single objective calculation: several responses may look reasonable, but one best fits the values of the organisation and the demands of the role. For senior UK public sector digital roles, the anchoring values are well established: putting user needs first, transparency and candour, collaboration across boundaries, accessibility and inclusion, evidence-based decisions, and the responsible stewardship of public money and public data.

Typical format and timing: a short scenario and four or five possible actions, with the candidate asked to select the most effective and least effective actions, or to rank or rate every option. Timing is usually generous or untimed. Scoring compares the candidate's choices with those of an expert panel of experienced leaders.

At head-of level, judgement *is* the job. The role profile is dense with situations that have no formula: mediating between people and strengthening relationships, managing stakeholder expectations, moderating difficult discussions about high-risk and complex topics within constrained timescales, providing technical leadership and career development to a community, and deciding when an emerging trend deserves investment.

### How this assessment maps to the role

- **Communicating between the technical and non-technical**: scenarios test whether a candidate mediates rather than inflames, matches the communication method to the audience, and moderates difficult discussions under time pressure.
- **Problem management**: scenarios test whether a candidate anticipates problems, addresses root causes rather than symptoms, and builds problem-solving capability in others instead of solving everything personally.
- **Data development process** and **data integration design**: scenarios test how enterprise-scale procedures and standards are upheld when adherence is inconvenient.
- **Programming and build**: scenarios test how technical responsibility and standards advice are exercised without micromanaging experienced teams.
- **Data innovation**: scenarios test the response to emerging technology pressure — neither reflexive adoption nor reflexive dismissal.
- **Metadata management** and **testing**: scenarios test whether unglamorous but essential disciplines are protected when delivery pressure squeezes them.
- **Building capability**: several scenarios test the leadership behaviours named in the role — inspiring best practice and providing career development for the community.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (moderate) — The deadline versus the standard.**

A delivery team building a new data service for a ministerial commitment says they can hit the launch date only by skipping the agreed integration standard's quarantine-and-reason-code requirement for rejected records, promising to retrofit it "in the next sprint". The service will process citizen benefit data from day one. The programme director supports the team: "Ship it; it's a technicality."

- (a) Approve the exception verbally to keep the launch on track, and rely on the team's promise to retrofit.
- (b) Refuse the launch outright and inform the programme director that the standard is non-negotiable in all circumstances.
- (c) Convene the team and programme director briefly; assess the concrete risk of silent record loss in citizen benefit data; if the launch proceeds, grant a time-boxed, documented waiver with a named owner, a retrofit date, and interim manual monitoring of rejects; escalate if the risk is unacceptable.
- (d) Tell the team to launch but privately instruct one engineer to build the quarantine feature over the weekend without telling the programme director.
- (e) Email the programme director restating the standard and copy the departmental risk register team.

**Most effective: (c). Least effective: (d).**

**Explanation:** Option (c) moderates a difficult discussion about a high-risk topic within a constrained timescale, converts an informal "technicality" argument into a concrete risk assessment, and uses the standard's own governed flexibility — a documented, time-boxed waiver with ownership and monitoring — rather than either rigidity or capitulation. Option (d) is worst: it launches non-compliantly *and* adds a concealed, unresourced weekend workaround, deceiving the programme director and creating an unreviewed change path. Option (a) is weak: unenforced verbal exceptions are how "temporary" gaps become permanent. Option (b) refuses the risk conversation the role exists to have. Option (e) is passive-defensive, protecting a paper trail without engaging the decision.

**Question 2 (moderate) — The struggling team lead.**

One of four team leads, promoted eight months ago, is visibly struggling: their team's delivery has slowed, two engineers have privately said they are considering leaving because sprint planning is chaotic, and the lead has started declining one-to-ones, citing workload. The team is mid-way through a critical integration for another department.

- (a) Move the strongest engineer from another team in to "shadow" the lead without explaining why to either of them.
- (b) Reinstate the one-to-ones as non-optional, share the specific observations candidly and supportively, ask for the lead's own diagnosis, and agree a support plan — such as a delivery manager pairing, coaching, or temporarily narrowing their scope — with a review point in four to six weeks.
- (c) Demote the lead back to engineer immediately to protect the critical integration.
- (d) Wait until the integration ships, then address the performance issues in the next formal review cycle.
- (e) Ask the two unhappy engineers to give the lead direct feedback themselves, since the issue is between them.

**Most effective: (b). Least effective: (d).**

**Explanation:** Option (b) reflects the capability-building core of the role: treating a struggling recent promotee as a development situation with structure — candid observations, the lead's own diagnosis first, concrete support, and a bounded review point. Option (d) is least effective, though it looks prudent: months of further chaos risk losing two engineers, harming the integration, and letting the lead fail longer. Option (c) is disproportionate — no support was offered before the sanction. Option (a) is manipulative and will be read as surveillance. Option (e) abdicates a leadership responsibility to peer feedback that exceeds what peers can fix.

**Question 3 (hard) — The vendor announcement and the excited minister's office.**

A major cloud vendor announces an "autonomous data engineering" AI service, claiming it eliminates most pipeline development. The minister's office, having read press coverage, asks a director whether the department can cut its data engineering headcount next year. The director asks for a same-week briefing. The community is anxious; two engineers have already asked whether their jobs are safe.

- (a) Write a briefing dismissing the technology as hype and recommending no change, to reassure the community.
- (b) Write a balanced briefing: summarise what the service verifiably does today versus vendor claims, propose a small time-boxed evaluation against one real use case, set out realistic capability implications (skills shifting toward oversight, integration design, and assurance rather than disappearing), and address the community openly about what was advised and why.
- (c) Delay the briefing until a full three-month evaluation can be run, since advising without evidence would be irresponsible.
- (d) Write the briefing recommending early adoption and voluntary redundancy planning, aligning with the direction the minister's office seems to want.
- (e) Send the director links to independent analyst coverage and offer to discuss it when the anxiety has died down.

**Most effective: (b). Least effective: (d).**

**Explanation:** This scenario tests three named skills at once. Data innovation means separating verifiable current capability from claims and generating evidence cheaply via a time-boxed pilot — neither dismissal (a) nor credulity (d). Communicating between the technical and non-technical means giving the director something a minister's office can absorb within the constrained timescale, where (c) misses the political moment entirely. Representing the community means addressing job-security anxiety with candour about how roles will evolve rather than hollow reassurance. Option (d) is least effective because it converts marketing into workforce policy on unverified claims. Option (a) sacrifices credibility as an honest broker. Option (e) is abdication dressed as delegation.

**Question 4 (moderate) — The cross-department data quality dispute.**

A team provides a conformed dataset to another government department. Their head of analysis emails a director claiming "poor data quality" caused errors in their published statistics, demanding a formal apology and compensation. Investigation shows the receiving department misapplied a field that the published data dictionary defines clearly — but also that the dictionary's distribution list was out of date, so they never received the last two updates.

- (a) Reply with the evidence that their analysts misused the field, and decline further discussion until the accusation is withdrawn.
- (b) Accept fault fully and offer compensation to preserve the relationship.
- (c) Contact their head of analysis directly to propose a joint technical review; present the field-definition evidence factually and without blame; acknowledge the distribution-list failure and fix it; propose a shared change-notification process so both organisations get earlier warning of definition changes.
- (d) Escalate to a director with a rebuttal pack and let the directors resolve it between themselves.
- (e) Quietly fix the distribution list and wait to see whether the complaint is pursued.

**Most effective: (c). Least effective: (e).**

**Explanation:** Option (c) mediates between people while managing a difficult, reputationally loaded discussion: it separates fact from blame, is transparent about the contributory failure rather than hiding behind the stronger evidence, and converts the dispute into a durable process improvement. Option (e) is least effective: it conceals a known contributory failure while a formal accusation stands. Option (a) wins the battle and loses the relationship. Option (b) misstates the facts and sets an unsustainable precedent. Option (d) outsources a technical dispute best resolved by the person closest to it.

**Question 5 (moderate) — The metadata governance decay.**

Six months after a successful launch, a metadata repository is decaying: stewards in two directorates have stopped updating entries, and a spot check shows 30% of "complete" entries are now stale. Delivery teams say cataloguing "adds no value to sprints". Meanwhile, a data protection review has asked for evidence of the data inventory within eight weeks.

- (a) Issue a directive that all teams must update their catalogue entries within two weeks, with non-compliance reported to directors.
- (b) Pay a contractor team to bulk-update the entries before the review deadline.
- (c) Use the review deadline as the catalyst: brief directorate leaders on the concrete consequence (a failed data protection review), re-establish stewardship with named owners and time in plans, automate harvesting of the technical fields so stewards maintain only business context, and integrate entry updates into the deployment workflow so currency becomes a by-product of delivery rather than an extra chore.
- (d) Report to the review that the repository is materially complete, since most entries were accurate at launch.
- (e) Accept that metadata repositories always decay and scope the review response around other evidence sources.

**Most effective: (c). Least effective: (d).**

**Explanation:** Option (c) converts an abstract governance duty into a concrete stake leaders understand, fixes the incentive problem the teams named, and rebuilds stewardship with ownership and time — the design insight being that governance relying on voluntary extra work always decays, while governance embedded in the pipeline persists. Option (d) is least effective and the only ethically disqualifying one: describing 30%-stale data as "materially complete" to a data protection review is a misrepresentation with legal and reputational consequences. Option (a) attacks none of the causes. Option (b) buys a snapshot while teaching that neglect gets bailed out. Option (e) treats a solvable design problem as fate.

**Question 6 (hard) — The incident during the board meeting.**

While presenting a data strategy to a departmental board, a deputy reports that the overnight conformed load feeding several departments' morning statistics has partially failed, and teams are split on whether to re-run (statistics available two hours late) or publish from the partial load (on time, but roughly 8% of records missing, concentrated in one region). Publication is due in 90 minutes. The deputy asks for a decision.

- (a) Step out briefly; direct the re-run (late but complete), on the basis that regionally skewed statistics are worse than late statistics; ask the deputy to notify affected departments' contacts immediately with the revised time; return to the board and briefly inform them.
- (b) Reply by message: "Publish from the partial load; we'll correct later" — on time delivery protects the department's reputation.
- (c) Tell the deputy to make the call themselves; the board meeting takes priority.
- (d) Leave the board meeting entirely to personally supervise the re-run.
- (e) Step out and convene a 30-minute call with all affected departments to reach consensus before deciding.

**Most effective: (a). Least effective: (b).**

**Explanation:** Publishing statistics with an 8% gap concentrated in one region is not a minor completeness issue — it is a skewed picture downstream departments would treat as true, and regionally biased official figures carry equity and trust harms a two-hour delay does not. Complete-but-late beats wrong-but-punctual for public data. Option (b) is least effective, worsened by "we'll correct later" — knowingly publishing skewed figures. Option (a) shows proportionate presence: a brief, decisive intervention with clear delegation, then candour with the board. Option (c) is abdication at the wrong moment: the deputy explicitly asked for a decision exceeding their risk authority. Option (d) over-corrects, signalling the services cannot run without personal supervision. Option (e) mistakes consultation for decision-making under a 90-minute deadline.

**Question 7 (moderate) — The standards rebel with a point.**

A technically respected principal engineer publicly refuses to follow a new team-based programming standard, arguing in the community channel that its mandated orchestration pattern is "outdated for streaming workloads" — and the technical argument, on inspection, has merit for a subset of cases. Other engineers are watching how this is handled; two teams have quietly paused adopting the standard.

- (a) Enforce the standard uniformly: credibility requires that no one is exempt, whatever the technical merits.
- (b) Acknowledge publicly that the concern has technical merit; invite the principal engineer to lead a working group to define a streaming-workload profile or exception within the standard, with a deadline; restate that the current standard applies until formally amended; and privately discuss why public defiance was the wrong route and what the right one is.
- (c) Grant the principal engineer's teams an informal exemption to keep the peace.
- (d) Remove the engineer from the community channel for undermining agreed standards.
- (e) Withdraw the standard until full consensus is achieved.

**Most effective: (b). Least effective: (d).**

**Explanation:** Option (b) honours the valid engineering point, channels the challenger's expertise into improving the standard through the governed route, keeps the standard authoritative meanwhile, and deals with the behavioural issue privately and developmentally — separating the message from the method. Option (d) is least effective: punishing the most respected engineer for a technically meritorious challenge would chill honest dissent across the community and signal that standards are about authority rather than engineering. Option (a) converts a fixable design gap into a legitimacy crisis. Option (c) teaches everyone that standards bind only the compliant. Option (e) abandons the estate to fragmentation.

**Question 8 (hard) — The capability budget under pressure.**

Mid-year savings are demanded across the department. A director proposes cancelling the data engineering community's training and conference budget and pausing the apprenticeship intake, noting these are "the least operationally disruptive" cuts. Retention already trails the market, two teams depend on skills (streaming, IaC) that the training programme was building, and the apprenticeship scheme is the main pipeline for diversifying the profession's intake.

- (a) Accept the proposal; delivery must come first in a savings year, and development can resume next year.
- (b) Refuse to offer any savings from the area, arguing data engineering is too critical to cut.
- (c) Counter-propose within 48 hours: offer alternative savings that can be better absorbed (e.g. deferring a tooling renewal, reducing contractor reliance by converting one role), quantify the true cost of the proposed cuts — attrition replacement costs against training costs, the delayed capability the two teams need, and the diversity pipeline impact — and propose protecting the apprenticeships and a reduced, prioritised training programme.
- (d) Accept the cuts publicly but privately tell leads to disguise training as project costs.
- (e) Email the community that the director is cutting their development, encouraging them to raise concerns through staff networks.

**Most effective: (c). Least effective: (d).**

**Explanation:** Building data engineering capability is a named duty, so defending it with evidence is doing the job, not special pleading. Option (c) engages the savings requirement seriously, converts capability from a soft plea into hard numbers, and prioritises rather than protecting everything. Option (d) is least effective and integrity-breaking: mislabelling training as project costs is financial misreporting of public money. Option (b) refuses collective responsibility. Option (a) is the quiet failure — "least operationally disruptive" is true only on a one-year horizon. Option (e) weaponises the community against the director, breaching the trust needed to represent engineers effectively.

**Question 9 (moderate) — The conformed model shortcut.**

A programme board wants a "quick win": joining a conformed citizen dataset with a legacy departmental dataset for a new cross-cutting analysis for a spending review submission, in three weeks. A data modelling lead reports that the legacy dataset's person-matching keys are unreliable — trial matching produced a 12% false-match rate — and recommends eight weeks to build proper resolution logic. The board chair says: "It's for internal analysis, not publication; 88% right is good enough."

- (a) Deliver the three-week join as asked, since the chair has accepted the accuracy trade-off.
- (b) Deliver the three-week join, but attach a caveat page describing the false-match rate.
- (c) Explain the specific consequence in the board's terms — at 12% false matches, the spending review figures could be materially wrong in either direction, and "internal" analyses have a way of anchoring real allocation decisions; offer a middle path such as three-week delivery restricted to the record subset with reliable keys (quantifying its coverage), with the full resolution logic to follow; let the board choose between honestly framed options.
- (d) Refuse until the eight-week work is complete, since the modelling lead's professional judgement must be final.
- (e) Ask the modelling lead to lower the matching threshold so the false-match rate looks smaller in reporting.

**Most effective: (c). Least effective: (e).**

**Explanation:** Option (c) translates a technical metric into decision consequences, respects the board's authority to accept risk while ensuring the risk is genuinely understood, and offers an engineered middle path. Option (e) is least effective and the only dishonest one: tuning a threshold to make a quality metric look better without making matching better manipulates evidence feeding a spending review. Option (b) is the subtle trap: a caveat page detaches from headline numbers within one forwarding. Option (a) abdicates responsibility for making the trade-off legible before it was accepted. Option (d) makes a specialist's advice into a veto over governance.

**Question 10 (moderate) — Representing the profession under fire.**

At a cross-government conference, during a talk on a department's data engineering practice, a senior figure from another department interrupts from the floor: "Frankly, departmental data engineering teams like yours are why nothing interoperates — you all build bespoke empires." There is laughter, and the room waits for the response. 200 people are watching, including several of this department's own engineers.

- (a) Respond in kind with a barbed joke about the questioner's department's well-known integration failures.
- (b) Acknowledge the legitimate frustration behind the point, briefly evidence where cross-government standards are working and where this department has fallen short and is fixing it, and offer to continue the exchange in the panel or afterwards — modelling for the room and the watching engineers how the profession debates.
- (c) Decline to engage: "I'll take questions at the end", and continue the prepared talk.
- (d) Concede the criticism entirely to defuse the moment.
- (e) Invite the questioner to co-present a session next year on interoperability, without addressing the substance now.

**Most effective: (b). Least effective: (a).**

**Explanation:** Speaking on behalf of, and representing, the community to large audiences is named in the role profile, and this scenario tests it under mild hostility. Option (b) treats the interruption as a real argument, responds with brief evidence and balanced candour including where the department has fallen short, manages the room's format, and models professional conduct for the watching engineers. Option (a) is least effective: a barbed retort converts a professional exchange into an inter-departmental feud in front of 200 witnesses and shows the engineers exactly the behaviour that would otherwise be disciplined. Option (c) avoids harm but reads as unable to engage. Option (d) overcorrects and demoralises the watching community. Option (e) is charming but empty on its own.

### Administration tips

- **Score for whether a candidate's response fixes the system, not just the incident** — the strongest answers usually combine an immediate decision with a durable improvement.
- **Watch for the integrity tripwires** — concealment, misreporting or manipulation. These are almost always the least effective option in a scenario.
- **Note whether a candidate balances decisiveness with proportionality** — both abdication ("let someone else decide") and over-control ("I will personally supervise") should be treated as weaker answers.
- **Note whether a candidate answers from public sector values** — user needs first, candour about failure, collaboration, stewardship of public money — rather than a purely commercial instinct.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an idealistic answer over an effective one** — "convene all stakeholders for consensus" sounds collaborative but is often the passive or slow option.
- **Crediting a passive option** — waiting for review cycles, quietly fixing and hoping, sending links instead of judgement.
- **Missing when a candidate's answer ignores the values context** — candour about one's own side's failures, honest data over punctual data, evidence over vendor narrative.
- **Accepting an answer that protects the candidate's position instead of the outcome** — paper-trail options that protect the candidate while leaving users exposed.
- **Over-indexing on a candidate being "right"** in scenarios where a party is partly wrong and partly right, at the expense of the relationship or the outcome.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a head of data engineering: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested holding complex structures in mind, deducing consequences rigorously from stated rules, and prioritising soundly under time pressure. The numeric section tested reading units and bases correctly, compounding growth, and computing unit rates rather than totals. The verbal section tested reading standards, agreements and reports with precision — qualified versus absolute commitments, conjunctive requirements, and evidence versus marketing. The situational judgement section tested the leadership terrain of the role: holding standards while making room for legitimate challenge, defending capability with evidence, and representing a community candidly under pressure.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, read and write standards with rigour, and lead a community through delivery, capability, and difficult conversations — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
