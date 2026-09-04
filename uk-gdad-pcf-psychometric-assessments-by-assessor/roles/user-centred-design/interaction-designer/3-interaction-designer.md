# Interaction Designer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for interaction designer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

An interaction designer is a confident, competent designer who develops designs from evidence of user needs and organisational outcomes, is trusted to make good decisions, recognises when to ask for further guidance, contributes to design concepts, and interprets evidence-based research and incorporates it into their work. At this level a candidate is rarely choosing between a right answer and a wrong one, and usually between defensible options under incomplete information, competing constraints and real consequences.

Three features of the role shape this material. First, a candidate is trusted to make good decisions, so the strongest answers do not escalate everything and do know which decisions belong to someone else. Second, the role now designs strategically — identifying risks and opportunities, contributing to design patterns and components, and aligning work to organisational objectives — which turns prioritisation from an administrative question into a design one. Third, the role plans and runs design sessions, engages the right people, and gives and receives constructive feedback, so several items concern getting good thinking out of a room rather than out of the candidate alone.

Interaction design operates at two scales at once — the flow and the element — and a great deal of senior-feeling judgement consists of noticing when a decision at one scale damages the other. Splitting a page helps comprehension and adds a round trip. Making a control cleverer helps confident users and breaks it for keyboard users. Several items below turn on exactly that trade-off.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate reasons about second-order and forward-looking consequences (risk and opportunity) rather than only immediate problems, and for whether they can identify the strongest reading of ambiguous evidence while stating its limits. Situational judgement items at this level consistently reward a candidate who exercises real professional judgement, holds a position under pressure when evidence warrants it, and escalates only what genuinely needs authority they do not hold.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role genuinely uses, presented through practical materials rather than abstract puzzles. At this level the materials get messier and the reasoning less mechanical: evidence supporting two incompatible readings, design constraints that turn out to be negotiable and others that do not, components whose costs are not where they appear, and prioritisation problems with no dominant option.

Typical format: an online test of 15 to 30 minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level, often adaptive, with speed and accuracy reported separately.

Two things distinguish this section at this level. First, a candidate is expected to reason about risk and opportunity rather than only about problems — forward-looking reasoning about what is likely to go wrong and where something is available that nobody has taken, with several items turning on a second-order consequence rather than an immediate one. Second, comfort with irreducible uncertainty: a number of questions have no clean answer, only a best one, and the discriminating factor is whether a candidate can identify the strongest reading of ambiguous evidence and state its limits, rather than collapsing prematurely into confidence.

### How this assessment maps to the role

- **Pattern recognition** maps to **Evidence-based design**: analysing, synthesising and clearly explaining evidence relevant to users or a service.
- **Logical deduction** maps to **Design communication**: clearly explaining design decisions using appropriate tools and methods.
- **Error checking** maps to **Designing for everyone**: ensuring a design meets appropriate standards such as accessibility regulations.
- **Prioritisation and risk reasoning** map to **Designing strategically**: identifying risks and opportunities and using design to address them.
- **Applied problem solving** maps to **Iterative design**: prototyping at different fidelities and using and iterating design patterns and components.
- **Reasoning about people and positions** maps to **Designing together**: identifying and engaging the right people throughout the design process.

### Practice questions

**Question 1 (easy) — Auditing a page against a standard**

Standard: every transactional page must use words users would use, say what happens next, state how long it will take, avoid requesting information already held, offer a route to help, and work without JavaScript. A page: uses internal terminology; says the case will be assessed; gives no timescale; re-requests a held reference number; has no contact route; degrades gracefully without JavaScript. Ask how many requirements are unmet.

- A) 3
- B) 4
- C) 5
- D) 6

**Correct answer: B**

**Explanation:** Internal terminology fails requirement one; "the case will be assessed" satisfies requirement two, minimally; no timescale fails requirement three; re-requesting held information fails requirement four; no contact route fails requirement five; graceful degradation satisfies requirement six. Four unmet. This tests applying a standard as written rather than as it should have been written — and, in a strong candidate's answer, noticing that absences (the missing help route, the JavaScript behaviour) are the systematic blind spot in any audit, easier to miss than something present and wrong.

**Question 2 (easy) — Deduction from a governance rule**

Rule: "A custom component may be used in a live service only with sign-off from the lead interaction designer, unless it replaces an existing custom component on a like-for-like basis and has been assessed as low risk." A developer reports: "We shipped a custom component last sprint without sign-off." Ask which conclusion must be true.

- A) The standard was breached.
- B) It was a low-risk like-for-like replacement.
- C) Either it was a low-risk like-for-like replacement, or the standard was breached.
- D) The component is inaccessible.

**Correct answer: C**

**Explanation:** With the exception compound (like-for-like *and* low risk), and the facts silent on whether it applied, only the disjunction is guaranteed. This tests reading a compound exception precisely — a replacement satisfying only one half does not qualify, and partial satisfaction of a compound exception is among the most common misreadings in real governance conversations.

**Question 3 (moderate) — Competing explanations**

Form completion is 78% for users arriving from a guidance page, 49% for users arriving directly from a search result. A product manager proposes redesigning the form. Ask for the most rigorous analysis.

- A) Agree; the form is failing direct arrivals.
- B) The two groups differ in preparation rather than necessarily in what they encounter: users who came via guidance have generally learned what is required and gathered documents, while direct arrivals may be discovering requirements mid-form — so the highest-value intervention may be at the point of entry rather than inside the form.
- C) A 29-point gap is too large to be explained by anything but the form.
- D) Direct entry to the form should be blocked.

**Correct answer: B**

**Explanation:** Referral route is a marker for preparation, one of the most consequential confounds in service analytics — a difference in preparation can account for much of the gap without the form itself being worse for anyone. This tests naming the confound and drawing a practical, cheaper implication (a lightweight "what you'll need" step) rather than acting on an unexamined correlation (A) or mistaking effect size for causal certainty (C).

**Question 4 (moderate) — Prioritising by what can change**

Capacity for one substantial piece of work this quarter: (1) a key interaction pattern for a new service is being decided next month, reused across eight journeys; (2) a live page has a 32% validation error rate on one field, unchanged for months; (3) exploratory work on a concept for next year; (4) the team wants to revisit a screen designed six weeks ago after minor copy changes. Ask which is strongest, and why.

- A) Item 2, because it affects the most users now.
- B) Item 1, because the decision is imminent, will be reused across eight journeys, and design input is the only thing that could still shape it — giving it far the highest leverage.
- C) Item 3, because early exploration has the highest leverage.
- D) Item 4, because unverified changes are a risk.

**Correct answer: B**

**Explanation:** Item 1 carries a multiplier the others lack — a pattern decided once and reused eight times embeds either a good or bad decision eight times over. This tests ranking by how much a decision can still change plus how far it propagates, rather than by current scale alone (A, which misses the compounding effect of reuse — the strategic reasoning this role is named for).

**Question 5 (moderate) — Risk reasoning about a component**

A team proposes replacing a standard date input with a calendar picker to prevent invalid dates, for a service asking for dates of birth often decades in the past, serving a wide public audience. Ask for the most complete analysis.

- A) Calendar pickers prevent invalid dates, so it is an improvement.
- B) A picker is well suited to choosing a near-future date and poorly suited to a date of birth, where a user must navigate back decades; it also adds a custom control that must work with keyboard, screen readers, voice and zoom — so the change increases effort for the common case and adds accessibility and maintenance risk, while the invalid-date problem it solves is better handled by accepting varied formats and validating clearly.
- C) It is fine if it is tested with screen reader users.
- D) Date pickers should never be used.

**Correct answer: B**

**Explanation:** A calendar picker optimises for a date near today; entering a date decades in the past through one means navigating back hundreds of months, while a custom picker must be built and maintained across keyboard, assistive technology, voice control and zoom. This tests identifying why a specific control is mismatched to a specific task, and naming the better answer to the underlying concern — option C treats testing as a substitute for the design decision rather than a check on it.

**Question 6 (moderate) — Strength of a finding**

Ten of fourteen participants failed to notice a "save and return" link. Ask which conclusion is best supported.

- A) 71% of users do not notice the link.
- B) Discoverability of the link is a substantial problem, evidenced across most participants, warranting design work and a follow-up measure of whether the change helps.
- C) The link should be moved to the top of the page.
- D) The link is invisible.

**Correct answer: B**

**Explanation:** Ten of fourteen is a strong qualitative signal, stated at that strength with a named follow-up. This tests resisting a jump to one specific fix (C, when the cause could be position, wording, visual weight, or an unexpected mental model) and resisting overreach in both directions — a population percentage (A) or "invisible" (D, a stronger and different claim than "not noticed").

**Question 7 (moderate) — Designing under a constraint**

A service must let users provide a document; users are predominantly over 75 and many are not confident online. A team proposes a smartphone-only photo upload as simplest to build. Ask for the strongest analysis.

- A) The team is right; most people have smartphones.
- B) Smartphone-only upload assumes a suitable phone, data, somewhere appropriate to photograph a document, and the confidence to do it — assumptions failing disproportionately in this group, so the design would exclude a substantial share of the service's core users; the useful next step is to establish how many, and to identify an alternative such as post or assisted digital.
- C) The team should add a postal route.
- D) The team should test the upload with older users first.

**Correct answer: B**

**Explanation:** Smartphone-only upload bundles four assumptions, each failing more often in this population, and because the affected group is the core user base the exclusion is the main case rather than an edge case. This tests naming the mechanism and its scale, and proposing both quantification and an alternative — option A treats a majority statistic as sufficient, the reasoning that produces inaccessible public services.

**Question 8 (harder) — Scoping a flaw**

A relied-upon study used a prototype whose "back" function was broken. Four findings: (i) participants could not locate eligibility criteria; (ii) participants abandoned after a wrong turn; (iii) tasks took longer than expected; (iv) participants misread the declaration wording. Ask which findings are compromised.

- A) All four.
- B) None; it was a minor fault.
- C) Findings (ii) and (iii) are directly compromised, because inability to go back plausibly caused both, while (i) and (iv) concern comprehension of content and are largely unaffected.
- D) Only finding (ii).

**Correct answer: C**

**Explanation:** A broken back function directly manufactures abandonment and inflated task times; findings about locating and understanding content are largely untouched by the fault. This tests scoping a flaw precisely rather than treating it as total or trivial — wholesale condemnation (A) discards sound findings, and in a team it teaches people to stop mentioning prototype faults.

**Question 9 (harder) — Spotting the opportunity**

40% of users who abandon at an upload step return within seven days and complete; the team treats this as a success and focuses on the 60% who do not. Ask for the strongest observation.

- A) Agree; the 60% is the real problem.
- B) The 40% are also evidence of a problem — they are making two or more attempts at something that should take one — and they are a natural experiment: something enabled them to come back and succeed, and identifying it is likely the fastest route to helping the 60% too.
- C) The 40% should be excluded from the drop-off figure.
- D) Send reminders to everyone who abandons.

**Correct answer: B**

**Explanation:** A returning user is a user who could not finish first time, almost always because a document was not to hand. This tests treating a comfortable number as still needing investigation, and identifying the natural experiment it contains — whatever let the returners come back tells a candidate what to build for everyone else.

**Question 10 (harder) — A local optimisation**

Time on a form page fell from 90 to 55 seconds after content was removed; over the same period contact centre calls about that step rose 25% and completion was unchanged. Ask for the strongest analysis.

- A) The redesign succeeded on its metric; the calls need separate investigation.
- B) The pattern is consistent with content having been removed that users needed, pushing them to telephone for the explanation — an apparent efficiency that is probably a cost transfer, with unchanged completion suggesting no benefit to users at all; the right measure is end-to-end effort including contact.
- C) The call increase must have another cause.
- D) Report both metrics without interpretation.

**Correct answer: B**

**Explanation:** Three facts fit together — the page got shorter, calls rose sharply, completion did not move — pointing at cost transfer rather than genuine improvement. This tests refusing to accept a metric because it was agreed (A), which is how services get locally optimised into worse wholes, and supplying the interpretation this role exists to provide (D abdicates it).

**Question 11 (harder) — A constraint that may not be one**

A developer says a field cannot accept values longer than 30 characters "because of the API"; research shows around 8% of users have addresses or names longer than this and are forced to truncate. Ask for the most productive line of enquiry.

- A) Accept the constraint and add a character counter.
- B) Ask where the 30-character limit comes from — the API, the database, or a form validation rule somebody wrote — and whether the underlying system genuinely rejects longer values or simply truncates them, since the answer determines whether this is a hard constraint, a data quality problem, or an assumption nobody has revisited.
- C) Insist the limit is removed.
- D) Ask users to abbreviate.

**Correct answer: B**

**Explanation:** "Because of the API" is a compressed claim covering at least three distinct possibilities with different consequences — a genuine constraint, a silent data-quality problem, or an old assumption. This tests establishing which before designing around it — option C asserts without understanding, and a candidate who treats every constraint as negotiable is not believed about the ones that are.

**Question 12 (harder) — A flaw in your own work**

Three weeks after a design decision was supported, the research behind it is found to have recruited only users who had previously completed the service successfully. Ask what should happen.

- A) Note it as a limitation in the next report.
- B) Tell the team and the decision-makers now, scope precisely which conclusions are affected and which still stand, and propose targeted follow-up with users who did not complete — since those are the people the study could not see and the ones the design most needs to serve.
- C) Quietly commission follow-up and correct the record if findings differ.
- D) Say nothing; the decision was reasonable anyway.

**Correct answer: B**

**Explanation:** A sample of successful completers cannot see the failures the design was meant to address. This tests prompt disclosure, precise scoping (some conclusions may still stand) rather than minimising or catastrophising, and proposing the fix. Option D is least defensible, substituting a guess for the evidence originally relied on.

### Administration tips

- Score for whether the candidate reasons forward about risk and opportunity, not only about immediate problems.
- Note whether the candidate identifies the strongest reading of ambiguous evidence while explicitly stating its limits.
- Watch for whether the candidate scopes a methodological flaw precisely rather than treating it as total or trivial.
- Score for whether the candidate ranks priority by how much a decision can still change and how far it propagates, not by current scale alone.
- Note whether the candidate names a confound before accepting an apparent cause, particularly where the confound points at a cheaper intervention.

### Common pitfalls to watch for when scoring

- Crediting participants converted into a population percentage.
- Missing when a candidate treats effect size as proof of causal certainty.
- Rewarding an audit that catches wrong requirements but misses absent ones.
- Accepting a partially satisfied compound exception as if it were fully satisfied.
- Missing when a candidate accepts an agreed metric uncritically rather than checking whether it has been locally optimised.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles the quantitative material this role produces and consumes. At this level the emphasis shifts from calculating to interrogating — candidates still need to compute rates correctly, but the harder items ask whether a figure means what somebody claims, often the question only the candidate in the room is positioned to ask.

Typical format: a timed online test of 15 to 30 minutes, each item presenting a table, chart, or short paragraph of figures with a multiple-choice question, calculator usually provided. Distractors are built from a predictable catalogue: wrong denominator, percentage confused with percentage point, new value used as the base in a percentage change, rates averaged without weighting, raw counts compared across unequal groups.

Quantitative evidence carries unearned authority — a number in a slide is treated as fact and a design argument as a preference, regardless of the rigour behind either. Being able to ask "what is the denominator, and who could not have appeared in this data?" is a substantial part of the value this role adds.

### How this assessment maps to the role

- **Reading analytics accurately** maps to **Evidence-based design**: analysing, synthesising and clearly explaining evidence such as web analytics data.
- **Comparing rates between groups and devices** maps to **Designing for everyone**: a gap is often the first numerical trace of exclusion.
- **Measuring whether an iteration worked** maps to **Iterative design**.
- **Quantifying risk and opportunity** maps to **Designing strategically**: identifying risks requires knowing how many people are involved.
- **Explaining figures at defensible strength** maps to **Design communication**.
- **Interrogating others' claims** maps to **Designing together**: giving and receiving constructive feedback, including on evidence.

### Practice questions

**Question 1 (easy) — Error rate**

Of 4,800 users who reached a page, 1,200 triggered a validation error on one field. Ask for the percentage.

- A) 20%
- B) 25%
- C) 30%
- D) 40%

**Correct answer: B**

**Explanation:** 1,200÷4,800=25%. This tests basic percentage calculation, checkable by estimating a quarter first — a quarter of everyone reaching a page failing one field almost always points at format, label or hint rather than at users.

**Question 2 (easy) — Drop-off against the right base**

A page is reached by 6,000 users and passed by 4,500. Ask for the drop-off rate.

- A) 25%
- B) 33%
- C) 75%
- D) 30%

**Correct answer: A**

**Explanation:** Drop-off 1,500÷6,000=25%. This tests measuring against arrivals, not against those who continued (option B, 1,500÷4,500) — comparing two pages with differently computed denominators can invert a ranking of where to focus.

**Question 3 (easy) — Comparing devices**

Completion: Desktop 7,650/9,000; Mobile 9,000/15,000; Tablet 1,275/1,500. Ask which device has the lowest completion rate, and how many users it loses.

- A) Mobile, 60% rate, 6,000 users lost
- B) Desktop, 85% rate, 1,350 users lost
- C) Mobile, 40% rate, 9,000 users lost
- D) Tablet, 85% rate, 225 users lost

**Correct answer: A**

**Explanation:** Desktop and tablet both complete at 85%; mobile at 60%, losing 6,000. This tests calculating rates correctly (C inverts both) and, in a strong candidate's answer, noticing desktop and tablet performing identically, which localises the problem to small screens rather than content or task.

**Question 4 (easy) — Centre and spread**

Nine participants' times in seconds: 15, 18, 20, 22, 25, 28, 30, 35, 210. Ask which summary is most defensible.

- A) Mean 44.8 seconds
- B) Median 25 seconds, range 15 to 210, with the 210-second case described separately
- C) Median 25 seconds
- D) Mean 44.8 seconds, range 15 to 210

**Correct answer: B**

**Explanation:** The mean exceeds eight of nine observations; the median (25) describes the group well but alone conceals a session over eight times the typical duration — likely the most informative data point. This tests supplying centre, spread, and explicit treatment of an outlier rather than burying it (C) or pairing the range with a misleading centre (D).

**Question 5 (moderate) — Did the change work?**

Before: 1,080 of 1,800 completed a step without error. After: 1,470 of 2,100. Ask whether it improved, and by how much in percentage points.

- A) Yes, by 390 users
- B) Yes, by 10 percentage points
- C) Yes, by 14 percentage points
- D) No, the rate fell

**Correct answer: B**

**Explanation:** Before 60%, after 70%: 10 points. This tests converting to rates because totals differ — option A compares raw counts across differently sized groups, crediting the design with an increase partly caused by more traffic arriving.

**Question 6 (moderate) — Comparing groups**

Of 1,200 users under 65, 1,020 completed online. Of 400 over 65, 120 completed. Ask for the gap in percentage points.

- A) 30
- B) 45
- C) 55
- D) 85

**Correct answer: C**

**Explanation:** Under-65s 85%; over-65s 30%; gap 55 points. This tests converting to rates before comparing — options A and D offer the two group rates as if they were the gap. A gap this size would justify investigating touch target size, contrast, horizontal scrolling at 200% zoom, and whether the journey depends on a device capability the group is less likely to have.

**Question 7 (moderate) — Percentage change**

Weekly validation errors on a field fell from 1,500 to 1,125 after a change. Ask for the percentage decrease.

- A) 20%
- B) 25%
- C) 33%
- D) 75%

**Correct answer: B**

**Explanation:** (1,500−1,125)÷1,500=25%. This tests dividing by the original value — option C divides by 1,125, the commonest error, understating every improvement described this way.

**Question 8 (moderate) — Quantifying an exclusion**

720,000 submissions a year; a control being considered would exclude users without JavaScript, currently around 1.5% of sessions. Ask how many people a year would be affected.

- A) 1,080
- B) 10,800
- C) 11,000
- D) 108,000

**Correct answer: B**

**Explanation:** 0.015×720,000=10,800. This tests converting a percentage into an affected-people count — "1.5% of sessions" sounds negligible, "10,800 people a year unable to complete this" does not — and, in a strong candidate's answer, noting the 1.5% is not a fixed population, including people whose script failed to load on a flaky connection, which is why the argument is about robustness rather than a small identifiable group.

**Question 9 (moderate) — Choosing the denominator**

Journey: 40,000 start, 32,000 pass eligibility, 19,200 reach the declaration, 17,280 submit. Ask what proportion of those reaching the declaration submitted.

- A) 43%
- B) 54%
- C) 60%
- D) 90%

**Correct answer: D**

**Explanation:** 17,280÷19,200=90%. This tests identifying the group the question names as the denominator, rather than the whole-journey total or an intermediate stage. The real losses are 8,000 at eligibility and 12,800 between eligibility and declaration, against 1,920 at submission — establishing that in fifteen seconds redirects a conversation in the meeting rather than a week later.

**Question 10 (harder) — A metric that hides a split**

Time on a page averages 50 seconds; sessions showed participants either glancing for a few seconds or reading carefully for two to three minutes. Ask for the most useful response.

- A) The average is wrong.
- B) The average is probably correct and uninformative: it sits between two clusters and describes neither, so ask for the distribution — which will show whether the page has two audiences behaving differently, and each would need a different design response.
- C) The participants were unrepresentative.
- D) The page should be shorter.

**Correct answer: B**

**Explanation:** Fifty seconds is entirely consistent with two clusters, neither near 50 seconds. This tests recognising a mean landing in the gap between two behavioural clusters, and requesting the distribution — the most useful thing to ask an analytics colleague — rather than leaping to a fix that could harm one cluster (D).

**Question 11 (harder) — Percentage points and relative change**

Error-free completion rose from 45% to 54% after a redesign. Ask which statement is accurate.

- A) A 9% increase.
- B) A 9 percentage point increase, equivalent to a 20% relative increase.
- C) A 20 percentage point increase.
- D) A 16.7% increase.

**Correct answer: B**

**Explanation:** Gap 9 points; relative 9÷45=20%. This tests labelling both figures correctly — the same underlying change described as "9 points" or "20%," with the second sounding more impressive, and supplying both as a standing convention rather than a challenge is a cheap way to be trusted with numbers.

**Question 12 (harder) — What a small comparison can establish**

Baseline completion is 60%, a 6-point improvement would be meaningful, and a colleague proposes 25 moderated sessions before and 25 after. Ask for the strongest response.

- A) Agree; 50 sessions is substantial.
- B) Explain that a 6 point difference on 25 per group is between one and two participants and well inside ordinary variation, so the comparison cannot detect it — recommend measuring the rate with live analytics across all users, and spending the 50 sessions on understanding mechanisms, which moderated research does uniquely well.
- C) Increase to 40 per group.
- D) Run it and report the difference with caveats.

**Correct answer: B**

**Explanation:** Twenty-five per group cannot distinguish a six-point difference from chance. This tests redirecting to the right instrument for each question — analytics for the rate, sessions for the mechanism — rather than merely objecting (C moves towards adequacy without approaching it) or the most damaging option, reporting an underpowered comparison with caveats that will not travel with the number (D).

### Administration tips

- Score for whether the candidate identifies the correct denominator and the population it represents before calculating.
- Note whether the candidate converts to rates before comparing groups or comparing before-and-after figures with different totals.
- Watch for whether the candidate recognises a mean landing between two behavioural clusters and asks for the underlying distribution.
- Score for whether the candidate distinguishes percentage points from a relative percentage change and supplies both as a matter of course.
- Note whether the candidate assesses whether a proposed sample size can plausibly detect the effect it is meant to test for.

### Common pitfalls to watch for when scoring

- Crediting a drop-off or completion figure calculated against the wrong denominator.
- Missing when a candidate compares raw counts before and after a change without accounting for different totals.
- Rewarding an accepted mean without checking for a bimodal or clustered distribution behind it.
- Accepting an underpowered comparison endorsed as adequate to detect the effect in question.
- Missing when a candidate treats a capability-dependent minority (such as users without JavaScript) as a small, fixed, identifiable group rather than a robustness signal.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. In a role that runs on documents — standards, accessibility criteria, component specifications, technical constraints, content guidance — reading accuracy is the substrate everything else rests on. A misread criterion produces a design that fails an audit; a misread finding produces a design that fails a user.

The classic format presents a short passage followed by statements to mark True, False, or Cannot Say. The governing rule is answering from the passage alone, and a candidate's own professional knowledge is the main hazard at this level — the more accessibility criteria they have read, the more readily they supply the clause they expect. Cannot Say deserves particular attention because candidates avoid it, reaching for True or False to seem decisive.

One word matters more in this discipline than most: "or". Standards routinely offer alternative routes separated by "or", and reading them as conjunctions produces unnecessary work and needlessly restrictive designs.

### How this assessment maps to the role

- **Reading precisely** maps to **Designing for everyone**: ensuring a design meets appropriate standards such as accessibility regulations.
- **Separating statement from inference** maps to **Evidence-based design**.
- **Identifying the main point** maps to **Design communication**: explaining problems and design ideas.
- **Handling qualified language** maps to **Designing strategically**: knowing which constraints are hard tells a candidate where design can move.
- **Reading for absence** maps to **Designing for everyone**: noticing a specification never mentions keyboard operation has a direct consequence.
- **Reading feedback accurately** maps to **Designing together**: giving and receiving constructive design feedback.

### Practice questions

*Passage A — for Questions 1 to 4.* "All new public-facing services must use components from the Design System where a suitable component exists. Where no suitable component exists, teams may create a new one, provided it is documented and tested with assistive technology before live use. Components created before this policy took effect must be reviewed within 12 months. Teams are encouraged, but not required, to contribute new components back to the Design System."

**Question 1 (easy)**

Statement: "Teams must contribute new components back to the Design System."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says teams are "encouraged, but not required" to contribute back. This tests catching an explicit removal of an obligation sitting alongside hard requirements elsewhere in the same passage — skimming for general tone produces errors in both directions.

**Question 2 (moderate)**

Statement: "A team that creates a new component without testing it with assistive technology has breached the requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The permission to create a new component is conditional on documenting and testing it; failing a condition means the permission does not apply. This tests distinguishing an explicit exemption (Question 1's False) from a conditional permission, where failing the condition is itself a breach.

**Question 3 (moderate)**

Statement: "A component created three years ago must have been reviewed by now."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The 12-month review deadline is relative to when the policy took effect, which the passage never states. This tests checking whether a deadline's reference point is actually given — its absence is deliberate and recurs across this section.

**Question 4 (harder)**

Statement: "A team may use a custom component that has been documented but not yet tested with assistive technology, provided testing happens before the service goes live."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The condition attaches to use "in a live service," locating the deadline at live use rather than at creation. This tests reading a condition's exact trigger point — reading it as attaching to creation would block legitimate prototyping, and this distinction is the difference between a rule that blocks exploration and one that blocks launch.

*Passage B — for Questions 5 to 8.* "The review of the application form found that users on mobile devices completed more slowly than desktop users and were more likely to abandon at the document upload step. The review notes that mobile users differed from desktop users in age and in whether they were completing the form at home. The review did not assess whether abandoned applications were later completed on another device. It recommends that the team consider whether a redesigned upload step would reduce mobile abandonment."

**Question 5 (easy)**

Statement: "Mobile users were more likely to abandon at the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, respecting the passage's comparative framing. Answer quickly and bank the time for harder items.

**Question 6 (moderate)**

Statement: "The mobile interface causes abandonment at the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage names two confounds (age, completing at home) that could equally explain the gap. This tests treating a declared confound as a warning against inferring causation — the design consequence differs entirely depending on the actual cause, and treating the association as a cause is how a team spends a quarter improving the wrong thing.

**Question 7 (moderate)**

Statement: "Users who abandoned on mobile did not complete the application."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly this was not assessed. This tests treating declared silence as establishing nothing — abandonment on one device may be a sensible switch to a laptop, a mild inconvenience rather than a service failure, and the reviewers flagged the gap rather than letting readers assume.

**Question 8 (harder)**

Statement: "The review recommends redesigning the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The review recommends the team "consider whether" a redesign would help, including concluding it would not. This tests distinguishing "consider whether X" from "recommend X," a distinction that pervades real review documents.

*Passage C — for Questions 9 to 12.* "Interactive components must be operable using a keyboard alone. Where a component uses a non-standard interaction, the team must provide a documented keyboard alternative. Focus must be visible at all times. Where a component displays an error, the error must be programmatically associated with the field it relates to; a visual association alone is not sufficient. These requirements apply to components in public-facing services and to components in internal tools used by more than fifty staff."

**Question 9 (easy)**

Statement: "A visual association between an error and its field is sufficient."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states directly that a visual association alone is not sufficient. This tests catching the load-bearing word "programmatically" — a message placed visually next to a field is obvious to a sighted user and may be absent for a screen reader user encountering fields in markup order.

**Question 10 (moderate)**

Statement: "These requirements apply to an internal tool used by twelve staff."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The threshold is "more than fifty staff," which twelve does not meet — but the passage states where the requirements apply, not where they are excluded. This tests distinguishing stating where a rule applies from stating where it does not — a reader who converts the first into the second confidently tells a team they are exempt when nobody has said so.

**Question 11 (harder)**

Statement: "A component with a non-standard interaction breaches the requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage does not prohibit non-standard interactions; it requires a documented keyboard alternative where one is used. This tests distinguishing a condition from a prohibition — reading it as a prohibition either causes teams to avoid legitimate solutions unnecessarily, or to conclude the rule is unrealistic and ignore it.

**Question 12 (harder) — Main point**

Ask which best captures the main point of Passage C.

- A) Components must never use non-standard interactions.
- B) Components in public services and larger internal tools must remain operable and comprehensible for someone not using a mouse or not seeing the screen — through keyboard operation, visible focus, documented alternatives for unusual interactions, and errors associated in code rather than only visually.
- C) Focus must be visible at all times.
- D) Errors must be programmatically associated with their fields.

**Correct answer: B**

**Explanation:** This tests identifying a summary spanning the whole passage, including its scope clause, without inventing anything — A overstates a conditional requirement into a prohibition, and C and D are each true of one clause and silent on the rest, including the scope.

### Administration tips

- Score for whether the candidate reads a condition's exact trigger point precisely (e.g. "before live use" versus "at creation").
- Note whether the candidate distinguishes an explicit exemption from a conditional permission where failing the condition is itself a breach.
- Watch for whether the candidate distinguishes a scope clause stating where a rule applies from an implied exemption for cases it does not mention.
- Score for whether declared confounds or declared gaps in what was assessed are treated as genuine limits on what can be concluded.
- Note whether a main-point item is answered with a summary covering the whole passage, including scope, rather than one true detail promoted above the rest.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False from the candidate's own professional knowledge rather than the passage.
- Missing when a candidate converts a scope statement into an exemption for a case the passage never addresses.
- Rewarding an association read as causation despite a declared confound.
- Accepting "consider whether X" read as "recommends X."
- Missing when a candidate reads a condition as a prohibition, or vice versa.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what a candidate would do — a dilemma of the kind this role produces, four or five possible responses, and a question asking which is most effective and often which is least.

This section measures whether a candidate's judgement matches what the profession considers good practice at this level. An interaction designer is a confident, competent designer trusted to make good decisions, who recognises when to ask for guidance, contributes to design concepts, plans and runs design sessions, engages the right people, and gives and receives constructive feedback. What distinguishes this level from a junior one: a junior designer escalates a technical constraint, while this level is expected to have the conversation, understand the constraint, and escalate only what genuinely needs authority they do not hold.

Four principles carry most scenarios. Users come first, specifically users who cannot get past something. Protect the integrity of the design rationale — options that inflate, soften or mislabel findings are close to automatically wrong, however reasonable the motive. Address problems directly, early, with the person involved. And fix the instance, then the system — noticing that one broken error summary means a broken template, and doing something about the template, is a marker of the seniority this role is working towards.

### How this assessment maps to the role

- **Explaining and defending design decisions** maps to **Design communication**.
- **Protecting inclusion** maps to **Designing for everyone**.
- **Running sessions and engaging the right people** maps to **Designing together**.
- **Giving and receiving feedback** maps to **Designing together**, named in both directions.
- **Using evidence honestly** maps to **Evidence-based design**.
- **Risk, opportunity and alignment** map to **Designing strategically**.
- **Supporting colleagues** maps to **Leading design**.

### Practice questions

**Question 1 (easy) — A design session producing one voice**

Twenty minutes into a session, two senior stakeholders dominate and four invited caseworkers have not spoken. Ask for the most effective response.

- A) Let it run; the stakeholders know the service.
- B) Change the structure — write first then round the table, or split into pairs — so quieter participants contribute without anyone being told to stop.
- C) Ask the stakeholders directly to let others speak.
- D) Follow up with the caseworkers separately.

**Most effective: B. Least effective: A**

**Explanation:** The session is producing one perspective when it was convened for several. This tests adapting a session's format rather than confronting individuals — option A is least effective, wasting the caseworkers' time and producing a design based on how senior people imagine the work is done, particularly damaging since caseworkers know exactly which fields get entered wrongly and why.

**Question 2 (easy) — A shortcut proposed by a developer**

A developer says the agreed error handling will take three extra days and proposes a single generic message at the top of the page. Ask for the most effective response.

- A) Agree; three days is a lot.
- B) Explain what the generic message costs users — they must find the problem themselves, and someone using a screen reader may be unable to — and ask whether a middle option fits the time, such as specific messages for the two fields that fail most often.
- C) Insist on the full agreed behaviour.
- D) Escalate to your lead without talking to the developer.

**Most effective: B. Least effective: A**

**Explanation:** Making the user cost concrete, treating the time constraint as legitimate, and proposing a middle path is what usually gets agreed. This tests substituting rather than accepting a shortcut that transfers cost to users and produces error handling inconsistent with the rest of the service — option A is least effective, accepting confusion and repeat submissions to save three days once.

**Question 3 (easy) — A defect with a template behind it**

A live page's error summary is found not to link to its fields. Ask for the most effective response.

- A) Raise a ticket for that page.
- B) Raise it with the team, describing what a keyboard user has to do, and ask whether the same defect exists on every page using the same template — since an error summary is almost certainly shared.
- C) Fix it in the prototype.
- D) Note it for the next accessibility audit.

**Most effective: B. Least effective: D**

**Explanation:** An error summary is a shared component, so one broken instance almost certainly means every page using it is broken. This tests fixing the instance and the system in one move — option D is least effective, deferring a live accessibility defect to a scheduled audit, letting it persist for months.

**Question 4 (moderate) — Scope creep in a session**

Halfway through a session on a form journey, a stakeholder asks to also cover a proposed new feature "since everyone's here." Ask for the most effective response.

- A) Cover it; it is efficient.
- B) Explain that adding an unrelated topic risks both the session's purpose and the quality of thinking on the new one, and propose a short separate session or adding it to the next with proper preparation.
- C) Refuse, since the agenda is agreed.
- D) Cover it briefly at the end if there is time.

**Most effective: B. Least effective: D**

**Explanation:** Session time is finite and an unprepared topic gets thin, unstructured attention. This tests redirecting rather than refusing a legitimate but mistimed request — option D is least effective, an unprepared topic discussed in the last ten minutes by a tired room producing conclusions too weak to use and just solid enough to be cited later as agreed.

**Question 5 (moderate) — Evidence that contradicts your design**

Testing shows six of nine participants clicked a secondary link instead of the primary button, on a page the candidate designed. Ask for the most effective response.

- A) Note the participants were unrepresentative and keep the design.
- B) Treat the result as a signal about the design, look at what drew people to the link — wording, position, visual weight, or whether it answers a question the page raised — and propose a change to test next round.
- C) Remove the secondary link.
- D) Ask for more participants before deciding.

**Most effective: B. Least effective: A**

**Explanation:** Six of nine doing the same unexpected thing is a signal, applying regardless of intended design. This tests treating consistent behaviour as a signal about the design, including a possibility easy to miss — that the page raised a question it did not answer. Option A is least effective, the most reliable way for a designer to stop learning.

**Question 6 (moderate) — A pattern used for the wrong purpose**

A stakeholder asks for the "check your answers" pattern on a page listing documents the user must still obtain, arguing it is quicker and looks consistent. Ask for the most effective response.

- A) Use it; consistency matters.
- B) Explain that the pattern carries an expectation — that everything shown is done and editable — which is wrong here and will mislead users, and propose a pattern that fits "things you still need to do" while keeping the same visual style so the service stays consistent.
- C) Refuse and design from scratch.
- D) Use it but change the heading.

**Most effective: B. Least effective: D**

**Explanation:** The stakeholder's goals of speed and consistency are legitimate, and this tests addressing both while correcting a misapplied pattern, since a pattern is a set of learned expectations, not a layout. Option D is least effective, the worst combination: users read layout faster than words and will act on the wrong signal.

**Question 7 (moderate) — A constraint you doubt**

A developer says a field cannot accept values longer than 30 characters "because of the API," and research shows 8% of users must truncate their address. Ask for the most effective response.

- A) Accept it and add a character counter.
- B) Ask where the limit comes from — the API, the database, or a validation rule — and whether the underlying system rejects longer values or silently truncates them, since the answer determines whether this is a hard constraint, a data quality problem, or an assumption nobody has revisited.
- C) Insist the limit is removed.
- D) Ask users to abbreviate.

**Most effective: B. Least effective: D**

**Explanation:** "Because of the API" could mean several things with different consequences — a genuine constraint, a silent data-quality problem affecting 8% of records, or an old validation rule. This tests distinguishing those before acting — option D is least effective, transferring the problem to users and producing addresses that may not be deliverable.

**Question 8 (harder) — An accessibility blocker close to launch**

Two weeks before launch, a custom component is found unable to be operated with a keyboard. Ask for the most effective response.

- A) Launch and add it to the backlog.
- B) Raise it immediately with the delivery manager and service owner, describe precisely what cannot be done and by whom, ask for an explicit recorded decision, and check whether a standard component could replace the custom one quickly.
- C) Attempt the fix yourself in the two weeks.
- D) Launch and publish an accessibility statement noting the gap.

**Most effective: B. Least effective: A**

**Explanation:** An unrecorded decision drifts into launch by default; a recorded one makes the trade-off owned. This tests securing an explicit decision and naming the practical step nobody thinks of under pressure — a standard component swap — over sending a genuine blocker to a backlog where it will remain unfixed (A, least effective).

**Question 9 (harder) — A component that is not your team's**

A shared component maintained by another team has a focus behaviour that traps keyboard users; this service uses it. Ask for the most effective response.

- A) Work around it in your service.
- B) Report it to the owning team with a precise description and a reproduction, ask about their timeline, and meanwhile decide with your team whether to apply a local mitigation — while flagging that every service using the component is affected.
- C) Stop using the component.
- D) Fix it locally and move on.

**Most effective: B. Least effective: A**

**Explanation:** A defect in a shared component is a defect in every service using it, making an upstream report the highest-value action, and a precise reproduction is what gets it triaged and fixed rather than deferred. This tests reporting upstream while addressing the immediate user harm honestly — option A is least effective, working around a defect silently and leaving every other service broken.

**Question 10 (harder) — Findings the team does not want**

Research shows a component built over two months causes problems for nine of twelve participants, with five minutes at the show and tell. Ask for the most effective response.

- A) Lead with the positives and mention difficulties briefly.
- B) Present what happened clearly and without blame — what participants tried, where they got stuck, what they said — and frame the next step as understanding why, inviting the team into the diagnosis.
- C) Present the failure rate starkly.
- D) Ask your lead to present it.

**Most effective: B. Least effective: A**

**Explanation:** Delivery determines whether a difficult finding gets acted on or defended against, and ending on an invitation into the diagnosis brings people who built the component into finding the cause. Option A is least effective, softening a nine-in-twelve failure so two months of effort continues down the same path.

**Question 11 (harder) — Consensus that would harm users**

A team has converged on a control everyone likes, which the evidence indicates will fail users on small screens and users with motor impairments; reopening it reverses a decision people are relieved to have made. Ask for the most effective response.

- A) Let it go; consensus has value.
- B) Raise it once, clearly and specifically, showing what the evidence indicates will happen to those users and what a mitigation might look like — then if the team proceeds, ensure the risk is documented and propose measuring the outcome after release.
- C) Escalate to the service owner over the team's head.
- D) Keep raising it until the team changes course.

**Most effective: B. Least effective: A**

**Explanation:** This tests threading a professional obligation to say the thing against the need to keep working with the same people — raising it once with evidence and a constructive mitigation, then documenting the risk and proposing measurement if the decision stands. Option A is least effective, since consensus that harms people who already have fewer options is not a value, and silence with evidence in hand is complicity.

**Question 12 (harder) — A flaw in your own work**

Research relied on for a design decision now in build is found to have recruited only users who had previously completed the service. Ask what should happen.

- A) Note it as a limitation next time.
- B) Tell the team and decision-makers now, scope precisely which conclusions are affected and which still stand, and propose targeted follow-up with users who did not complete.
- C) Quietly commission follow-up and correct the record if findings differ.
- D) Say nothing; the decision was reasonable anyway.

**Most effective: B. Least effective: D**

**Explanation:** A sample of successful completers cannot see the failures the design was meant to address, and something is already being built on it. This tests prompt disclosure with precise scoping — some conclusions may remain sound — rather than concealment (C) or a guess substituted for evidence (D, least effective).

### Administration tips

- Score for whether the candidate exercises real professional judgement and holds a position the evidence supports under pressure.
- Note whether the candidate escalates only what genuinely needs authority they do not hold, having first engaged directly with the person who can resolve it.
- Watch for whether the candidate fixes both the instance and the underlying shared system (a template, a component) rather than the instance alone.
- Score for whether an own or relied-upon flaw is disclosed promptly, with precise scoping of what is and is not affected.
- Note whether the candidate protects the integrity of a design rationale, resisting a response that inflates, softens or mislabels a finding.

### Common pitfalls to watch for when scoring

- Crediting a response that dismisses consistent unexpected research behaviour as unrepresentative participants.
- Missing when a candidate accepts a shortcut that transfers cost onto users.
- Rewarding a pattern kept in place despite its visual meaning being wrong for the content.
- Accepting a local workaround for a shared-component defect rather than an upstream report.
- Missing when a candidate softens a difficult finding, or delays disclosure of a flaw in their own work rather than raising it and its scope promptly.

## Conclusion

This guide has worked through pattern recognition and risk reasoning across page audits, competing explanations, component trade-offs, and second-order consequences; the arithmetic that makes design judgements defensible — measuring drop-off against the correct denominator, converting a defect into a specific number of affected people, and recognising a mean that hides a bimodal split; the discipline of reading standards, accessibility criteria and review documents at exactly the strength the text supports, especially the distinction between stating where a rule applies and stating where it does not; and the situational judgement that defines a strong interaction designer — exercising real professional judgement, escalating only what needs authority not held, and fixing the instance and the system together.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several items reward the quality of reasoning as much as the final choice, and at this level the strongest answers are consistently the ones honest about the limits of what the evidence shows. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
