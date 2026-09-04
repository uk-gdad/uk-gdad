# Lead Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A lead developer leads development on one or a small number of related project teams, guides the ways in which the team works, is proficient in a wide range of technical systems, and is involved in identifying appropriate technology and approaches, including deciding when software should be written at all. The role also carries technical responsibility for all stages and iterations of a software development project, advising on how standards and methods should be applied, and setting the team's standards for programming tools and techniques.

That last cluster is what distinguishes this level. A lead developer is accountable not only for what they write but for what the team writes, for the standards it writes to, and for the technical decisions that shape everything downstream of them — and the phrase "deciding when software should be written" deserves particular attention, because the most consequential decision this role makes is frequently not how to build something but whether to.

Three features of the role shape what the assessment is built to test. First, this level makes decisions whose costs arrive later and land on other people — a framework choice, a data model, an integration pattern — so reasoning about reversibility matters more than reasoning about elegance. Second, this level is often the technical voice in rooms where other participants cannot evaluate what is said, so the honest expression of uncertainty carries unusual weight. Third, this level sets standards, and a standard is a decision made once and paid for by everybody, every day, for as long as it stands.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate reasons about reversibility and structural cause rather than reaching for the fastest-feeling fix — several items are deliberately built so that a decisive, confident answer is the weaker one where the facts call for establishing scope or reversibility first. Verbal items reward strict reading of modal language and scope against the passage alone, resisting the candidate's own professional knowledge where the text is silent. Situational judgement items at this level consistently reward a response that makes a trade-off visible and decidable to the person who owns it, applies standards without regard to seniority, and treats the candidate's own past decisions as open to challenge.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, presented through practical materials rather than abstract puzzles. At lead level the materials are architectural options, incident evidence, technology choices, standards decisions and the work of the team the candidate is responsible for.

The format is typically an online test of fifteen to thirty minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group of comparable seniority. Adaptive platforms raise difficulty after correct answers, and reports typically distinguish speed from accuracy.

Three things distinguish this section at this level. First, decisions are weighted by reversibility rather than by size: a choice that can be undone in a week deserves a quick decision, while a data model, a public interface or a framework will be lived with for years, and the reasoning that matters is about which kind of decision is being made before it is made. Second, the interesting questions concern mechanisms — when a team keeps producing the same defect, the cause is usually structural, and fixing instances leaves it in place. Third, "should this be written?" is a live question: government builds a great deal of software that duplicates something existing, and a lead who cannot evaluate build-versus-reuse honestly will build.

### How this assessment maps to the role

- **Deduction under incomplete evidence** maps to **Programming and build (software engineering)**, where technical responsibility across all stages includes diagnosing what went wrong.
- **Systemic diagnosis** maps to **Development process optimisation**, identifying optimisation opportunities.
- **Technology evaluation** maps to this role level's involvement in identifying appropriate technology and deciding when software should be written.
- **Prioritisation and reversibility** map to **Systems design** and **Availability and capacity management**.
- **Standards judgement** maps to **Modern development standards**, advising on how standards should be applied and setting team standards.
- **Security reasoning** maps to **Information security**.

### Practice questions

**Question 1 (easy) — Deduction from a governance rule**

Standard: "A service may be deployed to production only with a passing full test suite, unless the deployment is a rollback to a previously deployed version." A developer reports deploying without a passing suite. Ask which conclusion must be true.

- A) The standard was breached.
- B) It was a rollback.
- C) Either it was a rollback to a previously deployed version, or the standard was breached.
- D) The deployment should be reverted.

**Correct answer: C**

**Explanation:** A conditional with a stated exception, plus facts silent on the exception, licenses only the disjunction. Options A and B each assume a branch; option D prescribes an action rather than stating what must be true, and a sensible action is frequently offered as a distractor in a logic item. This tests deducing only what the given facts guarantee — and, in a strong candidate's answer, noting the practical edge: if rollbacks routinely bypass the suite and nobody records which deployments were rollbacks, the standard itself is unauditable, which is a defect in the standard rather than in the developer.

**Question 2 (easy) — Reversibility**

A team must choose between two approaches for storing a new entity: extending an existing table, or creating a new service with its own datastore. Both are viable. Ask for the most important consideration.

- A) Which performs better.
- B) Which is easier to undo — extending a table is a change that can be iterated on for months, while a separate service with its own datastore creates an integration boundary, a deployment unit and a data migration problem that will be expensive to reverse once anything depends on it.
- C) Which the team prefers.
- D) Which is faster to build.

**Correct answer: B**

**Explanation:** Both options may be defensible on their merits, and the asymmetry in reversibility is what should decide a decision made under uncertainty — extending a table is a decision that can be revisited, while splitting out a service creates boundaries other things immediately attach to. This tests weighing reversibility as the primary criterion under uncertainty rather than performance, preference or build speed, none of which capture the asymmetric cost of being wrong.

**Question 3 (moderate) — Diagnosing recurring defects**

Three developers on a team have each introduced the same class of bug in a month: unhandled null values from an external API. Ask for the strongest diagnosis.

- A) The three need to be more careful.
- B) Three people making the same mistake independently indicates a structural cause — most likely that the API's contract does not document which fields are optional, or that the client code has no type-level representation of optionality — so the remedy is in the contract, the generated client, or a type system feature rather than in individual attentiveness.
- C) Code review should be stricter.
- D) Add null checks in review.

**Correct answer: B**

**Explanation:** Three independent occurrences of the same defect is the signature of a structural cause, and the plausibility of blaming carelessness is exactly what makes that answer tempting and useless — people do not become collectively careless about one specific thing in one month. This tests naming the realistic structural candidates and their differing remedies, rather than assigning blame (A), asking reviewers to catch mechanically what a type system would catch automatically (C), or fixing instances forever (D).

**Question 4 (moderate) — Deciding whether to write software**

A team needs a workflow engine for a multi-step approval process. Building one would take about six weeks. Ask for the strongest approach.

- A) Build it; six weeks is manageable and a bespoke fit is better.
- B) Establish what exists first — an existing internal capability, an open-source engine, or a simpler pattern that avoids needing an engine at all — because a workflow engine is a long-lived commitment whose real cost is years of maintenance rather than six weeks of construction, and "we need an engine" is frequently the wrong framing for a process with four steps.
- C) Buy a commercial product.
- D) Build a minimal version and extend it.

**Correct answer: B**

**Explanation:** This role names deciding when software should be written, and the six-week figure is the visible cost and the smallest one — a bespoke engine must be maintained, documented, understood by every future developer, and extended every time the process changes. This tests questioning the framing of a build request before evaluating how to build it, since a four-step approval process usually needs a state field rather than an engine, and D is the tempting middle that is how bespoke engines actually get built, one extension at a time.

**Question 5 (moderate) — Competing explanations under incident conditions**

After a release, error rates rise from 0.1% to 3%. The release contained a database migration and a change to retry logic. Ask for the strongest sequence of action.

- A) Revert the retry change first, since retries affect error rates directly.
- B) Establish whether the migration is reversible before deciding — if not, reverting the release is not available and the response must be a forward fix; if it is, revert everything, restore service, and identify the cause in a safe environment.
- C) Revert the whole release.
- D) Increase the retry limit.

**Correct answer: B**

**Explanation:** Reverting the whole release is the standard incident response, and the scenario contains the fact that defeats it as a default: a database migration may not be reversible, and attempting to revert a release containing one can turn a degraded service into a corrupted one. This tests establishing a critical fact (reversibility) before committing to a response, rather than guessing between two candidate causes with a coin-flip chance of leaving the problem in place (A), or changing behaviour on an unconfirmed diagnosis mid-incident (D).

**Question 6 (moderate) — Setting a team standard**

A lead is considering mandating a linting rule that would flag a pattern the team uses inconsistently. Ask for the strongest approach.

- A) Enable it and fix the existing violations.
- B) Establish what the pattern costs before mandating anything — if it produces real defects, enable the rule with existing code grandfathered so the team is not blocked by a large cleanup; if it is a stylistic preference, a rule adds friction to every commit for no defect reduction.
- C) Discuss it at a retrospective.
- D) Enable it as a warning.

**Correct answer: B**

**Explanation:** A linting rule is a standard imposed on every commit indefinitely, which makes the question whether it prevents something rather than whether it is preferred. This tests establishing the rule's actual value before adopting it, and grandfathering existing code so a large cleanup does not sink adoption — enabling a rule across an existing codebase without that step produces hundreds of violations that a team facing them either disables the rule to avoid, or spends a week on instead of delivery.

**Question 7 (moderate) — Technical advice to a non-technical stakeholder**

A service owner asks whether a proposed feature is "technically possible". It is possible and would require substantial rework of an existing component. Ask for the strongest response.

- A) Yes, it is possible.
- B) State that it is possible and describe the cost and the consequence — roughly how much rework, what else would be delayed, and what risk the rework introduces — because "is it possible" is almost never the question actually meant, and answering it literally gives a yes that will reasonably be treated as an estimate.
- C) Say it is possible but difficult.
- D) Say no, given the cost.

**Correct answer: B**

**Explanation:** Almost everything is technically possible, so a literal yes conveys nothing and is heard as encouragement. This tests answering the question the stakeholder actually needs answered — scale of rework, opportunity cost, and risk — rather than a literal yes (A), an unquantified hedge that different listeners will interpret very differently (C), or substituting the candidate's own judgement for the stakeholder's on a trade-off that is theirs to make (D).

**Question 8 (harder) — Scoping the impact of a defect**

A shared library the team maintains has been silently truncating strings longer than 255 characters for eight months. Four services use it. Ask for the strongest first step.

- A) Fix the library and release a new version.
- B) Establish the blast radius before deciding anything — which of the four services pass long strings, whether the truncated values were stored, whether anything downstream consumed them, and whether any user-visible data has been silently corrupted — because the fix is small and the remediation may not be.
- C) Notify the four services.
- D) Add validation that rejects long strings.

**Correct answer: B**

**Explanation:** The library fix is the easy part; silent truncation over eight months means data may be wrong in four services' datastores and in anything downstream that consumed it, and nothing errored to reveal which records are affected. This tests establishing scope before treating the fix as the whole task — notifying the services (C) belongs after the candidate can tell them something useful about their exposure, and rejecting long strings (D) improves future behaviour without addressing the eight months already stored.

**Question 9 (harder) — Technology evaluation**

A team proposes adopting a new framework that would make a current pain point substantially easier. It is well regarded, three years old, and maintained by a small team. Ask for the strongest analysis.

- A) Adopt it; the benefit is real and the framework is well regarded.
- B) Weigh the benefit against the commitment — what happens if maintenance stops, how much of the codebase would depend on it, how reversible the adoption is, and whether the pain point could be addressed with something more boring — because the cost of being wrong is not the migration but the years of running on something unmaintained.
- C) Reject it; three years is too new.
- D) Adopt it in one service as a trial.

**Correct answer: B**

**Explanation:** The strongest analysis frames adoption as a long-lived commitment rather than a tooling choice: a framework touching every file is a different proposition from one confined to a boundary, and the answer to "what if maintenance stops" ranges from an inconvenience to a rewrite. This tests weighing commitment and reversibility together — D is a genuinely good move that belongs after this analysis rather than instead of it, since a successful trial creates adoption momentum whether or not the maintenance question was ever answered.

**Question 10 (harder) — A metric that misleads**

A team's test suite takes 40 minutes, and a developer proposes parallelising it to 8 minutes; the suite currently fails intermittently about once in fifteen runs. Ask for the strongest observation.

- A) Parallelising is a clear win.
- B) Parallelising a suite with an existing intermittent failure is likely to make the intermittency worse, since many flaky tests are caused by shared state or ordering dependencies that parallel execution exposes more often — so the intermittency should be diagnosed first, or the speed-up will arrive alongside a suite nobody trusts.
- C) The suite should be split rather than parallelised.
- D) The intermittency should be handled with retries.

**Correct answer: B**

**Explanation:** Parallel execution changes ordering and increases contention on shared resources, the two commonest causes of intermittent test failures, so a suite failing once in fifteen sequentially may fail far more often in parallel — and a suite whose failures are ignored is a worse position than a slow suite. This tests sequencing a fix ahead of an optimisation that would compound the underlying problem, rather than taking the speed-up without the consequence (A) or masking the race condition with retries (D), which may also occur in production.

**Question 11 (harder) — Reading the distribution of a problem**

Across the last year, five production incidents were caused by configuration errors during deployment, all on Friday afternoons, all by experienced developers. Ask for the strongest response.

- A) Introduce a rule against Friday deployments.
- B) The concentration is diagnostic: five configuration errors by experienced people at the same time of week suggests a process that depends on care at the point when people have least of it — so the useful question is what part of deployment is manual and error-prone, and whether it can be automated or validated, since a Friday rule leaves the fragility in place for Thursday.
- C) Require a second person to check deployments.
- D) Remind the team to be careful on Fridays.

**Correct answer: B**

**Explanation:** Experienced developers making configuration errors clustered at the end of the week points at a process with a manual step requiring attention — the timing indicates when attention runs out, not what the defect is. This tests reading a clustering pattern as evidence about a process rather than about people, and finding the manual step to automate or validate, rather than displacing the risk to a different day (A) or adding a person to a fragile process (C).

**Question 12 (harder) — Technical responsibility across stages**

A component built two years ago by the candidate's team is now maintained by another team. They report a defect and ask the original author to fix it. Ask for the strongest response.

- A) Fix it; the original developer knows the code.
- B) Help them fix it rather than fixing it for them — pairing on the diagnosis, explaining the design decisions that are not obvious from the code — because fixing it directly is faster once and leaves them unable to maintain something they own, and the next request follows within a month.
- C) Decline; it is their component now.
- D) Fix it and document it afterwards.

**Correct answer: B**

**Explanation:** Granting the immediate ask directly creates a dependency neither team wants, while pairing on a real defect transfers the knowledge a handover usually fails to capture — the reasoning behind design decisions that is not visible in the code. This tests recognising a request that should be redirected into capability transfer rather than solved directly (A), the close-but-weaker option of documenting after solving alone (D), or declining on ownership grounds while the relationship absorbs the real cost (C).

### Administration tips

- Score for whether the candidate weighs reversibility as a primary criterion when facing a decision under uncertainty, not only its immediate benefit.
- Note whether the candidate reads a recurring defect or a clustered incident pattern as evidence of a structural or process cause rather than individual carelessness.
- Watch for whether the candidate questions the framing of a build request before evaluating how to build it.
- Score for whether a critical fact (reversibility of a migration, blast radius of a defect) is established before a response is committed to.
- Note whether technical advice to a non-technical stakeholder answers the underlying question (cost, risk, trade-off) rather than a literal reading of what was asked.

### Common pitfalls to watch for when scoring

- Crediting a recurring defect diagnosed as individual carelessness rather than a structural cause.
- Missing when a candidate would revert a release without first checking whether it contains an irreversible migration.
- Rewarding framework or technology adoption judged on its benefit alone, without weighing the long-term commitment.
- Accepting an optimisation (such as parallelising a test suite) proposed without addressing an existing problem (such as intermittent failure) that the optimisation would worsen.
- Missing a literal, unquantified answer to "is this possible" that omits the cost and risk the stakeholder actually needs.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can extract a defensible conclusion from operational data under time pressure. At lead level the data is what the role actually uses: availability figures, latency distributions, throughput and capacity numbers, cost projections, and delivery estimates that must be defended to others.

The format is typically fifteen to twenty-five minutes, calculator permitted, with tables and charts followed by multiple-choice items. Some items are computational and some ask what the data does and does not support — the second kind is where senior candidates separate from junior ones.

Three habits matter particularly at this level: checking magnitude before precision, since a lead developer challenging a capacity plan in a meeting needs to know whether a number is roughly right, and an order-of-magnitude error is the one that causes damage; recognising that averages across dissimilar things are almost always misleading — average latency across endpoints, average CPU across instances, average velocity across sprints all hide the distribution that contains the actual information; and understanding that capacity questions are about headroom under peak, not utilisation under average, and the two differ by a factor that surprises people.

### How this assessment maps to the role

- **Availability and reliability arithmetic** maps to **Availability and capacity management**.
- **Distribution reasoning** maps to **Systems design**, where percentile behaviour drives design decisions.
- **Capacity and headroom** maps to this role's capacity planning responsibility.
- **Cost and effort estimation** maps to this role's involvement in deciding when software should be written.
- **Defect and quality metrics** map to **Development process optimisation**.
- **Integration volumetrics** map to **Systems integration**.

### Practice questions

*Table 1 — Endpoint latency, last 7 days*

| Endpoint | Requests/day | Median (ms) | 95th (ms) | 99th (ms) |
|---|---|---|---|---|
| /search | 400,000 | 120 | 900 | 2,400 |
| /profile | 150,000 | 45 | 110 | 180 |
| /submit | 60,000 | 200 | 650 | 1,100 |
| /status | 390,000 | 12 | 30 | 55 |

**Question 1 (easy) — Reading a table**

Ask which endpoint has the largest gap between its median and its 99th percentile.

- A) /search
- B) /submit
- C) /profile
- D) /status

**Correct answer: A**

**Explanation:** /search: 2,400 − 120 = 2,280 ms, by far the largest gap of the four. This tests reading a table for the row with the largest spread, and in a strong candidate's answer, recognising that a twenty-fold spread between median and 99th percentile indicates something bimodal — most likely a cache with a high hit rate, where hits return quickly and misses do real work.

**Question 2 (easy) — Weighted total**

Ask approximately how many requests per day the four endpoints in Table 1 handle in total.

- A) About 600,000
- B) About 1,000,000
- C) About 1,400,000
- D) About 800,000

**Correct answer: B**

**Explanation:** 400,000 + 150,000 + 60,000 + 390,000 = 1,000,000. This tests basic totalling, and the point of the item is that this total becomes the denominator for anything computed afterwards — an error rate, a cost per request, a percentage of traffic affected by a change.

**Question 3 (easy) — Availability minutes**

A service has a 99.95% monthly availability target. Ask roughly how many minutes of downtime that allows in a 30-day month.

- A) About 5 minutes
- B) About 22 minutes
- C) About 44 minutes
- D) About 2 minutes

**Correct answer: B**

**Explanation:** A 30-day month is 43,200 minutes; 0.05% of that is 21.6, so about 22. This tests fluency with the standard availability-to-minutes conversions at this level — 99.9% is about 43 minutes a month, 99.95% about 22, 99.99% about 4.3 — figures a lead developer is expected to produce instantly when asked whether a proposed target is achievable.

**Question 4 (moderate) — Weighted average latency**

Using Table 1, ask for the approximate request-weighted median latency across all four endpoints.

- A) About 94 ms
- B) About 71 ms
- C) About 120 ms
- D) About 45 ms

**Correct answer: B**

**Explanation:** Weighting each median by request volume gives 71,430,000 ms-requests over 1,000,000 requests = 71.4 ms. Option A (94 ms) is the simple unweighted mean of the four medians — the trap, since /status, the second-highest-volume endpoint, is very fast and pulls the weighted figure down. This tests weighting by volume rather than averaging rates unweighted, and, in a strong answer, recognising a weighted average of medians is an approximation rather than a true overall median.

**Question 5 (moderate) — Capacity headroom**

A service runs on 8 instances averaging 45% CPU; peak traffic is 2.3 times average. Ask for the approximate CPU on the remaining instances if one instance is lost during peak.

- A) About 104%
- B) About 118%
- C) About 90%
- D) About 76%

**Correct answer: B**

**Explanation:** Total CPU work at average is 8 × 45% = 360 percentage-points; at peak, 360 × 2.3 = 828; spread across 7 remaining instances, 828 ÷ 7 = 118%, over capacity. This tests computing peak headroom rather than reading average utilisation as comfortable — option A (104%, spreading peak across all 8 instances) already exceeds capacity even without a failure, showing the service is under-provisioned regardless.

**Question 6 (moderate) — Error budget**

A service has a 99.9% availability target over 30 days; twelve days in, it has consumed 31 minutes of downtime. Ask whether it is on track.

- A) Yes, it is under the monthly budget.
- B) No — the monthly budget is about 43 minutes, and consuming 31 in the first 12 days is a burn rate of roughly 2.6 minutes a day, which projects to about 78 minutes over 30 days, nearly double the budget.
- C) Yes, since 31 is less than 43.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** Consumed 31 minutes in 12 days is 2.58 minutes/day, projecting to 77.5 minutes over 30 days against a 43.2-minute budget. This tests reading an error budget as a burn rate against elapsed time rather than comparing a single figure against the total threshold — options A and C make exactly that flawed comparison, missing that 12 days is 40% of the month while 31 minutes is already 72% of the budget.

*Table 2 — Build and test pipeline, monthly*

| Stage | Runs/month | Mean duration (min) | Failure rate |
|---|---|---|---|
| Compile | 1,200 | 3 | 4% |
| Unit tests | 1,150 | 11 | 9% |
| Integration tests | 1,046 | 24 | 14% |
| Deploy to staging | 900 | 6 | 3% |

**Question 7 (moderate) — Pipeline time**

Ask approximately how many hours per month the integration test stage consumes.

- A) About 250 hours
- B) About 420 hours
- C) About 150 hours
- D) About 600 hours

**Correct answer: B**

**Explanation:** 1,046 runs × 24 minutes = 25,104 minutes ≈ 420 hours. This tests basic rate arithmetic, and the reason it matters is that this stage consumes more pipeline time than the other three stages combined (about 361 hours), turning a vague sense that "the pipeline is slow" into a specific optimisation target.

**Question 8 (harder) — Compound pass rate**

Using Table 2, ask what proportion of pipeline runs starting at compile reach the end of staging deployment successfully.

- A) About 70%
- B) About 74%
- C) About 78%
- D) About 86%

**Correct answer: B**

**Explanation:** Multiplying the pass rates: 0.96 × 0.91 × 0.86 × 0.97 ≈ 0.73, about 73%. This tests multiplying pass rates rather than adding failure rates (4+9+14+3=30%, giving option A) — the naive approach happens to land close here because the rates are small, and diverges as rates grow, so knowing which method is correct matters more than the coincidental closeness of this example.

**Question 9 (harder) — Cost of a decision**

A downstream API call currently happens 400,000 times a day at £0.0004 each; a cache with a 70% hit rate would cost £180 a month to run. Ask for the approximate monthly saving.

- A) About £3,180
- B) About £1,180
- C) About £4,800
- D) About £2,180

**Correct answer: A**

**Explanation:** Current cost: 400,000 × £0.0004 × 30 = £4,800/month; a 70% hit rate saves £3,360/month; net of the £180 cache cost, £3,180. Option C is the gross monthly spend without any cache. This tests computing a net saving that accounts for the mitigation's own running cost, arithmetic a lead is expected to produce to make a build-versus-leave-alone case persuasive.

**Question 10 (harder) — Interpreting a defect trend**

Defects found in production per month: Jan 14, Feb 12, Mar 15, Apr 9, May 6, Jun 5. Automated integration tests were introduced in March. Ask for the strongest conclusion.

- A) The tests reduced defects by about 64%.
- B) Production defects fell after March, which is consistent with the tests working, but the series is short, the fall began in April rather than immediately, and nothing here rules out other changes over the same period — the honest statement is that the data is encouraging and does not establish causation.
- C) The tests had no effect.
- D) The trend will continue downward.

**Correct answer: B**

**Explanation:** The fall from 15 to 5 is real, and the causal claim is not established by six data points around a single intervention. This tests distinguishing a defensible statement of what the data supports from an overreach — option A computes a real percentage and attributes it to the intervention, the specific error the item is built to catch, and option D extrapolates a trend with no established reason to continue.

**Question 11 (harder) — Throughput under a constraint**

An integration processes records in batches of 500 taking 90 seconds each; a daily file contains 240,000 records and the processing window is 4 hours. Ask whether it fits.

- A) Yes, comfortably.
- B) No — 240,000 records is 480 batches at 90 seconds each, which is 43,200 seconds or 12 hours, three times the available window.
- C) Yes, just.
- D) It depends on the hardware.

**Correct answer: B**

**Explanation:** 240,000 ÷ 500 = 480 batches; 480 × 90 seconds = 12 hours against a 4-hour window. This tests running the volumetric arithmetic at design time rather than deferring it — option D sounds prudent but defers a calculation that is available immediately, and the commonest real-world failure is that nobody runs it until the first full-volume run.

**Question 12 (harder) — Estimation under uncertainty**

A team's last six comparable items took 4, 5, 6, 6, 9 and 21 days. Ask for the most defensible estimate to give.

- A) About 6 days, the median.
- B) Give a range with the tail acknowledged: most comparable items took 4 to 9 days, one took 21, so plan for around 6 to 9 days and note there is a real chance of a much longer outcome if this item resembles the 21-day one — and name what would make it that one.
- C) About 8.5 days, the mean.
- D) 21 days, to be safe.

**Correct answer: B**

**Explanation:** The distribution has a long right tail, the normal shape for software estimates, and a single number discards the information that matters most — the mean (8.5) is pulled up by the outlier and describes none of the actual outcomes, while the median (6) hides the tail entirely. This tests giving a range with the tail named and what would produce it, which converts an estimate into something a stakeholder can act on, rather than padding to the worst case (D), which undermines credibility on the five occasions out of six when the work finishes early.

### Administration tips

- Score for whether the candidate weights an average by volume rather than averaging rates or figures unweighted.
- Note whether the candidate distinguishes peak headroom from average utilisation when reasoning about capacity.
- Watch for whether an error budget or a similar running total is read as a burn rate against elapsed time, not a single comparison against the threshold.
- Score for whether a causal claim about a trend is stated with appropriate caution given a short series and a single intervention.
- Note whether the candidate gives a range with the tail named for an estimation question, rather than a single point figure.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average across groups or endpoints of very different volumes.
- Missing when a candidate reads average utilisation as comfortable headroom without checking peak.
- Rewarding an error-budget comparison that ignores elapsed time within the measurement window.
- Accepting a causal claim attributed to a single intervention from a short, noisy data series.
- Missing a mean quoted as "typical" from a long-tailed distribution where the median would be more honest.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine precisely what a piece of written material establishes. At lead level the material is specifications, architecture decision records, security standards, supplier documentation and incident reports — prose written to be binding, where a misread has consequences.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes the statement; False means the passage contradicts it; Cannot Say means the passage neither establishes nor contradicts it — regardless of what the candidate knows professionally. A candidate's own expertise is the main hazard here, since they will frequently know the answer from experience while the passage remains silent.

Three specifics matter at this level: "may", "should" and "must" are terms of art in specification prose, and treating them loosely is how requirements get misimplemented; requirements are qualified — by system, by data classification, by environment — and the qualifier limits what a requirement establishes about anything else; and exceptions define boundaries, so an exception for one thing tells the reader the rule applies to everything else, and does not tell them the exception extends to a neighbouring case.

### How this assessment maps to the role

- **Reading normative language precisely** maps to **Modern development standards**, advising on how standards apply.
- **Scope and qualification** map to **Information security**, where controls are scoped by classification.
- **Distinguishing evidence from inference** maps to **Programming and build**, where incident reports must be read for what they establish.
- **Reading supplier and interface documentation** maps to **Systems integration**.
- **Reading service commitments** maps to **Availability and capacity management** and **Service support**.
- **Communicating precisely** maps to this role's responsibility for technical advice to stakeholders.

### Practice questions

*Passage A — for Questions 1 to 4*

"Every service handling data classified OFFICIAL-SENSITIVE must encrypt data at rest using an approved algorithm, and must log all access to that data for a minimum of twelve months. Services handling data classified OFFICIAL should encrypt data at rest, and must log access where the data includes personal information. Access logs must be stored separately from the data they describe. Where a service is hosted in a supplier-managed environment, the supplier's encryption implementation may be accepted in place of the service's own, provided the supplier holds current certification against the standard named in Annex C. This exception does not extend to logging obligations, which remain the responsibility of the service team in all cases."

**Question 1 (easy)**

Statement: A service handling OFFICIAL-SENSITIVE data must encrypt data at rest.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly in the first sentence, using "must". This tests the baseline reading before the passage's complications are introduced.

**Question 2 (easy)**

Statement: A service handling OFFICIAL data that contains no personal information is not required to log access.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The logging obligation for OFFICIAL data is qualified — "must log access where the data includes personal information" — and without personal information the qualifier is not met, so the obligation does not apply. This tests establishing a conclusion from the structure of a qualification rather than a direct statement, and separating "is this required" from "would this be good practice anyway", which the passage does not address.

**Question 3 (moderate)**

Statement: A service handling OFFICIAL data is not required to encrypt data at rest.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage uses "should" for OFFICIAL data encryption and "must" for OFFICIAL-SENSITIVE, and the deliberate contrast with the immediately preceding "must" confirms the distinction is intentional — "should" permits justified deviation. This tests resisting the pull toward False that comes from professional instinct (most practitioners would encrypt it regardless) in favour of what the passage actually states.

**Question 4 (moderate)**

Statement: A service in a supplier-managed environment whose supplier holds current Annex C certification may rely on the supplier for its access logging.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this explicitly: "This exception does not extend to logging obligations, which remain the responsibility of the service team in all cases." This tests reading to the end of a passage, since everything before the final sentence points the other way, and the sentence exists precisely to close the inference a partial read would draw.

*Passage B — for Questions 5 to 8*

"The incident began at 09:12 when the payment service started returning HTTP 503 responses. Monitoring alerted at 09:14. The on-call engineer identified elevated connection counts to the primary database and, at 09:31, restarted the connection pool, after which error rates returned to normal within two minutes. A release had been deployed at 08:55 which changed the pool's maximum size from 40 to 120. The change had been made to address timeouts reported during the previous week's peak. No load testing was carried out against the new configuration. The database's configured maximum connection limit is 150, shared across four services."

**Question 5 (easy)**

Statement: The incident was detected by monitoring before it was reported by a user.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states monitoring alerted at 09:14 and says nothing about any user report at all. This tests recognising a plausible-sounding comparison where one side is simply absent from the text — the commonest shape a Cannot Say item takes.

**Question 6 (moderate)**

Statement: The release deployed at 08:55 caused the incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The evidence is strong — a pool size change from 40 to 120 seventeen minutes before failure, against a shared database limit of 150, with elevated connection counts observed — but the passage does not state causation. This tests marking Cannot Say on a well-evidenced inference that would be reasonable to draw professionally but is not established by the text, noting also that restarting the pool resolved the symptom without reverting the configuration, a detail that slightly complicates the obvious story.

**Question 7 (moderate)**

Statement: The database's connection limit could be exceeded if all four services opened their maximum configured connections simultaneously.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage gives only one of the four numbers needed — the payment service's new maximum of 120 and the database limit of 150 — saying nothing about the other three services' pool configurations. This tests recognising when a near-certain-feeling conclusion cannot actually be computed from the numbers the passage supplies.

**Question 8 (harder)**

Statement: The engineer resolved the incident exactly 19 minutes after monitoring alerted.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The restart was at 09:31, 17 minutes after the 09:14 alert, and error rates returned to normal "within two minutes" — so resolution falls somewhere between 17 and 19 minutes after the alert, with exactly 19 being the upper bound: possible, not established, not contradicted. This tests reading "within" as a bound rather than a duration — computing 09:14 to 09:33 and marking True is the specific error the item is built to catch, since the arithmetic itself would be correct only for a maximum.

*Passage C — for Questions 9 to 12*

"The framework's long-term support release is maintained for three years from general availability, during which security patches are issued for critical and high-severity vulnerabilities. Medium and low-severity issues are addressed in the current release only. After the support period ends, no patches of any severity are issued. Organisations requiring extended support may purchase it, subject to a minimum commitment of two years. Extended support covers critical vulnerabilities only. The vendor advises that extended support is intended to provide time for migration rather than as a long-term operating model, and reserves the right to decline renewal beyond a single extended term."

**Question 9 (moderate)**

Statement: A medium-severity vulnerability in a long-term support release will not be patched in that release.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage states that support-period patches cover "critical and high-severity" vulnerabilities and that "medium and low-severity issues are addressed in the current release only" — and the long-term support release is by definition not the current release. This tests following a definitional chain to an operationally significant conclusion: a team running an LTS release for stability is accepting an unpatched medium-severity backlog.

**Question 10 (moderate)**

Statement: An organisation can purchase extended support for one year.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states a "minimum commitment of two years", directly contradicting a one-year purchase. This tests a straightforward contradiction, of the kind that changes a real migration plan — an organisation hoping to buy nine months of breathing space is actually committing to two years of cost.

**Question 11 (harder)**

Statement: An organisation could remain on a long-term support release for seven years with critical vulnerabilities patched throughout.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Three years of standard support plus a two-year extended term is five years, leaving the seventh year unaccounted for; the vendor "reserves the right to decline renewal beyond a single extended term", which establishes that renewal may be declined without establishing that it always will be. This tests distinguishing "may decline" from "will not offer" — treating a reserved right as an outright prohibition is the natural error, and the distinction matters directly to a migration timeline relying on the answer.

**Question 12 (harder)**

Statement: The vendor recommends against using extended support as a long-term operating model.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage says extended support "is intended to provide time for migration rather than as a long-term operating model", attributed to the vendor's advice — a recommendation against long-term use expressed through a statement of intent rather than the word "recommend". This tests recognising a recommendation conveyed through framing rather than an explicit verb, supported by the surrounding context of limited coverage and a reserved right to decline renewal.

### Administration tips

- Score for whether the candidate treats "must", "should" and "may" as carrying distinct, non-interchangeable obligations.
- Note whether the candidate reads to the end of a passage before answering, since closing sentences often resolve an inference the earlier text seemed to support.
- Watch for whether the candidate checks that both sides of an implied comparison actually appear in the passage before marking True or False.
- Score for whether well-evidenced but unstated causation is correctly marked Cannot Say rather than True.
- Note whether the candidate distinguishes a reserved right or a hedge ("may decline", "within") from a firm figure or an outright prohibition.

### Common pitfalls to watch for when scoring

- Crediting a "should" read as though it were mandatory.
- Missing when a candidate extends a stated exception past its explicit boundary.
- Rewarding a well-evidenced but unstated cause marked True instead of Cannot Say.
- Accepting a reserved right treated as a guaranteed prohibition.
- Missing when a candidate computes an answer using numbers the passage never actually supplies.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios from this role and asks the candidate to rank or select responses. At lead level the scenarios involve technical authority, disagreement with people senior to the candidate, decisions with consequences the candidate will not personally absorb, and the recurring problem of holding a standard when holding it is expensive.

The commonest formats ask for the most and least effective response, or a rating on a scale. Scoring is against a key derived from experienced practitioners in comparable roles — professional consensus rather than personal style.

Three patterns run through the strong answers at this level. First, this role owns the consequences of technical decisions even when someone else made the call, so the useful move is usually to make the consequence visible and decidable rather than to accept it silently or refuse. Second, a lead's standards apply to them most visibly — a lead who exempts themselves from the standard they set has repealed it, whatever the documentation says. Third, escalation is a tool with a cost: used well it resolves a decision at the level that owns it, used as a first response it removes the candidate's ability to be trusted with disagreements.

### How this assessment maps to the role

- **Holding standards under pressure** maps to **Modern development standards** and this role's part in setting team standards.
- **Technical advice to stakeholders** maps to that named responsibility.
- **Team leadership and development** maps to guiding the ways in which the team works.
- **Incident handling** maps to **Service support** and **Availability and capacity management**.
- **Security judgement** maps to **Information security**.
- **Integration and dependency management** map to **Systems integration**.

### Practice questions

**Question 1 (easy) — A shortcut under deadline**

Two days before a release, meeting the date requires skipping the accessibility testing the team's standard requires. Ask for the most effective response.

- A) Skip the testing and add it after release.
- B) State what skipping it means — that accessibility defects would reach users and the service would be non-compliant — and let the service owner decide with the trade-off visible, while offering what partial testing is possible in the time.
- C) Refuse to release without the testing.
- D) Do the testing and miss the date.

**Most effective: B. Least effective: A**

**Explanation:** The date belongs to the service owner and the consequence lands on users, which makes the candidate's job to ensure the decision is made by the right person with the right information rather than made silently. This tests making a quality trade-off visible to the person who owns it — option A is least effective because it decides invisibly, and "add it after release" reliably becomes never.

**Question 2 (easy) — A junior developer's approach**

A junior developer proposes an approach that will work but is more complicated than necessary. Ask for the most effective response.

- A) Tell them to use the simpler approach.
- B) Ask what led them to it before offering the alternative — they may have identified a constraint that is not visible, and if not, the reasoning behind the simpler approach is the part worth transferring rather than the instruction.
- C) Let them build it; they will learn.
- D) Rewrite it yourself.

**Most effective: B. Least effective: D**

**Explanation:** Option B costs a conversation and buys the possibility that the junior developer is right, plus a developer who can make the judgement themselves next time. This tests coaching by transferring reasoning rather than an instruction (A) or removing the work entirely (D), which teaches nothing and signals that their code becomes the lead's whenever there is disagreement.

**Question 3 (moderate) — Disagreeing with an architect**

An enterprise architect specifies an integration pattern believed unlikely to perform at the required volume. Ask for the most effective response.

- A) Implement it as specified; the architect has the authority.
- B) Raise the concern with specific numbers — expected volume, the pattern's likely throughput, where it is expected to break — and propose a quick test to settle it, since a disagreement between two informed opinions is resolvable with evidence and a disagreement of assertions is not.
- C) Implement a different pattern that works.
- D) Escalate to a line manager.

**Most effective: B. Least effective: C**

**Explanation:** The candidate may be wrong, and a test settles that faster and more convincingly than a debate. This tests converting a clash of authority into a checkable question — option C is least effective because deviating silently from a specification breaks the architecture, is discovered later at higher cost, and damages the trust needed to be listened to next time.

**Question 4 (moderate) — Security finding in a senior colleague's code**

Reviewing a pull request from a considerably more senior developer, the candidate finds a SQL injection vulnerability. Ask for the most effective response.

- A) Approve it and raise the issue separately.
- B) Block the merge and explain the specific vulnerability with the input that would exploit it, treating it as a normal review finding — the standard does not vary by author, and a concrete exploit is a technical observation rather than a challenge to anyone's competence.
- C) Fix it yourself and merge.
- D) Ask a security specialist to review it.

**Most effective: B. Least effective: A**

**Explanation:** This is an ordinary review finding that only feels difficult because of seniority, and treating it as ordinary is both correct and the least awkward path available. This tests applying a review standard identically regardless of author — option A is least effective because it puts code with a known injection vulnerability into production, deferring the real conversation until after the risk is live.

**Question 5 (moderate) — Team velocity question from a delivery manager**

A delivery manager asks why the team's velocity dropped for two sprints; the cause is a necessary refactor of a fragile component. Ask for the most effective response.

- A) Explain that velocity is a poor measure.
- B) State directly what the time went on and why it was necessary — the component's failure rate, what it was blocking, what it now enables — so the drop reads as a deliberate investment with a return rather than as unexplained slowness.
- C) Say the team was working on technical debt.
- D) Apologise and commit to recovering the velocity.

**Most effective: B. Least effective: D**

**Explanation:** The delivery manager needs something explicable and true to relay onward. This tests reporting with specifics that make a deliberate investment legible to a non-technical listener — "technical debt" (C) has been used to justify too much to convey anything on its own, and option D is least effective because it accepts the framing that the work was a failure and commits to a number rather than to outcomes.

**Question 6 (moderate) — A standard the candidate set is being ignored**

A standard requiring architecture decision records for significant technical choices was introduced three months ago; nobody writes them, including the candidate who set it. Ask for the most effective response.

- A) Remind the team of the standard.
- B) Start with why it is not being followed, including by the candidate — if the format is too heavy, the trigger for "significant" is unclear, or the records are never read, the standard is unfollowable and the fix is to change it; the candidate's own non-compliance is the strongest available evidence about which.
- C) Make the records a required part of the review process.
- D) Drop the standard.

**Most effective: B. Least effective: A**

**Explanation:** A standard nobody follows, including its author, is telling something about the standard rather than about the team's discipline. This tests investigating before enforcing, and treating one's own non-compliance as diagnostic evidence rather than something to route around — option A is least effective because a reminder about an unfollowable standard produces a fortnight of compliance and then the same position.

**Question 7 (harder) — Pressure to under-report**

Following an incident, a senior stakeholder asks for the root cause to be described as "an unforeseen combination of circumstances", when it was actually a configuration error the team made. Ask for the most effective response.

- A) Write it as requested; the stakeholder is senior.
- B) Write the report accurately and explain why — an incident report exists so the organisation can prevent recurrence, an inaccurate cause prevents that, and a team that reports its own errors accurately is the reason the reporting is worth anything — while offering to discuss how the finding is presented, a legitimate and separate concern from what it says.
- C) Refuse and escalate.
- D) Write it vaguely to satisfy both.

**Most effective: B. Least effective: D**

**Explanation:** The stakeholder's concern is probably about how the team looks, which is addressable through presentation rather than through changing what happened. This tests holding accuracy on the substance of an incident report while engaging with a legitimate presentation concern — option D is least effective because deliberate vagueness is hardest to challenge and does the same damage: the organisation cannot act on a cause it cannot identify.

**Question 8 (harder) — An underperforming team member**

A developer consistently produces work needing substantial rework, and the team is beginning to route around them. Ask for the most effective response.

- A) Raise it with their line manager.
- B) Talk to them directly first, with specific examples, and establish what is going on — a knowledge gap, an unclear brief, something outside work, or a genuine mismatch, each needing an entirely different response — while recognising that the team routing around them is a problem needing action either way.
- C) Give them simpler work.
- D) Pair with them on everything.

**Most effective: B. Least effective: C**

**Explanation:** A response cannot be chosen without knowing the cause, and the person most likely to know has not been asked. This tests diagnosing before acting and naming the secondary problem — colleagues routing around someone — before it hardens into permanent exclusion; option C is least effective because it looks kind while removing any path to improvement and confirming to the team that this developer is not to be relied on.

**Question 9 (harder) — A dependency that will not be ready**

Another team's API, on which delivery depends, is three weeks late with no revised date; the candidate's own deadline has not moved. Ask for the most effective response.

- A) Wait; there is nothing to be done.
- B) Establish what is actually blocked versus what can proceed against a stub or contract, get the dependency's real position rather than its stated one, and make the delivery risk explicit to whoever owns the deadline — with options, usually to move the date, cut scope, or build a temporary alternative.
- C) Build a replacement for the API.
- D) Escalate to senior management.

**Most effective: B. Least effective: A**

**Explanation:** Option B does the three things available: reduce the blockage by working against an agreed contract, replace an unreliable date with a real one, and hand the deadline owner a decision with options rather than a problem. This tests active risk management with concrete options offered — option A is least effective because a known risk nobody has been told about becomes a surprise failure, and the surprise is the unforgivable part.

**Question 10 (harder) — A past technical decision has aged badly**

An architectural decision made eighteen months ago is now causing the team significant friction; a newer team member proposes replacing it. Ask for the most effective response.

- A) Defend the decision; it was right at the time.
- B) Engage with the proposal on its merits and state plainly that the original decision has not aged well — the constraints it was made under, what has changed, what replacing it would cost now — because visible willingness to have one's own decisions revisited is what makes it safe for anyone else to raise one.
- C) Agree to the replacement.
- D) Ask them to write a proposal.

**Most effective: B. Least effective: A**

**Explanation:** The decision may have been right at the time and be causing friction now, and both can be true without either being a defence. This tests modelling that decisions are revisable — a team that cannot challenge the lead's architecture accumulates problems silently — over defending a past decision because it belongs to the candidate (A, least effective, the natural but self-protective reaction that teaches the team not to bother raising concerns).

**Question 11 (harder) — Adopting a technology the candidate dislikes**

The organisation mandates a technology platform considered a poor fit for the service; the decision is made and not open for reconsideration. Ask for the most effective response.

- A) Comply and say nothing further.
- B) Implement it properly while documenting the specific costs expected — concrete costs in performance, effort or operability — so the organisation has evidence when the decision is next reviewed, and so the team is not left with an implementation deliberately made worse by reservations about it.
- C) Comply minimally and build workarounds.
- D) Continue arguing the case.

**Most effective: B. Least effective: C**

**Explanation:** The decision is settled, changing what a good response looks like: implement it well, and record the evidence for the next review. This tests separating acceptance of a closed decision from silent, unevidenced compliance — option C is least effective because a half-hearted implementation plus workarounds delivers a disliked platform implemented badly, which the team then has to maintain.

**Question 12 (harder) — Deciding not to build**

A team is enthusiastic about building an internal tool that would genuinely help them; the candidate believes an existing product would do the job. Ask for the most effective response.

- A) Direct them to use the existing product.
- B) Put the comparison to them honestly — what the existing product does and does not do, what building would cost to build and then to maintain indefinitely — and reach the decision with them, because the maintenance cost is the part enthusiasm reliably discounts and the part they will bear.
- C) Let them build it; team motivation matters.
- D) Approve a timeboxed prototype.

**Most effective: B. Least effective: C**

**Explanation:** Deciding when software should be written is explicitly this role's responsibility, and the strongest version of it is a decision reached with the team rather than imposed on them. This tests supplying the information enthusiasm reliably discounts — ongoing maintenance cost — option C is least effective because motivation, while real, is not a reason to commit a team to maintaining something indefinitely.

### Administration tips

- Score for whether a response makes a technical or quality trade-off visible and decidable to the person who owns it, rather than resolving it silently.
- Note whether the candidate applies review or quality standards identically regardless of the author's seniority.
- Watch for whether the candidate treats their own past decisions and standards as open to challenge and revision, rather than defending them by authorship.
- Score for whether escalation is used as a considered tool at the right point, neither skipped when a real risk has gone unheeded nor reached for before a direct route has been tried.
- Note whether a response investigates the cause of a problem (an unfollowed standard, an underperforming colleague) before choosing an action.

### Common pitfalls to watch for when scoring

- Crediting a response that makes a scope or quality trade-off silently rather than surfacing it to the owner.
- Missing when a candidate deviates from a specification rather than raising and testing the disagreement.
- Rewarding approval of code with a known vulnerability to avoid an awkward conversation with a senior colleague.
- Accepting a vague or reframed incident cause offered to satisfy a stakeholder's discomfort.
- Missing when a candidate defends a past decision on the grounds of authorship rather than engaging with whether it has aged well.

## Conclusion

This guide has worked through the same structural questions that define lead developer work: is this decision reversible, and is this defect an instance or a pattern — three developers making the same mistake is a structural cause, five configuration errors on Friday afternoons is a fragile process, a framework choice is a multi-year commitment rather than a tooling preference, and the question this role names explicitly, whether software should be written at all, usually turns out to be a question about whether the framing is right.

The numeric section covered the arithmetic this role is expected to produce under scrutiny: availability minutes, peak headroom against average utilisation, error budgets as burn rate, volumetrics run at design time rather than discovered at the first full-volume run — with the recurring trap being an average that hides its distribution, and the recurring skill being a range with the tail named rather than a single number wrong in a predictable direction.

The verbal section was an exercise in reading normative prose exactly: must, should and may as distinct obligations; exceptions that stop where they say they stop; a bound read as a bound rather than a duration. A candidate's own professional knowledge is the main obstacle in this format, since a strong candidate keeps knowing things the passage has not said and must set that knowledge aside.

The situational judgement section circled the particular difficulty of this level: technical authority held without formal power. The strong answers made consequences visible and decidable, converted disagreements into evidence, applied standards without regard to who wrote the code, and treated the candidate's own past decisions as revisable in public.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — the strongest situational judgement answers were rarely the most decisive ones; they were the ones that got the right decision made by the right person with the information they needed, which is most of what leading development actually consists of. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
