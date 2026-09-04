# Machine Learning Engineer (Lead Machine Learning Engineer) - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead machine learning engineer, within the UK Government Digital and Data profession. The material is job-specific: it presents what a lead machine learning engineer genuinely handles — pipeline configurations, model registries, deployment logs, and experiment results — and the judgements the role turns on, rather than abstract puzzles. Decisions about model deployment, ethical risk, engineering standards, and cross-team coordination at this level have organisation-wide consequences, so the assessment looks for evidence of accurate reasoning under time pressure, correct interpretation of quantitative evidence, precise extraction of meaning from dense governance documents, and sound judgement in complex stakeholder situations.

The document is organised into four main assessment sections, each mirroring a common assessment type:

1. **Workplace job-specific cognitive assessment** — logical deduction, pattern recognition, error checking, and prioritisation using artefacts a lead machine learning engineer genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — interpreting model performance metrics, infrastructure costs, capacity figures, and evaluation statistics.
3. **Workplace job-specific verbal reasoning assessment** — drawing strictly accurate conclusions from policies, standards, ethics guidance, and stakeholder correspondence.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving product teams, data ethics boards, junior engineers, and senior stakeholders, testing how a candidate leads.

Each section explains what the assessment measures, maps it to the specific GDAD skills named in the role profile, presents a substantial set of items with worked answers for use as an answer key, and closes with administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Every question is built from the kinds of artefacts a lead machine learning engineer genuinely handles: deployment pipelines, model registries, experiment logs, dependency graphs, monitoring dashboards, and release schedules.

Typical format: 15 to 30 minutes, delivered online, usually 20 to 30 questions, with timing deliberately tight — roughly one minute per question. Scoring is objective and normed against a benchmark group, often other senior digital and data professionals, with speed and accuracy reported separately. Some platforms are adaptive.

At this level, the assessment concentrates on four cognitive operations: logical deduction (if the retraining pipeline fails, which downstream services are affected?), pattern recognition (what is the underlying trend in these drift metrics?), error checking (which line of this configuration contradicts the deployment standard?), and prioritisation (given five competing incidents, which sequence of actions minimises organisational risk?). These are the mental muscles used daily when leading the most complex technical work needed to develop models for use in products and services, and when coordinating a model's move from research and development into production.

### How this assessment maps to the role

Each cognitive dimension maps directly to the GDAD skills in the role profile:

- **Applied maths, statistics and scientific practices**: logical and analytical questions test reasoning about time series behaviour, optimisation trade-offs, and statistical relationships.
- **Programming and build (software engineering)**: error-checking questions mirror maintaining technical oversight across all stages and iterations of a software development project.
- **Systems integration**: deduction questions test tracing cause and effect through interconnected systems — feature stores, training pipelines, serving infrastructure, and monitoring.
- **Data science innovation**: pattern-recognition questions test the fast, structured insight that lets a candidate challenge the status quo credibly.
- **Data ethics and privacy**: several questions embed compliance constraints into logical problems, because correct reasoning at this level must include ethical and privacy considerations as first-class constraints, not afterthoughts.

### Practice questions

Present these to the candidate; roughly 90 seconds per question for the easy ones and up to three minutes for the hard ones is a reasonable guide.

**Question 1 (easy) — Deployment sequence logic**

A team's deployment standard requires these ordering constraints for promoting a model to production: security scanning must complete before container build; container build must complete before staging deployment; model card sign-off must complete before staging deployment; staging deployment must complete before load testing; load testing and bias audit must both complete before production release; the bias audit can only start after model card sign-off. Which of the following is a valid order of completion?

A. Security scan, container build, staging deployment, model card sign-off, load testing, bias audit, production release
B. Model card sign-off, security scan, container build, staging deployment, bias audit, load testing, production release
C. Security scan, model card sign-off, staging deployment, container build, load testing, bias audit, production release
D. Container build, security scan, model card sign-off, staging deployment, load testing, bias audit, production release

**Correct answer: B**

**Explanation:** Option A places sign-off after staging deployment; option C places staging deployment before container build; option D places container build before security scanning. Option B satisfies every constraint: sign-off first, security scan before build, build before staging, sign-off before staging, staging before load testing, bias audit starting after sign-off, and both load testing and bias audit finishing before release. This tests systematic elimination against each constraint rather than constructing an answer from scratch.

**Question 2 (easy) — Error checking a model registry**

A model registry policy states: "Every production model entry must record: model version (semantic versioning), training dataset snapshot ID, owning team, and a review date no more than 6 months in the future." Today is 12 August 2026.

| Entry | Version | Dataset snapshot | Owning team | Review date |
|---|---|---|---|---|
| 1 | 2.4.1 | DS-2026-031 | Fraud Analytics | 2027-01-15 |
| 2 | 3.0.0 | DS-2026-044 | Casework Triage | 2026-11-30 |
| 3 | 1.9 | DS-2026-019 | Correspondence NLP | 2026-12-01 |
| 4 | 4.2.7 | DS-2025-102 | Fraud Analytics | 2026-09-10 |

Which entry violates the policy?

A. Entry 1
B. Entry 2
C. Entry 3
D. Entry 4

**Correct answer: C**

**Explanation:** Entry 1's review date is just over five months out — compliant. Entries 2 and 4 are within the window and use full semantic versioning. Entry 3's version "1.9" has only two components, not semantic versioning as required. This tests checking only against the written policy — Entry 4's older dataset snapshot is a plausible-looking distractor the policy says nothing about.

**Question 3 (moderate) — Pattern recognition in drift metrics**

A monitoring dashboard reports weekly population stability index (PSI) for a production classification model's "application channel" feature over eight weeks: 0.02, 0.03, 0.02, 0.09, 0.11, 0.13, 0.15, 0.17. Alert thresholds: below 0.10 = stable; 0.10–0.25 = moderate drift; above 0.25 = severe drift. If the established pattern continues, in approximately how many more weeks will the feature first breach the severe drift threshold?

A. 2 weeks
B. 5 weeks
C. 8 weeks
D. It will never breach on this trend

**Correct answer: B**

**Explanation:** After a step at week four, the series increases by a consistent 0.02 per week. Projecting forward from 0.17: 0.19, 0.21, 0.23, 0.25, 0.27 — breaching 0.25 at week +5. This tests recognising a regime change (the step at week four) and extrapolating the post-change trend rather than the whole series average.

**Question 4 (moderate) — Logical deduction about pipeline failures**

These statements are all true: if the feature store sync fails, the nightly retraining job fails; if the nightly retraining job fails, the champion model is not refreshed; the model dashboard shows the champion model was refreshed this morning; if the data quality gate rejects a batch, the feature store sync fails. Which conclusion is logically certain?

A. The data quality gate passed the batch.
B. The nightly retraining job succeeded.
C. The feature store sync did not fail.
D. All of the above.

**Correct answer: D**

**Explanation:** This is a chain of contrapositives: refreshed → retraining did not fail → sync did not fail → gate did not reject. All three follow. This tests the valid inference direction ("if X then Y" licenses not-Y → not-X, never the inverse) — reasoning backwards from a healthy dashboard to rule out failure modes.

**Question 5 (moderate) — Prioritisation under constraint**

At 09:00, five items compete for attention with time to complete only three before a 16:00 hard deadline for a production release decision: (1) review the bias audit results for the model due for release at 16:00 (2 hours); (2) interview a candidate for a vacancy (1 hour, reschedulable within the week); (3) investigate a 40% latency increase on a production recommendation service flagged overnight, currently degrading a citizen-facing service (2 hours); (4) finalise next quarter's training needs analysis (2 hours, due Friday); (5) respond to a data ethics board query about a proposed feature, response due tomorrow noon (1 hour). Which three should be completed today?

A. 1, 2, 3
B. 1, 3, 5
C. 3, 4, 5
D. 1, 2, 5

**Correct answer: B**

**Explanation:** Item 1 is non-negotiable for a responsible 16:00 decision. Item 3 is live operational harm on a citizen-facing service. Item 5, completed today, preserves buffer before tomorrow's deadline. Items 2 and 4 are explicitly moveable within the week. This tests recognising that hard external deadlines and active harm outrank important-but-flexible work.

**Question 6 (moderate) — Spot the standards violation**

Software standards include: (i) all training code must be peer reviewed before merge; (ii) production inference services must pin exact dependency versions; (iii) secrets must never appear in configuration files; (iv) experiments must be reproducible from a logged random seed. Four repository excerpts: A. a merged pull request with two approving reviews; B. a requirements file for an inference service reading `scikit-learn>=1.4`; C. a configuration file reading `DATABASE_PASSWORD: ${VAULT_REF:db-prod-cred}`; D. an experiment log recording `seed=42, data_snapshot=DS-2026-044, git_commit=9f3ab21`. Which excerpt violates the standards?

A. Excerpt A
B. Excerpt B
C. Excerpt C
D. Excerpt D

**Correct answer: B**

**Explanation:** Standard (ii) requires exact pinning; `>=1.4` is an open-ended range that could silently pull a new version at build time. A satisfies (i), C is a vault reference rather than a stored secret (compliant with (iii)), and D satisfies (iv). This tests not being drawn to the most visually alarming option (the word "PASSWORD" in a compliant reference) while the actual violation hides in a single operator.

**Question 7 (hard) — Deduction across teams**

Three product teams — Alpha, Beta, and Gamma — each run one of three model types: a classifier, a forecaster, and a recommender (one each). Facts: the team running the classifier reports drift weekly, the other two report monthly; Beta reports monthly; Gamma's model does not produce ranked outputs; the forecaster's team has asked for time series analysis training; Alpha has not requested any training. Which team runs which model?

A. Alpha: classifier; Beta: forecaster; Gamma: recommender
B. Alpha: classifier; Beta: recommender; Gamma: forecaster
C. Alpha: recommender; Beta: forecaster; Gamma: classifier
D. Alpha: forecaster; Beta: classifier; Gamma: recommender

**Correct answer: B**

**Explanation:** Gamma's model produces no ranked outputs, so Gamma does not run the recommender. Alpha has not requested training, so Alpha does not run the forecaster (whose team requested time series training). Beta reports monthly, so Beta does not run the classifier (whose team reports weekly). Combining these: Gamma runs the classifier or the forecaster; Alpha runs the classifier or the recommender; Beta runs the forecaster or the recommender. Since Alpha cannot run the forecaster and Beta cannot run the classifier, the only assignment consistent with every constraint together is Alpha–classifier, Beta–recommender, Gamma–forecaster. This tests holding several exclusion rules in mind simultaneously and finding the single assignment none of them rules out, rather than stopping once one constraint appears satisfied.

**Question 8 (hard) — Root cause isolation**

A batch scoring job produces correct outputs on Monday, Tuesday, and Thursday, but corrupted outputs on Wednesday and Friday. Facts: the job reads from a feature store rebuilt nightly; a new upstream data supplier feed was integrated last week and delivers files on Tuesdays and Thursdays, processed into the feature store overnight, affecting the next day's run; the corrupted outputs all involve records with postcodes; a schema change in the supplier feed renamed `post_code` to `postcode`; the feature pipeline falls back to a null value when a field is missing rather than failing. What is the most probable root cause?

A. The feature store rebuild is failing completely on Tuesday and Thursday nights.
B. The supplier feed's renamed field silently nulls the postcode feature on days following feed delivery.
C. The scoring job has a day-of-week dependent bug.
D. The postcode records are corrupted at source every Wednesday and Friday.

**Correct answer: B**

**Explanation:** The feed arrives Tuesday and Thursday, is processed overnight, and affects Wednesday and Friday — exactly the corrupted days. The schema rename means the pipeline looks for `post_code`, finds nothing, and silently nulls the postcode feature because it falls back rather than failing. This tests correlating a failure calendar with a data flow calendar and preferring the explanation that accounts for every detail, including why the failure is silent.

**Question 9 (hard) — Resource scheduling logic**

Four model retraining jobs — P, Q, R, S — must be scheduled onto two identical GPU nodes, one job at a time per node. Durations: P = 6 hours, Q = 4 hours, R = 3 hours, S = 5 hours. Q cannot start until P finishes (Q consumes P's output); R and S are independent. What is the minimum total elapsed time to complete all four jobs?

A. 9 hours
B. 10 hours
C. 11 hours
D. 12 hours

**Correct answer: B**

**Explanation:** The chain P then Q takes 10 hours — a hard lower bound. R (3) + S (5) = 8 hours fit comfortably on the second node within that bound. This tests recognising that the critical path sets the floor and checking whether remaining work fits around it.

**Question 10 (moderate) — Pattern in evaluation results**

Across five successive candidate models, offline evaluation records precision and recall on the same held-out set: v1 precision 0.91, recall 0.62; v2 0.88, 0.68; v3 0.85, 0.74; v4 0.82, 0.80; v5 0.79, 0.86. A product manager asks for a candidate with precision of at least 0.84 and recall of at least 0.72. Based on the pattern, what should be concluded?

A. Candidate v3 already meets both requirements.
B. Continuing the current tuning direction one more step will meet both requirements.
C. No candidate meets both requirements, and the trend suggests the current approach trades one metric for the other, so a different approach is needed to exceed the frontier.
D. Precision and recall are independent, so both can be raised simultaneously with more tuning.

**Correct answer: A**

**Explanation:** v3 has precision 0.85 (≥ 0.84) and recall 0.74 (≥ 0.72): both requirements are already met. This tests checking each row against the stated thresholds before theorising about the trend — option C describes the precision-recall trade-off pattern correctly but reaches a factually wrong conclusion by not checking the data first.

**Question 11 (hard) — Ethics constraint embedded in logic**

An ethics standard states: "A model may use a protected characteristic as a feature only if (a) a documented lawful basis exists, (b) the ethics board has approved the specific use, and (c) an approved bias mitigation plan is in place." Four model variants: W uses age; lawful basis documented; ethics board approval pending; mitigation plan approved. X uses no protected characteristics. Y uses age; lawful basis documented; ethics board approved; mitigation plan approved. Z uses a postcode-derived deprivation index (not a protected characteristic); no approvals sought. Under the standard as written, which variants may proceed?

A. X, Y, and Z
B. Y only
C. X and Y only
D. W, X, Y, and Z

**Correct answer: A**

**Explanation:** The standard's three conditions apply only where a protected characteristic is used as a feature. Y satisfies all three and may proceed. W fails condition (b) (pending is not approved). X uses no protected characteristics, so the conditions do not apply. Z's deprivation index is explicitly stated not to be a protected characteristic, so under the standard as written it, too, may proceed without approvals. This tests reading the standard's actual scope precisely, distinguishing what the rule as written permits from what it perhaps should say about proxy variables — a gap worth flagging in the right forum, but not one the item asks a candidate to resolve.

**Question 12 (moderate) — Multi-step operational reasoning**

An incident post-mortem establishes: a library upgrade on the serving cluster changed default request timeouts from 30 seconds to 10 seconds; a fraud model's feature enrichment call typically takes 8 seconds but exceeds 10 seconds for the 5% of cases requiring a legacy system lookup; timed-out requests fall back to a rules-based decision, which flags 40% of such cases for manual review versus the model's 12%. The manual review team reported a workload surge. If the service handles 20,000 requests per day, approximately how many additional cases per day were sent to manual review because of the upgrade?

A. 280
B. 400
C. 240
D. 800

**Correct answer: A**

**Explanation:** Affected requests = 5% of 20,000 = 1,000. Under the model these would have produced 12% × 1,000 = 120 manual reviews; under the rules fallback they produce 40% × 1,000 = 400. Additional workload = 400 − 120 = 280. This tests holding a causal chain steady and subtracting the baseline the model would have generated anyway, rather than reporting the fallback total alone.

### Administration tips

- **Score for whether a candidate holds multiple exclusion rules in mind simultaneously** in a multi-clue deduction item, checking the full set of constraints against a candidate answer rather than stopping once one is satisfied.
- **Watch for whether a candidate checks the data before theorising about a trend**, as in the precision-recall item.
- **Note whether a candidate reads a standard's scope precisely**, distinguishing what a rule as written permits from what it might ideally say.
- **Note whether a candidate holds a causal chain steady across a multi-step arithmetic problem**, subtracting a baseline rather than reporting a partial total.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from experience instead of the stated rules.**
- **Crediting an answer drawn to a visually alarming but compliant distractor** rather than the quiet detail that actually breaks a standard.
- **Missing when a candidate loses the causal chain in a multi-step problem.**
- **Missing when a candidate gets anchored on one plausible assignment in a multi-clue deduction item** without checking it against every remaining clue.
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions from numerical data presented in the formats this role actually uses. The arithmetic rarely goes beyond percentages, ratios, weighted averages, and rates; the difficulty lies in extracting the right numbers from realistic tables and dashboards, applying them correctly under time pressure, and avoiding the misreadings that realistic data invites.

Typical format: 18 to 25 questions in 20 to 30 minutes, delivered online with an onscreen calculator allowed or provided.

For a lead machine learning engineer, the numeric assessment reflects the quantitative texture of the working week: evaluation metrics, infrastructure economics, operational statistics, experiment analysis, and delivery arithmetic — all quantified claims that must be interrogated in the course of coordinating production deployments and assuring the effectiveness of models in use.

### How this assessment maps to the role

- **Applied maths, statistics and scientific practices**: the core skill under test — rates, ratios, projections, and simple time series reasoning, matched to the right calculation for a given question's goal.
- **Systems integration**: capacity, throughput, and utilisation questions mirror accountability for managing resources across integrated systems.
- **Programming and build (software engineering)**: cost-of-change and technical-debt questions reflect the quantified trade-offs weighed when setting team standards.
- **Data science innovation**: evaluation-metric questions test whether judgement about model improvements is grounded in correct calculation.
- **Communicating between the technical and non-technical**: several questions ask for the correct plain-terms summary of a calculation.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded. An onscreen calculator is assumed.

**Question 1 (easy) — GPU training cost**

A fine-tuning run requires 4 GPU nodes for 18 hours. Each node costs £14.50 per hour. What is the total compute cost of the run?

A. £261
B. £1,044
C. £522
D. £1,160

**Correct answer: B**

**Explanation:** Total node-hours = 4 × 18 = 72; cost = 72 × £14.50 = £1,044. This tests writing units (node-hours) explicitly — dropped multipliers are the most common real-world cloud budgeting error.

**Question 2 (easy) — Percentage change in error rate**

A production classifier's error rate was 8.0%; after retraining it is 6.2%. What is the relative reduction in error rate?

A. 1.8%
B. 18%
C. 22.5%
D. 29%

**Correct answer: C**

**Explanation:** Absolute reduction = 1.8 points; relative reduction = 1.8 ÷ 8.0 = 22.5%. This tests distinguishing percentage points from percentage change — a distinction that keeps a stakeholder claim defensible.

**Question 3 (moderate) — Inference capacity planning**

A recommendation service must handle a peak of 3,600 requests per minute. Each serving instance sustains 45 requests per second. The resilience standard requires capacity for peak load even with one instance lost (N+1). How many instances must be provisioned?

A. 2
B. 3
C. 4
D. 80

**Correct answer: B**

**Explanation:** 3,600 per minute = 60 per second; 60 ÷ 45 = 1.33, rounding up to 2, plus one for N+1 = 3. This tests converting units (minutes to seconds) before dividing and rounding up for a whole-unit requirement.

**Question 4 (moderate) — Model evaluation from a confusion matrix**

An offline evaluation on 10,000 transactions yields: 380 true positives, 120 false positives, 95 false negatives, 9,405 true negatives. What are the model's precision and recall (to the nearest whole percentage)?

A. Precision 76%, recall 80%
B. Precision 80%, recall 76%
C. Precision 76%, recall 76%
D. Precision 80%, recall 80%

**Correct answer: A**

**Explanation:** Precision = 380 ÷ 500 = 76%. Recall = 380 ÷ 475 = 80%. This tests computing both metrics from raw counts without a library, and, for a strong candidate's answer, a quick sanity check: FP (120) exceeds FN (95), so the precision denominator is larger, so precision must be the lower figure.

**Question 5 (moderate) — Budget allocation across the ML life cycle**

An annual platform budget of £480,000 is allocated: 35% compute, 25% engineering tooling, 20% data acquisition and labelling, 15% monitoring and assurance, 5% training and development. Mid-year, compute costs run 20% over its allocation on an annualised basis, absorbed by reducing the tooling line only. What does the tooling budget become?

A. £86,400
B. £120,000
C. £96,000
D. £33,600

**Correct answer: A**

**Explanation:** Compute allocation = £168,000; 20% overrun = £33,600; tooling's original £120,000 minus £33,600 = £86,400. This tests applying a percentage to the correct base line and carrying the resulting reduction across to a different line correctly.

**Question 6 (moderate) — A/B test uplift**

An A/B test on a new ranking model: control 42,000 sessions, 3.5% task-completion rate; variant 38,000 sessions, 4.2%. Approximately how many additional completed tasks would the variant have produced if it had served all 80,000 sessions, compared with the control serving all 80,000?

A. 560
B. 280
C. 700
D. 3,360

**Correct answer: A**

**Explanation:** (4.2% − 3.5%) × 80,000 = 560. This tests using the correct common base (the whole traffic volume) for the rate difference rather than a partial or scaled base.

**Question 7 (moderate) — Latency percentile interpretation**

A dashboard reports response times for yesterday: p50 = 120 ms, p95 = 340 ms, p99 = 900 ms, over 2,000,000 requests. The SLO is that no more than 1% of requests exceed 800 ms. Approximately how many requests are guaranteed by these figures to have exceeded 340 ms, and can the SLO's status be confirmed from these figures alone?

A. 100,000 requests exceeded 340 ms; the SLO was definitely breached.
B. 100,000 requests exceeded 340 ms; the figures alone cannot confirm whether the SLO was breached.
C. 340,000 requests exceeded 340 ms; the SLO was definitely met.
D. 20,000 requests exceeded 340 ms; the SLO was definitely breached.

**Correct answer: B**

**Explanation:** p95 = 340 ms means 5% of requests, or 100,000, exceeded it. The SLO's 800 ms threshold sits between the reported p95 (340 ms) and p99 (900 ms), and no percentile at exactly 800 ms is reported, so the precise share above 800 ms cannot be read off directly. This tests recognising that reported percentiles bound a distribution without fully describing it, and stating precisely what the data can and cannot support.

**Question 8 (hard) — Weighted cost per prediction**

Three production models, monthly figures:

| Model | Predictions (millions) | Compute cost | Ops staff cost share |
|---|---|---|---|
| Triage classifier | 12.0 | £18,000 | £6,000 |
| Demand forecaster | 1.5 | £9,000 | £4,500 |
| Document extractor | 6.5 | £26,000 | £9,500 |

What is the overall cost per 1,000 predictions across the whole portfolio (to the nearest penny)?

A. £3.65
B. £2.92
C. £3.05
D. £4.87

**Correct answer: A**

**Explanation:** Total cost = £73,000; total predictions = 20 million = 20,000 thousand-prediction units; cost per 1,000 = £3.65. This tests volume-weighted aggregation across a portfolio rather than averaging the three models' individual unit costs, which lets a low-volume, high-unit-cost model distort the headline.

**Question 9 (hard) — Retraining schedule and drift cost**

A model's accuracy decays by 0.4 percentage points per week after deployment due to drift. Each retraining restores it to 94.0% and costs £2,400. Each percentage point of accuracy below 94.0%, sustained for a week, costs an estimated £1,800. Comparing retraining every 4 weeks with retraining every 8 weeks, over an 8-week window (decay costs plus subsequent retrains within the window), which schedule is cheaper, and by roughly how much?

A. The 4-week schedule, by £3,120
B. The 8-week schedule, by £2,400
C. The 4-week schedule, by £5,520
D. They cost the same

**Correct answer: A**

**Explanation:** Under the 8-week schedule, shortfall accumulates unchecked for the full window; under the 4-week schedule, a retrain at week 4 resets the decay clock partway through, so the total shortfall over the window is much smaller, at the cost of one extra retrain. Every reasonable way of costing the accumulated shortfall points the same direction: the 4-week schedule is cheaper. This tests recognising that direction of a result (which option is cheaper) is often more robust than its exact magnitude, and, for a strong candidate's answer, choosing the option whose magnitude is consistent with that direction rather than abandoning the calculation because an exact figure is hard to pin down under time pressure.

**Question 10 (moderate) — Team capacity for a migration**

36 model pipelines must migrate to a new orchestration platform. A senior engineer migrates a pipeline in 3 working days; a mid-level engineer takes 5 working days. 2 senior engineers and 3 mid-level engineers are assigned full time. Approximately how many working weeks (5 days each) will the migration take?

A. 4 weeks
B. 5.7 weeks
C. 6 weeks
D. 3 weeks

**Correct answer: B**

**Explanation:** Combined rate = 2/3 + 3/5 = 19/15 ≈ 1.267 pipelines per day; time = 36 ÷ 1.267 ≈ 28.4 days ≈ 5.7 weeks. This tests adding rates (work-per-day), never averaging days-per-task, which produces a materially wrong answer.

**Question 11 (hard) — Interpreting a statistical comparison**

Two candidate models are compared on the same 5,000-case test set: Model A 87.2% accuracy, Model B 88.1%. The reported 95% confidence interval for the difference (B minus A) is [−0.1, +1.9] percentage points. A product manager says: "B is proven better — ship it." Which statement is the most accurate correction?

A. The interval includes zero, so the observed difference is not statistically significant at the 5% level; the evidence is suggestive but not conclusive.
B. The interval includes zero, which proves the models perform identically.
C. B is 0.9 points better, and since 0.9 is inside the interval, the improvement is confirmed.
D. The test set is too small for any conclusion.

**Correct answer: A**

**Explanation:** An interval spanning zero means the data are compatible with B being slightly worse, equal, or meaningfully better, so the improvement is not established at the conventional threshold, though most of the interval favours B. This tests avoiding both overclaiming ("proven better") and the inverse error of underclaiming ("proves identical") when results reach decision-makers.

**Question 12 (hard) — Multi-table cost-benefit synthesis**

Replacing a manual document-review step with a model-assisted process. Current state: 22 staff review 5,500 documents per week; fully loaded staff cost £900 per person per week. Proposed state: the model auto-clears 60% of documents; the remaining 40% still need human review, but model-assisted reviewers work 25% faster; platform cost £4,000 per week. Unassisted, one reviewer handles 250 documents per week. How many reviewers does the proposed state need (rounded up), and what is the net weekly saving?

A. 8 reviewers; £8,600 saving
B. 7 reviewers; £9,500 saving
C. 8 reviewers; £12,600 saving
D. 11 reviewers; £5,900 saving

**Correct answer: A**

**Explanation:** Documents needing review = 40% × 5,500 = 2,200; assisted throughput = 250 × 1.25 = 312.5; reviewers = 2,200 ÷ 312.5 = 7.04, rounding up to 8. Current cost = £19,800; proposed cost = 8 × £900 + £4,000 = £11,200; saving = £8,600. This tests rounding a fractional staffing requirement up rather than to the nearest whole number, since 7 reviewers would leave a backlog.

### Administration tips

- **Score for whether a candidate names the base** before applying any percentage.
- **Watch for whether a candidate writes units into their working** — node-hours, requests per second — to expose dropped conversions.
- **Note whether a candidate rounds capacity and staffing requirements up**, distinct from rounding financial estimates conservatively.
- **Note whether a candidate checks the direction of a result** when an exact magnitude proves elusive under time pressure, rather than abandoning the calculation.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads a scale qualifier** — "predictions (millions)" against "cost per 1,000" in the same table.
- **Crediting an answer that confuses monthly, weekly, and annual figures.**
- **Missing when a candidate takes an unweighted average of unit costs or rates** across entities of unequal volume.
- **Missing when a candidate averages days-per-task instead of adding tasks-per-day.**
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands, analyses, and draws conclusions from written material of the kind this role requires processing: technology standards, ethics and privacy guidance, assurance reports, supplier documentation, and stakeholder correspondence. The defining rule is strict textual fidelity: answering based only on what the passage states, setting aside expert knowledge. For a lead machine learning engineer this is a distinctive challenge, because deep subject knowledge can make it harder, not easier, to answer only from the text.

Typical format: dense passages (100–250 words each), each followed by several statements judged True, False, or Cannot Say, sometimes supplemented by multiple-choice comprehension items. Timing is tight, often under a minute per question.

Defining and communicating software standards, assessing and constructively challenging proposed data ethics policies, and mediating between technical and non-technical stakeholders all depend on reading documents exactly — what a policy actually requires versus what it merely encourages, what a supplier contract guarantees versus what it implies, and what an assurance report established versus what it assumed.

### How this assessment maps to the role

- **Communicating between the technical and non-technical**: the whole assessment is, at root, this skill in its receptive form — extracting exactly what a document says so what is relayed to stakeholders is faithful.
- **Data ethics and privacy**: passages from ethics policies and privacy guidance test identifying obligations, permissions, and gaps.
- **Programming and build (software engineering)**: standards documents live and die on precise wording; questions probe modal verbs, scope clauses, and exception conditions.
- **Systems integration**: supplier documentation and interface specifications reward careful reading of what is guaranteed, deprecated, or left undefined.
- **Applied maths, statistics and scientific practices**: passages about evaluation results test distinguishing reported findings from interpretive claims.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage A — Model deployment standard (Questions 1–4)**

> "All machine learning models must pass an independent assurance review before their first production deployment. Subsequent deployments of the same model require a new assurance review only where the model architecture has changed or the training data source has been replaced. Retraining on refreshed data from an existing source does not, by itself, trigger a new review, although teams should record each retraining event in the model registry within five working days. Where a model processes personal data, the data protection impact assessment must be updated before any deployment, including retraining deployments. Teams may request an expedited review for deployments addressing live security vulnerabilities; expedited reviews are completed within two working days but do not cover fairness testing, which must then be completed within one month of deployment."

**Question 1 (easy).** True, False, or Cannot Say: "A model being retrained on refreshed data from its existing source must undergo a new independent assurance review before redeployment."

**Correct answer: False**

**Explanation:** The passage states directly that this "does not, by itself, trigger a new review". This tests answering what the standard says, independent of what a reader might personally believe it should say.

**Question 2 (easy).** True, False, or Cannot Say: "An expedited review is completed within two working days."

**Correct answer: True**

**Explanation:** Directly stated. This tests locating a direct match without overreading it to include the separate fairness-testing exclusion.

**Question 3 (moderate).** True, False, or Cannot Say: "A model that does not process personal data and is retrained on refreshed data from its existing source may be redeployed without updating its data protection impact assessment."

**Correct answer: True**

**Explanation:** The DPIA obligation is scoped to models that process personal data; a model outside that scope is not caught by it. This tests reading a conditional obligation's scope precisely — it attaches exactly where its condition attaches, no further.

**Question 4 (hard).** True, False, or Cannot Say: "Recording a retraining event in the model registry is mandatory."

**Correct answer: Cannot Say**

**Explanation:** The passage uses "should", not "must", but never defines its own modal conventions. This tests the hardest and most valuable habit in verbal reasoning: "the text suggests but does not establish" resolves to Cannot Say, and modal verbs are where senior readers most often import outside conventions.

**Passage B — Ethics board correspondence (Questions 5–7)**

> "Dear colleagues, the Data Ethics Board reviewed the proposal to use historic casework decisions as training data for the triage assistance model. The Board recognises the operational value of the proposal and commends the team's engagement with affected caseworkers. However, the Board is not yet able to approve the proposal. Two conditions must be satisfied first: the team must demonstrate that decisions predating the 2021 process reform are either excluded or reweighted, given the documented inconsistencies in pre-reform decision-making; and the team must publish a plain-language summary of the model's role for caseworkers, making clear that the model recommends but does not decide. The Board expects to consider a revised proposal at its next session and sees no reason, provided the conditions are met, why approval should not follow."

**Question 5 (easy).** True, False, or Cannot Say: "The Board rejected the proposal permanently."

**Correct answer: False**

**Explanation:** "Not yet able to approve" and the forward-looking final sentence describe deferral, not rejection. This tests distinguishing deferral-with-conditions from rejection when relaying a governance outcome to a product team.

**Question 6 (moderate).** True, False, or Cannot Say: "The Board requires all pre-2021 casework decisions to be excluded from the training data."

**Correct answer: False**

**Explanation:** The condition is disjunctive — "either excluded or reweighted" — so requiring exclusion alone overstates it. This tests not collapsing an "either/or" requirement into its stricter arm.

**Question 7 (hard).** True, False, or Cannot Say: "The Board will approve the proposal at its next session if both conditions are met."

**Correct answer: Cannot Say**

**Explanation:** "Sees no reason why not" is a present assessment, not a binding future commitment. This tests the difference between a signalled expectation and a guarantee — central to managing stakeholder expectations accurately.

**Passage C — Supplier platform documentation (Questions 8–10)**

> "The v4 model-serving runtime supports blue-green and canary deployment strategies. Canary deployments route a configurable fraction of live traffic, between 1% and 25%, to the candidate model; the fraction cannot be altered while a canary is in progress without terminating and restarting the canary. Automatic rollback is available for canary deployments only, and triggers when the candidate's error rate exceeds the incumbent's by a margin the operator defines in advance. Blue-green deployments switch all traffic atomically and rely on manual rollback. The v3 runtime remains supported until 31 March 2027, after which security patches will no longer be provided. Migration from v3 to v4 requires re-containerising models built with the legacy image format; models already using OCI-format images migrate without rebuild."

**Question 8 (easy).** True, False, or Cannot Say: "Automatic rollback is available for blue-green deployments."

**Correct answer: False**

**Explanation:** Stated explicitly twice ("only", "rely on manual rollback"). This tests slowing down on exclusivity terms.

**Question 9 (moderate).** True, False, or Cannot Say: "After 31 March 2027, the v3 runtime will stop working."

**Correct answer: Cannot Say**

**Explanation:** End of patching is not stated to mean end of function. This tests treating both overreading and expert supplementation as wrong moves when the text is simply silent.

**Question 10 (hard).** True, False, or Cannot Say: "A team running a canary at 10% traffic can increase it to 20% mid-canary by restarting the canary at the new fraction."

**Correct answer: True**

**Explanation:** "Cannot be altered... without terminating and restarting" entails that restarting is the permitted method, and 20% falls within the 1%–25% range. This tests reading the full grammatical structure of a restriction — what is forbidden, and what the stated exception permits — rather than pattern-matching on "cannot" alone.

**Passage D — Assurance report extract (Questions 11–13)**

> "The quarterly assurance review examined the four highest-risk production models. Three met their agreed performance thresholds. The correspondence-routing model fell below its threshold for a second consecutive quarter, driven primarily by vocabulary drift in incoming correspondence. The review team notes that the model's owning team had proposed a retraining plan last quarter which was deferred pending budget approval. The review team recommends that the retraining plan be funded as a priority and further recommends that, should performance remain below threshold at the next quarterly review, the model be withdrawn from automated routing and its traffic returned to manual handling. The review team found no evidence that the performance shortfall has resulted in incorrectly routed correspondence being lost, though it notes that detection mechanisms for lost correspondence are limited."

**Question 11 (easy).** True, False, or Cannot Say: "Exactly one of the four reviewed models failed to meet its performance threshold."

**Correct answer: True**

**Explanation:** Three of four met their thresholds, and the fourth is named as falling below. This tests synthesising explicitly stated facts, which is still True even though the passage never writes the word "one".

**Question 12 (moderate).** True, False, or Cannot Say: "The correspondence-routing model will be withdrawn from automated routing at the next quarterly review."

**Correct answer: Cannot Say**

**Explanation:** Withdrawal is a conditional recommendation, not a decision. This tests faithfully relaying "recommended, conditional" rather than "decided".

**Question 13 (hard).** True, False, or Cannot Say: "The review found that no correspondence has been lost as a result of the performance shortfall."

**Correct answer: False**

**Explanation:** The review found "no evidence" of loss, immediately qualified by "detection mechanisms... are limited" — a positive finding of no loss is not what the review demonstrably found. This tests holding absence of evidence apart from evidence of absence, even under the surface plausibility of the statement.

**Passage E — Multiple-choice comprehension (Questions 14–15)**

> "The department's position on machine learning procurement is frequently misunderstood. It is not, as sometimes reported, a preference for building over buying. Rather, the policy requires teams to evaluate at least one commercial, one open-source, and one in-house option before any procurement decision exceeding £100,000, and to document the evaluation against total cost of ownership, exit costs, and alignment with the department's published architecture principles. Where evaluations conclude that options are broadly equivalent, the policy directs teams to prefer the option with the lowest exit costs. Critics argue this creates a systematic bias towards open-source tooling; the policy's authors respond that low exit costs are a legitimate procurement objective in their own right, particularly for a technology domain evolving as rapidly as machine learning."

**Question 14 (moderate).** Which statement best summarises the department's procurement policy?

A. The department prefers building machine learning systems in-house.
B. For decisions over £100,000, teams must evaluate commercial, open-source, and in-house options against defined criteria, preferring lowest exit costs when options are broadly equivalent.
C. The department requires open-source tooling wherever possible.
D. Teams may procure freely below £100,000 without any evaluation.

**Correct answer: B**

**Explanation:** B restates each element the passage actually asserts. A is the misunderstanding the passage opens by rejecting; C converts a critique into the policy itself; D infers a rule from silence. This tests the summary that adds nothing and omits nothing essential.

**Question 15 (hard).** The passage's authors respond to critics by arguing that:

A. The critics have misread the policy's threshold.
B. Open-source tooling is technically superior for machine learning.
C. Minimising exit costs is a valid procurement goal in itself, especially in a fast-changing field.
D. The bias towards open source is unintended and will be corrected.

**Correct answer: C**

**Explanation:** The authors defend the objective that produces the bias rather than denying the bias exists. This tests recognising the exact shape of an argumentative reply — what it concedes, denies, and reframes.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate reads for modals and quantifiers** — must/should/may, all/some/only, disjunctions.
- **Note whether a candidate treats a recommendation, expectation, or conditional plan as distinct from a stated fact.**
- **Note whether a candidate holds absence of evidence apart from evidence of absence.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage — the number-one mark-loser for expert candidates.
- **Missing when a candidate confuses likelihood with fact** — "sees no reason why not" treated as "will".
- **Crediting an answer that overreads an exclusive or conditional term** — "only", "unless", "without", "where".
- **Missing when a candidate collapses a disjunction** — "excluded or reweighted" read as "excluded".
- **Missing an absence-of-evidence error** — "no evidence of X" plus "limited ability to detect X" treated as "X did not happen".

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios from this role and asks the candidate to identify effective and ineffective responses. For a lead machine learning engineer the scenarios involve moving models from research into production, assuring models already in use, mediating between research and delivery cultures, and raising ethical and risk concerns that other people would prefer not to hear.

The commonest formats ask for the most and least effective response, or a rating on a scale. Scoring is against a key derived from experienced practitioners in comparable roles.

Three patterns run through the strong answers at this level. First, a model in production is a system, not a result: the research question "does it perform well" is answered once, but the engineering questions — what happens when the input distribution shifts, who notices, what the fallback is, how it is rolled back — are answered continuously. Second, this role sits between disciplines with genuinely different success criteria — researchers rewarded for model quality, delivery teams for shipping — and most of the work is making an implicit disagreement explicit. Third, ethical and privacy concerns are cheapest to raise early and hardest to raise late, and this role is frequently best placed to see them.

### How this assessment maps to the role

- **Production readiness judgement** maps to co-ordinating the move from research and development into production.
- **Assurance of models in use** maps to assuring the effectiveness of machine learning models across the organisation.
- **Mediation across disciplines** maps to **Communicating between the technical and non-technical**.
- **Ethical and risk judgement** maps to **Data ethics and privacy** and defining standards related to ethics, risk and security.
- **Coaching and capability** maps to identifying training needs and to **Data science innovation**.
- **Standards leadership** maps to **Systems integration** and **Programming and build (software engineering)**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A model that performs well in evaluation**

A research team presents a model with strong offline performance and asks to deploy it. What is the most effective response?

A) Deploy it; the evaluation is strong.
B) Ask the questions the offline evaluation cannot answer — how the training data differs from live traffic, what happens when inputs drift, what the fallback is when the model is unavailable, and how a bad prediction is detected — because offline performance establishes that the model can work, not that the system around it will.
C) Ask for additional offline evaluation.
D) Deploy it behind a flag.

**Correct answer: B. Least effective: A.**

**Explanation:** Offline evaluation says nothing about the four questions in B, each of which has caused production failures in models that evaluated beautifully. D is a good mechanism that belongs after the questions, not instead of them. C produces more of the evidence already available. This tests recognising that a research result is not a production decision.

**Question 2 (easy) — A junior engineer's approach**

An engineer proposes a substantially more complex model architecture for a marginal accuracy gain. What is the most effective response?

A) Approve it; better accuracy is better.
B) Ask what the marginal gain is worth against the ongoing costs — training time, inference latency, debuggability when it behaves oddly, and the difficulty of explaining its output to a stakeholder — because complexity is paid for continuously and the gain is usually banked once.
C) Tell them to use the simpler model.
D) Ask them to benchmark both.

**Correct answer: B. Least effective: C.**

**Explanation:** B makes the trade-off explicit and teaches the reasoning. C delivers a conclusion with no reasoning, contrary to coaching and inspiring curiosity. This tests weighing complexity as a continuing cost rather than a one-off decision.

**Question 3 (moderate) — Disagreement with a data scientist**

A senior data scientist objects to a change required before production deployment, saying it will degrade model performance. What is the most effective response?

A) Require the change; production standards are set by this role.
B) Establish how much degradation and whether it matters at the decision threshold — a model that loses accuracy in a range where no decision changes has lost nothing operationally — and if the degradation is real, put the trade-off to whoever owns the risk.
C) Waive the requirement.
D) Escalate to their line manager.

**Correct answer: B. Least effective: D.**

**Explanation:** "It will degrade performance" is a claim with a magnitude that usually settles the matter. D converts a solvable technical question into a relationship problem and ends the ability to have such conversations directly. This tests establishing magnitude and operational relevance before either asserting authority or escalating.

**Question 4 (moderate) — A model degrading in production**

Monitoring shows a deployed model's performance has declined steadily over four months, and the product team has not noticed any problem. What is the most effective response?

A) Retrain the model on recent data.
B) Establish what is actually degrading and whether it matters — a metric declining while nobody notices could mean the metric is not the one that matters, or that the impact is real and invisible to the product team — and involve them in that determination rather than resolving it as a technical matter.
C) Alert the product team that the model is failing.
D) Roll back to the previous model version.

**Correct answer: B. Least effective: D.**

**Explanation:** Retraining before knowing whether the shifted metric is connected to outcomes risks the wrong fix. D moves further from the current distribution. This tests diagnosing drift with the people who know what the model is for, rather than resolving it purely technically.

**Question 5 (moderate) — Research and delivery in conflict**

A research team wants three more months to improve a model; a delivery team wants to ship what exists. Both have escalated. What is the most effective response?

A) Side with delivery; shipping creates value.
B) Reframe it as a question about what the current model is good enough for — there is usually a narrower deployment where today's performance is clearly sufficient, letting the service start delivering while research continues on the harder cases — because the argument as posed has no answer and the scope question usually does.
C) Side with research; deploying an inadequate model is worse.
D) Split the difference at six weeks.

**Correct answer: B. Least effective: D.**

**Explanation:** Ship-now against improve-first is usually a false binary in machine learning deployments. D is an arbitrary compromise that satisfies nobody and settles the dispute by stamina rather than reasoning. This tests finding a scope-based reframe rather than picking a side on a badly posed question.

**Question 6 (moderate) — An ethical concern raised late**

Days before launch, a team member raises a concern that the model may perform worse for a particular demographic group. What is the most effective response?

A) Launch and investigate afterwards.
B) Test it before launching, because the question is answerable with data already available and the answer changes what should happen — and if it is true, launching a model with known differential performance in a public service is a decision that must be made explicitly by someone accountable, not absorbed by a launch date.
C) Delay the launch until it is resolved.
D) Add monitoring for the issue post-launch.

**Correct answer: B. Least effective: A.**

**Explanation:** The concern is usually checkable within hours. A launches a public service model with an unexamined equity concern — the failure that ends up in a published review. This tests converting an uncomfortable question into a fact before deciding.

**Question 7 (harder) — Pressure to over-claim**

A senior stakeholder wants to describe the model publicly as "99% accurate". The figure is from a balanced test set; live class distribution is heavily skewed, making the number misleading. What is the most effective response?

A) Allow it; the figure is technically correct.
B) Explain concretely why the number will mislead — on live data with this distribution, a trivial baseline would score similarly, so the figure conveys nothing about the model's value — and offer a claim that is both true and stronger, such as what the model does better than the process it replaces.
C) Refuse to allow the claim.
D) Suggest adding a caveat about the test set.

**Correct answer: B. Least effective: A.**

**Explanation:** B supplies a replacement claim, which is what prevents the conversation becoming a refusal. A is least effective because a misleading public figure attracts scrutiny later. This tests offering a strong true alternative rather than defending or merely blocking a misleading one.

**Question 8 (harder) — Defining ways of working**

Ways of working across the machine learning life cycle must be defined for four teams with different maturity. What is the most effective approach?

A) Set a single standard process for all four.
B) Separate what must be uniform from what can vary — model documentation, evaluation before deployment, monitoring and rollback usually must; experiment tooling and internal workflow usually need not — because uniformity in the areas where divergence costs other people is valuable, and elsewhere it is a tax.
C) Let each team define its own.
D) Adopt the most mature team's process across all four.

**Correct answer: B. Least effective: D.**

**Explanation:** Divergent evaluation and monitoring practices make organisation-wide assurance impossible; divergent notebook conventions cost nobody. D transplants practices whose context has not been transplanted, producing compliance without understanding. This tests deciding what to be prescriptive about, not how prescriptive to be overall.

**Question 9 (harder) — Assuring someone else's model**

Assuring a model built by another team reveals the evaluation used data that overlaps with the training set. The model is already in production. What is the most effective response?

A) Report it as an assurance failure.
B) Establish what it means before characterising it — overlap invalidates the reported performance figure without establishing that the model performs badly, so the immediate need is a clean evaluation, and only that will tell whether this is a paperwork problem or a service problem.
C) Require the model be withdrawn pending re-evaluation.
D) Ask the team to re-run the evaluation.

**Correct answer: B. Least effective: C.**

**Explanation:** Contamination means the performance is unknown, not known to be poor. C withdraws a production model on the basis of an invalid evaluation rather than a demonstrated problem. This tests establishing the true position before acting on an unverified figure.

**Question 10 (harder) — A capability gap**

Only one person in the organisation can debug the training pipeline for three production models. What is the most effective response?

A) Ask them to document it.
B) Reduce the dependency by having someone else do the work alongside them — running a retrain, diagnosing a failure — because the risk lives in what the expert does without thinking about it, which documentation systematically misses, and only doing transfers it.
C) Recruit a second specialist.
D) Simplify the pipeline.

**Correct answer: B. Least effective: C.**

**Explanation:** Documentation reliably misses exactly the tacit knowledge that matters. C is slow, uncertain, and expensive as a primary response. This tests transferring tacit knowledge by supervised practice rather than prose.

**Question 11 (harder) — Evidence against a candidate's own decision**

A framework championed for the team's model deployment is now causing significant friction, and a newer engineer proposes replacing it. What is the most effective response?

A) Defend it; the decision was right at the time.
B) Engage with the proposal on its merits and say plainly that the original assumptions have not held — what has changed, and what replacing it would cost now — because visible willingness to have one's own decisions revisited is what makes it safe for anyone else to raise one.
C) Agree to the replacement.
D) Ask them to write a full proposal.

**Correct answer: B. Least effective: A.**

**Explanation:** A decision can be right when made and wrong later, without either fact excusing the other from scrutiny. A is the natural reaction and teaches the team not to raise the next one. This tests modelling openness to challenging one's own past decisions.

**Question 12 (harder) — Speaking for the community**

Presenting the organisation's machine learning work at an external event: two strong deployments and one quietly abandoned project. What is the most effective approach?

A) Present the two successes.
B) Present all three, and be specific about why the third was abandoned — because the failure is the part the audience can actually learn from, an account that omits it is noticed by anyone who knows, and the presenter's own team will hear whether their work was accurately described.
C) Present the successes and refer generally to challenges.
D) Decline until the picture is stronger.

**Correct answer: B. Least effective: C.**

**Explanation:** The value offered to a practitioner audience is disproportionately in the abandoned project. C's vague reference to "challenges" reads as evasion and costs more credibility than the abandonment itself. This tests speaking honestly about failure as well as success when representing a community externally.

### Administration tips

- **Score for whether a candidate's response asks what an offline evaluation cannot tell you** before treating it as a deployment decision.
- **Watch for whether a candidate diagnoses a magnitude or a cause before acting** — a claimed degradation, a drift signal, a contaminated evaluation.
- **Note whether a candidate replaces a misleading claim with a true, stronger one** rather than defending or merely blocking it.
- **Note whether a candidate models openness to challenge on their own past decisions and their own team's failures.**
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats a strong offline evaluation as a production decision.**
- **Crediting an answer that escalates a technical disagreement to a line manager** rather than establishing its magnitude directly.
- **Missing when a candidate rolls back to an older model in response to drift** rather than diagnosing the cause.
- **Missing when a candidate compromises on timeline instead of scope** in a research-versus-delivery dispute.
- **Missing when a candidate defends a technically correct but misleading claim** rather than replacing it.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead machine learning engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested reasoning under the particular uncertainty this role carries — models whose behaviour is learned rather than specified, evaluated on data that is never quite the data they will meet — with a recurring discipline of asking what a result does not establish. The numeric section tested the arithmetic that separates a real improvement from an artefact: base rates, class imbalance, the difference between a metric moving and a decision changing, and scale qualifiers that quietly multiply an answer by a thousand. The verbal section tested reading technical and governance prose exactly — disjunctions that are not conjunctions, and the standing trap that no evidence of an effect plus limited power to detect it never establishes absence. The situational judgement section tested what makes this role distinctive: accountability for models in production while the culture that produced them is optimised for something else — converting disputes into checkable questions, finding the narrower deployment where an argument dissolves, testing an uncomfortable concern rather than deferring it, and treating one's own past decisions and one's own organisation's failures as things to name openly.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely about models and systems under uncertainty, read technical and governance documents for exactly what they establish, and lead across research and delivery cultures with honesty about failure as well as success — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
