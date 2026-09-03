# Data Scientist - Psychometric Assessment Resources

## Introduction

Welcome. This resource supports you in administering a workplace job-specific psychometric assessment to a candidate for the data scientist role level within the UK Government Digital and Data profession. Whether you are running a recruitment exercise, a promotion assessment, or a structured selection process, this document gives you a ready-made set of assessment material aligned to this role.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and judgement that underpin strong job performance. They are widely used across the Civil Service and the broader public sector because they are fair, objective, and evidence-based: every candidate answers the same kinds of questions, and results are scored consistently rather than depending on an assessor's impression. For a data scientist, these assessments are particularly relevant because the role lives at the intersection of maths, statistics, software engineering, and communication. The very skills the assessments measure - spotting patterns, interpreting numbers, reading dense material carefully, and making sound judgements with stakeholders - are the skills a data scientist uses when exploring and visualising data, building models, and turning findings into organisational insight.

This document is organised into four main assessment sections, each of which mirrors a common psychometric test type, adapted specifically to this role:

1. **Workplace job-specific cognitive assessment** - pattern recognition, logical deduction, error checking, and problem solving using the artefacts a data scientist genuinely handles: datasets, model outputs, pipelines, and dashboards.
2. **Workplace job-specific numeric reasoning assessment** - interpreting tables, percentages, ratios, model performance metrics, and capacity figures drawn from realistic government data science work.
3. **Workplace job-specific verbal reasoning assessment** - reading and reasoning about the policies, standards, emails, and reports that shape the work, including data ethics and privacy material.
4. **Workplace job-specific situational judgement assessment** - realistic workplace dilemmas involving stakeholders: policy colleagues, data engineers, delivery managers, service owners, and the public whose data is stewarded.

Each section explains what the assessment measures and why it matters for this role, maps the assessment dimensions to the specific skills in the capability framework, provides a substantial set of practice questions with full worked explanations, and finishes with administration and scoring guidance.

How should you use this document? Present the same questions and hold every candidate for this role level to the same time limit and conditions, ideally under light time pressure as described in each section. Keep the worked explanations to yourself as an answer key until scoring is complete - a candidate should attempt the questions honestly, without seeing the reasoning in advance. When a candidate gets a question wrong, the explanation is a useful diagnostic at debrief: was it a reading slip, a calculation error, or a judgement difference from the intended answer? Revisit the sections closest to a real assessment need, and use the administration guidance to plan how you will run the session.

Take your time preparing to administer this, and remember: treat the result as one input among several rather than a standalone verdict, and keep a record of your reasoning as you go so the process is auditable and consistent across every candidate.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes needed for this role, rather than abstract intelligence. Unlike a generic IQ test, it uses practical workplace scenarios and data formats drawn from the everyday tasks of a data scientist: inspecting datasets for anomalies, reasoning about pipelines and model behaviour, checking outputs for errors, and prioritising competing analytical tasks.

Typical format and timing: these tests are usually delivered online and timed, most commonly 15 to 30 minutes for 20 to 30 questions. Some platforms are adaptive, adjusting question difficulty based on a candidate's previous answers. Scoring is objective - results are compared against a benchmark or norm group - and good providers report speed versus accuracy separately, so working carefully still counts in a candidate's favour. Candidates are usually offered short, ungraded practice questions first so they can get comfortable with the interface; always offer them.

Why does this matter for a data scientist? The role is fundamentally cognitive. A data scientist is asked to be inquisitive, to find patterns in data and transform them into organisational insight, and to make recommendations that address complex problems. Every one of those duties depends on fast, accurate reasoning: recognising the structure hiding in messy data, deducing what a result does and does not imply, spotting the subtle error in a script or join before it corrupts a conclusion, and deciding what to investigate first when everything looks interesting. A cognitive assessment is, in a real sense, a compressed rehearsal of the working day.

### What it measures for this role level

The assessment dimensions map directly onto the skills named in the role's capability framework:

- **Pattern recognition** maps to *Applied maths, statistics and scientific practices* and *Data science innovation*: discovering new relations in data, matching data sources to techniques such as time series analysis, and recognising when a sequence, trend, or anomaly is meaningful.
- **Logical deduction** maps to *Applied maths, statistics and scientific practices* and *Data ethics and privacy*: reasoning correctly from model outputs, statistical results, and policy rules - including working out what an ethics or privacy policy does and does not permit.
- **Error checking** maps to *Programming and build (data science)*: writing moderate to complex programs and scripts means spotting the off-by-one, the wrong join key, the silent type coercion, and the test that passes for the wrong reason.
- **Prioritisation** maps to *Understanding product delivery* and *Delivering business impact*: defining the minimum viable product, supporting decisions about priorities, and choosing which analysis delivers value soonest.
- **Problem solving** maps to *Data engineering* and *Data science innovation*: diagnosing why a pipeline, model, or dashboard is misbehaving and designing the fastest safe route to a fix.

### Practice questions

Present these questions to the candidate, and use the worked explanations below as your answer key.

**Question 1 (easy) — Pattern recognition in a data series.**
A candidate is examining weekly counts of completed applications on a government digital service: 1,200; 1,260; 1,323; 1,389; 1,458. Which value should be predicted for the next week if the pattern continues?

A) 1,517  B) 1,531  C) 1,545  D) 1,560

**Correct answer: B) 1,531.**
**Explanation:** Check the differences: 60, 63, 66, 69 — the differences are not constant, so this is not simple linear growth. Check the ratios: 1,260/1,200 = 1.05; 1,323/1,260 = 1.05; each week grows by 5%. So the next value is 1,458 × 1.05 = 1,530.9 ≈ 1,531. A data scientist will often distinguish additive from multiplicative growth before choosing a time series model; this is exactly that judgement in miniature.

**Question 2 (easy) — Error checking in a lookup table.**
A team maintains a reference table mapping region codes to region names for a dashboard. A colleague pastes in a new version. Which row contains an error?

| Code | Region |
|------|--------|
| E12000001 | North East |
| E12000002 | North West |
| E12000003 | Yorkshire and The Humber |
| E1200004 | East Midlands |
| E12000005 | West Midlands |

**Correct answer: the East Midlands row.**
**Explanation:** Every valid code in the table has the pattern "E12" followed by six digits (nine characters total). The East Midlands code "E1200004" has only five digits after "E12" — a missing zero. In real work this exact class of error (a truncated code) silently breaks joins: the row simply drops out of an inner join and regional totals become wrong without any error message. Scanning for structural consistency — same length, same prefix, same format — is faster and more reliable than reading each code digit by digit.

**Question 3 (moderate) — Logical deduction from validation rules.**
An organisation's model deployment policy states: "A model may be deployed to production only if (1) it has passed peer review, and (2) it has an equality impact assessment, and (3) either it uses no personal data or a Data Protection Impact Assessment (DPIA) has been completed." A model has passed peer review, has an equality impact assessment, and uses pseudonymised personal data. No DPIA has been completed. Can the model be deployed?

A) Yes, because pseudonymised data is not personal data
B) Yes, because two of the three conditions are met
C) No, because pseudonymised data is still personal data and no DPIA exists
D) Cannot determine without knowing the model type

**Correct answer: C.**
**Explanation:** The policy is a conjunction: all three conditions must hold. Conditions (1) and (2) hold. Condition (3) is a disjunction: "no personal data" OR "DPIA completed". Under UK GDPR, pseudonymised data remains personal data because it can be re-identified with additional information — so the first branch fails; and no DPIA exists, so the second branch fails. Condition (3) is therefore false, and deployment is not permitted. Note how the question rewards precise reading of AND/OR structure plus one piece of domain knowledge this role genuinely requires (the status of pseudonymised data).

**Question 4 (moderate) — Spotting the flaw in an analytical inference.**
A colleague reports: "Users who received our reminder email renewed their licence at a rate of 78%, compared with 54% for users who received no email. Therefore the email caused a 24 percentage point uplift in renewals." What is the strongest logical objection?

A) The percentages should be expressed as a ratio, not a difference
B) The email group may differ systematically from the no-email group, so the comparison is confounded
C) 78% is not statistically significantly different from 54%
D) Renewal rates should be measured monthly, not annually

**Correct answer: B.**
**Explanation:** The claim is causal ("caused an uplift") but the evidence is observational. If, for example, the email was only sent to users with a valid email address on file — who may be more digitally engaged and more likely to renew anyway — the groups are not comparable and the 24-point gap conflates the email's effect with selection effects. Option C is speculative: with large samples the difference could easily be significant, and significance would not fix confounding anyway. Options A and D are stylistic, not logical. Recognising confounding is central to the duty to "make recommendations to address complex problems" honestly.

**Question 5 (moderate) — Error checking in code logic.**
A candidate reviews a colleague's Python snippet intended to keep only complete records from the last 12 months:

```python
recent = df[df["date"] >= cutoff]
complete = recent[recent["status"] != "incomplete"]
rate = len(complete) / len(df)
```

The team describes `rate` as "the completeness rate of recent records". What is wrong?

A) The date filter should use > rather than >=
B) The denominator should be `len(recent)`, not `len(df)`
C) The status filter should use == rather than !=
D) Nothing is wrong

**Correct answer: B.**
**Explanation:** As written, the numerator counts complete recent records, but the denominator counts *all* records, including old ones. The quantity computed is "complete recent records as a share of everything", not "the completeness rate of recent records", which would be `len(complete) / len(recent)`. This is a classic denominator mismatch — one of the most common and most damaging analytical bugs, because the code runs without error and produces a plausible-looking number. The skill of "testing methodologies" includes writing an assertion or unit test that would have caught this: for a period where all records are complete, the rate should equal 1.0, and this code would fail that test whenever old records exist.

**Question 6 (moderate) — Prioritisation under delivery pressure.**
It is Monday. A candidate's sprint ends Friday. They have four tasks:

1. Fix a bug that makes yesterday's published dashboard overstate a key figure seen by ministers (2 hours).
2. Finish the MVP of a forecasting model the service owner needs for a funding decision next Monday (2 days).
3. Refactor a working but messy feature-engineering script (1 day).
4. Respond to a data ethics query from the privacy team about a proposed new data source, needed "this month" (2 hours).

What is the most defensible order?

A) 2, 1, 4, 3  B) 1, 2, 4, 3  C) 1, 4, 2, 3  D) 3, 1, 2, 4

**Correct answer: B.**
**Explanation:** Task 1 first: a live, published, incorrect figure being seen by senior decision-makers is actively causing harm right now, and the fix is quick — urgency and impact both point to immediate action, and correcting the public record promptly reflects transparency values. Task 2 next: it is the sprint's core deliverable with a hard external deadline, and at 2 days it needs the remaining runway. Task 4 fits easily after — it is important but its deadline ("this month") is looser, and 2 hours slots in before Friday. Task 3 is valuable but has no deadline and no user-facing impact; it waits. Option C is a reasonable-looking distractor, but delaying the 2-day MVP behind a loose-deadline query adds schedule risk for no benefit. This mirrors the framework duty to "define the minimum viable product and support decisions about priorities".

**Question 7 (moderate) — Pattern recognition in model behaviour.**
A classification model's weekly precision on live data reads: 0.91, 0.90, 0.91, 0.89, 0.90, 0.84, 0.78, 0.71. What is the most reasonable interpretation?

A) Normal random fluctuation throughout
B) A gradual decline from the start, suggesting the model was overfitted
C) Stability followed by a sustained recent decline, suggesting data drift or an upstream change
D) The metric is broken because precision cannot decline this fast

**Correct answer: C.**
**Explanation:** The first five weeks oscillate within ±0.01 of 0.90 — classic noise around a stable level. The last three weeks fall 0.06, 0.06, and 0.07 in succession — a change too large and too consistent to be the same noise process. The pattern is "stable, then break", not "gradual decline from the start" (ruling out B) and not uniform fluctuation (ruling out A). The correct professional response is to investigate what changed around week six: a new data source, a schema change in the pipeline, a shift in the population using the service. Detecting change-points by eye is a core inquisitiveness skill: the pattern has to be noticed before any tool confirms it.


**Question 8 (moderate) — Problem solving in a data pipeline.**
Every night, a pipeline a candidate co-owns with a data engineer runs four steps: (1) ingest raw records from a department system, (2) validate and clean, (3) compute features, (4) refresh a dashboard. This morning the dashboard shows figures for two days ago, not yesterday. The pipeline logs show step 1 succeeded, step 2 succeeded, step 3 succeeded, and step 4 succeeded. What is the most likely explanation to investigate first?

A) The dashboard tool is broken and needs a restart
B) Step 1 ingested an empty or stale extract, so every later step "succeeded" on old data
C) Step 3's feature code has a bug
D) The logs are lying and step 4 actually failed

**Correct answer: B.**
**Explanation:** All four steps report success, yet the output is stale. The hypothesis that reconciles both facts is that the *content* was stale from the start: if the source system published no new extract (or republished the old one), every downstream step would process it without error. "Success" in pipeline logs usually means "did not crash", not "processed fresh data". The professional check: compare the row count and maximum date in the ingested extract against expectations — a freshness assertion. Options A, C, and D each contradict at least one observation or assume the least likely failure (logs falsely reporting success) before the most likely one (garbage in, garbage out). Designing pipelines that fail loudly on stale input is part of working with data engineers to "design and provide products for the organisation".

**Question 9 (hard) — Logical deduction with conditional statements.**
A team's coding standard says: "If a script writes to the shared analytical database, then it must have automated tests. If a script has automated tests, then it must be in version control." A candidate discovers a script that is not in version control. What can validly be concluded?

A) It has no automated tests and does not write to the shared database
B) It writes to the shared database
C) It has automated tests but they are stored elsewhere
D) Nothing can be concluded

**Correct answer: A.**
**Explanation:** This is a chain of contrapositives. Rule 2: tests → version control. The script is not in version control, so by contraposition it has no automated tests. Rule 1: writes to database → tests. The script has no tests, so by contraposition it does not write to the shared database (or it is violating the standard — but the question asks what follows *if the standards hold*). Working through contrapositives quickly matters when auditing compliance with engineering standards, and when debugging: "the alert didn't fire, and the alert always fires when X happens, therefore X didn't happen."

**Question 10 (hard) — Pattern recognition across categories.**
A candidate is profiling a new dataset of 10,000 service applications. They notice: 9,988 rows have a postcode; 12 have the value "ZZ99 9ZZ"; the 12 all have the same submission timestamp, the same (different) applicant ages, and application IDs in one contiguous block. What is the most plausible explanation?

A) Twelve people who live at the same address applied simultaneously
B) A batch of test or migrated records was inserted with a placeholder postcode
C) A postcode validation bug affects 0.12% of users at random
D) Fraudulent applications from a single actor

**Correct answer: B.**
**Explanation:** Weigh the evidence jointly. "ZZ99 9ZZ" is a well-known placeholder/pseudo-postcode pattern. Identical timestamps plus a contiguous ID block indicate a single batch insert, not twelve independent user sessions (ruling out A and largely D — fraudsters rarely share one exact timestamp across a contiguous ID block through the normal front end). Random validation bugs (C) would scatter across timestamps and IDs. The joint pattern — placeholder value + single timestamp + contiguous IDs — is the signature of test data or a migration batch. The professional action is to confirm with the service team and then exclude or flag these rows, documenting the decision. Being "inquisitive" means treating anomalies as clues about how the data was made, not just noise to delete.

**Question 11 (hard) — Prioritisation with dependencies.**
A candidate must deliver a churn-prediction MVP in ten working days. Tasks and dependencies:

- A: Agree the definition of "churn" with the service owner (1 day; blocks everything else)
- B: Build the labelled training dataset (3 days; needs A)
- C: Train and validate a baseline model (2 days; needs B)
- D: Draft the ethics and privacy note for the privacy team, who need 4 working days to review before any live use (1 day of effort; needs A only)
- E: Build a simple scoring dashboard (2 days; needs C)

What is the earliest everything can be completed including the privacy review, and what should start on day 2?

A) Day 9; start B  B) Day 10; start D  C) Day 9; start D then B  D) Day 10; start B, do D last

**Correct answer: C.**
**Explanation:** The critical insight is that D triggers an external 4-day review that runs in parallel with the rest of the work — so it should start as early as possible. Day 1: A. Day 2: D (1 day), which lets the privacy review run days 3–6 in parallel. Days 3–5: B. Days 6–7: C. Days 8–9: E. Everything, including the review (done end of day 6), completes by day 9. If D were left until after E (option D's ordering), the work would finish day 9 but the review would run days 10–13, missing the deadline. Recognising that externally reviewed items should be started early — because their elapsed time exceeds the effort time — is a core delivery-planning skill for working "with specialists in multidisciplinary teams to smoothly deliver data science products".

**Question 12 (hard) — Error checking a statistical claim.**
A draft report states: "Median processing time fell from 10 days to 8 days, a 20% improvement. Mean processing time fell from 12 days to 13 days. Since most cases are now faster, the service has improved for the typical user, although a small number of very slow cases has grown slower." Which statement about this paragraph is correct?

A) It is internally contradictory: the mean cannot rise while the median falls
B) It is internally consistent: a falling median with a rising mean implies the upper tail got heavier, which matches the final sentence
C) The 20% figure is wrong: (10 − 8) / 8 = 25%
D) Both B and C deserve checking, but B describes the paragraph correctly and the 20% calculation is right as stated

**Correct answer: D.**
**Explanation:** Two checks. Consistency: median down, mean up is perfectly possible — the mean is sensitive to the tail, so a few extreme slow cases can drag it upward while the typical case improves. This exactly matches the paragraph's final sentence, so B's reasoning is sound. Arithmetic: a fall from 10 to 8 is a 2/10 = 20% reduction relative to the original value, which is the correct convention for "improvement from" a baseline; option C wrongly divides by the new value. So the paragraph survives both checks, making D the best answer. This double-check habit — internal consistency first, arithmetic second — is how analysis gets quality-assured before it reaches decision-makers.

**Question 13 (hard) — Problem solving: designing the diagnostic.**
A natural language processing model that routes citizen correspondence to the right team has started misrouting complaints about a new benefit scheme launched last month. Which single diagnostic step gives the most information for the least effort?

A) Retrain the model immediately on all data including the new scheme's correspondence
B) Sample and read a set of misrouted items to see whether they share vocabulary the model has never seen
C) Increase the model's confidence threshold so uncertain items go to a human
D) Ask the data engineering team whether the pipeline changed

**Correct answer: B.**
**Explanation:** The timing (misrouting began when a new scheme launched) suggests the model is seeing out-of-vocabulary language — new scheme names, new terminology — that did not exist in training data. Reading a sample of failures tests this hypothesis directly, cheaply, and quickly, and will also reveal if the cause is something else entirely. Option A acts before diagnosing — expensive and may not fix the issue. Option C is a mitigation, not a diagnosis: sensible as a stopgap, but it answers no questions. Option D investigates a cause the evidence does not point to (the timing correlates with the scheme launch, not a pipeline release — though it might be worth checking that second). The general principle, central to inquisitive data science: form a hypothesis from the timeline, then choose the cheapest observation that could falsify it.

**Question 14 (moderate) — Deduction about capability building.**
An organisation runs a data science community of practice. The rules for its mentoring scheme state: "Every mentor must have completed the analytical standards training. Anyone who has completed the analytical standards training is eligible to peer-review models. Some eligible peer reviewers have never mentored anyone." Which conclusion must be true?

A) Some mentors have never peer-reviewed a model
B) Every mentor is eligible to peer-review models
C) Everyone eligible to peer-review models is a mentor
D) Some people who completed the training are mentors

**Correct answer: B.**
**Explanation:** Chain the two universal statements: mentor → completed training → eligible to peer-review. So every mentor is eligible to peer-review models, which is exactly option B. Option C reverses the implication — eligibility does not make someone a mentor, and the third sentence explicitly confirms some eligible reviewers have never mentored. Option A is not supported: nothing says any mentor has avoided peer review. Option D sounds plausible but is not guaranteed — the rules as stated do not tell us that any mentors actually exist; universal rules can be true even when no one satisfies them. This precision about "must be true" versus "could be true" is the same discipline applied when stating what an analysis does and does not show, and the scenario reflects the framework duty to "support capability building across the team and wider organisation".

### Administration and scoring guidance

- **Where possible, ground live items in real artefacts.** Reviewing a pull request, profiling an unfamiliar dataset, or sense-checking a dashboard exercises the same checks this test measures (formats consistent? denominators right? logic AND/OR read correctly?).
- **Watch for precise logical reading.** Many cognitive items hinge on "only if", "unless", "all", "some", and contrapositives; a candidate who reads these carefully before answering is showing exactly the discipline this role needs.
- **Hold a consistent time allowance across candidates**, typically 30–60 seconds per item. A candidate who flags a stubborn question and returns to it later is using sound strategy, not failing.
- **Offer the ungraded interface practice questions** before the scored section; they calibrate a candidate to the format, the calculator, and the navigation, and skipping them wastes a fair advantage.
- **Administer in a quiet, unhurried setting where possible.** Cognitive scores are sensitive to fatigue.

### Common pitfalls

- **Pattern-matching too fast.** Seeing "arithmetic sequence" when the data is geometric (as in Question 1), or assuming a trend where there is a change-point (Question 7). A strong candidate tests their first hypothesis against every data point before committing.
- **Answering the question that was expected, not the one asked.** Under time pressure, candidates often compute the right quantity for the wrong question — the completeness-rate denominator error in Question 5 is the everyday version of this.
- **Ignoring speed-versus-accuracy reporting.** Some platforms report both. Random guessing to finish fast can hurt a candidate twice, and this is worth distinguishing from genuine reasoning gaps at debrief.
- **Bringing outside assumptions into logic questions.** If a rule says "all deployed models have tests", strong candidates reason from the rule as given — even where their own organisation's reality differs.
- **Getting anchored on one impressive-sounding option.** Distractors are engineered to sound authoritative; a candidate who eliminates options that contradict any stated fact before weighing what remains is applying a strong method.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data presented the way it actually arrives in this job: tables, performance dashboards, budgets, capacity figures, and model metrics. It deliberately focuses on applied business mathematics — percentages, ratios, rates, weighted averages, cost-benefit comparisons — rather than abstract formulas or advanced theory. The skill being tested is not whether a candidate can do hard maths (as a data scientist, they clearly can) but whether they can extract the right numbers from realistic material quickly, choose the right operation, and avoid the traps that catch even quantitative professionals under time pressure.

Typical format and timing: usually 15 to 25 minutes for 15 to 20 questions, delivered online with a strict time limit. Most assessments allow or provide an on-screen calculator — interpretation is being tested, not mental arithmetic. Data is often shared across several questions: one table might feed three questions, so reading the table carefully once pays off repeatedly.

Why does this matter for a data scientist? This role's entire value chain is numeric: preparing and manipulating data and performing complex analytics, applying designated quantitative techniques such as time series analysis, optimisation and simulation, and presenting figures that inform "strategic and operational decision making". Ironically, experienced quantitative specialists sometimes underperform on these tests by overcomplicating simple questions - a pattern worth watching for at debrief.

### What it measures for this role level

- **Table and chart interpretation** maps to *Delivering business impact*: communicating effectively and presenting analysis and visualisations tailored to an audience starts with reading tables and charts without error.
- **Percentages, rates, and ratios** map to *Applied maths, statistics and scientific practices*: conversion rates, error rates, percentage-point versus percentage changes, and index numbers are the daily currency of government performance analysis.
- **Model performance metrics** map to *Data science innovation* and *Developing data science capability*: precision, recall, false positives, and cost trade-offs are numbers a data scientist must manipulate confidently when building "reports, models and dashboards".
- **Budget and capacity arithmetic** maps to *Understanding product delivery*: sizing an MVP, estimating compute costs, and supporting "decisions about priorities" all involve quick, defensible arithmetic.
- **Weighted averages and aggregation** map to *Data engineering* collaboration: knowing when totals can and cannot be averaged is essential when designing data products with engineers.

### Practice questions

Present these questions to the candidate, and use the worked explanations below as your answer key.

**Question 1 (easy) — Percentage change in service demand.**
A digital service received 84,000 applications in Q1 and 96,600 in Q2. What was the percentage increase?

A) 12%  B) 13%  C) 15%  D) 16%

**Correct answer: C) 15%.**
**Explanation:** Increase = 96,600 − 84,000 = 12,600. Percentage increase = 12,600 / 84,000 = 0.15 = 15%. The classic trap is dividing by the *new* value: 12,600 / 96,600 ≈ 13% (option B). Percentage change is always relative to the starting value unless stated otherwise.

**Question 2 (easy) — Reading a metrics table.**
A model monitoring dashboard shows monthly predictions and errors:

| Month | Predictions made | Incorrect predictions |
|-------|-----------------|----------------------|
| April | 12,500 | 750 |
| May | 15,000 | 825 |
| June | 18,000 | 1,080 |

Which month had the lowest error *rate*?

A) April  B) May  C) June  D) April and June are tied

**Correct answer: B) May.**
**Explanation:** Compute each rate: April 750/12,500 = 6.0%; May 825/15,000 = 5.5%; June 1,080/18,000 = 6.0%. May is lowest at 5.5%. Note the trap: June has the highest *count* of errors (1,080) but the same *rate* as April, and May's error count (825) is higher than April's yet its rate is lower because volume grew faster. Distinguishing counts from rates is fundamental to honest performance reporting.

**Question 3 (easy) — Compute budget arithmetic.**
A team's cloud compute budget is £4,200 per month. Model training jobs cost £35 per run. Ongoing pipelines already consume £2,975 per month. How many training runs can be afforded each month?

A) 30  B) 35  C) 42  D) 120

**Correct answer: B) 35.**
**Explanation:** Remaining budget = £4,200 − £2,975 = £1,225. Runs affordable = £1,225 / £35 = 35. Option D (120) is the trap for candidates who divide the whole budget by £35 without subtracting the committed pipeline costs. In real capacity planning, committed spend should always be separated from discretionary spend before dividing.

**Question 4 (moderate) — Percentage points versus percentages.**
An intervention raised a service's digital take-up from 40% to 46%. A colleague drafts: "Take-up rose by 6%." Which of the following is the most accurate statement?

A) Correct as written
B) Take-up rose by 6 percentage points, which is a 15% relative increase
C) Take-up rose by 6 percentage points, which is a 13% relative increase
D) Take-up rose by 15 percentage points

**Correct answer: B.**
**Explanation:** The absolute change is 46 − 40 = 6 percentage points. The relative change is 6 / 40 = 0.15 = 15%. Saying "rose by 6%" is ambiguous and, read strictly, wrong (a 6% relative rise from 40% would be 42.4%). Option C uses the wrong denominator (6/46 ≈ 13%). As the person who presents analysis to non-specialist audiences, a data scientist is the last line of defence against this — one of the most common numerical miscommunications in government reporting.

**Question 5 (moderate) — Weighted average across regions.**
A fraud-detection model is evaluated in two regions:

| Region | Cases screened | Detection rate |
|--------|---------------|----------------|
| North | 8,000 | 90% |
| South | 2,000 | 70% |

What is the overall detection rate across both regions?

A) 80%  B) 82%  C) 86%  D) 88%

**Correct answer: C) 86%.**
**Explanation:** The overall rate cannot be found by simply averaging 90% and 70% (that gives 80%, the trap in option A) because the regions screened different volumes. Compute detected cases: North 8,000 × 0.90 = 7,200; South 2,000 × 0.70 = 1,400. Total detected = 8,600 out of 10,000 screened = 86%. Weighted aggregation errors are among the most consequential mistakes in performance reporting — they routinely flatter or damn a service unfairly — and knowing when a simple average is invalid is a skill stakeholders rely on a data scientist for.

**Question 6 (moderate) — Confusion matrix arithmetic.**
A classifier flags benefit claims for manual review. Last month, out of 20,000 claims: 1,000 were genuinely anomalous; the model flagged 1,600 claims in total; 800 of the flagged claims were genuinely anomalous. What were the model's precision and recall?

A) Precision 50%, recall 80%
B) Precision 80%, recall 50%
C) Precision 50%, recall 50%
D) Precision 80%, recall 80%

**Correct answer: A.**
**Explanation:** True positives = 800 (flagged AND genuinely anomalous). Precision = true positives / all flagged = 800 / 1,600 = 50%. Recall = true positives / all genuinely anomalous = 800 / 1,000 = 80%. So half of what the model flags is a false alarm, but it catches four in five genuine anomalies. In operational terms: precision drives the manual review team's workload efficiency; recall drives how much genuine anomaly slips through. Keeping the two denominators straight — flagged versus genuinely anomalous — is the entire trick, and it is exactly the arithmetic behind answering "so how good is the model, really?"

**Question 7 (moderate) — Cost-benefit of automation.**
Manual processing of a form costs £4.50 per case. A team proposes a triage model costing £180,000 to build and £60,000 per year to run, which would fully automate 40% of the 500,000 cases processed each year. Ignoring all other factors, in the first year the proposal would:

A) Save £660,000 net
B) Save £900,000 gross and £660,000 net
C) Save £900,000 net
D) Lose money in the first year

**Correct answer: B.**
**Explanation:** Automated cases = 500,000 × 0.40 = 200,000. Gross saving = 200,000 × £4.50 = £900,000. First-year costs = £180,000 build + £60,000 run = £240,000. Net first-year saving = £900,000 − £240,000 = £660,000. Option B states both figures correctly; option A gives only the net figure but labels it as if it were the full story of the calculation; the wholly accurate option is the one to choose. Presenting gross and net figures separately — and being explicit about which is which — is precisely how a data scientist demonstrates "an understanding of the organisation and the benefits of data science" in business cases.


**Question 8 (moderate) — Sample sizes and ratios.**
A candidate is designing an A/B test of a redesigned application form. At least 1,400 completions per variant are needed. The service receives 8,000 visits per week, 70% of visitors start the form, and 50% of starters complete it. Traffic is split evenly between the two variants. How many whole weeks must the test run?

A) 1  B) 2  C) 3  D) 4

**Correct answer: A) 1.**
**Explanation:** Weekly completions = 8,000 × 0.70 × 0.50 = 2,800. Split evenly, each variant receives 1,400 completions per week — exactly the requirement. So one week suffices (just). Chaining the rates carefully matters: visits → starts → completions, multiplying at each step, then dividing by two for the split. A common error is applying the 50% completion rate to visits rather than starts (8,000 × 0.50 = 4,000, then × 0.70 and confusion follows). Writing the funnel as a chain before calculating prevents mis-ordering. In practice a candidate might also mention adding margin for dropout and validity checks, but the question says "at least 1,400", and one week delivers it.

**Question 9 (moderate) — Index numbers in a time series.**
A published performance index for processing timeliness is based at 100 in 2022. It reads: 2023 = 108, 2024 = 116, 2025 = 110. Which statement is correct?

A) Timeliness fell by 6% between 2024 and 2025
B) Timeliness fell by 6 index points, about 5.2%, between 2024 and 2025, but remains 10% above 2022
C) Timeliness fell below its 2023 level in 2025
D) Timeliness rose every year since the base year

**Correct answer: B.**
**Explanation:** From 116 to 110 is a fall of 6 index points; as a percentage of 116 this is 6/116 ≈ 5.2% (option A's "6%" confuses points with per cent — the same trap as percentage points, in index form). The 2025 value of 110 means 10% above the 2022 base of 100, and 110 is above the 2023 level of 108, ruling out option C. Option D is contradicted by the 2024→2025 fall. Index numbers appear constantly in government statistics; translating points to percentages correctly when working with time series is a core skill.

**Question 10 (hard) — Compound growth and capacity planning.**
A feature store currently holds 2.0 TB and is growing at 8% per month. The storage tier's limit is 3.0 TB. Roughly how many whole months until the limit is exceeded, and what will the volume be one month before that?

A) 5 months; about 2.7 TB
B) 6 months; about 2.9 TB
C) 6 months; about 2.7 TB
D) 7 months; about 2.9 TB

**Correct answer: B.**
**Explanation:** Compound month by month: 2.00 → 2.16 → 2.33 → 2.52 → 2.72 → 2.94 → 3.17. After 5 months the store is at 2.94 TB (still under 3.0); after 6 months it reaches 3.17 TB, exceeding the limit. So the limit is exceeded in month 6, and one month before (month 5) the volume is about 2.9 TB. The linear-growth trap says 8% of 2.0 TB is 0.16 TB per month, and (3.0 − 2.0)/0.16 ≈ 6.25 → "7 months" (option D); compounding accelerates growth, so the true answer arrives sooner. Compound-versus-linear intuition matters in every capacity and cost projection a data scientist supports.

**Question 11 (hard) — Choosing a model on cost, not accuracy.**
Two candidate triage models are compared on 10,000 monthly cases. Each false negative (missed case needing review) costs an estimated £120 in downstream corrections; each false positive costs £15 of wasted reviewer time.

| Model | False negatives | False positives |
|-------|----------------|----------------|
| Alpha | 150 | 900 |
| Beta | 100 | 1,600 |

Which model has the lower total error cost, and by how much per month?

A) Alpha, by £4,500  B) Beta, by £4,500  C) Alpha, by £7,500  D) Beta, by £1,500

**Correct answer: A) Alpha, by £4,500.**
**Explanation:** Alpha: 150 × £120 + 900 × £15 = £18,000 + £13,500 = £31,500. Beta: 100 × £120 + 1,600 × £15 = £12,000 + £24,000 = £36,000. Alpha is cheaper by £36,000 − £31,500 = £4,500 per month. Notice the trap built into the options: option B carries the correct *magnitude* (£4,500) attached to the wrong *model* — candidates who compute the difference correctly but lose track of direction select it. Re-attaching the label (which model wins) after computing the difference is worth checking for at debrief. The deeper lesson: fewer false negatives did not save Beta, because its extra 700 false positives (700 × £15 = £10,500) outweighed its saving of 50 false negatives (50 × £120 = £6,000). Error trade-offs must be settled in cost terms, not accuracy terms — exactly the kind of recommendation a data scientist makes when helping a service choose between candidate models.

**Question 12 (hard) — Simpson's paradox in service data.**
Two case-processing sites are compared on same-day resolution:

| Site | Simple cases resolved same day | Complex cases resolved same day |
|------|-------------------------------|--------------------------------|
| Site X | 810 of 900 (90%) | 30 of 100 (30%) |
| Site Y | 95 of 100 (95%) | 315 of 900 (35%) |

Site Y beats Site X on both simple cases (95% v 90%) and complex cases (35% v 30%). What are the overall same-day rates, and what should be concluded?

A) X 84%, Y 41%; X looks better overall because it handles mostly simple cases — report both levels
B) X 84%, Y 41%; Y is worse at processing and should adopt X's methods
C) X 41%, Y 84%; Y is better overall
D) X 84%, Y 41%; the data must contain an error

**Correct answer: A.**
**Explanation:** Overall X = (810 + 30) / 1,000 = 840/1,000 = 84%. Overall Y = (95 + 315) / 1,000 = 410/1,000 = 41%. Yet Y is better *within each case type*. This is Simpson's paradox: X's caseload is 90% simple cases, Y's is 90% complex, so the overall rates mostly reflect case mix, not performance. Concluding "Y is worse" (option B) would be analytically wrong and operationally unfair; nothing indicates a data error (option D). The professional answer is A: present the within-type comparisons alongside the overall figures and explain the mix effect. Recognising when aggregation reverses a conclusion is one of the highest-value contributions a data scientist makes to fair, evidence-based decision making.

**Question 13 (hard) — Simulation and expected values.**
A candidate runs a Monte Carlo simulation of demand for a new appointment-booking service. Out of 10,000 simulated weeks: 6,500 show demand ≤ 1,000 bookings; 2,500 show 1,001–1,500; 1,000 show more than 1,500. Capacity is 1,500 bookings per week. Using the midpoint 1,250 for the middle band and assuming excess-demand weeks average 300 unmet bookings, what is the expected number of unmet bookings per week?

A) 30  B) 300  C) 3  D) 120

**Correct answer: A) 30.**
**Explanation:** Only weeks exceeding capacity produce unmet demand. Probability of exceeding = 1,000 / 10,000 = 10%. Expected unmet bookings = 0.10 × 300 = 30 per week. The other bands contribute zero because demand is met. Option B forgets to weight by probability; option D (0.40 × 300) wrongly includes the middle band, which is within capacity. Converting simulation output into a single expected value — and knowing which scenarios contribute — is exactly the "optimisation and simulation" duty in the applied maths skill, and it is how 10,000 simulated futures become one number a service manager can plan with.

**Question 14 (hard) — Reading a two-way table under time pressure.**
A dashboard cross-tabulates last month's 2,400 model-flagged cases by outcome and channel:

| | Online channel | Phone channel | Total |
|---|---|---|---|
| Flag upheld | 864 | 336 | 1,200 |
| Flag overturned | 736 | 464 | 1,200 |
| Total | 1,600 | 800 | 2,400 |

Which statement is supported?

A) The uphold rate is the same for both channels
B) Online cases have a 54% uphold rate; phone cases have 42%; overall 50%
C) Phone cases are upheld more often than online cases
D) Most upheld flags came from the phone channel

**Correct answer: B.**
**Explanation:** Online uphold rate = 864 / 1,600 = 54%. Phone uphold rate = 336 / 800 = 42%. Overall = 1,200 / 2,400 = 50%. Option A is contradicted (54% ≠ 42%); option C reverses the comparison; option D fails because 864 of the 1,200 upheld flags (72%) came online. The efficient technique: compute rates down columns (within channel), not across rows, because the question asks about channels. Choosing the correct margin of a two-way table — rows or columns — is a small skill with outsized impact on the accuracy of the insight presented.

**Question 15 (moderate) — Ratios in team capacity.**
A multidisciplinary team allocates data scientist time across three streams in the ratio 3 : 2 : 1 (analysis : model maintenance : capability building). The team has 4 data scientists, each with 30 productive hours per week. A new request asks for 25 hours per week of analysis. After the ratio allocation, is there enough analysis capacity, and what is the weekly capability-building allocation?

A) Yes — 60 analysis hours; 20 capability hours
B) No — 20 analysis hours; 60 capability hours
C) Yes — 40 analysis hours; 40 capability hours
D) No — 24 analysis hours; 12 capability hours

**Correct answer: A.**
**Explanation:** Total hours = 4 × 30 = 120 per week. The ratio 3 : 2 : 1 has 6 parts, so each part = 120 / 6 = 20 hours. Analysis gets 3 × 20 = 60 hours (comfortably covering the 25-hour request), model maintenance 2 × 20 = 40, and capability building 1 × 20 = 20. Ratio questions reward one habit: sum the parts first, find the value of one part, then multiply. The scenario is grounded in reality: protecting an explicit allocation for capability building is how teams honour the "support capability building within the organisation" duty rather than letting it be crowded out.

**Question 16 (hard) — Percentages of percentages in data quality.**
A dataset of 250,000 records feeds a model. Quality profiling shows 8% of records fail validation. Of the failing records, 75% can be repaired automatically; the rest need manual triage. Manual triage resolves 60% of its cases; the remainder are excluded from modelling. How many records end up excluded?

A) 2,000  B) 3,000  C) 5,000  D) 12,000

**Correct answer: A) 2,000.**
**Explanation:** Failing records = 250,000 × 0.08 = 20,000. Not auto-repairable = 20,000 × 0.25 = 5,000 (option C is this intermediate figure — a classic trap of stopping one step early). Manual triage resolves 60%, so excluded = 5,000 × 0.40 = 2,000. Option B (3,000) is the number *resolved* by triage, another intermediate. Chained percentages demand tracking which base each percentage applies to; writing the cascade as 250,000 → 20,000 → 5,000 → 2,000 keeps every base explicit. Quantifying exactly how much data an exclusion rule discards — and reporting it — is part of preparing and manipulating data responsibly, because silent exclusions can bias a model against exactly the groups whose records fail validation most often.

**Question 17 (easy) — Estimation for a quick sanity check.**
A stakeholder asks, mid-meeting, roughly how many of the service's 412,000 annual applications a triage model would route to the fast track if it fast-tracks 23% of cases. Which estimate should be offered?

A) About 9,500  B) About 95,000  C) About 950,000  D) About 41,000

**Correct answer: B) about 95,000.**
**Explanation:** Round both numbers to friendly values: 23% is close to 25% (one quarter), and one quarter of 412,000 is 103,000; alternatively 20% of 400,000 is 80,000 and 25% is 100,000, so the true value sits near 90,000–100,000. The exact figure, 412,000 × 0.23 = 94,760, confirms "about 95,000". Options A and C are decimal-point slips — an order of magnitude out in each direction — and option D is roughly 10% rather than 23%. The tested skill is magnitude discipline: fixing the answer's order of magnitude before any precise arithmetic. In meetings, a confident, clearly labelled estimate ("roughly 95,000 — I'll confirm the exact figure") serves decision-makers better than silence while searching for a calculator, and it protects against repeating a wildly wrong precise-sounding number.

### Administration and scoring guidance

- **Expect fluency in "boring" arithmetic.** A data scientist who models complex systems daily should still be able to hand-check a percentage-point change or a weighted average at speed; this is a genuine test of applied fluency, not a trick.
- **Note whether a candidate reads the table before the question**, checking units, time periods, and scale qualifiers ("in thousands") first. This matters more when one table feeds several questions.
- **Watch for candidates writing the calculation as a chain before computing** ("visits × start rate × completion rate ÷ 2"). Structure-first working is a stronger signal than a bare final answer.
- **Hold the time limit consistently across candidates**, and if a basic on-screen calculator is provided, confirm every candidate has the same access to it.
- **A candidate who visibly estimates to sanity-check an answer** before selecting it is demonstrating a strong professional habit, not wasting time.
- **A candidate who flags a multi-stage question and moves on** rather than getting stuck is using sound time management; ten correct simple answers outscore one heroic hard one.

### Common pitfalls

- **Misreading chart and table labels.** Confusing monthly with quarterly data, or missing "in thousands", silently scales every subsequent calculation. This is the single most cited numerical-test error, and it is fully avoidable with a five-second label check.
- **Wrong denominator.** Percentage change uses the original value; precision and recall use different denominators; uphold rates run within the channel, not across it. Saying the denominator out loud in words ("out of everything the model flagged…") is a good habit to encourage at debrief.
- **Points versus per cent.** A move from 40% to 46% is 6 percentage points and 15 per cent. Index falls of 6 points are not 6%. Assessments test this relentlessly because real reports get it wrong relentlessly.
- **Averaging averages.** Simple-averaging the regional detection rates in Question 5 gives a wrong answer; volumes must weight the aggregation. If groups differ in size, simple averages of their rates are almost always invalid.
- **Over-calculating.** A quantitative professional's instinct may be to model the question in full. These tests reward the shortest valid route, and estimation or elimination often answers faster than exact computation.
- **Time-sink questions.** A single multi-stage compound-growth question can absorb five minutes. Skipping and returning is the better strategy — unfinished hard questions cost far less than unattempted easy ones.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written material of the kind this role genuinely demands: data ethics policies, statistical standards, technical documentation, stakeholder emails, and analytical reports. The defining rule is fact-based logic: the candidate must answer based strictly on the text provided, ignoring outside knowledge — even correct outside knowledge. Most questions use the strict three-option format True / False / Cannot Say, where "Cannot Say" means the passage provides insufficient information to decide either way. Some questions use multiple-choice comprehension instead, asking for the best summary, the author's main point, or what a specific clause permits.

Typical format and timing: usually 15 to 20 minutes for 20 to 30 questions, often under a minute per question, delivered online. Passages are dense on purpose — the time pressure simulates real workplace deadlines.

Why does this matter for a data scientist? Words gate the work at both ends. Upstream, precise reading is essential: an ethics policy's "must" versus "should", a data-sharing agreement's definition of "personal data", a requirement's "at least" versus "up to" all change what may be built. The framework asks a data scientist to "assess and constructively challenge proposed data ethics policies" and to "research developments in data ethics and privacy" — both are exercises in exact reading. Downstream, precise writing and presenting matters just as much: a data scientist "presents and communicates effectively" and tailors "analysis and visualisations to their audience". People who read carefully write carefully; the assessment measures the reading half directly.

### What it measures for this role level

- **Precise comprehension of policy text** maps to *Data ethics and privacy*: extracting exactly what a policy permits, requires, and forbids — and spotting what it is silent about.
- **Distinguishing stated fact from inference** maps to *Applied maths, statistics and scientific practices*: the discipline of "the data shows X" versus "we infer Y" is identical to "the passage states X" versus "the passage implies Y".
- **Following conditional and definitional language** maps to *Programming and build (data science)* and *Understanding product delivery*: requirements documents, acceptance criteria, and delivery method definitions are all conditional texts that must be implemented faithfully.
- **Identifying arguments and assumptions** maps to *Delivering business impact* and *Developing data science capability*: recognising the actual claim in a stakeholder's email — and the assumption hidden underneath it — is the first step of every useful response.
- **Reading under time pressure** maps to the whole role: triaging long documents for the clause that matters is a daily skill.

### Practice questions

Present these passages and questions to the candidate, and use the worked explanations below as your answer key.

**Passage A (for Questions 1–4).** From a draft departmental data ethics policy:

"All analytical projects that use personal data must complete an ethics screening questionnaire before development begins. Projects rated medium or high risk by the screening must additionally be reviewed by the Data Ethics Board, which meets monthly. Projects using only aggregated, non-identifiable data are exempt from screening, although project leads are encouraged to complete the questionnaire voluntarily. The Board may require changes to a project's methodology, and development must not proceed until any required changes are agreed. Screening outcomes are recorded in the departmental register, which is available to all staff."

**Question 1 (easy) — True / False / Cannot Say.**
"Projects that use only aggregated, non-identifiable data are required to complete the screening questionnaire."

**Correct answer: False.**
**Explanation:** The passage says such projects "are exempt from screening, although project leads are encouraged to complete the questionnaire voluntarily". Encouragement is explicitly not requirement — the sentence contrasts "exempt" with "encouraged... voluntarily". The statement contradicts the passage, so it is False, not Cannot Say.

**Question 2 (easy) — True / False / Cannot Say.**
"A project rated low risk by the screening does not need to be reviewed by the Data Ethics Board."

**Correct answer: True.**
**Explanation:** The passage states that projects "rated medium or high risk... must additionally be reviewed by the Data Ethics Board". The word "additionally" marks Board review as the extra step triggered only by medium or high ratings; a low-risk rating triggers no such requirement in the text. Careful: this is True because the passage defines the requirement's trigger conditions exhaustively for Board review ("Projects rated medium or high risk... must"); a low rating falls outside the stated trigger, so no requirement applies.

**Question 3 (moderate) — True / False / Cannot Say.**
"The Data Ethics Board meets every two weeks."

**Correct answer: False.**
**Explanation:** The passage states the Board "meets monthly". A claim of fortnightly meetings directly contradicts this stated fact. Notice the difference from Cannot Say: the passage *does* address meeting frequency, and what it says conflicts with the statement. Cannot Say is reserved for claims the passage neither confirms nor contradicts.

**Question 4 (moderate) — True / False / Cannot Say.**
"Most analytical projects in the department are rated low risk."

**Correct answer: Cannot Say.**
**Explanation:** The passage describes the process for different risk ratings but gives no information about how many projects fall into each category. A candidate might guess that low-risk projects predominate in reality — but that is outside knowledge, and the strict rule is to answer from the text alone. The passage is silent, so Cannot Say. This is the single most important habit for verbal tests: plausibility is not evidence.

**Passage B (for Questions 5–8).** From an email sent by a service owner to a data science team:

"Thanks for the demo of the forecasting prototype. I was impressed by the dashboard, and the operations team can already see how they would use the weekly view. However, I remain concerned about two things. First, the model's confidence intervals widen sharply beyond four weeks, which makes the twelve-week view potentially misleading for resource planning. Second, we have not yet tested the model against last winter's surge period. Until both concerns are addressed, I can only support using the tool for short-term planning alongside, not instead of, the current spreadsheet process. To be clear: I want this to succeed, and I'd like a plan for the winter backtest by Friday."

**Question 5 (easy) — Multiple choice.**
What is the service owner's overall position?

A) The prototype should be abandoned in favour of the spreadsheet process
B) The prototype may be used for short-term planning in parallel with the existing process, pending two specific concerns being addressed
C) The prototype is approved for full use once the dashboard is polished
D) The operations team has rejected the weekly view

**Correct answer: B.**
**Explanation:** The email supports use "for short-term planning alongside, not instead of, the current spreadsheet process" until two named concerns (interval widening beyond four weeks; no winter-surge backtest) are addressed. The closing "I want this to succeed" contradicts abandonment (A); nothing conditions approval on dashboard polish (C); the operations team's reaction was positive (D). Reading a stakeholder's position accurately — support with conditions — is the difference between a productive reply and a defensive one.

**Question 6 (moderate) — True / False / Cannot Say.**
"The service owner believes the twelve-week view is currently misleading."

**Correct answer: Cannot Say.**
**Explanation:** The email says the widening intervals make the twelve-week view "potentially misleading". "Potentially misleading" expresses a risk, not a settled belief that it *is* misleading. The statement converts a hedged concern into an absolute claim — a subtle strengthening the text does not support. It is not False either, because the email does not assert the view is *not* misleading. When a passage hedges ("may", "potentially", "likely"), a statement that drops the hedge is almost always Cannot Say.

**Question 7 (moderate) — True / False / Cannot Say.**
"The model has performed poorly when tested against last winter's surge period."

**Correct answer: False.**
**Explanation:** The email states the model has "not yet [been] tested... against last winter's surge period". A claim about the *result* of that test contradicts the passage's statement that the test has not happened. This one catches many candidates, who reason "we don't know how it would perform, so Cannot Say" — but the statement asserts a test outcome exists, and the passage says no test has occurred, which is a direct contradiction. What the statement actually claims needs to be read before it is classified.

**Question 8 (hard) — Multiple choice: identifying the assumption.**
The service owner's concern about the twelve-week view rests most directly on which assumption?

A) Resource planning decisions would rely on the twelve-week view's point forecasts without adequately weighting the widening uncertainty
B) The operations team lacks the skills to use dashboards
C) Confidence intervals should never widen with the forecast horizon
D) Spreadsheet processes are more accurate than models

**Correct answer: A.**
**Explanation:** The stated worry is that widening intervals make the long view "potentially misleading for resource planning" — which is only a problem if planners might treat the central forecast as more certain than it is. That is assumption A. Option C is statistically backwards (intervals *should* widen with horizon; the owner never disputes this — the concern is how the widening is communicated and used). Options B and D are attitudes the email never expresses; indeed it praises the operations team's engagement. Detecting the assumption beneath a stakeholder's concern tells a data scientist what to fix: here, perhaps a visualisation that makes uncertainty impossible to ignore — a direct application of tailoring visualisations to an audience.


**Passage C (for Questions 9–12).** From an internal standards document on analytical quality assurance:

"Analytical outputs intended for publication must undergo dual review: a methodological review by a suitably experienced analyst who was not involved in producing the output, and a sign-off review by the responsible senior analyst. Outputs intended for internal decision making require methodological review only, unless they inform decisions affecting members of the public, in which case the full dual review applies. Reviewers should complete the standard checklist, but may supplement it with additional checks proportionate to the output's risk. Where a machine learning model contributes to an output, the methodological review must include an assessment of training data representativeness. The requirement for independence means that pair-programmed work requires a reviewer from outside the pair."

**Question 9 (moderate) — True / False / Cannot Say.**
"An internal output that informs decisions affecting members of the public requires sign-off review by the responsible senior analyst."

**Correct answer: True.**
**Explanation:** Internal outputs normally need "methodological review only, unless they inform decisions affecting members of the public, in which case the full dual review applies". Dual review is defined earlier as methodological review plus "a sign-off review by the responsible senior analyst". Chaining the definition through the exception gives the answer: such outputs require sign-off review. Verbal tests frequently require carrying a definition from one sentence into an exception clause in another — exactly how real standards documents work.

**Question 10 (moderate) — True / False / Cannot Say.**
"A reviewer is permitted to perform only the standard checklist checks, with nothing extra, for a low-risk output."

**Correct answer: True.**
**Explanation:** "Reviewers should complete the standard checklist, but may supplement it with additional checks proportionate to the output's risk." The word "may" makes supplementary checks discretionary, and proportionality to risk implies a low-risk output can legitimately attract no extra checks. So performing only the checklist is permitted. Note the modal verbs: "must" (dual review, representativeness assessment) versus "should" (checklist) versus "may" (supplements). Tracking must/should/may is the core skill of standards reading — and of challenging draft policies constructively, as the ethics skill requires.

**Question 11 (hard) — True / False / Cannot Say.**
"Work produced by pair programming cannot be reviewed by either member of the pair."

**Correct answer: True.**
**Explanation:** The final sentence states: "The requirement for independence means that pair-programmed work requires a reviewer from outside the pair." If the reviewer must come from outside the pair, then neither member of the pair can act as the reviewer — the statement is a direct logical restatement of the rule. Candidates sometimes mark this Cannot Say because the passage doesn't contain the literal words "cannot be reviewed by either member"; but True/False/Cannot Say tests treat valid one-step logical equivalences as stated. The skill is recognising when a paraphrase preserves meaning exactly and when it smuggles in something new.

**Question 12 (hard) — True / False / Cannot Say.**
"Most published analytical outputs at the department involve machine learning models."

**Correct answer: Cannot Say.**
**Explanation:** The passage explains what must happen *when* a machine learning model contributes to an output, but says nothing about how often that occurs. The conditional rule ("where a machine learning model contributes...") carries no information about frequency. As in Question 4, the trap is treating a rule's existence as evidence about how commonly its trigger arises. Rules describe obligations, not distributions — a distinction also applied when reading data-sharing agreements.

**Passage D (for Questions 13–14).** From a delivery method briefing note:

"Agile delivery suits products where user needs are uncertain and requirements are expected to change; it favours iterative releases, starting with a minimum viable product. Waterfall delivery suits work where requirements are fixed and well understood at the outset, such as some regulatory reporting obligations. The choice of method should follow from the characteristics of the product, not from team preference. Hybrid approaches are common in practice: for example, a fixed statutory deadline may impose waterfall-style milestones on an otherwise agile programme. No method removes the need for user research."

**Question 13 (moderate) — Multiple choice.**
Which statement best captures the note's central argument?

A) Agile is superior to waterfall for government work
B) Delivery method should be chosen to fit the product's characteristics, and elements of both methods can legitimately coexist
C) Waterfall is only appropriate for regulatory reporting
D) User research is optional in waterfall delivery

**Correct answer: B.**
**Explanation:** The note's pivotal sentence is "the choice of method should follow from the characteristics of the product, not from team preference", reinforced by the hybrid example. Option A imposes a preference the note explicitly avoids. Option C over-reads an example ("such as some regulatory reporting obligations") as an exhaustive rule — "such as" signals illustration, not limitation. Option D contradicts the final sentence. This mirrors the framework skill directly: understanding "the differences between delivery methods, such as Agile and waterfall", and choosing "the most appropriate method to deliver each product".

**Question 14 (moderate) — True / False / Cannot Say.**
"A programme with a fixed statutory deadline must be delivered entirely using waterfall."

**Correct answer: False.**
**Explanation:** The note offers the opposite as its example of hybrid working: "a fixed statutory deadline may impose waterfall-style milestones on an otherwise agile programme". So a statutory deadline coexisting with agile delivery is explicitly contemplated, contradicting "must be delivered entirely using waterfall". Absolute words in a statement — "entirely", "must", "never", "all" — are worth watching for, because they are usually where a plausible statement diverges from a hedged passage.

**Question 15 (hard) — Multiple choice: precision about a report's claim.**
A performance report states: "Following the introduction of the triage model, average case-handling time fell by 18%. While several process changes occurred in the same quarter, the scale and timing of the reduction are consistent with the model having made a substantial contribution." Which conclusion does the report actually support?

A) The triage model caused an 18% reduction in case-handling time
B) The reduction is consistent with a substantial contribution from the model, though other simultaneous changes prevent firm attribution
C) The process changes, not the model, caused the reduction
D) Case-handling time will continue to fall by 18% each quarter

**Correct answer: B.**
**Explanation:** The report's own hedging does the work: "several process changes occurred in the same quarter" concedes confounding, and "consistent with... a substantial contribution" claims compatibility, not causation. Option A strengthens "consistent with" into "caused" — precisely the over-claim the report's authors avoided making. Option C makes the opposite over-claim with equal lack of support. Option D invents a projection from a one-off change figure. Preserving an author's exact epistemic strength when summarising — neither strengthening nor weakening it — is essential when briefing decision-makers on analytical findings, and it is what "communicate effectively" means in a statistical organisation.

**Passage E (for Questions 16–18).** From a data-sharing agreement between two public bodies:

"The Recipient may use the shared dataset solely for the purpose of developing and evaluating the fraud-risk model described in Schedule 2. The dataset must not be linked to any other dataset containing personal data without the prior written approval of both parties' data protection officers. The Recipient shall delete the dataset within ninety days of the completion of model evaluation, and shall confirm deletion in writing within a further fourteen days. Aggregated outputs derived from the dataset may be retained indefinitely, provided that no output permits the identification of any individual, whether directly or in combination with other reasonably available information. Nothing in this agreement grants the Recipient any right to share the dataset with third parties."

**Question 16 (moderate) — True / False / Cannot Say.**
"The Recipient may link the shared dataset to another dataset containing personal data if the Recipient's own data protection officer approves in writing."

**Correct answer: False.**
**Explanation:** The agreement requires "the prior written approval of both parties' data protection officers". Approval from the Recipient's DPO alone satisfies only half the condition, so linkage on that basis would breach the agreement — the statement contradicts the text. The word "both" is doing all the work; contract-style passages routinely hide the decisive requirement in a single quantifier. Reading data-sharing agreements at this level of precision is a working reality of collaborating "with stakeholders to identify and address ethical and privacy concerns".

**Question 17 (hard) — True / False / Cannot Say.**
"The Recipient must delete aggregated outputs derived from the dataset within ninety days of completing model evaluation."

**Correct answer: False.**
**Explanation:** The deletion clause applies to "the dataset"; a separate sentence states that "aggregated outputs derived from the dataset may be retained indefinitely" subject to the non-identification condition. The statement transfers an obligation from one object (the dataset) to another (aggregated outputs) that the passage expressly treats differently — a contradiction, so False. This object-swapping trap is common in both tests and real compliance disputes: obligations attach to precisely defined things, and the precise thing matters.

**Question 18 (hard) — Multiple choice.**
Which of the following actions would be permitted under the agreement as written?

A) Using the dataset to prototype an unrelated staffing model, since it is also for internal use
B) Retaining a published statistical table derived from the dataset, where the table's small counts have been suppressed so no individual is identifiable even in combination with other available information
C) Sharing the dataset with a contracted third-party analytics firm that has signed a confidentiality agreement
D) Keeping the dataset for a year after evaluation to allow for possible re-evaluation

**Correct answer: B.**
**Explanation:** Work through each option against the text. A fails the purpose limitation: use is "solely for... the fraud-risk model described in Schedule 2". C fails the final sentence: "Nothing in this agreement grants... any right to share the dataset with third parties" — a confidentiality agreement does not create a right the agreement withholds. D fails the ninety-day deletion clause. B satisfies the aggregated-outputs provision, including its demanding condition ("whether directly or in combination with other reasonably available information") because suppression addresses combination risk. Note how the correct option is the one that engages with the *hardest* part of the clause rather than merely sounding compliant — exactly how proposed data uses should be assessed in practice.

**Question 19 (moderate) — True / False / Cannot Say (Passage E).**
"The Recipient is required to confirm deletion of the dataset in writing no later than one hundred and four days after the completion of model evaluation."

**Correct answer: True.**
**Explanation:** The agreement sets two chained deadlines: deletion "within ninety days of the completion of model evaluation", and written confirmation "within a further fourteen days". The latest permissible confirmation date is therefore 90 + 14 = 104 days after evaluation completes — exactly what the statement claims. Candidates often mark chained-deadline paraphrases as Cannot Say because the number 104 never appears in the text; but simple arithmetic composition of two explicitly stated periods is a valid one-step inference, just like the logical restatement in Question 11. The distinction worth holding onto: combining what the passage states (allowed, and often required) versus importing what the passage never says (never allowed). Contract and policy questions test this boundary constantly, and so does real compliance work when an agreement's clauses are translated into concrete pipeline deletion schedules.

### Administration and scoring guidance

- **Encourage a "text only" reflex.** A candidate's domain expertise is an asset everywhere except here: in True/False/Cannot Say questions, expertise tempts a candidate to fill gaps the passage leaves open. A strong answer can be pointed back to exact words in the passage; if a candidate cannot do this at debrief, the answer was probably a guess even where it happened to be right.
- **The modal verb hierarchy is central.** Must/shall (obligation), should (recommendation), may (permission), "encouraged" (weaker still). Half of policy-reading questions hinge on these.
- **Note whether a candidate reads the statement before rereading the passage.** Parsing what the statement claims — including its quantifiers and absolutes — then scanning for the relevant clause is faster and no less accurate than exhaustive rereading.
- **Where possible, base live items on real government documents.** The Technology Code of Practice, the Data Ethics Framework, and Statistics Authority guidance are good source material.
- **Rehearse the False-versus-Cannot-Say boundary at debrief if a candidate's answers suggest confusion.** False means the passage contradicts the statement; Cannot Say means the passage is silent. Question 7's pattern — a statement presupposing an event the passage says has not happened — is a common confusion worth probing.

### Common pitfalls

- **Bringing in outside knowledge.** The most common failure. A candidate may know that UK GDPR treats pseudonymised data as personal data; if the passage doesn't say it, that knowledge cannot be used to answer.
- **Confusing "likely" with "will".** Passages hedge; statements drop hedges. A "potentially misleading" view is not a "misleading" view; a "probable" outcome is not a "certain" one. Every dropped or added hedge changes the answer.
- **Over-reading examples as rules.** "Such as regulatory reporting" illustrates; it does not limit. "For example" and "including" introduce instances, never exhaustive lists.
- **Answering the gist instead of the claim.** Under time pressure, candidates match the statement's *topic* to the passage and mark True if the passage sounds broadly supportive. Verbal tests punish this: the statement's exact logical content is what is being classified.
- **Poor time allocation across passages.** Reading a passage exhaustively before seeing any question wastes time; skimming so lightly that clauses get misplaced wastes accuracy. The efficient pattern: one purposeful read for structure, then targeted rereads per question.
- **Second-guessing Cannot Say.** Candidates often feel Cannot Say is a "weak" answer and talk themselves into True or False. In well-built tests, Cannot Say is correct roughly as often as the others.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the cognitive, numeric, and verbal assessments, there is often no single objectively right answer: several responses may seem reasonable, and the task is to judge which is *most effective* and which is *least effective* given the role, the organisation's values, and the practical realities of the situation. Response formats vary: some tests ask a candidate to pick the most and least effective actions from four or five options; others ask them to rank all options, or to rate each option's effectiveness independently.

Typical format and timing: usually untimed or generously timed — the test measures natural judgement, not speed. Expect 10 to 20 scenarios, each a short paragraph followed by response options.

Why does this matter for a data scientist? Because the framework is at least half about people. A data scientist collaborates with others to develop data science solutions, works with stakeholders to identify and address ethical and privacy concerns, supports capability building within the organisation, and works with specialists in multidisciplinary teams to smoothly deliver data science products. The hardest moments in this role are rarely technical: they are the moments when a deadline collides with an ethical concern, when a stakeholder wants a number the analysis cannot honestly provide, or when a teammate's work has a problem that must be raised well. In the UK public sector context, effective judgement consistently reflects certain values: putting user needs first, honesty and transparency, collaboration across disciplines, accessibility and inclusion, and the responsible stewardship of public data and money.

### What it measures for this role level

- **Ethical reasoning under pressure** maps to *Data ethics and privacy*: what a candidate does when the ethical path and the convenient path diverge.
- **Stakeholder communication** maps to *Delivering business impact*: tailoring difficult messages — uncertainty, caveats, bad news — to the audience without distorting the analysis.
- **Multidisciplinary collaboration** maps to *Data engineering* and *Understanding product delivery*: handling friction with engineers, designers, delivery managers, and service owners constructively.
- **Capability building and generosity** maps to *Developing data science capability*: how a candidate responds when colleagues need help, when knowledge is hoarded, or when they could teach instead of just doing.
- **Professional integrity of analysis** maps to *Applied maths, statistics and scientific practices*: defending methodological honesty — including about one's own mistakes.

### Practice questions

Present these scenarios to the candidate and ask them to choose the most and least effective options (or rank them, where indicated). Compare their reasoning against the analysis below before scoring.

**Question 1 (moderate) — The convenient shortcut.**
A service owner asks a candidate to have a churn model ready for a ministerial show-and-tell in two weeks. The fastest route is to train on a dataset that includes a field derived from individuals' health-related interactions with the service. The ethics screening for using that field would take about three weeks. Without the field, the model will likely be somewhat less accurate but still useful.

Options:
- A) Use the field now and complete the ethics screening retrospectively — the show-and-tell is only a demo.
- B) Build the model without the sensitive field for the show-and-tell, note the potential accuracy gain, and start the ethics screening in parallel for a possible future version.
- C) Ask the service owner to postpone the show-and-tell until the screening completes.
- D) Escalate to the head of data science that the timeline is impossible and decline the work.

**Most effective: B. Least effective: A.**
**Explanation:** B delivers the business outcome on time, keeps the demo honest about what the model does and doesn't use, respects the ethics process, and preserves the option of the more accurate model later — it treats ethics screening as a design constraint to work within, not an obstacle to dodge. A is least effective: "retrospective screening" inverts the entire purpose of screening, normalises unapproved use of sensitive data, and puts the demo — and public trust — at risk if the screening later raises objections; a demo audience of ministers makes this worse, not better, because it may create commitment to an unapproved approach. C sacrifices a legitimate business need that B shows can be met without compromise. D escalates before attempting a solution and mislabels a solvable problem as impossible. The pattern to look for: the strongest SJT answers usually satisfy the legitimate goal *and* the value at stake, rather than trading one for the other.

**Question 2 (moderate) — The inconvenient result.**
A candidate has spent six weeks building a predictive model their team proposed. Their final evaluation shows it performs only marginally better than the simple rule-based approach the operations team already uses — not enough to justify the added complexity and maintenance cost. The team lead is preparing a slide deck describing the project as a success.

Options:
- A) Present the results neutrally in the deck, highlighting the marginal gain without mentioning the comparison to the existing approach.
- B) Tell the team lead the honest comparison, recommend against deployment, and propose writing up the negative result with lessons learned for the community of practice.
- C) Quietly re-run the evaluation with different test splits until the model shows a bigger advantage.
- D) Ask a data engineer whether the rule-based system could be degraded slightly so the comparison looks better.

**Most effective: B. Least effective: D.**
**Explanation:** B embodies analytical integrity: the comparison against the current approach is the decision-relevant fact, and hiding it (option A) misleads by omission even though every stated number would be true. Negative results honestly written up are genuinely valuable — they prevent other teams repeating the work and they model scientific culture, supporting the capability-building duty. C is results-shopping: re-running evaluations until chance delivers a pleasing split is methodological misconduct in slow motion. D is worse than C — it proposes actively damaging a working public service system to flatter an analysis, harming users and wasting public money for presentational gain; it is the least effective by a wide margin. Note that in most/least format, the *worst* option needs identifying precisely, and sabotage of a live service is categorically worse than self-deception.

**Question 3 (moderate) — The struggling colleague.**
A junior analyst on a candidate's team has been assigned their first machine learning task. Two days before their deadline, the candidate notices from the shared repository that their approach has a serious flaw: they have included the outcome variable's proxy among the features, so the model will look excellent in testing and fail in production (target leakage). They have not asked for help and seem proud of their progress.

Options:
- A) Say nothing — they need to learn from their own mistakes, and it is their deadline, not yours.
- B) Fix the code personally in the repository overnight and mention it casually later.
- C) Ask them for a short pairing session that day, let them walk through the approach, and guide them with questions towards discovering the leakage themselves, leaving time to fix it.
- D) Email their line manager flagging the flaw so it can be addressed through supervision.

**Most effective: C. Least effective: A.**
**Explanation:** C fixes the problem while the deadline still allows it, preserves the junior colleague's ownership and dignity (they discover the issue rather than being told), and teaches a lesson — recognising leakage — that they will keep for a career. This is capability building in its most practical form. B solves the code but not the person: it bypasses their learning, may confuse or embarrass them, and edits their work without consent. D escalates a coaching moment into a management issue, damaging trust when a direct, kind conversation would do. A is least effective: "learning from mistakes" does not require letting a known, serious flaw reach production where it wastes public resources and dents the analyst's confidence far more brutally than a pairing session would. Letting preventable harm occur is not mentorship.

**Question 4 (hard) — The stakeholder who wants a different number.**
A policy team asks a candidate to analyse whether a pilot intervention reduced missed appointments. Their analysis, which they have quality-assured carefully, shows no statistically meaningful effect. The policy lead, under pressure to show the pilot worked, asks them to "look again — maybe slice it by region or age group until we find where it worked".

Options:
- A) Refuse outright and remind the policy lead that torturing the data is unethical.
- B) Run every possible subgroup analysis and report whichever subgroups show positive effects.
- C) Explain the multiple-comparisons problem in plain terms, offer to run pre-specified subgroup analyses that were plausible a priori with appropriate corrections, and offer to help frame honest findings — including what the pilot's design can and cannot detect.
- D) Suggest the policy lead commission a different analyst if they are unhappy with the result.

**Most effective: C. Least effective: B.**
**Explanation:** C is the professional's answer: it neither capitulates nor lectures. It educates the stakeholder about why undisciplined subgroup hunting produces false positives (in plain language, not jargon), and it offers a legitimate path — pre-specified, corrected subgroup analysis — plus help with honest framing, which meets the policy lead's real need: something defensible to say. B is least effective: it is p-hacking as a service, and any "effect" it finds will likely evaporate under scrutiny, embarrassing the policy team far more than a null result would — while eroding the public's ability to trust government evidence. A gets the ethics right but the relationship wrong: "refuse and accuse" leaves the stakeholder's underlying need unmet and makes future collaboration harder. D abdicates: it invites shopping for a compliant analyst, which is worse for the organisation than either refusing or engaging. Strong SJT answers protect the value at stake *and* the working relationship.

**Question 5 (moderate) — The pipeline dispute.**
A candidate needs a new data feed added to a pipeline to meet a sprint commitment. The data engineering team says the request is fourth in their queue and will take three weeks. The delivery manager suggests the candidate "just build a workaround" by scraping the data from an internal reporting portal themselves.

Options:
- A) Build the scraping workaround; it can be replaced with the proper feed later.
- B) Talk to the data engineering lead: explain the sprint commitment and its business impact, ask whether the work can be re-prioritised or whether an interim supported route exists, and adjust the sprint scope with the delivery manager if not.
- C) Escalate to the head of delivery that data engineering is blocking the sprint.
- D) Mark the story as blocked and move to other work until the feed arrives.

**Most effective: B. Least effective: A.**
**Explanation:** B treats the constraint as a shared prioritisation problem, which is what it is. It gives the engineering team the information they need to re-prioritise (business impact), explores legitimate interim options, and — critically — accepts that if the answer is still "three weeks", the sprint scope should change, which is exactly how healthy agile delivery absorbs discovered constraints. A is least effective: shadow scraping creates a brittle, unsupported dependency that will break silently, bypasses the data engineers who must eventually own the feed, and converts a visible three-week delay into an invisible long-term operational risk. C escalates before conversation — and frames colleagues as adversaries ("blocking") — where B might solve it in an hour. D is passive: it accepts the delay without testing whether it is negotiable or communicating the impact. The framework phrase "work with data engineers... to design and provide products" describes option B almost literally.


**Question 6 (moderate) — The accessibility afterthought.**
A candidate's team is about to ship an MVP dashboard for caseworkers. In the final demo, a colleague points out that the dashboard's colour-coded risk indicators are indistinguishable for users with the most common form of colour-vision deficiency, and the charts are unreadable with a screen reader. The service owner says: "Ship it — accessibility is a fast-follow; caseworkers are waiting."

Options:
- A) Ship as-is and add accessibility improvements to the backlog.
- B) Explain that accessible design is a requirement for government services, propose a short delay to fix the highest-impact issues (colour-safe palette plus text alternatives), and agree a plan for full accessibility work immediately after release.
- C) Refuse to ship anything until the dashboard passes a full accessibility audit.
- D) Ship as-is but privately email the accessibility team so the issue is on record.

**Most effective: B. Least effective: A (with D close behind).**
**Explanation:** B takes accessibility seriously as the requirement it is in UK government service delivery — not a nice-to-have — while staying proportionate: the highest-impact fixes (a colour-blind-safe palette, text alternatives) are typically quick, and a firm plan covers the rest. It also educates the service owner constructively. A is least effective because "accessibility as fast-follow" is precisely how exclusion ships: some caseworkers would receive a tool they cannot use, and backlog promises after launch have a poor survival rate. D adds a covering-yourself manoeuvre to option A's failure — putting an issue "on record" while shipping the harm helps no user and corrodes team trust. C overcorrects: blocking all value behind a full audit ignores proportionality and the MVP principle; option B achieves the protection C wants at far lower cost. Inclusion is a core public sector value precisely because government users often cannot choose a different provider.

**Question 7 (hard) — The privacy concern in someone else's project.**
In a cross-team show-and-tell, another team demonstrates a prototype that joins two datasets in a way a candidate believes could re-identify individuals from supposedly anonymised data. The team is enthusiastic; their data scientist is senior to the candidate; the prototype has momentum and a sponsor.

Options:
- A) Raise the re-identification risk in the meeting's open questions, framed as a technical question about the joining approach.
- B) Say nothing — it is not the candidate's project, and their team presumably completed the required assessments.
- C) After the session, share the concern directly with their data scientist, explain the specific joining risk observed, and suggest they check it against their DPIA — offering to talk it through.
- D) Report the team to the data protection officer immediately.

**Most effective: C. Least effective: B.**
**Explanation:** C raises the concern with the person best placed to assess and fix it, at a level proportionate to what is actually known (a *belief* that there is a risk — not yet verified), in a way that preserves their ownership and dignity. It routes the check through the proper artefact (their DPIA) and keeps escalation available if the response is dismissive. A is defensible but riskier: raising it publicly may make the team defensive and converts a checkable concern into a reputational moment; still, it is far better than silence. D skips the step of verifying the concern with those who know the project — escalation is right if C is brushed aside, premature before it. B is least effective: "presumably they did their assessments" is the diffusion of responsibility by which real privacy harms happen. The framework makes this explicit — a data scientist "works with stakeholders to identify and address ethical and privacy concerns" — and in the public sector, every data scientist shares custody of public trust. Speaking up well is a skill; not speaking up is a choice.

**Question 8 (moderate) — The overclaimed capability.**
A head of unit, preparing a bid for programme funding, circulates a draft that says the team's forecasting model "predicts demand with 95% accuracy". The model's actual performance is a mean absolute percentage error of around 12% on one-month horizons, degrading beyond that. A candidate suspects the 95% figure came from a misreading of a confidence-interval statement in their report.

Options:
- A) Let it stand — bids always exaggerate, and correcting the head of unit could be career-limiting.
- B) Reply promptly and helpfully: explain what the model's real performance is in plain terms, explain what the 95% figure actually referred to, and offer alternative honest wording that still makes the model sound valuable.
- C) Correct the figure in the document silently using tracked changes without comment.
- D) Raise the exaggeration with the programme office that will assess the bid.

**Most effective: B. Least effective: A.**
**Explanation:** B corrects the record quickly, kindly, and usefully — the offer of honest alternative wording is what turns a correction into a contribution, because it meets the head of unit's legitimate need (a persuasive bid) without the falsehood. Misstated model performance in a funding bid is not harmless puffery: money allocated on false premises is money misallocated, and the discrepancy will surface eventually. A is least effective — it makes the candidate a knowing party to a misleading claim about their own work. C fixes the words but not the understanding; without explanation, the error will likely recur in the next document (and silent edits to a leader's claims can land worse than a friendly note). D leaps over the candidate's own organisation to an external assessor before giving the author any chance to correct an honest mistake — disproportionate as a first move. Presenting a model's performance honestly, in language the audience understands, is the essence of "communicate effectively and present analysis... tailored to your audience".

**Question 9 (moderate) — The capability request that doesn't fit.**
A policy director, impressed by a conference talk, asks a candidate's team to "build a large language model chatbot for our casework guidance by the end of the quarter". The candidate judges that user needs are unclear, the guidance corpus is inconsistent, and the request as stated is not deliverable in the timeframe — but there is a genuine underlying need: caseworkers struggle to find guidance quickly.

Options:
- A) Agree to the request as stated; expectations can be managed later when the difficulties emerge.
- B) Decline, explaining that the technology is overhyped and the corpus is not ready.
- C) Propose a discovery phase: spend two weeks with caseworkers understanding the search problem, assess the corpus, then recommend the smallest solution that meets the need — which might be improved search, a structured FAQ, or a carefully scoped assistant with the corpus fixed first.
- D) Build a quick prototype chatbot on the existing corpus to show the director what is possible.

**Most effective: C. Least effective: A.**
**Explanation:** C is textbook user-centred delivery: it honours the genuine need (caseworkers finding guidance), refuses to let a solution be specified before the problem is understood, and keeps every option open — including the director's chatbot, if discovery supports it. It reflects the duties to "help identify user needs", choose appropriate delivery approaches, and "identify opportunities for how data science can improve data practices" honestly rather than fashionably. A is least effective: accepting a commitment believed to be undeliverable, planning to renegotiate "when the difficulties emerge", spends the team's credibility and the director's trust on a delay of the inevitable. B protects the team but abandons the real user need and reads as gatekeeping. D has energy but skips users entirely and risks anchoring the director to a demo built on a corpus already believed to be inconsistent — impressive demos of wrong solutions are how quarters get wasted. Enthusiastic stakeholders deserve engagement with their goal, not just a verdict on their solution.

**Question 10 (hard) — The mistake a candidate finds in their own published work.**
Three weeks ago a candidate's team published an analysis informing local resource allocation. Reviewing the code for reuse, the candidate discovers a filtering bug: one region's figures were computed on incomplete data, understating its need. Allocations based on the analysis have already been announced. Nobody else is likely to find the bug.

Options:
- A) Fix the bug for future runs and say nothing about the published version — reopening it would cause disproportionate disruption.
- B) Tell the team lead immediately, quantify the impact of the bug, correct and reissue the analysis with a clear note, and support the conversations about whether allocations need revisiting.
- C) Mention the bug informally to the team at a retro as a lesson learned, without reissuing the analysis.
- D) Wait to see whether the affected region queries their allocation; correct it if they do.

**Most effective: B. Least effective: A (with D close behind).**
**Explanation:** B is the whole professional package: rapid disclosure, quantified impact (the decision-makers' first question will be "how big is the error?"), a corrected reissue with a transparent note, and support for the downstream consequences. It is uncomfortable and correct. The fact that "nobody else is likely to find the bug" is a test of integrity, not a mitigation: the affected region's residents are underserved *right now* because of the error. A is least effective — it converts an honest mistake into concealment, which is a far more serious professional failure, and it leaves a known injustice standing. D makes correction contingent on being caught, which is concealment with extra steps. C treats a live harm as a retrospective anecdote. Every mature analytical organisation distinguishes sharply between making errors (inevitable, forgivable, instructive) and hiding them (corrosive, unforgivable); publishing corrections openly is standard practice in official statistics for exactly this reason. Handling errors this way is also the most powerful capability-building act available: it teaches a whole team what safety to be honest looks like.

**Question 11 (moderate) — The knowledge hoarder.**
A candidate has developed a set of well-tested utility functions and a template that could cut weeks from other teams' modelling projects. Sharing them means writing documentation, fielding questions, and possibly having the code criticised. The sprint is busy, and sharing is not on anyone's plan.

Options:
- A) Keep the tools within the team; other teams can develop their own approaches suited to their contexts.
- B) Publish the code internally as-is, with a note that it comes without documentation or support.
- C) Raise it with the team lead and the community of practice: propose time-boxed effort to document and share the tools, offer a short show-and-tell, and invite contributions.
- D) Wait until the tools are perfect before sharing them.

**Most effective: C. Least effective: A.**
**Explanation:** C converts private value into organisational capability deliberately: a time-boxed documentation effort keeps the cost honest and visible on a plan, a show-and-tell transfers the knowledge (not just the code), and inviting contributions turns consumers into co-maintainers — the sustainable pattern for internal tooling. This is "support data science capability building across the team and wider organisation" enacted. A is least effective: it lets duplicated effort continue across the organisation to avoid personal inconvenience, and its rationale ("suited to their contexts") is a rationalisation — utility functions and templates are precisely the artefacts that transfer well. B is better than nothing but predictably underdelivers: undocumented, unsupported code often costs adopters more than it saves, and first impressions of shared tooling are sticky. D is perfectionism as procrastination — "perfect" never arrives, and feedback from real users is exactly what would improve the tools. Fear of code criticism is natural; a community that sees imperfect, useful code benefits far more than one that sees nothing.

**Question 12 (hard) — Ranking: the demo that goes wrong.**
During a live demo to the service owner and operations leads, a candidate's dashboard shows a headline figure they immediately recognise as wrong — roughly double the plausible value, probably from a duplicate join introduced in yesterday's update. The audience has noticed the number and is discussing its implications enthusiastically.

Rank these responses from most to least effective:
- A) Continue the demo and correct the figure by email afterwards once the bug has been diagnosed.
- B) Interrupt the discussion now: state that the figure looks wrong, likely double-counted by a recent change, ask the group not to use it, and continue demonstrating the parts that are trusted while promising a verified figure by tomorrow.
- C) Improvise a caveat that "the data is still being validated" and steer discussion to another screen without saying the figure is wrong.
- D) End the demo immediately and reschedule once the bug is fixed.

**Correct ranking: B, D, C, A.**
**Explanation:** B is best because it stops wrong information taking root at the moment of maximum risk — decisions and impressions were forming live — while preserving the demo's value and modelling exactly the transparency that builds long-term credibility. Saying "that number looks wrong and here is when you'll have the right one" costs a moment of embarrassment and buys durable trust. D is second: it also prevents the wrong figure being used, at the higher cost of losing the session entirely — safe but wasteful compared with B. C is third: the vague "still being validated" hedge is technically true-ish but engineered to let the audience keep half-believing a figure known to be wrong; softened deception is still deception. A is worst: an enthusiastic discussion is already building on the wrong number, attendees will repeat it in other meetings before the email arrives, and the eventual correction will be harder and more embarrassing than the interruption would have been. In ranking formats, options should be ordered by the value they protect first (here: decision integrity), then by cost. Speed of correction dominates comfort every time.

### Administration and scoring guidance

- **Score against public sector values, not personal style.** The values that consistently distinguish effective options in government contexts are user needs first, transparency (especially about errors and uncertainty), collaboration before escalation, accessibility and inclusion as requirements, and responsible stewardship of data and public money. When two options seem close, the one that best protects these should usually score higher.
- **Score for the role, in context.** A data scientist works independently but within multidisciplinary teams and governance processes. The best answers usually involve direct, prompt, honest conversation with the closest relevant person — not silence, not immediate escalation.
- **Watch for the "solve both" option.** Weak options trade one legitimate concern against another (speed versus ethics, delivery versus accessibility). The strongest option usually finds a route that honours both, often via scoping (MVP thinking) or parallelism, and this is worth scoring higher than an option that simply picks a side.
- **Identify the least effective option carefully when scoring.** It is usually the one that causes irreversible harm, deceives, or lets known harm proceed — not merely the clumsy one. Passive options that "wait and see" while harm continues are reliably poor.
- **Options that sound idealistic ("refuse everything on principle") or cynical ("just ship it") should both score badly.** Effective professionals deliver value within constraints while keeping the constraints honest.
- **At debrief, asking a candidate to recall a real, comparable workplace situation** and how they handled it can add useful texture to a scored answer, though it should not substitute for scoring the item itself.

### Common pitfalls

- **Choosing the idealistic answer over the effective one.** Options that sound noble but abandon a legitimate business need (like postponing the ministerial demo in Question 1) usually rank below options that meet the need honestly.
- **Selecting passive or deferring options.** Waiting, staying silent, marking work as blocked, or hoping problems surface on their own — these should consistently score poorly because they delay action and transfer risk to others.
- **Escalating too early.** Escalation is right when direct engagement has failed or the harm is severe and imminent. As a first move, it damages relationships and signals poor judgement. The pattern "talk directly first, escalate if dismissed" scores well repeatedly.
- **Protecting oneself instead of the situation.** Options built around being on record, covering oneself, or avoiding career risk (Questions 6D and 8A) put the wrong interest first, and test designers know how to make them tempting.
- **Ignoring the organisation's stated values.** In UK public sector assessments, honesty about uncertainty and error, user-centredness, and inclusion are not decorative — they are scoring criteria. An answer that quietly sacrifices any of them is rarely "most effective".
- **Overthinking the scenario.** Candidates should answer on the facts given, as in verbal reasoning. Inventing extra context ("but maybe the deadline could move", "perhaps the data is fine") to justify a preferred option undermines the judgement being measured, and is worth noting at debrief.

## Conclusion

You have now worked through the four assessment types most relevant to the data scientist role level: cognitive ability, covering pattern recognition, logical deduction, error checking, prioritisation, and diagnostic problem solving on the datasets, pipelines, and models the role handles every day; numeric reasoning, covering the applied arithmetic of the profession — rates and denominators, weighted averages, percentage points, compound growth, cost-based model comparison, and the ever-instructive Simpson's paradox; verbal reasoning, covering the exact reading of ethics policies, standards, stakeholder emails, and data-sharing agreements, and the discipline of answering from the text alone; and situational judgement, covering realistic dilemmas about ethics under deadline pressure, honest reporting of inconvenient results, capability building, accessibility, and owning one's own mistakes.

A few points worth carrying into scoring and debrief. First, remember that every one of these skills is trainable — psychometric performance responds to practice more than most people expect, so a candidate's result should be read as a snapshot, not a fixed trait. Second, notice how often the "test skills" turn out to be job skills in disguise: checking a denominator, reading a "must" versus a "should", raising a concern kindly and early - these predict day-to-day performance as much as they predict test performance. Third, when debriefing a candidate, treat this material as a genuine conversation about their reasoning, not a verdict delivered from on high; discussing why an answer diverged from the key is often the most informative part of the exercise.

Administer the same questions and time limits to every candidate assessed against this role level, and keep a record of your scoring and reasoning. Treat the result as one input into a wider decision - alongside the interview, references and any other evidence you hold - and never as the sole basis for it. This instrument is not validated, not normed and not checked for adverse impact, so consistency across candidates and careful record-keeping are what make it defensible; consult your organisation's human resources, people development or legal colleagues if anything about a candidate's circumstances calls the standard process into question.
