# Senior DevOps Engineer (Management) - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior DevOps engineer on the management track. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a senior DevOps engineer with management responsibilities, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — pipeline configurations, deployment strategies, capacity dashboards, incident reports, security control designs, and sprint plans for large groups of stories — and decisions genuinely made, such as transforming technical requirements into an effective DevOps toolchain, ensuring deployment strategies are repeatable, scalable and highly available, and coaching and mentoring more junior colleagues while still solving complex technical problems personally.

At this level on the management track, the role sits at the meeting point of deep technical delivery and people leadership: planning and designing large groups of stories, supporting delivery teams when they hit problems they cannot solve alone, and developing the engineers around them. That combination — technical authority plus people accountability — is what the four assessment types probe.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for reasoning quality as well as the final choice — several items are deliberately built so an experienced candidate's imported assumptions or category-based heuristics ("production always outranks", "seniority settles it") produce a confident wrong answer. Several situational judgement items deliberately test whether a candidate protects both the technical substance and the human relationship in a scenario, rather than sacrificing one for the other; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — CI/CD pipeline definitions, infrastructure-as-code templates, deployment runbooks, monitoring dashboards, environment naming schemes, and dependency maps — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately. A short, ungraded warm-up typically precedes the timed section.

For a senior DevOps engineer on the management track, cognitive ability is particularly relevant because the role's core professional value is structured thinking applied to complex, interconnected systems, with a second layer of reasoning about people, priorities, and coaching commitments alongside the technology.

### How this assessment maps to the role

- **Pattern recognition** maps to **Development process optimisation**: recognising recurring structures — duplicated pipeline stages, common failure signatures, repeated bottlenecks — across large and messy telemetry and configuration sets.
- **Logical deduction** maps to **Systems design** and **Systems integration**: reasoning validly from standards, dependency rules and constraints to their consequences.
- **Error checking** maps to **Modern development standards** and **Programming and build (software engineering)**: spotting inconsistencies between artefacts — a pipeline that skips a mandated scan, a script that contradicts an agreed specification, a template that breaks a naming convention.
- **Prioritisation** maps to **Availability and capacity management** and **Service support**: rapidly ranking what matters most when several things demand attention at once, made harder — and more important — by coaching and mentoring duties.
- **Applied problem solving** maps to **Information security** and the duty to provide deep technical support to delivery teams: decomposing tangled build, deployment and security problems, forming hypotheses, and recommending the change that fixes the cause rather than the symptom.

### Practice questions

**Question 1 (easy) — Pattern recognition in environment naming**

A toolchain standard requires environments to be named `<service>-<environment>-<region>`, where environment is `dev`, `test`, `stg`, or `prod`, and region is a two-letter code. Reviewing environments created by a junior engineer: (1) `payments-dev-ln`; (2) `payments-stg-ln`; (3) `payments-ln-prod`; (4) `payments-test-mc`; (5) `payments-prod-mc`. Ask which entry breaks the naming pattern.

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: B**

**Explanation:** The order is fixed: service, environment, region. Entry 3 swaps the last two segments. This tests consistency checking of the kind that matters when scripts parsing environment names, alert routing, and cost reports grouped by region all silently misbehave once one entry inverts the pattern — and whether the candidate would explain why it matters, rather than just fixing it, when coaching a junior through the same mistake.

**Question 2 (easy) — Logical deduction from a deployment policy**

Policy: "Every deployment to production must pass the automated security scan, unless an emergency change has been formally approved by the service owner." A delivery team says: "Our release went to production this morning and did not pass the automated security scan." Ask which conclusion must be true.

- A) The team has breached the deployment policy.
- B) The service owner formally approved an emergency change.
- C) Either the service owner approved an emergency change, or the policy has been breached.
- D) The security scan tooling was unavailable this morning.

**Correct answer: C**

**Explanation:** The policy is a conditional with one permitted exception; neither A nor B alone is guaranteed by the facts given, and D introduces unstated information. Only the disjunction in C is guaranteed. This tests deducing only what the given information guarantees — the discipline that stops an engineer accusing a team of bypassing controls before checking the change record, and models the fair-minded behaviour a mentee should learn to copy.

**Question 3 (easy) — Error checking a pipeline stage order**

Standard pipeline order for a containerised service: lint, unit tests, build image, scan image, push image to registry, deploy to staging, integration tests, deploy to production. A junior engineer proposes: lint, unit tests, build image, push image to registry, scan image, deploy to staging, integration tests, deploy to production. Ask for the most important problem with the proposal.

- A) Integration tests should run before deploying to staging.
- B) The image is pushed to the registry before it has been scanned, so an image with known vulnerabilities becomes available for deployment.
- C) Lint should run after unit tests.
- D) There is no problem; the order is equivalent.

**Correct answer: B**

**Explanation:** Pushing before scanning means a vulnerable image sits in the registry where any environment — or any other team consuming that registry — could pull and deploy it before the scan result arrives; the scan stops being a gate and becomes a report. This tests reading an ordered process and asking, for each step, what it assumes has already happened and what it makes possible — the reasoning behind defining an integration build and ensuring security controls are engineered in rather than bolted on.

**Question 4 (moderate) — Prioritisation across delivery and people duties**

Four items compete for attention: (1) a production payments service degrading, error rates doubled in the last hour, on-call has asked for diagnostic help; (2) a release train for another service closes at 15:00 today and the candidate's review is the last remaining gate; (3) a mentee has asked for feedback on their first infrastructure-as-code module, due for demonstration Thursday; (4) a capacity forecast for next quarter is due to the head of engineering by end of week. Ask which sequencing is most defensible.

- A) 1, 2, 3, 4 — live degradation first, then the same-day gate, then coaching, then the forecast
- B) 2, 1, 3, 4 — deadlines always beat incidents
- C) 3, 1, 2, 4 — developing others always comes first
- D) 1, 4, 2, 3 — do the two pieces of analysis first

**Correct answer: A**

**Explanation:** Item 1 is both urgent and high impact; item 2 has a hard same-day deadline blocking another team; item 3 matters but Thursday allows it to follow; item 4 is important but due Friday. Option B ignores live user harm for an internal deadline; C treats mentoring as trumping an active incident; D leaves both time-critical items waiting. This tests sequencing by impact-weighted urgency rather than a fixed rule of thumb such as seniority, deadline order, or personal preference.

**Question 5 (moderate) — Pattern recognition in monitoring data**

Four comparable microservices behind the same gateway, same instance size, similar traffic, same deployment baseline, report the proportion of requests slower than one second over a week: A 2%, B 3%, C 14%, D 2%. Ask for the most reasonable first interpretation of C's figure.

- A) Service C's team is underperforming and should be told to fix their latency immediately.
- B) The figure is an outlier that warrants investigation — it may reflect a measurement difference, a workload difference, or a genuine performance problem.
- C) Services A, B and D are over-provisioned and should be scaled down to match C.
- D) The figures cannot be compared because every service is different.

**Correct answer: B**

**Explanation:** Three comparable services cluster at 2–3%, one sits at roughly five times that — an outlier that is a prompt for inquiry, not a conclusion. Innocent explanations include a different measurement point, a workload difference, or a recent dependency change. This tests validating that like is being compared with like before recommending action — options A and C leap to action without evidence, which on the management track would also damage trust with a supported team.

**Question 6 (moderate) — Logical deduction about release sequencing**

Cutover plan: (i) the new database schema must be migrated before the new application version deploys; (ii) the migration cannot start until the nightly backup completes; (iii) the traffic switch must happen in the same maintenance window as the deployment, or the window immediately after. The backup completes at 02:00; the migration takes one full maintenance window; windows run 02:00–04:00 nightly. Ask for the earliest window in which the traffic switch may occur.

- A) Tonight's window (starting at 02:00 immediately after the backup)
- B) The second window
- C) The third window
- D) The fourth window

**Correct answer: B**

**Explanation:** The migration occupies window 1 (completing at 04:00), so the application deployment cannot happen before window 2; the switch must fall in window 2 or window 3, so the earliest is window 2. This tests working forwards through a dependency chain without skipping the constraint that the migration itself consumes a full window — a runbook that sequences steps incorrectly is not a strategy, it is an outage waiting for a date.

**Question 7 (moderate) — Error checking infrastructure code against standards**

Platform standards: (i) all storage buckets must have encryption at rest enabled; (ii) all production resources must carry a `cost-centre` tag; (iii) no security group may allow unrestricted inbound access on port 22. A template defines: a production bucket, encrypted, tagged; a staging bucket, encryption disabled, no tags; a production security group allowing inbound port 22 from the corporate address range only. Ask how many of the three standards are breached.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Rule (i) applies to all buckets — the staging bucket's disabled encryption breaches it. Rule (ii) applies only to production resources — the untagged staging bucket is out of scope, no breach. Rule (iii) forbids unrestricted port 22 — the security group restricts to a specific range, compliant. Exactly one breach. This tests checking each rule against its actual scope rather than over-flagging a resource the rule never covered — a reviewer who flags non-issues loses credibility as fast as one who misses real ones.

**Question 8 (moderate) — Applied problem solving on a flaky pipeline**

An integration test stage fails roughly one run in five, and re-running without any code change usually passes. Facts: failures occur across many different tests, not one; more common during mid-morning peak; the test environment shares a database with another team's load-testing; unit tests never show the same behaviour. Ask which hypothesis best fits all the evidence.

- A) The application code has a functional bug that the tests correctly detect.
- B) Contention on the shared test database causes intermittent timeouts under load.
- C) The test framework version is incompatible with the language runtime.
- D) The engineers are writing poor-quality tests.

**Correct answer: B**

**Explanation:** A functional bug would fail the same tests consistently, not a shifting set that passes on re-run; a framework incompatibility would affect all runs and likely unit tests too; poor test quality does not explain the mid-morning pattern or the shared-database correlation. Only B explains everything: shared-resource contention produces intermittent, timing-dependent failures spread across many tests, worse at peak, absent from database-free unit tests. This tests insisting an explanation account for all the evidence — the discipline that should be modelled for mentees instead of clicking "re-run" and hoping.

**Question 9 (hard) — Multi-constraint scheduling of a toolchain migration**

Scheduling the artefact repository migration (M), pipeline cutover (P), and team training (T) across Monday to Friday, one activity per day. Constraints: (i) M before P, since new pipelines pull from the new repository; (ii) the vendor's support engineer is available only Monday and Thursday and must attend M; (iii) two full working days of replication are needed after M before P can run; (iv) T must be the day immediately after P. Ask on which day P must take place.

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: C**

**Explanation:** If M is Thursday, replication and training push past the week — impossible; so M must be Monday. Two full replication days (Tuesday, Wednesday) push P to no earlier than Thursday; P on Thursday allows T on Friday, satisfying every constraint; P on Friday would push T outside the week. This tests anchoring the most constrained element (the vendor-dependent M) first and propagating consequences from there — the same technique used when planning large groups of stories.

**Question 10 (hard) — Deduction across a dependency map**

Alpha and Beta both call the authentication library directly; Gamma calls Beta but never calls the library directly; Delta calls neither the library nor any of the other three. A critical vulnerability is announced in the authentication library. Ask which services need assessment.

- A) Alpha and Beta only
- B) Alpha, Beta, and Gamma
- C) Alpha, Beta, Gamma, and Delta
- D) Beta and Gamma only

**Correct answer: B**

**Explanation:** Alpha and Beta are directly exposed. Gamma does not call the library itself but depends on Beta, so a vulnerability there can propagate to Gamma through trusted responses or sessions — a transitive dependency a naive direct-dependency search would miss. Delta has no path to the library and is out of scope; including it wastes scarce assessment effort during an incident. This tests transitive closure — following dependency edges until they genuinely stop — which is how blast radius gets scoped correctly when designing solutions with security controls included.

**Question 11 (hard) — Prioritising remedial capacity actions**

Four issues, with capacity for one this sprint: (1) the build agent pool hits 100% utilisation for two hours every morning, queueing all teams' pipelines; (2) a staging environment will run out of disk space in roughly three weeks; (3) a production service is at 60% of memory limit, trending up two percentage points a month; (4) artefact repository storage costs have risen 40% year on year. Ask which issue should be picked, applying availability and capacity management principles.

- A) Issue 1 — it is causing harm right now to every team's delivery
- B) Issue 2 — it will cause an outage soonest
- C) Issue 3 — production always outranks non-production
- D) Issue 4 — cost growth compounds and should be stopped early

**Correct answer: A**

**Explanation:** Issue 1 is live, daily, organisation-wide harm; issue 2 is serious but comfortably schedulable within three weeks; issue 3 is months from threat at its current trend; issue 4 is a cost-efficiency matter with no availability impact. Option C's rule of thumb fails once the trend arithmetic is read: the production issue is the least urgent of the four. This tests extracting the timescale from each item before ranking, rather than ranking by category label.

**Question 12 (hard) — Problem decomposition under ambiguity**

A delivery team asks to "make deployments faster." Data gathered: pipeline takes 45 minutes end to end; 30 minutes is a manual approval wait; build and test take 12 minutes; deployment itself takes 3 minutes. On questioning, the real complaint is that urgent fixes take half a day to reach production. Ask which change addresses the actual problem most directly.

- A) Parallelise the build and test stages to cut 12 minutes to 6.
- B) Optimise the deployment scripts to cut 3 minutes to 1.
- C) Work with the service owner to introduce a pre-authorised expedited path for urgent fixes, reducing the approval wait.
- D) Buy faster build agents.

**Correct answer: C**

**Explanation:** Two-thirds of the elapsed time is a waiting state, not a computing state, and the stated pain (half a day) is dominated by process, not technology. Options A, B and D optimise the minority of the time and would leave the complaint largely intact; C attacks the dominant term while respecting governance by making the expedited path pre-authorised rather than uncontrolled. This tests measuring first, finding the dominant term, and being willing to discover the fix is a policy conversation rather than a technical task.

### Administration tips

- Score for whether the candidate checks against the rules as scoped, rather than over-flagging a case a rule does not actually cover.
- Note whether the candidate distinguishes a mechanism existing (an approval route, an exemption process) from that mechanism having been exercised.
- Watch for whether prioritisation is by extracted timescale and impact rather than by a fixed category rule of thumb.
- For scheduling and dependency items, note whether the candidate anchors the most constrained element first and propagates consequences.
- Score for whether the candidate insists an explanation account for all the given evidence before committing to it.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from the candidate's own organisation's conventions rather than the rules stated in the scenario.
- Missing over-conclusion — treating a possible fact ("the team breached the policy") as certain when an exception clause has not been ruled out.
- Rewarding over-flagging in error-checking items where a rule's scope does not actually cover the flagged resource.
- Accepting a prioritisation ranked by category ("production first", "seniority first") rather than by extracted timescale and impact.
- Missing when a candidate accepts a hypothesis that fails to explain part of the given evidence.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role genuinely produces — availability figures, pipeline duration statistics, deployment frequency trends, change failure rates, capacity utilisation curves, error budgets, and platform cost breakdowns.

Typical format: an online, timed test of 20 to 35 minutes, usually 15 to 20 questions, each based on a data table or chart. A basic on-screen calculator is normally permitted, and every question is answerable from the data given.

For a senior DevOps engineer on the management track, numeric reasoning is the daily currency of decisions: availability targets are percentages, capacity headroom is a ratio, the case for optimising a process is a before-and-after comparison, and a coaching conversation about a team's flaky tests is far more persuasive when the failure rate and its cost in lost engineer-hours are quantified.

### How this assessment maps to the role

- **Percentages and rates** map to **Availability and capacity management**: availability targets, utilisation percentages, growth rates and error rates.
- **Ratios and proportions** map to **Systems design** and **Systems integration**: sizing decisions and efficient use of resources.
- **Averages and distributions** map to **Development process optimisation**: mean and percentile pipeline durations, and demonstrating that a process change actually improved anything.
- **Trend reading and projection** map to the duty to plan large groups of stories and to initiate remedial action: forecasting when a disk fills or a memory limit is reached.
- **Table and chart comprehension** maps to **Service support** and **Information security**: incident dashboards and cost reports, read accurately under pressure.

### Practice questions

**Question 1 (easy) — Availability percentage to downtime**

A monthly availability target is 99.9%, for a 30-day month. Ask, to the nearest minute, for the maximum downtime allowed while still meeting the target.

- A) 14 minutes
- B) 43 minutes
- C) 72 minutes
- D) 132 minutes

**Correct answer: B**

**Explanation:** 43,200 minutes in the month × 0.001 = 43.2 minutes, rounding to 43. This tests the standard conversion — 99.9% monthly is about 43 minutes, 99.99% about 4.3 minutes — that turns an availability target into an engineering constraint rather than a slogan.

**Question 2 (easy) — Change failure rate**

240 production deployments last quarter, of which 18 caused a degradation or outage requiring remediation. Ask for the change failure rate as a percentage.

- A) 6%
- B) 7.5%
- C) 9%
- D) 13.3%

**Correct answer: B**

**Explanation:** 18 ÷ 240 = 7.5%. Option D is the reciprocal ratio (deployments per failure), a different and also useful number placed as a distractor. This tests fluency in one of the four headline delivery metrics, and noticing when a stakeholder quotes its reciprocal by mistake.

**Question 3 (easy) — Average pipeline duration**

Five pipeline runs took 12, 15, 11, 14, and 18 minutes. Ask for the mean.

- A) 13 minutes
- B) 14 minutes
- C) 15 minutes
- D) 16 minutes

**Correct answer: B**

**Explanation:** Sum 70 ÷ 5 = 14 minutes, sitting centrally between the range's endpoints (11–18) as a sanity check confirms. This tests basic averaging, and in a strong answer, noting that the slowest run is 64% longer than the fastest — a spread worth tightening as much as the mean, since teams plan around worst case, not average.

**Question 4 (moderate) — Capacity headroom and growth**

A service uses 480 GB of an 800 GB allocation, growing 40 GB/month; remedial action is required at 80% utilisation. Ask how many months until the threshold is reached.

- A) 2 months
- B) 4 months
- C) 6 months
- D) 8 months

**Correct answer: B**

**Explanation:** 80% of 800 GB = 640 GB; headroom to threshold = 640 − 480 = 160 GB; 160 ÷ 40 = 4 months. Option D is the time to fill the allocation completely, forgetting the 80% action threshold that exists precisely so remedial work happens before the crisis. This tests converting a policy percentage into an absolute figure before dividing.

**Question 5 (moderate) — Weighted mean time to restore**

6 priority-1 incidents at a mean restore time of 90 minutes, 18 priority-2 incidents at 40 minutes. Ask for the mean restore time across all 24 incidents.

- A) 47.5 minutes
- B) 52.5 minutes
- C) 65 minutes
- D) 57.5 minutes

**Correct answer: B**

**Explanation:** (6×90 + 18×40) ÷ 24 = 1,260 ÷ 24 = 52.5 minutes. Option C is the unweighted average of 90 and 40 — the classic error, since P2s outnumber P1s three to one and the true mean must sit much closer to 40. This tests weighting correctly when reporting service performance from mixed-severity data, protecting against an accidentally flattering or alarming picture.

**Question 6 (moderate) — Deployment frequency trend**

Deployments: 32 in April, 40 in May, 50 in June. Ask for the percentage increase from April to June.

- A) 25%
- B) 36%
- C) 56.25%
- D) 62.5%

**Correct answer: C**

**Explanation:** (50 − 32) ÷ 32 = 56.25%. This tests anchoring on the original value across a two-step comparison, and internalising that monthly growth rates compound rather than add — two successive 25% rises give 1.25 × 1.25 = 56.25%, not 50%.

**Question 7 (moderate) — Cost comparison for rightsizing**

12 instances at £180/month, 20% average CPU utilisation. Proposed: 5 larger instances at £310/month, modelled at 55% utilisation. Ask for the monthly saving.

- A) £310
- B) £610
- C) £520
- D) £1,550

**Correct answer: B**

**Explanation:** Current £2,160; proposed £1,550; saving £610. Each distractor computes a correct but different quantity (the new cost alone, one instance's price). This tests pairing cost arithmetic with headroom judgement — 20% utilisation means paying for idle capacity, while the proposed 55% keeps sensible headroom, since pushing towards 90% would save more money but breach the principle that capacity must absorb spikes and instance failures.

**Question 8 (moderate) — Error budget consumption**

99.9% availability over 30 days (43.2-minute budget). Fifteen days in, 28.8 minutes already consumed. Ask what percentage of the budget is consumed, and the most defensible operational response.

- A) 50% consumed — continue normal release cadence
- B) 66.7% consumed — slow or gate risky releases for the rest of the window
- C) 66.7% consumed — continue normal release cadence since the target is not yet breached
- D) 28.8% consumed — no action needed

**Correct answer: B**

**Explanation:** 28.8 ÷ 43.2 = 66.7% consumed against only half the window elapsed — a burn rate roughly 1.33 times sustainable, projecting exhaustion around day 22. This tests pairing the correct percentage with the correct response: an error budget converts availability arithmetic into a release decision, and a budget burning faster than time elapses is the signal to slow down or gate risky deployments.

**Question 9 (hard) — Build agent queue arithmetic**

A build agent pool has 10 agents. During morning peak, 45 builds/hour arrive, each occupying an agent for 12 minutes on average. Ask for the pool's average utilisation, and whether it is over or under capacity.

- A) 90% — under capacity, no queueing expected
- B) 90% — nominally under capacity, but queueing is likely because arrivals are uneven
- C) 75% — comfortably under capacity
- D) 108% — over capacity

**Correct answer: B**

**Explanation:** Demand 45×12=540 agent-minutes/hour; supply 10×60=600 agent-minutes/hour; utilisation 90%. Nominally under capacity, but demand clusters (stand-ups end, merges land together) and queueing theory's practical lesson is that waiting times grow sharply as utilisation approaches 100% with uneven arrivals — bursts will regularly exceed 10 concurrent builds. This tests recognising that a resource can be simultaneously under capacity on average and painfully congested in practice.

**Question 10 (hard) — Multi-service SLA table**

Four services: Identity, target 99.95%, achieved 99.97%, 120M requests, 0.02% error rate; Payments, target 99.9%, achieved 99.85%, 45M, 0.11%; Notifications, target 99.5%, achieved 99.6%, 300M, 0.35%; Reporting, target 99.0%, achieved 99.4%, 15M, 0.5%. Ask which service failed its availability target, and approximately how many requests Notifications served with errors.

- A) Payments failed; Notifications served about 1.05 million error requests
- B) Payments failed; Notifications served about 105,000 error requests
- C) Reporting failed; Notifications served about 1.05 million error requests
- D) No service failed; Notifications served about 300,000 error requests

**Correct answer: A**

**Explanation:** Row-by-row comparison against each service's own target shows only Payments failed (99.85% < 99.9%). 0.35% of 300 million = 1,050,000. This tests comparing each achieved figure against its own row's target rather than a remembered "standard" target, and writing out the zeros when taking a percentage of millions.

**Question 11 (hard) — Projecting compound growth**

A test database holds 200 GB, growing 10% per month, compounding; the storage limit is 300 GB. Ask after how many whole months the database first exceeds the limit.

- A) 3 months
- B) 4 months
- C) 5 months
- D) 6 months

**Correct answer: C**

**Explanation:** Compounding month by month: 220, 242, 266.2, 292.8, 322.1 GB — first exceeding 300 after month 5. A linear shortcut ("100 GB needed at 20 GB/month = 5 months") happens to land close here but fails badly with different numbers, since the growth base increases each month. This tests compounding correctly whenever the stem says compounding — the difference between a vague warning and a projection with a date attached.

**Question 12 (hard) — Comparing before-and-after process metrics**

Before an optimisation: 60 releases/quarter, 5-day mean lead time, 10% change failure rate. After: 90 releases/quarter, 3-day mean lead time, 8% change failure rate. Ask whether the absolute number of failed releases went up or down, and what happened to successful releases.

- A) Failures fell from 6 to 5.4; successes rose from 54 to 82.8
- B) Failures rose from 6 to 7.2; successes rose from 54 to 82.8
- C) Failures rose from 6 to 7.2; successes fell from 54 to 48.6
- D) Failures fell from 6 to 5.4; successes rose from 54 to 84.6

**Correct answer: B**

**Explanation:** Before: failures 10% of 60 = 6, successes 54. After: failures 8% of 90 = 7.2, successes 82.8. The failure rate fell but absolute failures rose slightly because volume rose 50%, while successes rose dramatically. This tests not assuming a falling rate means falling absolute failures — rates and absolutes answer different questions, and a candidate should be able to state both unprompted.

### Administration tips

- Score for whether the candidate weights by group size before averaging across unequal groups (incidents, months, run counts).
- Note whether the candidate compounds successive percentage changes rather than adding them.
- Watch for whether the candidate applies a stated action threshold (80%, error budget pace) rather than computing time-to-full.
- Score for accuracy on large-number percentage calculations (decimal-place slips).
- Note whether the candidate pairs a correct calculation with the operational judgement the question actually asks for, where both are required.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of averages across groups of unequal size.
- Missing an added, rather than compounded, sequence of percentage changes.
- Rewarding a capacity answer that computes time-to-full instead of time-to-action-threshold.
- Accepting a decimal-place slip on a percentage of a large number.
- Missing when a candidate reports a rate correctly but fails to connect it to the absolute-number question actually posed.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, interprets and evaluates written material of the kind this role deals with daily — extracts from technology standards, security policies, incident reports, change advisory notes, supplier documentation, and stakeholder emails.

Typical format: an online, timed test of 15 to 25 minutes. The commonest style presents a passage followed by statements to classify True, False, or Cannot Say. Other styles test inference, main-point identification, and judging which rewrite is clearest. The critical rule: answer only from the passage — a statement can be true in real life and still Cannot Say on the test.

For a senior DevOps engineer on the management track, verbal precision is a core professional skill: implementing security requirements exactly as mandated, distinguishing what an incident report evidences from what it assumes, and writing runbooks and reviewing documentation other engineers depend on.

### How this assessment maps to the role

- **Literal comprehension** maps to **Modern development standards** and **Information security**: reading mandates precisely — what is required, recommended, exempted, and under which conditions.
- **True/False/Cannot Say discipline** maps to **Service support** and incident practice: separating what was observed from what was assumed.
- **Inference** maps to **Systems design** and **Systems integration**: sound inference, and knowing where it must stop and a clarifying question must be asked instead.
- **Clear-writing judgement** maps to the coaching and mentoring duty and to **User focus**: recognising which formulation is clearest for a mixed or stressed audience.
- **Identifying the main point** maps to **Development process optimisation**: extracting the central claim of a proposal or retrospective from its surrounding detail.

### Practice questions

**Passage 1 (for Questions 1–3).** "All services handling personal data must encrypt data in transit using the department's approved TLS configuration. Services that additionally handle special category data must also encrypt data at rest using keys managed by the central key management service. Development and test environments are exempt from the at-rest requirement provided they contain only synthetic data. Any exemption beyond this must be approved in writing by the Chief Information Security Officer."

**Question 1 (easy) — True/False/Cannot Say**

Statement: "A production service handling special category data must encrypt data both in transit and at rest."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Special category data is personal data, so the in-transit rule applies; the passage explicitly adds the at-rest rule for special category data; the environment is production, so the test-environment exemption does not apply. Both requirements hold: True. This tests layering rules exactly as written — general rule, additional rule, exemption, exemption-to-the-exemption — the way they must be implemented in a real compliance check.

**Question 2 (easy) — True/False/Cannot Say**

Statement: "A test environment containing real customer records is exempt from the at-rest encryption requirement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption applies only "provided they contain only synthetic data"; real customer records fail that condition, so the exemption does not apply — False. This tests catching a conditional proviso rather than stopping at "development and test environments are exempt" — engineers who skim provisos build non-compliant environments.

**Question 3 (moderate) — True/False/Cannot Say**

Statement: "The Chief Information Security Officer has approved at least one exemption."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage establishes an approval mechanism but says nothing about whether it has ever been exercised — Cannot Say. This tests the distinction between a rule existing and a rule having been used, which recurs throughout governance reading: "the process allows X" never entails "X has happened."

**Passage 2 (for Questions 4–6).** "Incident 4711 began at 09:14 when the payments service returned elevated error rates. The on-call engineer identified that a configuration change deployed at 09:02 had reduced the database connection pool size. The change was rolled back at 09:41 and error rates returned to normal by 09:45. The change had passed automated tests, which do not exercise the service under production-level load. A review of the change record shows peer review was completed, but the reviewer was not aware that the pool size parameter had been altered alongside the intended change."

**Question 4 (moderate) — True/False/Cannot Say**

Statement: "The incident lasted 27 minutes from onset to full recovery."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Onset 09:14, full recovery ("returned to normal") 09:45 — 31 minutes, not 27 (which subtracts onset from the rollback time, not the recovery time). This tests anchoring a quoted duration on the exact events named, since incident durations drive availability reporting and a report that measures to the remedial action rather than to recovery understates user impact.

**Question 5 (moderate) — True/False/Cannot Say**

Statement: "If the automated tests had exercised the service under production-level load, the incident would have been prevented."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** It is plausible that load-realistic tests would have caught the fault, but the passage does not establish that they would have — Cannot Say. This tests distinguishing a plausible-mechanism hypothesis from an established fact, the discipline that keeps an incident review's recommendations honest.

**Question 6 (moderate) — Inference**

Ask for the best-supported conclusion from Passage 2.

- A) The peer review process failed because the reviewer was careless.
- B) The change contained an alteration the reviewer did not know about, so the review could not assess it.
- C) Automated tests are not worth running since they missed this fault.
- D) The on-call engineer should have detected the problem before 09:14.

**Correct answer: B**

**Explanation:** The passage states peer review was completed but the reviewer was unaware of the pool-size alteration — the direct conclusion. A adds an unsupported judgement of carelessness; C overgeneralises from one gap; D invents a duty the passage never mentions. This tests accepting the conclusion the text supports rather than a more dramatic alternative.

**Passage 3 (for Questions 7–9).** "The platform team proposes standardising all services on a single container orchestration platform. Currently, six services run on the strategic platform, three on a legacy scheduler, and one on a bespoke arrangement maintained by a single engineer. Migration of the legacy services is estimated at four sprints in total, while the bespoke service is estimated at six sprints alone due to undocumented dependencies. The proposal argues that standardisation will reduce the operational burden of maintaining three sets of tooling, monitoring and on-call knowledge, and will simplify recruitment and onboarding. The service owner of the bespoke service opposes the timing, citing a peak usage period in the next quarter."

**Question 7 (moderate) — True/False/Cannot Say**

Statement: "Migrating all four non-standard services is estimated to take ten sprints in total."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Four sprints for the three legacy services "in total" plus six sprints for the bespoke service "alone" = ten. This tests attaching each number to its correct scope, since misattributing scope words is how migration plans get misquoted in governance papers.

**Question 8 (hard) — True/False/Cannot Say**

Statement: "Standardisation will reduce the operational burden of maintaining multiple sets of tooling."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage reports that "the proposal argues" this — reporting a claim is not endorsing it as established fact. Cannot Say. This tests the attribution shield — the difference between "X is true" and "the document argues X" — which matters when summarising a supplier's whitepaper or a team's business case upwards; dropping the attribution inflates confidence all the way up the chain.

**Question 9 (hard) — Identifying the strongest objection**

Ask which point, based only on Passage 3, would be most substantive to raise when reviewing the proposal.

- A) The proposal should name the specific monitoring tools to be retired.
- B) The single-engineer dependency on the bespoke service is a risk that migration would reduce, but the same dependency plus undocumented dependencies make its six-sprint estimate the least reliable figure in the plan, and the migration is proposed to overlap the service's peak period.
- C) Six services already run on the strategic platform, so the proposal is unnecessary.
- D) The service owner's objection should be overruled because standardisation benefits recruitment.

**Correct answer: B**

**Explanation:** B synthesises three flagged facts — one maintaining engineer, undocumented dependencies, opposed timing over a peak period — into the observation that the riskiest, least estimable part of the plan is scheduled against a real business constraint. This tests integrating the evidence into the review comment that would actually change the plan, rather than reacting to one fragment of it.

**Question 10 (moderate) — Clear-writing judgement**

Reviewing a junior engineer's draft runbook, ask which version of the rollback instruction is clearest and safest.

- A) "In the event of the observation of anomalous error rate elevation subsequent to deployment, consideration should be given to the initiation of rollback procedures."
- B) "If error rates rise above 2% within 15 minutes of deployment, run `deploy rollback` and notify the on-call lead."
- C) "Roll back if things look wrong."
- D) "Errors after deploying might mean you need to roll back, which can be done using the usual command, if appropriate."

**Correct answer: B**

**Explanation:** B gives a measurable trigger, a time bound, a concrete action, and a communication step. A buries the instruction under nominalisations and passive constructions; C replaces criteria with vibes; D hedges every clause. This tests the editorial judgement operational writing demands — a stressed reader with no context must be able to act on it correctly.

**Question 11 (hard) — Comprehension of a change freeze notice**

Notice: "A change freeze applies to all citizen-facing services from 18 December to 2 January inclusive. Emergency fixes remain permitted under the expedited process. Internal-only services are out of scope of the freeze, except those on the shared payments infrastructure, which are in scope. Changes approved before 18 December but not yet deployed must be re-approved after the freeze ends." Ask which deployment would be permitted on 27 December without invoking the emergency process.

- A) A routine feature release to a citizen-facing service, approved on 15 December.
- B) A routine configuration change to an internal-only reporting service that does not use the shared payments infrastructure.
- C) A routine update to an internal-only service that runs on the shared payments infrastructure.
- D) No deployment of any kind is permitted during the freeze.

**Correct answer: B**

**Explanation:** A is frozen (citizen-facing, and prior approval does not exempt it — the notice requires re-approval after the freeze). C is frozen (internal but on the payments infrastructure, which is explicitly back in scope). D overstates, since internal-only services off that infrastructure were never frozen. B is genuinely internal-only and off the payments infrastructure, so it may proceed. This tests reading layered scope rules with exceptions-to-exceptions accurately — the everyday grammar of operational notices.

**Question 12 (hard) — Main point of a policy consultation extract**

"Departments are increasingly adopting continuous deployment, in which changes pass automatically to production once all quality gates succeed. This consultation does not propose prohibiting continuous deployment. It proposes that where continuous deployment is used for services above the significant-impact threshold, departments must be able to demonstrate that their automated quality gates provide assurance at least equivalent to the manual change approval they replace, and must retain the ability to suspend automatic promotion during major incidents. Responses are invited on the equivalence criteria in particular." Ask which statement best captures the main point.

- A) The consultation proposes banning continuous deployment for significant services.
- B) The consultation proposes that automated gates for significant services must demonstrably match the assurance of the manual approvals they replace, with a suspension capability, and seeks views especially on the equivalence criteria.
- C) The consultation concludes that manual change approval is obsolete.
- D) The consultation requires all departments to adopt continuous deployment.

**Correct answer: B**

**Explanation:** The passage explicitly disclaims prohibition, treats manual approval as the assurance baseline rather than obsolete, and proposes conditional requirements rather than mandating adoption. This tests preserving a proposal's qualifiers — "where used", "above the threshold", "at least equivalent" — when extracting its main point, so a drafted response answers the actual consultation question.

### Administration tips

- Score for whether the candidate applies the three-way verdict strictly, regardless of how plausible outside knowledge makes a statement.
- Note whether the candidate catches conditional or scope words (unless, provided that, except, in total, alone) that carry the operative meaning.
- Watch for whether the candidate treats a reported claim ("the proposal argues") as a claim, not an established fact.
- Score inference items on whether the conclusion is the one that must hold, not merely one that is plausible or dramatic.
- For clear-writing items, score on measurable triggers and defined actions, not on tone alone.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True on the strength of outside expert knowledge rather than the passage.
- Missing when a candidate skims past a conditional proviso attached to an exemption.
- Rewarding a summary or inference that drops the source document's attribution and treats a reported claim as fact.
- Accepting a timeline statement anchored on the wrong named event (an action rather than an observed outcome).
- Missing when a candidate chooses a dramatic inference (blame, obsolescence, prohibition) over the quieter, better-supported one.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. There is rarely a mathematically provable answer; responses are scored against the judgement of experienced practitioners and the behaviours UK government digital organisations value — user focus, collaboration, ownership, appropriate escalation, developing others, and inclusion.

Typical format: 10 to 20 scenarios, often untimed or generously timed. Question styles include picking the most effective response, most and least effective from four options, full ranking, or independent effectiveness ratings.

For a senior DevOps engineer on the management track, situational judgement is arguably the most role-relevant assessment of the four: scenarios are not hypothetical, and in each case the technically correct action and the humanly effective action must be found together, because at this level delivery happens through other people as much as through the candidate's own keyboard.

### How this assessment maps to the role

- **Ownership and escalation judgement** map to **Service support** and **Availability and capacity management**: knowing when to fix, when to escalate, and when to initiate remedial action on one's own authority.
- **Developing others** maps to the duty to provide coaching and mentoring to more junior colleagues: turning mistakes into learning, delegating stretching work safely, and giving feedback that changes behaviour without damaging confidence.
- **Collaboration and influence** map to **Development process optimisation** and **Systems design** review duties: leading through expertise, not authority alone.
- **Integrity under pressure** maps to **Information security** and **Modern development standards**: whether a control survives a deadline, a plausible shortcut, or a colleague's frustration.
- **User focus** maps to the **User focus** skill: keeping the citizen or end user's interest visible when internal pressures push it out of frame.

### Practice questions

**Question 1 (easy) — A junior engineer's mistake reaches production**

A mentee accidentally applies a configuration change to production instead of staging, causing a brief, minor degradation they immediately notice and revert themselves. Visibly shaken, they come straight to the candidate and admit what happened. Ask for the most effective first response.

- A) Thank them for their honesty and quick revert, check the service is stable, then arrange to review together how the mistake became possible — including whether guard rails are missing.
- B) Report the incident to their line manager so it can be recorded in their performance file.
- C) Tell them not to worry about it and move on — everyone makes mistakes.
- D) Remove their production access until they have completed additional training.

**Correct answer: A**

**Explanation:** A reinforces the behaviour worth repeating (immediate honesty and remediation), verifies live service state first, and converts the mistake into learning at both individual and system level — a change that can be applied to production by accident reveals a missing guard rail, which is the candidate's responsibility to fix, not the junior's. B punishes disclosure, teaching concealment of the next mistake. C wastes the learning. D is disproportionate to a self-caught, self-reverted minor error. This tests the blameless-but-thorough standard that is also the coaching duty under pressure.

**Question 2 (easy) — Deadline pressure to skip a quality gate**

A delivery manager asks to let a release skip the automated security scan "just this once" because a ministerial announcement depends on shipping today and the scan queue is three hours behind. Ask for the most effective response.

- A) Agree — the announcement is clearly the priority and the code is probably fine.
- B) Refuse and tell the delivery manager that process is process, ending the conversation.
- C) Explore options that protect both goals: expedite the scan for this release, check whether the deployment can proceed to a gated state pending the result, and if no compliant path exists in time, escalate jointly to the service owner with a clear statement of the risk.
- D) Quietly run the release through a reduced version of the scan assembled personally, without telling anyone.

**Correct answer: C**

**Explanation:** C treats the control as a risk-management tool: it looks for a legitimate fast path, considers a technical compromise that keeps the gate meaningful, and if the tension cannot be resolved, moves the decision to the accountable owner with the risk stated plainly. A abandons a security control under schedule pressure; B is procedurally defensible but generates an adversary rather than an ally; D is an undocumented, unofficial control substitution nobody approved. This tests protecting the substance of a control, the relationship, and the transparency of the decision, all at once.

**Question 3 (moderate) — Coaching versus doing it yourself**

A junior engineer has been stuck on a pipeline fault for two days that the candidate is fairly sure they could fix in twenty minutes. The sprint goal is not yet at risk, but will be if the fault persists another two days. Ask for the most effective response.

- A) Fix it immediately — the team's throughput comes first.
- B) Pair with them: ask them to walk through what they have tried, guide them with questions towards the diagnosis, and let them implement the fix.
- C) Leave them to struggle — learning requires productive difficulty and they will figure it out eventually.
- D) Reassign the task to a mid-level engineer and give the junior something easier.

**Correct answer: B**

**Explanation:** The scenario's detail — the sprint can afford a coaching investment — makes B the answer that resolves the tension rather than picking a side: pairing bounds the time cost, transfers diagnostic method, and leaves the fix in the junior's hands, building capability and confidence. A trades a twenty-minute win for a repeated dependency. C misapplies "productive struggle" to two days of no progress. D solves the task but signals the junior was not worth investing in. This tests delivering through developing people when the scenario tells the candidate there is slack to do so.

**Question 4 (moderate) — Discovering a colleague's shortcut**

Reviewing pipeline configurations, the candidate discovers a respected mid-level engineer on a neighbouring team disabled the failing accessibility test suite "temporarily" three months ago, on a citizen-facing service. Ask for the most effective response.

- A) Re-enable the suite personally and say nothing — the configuration is wrong and access exists.
- B) Raise it directly with the engineer: ask what happened, explain the user impact of a citizen-facing service shipping unchecked accessibility regressions for three months, and agree a plan to fix the failures and re-enable the suite — offering help if the failures are the blocker.
- C) Report the engineer to their line manager for breaching standards.
- D) Note it for the next quarterly standards audit.

**Correct answer: B**

**Explanation:** Starting with the user impact rules out D's leisurely timescale; A fixes the configuration but not the situation, and acting silently in someone else's codebase corrodes trust; C escalates before conversation, when "temporarily" suggests an intention that decayed rather than defiance. B addresses urgency, treats a colleague as a professional, uncovers the real blocker, and models championing user needs — which explicitly includes accessibility. This tests direct engagement before escalation, when no immediate harm requires otherwise.

**Question 5 (moderate) — An overloaded on-call colleague**

An engineer mentions, half-jokingly, in a one-to-one, that they have been paged four nights this week and their partner is "about ready to throw the laptop out of the window." Most alerts are false positives from a noisy threshold. Sprint commitments are tight. Ask for the most effective response.

- A) Sympathise, and suggest they use noise-cancelling settings on their phone.
- B) Treat it as two linked problems and act on both: rebalance or relieve their on-call load now to protect wellbeing, and prioritise tuning the noisy alert threshold this sprint as the root cause — even at some cost to sprint scope.
- C) Tell them on-call disruption is part of the role at their level and the rota is fixed for the quarter.
- D) Remove them from the on-call rota permanently.

**Correct answer: B**

**Explanation:** B recognises an immediate human problem (four disturbed nights is a health and safety issue) and a technical root cause squarely inside availability and capacity management — a noisy threshold that pages for non-incidents also erodes trust in real alerts. A treats the symptom's symptom; C sacrifices a person to a rota artefact; D overcorrects without fixing what will wake everyone else. This tests care for people, ownership of root causes, and honest re-prioritisation rather than treating the sprint plan as sacred.

**Question 6 (moderate) — Conflicting review feedback**

A candidate identifies a scaling flaw in a junior engineer's systems design; separately, a senior engineer on another team already reviewed it and commented "looks good to me." The junior is about to start building. Ask for the most and least effective response among: (1) explain the flaw directly, walk through the failure scenario, and loop in the other reviewer so all three converge on a revised design; (2) tell the junior to go with the other reviewer's approval since seniors disagree and theirs came first; (3) post in the team channel that the design has a flaw the other reviewer missed; (4) ask questions in review that lead the junior to discover the flaw themselves, then agree next steps.

- A) Most effective: 1; least effective: 3
- B) Most effective: 4; least effective: 2
- C) Most effective: 1; least effective: 2
- D) Most effective: 4; least effective: 3

**Correct answer: A**

**Explanation:** Both 1 and 4 are strong coaching moves, but 1 resolves the conflicting sign-off directly by converging the reviewers, unblocking the junior cleanly, while 4's Socratic route leaves the conflict standing and delays a time-sensitive decision. Option 2 is poor (ships a known flaw, privileges sequence over substance), but 3 is worse: broadcasting a colleague's oversight publicly before a private conversation damages trust with both the junior and the senior. This tests resolving a design disagreement directly and privately first, escalating publicly only as a last resort.

**Question 7 (hard) — Capacity warning versus roadmap pressure**

Monitoring projects a citizen-facing service will exhaust database connections within about six weeks; fixing it properly needs two sprints of re-architecture. The product manager wants those sprints spent on a high-profile feature promised to the programme board, suggesting "we'll deal with capacity when it actually breaks." Ask for the most effective response.

- A) Accept the product manager's call — they own the backlog and the prioritisation.
- B) Quantify the risk and its timeline in business terms, present interim mitigations (connection pooling changes, load shedding) that narrow but do not remove the risk, and take the trade-off with a recommendation to the service owner for an informed decision — recording the decision and its rationale.
- C) Instruct engineers to work on the re-architecture anyway without telling the product manager, since availability is the candidate's accountability.
- D) Email the programme board directly warning that the feature will cause an outage.

**Correct answer: B**

**Explanation:** "Deal with it when it breaks" for a citizen-facing service converts a manageable task into a future major incident with user harm, but the response must work through the people who own the trade-off. B translates the projection into business terms, generates de-risking options, makes a clear recommendation, and routes the residual decision to the accountable owner with the rationale recorded. A abdicates advisory responsibility; C is shadow work that breaks trust if discovered; D skips escalation levels and burns the product relationship. This tests making risk undeniable, making options real, and keeping the decision owned and recorded.

**Question 8 (hard) — A standard the candidate disagrees with**

The department mandates a new deployment tool; a proof of concept shows it will significantly slow the candidate's teams' pipelines. Engineers are frustrated and some suggest quietly keeping the old tool "until someone notices." Ask for the most effective response.

- A) Allow the teams to keep the old tool quietly — the mandate was made without understanding their context.
- B) Adopt the mandated tool as required, and separately submit the proof-of-concept evidence through the standards governance route, requesting either an exemption or a change to the standard — telling the teams openly that this is how the disagreement will be pursued.
- C) Adopt the tool and tell the teams mandates are not up for discussion.
- D) Delay adoption indefinitely by citing "integration complexities" in status reports.

**Correct answer: B**

**Explanation:** B complies with legitimate authority while pursuing disagreement transparently through the route that can actually change the outcome, armed with credible evidence — and tells the teams how the challenge is being pursued, modelling constructive dissent rather than quiet non-compliance. A sets teams up for a painful forced migration later; C wastes both the evidence and a teaching moment; D is dishonesty in slow motion. This tests upholding standards while improving them through the front door, rather than defying or merely tolerating them.

**Question 9 (hard) — Production incident during a team ceremony**

Facilitating a much-needed retrospective, fifteen minutes in a monitoring alert fires for a citizen-facing service: error rates elevated, service degraded not down. The on-call engineer is in the retrospective. Ask for the most effective response.

- A) Continue the retrospective — the service is only degraded and the retrospective is important for the team.
- B) End the retrospective and have the whole team join the incident response.
- C) Release the on-call engineer to investigate immediately, ask a second engineer to support them if needed, and continue the retrospective with the rest of the team — checking in at a natural break and being ready to stop if it escalates.
- D) Investigate the alert personally while the team continues the retrospective without the candidate.

**Correct answer: C**

**Explanation:** A degraded citizen-facing service requires attention, ruling out A; ten people responding to a degraded-not-down issue is disproportionate, ruling out B and sacrificing a morale-critical session. C matches response to severity: the on-call rota responds, a support buddy removes lone-responder risk, and the team investment is preserved with an explicit escalation trigger. D bypasses the on-call system and abandons the facilitation role. This tests delegating the response, protecting the system that makes response reliable, and keeping strategic activities alive under tactical pressure.

**Question 10 (hard) — Inclusion in technical discussions**

In design discussions, two confident engineers do most of the talking. A quieter engineer, recently returned from a career break, made a suggestion last week that was talked over, yet closely resembles the design the team reached two days later; no one acknowledged the connection. Ask for the most effective response.

- A) Do nothing — technical discussions are meritocratic and the best ideas won in the end.
- B) Publicly credit the quieter engineer's earlier suggestion at the next design discussion, and change the format to give ideas a fairer hearing — written proposals before discussion, structured turn-taking, actively inviting contributions — while privately encouraging the engineer.
- C) Privately tell the two confident engineers to talk less.
- D) Move the quieter engineer to a team with a gentler culture.

**Correct answer: B**

**Explanation:** The scenario contains a measurable failure: the team reached the right design two days late because it could not hear the person who already had it. B corrects the record publicly, attacks the mechanism (format changes favouring idea quality over vocal confidence) rather than the personalities, and supports the individual privately. A mistakes a slow, lucky outcome for a working process. C treats colleagues as the defect without changing the rewarding structure. D removes the signal and keeps the noise. This tests fixing systems and crediting fairly rather than treating a structural problem as a personality problem.

**Question 11 (hard) — Inherited fragile automation**

A deployment automation script the whole department depends on, written by an engineer who has left, is undocumented, untested, and failed twice last month requiring 2am manual intervention. The backlog is full. Ask for the most and least effective response among: (1) schedule incremental hardening — characterise current behaviour with tests first, add documentation as it is learned, refactor in small safe steps alongside backlog work, with the risk logged; (2) rewrite the whole script from scratch immediately, since it is clearly not fit for purpose; (3) leave it alone — it mostly works, and touching undocumented code risks breaking it; (4) raise the risk with the head of engineering and propose pausing one backlog item to fund initial characterisation work.

- A) Most effective: 1; least effective: 3
- B) Most effective: 4; least effective: 2
- C) Most effective: 1; least effective: 2
- D) Most effective: 4; least effective: 3

**Correct answer: A**

**Explanation:** 1 is the complete response: established discipline for hazardous inherited code (characterisation tests before change, small reversible steps), tribal knowledge converted to documentation, and the risk logged for visibility — it effectively contains 4's virtue while 4 does not contain 1's plan. For least effective, 2 is a classic trap (a from-scratch rewrite of undocumented, department-critical code maximises risk exactly where knowledge is thinnest), but 3 is worse: it is a decision to keep waking engineers at 2am and accept unbounded operational risk on a department-wide dependency. This tests engineering discipline over both reckless action and negligent inaction, with inaction scored hardest when harm is already recurring.

### Administration tips

- Score for whether the candidate delegates through systems (on-call rotas, governance routes, review processes) rather than personally doing a more junior role's work.
- Note whether a response protects both the technical substance and the human relationship, rather than sacrificing one entirely.
- Watch for escalation path length — effective escalation goes to the nearest accountable decision-maker, with people involved kept aware.
- Score for whether the candidate reads the scenario's stated slack (e.g. "not yet at risk," "degraded, not down") as a calibration signal for how much room exists.
- Note whether the candidate finds and correctly identifies the covert-integrity-failure option among several plausible-sounding ones.

### Common pitfalls to watch for when scoring

- Crediting an option that makes disclosure more costly for the discloser (formal reports for self-caught minor errors), which teaches concealment.
- Missing a quiet workaround — secretly keeping old tools, secretly doing unapproved work, secretly substituting controls.
- Rewarding a binary refusal ("no, process is process") that fails the collaboration dimension even when technically correct.
- Accepting over-escalation (skipping levels, going over someone's head unnecessarily) or under-escalation (sitting on an unsolvable risk) as equally minor.
- Missing when a candidate fixes a person instead of a system — telling confident engineers to talk less, or removing access, rather than changing the structure.

## Conclusion

This guide has worked through pattern recognition and error checking in pipelines and infrastructure code, dependency-chain and transitive-closure reasoning, impact-weighted prioritisation across delivery and people duties, and problem decomposition that finds the dominant term in a complaint; availability and error-budget arithmetic, weighted averages, compound growth, and rate-versus-absolute reasoning; the boundary between what a passage guarantees, contradicts, and merely reports as claimed; and the situational judgement calls that define the management track — turning a mentee's mistake into learning, holding a security control while giving people a path through it, making a capacity risk undeniable to a decision-maker, and fixing systems rather than personalities when inclusion breaks down.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around escalation, evidence, and whether a response protects both substance and relationship. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
