# Accessibility Specialist - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for accessibility specialist. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For an accessibility specialist that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — audit reports, WCAG success criteria, governance documents, training materials, test plans, and stakeholder communications — and decisions genuinely made by someone who supports teams in creating accessible services, performs accessibility audits, provides advice and guidance from specialist knowledge, analyses governance and project documents against accessibility standards, resolves technical disputes, coaches junior colleagues, and brings the voice of disabled users into every conversation.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and verbal items for whether the candidate deduces only what the given rule, standard, or evidence actually establishes, resisting a plausible-but-unproven conclusion — several items are deliberately built so a confident, professionally-informed answer is the wrong one where the given facts do not support it. Situational judgement items consistently reward a response that builds influence rather than asserts authority, since this role rarely decides anything directly and works almost entirely by persuading people who did not ask for the advice.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — audit findings tables, WCAG conformance requirements, HTML and ARIA snippets, test conditions, governance checklists — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a similar level, often adaptive, with speed and accuracy reported separately.

For an accessibility specialist, cognitive ability is particularly relevant because professional value rests on structured, defensible thinking: a detailed audit holds a service's pages, components, states, and user journeys in mind simultaneously against dozens of success criteria; advising a team means reasoning from a standard's requirements to a specific implementation's compliance; reviewing a governance document means detecting what is missing as well as what is wrong.

### How this assessment maps to the role

- **Pattern recognition** maps to **Technical understanding (accessibility)**: performing detailed audits means recognising recurring defect patterns across large, messy services, and noticing when a page deviates from an established pattern.
- **Logical deduction** maps to **Technical understanding (accessibility)** and **Consultancy**: advocating appropriate technical solutions requires reasoning validly from a success criterion's actual wording to what a given implementation must and must not do.
- **Error checking** maps to **Governance and assurance (accessibility)** and **Testing**: analysing project documents against a predefined framework, and analysing and reporting test activities and results, both depend on systematically detecting inconsistencies, omissions, and contradictions.
- **Prioritisation** maps to **Leadership and guidance** and **Testing**: making decisions characterised by managed levels of risk and complexity requires rapidly ranking findings and tasks by user impact and urgency.
- **Problem solving** maps to **Consultancy** and **Communicating information**: framing problems so they can easily be understood is applied problem solving — decomposing a tangled situation into causes, options, and recommendations.

### Practice questions

**Question 1 (easy) — Pattern recognition in audit findings**

Auditing a six-page transaction, "form field missing programmatically associated label" defects are recorded per page: Start 0, Personal details 4, Address 4, Contact 4, Review 0, Confirmation 0. The three affected pages all use a recently rebuilt form component; the unaffected pages use either no forms or the standard design system component. Ask for the most likely root cause.

- A) Three separate teams made three separate mistakes.
- B) The rebuilt form component omits label association, and every page using it inherits the defect.
- C) The audit tool produces false positives on alternate pages.
- D) The Review page is the source of the problem.

**Correct answer: B**

**Explanation:** Defects appear exactly where the rebuilt component is used and nowhere else, with an identical count on each affected page — the signature of a single shared-component defect rather than three independent mistakes. This tests recognising component-level root cause: an audit that reports one root cause with twelve instances gets the whole problem fixed in one place, whereas twelve separate findings sends developers chasing twelve symptoms.

**Question 2 (easy) — Logical deduction from a success criterion**

WCAG 2.1.1 (Keyboard) requires all functionality be operable through a keyboard interface, with a narrow exception for path-dependent functions (such as freehand drawing). A team states: "Our map's drag-to-pan cannot be done by keyboard, but we added keyboard buttons that pan the map in each direction." Ask for the most defensible assessment based only on this.

- A) Fail — drag-to-pan itself is not keyboard operable.
- B) Pass is plausible — the functionality (panning) is keyboard operable via the buttons; the criterion requires operable functionality, not identical interaction methods.
- C) Fail — maps are always exempt from WCAG.
- D) Pass — the path-dependent exception applies, so nothing keyboard-operable was needed at all.

**Correct answer: B**

**Explanation:** The criterion's object is functionality, not gesture, and panning is made operable by keyboard through a different mechanism. This tests reading a criterion precisely — what is the requirement's object, what exactly is excepted — option A misreads the requirement as requiring identical interaction methods, C invents a blanket exemption, and D invokes an exception that is not needed to reach the pass.

**Question 3 (easy) — Error checking a conformance claim**

A project document claims: "The service meets WCAG 2.2 AA. Evidence: automated scan passed with zero errors on all pages." Reviewing this against a governance framework requiring evidence proportionate to the claim, ask for the central defect in the document.

- A) WCAG 2.2 does not exist.
- B) The evidence cannot support the claim: automated scans detect only a minority of WCAG failures, so a clean scan cannot demonstrate AA conformance.
- C) Zero errors is impossible, so the scan must be fabricated.
- D) The document should claim AAA instead.

**Correct answer: B**

**Explanation:** Automated tools reliably detect only the machine-decidable subset of criteria and cannot judge criteria requiring human evaluation — meaningful alt text, logical focus order, usable assistive technology experience. This tests recognising that the evidence's scope does not match the claim's scope, which is what governance and assurance work against a predefined framework requires — options A and D are simply wrong, and C is an unfounded assumption.

**Question 4 (moderate) — Prioritising a mixed workload**

Monday morning, four items: (1) an audit re-test of a team's fixed critical issues, the outstanding evidence for their Thursday beta assessment, taking about a day; (2) a mentee's first draft audit report needing feedback before their Friday deadline, taking about two hours; (3) a governance board meeting Wednesday morning requiring written feedback on a project's accessibility approach, taking about half a day; (4) a quarterly contribution to training materials due at the end of the month. Ask for the most defensible sequencing.

- A) 1 today, 3 Tuesday, 2 Wednesday or Thursday, 4 later in the month
- B) 2, 4, 1, 3 — help people and long-term assets first
- C) 3, 1, 2, 4 — governance always outranks delivery
- D) 1, 2, 3, 4 — strict order of when each request arrived

**Correct answer: A**

**Explanation:** Item 1 needs a full day and must complete before Thursday's assessment, an immovable gate, so it takes today; item 3 is due Wednesday and takes half a day, fitting Tuesday; item 2 fits comfortably Wednesday or Thursday while still leaving time for the mentee to act on feedback; item 4 has weeks of slack. This tests sequencing by duration, deadline, and downstream dependency together — option C applies a category rule ("governance first") that loses to impact-weighted scheduling, and D confuses arrival order with priority.

**Question 5 (moderate) — Pattern recognition across assistive technology results**

Testing a custom date picker: NVDA with Firefox announces correctly; JAWS with Chrome announces correctly; VoiceOver with Safari announces nothing when the picker opens; TalkBack with Chrome on Android announces correctly, all current released versions. Ask for the most reasonable next step.

- A) Record a global failure: the date picker does not work with screen readers.
- B) Record a pass: three out of four combinations work.
- C) Investigate the VoiceOver/Safari behaviour specifically — the pattern suggests an implementation detail this combination handles differently — and record the finding with its exact scope.
- D) Advise users to avoid Safari.

**Correct answer: C**

**Explanation:** One pairing diverges while three agree, typically pointing at an implementation technique with uneven support across ARIA and live-region handling. This tests scoping a finding precisely to the conditions actually tested and reproduced rather than overstating it (A, which will be half-refuted by the team's own testing) or understating it (B, since VoiceOver/Safari is a dominant combination among Mac and iOS users) — option D shifts the burden onto users, the opposite of advocacy.

**Question 6 (moderate) — Logical deduction about a proposed fix**

A modal dialog traps keyboard focus correctly while open but, on close, returns focus to the top of the page rather than the button that opened it. A developer proposes: "We'll just remove the focus trap — then there's nothing to return." Ask what necessarily follows from this proposal.

- A) The original defect (wrong focus return) is resolved, and no new defect is introduced.
- B) A worse defect is introduced: while the modal is open, keyboard users can tab into the obscured page behind it, losing their place and interacting with hidden content.
- C) The proposal has no effect on keyboard users.
- D) The proposal fixes the issue for screen reader users only.

**Correct answer: B**

**Explanation:** Removing the focus trap lets Tab move into visually obscured, logically inactive content while the modal is open — a serious dialog-behaviour failure — and the original complaint (wrong focus destination on close) is not even addressed, since focus on close still has to go somewhere. This tests tracing a proposed fix's effect on every affected state and user group, not just the bug report's sentence.

**Question 7 (moderate) — Error checking an audit summary table**

A draft audit summary states: "Total findings: 24 — of which 6 critical, 9 high, 10 low." The detailed findings list has 25 rows with severity counts: critical 6, high 9, medium 0, low 10. Ask which correction restores consistency with the least change, assuming the detailed rows are correct.

- A) Change the total to 25 and investigate the discrepancy — one detailed row is missing from the summary arithmetic.
- B) Delete a low finding to make the total 24.
- C) Change a low finding to medium.
- D) Leave it — one row's difference is immaterial.

**Correct answer: A**

**Explanation:** 6+9+10=25, matching the detailed list and contradicting the stated total of 24 — the minimal, correct fix is the total. This tests checking arithmetic against detail rather than adjusting the detail to match a stated total — option B destroys a genuine finding to preserve a typo, and D misjudges materiality in an assurance document where readers must trust every row.

**Question 8 (moderate) — Applied problem solving in a training context**

Designing a two-hour introductory accessibility training session for thirty developers who have mostly never used a screen reader, with goals of leaving able to run a basic check and motivated to care. Available: a lecture deck, a hands-on screen reader exercise on their own code, a video of a disabled user struggling with a government service, and a quiz — time allows three of the four. Prior evidence: hands-on exercises produce the largest capability gains, user videos produce the largest attitude shifts. Ask for the best combination.

- A) Deck, quiz, video — measurable and moving
- B) Deck (shortened), video, hands-on exercise — motivation plus capability, framed by essential context
- C) Deck, quiz, hands-on — skip the emotional content
- D) Video, quiz, hands-on — skip all context-setting

**Correct answer: B**

**Explanation:** The capability goal points at the hands-on exercise and the attitude goal points at the video, both non-negotiable given the stated evidence; a shortened deck supplies the framing a novice audience needs. This tests matching each session component to the outcome it demonstrably produces — option A drops the highest-impact capability element and C drops the highest-impact motivational one for an audience with no prior exposure to the human stakes.

**Question 9 (hard) — Deduction across governance rules**

Assurance framework: (i) any service handling citizen transactions must have a completed accessibility audit before public beta; (ii) an audit is "completed" only when all critical findings are fixed and re-tested; (iii) the accessibility statement must be published at public beta launch and list any outstanding non-critical findings. A service launches into public beta with: an audit performed, two critical findings fixed and re-tested, one critical finding fixed but not re-tested, four high findings outstanding, and a statement listing the four high findings. Ask how many of the three rules are breached.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: C**

**Explanation:** Rule (ii)'s definition of "completed" is unmet (one critical fix is unverified), which cascades into rule (i) being breached (the service entered beta without a completed audit); rule (iii) is met, since the statement correctly lists the outstanding non-critical findings. This tests tracing how governance rules interlock through definitions rather than reading each rule in isolation — an unmet definition cascades into a dependent rule's breach.

**Question 10 (hard) — Multi-constraint audit scheduling**

Four services — Alpha, Beta, Gamma, Delta — must be audited over four weeks, one per week. Constraints: (i) Alpha's team is unavailable in week 1; (ii) Gamma must be audited before Delta, since Delta reuses Gamma's component library; (iii) Beta must be audited in week 1 or 2 to feed its assessment; (iv) a junior specialist shadowing the Alpha audit is only available weeks 2 and 3. Ask which schedule satisfies all constraints, preferring the one that completes constrained work earliest.

- A) Week 1 Beta, week 2 Alpha, week 3 Gamma, week 4 Delta
- B) Week 1 Gamma, week 2 Beta, week 3 Delta, week 4 Alpha
- C) Week 1 Beta, week 2 Gamma, week 3 Alpha, week 4 Delta
- D) Week 1 Delta, week 2 Alpha, week 3 Beta, week 4 Gamma

**Correct answer: A**

**Explanation:** Constraint (iv) eliminates B (Alpha in week 4); constraint (iii) eliminates D (Beta in week 3); both A and C satisfy every hard constraint, but A audits Alpha at its earliest permissible week (2), while C delays Alpha to week 3 with no constraint requiring it. This tests applying hard constraints as filters first, then using slack preservation as a tie-breaker between equally valid schedules — a habit that matters because real audit calendars always slip.

**Question 11 (hard) — Root-cause reasoning from mixed evidence**

A service's error summary component: (a) with NVDA, errors are announced on form submission; (b) with VoiceOver, errors are announced twice; (c) with the console open, the summary is rendered, removed, and re-rendered on each submission; (d) the component uses `role="alert"`. Ask which hypothesis best explains all the evidence.

- A) VoiceOver has a bug and the component is correct.
- B) The remove-and-re-render cycle inserts the alert content twice in quick succession; screen readers differ in how they de-duplicate rapid live-region updates, so some announce once and others twice.
- C) The live region should be removed entirely.
- D) NVDA is failing to announce one of two genuine errors.

**Correct answer: B**

**Explanation:** The remove-and-re-render cycle (c) combined with `role="alert"` (d) accounts for both the single announcement (a) and the double announcement (b) — screen readers handle rapid duplicate alerts differently. This tests forming a hypothesis that explains every piece of evidence rather than blaming the tool as a first resort (A, which ignores c entirely) — option C discards the announcement behaviour users need, and D invents a second error the evidence never mentions.

**Question 12 (hard) — Prioritisation under a governance dilemma**

An hour before a governance board meets to approve public beta, an audit re-test evidence error is discovered: one of three "critical — fixed and verified" findings was verified on staging, but the fix is absent from the production build being approved. Fixing the evidence pack takes minutes; re-verifying against production takes half a day; the board meets in an hour. Ask which action best balances accuracy, governance, and delivery.

- A) Say nothing now; correct the record after the board meeting so approval is not disrupted.
- B) Ask the board to reject the service outright.
- C) Notify the board (via the chair) before the meeting: two criticals verified in production, one verified only in staging; recommend conditional approval with production re-verification within a defined period, or a short deferral — the board's choice, made on accurate evidence.
- D) Quickly re-run the staging test again so it can honestly be said it was double-checked.

**Correct answer: C**

**Explanation:** Assurance evidence exists so decision-makers decide on accurate information, and correcting the record in time lets the board choose from proportionate options (conditional approval, a dated re-verification, or deferral) rather than removing that choice. This tests correcting known-wrong evidence promptly and framing options rather than seizing the decision — option A converts an honest error into something corrosive, B overstates what is actually known (unverified, not absent), and D re-tests the wrong environment entirely.

### Administration tips

- Score for whether the candidate identifies a shared root cause behind multiple instances of the same defect, rather than treating each as independent.
- Note whether the candidate reads a success criterion's precise object and stated exceptions rather than a looser, intuitive reading.
- Watch for whether a proposed fix is traced through its consequences for every affected element or user group, not just the one in the original report.
- Score for whether the candidate scopes a finding precisely to the conditions actually tested, resisting both overstatement and understatement.
- Note whether prioritisation reasons from deadline, duration and dependency together rather than applying a fixed category rule.

### Common pitfalls to watch for when scoring

- Crediting a finding reported as multiple independent symptoms rather than one shared root cause.
- Missing when a candidate misreads a success criterion's object (functionality vs interaction method) or over-extends a stated exception.
- Rewarding a conclusion drawn from partial evidence (a single testing type, a single browser/assistive-technology pairing) generalised beyond what was tested.
- Accepting a category-based prioritisation rule ("governance always first") over one that reasons from deadlines and dependencies.
- Missing when a candidate corrects a summary by altering the underlying detail rather than the summary itself.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can draw a defensible conclusion from data under time pressure. For an accessibility specialist the data is audit results, contrast ratios and other measured thresholds, service volumes translated into affected users, remediation effort estimates, and assistive technology usage figures.

Typical format: fifteen to twenty-five minutes with a calculator permitted, presenting tables and charts followed by multiple-choice items, some computational and some asking what the data does and does not support.

Three habits matter particularly in this role: converting percentages of a service's user base into people, since a screen reader user population of 0.5% sounds negligible until it is stated as four thousand people a year who cannot complete a form; instant fluency with WCAG contrast thresholds (4.5:1 normal text, 3:1 large text and interface components); and normalising audit findings before comparing them, since a service with more pages audited will produce more findings at the same underlying quality.

### How this assessment maps to the role

- **Threshold arithmetic** maps to **Technical understanding (accessibility)** and performing audits.
- **Converting rates into people** maps to **User focus** and bringing the voice of disabled users.
- **Normalising audit findings** maps to **Governance and assurance (accessibility)**.
- **Effort estimation** maps to **Consultancy**, advising teams on remediation.
- **Interpreting research** maps to **Testing**.
- **Presenting figures** maps to **Communicating information**.

### Practice questions

*Table 1 — Accessibility audit results across five services*

| Service | Annual users | Pages audited | Critical | Serious | Moderate |
|---|---|---|---|---|---|
| Apply | 940,000 | 28 | 4 | 17 | 26 |
| Book | 210,000 | 11 | 1 | 5 | 9 |
| Check | 1,600,000 | 44 | 9 | 33 | 41 |
| Report | 85,000 | 16 | 5 | 12 | 14 |
| Update | 430,000 | 13 | 2 | 6 | 11 |

**Question 1 (easy) — Reading a table**

Ask which service has the most critical issues.

- A) Apply
- B) Check
- C) Report
- D) Update

**Correct answer: B**

**Explanation:** Check has 9 critical issues, ahead of Report's 5. This tests reading a table for the largest raw figure, and in a strong candidate's answer, noting Check also has the largest audit (44 pages), which the next questions address.

**Question 2 (easy) — Total exposure**

Ask approximately how many annual users are served by services with at least one critical issue.

- A) About 2.5 million
- B) About 3.3 million
- C) About 1.6 million
- D) About 2.0 million

**Correct answer: B**

**Explanation:** All five services have at least one critical issue: 940,000+210,000+1,600,000+85,000+430,000=3,265,000. This tests basic totalling, and, in a strong answer, recognising that "3.3 million people using services with known critical barriers" is more useful in a governance meeting than any count of findings.

**Question 3 (moderate) — Normalising by audit size**

Ask which service has the highest rate of critical issues per page audited.

- A) Apply
- B) Check
- C) Report
- D) Update

**Correct answer: C**

**Explanation:** Report 5/16≈0.31, ahead of Check's 9/44≈0.20. This tests normalising by audit size before comparing services, since a larger audit finds more at the same underlying quality — this changes the leading answer from Question 1, and the service with the worst rate serves the fewest users.

**Question 4 (moderate) — Prioritising remediation**

Ask which service should be prioritised for remediation, and on what basis.

- A) Report, because it has the worst defect rate.
- B) Check, because it combines the second-highest defect rate with 1.6 million users — so far more people encounter a critical barrier there than anywhere else — although neither the counts nor the rates tell you which journeys are blocked, and one critical issue on a mandatory step matters more than five on a rarely-visited page.
- C) Apply, because it has the second-most users.
- D) All five equally.

**Correct answer: B**

**Explanation:** Check's defect rate close to the worst applied to a user base nineteen times larger than Report's dominates the comparison. This tests combining rate with exposure rather than picking one alone (A, C), and, in a strong answer, naming the limitation this analysis has — a journey-level rather than page-level view is still needed.

**Question 5 (moderate) — Contrast thresholds**

A designer proposes body text at 4.4:1, a 24px bold heading at 3.2:1, and a button border at 2.8:1. Ask which fail WCAG 2.2 AA.

- A) All three.
- B) The body text and the button border.
- C) Only the body text.
- D) Only the button border.

**Correct answer: B**

**Explanation:** Body text needs 4.5:1 (4.4 fails); 24px bold is large text needing 3:1 (3.2 passes); interface components need 3:1 (2.8 fails). This tests instant recall of the correct threshold for each element type, and, in a strong answer, flagging that two of the three sit close enough to their thresholds that a later colour tweak could push them over.

**Question 6 (moderate) — Remediation effort**

Across the five services: 21 critical, 73 serious, 101 moderate issues. Critical and serious average 90 minutes each to fix; moderate averages 25 minutes. Ask for the approximate total effort.

- A) About 100 hours
- B) About 183 hours
- C) About 210 hours
- D) About 145 hours

**Correct answer: B**

**Explanation:** (21+73)×90=8,460 minutes; 101×25=2,525 minutes; total 10,985 minutes ≈183 hours. This tests correctly weighting a total by rate and volume together, and, in a strong answer, noting the higher-severity issues account for 77% of the effort despite being fewer in number — the figure that turns "we should fix the findings" into something plannable.

**Question 7 (harder) — Users behind a percentage**

Roughly 2% of a service's 940,000 annual users rely on screen magnification; a proposed change would make one journey difficult at high magnification. Ask how this should be framed.

- A) 2% is a small proportion of users.
- B) About 18,800 people a year use magnification on this service, so the question is what "difficult" means for them — if the journey becomes unusable, that is 18,800 people a year unable to complete it, and the percentage is the least informative way to describe that.
- C) 18,800 users; the change must be rejected.
- D) The figure cannot be estimated.

**Correct answer: B**

**Explanation:** 940,000×0.02=18,800. This tests converting a percentage into an absolute count and holding the severity question (difficult vs unusable) alongside it — option A uses the framing that makes the problem disappear, and C converts a count into a verdict without establishing severity.

**Question 8 (harder) — Interpreting an assistive technology statistic**

A stakeholder says "only 0.3% of our users use screen readers, so this is low priority." Ask for the strongest response.

- A) Accept it; 0.3% is small.
- B) Challenge what the figure measures: screen reader use is difficult to detect reliably, users who cannot complete a service leave and are undercounted, and the figure describes people who got far enough to be measured — so a low observed percentage is partly a consequence of the barriers, not a reason to leave them.
- C) Point out that 0.3% of 1.6 million is 4,800 people.
- D) Explain that accessibility is a legal requirement.

**Correct answer: B**

**Explanation:** The statistic is circular — a service hard to use with a screen reader will show few screen reader users, which then justifies not fixing it. This tests naming the measurement mechanism rather than accepting the figure at face value — option C is a genuinely good addition, stronger combined with B, and D answers a prioritisation argument with an authority claim.

**Question 9 (harder) — What the data supports**

An audit of a redesigned service finds 40% fewer issues than the previous audit. Ask for the strongest conclusion.

- A) The redesign improved accessibility by 40%.
- B) Fewer issues were found, which is consistent with improvement — but the comparison depends on both audits covering the same pages with the same method and auditor, and a smaller or differently-scoped audit produces fewer findings regardless.
- C) The redesign had no effect.
- D) Accessibility improved but not by 40%.

**Correct answer: B**

**Explanation:** Issue counts are a function of what is there and of how much was looked at and by whom. This tests stating exactly what the data supports along with the conditions the comparison depends on — option A treats a count difference as a measured improvement percentage, and D asserts a smaller improvement on no more evidence than A.

**Question 10 (harder) — Testing coverage**

An automated accessibility tool reports that a service passes all its checks. Ask what proportion of WCAG success criteria such tools typically verify, and what follows.

- A) Nearly all; the service is likely compliant.
- B) Automated tools reliably test only a minority of success criteria — commonly cited as around a third — because most criteria require judgement about whether something is meaningful, equivalent or in a logical order, so a clean automated result establishes the absence of one class of problem and says nothing about the rest.
- C) About half; further testing is optional.
- D) None; automated tools are unreliable.

**Correct answer: B**

**Explanation:** Criteria about meaningful alt text, logical focus order, and equivalent alternatives require human judgement no tool can make. This tests knowing the correct order-of-magnitude figure and its reason — a fact worth testing precisely, since a clean automated report is routinely presented as evidence of compliance — option D overstates in the other direction, since automated tools are genuinely valuable for the class of issue they do catch.

**Question 11 (harder) — Presenting to a governance board**

Five minutes with a governance board to make the case for accessibility remediation. Ask which figure leads best.

- A) The number of outstanding critical and serious issues.
- B) The number of people using services with known critical barriers — around 3.3 million a year — alongside one concrete description of what a specific barrier means for one person trying to complete one task.
- C) The average audit score across services.
- D) The legal risk of non-compliance.

**Correct answer: B**

**Explanation:** A count establishes scale, an example establishes meaning, and a board needs both. This tests pairing scale with a concrete example — option A requires the board to already know what a critical issue means, C averages away the finding entirely, and D invites a compliance-minimising response rather than a service-improving one, though the legal risk remains true and belongs later.

**Question 12 (harder) — Estimating from a small test**

Usability testing with 6 disabled participants found 4 could not complete a task. Ask for the strongest statement.

- A) 67% of disabled users cannot complete the task.
- B) Four of six participants could not complete it, which is a strong signal that something is badly wrong — small qualitative samples are good at showing that a problem exists and poor at estimating how many people it affects, so the finding justifies investigation and fixing, not a percentage.
- C) The sample is too small to draw conclusions.
- D) About two-thirds of disabled users are affected.

**Correct answer: B**

**Explanation:** Six participants is normal for this kind of testing and demonstrates that a barrier exists without supporting a population estimate. This tests distinguishing what a small qualitative sample proves from what it does not — options A and D attempt an unsupported population estimate, and C dismisses a finding that is actually strong, since four failures out of six would be an extraordinary coincidence in a broadly usable task.

### Administration tips

- Score for whether the candidate converts a percentage of a user base into an absolute count before discussing its significance.
- Note whether the candidate has instant, correct recall of the relevant WCAG contrast threshold for the element type in question.
- Watch for whether audit findings are normalised (by pages audited, by volume) before being compared across services or time periods.
- Score for whether the candidate distinguishes what a small qualitative sample can and cannot establish.
- Note whether a percentage-based prioritisation argument is challenged for what it actually measures, rather than accepted or merely re-expressed as a count.

### Common pitfalls to watch for when scoring

- Crediting a comparison of raw issue counts across audits or services of different sizes.
- Missing when a candidate accepts a low assistive-technology usage percentage at face value without questioning what it measures.
- Rewarding a clean automated scan result read as evidence of compliance.
- Accepting a population percentage inferred from a small qualitative sample.
- Missing when a candidate reports a change in issue count as a measured improvement percentage without checking the comparison is like-for-like.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine exactly what a piece of written material establishes. For an accessibility specialist this is unusually close to the work itself: reading WCAG success criteria, the accessibility regulations, procurement documentation and vendor conformance claims, and saying precisely what they require.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means it contradicts it, Cannot Say means it settles neither — regardless of what a candidate knows. A candidate's own expertise is the principal hazard, since a strong candidate will frequently know the right professional answer while the passage is silent — which is also the discipline the job requires, since the difference between what a standard requires and what is good practice is one this role is asked to explain constantly.

Three specifics matter particularly: success criteria have precise objects and narrow exceptions, so a criterion about functionality is not one about interaction method, and an exception naming one category does not stretch to a neighbouring one; the regulations attach obligations with scope, timing and conditions, and a misread exemption becomes an organisational position rather than a personal error; and conformance claims are claims — a vendor accessibility statement or an audit summary tells you what someone asserted, and what was actually tested is a separate question.

### How this assessment maps to the role

- **Reading success criteria precisely** maps to **Technical understanding (accessibility)**.
- **Reading the regulations** maps to **Governance and assurance (accessibility)**.
- **Reading conformance claims** maps to **Consultancy** and advising on procurement.
- **Reading audit and test reports** maps to **Testing**.
- **Reading research about users** maps to **User focus**.
- **Explaining precisely** maps to **Communicating information**.

### Practice questions

*Passage A — for Questions 1 to 4.* "Public sector bodies must ensure their websites meet accessibility requirements and must publish an accessibility statement. Where meeting a particular requirement would impose a disproportionate burden, a body may rely on that exemption, provided it has carried out and documented an assessment of the burden and has stated the reliance in its accessibility statement. The disproportionate burden exemption does not apply to content essential to the use of the service. Pre-recorded time-based media published before 23 September 2020 is exempt. An assessment of disproportionate burden must consider the body's size and resources, the estimated costs and benefits, and the needs of disabled users."

**Question 1 (easy)**

Statement: A body relying on the disproportionate burden exemption must say so in its accessibility statement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly as one of two conditions attached to the exemption. This tests the baseline reading, and, in a strong answer, noting the declaration requirement is what makes the exemption auditable — an undeclared exemption is invisible to the disabled users it affects.

**Question 2 (moderate)**

Statement: A body may rely on the exemption if it has documented an assessment, even without declaring it in the accessibility statement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage requires both conditions conjunctively ("and has stated the reliance"), contradicting the statement's treatment of one condition as sufficient. This tests recognising conjunctive requirements as all required — in practice, exactly the difference between a defensible reliance and an indefensible one.

**Question 3 (moderate)**

Statement: A body can rely on disproportionate burden for the payment step of a transactional service.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption "does not apply to content essential to the use of the service," and a payment step is essential by definition. This tests reading the most consequential clause in the passage, most often overlooked because burden exemptions are invoked precisely when something core and expensive is at stake — exactly the case the clause excludes.

**Question 4 (harder)**

Statement: A pre-recorded video published in 2019 and re-published in 2022 is exempt.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The exemption applies to media "published before 23 September 2020," and the passage does not say how re-publication is treated. This tests recognising a genuine ambiguity the passage does not settle — worth resolving with legal or assurance colleagues rather than by a candidate's own preferred reading, since the answer becomes the organisation's position.

*Passage B — for Questions 5 to 8.* "Success criterion 1.3.1 requires that information, structure and relationships conveyed through presentation can be programmatically determined, or are available in text. Success criterion 1.4.3 requires a contrast ratio of at least 4.5:1 for text, with exceptions for large-scale text at 3:1, incidental text, and logotypes. Incidental text is text that is part of an inactive user interface component, that is pure decoration, that is not visible to anyone, or that is part of a picture containing significant other visual content. Criterion 1.4.11 requires a contrast ratio of at least 3:1 for user interface components and graphical objects required to understand content."

**Question 5 (easy)**

Statement: Text on a disabled button is exempt from the 4.5:1 contrast requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Incidental text includes "text that is part of an inactive user interface component," and a disabled button is inactive. This tests reading a definition precisely against a statement — this is the item where professional judgement pulls hardest against the text, since low-contrast disabled states are a genuine usability problem many teams deliberately exceed the requirement to avoid, and both facts are true simultaneously.

**Question 6 (moderate)**

Statement: A visual grouping of related form fields satisfies criterion 1.3.1 if it is visually obvious.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The criterion requires relationships "can be programmatically determined, or are available in text" — visual obviousness is presentation, the very thing the criterion supplements rather than accepts as sufficient. This tests distinguishing a presentation-layer signal from what the criterion actually requires.

**Question 7 (moderate)**

Statement: An icon that conveys information must have a contrast ratio of at least 4.5:1.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Criterion 1.4.11 sets 3:1 for graphical objects required to understand content, not the 4.5:1 text threshold. This tests applying the correct threshold to the correct element type — applying the text ratio universally is a common error that leads to rejecting compliant designs.

**Question 8 (harder)**

Statement: Text within a photograph of a street scene must meet 4.5:1.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Incidental text includes text "part of a picture containing significant other visual content," and a street photograph plainly qualifies. This tests recognising the exemption is about the text being incidental to a picture, not about the picture's importance — if the picture itself conveys information, a different criterion applies, which this passage does not address.

*Passage C — for Questions 9 to 12.* "The supplier's accessibility conformance report states that the product conforms to WCAG 2.1 AA, with three criteria marked 'partially supports'. The report covers the product's default configuration. Testing was carried out by the supplier's internal team using automated tools and manual keyboard testing. No testing with screen readers was carried out. The report is dated 14 months ago. The supplier states that subsequent releases have not reduced conformance. Two of the three partially supported criteria relate to the reporting module."

**Question 9 (moderate)**

Statement: The product conforms to WCAG 2.1 AA.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The report states conformance while simultaneously marking three criteria "partially supports" — not conformance for those criteria — and no screen reader testing was carried out. This tests reading a conformance report as an assertion rather than as proof, the central skill in assessing procurement documentation.

**Question 10 (moderate)**

Statement: The product has accessibility problems with screen readers.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** No screen reader testing was carried out, establishing absence of evidence rather than presence of problems. This tests the mirror-image error to Question 9 — a report omitting a test tells nothing in either direction, and asserting problems is as unsupported as asserting conformance.

**Question 11 (moderate)**

Statement: Conformance has not been reduced by releases since the report.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says "the supplier states" this — establishing the assertion, not its truth, particularly given the original testing was also self-reported and omitted screen readers. This tests recognising a self-interested party's claim as an assertion needing independent verification, especially fourteen months into a product's life.

**Question 12 (harder)**

Statement: A deployment using a configuration other than the default is covered by the report.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The report "covers the product's default configuration," excluding other configurations by its own scope statement. This tests reading a scope limitation precisely — the limitation most often missed in procurement, since a customised deployment is what almost every government implementation actually runs.

### Administration tips

- Score for whether the candidate treats conjunctive conditions in a passage as all required, rather than any one being sufficient.
- Note whether the candidate correctly matches a stated contrast or conformance threshold to the specific element type in question.
- Watch for whether the candidate distinguishes an assertion in a report (what a supplier or auditor states) from a fact the report establishes.
- Score for whether an exception or exemption is read at its precise, narrow scope rather than extended to a neighbouring case.
- Note whether the candidate distinguishes absence of evidence (a test not run) from evidence of a problem.

### Common pitfalls to watch for when scoring

- Crediting the 4.5:1 text contrast ratio applied to icons, borders, or other non-text interface components.
- Missing when a candidate treats a conformance report's claim as the conformance itself.
- Rewarding "no screen reader testing was carried out" read as evidence of screen reader problems.
- Accepting a supplier's self-reported claim about their own subsequent releases without noting the conflict of interest.
- Missing when a candidate assumes a default-configuration report covers a customised deployment.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks a candidate to identify effective and ineffective responses. For an accessibility specialist the scenarios involve advising teams who did not ask for advice, delivering audit findings people find inconvenient, coaching colleagues, and representing users who are never in the room.

The commonest formats ask for the most and least effective response, or for ratings. Scoring is against a key derived from experienced practitioners in comparable roles.

Three patterns run through the strong answers. First, this role works almost entirely by influence — it audits, advises and coaches, but rarely decides — which makes how a finding is delivered as consequential as the finding, since a team that experiences accessibility as an obstacle will route around this role, and one that experiences it as help will bring problems early. Second, accessibility failures are facts, not opinions — a contrast ratio either meets a threshold or it does not, and grounding a conversation in the measurement takes it out of the realm of taste. Third, this role represents people who are not present, and silence in a meeting is read as professional endorsement.

### How this assessment maps to the role

- **Advising teams** maps to **Consultancy** and providing support, advice and guidance.
- **Delivering audit findings** maps to performing accessibility audits and **Governance and assurance (accessibility)**.
- **Coaching** maps to coaching and mentoring more junior colleagues and **Leadership and guidance**.
- **Representing users** maps to **User focus** and bringing the voice of disabled users.
- **Working in multidisciplinary teams** maps to **Communicating information**.
- **Community contribution** maps to engaging with the cross-government accessibility community.

### Practice questions

**Question 1 (easy) — Delivering an audit finding**

An audit of a team's service found twelve issues, several serious. Ask for the most effective way to present them.

- A) Send the report with all twelve listed by severity.
- B) Send the report and talk it through — grouping issues by root cause where several share one, explaining what each means for a user trying to do something, and being clear which block a task and which degrade it.
- C) Send the report and offer to answer questions.
- D) Present only the serious issues to avoid overwhelming the team.

**Most effective: B. Least effective: D**

**Explanation:** Grouping by root cause frequently reduces twelve findings to three or four actual changes, more efficient and less demoralising, and explaining user impact makes a finding feel worth fixing. This tests translating findings into actionable, grounded terms — option D is least effective, since withholding findings prevents proper remediation planning and damages trust in the audit when they are later discovered.

**Question 2 (easy) — A design that fails contrast**

A designer's proposed palette fails contrast for body text. Ask for the most effective response.

- A) Raise it with the measured ratio, the required ratio, and one or two nearby colours that pass.
- B) Say the contrast looks too low.
- C) Raise it at the next design review.
- D) Note it for the audit.

**Most effective: A. Least effective: D**

**Explanation:** Option A makes the observation immediately actionable and takes the conversation out of the realm of preference — a ratio either meets 4.5:1 or it does not — and offering passing alternatives makes it collaborative. This tests raising an easily-fixed problem early — option D is least effective, since saving it for a formal audit means it gets built at far greater cost and makes the audit feel adversarial.

**Question 3 (moderate) — A team that did not ask for advice**

Assigned to advise a team who clearly regard accessibility work as an imposition. Ask for the most effective approach.

- A) Find something that makes their life easier early — a component that fixes several issues at once, a testing shortcut, an answer to a question they have been stuck on — because a team that experiences this as useful will bring things forward, and one that experiences it as an inspection will hide them.
- B) Explain the legal obligations and the standards they must meet.
- C) Audit their service and present the findings.
- D) Ask their delivery manager to make attendance mandatory.

**Most effective: A. Least effective: D**

**Explanation:** The relationship determines everything achievable, and early usefulness buys standing to raise difficult things later. This tests investing in a relationship deliberately before requiring cooperation — option D is least effective, producing attendance without cooperation and confirming the exact framing the response should be changing.

**Question 4 (moderate) — Pressure to sign off**

A team asks for confirmation their service is accessible before launch; some journeys were audited and not others, and no testing with disabled users has been done. Ask for the most effective response.

- A) Confirm it; the audit found the issues and they were fixed.
- B) Say precisely what was tested, against what standard, by what method, and what has not been covered — particularly testing with disabled users — because "is it accessible" is a question no single audit answers, and the team needs an accurate picture for their accessibility statement.
- C) Say it meets WCAG 2.2 AA.
- D) Decline to give any assurance.

**Most effective: B. Least effective: A**

**Explanation:** An accessibility statement is a legally required published document needing an accurate picture, not a reassuring one. This tests giving an honest, scoped account including its largest gap — option A is least effective, converting a partial audit into an organisational claim that cannot be supported and that the specialist will be personally asked about later.

**Question 5 (moderate) — A finding a team disputes**

A developer disputes a finding, arguing that the pattern is widely used and works fine. Ask for the most effective response.

- A) Ask them to show it working in the assistive technology in question, and test it together — because either they are right and something is learned, or the demonstration will show the problem more convincingly than any citation.
- B) Cite the relevant success criterion.
- C) Accept their view; they know the codebase.
- D) Escalate to their lead.

**Most effective: A. Least effective: D**

**Explanation:** A shared demonstration resolves this faster than argument and genuinely leaves room to be wrong — widely-used patterns are sometimes fine and sometimes widely-used and broken. This tests resolving a technical dispute through evidence rather than authority — option D is least effective, turning a colleague into an opponent and seeking a ruling from someone less able to judge it.

**Question 6 (moderate) — Coaching a junior colleague**

A mentee's audit report lists issues accurately but reads as a series of rule violations. Ask for the most effective response.

- A) Show them how to reframe findings in terms of what a user cannot do, and explain why that lands better and gets more fixed — then let them rewrite it.
- B) Rewrite the report personally.
- C) Tell them to make it friendlier.
- D) Send it as it is; the findings are accurate.

**Most effective: A. Least effective: B**

**Explanation:** Reframing transfers reasoning that generalises to every future report — "a screen reader user cannot tell what this field wants" gets fixed more often than a criterion number. This tests coaching by transferring the underlying skill — option B is least effective, teaching nothing and signalling that a mentee's work becomes the mentor's whenever there is disagreement.

**Question 7 (harder) — An inaccessible product being procured**

A product being procured has significant accessibility problems, with the procurement well advanced. Ask for the most effective response.

- A) Set out the specific failures, what they mean for affected staff or users, and what obligations they create — then work the routes available at this stage: contractual remediation commitments with dates, an accessibility statement reflecting reality, and a documented decision by whoever accepts the risk.
- B) Recommend the procurement be stopped.
- C) Accept it; the decision is made.
- D) Raise it with the procurement team.

**Most effective: A. Least effective: C**

**Explanation:** Late procurements are rarely stopped by an accessibility objection alone; contractual remediation commitments are more effective since a supplier facing signature is more responsive than one already holding it. This tests working the levers actually available rather than the ones that feel decisive — option C is least effective, since accepting an unmet obligation without recording it leaves nobody accountable and nothing improved.

**Question 8 (harder) — Silence in a meeting**

In a late-running meeting, a decision is being taken quickly that will make a journey harder for screen reader users, and nobody else has raised it. Ask for the most effective response.

- A) Raise it now with the specific consequence and a rough sense of what addressing it would cost — because silence is read as professional endorsement, the people affected have no other representative present, and a decision is far cheaper to influence now than to revisit.
- B) Raise it now, briefly.
- C) Raise it with the decision owner afterwards.
- D) Note it and address it during implementation.

**Most effective: A. Least effective: D**

**Explanation:** Adding a cost estimate turns an objection into something the meeting can decide in the time available, whereas an unquantified concern in a late-running meeting gets deferred. This tests representing an absent affected group actively rather than passively — option D is least effective, since addressing a designed-in barrier during implementation costs far more and frequently means not addressing it at all.

**Question 9 (harder) — A team asking for a shortcut**

A team asks whether they can launch with a known accessibility issue and fix it in the next release. Ask for the most effective response.

- A) Say what the issue means for affected users, whether it blocks a task or degrades it, what the organisation's obligations are, and what would need to be in the accessibility statement — then let the accountable person decide, and offer an interim mitigation if one exists.
- B) Say no; known issues should not launch.
- C) Say yes if it is documented.
- D) Say it is their decision.

**Most effective: A. Least effective: D**

**Explanation:** The decision belongs to whoever is accountable for the service, and this role's job is to ensure it is made knowingly, with the accessibility statement consequence made explicit. This tests supplying everything the accountable person needs rather than abdicating the advisory role — option D is least effective, technically true but leaving a decision to be made without the expertise this role exists to provide.

**Question 10 (harder) — Findings that recur across teams**

Auditing across several services, the same three issue types keep appearing. Ask for the most effective response.

- A) Report them to each team as they are found.
- B) Treat the recurrence as a supply problem — the shared components or design tooling most teams use are probably producing these — and work on fixing them at source, since that removes the issues across every service at once.
- C) Produce guidance covering the three issue types.
- D) Propose accessibility training for developers.

**Most effective: B. Least effective: A**

**Explanation:** The same three issues across independent teams signals what they are all building with, not their individual knowledge. This tests fixing a systemic cause once rather than every instance — option A is least effective as the whole response, fixing instances forever while the source keeps producing them, a common route to burnout for accessibility specialists.

**Question 11 (harder) — A statistic used to deprioritise**

A product manager cites analytics showing almost no screen reader users as reason to deprioritise accessibility issues. Ask for the most effective response.

- A) Explain why the figure is unreliable — screen reader use is hard to detect, and users who cannot complete a service leave and are undercounted, so a low observed number is partly a consequence of the barriers — and convert what is measurable into people, then offer to include disabled participants in the next round of research.
- B) Explain that accessibility is a legal requirement.
- C) Point out that the percentage still represents thousands of people.
- D) Accept the prioritisation.

**Most effective: A. Least effective: D**

**Explanation:** The statistic is circular, and naming the mechanism plus offering research with disabled participants actually settles the question. This tests challenging a self-reinforcing metric rather than accepting or merely re-expressing it — option D is least effective, leaving both the barrier and the flawed reasoning intact for next time.

**Question 12 (harder) — Contributing to the community**

A testing approach solved a problem several other departments are likely facing. Ask for the most effective response.

- A) Write it up and take it to the cross-government accessibility community, including the approaches that did not work, because the dead ends save other people more time than the solution does.
- B) Mention it to colleagues who ask.
- C) Keep the notes for personal use.
- D) Add it to the team's internal documentation.

**Most effective: A. Least effective: C**

**Explanation:** This role names engaging with and contributing to the cross-government community, and the dead-end approaches are frequently the most useful part, since they are what other people are about to spend a week rediscovering. This tests active, generous knowledge-sharing beyond the immediate team — option C is least effective, converting a solved shared problem into a solved private one that everyone else must solve again.

### Administration tips

- Score for whether a response invests in earning influence with a team before asserting authority over them.
- Note whether the candidate grounds a disputed or contested finding in a measurement or a demonstration rather than an assertion or an escalation.
- Watch for whether a candidate representing absent users acts within a meeting or decision moment, rather than deferring to afterwards.
- Score for whether recurring findings across multiple contexts are traced to a shared, fixable cause rather than reported instance by instance.
- Note whether the candidate gives an accountable decision-maker complete, honest information (including gaps in testing) rather than a reassuring but unsupported assurance.

### Common pitfalls to watch for when scoring

- Crediting a response that confirms a service "is accessible" beyond what was actually tested.
- Missing when a candidate escalates a disputed technical finding rather than resolving it through demonstration.
- Rewarding a recurring issue reported to team after team rather than fixed at its shared source.
- Accepting silence or deferral in a live meeting where a barrier is actively being created.
- Missing when a candidate accepts a misleading statistic as a legitimate basis for deprioritisation without challenging what it measures.

## Conclusion

This guide has worked through pattern recognition and error checking across audit findings, WCAG success criteria and governance documents — recognising that twelve findings across three pages are one component defect, and that a success criterion's object is functionality rather than gesture; the arithmetic that turns accessibility into numbers people act on — converting percentages into annual user counts, normalising findings by pages audited, holding contrast thresholds precisely, and knowing what a six-participant test can and cannot establish; the discipline of reading standards, regulations, and conformance claims at exactly the strength the text supports; and the situational judgement that defines effective work in a role that operates almost entirely through influence rather than authority.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several verbal and situational items reward the quality of reasoning as much as the final choice, particularly around what a conformance claim or a piece of evidence actually establishes. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
