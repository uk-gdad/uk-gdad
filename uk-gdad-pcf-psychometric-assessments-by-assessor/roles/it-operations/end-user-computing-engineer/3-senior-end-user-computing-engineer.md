# Senior End User Computing Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior end user computing engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the materials a senior end user computing engineer genuinely handles — team queues and rotas, incident and problem records, change impact assessments, performance statistics, capacity forecasts, test plans, and stakeholder reports — and the decisions genuinely made, such as co-ordinating and prioritising the team's work to resolve technical incidents quickly, deciding which repeat issues to escalate to the lead engineer, the incident or problem manager, or software developers, and working closely with infrastructure, capacity and availability managers to fix underlying faults.

At this level, the role occupies the pivot point of the team: still close enough to the tools to diagnose hard faults directly, but responsible for how the whole queue moves — who does what, in which order, and which patterns deserve investigation rather than another round of individual fixes. That dual responsibility rests on recognising trends across weeks of incident data, reasoning about causes and impacts before approving changes, checking reports and registers whose errors would now mislead a whole team, prioritising other people's work as well as one's own, interpreting data sets and communicating them credibly to stakeholders, reading specifications and policies with precision, and making judgement calls where technical facts, team dynamics and service pressures collide.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters for the role, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. For a senior engineer, the materials shift upward from single tickets toward the artefacts of co-ordination: multi-week incident trends, change impact assessments, team schedules, performance statistics, test conditions, and escalation decisions.

The typical format is an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group; many platforms adapt difficulty and report speed and accuracy separately.

Cognitive assessment is particularly relevant at this level because professional value now lies in structured thinking applied at two levels simultaneously — diagnosing and prioritising at the incident level, and initiating and monitoring investigations into patterns and trends at the team and service level. Both are exercises in hypothesis, evidence and inference under time pressure, and because conclusions now direct other people's work, an error costs more than personal time.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill.
- **Logical deduction** maps to the **Change management** and **Incident management** skills.
- **Error checking** maps to the **IT service reporting** and **Asset and configuration management** skills.
- **Prioritisation** maps to the core duty to manage, co-ordinate and prioritise tasks.
- **Applied problem solving** maps to the **Technical specialism** skill and the **Testing** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a weekly trend**

"Laptop battery failure" counts over eight weeks: 2, 3, 2, 3, 2, 9, 10, 11. Procurement confirms a new battery supplier was introduced in week 5's laptop builds. Which statement best characterises the data?

- A) The counts fluctuate randomly throughout.
- B) A stable baseline of 2–3 failures per week shifts to a sustained level around 9–11 from week 6 — a step change consistent with a cause introduced around week 5, making the supplier change the leading hypothesis to test.
- C) The supplier change is proven to be the cause.
- D) Failures always rise in the second month of a quarter.

**Correct answer: B**

**Explanation:** Weeks 1–5 oscillate in a tight band; weeks 6–8 sit roughly four times higher, sustained for three weeks — a step change, not noise, timed one build-cycle after the supplier switch. Option C converts correlation into proof the data cannot supply — confirmation needs a further step, such as checking whether failing units contain the new batteries. Option D invents a seasonal pattern from one period. This tests the problem management sequence: pattern first, hypothesis second, evidence third, claiming exactly as much as the evidence supports.

**Question 2 (easy) — Deduction from a change impact rule**

The change policy states: "Any change to a shared driver package must be impact-assessed against every laptop model in the estate that uses the package. A change may proceed only when every affected model has either passed testing or been explicitly excluded from the rollout." Four models use the package: P, Q, R and S. Testing has passed on P and Q; R has failed testing; S has not yet been tested. The proposed rollout excludes R. May the change proceed?

- A) Yes — the failing model has been excluded.
- B) No — model S has neither passed testing nor been excluded.
- C) Yes — a majority of models have passed.
- D) No — a change may never proceed while any model has failed testing.

**Correct answer: B**

**Explanation:** The rule requires every affected model to be either passed or excluded; S is neither, so the condition fails regardless of R's legitimate exclusion. Option A checks only the model that drew attention and forgets the untested one — the classic audit gap. Option C imports a majority principle the universal rule does not contain. Option D over-reads the rule, since exclusion is an explicitly legitimate route for a failing model. This tests the discipline of universal quantifiers ("every model") — the question is never whether the known problem is handled, but whether every case is accounted for.

**Question 3 (easy) — Error checking a team rota against rules**

Cover rules: (i) the walk-up desk needs exactly two engineers every day; (ii) no engineer works the desk more than two days in a week; (iii) at least one of the two daily desk engineers must be senior-qualified (marked *). The draft rota reads: Mon: Amir*, Beth; Tue: Beth, Chen; Wed: Chen, Dana*; Thu: Beth, Amir*; Fri: Dana*, Chen. Which rule is broken, and by whom?

- A) Rule (i) on Wednesday
- B) Rule (ii) by Beth and Chen
- C) Rule (iii) on Tuesday only
- D) Rules (ii) and (iii): Beth and Chen each work three days, and Tuesday has no senior-qualified engineer

**Correct answer: D**

**Explanation:** Beth and Chen each appear three times (breaching rule ii), and Tuesday pairs Beth with Chen, neither senior-qualified (breaching rule iii). Options B and C are each half-right, which is the danger in real audits, since a half-right finding ends the check early. This tests auditing one rule at a time across every case, never one case at a time against whichever rule comes to mind — the same verification discipline reporting and configuration duties depend on.

**Question 4 (moderate) — Prioritising the team's morning**

At 08:55, four engineers are available and five demands: (1) a P1 — the case-management service is down for a 200-person directorate; infrastructure requests a desk-side engineer for local diagnostics; (2) two P3 tickets promised today, an hour's work each; (3) a change window 10:00–12:00 for a pre-approved rollout to thirty machines; (4) an associate stuck on a diagnosis since yesterday afternoon, with a user waiting; (5) a monthly performance report due at 17:00. What is the strongest allocation?

- A) All four engineers to the P1 to show urgency; everything else waits.
- B) One strong diagnostician to the P1 site immediately; one engineer to the change window as planned; one engineer to the two P3 promises; fifteen minutes spent unsticking the associate, then the report drafted between interruptions.
- C) Personal attendance at the P1 site; the rest of the team continues as scheduled without briefing.
- D) One engineer to the P1; three engineers to the change rollout to finish it early; the P3 promises, the associate and the report wait until afternoon.

**Correct answer: B**

**Explanation:** Infrastructure needs one capable diagnostician, not four idle engineers at one site (eliminating A). Option B covers the full portfolio in impact order — expert attention on the P1, the hard-constraint change window kept, same-day promises protected, high-leverage time spent unblocking the associate, and the report absorbing the slack. Option C removes the co-ordinator during the day's biggest incident and leaves the team unbriefed. Option D over-resources a routine rollout while promised work and a blocked colleague wait. This tests matching resource to need, protecting commitments, and spending senior time where it multiplies.

**Question 5 (moderate) — Deduction about a capacity symptom**

The virtual desktop service slows every weekday from 11:45 to 13:15. Facts: (i) user session counts peak 09:00–10:00, not midday; (ii) the backup job runs 02:00–04:00; (iii) an automated inventory scan of all endpoints runs 11:30–13:30; (iv) the slowdown began three weeks ago, the same week the scan was extended from servers-only to all endpoints. What is the strongest next step?

- A) Move the backup job to the weekend.
- B) Add session capacity to handle the midday peak.
- C) Test the inventory-scan hypothesis — its window brackets the slowdown and its scope changed exactly when the symptom began — for example by rescheduling or narrowing one day's scan and observing the effect.
- D) Ask users to avoid the service at lunchtime.

**Correct answer: C**

**Explanation:** Both timing and history rule out the backup job (eight hours off) and session capacity (the user peak occurs when the service is fine). The inventory scan's window brackets the slowdown, and its scope expansion coincides with the symptom's onset. Option C then tests rather than concludes, with a cheap, reversible experiment. Option D manages users around an undiagnosed fault. This tests footprint-matching (does timing and history fit?) and choosing the cheapest action that discriminates between hypotheses.

**Question 6 (moderate) — Error checking a change request document**

A change request template requires: description, affected services, risk assessment, rollback plan, and test evidence. The draft reads: "Description: update wireless drivers on all 300 estate laptops to v9.2. Affected services: none — this is a client-side change. Risk: low; v9.2 is vendor-recommended. Rollback: reinstall v9.1 from the deployment tool. Test evidence: v9.2 ran on 10 pilot laptops for two weeks, zero wireless incidents." Which element most needs challenge before submission?

- A) The rollback plan — reinstalling v9.1 may not be possible.
- B) The "affected services: none" claim — a wireless driver change on 300 laptops affects every service those users reach over wireless; the field confuses "no server-side components changed" with "no service impact."
- C) The test evidence — ten laptops is too small a pilot to mention.
- D) The description — it should name the vendor.

**Correct answer: B**

**Explanation:** "Affected services: none" is true only in a narrow sense that suppresses exactly the scrutiny (scheduling, communication, phased rollout) the change deserves — a bad driver's blast radius is estate-wide connectivity loss. Option A is a fair verification question but secondary. Option C undervalues genuinely useful (if modest) pilot evidence. Option D is cosmetic. This tests reviewing a document for the claim that hides the risk, rather than the field that merely looks thin.

**Question 7 (moderate) — Defining test conditions from a requirement**

A requirement reads: "The new self-service password reset must complete within two minutes for a typical user, work on both corporate laptops and personal phones, and lock after three failed identity checks." Which set of test conditions most completely covers the requirement?

- A) Time a reset on a corporate laptop; confirm it completes within two minutes.
- B) Time resets on a corporate laptop and a personal phone; confirm both complete within two minutes; attempt three failed identity checks and confirm lockout occurs; attempt two failed checks then a successful one and confirm no lockout.
- C) Attempt three failed identity checks and confirm lockout; test on a personal phone.
- D) Time resets on both device types; confirm lockout after five failed checks.

**Correct answer: B**

**Explanation:** Option B tests all four testable claims (timing, both device types, lockout threshold) plus the crucial boundary case — two failures then success must not lock the account, since lockout rules most commonly fail by firing early. Option A covers half of one claim-pair. Option C ignores timing. Option D tests against the wrong threshold. This tests translating each clause of a specification, including its boundaries, into a checkable case — requirements name the happy path, defects live at the edges.

**Question 8 (moderate) — Prioritisation of escalations**

Four candidates for escalation this week: (1) a one-off laptop fault resolved yesterday after four hours' struggle; (2) login failures recurring every Monday morning for three weeks across all directorates, self-resolving by 09:40, pointing to an authentication component the team cannot see inside; (3) an associate's persistent lateness with ticket updates; (4) a stock shortfall of loan laptops projected in six weeks. Which one most needs escalation beyond the team, and to whom?

- A) Item 1, to the problem manager — four hours is too long for one fault.
- B) Item 2, to the problem manager and the infrastructure/availability specialists who own the authentication component — a recurring, estate-wide, self-resolving pattern the team cannot investigate further is precisely what the escalation route exists for.
- C) Item 3, to the service desk manager as a formal performance concern.
- D) Item 4, to procurement as an emergency order.

**Correct answer: B**

**Explanation:** Item 2 scores on every escalation axis — recurring, broad impact, and beyond the team's visibility, and its self-resolving nature makes escalation more urgent, not less, since nothing within the team's span will change. Item 1 is resolved and singular. Item 3 is a line-management matter to address directly first. Item 4 has six weeks of runway, making it planning rather than emergency escalation. This tests reserving escalation for recurring patterns and blocked investigations, and handling events, people and plannable logistics within one's own span.

**Question 9 (challenging) — Multi-constraint incident allocation**

At 14:00, three incidents arrive simultaneously: (X) the directorate print service is down — resolution requires server-side elevated rights; (Y) a P2 on the deputy director's laptop, presenting externally at 15:30; (Z) a walk-in reports their laptop possibly left on a train — security procedure requires immediate remote-wipe initiation and an incident report. Available: a senior engineer with elevated rights; engineer E1 (elevated rights, mid-way through a promised P3); engineer E2 (no elevated rights, free now, strong desk-side diagnostician). Which allocation works best?

- A) The senior engineer takes X; E2 takes Y; the senior engineer also initiates Z's remote-wipe immediately before starting X, as it takes minutes and is time-critical; E1 continues the promised P3.
- B) E1 abandons the P3 for X; the senior engineer takes Y personally because of the seniority of the user; E2 handles Z.
- C) E2 takes X; the senior engineer takes Z; E1 takes Y after finishing the P3.
- D) The senior engineer takes Y; E1 takes Z; X waits until someone with rights is free.

**Correct answer: A**

**Explanation:** X requires elevated rights (only the senior engineer and E1); Z is genuinely urgent but quick, and can be triggered by the senior engineer while already context-switching; Y needs strong desk-side diagnosis, matching E2's profile exactly, with no rights required. Option B breaks a promise unnecessarily and misallocates by user seniority rather than task requirement. Option C gives X to the one engineer who cannot touch it. Option D leaves a directorate-wide service down while its qualified resolvers do other work. This tests listing each task's hard constraints (rights, deadline, duration) before allocating.

**Question 10 (challenging) — Reasoning about a misleading aggregate**

A quarterly report shows first-time fix (FTF) improving: 68% → 71% → 74% across three months. Disaggregation shows: password-and-access tickets (FTF steady at 92%) have grown from 30% to 55% of total volume after a directorate onboarding; hardware tickets' FTF fell from 61% to 54%. What is the honest characterisation?

- A) The improvement is real and the team should be the model.
- B) The headline rise is a mix effect: an influx of high-FTF password tickets lifted the average while underlying hardware performance declined — the report should present both strands, celebrate neither, and investigate the hardware decline.
- C) The figures contradict each other, so the data is unreliable.
- D) Hardware FTF fell, so the team is actually performing worse overall.

**Correct answer: B**

**Explanation:** The aggregate moved because the mix moved — a high-FTF category grew as a share of volume while the underlying categories stagnated or declined. Option A accepts credit the data doesn't support. Option C mistakes explainable structure for unreliability. Option D overcorrects, since the password stream's genuine strength offsets the hardware decline in aggregate but shouldn't be ignored either. This tests asking, whenever any aggregate moves, whether performance changed or the mix changed — and presenting both strands honestly even when the true story is less flattering than the headline.

**Question 11 (challenging) — Preventative measure selection**

A quarter's laptop-damage incidents (60 total): 32 cracked screens from laptops carried unprotected between buildings; 15 liquid damage at desks; 8 drops during badge-access door transits; 5 miscellaneous. Budget allows one primary preventative measure this quarter. Which choice reflects the strongest reasoning?

- A) A poster campaign about general laptop care — it addresses all four categories at once.
- B) Issue protective sleeves to staff who regularly move between buildings — it targets the largest single cause (53% of damage), addresses the mechanism directly, and its effect can be measured in next quarter's category counts.
- C) Ban drinks at desks — liquid damage is the most preventable category.
- D) Fund whichever measure the most recently damaged user's directorate requests.

**Correct answer: B**

**Explanation:** Transit screen damage is more than half of all incidents and more than double the next category — ranking causes by magnitude and matching a measure to the mechanism (sleeves address unprotected transit physically) is the correct targeting logic, with measurability built in via next quarter's counts. Option A spreads effort across everything and concentrates it nowhere. Option C asserts "most preventable" without evidence, on a smaller category. Option D allocates by recency and noise. This tests ranking by magnitude, matching mechanism to measure, and building in a way to verify effect.

**Question 12 (challenging) — Diagnosing across team boundaries**

Large file transfers to a partner organisation fail intermittently. Desk-side checks clear the laptops across models, buildings, wired and wireless. Infrastructure's monitoring shows healthy network links. The partner's IT reports "no issues our side." Failures cluster between 15:00 and 17:00 daily and affect only files above roughly 500 MB. What is the strongest next move?

- A) Accept the three "all clear" reports and close the investigation as unreproducible.
- B) Convene the specialists across the boundary — infrastructure, and through agreed channels the partner's network team — around the two discriminating facts (time-of-day clustering, size threshold), and propose a joint test: schedule controlled large-file transfers inside and outside the window while both sides capture diagnostics simultaneously.
- C) Advise users to split all files below 500 MB permanently and close the ticket as workaround-resolved.
- D) Escalate to the lead engineer that the partner organisation is at fault, since this side has been cleared twice.

**Correct answer: B**

**Explanation:** Three teams checking their own component and finding it healthy does not sum to a healthy whole — the fault likely lives between components, where no individual monitoring looks. The time and size clustering are diagnostic gold, pointing to a designed joint observation. Option A mistakes three partial all-clears for a global one. Option C converts an interim workaround into a permanent degradation without diagnosing anything. Option D escalates blame without evidence, poisoning cross-organisation co-operation. This tests observing the whole path rather than re-checking cleared components, and letting discriminating facts drive the experimental design.

### Administration tips

- **Watch for whether a candidate distinguishes correlation from proof** in step-change and pattern items.
- **Score universal-condition items for whether every case is checked**, not just the salient one.
- **Note whether a candidate matches resource to task constraints** rather than to seniority or noise.
- **Keep timing consistent** across candidates for this level.
- **Use the boundary-fault item (Question 12) to observe whether a candidate proposes cross-team observation** rather than re-checking already-cleared components.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that claims proof from a correlation.**
- **Missing when a candidate audits only the salient case** and forgets the quiet one in a universal-condition rule.
- **Crediting an all-resources-to-the-loudest-incident allocation** as if it were correctly prioritised.
- **Accepting a moved aggregate at face value** without disaggregation.
- **Rewarding a workaround treated as a resolution**, leaving an undiagnosed fault to grow.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the numbers this role genuinely produces and consumes: SLA percentages, incident trends, capacity and utilisation figures, cost comparisons, forecast calculations, and the statistics behind stakeholder reports.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions. A calculator and rough paper are normally allowed. At senior level, numeric fluency carries a double weight: producing defensible reports, and consuming numbers to decide — co-ordinating the team's work, forecasting resource needs, and holding one's own in conversations built on capacity figures and thresholds.

### How this assessment maps to the role

- **Rates, percentages and weighted figures** map to the **IT service reporting** skill.
- **Trend analysis** maps to the **Problem management** skill.
- **Capacity and utilisation calculations** map to the **Technical specialism** skill and the duty to work closely with capacity and availability managers.
- **Workload arithmetic** maps to the duty to manage, co-ordinate and prioritise tasks.
- **Comparative analysis** maps to the **Change management** skill.
- **Test metrics** map to the **Testing** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Team SLA attainment**

The team closed 320 incidents last month; 272 were within SLA. What was the SLA attainment percentage?

- A) 82%
- B) 85%
- C) 88%
- D) 90%

**Correct answer: B**

**Explanation:** 272 ÷ 320 = 85%. A complement check (48 breaches ÷ 320 = 15%; 100 − 15 = 85) confirms it. This tests the basic attainment calculation, and a strong candidate's answer notes verifying by complement, since breaches are usually the smaller, more scrutinised number in stakeholder meetings.

**Question 2 (easy) — Utilisation against a threshold**

The capacity manager flags any file store running above 80% utilisation. Store A holds 1.2 TB of a 1.6 TB allocation; Store B holds 3.4 TB of 4.0 TB. Which stores breach the threshold?

- A) Neither
- B) Store A only
- C) Store B only
- D) Both

**Correct answer: C**

**Explanation:** Store A is 75%, Store B is 85%. The trap is judging by absolute headroom (A: 0.4 TB free, B: 0.6 TB free), which suggests B "has more space" — but thresholds are set proportionally, since growth consumes proportionally. This tests dividing first, comparing second, and using the shared proportional language capacity managers actually use.

**Question 3 (easy) — Average handling time for a rota decision**

Twelve walk-up visits took (minutes): 5, 10, 15, 5, 20, 10, 5, 30, 10, 15, 5, 50. What are the mean and median handling times?

- A) Mean 15, median 10
- B) Mean 14, median 12
- C) Mean 15, median 12.5
- D) Mean 12.5, median 15

**Correct answer: A**

**Explanation:** Total 180 ÷ 12 = mean 15. Sorted, the 6th and 7th values are both 10, giving median 10. This tests careful median position-counting, and a strong candidate's answer notes what each statistic is for: the median describes a typical visit, the mean (pulled up by one 50-minute outlier) times total workload — a rota built on either alone would misprovision.

**Question 4 (moderate) — Percentage change with the right base**

Incident volume: June 400, July 500, August 450. A colleague reports: "+25% in July, then −10% in August, so we're +15% overall." Which is correct?

- A) The monthly changes are right and the overall is +15%.
- B) The monthly changes are right (+25%, −10%), but the overall change June→August is +12.5%, because the −10% applies to July's larger base.
- C) The monthly changes are wrong.
- D) Overall change cannot be computed from these figures.

**Correct answer: B**

**Explanation:** (450−400) ÷ 400 = +12.5%, not the sum of the two monthly percentages, since each applies to a different base (1.25 × 0.90 = 1.125). This tests computing period-over-period change from raw endpoints, never by summing intermediate percentages — a small-looking colleague error that can misstate a quarter's demand trend to stakeholders.

**Question 5 (moderate) — Weighted SLA across priorities**

P1 incidents — 10 closed, 90% in SLA; P2 — 40 closed, 85% in SLA; P3 — 150 closed, 92% in SLA. What is the overall in-SLA percentage across all incidents?

- A) 89%
- B) 90.5%
- C) 91%
- D) 92%

**Correct answer: B**

**Explanation:** Converting to counts (9 + 34 + 138 = 181 out of 200) gives 90.5%, not the simple average of the three percentages (89%). This tests weighting by volume, and a strong candidate's answer notes that reporting the per-priority breakdown alongside the blended figure is what honest interpretation for stakeholders requires, since it reveals P2 running at 85%.

**Question 6 (moderate) — Capacity forecast to a threshold**

A shared storage volume is at 60% utilisation today, growing 3 percentage points per month, steadily, for a year. The escalation threshold is 85%, and expanding the volume takes two months from decision to delivery. When must the expansion decision be made, at the latest, to stay below threshold?

- A) Month 6 — the threshold is crossed around month 8, and delivery takes two months
- B) Month 8
- C) Immediately
- D) Month 4

**Correct answer: A**

**Explanation:** Solving 60 + 3m = 85 gives m ≈ 8.3, so stepping back the two-month delivery time puts the latest decision point at month 6. Option B decides at the crossing itself, guaranteeing two months above threshold. This tests computing a deadline exactly, and a strong candidate's answer would note the professional postscript: month 6 has zero margin for slippage, so the actual recommendation should build in a buffer.

**Question 7 (moderate) — Before/after comparison on a fair base**

A preventative fix was deployed at the end of March. Reopened-ticket counts: January 30, February 28, March 32, April 18, May 16. Ticket volumes were stable across all five months. What is the fairest statement of the fix's effect?

- A) Reopens fell by 14 from March to April — a 44% reduction against the pre-fix average of 30, sustained into May; with stable volumes, the timing and persistence support (but do not prove) the fix as cause.
- B) Reopens fell 44% in April, proving the fix worked.
- C) The reduction is within normal variation.
- D) Reopens will reach zero by August if the trend continues.

**Correct answer: A**

**Explanation:** The pre-fix baseline (28–32) is tight, the post-fix figures (18, 16) sit clearly outside it, sustained across two months, with volumes stable removing the most common confounder. Option B's arithmetic is right but its epistemology overreaches — proof needs eliminating alternatives. Option D extrapolates two points to an absurd conclusion. This tests quantifying a baseline, quantifying after, holding conditions constant, and claiming proportionately to the evidence.

**Question 8 (moderate) — Cost comparison for a recommendation**

Replacing 60 ageing laptops. Option 1: buy new at £700/unit, three-year warranty included. Option 2: refurbish at £250/unit now, with a 20% annual failure rate at £150 average repair each (versus 5% for new, repaired free under warranty). Over three years, which option costs less, and by roughly how much?

- A) Refurbishment, by about £10,000
- B) New purchase, by about £3,000
- C) Refurbishment, by about £21,600
- D) They cost about the same

**Correct answer: C**

**Explanation:** New: 60 × £700 = £42,000 total (repairs free under warranty). Refurbished: £15,000 purchase + £5,400 repair stream (12 failures/year × £150 × 3 years) = £20,400. Difference: £21,600. This tests costing the full stream, not just the unit price, and a strong candidate's answer notes that 36 disruption events over three years and the engineer time per repair deserve explicit mention in any report a stakeholder will act on, even though they don't flip the recommendation here.

**Question 9 (challenging) — Backlog projection under demand growth**

The team resolves 150 tickets per week at full strength. Demand has grown 4% per month for six months and now stands at 140 per week. Current backlog is 60. Two engineers (of eight) leave next month, cutting resolution capacity by 25% for the eight weeks it takes to recruit and induct replacements. Roughly what backlog should be expected at the end of those eight weeks, assuming demand growth continues?

- A) About 60 — inflow and outflow roughly balance
- B) About 300 — capacity falls to ~112/week while demand runs at ~141–148/week, adding roughly 28–32 tickets weekly for eight weeks on top of the existing 60
- C) About 120 — the backlog doubles
- D) Backlogs cannot be projected from these figures

**Correct answer: B**

**Explanation:** Capacity during the gap is 150 × 0.75 ≈ 112/week; demand rises from ~141 to ~148 over the eight weeks; the weekly shortfall of roughly 28–32 tickets, compounded over eight weeks, adds roughly 225–255 to the existing 60, giving roughly 300. This tests modelling inflow minus outflow with stated assumptions, and a strong candidate's answer notes that quoting the result as a sensitivity range is more honest than a single point value.

**Question 10 (challenging) — Test results summary**

Acceptance testing of a new build ran 240 test cases: 210 passed, 18 failed, 12 blocked (could not run because an environment dependency was down). A vendor summary reports "92.6% pass rate" and recommends release. Assess the claim.

- A) The figure is correct: 210 ÷ (210 + 18) ≈ 92.1%, close to 92.6% — accept it.
- B) The vendor computed against executed cases only, excluding the 12 blocked; the honest headline is 210 ÷ 240 = 87.5% executed-and-passed, with 18 failures (7.5%) and 12 blocked cases (5%) representing untested functionality — the blocked cases must be run, and the failures assessed for severity, before any release recommendation.
- C) 92.6% exceeds 90%, so release is justified.
- D) Pass rates are meaningless in acceptance testing.

**Correct answer: B**

**Explanation:** Recomputing against the full 240 (not just executed cases) gives 87.5%, revealing the vendor's inflated denominator treats untested functionality as if it did not exist. Option A accepts the vendor's denominator without checking it. Option C applies a threshold to an inflated figure. This tests recomputing a claimed percentage's denominator before engaging with its recommendation — blocked is not passed, and failures need severity assessment before a raw rate can inform a release decision.

**Question 11 (challenging) — Interpreting a distribution for a staffing case**

Resolution times for 200 incidents last month: median 45 minutes; mean 95 minutes; 90th percentile 240 minutes; the ten longest incidents averaged 14 hours each, all hardware faults requiring parts. A service desk manager, seeing the mean, proposes an efficiency review. What is the strongest evidence-based response?

- A) Accept the review — a 95-minute mean against a 45-minute median suggests general slowness.
- B) Show the decomposition: the median and 90th percentile describe a team resolving typical incidents in 45 minutes and 90% within four hours; the mean is inflated by ten parts-dependent hardware incidents (14-hour average) whose duration is set by parts logistics, not engineer efficiency — so the actionable target is the parts pipeline, not team working speed.
- C) Exclude the ten worst incidents from future reports so the mean looks better.
- D) Argue that means should never be reported.

**Correct answer: B**

**Explanation:** Decomposing the tail's contribution shows the other 190 incidents average roughly 56 minutes — coherent with the median — meaning the mean's inflation is caused by a specific, identifiable, parts-dependent cluster rather than general team pace. Option A accepts a diagnosis the data contradicts. Option C is an integrity failure, excluding inconvenient data to flatter a metric. This tests recognising a right-skewed distribution's tail, identifying its actual cause, and redirecting an improvement conversation to the correct lever — the parts pipeline, not engineer speed.

### Administration tips

- **Score for whether a candidate recomputes a denominator** before accepting a percentage that arrives with a recommendation attached.
- **Watch for whether a candidate distinguishes percentage change, weighted combination, and compound change** as separate models.
- **Note whether a candidate decomposes a suspicious average** into its components before drawing conclusions.
- **Keep timing consistent** across candidates for this level.
- **Use the distribution item (Question 11) to observe whether a candidate identifies the correct lever from a decomposed tail.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that sums percentage changes** rather than compounding them.
- **Accepting an average-of-averages** across unequal groups.
- **Missing when a candidate accepts a favourable but unchecked denominator.**
- **Crediting a single number reported without its pair** (mean without median, or vice versa) as sufficient.
- **Rewarding a projection presented as a point value without stated assumptions.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets and draws conclusions from written material — using documents a senior end user computing engineer genuinely works with: vendor advisories, change and release documentation, service policies, escalation correspondence, test specifications, stakeholder emails, and the reports the team produces.

The typical format is an online, timed test of 15 to 25 minutes. The dominant style is True / False / Cannot say. Other styles include selecting the best summary, judging which draft communicates most effectively, and reasoning across two related documents. The governing rule: answer from the text alone.

At senior level, reading precision carries multiplied consequences — interpreting vendor advisories the whole team acts on, reviewing change requests where a mis-read clause becomes an estate-wide incident, and writing reports whose accuracy stakeholders rely on.

### How this assessment maps to the role

- **Comprehension of technical and policy documents** maps to the **Change management** skill.
- **True/false/cannot-say discipline** maps to the **Problem management** skill.
- **Reading hedged and qualified language** maps to the duty to consult specialists effectively and work with infrastructure, capacity and availability managers.
- **Summary and clarity judgement** maps to the **IT service reporting** skill.
- **Reading requirements precisely** maps to the **Testing** skill.
- **User-facing clarity** maps to the **User focus** skill.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Question 1 (easy) — Reading a vendor advisory**

Passage: "Firmware v4.2 resolves the intermittent display flicker reported on Model K laptops. Devices on v4.0 or earlier should upgrade directly to v4.2. Devices on v4.1 must first roll back to v4.0 before applying v4.2, as direct upgrade from v4.1 can corrupt display settings. v4.2 has not been tested on Model J."

Statement: "A Model K laptop on v4.1 can be safely upgraded directly to v4.2."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The advisory explicitly requires a rollback-first path for v4.1 devices, contradicting the direct-upgrade claim. This tests recognising that the safe path depends on the starting version — a single blanket instruction sent to a mixed estate would corrupt exactly the v4.1 subset — and a strong candidate's answer would note the separate untested-on-Model-J caveat as a distinct, unresolved risk.

**Question 2 (easy) — What a monitoring summary does and does not claim**

Passage: "Network monitoring for Building D detected no packet loss or latency threshold breaches between 09:00 and 17:00. Monitoring covers the wired network to the floor-switch level. Wireless access points in Building D are not currently within monitoring scope."

Statement: "The summary shows that Building D users experienced no network problems during working hours."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The summary's claim is scoped to wired, floor-switch-level monitoring, explicitly excluding wireless — the statement generalises beyond what was measured. This tests separating what was measured from what is claimed, since "no issues detected" is a claim about a detector's coverage as much as about the network — a scope sentence, often the last and least-read line, is where the coverage lives.

**Question 3 (easy) — Following release documentation**

Passage: "This release must be deployed in sequence: database schema update first, then application server packages, then client updates. Client updates deployed before the schema update will fail silently, leaving clients on the old version while reporting success. The schema update requires a 30-minute service outage and must therefore occur outside business hours."

Statement: "If a client update reports success, the client is running the new version."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage explicitly describes a silent-failure case where a client reports success while remaining on the old version. This tests recognising that a specification containing a silent-failure mode requires verification independent of the tool's own success report — the exact pattern "define test conditions" exists to catch.

**Question 4 (moderate) — Stacked conditions in a security policy**

Policy extract: "(1) Remote-access tokens are issued only to staff with a completed security induction. (2) Contractors may hold tokens only while their engagement letter is current, and must additionally be sponsored by a permanent staff member at grade 7 or above. (3) Token renewals follow the same rules as issuance. (4) During a declared security incident, all contractor tokens are suspended irrespective of sponsorship and engagement status."

A contractor with a completed security induction, a current engagement letter, and a grade 6 permanent sponsor requests token renewal. No security incident is declared. What does the policy require?

- A) Renew — induction and engagement letter are both in order.
- B) Refuse — renewal requires a sponsor at grade 7 or above, which a grade 6 sponsor does not satisfy.
- C) Renew, but flag for review at the next declared incident.
- D) Refuse — contractors may never hold tokens.

**Correct answer: B**

**Explanation:** Rule 2's conjunction (current engagement letter AND grade 7+ sponsor) fails on its weakest member — a grade 6 sponsor. Rule 3 imports this failed condition into renewal. Option A stops counting once the passing conditions are checked. Option C invents a conditional-renewal category. This tests tracing every applicable rule to its end, since conjunctions fail on their weakest member, not their average.

**Question 5 (moderate) — Inference from escalation correspondence**

Passage: "Thanks for the Monday-morning login failure evidence — the time clustering and the clean authentication logs were exactly what we needed. We've reproduced the failure in the test environment and traced it to a token cache that expires over weekends under a specific configuration. A fix is being tested; assuming it passes, release is targeted for the 14th. Until then, the Tuesday-to-Friday pattern should hold, but we can't rule out a similar failure after bank holiday weekends, for the same underlying reason."

Statement: "The problem manager expects that the failure could also occur on the morning after a bank holiday, before the fix is released."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** "Can't rule out a similar failure after bank holiday weekends" directly supports the statement's "could also occur." This tests reading professionals' hedges at their intended strength — "could" is not "will," "targeted" is intention not commitment — and faithfully transmitting that calibrated strength when relaying the information to a team.

**Question 6 (moderate) — Choosing the best stakeholder summary**

Monthly data: incidents up 12% (driven by a directorate onboarding); SLA attainment steady at 91%; hardware repair backlog up from 15 to 24 due to a supplier recall consuming engineer time; the recall 80% complete and on track to finish next month. Which four-line draft for directorate heads is best?

- A) "Another strong month: SLA steady at 91% despite 12% more incidents. Some hardware delays due to external factors beyond our control. Normal service continues."
- B) "Incidents rose 12%, absorbed without SLA impact (steady at 91%) — the rise tracks the Directorate F onboarding. Hardware repairs are slower than usual: the supplier recall is consuming engineer time, and the repair backlog has grown from 15 to 24. The recall is 80% complete; we expect it finished, and the backlog recovering, next month. No action needed from directorates, but hardware-dependent users should expect longer repair times until then."
- C) "Incident volumes have increased and the hardware backlog has grown, indicating rising pressure on the service. Escalation of resource concerns is recommended."
- D) "SLA 91%. Incidents +12%. Backlog 15→24. Recall 80%."

**Correct answer: B**

**Explanation:** Option B pairs every movement with its cause and a dated expectation, and states the one consequence readers should plan around. Option A hides the backlog figure behind vague reassurance. Option C promotes an explained, ending pressure into an unwarranted escalation. Option D is data without interpretation. This tests writing a summary a reader could act on correctly without access to the underlying data.

**Question 7 (moderate) — Precise reading of an SLA definition**

Contract extract: "Priority 2 incidents: response within 1 working hour, resolution within 8 working hours. The resolution clock pauses while an incident awaits information requested from the customer, and while an agreed workaround is in place pending permanent fix. Incidents resolved by workaround are reported as 'resolved (workaround)' and count toward SLA resolution targets only when the workaround fully restores service functionality."

Statement: "An incident where an agreed workaround partially restores service counts toward the SLA resolution target."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The condition "only when the workaround fully restores service functionality" is not met by a partial restoration. This tests reading "only when" as a necessary condition and "fully" as a strict threshold — and a strong candidate's answer notes the incentive risk this structure creates, since a partial workaround stops the SLA clock without earning credit, tempting incidents to be parked indefinitely.

**Question 8 (moderate) — Reconciling two documents**

Document 1 (runbook, updated January): "USB storage devices are blocked on all estate laptops. Exceptions require a business case approved by the security team, reviewed annually."
Document 2 (security bulletin, dated last week): "Following the data-handling review, all existing USB storage exceptions are revoked with immediate effect. New exception requests are suspended pending publication of the revised removable-media policy, expected within eight weeks."

A user with a January-approved exception asks whether they can still use their USB drive, and when they can reapply. What is the accurate answer?

- A) Yes — their exception was approved and is valid until its annual review.
- B) No — their exception is revoked; and they cannot yet reapply, because new requests are suspended until the revised policy is published, expected within eight weeks.
- C) No — their exception is revoked, but they can reapply immediately under the runbook process.
- D) Yes — bulletins cannot override runbooks.

**Correct answer: B**

**Explanation:** The later, more specific bulletin revokes all existing exceptions immediately and also suspends the reapplication route the runbook describes. Option A reads only the older document. Option C misses that the suspension applies to new requests too. This tests sequencing documents by date and specificity, and recognising the stale runbook itself now needs urgent annotation before another reader gives the wrong answer in good faith.

**Question 9 (challenging) — A specification's boundary conditions**

Specification extract: "The device-encryption compliance report runs nightly at 02:00 and lists all laptops whose last successful encryption check is older than 72 hours. Laptops offline for more than 14 consecutive days are moved to the 'dormant' register and excluded from the compliance report until they next connect. On connection, a dormant laptop is checked within 15 minutes and, if the check fails or cannot complete, appears on the next compliance report."

Statement: "A laptop that has been offline for 10 days will appear on tonight's compliance report."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** At 10 days, the laptop is not dormant (dormancy requires more than 14 days), so it is not excluded, and its last successful check must be well over 72 hours old — both conditions resolve to inclusion. This tests letting a specification's stated mechanics answer the question rather than an intuition that offline laptops are simply invisible to reports — the specification's whole design is that non-dormant offline laptops do appear.

**Question 10 (challenging) — Evaluating an argument in a proposal**

Proposal: "Since the desktop team's remote-support tool was deployed, average incident resolution time has fallen 18%. Deploying the same tool to the field-engineering team will therefore reduce their resolution times by a similar amount. Field engineering's incidents are largely connectivity-related and occur at sites without reliable network access."

Statement: "The proposal's own final sentence undermines its central argument."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** A remote-support tool requires network access to function; the final sentence states field engineering's incidents occur precisely where network access is unreliable — the tool would be least available exactly when needed. This tests locating the load-bearing assumption behind a generalisation (that the two contexts are relevantly similar) and checking whether the text itself supplies its own defeater.

**Question 11 (challenging) — Judging a difficult communication**

A change implemented last night failed partially: 30 of 200 laptops did not receive a security patch and are temporarily blocked from the network by policy, stranding their users this morning. The cause was an expired deployment certificate the team should have renewed. An email must go to the affected users' managers. Which draft is best?

- A) "Due to a certificate anomaly in the deployment infrastructure, a subset of devices was unable to complete the scheduled update and has been isolated per security policy. Remediation is in progress."
- B) "Last night's security patch failed on 30 laptops because a deployment certificate expired — a renewal our team should have made and missed. Security policy has automatically blocked those laptops this morning; the affected users are listed below. We expect all 30 restored by 12:00. Affected users can work immediately via the loan pool or browser-based email — reply and we'll arrange either within the hour. We're adding certificate expiry to our monitored checks so this cannot recur silently. I'll confirm completion by 12:30."
- C) "A small number of devices missed last night's patch and were blocked by policy. This is a routine occurrence in large estates and no cause for concern. Normal service will resume shortly."
- D) "30 laptops are blocked following a failed patch. The security policy that blocks unpatched devices is set centrally, not by this team. Users should contact the service desk for workarounds."

**Correct answer: B**

**Explanation:** Option B states honest cause, usable scope, immediate mitigation, and prevention, closing with a confirmation time. Option A hides the missed renewal behind passive language. Option C minimises to an audience whose staff cannot work. Option D deflects blame while pushing the burden onto users. This tests naming the cause, bounding the damage, mitigating now, and showing the fix that outlives the incident when a team's own error caused the harm.

### Administration tips

- **Score for whether a candidate reads a scope sentence** (coverage clauses, exclusions) rather than a headline claim.
- **Watch for whether a candidate calibrates a hedge at its stated strength** ("targeted," "should," "can't rule out").
- **Note whether a candidate checks document dates before reconciling conflicting texts.**
- **Use the stakeholder-summary item (Question 6) as a live discussion point** in debrief.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting "no issues detected" as if it meant "no issues"** without checking the instrument's coverage.
- **Missing when a candidate half-reads a conjunction or exception** and stops before the full rule.
- **Rewarding an answer that imports operational intuition** over what a specification actually states.
- **Accepting an older document's answer over a later, more specific one.**
- **Rewarding a summary that spins (hides an unflattering figure) or panics (promotes explained pressure into crisis).**

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses — most effective, least effective, or rated. The material is the human side of the role: team members under pressure, escalations that stall, stakeholders with conflicting demands, specialists who disagree, and the recurring collision between speed, process and people.

The typical format is 10 to 20 scenarios, untimed or generously timed. Scoring compares choices with the pooled judgement of experienced professionals and the organisation's values. At senior level, two additional behaviours come into focus: developing the people managed, and protecting the service's interests across team boundaries.

Scoring keys expect resolution within one's own span (people, priorities, team process), escalation with evidence of what exceeds it (systemic causes, cross-team blockers, resourcing), and development rather than absorption — a senior who does everything personally scores as poorly as one who delegates everything upward.

### How this assessment maps to the role

- **Team co-ordination judgement** maps to the duty to manage, co-ordinate and prioritise tasks.
- **Escalation calibration** maps to the duty to identify and escalate repeat issues.
- **Cross-team influence** maps to the duty to work closely with infrastructure, capacity and availability managers and to consult specialists effectively.
- **Developing engineers** maps to the team-management responsibility and the **Ownership** skill.
- **Preventative instinct** maps to the **Problem management** skill and **Service focus**.
- **Honest stakeholder communication** maps to the **IT service reporting** skill and **User focus**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The engineer who hides a struggle**

An engineer has quietly held a P3 ticket for six days — the team norm is two — re-dating the expected-resolution field twice without notes. The engineer is capable, well liked, and has never needed chasing before. What is the most effective response?

- A) Reassign the ticket to a faster engineer and say nothing — the queue matters most.
- B) Raise the six-day ticket at the team stand-up so everyone learns the standard.
- C) Speak privately: ask what is happening with the ticket, listen first — the uncharacteristic pattern suggests a blocker, a knowledge gap, or something personal — then agree a path for the ticket and whatever support the actual cause needs.
- D) Send a written reminder of the two-day norm with the ticket reference attached.

**Correct answer: C**

**Explanation:** An uncharacteristic pattern, held silently, is more likely a struggle than negligence. Option C investigates privately and with listening first, teaching that surfacing a struggle early is safe. Option A abandons the engineer, who will hide the next struggle too. Option B converts a private difficulty into public example-making. Option D applies a rule without asking which underlying issue needs attention. This tests treating uncharacteristic behaviour as data worth investigating privately, before disciplining.

**Question 2 (easy) — Credit flows upward**

At a service review, a manager praises last month's sharp drop in repeat incidents — an improvement produced by an engineer who designed and drove it almost entirely alone — and congratulates the senior engineer personally. What is the most effective response, and which is least effective?

- A) Accept the praise gracefully — as their manager, the team's results are yours to represent.
- B) In the meeting, redirect the credit specifically: name the engineer, state what they designed, and note the recognition will be passed on — then do so, and mention it in their next development conversation.
- C) Say nothing in the meeting, but privately thank the engineer afterwards.
- D) Explain modestly that the improvement was mostly luck and the trend may not hold.

**Correct answer: most effective B; least effective D**

**Explanation:** Redirecting credit publicly makes the engineer's work visible to the seniority that decides progression, at the cost of one sentence. Option A is the quiet ceiling — technically defensible but teaches good people their work becomes someone else's at the meeting-room door. Option C preserves private fairness but wastes the public moment. Option D is least effective, erasing a designed, driven improvement into noise, undermining both the engineer and the case for future preventative investment. This tests treating attribution moments as development infrastructure.

**Question 3 (easy) — The specialist who talks past the candidate**

Investigating recurring virtual-desktop slowness, an infrastructure specialist's reply is a wall of jargon concluding "everything's green our side," not addressing the time-clustered evidence sent. The slowness continues, users complain daily, and the specialist is known to be prickly with non-infrastructure people. What is the most effective response?

- A) Accept the all-clear and tell users the fault cannot be found.
- B) Re-engage concretely: restate the two discriminating facts in one short message — the 11:45–13:15 daily window and the three-week-old onset — ask directly what their monitoring covers during that specific window, and propose a fifteen-minute joint look at the data; if it stalls again, escalate the impasse with the evidence trail to the lead engineer.
- C) Escalate immediately to the specialist's manager, attaching the dismissive reply.
- D) Work around them: ask a friendlier infrastructure contact to run checks informally.

**Correct answer: B**

**Explanation:** Compressing evidence to its two discriminating facts, converting a vague all-clear into a specific coverage question, and lowering the cost of engagement to fifteen shared minutes dissolves most cross-team impasses that were caused by skimming rather than stonewalling. Option A abandons users to an unruled-out fault. Option C escalates before a competent second pass. Option D corrodes the official channel when discovered. This tests re-consulting effectively when a first pass fails, before escalating the impasse rather than the person.

**Question 4 (moderate) — The rota favour with a pattern**

An engineer asks to swap out of next week's Monday walk-up desk shift — the third consecutive Monday request, each with a plausible individual reason. Covering the swaps has quietly fallen to the same two colleagues. What is the most effective response?

- A) Approve this swap — each request has had a valid reason — and keep monitoring.
- B) Refuse this and future Monday swaps — fairness requires everyone taking equal Mondays.
- C) Approve or hold this swap on its stated merits, but address the pattern directly: a private conversation with the engineer about the three-Monday run and what is behind it, and a look at whether the swap-covering burden has become unfair to the two colleagues absorbing it.
- D) Redesign the whole rota so Mondays rotate automatically and swaps need written approval.

**Correct answer: C**

**Explanation:** Each request being individually plausible and the pattern being data are both true at once. Option C judges the current swap on merits, opens an inquiry into the pattern, and attends to the colleagues absorbing the cost. Option A lets a drift already taxing two people continue under "monitoring." Option B enforces a rule without asking a question that might change everything. Option D reaches for structural machinery to avoid one direct conversation. This tests managing patterns in small requests through conversation before reaching for systems.

**Question 5 (moderate) — Pressure to bless a risky change**

A manager wants a driver update pushed to all 300 estate laptops this week, citing vendor security guidance. The impact assessment is incomplete — the pilot covered only two of four hardware variants, and one untested variant had serious problems with the previous driver generation. The manager says: "Security trumps process — push it estate-wide, I'll own the risk." What is the most effective response?

- A) Push estate-wide as instructed — the manager has explicitly accepted the risk.
- B) Refuse until the full pilot completes in three weeks — process is process.
- C) Propose the risk-managed middle: push now to the two tested variants (about 70% of the estate, capturing most of the security benefit immediately), fast-track a 48-hour pilot on the remaining variants — prioritising the one with the bad driver history — and stage their rollout on its results; put this plan and its rationale to the manager in writing.
- D) Push estate-wide but keep rollback packages ready.

**Correct answer: C**

**Explanation:** The manager's framing (security versus process) is false, and option C dissolves it by delivering most of the security benefit immediately while confining untested risk to a short, prioritised pilot. Option A misreads "I'll own the risk" — accountability doesn't transfer by sentence, and users bear real downtime regardless. Option B hands over a three-week security exposure the middle path achieves faster and safer. Option D does the reckless thing carefully. This tests designing a sequence that delivers speed and safety together, in writing, rather than picking one.

**Question 6 (moderate) — The repeat issue nobody owns**

For a month, twelve tickets have logged intermittent failures in the expenses application with real user impact and clear evidence. Two escalations to the software development team have both been closed as "cannot reproduce." Engineers have started telling users "known issue, nothing we can do." What is the most effective response?

- A) Accept the developers' finding — if they cannot reproduce it, it cannot be progressed.
- B) Rebuild the escalation as evidence they cannot close: aggregate the twelve tickets into one problem record with the reproduction-relevant pattern (timing, user actions, error text, affected versions), ask engineers to capture diagnostics at the next occurrences, then take the package through the problem manager rather than as a third ticket-to-ticket escalation; and reset the team's user script from "nothing we can do" to "actively under investigation, here's the workaround."
- C) Tell users to raise complaints so the application team feels the pressure.
- D) Instruct the team to stop logging tickets for it, since they only get closed.

**Correct answer: B**

**Explanation:** "Cannot reproduce" reflects evidence shaped as isolated incidents; option B changes what arrives — an aggregated problem record with pattern data, routed through the process designed to hold open recurring, hard-to-reproduce faults. Option A treats a channel failure as a technical verdict. Option C weaponises users. Option D stops collecting the evidence the case depends on. This tests upgrading evidence and changing the route when escalation fails twice, and never letting a team narrate defeat to users.

**Question 7 (moderate) — Two managers, one engineer, Friday afternoon**

At 15:30 Friday, the capacity manager asks for an engineer kept late for urgent storage remediation ("tonight or we breach thresholds over the weekend"), while the availability manager separately insists the same engineer complete failover testing tonight ahead of Monday's DR audit. The engineer, who has flagged childcare constraints on late notice before, has not yet been asked. Both managers say their task cannot slip. What is the most effective response?

- A) Give the engineer both tasks and let them prioritise — they know the systems best.
- B) Take the conflict off the engineer entirely: get the two managers to rank the tasks against each other (asking each what "cannot slip" concretely means and what a 24-hour slip actually costs); in parallel, establish real options — can either task be done by another engineer with the specialist advising, can either genuinely wait — and only then discuss late working with the engineer, as a request with their constraints respected, not a fait accompli.
- C) Side with the availability manager — audits outrank thresholds.
- D) Tell both managers that late working is impossible due to the engineer's circumstances and the tasks must wait until Monday.

**Correct answer: B**

**Explanation:** Option A exports a management conflict to the person least able to resolve it. Option C adjudicates by category without interrogating either claim. Option D sacrifices both tasks unilaterally. Option B forces the demand owners to rank against each other, widens the option space, and approaches the engineer last with a genuine, constraint-respecting request. This tests refusing to guess at competing priorities and refusing to make an engineer guess.

**Question 8 (moderate) — The report that would embarrass a colleague**

A spike in failed changes traces to one engineer's three consecutive failed implementations, all from skipping the pre-implementation checklist. The monthly report goes to the service desk manager and is discussed in a forum comparing teams' figures. The engineer has not yet been spoken to. What is the most effective response?

- A) Report the spike with the engineer named — transparency requires full attribution.
- B) Omit the three failures from the figures to protect the engineer, and handle it privately.
- C) Report the spike accurately with its process cause ("three failed changes traced to pre-implementation checks being skipped; corrective actions under way") without naming the engineer — and hold the direct, developmental conversation with the engineer before the report lands, so the corrective actions are real and they hear it from the candidate first.
- D) Delay the report a month to see whether the trend self-corrects.

**Correct answer: C**

**Explanation:** Honest reporting and fair management do not actually conflict here: the report states the true process cause with real corrective action (because the conversation happened first), while the engineer is managed privately and never ambushed by a forum discussion. Option A converts reporting into public discipline. Option B corrupts the data trail. Option D trades stakeholder blindness for the hope of avoiding a conversation. This tests sequencing so that both the report and the management conversation are honest when the report lands.

**Question 9 (challenging) — An improvement made things worse**

Three weeks ago, a redesign of the team's ticket-triage process was announced with fanfare to speed up allocation. Data now shows allocation is faster, but misrouted tickets have doubled, and two engineers privately say the new categories are confusing. The old process could be restored in a day. A monthly review, where the redesign was presented, is tomorrow. What is the most effective response, and which is least effective?

- A) Present the allocation-speed improvement tomorrow and hold back the misrouting data while quietly fixing the categories.
- B) Restore the old process today and describe the episode tomorrow as a trial that ran its course.
- C) Bring the full picture tomorrow: the speed gain, the doubled misrouting, the engineers' feedback — and a decision made with the team today on the evidence, whether that is fixing the confusing categories quickly or reverting while a better design is worked up; presented plainly as "the redesign achieved X, cost Y, and here is what we're doing about it."
- D) Keep the new process unchanged for another month to give it a fair chance before judging.

**Correct answer: most effective C; least effective A**

**Explanation:** Option C applies the same evidence discipline to one's own initiative that would be applied to anyone else's — both metrics on the table, practitioner feedback as data, a decision made with the team, reported without spin. Option A is selective presentation of one's own project's data with a personal motive — worse than the reporting corruption warned against elsewhere, and it compounds once the misrouting data surfaces independently. Option B launders the story with a false framing. Option D extends a known cost to protect the possibility of being right. This tests holding one's own initiatives to the same evidence and honesty standard as anyone else's.

**Question 10 (challenging) — Inclusion versus the delivery deadline**

Two days from completing a directorate-wide laptop migration with a published deadline, an engineer flags that a team of six caseworkers includes two users of specialist assistive technology whose configurations the standard migration will wipe; rebuilding them properly needs a specialist unavailable until three days after the deadline. The directorate head "expects 100% completion by Friday." What is the most effective response?

- A) Migrate everyone by Friday — 100% was promised, and the two users can be supported with workarounds for three days.
- B) Defer the whole six-person team until the specialist is available, keeping teams together.
- C) Migrate the four standard users on schedule; explicitly defer the two assistive-technology users until the specialist can rebuild their configurations — treating their working setup as a completion requirement, not an optional extra; tell the directorate head today: 98% Friday, the final two properly done three days later, with the reason stated plainly.
- D) Ask the two users to choose between migrating on time with temporary workarounds or waiting for the specialist.

**Correct answer: C**

**Explanation:** A migration leaving two disabled users unable to work is not complete for them — it has converted their equipment into an obstacle. Option C delivers what the deadline actually protects for the rest of the directorate while deferring exactly the two migrations that would cause harm, communicated proactively with its reason. Option A treats their access as a rounding error. Option B defers four users who carry no risk. Option D outsources an accessibility judgement to the affected users as a forced choice. This tests treating inclusion as a completion criterion and communicating exceptions proactively rather than letting them surface as a discovered failure.

**Question 11 (challenging) — The quiet capability gap**

A key monitoring system is understood deeply by exactly one engineer, who built most of the team's tooling around it — excellent, overloaded, visibly proud of being indispensable, and just shortlisted for a promotion elsewhere. Documentation is thin; two other engineers say they "wouldn't know where to start" if the specialist were away. What is the most effective response?

- A) Hope the promotion falls through; the team works well as it is.
- B) Instruct the specialist to write full documentation before any move is confirmed.
- C) Start deliberate knowledge transfer now, framed as investment in the specialist rather than insurance against them: pair the two interested engineers with the specialist on real tickets, make documentation a byproduct of the pairing (they write it, the specialist corrects it), recognise the specialist's teaching visibly — and say plainly that setting the team up to survive their promotion is part of making the promotion possible.
- D) Quietly commission an external contractor to reverse-engineer the tooling as a contingency.

**Correct answer: C**

**Explanation:** A single point of knowledge is a predictable failure mode, identified before it fires, and option C aligns every party's genuine interest — a system that survives the specialist's departure improves their promotion prospects, the interested engineers get development, and pairing on real tickets transfers judgement rather than just facts. Option A is a plan with a single point of failure about a single point of failure. Option B extracts documentation as a resented toll, written by the person who cannot see what beginners don't know. Option D spends money to avoid a developmental conversation and, if discovered, damages trust. This tests treating a capability risk like any other risk — early, openly, leaving people better off than the risk found them.

### Administration tips

- **Score for whether a candidate applies the same evidence standard to their own initiatives** as to others' work.
- **Watch for whether a candidate ranks competing claims of urgency concretely** rather than adjudicating by category or seniority.
- **Note whether a candidate sequences private management conversations before public reporting.**
- **Use most/least items to check whether a candidate rates each option independently before ranking.**
- **Keep candidates scored to senior-level judgement** — develop rather than absorb, escalate patterns rather than instances.

### Common pitfalls to watch for when scoring

- **Rewarding heroic absorption** — taking hard tickets personally, covering gaps silently, remaining indispensable.
- **Missing when a candidate escalates a people-problem that belongs within their own span**, or conversely buries a systemic cross-team fault.
- **Crediting acceptance of transferred risk on someone's say-so** ("I'll own the risk") as if it discharged the professional duty of assessment.
- **Accepting an option that lets a report and the truth diverge**, even a flattering one.
- **Rewarding categorical adjudication** ("audits beat thresholds") over interrogating the concrete claims behind competing demands.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior end user computing engineer: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests distinguishing step changes from noise and mix effects from improvements, auditing rotas and change requests one rule at a time, and diagnosing across team boundaries. The numeric section tests weighted SLAs, backlog projections, capacity deadlines, and total costs of ownership with stated bases. The verbal section tests reading vendor advisories, monitoring summaries and conflicting policies at their exact strength. The situational judgement section tests the calls that define this level: allocating scarce engineers, calibrating escalations, confronting one's own initiative's costs, protecting assistive-technology users against a deadline, and dissolving a single point of knowledge without damaging the person who holds it.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can co-ordinate a team, read specifications precisely, and exercise sound judgement where technical facts, team dynamics and service pressures collide — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
