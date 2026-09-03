# Developer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a developer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — bug reports, log extracts, test results, code review situations, deployment decisions, and specifications — and decisions genuinely made by someone delivering software components that form part of a product, developing software to meet user needs, following best practice guidelines and helping to improve them, and writing clean, secure and well-tested code, test-first, that is open by default.

At this level, a large part of effectiveness is reasoning rather than typing speed or language knowledge: deducing what a bug report actually implies, working out which of two explanations the evidence supports, judging what a test proves, and reading a specification precisely enough to build the right thing. Because government software runs in production for a long time, serves people with no alternative, and handles data that matters, security, resilience and honest risk assessment carry unusual weight.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate correctly identifies what a piece of evidence — a passing test, an empty log, complete coverage, a clean scan — actually establishes, distinct from what it merely appears to establish; several items are deliberately built so a confident but overreaching conclusion is the wrong one. Situational judgement items at this level consistently reward separating a verified fact from a belief, a theory from a cause, and raising a concern early through the right channel rather than either deferring silently or acting unilaterally; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role genuinely uses, presented through practical workplace materials rather than abstract puzzles — bug reports, log extracts, test results, code review situations, deployment decisions, and specifications.

Typical format: an online, timed test lasting 15 to 30 minutes, covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

Three things characterise this section at developer level: debugging is deduction, and drawing only the conclusion a set of premises supports is what separates fixing the cause from fixing the symptom; evidence about software is frequently negative and frequently misread — a passing test proves one path works, not that the code is correct; and under production pressure, the reasoning that matters is about consequence and reversibility, not which fix is most elegant.

### How this assessment maps to the role

- **Logical deduction** maps to **Programming and build (software engineering)**: reasoning from symptoms to causes.
- **Error checking** maps to **Modern development standards**: systematic checking behind clean, well-tested code.
- **Pattern recognition** maps to **Service support** and **Systems integration**: recurring incidents pointing at a cause.
- **Prioritisation** maps to **Service support** and **Availability and capacity management**: what to do first under incident conditions.
- **Applied problem solving** maps to **Systems design** and **Prototyping**: exploring an approach before committing.
- **Reasoning about security** maps to **Information security**: what an attacker could do rather than what a user will.

### Practice questions

**Question 1 (easy) — Deduction from a deployment rule**

Rule: "A change may only be deployed to production if it has passed the full test suite, unless it is a rollback to a previously deployed version." A colleague says: "I deployed at 3pm and the full suite had not passed." Ask which must be true.

- A) The rule was broken.
- B) The deployment was a rollback.
- C) Either the deployment was a rollback to a previously deployed version, or the rule was broken.
- D) The deployment caused a problem.

**Correct answer: C**

**Explanation:** A conditional with a stated exception, plus facts silent on the exception, licenses only the disjunction; A and B each assume a branch without evidence, and D introduces a consequence nothing supports. This tests concluding only what the facts guarantee — since rollbacks legitimately bypass the suite, jumping to an accusation is both logically and professionally the wrong move.

**Question 2 (easy) — What a passing test proves**

A date-parsing function has 100% line coverage and all tests pass. A bug report says it returns the wrong value for 29 February 2024. Ask for the strongest inference.

- A) The bug report is wrong; coverage is complete.
- B) Line coverage measures which lines executed, not which inputs were tried — so complete coverage is entirely consistent with a leap-year bug, because the tests may have executed every line without ever passing a leap day.
- C) The tests are badly written.
- D) The function needs rewriting.

**Correct answer: B**

**Explanation:** Coverage tells you a line ran, not that the inputs that ran it were the interesting ones. This tests understanding that a date parser can achieve 100% line coverage with two well-chosen test cases and still mishandle leap years, month boundaries and time zones — treating coverage as a correctness proof (A) is the error the metric invites.

**Question 3 (moderate) — Reasoning from a log**

A service returns 500 errors for about 2% of requests; the application log shows no errors. Ask for the strongest analysis.

- A) The 500s are not coming from this service.
- B) An absence of logged errors is consistent with several things — the errors occur before the application code runs, such as in a proxy or load balancer; or they occur in a path with no logging; or the logging itself is failing — so the absence is a clue about where to look rather than evidence that the service is fine.
- C) The monitoring is wrong.
- D) The log level should be increased.

**Correct answer: B**

**Explanation:** This tests treating a negative observation as information without over-interpreting it — errors reaching the client but not the log means something is producing them outside the logging code, and B names the three realistic candidates, each pointing somewhere different, rather than dismissing the observation (C) or stating one candidate as a conclusion (A).

**Question 4 (moderate) — Prioritising during an incident**

At 10am: (i) a payment endpoint returns errors for about 5% of requests; (ii) a scheduled batch job failed overnight and needs rerunning before 6pm; (iii) a colleague is blocked waiting for a code review; (iv) a personal feature is due for demo tomorrow. Ask what to do first.

- A) The code review, since it unblocks someone and takes ten minutes.
- B) The payment errors, because users are losing money or being unable to pay right now, and the failure rate means the problem is ongoing rather than historical.
- C) The batch job, because it has a hard deadline.
- D) Your feature, since the demo is soonest.

**Correct answer: B**

**Explanation:** This tests ranking by ongoing, accumulating harm rather than deadline proximity (C) or a quick, helpful-feeling task (A) — the payment errors are the only item where every minute of delay adds affected people, which makes "quick and helpful" the trap in incident triage.

**Question 5 (moderate) — Competing explanations**

After a deploy containing both a database query change and a dependency upgrade, response times rise from 200ms to 900ms. Ask for the strongest approach.

- A) Revert the query change, since queries cause slowness.
- B) Revert the whole deploy first to restore service, then reproduce in a non-production environment to establish which change is responsible — because with two candidate causes, guessing has a 50% chance of leaving the problem in place while appearing to have acted.
- C) Add an index to the query.
- D) Profile the running production system.

**Correct answer: B**

**Explanation:** This tests separating the urgent goal (restoring service, achieved with certainty by reverting) from the important goal (finding the cause, done safely afterwards) — guessing which of two candidates is responsible (A) is plausible enough to be dangerous, since a dependency upgrade can add latency just as easily as a query change.

**Question 6 (moderate) — Reviewing a colleague's code**

A pull request is clear and well structured but constructs a database query by concatenating a user-supplied string. Ask for the most important review comment.

- A) The code is well structured; approve with minor comments.
- B) The string concatenation is a SQL injection vulnerability regardless of how clean the surrounding code is, and it needs a parameterised query — this is a blocking comment rather than a suggestion, because the consequence is arbitrary data access rather than a maintainability cost.
- C) Suggest extracting the query into a repository class.
- D) Ask for a test covering the new feature.

**Correct answer: B**

**Explanation:** This tests recognising that readability and safety are independent — a well-written injection is still an injection — and that severity must be stated explicitly (blocking, not a suggestion), since a review that assesses style and misses security (A) is exactly the review that lets a vulnerability through.

**Question 7 (moderate) — What an intermittent failure implies**

A test fails about one run in twenty, always the same test, always a timeout. Ask for the strongest analysis.

- A) The test is flaky and should be retried automatically.
- B) An intermittent timeout usually indicates a real dependency on something non-deterministic — timing, ordering, shared state, or an external call — and each has a different fix, so the useful step is to establish which rather than to suppress the symptom.
- C) The timeout should be increased.
- D) The test should be deleted.

**Correct answer: B**

**Explanation:** "Flaky" is a description, not a diagnosis. This tests resisting the suppression instinct (A, C, D) in favour of identifying which specific non-deterministic cause is at play — a real race or ordering dependency may also occur in production, so suppressing the symptom hides the risk rather than removing it.

**Question 8 (hard) — Scoping the impact of a bug**

A function has been rounding currency values with floating-point arithmetic for six months in production. Ask for the strongest first step.

- A) Fix the function.
- B) Fix it, and establish the blast radius before anything else is decided — which values were affected, by how much, whether the errors accumulate or cancel, whether anything downstream has been stored or reported, and whether anyone has been over- or undercharged.
- C) Change to a decimal type and redeploy.
- D) Raise it with your lead.

**Correct answer: B**

**Explanation:** The fix is the smallest part of this problem. This tests recognising that the real question is what happened to six months of accumulated fractional errors — whether they landed in stored balances, reports, or individual charges — since that determines whether this is a code fix, a data remediation, or something with financial consequences, and fixing forward alone (A, C) leaves six months unexamined.

**Question 9 (hard) — A security judgement**

A feature displays a user's own reference number; a colleague proposes reading it from a URL parameter, since the user's reference is already in their session. Ask for the strongest analysis.

- A) It is fine; the user only sees their own reference.
- B) Taking the reference from the URL means the server is trusting a value the user controls, so anyone can change it to another reference and see somebody else's data unless the server independently checks that the reference belongs to the session — the fix is to derive it from the session rather than to validate the parameter.
- C) The parameter should be encrypted.
- D) The reference should be obfuscated.

**Correct answer: B**

**Explanation:** This tests the habit that catches the most common access control vulnerability: asking what an attacker controls, not what a legitimate user would do. Deriving the value from the session (B) removes the attack surface entirely, while encrypting or obfuscating (C, D) is security through obscurity, defeated as soon as the pattern is guessed.

**Question 10 (hard) — Systems integration reasoning**

A service calls an external API that has started occasionally taking 30 seconds to respond; the calling service has no timeout configured. Ask for the most important consequence.

- A) Some requests will be slow.
- B) Without a timeout, slow upstream responses hold your service's connections and threads open, so a slow dependency can exhaust your resources and take your service down entirely — the failure mode is not slowness but total unavailability, and it affects users who never touch that dependency.
- C) The external API should be asked to improve.
- D) Responses should be cached.

**Correct answer: B**

**Explanation:** This tests understanding that the failure propagates and amplifies — a held connection or thread for 30 seconds can exhaust a resource pool if requests arrive faster than they complete, turning a partial degradation elsewhere into a total outage locally, which is why timeouts are structural requirements, not optimisations, when integrating with anything not controlled locally.

**Question 11 (hard) — Reading a specification precisely**

Specification: "The service must reject applications submitted more than 28 days after the qualifying event, unless the applicant has been granted an extension." Ask what must be established before implementing the check.

- A) Nothing; the rule is clear.
- B) At least three things the specification does not settle — whether 28 days means calendar or working days, whether the boundary is inclusive so that day 28 is accepted, and how the system knows an extension has been granted — because each changes the code and getting any of them wrong produces wrongly rejected applications.
- C) Whether the extension is 14 days.
- D) What error message to show.

**Correct answer: B**

**Explanation:** This tests recognising that a rule reading as clear is frequently not implementable as written — calendar versus working days, boundary inclusivity, and how an extension state is represented are all unstated, and each wrong assumption produces a wrongly rejected application that surfaces as a complaint rather than a defect anyone notices in testing.

**Question 12 (hard) — A test that proves less than it appears**

A colleague adds a test asserting only that a function returns successfully with valid input, citing it as evidence the function is correct. Ask for the strongest observation.

- A) The test is a reasonable start.
- B) The test establishes that one valid input does not error, which is the weakest thing that could be tested — it says nothing about whether the returned value is right, what happens with invalid input, or what happens at boundaries, and a function returning a wrong answer confidently would pass it.
- C) More test cases are needed.
- D) The test should assert on the return value.

**Correct answer: B**

**Explanation:** This tests naming the specific weakness precisely, combining both the missing-cases point (C) and the missing-assertion point (D) into the sharper observation that the test creates the appearance of coverage while proving almost nothing — worse than no test in that respect, since it looks like evidence.

### Administration tips

- Score for whether the candidate correctly states what a piece of evidence (a passing test, an empty log, complete coverage) actually establishes, distinct from what it appears to establish.
- Note whether the candidate separates restoring service from diagnosing a cause when two candidate causes exist.
- Watch for whether "flaky" or similar vague labels are treated as a diagnosis rather than a prompt to identify a specific non-deterministic cause.
- Score for whether a review comment or judgement states severity explicitly (blocking vs suggestion) rather than leaving it implicit.
- Note whether the candidate identifies every unstated detail (units, boundaries, state representation) a specification leaves open before treating it as implementable.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that treats a passing test, clean scan, or complete coverage as proof of correctness.
- Missing when a candidate guesses between two plausible causes rather than isolating the variable.
- Rewarding a response that suppresses an intermittent failure's symptom rather than identifying its specific cause.
- Accepting a code review that assesses style but misses a stated security vulnerability.
- Missing when a candidate accepts a specification as implementable without identifying what it leaves unstated.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles the quantitative material this role produces — error rates, latency percentiles, capacity headroom, throughput, storage growth and the figures in a performance report — where the characteristic errors are of interpretation rather than calculation.

Typical format: a timed online test of 15 to 30 minutes, each item presenting a table, chart, or paragraph of figures with a multiple-choice question. Calculators are usually provided.

Four habits carry the load: establishing what the question asks before looking at the data; identifying the denominator and the population it represents; estimating, calculating, then comparing; and sanity-checking against what is physically plausible given the system.

### How this assessment maps to the role

- **Rates and error budgets** map to **Availability and capacity management**: service levels as numerical commitments.
- **Percentiles and distributions** map to **Availability and capacity management** and **Service support**: averages routinely concealing the experience being complained about.
- **Capacity arithmetic** maps to **Availability and capacity management**: headroom and growth determining when something breaks.
- **Interpreting monitoring data** maps to **Service support**: numbers as the first evidence in an incident.
- **Comparing before and after** maps to **Development process optimisation**: knowing whether a change helped.
- **Sizing and estimation** maps to **Systems design**: order-of-magnitude judgement.

### Practice questions

**Question 1 (easy) — Error rate**

240,000 requests in a day, 6,000 returned errors. Ask for the error rate.

- A) 2.0%
- B) 2.5%
- C) 4.0%
- D) 25%

**Correct answer: B**

**Explanation:** 6,000÷240,000=2.5%. This tests basic percentage calculation with an estimate check (one fortieth = 2.5%), and in a strong answer, recognising 6,000 failed requests needs context — a health check failure means something different from a failed payment.

**Question 2 (easy) — Availability arithmetic**

99.9% availability committed. Ask how much downtime that permits in a 30-day month.

- A) About 43 minutes
- B) About 4 hours
- C) About 7 hours
- D) About 3 minutes

**Correct answer: A**

**Explanation:** 43,200×0.001=43.2 minutes. This tests knowing the standard availability-to-minutes conversions by heart — the distractors are the adjacent commitment tiers (two nines ≈ 7 hours, four nines ≈ 4 minutes), which is exactly the confusion that matters operationally, since 99.9% and 99.99% differ by one character and an order of magnitude in requirement.

**Question 3 (easy) — Percentile versus average**

Response times: mean 180ms, 50th percentile 120ms, 95th percentile 800ms, 99th percentile 4,200ms. Users complain the service is slow. Ask which figure best explains the complaints.

- A) The mean, at 180ms.
- B) The 99th percentile at 4,200ms — one request in a hundred taking over four seconds means a user making several requests in a session will very likely hit at least one, and a page assembling ten calls will hit one most of the time.
- C) The median, at 120ms.
- D) None; the service is fast.

**Correct answer: B**

**Explanation:** This tests understanding that a 1% per-request chance compounds across a session or a multi-call page (roughly 10% for ten calls), and that averages are dominated by the fast majority and hide exactly the tail generating complaints — an average or median figure (A, C) describes requests nobody is complaining about.

**Question 4 (easy) — Storage growth**

A database grows 4 GB/month, currently 120 GB, on a 200 GB disk. Ask how long until full.

- A) 10 months
- B) 20 months
- C) 30 months
- D) 50 months

**Correct answer: B**

**Explanation:** (200−120)÷4=20 months. This tests computing remaining capacity, not total capacity, over the growth rate (D divides total by rate, the trap), and in a strong answer, recognising the meaningful figure is time to a chosen alert threshold (e.g. 80%, 10 months here), not time to full.

**Question 5 (moderate) — Throughput and concurrency**

Requests average 200ms, 8 worker threads. Ask for the theoretical maximum throughput.

- A) 8 requests per second
- B) 40 requests per second
- C) 1,600 requests per second
- D) 400 requests per second

**Correct answer: B**

**Explanation:** Each worker: 1÷0.2=5/s; ×8=40/s. This tests basic throughput calculation, and in a strong answer, recognising "theoretical" means real throughput is lower due to contention and tail latency, so designing to run at the theoretical ceiling leaves no headroom for a slow dependency or traffic spike.

**Question 6 (moderate) — Comparing before and after**

Before: 480 of 6,000 daily requests errored. After: 300 of 7,500 errored. Ask whether the error rate improved, and by how much in percentage points.

- A) Yes, by 180 requests
- B) Yes, by 4 percentage points
- C) Yes, by 3 percentage points
- D) No, it worsened

**Correct answer: B**

**Explanation:** Before 8%, after 4%, an improvement of 4 points (also a halving). This tests converting to rates before comparing volumes that differ — here traffic rose, so the raw count difference (A) actually understates the improvement, the opposite direction from the usual warning about raw counts.

**Question 7 (moderate) — Percentage change**

Median response time rose from 120ms to 150ms. Ask for the percentage increase.

- A) 20%
- B) 25%
- C) 30ms, which is the meaningful figure
- D) 80%

**Correct answer: B**

**Explanation:** (150−120)÷120=25%. This tests dividing by the original value, not the new one (the trap in A), and in a strong answer, recognising that latency percentages need their absolute context — 30ms on a 120ms call is a very different regression from 30ms on a 20ms call.

**Question 8 (moderate) — Reading an error budget**

99.9% target; 32 of 43-minute monthly budget used by day 10. Ask for the strongest observation.

- A) There is budget remaining.
- B) At this rate the budget will be exhausted around day 13 of a 30-day month, so the useful action is to establish what consumed 32 minutes in ten days rather than to note that some remains — an error budget is a signal about trajectory rather than a quota to spend down.
- C) The target should be lowered.
- D) 32 minutes is acceptable for a month.

**Correct answer: B**

**Explanation:** 32 minutes in 10 days extrapolates to exhaustion by roughly day 13. This tests reading an error budget as a trajectory signal rather than a simple remainder — option A is technically true and is the reading that produces a surprised incident review at month end.

**Question 9 (moderate) — Sizing a decision**

A proposed cache serves 85% of requests from memory (5ms); the rest are uncached (200ms). Ask for the expected average response time.

- A) 25ms
- B) 34ms
- C) 100ms
- D) 170ms

**Correct answer: B**

**Explanation:** 0.85×5+0.15×200=34.25ms. This tests weighting outcomes by probability correctly, and in a strong answer, recognising the average is dominated by the 85% of hits — the 15% still taking 200ms are entirely unaffected, so the tail (95th percentile) barely improves despite the average dropping dramatically.

**Question 10 (hard) — A metric that misleads**

A dashboard shows average CPU utilisation across a cluster at 40%; a colleague concludes there is ample headroom. Ask for the strongest observation.

- A) 40% is comfortable.
- B) An average across a cluster conceals distribution — one instance at 95% and four at 26% averages to 40%, and the hot instance is the one that will fail — so the useful figures are per-instance utilisation and the maximum, not the mean.
- C) More instances should be added.
- D) CPU is the wrong metric.

**Correct answer: B**

**Explanation:** This tests recognising that averaging across a cluster is one of the most reliably misleading dashboard practices, since a cluster fails when one member saturates, not when the mean crosses a threshold — uneven load is common (sticky sessions, uneven partitioning), and acting on the mean (A, C) risks adding capacity that never receives the traffic causing the problem.

**Question 11 (hard) — Percentage points and relative change**

A service's success rate rose from 96% to 98%. Ask which statement is most useful.

- A) A 2% improvement.
- B) A 2 percentage point improvement, and — more usefully for a service at this level — the failure rate halved from 4% to 2%, which is the framing that shows the size of the change.
- C) A 2.08% relative improvement.
- D) A 50% improvement.

**Correct answer: B**

**Explanation:** All three descriptions (2 points, 2.08% relative, 50% failure reduction) are technically defensible, but this tests recognising which framing is actually informative at a high success rate — the interesting quantity as a rate approaches 100% is the complement (failure rate), which is what users experience and what work is required to reduce.

**Question 12 (hard) — A plausibility check**

A report states a batch job processed 2.4 million records in 90 seconds; the service's average database write latency is 3ms. Ask for the strongest observation.

- A) The job is well optimised.
- B) The figures do not reconcile with sequential writes — 2.4 million writes at 3ms each is 7,200 seconds, so either the writes are batched or parallelised by a factor of about eighty, or the record count or the timing is wrong, and establishing which matters before anyone plans capacity on this figure.
- C) The database is fast.
- D) The latency figure must be wrong.

**Correct answer: B**

**Explanation:** 2,400,000×0.003=7,200 seconds (two hours), a factor-of-eighty discrepancy from the reported 90 seconds. This tests multiplying out a claimed throughput against a known per-unit cost to catch an unexplained inconsistency — the report may still be correct (batched or parallel writes), but B is the only option that flags the need to establish which before anyone relies on the figure.

### Administration tips

- Score for whether the candidate reads a percentile rather than a mean when the question concerns user-experienced tail behaviour.
- Note whether the candidate computes remaining capacity to a stated threshold rather than to full, and identifies the operationally meaningful figure.
- Watch for whether a cluster or portfolio average is checked for concealed distribution before being accepted as representative.
- Score for whether the candidate converts to a common rate before comparing populations of different sizes or volumes.
- Note whether an unusual or surprising figure is checked against a plausibility calculation (per-unit cost × volume) before being accepted at face value.

### Common pitfalls to watch for when scoring

- Crediting a mean or median cited where a percentile is the metric that actually explains user experience.
- Missing when a candidate compares raw counts across populations of different sizes rather than converting to rates.
- Rewarding a percentage change computed against the new value instead of the original.
- Accepting an error budget read as a simple remaining quota rather than a trajectory signal.
- Missing when a candidate accepts an average across instances or services without checking for concealed distribution.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads — specifications, tickets, standards and API contracts, where the gap between what a document says and what a developer assumes it says is where a substantial proportion of defects originate.

The classic format presents a short, dense passage followed by statements to classify True (follows necessarily), False (the passage contradicts it), or Cannot Say (neither established nor excluded). Alongside these come comprehension, main-point, and best-summary items.

The governing rule is answering from the passage alone, setting aside knowledge of how systems usually work — the specific hazard for a developer, who knows what a sensible system would do and may supply that rather than what the specification actually says. Cannot Say is frequently the correct and most valuable answer, since it identifies a decision somebody must make before code is written that silently assumes one.

### How this assessment maps to the role

- **Reading specifications precisely** maps to **Programming and build (software engineering)**: using agreed specifications to design and code.
- **Separating statement from inference** maps to **Systems design**: an unnoticed assumption becoming an unagreed design decision.
- **Identifying the main point** maps to **User focus**: understanding what a requirement is for.
- **Handling qualified language** maps to **Modern development standards**: knowing what a standard requires versus recommends.
- **Reading for absence** maps to **Information security**: an unstated error condition or default is where vulnerabilities live.
- **Reading contracts and interfaces accurately** maps to **Systems integration**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Clients must include an Authorization header on all requests to protected endpoints. Clients may include an Idempotency-Key header on POST requests; where present, the server returns the original response for any repeated request with the same key within 24 hours. Servers must reject requests exceeding 2 MB with a 413 response. Clients should implement exponential backoff on 429 responses."

**Question 1 (easy)**

Statement: "Clients must include an Idempotency-Key on POST requests."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says clients "may" include it, contradicting "must." This tests reading three deliberately different modal terms in one passage precisely — Authorization mandatory, idempotency keys optional, backoff recommended, each with different operational consequences for a client that omits it.

**Question 2 (easy)**

Statement: "A repeated POST with the same key after 30 hours returns the original response."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The guarantee applies within 24 hours; 30 hours falls outside it. This tests catching a stated time boundary — what actually happens after 24 hours is unstated, a genuine question for anyone implementing a client that retries after a long delay.

**Question 3 (moderate)**

Statement: "A client that does not implement exponential backoff violates the specification."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "Should" indicates a strong recommendation, not a requirement. This tests distinguishing "must" (rejection) from "should" (misbehaviour without rejection) — a client without backoff works and behaves badly under load, which is different from violating the spec.

**Question 4 (hard)**

Statement: "A 1.9 MB request will be accepted."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage rejects only requests exceeding 2 MB, so 1.9 MB is not rejected on size — but acceptance also depends on authorisation, validity and rate limits the passage does not address. This tests distinguishing "will not be rejected for this specific reason" from "will be accepted", a distinction that matters when writing client code that assumes the latter from evidence of only the former.

*Passage B — for Questions 5 to 8*

"The review of the platform found that teams using the shared deployment pipeline reported fewer failed releases than teams with bespoke pipelines. The review notes that teams on the shared pipeline were generally newer services with simpler architectures. The review did not assess whether failed releases were more severe in either group. It recommends that the platform team consider whether shared pipeline use should be mandatory."

**Question 5 (easy)**

Statement: "Teams using the shared pipeline reported fewer failed releases."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, without addition. This tests straightforward extraction — note the passage's "reported fewer" rather than "had fewer," which the statement respects.

**Question 6 (moderate)**

Statement: "The shared pipeline reduces failed releases."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage flags a substantial confound — shared-pipeline teams were newer, simpler services, independently likely to fail less. This tests recognising an association with a stated confound as insufficient to support a causal claim.

**Question 7 (moderate)**

Statement: "Failed releases on bespoke pipelines were more severe."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly that severity was not assessed. This tests treating declared silence as establishing nothing, in either direction — a frequency count says nothing about severity, and could rank very different situations identically.

**Question 8 (hard)**

Statement: "The review recommends making the shared pipeline mandatory."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The review recommends the platform team "consider whether" it should be mandatory — a recommendation to evaluate, not to mandate. This tests distinguishing "recommends considering X" from "recommends X" — the passage tells you what was recommended, and it was something different, so False rather than Cannot Say.

*Passage C — for Questions 9 to 12*

"All code must be reviewed by at least one other developer before merging to the main branch, unless the change is a documentation-only change. Code containing changes to authentication or authorisation must be reviewed by two developers, at least one of whom is not on the authoring team. All merges to main must pass the automated test suite. Emergency fixes may be merged with a single review provided a second review is completed within one working day."

**Question 9 (easy)**

Statement: "All changes require review before merging to main."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Documentation-only changes are exempt. This tests reading the exemption's precise scope — "documentation-only" excludes a change that also touches a variable name or comment in code, a distinction easy to widen under time pressure.

**Question 10 (moderate)**

Statement: "An emergency fix merged with one review, with a second review completed three days later, complies."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The condition requires the second review within one working day; three days exceeds it. This tests recognising the emergency route as a deferral of an obligation, not a waiver of it — an obligation easy to forget once the incident pressure has passed.

**Question 11 (hard)**

Statement: "An authentication change reviewed by two developers from the authoring team complies."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The rule has two limbs — two reviewers, and at least one from outside the authoring team; two internal reviewers satisfy the first and fail the second. This tests checking every limb of a compound requirement, and in a strong answer, recognising the purpose behind the second limb (an outside reviewer is more likely to question a shared, unexamined assumption).

**Question 12 (hard) — Main point**

Ask which best captures the main point of Passage C.

- A) All code must be reviewed before merging.
- B) Changes reaching main must be independently checked in proportion to their risk — one reviewer normally, two including an outsider for access control changes, automated tests always, and a deferred rather than waived second review in emergencies.
- C) Authentication changes need two reviewers.
- D) Emergency fixes may be merged with one review.

**Correct answer: B**

**Explanation:** B covers the whole passage and names the proportionality logic joining its provisions. This tests producing a summary that neither drops content (A drops the exemption and other provisions) nor omits a load-bearing condition (D drops "provided," converting a deferral into what reads like a waiver).

### Administration tips

- Score for whether the candidate answers strictly from the passage, resisting the supply of a "sensible system's" behaviour where the text is silent.
- Note whether modal verbs (must, should, may) are read at their exact, deliberately different strengths within one passage.
- Watch for whether the candidate distinguishes "not rejected for this reason" from "will be accepted", and a reported claim from an established fact.
- Score for whether every limb of a compound or conjunctive requirement is checked before a True verdict is given.
- Note whether a summary or main-point answer preserves a load-bearing condition (e.g. "provided," "consider whether") rather than dropping it.

### Common pitfalls to watch for when scoring

- Crediting a statement judged from what a sensible or typical system would do rather than the passage.
- Missing when a candidate reads "should" as either a hard requirement or as fully optional.
- Rewarding a causal claim ("X reduces Y") accepted despite a stated confound in the evidence.
- Accepting a verdict on a compound requirement that checks only one of its limbs.
- Missing when a candidate's summary drops a condition that changes a deferral into what reads like a waiver, or an exemption into an absolute.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses, scored against what the profession considers good practice at developer level.

Typical format: dilemmas with four or five candidate responses, asking which is most effective and often which is least.

Four principles carry most scenarios: users of government services usually have no alternative, which raises the weight of an outage or data error beyond what the same defect would carry in a commercial product; saying what is known versus believed distinguishes reliable engineers, since the most damaging habit is expressing a guess with the confidence of a measurement; raising concerns early and through the right route converts a concern into information rather than criticism; and leaving the codebase better than found, mostly through small consistent acts.

### How this assessment maps to the role

- **Security judgement** maps to **Information security**.
- **Code review and standards** map to **Modern development standards**: helping improve guidelines as well as following them.
- **Incident behaviour** maps to **Service support** and **Availability and capacity management**.
- **Working with others' code and constraints** maps to **Systems integration** and **Programming and build**.
- **Improving how the team works** maps to **Development process optimisation**.
- **Keeping the user in view** maps to **User focus**.

### Practice questions

**Question 1 (easy) — A security issue in a colleague's code**

Reviewing a more senior colleague's pull request, a query is built by string concatenation from user input. Ask for the most and least effective response.

- Option A: Approve it; they are more experienced and may have a reason.
- Option B: Comment specifically — that concatenating user input into a query allows SQL injection and a parameterised query fixes it — and mark the review as requesting changes, since the severity warrants blocking rather than a suggestion.
- Option C: Mention it in passing and approve.
- Option D: Raise it with your lead rather than the author.

**Most effective: B. Least effective: A.**

**Explanation:** B reports a fact about the code, states the fix, and blocks — a comment reading as a suggestion gets deferred, and a deferred vulnerability ships. A is least effective: deference in code review, regardless of seniority, is how serious defects reach production.

**Question 2 (easy) — An estimate you are unsure about**

A delivery manager asks how long a piece of work will take; genuinely unknown, since it depends on how a third-party API behaves. Ask for the most and least effective response.

- Option A: Give your best guess as a number.
- Option B: Say what the estimate depends on and offer to timebox an investigation — a day spent establishing how the API behaves will produce an estimate worth having, whereas a number given now is a guess that will be treated as a commitment.
- Option C: Say you cannot estimate it.
- Option D: Give a wide range.

**Most effective: B. Least effective: A.**

**Explanation:** B addresses the actual missing information with the cheapest way to get it — a timeboxed spike, well understood by delivery managers. A is least effective: a figure given now is recorded and communicated onward without the uncertainty attached, converting a guess into a false commitment.

**Question 3 (easy) — Finding a bug in your own released code**

Code released last week has been silently writing an incorrect value to a record. Ask for the most and least effective response.

- Option A: Fix it in the next release.
- Option B: Tell your team immediately, establish how many records are affected and whether anything downstream has consumed them, and treat the data remediation as a separate question from the code fix.
- Option C: Fix it quietly and correct the data.
- Option D: Fix the code and monitor.

**Most effective: B. Least effective: C.**

**Explanation:** B separates the code problem from the data problem and establishes scope, information anyone deciding next steps needs. C is least effective: concealment means a colleague who later discovers the silent correction will trust nothing said about that person's own code again.

**Question 4 (moderate) — Pressure to skip tests**

A colleague suggests merging without tests before a deadline tomorrow, adding tests next sprint. Ask for the most and least effective response.

- Option A: Agree; the deadline is real.
- Option B: Ask what specifically will not fit, since writing tests for the paths that matter is usually less work than it appears and the sprint after next is where untested code stays — and if something genuinely has to give, propose that it is scope rather than tests, and say so to whoever owns the deadline.
- Option C: Refuse and cite the standard.
- Option D: Merge without tests and write them yourself later.

**Most effective: B. Least effective: D.**

**Explanation:** B questions the premise, proposes scope as the alternative sacrifice, and routes the trade-off to whoever owns the deadline. D is least effective: taking personal responsibility for a team commitment means the debt exists and only one person knows about it.

**Question 5 (moderate) — A third-party dependency with a vulnerability**

An automated scan flags a critical vulnerability in a library three major versions behind; upgrading looks substantial. Ask for the most and least effective first step.

- Option A: Start the upgrade.
- Option B: Establish whether your service is actually exposed — whether the vulnerable code path is one you call, and whether the conditions for exploitation apply in your deployment — because that determines whether this is an emergency, a scheduled upgrade, or a false positive, and the three warrant very different responses.
- Option C: Report it as a critical incident.
- Option D: Suppress the alert and schedule the upgrade.

**Most effective: B. Least effective: D.**

**Explanation:** B assesses actual exposure first, a couple of hours' work that determines everything that follows. D is least effective: suppressing the alert makes the finding invisible, and if the assessment is never done, urgency is never established either.

**Question 6 (moderate) — Disagreement about an approach**

Believing a more experienced colleague's design will not scale; they disagree. Ask for the most and least effective response.

- Option A: Defer to their experience.
- Option B: State your specific concern with the numbers behind it — the expected volume, the operation you think becomes a bottleneck, and why — and ask what you are missing, since a concrete concern either gets answered or turns out to be right, while a general worry gets dismissed.
- Option C: Escalate to the lead developer.
- Option D: Implement it and see.

**Most effective: B. Least effective: A.**

**Explanation:** B converts an opinion into a checkable claim and asks what might be missing, collaborative rather than adversarial. A is least effective: deferring on experience rather than reasoning is how known scaling problems get built.

**Question 7 (moderate) — Code that is open by default**

Writing a component for a public repository; a colleague suggests hard-coding an internal hostname to save time, since it is not secret. Ask for the most and least effective response.

- Option A: Agree; it is not sensitive.
- Option B: Point out that a hard-coded internal hostname in a public repository reveals internal infrastructure to anyone reading it and makes the component unusable by anyone else — which defeats the purpose of publishing — so it belongs in configuration regardless of whether it counts as secret.
- Option C: Agree and add a note that it should be configurable later.
- Option D: Refuse to publish the repository.

**Most effective: B. Least effective: C.**

**Explanation:** B names both objections — reconnaissance value and defeated reusability. C is least effective: "configurable later" in a published repository means the hostname is public now and stays in commit history even after a later fix.

**Question 8 (hard) — An incident with an unclear cause**

A service fails intermittently; a plausible theory exists but is unconfirmed. Asked by the lead what is wrong. Ask for the most and least effective response.

- Option A: State your theory as the cause.
- Option B: State what you have established, state the theory as a theory, and say what would confirm or eliminate it — because during an incident a confidently stated guess sends people down one path and the cost of being wrong is measured in outage minutes.
- Option C: Say you do not know yet.
- Option D: Say you are investigating.

**Most effective: B. Least effective: A.**

**Explanation:** B gives the lead what is known, what is suspected, and what would settle it, information that lets them decide how to proceed. A is least effective: during an incident, a theory stated as fact reaches stakeholder updates and becomes the organisation's understanding, often losing its hedge along the way.

**Question 9 (hard) — A requirement that will harm users**

A requirement times out a user's session after five minutes on a long benefits form; belief that many users will lose work as a result. Ask for the most and least effective response.

- Option A: Implement it as specified.
- Option B: Raise it before implementing, with the specific consequence — that a form taking most users longer than five minutes to complete will discard the work of anyone who pauses to find a document — and propose alternatives such as a longer timeout, a warning, or saving progress, while accepting that there may be a security reason you do not know about.
- Option C: Implement a longer timeout.
- Option D: Refuse to implement it.

**Most effective: B. Least effective: C.**

**Explanation:** B raises the concrete consequence before the work is done, offers alternatives, and acknowledges an unknown security reason might exist. C is least effective: silently implementing something other than specified means a possible security requirement goes unmet with nobody aware.

**Question 10 (hard) — Improving how the team works**

The team spends about an hour a day on merge conflicts from long-lived branches. Ask for the most and least effective response.

- Option A: Manage your own branches better.
- Option B: Raise it in a retrospective with the observation and a specific proposal — smaller, shorter-lived branches, or merging main into feature branches daily — since an hour a day across the team is a substantial cost and a retrospective is the forum where the team can agree a change.
- Option C: Suggest a different branching strategy to the lead.
- Option D: Accept it; merge conflicts are normal.

**Most effective: B. Least effective: D.**

**Explanation:** B quantifies the cost and brings a specific proposal to the forum designed for agreeing shared practice changes. D is least effective: treating a measurable, fixable cost as normal forgoes an easy improvement.

**Question 11 (hard) — Reusing versus writing**

A poorly documented internal library might do what's needed; writing a fresh version would take two days. Ask for the most and least effective response.

- Option A: Write your own; two days is not long.
- Option B: Spend an hour establishing what the library actually does, since if it fits you save two days and avoid maintaining a second implementation — and if it does not, you have learned that cheaply and can write your own knowing why.
- Option C: Use the library and adapt around its behaviour.
- Option D: Ask the library's maintainers.

**Most effective: B. Least effective: A.**

**Explanation:** B recognises the strong asymmetry — an hour either saves two days or costs an hour. A is least effective: it commits to the two-day cost, plus a permanent maintenance cost, without checking whether either was necessary.

**Question 12 (hard) — A shortcut nobody will see**

Under time pressure, something was implemented in a known-poor but working way; nobody noticed in review. Ask for the most and least effective response.

- Option A: Leave it; it works and was reviewed.
- Option B: Flag it yourself — in a comment, a ticket, or to the team — because you are the only person who knows, and the cost of a known shortcut is manageable while the cost of an unknown one is paid by whoever meets it next without context.
- Option C: Fix it now regardless of the deadline.
- Option D: Mention it if somebody asks.

**Most effective: B. Least effective: A.**

**Explanation:** B removes the asymmetry of knowledge at almost no cost — a comment explaining the shortcut turns an invisible liability into a managed one. A is least effective: "it was reviewed" is not a defence, since review did not catch what only the author knows.

### Administration tips

- Score for whether the candidate separates a verified fact from a belief or theory, particularly under incident or deadline pressure.
- Note whether a security, quality, or data concern is raised through the right channel, at the right altitude, before or alongside implementation rather than after.
- Watch for whether the candidate treats a code review comment's severity as something to state explicitly, distinguishing blocking from suggestion.
- Score for whether the candidate separates a code fix from any downstream data or consequence remediation it implies.
- Note whether a shortcut, assumption, or known limitation is disclosed proactively rather than left for someone else to discover without context.

### Common pitfalls to watch for when scoring

- Crediting deference to seniority as sufficient justification to approve a stated security or quality issue.
- Missing when a candidate gives a number as an estimate when it is genuinely a guess.
- Rewarding a response that fixes code forward while leaving a data or downstream consequence unexamined.
- Accepting a stated theory presented with the confidence of an established fact during an incident.
- Missing when a candidate leaves a known shortcut or limitation undisclosed rather than flagging it for the next person.

## Conclusion

This guide has worked through what a passing test, empty log, or complete coverage figure actually establishes, restoring service before diagnosing a cause among competing candidates, treating "flaky" as a description rather than a diagnosis, and asking what an attacker controls; numeric reasoning distinguishing percentiles from averages, converting rates before comparing populations of different sizes, reading error budgets as a trajectory, and sanity-checking a claimed figure against a known per-unit cost; the discipline of reading specifications, standards and review findings at the precision their modal verbs, exemptions and confounds demand; and the situational judgement calls that define this role level — separating a verified fact from a belief, raising a concern early through the right channel, and disclosing a known shortcut rather than leaving it for someone else to discover without context.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around what evidence actually establishes and whether uncertainty is stated honestly. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
