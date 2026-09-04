# Machine Learning Engineer (Senior Machine Learning Engineer) - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior machine learning engineer, within the UK Government Digital and Data profession. The material is job-specific: it presents what a senior machine learning engineer genuinely handles — model pipelines, deployment configurations, evaluation matrices, and incident logs — and the judgements the role turns on, rather than abstract puzzles.

This document is organised into four assessment sections, each mapped directly to the role's duties and skills:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a senior machine learning engineer genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — interpreting performance metrics, capacity figures, budgets, latency tables, and drift statistics, with full worked arithmetic in every explanation.
3. **Workplace job-specific verbal reasoning assessment** — dense passages drawn from the kinds of standards, policies, service assessments, and stakeholder emails this role reads every week, followed by True / False / Cannot Say and comprehension questions.
4. **Workplace job-specific situational judgement assessment** — realistic dilemmas involving product managers, data scientists, security teams, and senior stakeholders, testing how a candidate balances delivery pressure against safety, ethics, and public sector values.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile, provides ten or more substantial items with correct answers and worked explanations for use as an answer key, and closes with administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical scenarios and data formats drawn from real work rather than abstract puzzles. Every question mimics an artefact this role genuinely handles: a model evaluation matrix, a deployment pipeline configuration, a set of retraining logs, or a prioritisation call across competing production incidents.

The typical format is an online, timed test of 15 to 30 minutes, with objective scoring against a benchmark or norm group. Modern platforms may adapt question difficulty, and employers usually receive a breakdown showing speed versus accuracy.

For a senior machine learning engineer, cognitive ability is not an abstract credential. Deciding what model is most suitable for a product, diagnosing why a retrained model regressed, spotting a subtle error in an integration build, and prioritising which of five simultaneous alerts actually threatens a live service are all cognitive tasks executed under time pressure.

### How this assessment maps to the role

The dimensions of this assessment map directly to the skills named in the role profile:

- **Pattern recognition and logical deduction** map to *applied maths, statistics and scientific practices*: recognising trends in time series, deducing which of several candidate models satisfies a set of constraints, and reasoning about optimisation trade-offs.
- **Error checking** maps to *programming and build (software engineering)*: reviewing specifications, spotting inconsistencies between a config file and its documented intent, and catching defects before they reach production.
- **Problem solving and fault diagnosis** map to *systems integration*: tracing a failure through an integration build, reasoning about dependencies between systems, and identifying which component in a pipeline is the true root cause.
- **Prioritisation under constraint** maps to the senior-level duty to check that models in live products and services stay safe, secure and effective.
- **Structured abstract reasoning** maps to *data science innovation*: seeing the general structure behind a specific problem.

### Practice questions

Present these to the candidate; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Sequence recognition in retraining schedules**

A team retrains a demand-forecasting model on a schedule driven by data volume. The last five retraining runs used training sets of the following sizes (in millions of rows): 2.0, 3.0, 4.5, 6.75, 10.125. If the pattern continues, what size will the next training set be?

A) 12.5 million rows
B) 13.5 million rows
C) 15.1875 million rows
D) 20.25 million rows

**Correct answer: C**

**Explanation:** Each term is 1.5 times the previous term; the next term is 10.125 × 1.5 = 15.1875 million rows. This tests testing a multiplicative hypothesis rather than assuming additive growth — geometric growth patterns appear constantly in capacity planning.

**Question 2 (easy) — Error checking a deployment manifest**

A junior engineer submits a deployment manifest for review. The documented intent says: "The fraud-scoring model must run with 3 replicas in production, 1 replica in staging, autoscaling capped at 6 replicas, and a memory limit of 4 GiB per replica." The manifest contains: production replicas: 3; staging replicas: 1; autoscaling maximum: 8; memory limit: 4 GiB. Which single field contradicts the documented intent?

A) Production replicas
B) Staging replicas
C) Autoscaling maximum
D) Memory limit

**Correct answer: C**

**Explanation:** The intent caps autoscaling at 6; the manifest allows 8. This tests disciplined field-by-field comparison rather than pattern-matching on what "looks right" — exactly the kind of mismatch that lets a model quietly consume double its budgeted compute.

**Question 3 (moderate) — Logical deduction in model selection**

One model must be chosen for a citizen-facing eligibility checker. Constraints: (1) if a model cannot produce explanations for individual predictions, it cannot be used for citizen-facing decisions; (2) any model used must score at least 0.85 macro F1 on the held-out test set; (3) if a model requires GPU inference, it must be deployed on the shared GPU cluster, which is unavailable until next quarter; (4) the service must launch this quarter.

- Model P: macro F1 0.91, no per-prediction explanations, CPU inference.
- Model Q: macro F1 0.87, per-prediction explanations, GPU inference required.
- Model R: macro F1 0.86, per-prediction explanations, CPU inference.
- Model S: macro F1 0.83, per-prediction explanations, CPU inference.

Which model can be used?

A) Model P
B) Model Q
C) Model R
D) Model S

**Correct answer: C**

**Explanation:** P fails constraint 1; Q's GPU requirement violates constraint 4 via constraint 3; S fails constraint 2 (0.83 < 0.85). R satisfies all four. This tests constraint satisfaction rather than metric maximisation — the highest-accuracy model is not the answer, mirroring deciding what model is most suitable, not merely most accurate.

**Question 4 (moderate) — Pipeline dependency reasoning**

A nightly training pipeline has six stages with dependencies: Ingest must finish before Validate; Validate must finish before both Feature-Build and Schema-Report; Feature-Build must finish before Train; Train must finish before Evaluate; Schema-Report has no downstream dependencies. Tonight, Validate failed. Which stages definitely did not run to completion?

A) Feature-Build, Train, Evaluate, and Schema-Report
B) Feature-Build, Train, and Evaluate only
C) All six stages
D) Schema-Report only

**Correct answer: A**

**Explanation:** Everything downstream of the failed stage is blocked, including the side branch Schema-Report. This tests tracing dependencies including branches off the main path — the core cognitive act of coordinating build activities across systems.

**Question 5 (moderate) — Spotting the anomalous metric**

Four weekly monitoring snapshots for a live classification model: Week 1 — precision 0.92, recall 0.88, daily volume 41,000; Week 2 — precision 0.91, recall 0.89, daily volume 43,500; Week 3 — precision 0.92, recall 0.88, daily volume 44,100; Week 4 — precision 0.91, recall 0.61, daily volume 43,900. Which conclusion is best supported?

A) The model's overall quality has been stable for four weeks.
B) A recall regression occurred in Week 4 while precision and volume stayed in their normal range.
C) Traffic growth caused the model to degrade.
D) Precision and recall both degraded gradually across the month.

**Correct answer: B**

**Explanation:** Recall drops abruptly in Week 4 while precision and volume stay in their normal ranges — a step change, not gradual degradation, and volume in Week 4 is essentially unchanged from Weeks 2–3, ruling out C's traffic-growth causal story. This tests isolating which signal changed and refusing causal stories the data does not support.

**Question 6 (moderate) — Prioritisation across simultaneous incidents**

At 09:00, four open items: (1) a live safeguarding-referral triage model is returning errors on 40% of requests; (2) a stakeholder wants a same-day answer about next quarter's model roadmap; (3) the nightly retraining job for an internal analytics model failed, meaning it will serve yesterday's model today; (4) a security patch for the model-serving platform is due within five working days. Which order of attention is most defensible?

A) 2, 1, 4, 3
B) 1, 3, 4, 2
C) 1, 4, 3, 2
D) 4, 1, 2, 3

**Correct answer: C**

**Explanation:** Item 1 is a live citizen-impacting failure — top priority. Item 4 is a security obligation that outranks a low-impact one-day-stale internal model (item 3). Item 2 is a same-day communication, not an operational risk. This tests impact-and-risk ordering rather than order-of-arrival.

**Question 7 (hard) — Deductive fault isolation in an integration build**

An integrated service calls a model through this chain: API Gateway → Feature Service → Model Endpoint → Response Formatter. Observations: requests sent directly to the Model Endpoint with hand-built feature vectors return correct predictions; requests through the full chain return predictions systematically wrong for exactly one input field (applicant age is always treated as 0); the Response Formatter passes its unit tests and does not touch input features; the API Gateway logs show age arriving correctly from clients. Where is the fault most likely located?

A) API Gateway
B) Feature Service
C) Model Endpoint
D) Response Formatter

**Correct answer: B**

**Explanation:** The Model Endpoint is exonerated by direct calls with correct features producing correct predictions. The Gateway is exonerated by its logs. The Response Formatter operates after prediction and does not touch features. The Feature Service is the only remaining suspect between a correct age at the Gateway and a zeroed age at inference. This tests differential diagnosis by elimination — the same reasoning behind integration testing activities.

**Question 8 (hard) — Rule-based deduction about retraining triggers**

A retraining policy: a model is retrained if population stability index (PSI) on any key feature exceeds 0.25, OR if weekly accuracy drops more than 3 percentage points below its rolling quarterly mean, provided in either case that the labelled feedback backlog contains at least 10,000 examples. No retraining may occur during the two-week pre-election period. Current facts: PSI on "applicant income" is 0.31; weekly accuracy is 1.8 points below the quarterly mean; the feedback backlog holds 14,200 labelled examples; the pre-election period begins in three weeks. Should the model be retrained now?

A) No, because accuracy has not dropped more than 3 points.
B) No, because the pre-election period is approaching.
C) Yes, because the PSI condition and the backlog condition are both satisfied and the pre-election restriction is not yet in force.
D) Cannot be determined without knowing which features are "key" features.

**Correct answer: C**

**Explanation:** The trigger is a disjunction; PSI 0.31 alone satisfies it, and the backlog condition (14,200 ≥ 10,000) is met. The prohibition applies only during the pre-election period, which has not started. This tests parsing nested logical structure (OR, AND, temporal condition) correctly — precisely the skill behind encoding business rules into pipeline automation.

**Question 9 (hard) — Pattern recognition in error distributions**

A named-entity model in a casework system shows six-week error patterns: scanned paper documents 4%, 4%, 5%, 9%, 15%, 22%; born-digital documents 3%, 3%, 3%, 3%, 4%, 3%. Which hypothesis best fits the pattern and should be investigated first?

A) The model is degrading uniformly and needs immediate retraining on all data.
B) Something in the upstream scanning or OCR process changed around week 4, degrading inputs for scanned documents only.
C) Casework staff have started mislabelling errors.
D) Born-digital documents have become easier to process.

**Correct answer: B**

**Explanation:** One channel degrades sharply and progressively while the other stays flat — a channel-specific, time-localised signature pointing upstream of the model. This tests the senior-level habit of checking whether the model is even the thing that changed before retraining — protecting against baking a corrupted-input fault into the model.

**Question 10 (moderate) — Specification consistency check**

A specification states: "The recommendation model shall return at most 5 results per query. Results shall be ordered by descending relevance score. Results with a relevance score below 0.2 shall be excluded. If fewer than 3 results remain after exclusion, the service shall display a 'no strong matches' banner alongside any remaining results." A test report claims all four behaviours pass, with this observed output for one query: 6 results returned, scores 0.91, 0.84, 0.77, 0.61, 0.44, 0.18, in that order, no banner shown. How many of the four specified behaviours does this observed output actually violate?

A) One
B) Two
C) Three
D) Four

**Correct answer: B**

**Explanation:** Rule 1 (at most 5) violated (6 returned); Rule 2 (descending order) satisfied; Rule 3 (exclude below 0.2) violated (0.18 included); Rule 4 (banner rule) is not violated because after correct exclusion 5 results remain, so no banner is required. This tests precise specification-versus-behaviour comparison without double-counting the 0.18 result's two effects as three failures.

**Question 11 (hard) — Prioritising an investigation tree**

A model serving citizen benefit estimates shows a 12% increase in complaint escalations. Four hypotheses, each taking half a day: (H1) a feature pipeline schema change last Tuesday; (H2) seasonal change in applicant mix; (H3) a serving-infrastructure timeout causing fallback to a simpler model; (H4) a front-end change that displays estimates differently. Monitoring shows: model prediction distributions are unchanged; serving latency and fallback rates are normal; the complaint increase began the same day as a front-end release. Which hypothesis should be investigated first?

A) H1
B) H2
C) H3
D) H4

**Correct answer: D**

**Explanation:** Unchanged prediction distributions argue against H1 and H2; normal fallback rates argue against H3; the complaint increase's temporal alignment with the front-end release supports H4, and it is cheapest to confirm. This tests ordering investigations by evidence fit rather than by proximity to one's own specialism.

**Question 12 (moderate) — Working-memory and rule application**

An access-control policy for model artefacts: production model weights may be downloaded only by engineers with role "ML-Prod" AND an active incident ticket, OR by the service owner with written approval from the security lead. Four requests: (1) an ML-Prod engineer with an active incident ticket; (2) an ML-Prod engineer with no ticket; (3) the service owner with security-lead approval; (4) a data scientist with an active incident ticket. How many requests should be granted?

A) One
B) Two
C) Three
D) Four

**Correct answer: B**

**Explanation:** Requests 1 and 3 each satisfy their respective clause; requests 2 and 4 do not. The structure is (A AND B) OR (C AND D); the common error is treating the ticket alone as sufficient. This tests correctly applying compound access rules — part of keeping models secure in live services.

**Question 13 (hard) — Abstract reasoning about optimisation trade-offs**

A model is being tuned where each unit of additional training compute improves accuracy with diminishing returns, and each accuracy point above 90% halves the volume of cases needing manual review. Manual review capacity is fixed. The model is currently at 92% accuracy, and the review queue is at 80% of capacity, growing 5% per month due to rising demand. Training compute budget can buy either: (X) one accuracy point now, or (Y) infrastructure that permanently reduces per-case review time by 10%. Which reasoning is soundest?

A) Choose X, because accuracy improvements compound while process improvements do not.
B) Choose Y, because accuracy gains at 92% are marginal while demand growth is a persistent pressure on a fixed-capacity process.
C) Choose X, because halving review volume (one point above 90% doubles the halving) immediately clears the queue for good.
D) Neither helps, because demand growth will exhaust any fixed gain.

**Correct answer: B**

**Explanation:** X buys a one-off reduction subject to diminishing returns; Y raises throughput capacity permanently against a persistently growing demand curve. This tests matching a persistent pressure with a persistent remedy — a common senior decision about whether to spend effort on the model or on the system around it.

**Question 14 (moderate) — Deduction from monitoring alerts**

Three alerting rules protect a live model: Rule A fires if p95 latency exceeds 800 ms for 5 consecutive minutes; Rule B fires if the error rate exceeds 2% over any 10-minute window; Rule C fires if prediction volume falls below 50% of the same hour last week. This morning, Rule C fired but Rules A and B did not. Which situation is consistent with exactly this alert pattern?

A) The model endpoint crashed and is returning HTTP 500 errors to all callers.
B) An upstream service stopped sending requests to the model, while the requests that do arrive are served normally.
C) The model is timing out on most requests due to a memory leak.
D) A traffic surge has overloaded the endpoint.

**Correct answer: B**

**Explanation:** A crashed endpoint would fire Rule B; widespread timeouts would fire Rule A; a traffic surge would raise, not drop, volume. Only B fits: requests dry up at the source (firing Rule C) while surviving requests remain healthy (Rules A and B stay quiet). This tests reasoning about what an alert's silence tells you, not just what a firing alert says — essential when the most dangerous production failures are upstream of the model and invisible to model-centric metrics.

### Administration tips

- **Score for whether a candidate reads constraints before options**, eliminating violations first rather than judging holistically.
- **Watch for whether a candidate reasons about what evidence exonerates each suspect** in a fault-diagnosis item, rather than anchoring on one hypothesis.
- **Note whether a candidate distinguishes the highest-performing option from the compliant one** in a constraint-satisfaction item.
- **Note whether a candidate accounts for a side branch** in a dependency-tracing item.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from experience instead of the stated evidence** — assuming the usual cause rather than checking the given evidence.
- **Crediting the highest-performing option over the compliant one.**
- **Missing when a candidate forgets a side branch** in a dependency question.
- **Missing when a candidate gets anchored on one hypothesis** in a fault-diagnosis item without stating what would exonerate each suspect.
- **Missing when a candidate skims a qualifier** — "definitely", "at most", "only", "provided that" — that carries the logical weight of the question.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data presented in the formats this role really uses. It focuses on applied business mathematics — percentages, ratios, rates, cost comparisons, and capacity calculations. Question inputs are tables, dashboards, budgets, and schedules rather than equations.

Typical characteristics: a strict time limit (often around a minute per question), an onscreen calculator allowed or provided, and scoring that prioritises accurate interpretation over mental-arithmetic gymnastics.

For a senior machine learning engineer, numbers are the medium of the job: evaluating models with precision, recall, and F1; planning GPU capacity and inference costs; setting drift thresholds; comparing latency percentiles; justifying infrastructure spend to product teams.

### How this assessment maps to the role

- **Statistical interpretation** maps to *applied maths, statistics and scientific practices*: reading confusion matrices, computing rates and proportions, interpreting time series changes, and reasoning about sampling.
- **Cost, capacity and optimisation arithmetic** maps to deploying and scaling models and helping product teams evaluate and choose appropriate solutions.
- **Performance-metric fluency** maps to testing and assuring models against performance requirements.
- **Data quality quantification** maps to *data ethics and privacy* and *data science innovation*.
- **Translating numbers for stakeholders** maps to *communicating between the technical and non-technical*.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage change in inference cost**

A model's monthly inference cost was £8,400 in June. In July, after optimising the serving container, the cost fell to £6,720. What was the percentage reduction?

A) 15%
B) 20%
C) 25%
D) 30%

**Correct answer: B**

**Explanation:** Reduction ÷ original = 1,680 ÷ 8,400 = 20%. This tests measuring against the original value; dividing by the new value (6,720) gives the wrong distractor, 25%.

**Question 2 (easy) — Throughput and capacity**

A model endpoint handles 250 requests per second per replica. The service must support a peak of 4,200 requests per second, with at least 20% headroom above peak. What is the minimum number of replicas required?

A) 17
B) 20
C) 21
D) 24

**Correct answer: C**

**Explanation:** Required capacity = 4,200 × 1.20 = 5,040; replicas = 5,040 ÷ 250 = 20.16, rounding up to 21. This tests applying headroom before dividing and rounding up afterwards for a whole-unit requirement.

**Question 3 (moderate) — Confusion matrix arithmetic**

A fraud-detection model was evaluated on 10,000 transactions, of which 400 were actually fraudulent. The model flagged 500 as fraud, of which 320 were genuinely fraudulent. What are the model's precision and recall for the fraud class?

A) Precision 64%, recall 80%
B) Precision 80%, recall 64%
C) Precision 80%, recall 80%
D) Precision 64%, recall 64%

**Correct answer: A**

**Explanation:** Precision = 320 ÷ 500 = 64%. Recall = 320 ÷ 400 = 80%. This tests keeping precision (out of what was flagged) and recall (out of what was real) straight — the single most common metric error under time pressure.

**Question 4 (moderate) — Comparing model options on cost per correct prediction**

Two candidate models for a document-classification service processing 2,000,000 documents per month. Model A: accuracy 94%, inference cost £0.0008 per document. Model B: accuracy 97%, inference cost £0.0014 per document. What is the monthly cost per correctly classified document for each model, to four decimal places of a penny?

A) Model A £0.00085, Model B £0.00144
B) Model A £0.00080, Model B £0.00140
C) Model A £0.00094, Model B £0.00097
D) Model A £0.00085, Model B £0.00136

**Correct answer: A**

**Explanation:** A: £1,600 ÷ 1,880,000 ≈ £0.00085; B: £2,800 ÷ 1,940,000 ≈ £0.00144. This tests adjusting per-document cost for accuracy rather than quoting the raw figure, and, for a strong candidate's answer, noting that Model B's accuracy gain costs roughly 70% more per correct answer — decision-relevant to helping a product team choose a solution.

**Question 5 (moderate) — Percentage points versus percentages**

Weekly accuracy was reported as falling "from 92% to 88%". A stakeholder writes that "accuracy fell by 4%". What is the accurate description?

A) Accuracy fell by 4 percentage points, which is a relative fall of about 4.3%.
B) Accuracy fell by 4 percentage points, which is a relative fall of exactly 4%.
C) Accuracy fell by 4.3 percentage points, which is a relative fall of 4%.
D) The stakeholder's statement is fully accurate.

**Correct answer: A**

**Explanation:** Absolute change = 4 points; relative change = 4 ÷ 92 ≈ 4.3%. This tests distinguishing percentage points from percentages when communicating with a non-technical audience.

**Question 6 (moderate) — GPU training budget**

Retraining a ranking model takes 18 hours on a node costing £4.20 per hour, weekly. A reserved-capacity deal offers £220 per month flat, but retraining takes 20 hours due to shared contention. Assume 4.33 retraining runs per month on average. Which option is cheaper per month, and by roughly how much?

A) Pay-as-you-go, by about £55
B) Reserved capacity, by about £107
C) Reserved capacity, by about £55
D) They cost about the same

**Correct answer: B**

**Explanation:** Pay-as-you-go ≈ £327.35; reserved = £220 flat; saving ≈ £107. This tests recognising that the flat reserved price is unaffected by the longer runtime, and answering the cost question actually asked.

**Question 7 (hard) — Drift threshold and sample proportions**

Monitoring compares high-risk prediction proportions week over week. Last week: 1,840 high-risk of 46,000 predictions. This week: 2,310 of 42,000. An alerting rule fires if the high-risk rate rises by more than 30% relative to the previous week. Does the alert fire?

A) No — the rate rose by 25.6%
B) No — the rate rose by 30% exactly
C) Yes — the rate rose by 37.5%
D) Yes — the rate rose by 47.0%

**Correct answer: C**

**Explanation:** Last week's rate = 4.0%; this week's = 5.5%; relative increase = 37.5%, exceeding 30%. This tests distinguishing a rate change from a raw count change (25.6%) when the denominator itself changes — exactly the kind of subtle numerical error that causes teams to miss genuine drift.

**Question 8 (hard) — Latency percentiles and SLA compliance**

An SLA requires p95 latency under 500 ms. This week's latency distribution: 88% under 300 ms; 7% between 300 and 500 ms; 4% between 500 and 900 ms; 1% above 900 ms. Is the SLA met, and what is the strongest correct statement?

A) Yes — 95% of requests complete under 500 ms, so p95 is at most 500 ms.
B) No — 5% of requests exceed 500 ms, so p95 is above 500 ms.
C) Yes — average latency is clearly under 500 ms.
D) Cannot be determined from percentile bands.

**Correct answer: A**

**Explanation:** 88% + 7% = 95% complete under 500 ms, so p95 ≤ 500 ms. This tests understanding exactly what a percentile asserts — essential to testing and assuring models against performance requirements, and rejecting the irrelevant appeal to the mean in option C.

**Question 9 (hard) — Fairness disparity arithmetic**

An eligibility-triage model's monthly audit: under-35 applicants — 6,300 approvals from 9,000 applications; over-35 applicants — 4,560 approvals from 7,600 applications. The "four-fifths" screening rule requires the lower group rate to be at least 80% of the higher group rate. What is the ratio, and does it pass the screen?

A) 0.86 — passes
B) 0.79 — fails
C) 0.83 — passes
D) 0.75 — fails

**Correct answer: A**

**Explanation:** Under-35 rate 70%, over-35 rate 60%; ratio = 60 ÷ 70 ≈ 0.86, passing. This tests computing a rate ratio correctly rather than dividing raw counts, and, for a strong candidate's answer, noting that passing a screen is not the end of an ethics review — a 10-point gap may still warrant investigation of causes.

**Question 10 (moderate) — Weighted evaluation score**

Candidate models are scored on three criteria with fixed weights: accuracy (0.5), latency (0.3), maintainability (0.2), each out of 100. Model X: accuracy 90, latency 60, maintainability 80. Model Y: accuracy 82, latency 85, maintainability 85. Which model wins, and by how many weighted points?

A) Model X wins by 2.5
B) Model Y wins by 4.5
C) Model Y wins by 2.5
D) Model X wins by 4.5

**Correct answer: B**

**Explanation:** X = 79; Y = 83.5; Y wins by 4.5. This tests writing the weight beside each score before multiplying and verifying weights sum to 1.0 — the arithmetic behind helping a product team evaluate and choose an appropriate solution.

**Question 11 (moderate) — Sampling for a labelling budget**

A stratified evaluation set of 2,400 labelled cases matches live traffic: 55% English, 30% Welsh, 15% other. Labelling costs £0.85 (English), £1.40 (Welsh), £2.10 (other) per document. What is the total labelling cost?

A) £2,886
B) £2,880
C) £2,517
D) £3,024

**Correct answer: A**

**Explanation:** English £1,122 + Welsh £1,008 + other £756 = £2,886. This tests careful stratified-cost calculation and re-adding subtotals in a different order to catch transposition errors — a technique used when building evaluation sets that reflect live traffic.

**Question 12 (hard) — Compound growth in request volume**

A newly launched service sends a model 120,000 requests per month, growing at 15% per month compound. Current infrastructure serves 200,000 requests per month. After how many complete months will demand first exceed capacity?

A) 3 months
B) 4 months
C) 5 months
D) 6 months

**Correct answer: B**

**Explanation:** Compounding month by month: 138,000 → 158,700 → 182,505 → 209,881 — exceeding 200,000 after 4 months. This tests recognising that compound growth crosses a threshold earlier than a linear estimate suggests — planning deployment capacity ahead of demand.

**Question 13 (moderate) — Interpreting an A/B test summary for stakeholders**

An A/B test: control task-completion 68.0% (n=24,000), variant 70.4% (n=24,000), statistically significant. A product manager asks how many more people benefit per 100,000 sessions. What is the best plain-figure answer?

A) About 240 more completions per 100,000 sessions
B) About 2,400 more completions per 100,000 sessions
C) About 24,000 more completions per 100,000 sessions
D) About 3.5% more completions per 100,000 sessions

**Correct answer: B**

**Explanation:** 2.4 percentage points × 100,000 = 2,400. This tests converting a rate into a human-scale count — a valuable translation move for a non-specialist audience, who decide on people, not percentage points.

**Question 14 (hard) — Storage and retention arithmetic**

A feature store writes 3.2 GB of feature data per day. Raw features must be deleted after 90 days; aggregated features (5% of raw size) are kept for 3 years. What is the approximate steady-state storage requirement?

A) 288 GB
B) 463 GB
C) 175 GB
D) 512 GB

**Correct answer: B**

**Explanation:** Raw steady-state = 3.2 × 90 = 288 GB; aggregated = 0.16 × 1,095 ≈ 175 GB; total ≈ 463 GB. This tests combining a rolling-window calculation with a long-retention calculation — where a privacy retention rule directly drives an infrastructure planning figure.

### Administration tips

- **Score for whether a candidate converts between counts, rates, percentage points, and relative percentages** fluently.
- **Watch for whether a candidate estimates before computing precisely**, catching gross errors early.
- **Note whether a candidate rounds physical/whole-unit quantities up** while keeping financial precision.
- **Note whether a candidate re-checks a multi-line total by re-adding in a different order.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads a scale qualifier** — "in thousands", "per replica", "per month".
- **Crediting an answer that compares counts when the question is about rates**, or vice versa, when a denominator changes.
- **Missing when a candidate uses the wrong base for a percentage change.**
- **Rewarding over-calculation** where estimation and elimination would settle the answer.
- **Missing when a candidate rounds a whole-unit requirement down** instead of up.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. For a senior machine learning engineer, the material is model documentation, evaluation reports, data sharing agreements, ethics and privacy guidance, and the research papers and vendor claims assessed when deciding what model is suitable.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means it settles neither — regardless of outside knowledge.

Technical expertise is the principal hazard here, and it is a sharper hazard in machine learning than in most fields, because the discipline is full of claims that sound like results.

Three specifics matter particularly. First, evaluation claims are scoped by dataset, metric and population; a figure established on one test set says nothing about another. Second, data sharing and privacy documents define permitted purposes narrowly, and a permission for one purpose does not extend to training a model on it. Third, "no evidence of X" combined with limited ability to detect X never establishes that X did not occur — a pattern common in fairness and bias reporting.

### How this assessment maps to the role

- **Reading evaluation reports precisely** maps to testing and assuring models to ensure they meet performance requirements.
- **Reading model documentation** maps to deciding what model is most suitable for use.
- **Reading data agreements** maps to **Data ethics and privacy**.
- **Reading integration documentation** maps to **Systems integration**.
- **Reading statistical claims** maps to **Applied maths, statistics and scientific practices**.
- **Communicating precisely** maps to **Communicating between the technical and non-technical**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

*Passage A — for Questions 1 to 4*

"The model was evaluated on a held-out test set of 12,000 records drawn from the same collection period as the training data. Accuracy was 91.4%, and the area under the receiver operating characteristic curve was 0.88. Performance was reported separately for four age bands; the widest gap between bands was 6 percentage points in accuracy. The evaluation did not include records from the two regions onboarded after the collection period. No assessment of performance by ethnicity was carried out, as the field is not collected. The model is intended for use across all regions."

**Question 1 (easy)**

Statement: The model achieved 91.4% accuracy on the held-out test set.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, scoped precisely to the held-out test set. This tests locating a directly stated figure and noticing the scope qualifiers around it.

**Question 2 (moderate)**

Statement: The model will achieve approximately 91% accuracy in the two regions onboarded after the collection period.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Those regions were excluded from evaluation; untested is not the same as equivalent or worse. This tests recognising that the passage establishes a gap rather than what fills it.

**Question 3 (moderate)**

Statement: The model performs equitably across ethnic groups.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** "No assessment ... was carried out" establishes the absence of an assessment, not the absence of a disparity. This tests the single most consequential reading error in machine learning documentation: an unassessed dimension is not a clean one.

**Question 4 (harder)**

Statement: The evaluation shows the model performs consistently across age bands.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The 6-point gap is a reported number, not an interpretation; whether it counts as consistent depends on use and is not stated. This tests distinguishing a reported number from a verdict about it.

*Passage B — for Questions 5 to 8*

"The data sharing agreement permits the recipient to process the shared dataset for the purpose of evaluating eligibility for the named scheme. Processing for any other purpose requires the written agreement of the data controller. The recipient may retain the dataset for the duration of the scheme and for twelve months afterwards, after which it must be deleted and deletion confirmed in writing. The recipient may create derived datasets where those datasets do not permit re-identification of individuals. Derived datasets are subject to the same retention terms. The agreement does not permit onward sharing with third parties."

**Question 5 (easy)**

Statement: The recipient may process the dataset to evaluate eligibility for the named scheme.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly as the permitted purpose. This tests locating a directly stated permission and noticing how tightly it is drawn.

**Question 6 (moderate)**

Statement: The recipient may train a machine learning model on the dataset without further permission.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Whether training a model falls within the permitted purpose depends on what the model is for, which the passage does not state. This tests recognising a genuine ambiguity that should be resolved with the data controller rather than by a candidate's own preferred reading.

**Question 7 (moderate)**

Statement: A derived dataset that cannot be used to re-identify individuals may be retained indefinitely.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "Derived datasets are subject to the same retention terms" directly contradicts indefinite retention. This tests not conflating a condition on creating a derived dataset with a release from a separate retention obligation.

**Question 8 (harder)**

Statement: The recipient may share a derived dataset with a supplier processing data on the recipient's behalf.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Whether a processor acting under instruction counts as a "third party" is not addressed. This tests recognising a genuinely unresolved question rather than relying on a preferred data-protection convention.

*Passage C — for Questions 9 to 12*

"A monitoring review of the deployed model covered the six months since launch. Predicted-versus-actual calibration remained within tolerance for the first four months and drifted in months five and six. The review found no evidence of degradation in performance for any monitored subgroup, noting that subgroup sample sizes in monthly monitoring are small. Input feature distributions shifted for two of eleven features. The review recommends retraining. The review did not examine whether the drift affected decisions made by the caseworkers who use the model's output."

**Question 9 (moderate)**

Statement: The model's performance did not degrade for any monitored subgroup.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** "No evidence" plus explicitly small samples means undetermined, not ruled out. This tests the standing trap in fairness monitoring — the passage's own caveat is the clue.

**Question 10 (moderate)**

Statement: The distribution shift in two features caused the calibration drift.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Both facts are reported; no causal link is asserted. This tests treating a plausible explanation as a good prior for investigation, not as an established finding.

**Question 11 (moderate)**

Statement: The drift affected the decisions caseworkers made.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The review explicitly "did not examine" this. This tests recognising when the actually important question has been left unanswered by a review that recommends a technical remedy anyway.

**Question 12 (harder)**

Statement: Retraining the model will restore calibration.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** A recommendation is not a predicted outcome, and the cause of drift was never determined. This tests recognising that treating a recommended action as an established remedy is a specific and common overreach.

### Administration tips

- **Score for whether a candidate checks the scope of an evaluation figure** — dataset, population, period.
- **Watch for whether a candidate reads "no assessment was carried out" as absence of evidence**, not as a clean result.
- **Note whether a candidate reads "no evidence of X" plus low statistical power as undetermined**, never as absence.
- **Note whether a candidate distinguishes a reported number from an interpretation of it.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats an unassessed dimension as a clean one.**
- **Crediting an answer that generalises a test-set figure to an untested population.**
- **Missing when a candidate assumes anonymised derivatives escape retention terms.**
- **Missing when a candidate resolves an ambiguous data permission by their own preferred reading.**
- **Rewarding an answer that treats a recommended remedy as a known fix.**

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks a candidate to identify effective and ineffective responses. For a senior machine learning engineer the scenarios involve deciding whether a model is fit to deploy, maintaining models already live, working with people who cannot evaluate what they are told, and raising ethical and privacy concerns that are inconvenient.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners in comparable roles.

Three patterns run through the strong answers. First, a model in production is a system rather than a result: the research question is answered once, but the engineering questions — what happens when the input distribution shifts, who notices, what the fallback is — are answered continuously. Second, a senior machine learning engineer is usually the only person in the room who can evaluate what they are saying, creating an obligation to make reasoning legible, including its uncertainty. Third, ethical and privacy concerns are cheapest to raise early and hardest to raise late, and this role is frequently best placed to see them.

### How this assessment maps to the role

- **Deployment judgement** maps to deploying, testing and assuring models against performance requirements.
- **Model maintenance** maps to checking that live models stay safe, secure and effective.
- **Model selection** maps to deciding what model is most suitable.
- **Communicating uncertainty** maps to **Communicating between the technical and non-technical**.
- **Ethical judgement** maps to **Data ethics and privacy**.
- **Integration** maps to **Systems integration** and working with others.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A model that evaluates well**

A model performs strongly on the held-out test set and a product manager asks to deploy it. What is the most effective response?

- A) Deploy it; the evaluation is strong.
- B) Answer the questions the evaluation cannot — how live traffic will differ from the training data, what happens when it drifts, what the fallback is if the model is unavailable, and how a bad prediction gets noticed — because a strong test result shows the model can work, not that the system around it will.
- C) Run further offline evaluation.
- D) Deploy it behind a flag.

**Correct answer: B. Least effective: A.**

**Explanation:** Offline evaluation is silent on the four production questions in B, each of which has caused failures in models that evaluated beautifully. A flag (D) limits exposure without telling anyone what they are exposed to. This tests recognising that a research result is not a production decision.

**Question 2 (easy) — Explaining a model to a non-technical stakeholder**

A service manager asks how confident they can be in the model's predictions. What is the most effective response?

- A) Give the accuracy figure.
- B) Give the figure with what it means for their decisions — how often the model is wrong, in which direction, and what happens to a person when it is — because an accuracy percentage tells a non-specialist nothing actionable, and the errors are what they need to plan for.
- C) Explain that no model is perfect.
- D) Give the accuracy and the area under the curve.

**Correct answer: B. Least effective: C.**

**Explanation:** B translates a technical figure into decision-relevant terms; the direction of error matters most. C is least effective: true, uninformative, and reads as evasion. This tests translating an accuracy figure into what a non-specialist can act on.

**Question 3 (moderate) — Drift in a live model**

Monitoring shows a live model's calibration has drifted over two months. Nobody has reported a problem. What is the most effective response?

- A) Retrain on recent data.
- B) Establish what is driving the drift and whether it is affecting decisions — a shifted input distribution, a change in upstream recording, or a feedback effect from the model's own deployment all look similar and need different responses, and "nobody has noticed" may mean no impact or a diffuse one.
- C) Alert the service team that the model is failing.
- D) Roll back to the previous model version.

**Correct answer: B. Least effective: D.**

**Explanation:** Retraining before diagnosis risks baking in an upstream error. D moves further from the current distribution rather than closer. This tests diagnosing the cause of drift before acting.

**Question 4 (moderate) — A simpler model performs nearly as well**

A logistic regression achieves 89% accuracy where a gradient-boosted model achieves 91%. What is the most effective analysis?

- A) Use the more accurate model.
- B) Weigh the two points against what the simpler model buys — explainability to caseworkers and to people affected by decisions, faster inference, easier debugging, and a lower maintenance burden — because in a public service those often outweigh two percentage points, and the role names deciding what model is most suitable rather than most accurate.
- C) Use the simpler model; explainability matters most.
- D) Ensemble the two.

**Correct answer: B. Least effective: D.**

**Explanation:** D adds the complexity of both models and the explainability of neither. C asserts a priority rather than weighing it. This tests framing the decision as suitability rather than accuracy.

**Question 5 (moderate) — An integration constraint**

The team integrating a model reports that its inference time is too slow for the transaction it sits in. What is the most effective response?

- A) Ask them to increase the timeout.
- B) Establish the actual budget available and work within it — through a smaller model, feature reduction, caching, or moving inference off the synchronous path — because an inference budget is a design constraint on model selection, not an obstacle to be negotiated away after the model is built.
- C) Optimise the model's implementation.
- D) Explain that the model needs the time it needs.

**Correct answer: B. Least effective: D.**

**Explanation:** D asserts an immovable constraint on a boundary that is genuinely movable and puts the problem entirely on the other team. C is a useful step within B but may not close a large gap alone. This tests treating latency as a design constraint on model selection.

**Question 6 (moderate) — A fairness concern raised late**

Days before deployment, a colleague suggests the model may perform worse for a particular group. What is the most effective response?

- A) Deploy and monitor for the issue.
- B) Test it before deploying, because the question is answerable with data already available and the answer changes what should happen — and if the concern holds, deploying a model with known differential performance in a public service is a decision that must be made explicitly by someone accountable.
- C) Delay the deployment until it is resolved.
- D) Note the concern in the model documentation.

**Correct answer: B. Least effective: D.**

**Explanation:** The concern is empirically checkable within hours. D records a concern that could have been resolved and deploys anyway. This tests converting an uncomfortable question into a fact before deciding.

**Question 7 (harder) — Pressure to over-claim**

A senior stakeholder wants to describe the model publicly as "95% accurate". The figure is from a balanced test set; the live class distribution is heavily skewed, making the number misleading. What is the most effective response?

- A) Allow it; the figure is technically correct.
- B) Explain concretely why it will mislead — on live data with this distribution a trivial baseline would score similarly, so the figure says nothing about the model's value — and offer a claim that is both true and stronger, such as what the model does better than the process it replaces.
- C) Refuse to allow the claim.
- D) Suggest adding a caveat about the test set.

**Correct answer: B. Least effective: A.**

**Explanation:** B supplies a replacement claim, which is what stops the conversation becoming a refusal. A is least effective: a misleading figure in public communication attracts scrutiny later. This tests offering a strong true alternative rather than defending or merely blocking a misleading one.

**Question 8 (harder) — A model inherited with no documentation**

A model in production is inherited with no documentation of how it was evaluated. What is the most effective response?

- A) Re-evaluate it from scratch on current data.
- B) Establish what it is being used for and what would happen if it were wrong, and let that determine how much assurance is needed — a model ranking internal search results needs far less than one contributing to a decision about a person — because "no documentation" is a risk whose size depends entirely on the use.
- C) Withdraw it until it can be assured.
- D) Document what can be reconstructed.

**Correct answer: B. Least effective: C.**

**Explanation:** C removes a working production model on the basis of missing paperwork rather than a demonstrated fault. This tests proportioning the response to the consequence of the model being wrong.

**Question 9 (harder) — A colleague's evaluation has a flaw**

Reviewing a colleague's work reveals their test set overlaps with their training data. They are more senior. What is the most effective response?

- A) Raise it directly, describing the overlap specifically and what it means for the reported figure.
- B) Approve it and mention the concern informally.
- C) Ask a third person to check whether the finding is right.
- D) Re-run the evaluation and present the corrected figures.

**Correct answer: A. Least effective: B.**

**Explanation:** Train-test contamination invalidates the reported performance factually, regardless of seniority. B lets an invalid figure circulate with no record. This tests raising a factual finding directly rather than diluting it into an informal aside.

**Question 10 (harder) — Monitoring nobody asked for**

A candidate wants to add monitoring for subgroup performance on a live model. Nobody has requested it and there is no allocated time. What is the most effective response?

- A) Add it gradually alongside other work.
- B) Make the case with the specific risk — what could go undetected, for whom, and for how long — and put it to whoever owns the service as a prioritisation decision, because this competes for the same time as everything else and needs to be chosen rather than smuggled in.
- C) Raise it at a retrospective.
- D) Add a ticket to the backlog.

**Correct answer: B. Least effective: A.**

**Explanation:** A makes both the sanctioned and unsanctioned work slower and is invisible if it succeeds. This tests putting a risk-based case to the person who owns the prioritisation decision.

**Question 11 (harder) — A request that pushes a data boundary**

A product team asks for a model to be trained on a dataset whose sharing agreement permits use for a different purpose. What is the most effective response?

- A) Say the agreement does not cover it and stop there.
- B) Say the position clearly and get it resolved properly — either written agreement from the data controller, or a different dataset — because the boundary is not to be interpreted away, and a written permission takes days while an unpermitted use discovered later is a serious matter.
- C) Train the model; the purposes are related.
- D) Ask the product team to check with legal.

**Correct answer: B. Least effective: C.**

**Explanation:** C interprets a purpose limitation generously on personal judgement — exactly the decision that is not the candidate's to make. This tests holding a data boundary while supplying the route through it.

**Question 12 (harder) — A candidate's own model is underperforming**

A model built and championed by the candidate is performing worse in production than the rules-based process it replaced. What is the most effective response?

- A) Raise it, with the comparison, and propose how to establish whether the model can be improved or should be withdrawn.
- B) Investigate quietly and act if it holds up.
- C) Note it alongside the model's other benefits.
- D) Retrain and see whether performance recovers.

**Correct answer: A. Least effective: C.**

**Explanation:** The candidate is best placed to see it and least suspected of motivated reasoning if they raise it themselves. C changes the subject and discounts everything said afterwards once noticed. This tests raising a problem with one's own model rather than letting someone else discover it.

### Administration tips

- **Score for whether a candidate's response asks what an offline evaluation cannot tell you** before treating it as a deployment decision.
- **Watch for whether a candidate translates a technical figure into how often, in which direction, and what happens to a person.**
- **Note whether a candidate diagnoses the cause of drift before retraining.**
- **Note whether a candidate tests an uncomfortable concern rather than documenting it and proceeding.**
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats a strong test result as a deployment decision.**
- **Crediting an answer that responds to a confidence question with a bare accuracy figure.**
- **Missing when a candidate retrains before diagnosing drift.**
- **Missing when a candidate allows a technically correct but misleading public claim to stand unchallenged.**
- **Missing when a candidate interprets a data purpose limitation generously** rather than resolving the ambiguity properly.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior machine learning engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested reasoning under the particular uncertainty this role carries — models whose behaviour is learned rather than specified, evaluated on data that is never quite the data they will meet — with a recurring discipline of asking what a result does not establish. The numeric section tested the arithmetic that separates a real effect from an artefact: base rates, class imbalance, the difference between a metric moving and a decision changing, and scale qualifiers that quietly multiply an answer by a thousand. The verbal section tested reading evaluation and governance prose exactly — an unassessed dimension is not a clean one, "no evidence of degradation" plus small samples is undetermined, and a recommendation is not a predicted outcome. The situational judgement section tested what makes this role distinctive: translating technical figures into terms that can be acted on, testing the uncomfortable question rather than recording it, holding a data boundary while supplying the route through it, and raising a problem with one's own model before anyone else could.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely about models and systems under uncertainty, read evaluation and governance documents for exactly what they establish, and raise inconvenient findings — including about their own work — before anyone else has to — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
