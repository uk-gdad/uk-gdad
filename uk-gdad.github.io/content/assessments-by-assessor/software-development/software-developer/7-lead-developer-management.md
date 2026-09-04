# Lead Developer (Management) - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead developer on the management track. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A lead developer on the management track leads development across one or a small number of related project teams, and the role summary names responsibilities that distinguish this variant from its technical counterpart: leading and developing a team of experts, analysing current processes and implementing opportunities to optimise them, ensuring the correct implementation of availability and capacity management standards, and setting policy and standards.

That is a different centre of gravity from the technical track. The technical lead maintains hands-on responsibility across the stages of a project; this role is responsible for the people who do, for the processes they work within, and for the standards that govern both. The work is still technical — a standard cannot be set by someone who does not understand it, and a process optimisation proposed by someone who has not done the work is usually wrong — but the leverage has moved. A good day at this level changes how thirty people work, not what one component does.

Three features of the role shape what the assessment is built to test. First, this role makes decisions about people whose consequences are slow, personal, and largely unmeasurable. Second, this role sets policy, and policy applies to everyone including the cases nobody imagined when it was written. Third, this role is accountable for outcomes produced by people it does not directly control, which makes the quality of delegation the main determinant of the quality of the output.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate reads a process or team problem as a systemic one rather than reaching for effort or individual blame — several items are deliberately built so a confident, decisive-sounding answer is the weaker one where the facts call for establishing a mechanism first. Verbal items reward strict reading of authority and obligation language against the passage alone. Situational judgement items at this level consistently reward a response that establishes cause before acting, protects the team's willingness to disclose bad news, and applies the candidate's own standards to themselves as visibly as to anyone else.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands using material drawn from the role itself. For a lead developer on the management track that means process data, team performance information, standards proposals, capacity plans, and resourcing decisions.

The format is typically fifteen to thirty minutes online, covering deduction, pattern recognition, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group of comparable seniority, and many platforms report speed and accuracy separately.

Three things distinguish this section at this level. First, process problems are usually system problems: when a team is slow, the cause is rarely that people are working slowly, but queueing, handoffs, rework, or waiting on something — the instinct to look for effort is almost always the wrong instinct. Second, policy has a blast radius: a rule written to fix one case applies to every case, including the ones where it makes no sense, and the discipline of imagining the badly-fitting case before publishing is what separates workable policy from the kind teams quietly ignore. Third, this role reasons about people through weak evidence: performance signals are noisy, sparse, and heavily confounded by circumstance, and treating them as clean data produces confident wrong conclusions about individuals.

### How this assessment maps to the role

- **Systemic process diagnosis** maps to **Development process optimisation**, analysing current processes and implementing improvements.
- **Policy reasoning** maps to this role's responsibility for setting policy and standards, and to **Modern development standards**.
- **Capacity reasoning** maps to **Availability and capacity management**, ensuring standards are correctly implemented.
- **Prioritisation across teams** maps to leading development across related project teams.
- **Reasoning under weak evidence** maps to leading and developing a team of experts.
- **Risk and security judgement** maps to **Information security**.

### Practice questions

**Question 1 (easy) — Deduction from a policy**

Policy: "All production changes require an approved change record, except changes classified as standard changes, which are pre-approved." A change went to production without an approved change record. Ask which conclusion must be true.

- A) The policy was breached.
- B) It was a standard change.
- C) Either it was a standard change, or the policy was breached.
- D) The change should be reversed.

**Correct answer: C**

**Explanation:** A rule with an exception, plus a fact silent on the exception, licenses only the disjunction; options A and B each pick a branch on no evidence, and option D prescribes an action rather than stating what must be true. This tests deducing only what the given facts guarantee, and, in a strong candidate's answer, noting the practical point that if standard changes are invisible in the records, the policy cannot be audited — a defect in the policy rather than in anyone's compliance.

**Question 2 (easy) — Where the time goes**

A team reports a typical change takes 11 days from starting work to reaching production: coding 2 days, review 0.5 days, testing 1 day, deployment 0.5 days. Ask for the strongest observation.

- A) The team should code faster.
- B) Four days of work is spread across 11 days, so roughly 7 days are spent waiting rather than working — process improvement should target the queues, not the activities.
- C) Testing should be automated.
- D) The estimate is probably wrong.

**Correct answer: B**

**Explanation:** 2 + 0.5 + 1 + 0.5 = 4 days of activity inside 11 days elapsed, so nearly two-thirds of the time is waiting — for a reviewer, a test environment, a release window, an approval. This tests the single most useful calculation in process optimisation: comparing activity time to elapsed time, and targeting the gap rather than the visible activities options A and C address, which together account for less than a third of the elapsed time.

**Question 3 (moderate) — A recurring problem across teams**

Three of four teams have each missed a delivery commitment this quarter, for apparently different reasons: a dependency, an illness, and a scope change. Ask for the strongest reading.

- A) Three different causes; nothing systemic.
- B) Three teams missing commitments with three different proximate causes suggests the commitments themselves may be the issue — specifically that they are made with no allowance for the ordinary disruptions that always occur — so the question is how commitments are set, not what went wrong in each case.
- C) The teams need better planning.
- D) Dependencies should be managed more tightly.

**Correct answer: B**

**Explanation:** Dependencies slipping, illness, and scope change are the normal background of delivery, not unusual events, and a commitment process that assumes none of them will happen will be missed by whichever one shows up. This tests reframing from "what went wrong three times" to "what does the commitment process assume" — the apparent diversity of causes across the three teams is what makes option A tempting and is exactly what should point at a systemic cause instead.

**Question 4 (moderate) — Writing a policy**

Drafting a policy requiring automated deployment for all services; one team maintains a legacy system where this would be disproportionately expensive. Ask for the strongest approach.

- A) Write the policy without exceptions; exceptions weaken policy.
- B) Write the policy with an explicit, narrow exception process — a named approver, a stated justification, and a review date — because a policy with no route for the genuine hard case is either broken by the team quietly or complied with at absurd cost, and both outcomes are worse than a recorded exception.
- C) Exempt the legacy system by name in the policy.
- D) Do not write the policy.

**Correct answer: B**

**Explanation:** Option A produces the failure mode that undermines most internal policy: teams facing an unreasonable requirement quietly do not comply rather than escalate, and visibility of who is compliant is lost. This tests building a narrow, time-bound exception route into a policy rather than writing without exceptions (A), hard-coding today's known case (C, which leaves the same problem for the next different case), or abandoning a worthwhile standard because of one case (D) — with the review date being the detail most often omitted and the one that stops an exception becoming permanent.

**Question 5 (moderate) — Capacity standards**

Responsible for ensuring capacity management standards are correctly implemented, a team reports its service is "comfortably within capacity" at 50% average CPU. Ask for the strongest response.

- A) Accept it; 50% is comfortable.
- B) Ask for peak figures and failure headroom rather than averages — what utilisation is at peak, and what it becomes if an instance is lost during peak — since average utilisation is close to uninformative about whether a service can survive its worst moment.
- C) Ask them to reduce it to 30%.
- D) Ask for the last three months of data.

**Correct answer: B**

**Explanation:** A service at 50% average with a peak factor of 2 is at 100% at peak with no failure headroom at all — average CPU is the number teams report because it is the easy one, and it conceals exactly the situation that causes outages. This tests asking the two diagnostic questions that matter rather than accepting an average (A), setting an arbitrary number without knowing the shape of the load (C), or gathering more of the wrong metric (D) — the specific way capacity standards are complied with in letter and missed in substance.

**Question 6 (moderate) — Prioritising across teams**

Four teams each request time this week: one on a design decision, one on a conflict between two developers, one on a stakeholder escalation, one on a hiring decision. Ask for the strongest basis for prioritising.

- A) Deal with them in the order received.
- B) Prioritise by what deteriorates if delayed and what only the candidate can do — an interpersonal conflict worsens materially over a week and cannot be delegated, while a design decision can often be unblocked by naming who decides rather than by deciding it directly.
- C) Prioritise the stakeholder escalation; stakeholders are most visible.
- D) Delegate all four.

**Correct answer: B**

**Explanation:** Urgency by deterioration and irreducibility are the two useful and different criteria — conflicts harden with each day of silence, while design decisions frequently need only a decision-maker named. This tests prioritising by consequence and by what is genuinely irreducible to the candidate, rather than by order received (A), visibility (C, the default failure of a lead's calendar that reliably starves invisible but more important work), or delegating something — a conflict between two of the candidate's own people — that is genuinely theirs (D).

**Question 7 (moderate) — Interpreting a team health signal**

An anonymous team survey shows one of four teams scoring markedly lower on "I can raise concerns". Ask for the strongest first step.

- A) Ask the team lead what is going on.
- B) Treat the signal as real and find out how, carefully — the score says people do not feel able to speak, so a route requiring them to speak to their lead or to the candidate will not produce reliable information, and an approach through a neutral party or through observation is more likely to work.
- C) Discuss it with the team openly.
- D) Wait for the next survey to see if it persists.

**Correct answer: B**

**Explanation:** The finding is self-referential — the measurement says people cannot raise concerns, so any method that involves raising concerns is compromised. This tests recognising a self-referential signal and finding a route that does not depend on the very channel the signal says is broken — option C asks people who have said they do not feel safe speaking to speak, in a group, to the person above their lead, and option D defers the one signal least safe to defer for a quarter.

**Question 8 (harder) — An optimisation that shifts a cost**

A proposed change would cut code review turnaround from two days to four hours by allowing single-reviewer approval instead of two. Ask for the strongest analysis.

- A) Adopt it; the time saving is substantial.
- B) The saving is real and the change moves risk rather than removing it, so the question is what the second reviewer was catching — if data shows second reviewers rarely add findings, the change is nearly free; if they catch a meaningful share of defects, it trades two days of latency for defects reaching production.
- C) Reject it; two reviewers is a control.
- D) Adopt it for low-risk changes only.

**Correct answer: B**

**Explanation:** The change is plausible and its cost is invisible in the proposal — the shape of most process optimisations that go wrong. This tests asking an empirically answerable question (how often did the second reviewer add a finding the first missed) before adopting or rejecting the change — option D is a decent instinct that needs a definition of "low-risk" and belongs after the data, while A takes the benefit without pricing the risk and C defends the control without asking what it actually catches.

**Question 9 (harder) — Reading performance evidence**

A developer who performed strongly for two years has had a weak quarter. Ask for the strongest inference.

- A) Their performance has declined.
- B) A single weak quarter against two strong years is far more likely to reflect circumstance than a change in capability — a difficult project, a change at home, a poor fit with current work, a team dynamic — so the reasonable prior is that something has changed around them, and the useful action is to find out what.
- C) They need performance management.
- D) It is normal variation; ignore it.

**Correct answer: B**

**Explanation:** This is base-rate reasoning applied to people: two years of strong evidence is a substantial prior, and one quarter of contrary evidence is weak against it, since capability does not usually change abruptly while circumstances do, constantly. This tests holding the prior and prescribing inquiry rather than reaching for a formal process on a single data point (C, which damages a strong performer and frequently causes the departure it was meant to prevent) or dismissing the signal entirely (D, closer to right than C and still missing that a reason worth knowing about usually exists).

**Question 10 (harder) — A metric that will be gamed**

Considering measuring teams on the number of production incidents, with a target of reducing them. Ask for the strongest observation.

- A) It is a good measure; fewer incidents is better.
- B) Counting incidents creates an incentive to classify fewer events as incidents, which is easier than preventing them — the measure will improve while reliability does not, and a measure less easy to redefine, such as user-visible unavailability, is a better target if the goal is the behaviour rather than the number.
- C) It should be combined with other measures.
- D) Targets should not be set on incidents at all.

**Correct answer: B**

**Explanation:** Any measure used as a target creates pressure on whatever is cheapest to change, and for incident counts that is the classification threshold rather than the underlying reliability. This tests naming the specific gaming mechanism and proposing a remedy the team does not control the definition of — option C is generically sensible without fixing a measure with a specific gaming route, and D over-corrects, since reliability targets are legitimate and the choice of measure is what matters.

**Question 11 (harder) — Standard versus autonomy**

Two of four teams use different testing frameworks; standardising would simplify tooling and shared support. Ask for the strongest analysis.

- A) Standardise; consistency is worth it.
- B) Price the migration against the benefit honestly — one team rewrites its test suite, weeks of work producing no user value with some risk of losing coverage, against a saving in tooling and support that is real but modest — and note the strongest case for standardising is usually about future teams and mobility rather than these two.
- C) Leave it; team autonomy matters.
- D) Standardise for new services only.

**Correct answer: B**

**Explanation:** Standardisation decisions are often made on an aesthetic preference for consistency, with the cost landing entirely on whichever team has to move. This tests pricing a migration honestly and identifying where the real benefit usually lies — onboarding, mobility between teams, not maintaining two tooling sets indefinitely — with D being frequently the right resolution once that analysis is done, capturing most of the benefit at little cost, rather than a position taken without analysis (A, C).

**Question 12 (harder) — Delegation and accountability**

A technical decision was delegated to a senior developer, who made a defensible choice the candidate would not have made themselves. Ask for the strongest response.

- A) Overturn it; the candidate is accountable.
- B) Support the decision and let it stand, because a defensible decision made by the person delegated to is a good outcome even when it differs from what the candidate would have chosen — overturning it teaches everyone that delegation here means guessing what the candidate would have done.
- C) Support it publicly and discuss reservations privately.
- D) Ask them to reconsider.

**Correct answer: B**

**Explanation:** "Defensible but different" is the normal and desired result of real delegation — if delegated decisions always matched the delegator's, either the delegate is a mirror or nobody is actually deciding. This tests accepting a genuinely defensible delegated decision rather than overturning it (A, which destroys the delegation) or softly undermining it (D, which reads the same from the other side) — option C is close and right only when the private reservations are substantive information the delegate lacks; as a habit it becomes quiet overturning, and if the reservations amount to preference, holding them is the honest choice.

### Administration tips

- Score for whether the candidate reads a slow process by comparing activity time against elapsed time, rather than proposing to speed up the visible activity alone.
- Note whether the candidate treats diverse proximate causes across several instances (teams, incidents) as evidence of one systemic cause.
- Watch for whether a proposed policy includes a narrow, time-bound exception route rather than either no exceptions or a hard-coded one-off carve-out.
- Score for whether the candidate asks for peak or failure-mode figures rather than accepting an average as evidence of headroom.
- Note whether a single data point about a person (a bad quarter, a survey score) is read with an appropriate prior from the surrounding evidence, rather than treated as conclusive on its own.

### Common pitfalls to watch for when scoring

- Crediting an answer that optimises the activities inside a process rather than the queues between them.
- Missing when a candidate writes policy with no route for the genuine hard case.
- Rewarding average utilisation accepted as evidence of capacity headroom.
- Accepting prioritisation driven by visibility (the loudest stakeholder) rather than consequence and irreducibility.
- Missing when a candidate would investigate a psychological safety finding through the very channel the finding says is blocked.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can reach a defensible conclusion from operational data under time pressure. On the management track the data is team throughput, cycle time, cost, capacity, headcount, defect rates and the business cases a lead is asked to support or challenge.

The format is typically fifteen to twenty-five minutes with a calculator, presenting tables and charts followed by multiple-choice items. Some items are computational and some ask what the data supports, and the second kind carries more weight at senior levels, because the risk presented to an organisation is a confident conclusion the numbers do not carry.

Three habits matter particularly at this level: checking whether a number is wrong by an order of magnitude, since that check is worth more than a precise answer in most real meetings; recognising that people numbers do not behave linearly — adding people to a team does not add throughput proportionally, and any business case that assumes it does is wrong before it starts; and checking that an improvement percentage has a base worth improving, since a 50% reduction in something that costs two days a month is not worth a fortnight of work, however good the percentage looks.

### How this assessment maps to the role

- **Cycle time and flow arithmetic** maps to **Development process optimisation**.
- **Capacity and utilisation** map to **Availability and capacity management**.
- **Cost and business case reasoning** map to setting policy and standards, and to resource decisions.
- **Team throughput and resourcing** map to leading and developing a team of experts.
- **Defect and quality metrics** map to **Modern development standards**.
- **Volumetrics** map to **Systems integration** and **Systems design**.

### Practice questions

*Table 1 — Delivery metrics for four teams, last quarter*

| Team | People | Changes delivered | Mean cycle time (days) | Production incidents |
|---|---|---|---|---|
| Alpha | 6 | 84 | 6.2 | 3 |
| Bravo | 8 | 96 | 9.1 | 7 |
| Charlie | 5 | 55 | 5.4 | 1 |
| Delta | 9 | 72 | 14.3 | 11 |

**Question 1 (easy) — Reading a table**

Ask which team delivered the most changes per person.

- A) Alpha
- B) Bravo
- C) Charlie
- D) Delta

**Correct answer: A**

**Explanation:** Alpha 84/6 = 14.0; Bravo 12.0; Charlie 11.0; Delta 8.0. Alpha leads. This tests basic per-person calculation, and in a strong answer, noting before drawing any conclusion that "changes" is not a standardised unit — a team splitting work into smaller changes will score higher without delivering more.

**Question 2 (easy) — Total and share**

Ask what percentage of the quarter's production incidents came from Delta.

- A) About 32%
- B) About 50%
- C) About 41%
- D) About 25%

**Correct answer: B**

**Explanation:** Total incidents 3+7+1+11=22; Delta's share 11/22=50%. This tests computing a share against the correct total, and recognising the concentration — half the incidents from one of four teams — as the most striking single fact in the table, especially alongside Delta's longest cycle time and lowest per-person delivery.

**Question 3 (easy) — Cycle time comparison**

Ask approximately how many times Delta's mean cycle time is Charlie's.

- A) About 1.8
- B) About 2.6
- C) About 3.4
- D) About 2.0

**Correct answer: B**

**Explanation:** 14.3 / 5.4 ≈ 2.65. This tests a straightforward ratio, and the resulting magnitude — a change taking more than two and a half times as long through Delta as through Charlie — is large enough to be worth investigating rather than attributed to any single cause from this table alone.

**Question 4 (moderate) — What the data supports**

Based on Table 1, ask for the strongest conclusion about Delta.

- A) Delta is underperforming and needs intervention.
- B) Delta shows the worst figures on all three measures, making it the clearest candidate for investigation — but the table contains no information about what each team works on, and a team maintaining an old high-risk system would produce exactly this pattern without anyone underperforming.
- C) Delta has too many people for its output.
- D) Delta's incidents are causing its long cycle time.

**Correct answer: B**

**Explanation:** The pattern is consistent and real, and the confound is enormous — the table has no column for what the teams do, and a team maintaining a fifteen-year-old system with poor test coverage would show long cycle times, frequent incidents and low throughput regardless of who staffs it. This tests stating a finding together with its limit, rather than a conclusion about people from data about a system (A), inferring overstaffing from output alone (C), or asserting a causal direction at least as plausible reversed (D).

**Question 5 (moderate) — Adding people**

Bravo asks for two more developers, projecting a proportional increase in delivery from 96 to 120 changes. Ask for the strongest assessment.

- A) Reasonable; 8 people deliver 96, so 10 should deliver 120.
- B) The projection assumes throughput scales linearly with headcount, which it does not — new people take months to become productive, absorb existing team members' time while doing so, and increase coordination overhead — so a realistic near-term expectation is a dip followed by a gain well short of 25%.
- C) Unreasonable; adding people never helps.
- D) The projection is too conservative.

**Correct answer: B**

**Explanation:** The linear projection is the standard form of a resourcing business case, wrong in a predictable direction: onboarding time, the productivity cost to existing members who onboard new joiners, and coordination overhead that grows faster than headcount. This tests recognising the specific effects that make headcount-to-throughput non-linear, without overstating into futility (C) — the useful contribution to a business case like this is resetting the timescale, not blocking it.

**Question 6 (moderate) — Percentage of a base**

A proposed tooling change would reduce build times by 40%. Builds currently consume 30 minutes per developer per day across a team of 8. The change would take about 3 weeks of one developer's time. Ask roughly how long until it pays back.

- A) About 3 months
- B) About 6 weeks
- C) About 5 months
- D) About 2 weeks

**Correct answer: A**

**Explanation:** Saving: 40% of 30 minutes = 12 minutes/developer/day × 8 = 96 minutes/day = 1.6 hours/day. Cost: 3 weeks × 5 days × 7.5 hours = 112.5 hours. Payback: 112.5 ÷ 1.6 ≈ 70 working days, about 3 months. This tests converting both sides of a payback calculation to the same unit before dividing — the reason to run this arithmetic at all is that a 40% improvement sounds compelling until a three-month payback raises the fair question of whether something with a shorter payback should come first.

**Question 7 (moderate) — Capacity headroom**

A service runs on 6 instances at 55% average CPU; peak is 1.9 times average. Ask for the approximate CPU per instance at peak if one instance is unavailable.

- A) About 105%
- B) About 125%
- C) About 88%
- D) About 95%

**Correct answer: B**

**Explanation:** Total work at average: 6 × 55% = 330; at peak: 330 × 1.9 = 627; across 5 remaining instances: 627 ÷ 5 ≈ 125%. This tests the standard peak-headroom-after-failure calculation — note also that peak across all 6 is already 104.5%, over capacity even without a failure, and 55% average CPU is precisely the figure that made the service look fine, which is the substance behind ensuring correct implementation of capacity management standards.

**Question 8 (harder) — Comparing rates fairly**

Using Table 1, ask which team has the highest incident rate per change delivered.

- A) Bravo
- B) Delta
- C) Alpha
- D) Charlie

**Correct answer: B**

**Explanation:** Alpha 3.6%; Bravo 7.3%; Charlie 1.8%; Delta 15.3% — Delta highest by a wide margin. This tests normalising by volume rather than comparing raw counts, since a team delivering more changes will show more incidents at the same underlying quality; the caution from Question 4 still applies, since this normalisation controls for volume, not for the risk profile of the systems involved.

**Question 9 (harder) — A business case**

A supplier proposes a platform costing £240,000 a year, claiming it will save each of 28 developers 45 minutes a day. Fully loaded cost £70,000 per developer per year, 220 working days. Ask whether the case is credible.

- A) Yes — the time saved is worth far more than the cost.
- B) The arithmetic supports it and the assumption does not: 45 minutes is 10% of a 7.5-hour day, worth about £7,000 per developer or £196,000 across 28, which is less than the £240,000 cost — and any claim that a tool saves every developer three-quarters of an hour every day should be treated as a sales figure until measured.
- C) No; the cost is too high.
- D) There is not enough information.

**Correct answer: B**

**Explanation:** 45 minutes of 7.5 hours is 10%, or £7,000/developer, £196,000 across 28 — below the £240,000 cost, before even questioning whether scattered saved minutes convert to delivered work at face value. This tests reaching the right conclusion by computing the figures the question supplies, then naming the underlying weak assumption, rather than skipping straight to a multiplication that omits the comparison (A) or declining to calculate at all (D).

**Question 10 (harder) — Trend versus noise**

Monthly production incidents across four teams: 18, 22, 19, 25, 21, 24. Ask, for a stakeholder wondering whether reliability is getting worse, for the strongest answer.

- A) Yes; the trend is upward.
- B) The series moves between 18 and 25 with no clear direction — the apparent rise depends entirely on which months are compared, and six points with this much month-to-month variation cannot distinguish a trend from noise, so the honest answer is that reliability is roughly flat and a longer series or a different measure is needed to say more.
- C) No; reliability is stable.
- D) Not enough information to comment.

**Correct answer: B**

**Explanation:** First to last (18 to 24) suggests a rise; months two to five (22 to 21) suggest nothing; the first-three and last-three means (19.7 and 23.3) look like an increase within the range of observed variation. This tests giving a stakeholder what the data does and does not answer, rather than overstating a trend (A) or overstating stability (C, itself an unsupported claim) — reading noise as a trend and then explaining it is a costly habit in management reporting.

**Question 11 (harder) — Little's Law in practice**

A team has 14 items in progress and completes on average 7 items per week. Ask for the expected average cycle time.

- A) 1 week
- B) 2 weeks
- C) 3.5 weeks
- D) 0.5 weeks

**Correct answer: B**

**Explanation:** Cycle time = work in progress ÷ throughput = 14 ÷ 7 = 2 weeks. This tests knowing Little's Law by name and applying it, with the management implication that follows directly: with throughput roughly fixed, cycle time is proportional to work in progress, so the fastest available lever for reducing cycle time is starting fewer things at once — counter-intuitive to teams under delivery pressure, whose instinct is to start more.

**Question 12 (harder) — Cost of a delay**

A service generates £45,000 a month in avoided manual processing cost; a three-month delay to launch is proposed to add a feature. Ask for the strongest framing.

- A) The delay costs £135,000 in foregone savings, which should be weighed against what the feature is worth — and the relevant question is whether the feature could be added after launch, since that would capture the savings and the feature rather than trading one for the other.
- B) The delay costs £135,000; reject it.
- C) The feature should be assessed on its merits.
- D) £45,000 a month is a projection and may not materialise.

**Correct answer: A**

**Explanation:** 3 × £45,000 = £135,000 of foregone benefit — the number the conversation needs and typically has not been computed. This tests supplying the number and then asking the question that frequently dissolves the trade-off — most features can be added after launch, so the choice between launching now and launching with the feature is often a false one — rather than computing correctly and foreclosing (B), raising a fair caution without a number (D), or discussing the feature's merits without pricing the delay at all (C).

### Administration tips

- Score for whether the candidate converts both sides of a payback or cost calculation to the same unit before dividing.
- Note whether the candidate normalises counts by volume before comparing teams, rather than comparing raw figures.
- Watch for whether headcount-to-throughput or similar people-based projections are treated as non-linear rather than accepted at face value.
- Score for whether the candidate distinguishes a genuine trend from noise in a short, volatile data series.
- Note whether a percentage improvement is checked against its base before being judged worthwhile.

### Common pitfalls to watch for when scoring

- Crediting a comparison of raw incident counts across teams of different sizes or volumes.
- Missing when a candidate reads team metrics as evidence about people rather than about the systems those teams maintain.
- Rewarding acceptance of a vendor's per-person time saving without a call for measurement.
- Accepting six noisy data points reported as a clear trend in either direction.
- Missing when a candidate discusses a launch delay, a process change, or a business case without first pricing it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what written material establishes. On the management track the material is policy, contracts, HR guidance, standards, supplier agreements and reports written to be relied on.

The commonest format gives a passage and asks for statements to be marked True, False or Cannot Say. True means the passage establishes it, False means the passage contradicts it, and Cannot Say means the passage does neither — regardless of what the candidate knows from experience, which is the main hazard, since a strong candidate will frequently know the answer while the passage remains silent.

Three specifics matter at this level: policy prose uses "must", "should" and "may" as distinct obligations, and reading them loosely is how something optional gets enforced or something mandatory gets waived; authority language is precise — "may approve", "must consult", "is responsible for" and "in consultation with" describe genuinely different arrangements, and confusing them means acting outside remit or failing to act within it; and HR and employment material is written carefully because it has to be, and reading in the ordinary practice rather than the stated rule is a common and consequential error.

### How this assessment maps to the role

- **Reading normative language** maps to setting policy and standards.
- **Reading authority and delegation** maps to leading teams and to accountability boundaries.
- **Reading employment guidance** maps to leading and developing a team of experts.
- **Reading contracts and supplier terms** maps to resource and supplier decisions.
- **Reading service commitments** maps to **Availability and capacity management**.
- **Distinguishing evidence from inference** maps to **Development process optimisation**.

### Practice questions

*Passage A — for Questions 1 to 4*

"A lead developer may approve a deviation from the departmental coding standard for a single project, provided the deviation is recorded in the project's decision log and reviewed within six months. Deviations affecting more than one project must be approved by the head of engineering. Deviations relating to security controls must be approved by the head of engineering in consultation with the departmental security lead, regardless of scope. A recorded deviation that has not been reviewed within the stated period lapses, and the standard applies in full from that date. Lapsed deviations may be reinstated through the original approval route."

**Question 1 (easy)**

Statement: A lead developer can approve a single-project deviation from the coding standard.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly in the first sentence, with two conditions — recording and review — that do not affect who may approve it. This tests the baseline reading before the passage's complications.

**Question 2 (moderate)**

Statement: A lead developer can approve a single-project deviation relating to a security control.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: security deviations "must be approved by the head of engineering in consultation with the departmental security lead, regardless of scope." This tests reading a phrase ("regardless of scope") that exists specifically to close the single-project route, exactly the kind of authority boundary where exceeding it is a governance error, not a technical one.

**Question 3 (moderate)**

Statement: If a deviation is not reviewed within six months, it must be re-approved by the head of engineering before it can be reinstated.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says lapsed deviations "may be reinstated through the original approval route" — for a single-project, non-security deviation, the original route was the lead developer, so head of engineering approval is not universally required. This tests following "the original route" back to whichever route applied first rather than assuming escalation.

**Question 4 (harder)**

Statement: The departmental security lead can approve a security-related deviation.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage assigns approval to the head of engineering and gives the security lead a consultation role — "approved by the head of engineering in consultation with the departmental security lead." This tests distinguishing consultation from approval: the passage allocates approval elsewhere, contradicting the statement rather than merely omitting the security lead's approval power.

*Passage B — for Questions 5 to 8*

"The team charter states that development work is prioritised by the product owner, and that technical work necessary to maintain the service may be scheduled by the lead developer up to a limit of 20% of team capacity in any sprint. Technical work exceeding this limit requires the product owner's agreement. Where the lead developer judges that unaddressed technical risk threatens service availability, they may exceed the limit without prior agreement, and must inform the product owner and record the decision within one working day. The charter is reviewed annually. Since its introduction eighteen months ago, the limit has been exceeded on four occasions."

**Question 5 (easy)**

Statement: The product owner prioritises development work.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated in the first clause. This tests noting that the passage immediately qualifies this with the lead developer's 20% allocation, so the statement is true as far as it goes without being the whole picture.

**Question 6 (moderate)**

Statement: The lead developer must obtain the product owner's agreement before scheduling technical work above 20% of capacity.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage supplies an exception: where unaddressed technical risk threatens availability, the lead may exceed the limit without prior agreement and inform afterwards. This tests reading past the sentence that would otherwise support the "must, before" framing, since the following sentence exists precisely to qualify it.

**Question 7 (moderate)**

Statement: On each of the four occasions the limit was exceeded, the lead developer judged that service availability was threatened.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage records that the limit was exceeded four times and says nothing about the route by which each exceedance was authorised — some may have been agreed with the product owner in advance, a permitted route requiring no availability judgement at all. This tests recognising a statement that assumes one of two available mechanisms was used every time.

**Question 8 (harder)**

Statement: The charter has been reviewed at least once since its introduction.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The charter "is reviewed annually" and was introduced eighteen months ago, meaning a review was due at twelve months — but the passage states the intention, not the fact of it happening. This tests distinguishing a stated cadence from an event record: assuming a scheduled review occurred is exactly how out-of-date policy stays in force.

*Passage C — for Questions 9 to 12*

"Where a period of sustained underperformance is identified, the line manager should first address it informally, setting out the specific concerns and the improvement expected, and agreeing a period in which improvement will be assessed. Formal capability procedures should be initiated only where informal measures have not produced sufficient improvement, or where the nature of the underperformance makes informal measures inappropriate. Before initiating formal procedures the line manager must consult the human resources business partner. Where underperformance may be connected to a disability or a health condition, the line manager must seek advice from occupational health before taking any action, whether formal or informal."

**Question 9 (moderate)**

Statement: A line manager must always attempt informal measures before initiating formal capability procedures.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts "always": formal procedures may be initiated where informal measures have not worked "or where the nature of the underperformance makes informal measures inappropriate" — an independent second route. This tests catching that the informal step is itself a "should" rather than a "must", which independently defeats "always".

**Question 10 (moderate)**

Statement: A line manager must consult human resources before initiating formal capability procedures.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly: "Before initiating formal procedures the line manager must consult the human resources business partner." This tests noticing the passage is deliberate about which obligations are absolute, contrasting this "must" with the surrounding "should" language for the informal-first approach.

**Question 11 (harder)**

Statement: Where underperformance may be connected to a health condition, the line manager can hold an informal conversation before seeking occupational health advice.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this: occupational health advice must be sought "before taking any action, whether formal or informal." This tests catching the reading where professional instinct pulls hardest against the text — a quiet supportive conversation feels obviously right, and the guidance deliberately sequences it after the advice, with "any" leaving no room for exemption.

**Question 12 (harder)**

Statement: The passage requires that an improvement period be agreed with the individual.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the manager should be "agreeing a period in which improvement will be assessed," inside a sentence governed by "should" rather than "must" — a recommendation rather than a requirement. This tests catching that the modal verb governing a whole clause changes "requires" from true to unsupported, while the answer is Cannot Say rather than False since the passage recommends the practice and does not state it is unnecessary.

### Administration tips

- Score for whether the candidate treats "must", "should" and "may" as distinct, non-interchangeable obligations.
- Note whether the candidate distinguishes a consultation role from an approval role in authority language.
- Watch for whether the candidate traces "the original route" back to the route that applied first, rather than assuming escalation.
- Score for whether a stated cadence (an annual review) is read as an intention rather than treated as a record of an event having occurred.
- Note whether the candidate checks whether a rule has a second, independent limb before applying an "always" or "must" reading.

### Common pitfalls to watch for when scoring

- Crediting a consultee treated as though they held approval authority.
- Missing when a candidate assumes a scheduled review took place because it was due.
- Rewarding a reading that stops before the sentence supplying the governing exception.
- Accepting an assumption that a particular route or judgement was used on every occasion a limit or rule was exceeded, without the passage stating so.
- Missing when a candidate exempts informal action from a "before any action" requirement.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. On the management track the scenarios involve people, standards, competing demands from teams led by the candidate, and the recurring problem of being accountable for work not personally done.

The commonest formats ask for the most and least effective response, or a rating of each. Scoring is against a key derived from experienced practitioners at comparable levels — professional consensus rather than personal style.

Three patterns run through the strong answers. First, this role establishes cause before selecting a response — almost every people problem has several possible causes with entirely different remedies, and acting on the first plausible one is the commonest management error. Second, this role protects the team's ability to disclose things: a lead who reacts badly to bad news gets less of it, and the news does not stop happening. Third, policy this role sets applies to the role itself — every exemption taken is a public statement about what the policy is actually worth.

### How this assessment maps to the role

- **Leading and developing people** maps to leading a team of experts.
- **Setting and holding standards** maps to setting policy and standards.
- **Process change** maps to **Development process optimisation**.
- **Capacity and reliability decisions** map to **Availability and capacity management**.
- **Stakeholder management** maps to working with client functions and to **User focus**.
- **Security judgement** maps to **Information security**.

### Practice questions

**Question 1 (easy) — Bad news arrives late**

A developer says on Thursday that work due Friday will not be ready, admitting they knew on Monday. Ask for the most effective response.

- A) Explain that this should have been raised on Monday, then deal with the delivery.
- B) Deal with the delivery consequence first, then find out why it took until Thursday — whether they hoped to recover it, expected a bad reaction, or did not think it mattered — because the answer determines whether the fix is about expectations, about how the candidate responds to bad news, or about the individual.
- C) Tell them clearly that late notice is unacceptable.
- D) Handle the delivery and say nothing about the delay in telling.

**Most effective: B. Least effective: C**

**Explanation:** The three-day gap is the more important problem, with several possible causes needing different remedies. This tests resolving the delivery issue before investigating the delay, and investigating before correcting — options A and C both correct before understanding, and C in particular is the response most likely to make the next disclosure later still.

**Question 2 (easy) — A team wants to change a process**

A team proposes dropping the daily stand-up, which they find low-value. Ask for the most effective response.

- A) Agree; if it is low-value, drop it.
- B) Ask what the stand-up was meant to achieve and how they will achieve it otherwise — the coordination need is usually real even when the ceremony is not — and let them run the change as an experiment with a date to review it.
- C) Explain why stand-ups are valuable.
- D) Keep it; consistency across teams matters.

**Most effective: B. Least effective: C**

**Explanation:** Option B separates the ceremony from the need it serves, prompting the team to think about the underlying coordination need without overruling them, and framing the change as a reviewable experiment keeps it cheap and reversible. This tests distinguishing a practice from the need behind it — option C is least effective, defending a practice to a team that does it daily and has already concluded otherwise.

**Question 3 (moderate) — Two of the candidate's teams in conflict**

Two teams are in dispute about ownership of a shared component, and it has become personal. Ask for the most effective response.

- A) Assign ownership to one team and move on.
- B) Get both leads in a room and settle ownership explicitly, because an unowned shared component generates this dispute continuously and the personal element is a symptom of an unresolved structural question — then deal separately with the conduct, which does not become acceptable because the underlying issue was real.
- C) Ask them to resolve it between themselves.
- D) Address the personal conflict first.

**Most effective: B. Least effective: C**

**Explanation:** There are two problems here, and option B is the only response that treats both — the structural one (nobody owns the component) and the behavioural one (it became personal), addressed on its own terms rather than excused by the structural cause. This tests treating a structural cause and a behavioural symptom as two separate problems — option C is least effective, returning a problem to people who have already demonstrated they cannot resolve it.

**Question 4 (moderate) — A policy set by the candidate is inconvenient for them**

A policy requiring peer review for all changes is set; an urgent fix is needed at 22:00 and nobody is available. Ask for the most effective response.

- A) Push the fix; it is urgent and the candidate set the policy.
- B) Follow whatever emergency route the policy provides, and if it has none, push the fix, record it, and add an emergency route the next morning — because the policy has just been shown to be missing something, and an exemption taken without documenting it is the one the team will remember.
- C) Wait until someone is available.
- D) Wake a colleague for the review.

**Most effective: B. Least effective: A**

**Explanation:** The situation is real and the policy is deficient if it has no answer for it; option B does the right operational thing and then fixes the gap — the difference between an exception and an erosion. This tests recording an exemption from one's own policy rather than taking it silently — option A is least effective because an undocumented exemption taken by the policy's author is the single most effective way to communicate that the policy is optional.

**Question 5 (moderate) — A capacity warning nobody wants**

Capacity analysis shows a service will exhaust headroom in about four months; the service owner says there is no budget for more capacity this year. Ask for the most effective response.

- A) Note the risk and move on; the budget decision is theirs.
- B) Put the consequence and the timeline in writing to the service owner and their accountable superior, with options — additional capacity, reducing load, or accepting a degradation risk from a stated date — so the decision is made explicitly by someone able to make it rather than by default.
- C) Escalate immediately to senior management.
- D) Find efficiencies to defer the problem.

**Most effective: B. Least effective: A**

**Explanation:** The service owner may lack both the budget and the authority to decide this alone, which is why option B routes the decision upward while keeping them in it, with the written record and specific date turning a warning into a decision. This tests active, written escalation with options rather than treating a foreseeable outage as somebody else's problem (A, least effective) or going over the service owner's head without giving them a chance to act (C).

**Question 6 (moderate) — A high performer wants to leave**

An excellent developer privately mentions considering leaving because there is no progression route on the team. Ask for the most effective response.

- A) Offer a promotion if possible.
- B) Take it seriously and be honest about what is and is not available — including whether a progression route genuinely exists here — because promising something undeliverable buys a few months and costs the relationship, and if the honest answer is that the route is elsewhere in the organisation, helping them find it keeps them in it.
- C) Explain that progression takes time.
- D) Accept it; people leave.

**Most effective: B. Least effective: C**

**Explanation:** The developer has given information at some personal cost, and honesty — including unwelcome honesty — is what keeps them longest. This tests recognising that helping someone move internally is a much better outcome than losing them entirely — option C is least effective, the standard deflection that confirms exactly what the developer already suspects.

**Question 7 (harder) — Pressure to move a date**

A senior stakeholder asks for a commitment to a delivery date the team's data suggests is unrealistic, noting the previous lead would have committed. Ask for the most effective response.

- A) Commit; refusing damages the relationship.
- B) Decline to commit to that date and say why with the evidence — recent comparable delivery times, what is on the critical path — and offer what can be committed to, including reduced scope by their date if that helps, because a commitment expected to be missed damages the relationship far more than a difficult conversation now.
- C) Commit with heavy caveats.
- D) Say a decision will follow later.

**Most effective: B. Least effective: C**

**Explanation:** The comparison to a predecessor is pressure rather than information, and a predecessor who committed to unrealistic dates is not a favourable comparison. This tests substituting evidence for assertion and offering an alternative — a scoped yes invites a conversation where a flat no invites a fight — option C is least effective, since caveats are rarely heard while the date is.

**Question 8 (harder) — A process change that failed**

A release process change introduced three months ago has not delivered the expected improvement and teams find it burdensome. Ask for the most effective response.

- A) Give it more time; changes take time to bed in.
- B) Say plainly that it has not worked and reverse it, unless there is specific evidence that the benefit is arriving slowly — a change that costs teams daily and delivers nothing measurable should be withdrawn, and withdrawing one's own initiative visibly is what makes teams willing to try the next one.
- C) Modify it to reduce the burden.
- D) Ask the teams what they would prefer.

**Most effective: B. Least effective: A**

**Explanation:** The hardest part is that it was the candidate's own idea, and the signal sent by reversing it is worth more than the process itself — a team that watches a lead abandon a failed initiative engages genuinely with the next experiment. This tests visibly reversing one's own failed initiative rather than defending it past its evidence (A, least effective, which converts a three-month cost into a permanent one).

**Question 9 (harder) — Conflicting demands from two teams**

Two teams need the same specialist for the next sprint, and both have credible reasons. Ask for the most effective response.

- A) Split the specialist's time between them.
- B) Decide it on the relative consequence of delay to each, tell both leads the reasoning, and treat the single point of dependency as the actual problem to fix — because this will recur every sprint until more than one person can do the work.
- C) Let the two leads negotiate.
- D) Give priority to the team with the earlier deadline.

**Most effective: B. Least effective: A**

**Explanation:** Option B does the immediate allocation and names the structural issue — one person two teams need — with the reasoning explained so the losing team sees the basis, not just the outcome. This tests naming and addressing a structural single point of dependency rather than the instinct to split time fairly (A, least effective, which typically serves both contexts badly and loses time to switching).

**Question 10 (harder) — A security concern raised by a junior**

A junior developer raises a security concern about a design produced by the most senior developer, and the candidate is not certain the concern is well-founded. Ask for the most effective response.

- A) Ask the senior developer to look at it.
- B) Have the concern examined properly and visibly, whether by the two of them together or by a security specialist — the cost of investigating an unfounded concern is an hour, and the cost of a team learning that junior challenges to senior work get quietly dropped is every future concern.
- C) Ask the junior developer to write it up first.
- D) Investigate it personally.

**Most effective: B. Least effective: A**

**Explanation:** The asymmetry decides this: an hour spent on a wrong concern teaches something useful, while a right concern dropped leaves a vulnerability and a team that has learned when to stay quiet. This tests handling the concern visibly so the lesson lands for everyone watching — option A is least effective, asking the author of the design to adjudicate a challenge to it.

**Question 11 (harder) — An unpopular organisational decision**

The organisation has mandated a change the candidate's teams strongly dislike, without consultation; the teams ask what the candidate thinks. Ask for the most effective response.

- A) Support the decision publicly regardless of personal view.
- B) Be honest about not having been consulted and about specific reservations, and be equally clear the decision stands and the team is expected to implement it properly — because teams can tell when a lead performs enthusiasm, and the credibility kept by being straight is what lets the team be asked to get on with it.
- C) Say the decision is disagreed with and will be pushed back on.
- D) Say it is not the candidate's decision.

**Most effective: B. Least effective: A**

**Explanation:** Both halves of option B matter — honesty preserves the credibility that makes everything else said worth listening to, and clarity that the decision stands prevents honesty from becoming licence. This tests holding both parts together rather than performing enthusiasm not actually felt — option A is least effective because it is transparent as performance and costs credibility on everything said afterwards.

**Question 12 (harder) — Evidence that contradicts the candidate's own initiative**

A technology adoption championed last year now has data suggesting it increased incident rates rather than reducing them. Ask for the most effective response.

- A) Examine the data carefully before acting; correlation is not causation.
- B) Present the data openly, including the part that reflects badly on the original decision, and propose how to establish whether the adoption caused the increase — being best placed to see it, least suspected of motivated reasoning in raising it, and most damaged if someone else does.
- C) Investigate quietly and act if it holds up.
- D) Note the increase but point out the other benefits.

**Most effective: B. Least effective: C**

**Explanation:** Option A is methodologically correct and incomplete as a whole response, since it is also exactly what someone protecting a decision would say — the difference between rigour and defensiveness shows only in whether the data is raised openly or waited on. This tests raising contrary evidence about one's own past decision proactively — option C is least effective, since a quiet investigation looks exactly like concealment if discovered, and a decision-maker who suppresses contrary evidence about their own decision cannot be trusted with the next one.

### Administration tips

- Score for whether the candidate establishes the cause of a people or process problem before selecting a response.
- Note whether a response protects the team's willingness to disclose bad news, rather than reacting in a way likely to suppress future disclosure.
- Watch for whether the candidate applies and records exemptions from their own policy as visibly as they would expect of anyone else.
- Score for whether a structural problem (an unowned dependency, a single point of failure) and a behavioural symptom are treated as two separate issues.
- Note whether the candidate raises contrary evidence about their own past decisions proactively rather than waiting to be confronted with it.

### Common pitfalls to watch for when scoring

- Crediting a correction of late disclosure delivered in a way likely to make the next disclosure later still.
- Missing when a candidate would split a scarce specialist's time between two teams "to be fair" rather than naming the structural dependency.
- Rewarding a design's author being asked to adjudicate a challenge to their own design.
- Accepting a process change defended past the point where the evidence no longer supports it.
- Missing when a candidate would investigate awkward evidence about their own decision quietly rather than openly.

## Conclusion

This guide has worked through the systemic questions that define lead developer work on the management track: four days of activity inside eleven days elapsed means the improvement is in the queues, not the work; three teams missing commitments for three different reasons means the commitment process itself assumes nothing will go wrong; a standard nobody follows, including its author, is a defect in the standard; and policy without a route for the genuine hard case is not enforced so much as quietly ignored, at the cost of visibility.

The numeric section covered the arithmetic behind these decisions: peak headroom rather than average utilisation, incident rates normalised by volume, payback periods with both sides in the same unit, Little's Law, and the cost of a delay computed before the delay is discussed — with the recurring caution against reading team metrics as evidence about people when the systems those teams maintain explain most of the variation.

The verbal section was about reading the documents that define this role's authority precisely: consultation is not approval, "the original route" sends the reader back rather than up, a stated annual review is an intention rather than a record, and an obligation to seek advice "before any action" includes the informal, supportive conversation that feels obviously right.

The situational judgement section circled the particular difficulty of managing technical people: accountable for outcomes not personally produced, through people who will only disclose things if it is made safe to. The strong answers established causes before responses, treated structural and behavioural problems as two separate problems, recorded exemptions, and were honest in places where performing confidence would have been easier.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — the strongest responses in the judgement section were rarely the most decisive; they were the ones that raised contrary evidence, reversed a failed initiative, and let a team see a lead's own standards applied to the lead. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
