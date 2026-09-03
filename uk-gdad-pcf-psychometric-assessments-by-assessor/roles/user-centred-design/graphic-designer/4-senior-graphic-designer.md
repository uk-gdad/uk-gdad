# Senior Graphic Designer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior graphic designer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

The assessments described here are job-specific: they use the kinds of artefacts a senior graphic designer genuinely handles — design systems, type scales, colour tokens, iconography sets, accessibility audit reports, usability research findings, and stakeholder communications — and the kinds of decisions the role genuinely makes, such as advising teams on inclusive and accessible design, building consensus around a design approach, using research evidence to develop and test design ideas, and helping set direction across complex services.

A senior graphic designer works with minimal support, influences and mentors others, and makes important decisions based on research while understanding how those decisions affect other people, using layout, spacing, colour, type and iconography to ensure content is legible and readable. Behind every craft decision at this level sits a chain of reasoning: is this spacing scale internally consistent, does this colour combination meet accessibility regulations, what does this usability data actually tell us, and what is the most effective way to respond when a programme director asks for something that would harm users. Cognitive, numeric, verbal, and situational judgement material maps directly onto those demands.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate names the mechanism behind a finding and identifies elimination as a strategy, rather than manufacturing faults that are not there. Situational judgement items at this level consistently reward a candidate who finds the want behind a stakeholder's stated position, who puts a decision to the person who owns it with the options clearly stated, and who raises contrary evidence about their own past recommendations before anyone else does.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — design system components, spacing and type scales, colour token libraries, icon sets, prototypes, research findings, and design specifications, reasoned about quickly and accurately.

Typical format: an online, timed test lasting 15 to 30 minutes, covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

At this level, visual craft is systematic thinking made visible. A design system only works if its rules are internally consistent; a type scale only communicates hierarchy if its ratios follow a logic; an icon set only reads as a family if its construction rules are applied without exception. The candidate is expected to be the person who spots when those rules break, who deduces the consequences of a constraint for the design, and who decides what to fix first when everything seems urgent.

### How this assessment maps to the role

- **Pattern recognition** maps to **Designing strategically**: identifying and creating new design patterns and components requires seeing recurring structures across screens, services and teams, and noticing the instance that quietly breaks the pattern.
- **Logical deduction** maps to **Designing for everyone** and **Designing strategically**: ensuring a design meets appropriate standards, and using risks, opportunities and constraints in technology, systems and policy to shape design, both require reasoning validly from a rule to its consequences.
- **Error checking** maps to **Iterative design** and **Design communication**: iterating and improving complex designs based on successive rounds of research, and clearly documenting design decisions, both require spotting an inconsistency between a specification and its implementation.
- **Prioritisation** maps to **Leading design**: leading and coordinating design work in a team depends on rapidly ranking what matters most when deadlines, research sessions, mentoring commitments and governance demands collide.
- **Applied problem solving** maps to **Evidence-based design**: analysing, synthesising and clearly explaining complex evidence, including large data sets, means decomposing a tangled question and reassembling a defensible answer.

### Practice questions

**Question 1 (easy) — Pattern recognition in a spacing scale**

A design system uses a spacing scale based on multiples of a 4px base unit, doubling at each named step: `space-1` = 4px, `space-2` = 8px, `space-3` = 16px, `space-4` = 32px. A junior designer's component specification applies: card padding 16px; button vertical padding 8px; section margin 32px; icon-to-label gap 12px; page gutter 4px. Ask which value breaks the spacing scale.

- A) Card padding
- B) Section margin
- C) Icon-to-label gap
- D) Page gutter

**Correct answer: C**

**Explanation:** 16, 8, 32 and 4 all appear on the scale; 12px sits between `space-2` and `space-3` and belongs to no named token. This tests reading the rule first, then testing every item against it mechanically — a single off-scale value looks harmless once but becomes a precedent once shipped, and the scale's whole purpose, predictable rhythm and fewer arbitrary decisions, erodes with each one.

**Question 2 (easy) — Logical deduction from an accessibility rule**

Design standard: "Every interactive element must have a visible focus state unless the element is hidden from all users." A developer reports: "The 'Download report' button is an interactive element and has no visible focus state." Ask which conclusion must be true.

- A) The team has breached the design standard.
- B) The button is hidden from all users.
- C) Either the button is hidden from all users, or the team has breached the standard.
- D) The button fails accessibility regulations.

**Correct answer: C**

**Explanation:** The standard is a conditional with a single permitted exception, and the facts given do not establish whether the exception applies — so neither A nor B is guaranteed, and D introduces a different instrument entirely, since breaching an organisation's own standard does not automatically mean breaching accessibility regulations with their own criteria. This tests concluding only what the facts guarantee, mirroring the discipline of checking whether an exception legitimately applies before declaring non-compliance.

**Question 3 (easy) — Error checking a colour token specification**

Token library: primary text `text-primary` (#0B0C0C), secondary text `text-secondary` (#505A5F), links `link-blue` (#1D70B8), error messages `error-red` (#D4351C). A specification handed over for sign-off reads: body copy #0B0C0C; helper text #505A5F; "Change" link #1D70B8; error summary text #D4351E. Ask how many values in the specification are incorrect.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Body copy, helper text and the link match exactly; the error summary uses #D4351E against the token #D4351C — the final character differs. This tests careful character-level checking, since a single-character hex discrepancy is easy to skim past when the rendered colours are nearly indistinguishable, yet it silently forks the token library and will not update when the token changes.

**Question 4 (moderate) — Deduction from type scale rules**

Type scale rule: each step is 1.25 times the step below, rounded to the nearest whole pixel; base body size 16px. A specification lists: small heading 20px, medium heading 25px, large heading 31px, extra-large heading 39px. Ask which listed size, if any, is inconsistent with the scale.

- A) Medium heading
- B) Large heading
- C) Extra-large heading
- D) All sizes are consistent with the scale

**Correct answer: D**

**Explanation:** 16×1.25=20; 20×1.25=25; 25×1.25=31.25, rounding to 31; 31×1.25=38.75 or 31.25×1.25=39.06, both rounding to 39. Every listed size is consistent. This tests resisting the assumption that a checking question must contain a fault — an "all correct" option exists to catch a candidate who manufactures an error, and verifying that work is right is as important a skill as finding what is wrong.

**Question 5 (moderate) — Prioritisation across a senior designer's week**

Monday morning, four items: (1) a service assessment is Thursday, and the panel needs updated design history documenting key decisions and evidence, without which the service risks not passing; (2) a mentee has asked for feedback on their first icon set, presented to their team Friday; (3) a programme director has emailed asking for "quick visual options" for a ministerial briefing, no deadline stated; (4) a quarterly contribution to the cross-government design pattern library is due at month end, two weeks away. Ask for the most defensible sequencing.

- A) 3, 1, 2, 4 — programme directors outrank all other work
- B) 1, 3, 2, 4 — assessment-critical documentation first, then scope the director's request, then mentoring, then routine contribution
- C) 1, 2, 3, 4 — strict deadline order
- D) 2, 1, 3, 4 — developing others always comes first

**Correct answer: B**

**Explanation:** Item 1 is urgent and high impact, since a service assessment outcome affects the whole team; item 3 has no stated deadline but merits a brief early reply scoping the request rather than deep work now; item 2 matters but has room before Friday; item 4 is routine and two weeks away. This tests sequencing by impact-weighted urgency rather than by seniority of the requester (A), strict deadline order that confuses "no deadline" with "no urgency" (C), or a fixed rule that inverts impact ordering (D).

**Question 6 (moderate) — Pattern recognition in an icon family**

Construction rules: (i) 24px grid; (ii) 2px stroke; (iii) 2px corner radius; (iv) outline style only, no solid fills except accent dots no larger than 4px. Five icons, all meeting (i)–(iii): "Calendar" — outline with a 3px solid dot; "Alert" — solid filled triangle; "Search" — outline only; "Document" — outline with a 4px solid dot; "User" — outline only. Ask which icon breaks the family's construction rules.

- A) Calendar
- B) Alert
- C) Document
- D) None of them

**Correct answer: B**

**Explanation:** Calendar's 3px dot and Document's 4px dot both fall within the "no larger than 4px" allowance; Alert's fully solid filled triangle is neither an outline nor an accent dot, breaking rule (iv). This tests applying a rule precisely rather than misremembering its limit — one solid icon in an outline set draws disproportionate attention and distorts the interface's visual hierarchy.

**Question 7 (moderate) — Logical deduction about design dependencies**

Rules: (i) new page templates cannot be finalised before the content redesign is approved; (ii) content redesign cannot be approved until user research playback happens; (iii) usability testing of templates must occur in the same sprint as template finalisation or the sprint immediately after. Playback happens at the end of Sprint 2; content approval takes one full sprint. Ask for the earliest sprint in which usability testing of the templates may occur.

- A) Sprint 2
- B) Sprint 3
- C) Sprint 4
- D) Sprint 5

**Correct answer: C**

**Explanation:** Playback finishes end of Sprint 2, so approval occupies Sprint 3 at the earliest, completing end of Sprint 3; finalisation cannot happen before Sprint 4; testing must fall in Sprint 4 or 5, so the earliest is Sprint 4. This tests working forwards through a dependency chain without anchoring on "after finalisation" and forgetting the rule allows the same sprint (the trap producing Sprint 5), or forgetting approval takes a full sprint (the trap producing Sprint 3).

**Question 8 (moderate) — Error checking between prototype and specification**

Specification: (i) green confirmation panel, white text on #00703C; (ii) reference number bold within the panel; (iii) "What happens next" is a medium heading directly below the panel; (iv) feedback link in the footer, not the body. Build: confirmation panel matches (i); reference number in regular weight; heading matches (iii); feedback link at the end of the body copy. Ask how many discrepancies exist between the specification and the build.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** (i) and (iii) match; (ii) the reference number should be bold and is regular — a discrepancy; (iv) the link should be in the footer and is in the body — a discrepancy. Two discrepancies. This tests running a checklist item by item and recording a verdict for each, rather than eyeballing the whole page and estimating — "two deviations from spec, one affecting scannability of the reference number" is actionable in a way "the build feels off" is not.

**Question 9 (harder) — Multi-constraint scheduling of design sessions**

Three sessions — a design crit (C), a stakeholder walkthrough (W), and a pattern workshop (P) — must be scheduled across five working days, Monday to Friday, at most one session per day, all within the same week. Constraints: (i) the crit must happen before the walkthrough; (ii) the programme director attends only the walkthrough and is available only Wednesday and Friday; (iii) at least one full working day must elapse between the crit and the walkthrough, for revision; (iv) the pattern workshop must be the working day immediately after the walkthrough. Ask on which day the walkthrough must take place.

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: B**

**Explanation:** If the walkthrough is Friday, rule (iv) forces the workshop to Saturday — impossible — so Friday is ruled out, leaving Wednesday as the only director-available day. Checking feasibility: the crit on Monday leaves Tuesday as the full working day between them (rule iii satisfied), and the workshop falls on Thursday, the day immediately after. This tests eliminating the impossible option first — proving Friday cannot work is quicker than searching for a valid Friday schedule — the same move used when a stakeholder's requested timeline cannot physically contain the research, revision and sign-off it implies.

**Question 10 (harder) — Applied problem solving with research evidence**

Usability testing of two design options for a form's error handling: Option 1 (inline errors only), 12 participants, 9 recovered from errors unaided. Option 2 (error summary plus inline errors), 12 participants, 11 recovered unaided. A team member argues: "Option 2 wins, 11 beats 9, decision made." Ask which reasoning is most sound.

- A) Agree — the numbers clearly favour Option 2, and evidence-based design means following the numbers.
- B) Disagree — twelve participants is far too few for any conclusion, so run a survey of at least 400 users instead.
- C) Note that the direction favours Option 2 and is consistent with established accessibility guidance on error summaries, so adopt Option 2 while continuing to monitor recovery in later rounds.
- D) Run the test again with the same 12 participants to double the sample.

**Correct answer: C**

**Explanation:** With 12 participants, 11 versus 9 could plausibly arise by chance alone, but error summaries with inline errors are an established, evidence-backed pattern, so the small study's direction corroborates strong prior evidence rather than standing alone. This tests combining evidence sources and continuing to iterate — option B swings to demanding survey-scale numbers for a question surveys measure poorly, and D misunderstands sampling, since retesting the same people adds practice effects rather than statistical power.

**Question 11 (harder) — Deduction across design system governance rules**

Governance rules: (i) a new component may enter the design system only if no existing component meets the need; (ii) any component that enters the system must have passed an accessibility review; (iii) a component that fails accessibility review may be resubmitted only after a documented fix. The "timeline" component entered the design system this month; the accessibility review team confirms they reviewed it exactly once, in a review it did not pass. Ask which conclusion must be true.

- A) The governance rules were breached when "timeline" entered the system.
- B) An existing component already met the need that "timeline" serves.
- C) "Timeline" was resubmitted after a documented fix.
- D) The accessibility review team made an error in their records.

**Correct answer: A**

**Explanation:** Rule (ii) requires having passed a review to enter; "timeline" was reviewed once and did not pass, so it never passed one, and resubmission after a fix (rule iii) would have produced a second review, which the records rule out. This tests proving a breach by eliminating every route to compliance — the same technique used to evidence a standards breach before raising it, so the conversation starts from logic rather than accusation.

**Question 12 (harder) — Prioritising remediation across a complex service**

Accessibility audit findings, engineering capacity for two fixes this sprint: (1) body text on the start page fails contrast at 2.9:1, start page receives 100% of user journeys; (2) a decorative image on a help page lacks alt text, page receives 2% of journeys; (3) the payment form's error messages are announced incorrectly by screen readers, form reached by 60% of journeys, errors occur in roughly a quarter of submissions; (4) a PDF guide downloaded by 5% of users is untagged. Ask which pair of fixes is most defensible.

- A) Findings 1 and 2 — fix the highest-traffic page and the quickest win
- B) Findings 1 and 3 — highest reach combined with highest harm at a critical task
- C) Findings 3 and 4 — both findings affect assistive technology
- D) Findings 2 and 4 — clear the small items first so the backlog shrinks fastest

**Correct answer: B**

**Explanation:** Finding 1 touches every user on every journey; finding 3 sits at the critical payment task, where 60% reach with a 25% error rate means roughly 15% of all journeys hit the failure condition and an affected screen reader user may be completely blocked. This tests ranking by reach multiplied by severity — finding 2 is decorative and low value, finding 4 has a workaround, C substitutes a category label for reach-times-harm reasoning, and D optimises backlog count over user impact.

### Administration tips

- Score for whether the candidate reads a rule precisely and tests every item against it mechanically, rather than trusting a visual impression.
- Note whether the candidate verifies that work is correct rather than assuming a checking question must contain a fault.
- Watch for whether the candidate eliminates an impossible option in a constrained scheduling or dependency problem rather than searching exhaustively.
- Score for whether the candidate ranks priority by impact-weighted urgency rather than by the seniority of a requester or by strict deadline order alone.
- Note whether the candidate combines a small, directional evidence sample with established prior evidence rather than treating either alone as decisive.

### Common pitfalls to watch for when scoring

- Crediting an answer that trusts visual instinct over a stated rule rather than checking against the text as given.
- Missing when a candidate skims a near-identical value (a hex code, a pixel value) that differs by one character.
- Rewarding an answer that assumes every checking item must contain an error.
- Accepting a prioritisation driven by a stakeholder's seniority rather than by impact and urgency.
- Missing when a candidate anchors on the first plausible answer in a dependency or scheduling item rather than testing the remaining options.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role genuinely produces and consumes. Not a mathematics exam — the arithmetic rarely goes beyond percentages, ratios, averages, rates, and proportions. What it tests is whether a candidate reads a table or chart accurately, selects the right operation, executes it without slips, and resists conclusions the numbers do not support.

Typical format: a timed online test of 20 to 40 minutes with 15 to 25 questions, each based on a data table, chart, or short numerical scenario, calculators usually permitted. For design roles, the data used includes usability testing results, accessibility metrics, research sample breakdowns, survey scores, task completion and error rates, file sizes and performance budgets, and, at senior level, capacity and cost figures.

A senior designer who misreads a percentage-point change as a percentage change, or who averages averages without weighting, will build consensus around the wrong conclusion — persuasively. Numeric reasoning assessment checks that the person guiding a team's interpretation of evidence can be trusted with the numbers.

### How this assessment maps to the role

- **Interpreting tables and charts** maps to **Evidence-based design**: analysing, synthesising and clearly explaining complex evidence relevant to users or a service starts with reading data structures accurately.
- **Percentages and proportions** map to **Evidence-based design** and **Iterative design**: task completion rates, error rates and improvement between rounds of research are proportional reasoning.
- **Ratios** map to **Designing for everyone**: accessibility contrast requirements are expressed as ratios, and ensuring a design meets appropriate standards means calculating and comparing them.
- **Rates and trends** map to **Designing strategically**: using risks, opportunities and constraints to shape design often means reasoning about trajectories.
- **Weighted reasoning and sanity-checking** map to **Design communication**: building consensus by asking difficult questions is frequently a numerical question — is that difference real, what is the base, does that average hide the users who most need attention.

### Practice questions

**Question 1 (easy) — Task completion percentage**

In a usability test of a redesigned application form, 18 of 24 participants completed the main task unaided. Ask for the percentage.

- A) 66%
- B) 70%
- C) 75%
- D) 80%

**Correct answer: C**

**Explanation:** 18÷24=0.75=75%. This tests basic percentage calculation, checkable by simplifying the fraction first — 18/24 reduces to 3/4, and three-quarters is 75%, faster and less error-prone under time pressure than long division.

**Question 2 (easy) — Percentage change in errors**

Round 1 of testing recorded 40 form errors; after a design iteration, Round 2 recorded 26 errors with the same number of participants and tasks. Ask for the percentage decrease.

- A) 14%
- B) 26%
- C) 35%
- D) 54%

**Correct answer: C**

**Explanation:** Change 40−26=14; 14÷40=0.35=35%. This tests dividing by the original figure — option D (14÷26) uses the new value as the base, a classic error that inflates a decrease and matters because the base chosen changes the story told when reporting iteration impact.

**Question 3 (easy) — Reading a research sample table**

Recruited participants: screen reader users 6, screen magnifier users 4, deaf or hard of hearing users 5, users with no access needs 15. Ask what fraction of the sample has an identified access need.

- A) One third
- B) Two fifths
- C) One half
- D) Three fifths

**Correct answer: C**

**Explanation:** Access-need groups: 6+4+5=15; total sample 15+15=30; 15÷30=1/2. This tests computing the denominator (the whole sample) explicitly before forming the fraction — a skill relevant to explaining why findings from a deliberately weighted sample should not be read as population prevalence.

**Question 4 (moderate) — Contrast ratio compliance**

Requirement: 4.5:1 for normal-size body text, 3:1 for large text. Measured: header (large) 3.2:1; body copy (normal) 4.6:1; caption (normal) 4.1:1; button label (normal) 5.8:1. Ask how many of the four text styles fail their applicable requirement.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Header passes at 3:1; body copy and button label pass at 4.5:1; caption fails at 4.1<4.5. One failure. This tests matching each measurement to its applicable threshold — applying 4.5:1 to everything would wrongly fail the header, and applying 3:1 to everything would wrongly pass the caption.

**Question 5 (moderate) — Weighted average satisfaction score**

Round 1 survey: 120 responses, mean 3.5. Round 2 (after redesign): 80 responses, mean 4.0. Ask for the mean satisfaction across all 200 responses.

- A) 3.65
- B) 3.70
- C) 3.75
- D) 3.80

**Correct answer: B**

**Explanation:** Weighted total: (120×3.5)+(80×4.0)=420+320=740; 740÷200=3.7. This tests weighting by response count rather than simply averaging the two means (3.75, option C), which over-credits the smaller, better-scoring round — one of the most common numerical errors in evidence playback decks.

**Question 6 (moderate) — Image budget arithmetic**

Page performance budget: 500 KB for images. A proposed landing page: hero illustration 180 KB, four icons at 12 KB each, six photographic tiles at 45 KB each. Ask by how much the page is over or under budget.

- A) 2 KB under budget
- B) 2 KB over budget
- C) 48 KB under budget
- D) 22 KB over budget

**Correct answer: A**

**Explanation:** Icons: 4×12=48; tiles: 6×45=270; total: 180+48+270=498 KB; 500−498=2 KB under budget. This tests careful, ordered arithmetic on a multi-part total — when two options differ only in direction (over versus under), the item is checking sign discipline: compute the total first, then subtract in a stated direction, and read off the sign.

**Question 7 (moderate) — Ratio of design capacity**

Design capacity split between new feature work and design debt in the ratio 3:2. First 20 of 40 design-days this quarter were spent at that ratio; a mid-quarter decision reallocates the remaining 20 design-days to 1:1. Ask how many design-days in total go to design debt this quarter.

- A) 16
- B) 18
- C) 20
- D) 22

**Correct answer: B**

**Explanation:** First 20 days at 3:2 (5 parts, 4 days each): debt gets 2×4=8 days. Remaining 20 days at 1:1: debt gets 10 days. Total: 8+10=18. This tests piecewise calculation — splitting a period at the point a rule changes, the standard technique whenever an allocation or rate changes partway through.

**Question 8 (moderate) — Interpreting a completion-rate trend**

Quarterly usability benchmarks: Q1 62%, Q2 68%, Q3 71%, Q4 79%. A stakeholder says: "Completion improved by 17% over the year." Ask for the most accurate correction.

- A) No correction needed — 79 minus 62 is 17, so 17% is right.
- B) Completion improved by 17 percentage points, which is a 27% relative improvement on the Q1 baseline.
- C) Completion improved by 17 percentage points, which is a 21.5% relative improvement on the Q1 baseline.
- D) The improvement cannot be quantified without raw participant numbers.

**Correct answer: B**

**Explanation:** 79−62=17 percentage points; relative improvement 17÷62≈27%. This tests the percentage-versus-percentage-point distinction — option C divides by the wrong base (17÷79), and option D overcorrects, since quarterly percentages can legitimately be compared as reported.

**Question 9 (harder) — Sample sizes across research rounds**

Three rounds of usability testing: Round 1, whole journey, 8 participants; Round 2, two failed screens re-tested, 6 participants each in two separate sessions (no participant attends both); Round 3, whole journey re-tested, 8 new participants. Recruitment costs £85 per participant, plus a £150 fixed facility cost per round (a round with two sessions still counts as one round). Ask for the total research cost.

- A) £2,380
- B) £2,830
- C) £2,900
- D) £3,130

**Correct answer: B**

**Explanation:** Participants: 8+12+8=28; participant cost 28×£85=£2,380; facility cost 3×£150=£450; total £2,830. This tests decomposing a multi-step cost problem — participants, then per-unit costs, then fixed costs — before touching the numbers, since option A omits facility costs and option C miscounts Round 2's two sessions as two rounds.

**Question 10 (harder) — Reading a two-way findings table**

Accessibility audit by severity and component type:

| | Critical | Major | Minor | Total |
|---|---|---|---|---|
| Forms | 3 | 5 | 8 | 16 |
| Navigation | 1 | 4 | 7 | 12 |
| Content pages | 0 | 6 | 14 | 20 |
| **Total** | **4** | **15** | **29** | **48** |

Ask which statement is supported by the table.

- A) Forms account for the majority of critical findings.
- B) Navigation has the highest proportion of minor findings among their own findings.
- C) Navigation is the most accessible component type.
- D) Fixing all form findings would resolve half of all critical and major findings combined.

**Correct answer: A**

**Explanation:** Forms have 3 of the 4 critical findings (75%), a clear majority. This tests reading the single most direct, least interpretable claim in a table before checking alternatives: B is false, since content pages' minor proportion (14÷20=70%) exceeds navigation's (7÷12≈58%); C makes an evaluative leap the data cannot support, since fewer findings may reflect less audit coverage rather than better accessibility; D fails arithmetically, since form critical-plus-major is 8 of 19 total, short of half.

**Question 11 (harder) — Projecting adoption of a new pattern**

An accessible date-picker pattern is being adopted across 40 services: end of month 1, 8 services; end of month 2, 14; end of month 3, 20. Ask, at the average monthly rate of the last two months, at the end of which month all 40 services will have adopted the pattern.

- A) Month 6
- B) Month 7
- C) Month 6.5, reported as month 7
- D) Month 8

**Correct answer: B**

**Explanation:** The last two months each added 6 services; 20 remain, needing 20÷6≈3.33 further months, i.e. completion within month 6.33 measured from the start — but checking at month ends: month 6 gives 20+18=38 (short), month 7 gives 20+24=44 (exceeds 40). Completion is therefore first confirmed at the end of month 7. This tests rounding a rate-based projection in the direction the question's framing demands — the projection cannot complete before the fraction of a month completes — and, professionally, treating a linear projection as a planning aid rather than a promise, since adoption often slows as the remaining cases get harder.

**Question 12 (harder) — Comparing improvement claims across services**

Service A's "cannot read content" tickets fell from 250 to 200 per month after a typography overhaul; Service B's fell from 40 to 24 per month after the same overhaul. Ask which service saw the greater improvement.

- A) Service A — it removed 50 tickets a month against Service B's 16.
- B) Service B — its 40% relative reduction exceeds Service A's 20%.
- C) It depends on the measure: A leads on absolute reduction (50 versus 16 tickets), B on relative reduction (40% versus 20%); both facts should be reported with context such as service traffic.
- D) Neither change is meaningful without a controlled experiment.

**Correct answer: C**

**Explanation:** Absolute: A 50, B 16 (A leads); relative: A 50÷250=20%, B 16÷40=40% (B leads). This tests reporting both measures with context rather than smuggling a measure-choice into a factual claim, as A and B each do — D overstates the case, since before-and-after operational data still carries real evidential weight when reported honestly, even without a controlled comparison.

### Administration tips

- Score for whether the candidate identifies the denominator before calculating, since most numeric-reasoning errors are base errors rather than arithmetic errors.
- Note whether the candidate weights an average by group size rather than averaging averages directly.
- Watch for whether the candidate distinguishes a percentage change from a percentage-point change, and states which base was used.
- Score for whether the candidate reads the single most direct, least interpretable claim from a table before considering more elaborate alternatives.
- Note whether the candidate treats a linear rate-based projection as a planning aid rather than a guarantee, and rounds in the direction the question demands.

### Common pitfalls to watch for when scoring

- Crediting an average of averages, unweighted by group size.
- Missing when a candidate divides by the "after" value when computing a decrease.
- Rewarding a single accessibility threshold applied to every text size instead of matching each measurement to its own rule.
- Accepting a claim that reports only one of absolute and relative change, without noting which was used or why it matters.
- Missing when a candidate reads a chart's visual impression rather than its labelled values.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how precisely a candidate can determine what a piece of written material establishes. At senior level the material is the writing that governs and justifies design decisions: accessibility regulations, design system governance, brand and identity policy, research reports, and the briefs and agreements negotiated with service managers and programme directors.

The commonest format presents a passage followed by statements to mark True, False, or Cannot Say — True where the passage establishes it, False where it contradicts it, Cannot Say where it does neither, regardless of what a candidate already knows professionally. A candidate's own expertise is the main hazard at this level, since they will frequently know the right answer about accessibility or type while the passage in front of them is silent.

Three things matter particularly: accessibility regulation attaches obligations with precise scope, timing and exemptions, and a misread exemption becomes an organisational position; governance documents allocate authority in language that looks interchangeable and is not — approves, endorses, is consulted, may direct, is informed all describe different arrangements; and research reports describe what was observed with particular participants under particular conditions, and generalising past what a study supports is the commonest way a well-evidenced decision turns out to rest on nothing.

### How this assessment maps to the role

- **Reading accessibility regulation** maps to **Designing for everyone**: advising teams on inclusive and accessible design.
- **Reading governance and authority** maps to **Leading design** and building consensus around an approach.
- **Reading research precisely** maps to **Evidence-based design** and making decisions based on research.
- **Reading strategy and policy** maps to **Designing strategically**.
- **Documenting decisions and risks** maps to **Design communication**: documenting decisions, related risks and unresolved issues.
- **Reading collaboratively** maps to **Designing together**.

### Practice questions

*Passage A — for Questions 1 to 4.* "Public sector bodies must ensure their websites meet accessibility requirements and must publish an accessibility statement. Where meeting a particular requirement would impose a disproportionate burden, a body may rely on that exemption, provided it has carried out and documented an assessment of the burden and has stated the reliance in its accessibility statement. The disproportionate burden exemption does not apply to content that is essential to the use of the service. Pre-recorded time-based media published before 23 September 2020 is exempt. An assessment of disproportionate burden must consider the body's size and resources, the estimated costs and benefits, and the needs of disabled users."

**Question 1 (easy)**

Statement: "A public sector body must publish an accessibility statement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly and unconditionally — the disproportionate burden exemption relates to meeting requirements, not to publishing the statement, and indeed the statement is where reliance on the exemption must be declared, reinforcing rather than reducing the obligation.

**Question 2 (moderate)**

Statement: "A body relying on the disproportionate burden exemption need not document its assessment, provided it declares the reliance in its accessibility statement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption requires the body to have "carried out and documented an assessment of the burden **and** has stated the reliance" — both conditions, conjunctively. This tests treating conjunctive conditions as both required, since in practice this is the difference between a defensible reliance and an indefensible one.

**Question 3 (moderate)**

Statement: "A body can rely on disproportionate burden for a form users must complete to access the service."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The exemption "does not apply to content that is essential to the use of the service," and a form users must complete is essential by definition. This tests catching the most consequential and most often overlooked clause in the passage, since disproportionate burden is usually invoked precisely when something core is expensive to fix.

**Question 4 (harder)**

Statement: "A pre-recorded video published in 2021 is exempt if it is not essential to the service."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The time-based media exemption applies to media published before 23 September 2020; a 2021 publication falls after it, and the statement substitutes a different condition (non-essential) belonging to the disproportionate burden exemption. This tests catching a merger of two separate exemptions into a permission that does not exist — a real-world error, since teams remember both exemptions loosely and combine them.

*Passage B — for Questions 5 to 8.* "The design authority approves changes to the departmental design system. Proposals may be submitted by any team and are considered monthly. The head of design endorses the authority's decisions and may return a decision for reconsideration once, with reasons; a decision returned and reaffirmed stands. Teams may depart from the design system for a specific service where they record the reason and the supporting evidence, and notify the design authority. Departures are reviewed annually. The design authority may add a departed pattern to the design system where it judges the pattern has wider application."

**Question 5 (easy)**

Statement: "Any team can submit a proposal to change the design system."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests noticing that the passage separates submission from approval — anyone may propose, and only the design authority approves — a distinction the later items turn on.

**Question 6 (moderate)**

Statement: "The head of design can overturn a decision of the design authority."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The head of design "endorses" decisions and "may return a decision for reconsideration once, with reasons," and "a decision returned and reaffirmed stands" — a single power of return, not a veto. This tests resisting the natural reading of "endorses" as approval-with-power-to-refuse, when here endorsement is a formal step rather than a gate.

**Question 7 (moderate)**

Statement: "A team departing from the design system needs the design authority's approval."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** A departing team must record the reason and evidence and *notify* the design authority — notification, not approval. This tests distinguishing the two, which matters practically since a team believing it needs approval will wait a month it did not need to.

**Question 8 (harder)**

Statement: "A pattern a team has departed to will be added to the design system if it has wider application."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The design authority "may add" such a pattern "where it judges the pattern has wider application" — two sources of discretion, the permissive "may" and a judgement-based trigger rather than an objective one. This tests catching that the statement's "will" asserts an automatic consequence the passage contradicts by establishing the power as discretionary.

*Passage C — for Questions 9 to 12.* "A study of 48 participants compared two layouts for a benefits eligibility page. Layout A grouped eligibility criteria under sub-headings; layout B presented them as a single list. Participants using layout A answered comprehension questions correctly more often, with 82% correct against 64% for layout B. The difference was statistically significant. Participants were recruited to reflect the service's age profile. The study did not assess time to completion. The research team recommends layout A, noting that the finding is consistent with earlier work on chunking in the same department."

**Question 9 (moderate)**

Statement: "Participants using layout A understood the eligibility criteria better than those using layout B."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage reports 82% against 64% correct on comprehension questions, a statistically significant, direct measure of understanding. This tests confirming the statement's wording matches what was actually measured — a statement about a different outcome would not be True on the same evidence.

**Question 10 (moderate)**

Statement: "Layout A is faster to use than layout B."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly that time to completion was not assessed. This tests treating a study's declared gap as establishing nothing — worth noting that sub-headings could plausibly slow reading while improving comprehension, so the intuitive answer is not even clearly right.

**Question 11 (moderate)**

Statement: "The findings are representative of the service's users."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Participants were recruited to reflect the service's age profile — one dimension of representativeness among several, with nothing established about digital confidence, access needs, first language, or circumstances of use. This tests holding a study's narrower claim apart from a broader one it does not support, relevant whenever a finding is used to justify a decision across a whole service.

**Question 12 (harder)**

Statement: "Earlier work in the department found that chunking improves comprehension."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says the finding "is consistent with earlier work on chunking" — consistency tells the reader the two do not conflict, not what the earlier work actually found. This tests catching a subtle overreach, since "there is a body of evidence" is a much stronger claim to a programme director than "this is consistent with previous work."

### Administration tips

- Score for whether the candidate treats a conjunctive condition ("and", not "or") as requiring both elements.
- Note whether the candidate checks the precise scope, timing, and exemptions of an accessibility or governance clause rather than its general subject.
- Watch for whether the candidate distinguishes notification from approval, and endorsement from a power of veto.
- Score for whether the candidate checks which outcome a study actually measured before drawing a conclusion about a different one.
- Note whether the candidate reads "consistent with earlier work" as compatibility rather than as corroborating evidence.

### Common pitfalls to watch for when scoring

- Crediting one of two conjunctively required conditions treated as sufficient on its own.
- Missing when a candidate applies a disproportionate burden exemption to essential content.
- Rewarding an answer that reads endorsement as a power of refusal.
- Accepting a generalisation of a study's finding beyond the one dimension of representativeness it establishes.
- Missing when a candidate answers from professional knowledge rather than from what the passage actually states.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic scenarios and asks a candidate to identify effective and ineffective responses. At senior level the scenarios involve working with service managers and programme directors, setting direction within teams, mentoring, building consensus where people disagree, and holding accessibility and evidence standards when doing so is inconvenient.

The commonest formats ask for the most and least effective response, or ratings. Scoring is against a key derived from experienced practitioners at comparable levels, so the target is professional consensus.

Three patterns run through the strong answers at this level. A senior designer's influence is largely earned rather than granted — building consensus by asking difficult questions only works if people believe the same difficult questions get asked of the candidate's own work. A senior designer represents users who are not in the room, and when a decision disadvantages people with access needs, silence from the senior designer present is read as professional endorsement. And the role names documenting decisions, related risks and unresolved issues — the last category is the one most often dropped, and the one that matters most, since an unresolved issue nobody wrote down becomes a surprise later, usually to someone junior.

### How this assessment maps to the role

- **Working with senior stakeholders** maps to working with service managers and programme directors to develop design concepts.
- **Building consensus** maps to **Design communication**: challenging assumptions and building agreement.
- **Setting direction** maps to helping set direction and embed good practice within teams.
- **Evidence judgement** maps to **Evidence-based design** and making important decisions based on research.
- **Accessibility advocacy** maps to **Designing for everyone**: advising teams.
- **Mentoring** maps to **Leading design** and influencing others.

### Practice questions

**Question 1 (easy) — A design concept a director likes**

A programme director is enthusiastic about a design concept expected not to work for users. Ask for the most effective response.

- A) Explain why the concept will not work.
- B) Find out what they are responding to in it — the impression it creates, the priority it signals, the problem it seems to solve — and propose how to achieve that in a way that works for users, because the underlying want is usually achievable and this specific concept usually is not.
- C) Test the concept with users and let the findings decide.
- D) Implement it and address problems later.

**Most effective: B. Least effective: D**

**Explanation:** Enthusiasm for a concept is nearly always enthusiasm for a quality it seems to have, and identifying that quality gives the candidate something to build with. This tests keeping the director working towards the same goal rather than opposing them — option D is least effective, implementing something expected to fail and wasting the build.

**Question 2 (easy) — Mentoring through a weak decision**

A junior designer presents work with a layout choice judged poor but clearly thought through. Ask for the most effective response.

- A) Ask what problem the layout was solving and what they considered, then set out the concern with reasons — because they may have a constraint that is not visible, and if they do not, the reasoning is what transfers.
- B) Tell them what to change.
- C) Approve it; it is a matter of judgement.
- D) Change it before it goes further.

**Most effective: A. Least effective: D**

**Explanation:** Option A costs one conversation and buys two things: the possibility the junior designer is right, and a designer who can make the judgement unaided. This tests transferring reasoning rather than only a conclusion — option D is least effective, removing the work, teaching nothing, and signalling that decisions become the mentor's when there is disagreement.

**Question 3 (moderate) — Accessibility against a deadline**

Days before launch, a component is found to fail an accessibility requirement; fixing it properly means redesigning it. Ask for the most effective response.

- A) Launch and fix in the next release.
- B) State the failure and what it means for affected users in plain terms, and put the options to the service manager — launching without the component, launching with a simpler accessible version, or delaying — because it is their decision and it needs to be made knowingly.
- C) Refuse to sign off the design.
- D) Apply a quick visual fix that improves the contrast.

**Most effective: B. Least effective: A**

**Explanation:** The launch date belongs to the service manager and the consequence belongs to users, so the candidate's job is ensuring the decision is made by the right person with the right information, including a middle route usually available and usually overlooked under pressure. Option A is least effective, launching a known barrier, and next-release accessibility fixes have a poor record.

**Question 4 (moderate) — Research that undercuts a decision already made**

New research suggests a design direction committed to three months ago is not working; rework would be significant. Ask for the most effective response.

- A) Present the finding and what it means, including the cost of changing course and the cost of not, and let the decision be made explicitly with both in view.
- B) Present the finding and recommend the rework.
- C) Note the finding and continue; the direction is committed.
- D) Ask for further research before raising it.

**Most effective: A. Least effective: C**

**Explanation:** Option A frames the finding as a live choice rather than an accusation about a past decision, making it possible for people to change course without loss of face. Option C is least effective — suppressing evidence because a decision is committed is how services ship things their own research said would not work.

**Question 5 (moderate) — Disagreement between two teams**

Two teams in the same programme have adopted different visual treatments for the same type of content, and both defend their choice. Ask for the most effective response.

- A) Get both teams together and focus on what each treatment is trying to achieve and what the user encountering both would experience — because two teams defending positions usually have two different requirements that were never compared, and the inconsistency is a user problem regardless of which is better.
- B) Decide which treatment is better and require both to use it.
- C) Let each team keep its own; both work.
- D) Escalate to the programme director.

**Most effective: A. Least effective: C**

**Explanation:** Moving parties from positions to requirements, and naming the user experience neither team sees from inside their own part of the service, resolves this. Option C is least effective, accepting a permanent user-facing inconsistency to avoid a conversation.

**Question 6 (moderate) — A brand constraint that harms usability**

A communications team requires a typeface that reduces legibility at the sizes the service needs. Ask for the most effective response.

- A) Establish where the constraint actually binds — whether it applies to all text or only headings and identity elements — and propose a split that keeps the brand visible where it matters and uses a legible face for body content.
- B) Use the typeface as required.
- C) Explain that the typeface harms legibility and decline to use it.
- D) Use a different typeface and explain afterwards.

**Most effective: A. Least effective: D**

**Explanation:** Brand requirements are usually less absolute than stated, and this identity-in-brand-face/body-in-legible-face split is a common enough resolution to propose before treating the constraint as binding. Option D is least effective — substituting a typeface unilaterally, discovered later, damages a relationship the candidate needs.

**Question 7 (harder) — Documenting an unresolved issue**

A design is going into build with one issue unresolved — a pattern the candidate is not confident works for screen magnification users. Ask for the most effective response.

- A) Record it explicitly as an unresolved issue with what is known, what is not, and what would resolve it, and make sure the team and the service manager have seen it.
- B) Raise it verbally with the developers.
- C) Leave it; it may not be a problem.
- D) Record it in personal notes for later.

**Most effective: A. Least effective: C**

**Explanation:** Documenting decisions, related risks, and unresolved issues means precisely this — the record survives the candidate and reaches testing or an accessibility statement if it turns out to be real. Option C is least effective; an unrecorded doubt about an access need is exactly the kind of thing that becomes a finding later.

**Question 8 (harder) — Being asked to endorse a claim**

A service manager asks for confirmation that the service's design meets accessibility standards, for a published accessibility statement; the team has tested some things and not others. Ask for the most effective response.

- A) Confirm it; the testing found no problems.
- B) Say precisely what has been tested, against what standard, with what tools, and what has not been covered — particularly testing with disabled users — because an accessibility statement is a published legal document and an unqualified confirmation is one that cannot be supported.
- C) Say it meets WCAG 2.2 AA.
- D) Decline to confirm.

**Most effective: B. Least effective: A**

**Explanation:** An accessibility statement needs an accurate picture, including the largest gap — testing with actual disabled users. Option A is least effective, converting partial testing into an organisational legal claim.

**Question 9 (harder) — Evidence against your own recommendation**

Data suggests a design direction advocated a year ago is performing worse than the pattern it replaced. Ask for the most effective response.

- A) Raise it, including that it was the candidate's own recommendation, and propose how to establish whether the direction caused the difference.
- B) Examine the data carefully first; correlation is not causation.
- C) Investigate quietly and act if it holds up.
- D) Note it alongside the other benefits of the direction.

**Most effective: A. Least effective: D**

**Explanation:** Raising it openly and analysing it in the open is what makes a candidate's challenges to other people's work credible — option B is methodologically correct and, if it substitutes for raising it, indistinguishable from defensiveness. Option D is least effective, changing the subject to offsetting benefits, which once noticed discounts everything said afterwards.

**Question 10 (harder) — Setting direction for a team**

A candidate is asked to embed better design practice in a team that has been working without much design input. Ask for the most effective approach.

- A) Establish what is currently hard for them and start where the practice would remove a pain they already feel — because practice adopted to solve a felt problem sticks, and practice introduced as a standard to comply with is followed only while being watched.
- B) Introduce the design system and a set of standards.
- C) Run a series of training sessions.
- D) Review their work and give feedback.

**Most effective: A. Least effective: B**

**Explanation:** Starting from a felt problem makes the new practice something the team wants, and shows which practices matter in this specific context. Option B is least effective as an opening move — arriving with a system and standards for a team that did not ask reads as compliance work.

**Question 11 (harder) — Consensus you cannot reach**

After several discussions, a service manager and a content designer remain in genuine disagreement about a design approach, and the work is blocked. Ask for the most effective response.

- A) Establish what each would accept and what evidence would change their view, and if the disagreement is empirical, propose the smallest test that would settle it — because a blocked decision usually means two people optimising for different things without having said so.
- B) Make the decision.
- C) Escalate to the programme director.
- D) Propose a compromise that combines both approaches.

**Most effective: A. Least effective: D**

**Explanation:** Most stalled design disagreements concern unstated, different priorities, and naming those usually resolves it; where the difference is empirical, a small test settles it. Option D is least effective — a combined approach typically acquires the weaknesses of both and the coherence of neither.

**Question 12 (harder) — Speaking about the work externally**

A candidate is asked to present the service's design work at a cross-government event; some went well, one significant part was abandoned. Ask for the most effective approach.

- A) Present all of it, and be specific about why the abandoned part did not work, because the failure is the part the audience can learn from and the candidate's own team will hear whether the account was honest.
- B) Present the successful work.
- C) Present the successes and mention challenges generally.
- D) Decline; the picture is mixed.

**Most effective: A. Least effective: C**

**Explanation:** Successes transfer poorly between contexts and failures are instructive, so the abandoned work is disproportionately useful material, and the candidate's own team will know immediately whether the account was honest. Option C is least effective, vague reference to "challenges" reading as evasion to practitioners who know the specifics.

### Administration tips

- Score for whether the candidate finds the want behind a stakeholder's stated position rather than opposing the position directly.
- Note whether the candidate puts a decision to the person who owns it, with the options clearly stated, rather than making it unilaterally or withholding it.
- Watch for whether an unresolved issue is documented with what is known, what is not, and what would resolve it.
- Score for whether the candidate raises contrary evidence about their own past recommendation openly, rather than investigating it quietly or omitting it.
- Note whether the candidate moves a stalled disagreement from positions to underlying requirements rather than proposing a compromise that combines both.

### Common pitfalls to watch for when scoring

- Crediting a response that builds or implements something already expected to fail.
- Missing when a candidate changes a junior colleague's work rather than reviewing it with them.
- Rewarding a cosmetic fix applied to a genuine accessibility failure.
- Accepting an unqualified confirmation of accessibility compliance where testing was only partial.
- Missing when a candidate proposes combining two approaches to settle a disagreement, rather than establishing the underlying requirements first.

## Conclusion

This guide has worked through pattern recognition and dependency reasoning across design systems, colour tokens, and component audits; the arithmetic that supports a design argument — weighted averages, contrast thresholds, and the recurring point that a percentage of a government service is a number of people, which is far more persuasive to a programme director than a percentage alone; the discipline of reading precisely the documents that constrain and justify design work, especially conjunctive conditions, the distinction between notification and approval, and "consistent with earlier work" as compatibility rather than corroboration; and the situational judgement that defines a strong senior graphic designer — finding the want behind a stakeholder's position, putting decisions to the person who owns them, documenting unresolved issues so they survive the conversation, and raising contrary evidence about a candidate's own past recommendations before anyone else does.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several items reward the quality of reasoning as much as the final choice, particularly in the situational judgement section, where the strongest answers rest on credibility earned by applying the same scrutiny to the candidate's own work. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
