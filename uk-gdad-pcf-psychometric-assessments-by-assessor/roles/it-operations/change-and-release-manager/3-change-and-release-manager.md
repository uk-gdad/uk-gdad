# Change and Release Manager - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for change and release manager, within the UK Government Digital and Data profession. These assessments are job-specific: rather than abstract reasoning puzzles, they draw on the artefacts a change and release manager genuinely owns — forward schedules of change, Change Advisory Board (CAB) papers, risk assessments, release calendars, configuration management data, availability and capacity KPIs, and post-implementation reviews — and the decisions the role genuinely makes: whether a contested change proceeds, how interdependent releases are sequenced, when an escalation demands personal ownership, and how a change process itself should be improved.

A change and release manager sits at the point where delivery pressure meets operational risk. They chair the CAB, ensuring every technical change is adequately assessed for impact, prioritised, scheduled, authorised, and implemented in line with process. They are the escalation point when things go wrong, the decision-maker for all technical changes, and the coordinator of releases and their interdependencies. Each of the four assessment types in this document measures a capability that work depends on directly: cognitive ability (spotting the conflict buried in a forward schedule, reasoning through dependency chains), numerical reasoning (reading KPI tables accurately, converting availability targets into real minutes, building the quantified case for process improvement), verbal reasoning (extracting precisely what a policy, audit finding, or incident report does and does not establish), and situational judgement (holding the line under senior pressure, coordinating without commanding, and improving processes without losing the people who must follow them).

The document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and how it is typically administered, a mapping of its dimensions to the specific skills named in the role's capability framework, a substantial set of items with full worked explanations for use as an answer key, administration notes, and common pitfalls to watch for when scoring. Questions progress from easy through moderate to challenging, and the challenging questions are genuinely challenging — they reflect the ambiguity and competing pressures of the role at this level.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the mental processes this role demands, using practical scenarios rather than abstract puzzles. For a change and release manager, that means questions built from the materials of change governance: forward schedules, risk classifications, dependency maps, CAB submissions, release calendars, freeze periods, and post-implementation evidence.

The typical format is an online, timed test of 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level; most modern platforms adapt question difficulty, and employers typically receive accuracy and speed as separate measures. Short ungraded practice questions are normally offered first.

Cognitive assessment is particularly relevant for this role because structured reasoning under time pressure is the substance of the job. Chairing a CAB well means holding a dozen changes in mind simultaneously — their risk levels, dependencies, windows, and requesters' track records — and noticing the conflict nobody has declared. Coordinating releases and interdependencies is constraint-satisfaction reasoning; diagnosing and prioritising incidents is deduction from incomplete evidence; improving change processes is pattern recognition across months of outcome data.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role's capability framework:

- **Pattern recognition** maps to the **Problem management** skill: initiating and monitoring actions to investigate patterns and trends. It also serves the **Availability and capacity management** duty to manage service components against KPIs — KPI drift is a pattern before it is a problem.
- **Logical deduction** maps to the **Change management** skill and the duty to make decisions for all technical changes: reasoning from policy, risk classification, and dependency data to what must follow.
- **Error checking** maps to the **Asset and configuration management** skill: finding the schedule conflict, the stale record, and the impact assessment that contradicts the configuration data.
- **Prioritisation** maps to the escalation-point role and the **Incident management** skill.
- **Applied problem solving** maps to the **Service focus** skill and the duty to actively improve and optimise change processes.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in risk classification**

The change policy classifies risk by two factors: service criticality (Gold, Silver, Bronze) and change type (routine, non-routine). The rule produces: Gold + non-routine = High risk; Gold + routine = Medium; Silver + non-routine = Medium; Silver + routine = Low; Bronze + non-routine = Low; Bronze + routine = Low. A CAB submission lists four changes with their claimed classifications:

1. Payments service (Gold), non-routine — High
2. Intranet (Bronze), non-routine — Medium
3. Case management (Gold), routine — Medium
4. Reporting service (Silver), routine — Low

Which change is misclassified?

- A) Change 1
- B) Change 2
- C) Change 3
- D) Change 4

**Correct answer: B**

**Explanation:** Applying the rule table mechanically to each row: change 1 (Gold + non-routine = High) is correct; change 2 (Bronze + non-routine = Low by the table, but claimed Medium) is misclassified; change 3 (Gold + routine = Medium) is correct; change 4 (Silver + routine = Low) is correct. The interesting feature is the direction of the error: change 2 is over-classified, not under-classified. Over-classification looks harmless, but it consumes CAB scrutiny time that High-risk changes need, trains requesters that classifications are decorative, and erodes the data used to tune the process. This tests checking every row against the rule mechanically, including the ones that look plausible, and a strong candidate's answer notes that both directions of classification error matter when auditing quality.

**Question 2 (easy) — Deduction from delegated authority rules**

The change policy states: "Standard changes are pre-authorised. Normal changes with Low or Medium risk may be authorised by the change and release manager. Normal changes with High risk require CAB authorisation. Emergency changes may be authorised by the change and release manager or, in their absence, the designated deputy, and must be reviewed at the next CAB." Last Tuesday — a day the change and release manager was at work — a High-risk normal change was implemented. Which one of the following must be true, if the policy was followed?

- A) The change and release manager personally authorised the change.
- B) The CAB authorised the change.
- C) The change was reviewed retrospectively at the next CAB.
- D) The deputy authorised the change.

**Correct answer: B**

**Explanation:** The policy assigns exactly one authorisation route to each category, and a High-risk normal change explicitly "requires CAB authorisation" — so if the policy was followed, the CAB authorised it. Option A confuses general decision-making authority with this specific category: Low and Medium normal changes are delegated, but High risk is explicitly reserved for the board. Option C applies the retrospective-review rule, which belongs to emergency changes, not normal ones. Option D invokes the deputy, relevant only in the manager's absence, which the question rules out. This tests keeping authorisation routes crisply separated — blurring them into "the change manager decides everything" is exactly how governance drifts in real organisations, and reading the policy deductively is how it stays precise.

**Question 3 (easy) — Error checking a release calendar against constraints**

Constraints for March: (i) a company-wide change freeze covers the first full week (Monday 2nd to Friday 6th); (ii) payments service releases may only occur on Tuesdays or Thursdays; (iii) no two releases may share the same day. A draft calendar proposes: Release A (HR system) — Wednesday 4th; Release B (payments) — Thursday 12th; Release C (payments) — Tuesday 17th; Release D (intranet) — Thursday 12th. How many constraint violations does the draft contain?

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** Checking each constraint across the whole calendar: Release A sits on Wednesday 4th, inside the freeze — violation one. Releases B and C both use permitted payments days — no violation there. Releases B and D share Thursday 12th — violation two. Total: 2. The counting discipline matters: the shared day is one violation of one constraint, not two, and Release A's freeze breach is complete in itself regardless of what kind of service HR is, since the freeze is company-wide. This tests systematically applying every constraint to the same draft rather than checking entries individually and missing intersections — exactly the weekly discipline of maintaining a forward schedule of change, where constraints live in different documents and conflicts only become visible when applied together.

**Question 4 (moderate) — Prioritisation as the escalation point**

It is 10:00 on Wednesday. Four items compete for immediate attention:

1. A P2 incident is in progress; the incident manager reports the leading suspect is last night's change to the document service, and asks for confirmation of whether an emergency back-out should be considered.
2. The CAB convenes at 11:00; the two High-risk submissions on the agenda have not yet been read.
3. A programme director has emailed asking why their team's change was deferred last week and wants a call "this morning".
4. The monthly change performance report to the service management board is due by close of play.

Which sequencing is most defensible?

- A) 2, 1, 3, 4 — the CAB is the chair's duty and is closest in time
- B) 1, 2, 3, 4 — support the live incident decision, then prepare for CAB, then the director, then the report
- C) 3, 1, 2, 4 — senior stakeholders should never wait
- D) 1, 3, 2, 4 — incident first, then the director before they escalate further

**Correct answer: B**

**Explanation:** Ranking by impact-weighted urgency: item 1 is a live service degradation with a decision only the change and release manager is positioned to make quickly, and minutes matter — it comes first, and the input may take ten focused minutes rather than the whole morning. Item 2 is next: an 11:00 CAB with unread High-risk submissions risks either rubber-stamping or deferring, both damaging to the board's credibility. Item 3 is a relationship that matters, but a two-line holding reply manages the expectation honestly at low cost, with the full conversation following the CAB. Item 4 has an end-of-day deadline and flexes around the rest. Option A puts meeting preparation ahead of a live incident; option C converts seniority into urgency; option D lets the director's impatience outrank governance duty. This tests spending scarce focused attention where the unique contribution is largest, while cheap communications keep the rest of the queue orderly.

**Question 5 (moderate) — Deduction through an interdependency chain**

Three releases are planned: the API gateway upgrade (G), the mobile app release (M), and the identity service update (I). Constraints: (i) M requires the new gateway features, so G must complete before M; (ii) the identity update changes an authentication interface that the current gateway cannot handle, but the upgraded gateway can — so I must not go live while the current gateway is in service; (iii) the mobile release team needs at least five working days of testing against the live upgraded gateway before M releases; (iv) I and G cannot be deployed in the same maintenance window, and windows occur weekly. If G deploys in window 1, what is the earliest window in which M can release, and where can I go?

- A) M in window 2; I in window 2
- B) M in window 2; I anywhere from window 2 onward
- C) M in window 3; I anywhere from window 2 onward
- D) M in window 3; I must wait until after M

**Correct answer: C**

**Explanation:** Working each constraint: five working days of testing against the live upgraded gateway consumes the gap between windows 1 and 2 entirely, so M cannot make window 2 and lands in window 3 at the earliest. I requires the upgraded gateway in service (true from window 1's completion onward), and constraint (iv) only forbids I sharing a window with G, so I is free from window 2 onward with no dependency tying it to M in either direction. Option D invents a dependency the constraints do not contain; options A and B compress M's testing week to nothing. This tests asking which constraints actually bind and which dependencies are merely assumed — a phantom dependency like option D's is exactly the kind that quietly adds weeks to real plans — and a strong candidate's answer may also note that I in window 2 puts two significant changes in consecutive weeks, which the constraints permit but which a good coordinator would weigh against support capacity.

**Question 6 (moderate) — Error checking a forward schedule of change**

Next week's forward schedule shows four approved changes:

| Change | Configuration items affected | Window | Back-out duration |
|---|---|---|---|
| CHG-201 | Database cluster DB-A | Tuesday 20:00–23:00 | 45 min |
| CHG-202 | Web tier, load balancer LB-1 | Tuesday 20:00–23:00 | 30 min |
| CHG-203 | Database cluster DB-A | Tuesday 21:00–22:00 | 20 min |
| CHG-204 | Load balancer LB-1 firmware | Wednesday 02:00–04:00 | 90 min |

Policy: changes affecting the same configuration item must not have overlapping windows. Which pair of changes presents the clearest policy conflict?

- A) CHG-201 and CHG-202
- B) CHG-201 and CHG-203
- C) CHG-202 and CHG-204
- D) CHG-203 and CHG-204

**Correct answer: B**

**Explanation:** Scanning for shared configuration items first, then testing windows: CHG-201 and CHG-203 both touch database cluster DB-A, and their windows overlap (21:00–22:00 sits wholly inside 20:00–23:00) — a direct breach, and a genuinely dangerous one, since two teams modifying one cluster simultaneously means a mid-window failure becomes unattributable. Option A pairs changes on different CIs in the same window, which the policy permits. Option C shares LB-1 but the windows do not overlap. Option D shares nothing. This tests conflict detection as a join across two dimensions — what is touched, and when — since schedules that look clean in either dimension alone can still collide in the intersection, exactly the kind of check that belongs in schedule review or automated against CMDB relationship data.

**Question 7 (moderate) — Pattern recognition in change outcome data**

Six months of change data, tabulated by requesting team and month:

| Team | Jan | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|
| Platform | 2 | 1 | 2 | 2 | 1 | 2 |
| Payments dev | 1 | 6 | 1 | 7 | 1 | 6 |
| Service desk | 1 | 1 | 2 | 1 | 1 | 1 |

The payments development team releases on a two-month cycle, with major releases landing in February, April, and June. Which interpretation best fits the data?

- A) The payments team's emergency changes spike in its release months, suggesting its releases are going out with defects that then require emergency fixes.
- B) The payments team is simply busier than other teams, so more emergencies are expected.
- C) Emergency change volumes are random; no pattern is present.
- D) The service desk causes the payments team's emergencies.

**Correct answer: A**

**Explanation:** Payments dev shows 6, 7, and 6 emergency changes in exactly the release months and 1 in every other month — a strong, consistent pattern locked to the release calendar across three cycles, while other teams sit flat, ruling out an organisation-wide cause. Option A names the mechanism the correlation most plausibly indicates. Option B fails because "busier" would elevate the baseline, not create a sawtooth synchronised to releases. Option C ignores a clean pattern. Option D has no support in the data. This is the problem management skill exactly as worded — initiate and monitor actions to investigate patterns and trends — and a strong candidate's answer notes that the finding points at preventative measures (release testing quality, staged rollout) rather than emergency-change scrutiny, since the emergencies are a symptom, and that the mature move is to take the pattern to the payments team as a shared problem rather than an accusation.

**Question 8 (moderate) — Applied problem solving: a CAB drowning in volume**

A weekly CAB reviews every normal change, currently around 40 per week. Meetings overrun by an hour, scrutiny of genuinely risky changes is rushed, and delivery teams complain of a two-week authorisation queue. Analysis shows 70% of submissions are low-risk, repeatable changes with a 99.5% success rate; 25% are medium-risk with 97% success; 5% are high-risk with 88% success. Which redesign most improves the process?

- A) Extend the CAB meeting by an hour so everything gets proper scrutiny.
- B) Reclassify the recurring low-risk changes as standard (pre-authorised) via documented templates, delegate medium-risk authorisation to the change manager with periodic sampling review, and focus the CAB on high-risk changes and on reviewing the delegation's outcome data.
- C) Split the CAB into two weekly meetings, halving each agenda.
- D) Require all submissions two weeks earlier so papers can be read in advance.

**Correct answer: B**

**Explanation:** The CAB's scarce resource is collective scrutiny, and the data shows it spent almost entirely where it adds least — 70% of the agenda carries a 0.5% failure rate, while the 5% that fails one time in eight gets rushed. Option B applies risk-proportionate governance at each tier: recurring low-risk changes become pre-authorised standard changes, removing 28 items from the agenda while keeping them recorded and controlled; medium-risk moves to delegated authority with sampling review; and the CAB's recovered time concentrates on the high-risk 5% plus oversight of the new tiers' outcome data. Options A and C treat the symptom while preserving the misallocation. Option D lengthens the very queue teams are complaining about. This tests risk-proportionate redesign, and a strong candidate's answer connects it to the "actively improving and optimising processes" clause of the change management skill.

**Question 9 (challenging) — Multi-constraint release coordination**

Four releases must be scheduled across four weekly windows (W1-W4): Finance (F), Portal (P), Data platform (D), and Security patch (S). Constraints: (i) D must precede P, because the portal release consumes the data platform's new API; (ii) P requires at least two full windows' gap after D for phased integration testing — so D in W1 permits P in W4 at the earliest; (iii) S must be deployed within the first two windows under security policy; (iv) the finance team is unavailable in W2, so F cannot be scheduled there; (v) exactly one release per window. Which schedule satisfies every constraint?

- A) W1: D, W2: S, W3: P, W4: F
- B) W1: S, W2: D, W3: F, W4: P
- C) W1: D, W2: S, W3: F, W4: P
- D) W1: F, W2: S, W3: D, W4: P

**Correct answer: C**

**Explanation:** Constraint (ii) demands two full windows between D and P; within four windows, the only placement achieving this is D in W1 and P in W4. Constraint (iii) then confines S to W1 or W2, and W1 is taken, so S goes in W2. F takes the only remaining window, W3, which also satisfies constraint (iv). The schedule is forced at every step: D, S, F, P — option C. Checking the alternatives confirms each breaks a constraint: option A puts P in W3 with only one clear window after D; option B leaves only one window's gap between D and P; option D pushes D to W3, requiring P beyond the calendar. This tests identifying the tightest constraint first and letting the remaining freedom collapse — the same order of operations that makes real release calendars tractable, and a strong candidate's answer may note the converse: when a stakeholder asks to move one release, tracing which binding constraint the move breaks shows the cost rather than merely asserting it.

**Question 10 (challenging) — Deduction from post-incident evidence**

At 03:10 the payments API began returning errors. Three changes completed earlier that night: CHG-301 (02:00, database index rebuild on the payments database), CHG-302 (02:30, TLS certificate renewal on the API gateway), CHG-303 (02:45, logging configuration change on an unrelated HR service). Evidence: the payments database's query times have been normal all night; the API gateway logs show successful TLS handshakes until 03:05, then handshake failures from external clients only — internal clients continue to succeed; the certificate deployed by CHG-302 included the server certificate but the accompanying intermediate certificate bundle was replaced with an incomplete one; external clients validate the full chain, while internal clients trust the server certificate directly. What is the best-supported conclusion?

- A) CHG-301 caused the failure — the database is the payments system's core.
- B) CHG-302 caused the failure — the incomplete intermediate bundle breaks chain validation for external clients, matching the observed internal/external split.
- C) CHG-303 caused the failure — it was the last change before the errors.
- D) The failure is external to all three changes, since handshakes succeeded until 03:05, after all changes completed.

**Correct answer: B**

**Explanation:** The discriminating observation is the split: external clients fail, internal clients succeed, on the same gateway. CHG-301 is directly cleared by normal query times all night, and option A substitutes the component's importance for evidence. CHG-303 touched an unrelated service, and "last change before the errors" is pure temporal proximity with no mechanism. Option D's argument dissolves once session behaviour is considered: existing handshakes continue on the old session until renegotiation, so a delay before failure is the mechanism's signature, not an alibi. Option B fits every observation: an incomplete intermediate bundle breaks exactly the chain validation external clients perform and internal clients skip, reproducing the split precisely. This is the incident management skill as worded — diagnose, investigate causes, find resolutions — and tests two transferable techniques: using a differential signature to eliminate candidates faster than any timeline, and asking of each candidate change "by what mechanism, and on what delay, would this produce exactly this failure?"

**Question 11 (challenging) — Reasoning about a risk assessment's logic**

A CAB submission assesses a change as follows: "Likelihood of failure: Low, because this upgrade has been performed successfully in the test environment and by two other government departments. Impact if failed: Low, because the change window is overnight and the service has few users at that hour. Overall risk: Low. Recommended approval route: expedited." Which is the most serious flaw in this assessment's reasoning?

- A) The likelihood assessment relies on evidence from environments that may not match production.
- B) The impact assessment measures the impact of a failure detected and contained within the window, but ignores the impact of a failure that persists or emerges into business hours — impact must be assessed on the credible worst case, not the convenient case.
- C) Two other departments is too small a sample to establish anything.
- D) Overnight windows are riskier because fewer staff are available.

**Correct answer: B**

**Explanation:** All four options contain something arguable; the question asks for the most serious flaw, meaning the one that breaks the assessment's structure. Option B does: the submission quietly substitutes "impact of a failure at the moment of implementation" for "impact of this change failing" — a failed overnight change whose effects surface at 09:00 lands on the full business day, and the overnight window's emptiness is irrelevant to that scenario. Since risk = likelihood × impact, an impact score assessed on the best-case failure mode understates overall risk by construction, and the error propagates into the recommended expedited approval route. Option A is a fair but weaker challenge — test-environment and other-department evidence is legitimate, merely imperfect. Option C overstates the weakness of two independent successful deployments. Option D is a reasonable operational observation but a situational one. This tests recognising structural optimism in a risk assessment — the question a chair should ask being "walk me through the worst credible failure mode and its business-hours impact" — rather than merely challenging individual inputs.

**Question 12 (challenging) — Integrated reasoning before a major go-live**

Three days before a major release, three artefacts arrive. The readiness report says all 214 test cases passed, but a footnote records that the performance test ran against a dataset one-tenth of production size "due to environment constraints". The service desk forecast, based on the last three major releases, predicts a 30–40% call spike in week one and notes the desk is already at 92% capacity. An email from the programme director states the go-live date is contractually committed, that the release has passed all tests, and that they expect confirmation of go-live at tomorrow's board. Which position best reflects sound reasoning across all three artefacts?

- A) Confirm go-live: 214 of 214 tests passed, and the contractual commitment settles the matter.
- B) Refuse go-live until performance testing is repeated at production scale, whatever the contractual position.
- C) Take to the board a conditional position: the functional evidence is strong, but the performance evidence does not cover production load and the support capacity forecast shows week one absorbing a 30–40% spike into an 8% margin — so present the residual risks with mitigation options and let the board decide with the risk visible.
- D) Confirm go-live but privately brief the service desk to expect a difficult week.

**Correct answer: C**

**Explanation:** The readiness report's headline is real functional evidence, but its footnote quietly voids the performance claim — a test at one-tenth scale establishes behaviour at one-tenth scale, so "all tests passed" is true in letter and misleading in substance. The desk forecast converts a vague worry into arithmetic: a 30–40% spike arriving into 8% headroom is an overload forecast. The director's email changes the cost of delay but nothing about the technical evidence. Option C is the only position that lets every artefact keep its true weight, neither suppressing the risk (as A and D do, in different ways) nor treating one residual risk as an absolute veto (as B does, ignoring that go/no-go on contractually committed releases is a board-level trade-off). This tests certifying what the evidence supports, presenting what it does not, pricing mitigations, and putting the residual trade-off where it belongs — a fair summary of change governance, since boards forgive risks they were shown and accepted, not risks that were footnotes.

### Administration tips

- **Score classification and rule-application items for mechanical checking**, including of options that look plausible on their face.
- **Watch for whether a candidate identifies the tightest constraint first** in multi-constraint scheduling items, rather than reasoning haphazardly.
- **Note whether a candidate reasons from mechanism and evidence rather than proximity or importance** in incident-deduction items.
- **Keep timing consistent** across candidates for this level.
- **Use the integrated reasoning item (Question 12) as debrief material.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that lets importance substitute for evidence** in incident-cause questions.
- **Missing double-counted or under-counted conflicts** in schedule-checking items.
- **Accepting headline numbers without their footnotes** as fully supporting a conclusion.
- **Crediting an answer that invents an unstated dependency.**
- **Treating over-classification as a harmless error**, when both directions of misclassification matter.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantitative material this role produces and consumes: change volumes and success rates, availability KPIs, incident metrics, capacity utilisation, trend data, and the business cases that justify process investment. It is not a mathematics examination — nothing beyond percentages, ratios, averages, rates, and disciplined table reading is required. What it measures is the quality of quantitative judgement: selecting the right figures, applying the right operation, and understanding what a result does and does not mean.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions, each presenting a table, chart, or short data scenario with four or five answer options. An on-screen calculator is normally permitted. Scoring is against a norm group at a comparable level; adaptive difficulty is common; accuracy is typically weighted more heavily than coverage.

For a change and release manager, numeric reasoning is the evidence layer of the role. Authorisation decisions rest on failure rates and their scopes; managing service components against KPIs means converting targets like 99.9% into the minutes they actually permit; process improvements live or die by whether the case can be quantified. The questions below rehearse precisely these situations, and every worked answer shows the arithmetic step by step. At this level, the harder questions are rarely hard because the calculation is complex — they are hard because the scenario offers a plausible wrong number.

### How this assessment maps to the role

The numeric skills tested map directly to the named skills in the role's capability framework:

- **Percentages, rates, and their bases** map to the **Change management** skill and the authorisation duty.
- **Availability arithmetic** maps to the **Availability and capacity management** skill.
- **Weighted averages and aggregation** map to reporting duties and the **Service focus** skill.
- **Trend analysis and projection** maps to the **Problem management** skill and capacity planning for the change process itself.
- **Cost-benefit and payback reasoning** maps to the duty to actively improve and optimise change processes.
- **Reading data about users and services** maps to the **User focus** skill.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Quarterly change success rate**

Last quarter, 480 changes were implemented. 456 succeeded; the rest failed or were backed out. What was the quarterly change success rate?

- A) 92%
- B) 94%
- C) 95%
- D) 96%

**Correct answer: C**

**Explanation:** Success rate = 456 ÷ 480 = 95%. A cross-check from the failure side confirms it: 24 ÷ 480 = 5%, and 100% − 5% = 95%. A strong candidate's answer may note that the complement (24 failed changes) is usually the more informative figure for governance purposes, since improvement work targets failures — a countable, categorisable population — while headline success rates mainly reassure.

**Question 2 (easy) — Average CAB throughput**

Over four consecutive weekly CAB meetings, the board considered 38, 42, 35, and 45 changes. What was the average number of changes considered per meeting?

- A) 39
- B) 40
- C) 41
- D) 42

**Correct answer: B**

**Explanation:** Mean = (38 + 42 + 35 + 45) ÷ 4 = 160 ÷ 4 = 40. A sense-check confirms 40 sits centrally within the 35–45 range. A strong candidate's answer may note that an average this high is itself a governance finding: if each item deserving scrutiny needs even three minutes, that is two hours of pure item time — the quantitative predicate for process redesigns such as standard-change reclassification.

**Question 3 (easy) — Change mix ratio**

Last month's 400 changes split across standard, normal, and emergency categories in the ratio 12 : 7 : 1. How many emergency changes were there?

- A) 16
- B) 20
- C) 24
- D) 28

**Correct answer: B**

**Explanation:** Total parts = 20; one part = 400 ÷ 20 = 20; emergency = 1 part = 20. Verifying the full split (standard 240, normal 140, emergency 20) reproduces the total. This tests ratio reasoning, and a strong candidate's answer may note that emergencies at 5% of volume is worth tracking as a KPI in its own right, since a rising ratio signals either genuine instability or teams finding the emergency route easier than the process.

**Question 4 (moderate) — Availability target in minutes**

A service has a 99.9% monthly availability KPI. Using a 30-day month (43,200 minutes), how many minutes of downtime does the KPI permit, and did a month containing 65 minutes of downtime breach it?

- A) 43.2 minutes permitted; 65 minutes breached the KPI
- B) 432 minutes permitted; 65 minutes met the KPI
- C) 43.2 minutes permitted; 65 minutes met the KPI
- D) 4.3 minutes permitted; 65 minutes breached the KPI

**Correct answer: A**

**Explanation:** Permitted unavailability = 0.1% of 43,200 = 43.2 minutes. Comparing, 65 > 43.2, so the month breached the KPI by 21.8 minutes. Option B misplaces the decimal (432 minutes corresponds to 99%); option D overshoots the other way. This conversion should be reflexive for a strong candidate, in both directions, since it prices decisions: a change window taking a 99.9% service down for 30 minutes has consumed 69% of the month's entire error budget before any unplanned incident occurs.

**Question 5 (moderate) — Percentage points versus percent**

The change success rate rose from 92% in Q1 to 95% in Q2. Which statement describes the improvement accurately?

- A) Success improved by 3%.
- B) Success improved by 3 percentage points, which is a relative improvement of about 3.3% — and a reduction in the failure rate of 37.5%.
- C) Success improved by 3 percentage points, which is the same thing as 3%.
- D) The failure rate fell by 3%.

**Correct answer: B**

**Explanation:** The absolute change is 3 percentage points; the relative change in success rate is 3 ÷ 92 ≈ 3.3%; and the failure rate fell from 8% to 5%, a relative reduction of 3 ÷ 8 = 37.5%. Option B states all three correctly and keeps them distinct. Options A and C blur points with percent. Option D commits the blur in its most consequential direction — "failures down 3%" would mean 8% dropping to 7.76%, when the truth is a 37.5% collapse. This tests keeping percentage points and percent distinct, a distinction that appears at senior level because getting it wrong in a real report is both common and quietly reputation-damaging.

**Question 6 (moderate) — Failure rates from a mixed table**

Last quarter's changes by category:

| Category | Changes implemented | Failed |
|---|---|---|
| Standard | 300 | 3 |
| Normal | 150 | 9 |
| Emergency | 30 | 6 |

Which category had the highest failure rate, and what was it?

- A) Normal — 6%
- B) Emergency — 20%
- C) Standard — 1%
- D) Emergency — 6%

**Correct answer: B**

**Explanation:** Computing each rate on its own base: standard 1%, normal 6%, emergency 20%. Emergency is highest even though normal produced the most failures in absolute terms (9). Option A rewards the eye drawn to the biggest failure count; option D pairs the right category with a rate computed on someone else's base. This tests distinguishing "where is risk concentrated per change?" from "where does failure volume come from?", and a strong candidate's answer may also note the arithmetic fragility of small bases — emergency's 20% rests on just 6 failures in 30 changes, so it should be quoted with its counts.

**Question 7 (moderate) — Combining success rates across quarters**

In Q1, 400 changes were implemented with a 92% success rate. In Q2, 600 changes were implemented with a 95% success rate. What was the success rate across the half-year?

- A) 93.5%
- B) 93.8%
- C) 94.0%
- D) 94.2%

**Correct answer: B**

**Explanation:** Q1 successes = 368; Q2 successes = 570; combined = 938 ÷ 1,000 = 93.8%. The unweighted average (93.5%, option A) understates performance because it gives the smaller, weaker quarter equal say. This tests weighting by volume rather than averaging percentages directly, and a strong candidate's answer notes that whichever way the unweighted error points, someone will have an interest in preferring it — reliably reconciling aggregates to raw counts is what makes reported numbers trustworthy without checking.

**Question 8 (moderate) — Release window capacity**

An organisation runs four release windows per month, and operational policy caps each window at three releases. Next month's demand is 14 releases. What is the position?

- A) Capacity is 12 releases; demand exceeds it by 2, so either 2 releases must move to the following month or an additional window must be agreed.
- B) Capacity is 12 releases; at 14 demanded, utilisation is 86%, which is acceptable.
- C) Capacity is 16 releases; demand fits with 2 spare.
- D) Windows can each take a fourth release, so demand fits exactly.

**Correct answer: A**

**Explanation:** Monthly capacity = 4 × 3 = 12; demand exceeds it by 14 − 12 = 2. Option B miscomputes utilisation (14 ÷ 12 = 117%, not 86%, which inverts the ratio). Option C multiplies incorrectly. Option D simply repeals the policy under pressure. This tests recognising a genuine overflow and its two legitimate resolutions — deferral or an agreed capacity exception — and a strong candidate's answer arrives with a prioritisation proposal attached (which releases have least date-sensitivity, and whether the overflow is a spike or a trend), since capacity arithmetic is trivial but capacity judgement is the job.

**Question 9 (challenging) — Payback period for process automation**

An organisation implements 200 changes per quarter with a 5% failure rate. Each failed change costs an average of £2,500 in investigation, rework, and lost productivity. A proposed automated testing and deployment pipeline costs £120,000 and is credibly projected to reduce the failure rate to 2%. Ignoring other benefits, what is the payback period?

- A) 4 quarters
- B) 6 quarters
- C) 8 quarters
- D) 10 quarters

**Correct answer: C**

**Explanation:** Current failures = 10/quarter, costing £25,000; projected failures = 4/quarter, costing £10,000; quarterly saving = £15,000; payback = £120,000 ÷ £15,000 = 8 quarters. This tests the calculation itself, and a strong candidate's answer adds the judgement around it: the case is sensitive to the projected failure rate genuinely being achieved, and "ignoring other benefits" means the two-year payback on failure cost alone likely understates the true case — stating the sensitivity explicitly is the honest way to present a business case, and converting a failure rate into pounds per quarter is one of the most persuasive moves available when arguing for process investment.

**Question 10 (challenging) — Projecting CAB load against capacity**

CAB submissions have grown linearly for six months and now stand at 40 per week, rising by a steady 6 submissions per month. The board's effective capacity for proper scrutiny is 70 submissions per week. If the trend continues, in how many months will weekly submissions first exceed the board's capacity?

- A) 4 months
- B) 5 months
- C) 6 months
- D) 8 months

**Correct answer: C**

**Explanation:** Submissions after n months = 40 + 6n; exceeding 70 requires n > 5, so month 6 is the first breach (month 5 gives exactly 70, at capacity, not over it). Option B is the off-by-one error the wording is built to catch. This tests exact arithmetic against a strict inequality, and a strong candidate's answer notes that month 5's "at capacity" is the real deadline, since a board running at 100% has no headroom for a spike, and that the projection should prompt investigating whether growth is structural (new services onboarding) or a symptom of misclassification (low-risk changes that belong in a standard category).

**Question 11 (challenging) — Recovering an SLA mid-quarter**

The target is 85% of change-related P2 incidents resolved within four hours. So far this quarter, 45 such incidents have occurred, 36 resolved within four hours. If incidents keep occurring, what is the minimum number of consecutive future incidents that must all be resolved within four hours to bring the quarterly figure to at least 85%?

- A) 3
- B) 9
- C) 12
- D) 15

**Correct answer: D**

**Explanation:** Current position is 36 ÷ 45 = 80%. Solving (36 + n) ÷ (45 + n) ≥ 0.85 gives n ≥ 15; checking n = 15 gives 51 ÷ 60 = 85% exactly. Option A treats the gap as "3 more of the original 45" without accounting for the fact that future incidents also enlarge the denominator. This tests recognising denominator drag — recovering a ratio mid-period is always harder than the raw gap suggests — and a strong candidate's answer notes the management implication: reporting "we need 15 consecutive in-target resolutions" is far more informative than "five points behind", and misses banked early in a period are nearly irrecoverable later, arguing for early escalation of a slipping SLA.

**Question 12 (challenging) — Compound reduction toward a target**

An improvement programme aims to reduce emergency changes by 20% per quarter, compounding, from a current level of 50 per quarter. The target is to reach 25 or fewer per quarter. If the programme achieves exactly 20% reduction each quarter, during which quarter's result will the target first be met?

- A) The 2nd quarter
- B) The 3rd quarter
- C) The 4th quarter
- D) The 5th quarter

**Correct answer: C**

**Explanation:** Compounding at 80% each quarter: 40, 32, 25.6, 20.48 — the target is first met in quarter 4. The tempting error is linear thinking (50 → 40 → 30 → 20, done in quarter 3), but percentage reductions compound on a shrinking base, so each quarter removes fewer changes than the last. Quarter 3's 25.6 sits just outside the "25 or fewer" boundary. This tests precision at boundaries and stepping through compounding periods explicitly rather than extrapolating the first step, and a strong candidate's answer may note the communications implication: stakeholders who cheer the first quarter's ten-change reduction should be told in advance that the same 20% yields fewer changes as the base shrinks.

### Administration tips

- **Drill whether a candidate names the base before dividing** — out of which changes, which incidents, which quarter.
- **Score for aggregation through raw counts** rather than averaging percentages directly.
- **Watch for denominator effects** in ratio-recovery and utilisation questions.
- **Note whether a candidate respects exact boundaries** — "exceed", "at least", "25 or fewer" are contractual wording, and so are the equivalent SLA terms.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Accepting a direct average of percentages across unequal groups.**
- **Conflating percentage points with percent** when scoring Question 5-style items.
- **Reading counts as rates**, or vice versa, without checking which the question asks for.
- **Missing a misplaced decimal in availability arithmetic.**
- **Rewarding linear reasoning about a compounding process.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and reasons about the written material this role runs on: change and release policies, audit findings, major incident reviews, service standards, board papers, and correspondence from stakeholders at every level. The dominant question format presents a short passage and a statement, asking whether it is **True** (supported), **False** (contradicted), or **Cannot say** (insufficient information). Complementary formats test inference, unstated assumptions, main-point identification, and judgement about clear, audience-appropriate writing.

The typical format is an online, timed test of 15 to 25 minutes with 15 to 30 questions. The governing discipline: answer from the passage alone. For a change and release manager, the stakes of precise reading are unusually concrete — the authority exercised is written authority, the evidence weighed is written evidence, and the words produced carry governance weight. At this level, expect the harder questions to turn on scope, modality, and attribution: who exactly a rule covers, how strong an obligation actually is, and whether a claim is the passage's assertion or a quoted party's opinion.

### How this assessment maps to the role

The verbal skills tested map directly to the named skills in the role's capability framework:

- **Precise comprehension of policy and delegation** maps to the **Change management** skill and the authorisation duty.
- **True/False/Cannot-say discipline** maps to the **Asset and configuration management** advocacy and evidence-weighing duties.
- **Inference and assumption identification** maps to the **Problem management** skill.
- **Main-point and audience judgement** maps to the **Community collaboration** skill and reporting duties.
- **Reading user evidence accurately** maps to the **User focus** skill.
- **Reading standards vocabulary precisely** maps to the **Service focus** skill and **Continuity management** knowledge.

### Practice questions

For each True/False/Cannot-say question, judge the statement strictly against the passage.

**Passage 1 (for Questions 1–3)**

*Extract from the departmental change policy:* "The change and release manager may authorise normal changes assessed as Low or Medium risk. High-risk normal changes require authorisation by the Change Advisory Board, which is quorate when at least four voting members are present, including a representative of service operations. The change and release manager chairs the Board but does not hold a vote, except that in the event of a tied vote the chair holds the casting vote. Where a change affects services subject to the financial services code, the Board must additionally receive written risk acceptance from the relevant service owner before authorisation."

**Question 1 (easy) — True/False/Cannot say**

Statement: "The change and release manager may authorise a Medium-risk normal change without the Board."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage's first sentence grants exactly this. Nothing elsewhere qualifies the grant for ordinary cases — the financial-services condition attaches to Board authorisation of affected services, not to this delegation. When a statement restates a granted permission at or below its stated scope, the answer is True. This tests verifying a claim against the operative sentence rather than a general impression of what the role can do.

**Question 2 (easy) — True/False/Cannot say**

Statement: "The change and release manager votes on High-risk changes only when the Board's vote is tied."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage states the chair "does not hold a vote, except that in the event of a tied vote the chair holds the casting vote" — the statement expresses the same rule from the other direction. This tests reading exception clauses as part of the sentence they modify, rather than as isolated facts — a skimmer catching only the general rule or only the exception would answer differently, and both would misstate the rule.

**Question 3 (easy) — True/False/Cannot say**

Statement: "A Board meeting with five voting members present is quorate."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Quoracy has two conditions: at least four voting members, and inclusion of a service operations representative. Five members satisfies the first condition, but the statement says nothing about whether service operations is among the five, so it is Cannot say. This tests the compound-condition trap — a statement satisfying the memorable numeric condition while remaining silent on the qualitative one, exactly the shape real quoracy disputes take.

**Passage 2 (for Questions 4–5)**

*Extract from a major incident review:* "The incident began at 09:14 when the case management service became unresponsive. The service had received a database change the previous evening, authorised through the emergency route after a capacity alert. The review found that the change itself was implemented as specified. However, the post-implementation verification checked only that the database restarted successfully; it did not include the application-level checks specified in the service's runbook, which would likely have detected the misconfigured connection pool before business hours. The review also notes that this is the third incident in four months in which post-implementation verification was incomplete. The incident manager has stated her view that verification steps are routinely skipped when changes complete late at night."

**Question 4 (moderate) — True/False/Cannot say**

Statement: "The review established that verification steps are routinely skipped when changes complete late at night."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage attributes the "routinely skipped" claim to the incident manager as "her view", stated to the review; the review itself establishes narrower facts — this verification was incomplete, and it is the third such case in four months. Three instances is consistent with the view but does not establish "routinely", and a stated view is not a review finding. This tests tracking attribution — the difference between "the review found X" and "the incident manager believes X" determines what action the evidence licenses.

**Question 5 (moderate) — Inference from the passage**

Based on Passage 2, which is the safest inference?

- A) The emergency change should not have been authorised.
- B) Had the runbook's application-level checks been performed, the misconfiguration would probably have been found before business hours.
- C) The database administrator was negligent.
- D) The emergency change caused the capacity alert.

**Correct answer: B**

**Explanation:** Option B restates, with the same hedge, what the review itself concluded — the safest inference available, since it infers nothing the text has not already weighed. Option A attacks the authorisation, but the passage supports the opposite lean: the change responded to a genuine alert and was implemented as specified — the failure lay in verification. Option C names an individual and a culpability standard the passage never approaches; "verification was incomplete" is a process finding, not a personal one. Option D inverts the timeline. This tests inference that tracks the evidence's own weight and direction, neither exceeding nor falling short of what the text supports.

**Question 6 (moderate) — Must, should, and may in a release standard**

The release standard states: (i) "Releases to production **must** have a documented and tested back-out plan." (ii) "Releases **should** be deployed using the automated pipeline; teams deploying manually **must** record the justification in the change record." (iii) "Teams **may** bundle related low-risk changes into a single release." A team deployed manually with a tested, documented back-out plan, bundling three related low-risk changes, and recorded no justification for the manual deployment. Which requirements were breached?

- A) (i) and (ii)
- B) (ii) only — specifically its second clause
- C) (ii) and (iii)
- D) None — manual deployment is permitted, so no justification was needed

**Correct answer: B**

**Explanation:** (i) is satisfied by the documented, tested back-out plan. (iii) is a permission, breached by nothing. (ii) is compound — a "should" (prefer the pipeline) followed by a conditional "must" (manual deployment triggers a mandatory justification record). The manual deployment itself is not a breach, but the missing justification record breaches the conditional must exactly. Option D deletes the mechanism that makes the "should" safe. This tests reading a compound modal clause precisely — the recommendation-plus-mandatory-record pattern is one worth recognising, since it outperforms both rigid musts and bare shoulds.

**Question 7 (moderate) — Audience-appropriate writing**

A High-risk change was deferred by the CAB pending a revised impact assessment. The delivery team's programme manager, not a technical specialist and anxious about the date, must now be informed. Which message is best?

- A) "The Board resolved pursuant to paragraph 4.2 of the change policy that the submission be remitted to the originating team for elaboration of the impact assessment artefacts, whereafter resubmission may be entertained."
- B) "Your change was rejected because the impact assessment wasn't good enough. Resubmit when it meets the standard."
- C) "The Board deferred the change — it isn't rejected. We need one thing before approving it: the impact assessment doesn't yet cover the effect on the payments interface, and for a High-risk change we can't approve without that. If your team can add that analysis, we can take it at next Wednesday's Board — which still supports your go-live window. Sasha on my team can walk your analysts through what's needed."
- D) "Following rigorous multilateral risk-based deliberations, the change governance forum has determined that additional assurance artefacts are required to derisk the submission trajectory going forward."

**Correct answer: C**

**Explanation:** Option C gives the decision's actual meaning, the reason, the path forward, and the date implication, in plain language — and corrects the reader's likely worst fear explicitly ("deferred — not rejected"), converting the gap into a concrete, resourced next step. Option A is legalese that transmits procedure instead of meaning. Option B is accurate but assigns failure without direction and states something factually wrong. Option D is management fog. This tests writing decision, reason, path, date, and help in the reader's vocabulary — deferral messages are where a chair earns either partners or adversaries.

**Passage 3 (for Questions 8–9)**

*Extract from a user research summary attached to a CAB submission:* "We interviewed 12 caseworkers and observed 8 processing sessions across two regional offices. Participants consistently described the current release communications as 'arriving too late to plan around'. Seven of the twelve interviewees said they had missed at least one release notice entirely in the past year. Observed workarounds included teams maintaining their own unofficial release calendars compiled from corridor conversations. We recommend release notices be published at least ten working days before implementation, and that a single authoritative release calendar be made available to service teams. We note our sample was drawn from the two offices with the highest caseloads, and results may not generalise to smaller sites."

**Question 8 (moderate) — True/False/Cannot say**

Statement: "A majority of the interviewed caseworkers reported missing at least one release notice in the past year."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Seven of twelve interviewees reported missing at least one notice, and seven is a majority of twelve, at the same scope the passage uses — the interviewed caseworkers, not caseworkers generally. This tests holding scope precisely: "a majority of caseworkers miss release notices" (dropping the sample scope) would be Cannot say, given the passage's own caution that results "may not generalise". A strong candidate's answer notes that the research summary itself models the honesty the test rewards, stating its numbers, scope, and limits together.

**Question 9 (challenging) — Identifying the unstated assumption**

The research's recommendation moves from "notices arrive too late to plan around" to "publish notices at least ten working days before implementation". Which unstated assumption does the recommendation most depend on?

- A) Ten working days is enough lead time for teams to plan around a release.
- B) Caseworkers dislike change communications in general.
- C) Smaller sites do not need release notices.
- D) The unofficial calendars are more accurate than official communications.

**Correct answer: A**

**Explanation:** The evidence establishes a problem of insufficient lead time; the recommendation prescribes a specific quantity. The unstated bridge is that the prescribed quantity actually solves the established problem — nothing in the findings derives the ten-day figure. Option B contradicts the evidence, since building unofficial calendars demonstrates demand for information, not aversion. Option C misreads the generalisation caveat. Option D is a distractor about a detail unrelated to the argument's logic. This tests spotting a recommendation bridge that has no support — the highest-value question a reader can ask being "what tells us ten days is the right number?"

**Question 10 (challenging) — Reconciling policy with an audit finding**

Document 1, the change policy: "Emergency changes must be reviewed retrospectively at the next CAB meeting following implementation." Document 2, an internal audit report: "Of 24 emergency changes sampled from the past year, 21 were recorded as reviewed at a subsequent CAB. In 9 of those 21 cases, the review occurred two or more CAB meetings after implementation. Three changes had no recorded review." Which statement do the two documents, taken together, best support?

- A) The retrospective review requirement was met in 21 of 24 sampled cases.
- B) The requirement was fully met in at most 12 of the 24 sampled cases, since reviews later than the next meeting do not satisfy "at the next CAB meeting", and three had no review at all.
- C) The policy's review requirement is impractical and should be relaxed.
- D) The nine late reviews were caused by CAB agenda overload.

**Correct answer: B**

**Explanation:** "Reviewed at the next CAB meeting" is a deadline, not merely an event — a review two or more meetings late happened but did not happen when required. Counting against that standard: 3 never reviewed, 9 reviewed late, leaving at most 12 whose reviews were not identified as late — the defensible ceiling for compliance. Option A adopts the audit's looser recording category ("reviewed at a subsequent CAB") as if it satisfied the policy's stricter requirement. Options C and D leap past the evidence into recommendations and causes the documents do not support. This tests measuring compliance against the rule's own wording rather than a looser reporting proxy.

**Question 11 (challenging) — Main point of a passage**

*Extract from a service management board paper:* "Change volume has doubled in eighteen months as legacy services migrate to continuous delivery practices. The change process, designed for a monthly release rhythm, now processes daily submissions through weekly governance. Success rates remain high at 96%, but authorisation lead time has become the top complaint in delivery team surveys, and two programmes have documented instances of batching unrelated changes into single submissions to reduce governance overhead — a practice that increases the blast radius of any failure. We propose a differentiated model: automated pre-authorisation for changes meeting defined low-risk criteria with full audit logging, retained board scrutiny for high-risk changes, and quarterly review of the criteria themselves against outcome data. The alternative — scaling the current process by adding meetings — addresses throughput but not the underlying mismatch between governance rhythm and delivery rhythm."

Which sentence best expresses the paper's main point?

- A) Change success rates remain high, so the current process is working and complaints about lead time are secondary.
- B) Delivery teams are behaving badly by batching changes and should be corrected.
- C) The change process's rhythm no longer matches the delivery rhythm it governs, and the remedy is risk-differentiated governance rather than more of the current governance.
- D) Continuous delivery practices are incompatible with change governance.

**Correct answer: C**

**Explanation:** The paper's structure — cause, symptom set (with batching read as a rational response, not misconduct), the trap reading dismissed (success rate as evidence of health), the proposal, and the explicit rejection of the scaling alternative — is captured by option C's diagnosis-plus-remedy framing. Option A adopts the very reading the paper pre-empts. Option B moralises what the paper analyses as process friction. Option D overshoots into a claim the paper's own proposal refutes. This tests holding a document's full argumentative shape, including what it argues against, rather than latching onto a single striking statistic.

**Question 12 (challenging) — True/False/Cannot say with layered scope**

*Passage:* "Under the revised framework, all High-risk changes to Gold-tier services require a completed service continuity impact statement before CAB submission. Since the framework's introduction in April, every High-risk change submitted to the CAB has included the statement. Two High-risk changes to Gold-tier services were implemented in May through the emergency route."

Statement: "Since April, every implemented High-risk change to a Gold-tier service has had a completed service continuity impact statement."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The rule attaches the requirement to CAB submission; the compliance report covers CAB submissions; but two High-risk Gold-tier changes went through the emergency route, which the passage does not describe the requirements of. The statement claims universal coverage of implemented changes, while the passage supports it only for the submitted ones and is silent on the emergency pair — Cannot say. This tests recognising a rule scoped to one route, a compliance measure scoped to the same route, and a second route through which the same class of change travels unmeasured — the shape real assurance gaps take, where "100% compliance" is true of the monitored path while the unmonitored path carries the risk.

### Administration tips

- **Score for whether a candidate tracks attribution** — passage author, review finding, or quoted individual's view.
- **Watch for whether a candidate reads exceptions as part of their governing sentence.**
- **Note whether a candidate checks compound conditions completely** rather than stopping at the memorable half.
- **Score scope-holding explicitly** — sample versus population, submitted versus implemented, monitored route versus all routes.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Crediting an answer drawn from operational knowledge** rather than the passage.
- **Missing when a candidate launders a quoted view into a finding.**
- **Accepting a measured proxy as if it satisfied the rule's actual wording.**
- **Rewarding loose reading of must, should, and may.**
- **Accepting a universal claim supported only by route-scoped evidence.**
- **Rewarding an answer built on a striking statistic** in main-point questions where it is a decoy.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to identify the most effective response — or the least effective, or a rating or ranking of all the options. It contains no calculations and no passages; it measures professional judgement: how a candidate weighs service risk against delivery pressure, when to hold a decision and when to escalate or delegate it, how they handle seniority, conflict, error, and their own accountability, and how they develop the people and processes around them.

The typical format is an online assessment of 20 to 40 minutes with 10 to 20 scenarios, usually untimed or generously timed. Options are engineered: alongside the strongest response there is typically a near-miss that skips one essential element, an avoidance option dressed as diplomacy, and an overreaction dressed as decisiveness. Scoring is keyed by experienced practitioners and calibrated to level — at this level, the scored behaviours include exercising authority genuinely held, owning issues until resolved or properly handed over, protecting governance under pressure from above as well as below, and improving systems rather than just resolving instances. The lone-hero answer scores poorly, but so does over-escalation: this role is the escalation point, and sending upward what it exists to decide reads as abdication.

The failure modes this assessment probes are behavioural, not technical — folding under deadline pressure, applying process rigidly until delivery teams route around it, chairing a board where only the loudest voices shape risk decisions, or quietly reallocating blame after a failure. Each can coexist with excellent technical knowledge, and each corrodes exactly what the role exists to protect.

### How this assessment maps to the role

The judgement dimensions map directly to the named skills in the role's capability framework:

- **Decision ownership under pressure** maps to the role as decision-maker for all technical changes and escalation point, and to the **Ownership and topic** skill.
- **Risk-proportionate governance behaviour** maps to the **Change management** skill.
- **Incident and problem judgement** maps to the **Incident management** and **Problem management** skills.
- **Developing people and teams** maps to the **Community collaboration** skill.
- **Chairing and inclusion** maps to the same skill applied to the board led by this role.
- **Serving users through governance** maps to the **User focus** and **Service focus** skills.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The corridor authorisation**

An hour before the CAB, a programme director intercepts the candidate: "The migration change on today's agenda — I need it approved. The programme board meets tomorrow and I want to report it green. The impact assessment's a bit thin, I know, but my team knows this system inside out. Can we just call it approved and tidy the paperwork after?" The change is High-risk and the impact assessment omits the downstream effects on two dependent services. What is the most effective response?

- A) Agree — the director carries the delivery accountability, and their team's expertise is genuine.
- B) Explain that High-risk changes are authorised by the CAB and this one will be, today, on its merits — the thin assessment is the obstacle, so offer the fastest legitimate route: their team supplies the missing dependency analysis before the meeting, or the Board conditions approval on it being completed before implementation.
- C) Refuse to discuss changes outside the CAB and end the conversation.
- D) Take the change off today's agenda to avoid the pressure influencing the Board.

**Correct answer: B**

**Explanation:** The director does not need a corridor approval — they need a green status by tomorrow, and a legitimate path to it may exist. Option B holds the constitutional line plainly (High-risk authorisation belongs to the Board; a chair cannot "call it approved") and converts pressure into process: the missing dependency analysis might be producible in an hour, or conditional approval could fence the gap explicitly. Option A dissolves the CAB's purpose at the first application of seniority. Option C wins the exchange and loses the relationship, teaching senior stakeholders the process is a wall. Option D punishes the change for its sponsor's behaviour. This tests naming the boundary once, then spending energy on the legitimate fastest path.

**Question 2 (easy) — The disengaged Board member**

The service operations representative on the CAB — whose presence is required for quoracy — has for a month joined late, kept their camera off, visibly multitasked, and voted with the majority on every item without comment. Operations context has been missing from several risk discussions as a result. What is the most effective response?

- A) Speak with them privately: share what has been observed, ask what is competing for their time, and make the case for what the Board loses without operations' voice — exploring fixes, whether that is agenda timing, sharper operations-relevant papers, or a properly briefed alternate.
- B) Raise their disengagement at the next CAB so the whole Board can address it.
- C) Ask their line manager to nominate someone more committed.
- D) Accept it — quoracy is technically satisfied, and their vote is recorded.

**Correct answer: A**

**Explanation:** Month-long disengagement from a previously functioning member usually has a cause, and option A goes to the source privately, leading with observation rather than accusation, treating it as a solvable design problem. Option B converts a private performance issue into public shaming. Option C escalates over the person's head before speaking to the person. Option D is the trap the scenario is built on: quoracy is the constitutional minimum, not the purpose, and a required representative voting silently deletes the substance of governance while satisfying its letter. This tests recognising the difference between a quorate meeting and a functioning one, and treating disengagement as a team-dynamics problem to rectify — the community collaboration skill applied to a board a chair owns.

**Question 3 (easy) — The sanitised failure review**

A change failed last week, causing a two-hour outage. The delivery team's post-implementation review attributes the failure entirely to "an unforeseeable infrastructure fault" — but the incident timeline shows the team received a failing pre-deployment health check and proceeded anyway. What is the most effective response?

- A) Accept the review — the team is otherwise strong, and one generous review preserves the relationship for future candour.
- B) Annotate the review with the health-check evidence and circulate the corrected version to the CAB.
- C) Go back to the team's lead with the timeline evidence, ask them to reconcile the review with it, and be clear the review that reaches the Board must account for the health-check decision — while signalling that the Board's interest is the decision process, not punishment.
- D) Present both versions to the CAB and let the Board decide which to believe.

**Correct answer: C**

**Explanation:** The review cannot stand as written, but the correction should come from the team, prompted by evidence, not imposed by the chair — the lead may also hold context the reviewer lacks, and the explicit non-punitive framing is what makes honesty affordable for the future. Option A purchases the opposite of future candour by accepting a fiction. Option B gets the facts right and the ownership wrong, arriving at the Board with the team blindsided. Option D outsources to the Board a reconciliation that is the chair's preparatory job. This tests sequencing — evidence to the team first, corrected record to the Board second — with the escalation path held in reserve.

**Question 4 (moderate) — The emergency route regulars**

Monthly data shows one delivery team now raises 60% of its changes through the emergency route, against an organisational average of 5%. Sampling their recent emergency changes shows most cite deadlines rather than incidents or urgent risk. The team's head is influential and their programme is genuinely under delivery pressure. What is the most effective response?

- A) Reject their next several emergency changes to send a clear signal.
- B) Tighten the emergency criteria and require personal pre-approval for all emergency changes organisation-wide.
- C) Take the data to the team's head as a shared problem: show the pattern, distinguish genuine emergencies from deadline pressure, understand why the normal route is failing them — then fix both sides, agreeing what qualifies as an emergency while addressing whatever lead-time or scheduling friction is driving the workaround.
- D) Report the team's non-compliance to the service management board with a recommendation for formal censure.

**Correct answer: C**

**Explanation:** A twelvefold deviation from the organisational average is rarely pure delinquency — it usually reflects a genuine delivery constraint colliding with a process not serving it. Option C investigates and fixes both sides: the data opens the conversation unaccusatorially, the legitimate emergencies are separated from the deadline-driven ones, and the normal route's cost to this team is examined directly. Option A punishes changes rather than behaviour, risking services for pedagogy. Option B over-corrects, taxing every compliant team and inserting a bottleneck into the route designed for speed. Option D reaches for formal machinery before the direct conversation. This tests reading a workaround as user research about the process — teams tell a manager where governance fails them by where they route around it.

**Question 5 (moderate) — Two service owners, one window**

The payments service owner and the case management service owner both require the final release window before the financial year end — payments for a regulatory compliance change with a fixed statutory date, case management for a director-backed performance improvement. Both have escalated separately, each insisting their release cannot move. The window genuinely cannot hold both. What is the most effective response?

- A) Award the window to payments — regulatory deadlines outrank performance improvements — and inform case management of the decision.
- B) Convene both owners, make the decision criteria explicit, test whether the constraint itself can move, and if not, decide for payments transparently, with case management's release protected in the first available window and the rationale recorded.
- C) Escalate the conflict to the two owners' common director for a decision.
- D) Give the window to whichever release was scheduled first, as a neutral rule.

**Correct answer: B**

**Explanation:** The substantive ranking (statutory date beats a promised improvement) is shared by options A and B; the test is decision craft. Option B decides in the open with both parties hearing the same criteria, attacks the constraint before accepting the trade-off (an extra window, a split release, or a descoped deployment might dissolve the conflict), prices the loss with a scheduled remedy, and keeps the decision where the coordinating-interdependencies duty places it. Option C exports a decision the role is equipped and mandated to make. Option D is indifferent to consequence. This tests deciding transparently, with the constraint tested and the loss priced, rather than merely reaching the correct ranking privately.

**Question 6 (moderate) — A delegate's error**

A capable senior analyst was delegated Medium-risk authorisations while a vacancy is covered. Reviewing the week's decisions reveals they authorised a change that policy required to be referred upward, since it touched a financial-code service capping delegated authority at Low risk. The change was implemented successfully three days ago. What is the most effective response?

- A) Since the change succeeded, note it privately and sharpen the delegation letter for the future.
- B) Withdraw the delegation — the analyst has shown they cannot be trusted with it yet.
- C) Record the authorisation breach honestly, walk through it with the analyst as a learning review, fix the system gap that let one oversight become an implemented change, retain the delegation with the added safeguard, and report the exception through the appropriate line transparently.
- D) Have the analyst self-report to the audit team to underline the seriousness.

**Correct answer: C**

**Explanation:** Success is irrelevant to whether this is a genuine authorisation breach, and option A quietly teaches governance that outcomes launder process. Option C separates what happened, who failed (partly the analyst, but also possibly the control's design), and what prevents recurrence (a system-level fix, such as an automatic financial-code check). It also handles both relationships correctly: a non-humiliating learning review with the delegation retained tells the analyst the error was survivable, and upward transparency about the exception is non-negotiable since accountability for a delegation remains with the delegator. Option B loses the capacity the delegation existed to provide. Option D outsources to a third party work that is the manager's own to do. This tests the principle that authority can be delegated but accountability cannot.

**Question 7 (moderate) — The 02:40 back-out call**

Woken at 02:40: a release to the document service completed at 01:30, and since 02:15 intermittent errors have affected roughly 15% of transactions. The incident manager wants a decision: back out now, or hold. The back-out is tested but takes ninety minutes and must start by 05:30 to finish before the 07:00 business day. The on-call engineer suspects a cache warming issue that would resolve itself by roughly 04:00 but cannot yet prove it. The service is Silver-tier; the morning brings its daily peak. What is the most effective response?

- A) Order the back-out immediately — with users affected, reversal is always the safe default.
- B) Hold until the engineer is certain of the diagnosis, whenever that is.
- C) Set a decision gate: hold while the engineer works to confirm the cache hypothesis, define what evidence would confirm or kill it, and pre-agree that if errors persist or worsen by a set time — comfortably before the 05:30 back-out deadline, say 04:15 — the back-out proceeds without further debate; brief the incident manager on the gate and stay engaged until resolution or handover.
- D) Delegate the decision to the on-call engineer, who has the most technical context.

**Correct answer: C**

**Explanation:** A gate at ~04:15 buys the hypothesis its full window while preserving a 75-minute margin on the reversal option. This tests recognising that deciding under genuine uncertainty with an expiring option does not require choosing between deciding now and deciding well — the decision rule can be set now, evidence defined in advance, and the incident manager kept commanding the incident while the change decision stays owned. Option A buys certainty it does not need to afford yet. Option B surrenders the timeline to the diagnosis. Option D confuses technical input with ownership of a decision weighing concerns the engineer does not hold.

**Question 8 (moderate) — The resisted improvement**

A requirement is being introduced for production deployments to run through the automated pipeline, replacing manual deployment for services that still use it. The longest-tenured engineering team resists: their lead argues their manual process "has not caused an incident in four years", the pipeline does not yet handle two of their edge cases, and the requirement reads as distrust of the team most experienced in the estate. What is the most effective response?

- A) Grant the team a permanent exemption in recognition of their record.
- B) Enforce the deadline uniformly — exceptions unravel standards, and their objections are ultimately about status.
- C) Engage the substance and the sentiment separately: commission the two edge cases into the pipeline's backlog with the team's own engineers involved in specifying them, agree a dated transition tied to those fixes landing, and reframe the requirement's rationale around institutional resilience rather than this team's competence.
- D) Ask the service management board to impose the requirement so the resistance attaches to the mandate.

**Correct answer: C**

**Explanation:** The edge cases are a substantive, checkable claim, and enforcing without addressing them (option B) risks forcing non-compliance or the very incident the pipeline exists to prevent. Option C converts opponents into contributors, makes the deadline something the team helped construct, and answers the sentiment honestly rather than dismissively — a change experienced as distrust will be complied with minimally. Option A trades the standard away entirely. Option D borrows authority already held and spends someone else's. This tests separating the objection that should change the rollout plan from the emotion that resists the requirement, and answering both.

**Question 9 (challenging) — The failure that was authorised**

Three weeks earlier, a Medium-risk change was personally authorised under delegated authority, its assessment judged adequate. The change contained a defect that yesterday caused the department's most visible outage of the year. Preparing the post-incident review, it is now clear the assessment missed a dependency that a more searching review might have caught — though the assessment met the documented standard at the time. A colleague advises: "Present it as the delivery team's assessment failure — technically true, and no one will read it differently." What is the most effective response?

- A) Follow the advice — the assessment was the team's product, and the documented standard was met.
- B) Present the full chain including the authorisation judgement: the assessment met the documented standard, the standard itself does not require the dependency analysis that would have caught this, the approval applied the standard as written — and therefore the remedial action is strengthening the standard, proposed with dates.
- C) Present the team's assessment failure but privately acknowledge the true chain to a manager.
- D) Preface the review with a personal apology and offer to return delegated authority pending the board's confidence.

**Correct answer: B**

**Explanation:** The colleague's advice is self-refuting — "technically true, and no one will read it differently" describes a misleading account. Reading the chain honestly locates the systemic failure in the standard, which is both the truthful account and the only one that generates the right fix; a board told "the team's assessment failed" would prescribe training for a team that followed the rules, and the standard's gap would survive to cause the next outage. Option C launders a private conscience rather than the record the board actually steers by. Option D converts systemic learning into personal drama and still fails to propose the standard's fix. This tests giving a failure account that reads like engineering — accurate about the chain, explicit about one's own link in it, pointed at the fix — rather than one that reads like advocacy.

**Question 10 (challenging) — The Board that agrees too quickly**

Six months of CAB minutes show a pattern: decisions are unanimous almost without exception, discussion averages under three minutes per item, dissent comes only from the same two senior members, and the three junior members — including the security representative, the only woman on the Board — have not initiated a challenge in the entire period. Two recent near-misses involved risks a security or operations challenge should plausibly have caught. What is the most effective response?

- A) Leave it alone — outcomes are acceptable, unanimity is efficient, and manufactured dissent wastes senior time.
- B) Redesign how the Board reaches decisions so challenge is structural rather than temperamental: for High-risk items, ask named perspectives for their view before opening general discussion and before any senior member speaks; introduce a rotating "risk challenge" role; and speak privately with the quieter members about what would make challenge feel safe — while examining the chair's own conduct for signals that dissent is unwelcome.
- C) Tell the Board plainly that unanimity has become a problem and expect more disagreement.
- D) Replace one of the junior members with someone more assertive.

**Correct answer: B**

**Explanation:** Three-minute unanimity with dissent monopolised by two senior voices is evidence that discussion order and status gradient decide items before junior perspectives enter. Option C exhorts a behaviour while leaving the structure that punishes it intact. Option D personalises a systemic problem and selects for replacement the person a silencing structure never gave a safe opening. Option B changes the mechanism: speaking-order inversion, a rotating challenge role that decouples dissent from social risk, and honest examination of the chair's own conduct. Option A treats survivorship as assurance, when the near-misses are the outcomes-in-waiting. This tests recognising that a board's inclusiveness is the mechanism by which risk information reaches risk decisions, not a courtesy to its quiet members.

**Question 11 (challenging) — The report a manager wants softened**

A quarterly change performance report shows the emergency change ratio doubling, driven largely by a programme sponsored by the candidate's own line manager. Reviewing the draft, she says: "Soften the emergency change section. The programme's under enough scrutiny, the board will overreact, and frankly it reflects on both of us. Fold the numbers into the general statistics this quarter — they'll come down next quarter anyway." What is the most effective response?

- A) Comply — she is accountable for the report's context, she may be right about the board overreacting, and the numbers are predicted to recover.
- B) Decline to obscure the data, but engage her real concerns: keep the emergency trend visible and accurately attributed, and offer to strengthen the surrounding context — the programme's delivery pressures, the remediation already agreed, the expected trajectory; if she still directs the change, state a clear position and record it.
- C) Submit the softened report but send the board secretary the full figures informally.
- D) Refuse outright and escalate her request to the board chair as attempted interference.

**Correct answer: B**

**Explanation:** The instruction is improper — folding a doubling trend into general statistics is concealment by aggregation — but the concerns behind it are partly legitimate: bare numbers can trigger overreaction, and context genuinely is missing. Option B treats the impropriety and the legitimacy separately: the data stays visible and attributed, while everything legitimately wanted (understanding of pressure, remediation, trajectory) is achieved through added context rather than removed data, with a recorded position if overruled. Option A hands the decision about what the board can be trusted to know to the person the data embarrasses. Option C destroys the report's integrity and personal deniability simultaneously. Option D turns a recoverable conversation into an accusation before B's repertoire is tried. This tests offering to contextualise rather than obscure when pressured — often the honest version of what the pressurer actually wants.

**Question 12 (challenging) — The dependency that cannot be commanded**

A flagship release in six weeks depends on an API change owned by another department's platform team, outside the organisation's change process entirely. Their team lead has told the delivery team informally that the API change "will probably slip a month". The release will otherwise be complete, tested, and heavily committed: a minister-announced service improvement depends on it. There is no authority over the platform team. What is the most effective response?

- A) Continue as planned — their lead said "probably", their slippage is their accountability, and the release's own governance is in order.
- B) Escalate immediately to director level to have pressure applied to the platform team's priorities.
- C) Work the problem at every available level: contact the platform team's lead and their change management counterpart directly to convert "probably slip" into a firm, dated position; explore technical decoupling with both delivery teams; replan the release's critical path around the honest date; and give programme sponsors an early, accurate risk position with options priced — reserving director-level escalation for when facts, not rumours, justify it.
- D) Instruct the delivery team to build against the API's published specification and hold the platform team to it via a formal inter-departmental commitment.

**Correct answer: C**

**Explanation:** With positional authority stripped away, what remains is information quality, relationships, technical options, and honest stakeholder management. Option C works all four: converting a rumour into a fact with a date and reason via direct professional contact; exploring decoupling options (interim endpoints, feature flags) that could convert "the release slips a month" into a smaller, more manageable slip; and briefing sponsors early with options priced, since their worst outcome is discovering the slip late rather than the slip itself. Option A treats the dependency owner's accountability as if it discharged ownership of the outcome. Option B spends the escalation card on a rumour, potentially hardening the platform team. Option D is coordination by litigation — a commitment document does not make the API exist on the day. This tests working every available lever — information, relationships, technical design, and honest escalation timed to facts — when authority alone cannot deliver the outcome.

### Administration tips

- **Score for whether a candidate exercises authority genuinely held**, neither over-escalating nor acting alone where escalation is warranted.
- **Watch for whether a candidate separates the substance of an objection from the sentiment behind it.**
- **Note whether a candidate's answer fixes the system**, not just the instance, when a recurrence risk is present.
- **Treat any option built on concealment or blame-shifting as a near-automatic low score.**
- **Keep candidates scored to this level's judgement** — decision ownership, risk-proportionate governance, honest records — not to a more junior or more senior register.

### Common pitfalls to watch for when scoring

- **Rewarding deferral of decisions that belong to this role.**
- **Missing when an outcome is allowed to launder a flawed process** — the successful unauthorised change, the lucky skipped verification.
- **Crediting enforcement without investigation** of a workaround or resistance pattern.
- **Rewarding an option that protects people from information** rather than contextualising it honestly.
- **Mistaking performed accountability for exercised accountability** — dramatic gestures in place of an honest record and a dated fix.
- **Treating a structural problem (a silent board, a disengaged member) as a personality problem.**

## Conclusion

This document has given you a demanding set of assessment material for the four types most relevant to a change and release manager: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement.

The cognitive section tests applying risk classification rules without deference to plausibility, tracing dependency chains to their forced conclusions, finding the same-CI collision buried in a clean-looking schedule, diagnosing a certificate failure from its internal-versus-external signature, and reading the footnote that changes a go-live decision. The numeric section tests converting availability nines into their real minutes, keeping percentage points and percent honestly apart, computing the fifteen-incident perfect streak an SLA recovery actually requires, and pricing a process improvement into a payback argument. The verbal section tests holding policy text to its exact scope and modality, tracking findings apart from quoted opinions, and spotting an unmonitored route beneath a perfect compliance statistic. The situational judgement section tests the pressure points that define the role: the corridor authorisation declined and redirected, the 02:40 decision gate, the failure account that steers the fix to the standard rather than the scapegoat, the report kept honest and made contextual, and the dependency delivered through influence where authority runs out.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can govern risk proportionately, read policy precisely, and exercise sound judgement under pressure from every direction — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
