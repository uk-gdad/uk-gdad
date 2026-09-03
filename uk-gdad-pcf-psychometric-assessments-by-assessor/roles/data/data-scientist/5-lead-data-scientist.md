# Data Scientist (Lead Data Scientist) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead data scientist, within the UK Government Digital and Data profession. The material is job-specific: it presents what a lead data scientist genuinely handles — model pipelines, code review findings, experiment designs, and data quality reports — and the judgements the role turns on, rather than abstract puzzles. Because this is a leadership role, the material assumes professional maturity: scenarios involve directing teams, challenging delivery plans, navigating ministerial and departmental pressures, and championing data science across an organisation.

This document is organised into four substantial sections, each covering one assessment type:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a lead data scientist genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — interpreting tables, percentages, ratios, budgets, capacity figures, and model performance metrics under time pressure.
3. **Workplace job-specific verbal reasoning assessment** — drawing precise conclusions from dense written material such as data ethics frameworks, service standards, governance papers, and stakeholder correspondence.
4. **Workplace job-specific situational judgement assessment** — choosing effective courses of action in realistic leadership dilemmas involving a team, senior stakeholders, and the public interest.

Each section explains what the assessment measures, maps its dimensions to the specific skills in the role profile, provides a bank of realistic items with fully worked explanations for use as an answer key, and closes with administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the core mental processes that underpin high performance in this role: pattern recognition, logical deduction, error checking, prioritisation, and structured problem solving. A job-specific version is built from the everyday materials of the role: model evaluation outputs, data pipeline diagrams, code review notes, experiment designs, capability matrices, and delivery plans, all set in a UK government context.

Typical format: 15 to 30 minutes, delivered online, with multiple-choice questions of graded difficulty. Some platforms are adaptive. Scoring is objective and usually benchmarked against a norm group of comparable professionals, with a breakdown of speed versus accuracy often more informative than a single score.

Cognitive assessment matters at this level for a particular reason: decisions here have a multiplier effect. Spotting a flaw in an experiment design saves an entire team weeks of wasted effort. Failing to notice a data leakage problem can let a flawed model inform a policy decision affecting millions of citizens.

### How this assessment maps to the role

Mapped against the lead data scientist skill set:

- **Applied maths, statistics and scientific practices** — logical deduction questions test the ability to critique statistical analyses, spot invalid inferences, and reason correctly about model outputs across the whole data life cycle.
- **Data engineering** — pattern recognition and fault-diagnosis questions use pipeline dependencies, data cleansing rules, and transformation logic.
- **Programming and build (data science)** — error-checking questions mirror code review: finding the inconsistency in a specification, a config table, or a set of coding standards.
- **Data ethics and privacy** — deduction questions test whether a proposed data use follows or breaches the rules of an ethical framework.
- **Understanding product delivery** and **Delivering business impact** — prioritisation questions present competing demands and ask for a rational sequence.
- **Developing data science capability** and **Data science innovation** — several problems require matching techniques to organisational opportunities.

### Practice questions

Present these to the candidate; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in pipeline schedules.**

A team's nightly pipeline runs four stages in strict sequence: Ingest, Cleanse, Feature-build, Score. Over five nights, the completion times for Cleanse were: 01:10, 01:25, 01:40, 01:55, and 02:10. Ingest always finishes at 00:45. If the pattern continues, on which night will Cleanse first finish after 03:00, counting the night after the last observation as night 6?

A) Night 8  B) Night 9  C) Night 10  D) Night 11

**Correct answer: B) Night 9.**

**Explanation:** Cleanse completion drifts 15 minutes later each night. Extending term by term: night 6 = 02:25, night 7 = 02:40, night 8 = 02:55, night 9 = 03:10 — the first completion after 03:00. This tests extending a sequence term by term rather than jumping ahead, and re-reading the threshold condition ("after 03:00", not "at or after") before committing. It also mirrors a real operational signal: a stage drifting 15 minutes per night indicates growing data volume or degrading infrastructure, needing intervention before it breaches its processing window.

**Question 2 (easy) — Logical deduction from cleansing rules.**

A team's reusable data-preparation standard states: "Every record must pass validation before enrichment. Any record failing validation is quarantined. Quarantined records are never scored." A stakeholder reports that record X was scored. Which conclusion follows logically?

A) Record X passed enrichment.
B) Record X was never quarantined.
C) Record X passed validation and was enriched.
D) Record X contained no errors.

**Correct answer: B) Record X was never quarantined.**

**Explanation:** Quarantined records are never scored; X was scored, so by contraposition X was never quarantined. Option C over-reaches — nothing says a scored record must have been enriched. Option D confuses "passed validation" with "contained no errors". This tests accepting only what stated premises entail — the discipline behind critiquing a colleague's causal claim from observational data.

**Question 3 (moderate) — Error checking a model card.**

A model card being reviewed before deployment states: (i) training data covers April 2022 to March 2025; (ii) the model was evaluated on a random 20% holdout from the same period; (iii) precision at the operating threshold is 0.81; (iv) "the model has been tested for temporal robustness by evaluating performance on cases from April 2025 onward"; (v) the drift monitoring plan begins six months after deployment. Which pair of statements is in tension?

A) (i) and (iii)  B) (ii) and (iv)  C) (iii) and (v)  D) (i) and (v)

**Correct answer: B) (ii) and (iv).**

**Explanation:** Statement (ii) describes only an in-period holdout evaluation. Statement (iv) claims a post-period temporal robustness test for which no evidence set is described in the card. Either the out-of-time results are missing from the card, or the claim in (iv) is unsupported. This tests the critique-of-statistical-analysis skill directly — the kind of gap that matters enormously when model outputs will inform decisions about citizens.

**Question 4 (moderate) — Prioritisation across the delivery life cycle.**

It is Monday morning. Four items compete for attention: (1) a junior analyst's pull request implementing a fix to a scoring bug currently sending incorrect prioritisation scores to a live operational team; (2) preparation for Thursday's show-and-tell to the programme board; (3) a request from the ethics committee for clarifications on a data sharing proposal, due Friday; (4) a promising but exploratory NLP prototype the team is excited about. What is the most defensible order of attention?

A) 1, 3, 2, 4  B) 2, 1, 3, 4  C) 1, 2, 3, 4  D) 4, 1, 2, 3

**Correct answer: A) 1, 3, 2, 4.**

**Explanation:** Item 1 is a live harm requiring the lead's review as the bottleneck — first. Item 3 has a hard external dependency (the committee needs time before Friday) and is a lead-level accountability, so it precedes the show-and-tell (2), whose material largely exists already. The prototype (4) has no deadline and should be scheduled, not dropped. This tests reasoning about dependencies and irreversibility, not just deadlines.

**Question 5 (moderate) — Deduction from experiment results.**

An A/B test on a digital service found variant B's new recommendation model increased task completion from 62% to 66% (statistically significant). The product manager concludes: "The model improves completion for all user groups, so we should roll it out to everyone including assisted-digital users." Which single observation most directly undermines the conclusion?

A) The test ran for only three weeks.
B) Assisted-digital users were excluded from the experiment population.
C) Variant A's completion rate was measured on a Tuesday.
D) The model uses gradient boosting rather than a neural network.

**Correct answer: B) Assisted-digital users were excluded from the experiment population.**

**Explanation:** If assisted-digital users never appeared in the experiment, no evidence exists about the model's effect on them, however significant the overall result. This tests catching an inference that does not extend to an unobserved group — a lead-level catch expected before any rollout decision affecting inclusion.

**Question 6 (moderate) — Pattern recognition in feature behaviour.**

A churn-style model uses four features. During monitoring: when F1 rises, predictions rise; when F2 rises, predictions rise; when F3 rises, predictions fall; F4 shows no consistent relationship. This month, F1 fell sharply, F2 was stable, F3 fell sharply, F4 rose. Predictions overall were roughly unchanged. Which explanation is most consistent with the observations?

A) The model has silently failed and is outputting a constant.
B) The downward pressure from falling F1 was offset by falling F3.
C) F4 is now the dominant feature.
D) The monitoring system is reporting last month's data.

**Correct answer: B) The downward pressure from falling F1 was offset by falling F3.**

**Explanation:** F1 falling should push predictions down; F3 falling (a negative relationship) should push predictions up. Two opposing pressures of similar magnitude produce roughly unchanged output. This tests the day-to-day reasoning of model monitoring — a responsibility explicitly assigned in ensuring products are monitored, maintained and continually improved.

**Question 7 (moderate) — Error checking coding standards.**

Four coding standards are set for a team: (S1) all production code must have unit tests; (S2) any script touching personal data must log an audit record; (S3) open-sourcing requires that no credentials or personal data appear anywhere in the repository history; (S4) exploratory notebooks are exempt from S1 but not from S2. A junior analyst asks to open-source an exploratory notebook that reads pseudonymised case data from a live database using an embedded service password, has no unit tests, and writes audit records. Which standards block the request as things stand?

A) S1 only  B) S3 only  C) S1 and S3  D) S2 and S4

**Correct answer: B) S3 only.**

**Explanation:** S1 does not apply (S4 exempts notebooks). S2 is satisfied (audit records are written). S3 is the blocker, twice over: an embedded service password is a credential in the repository, and pseudonymised case data is still personal data under UK GDPR if re-identification is reasonably possible. This tests checking every rule against every fact rather than pattern-matching on the first obvious gap.

**Question 8 (hard) — Logical deduction in an ethics framework.**

An ethical framework contains: (R1) any automated decision with significant effects on an individual must have a human review route; (R2) models trained on protected-characteristic data require sign-off from the ethics board; (R3) if a model requires ethics board sign-off, it cannot be deployed during the pre-election period; (R4) dashboards that only aggregate data at national level are exempt from R1 and R2. A team proposes deploying, during the pre-election period, a model that recommends (but does not decide) individual case escalations and is trained without any protected-characteristic data. Which statement is correct?

A) Deployment is blocked by R3.
B) Deployment is blocked by R1.
C) Deployment is not blocked by any stated rule, but R1's applicability turns on whether a "recommendation" has significant effects.
D) Deployment is permitted because R4 exempts the model.

**Correct answer: C).**

**Explanation:** R2 does not fire (no protected-characteristic data), so R3 does not fire either. R4 is irrelevant (this is not a national aggregate dashboard). R1's application genuinely turns on whether a recommendation caseworkers routinely follow functions as a de facto decision with significant effects — a judgement the stated facts do not settle. This tests layered conditional reasoning and the honesty to flag an unresolved boundary question rather than assert certainty.

**Question 9 (hard) — Problem solving: diagnosing a performance drop.**

A deployed classification model's precision fell from 0.84 to 0.61 over one month while recall stayed stable. During the same month: (i) an upstream team changed a source system, causing one input field to arrive with a new code list; (ii) case volumes rose 40% due to a policy change; (iii) a retraining job failed silently, so the model is three weeks older than intended; (iv) the operational team lowered the score threshold to handle the volume increase. Which change most directly explains stable recall with sharply lower precision?

A) (i) the new code list  B) (ii) the volume increase  C) (iii) the stale model  D) (iv) the lowered threshold

**Correct answer: D) the lowered threshold.**

**Explanation:** Lowering the decision threshold flags more cases: recall holds or rises while precision falls as more false positives are caught — the classic threshold-change fingerprint, distinct from what a corrupted field or a stale model would produce (both would usually degrade precision and recall together). This tests reasoning from a metric's definition — applied statistics as diagnosis.

**Question 10 (hard) — Prioritisation with dependencies and capability.**

A team of five: two senior data scientists (one leaving in four weeks), two mid-level, and one apprentice. Four pieces of work: (W1) knowledge transfer of a bespoke forecasting model only the departing senior understands; (W2) a ministerial commission due in six weeks that any senior could lead; (W3) a scheduled framework upgrade with a hard vendor deadline in eight weeks, well documented, suited to mid-level staff; (W4) apprentice coaching sessions already postponed twice. Which allocation best protects the organisation?

A) Departing senior on W2; remaining senior on W1 handover receiving; mid-levels on W3; postpone W4 again.
B) Departing senior on W1 knowledge transfer with a mid-level receiving; remaining senior on W2; other mid-level on W3; protect W4 personally.
C) Both seniors on W2 to guarantee the ministerial deadline; mid-levels on W1 and W3; postpone W4.
D) Departing senior finishes W3 quickly; remaining senior on W2; mid-levels on W1; take on W4.

**Correct answer: B).**

**Explanation:** The controlling constraint is irreversibility: the departing senior's unique knowledge must be transferred now, eliminating C and D. Between A and B, option A loads both the handover and the ministerial commission onto the remaining senior, a single point of failure. Option B transfers knowledge to a mid-level, keeps the remaining senior focused on W2, covers W3 within its window, and stops the repeated deprioritisation of apprentice coaching. This tests sequencing by irreversibility first, deadlines second, convenience last.

**Question 11 (moderate) — Matching technique to opportunity.**

Four teams bring problems in the same week: (P1) a policy team wants to understand common themes across 40,000 free-text consultation responses; (P2) an operations team wants next-quarter demand estimates for staffing; (P3) a finance team wants to know which invoice records deviate unusually from historical patterns; (P4) a service team wants to know which of two letter formats produces more responses. Which pairing of technique to problem is most appropriate?

A) P1 topic modelling/NLP; P2 time-series forecasting; P3 anomaly detection; P4 randomised controlled trial
B) P1 anomaly detection; P2 topic modelling; P3 forecasting; P4 clustering
C) P1 forecasting; P2 randomised trial; P3 NLP; P4 anomaly detection
D) P1 clustering of numeric features; P2 anomaly detection; P3 randomised trial; P4 forecasting

**Correct answer: A).**

**Explanation:** Free-text at scale is an NLP problem; forward demand estimation is time-series forecasting; "deviates unusually from historical patterns" is anomaly detection; comparing two interventions is best answered by a randomised controlled trial (an A/B test on letter format). This tests the fluency of matching technique to organisational opportunity, not knowledge of the techniques themselves.

**Question 12 (hard) — Error checking a delivery plan.**

A delivery plan states: Sprint 1, "build features from the cleansed dataset"; Sprint 2, "data engineers deliver the cleansing pipeline"; Sprint 3, "train and validate the model, then agree the validation approach with the statistics lead"; Sprint 4, "private beta with 5% of caseworkers, and simultaneously begin national rollout communications". How many sequencing faults does the plan contain?

A) One  B) Two  C) Three  D) Four

**Correct answer: C) Three.**

**Explanation:** Sprint 1 depends on a dataset that does not exist until Sprint 2. Sprint 3 agrees the validation approach after validation is performed, inviting accusations of choosing the test that flatters the model. Sprint 4 commits to national rollout messaging before beta evidence exists — pre-empting the decision the beta is meant to inform. The 5% private beta itself is not a fault. This tests systematic checking across every element rather than stopping at the first hit.

**Question 13 (easy) — Deduction about team capability.**

Every member of a team who has completed the cloud certification can deploy models to the production environment. Amrit cannot deploy models to the production environment. What follows?

A) Amrit has not completed the cloud certification.
B) Amrit is not a member of the team.
C) Amrit will fail the cloud certification.
D) Nothing can be concluded.

**Correct answer: A) Amrit has not completed the cloud certification — provided Amrit is a team member.**

**Explanation:** The rule is: team member AND certified implies can-deploy. By contraposition, Amrit is not (a team member AND certified); given the question context establishes Amrit as a team member, certification must be the missing element. This tests stating the contrapositive precisely, then applying context — the same care exercised when reasoning about skills matrices and deployment permissions.

### Administration tips

- **Score for whether a candidate uses the contrapositive correctly** on deduction items — "if A then B; not-B; therefore not-A".
- **Watch for whether a candidate sequences by dependency and irreversibility** before deadline order.
- **Note whether a candidate scans every element of a table or plan systematically**, rather than stopping at the first plausible fault.
- **Note whether a candidate answers only from what is given**, resisting professional assumptions the premises do not state.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that over-reads the question** — bringing in professional knowledge the premises do not state.
- **Missing when a candidate stops at the first plausible fault** in an error-checking or "which pair is in tension" item.
- **Crediting deadline-only prioritisation** that ignores dependencies, single points of failure, and irreversibility.
- **Letting a time-sink question distort the overall picture.**
- **Missing when a candidate second-guesses deliberate wording** — "recommends but does not decide" is a distinction the item intends.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data presented the way it genuinely arrives in this role: performance dashboards, budget tables, capacity plans, model evaluation matrices, and programme metrics. The emphasis is business-relevant mathematics — percentages, ratios, rates, weighted averages, and cost-benefit estimation. Most assessments allow or provide an on-screen calculator, prioritising interpretation over mental arithmetic, but impose strict time limits.

This assessment measures something different from technical statistics: fast, accurate quantitative judgement under pressure, with unfamiliar data and no code — the skill used when a finance partner slides a budget table across the desk, when a programme board challenges throughput figures live, or when a junior analyst's headline number must be sanity-checked before it reaches a minister.

### How this assessment maps to the role

- **Applied maths, statistics and scientific practices** — extracting correct conclusions from tables and charts, reasoning about rates and proportions, and critiquing numerical claims.
- **Delivering business impact** — budget, benefit and unit-cost questions reflect accountability for delivering data science products that support organisational objectives and making the business case for them.
- **Understanding product delivery** — capacity, velocity and phasing calculations mirror challenging delivery plans with evidence.
- **Data engineering** — storage, throughput and pipeline-capacity arithmetic.
- **Developing data science capability** — training-budget and team-composition calculations.
- **Programming and build (data science)** — compute-cost and optimisation trade-off questions.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Percentage change in model workload.**

A team's model scored 84,000 cases in Q1 and 105,000 cases in Q2. What was the percentage increase in cases scored?

A) 20%  B) 21%  C) 25%  D) 30%

**Correct answer: C) 25%.**

**Explanation:** (105,000 − 84,000) ÷ 84,000 = 25%. This tests dividing by the baseline, not the absolute increase or the new value.

**Question 2 (easy) — Team capacity in FTE.**

A team has 6 data scientists. Two work 0.8 FTE, one is seconded out 50% of their time, and the remaining three are full time. One full-timer will spend 20% of their time on corporate duties this quarter. What delivery capacity, in FTE, does the team have this quarter?

A) 4.9  B) 5.3  C) 5.5  D) 5.7

**Correct answer: A) 4.9.**

**Explanation:** 1.6 + 0.5 + 2.8 = 4.9 FTE. This tests applying every stated deduction — a common slip is forgetting one — and turning "we have six people" into an accurate delivery figure that changes sprint commitments materially.

**Question 3 (moderate) — Budget allocation and unit cost.**

An annual data science programme budget is £1.2 million: 55% staff costs, 25% cloud compute, 12% software licences, and the remainder training. Mid-year, cloud costs are forecast to overspend by 20% of the cloud allocation, to be funded by cutting the training budget. How much training budget remains, and what percentage of the original training budget is that?

A) £36,000 remaining; 37.5%  B) £36,000 remaining; 40%  C) £60,000 remaining; 62.5%  D) £24,000 remaining; 25%

**Correct answer: A) £36,000 remaining; 37.5%.**

**Explanation:** Training = 8% × £1,200,000 = £96,000. Cloud overspend = 20% × £300,000 = £60,000. Remaining = £36,000, which is 37.5% of £96,000. This tests correctly computing "the remainder" and, for a strong candidate's answer, noticing that a modest-sounding compute overspend consumes nearly two-thirds of the team's development budget.

**Question 4 (moderate) — Model performance metrics.**

A fraud-referral model flagged 2,400 cases last quarter. Investigators confirmed 1,800 as genuine referrals. Across the whole caseload, there were 3,000 genuine referral-worthy cases in total. Calculate the model's precision and recall.

A) Precision 75%, recall 60%  B) Precision 60%, recall 75%  C) Precision 75%, recall 80%  D) Precision 80%, recall 75%

**Correct answer: A) Precision 75%, recall 60%.**

**Explanation:** Precision = 1,800 ÷ 2,400 = 75%. Recall = 1,800 ÷ 3,000 = 60%. Option B swaps the two — the most common error under time pressure. This tests anchoring each metric to its correct denominator.

**Question 5 (moderate) — Weighted average across services.**

A team supports three services with monthly prediction volumes and error rates: Service A, 50,000 predictions at 4% error; Service B, 30,000 predictions at 6% error; Service C, 20,000 predictions at 9% error. What is the overall error rate across all predictions?

A) 5.6%  B) 6.3%  C) 5.0%  D) 6.0%

**Correct answer: A) 5.6%.**

**Explanation:** Total errors = 5,600 of 100,000 = 5.6%. Option B is the simple average of 4%, 6%, 9%, ignoring that Service A dominates the volume. This tests weighted versus unweighted averaging — a candidate who catches an unweighted average in a board paper protects the organisation from a wrong headline.

**Question 6 (moderate) — Cloud compute cost comparison.**

Retraining a main model takes 40 hours on current infrastructure at £3.20 per hour. A proposed optimised pipeline is 60% faster, on instances costing £5.00 per hour, plus a one-off engineering cost of £1,400. Retraining happens monthly. After how many months does the optimised pipeline break even?

A) 25 months  B) 29 months  C) 32 months  D) It never breaks even

**Correct answer: B) 29 months.**

**Explanation:** Current cost = £128. Optimised: 16 hours × £5.00 = £80. Saving = £48/month. Break-even = £1,400 ÷ £48 ≈ 29 months. This tests correctly interpreting "60% faster" as 40% of the runtime, and, for a strong candidate's answer, noting that a two-and-a-half-year payback deserves scrutiny if the platform might change sooner.

**Question 7 (hard) — Ratio reasoning on team composition.**

Departmental guidance recommends a ratio of at most 3 delivery data scientists per 1 senior reviewer. A directorate currently has 14 delivery data scientists and 4 senior reviewers. A growth bid will add 10 more delivery data scientists over the next year. How many additional senior reviewers are needed to stay within the guidance after growth?

A) 2  B) 3  C) 4  D) 6

**Correct answer: C) 4.**

**Explanation:** After growth: 24 delivery data scientists, requiring at least 8 senior reviewers; 8 − 4 = 4 additional. This tests recomputing the ratio against the post-growth headcount, and, for a strong candidate's answer, noting that growth bids funding only delivery posts quietly break quality ratios.

**Question 8 (hard) — Interpreting a performance table.**

A quarterly dashboard for three data science products shows:

| Product | Users (Q1) | Users (Q2) | Cost per quarter | Decisions supported (Q2) |
|---|---|---|---|---|
| Forecast tool | 1,200 | 1,500 | £90,000 | 4,500 |
| Triage model | 800 | 1,000 | £120,000 | 10,000 |
| Text classifier | 2,000 | 1,800 | £60,000 | 3,600 |

Which product had the lowest cost per decision supported in Q2, and which had the highest percentage user growth?

A) Triage model lowest cost per decision; forecast tool highest growth
B) Text classifier lowest cost per decision; triage model highest growth
C) Triage model lowest cost per decision; triage model highest growth
D) Forecast tool lowest cost per decision; text classifier highest growth

**Correct answer: C).**

**Explanation:** Cost per decision: £20, £12, £16.67 — triage model lowest. Growth: 25%, 25%, −10% — forecast tool and triage model tie at highest, so "triage model jointly highest" holds while "forecast tool highest" (uniquely) does not. This tests computing all figures before eliminating options, and recognising unit economics can favour the most expensive product per quarter.

**Question 9 (hard) — Sampling and confidence reasoning.**

User research is planned to establish needs across 5,000 caseworkers. A colleague proposes surveying 50 caseworkers from the London office (which has 500 caseworkers) and scaling up findings by multiplying by 100. Setting aside sampling error, what is the primary numerical flaw, and roughly what proportion of the workforce would actually be sampled?

A) The sample is 1% of the workforce and unrepresentative because it is drawn from one office containing 10% of caseworkers
B) The sample is 10% of the workforce and therefore adequate
C) The sample is 1% of the workforce, which is always too small for any survey
D) Multiplying by 100 is wrong because the multiplier should be 50

**Correct answer: A).**

**Explanation:** 50 ÷ 5,000 = 1%. The deeper flaw is representativeness: the office holds 10% of the population, so no multiplier fixes coverage bias elsewhere. This tests distinguishing sample-size adequacy from representativeness, and critiquing a statistical analysis before it misleads the organisation.

**Question 10 (moderate) — Pipeline throughput and scaling.**

A scoring pipeline processes 1,500 records per minute. A new data-sharing agreement will increase daily volume from 1.8 million to 2.7 million records. The pipeline currently runs in a nightly window of 22:00 to 02:00. Will the new volume fit the window, and what is the minimum throughput needed if not?

A) Yes, it fits with about an hour to spare
B) No; minimum throughput needed is about 11,250 records per minute
C) No; minimum throughput needed is about 7,500 records per minute
D) Yes, it fits exactly

**Correct answer: B) No; minimum throughput needed is about 11,250 records per minute.**

**Explanation:** Window = 240 minutes; required throughput = 2,700,000 ÷ 240 = 11,250. Option C is the throughput the current volume needs. This tests dividing the correct volume by the window, and, for a strong candidate's answer, flagging that the stated single-stream capacity cannot reproduce even today's volume, implying existing parallelism.

**Question 11 (moderate) — Training investment per head.**

A £42,000 CPD budget covers a team of 12. Conference attendance costs £1,200 per person, a technical course £800 per person, and coaching accreditation £2,500 per person. Every team member attends one conference and one course, with the remainder funding coaching accreditations. How many accreditations can be funded?

A) 6  B) 7  C) 8  D) 9

**Correct answer: B) 7.**

**Explanation:** Universal provision = £24,000; remainder = £18,000; accreditations = 7.2, funding 7 whole ones. This tests the divide-then-floor discipline when converting budget arithmetic into whole units of people.

**Question 12 (hard) — Compound growth in demand.**

Requests for a team's analysis have grown 15% per quarter for the past year. This quarter the team received 320 requests. If growth continues at the same compound rate, roughly how many requests should be planned for in one year's time (four quarters), and what percentage increase does that represent over today?

A) About 512 requests; 60% increase  B) About 560 requests; 75% increase  C) About 512 requests; 75% increase  D) About 480 requests; 50% increase

**Correct answer: B) About 560 requests; 75% increase.**

**Explanation:** 320 × 1.15⁴ ≈ 560, a 75% increase. Option A uses simple, non-compound growth (320 × 1.6 = 512). This tests recognising compound growth — the difference between 512 and 560 is roughly one additional analyst's quarterly workload.

**Question 13 (hard) — Cost-benefit of a proposed product.**

A proposed anomaly-detection product would cost £250,000 to build and £80,000 per year to run. It is expected to flag errors currently costing the organisation £600,000 per year, catching 30% of that value in year one, and 50% per year thereafter. Using simple totals (no discounting), what is the cumulative net position at the end of year three?

A) −£40,000  B) +£290,000  C) +£540,000  D) +£110,000

**Correct answer: B) +£290,000.**

**Explanation:** Benefits = £180,000 + £300,000 + £300,000 = £780,000. Costs = £250,000 + £240,000 = £490,000. Net = +£290,000. This tests laying out benefits and costs year by year completely before subtracting once — products carry running costs every year, not just a build cost.

**Question 14 (moderate) — Reading a confusion-adjacent claim.**

A board paper claims: "The model is 92% accurate, so only 8% of the fraud cases it clears are actually fraudulent." Underlying figures: 10,000 cases, of which 400 are genuinely fraudulent; the model flags 500 cases, including 320 of the genuine ones. What is the true rate of fraud among cases the model clears?

A) 8%  B) About 0.8%  C) About 3.4%  D) 20%

**Correct answer: B) About 0.8%.**

**Explanation:** Cleared = 9,500. Missed fraud = 80. Rate among cleared = 80 ÷ 9,500 ≈ 0.8%. The paper confuses overall accuracy with the miss rate among cleared cases — two unrelated quantities. This tests working from a two-by-two table of counts and reading the requested cell against the requested denominator — catching base-rate confusions that reach real boards in real papers.

### Administration tips

- **Score for whether a candidate names the denominator aloud** before dividing.
- **Watch for whether a candidate checks units and scale qualifiers** — "in thousands", "per quarter", "FTE".
- **Note whether a candidate estimates before calculating precisely**, catching order-of-magnitude errors.
- **Note whether a candidate recognises compound growth** rather than defaulting to simple growth.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads a chart or table label.**
- **Crediting simple growth applied where compounding is required.**
- **Missing when a candidate uses an unweighted average of rates across differently sized groups.**
- **Rewarding over-calculation where an estimate would settle the question.**
- **Missing when a candidate swaps precision and recall or any pair of directional metrics.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how accurately a candidate understands, analyses, and draws conclusions from written material of the kind this role genuinely demands: data ethics frameworks, statistical governance guidance, data-sharing agreements, service standards, board papers, and carefully worded emails from stakeholders. The core discipline is answering based strictly on the text provided, setting aside expert knowledge, and distinguishing what a passage states, what it implies, and what it simply does not address.

The dominant format presents a dense passage followed by statements to classify as True (the passage supports it), False (the passage contradicts it), or Cannot Say (insufficient information). Multiple-choice comprehension questions are also common. Timing is tight, typically less than a minute per question.

This assessment carries particular weight for this role. Overseeing compliance with data ethics standards and legislation turns on the precise wording of frameworks. Communicating effectively to non-specialists requires knowing exactly what a document licenses claiming. Critiquing statistical analyses turns on the gap between "the data shows X" and "the data is consistent with X" — precisely the gap verbal reasoning tests probe. A particular hazard for senior specialists: extensive subject knowledge (UK GDPR breach reporting, the Data Ethics Framework) can substitute for reading the passage in front of them.

### How this assessment maps to the role

- **Data ethics and privacy** — passages drawn from ethics frameworks and data-protection guidance test extracting obligations, exemptions, and conditions exactly as written.
- **Applied maths, statistics and scientific practices** — passages summarising statistical findings test separating supported conclusions from over-claims.
- **Delivering business impact** and **Understanding product delivery** — passages from business cases and delivery plans test extracting commitments, dependencies, and caveats accurately.
- **Data science innovation** and **Developing data science capability** — passages about emerging techniques test careful reading of claims about what a method can and cannot do.
- **Programming and build (data science)** — passages from standards and open-source policies test rule extraction.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage A (for Questions 1–4).**

> "The department's data ethics framework requires that any new data science project completes an ethics self-assessment before development begins. Projects classified as high risk — defined as those processing special category data, those producing outputs that directly affect individuals, or those using novel techniques not previously deployed in the department — must additionally be reviewed by the Data Ethics Committee. The Committee meets monthly and aims to return decisions within ten working days of a meeting. Self-assessments are valid for twelve months, after which projects still in development must resubmit. The framework does not apply to projects that exclusively use synthetic data, although teams are encouraged to complete a self-assessment voluntarily in such cases."

**Question 1 (easy).** True, False, or Cannot Say: "A project using special category data must be reviewed by the Data Ethics Committee."

**Correct answer: True.**

**Explanation:** The chain — special category data → high risk → Committee review — is explicit across two quoted clauses. This tests reading two clauses together without needing further interpretation.

**Question 2 (moderate).** True, False, or Cannot Say: "The Data Ethics Committee returns its decisions within ten working days of a meeting."

**Correct answer: Cannot Say.**

**Explanation:** The Committee "aims to" return decisions within ten days — an aspiration, not an outcome. This tests the distinction between aspiration and achievement — one of the most frequently tested distinctions, and one worth catching in a delivery plan that "aims to" retrain quarterly.

**Question 3 (moderate).** True, False, or Cannot Say: "A project using exclusively synthetic data is not required to complete an ethics self-assessment."

**Correct answer: True.**

**Explanation:** The framework "does not apply" to such projects, and the encouragement to complete a self-assessment "voluntarily" confirms it is not required. This tests recognising that obligation language ("must") and encouragement language ("encouraged") carry exactly the weight they state.

**Question 4 (hard).** True, False, or Cannot Say: "A low-risk project that has been in development for fourteen months without resubmitting its self-assessment is in breach of the framework."

**Correct answer: True.**

**Explanation:** The twelve-month resubmission clause applies to any project with a self-assessment, not only high-risk ones; fourteen months exceeds twelve, and resubmission has not happened. This tests calibrating inference: refusing to infer facts a passage doesn't state, while applying the plain meaning of the words it does state — failing a stated "must" is what breach means.

**Passage B (for Questions 5–8).**

> "The evaluation compared the new triage model against the existing rules-based system across 12,000 historical cases. The model correctly prioritised 78% of urgent cases, compared with 71% for the rules-based system. However, performance varied by region: in two of the nine regions, the model performed worse than the existing system. The evaluation team noted that these two regions had the highest proportions of cases with missing occupation data. The report recommends phased deployment beginning in the seven regions where the model outperformed the baseline, alongside a data quality improvement programme, and states that a causal link between missing occupation data and reduced model performance has not been established."

**Question 5 (easy).** True, False, or Cannot Say: "The new model correctly prioritised a higher percentage of urgent cases than the rules-based system overall."

**Correct answer: True.**

**Explanation:** Directly stated: 78% versus 71% overall. This tests reading actual numbers rather than skimming.

**Question 6 (moderate).** True, False, or Cannot Say: "Missing occupation data caused the model's reduced performance in two regions."

**Correct answer: False.**

**Explanation:** The passage explicitly states causation "has not been established" — contradicting the statement directly, making it False rather than Cannot Say. This tests correlation-versus-causation discipline: where a passage explicitly disavows a causal claim, a statement asserting that cause is False.

**Question 7 (moderate).** True, False, or Cannot Say: "The evaluation team recommends deploying the model in all nine regions once the data quality programme is complete."

**Correct answer: Cannot Say.**

**Explanation:** The passage recommends starting in seven regions alongside a data quality programme, saying nothing about what happens after the programme completes. This tests distinguishing plausible eventual intention from textual support — the difference between what a paper commits to and what a sympathetic reader assumes.

**Question 8 (hard).** Which of the following best summarises the report's overall position?

A) The model is superior to the rules-based system and should replace it immediately everywhere.
B) The model shows overall promise but regional weaknesses justify a phased approach combined with data quality work.
C) The model is unreliable because it failed in two regions and should not be deployed.
D) Missing occupation data must be fixed before any deployment can begin.

**Correct answer: B).**

**Explanation:** Option B captures every load-bearing element without over- or under-stating any of them. This tests eliminating options that contradict or overreach the text — best-summary questions are won by elimination.

**Passage C (for Questions 9–11).**

> "Under the memorandum of understanding, the partner agency will supply pseudonymised case records monthly, for the sole purpose of developing and evaluating the demand forecasting model. Records must be deleted within ninety days of receipt unless a written extension is agreed. Any output derived from the data may be published only in aggregate form, with cell counts below ten suppressed. The agreement permits linkage to the department's internal reference data, but expressly prohibits linkage to any commercially sourced dataset. Breaches must be reported to both parties' data protection officers within seventy-two hours of discovery. This agreement does not confer any right to use the data for operational decision making about individual cases."

**Question 9 (easy).** True, False, or Cannot Say: "The supplied records may be linked to commercially sourced datasets if the results are published only in aggregate."

**Correct answer: False.**

**Explanation:** The linkage prohibition is unconditional; the aggregate-publication rule is a separate, independently binding clause. This tests not letting one clause soften another unless it explicitly refers to it.

**Question 10 (moderate).** True, False, or Cannot Say: "Using the forecasting model's data to inform a caseworker's decision on an individual case would fall outside what the agreement permits."

**Correct answer: True.**

**Explanation:** The agreement "does not confer any right to use the data for operational decision making about individual cases" — directly matching the statement. This tests precision in both directions: neither over-reading nor under-reading the phrase.

**Question 11 (hard).** True, False, or Cannot Say: "A breach discovered on a Friday afternoon must be reported by Monday afternoon."

**Correct answer: True.**

**Explanation:** Seventy-two hours from Friday afternoon is Monday afternoon; the clock runs in hours, with nothing about working days or business days. This tests taking units literally, rather than importing a "working days" convention the text does not contain.

**Passage D (for Questions 12–13).**

> "Recent advances in large language models have prompted several departments to trial retrieval-augmented approaches for answering staff policy queries. Early evaluations suggest such systems can reduce simple query resolution times, though accuracy varies with the quality of the underlying document corpus. The Central Digital and Data Office guidance emphasises that generative systems should not be the sole basis for decisions affecting individuals, and that departments remain responsible for outputs regardless of the technology used. Several trials also report that maintenance effort was underestimated, with corpus curation demanding ongoing analyst time comparable to a small operational service."

**Question 12 (moderate).** True, False, or Cannot Say: "Retrieval-augmented systems reduce query resolution times."

**Correct answer: Cannot Say.**

**Explanation:** The passage says early evaluations "suggest" such systems "can" reduce "simple" query resolution times — three hedges the statement strips away, producing a stronger, more general claim the passage does not contradict but also does not fully support. This tests counting hedges as a practical technique for calibrating a verdict.

**Question 13 (moderate).** According to the passage, which of the following does the guidance from the Central Digital and Data Office state?

A) Generative systems must never be used for staff policy queries.
B) Departments are responsible for outputs regardless of the technology used.
C) Corpus curation requires a dedicated operational team.
D) Retrieval-augmented systems are more accurate than human advisers.

**Correct answer: B).**

**Explanation:** The passage attributes exactly two points to the guidance, and option B restates the second verbatim. This tests tracking who said what — the guidance versus the trials versus unsupported claims.

**Passage E (for Questions 14–16).**

> "Following the service assessment, the panel concluded that the forecasting product met the Service Standard at beta, subject to two conditions. First, the team must publish its model documentation, including known limitations, before public beta begins. Second, the team must demonstrate that assisted-digital users can access equivalent outcomes through the telephone channel. The panel commended the team's open-source publication of its codebase, noting that two other departments had already reused components. The panel expressed concern that the product's benefits case relied on staff-time savings that had not yet been independently verified, and recommended — but did not require — an independent benefits review within six months."

**Question 14 (moderate).** True, False, or Cannot Say: "The team is required to complete an independent benefits review within six months."

**Correct answer: False.**

**Explanation:** The passage explicitly states the review was "recommended — but did not require". This tests catching a paragraph that mixes binding and non-binding language.

**Question 15 (hard).** True, False, or Cannot Say: "The product's staff-time savings have been overstated."

**Correct answer: Cannot Say.**

**Explanation:** "Not yet independently verified" is a statement about evidence, not a finding about the underlying quantity — the savings could be accurate, understated, or overstated. This tests resisting a pattern-matched conclusion the passage withholds.

**Question 16 (moderate).** Based on Passage E, which of the following must happen before public beta begins?

A) An independent benefits review and publication of model documentation.
B) Publication of model documentation including known limitations.
C) Reuse of the codebase by at least two other departments.
D) Independent verification of staff-time savings.

**Correct answer: B).**

**Explanation:** Only the model documentation clause carries an explicit "before public beta begins" deadline. This tests binding-plus-deadline extraction: separating mandatory from advisory, then separating mandatory-by-a-date from merely mandatory.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate catches hedge words** — aims, suggests, can, may, some, expects — versus firm words — will, does, must, all, requires.
- **Note whether a candidate quarantines outside expertise**, pointing to the exact clause supporting an answer.
- **Note whether a candidate distinguishes association from causation** in a statistical passage.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside expertise** rather than the passage — the most common failure mode for senior specialists.
- **Missing when a candidate converts an association into a causal claim.**
- **Crediting an answer that treats a likely outcome as a stated fact.**
- **Missing when a candidate lets a nearby permission soften an independent prohibition.**
- **Missing when a candidate misses a deliberate one-word swap** between a passage and a near-identical statement.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. There is usually no single objectively right answer: several responses may seem reasonable, and the test measures how well behavioural choices align with the values of the organisation and the demands of the role. For UK public sector digital and data roles, those values are explicit: meeting user needs, transparency, collaboration, accessibility and inclusion, evidence-based decision making, and the Civil Service values of integrity, honesty, objectivity, and impartiality.

Typical formats present a scenario followed by four or five possible actions, asking for the most effective and least effective, a full ranking, or an independent rating. Timing is generous or absent.

For a lead data scientist, the scenarios are leadership scenarios: pressure to overstate findings, ethical concerns raised mid-delivery, conflict within a team, coaching underperformers, competing stakeholder demands, deciding when to challenge and when to deliver, and balancing innovation against operational reliability. Situational judgement is arguably the assessment most aligned with what distinguishes a lead from a senior practitioner: the technical answer is rarely the hard part; the human and institutional path to it is.

### How this assessment maps to the role

- **Data ethics and privacy** — dilemmas where delivery pressure, stakeholder enthusiasm, or ambiguity collide with the duty to oversee compliance and build a data ethics culture.
- **Developing data science capability** — scenarios about coaching, delegation, underperformance, and growing others.
- **Delivering business impact** — dilemmas about championing data science credibly: when to promise, when to caveat, and how to handle products after launch.
- **Understanding product delivery** — scenarios about phase gates, priorities, and working with product managers.
- **Data science innovation** — dilemmas balancing curiosity and improvement against delivery obligations and operational risk.
- **Applied maths, statistics and scientific practices** — scenarios where statistical integrity is under social pressure.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (moderate) — Pressure to overstate results.**

A team's evaluation shows a new prioritisation model improves outcomes by 4%, with meaningful uncertainty (the plausible range includes 1%). A senior stakeholder drafting the programme board paper writes that the model "delivers a 4% improvement, with further gains expected", and asks for confirmation of the wording by 17:00 so the paper can go out. The wording overstates the evidence. Rank these responses from most to least effective:

A) Confirm the wording; 4% is the central estimate and the board paper is not a statistical publication.
B) Reply proposing alternative wording that keeps the headline but adds the uncertainty range and removes "further gains expected", offering a call before 17:00 to agree it.
C) Refuse to confirm and escalate to the board chair that the paper misrepresents analysis.
D) Confirm the wording but note concerns in an email to a line manager for the record.

**Correct ranking: B, C, D, A.**

**Explanation:** B solves the actual problem while respecting the stakeholder's deadline and relationship — offering a concrete alternative and a synchronous route to agreement is how influence works at lead level, and it protects objectivity and transparency. C protects integrity but at unnecessary cost, appropriate only once B fails. D is worse than C: the misleading wording still reaches the board, and the covering email protects the sender rather than the decision. A is least effective: boards act on the words in front of them, and "further gains expected" is a claim with no evidential basis. This tests fixing a problem at the source and offering alternatives rather than vetoes, while preserving both evidence and relationship.

**Question 2 (moderate) — Ethical concern raised mid-delivery.**

Two sprints before a planned private beta, a mid-level data scientist reports believing one input feature acts as a proxy for ethnicity, and that the fairness analysis planned for beta "feels like it's happening too late". The product manager wants no scope changes this close to the gate. Select the MOST effective and LEAST effective responses:

A) Thank them, and ask them to write up the concern; commission a rapid proxy analysis on the existing validation data before the gate, and tell the product manager the gate decision will include its results.
B) Reassure them that the beta fairness analysis will catch any real problem, and that beta is exactly the controlled environment for finding such issues.
C) Remove the feature immediately to be safe, absorbing the retraining cost and accepting the gate may slip.
D) Ask them to raise it at the next retrospective so the whole team can discuss the lesson for future projects.

**Most effective: A. Least effective: D.**

**Explanation:** A validates the person who raised a concern, converts a feeling into evidence quickly and proportionately, keeps the gate intact while making it informed, and retains options. B defers an equalities risk to an environment where real users are affected. C acts before evidence and may harm the very groups it aims to protect while teaching the team that concerns trigger panic. D is least effective because it reclassifies a live, potentially unlawful risk as a process-improvement topic weeks away, signalling that ethics is retrospective paperwork.

**Question 3 (hard) — Underperforming senior team member.**

A senior data scientist — technically excellent, previously a peer — has for two months delivered late, skipped assigned code reviews, and been short with the apprentice in stand-ups. The apprentice has started staying silent. Other team members are quietly redistributing the senior's review load. Rank these responses from most to least effective:

A) Hold a private one-to-one this week: describe the specific behaviours and their impact on the team, ask what is going on, and agree expectations and support with a follow-up date.
B) Redistribute the review load formally so the team is protected, and monitor for another month before acting further.
C) Raise the pattern with HR to begin a formal performance process, given the duration and the impact on a junior colleague.
D) Address it obliquely at the team retrospective by discussing review-load fairness and stand-up behaviour as team-wide themes.

**Correct ranking: A, C, B, D.**

**Explanation:** A is specific, private, and curious before consequences, with a follow-up date converting a chat into an agreement. C is second — a legitimate next step if A fails, and better than doing nothing given a junior colleague is already being harmed. B institutionalises the problem while delaying the conversation. D is least effective: oblique whole-team messages about one person's behaviour are cowardice dressed as facilitation.

**Question 4 (moderate) — Competing stakeholder demands.**

Two directors each believe their work is a team's top priority. Director P's programme needs a demand forecast refresh for a funding submission in three weeks. Director Q expects promised discovery work for a new triage product to start Monday, with a user researcher already booked. The team can fully staff only one. Select the MOST effective and LEAST effective responses:

A) Staff the forecast refresh, as funding submissions are hard deadlines, and quietly postpone the discovery start, telling Director Q's team the researcher booking fell through.
B) Assess both pieces of work against organisational priorities, then convene the two directors (or their delegates) with a recommendation and the capacity evidence, asking them to confirm or adjust the trade-off.
C) Split the team across both so each director sees progress.
D) Escalate to a director to decide, providing a neutral summary of both demands.

**Most effective: B. Least effective: A.**

**Explanation:** B treats prioritisation as an evidence-based, transparent trade-off owned by the people accountable for the outcomes. D moves the decision up before testing whether stakeholders can resolve it with evidence. C is the classic weak "fairness" option that likely fails both pieces of work. A is least effective for one decisive reason: the lie about the booking falling through violates honesty outright and will surface, poisoning standing as a champion of the profession. Any option containing deception is almost always the least effective, regardless of its logistics.

**Question 5 (hard) — Innovation versus operational reliability.**

A team runs a stable, well-understood forecasting model that the operations centre relies on daily. A talented data scientist has built a prototype using a newer architecture that improves accuracy 9% in offline tests and is eager to swap it in. The operations centre lead is wary after a previous failed change. Rank these responses from most to least effective:

A) Approve a shadow deployment: run the new model in parallel on live data without affecting operations, define success criteria and a review date with the operations lead, and celebrate the prototype at the team show-and-tell.
B) Decline the swap for now: the operations centre's trust matters more than 9%, and revisit next year.
C) Approve the swap with a rollback plan, since offline results are strong and the team's innovation culture needs visible wins.
D) Ask the data scientist to write a business case and present it to the architecture board before anything runs anywhere.

**Correct ranking: A, D, C, B.**

**Explanation:** A refuses the false choice between innovation and reliability: a shadow deployment generates live evidence at zero operational risk, and jointly defined success criteria rebuild the operations lead's trust. D is legitimate governance but converts energy into paperwork before gathering evidence a shadow run would provide anyway. C mistakes offline metrics for operational readiness. B is last: it teaches talented people that improvement is unwelcome and confuses avoiding risk with managing it.

**Question 6 (moderate) — A data breach discovered by a team member.**

On Thursday evening, a junior analyst reports that while debugging, they discovered a shared analytical workspace has, for three weeks, been accessible to a wider group than the data sharing agreement for one dataset permits. There is no evidence anyone outside the permitted group accessed it, but access was possible. Select the MOST effective and LEAST effective responses:

A) Instruct the analyst to correct the permissions immediately, thank them, and note it in the next monthly risk report since no unauthorised access occurred.
B) Correct the permissions immediately, preserve the access logs, report the incident that evening to the data protection officer as a potential breach, and tell the analyst clearly they did the right thing by raising it.
C) Ask the analyst to establish definitively whether unauthorised access occurred before deciding whether to report anything.
D) Correct the permissions, then review at next week's team meeting how the misconfiguration happened.

**Most effective: B. Least effective: A.**

**Explanation:** B stops the exposure, preserves evidence, reports promptly to the people whose statutory job this is (breach-reporting clocks run from discovery), and reinforces the raising of bad news. C inverts the logic of breach handling — the reporting duty is triggered by the potential breach, not by an analyst's own investigation. D fixes the hole but misses the legal duty entirely. A is least effective despite sounding proportionate: it makes the compliance call unilaterally and buries a potential statutory notification in a monthly report.

**Question 7 (moderate) — Coaching versus doing.**

A high-visibility ministerial request lands: a complex analysis needed in ten working days. It could be done personally in four days to a trusted standard. Alternatively, a promising mid-level data scientist could lead it — developmentally ideal — but would need eight to nine days, review time, and carries delivery risk. Rank these responses from most to least effective:

A) Do it personally; ministerial requests are not training exercises, and the team can learn on lower-stakes work.
B) Give it to the mid-level data scientist with a structured safety net: agree a plan on day one, checkpoint reviews on days three and six, and a final review with two days' buffer.
C) Do the core analysis personally but have the mid-level data scientist shadow throughout, producing the annexes and attending briefings.
D) Give it to the mid-level data scientist entirely, saying they are trusted and to shout if they need help.

**Correct ranking: B, C, A, D.**

**Explanation:** B develops capability on real work while managing delivery risk explicitly, with checkpoints replacing hope with evidence. C is a reasonable second but builds understanding rather than capability. A delivers reliably but a team whose lead absorbs all high-stakes work never develops. D is least effective: it uses the vocabulary of empowerment to describe abdication — no checkpoints on a ministerial deadline, and juniors characteristically go quiet rather than shout when struggling.

**Question 8 (hard) — A model is being misused.**

Three months after a team delivered a demand-forecasting product with clear documentation that outputs are reliable only at regional level, a service manager is discovered using it to set staffing for individual local offices — decisions affecting rosters and waiting times. The service manager is enthusiastic about the product and has praised the team publicly. Select the MOST effective and LEAST effective responses:

A) Contact the service manager directly: explain the local-level limitation and its consequences concretely, offer to explore whether a local-level version is feasible, and jointly review recent local decisions for material errors.
B) Ask the product manager to add a prominent warning to the product interface and update the documentation.
C) Say nothing for now; the manager is a crucial ally, the decisions are made anyway, and a local-level model is on the roadmap for next year.
D) Send a written notice to the manager's director stating the product is not approved for local-level use and that the team accepts no responsibility for decisions made on that basis.

**Most effective: A. Least effective: D.**

**Explanation:** A treats misuse as the shared problem it is: preserving an ally, converting a compliance message into a professional insight, and addressing harm already done. B is a good companion action but incomplete alone. C fails a core accountability — citizen-affecting decisions rest on outputs the evidence does not support. D is least effective: liability management masquerading as governance, converting an ally into an adversary while doing nothing to correct decisions already made.

**Question 9 (moderate) — Capability gap in a roadmap.**

Mid-way through planning next year's roadmap, it becomes clear it depends heavily on natural language processing work, but the team's NLP experience is thin. The roadmap is due to a director in two weeks and is otherwise strong. Rank these responses from most to least effective:

A) Submit the roadmap as drafted; capability will develop through doing the work, which is how teams grow.
B) Submit the roadmap with the capability gap named, alongside a costed development plan: training, a targeted hire or secondment, delivery phasing that starts with the least NLP-intensive products, and a partnership with another department's established NLP team.
C) Reshape the roadmap around the team's current strengths, moving the NLP-dependent work to the following year.
D) Keep the roadmap but privately begin recruiting an NLP specialist so the gap is closing by the time delivery starts.

**Correct ranking: B, D, C, A.**

**Explanation:** B discloses the gap with a funded, phased, multi-route response — more robust than any single route. D shows initiative but hides risk from the person accountable for accepting it. C is honest but timid — deferring the work a full year cedes the opportunity. A is least effective: "we'll learn by doing" without any named risk, plan, or support substitutes optimism for leadership.

**Question 10 (hard) — Open-sourcing under pressure.**

A department has committed publicly to "coding in the open". A central transparency team asks for a team's fraud-detection scoring code to be open-sourced within a month. The codebase includes feature logic that could help sophisticated actors game the detection system, and parts were written under old standards with hard-coded configuration not yet fully audited. Select the MOST effective and LEAST effective responses:

A) Decline: fraud detection is inherently sensitive, and open-sourcing any of it creates gaming risk that outweighs a transparency commitment.
B) Agree a scoped release with the transparency team: publish the pipeline, data preparation, and evaluation code after a security and credentials audit, withhold the specific detection features on documented gaming-risk grounds, and publish the reasoning for the partial release.
C) Comply in full within the month; the public commitment was made at departmental level and it is not one's place to relitigate it.
D) Ask for a six-month delay so the code can be fully rewritten to current standards before any release.

**Most effective: B. Least effective: C.**

**Explanation:** B honours the transparency commitment substantively, manages genuine gaming risk with documented justification, and completes the essential credential audit before shipping. A proves too much, exempting entire classes of government code from a public commitment. D substitutes engineering perfectionism for judgement — the audit takes weeks, not a six-month rewrite. C is least effective: releasing unaudited code with hard-coded configuration within a month risks exposing credentials, and "not my place" abandons exactly the judgement the organisation employs a lead data scientist to exercise.

**Question 11 (moderate) — The uncomfortable evaluation result.**

A team evaluated a flagship programme's pilot at the programme director's request. The results are disappointing: the pilot shows no measurable improvement, and the programme's expansion case assumed one. The director asks whether the analysis could be "framed more constructively" for the investment committee. Rank these responses from most to least effective:

A) Present the results exactly as they are, and separately offer the director help developing options: what the data suggests about why the pilot underperformed and what could be tested next.
B) Reframe the summary to emphasise the pilot's operational learning and describe the outcome data as "early and evolving".
C) Tell the director the results cannot change and suggest they present the analysis to the committee themselves.
D) Agree to include the director's contextual narrative alongside the unchanged analysis, provided the summary states plainly that no measurable improvement was found.

**Correct ranking: A, D, C, B.**

**Explanation:** A pairs unshakeable objectivity with genuine partnership — the director gets a credible path forward, not a kinder number. D is a close second and often the practical settlement, protected by its unambiguous headline finding. C protects integrity but abandons the field, leaving the summary to someone with an incentive to soften it. B is least effective: "early and evolving" is chosen wording to make a null result sound like a positive trajectory — precisely the misrepresentation the role exists to prevent.

**Question 12 (moderate) — Building capability across the organisation.**

A policy director reports that their analysts keep commissioning external consultants for basic predictive modelling because "your team is always booked", and asks the candidate for a fix. The team genuinely has no spare delivery capacity this quarter. Select the MOST effective and LEAST effective responses:

A) Offer a capability partnership: run a monthly clinic and code-review surgery for their analysts, provide templates and standards, and take on one joint project per quarter where their analysts deliver with coaching.
B) Explain the capacity position and suggest they continue with consultants, but offer to review the consultants' outputs for quality.
C) Request funding for two more posts so future commissions can be brought in-house.
D) Agree to take on their modelling work next quarter by deprioritising the existing roadmap, since duplicate external spend is worse than internal delay.

**Most effective: A. Least effective: B.**

**Explanation:** A solves the actual problem — capability, not capacity — turning "your team is always booked" into a distributed capability model (the phrase is the director's own). C addresses supply slowly and fragilely, recreating the bottleneck at scale. D silently breaks commitments to other stakeholders. B is least effective because it institutionalises the failure: permanent consultant dependency with the team as unpaid quality assurance, the costliest possible arrangement with no capability growth.

### Administration tips

- **Score for whether a candidate's response creates information** — a rapid analysis, a shadow deployment, a joint review — rather than forcing a premature yes/no.
- **Watch for whether a candidate separates first moves from escalations**, attempting direct engagement before formal process.
- **Note whether a candidate's least-effective choice contains deception, unilateral compliance decisions, or harm to a junior colleague** — these are usually the intended "least effective".
- **Note whether a candidate pairs standards with support** — honest conversations with follow-up dates, declined requests with alternatives — rather than firmness without a constructive offer.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an idealistic answer over an effective one** — a disproportionate response to a modest risk.
- **Crediting a passive option** that delays action, hands the problem to someone else untouched, or addresses symptoms rather than causes.
- **Missing when a candidate chooses conflict avoidance dressed as diplomacy** — oblique team-wide messages, silence to preserve an alliance, softened findings.
- **Missing when a candidate answers as if for a mid-level practitioner** rather than the accountabilities of a lead — ethics oversight, capability development, and the credibility of evidence sit with this role.
- **Rewarding overcorrection into harshness** — firmness without a constructive offer, when the strongest options pair standards with support.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead data scientist: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested contrapositive reasoning, error checking against every stated rule, and prioritisation by dependency and irreversibility. The numeric section tested denominator vigilance — precision versus recall, weighted versus unweighted averages, compound versus simple growth — the arithmetic behind every board paper this role signs off. The verbal section tested hedge-spotting and association-versus-causation discipline in ethics frameworks, data-sharing agreements, and governance papers. The situational judgement section tested the coach-champion-challenger blend central to this role: creating information rather than forcing premature decisions, pairing standards with support, and never trading evidence for comfort.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, read technical and governance documents for exactly what they establish, and lead a data science team through delivery, ethics, and capability challenges — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
