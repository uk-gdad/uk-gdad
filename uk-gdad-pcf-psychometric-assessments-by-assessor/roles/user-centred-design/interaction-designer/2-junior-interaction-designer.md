# Junior Interaction Designer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for junior interaction designer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A junior interaction designer explains design decisions, works collaboratively, has responsibility as part of a service, works independently after being given direction by more senior designers, and independently identifies user issues and important needs. That mix of independence and direction shapes this material: candidates analyse and synthesise evidence themselves rather than only reading someone else's findings, so items ask what evidence supports rather than only spot patterns in it; they prototype at different fidelities and iterate across successive rounds of research, so there are questions about method choice and about what an iteration can and cannot establish; and they have responsibility as part of a service, so the prioritisation and judgement items assume they will act rather than only observe.

Interaction design works at two scales simultaneously — the flow, meaning what order things happen in and what happens when they go wrong, and the element, meaning the label, the control, the error, the focus behaviour. A great deal of skill consists of moving between those scales and noticing when a decision at one breaks something at the other. Splitting a page improves the flow and doubles the number of times a user must wait for a page to load. Making a control cleverer improves the element and breaks it for anyone not using a mouse.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate judges the strength of a claim as well as noticing it — deciding how strongly a finding can be stated, choosing between reasonable approaches, or identifying which of two plausible explanations the evidence supports. Situational judgement items at this level consistently reward genuine independent action within remit, combined with prompt, honest disclosure of anything beyond it, and a check of both the flow and the element rather than one alone.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role genuinely uses, presented through practical materials rather than abstract shapes — components and their specifications, a flow with branches, a set of error messages, analytics for a page, research observations, an extract from a design standard.

Typical format: an online test of 15 to 30 minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level, often adaptive, with speed and accuracy reported separately.

For a junior interaction designer the core of the craft is disciplined noticing at two scales — that a page uses a pattern in a way it was not built for, that splitting a question across two pages doubles the number of times someone on a slow connection has to wait, that a validation rule rejects a format most people type, that the focus order jumps over the error summary, that two screens in the same service handle the same choice differently. What rises at this level, compared with a trainee's, is the expectation to judge as well as notice — several questions ask a candidate to decide how strongly a finding can be stated, choose between reasonable approaches, or identify which of two plausible explanations the evidence supports.

### How this assessment maps to the role

- **Pattern recognition** maps to **Evidence-based design**: analysing, synthesising and clearly explaining evidence relevant to users or a service, such as web analytics data.
- **Logical deduction** maps to **Design communication**: clearly explaining design decisions. A decision explained on an overreaching claim does not survive its first challenge.
- **Error checking** maps to **Designing for everyone**: ensuring a design meets appropriate standards such as accessibility regulations, with support.
- **Prioritisation** maps to **Iterative design**: applying iterative design principles and agile methodologies.
- **Applied problem solving** maps to **Iterative design**: prototyping at different fidelities and using and iterating design patterns and components.
- **Moving between flow and element** maps to **Designing strategically**: aligning design work to a team's wider goals.

### Practice questions

**Question 1 (easy) — Error checking a set of pages**

Question page rules: ask one thing, use a question as the label, include a back link, have one primary action, show errors both in a summary at the top and next to the field. Three pages: Page 1 — compliant; Page 2 — 1 thing asked, statement label, back link, 1 primary action, inline errors only; Page 3 — 2 things asked, question label, no back link, 1 primary action, summary and inline errors. Ask for the total number of rule breaches.

- A) 2
- B) 3
- C) 4
- D) 5

**Correct answer: C**

**Explanation:** Page 2 breaks two rules (statement label, inline-only errors); Page 3 breaks two (asks two things, no back link); total four. This tests counting breaches rather than non-compliant pages (the trap in A, which counts two pages) — and, in a strong candidate's answer, weighting by consequence: inline-only errors on Page 2 means a screen reader user may never encounter the message at all, a different order of problem from a statement label.

**Question 2 (easy) — Deduction from a component rule**

Rule: "A component may be used in a live service only if it is in the Design System, unless it has been reviewed and approved by the lead interaction designer." A developer reports: "We shipped a component last sprint that is not in the Design System." Ask which conclusion must be true.

- A) The standard was breached.
- B) The component was reviewed and approved by the lead.
- C) Either the component was reviewed and approved, or the standard was breached.
- D) The component is inaccessible.

**Correct answer: C**

**Explanation:** A conditional with a stated exception, plus facts silent on the exception, licenses only the disjunction. This tests concluding only what the facts guarantee — option D imports an unsupported quality judgement, since components outside the Design System are sometimes necessary and sometimes excellent — and, in a strong candidate's answer, framing a follow-up as "which route did this go through?" rather than an accusation.

**Question 3 (moderate) — Reconciling two evidence sources**

Research with ten participants found seven could not tell which of two buttons was the primary action; analytics show only 2% of users click the secondary button. Ask for the strongest interpretation.

- A) The research is unrepresentative; the analytics show almost nobody has a problem.
- B) The two measure different things — analytics record which button was eventually clicked, not how long it took or how confident the user was — so both can be true: most people work it out, and most people have to work it out, which is a cost in time and confidence that analytics cannot see.
- C) The sources contradict each other and cannot be reconciled.
- D) The secondary button should be removed.

**Correct answer: B**

**Explanation:** Analytics record an outcome (the click), while the research observed the process of arriving at it; a user who hesitates and then clicks correctly produces a clean analytics record and a poor experience. This tests naming what each evidence source actually measures before treating an apparent contradiction as real — option D leaps to a solution before the diagnosis, since the problem may be visual weight rather than the button's existence.

**Question 4 (moderate) — Prioritising a sprint**

Capacity for one substantial piece of work this sprint: (1) a new page goes into build in four days, nothing designed yet; (2) a live page has a 30% validation error rate on one field, unchanged for months; (3) a colleague wants help exploring a concept for next quarter; (4) the team wants to revisit a screen designed six weeks ago after minor copy changes. Ask which should be prioritised.

- A) Item 2, because it affects the most users.
- B) Item 1, because it is the only one where design work can still change what gets built inside the window, while item 2 remains valuable but is not time-boxed in the same way.
- C) Item 3, because early exploration has the highest leverage.
- D) Item 4, because unverified changes are a risk.

**Correct answer: B**

**Explanation:** Item 1 has a hard four-day window in which design can still shape what gets built; item 2 matters and has persisted for months, so deferring it briefly costs comparatively little, though it should be next. This tests ranking by whether work can still change a decision, not scale alone (option A, the most common error in this question type, which leaves teams perpetually analysing problems they cannot yet act on).

**Question 5 (moderate) — Choosing a fidelity**

A team needs to know whether users understand a new way of expressing a date range before committing to build, with one week available. Ask which approach fits best.

- A) A high-fidelity interactive prototype of the whole journey.
- B) A low-fidelity prototype of just the date range question, in two or three variants, because the question is about comprehension of an expression rather than about interaction detail — and low fidelity can be changed between sessions, letting several wordings be tested in a week.
- C) A written description read to participants.
- D) A live A/B test of two versions.

**Correct answer: B**

**Explanation:** The question at stake — comprehension of an expression — does not require working interactions, real data or polished visuals, and high fidelity can actively work against it, since participants respond to polish and are more reluctant to criticise something that looks finished. This tests matching fidelity to the actual question — option D cannot run without a build and would show which performed better without showing why.

**Question 6 (moderate) — Strength of a finding**

Eight of twelve participants did not notice a "save and come back later" link. Ask which conclusion is best supported.

- A) 67% of users do not notice the link.
- B) The link's discoverability is a substantial problem, evidenced across most participants, warranting design work and a follow-up check on whether the change helps.
- C) The link should be moved to the top of the page.
- D) The link is invisible.

**Correct answer: B**

**Explanation:** Eight of twelve is a strong qualitative signal, stated at that strength, with a named follow-up. This tests resisting a jump to one specific fix (option C, when the cause could be position, wording, visual weight, or an unexpected mental model) and resisting overreach in both directions — converting a sample into a population rate (A) or overstating "not noticed" into "invisible" (D).

**Question 7 (moderate) — Flow versus element**

A designer proposes splitting a page asking for name, date of birth and national insurance number into three pages, following the one-thing-per-page pattern; the service is used heavily on slow mobile connections in poor-coverage areas. Ask for the strongest analysis.

- A) Split it; one thing per page is the pattern.
- B) Splitting generally helps comprehension and error recovery, but it triples the number of page loads for this section, which is a real cost on a poor connection — so the strongest move is to split it and check what the added page weight and load time actually are, rather than treating either the pattern or the connection concern as automatically decisive.
- C) Do not split it; the connection issue outweighs the pattern.
- D) Split it but combine name and date of birth.

**Correct answer: B**

**Explanation:** This tests holding a flow-level pattern and an element-level cost (page weight, load time) together and turning the disagreement into something measurable, rather than treating either as automatically decisive (A and C) or picking an arbitrary middle without a reason (D).

**Question 8 (moderate) — Reading analytics to focus design work**

Journey: 24,000 start, 20,400 pass eligibility, 12,240 reach the declaration, 11,628 submit. Ask where design attention should go first.

- A) The start, because 3,600 users are lost there.
- B) Between eligibility and the declaration, because 8,160 users are lost there — more than twice any other step.
- C) Submission, because it is closest to the outcome.
- D) All steps equally.

**Correct answer: B**

**Explanation:** Eligibility-to-declaration loses 8,160, more than twice the loss at either other step (3,600 and 612). This tests calculating every step's loss before choosing where to look, rather than mistaking proximity to the outcome for size of problem (C) — expressed as rates, that stretch loses 40% of those reaching it, against 15% and 5% elsewhere.

**Question 9 (harder) — Distinguishing signal from artefact**

Six participants tested a new form: the four who completed easily all used desktop, the two who struggled both used a phone. A colleague concludes the form works on desktop and fails on mobile. Ask for the most rigorous response.

- A) Agree; the split is consistent.
- B) Note that device is a plausible explanation but rests on two phone users, who may differ in other relevant ways — digital confidence, whether they had documents to hand, whether they were at home — so it is a hypothesis to test rather than a finding, and the obvious next step is to recruit more phone users.
- C) Reject it; two participants show nothing.
- D) Recommend removing mobile access until the form is fixed.

**Correct answer: B**

**Explanation:** A perfect split like this should prompt investigation, and this tests holding two things together — the split is plausible, and two phone users is a thin base for a conclusion — rather than promoting it to a finding (A) or dismissing it entirely (C, which discards a genuine signal). Option D proposes a drastic action on thin evidence that would remove access from users who may have no alternative.

**Question 10 (harder) — A component's second-order cost**

A designer proposes replacing eight radio buttons with a searchable dropdown, arguing it takes less vertical space. Ask for the strongest analysis.

- A) Agree; vertical space matters on mobile.
- B) A searchable dropdown is a custom component that must work with keyboard alone, with screen readers, with voice input and at high zoom, and must be maintained; eight options gain almost nothing from search, and radio buttons let users see all options at once, which matters when they do not yet know what they are looking for — so the change adds accessibility risk and maintenance cost for a marginal space saving.
- C) It is fine if it is tested with screen reader users.
- D) Radio buttons should always be used for eight options or fewer.

**Correct answer: B**

**Explanation:** Search earns its complexity when a list is long enough that scanning is genuinely burdensome; with eight options everything is visible and search saves nobody meaningful effort. This tests weighing both sides and naming a less obvious cost (hiding options harms users who do not yet know their answer) — option C treats testing as a substitute for the design decision rather than a check on it.

**Question 11 (harder) — Reconciling contradictory evidence**

A satisfaction survey of 1,500 users reports 79% positive; twelve moderated sessions found substantial frustration, with nine participants describing significant difficulty; the contact centre reports the service as its third-highest call driver. Ask how this should be synthesised.

- A) Trust the survey; 1,500 responses outweigh twelve sessions.
- B) The sources measure different populations and constructs: satisfaction surveys are typically served at the end of a journey, so people who abandoned rarely see them, and they often ask about outcome rather than process — while contact centre volume is behavioural evidence at scale corroborating the sessions. The picture is a service most people complete, many find hard, and a substantial minority need help with.
- C) The sources conflict irreconcilably.
- D) The service is performing well with minor issues.

**Correct answer: B**

**Explanation:** This tests noting who each source sees and what it measures — a completion-time survey reaches only people who reached the end, while contact centre volume is behavioural evidence at scale corroborating the moderated sessions using exactly the kind of data sceptical colleagues find credible. Option D is the comfortable reading that ignores the contact centre, the most telling figure in the set.

**Question 12 (harder) — A flaw in your own work**

A flow diagram shared a fortnight ago, which the team has been building from, is found to omit the branch where a user answers "no" at the eligibility question. Ask for the strongest response.

- A) Update it and mention it at stand-up.
- B) Tell the team immediately, explain exactly what was missing, flag which stories may have been built without the branch, and note that an unhandled "no" path is likely a live defect rather than only a documentation gap.
- C) Update it quietly.
- D) Raise it in the retrospective.

**Correct answer: B**

**Explanation:** A fortnight of building against an incomplete diagram means correction alone is insufficient. This tests flagging downstream impact and, distinctively for interaction design, recognising a missing branch as almost certainly an unhandled path in the built service — a defect with a user on the other side of it, needing to be found today rather than deferred to a retrospective (D).

### Administration tips

- Score for whether the candidate judges how strongly a finding can be stated, not only whether they notice it.
- Note whether the candidate names what each of two evidence sources actually measures before treating an apparent contradiction as real.
- Watch for whether the candidate ranks work by whether it can still change a decision, rather than by scale alone.
- Score for whether the candidate holds a flow-level pattern and an element-level cost together, turning a disagreement into something measurable.
- Note whether the candidate treats a striking but small-sample split as a hypothesis to test rather than a finding.

### Common pitfalls to watch for when scoring

- Crediting participants converted into a population percentage.
- Missing when a candidate declares a winner between two data sources rather than reconciling what each measures.
- Rewarding a pattern applied without checking it against the actual situation.
- Accepting a fix prescribed before the underlying problem is established.
- Missing when a candidate ranks work by scale rather than by whether it can still change a decision.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles the numbers this role produces. Not a maths exam — no equations, calculator usually provided, arithmetic deliberately simple where one is not. What is measured is whether a candidate reads a table correctly, identifies which figures matter, chooses the right operation, and interprets the result without overstating it.

Typical format: a timed online test of 15 to 30 minutes, each item presenting a small table, chart, or paragraph of figures followed by a multiple-choice question, time per item tight. What rises at this level is interpretation — several items pair a correct calculation with a wrong conclusion, and telling them apart is the test. A candidate who can compute a percentage but not say whether it means anything is not much use in a prioritisation meeting; one who can say "that rate is measured against the wrong group, so it overstates the problem" is genuinely valuable.

### How this assessment maps to the role

- **Reading analytics accurately** maps to **Evidence-based design**: analysing and clearly explaining evidence such as web analytics data.
- **Comparing rates between devices and groups** maps to **Designing for everyone**: a gap is often the first numerical trace of exclusion.
- **Measuring whether an iteration worked** maps to **Iterative design**: iterating and improving a design based on successive rounds of research.
- **Understanding scale** maps to **Designing strategically**: knowing how many people a decision affects.
- **Explaining figures honestly** maps to **Design communication**: clearly explaining design decisions.
- **Working with analysts** maps to **Evidence-based design**: using evidence to inform, develop and test a design idea.

### Practice questions

**Question 1 (easy) — Error rate on a field**

Of 3,200 users who reached a page, 800 triggered a validation error on one field. Ask for the percentage.

- A) 20%
- B) 25%
- C) 30%
- D) 40%

**Correct answer: B**

**Explanation:** 800÷3,200=25%. This tests basic percentage calculation, checkable by estimating a quarter first — and, in a strong candidate's answer, noting that a quarter of everyone reaching a page failing one field almost always points at a format, label or hint problem rather than at users.

**Question 2 (easy) — Drop-off measured correctly**

A page is reached by 4,500 users and passed by 3,600. Ask for the drop-off rate.

- A) 20%
- B) 25%
- C) 80%
- D) 30%

**Correct answer: A**

**Explanation:** Drop-off 900÷4,500=20%. This tests measuring drop-off against arrivals, not against those who continued (option B, 900÷3,600, overstating every drop-off it touches) — comparing two pages computed with different denominators can produce a ranking of where to focus that is simply wrong.

**Question 3 (easy) — Device comparison**

Completion: Desktop 5,950/7,000; Mobile 6,000/10,000; Tablet 850/1,000. Ask which device has the lowest completion rate, and how many users it loses.

- A) Mobile, 60% rate, 4,000 users lost
- B) Desktop, 85% rate, 1,050 users lost
- C) Mobile, 40% rate, 6,000 users lost
- D) Tablet, 85% rate, 150 users lost

**Correct answer: A**

**Explanation:** Desktop and tablet both complete at 85%; mobile at 60%, losing 4,000. This tests calculating rates correctly (option C inverts both) and, in a strong candidate's answer, noticing desktop and tablet perform identically, which strongly suggests the problem is specific to small screens rather than the content or task.

**Question 4 (easy) — Average and its limits**

Six participants took 20, 25, 30, 30, 35, 140 seconds to complete a step. Ask for the mean, and whether it is a good summary.

- A) 30 seconds; yes
- B) 47 seconds; yes
- C) 47 seconds; no, because one extreme value pulls it above five of the six observations
- D) 30 seconds; no

**Correct answer: C**

**Explanation:** 280÷6≈47, correct but describing nobody, since five of six finished within 35 seconds. This tests both the calculation and the interpretation together — the 140-second session is the most interesting thing in the data, and the right report gives the median, the range, and a description of the outlier.

**Question 5 (moderate) — Did the iteration work?**

Before a hint text change, 960 of 1,600 users completed a field without error; after, 1,320 of 2,000. Ask whether it improved, and by how much in percentage points.

- A) Yes, by 360 users
- B) Yes, by 6 percentage points
- C) Yes, by 10 percentage points
- D) No, the rate fell

**Correct answer: B**

**Explanation:** Before 60%, after 66%: 6 points. This tests converting to rates because the totals differ — option A compares raw counts across different-sized groups, which is meaningless here, since more users completed partly because more arrived, and crediting the design with the whole increase would be wrong.

**Question 6 (moderate) — Comparing groups fairly**

Of 600 users under 65, 510 completed a form online. Of 200 users over 65, 60 completed. Ask for the gap in percentage points.

- A) 30
- B) 45
- C) 55
- D) 85

**Correct answer: C**

**Explanation:** Under-65s 85%; over-65s 30%; gap 55 points. This tests converting to rates before comparing — options A and D offer the two group rates as if they were the gap. A 55-point gap this large would justify immediate investigation of touch target size, contrast, horizontal scrolling at high zoom, and whether the journey depends on a device capability the group is less likely to have.

**Question 7 (moderate) — Percentage change**

After a change, weekly validation errors on a field fell from 1,200 to 900. Ask for the percentage decrease.

- A) 20%
- B) 25%
- C) 33%
- D) 75%

**Correct answer: B**

**Explanation:** (1,200−900)÷1,200=25%. This tests dividing by the original value — option C divides by the new figure (900), the most common error in this question type.

**Question 8 (moderate) — Scale of a fix**

480,000 submissions a year; a field produces a validation error for 4% of users, each of whom must correct it. Ask how many corrections a year eliminating the problem would avoid.

- A) 1,920
- B) 19,200
- C) 20,000
- D) 192,000

**Correct answer: B**

**Explanation:** 0.04×480,000=19,200. This tests converting a percentage into a number of affected people — "a 4% error rate" sounds like an acceptable cost of doing business, and "19,200 people a year having to correct something" does not, and converting between the two is the single most effective move available when arguing for a small fix nobody thinks is worth prioritising.

**Question 9 (moderate) — Choosing the denominator**

Journey: 30,000 start, 24,000 pass eligibility, 14,400 reach the declaration, 12,960 submit. Ask what percentage of those reaching the declaration went on to submit.

- A) 43%
- B) 54%
- C) 60%
- D) 90%

**Correct answer: D**

**Explanation:** 12,960÷14,400=90%. This tests identifying the group the question names as the denominator; all four options are true of this journey computed against a different base, and only D answers the question actually asked. The real losses here are 6,000 at eligibility and 9,600 between eligibility and the declaration, against 1,440 at submission.

**Question 10 (harder) — A metric that hides a split**

Time on a page averages 45 seconds; sessions showed participants either glancing for a few seconds or reading carefully for two to three minutes. Ask for the most useful response.

- A) The average is wrong.
- B) The average is probably correct and uninformative: it sits between two clusters and describes neither, so ask for the distribution — which will show whether the page has two distinct audiences behaving differently.
- C) The participants were unrepresentative.
- D) The page should be shorter.

**Correct answer: B**

**Explanation:** A 45-second average is entirely consistent with two clusters neither near 45 seconds. This tests recognising when a mean lands in a gap between two distinct behaviours and describes neither — option D leaps to a solution that could harm the careful readers by removing content they were relying on.

**Question 11 (harder) — Percentage points and relative change**

Error-free completion rose from 50% to 62% after a redesign. Ask which statement is accurate.

- A) It rose 12%.
- B) It rose 12 percentage points, a 24% relative increase.
- C) It rose 24 percentage points.
- D) It rose 19.4%.

**Correct answer: B**

**Explanation:** Gap 12 points; relative 12÷50=24%. This tests labelling both figures — the two descriptions will be used to describe the same change, and one sounds twice as impressive, so supplying both without making it an accusation is a cheap way to be trusted with numbers.

**Question 12 (harder) — What a small comparison can establish**

Baseline completion is 62%, and a 5 percentage point improvement would be meaningful; a colleague suggests 20 moderated sessions before and 20 after. Ask for the strongest response.

- A) Agree; 40 sessions is reasonable.
- B) Explain that a 5 point difference on 20 per group is one participant and well inside ordinary variation, so the comparison cannot detect it — recommend measuring the rate with live analytics across all users, and spending the 40 sessions on understanding why users succeed or fail, which sessions do uniquely well.
- C) Increase to 40 per group.
- D) Run it and report the difference with caveats.

**Correct answer: B**

**Explanation:** With 20 per group a 5-point difference is a single participant, indistinguishable from chance. This tests redirecting rather than merely objecting — analytics can measure the rate across the whole user base at no recruitment cost, while sessions explain why a rate is what it is. Option D is the most damaging response, since a reported difference from an underpowered comparison invites the team to act on noise and caveats do not travel — the number does.

### Administration tips

- Score for whether the candidate identifies the correct denominator before calculating.
- Note whether the candidate converts to rates before comparing groups of different sizes or comparing before and after a change with different totals.
- Watch for whether the candidate recognises a mean that lands between two distinct behavioural clusters and asks for the distribution.
- Score for whether the candidate distinguishes percentage points from a relative percentage change.
- Note whether the candidate assesses whether a sample size can plausibly detect the difference it is being used to test for.

### Common pitfalls to watch for when scoring

- Crediting a drop-off or completion rate calculated against the wrong denominator.
- Missing when a candidate compares raw counts before and after a change without accounting for different totals.
- Rewarding an average accepted at face value without checking for a bimodal or clustered distribution.
- Accepting an underpowered comparison endorsed as adequate to detect the effect size in question.
- Missing when a candidate reports a number from their own working as though it answered the question asked.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. Interaction design runs on documents — design standards, accessibility criteria, component specifications, content guidance, technical constraints and the words users say — and reading any of them slightly wrong changes what gets built.

The classic format presents a short passage followed by statements to classify as True, False, or Cannot Say — regardless of what a candidate otherwise knows. Cannot Say deserves particular attention because candidates avoid it, reaching for True or False to seem decisive when the honest answer is that the passage does not settle it. Small words carry the meaning — "all" is not "most," "may" is not "must," "encouraged" is not "required" — a distinction that matters more in this discipline than most, since accessibility criteria and component specifications are written with unusual precision, and a great deal of poor practice comes from remembering the gist rather than the wording.

### How this assessment maps to the role

- **Reading precisely** maps to **Designing for everyone**: ensuring a design meets appropriate standards, with support.
- **Separating statement from inference** maps to **Evidence-based design**: analysing and clearly explaining evidence.
- **Identifying the main point** maps to **Design communication**: explaining problems and design ideas.
- **Handling qualified language** maps to **Designing strategically**: knowing whether a pattern is mandatory or recommended.
- **Reading for absence** maps to **Designing for everyone**: noticing a specification never mentions keyboard operation has a direct consequence.
- **Understanding written direction** maps to **Designing together**: feedback only works if understood as given.

### Practice questions

*Passage A — for Questions 1 to 4.* "All new public-facing services must use components from the Design System where a suitable component exists. Where no suitable component exists, teams may create a new one, provided it is documented and tested with assistive technology before use in a live service. Components created before this policy took effect must be reviewed within 12 months. Teams are encouraged, but not required, to contribute new components back to the Design System."

**Question 1 (easy)**

Statement: "Teams must contribute new components back to the Design System."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says teams are "encouraged, but not required" to contribute back. This tests the clearest form of an explicit removal of an obligation — worth noting the passage attaches hard requirements elsewhere in the same breath (documentation, testing), so a reader skimming for general tone could get this wrong in either direction.

**Question 2 (moderate)**

Statement: "A team that creates a new component without testing it with assistive technology has breached the requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The permission to create a new component is conditional on documenting and testing it; failing a condition means the permission does not apply. This tests distinguishing an explicit exemption (Question 1's False) from a conditional permission, where failing the condition is itself a breach.

**Question 3 (moderate)**

Statement: "A component created two years ago must have been reviewed by now."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The 12-month review deadline is relative to when the policy took effect, and the passage never gives that date. This tests checking whether a stated deadline's reference point is actually given — its absence is deliberate and recurs across this section.

**Question 4 (moderate)**

Statement: "A service may use a component that is not in the Design System."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Design System components are required only "where a suitable component exists," and the passage expressly permits creating a new one otherwise, subject to conditions. This tests reading to the end of a provision — marking this False from the first sentence alone is exactly the error the passage's structure is testing.

*Passage B — for Questions 5 to 8.* "The review of the application form found that users on mobile devices completed more slowly than desktop users and were more likely to abandon at the document upload step. The review notes that mobile users differed from desktop users in age and in whether they were completing the form at home. The review did not assess whether abandoned applications were later completed on another device. It recommends that the team consider whether a redesigned upload step would reduce mobile abandonment."

**Question 5 (easy)**

Statement: "Mobile users were more likely to abandon at the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, respecting the passage's comparative framing. A statement claiming mobile users "usually abandon" would overstate the passage and be Cannot Say.

**Question 6 (moderate)**

Statement: "The mobile interface causes abandonment at the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage names two confounds (age, completing at home) that could equally explain the gap. This tests treating a declared confound as a warning against inferring causation — someone away from home lacking documents to hand would produce abandonment regardless of interface quality, and the design consequence differs entirely depending on the actual cause.

**Question 7 (moderate)**

Statement: "Users who abandoned on mobile did not complete the application at all."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly this was not assessed. This tests treating declared silence as establishing nothing — abandonment on one device may be a sensible switch to a laptop where documents are, a mild inconvenience rather than a service failure, and not knowing which changes how urgent the finding is.

**Question 8 (harder)**

Statement: "The review recommends redesigning the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The review recommends the team "consider whether" a redesign would help, including the possibility of concluding it would not. This tests distinguishing "consider whether X" from "recommend X" — a distinction that pervades real review documents, where a recommendation to consider becomes a tracked commitment nobody actually decided on.

*Passage C — for Questions 9 to 12.* "Interactive components must be operable using a keyboard alone. Where a component uses a non-standard interaction, the team must provide a documented keyboard alternative. Focus must be visible at all times and must not be trapped within a component. Where a component displays an error, the error must be programmatically associated with the field it relates to; a visual association alone is not sufficient."

**Question 9 (easy)**

Statement: "A visual association between an error and its field is sufficient."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states directly that a visual association alone is not sufficient. This tests catching the load-bearing word "programmatically" — a message placed visually next to a field is obvious to a sighted user and may be entirely absent for a screen reader user encountering fields in markup order.

**Question 10 (moderate)**

Statement: "A component with a non-standard interaction breaches the requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage does not prohibit non-standard interactions; it requires a documented keyboard alternative where one is used. This tests distinguishing a condition from a prohibition — reading it as a prohibition either causes teams to avoid legitimate solutions unnecessarily, or to conclude the rule is unrealistic and ignore it.

**Question 11 (harder)**

Statement: "A component in which focus is briefly trapped while a dialogue is open complies with the passage."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states focus must not be trapped, without qualification for duration or context; "briefly" and "while a dialogue is open" introduce conditions the passage does not recognise. This tests answering the passage as written rather than professional knowledge of how modal dialogues are normally expected to behave — the whole discipline of this section is answering the passage rather than the world.

**Question 12 (harder) — Main point**

Ask which best captures the main point of Passage C.

- A) Components must never use non-standard interactions.
- B) Components must remain operable and comprehensible for someone not using a mouse or not seeing the screen — through keyboard operation, visible and unconstrained focus, documented alternatives where interactions are unusual, and errors associated in code rather than only visually.
- C) Focus must be visible at all times.
- D) Errors must be programmatically associated with their fields.

**Correct answer: B**

**Explanation:** This tests identifying a summary spanning the whole passage without inventing anything — A overstates a conditional requirement into a prohibition, and C and D are each true of one clause and silent on the rest.

### Administration tips

- Score for whether the candidate reads to the end of a passage before concluding what a provision requires.
- Note whether the candidate distinguishes an explicit exemption from a conditional permission where failing the condition is itself a breach.
- Watch for whether the candidate checks that a stated deadline's reference point is actually given in the passage.
- Score for whether declared confounds or declared gaps in what was assessed are treated as genuine limits on what can be concluded.
- Note whether the candidate answers strictly from the passage even where it conflicts with their own professional knowledge of a real standard.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False from the candidate's own knowledge rather than the passage.
- Missing when a candidate reads "encouraged" as "required," or a condition as a prohibition.
- Rewarding an association read as causation despite a declared confound.
- Accepting "consider whether X" read as "recommends X."
- Missing when a candidate infers something from what a review declared it did not examine.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what a candidate would do. There is no passage to decode and no arithmetic — a dilemma of the kind this role produces, four or five possible responses, and a question asking which is most effective and often which is least.

This section measures judgement rather than knowledge, and specifically whether a candidate's instincts match what the profession considers good practice at this level. A junior interaction designer explains design decisions, works collaboratively, has responsibility as part of a service, works independently after being given direction, and independently identifies user issues and important needs — so the strongest answers involve genuine independent action within remit combined with prompt honesty about anything beyond it.

Four principles carry most scenarios. Users come first, specifically users who cannot get past something — an interaction that excludes one group is not slightly worse for them, it is unusable. Act within remit and be transparent at its edges: at this level a candidate is expected to make design decisions, hold a position with a developer, and identify user needs themselves, but not to overrule a technical constraint, commit the organisation, or absorb an accessibility blocker without telling anyone — the pattern is attempt, then tell. Address problems directly and early, with the person involved. And check both scales — when one option fixes the control in front of the candidate and another asks whether it should be there at all, the second is usually stronger.

### How this assessment maps to the role

- **Explaining and defending design decisions** maps to **Design communication**.
- **Protecting inclusion** maps to **Designing for everyone**.
- **Working with others' perspectives** maps to **Designing together**.
- **Using evidence honestly** maps to **Evidence-based design**.
- **Working in cycles and adapting** maps to **Iterative design**.
- **Knowing where design sits** maps to **Designing strategically** and **Leading design**.

### Practice questions

**Question 1 (easy) — A developer proposes a shortcut**

A developer says the agreed error handling will take three extra days and proposes instead a single message at the top of the page saying "There is a problem with your answers." Ask for the most effective response.

- A) Agree; three days is a lot and the message tells users something.
- B) Explain what the generic message costs users — they must find the problem themselves, and someone using a screen reader may be unable to — and ask whether a middle option fits the time, such as specific messages for the two fields that fail most often.
- C) Insist on the full agreed behaviour.
- D) Escalate to your senior designer without talking to the developer.

**Most effective: B. Least effective: A**

**Explanation:** Making the user cost concrete, treating the time constraint as legitimate, and proposing a middle path is what usually gets agreed in practice. This tests substituting rather than accepting a shortcut that transfers cost to users — option A is least effective, accepting confusion and repeat submissions to save three days once.

**Question 2 (easy) — A defect you find in a live service**

Reviewing a live page, the error summary is found not to link to the fields it describes, so a keyboard user must tab through the page to reach the problem. Ask for the most effective response.

- A) Note it in your own list to fix eventually.
- B) Raise it with your senior designer and the team, describing precisely what a keyboard user has to do, and ask whether the same defect exists on other pages using the same template.
- C) Raise a bug ticket and move on.
- D) Fix it yourself in the prototype so the next build picks it up.

**Most effective: B. Least effective: A**

**Explanation:** Describing the consequence rather than the rule makes the defect actionable, and asking whether the same template produces the same defect elsewhere turns one fix into a systemic one — this is the step up from trainee. Option A is least effective, deferring a live accessibility defect to a personal list.

**Question 3 (easy) — Conflicting direction**

A senior designer asked for an interaction spec finished today; a delivery manager then asks for the prototype to be updated all day for tomorrow's show and tell, calling it urgent. Ask for the most effective response.

- A) Do the prototype; the delivery manager is more senior.
- B) Do the spec and tell the delivery manager you are unavailable.
- C) Tell the delivery manager about the existing task, offer a specific workable option, and ask both to confirm the priority.
- D) Attempt both and work late.

**Most effective: C. Least effective: D**

**Explanation:** Surfacing the conflict promptly with a concrete option — "I could update the prototype this morning and have the spec by four" — turns the candidate into part of the solution. This tests offering a specific workable alternative rather than bare escalation — option D is least effective, hiding the conflict, normalising over-commitment, and meaning the team never learns it is asking for two days of work in one.

**Question 4 (moderate) — Evidence that contradicts your design**

Testing shows five of eight participants clicked a secondary link instead of the primary button, on a page the candidate designed and believes is right. Ask for the most effective response.

- A) Note that the participants were unrepresentative and keep the design.
- B) Treat the result as a signal about the design, look at what drew people to the link — wording, position, visual weight, or whether it answers a question the page raised — and propose a change to test next round.
- C) Remove the secondary link.
- D) Ask for more participants before deciding.

**Most effective: B. Least effective: A**

**Explanation:** Five of eight doing the same unexpected thing is a signal, applying regardless of intended design. This tests treating consistent behaviour as a signal about the design, including a possibility easy to miss (that the page raised a question it did not answer) — option A is least effective, the most reliable way for a designer to stop learning.

**Question 5 (moderate) — Pressure to reuse a pattern badly**

A stakeholder asks for the "check your answers" pattern on a page listing documents the user must still obtain, arguing it will be quicker and look consistent. Ask for the most effective response.

- A) Use it; consistency matters.
- B) Explain that the pattern sets an expectation — that everything shown is done and editable — which is wrong here and will mislead users, and propose a different pattern for "things you still need to do" while keeping the same visual style so the service stays consistent.
- C) Refuse and design from scratch.
- D) Use it but change the heading.

**Most effective: B. Least effective: D**

**Explanation:** The stakeholder's underlying goals — speed and consistency — are legitimate, and this tests addressing both while correcting a misapplied pattern, since a pattern is a set of learned expectations, not a layout. Option D is least effective, the worst combination: the visual language still says "done" while the words say "to do," and users trust the layout.

**Question 6 (moderate) — A constraint you doubt**

A developer says a postcode field cannot accept spaces "because of the database," and research shows many users type a space and then hit an error. Ask for the most effective response.

- A) Add a hint telling users not to type a space.
- B) Ask what the constraint actually is, and whether the space could be stripped when the value is saved rather than rejected when it is typed — since the requirement is presumably about what is stored, not about what the user types.
- C) Insist the field accepts spaces.
- D) Escalate without asking the developer.

**Most effective: B. Least effective: A**

**Explanation:** "The database won't allow it" may be exactly true, a summary satisfiable another way, or an inherited assumption. This tests asking what a stated constraint actually is and proposing the specific mechanism (normalising on save rather than validating on entry) that resolves most such cases — option A is least effective, making users accommodate an internal constraint with hint text reliably ignored.

**Question 7 (moderate) — Feedback that stings**

A senior designer says a flow is "confusing and doesn't show what happens on a 'no' answer," though the candidate believes it does. Ask for the most effective response.

- A) Point out where the branch appears.
- B) Ask them to show you where they got lost, since if an experienced designer cannot follow the branch the diagram is not communicating it — then fix that.
- C) Accept the criticism and redo it.
- D) Ask for the feedback in writing to consider later.

**Most effective: B. Least effective: A**

**Explanation:** Both things can be true — the branch is there, and the diagram does not communicate it. This tests converting feedback into information rather than winning the argument — option A is least effective, leaving the flow exactly as confusing and teaching the room that feedback is effortful.

**Question 8 (moderate) — Something outside your service**

The letter sent after submission uses completely different wording from the confirmation screen the candidate designed, and users may think they concern two different things; letters belong to another team. Ask for the most effective response.

- A) Ignore it; letters are not your responsibility.
- B) Raise it with a senior designer, describing the mismatch and why it matters, and ask about a route to the team that owns the letter — while checking whether the confirmation screen itself could reduce the confusion in the meantime.
- C) Contact the other team directly.
- D) Change your screen to match the letter.

**Most effective: B. Least effective: A**

**Explanation:** A user experiences one service saying two different things, not two products. This tests evidencing the problem, seeking a legitimate route, and — the step up from trainee — asking what can be done with the half already controlled meanwhile. Option A is least effective, describing an org chart rather than a user's experience.

**Question 9 (harder) — An accessibility blocker close to launch**

Two weeks before launch, a custom component is found unable to be operated with a keyboard. Ask for the most effective response.

- A) Launch and add it to the backlog.
- B) Raise it immediately with your senior designer and delivery manager, describe precisely what cannot be done and by whom, ask for an explicit decision, and check whether a standard component could replace the custom one quickly.
- C) Attempt the fix yourself in the two weeks.
- D) Launch and publish an accessibility statement noting the gap.

**Most effective: B. Least effective: A**

**Explanation:** A component unusable by keyboard means some people cannot use the service at all, and weighing a delay against exclusion is a decision for people with authority. This tests naming the practical step nobody thinks of under pressure (a standard component swap) and securing an explicit decision so it does not drift into a launch by default — option A is least effective, sending a genuine blocker to a backlog where it will remain unfixed.

**Question 10 (harder) — Findings the team does not want**

Research shows a component the team built over a month causes problems for eight of ten participants, with five minutes at the show and tell. Ask for the most effective response.

- A) Lead with the positives and mention difficulties briefly.
- B) Present what happened clearly and without blame — what participants tried, where they got stuck, what they said — and frame the next step as understanding why, inviting the team into the diagnosis.
- C) Present the failure rate starkly so the team takes it seriously.
- D) Ask your senior designer to present it.

**Most effective: B. Least effective: A**

**Explanation:** Delivery determines whether a difficult finding gets acted on or defended against, and ending on an invitation into the diagnosis lets people who built the component see causes a candidate cannot. Option A is least effective, softening an eight-in-ten failure so that a month of effort continues down the same path.

**Question 11 (harder) — A mistake of your own**

A prototype shared a fortnight ago, which the team has been building from, is found to omit the branch for users who answer "no" at eligibility. Ask what should happen.

- A) Update it and mention it at stand-up.
- B) Tell the team immediately, explain what was missing, flag which stories may have been built without the branch, and check whether the live or in-progress build leaves those users at a dead end.
- C) Update it quietly.
- D) Raise it in the retrospective.

**Most effective: B. Least effective: C**

**Explanation:** Two weeks of building against an incomplete prototype means correction alone is insufficient. This tests flagging affected stories and, distinctively for interaction design, checking whether the omission has produced an actual dead end for real users — option C is least effective, leaving both the documentation and the likely defect unexamined and risking discovery by someone else.

**Question 12 (harder) — An assumption in the room**

Someone says "we don't need to worry about screen reader users here — hardly anyone uses one," on a service with around 900,000 users a year. Ask for the most effective response.

- A) Let it go; the team has decided.
- B) Bring the arithmetic into the room — even one per cent of 900,000 is 9,000 people a year, and the real figure is higher once magnification, voice control and keyboard-only use are included — and ask what should happen to them, so the decision is made knowingly.
- C) Argue that all services must be accessible to everyone.
- D) Raise it privately with your senior designer afterwards.

**Most effective: B. Least effective: A**

**Explanation:** An intuition about proportion collapses against a concrete base number. This tests contributing arithmetic that keeps the decision honest and inviting the team to answer, rather than letting a numerically wrong assumption stand (A, least effective) when the facts to correct it were available.

### Administration tips

- Score for whether the candidate takes genuine independent action within remit and discloses anything beyond it promptly.
- Note whether the candidate asks whether a single instance of a defect indicates a broken shared template, rather than fixing only the instance found.
- Watch for whether the candidate secures an explicit, recorded decision on a serious problem rather than letting it drift by default.
- Score for whether own errors are disclosed promptly, with downstream impact and likely live consequences flagged.
- Note whether the candidate brings a measured argument rather than an assertion of principle when challenging an assumption or a technical constraint.

### Common pitfalls to watch for when scoring

- Crediting an answer that dismisses consistent unexpected research behaviour as unrepresentative participants.
- Missing when a candidate accepts a shortcut that transfers cost onto users.
- Rewarding a pattern kept in place despite its visual meaning being wrong for the content.
- Accepting advice telling users to compensate for an unaddressed internal constraint.
- Missing when a candidate treats a missing branch or an own error as a documentation matter rather than checking for a live consequence.

## Conclusion

This guide has worked through pattern recognition and error checking across page rules, component specifications, and flow-versus-element trade-offs; the arithmetic that makes design judgements defensible — measuring drop-off against the correct denominator, converting a defect into a specific number of affected people, and recognising when a mean sits between two distinct behavioural clusters; the discipline of reading design standards, accessibility criteria and review documents at exactly the strength the text supports, especially distinguishing a conditional permission from an outright exemption; and the situational judgement that defines a strong junior interaction designer — genuine independent action within remit, prompt honest disclosure beyond it, and a check of both the flow and the element before deciding.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
