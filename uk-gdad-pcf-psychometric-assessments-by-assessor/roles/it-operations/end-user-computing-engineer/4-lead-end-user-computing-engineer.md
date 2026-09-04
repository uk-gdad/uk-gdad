# Lead End User Computing Engineer - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead end user computing engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the materials a lead end user computing engineer genuinely handles — vendor contracts and supplier performance data, high-impact change requests, release policies, test plans spanning functional and non-functional specifications, procedures and standards drafted and enforced by this role, and the reports through which end user computing is represented to the wider organisation — and the decisions genuinely made, such as holding suppliers to account, leading the investigation of the incidents that matter most, setting standards for the security and integrity of the estate, and working with technical architecture to judge feasibility.

The role holds expert technical understanding and accountability for vendor and supplier management, and works across IT operations and other functions to understand productivity, development and feasibility. That is judgement exercised across boundaries — technical, commercial, and organisational: recognising patterns in supplier and estate data that others miss; reasoning rigorously about high-impact changes where a wrong assessment cascades; checking documents whose errors become everyone's errors; prioritising where accountability, not just time, is the scarce resource; interpreting data sets for stakeholders who will act on that reading; and making judgement calls where users, engineers, suppliers, and architecture pull in different directions.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for the role, a mapping of its dimensions to the named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical scenarios rather than abstract puzzles. At lead level, the materials are the artefacts of accountability: supplier performance summaries, high-impact change requests, release policy checks, test plans, security standards, and the cross-functional evidence through which feasibility and productivity are judged.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, with speed and accuracy often reported separately.

Cognitive assessment is particularly relevant for this role because its professional value is structured thinking applied where errors are most expensive — investigating the estate's most complex faults, tracing consequences through dependencies others have not mapped, detecting a deviation before it becomes an incident, and reading supplier performance data presented in its own best light.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** and **Ownership** skills.
- **Logical deduction** maps to the **Change management** skill.
- **Error checking** maps to the **Technical specialism** skill.
- **Prioritisation** maps to the **Ownership** and **Service focus** skills.
- **Applied problem solving** maps to the **Incident management** skill and the **Testing** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern in supplier performance data**

A hardware repair supplier reports monthly turnaround times (days) for the last eight months: 4.1, 4.0, 4.2, 4.1, 4.6, 5.1, 5.7, 6.2. The contract target is 5.0 days, and the supplier notes "only three months have exceeded target." What is the most important pattern?

- A) Five of eight months met target, so performance is broadly acceptable.
- B) A steady upward drift began around month 5 and has continued for four consecutive months — the trajectory, not the current breach count, is the story, and it projects further deterioration if unaddressed.
- C) Month 8 is an outlier that should be excluded.
- D) The average of 4.75 days is under target, so no action is needed.

**Correct answer: B**

**Explanation:** Months 1–4 hold a stable band, then a monotonic climb with a growing increment begins at month 5 — drift, not noise, with a cause worth finding. The supplier's "only three months" framing and option D's average are both level-statements a trend erodes monthly. Option C mislabels the latest point of a smooth climb as an outlier. This tests characterising shape before level, and a strong candidate's answer notes that raising this at review as "four months of monotonic drift — what changed in month 5?" demands a causal account that "three breaches" never would.

**Question 2 (easy) — Deduction through a release policy**

The release policy states: (i) production releases require a completed acceptance test report; (ii) releases touching security components additionally require sign-off from the security architect; (iii) emergency security patches may release with sign-off alone, with the acceptance report completed retrospectively within five working days; (iv) a release using rule (iii) may not itself be followed by another rule-(iii) release for the same component until its retrospective report is filed. An emergency security patch for the VPN client was released Monday under rule (iii). On Thursday (report not yet filed), a new critical VPN client vulnerability is announced. What does the policy permit?

- A) Another rule-(iii) emergency release immediately — critical vulnerabilities always qualify.
- B) A rule-(iii) release only after Monday's retrospective report is filed — which can be expedited today, then released under (iii); alternatively a full rule-(i)+(ii) release at any time.
- C) No release of any kind until five working days elapse.
- D) A normal release without the acceptance test report, since one is already pending.

**Correct answer: B**

**Explanation:** Rule (iv) closes the emergency route for the VPN client until Monday's report is filed, but the team controls the key — filing the report re-opens rule (iii), and the ordinary route was never closed. Option C invents a waiting period the policy doesn't impose. Option D bootstraps a pending obligation into a waiver. This tests reading a policy as a system of incentives, not just constraints — the policy converts urgency into a reason to complete the safety work first.

**Question 3 (easy) — Error checking a standards conformity report**

The encryption standard requires: all laptops encrypted with algorithm X; all USB-exception devices encrypted with algorithm X and logged in the exceptions register; servers out of scope. A conformity report states: "Estate scan: 1,180 of 1,200 laptops confirmed algorithm X. 15 laptops running legacy algorithm Y. 5 laptops returned no scan result. 3 USB-exception devices found, all algorithm X, 2 present in the exceptions register. Conclusion: 98.3% conformity; standard effectively met." Which finding most undermines the report's conclusion?

- A) The 15 algorithm-Y laptops — legacy encryption is the largest count.
- B) The report treats "no scan result" and an unregistered exception device as if they were near-conformity, but 5 unscanned laptops are unknown-state (not conforming), and 1 USB device operating outside the register is a control failure regardless of its encryption — the conclusion's framing, not just its arithmetic, is wrong.
- C) The 98.3% figure is miscalculated and should be 98.4%.
- D) Servers were not scanned.

**Correct answer: B**

**Explanation:** Three distinct states are blended into one reassuring percentage: non-conforming (15 laptops, a bounded remediation queue), unknown (5 unscanned laptops, which a conclusion must treat as not-known-to-conform), and control-broken (1 device correctly encrypted but absent from the register — invisible to future audits). Option A ranks the best-understood item as most concerning. Option C is decimal-point pedantry. This tests recognising that a conformity report's job is to separate conforming, non-conforming, unknown and uncontrolled — any report that sums them into one number has already failed.

**Question 4 (moderate) — Prioritising accountability, not tasks**

Monday, 09:00. Four matters: (1) a quarterly supplier review Thursday, with performance data arrived Friday and unanalysed; (2) a high-impact change request — migrating 2,000 users' profiles — awaiting an impact assessment, with the change board meeting Wednesday; (3) a senior engineer's fully-diagnosed, drafted escalation to a software vendor, awaiting review and sign-off under a more senior name; (4) a request to personally lead the investigation of a P2 affecting one directorate's printers, "because the seniors are busy." What is the strongest disposition of the four?

- A) Do all four personally in deadline order: 2, 1, 3, 4.
- B) Own 1 and 2 personally (supplier accountability and high-impact change assessment are irreducibly this role's, and hard-deadlined); review and strengthen 3 quickly — it is nearly done and sending it under this role's name is right; push back on 4: a P2 printer fault is squarely within a senior engineer's remit, so re-prioritise the seniors' queue rather than absorbing their work.
- C) Delegate 1 and 2 to seniors to develop them; personally take 4 to stay hands-on; send 3 unread since the engineer is capable.
- D) Do 2 and 4 this week; postpone the supplier review and let the engineer send 3 themselves.

**Correct answer: B**

**Explanation:** Items 1 and 2 are irreducibly this role's — an unprepared review is a review the supplier controls, and the change assessment is exactly what "manage high-impact, complex change" means. Item 3 is leadership at its cheapest and best — a light review adds authority and a teaching moment. Item 4 is the trap: absorbing it converts the role into surge capacity while its unique work degrades; the response is to help re-rank the seniors' queue, not do their work. Option C signs unread work, spending authority without judgement. This tests protecting the work only this role can do, multiplying nearly-finished work, and routing absorbed work back.

**Question 5 (moderate) — Deduction about a high-impact change's dependencies**

A profile-migration change (2,000 users) has these facts: (i) migration runs at 250 profiles per night, weeknights only; (ii) the old storage's support contract expires in 15 working days; (iii) profiles containing legacy-format archives (estimated 20%, exact list unknown) fail migration unless pre-converted; (iv) pre-conversion runs at 100 profiles per day, parallel to migrations; (v) failed migrations must be retried after conversion, consuming a night's slot capacity. What is the critical vulnerability in the schedule?

- A) Migration capacity: 2,000 ÷ 250 = 8 nights, comfortably within 15 days.
- B) The unknown identity of the ~400 legacy-format profiles: if conversion (4 days for 400) is not sequenced ahead of the affected profiles' migration slots, failures consume retry capacity and the schedule slips against a hard contract expiry — so the first action is identifying the legacy profiles, not starting the migration.
- C) The script's 100-per-day rate is too slow and must be improved before anything starts.
- D) The contract expiry should be extended as a precaution.

**Correct answer: B**

**Explanation:** Raw migration and conversion capacity both fit comfortably within the deadline; the vulnerability is informational — nobody knows which 400 profiles need conversion, so an unsequenced migration burns slots on failures and retries against a buffer bounded by a contract expiry outside anyone's control. This tests recognising that in complex changes, the schedule-killer is usually the unknown that determines sequencing, not the capacity that determines duration.

**Question 6 (moderate) — Error checking a supplier's test summary**

An MDM vendor submits acceptance evidence: "Functional: 312 of 320 test cases passed (97.5%). The 8 failures are cosmetic UI issues, fix scheduled next quarter. Non-functional: enrolment load test passed at 500 concurrent enrolments (contracted volume). Performance test of policy-push completed on the vendor reference environment. Security: penetration test passed with no critical findings; two medium findings mitigated. Recommendation: proceed to production." Which gap most needs challenge before acceptance?

- A) The 8 cosmetic failures should be fixed before acceptance.
- B) The policy-push performance test ran on the vendor's reference environment, not on (or modelled on) the actual estate — reference environments are tuned and unrepresentative, so this result is currently evidence about the vendor's lab, not the target service; require the test re-run or validated against the real environment profile.
- C) Two medium security findings are unacceptable; demand zero findings.
- D) 97.5% is below the 100% a production system requires.

**Correct answer: B**

**Explanation:** Functional 97.5% with characterised, scheduled cosmetic failures, and a security result with mediums mitigated, are both normal acceptance evidence — options A, C and D apply a perfection standard acceptance testing never uses. The soft spot is the sentence naming no result: "completed" (not "passed") on the vendor's reference environment, precisely where non-functional testing's environment-sensitivity matters most. This tests asking of every evidence line "what environment, what condition, what verdict?" — vendors put their weakest evidence in their smoothest sentence.

**Question 7 (moderate) — Pattern across incident, change and release data**

Three months of estate data: P1/P2 incident counts flat; incidents tagged "regression after release" risen from 2 to 5 to 9 per month; releases went from 6 to 9 to 14, of which "expedited" releases (reduced pre-release testing) went from 1 to 3 to 8; normal-track releases (5, 6, 6) roughly constant. What is the most defensible reading?

- A) More releases naturally mean more regressions; the growth is proportionate and benign.
- B) Regressions are growing faster than releases overall, and the growth aligns with the expedited track specifically (1→3→8) while normal-track volume is flat — the fast-track's reduced testing is the prime suspect, warranting a per-track regression breakdown and a review of what the fast-track skips.
- C) The teams releasing software have become careless and need retraining.
- D) Releases should be frozen until regressions return to baseline.

**Correct answer: B**

**Explanation:** Releases roughly doubled while regressions more than quadrupled — disproportionate, refuting option A. Decomposing release growth shows it is almost entirely expedited, tracking the regression curve's shape. Option C leaps to a people-explanation when process data points at a process change. Option D burns release capacity to treat a symptom a single query could isolate. This tests decomposing an accelerating aggregate along the dimension that actually changed, and naming a hypothesis at the right strength ("prime suspect," not proof).

**Question 8 (moderate) — Feasibility judgement with architecture**

Technical architecture proposes replacing the estate's remote-support tooling with a platform-native alternative, citing licence savings of £60,000/year. Assessment finds: the native tool covers 90% of use cases; the missing 10% is unattended access to kiosk devices in public-facing sites — used roughly 40 times a month, with the nearest engineer typically 90 minutes from each site; the native roadmap lists unattended access "under consideration." What best serves the decision?

- A) Support the proposal — 90% coverage and £60,000 savings clearly outweigh a 10% gap.
- B) Oppose the proposal — any capability regression is unacceptable.
- C) Quantify the gap before the decision: 40 monthly kiosk interventions × ~3 hours engineer travel-and-fix ≈ 120 engineer-hours per month, materially offsetting the £60,000 annual saving; present both numbers, plus options — retain a minimal licence subset for kiosk coverage, or gate migration on the roadmap item maturing — and let the decision be made on the full comparison.
- D) Escalate the disagreement to the service desk manager to adjudicate.

**Correct answer: C**

**Explanation:** The proposal prices one side of the ledger; the "10% of use cases" resolves to roughly £36,000–48,000 annually at loaded cost, before counting harder-to-price public kiosk downtime — converting the £60,000 saving into a marginal one with a service regression attached, and surfacing genuinely good options (retained minimal licences, sequencing behind the vendor roadmap). Option A accepts percentage-framing that weights all use cases equally when the kiosk cases are the expensive ones. Option D adjudicates before quantifying. This tests translating a coverage gap into hours, pounds and user outcomes before letting a percentage decide.

**Question 9 (challenging) — Leading an investigation that crosses three parties**

Managed laptops intermittently freeze for 30–60 seconds. Freezes correlate with security-agent scan windows (vendor A); vendor A blames "known conflicts" with the disk-encryption driver (vendor B), citing a generic advisory; vendor B states their driver is certified for this laptop model and blames the security agent's I/O load; telemetry shows freezes only on the 40% of the estate with the older SSD variant, and only when scan and encryption-key-rotation windows overlap. Neither vendor has seen the telemetry. What is the strongest next move?

- A) Accept vendor A's advisory and disable scanning on affected machines pending their fix.
- B) Convene a three-way technical session where the telemetry is tabled as the controlling evidence — the SSD-variant restriction and the window-overlap condition discriminate between both vendors' blame theories — and propose a joint reproduction on the older-SSD configuration with both vendors' engineers observing; meanwhile mitigate by de-conflicting the two scheduled windows on affected machines, a change within own control.
- C) Escalate both vendors' blame-shifting to commercial contacts and let contract managers resolve it.
- D) Replace the older SSDs across 40% of the estate, since the fault follows that variant.

**Correct answer: B**

**Explanation:** The telemetry's triple condition (older SSD, scan window, key-rotation overlap) explains everything neither vendor's blame theory can alone. A joint reproduction converts finger-pointing into a shared observable, while the immediate mitigation (de-conflicting schedules) sits entirely within own control and is itself diagnostic. Option A disables a security control estate-wide on the vaguer vendor's theory. Option C converts a solvable technical question into a commercial dispute. Option D spends hardware budget on a correlation before testing the cheap fix. This tests recognising when one party holds the whole picture neither vendor has, and designing the demonstration that makes everyone see it.

**Question 10 (challenging) — Proactive problem search in quiet data**

All headline metrics are green. Digging deeper finds four sub-surface signals: (1) average laptop age risen from 2.1 to 3.4 years, battery tickets up 15% from a low base; (2) one of three service-desk shifts resolves 30% fewer tickets per engineer, having lost two experienced staff; (3) device-encryption compliance holds at 99.1%, but the same 30 non-compliant devices, all in one remote site, have persisted for four months; (4) licence utilisation for a niche engineering application has fallen from 80% to 45% of purchased seats. Which most warrants preventative investigation?

- A) Signal 1 — ageing hardware affects the most users.
- B) Signal 2 — team productivity is the core concern.
- C) Signal 3 — a static, geographically-concentrated non-compliant population means the compliance process has a systematic blind spot: whatever excludes that site from remediation is a standing security exposure that green headline percentages will conceal indefinitely.
- D) Signal 4 — wasted licence spend is a recoverable cost.

**Correct answer: C**

**Explanation:** Signals 1, 2 and 4 are all self-correcting via normal machinery — visible symptoms, known causes, or bounded recoverable costs. Signal 3 is different: persistence plus concentration plus invisibility-to-metrics is the signature of a process hole, and the 99.1% headline is the camouflage that ensures no routine process ever asks why the residue never shrinks. This tests investigating the residual that never changes in an otherwise green dashboard — the shape systematic failures hide from averages.

**Question 11 (challenging) — Standards, evidence and an exception request**

A standard requires all admin access to estate management tools via named individual accounts with multi-factor authentication; shared accounts are prohibited. A field-services team requests a standing exception: "site engineers share workstations in depots with no mobile signal for MFA, and per-engineer login adds 10 minutes per depot visit; we need one shared depot account." Their productivity data is real. What is the strongest response?

- A) Refuse: the standard exists for security and admits no exceptions.
- B) Grant the exception: documented productivity costs justify it, and field conditions are genuinely different.
- C) Treat the request as a requirements signal, not a compliance question: the legitimate need is fast, authenticated access under poor connectivity — solvable within the standard's intent via hardware tokens or offline authenticators (MFA without mobile signal) and fast user-switching profiles; pilot that at two depots against the 10-minute baseline, and only if intent-preserving options demonstrably fail consider a tightly-scoped, logged, expiring exception — never an unlogged shared account.
- D) Grant a temporary shared account while a working group studies the problem.

**Correct answer: C**

**Explanation:** The need (fast authenticated access without mobile signal) and the proposed solution (a shared account) are separable, and hardware tokens or offline authenticators plus fast user-switching can address both directly, tested against a measured baseline. Option A ignores a real cost, teaching teams to work around the standard instead of engaging it. Option B dissolves the accountability the standard exists to protect. Option D is option B with a calendar attached. This tests redesigning within a standard's intent before considering a scoped, logged, expiring exception — never an unlogged workaround.

### Administration tips

- **Watch for whether a candidate characterises a trend's shape before judging its level.**
- **Score for whether a candidate reads a rule system as a set of incentives**, not just constraints.
- **Note whether a candidate distinguishes non-conforming, unknown, and control-broken** in an evidence-review item.
- **Keep timing consistent** across candidates for this level.
- **Use the standards-exception item (Question 11) to observe whether a candidate redesigns within intent before considering an exception.**

### Common pitfalls to watch for when scoring

- **Rewarding a level-framed answer** ("only three breaches," "average under target") where the data shows a monotonic trend.
- **Accepting unknown-state data blended into a conformity percentage** as if it were near-conformity.
- **Crediting an answer that accepts a vendor's reference-environment result as representative** of the real estate.
- **Missing when a candidate reaches for a people-explanation** where process data points at a process change.
- **Rewarding an answer that absorbs work belonging to someone else's queue** rather than re-prioritising it.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely runs on: supplier SLA and credit calculations, estate-wide compliance and refresh figures, release and test metrics, capacity forecasts, and the cost comparisons behind vendor and feasibility decisions.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each built around a table, chart, or described dataset. Many numbers a candidate receives arrive pre-packaged by parties with positions — vendors presenting their own performance, teams presenting their own test results, proposals presenting their own savings.

For a lead engineer, numeric fluency is a form of accountability. Vendor and supplier management is conducted through numbers, and the party that computes more carefully controls the review. High-impact changes involve schedule, capacity and risk arithmetic where errors cascade across thousands of users.

### How this assessment maps to the role

- **SLA and service-credit calculations** map to the vendor and supplier management accountability.
- **Estate-scale rates and compliance figures** map to the **Asset and configuration management** skill and **Technical specialism**.
- **Trend analysis and decomposition** map to the **Problem management** and **Ownership** skills.
- **Schedule and capacity arithmetic** maps to the **Change management** skill.
- **Test metrics** map to the **Testing** skill.
- **Cost modelling** maps to the **Service focus** skill and feasibility work with technical architecture.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Supplier availability against contract**

A device-management platform's contract guarantees 99.5% monthly availability during core hours (07:00–19:00, 22 working days this month — 264 core hours). The platform was down for 100 minutes during core hours this month. Did the supplier meet the SLA?

- A) Yes — availability was about 99.4%, within rounding of target.
- B) No — availability was about 99.37%, below the 99.5% floor, which permits at most about 79 minutes of core-hours downtime.
- C) Yes — 100 minutes is negligible over a month.
- D) Cannot tell without knowing the annual figure.

**Correct answer: B**

**Explanation:** Permitted downtime = 0.5% of 15,840 core minutes ≈ 79 minutes; actual was 100 minutes, over the allowance, giving achieved availability of ~99.37%. Option A's "within rounding" gives away exactly what the contract's decimal exists to hold. This tests pre-computing every contract percentage into its minutes-per-month allowance so incidents can be scored against the budget in real time.

**Question 2 (easy) — Service credit calculation**

The same contract's credit clause: "For each 0.1 percentage point (or part thereof) below 99.5% monthly availability, a service credit of 2% of the monthly charge applies, capped at 10%." The monthly charge is £18,000 and availability was 99.37%. What credit is due?

- A) £360
- B) £720
- C) £540
- D) £1,800

**Correct answer: B**

**Explanation:** Shortfall = 0.13 percentage points, spanning two 0.1 bands under "or part thereof" (rounding up), giving 4% of £18,000 = £720. Option A misreads "or part thereof" as ignoring the partial band. This tests checking a credit calculation against a contract's exact banding language before countersigning a supplier's own figure.

**Question 3 (easy) — Estate refresh arithmetic**

The laptop estate is 2,400 devices. Refresh policy targets replacement at 4 years. Purchases over the last four years: year 1: 700; year 2: 450; year 3: 350; year 4: 500 — the remaining 400 devices are older than four years. If next year's budget covers 550 replacements, prioritised oldest-first, how many over-policy devices will remain at year end (ignoring failures), counting the year-1 cohort as passing the 4-year mark during next year?

- A) 0
- B) 400
- C) 550
- D) 250

**Correct answer: C**

**Explanation:** By next year end, the already-over-policy 400 plus the year-1 cohort (700) crossing the threshold gives 1,100 over-policy devices; 550 replaced leaves 550 remaining over policy. Option B forgets the cohort crossing the threshold during the year — the standard error in refresh arithmetic. This tests correctly modelling a population that ages while a budget is spent, and a strong candidate's answer notes the case this reveals for smoothing purchase volumes or a catch-up bid.

**Question 4 (moderate) — Weighted supplier comparison**

Two repair suppliers quote for a next contract. Supplier X: £45 per repair, historical first-time-fix 92%, failed first fixes redone free but adding 5 days' user downtime each. Supplier Y: £38 per repair, first-time-fix 80%, same free-redo terms and delay. 1,200 repairs expected per year, user downtime costed at £30/day. Which supplier is cheaper on the full comparison, and by roughly how much per year?

- A) Y, by about £8,400 — the £7 unit saving times 1,200
- B) X, by about £13,200 — Y's extra redo downtime outweighs its unit saving
- C) They are equal within £1,000
- D) X, by about £4,800

**Correct answer: B**

**Explanation:** Y saves £8,400 on repair charges but costs £36,000 in redo downtime (240 fails × 5 days × £30) against X's £14,400 (96 fails); full annual costs are £68,400 (X) versus £81,600 (Y), an X advantage of £13,200. This tests recognising that a quality gap applies to the whole volume and compounds through consequences, while a unit-price gap does not — cheapest-per-unit and cheapest-per-outcome are different questions.

**Question 5 (moderate) — Compliance percentage under scrutiny**

A monthly report states: "Patch compliance improved from 94.0% to 96.0% of in-scope devices." Detail: last month 2,256 of 2,400 devices were compliant; this month 2,208 of 2,300 — the scope shrank because 100 "long-offline" devices were reclassified out of scope. How much of the reported improvement is real?

- A) All of it — 96.0% is genuinely higher than 94.0%.
- B) None of it is demonstrated by these figures: compliant devices actually fell (2,256 → 2,208); on last month's constant scope, this month is at best 2,208 + (up to 100 unknown-state devices) of 2,400 — between 92.0% and 96.2% — so the "improvement" rests entirely on removing 100 unknown-state devices from the denominator.
- C) Half of it.
- D) The comparison is impossible in principle.

**Correct answer: B**

**Explanation:** Raw compliant counts fell; held at a constant scope, the honest figure trends toward 92%, since offline devices cannot demonstrate compliance. This tests recomputing on a constant basis before crediting any trend, and recognising a scope-narrowing reclassification as the same epistemic laundering as blending unknown-state devices into a conformity percentage.

**Question 6 (moderate) — Release risk arithmetic**

Release data over a year: normal-track releases: 70, of which 6 caused regression incidents; expedited releases: 30, of which 9 caused regression incidents. Compute and compare the regression rates, and the expedited track's risk multiple.

- A) Rates: normal ≈ 8.6%, expedited 30% — expedited releases are roughly 3.5 times as likely to cause a regression.
- B) Rates: normal 6%, expedited 9% — expedited is 1.5 times riskier.
- C) The counts (6 v 9) are close enough that the tracks carry similar risk.
- D) Rates cannot be compared across tracks with different volumes.

**Correct answer: A**

**Explanation:** Normal rate 6÷70 ≈ 8.6%; expedited rate 9÷30 = 30%; risk multiple ≈ 3.5. Option B divides both counts by the wrong shared denominator. Option C compares raw counts across unequal volumes. This tests computing rates within each track before comparing, and a strong candidate's answer converts the rate difference into avoided-incident arithmetic that can be priced against the testing time the fast-track saves.

**Question 7 (moderate) — Acceptance load-test interpretation**

Contracted enrolment volume for an MDM platform is 500 concurrent enrolments. A vendor's load test shows: at 250 concurrent: mean response 1.1s, 99th percentile 2.0s; at 500: mean 1.9s, 99th percentile 8.5s; at 600: mean 4.2s, 99th percentile 31s, error rate 2%. The contract requires 99th percentile ≤ 5s at contracted volume. What do the figures show?

- A) Pass — the mean at 500 (1.9s) is well under 5s.
- B) Fail at contracted volume — the requirement binds the 99th percentile, which is 8.5s at 500 concurrent; the degradation curve (2.0 → 8.5 → 31s) also shows the system entering non-linear collapse just beyond contracted volume, leaving no headroom.
- C) Pass with caution — only the 600-concurrent figures breach, and 600 exceeds the contract.
- D) The test is invalid because error rates only appear at 600.

**Correct answer: B**

**Explanation:** The requirement binds the 99th percentile, which is 8.5s at exactly the contracted volume — a fail regardless of the passing mean. Option A substitutes the mean for the percentile the contract names. This tests reading a requirement's own stated metric rather than a flattering substitute, and a strong candidate's answer notes the degradation curve's shape shows a knee right at contracted volume, leaving zero growth headroom even in a scenario that just scraped a pass.

**Question 8 (moderate) — Budget allocation across preventative options**

£40,000 of year-end preventative budget; four costed options: (1) £15,000 — battery replacements for 300 oldest laptops, preventing an estimated 90 failure incidents next year (4 hours/incident); (2) £25,000 — UPS units for 5 site comms rooms, preventing an estimated 10 outage incidents each affecting ~60 users for ~2 hours; (3) £40,000 — automated test environment, preventing an estimated 6 regression incidents each affecting ~200 users for ~1 hour; (4) £12,000 — spare-pool expansion cutting repair-loan waits from 3 days to 1 for ~200 users' repairs a year (2 hours/day saved). Using user-hours avoided per pound, which option or affordable combination scores highest?

- A) Option 3 alone — it targets the highest-profile incidents.
- B) Options 1 + 2 (£40,000): ≈ 1,560 user-hours ≈ 0.039 per pound.
- C) Options 1 + 4 (£27,000): ≈ 1,160 user-hours ≈ 0.043 per pound.
- D) Options 2 + 4 (£37,000): 2,000 user-hours ≈ 0.054 per pound.

**Correct answer: D**

**Explanation:** Option 1: 360 hours; Option 2: 1,200 hours; Option 3: 1,200 hours for the entire £40,000 (worst rate); Option 4: 800 hours. Combining 2+4 within budget gives 2,000 hours for £37,000, the best rate. Option A picks by profile rather than arithmetic. This tests pricing every option in a common yardstick and checking combinations against the budget constraint, and a strong candidate's answer notes option 3 may still merit funding for strategic reasons the yardstick ignores, worth a caveat sentence.

**Question 9 (challenging) — Trend decomposition in user satisfaction**

Estate-wide user satisfaction: Q1 78%, Q2 77%, Q3 76%, Q4 71%. By channel: walk-up desks steady 85% all year; remote support steady 74% all year; channel mix shifted from 40% walk-up (Q1–Q3) to 15% (Q4) after two desk closures. Which reading is correct?

- A) Support quality deteriorated in Q4 across the service.
- B) Within-channel satisfaction never moved; the Q4 fall is a mix effect — closing desks pushed contacts from the 85%-satisfaction channel to the 74% one. Check: Q4 predicted = 0.15 × 85 + 0.85 × 74 ≈ 75.7%, which overshoots the actual 71%, so the mix shift explains most but not all of the fall — roughly 3 points of the 5-point drop, leaving ~2 points of genuine Q4 decline (or a remote channel strained by its new volume) to investigate.
- C) The mix effect explains the entire fall; no further investigation needed.
- D) Satisfaction data is too subjective to decompose.

**Correct answer: B**

**Explanation:** The counterfactual (unchanged channel quality, new mix) predicts ~75.7%, explaining roughly 3 of the observed 5-point fall, leaving a residual worth investigating. Option C is the sophisticated trap — declaring the elegant mechanism complete before checking whether it covers the magnitude. This tests running the counterfactual and treating any gap between predicted and observed as a genuine finding requiring further investigation, not a rounding error to ignore.

**Question 10 (challenging) — Licence true-up exposure**

A desktop-management suite is licensed for 2,200 devices at £48/device/year. Annual true-up audits actual deployment; devices over the licensed count are charged retrospectively at 130% of list for the months deployed, then added to the licence base. Inventory shows deployment grew from 2,150 to 2,420 devices linearly over the 12 months just ending. Estimate the true-up charge, and the better strategy for next year.

- A) About £8,000; keep the same licence count since the average deployment (2,285) roughly matches.
- B) About £6,900: deployment crossed 2,200 around month 2–3, averaging ~110 devices over licence for ~10 months; 110 × £48 × 1.3 × (10/12) ≈ £5,700–£6,900 depending on crossing point — and next year's base should be set at the projected year-end count (~2,690 if growth continues), or growth capped, because true-up at 130% makes under-licensing systematically more expensive than honest forecasting.
- C) About £13,700 — all 220 excess devices at full-year premium rate.
- D) Nothing — the vendor must prove deployment monthly.

**Correct answer: B**

**Explanation:** Modelling the excess as the area between the deployment line and licence line (crossing around month 2.2, ramping to 220 excess by year end) gives an average excess of ~110 devices over ~10 months, and a charge of roughly £5,700–£6,900. Option C charges all 220 for a full year, ignoring the ramp. This tests modelling a linearly growing excess rather than using endpoint averages, and a strong candidate's answer notes the 130% premium makes honest forecasting cheaper than true-up whenever growth is even roughly foreseeable.

**Question 11 (challenging) — Presenting uncertainty honestly**

A Windows upgrade programme must complete by a support-expiry date 40 weeks out. Progress: 4 weeks in, 360 of 3,600 devices upgraded, week-by-week: 60, 80, 100, 120. A programme manager asks for a completion forecast for the board: "one number, please." What is the most professionally honest response?

- A) "Week 40 exactly — 3,600 ÷ 90 average per week = 40 weeks."
- B) "Week 36" — extrapolating the +20/week acceleration indefinitely.
- C) Give the range with its logic and a recommendation: "At the current 120/week steady rate, remaining 3,240 devices take 27 more weeks — completion week 31. If early acceleration continues to a plateau of ~150/week, week 26–27. If the tail behaves like every estate tail — the last 10% moving at half rate — add 3–4 weeks: realistic band week 30–35 against a week-40 deadline; adequate buffer, but tail-device identification should start now. If the board needs one number: week 33, with the band stated in the notes."
- D) "It cannot be forecast this early."

**Correct answer: C**

**Explanation:** Option A averages a ramping series flatly, mispricing the current run-rate. Option B compounds early-programme acceleration indefinitely, which is fantasy planning. Option C builds the forecast from named mechanisms — current rate, a plateau scenario, and the estate-tail correction — then answers the actual question with a single number and its stated band, converting the forecast into an action (start tail identification now). This tests forecasting from named mechanisms rather than curve-fitting, and giving a single number on request without hiding its uncertainty.

### Administration tips

- **Score for whether a candidate converts every contract percentage into its unit allowance** before checking compliance.
- **Watch for whether a candidate recomputes on a constant scope** before crediting a reported trend improvement.
- **Note whether a candidate prices both sides of every ledger** — unit savings versus consequence costs.
- **Keep timing consistent** across candidates for this level.
- **Use the forecasting item (Question 11) to observe whether a candidate names mechanisms** rather than curve-fitting a trend indefinitely.

### Common pitfalls to watch for when scoring

- **Accepting a presenter's chosen denominator** (a vendor's, a team's, a proposal's) without checking what was excluded.
- **Rewarding a comparison of counts across unequal volumes** as if it answered a rate question.
- **Crediting a mean substituted for a percentile** where an SLA or requirement names the percentile.
- **Missing when a candidate forgets a population ages during a plan** (refresh backlogs, licence counts, compliance scopes).
- **Rewarding an indefinite extrapolation of an early acceleration** without a plateau or tail correction.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets and draws conclusions from written material — using documents a lead end user computing engineer genuinely works with: supplier contracts and advisories, release and security policies, architecture papers, audit findings, procedures drafted and enforced by this role, and correspondence through which vendors, teams and stakeholders position themselves.

The typical format is an online, timed test of 15 to 25 minutes: a passage, then structured questions — predominantly True / False / Cannot say, plus best-summary, best-draft, and two-document reconciliation items.

At lead level, reading is a commercial and governance skill as much as a technical one. Contracts mean exactly what their clauses say, and the difference between "reasonable endeavours" and "shall" is the difference between a request and an obligation.

### How this assessment maps to the role

- **Contract and obligation reading** maps to the vendor and supplier management accountability.
- **Policy and standards precision** maps to the **Change management** skill and **Technical specialism**.
- **True/false/cannot-say discipline** maps to the **Problem management** and **Incident management** skills.
- **Reconciling conflicting documents** maps to the **Service focus** skill and framework knowledge.
- **Summary and drafting judgement** maps to the **IT service reporting** skill and **User focus**.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — Obligation language in a contract**

Passage: "The Supplier shall resolve Priority 1 incidents within 4 hours. The Supplier shall use reasonable endeavours to resolve Priority 2 incidents within 8 hours. Where on-site attendance is required, the Customer shall provide site access within 1 hour of request; resolution clocks are suspended until access is provided."

Statement: "If the supplier misses an 8-hour Priority 2 resolution despite genuine effort, the supplier has breached the contract."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The P2 obligation is an effort standard ("reasonable endeavours"), not an outcome guarantee, unlike the P1 clause's bare "shall resolve" — a miss despite genuine effort is compatible with compliance. This tests mapping which party each "shall" binds and whether an obligation is outcome versus effort — the two-minute exercise that determines what a supplier review can actually demand.

**Question 2 (easy) — A vendor advisory's hedges**

Passage: "We have identified a potential issue affecting a limited number of devices running firmware 3.1 in conjunction with certain third-party encryption products. Customers may experience unexpected shutdowns. We recommend affected customers consider upgrading to firmware 3.2. Firmware 3.2 has completed internal validation; broad field data is not yet available."

Statement: "The vendor states that firmware 3.2 resolves the shutdown issue."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** No sentence claims resolution — "recommend considering" is a hedged suggestion, and "completed internal validation" is a testing status, not a fix claim. This tests recognising liability-managed drafting for what it omits — before rolling out 3.2 estate-wide, the missing sentence ("does 3.2 remediate the shutdown mechanism?") should be demanded from the vendor.

**Question 3 (easy) — Scope of an audit finding**

Passage: "Finding 3 (Medium): Local administrator passwords on sampled devices in Buildings A and B (n=40) had not been rotated within the 90-day policy period; 12 of 40 sampled devices were non-compliant. The audit did not test devices in Buildings C–F. Management response due within 30 days."

Statement: "The audit found that 30% of the estate's devices have non-compliant local administrator passwords."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The 30% rate applies to a sample from two buildings, with C–F explicitly excluded from testing; attributing an estate-wide generalisation to the audit misdescribes what it actually found. This tests scope discipline — sample versus population — and a strong candidate's answer notes the correct management response addresses both the sampled buildings' remediation and the unsampled buildings' verification, since unsampled is not the same as unaffected.

**Question 4 (moderate) — Precedence between policy and contract**

Document 1 (security policy, updated last month): "Remote access software on managed devices must be configured to require multi-factor authentication. No exceptions."
Document 2 (supplier contract, signed two years ago): "The Supplier's remote diagnostic tool will be deployed on managed devices per Appendix D. The Customer shall not modify the tool's authentication configuration, which is centrally managed by the Supplier. The Supplier's tool currently authenticates via certificate-based single factor."

Statement: "The two documents place the organisation under conflicting obligations regarding the supplier's tool."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The organisation is simultaneously obliged to ensure MFA and forbidden from modifying the tool's single-factor configuration — a genuine, unresolved conflict. This tests recognising that a newer document does not automatically override an older one, and a contract does not automatically override a policy; conflicts must be surfaced and resolved explicitly, ideally at policy-update time rather than at audit time.

**Question 5 (moderate) — What a supplier's RCA actually concedes**

Passage: "The service interruption of 14 May resulted from an unanticipated interaction between a scheduled maintenance script and a database index rebuild. Our monitoring detected elevated error rates within 4 minutes. Contributing factors included an atypical data volume in the Customer's tenant. Process improvements have been identified, including enhanced pre-maintenance checks. We consider this a one-time event."

Statement: "The supplier accepts that its own maintenance process caused the interruption."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The stated cause is entirely the supplier's own operations, with the customer's data volume positioned as a subordinate contributing factor, and "process improvements identified" concedes the process was improvable. This tests reading past voice and framing to the admission structure — passive constructions and blame-sharing garnish are how RCAs concede liability without conceding it loudly, and a strong candidate's answer would treat "identified" improvements as unverified commitments needing dates.

**Question 6 (moderate) — Best summary for a governance board**

A situation for a governance board: remote-support licence renewal is 10 weeks out; architecture proposes migrating to a platform-native tool saving £60,000/year; analysis shows the native tool lacks unattended kiosk access, costing an estimated £36,000–48,000/year; the vendor's roadmap lists the gap "under consideration"; a hybrid (minimal licence retention for kiosks) captures most savings. Which summary is best?

- A) "Architecture and IT operations disagree on the remote-support migration; the board is asked to adjudicate between the two positions."
- B) "Migrating fully to the native tool saves £60,000/year but removes unattended kiosk support, whose loss we cost at £36,000–48,000/year plus public-facing downtime — a marginal-to-negative net. A hybrid retaining ~40 kiosk licences captures an estimated £45,000 of the saving with no capability loss. Recommendation: approve the hybrid now; revisit full migration if the vendor's roadmap delivers unattended access. Decision needed within 6 weeks for renewal lead-time."
- C) "The native tool is inadequate for operational needs and the migration should be rejected until the vendor's product matures."
- D) "Both options have merits and risks which the attached 14-page analysis details for the board's consideration."

**Correct answer: B**

**Explanation:** Option B carries both sides of the ledger quantified, a recommendation, a revisit condition, and a dated deadline — everything the board needs to decide correctly from the summary alone. Option A presents disagreement instead of analysis. Option D delegates reading to the board. This tests writing a governance summary that lets a board be as smart as the underlying analysis, in four sentences.

**Question 7 (moderate) — A procedure's failure mode**

A draft decommissioning procedure: "1. Confirm the user has migrated their data. 2. Remove the device from management systems. 3. Initiate certified data wipe. 4. Record the wipe certificate ID in the asset register. 5. Update the asset status to 'Disposed' and arrange collection. Note: for devices that fail to boot, steps 1 and 3 may be skipped; physical destruction via the disposal vendor applies instead."

Statement: "Under this procedure as drafted, a non-booting laptop's disposal is recorded with a wipe certificate ID."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** On the non-booting path, no wipe occurs, so there is no wipe certificate ID for step 4 to record, and the note never says what step 4 becomes on that path. This tests tracing a procedural exception branch to its evidence — a strong candidate's answer identifies that the destruction path needs its own recorded evidence (a destruction certificate) the draft never mentions, meaning exactly the devices whose data was never wiped are the ones exiting the estate with no recorded evidence of destruction.

**Question 8 (moderate) — Representing users against a desire**

A directorate head writes: "My caseworkers want the new lightweight laptops — the current ones are heavy and everyone's asking when they'll get the thin ones the executive team has. Please prioritise our directorate for the next refresh." User research shows top pain points as 40-second login times (71%), document-system crashes (58%), and — seventh — device weight (18%). The lightweight model has weaker performance against login and crash issues.

Statement: "The directorate head's request, if fulfilled, would address the directorate's main evidenced user needs."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The requested model does not address the top two evidenced needs and may worsen them, while weight ranks seventh. This tests separating a stated desire from the evidenced need beneath it — the response that champions the research recognises the desire honestly, translates it into what it might really signal (status? portability for a mobile subset?), and directs the refresh budget where the evidence actually points.

**Question 9 (challenging) — Reconciling three documents in an incident**

Document 1 (release policy): "Rollbacks of security patches require security-team approval, obtainable via the emergency channel at any hour."
Document 2 (last night's release record): "Patch KB-4471 deployed estate-wide 22:00. Post-deployment checks green 23:30."
Document 3 (this morning's incident channel, service desk manager, 08:40): "Widespread reports: shared-drive access failing since ~08:15. Timing points at last night's patch. Per my authority as incident lead, roll back KB-4471 now — we'll square paperwork later."

Statement: "Following the service desk manager's instruction as given would breach the release policy."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The instruction orders rollback immediately while explicitly deferring the required security-team approval, and incident-lead authority is not that approval. This tests refusing to let asserted authority substitute for documented authority, and a strong candidate's answer notes the emergency channel means compliance costs minutes — "policy or speed" is a false choice the policy itself was designed to dissolve.

**Question 10 (challenging) — An architecture paper's load-bearing assumption**

An architecture paper argues: "Option B (thin-client estate) reduces endpoint incidents by an estimated 60%, based on Reference Organisation R's results. R's deployment covered call-centre staff with fixed desks, standardised applications, and constant connectivity. Our estate serves 40% mobile and field workers, 200+ line-of-business applications, and sites with intermittent connectivity. We therefore recommend Option B for the full estate, projecting a 60% incident reduction."

Statement: "The paper's own description of the two estates undermines applying R's 60% figure to the full estate."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The dissimilarities the paper itself names — mobility, application count, connectivity — are exactly the properties thin-client benefits depend on, and the full-estate segments described lack them. This tests locating a generalisation's load-bearing similarity assumption and checking whether the text supplies its own defeater, and a strong candidate's answer proposes constructive scoping (thin client where the mechanism holds) rather than outright rejection.

**Question 11 (challenging) — Drafting the message after a supplier failure**

A repair supplier missed contracted turnaround on 40% of last month's repairs, including several for assistive-technology users left without adapted equipment. Their account manager emails: "A rough month — new depot bedding in. Trust we can handle this pragmatically rather than formally." A reply must be drafted, copying the service desk manager. Which draft is best?

- A) "Thanks for the context — these things happen. Let's keep an eye on it and hope the depot settles."
- B) "This is a formal notification of material SLA breach. All contractual remedies are reserved. Our commercial team will be in touch regarding termination provisions."
- C) "Last month's 40% turnaround failure is a material breach, and its user impact was severe — including assistive-technology users left without adapted equipment, which we treat with particular seriousness. We're applying the contractual service credits for the month; that is the formal position and it stands. In parallel: we value the relationship and accept depots bed in — so let's meet this week with your depot recovery plan, weekly turnaround data until performance re-stabilises, and expedited handling as standard for assistive-technology repairs. Handled that way, this stays a recovered blip rather than a pattern."
- D) "We are disappointed by last month's performance and expect improvement going forward."

**Correct answer: C**

**Explanation:** Option C separates the formal layer (breach named, credits applied, non-negotiable), the impact layer (assistive-technology users named specifically), and the relationship layer (recovery plan, ongoing data). Option A waives remedies. Option B torches a productive relationship over one bad month without requesting a recovery plan. Option D offers no remedy, plan, or date. This tests holding remedy, impact, and relationship simultaneously in a difficult supplier message.

### Administration tips

- **Score for whether a candidate builds a mental obligation-language glossary** ("shall," "reasonable endeavours," "part thereof") and applies it precisely.
- **Watch for whether a candidate checks scope and sample clauses** before accepting a generalisation.
- **Note whether a candidate traces a procedural exception branch to its evidence.**
- **Use the governance-summary item (Question 6) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer that upgrades a hedge into a promise.**
- **Accepting a sample-based generalisation attributed to the source that scoped its own claim.**
- **Missing when a candidate assumes a newer or louder document automatically wins**, rather than surfacing a genuine conflict.
- **Rewarding a draft that picks one layer** (pure formality, pure warmth, pure disappointment) rather than holding remedy, impact, and relationship together.
- **Missing when a candidate fails to audit their own authored documents** with the same rigour applied to a supplier's.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses — most effective, least effective, or rated. The material at this level is the human and commercial texture of leadership: suppliers who under-deliver and over-explain, engineers who need developing rather than replacing, stakeholders whose requests conflict with users' needs, standards that meet resistance, and incidents where accountability outruns direct control.

The typical format is 10 to 20 scenarios, untimed or generously timed. Scoring compares choices against the pooled judgement of experienced professionals and organisational values, with two additional behaviours weighted heavily at this level: stewardship of the people and standards accountable for, and integrity in commercial relationships.

Scoring keys expect holding formal positions without burning relationships, developing and routing rather than absorbing, applying one's own standards to one's own work, surfacing problems that could quietly be buried, and treating user outcomes — especially for users with the least voice — as the non-negotiable term in every trade-off.

### How this assessment maps to the role

- **Supplier accountability judgement** maps to the vendor and supplier management accountability.
- **Leading under incident pressure** maps to the **Incident management** skill.
- **Standards stewardship** maps to **Technical specialism** and the **Change management** skill.
- **Proactive ownership** maps to the **Ownership** skill.
- **Developing engineers** maps to the leadership of the function.
- **Championing users** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The supplier's friendly pre-meeting call**

The day before a quarterly review with a repair supplier — where four months of deteriorating turnaround data will be tabled — the account director calls: "Before tomorrow gets formal, we're aware of the dip. New depot, teething issues. We'd rather not have it minuted as a performance concern — it would trigger an internal escalation on our side that helps nobody. We'll have it fixed by next quarter, you have my word." What is the most effective response?

- A) Agree to keep it off the minutes — the relationship is productive and the explanation is plausible.
- B) Refuse the call's premise politely: the data goes on the record tomorrow as a performance concern with the trend stated; welcome their depot explanation and recovery plan as part of that record; and note — genuinely, not as a jab — that their internal escalation triggering is the contract working, not a malfunction to be avoided.
- C) Cancel the review and move straight to formal breach proceedings, since they tried to influence the record.
- D) Keep it off the minutes this quarter, but tell them privately it goes on record if the dip continues.

**Correct answer: B**

**Explanation:** The request asks to disable the governance mechanism that gets a struggling depot the attention it needs. Option B holds the record intact while welcoming the explanation and recovery plan into it, converting the record from accusation to shared management tool. Option A trades an evidence trail for a verbal promise. Option D grants suppression now and converts governance into a private bargaining chip. Option C punishes an improper request disproportionately. This tests treating a formal record as infrastructure rather than aggression.

**Question 2 (easy) — A candidate's own standard blocks a director's request**

A director emails directly: their team's new analytics contractor starts Monday and "just needs local admin on his laptop to install his tools — I'm told you own this standard, so I'm asking you to wave it through. It's one machine and he's only here eight weeks." What is the most effective response, and which is least effective?

- A) Wave it through — one machine for eight weeks is trivial, and directors' teams need to work.
- B) Reply that the standard admits no exceptions and the contractor will have to manage without.
- C) Same-day reply: no standing local admin, and here is the fast path that gets the contractor working Monday — the approved-software process expedited today for named tools, an elevation-on-request arrangement for anything unforeseen, and readiness to respond quickly during his first week; if a genuine tool-set cannot work that way, a scoped, logged, expiring exception with the security team will be considered.
- D) Forward the email to the security team and let them refuse it.

**Correct answer: most effective C; least effective D**

**Explanation:** The director's need is legitimate; the proposed solution is the standing exposure the standard exists to prevent. Option C refuses the solution while over-delivering on the need with a concrete, dated, owned fast path. Option A grants by rank what would be refused by request-form. Option D is least effective, outsourcing both the decision and the blame for it while leaving the contractor unable to start Monday. This tests owning a standard's "no," its fast path, and its exception route personally.

**Question 3 (easy) — A senior engineer's escalation misfires**

A senior engineer being developed sends a vendor escalation under their own name — thorough diagnosis, correct conclusion, but with sarcastic asides about the vendor's previous responses and a demand for "engineers who actually read tickets." The vendor's service manager forwards it with: "Happy to help, but perhaps we could keep this professional?" What is the most effective response?

- A) Reply to the vendor apologising for the engineer and take over the escalation.
- B) Back the engineer publicly to the vendor — the frustration was earned by poor vendor responses.
- C) Reply to the vendor briefly and evenly — the technical content stands; the tone is being addressed — then privately walk the engineer through it: the diagnosis was excellent, the sarcasm handed the vendor a reason to discuss tone instead of the fault, and the redraft skill is separating documented vendor failures (which belong in escalations, factually) from feelings about them (which don't); have the engineer send the corrected follow-up themselves.
- D) Say nothing to either party — the vendor's mild complaint will blow over, and the engineer will learn from experience.

**Correct answer: C**

**Explanation:** The engineer's diagnosis deserves defending and their tone converted a strong position into a discussion about manners. Option C recovers both — a brief even reply refuses the tone-versus-substance trade, and the private conversation teaches a transferable skill while the engineer sends their own corrected follow-up. Option A erases the engineer from their own work. Option B defends the indefensible half. This tests defending the work, coaching the craft, and keeping the author in the author's chair.

**Question 4 (moderate) — The problem found that nobody is asking about**

Proactive searching discovers that the nightly backup of the estate's device-configuration database has been silently failing for seven weeks — the job reports success, but a filled target volume means writes are discarded. Nothing has been lost yet; a restore in the last seven weeks would have failed catastrophically. The team runs the job; the monitoring gap is arguably infrastructure's. Nobody outside the team would ever know. What is the most effective response, and which is least effective?

- A) Fix the volume, verify the backup chain, and move on — no loss occurred, no need to alarm anyone.
- B) Fix it immediately and then surface it fully: incident-record the near-miss with the seven-week window stated, notify infrastructure of the monitoring gap with the evidence, brief the service desk manager, and commission the systemic check — an audit of every "reports success" job in the estate for the same silent-failure pattern.
- C) Fix it and mention it informally to infrastructure so they can improve monitoring, keeping it otherwise off the record.
- D) Report the infrastructure team's monitoring gap to their manager, since the detection failure was theirs.

**Correct answer: most effective B; least effective D**

**Explanation:** Option B treats the near-miss as an incident that happened to have no victim, making the window auditable, fixing detection with evidence, and extracting the full value with an estate-wide systemic sweep for the same mechanism. Option A repairs the instance and buries the lesson. Option C fixes politely off the books, with no audit trail. Option D leads with blame for another team's gap while omitting the own team's seven-week-blind job — accountability theatre pointed outward. This tests recording and generalising a near-miss rather than quietly repairing it or deflecting blame.

**Question 5 (moderate) — Release pressure from a candidate's own side**

A public campaign launches Monday. Friday 14:00, a programme manager asks for a browser-extension update pushed to all 3,000 devices today: "Marketing found a rendering glitch on the campaign page — the extension vendor fixed it this morning. It has to be everywhere before Monday." The fix arrived three hours ago; release policy requires estate-representative testing taking two working days; the glitch is a cosmetic misaligned banner on an internal-facing extension. What is the most effective response?

- A) Push it estate-wide today — the campaign matters and the vendor has tested it.
- B) Refuse: two-day testing means Tuesday at the earliest; the campaign will have to live with the banner.
- C) Size the actual problem before choosing the remedy: a cosmetic misalignment on the campaign page needs the fix only where the page is viewed publicly or by the campaign team — likely a small, identifiable device group; push the untested fix to that scoped group today, run the standard two-day test in parallel, and roll estate-wide on Tuesday if it passes — explaining the split as faster and safer than either alternative.
- D) Push it estate-wide but keep the previous extension version staged for rollback.

**Correct answer: C**

**Explanation:** The real requirement is "fixed for the campaign's visible surface by Monday," satisfied by a scoped group with a tiny blast radius rather than the whole estate. Options A and D risk exactly the expedited-release regression pattern this role's own data flags. Option B enforces the policy against a strawman, never noticing the scoped alternative. This tests shrinking the problem until the rule fits it, and framing the outcome as faster and safer than either extreme.

**Question 6 (moderate) — Two of a candidate's seniors are in conflict**

Two senior engineers who report through this role — one (A) leads incident investigations, the other (B) owns release engineering — have stopped co-operating. After B's team shipped a release A's investigation later traced to a major incident, A has begun copying senior stakeholders on pointed ticket comments; B has excluded A from release-readiness discussions A used to attend. What is the most effective response?

- A) Let it settle — strong engineers clash, and intervening infantilises them.
- B) See each separately to hear their account, then bring them together with a working frame: the incident goes to a blameless post-incident review (which examines the release process, not B's competence — A's evidence goes there, not into ticket sniping); release-readiness needs incident-experience in the room (so A's attendance resumes, as a contribution rather than surveillance); and the escalating-by-CC pattern stops both ways, with a clear signal that both are rated and the service cannot afford their cold war.
- C) Tell them both, by email, to be professional and keep personal issues out of work.
- D) Reassign one of them so their responsibilities no longer touch.

**Correct answer: B**

**Explanation:** A genuine process question (did release practice contribute to the incident?) has become a status war for lack of a legitimate forum. Option B gives the substance a proper container and restores contribution over surveillance. Option A mistakes structural conflict for personality weather. Option D pays a permanent organisational cost to avoid one mediated conversation. This tests finding the legitimate question trapped inside a feud and giving it a forum both parties can win through.

**Question 7 (moderate) — The user research a stakeholder doesn't want**

Commissioned user research on a new self-service portal finds: task completion 44%, users with access needs failing at twice that rate, and the most-used "feature" is the search box leading to the phone number. The portal was a service desk manager's initiative, announced upward as a success, and they ask for the accessibility numbers to be softened and the positive adoption stats led with, in the findings pack going to the directorate. What is the most effective response?

- A) Comply — it is their initiative and their pack, and the relationship matters more than a slide.
- B) Refuse and send the unsoftened findings directly to the directorate independently.
- C) Hold the findings intact and reframe the pack's story with the manager: the honest numbers stay (softening research is the one thing that cannot be done to it — and doubled failure rates for users with access needs is a legal-duty flag, not a presentational choice), but the narrative can legitimately be constructive — "launch found the gaps, here is the funded fix plan" — which reads better to a directorate than curated success, and protects the manager far more than numbers that unravel at the first accessibility complaint.
- D) Suggest the research be re-run with a revised methodology that might produce better numbers.

**Correct answer: C**

**Explanation:** Softening evidence — particularly accessibility evidence engaging the public-sector equality duty — is the line that cannot move; a lead who curates research once ends their team's licence to cite research ever again. Option C supplies a survivable, honest narrative instead. Option A makes the role co-author of a misrepresentation. Option B protects the findings by detonating the relationship before offering the honest route. Option D is methodology-shopping for kinder numbers. This tests never negotiating the evidence while helping negotiate the story around it.

**Question 8 (moderate) — An incident investigation reaches a candidate's own decision**

Leading the investigation of a major incident — estate-wide profile corruption — the timeline converges on a storage-firmware update personally assessed and approved a month ago, judging the vendor's compatibility matrix sufficient without an estate pilot, to hit a support deadline. Nobody else has connected the firmware change to this approval. What is the most effective response, and which is least effective?

- A) Present the firmware finding with the approval history stated plainly — including that the pilot was waived and why — then continue leading the technical investigation while asking the service desk manager to review the decision trail independently, so the process examination is not led by the decision's author.
- B) Present the firmware finding without mentioning the approval history; it is technically irrelevant to resolution.
- C) Hand the entire investigation to a senior engineer immediately and step back from the war-room.
- D) Present the finding while noting the vendor's compatibility matrix was the deciding evidence, leaving the pilot-waiver decision unmentioned unless someone asks.

**Correct answer: most effective A; least effective D**

**Explanation:** Resolving the incident and examining the decision are different duties; option A performs the separation explicitly — the finding lands with its approval history stated, and the process question goes to someone without the conflict. Option C abandons the war-room mid-crisis unnecessarily. Option B suppresses by scoping. Option D is least effective — actively curating which facts are promoted, the shape of concealment that destroys trust completely once discovered. This tests leading the fix, recusing from the verdict, and volunteering the history before it is discovered independently.

**Question 9 (challenging) — The supplier's insolvency rumour**

A sole repair supplier — 1,200 repairs a year, all depot logistics, held spare inventory — is the subject of a credible industry rumour of missed payments and a delayed filing. Their account director, asked directly, is smoothly reassuring: "Restructuring noise, nothing operational." Turnaround times are so far normal. Re-procurement would take four to six months. What is the most effective response?

- A) Accept the reassurance — performance is the evidence that matters, and it is currently fine.
- B) Terminate the contract now and begin emergency procurement before they fail.
- C) Treat it as a risk to manage on parallel tracks: commercially, trigger the contract's financial-standing and assurance clauses through the commercial team rather than relying on account-director assurances; operationally, quietly reduce exposure — verify and repatriate held spare inventory, shorten the repair pipeline, document depot processes — and start contingency procurement groundwork now; meanwhile keep the relationship fully professional and the service running.
- D) Share the rumour with the supplier's competitors to accelerate alternative quotes.

**Correct answer: C**

**Explanation:** Performance is a lagging indicator — insolvency shows in turnaround data last — and the asymmetry favours prudence: if the rumour is false, it costs almost nothing; if true, unpreparedness costs months of repair capability. Option B triggers the very disruption feared, possibly wrongfully. Option D is commercially improper and self-harming. This tests escalating evidence-gathering through formal channels, reducing concrete exposure quietly, and starting long clocks early without disturbing the professional relationship.

**Question 10 (challenging) — Succession and a candidate's own indispensability**

A service desk manager, in a development conversation, is blunt: "You are the single point of knowledge for supplier management, the release-policy history, and three estate-critical standards — if you're promoted, we're in trouble, which means I can't support promoting you." Two senior engineers are strong but the vendor relationships and standards rationale have been kept close, partly from habit, partly because being irreplaceable has felt like security. What is the most effective response?

- A) Argue the assessment: the seniors attend supplier reviews and could pick things up if needed.
- B) Accept the diagnosis and build the succession deliberately: split the two domains between the two seniors — one shadowing then co-leading supplier reviews (with relationship history written down as briefing notes), the other taking release-policy and standards stewardship (with the rationale behind each standard documented, not just the rules) — set a two-quarter timetable with the manager as the measure of promotability, and treat the discomfort of becoming replaceable as the point rather than the cost.
- C) Produce a comprehensive documentation pack covering everything known, to be maintained against possible departure.
- D) Propose hiring a deputy lead to absorb the succession risk.

**Correct answer: B**

**Explanation:** Splitting domains matches development to each senior's growth edge, transfers relationships (which live in trust between named people, not documents), and transfers the rationale behind standards, not just their text — the judgement that lets a successor defend and evolve them. Option A defends the moat just named. Option C mistakes documentation for succession. Option D outsources a development obligation to a requisition that may never be funded. This tests converting a named indispensability risk into structured, timetabled transfer.

**Question 11 (challenging) — The cheap win that excludes**

Budget planning allows funding exactly one of two portal improvements this year: single sign-on integration (saves every user ~30 seconds/session, 3,000 users, ~50,000 sessions/month, popular in feedback) or a full assistive-technology compatibility rework (the portal currently fails badly with screen readers, affecting ~45 regular users who route around it via a phone workaround they describe as "workable but second-class"). The SSO's user-hours arithmetic dwarfs the rework's by two orders of magnitude, and stakeholders expect the SSO. What is the most effective response?

- A) Fund the SSO — 25,000 user-minutes a month against 45 users' inconvenience is not a close call, and the phone workaround exists.
- B) Fund the assistive-technology rework and schedule the SSO for next year, presenting the reasoning openly: the two items are not on the same axis — SSO is a convenience improvement to a working service, while the portal currently excludes 45 users from independent use of a standard service, a legal-duty and equality issue the phone workaround mitigates but does not discharge; utilitarian user-hours arithmetic is the right tool for ranking conveniences, and the wrong tool for pricing exclusion.
- C) Fund the SSO but ask the portal team to "keep accessibility in mind" for future releases.
- D) Split the budget: deliver half of each improvement this year.

**Correct answer: B**

**Explanation:** Aggregate-benefit ranking is the correct method between comparable goods, but access is not on the same axis as convenience — a service 45 users cannot use independently is exclusion, not an inconvenience to be weighed against 3,000 users' time savings, and the phone workaround describes rather than excuses the exclusion. Option A is the utilitarian trap applied confidently. Option D delivers effectively neither improvement. This tests recognising when user-hours arithmetic is the wrong tool, and defending a principled allocation to stakeholders expecting the popular answer.

### Administration tips

- **Score for whether a candidate separates the formal, operational, relationship, and systemic layers** in a difficult scenario.
- **Watch for whether a candidate interrogates a demand's own logic** before choosing to refuse or comply with it.
- **Note whether a candidate volunteers self-implicating history** rather than curating what gets presented.
- **Use most/least items to check that a candidate rates every option independently before ranking.**
- **Keep candidates scored to lead-level judgement** — commercial and organisational accountability, not just technical correctness.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that trades the record for the relationship** — off-minute agreements, softened findings, waived credits.
- **Crediting enforcement with no fast path**, which reads as obstruction and generates workarounds.
- **Rewarding absorption of work that should be developed in someone else** — takeovers of escalations, investigations, or succession.
- **Missing when a candidate curates their own decision history** rather than volunteering it in full.
- **Accepting a utilitarian answer that prices exclusion in convenience units** rather than recognising the axis has changed.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead end user computing engineer: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests reading supplier drift out of level-framed data, tracing release policies and high-impact changes through their gates and dependencies, and leading an investigation across three parties who each hold only part of the picture. The numeric section tests converting contract percentages into downtime budgets and credit calculations, pricing both sides of half-priced ledgers, and forecasting from named mechanisms rather than curve-fits. The verbal section tests reading "reasonable endeavours," "part thereof," and liability-managed advisories at their exact contractual weight. The situational judgement section tests the calls that define this level's accountability: holding a formal record against a friendly request to suppress it, refusing a shared admin account while delivering the need behind it, surfacing one's own approval at the centre of one's own investigation, and funding the excluded users over the mildly inconvenienced majority.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can hold suppliers to account, steward standards, lead investigations that matter, and answer for outcomes across an estate — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
