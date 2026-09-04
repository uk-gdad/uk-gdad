# Performance Analyst (Lead Performance Analyst) - Psychometric Assessments

## Introduction

This document is a practical companion for the assessor administering a workplace job-specific psychometric assessment to a candidate for the lead performance analyst role — a line manager, a panel, or a reviewer running a structured assessment as part of hiring or promotion into this role level.

Psychometric assessments of this kind are structured, standardised exercises that measure the mental processes and judgement this role genuinely demands. For a lead performance analyst in the UK Government Digital and Data profession, that means far more than abstract puzzles. Well-designed assessments for this role probe how a candidate interprets performance dashboards under time pressure, spots flaws in a measurement framework, reads dense policy and standards documentation with precision, and handles the leadership dilemmas that come with coaching analysts, influencing senior stakeholders, and acting as an escalation point for important issues. Because this role is responsible for the accuracy and quality of data and analysis across teams, and for how that analysis is used, assessing a candidate's reasoning is not a hoop to jump through: it mirrors the daily substance of the job. Administering it fairly is the assessor's responsibility: present the same items under the same time limit to every candidate assessed for this role level, and hold the worked answers and explanations back as an answer key until scoring and debrief.

This document is organised into four main assessment sections, each aligned to a recognised assessment type:

1. **Workplace job-specific cognitive assessment** - pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a lead performance analyst really handles: KPI frameworks, analytics implementations, data quality reports.
2. **Workplace job-specific numeric reasoning assessment** - tables, percentages, ratios, budgets, and performance metrics drawn from realistic government service data.
3. **Workplace job-specific verbal reasoning assessment** - dense passages modelled on standards, policies, emails, and assessment reports, with True / False / Cannot Say and comprehension questions.
4. **Workplace job-specific situational judgement assessment** - leadership dilemmas involving the role's real stakeholders: heads of performance analysis, service owners, junior analysts, and cross-government communities.

Each section explains what the assessment measures, maps its dimensions to the specific skills in the role profile, offers a substantial set of items with worked answers and explanations forming the answer key, and closes with guidance on administering and scoring it.

How should the assessor use this document? Present the items under the timing suggested, using the same items and conditions for every candidate assessed at this role level. Keep the worked answers and explanations out of the candidate's sight throughout the session. After scoring, use the explanations as the basis of a debrief with the candidate — what a strong answer showed, and where a weaker one fell short — rather than simply reading out a total. Keep a record of what was administered and how it was scored, so the process is repeatable and defensible across candidates. This assessment is one input among several into a hiring or promotion decision, never the sole basis for one — see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment is a targeted psychometric test that measures the exact mental processes this role requires, using practical workplace scenarios and data rather than abstract IQ-style puzzles. For a lead performance analyst, that means the test artefacts look like the things on the candidate's screen every day: measurement framework matrices, analytics tagging plans, data quality dashboards, escalation logs, and product life cycle assessment criteria.

Typical characteristics of this assessment type:

- **Role-targeted content.** Questions mimic the everyday tasks and data formats of the actual job - in this case, cross-project KPI frameworks, tracking implementations, and quality assurance processes.
- **Timed format.** Allow 15 to 30 minutes to complete the test online, which deliberately simulates the time pressure of a delivery environment — apply the same allowance to every candidate.
- **Objective scoring.** Compare a candidate's results against a benchmark or norm group, often calibrated to leadership-level analytical roles.
- **Validated questions.** Reputable assessments are vetted to ensure they predict job success without bias; record a breakdown of speed versus accuracy rather than a single score.

At lead level, cognitive assessments lean towards multi-step reasoning: not "what does this chart say?" but "which of these four inconsistent artefacts is the root cause, and what should be fixed first?" That reflects the role's responsibilities: removing blockers, acting as an escalation point, and being accountable for the accuracy and quality of analysis across several teams at once. The cognitive load of the job is largely about detecting inconsistency early, deducing causes from partial evidence, and prioritising interventions - and that is precisely what this assessment samples.

### What it measures for this role

Mapped against the skills in the role profile:

- **Analysis and insight.** Pattern recognition and logical deduction questions test whether the candidate can supervise a wide range of analysis techniques - it is not possible to quality-assure a funnel analysis or a cohort comparison without being able to rapidly reason about its logic, and to apply innovative approaches when the standard technique fails.
- **Quality assurance of data and analysis.** Error-checking items measure the candidate's ability to verify and validate data: spotting a mismatched total, an impossible percentage, a tracking gap, or a definition drift between two teams' dashboards - the daily currency of assuring analysis across multiple teams.
- **Performance measurement.** Deduction and consistency questions probe whether the candidate can oversee measurement frameworks across multiple projects and detect where a KPI is misaligned to business needs and strategy.
- **Understanding analysis across the product life cycle.** Prioritisation questions test the candidate's ability to identify and deal with potential risks across or between life cycle stages - discovery, alpha, beta, live - and to decide what matters most when everything is urgent.
- **Technical understanding.** Some items ask the candidate to reason about analytics tooling and implementation logic, reflecting the role's responsibility to identify opportunities for new digital technologies to enhance analytical capability.

### Practice questions

**Question 1 (easy) - Error checking in a KPI summary**

A junior analyst sends a candidate this weekly summary for a licence-renewal service:

| Metric | Week 1 | Week 2 |
|---|---|---|
| Started transactions | 12,400 | 13,000 |
| Completed transactions | 9,920 | 10,530 |
| Completion rate | 80% | 79% |
| Digital take-up | 68% | 71% |

Which figure is inconsistent with the others?

- A) Week 1 completion rate
- B) Week 2 completion rate
- C) Week 1 digital take-up
- D) Week 2 started transactions

**Correct answer: B.**

**Explanation:** Completion rate should equal completed divided by started. Week 1: 9,920 / 12,400 = 0.80, so 80% is consistent. Week 2: 10,530 / 13,000 = 0.81, i.e. 81%, not the 79% reported. Digital take-up cannot be checked from the data given, so it cannot be identified as inconsistent - a key discipline in error checking is distinguishing "wrong" from "unverifiable". As the person responsible for the accuracy and quality of analysis, this is exactly the kind of arithmetic cross-check a lead performance analyst would run before a report reaches a senior stakeholder.

**Question 2 (easy) - Logical deduction from tracking rules**

An analytics implementation standard says: "Every page must fire a page-view event. A page that contains a form must also fire a form-start event when a user interacts with any field. A form-complete event may only fire on pages that fired a form-start event."

A dashboard shows a page that fired form-complete events but no form-start events. Which conclusion follows logically?

- A) Users completed the form without interacting with any field
- B) The implementation breaches the standard
- C) The page does not contain a form
- D) The page-view event is missing

**Correct answer: B.**

**Explanation:** The standard states form-complete may only fire where form-start fired. Form-complete without form-start therefore directly contradicts the rule, so the implementation breaches the standard. Option A describes an impossible user behaviour offered as a distractor; C is contradicted (a form was completed, so a form exists); D introduces an event the question gives no evidence about. In deduction items, the strong answer chooses only what must be true from the stated rules - the same discipline a lead teaches analysts when supervising their interpretation of tracking specifications.

**Question 3 (moderate) - Pattern recognition across service dashboards**

A candidate reviews completion rates across four related services over five months:

- Service A: 71%, 73%, 75%, 77%, 79%
- Service B: 82%, 82%, 81%, 82%, 82%
- Service C: 68%, 74%, 66%, 75%, 65%
- Service D: 90%, 85%, 80%, 75%, 70%

As the lead responsible for consistency of measurement frameworks, which service's pattern most strongly suggests a measurement problem rather than a genuine performance change?

- A) Service A
- B) Service B
- C) Service C
- D) Service D

**Correct answer: C.**

**Explanation:** Service A shows a smooth upward trend (+2 points per month) - plausible steady improvement. Service B is stable - plausible mature service. Service D shows a smooth downward trend (-5 per month) - concerning, but a consistent trajectory is the signature of a real behavioural or policy change. Service C oscillates sharply (up 6, down 8, up 9, down 10) with no stable level; a sawtooth alternation of that size is the classic signature of inconsistent data collection - for example two tracking configurations alternating between releases, or a definition applied differently in alternate reporting cycles. Real user behaviour rarely swings symmetrically month to month. Recognising which anomaly signature points to measurement rather than performance is central to overseeing frameworks across multiple projects, and is what this item is designed to test.

**Question 4 (moderate) - Prioritisation as an escalation point**

It is 09:15 on a Monday. Four issues have landed in a candidate's queue overnight:

1. A performance analyst reports that Saturday's data for one service failed to load into the warehouse; the pipeline can be re-run at any point this week without data loss.
2. The head of performance analysis needs a one-page summary of quarterly KPI movements for a director's meeting at 14:00 today.
3. A senior analyst discovered that a live public dashboard has been double-counting completed applications for six days, overstating performance.
4. A product team asks the candidate to advise on adding a new user-satisfaction metric for next quarter's framework.

Which order of attention is most defensible?

- A) 2, 3, 1, 4
- B) 3, 2, 1, 4
- C) 3, 1, 2, 4
- D) 1, 3, 2, 4

**Correct answer: B.**

**Explanation:** Issue 3 is first: a public dashboard overstating performance is an accuracy and trust failure that worsens with every hour it remains visible - and this role is explicitly accountable for how data and analysis are used. Even a brief holding action (correct it, annotate it, or take it down with a note) belongs at the top. Issue 2 is second: it has a hard same-day deadline and serves the head of profession's strategic need, but there are still nearly five hours available. Issue 1 is third: important but explicitly recoverable at any point this week - low urgency despite looking dramatic. Issue 4 is a genuinely valuable strategic task with a quarter-long horizon; last does not mean unimportant. Option A fails because it lets a known-wrong public figure stand while drafting a summary; option C delays the hard 14:00 deadline behind a task with a week of slack.

**Question 5 (moderate) - Deduction from framework alignment rules**

A directorate's measurement policy states: "Every KPI must map to at least one strategic objective. Every strategic objective must be covered by at least two KPIs. No KPI may map to more than two strategic objectives."

A project's framework has three strategic objectives (O1, O2, O3) and four KPIs. KPI1 maps to O1 and O2. KPI2 maps to O2. KPI3 maps to O3. KPI4 maps to O3. Which statement is true?

- A) The framework fully complies with the policy
- B) The framework breaches the policy because O1 is covered by only one KPI
- C) The framework breaches the policy because KPI1 maps to two objectives
- D) The framework breaches the policy because there are more KPIs than objectives

**Correct answer: B.**

**Explanation:** Check each rule systematically. Rule 1: every KPI maps to at least one objective - satisfied (all four map somewhere). Rule 3: no KPI maps to more than two objectives - satisfied; KPI1 maps to exactly two, which is permitted, so option C is a distractor built on misreading "more than two" as "two or more". Rule 2: every objective needs at least two KPIs. O2 has KPI1 and KPI2 (two). O3 has KPI3 and KPI4 (two). O1 has only KPI1 (one) - breach. Option D invents a rule that does not exist. This is the auditing mindset a lead applies when ensuring frameworks across multiple projects stay aligned to business needs: test each artefact against each rule, one at a time, and resist plausible-sounding rules that were never stated.

**Question 6 (moderate) - Error checking a funnel analysis**

A performance analyst supervised by a candidate presents a funnel for an online application service:

1. Landing page: 40,000 users
2. Eligibility checker: 26,000 users
3. Application form started: 28,500 users
4. Application form submitted: 19,000 users
5. Confirmation page: 18,800 users

They conclude: "Our biggest drop-off is at the eligibility checker, so we should redesign it." What should be challenged first?

- A) The conclusion is fine; the eligibility checker loses 14,000 users
- B) Step 3 shows more users than step 2, so the funnel definition or tracking needs investigating before any conclusion
- C) The gap between steps 4 and 5 shows a submission failure that matters more
- D) The landing page figure is implausibly high

**Correct answer: B.**

**Explanation:** A strictly sequential funnel cannot gain users between steps: 28,500 people cannot start the form if only 26,000 passed the eligibility checker. Either the funnel is not truly sequential (some users skip the checker via a direct link), or the steps count different units (visits versus users), or tracking is duplicated on the form page. Until that is resolved, the "biggest drop-off" claim is unsafe - the checker drop may be partly an artefact. Options A and C accept the data at face value; D is speculation with no internal evidence. A lead's quality assurance instinct should be triggered by internal impossibility before engaging with the narrative. Coaching analysts to validate the shape of their data before interpreting it is one of the highest-value habits a lead can transfer, and this item tests whether a candidate reaches for it unprompted.

**Question 7 (moderate) - Prioritising life cycle risks**

A candidate contributes to service assessments and supports teams through life cycle phases. Four teams report risks:

- Team W (discovery): has not yet defined any success measures, two weeks into an eight-week discovery.
- Team X (private beta): collects analytics but has no cookie consent mechanism on its beta pages.
- Team Y (public beta): its performance framework measures outputs (pages published) but not outcomes (user success), with a live assessment in three months.
- Team Z (live): satisfaction score dipped 2 points in one month, within normal monthly variation.

Which risk needs intervention most urgently?

- A) Team W
- B) Team X
- C) Team Y
- D) Team Z

**Correct answer: B.**

**Explanation:** Team X is collecting analytics from real users without a consent mechanism - a live legal and ethical compliance failure happening right now, exposing the department to regulatory and reputational harm and undermining public trust in how data is used. It is also quick to remediate (pause collection or implement consent). Team W is early in discovery; defining measures two weeks in is timely to nudge but not alarming. Team Y matters, but three months is enough runway to reshape a framework - a scheduled coaching intervention, not an emergency. Team Z is explicitly within normal variation - reacting to noise would itself be poor analytical leadership. The reasoning pattern this item tests: rank active harm above future risk, and future risk above noise.

**Question 8 (hard) - Root cause deduction across systems**

A service's dashboard shows digital completions fell 30% last Tuesday. A candidate gathers facts:

1. Call centre volumes for the same service were flat on Tuesday.
2. The web analytics tool recorded normal traffic to the start page on Tuesday.
3. The payment provider reported a four-hour outage on Tuesday morning.
4. Completions counted in the case-management system (which records applications after payment) were also down 30%.
5. A new release of the front end shipped on Wednesday, the following day.

Which explanation best fits all the facts?

- A) The Wednesday release broke the tracking
- B) Users switched to the phone channel
- C) The payment outage prevented users completing, and the drop is real
- D) The analytics tool undercounted completions

**Correct answer: C.**

**Explanation:** Test each hypothesis against every fact. Option A fails on timing: the release shipped the day after the drop. Option B is contradicted by fact 1 - flat call volumes mean no channel shift. Option D is contradicted by fact 4: an independent system (case management) shows the same 30% fall, so this is not a measurement artefact in the analytics tool. Option C is consistent with everything: normal start-page traffic (fact 2) means users arrived, the payment outage (fact 3) blocked the final step, and both measurement systems agree (fact 4). The lead-level habit this item tests is triangulation - using an independent data source to separate real change from measurement error before escalating. This is exactly the verification and validation approach the quality assurance skill in this role demands.

**Question 9 (hard) - Consistency across team definitions**

Three teams a candidate coordinates define "active user" differently:

- Team 1: logged in at least once in the last 30 days.
- Team 2: completed at least one transaction in the last 30 days.
- Team 3: logged in at least once in the last 90 days.

The programme director asks for "total active users across the three services" and a junior analyst proposes simply summing the three teams' figures. How many distinct problems does that proposal contain, considering that some users use more than one service?

- A) One: the definitions differ
- B) Two: the definitions differ, and users of multiple services would be double-counted
- C) Two: the time windows differ, and transactions differ from logins
- D) None, provided the total is footnoted

**Correct answer: B.**

**Explanation:** There are two logically distinct flaws. First, the definitions are incommensurable - different behaviours (login versus transaction) and different windows (30 versus 90 days) mean the three numbers do not measure the same construct; adding them produces a figure with no coherent meaning. Second, even with identical definitions, summing per-service counts double-counts people who use more than one service; a cross-service total needs deduplication at user level. Option C looks sophisticated but both of its points are aspects of the single definition problem, and it misses double-counting entirely. Option D is the dangerous one at this level: a footnote does not repair an invalid number, and the role is accountable for how analysis is used - a director will quote the headline figure, not the footnote. Standardising definitions across teams is a core part of overseeing the consistency of performance measurement frameworks, and this item tests whether a candidate spots both flaws rather than settling for the more obvious one.

**Question 10 (hard) - Evaluating an innovative technique**

A senior analyst proposes replacing manual weekly anomaly checks with an automated machine-learning anomaly detection tool across all of a candidate's services' pipelines. The tool flags anomalies with 92% precision. In its pilot, it flagged 50 anomalies per week, of which the team investigated the 10 highest-scoring. Which single follow-up question is most important before the candidate approves the rollout?

- A) What is the tool's licence cost per year?
- B) What is the tool's recall - what proportion of real anomalies does it miss?
- C) Can the tool run in the existing cloud environment?
- D) How many teams have adopted the tool elsewhere in government?

**Correct answer: B.**

**Explanation:** Precision (92% of flags are real) tells you the tool rarely cries wolf, but it says nothing about what the tool fails to flag. If manual checks are retired, missed anomalies (false negatives) become invisible - and for the person responsible for data accuracy across teams, an undetected data corruption incident is the worst-case scenario. Recall is the metric that governs that risk, so it is the most important unknown. Cost (A), infrastructure (C), and cross-government adoption (D) are all legitimate later questions, but none addresses the core analytical risk of substituting automation for human assurance. This item mirrors the skill in identifying opportunities to use new digital technologies while keeping them aligned with business goals: enthusiasm for innovation, disciplined by an understanding of what the technique can and cannot see, which is what a strong candidate's answer should demonstrate.

**Question 11 (hard) - Sequencing a strategy implementation**

The head of performance analysis sets a strategy goal: "a single, consistent performance data architecture across the directorate within twelve months." A candidate identifies five workstreams:

1. Agree common metric definitions across teams
2. Migrate all teams onto the shared data warehouse
3. Build the cross-directorate executive dashboard
4. Decommission legacy team-level dashboards
5. Train analysts on the new tooling

Given that each workstream depends on the artefacts of any workstream it builds on, which ordering is logically sound?

- A) 2, 1, 3, 5, 4
- B) 1, 2, 5, 3, 4
- C) 3, 1, 2, 4, 5
- D) 1, 3, 2, 4, 5

**Correct answer: B.**

**Explanation:** Work from dependencies. Common definitions (1) must precede migration (2): loading inconsistently defined data into a shared warehouse just centralises the inconsistency. The warehouse (2) must exist before the cross-directorate dashboard (3) can be built on it, and analysts should be trained (5) as or before the new stack becomes their working environment - certainly before the old dashboards are switched off. Decommissioning legacy dashboards (4) must come last: removing the fallback before the replacement is proven creates avoidable operational risk. Option A migrates before definitions are agreed; option C builds the executive dashboard first, on nothing; option D likewise builds the dashboard before the warehouse it depends on. This mirrors the role's part in taking forward the strategy determined by the head of performance analysis, including data implementation and data architecture: leads add value precisely by turning a strategic goal into a dependency-safe sequence.

**Question 12 (hard) - Detecting definition drift over time**

A KPI defined as "applications processed within 10 working days" showed: January 84%, February 85%, March 86%, April 93%, May 94%. A candidate learns that in April the operations team began excluding applications returned to users for correction from the calculation, restarting the clock when the corrected application arrives. Which statement is the most accurate assessment?

- A) Performance genuinely improved by 7 points in April
- B) The April jump is at least partly a definition change, so the series is no longer comparable across the boundary and the improvement claim is unsafe
- C) The new definition is wrong and must be reversed
- D) The KPI should be deleted from the framework

**Correct answer: B.**

**Explanation:** A 7-point step change coinciding exactly with a definition change is a discontinuity in the measurement, not necessarily in the service. Excluding returned applications mechanically raises the reported rate regardless of any real change. Note what cannot be concluded: option C overreaches - the new definition may actually be more meaningful (clock-stopping for customer-caused delay is a defensible policy), but that is a separate judgement from comparability. Option D throws away a useful metric. The professional response captured by B is to break the series, publish both definitions across the boundary period if possible, and annotate the change - protecting the integrity of trend claims. Guarding against silent definition drift is one of the most common quality assurance interventions at this level, and a frequent subject of the coaching a lead gives senior analysts.

**Question 13 (challenging) - Odd one out in analysis techniques**

A candidate is teaching a masterclass on matching technique to question. Which pairing of analytical question and technique is mismatched?

- A) "Which page change caused the completion uplift?" - A/B test comparing variants
- B) "Which user groups behave similarly?" - cluster analysis of behavioural data
- C) "Did satisfaction differ before and after the release?" - comparison of means with appropriate significance testing
- D) "What proportion of users will renew next year?" - retrospective funnel analysis of last year's journeys

**Correct answer: D.**

**Explanation:** Options A-C match question to technique correctly: causal attribution wants a controlled experiment; segmentation wants clustering; before/after difference wants a tested comparison of means. Option D mismatches: a retrospective funnel describes what happened in past journeys; a question about what proportion will renew is predictive and needs a forecasting or predictive modelling approach (for example survival analysis or a propensity model), possibly informed by historical funnels but not answered by them. Supervising a wide range of analysis techniques means exactly this: recognising when a familiar technique is being stretched past the question it can answer, and steering an analyst to a better tool — the judgement this item is designed to test.

### Administering this section

- Give every candidate assessed for this role level the same items under the same time allowance (15 to 30 minutes is typical for the set above), and apply the same conditions throughout.
- Keep the worked answers and explanations out of the candidate's view until scoring; they are the answer key.
- Record both accuracy and time taken. With 60-90 seconds per item typical, note where a candidate appeared to spend disproportionate time on one item at the expense of others.
- At debrief, use the explanations to talk through what a strong answer showed and where a weaker one fell short — the leadership framing embedded in several scenarios (public dashboards, consent, definition changes) is worth discussing explicitly, since it is part of the logic being tested and not background colour.

### Scoring guidance

- Note whether a candidate reasons fluently from numbers that are internally impossible (Questions 1 and 6) rather than scanning for consistency before interpreting — this is one of the more diagnostic errors for this specific role.
- Note whether a candidate imports rules that were not stated in a deduction item (Questions 2, 5, 9), rather than applying only the stated standard or policy.
- Note whether a candidate confuses "cannot verify" with "wrong" (Question 1) — disciplined answers separate the two.
- Note where a candidate appeared to over-invest in one hard question at the expense of easier ones — the assessment rewards steady, checked progress across items over a stubborn battle on a single one.
- Note whether a candidate treats governance, trust, and compliance elements embedded in a scenario (Question 7, for instance) as part of the logic rather than as decoration — candidates who separate this out from the analytical content are showing a gap worth exploring at debrief.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data presented the way this job presents it. It is deliberately built around business mathematics - percentages, ratios, rates, weighted averages, cost-benefit estimates - rather than abstract formulae. For a lead performance analyst the data artefacts are unmistakably the role's own: completion-rate tables, cost-per-transaction comparisons, channel-shift projections, team capacity plans, survey samples, and quality assurance sampling figures.

Typical characteristics:

- **Real-world data inputs.** Tables, charts, and dashboards drawn from service performance, budgets, and project schedules.
- **Applied arithmetic.** Percentages, percentage-point changes, ratios, rates per unit, weighted averages, and projections - the exact toolkit of performance measurement.
- **Calculator friendly.** Most assessments allow or provide an on-screen calculator; the challenge is interpretation and extraction, not mental arithmetic heroics — decide in advance and apply the same rule to every candidate.
- **Strict time limits.** Often around 60-90 seconds per question, simulating the pace at which figures are sanity-checked in a stand-up or a stakeholder meeting.

For someone at lead level, numeric reasoning assessments carry a double relevance. First, the role personally analyses and presents performance data at tactical and strategic level, so a candidate's own fluency is being tested. Second - and distinctively for this role - the postholder is the quality gate for other people's numbers: verifying and validating analysis produced by senior, mid-level, and associate analysts across multiple teams. A weighted-average error or a percentage-versus-percentage-point confusion that slips past a lead can end up in a minister's briefing. This assessment therefore predicts not just a candidate's own output but the reliability of everything they would sign off.

### What it measures for this role

Mapped to the role profile skills:

- **Performance measurement.** Questions about completion rates, take-up, cost per transaction, and target trajectories test the core numeracy of building and overseeing KPI frameworks across multiple projects.
- **Quality assurance of data and analysis.** Items that require verifying a stated figure, recomputing a rate, or spotting an aggregation error map directly to the verification and validation duties this role carries.
- **Analysis and insight.** Multi-step interpretation - combining a table and a percentage change, or reasoning about samples and margins - reflects the range of techniques a lead teaches and supervises.
- **Communicating analysis and insight.** Several questions test whether a numerical claim is a fair summary of the data - the arithmetic backbone of communicating compelling, accurate stories to senior audiences.
- **Understanding analysis across the product life cycle.** Capacity, benefit, and forecast questions echo the business-case and benefits-tracking arithmetic that spans discovery to live.

### Practice questions

An on-screen calculator is assumed; apply the same rule to every candidate.

**Question 1 (easy) - Completion rate change**

A passport-adjacent digital service records:

| Month | Started | Completed |
|---|---|---|
| May | 48,000 | 36,000 |
| June | 52,000 | 41,600 |

By how many percentage points did the completion rate change from May to June?

- A) +3 percentage points
- B) +5 percentage points
- C) +7 percentage points
- D) +11.6 percentage points

**Correct answer: B.**

**Explanation:** May completion rate = 36,000 / 48,000 = 0.75 = 75%. June = 41,600 / 52,000 = 0.80 = 80%. Change = 80 - 75 = +5 percentage points. Option D is bait for anyone who computes the percentage change in completions (41,600 vs 36,000 is +15.6%) or confuses relative change with the point difference. A lead constantly polices the distinction between "percentage points" and "per cent" in reporting - a 5-point rise from 75% is a 6.7% relative increase, and mixing the two in a report to a director is a classic credibility-loser.

**Question 2 (easy) - Cost per transaction**

A service handled 180,000 digital transactions in a quarter, at a total digital channel cost of 297,000 pounds. The telephone channel handled 30,000 transactions at a cost of 264,000 pounds. What is the difference in cost per transaction between channels?

- A) 4.95 pounds
- B) 7.15 pounds
- C) 7.55 pounds
- D) 8.80 pounds

**Correct answer: B.**

**Explanation:** Digital cost per transaction = 297,000 / 180,000 = 1.65 pounds. Telephone = 264,000 / 30,000 = 8.80 pounds. Difference = 8.80 - 1.65 = 7.15 pounds. Option D is the telephone figure alone; option A is a plausible mis-division. Cost per transaction is one of the standard KPIs frameworks at this level track, and the digital-versus-assisted cost gap is the arithmetic heart of every channel-shift business case a lead helps a service owner make.

**Question 3 (easy) - Digital take-up target**

A service currently receives 62% of its 250,000 annual transactions through the digital channel. The strategy sets a target of 75% digital take-up on the same total volume. How many additional digital transactions per year does the target represent?

- A) 13,000
- B) 26,000
- C) 32,500
- D) 43,750

**Correct answer: C.**

**Explanation:** Current digital volume = 0.62 x 250,000 = 155,000. Target volume = 0.75 x 250,000 = 187,500. Additional = 187,500 - 155,000 = 32,500. Option A is the point gap (13) misread as thousands; option B doubles it. Translating a percentage target into an absolute volume is exactly how a lead makes a strategic goal concrete for delivery teams - people plan around "32,500 more transactions", not "13 points".

**Question 4 (moderate) - Weighted average across teams**

A candidate coordinates three analyst teams whose services report these satisfaction scores:

| Service | Responses | Satisfaction |
|---|---|---|
| Benefits calculator | 4,000 | 82% |
| Appointment booking | 1,500 | 74% |
| Document upload | 2,500 | 90% |

A junior analyst reports "average satisfaction: 82%" by averaging the three percentages. What is the correct volume-weighted satisfaction across all responses?

- A) 82.0%
- B) 83.0%
- C) 84.0%
- D) 85.5%

**Correct answer: B.**

**Explanation:** Weight each score by its responses. Satisfied respondents: benefits calculator = 0.82 x 4,000 = 3,280; appointment booking = 0.74 x 1,500 = 1,110; document upload = 0.90 x 2,500 = 2,250. Total satisfied = 3,280 + 1,110 + 2,250 = 6,640. Total responses = 8,000. Weighted satisfaction = 6,640 / 8,000 = 0.83 = 83%. The naive unweighted mean (82 + 74 + 90) / 3 = 82% happens to look plausible, which is what makes this error dangerous: it survives a glance. Recomputing weighted averages before publication is a bread-and-butter quality assurance check when aggregating results across multiple teams, and a candidate who takes the shortcut is showing a gap worth flagging.

**Question 5 (moderate) - Reading scale qualifiers**

A capacity table states (figures in thousands): Service P processed 3.2 applications per staff-day with 45 staff over 20 working days. How many applications did Service P process in the period?

- A) 2,880
- B) 28,800
- C) 288,000
- D) 2,880,000

**Correct answer: D.**

**Explanation:** Applications = 3.2 thousand x 45 staff x 20 days = 3.2 x 900 = 2,880 thousand = 2,880,000. The trap is the qualifier "figures in thousands" applied to the rate: 3.2 means 3,200 applications per staff-day. Option A ignores the qualifier entirely. Misreading scale qualifiers ("in thousands", "in millions") is one of the most common failure modes in numeric assessments and in real dashboards alike - a stray factor of a thousand has derailed more than one report, so a strong candidate should check units on any table as a first move.

**Question 6 (moderate) - Percentage change chains**

Unique visitors to a guidance page fell 20% in April, then rose 20% in May. If March traffic was 150,000 visitors, what was May's traffic?

- A) 150,000
- B) 144,000
- C) 156,000
- D) 120,000

**Correct answer: B.**

**Explanation:** April = 150,000 x 0.80 = 120,000. May = 120,000 x 1.20 = 144,000. Sequential percentage changes do not cancel: -20% then +20% nets to -4%, because the second change applies to a smaller base. Option A is the intuitive trap. This matters whenever a team claims "we recovered the drop" - a 20% fall needs a 25% rise to recover (120,000 x 1.25 = 150,000). Correcting exactly this misreading in draft reports is part of being responsible for how analysis is used, and a candidate who catches it is demonstrating that responsibility.

**Question 7 (moderate) - Rate against volume**

A service reports its completion rate rose from 58% to 66% after a change. Transactions started fell from 24,000 to 18,000 in the same period. Did more or fewer people complete?

- A) More: 11,880 against 13,920
- B) Fewer: 11,880 against 13,920
- C) More: 13,920 against 11,880
- D) The figures do not allow a comparison

**Correct answer: B.**

**Explanation:** Before: 24,000 x 0.58 = 13,920 completions. After: 18,000 x 0.66 = 11,880. So roughly 2,040 fewer people completed, despite an eight-point rise in the rate. This is one of the single most valuable calculations in performance analysis and the one most often skipped, because the rate is what appears in the headline. Spotting a rate improvement that conceals a volume fall - and saying so before the slide is built - is a large part of what this role adds, and a candidate's answer here is a strong signal of that instinct.

**Question 8 (moderate) - Weighted average across teams**

Four analyst teams report mean time to produce a standard report: Team A 6 hours across 40 reports, Team B 9 hours across 90 reports, Team C 4 hours across 20 reports, Team D 12 hours across 50 reports. What is the approximate overall mean?

- A) 7.8 hours
- B) 8.8 hours
- C) 9.4 hours
- D) 6.5 hours

**Correct answer: B.**

**Explanation:** Weight by volume: (40 x 6) + (90 x 9) + (20 x 4) + (50 x 12) = 240 + 810 + 80 + 600 = 1,730 report-hours, across 40 + 90 + 20 + 50 = 200 reports. 1,730 / 200 = 8.65, so about 8.8 hours as the nearest option. The unweighted mean of the four team figures is (6 + 9 + 4 + 12) / 4 = 7.75, which is option A and the standard trap - it treats Team C's 20 reports as equal in weight to Team B's 90. Whenever aggregating across units of different sizes, the correct approach is to weight by the size.

**Question 9 (moderate) - Sampling**

An analytics platform samples at 10% above a threshold. In a sampled period it recorded 480 conversions for a small segment. What is the estimated true figure, and what is the main caution?

- A) 4,800, and the estimate is less reliable for small segments because the sample contains few of their events
- B) 4,800, with no particular caution
- C) 48, and the estimate is unreliable
- D) 480, since conversions are counted exactly

**Correct answer: A.**

**Explanation:** A 10% sample scaled up multiplies by 10: 480 x 10 = 4,800. The caution matters more than the arithmetic. Sampling error scales with the inverse square root of the sample count, so a segment contributing a few hundred sampled events carries a much wider margin than the headline total does - and the scaled figure looks just as precise in a dashboard. Coaching analysts to check whether a figure is sampled before slicing it finely is worth doing early, because the error is invisible in the output — and a candidate who names this caution unprompted is demonstrating exactly that coaching instinct.

**Question 10 (harder) - Statistical significance and practical significance**

An A/B test on 90,000 users finds a completion rate difference of 0.4 percentage points, reported as statistically significant at p < 0.01. What is the strongest reading?

- A) The difference is real and large
- B) The difference is probably real, and 0.4 points is small enough that whether it justifies the change depends on the implementation and maintenance cost - a very large sample detects real but trivial differences
- C) The difference is not meaningful because it is small
- D) The test is flawed; 0.4 points cannot be significant

**Correct answer: B.**

**Explanation:** Statistical significance answers whether an effect is distinguishable from zero; it says nothing about whether the effect is worth having. With 90,000 users a test has enough power to detect differences far below the level at which anyone should act. Option B separates the two questions correctly and names the criterion that decides the second. Option D misunderstands power - large samples make small effects detectable, which is exactly why this situation arises. Explaining this distinction to delivery teams is a recurring part of a lead's job, because "statistically significant" is heard as "important" — and this item tests whether a candidate holds the distinction under pressure.

**Question 11 (harder) - Capacity planning for an analyst team**

A candidate's team of 6 analysts each has about 190 productive days a year after leave, training and non-project time. Standing reporting commitments consume 40% of that capacity. How many analyst-days remain for project and improvement work?

- A) About 456
- B) About 684
- C) About 1,140
- D) About 380

**Correct answer: B.**

**Explanation:** Total productive capacity: 6 x 190 = 1,140 analyst-days. Standing reporting takes 40%, which is 456 days, leaving 684 for everything else. Producing this figure is what turns "we are stretched" into a planning conversation - and the 456 days spent on standing reporting is the number worth interrogating, since automating or retiring even a quarter of that recurring load releases more capacity than any realistic recruitment. This role names removing blockers, and a recurring commitment nobody has re-examined is one of the commonest — reaching for that framing is what a strong candidate's answer should show.

**Question 12 (harder) - Payback on automation**

Automating a recurring report would take about 12 analyst-days. The report currently takes 3 hours a week to produce. Assuming a 7.5-hour day and 46 working weeks, how long until it pays back?

- A) About 8 months
- B) About 15 months
- C) About 2 years
- D) About 3 months

**Correct answer: A.**

**Explanation:** Convert both sides to hours before dividing. Cost: 12 days x 7.5 hours = 90 hours. Saving: 3 hours x 46 weeks = 138 hours a year. Payback: 90 / 138 = 0.65 of a year, or roughly 8 months. The discipline that matters is putting both sides in the same unit first - mixing days and weekly hours is where these calculations go wrong. The professional point is that a recurring report with a sub-year payback is almost always worth automating, and producing this figure is what turns "we should automate that" into a decision someone can approve.

**Question 13 (harder) - Detecting a real change against normal variation**

Weekly completions over ten weeks: 940, 1,010, 970, 1,120, 890, 1,050, 980, 1,240, 1,000, 960. A stakeholder asks whether week 8 shows a real improvement. What is the strongest answer?

- A) Yes; 1,240 is the highest figure in the series
- B) The series varies between 890 and 1,240 with no trend, so a single high week sits within the normal range - it is not evidence of improvement, and a control chart or several more weeks would be needed to distinguish a shift from ordinary variation
- C) No; the change is not statistically significant
- D) There is not enough data to comment

**Correct answer: B.**

**Explanation:** The spread across ten weeks is 350 completions, and week 8 exceeds the mean of roughly 1,016 by about 224 - well inside the observed range. A single point above the previous maximum is the weakest possible evidence of a shift, because in any varying series some week has to be the highest. Option B characterises the variation and says what would settle it. Option C reaches for significance language without a test. Option D declines to characterise data that can be characterised. Teaching analysts and stakeholders to ask "is this outside normal variation?" before explaining a movement is one of the highest-value habits a lead can instil, and this item tests whether a candidate applies it themselves.

### Administering this section

- Decide in advance whether a calculator is permitted, and apply that decision identically to every candidate assessed for this role level.
- Hold every candidate to the same time limit (around 60-90 seconds per item is typical), and use the same table and items for every candidate compared for a given decision.
- Keep the worked answers out of the candidate's sight until scoring.
- At debrief, use the harder "what does the data support" items (Questions 10, 11, 13) to explore the candidate's reasoning, since these carry particular weight for a role whose job includes being the quality gate for other people's numbers.

### Scoring guidance

- Note whether a candidate reports a rate rise while completions fall (Question 7), or takes the unweighted mean of team-level averages (Questions 4 and 8) — both are common and consequential errors for this role specifically.
- Note whether a candidate treats a scaled sampled figure as precise for a small segment (Question 9), and whether they separate statistical significance from practical importance (Question 10).
- Note whether a candidate explains a data point that sits inside normal variation as if it were a real change (Question 13), or estimates a payback period instead of dividing carefully in matched units (Question 12).
- Note whether a candidate treats a recurring reporting commitment as fixed rather than as capacity worth interrogating (Question 11) — this speaks directly to how the candidate would operate as a lead removing blockers.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. As a lead performance analyst the material is measurement frameworks and metric definitions, data architecture and implementation documentation, supplier terms, governance papers, and the reports analysts write and that others summarise.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means it settles neither - regardless of what the candidate knows professionally.

Long experience is the main hazard here. A candidate may well know how a metric is usually defined and what a movement usually means, while the passage in front of them describes this particular case.

Three specifics matter at this level, worth bearing in mind when scoring.

The first is that a lead is the escalation point for questions about what a number means. When a definition is ambiguous, the lead's reading becomes the organisation's reading, so the difference between what a document establishes and what it implies has consequences beyond the postholder's own work.

The second is that claims are routinely attributed rather than established. "The supplier states", "the review found", "the report recommends" - each tells the reader something about the source and nothing about the truth of what was said, and distinguishing them is a habit a lead needs to teach as well as practise.

The third is that governance and framework documents allocate responsibility precisely, and this role names accountability for the accuracy and quality of data and analysis and for how they are used. Knowing exactly what the role owns is part of doing it.

### What it measures for this role

- **Reading metric definitions precisely** maps to **Performance measurement**.
- **Reading quality frameworks** maps to **Quality assurance of data and analysis**.
- **Reading data architecture documentation** maps to influencing strategy including data implementation and architecture.
- **Reading supplier terms** maps to tool procurement and validation.
- **Distinguishing evidence from claim** maps to **Analysis and insight**.
- **Reading and summarising accurately** maps to **Communicating analysis and insight**.

### Practice questions

*Passage A - for Questions 1 to 4*

"The departmental quality assurance framework requires that all analysis informing a ministerial submission is reviewed by a second analyst before publication. Analysis informing internal operational decisions should be reviewed where it is novel or where the analyst requests it. The framework defines novel analysis as analysis using a method not previously applied to the data source in question. Reviewers must record the review in the analysis log. Where a reviewer identifies a material error, the analysis must not be published until the error is corrected and the corrected analysis re-reviewed. The framework is reviewed every two years."

**Question 1 (easy)**

Statement: Analysis informing a ministerial submission must be reviewed by a second analyst.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly with "must". Note the contrast established immediately afterwards for internal operational analysis, which uses "should" and attaches conditions - the framework is deliberate about which obligations are absolute, and the next questions turn on that.

**Question 2 (moderate)**

Statement: Analysis informing an internal operational decision must be reviewed if it is novel.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The framework says such analysis "should be reviewed where it is novel or where the analyst requests it". "Should" is a strong expectation from which departure is possible with justification, and the statement's "must" overstates it - particularly in a passage that uses "must" three times elsewhere. For the person responsible for quality assurance in their area, the practical significance is that they can require this locally, and the framework does not.

**Question 3 (moderate)**

Statement: Applying a well-established method to a data source it has not previously been applied to counts as novel analysis.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The framework defines novel as "analysis using a method not previously applied to the data source in question". The definition is about the pairing of method and source, not about whether the method is new in itself - so a standard technique applied to an unfamiliar source is novel under this definition. The passage establishes it. This is a sensible definition, since most analytical errors come from a method meeting a source whose quirks nobody has yet encountered.

**Question 4 (harder)**

Statement: Analysis in which a reviewer found a material error that was subsequently corrected can be published once the analyst confirms the correction.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The framework contradicts this: the analysis "must not be published until the error is corrected **and** the corrected analysis re-reviewed". Two conditions, joined conjunctively, and the statement satisfies only the first - the analyst's own confirmation is not a re-review, which by the framework's own structure means a second analyst. Reading a two-part condition as a one-part condition is the commonest way quality frameworks get short-circuited under deadline pressure.

*Passage B - for Questions 5 to 8*

"The data platform ingests service event data on an hourly schedule. Records arriving more than 48 hours after the event timestamp are written to a late-arrival table and are not included in the standard reporting tables. A weekly reconciliation job merges the late-arrival table into the reporting tables and republishes affected daily figures. Dashboards read from the reporting tables and are not versioned. The platform team states that late arrivals typically account for under 1% of records. Historical figures may therefore change after republication."

**Question 5 (easy)**

Statement: Records arriving 60 hours after the event are excluded from the standard reporting tables when they arrive.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Records arriving more than 48 hours after the event timestamp go to the late-arrival table and are not included in the standard reporting tables. 60 exceeds 48, so the record is excluded at the point of arrival. The passage establishes this - and the word "when they arrive" matters, because the weekly reconciliation later brings them in, which the following questions explore.

**Question 6 (moderate)**

Statement: A daily figure read from a dashboard on Tuesday may differ from the same daily figure read on the following Monday.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The weekly reconciliation merges late arrivals and "republishes affected daily figures", dashboards read from the reporting tables, and the passage states directly that "historical figures may therefore change after republication". So the same historical day can show different values before and after reconciliation. This is an important operational fact for anyone quoting figures in a document - a number taken from a dashboard mid-week and quoted in a submission may no longer match the dashboard when someone checks it.

**Question 7 (moderate)**

Statement: Late arrivals account for under 1% of records.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says "the platform team states" that late arrivals "typically" account for under 1%. Two things stop this being established: it is an attributed claim rather than a verified measurement, and "typically" explicitly allows for periods when it is higher. The most likely such periods are the ones a lead cares about most - an outage or an integration failure would produce a spike in late arrivals precisely when figures are being scrutinised.

**Question 8 (harder)**

Statement: A figure quoted from a dashboard can be reproduced later by returning to the dashboard.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Dashboards "are not versioned" and read from tables whose historical figures are republished weekly. So a figure quoted at one point cannot reliably be reproduced later from the same source - there is no version to return to. The passage contradicts the statement through the combination of two clauses. This has a direct practical consequence at lead level worth acting on: analysis quoted externally needs its underlying figures captured and dated at the time, not left as a dashboard reference.

*Passage C - for Questions 9 to 12*

"An internal review of the department's performance reporting examined 22 published dashboards. It found that 14 lacked documented metric definitions and that 6 of those 14 contained metrics with the same name but different definitions from equivalent metrics elsewhere in the department. The review did not assess whether the figures reported were accurate. It recommends a central metric register. The review notes that dashboard usage data was available for 9 of the 22 dashboards. Of those 9, 4 had been opened fewer than five times in the preceding quarter."

**Question 9 (moderate)**

Statement: Fourteen of the 22 dashboards contained inaccurate figures.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The 14 dashboards lacked *documented metric definitions*, which is a documentation finding, and the review states explicitly that it "did not assess whether the figures reported were accurate". So the passage both fails to establish inaccuracy and tells you the question was not examined. Marking True conflates undocumented with wrong, which is the specific error - undocumented metrics may be perfectly correct and simply unexplained.

**Question 10 (moderate)**

Statement: Most of the department's dashboards are barely used.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Usage data was available for 9 of 22 dashboards, and 4 of those 9 had been opened fewer than five times. That is 4 of 22 known to be barely used, with 13 dashboards on which there is no information at all. "Most" would require more than 11, and the passage cannot support a claim either way. Note also that dashboards with usage data available may not be a random subset of the 22, which is a further reason for caution.

**Question 11 (moderate)**

Statement: The department has metrics with the same name but different meanings.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The review found that 6 dashboards "contained metrics with the same name but different definitions from equivalent metrics elsewhere in the department". The passage establishes this directly, and it is the finding with the greatest practical consequence - two teams reporting "completion rate" and meaning different things produces disagreements that look like disputes about performance and are actually disputes about definitions.

**Question 12 (harder)**

Statement: A central metric register would resolve the inconsistent definitions.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The review "recommends" a central register, and a recommendation is not evidence of its effect. Whether a register resolves the problem depends on things the passage does not address - whether teams are required to use it, whether existing dashboards are reconciled to it, whether anyone maintains it. Registers that nobody is obliged to consult are a well-known way of documenting an inconsistency rather than removing it. Distinguishing a proposed remedy from a demonstrated one is exactly the judgement this role requires when asked to endorse a recommendation, and it is what this item is designed to test.

### Administering this section

- Use the same three passages and twelve items for every candidate assessed at this role level, and hold every candidate to the same time limit.
- Keep the worked answers out of the candidate's sight until scoring.
- At debrief, focus discussion on the "Cannot Say" items (Questions 7, 9, 10, and 12) — these are where a candidate's long experience is most likely to substitute for what the passage actually establishes, and at lead level that reading becomes the organisation's reading.

### Scoring guidance

- Note whether a candidate reads "should be reviewed" as a requirement (Question 2), or treats an analyst's own confirmation as a re-review (Question 4) — both are common ways quality frameworks get short-circuited, and this role is meant to prevent exactly that.
- Note whether a candidate accepts a platform team's estimate of its own data quality (Question 7) as established rather than as an attributed claim.
- Note whether a candidate generalises a finding from a partial sample to the whole population (Question 10) — a strong signal for whether a candidate would over-claim from partial evidence in a real report.
- Note whether a candidate conflates missing documentation with wrong figures (Question 9), and whether they read a recommended remedy as an established one (Question 12) rather than distinguishing a proposal from a demonstrated fix.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks a candidate to identify effective and ineffective responses. As a lead performance analyst the scenarios involve coaching analysts at several levels, acting as an escalation point, defending analysis under pressure, and promoting a data-driven culture in an organisation that mostly wants confirmation.

The commonest formats ask for the most and least effective response, or for ratings. Score against a key derived from experienced practitioners at comparable levels — the key below.

Three patterns run through the strong answers, worth bearing in mind when scoring and at debrief.

The first is that this role is accountable for the accuracy and quality of data and analysis *and for how they are used*. That last clause is doing work: a correct number that is being misread is still the lead's problem, and much of the role is intervening at the point of interpretation rather than the point of calculation.

The second is that a strong lead coaches rather than corrects. This role names coaching senior, mid-level and associate analysts, and the difference between giving someone a corrected figure and giving them the reasoning is the difference between fixing one analysis and improving an analyst.

The third is that a lead is an escalation point, which means the problems that reach the role are the ones that could not be resolved below. Reaching for the answer directly is usually faster and usually the wrong move, because it removes the reason anyone would learn to resolve the next one.

### What it measures for this role

- **Coaching and supervision** maps to coaching and mentoring analysts at all levels.
- **Escalation and unblocking** maps to removing blockers and acting as an escalation point.
- **Assurance** maps to **Quality assurance of data and analysis**.
- **Influence and advocacy** maps to being an ambassador for analytics across communities and departments.
- **Communicating findings** maps to **Communicating analysis and insight**.
- **Strategy** maps to influencing the strategy set by the head of performance analysis.

### Practice questions

**Question 1 (easy) - An analyst brings a problem**

An analyst brings the candidate a data question they have been stuck on for a day. The candidate can see the answer immediately. What is the most effective response?

- A) Tell them the answer; it saves everyone time.
- B) Ask what they have tried and where their reasoning stopped, then walk them to the answer rather than handing it over - because this question will come up again from someone else, and an analyst who worked it out with the candidate can answer it next time.
- C) Tell them the answer and explain it afterwards.
- D) Ask them to keep trying.

**Correct answer: B. Least effective: D**

**Explanation:** Option B costs a few more minutes and produces an analyst who can handle the class of problem, which is what coaching means at this level. Option D is least effective: they have already spent a day, and sending them back without help is the response most likely to stop them asking next time - which is the worst outcome for someone in an escalation role. Option C is close and weaker in one specific way: once someone has the answer, they listen to the explanation much less carefully. Option A is efficient once.

**Question 2 (easy) - A number being misused**

In a meeting, a director cites a candidate's team's analysis as showing that a change worked. It shows an association with a confounding factor. What is the most effective response?

- A) Say briefly what the analysis supports and what it does not, in the meeting.
- B) Correct it afterwards in writing.
- C) Let it stand; the broad direction is right.
- D) Correct the director directly.

**Correct answer: A. Least effective: C**

**Explanation:** The role's accountability covers how analysis is used, and a misinterpretation stated in a meeting becomes the room's shared understanding immediately. Option A gets the correction in without a confrontation - "worth being clear about what this can and can't tell us" does the job. Option C is least effective: letting a causal claim stand because the direction feels right is how a team's analysis ends up supporting a conclusion it does not support, and the lead will be asked about it later. Option B reaches fewer people than were in the room. Option D achieves the right outcome in a form that invites defensiveness.

**Question 3 (moderate) - A senior analyst's method a candidate doubts**

A senior analyst managed by a candidate has used an approach the candidate thinks is wrong, and they have thought about it carefully. What is the most effective response?

- A) Ask what led them to it and what alternatives they considered, then set out the concern with reasons - because they may have a constraint the candidate cannot see, and if not, the reasoning is what transfers.
- B) Tell them to use the approach the candidate would have used.
- C) Accept it; they are senior and it is their analysis.
- D) Ask a third analyst to arbitrate.

**Correct answer: A. Least effective: B**

**Explanation:** A senior analyst who has thought carefully deserves the question before the correction, and quite often the constraint they hit is real. Option A also leaves them owning the decision, which is what senior means. Option B is least effective: instructing a senior analyst on method teaches them that their judgement is decorative, and produces compliance in place of thinking. Option C declines the assurance role the postholder holds. Option D escalates a conversation the two should have directly.

**Question 4 (moderate) - Escalated unresolved**

Two teams disagree about which of two conflicting figures for the same measure is correct, and it has come to the candidate. What is the most effective response?

- A) Get both definitions side by side and establish where they diverge - almost always a date range, a filter, an inclusion rule, or a different source - and then decide which the organisation should use and publish the reasoning.
- B) Decide which figure is correct.
- C) Ask the teams to agree between themselves.
- D) Report both figures with a note.

**Correct answer: A. Least effective: D**

**Explanation:** Conflicting figures for the same measure almost never mean one is wrong; they mean two definitions are in use, and finding the divergence is quick once the definitions are side by side. Option A resolves it and publishes the reasoning, which prevents the recurrence. Option D is least effective: publishing two figures for one measure with a note transfers the confusion to every reader and makes the organisation's own reporting unusable. Option C returns a problem to people who have already failed to resolve it. Option B decides without diagnosing.

**Question 5 (moderate) - Pressure on a finding**

A programme director asks the candidate to reconsider a finding that reflects badly on their programme, suggesting the method may be flawed. What is the most effective response?

- A) Take the methodological challenge seriously and check it properly, then report what is found - whether that confirms, qualifies or overturns the original finding - because the challenge may be right and treating it seriously is what makes the confirmation credible.
- B) Defend the finding; the analysis was sound.
- C) Soften the finding's presentation.
- D) Add caveats acknowledging uncertainty.

**Correct answer: A. Least effective: C**

**Explanation:** A methodological challenge from an interested party may still be correct, and checking costs little compared with the credibility of being able to say it was done. Option A is the response that leaves the lead in the strongest position whichever way it goes. Option C is least effective: softening the presentation of a finding believed to be right, in response to pressure, is a change to the analysis by another route, and it is how findings quietly stop meaning anything. Option D does the same more subtly. Option B may be correct and forgoes the check that would demonstrate it.

**Question 6 (moderate) - A recurring reporting burden**

A candidate's team spends a large share of its capacity producing standing reports, several of which the candidate suspects nobody reads. What is the most effective response?

- A) Find out which are actually used - through access data and by asking recipients what decisions they inform - and propose retiring or automating those that are not, with the capacity released stated explicitly.
- B) Continue; they were requested.
- C) Stop producing the ones with low access figures.
- D) Automate all of them.

**Correct answer: A. Least effective: C**

**Explanation:** This role names removing blockers, and a recurring commitment nobody has re-examined is one of the largest. Option A gathers the evidence and, crucially, states the capacity released, which is what makes retiring a report a decision rather than a request. Option C is least effective: stopping a report unilaterally means it breaks silently for whoever did rely on it, usually at the worst moment, and it costs the relationship. Option D spends effort automating things that should not exist. Option B accepts a permanent cost.

**Question 7 (harder) - An analyst's error already published**

An analyst managed by a candidate produced a figure now used in a published document, and the candidate discovers it is wrong. What is the most effective response?

- A) Take responsibility for the correction personally, notify the users of the figure immediately with the corrected version and what it means for their decisions, and handle the analyst's learning separately and privately.
- B) Ask the analyst to notify the users.
- C) Correct it in the next publication.
- D) Establish first whether the error changes any conclusion.

**Correct answer: A. Least effective: C**

**Explanation:** Two things need separating, and option A separates them: the correction is urgent and organisational, and the analyst's development is neither. Fronting the correction personally is right because the lead is accountable for the team's output and because it protects an analyst who will already feel exposed. Option C is least effective: leaving a wrong figure in a published document while waiting for a scheduled cycle is indefensible if anyone finds it. Option D is a sensible thing to work out and belongs inside the notification, not before it. Option B puts the most exposed person in front of the disclosure.

**Question 8 (harder) - Promoting a data-driven culture**

A delivery team makes decisions largely on opinion and treats a candidate's analysis as a formality. What is the most effective response?

- A) Find a decision they are about to make anyway, do the analysis that would inform it, and bring it before the decision rather than after - because a data-driven culture is built by analysis arriving in time to be useful, not by advocacy about its value.
- B) Raise it with the team's delivery manager.
- C) Explain the value of evidence-based decision making to the team.
- D) Escalate to the head of performance analysis.

**Correct answer: A. Least effective: C**

**Explanation:** Teams stop using analysis when it consistently arrives after the decision, or answers a question nobody asked. Option A changes that by demonstration rather than persuasion, and one useful, timely piece of analysis does more than any number of conversations about the value of evidence. Option C is least effective: telling a team they should value evidence more is heard as a criticism and changes nothing about the timing problem that caused it. Option B and option D both escalate a relationship problem the lead is better placed to solve directly.

**Question 9 (harder) - Strategy a candidate disagrees with**

The head of performance analysis has set a strategic direction a candidate thinks is wrong for their area. What is the most effective response?

- A) Set out the concern with the specific evidence - what would go wrong, in what circumstances, and what would be proposed instead - and if the direction stands, implement it properly while recording what is observed.
- B) Implement it; the strategy is set.
- C) Implement it in the candidate's area with local adjustments.
- D) Continue to make the case until it changes.

**Correct answer: A. Least effective: C**

**Explanation:** This role names assisting, taking forward *and influencing* the strategy, which means the challenge is expected and so is the implementation once it is settled. Option A does both, and recording what is observed is the part that makes the next review evidence-based rather than another exchange of opinions. Option C is least effective: quietly adjusting a strategy locally means the organisation believes it has one thing and has another, and it is discovered at the worst moment. Option D spends credibility relitigating a settled decision. Option B forgoes the influence the role is meant to exercise.

**Question 10 (harder) - A metric that will drive bad behaviour**

A directorate proposes a target on the number of cases closed per caseworker per week. What is the most effective response?

- A) Name how the target would be met - the cheapest way to close more cases is to close them without resolving them, which increases reopened cases and complaints while the number improves - and propose pairing it with reopened case rate and outcome quality.
- B) Agree; throughput is a reasonable measure.
- C) Advise against setting targets on caseworker throughput.
- D) Agree, and monitor for unintended effects.

**Correct answer: A. Least effective: B**

**Explanation:** Option A names the mechanism rather than objecting in principle, which is what makes the argument persuasive to people who need a throughput measure for legitimate reasons - and the paired measures are the practical remedy, because they are hard to move without genuine improvement. Option B is least effective: agreeing without asking how the target will be met is precisely the question this profession exists to ask, and once a target is set it drives behaviour immediately. Option D detects the damage after it has been done to real cases. Option C is a defensible position offered without a route forward.

**Question 11 (harder) - Being an ambassador**

A candidate is asked to present their department's analytics work at a cross-government event. Some of it is strong; one major measurement programme was abandoned. What is the most effective approach?

- A) Present all of it, and be specific about why the abandoned programme did not work, because that is the part the audience can learn from and the candidate's own analysts will hear whether the year they had was described accurately.
- B) Present the strong work.
- C) Present the successes and refer generally to challenges.
- D) Decline; the picture is mixed.

**Correct answer: A. Least effective: C**

**Explanation:** Successes are hard to transfer between contexts and failures are instructive, so the abandoned programme is disproportionately the useful material. Option A also serves the audience nobody plans for - the presenter's own team, who will know immediately whether the account was honest. Option C is least effective: vague reference to "challenges" in front of practitioners who know the specifics reads as evasion and costs more credibility than the abandonment. Option B omits the useful part. Option D forgoes influence indefinitely.

**Question 12 (harder) - Evidence against a candidate's own recommendation**

A measurement approach a candidate introduced last year is producing figures the delivery teams do not trust and largely ignore. What is the most effective response?

- A) Raise it personally, including that it was the candidate's recommendation, establish why the figures are not trusted, and change or withdraw the approach on what is found.
- B) Explain the approach again so teams understand it.
- C) Require teams to use the figures.
- D) Investigate quietly and adjust.

**Correct answer: A. Least effective: C**

**Explanation:** Distrust of a measure among the people closest to the work is usually informative - the figures may genuinely not reflect what teams see, or the definitions may not match their operational reality. Option A investigates and is honest about the ownership, which is what makes it safe for anyone else to raise a problem with something the lead introduced. Option C is least effective: mandating the use of figures people do not believe produces compliance without belief and cements the distrust. Option B assumes the problem is comprehension, which is the least likely of the explanations. Option D reaches a reasonable outcome by a route that looks like concealment.

### Administering this section

- Present the same twelve scenarios to every candidate assessed at this role level, using the same instructions (most and least effective response, or ratings) consistently.
- Keep the answer key out of the candidate's sight until scoring, and score against it rather than against personal judgement, since the key reflects experienced practitioners at comparable levels.
- At debrief, discuss not just which options a candidate chose but the reasoning they gave — several of these scenarios are defensible from more than one angle, and the reasoning is where the signal is, particularly for a role built around coaching and escalation judgement.

### Scoring guidance

- Note whether a candidate would coach an analyst to the answer rather than hand it over (Question 1), and whether they would ask a senior analyst about their reasoning before correcting their method (Question 3) — both speak directly to the coaching this role requires.
- Note whether a candidate would front their own team's error to the people affected, separating the correction from the analyst's private learning (Question 7) — this is one of the more revealing items on how a candidate would handle accountability.
- Note whether a candidate treats a methodological challenge from an interested party as worth checking properly (Question 5), and whether they would demonstrate the value of analysis through timely delivery rather than through advocacy (Question 8).
- Note whether a candidate would challenge a strategic direction with evidence and then implement it properly if it stands, rather than quietly adjusting it locally (Question 9) — this speaks to how the candidate would operate within a chain of accountability.
- Note whether a candidate treats distrust of their own past recommendation as evidence to investigate honestly (Question 12) rather than as a comprehension problem to explain away — a strong indicator of self-awareness and seniority.

## Conclusion

This document has given the assessor four assessments pitched at lead performance analyst, and once scoring is complete the threads are worth drawing together.

The cognitive section tests reasoning structurally - reading a pattern for the cause that generates it, distinguishing a measurement artefact from a change in the world, and asking what a figure was designed to show before asking whether it has moved.

The numeric section tests the arithmetic this role runs on, and one calculation in particular: a completion rate rising from 58% to 66% while starts fall from 24,000 to 18,000 means roughly two thousand fewer people completed. Rates and counts answer different questions, and a great deal of misleading reporting lives in the space between them.

The verbal section tests reading definitions, frameworks and attributed claims exactly. "Should" is not "must". A correction plus a re-review is two conditions. A platform team's estimate of its own data quality is a claim. And a dashboard that is not versioned cannot be used to reproduce a figure quoted last month.

The situational judgement section circles the two halves of this role. A strong lead coaches, which means walking an analyst to an answer rather than handing it over, and fronting the team's corrections personally while handling the learning privately. And a lead is accountable for how analysis is used, which is why the strong answers intervene at the point of interpretation - correcting a misreading in the room, asking how a target would be met before it is set, and investigating why teams do not trust a measure rather than explaining it again.

When scoring, weigh the pattern across all four sections rather than any single item, and record where a candidate's answers diverged from the key and why — that record is what makes the debrief useful and the decision defensible if it is later questioned. Use the same items, time limits and scoring key for every candidate assessed at this role level, and treat this assessment as one input among several: pair it with interview, references, or evidence of past work rather than deciding on it alone. If one thread runs through all four sections, it is that this role's influence rests on being believed — teams accept an unwelcome finding from someone who checked the challenge to it properly, analysts bring problems to a lead who met the last one with a question rather than an answer, and the whole profession's standing in an organisation is set by whether its numbers turn out to be right. Watch for signs of that pattern throughout a candidate's answers, not just in the situational judgement section where it is most explicit.
