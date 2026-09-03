# Principal Application Operations Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for principal application operations engineer, within the UK Government Digital and Data profession. At this level the role is organisational as much as technical: owning the application strategy outright, leading on resourcing, learning and development for a team, carrying accountability for vendor and supplier management, bringing expert technical understanding — including the direction of future technologies — to bear on decisions whose consequences run for years, and remaining close enough to delivery to manage aspects of an application when complexity and business impact demand direct involvement.

Psychometric assessments are structured, standardised exercises measuring the cognitive capabilities and professional judgement that predict success in a role. At principal level, the relevant assessments are emphatically not abstract puzzles: they draw on the artefacts and decisions that fill the role's actual working month — multi-year strategy papers, supplier performance regimes and contract clauses, portfolio risk and compliance positions, capacity investment cases, workforce and skills plans, governance submissions, and the incident and problem records of an estate the candidate would answer for. The four assessment types covered here map onto the four faces of principal-level work: structured reasoning across systems, quantitative command of investment and performance, precise reading and writing of binding text, and judgement where strategy, people, suppliers, and integrity intersect.

Senior selection processes in government genuinely use instruments like this, often with demanding norm groups. This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and its typical format, a mapping of its dimensions to the named skills in the role summary, a substantial set of items with fully worked explanations for you to use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate you assess at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so your record is honest. Afterwards, use the explanations to structure a debrief — several scenarios also work well as calibration material for a successful candidate's own future development conversations with their leads. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. At principal level, it presents the materials of strategic operations — portfolio risk matrices, supplier performance data, technology roadmaps, capacity investment options, governance rules — and asks the candidate to reason about them with speed and precision: recognising patterns across services and years, deducing consequences from interacting policies and contracts, detecting the inconsistency buried in a compliance return, prioritising across a portfolio, and solving problems whose constraints span technology, commercial terms, and people.

The typical format is an online, timed test of 15 to 30 minutes with 20 to 30 questions of graduated difficulty, scored objectively against a norm group — for senior roles, often a demanding one. Principal-level question design favours multi-step, multi-source reasoning: reconciling a rule set with a dataset, tracing a decision's consequences through several systems, and identifying which of several defensible-sounding conclusions actually follows.

For this role, the relevance is direct. Owning the application strategy means deducing where technology directions, supplier lifecycles, and departmental mandates converge — and where they collide. Accountability for supplier management means reasoning precisely from contract and performance data. Seeing the bigger picture across groups of services — the **Service focus** skill — is pattern recognition at portfolio scale. And ensuring the right actions are taken on problems means auditing other people's reasoning as often as producing one's own: a principal's cognitive errors are rarely private, because an organisation is downstream of them.

### What it measures for the role

- **Pattern recognition** maps to **Service focus** and **Problem management**: taking groups of services and investigating how to get the best of underlying services means seeing shared structure across an estate; anticipating problems means seeing the pattern before it completes.
- **Logical deduction** maps to **Change management** and vendor accountability: managing high-impact, complex change requests and reasoning from contract terms both require deriving exactly what rules permit, require, and imply.
- **Error checking** maps to **Asset and configuration management**: managing service compliance and risk means detecting the return, record, or attestation that contradicts reality or itself, at portfolio scale, where errors hide in aggregation.
- **Prioritisation** maps to **Ownership and topic** and **Availability and capacity management**: accountability across an estate demands defensible ranking of competing risks.
- **Applied problem solving** maps to **Technical specialism** and **Testing**: delivering a model to support future technologies and managing risks with preventative action are constraint-satisfaction problems spanning years and budgets.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across a service group**

Reviewing annual incident summaries for the five services in a group, a candidate notes the services' major-incident counts and their underlying platforms:

| Service | Major incidents | Database platform | Hosting |
|---|---|---|---|
| Casework | 6 | Platform D1 | On-premise |
| Grants | 1 | Platform D2 | Cloud |
| Licensing | 5 | Platform D1 | Cloud |
| Referrals | 7 | Platform D1 | On-premise |
| Notifications | 1 | Platform D2 | Cloud |

Which factor most plausibly warrants investigation as the common thread?

- A) Hosting location — on-premise services have more incidents.
- B) Database platform — all three high-incident services share Platform D1, while both D2 services had one incident each, and D1's association holds across both hosting types.
- C) Service size — bigger services have more incidents.
- D) Nothing — five services is too small a sample for any conclusion.

**Correct answer: B**

**Explanation:** Testing each candidate factor against the whole table: hosting (A) fails on Licensing, a cloud-hosted service with 5 major incidents that breaks the on-premise pattern. Platform (B) is consistent across every row — the three D1 services account for 18 of 20 major incidents, and the association survives the hosting split, appearing in both on-premise and cloud contexts, which is what distinguishes a candidate common cause from a confounded one. Service size (C) is not in the data at all. Option D mistakes investigation for conclusion — five services cannot prove causation, but **Problem management** requires forming the best-supported hypothesis and directing investigation at it. This is portfolio-level pattern work, **Service focus** in action: individual service teams each see their own incidents; only the principal sees the column that lines up.

**Question 2 (easy) — Deduction from contract and policy together**

A supplier contract states: "Scheduled maintenance requires 10 working days' notice to the customer." A department's policy states: "No supplier maintenance may occur during the last five working days of a financial quarter." The supplier emails notice on 20 March (a Monday) of maintenance planned for 3 April. The financial quarter ends 31 March. Assume all weekdays are working days. Which statement must be true?

- A) The maintenance breaches the contract's notice requirement.
- B) The maintenance breaches the departmental policy.
- C) The maintenance breaches neither the notice requirement nor the policy.
- D) The maintenance breaches both.

**Correct answer: C**

**Explanation:** Checking each rule independently: notice from Monday 20 March gives 9 clear working days before 3 April, with maintenance on the 10th — on the standard reading of "10 working days' notice", 3 April qualifies. Policy: the last five working days of the quarter are 27-31 March; the maintenance falls on 3 April, in the next quarter, so the policy is untouched. Hence C. The question's real lesson is the method: two rule sources, checked separately, against a carefully constructed calendar, with an honest flag where wording is ambiguous. Accountability for supplier management includes resolving such ambiguities in the contract's definitions section before they matter — what the strongest principals do with every "working days" clause they inherit.

**Question 3 (easy) — Error checking a compliance return**

A quarterly compliance return asserts: (i) "All 12 production applications have completed annual security review." (ii) "The register shows 11 applications with review dates within the last 12 months." (iii) "One application, LegacyPay, was decommissioned in month 10 of the reporting period." (iv) "LegacyPay's last review was 14 months ago." Which is the most accurate assessment of the return?

- A) Consistent: 11 current reviews plus one decommissioned application accounts for all 12.
- B) Inconsistent: if LegacyPay is one of the 12 production applications, statement (i) is false — its review is 14 months old; if it was decommissioned, it should not be counted among 12 *production* applications, making the totals wrong either way. The return needs its population defined before its claim can be true.
- C) Consistent, provided LegacyPay is excluded.
- D) The return is fine because decommissioned systems need no review.

**Correct answer: B**

**Explanation:** Chasing the arithmetic of the population: if the "12 production applications" includes LegacyPay, statement (i) is false against (iv)'s 14-month figure; if the 12 excludes LegacyPay, (ii)'s 11 current reviews leave one other application unaccounted for. Either reading breaks the return — the defect is an undefined population being asserted over. Option A performs the comforting but invalid arithmetic that mixes the two populations. Option C hides the missing twelfth application. Option D answers a different question. Managing service compliance and risk (**Asset and configuration management**) at principal level is largely refusing to sign aggregate claims until the population, the period, and the criterion are each pinned down, because a signature converts the return's ambiguity into an attestation.

**Question 4 (moderate) — Portfolio risk prioritisation**

Four risks compete for a candidate's remediation budget and attention this quarter:

1. R1: A supplier's platform goes end-of-support in 8 months; migration takes an estimated 6 months. Impact if unmanaged: unsupported production software for a citizen-facing service.
2. R2: A capacity shortfall projected to breach a KPI in 3 weeks on an internal reporting service; fix is a 2-week infrastructure change.
3. R3: A key-person dependency — only one engineer understands the payments integration; they have just resigned with 4 weeks' notice.
4. R4: An audit finding (due for management response in 6 weeks) about incomplete configuration records, no service impact yet observed.

Which ordering of initiation is most defensible?

- A) R2, R3, R1, R4 — start the capacity fix and knowledge transfer immediately in parallel, initiate the migration programme this quarter, schedule the audit response within its deadline
- B) R1, R2, R3, R4 — biggest impact first
- C) R4, R2, R3, R1 — audit findings carry reputational risk
- D) R3, R1, R4, R2 — people risks always dominate

**Correct answer: A**

**Explanation:** Ranking by decision urgency — the date by which failing to start makes the outcome materially worse — rather than by impact alone: R2's clock is shortest (a 2-week fix against a 3-week breach). R3's clock is nearly as hard and wholly unforgiving — every day of the departing engineer's notice not spent on structured knowledge transfer is unrecoverable, and it starts immediately, in parallel, since it consumes different resources than R2. R1 is the largest risk but has the longest runway — an 8-month horizon minus 6 months' migration leaves a 2-month decision window, so initiating the migration programme this quarter is adequate. R4 has a defined 6-week deadline and no current impact — scheduled, not scrambled. Option B confuses impact with urgency; option C promotes reputational discomfort over service reality; option D's absolutism leaves R2 to breach last. The pattern this item rewards: sequence by last responsible start date, run non-competing workstreams in parallel, reserve personal attention for items where accountability cannot be delegated.

**Question 5 (moderate) — Deduction across a technology roadmap**

Facts: (i) a strategic database platform will drop support for the legacy API the casework application uses, in its version 12, expected in two years; (ii) the casework application's modernisation to the new API is scoped at 15 months; (iii) the department mandates that production databases run supported platform versions within 12 months of release; (iv) platform version 11, retaining the legacy API, will be supported for three years after version 12 releases. What is the latest the casework modernisation can start while guaranteeing continuous compliance and support?

- A) Immediately — there is no slack.
- B) Within 9 months (a mislabelled restatement of the month-21 working below).
- C) Within 21 months: the mandate to run version 12 bites at month 36 (release at 24 + 12-month grace); modernisation takes 15 months; 36 − 15 = 21.
- D) Any time within 45 months, since version 11 is supported until month 60.

**Correct answer: C**

**Explanation:** Version 12 releases at month ~24. The departmental mandate requires production databases to be on the mandated-current version within 12 months of release, so the casework application must be off the legacy API by month 36. The modernisation takes 15 months, so its last safe start is month 36 − 15 = 21. Option D reads only the vendor's support horizon and misses that the department's own 12-month currency mandate bites first — the binding constraint on a strategy timeline is frequently internal policy, not vendor lifecycle. Option A overcorrects into false urgency. Option B reasons to the correct month but mislabels the conclusion — in assessments, an option whose working is right and whose stated conclusion mis-states it is still wrong. Owning the application strategy means intersecting vendor roadmaps with internal mandates, finding the earliest-binding constraint, and scheduling against it with the last responsible start date made explicit.

**Question 6 (moderate) — Error checking supplier performance data**

A supplier's quarterly service report claims: "Availability target (99.5%) met in all three months: April 99.6%, May 99.7%, June 99.6%. Quarterly availability: 99.63%. All 4 severity 1 incidents resolved within the 4-hour contractual target: resolution times 3.2h, 3.8h, 2.9h, and one incident excluded from calculation as customer-caused. Penalty position: no penalties due." A candidate's own records show the June "customer-caused" exclusion refers to an incident triggered by their team applying a configuration the supplier's own runbook specified. What is the soundest assessment?

- A) Accept the report — three resolution times beat the target and the availability figures are green.
- B) The availability figures may stand, but the excluded incident is disputed: if the configuration followed the supplier's own runbook, the "customer-caused" classification fails, the incident (duration unknown from this report) re-enters both the severity 1 resolution calculation and possibly the availability figures — challenge the exclusion with the runbook evidence before accepting the penalty position.
- C) Reject the whole report as unreliable.
- D) Accept the report but informally ask the supplier to be more careful with classifications.

**Correct answer: B**

**Explanation:** Locating exactly what the disputed fact contaminates: the "customer-caused" basis collapses if the customer's action implemented the supplier's own runbook — an instruction-following customer is the supplier's agent in most contractual readings. What follows is surgical: the fourth incident re-enters the severity 1 resolution dataset, its duration may belong in June's availability arithmetic, and "no penalties due" inherits every one of those doubts. Option A accepts a conclusion built on a classification directly contradicted by evidence. Option C overcorrects — April and May are not implicated. Option D treats a possibly penalty-avoiding misclassification as an etiquette lapse. Accountability for supplier management means the challenge is formal, evidenced, and resolved before the penalty position is accepted — the skill is knowing exactly what a known-bad datum touches.

**Question 7 (moderate) — Framework reasoning at expert level**

An organisation is designing its operating model for a new shared-services group. Three design claims are on the table: (1) "Problem management should report through the incident management function, since problems come from incidents." (2) "Change enablement should sit with the delivery teams entirely, since they know their changes best." (3) "Continual improvement should be a standing capability with its own backlog, not a year-end exercise." Drawing on service management framework principles, which assessment is soundest?

- A) All three claims are sound.
- B) Claim 3 is sound; claim 1 conflates a data flow with a reporting line — problems draw on incident data but need independence to challenge recurring-incident tolerance, and many problems are identified proactively, not from incidents at all; claim 2 captures a real principle (decentralised change authority for low-risk changes) but overstates it — high-impact and cross-team changes still need co-ordination and standards that pure team autonomy cannot supply.
- C) Claims 1 and 2 are sound; claim 3 is bureaucratic.
- D) None of the claims is sound.

**Correct answer: B**

**Explanation:** Taking each claim on its merits: claim 1's error is structural — incident management's mission is fast restoration, problem management's mission is root-cause elimination, and the two trade off; subordinating problem management to incident management gives the restoration mission authority over the elimination mission, and problems are also anticipated proactively, with no incident parent at all. Claim 2 contains a genuine modern principle but "entirely" is where it breaks — cross-team impact and organisational risk appetite are not visible from inside any single delivery team, which is precisely why **Change management** exists for high-impact, complex changes. Claim 3 states the mature position. This item threads all three correctly, and the point — the **Service management framework knowledge** point — is that frameworks are bodies of reasoned practice: the expert can say why each structure exists, which lets them judge when a proposed deviation is innovation and when it is a category error.

**Question 8 (moderate) — Pattern in workforce data**

A team's skills matrix shows coverage (number of engineers able to support each system) and each system's strategic status:

| System | Engineers able to support | Strategic status |
|---|---|---|
| Case platform | 6 | Core, growing |
| Legacy payments | 2 | Migrating away, 3-year horizon |
| Grants service | 5 | Core, stable |
| Data exchange | 1 | Core, growing |
| Notifications | 4 | Core, stable |

Leading on resourcing and development, which finding demands action first, and what shape should the action take?

- A) Legacy payments (2 engineers) — hire two more payments specialists.
- B) Data exchange (1 engineer) — a single point of failure on a core, *growing* system: cross-train two engineers now via pairing and documented runbooks; for legacy payments, maintain coverage at 2 with succession awareness but do not invest in growth, since the system is leaving the estate.
- C) Case platform — its 6 engineers are over-provisioned; redeploy them.
- D) All systems need more coverage; request budget for five hires.

**Correct answer: B**

**Explanation:** Reading the two columns together, since coverage numbers mean nothing without strategic direction: data exchange combines the worst coverage (a bus-factor of one) with the worst possible status for that coverage (core and growing — demand will rise, and one absence makes the system unsupportable). It acts first, and cross-training with documented runbooks converts existing capacity faster and cheaper than hiring. Legacy payments looks like the same problem numerically, but the strategic column inverts the response — investing specialist growth in a system with a 3-year exit horizon buys depreciating capability; maintain-and-monitor is right, with migration as the true remedy. Option A makes the inverted investment. Option C misreads healthy coverage on the estate's biggest growing platform as waste. Option D converts a prioritisation question into an undifferentiated budget request. Resourcing leadership means skills coverage is priced against the strategy, not against headcount symmetry.

**Question 9 (hard) — Multi-constraint strategy sequencing**

A five-year application strategy must sequence four programmes: (P1) migrate the casework database to the strategic platform — 18 months, requires the data exchange modernisation (P2) to be complete first; (P2) data exchange modernisation — 12 months; (P3) supplier transition for hosting — 12 months, cannot overlap with P1's migration (both consume the same operations capacity), and the incumbent hosting contract expires at month 42 with a one-time 12-month extension available at a 40% cost premium; (P4) reporting consolidation — 9 months, can run any time after P2, alongside anything. Programmes start only at quarter boundaries (months 0, 3, 6...). What is the optimal sequence that avoids the contract extension premium?

- A) P2 (0-12), P1 (12-30), P3 (30-42), P4 (12-21)
- B) P2 (0-12), P3 (12-24), P1 (24-42), P4 (24-33)
- C) P3 (0-12), P2 (12-24), P1 (24-42), P4 (24-33)
- D) The premium is unavoidable; take the extension.

**Correct answer: B**

**Explanation:** Options C and D are eliminated first: C spends the earliest, least-constrained year on the hosting transition before the modernisation the critical chain depends on, ending up with identical P1/P4 timings to B but strictly worse sequencing risk; D pays 40% for a constraint feasible schedules satisfy. That leaves A and B, both mechanically feasible. The discriminator is where each schedule puts its slack: option A parks the hosting transition flush against the contract cliff, completing P3 at month 42 with zero margin, so any overrun forces the premium the question asks to be avoided. Option B banks the hosting transition early, leaving 18 months of margin against the only constraint with a price tag, and accepts the casework migration completing at the strategy horizon — a slip there costs schedule, not money. Mechanical feasibility is the entry ticket, not the answer: when several schedules satisfy the letter of the constraints, put slack against the constraint whose breach costs money or law.

**Question 10 (hard) — Anticipating a problem from three trend lines**

Three independent trends cross a candidate's desk in the same month: (a) the data exchange service's message volumes are growing 8% per quarter; (b) its 95th-percentile processing latency has crept from 1.2s to 1.9s over four quarters; (c) the downstream casework service has begun timing out intermittently on exchange calls, with timeouts set at 2.0s. No incident has been declared. What is the most complete reading?

- A) Three separate observations for three separate teams' backlogs.
- B) A compound problem completing itself: volume growth is driving latency growth toward the downstream timeout threshold — at current trajectory the 95th percentile crosses 2.0s within a quarter, converting intermittent timeouts into systematic failure; this warrants problem-record creation now, co-ordinated investigation (is latency growth linear with volume, or worsening?), capacity remediation on the exchange, and a co-ordinated review of downstream timeout/retry policies — before it becomes the major incident it is currently rehearsing.
- C) The casework team should simply raise its timeout to 3 seconds.
- D) Wait for a declared incident to establish impact before acting.

**Correct answer: B**

**Explanation:** Connecting the trends into a mechanism: rising volume plausibly drives rising latency, and latency's 95th percentile at 1.9s against a 2.0s downstream timeout explains the intermittent failures arithmetically. Extrapolating honestly, the 95th percentile crosses the threshold within a quarter, at which point "intermittent" becomes "systematic". This item is the **Problem management** and **Availability and capacity management** skills rendered as a checklist: anticipate, co-ordinate investigation, implement solutions, take preventative measures. Option A shatters a compound mechanism across three backlogs where no one owns the interaction — the precise failure **Service focus** exists to prevent. Option C treats one symptom, masking the underlying growth problem. Option D waits for the harm to purchase the evidence, inverting the entire proactive premise of principal-level ownership.

**Question 11 (hard) — Vendor lock-in reasoning**

A strategy must choose between two paths for a critical application suite: Path L — deepen use of the incumbent supplier's proprietary platform features (20% cheaper to run, faster feature delivery, but each adopted proprietary feature raises exit costs; current estimated exit cost £2m, rising ~£0.5m per year of deepening); Path N — re-platform onto open standards over two years (£3m programme cost, run-costs equal to today's, exit costs thereafter near zero). The supplier's contract renews in three years. Departmental guidance requires "demonstrable supplier exit viability" at each renewal. Which analysis is soundest?

- A) Path L — 20% cheaper is decisive; exit viability is a paper exercise.
- B) Path N — lock-in must always be eliminated regardless of cost.
- C) The decision hinges on the renewal test: under Path L, exit cost at renewal is ~£3.5m and rising, weakening negotiating position and possibly failing the exit-viability requirement — the run-cost saving is partly a lock-in premium being banked by the supplier against renewal; under Path N, £3m spent once buys exit viability, negotiating leverage at renewal, and flat exit costs. Model the renewal negotiation explicitly: if Path L's weakened position concedes even 10-15% at renewal, its run-cost advantage largely evaporates — and Path L fails the guidance as written. Path N, or a hybrid that caps proprietary adoption at reversible features, is the defensible strategy.
- D) Defer the decision to the renewal point in three years.

**Correct answer: C**

**Explanation:** Path L's economics are not static: its 20% saving is priced by the supplier who collects the exit costs, and £0.5m/year of exit-cost growth is negotiating leverage handed across the table at renewal. Option C models the decision where it will actually be decided — the renewal negotiation — and the departmental exit-viability requirement is failed by construction. Path N's £3m converts into compliance, leverage, and optionality, including the option to stay with the incumbent at a fairly negotiated price. Option A dismisses as paperwork the exact clause vendor accountability answers to. Option B is ideology — lock-in is a cost to be priced, not a sin to be purged at any price, which is why the hybrid clause belongs in the answer. Option D is Path L by default, wearing neutrality. Understanding future technology direction (**Technical specialism**) at this level includes understanding the commercial trajectory of technology choices.

**Question 12 (hard) — Auditing a plausible analysis**

A capable lead on a candidate's team submits an analysis: "Our incident reviews show 70% of major incidents involve a change made in the previous 72 hours. Conclusion: changes are our dominant incident cause. Recommendation: halve our change frequency to reduce major incidents by up to a third." The lead's figures are accurate. As the principal auditing this reasoning before it reaches governance, what is the soundest response?

- A) Endorse it — the correlation is strong and the recommendation flows from it.
- B) The 70% is uninterpretable without a base rate: if changes occur so frequently that 70% of *all* 72-hour windows contain a recent change, then major incidents are no more change-associated than random days — the analysis needs the comparison rate and a causal read of the actual incident reviews; separately, halving change frequency has known perverse effects — larger, rarer changes carry more risk each — so even a confirmed causal link would point at change *quality* (smaller batches, better testing, staged rollout), not change *scarcity*. Return the analysis with those two questions, and credit the lead's initiative while teaching the method.
- C) Reject the analysis — correlation is not causation, so nothing can be concluded.
- D) Endorse the conclusion but soften the recommendation to a 25% change reduction.

**Correct answer: B**

**Explanation:** Two distinct flaws, each fatal alone. The evidential flaw: "70% follow changes" is meaningless without the base rate — in an estate deploying daily, virtually every 72-hour window contains a change, so 70% could be below baseline. The remedial flaw: even granting causation, frequency-halving forces batching — larger changesets, more concurrent risk, less rehearsed rollback — the well-documented failure mode of change-scarcity regimes; mature practice targets change quality and size, not count. Option A forwards both flaws to governance under endorsement. Option C wields "correlation is not causation" as a thought-terminator rather than an invitation to investigate. Option D negotiates the number while inheriting the flawed logic. Option B does what the role uniquely owes this moment: protects governance from confident error, improves the analysis rather than merely grading it, and develops the lead by returning questions rather than verdicts.

### Administration tips

- **Watch for base-rate interrogation** (Questions 3 and 12) — asking for the comparison rate before crediting a correlation is one of the highest-yield habits at this level.
- **Score sequencing items (Questions 4, 9) for the reasoning about margin**, not just the final schedule — where a candidate chooses to put slack is highly diagnostic.
- **Note whether a candidate checks both rule sources** in dual-constraint deduction items (Questions 2 and 5) rather than settling for the first that resolves.
- **Keep timing consistent** across candidates for this level.
- **Use the audit item (Question 12) as debrief material** — asking a candidate how they would actually phrase the return-with-questions response often reveals more than the multiple-choice answer.

### Common pitfalls to watch for when scoring

- **Ranking by impact instead of decision urgency.**
- **Reading only the vendor's clock**, missing that internal mandates or contract renewals bite first.
- **Accepting aggregate claims over undefined populations.**
- **Rewarding all-or-nothing framework judgements** over ones that separate a sound principle from its overstatement.
- **Treating remedies as automatically implied by diagnoses.**
- **Under-weighting a candidate's willingness to audit a capable colleague's flawed logic** rather than simply trusting the source.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and strategically a candidate works with the quantitative material a principal's decisions run on: multi-year cost models, supplier performance and penalty calculations, portfolio availability and risk figures, capacity investment cases, workforce and development budgets, and user outcome data. The arithmetic itself is deliberately standard; the principal-level content is in the modelling and the interpretation.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 data-based questions, calculators permitted, often presenting multiple data sources to reconcile.

Why does this matter for the role? At principal level these numbers move money and set direction. A supplier penalty calculated (or not) is real revenue; a capacity investment case signed shapes next year's budget; an availability commitment in a strategy becomes a successor's KPI; a resourcing model determines who gets hired and developed. Every item below uses data of the kind this estate genuinely produces, and every explanation shows the arithmetic step by step for your reference when scoring.

### What it measures for the role

- **Contract and penalty arithmetic** maps to vendor and supplier management accountability.
- **Capacity and investment modelling** maps to **Availability and capacity management** and **Technical specialism**.
- **Portfolio performance figures** map to **Service focus** and **Asset and configuration management**.
- **Resourcing and development numbers** map to resourcing, learning and development leadership.
- **Test and risk figures** map to **Testing**.
- **User outcome data** maps to **User focus**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Service credit calculation**

A supplier contract provides: "For each month availability falls below 99.5%, a service credit of 5% of that month's charge applies; below 99.0%, the credit is 12%." Monthly charge: £80,000. This quarter's availability: April 99.7%, May 99.2%, June 98.8%. What total service credit is due?

- A) £4,000
- B) £13,600
- C) £9,600
- D) £16,000

**Correct answer: B**

**Explanation:** April: at or above 99.5%, no credit. May: below 99.5% but not below 99.0% — 5% of £80,000 = £4,000. June: below 99.0% — 12% of £80,000 = £9,600. Total £13,600. Note the schedule's structure — the 12% band replaces the 5% band rather than stacking, the conventional reading; if a real contract's wording is ambiguous on stacking, that is a definitions conversation to have before a bad month.

**Question 2 (easy) — Cost per transaction across the portfolio**

Two services process citizen applications. Service A costs £1.2m per year and processed 400,000 applications. Service B costs £450,000 per year and processed 90,000 applications. Which has the lower cost per transaction, and what are the figures?

- A) Service A: £3.00 versus Service B's £5.00
- B) Service B: £2.00 versus Service A's £4.44
- C) Service A: £30 versus Service B's £50
- D) They are equal at £3.00

**Correct answer: A**

**Explanation:** Service A: £1,200,000 ÷ 400,000 = £3.00 per application. Service B: £450,000 ÷ 90,000 = £5.00. Service A is markedly cheaper per transaction despite the larger total budget — absolute cost and unit cost rank differently. Option C misplaces a decimal by a factor of ten. This is **Service focus** arithmetic: knowing what each service's output actually costs before judging whether a unit-cost difference is efficiency or a scope difference.

**Question 3 (easy) — Training budget allocation**

A learning and development budget is £60,000 for a team of 15 engineers. A candidate has committed: £1,400 per engineer for core professional development (all 15), plus a service management expert-certification programme at £3,500 each for 4 engineers, plus a £6,000 team-wide incident-leadership workshop. How much remains unallocated?

- A) £19,000
- B) £13,000
- C) £25,000
- D) £7,000

**Correct answer: A**

**Explanation:** Core development: 15 × £1,400 = £21,000. Certifications: 4 × £3,500 = £14,000. Workshop: £6,000. Total: £41,000. Remaining: £60,000 − £41,000 = £19,000. The management content behind the arithmetic: an unallocated 32% is in-year flexibility for emerging needs — cross-training, a departing specialist's knowledge capture. Holding this arithmetic live through the year, rather than fully committing in January or under-spending by December, is what development leadership looks like.

**Question 4 (moderate) — Comparing contract pricing structures**

Two suppliers bid for a five-year hosting contract. Supplier X: £900,000 per year, flat. Supplier Y: £700,000 in year 1, rising 8% per year thereafter. Which supplier is cheaper over the full five years, and by roughly how much?

- A) Supplier Y, by about £394,000
- B) Supplier X, by about £150,000
- C) Supplier Y, by about £893,000
- D) They are within £20,000 of each other

**Correct answer: A**

**Explanation:** Supplier X: 5 × £900,000 = £4,500,000. Supplier Y compounds: £700,000; £756,000; £816,480; £881,798; £952,342 — total £4,106,620. Difference ≈ £393,380, Supplier Y cheaper. Two observations complete the analysis: Y's year-5 price has already crossed above X's flat rate, so a five-year win becomes a year-6 loss if the escalator survives renewal — the crossover is a negotiating datum, worth capping the escalator or pricing the year-6 exposure now.

**Question 5 (moderate) — Availability aggregation across a service chain**

A citizen journey depends on three services in series: identity (99.9% available), casework (99.5%), and notifications (99.8%). Assuming independent failures, what is the end-to-end availability of the journey, and what does it imply?

- A) 99.5% — the chain is as available as its weakest link, no better and no worse.
- B) About 99.2% — availabilities in series multiply (0.999 × 0.995 × 0.998 ≈ 0.9920), so the journey is *less* available than its weakest component, and end-to-end targets cannot simply be inherited from component targets.
- C) 99.73% — the average of the three figures.
- D) 99.9% — the strongest component protects the chain.

**Correct answer: B**

**Explanation:** Series availability multiplies: 0.999 × 0.995 × 0.998 ≈ 0.992, roughly 99.2%. The journey fails if any component fails, so the chain is strictly weaker than its weakest link — option A's "no worse" is the seductive error. The strategic implication: if a 99.5% end-to-end target is set, no component may be as weak as 99.5%, which is exactly the kind of standards-setting **Availability and capacity management** requires. Users experience the product of the components, not the best of them — why a principal, not any single service team, must own the end-to-end number.

**Question 6 (moderate) — Capacity investment options**

A growing service needs capacity. Current infrastructure handles 100,000 daily transactions; demand is 80,000 today, growing 20% per year (compounding). Option 1: incremental upgrades at £150,000 now, adding 50% capacity (to 150,000). Option 2: re-architecture at £600,000, taking one year, after which capacity is effectively unconstrained for the planning horizon. When does demand exhaust each option's capacity, and which investment does the arithmetic favour for a five-year horizon?

- A) Option 1 exhausts in year 5; Option 1 suffices for the horizon.
- B) Demand hits 100,000 within ~1.2 years and 150,000 within ~3.5 years; Option 1 buys only ~2 more years, so within the five-year horizon Option 1 would be paid for *and then* Option 2 would still be needed — total £750,000; starting Option 2 now (£600,000, ready inside the ~1.2-year runway) is cheaper overall and avoids a double migration.
- C) Option 2 is always better regardless of numbers.
- D) Demand never reaches 150,000 in five years, so Option 1 wins.

**Correct answer: B**

**Explanation:** Projecting demand: 96,000 (year 1), 115,200, 138,240, 165,888, 199,066 (year 5). Current capacity is exceeded around year 1.2; Option 1's 150,000 around year 3.5. Option 1 buys about 2.3 extra years, after which — still inside the horizon — the re-architecture becomes necessary anyway: total spend £750,000 plus two migrations' disruption. Option 2 started now costs £600,000 once. The arithmetic favours Option 2 — though option C's "always" is exactly what the working refuses to claim, since a lower growth rate would have favoured Option 1. This is **Availability and capacity management** at investment scale: interim fixes against compounding demand are frequently money spent to arrive at the same decision later, poorer.

**Question 7 (moderate) — Defect discovery economics**

Testing data across recent releases shows: defects found in development cost on average £400 to fix; defects found in system testing cost £2,100; defects found in production cost £13,500 (including incident response and rework). A proposed investment of £120,000 per year in earlier automated testing is projected to shift 60 defects per year from production discovery to development discovery, and a further 40 from system-test discovery to development discovery. What is the projected annual net benefit?

- A) £666,000
- B) £854,000
- C) £734,000
- D) £546,000

**Correct answer: C**

**Explanation:** Valuing each shift by its cost difference: production-to-development, 60 × (£13,500 − £400) = £786,000; system-test-to-development, 40 × (£2,100 − £400) = £68,000. Gross benefit £854,000 (option B, forgetting the investment). Net of the £120,000 investment: £734,000. This is the business case for the **Testing** skill's risk-management clause — argued qualitatively it loses to this year's feature list; argued as £734,000 a year it wins. A robust paper also states its assumptions' fragility with a sensitivity line.

**Question 8 (moderate) — Supplier performance trend with a definitions change**

A supplier's monthly report shows first-time-fix rates: Jan 71%, Feb 72%, Mar 74%, Apr 81%, May 82%, Jun 83%. A footnote on April's report states: "From April, first-time-fix excludes tickets requiring customer information, per agreed definition change." What can validly be concluded about the supplier's underlying performance improvement?

- A) Performance improved by 12 percentage points over the half year.
- B) The January-March trend shows modest genuine improvement (+3 points); the April jump (+7 points) coincides with the definition change and cannot be attributed to performance without recomputing April-June on the old definition — request the like-for-like series before crediting the improvement.
- C) Performance has not improved at all; the definition change explains everything.
- D) The definition change is irrelevant since it was agreed.

**Correct answer: B**

**Explanation:** Partitioning at the discontinuity: Jan-Mar under one definition shows a real +3-point drift; the April jump coincides exactly with a denominator change that plausibly excludes a category enriched in non-first-time fixes; Apr-Jun under the new definition shows a real +2-point drift. The defensible conclusions are modest genuine improvement within each regime and an unquantified discontinuity between them. Option A reads across the discontinuity as performance. Option D confuses agreeing a definition change with agreeing to blur history. Vendor accountability is substantially the discipline of never letting a metric's definition move without its history moving with it.

**Question 9 (hard) — Penalty threshold edge case**

A contract states: "If severity 1 incident count exceeds 6 in any rolling 3-month window, a performance review is triggered; if the count exceeds 6 in two consecutive rolling windows, a 10% service credit applies to the third month's charge." Monthly severity 1 counts: Jan 2, Feb 3, Mar 2, Apr 1, May 4, Jun 3. Monthly charge £90,000. Which windows trigger, and what credit applies?

- A) No window exceeds 6; no trigger, no credit.
- B) Jan-Mar (7) triggers a review; Feb-Apr (6) does not exceed 6; no consecutive breach on that pairing.
- C) Jan-Mar (7) and Feb-Apr (6) both breach; £9,000 credit.
- D) Jan-Mar (7), Apr-Jun (8) both breach; £9,000 credit.

**Correct answer: B**

**Explanation:** Computing every rolling window: Jan-Mar = 7 (breach), Feb-Apr = 6 (not a breach, since "exceeds" is strictly greater than), Mar-May = 7 (breach), Apr-Jun = 8 (breach). Options C and D assert false window arithmetic outright. B is the best-supported listed answer, correctly identifying the Jan-Mar trigger and correctly rejecting Feb-Apr — though a full rolling analysis reveals Mar-May and Apr-Jun are themselves consecutive and both breach, which no option offers, exposing that the clause never defines whether "consecutive" means consecutive rolling windows or consecutive calendar quarters. Choose the option whose stated reasoning contains no error. In real contracts, "rolling window", "consecutive", and "exceeds" each need definitions with worked examples in the schedule, because the difference between readings is real money and an avoidable argument during an incident review.

**Question 10 (hard) — Cost of attrition versus development investment**

A 15-engineer team has averaged 20% annual attrition. Each departure costs an estimated £45,000 (recruitment, onboarding, and six months of reduced productivity). An engagement-and-development programme costing £75,000 per year is projected to reduce attrition to 12%. What is the projected annual net saving, and what is the soundest framing of the case?

- A) Net saving £33,000 per year (an inconsistent restatement of the direct arithmetic below).
- B) Direct arithmetic: 20% of 15 = 3.0 departures; 12% of 15 = 1.8; the 1.2 avoided departures save 1.2 × £45,000 = £54,000 against £75,000 — a direct net cost of £21,000 — so the case must rest honestly on the benefits the model excludes: retained tacit knowledge, team stability, reduced key-person risk, and delivery continuity; present it as "£21,000 net cost buys these named risk reductions", not as a cash-positive case.
- C) Net saving £54,000 — the programme pays for itself.
- D) Attrition figures are too uncertain to model; decide on instinct.

**Correct answer: B**

**Explanation:** 3.0 expected departures minus 1.8 gives 1.2 avoided, worth £54,000 against £75,000 cost — a direct net cost of £21,000. Option C stops at the gross saving. Option A performs the same arithmetic and draws the falsely decisive conclusion of rejection, as if £45,000 captured a departure's full price, which it explicitly does not — it prices recruitment and ramp-up, not walked-out-the-door knowledge or churn-begets-churn dynamics. Option B runs the honest arithmetic, loses the narrow cash argument, and makes the real argument on named, ownable grounds. Option D abandons quantification because it is incomplete, when incomplete models still bound decisions usefully. Leading on resourcing means never torturing a people-case into cash-positivity — name the premium, name what it buys, and let governance decide with true numbers.

**Question 11 (hard) — User outcome data for a strategy decision**

Two services deliver a similar citizen outcome. A strategy must pick one as the target platform. Data: Service P — 240,000 users/year, 78% task completion, 4.1/5 satisfaction (survey n=8,200), and completion has risen 2 points/year for three years. Service Q — 60,000 users/year, 85% task completion, 4.4/5 satisfaction (survey n=310), completion flat for three years. A stakeholder argues: "Q outperforms P on both completion and satisfaction — consolidate onto Q." What is the soundest analytical response?

- A) The stakeholder is right: 85% beats 78% and 4.4 beats 4.1.
- B) Q's headline figures lead, but the decision needs three corrections first: (1) scale — P serves 4× the users, so per-year, P completes ~187,200 tasks versus Q's 51,000, and P's failures (52,800) dwarf Q's user base; consolidation means Q's design absorbing 4× its current load, an untested claim; (2) trajectory — P is improving 2 points/year while Q is flat, so the gap (7 points) closes within ~4 years on trend; (3) evidence weight — Q's satisfaction rests on n=310 (0.5% of its users) versus P's n=8,200; the Q figure carries far more sampling uncertainty and plausible self-selection. The right next step is a structured comparison: task-level analysis of *why* P's 22% fail, and load-realistic evaluation of Q — before either platform is anointed.
- C) Consolidate onto P immediately, since it is bigger.
- D) Run both indefinitely to preserve choice.

**Correct answer: B**

**Explanation:** Each correction is decision-relevant. Scale: consolidation is a volume event, and Q has never been tested within an order of magnitude of the load it would inherit. Trajectory: strategy decisions bind for years, and a 7-point gap closing at 2 points a year vanishes inside the consolidation programme's own delivery window. Evidence weight: n=310 self-selected respondents from 60,000 users is an indication, not a measurement to bet a platform on. Option A takes headline numbers at face value; option C replaces one unexamined heuristic with another; option D concedes the strategy's job, which is to decide. This is what **User focus**'s quantitative and qualitative data fluency looks like when the user story is about to be consolidated.

**Question 12 (hard) — Reading a portfolio dashboard honestly**

A portfolio dashboard summarises the year: total incidents down 18%; mean time to restore down from 4.1h to 3.2h; change success rate up from 91% to 96%; availability up in four services of five. The fifth service — the data exchange — shows: incidents up 40% (from 10 to 14), availability down from 99.9% to 99.6%, and it now sits on the critical path of three other services' user journeys. The governance summary is due. What is the soundest headline?

- A) "Portfolio performance improved across all major indicators" — the aggregates support it.
- B) "Portfolio performance improved on every aggregate measure; however, the data exchange service deteriorated materially (incidents +40%, availability 99.9% → 99.6%) and, because three user journeys now depend on it, its 0.3-point availability fall degrades the end-to-end experience of most of the portfolio's users — remediation is the year's priority investment despite the green aggregates."
- C) "Mixed results this year; some services improved, others declined."
- D) "The data exchange decline shows the portfolio is failing; the aggregate improvements are not meaningful."

**Correct answer: B**

**Explanation:** The aggregates are genuinely good and genuinely misleading. Recalling the series-availability multiplication from Question 5, a 0.3-point fall in a component that three journeys traverse degrades every one of those journeys' end-to-end availability by roughly the same amount, so the portfolio's users experience the fifth service's decline far more than the four services' improvements — weight by user exposure, not by service count. Option A is true of the aggregates and false of the user experience. Option C conveys no structure, no priority, no decision. Option D discards real improvement to dramatise the exception. Option B credits the aggregates, quantifies the exception, explains the critical-path mechanism, and converts the conclusion into an investment priority — a numeric skill worth scoring highly, because the numbers' final form is a sentence with a decision in it.

### Administration tips

- **Watch for two-effect and multi-source reconciliation** (Questions 4, 6, 8, 9) — a candidate who reconciles a contract clause with a dataset, or partitions at a discontinuity before drawing a conclusion, is showing real principal-level numeracy.
- **Score business-case items (Questions 7, 10) for honesty about what the direct arithmetic does and does not support.**
- **Note whether a candidate weights by user exposure rather than by aggregate** in the portfolio dashboard item (Question 12).
- **Keep timing consistent** across candidates for this level.
- **Use the explanations to debrief on real reporting and contract practice.**

### Common pitfalls to watch for when scoring

- **Signing gross numbers** — benefits without costs, savings without investments.
- **Comparing across a definitions change** without partitioning first.
- **Trusting percentages divorced from volumes.**
- **Letting aggregates absolve exceptions** on a critical-path component.
- **Rewarding cash-positive framing of a people-case that the direct arithmetic does not support.**
- **Missing edge cases the contract or clause has not defined**, and accepting confident arithmetic built on an unresolved ambiguity.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate extracts meaning, obligation, and implication from the binding and consequential text this role runs on: contracts and schedules, departmental mandates, strategy papers, audit reports, governance submissions, and supplier correspondence. The core format presents a passage followed by statements to classify as **True**, **False**, or **Cannot say**; complementary formats test inference, best-summary judgement, and the evaluation of written argument and drafting quality.

The typical format is an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages, often with senior norm groups. The discipline — answer from the passage alone — is hardest for the most experienced readers, and that is by design: this section detects whether the candidate reads the instant document or their priors about documents like it.

Why does this matter for the role? Principal-level work is substantially the production and consumption of consequential text — a strategy others will execute from its words, supplier relationships that live in schedules and definitions, audits where the difference between "we accept the finding" and "we accept the recommendation" is material, and governance papers that constitute an organisation's understanding of its own estate. The passages below reflect the role's genuine document diet.

### What it measures for the role

- **Contractual precision** maps to vendor and supplier management accountability.
- **Audit and compliance comprehension** maps to **Asset and configuration management**.
- **Strategy and mandate reading** maps to **Technical specialism** and **Service focus**.
- **Framework definitional fluency** maps to **Service management framework knowledge**.
- **Inference discipline** maps to **Problem management** and **Incident management**.
- **Writing and argument judgement** maps to strategy ownership and **User focus** advocacy.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 — Supplier contract schedule extract**

*"Schedule 4, clause 7: The Supplier shall resolve severity 1 incidents within four hours of notification. Time consumed awaiting information that the Supplier has reasonably requested from the Customer shall be excluded from the resolution time calculation ('the clock is stopped'). The Supplier shall notify the Customer in writing when the clock is stopped and when it resumes. Failure to meet the resolution target in any calendar month triggers service credits per Schedule 5, save where the failure arises from a Force Majeure Event or from defects in Customer-provided infrastructure. The Supplier's obligation under this clause is conditional on the Customer maintaining the notification contact register in accordance with clause 12. For the avoidance of doubt, resolution means restoration of service to users; it does not require root cause remediation, which is addressed in clause 8."*

**Question 1 (easy) — True, false, or cannot say**

Statement: "The supplier must fix the root cause of a severity 1 incident within four hours."

- A) True
- B) False
- C) Cannot say
- D) True, unless the clock is stopped

**Correct answer: B**

**Explanation:** The clause's final sentence resolves it explicitly: resolution means restoration, not root cause remediation, which is addressed in clause 8. The statement is contradicted. Option D grafts the clock-stop mechanism onto a misread obligation. Reading definitions before obligations is the first rule of contract comprehension: a customer who believes four hours buys root cause will misread compliant supplier behaviour as breach, or fail to chase clause 8's separate remediation obligations.

**Question 2 (easy) — True, false, or cannot say**

Statement: "If the customer's notification contact register is out of date, the supplier may not be bound by the four-hour resolution obligation."

- A) True
- B) False
- C) Cannot say
- D) False — supplier obligations cannot depend on customer behaviour

**Correct answer: A**

**Explanation:** The clause states the supplier's obligation is conditional on the customer maintaining the contact register. A conditional obligation lapses, or is at least disputable, when its condition fails — True, and the cautious "may not be bound" matches the conditionality precisely. Option D asserts a principle contracts flatly refute daily. The operational moral: buried customer obligations are a candidate's own compliance surface, worth inventorying at signature rather than discovering from a supplier's rejection letter.

**Question 3 (moderate) — True, false, or cannot say**

Statement: "A severity 1 incident that took six clock-hours to resolve, including two hours awaiting information the supplier had reasonably requested from the customer, meets the contractual target."

- A) True
- B) False
- C) Cannot say
- D) False — six hours exceeds four hours

**Correct answer: C**

**Explanation:** Six clock-hours minus two excluded hours gives four counted hours against a "within four hours" target — met, on the conventional boundary reading. But the passage also requires written notification when the clock is stopped and resumes, and the statement is silent on whether that happened. If notification is a precondition of the exclusion, an unnotified clock-stop may not count; if it is a freestanding duty, the target is still met. The passage does not settle which reading governs, so the answer is Cannot say. Option D ignores the exclusion mechanism entirely. This is the highest verbal discipline: recognising when a confident-sounding calculation rests on facts the text has not supplied.

**Question 4 (moderate) — Inference from the schedule**

Which one of the following can properly be inferred from the passage?

- A) Service credits are calculated as a percentage of monthly charges.
- B) The contract's architecture separates restoration (clause 7) from root cause remediation (clause 8) and prices only restoration failures through Schedule 5's credits — so persistent root-cause neglect would need to be pursued through clause 8's own mechanisms, whatever they are, rather than through this clause's credits.
- C) Force Majeure Events are defined in Schedule 4.
- D) The supplier has previously failed to meet the four-hour target.

**Correct answer: B**

**Explanation:** Option B assembles only what the passage states — resolution excludes root cause; credits attach to resolution-target failures; root cause lives in clause 8 — into the structural consequence those facts compel: this clause's financial teeth bite restoration failures only. That is inference done properly: architecture from stated parts, no imported facts. Option A invents the credit mechanism's shape. Option C invents a definition's location. Option D invents history. Reading a contract as an architecture of incentives, not a list of promises, is the principal-level version of this skill.

**Passage 2 — Internal audit extract and management response**

*"Finding 3 (Moderate): Of 40 sampled production changes, 37 had complete approval records. Three changes, all emergency changes implemented by the applications team during major incidents, lacked evidence of retrospective approval within the required five working days; approvals were recorded 8, 11 and 15 working days after implementation respectively. We did not identify any adverse service impact from these three changes. The control design is adequate; the exception relates to operating effectiveness under incident conditions. Recommendation: implement a compensating checkpoint to ensure retrospective approvals are obtained within the required period following emergency changes. Management response (Principal Application Operations Engineer): Accepted. A weekly review of open emergency-change approvals will be added to the operations governance meeting from next month, with escalation to the service owner for any approval outstanding beyond five working days. Target date: end of Q2."*

**Question 5 (moderate) — True, false, or cannot say**

Statement: "The audit found that emergency changes caused service impact because approvals were late."

- A) True
- B) False
- C) Cannot say
- D) True — that is why the finding is rated Moderate

**Correct answer: B**

**Explanation:** The finding states the reverse: no adverse service impact was identified, and no causal chain from late approval to impact is asserted. Option D reasons backwards from the rating, but audit ratings price control weaknesses, not realised harm — a Moderate rating with zero observed impact is coherent. Reading audit language for what it establishes versus what it prices is a distinct comprehension register this item samples deliberately.

**Question 6 (moderate) — True, false, or cannot say**

Statement: "The audit concluded that the emergency change control is badly designed."

- A) True
- B) False
- C) Cannot say
- D) True — three failures in forty proves poor design

**Correct answer: B**

**Explanation:** The finding draws the distinction explicitly: control design is adequate; the exception relates to operating effectiveness under incident conditions. Option D commits the category error the distinction exists to prevent — failure frequency speaks to operation, not design, unless the failures trace to the control's structure. Management responses that misdiagnose effectiveness exceptions as design flaws buy expensive redesigns of adequate controls while the actual lapse — humans under incident pressure — goes unaddressed.

**Question 7 (hard) — Evaluating the management response**

Which is the most accurate critical assessment of the management response as drafted?

- A) It is inadequate because it does not prevent late approvals, only detects them.
- B) It is proportionate and answers the recommendation: a weekly review cycle detects any approval outstanding early in the five-working-day window and adds escalation force; however, two drafting gaps remain — a weekly cadence can leave an approval undetected for up to ~5 working days if the lapse begins just after a meeting (marginal against a five-day requirement), and the response names no owner for producing the open-approvals list, which is the operational step most likely to silently fail.
- C) It is excessive: three exceptions with no impact require no response.
- D) It is inadequate because the target date should be immediate.

**Correct answer: B**

**Explanation:** The recommendation asked for a compensating detective checkpoint, not prevention, so option A misreads the ask. Option C refuses an accepted Moderate finding without saying so. Option D manufactures urgency the finding does not carry. Option B's two residual criticisms are the genuinely expert content: the cadence arithmetic and the unnamed list-producer — governance meetings review what someone prepares, and unowned preparation is how compensating controls quietly die. Reading a candidate's own commitments as an auditor would is the drafting standard this item rehearses, on a document type a principal signs several times a year.

**Passage 3 — Strategy consultation exchange**

*"Extract from the draft application strategy: 'By 2030, the casework estate will consolidate from four applications to two, both cloud-hosted on the strategic platform. The consolidation is expected to reduce run costs by 30% and requires the completion of the data exchange modernisation as a precondition. Should the modernisation be delayed beyond 2027, the consolidation timeline will be re-baselined rather than compressed, as compression was assessed as carrying unacceptable delivery risk.'*

*Consultation comment from the Head of Casework Operations: 'The 30% figure is presented without a baseline year and without stating whether it is net of migration costs. My teams also note that the two retained applications are not named, which makes workforce planning impossible. We support consolidation in principle but cannot plan against this draft.'*

*Author's note appended to the draft: 'Baseline and cost treatment to be added in v0.9. Application selection follows the Q3 options analysis; naming them now would pre-empt it.'"*

**Question 8 (moderate) — True, false, or cannot say**

Statement: "If the data exchange modernisation slips to 2028, the strategy commits to compressing the consolidation schedule to hold the 2030 date."

- A) True
- B) False
- C) Cannot say
- D) True — 2030 is stated as a firm commitment

**Correct answer: B**

**Explanation:** The strategy pre-answers this exact contingency in the opposite direction: a delay beyond 2027 triggers re-baselining, not compression, because compression was assessed and rejected as carrying unacceptable delivery risk. Option D elevates the headline date over the document's own contingency clause — stakeholders remember dates and forget conditionality, then experience a re-baseline as a broken promise. A strategy that pre-decides its response to foreseeable slippage, and documents that compression was assessed and rejected, is the drafting standard a candidate's own papers should meet.

**Question 9 (hard) — True, false, or cannot say**

Statement: "The consultation comment disputes the value of consolidating the casework estate."

- A) True
- B) False
- C) Cannot say
- D) True — the comment says planning against the draft is impossible

**Correct answer: B**

**Explanation:** The comment explicitly states support for consolidation "in principle" and objects only to the draft's specification. Option D quotes the comment's strongest phrase while inverting its object. The distinction between challenge-to-substance and challenge-to-specification is among the most consequential a strategy owner can draw, because the two demand opposite responses, and treating a specification challenge as opposition is how consultations curdle.

**Question 10 (hard) — Inference from the exchange**

Which one of the following can properly be inferred from the exchange?

- A) The 30% run-cost reduction figure is wrong.
- B) The strategy's author has confused run costs with total costs.
- C) As drafted, the 30% claim is unverifiable and unauditable: without a baseline year and a stated cost treatment, no future reader can determine whether the reduction was achieved — so the figure currently functions as ambition, not measurement, and v0.9's additions are what will convert it into a testable commitment.
- D) The consolidation will save less than 30% once migration costs are included.

**Correct answer: C**

**Explanation:** Options A, B and D all assert facts about the true costs or the author's understanding on which the exchange is silent. What the exchange establishes is a property of the claim as drafted: unbaselined and without stated cost treatment, it cannot be verified by any future reader. Inference C states that property and its consequence without asserting anything the text withholds — the distinction between "the claim is false" and "the claim is not yet checkable" applies to claims a candidate would receive and claims they would make.

**Question 11 (hard) — Best summary of the exchange for a governance board**

Which option best summarises the consultation exchange for the strategy's governance board?

- A) "Casework operations opposes the consolidation strategy; resolution required."
- B) "Consultation feedback is being handled; no board attention needed."
- C) "Casework operations supports consolidation in principle. Their comment identifies two specification gaps: the 30% saving lacks a baseline and cost treatment (author will fix in v0.9), and the retained applications are unnamed (deliberately — selection follows Q3's options analysis, though this defers their workforce planning). Board attention: confirm the v0.9 additions land, and note that workforce planning remains blocked until the Q3 selection — a sequencing cost the board should consciously accept or accelerate."
- D) "The strategy draft contains errors in its savings figures which are being corrected."

**Correct answer: C**

**Explanation:** Option A misreports a supporter as an opponent. Option D converts "unverifiable as drafted" into "contains errors". Option B's failure is subtler — the exchange contains a genuine board-level trade-off that someone with authority should consciously own. Option C reports the support accurately, states both gaps with their handling, and converts the residue into explicit board asks. Summaries that end in named decisions are how principals use governance rather than merely report to it.

**Question 12 (hard) — Clear-writing judgement in strategy drafting**

The v0.9 revision must restate the savings claim properly. Which drafting best serves the strategy's readers?

- A) "The consolidation will deliver significant run-cost savings, currently estimated at approximately 30%, subject to detailed analysis and prevailing conditions."
- B) "Run costs for the four-application casework estate were £8.2m in FY2025-26 (baseline). Post-consolidation run costs are modelled at £5.7m per year (a 30% reduction against baseline) from the first full year after migration completes. This figure is gross of one-off migration costs, modelled at £3.1m and shown separately in Annex C; net cumulative saving becomes positive in year 3. Model assumptions and sensitivities: Annex C, section 2."
- C) "Savings of £2.5m per annum will be achieved."
- D) "The consolidation business case demonstrates compelling value for money across the appraisal period, in line with Green Book methodology."

**Correct answer: B**

**Explanation:** Applying the test Question 10 established — can a sceptical future reader verify the claim — only option B survives it: a named baseline, absolute and percentage figures, a timing convention, the gross/net distinction with migration cost located, a payback year, and a pointer to assumptions. Option A restates the ambition while armouring it against ever being tested. Option C states a verifiable number while deleting the context that makes it interpretable. Option D outsources the claim to a methodology's reputation. The drafting principle: write every quantified commitment so that a successor, an auditor, or a select committee can verify it from the document itself.

### Administration tips

- **Watch for how a candidate handles conditions on the other party's obligations** (Questions 2 and 3) — this maps directly to real contract negotiation and dispute handling.
- **Note the audit-vocabulary items (Questions 5 and 6) as strong discriminators** — design versus operating effectiveness is a distinction that recurs at every audit cycle in this role.
- **Score the substance-versus-specification sort** (Question 9) — a candidate who defaults to reading criticism as opposition is worth probing further at debrief.
- **Use the drafting item (Question 12) as a live discussion point.**
- **Time by passage, not by statement.**

### Common pitfalls to watch for when scoring

- **Answering from convention instead of the clause.**
- **Confusing rating with harm** in audit-reading items.
- **Quoting a comment against its own stated position.**
- **Completing calculations the text left incomplete**, rather than recognising Cannot say applies.
- **Reading ambition as commitment, or vice versa.**
- **Rewarding polished evasion over verifiable drafting.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to evaluate possible responses — most effective, least effective, or full rankings. At principal level, the scenario space shifts decisively toward the organisational: supplier relationships under strain, strategy under political pressure, integrity of governance information, development and succession of the leaders beneath them, and the long-term stewardship of culture, capability, and user outcomes. The options are rarely right-versus-wrong; they are competing goods, and the assessment measures which goods a candidate serves first, and how skilfully they serve several at once.

The typical format is 12 to 20 scenarios, untimed or generously timed, four responses each, scored against the pooled judgement of experienced senior practitioners and the organisation's professional behaviours: accountability, honesty, user focus, collaboration across boundaries, developing others, and proportionate use of authority and governance. Principal-level scoring discriminates hardest on three things: whether a candidate acts at the right altitude (systems and people, not tasks); whether their choices are durable (would this still look right in the post-incident review, the audit, the select committee?); and whether they build capability and trust as they act, or spend them.

As you score, notice the recurring anatomy of strong principal answers: they protect users and truth first; they act through systems, standards, and people rather than personal heroics; they keep governance informed at the moment information becomes decision-relevant; they treat suppliers and peers as long-term relationships governed by evidence; and they convert every crisis into capability. Weak answers protect appearances, hoard decisions, spend trust for convenience, or optimise the quarter at the decade's expense.

### What it measures for the role

- **Supplier crisis and negotiation scenarios** map to vendor and supplier management accountability.
- **Strategy-under-pressure scenarios** map to ownership of the application strategy and **Technical specialism**.
- **Governance and integrity scenarios** map to **Asset and configuration management** and **Change management**.
- **People and succession scenarios** map to resourcing, learning and development leadership.
- **Incident and problem command scenarios** map to **Incident management**, **Problem management**, and **Ownership and topic**.
- **User advocacy scenarios** map to **User focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The supplier's commercial escalation**

A supplier has missed its severity 1 resolution target three times this quarter; per the contract, £42,000 of service credits are due. The supplier's account director calls: "We're partners — invoking credits feels adversarial. We'd rather invest that amount in service improvements for you. Can we set the credits aside?" What is the most effective response?

- A) Waive the credits — the improvement investment is worth more than the cash, and the relationship matters.
- B) Apply the credits per the contract, and separately welcome an improvement plan on its own merits: state that credits are the contract's non-negotiable performance signal, that waiving them would misreport the quarter's performance in both organisations' records, and that a credible improvement plan is expected *in addition* — then review the plan's substance at the next service review.
- C) Split the difference: take half the credits.
- D) Escalate to commercial colleagues to terminate the relationship.

**Correct answer: B**

**Explanation:** The offer converts a certain, contractual entitlement into a discretionary, unspecified promise, while quietly removing the performance failure from both organisations' records. Option B refuses the conversion while accepting the genuinely good half — a supplier serious about improvement funds it anyway. Option A trades a successor's negotiating position for this quarter's warmth. Option C is the worst of both. Option D detonates a functioning relationship over a quarter the contract's own remedies are handling. Vendor accountability at this level is warm relationships, cold mechanisms, and the discipline never to let the first buy out the second.

**Question 2 (easy) — The strategy raid**

Mid-year, a director facing budget pressure proposes taking £400,000 from a candidate's funded application modernisation programme "just for this year — the legacy systems have run fine for a decade, one more year won't hurt". The modernisation exists because those legacy systems' supplier support ends in three years, and the programme's timeline already has only six months of margin. What is the most effective response?

- A) Concede — directors control budgets, and the programme can compress later.
- B) Refuse outright and copy the objection to the director's superior.
- C) Respond with the timeline arithmetic: the support cliff is fixed, the programme's six-month margin cannot absorb a year's delay, so the "one year" costs either an unsupported citizen-facing estate or an emergency-priced compression later; offer genuine alternatives if the budget pressure is real, and ask that any decision to accept the risk be made explicitly at the governance board that owns the strategy — with the risk quantified in the paper.
- D) Agree publicly but quietly slow other spending to protect the programme.

**Correct answer: C**

**Explanation:** The proposal reasons from past stability to future safety across a known future discontinuity. Option C re-prices the request truthfully, treats the director's budget problem as real by offering genuine alternatives, and routes the residual decision to the governance board that owns the strategy — because a director can legitimately accept a quantified risk, but explicitly and on the record. Option A concedes a falsely-priced request. Option B escalates before persuading. Option D is a covert honesty failure that, once discovered, validates every future raid. Strategy ownership means the strategy is defended with arithmetic, alternatives, and explicit governance, never with concession or concealment.

**Question 3 (moderate) — A lead's flawed governance paper**

A lead being developed by a candidate submits their first major governance paper — a capacity investment case — for review before Thursday's board. The technical analysis is strong, but the financial model contains an error that overstates the benefits by roughly 30%, and the paper's recommendation depends on the inflated figure. The lead has told colleagues how proud they are of the paper. What is the most effective response?

- A) Correct the model personally tonight and submit the fixed paper under their name — protecting their debut and the board's timetable.
- B) Return it to the lead directly: walk through the error together, let them rework the model and re-derive the recommendation (which may change), and — if the rework cannot make Thursday — have them request the deferral themselves; frame the episode privately as the normal price of doing consequential work, and note that the technical analysis is genuinely strong.
- C) Submit the paper as-is to protect their confidence, and correct the figures verbally at the board.
- D) Submit it as-is; a 30% benefits overstatement is within normal estimating uncertainty.

**Correct answer: B**

**Explanation:** Two duties converge: the board must receive true figures, and the lead must actually develop. Options C and D put a known-false figure into governance; D's "estimating uncertainty" defence fails because an identified error, once found and left in place, is a misrepresentation. Option A fixes the paper and silently steals the learning, leaving the lead unable to defend a model they did not build. Option B's mechanics — diagnosis walked through together, the rework and its consequences theirs, the framing generous — are the craft: standards held absolutely, people grown through their mistakes rather than around them.

**Question 4 (moderate) — The incident spanning a candidate's suppliers**

A major outage is forty minutes old. The application is down; the hosting supplier blames the database supplier's storage layer; the database supplier blames the hosting network. Each is technically credible, neither will commit engineering effort to the other's hypothesis, and the candidate's own team's lead is running the incident competently but cannot compel either supplier. Users — including an emergency casework unit — are down. What is the most effective response?

- A) Let the suppliers argue it out; the contract post-mortem will assign fault and costs afterwards.
- B) Join the incident personally at the co-ordination level: convene both suppliers' duty managers on one bridge, invoke each contract's major-incident co-operation clause, direct a joint diagnostic plan that tests both hypotheses in parallel rather than sequentially, keep the candidate's lead in tactical command, and open the stakeholder channel to the casework unit with honest status and a workaround if one exists.
- C) Take over tactical command from the lead — this is too big for them.
- D) Pick the more likely hypothesis personally and direct all effort at it to avoid splitting resources.

**Correct answer: B**

**Explanation:** What is actually failing is the inter-organisational layer, not the technical investigation — a failure mode only authority applied at the commercial-relationship level can unlock. Option B collapses the blame-by-correspondence game, invokes co-operation clauses by name, spends resources on parallel testing to buy time, and keeps the lead in tactical command while opening honest stakeholder communication. Option A treats attribution as the goal while users are down now. Option C decapitates competent tactical command to feel useful, when the gap is above the tactical layer. The principal's incident question is always which layer of the failure is theirs — and the answer is rarely the keyboard.

**Question 5 (moderate) — The compliance attestation**

The annual security compliance return is due in five days, requiring a candidate's attestation that all production applications meet the department's access-control standard. Their team's final checks reveal that one application — a low-traffic internal tool, but one processing citizen data — has a service account whose credentials have not rotated in three years, breaching the standard. Rotation requires a supplier change with a two-week lead time. The candidate's head of function mentions the department "expects clean returns this year". What is the most effective response?

- A) Attest cleanly — the gap will be fixed two weeks after the return, and one service account on an internal tool is immaterial.
- B) Attest cleanly but keep an internal note of the exception in case questions arise.
- C) Submit the return with the exception declared: the specific non-conformance, its risk assessment (citizen data — not immaterial, whatever the traffic), the remediation already initiated with its two-week date, and interim mitigations applied now; tell the head of function before submission that a clean return was available only as a false one.
- D) Delay the return until the rotation completes, then attest cleanly.

**Correct answer: C**

**Explanation:** Option A misprices the gap — "low-traffic internal tool" describes exposure likelihood while "citizen data" defines exposure consequence. Option B converts an error into a documented decision to misattest. Option D games the calendar, misrepresenting the estate as at the reporting date while also missing the deadline. Option C is what compliance regimes are for: a declared exception with risk assessment, initiated remediation, and interim mitigation is the system working, and a return with one honest exception is more credible than a suspiciously clean one. The conversation with the head of function belongs before submission, respecting their expectation while making the integrity boundary unmistakable.

**Question 6 (moderate) — Succession and the indispensable principal**

A candidate's head of function offers them a six-month secondment leading a cross-government programme — career-defining, starting in eight weeks. Honest stocktake: the candidate's deputy could cover strategy governance with support; their two leads can run operations; but supplier relationships live almost entirely in the candidate's head — undocumented, personally held, and mid-way through a difficult renewal. What is the most effective response?

- A) Decline the secondment — the renewal is too important to leave.
- B) Accept, and spend the eight weeks in intensive succession mode: document the supplier relationship history and strategy, bring the deputy into every renewal session as co-lead immediately, formally delegate decision authorities with written boundaries and escalation routes to the candidate (time-boxed and rare), and treat the remaining gaps as the development opportunities they are — telling the head of function honestly which risks remain and how they are mitigated.
- C) Accept and handle the renewal remotely, personally, during the secondment.
- D) Accept, and advise the deputy to pause the renewal until the candidate returns.

**Correct answer: B**

**Explanation:** Supplier relationships living entirely in one person's head is a pre-existing organisational defect the secondment merely exposes — a bus-factor problem. Option A preserves the defect while sacrificing the opportunity. Option B is succession leadership under a deadline: documentation converts personal capital into organisational capital, co-leading live sessions transfers relationships themselves rather than just records, and written authority boundaries give the deputy real power with a safety valve. Option C guarantees a distracted programme and a stunted deputy. Option D hands a counterpart's commercial team a gift of drift. Resourcing and development leadership includes the hardest case: developing a candidate's own replacement, on purpose, ahead of need.

**Question 7 (moderate) — Least effective: the user research a candidate's strategy dislikes**

Commissioned user research on a candidate's flagship consolidated service returns findings that complicate their strategy: two user groups experience materially worse task completion on the strategic platform than on the legacy system it replaces, though overall averages improved. The research is methodologically sound. The strategy refresh is due at the board next month. Which response is LEAST effective?

- A) Publish the findings internally as delivered, and commission targeted analysis of the two groups' task failures to inform remediation options in the strategy refresh.
- B) Present the findings at the board alongside the refresh: overall improvement, two groups worse off, remediation funded in the plan — letting the strategy absorb the evidence visibly.
- C) Ask the research team to reframe the report around the improved averages, moving the two groups' results to an annex, so the findings do not "distract" the board from the strategy's momentum.
- D) Meet the affected user groups' representatives to understand the failures qualitatively before finalising remediation.

**Correct answer: C**

**Explanation:** Options A, B and D compose the honest playbook of publishing as delivered, analysing failures, and hearing affected users directly. Option C is the failure: nothing is falsified, yet the reframing instruction converts independent research into advocacy, and every future report from that team now carries the question of what else was reframed. It specifically betrays **User focus** — the two groups worse off are the entire reason averages are insufficient, and burying distributional harm under aggregate improvement is exactly the failure mode the skill exists to prevent. A principal's power over what gets reported is held in trust for an organisation's ability to know things.

**Question 8 (hard) — The technology bet under uncertainty**

A candidate's strategy must position the estate for the next decade. Their platform supplier is pushing aggressive adoption of its new AI-operations suite — auto-remediation, predictive scaling — with steep early-adopter discounts expiring in six months. The candidate's assessment: the capabilities are promising but immature (two reference customers, both smaller than the candidate's estate), their team lacks the skills to operate them safely, and the department has no assurance framework for automated production interventions yet. The discount is worth ~£300,000 over three years. What is the most effective response?

- A) Adopt now across the estate — the discount is material, the direction is clearly right, and skills can follow.
- B) Decline engagement entirely until the technology matures and departmental assurance exists.
- C) Structure a bounded adoption: pilot the suite on one non-critical service with human-in-the-loop controls only, negotiate the discount against the pilot plus pre-agreed expansion pricing (declining the estate-wide commitment the discount is designed to force), invest in team skills in parallel, and contribute the pilot's evidence to the department's nascent assurance thinking — positioning the estate to scale adoption when maturity, skills, and assurance converge.
- D) Wait for the department's assurance framework, then follow whatever it permits.

**Correct answer: C**

**Explanation:** An expiring early-adopter discount is a commercial instrument designed to convert an evaluation timeline into a sales timeline — the £300,000 prices the option to decide later. Option A pays for the discount with three unhedged risks the stem itemises. Option B avoids them by forfeiting the learning that understanding future technology direction (**Technical specialism**) requires. Option D outsources judgement to a framework that does not exist yet, when a pilot's evidence is precisely what emerging governance needs. Option C is the strategist's structure: bounded exposure, a commercial counter, and a deliberate convergence plan. Under uncertainty, the job is to buy cheap, bounded options on several futures — and to make sure the option's price is set on the candidate's own timeline, not the vendor's.

**Question 9 (hard) — Ranking: the inherited misrepresentation**

Three weeks into a new principal post, a candidate discovers that their predecessor's flagship achievement — a migration reported to the board as "complete" eight months ago — is not: roughly 15% of records were never migrated, a reconciliation workaround runs nightly to mask the gap, two of the candidate's leads have known since before the report, and the workaround's failure would corrupt live casework data. The predecessor now works for the departmental CIO. Rank these responses from most to least effective:

1. Stabilise first, then correct the record: commission an immediate risk assessment of the workaround, fund its hardening this week, then inform the head of function and the board with a factual paper — completion status, risk, remediation plan and cost — framed without personal attribution, while separately talking with the two leads about why they carried this silently and what safety would have let them speak.
2. Inform the board immediately and fully, this week, before any remediation work, so the record is corrected at the earliest possible moment.
3. Quietly complete the remaining 15% over the coming months under "data quality improvement", correcting the estate without reopening the reported history.
4. Report the situation first to the departmental CIO's office, since the predecessor's conduct is the central issue and their current employer should handle it.

- A) 1, 2, 3, 4
- B) 2, 1, 4, 3
- C) 1, 2, 4, 3
- D) 1, 3, 2, 4

**Correct answer: C**

**Explanation:** Response 1 leads by sequencing three duties correctly: the live risk first (days-not-months urgency), the record corrected promptly with a remediation plan attached, and the people dimension handled at the right depth. Response 2 ranks second — its instinct is honourable and close to right, losing to 1 only on the stabilisation gap. Ranking 4 above 3 is the discriminating call: response 4 gets the audience wrong but still corrects the record with someone; response 3 corrects the estate while deliberately extending the record's falsehood indefinitely. A misdirected disclosure outranks a permanent concealment: 1, 2, 4, 3. The sequencing rule for inherited misrepresentation is stabilise the risk, correct the record, address the people — in that order, at pace, with the attribution question routed upward rather than seized.

**Question 10 (hard) — The peer principal's failing service**

A peer principal's service — outside a candidate's portfolio — is visibly failing: public incidents, missed KPIs, and now two of their senior engineers have applied for roles in the candidate's team, both citing "chaos" in confidence. The candidate's own portfolio depends on their service for one critical integration. Their director asks informally: "Things look rough over there — what's your read?" What is the most effective response?

- A) Share the full read, including what the two applicants said in confidence — the director needs the complete picture.
- B) Decline to comment on a peer's service — it is not the candidate's portfolio.
- C) Give the director an evidence-based operational read: the integration-level facts the candidate's own portfolio observes directly (incident correlation, dependency risk, mitigations in place), and an offer of concrete peer support; hold back the applicants' confidential characterisations, and separately tell the peer directly what the candidate sees from the integration boundary and what help can be given.
- D) Use the moment: suggest the failing service's critical components migrate into the candidate's portfolio, where they would be better run.

**Correct answer: C**

**Explanation:** Partitioning what is held — direct evidence versus confidential disclosures versus inference — option C reports the first, protects the second, and adds direct honesty with the peer, the harder move that distinguishes stewardship from spectating. Option A converts recruitment confidences into upward reporting, costing future candidates' candour. Option B withholds decision-relevant information a director legitimately needs. Option D converts a colleague's crisis into an acquisition bid, poisoning the motive assessment of any future restructuring argument. The scored behaviour is information stewardship under political temptation: report what you own, protect what you hold in trust, help before you judge.

**Question 11 (hard) — The underperforming loyal lead**

One of a candidate's leads — twelve years in the organisation, deeply loyal, personally kind, and the person who kept operations alive through the pandemic years — is now clearly out of depth: their portfolio's problem backlog is growing, two strong engineers have quietly asked to transfer out of their team, and their last two governance papers needed rewriting by others. Development support over the past year (coaching, a reduced portfolio, paired working) has not changed the trajectory. A reorganisation gives the candidate a natural moment to act. What is the most effective response?

- A) Protect them — restructure around them quietly, routing critical work to other leads while they keep the title; loyalty like theirs has earned it.
- B) Have the honest conversation before the reorganisation lands: the trajectory, the evidence, and the year of support are named; the outcome is a move to a role matching their genuine strengths — with the move done respectfully, at their pace where possible, and with their contribution publicly honoured; the lead role is refilled on capability.
- C) Use the reorganisation to make their role redundant, avoiding the difficult conversation.
- D) Give the development plan one more year — the engineers can be retained with counter-offers, and the papers can keep being quietly rewritten.

**Correct answer: B**

**Explanation:** Option A's protection is paid by others — the transferring engineers, the colleagues subsidising a title invisibly, and the lead's own daily corrosion in a role exceeding them. Option D is A with the evidence already in: a genuine year of support has not moved the trajectory. Option C avoids discomfort by converting a capability conversation into a career termination. Option B refuses the false choice between kindness and standards — honest, matched to a role their strengths fit, executed with dignity, with the lead role refilled on capability. Resourcing leadership means holding both truths at once: people are owed honesty and dignity, and roles are owed capability.

**Question 12 (hard) — The minister's deadline and the release a candidate owns**

A ministerial announcement in nine days commits a department to launching a new citizen-facing feature. The programme is late; the feature reached the candidate's operations acceptance gate yesterday with: performance testing complete only for half the projected launch traffic, two known defects (one with a workaround, one intermittent, and undiagnosed), and no rehearsed rollback for the data migration component. The programme director, backed by the digital director, asks the candidate to waive the acceptance gate: "It's nine days. The announcement is made. Make it work." What is the most effective response?

- A) Waive the gate — the announcement is a political fact, and operations must serve the department's commitments.
- B) Hold the gate absolutely: the criteria exist for exactly this pressure, and the launch moves when the criteria are met, announcement or no announcement.
- C) Re-scope the risk rather than waive the gate: propose a constrained launch that meets the announcement — feature live behind a controlled rollout (a capped percentage of traffic, within the tested envelope), the workaround-defect accepted with monitoring, launch contingent on two non-negotiables achievable in nine days (rehearsed rollback for the migration; diagnosis or containment of the intermittent defect) — with the residual risk written down, decided at director level with the candidate's explicit advice on the record, and a joint agreement on the full-traffic criteria.
- D) Escalate over both directors to the permanent secretary's office, warning that the launch endangers citizen data.

**Correct answer: C**

**Explanation:** The announcement is fixed, but "launch" is not one thing — traffic shape, rollout speed, and risk acceptance are all variables. Option C moves them: a capped rollout keeps traffic inside the tested envelope, the workaround-defect becomes a normal monitorable risk, and the two genuine red lines — rehearsed rollback and diagnosis of the undiagnosed defect — are achievable in nine days, making them demands rather than obstruction. Governance completes it: residual risk written down and decided at director level with explicit advice on the record. Option A inherits every unknown at full traffic. Option B mistakes rigidity for integrity — a gate that cannot express risk in any currency except "wait" will simply be overridden. Option D detonates the escalation ladder while options remain. Principal-level judgement under pressure is neither yes nor no — it is the engineered conditional yes, priced honestly and decided at the level that owns the risk.

### Administration tips

- **Score each option against the five-part anatomy of a strong answer**: protects users and truth first, acts through systems and people rather than heroics, keeps governance informed at the right moment, treats relationships as evidence-governed, and converts crisis into capability.
- **Watch for the "conditional yes" pattern** (Question 12) as a strong discriminator — the strongest answers are rarely a flat yes or no.
- **Note how a candidate partitions what they hold** (Question 10) — direct evidence versus confidence versus inference is a sharp, teachable distinction.
- **Note the sequencing rule for inherited problems** (Question 9) — risk, then record, then people — as a strong signal of principal-level judgement.
- **Use these scenarios as debrief material**, especially with a successful candidate's own leadership group in mind.

### Common pitfalls to watch for when scoring

- **Rewarding options that serve the quarter at the decade's expense** — waived credits, raided programmes, clean-but-false returns, buried research.
- **Rewarding heroics at the wrong altitude** — taking tactical command, remote-controlling a renewal, rewriting a lead's paper personally.
- **Confusing rigidity with integrity** — an option that can only say "no" or "wait" scores nearly as poorly as capitulation.
- **Under-weighting the misuse of information held in trust** — confidences, reframed research, quietly amended records.
- **Rewarding escalation past unexhausted options.**
- **Letting loyalty or sunk virtue override evidence** in people decisions.

## Conclusion

This document has given you a complete set of assessment material for the four types most relevant to a principal application operations engineer: cognitive, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tests portfolio-level pattern synthesis, dual-rule deduction across contracts and policies, compliance populations pinned before attestation, prioritisation by last responsible start date, strategy timelines run against the earliest-binding constraint, and the audit of other people's plausible analyses before they reach governance. The numeric section tests service credit and penalty arithmetic, compounding contract comparisons, series availability multiplication, capacity investment economics, definition-change partitioning, and ending every calculation in a decision-bearing sentence. The verbal section tests defined terms read before obligations, conditions inventoried, audit vocabulary held precisely, unverifiable claims distinguished from false ones, and drafting judged by whether a sceptical successor could test it five years on. The situational judgement section tests cold mechanisms held inside warm relationships, the conditional yes engineered under pressure, inherited misrepresentation sequenced as risk-record-people, information held in trust left unspent, and kindness priced honestly in the hardest people decisions.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as your answer key and your talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more valuable to the candidate — and more informative to you — than the raw score.

**Records and consistency.** Keep a note of the conditions under which you administered this assessment alongside the result, and use the same items and conditions for every candidate you assess for this role level.

**One assessment among several.** At principal level, a candidate's judgement would become infrastructure other people build on — the strategy they own becomes a successor's operating constraints, the figures they sign become the department's beliefs, the standards they hold under pressure become their leads' definition of normal. This assessment measures fragments of that judgement, and it is one input into a wider decision about whether a candidate can be trusted with a portfolio, a team, and the decisions that shape both — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
