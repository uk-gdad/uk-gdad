# Senior DevOps Engineer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a senior DevOps engineer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — pipeline configurations, deployment strategies, availability dashboards, capacity forecasts, incident timelines, security controls, integration build plans, and code review comments — and decisions genuinely made, such as transforming technical requirements into an effective DevOps toolchain, ensuring deployment strategies are repeatable, scalable and highly available, and solving complex problems for the delivery teams the role supports.

At this level, the role delivers and integrates software to form a complete DevOps toolchain, plans and designs large groups of stories, and holds deep technical knowledge that others depend on: delivery teams turn to this person when a deployment fails on a Friday afternoon, junior colleagues turn to them for coaching and mentoring, and architects turn to them to review systems designs. Cognitive ability, numerical reasoning, verbal reasoning, and situational judgement all map directly onto those demands.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for reasoning quality, not only the letter chosen — several items here are deliberately constructed so an experienced candidate's imported assumptions produce a confident wrong answer, and the strongest candidates will show their working. Situational judgement items at this level often turn on whether a candidate makes a risk legible to a senior decision-maker rather than either deferring silently or overriding them; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — pipeline definitions, deployment sequences, environment configurations, access control rules, monitoring alerts, and integration build plans — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately. A short, ungraded warm-up typically precedes the timed section.

For a senior DevOps engineer, cognitive ability is particularly relevant because the role's core professional value is structured technical thinking under constraint: holding many moving parts in mind at once, reasoning from constraints to their consequences, and diagnosing faults through deduction rather than guesswork.

### How this assessment maps to the role

- **Pattern recognition** maps to **Service support**: identifying, locating and fixing complex service faults means recognising recurring signatures across large and noisy telemetry.
- **Logical deduction** maps to **Systems design** and **Systems integration**: designing systems of medium risk and complexity, and co-ordinating build activities across systems, both require reasoning validly from stated constraints to their consequences.
- **Error checking** maps to **Programming and build (software engineering)** and **Modern development standards**: spotting the inconsistency between a specification and its implementation, or between a standard and a submitted change.
- **Prioritisation** maps to **Availability and capacity management** and **Service support**: rapid ranking of what matters most when alerts, requests and deadlines compete.
- **Applied problem solving** maps to **Development process optimisation** and the duty to provide deep technical support to delivery teams: decomposing a tangled build failure, isolating its cause, and recommending a fix.

### Practice questions

**Question 1 (easy) — Pattern recognition in environment naming**

Platform standards require environments to be named `<service>-<env>-<region>` where `env` is `dev`, `test`, `stage`, or `prod`, and `region` is `ldn` or `mcr`. Reviewing infrastructure code, the candidate sees: (1) `licensing-dev-ldn`; (2) `licensing-test-mcr`; (3) `licensing-ldn-stage`; (4) `licensing-prod-ldn`; (5) `licensing-stage-mcr`. Ask which entry breaks the pattern.

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: B**

**Explanation:** The order is fixed: service, environment, region. Entry 3 swaps the last two segments. This tests consistency checking of the kind that matters when automation parses the second segment to decide which credentials to load — a naming convention that looks trivial has real consequences when broken.

**Question 2 (easy) — Logical deduction from a deployment policy**

Policy: "Every change reaching production must have passed the full integration test suite in staging, unless it is an emergency fix approved by the on-call lead." A candidate is told: "This change is in production and did not pass the integration suite in staging." Ask which conclusion must be true.

- A) The change is an emergency fix approved by the on-call lead.
- B) The deployment policy has been breached.
- C) Either the change is an approved emergency fix, or the policy has been breached.
- D) The integration suite was failing for unrelated reasons.

**Correct answer: C**

**Explanation:** The policy is a conditional with one permitted exception; neither A nor B alone is guaranteed by the facts given, and D introduces unstated information. Only the disjunction in C is guaranteed. This tests deducing only what the given information guarantees — the discipline that stops an engineer accusing a team of bypassing controls before checking the emergency change record.

**Question 3 (easy) — Sequencing a pipeline**

Five pipeline stages: Compile must run first; Unit tests requires Compile; Package requires Unit tests; Security scan requires Package; Deploy to test requires both Package and Security scan. Ask which stage must run fourth.

- A) Unit tests
- B) Package
- C) Security scan
- D) Deploy to test

**Correct answer: C**

**Explanation:** Chaining the dependencies gives the only valid order: Compile, Unit tests, Package, Security scan, Deploy to test. This tests constructing an ordered dependency graph — the daily grammar of defining an integration build, where a wrong ordering either fails noisily or, worse, passes silently while checking the wrong artefact.

**Question 4 (moderate) — Error checking an access control matrix**

Access standard: (i) production credentials may be held only by the platform team; (ii) every environment must have at least one team with deploy rights; (iii) delivery teams may deploy to dev and test only. Matrix: dev — delivery deploy, platform deploy; test — delivery deploy, platform none; stage — delivery deploy, platform deploy; prod — delivery none, platform deploy. Ask how many rows are inconsistent with the standard.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Checking each row against each rule: dev, test and prod are all consistent; stage breaches rule (iii), since delivery teams may deploy to dev and test only. Exactly one row is defective. The tempting error is flagging test because the platform team lacks rights there, but rule (ii) only requires some team to hold rights, not the platform team specifically. This tests checking against the rules as written rather than an imagined stricter version — a candidate who invents extra rules generates false positives that erode a real security review's credibility.

**Question 5 (moderate) — Prioritisation on a busy morning**

Four items compete for attention: (1) a production alert — the payments service has breached its error-rate KPI and the delivery team wants diagnostic help; (2) a junior engineer wants their first pipeline change reviewed and merged today; (3) the quarterly capacity forecast is due to the service owner on Friday; (4) a delivery team's staging environment broke an hour ago, blocking their sprint. Ask which sequencing is most defensible.

- A) 1, 4, 2, 3 — live user-facing impact first, then the blocked team, then coaching, then the forecast
- B) 2, 1, 4, 3 — quick reviews first to unblock people
- C) 4, 1, 2, 3 — the staging failure was raised first, so it goes first
- D) 1, 3, 4, 2 — production issues then formal deliverables

**Correct answer: A**

**Explanation:** Item 1 is a live production KPI breach with user-facing impact and comes first; item 4 blocks a whole team and outranks individually scheduled work; item 2 matters but a same-day merge hope is not a same-hour need; item 3 has a Friday deadline that can be planned around. This tests ranking by impact-weighted urgency rather than arrival order (C) or a single dimension taken in isolation (B, D).

**Question 6 (moderate) — Logical deduction about promotion rules**

Release rules: (i) an artefact cannot be promoted to staging until its image is signed; (ii) signing cannot occur until the vulnerability scan reports no critical findings; (iii) promotion to production requires 24 hours in staging. A scan completes clean at 09:00 Tuesday; signing and promotion each take negligible time. Ask for the earliest the artefact can reach production.

- A) 09:00 Tuesday
- B) 09:00 Wednesday
- C) 24 hours after signing, whenever signing happens
- D) 09:00 Thursday

**Correct answer: B**

**Explanation:** The clean scan permits immediate signing and staging promotion from 09:00 Tuesday; the 24-hour soak (rule iii) then permits production from 09:00 Wednesday. This tests converting a policy constraint into a concrete schedule — restating the policy (option C) is weaker than computing the actual time asked for, and the same conversion (release trains, freeze windows, soak periods) recurs throughout deployment-strategy work.

**Question 7 (moderate) — Pattern recognition in an incident timeline**

Timeline: 02:00 nightly batch starts; 02:10 database CPU rises to 85%; 02:15 API latency doubles; 02:30 batch completes; 02:32 CPU returns to 40%; 02:35 latency normalises. The same pattern appears on four of the last five nights; on the fifth, the batch did not run and no latency rise occurred. Ask for the most reasonable first interpretation.

- A) The API service has an unrelated memory leak that happens to coincide with the batch window.
- B) The evidence suggests the batch job's database load is driving the latency; investigate resource isolation or rescheduling.
- C) The database needs to be upgraded immediately to a larger instance.
- D) The correlation is coincidental and five nights is too small a sample to act on.

**Correct answer: B**

**Explanation:** Consistent temporal ordering, a dose-response shape, and a natural experiment (the one batch-free night was the one symptom-free night) together make the batch job the strongest working hypothesis — and B treats it as a hypothesis warranting investigation, not a proven fact. This tests reading a pattern like this one and committing to the cheapest decisive next test, rather than an expensive remediation (C) or an invented alternative mechanism (A) or misapplied statistical caution (D).

**Question 8 (hard) — Multi-constraint scheduling of an integration build**

Co-ordinating an integration build across three systems — Accounts (A), Notifications (N), Reporting (R) — over Monday to Friday, one system per day. Constraints: (i) A before N, since N consumes A's events; (ii) the Reporting team is available Monday and Thursday only; (iii) one full working day of contract testing must sit between A and N; (iv) R after N, since its dashboards read N's delivery receipts. Ask on which day N must be integrated.

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: B**

**Explanation:** R needs the Reporting team and must follow N, so R must be Thursday. N must therefore be on or before Wednesday. N cannot be Tuesday (no day exists between Monday and Tuesday for the required testing gap after an A on Monday), so N must be Wednesday, with A Monday and R Thursday satisfying every constraint. This tests working several interacting constraints (availability, dependency order, mandatory gaps) to a unique feasible schedule — exactly what defining an integration build involves.

**Question 9 (hard) — Deduction from monitoring rules**

Alerting rules: (i) CPU above 90% for 10 minutes fires a capacity alert; (ii) a capacity alert on a customer-facing service pages the on-call engineer; (iii) a page always creates an incident record. This morning there is no incident record for the licensing service, which is customer-facing. Ask which conclusion must be true.

- A) The licensing service's CPU did not exceed 90% at all overnight.
- B) No capacity alert fired for the licensing service overnight.
- C) The on-call engineer was not paged for the licensing service overnight.
- D) The monitoring system was working correctly overnight.

**Correct answer: C**

**Explanation:** Reasoning backwards through the chain, no incident record means no page (rule iii), which is the conclusion that depends on the fewest links and the fewest assumptions. B looks tempting — no page and a customer-facing service does suggest no alert fired — but it additionally assumes the paging mechanism itself worked as designed, which the scenario never guarantees; C is the strictly safest deduction. A does not follow, since CPU could have exceeded 90% for under 10 minutes without firing anything; D confuses intended behaviour with evidence of actual behaviour. This tests distinguishing what the rules guarantee from what the infrastructure actually did — the scepticism that separates confident-but-fragile reasoning from reliable fault diagnosis.

**Question 10 (hard) — Error checking a rollback plan**

A submitted rollback plan: redeploy previous version 2.4.1; restore the database from the pre-deployment snapshot; invalidate the CDN cache; confirm health checks pass. Note: version 2.5.0 added a database migration that adds a column and backfills it. The service takes continuous live writes. Ask for the most serious flaw.

- A) The CDN cache should be invalidated before redeploying the application.
- B) Restoring the pre-deployment snapshot will destroy all data written since the deployment.
- C) Health checks should be confirmed after each step, not only at the end.
- D) The plan does not name the person responsible for each step.

**Correct answer: B**

**Explanation:** The migration is additive, so 2.4.1 will typically run fine against the extra column without needing a snapshot restore — but with continuous live writes, restoring the snapshot discards every transaction accepted since the deployment: real, irreversible data loss. Options A, C and D are legitimate refinements but none destroys data. This tests ranking flaws by consequence when a review surfaces several plausible criticisms at once — irreversible data loss outranks everything else on the page.

**Question 11 (hard) — Applied problem solving under uncertainty**

Builds on a shared CI platform slowed from 8 to 20 minutes over two weeks. Facts: (a) the slowdown affects all teams, not one repository; (b) build agent CPU utilisation is normal; (c) artefact cache hit rate fell from 92% to 31%; (d) a platform storage migration completed two weeks ago; (e) test counts and code size are roughly unchanged. Ask for the most efficient next diagnostic step.

- A) Ask all teams to reduce their test suites until builds return to 8 minutes.
- B) Roll back the storage migration immediately.
- C) Investigate why the artefact cache hit rate collapsed, checking whether the migration changed cache keys, paths, or eviction behaviour.
- D) Add more build agents to compensate for the slowdown.

**Correct answer: C**

**Explanation:** The slowdown is global (a) and agents are not CPU-bound (b), ruling out D and A; the cache collapse (c) is a large, specific anomaly whose timing matches the migration (d), and cache misses would slow every build without stressing CPU. This tests triangulating the strongest signal to its most plausible cause and proposing a cheap, reversible investigation, rather than treating correlation as proof and reaching for a disruptive, possibly-irreversible remediation (B).

**Question 12 (hard) — Deduction about high availability**

Two zones. Rules: (i) the service is available if at least one zone is serving; (ii) a zone is serving if at least two of its three instances are healthy; (iii) a deployment takes one instance out of service at a time in the zone being deployed. During a deployment to zone 1, one instance in zone 2 fails unexpectedly. Ask which statement must be true at that moment.

- A) The service is unavailable.
- B) Zone 1 is not serving.
- C) The service is still available.
- D) Zone 2 is not serving.

**Correct answer: C**

**Explanation:** Zone 1, mid-deployment, has two of three instances healthy — serving, per rule (ii). Zone 2, having lost one instance, also has two of three healthy — also serving. With both zones serving, the service is available under rule (i), so C is guaranteed and A, B and D are false. This tests mechanical rule application while noticing the eroded margin: at this moment, one more instance loss anywhere breaks a zone's quorum — the "failure budget during a deployment" question that a genuinely repeatable and highly available deployment strategy has to answer.

### Administration tips

- Score for whether the candidate checks against the rules as stated, rather than a stricter version drawn from their own organisation's conventions.
- Note whether the candidate distinguishes what a chain of rules guarantees from what the infrastructure or process actually did.
- Watch for whether the candidate ranks flaws or priorities by impact rather than by arrival order or a single convenient dimension.
- For scheduling and dependency items, note whether the candidate works the full constraint set to a unique feasible answer rather than a plausible-looking partial one.
- Score for whether the candidate treats a correlated pattern as a hypothesis warranting a cheap decisive test, not a verdict.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from the candidate's own organisation's conventions rather than the rules stated in the scenario.
- Missing when a candidate's conclusion depends on an unstated assumption that the rules do not actually guarantee.
- Rewarding a prioritisation that follows a single dimension (arrival order, deadline proximity) rather than impact-weighted urgency.
- Accepting an error-checking answer that misses the catastrophic flaw while dwelling on cosmetic ones.
- Missing over-hasty escalation to a disruptive remediation before the mechanism is confirmed.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role actually produces. Calculators are usually permitted; the skill measured is choosing the right calculation, executing it accurately, and interpreting the result in context.

Typical format: an online, timed test of 20 to 40 minutes with 15 to 25 questions, each presenting data — a table, a chart, a short scenario with figures — followed by multiple-choice options. Distractor options are engineered from predictable mistakes: dividing by the wrong denominator, misplacing a decimal, confusing percentage points with percentages.

For a senior DevOps engineer, numeric reasoning is the substance of availability and capacity management: service level objectives are percentages, error budgets are subtractions from them, capacity forecasts are growth rates, cloud cost decisions are rate-times-time calculations, and deployment health is measured in frequencies, failure rates and recovery times.

### How this assessment maps to the role

- **Percentages and error budgets** map to **Availability and capacity management**: converting between percentage targets, minutes of allowable downtime, and budget consumed.
- **Rates and throughput calculations** map to **Systems design** and **Availability and capacity management**: sizing systems against requests per second, headroom targets and growth trajectories.
- **Averages and distributions** map to **Service support**: recovery times, fault durations and queue statistics only guide improvement when the right summary statistic is chosen.
- **Percentage change and trend reading** map to **Development process optimisation**: before-and-after comparisons done with the correct baseline.
- **Cost and resource calculations** map to **Systems design**'s demand for efficient use of resources.
- **Reading tables accurately** maps to toolchain work generally: dashboards, test reports and pipeline analytics are tables, and misreading a row is as damaging as miscomputing it.

### Practice questions

**Question 1 (easy) — Availability percentage to downtime**

A monthly availability KPI is 99.9%. Taking a 30-day month as 43,200 minutes, ask how many minutes of downtime the KPI allows.

- A) 4.32 minutes
- B) 43.2 minutes
- C) 432 minutes
- D) 14.4 minutes

**Correct answer: B**

**Explanation:** 0.1% of 43,200 = 43.2 minutes. This tests converting an availability target into an allowable downtime figure — the roughly-43-minutes-a-month anchor that makes a 20-minute deployment outage visibly half the month's budget.

**Question 2 (easy) — Deployment success ratio**

A toolchain ran 240 production deployments last quarter, of which 15 failed and were rolled back. Ask for the ratio of successful to failed deployments, in simplest form.

- A) 16:1
- B) 15:1
- C) 12:1
- D) 8:1

**Correct answer: B**

**Explanation:** Successful = 240 − 15 = 225; ratio 225:15 = 15:1. The classic error, 240:15 = 16:1 (option A), compares total to failed rather than successful to failed. This tests confirming which two populations a ratio actually compares before dividing — the same care needed when reporting change failure rate (failures over total, a different framing of the same numbers).

**Question 3 (easy) — Percentage change in build time**

Average pipeline build time fell from 12 minutes to 9 minutes after parallel test execution was introduced. Ask for the percentage decrease.

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Decrease 3 minutes ÷ original 12 = 25%. The trap is dividing by the new value (3 ÷ 9 ≈ 33%, option D). This tests anchoring percentage change on the original value — using the wrong denominator overstates a claimed improvement, which a numerate stakeholder will spot.

**Question 4 (moderate) — Error budget consumed**

An SLO is 99.9% availability per 30-day month (error budget 43.2 minutes). So far the service has been down 28.8 minutes. Ask what percentage of the month's error budget remains.

- A) 66.7%
- B) 33.3%
- C) 28.8%
- D) 14.4%

**Correct answer: B**

**Explanation:** Remaining 14.4 minutes ÷ 43.2 = 33.3%. Option A is the percentage consumed, not remaining — reading the final clause of the question carefully is half the mark. This tests error-budget arithmetic of the kind that drives a real release-cadence conversation: with a third of the budget left and a third of the month remaining, the service is exactly on track, but one more typical incident would justify slowing down.

**Question 5 (moderate) — Weighted average pipeline duration**

Three pipelines share a build platform in a week: Pipeline X ran 40 times averaging 6 minutes; Pipeline Y ran 25 times averaging 12 minutes; Pipeline Z ran 35 times averaging 8 minutes. Ask for the average duration per run across the platform.

- A) 8.0 minutes
- B) 8.2 minutes
- C) 8.7 minutes
- D) 9.0 minutes

**Correct answer: B**

**Explanation:** Weighted: (40×6 + 25×12 + 35×8) ÷ 100 = 820 ÷ 100 = 8.2 minutes. Option C is the unweighted mean of 6, 12 and 8 — averaging averages without weighting. This tests weighting by run count when group sizes differ; the unweighted mean overstates the influence of the infrequent, slow pipeline, and a capacity decision based on it would buy the wrong improvement.

**Question 6 (moderate) — Capacity growth forecast**

An artefact repository holds 3.2 TB, growing 12.5% per month. The alert threshold is 4.0 TB. Ask whether the threshold is breached within two months, and what the repository holds at the end of month two.

- A) No — 3.85 TB
- B) Yes — 4.00 TB
- C) Yes — 4.05 TB
- D) Yes — 4.20 TB

**Correct answer: C**

**Explanation:** Growth compounds: 3.2 × 1.125 = 3.6 TB (month 1); 3.6 × 1.125 = 4.05 TB (month 2), above threshold. This tests correctly compounding growth rather than applying it linearly (option A) or over-rounding (option D) — the calculation that tells a candidate the cleanup or quota increase needs scheduling this month, since next month the threshold is already breached.

**Question 7 (moderate) — Cloud cost of rightsizing**

A service runs 6 instances at £0.48 per instance-hour, 730 hours a month. Peak utilisation would be comfortably served by 4 instances. Ask for the monthly saving from rightsizing to 4.

- A) £350.40
- B) £700.80
- C) £1,401.60
- D) £2,102.40

**Correct answer: B**

**Explanation:** Saving = cost of 2 removed instances = 2 × £0.48 × 730 = £700.80. Every distractor is a correct calculation of the wrong quantity (one instance's saving, the cost of the remaining fleet, the full current bill). This tests putting a concrete monthly figure on over-provisioning — a specific number moves a rightsizing ticket up a backlog far faster than a vague impression.

**Question 8 (moderate) — Choosing the right average for recovery time**

Five service faults took 20, 35, 40, 45 and 210 minutes to restore; the 210-minute fault involved waiting for a third-party supplier. Ask for the best summary of typical restoration time.

- A) The mean is 70 minutes, so typical restoration takes about 70 minutes.
- B) The median is 40 minutes, which better represents typical restoration because the 210-minute outlier inflates the mean.
- C) The mean is 70 minutes and the median is 45 minutes, so typical restoration is about an hour.
- D) Typical restoration cannot be estimated from five incidents.

**Correct answer: B**

**Explanation:** Mean = 350 ÷ 5 = 70 minutes; median (middle of the ordered list) = 40 minutes. The 210-minute incident is a known special cause that drags the mean above four of the five observations, making the median the honest "typical" figure — and B states both the figure and the reason. Option C miscomputes the median. This tests choosing the statistic that best represents "typical" when an outlier has an identified special cause, since a 70-minute headline suggests a slow team while a 40-minute median plus a supplier-escalation action tells the true story.

**Question 9 (hard) — Instance count for peak load**

A service must handle a forecast peak of 1,800 requests per second. Each instance processes 250 requests per second at maximum, but the design standard caps instances at 70% of maximum at forecast peak. Ask how many instances are needed.

- A) 8
- B) 10
- C) 11
- D) 15

**Correct answer: C**

**Explanation:** Usable capacity per instance = 250 × 0.7 = 175; instances needed = 1,800 ÷ 175 = 10.29, rounded up to 11. Option A applies the correct division against a 100% ceiling (no headroom at peak); option B rounds down, under-provisioning at the moment of maximum demand. This tests applying a headroom policy before dividing and always rounding capacity up — the margin that absorbs an instance failure or a traffic estimate error exactly when "highly available" is tested.

**Question 10 (hard) — Change failure rate from a table**

Quarterly deployments: April 45 deployments/3 failed; May 60/3; June 80/5; July 50/2. Ask which month had the highest change failure rate, and what it was.

- A) June — 6.25%
- B) April — 6.67%
- C) May — 5.00%
- D) July — 4.00%

**Correct answer: B**

**Explanation:** Rates: April 3÷45=6.67%; May 3÷60=5.00%; June 5÷80=6.25%; July 2÷50=4.00%. April is highest at 6.67%, despite June having the most absolute failures. This tests answering a rate question with the ratio rather than the numerator alone — a busy month with more deployments can "look worse" by raw failure count while being safer per deployment, and acting on the raw count would slow down the team whose rate was actually improving.

**Question 11 (hard) — Compound target for lead time**

Lead time for changes is currently 96 hours. The improvement plan targets a 25% reduction this quarter and a further 25% reduction next quarter. Ask for the target lead time at the end of next quarter.

- A) 48 hours
- B) 54 hours
- C) 57.6 hours
- D) 72 hours

**Correct answer: B**

**Explanation:** 96 × 0.75 = 72 (end of this quarter); 72 × 0.75 = 54 (end of next quarter). Option A wrongly adds the two percentages (25+25=50%). This tests applying each percentage to the current value, not the original — the same compounding applies in reverse to growth, where two successive 25% traffic increases give 56.25%, not 50%, and a capacity plan built on the wrong arithmetic runs out of headroom early.

**Question 12 (hard) — Flaky test rate**

An integration suite ran 1,200 times in a week, reporting 54 failing runs; 18 revealed genuine defects, the rest were flaky. Ask what percentage of all runs were flaky failures, and what proportion of reported failures were flaky.

- A) 3.0% of runs; two-thirds of failures
- B) 4.5% of runs; one-third of failures
- C) 3.0% of runs; one-third of failures
- D) 1.5% of runs; two-thirds of failures

**Correct answer: A**

**Explanation:** Flaky runs = 54 − 18 = 36; as a percentage of all runs, 36÷1,200=3.0%; as a proportion of reported failures, 36÷54=two-thirds. Both parts must be correct, and each distractor gets exactly one part wrong. This tests using two different denominators correctly on the same numbers — 3% of runs failing spuriously sounds small, but two-thirds of all red builds being false alarms is a crisis of trust that hides the 18 genuine defects among the noise.

### Administration tips

- Score for whether the candidate weights by group size before averaging across unequal groups.
- Note whether the candidate divides by the correct base for a percentage change (always the original value).
- Watch for whether the candidate compounds successive percentage changes rather than adding them.
- Score for whether the candidate chooses the summary statistic (mean vs median) appropriate to the data's shape and any identified special cause.
- Note whether the candidate rounds a protective quantity (capacity, headcount) up rather than to the nearest whole number.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of averages across groups of unequal size.
- Missing a percentage change divided by the new value instead of the original.
- Rewarding an added, rather than compounded, sequence of percentage changes.
- Accepting a rate comparison anchored on absolute counts rather than computed rates.
- Missing when a candidate rounds a capacity requirement down instead of up.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role runs on: standards, policies, incident reports, service descriptions, supplier documentation, and stakeholder correspondence. The dominant format presents a passage followed by statements to classify True (the passage guarantees it), False (the passage contradicts it), or Cannot say (neither). Other formats test inference, main-point identification, and judging which rewrite communicates most clearly.

Typical format: an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The candidate must answer from the passage alone — outside knowledge, however expert, is set aside, which is precisely what makes the test hard for experienced engineers, whose professional knowledge constantly volunteers itself.

For a senior DevOps engineer, verbal precision is a core working skill: reading security standards and implementing exactly what they require, reading incident reports and distinguishing what was established from what was assumed, and writing runbooks that other engineers execute at 3am, when only the words on the page are available.

### How this assessment maps to the role

- **Precise comprehension of rules and standards** maps to **Modern development standards** and **Information security**: the difference between "must" and "should", between "all environments" and "production", is the difference between compliance and exposure.
- **True/False/Cannot say discipline** maps to **Service support** and incident work: separating what the evidence establishes from what everyone merely believes.
- **Inference** maps to **User focus**: hearing what a stakeholder wrote and working out the problem behind it, without inventing facts.
- **Clear-writing judgement** maps to **Programming and build (software engineering)** and **Systems design**: choosing the clearest formulation for a document other engineers must execute or review.
- **Comprehension of specifications** maps to **Systems integration**'s co-ordination work: an integration plan is a text before it is a schedule, and misreading it misorders the build.

### Practice questions

**Passage 1 (for Questions 1–3).** *Extract from a departmental deployment standard:* "All production deployments must be performed through the approved continuous deployment pipeline. Manual production changes are permitted only during a declared major incident, and any such change must be recorded in the incident log and reviewed at the next working day's change board. Deployments to non-production environments may be performed manually at the discretion of the delivery team. Teams should aim to deploy to production at least once per week; teams that have not deployed for four weeks will be asked to present their release plan to the service owner."

**Question 1 (easy) — True/False/Cannot say**

Statement: "A manual change to production during a declared major incident is permitted by the standard."

- A) True
- B) False
- C) Cannot say
- D) True only if the change board approves it in advance

**Correct answer: A**

**Explanation:** The passage states manual production changes "are permitted only during a declared major incident," with recording and next-day review obligations. Option D adds a condition the passage does not impose — review is retrospective, not advance. This tests reading the sequence of obligations correctly, since a candidate who believes emergency changes need advance approval would hesitate during an incident when the standard actually authorises action now and scrutiny after.

**Question 2 (easy) — True/False/Cannot say**

Statement: "A team that deploys to production every two weeks will be asked to present its release plan to the service owner."

- A) True
- B) False
- C) Cannot say
- D) True, because the standard requires weekly deployment

**Correct answer: B**

**Explanation:** The presentation requirement applies only to teams that have not deployed for four weeks; a fortnightly team never reaches that threshold. Option D misreads "should aim to deploy weekly" as a hard requirement with this presentation as its penalty, but "should aim" is aspirational language, distinct from the concrete threshold-triggered consequence. This tests distinguishing aspiration from obligation and from a threshold-triggered consequence.

**Question 3 (moderate) — True/False/Cannot say**

Statement: "The approved continuous deployment pipeline includes automated testing."

- A) True
- B) False
- C) Cannot say
- D) True, because continuous deployment implies automated testing

**Correct answer: C**

**Explanation:** Nothing in the passage describes the pipeline's contents; professional knowledge insists any credible CD pipeline includes automated testing, but the passage neither states nor implies it. This tests the hardest habit for experienced candidates in verbal tests: the more expert a reader is, the more background knowledge volunteers "facts" the text never provided.

**Passage 2 (for Questions 4–6).** *Extract from an incident review report:* "At 14:22 the API gateway began returning elevated 502 errors, peaking at 38% of requests. The on-call engineer identified that a configuration change deployed at 14:15 had reduced the connection pool size. The change was rolled back at 14:41 and error rates returned to baseline by 14:44. The configuration change had passed review, but the reviewer had no visibility of production connection metrics at review time. Total user-facing impact lasted 22 minutes. Separately, the report notes that alerting fired at 14:31, nine minutes after errors began, because the alert threshold requires a sustained breach before firing."

**Question 4 (moderate) — True/False/Cannot say**

Statement: "The configuration change caused the elevated 502 errors."

- A) True
- B) False
- C) Cannot say
- D) False, because the change had passed review

**Correct answer: A**

**Explanation:** The passage's own narrative presents the change as the identified cause, and the rollback-recovery sequence is offered as confirmation — within the world of the passage, True. Option D is a non-sequitur: passing review says nothing about causation, and the passage explicitly explains why the review missed it. This tests distinguishing what a report asserts as diagnosis from what merely correlates.

**Question 5 (moderate) — Inference**

Ask which is the most defensible inference from the passage.

- A) The on-call engineer was too slow to respond.
- B) Faster alerting would have reduced user-facing impact by at most nine minutes.
- C) The reviewer was negligent in approving the change.
- D) Connection pool changes should be banned from the deployment pipeline.

**Correct answer: B**

**Explanation:** Errors began at 14:22 and the alert fired at 14:31 — nine minutes elapsed before alerting said anything, so even instantaneous alerting could only have removed those nine minutes. Option A ignores the fast work shown after alerting; C ignores the passage's explicit mitigation (no production visibility at review time); D is an unsupported policy overreaction. This tests bounding the improvement a fix could deliver before choosing between fixes — turning an incident review into a prioritised action list rather than a blame exercise.

**Question 6 (moderate) — True/False/Cannot say**

Statement: "Errors returned to baseline less than five minutes after the rollback."

- A) True
- B) False
- C) Cannot say
- D) True, but only for the API gateway

**Correct answer: A**

**Explanation:** Rollback at 14:41, baseline by 14:44 — three minutes, under five. This tests extracting and computing from timestamps embedded in prose accurately, since the "total user-facing impact" figure that goes in a real report depends on exactly this kind of arithmetic.

**Passage 3 (for Questions 7–9).** *Extract from a security policy circular:* "From 1 April, all container images deployed to any departmental environment must be built from base images maintained in the departmental registry. Images built from external base images may continue to run if deployed before 1 April, but must be rebuilt against departmental base images at their next scheduled release, and in any case no later than 30 June. Exemptions may be granted by the Chief Technology Officer where a supplier product cannot be rebuilt; exempted images must be recorded on the exemptions register and scanned weekly."

**Question 7 (moderate) — True/False/Cannot say**

Statement: "After 30 June, no container image built from an external base image will be running in any departmental environment."

- A) True
- B) False
- C) Cannot say
- D) True, because the policy sets 30 June as the final deadline

**Correct answer: B**

**Explanation:** The passage explicitly provides an exemption route — the CTO may exempt supplier products that cannot be rebuilt, and exempted images continue running (recorded and scanned weekly). This tests reading a general rule while not missing its exemption clause — a common failure mode that leads teams to either panic unnecessarily or report full compliance an audit against the exemptions register would disprove.

**Question 8 (hard) — True/False/Cannot say**

Statement: "An image built from an external base image and deployed on 15 March, whose next scheduled release is 15 July, must be rebuilt before its next scheduled release."

- A) True
- B) False
- C) Cannot say
- D) Cannot say, because the release schedule might change

**Correct answer: A**

**Explanation:** Deployed before 1 April, so the image may continue running, and must be rebuilt "at its next scheduled release, and in any case no later than 30 June" — the earlier of which is 30 June, before the 15 July release. The statement is therefore True. The tempting error reads "next scheduled release" as the sole operative deadline; option D invents contingencies not raised in the question. This tests resolving a compound deadline correctly — the exact structure that trips up real migration plans arriving non-compliant in good faith.

**Question 9 (hard) — Main point**

Ask which sentence best captures the main point of Passage 3.

- A) External base images are insecure and must never be used.
- B) The department is standardising on internally maintained base images, with a transition period and a controlled exemption route.
- C) The Chief Technology Officer must approve all container deployments from 1 April.
- D) All container images must be scanned weekly.

**Correct answer: B**

**Explanation:** The passage establishes a rule, transition arrangements, and a governed exception path; B is the only summary covering all three at the right altitude. Option A overstates (the exemption route contradicts "never"); C inflates the CTO's role; D promotes a detail applying only to exempted images into the headline. This tests producing a summary that is complete and no stronger than the text — an overstated summary triggers unnecessary work, an understated one triggers none.

**Passage 4 (for Questions 10–12).** *Email from a delivery manager:* "Hi — the product team wants the new document-upload feature live before the minister's announcement on the 12th. QA have signed off the happy path but say edge-case testing needs three more days, which takes us past the 12th. The product manager says the announcement traffic will be mostly reads, not uploads. Can we deploy behind a feature flag, enable it for internal users only, and switch it on publicly once edge-case testing completes? Also — separately — the staging environment certificates expire on the 10th; can your team renew them before then?"

**Question 10 (moderate) — Comprehension**

Ask what the email actually requests.

- A) Approval to skip edge-case testing for the upload feature.
- B) A feature-flagged deployment with internal-only enablement, and renewal of staging certificates before the 10th.
- C) An opinion on whether announcement traffic will be reads or uploads.
- D) Deployment of the upload feature to all users before the 12th.

**Correct answer: B**

**Explanation:** The email proposes a specific technical approach and asks a second, separate favour — the certificate renewal. This tests noticing the "also — separately" in a multi-request email, since replying to only the first request generates a follow-up chase in a test and a certificate outage in real life.

**Question 11 (hard) — Inference**

Ask for the most defensible inference from the email.

- A) The delivery manager has already obtained QA's agreement to the feature-flag approach.
- B) If the certificates are not renewed by the 10th, staging will be unavailable for any pre-announcement verification after that date.
- C) The proposed approach means public users would not have access to the upload feature on the 12th.
- D) The minister's announcement will generate no upload traffic.

**Correct answer: C**

**Explanation:** Under the proposal, the feature stays internal-only until testing completes, past the 12th — so public users would not have it on the 12th, which follows necessarily from the proposal's own terms. B goes beyond the text (plausible, not guaranteed); D strengthens "mostly reads" into an absolute the passage does not state. This tests drawing only the conclusion that must hold given the passage — the difference between an aligned announcement and a ministerial surprise.

**Question 12 (hard) — Clear-writing judgement**

A runbook step is being documented. Ask which formulation is clearest for an engineer executing it during an incident.

- A) "Consideration should be given to the restarting of the ingestion service in circumstances where queue depth has been observed to exceed acceptable parameters."
- B) "If queue depth exceeds 10,000 messages for more than 5 minutes, restart the ingestion service: `systemctl restart ingest`. Wait 2 minutes; if queue depth is not falling, escalate to the platform on-call."
- C) "The ingestion service can be restarted when the queue is too deep, which usually helps, though results may vary depending on the situation."
- D) "Restart ingest if needed."

**Correct answer: B**

**Explanation:** B provides a measurable trigger, an exact action, a verification window, and a defined escalation path — everything a stressed 3am reader needs. A is passive officialese that assigns the action to nobody; C hedges every clause into uselessness; D pushes the two hard decisions onto the reader at the worst moment. This tests distinguishing a formulation that genuinely serves an under-pressure reader from one that merely gestures at doing so.

### Administration tips

- Score for whether the candidate applies the three-way verdict strictly: guaranteed (True), contradicted (False), or neither (Cannot say) — regardless of how plausible outside knowledge makes a statement.
- Note whether the candidate catches load-bearing modal verbs and quantifiers (must, should, may, all, any, only, at least, no later than).
- Watch for whether the candidate resolves a compound deadline (e.g. "at the next release, and in any case no later than…") correctly.
- Score inference items on whether the conclusion is the one that must hold, not merely one that is plausible.
- For clear-writing items, score on measurable triggers, named actions, and defined escalation, not on tone alone.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True on the strength of outside expert knowledge rather than the passage.
- Missing when a candidate strengthens a hedged claim ("mostly", "should aim") into an absolute.
- Rewarding a verdict formed before reaching a passage's exception or exemption clause.
- Accepting an answer to only the first request in a multi-part passage or email.
- Missing when a candidate chooses an overstated or dramatic summary over a calibrated, complete one.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses — most and least effective, a full ranking, or independent ratings. There is often no formula: correct answers are set by subject-matter experts and reflect the professional behaviours UK government digital organisations value — user focus, collaboration, ownership, sound escalation, integrity, and inclusion.

Typical format: 8 to 15 scenarios, generously timed (20 to 40 minutes), because the intent is considered judgement rather than speed.

For a senior DevOps engineer, situational judgement is arguably the most role-relevant assessment of all. Technical decisions are rarely made in a vacuum: a failing test suite blocks a deadline, a security control frustrates a delivery team, a junior colleague's mistake surfaces mid-incident. Deep technical knowledge tells the candidate what is true; judgement determines what they do about it — and because this level coaches and mentors more junior colleagues, that judgement is multiplied across the team.

### How this assessment maps to the role

- **Ownership and escalation** map to **Service support** and **Availability and capacity management**: knowing when a fault exceeds one's own remit, and when to inform or escalate rather than quietly absorb.
- **Collaboration and influence** map to **Systems design**, **Systems integration** and **Development process optimisation**: getting evidence to a decision-maker, and building solutions other teams will willingly adopt.
- **Integrity under pressure** maps to **Information security** and **Modern development standards**: whether a control survives a deadline, a senior voice, or a plausible shortcut.
- **Developing others** maps to the duty to provide coaching and mentoring to more junior colleagues: correcting mistakes in ways that grow people rather than shrink them.
- **User focus** maps to the **User focus** skill: distinguishing user needs from stakeholder desires, and championing research even when it slows a popular decision.

### Practice questions

**Question 1 (moderate) — The deadline and the failing tests**

A delivery team must release on Thursday for a public commitment. On Wednesday afternoon, the integration suite shows three failures in the payment reconciliation tests. The delivery manager says the failures are "probably the flaky environment again" and asks for approval to skip the suite for this release. These three tests have not previously been flaky, though the environment has a documented flaky history elsewhere. Ask for the most and least effective response.

- Option A: Approve the skip — the environment has a documented history of flakiness and the deadline is a public commitment.
- Option B: Refuse to skip, and spend the time before Thursday investigating the three failures with the team; if they prove genuinely flaky, document that evidence and release; if they reveal a defect, tell the delivery manager immediately so the release decision can be made with accurate information.
- Option C: Refuse the skip and escalate the delivery manager's request to their line manager as attempted circumvention of quality controls.
- Option D: Approve the skip but ask the team to run the three tests manually after the release goes live.

**Most effective: B. Least effective: C.**

**Explanation:** B converts an opinion ("probably flaky") into evidence before an irreversible decision, and puts the release decision with the accountable manager, properly informed — a discipline the candidate's mentees should absorb too. A gambles payment reconciliation on a hunch the stem deliberately undermines (these tests have not previously been flaky); D is A with a fig leaf, since testing after release measures harm rather than preventing it. C is least effective: a deadline request is normal delivery behaviour, not misconduct, and escalating before investigating damages collaboration and wastes hours that could resolve the question directly. This tests recognising that escalation is a tool for when direct engagement has failed or integrity is genuinely threatened, neither of which is yet true here.

**Question 2 (moderate) — The junior engineer's production mistake**

A junior engineer being mentored ran a cleanup script against production instead of staging, deleting a week of non-critical audit logs; backups exist. They come, distressed, before anyone else has noticed, asking what to do. Ask for the most and least effective response.

- Option A: Tell them to restore from backup quietly; no harm was done, and reporting it would dent their confidence.
- Option B: Guide them through restoring from backup, then support them to report the incident themselves through the normal process, and afterwards work with them on why the mistake was possible — such as production credentials being available where staging was intended — and fix that cause.
- Option C: Take over: restore the data, report the incident, and tell the junior it will be handled from here.
- Option D: Tell them to report it immediately to their line manager before any remediation starts.

**Most effective: B. Least effective: A.**

**Explanation:** B repairs the harm, preserves transparency, develops the junior by having them report it (supported), and treats a human error as a system defect worth fixing. A is least effective: concealing an incident, however minor, corrupts the record, teaches the junior that mistakes are hidden, and turns a recoverable error into a trust problem if discovered. C fixes the data but confiscates the learning. D has the right instinct but the wrong sequence for a low-risk, recoverable situation — remediating first (or in parallel) limits impact, though in a higher-severity incident D's report-first instinct would gain force. This tests treating a mentee's mistake as a coaching and system-design opportunity rather than either concealment or confiscation.

**Question 3 (hard) — The architect's tool and the candidate's evidence**

A senior solutions architect has mandated a secrets-management product for a new service. Operational testing shows it fails over too slowly to meet the service's availability KPI, with benchmark data to support this. The architect has already presented the choice to programme governance; reversing it would be visibly awkward for them. The service goes live in six weeks. Ask for the most and least effective response.

- Option A: Implement the mandated product as instructed — the architect owns the decision and the governance record.
- Option B: Share the benchmark data with the architect privately first, framed as a risk to the availability KPI rather than a critique of the choice, propose options (configuration changes, an alternative product, a revised KPI), and offer to present the findings jointly to governance if a change is needed.
- Option C: Raise the benchmark data directly at the next programme governance meeting so the record is corrected before go-live.
- Option D: Implement the mandated product, but design a contingency migration path to an alternative and document concerns in the risk register.

**Most effective: B. Least effective: A.**

**Explanation:** B gets the evidence to the decision-maker while giving them room to move — private first, options attached, joint presentation offered — treating the KPI, not the architect, as the thing under threat. A is least effective: holding evidence that a service will miss its KPI and silently building it anyway abandons the duty of ensuring deployment strategies are highly available. C corrects the record but ambushes a colleague publicly, converting a solvable technical question into a face-saving contest. D is a defensible hedge but a poor first choice, spending six weeks building around a problem a conversation might simply fix. This tests recognising that at senior level, how evidence reaches a decision-maker is part of the competence being assessed, not an optional social grace.

**Question 4 (moderate) — The KPI breach nobody mentions**

Reviewing dashboards, a candidate notices a supported service has quietly missed its 99.5% availability KPI for the second consecutive month. The service team has not mentioned it in stand-ups, and the monthly report to the service owner describes availability as "broadly on track." Ask for the most and least effective response.

- Option A: Say nothing — it is the service team's report, and raising it would look like policing colleagues.
- Option B: Raise it with the service team first: show them the dashboard, ask how the report was compiled, and support them to correct the report and investigate the misses; if the team resists correcting it, escalate to the service owner directly.
- Option C: Email the service owner immediately with the correct figures, copying the service team.
- Option D: Fix the underlying availability issues without mentioning the reporting discrepancy to anyone.

**Most effective: B. Least effective: A.**

**Explanation:** B combines colleagueship with integrity in the right order — the team may have an innocent explanation, and the conditional escalation guarantees the truth reaches the accountable owner either way. A is least effective: it lets inaccurate reporting continue, and silent awareness discovered later damages the candidate along with the team. C reaches the right destination discourteously, teaching every team to hide dashboards. D fixes symptoms while leaving the governance signal corrupted. This tests correcting information through the people closest to it, with escalation as a committed backstop rather than a first strike.

**Question 5 (moderate) — The stakeholder's desire and the user's need**

A senior stakeholder wants a real-time dashboard of upload statistics for an internal case-working service, and asks for the pipeline and infrastructure work to be prioritised. User research the candidate attended showed caseworkers' dominant pain point is slow document retrieval; nobody raised statistics. The stakeholder says the dashboard "is what the director wants to see." Ask for the most and least effective response.

- Option A: Build the dashboard infrastructure as asked — the stakeholder is senior and the request is explicit.
- Option B: Share the user research findings with the stakeholder, distinguish the director's need (visibility of service performance, perhaps met more cheaply with an existing weekly report) from caseworkers' evidenced need (retrieval speed), and propose validating the dashboard's value with users before committing infrastructure work.
- Option C: Refuse, stating that user research does not support the dashboard.
- Option D: Build both the dashboard and the retrieval improvements by extending the team's timeline without consulting the delivery manager.

**Most effective: B. Least effective: D.**

**Explanation:** B distinguishes user needs from stakeholder desires, represents users internally, and takes the director's underlying need seriously by offering a cheaper way to meet it. C gets the evidence right but the collaboration wrong, casting research as a veto. A spends capacity on an unvalidated desire while the evidenced pain point waits. D is least effective: it looks generous but unilaterally commits the team's time and hides a trade-off instead of surfacing it — this level's job is to make costs visible, not absorb them invisibly. This tests honouring the person, interrogating the request, and keeping prioritisation decisions with those accountable for them.

**Question 6 (hard) — Mid-incident, senior pressure**

During a major incident affecting a public-facing service, a senior manager joins the incident channel and instructs the candidate, as incident lead, to restart the database cluster immediately, "because that fixed it last time." Telemetry suggests the fault is in a downstream cache, and a restart would extend the outage roughly 20 minutes with no benefit if the diagnosis is right. Ask for the most and least effective response.

- Option A: Comply — the manager is senior, and the incident is too urgent for debate.
- Option B: Briefly state the diagnosis and its evidence in the channel, explain the cost of the restart if the cache is at fault, propose testing the cache hypothesis first as it takes two minutes, and proceed with that test unless the manager, so informed, still directs otherwise — noting the direction in the incident log.
- Option C: Ignore the instruction and continue with the plan without responding, since the candidate is incident lead.
- Option D: Ask the manager to leave the incident channel so the technical team can work.

**Most effective: B. Least effective: C.**

**Explanation:** B respects the senior manager's authority while giving them the current evidence and the cost of their proposal, offering a two-minute empirical test and keeping accountability clean through the log. A extends a public outage on a hunch the candidate has evidence against. D picks a jurisdictional fight mid-incident for no operational gain. C is least effective: silent non-compliance leaves the manager's concern unaddressed and models contempt to the team, and if the diagnosis proves wrong, the ignored instruction becomes indefensible. This tests recognising that in incidents, communication is the leadership; silence is almost never the strongest response.

**Question 7 (moderate) — The knowledge silo**

A candidate realises they are the only person who understands the deployment tooling for a critical service, having built most of it. They are about to take two weeks' leave, and in the longer term would like a promotion that moves them away from day-to-day operation. A colleague jokes that they are "un-promotable because un-replaceable." Ask for the most and least effective response.

- Option A: Write a comprehensive wiki page about the tooling before leave.
- Option B: Before leave, write a concise runbook for the most likely failure scenarios and walk one colleague through it; after leave, propose a rotation in which other engineers make routine tooling changes with the candidate reviewing, plus a pairing session each sprint, so knowledge transfers through practice over coming months.
- Option C: Tell the line manager the team needs to hire another senior engineer to cover the tooling.
- Option D: Keep the knowledge as it is — being indispensable is job security, and documentation would go stale anyway.

**Most effective: B. Least effective: D.**

**Explanation:** B engineers knowledge transfer with a short-term mitigation and a long-term mechanism — practice with review, since operational knowledge transfers through deploying, not reading. A is helpful but insufficient alone, since untested documentation fails exactly when needed. C outsources a development problem to a hiring process that will still land on undocumented tooling. D is least effective: engineered indispensability is a bus-factor of one dressed as job security, capping the candidate's own progression and inverting the profession's values, which prize engineers who multiply capability rather than hoard it. This tests recognising that making oneself replaceable is what makes one promotable.

**Question 8 (hard) — The security control that blocks delivery**

A candidate designed a pipeline so container images with critical vulnerabilities cannot be promoted to production. A delivery team's release is blocked by a critical finding in a third-party library; the product manager says the finding is "theoretical — the vulnerable function isn't even called," the fix version breaks their build, and a trade negotiation deadline depends on the release. They ask for the gate to be disabled for this deployment. Ask for the most and least effective response.

- Option A: Disable the gate for this deployment — the product manager owns the risk and the deadline is real.
- Option B: Keep the gate, and work the problem with the team: verify whether the vulnerable path is truly unreachable, check for mitigations (a patched fork, a virtual patch at the gateway, vendor advisories), and if residual risk remains, route a time-boxed, documented exception through the security risk owner rather than deciding it unilaterally — while helping the team plan the proper fix.
- Option C: Refuse and state that no release can happen until the library is upgraded, whatever the deadline.
- Option D: Suggest the team deploy from a branch that predates the vulnerability scan's introduction, since the gate does not apply to it.

**Most effective: B. Least effective: D.**

**Explanation:** B treats security exceptions as decisions with owners, evidence and expiry dates, not favours between colleagues — verifying reachability converts a claim into evidence, and routing residual risk to its accountable owner keeps the decision at the right level. A makes the candidate the unilateral approver of a risk they do not own on an unverified claim. C treats the control as an end rather than a means and ignores legitimate mitigation routes. D is least effective: it is not an exception but a circumvention — advising a covert, unrecorded route around a control the candidate themselves built is worse than A precisely because it is hidden. This tests holding the control, verifying the claim, and moving the decision to its rightful owner.

**Question 9 (moderate) — Coaching versus rescuing at the review**

A junior engineer's pipeline change is due to be demonstrated to the delivery team tomorrow. Reviewing it tonight, the candidate finds it works but is poorly structured: hard-coded environment values, no rollback step, and a misleading stage name. Rewriting it would take an hour; guiding the junior through fixing it would take most of tomorrow morning and tighten the demo timeline. Ask for the most and least effective response.

- Option A: Rewrite it tonight and tell the junior what changed, so the demo goes smoothly.
- Option B: Note the issues as review comments tonight, prioritised — rollback step first, as it is a safety issue — and pair with the junior first thing tomorrow to fix the top items together, accepting the demo may show slightly less polish; treat the rest as follow-ups.
- Option C: Let the demo proceed as is and raise the issues afterwards, to protect the junior's confidence.
- Option D: Postpone the demo until the change meets the candidate's standards.

**Most effective: B. Least effective: A.**

**Explanation:** B separates the safety-critical fix (rollback step) from stylistic ones, has the junior do the fixing alongside the candidate, and lets the demo proceed. A is least effective mentoring disguised as helpfulness: the demo shows work the junior did not do, the learning evaporates, and a pattern is set where rewrites silently backstop every deadline. C protects confidence at the price of shipping a change with no rollback step. D over-weights polish, costing the team feedback for a structural, not safety, concern. This tests separating the safety-critical fix from the stylistic ones and sequencing coaching accordingly.

**Question 10 (hard) — The optimisation that helps one team and harms another**

A candidate identifies a build-cache change that would cut average build time by roughly 30% platform-wide. Rolling it out requires a short migration during which each team's first build after migration runs slow. One delivery team, mid-way through a critical release week, asks for the entire rollout to be postponed a month. Three other teams are asking loudly for the speed-up now. Ask for the most and least effective response.

- Option A: Postpone the whole rollout a month — release weeks are sacred.
- Option B: Roll out to all teams now — three teams outvote one.
- Option C: Roll out now to the three teams who want it, exclude the releasing team until their release completes, and agree a specific migration date with them; communicate the plan and the one-slow-build expectation to everyone.
- Option D: Ask the four teams to discuss it among themselves and report back a consensus.

**Most effective: C. Least effective: D.**

**Explanation:** C notices that the migration is per-team, so the apparent conflict is false — the constraint can be honoured for one team while the benefit flows to three, with explicit expectations set for everyone. A taxes three teams a month of slow builds to spare one team a scheduling conversation; B imposes migration risk on a fragile team's week for no gain a week's wait would not preserve. D is least effective: it abdicates a platform decision to an unstructured negotiation among parties with no shared accountability, and signals the platform's senior engineer will not exercise the judgement the role exists to provide. This tests exercising a platform-level decision directly while communicating it fully, rather than delegating the decision itself.

### Administration tips

- Score for whether the candidate identifies whose decision a scenario actually belongs to (risk acceptance, priority conflict, contract question) and routes accordingly.
- Note whether the response would still look sound a month later — the strongest answers avoid trading a short-term convenience for precedent, drift, or lost trust.
- Watch for quiet, unannounced fixes on shared infrastructure, which score poorly even when technically sound.
- Score for whether a candidate holds a control while genuinely helping the person affected by it, rather than treating it as either self-justifying or optional.
- Note whether the candidate develops others rather than rescuing them — a pattern that recurs across several scenarios at this level.

### Common pitfalls to watch for when scoring

- Crediting maximum escalation as a display of rigour when direct engagement was never tried first.
- Crediting maximum deference to a senior voice against the candidate's own evidence, mid-incident or in design.
- Rewarding a rescue (rewriting a junior's work, absorbing scope silently) over a response that develops the other person.
- Missing the covert-integrity-failure option — a quietly concealed, circumvented, or misreported action dressed as pragmatism.
- Accepting a response where the candidate personally fixes or decides everything, rather than making the system and the people around them better.

## Conclusion

This guide has worked through dependency-graph tracing, configuration checks against standards as written, impact-weighted prioritisation, and correlation-versus-cause reasoning in incident timelines; availability arithmetic, compound growth, weighted averages, and the right denominator for a rate; the boundary between what a passage guarantees, contradicts and merely permits; and the situational judgement calls that define senior engineering careers — holding a security gate while helping the team it blocks, giving evidence to a senior decision-maker without ambushing them, and developing a junior colleague instead of rescuing them.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around escalation, evidence and ownership boundaries. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
