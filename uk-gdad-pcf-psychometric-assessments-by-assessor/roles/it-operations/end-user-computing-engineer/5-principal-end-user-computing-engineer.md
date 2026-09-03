# Principal End User Computing Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for principal end user computing engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the materials a principal engineer genuinely handles — strategy roadmaps, workforce and resourcing plans, technology-trend analyses, risk registers, compliance positions, multi-year budgets, and the analytics through which service data becomes business decisions — and the judgements genuinely made, such as sequencing a strategy roadmap against funding and technology cycles, shaping team capability through resourcing and learning and development, deciding which risks to escalate and which to hold, and translating business trends into an end user computing model fit for what comes next.

The role owns the strategy roadmap, leads on resourcing, learning and development, and looks at the bigger picture — understanding trends in the business and the direction of future technologies. Every one of those duties is judgement exercised over long horizons with incomplete information: recognising the pattern in noisy, multi-year data that others read as noise; reasoning rigorously through dependency chains where a wrong assumption compounds across an estate and a budget cycle; checking strategies, business cases and compliance positions whose errors become organisational errors; prioritising where attention and investment should go; interpreting analytics honestly enough to steer business performance by them; and making the calls where users, engineers, finances and the future pull against each other.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of its dimensions to the named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical scenarios rather than abstract puzzles. At principal level, the materials are strategic: multi-year trend data, roadmap dependency chains, risk registers, compliance positions, workforce plans, and the technology-direction evidence on which an estate's future is bet.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, with speed and accuracy often reported separately.

Cognitive assessment is relevant at this level because professional value lies in structured thinking applied at the widest span and the longest horizon. Owning the strategy roadmap means reasoning about sequences of dependent commitments made under uncertainty. Understanding the direction of future technologies means separating durable trends from vendor weather. Errors at this level rarely announce themselves quickly — a mis-sequenced roadmap or a misread trend surfaces as cost and disruption years later, which is exactly why employers test the underlying reasoning directly.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the duty to understand trends in the business and the **Technical specialism** skill.
- **Logical deduction** maps to the **Change management** skill and roadmap ownership.
- **Error checking** maps to the **Asset and configuration management** skill.
- **Prioritisation** maps to the **Ownership** and **Service focus** skills.
- **Applied problem solving** maps to the **Problem management** skill and the **IT service reporting** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Trend versus noise in strategic data**

Annual figures for an estate over five years — devices: 3,000, 3,050, 3,100, 3,080, 3,120; per-user device count: 1.10, 1.24, 1.41, 1.58, 1.77; and per-device support tickets: 4.1, 4.0, 4.2, 4.1, 4.0. Which reading best informs the strategy roadmap?

- A) The estate is stable on all three measures.
- B) Device count and ticket rates are stable, but devices per user are compounding at roughly 12–13% a year — the workforce is shrinking while multi-device working grows, and the roadmap should plan for a many-devices-per-person model (identity, licensing, support design) rather than a bigger version of today.
- C) Ticket rates should be the roadmap's focus since support is the core service.
- D) The per-user figure is an artefact and can be ignored.

**Correct answer: B**

**Explanation:** Total devices drift within ±2%; tickets per device oscillate in a tight band — both stable. Devices per user climb monotonically, roughly 12–13% compounded annually — a structural trend. Stable devices with rising devices-per-user means the user population is falling while each person carries more devices, with real consequences for identity and licensing models (priced per user versus per device) and support design (shifting from device-fixing toward person-context). Options A and C read the stable series and miss the moving one. This tests finding the series that moves monotonically while headlines stay flat — structural change announces itself in ratios before it reaches totals.

**Question 2 (easy) — Dependency deduction in a roadmap**

A draft roadmap contains: (i) legacy identity platform decommission in Q8, contractually committed (penalties thereafter); (ii) new identity platform live by Q6, dependent on (iii) directory migration completing by Q5; (iv) directory migration cannot start until data-cleansing tool procurement completes — forecast for Q3, with migration taking 3 quarters; (v) device-estate re-enrolment needs the new identity platform live one full quarter before the legacy decommission. Which statement is correct?

- A) The plan holds comfortably: procurement Q3, migration Q3–Q5, identity live Q6, one quarter before Q8.
- B) The plan has zero slack: procurement completing in Q3 allows migration across Q3–Q5, identity live Q6, re-enrolment Q7, decommission Q8 — any single quarter of slippage anywhere breaches a contractual deadline, so the procurement (the least controllable item) must be accelerated or the chain needs de-risking now.
- C) The plan fails: migration cannot finish before Q6.
- D) Re-enrolment can run in parallel with migration, removing the constraint.

**Correct answer: B**

**Explanation:** Walking the chain confirms the plan is feasible (eliminating C), but every link lands exactly on its deadline, with zero slack, and the earliest element (procurement) is the least controllable. Option D invents parallelism the dependencies forbid. This tests auditing a plan for slack, not just validity — a chain of just-in-times against a contractual penalty is a risk demanding action now, not a plan to be filed as complete.

**Question 3 (easy) — Error checking a risk register**

Four entries: (1) "Legacy OS devices (240 remaining) — likelihood: high; impact: high; mitigation: refresh programme, completes Q4; residual risk after mitigation: low." (2) "Single supplier for repairs — likelihood: low; impact: high; mitigation: none identified; residual risk: low." (3) "Backup restore untested for configuration database — likelihood: medium; impact: high; mitigation: quarterly restore tests from Q2; residual risk: medium." (4) "Key-person dependency, device certification process — likelihood: medium; impact: medium; mitigation: documentation and cross-training underway; residual risk: low." Which entry is internally inconsistent?

- A) Entry 1
- B) Entry 2
- C) Entry 3
- D) Entry 4

**Correct answer: B**

**Explanation:** Entries 1, 3 and 4 all show residual risk following logically from inherent risk transformed by a real mitigation. Entry 2 asserts "mitigation: none identified" yet concludes "residual risk: low" — with no mitigation, residual risk must equal inherent risk (low likelihood, high impact), and a high-impact risk cannot be summarised as "low" on likelihood alone. This tests recognising residual = inherent × mitigation as the register's own arithmetic, and hunting the entry whose conclusion its own fields contradict — a low-likelihood/high-impact category is precisely what destroys unprepared organisations.

**Question 4 (moderate) — Prioritising the function's attention**

This month's attention can seriously advance only two of five matters: (1) the annual strategy refresh, due to the departmental technology board in five weeks; (2) a lead engineer's fully-costed proposal to change repair suppliers, decision needed within a month before contract renewal; (3) a recurring but low-volume complaint from one directorate about meeting-room AV reliability; (4) an unbudgeted mid-year request from finance to model a 10% cost reduction scenario for next year; (5) rumoured, unannounced machinery-of-government changes that could merge the estate with another's. Which pair most deserves personal attention?

- A) 1 and 2 — the strategy refresh is a core accountability with a governance date, and the supplier decision is time-boxed by the renewal; both are decisions only this role can finalise, while 3 delegates to a lead, 4 gets a first-cut model from existing analytics with a scoping conversation, and 5 is monitored but not yet actionable.
- B) 3 and 5 — user complaints and organisational change are where principals add value.
- C) 1 and 5 — strategy and machinery-of-government both concern the big picture.
- D) 2 and 4 — money questions always outrank planning documents.

**Correct answer: A**

**Explanation:** Filtering by whether an item is time-critical and needs this role specifically: item 1 passes both, item 2 passes both (the analysis is done and only the decision remains), item 3 is operational and fails the "needs this role" test, item 4 needs only a scoped first-cut, item 5 fails the "actionable" test since planning against unannounced structures spends scarce attention on a mirage. This tests reserving personal attention for decisions only this role can make on clocks it cannot move, and converting everything else into delegation, scoping or monitoring.

**Question 5 (moderate) — Deduction about a technology direction bet**

Evaluating whether to commit the roadmap to a vendor's "unified endpoint" platform: (i) the vendor's two largest competitors have announced equivalent capabilities shipping within 18 months; (ii) the current tooling contract expires in 12 months; (iii) the vendor offers a 30% discount for a 5-year commitment signed this quarter; (iv) analyst consensus and internal trend reading agree the capability category is durable, but disagree on which vendor will lead in 3 years; (v) migration between platforms in this category historically costs 6–9 months of engineering effort. What does the evidence best support?

- A) Sign the 5-year deal — 30% off a durable category is compelling.
- B) Commit to the category but not yet to five years with one vendor: the capability is validated (i, iv) while vendor leadership is genuinely uncertain (i, iv), and the discount is compensation for transferring that uncertainty's cost — price the flexibility instead, using the 12-month contract runway to negotiate a shorter initial term or exit-protected commitment, accepting a worse unit price as the premium for optionality in a moving market.
- C) Defer all commitment until the market settles in 3 years.
- D) Split the estate across two vendors' platforms to hedge.

**Correct answer: B**

**Explanation:** The category bet is well-supported; the vendor bet is explicitly uncertain and undermined by credible competitor capability arriving inside the proposed 5-year term. The discount is correctly read as the price of locking through the uncertain period, priced against the 6–9 engineering-month cost of a forced migration. Option C confuses vendor uncertainty with category uncertainty. Option D pays the worst of both worlds. This tests separating a strong claim (category) from a weak one (vendor) within a bundled commitment, and structuring the deal to match each.

**Question 6 (moderate) — Error checking a business case's logic**

A business case for estate-wide device refresh argues: "Devices older than 4 years generate 2.3× the incident rate of newer devices (our data). Replacing all 900 over-4-year devices will therefore reduce estate incident volume by 35%, since those devices currently account for 35% of incidents. The refresh pays for itself in 20 months through support-cost avoidance." Which flaw most needs correction before this reaches the investment board?

- A) The 2.3× figure needs an external benchmark.
- B) The 35% claim assumes replacement devices generate zero incidents: the 900 new devices will still produce incidents at the newer-device rate, so the true reduction is the difference between old and new rates on those devices — roughly 35% × (1 − 1/2.3) ≈ 20% — and the payback stretches to roughly 35 months accordingly.
- C) The case ignores that users prefer new devices.
- D) Incident volume is the wrong metric entirely.

**Correct answer: B**

**Explanation:** Removing devices that generate 35% of incidents removes that 35% only if their replacements generate nothing — but new devices incident at the baseline rate, so the true net reduction is closer to 20 percentage points. The payback claim inherits the error, roughly doubling. This tests computing the honest counterfactual (what the replacements themselves will generate) rather than the removed item's contribution alone — an investment board that catches this error itself discounts every future case that arrives without it checked.

**Question 7 (moderate) — Pattern synthesis across services**

A service group's annual data: device incidents down 8%; account/access incidents up 60% (now the largest category); software-deployment requests up 45%; hardware requests flat; meeting-room and collaboration-tool tickets up 70% from a small base; and the business has announced permanent hybrid working plus two SaaS-first programmes. What is the strongest strategic synthesis?

- A) The estate is healthy: the largest historical category (device incidents) is falling.
- B) Demand is migrating from device-centric to identity-, software- and collaboration-centric — consistent with hybrid working and SaaS adoption — so the function's centre of gravity (skills, tooling, team structure, roadmap investment) must shift toward identity/access management, software delivery pipelines and collaboration environments, while device support is maintained as a stable, shrinking core.
- C) The access-incident spike is a security problem requiring an audit.
- D) Each trend should be assigned to a separate lead for independent action.

**Correct answer: B**

**Explanation:** Growth is uniformly on the identity/software/collaboration axis while declines and flats are uniformly device-side, and the announced business direction supplies the mechanism connecting them — one structural shift, not five independent trends. Option A reads the legacy headline and misses the composition change. Option D fragments a single shift into uncoordinated local responses. This tests reading multiple series together against business context, and connecting the synthesis to real workforce and tooling consequences — the skills shift needs to be planned years before device volumes justify fewer device engineers.

**Question 8 (moderate) — Compliance position under a deadline**

A new government security standard takes effect in 9 months: all estate devices must run supported OS versions with a defined patch cadence. Position: 2,760 of 3,000 devices already comply; 180 are legacy-OS devices awaiting the refresh programme (funded, completes in 7 months); 60 are specialist devices controlling laboratory equipment whose vendor certifies only the legacy OS — no supported-OS path exists, and replacement equipment is a 2-year capital programme. What is the correct compliance strategy?

- A) Report 92% compliance and note the rest as "in progress".
- B) Accelerate the refresh to cover all 240 non-compliant devices.
- C) Three-lane the position now: the 180 refresh devices are compliant-by-deadline on the funded plan (evidence: programme schedule); the 60 laboratory devices cannot comply within any feasible timeline, so begin the standard's formal exception/waiver process immediately with compensating controls (network isolation, monitoring, restricted accounts) designed, costed and documented — and start the 2-year replacement case now so the exception is time-bound; report all three lanes explicitly to governance before the deadline, not after it.
- D) Isolate the 60 laboratory devices from the network entirely and declare full compliance.

**Correct answer: C**

**Explanation:** The 180 are genuinely in-progress with funded evidence; the 60 have no path within the deadline and need a formal, time-bound exception rather than an undifferentiated "in progress" label. Option B cannot touch the 60, since the constraint is the vendor, not the schedule. Option D applies a real control dishonestly — isolated non-compliant devices are exceptions with controls, not compliant devices. This tests segmenting a compliance population honestly by remediation path, evidencing each lane, and using a standard's own formal exception route rather than mislabelling.

**Question 9 (challenging) — Resourcing model under conflicting signals**

Workforce data: team of 24 (4 leads, 8 seniors, 10 engineers, 2 associates). Attrition has risen from 8% to 17% in two years, concentrated in seniors (5 of 8 leaving-events); exit interviews cite "no progression path" (4 of 8) and pay (3 of 8). Demand analysis needs identity and automation skills the team largely lacks; the external market for those skills is expensive and slow; budget allows either two external senior hires or a comprehensive L&D-plus-progression programme, not both. Which resourcing strategy is strongest?

- A) Two external senior identity hires — the skills gap is urgent and hiring closes it fastest.
- B) The L&D-plus-progression programme: the attrition diagnosis (progression-starved seniors) and the skills gap (identity/automation) solve each other — funded progression into the new skill areas gives ambitious seniors the path whose absence is driving them out, converts the existing team toward the demand shift, and stops the attrition that would otherwise consume the external hires' contribution; hire externally later, into a stabilised team, if gaps remain.
- C) Split the budget: one hire and a half-programme.
- D) Counter-offer departing seniors with pay increases from the budget.

**Correct answer: B**

**Explanation:** The attrition driver (progression) and the skills gap (identity/automation, learnable adjacencies for strong seniors) overlap, and a funded progression framework addresses both with the same money. Hiring expensive externals into a team leaking seniors at 17% risks the new hires reinforcing the same missing progression signal and accelerating incumbent departures. Option C halves both instruments below their working doses. This tests recognising a diagnosis-solving resourcing strategy rather than treating symptoms serially at retention-premium prices.

**Question 10 (challenging) — The metric that improved for the wrong reason**

A flagship analytics initiative ties the function's performance story to "average incident resolution time", improved 22% year-on-year and heavily cited upward. A deeper dig shows: resolution times are flat within every incident category; the improvement comes entirely from category mix — access incidents (fast, median 25 minutes) grew from 20% to 45% of volume while hardware incidents (slow, median 6 hours) shrank. User satisfaction is flat, and hardware-incident users' satisfaction has fallen. What does intellectual honesty require of the next report?

- A) Continue citing the 22% — it is arithmetically true and the function needs the win.
- B) Stop reporting the average entirely.
- C) Re-present the measure decomposed: state plainly that the blended improvement is a mix effect, not faster resolution ("we resolve nothing faster than last year; our workload composition changed"); replace the headline with per-category resolution times plus a composition chart; and redirect the performance narrative to the real findings — the hardware experience is deteriorating in satisfaction terms and deserves investment, and the access-incident growth is a demand signal for prevention (self-service, automation) rather than a performance story.
- D) Reweight the average to last year's category mix and report that figure alone.

**Correct answer: C**

**Explanation:** The most-cited number is true and misleading — a composition-shift pattern at strategic scale. Option C states the decomposition in one unspinnable sentence, repairs the reporting instrument with per-category figures that cannot be mix-gamed, and redirects to the two decisions the analysis actually supports. Option A spends the function's credibility on a number one analyst's afternoon could unmask. Option D is still curation, just methodologically defensible curation. This tests decomposing a flagship metric even when it belongs to the person reporting it.

**Question 11 (challenging) — Designing the decisive experiment at strategic scale**

Two credible theories divide leads about why laptop build times have doubled over 18 months (45 → 90 minutes): image bloat, or network degradation since builds moved to distributed depot sites (same period). Both plausible, instrumentation patchy. Which next step resolves it most efficiently?

- A) Commission a working group to review 18 months of change records for both systems.
- B) Run the factorial experiment this week: build devices in a 2×2 design — current image and 18-month-old archived image, each at both a depot site and the central site. Four cells, a morning's work: if old-image builds are fast everywhere, it's the image; if central builds are fast with either image, it's the network; if both factors matter, the design quantifies each contribution — then aim remediation at the measured cause in proportion.
- C) Split the difference: fund image slimming and network upgrades simultaneously.
- D) Adopt the majority view among the leads and act on the image theory.

**Correct answer: B**

**Explanation:** Both candidate causes vary over the same period, which is why archival records will show both changing and settle nothing. The 2×2 design separates the confounded factors and apportions the lost minutes between causes rather than picking a winner. Option C is the standing failure mode of committee compromise — spending on two remediations when measurement would show one contributes almost everything. Option D resolves an empirical question by vote. This tests recognising when a strategic dispute is secretly a measurable question, and reaching for the cheap controlled comparison before the lengthy committee process.

### Administration tips

- **Watch for whether a candidate finds the monotonic ratio behind flat headline totals.**
- **Score for whether a candidate audits a plan for slack**, not just feasibility.
- **Note whether a candidate checks a risk register's residual-risk arithmetic** rather than accepting a stated conclusion.
- **Keep timing consistent** across candidates for this level.
- **Use the experimental-design item (Question 11) to observe whether a candidate reaches for a controlled comparison** over a lengthy committee review.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that reads a headline total while composition moved beneath it.**
- **Accepting a plan that "fits" without checking its slack.**
- **Crediting a risk register entry whose residual risk doesn't follow from its own stated mitigation.**
- **Missing when a candidate spends scarce attention on an actionable-looking but non-actionable matter.**
- **Accepting a bundled commitment's framing without separating its strong and weak claims.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely turns on: multi-year budgets and investment cases, workforce and capacity models, estate analytics, compliance percentages, forecast ranges, and the trend arithmetic behind strategy roadmaps.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each built around a table, chart, or described dataset. At principal level, numbers often arrive pre-framed: business cases advocating for themselves, vendor pricing structured to obscure, dashboards averaging away the story. The difficulty lives in interpretation — the counterfactual, the denominator, the range around a point estimate.

### How this assessment maps to the role

- **Investment and cost modelling** maps to strategy roadmap ownership and the **Change management** skill.
- **Trend arithmetic and forecasting** maps to the duty to understand business trends and the direction of future technologies.
- **Workforce and capacity modelling** maps to the resourcing, learning and development leadership.
- **Analytics interpretation** maps to the **IT service reporting** skill.
- **Risk quantification** maps to the **Asset and configuration management** skill and the **Testing** skill.
- **Cross-service comparison** maps to the **Service focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Budget share and real change**

A function's budget: last year £2.40m, this year £2.52m. Inflation relevant to the cost base is 6%. A board member congratulates the function on "a 5% increase." What is the real-terms position?

- A) A 5% increase, as stated.
- B) Roughly a 1% real-terms cut: the nominal rise is 5% (2.52 ÷ 2.40 = 1.05), but against 6% inflation the real change is about 1.05 ÷ 1.06 ≈ 0.99 — the budget buys about 1% less than last year.
- C) An 11% increase (5% + 6%).
- D) Real-terms change cannot be computed from these figures.

**Correct answer: B**

**Explanation:** Nominal change is +5%; deflating by inflation gives a real-terms reduction of roughly 1%. Option C adds where it should divide. This tests restating a nominal figure in real terms before accepting a framing — a principal who accepts "a 5% increase" as the frame has conceded the year's real resourcing position in the first sentence.

**Question 2 (easy) — Attrition arithmetic**

A team of 24 lost 4 people last year. What is the annual attrition rate, and — if hiring replaces leavers with a 4-month average vacancy — roughly how many full-time-equivalent (FTE) months of capacity does attrition cost per year?

- A) 17% attrition; ~16 FTE-months lost
- B) 17% attrition; ~4 FTE-months lost
- C) 12% attrition; ~8 FTE-months lost
- D) 25% attrition; ~12 FTE-months lost

**Correct answer: A**

**Explanation:** Attrition = 4 ÷ 24 ≈ 17%; capacity cost = 4 leavers × 4 months vacancy = 16 FTE-months. This tests translating an HR statistic into a resourcing argument — "16 FTE-months, roughly 6% of total capacity, before onboarding ramp and recruiting time" is the arithmetic that funds retention spending.

**Question 3 (easy) — Cost per user across channels**

Annual support costs and volumes: walk-up desks £180,000 for 12,000 contacts; remote/phone £240,000 for 40,000 contacts; self-service portal £60,000 for 30,000 successful self-resolutions. What is the cost per contact of each channel, and what does the comparison support?

- A) £15, £6, £2 — supporting continued investment in self-service capacity, with the caveat that the channels handle different complexity mixes and self-service growth must be measured by successful resolutions, not deflected contacts.
- B) £15, £6, £2 — proving walk-up desks should close.
- C) £12, £8, £3 — the figures are roughly comparable.
- D) Cost per contact is meaningless across different channels.

**Correct answer: A**

**Explanation:** Walk-up £15, remote £6, self-service £2 per contact — but walk-ups absorb the harder cases the cheap channel cannot touch, so the comparison supports migrating movable work toward self-service rather than closing the channel handling the residue. This tests normalising per outcome (successful resolution, not attempted contact) and respecting complexity mix rather than reading a raw comparison as an amputation case.

**Question 4 (moderate) — Compound growth in a capacity forecast**

Cloud storage consumption: 120 TB today, growing 4% per month (compounding). Purchased capacity: 200 TB. The procurement cycle for expansion takes 6 months. When does consumption cross capacity, and when must procurement start?

- A) Crosses in about 13 months; procurement must start within about 7 months.
- B) Crosses in about 20 months; start within 14.
- C) Crosses in about 13 months; procurement should have started already.
- D) Crosses in about 10 months; procurement is already late.

**Correct answer: A**

**Explanation:** Solving 120 × 1.04^m = 200 gives m ≈ 13 months; subtracting the 6-month procurement lead gives a decision deadline of month 7. Option B linearly divides headroom by today's increment, ignoring that the increment itself compounds — the error that always overstates runway under compound growth. This tests modelling compound growth correctly, and a strong candidate's answer states the growth assumption beside any crossing date, since a small change in growth rate materially shifts it.

**Question 5 (moderate) — Comparing investment options across years**

Two roadmap options for an 80-room ageing meeting-room estate. Option 1: full refresh now — £480,000 capital, £40,000 annual support, 6-year life. Option 2: phased refresh — £180,000/year for three years (30, 30, 20 rooms), support falling from £90,000 (year 1) to £60,000 (year 2) to £40,000 (year 3 onward). Over six years, ignoring discounting, which costs less and by how much?

- A) Option 1: £720,000 total versus Option 2's £810,000 — phased costs £90,000 more.
- B) Option 2 — phasing always spreads cost efficiently.
- C) Option 1: £720,000 versus £830,000 — a £110,000 difference.
- D) They are equal.

**Correct answer: A**

**Explanation:** Option 1 totals £720,000; Option 2 totals £850,000 on full recomputation (£540,000 capital + £310,000 support over six years), an Option 1 advantage of £130,000 — Option A correctly identifies the winner and direction, closest among the offered figures. This tests recognising that phasing is not free — the mixed-estate years carry elevated support costs, a premium a defensible recommendation states explicitly as the price of cash-flow smoothing.

**Question 6 (moderate) — Expected cost of an unmitigated risk**

A register's supplier-failure risk: if a sole repair supplier fails, emergency re-procurement and interim arrangements would cost an estimated £250,000 and 4 months of degraded service; annual failure probability assessed at 8%. A second-supplier framework agreement, dual-running a small volume, costs £30,000/year and would reduce failure impact to £60,000 and 1 month. On expected-cost arithmetic, is the mitigation worth it, and what consideration should accompany the arithmetic?

- A) No: £30,000 per year exceeds the £20,000 expected annual loss (8% × £250,000).
- B) Yes on expectation: unmitigated expected cost is £20,000; mitigated is £30,000 + 8% × £60,000 = £34,800 — on pure expectation the mitigation costs more; but the accompanying consideration reverses the decision context: expected-value arithmetic treats a £250,000, 4-month service failure as equivalent to 12.5 predictable years of £20,000 — organisations are not risk-neutral about single events that halt statutory-facing services for a season, so the £14,800 annual premium buys variance reduction (and 3 fewer months of degraded service in the failure case), which is a defensible insurance purchase to put to governance as exactly that.
- C) Yes: the mitigation pays for itself immediately.
- D) The probabilities are guesses, so no calculation is meaningful.

**Correct answer: B**

**Explanation:** On pure expected value, the mitigation costs £14,800/year more, not less. Option B states this honestly, then adds what pure expectation omits — that low-frequency, high-severity, service-halting events are insurance decisions, not averages. This tests running the expectation honestly on both branches, then presenting variance and severity considerations to governance explicitly, rather than letting expected value alone decide a risk-appetite question.

**Question 7 (moderate) — Reading a workforce cost comparison honestly**

To close an identity-skills gap, three options for acquiring 2 FTE of identity capability: (1) two external hires — £75,000 each fully loaded, 5-month average time-to-hire, 90% first-year retention estimate; (2) develop two internal seniors — £12,000 training each plus roughly 30% of their time for 9 months diverted from current duties (loaded cost £65,000 each); (3) contractors — £700/day each, available in 3 weeks. For a permanent capability need, what is the fairest one-year comparison?

- A) Contractors are cheapest because there is no recruitment cost.
- B) Year-one costs: hires ≈ £87,500 (part-year salary) plus recruitment; development ≈ £53,000 (training plus diverted time); contractors ≈ £308,000 — development is the lowest-cost route to permanent capability, at the price of 9 months' build time and backfill pressure; contractors are the fastest and dearest, defensible only as a bridge; the honest comparison prices time-to-capability and permanence, not just invoices.
- C) External hiring is best because it adds headcount.
- D) The three cannot be compared because their cost structures differ.

**Correct answer: B**

**Explanation:** Building each option's true year-one cost — including pipeline delay, diverted time, and daily-rate multiplication — shows development wins on cost and permanence, contractors are fastest but far more expensive and non-permanent, and hires sit between. This tests costing to permanent capability, time-to-capability, and retention risk together, rather than comparing invoice prices alone.

**Question 8 (moderate) — Compliance percentage with honest denominators**

For the security standard of the cognitive section: 3,000 estate devices; 2,760 compliant; 180 on the funded refresh path; 60 laboratory devices heading for formal exception with compensating controls. Three framings: (a) "97.8% compliant or on funded path, 2% under formal exception process"; (b) "92% compliant"; (c) "100% managed". Which statement about these framings is correct?

- A) All three are equivalent since they describe the same estate.
- B) (b) is the only honest figure; the others spin.
- C) (a) is the governance-grade framing: it separates the lanes with their different evidence (current compliance, funded plan, formal exception) and totals to the whole estate; (b) is true but decision-poor — it hides that the gap is fully lane-managed; (c) is the spin option, converting an unfinished exception process into a claim of completion.
- D) (c) is best because boards want assurance.

**Correct answer: C**

**Explanation:** 2,760÷3,000 = 92%; (2,760+180)÷3,000 = 98%; 60÷3,000 = 2% — three genuinely distinct lanes. (b) under-claims, inviting the board to imagine an unmanaged gap that is actually fully managed. (c) asserts completion of an in-progress process. This tests reporting compliance with its lanes visible rather than collapsing a segmented reality into one number that either flatters or slanders.

**Question 9 (challenging) — Decomposing a cost-per-device benchmark**

An external benchmark reports cost per managed device at £412 against a public-sector median of £350, prompting the question "why 18% over benchmark?" Decomposition: the benchmark median excludes assistive-technology provision (£18/device), 24/7 support for statutory teams (£22/device), and an accelerated security posture (£31/device); the remaining comparable base is £341. What is the honest position to report?

- A) "We are 18% over benchmark and will develop a cost-reduction plan."
- B) "Adjusted for scope, we are at or below benchmark (£341 v £350); the £71/device difference is three named service choices — accessibility provision, statutory 24/7 cover, enhanced security — each a deliberate commitment with its cost stated; if the board wishes to revisit any, that is a service-level decision, not an efficiency finding."
- C) "Benchmarks are not comparable and should be disregarded."
- D) "We are £62 per device over and will cut the security posture to close the gap."

**Correct answer: B**

**Explanation:** £412 − £18 − £22 − £31 = £341, at or below the £350 median on comparable scope. Option B itemises the adjustment, ties each premium to a named, owned service choice, and converts an accusation into an informed choice for governance. This tests decomposing a benchmark before accepting or rejecting it, returning any residual to its real decision-owner rather than volunteering a service to be cut.

**Question 10 (challenging) — The pilot that "proves" the strategy**

A self-service automation pilot ran in the directorate with the youngest, most digitally-confident workforce: 300 users, task-completion 78%, ticket deflection 34%, satisfaction +12 points. The business case for estate-wide rollout (3,000 users) projects the same figures and claims £280,000 annual support savings. The wider estate includes directorates with older equipment, field workers with intermittent connectivity, and 210 users of assistive technologies for whom the portal is untested. What projection discipline should the case adopt?

- A) Project the pilot figures — they are the only data available.
- B) Segment the projection: apply pilot figures only to the ~40% of the estate resembling the pilot population; apply discounted assumptions (with stated rationale) to field and legacy-equipment segments; treat the assistive-technology cohort as unknown pending accessibility testing — a launch gate, not a footnote; present savings as a range (perhaps £120,000–£220,000) with the segment assumptions visible, and commit to re-basing after a second, deliberately-unrepresentative pilot.
- C) Reduce all projections by a flat 50% to be conservative.
- D) Reject the rollout — the pilot population invalidates the data.

**Correct answer: B**

**Explanation:** The pilot is real evidence about populations resembling the pilot, not the whole estate. Option B segment-matches evidence, discounts with stated rationale where mechanisms genuinely differ, and treats the untested assistive-technology cohort as an accessibility gate rather than an assumed success. Option C's flat discount is rigour theatre, discounting well-evidenced and unknown segments identically. This tests recognising the reference-population generalisation trap in a business case's own author, not just a supplier's.

**Question 11 (challenging) — Reading the trend that changes the model**

Five-year data: laptops per 100 users: 108, 106, 105, 103, 102; smartphones/tablets per 100 users: 64, 79, 96, 118, 141; percentage of tickets resolvable only on-site: 34%, 30%, 24%, 19%, 15%; percentage of the user base ever visiting a walk-up desk annually: 61%, 55%, 46%, 38%, 31%. The support model — staffing, sites, skills — was designed five years ago around desk-side laptop support. What do the four series jointly support?

- A) Continue the current model — laptops remain above 100 per 100 users.
- B) The model's designed-for world is dissolving on every axis at once: mobile devices compound at ~22% a year and now outnumber laptops; on-site-only work has more than halved; desk-visiting users have halved — the strategic response is a redesigned support model (remote-first capability, mobile-platform skills, fewer/reconfigured physical sites, self-service depth), sequenced over 2–3 years through the roadmap, with the L&D and resourcing plan retooled now because capability builds are the longest lead-time item.
- C) Close all walk-up desks next quarter based on the visiting trend.
- D) The series measure different things and cannot support a joint conclusion.

**Correct answer: B**

**Explanation:** Each series alone is arguable; together they describe four independent measurements of the same structural migration corroborating each other. Option C repeats, at strategic scale, the desk-closure mix-effect error, since the remaining 31% who still visit include precisely the users remote channels serve worst. This tests synthesising several corroborating trends into one strategic response, sequenced correctly — capability first, since retraining takes years, sites and structures second, and the residue served throughout.

### Administration tips

- **Score for whether a candidate restates a nominal figure in real terms** before accepting a framing.
- **Watch for whether a candidate models compound growth correctly**, not linearly.
- **Note whether a candidate decomposes a benchmark or business case's assumptions** before accepting or rejecting its headline.
- **Keep timing consistent** across candidates for this level.
- **Use the pilot-projection item (Question 10) to observe whether a candidate segment-matches evidence** rather than projecting a best-case pilot onto a whole population.

### Common pitfalls to watch for when scoring

- **Accepting a nominal figure as a real-terms figure.**
- **Rewarding a linear projection of a compounding series.**
- **Missing when a candidate counts a removed problem rather than a net effect** in a replacement or automation case.
- **Accepting a pilot's best-case figures projected onto a dissimilar wider population without segmentation.**
- **Crediting an answer that lets expected value alone decide a low-frequency, high-severity risk question.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. At principal level in end user computing, the material is service level agreements, incident and request policy, licensing and supplier terms, security standards covering devices, and the knowledge articles teams write and rely on.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means it settles neither — regardless of what a reader knows from running the service.

Long experience is the main hazard: a candidate will know how request fulfilment usually works and what a device policy normally requires, while the passage in front of them describes this particular one.

Three specifics matter especially at this level. Priority and target definitions are precise and usually combine two variables — reading one as the whole is the commonest source of misclassification, both in an assessment and on a service desk. Licensing terms define scope narrowly — by user, by device, by site, by purpose — and a permission granted for one purpose does not stretch to a neighbouring one; licence scope is a design constraint for a strategy roadmap, not an administrative afterthought. And knowledge articles are written to be relied on by people under time pressure, so reading one for exactly what it covers is a skill this role also needs to assess in others.

### How this assessment maps to the role

- **Reading service level definitions** maps to **Service focus** and **Incident management**.
- **Reading request and change policy** maps to the **Change management** skill.
- **Reading licensing and supplier terms** maps to strategy roadmap ownership.
- **Reading device security standards** maps to **Asset and configuration management**.
- **Reading knowledge articles** maps to knowledge management and **Technical specialism**.
- **Reading performance reporting** maps to **IT service reporting**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Incident priority is determined by impact and urgency. Priority 1 requires both high impact and high urgency. Response targets run from the time an incident is logged. Resolution targets are suspended while an incident awaits information from the user, and resume when the information is provided. A workaround that restores the user's ability to work is treated as a resolution for target purposes; the underlying fault is managed as a problem. Service requests are not incidents and are governed by the request catalogue, which sets its own fulfilment targets. A request that cannot be fulfilled from the catalogue is raised as a change."

**Question 1 (easy)**

Statement: An incident with high impact and low urgency is a Priority 1 incident.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Priority 1 requires both high impact and high urgency; a conjunctive definition is not satisfied by one half. This tests reading a priority definition as a conjunction of two variables — exactly the case service desks misclassify, usually upward, under pressure from affected users.

**Question 2 (moderate)**

Statement: A service request has the same response target as an incident of equivalent impact.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Service requests are explicitly governed by their own catalogue targets, separate from incident targets. This tests recognising a category distinction with real reporting consequences — mixing requests and incidents in a single performance figure produces a number with little meaning.

**Question 3 (moderate)**

Statement: An incident resolved by a workaround has met its resolution target.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Established directly: a workaround restoring the user's ability to work is treated as a resolution for target purposes. This tests noticing what the statement does not establish (that the fault is fixed) — a service can report excellent resolution performance while its problem backlog grows, entirely within this policy.

**Question 4 (harder)**

Statement: Time spent waiting for a user to supply information counts against the resolution target.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Resolution targets are explicitly suspended while awaiting user information. This tests recognising a legitimate provision that is also a route by which a service can appear to perform well while users wait a long time in real terms — a target-met figure and a user's experience of elapsed time can diverge substantially.

*Passage B — for Questions 5 to 8*

"The licence grants the customer the right to install the software on devices assigned to named users, up to the number of licences purchased. A named user may install the software on up to two devices for their own use. Licences may be reassigned to a different named user where the original user has left the organisation or changed role, provided reassignment does not occur more frequently than once every 90 days for any individual licence. The software may not be installed on shared or kiosk devices. The supplier will provide security updates for the current and immediately preceding major version."

**Question 5 (easy)**

Statement: A named user can install the software on two devices.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, with the qualifier "for their own use" — this tests noticing that the two-device allowance is not a second licence to hand to a colleague, which the shared-device prohibition later reinforces.

**Question 6 (moderate)**

Statement: The software can be installed on a shared meeting room device.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage explicitly prohibits installation on shared or kiosk devices. This tests recognising a restriction that needs to be visible at design time — a strategy assuming a common build across all device types may be unlicensable as designed, which an audit rather than the strategy's own author would otherwise discover.

**Question 7 (moderate)**

Statement: A licence belonging to someone who left the organisation 30 days ago, and which was reassigned 60 days ago, can be reassigned now.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The leaving condition is satisfied, but the 90-day cooling-off period since the last reassignment (60 days ago) is not. This tests checking every condition of a compound permission, including a per-licence cooling-off period — the sort of detail that quietly creates non-compliance in a large estate with routine staff turnover.

**Question 8 (harder)**

Statement: Security updates are available for versions two releases behind the current one.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Updates are provided only for the current and immediately preceding major version; two releases behind is neither. This tests reading a supported-version clause as a constraint on upgrade cadence — it defines the maximum deferral period before running unpatched software.

*Passage C — for Questions 9 to 12*

"The quarterly service report states that first contact resolution rose from 61% to 68%. Over the same period, the number of contacts fell from 12,400 to 9,900 following the introduction of a self-service portal. The report notes that the portal handles password resets, which previously accounted for approximately 30% of contacts. Average user satisfaction, measured by a survey offered at the close of each ticket, was 4.2 out of 5, based on 380 responses. The report recommends extending self-service to software installation requests."

**Question 9 (moderate)**

Statement: First contact resolution improved because the service desk became more effective.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage supplies a sufficient alternative explanation — removing easily-resolvable password resets to self-service would tend to reduce, not raise, the measured rate, so the improvement may be genuine, compositional, or both — and does not adjudicate. This tests distinguishing what a headline statistic actually establishes from the inference a report invites.

**Question 10 (moderate)**

Statement: Contact volume fell by approximately 20%.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** 2,500 ÷ 12,400 ≈ 20.2%, computable directly from figures the passage supplies. This tests arithmetic verification, and a strong candidate's answer would note the fall is smaller than the 30% share password resets represented, raising a question the report does not address.

**Question 11 (moderate)**

Statement: The satisfaction figure represents the views of users whose tickets were not resolved.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The survey is offered at the close of each ticket, reaching users whose tickets were closed. This tests reading a survey's actual reach precisely, and a strong candidate's answer would note the low response rate (under 4%) as a separate, non-random-sample concern worth raising even though it isn't needed for this answer.

**Question 12 (harder)**

Statement: Extending self-service to software installation requests would reduce contact volume further.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** This is the report's recommendation, not a finding, and the passage gives no data on software-installation contact volume, its amenability to self-service, or likely adoption. This tests distinguishing a report's evidence from its recommendation — a core discipline for anyone making roadmap decisions from service reporting.

### Administration tips

- **Score for whether a candidate reads priority definitions as conjunctions**, not single-variable tests.
- **Watch for whether a candidate checks every condition of a compound permission**, including cooling-off periods.
- **Note whether a candidate separates a report's stated finding from its recommendation.**
- **Use the compositional-improvement item (Question 9) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that treats high impact alone as sufficient for Priority 1.**
- **Missing when a candidate counts user-wait time against a suspended target.**
- **Accepting a first-contact-resolution rise as evidence of desk performance** without checking for a compositional explanation.
- **Treating a report's recommendation as an established finding.**
- **Missing a licence's per-condition compound requirements** (purpose, device type, cooling-off period).

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. At principal level in end user computing, the scenarios involve the strategy roadmap, resourcing and development of the team, supplier and licence decisions, and the permanent tension between a service that must feel responsive to every individual and one that must be sustainable at scale.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners at comparable seniority.

Three patterns run through the strong answers. First, end user computing is judged by individual experiences and managed by aggregates, and the strongest answers usually find a way to serve the individual without setting a precedent that breaks the aggregate. Second, demand is designed, not given — contacts arrive because something upstream generates them, and the highest-value work is usually removing the cause rather than handling the contact faster. Third, this role names resourcing, learning and development for the team, and whether service desk and end user computing roles become somewhere people pass through is largely determined by what a principal does about it.

### How this assessment maps to the role

- **Strategy and roadmap** maps to owning the strategy roadmap and understanding business trends.
- **Team development** maps to leading on resourcing, learning and development.
- **Demand management** maps to **Incident management** and **Problem management**.
- **Service reporting** maps to **IT service reporting**, using data to make decisions.
- **Change judgement** maps to the **Change management** skill.
- **User perspective** maps to **User focus** and **Service focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — A senior user demanding priority**

A director's laptop has failed and they are demanding immediate replacement, ahead of others in the queue. What is the most effective response, and which is least effective?

- A) Replace it immediately; they are a director.
- B) Establish what they actually cannot do and for how long, then decide on that basis — if a board paper is due this afternoon the urgency is real and the queue should move, and if it is not, offer a loan device now so they can work while the queue runs normally.
- C) Explain the queue and ask them to wait their turn.
- D) Escalate the decision upward.

**Correct answer: most effective B; least effective A**

**Explanation:** Priority is impact and urgency, and seniority is a proxy for impact that is often wrong in both directions. Option B assesses the real position; a loan device costs almost nothing and dissolves the urgency. Option A is least effective because a queue that reorders on seniority stops being a queue, and every subsequent director learns escalation works. Option C applies process without addressing the need. Option D hands upward a decision well placed within this role.

**Question 2 (easy) — A recurring contact type**

Analysis shows one contact type accounts for a large share of the team's workload. What is the most effective response, and which is least effective?

- A) Add staff to handle the volume.
- B) Find out what generates it — a confusing step in a process, a fragile part of the build, a change nobody communicated — because the highest-value work is usually removing the cause, and handling a self-inflicted contact type efficiently forever is the expensive option.
- C) Write a knowledge article so contacts are resolved faster.
- D) Move it to self-service.

**Correct answer: most effective B; least effective A**

**Explanation:** Demand in end user computing is mostly generated by something upstream, and option B looks for it. Option A is least effective, since staffing to meet self-inflicted demand makes the cost permanent and grows with the estate. Options C and D are genuinely useful steps that accept the demand as given, reasonable after diagnosis rather than instead of it.

**Question 3 (moderate) — A roadmap decision with a licence constraint**

A device strategy would be simpler with a single common build, but a key application's licence prohibits installation on shared devices, and a proportion of the estate is shared. What is the most effective response, and which is least effective?

- A) Adopt the single build; the simplification is worth it.
- B) Design around the constraint explicitly — a common core build with the licensed application deployed only to assigned devices — and check whether the supplier offers terms covering shared use, because a strategy that is unlicensable as designed will be discovered by an audit rather than by its author.
- C) Abandon the single build.
- D) Adopt the single build and manage the risk.

**Correct answer: most effective B; least effective D**

**Explanation:** Option B keeps most of the simplification while respecting the constraint, and asks the supplier — who frequently has terms for shared or kiosk use. Option D is least effective: "manage the risk" on a licence prohibition means knowingly operating in breach across an estate, discovered by audit. Option A does the same thing without acknowledging it. Option C discards a worthwhile simplification for a solvable constraint.

**Question 4 (moderate) — A team that people leave**

A team has high turnover, with people moving on within eighteen months. What is the most effective response, and which is least effective?

- A) Improve recruitment to fill vacancies faster.
- B) Find out why people leave — usually that the role has no visible progression and the work is seen as a stepping stone — and address that with real routes: specialisms people can grow into, involvement in the roadmap work, and a path towards infrastructure or engineering roles that keeps people in the organisation.
- C) Accept it; this is a role people pass through.
- D) Increase pay bands.

**Correct answer: most effective B; least effective C**

**Explanation:** This role names leading on resourcing, learning and development, and option B treats turnover as a design problem. Offering a deliberate path to engineering roles elsewhere in the organisation, openly, is what keeps people for three years rather than eighteen months. Option C is least effective because it accepts a permanent capability drain and becomes self-fulfilling. Option A treats the symptom; option D may help but is rarely the main driver.

**Question 5 (moderate) — A change with wide user impact**

A change to the standard build would improve security but alter something users interact with daily. What is the most effective response, and which is least effective?

- A) Implement it; the security improvement justifies it.
- B) Implement it with the user impact planned for — advance communication describing what changes and why, a knowledge article ready before rather than after, and desk capacity for the contact spike — because the change will generate contacts regardless, and the only variable is whether the timing was chosen.
- C) Implement it quietly to avoid alarming users.
- D) Defer it until a quieter period.

**Correct answer: most effective B; least effective C**

**Explanation:** A visible daily-interaction change produces contacts whatever happens, so the work is in shaping and absorbing them; having the knowledge article ready in advance separates a managed spike from a bad week. Option C is least effective — unexplained changes generate more contacts and suspicion, not fewer. Option D used as a default means security changes never happen. Option A takes the benefit without planning the cost.

**Question 6 (moderate) — Reporting that flatters**

A service report shows first contact resolution improving. Most of the improvement is known to come from simple contacts moving to self-service. What is the most effective response, and which is least effective?

- A) Report the improvement; the figure is accurate.
- B) Report the figure with the explanation, because a rate that moved for compositional reasons is not evidence of improved performance, and presenting it as such means the next decision — including decisions about the team's own resourcing — is made on a false picture.
- C) Report the figure and the volume reduction separately.
- D) Change the metric.

**Correct answer: most effective B; least effective A**

**Explanation:** Using data analytics to make decisions that enhance business performance is undermined at source if the data is presented without what it means, and a rate improvement attributed to team performance invites the conclusion the team could be smaller. Option A is least effective — it banks a short-term credit and sets up a worse conversation later. Option C leaves the reader to make the connection, which they usually won't. Option D discards a useful measure.

**Question 7 (harder) — A supplier missing targets**

A device supplier is consistently late on replacements, and users are waiting. The contract provides service credits. What is the most effective response, and which is least effective?

- A) Claim the credits.
- B) Establish why — stock, logistics, or a contract that pays for something other than speed — and address that, because credits compensate for a failure without changing it, and users are still waiting.
- C) Escalate to the supplier's account director.
- D) Hold more stock locally as a buffer.

**Correct answer: most effective B; least effective A**

**Explanation:** Option B diagnoses before acting; the commercial cause is common and unmoved by escalation or credits alone. Option A is least effective as the whole response — money changes hands while users remain without devices. Option D is a genuinely good mitigation once the cause's temporariness is known. Option C is reasonable once the escalation's actual subject is understood.

**Question 8 (harder) — Understanding a business trend**

Contact volume from one directorate has risen sharply over two quarters. What is the most effective response, and which is least effective?

- A) Allocate more desk capacity to that directorate.
- B) Find out what changed there — new staff, a new system, a reorganisation, a change to how they work — because a sharp local rise almost always has a specific cause, and this role includes seeing the bigger picture and understanding business trends.
- C) Ask the directorate to reduce its contacts.
- D) Analyse the contact types to see what they are about.

**Correct answer: most effective B; least effective C**

**Explanation:** Option B looks for the cause, where the fix actually lives — fifty onboarded staff need different help from a new application rollout. Option D is a genuinely good move, best understood as the first step within finding the cause rather than an alternative to it. Option C is least effective — asking users to generate fewer contacts fixes nothing and signals the service exists for its own convenience. Option A absorbs the demand permanently.

**Question 9 (harder) — Pressure to skip testing**

A programme needs a software package deployed to 4,000 devices urgently and asks for the pilot to be skipped. What is the most effective response, and which is least effective?

- A) Refuse; piloting is standard.
- B) State what the pilot protects against — a package that breaks something on a fraction of the estate becomes hundreds of incidents in an afternoon — and offer the smallest pilot that would catch it, such as a few dozen devices across the main build variants over 24 hours.
- C) Deploy without the pilot; the programme owns the risk.
- D) Deploy to half the estate first.

**Correct answer: most effective B; least effective C**

**Explanation:** Option B concedes the time pressure and fits the control to it — a 24-hour cross-variant pilot catches most of what a longer one would. Option C is least effective: a bad deployment to 4,000 devices lands on the team, its users and its service figures, not the programme alone. Option D is reasonable but 2,000 devices is a large first exposure. Option A defends the process without engaging with the constraint.

**Question 10 (harder) — Knowledge that lives in people**

A team resolves many issues from experience rather than documented knowledge, and two experienced people are due to leave. What is the most effective response, and which is least effective?

- A) Ask them to write knowledge articles before they go.
- B) Have them work through live tickets alongside colleagues and write up what emerges, because what people know without being asked is invisible to them — a leaver asked to document their knowledge writes what they can think of, which is systematically the wrong subset.
- C) Record training sessions with them.
- D) Delay their departure if possible.

**Correct answer: most effective B; least effective D**

**Explanation:** Experts cannot see which of their own actions are non-obvious, so option A's documentation covers what they remember finding hard once, not what they now do automatically. Option B surfaces tacit knowledge by exercising it on real work. Option D is least effective — rarely available, and treats a structural knowledge problem as a scheduling one. Option C is a reasonable supplement sharing the same blind spot as A.

**Question 11 (harder) — A metric that will be gamed**

A target on average handling time is under consideration for the team. What is the most effective observation, and which is least effective?

- A) It is a good measure; faster handling means better service.
- B) A handling time target creates pressure on the cheapest thing to change, which is closing contacts quickly rather than resolving them — so it tends to reduce first contact resolution and increase repeat contacts, and pairing it with those two measures makes it much harder to move without genuine improvement.
- C) It should be combined with other measures.
- D) Handling time should not be measured.

**Correct answer: most effective B; least effective A**

**Explanation:** Average handling time is one of the most reliably counterproductive targets in service desk management for exactly the mechanism named in option B, which also states the specific counterweights. Option A is least effective — it adopts the target without asking how it will be met. Option C is the same idea without the mechanism. Option D discards a metric useful for capacity planning when it is not treated as a target.

**Question 12 (harder) — Reporting to a board**

A director asks for a summary of end user computing performance for a board paper. Targets are being met; user satisfaction with the device refresh experience is poor. What is the most effective response, and which is least effective?

- A) Report against targets; that is what was asked for.
- B) Report both and interpret them — targets are being met and the experience users actually have of getting a device is poor, which is a specific and addressable gap between what is measured and what is felt — because a board given only the target figures will not fund the work the satisfaction data points at.
- C) Report against targets and mention satisfaction if asked.
- D) Describe performance as mixed.

**Correct answer: most effective B; least effective A**

**Explanation:** The gap between meeting targets and satisfying users is the most useful thing a board can be told about this function, since it points at something fixable and explains complaints about a service reporting green. Option A is least effective — it earns approval now and guarantees the first serious complaint arrives as a surprise, with the function's own reporting cited as evidence everything was fine. Option C is the same omission with a fallback. Option D characterises without informing.

### Administration tips

- **Score for whether a candidate assesses real urgency rather than seniority**, and offers a practical interim option.
- **Watch for whether a candidate looks for the cause behind a recurring demand pattern**, not just a way to handle it faster.
- **Note whether a candidate treats team turnover as a design problem** with real, credible routes rather than acceptance.
- **Use most/least items to check whether a candidate rates each option on its own merits before ranking.**
- **Keep candidates scored to principal-level judgement** — strategic and organisational stewardship, not operational fixes.

### Common pitfalls to watch for when scoring

- **Rewarding reordering a queue by seniority** rather than genuine urgency.
- **Crediting staffing decisions that make self-inflicted demand permanent.**
- **Accepting "manage the risk" as an adequate response to a licence prohibition.**
- **Missing when a candidate reports a compositional improvement as if it were a performance improvement.**
- **Rewarding a target proposal (e.g. handling time) without naming its gaming mechanism.**

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a principal end user computing engineer: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests reading trend structure from noisy multi-year data, auditing roadmap dependency chains for slack rather than mere feasibility, and designing decisive experiments at strategic scale. The numeric section tests real-terms budget arithmetic, compound growth forecasting, honest counterfactuals in business cases, and segmented compliance and pilot-projection reporting. The verbal section tests reading priority definitions as conjunctions, licence conditions as compound permissions, and a report's evidence apart from its recommendation. The situational judgement section tests the calls that define this level: serving an individual's real need without breaking a queue, finding the cause behind demand rather than absorbing it, treating turnover as a design problem, and reporting the gap between what is measured and what is felt.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can own a strategy roadmap, interpret analytics honestly, and exercise sound judgement over long horizons with incomplete information — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
