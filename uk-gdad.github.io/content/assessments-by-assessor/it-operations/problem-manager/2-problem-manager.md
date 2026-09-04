# Problem Manager - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for problem manager, within the UK Government Digital and Data profession. The material is job-specific: it uses the kinds of artefacts a problem manager genuinely handles — incident feeds from the service desk and monitoring, problem records and known error databases, root cause analyses, trend reports, change impact assessments, runbooks, and the recommendations put in front of service owners — and the kinds of decisions genuinely made, such as which recurring fault to investigate next, whether an analysis has truly reached root cause, how to coordinate a team of specialists across organisational boundaries, and how to make prevention stick in organisations that naturally prioritise the urgent over the important.

The role's professional purpose is to resolve and control the root causes of incidents and prevent their recurrence — to pick up feeds from numerous sources and put in place continual improvements that stop regular service outages happening again. That purpose is cognitively demanding: root cause analysis is disciplined reasoning about evidence, and a plausible-but-wrong cause is the occupational hazard. It is numerically demanding: trends, recurrence rates, cost-of-fault arithmetic and KPI data are the currency in which problems are prioritised and fixes are justified. It is verbally demanding: specialists' reports and suppliers' bulletins must be read precisely, and findings must be written to survive scrutiny in reviews. And it is judgement-demanding above all: coordinating investigations not personally performed, working closely with major incident managers whose urgency competes with thoroughness, and telling organisations uncomfortable truths about why their incidents keep recurring.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. For a problem manager, it presents the everyday materials of the discipline — incident feeds, trend data, causal chains, known error records, change histories, and dependency information — and asks the candidate to reason quickly and accurately about them.

The typical format is an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many platforms adapt difficulty to performance, and employers typically receive accuracy and speed profiles rather than a single figure.

Cognitive assessment is peculiarly on-the-nose for this role, because problem management is applied cognition. Root cause analysis is logical deduction with evidence discipline: distinguishing correlation from cause, a contributing factor from a root cause, and a cause that can be fixed from a cause that can only be named. Trend work is pattern recognition with statistical honesty: seeing the signal that three teams' separate tickets conceal, without hallucinating patterns in noise.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to **Problem management**: ensuring the right actions are taken to investigate, resolve and anticipate problems begins with recognising recurring structure in incident feeds.
- **Logical deduction** maps to **Problem management** and **Incident management**: root cause analysis that minimises the adverse impact of incidents means reasoning validly from symptoms, timelines and test results to causes.
- **Error checking** maps to **Asset and configuration management** and **Change management**: tracking, logging and correcting information, and assessing the impact of change, both require spotting the record or assessment that contradicts the rest.
- **Prioritisation** maps to **Ownership and initiative** and **Availability and capacity management**: ranking a problem backlog by evidence rather than by noise.
- **Applied problem solving** maps to **Problem management** and **Service focus**: coordinating a team to investigate problems, implement solutions and take preventive measures, while seeing the bigger picture across groups of services.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across incident feeds**

A morning review of feeds shows these overnight and early-morning items:

1. Service desk: "Case system slow" — 08:05, Team North
2. Monitoring: database platform CPU at 95% — 08:00-08:20
3. Service desk: "Cannot log in to HR portal" — 08:10, one user
4. Service desk: "Case searches timing out" — 08:12, Team South
5. Monitoring: nightly batch overran, finished 08:15 (normally 06:30)

Which grouping best identifies a single candidate problem?

- A) Items 1, 3 and 4 — all are service desk tickets
- B) Items 1, 2, 4 and 5 — case-system slowness coinciding with database CPU saturation and an overrunning batch that was still executing during working hours
- C) Items 2 and 3 — both involve infrastructure
- D) Items 3 and 5 — both are about timing

**Correct answer: B**

**Explanation:** Items 1 and 4 are the same symptom from different teams within minutes; item 2 shows the shared database platform saturated across that window; item 5 supplies a candidate mechanism — a batch normally finishing at 06:30 was still running at 08:15, during the login peak. Together they sketch a coherent story. Item 3 is a single-user login issue on a different service. This tests grouping by causal plausibility rather than superficial category (source, vague topic) — the patterns live in the combination of multiple vantage points, precisely why the role picks up feeds from numerous sources.

**Question 2 (easy) — Root cause versus contributing factor**

An outage review establishes: the service failed when disk space ran out; disk space ran out because a log-cleaning job had been silently failing for weeks; the job failed because its service account password expired; monitoring did not alert on the failing job because job-failure alerts were never configured. Which statement best characterises "the service account password expired"?

- A) It is the root cause — the deepest fact in the chain.
- B) It is one cause in a chain, but the absence of job-failure alerting is a distinct, independent deficiency: fixing the password alone leaves the organisation blind to the next silent job failure, so both must be addressed.
- C) It is irrelevant — the root cause is the disk filling up.
- D) It is a user error and out of scope for problem management.

**Correct answer: B**

**Explanation:** The chain runs: expired password → failed cleaning job → disk full → outage. The password expiry is the deepest link in that chain — but alerting that would have caught the failing job for any reason was never configured, a separate systemic weakness. Fixing both matters because password expiries, and a dozen other faults, will happen again — the question is whether they run silently for weeks. This tests holding a two-track finding: the specific cause of this outage, and the detection gap that let it grow, rather than stopping one link short.

**Question 3 (easy) — Error checking a problem record**

Quality-checking problem records before a review, one record reads:

| Field | Entry |
|---|---|
| Problem | Recurring email delivery delays |
| Linked incidents | 14 |
| First occurrence | 3 May |
| Root cause | Confirmed: mail queue misconfiguration |
| Status | Root cause under investigation |
| Workaround | Manual queue flush, documented |

Which inconsistency most needs correcting?

- A) 14 linked incidents is too many for one record.
- B) The root cause field says "Confirmed" while the status says "under investigation" — the record contradicts itself about the most decision-relevant fact.
- C) The first occurrence date is too long ago.
- D) A workaround should not be documented before root cause is confirmed.

**Correct answer: B**

**Explanation:** The root cause field asserts confirmation; the status field says investigation continues — both cannot be true, and the difference changes what every consumer of the record does next. Options A, C and D assert rules that do not exist: heavily recurring problems legitimately link many incidents, long-running problems are common, and workarounds are routinely documented before causes are confirmed. This tests spotting a self-contradicting field pair — the asset and configuration management discipline applied to the analyst's own artefacts.

**Question 4 (moderate) — Prioritising the problem backlog**

Four problems compete for two available analysts this fortnight:

1. P-101: causes ~20 incidents/month, each 30 minutes' impact for one user; workaround exists; steady for a year.
2. P-102: caused 3 incidents in the last 6 weeks — but each was a full outage of a statutory reporting service, and frequency appears to be rising (0 in the previous quarter).
3. P-103: one incident ever, three months ago, no recurrence, cause unknown.
4. P-104: causes ~8 incidents/month on a retiring service; decommissioning completes in 6 weeks.

Which two problems should get the analysts?

- A) P-101 and P-104 — the highest incident counts
- B) P-102 and P-101 — the emerging high-severity problem and the largest steady drain
- C) P-102 and P-103 — the severe one and the mysterious one
- D) P-103 and P-104 — clear the small ones first

**Correct answer: B**

**Explanation:** P-102 leads on severity (statutory service outages) and trajectory (rising frequency — investigating early is cheap). P-101 is a steady drain worth an analyst now. P-104's fix would land near the service's retirement, so its arithmetic doesn't favour investigation. P-103 is a single unrepeated event with no pattern to analyse. This tests prioritising by impact × frequency × trajectory rather than raw incident count or intellectual interest.

**Question 5 (moderate) — Deduction from a timeline with a confounder**

Incidents on a service spiked in the week beginning 6 October. Two things happened around then: a new application version deployed on 3 October, and the annual benefit-application deadline fell on 10 October, historically doubling user traffic that week. Which investigation step most efficiently separates the two candidate causes?

- A) Roll back the application version and see whether the spike ends.
- B) Compare this year's deadline week against previous years' deadline weeks (same traffic surge, old version): if previous deadline weeks showed no comparable spike, the new version becomes the prime suspect; if they showed similar spikes, traffic load explains it.
- C) Wait until the week after the deadline — if incidents fall, traffic was the cause.
- D) Survey users about which version they prefer.

**Correct answer: B**

**Explanation:** History provides a natural control group — previous deadline weeks had the traffic surge without the new version, so their incident rates isolate the traffic effect cleanly. Option A carries live rollback risk and is confounded in the same direction. Option C discriminates nothing, since post-deadline quiet is predicted by both hypotheses. This tests finding the historical comparison that varies one factor at a time before reaching for an intervention.

**Question 6 (moderate) — Error checking a change impact assessment**

Ahead of the change advisory board, an impact assessment for a database index change intended to fix problem P-230 (slow searches) states: (i) "Affects the case management service only"; (ii) "The reporting warehouse reads the same tables nightly"; (iii) "Index rebuild runs 01:00-03:00, during which searches degrade"; (iv) "No interaction with the nightly warehouse extract, which runs 01:30-04:00". Which pair of statements needs challenging?

- A) (i) and (ii) — a service that reads the same tables is plausibly affected
- B) (ii) and (iii) — both mention timing
- C) (iii) and (iv) — the windows overlap, yet (iv) claims no interaction; and taken with (ii), statement (i)'s "only" is doubtful too
- D) Nothing needs challenging — the assessment is internally consistent

**Correct answer: C**

**Explanation:** The rebuild window (01:00-03:00) and the extract window (01:30-04:00) overlap by ninety minutes, yet (iv) asserts no interaction — a rebuild on tables a heavy extract is simultaneously reading is a textbook contention scenario. Following the thread, (ii) also makes (i)'s "only" suspect. This tests cross-examining an impact assessment's own claims against each other, especially absolute words sitting next to facts that undermine them.

**Question 7 (moderate) — The trend that is not there**

A service owner shows monthly incident counts for their service over six months: 22, 19, 24, 20, 25, 23, and argues: "three of the last four months are above 21. It's trending up." What is the statistically honest reading?

- A) The service owner is right: three high months of four is a trend.
- B) The counts oscillate between 19 and 25 with no sustained direction — the "trend" is normal month-to-month variation, and an investigation should wait for a genuine signal, though a threshold can be agreed with the owner that would trigger one.
- C) The counts are trending down, since the final value (23) is below the peak (25).
- D) Six months of data can never support any conclusion.

**Correct answer: B**

**Explanation:** The sequence alternates up and down around a level of roughly 22, ending within one incident of where it started, with no run of consecutive increases. "Three of four above 21" is selection, since half the months will sit above the midpoint in any period. This tests distinguishing a genuine emerging trend (consecutive movement or a sustained level shift) from oscillation, and a strong candidate's answer proposes a pre-agreed threshold rather than a bare refusal.

**Question 8 (moderate) — Choosing the next diagnostic action**

A recurring fault (intermittent transaction failures, ~2% of transactions, no obvious pattern) has an investigation stalled between three hypotheses: (H1) a race condition under concurrent load; (H2) a malformed-data issue from one upstream source; (H3) intermittent network drops to the payment gateway. The failed transactions are logged with full context. Which single analysis most efficiently discriminates between the hypotheses?

- A) Add more logging and wait a month for new data.
- B) Profile the existing failed transactions against each hypothesis's signature: correlation with concurrency levels (H1), concentration by upstream source (H2), and clustering with gateway timeout errors (H3) — each signature implicates one hypothesis and exonerates others.
- C) Fix all three possible causes simultaneously to be safe.
- D) Reproduce the fault in a test environment by trial and error.

**Correct answer: B**

**Explanation:** The discriminating evidence already exists — each hypothesis makes a different testable prediction about it. Option A ignores the data in hand; option D is expensive and unnecessary; option C triples engineering spend and produces no learning about which fix worked. This tests deriving each hypothesis's observable signature and testing them against existing evidence — the single highest-leverage move in root cause analysis.

**Question 9 (challenging) — The fix that worked for the wrong reason**

Problem P-310 (weekly report generation failures) was closed after a fix: the report service was moved to a larger server, and failures stopped. Two months later, failures resume — same symptoms. Reviewing the original analysis: the failures had stopped in the week before the server move, immediately after a separate team quietly halved the report's input data volume during an unrelated clean-up; volumes have since regrown past their old level. What does this history most strongly suggest?

- A) The larger server fixed the problem, and an even larger server is now needed.
- B) The original "fix" was likely coincidental: the failures track input data volume, not server capacity — the true mechanism is probably volume-sensitive (a timeout, a memory ceiling in the report code), and the reopened investigation should test against volume directly.
- C) The other team's clean-up caused the current failures.
- D) The problem is unfixable and should be converted to a permanent workaround.

**Correct answer: B**

**Explanation:** Failures stopped before the intervention that got the credit, breaking the causal story the closure relied on; volume decreases and increases both track the failure pattern in the correct direction. This tests verifying a fix against the mechanism, not just the symptom's silence — "failures stopped after our change" must survive "did they stop because of it?" — and treating recurrence after closure as new, informative evidence.

**Question 10 (challenging) — Coordinating under a dependency clash**

The permanent fix for P-278 requires three sequential pieces of work: a supplier patches their module (3 weeks from order), then an applications team integrates and tests (2 weeks, cannot start before the patch arrives), then deployment in a monthly release window (releases go live on the first Monday of each month; integration must be complete before a release's code-freeze, which falls one week before go-live). It is Monday 1 September, a go-live day. If the supplier patch is ordered today, what is the earliest release that can carry the fix?

- A) The 6 October release
- B) The 3 November release
- C) The 1 December release
- D) It cannot be scheduled without more information

**Correct answer: B**

**Explanation:** Patch ordered 1 September, arriving 22 September; integration complete 6 October. October's code-freeze is 29 September — integration finishes a week too late, so October is missed. November's freeze (27 October) is comfortably preceded by the 6 October completion. This tests composing three parties' timelines against a governance calendar and comparing against the freeze, not the go-live date — a common trap.

**Question 11 (challenging) — Anticipating a problem before it exists**

Reviewing capacity and incident data across services: (i) the document store's storage utilisation grows 5 percentage points monthly and stands at 70%; (ii) a policy change in eight weeks will require caseworkers to attach roughly double the documents per case; (iii) the store's incident history shows a similar service began throwing intermittent write failures at about 92% utilisation before anyone predicted trouble. No incidents have occurred yet. What is the strongest action?

- A) Nothing yet — problem management responds to incidents, and there are none.
- B) Raise a proactive problem record now: on current growth the store reaches ~90% in four months, but the policy change in two months will steepen the curve sharply; propose capacity expansion (or archival) scheduled to complete before the policy lands, citing the comparator service's failure threshold as evidence.
- C) Wait until utilisation reaches 92%, then declare an incident and act with proper urgency.
- D) Email the storage team a general warning to "keep an eye on the document store".

**Correct answer: B**

**Explanation:** Baseline growth alone reaches ~90% around month four, but the policy change roughly doubles the growth driver, moving the danger zone much sooner — a predictable problem with a deadline. This tests converting the three facts into a proactive problem record with a projection, threshold, and completion date — prevention with a business case, rather than the reactive-only reading that ignores the duty to anticipate problems.

**Question 12 (challenging) — Reading a multi-cause incident honestly**

A serious outage occurred when three things aligned: a fault in a load balancer (dormant for months), a configuration error made during Tuesday's routine change (which activated the fault), and an on-call engineer's misdiagnosis that extended the outage by two hours (the runbook's decision tree did not cover the observed symptom combination). A service owner asks: "So what was THE root cause?" Which answer best serves the organisation?

- A) "The configuration error — the person who made it triggered everything."
- B) "The load balancer fault — it was there first."
- C) "The outage had no single root cause: a latent fault, an activating change error, and a runbook gap that turned a misdiagnosis into two extra hours all contributed — and each yields a distinct preventive action: fix the fault, strengthen pre-change validation for that configuration class, and extend the runbook's decision tree. Treating any one as 'THE cause' leaves the other two armed."
- D) "The engineer's misdiagnosis — the outage would have been short without it."

**Correct answer: C**

**Explanation:** Serious failures in complex systems are characteristically conjunctions: a latent condition, a trigger, and a degraded response, each necessary and none sufficient. Options A, B and D each collapse the conjunction onto one factor, and A and D pin systemic weaknesses on individuals. This tests naming all three contributing causes with a distinct preventive action for each, and explaining why the single-cause framing is itself a risk.

### Administration tips

- **Score for whether a candidate groups feed items by causal plausibility** rather than superficial category.
- **Watch for whether a candidate distinguishes a root cause from a contributing factor**, and checks for causes outside the causal chain.
- **Note whether a candidate verifies a fix against mechanism** rather than accepting symptom silence as proof.
- **Note whether a candidate prioritises by impact, frequency, and trajectory** rather than raw incident count.
- **Use the multi-cause item (Question 12) to observe whether a candidate resists naming a single scapegoat cause.**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that declares root cause at the first plausible link** without checking for a systemic finding outside the chain.
- **Crediting an answer that trusts a fix because symptoms stopped**, without verifying mechanism.
- **Missing when a candidate reads a trend into oscillation.**
- **Accepting prioritisation by raw incident count alone.**
- **Rewarding a scheduling answer that compares against go-live rather than code-freeze.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures a candidate's ability to interpret, manipulate and draw sound conclusions from numerical information of the kind this role genuinely produces: incident and recurrence counts, trend series, availability and KPI figures, cost-of-fault and cost-of-fix arithmetic, and the tables that populate problem reviews and service reports. Calculators are usually permitted — the test measures whether the candidate chooses the right calculation and reads data accurately.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions, each presenting a table, chart, or short data description. The harder items chain two or three steps or embed an interpretation trap — the right arithmetic on the wrong base, the average that conceals the tail, the trend read from cherry-picked points.

For a problem manager, numbers are the argument. Which problem gets investigated first is a numerical case; whether a fix is worth its cost is a numerical case; whether a fix worked is a numerical case — recurrence rates before and after, honestly baselined. Credibility with service owners, change boards and finance colleagues depends on arithmetic that survives checking.

### How this assessment maps to the role

- **Trend and recurrence arithmetic** maps to **Problem management**: investigating patterns and trends, and demonstrating that preventive measures worked.
- **Impact and cost quantification** maps to **Problem management** and **Ownership and initiative**: the case for each fix rests on cost-of-fault versus cost-of-fix arithmetic done honestly.
- **KPI and availability figures** maps to **Availability and capacity management**: fluent conversion between percentages, hours and thresholds.
- **Weighted combination across services** maps to **Service focus**: combining unequal figures correctly, weighted, never naively averaged.
- **Change and schedule arithmetic** maps to **Change management**: computing windows, durations, and clashes.
- **User-impact data** maps to **User focus**: quantitative data about who is affected, how often, how badly.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Share of incidents from known problems**

Last month the service desk logged 480 incidents. Of these, 168 were linked to existing problem records. What percentage of incidents came from known problems?

- A) 30%
- B) 35%
- C) 40%
- D) 45%

**Correct answer: B**

**Explanation:** 168 ÷ 480 = 0.35 = 35%. This tests basic part-of-whole calculation, and a strong candidate's answer notes this headline metric says a third of the desk's workload is predictable — incidents already forecast by open problems.

**Question 2 (easy) — Did the fix reduce recurrence?**

A permanent fix for a recurring login fault deployed at the end of March. Monthly incident counts for that fault: January 44, February 40, March 42, April 6, May 4. What was the percentage reduction comparing the March count with the May count?

- A) 80%
- B) 85%
- C) 90%
- D) 95%

**Correct answer: C**

**Explanation:** (42−4)÷42 ≈ 90%. This tests computing exactly what is asked (March to May) rather than averaging or substituting other months, and a strong candidate's answer notes the residual 4–6 incidents post-fix deserve a look — the same fault lingering, or different faults miscategorised under the same banner.

**Question 3 (easy) — Reading a problem review table**

| Problem | Linked incidents this quarter | Change vs last quarter | Fix status |
|---|---|---|---|
| P-201 | 36 | +12 | Fix scheduled |
| P-214 | 28 | −20 | Fix deployed |
| P-222 | 31 | +2 | Under investigation |
| P-230 | 15 | +9 | Under investigation |

Which problem shows the fastest proportional growth in linked incidents?

- A) P-201
- B) P-214
- C) P-222
- D) P-230

**Correct answer: D**

**Explanation:** P-201: previous=24, growth=12÷24=50%. P-222: previous=29, growth≈7%. P-230: previous=6, growth=9÷6=150%. P-230 grows fastest proportionally despite adding fewer incidents in absolute terms than P-201. This tests reconstructing a missing baseline before judging growth, and a strong candidate's answer distinguishes absolute growth (where workload is piling up) from proportional growth (the early-warning signature of an emerging problem).

**Question 4 (moderate) — Cost of a recurring problem**

A recurring fault causes 14 incidents per month. On average, each incident consumes 1.5 hours of a technician's time (£35/hour) and interrupts 20 users for 30 minutes each (average £28/hour). What is the approximate monthly cost of the fault?

- A) £735
- B) £3,920
- C) £4,655
- D) £6,240

**Correct answer: C**

**Explanation:** Per incident: technician 1.5×£35=£52.50; users 20×0.5×£28=£280; total £332.50. Monthly: 14×£332.50=£4,655. This tests including everyone's time, not just the fixers' — a strong candidate's answer notes user impact (£280 of £332.50 per incident) usually dominates, which is why cost-of-fault arithmetic that includes users makes fixes look as valuable as they truly are.

**Question 5 (moderate) — Payback period for the fix**

The fault in Question 4 costs £4,655 per month. The permanent fix requires 5 days of a developer (8 hours/day at £55/hour) plus a £2,500 supplier fee. How long until the fix pays for itself?

- A) About 2 weeks
- B) About 1 month
- C) About 2 months
- D) About 4 months

**Correct answer: B**

**Explanation:** Fix cost: 5×8×£55=£2,200 + £2,500 = £4,700. Payback: £4,700÷£4,655 ≈ 1.01 months. This tests including all fix costs and using the full fault cost from the prior calculation — a strong candidate's answer notes prevention cases die from underestimated fault costs far more often than overestimated fix costs.

**Question 6 (moderate) — Weighted recurrence across services**

A combined "repeat incident rate" across three services: Service A — 400 incidents, 30% repeats; Service B — 100 incidents, 60% repeats; Service C — 500 incidents, 20% repeats. What is the overall repeat rate?

- A) 36.7% — the average of the three rates
- B) 28% — total repeats (280) divided by total incidents (1,000)
- C) 30% — the middle value
- D) 20% — the largest service dominates

**Correct answer: B**

**Explanation:** Repeats: A=120, B=60, C=100. Total 280÷1,000=28%. The unweighted average (36.7%) overweights Service B's 100 incidents by treating it as equal to Service C's 500. This tests combining rates through raw numerators and denominators, never through each other — and a strong candidate's answer notes Service B's 60% is still a genuine finding worth its own investigation, separate from the combined figure.

**Question 7 (moderate) — Availability arithmetic for a KPI conversation**

A service has a 99.7% availability KPI, measured monthly over its 600 service hours. Recurring problem P-244 caused three outages this month totalling 2.4 hours; other causes added 0.4 hours of downtime. Did the service meet its KPI, and how much of the breach (if any) is attributable to P-244?

- A) Met the KPI — total downtime 2.8 hours is small.
- B) Missed the KPI: the allowance is 1.8 hours, total downtime was 2.8 hours, and P-244 alone (2.4 hours) exceeded the entire allowance — the KPI would have been met without it.
- C) Missed the KPI, but no single cause is responsible.
- D) Met the KPI because 99.7% of 600 hours allows 18 hours of downtime.

**Correct answer: B**

**Explanation:** Allowance = 0.3%×600 = 1.8 hours. Actual downtime = 2.8 hours, missing the KPI. P-244 alone (2.4h) exceeds the whole allowance; without it, downtime would have been 0.4h, comfortably within it. This tests the allowance-actual-attribution pattern that connects a problem record to a KPI breach — a strong candidate's answer draws the argument this supports for prioritising a fix.

**Question 8 (moderate) — Projecting a backlog honestly**

A problem backlog has 24 open records. Each month, on average, 6 new problems are opened and 4 are closed. If nothing changes, how many will be open in 6 months, and what closure rate would hold the backlog flat?

- A) 36 open; closures would need to rise to 6/month
- B) 30 open; closures would need to rise to 5/month
- C) 36 open; closures are fine as they are
- D) 24 open; the backlog is already flat

**Correct answer: A**

**Explanation:** Net change = +2/month; over 6 months, +12, giving 36 open. A flat backlog needs closures = arrivals = 6/month. This tests projecting a small steady net rate forward — a strong candidate's answer notes a backlog growing by 2/month is 50% bigger within half a year, and old unfixed problems compound in cost even while the count merely creeps.

**Question 9 (challenging) — Before/after with a changing denominator**

A fix for a printing problem deployed in June. Printing incidents: May 60, July 45. The organisation also shrank: May had 4,000 active users, July 3,000 (an office closed). A colleague says: "Incidents fell 25% — decent, but the fix underperformed expectations." What do the per-user rates show?

- A) The colleague is right: a 25% fall is the true effect.
- B) Per-user rates are identical: 0.015 in both months, so the fix achieved nothing at all.
- C) May: 60÷4,000=0.015 incidents/user; July: 45÷3,000=0.015 incidents/user — per user, nothing changed: the entire 25% fall is explained by having fewer users, and the evidence suggests the fix had no measurable effect.
- D) Rates cannot be compared across months with different user counts.

**Correct answer: C**

**Explanation:** The per-user rate is identical, meaning the raw-count fall exactly matches the fall in users — the "improvement" is the denominator shrinking, not the fault retreating. This tests normalising a before/after comparison when the population itself has changed — a strong candidate's answer notes the calibrated wording ("no measurable effect, evidence suggests") is more defensible than B's flat "achieved nothing at all".

**Question 10 (challenging) — Which problem drains most user time?**

Four recurring problems, one analyst slot:

| Problem | Incidents/month | Avg users affected per incident | Avg disruption per user (minutes) |
|---|---|---|---|
| P-301 | 40 | 1 | 60 |
| P-302 | 6 | 150 | 15 |
| P-303 | 12 | 25 | 20 |
| P-304 | 2 | 400 | 10 |

Ranked by total user-hours lost per month, which problem should the analyst take first?

- A) P-301 — most incidents
- B) P-302 — big user numbers and moderate frequency
- C) P-303 — the balanced middle case
- D) P-304 — the biggest single events

**Correct answer: B**

**Explanation:** User-minutes: P-301=2,400; P-302=13,500; P-303=6,000; P-304=8,000. P-302 tops the ranking despite topping neither incident count, users-per-event, nor per-user disruption individually. This tests computing frequency × breadth × depth rather than prioritising by any single column, each of which crowns a different — wrong — problem.

**Question 11 (challenging) — Trend with seasonality: is the fix working?**

A fix for a case-system problem deployed at the end of September. Monthly linked incidents: July 30, August 32, September 34, October 28, November 26. A stakeholder says: "Only a 24% drop from September — disappointing." Last year's counts (no fix, same system): July 28, August 30, September 33, October 40, November 44 — the autumn caseload surge historically increases incidents by around 30% into November. What is the fairest assessment of the fix?

- A) The stakeholder is right — a 24% drop is modest.
- B) Against the seasonal counterfactual the fix looks strong: last year incidents rose ~33% from September to November (33→44); this year they fell 24% (34→26) despite the same surge — comparing November actual (26) with a seasonal expectation of ~44, the fix is suppressing roughly 40% of expected incidents.
- C) The fix made things worse in September.
- D) Two months of data can support no conclusion.

**Correct answer: B**

**Explanation:** Last year's seasonal climb (33→44) applied to this year's September (34) predicts an expected November around 45; actual is 26, roughly 40% suppression while simultaneously reversing the seasonal direction. This tests verifying a fix against what would have happened, not just what came before — a strong candidate's answer presents both the raw and the counterfactual figures together.

**Question 12 (challenging) — The improvement target arithmetic**

A continual improvement objective: reduce repeat incidents by 40% within two quarters. Baseline quarter: 900 repeat incidents. Three planned fixes address problems currently generating 320, 180, and 120 repeat incidents per quarter respectively, with expected effectiveness of 90%, 75%, and 50%. If all land on schedule and nothing else changes, is the target hit?

- A) Yes — comfortably, with about 483 incidents prevented (54%)
- B) Yes — just: 288 + 135 + 60 = 483 prevented, which is 53.7% against a 40% target of 360
- C) No — only 483 of the 620 addressed incidents are prevented, and 620 was the relevant base
- D) No — effectiveness percentages cannot be combined this way

**Correct answer: B**

**Explanation:** 320×0.90=288; 180×0.75=135; 120×0.50=60; total 483 prevented, against a target of 360 (40% of 900). This tests computing each fix separately and comparing against the correct base (the 900 baseline, not the 620 addressed subset), and a strong candidate's answer shows the working explicitly rather than stopping at a bare verdict.

### Administration tips

- **Score for whether a candidate names the correct base or denominator** before dividing.
- **Watch for whether a candidate combines rates through raw numbers** rather than averaging percentages.
- **Note whether a candidate normalises a before/after comparison** when the population or season has shifted.
- **Note whether a candidate includes user time, not just technician time**, in cost-of-fault arithmetic.
- **Use the improvement-target item (Question 12) to observe whether a candidate applies effectiveness percentages to the correct base.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer with the right arithmetic on the wrong base.**
- **Crediting an average of rates across unequal groups.**
- **Missing when a candidate verifies a fix on raw counts** without normalising for a shifting population or season.
- **Accepting prioritisation by a single column** rather than a combined impact product.
- **Missing when a candidate omits user time from a cost-of-fault calculation.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate extracts meaning from the written material this role runs on: problem management procedures, root cause analysis reports, supplier bulletins, runbook extracts, post-incident reviews, and the emails in which specialists hedge, assert and qualify their findings. The dominant format presents a passage followed by statements to classify as **True**, **False**, or **Cannot say**. Additional items test inference, main-point identification, argument evaluation, and judgement about clear writing.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The governing rule is strict: answer only from the passage, suspending outside operational knowledge even where the passage differs from familiar practice.

Verbal precision is a load-bearing professional skill in both directions for this role. Reading: root cause analysis consumes text — specialists' "consistent with" must not become "confirmed" in retelling. Writing: findings travel into reviews, change boards, and service owner briefings, and must state exactly what the evidence supports, at the right level of certainty.

### How this assessment maps to the role

- **Precise reading of procedures and criteria** maps to **Change management** and **Incident management**.
- **True/False/Cannot say discipline** maps to **Problem management** and **Asset and configuration management**: problem records must not claim more than their sources.
- **Certainty-level tracking** maps to **Problem management**: root cause analysis lives on the gradient between "possible", "likely" and "confirmed".
- **Argument evaluation** maps to **Community collaboration** and **Ownership and initiative**.
- **Runbook and continuity text comprehension** maps to **Continuity management**.
- **Audience-fit writing judgement** maps to **User focus** and **Service focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 4, the candidate reads this passage.

> "A problem record must be raised when trend analysis identifies three or more incidents with a suspected common cause, or when a major incident review recommends one. Problem records may also be raised proactively where analysis indicates a significant risk of future incidents. Each problem record must have a named owner within the problem management team. Root cause must be recorded as 'confirmed' only where testing has demonstrated the causal mechanism; otherwise it must be recorded as 'suspected'. A known error record must be created once a root cause is confirmed and a workaround is documented. Problem records may be closed only when the permanent fix is deployed and post-deployment monitoring has shown no recurrence for one full reporting period."

**Question 1 (easy) — True, False, or Cannot say**

Statement: "A problem record may be raised even when no incident has yet occurred."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The third sentence states it directly: records "may also be raised proactively where analysis indicates a significant risk of future incidents." This tests reading all the triggering clauses before judging, not just the first, matching the discipline's dual reactive/proactive design.

**Question 2 (easy) — True, False, or Cannot say**

Statement: "A known error record requires both a confirmed root cause and a documented workaround."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** "A known error record must be created once a root cause is confirmed and a workaround is documented" — the conjunction makes both conditions jointly necessary. This tests parsing a conjunction at full weight.

**Question 3 (moderate) — True, False, or Cannot say**

Statement: "A problem record whose fix has been deployed, with no recurrence for two weeks, may be closed."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Closure requires "no recurrence for one full reporting period", and the passage never defines the period's length. This tests recognising when a decisive fact is absent — the tempting error is importing an assumed convention rather than checking what the passage actually states.

**Question 4 (moderate) — Inference**

Which is the best inference about this procedure's design?

- A) It is designed to make problem records easy to open and hard to close — pulling risks into management early, and preventing premature declarations of victory.
- B) It assumes most root causes will never be confirmed.
- C) It exists primarily to generate known error records for the service desk.
- D) It shows that proactive problems matter more than reactive ones.

**Correct answer: A**

**Explanation:** Opening has three routes; closing requires a narrow gate (deployed fix plus a clean monitoring period), with confirmed/suspected and mandatory ownership keeping records honest between. This tests identifying what failure mode each rule guards against — premature closure being the one this procedure most visibly armours against.

For Questions 5 to 7, the candidate reads this passage.

> "RCA report extract, P-2214 (intermittent payment submission failures): Analysis of 41 failed submissions shows 39 occurred while the fraud-screening module's response time exceeded 8 seconds. Load testing reproduced the failure pattern: submissions time out when screening exceeds the payment service's 8-second wait limit. We therefore assess the causal mechanism as confirmed for the 39 correlated failures. The remaining 2 failures show no screening delay and remain unexplained; they may share a cause or be unrelated. Screening delays themselves correlate with the module's nightly model refresh overrunning into business hours, but this upstream link is not yet tested. Recommended: raise the wait limit to 15 seconds as an interim mitigation; investigate the model refresh overrun as a suspected upstream cause."

**Question 5 (easy) — True, False, or Cannot say**

Statement: "The report confirms that the nightly model refresh causes the payment submission failures."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The screening-delay → timeout mechanism is confirmed; the refresh → screening-delay link "is not yet tested" and is a "suspected upstream cause". This tests preserving a two-tier certainty structure — flattening "suspected" into "confirmed" can lead an organisation to fix the wrong thing.

**Question 6 (moderate) — True, False, or Cannot say**

Statement: "If the wait limit is raised to 15 seconds, the 39 correlated failures would not have occurred."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage states screening "exceeded 8 seconds" without saying how far — some screenings may have run well past 15 seconds, still timing out at the new limit. This tests recognising that a confirmed mechanism does not automatically quantify a mitigation's coverage — the counterfactual depends on a distribution the passage does not supply.

**Question 7 (moderate) — Main point**

Which sentence best captures the report's overall position?

- A) The payment service is poorly built and should be replaced.
- B) A confirmed timeout mechanism explains almost all the failures; an untested upstream cause and two unexplained failures remain open; mitigate now, investigate next.
- C) The fraud-screening module should be removed from the payment path.
- D) All 41 failures have been fully explained.

**Correct answer: B**

**Explanation:** B reproduces the report's actual shape: what is known, what is not, and what to do. Option D overstates, since two failures are explicitly reserved as unexplained. This tests matching the passage's shape and certainty levels rather than picking the boldest available conclusion.

For Questions 8 to 9, the candidate reads this passage.

> "Supplier bulletin SB-77: A defect in versions 12.0 to 12.3 of the integration gateway can cause message duplication when automatic failover occurs between gateway nodes. Customers running a single-node configuration are not exposed. Version 12.4 resolves the defect. Customers unable to upgrade immediately can prevent duplication by disabling automatic failover, at the cost of manual intervention being required if a node fails. The defect does not cause message loss; duplicated messages carry identical transaction identifiers, allowing downstream deduplication where supported."

**Question 8 (easy) — True, False, or Cannot say**

Statement: "A customer running version 12.2 in a two-node configuration with automatic failover enabled is exposed to the defect."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Version 12.2 falls inside the affected range; two nodes means the single-node exemption does not apply; automatic failover being enabled activates the triggering condition. This tests scope-tracing through a version range, a configuration exemption, and a triggering condition together.

**Question 9 (challenging) — True, False, or Cannot say**

Statement: "For an exposed customer who cannot upgrade, disabling automatic failover eliminates the duplication risk without introducing any new operational risk."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The first half is supported; the second half — "without any new operational risk" — is directly contradicted by the bulletin's stated cost, "manual intervention being required if a node fails". This tests recognising that a compound claim fails on its weakest clause, and that absolute quantifiers ("any") are defeated by a single stated cost.

**Question 10 (moderate) — Clear-writing judgement for a service owner briefing**

A non-technical service owner needs briefing on P-2214 (the payment RCA from the earlier passage). Which opening paragraph is best?

- A) "Analysis of 41 failure events indicates an 8-second synchronous wait-limit breach correlating at 95% with fraud-screening latency excursions, with an untested upstream hypothesis concerning ML model refresh scheduling."
- B) "We now know why almost all the payment failures happen: when the fraud check runs slowly, payments give up waiting and fail. We have confirmed this by testing. We recommend an immediate change that will prevent most failures while we investigate why the fraud check slows down — we suspect an overnight process overrunning, but that is not yet confirmed. Two of the 41 failures had a different, still-unknown cause; we are keeping those open."
- C) "The payment problem is basically solved and the fix is coming."
- D) "There are several complicated interacting factors and the situation is evolving; a fuller technical picture will follow in due course."

**Correct answer: B**

**Explanation:** B delivers what is known, how certain, what happens next, and what remains open, in plain language, while preserving every certainty level from the report. Option A is untranslated jargon; option C distorts by flattening the open question; option D says nothing. This tests translation without distortion — plain language never has to cost precision.

**Question 11 (moderate) — Evaluating an argument in a review**

At a service review, an operations lead argues: "Problem management keeps recommending fixes that need change windows, and change windows keep getting used for feature releases instead. So problem management should get its own dedicated monthly change window, guaranteed, ahead of features." Which is the strongest evaluation?

- A) Fully sound: the premise is true, so the remedy follows.
- B) The grievance is legitimate and worth solving — fixes losing window slots to features is a real prioritisation failure with real recurrence costs — but the specific remedy needs scrutiny rather than automatic adoption: a guaranteed window that sits empty some months wastes scarce release capacity, and "always ahead of features" is as crude a rule as "always behind"; the underlying need is a prioritisation mechanism that weighs a fix's recurrence cost against a feature's value case by case.
- C) Invalid: operations leads have no standing to propose change policy.
- D) Invalid: fixes never deserve priority over features, because features deliver new value.

**Correct answer: B**

**Explanation:** The factual premise is granted and matters; the leap is from "the current allocation fails" to one specific rigid remedy that can itself waste capacity or lose the genuinely urgent contests. This tests validating a grievance, naming a remedy's specific failure modes, and redirecting to the underlying need — rather than accepting or rejecting the proposal wholesale.

**Question 12 (challenging) — Precision when closing the loop**

Drafting the closure summary for P-2214, three months on. The facts: wait limit raised to 15 seconds in week 1; correlated failures fell from ~13/month to 1/month; the model refresh overrun was subsequently confirmed by testing as the upstream cause and fixed in week 6; failures have been zero for the last full reporting period; the original 2 unexplained failures never recurred and remain unexplained. Which closure sentence is most accurate?

- A) "All causes were confirmed and fixed, and all failures have been eliminated."
- B) "Root cause (screening delays caused by model refresh overrun) confirmed and permanently fixed; interim mitigation (raised wait limit) remains in place; zero recurrence for one full reporting period, meeting closure criteria. Two early failures from the original 41 were never explained and never recurred; they are noted in the record should the pattern reappear."
- C) "The problem appears resolved, though uncertainty remains and further monitoring is advised indefinitely."
- D) "Closed: fix deployed."

**Correct answer: B**

**Explanation:** B states the confirmed causal chain (now including the upstream link, graduated from suspected to confirmed), the mitigation's current status, the closure evidence, and the honest residue of two unexplained failures. Option A overclaims "all causes"; option C hedges beyond what the evidence supports; option D is evidentially empty. This tests writing a closure record where every claim carries its earned certainty and every loose end is named.

### Administration tips

- **Score for whether a candidate splits a compound statement into its clauses** before judging True or False.
- **Watch for whether a candidate keeps an author's stated certainty level** ("confirmed" versus "suspected") when passing information on.
- **Note whether a candidate traces scope (version range, exemption, trigger) systematically** before judging a bulletin statement.
- **Note whether a candidate's summary or closure record states every claim at its earned strength**, with residue explicitly named.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from operational habit rather than the passage.**
- **Missing when a candidate flattens a certainty gradient** in either direction.
- **Crediting an answer that misses the weak clause** in a compound claim.
- **Accepting an inference that requires a quantity, distribution, or definition the passage never gives.**
- **Missing when a candidate judges an argument by its premise alone**, without evaluating the leap to its proposed remedy.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. Formats include most-effective, most-and-least-effective, full ranking, and independent rating.

The typical format is 12 to 25 scenarios in 25 to 40 minutes. For a problem manager, scenarios cluster around the role's true difficulty — which is rarely technical. Coordinating investigations performed by teams not managed by the candidate, in organisations that reward firefighting over prevention; working closely with major incident managers whose clock runs in minutes while the investigation's runs in weeks; publishing findings that implicate decisions, processes and sometimes named teams; keeping prevention funded against the permanent competition of the new and urgent.

### How this assessment maps to the role

- **Coordination dilemmas** map to **Problem management** and **Community collaboration**.
- **Evidence integrity dilemmas** map to **Problem management** and **Ownership and initiative**.
- **Interface-with-incident dilemmas** map to **Incident management** and the duty to work closely with major incident managers.
- **Prevention advocacy dilemmas** map to **Problem management**, **Change management** and **Availability and capacity management**.
- **Blame and culture dilemmas** map to **Community collaboration** and **User focus**.
- **Runbook and continuity dilemmas** map to **Continuity management**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The service desk's shortcut**

Service desk staff, under pressure to hit handling-time targets, have started closing repeat incidents without linking them to their problem records — the linking screen "takes too long". Incident-to-problem linkage is the evidence base for trend analysis and fix justifications. What is the most effective response?

- A) Email the service desk manager citing the linking procedure and requesting compliance.
- B) Talk to the desk team and their manager: explain specifically what the links buy (fix prioritisation for the very faults flooding their queues), acknowledge the time cost, and jointly pursue both compliance and a fix for the real blocker — a faster linking workflow.
- C) Have the analysts re-link incidents retrospectively each week, leaving the desk out of it.
- D) Report the non-compliance to service management leadership so targets are adjusted.

**Correct answer: B**

**Explanation:** The desk is responding rationally to a target that punishes an invisible-benefit step. Option B addresses both the motivational gap and the mechanical gap. Option A restates a rule people already know; option C absorbs the cost forever; option D escalates before engaging. This tests fixing the system that produces a behaviour, with the people in it.

**Question 2 (easy) — Evidence versus restoration, live**

A recurring fault has just recurred, and the incident manager is preparing to restart the failing service, which will destroy the in-memory state an investigation has waited weeks to capture. Restoration is genuinely urgent: a citizen-facing service is degraded. Capturing state takes an estimated ten minutes. What is the most effective response?

- A) Insist the restart wait for a full diagnostic capture, however long it takes.
- B) Say nothing — restoration always outranks investigation, and it is the incident manager's call.
- C) Tell the incident manager what a ten-minute capture would buy, ask for the ten minutes, and accept their call if the answer is no — then pursue alternative evidence and agree a pre-authorised capture plan for the next recurrence.
- D) Begin the capture without raising it, since it only takes ten minutes.

**Correct answer: C**

**Explanation:** Restoration authority belongs to the incident manager, but commanding well requires knowing the value of each option — only the problem manager knows what the capture is worth. Option A and D invert or bypass authority; option B abandons weeks of investigation silently. This tests putting the trade-off on the table fast, respecting the call, and systematising the evidence problem for next time.

**Question 3 (easy) — The analyst's premature certainty**

An analyst presenting to stakeholders tomorrow shows an RCA conclusion: "Root cause confirmed: the memory leak in the session module." The evidence is a strong correlation plus one specialist's agreement, but no test has demonstrated the mechanism, and an alternative explanation (connection-pool exhaustion) has not been ruled out. What is the most effective response?

- A) Let the presentation proceed — the analyst is probably right, and confidence builds credibility.
- B) Take over the analysis and present it in the analyst's place.
- C) Coach through questions: what would distinguish the leak from pool exhaustion? What test would demonstrate the mechanism? Then have the analyst present tomorrow with the honest status — "leading suspected cause, confirmation test planned".
- D) Cancel the presentation until root cause is properly confirmed.

**Correct answer: C**

**Explanation:** "Confirmed" means a demonstrated mechanism; correlation plus agreement is "suspected", however probable. Coaching through questions teaches the distinction permanently, while overruling teaches compliance and taking over spends confidence for nothing. Option D overcorrects — "suspected cause, confirmation test planned" is presentable. This tests protecting the record's integrity and the analyst's development at once.

**Question 4 (moderate) — The fix that keeps slipping**

The permanent fix for P-330 — the costliest recurring problem, ~£8,000/month in user impact — has been bumped from three consecutive release windows by feature work, each time by a reasonable-sounding individual decision. The next window is in three weeks. What is the most effective response?

- A) Accept the pattern — releases are the delivery teams' domain, and the workaround is holding.
- B) Escalate to the service owner with the accumulated arithmetic: three slips × £8,000/month of ongoing impact, the recurrence risk profile, and a request that the fix be committed to the next window — and propose that fix-versus-feature displacement decisions henceforth weigh the recurring cost explicitly.
- C) Demand the release calendar always prioritise fixes over features.
- D) Ask the analysts to quietly bundle the fix into an unrelated approved change to bypass the queue.

**Correct answer: B**

**Explanation:** The real finding is a decision pattern whose cumulative cost no one has been shown, because each slip was seen in isolation. Option B assembles the evidence, escalates to the accountable owner, and proposes a process fix. Option C is as blind a rule as its opposite; option D corrupts change control. This tests systemic advocacy backed by arithmetic, with a process fix, not just a one-off plea.

**Question 5 (moderate) — The review that wants a name**

At a post-incident review, a director interrupts systemic findings: "This is the third database outage this year. Someone is responsible. Who?" The truthful answer is distributed: one engineer made a defensible configuration choice under ambiguous documentation, a monitoring gap hid the consequence for weeks, and the team's capacity plan was cut two quarters ago. What is the most effective response?

- A) Name the engineer — their change was the proximate trigger, and the director deserves a direct answer.
- B) Say responsibility cannot be assigned and move the agenda on.
- C) Answer the underlying question directly: "Accountability sits with the system we run, and I can show you exactly where it failed" — then walk through the three findings, each with its owner and fix date, and offer the director the tracking role: these three actions, reviewed at this table, are what prevents outage number four.
- D) Privately give the director the engineer's name after the review to keep the meeting constructive.

**Correct answer: C**

**Explanation:** "Who is responsible?" is usually "will someone make sure this stops?" — a demand C satisfies better than a name would. Option A teaches every engineer present to hide choices from future reviews. Option B looks evasive. Option D is A with a delay and no record. This tests translating a demand for a scapegoat into concrete, owned, dated system fixes.

**Question 6 (moderate) — The runbook test that failed quietly**

A continuity test of a failover runbook technically "passed" — the service failed over — but only because the engineer running the test spotted and manually corrected an outdated step mid-execution. The test report currently reads "Pass". The service owner reads these reports. What is the most effective action?

- A) Leave "Pass" — the failover worked, which is what the test verifies.
- B) Record the result honestly as "Pass with critical finding": the runbook as written would have failed without expert improvisation; fix the outdated step now, check the rest of the runbook (and sibling runbooks) for the same class of staleness, and raise the systemic question — why did two migrations not trigger runbook updates?
- C) Record "Fail" and schedule a full retest before any further reporting.
- D) Quietly fix the outdated step and leave the report as "Pass", since the defect is now gone.

**Correct answer: B**

**Explanation:** A test verifies the runbook, not "the service failing over with our best engineer improvising". Option B keeps both truths (the failover succeeded, the artefact is defective) and treats the stale step as one instance of a systemic problem. Options A and D certify a document that fails without improvisation. Option C is disproportionate given a precise finding. This tests reporting what the evidence means, not what the box allows.

**Question 7 (moderate) — The specialist team that stopped replying**

The network team owns the key action on P-315 (recurring branch-office connectivity drops, 30 incidents/month). After an enthusiastic start, they have gone quiet: three chasers over five weeks, no substantive reply. Informally: their lead was redeployed to a datacentre migration and the team is underwater. What is the most effective response?

- A) Keep chasing weekly and log the non-response in the problem record until they re-engage.
- B) Escalate to the network team's head with the five-week silence documented, requesting intervention.
- C) Talk to the network team's management with the situation reframed: acknowledge the migration pressure, quantify what P-315 costs per month it waits, and negotiate options — a smaller scoped action, a named deputy, seconded legwork under their guidance, or an agreed restart date after the migration — then record whatever is agreed with a review date.
- D) Reassign the investigation to the problem team's own analysts, who can learn networking as they go.

**Correct answer: C**

**Explanation:** The informal intelligence changes the problem from neglect to a genuine capacity collision to be managed. Option C brings cost arithmetic, flexible options, and formal, dated commitment. Option A builds a grievance file, not a fix; option B skips the conversation; option D pretends expertise is fungible. This tests negotiating through another team's reality rather than escalating or absorbing the work.

**Question 8 (challenging) — Most and least effective: the pattern across silos**

A cross-service trend review surfaces something unclaimed: authentication-related incidents are rising slowly across four services owned by four different teams — each team's share is small enough that none has flagged it, but the combined curve is unmistakable, and all four depend on the same identity platform, whose team insists their metrics are green. Consider four actions:

1. Open a problem record for the combined pattern, present the cross-service data to the identity platform team as a question ("what could produce this pattern while your metrics stay green?"), and convene the four service teams to pool their incident details.
2. Send each of the four teams their own slice of the data and let each decide independently whether to investigate.
3. Escalate immediately to leadership that the identity platform is failing and its team is in denial.
4. Add the combined curve to the monthly report and wait a quarter for a stronger signal before acting.

Which pairing is correct?

- A) Most effective: 1; least effective: 4
- B) Most effective: 1; least effective: 3
- C) Most effective: 2; least effective: 3
- D) Most effective: 3; least effective: 2

**Correct answer: B**

**Explanation:** Action 1 formalises the pattern that only exists in the combined view, and approaches the accountable team as an evidence-bearing question. Action 4 is passive but harmless. Action 2 dissolves the finding by reproducing the invisibility that hid it. Action 3 converts unexplained correlation into an accusation before the platform team has seen the data, poisoning a relationship the investigation most needs. This tests synthesising a cross-silo signal and investigating it as a question, never launching it as a verdict.

**Question 9 (challenging) — A candidate's own finding was wrong**

Six weeks ago, P-290's root cause was presented to the service owner as confirmed — a supplier defect, backed by the supplier's own acknowledgement — and the supplier's patch was deployed at some expense. The incidents continued, and an analyst has now traced the true cause: a configuration value the problem team itself recommended two years ago, correct then, wrong since a subsequent capacity upgrade. The supplier defect was real but dormant. What is the most effective response?

- A) Present the configuration fix as "phase two" of the resolution, leaving the original finding undisturbed — the patch had value anyway.
- B) Tell the service owner directly: the confirmed-cause finding was wrong, here is what the evidence actually showed and how it was misread (the supplier's acknowledgement anchored the analysis), here is the true cause — including that it originated in the team's own historical recommendation — the corrected fix, and the change to the confirmation standard (mechanism demonstration, not supplier say-so) that prevents this class of error.
- C) Fix the configuration quietly; if the incidents stop, the record can be tidied later.
- D) Ask the analyst to double- and triple-check before anything is said, and keep checking until certainty is absolute.

**Correct answer: B**

**Explanation:** Every element of this scenario raises the price of honesty, which is exactly why the keyed answer pays it in full: the correction, the misreading mechanism, the uncomfortable provenance, the fix, and a process improvement. Option A is curated truth functioning as deception. Option C hopes silence plus success equals absolution. Option D dresses delay as rigour. This tests correction at full speed and full depth on the candidate's own error, with a system improvement that outlives the mistake.

**Question 10 (challenging) — The health check that found the candidate**

A quarterly health check across the teams feeding problem management returns a hard theme, from multiple teams: "Problem reviews feel like interrogations — we get grilled on our incidents, then the findings blame our processes. Teams have started sharing less." The reviews are, in the problem manager's view, rigorous and non-personal; recurrence rates have improved under them. What is the most effective response?

- A) Note that the feedback conflicts with the results — recurrence is down — and continue with the current review format.
- B) Soften the reviews: fewer probing questions, findings phrased to avoid mentioning any team's processes.
- C) Treat the feedback as data about a real emerging problem: teams sharing less will starve future investigations regardless of the current format's technical merits. Go to the teams, understand which moments feel like interrogation, and redesign the experience without lowering the evidential standard — then re-measure at the next health check.
- D) Add an anonymous submission route so teams can feed evidence into reviews without attending them.

**Correct answer: C**

**Explanation:** Multiple independent sources reporting the same pattern is a trend, and it threatens the asset the whole function runs on — voluntary information flow. Option C investigates it exactly as any other problem: locate the mechanism, fix the system, re-measure. Option A commits a delayed-variable error — current results reflect past cooperation, not future. Option B dismantles rigour. Option D routes around the relationship rather than repairing it. This tests applying the discipline's own method to a finding about the discipline itself.

**Question 11 (challenging) — The prevention budget showdown**

Annual planning: three preventive investments compete for one year's funding. (1) £40,000 to fix the top recurring problem — saves a measured £6,000/month, starting immediately. (2) £25,000 for automated configuration-drift detection — addresses a class of cause behind roughly a quarter of last year's problems, savings real but hard to quantify precisely. (3) £60,000 of resilience work on an ageing platform that has not yet failed badly, but whose failure mode would be a multi-day outage of casework services. A recommendation and reasoning are requested. What is the most effective answer?

- A) Recommend option 1 alone — it has the clearest arithmetic, and credibility comes from measurable wins.
- B) Recommend option 3 alone — the catastrophic risk dwarfs the other numbers.
- C) Present all three with their distinct value types — measured return (1), class-level prevention with estimated range (2), tail-risk reduction with impact-scenario costing (3) — recommend option 1 for this year's funding on strength of evidence and immediacy, and propose concrete routes for the other two: option 2 as a candidate for in-year underspend, and option 3 costed into next year's planning with a monitoring trigger that would escalate it immediately if risk signals appear.
- D) Decline to rank them — all three are justified, and choosing is the service owner's job.

**Correct answer: C**

**Explanation:** Option C is honest about the different value types, makes a real recommendation with reasoning, and routes the unfunded options rather than dropping them — the monitoring trigger for option 3 in particular holds the tail risk accountable to reality rather than to budget cycles. Option D abdicates the analysis being asked for. This tests demonstrating trustworthy investment advice: typed evidence, one clear call, no risk left unwatched.

**Question 12 (challenging) — Ranking: the morning everything connects**

08:50 Monday. Four items land together: (1) the major incident manager calls — a major is running on the payments service, and she asks whether problem management knows anything relevant: yes — P-341's investigation found the payments database's failover replica has silently stopped syncing, unfixed as of Friday; (2) a weekend trend alert shows a novel error signature rising fast across two services — small counts, doubling daily for four days; (3) a service owner emails, copying a director, demanding this morning's promised update on P-322 (a chronic, currently quiet problem); (4) the change board convenes at 10:00 and will finalise next month's release content — two fixes sit at agenda items 8 and 9, historically the slots that get squeezed out. Rank the order in which these should be addressed:

- A) 3, 4, 1, 2 — deadline order as the requests arrived
- B) 1, 2, 4, 3 — the major first (the replica finding may change the incident commander's recovery options right now), the doubling signature next (task the analyst immediately), then change-board preparation (a message to the chair before 10:00), then the P-322 update (a brief honest holding note buys the morning)
- C) 2, 1, 3, 4 — emerging problems are the role's core, then the major, then the human requests
- D) 4, 3, 1, 2 — governance and senior visibility first, operations second

**Correct answer: B**

**Explanation:** Item 1 is decisive and instant: a stale failover replica could be the difference between a clean recovery and a data-loss catastrophe during a payments major. Item 2's window is measured in days, not minutes, but still needs today's tasking. Item 4 has a hard 10:00 deadline and a known failure mode (squeeze) catchable before the meeting. Item 3 is chronic and quiet, and a brief honest holding reply serves it well. This tests ranking by minutes-critical knowledge transfer, then days-critical investigation launch, then hard governance deadlines, then senior communication.

### Administration tips

- **Score for whether a candidate's answer increases the honesty, speed, or completeness of information moving through the organisation**, rather than restricting it.
- **Watch for whether a candidate rehearses a correction script** — what was wrong, how it was misread, the fix, the standard change — rather than curating or delaying an admission.
- **Note whether a candidate prices delay** (cost per month of waiting) when advocating for a slipped fix or a quiet specialist team.
- **Note whether a candidate uses a collaborative step before an evidence-bearing step before an escalation step**, in that order.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that escalates before engaging the accountable team directly.**
- **Crediting an answer that protects a finding instead of correcting it** — "phase two" framings, quiet fixes, tidied records.
- **Missing when a candidate accepts a workaround as an acceptable end-state** rather than keeping the permanent fix moving.
- **Accepting an answer that blames an individual for a system-shaped finding.**
- **Missing when a candidate lets a loud or senior-copied request outrank a faster-moving or more urgent one** in a ranking item.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a problem manager: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested reasoning with incident feeds and causal chains: grouping evidence by causal plausibility, distinguishing root cause from contributing factor, verifying fixes against mechanism rather than symptom silence, and naming every contributing cause in a multi-cause failure rather than a single scapegoat. The numeric section tested the arithmetic that makes the case for and against fixes: correct denominators, weighted combination, before/after verification normalised against a shifting population or season, and cost-of-fault arithmetic that includes user time. The verbal section tested RCA reports, procedures, and bulletins read with certainty preserved at every step, and writing that translates without distorting. The situational judgement section tested the dilemmas that define the role: the honest correction of a candidate's own wrong finding, the review that resists naming a scapegoat, the specialist team gone quiet, and the health check that turned its findings on the reviewer.

The thread running through all four sections is evidence discipline, honest arithmetic, calibrated communication, and influence without authority.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to how the candidate would actually coordinate an investigation, advocate for prevention funding, and handle a finding that implicates their own past advice.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and strengthen the system that will face the situation's successor — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
