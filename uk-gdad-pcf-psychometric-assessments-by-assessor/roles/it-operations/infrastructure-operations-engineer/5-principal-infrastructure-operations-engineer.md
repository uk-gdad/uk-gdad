# Principal Infrastructure Operations Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for principal infrastructure operations engineer, within the UK Government Digital and Data profession. At this level, the prediction target is distinctive: not whether the candidate can execute operations, nor even whether they can lead a team, but whether they can direct an operational capability — set strategy, govern risk, own supplier relationships at portfolio level, and make the long-horizon judgements on which an organisation's technology investments succeed or fail. The material here is job-specific to that altitude. It draws on the artefacts a principal infrastructure operations engineer genuinely handles — strategic and tactical technology roadmaps, investment appraisals and total-cost models, supplier portfolios and their contractual and regulatory obligations, compliance and risk registers, capacity strategies spanning groups of services, and the governance papers through which operational reality reaches boards. And it exercises the judgements genuinely made: sequencing technology transitions so services stay reliable while platforms change beneath them; deciding when a supplier relationship needs remediation, renegotiation, or exit; balancing investment between the estate a team runs and the estate it must build; and ensuring that what an organisation reports about its operations is true.

Why does this matter at this level? Because principal-level failure modes are reasoning failures at scale. A misread trend becomes a roadmap that future-proofs against the wrong future. An unchallenged supplier figure becomes a contractual position surrendered. A weighted-average error in a board pack becomes a misallocated budget. A governance paper that overstates readiness becomes an organisational commitment nobody can keep. The four assessments here — cognitive, numeric, verbal, and situational — map directly onto the daily mechanics of strategic operations leadership.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — at this level, the debrief often connects naturally to how the candidate would actually govern supplier relationships, present to a board, or sequence a strategic programme. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

The questions progress from easy through moderate to hard, and the hard questions are genuinely hard. That is deliberate: at principal level, judgement under ambiguity is the thing being measured, and the easy items exist mainly to build the candidate's confidence before the material that actually discriminates.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. For a principal infrastructure operations engineer, the scenarios operate at portfolio altitude: reading trends across groups of services rather than single systems, tracing the consequences of strategic decisions through technical, contractual, and organisational dependency chains, detecting the inconsistency in an investment case or a compliance report, and sequencing multi-year transitions under interacting constraints.

The typical format is an online, timed test of 15 to 30 minutes with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, frequently adaptive, with accuracy and speed reported separately.

At principal level, cognitive assessment measures the capability the role summary names in its first line: developing strategic and tactical roadmaps for technologies and services, ensuring they are future-proofed and the organisation derives maximum value from its investment. Every clause of that sentence is a reasoning task. Roadmaps are dependency-and-sequencing problems spanning years. Future-proofing is trend extrapolation done honestly — distinguishing durable direction from fashionable noise, and knowing which uncertainties a strategy must survive rather than predict. Maximum value from investment is comparative reasoning across options whose costs and benefits arrive on different schedules and rest on different assumptions. And beneath all of it sits the portfolio habit the role's service focus skill names: seeing the bigger picture by taking groups of services and investigating how to get the best from the underlying services — pattern recognition and deduction performed across an estate rather than a server.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Service focus** skill — seeing the bigger picture across groups of services means detecting estate-level patterns invisible at single-service altitude — and to the **Technical specialism** skill of understanding the direction of future technologies, which is trend-reading disciplined by evidence.
- **Logical deduction** maps to the **Problem management** skill (ensuring the right actions are taken to investigate, resolve and anticipate problems — anticipation being deduction about the future) and the **Incident management** skill of leading investigation and resolution where incidents cross service and supplier boundaries.
- **Error checking** maps to the **Asset and configuration management** skill — managing configuration items, service compliance and risk means detecting where records, obligations, and reality diverge — and to the **Change management** duty to ensure release policies and processes are applied, which requires spotting non-conformity before it ships.
- **Prioritisation** maps to the **Availability and capacity management** skill (identifying capacity issues and initiating remedial action across an estate means ranking risks that compete for finite response) and to the roadmap duty, where sequencing is prioritisation extended through time.
- **Applied problem solving** maps to the **Technical specialism** duty to deliver a model that supports future technologies while coexisting with the current environment — the defining principal-level design problem — and to the **Ownership and topic** skill of proactively searching for potential problems before they occur.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Estate-level pattern in incident distribution**

Annual major-incident data across an estate's five platform groups:

| Platform group | Major incidents | Services hosted | Age profile |
|---|---|---|---|
| Cloud compute | 6 | 40 | 0–3 years |
| Virtualised estate | 8 | 55 | 3–8 years |
| Legacy midrange | 9 | 6 | 12–20 years |
| Network core | 4 | all traverse | 2–10 years |
| Storage estate | 5 | all use | 1–9 years |

Which reading best identifies the estate's concentration of operational risk?

- A) The virtualised estate — it has the most major incidents.
- B) Legacy midrange — 9 major incidents across only 6 services is an incident density more than tenfold the cloud and virtualised groups, concentrated on the oldest platforms.
- C) Cloud compute — new platforms are always the riskiest.
- D) Network core — everything traverses it, so it must be the greatest risk.

**Correct answer: B**

**Explanation:** Normalise before concluding. Incidents per hosted service: cloud 6 ÷ 40 = 0.15; virtualised 8 ÷ 55 = 0.145; legacy midrange 9 ÷ 6 = 1.5 — an order of magnitude above the modern platforms, on the estate's oldest technology. Option A reads the raw count that platform size, not platform risk, produces. Option C substitutes a prejudice for the data, which shows cloud at the lowest density. Option D raises a real structural point — shared infrastructure concentrates consequence — but the network's incident record (4 events across everything that traverses it) does not show it as the current generator of risk; consequence-if-failed and frequency-of-failure are different risk axes, and the question asks where risk is concentrating in the observed data. This tests whether the candidate normalises before concluding — incident density clustered on a 12–20-year-old platform hosting few services is the classic signature of an estate segment past its reliability knee, exactly what a technology roadmap exists to retire, and a strong candidate's answer notes this as the evidence an investment case for that retirement should lead with.

**Question 2 (easy) — Deduction from a compliance rule**

A compliance framework states: "Any service processing personal data must have a completed data protection impact assessment (DPIA) before go-live. A service may go live without a completed DPIA only where the data protection officer (DPO) has granted a documented deferral." Service S went live last month and processes personal data. Which conclusion must be true?

- A) Service S had a completed DPIA before go-live.
- B) The DPO granted a documented deferral for Service S.
- C) Either Service S had a completed DPIA before go-live, or the DPO granted a documented deferral, or the framework was breached.
- D) The framework was breached.

**Correct answer: C**

**Explanation:** The rule admits exactly two compliant paths for a personal-data service going live — completed DPIA, or documented DPO deferral — and the facts given establish only that the service went live and processes personal data. Which path it took, or whether it took neither, is unknown; so A, B, and D each assert one branch of an unresolved disjunction, while C states the complete disjunction that must hold in every consistent scenario. This tests whether the candidate converts a rule plus partial facts into precisely the verification question the case requires ("show me the DPIA or the deferral"), rather than into either accusation or assumption — managing service compliance and risk, the asset and configuration skill's explicit phrase. A strong candidate's answer also reads the rule's design: the deferral path exists because absolute gates get bypassed informally when they meet immovable deadlines, and a documented exception route is what keeps the record honest — auditing the exception register, not just the rule, is where assurance actually lives.

**Question 3 (easy) — Error checking an investment case's logic**

An investment paper for replacing a backup platform argues: "Option A (renew incumbent): £900k over five years, no migration risk. Option B (new platform): £700k over five years including migration, plus modern features. Option B is £200k cheaper and strictly superior; we recommend B. Note: Option B pricing assumes decommissioning the incumbent by month 9; the incumbent contract's minimum term runs to month 18, with early-exit fees of £150k." What is the paper's defect?

- A) Option A's figure is probably inflated.
- B) The recommendation's £200k advantage ignores a cost its own note discloses: exiting the incumbent at month 9 incurs £150k early-exit fees (or retaining it to month 18 incurs parallel-running costs), so the true gap is at most £50k — and possibly negative — before "strictly superior" can be claimed.
- C) Five years is the wrong appraisal horizon.
- D) Modern features are overvalued in the comparison.

**Correct answer: B**

**Explanation:** The defect is internal inconsistency — the paper's own note defeats its own headline. Option B's £700k depends on decommissioning at month 9; the disclosed contractual position makes month 9 exit cost £150k in fees, or alternatively forces parallel running to month 18 (two platforms' costs for nine months — plausibly more than £150k). Either way the £200k advantage shrinks to £50k or less, and "strictly superior" collapses into "possibly marginally cheaper, with migration risk". Options A, C and D are challenges worth investigating, but they import assumptions; option B needs nothing beyond the paper's own sentences. This tests the reviewing discipline on which "maximum value from investment in technologies" — the roadmap duty's phrase — actually depends: most broken cases are not arithmetically wrong but structurally inconsistent, and the inconsistency usually hides in a note, an assumption, or a footnote that the executive summary forgot. A strong candidate's answer reads the notes first.

**Question 4 (easy) — Prioritising remedial capacity actions**

A capacity review across the estate surfaces four findings:

1. The payments platform will exhaust database connections in ~3 weeks at current growth; remediation is a configuration change, tested, ready to schedule.
2. The analytics cluster will exhaust storage in ~8 months; expansion requires procurement (~4-month lead time).
3. The intranet is over-provisioned by ~40%, wasting ~£30k/year; rightsizing is a low-risk change.
4. A dashboard gap: no capacity metrics exist for the new API gateway, which launched three months ago and is growing fast by anecdote.

What is the soundest ordering of action?

- A) 1 (schedule now), 4 (instrument now — unmeasured fast growth is an unbounded risk), 2 (start procurement this quarter), 3 (rightsizing when convenient).
- B) 3 first — realising savings funds everything else.
- C) 2 first — procurement lead times dominate everything.
- D) 1 only — the rest can wait for next year's review.

**Correct answer: A**

**Explanation:** Rank by proximity-to-harm adjusted for response lead time and uncertainty. Item 1 is closest to harm (3 weeks) with the shortest remediation path (tested change) — schedule immediately; cheap insurance against a hard outage. Item 4 is the subtle second: an unmeasured, reportedly fast-growing service is a risk of unknown proximity — it could be item 1 in disguise — and instrumenting it is quick; unknown-but-knowable risks get converted to known ones early, because everything else in capacity management depends on measurement. Item 2's deadline is 8 months minus 4 months' procurement = a decision needed within roughly a quarter — start now-ish, but after the two immediate actions. Item 3 is genuine value with no deadline pressure. Option B funds pennies while a three-week fuse burns; option C misapplies a true principle (lead times dominate) to the wrong item — item 2's lead time still leaves months of margin, item 1's fuse does not; option D confuses "most urgent" with "only". This tests item 4's placement: identifying capacity issues — the availability and capacity skill — presupposes visibility, and the estate's biggest capacity risk is routinely the service nobody instrumented. A strong candidate's answer treats measurement gaps as findings, not footnotes.

**Question 5 (moderate) — Deduction across a technology transition**

A roadmap migrates services from a legacy midrange platform to cloud in three tranches. Facts: (i) Tranche 1 (non-critical services) completed successfully six months ago; (ii) Tranche 2 (important services) begins next month; (iii) the legacy platform's vendor support contract expires in 14 months and the vendor has announced no renewal will be offered; (iv) Tranche 3 contains the two most critical services, and its migration is planned to take 6 months once begun; (v) tranches cannot overlap, and Tranche 2 is planned at 6 months. Which conclusion about schedule risk must be true?

- A) The plan is comfortable — 14 months exceeds 6 + 6.
- B) The plan has at most 2 months of total slack across Tranches 2 and 3 before the most critical services are running on an unsupported platform — so any slip beyond 2 months converts the estate's most critical services into its least protected ones.
- C) Tranche 3 should be moved before Tranche 2.
- D) The vendor will likely extend support if asked.

**Correct answer: B**

**Explanation:** Compute the schedule spine: Tranche 2 (6 months, starting next month) plus Tranche 3 (6 months, non-overlapping) = 12 months of planned work against a 14-month support horizon — leaving 2 months of total slack, minus the one month before Tranche 2 starts, if that month is idle (the strict answer holds at "at most 2 months"). Option A does the same arithmetic and stops before the risk reading: 2 months of slack across 12 months of migration work is thin — migrations slip, and the structure places the most critical services last, so every slip lands on them; if the schedule overruns, the organisation's most important workloads are precisely the ones left on a platform with no vendor support. Option C mistakes the observation for a directive: resequencing has its own logic (Tranche 1 and 2 de-risk the method before the critical services move — a defensible design), and the facts do not establish that moving Tranche 3 earlier is net-better; the mandatory conclusion is the slack arithmetic, not a specific re-plan. Option D is hope, contradicted by the announced non-renewal. This tests roadmap reasoning at principal level: dependency arithmetic first, then the honest statement of where the residual risk pools — plus, in a strong candidate's answer, the contingency planning (slip triggers, interim risk mitigations for an unsupported platform) that a 2-month-slack plan owes its governance board.

**Question 6 (moderate) — Pattern versus noise in technology trend data**

Refreshing a technology roadmap, four signals are in front of the candidate:

1. A container platform's usage has grown from 15% to 60% of new deployments over three years, with every one of six development teams now deploying to it by default.
2. A market analyst report names a new orchestration technology "the future of infrastructure", citing three early-adopter case studies.
3. The virtualised estate's new-deployment share has fallen from 70% to 25% over the same three years, though it still hosts 55 production services.
4. A conference keynote predicts serverless will "eliminate infrastructure operations within five years".

Which combination should most shape the roadmap's platform strategy?

- A) Signals 2 and 4 — external sources see further than internal data.
- B) Signals 1 and 3 — three years of consistent, estate-wide behavioural data showing where demand is actually going, with the corollary that 55 production services need a managed path off a platform new demand has abandoned.
- C) Signal 4 alone — the boldest prediction deserves the biggest bet.
- D) All four signals weighted equally.

**Correct answer: B**

**Explanation:** Grade the signals by evidential weight and relevance. Signals 1 and 3 are longitudinal, internal, behavioural, and mutually confirming: the organisation's own revealed preference has moved decisively to containers, and the virtualised platform is becoming a legacy estate in real time — 55 production services on a platform with collapsing new demand is tomorrow's stranded estate unless the roadmap manages the transition deliberately. Signals 2 and 4 are directional inputs worth monitoring, but an analyst's three case studies and a keynote's elimination prophecy are weak evidence for committing an estate — option A inverts the evidence hierarchy (external narrative over internal behaviour), option C bets the roadmap on the least-evidenced claim, and option D's equal weighting is abdication dressed as balance: weighting is the analysis. This tests whether the candidate understands the direction of future technologies as triangulating durable direction from strong evidence, using weak signals as hypotheses to test cheaply (a serverless pilot, a watching brief on the new orchestrator) rather than destinations to commit to. A strong candidate's answer notes that the resulting roadmap holds committed transitions where evidence is strong and options where it is weak — future-proofing means surviving multiple futures, not predicting one.

**Question 7 (moderate) — Error checking a supplier's compliance attestation**

A hosting supplier's annual attestation states: "All customer environments are patched to vendor-supported levels. Certification: our platform holds [industry certification], renewed this January. Note: certification scope covers our primary data centre; the secondary data centre, added to your service in March following the DR expansion, will be included at the next annual audit." Regulated workloads fail over to the secondary data centre, and the regulator requires certified environments for these workloads at all times. What is the critical finding?

- A) The patching claim cannot be verified.
- B) Between March and the next audit, the regulated workloads' failover destination is an uncertified environment — so a DR invocation would move regulated workloads into non-compliance at exactly the moment of maximum scrutiny, and the gap needs remediation (accelerated certification, interim controls agreed with the regulator, or failover redirection) now, not at the next audit cycle.
- C) The certification renewal in January is suspicious.
- D) Nothing — the supplier has disclosed the gap transparently, so the risk is managed.

**Correct answer: B**

**Explanation:** Intersect three facts: the secondary DC is outside certification scope until the next audit; the regulated workloads fail over to it; the regulator requires certification "at all times" for those workloads. The intersection is a live compliance gap with a nasty trigger profile — it materialises precisely when DR is invoked, i.e. during an incident, when regulatory attention is highest and remediation options are fewest. Option B names the gap and the remediation set: accelerate scope extension, agree interim compensating controls with the regulator, or redirect the failover path for regulated workloads until certification lands. Option D commits the disclosure fallacy: a transparently disclosed risk is an identified risk, not a managed one — disclosure transfers knowledge, not accountability, and "will be included at the next annual audit" is the supplier's convenience, not the regulator's requirement. Options A and C manufacture suspicion where the document gives none. This tests the role's supplier-ownership duty in its most consequential form: owning operational relationships with suppliers, ensuring services are aligned to regulatory and contractual requirements, means reading attestations for what their scope notes exclude — the finding is almost always in the scope note — and a strong candidate's answer drives the remediation rather than filing the attestation.

**Question 8 (moderate) — Applied problem solving: coexistence architecture**

An organisation is adopting a new cloud data platform over three years, but two major systems cannot migrate: one legacy database underpins a critical service and is certified only on midrange hardware; the other belongs to a shared cross-government service outside this role's control. The programme proposes "everything migrates; the stragglers will be forced by decommissioning dates". Which alternative model is soundest?

- A) Endorse the programme's approach — forcing functions work.
- B) Design an explicit coexistence model: the two non-migratable systems get a defined long-stay environment with named support arrangements, integration contracts (interfaces, data flows, latency budgets) between old and new platforms, its own security and compliance treatment, and a review trigger tied to real events (certification change, the shared service's own roadmap) — while everything genuinely migratable proceeds on the programme's schedule.
- C) Delay the entire migration until the two systems can move.
- D) Migrate the two systems anyway and accept the certification and control gaps.

**Correct answer: B**

**Explanation:** The programme's premise — universal migration enforced by decommissioning dates — fails on contact with the two stated facts: a certification constraint (the legacy database is supported only on midrange) and an authority constraint (the shared service's roadmap belongs to another organisation). Forcing functions cannot force what certification forbids or what other organisations control; option A's decommissioning dates would arrive with the systems still there, converting a planning fiction into an unplanned risk. Option D breaks certification on a critical service — trading a known, supported configuration for an unsupported one to satisfy a slide. Option C lets the least movable 5% freeze the movable 95% — surrendering three years of value to symmetry. Option B is what the technical specialism skill describes verbatim: delivering a model to support and maintain future technologies and any databases that coexist in the current environment. This tests whether the candidate makes the exception's content real rather than a euphemism for drift: named support (who fixes the long-stay environment at 3 a.m.), integration contracts (so the new platform's evolution cannot silently break the old systems' interfaces), distinct compliance treatment (long-stay environments age out of default assumptions), and event-driven review triggers (so "long-stay" ends when its reasons end, not never). A strong candidate's answer treats this as designing the exception's home as carefully as the rule's, because unmanaged exceptions are where estates rot.

**Question 9 (moderate) — Prioritisation under governance and delivery tension**

Four items compete for the same week:

1. The annual infrastructure strategy paper is due to the technology board in ten days; the draft needs two solid days.
2. A supplier's quarterly service review is tomorrow; their performance has degraded two quarters running, and this role owns the relationship — preparation needs half a day to marshal the evidence.
3. A P1 post-incident review for last week's cross-platform outage awaits a chairing decision: this week (memories fresh) or next (calendars easier).
4. A lead engineer being developed has asked for a joint review of their first major roadmap contribution — an hour, movable.

What is the most defensible plan?

- A) Strategy paper all week; move everything else.
- B) Prepare and hold the supplier review (the degradation trend makes tomorrow's session consequential); chair the post-incident review this week while evidence is fresh; give the lead their hour early in the week; build the strategy paper across the remaining days — it has ten days of runway.
- C) Delegate the supplier review to a lead and focus on the strategy paper.
- D) Postpone the post-incident review to next week and use the freed time for the paper.

**Correct answer: B**

**Explanation:** Sequence by immovability and consequence, not by document size. The supplier review is tomorrow, and its stakes are set by the trend: two quarters of degradation makes this the session where the relationship either corrects or slides toward formal remediation, and the relationship owner should hold it; option C's delegation sends exactly the wrong signal at exactly the escalation point (delegating routine reviews is healthy; delegating the difficult one the principal owns is abdication). The post-incident review's quality is time-sensitive in a way calendars are not: cross-platform outage evidence — what people remember, what logs retain — decays within days, and "calendars easier next week" purchases convenience with diagnostic quality; option D makes that trade explicit and wrong. The lead's hour is small, movable, and disproportionately valuable — reviewing their first roadmap contribution is succession-building, the quiet duty of every principal — so it gets scheduled, not squeezed out. The strategy paper, largest but with ten days of runway, flexes around the fixed points; option A treats the biggest artefact as the most urgent, the classic seniority inversion. This tests whether the candidate recognises that a principal's calendar's fixed points are set by other people's decay rates — evidence, relationships, development moments — and the flagship document fits the gaps, not the reverse.

**Question 10 (hard) — Cross-boundary incident deduction**

A cross-government authentication service consumed by the estate degraded for three hours yesterday, breaking sign-in for two services. Facts assembled this morning: (i) the authentication provider's status page reported "degraded performance" from 09:40; (ii) the two affected services began erroring at 09:10, thirty minutes earlier; (iii) a third service using the same provider was unaffected all day; (iv) the affected pair share a network egress route through a regional gateway, which the unaffected service does not use; (v) the gateway's error logs show intermittent packet loss from 09:05; (vi) the provider's incident report, published overnight, attributes their degradation to a database issue from 09:40 and closes the matter. What does the evidence support?

- A) The provider's incident fully explains the outage; close the internal incident aligned to theirs.
- B) Two distinct faults overlapped: the services' errors began 35 minutes before the provider's incident, correlate with packet loss on the shared egress gateway (which the unaffected service bypasses), so the primary cause is likely the gateway path, with the provider's later degradation compounding it — the investigation stays open, focused on the gateway, whatever the provider's report says.
- C) The provider's report is wrong and should be formally disputed.
- D) The unaffected service proves the provider was never the problem.

**Correct answer: B**

**Explanation:** Run the timeline and the differential together. Timeline: the errors start 09:10; the provider's incident starts 09:40 — a 30-minute gap the provider's explanation cannot cover (their database issue cannot reach backward in time). Differential: the affected/unaffected split tracks the egress route, not the provider — all three services share the provider; only the two that traverse the regional gateway failed, and the gateway logs packet loss from 09:05, five minutes before the first errors. The evidence therefore supports two overlapping events: a network-path fault (internal to fix) from ~09:05, and a genuine provider degradation (theirs, from 09:40) that likely worsened the middle hour. Option A is the convenient closure — an external incident report is an explanation-shaped object, and aligning to it buries the gateway fault until it recurs without a provider incident to hide behind. Option D over-rotates: the provider's degradation was real (status page, their own diagnosis) and plausibly contributed after 09:40; exonerating them entirely misreads the overlap. Option C picks a fight the evidence does not require — their report may be accurate about their fault and simply irrelevant to the first 30 minutes; the professional move is a technical query about the timeline discrepancy, not a formal dispute. This tests principal-level incident leadership: ensuring the right actions are taken to investigate — the problem management skill — includes refusing the completed-looking explanation when the evidence says the boundary of causes lies elsewhere. A strong candidate's answer follows evidence across organisational boundaries, not press releases.

**Question 11 (hard) — Multi-constraint sequencing of a strategic programme**

A three-year infrastructure strategy contains five workstreams: network refresh (N), identity platform replacement (I), data centre exit (D), observability platform (O), and legacy midrange retirement (L). Constraints: (i) D cannot complete until N completes — the new network must carry the migrated traffic; (ii) L cannot complete until I completes — legacy services' authentication must move off the platform before retirement; (iii) O must complete before D begins its final migration wave, because the exit's cutover risk is unmanageable without unified observability; (iv) the organisation can run at most two workstreams concurrently; (v) each workstream takes one year; (vi) I cannot start in year 1 (procurement). Which schedule completes everything in three years?

- A) Year 1: N + O; Year 2: I + D; Year 3: L (+ contingency)
- B) Year 1: N + I; Year 2: O + D; Year 3: L
- C) Year 1: D + O; Year 2: N + I; Year 3: L
- D) Year 1: N + L; Year 2: I + O; Year 3: D

**Correct answer: A**

**Explanation:** Verify option A against every constraint. Year 1: N and O run (two streams — (iv) satisfied; neither is I — (vi) satisfied). Year 2: I and D run — D requires N complete ((i): N finished year 1 ✓) and O complete before D's final wave ((iii): O finished year 1 ✓). Year 3: L runs — L requires I complete ((ii): I finished year 2 ✓). All five streams fit in three years with year 3 running a single stream — spare concurrency that is genuine contingency. Now the rivals: B breaks (vi) — I starts in year 1. C breaks (i) and (iii) — D runs in year 1 before N and effectively alongside O rather than after it. D breaks (ii) — L runs in year 1, before I has even started. This tests whether the candidate's solving method scales to real strategy work: identify the constrained-start items (I cannot start early) and the terminal dependencies (L after I; D after N and O), place the unconstrained enablers earliest (N, O are pure prerequisites — they unlock everything and depend on nothing), and let the dependent streams cascade. A strong candidate's answer notes what the correct schedule quietly embodies: enabling infrastructure first, dependent transformations second, retirements last, with slack landing at the end, where slips accumulate — the canonical architecture of infrastructure roadmaps.

**Question 12 (hard) — The strategy assumption stress-test**

A draft strategy commits to consolidating all infrastructure operations tooling onto a single vendor's integrated suite, on four stated grounds: (a) 30% licence saving versus the current multi-vendor estate; (b) reduced integration maintenance; (c) the vendor's roadmap alignment with the organisation's cloud direction; (d) simplified skills requirements. A challenge session asks: "What must remain true for five years for this to stay the right call?" Which answer demonstrates the strongest strategic reasoning?

- A) "The savings are contractually locked, so the decision is safe regardless."
- B) "Four assumptions carry the strategy: the vendor's pricing power stays benign after consolidation (single-vendor dependence historically invites renewal-cycle price recovery — so contractual protections extending beyond the initial term, and a costed exit path to preserve negotiating position, are needed); the vendor's roadmap actually tracks ours (needs annual verification against delivery, not slideware); integration savings are not offset by the suite's weaker best-of-breed capabilities in monitoring depth (needs a capability floor defined per domain); and skills simplification does not become a skills monoculture that cannot evaluate alternatives (needs deliberate horizon-scanning capability retained). The strategy stands, with those four hedges built in and reviewed annually."
- C) "Nothing needs to remain true — strategies are reviewed annually anyway."
- D) "The consolidation should be abandoned — single-vendor risk is always disqualifying."

**Correct answer: B**

**Explanation:** The question tests whether the candidate can hold a commitment and its fragility simultaneously — the defining posture of durable strategy. Option B enumerates the load-bearing assumptions and attaches to each a monitoring mechanism or hedge: pricing power (the consolidator's classic trap — the 30% saving is the entry price; the renewal after switching costs are sunk is where single-vendor economics bite — hedged contractually and by maintaining a credible exit); roadmap alignment (verified against shipped delivery annually, because vendor roadmaps are marketing documents until delivered); capability floors (integrated suites win on integration and routinely lose on depth — the strategy must define the minimum per-domain capability below which the suite fails the estate); and skills monoculture (a subtle one: an organisation trained only on one suite loses the ability to know when to leave it, so horizon-scanning is retained deliberately). This is future-proofing as the roadmap duty actually means it: not predicting that the assumptions hold, but instrumenting them so their failure is detected early and survivable. Option A confuses a contract with a future — locked savings do not lock roadmap alignment, capability adequacy, or renewal-cycle behaviour. Option C outsources thinking to the review calendar; annual reviews catch what someone thought to measure, and option B is the list of what to measure. Option D replaces judgement with a slogan — single-vendor consolidation is sometimes right; unhedged consolidation is what is wrong. A strong candidate's answer reflects the same structure a good challenge session and a good board paper both reward: commit, name the assumptions, instrument them, and keep the exit priced.

### Administration tips

- **Score for whether a candidate normalises before drawing a conclusion**, and whether they follow the normalised pattern through to its strategic implication for the roadmap.
- **Watch for whether a candidate reads a paper's own notes and footnotes before accepting its headline** — most structural inconsistencies in investment cases and attestations hide there.
- **Note whether a candidate computes a schedule's slack and states explicitly where residual risk pools**, rather than stopping at "the plan fits".
- **Note whether a candidate grades evidence before weighting it** — internal longitudinal behaviour against analyst narrative against keynote prophecy.
- **Use the assumption stress-test item (Question 12) to observe whether a candidate can name load-bearing assumptions and attach a detection mechanism to each**, rather than either defending the decision unconditionally or abandoning it.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that reads raw counts at portfolio altitude** without normalising by population.
- **Crediting an answer that treats a completed-looking external explanation as closing an internal investigation**, when the candidate's own timeline or differential evidence disagrees.
- **Accepting "the risk was disclosed" as equivalent to "the risk was managed".**
- **Rewarding a roadmap commitment built on the loudest signal** rather than the strongest evidence.
- **Missing when a candidate proposes a universal rule with no coexistence model for its exceptions.**
- **Rewarding a plan or strategy presented without its slack arithmetic or its load-bearing assumptions made explicit.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with quantitative material: percentages, ratios, weighted averages, rates, projections, and data in tables and charts. At principal level the material is the arithmetic of strategy and governance: multi-year investment comparisons, total cost of ownership, supplier portfolio economics, estate-wide KPI consolidations, risk quantification, and the capacity and demand models on which roadmaps rest.

The typical format is an online, timed test of 20 to 35 minutes with 15 to 25 questions; an on-screen calculator is normally available. Principal-level variants weight interpretation and challenge heavily: the question behind most questions is "is this stated conclusion sound, and what does the correct figure imply for the decision?"

Numeracy matters distinctively at this level because the principal is the last technical checkpoint before numbers become commitments. Investment cases reach approval carrying the arithmetic their authors chose; the principal's review is where horizons, baselines, and discount conventions get challenged — after approval, the numbers govern. Supplier portfolio decisions — renewal, remediation, exit — rest on cost and performance figures that suppliers themselves supply; the recomputation habit is the control. Board packs consolidate estate KPIs, and every consolidation choice (weights, denominators, periods) is an editorial decision someone should have made deliberately. And roadmaps are quantitative objects: demand curves, capacity steps, migration rates, and the lead times that convert event dates into decision deadlines. The role's own language — maximum value from investment in technologies, service compliance and risk, identifying capacity issues and initiating remedial action — is a list of numerical duties wearing prose.

As at every level, the mathematics itself never exceeds confident arithmetic: the four operations, percentages, and averages. The difficulty lives in setup, baselines, horizons, and interpretation — which is precisely why these questions are worth administering: the calculation is the easy half of every figure a principal signs.

### How this assessment maps to the role

- **Investment and total-cost arithmetic** maps to the roadmap duty of ensuring **maximum value from investment in technologies**: multi-year comparisons, crossover analysis, and the horizon and baseline choices that decide options papers.
- **Supplier portfolio economics** map to the duty to **own operational relationships with suppliers**: contract-year arithmetic, service credit regimes, concentration risk, and the cost cases behind remediation or exit decisions.
- **Estate-level consolidation** maps to the **Service focus** skill of taking groups of services and getting the best from them: weighted KPIs, per-service densities, and honest aggregation across unequal populations.
- **Demand and capacity modelling** maps to the **Availability and capacity management** skill: compound demand curves, stepped capacity, lead-time subtraction, and the decision deadlines that make capacity governance real.
- **Risk quantification** maps to the **Asset and configuration management** duty of managing service compliance and risk, and the **Testing** skill of managing risks and taking preventative action when risks become unacceptable — "unacceptable" being, wherever possible, a computed judgement.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Estate availability in downtime terms**

A flagship service's availability target rises from 99.9% to 99.95% under a new agreement, measured monthly over a 43,200-minute month. By how many minutes does the monthly downtime budget shrink?

- A) 43.2 to 21.6 — a reduction of 21.6 minutes
- B) 43.2 to 4.32 — a reduction of 38.9 minutes
- C) 21.6 to 4.32 — a reduction of 17.3 minutes
- D) 43.2 to 2.16 — a reduction of 41 minutes

**Correct answer: A**

**Explanation:** Compute both budgets. At 99.9%: downtime allowance = 0.1% × 43,200 = 43.2 minutes. At 99.95%: allowance = 0.05% × 43,200 = 21.6 minutes. The budget halves — from 43.2 to 21.6, a reduction of 21.6 minutes. The halving follows directly from the target arithmetic: 0.05% is half of 0.1%. Option B mistakes 99.95% for 99.99% (which would give 4.32). This tests basic error-budget arithmetic, and a strong candidate's answer draws the governance translation: agreeing "99.9 to 99.95" in a negotiation sounds incremental — a 0.05-point concession — but it halves the error budget, which may require redundancy investment, faster failover, or change-freeze discipline that costs real money. Availability points are logarithmic in cost; the arithmetic is how a courtesy-sounding concession gets priced before it is agreed.

**Question 2 (easy) — Supplier spend concentration**

An infrastructure supplier portfolio spends: Supplier A £2.4M, Supplier B £1.2M, Supplier C £0.9M, Supplier D £0.5M, others combined £1.0M. What percentage of total spend sits with Supplier A?

- A) 30%
- B) 35%
- C) 40%
- D) 45%

**Correct answer: C**

**Explanation:** Total = 2.4 + 1.2 + 0.9 + 0.5 + 1.0 = £6.0M. Supplier A share = 2.4 ÷ 6.0 = 0.40 = 40%. Sense-check: 2.4 is a little under half of 6.0's half (3.0), so 40% fits. This tests the portfolio reading as much as the arithmetic: 40% concentration with one supplier is a dependency figure that belongs in a risk register with a stated tolerance — concentration is not automatically wrong (scale discounts are real), but it prices negotiating position and exposure to that supplier's failure, and a strong candidate's answer treats the number as a managed quantity, not a discovered one.

**Question 3 (easy) — Weighted estate availability**

Three service groups report monthly availability: critical services (12 services) 99.8%; standard services (30 services) 99.5%; internal tools (18 services) 98.9%. Weighting by service count, what is the estate-wide average availability?

- A) 99.40%
- B) 99.38%
- C) 99.20%
- D) 99.56%

**Correct answer: B**

**Explanation:** Weight by count. Contributions: 12 × 99.8 = 1,197.6; 30 × 99.5 = 2,985.0; 18 × 98.9 = 1,780.2. Sum = 5,962.8 across 60 services. Mean = 5,962.8 ÷ 60 = 99.38%. The unweighted mean (99.8 + 99.5 + 98.9) ÷ 3 = 99.4% (option A) is close here only because the group sizes are moderately balanced — the gap widens as populations skew. This tests weighted averaging, and a strong candidate's answer volunteers the sharper point: a single estate figure, however correctly weighted, conceals the decision-relevant structure — the critical group at 99.8% may be fine while internal tools at 98.9% may be fine too, or the reverse, depending on targets per tier. Estate averages answer "how are we doing overall?" for boards; tiered figures against tiered targets answer "where must we act?" — a strong candidate's answer proposes publishing both.

**Question 4 (easy) — Contract-year arithmetic**

A five-year supplier contract has charges of £800k in year 1, rising 3% each subsequent year (compound). What is the approximate total contract value?

- A) £4.00M
- B) £4.12M
- C) £4.25M
- D) £4.37M

**Correct answer: C**

**Explanation:** Sum the compounding years. Year 1: £800k. Year 2: 800 × 1.03 = £824k. Year 3: 824 × 1.03 = £848.7k. Year 4: 848.7 × 1.03 = £874.2k. Year 5: 874.2 × 1.03 = £900.4k. Total = 800 + 824 + 848.7 + 874.2 + 900.4 = £4,247.3k ≈ £4.25M. Option A ignores indexation entirely (5 × 800), understating by £250k — the error that surfaces at business-case approval when finance recomputes. This tests recognising that contracts with indexation clauses have totals that exceed rate × years, and the excess compounds with term length and rate; at 3% over five years it is ~6% of the naive total, at longer terms materially more. A strong candidate's answer notes that total contract value, computed properly, also determines procurement thresholds and approval routes — getting it wrong by omitting indexation is how contracts end up through the wrong governance gate.

**Question 5 (moderate) — Cost per service with an allocation trap**

Platform teams' annual costs: shared network £1.8M, shared storage £1.2M, cloud platform team £2.0M. The cloud platform hosts 40 services; the network and storage serve all 100 estate services. A programme office computes "cloud cost per service" as (1.8 + 1.2 + 2.0) ÷ 40 = £125k and proposes charging cloud services accordingly. What is the correct figure on a fair allocation?

- A) £125k per cloud service, as computed.
- B) £80k per cloud service: the cloud team's £2.0M ÷ 40 = £50k, plus a fair share of shared costs — (1.8 + 1.2) ÷ 100 = £30k per service — totalling £50k + £30k = £80k.
- C) £50k per cloud service: shared costs should not be allocated at all.
- D) £30k per cloud service.

**Correct answer: B**

**Explanation:** The programme office's arithmetic loads 100 services' worth of shared infrastructure cost onto 40 services' heads: it divides the entire network and storage spend (which serves the whole estate) by only the cloud population. Fair allocation splits each cost pool by the population it serves: cloud-specific £2.0M ÷ 40 = £50k; shared £3.0M ÷ 100 = £30k per service (every service, cloud or not); cloud services therefore carry £80k. Option C ignores real shared consumption; option A's £125k overcharges cloud services by 56%. This tests whether a candidate spots the population mismatch, and a strong candidate's answer names the strategic distortion: services comparing "cloud at £125k" against alternatives priced without the same shared-cost loading will make anti-cloud decisions on phantom economics, quietly bending the roadmap against its own strategy — cost allocation methodology is roadmap policy in disguise, and checking denominators on charging models is defending the strategy, not just the spreadsheet.

**Question 6 (moderate) — The exit case: totals over unequal periods**

Evaluating exit from an underperforming supplier: staying costs £1.5M/year with a 10% expected annual price rise at renewal in one year (compound thereafter). Exiting costs: £400k transition (one-off, year 1), then £1.3M/year with the new supplier, flat for a three-year term. Comparing total three-year costs from today, what is the difference?

- A) Staying costs £4.965M; exiting costs £4.0M — exit saves ~£965k.
- B) Staying costs £4.5M; exiting costs £4.3M — exit saves £200k.
- C) Staying costs £4.965M; exiting costs £4.5M — exit saves ~£465k, with the year-1 transition overlap treatment stated explicitly.
- D) The costs are equal.

**Correct answer: C**

**Explanation:** Build both three-year totals carefully. Staying: year 1 at current £1.5M; year 2 at renewal +10% = £1.65M; year 3 compounds again = £1.815M. Total = 1.5 + 1.65 + 1.815 = £4.965M. Exiting, with the incumbent paid through year 1 and the new supplier starting year 2: year 1 = £1.5M + £400k transition = £1.9M; years 2 and 3 with the new supplier at £1.3M each = £2.6M; total = £4.5M. Saving ≈ £465k. This tests precision under an implicit assumption: the saving figure swings materially — by roughly a fifth of itself — purely on how the year-1 transition overlap is treated, and that assumption is exactly what exit cases most often leave implicit. This is the examinable point, and it outranks the arithmetic: in supplier exit economics, a strong candidate's answer states the transition-period cost model explicitly before any saving figure reaches a board.

**Question 7 (moderate) — Compliance risk quantification**

A risk register quantifies a compliance gap: probability of regulatory examination in any year 20%; probability the gap is found if examined 80%; expected penalty and remediation-under-enforcement cost if found £2.0M. Fixing the gap proactively costs £250k. Over a single year, what does expected-value arithmetic say, and what is its honest limit?

- A) Expected annual exposure = 20% × 80% × £2.0M = £320k, exceeding the £250k fix — expected value alone already favours fixing; and the honest limit is that expected value understates the case, since a £2.0M realised loss also carries unquantified reputational and regulatory-relationship damage, and the exposure recurs every year the gap persists while the fix is one-off.
- B) Expected exposure = £320k, so fixing saves £70k — proceed, and the analysis is complete.
- C) Expected exposure = 20% × £2.0M = £400k.
- D) The probabilities are guesses, so no analysis is possible.

**Correct answer: A**

**Explanation:** The chain multiplies: 0.20 × 0.80 = 0.16 annual probability of enforcement; 0.16 × £2.0M = £320k expected annual cost, against a £250k one-off fix. Option C drops the detection-conditional (a common register error — probabilities in a chain multiply, and skipping a link inflates exposure). The question asks for the arithmetic and its honest limit, and option A supplies both; option B's "analysis is complete" is where risk arithmetic goes wrong at senior levels. Two limits matter, and a strong candidate's answer supplies both: recurrence asymmetry (the £320k exposure is annual while the £250k fix is one-off, so three years of persistence is ~£960k of expectation against £250k), and the fact that expected value is the wrong sole criterion for single large losses — an organisation does not experience "£320k of smooth annual cost"; it experiences either nothing or a £2.0M enforcement event with reputational and relationship damage no register line captures, which argues the fix case is stronger than the expected-value margin suggests. Option D's nihilism about estimated probabilities misunderstands their role: sensitivity-testing them (the fix wins even at half the assumed probabilities) shows the decision is robust to the guessing. This tests managing service compliance and risk exactly as the summary names it: chain the probabilities correctly, then judge what the arithmetic cannot see.

**Question 8 (moderate) — Demand growth against stepped capacity**

An estate-wide platform serves 2.0M transactions/day, growing 4% per month compound. Capacity steps: current ceiling 3.0M/day; the next expansion (to 5.0M/day) takes 6 months to deliver from approval. To one month's precision, when does demand hit the current ceiling, and what is the latest approval date?

- A) Ceiling at ~month 14; approve by month 8.
- B) Ceiling at ~month 10; approve by month 4.
- C) Ceiling at ~month 12; approve by month 6.
- D) Ceiling at ~month 18; approve by month 12.

**Correct answer: B**

**Explanation:** Solve 2.0 × 1.04ⁿ ≥ 3.0, i.e. 1.04ⁿ ≥ 1.5. Compound stepwise: 1.04² = 1.0816; 1.04⁴ ≈ 1.170; 1.04⁸ ≈ 1.369; 1.04¹⁰ ≈ 1.481; 1.04¹¹ ≈ 1.540 — the ceiling is crossed between months 10 and 11, so ~month 10 at one-month precision (rule-of-72 check: doubling at 4% ≈ 18 months, and 1.5× arrives well before doubling — month 10–11 fits; option D confuses 1.5× with 2×). Latest approval = 10 − 6 = month 4. This tests the two-step structure of capacity strategy: compounding the demand curve, then subtracting the response lead time to reach a decision deadline rather than an event date. A strong candidate's answer treats month 4 as the last date the decision can be made without accepting either a demand-management intervention or an outage risk — a governance calendar that meets quarterly needs this on its next agenda, not its next-but-one.

**Question 9 (moderate) — The KPI pack's period trick**

A supplier's annual review pack states: "Incident resolution within SLA improved from 82% to 94% over the contract period." Examining the data: monthly figures ran 82%, 79%, 81%, 84%, 83%, 85%, 88%, 90%, 87%, 91%, 93%, 94%. The contract requires ≥90% each month, with credits per month below target. How many months breached, and what is the fair characterisation of the improvement claim?

- A) No breaches — the trend is upward throughout.
- B) Eight months breached the ≥90% monthly requirement (months 1–7 and month 9); the improvement claim is real but the pack's endpoints-only framing converts a year in which the supplier missed its monthly obligation two-thirds of the time into a success narrative — credits are due for eight months, and the fair statement is "obligation met only in the final third of the year, with a genuine improving trend".
- C) Eight months breached; the improvement claim is false.
- D) Four months breached; the supplier performed acceptably overall.

**Correct answer: B**

**Explanation:** Count against the monthly obligation: figures below 90% occur in months 1–7 and month 9 (82, 79, 81, 84, 83, 85, 88, then 87) — eight breaching months; months 8, 10, 11, 12 (90, 91, 93, 94) comply. So: eight breaches, credits due for each, and the endpoints-only claim ("82% to 94%") is technically true and materially misleading — it selects the two data points that flatter and discards the obligation structure entirely. Option B holds all three truths: the breach count, the credit consequence, and the genuinely improving trend (which matters — a supplier trending 79% → 94% is a different management problem from one flat at 85%, and the relationship response differs accordingly: hold the credits, acknowledge the trajectory, contract the trajectory into commitments). Option C is right on the count but wrong to call the improvement false — the trend is real; precision about what is false (the implied compliance) preserves credibility in the review meeting. Options A and D miscount by reading the trend instead of the threshold. This tests whether a candidate recomputes against the contract's actual obligation structure — monthly gates, not annual endpoints — before the meeting, because the pack's author already has.

**Question 10 (hard) — Total cost of ownership with refresh cycles**

Comparing two storage strategies over nine years: Strategy P (on-premises) costs £1.2M per refresh cycle (hardware, every 3 years — three purchases at years 0, 3, 6) plus £300k/year running costs. Strategy C (cloud) costs £550k/year, all-in, with prices contractually flat for three years then assumed to rise 5% at each three-year renewal (compound across renewals). What are the nine-year totals?

- A) P: £6.3M; C: £5.21M — cloud cheaper by ~£1.09M.
- B) P: £6.3M; C: £4.95M — cloud cheaper by £1.35M.
- C) P: £5.4M; C: £5.21M — broadly equal.
- D) P: £6.3M; C: £5.79M — cloud cheaper by ~£0.51M.

**Correct answer: A**

**Explanation:** Strategy P: three refresh purchases (years 0, 3, 6) = 3 × £1.2M = £3.6M, plus nine years' running at £300k = £2.7M; total £6.3M. Strategy C: years 1–3 at £550k = £1.65M; years 4–6 at £550k × 1.05 = £577.5k/year = £1.7325M; years 7–9 at £577.5k × 1.05 = £606.4k/year = £1.8192M; total = 1.65 + 1.7325 + 1.8192 ≈ £5.21M. Difference ≈ £1.09M in cloud's favour. Option B forgets the renewal escalations (9 × £550k); option C drops one refresh cycle from P; option D over-escalates C (applying 5% annually rather than per-renewal). This tests two modelling points that decide real comparisons: refresh-cycle strategies front-load cost and are sensitive to how many cycles the horizon catches; consumption strategies back-load cost through escalation, and the escalation assumption (flat? 5%? per-year or per-renewal?) is the case's most sensitive input. A strong candidate's answer states both totals and shows one sensitivity — cases that show one number per option are advocacy; cases that show the sensitivity are analysis.

**Question 11 (hard) — Migration economics: the unit-cost crossover**

A data centre exit migrates 120 services. The data centre's fixed running cost is £2.4M/year regardless of occupancy (until final exit, when it drops to zero); each migrated service costs £15k one-off to move and £8k/year to run in the cloud versus £0 marginal on-premises. The migration runs at 40 services/year for three years, with final exit at the end of year 3. What is the total three-year cost of the migration period, and what does the shape imply?

- A) £7.2M fixed + £1.8M migration + £1.44M cloud running = £10.44M; the shape implies nothing unusual.
- B) £7.2M + £1.8M + £0.96M = £9.96M; and the shape is the strategic point: the £2.4M fixed cost persists undiminished through all three years while cloud costs stack on top, so the programme's total cost peaks during migration and the savings arrive only after final exit — meaning partial migration delivers negative return, and the business case lives or dies on reaching 100% and switching the fixed cost off.
- C) £7.2M + £1.8M + £0.96M = £9.96M; the shape shows steady savings from year 1.
- D) £4.8M + £1.8M + £0.96M = £7.56M.

**Correct answer: B**

**Explanation:** Compute each stream. Fixed: £2.4M × 3 years = £7.2M (the data centre runs until final exit at end of year 3). Migration: 120 × £15k = £1.8M. Cloud running: modelling the 40/year schedule (40 migrating in year 1 run in cloud for ~2 further years, 40 in year 2 for ~1 further year, 40 in year 3 for ~0), cloud-years = 40 × 2 + 40 × 1 + 40 × 0 = 120 service-years × £8k = £0.96M. Total £9.96M. Option A miscounts cloud-years; option D halves the fixed cost as if occupancy reduced it, contradicting the stated fixed-until-exit structure. This tests whether the candidate reads the shape — option B's real content — which is the defining economics of exit programmes: costs rise during migration (double-running is structural, not a failure), and the entire return is gated on the final service leaving and the fixed cost terminating. A strong candidate's answer draws two governance consequences: the last, hardest services hold the whole case's savings hostage, so their plan deserves the most scrutiny, not the least; and any mid-programme pause "to bank savings so far" banks nothing, because partial exit saves £0 of fixed cost.

**Question 12 (hard) — Reading a risk-weighted portfolio table**

An annual technology risk review scores four estate risks (probability × impact on a 1–5 × 1–5 grid, with financial exposure estimates):

| Risk | Probability | Impact | Score | Est. annual exposure |
|---|---|---|---|---|
| Legacy platform failure | 4 | 5 | 20 | £3.0M |
| Supplier concentration | 2 | 5 | 10 | £1.6M |
| Skills attrition (platform team) | 4 | 3 | 12 | £0.8M |
| Certificate/secret management gaps | 3 | 4 | 12 | £1.2M |

Remediation budget covers two risks this year. The board suggests "the top two scores". Which allocation reasoning is strongest?

- A) Take the two highest scores: legacy platform (20) and a tie-break between skills and certificates (12 each) — the grid decides.
- B) Legacy platform is unarguable on any method (highest score and exposure). For the second slot, the grid is a screening tool, not a decision rule: compare remediation cost against exposure reduced per risk, and note the grid's blind spots — skills attrition at 4×3 is the enabling risk that inflates every other probability (an under-skilled platform team makes legacy failure and certificate gaps both likelier), while supplier concentration's 2×5 profile is exactly the low-frequency/high-severity shape that score grids systematically underweight. Decide the second slot on remediation economics and risk coupling, and state the reasoning to the board.
- C) Highest exposures: legacy (£3.0M) and supplier concentration (£1.6M) — money outranks grids.
- D) Fund skills and certificates — the two cheapest remediations stretch the budget furthest.

**Correct answer: B**

**Explanation:** This question tests whether a candidate uses scoring frameworks or is used by them. All methods agree on legacy platform failure (top score, top exposure). The second slot is where method matters. The grid ties skills and certificates at 12 and ranks supplier concentration last at 10 — but 5×5 grids compress precisely the risks that matter most at portfolio level: low-probability/catastrophic-impact events (supplier failure at probability 2, impact 5) score below moderate/moderate risks despite being the shape that ends organisations, and grids cannot represent coupling — skills attrition is not a standalone £0.8M risk but a multiplier on every probability in the table, because an under-skilled team detects less, patches slower, and errs more. Option B holds the framework at its correct strength (screening), adds the two analyses grids cannot do (remediation economics and coupling), and — the governance behaviour a strong candidate's answer names — explains the departure from "top two scores" to the board rather than either silently obeying or silently overriding. Option A outsources judgement to arithmetic the board suggested precisely because they expect improvement on it. Option C's exposure-only ranking at least sees the severity issue but discards probability and cost entirely. Option D optimises budget consumption, not risk reduction. This maps to managing risks and taking preventative action when risks become unacceptable — the testing skill's phrase — which presumes the candidate can say which risks those are, and why, in a way that survives board scrutiny.

### Administration tips

- **Score for whether a candidate recomputes a headline figure from raw data** — supplier packs, investment cases, and risk registers arrive pre-framed.
- **Watch for whether a candidate states the baseline, horizon, and denominator explicitly** before computing.
- **Note whether a candidate makes an implicit assumption (a transition overlap, an escalation basis) explicit** before presenting a saving or cost figure.
- **Note whether a candidate states a computed shape or trajectory**, not just a total, where the item calls for it.
- **Use the risk-grid item (Question 12) to observe whether a candidate treats a scoring framework as a screening tool rather than a decision rule.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that accepts a flattering exclusion or endpoint framing** without checking the governing document or full data series.
- **Crediting a cost comparison that ignores escalation, indexation, or a transition-period overlap.**
- **Accepting an unweighted consolidation** — averaging sub-group means, service availabilities, or quarterly rates without volume weights.
- **Missing when a candidate treats expected value as the whole answer** for a single large potential loss.
- **Rewarding a partial-completion savings claim** where the underlying cost structure is fixed until full completion.
- **Rewarding obedience to a scoring grid** where the candidate does not also test it against remediation economics and risk coupling.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. At principal level in infrastructure operations the material is supplier contracts and service level agreements, service management framework documentation, change and incident policy, configuration management standards, and regulatory requirements.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means it settles neither — regardless of what the candidate might know from operating services of this kind.

Long operational experience is the principal hazard for a strong candidate. They will know how incident policy usually works, what a configuration management database normally contains, and what a supplier would normally be expected to do, while the passage in front of them describes this particular arrangement.

Three specifics matter especially at this level. First, service level agreements define their terms — availability, priority, response, resolution — with precision, and those definitions decide what is actually promised; owning operational relationships with suppliers and ensuring alignment to contractual requirements makes this the reading that most directly determines whether an organisation is getting what it pays for. Second, service management frameworks distinguish carefully between roles and authorities — who may raise, who may approve, who is consulted, who must be informed — and acting outside them is a governance failure rather than a technical one. Third, priority definitions in incident policy are usually functions of two variables, impact and urgency, and reading one as the whole is a reliable way to misclassify.

### How this assessment maps to the role

- **Reading supplier agreements** maps to owning operational relationships with suppliers.
- **Reading service level definitions** maps to **Service focus** and **Availability and capacity management**.
- **Reading incident and change policy** maps to **Incident management** and **Change management**.
- **Reading configuration standards** maps to **Asset and configuration management**.
- **Reading framework documentation** maps to **Service management framework knowledge**.
- **Reading problem records** maps to **Problem management**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

*Passage A — for Questions 1 to 4*

"Incident priority is determined by impact and urgency in accordance with the matrix at Annex B. Priority 1 incidents are those with both high impact and high urgency. The service desk assigns an initial priority; the incident manager may reassign priority at any point during the incident and must record the reason. Response targets apply from the time the incident is logged, not from the time it is reported. Resolution targets are suspended while an incident is awaiting information from the customer. A workaround that restores service is treated as a resolution for the purposes of the resolution target; the underlying fault is managed as a problem."

**Question 1 (easy)**

Statement: An incident with high impact is a Priority 1 incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: Priority 1 requires "both high impact and high urgency". High impact alone does not satisfy a conjunctive definition — a high-impact incident that is not urgent, such as a fault affecting a service nobody needs until month-end, is not Priority 1. This tests whether a candidate reads one half of a two-variable definition as the whole, the commonest way incidents get misclassified, in assessments and in service desks.

**Question 2 (moderate)**

Statement: The response target begins when a user reports the incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states that response targets apply "from the time the incident is logged, not from the time it is reported". The clause exists precisely to close this reading, and the distinction has real money in it — a gap between reporting and logging is time that does not count against the supplier, worth knowing when assessing performance against the agreement.

**Question 3 (moderate)**

Statement: An incident resolved by a workaround has met its resolution target.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage establishes this: "A workaround that restores service is treated as a resolution for the purposes of the resolution target." A strong candidate's answer notes what it establishes and what it does not — the target is met, and the underlying fault remains, managed as a problem. Both are true, and a supplier reporting strong resolution performance while an unaddressed problem backlog grows is operating entirely within this policy, exactly the pattern worth watching for.

**Question 4 (harder)**

Statement: The incident manager can lower the priority of an incident without the service desk's agreement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage says the incident manager "may reassign priority at any point during the incident and must record the reason". Reassignment includes lowering, no agreement from the service desk is required, and the only attached condition is recording the reason. This tests whether a candidate reads an unqualified power as running in only one direction — the passage says reassign without qualifying direction, and adding a condition that is not there is the trap.

*Passage B — for Questions 5 to 8*

"All configuration items must be recorded in the configuration management database before entering the production environment. The record must include the item's owner, its supported version and its relationships to other configuration items. Configuration items provided as part of a managed service are recorded at service level rather than individually, provided the supplier maintains a component inventory available to the department on request. Records are verified by audit annually. A configuration item whose record has not been verified within eighteen months must be treated as unverified in risk assessments. The configuration manager may exempt an item from individual recording where the item is ephemeral and automatically provisioned."

**Question 5 (easy)**

Statement: A configuration item must be recorded before it enters production.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly with "must". Two routes away from individual recording follow — managed services recorded at service level, and the ephemeral exemption — so this baseline obligation is real and not universal, which the later questions test.

**Question 6 (moderate)**

Statement: Components of a managed service must be recorded individually in the configuration management database.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: such items "are recorded at service level rather than individually, provided the supplier maintains a component inventory available to the department on request". This tests whether a candidate notices the proviso as a supplier management point — the service-level recording is conditional on the supplier holding an inventory available on request, which means calling for it occasionally is how the condition stays alive rather than nominal.

**Question 7 (moderate)**

Statement: A configuration item verified sixteen months ago is treated as unverified in risk assessments.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The threshold is eighteen months: an item "whose record has not been verified within eighteen months must be treated as unverified". Sixteen months is inside the window, so the item is not treated as unverified. The passage contradicts the statement. A strong candidate's answer notes the interaction with the annual audit — verification is meant to happen every twelve months, and the unverified threshold sits six months beyond it, a deliberate grace period rather than an immediate consequence.

**Question 8 (harder)**

Statement: An automatically provisioned ephemeral item is exempt from individual recording.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the configuration manager "may exempt" such an item — a discretionary power, not an automatic exemption. An ephemeral automatically provisioned item is eligible for exemption and remains subject to the recording requirement unless the configuration manager exercises the power. The statement asserts the exemption as a property of the item rather than as an outcome of a decision. This tests distinguishing eligibility from entitlement, and it matters operationally: a team assuming their ephemeral infrastructure is automatically out of scope may be non-compliant without anyone deciding anything.

*Passage C — for Questions 9 to 12*

"The supplier will provide 24-hour cover for Priority 1 and Priority 2 incidents, and cover during business hours for Priority 3 and Priority 4. Business hours are 08:00 to 18:00 on working days. Where a Priority 3 incident is raised outside business hours, the response target begins at the start of the next business day. The supplier will provide a named service manager and will notify the department of any change to that appointment. The supplier will hold a quarterly service review with the department. The department may request additional reviews where performance has fallen below target in any month; the supplier will not unreasonably refuse such a request."

**Question 9 (moderate)**

Statement: A Priority 2 incident raised at 22:00 receives cover immediately.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage provides 24-hour cover for Priority 1 and Priority 2, and the deferral of response targets to the next business day is stated only for Priority 3. So a Priority 2 raised at 22:00 falls within 24-hour cover. The passage establishes this, and the asymmetry between the priorities is the substance of the clause.

**Question 10 (moderate)**

Statement: A Priority 4 incident raised at 19:00 on a working day has its response target begin the next business day.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Priority 4 is covered during business hours only, so the incident is outside cover when raised — but the clause deferring the response target to the next business day is written for Priority 3 specifically. The passage does not say what happens to a Priority 4 raised out of hours. This tests whether a candidate notices when a clause names one priority and not its neighbour, exactly the kind of gap that becomes a dispute later.

**Question 11 (moderate)**

Statement: The supplier must agree to an additional service review when monthly performance has fallen below target.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says the supplier "will not unreasonably refuse such a request" — a qualified obligation, not an absolute one, since a refusal is permitted if it is reasonable. The statement's "must agree" overstates it. This tests recognising that reasonableness standards of this kind are common in supplier agreements and genuinely weaker than they read at first glance, though far from nothing, since an unreasonable refusal is a breach.

**Question 12 (harder)**

Statement: The supplier must obtain the department's agreement before changing the named service manager.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says the supplier "will notify the department of any change to that appointment". Notification is not consent, and the passage allocates no approval role to the department. This tests a distinction worth being clear about: the named service manager is often the most valuable thing in an operational relationship, and if an organisation wants a say in changing them, the agreement has to give it one — this one does not.

### Administration tips

- **Score for whether a candidate reads two-variable definitions as conjunctions**, not disjunctions.
- **Watch for whether a candidate checks when a clock starts** — reported, logged, or next business day.
- **Note whether a candidate distinguishes a workaround-as-resolution from a fault that is genuinely fixed.**
- **Note whether a candidate reads "may exempt" as eligibility rather than entitlement.**
- **Keep timing consistent** across candidates for this level.
- **Use the notification-versus-consent item (Question 12) to observe whether a candidate distinguishes being told from being asked.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats high impact alone as meeting a conjunctive priority definition.**
- **Crediting an answer that assumes response targets run from the time of report** rather than the time stated in the passage.
- **Missing when a candidate reads a discretionary exemption as automatic.**
- **Accepting a direction added to an unqualified power** — a reassignment clause read as one-way when the passage is silent on direction.
- **Rewarding an answer that extends a clause written for one priority to another** without textual support.
- **Missing when a candidate reads a reasonableness standard as an absolute obligation, or notification as consent.**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level in infrastructure operations the scenarios involve incident leadership, supplier relationships, the standing tension between change control and delivery speed, and leading teams whose success is measured by the absence of events.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers. First, restoration and diagnosis are separate activities: during an incident the priority is service, afterwards it is understanding, and mixing them costs users during and costs an honest account afterwards. Second, process problems are almost always design problems: when people work around change control, the change process is usually the thing that needs looking at — treating it as indiscipline drives the workarounds somewhere invisible, which is strictly worse. Third, this function is noticed only when it fails: making the value of prevented incidents legible is a permanent part of the job, and nobody else in the organisation will do it.

### How this assessment maps to the role

- **Incident leadership** maps to **Incident management** and **Problem management**.
- **Change judgement** maps to **Change management**.
- **Supplier management** maps to owning operational relationships with suppliers.
- **Capacity and availability** maps to **Availability and capacity management**.
- **Team leadership** maps to leading and directing IT operations specialist teams.
- **Service and user perspective** maps to **Service focus** and **User focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — During a major incident**

A major incident is running. Two engineers are arguing about the root cause while the service remains down. What is the most effective response?

- A) Let them work it out; the cause is what matters.
- B) Redirect to restoration — revert, fail over, restart — and hold the cause discussion afterwards with logs and metrics preserved, because the argument can be settled later and the outage cannot.
- C) Decide the cause and direct the fix.
- D) Bring more engineers onto the bridge.

**Correct answer: B. Least effective: D**

**Explanation:** Option B separates the two activities and preserves what is needed for the later diagnosis. Option D is least effective: adding people to a live incident raises coordination cost sharply, and a crowded bridge is slower and noisier than a small one — one of the most reliably counterproductive instincts in incident management. Option C commits to a hypothesis on partial evidence. Option A allows a debate to continue while users are affected. This tests whether the candidate keeps restoration and diagnosis separate under pressure.

**Question 2 (easy) — Blame in a post-incident review**

A post-incident review is heading towards identifying who made the error. What is the most effective response?

- A) Allow it; accountability matters.
- B) Redirect to the conditions — what made the wrong action easy, what let it reach production, why nothing caught it — because a review that lands on a person stops there, and the conditions will produce the same outcome with someone else.
- C) Take the discussion offline.
- D) Restate that the review is blameless.

**Correct answer: B. Least effective: A**

**Explanation:** Option B supplies the specific questions that produce systemic findings, which is what makes the redirection work — stating that a review is blameless does nothing without them. Option A is least effective because it changes nothing about the system and guarantees the next incident is described less candidly, which is the expensive consequence. Option D names the principle without the alternative. Option C removes the discussion from the people who would learn. This tests whether a candidate produces systemic, actionable findings rather than an individual conclusion.

**Question 3 (moderate) — Teams working around change control**

A team has been implementing changes outside the change process for two months. What is the most effective response?

- A) Stop the practice immediately and require compliance.
- B) Find out why first — two months of workaround by a capable team usually means the process does not work for their case, such as a weekly board that cannot serve an urgent fix — because enforcing without fixing that just moves the workaround somewhere less visible.
- C) Report it as a compliance breach.
- D) Add technical controls preventing unapproved changes.

**Correct answer: B. Least effective: C**

**Explanation:** Sustained workaround by competent people is information about the process. Option B gets it, and the likely findings are actionable — a missing emergency path, a board cadence incompatible with operational reality, or approvals required for changes that do not need them. Option C is least effective: treating it as a compliance matter before understanding it guarantees nobody hears about the next workaround and leaves the process defect in place. Option D is probably part of the eventual answer and, applied first, forces a team into a process that does not work. Option A is the same error more gently.

**Question 4 (moderate) — A supplier missing targets**

A supplier is consistently missing resolution targets. The contract provides service credits. What is the most effective response?

- A) Claim the credits.
- B) Establish why — capability, resourcing, or a contract that rewards something other than what is needed — and address that, because credits compensate for a failure without changing it, and a supplier under-resourcing the account because the commercial model permits it will keep doing so through any number of claims.
- C) Escalate to the supplier's account director.
- D) Begin planning to replace the supplier.

**Correct answer: B. Least effective: D**

**Explanation:** The three causes need different responses, and the commercial one is both the most common and the one least affected by escalation or credits. Option B diagnoses first. Option D is least effective as an opening move: replacing an infrastructure operations supplier is a long, risky undertaking, and starting it before knowing whether the problem is fixable is disproportionate. Option A takes compensation and accepts the service as it is. Option C is reasonable once the escalation has a clear subject.

**Question 5 (moderate) — A capacity warning nobody wants**

Analysis shows a service will exhaust capacity in about four months. The service owner says there is no budget this year. What is the most effective response?

- A) Note the risk and move on; budget is the owner's decision.
- B) Put the consequence and the date in writing to the service owner and their accountable superior, with the options — additional capacity, reducing load, or accepting a degradation risk from roughly a stated date — so the decision is made explicitly by someone able to make it.
- C) Escalate immediately to senior management.
- D) Find efficiencies to defer the problem.

**Correct answer: B. Least effective: A**

**Explanation:** The service owner may lack both the budget and the authority, which is why option B routes it upward while keeping them in it rather than going around them. The written record and the specific date turn a warning into a decision. Option A is least effective: a foreseeable outage that nobody was told about in a form they could act on will not be seen afterwards as somebody else's problem. Option C goes over the service owner's head without giving them a chance. Option D is worth doing alongside and is dangerous alone, since deferring the wall by two months removes the urgency without removing the problem.

**Question 6 (moderate) — Configuration data nobody trusts**

A configuration management database is known to be inaccurate, and teams have stopped relying on it. What is the most effective response?

- A) Run a data cleansing exercise.
- B) Establish why it drifts — almost always that updating it is a manual step after the real work, so it is skipped under pressure — and fix the mechanism by deriving records from the systems themselves wherever possible, because a cleansed database maintained the same way will be inaccurate again within a year.
- C) Require teams to update it and audit compliance.
- D) Accept it and rely on other sources.

**Correct answer: B. Least effective: D**

**Explanation:** Configuration data that has drifted once will drift again unless the mechanism changes, and the mechanism is nearly always a manual update decoupled from the change itself. Option B addresses that, and automated discovery or infrastructure-as-code derivation is what makes accuracy the default rather than an act of discipline. Option D is least effective: abandoning the configuration database means service compliance and risk assessment lose their basis, which the role explicitly names managing. Option A is necessary and insufficient alone. Option C adds enforcement to a mechanism that structurally invites skipping.

**Question 7 (harder) — Pressure to bypass change control**

A programme director asks for approval of a significant change the day before a peak period, outside the normal change window. What is the most effective response?

- A) Refuse; the change window exists for this reason.
- B) State the risk concretely — what could fail, what the impact would be during peak, how long recovery would take — and put the decision to whoever owns the service risk, with the alternatives of deploying after peak or deploying behind a mechanism that can be disabled without a further change.
- C) Approve it; the programme owns its delivery.
- D) Approve it with a rollback plan.

**Correct answer: B. Least effective: C**

**Explanation:** Option B makes the risk evaluable and offers the alternative most often overlooked — decoupling deployment from activation, which frequently dissolves the tension entirely. Option C is least effective because it treats a risk the assessor can see and the requester cannot as somebody else's problem. Option D is reasonable and thin: a rollback plan for a peak-period failure still means an outage during peak, which is the thing being risked. Option A removes the risk owner from a decision that is theirs.

**Question 8 (harder) — A problem nobody is fixing**

A known problem has generated recurring incidents for six months. Each incident is resolved by workaround. What is the most effective response?

- A) Continue with the workaround; it restores service.
- B) Quantify what the recurrence costs — incident volume, engineer hours, user-facing minutes, the risk that the workaround stops working — and put the fix forward as a funded piece of work, because an efficient workaround makes a problem permanent by removing the pressure to solve it.
- C) Escalate the problem to the supplier.
- D) Raise its problem priority internally.

**Correct answer: B. Least effective: A**

**Explanation:** This is the specific failure mode of good workarounds: they resolve incidents against target while the underlying fault persists indefinitely, and because service is restored each time, nothing ever forces the issue. Option B converts the accumulated cost into a case. Option A is least effective as a settled position, since six months of recurrence with no plan is a decision made by default. Option C may be right and depends on whose fault it is. Option D changes a label rather than securing the resource.

**Question 9 (harder) — A single point of knowledge**

One engineer is the only person who can operate a critical part of the platform. What is the most effective response?

- A) Ask them to write runbooks.
- B) Reduce the dependency by having someone else do the work alongside them — a real change, a real incident — because the risk lives in what the expert does without thinking, which documentation systematically misses.
- C) Recruit a second specialist.
- D) Simplify the platform.

**Correct answer: B. Least effective: C**

**Explanation:** Runbooks are worth having and are reliably incomplete precisely where it matters, because the expert cannot see which of their own actions are non-obvious. Option B transfers capability by exercising it. Option C is least effective as the primary response: slow, uncertain, expensive, and it ends with concentrated knowledge in two heads rather than distributed capability. Option D is often the best long-term answer and does nothing about the next quarter.

**Question 10 (harder) — Recognising prevented incidents**

An engineer has spent months on monitoring and automation. Incident volume in their area has fallen sharply and their work appears in no delivery metric. What is the most effective response?

- A) Thank them and record it in their appraisal.
- B) Make the value countable — incidents avoided at the previous rate, engineer hours not spent, user-facing minutes not lost — and put it in front of the people who decide promotion and resourcing, because prevented incidents are invisible unless someone converts them into a number.
- C) Give them credit publicly at a team meeting.
- D) Move them onto more visible work.

**Correct answer: B. Least effective: D**

**Explanation:** Success in this work looks like nothing happening, which disadvantages the person in every process that counts outputs. Option B produces the count, which serves them and protects the work from being deprioritised next year. Option D is least effective — it solves the visibility problem by ending the valuable work and signals that prevention is a career dead end. Options A and C are good and reach nobody who makes resourcing decisions.

**Question 11 (harder) — A metric that will be gamed**

A team is being considered for a target of reducing incident numbers. What is the most effective observation?

- A) It is a sound target; fewer incidents is better.
- B) Counting incidents creates pressure on the cheapest thing to change, which is how events are classified rather than whether they happen — so the count will improve while reliability does not, and a measure the team does not control the definition of, such as user-facing unavailable minutes, is a better target.
- C) It should be combined with other measures.
- D) Targets should not be set on incidents.

**Correct answer: B. Least effective: A**

**Explanation:** Any measure used as a target attracts pressure at its weakest point, and for incident counts that point is the classification threshold rather than the underlying reliability. Option B names the mechanism and the remedy — measure something defined by users rather than by the team's own judgement. Option A is least effective because it adopts the target without considering how it will be met. Option C is generically sensible and does not address a specific gaming route. Option D over-corrects; reliability targets are legitimate and the choice of measure is what matters.

**Question 12 (harder) — Reporting to a board**

A director requests a summary of operational performance for a board paper. Availability is strong; mean time to restore is poor. What is the most effective response?

- A) Report availability; it is the headline.
- B) Report both and interpret them — services rarely fail and take a long time to recover when they do, which is specific and fixable — because a board given only the favourable metric will not fund the work the other one points at.
- C) Report availability and mention restore time if asked.
- D) Describe performance as mixed.

**Correct answer: B. Least effective: A**

**Explanation:** Option B is honest and, more usefully, interpretive: high availability with slow recovery is a recognisable pattern with known remedies — runbooks, rehearsed failover, better diagnostics — and naming it turns two numbers into a proposal a board can fund. Option A is least effective because it earns thanks now and leaves the recovery problem unfunded until a serious incident, at which point the candidate will be asked what they knew. Option C is the same omission with a fallback. Option D characterises without informing.

### Administration tips

- **Score for whether a candidate keeps restoration and diagnosis separate under pressure**, in the incident-leadership items.
- **Watch for whether a candidate redirects a review or an investigation toward systemic conditions** rather than an individual.
- **Note whether a candidate reads a sustained workaround, whether by a team or by a supplier, as evidence about a process** before treating it as a compliance or performance matter.
- **Note whether a candidate converts a technical risk or an invisible success into a written, quantified case** aimed at the person able to act on it.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.
- **Use the gamed-metric item (Question 11) to observe whether a candidate reasons about how a target will actually be met**, not just whether the target sounds sound.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that adds people to a live incident bridge** rather than protecting a small, coordinated response.
- **Crediting an answer that lets a post-incident review conclude on an individual** rather than the conditions.
- **Accepting service credits, or a supplier's own workaround, as an adequate response to poor supplier performance** without diagnosis.
- **Missing when a candidate cleanses data or documents a dependency without fixing the mechanism that caused it.**
- **Rewarding an answer that lets an efficient workaround stand as the permanent response** to a recurring problem.
- **Missing when a candidate sets or accepts a target on a count the team itself defines**, rather than a user-facing measure.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a principal infrastructure operations engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested the difference between an instance and a pattern: several incidents with different immediate causes usually share one property, most often a condition developing observably before anyone noticed; a workaround that resolves an incident every time can keep a problem alive indefinitely; and a process that capable people work around is telling the organisation about the process. The numeric section tested the arithmetic that runs this function: availability in minutes rather than percentages, headroom at peak rather than average utilisation, error budgets as burn rate against elapsed time, and volumetrics done before rather than after the first full-volume run. The verbal section tested the documents that define what an organisation is owed: priority as impact and urgency, response clocks starting at logging rather than reporting, a workaround counting as a resolution, notification not being consent, and "may exempt" making something eligible rather than exempt. The situational judgement section tested standing between delivery pressure and operational reality while leading a function that is noticed only when it fails: the strong answers restored before diagnosing, read workarounds as design feedback, made risks concrete enough for someone accountable to accept them explicitly, and converted prevented incidents into numbers that could be seen.

If one thread runs through all four, it is that this role's value is measured in things that did not happen, and nobody else will translate that into evidence on the candidate's behalf. The outages avoided, the peak absorbed, the change that did not break anything — these are real, and they are invisible by construction. A strong candidate treats making them visible not as self-promotion but as how the work continues to be funded and how the people doing it get recognised.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to how the candidate would actually govern supplier relationships, present to a board, and sequence a strategic programme.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can resolve a situation, protect the honest record, and strengthen the system that will face the situation's successor — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
