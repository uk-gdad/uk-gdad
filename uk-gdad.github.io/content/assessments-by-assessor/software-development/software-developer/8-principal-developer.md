# Principal Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for principal developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A principal developer leads and plans development across large or multiple teams, is either an expert across many technical areas or a specialist with very deep knowledge in one, and uses that knowledge alongside related disciplines to keep several teams working effectively. The role summary also names developing capability through internal mobility, career paths and recruitment, and identifying, testing and championing the adoption of emerging technologies.

On the technical track, the skills that define this level are demanding: designing systems characterised by high levels of risk, impact and business or technical complexity; controlling system design practice within an enterprise architecture; influencing industry-based models; developing implementation and procurement strategies consistent with business needs; and ensuring adherence to technical strategies, policies and standards.

The reasoning that produces good outcomes at this level differs in kind from earlier levels. A principal developer is frequently the most technically informed person in the room, which means nobody else will catch their errors. Decisions made here have consequences arriving in years, on systems whose behaviour under stress is not fully knowable, in organisations where the constraint is rarely technical — and championing emerging technology requires the specific and uncomfortable discipline of being enthusiastic and rigorous about the same thing at once.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate reasons about failure modes, combined causes, and organisational constraints rather than technical elegance alone — several items are deliberately built so a confident, decisive-sounding answer is the weaker one where the facts call for establishing a shared cause or a hidden ceiling first. Verbal items reward precise reading of governance, strategy and licensing language against the passage alone. Situational judgement items at this level consistently reward a response that makes reasoning legible and checkable to people who cannot verify it directly, converts authority disputes into testable predictions, and names uncomfortable facts about the candidate's own past work rather than defending it.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, using material drawn from the role. At principal level that means architectural options with long-lived consequences, failure analysis across system boundaries, technology evaluation, procurement strategy and the design of standards that will govern multiple teams.

The format is typically fifteen to thirty minutes online, covering deduction, pattern recognition, error checking, prioritisation and applied problem solving, scored objectively against a norm group of comparable seniority. Adaptive tests escalate difficulty; reports typically separate speed from accuracy.

Three things distinguish this section at this level. First, complex systems fail in combinations — a single-cause analysis of a serious failure in a distributed system is usually incomplete, and the interesting question is which conditions had to hold simultaneously. Second, architectural decisions are best evaluated by their failure characteristics rather than their success characteristics, since two designs that both work will differ enormously in what they do when a dependency is slow, and slow is worse than down. Third, constraints at this level are rarely technical — a technically superior option that cannot be procured, staffed or operated is not superior, and treating organisational constraints as noise is the characteristic principal-level error.

### How this assessment maps to the role

- **Failure-mode reasoning** maps to **Systems design**, designing for high risk and impact.
- **Multi-causal analysis** maps to **Service support** and **Availability and capacity management**.
- **Technology evaluation** maps to identifying, testing and championing emerging technologies.
- **Strategy and procurement reasoning** maps to developing implementation and procurement strategies.
- **Standards design** maps to **Modern development standards** and controlling design practice.
- **Security reasoning** maps to **Information security**, designing and quality assuring against threats.

### Practice questions

**Question 1 (easy) — Deduction from an architectural rule**

Design standard: "Services must not call each other synchronously across domain boundaries, except where the call is a read of reference data with a published cache policy." A service makes a synchronous cross-domain call. Ask which conclusion must be true.

- A) The standard was breached.
- B) It reads reference data.
- C) Either the call is a read of reference data with a published cache policy, or the standard was breached.
- D) The call should be made asynchronous.

**Correct answer: C**

**Explanation:** A rule with a compound exception plus a fact silent on the exception yields only the disjunction, and the exception has two conjoined conditions — reference data and a published cache policy — so option B would be insufficient even if established. This tests deducing only what the facts guarantee, and, in a strong candidate's answer, noting the practical corollary that a standard whose exception depends on a published cache policy needs somewhere that policy is actually published, or it cannot be checked.

**Question 2 (easy) — Failure characteristics**

Two designs for a dependency call: A retries three times with a 5-second timeout; B fails immediately after one 1-second timeout and serves a cached value. Ask which behaves better under a dependency that has become slow but not unavailable.

- A) Design A; retries improve success rates.
- B) Design B — a slow dependency under design A holds each request for up to 15 seconds while retrying, exhausting connection pools and threads and propagating the slowness upstream, whereas B degrades to a cached response in one second and keeps the calling service responsive.
- C) They are equivalent.
- D) Design A, provided the retries are exponentially backed off.

**Correct answer: B**

**Explanation:** Slow is worse than down, the single most useful heuristic in distributed system design — a dependency returning errors quickly lets callers fail fast, while one that hangs consumes the caller's resources and turns one degraded service into several. This tests evaluating designs by their failure characteristics rather than their success characteristics — option D improves A without changing the fundamental problem that the caller still waits, and timeouts should be set by what the caller can afford, not by what the dependency might need.

**Question 3 (moderate) — Combination failures**

A serious outage occurred when a cache expired, a batch job was running, and a deployment was in progress; individually, none has caused an issue before. Ask for the strongest analysis.

- A) The deployment caused it; it was the change.
- B) The failure required a conjunction, so the analysis should identify what resource the three shared — most likely database connections, CPU, or a lock — because the remedy for a conjunction failure is usually to isolate or bound the shared resource rather than to prevent any one of the three conditions.
- C) The batch job should not run during business hours.
- D) Deployments should not happen while batch jobs run.

**Correct answer: B**

**Explanation:** Three individually safe conditions combining is the classic signature of contention for a shared, unbounded resource, and finding that resource produces a fix that generalises, unlike options C and D, which each prevent one specific pairing and leave the underlying fragility for a fourth condition to combine with two of these. This tests recognising a conjunction failure and looking for the shared resource behind it, rather than naming the most recent change as the single cause — the way most single-cause incident reports on complex systems go wrong.

**Question 4 (moderate) — Championing an emerging technology**

A candidate believes an emerging technology would significantly benefit several teams. Ask for the strongest way to champion it.

- A) Present the case to leadership with the benefits and a proposed rollout.
- B) Run a genuine test with a pre-agreed definition of what would count as failure, on a real workload rather than a demonstration, and publish the result either way — because a champion whose evaluations only ever succeed is discounted, and the credibility to get the next adoption through is worth more than this one.
- C) Pilot it in one team and expand if it goes well.
- D) Wait for another organisation to adopt it first.

**Correct answer: B**

**Explanation:** The two words carrying the weight are "pre-agreed" and "either way" — a pilot without a prior failure criterion nearly always succeeds, because the people running it want it to and a favourable interpretation is always available. This tests designing an evaluation capable of producing a negative result, since that is the only thing that makes a positive one worth anything — option C is the standard approach whose weakness is exactly the missing failure criterion, while A advocates before evidence and D is the risk-averse posture that makes a principal developer's technology role pointless.

**Question 5 (moderate) — Organisational constraint**

The technically strongest option for a new platform requires skills the organisation does not have and cannot easily recruit. Ask for the strongest analysis.

- A) Choose it anyway; technical quality matters most.
- B) A platform the organisation cannot operate is not the strongest option — operability by the people who will actually run it is a design criterion, not a compromise — so the real comparison is between the second option and the first plus a credible, funded plan to build the capability, and the second usually wins.
- C) Choose the second option.
- D) Outsource operation of the first.

**Correct answer: B**

**Explanation:** The framing in option B is what distinguishes principal-level judgement: operability is part of the design, not a constraint imposed on it, since a system nobody in the organisation can debug at 3am is a bad system regardless of its architecture. This tests treating operability as a design criterion while keeping the technically stronger option live under the one condition that would make it viable — a funded capability plan — rather than reaching the usual conclusion without the reasoning (C) or moving the problem to a supplier that cannot be evaluated (D).

**Question 6 (moderate) — Standard design across many teams**

Designing a standard that will apply to twelve teams with varying maturity. Ask for the strongest approach.

- A) Set the standard at the level the best teams already achieve.
- B) Separate what must be uniform from what can vary — interfaces, security controls and data handling usually must; internal practices usually need not — because a standard that constrains internal choices costs twelve teams daily for benefits that mostly accrue at boundaries.
- C) Set the standard at the level most teams can currently meet.
- D) Let each team set its own standards.

**Correct answer: B**

**Explanation:** The useful question is not how demanding a standard should be but what it should cover, and the answer follows from where the cost of divergence falls — interfaces, security controls, and data handling impose costs on everyone else, while internal testing practices mostly do not. This tests applying that scope test rather than setting a bar most teams will fail (A, which creates widespread non-compliance that then normalises), a bar that changes nothing (C), or abandoning the coordination that is the point of a principal-level design authority (D).

**Question 7 (harder) — Reading a procurement trade-off**

A supplier product would deliver a required capability in three months; building it would take nine. The product's licence permits use only within the department, and there is a plausible future need to share the capability across government. Ask for the strongest analysis.

- A) Buy it; six months is decisive.
- B) The licence restriction is the deciding factor if cross-government sharing is likely, since a capability that cannot be shared may need rebuilding later at full cost plus migration — so the question is how firm that future need is, and whether the licence can be negotiated, before the six-month difference means anything.
- C) Build it; government capabilities should be reusable.
- D) Buy it now and build a replacement later.

**Correct answer: B**

**Explanation:** The six-month difference is the visible variable and the licence term is the one that determines total cost — if cross-government sharing is genuinely likely, buying means paying for the product and then building anyway, with a migration on top. This tests weighing the probability-weighted cost of a licence restriction against a visible delivery-time difference, and identifying the practical next step (testing whether the licence is negotiable) rather than applying a principle without weighing likelihood (C) or describing the expensive outcome as though it were a plan (D).

**Question 8 (harder) — Diagnosing across a boundary**

Two teams each report their service is behaving correctly, yet a user journey spanning both fails intermittently. Ask for the strongest first step.

- A) Ask both teams to investigate more thoroughly.
- B) Establish whether the two services agree on the contract at the point of failure — the commonest cause of "both services are fine" is a difference in interpretation at the boundary, such as timeout expectations, retry semantics, or what a particular response code means — and get a single trace across both services rather than two sets of logs.
- C) Add monitoring to the journey.
- D) Assume it is a network problem.

**Correct answer: B**

**Explanation:** "Both components are behaving correctly and the system is failing" almost always means the components have different models of the interface — mismatched timeouts, retry semantics against a non-idempotent operation, or disagreement about what a status code means. This tests naming the candidate boundary mismatches and prescribing the diagnostic that actually resolves cross-boundary problems, a single correlated trace, rather than repeating an approach that has already failed (A) or guessing at a cause (D).

**Question 9 (harder) — Evaluating a claim about scale**

A team proposes a design and states it will "scale horizontally". Ask for the strongest challenge.

- A) Ask for load test results.
- B) Ask what does not scale horizontally in the design — there is always something, usually a database, a shared lock, a sequence generator or a coordination service — because the useful information is where the ceiling is and at what load it is reached, not whether the stateless tier can be replicated.
- C) Accept it; horizontal scaling is well understood.
- D) Ask about the cost at scale.

**Correct answer: B**

**Explanation:** "Scales horizontally" is almost always a claim about the application tier, the easy part, while the system's actual limit lives in the shared component behind it — a design that scales to ten times current load and one that scales to 1.5 times are described identically by the phrase. This tests locating the ceiling directly rather than accepting the claim (C) or asking a related but different question about cost (D) — option A is a good follow-up, since a load test typically explores a range someone chose in advance, which is not the same as finding the ceiling.

**Question 10 (harder) — A pattern across incidents**

Across a year, seven significant incidents occurred in four different services; in six of the seven, the initial alert was for a symptom in a service downstream of the actual fault. Ask for the strongest conclusion.

- A) The services need better alerting.
- B) The pattern indicates that faults are being detected by their consequences rather than at source, which suggests the failing components lack health signals of their own — so the improvement is instrumentation at the point of failure and dependency-aware alerting, and the current mean time to diagnose is being inflated by teams starting their investigation in the wrong service.
- C) The incident response process is too slow.
- D) Six out of seven is not a large enough sample.

**Correct answer: B**

**Explanation:** The consistency of the pattern is the finding — six of seven is a systemic property of the monitoring, not a coincidence, and detecting faults downstream means every incident begins with a team investigating a service that is working correctly. This tests naming both remedies (instrumentation at the point of failure and dependency-aware alerting) rather than an unspecific direction that could make things worse (A, "better alerting" could mean more alerts) or addressing a symptom of the same cause (C).

**Question 11 (harder) — Deciding what not to design**

Asked to design a system for a business process itself under review, which may change substantially within a year. Ask for the strongest approach.

- A) Design for the current process and accept rework.
- B) Design for the parts that will not change and defer the rest — the data the process operates on and the integrations at its edges are usually stable, while the sequencing and rules are what is under review — and be explicit that flexibility in the volatile parts costs something and is being bought deliberately.
- C) Design a highly configurable system that can handle any process.
- D) Wait for the review to conclude.

**Correct answer: B**

**Explanation:** Option B applies the right distinction, between the stable substrate and the volatile logic, and names the cost honestly. This tests avoiding the trap of building a fully configurable process engine (C), which is far more expensive to build, much harder to understand, and typically still fails to accommodate the change that actually arrives — generality bought speculatively is usually wasted, and option D is available only if the timeline permits, which the scenario implies it does not.

**Question 12 (harder) — Influencing without authority**

A candidate believes a programme outside their control is heading for a serious technical problem, with no formal role in it. Ask for the strongest approach.

- A) Raise it formally through governance.
- B) Take it to the people making the decision, privately and with the specific technical reasoning and what would falsify it — because an outside technical challenge arriving through governance is heard as an attack on a programme's competence, and the same content delivered directly is usually heard as help.
- C) Say nothing; it is not the candidate's programme.
- D) Document the concern for the record.

**Correct answer: B**

**Explanation:** The content and the channel are separable, and the channel largely determines whether the content lands — option B keeps the concern technical, gives the programme a chance to act without a public loss of face, and includes what would show the concern wrong. This tests choosing a channel that keeps a cross-programme concern actionable rather than defensive-triggering (A, a poor opening move that puts the programme on the back foot) or self-protective without helping the outcome (D).

### Administration tips

- Score for whether the candidate evaluates a design by its failure characteristics (what happens when a dependency degrades) rather than only its success characteristics.
- Note whether the candidate looks for a shared resource or mechanism behind a conjunction of individually-safe conditions, rather than naming a single most-recent cause.
- Watch for whether a technology pilot or evaluation is designed with a pre-agreed, genuine failure criterion.
- Score for whether operability, procurability or staffability is treated as a design criterion rather than an externality to a technically superior option.
- Note whether the candidate locates the actual ceiling or ambiguity in a claim ("scales horizontally", "both services are fine") rather than accepting it at face value.

### Common pitfalls to watch for when scoring

- Crediting a single-cause explanation for a failure that required a conjunction of conditions.
- Missing when a candidate would pilot or champion a technology without a genuine, pre-agreed failure criterion.
- Rewarding a technically superior option chosen without weighing whether the organisation can operate, staff or procure it.
- Accepting "scales horizontally" or a similarly vague claim without probing for where the actual ceiling sits.
- Missing when a candidate treats a governance or cross-programme concern as best raised through the most visible or formal channel rather than the one most likely to be heard.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from operational and financial data at speed. At principal level the data is what shapes multi-year decisions: capacity models, reliability budgets, total cost of ownership, procurement comparisons and the volumetrics of systems that do not yet exist.

The format is typically fifteen to twenty-five minutes with a calculator, mixing computational items with items asking what the data supports. The second kind matters more at this level, since a principal developer is usually the person whose numeric claim nobody else in the room can check.

Three habits are worth naming: reasoning about a system that does not exist yet, from volumetrics somebody estimated, calls for establishing what the answer is sensitive to and bounding it rather than computing a precise figure from an invented input; costs at this level compound over years and include operation, not just build, so a comparison stopping at delivery cost is the wrong comparison; and reliability arithmetic is multiplicative across dependencies, producing figures that surprise people, and this role is expected to know that before a design is committed.

### How this assessment maps to the role

- **Reliability composition** maps to **Systems design** and **Availability and capacity management**.
- **Capacity modelling** maps to managing service components against KPIs.
- **Total cost of ownership** maps to developing implementation and procurement strategies.
- **Volumetrics under uncertainty** maps to designing systems of high complexity.
- **Process and throughput metrics** map to **Development process optimisation**.
- **Security risk quantification** maps to **Information security**.

### Practice questions

*Table 1 — Component availability, current architecture*

| Component | Measured availability | Calls per user request |
|---|---|---|
| API gateway | 99.99% | 1 |
| Identity service | 99.95% | 1 |
| Core service | 99.9% | 1 |
| Reference data service | 99.5% | 1 |
| Database cluster | 99.99% | 1 |

**Question 1 (easy) — Reading a table**

Ask which component is least available.

- A) Core service
- B) Reference data service
- C) Identity service
- D) API gateway

**Correct answer: B**

**Explanation:** The reference data service at 99.5% is an order of magnitude less available than the gateway and database at 99.99%. This tests reading the table for the weakest figure, and, in a strong candidate's answer, noting 99.5% is about 3.6 hours of downtime a month, and that reference data is exactly the kind of component that could tolerate caching.

**Question 2 (easy) — Availability in minutes**

Ask how much monthly downtime 99.5% availability allows in a 30-day month.

- A) About 43 minutes
- B) About 3.6 hours
- C) About 22 minutes
- D) About 7 hours

**Correct answer: B**

**Explanation:** 43,200 × 0.005 = 216 minutes = 3.6 hours. This tests the standard conversion, and fluency with the reference points at this level: 99.9% ≈ 43 minutes, 99.95% ≈ 22 minutes, 99.99% ≈ 4.3 minutes, 99.5% ≈ 3.6 hours — the last is the one commonly underestimated, since 99.5% sounds close to 99.9% and is actually eight times worse.

**Question 3 (moderate) — Composed availability**

If a user request requires all five components in Table 1 to be available, ask for the approximate composed availability.

- A) About 99.9%
- B) About 99.33%
- C) About 99.5%
- D) About 99.7%

**Correct answer: B**

**Explanation:** 0.9999 × 0.9995 × 0.999 × 0.995 × 0.9999 ≈ 0.9933. This tests recognising that serial dependencies multiply, so the composed system is worse than its worst component — roughly 4.8 hours of monthly downtime — and, in a strong answer, recognising the reference data service contributes nearly all the loss, so caching it alone would take the composed figure to about 99.83%.

**Question 4 (moderate) — Redundancy**

If the reference data service were made redundant with two independent instances each at 99.5%, ask for the approximate availability of the pair, assuming either alone is sufficient.

- A) 99.75%
- B) 99.9975%
- C) 99.5%
- D) 99.95%

**Correct answer: B**

**Explanation:** For parallel redundancy: 0.005 × 0.005 = 0.000025, so availability is 99.9975%. This tests computing a parallel-redundancy figure correctly and, critically, flagging the word "independent" — if both instances share a datastore, network segment, deployment, or configuration source, the failures are correlated and the real figure is nowhere near this, which is why measured availability of redundant pairs rarely approaches the theoretical number.

*Table 2 — Two platform options, five-year view (£000)*

| | Option A (build) | Option B (supplier) |
|---|---|---|
| Year 1 build/setup | 900 | 150 |
| Annual licence | 0 | 260 |
| Annual operation | 180 | 60 |
| Annual support staff | 120 | 40 |
| Exit/migration cost | 0 | 200 |

**Question 5 (moderate) — Five-year total**

Ask for the approximate five-year total cost of Option A.

- A) £1,900,000
- B) £2,400,000
- C) £1,500,000
- D) £2,100,000

**Correct answer: B**

**Explanation:** £900k build + (5 × £180k) operation + (5 × £120k) support = £900k + £900k + £600k = £2,400,000. This tests totalling recurring costs across the horizon before comparing to a build cost — the build cost everyone quotes (£900k) is barely a third of the lifetime figure.

**Question 6 (moderate) — Comparing the options**

Ask for the approximate five-year total for Option B, including exit.

- A) £2,000,000
- B) £2,150,000
- C) £1,800,000
- D) £2,400,000

**Correct answer: B**

**Explanation:** £150k + (5 × £260k) + (5 × £60k) + (5 × £40k) + £200k = 150 + 1,300 + 300 + 200 + 200 = £2,150,000. This tests the same totalling discipline applied to a licensed option, arriving at a gap (£250k) considerably closer than the initial build-cost comparison suggests — and, in a strong answer, noting the gap would reverse over a longer horizon, since Option A's annual cost (£300k) is lower than Option B's (£360k).

**Question 7 (moderate) — Sensitivity**

Ask over what approximate period the two options in Table 2 cost the same, ignoring exit costs.

- A) About 8 years
- B) About 12 years
- C) About 5 years
- D) About 20 years

**Correct answer: B**

**Explanation:** 900 + 300n = 150 + 360n → 750 = 60n → n = 12.5 years. This tests computing a crossover point when comparing build against buy, arriving at a figure (roughly twelve and a half years) longer than most platforms survive — a fact that reframes a build-versus-buy debate conducted in terms of abstract principle.

**Question 8 (harder) — Capacity model under uncertainty**

Sizing a new service, with an estimated user base of "between 50,000 and 200,000" and peak concurrency estimated at 3% to 8%. Ask for the strongest approach.

- A) Size for the midpoint: 125,000 users at 5.5% concurrency.
- B) Recognise that the range spans 1,500 to 16,000 concurrent users — more than a tenfold difference — so a point estimate is meaningless, and the right output is a design that can scale across the range plus an identification of what would let the estimate be narrowed, since the cost of the two extremes differs enormously.
- C) Size for the maximum: 200,000 at 8%.
- D) Size for the minimum and scale later.

**Correct answer: B**

**Explanation:** 50,000 × 3% = 1,500; 200,000 × 8% = 16,000 — the two independent uncertainties compound into a tenfold range in concurrent load, which is a different system, not a different capacity setting. This tests recognising when a midpoint estimate is meaningless and identifying that narrowing the range, rather than picking a number within it, is the actual work — a midpoint (A) will be treated as settled by anyone it is given to.

**Question 9 (harder) — Error rate and volume**

A service handles 4 million requests a day; a proposed change would introduce a failure mode affecting an estimated 0.02% of requests. Ask how many requests per day would be affected, and whether the figure matters.

- A) 80 per day; negligible.
- B) 800 per day, which is a small percentage and a large number of people — at that volume a "negligible" failure rate produces roughly 24,000 affected requests a month, so whether it matters depends entirely on what the failure does to the user, not on the percentage.
- C) 8,000 per day; unacceptable.
- D) 80,000 per day.

**Correct answer: B**

**Explanation:** 4,000,000 × 0.0002 = 800 per day. This tests the arithmetic and, more importantly, converting a rate into an absolute count before judging whether it matters — 0.02% sounds like a rounding error and describes 800 people a day, each of whom experienced something, with the actual acceptability depending on what the failure means for them (a retry versus a lost benefit application).

**Question 10 (harder) — What the data supports**

After a caching layer was introduced, mean response time fell from 340ms to 120ms and error rates rose from 0.05% to 0.4%. Ask for the strongest conclusion.

- A) The cache is a success; latency improved substantially.
- B) The latency improvement is large and the eightfold error increase needs explaining before the change can be called a success — the plausible mechanisms are cache-related failures, stale data causing downstream validation failures, or added infrastructure introducing its own faults, and which one it is determines whether this is fixable or inherent.
- C) The cache should be removed.
- D) The two changes are unrelated.

**Correct answer: B**

**Explanation:** Both figures moved substantially, and reporting only the favourable one is the specific failure this item tests — an eightfold error increase is not noise. This tests naming candidate mechanisms with different implications (a misconfigured cache is fixable quickly; stale data breaking downstream validation may be intrinsic to caching this particular data) rather than reporting only the favourable metric (A), discarding a large genuine benefit before diagnosis (C), or asserting independence for two changes that arrived together (D).

**Question 11 (harder) — Throughput ceiling**

A design processes messages through a queue: producers generate 12,000 messages per minute at peak, each consumer handles 400 messages per minute, and the design specifies 25 consumers. Ask for the position.

- A) Comfortable; 25 consumers handle 10,000 per minute.
- B) Under-provisioned at peak: 25 × 400 = 10,000 per minute against 12,000 arriving, so the queue grows by 2,000 messages per minute for the duration of the peak and only drains afterwards — which may be acceptable if the peak is short and latency-tolerant, and is a design fault if it is not.
- C) Comfortable; queues absorb bursts.
- D) Under-provisioned; 40 consumers are needed.

**Correct answer: B**

**Explanation:** Consumption capacity is 10,000/minute against 12,000/minute arriving, a 2,000/minute deficit. This tests computing the deficit and then asking the necessary follow-up — whether the resulting backlog matters, which depends on the peak's duration and the messages' latency tolerance — rather than stopping at the multiplication (A), treating queues as inherently absorbing any deficit (C), or prescribing a fixed number of additional consumers without asking whether the backlog is actually a problem (D).

**Question 12 (harder) — Risk quantification**

A security control would cost £150,000 a year, mitigating a risk estimated at a 5% annual chance of an incident costing £1.5m. Ask for the strongest analysis.

- A) Implement it; the risk is £75,000 a year expected loss, less than the control.
- B) The expected annual loss is £75,000 against a £150,000 control, so on expected value alone it fails — but expected value is the wrong sole criterion for a low-probability high-impact risk, since the organisation may be unable to absorb a £1.5m single event, and the estimates themselves are soft enough that the comparison is not decisive.
- C) Do not implement it; the expected loss is half the cost.
- D) Implement it; security is not optional.

**Correct answer: B**

**Explanation:** 5% × £1.5m = £75,000 expected annual loss against a £150,000 control, so a pure expected-value comparison rejects it — option A states the arithmetic correctly and draws the opposite conclusion, an error worth catching. This tests computing expected value and then declining to treat it as decisive for a low-probability, high-impact risk, given variance the organisation may not be able to absorb and soft underlying estimates — rather than following the arithmetic mechanically to reject the control (C) or refusing analysis entirely (D).

### Administration tips

- Score for whether the candidate multiplies availabilities for serial dependencies and failure probabilities for parallel ones, and flags correlated failure risk in a "redundant" pair.
- Note whether recurring costs across a stated horizon are totalled and compared, rather than only the initial build or setup cost.
- Watch for whether the candidate converts a percentage or rate into an absolute count before judging whether it matters, particularly at high volume.
- Score for whether a wide or compounded uncertainty range is treated as a genuine range (with what would narrow it) rather than collapsed into a single midpoint estimate.
- Note whether the candidate reports an unfavourable metric alongside a favourable one, rather than presenting only the positive figure.

### Common pitfalls to watch for when scoring

- Crediting a composed-system availability assumed to be no worse than its worst component.
- Missing when a candidate trusts a parallel-redundancy figure without checking for a shared, correlated point of failure.
- Rewarding a build-versus-buy comparison that stops at initial cost without operation and exit costs.
- Accepting a midpoint estimate offered across a wide or compounded uncertainty range.
- Missing when a candidate presents a favourable metric (a latency improvement) without the unfavourable one that moved alongside it (an error-rate increase).

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what written material establishes. At principal level the material is technical strategy, architecture governance, procurement terms, security standards and cross-organisational agreements — documents that allocate authority and create obligations.

The commonest format gives a passage and asks for statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means neither — irrespective of what the candidate knows. Deep expertise is the main hazard, since a strong candidate will frequently supply from experience what the passage has not said.

Three specifics matter at this level: governance documents allocate authority precisely, with "approves", "endorses", "is consulted", "is informed" and "may direct" describing different powers, so acting on a misreading is a governance failure rather than a technical one; strategy documents are frequently written to sound more binding than they are, and distinguishing a commitment from an aspiration is a skill with real consequences; and procurement and licensing prose defines scope narrowly and by exception, so a permission granted for one purpose does not extend to a neighbouring one.

### How this assessment maps to the role

- **Reading governance and authority** maps to controlling system design practice within an enterprise architecture.
- **Reading strategy** maps to ensuring adherence to technical strategies and policies.
- **Reading procurement and licence terms** maps to developing procurement strategies.
- **Reading security standards** maps to **Information security**.
- **Reading service and integration agreements** maps to **Systems integration**.
- **Precision in communication** maps to providing technical advice to stakeholders.

### Practice questions

*Passage A — for Questions 1 to 4*

"The design authority approves architectural decisions with cross-departmental impact. Decisions confined to a single service are made by the service's technical lead, who must notify the design authority where the decision departs from a published pattern. The design authority may direct that a decision within a single service be brought to it for approval, where in its view the decision sets a precedent. The chief technology officer endorses the design authority's decisions and may return a decision for reconsideration once, with reasons; a decision returned and reaffirmed by the design authority stands."

**Question 1 (easy)**

Statement: A decision confined to a single service is made by the service's technical lead.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests the baseline reading, noting the two qualifications that follow — a notification duty and the design authority's call-in power — do not change who makes the decision by default.

**Question 2 (moderate)**

Statement: The chief technology officer can overturn a decision of the design authority.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: the CTO "endorses" decisions and "may return a decision for reconsideration once, with reasons", and "a decision returned and reaffirmed by the design authority stands." This tests distinguishing a single power of return from a veto — reading "endorses" as approval-with-power-to-refuse is the natural error, and the final clause exists specifically to close it.

**Question 3 (moderate)**

Statement: A technical lead making a decision that follows a published pattern within a single service has no obligation to notify the design authority.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The notification duty is qualified — "where the decision departs from a published pattern" — and following the pattern means the qualifier is not met. This tests reading a conditional obligation correctly, and, in a strong answer, noting this says nothing about the design authority's separate precedent-based call-in power.

**Question 4 (harder)**

Statement: The design authority can require a single-service decision to come to it for approval only where the decision departs from a published pattern.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts "only": the call-in power is conditioned on the design authority's view that a decision "sets a precedent", a different and independent test from departing from a published pattern. This tests catching a statement that imports a condition attached to one mechanism (notification) and applies it to a different one (call-in) — a common and consequential misreading of governance text.

*Passage B — for Questions 5 to 8*

"The departmental technology strategy states that new services will adopt the shared platform where it meets their needs. Services with requirements the platform cannot meet may build alternative arrangements, subject to approval by the design authority and an assessment of whole-life cost. The strategy anticipates that the majority of new services will be on the shared platform within three years. Existing services are not required to migrate, although migration is encouraged where a service is undergoing substantial redevelopment. The platform's roadmap is set by the platform team in consultation with a user group drawn from adopting services."

**Question 5 (easy)**

Statement: A new service whose requirements the shared platform cannot meet may build an alternative arrangement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, with two conditions attached: design authority approval and a whole-life cost assessment. This tests reading a gated permission as still established.

**Question 6 (moderate)**

Statement: Existing services undergoing substantial redevelopment must migrate to the shared platform.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts "must": existing services "are not required to migrate," and migration is merely "encouraged" during substantial redevelopment. This tests distinguishing encouragement from a requirement — a shape common in strategy prose, where a firm-sounding sentence on inspection creates no obligation.

**Question 7 (moderate)**

Statement: The majority of new services will be on the shared platform within three years.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the strategy "anticipates" this — a forecast, and the passage establishes that the forecast exists rather than that the outcome will occur. This tests catching the specific error strategy documents most reliably induce: reading a document's expectation as a fact about the world.

**Question 8 (harder)**

Statement: An adopting service can require a feature to be added to the platform roadmap.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage assigns roadmap authority to the platform team "in consultation with a user group drawn from adopting services" — consultation is not control, and the roadmap is explicitly set by the platform team. This tests recognising that the passage allocates the decision elsewhere rather than merely omitting the adopting service's power, which is what makes this False rather than Cannot Say.

*Passage C — for Questions 9 to 12*

"The licence grants the customer a non-exclusive right to use the software for internal business purposes at the sites listed in Schedule 1. Use at additional sites requires a variation to this agreement. The customer may make copies for backup and disaster recovery purposes only. The customer may not permit access by any third party, except that access by a contractor engaged by the customer, working under the customer's direction and bound by equivalent confidentiality obligations, is permitted for the duration of the engagement. The supplier will provide security patches for the supported version for the term of the agreement, and is not obliged to provide patches for any version the customer has modified."

**Question 9 (moderate)**

Statement: The customer may allow a contractor to access the software.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage establishes this through the exception to the third-party prohibition, subject to three conjunctive conditions: engaged by the customer, working under the customer's direction, and bound by equivalent confidentiality obligations, for the engagement's duration. This tests reading a narrow, conditional permission as real but bounded — a contractor engaged by a different organisation is not covered, however trusted.

**Question 10 (moderate)**

Statement: The customer may use the software at a new site opened during the term.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The licence is granted for "the sites listed in Schedule 1", and "use at additional sites requires a variation to this agreement." This tests recognising a new site as an additional site, contradicting the unqualified statement — a term straightforward to read and routinely breached in practice when an estate changes without the licence being reread.

**Question 11 (harder)**

Statement: The supplier will not provide security patches if the customer has modified the software.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the supplier "is not obliged to provide patches for any version the customer has modified," which removes an obligation without establishing a refusal. This tests distinguishing "is not obliged to" from "will not" — treating the absence of an obligation as a prohibition is the natural misreading, and the practical significance is that a modification would rely on the supplier's goodwill rather than the contract.

**Question 12 (harder)**

Statement: The customer may make a copy of the software to use in a test environment.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage permits copies "for backup and disaster recovery purposes only," and "only" excludes other purposes including testing. This tests reading "only" as fully exclusionary, catching a genuinely common operational breach — an architecture assuming a full non-production copy of a licensed product may be unlicensable as designed.

### Administration tips

- Score for whether the candidate distinguishes approval, endorsement, consultation, notification and directive powers precisely in governance text.
- Note whether a condition attached to one mechanism is correctly kept separate from a condition attached to a different mechanism in the same passage.
- Watch for whether forecasting language ("anticipates", "expects") is read as a forecast rather than a commitment.
- Score for whether "is not obliged to" is read as removing a duty rather than creating a prohibition.
- Note whether the candidate treats an exclusive word ("only") as excluding every unnamed case, including a plausible-sounding neighbouring one.

### Common pitfalls to watch for when scoring

- Crediting endorsement read as a veto power.
- Missing when a candidate reads encouragement as a requirement.
- Rewarding a strategy's stated projection treated as an established outcome.
- Accepting consultation read as control over a decision or roadmap.
- Missing when a candidate extends a site- or purpose-limited licence permission to a case it does not cover.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level the scenarios involve influence without direct authority, decisions with long-horizon consequences, disagreement with senior people, and the recurring problem that being right is not sufficient.

The commonest formats ask for the most and least effective response, or ratings for each. Scoring is against a key derived from experienced practitioners at comparable seniority — professional consensus.

Three patterns run through the strong answers at this level. First, technical authority is a finite resource, and a principal developer who objects to everything is routed around. Second, being the most informed person in the room creates an obligation to make reasoning legible, including its uncertainty — confident assertion from someone nobody can check is how organisations acquire expensive mistakes. Third, this role frequently works through people it does not manage, over timescales longer than anyone's attention, so the durable move is usually to change what people can see rather than to win an argument.

### How this assessment maps to the role

- **Influence and technical advice** map to providing technical advice to stakeholders.
- **Design authority** maps to controlling system design practice.
- **Capability development** maps to facilitating internal mobility, shaping career paths and recruiting.
- **Technology adoption** maps to identifying, testing and championing emerging technologies.
- **Security leadership** maps to leading others in using appropriate information security practices.
- **Cross-team coordination** maps to keeping multiple teams working effectively.

### Practice questions

**Question 1 (easy) — A design considered wrong**

A team presents a design believed to be a mistake; they have thought about it and disagree. Ask for the most effective response.

- A) Direct them to change it; design authority permits it.
- B) Set out specifically what is expected to go wrong and under what conditions, ask what they expect to happen in those conditions, and treat a good answer as evidence of being wrong — because a testable prediction converts an authority dispute into a question, and the candidate is sometimes the one mistaken.
- C) Let them proceed; it is their service.
- D) Escalate to their lead.

**Most effective: B. Least effective: D**

**Explanation:** A specific prediction — "under sustained load above X, this will exhibit Y" — is the most useful contribution available, since it can be checked, teaches the reasoning rather than the conclusion, and leaves room to be wrong. This tests converting an authority dispute into a testable question — option D routes around the people being disagreed with, the least repairable of the four, while option A wins today at the cost of the team's engagement.

**Question 2 (easy) — A championed technology is struggling**

A technology the candidate advocated for is causing a team difficulty, and they are frustrated. Ask for the most effective response.

- A) Help them work through the difficulties.
- B) Help with the immediate difficulties and establish honestly whether this is a learning curve or a genuine mismatch, stating which it looks like — because if the technology is wrong for this case, the candidate is best placed to say so and least likely to be believed if they wait.
- C) Suggest they persevere; adoption is always difficult early.
- D) Support them in reverting to the previous approach.

**Most effective: B. Least effective: C**

**Explanation:** Both halves matter: immediate help is what the team needs today, and the honest assessment is what the role requires — a learning curve produces difficulties that decline, a mismatch produces recurring friction in the same place. This tests offering the judgement only the candidate can make, rather than the default advocate's response (C), which is precisely what makes future advocacy discounted.

**Question 3 (moderate) — Pressure to approve a design**

A programme under time pressure asks for approval of a design with significant concerns; delay would be costly and visible. Ask for the most effective response.

- A) Approve it; the delay cost is real and the concerns are judgement calls.
- B) Separate concerns that are genuinely blocking from those that are preferences, approve conditional on the blocking ones being addressed with a named owner and date, and record what is being accepted — because an unconditional approval on a flawed design gets quoted back later, and a conditional one keeps the programme moving.
- C) Refuse to approve until the concerns are resolved.
- D) Approve it and note the concerns for the record.

**Most effective: B. Least effective: D**

**Explanation:** The discipline in option B is the separation — most "significant concerns" contain one or two that genuinely matter and several that reflect a different way of doing it. This tests conditional approval with named owners and dates over an unqualified approval (A) or blocking everything (C) — option D is least effective and close to worthless, since a noted concern with no owner and no date changes nothing and reads as self-protective.

**Question 4 (moderate) — A capability gap**

No team in the organisation has the skills to operate a technology now central to three services. Ask for the most effective response.

- A) Arrange training.
- B) Make the gap visible as a risk with its consequences — what happens at 3am when the person who knows it is unavailable — and propose a specific remedy with a cost, whether training, recruitment, internal mobility, or reducing dependence on the technology.
- C) Recruit a specialist.
- D) Reduce reliance on the technology.

**Most effective: B. Least effective: C**

**Explanation:** This role names developing capability, and making an invisible risk visible in fundable terms is the effective first move — the 3am framing is the concrete form of the risk. This tests presenting a risk with options and costs, rather than choosing a single remedy (A, C, D) without the analysis that would show which is right — recruitment alone is least effective as a first response, since it is slow and uncertain without first sizing the exposure.

**Question 5 (moderate) — An emerging technology with organisational appetite**

Senior leadership is enthusiastic about a technology the candidate has evaluated and found unsuitable for the context. Ask for the most effective response.

- A) Set out the evaluation and recommend against it.
- B) Present the evaluation in terms of the specific conditions under which the technology works well and the ways this context differs — because leadership enthusiasm usually comes from a real success story elsewhere, and showing why that context differs is far more persuasive than a negative recommendation, which invites the reading of resistance.
- C) Suggest a pilot to demonstrate the problems.
- D) Comply; leadership has decided.

**Most effective: B. Least effective: D**

**Explanation:** Leadership enthusiasm is nearly always downstream of a genuine case study, and disputing the technology implicitly disputes that case study — unwinnable and unnecessary. This tests locating the contextual difference rather than a direct negative recommendation (A, honest and adversarially framed) — option D is least effective, abandoning the technical judgement the role exists to provide.

**Question 6 (moderate) — Two teams building the same thing**

Two teams are independently building substantially the same capability, both partway through. Ask for the most effective response.

- A) Stop one and have it adopt the other's.
- B) Get both teams together to establish whether the capabilities are genuinely the same — they frequently differ in ways that matter and are invisible from outside — and if they are, decide which continues on the technical merits and what the other team gets in return, because the team that stops has lost weeks and needs something better than being told to stop.
- C) Let both continue; consolidation later.
- D) Have a third team build a shared version.

**Most effective: B. Least effective: A**

**Explanation:** Two things are usually wrong with the obvious response: the capabilities often are not the same, and consolidating them serves neither well, while whichever team stops has genuinely lost work that needs handling. This tests checking the assumption and the aftermath together — option A skips both, least effective, while C accepts the waste and D adds a coordination problem to a problem of coordination.

**Question 7 (harder) — Contradicting a senior stakeholder in public**

A director makes a technical claim in a large meeting that is wrong and will lead to a poor decision. Ask for the most effective response.

- A) Correct it immediately; the decision matters.
- B) Add the correcting information without framing it as a correction — supplying the relevant fact and its implication rather than contradicting the person — and follow up directly afterwards if the decision is still heading the wrong way, because the goal is the decision rather than the record of who was right.
- C) Say nothing and raise it afterwards.
- D) Ask a question that leads them to the correct position.

**Most effective: B. Least effective: C**

**Explanation:** Option B gets the necessary information into the room without a public contradiction that makes retreat costly and hardens the director's position — "worth noting that X, which would mean Y" lands where "that's not right" does not. This tests getting the information heard without triggering defensiveness — option C is least effective, risking the decision being made in the meeting without the correcting fact present.

**Question 8 (harder) — A long-horizon risk nobody wants to fund**

A core system will become unsupportable in about three years; nothing is failing now and there is no appetite to act. Ask for the most effective response.

- A) Raise it annually until someone acts.
- B) Convert the judgement into something dated and visible — the specific dates on which support ends, versions go out of security patching, or skills become unavailable — and get it onto a risk register with an owner, because "will become unsupportable" is arguable and "loses security patches in March 2029" is a fact people can plan against.
- C) Accept it; the organisation has decided.
- D) Escalate to the board.

**Most effective: B. Least effective: C**

**Explanation:** Judgements about three-year horizons lose to problems happening now, so converting the judgement into dated facts with an owner is what survives the candidate's own absence and appears in front of people at planning time. This tests turning a long-horizon technical risk into a form that competes for attention — option C is least effective, the passive version of an answer that leaves the risk entirely unmanaged.

**Question 9 (harder) — A security decision with a business cost**

A proposed control would materially reduce a security risk and add friction to a heavily used journey; the service owner does not want it. Ask for the most effective response.

- A) Insist; security risks are not negotiable.
- B) Establish what the risk actually is in concrete terms — what an attacker could do, how hard it would be, and what the consequence would be — and what the friction costs in measurable terms, then put both to whoever is accountable for the service's risk, because this is a genuine trade-off and the decision belongs to the risk owner rather than to either party.
- C) Accept the service owner's decision.
- D) Propose a lighter control.

**Most effective: B. Least effective: A**

**Explanation:** Security and usability are genuinely in tension, and pretending otherwise costs credibility on the occasions when a control really is non-negotiable. This tests quantifying both sides and routing the decision to the accountable risk owner — option A is least effective, treating a genuine trade-off as an absolute, while D is frequently right and belongs after the analysis rather than as an immediate concession.

**Question 10 (harder) — Recruiting for capability**

Asked to help recruit for a role requiring deep expertise in a thin market, with a salary band below market rate. Ask for the most effective response.

- A) Recruit as best possible within the band.
- B) Say plainly that the role as specified is unlikely to be filled, and offer the alternatives — a different shape of role that a strong generalist could grow into, a contract arrangement while capability is built, or a case for the band — because months spent failing to recruit is the most expensive of the available outcomes and the least visible.
- C) Ask for the band to be raised.
- D) Recommend a contractor.

**Most effective: B. Least effective: A**

**Explanation:** The failure mode here is silent and slow — a role that will not fill stays open for months with nobody recording the cost. This tests naming the problem immediately and offering routes, particularly the often-overlooked option of reshaping the role for someone who can grow into it — option A is least effective, proceeding with a plan expected to fail.

**Question 11 (harder) — The candidate's own architecture is the constraint**

A system designed four years ago by the candidate is now the main constraint on several teams' delivery. Ask for the most effective response.

- A) Defend the design; it met the requirements at the time.
- B) Set out clearly what the constraint is costing across the teams and what the options are, including the honest assessment that the original design assumptions no longer hold — and step back from the decision if possible, because a recommendation about the candidate's own work carries a discount that cannot be argued away.
- C) Propose the replacement programme.
- D) Suggest incremental improvements.

**Most effective: B. Least effective: A**

**Explanation:** Whichever way the candidate argues — for replacement or against — their view of their own architecture is discounted, and acknowledging that openly, including getting an independent assessment, is more effective than trying to be persuasive despite it. This tests handling the credibility problem of one's own past work directly — option A is least effective, the reflex defence that is usually true and irrelevant to what should happen now.

**Question 12 (harder) — Evidence against a standard the candidate set**

Data suggests a standard introduced by the candidate across twelve teams is producing significant cost with little measurable benefit. Ask for the most effective response.

- A) Review the data carefully; measurement of standards is difficult.
- B) Publish the finding, including that it is the candidate's own standard, and either withdraw it or reduce its scope to where the benefit is demonstrable — because twelve teams paying daily for something with no measurable benefit is a real cost, and withdrawing one's own standard on evidence makes every subsequent standard more credible.
- C) Improve the measurement to capture the benefits.
- D) Retain it; some benefits are not measurable.

**Most effective: B. Least effective: D**

**Explanation:** The cost is certain, distributed and daily; the benefit is unmeasured — that asymmetry should decide it, and narrowing to where the benefit shows is the right resolution rather than wholesale abandonment. This tests publishing and acting on evidence against one's own standard — option D is least effective, the argument that keeps every unproductive standard in place indefinitely, while C becomes indistinguishable from motivated reasoning when the person improving the measurement owns the standard.

### Administration tips

- Score for whether the candidate converts a design or technical disagreement into a testable, checkable prediction rather than an assertion of authority.
- Note whether blocking concerns are separated from preferences before a design or decision is approved or rejected wholesale.
- Watch for whether a long-horizon risk is converted into dated, specific facts with an owner, rather than left as a recurring judgement.
- Score for whether the candidate raises uncomfortable evidence about their own past decisions or standards proactively.
- Note whether influence without direct authority is exercised by making reasoning and evidence legible to others, rather than by asserting seniority or escalating prematurely.

### Common pitfalls to watch for when scoring

- Crediting design authority or seniority used as a first resort rather than reasoning offered as a testable claim.
- Missing when a candidate notes a concern for the record with no owner or date attached.
- Rewarding advice to "persevere" with a technology the candidate championed, without an honest diagnosis of learning curve versus genuine mismatch.
- Accepting a public correction of a senior stakeholder delivered in a way likely to trigger defensiveness rather than land the correcting fact.
- Missing when a candidate would retain their own standard indefinitely despite evidence of cost without measurable benefit.

## Conclusion

This guide has worked through the themes that define principal developer work: designs distinguished by what they do when a dependency is slow rather than when everything works, since slow is worse than down; serious failures in complex systems read as conjunctions, with the useful question being what resource the conditions shared; a standard whose exception cannot be checked treated as unenforceable; and a technically superior option the organisation cannot operate treated as not superior at all, since operability is a design criterion rather than a compromise.

The numeric section covered the arithmetic that decides architecture: availabilities multiplying in series and failure probabilities multiplying in parallel, so a composed system is worse than its worst component and a redundant pair is far better than its members provided the failures are genuinely independent; lifetime cost swamping build cost; compounding uncertainty ranges producing spans no midpoint can represent; and, at four million requests a day, 0.02% meaning 800 people.

The verbal section was about the documents that allocate this role's authority and constrain its options: endorsement is not a veto, consultation is not control, "anticipates" is a forecast rather than a commitment, "is not obliged to" removes a duty without creating a prohibition, and a copying right granted for backup "only" does not stretch to a test environment.

The situational judgement section was about influence, which is most of what this role runs on. The strong answers converted authority disputes into testable predictions, separated blocking concerns from preferences, turned long-horizon judgements into dated facts on a risk register, and handled the credibility discount on a candidate's own past work by naming it rather than arguing past it.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — being right is the entry requirement at this level, not the achievement, and the reasoning tested throughout is mostly about making correct conclusions legible, checkable and actionable by people who cannot verify them directly. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
