# Lead Infrastructure Operations Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead infrastructure operations engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they draw on the artefacts a lead infrastructure operations engineer genuinely handles — team workload and performance data, supplier service reports and contract schedules, release and test plans, architectural options papers, high-impact change requests, budgets and capability plans — and the judgements genuinely made: balancing service obligations against team sustainability, holding suppliers to contractual and regulatory requirements, deciding which changes proceed and which wait, and building the capability that lets a team deliver services as required.

Leadership in operations is a reasoning discipline as much as a people discipline. The role manages the operational support of IT solutions and services — reading service data accurately and acting on what it actually says. It manages the workload, performance and development of a team of IT operations specialists — allocating finite capacity against competing demands, spotting the trends in team data that precede burnout or backlog, and making development decisions that compound over years. It manages third-party provision of IT operations services — precise reading of contracts, service credits, and supplier reports, and the numeracy to challenge a supplier's own figures. And it manages the provision of expertise to programmes and projects, and the development of architectural solutions across the service life cycle — evaluating options papers, test plans, and impact assessments with the rigour of a sign-off that carries weight.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. For a lead infrastructure operations engineer, the scenarios centre on the reasoning of operational leadership: reading patterns in team and service data, tracing the consequences of high-impact changes through technical and organisational dependencies, spotting the inconsistency in a supplier report or a release plan, and sequencing competing work under interacting constraints of capacity, risk, and obligation.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; adaptive difficulty is common, and employers typically see accuracy and speed separately.

At lead level, cognitive assessment measures something this role exercises constantly but rarely names: the ability to reason correctly about systems no longer touched directly. Engineers run the tools; the lead runs the picture. That means the raw material is largely second-hand — dashboards, reports, escalation summaries, supplier figures — and value lies in reading it critically: noticing the trend beneath the noise, the claim that does not follow from its evidence, the dependency nobody mapped, the queue that is quietly becoming a crisis.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill (initiating and monitoring actions to investigate patterns and trends) and to the **Ownership and topic** duty to be proactive in searching for potential problems — reading team, service, and supplier data for the signal that precedes the incident.
- **Logical deduction** maps to the **Incident management** skill of leading investigation and resolution — directing hypothesis-driven diagnosis — and to the **Change management** skill of managing high impact, complex change requests, where consequences must be reasoned out before they occur.
- **Error checking** maps to the **Asset and configuration management** skill (secure configuration, accurate information), the **Technical specialism** duty to set standards for definition, security and integrity of objects and ensure conformity, and the **Testing** skill of providing authoritative advice on test planning — authority rests on catching what others miss.
- **Prioritisation** maps to the duty to manage the workload, performance and development of a team — allocating scarce specialist capacity — and to the **Availability and capacity management** responsibility for keeping service components against business needs and KPIs.
- **Applied problem solving** maps to the duty to manage the development of architectural solutions for IT operations throughout the service life cycle, the **Service focus** skill of establishing coherent frameworks that work, and the **Coding and scripting** capability to interact with, read and write code when the situation demands direct verification.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in team workload data**

A team's weekly ticket closure and intake figures over six weeks:

| Week | Intake | Closures |
|---|---|---|
| 1 | 110 | 112 |
| 2 | 115 | 114 |
| 3 | 118 | 113 |
| 4 | 124 | 110 |
| 5 | 129 | 106 |
| 6 | 133 | 101 |

What pattern most warrants attention as team lead?

- A) Closures are stable, so the team is performing consistently.
- B) Intake is rising while closures are falling — the gap is widening each week, so backlog is accelerating and the team's capacity is diverging from demand.
- C) Week 1 shows closures exceeding intake, which suggests over-capacity.
- D) The figures are within normal variation and need no action.

**Correct answer: B**

**Explanation:** Compute the weekly balance (closures minus intake): +2, −1, −5, −14, −23, −32. The gap is widening at an increasing rate — roughly 73 tickets of net backlog have accumulated over five weeks, most of it recent. Option A misreads falling closures as stability; option C over-interprets a single balanced week; option D ignores a second-difference trend that will not self-correct. This tests decomposing the trend before reacting to it — falling closures against rising intake suggests demand change, capacity change, or both, and a strong candidate's answer notes that managing team workload starts with reading workload data as trends and second differences, not snapshots.

**Question 2 (easy) — Deduction from a release policy**

A release policy states: "A release containing database schema changes must be deployed with a tested rollback script, and must not share a release window with any other schema-changing release." Release R1 contains schema changes and is scheduled for Saturday's window. Release R2 is scheduled for the same window. Which conclusion must be true?

- A) R2 does not contain schema changes, or the policy is being breached.
- B) R2 does not contain schema changes.
- C) R2 has a tested rollback script.
- D) The Saturday window must be cancelled.

**Correct answer: A**

**Explanation:** The policy forbids two schema-changing releases sharing a window. R1 changes schemas and occupies Saturday. If R2 also changes schemas, the policy is breached; if not, the schedule is compliant. The facts given do not say which, so B asserts more than is known, C attaches R1's obligation to R2 without cause, and D invents an unrequired remedy. Only the disjunction in A must be true. This tests the reasoning shape of release governance: converting policy plus partial facts into exactly the right question ("does R2 touch schemas?") rather than a premature conclusion.

**Question 3 (easy) — Error checking a supplier service report**

A storage supplier's monthly report states: "Availability: 99.92% (21 minutes downtime). Incidents: 2 (both Severity B). All contractual targets met. Note: the 14th's four-hour degradation of the replication service is excluded from availability figures as it affected a secondary function." The contract defines availability across all contracted services, including replication, with no exclusion clause for secondary functions. What is the report's key defect?

- A) The downtime arithmetic: 99.92% of a month is not 21 minutes.
- B) The supplier has unilaterally excluded a four-hour degradation from availability, but the contract contains no such exclusion — so the availability figure and possibly the "targets met" claim do not follow from the contract's own definition.
- C) Two incidents in a month is above acceptable norms.
- D) Severity B is the wrong classification for a degradation.

**Correct answer: B**

**Explanation:** Check the claims against their governing document. The headline figures depend on an exclusion the contract does not contain. Including the four hours would move measured downtime toward 261 minutes, pulling availability below 99.4% and likely breaching the claimed-met target. Option A is a decoy: 0.08% of a 30-day month is about 34.6 minutes, arithmetically consistent with a slightly better figure — a minor discrepancy, not the structural defect. Options C and D substitute judgement for contractual terms without basis. This tests managing third-party provision through exactly this reading: suppliers report their own performance, definitional drift flatters the numbers, and reconciling reports against contract definitions is the control.

**Question 4 (easy) — Prioritising a candidate's own attention**

It is Monday 09:00. Four items compete for attention as lead:

1. A P1 is running: payroll interface down, the most experienced engineer leading it competently; last update 15 minutes ago, next expected in 15.
2. The director's office asks for a briefing note on Friday's supplier outage by 12:00 — the facts are known.
3. A junior engineer is scheduled for their fortnightly development one-to-one at 09:30.
4. The change board meets at 10:30 and two high-impact change requests need final review before submission.

What is the most defensible allocation of the next 90 minutes?

- A) Take over the P1 personally — nothing else matters during a P1.
- B) Confirm the P1 lead has what they need and hold the update cadence; write the director's note; review the change requests before 10:30; move the one-to-one to later today with an apology and a firm new time.
- C) Hold the one-to-one as scheduled — development commitments must never move — then do the note and reviews afterwards.
- D) Delegate the director's note to the engineer leading the P1, freeing time for the reviews and the one-to-one.

**Correct answer: B**

**Explanation:** The P1 tests discipline in the opposite direction from instinct: a competent engineer is leading it well on a healthy cadence, so the leadership action is support and monitoring, not seizure. Option B sequences the genuinely time-bound items: the director's note (hard 12:00 deadline), the change reviews (hard 10:30 gate), and the P1 cadence throughout. The one-to-one moves with an apology and a firm rebooking, honouring the commitment while acknowledging two hard deadlines and a P1 outrank a movable meeting. Option C treats the development commitment as immovable at the cost of two hard deadlines; option D loads administrative work onto the person running a P1. This tests distinguishing what only the lead can do (governance, upward comms, reviews carrying their authority) from what the team is already doing well.

**Question 5 (moderate) — Deduction through an architectural dependency**

An options paper proposes consolidating three services' file storage onto a single new platform. Facts: (i) Service A requires data residency in UK data centres; (ii) Service B's contract with its business owner guarantees restoration of any file within 4 hours; (iii) Service C generates 80% of total I/O load; (iv) the proposed platform is UK-hosted, restores at a fixed rate that would take up to 9 hours for Service B's largest data set, and is sized for the combined average load with 20% headroom. Which service's requirement is the paper's design demonstrably failing to meet?

- A) Service A — residency.
- B) Service B — the 4-hour restoration guarantee cannot be met at the platform's restore rate for its largest data set.
- C) Service C — load.
- D) None — the design meets all stated requirements.

**Correct answer: B**

**Explanation:** Test each requirement against the design facts. Service A: UK-hosted platform meets the residency requirement. Service C: sized for combined average load with 20% headroom — whether that suffices for peaks is a fair question, but not a demonstrated failure. Service B: the contract guarantees restoration within 4 hours; the platform's own restore rate implies up to 9 hours for B's largest data set — a stated fact directly contradicting a stated guarantee. This tests the architectural review discipline that requirements are met by mechanisms, not intentions, and finding the requirement whose mechanism the design does not contain — separating "demonstrably fails" from "warrants a question" in the same review.

**Question 6 (moderate) — Pattern recognition across incident and change data**

Preparing a quarterly review, a team's 40 major incidents are cross-tabulated against the preceding 72 hours:

- 24 incidents followed a change implemented by the team (the team implements ~30 changes/week).
- 10 followed a supplier-implemented change (suppliers implement ~5 changes/week).
- 6 followed no recorded change.

A colleague concludes: "Our own changes cause most major incidents — team change quality is the priority problem." What is the sounder reading?

- A) The colleague is right: 24 of 40 incidents followed team changes.
- B) Normalise by change volume: team changes preceded 24 incidents across ~360 changes in the quarter (~6.7%), supplier changes preceded 10 across ~60 (~16.7%) — a supplier change is roughly 2.5 times more likely to precede a major incident, so supplier change quality is the larger per-change risk, though team changes' volume still makes them the larger absolute contributor.
- C) The 6 no-change incidents are the real story.
- D) Post-change incidents cannot be attributed, so the data says nothing.

**Correct answer: B**

**Explanation:** The colleague's reading is a base-rate error: team changes dominate the incident count because they dominate the change count. Normalising gives the per-change risk: team ≈ 360 changes, 24÷360 = 6.7%; supplier ≈ 60 changes, 10÷60 = 16.7%; ratio ≈ 2.5×. This tests holding both truths at once: per-change risk points improvement effort at supplier change practice, while absolute counts mean team change quality still matters for total incident load. Option C elevates a minority segment without argument. Option D retreats from usable evidence prematurely. This tests being proactive in searching for potential problems by doing this arithmetic before the narrative hardens.

**Question 7 (moderate) — Error checking a test plan awaiting sign-off**

An acceptance test plan for a new backup platform is under review before sign-off. The requirement set includes: full restore of the largest production data set within 8 hours; verified integrity of restored data; restore capability at the secondary site if the primary site is lost. The plan's test cases: (1) full restore of the largest production data set at the primary site, timed against the 8-hour target; (2) checksum verification of the restored data set against source; (3) documentation review of the secondary site's configuration to confirm it matches primary. Which requirement lacks a genuine test?

- A) The 8-hour restore — a single timed run is not statistically valid.
- B) Integrity — checksums are insufficient.
- C) Secondary-site restore — a documentation review confirms configuration on paper, but no test case actually performs a restore at the secondary site, so the capability that matters when the primary is lost is never exercised.
- D) None — all three requirements are covered.

**Correct answer: C**

**Explanation:** Map requirements to test cases and grade the evidence each produces. Case 1 exercises the actual restore under the actual time target. Case 2 verifies integrity mechanically against source. Case 3 reads about the secondary site rather than testing it — configuration parity on paper does not demonstrate restore capability, since site-loss restores fail for reasons documentation reviews cannot see. This tests providing authoritative advice on test planning by catching the substitution of documentation for demonstration on exactly the requirement that exists for the worst day — a pattern worth naming, since the disaster-path test is always the expensive, disruptive one, and always the one quietly downgraded to a paperwork check.

**Question 8 (moderate) — Reading code as a lead**

A junior engineer asks for a sanity-check on their cleanup script before it runs against the production file store tonight. The core logic reads:

```
for dir in $(ls /data/archive/); do
  age=$(get_age_days "/data/archive/$dir")
  if [ "$age" -gt 90 ]; then
    rm -rf "/data/archive/$dir"
  fi
done
echo "Cleanup complete"
```

The intent: delete archive directories older than 90 days. Which observation is the most important one to raise?

- A) The script echoes completion without logging which directories it deleted — no audit trail.
- B) The script has no dry-run mode, no logging of deletions, and destructive `rm -rf` runs on the first execution against production with no record of what it removed; it should first run in a list-only mode, log every candidate with its age, and only delete after the list is verified — and the deletion pass should itself log each removal.
- C) Using `ls` in a loop is unfashionable; `find` would be more idiomatic.
- D) The completion message should include a timestamp.

**Correct answer: B**

**Explanation:** All four observations have some merit; the question asks which matters most, as a real review would. Option B names the operational risk category: an irreversible bulk-delete, first executed against production, with no verification pass and no record. The professional pattern for destructive automation is invariant: list first, verify the list, then act, logging every action. Option A is a true subset of B; option C gestures at a real hazard (word-splitting in the `ls` loop) but frames it as style; option D is trivia. This tests interacting with and reading code critically, and a strong candidate's answer identifies this as a mentoring moment too — the feedback that matters is the category ("destructive operations earn a dry-run and an audit trail, always"), not the instance.

**Question 9 (moderate) — Prioritisation of engineering investment**

A team can staff one significant improvement next quarter. Four candidates: (1) automate the certificate renewal process: prevents the class of outage that caused two P1s last year; ~3 weeks' effort. (2) migrate monitoring to the new corporate platform: mandated within 18 months; ~10 weeks' effort; no service risk from waiting two quarters. (3) refresh the team's runbook library: improves mean time to resolve across many incident types; ~6 weeks' effort; benefits diffuse but broad. (4) build a real-time dashboard for the director: requested last week; ~4 weeks' effort; the underlying data is already available weekly. Which allocation is most defensible?

- A) Item 4 — director requests carry implicit priority.
- B) Item 2 — mandates always come first.
- C) Item 1 — highest risk-reduction per week of effort, addressing a proven P1-generating failure class, with capacity left over toward item 3.
- D) Item 3 — broad benefits beat narrow ones.

**Correct answer: C**

**Explanation:** Evaluate on risk-reduction and value per unit of scarce capacity. Item 1 removes a demonstrated P1 generator for three weeks' work — the highest return per week. Item 2 is mandatory but not urgent: an 18-month deadline with no waiting risk makes next quarter's start a scheduling decision, not a priority one. Item 3 could partially follow item 1 in the same quarter. Item 4 fails the value test: the data exists weekly, and four weeks of specialist capacity for presentational immediacy is poor conversion. This tests portfolio management: per-week returns, sequencing, and the political skill of declining gracefully rather than either silent compliance or flat refusal.

**Question 10 (hard) — Leading a diagnosis without personally performing it**

A major incident is 40 minutes in: the document platform is failing intermittently for all users. Two engineers hold competing hypotheses. Engineer A: "It's the new load balancer firmware from Tuesday — the failure pattern matches connection resets; I want to roll it back now." Engineer B: "Resets started before Tuesday at low volume — I think it's the storage array's controller, and rollback will waste forty minutes and prove nothing." Both are credible. Rollback takes 40 minutes and is low-risk; a controller failover test takes 10 minutes and is low-risk; the two actions are independent. As incident lead, what is the strongest direction?

- A) Order the rollback — Engineer A is more senior, and firmware is the more common culprit.
- B) Run the 10-minute controller failover test first: it is quick, low-risk, and discriminating — if failures stop, B is confirmed; if they continue, A's rollback proceeds with B's hypothesis largely eliminated — and have Engineer B pull the pre-Tuesday reset data meanwhile, since that fact, if verified, materially weakens the firmware theory.
- C) Run both actions simultaneously to save time.
- D) Pause all action until the pre-Tuesday reset claim is fully verified.

**Correct answer: B**

**Explanation:** Leading the investigation and resolution of incidents means choosing the sequence of actions that buys the most diagnostic information per minute of user impact. Option B applies test-ordering logic: the failover test is faster, equally low-risk, and cleanly discriminating. Ordering by cost-to-inform, not by seniority — option A's tiebreaker also ignores the disconfirming evidence a lead should weight heavily precisely because it is inconvenient to the leading theory. Option C destroys the experiment, since recovery with both actions in flight confirms neither hypothesis. Option D inverts the balance. This tests whether the direction visibly rewards evidence over rank.

**Question 11 (hard) — Multi-constraint planning of a migration programme**

Four migration waves (W1–W4) must be sequenced over four months (Jan–Apr), one wave per month. Constraints: (i) W3 contains the finance systems and must not run in Jan or Apr (year-end freeze months); (ii) W2 must precede W4, because W4 reuses W2's network configuration; (iii) the supplier's specialist team, required for W1, is only available in Feb and Mar; (iv) W3 must immediately follow W2, in the next calendar month, because W3 validates W2's shared storage layer while the supplier warranty window is open. Which sequence satisfies all constraints?

- A) W2 Jan, W3 Feb, W1 Mar, W4 Apr
- B) W1 Feb, W2 Jan, W3 Mar, W4 Apr
- C) W2 Jan, W1 Feb, W3 Mar, W4 Apr
- D) W1 Jan, W2 Feb, W3 Mar, W4 Apr

**Correct answer: A**

**Explanation:** Check each option mechanically. Option D: W1 in Jan violates (iii). Option B: W3 in Mar must immediately follow W2, but W2 is in Jan with W1's Feb between — violates (iv). Option C: same failure. Option A: W2 Jan, W3 Feb — consecutive (iv); W3 avoids Jan and Apr (i); W1 in Mar sits inside the supplier window (iii); W2 precedes W4 (ii). This tests starting from the tightest coupling — constraint (iv) welds W2→W3 into a consecutive pair, and constraint (i) forces that pair into Jan–Feb or Feb–Mar, resolvable against (iii) in seconds.

**Question 12 (hard) — The anomaly in the quiet data**

Reviewing monthly dashboards, everything is green: incidents down 12%, changes succeeding at 97%, availability targets met. One quiet series stands out: out-of-hours administrative logins to the payment platform's management interface have risen from a baseline of 2–3 per month to 19 this month. No incidents, no changes, and no on-call activity map to them. On-call engineers say "probably the new supplier engineers doing maintenance". The supplier's maintenance schedule shows no out-of-hours work this month. What is the strongest response?

- A) Accept the on-call explanation — supplier engineers frequently work odd hours, and everything is green.
- B) Treat the anomaly as a potential security incident: an unexplained 6–8× rise in privileged out-of-hours access to a payment platform, explicitly contradicted by the supplier's own schedule, warrants immediate engagement of the security team, preservation of the access logs, verification of the accounts involved — and no tipping-off via broad announcements until the accesses are explained.
- C) Email the supplier asking them to remind their engineers to log maintenance work properly.
- D) Add the metric to next quarter's review agenda for trend confirmation.

**Correct answer: B**

**Explanation:** Grade the anomaly by what it touches and what explains it. What it touches: privileged access, out of hours, on a payment platform — the highest-value target class in the estate. What explains it: nothing — the convenient hypothesis is affirmatively contradicted by the supplier's own schedule. This tests recognising that an unexplained privileged-access pattern on a payment system is a potential compromise until explained, engaging security now, preserving evidence, and avoiding broad announcements that would tip off an intruder using valid credentials. Option A demonstrates the failure mode green dashboards induce. Option C acts on the eliminated explanation, in writing, to the party whose credentials may be compromised.

### Administration tips

- **Watch for whether a candidate normalises counts by volume** before drawing a conclusion — the base-rate error is the most common trap in this set.
- **Score for whether a candidate maps a claim or requirement to its actual mechanism**, rather than accepting documentation or intention as evidence.
- **Note whether a candidate resists seizing work a team is doing competently**, distinguishing what only a lead can do from what should be left alone.
- **Keep timing consistent** across candidates for this level.
- **Use the quiet-anomaly item (Question 12) to observe whether a candidate grades a signal by asset value and explanation quality**, rather than accepting the first convenient story.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that reads counts without base rates.**
- **Crediting an answer that seizes control of work a team is handling well.**
- **Accepting definitional drift in a supplier's or project's own figures** without checking the governing document.
- **Missing when a candidate lets documentation substitute for demonstration** in a test-plan or sign-off item.
- **Rewarding deference to seniority or a confident narrative** over discriminating evidence and value-per-effort.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with quantitative material: percentages, ratios, weighted averages, rates, projections, and data in tables and charts. At lead level the material shifts decisively toward management data — team capacity and utilisation, supplier service credits and penalty clauses, budgets and cost comparisons, KPI consolidations, and the quantitative content of business cases and options papers.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions; an on-screen calculator is normally available. Scoring compares accuracy and speed against a norm group, and lead-level variants weight interpretation and challenge as heavily as computation.

Numeracy matters distinctively at this level because the lead is the numerical control point between the team and everyone the team answers to. Supplier reports arrive with the supplier's arithmetic, and service-credit money is recovered or lost on a lead's reading of a percentage. Business cases and options papers arrive with cost comparisons whose assumptions determine their conclusions. Team plans rest on capacity arithmetic — utilisation, absence, on-call loading — and the difference between a sustainable rota and a burnout engine is a calculation someone must do honestly.

### How this assessment maps to the role

- **Contractual and service-credit arithmetic** maps to the duty to manage third party provision of IT operations services: availability definitions, credit thresholds, and penalty calculations are percentage arithmetic with money attached.
- **Capacity and utilisation arithmetic** maps to the duty to manage workload, performance and development of a team: sustainable allocation, on-call loading, and absence planning are ratio and rate problems about people.
- **Cost and options comparison** maps to the duty to manage the development of architectural solutions: options papers turn on total-cost comparisons whose baselines and time horizons must be checked, not believed.
- **KPI consolidation and trend reading** map to the **Availability and capacity management** skill and the duty to manage operational support against KPIs: weighted averages, rates versus counts, and honest period-on-period comparisons.
- **Risk and impact quantification** maps to the **Change management** skill (managing high impact, complex change requests means quantifying the impact) and the **Testing** skill of managing test planning, where coverage and result statistics inform acceptance decisions.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Team utilisation percentage**

A team of 8 engineers each has 37 working hours per week. This week, 74 hours went to incident response across the team. What percentage of total team hours went to incident response?

- A) 20%
- B) 25%
- C) 29%
- D) 33%

**Correct answer: B**

**Explanation:** Total team hours = 8 × 37 = 296. Percentage = 74 ÷ 296 = 25%. This tests basic percentage fluency and, a strong candidate's answer notes, the discipline of computing against true capacity (all hours) rather than nominal capacity, stating which one was used — a quarter of capacity on unplanned incident work is a number worth tracking as a trend, since a climbing figure eventually comes out of development time and eventually out of people.

**Question 2 (easy) — Service credit calculation**

A supplier contract specifies: availability below 99.5% in a month triggers a service credit of 10% of the monthly charge; below 99.0% triggers 20%. The monthly charge is £42,000. The supplier reports 99.2% availability. What credit is due?

- A) £0
- B) £4,200
- C) £8,400
- D) £12,600

**Correct answer: B**

**Explanation:** 99.2% is below 99.5% (triggering the 10% tier) but not below 99.0% (so the 20% tier does not apply). Credit = 10% × £42,000 = £4,200. Option C applies the 20% tier a band too early. This tests exact boundary reading in a tiered threshold structure — "below 99.0%" means strictly below — and a strong candidate's answer notes that managing third-party provision includes being able to compute these credits directly from the contract.

**Question 3 (easy) — Weighted mean resolution time across two sub-teams**

An infrastructure sub-team resolved 90 incidents at a mean of 3.0 hours; a platform sub-team resolved 30 incidents at a mean of 7.0 hours. What is the team-wide mean resolution time?

- A) 4.0 hours
- B) 4.5 hours
- C) 5.0 hours
- D) 5.5 hours

**Correct answer: A**

**Explanation:** Combine via totals: 90×3.0 + 30×7.0 = 270 + 210 = 480 hours across 120 incidents; 480÷120 = 4.0 hours. The unweighted trap, (3.0+7.0)÷2 = 5.0 (option C), overweights the smaller sub-team threefold. This tests weighted averaging, and a strong candidate's answer notes the management reading too: consolidations inform upward reporting, while the 3.0/7.0 split informs where action is needed.

**Question 4 (easy) — Percentage change in a budget line**

A team's software tooling budget was £64,000 last year and is £56,000 this year. What is the percentage reduction?

- A) 8.0%
- B) 12.5%
- C) 14.3%
- D) 16.0%

**Correct answer: B**

**Explanation:** Reduction = 8,000 ÷ 64,000 = 12.5%. Option C is the wrong-baseline trap (8,000 ÷ 56,000 = 14.3%, the increase needed to restore the cut, not the cut itself). This tests baseline discipline in a budget context, where "a 12.5% cut" and "we need a 14.3% uplift to restore" describe the same £8,000 but land very differently in a finance meeting — a strong candidate's answer distinguishes the two framings deliberately.

**Question 5 (moderate) — On-call loading fairness**

An on-call rota covers 52 weeks with 6 engineers. Two engineers have negotiated exemptions from overnight duty for six months each (26 weeks of the year each), during which the remaining engineers cover their share. If overnight cover is one engineer per week, how many overnight weeks per year does each non-exempt engineer carry during the exemption periods, assuming the two exemptions run concurrently and load is shared equally among the four available engineers in that period?

- A) 6.5 weeks
- B) 8.7 weeks
- C) 10.4 weeks
- D) 13.0 weeks

**Correct answer: A**

**Explanation:** During the 26 concurrent exemption weeks, 4 engineers share 26 overnight weeks: 26÷4 = 6.5 weeks each in that period. This tests a single division, and a strong candidate's answer volunteers the full-year picture: the other 26 weeks are shared six ways at ≈4.3, giving non-exempt engineers ≈10.8 overnight weeks annually versus 4.3 for exempt colleagues — a 2.5× disparity that equal-share-among-available quietly produces, exactly the kind of unfairness sustainable rota design needs to compensate for elsewhere.

**Question 6 (moderate) — Options paper cost comparison with unequal horizons**

An options paper compares storage solutions: Option X costs £120,000 up front plus £15,000 per year; Option Y costs £30,000 up front plus £45,000 per year. The paper states: "Over three years, Y (£165,000) is cheaper than X (£165,000 — equal), and Y avoids capital outlay; we recommend Y." The platforms' expected service life is six years. What does the six-year comparison show?

- A) Equal costs — the three-year comparison holds at any horizon.
- B) X totals £210,000 and Y totals £300,000 over six years — X is £90,000 cheaper across the actual service life, and the paper's three-year horizon, stopping exactly at the crossover point, conceals this.
- C) Y remains cheaper because avoided capital outlay compounds.
- D) The comparison cannot be made without discount rates.

**Correct answer: B**

**Explanation:** X: £120,000 + 6×£15,000 = £210,000. Y: £30,000 + 6×£45,000 = £300,000. X is £90,000 cheaper over the actual service life. This tests recognising that a high-capital/low-running option and a low-capital/high-running option always cross over, and that the chosen comparison horizon decides the winner — here the paper's three-year window ends precisely at the crossover, the most flattering possible framing for Y. A strong candidate's answer notes that discounting (option D) is a legitimate refinement but does not rescue a horizon set at half the service life.

**Question 7 (moderate) — Supplier report: rate versus target with exclusions**

A supplier's contract requires 95% of Priority 2 incidents resolved within 8 business hours. Their quarterly report: "P2 performance: 96.2% (101 of 105 within target). Excludes 12 incidents pending customer information, per clause 14.2." Clause 14.2 permits excluding time spent awaiting customer response from the resolution clock — not excluding the incidents entirely. If the 12 excluded incidents are included, and 5 of them met the 8-hour target once waiting time is properly deducted, what is the true performance figure?

- A) 96.2% — the report is right.
- B) 90.6% — (101 + 5) of (105 + 12) = 106 of 117.
- C) 86.3% — 101 of 117.
- D) 92.4% — the average of the two candidate figures.

**Correct answer: B**

**Explanation:** Apply the clause as written: waiting time is deducted from each incident's clock, but the incidents remain in the population. Corrected numerator: 101+5 = 106. Corrected denominator: 105+12 = 117. Performance: 106÷117 = 90.6% — below the 95% target. This tests recomputing per the clause rather than accepting a supplier's wholesale exclusion, which converted a target breach into a headline pass — a strong candidate's answer recognises this as the heart of supplier management: read the clause, recompute, compare against target, then raise the discrepancy formally with the arithmetic shown.

**Question 8 (moderate) — Change risk quantification**

A high-impact change will interrupt an internal service used by 1,200 staff for 45 minutes. The service saves each user an average of 12 minutes per hour of use versus the manual fallback, and on average 30% of staff use it in any given 45-minute window. The business asks for the productivity cost of the interruption in staff-hours. What is the best estimate?

- A) 900 staff-hours
- B) 270 staff-hours
- C) 54 staff-hours
- D) 4.5 staff-hours

**Correct answer: C**

**Explanation:** Affected users: 1,200×30% = 360. Each loses the service's productivity increment: 12 minutes/hour = 20%; over 45 minutes, 9 minutes each. Total: 360×9 = 3,240 staff-minutes = 54 staff-hours. Option A charges all 1,200 staff for the full 45 minutes; option B charges the 360 users the full window, forgetting the fallback exists. This tests producing impact estimates whose factors (population, exposure, increment) are each visible and challengeable — a strong candidate's answer presents the chain, not just the total.

**Question 9 (moderate) — Trend versus target in a KPI pack**

A quarterly KPI pack shows first-time fix rate for the service desk's infrastructure tickets: Q1 78%, Q2 74%, Q3 71%, Q4 69%, against a target of 70%. The pack's commentary reads: "Target met in three of four quarters; performance broadly on track." What is the accurate reading?

- A) The commentary is fair — 3 of 4 quarters met target.
- B) The rate has declined steadily (78 → 69, a 9-point fall) and has now crossed below target; "3 of 4 met" is technically true but the trend means Q1's healthy margin has eroded to a breach, and without intervention Q1 next year will breach further.
- C) The decline is seasonal and will self-correct.
- D) A 9-point fall on 78 is only an 11.5% relative decline — immaterial.

**Correct answer: B**

**Explanation:** Both facts are true: three quarters at or above 70, and a monotonic decline now sitting below target. The commentary reports the first and buries the second, which is decision-relevant since trend extrapolation says the breach deepens. This tests reading level and trend together — a metric above target and falling is a different management object from one below target and rising, though snapshot reporting renders them identically. Option C asserts seasonality no data supports; option D's arithmetic is correct but its conclusion does not follow, since materiality is set by proximity to the target, which has now been crossed.

**Question 10 (hard) — Compound demand against stepped capacity**

A platform handles 400,000 transactions per month, growing 6% per month compound as services onboard. Its current capacity ceiling is 600,000 transactions per month. An upgrade doubling capacity to 1,200,000 requires 4 months from approval to live. Approximately how many months from now does demand hit the current ceiling, and what is the latest approval month to avoid breaching it?

- A) Ceiling hit around month 7; approval needed by about month 3.
- B) Ceiling hit around month 9; approval needed by about month 5.
- C) Ceiling hit around month 12; approval needed by about month 8.
- D) Ceiling hit around month 5; approval is already too late.

**Correct answer: A**

**Explanation:** Find n where 400,000×1.06ⁿ ≥ 600,000, i.e. 1.06ⁿ ≥ 1.5. Compound stepwise: 1.06² ≈ 1.124; 1.06⁴ ≈ 1.262; 1.06⁶ ≈ 1.419; 1.06⁷ ≈ 1.504 — crosses 1.5 at month 7. Latest approval: 7−4 = month 3. This tests the two-step structure of capacity leadership: compounding the demand curve, then subtracting the response lead time to reach a decision deadline rather than an event date — a strong candidate's answer uses the rule of 72 as a sanity check (doubling at 6% takes ≈12 months, so a 1.5× crossing at month 7 is plausible).

**Question 11 (hard) — Test coverage statistics in an acceptance decision**

A supplier reports acceptance testing of a system a team will operate: "412 of 420 test cases passed (98.1%). The 8 failures are all in the disaster recovery suite, which contains 10 cases. We recommend acceptance with DR fixes scheduled post-go-live." As the lead whose team inherits operations, what is the sharpest numerical reading?

- A) 98.1% overall pass is comfortably acceptable; proceed.
- B) The aggregate conceals the structure: the DR suite failed 8 of its 10 cases (an 80% failure rate in exactly the capability that cannot be tested in production and exists for the worst day), while the rest of the system passed 410 of 410; acceptance should treat "system functionality" and "disaster recovery" as separate acceptance decisions — the first is clean, the second has failed outright and "fix post-go-live" means operating without proven DR for an undefined period.
- C) 8 failures out of 420 is within any reasonable tolerance; the suite they cluster in is immaterial.
- D) The pass rate should be recomputed excluding the DR suite, giving 100%, which supports acceptance.

**Correct answer: B**

**Explanation:** Decompose the aggregate: DR suite passed 2 of 10 (20%); the non-DR remainder passed 410 of 410 (100%). The 98.1% headline is a weighted average of a perfect suite and a failed one, with the failed suite's tiny size hiding its total collapse. This tests reading structure rather than accepting an average at face value — DR is precisely the capability whose absence is invisible in normal operation and catastrophic when invoked, so "post-go-live fixes" means the exposure window is open exactly when go-live instability makes invocation most likely. Option D is the supplier's framing taken to its cynical conclusion.

**Question 12 (hard) — Reconciling utilisation, absence, and commitment arithmetic**

A commitment of 2.0 full-time-equivalents (FTE) of an 8-engineer team is requested for a 6-month programme. Current team load: incident and request work consumes 45% of capacity on average; changes and maintenance 25%; the remainder covers development, documentation, and cover. Planned absence (leave and training) averages 12% of gross capacity, and the 45%/25% figures are measured against capacity net of absence. What percentage of net capacity would remain for development, documentation, and cover if the 2.0 FTE commitment proceeds — assuming incident, request, change, and maintenance workloads are fixed in absolute terms?

- A) 30%
- B) About 6.7%
- C) About 17%
- D) About 21%

**Correct answer: B**

**Explanation:** Current net capacity: 8×88% = 7.04 FTE-equivalents. Current absolute loads: incidents/requests 45%×7.04 = 3.168; changes/maintenance 25%×7.04 = 1.76. The programme removes 2.0×0.88 = 1.76 net FTE, leaving 5.28. Fixed workloads still consume 4.928. Remaining: 5.28−4.928 = 0.352, which is 6.7% of the reduced net capacity. This tests carrying the absence factor through both sides of the calculation, and a strong candidate's answer draws the management conclusion: the commitment is arithmetically possible and operationally hollow — 0.35 FTE across 6 engineers is no meaningful development time, no documentation, and no slack for a bad incident week.

### Administration tips

- **Score for whether a candidate rebuilds a headline figure from raw parts** — supplier percentages, options-paper totals, KPI commentary, test pass rates — rather than trusting the stated summary.
- **Watch for whether a candidate states the baseline, horizon, and denominator explicitly** before computing.
- **Note whether a candidate decomposes an aggregate to check for a failed subset** before accepting it.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the capacity-commitment item (Question 12) to observe whether a candidate carries absence and increments through a full calculation**, rather than skipping a factor.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that accepts a flattering exclusion** without checking the governing document's actual exclusion rule.
- **Crediting a cost comparison that stops at or before the crossover point of two cost structures.**
- **Accepting an unweighted consolidation** — averaging sub-team means, service availabilities, or quarterly rates without volume weights.
- **Missing when a candidate reports level without trend, or trend without level**, in a KPI item.
- **Rewarding an impact estimate charged at gross rather than incremental cost**, or a capacity commitment agreed without carrying absence through the calculation.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material. At lead level the material is the documentation of operational governance: contracts and their schedules, regulatory and policy extracts, release and change policies, supplier correspondence, audit findings, business cases, and the reports — upward, outward, and formal — that this role signs or challenges.

The typical format is an online, timed test of 15 to 25 minutes: passages followed by questions, with true/false/cannot-say as the dominant type, supported by which-rule-governs questions, best-summary questions, inference-strength questions, and clear-writing judgements. Scoring rewards accuracy under time pressure and strict fidelity to the passage over background knowledge.

Verbal precision is a leadership skill at this level because the role summary states this directly: the service and the contractual and regulatory requirements of the organisation must be met. Contractual and regulatory requirements exist only as text, and they are met or breached according to what the text actually says. Managing third-party provision means supplier obligations, exclusions, and remedies live in clauses that must be read the way suppliers' commercial teams read them. And everything a team escalates upward, and everything sent onward, is a written claim whose strength must be graded before acting on it or forwarding it.

The golden rule is unchanged: answer from the passage alone. At lead level, add its governance corollary: in real disputes, the document defeats the recollection.

### How this assessment maps to the role

- **Contract and clause comprehension** maps to the duty to manage third party provision: obligations, exclusions, notice periods, and remedies are creatures of exact wording.
- **Policy and regulation application** maps to the duty to meet contractual and regulatory requirements and to the **Change management** skill of ensuring release policies and processes are applied.
- **Inference-strength discipline** maps to the **Incident management** skill of leading investigations (grading evidence in reports before acting on it) and the **Problem management** skill (conclusions sized to their evidence).
- **Summary and reporting judgement** maps to upward and outward reporting duties: board papers, supplier letters, and incident summaries succeed when every claim carries its correct strength.
- **Clear-writing and standards judgement** maps to the **Technical specialism** duty to draft and maintain procedures and set standards, and the **User focus** skill of championing user research and representing users.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Reading a contractual notice clause**

Read this extract from a supplier contract:

"Either party may terminate this agreement for convenience by giving not less than 90 days' written notice, such notice to expire no earlier than the end of the Initial Term. The Initial Term is 24 months from the Commencement Date. Termination for material breach may be effected at any time by written notice, subject to a 30-day remediation period following notification of the breach."

The Commencement Date was 20 months ago. Statement: "The organisation could serve notice of termination for convenience today, taking effect in 90 days."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Two conditions govern convenience termination: at least 90 days' notice, and expiry no earlier than the end of the Initial Term. Today is month 20; notice served today plus 90 days expires around month 23 — before the Initial Term ends at month 24. The second condition fails. This tests reading paired conditions in a contractual right, since notice served today could expire at month 24 (about 120 days' notice), but that is not what the statement claims.

**Question 2 (easy) — Regulatory scope**

Read this extract from a (fictional) regulatory notice:

"From 1 January, public bodies operating systems that process payment card data must ensure such systems are assessed annually against the applicable industry standard by an approved assessor. Systems that store, process, or transmit card data are in scope. Systems that merely link to third-party payment pages, without card data touching the body's infrastructure, are out of scope."

An estate includes: System P processes card payments directly; System Q redirects users to a third-party payment provider, with no card data touching the infrastructure; System R stores tokenised references to cards but, per its design documents, no card data. Statement: "Systems P and Q require annual assessment under the notice."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** P processes card data — in scope. Q matches the out-of-scope description exactly. The statement bundles P (correct) with Q (incorrect), and a conjunction with one false conjunct is false. This tests population sorting: each system enters exactly the obligations its facts trigger, and a strong candidate's answer notes System R as a genuine unresolved question — the notice as quoted does not resolve whether tokenised references constitute card data.

**Question 3 (easy) — What the audit finding actually says**

Read this extract from an internal audit report:

"Finding 4 (Medium): Of 25 sampled emergency changes, 6 lacked evidence of retrospective review at the following CAB, contrary to the change policy. We note management's assertion that reviews occurred but were not minuted. Recommendation: implement a tracking mechanism ensuring retrospective reviews are performed and evidenced. Management response: accepted; to be implemented within 90 days."

Statement: "The audit found that 6 emergency changes were not retrospectively reviewed."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The finding's precise object is 6 changes that "lacked evidence of retrospective review" — an evidential absence, not an established non-occurrence, and the report itself preserves the distinction by noting management's assertion that reviews happened but went unminuted. This tests the entire grammar of audit: findings attach to evidence, and "not evidenced" is a real deficiency without being the same claim as "not performed" — a distinction that cuts both ways when leads are audited and when they review their own controls.

**Question 4 (easy) — Meaning in context in supplier correspondence**

Read this line from a supplier's email about a fault a team escalated:

"Our engineering team has identified a probable cause and is developing a remediation, which we expect to include in the next scheduled maintenance release, subject to successful regression testing."

Which reading of the supplier's commitment is accurate?

- A) The fault's cause is confirmed and the fix will arrive in the next maintenance release.
- B) The supplier has committed to nothing firm: the cause is "probable" not confirmed, the remediation is in development not complete, inclusion in the next release is an expectation not a promise, and even that is conditional on regression testing.
- C) The supplier has refused to fix the fault.
- D) The fix will arrive only if the organisation performs regression testing.

**Correct answer: B**

**Explanation:** Inventory the hedges: "probable cause", "developing", "expect to include", "subject to successful regression testing" (a condition owned by the supplier — option D misassigns it). This tests recognising that every load-bearing element is qualified, and a strong candidate's answer notes the task of converting status into commitment where the service needs it — a reply asking for a committed release identifier and date — rather than reporting the hedged status upward as fact.

**Question 5 (moderate) — Which policy provision governs**

Read this extract from a release policy:

"Standard releases follow the monthly release calendar. Expedited releases may be approved by the service's lead engineer where a fault materially degrades service, and must be notified to the CAB retrospectively. Security releases addressing vulnerabilities rated High or Critical must be deployed within 14 days of patch availability, notwithstanding the release calendar. Where a security release also contains functional changes, the functional changes require standard or expedited approval in their own right."

A vendor patch rated High was released 10 days ago. Bundled in the same vendor package is a new reporting feature a service owner wants. Which statement correctly applies the policy?

- A) The whole package must be deployed within 14 days under the security provision.
- B) The security content must be deployed within 4 days to meet the 14-day rule, but the bundled functional change requires its own standard or expedited approval — so deploy the security fix within the deadline, and route the reporting feature through its own approval (or deploy the package with the feature approved expedited, if the lead engineer's criteria are genuinely met).
- C) The 14-day rule is suspended because the package contains functional changes.
- D) The reporting feature can ride along under the security deadline, since separating them is inconvenient.

**Correct answer: B**

**Explanation:** The policy anticipates the bundling problem explicitly: security content carries the 14-day obligation regardless of the calendar, while bundled functional changes require their own approval. This tests applying both provisions to their own objects and doing the deadline arithmetic (14−10 = 4 days remaining), rather than letting the security deadline become an approval bypass for the feature — precisely the move the final sentence exists to block.

**Question 6 (moderate) — The board summary that must be accurate**

Read this extract from a team's draft major incident report:

"The outage lasted 3 hours 40 minutes and prevented approximately 4,000 staff from accessing case files. Recovery was delayed roughly 90 minutes because the failover runbook referenced a decommissioned server; the on-call engineer improvised a correct alternative. The root cause was a storage firmware defect; the supplier has issued a fixed version, now deployed. The runbook error had been reported by a team member five weeks earlier but the correction was not prioritised."

Which one-paragraph summary is most appropriate for the board?

- A) "A storage firmware defect caused a 3h40m outage affecting ~4,000 staff. The supplier's fixed firmware is deployed. Recovery was extended by ~90 minutes because our failover runbook was out of date — an error reported internally five weeks earlier but not actioned. We are fixing the runbook process, including how reported errors are prioritised."
- B) "A supplier firmware defect caused an outage; the supplier has provided a fix. Recovery took slightly longer than planned due to a documentation issue, now resolved."
- C) "An outage occurred due to a combination of supplier and process factors. All issues are resolved and lessons have been learned."
- D) "A storage firmware defect caused the outage. Recovery was delayed by a runbook error. The engineer responsible for the outdated runbook has been identified."

**Correct answer: A**

**Explanation:** Option A carries duration, population, root cause, fix status, the 90-minute runbook delay, and the five-week-old unactioned report — the governance finding that the organisation had the information to prevent the delay and lacked the process to act on it — plus the systemic remedy. Option B launders "slightly longer than planned" for 41% of the outage. Option D converts a process failure into a person failure. This tests a summary discipline: the version that goes up must contain the fact least preferred, stated plainly, with its remedy, because boards discover omissions eventually.

**Question 7 (moderate) — Inference strength in an escalated claim**

A service desk manager escalates: "Users are saying the new VPN client is causing laptop crashes. Twelve crash reports this week from VPN users, versus two or three in a normal week. The desktop team says nothing else changed this week. I think we should pull the client." Which assessment of the evidence is soundest?

- A) The evidence proves the VPN client causes crashes; pull it today.
- B) The evidence is a strong signal worth acting on — a 4–6× crash-rate rise coinciding with the rollout, with no other known change — but it is correlational: the sound next steps are to check crash diagnostics for VPN-client involvement, compare crash rates between updated and not-yet-updated laptops (the rollout's natural control group), and prepare rollback criteria — with immediate rollback justified if the diagnostic check or the comparison confirms, or if crash severity escalates meanwhile.
- C) The evidence is anecdotal; take no action until users file formal tickets.
- D) The desktop team's claim that nothing else changed should be accepted as establishing the VPN client as the only possible cause.

**Correct answer: B**

**Explanation:** A coincident 4–6× rise with no known alternative change is genuinely strong, far above anecdote, but short of proof: "nothing else changed" means nothing else known changed, and crash attribution needs diagnostics, not chronology alone. This tests grading a claim at its correct strength and, at lead level, designing the discrimination: the phased rollout provides a natural experiment, diagnostics provide mechanism, and pre-agreed rollback criteria convert repeated argument into a threshold check.

**Question 8 (moderate) — Procedure drafting judgement**

Setting the standard for a team's runbooks, which opening instruction best exemplifies the standard that should be required?

- A) "In the event of replication failure, appropriate remedial action should be taken by the responsible engineer in a timely manner, having regard to prevailing service conditions."
- B) "If replication lag exceeds 15 minutes (alert REPL-04): (1) check replication service status on DB-PRD-01 per §2; (2) if the service is stopped, restart it and confirm lag falls below 5 minutes within 10 minutes; (3) if the service is running or lag does not fall, do NOT restart the database — escalate to the DBA on-call (rota page) quoting this runbook section and current lag. Restarting the database during active replication recovery can cause data divergence."
- C) "Replication issues: see the DBA team's documentation."
- D) "Fix replication per standard practice. Escalate if unsure."

**Correct answer: B**

**Explanation:** Option B has every load-bearing element: a quantified trigger tied to a named alert, numbered steps with verification criteria, a prohibition with its reason, and an escalation path with the exact information to quote. Option A is governance prose that delegates every real decision while appearing to guide. This tests whether a candidate requires option B's standard, spots options A, C and D in review, and can coach their authors — a lead's documentation standard is enforced in review comments.

**Question 9 (moderate) — User research in an operational decision**

Read this extract from a user researcher's findings, shared with a team:

"Research with 22 caseworkers across three sites on the file service migration: 18 rely on the 'recent files' feature to resume interrupted work — interruptions average 6 per day in frontline roles. The target platform's equivalent feature retains 10 items against the current 50; several participants routinely navigate to files 20–30 items back after multi-day absences. Participants were enthusiastic about the new platform's search speed. Caveat: all three sites were high-volume processing centres; the long-tail usage of specialist teams (est. 15% of users) was not sampled."

The migration plan currently treats the recent-files difference as cosmetic. What does the research support?

- A) Proceeding unchanged — 22 users is too small a sample to matter.
- B) Treating the recent-files reduction as a workflow risk for frontline caseworkers — the evidence shows heavy, structural reliance that a 10-item list breaks — while noting the search-speed positive, and commissioning the unsampled specialist-team research before finalising; the plan should seek a configuration change, a workaround, or explicit service-owner acceptance of the degradation.
- C) Halting the migration — the platform has failed user research.
- D) Proceeding, since participants were enthusiastic about search speed.

**Correct answer: B**

**Explanation:** The reliance evidence is strong for the sampled population: 18 of 22, a mechanism, a frequency, and a specific breaking point — workflow-structure data, not preference data, making "cosmetic" untenable. The caveat flags a sampling boundary requiring commissioned follow-up rather than generalisation or dismissal. This tests what "champion user research" and "represent users internally" mean operationally — risk named, mitigation options framed, decision routed to the accountable owner with honest evidence.

**Question 10 (hard) — Two clauses in tension**

Read these two extracts from the same supplier contract.

Clause 8.3: "The Supplier shall complete all Priority 1 incident resolutions within 4 hours of notification. Failure in any month to resolve 90% of Priority 1 incidents within this period constitutes a Service Level Failure, entitling the Customer to the remedies in Schedule 5."

Clause 8.7: "Where a Priority 1 incident's resolution requires action by the Customer or a third party outside the Supplier's control, the affected incident shall be excluded from Service Level calculations, provided the Supplier notifies the Customer of the dependency within 1 hour of identifying it."

Last month: 10 P1 incidents; the supplier resolved 8 within 4 hours. Of the 2 late resolutions, one awaited the organisation's network team for 3 hours (the supplier flagged this dependency 40 minutes after identifying it); the other awaited a third-party carrier for 6 hours, which the supplier first mentioned in the monthly report. What does the contract support?

- A) A Service Level Failure occurred: 8 of 10 is 80%, below 90%.
- B) No Service Level Failure: both late incidents are excluded, giving 8 of 8.
- C) The network-team incident is validly excluded (dependency notified within the hour), but the carrier incident is not (no timely notification), so the calculation is 8 of 9 = 88.9% — below 90%, and a Service Level Failure has occurred.
- D) Cannot be determined without Schedule 5.

**Correct answer: C**

**Explanation:** Apply clause 8.7's exclusion test to each late incident separately. Incident one: dependency flagged at 40 minutes — condition met, validly excluded. Incident two: dependency first mentioned in the monthly report, weeks after identification — condition failed, stays in the calculation as a miss. Population 9, successes 8, rate 88.9% — below 90%. This tests exclusions as conditional gifts whose conditions are the customer's protection, tracking notification timestamps to convert a supplier's claimed 100% into the contract's 88.9%.

**Question 11 (hard) — The business case's quiet assumption**

Read this extract from a business case under review:

"Migrating the estate's backup service to the proposed cloud platform saves £180,000 annually against current costs. The saving assumes decommissioning the on-premises backup infrastructure at migration completion (month 6), releasing £120,000/year in maintenance, and reducing storage costs by £60,000/year through the platform's deduplication, based on the vendor's benchmark of 4:1 deduplication across mixed estates. Regulatory retention requires 7-year recoverability of financial records. The cloud platform's supported recovery guarantee covers data written to it; recovery of legacy backup sets requires the on-premises infrastructure that created them."

Which is the most significant defect a reviewing lead should raise?

- A) The £120,000 maintenance saving is overstated.
- B) The case simultaneously requires decommissioning the on-premises infrastructure at month 6 (to release the claimed savings) and retaining it (because 7-year regulatory recoverability of legacy backup sets depends on the infrastructure that created them) — the full £180,000 saving and the compliance obligation cannot both hold as drafted; either legacy sets must be migrated/converted (a cost the case omits), or the infrastructure must be retained in some form (reducing the saving), or recoverability is breached.
- C) The 4:1 deduplication benchmark may not be achieved on this estate's mix.
- D) Cloud costs may rise after year one.

**Correct answer: B**

**Explanation:** The case's two premises contradict each other through a compliance obligation: savings require infrastructure gone at month 6, while regulation requires recoverability that depends on that same infrastructure. Something must give, and each resolution carries a cost the case does not carry. This tests hunting premise pairs after checking the arithmetic — what must be simultaneously true, and can it be — a defect that survives every review checking only arithmetic, then surfaces in month 7 as an unbudgeted retention requirement.

**Question 12 (hard) — Grading a chain of reported claims**

An incident manager's weekly summary states: "The recurring Tuesday slowdowns are resolved. The supplier confirmed their Tuesday maintenance job was the cause, moved it to 03:00, and no slowdown occurred this Tuesday. Separately, the DBA team believes the month-end batch overrun risk is now low, as the query optimisation deployed last week reduced the batch's largest query by 60% in testing; the first month-end run is next Friday. Finally, security confirmed the anomalous logins investigated last month were a misconfigured monitoring probe — closed." Which grading of the three claims is most accurate?

- A) All three matters are resolved and can be reported upward as closed.
- B) Claim one is well-evidenced but young (report as "resolved, monitoring for two further cycles"); claim two is a forecast resting on a test result, not yet validated in production ("risk reduced, first real validation next Friday"); claim three is closed on the investigating authority's confirmed finding. Only the third is fully closed; the summary's "resolved/low/closed" framing overstates the first two by one grade each.
- C) None can be trusted — all three require independent re-investigation.
- D) Claims one and two are closed; claim three should remain open indefinitely because security matters are never truly closed.

**Correct answer: B**

**Explanation:** Claim one has strong structure but one clean Tuesday after a recurring pattern is a sample of one. Claim two is a test-environment result, not a production observation. Claim three has a specific, benign finding from the accountable authority. This tests calibrated onward reporting: each claim forwarded at its own strength with its next checkpoint, since a summary becomes someone else's certainty and grade inflation compounds at every level it passes through.

### Administration tips

- **Score for whether a candidate reads paired conditions** — a notice period with its earliest-effect date, an exclusion with its notification deadline.
- **Watch for whether a candidate distinguishes evidence-absence from event-absence** ("not evidenced" versus "not performed").
- **Note whether a candidate inventories hedges in a reported commitment** before reporting it upward as firm.
- **Keep timing consistent** across candidates for this level.
- **Use the business-case item (Question 11) to observe whether a candidate hunts for a premise contradiction** after verifying the arithmetic, rather than stopping at the numbers.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that reads a famous condition and skips its partner condition.**
- **Crediting an answer that accepts a drafter's aggregation** of a strong claim bundled with a weak one.
- **Missing when a candidate converts a hedged supplier status into a firm commitment.**
- **Accepting a person-shaped conclusion from process-shaped facts** — naming an individual where the finding is a process defect.
- **Rewarding an answer that treats a single clean observation as closing a recurring pattern.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses — most effective, most and least effective, or ratings across a set. At lead level, the scenarios are leadership dilemmas: team performance and development under service pressure, supplier relationships at moments of failure, escalations that arrive shaped by politics, the integrity of what goes upward under a lead's name, and the culture their visible choices create.

The typical format is an online test of 25 to 40 minutes with 12 to 20 scenarios, generously timed because it measures judgement rather than speed. Scoring compares choices against experienced leaders' consensus and against valued behaviours: ownership, user focus, honesty, proportionate escalation, collaboration, inclusion, and the development of people and capability.

Employers assess this because at this level judgement is the job. Managing the workload, performance and development of a team of specialists means every scenario about capacity, fairness, or a struggling engineer is central to the role. Managing third-party provision means supplier scenarios test whether contractual lines can be held while keeping working relationships alive. Taking accountability for issues and being proactive in searching for potential problems means owning outcomes not personally caused and surfacing risks nobody asked about.

### How this assessment maps to the role

- **Team leadership judgement** maps to the duty to manage workload, performance and development of a team — building capability to deliver services as required.
- **Supplier management judgement** maps to the duty to manage third party provision of IT operations services: holding contractual and regulatory lines, escalating through the right supplier channels, and keeping relationships functional through disputes.
- **Accountability and proactivity** map to the **Ownership and topic** skill: taking accountability for issues that occur, being proactive in searching for potential problems, and achieving excellent user outcomes even when the cause was not the candidate's.
- **Governance integrity** maps to the **Change management** skill (managing high-impact changes and ensuring release processes are applied under pressure) and the **Testing** skill (authoritative advice that stays authoritative when it is unwelcome).
- **Incident leadership** maps to the **Incident management** skill of leading investigation and resolution — including the human dimensions of who speaks, who is heard, and who learns.
- **User and service perspective** map to the **User focus** skill (championing user research, representing users internally) and the **Service focus** skill of establishing coherent frameworks that work.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The engineer who is struggling**

An engineer — capable for years — has missed three change deadlines in six weeks, and two of their recent implementations needed rework. Team members have started quietly routing work around them. There has not yet been a direct discussion with the engineer. What is the most effective response?

- A) Reassign them to low-stakes work without discussion, protecting the service and sparing them embarrassment.
- B) Raise it at the next team meeting so everyone can support them.
- C) Have a private, factual, early conversation: describe the specific pattern observed, ask what is going on, listen — then agree support and expectations together, with a follow-up date.
- D) Wait one more month to see whether performance recovers on its own.

**Correct answer: C**

**Explanation:** A sudden performance change in a historically strong performer is a signal, not a verdict — common causes include health, caring pressures, disengagement, or a skills gap — and every option except C decides the cause without asking. Option C is early, factual, private, and two-sided: it asks before concluding, then pairs support with restored expectations and a checkpoint. Option A decides their capability without their voice. Option B breaches confidentiality. Option D outsources responsibility to time while the pattern compounds. This tests managing the performance and development of a team as the discipline of having this conversation sooner, smaller, and more honestly than instinct suggests.

**Question 2 (easy) — Credit arriving at the wrong desk**

A director emails directly: "Excellent work stabilising the payments platform — the board noted the improvement." The stabilisation was designed and driven by a senior engineer over two months; the candidate's contribution was clearing obstacles and defending their time. What is the most effective response?

- A) Reply "Thank you" — leads absorb credit as they absorb blame; it evens out.
- B) Reply crediting the engineer by name and copying them: "Glad it landed — the design and delivery were [name]'s work over two months; I mainly kept the path clear," and mention it at the next team forum.
- C) Forward the email to the engineer privately with "this was really yours".
- D) Reply asking the director to email the engineer directly instead.

**Correct answer: B**

**Explanation:** Option B corrects the impression at the source (the director), lets the engineer see it happen (copied), fixes the record where reputations and promotion cases are built, and converts one email into culture via the team forum. Option A quietly banks a subordinate's work. Option C gives a private consolation while the public record stays wrong. Option D outsources a correction that belongs to the candidate. This tests credit routing as one of the highest-leverage, lowest-cost acts of team leadership.

**Question 3 (easy) — The user-impacting shortcut request**

A programme director asks for a network change to be brought forward by two weeks, into the middle of the working day, to hit a programme milestone: "It's only a five-minute interruption." The change interrupts the case management service used by 3,000 frontline staff; the standard window is out-of-hours precisely because midday interruptions to this service have previously caused lost session data for caseworkers mid-record. What is the most effective response?

- A) Agree — five minutes is trivial and programme milestones matter.
- B) Refuse outright, citing the standard window policy.
- C) Explain the specific user impact behind the window (lost mid-record session data for frontline caseworkers, not mere inconvenience), and offer real alternatives: an earlier out-of-hours slot that still advances their milestone, or — if the daytime slot is genuinely unavoidable — an assessed, communicated, service-owner-approved exception with session-protection measures.
- D) Agree, but schedule it during the lunch hour when usage dips.

**Correct answer: C**

**Explanation:** Option C converts the policy into its underlying user evidence, treats the milestone as legitimate and offers a route that serves it, and keeps any exception path honest — assessed, communicated, and approved by the accountable service owner. Option A accepts user harm on the requester's framing. Option B protects users but wastes the opportunity to make the director better informed. Option D is a private compromise chosen without data or the service owner's voice. This tests achieving excellent user outcomes by translating operational rules back into the user consequences that justify them.

**Question 4 (moderate) — The supplier relationship at the moment of failure**

An infrastructure supplier's failed change caused yesterday's four-hour outage. Contractually, it is a clear Service Level Failure with credits due, and the organisation's process requires formal notification. The supplier's account manager — a good, productive relationship — calls: "Can we handle this informally? A formal SLF triggers an internal review for us, and we've already disciplined the engineer. I'd owe you one." What is the most effective response?

- A) Agree — the relationship is worth more than one service credit, and goodwill pays off over a contract's life.
- B) Proceed with formal notification as the contract and process require — explaining to the account manager, without hostility, that formal routes are not personal and constructive engagement will follow in the review — while separately noting their "disciplined the engineer" framing as a concern: the failure looked procedural, and the review should examine the change process, not conclude with an individual.
- C) Agree to informality in exchange for a specific concession on next quarter's pricing.
- D) Escalate the account manager's request itself to the commercial team as attempted impropriety.

**Correct answer: B**

**Explanation:** The contractual event is not optional or waivable; informal handling quietly disables the contract's performance mechanism and sets a precedent the supplier will cite next time. Option C makes that trade explicit and worse. Option B protects the relationship the only durable way — by being predictable and constructively engaged — and feeds the "disciplined the engineer" framing into the review as a genuine concern, since a supplier that closes a procedural failure by punishing an individual has not fixed the process that will fail again. Option D overreads a common, human request as misconduct. This tests separating the contractual event, the relationship, and the substantive concern, and handling each correctly.

**Question 5 (moderate) — A team's error, a director's question**

A misconfiguration by an engineer during a routine change caused a two-hour degradation of a public-facing service this morning. The change had been peer-reviewed per process; the reviewer missed it too. A director messages: "What happened, and whose mistake was it?" What is the most effective response?

- A) Name the engineer — the director asked a direct question and deserves a direct answer.
- B) Reply: "A configuration error in a routine change — implemented and peer-reviewed per our process, so the miss is a process finding as much as an individual one. My team, my accountability. Service restored 10:40; interim safeguard in place; review of why the peer check missed it, with fixes, to you by Friday."
- C) Reply that the cause is still under investigation, buying time until attention moves on.
- D) Name both the engineer and the reviewer, so accountability is complete.

**Correct answer: B**

**Explanation:** Option B gives the director everything decision-relevant while placing ownership where the role's own language puts it: take accountability for issues that occur. The error passed the team's designed control, making it a control finding, not an individual one. Option C is a false statement in a professional channel. Options A and D itemise individuals to a director for an error caught by no control, teaching the team that future errors get personally reported upward. This tests holding a two-level accountability structure — upward at the system level, inward with the individuals privately and developmentally — under a direct question.

**Question 6 (moderate) — The capability gap kept on hire**

For the third time this year, a complex storage fault required flying in the supplier's specialist at premium call-out rates, because nobody on the team can work on the platform's advanced features. Each call-out is individually justifiable; together they signal a capability gap. Budget is tight, and the two engineers interested in certification would need backfill during training. What is the most effective response?

- A) Continue with call-outs — each incident was resolved, the model works, and training budgets are contended.
- B) Build the case from the pattern: total the year's call-out costs and resolution delays, compare against certification and backfill costs, and propose the capability investment through the budget process — sequencing the two engineers' training to keep one on-shift, and negotiating supplier-led knowledge transfer into the next call-out as a bridge.
- C) Stop using the supplier specialist to force the team to learn under pressure.
- D) Ask the two interested engineers to self-study in their own time, avoiding the backfill cost.

**Correct answer: B**

**Explanation:** Three justifiable call-outs are, in aggregate, a standing dependency with a price, and "building capability to deliver services as required" names the remedy. Option B quantifies the pattern into a case a budget process can approve, sequences training to protect service, and extracts bridge value from the existing spend. Option C gambles user outcomes to save a training line. Option D funds the organisation's need from individuals' unpaid time. This tests moving from incident thinking to capability thinking — proactive problem search applied to organisational problems.

**Question 7 (moderate) — The release decision with an absent voice**

At the go/no-go meeting for tonight's major release, everything is green except one item: the acceptance tests for the accessibility of the new interface were descoped two sprints ago to save time, with a note "to be verified post-release". The programme wants go. The service's users include several hundred staff who rely on assistive technology; nobody at the meeting represents them, and the user researcher attached to the programme was not invited. What is the most effective response?

- A) Go — accessibility can be verified post-release as the note says, and everything else is green.
- B) No-go until full accessibility testing completes, whenever that is.
- C) Name the gap and its population ("several hundred assistive-technology users, zero verification, no one in this room representing them"), get the user researcher's input today, and push for the minimum honest gate: targeted assistive-technology smoke tests before release or a controlled rollout that excludes nothing silently — and if the programme still insists on unverified go, require the risk to be explicitly owned, in the record, by the service owner rather than absorbed silently.
- D) Abstain — accessibility is the programme's responsibility, not operations'.

**Correct answer: C**

**Explanation:** A user population's entire verification was descoped, and the descoping is invisible at the decision meeting because no voice owns it. Option C names the population and the absence, pulls the excluded expertise into the decision today, offers proportionate gates, and requires any residual risk to be owned aloud by the accountable owner. Option A treats absence of evidence as green. Option B refuses the proportionate middle. Option D is the abdication the meeting's structure invites. This tests what championing user research looks like in a go/no-go decision.

**Question 8 (moderate) — The change freeze and the quiet exception**

A four-week organisational change freeze is in force for a major programme cutover. Mid-freeze, a senior engineer discloses making "a tiny config change" to a monitoring threshold yesterday — it was paging on-call unnecessarily every night — without raising an exception "because the freeze process takes days and this touched nothing user-facing". The change worked; on-call slept. The freeze policy requires exceptions for all production changes, explicitly including monitoring. What is the most effective response?

- A) Let it stand quietly — the change was sensible, beneficial, and invisible; retro-reporting it creates noise for nothing.
- B) Retrospectively declare it through the exception process, explaining why: the freeze's value is the completeness of the change record during cutover — an unrecorded change, however benign, is exactly what turns cutover diagnostics into guesswork; separately, take the real grievance (a days-long process for a threshold tweak) to the freeze board as a proposal for a fast lane for low-risk operational changes.
- C) Reverse the change immediately and reinstate the nightly false pages until an exception is approved.
- D) Report the engineer to the programme's governance board for a freeze breach.

**Correct answer: B**

**Explanation:** The change was operationally right and procedurally wrong, and the freeze's purpose — a complete, trustworthy change record during cutover — is broken by unrecorded changes regardless of benignity. Option B repairs the record, teaches the principle rather than the rule, and fixes the process whose friction invited the bypass. Option A makes the candidate co-holder of a secret change record. Option C restores procedural purity by reinstating known harm. Option D escalates a self-reported, benign breach to disciplinary theatre, after which nobody self-reports again. This tests protecting a disclosure habit while still closing the compliance gap.

**Question 9 (hard) — Most and least effective: the failing programme wants a candidate's assurance**

A major programme, already late, needs sign-off that operational readiness criteria are met for go-live in three weeks. Reviewing honestly: monitoring is ready; runbooks are 60% complete; the support rota for the new service is unstaffed (recruitment slipped); and the DR test is scheduled but not yet run. The programme director, under severe pressure, says the SRO "just needs a yes". Which response is MOST effective and which is LEAST effective?

1. Sign the readiness assessment as met — the gaps can close during early life, and the programme's momentum matters to the organisation.
2. Provide a written conditional assessment: ready-with-conditions, itemising each gap, its user/service consequence, its closure date and owner, the specific conditions under which go-live is supportable (interim support arrangement in place, DR test passed), and what remains unsupportable if conditions fail — sent to the programme and the candidate's own management line together.
3. Refuse sign-off flatly and decline further discussion until every criterion is fully met.
4. Tell the programme director privately that the assessment will be signed, but keep a private file note recording that readiness was considered not met.

- A) Most effective: 2; least effective: 4
- B) Most effective: 2; least effective: 3
- C) Most effective: 1; least effective: 3
- D) Most effective: 3; least effective: 1

**Correct answer: A**

**Explanation:** Response 2 refuses the binary and replaces it with the decision instrument the SRO actually needs — gaps itemised with consequences, owners, dates, and explicit supportability conditions — routed in writing to both audiences. Response 4 is least effective: signing an assurance privately recorded as false is worse than signing it naively, since the file note proves the falsity was understood and proceeded with anyway. Response 1 at least errs openly. Response 3 is honest but incomplete, abandoning the field to pressure. This tests the honest conditional as the strong move when asked for a binary that cannot honestly be given.

**Question 10 (hard) — The incident bridge with a senior problem**

As incident lead on a major outage bridge, ninety minutes in, a senior architect from another directorate — organisationally senior — has joined uninvited and is directing engineers: twice they have started actions conflicting with the bridge's agreed diagnostic sequence, and one engineer has begun quietly following the architect's instructions instead of the lead's. The architect's ideas are not unreasonable; the conflict and duplication are the problem. What is the most effective response?

- A) Cede lead to the architect — they are senior, and the ideas are credible.
- B) Reassert the structure on the bridge, without hostility: "One command line on this bridge — [engineer], please complete the agreed check first; [architect's name], I want your input — hold hypotheses for the pause point in four minutes and we'll assess them against the evidence." If the parallel direction continues, take it off-bridge or to the management line immediately.
- C) Mute or remove the architect from the bridge.
- D) Let both direction streams run — more senior brains on a hard problem can only help.

**Correct answer: B**

**Explanation:** Incident command is a structure, not a status: one command line, because parallel direction is how bridges execute conflicting actions and lose the evidential sequence a diagnosis depends on. Option B restores the structure while capturing the value — the engineer is redirected and relieved of a loyalty conflict, and the architect is channelled into a named contribution slot rather than dismissed or obeyed. Option A converts organisational seniority into incident authority. Option C is a public rebuke that spends relational capital unnecessarily. This tests whether authority under pressure comes from role clarity and calm structure rather than volume or rank.

**Question 11 (hard) — The regulatory finding and the tempting scope**

A compliance review finds that a subset of infrastructure — 14 legacy servers supporting a case archive — has missed mandatory security patching for five months, breaching a regulatory requirement this role is accountable for meeting. Cause: the servers were excluded from the automated patching platform at migration and never re-added; nothing flagged the exclusion. The finding must be reported to the regulator's liaison. A colleague points out the review only sampled one data centre: "Report the 14 — nobody has asked whether the other DC has the same issue." A quick check would take two days. What is the most effective response?

- A) Report the 14 servers as found — answering questions that were not asked expands exposure, and the review's scope is the review's problem.
- B) Report the 14, and simultaneously commission the two-day check of the other data centre — disclosing in the report that the exclusion mechanism was systemic, the parallel check is under way, and results will follow by a stated date; fix the root cause (the silent exclusion path) in the same plan, with a detection control so exclusions surface rather than persist.
- C) Delay all reporting until the second data centre check completes, so the report is complete.
- D) Quietly fix the other data centre first if affected, then report only the original 14, keeping the finding contained.

**Correct answer: B**

**Explanation:** The known fact is not "14 servers missed patching" — it is "the exclusion mechanism silently drops servers from patching, and one sampled DC shows 14 instances". Option A reports the instance while withholding the mechanism. Option D adds active concealment. Option C inverts the timeliness obligation. Option B reports now, supplements by a date, and pairs remediation with a detection control at the mechanism level. This tests enlarging the answer when the known exposure is larger than the question asked.

**Question 12 (hard) — The reorganisation rumour and a team's stability**

Credible word reaches a lead that a directorate reorganisation under discussion would split the team, moving three engineers under a different lead and outsourcing part of the infrastructure operations remit. Nothing is announced; consultation has not begun; the information came informally from a manager who exceeded their brief and asked to "keep it close". Two engineers separately mention "hearing something's coming"; anxiety is building, and the best engineer has quietly updated their CV. The service still has to run. What is the most effective response?

- A) Share everything known with the team — they deserve the truth, and trust matters more than process.
- B) Deny the rumours to settle the team — nothing is decided, so technically there is nothing to tell.
- C) Hold the confidence given, but act on what is actionable: tell the team honestly that organisational discussions happen and information will be shared the moment it properly can be; press upward — to management and HR — that rumour is already circulating and formal communication or consultation needs to accelerate before attrition does the reorganising first; and double down on the retention fundamentals within personal control (development, recognition, meaningful work) for the people the team cannot afford to lose.
- D) Tell only the best engineer, in confidence, so they do not leave based on incomplete information.

**Correct answer: C**

**Explanation:** Option C neither lies nor leaks — bounded candour that teams detect and forgive, unlike option B's denial, which becomes a remembered lie the day the announcement lands. It escalates the real problem — the information vacuum — to the people who own the announcement timeline, and acts where a lead's power actually lies during uncertainty: the retention levers that operate without any announcement. Option A converts one manager's indiscretion into an organisational leak. Option D creates a selective leak and an information hierarchy inside the team. This tests holding institutional constraints and human obligations simultaneously.

### Administration tips

- **Score for whether a candidate's response holds a two-level accountability structure** — upward at the system/category level, inward with individuals privately and developmentally.
- **Watch for whether a candidate separates a contractual or governance action from its relational tone**, handling both rather than sacrificing one for the other.
- **Note whether a candidate builds a conditional instrument** (conditions, owners, dates, consequences, in writing) when a scenario demands a binary the candidate cannot honestly give.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.
- **Use the absent-voice item (Question 7) to observe whether a candidate names a population affected but unrepresented** in a decision, rather than proceeding without noticing the gap.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that buys peace with the record** — signing assurances under pressure, softening supplier failures, "under investigation" when the cause is known.
- **Crediting kindness that decides for people** — reassigning without conversation, denying a rumour, sparing a team the truth.
- **Accepting seniority as a decision rule** — ceding incident command, accepting a director's framing, signing because a stakeholder needs a yes.
- **Rewarding the maximal refusal** — a flat no-go or blanket freeze without a proportionate path through it.
- **Missing when a candidate keeps a known exposure's scope conveniently small** rather than enlarging the answer to match what is actually known.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead infrastructure operations engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests the critical reading operational leadership consists of: workload trends and their second differences, base rates behind incident narratives, supplier reports checked against their governing contracts, test plans audited for the disaster-path requirement quietly downgraded to paperwork, diagnosis directed by information-per-minute rather than seniority, and a quiet anomaly graded by what it touches. The numeric section tests the arithmetic of governance: service credits computed from clauses, options papers recomputed at honest horizons, exclusions restored to their populations, capacity commitments netted for absence, and acceptance decisions rescued from flattering aggregates. The verbal section tests paired conditions in contracts, evidence-absence versus event-absence, hedged supplier commitments kept hedged, board summaries built around the fact least preferred, and business cases hunted for a premise pair that cannot both be true. The situational judgement section tests the dilemmas that define the role: performance conversations had early and honestly, credit routed accurately, users represented with reasons, suppliers held formally and warmly at once, conditional assurance instead of pressured signatures, incident command as structure rather than status, regulatory answers enlarged to match known exposure, and teams led through uncertainty without lying or leaking.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to how a candidate would actually manage supplier relationships, team capacity, and upward reporting.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and strengthen the system that will face the situation's successor — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
