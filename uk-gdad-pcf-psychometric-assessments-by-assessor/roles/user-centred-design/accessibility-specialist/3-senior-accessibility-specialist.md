# Senior Accessibility Specialist - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior accessibility specialist. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A senior accessibility specialist works with people at a range of levels to embed accessibility into the output of teams: coaching and mentoring more junior colleagues, inputting into accessibility strategy with business areas, creating and delivering training, engaging with teams across different levels and capabilities, potentially managing or leading individuals or sub-teams, and contributing to the cross-government accessibility community.

Three features of the role shape what the assessment is built to test. First, most of the work is advisory rather than executive — auditing work not personally built, recommending to people who may not take the recommendation, depending entirely on findings being unassailable. Second, this level occupies an unusual position between a legal framework and a design conversation: accessibility carries statutory force, which gives findings weight and creates a specific risk, since a specialist who overstates a requirement spends credibility that the genuine requirements need. Third, this level names bringing the voice of disabled users, carrying a representative function alongside a technical one, and the two occasionally pull in different directions.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and verbal items for whether the candidate reads a criterion, exemption or claim exactly at its stated boundary, resisting both over-application and under-application — several items are deliberately built so a plausible, confident answer is the wrong one where the text does not support it. Situational judgement items consistently reward a response that advises with a route rather than a verdict, builds capability in a team rather than dependency on the specialist, and concedes a correct point in a dispute immediately rather than defending a finding that has been shown inaccurate.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role genuinely uses, presented through practical materials rather than abstract puzzles. At this level the materials are audit findings, standards with edge cases, remediation plans, and claims made by teams and suppliers that need diagnosing rather than accepting or rejecting.

Typical format: an online test of fifteen to thirty minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level, often adaptive, with speed and accuracy reported separately.

Three things distinguish this section at this level. First, accessibility reasoning is unusually rule-shaped, which makes precision both easier and more consequential — most criteria have defined thresholds, scopes and exceptions, so getting the answer wrong in the direction of over-application is as damaging as under-application, since a team told to fix something that is not a failure learns to discount the next finding. Second, severity and compliance come apart: a technically conforming interface can be nearly unusable, and a technical failure can be trivial in practice, and this role names understanding the boundary between usability and accessibility. Third, proportionality matters — a list of forty findings with no ordering is a list nobody acts on, and deciding what must be fixed before release, what should be fixed next, and what can wait is a reasoning task, not an administrative one.

### How this assessment maps to the role

- **Error checking and audit reasoning** map to **Technical understanding (accessibility)**: performing detailed audits, documenting findings clearly and providing solutions for others to work from.
- **Logical deduction** maps to **Technical understanding**, where excellent knowledge of standards and legislation including edge cases is named.
- **Severity and proportionality reasoning** map to **Governance and assurance (accessibility)**: reducing or removing risk associated with not meeting standards requires knowing which risks are which.
- **Prioritisation** maps to **Leadership and guidance**: decisions characterised by medium risk and complexity.
- **Diagnosing systemic causes** maps to **Consultancy**: leading the definition of guidance and informing how the organisation approaches delivery.
- **Reasoning about positions** maps to **Communicating information**: managing stakeholder expectations and hosting difficult discussions.

### Practice questions

**Question 1 (easy) — Auditing against a criterion**

Criterion: "Text smaller than 24 pixels must have a contrast ratio of at least 4.5:1. Text 24 pixels or larger, or 19 pixels or larger and bold, must have at least 3:1. Logotypes are exempt." Four items audited: 14px at 4.4:1; 19px bold at 3.2:1; 24px at 2.8:1; a logotype at 2.1:1. Ask how many fail.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** 14px needs 4.5:1 (4.4 fails); 19px bold takes the alternative route needing 3:1 (3.2 passes); 24px needs 3:1 (2.8 fails); the logotype is exempt — two fail. This tests reading three boundary conditions precisely: 4.4 rounds to 4 and still fails, "19 or larger and bold" is an alternative route rather than an additional condition, and the exemption is absolute — over-application here (reporting the bold text or logotype as failures) costs a specialist more credibility than the finding is worth.

**Question 2 (easy) — Deduction from a scope rule**

Regulation: "Public sector websites must meet the standard, unless the content is a pre-recorded audio or video published before 23 September 2020, or the content is on an intranet not substantially revised after 23 September 2019." A team states: "This video is exempt; it was published in 2019." Ask which conclusion must be true.

- A) The video is exempt.
- B) The video is not exempt.
- C) The video is exempt if it is pre-recorded, and not otherwise on the basis given.
- D) The regulation does not cover video.

**Correct answer: C**

**Explanation:** The time-based media exemption applies to pre-recorded content specifically; a live-streamed video published in 2019 would not qualify. This tests recognising that the team has established one fact (date) but not the other (pre-recorded), so only the conditional statement is guaranteed — exemption claims are almost always made on one criterion while the exemption has two, and accepting or rejecting on the date alone does the team's reasoning for them badly in either direction.

**Question 3 (moderate) — Severity against compliance**

An audit finds two issues: a decorative flourish image missing an empty alt attribute, and a form where the only error indication is a red border with no text. Both are failures. Ask how they should be presented.

- A) As two failures of equal standing, since both breach the standard.
- B) As two failures with clearly different severity: the missing empty alt causes a screen reader to announce a filename, a minor irritation, while error indication by colour alone means a user cannot tell what went wrong or where — one is a defect and the other is a blocker.
- C) Report only the error indication.
- D) Report the missing alt as a warning rather than a failure.

**Correct answer: B**

**Explanation:** Both are genuine failures, and treating them as equivalent is what makes audit reports unusable — a team with limited capacity needs to know which finding to fix on Monday. This tests documenting findings clearly with a severity ranking, rather than technically-accurate-but-practically-useless equal treatment (A), suppressing a real failure (C), or misrepresenting the standard by downgrading a genuine failure (D).

**Question 4 (moderate) — Prioritising a remediation plan**

An audit found: (i) a keyboard trap in a modal; (ii) fourteen images missing alt text; (iii) a heading structure skipping from h1 to h3; (iv) insufficient contrast on a decorative divider. A team can fix two before release. Ask which two, and why.

- A) (ii) and (iii), because there are more instances.
- B) (i) and (ii), because the keyboard trap prevents anyone using a keyboard from leaving the modal at all, and missing alt text on fourteen images removes information many users need — while the heading skip is a navigation inconvenience and the divider is decorative, so the requirement may not even apply.
- C) (i) and (iv).
- D) All four must be fixed before release.

**Correct answer: B**

**Explanation:** A keyboard trap is absolute — no workaround exists — so it goes first regardless of instance count; missing alt text on fourteen images removes real content. This tests prioritising by consequence rather than by count (A, the commonest error) or fixing everything regardless of the stated capacity constraint (D) — and, in a strong candidate's answer, noting the divider is probably outside the non-text contrast requirement's scope entirely, correcting a probable over-application in the audit itself.

**Question 5 (moderate) — A conforming interface that fails users**

A service passes every automated and manual check. Testing with screen reader users shows they complete tasks far more slowly and abandon more often. Ask for the strongest analysis.

- A) The testing must be flawed; the service conforms.
- B) Conformance and usability are different things: a service can meet every criterion and still be exhausting to use — for instance if the heading structure is technically correct but uninformative, if error messages are announced but not associated in a way that returns focus usefully, or if the reading order is valid but illogical — so the finding is real and points at issues the criteria do not capture.
- C) The criteria should be changed.
- D) The additional difficulty is acceptable since the service conforms.

**Correct answer: B**

**Explanation:** Conformance is a floor, not a description of a good experience, and this role names understanding the boundary between usability and accessibility explicitly. This tests naming concrete mechanisms that make a real but non-criterion-captured finding actionable, rather than dismissing the strongest evidence available — disabled users' actual experience — in favour of a checklist (A) or treating conformance itself as the goal (D).

**Question 6 (moderate) — A supplier's claim**

A supplier states their component library is "fully WCAG 2.2 AA conformant." An audit of two services using it found defects in four components. Ask for the most important observation before treating these as contradictory.

- A) The supplier is wrong.
- B) Conformance claims are typically established for components in isolation under default configuration, while defects arise when components are composed, customised and given real content and focus management — so both statements can be accurate about different things, and the question is what was tested.
- C) The audit should be repeated.
- D) The library should not be used.

**Correct answer: B**

**Explanation:** Supplier claims and internal audits routinely disagree without either being wrong, because of scope — a supplier tests in isolation with default settings, while real teams compose several components and defects appear at the joins. This tests converting an apparent contradiction into an answerable question about scope rather than picking an unnecessary fight (A) or an unfounded, disproportionate reaction (D).

**Question 7 (moderate) — Advising under a constraint**

A team states a fully accessible version of a complex data visualisation cannot be delivered before a statutory deadline. Ask for the strongest advice.

- A) The visualisation must be accessible or must not launch.
- B) Establish what information the visualisation conveys, and advise that the same information be made available in an accessible form — a table, a summary of the key findings, a downloadable dataset — since the requirement is that the information is accessible rather than that every presentation of it is, and this route is usually deliverable within the timeline.
- C) Advise them to publish an accessibility statement noting the gap.
- D) Advise a delay.

**Correct answer: B**

**Explanation:** Separating information from its presentation resolves most visualisation problems, and it provides a solution rather than a verdict. This tests advising with a deliverable route — option A is a verdict, and a specialist who only issues verdicts stops being consulted early, when advice is most useful — option C treats a statement as a way to launch with a known gap rather than what it actually does, disclose work in progress.

**Question 8 (harder) — Scoping a finding**

An audit reports: "The service fails WCAG 1.3.1 Info and Relationships." Ask what is wrong with this finding, and what it should say.

- A) Nothing; it identifies the criterion.
- B) It names a criterion without identifying what, where or why — a developer cannot act on it. A usable finding states the specific element and page, what is wrong in technical terms, what a user experiences as a result, and what the fix is: for example, that the address fields on the contact page are visually grouped but not associated in markup, so a screen reader user hears seven unrelated inputs, and a fieldset with a legend would fix it.
- C) It should cite the level and version.
- D) It should be rated for severity.

**Correct answer: B**

**Explanation:** This role names documenting findings clearly and providing solutions for others to work from, and a criterion reference alone does neither. This tests the four elements that make a finding actionable — location, technical fault, user impact, remedy — with the user impact element most often omitted and most valuable, since it is what makes a developer fix the problem properly rather than the minimum that clears the criterion.

**Question 9 (harder) — Diagnosing a systemic cause**

Across six audited services, the same three defects recur: missing form labels, non-descriptive link text, and unlabelled icon buttons. Ask for the strongest diagnosis.

- A) Six teams need training on those three issues.
- B) Three defects recurring across six teams suggests a shared cause — most likely a component library that permits or produces them, or a development framework whose defaults omit accessible names, or the absence of any check between writing code and merging it — and identifying which determines whether the remedy is a component fix, a linting rule, or a change to the workflow.
- C) Accessibility awareness is low across the organisation.
- D) Audits should be more frequent.

**Correct answer: B**

**Explanation:** Three specific defects recurring across six independent teams is not six coincidences — all three are missing accessible names, exactly what a linting rule or a required-label component prop could prevent mechanically. This tests naming realistic shared causes with different implied remedies, rather than the default and weakest response of training (A, which relies on human memory for something a machine could catch reliably) or a diagnosis too general to act on (C).

**Question 10 (harder) — A disagreement about severity**

A developer argues a colour-only status indicator is a minor issue because the status is also in the page title. Ask for the strongest way to resolve this.

- A) Cite the criterion and require the fix.
- B) Establish whether the page title genuinely conveys the same information at the moment the user needs it — a title change may not be announced, may not be noticed by a sighted user with colour vision deficiency who is looking at the indicator, and may not distinguish between multiple items on one page — because if it does convey it, the developer may be right, and if it does not, the specific reason is the argument.
- C) Escalate to the developer's lead.
- D) Concede; there is redundancy.

**Correct answer: B**

**Explanation:** Redundant encoding genuinely can satisfy the requirement, so the developer's argument may be right for specific reasons; three named factors would defeat it. This tests establishing the specific facts that resolve a legitimate technical disagreement rather than asserting the criterion without engaging with the argument (A) or conceding without checking (D).

**Question 11 (harder) — Proportionality and risk**

A service has forty-one audit findings: two blockers, eleven serious, twenty-eight minor. A team has capacity for the blockers and about half the serious issues before a legally significant deadline. Ask for the strongest advice.

- A) All findings must be fixed by the deadline.
- B) Advise fixing both blockers and prioritising the serious issues by the number of users affected and whether a workaround exists, publish an accessibility statement disclosing what remains with a dated plan, and set the remaining work against subsequent releases — since a disclosed, planned gap is a materially different position from an undisclosed one.
- C) Advise delaying the deadline.
- D) Advise fixing the twenty-eight minor issues, since they are quick.

**Correct answer: B**

**Explanation:** This role names reducing or removing risk associated with not meeting standards, a proportionality judgement rather than an all-or-nothing one, and this option uses the accessibility statement for its actual purpose — disclosing known gaps with a plan. This tests advising proportionately within a stated capacity constraint — option A ignores the constraint entirely, and D is the trap that feels productive while leaving serious barriers in place.

**Question 12 (harder) — Representing users**

Two designs are being compared; automated and manual testing shows both conform. Testing with disabled users shows a clear preference for one. A stakeholder says conformance is what matters. Ask for the strongest response.

- A) Agree; conformance is the requirement.
- B) Agree that conformance is the requirement and point out that it is a floor rather than a goal — where two options both conform, the evidence from disabled users is the only thing distinguishing them, and disregarding it means choosing the worse option deliberately while meeting the letter of the standard.
- C) Argue that the preference testing overrides conformance.
- D) Escalate.

**Correct answer: B**

**Explanation:** Conceding the stakeholder's correct premise while winning the actual decision is what makes this argument likely to succeed. This tests using disabled-user evidence as the deciding factor once conformance stops discriminating between options — option C sets up a false conflict, since nobody is proposing to breach the standard, and D escalates a conversation that can be won directly.

### Administration tips

- Score for whether the candidate reads a criterion, threshold or exemption exactly at its stated boundary, resisting both over- and under-application.
- Note whether the candidate separates severity from mere compliance when presenting or prioritising findings.
- Watch for whether a finding is written with all four elements — location, technical fault, user impact, remedy — rather than a bare criterion citation.
- Score for whether the candidate looks for a shared systemic cause behind recurring findings across multiple teams or services.
- Note whether advice is offered as a deliverable route rather than only a verdict.

### Common pitfalls to watch for when scoring

- Crediting a finding reported as a failure where the criterion, on close reading, does not actually apply (over-application).
- Missing when a candidate treats all findings as equal severity rather than ranking by consequence.
- Rewarding a criterion citation with no location, technical detail, user impact, or remedy attached.
- Accepting a diagnosis of "more training" for a defect a linting rule or component fix would prevent mechanically.
- Missing when a candidate issues a verdict ("must fix," "cannot launch") without offering an achievable route.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles the quantitative material this role produces and consumes. Accessibility work is unusually full of numbers with thresholds attached — contrast ratios, target sizes, timing limits, reflow widths, text spacing multipliers — and full of numbers used in argument: prevalence figures, audit counts, remediation estimates, and the population sizes that determine whether a barrier affects a handful of people or a hundred thousand.

That second category matters because accessibility arguments are frequently lost not on the technical case but on how it is presented in a room making a resourcing decision — "this fails 1.4.3" competes with everything else in a backlog, while "this affects an estimated 34,000 people a year, and the organisation has a statutory duty" does not.

Typical format: a timed online test of fifteen to thirty minutes, each item presenting a table, chart, or paragraph of figures with a multiple-choice question, calculator usually provided. Four habits carry the load: establish what the question asks before looking at the data; identify the denominator and the population it represents; estimate, calculate, compare; sanity-check against the world.

### How this assessment maps to the role

- **Ratios and thresholds** map to **Technical understanding (accessibility)**, where knowing standards including edge cases is numerical as much as conceptual.
- **Prevalence and population arithmetic** map to **Communicating information**, where managing stakeholder expectations depends on expressing impact in terms they weigh.
- **Comparing rates between groups** maps to **User focus**, where championing research to focus on all users means being able to show the gap.
- **Estimating remediation** maps to **Leadership and guidance**, where decisions of medium risk and complexity require a sense of cost.
- **Interpreting audit data** maps to **Governance and assurance (accessibility)**, where risk is a function of severity and scale.
- **Detecting misleading figures** maps to **Consultancy**, where advice built on a misread number is hard to withdraw.

### Practice questions

**Question 1 (easy) — Thresholds at the boundary**

A criterion requires 4.5:1 for text under 24 pixels and 3:1 for text 24 pixels or larger. Four items: 14px at 4.4:1; 18px at 4.5:1; 24px at 2.9:1; 28px at 3.0:1. Ask how many conform.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** 14px needs 4.5:1 (4.4 fails); 18px meets 4.5:1 exactly (passes, "at least" is inclusive); 24px falls into the "24 or larger" category needing 3:1 (2.9 fails); 28px needs 3:1 (3.0 passes). This tests three distinct boundary readings simultaneously — over-application at 4.5, the wrong threshold applied at 24px, and rounding 4.4 up — each a real error in audit work that damages a specialist's statutory-weight findings.

**Question 2 (easy) — Prevalence arithmetic**

A service has 850,000 users a year; roughly 1 in 12 men and 1 in 200 women have red-green colour vision deficiency, with the user base roughly evenly split by sex. Ask roughly how many affected users a year.

- A) 3,500
- B) 37,500
- C) 70,000
- D) 106,000

**Correct answer: B**

**Explanation:** Men: 425,000÷12≈35,400; women: 425,000÷200≈2,100; total ≈37,500. This tests applying the correct rate to each sub-population rather than one rate to the whole (C doubles the male figure by applying it to everyone; A applies the female rate to everyone) — the arithmetic is what converts "colour blindness is rare" into a number that changes a conversation, and hedged framing ("roughly," "around") matters since prevalence figures vary by source.

**Question 3 (easy) — Audit counts and severity**

An audit found 2 blockers, 11 serious, and 28 minor issues. Ask what proportion of findings are blockers or serious.

- A) 24%
- B) 32%
- C) 68%
- D) 76%

**Correct answer: B**

**Explanation:** Total 41; blockers+serious=13; 13÷41≈32%. This tests basic proportion calculation, and, in a strong candidate's answer, recognising the presentation value: "thirteen findings that matter before release, of which two are blockers" reads as a plan, while "forty-one findings" reads as unactionable.

**Question 4 (easy) — Reflow arithmetic**

A criterion requires content to reflow without horizontal scrolling at a viewport width equivalent to 320 CSS pixels. A page is designed at 1,280 pixels wide. Ask what zoom level produces an equivalent effective width of 320 pixels.

- A) 200%
- B) 300%
- C) 400%
- D) 500%

**Correct answer: C**

**Explanation:** At 400% zoom, 1,280÷4=320. This tests the zoom-to-effective-width relationship a specialist needs to explain why 400% is the test rather than an arbitrary large number, since the reflow requirement is usually tested by zooming rather than resizing a window.

**Question 5 (moderate) — Comparing groups fairly**

Of 1,200 users, 1,080 completed a task; of 150 screen reader users, 45 completed. Ask for the gap in percentage points.

- A) 30
- B) 60
- C) 70
- D) 90

**Correct answer: B**

**Explanation:** General users 90%; screen reader users 30%; gap 60 points. This tests computing the actual gap rather than reporting either rate as if it were the gap (A, D are the two individual rates) — "screen reader users complete this task at one third the rate of other users" is the sentence that travels.

**Question 6 (moderate) — Small-base caution**

An audit reports "only 3% of screen reader users completed the checkout," based on 1 of 33 participants. Ask for the strongest observation.

- A) The finding is clear.
- B) The arithmetic is right and the base is too small to support a percentage at that precision — one more success would make it 6% — so the honest statement is "1 of 33 participants completed", which is a devastating finding on its own and does not need a rate to carry it.
- C) More participants are needed before reporting.
- D) The figure should be rounded.

**Correct answer: B**

**Explanation:** A percentage from a base of 33 with a single success implies a precision the data does not have, and a stakeholder who notices will use it to discount the whole report. This tests reporting a small base as a raw count rather than a percentage — option C would delay a finding that is already conclusive (32 of 33 failing does not need more participants), and A invites the exact challenge the percentage framing sets up.

**Question 7 (moderate) — Estimating remediation**

An audit found 14 instances of missing alt text across 6 templates; a developer estimates 20 minutes per instance. Ask for the most useful thing to establish before accepting the estimate.

- A) Whether 20 minutes is reasonable.
- B) Whether the 14 instances sit in 14 places or in 6 templates — because if the images are template-level, fixing 6 templates resolves all 14, and the estimate should be around 2 hours rather than nearly 5.
- C) Whether the developer has done this before.
- D) The total, which is 4 hours 40 minutes.

**Correct answer: B**

**Explanation:** If images are template-level rather than content-level, the unit of work is the template, and the estimate falls by more than half. This tests establishing the actual unit of remediation work before accepting an estimate — an estimate treating instances as independent consistently overstates template-level work, and a specialist unable to spot this has no basis for advising on what is achievable before a deadline.

**Question 8 (moderate) — Scale of a shared defect**

A component with a keyboard trap is used across 9 services with combined annual sessions of 3.6 million; around 3% of sessions involve keyboard-only navigation. Ask how many sessions a year are affected.

- A) 10,800
- B) 108,000
- C) 1,080,000
- D) 36,000

**Correct answer: B**

**Explanation:** 3%×3,600,000=108,000. This tests basic percentage-of-total arithmetic that converts a component defect into an organisational priority — and, in a strong candidate's answer, noting the 3% figure covers keyboard-only navigation specifically and understates the affected population, since the trap also affects switch, voice-control, and temporary keyboard users.

**Question 9 (moderate) — Percentage change**

Reported accessibility defects across an estate fell from 640 to 480 over a year, after a linting rule was added to the build pipeline. Ask for the change, and what should be checked.

- A) 25% decrease, demonstrating the rule worked
- B) 25% decrease, and the check is whether the rule catches the defect types that fell — if the fall is concentrated in missing accessible names, which linting detects, that supports attribution; if it is spread evenly, something else is happening
- C) 33% decrease, demonstrating the rule worked
- D) 33% decrease, with the same caution

**Correct answer: B**

**Explanation:** (640−480)÷640=25%, ruling out C and D's mis-division by the new figure. This tests naming the specific check that would establish attribution — a specialist who claims credit for a fall without attributing it will be caught when a subsequent year's figures move the other way.

**Question 10 (harder) — A conformance percentage**

A report states "the service is 94% conformant." Ask for the strongest observation.

- A) 94% is good.
- B) Conformance is not a percentage — a service either meets each success criterion or does not, and a single unmet criterion means the service does not conform at that level; "94%" probably means 94% of checks passed, which tells you nothing about severity, since one failed check can be a total barrier.
- C) The remaining 6% should be fixed.
- D) The figure should specify which criteria.

**Correct answer: B**

**Explanation:** A percentage obscures exactly what matters — a service failing one criterion (a keyboard trap, say) can be unusable for a group of people while scoring 99%. This tests recognising the category error of a conformance percentage — option C accepts the framing and treats the remainder as a proportionate leftover, and the useful move is asking for the list of unmet criteria, the only meaningful form of the answer.

**Question 11 (harder) — Weighted comparison across services**

Four services report defects per hundred components: 3 on 400 components, 9 on 100, 5 on 200, 4 on 300. Ask for the overall rate per hundred.

- A) 4.3
- B) 4.6
- C) 5.25
- D) 6.0

**Correct answer: A**

**Explanation:** Converting to counts: 12+9+10+12=43 defects across 1,000 components = 4.3 per hundred. This tests returning to counts before combining rates — option C is the unweighted mean, over-weighting the 100-component service against the 400-component one, and only the weighted figure describes the average component users actually encounter.

**Question 12 (harder) — Presenting risk**

Advising a board on the risk of launching with eleven unresolved serious findings. Ask which framing is strongest.

- A) The service does not conform to WCAG 2.2 AA.
- B) Eleven serious findings remain, affecting an estimated number of users in specific ways — set out the two or three with the largest affected populations and no workaround, state the statutory position plainly, and present the disclosed-and-planned option against the undisclosed one, since those are materially different risk positions.
- C) The service has an 11-item backlog.
- D) The risk is legal and should go to the legal team.

**Correct answer: B**

**Explanation:** A board decides on consequence and exposure, and naming the two or three findings with the largest affected populations converts eleven abstractions into a decision a board can actually weigh. This tests supplying consequence, population, and disclosure position together — option A is true and tells nobody what will happen or to whom, C strips the risk out entirely, and D outsources a judgement this role exists to make.

### Administration tips

- Score for whether the candidate reads a numeric threshold at its precise boundary rather than rounding toward a convenient answer.
- Note whether percentages of a user base are converted into absolute people before their significance is judged.
- Watch for whether a small-sample finding is reported as a raw count rather than an overprecise percentage.
- Score for whether the candidate returns to underlying counts before combining or averaging rates across groups of different sizes.
- Note whether a candidate rejects a conformance percentage as a category error and asks for the underlying list of unmet criteria.

### Common pitfalls to watch for when scoring

- Crediting a contrast ratio or threshold rounded in the candidate's favour rather than read exactly.
- Missing when a candidate reports a small-sample finding as an overprecise percentage rather than a raw count.
- Rewarding an unweighted average of rates across groups of unequal size.
- Accepting "X% conformant" as a meaningful statement of compliance.
- Missing when a candidate claims attribution for a change (a defect reduction, an improvement) without checking whether the intervention actually explains it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. Accessibility practice is built on documents written with unusual precision — success criteria, understanding documents, regulations, exemptions, procurement standards — and authority in this role rests on reading them exactly as written. A specialist who over-reads a criterion loses credibility; one who under-reads it lets a barrier through.

The classic format presents a short passage of dense workplace prose followed by statements to classify as True, False, or Cannot Say. True means the statement follows necessarily; False means the passage contradicts it; Cannot Say means the passage neither establishes nor excludes it — regardless of what the candidate knows. This is harder for a strong candidate than most, since deep knowledge of these documents makes it easy to supply the clause expected rather than the one actually in front of them.

Cannot Say deserves particular attention, since forming a definite view is what the job usually consists of — but the honest answer, in this section and in practice, is sometimes that the document does not determine it. Small words carry the load: "all" is not "most," "may" is not "must," "or" offers alternative routes and reading it as "and" produces over-application, and "substantially," "pre-recorded" and "essential" are the load-bearing qualifiers that have decided real disputes.

### How this assessment maps to the role

- **Reading precisely** maps to **Technical understanding (accessibility)**, where excellent knowledge of standards and legislation including edge cases is named.
- **Separating statement from inference** maps to **Consultancy**, where advice must be traceable to what a document actually says.
- **Identifying the main point** maps to **Communicating information**, where requirements are communicated to a range of stakeholders.
- **Handling qualified language** maps to **Governance and assurance (accessibility)**, where knowing exactly what a requirement bites on determines the risk position.
- **Reading for absence** maps to **Technical understanding**, where noticing a specification never addresses a case is what stops a candidate asserting one.
- **Reading exemptions accurately** maps to **Governance and assurance**, where a misread exemption is a compliance failure or an unnecessary cost.

### Practice questions

*Passage A — for Questions 1 to 4.* "Public sector bodies must ensure their websites meet the accessibility standard. This does not apply to pre-recorded time-based media published before 23 September 2020, to live time-based media, to online maps provided the essential information is available in an accessible alternative format, or to content on an intranet or extranet published before 23 September 2019 and not substantially revised since. Third-party content that the body neither funds, develops nor controls is also outside scope."

**Question 1 (easy)**

Statement: "All content on a public sector website must meet the standard."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage lists five categories outside scope, contradicting "all." This tests spotting an absolute word against a passage that names substantial, real-world exceptions — carrying "everything must conform" as a working assumption leads a specialist to spend effort on content outside scope.

**Question 2 (easy)**

Statement: "A live-streamed event published in 2018 is exempt."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage exempts live time-based media with no date condition attached; the date qualifies only the pre-recorded exemption. This tests attaching a qualifier to the correct clause rather than a general "date on media" rule that would fail the moment a live stream from a later year appeared.

**Question 3 (moderate)**

Statement: "An online map is exempt."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The map exemption is conditional on the essential information being available in an accessible alternative format, and whether that condition is met is not stated. This tests recognising a conditional exemption as genuinely conditional — "maps are exempt" circulates as an unconditional shorthand that lets teams publish a map with no alternative and believe they are compliant.

**Question 4 (harder)**

Statement: "Intranet content published in 2018 and rewritten last month is exempt."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The intranet exemption requires both a pre-2019 publish date and no substantial revision since; a rewrite last month is a substantial revision, defeating the second condition. This tests catching a compound conjunctive condition — a live issue in practice, since improving old content brings it back into scope, which is a reason to plan for accessibility work alongside the improvement rather than a reason to avoid improving it.

*Passage B — for Questions 5 to 8.* "The audit of the department's services found that teams with an accessibility specialist embedded reported fewer defects at launch than teams without. The audit notes that embedded specialists were assigned to services judged higher risk at the outset. The audit did not assess whether the services were more accessible in use. It recommends that the head of accessibility consider whether embedding should be extended."

**Question 5 (easy)**

Statement: "Teams with an embedded specialist reported fewer defects at launch."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests noticing the passage's careful "reported fewer defects" rather than "had fewer defects" — the statement respects the same careful wording.

**Question 6 (moderate)**

Statement: "Embedding a specialist reduces defects."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage flags that embedded specialists were assigned to higher-risk services — which, if anything, would be expected to produce more defects, making the causal claim more interesting and no more conclusive. This tests the specific trap of a claim a candidate would like to be true (an argument for more embedded posts) yet the passage does not actually support.

**Question 7 (moderate)**

Statement: "Services with embedded specialists are more accessible in use."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states the audit did not assess accessibility in use. This tests treating declared silence as establishing nothing — the distinction between defects at launch and accessibility in use is exactly the conformance-versus-experience boundary this role is built around.

**Question 8 (harder)**

Statement: "The audit recommends extending embedding."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The audit recommends the head of accessibility "consider whether" embedding should be extended — a recommendation to evaluate, not a recommendation to extend. This tests distinguishing "consider whether X" from "recommend X," since resourcing recommendations are quoted selectively by people on both sides of a resourcing argument.

*Passage C — for Questions 9 to 12.* "A conformance claim must state the standard and level claimed, the date, the scope of the claim including the pages covered, and any technologies relied upon. Where a page contains third-party content outside the body's control, the claim may exclude that content provided the exclusion is stated. A claim may not be made for a level unless every applicable success criterion at that level and all lower levels is met. Partial conformance may be claimed for content produced by third parties only where the body has requested remediation."

**Question 9 (easy)**

Statement: "A conformance claim must state which pages it covers."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests the baseline reading, and, in a strong answer, noting why the requirement exists — an unscoped conformance claim is unfalsifiable and therefore worthless.

**Question 10 (moderate)**

Statement: "A service meeting all AA criteria but failing one A criterion may claim AA conformance."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage requires every applicable criterion at the claimed level and all lower levels to be met — a single A failure defeats an AA claim. This tests recognising that conformance levels are cumulative rather than independent rungs, a genuinely common misunderstanding with a real consequence: a missing page title can invalidate an AA claim for a whole page.

**Question 11 (harder)**

Statement: "A body may exclude uncontrolled third-party content from a claim without saying so."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exclusion is permitted "provided the exclusion is stated," which a silent exclusion fails. This tests recognising a condition attached to a permission — an unstated exclusion makes a claim misleading rather than merely narrow.

**Question 12 (harder) — Main point**

Ask which best captures the main point of Passage C.

- A) Conformance claims must state the standard and level.
- B) A conformance claim must be scoped, dated and honest about its limits — stating what it covers and what it relies on, excluding uncontrolled third-party content only openly, and claiming a level only where every criterion at that level and below is met.
- C) Partial conformance may be claimed for third-party content.
- D) A claim may not be made unless all criteria are met.

**Correct answer: B**

**Explanation:** The main point must cover the whole passage while adding nothing. This tests identifying a summary that preserves the conditions the shorter options discard — A is one element, C one conditional clause, D drops the level structure and the disclosure requirements — the difference between a summary a colleague can act on and one that will mislead them.

### Administration tips

- Score for whether the candidate points at the specific phrase in the passage that makes a statement True, rather than answering from professional knowledge.
- Note whether the candidate attaches a qualifier or condition to the correct clause in a passage with multiple related clauses.
- Watch for whether a conditional exemption is treated as genuinely conditional rather than as an unconditional shorthand.
- Score for whether the candidate distinguishes "consider whether X" from "recommend X" and similar hedged institutional language.
- Note whether Cannot Say is used correctly even where the alternative answer would support the candidate's own professional interests.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of the candidate's own professional knowledge rather than the passage.
- Missing when a candidate carries "everything must conform" as an assumption despite a passage listing real exceptions.
- Rewarding a conditional exemption repeated without its condition.
- Accepting conformance levels treated as independent rungs rather than cumulative.
- Missing when a candidate marks True on a claim that would happen to support more resource or standing for their own function.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what the candidate would do. It measures whether judgement matches what the profession considers good practice at this level. This role embeds accessibility into the output of teams, coaches and mentors, inputs into strategy, delivers training, engages across levels and capabilities, and may lead individuals or sub-teams. The strongest answers involve advising rather than instructing, holding a position where the evidence warrants it, and building capability rather than becoming the person everything routes through.

Four principles carry most scenarios. Disabled users come first, and the asymmetry matters — a barrier is not a slightly worse experience, it is no experience. Be accurate before being forceful — findings carry statutory weight, which makes over-application expensive, since a specialist who reports something as a failure when it is not spends credibility the genuine requirements need. Advise with a route, not a verdict — a specialist who only says no is consulted late. Build capability rather than dependency — a team that can catch its own defects is worth more than one that waits for an audit.

### How this assessment maps to the role

- **Advising and recommending** maps to **Consultancy**, where advice is provided based on significant specialist knowledge.
- **Coaching and building capability** maps to **Leadership and guidance**, and to this role level's named coaching and training responsibilities.
- **Handling difficult conversations** maps to **Communicating information**, hosting or moderating difficult discussions with teams and senior stakeholders.
- **Managing risk proportionately** maps to **Governance and assurance (accessibility)**, challenging teams and reducing risk.
- **Representing disabled users** maps to **User focus**, championing research focused on all users.
- **Technical judgement** maps to **Technical understanding (accessibility)**, including edge cases and the boundary with usability.

### Practice questions

**Question 1 (easy) — A team disputes a finding**

A developer disputes a finding: the flagged element has an ARIA label, so it is not missing an accessible name. Checking confirms the label is present but does not match the visible text. Ask for the most effective response.

- A) Restate the finding.
- B) Acknowledge that the label is present and explain the specific issue — that a visible label and an accessible name which differ break voice control, because a user saying the visible words does not activate the control — then correct the finding to name the actual fault rather than a missing name.
- C) Withdraw the finding.
- D) Escalate to their lead.

**Most effective: B. Least effective: A**

**Explanation:** The developer is partly right, and immediately conceding that establishes findings are checked rather than asserted, while the actual fault (mismatched label and accessible name breaking voice control) remains real and demonstrable. This tests conceding a correct point precisely while correcting the finding rather than restating an inaccurately worded one (A, least effective, teaching a developer that reports are not worth reading carefully).

**Question 2 (easy) — Training that does not land**

Accessibility training delivered to six teams has not changed defect rates. Ask for the most effective response.

- A) Deliver the training again with clearer material.
- B) Find out what is preventing the behaviour rather than assuming the knowledge did not land — most likely that nothing in the workflow requires a check, or that checking is manual and skipped under pressure — then put a check where work already flows, ideally automated.
- C) Make the training mandatory.
- D) Increase audit frequency.

**Most effective: B. Least effective: A**

**Explanation:** Unchanged behaviour after training is evidence knowledge was not the barrier, and a meaningful class of accessibility defects can be caught mechanically, removing reliance on anyone remembering. This tests diagnosing before repeating an intervention — option A is least effective, spending the credibility of the next intervention on repeating one that demonstrably did not work.

**Question 3 (easy) — A junior colleague's audit**

A mentee's audit reports nineteen findings, four judged to be over-applications where criteria are cited but do not bite. Ask for the most effective response.

- A) Correct the report before it goes out.
- B) Go through the four with them, explaining in each case why the criterion does not apply, and agree that they will re-issue it — because a report going out with four over-applications damages their standing with the team more than a day's delay does.
- C) Send it as it is and correct the record later.
- D) Ask them to remove the four without explanation.

**Most effective: B. Least effective: C**

**Explanation:** Both accuracy and learning matter, and having the mentee re-issue the report rather than correcting it directly makes this coaching rather than correction. This tests transferring the reasoning behind over-application (why it costs a specialist a team's trust) rather than letting inaccurate findings reach a team first (C, least effective, the sequence most damaging to both the mentee's and the mentor's credibility).

**Question 4 (moderate) — A team asks for a shortcut**

A team asks whether they can launch with a known keyboard trap and fix it in the first patch, two weeks later. Ask for the most effective response.

- A) Say no; a keyboard trap is a blocker.
- B) Explain what a keyboard trap means in practice — a keyboard user entering the dialogue cannot leave it, so their session ends there with no workaround — establish whether the trap can be removed by reverting to the standard component rather than fixing the custom one, and if it genuinely cannot, put the launch decision to whoever owns the risk with that description attached.
- C) Agree, provided an accessibility statement discloses it.
- D) Escalate immediately.

**Most effective: B. Least effective: C**

**Explanation:** Describing the consequence concretely, checking the practical fix (reverting to a standard component) that nobody thinks of under pressure, and routing the decision to the risk owner together make this the strongest response. This tests offering a route rather than a bare refusal (A) — option C is least effective, misusing the accessibility statement (which discloses gaps being worked on) to authorise launching with a total barrier, setting a precedent that will be quoted back.

**Question 5 (moderate) — Disagreement with a designer**

A designer argues a status system using colour plus position is sufficient, since position is a second cue. Ask for the most effective response, given uncertainty.

- A) Cite the criterion and require an icon or text.
- B) Establish whether position genuinely conveys the status independently — if the items are in a fixed order that means something, it may; if the order is arbitrary or changes, it does not — and test it by describing the interface to someone without seeing it, since that is close to what the requirement is asking.
- C) Concede; two cues are enough.
- D) Escalate.

**Most effective: B. Least effective: A**

**Explanation:** Redundant encoding is exactly what the requirement asks for, and position can be a genuine second cue — whether it is here depends on facts not yet established. This tests establishing facts before asserting a criterion — option A is least effective, an over-application in circumstances where the criterion may not actually be breached.

**Question 6 (moderate) — A supplier's conformance claim**

Procurement asks whether a supplier's "fully WCAG 2.2 AA conformant" claim is sufficient assurance. Ask for the most effective response.

- A) Yes; the claim is explicit.
- B) Ask what the claim covers — which pages or components, tested in isolation or composed, with which assistive technologies, and at what date — because conformance claims are commonly established for components under default configuration, and defects appear when they are composed and customised; then advise procurement to require the claim's scope be stated in the contract.
- C) No; supplier claims cannot be trusted.
- D) Commission your own audit before contract.

**Most effective: B. Least effective: A**

**Explanation:** Requiring the scope in the contract converts a marketing statement into an obligation, more valuable than any assessment of the claim as it stands. This tests scoping an unqualified claim before treating it as assurance — option A is least effective, treating an unscoped claim as assurance, exactly how organisations acquire inaccessible systems with paperwork saying otherwise.

**Question 7 (moderate) — Bringing the voice of disabled users**

Two designs are compared; both conform. Testing with disabled users shows a clear preference. A stakeholder says conformance is the requirement. Ask for the most effective response.

- A) Agree; conformance is the requirement.
- B) Agree that conformance is the requirement, and point out that it is a floor rather than a goal — where both options conform, the standard has stopped discriminating and the evidence from disabled users is the only thing distinguishing them, so disregarding it means deliberately choosing the worse option while meeting the letter of the rule.
- C) Argue that the preference evidence overrides conformance.
- D) Escalate.

**Most effective: B. Least effective: C**

**Explanation:** Conceding the stakeholder's correct premise while winning the decision is what makes this likely to succeed, and using disabled-user evidence as the deciding factor is what "bringing the voice of disabled users" means concretely here. This tests using evidence to decide between equally-compliant options — option C is least effective, setting up a false conflict in which nobody has actually proposed a breach.

**Question 8 (harder) — A finding nobody wants**

Two days before launch, a barrier affecting screen reader users is found on the payment step; fixing it delays launch, and a delivery manager argues the risk is small because few users use screen readers. Ask for the most effective response.

- A) Insist on the delay.
- B) Supply the arithmetic — even a conservative proportion of the service's user base runs to thousands of people a year, and a barrier at payment means they cannot complete a transaction at all — set out the statutory position plainly, check whether a temporary alternative route exists, and put the decision to whoever owns the risk with a recorded answer.
- C) Agree; the numbers are small.
- D) Escalate to the head of accessibility immediately.

**Most effective: B. Least effective: C**

**Explanation:** Leading with arithmetic counters the intuition about proportion directly, and checking for a temporary alternative route and routing to a recorded decision are both practical and correct governance. This tests countering a rarity argument with a concrete number rather than accepting it — option C is least effective, an argument that would justify excluding any minority.

**Question 9 (harder) — Capability rather than dependency**

Teams increasingly send every design for accessibility review before build, and the review queue is now three weeks long. Ask for the most effective response.

- A) Work through the queue faster.
- B) Recognise the queue as a signal of having become a dependency rather than a capability: identify the checks teams could reliably do themselves, give them the means to do so, and reserve review for genuinely complex or high-risk cases — then measure whether the queue shortens.
- C) Ask for another specialist.
- D) Introduce criteria for what qualifies for review.

**Most effective: B. Least effective: A**

**Explanation:** A three-week queue means teams are waiting on things many could do themselves, and this role names coaching, mentoring and training precisely to make that possible. This tests reframing a capacity problem as a capability problem — option A is least effective, guaranteeing the bottleneck remains permanent by treating a structural problem as an effort problem.

**Question 10 (harder) — Inputting into strategy**

Contributing to a business area's accessibility strategy, whose draft consists of a commitment to WCAG 2.2 AA and an annual audit. Ask for the most effective contribution.

- A) Endorse it; those are the right commitments.
- B) Point out that an annual audit detects rather than prevents, so the strategy commits to finding defects once a year after they have shipped — and propose the additions that change the outcome: an automated check in the build, an accessibility acceptance criterion on stories, procurement requirements, and named capability development, since a strategy without a prevention mechanism produces the same defects annually.
- C) Suggest quarterly audits.
- D) Suggest adding a training commitment.

**Most effective: B. Least effective: A**

**Explanation:** Everything in the draft operates after the fact; naming mechanisms at the points where defects are created rather than discovered is the specific, structural improvement. This tests proposing prevention mechanisms rather than more detection — option A endorses a strategy that will not change the defect profile, and option C quadruples workload without touching creation.

**Question 11 (harder) — A difficult discussion with a senior stakeholder**

A director dismisses an audit finding as "gold-plating" and says the service is good enough. Ask for the most effective response.

- A) Restate the finding and the criterion.
- B) Establish what "good enough" is being measured against — if the concern is proportionality on minor findings, that is a conversation you can have and may partly agree with; if it is dismissal of blockers, name the specific barrier, who it affects and the statutory exposure, and ask for the decision to be recorded.
- C) Escalate to the head of accessibility.
- D) Accept the judgement; it is theirs to make.

**Most effective: B. Least effective: D**

**Explanation:** "Gold-plating" covers two very different objections, and the response depends entirely on which is meant — conceding a fair point about minor findings costs nothing, while dismissed blockers need specifics and a recorded decision. This tests diagnosing the objection before responding to it — option D is least effective, treating the decision as theirs to make without ensuring it is made on adequate information, and leaving a real risk neither owned nor documented.

**Question 12 (harder) — A colleague's practice concerns you**

A specialist in another team routinely reports usability problems as conformance failures, and teams have started disputing accessibility findings generally. Ask for the most effective response.

- A) Correct the specific reports.
- B) Speak to them directly and privately about the pattern, using two or three specific examples, and explain the consequence you are both experiencing — that conflating usability findings with conformance failures gives teams grounds to dispute everything, including the genuine failures — then agree how to report usability issues in a way that keeps them visible without miscategorising them.
- C) Raise it with their manager.
- D) Raise it at the accessibility community.

**Most effective: B. Least effective: D**

**Explanation:** The problem's consequence is shared, and a direct conversation with specific examples has something to be about beyond correctness — a reporting convention is the fix, since usability findings deserve visibility just not the conformance-failure label. This tests handling a colleague's damaging pattern directly and privately first — option D is least effective, raising it publicly before speaking to the person, which will be experienced as an attack and harden the position.

### Administration tips

- Score for whether the candidate concedes a correct part of a dispute immediately rather than defending an inaccurate finding.
- Note whether responses describe concrete consequences ("a keyboard user cannot leave the dialogue") rather than citing criteria alone.
- Watch for whether the candidate treats a growing review queue or repeated training failure as a capability or systemic problem rather than a workload or knowledge problem.
- Score for whether advice to a stakeholder or team includes a deliverable route, not only a refusal or a verdict.
- Note whether a candidate raises a colleague's damaging practice directly and privately before escalating or going public.

### Common pitfalls to watch for when scoring

- Crediting a response that restates a finding shown to be inaccurately worded rather than conceding and correcting it.
- Missing when a candidate uses an accessibility statement to authorise launching with a known blocker rather than to disclose a genuine gap.
- Rewarding acceptance of an unscoped supplier conformance claim as sufficient assurance.
- Accepting a bare refusal ("no," "must fix") with no offered route as the strongest available response.
- Missing when a candidate escalates or goes public with a colleague's practice concern before attempting a direct, private conversation.

## Conclusion

This guide has worked through auditing reasoning that distinguishes a genuine failure from an over-application, separates severity from mere compliance, ranks a remediation plan by consequence rather than instance count, and writes findings with location, fault, impact and remedy; the arithmetic that turns accessibility into numbers people act on — reading thresholds at their boundaries, converting prevalence into people, reporting small bases as counts rather than overprecise percentages, and rejecting a bare conformance percentage; the discipline of reading standards, exemptions and conformance claims at exactly the strength the text supports, attaching qualifiers to the correct clause and distinguishing an assertion from an established fact; and the situational judgement that defines effective senior specialist work — advising with a route rather than a verdict, conceding a correct point immediately, and building capability in teams rather than dependency on the specialist.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — this role's findings carry statutory weight, and the strongest responses are precisely right at the boundary as well as offering a way forward; a technically impeccable specialist consulted too late has less effect than one equally precise and consulted early. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
