# Data Scientist (Head of Data Science) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for head of data science, within the UK Government Digital and Data profession. The material is job-specific: it presents what a head of data science genuinely handles — model outputs, pipelines, dashboards, capability plans, and ethics frameworks — and the judgements the role turns on, rather than abstract puzzles. At this level, assessment is less about whether a candidate can do arithmetic or read a paragraph, and more about whether they can extract signal from noisy information quickly, critique an analysis under time pressure, weigh competing priorities, and exercise sound judgement in situations where ministers, senior leaders, multidisciplinary teams, and the public all have a stake in the outcome.

This document covers four assessment types, each in its own section:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a head of data science genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — budgets, capacity figures, model performance metrics, resourcing ratios, and the kind of tables that land on a desk before a spending review.
3. **Workplace job-specific verbal reasoning assessment** — dense passages drawn from data ethics policies, ministerial briefings, standards documents, and cross-government reports, followed by True / False / Cannot Say and comprehension questions.
4. **Workplace job-specific situational judgement assessment** — realistic leadership dilemmas involving ministers, senior leaders, data engineers, user researchers, delivery managers, and a data science team.

Each section explains what the assessment measures, maps it to the specific skills in the role profile, and gives a substantial set of items with full worked explanations for use as an answer key, followed by administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using realistic workplace material rather than abstract puzzles. Every item is built from artefacts a head of data science genuinely handles: model evaluation tables, pipeline diagrams, ethics review findings, capability matrices, delivery plans, and dashboards.

Typical format: 15 to 30 minutes, delivered online, usually 20 to 30 questions. Some platforms are adaptive. Scoring is objective and compared against a norm group of senior professionals, with speed and accuracy often reported separately. Most tests offer short ungraded practice items first.

Cognitive assessment matters at this level because the role sets direction, oversees outputs and products, critiques statistical analyses, and represents the department on data science matters. When a flawed model evaluation reaches a desk the day before a ministerial briefing, the ability to spot the logical hole in minutes — not hours — is precisely what this assessment simulates.

### How this assessment maps to the role

Mapped to the skills in the role profile:

- **Applied maths, statistics and scientific practices** — logical deduction and error checking exercises mirror the duty to critique statistical analyses and use model outputs to produce evidence for services and policies.
- **Data science innovation** — pattern recognition items reflect practical knowledge of data science tools and techniques, and the duty to identify opportunities where data science can improve data practices.
- **Data ethics and privacy** — error checking and deduction items frequently embed compliance conditions, mirroring oversight of ethics standards and legislation across the organisation.
- **Data engineering and Understanding product delivery** — sequencing and prioritisation items reflect working with data engineers, choosing between Agile and waterfall, defining an MVP, and supporting decisions about priorities.
- **Developing data science capability and Delivering business impact** — resource-allocation logic items simulate overseeing resourcing, budgeting, and building capability.

### Practice questions

Present these to the candidate; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in model performance**

Weekly accuracy of a deployed classification model used to triage citizen correspondence:

Week 1: 94.2% — Week 2: 94.0% — Week 3: 93.5% — Week 4: 92.7% — Week 5: 91.6% — Week 6: ?

Which value best continues the pattern, and what does the pattern most likely indicate?

- A) 91.4% — random noise around a stable mean
- B) 90.2% — accelerating decline consistent with data drift
- C) 93.8% — seasonal recovery
- D) 91.6% — the model has stabilised at a new baseline

**Correct answer: B**

**Explanation:** Successive drops grow: 0.2, 0.5, 0.8, 1.1 points — the gap increases by 0.3 each week. The next drop should be about 1.4 points, giving 91.6 − 1.4 = 90.2%. An accelerating decline in a production model is the classic signature of data drift. This tests recognising accelerating change and connecting it to the intervention it dictates — retraining and drift monitoring — rather than treating the model as monitored-and-forgotten.

**Question 2 (easy) — Logical deduction from an ethics framework**

A data ethics framework contains: (1) any project using special category personal data must complete a DPIA before development begins; (2) any project using machine learning to make or support decisions about individuals must be reviewed by the Ethics Board; (3) projects that complete a DPIA are automatically logged in the transparency register.

Project Kestrel uses machine learning on special category personal data to support benefit-fraud triage decisions about individuals. Development began last month. The transparency register contains no entry for Kestrel.

Which conclusion must be true?

- A) The Ethics Board has not reviewed Project Kestrel.
- B) Project Kestrel has breached rule 1.
- C) Project Kestrel does not use personal data.
- D) The Ethics Board review is overdue but the DPIA was completed.

**Correct answer: B**

**Explanation:** No register entry means no DPIA was completed (rule 3), yet development has begun despite rule 1's requirement — a breach. Option A is not forced: the register says nothing about Ethics Board reviews. This tests reasoning about what must be true, not what might be true — the same discipline applied when overseeing compliance with ethics standards.

**Question 3 (moderate) — Error checking a model evaluation write-up**

A junior data scientist's summary for sign-off states: "We trained a gradient boosting model to predict which of 40,000 planning applications will be appealed. The dataset contained 2,000 appealed cases (5%). We achieved 95% accuracy on the held-out test set, demonstrating the model is highly effective. We also included the appeal outcome date as a feature, which proved highly predictive. Precision on the appealed class was 22%."

Which is the most serious flaw to flag first?

- A) The 95% accuracy claim, because a model predicting "no appeal" for everyone would also score 95%
- B) The use of gradient boosting rather than a neural network
- C) The inclusion of the appeal outcome date as a feature, which leaks the target
- D) The precision figure, which should never be reported for imbalanced data

**Correct answer: C**

**Explanation:** A is real but merely misleading. C is fatal: the appeal outcome date can only exist for cases that were appealed, so including it leaks the target, invalidating every reported metric. This tests ranking the severity of two genuine flaws — target leakage is the single most common fatal error in reviewing a team's work.

**Question 4 (moderate) — Prioritisation across a portfolio**

Monday morning. Four items compete for attention: (A) the Ethics Board flags that a live recidivism-risk model may be producing disparate outcomes by ethnicity, and the model continues to run; (B) a minister's office requests talking points on the department's AI adoption for a Thursday speech; (C) the data engineering lead reports the overnight pipeline failed, delaying the monthly performance dashboard by 24 hours; (D) a promising candidate for a vacant lead data scientist post has a competing offer expiring Friday.

Which order of attention is most defensible?

- A) B, D, A, C
- B) A, B, D, C
- C) A, D, B, C
- D) C, A, B, D

**Correct answer: C**

**Explanation:** A is first: a live model with possible discriminatory outcomes is an ongoing harm. D can begin with a short call today (irreversible loss risk) while B's talking points begin via delegation, and the routine, already-owned pipeline delay (C) comes last. This tests triaging by irreversibility and harm, not by who is shouting loudest.

**Question 5 (moderate) — Deductive reasoning about team capability**

All the following are true: (1) every data scientist who has completed the NLP specialism can be deployed to the correspondence-triage product; (2) no one who joined within the last six months has completed the NLP specialism; (3) some data scientists on the forecasting team have completed the NLP specialism; (4) Priya joined within the last six months.

Which conclusion must be true?

- A) Priya cannot ever be deployed to the correspondence-triage product.
- B) Some members of the forecasting team can be deployed to the correspondence-triage product.
- C) Priya works on the forecasting team.
- D) Everyone on the forecasting team can be deployed to the correspondence-triage product.

**Correct answer: B**

**Explanation:** From (3) and (1), some forecasting-team members can be deployed. Option A over-reaches: nothing says Priya is permanently excluded, only that this route is currently unavailable to her. This tests distinguishing a sufficient condition for deployment from a necessary one — precise reading of eligibility logic that matters when critiquing policy models.

**Question 6 (moderate) — Sequencing a product delivery**

A new prescriptive analytics product for hospital discharge planning has steps: (1) agree user needs with the service team (no dependency); (2) data sharing agreement signed (no dependency); (3) DPIA and ethics review (requires 2); (4) build feature pipeline (requires 2 and 3); (5) train and validate model (requires 4); (6) define MVP dashboard with users (requires 1); (7) private beta with one hospital trust (requires 5 and 6). Steps 1 and 2 can run in parallel. Which statement about the critical path is correct?

- A) The critical path runs through Steps 1 and 6, because user needs drive everything.
- B) The critical path runs through Steps 2, 3, 4, 5, 7 — delays to the ethics review delay the beta.
- C) Steps 3 and 6 can be swapped to shorten delivery.
- D) The private beta can begin once Step 5 completes, regardless of Step 6.

**Correct answer: B**

**Explanation:** Chain 2→3→4→5→7 (five stages) is longer than chain 1→6→7 (three stages), so it is the critical path. This tests recognising that ethics review sits on the critical path — worth resourcing early rather than treating as a late-stage gate — and distinguishing importance from criticality.

**Question 7 (moderate) — Spotting the inconsistency in a dashboard**

A performance dashboard shows: total models in production 24; models with drift monitoring enabled 19; models without drift monitoring 3; models added this quarter 4 (all with drift monitoring, included above); models retired this quarter 2 (removed from totals above). What should be challenged first?

- A) 19 + 3 = 22, not 24 — two production models are unaccounted for in the monitoring breakdown.
- B) Retired models should still appear in the totals.
- C) Four new models in a quarter is implausibly fast.
- D) Drift monitoring should be 100% before any dashboard is published.

**Correct answer: A**

**Explanation:** Monitored and unmonitored categories must partition the 24 total, but sum to only 22. This tests the fast, high-value habit of checking that categories sum before figures travel upward to senior leaders.

**Question 8 (moderate) — Pattern recognition in recruitment data**

Five recruitment campaigns (applications → interviews → offers → acceptances): 120→18→6→5; 95→14→5→4; 110→16→6→5; 130→20→7→3; 125→19→7→3. What is the most important pattern change to investigate?

- A) Application volumes are falling.
- B) The interview-to-offer ratio has collapsed.
- C) Offer acceptance has dropped from roughly 80% to roughly 43% in the two most recent campaigns.
- D) There is no meaningful change; the numbers vary randomly.

**Correct answer: C**

**Explanation:** Acceptance rates run ~80-83% in campaigns 1-3, then drop to ~43% in campaigns 4-5, while applications and interview-to-offer ratios stay stable. This tests identifying which stage of a multi-stage funnel changed, rather than reacting to the aggregate — the difference between commissioning a useless advertising push and fixing the actual leak.

**Question 9 (hard) — Logical deduction across delivery methodologies**

Rules: (1) products with fixed statutory deadlines are delivered by waterfall or hybrid, never pure Agile; (2) products with evolving user needs must include iterative user research cycles; (3) any product using hybrid delivery requires a trained delivery manager; (4) the correspondence-triage product has evolving user needs and a fixed statutory deadline; (5) no trained delivery manager is currently available.

Which conclusion must be true?

- A) The correspondence-triage product must be delivered by waterfall, and it must include iterative user research cycles.
- B) The correspondence-triage product cannot be delivered at all.
- C) The correspondence-triage product should use pure Agile because user needs are evolving.
- D) The statutory deadline must be renegotiated.

**Correct answer: A**

**Explanation:** Waterfall or hybrid is required (1, 4); hybrid is unavailable (3, 5); so waterfall is the only permitted method, and rule 2 independently requires research cycles. This tests resisting the intuitive but unsupported leap that evolving needs logically forces Agile.

**Question 10 (hard) — Problem solving under resource constraints**

Three teams, four candidate projects, each team takes exactly one project: Team Alpha (strong NLP, no forecasting); Team Beta (strong forecasting, moderate NLP); Team Gamma (strong computer vision and forecasting). Projects: P1 ministerial correspondence NLP triage (requires strong NLP); P2 A&E demand forecasting (requires strong forecasting); P3 satellite imagery land-use classification (requires computer vision); P4 long-term workforce forecasting (requires at least moderate forecasting). Which assignment is feasible, and which project must be deferred?

- A) Alpha→P1, Beta→P2, Gamma→P3; defer P4
- B) Alpha→P1, Beta→P4, Gamma→P2; defer P3
- C) Alpha→P3, Beta→P2, Gamma→P1; defer P4
- D) Alpha→P1, Beta→P3, Gamma→P4; defer P2

**Correct answer: A**

**Explanation:** P3 requires Gamma uniquely, and P1 requires Alpha uniquely; assigning both preserves the two uniquely-constrained matches, leaving Beta for P2 and deferring P4. Option B needlessly abandons P3, which only Gamma can ever do. This tests starting constraint-satisfaction from the most constrained pairing rather than the most attractive one.

**Question 11 (hard) — Error checking a causal claim**

An analysis states: "Local authorities that adopted our predictive maintenance model spent 18% less on emergency housing repairs than those that did not. The model therefore reduces repair costs by 18%." Which single challenge most undermines the causal claim?

- A) The percentage should be calculated on medians, not means.
- B) Adoption was voluntary, so authorities with better data maturity and lower baseline costs may have self-selected into adoption.
- C) 18% is too small an effect to matter.
- D) Emergency repairs are seasonal, so the comparison should use winter data only.

**Correct answer: B**

**Explanation:** Voluntary adoption invites selection bias — the kind of authority that adopts early may already have lower costs, independent of the model. This tests distinguishing correlation from causation in an evaluation, the highest-stakes critique performed when model outputs inform business cases.

**Question 12 (hard) — Multi-step deduction on data sharing**

Rules: (1) any dataset containing personal data may only be linked inside the secure research environment (SRE); (2) Dataset W contains personal data, X is fully synthetic, Y is aggregate statistics at local-authority level, Z's contents are undocumented; (3) undocumented datasets must be treated as containing personal data until an audit proves otherwise; (4) the SRE can host at most three datasets for any one project. A project team insists all four datasets are essential and no audit can be completed in time. What follows?

- A) The project can proceed outside the SRE if dataset W is pseudonymised.
- B) The project as specified cannot proceed: W and Z must be in the SRE, X and Y may join them, but all four together exceed the SRE limit only if all four must be co-located — so the team must either drop a dataset or link in two stages.
- C) Dataset Z can be excluded from the personal-data rule because it might not contain personal data.
- D) The SRE limit does not apply because the project is cross-government.

**Correct answer: B**

**Explanation:** W and Z must be in the SRE; linkage requires all four co-located; the SRE caps at three. The specification is infeasible as stated. This tests refusing to soften a rule because the conclusion is inconvenient — central to overseeing compliance with data ethics standards.

**Question 13 (hard) — Prioritisation with incomplete information**

At 16:40 on a Friday, a dashboard published externally has, since Tuesday, shown a hospital waiting-time figure wrong by an unknown amount due to a join error. Journalists have quoted the figure. The dashboard lead has gone home; the analyst who found the error is unsure whether the error inflates or deflates the figure. What should happen first?

- A) Wait until Monday to investigate properly with the full team.
- B) Immediately take the dashboard offline, then notify senior leadership and press office that a correction is in progress, before establishing the error's size.
- C) Publish an immediate correction with a best guess of the true figure.
- D) Ask the analyst to quietly fix the join over the weekend and update the figure without an announcement.

**Correct answer: B**

**Explanation:** Stop ongoing harm (take the dashboard down — the error's direction is irrelevant to knowing the figure is wrong), then inform accountable people, then fix carefully. This tests reasoning under uncertainty: identifying which actions are robust to what is not yet known, and recognising that a silent fix to an externally quoted statistic, if discovered, converts an honest error into an apparent cover-up.

### Administration tips

- **Score for whether a candidate rehearses sufficient versus necessary conditions** — "completing the specialism allows deployment" does not mean "deployment requires the specialism".
- **Watch for whether a candidate triages ruthlessly by irreversibility and harm** rather than deadline order alone.
- **Note whether a candidate anchors on the more severe of two genuine flaws** in an error-checking item, rather than the first one spotted.
- **Note whether a candidate starts constraint-satisfaction problems from the most constrained element.**
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from experience instead of the given rules.**
- **Crediting "what might be true" over "what must be true"** on a deduction item.
- **Missing when a candidate anchors on the first flaw spotted** in an error-checking item rather than the most severe.
- **Rewarding an over-elaborate theory** where the simplest pattern fits a trend.
- **Letting a time sink on a constraint puzzle distort the overall picture** — enumerating every combination instead of starting from the most constrained element.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates how a candidate analyses, interprets, and makes sound decisions from numerical data presented the way it actually arrives in this role: budget tables, capacity plans, model performance metrics, recruitment funnels, and evaluation results. It is business mathematics — percentages, ratios, rates of change, weighted averages, and cost-benefit estimation.

Typical format: strictly timed, often 60 to 90 seconds per question, with an onscreen calculator allowed or provided. Questions typically present a table or chart followed by two to four items drawing on it, and the totals, units, and scale qualifiers are where most marks are won and lost.

This role oversees resourcing, budgeting, and outputs across the data science function, presents figures to ministers and senior leaders who will act on them, critiques cost models in business cases, and decides where a limited budget buys the most capability. A head of data science who cannot rapidly sanity-check a table under pressure signs off other people's errors.

### How this assessment maps to the role

- **Applied maths, statistics and scientific practices** — the core of the assessment: percentages, rates, weighted averages, and interpreting model metrics such as precision, recall, and error rates.
- **Delivering business impact** — cost-benefit items reflect building the case for data science products: return on investment, break-even points, and benefit projections.
- **Developing data science capability** — workforce arithmetic: FTE calculations, training budget allocation, recruitment funnel rates, and pay-band planning.
- **Understanding product delivery** — capacity and scheduling items: sprint throughput, MVP scope trade-offs, and delivery-plan arithmetic.
- **Data engineering** — infrastructure figures: compute costs, pipeline volumes, and storage growth.
- **Data ethics and privacy** — items on fairness metrics and disparity ratios.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage change in a directorate budget**

A data science directorate budget was £4.8 million this financial year and will be £5.4 million next year. What is the percentage increase?

- A) 8.9%
- B) 11.1%
- C) 12.5%
- D) 15.0%

**Correct answer: C**

**Explanation:** Increase ÷ original = £0.6m ÷ £4.8m = 12.5%. Option B divides by the new figure instead. This tests dividing the change by the original value.

**Question 2 (easy) — Team capacity in FTE**

A machine learning team has 8 data scientists. Two work 0.6 FTE, one works 0.8 FTE, and the rest are full time. Corporate overhead absorbs 15% of all available capacity. How many FTE are effectively available for project delivery?

- A) 5.95
- B) 6.12
- C) 6.80
- D) 7.00

**Correct answer: A**

**Explanation:** Raw FTE = 1.2 + 0.8 + 5.0 = 7.0. Deliverable = 7.0 × 0.85 = 5.95. This tests reconciling headcount correctly before applying a percentage — a single miscounted FTE compounds through every downstream projection.

**Question 3 (easy) — Reading a model metrics table**

A fraud-detection model produces this confusion matrix on 10,000 test cases: actual fraud → predicted fraud 300, predicted not fraud 200; actual not fraud → predicted fraud 700, predicted not fraud 8,800. What is the model's precision on the fraud class?

- A) 30%
- B) 60%
- C) 70%
- D) 8%

**Correct answer: A**

**Explanation:** Precision = 300 ÷ (300+700) = 30%. Option B is recall (300 ÷ 500). This tests keeping precision and recall distinct when communicating model performance to senior leaders.

**Question 4 (moderate) — Compute cost projection**

A cloud compute bill for model training is £22,000 per month. Moving training jobs to spot instances saves 55% on the affected workloads, but only 60% of the workload (by cost) is suitable. Migration costs a one-off £18,000. What is the monthly saving, and in how many months does the migration pay for itself?

- A) £7,260 per month; 2.5 months
- B) £12,100 per month; 1.5 months
- C) £7,260 per month; 3 months
- D) £13,200 per month; 1.4 months

**Correct answer: A**

**Explanation:** Affected workload = £13,200; saving = 55% × £13,200 = £7,260; payback = £18,000 ÷ £7,260 ≈ 2.5 months. This tests correctly identifying which slice of a bill a saving applies to before computing a payback period.

**Question 5 (moderate) — Weighted average across teams**

Team A averages 32 days across 5 deployments; Team B averages 18 days across 15 deployments; Team C averages 45 days across 4 deployments. What is the directorate's overall average lead time per deployment?

- A) 31.7 days
- B) 25.4 days
- C) 24.4 days
- D) 28.0 days

**Correct answer: B**

**Explanation:** Total days ÷ total deployments = 610 ÷ 24 ≈ 25.4. Option A is the unweighted mean of team averages, giving small teams outsized influence. This tests weighting by deployments, not by teams, when aggregating a directorate-level KPI.

**Question 6 (moderate) — Training budget allocation**

A £96,000 CPD budget is allocated across 24 data scientists in the ratio 3:2:1 for senior : mid : junior bands, with 6 seniors, 10 mids, and 8 juniors. How much does each mid-level data scientist receive?

- A) £4,000
- B) £3,000
- C) £4,174
- D) £2,087

**Correct answer: C**

**Explanation:** Total units = 18+20+8 = 46; one unit = £2,086.96; each mid gets 2 units ≈ £4,174. This tests applying a per-person ratio correctly and sanity-checking that the parts sum to the total.

**Question 7 (moderate) — Fairness metrics in a bias audit**

An ethics audit of a triage model reports selection rates: Group 1: 12.0% of 5,000 cases; Group 2: 8.4% of 3,000 cases. The ethics framework requires the ratio of the lower to the higher selection rate (disparate impact ratio) to be at least 0.80. What is the ratio, and does the model comply?

- A) 0.70 — non-compliant
- B) 0.80 — compliant at the boundary
- C) 0.70 — compliant because more Group 1 cases exist
- D) 1.43 — compliant

**Correct answer: A**

**Explanation:** Ratio = 8.4 ÷ 12.0 = 0.70, below the 0.80 threshold. This tests recognising that the disparate impact ratio compares rates already normalised for group size — group counts are a distractor.

**Question 8 (moderate) — Recruitment funnel arithmetic**

Six new data scientists are needed by Q4. Historic funnel rates: 15% of applicants reach interview, 33% of interviewees receive offers, 75% of offers are accepted. Approximately how many applicants must the campaign attract?

- A) 120
- B) 162
- C) 54
- D) 96

**Correct answer: B**

**Explanation:** 6 ÷ (0.75 × 0.33 × 0.15) ≈ 162. This tests reversing a chained-rate funnel correctly — the same backward arithmetic used to size recruitment and user-research cohorts.

**Question 9 (moderate) — Storage growth projection**

A data platform currently holds 40 TB and grows 20% per quarter. The contract caps storage at 80 TB. After how many quarters will the platform exceed the cap?

- A) 3 quarters
- B) 4 quarters
- C) 5 quarters
- D) 8 quarters

**Correct answer: B**

**Explanation:** Compounding: 48, 57.6, 69.1, 82.9 TB — exceeded in quarter 4. Option D is the linear-growth error. This tests recognising compound versus linear growth in infrastructure planning.

**Question 10 (hard) — Cost-benefit of a data science product**

A proposed prescriptive analytics product for clinic scheduling costs £350,000 to build and £90,000 per year to run. It is projected to save 4,200 staff hours per year at £38 per hour, plus reduce missed appointments by 3,000 per year at £45 per missed appointment. What is the net annual benefit once live, and the payback period on the build cost?

- A) £204,600 per year; 1.7 years
- B) £294,600 per year; 1.2 years
- C) £159,600 per year; 2.2 years
- D) £204,600 per year; 1.2 years

**Correct answer: A**

**Explanation:** Gross benefit = £294,600; net = £294,600 − £90,000 = £204,600; payback = £350,000 ÷ £204,600 ≈ 1.7 years. This tests keeping gross benefit, running costs, and payback as three separate, correctly sequenced stages.

**Question 11 (hard) — Interpreting an A/B evaluation table**

An A/B test of a new NLP triage model against the current one on 12,000 pieces of correspondence each: current model correctly routed 10,320, escalated 1,800, complaints traced to misrouting 84; new model correctly routed 10,920, escalated 960, complaints 102. Which statement is numerically correct and most decision-relevant?

- A) The new model improves routing accuracy from 86% to 91% but complaints per misrouted case have risen, so accuracy alone should not decide deployment.
- B) The new model is worse: complaints rose from 84 to 102.
- C) The new model is better on every measure.
- D) Escalations fell 47%, so the new model saves the most money and should be deployed immediately.

**Correct answer: A**

**Explanation:** Accuracy improves (86%→91%), but complaints per misroute rise from 5% to 9.4%. This tests computing rates rather than counts alone, and asking what the residual errors are made of — not just whether headline accuracy improved.

**Question 12 (hard) — Budget reprofiling under a spending cut**

A £5.4m directorate budget: staff 65%, cloud infrastructure 20%, training 5%, external partnerships 10%. A 7% cut to the total is imposed, but staff costs are contractually fixed. If the cut must fall proportionately across the non-staff lines, what percentage cut does each non-staff line take?

- A) 7%
- B) 20%
- C) 10.8%
- D) 15.3%

**Correct answer: B**

**Explanation:** Cut = £378,000; non-staff budget = £1.89m; £378,000 ÷ £1,890,000 = 20%. This tests recognising the "protected-line concentration" effect — a modest headline cut becomes a severe cut on unprotected, flexible spend once a large line is fixed.

**Question 13 (hard) — Model retraining economics**

A demand-forecasting model loses accuracy over time: each month without retraining, forecast error adds £6,000 to operational costs (month 1: +£6,000, month 2: +£12,000, and so on). Retraining costs £30,000 and resets the error to zero. Which retraining interval (n months) minimises average monthly cost?

- A) Every 2 months
- B) Every 3 months
- C) Every 4 months
- D) Every 6 months

**Correct answer: B**

**Explanation:** Average monthly cost = £30,000/n + £3,000(n+1): n=2 gives £24,000; n=3 gives £22,000; n=4 gives £22,500; n=6 gives £26,000 — minimum at n=3. This tests evaluating a short cost formula at several points to find where a fixed cost amortised over an interval balances a linearly growing degradation cost.

**Question 14 (hard) — Percentage points versus percentages in a ministerial briefing**

A draft briefing states: "The new matching algorithm raised the successful-match rate from 8% to 12%, a 4% improvement." What correction is required, and what is the correct relative improvement?

- A) No correction; 4% is right.
- B) The rise is 4 percentage points, which is a 50% relative improvement.
- C) The rise is 4 percentage points, which is a 33% relative improvement.
- D) The rise should be reported as 1.5%, the ratio of the two rates.

**Correct answer: B**

**Explanation:** 4 percentage points ÷ 8% baseline = 50% relative improvement. Option C divides by the new rate. This tests catching a points-versus-percent conflation in briefing material — an error that can equally oversell or undersell a change.

**Question 15 (moderate) — Sprint throughput and MVP scope**

An MVP comprises 84 story points. The team completes 14 points per two-week sprint on average, but the first sprint of a new product historically delivers only half the average. The MVP must be live for a policy deadline in 14 weeks. Does the plan fit, and with how much slack?

- A) Yes — the MVP needs 6 sprints (12 weeks), leaving 2 weeks of slack.
- B) No — the MVP needs 7 sprints (14 weeks), leaving no slack.
- C) Yes — the MVP needs 6.5 sprints (13 weeks), leaving 1 week of slack.
- D) No — the MVP needs 8 sprints (16 weeks).

**Correct answer: B**

**Explanation:** Sprint 1 delivers 7 points; remaining 77 points need 5.5 further sprints, rounding up to 6; total 7 sprints = 14 weeks — exactly on deadline with no slack. This tests adjusting for a stated first-sprint effect and recognising that a plan with zero slack against a fixed deadline is a plan that will miss it if anything slips.

### Administration tips

- **Score for whether a candidate reads a table's units and scale qualifiers** before extracting numbers.
- **Watch for whether a candidate estimates before computing precisely**, catching order-of-magnitude errors.
- **Note whether a candidate weights an average by volume** rather than taking an unweighted mean of group averages.
- **Note whether a candidate recognises compound growth** and the "protected-line concentration" effect in budget arithmetic.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads a scale qualifier** — monthly confused with annual, or a missed "in thousands".
- **Crediting a percentage change or rate divided by the wrong base.**
- **Missing when a candidate takes an unweighted mean of team-level averages.**
- **Missing when a candidate applies linear thinking to an exponential or compounding process.**
- **Rewarding over-calculation** where estimation would identify the answer faster.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how accurately a candidate understands, analyses, and draws conclusions from written material of the kind this role generates and consumes: data ethics policies, cross-government standards, ministerial correspondence, evaluation reports, supplier documentation, and internal governance papers. The dominant format presents a dense passage followed by statements to classify as True, False, or Cannot Say. Multiple-choice comprehension items round out the set.

Two rules define the discipline. First, answer strictly from the passage — expert professional knowledge must be set aside, because passages are sometimes written to differ deliberately from real-world practice. Second, respect exact wording: "must", "may", "some", "all", "unless", and "intends to" each carry precise logical weight.

At this level the relevance is direct: overseeing compliance with legislation and standards where a "may" misread as a "must" changes obligations; communicating to ministers whose words are drafted and parsed with exactly this precision; and critiquing reports whose conclusions must be checked against what their own text actually establishes.

### How this assessment maps to the role

Mapped to the skills in the role profile:

- **Data ethics and privacy** — passages from ethics frameworks, DPIA guidance, and legislation test extracting precise obligations, exemptions, and conditions.
- **Applied maths, statistics and scientific practices** — passages from evaluation reports test distinguishing what a study claims from what it demonstrates.
- **Delivering business impact and Understanding product delivery** — passages from business cases and delivery frameworks test identifying commitments, dependencies, and scope boundaries.
- **Developing data science capability** — passages about professional standards and CPD frameworks.
- **Communication to senior leaders** — best-summary and inference items reflect the duty to compress a dense document into a faithful sentence for ministers and senior leaders.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage A — Data ethics framework extract (for Questions 1–4)**

> "All new data science projects must complete an ethics self-assessment before development begins. Projects assessed as high risk must additionally be referred to the Data Ethics Committee, which meets monthly and may request modifications, impose conditions, or, in exceptional cases, recommend that a project does not proceed. The Committee's recommendations are advisory; final authority rests with the Senior Information Risk Owner (SIRO). Projects using only aggregate data published under the Open Government Licence are exempt from the self-assessment requirement, unless the project combines two or more such datasets in ways that could plausibly re-identify individuals. Departments must publish an annual summary of Committee referrals, excluding any detail that would compromise operational security."

**Question 1 (easy)**

True, False, or Cannot Say: "The Data Ethics Committee can stop a high-risk project from proceeding."

**Correct answer: False**

**Explanation:** The Committee's recommendations are "advisory"; final authority rests with the SIRO. This tests catching a clause that reverses the impression created by a preceding list of strong-sounding powers — the distinction between advise and decide.

**Question 2 (easy)**

True, False, or Cannot Say: "A project using a single aggregate dataset published under the Open Government Licence must complete an ethics self-assessment."

**Correct answer: False**

**Explanation:** The exemption withdraws only where two or more such datasets are combined in a re-identifying way; a single dataset cannot trigger that condition. This tests tracking an exemption and its exception structure.

**Question 3 (moderate)**

True, False, or Cannot Say: "The Data Ethics Committee has recommended that at least one project should not proceed."

**Correct answer: Cannot Say**

**Explanation:** The passage defines a power ("may... recommend"), not an event; nothing reports the power ever exercised. This tests separating "the rules permit X" from "X has occurred".

**Question 4 (moderate)**

True, False, or Cannot Say: "The annual published summary must include every referral made to the Committee during the year."

**Correct answer: False**

**Explanation:** The published document is a summary explicitly required to exclude security-sensitive detail — an unconditional "every referral" claim is contradicted by the mandated exclusion. This tests recognising that strengthening a qualified duty into an absolute one makes a statement False, not merely unproven.

**Passage B — Evaluation report extract (for Questions 5–8)**

> "The pilot deployed a machine learning model to prioritise housing repair requests across three participating local authorities between January and June. Average time-to-repair for urgent cases fell by 22% compared with the same period last year. Participating authorities also reported higher tenant satisfaction, although response rates to the satisfaction survey were below 30%. The evaluation team cautions that two of the three authorities simultaneously increased their repairs budgets, and that the winter period covered by the baseline included an unusually severe cold spell. The team concludes that the model shows promise but that attribution of the improvement to the model alone is not yet supported. A randomised evaluation across ten authorities is proposed for next year."

**Question 5 (easy)**

True, False, or Cannot Say: "Average time-to-repair for urgent cases improved during the pilot compared with the baseline period."

**Correct answer: True**

**Explanation:** Directly stated. This tests locating and confirming a direct retrieval item, keeping the fact separate from any causal attribution the passage does not make.

**Question 6 (moderate)**

True, False, or Cannot Say: "The model caused the 22% reduction in time-to-repair."

**Correct answer: Cannot Say**

**Explanation:** The passage cautions that attribution "is not yet supported", citing confounders — an open question, not a denial. This tests the unproven-versus-disproven boundary, the verbal-reasoning form of the correlation-causation critique.

**Question 7 (moderate)**

True, False, or Cannot Say: "All three participating authorities increased their repairs budgets during the pilot."

**Correct answer: False**

**Explanation:** "Two of the three" directly contradicts "all three". This tests quantifier precision — a control adopted by "some" is a different assurance position from one adopted by "all".

**Question 8 (hard) — Best summary**

Which statement best summarises the evaluation team's conclusion?

- A) The model reduced repair times by 22% and should be scaled to ten authorities.
- B) The pilot's results are encouraging, but confounding factors prevent attributing the improvement to the model, so a stronger evaluation design is proposed.
- C) The pilot failed because tenant satisfaction data was unreliable.
- D) Budget increases, not the model, caused the improvement in repair times.

**Correct answer: B**

**Explanation:** B captures promise, the attribution caveat, and the proposed next step without overreach in either direction. This tests preserving the passage's calibration — its hedges as well as its findings.

**Passage C — Ministerial briefing note extract (for Questions 9–11)**

> "The Minister has asked for options to expand the use of natural language processing across citizen-facing services. Officials recommend a phased approach: an initial six-month discovery focused on correspondence handling, followed, subject to the discovery's findings, by private beta services in two further areas to be selected jointly with operational teams. Officials advise against announcing service-level commitments before the discovery concludes. Funding for the discovery phase can be met from existing budgets; any subsequent phase would require a new bid through the departmental investment board. The Minister's office has indicated that the Minister intends to reference the programme in a speech next month and has requested draft lines by Friday."

**Question 9 (moderate)**

True, False, or Cannot Say: "If the discovery's findings are unfavourable, the private beta services will not go ahead."

**Correct answer: Cannot Say**

**Explanation:** "Subject to the discovery's findings" states a condition without a decision rule for an unfavourable outcome. This tests not supplying a specific consequence a passage does not contain.

**Question 10 (moderate)**

True, False, or Cannot Say: "Proceeding to a private beta phase would require funding beyond existing budgets to be approved."

**Correct answer: True**

**Explanation:** The private betas are "any subsequent phase", which requires a new bid through the investment board. This tests a one-step entailment connecting "private beta" to "subsequent phase".

**Question 11 (hard)**

True, False, or Cannot Say: "The Minister will announce service-level commitments in next month's speech."

**Correct answer: Cannot Say**

**Explanation:** Advice against announcing and an intention to "reference the programme" are neither commitment nor its absence. This tests not treating an official's advice as the decision-maker's outcome.

**Passage D — Cross-government data standards extract (for Questions 12–14)**

> "Departments should adopt the reference data architecture for all new analytical platforms. Existing platforms need not be migrated immediately, but any platform undergoing substantial re-procurement must be brought into conformance at that point. Conformance requires, at minimum: documented data lineage for all critical datasets; role-based access controls; and quarterly quality reporting against the published metrics. Departments may apply for a time-limited exemption where conformance would delay a service designated as critical national infrastructure, provided a remediation plan is agreed within three months of the exemption being granted. Exemptions are granted by the central standards authority, not by departments themselves."

**Question 12 (moderate)**

True, False, or Cannot Say: "A department may grant itself a time-limited exemption for a critical national infrastructure service."

**Correct answer: False**

**Explanation:** "Exemptions are granted by the central standards authority, not by departments themselves" is decisive. This tests tracking who holds authority to grant an exception, not just under what conditions.

**Question 13 (hard)**

True, False, or Cannot Say: "An existing analytical platform that is not being re-procured is currently non-compliant with the standard."

**Correct answer: Cannot Say**

**Explanation:** "Need not be migrated immediately" suspends an obligation without asserting the platform's compliance status either way. This tests not conflating "no current conformance duty" with "fails the standard".

**Question 14 (hard) — Precise comprehension**

According to Passage D, which of the following is NOT a minimum requirement of conformance?

- A) Documented data lineage for all critical datasets
- B) Role-based access controls
- C) Quarterly quality reporting against published metrics
- D) A remediation plan agreed within three months

**Correct answer: D**

**Explanation:** The remediation plan belongs to the exemption mechanism, not conformance's minimum list. This tests checking each option against a list's actual boundaries — the distractor is drawn from adjacent text performing a different function.

**Question 15 (hard) — Author's purpose**

The primary purpose of Passage B (the evaluation report extract) is to:

- A) Persuade authorities to adopt the housing repairs model immediately.
- B) Report pilot results with appropriate caveats and recommend a more rigorous next-stage evaluation.
- C) Criticise the participating authorities for confounding the pilot by raising budgets.
- D) Demonstrate that machine learning cannot be evaluated in operational settings.

**Correct answer: B**

**Explanation:** The passage's structure — results, limitations, calibrated conclusion, proposed next step — matches the anatomy of a balanced evaluation report. This tests standing back from individual sentences to name what a document is doing.

**Question 16 (moderate) — Word-in-context**

In Passage D, "Departments *should* adopt the reference data architecture for all new analytical platforms." Given the passage's later use of "must" and "may", the word "should" most precisely indicates that adoption is:

- A) Mandatory in all cases.
- B) Strongly expected, but not framed with the same mandatory force as the "must" obligations.
- C) Entirely optional, equivalent to "may".
- D) Required only for critical national infrastructure services.

**Correct answer: B**

**Explanation:** The passage deploys "should", "must", and "may" as a deliberate graded vocabulary. This tests calibrating obligation strength from the exact modal verb, sentence by sentence.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate underlines the operators** — must/may/should, all/some/none, unless/provided/subject to, intends/has agreed.
- **Note whether a candidate quarantines outside expertise**, checking that evidence for an answer sits in the text, not experience.
- **Note whether a candidate reads the whole clause structure** — requirements, exemptions, and exceptions living in different clauses.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate confuses "unproven" with "false"** — evidence being insufficient is Cannot Say, not a contradiction.
- **Crediting an answer that glides over a quantifier or modal** — "two of the three", "may", "advise against".
- **Missing when a candidate treats a likely outcome as a stated fact.**
- **Missing when a candidate misattributes a clause** — a remediation condition read as part of conformance, a Committee power read as decisive.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic dilemmas from this role's working life and asks the candidate to evaluate possible responses. There is rarely a single objectively correct answer; instead, some responses align better than others with the values and behaviours the role demands. Formats vary: choose the most effective and least effective actions, rank all options, or rate each independently. Timing is usually generous or untimed.

For a head of data science, scenarios revolve around real stakeholders — ministers and their offices, senior leaders, the Ethics Board, data engineers, user researchers, delivery managers, arm's-length bodies, suppliers, and a data science team — and real tensions: delivery pace versus ethical assurance, ministerial expectations versus evidential honesty, team advocacy versus organisational priorities, innovation versus stewardship of public money and public trust.

Strong answers at this level consistently reflect UK public sector values: put user needs first; be transparent, especially about uncertainty and error; collaborate across professions rather than defend silos; build accessibility and inclusion in from the start; act early on ethical risk; and develop people. Weak answers tend to be passive, evasive, unilateral where collaboration is owed, or expedient at the cost of trust.

### How this assessment maps to the role

Mapped to the skills in the role profile:

- **Data ethics and privacy** — dilemmas where delivery pressure, ministerial interest, or commercial convenience collide with the duty to oversee ethics compliance and develop an ethical culture.
- **Delivering business impact** — scenarios about championing data science and taking responsibility for scalable products and their maintenance.
- **Developing data science capability** — situations testing how people are grown: CPD direction, technical leadership, retention.
- **Understanding product delivery and Data engineering** — dilemmas about MVP scope, method choice, and working with engineers and multidisciplinary teams.
- **Communication to ministers and senior leaders** — scenarios about presenting uncertainty honestly and correcting errors publicly.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (moderate) — The minister wants a stronger number**

Finalising a briefing for a ministerial speech, a team's analysis estimates a new data-matching service will save "between £2 million and £6 million per year, with £3.5 million most likely". A private office official asks for the line to be changed to "will save £6 million per year" because "the range sounds weak".

A) Agree to the change; £6 million is within the estimated range, so it is technically defensible.
B) Refuse and escalate immediately to the Permanent Secretary that the private office is distorting analysis.
C) Explain why quoting the top of the range as a central claim would misrepresent the evidence, and offer stronger wording that remains faithful — for example, "up to £6 million, with £3.5 million expected".
D) Say nothing and quietly reinstate the original range in the final version, hoping no one notices.

**Most effective: C. Least effective: D.**

**Explanation:** C defends analytical integrity while solving the communicator's real problem with faithful, still-usable language. A misleads by presenting a ceiling as the headline. B is disproportionate as a first move, spending relationship capital before attempting resolution. D is worst: covert, likely discovered, and it converts an honest disagreement into apparent bad faith while solving nothing. This tests finding language that is both faithful and usable, rather than either capitulating or confronting.

**Question 2 (moderate) — The flagship model fails its bias audit**

Two weeks before a well-publicised launch, an internal audit finds a flagship eligibility-triage model recommends rejection significantly more often for one demographic group, unexplained by legitimate factors. The programme director, under delivery pressure, proposes launching on time and "fixing fairness in phase two". Rank these responses from most to least effective:

A) Support the launch with a public commitment to address fairness in phase two.
B) Recommend delaying launch until the disparity is understood, and bring the audit findings, options, and a revised timeline to the programme board with the Ethics Board's advice attached.
C) Quietly ask the team to apply a statistical adjustment that equalises rejection rates before launch, without wider review.
D) State the model cannot ever launch and withdraw the team from the programme.

**Correct ranking: B, D, C, A.**

**Explanation:** B acts on the ethical risk before harm occurs, uses governance rather than personal fiat, and pairs the finding with options and a path forward. D is heavy-handed but at least prevents the harm. C is seriously wrong despite its technical veneer — an unreviewed adjustment may mask rather than fix the problem and bypasses ethics governance. A is worst: it knowingly launches a system with unexplained discriminatory outcomes and stakes public trust on a promise. This tests recognising that C's secrecy is worse than D's bluntness, and that A's polished pragmatism is the most dangerous option on the list.

**Question 3 (moderate) — Two professions, one product**

Data scientists have built a churn-prediction prototype for a citizen-facing service. User researchers report front-line staff do not trust the predictions and will not use them; the lead data scientist responds that "the model's AUC is excellent — the users need training". The product is stalling.

A) Direct the service team to mandate use of the predictions, since the model is statistically sound.
B) Bring the data scientists and user researchers together to observe front-line staff using the tool, and reframe the goal as improving decisions rather than defending the model.
C) Accept the user researchers' verdict and shelve the prototype.
D) Commission an independent statistical review to confirm the AUC figure.

**Most effective: B. Least effective: A.**

**Explanation:** B embodies championing user research and collaborative working across professions — watching real usage typically reveals fixable causes neither profession sees alone. A is least effective: mandating use of a distrusted tool poisons the service relationship and invites workarounds. C capitulates without diagnosis. D answers a question nobody asked — the AUC is not in dispute. This tests locating the problem in the sociotechnical system rather than in one profession's artefact.

**Question 4 (hard) — A capability walking out of the door**

The only senior NLP specialist — technical anchor of two live products — resigns, giving four weeks' notice, for a substantially higher private sector salary. Two data scientists could eventually grow into the specialism.

A) Ask HR to explore a counter-offer while immediately starting structured knowledge transfer: the specialist pairs with the two developing data scientists for the notice period and documents the critical model pipelines.
B) Focus the specialist's final four weeks on delivering as much product work as possible, since capability development can wait until after the deadline crunch.
C) Ask the specialist to leave immediately to protect intellectual property.
D) Accept the resignation and begin external recruitment for a like-for-like replacement.

**Most effective: A. Least effective: C.**

**Explanation:** A converts the notice period into organisational capability through pairing and documentation, addressing a single-point-of-failure that arguably should never have existed. B extracts output while transferable knowledge walks out permanently. D is passive but not destructive. C is least effective: needlessly adversarial toward a colleague leaving legitimately, and it forfeits the entire knowledge-transfer window. This tests responding to attrition by strengthening the system rather than punishing the person.

**Question 5 (hard) — The pilot the evidence doesn't support**

A director-general sponsor is enthusiastic about a supplier's proposal to pilot a generative AI tool for summarising case files, and asks for an endorsement at next week's investment board. A technical review finds the supplier's accuracy claims are based on unrelated benchmark data, with no testing on the department's document types, which include legally sensitive material.

A) Endorse the pilot to maintain the sponsor's support for data science, and plan to raise concerns later if problems emerge.
B) Present the technical review at the board, recommend a small structured evaluation on departmental documents with clear success criteria before any pilot involving live casework, and offer to design it.
C) Decline to attend the board so as not to be associated with the decision either way.
D) Send the sponsor a strongly worded note stating the proposal is technically illiterate and should be rejected outright.

**Most effective: B. Least effective: C.**

**Explanation:** B neither blocks innovation nor blesses unevidenced claims — a bounded evaluation converts enthusiasm into a test the evidence can pass or fail. A repeats the oldest failure in technology governance: endorse now, object later. D is rhetorically ruinous and forecloses collaboration. C is least effective: pure abdication from the room the department's most senior data science voice exists to be in.

**Question 6 (moderate) — The data engineers' warning**

A head of data engineering warns that the pipeline feeding a most-used forecasting dashboard is "held together with duct tape" and needs a two-sprint rebuild, during which daily updates would pause. Senior leaders check the dashboard every morning and a spending review is approaching. A lead data scientist argues the rebuild can wait six months.

A) Postpone the rebuild until after the spending review; the dashboard is too visible to interrupt.
B) Agree the rebuild now, negotiate a reduced-frequency interim service (weekly snapshots with cached data), and tell senior leader users what is happening, why, and for how long.
C) Order the rebuild done in parallel with daily operations, accepting the engineering team's overtime.
D) Ask the data engineers to document the risks formally so responsibility is clear if the pipeline fails.

**Most effective: B. Least effective: D.**

**Explanation:** B takes the specialist warning seriously while managing the visibility constraint with an interim service and honest communication. A gambles the department's most-used decision tool on duct tape during the period of heaviest scrutiny. C burns out the engineering team while raising the failure risk it tries to avoid. D is least effective: documenting risk without mitigating it protects no user and signals blame allocation as the leadership priority.

**Question 7 (hard) — A colleague's conference claim**

At a cross-government event, a fellow head of profession presents a directorate's early experimental fraud-detection results as "proven at scale across government", crediting the collaboration. Delegates are visibly impressed; procurement colleagues begin asking when they can adopt it.

A) Correct the record publicly during the Q&A, making clear the results are experimental and not yet validated at scale.
B) Let the claim stand to preserve the collaboration and the profession's growing reputation.
C) Speak to the colleague privately straight after the session, agree a joint correction to circulate to attendees, and give the procurement colleagues an accurate written status when responding to them.
D) Report the misrepresentation to the colleague's permanent secretary.

**Most effective: C. Least effective: B.**

**Explanation:** C repairs the record while preserving the relationship and collaboration — a joint correction is more credible than a public contradiction. A ranks second: sometimes right, but contradicting a peer from the floor inflicts avoidable damage. D escalates before attempting resolution. B is least effective: allowing a false capability claim to propagate trades long-term trust in the profession for short-term glow.

**Question 8 (moderate) — The junior analyst's discovery**

A junior data scientist emails directly, bypassing two management layers, believing a production matching algorithm has been silently mismatching around 2% of records for months, affecting benefit correspondence. She attaches a persuasive notebook and says her team lead told her the issue was "known and accepted".

A) Forward the email to her team lead, asking them to handle it and reminding the analyst of the management chain.
B) Thank her for raising it, commission an immediate technical verification of the finding, and separately establish with the team lead what "known and accepted" meant and whether the risk acceptance was ever properly made and recorded.
C) Immediately halt the matching algorithm pending investigation.
D) Ask her to present the finding at the next monthly quality meeting in three weeks.

**Most effective: B. Least effective: A.**

**Explanation:** B verifies the substance, tests the governance claim, and protects the person who spoke up, all at once. A returns the concern to the person who allegedly dismissed it and teaches the directorate that raising risk gets you sent back down the chain. C is premature as a first move — verification should precede halting a live citizen-facing service, though it becomes right within days if confirmed. D treats a live citizen-affecting defect as an agenda item.

**Question 9 (hard) — The MVP that keeps growing**

A multidisciplinary team building a data science product for prison education planning has seen its MVP scope triple: the policy team wants extra cohort breakdowns, the supplier proposes a recommendation engine, and the data scientists want to add a causal inference module. The delivery manager privately says the launch date is now impossible but no one will say so in the steering group.

A) In the steering group, restate the user need the MVP exists to meet, ask each addition's sponsor to evidence its necessity for that need, and re-baseline the scope and date openly with the delivery manager's assessment on the table.
B) Let the scope stand but move the launch date privately with the supplier, avoiding a confrontation in the steering group.
C) Cut all three additions unilaterally and announce the original scope is restored.
D) Ask the delivery manager to raise the timeline concern themselves at the next steering group, offering support from the chair.

**Most effective: A. Least effective: B.**

**Explanation:** A defines the MVP and supports priority decisions using the discipline that makes MVPs work: every feature traces to the validated user need, and trade-offs are made transparently. D is second best but delegates the scope discipline the senior owner should lead. C wins the baseline and loses the partners. B is least effective: it changes the delivery commitment covertly and leaves the steering group governing a fiction.

**Question 10 (hard) — The cross-government data request**

A policy director asks for departmental service data to be linked with a dataset from another department to profile "households likely to need intervention". The policy aim is genuinely protective — early support for vulnerable families — but the request arrives with no legal basis identified, no DPIA, and a hoped-for turnaround of two weeks driven by a ministerial commitment.

A) Decline until every governance artefact is complete, and inform the director that the timeline is impossible.
B) Proceed with a rapid prototype on the full linked data, in parallel with the paperwork, given the protective intent.
C) Convene the information governance, legal, and ethics leads within days; scope what can be done lawfully and quickly — such as methodology design and analysis on synthetic or existing lawfully-held data — while the legal basis and DPIA for linkage are established properly.
D) Ask the other department to do the linkage instead, so the legal risk sits with them.

**Most effective: C. Least effective: B.**

**Explanation:** C refuses the false choice between blocking a protective policy and breaking data protection law, sequencing lawful preparatory work in parallel with the DPIA and legal-basis work. B is least effective: linking personal data with no legal basis is unlawful regardless of intent, and the prototype would contaminate rather than accelerate the policy. A is principled but unhelpfully binary. D is risk-shuffling dressed as delegation.

**Question 11 (moderate) — The capability budget trade-off**

Mid-year pressures force either the surrender of a £120,000 external training and conference budget, or an equivalent sum funding protected "10% time" for data scientists' development projects, which last year produced two tools now in production. Directors will accept either.

A) Surrender the external training budget, protect the 10% time, and rebuild external development through cheaper channels: cross-government communities, vendor-provided free training, and internal teach-backs.
B) Surrender the 10% time; external training is more visible and easier to restore next year.
C) Split the cut equally so neither is destroyed.
D) Ask the data scientists to vote on which to keep.

**Most effective: A. Least effective: B.**

**Explanation:** A reflects evidence-based capability leadership: the 10% time has demonstrated production-grade return and is the hardest to rebuild, while external development has cheap substitutes. B optimises for visibility over value and signals that development is a perk rather than a professional expectation. C halves two budgets into two ineffective ones. D abdicates a leadership judgement that requires information the team lacks.

**Question 12 (moderate) — The accessibility afterthought**

At a show-and-tell four weeks before public launch, a new statistics dashboard is found to rely entirely on red-green colour coding, has no keyboard navigation, and offers no text alternatives for its charts. The product manager says accessibility fixes are scheduled "for the month after launch, once the main features are stable".

A) Accept the plan; a month's delay to accessibility is minor compared with the value of launching.
B) State that the service cannot launch to the public in this state, and work with the product manager to re-plan the four weeks so the core accessibility work is done first, descoping lower-value features if needed.
C) Require the team to add an accessibility statement to the site acknowledging the limitations and committing to fixes.
D) Escalate the product manager's decision to their line manager as a performance concern.

**Most effective: B. Least effective: A.**

**Explanation:** B treats accessibility as a legal requirement and core part of meeting user needs, not a feature to schedule after "the main features". C mistakes disclosure for compliance. D converts a fixable planning error into a personnel incident. A is least effective: it accepts knowingly excluding disabled users from a public service at launch and normalises inclusion as an afterthought across every future product.

### Administration tips

- **Score for whether a candidate's response is both principled and practical** — purely principled options that ignore constraints usually rank second, not first.
- **Watch for whether a candidate identifies who owns the decision** — advising versus deciding, consulting versus delegating.
- **Note whether a candidate ranks harms** — irreversible harm to citizens and public trust over internal inconvenience, visibility, or speed.
- **Note how a candidate's chosen option treats the person who raised a concern** — cultures of ethics and quality survive on protected messengers.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding the idealistic answer over the effective one** — a blanket refusal that abandons the outcome.
- **Crediting a passive or deflecting option** — waiting, documenting risk without acting, sending the problem back down the chain, or absenting oneself from the decision.
- **Missing when a candidate escalates before attempting a direct, constructive conversation.**
- **Rewarding an option that protects visibility over value** — how things look to boards, ministers, or peers, at the expense of users or evidence.
- **Missing when a candidate answers as a technician rather than a leader** — personally redoing technical work rather than mobilising governance, relationships, and other professions.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a head of data science: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested pattern recognition, deduction, and error checking applied to model evaluations, ethics frameworks, and delivery plans. The numeric section tested the discipline of budgets, capacity, fairness ratios, and business cases. The verbal section tested the precision of must and may, True and Cannot Say, across policies, evaluations, and briefings. The situational judgement section tested the leadership judgement demanded when ministers, ethics, delivery deadlines, and a team's people pull in different directions.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, read policy and evaluation text for exactly what it establishes, and lead a data science function through delivery, ethics, and capability challenges — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
