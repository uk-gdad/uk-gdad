# Principal DevOps Engineer (Management) - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for principal DevOps engineer on the management track. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

The role leads and plans development across large or multiple teams and defines the strategic vision for delivery. The role summary names identifying, testing and championing the adoption of emerging technologies; ensuring that security, stability and capacity are embedded in the development and deployment of services; developing a team's capability by rewarding high performers; shaping career paths and recruiting the right talent; and identifying skills gaps and important dependencies within technical teams. The skills attached to the level widen that further: leading policy and strategy for service and capacity management, setting strategy and managing resource allocation for solution development programmes, reviewing others' system designs, and leading others in applying modern development standards and information security practices.

The distinctive thing about DevOps at this level is that the work is mostly invisible when it succeeds — nobody notices a pipeline that does not break, or a capacity plan that quietly absorbed a peak — which makes part of the role making the case for work whose value is measured in things that did not happen. The role also sits between development and operations functions with different incentives, resolving that tension structurally rather than case by case.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate attributes a repeated failure pattern to a shared system rather than to individual blame, and for whether conclusions are stated at exactly the strength the evidence supports — several items are built so that an over-confident or over-strong answer is the wrong one. Several situational judgement items reward a candidate who makes an invisible risk or piece of invisible work legible and countable to a decision-maker, rather than absorbing it personally or leaving it unrecorded; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, presented through role-realistic material: incident evidence, platform and pipeline design, capacity strategy, resource allocation, and the design reviews conducted on other people's work.

Typical format: 15 to 30 minutes online, covering deduction, pattern recognition, error checking, prioritisation and applied problem solving, scored against a norm group of comparable seniority.

Three things distinguish this section at principal level on the management track: reliability problems are almost always about the system rather than the component, so enumerating causes without finding the shared property misses the fix; automation changes the shape of risk rather than removing it, trading many small human errors for the possibility of one large uniform one; and much of the role involves reviewing others' designs, where the useful skill is finding the assumption that was never stated rather than the flaw that was.

### How this assessment maps to the role

- **Systemic failure analysis** maps to **Service support** and **Availability and capacity management**.
- **Design review** maps to **Systems design**, reviewing others' designs.
- **Risk reasoning about automation** maps to **Information security** and embedding stability in deployment.
- **Strategy and allocation** map to **Development process optimisation**.
- **Capability and dependency reasoning** maps to identifying skills gaps and important dependencies.
- **Technology evaluation** maps to identifying, testing and championing emerging technologies.

### Practice questions

**Question 1 (easy) — Deduction from a deployment rule**

Policy: "A change may be deployed to production without a change record only where it is an automated rollback to the previously deployed version." A change was deployed with no change record. Ask which conclusion must be true.

- A) The policy was breached.
- B) It was an automated rollback.
- C) Either it was an automated rollback to the previously deployed version, or the policy was breached.
- D) The change should be reverted.

**Correct answer: C**

**Explanation:** A rule with an exception, plus a fact silent on the exception, gives only the disjunction; A and B each assert one branch, and D prescribes an action rather than a conclusion. This tests concluding no more than a disjunction guarantees — with the operational corollary that if automated rollbacks are indistinguishable from unrecorded deployments in an audit trail, the policy is unenforceable.

**Question 2 (easy) — Blast radius**

A team proposes fully automated deployment to all production regions simultaneously, replacing a manual region-by-region process. Ask for the strongest observation.

- A) Adopt it; automation reduces human error.
- B) It removes per-deployment human error and creates the possibility of a bad change reaching every region in one action, so the automation is only an improvement if paired with something that bounds the damage — staged rollout across regions, automated health checks between stages, and automatic rollback on failure.
- C) Reject it; manual gates provide safety.
- D) Automate it but keep a manual approval step.

**Correct answer: B**

**Explanation:** Automation changes the distribution of outcomes rather than making them uniformly safer, trading many small errors for the possibility of one large uniform one. This tests naming the specific controls that make the trade favourable, rather than accepting the benefit without the design (A) or defending manual gates whose main safety property is slowness (C) — option D reintroduces human error while keeping the simultaneity, the worst combination.

**Question 3 (moderate) — Recurring failures with different causes**

A platform has had four significant outages in a year, each with a different proximate cause: a certificate expiry, a full disk, a misconfigured limit, and a dependency timeout. Ask for the strongest analysis.

- A) Four unrelated incidents; fix each cause.
- B) Four different proximate causes with the same consequence suggests a shared property — most likely that these conditions are not detected before they cause an outage — so the useful question is why a certificate approaching expiry, a disk approaching full and a limit set wrongly all first became visible as user-facing failures.
- C) The platform needs more monitoring.
- D) The team needs better operational discipline.

**Correct answer: B**

**Explanation:** Each cause develops gradually and observably before it fails, and none was seen coming — a single systemic property (no leading-indicator alerting) with one fix that covers all four and the next four. This tests reading a shared consequence across unrelated causes as evidence of one missing capability, rather than treating the pattern as coincidence (A) or blaming people for not noticing what nothing was measuring (D).

**Question 4 (moderate) — Reviewing another team's design**

A team submits a thorough, well-argued design for review. Ask for the most useful thing to look for.

- A) Technical errors in the described approach.
- B) The assumptions the design does not state — expected volumes, what happens when a dependency is slow rather than down, who operates it at 3am, how it is rolled back — because a thorough design usually has correct reasoning from premises nobody has written down, and the premises are where the risk is.
- C) Whether it follows the organisation's standards.
- D) Whether the technology choices are appropriate.

**Correct answer: B**

**Explanation:** A well-argued design has usually already had its explicit reasoning checked by its own authors; the value a principal reviewer adds is in the unstated assumption. This tests looking past what a design explicitly claims to what it silently presumes — C and D are genuine review criteria, but are the checks a thorough submission has usually already passed, not the added insight.

**Question 5 (moderate) — Capacity strategy**

Setting capacity policy across a portfolio of services. Ask for the strongest basis.

- A) A standard utilisation target that all services must stay below.
- B) A requirement that each service states its peak factor and its failure headroom — what utilisation looks like at peak with one instance lost — because a single utilisation target means nothing across services with different load profiles, and the number that predicts outages is headroom at peak, not average utilisation.
- C) Automatic scaling for all services.
- D) A standard over-provisioning factor.

**Correct answer: B**

**Explanation:** Average utilisation is easy to report and close to uninformative — a service at 40% average with a peak factor of 3 is in trouble, one at 70% flat is fine. This tests asking for the two figures that actually predict failure rather than applying a uniform number across non-uniform services (A, D); auto-scaling (C) is a useful mechanism, not a policy, and has its own limits when the constraint is a connection pool or a licence.

**Question 6 (moderate) — A skills dependency**

One engineer is the only person who understands the deployment pipeline for four critical services. Ask for the strongest response.

- A) Document the pipeline.
- B) Reduce the dependency by having someone else do the work with them — running deployments, handling an incident, making a change — because documentation captures what the person thought to write down and the risk is in what they do without thinking, which only transfers through doing.
- C) Recruit a second pipeline specialist.
- D) Simplify the pipeline.

**Correct answer: B**

**Explanation:** Tacit knowledge transfers through practice, not prose; documentation is reliably incomplete in exactly the places that matter at 3am, because the expert does not know which of their own actions are non-obvious. This tests choosing the remedy that actually exercises the capability — recruiting a second specialist (C) adds a person to a system that still has concentrated knowledge, now in two heads, and simplifying (D) is often the best long-term answer but slower.

**Question 7 (hard) — An emerging technology**

Believing a new deployment technology would substantially improve the platform. Ask for the strongest way to champion it.

- A) Build the case and propose adoption.
- B) Run a real trial with a pre-agreed definition of failure, on a genuine workload rather than a demonstration, and publish the outcome either way — because a champion whose evaluations always succeed is discounted, and the credibility to get the next adoption approved is worth more than this one.
- C) Pilot it with one team and expand if it goes well.
- D) Wait until it is more established.

**Correct answer: B**

**Explanation:** The load-bearing words are "pre-agreed" and "either way" — a pilot without a prior failure criterion nearly always succeeds, because there is always a favourable reading available to the people who want it to. This tests the discipline that makes a negative result possible, which is the only thing that makes a positive one informative — option C is the standard approach, but its weakness is precisely the missing criterion.

**Question 8 (hard) — Competing explanations under incident conditions**

A service degrades sharply. Two changes went out in the last hour: a configuration change to connection limits, and a new version of a shared library. Ask for the strongest sequence.

- A) Revert the configuration change; it is the more likely cause.
- B) Revert both if both are cleanly revertible and restore service first, then identify the cause from the artefacts in a safe environment — because during a degradation the goal is restoration rather than diagnosis, and reverting one of two candidates has an even chance of leaving the problem live while consuming the time available.
- C) Roll back the library version.
- D) Increase the connection limits further.

**Correct answer: B**

**Explanation:** Restoring and diagnosing are different activities, and reverting everything cleanly revertible returns to a known-good state while preserving the ability to diagnose afterwards. This tests resisting a guess between two candidate causes under time pressure (A, C) — the condition "if both are cleanly revertible" matters, since a change with side effects changes the calculation and must be known before acting; option D adjusts a parameter mid-incident on an unconfirmed diagnosis.

**Question 9 (hard) — A process metric that will be gamed**

Considering measuring teams on deployment frequency, with a target of increasing it. Ask for the strongest observation.

- A) It is a good measure; frequent deployment correlates with high performance.
- B) The correlation is real and using it as a target creates pressure on the cheapest thing to change, which is how work is split into deployments rather than how quickly it reaches users — so the measure will rise without the underlying capability improving, and pairing it with lead time and change failure rate makes it much harder to move without real improvement.
- C) It should not be measured.
- D) It should be combined with other measures.

**Correct answer: B**

**Explanation:** Splitting one deployment into four is far easier than deploying four times as much value, so a sole target on frequency invites gaming. This tests naming the specific gaming route and the specific remedy (pairing with lead time and change failure rate) rather than a vague instruction to "combine with other measures" (D), which could mean combining with equally gameable ones — discarding a genuinely useful indicator (C) also fails.

**Question 10 (hard) — Security embedded in delivery**

Wanting security checks embedded in the deployment pipeline rather than performed as a separate review. Ask what most determines whether this works.

- A) Choosing the right scanning tools.
- B) The signal-to-noise ratio of what the checks report — a pipeline check that produces many findings teams cannot act on gets bypassed within a month, so the design question is which classes of finding block a deployment and which are reported without blocking.
- C) Making the checks mandatory.
- D) Training teams in secure development.

**Correct answer: B**

**Explanation:** Automated security checks fail for one dominant reason: they flood teams with unactionable findings, and a check that blocks on those gets an override or a quietly disabled step. This tests identifying triage — a small set of high-confidence findings block, everything else is visible but non-blocking — as the actual design decision, rather than mandating the check (C), which is what produces the bypass, or the tool choice (A), which matters less than how the output is handled.

**Question 11 (hard) — Allocating a scarce platform team**

Three programmes need platform work next quarter; roughly two can be served. Ask for the strongest basis for deciding.

- A) The programme with the largest claimed benefit.
- B) What each loses by waiting a quarter, and whether any of the three could be served by something self-service rather than by the team — because the highest-value platform work is usually the piece that removes the need for the platform team to be involved next time.
- C) First come, first served.
- D) Split the team across all three.

**Correct answer: B**

**Explanation:** Cost of delay is the general allocation criterion; the self-service question is specific to a platform function and is what stops it becoming a permanent bottleneck. This tests using the criterion specific to a platform team's role rather than trusting self-reported benefit from parties competing for the resource (A), ignoring available information (C), or splitting the team and serving all three badly (D).

**Question 12 (hard) — Rewarding high performers**

Wanting to recognise a team member whose reliability work has been exceptional. Ask for the strongest approach.

- A) Give them public recognition at a team event.
- B) Make the impact visible in concrete terms — what changed, what stopped happening, what it was worth — and pair recognition with something that has durable value to them, such as scope, a route to the next role, or a conference talk, because reliability work is invisible by nature and the recognition that matters most is that its value was seen and counted.
- C) Nominate them for an award.
- D) Give them a bonus if one is available.

**Correct answer: B**

**Explanation:** Reliability work's output is the absence of events, so it does not appear in delivery metrics and its author often suspects nobody noticed. This tests making the impact legible before attaching recognition with a future in it — options A, C and D are all reasonable moments rather than trajectories, and a bonus is spent while scope or a route to the next role is not.

### Administration tips

- Score for whether the candidate attributes recurring failures with different proximate causes to a shared underlying property, rather than treating them as coincidence or individual failing.
- Note whether the candidate identifies an unstated assumption in a well-argued design, not just its explicit claims.
- Watch for whether the candidate names a specific control that bounds risk (blast radius, a failure criterion, triage rules) rather than a general instinct ("be careful", "combine with other measures").
- Score for whether capacity or allocation decisions are based on the metric that actually predicts failure or need, rather than the one that is easiest to report.
- Note whether tacit-knowledge or recognition responses choose a mechanism that actually transfers capability or makes value legible, rather than one that merely records or announces it.

### Common pitfalls to watch for when scoring

- Crediting a response that reintroduces the very risk automation was meant to remove (e.g. a manual gate on a simultaneous deployment).
- Missing when a candidate treats a shared systemic pattern as several unrelated incidents.
- Rewarding a pilot or evaluation design with no pre-agreed failure criterion.
- Accepting a capacity or resourcing decision based on average utilisation or self-reported benefit rather than the predictive figure.
- Missing when a candidate answers a recognition or visibility problem with a one-off gesture rather than a durable, countable one.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from operational and financial data at speed. At principal level on the management track the data is availability and error budgets, pipeline throughput, infrastructure cost, capacity models and the business cases attached to platform investment.

Typical format: 15 to 25 minutes with a calculator, mixing computation with interpretation — interpretation carrying more weight at this level, since the candidate is usually expected to notice that a number does not mean what a slide claims it means.

Three habits distinguish a strong candidate: availability arithmetic composes multiplicatively across serial dependencies, producing figures people find surprising, and should be known before a design is committed; infrastructure cost scales with provisioned capacity rather than used capacity, so a utilisation figure and a cost figure are different conversations; and error budgets are consumed over time, so the meaningful measure is burn rate against elapsed window rather than a total compared to a threshold.

### How this assessment maps to the role

- **Availability and error budgets** map to **Availability and capacity management**, leading policy and strategy.
- **Capacity modelling** maps to embedding capacity in development and deployment.
- **Pipeline metrics** map to **Development process optimisation**.
- **Infrastructure cost** maps to managing resource allocation.
- **Security risk quantification** maps to **Information security**.
- **Integration volumetrics** map to **Systems integration**.

### Practice questions

*Table 1 — Platform components, measured availability last quarter*

| Component | Availability | In request path |
|---|---|---|
| Load balancer | 99.99% | Yes |
| Auth service | 99.95% | Yes |
| Application tier | 99.9% | Yes |
| Cache | 99.7% | Yes (fail-open) |
| Primary database | 99.95% | Yes |

**Question 1 (easy) — Availability in minutes**

Ask how much downtime 99.9% availability allows in a 30-day month.

- A) About 22 minutes
- B) About 43 minutes
- C) About 4.3 minutes
- D) About 2 hours

**Correct answer: B**

**Explanation:** 43,200 × 0.001 = 43.2 minutes. This tests holding the standard conversions instantly — 99.9% ≈ 43 minutes, 99.95% ≈ 22, 99.99% ≈ 4.3, 99.5% ≈ 3.6 hours — since whether a proposed target is achievable often turns on whether one bad deployment consumes the whole month's budget.

**Question 2 (easy) — Least available component**

Ask which component contributes most to unavailability.

- A) Load balancer
- B) Cache
- C) Application tier
- D) Auth service

**Correct answer: B**

**Explanation:** The cache at 99.7% is least available, roughly 2.2 hours a month, but is marked fail-open — requests proceed without it. This tests reading a table's qualifier column, not just its headline figure, since whether that fail-open path is actually tested decides whether the cache is in the critical path at all.

**Question 3 (moderate) — Composed availability**

Ask for the approximate composed availability of the four components that are not fail-open.

- A) About 99.79%
- B) About 99.9%
- C) About 99.5%
- D) About 99.95%

**Correct answer: A**

**Explanation:** 0.9999 × 0.9995 × 0.999 × 0.9995 ≈ 99.79%, about 91 minutes a month — worse than any individual component, since serial dependencies multiply. This tests computing a composed system's availability, and noting that if the cache's fail-open path were untested, the real figure would be 99.49%.

**Question 4 (moderate) — Error budget burn**

A service has a 99.95% monthly target. Eighteen days into a 30-day month it has used 17 minutes of downtime. Ask whether it is on track.

- A) Yes; the budget is about 22 minutes and it has used 17.
- B) No — the budget is about 21.6 minutes, and 17 minutes used in 18 days is a burn rate of 0.94 minutes a day, projecting to about 28 minutes over the month, which overshoots by roughly 30%.
- C) Yes, comfortably.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** 17 minutes in 18 days projects to about 28 minutes over 30 — 60% through the month, but 79% of budget consumed. This tests measuring a running total against elapsed proportion of the window, not against the full-month threshold alone.

*Table 2 — Deployment pipeline, monthly figures across four teams*

| Team | Deployments | Mean lead time (hours) | Change failure rate | Mean time to restore (min) |
|---|---|---|---|---|
| North | 62 | 4.2 | 6% | 22 |
| South | 18 | 31.0 | 17% | 96 |
| East | 44 | 8.5 | 9% | 41 |
| West | 9 | 74.0 | 22% | 180 |

**Question 5 (easy) — Reading the table**

Ask which team has the highest change failure rate.

- A) South
- B) West
- C) East
- D) North

**Correct answer: B**

**Explanation:** West at 22%, ahead of South at 17%. This tests reading a table directly, and noticing that West's four metrics — fewest deployments, longest lead time, highest failure rate, longest restore time — move together, a well-documented pattern where infrequent, larger changes fail more and are harder to diagnose.

**Question 6 (moderate) — Failed deployments per month**

Ask approximately how many failed deployments occur across all four teams each month.

- A) About 9
- B) About 13
- C) About 20
- D) About 6

**Correct answer: B**

**Explanation:** North 3.7, South 3.1, East 4.0, West 2.0 — total ≈ 12.8. This tests computing each team's contribution before summing, and noticing North has the most failed deployments in absolute terms despite the lowest failure rate, simply because it deploys most — why rate rather than count is the meaningful comparison.

**Question 7 (moderate) — Downtime from failures**

Ask approximately how many minutes of restoration time West consumes per month, and how it compares with North.

- A) 360 minutes against 81 — West spends over four times as long restoring, despite deploying seven times less often.
- B) 180 minutes against 22.
- C) 360 minutes against 220.
- D) 90 minutes against 81.

**Correct answer: A**

**Explanation:** West: 2.0 failures × 180 minutes ≈ 360; North: 3.7 × 22 ≈ 81. West spends roughly 4.4 times as long degraded while deploying a seventh as often. This tests computing this comparison quickly, since it is the arithmetic that answers the objection that frequent deployment is risky — the data says the opposite.

**Question 8 (hard) — Infrastructure cost and utilisation**

A service runs 40 instances at £120 each per month, averaging 30% CPU. A proposal reduces to 24 instances. Ask for the strongest assessment.

- A) It saves £1,920 a month and utilisation rises to 50%, which is still comfortable.
- B) It saves £1,920 a month and the relevant check is peak behaviour, not average — at 30% average with an unknown peak factor, 24 instances could be over capacity at peak, and the calculation needed is peak load across 23 instances, allowing for one failure.
- C) It saves £1,920 and should be adopted.
- D) It saves £768 a month.

**Correct answer: B**

**Explanation:** The saving is £1,920; A computes the new average correctly but treats average as the criterion. If the peak factor is 2, peak on 24 instances is 100% with no headroom, and losing one instance at peak puts the remaining 23 over 104%. This tests recognising that right-sizing on average utilisation is one of the more reliable ways to cause an outage while reporting a cost saving.

**Question 9 (hard) — Payback on pipeline work**

Reducing South's lead time needs about four weeks of one engineer's time. South's 18 monthly deployments each wait an average of 31 hours, of which an estimated 24 hours is queueing. Ask for the strongest framing.

- A) The saving is 18 × 24 = 432 hours a month, so it pays back immediately.
- B) 432 hours a month of elapsed waiting is not 432 hours of engineer time — work waits while people do other things — so the honest case rests on faster feedback, smaller changes and a lower failure rate rather than on recovered hours, and stating it as recovered hours will be challenged and lose.
- C) Four weeks is too much for one team.
- D) The saving cannot be quantified.

**Correct answer: B**

**Explanation:** Elapsed queueing time is mostly not lost engineer time, since people work on other things while a change waits. This tests catching the commonest overstatement in pipeline business cases — the real, defensible benefits are faster feedback, smaller batches, and the lead-time-to-failure-rate correlation Table 2 already shows.

**Question 10 (hard) — Interpreting a change**

After introducing automated canary deployments, change failure rate fell from 12% to 5% and mean lead time rose from 6 hours to 9 hours. Ask for the strongest interpretation.

- A) A clear success; failures more than halved.
- B) A favourable trade to assess rather than a clear win — failures fell by 58% at the cost of 50% longer lead time, and whether that is worth it depends on what a failure costs against what three extra hours of feedback delay costs, which for most services favours the canary but should be stated rather than assumed.
- C) A failure; lead time is a key metric.
- D) The two are unrelated.

**Correct answer: B**

**Explanation:** Both numbers moved, and reporting only the favourable one is the specific habit this item tests. This tests stating the trade-off criterion explicitly rather than hiding half the result (A) or inverting the same error (C) — for a public service handling money or benefits, the comparison heavily favours the canary, but the comparison should be shown, not assumed.

**Question 11 (hard) — Capacity for a new integration**

A new integration processes 3.2 million records a night in a 5-hour window; each worker handles 45 records/second. Ask how many workers are needed, with no headroom.

- A) About 4
- B) About 20
- C) About 8
- D) About 45

**Correct answer: A**

**Explanation:** Required throughput 3,200,000 ÷ 18,000s ≈ 178/s; 178 ÷ 45 ≈ 3.95, so 4 workers with no headroom — any worker failure, slow period, or growth breaks the window. This tests recognising this calculation belongs at design time, since a sensible provision (around 6, allowing for a failure and roughly 35% growth) is very different from the bare minimum.

**Question 12 (hard) — Quantifying a reliability investment**

A resilience change costs £180,000 to build and £30,000/year to run; it would prevent an outage class occurring twice in three years, each costing an estimated £400,000. Ask for the strongest analysis.

- A) Adopt it; £400,000 exceeds the cost.
- B) The expected annual loss is about £267,000 (two events in three years at £400,000), against £30,000 annual running cost and a £180,000 one-off — so it pays back within the first year on expected value, though both the frequency and the impact are estimates and the case should say so.
- C) Reject it; £180,000 is a large capital cost.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** 0.67 events/year × £400,000 = £267,000 expected annual loss, recovering the investment within the first year and saving roughly £237,000 a year afterwards. This tests computing expected annual loss against total cost of ownership, and stating the underlying assumptions openly rather than leaving them for a reviewer to find.

### Administration tips

- Score for whether the candidate composes availability multiplicatively across serial dependencies.
- Note whether an error budget is measured against elapsed proportion of its window, not the full-period total.
- Watch for whether capacity is sized on peak with a failure allowance, not average utilisation.
- Score for whether elapsed queueing or waiting time is distinguished from recovered engineer effort in a business case.
- Note whether both halves of a two-metric trade-off (e.g. failure rate and lead time) are reported and weighed, not just the favourable one.

### Common pitfalls to watch for when scoring

- Crediting an error-budget conclusion that compares a running total to the full-period threshold without accounting for elapsed time.
- Missing a capacity or cost conclusion based on average utilisation where peak-with-failure was the relevant test.
- Rewarding a business case that presents elapsed queueing time as recovered staff hours.
- Accepting a report of only the favourable metric when a change moved two metrics in opposite directions.
- Missing an unstated assumption behind a business case's frequency or impact estimate.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what written material establishes. At principal level on the management track the material is service level agreements, change management policy, security standards, supplier terms, and governance frameworks.

The commonest format gives a passage and asks statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, and Cannot Say means neither — regardless of what the candidate knows from running comparable systems, which is the main hazard at this level, since a candidate's operational experience readily supplies "the usual arrangement" where the passage describes this one.

Three specifics matter particularly: a service level agreement's exclusions (planned maintenance, customer-caused outages) determine what a percentage actually promises; change management policy allocates authority narrowly — who may approve what, in which circumstances; and security standards attach obligations to classifications and environments, so a control required in one context is frequently not required in a neighbouring one.

### How this assessment maps to the role

- **Reading service level agreements** maps to **Availability and capacity management**, leading policy and strategy.
- **Reading change policy** maps to embedding stability in deployment.
- **Reading security standards** maps to **Information security**.
- **Reading supplier terms** maps to resource allocation and procurement.
- **Reading governance frameworks** maps to leading programmes.
- **Precision in written advice** maps to advising stakeholders.

### Practice questions

*Passage A — for Questions 1 to 4*

"The supplier warrants monthly availability of at least 99.9%, measured as the proportion of five-minute intervals in which the service responded successfully to the monitoring probe. Availability is calculated excluding planned maintenance windows notified at least five working days in advance, and excluding periods of unavailability caused by the customer's own systems or network. Planned maintenance may not exceed eight hours in any calendar month. Where availability falls below the warranted level, the customer is entitled to a service credit calculated in accordance with Schedule 4. Service credits are the customer's sole remedy for availability failures, except in the case of a failure below 95% in any month, where the customer may additionally terminate on 30 days' notice."

**Question 1 (easy)**

Statement: The supplier warrants monthly availability of at least 99.9%.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests noting the measurement definition that follows immediately — five-minute intervals against a monitoring probe, considerably less demanding than measuring real user requests — since a service can be badly degraded for real users while responding successfully to a probe every five minutes.

**Question 2 (moderate)**

Statement: Eight hours of planned maintenance in a month would count against the 99.9% availability figure.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — availability is calculated "excluding planned maintenance windows notified at least five working days in advance." This tests the practical consequence: eight hours is roughly 1.1% of a month, so a service could be unavailable for eight notified hours plus 43 minutes of unplanned downtime and still report 99.9%, provided the notice condition is met.

**Question 3 (moderate)**

Statement: If availability falls to 97% in a month, the customer may terminate the agreement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Credits are the sole remedy "except in the case of a failure below 95%", and 97% does not trigger that exception. This tests checking both the exception's existence and its specific threshold — finding one without the other produces the wrong answer.

**Question 4 (hard)**

Statement: A period of unavailability caused by a failure in the customer's network would reduce the reported availability figure.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — the passage excludes "periods of unavailability caused by the customer's own systems or network" from the calculation. This tests noticing that this exclusion means the reported figure can diverge substantially from what users experienced, and that who determines causation is not addressed by the passage at all.

*Passage B — for Questions 5 to 8*

"Standard changes are pre-approved and may be implemented by any authorised engineer without further approval, provided they are recorded within one working day. Normal changes require approval by the change advisory board, which meets weekly. Emergency changes may be implemented with the approval of the on-call incident manager, and must be presented to the next change advisory board for retrospective review. A change may be classified as standard only where it has been implemented successfully at least five times as a normal change and has an approved implementation procedure. The change advisory board reviews the standard change catalogue quarterly and may remove a change type from it."

**Question 5 (easy)**

Statement: Standard changes require approval before implementation.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — standard changes "are pre-approved and may be implemented... without further approval." This tests distinguishing the pre-approval (the point of the category) from the separate recording obligation, which does not amount to prior approval.

**Question 6 (moderate)**

Statement: A change implemented successfully four times as a normal change can be classified as standard.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage requires "at least five times." This tests checking a stated minimum precisely, and noting the requirement is one of two conjunctive conditions (five implementations *and* an approved procedure), so the statement fails on the first condition alone.

**Question 7 (moderate)**

Statement: An emergency change does not need change advisory board involvement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Directly contradicted — emergency changes "must be presented to the next change advisory board for retrospective review." This tests reading a deferred approval as approval, not as a bypass — retrospective review is precisely what makes the emergency route safe to have.

**Question 8 (hard)**

Statement: A change type in the standard catalogue will remain there unless it causes an incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the board "may remove a change type" without stating any grounds. This tests distinguishing an unconditioned discretionary power from a conditioned one — removal could follow an incident, a procedural change, or the board's judgement, and the passage neither confirms nor rules out any specific trigger.

*Passage C — for Questions 9 to 12*

"Secrets used by production services must be stored in the approved secrets management service and must be rotated at least every 90 days. Secrets used only in non-production environments must be stored in the approved service but are not subject to the rotation requirement, provided that no non-production environment holds production data. Where a non-production environment holds production data, it is treated as production for the purposes of this standard. Access to production secrets is granted on the approval of the service owner and is reviewed quarterly. A secret that has been exposed must be rotated immediately and the exposure reported to the security team within 24 hours."

**Question 9 (moderate)**

Statement: Secrets used only in non-production environments must be rotated every 90 days.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Contradicted, conditionally — the passage exempts non-production secrets from rotation "provided that no non-production environment holds production data," and the statement asserts the requirement unconditionally. This tests noting the proviso's breadth: it refers to *no* non-production environment holding production data, not merely the one in question.

**Question 10 (moderate)**

Statement: A test environment containing a copy of production data must have its secrets rotated every 90 days.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Established by the reclassification clause: an environment holding production data "is treated as production," and production secrets must rotate at least every 90 days. This tests catching the clause most often missed in practice — teams copy production data into test environments routinely, without noticing the classification change.

**Question 11 (moderate)**

Statement: An exposed secret must be reported to the security team before it is rotated.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage requires immediate rotation and reporting within 24 hours, without stating an order between them. This tests recognising that two obligations with deadlines do not necessarily specify a sequence, even where one reading feels natural.

**Question 12 (hard)**

Statement: Access to non-production secrets is reviewed quarterly.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage addresses only "production secrets" access review, saying nothing about non-production — genuine silence, not an implied negative. This tests not carrying a rule stated for one case across a gap into a case the passage never addresses, in contrast to Question 9, where the passage explicitly created a conditional exemption for the other case.

### Administration tips

- Score for whether the candidate checks how availability or a similar metric is measured, and what is explicitly excluded, before accepting a headline percentage.
- Note whether the candidate finds and applies a specific numeric threshold attached to an exception, rather than the exception's existence alone.
- Watch for whether a deferred approval (e.g. retrospective review) is read as a form of approval, not a bypass of governance.
- Score for whether both limbs of a conjunctive condition are checked before a statement is marked True.
- Note whether the candidate distinguishes genuine silence in a passage (Cannot Say) from an implied negative (False), especially when a neighbouring clause addresses a related but different case.

### Common pitfalls to watch for when scoring

- Crediting a warranted availability percentage read as covering planned maintenance or customer-caused outages it explicitly excludes.
- Missing a specific numeric threshold attached to an exception to a stated "sole remedy" or similar rule.
- Rewarding a reading of an emergency or deferred-approval route as bypassing governance entirely.
- Accepting a conditional exemption (e.g. for non-production secrets) read as unconditional.
- Missing when a candidate extends a rule stated for one scoped case (e.g. "production") to a case the passage never addresses.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level on the management track the scenarios involve incident leadership, standing between delivery pressure and operational risk, allocating a platform capability everyone wants, and developing people whose best work is invisible.

The commonest formats ask for the most and least effective response, or for ratings, scored against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers: during an incident the priority is restoration, and afterwards the priority is learning, and mixing the two degrades both; a candidate at this level is frequently the person saying no to something someone wants urgently, and the effective form of that is making the risk visible and decidable rather than simply refusing; and teams at this level do work that is noticed only when it fails, which puts unusual weight on making its value legible to people who would otherwise never see it.

### How this assessment maps to the role

- **Incident leadership** maps to **Service support** and **Availability and capacity management**.
- **Balancing delivery and stability** maps to embedding security, stability, and capacity in delivery.
- **Resource allocation** maps to **Development process optimisation**.
- **Capability and recognition** map to rewarding high performers and shaping career paths.
- **Security leadership** maps to **Information security**.
- **Client relationships** map to working with client functions to establish requirements.

### Practice questions

**Question 1 (easy) — During an incident**

A major incident is in progress; two engineers are debating the root cause while the service remains degraded. Ask for the most and least effective response.

- A) Let them continue; identifying the cause will resolve it.
- B) Redirect to restoration — revert what is revertible, fail over what can fail over, and get the service back — and hold the root cause discussion afterwards with the evidence preserved, because the debate can be settled at leisure and the degradation cannot.
- C) Decide the root cause personally.
- D) Escalate for more people.

**Most effective: B. Least effective: D.**

**Explanation:** Restoration and diagnosis are different activities, and doing them in the wrong order costs users directly. B redirects and preserves evidence for later diagnosis; D is least effective because adding people to a live incident raises coordination cost, and a crowded incident channel is slower than a small one. C commits to a hypothesis on incomplete information; A lets a debate continue while the service is down.

**Question 2 (easy) — After an incident**

A post-incident review is drifting towards identifying who made the mistake. Ask for the most and least effective response.

- A) Let it run; accountability matters.
- B) Redirect it to the conditions that made the mistake possible and consequential — what made the wrong action easy, what allowed it to reach production, why it was not caught — because a review that finds a person stops there, and the same conditions will produce the same outcome with a different person.
- C) Move the discussion to a private setting.
- D) Remind everyone the review is blameless.

**Most effective: B. Least effective: A.**

**Explanation:** B redirects to specific systemic questions, which is what actually makes a "blameless" review work. A is least effective: a review that identifies an individual produces no change to the system and reliably makes the next incident less honestly described. D names the principle without supplying the alternative; C removes the discussion from the people who would learn from it.

**Question 3 (moderate) — Delivery pressure against a stability risk**

A programme wants to deploy a substantial change the day before a peak period; the risk is judged significant. Ask for the most and least effective response.

- A) Refuse; deploying before peak is poor practice.
- B) State the risk concretely — what could fail, how likely, what the impact would be during peak, and how long recovery would take — and put the decision to whoever owns the service's risk, offering the alternatives of deploying after peak or deploying behind a feature toggle that can be turned off.
- C) Allow it; the programme owns its delivery.
- D) Allow it with a rollback plan.

**Most effective: B. Least effective: C.**

**Explanation:** The decision belongs to the risk owner, and B's job is ensuring it is made knowingly with real alternatives visible — a feature toggle, which decouples deployment from activation, is the option most often not considered under time pressure. C is least effective: treating a visible risk as someone else's problem. D is thin — a rollback plan for a peak-period failure still means an outage during peak. A removes the risk owner from their own decision.

**Question 4 (moderate) — A team bypassing the pipeline**

A team has been deploying directly to production, bypassing the pipeline, for two months. Ask for the most and least effective response.

- A) Stop the practice immediately and require pipeline use.
- B) Find out why before anything else — a team bypassing a pipeline for two months is usually working around something specific, such as a stage that fails unpredictably or takes too long for urgent fixes — because if the pipeline is genuinely unusable for their case, enforcing it just moves the workaround somewhere less visible.
- C) Report it as a compliance breach.
- D) Add technical controls preventing direct deployment.

**Most effective: B. Least effective: C.**

**Explanation:** Two months of workaround by a capable team is information about the pipeline. B's likely findings are actionable; C is least effective, since treating it as a compliance matter first guarantees the next workaround stays hidden and does not fix the pipeline. D is likely part of the eventual answer but forces the team into something that does not work if applied first; A is the same error more softly.

**Question 5 (moderate) — Recognising invisible work**

An engineer has spent six months on reliability improvements; there have been no incidents in their area, and their contribution appears in no delivery metric. Ask for the most and least effective response.

- A) Thank them and note it in their appraisal.
- B) Make the value legible — quantify what changed, such as the failure classes now impossible or the incidents that would have occurred at the previous rate — and put that in front of the people who make promotion and resourcing decisions, because invisible work stays invisible unless someone converts it into something countable.
- C) Give them public credit at a team meeting.
- D) Move them onto more visible work.

**Most effective: B. Least effective: D.**

**Explanation:** Success in reliability work looks like nothing happening; B produces the count that serves the person and protects the work from deprioritisation. D is least effective — it solves the visibility problem by ending the valuable work and signals reliability work is a career dead end. A and C are good but reach nobody who decides promotion or headcount.

**Question 6 (moderate) — A client function's stated requirement**

A client function insists a new service must have 99.99% availability. Ask for the most and least effective response.

- A) Design for 99.99%.
- B) Establish what drives the figure — what happens to users or the business during an outage, and at what duration it becomes serious — because 99.99% is four minutes a month and the cost of the last increment is very high, and the underlying need is frequently about the duration of a single outage rather than annual uptime.
- C) Explain that 99.99% is expensive.
- D) Propose 99.9% as more realistic.

**Most effective: B. Least effective: D.**

**Explanation:** Availability targets are almost always stated rather than derived; B recovers the actual requirement, which is usually about recovery time from a single outage. D is least effective, since countering one arbitrary number with another concedes that the figure itself is what is being negotiated. C leads with cost and sounds obstructive; A commits to an expensive target nobody has justified.

**Question 7 (hard) — A security finding nobody wants**

A security assessment finds a significant vulnerability in a platform component; fixing it requires a migration the organisation has no appetite for. Ask for the most and least effective response.

- A) Escalate until it is funded.
- B) Set out the exposure in concrete terms — what an attacker could do, what access they would need, what data is reachable — and the options with their costs, including interim mitigations that reduce the risk without the migration, then get a named risk acceptance from whoever is accountable if nothing is done.
- C) Implement the interim mitigations and move on.
- D) Note the finding on the risk register.

**Most effective: B. Least effective: D.**

**Explanation:** B makes the risk concrete, offers the middle path, and ensures a decision to accept the risk is made explicitly rather than by inertia — the named acceptance is what converts a warning into a decision. D is least effective: an unowned register entry is where findings go to be forgotten until an incident. C is useful but leaves residual risk unowned; A escalates before quantifying.

**Question 8 (hard) — Allocating a platform team**

Four programmes want platform work next quarter; two can be served, and all four are pressing. Ask for the most and least effective response.

- A) Serve the two with the strongest business cases.
- B) Decide on cost of delay and on whether any request could be met by something self-service, tell all four the decision and the reasoning, and be explicit with the two that are not served about what that means for them — because a platform team's worst outcome is four programmes each getting a third of what they need.
- C) Split the team's time across all four.
- D) Ask the programmes to agree priority between themselves.

**Most effective: B. Least effective: C.**

**Explanation:** B decides, explains, and adds the platform-specific criterion of removing future demand. C is least effective: splitting a team four ways loses time to context switching and delivers four partial capabilities. D delegates the decision to parties with no basis for deciding it, and the most assertive programme wins; A uses self-reported cases as the sole criterion.

**Question 9 (hard) — Pressure to weaken a control**

A programme asks for standing production database access for three developers to speed up debugging. Ask for the most and least effective response.

- A) Refuse; standing production access is not acceptable.
- B) Address the underlying need rather than the request — they need to diagnose production problems, and the routes to that are better logging, a production-like environment with realistic data, or time-bound audited access granted on demand — because standing access is a permanent risk granted to solve an intermittent problem.
- C) Grant it with audit logging.
- D) Grant it for a limited period.

**Most effective: B. Least effective: C.**

**Explanation:** The request is a solution to a legitimate need, which is why a flat refusal fails — the need remains, and another route will be found. B names alternatives that satisfy the need without a standing grant. C is least effective: it grants the permanent risk and adds a control that records what happened without preventing anything, while feeling like the issue was addressed. D is better but tends to become permanent through renewal.

**Question 10 (hard) — A capability gap that cannot be recruited for**

The platform depends on a technology for which the market is thin and pay bands are below market rate; two of three specialists have left in a year. Ask for the most and least effective response.

- A) Make the case for higher pay bands.
- B) Treat it as a strategic dependency question rather than a recruitment problem — if a technology cannot be staffed sustainably, the honest options are to build the capability internally over time, to buy it as a managed service, or to migrate away, and continuing to run something that cannot be staffed is the option nobody chooses explicitly but everyone drifts into.
- C) Recruit contractors.
- D) Train existing staff.

**Most effective: B. Least effective: C.**

**Explanation:** Two departures against a thin market is not solvable by recruiting harder; B reframes it as the strategic question it is. C is least effective as a strategy — contractors are the most expensive route, carry knowledge out with them, and defer the decision while making it look handled. A and D are both real components of a plan and neither is the decision.

**Question 11 (hard) — Evidence against a candidate's own past platform decision**

A platform choice led personally two years ago is now the main source of operational toil for three teams. Ask for the most and least effective response.

- A) Defend it; the decision was right given what was known.
- B) Put the toil in front of people in measurable terms — hours a month, incidents attributable, what teams cannot do because of it — say plainly that the original assumptions have not held, and get someone other than the original decision-maker to assess the options, because a recommendation about one's own decision carries a discount that cannot be argued away.
- C) Propose a migration.
- D) Invest in reducing the toil within the current platform.

**Most effective: B. Least effective: A.**

**Explanation:** B quantifies the problem, is honest about the decision, and removes the credibility issue by handing the recommendation to someone else. A is least effective: it may be true and is entirely beside the point, since the question is what to do now, and defending it teaches three teams the toil is permanent. C and D are plausible answers that should come from an independent assessment.

**Question 12 (hard) — Reporting reliability honestly**

A director asks for a summary of platform reliability for a board paper; the figures are good on availability and poor on time to restore. Ask for the most and least effective response.

- A) Report availability; it is the headline metric.
- B) Report both, with the point that they say different things — the platform rarely fails and takes a long time to recover when it does, which is a specific and fixable problem — because a board given only the favourable metric will not fund the work the unfavourable one points at.
- C) Report availability and mention restore time if asked.
- D) Report the combined picture as "mixed".

**Most effective: B. Least effective: A.**

**Explanation:** B reports honestly and interprets: high availability with slow recovery is a recognisable pattern with known remedies, and naming it turns two numbers into a proposal. A is least effective, since it gets thanked now and leaves the restore-time problem unfunded until it causes a serious incident. C is the same omission with a fallback; D characterises without informing.

### Administration tips

- Score for whether the candidate separates restoration from diagnosis during a live incident, and system-level learning from individual blame afterwards.
- Note whether a stated risk is routed to its accountable decision-maker with real alternatives, rather than simply refused or silently absorbed.
- Watch for whether the candidate makes invisible work or an unfunded risk countable and visible to the people who can act on it.
- Score for whether a request is addressed at the level of its underlying need rather than only its stated form (e.g. standing access vs the debugging need behind it).
- Note whether the candidate applies the same scrutiny to their own past decisions as to anyone else's, including removing themselves from a conflicted recommendation.

### Common pitfalls to watch for when scoring

- Crediting a response that adds people to a live incident or lets a post-incident review settle on an individual.
- Missing when a candidate treats a sustained pipeline or process bypass as a compliance breach before understanding its cause.
- Rewarding a response that solves an invisibility or bottleneck problem by ending the valuable work rather than making it legible.
- Accepting a risk register entry or informal note as equivalent to a named, accountable risk acceptance.
- Missing when a candidate reports only a favourable metric while a less favourable one moved in the opposite direction.

## Conclusion

This guide has worked through systemic diagnosis of recurring failures with different proximate causes, the unstated assumption in a well-argued design, the specific control that bounds automation's blast radius, and the pre-agreed failure criterion that makes a technology evaluation informative; availability composed across serial dependencies, error budgets measured as burn rate, capacity sized on peak with a failure, and business cases that separate elapsed waiting time from recovered engineer effort; service level exclusions, deferred (not bypassed) approvals, conjunctive conditions, and reclassification clauses read at exactly the strength the passage supports; and the situational judgement calls that define principal-level management work — separating restoration from diagnosis, making risk and invisible work legible to a decision-maker, addressing a request's underlying need rather than its stated form, and applying the same scrutiny to a candidate's own past decisions as to anyone else's.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around evidential strength, systemic diagnosis, and whether a response makes invisible risk or invisible work legible to a decision-maker. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
