# Associate Interaction Designer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for associate interaction designer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the everyday thinking a particular job actually uses. For an associate interaction designer that means checking a screen against a pattern and spotting where it diverges, noticing that a form asks two questions in one field, working out what a set of numbers about a page is really telling you, reading a design standard carefully and applying it, and making sensible decisions when something in a critique or a build conversation goes sideways.

An associate interaction designer is a trainee in an entry-level position, working under supervision, expected to show design aptitude, potential and an understanding of the role. Nobody at this level is expected to have designed a complex journey or created a new pattern for the Design System — what is being tested is exactly what the role summary names: aptitude, potential, and understanding. Every rule, definition and figure needed appears inside the question; nothing needs to be memorised.

Interaction design operates at two scales at once: the overall flow — what order the questions come in, when to split a page, what happens when someone goes back — and individual elements — the label on a field, the wording of an error, whether something should be a radio group or a checkbox. Moving fluently between those two scales, and noticing when a decision at one level breaks something at the other, is a large part of the craft, and a surprising amount of what this material measures is exactly that habit.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and verbal items for whether the candidate concludes only what a stated rule or set of facts guarantees, resisting a plausible-but-unproven answer, and for whether raw counts are converted to rates before comparing groups of different sizes. Situational judgement items at this level consistently reward a response that acts within remit and is transparent at its edges — attempting what can competently be done and promptly telling the right person about what cannot — over either silent struggling or reflexive escalation.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the thinking this role genuinely demands, using practical workplace materials rather than abstract shapes and sequences — a page against a pattern, a set of form fields, an error message, a component's behaviour, a short extract from a design standard, a list of research observations.

Typical format: an online test lasting 15 to 30 minutes, with questions clustering into pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a similar level, often adaptive, with speed and accuracy reported separately.

For an associate interaction designer, so much of the early value of the role comes from noticing — that a page uses a pattern in a way it was not designed for, that a date field will reject the format most people type, that an error message says what went wrong but not what to do about it, that tabbing through a page reaches the submit button before the last question, that two screens in the same service handle the same choice in two different ways. Each is a small act of comparison or deduction, and each protects the quality of the thing users eventually meet.

### How this assessment maps to the role

- **Pattern recognition** maps to **Designing strategically**: explaining the value of using patterns and components — recognising when something follows an established pattern, and when it quietly departs from one.
- **Error checking** maps to **Designing for everyone**: describing different access needs and ways to meet them. Spotting that an interaction excludes somebody is error checking with a human consequence.
- **Logical deduction** maps to **Evidence-based design**: framing ideas as design hypotheses to be tested, which means knowing exactly what evidence supports.
- **Prioritisation** maps to **Iterative design**: understanding how iteration supports user-centred design.
- **Applied problem solving** maps to **Iterative design** and **Designing together**.
- **Explaining reasoning** maps to **Design communication**: articulating design decisions.

### Practice questions

**Question 1 (easy) — Error checking against a pattern**

A "question page" pattern rule: each page must ask one thing, have a label that is a question, include a back link, and have a single primary action. Four pages: Page 1 — 1 question, question label, back link, 1 primary action; Page 2 — 2 questions, question label, back link, 1 primary action; Page 3 — 1 question, statement label, back link, 1 primary action; Page 4 — 1 question, question label, no back link, 2 primary actions. Ask how many pages break at least one rule.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** Page 1 satisfies everything; Page 2 asks two things (one breach); Page 3 uses a statement label (one breach); Page 4 has no back link and two primary actions (two breaches). Three pages break at least one rule. This tests distinguishing how many pages break a rule from how many rule breaches occurred — the question asks about pages, not the four total breaches (the trap in D), and a strong candidate's answer would note that "three pages need fixing" and "four things are wrong" prompt different conversations when handing over the list.

**Question 2 (easy) — Logical deduction from a build rule**

Rule: "A component may be used in a service only if it is in the Design System, unless it has been reviewed and approved by the lead interaction designer." A developer reports: "We shipped a component last week that is not in the Design System." Ask which conclusion must be true.

- A) The team broke the rule.
- B) The component was reviewed and approved by the lead interaction designer.
- C) Either the component was reviewed and approved, or the rule was broken.
- D) The component is badly designed.

**Correct answer: C**

**Explanation:** The rule is conditional with one permitted exception, and the given facts do not establish whether it applies. This tests deducing only what the facts guarantee — option D introduces an unsupported quality judgement, since a component outside the Design System may be perfectly well made and sometimes has to exist because no pattern covers the need.

**Question 3 (easy) — Pattern recognition across observations**

Six usability sessions on the same form. Participants hesitated over ten seconds at: P1 — date of birth; P2 — date of birth, national insurance number; P3 — address; P4 — date of birth; P5 — date of birth, address; P6 — national insurance number. Ask which field shows the clearest pattern of difficulty.

- A) Date of birth
- B) National insurance number
- C) Address
- D) No clear pattern

**Correct answer: A**

**Explanation:** Date of birth affected four of six participants (P1, P2, P4, P5); the other two fields affected two each. This tests counting participants affected rather than mentions, and, in a strong candidate's answer, recognising that spotting a pattern is not the same as explaining it — date of birth hesitation commonly stems from format ambiguity, split inputs, or uncertainty about whose date is being asked for, each implying a different fix.

**Question 4 (easy) — Prioritisation in a design week**

Monday morning, four items: (1) a live page's error message tells users their application has failed when it has actually been saved, and people may be re-submitting today; (2) a senior designer asked for wireframes by Wednesday; (3) an 11:00 design critique needing a prepared prototype; (4) a newsletter about the cross-government design community. Ask what should happen first.

- A) Start the wireframes while the morning is quiet.
- B) Raise or fix the misleading error message on the live page.
- C) Get the prototype ready for 11:00.
- D) Read the newsletter.

**Correct answer: B**

**Explanation:** A misleading error message causing duplicate submissions and wasted user effort is happening today, outranking everything else. This tests weighing impact and urgency together — harm to users outranks internal commitments, and internal commitments outrank nice-to-haves — and, in a strong candidate's answer, noting that at this level the right first action may be alerting a senior designer or content designer rather than fixing it alone, but either way it comes first.

**Question 5 (easy) — Error checking against instructions**

A senior designer requested exactly three changes: (i) split the "name and date of birth" page into two, (ii) change page 3's "Continue" button to "Save and continue", (iii) add a back link to page 5. The returned prototype shows all three changes plus an increased font size throughout. Ask how many of the changes made were requested.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** Three requested changes were made; the font size change was extra. This tests distinguishing what was requested from what was done — delivering exactly what was agreed and flagging anything else is the discipline, since an unrequested change can look like an improvement while quietly breaking a prototype's correspondence to the real service, which is what makes testing against it valid.

**Question 6 (moderate) — Deduction about a component's behaviour**

Specification: "Radio buttons must be used when the user may choose exactly one option. Checkboxes must be used when the user may choose any number of options, including none. Where the user must choose at least one option but may choose several, use checkboxes with a validation rule." A designer used radio buttons for a question where a user may select several allergies. Ask which conclusion must be true.

- A) Checkboxes should have been used.
- B) The design breaks the specification.
- C) Both A and B.
- D) The design is acceptable if the list is short.

**Correct answer: C**

**Explanation:** Selecting several allergies means more than one option may be chosen, so radio buttons are the wrong control and checkboxes should have been used — both A and B follow. This tests reading a specification's actual condition (how many options may be selected) rather than an invented one (list length, the trap in D) — and, worse than a style breach, radio buttons here would make it impossible for someone with two allergies to answer truthfully.

**Question 7 (moderate) — Pattern recognition across devices**

Completion by device: Desktop 3,600/4,000; Tablet 440/500; Mobile 3,300/5,500. Ask which device most clearly needs design attention, and why.

- A) Desktop, because it has the most users.
- B) Mobile, because its completion rate of 60% is far below the others and it also has the largest number of users failing.
- C) Tablet, because it has the fewest users.
- D) None; the overall rate is acceptable.

**Correct answer: B**

**Explanation:** Desktop and tablet both complete around 85–90%; mobile completes 60%. This tests converting to rates before comparing, and, in a strong candidate's answer, noticing mobile scores worst on both the rate and the absolute count (2,200 lost against desktop's 400) — a combination that makes the case unambiguous, since the two measures do not always agree and a low rate on a small channel is an inclusion signal while a moderate rate on a large one is a volume problem.

**Question 8 (moderate) — Error checking an error message**

Standard: an error message must say what went wrong, say what to do about it, be in plain language, and appear both at the top of the page and next to the field. Reviewed message, shown only next to the field: "Error: invalid input in field DOB_1." Ask how many parts of the standard it breaks.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** It arguably states something is wrong (met, minimally); it does not say what to do (fails); it is not plain language and exposes an internal field name (fails); it appears only next to the field, not at the top (fails). Three broken. This tests checking each requirement in turn — and, in a strong candidate's answer, knowing why the top-of-page summary matters: someone using a screen reader may not encounter an inline message at all unless focus is moved deliberately.

**Question 9 (moderate) — Applied problem solving in a critique**

In a design critique, two senior colleagues debate a button's visual weight for fifteen minutes; the most junior person present has noticed the page asks for information the service already holds. Ask for the most sensible thing to do.

- A) Say nothing; the seniors will get to it.
- B) Wait for a pause and raise the observation as a question — "can I check something? I think we already hold the reference number we're asking for on this page" — bringing the room to a more consequential problem without criticising the discussion.
- C) Interrupt to say the button debate is a waste of time.
- D) Mention it to your senior designer afterwards.

**Correct answer: B**

**Explanation:** This tests raising a more consequential observation at a natural pause, phrased as a specific fact and a question rather than a challenge, making it easy for the room to engage. Option A wastes the observation and lets the critique conclude on a page with a real defect; option D misses the moment when the page is actually under review.

**Question 10 (moderate) — Deduction about what evidence supports**

In research with eight participants, six struggled with a "reference number" field because they were unsure which of two numbers on their letter to enter. Ask which conclusion is best supported by this evidence alone.

- A) 75% of users cannot find their reference number.
- B) The field should be removed.
- C) Six of eight participants were unsure which number to enter, which is a strong signal that the field's label and hint need to identify the number unambiguously — ideally by referring to where it appears on the letter.
- D) The letter is badly designed.

**Correct answer: C**

**Explanation:** Six of eight is a strong qualitative signal, stated at that strength and pointing at the mechanism the evidence actually identified — not that participants could not find a number, but that they were unsure which one. This tests stating evidence at its actual strength — option A converts a sample into a population rate, and option D goes beyond what this evidence establishes, though a strong candidate's answer would note it is worth raising anyway since the letter and screen are two halves of one journey.

**Question 11 (harder) — Prioritisation with competing pressures**

Senior designer away; at 10:00: (1) a developer needs a decision on validation error behaviour to finish a story today; (2) a 14:00 critique with a prototype not ready; (3) a content designer needs confirmation of field labels by 12:00 to publish guidance; (4) a colleague's prototype needs review this week. Ask for the most sensible order.

- A) 2, 3, 1, 4 — your own commitments first.
- B) 1, 3, 2, 4 — unblock the developer, then the content designer, then your own prototype, then the review.
- C) 3, 1, 2, 4 — deadlines in time order.
- D) 1, 2, 3, 4 — as listed.

**Correct answer: B**

**Explanation:** Item 1 blocks another person's work today and is probably a five-minute conversation — leaving a developer to guess at validation behaviour risks inconsistent error handling being built in; item 3 has a hard 12:00 deadline and also blocks somebody; item 2 can absorb the earlier interruptions. This tests ranking by consequence and deadline together, rather than by ownership (A, the classic trap since a candidate's own deadlines feel most pressing precisely because they are theirs) or strict time order alone (C, which places a 12:00 deadline behind a five-minute unblocking task).

**Question 12 (harder) — Applied problem solving about accessibility**

A designer proposes replacing a set of six radio buttons with a custom filtering dropdown, arguing it looks cleaner and is faster for people who know what they want; the service is used by a wide public audience. Ask for the strongest analysis.

- A) The dropdown is better because it is faster for people who know the answer.
- B) A custom filtering dropdown adds a control that must work with keyboard alone, with screen readers, with voice input and with high zoom — and a six-option list gains almost nothing from filtering, so the change swaps a simple, well-supported control for a complex one, adding accessibility risk and development cost for a marginal gain.
- C) The dropdown is fine if it is tested with screen reader users.
- D) Radio buttons should always be used.

**Correct answer: B**

**Explanation:** Filtering earns its complexity when a list is long enough that scanning it is genuinely burdensome; with six options everything is visible at once and filtering saves nobody meaningful effort, while a custom component must be built and maintained to work across keyboard, assistive technology, voice control and zoom. This tests weighing both sides and naming the mechanism — option A weighs one group's marginal convenience against another group's ability to use the service at all, and option C treats testing as a substitute for the design decision rather than a check on it.

### Administration tips

- Score for whether the candidate checks every stated rule against every item precisely, rather than stopping at the first fault found.
- Note whether the candidate deduces only what given facts guarantee, resisting a plausible but unproven conclusion.
- Watch for whether the candidate converts raw counts to rates before comparing groups of different sizes (participants, devices).
- Score for whether the candidate distinguishes a count of failing items from a count of failing requirements.
- Note whether the candidate reads a specification's stated condition precisely rather than substituting an invented one.

### Common pitfalls to watch for when scoring

- Crediting an answer that stops at the first problem found rather than completing a full count.
- Missing when a candidate counts mentions instead of participants affected.
- Rewarding a comparison of raw counts across groups of different sizes.
- Accepting "could be true" as though it were "must be true" in a deduction item.
- Missing when a candidate ranks prioritisation by ownership rather than by consequence and deadline.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how well a candidate works with the numbers this role produces. Not a maths exam — no equations to solve, calculator usually provided, and where one is not the arithmetic is deliberately simple. What is measured is whether a candidate reads a table correctly, picks the right numbers out of a cluttered display, chooses the right operation, and interprets the result sensibly.

Typical format: a timed online test of 15 to 30 minutes, each item showing a small table, chart, or paragraph of figures followed by a multiple-choice question, time per item often around a minute. Test designers routinely include figures that are not needed, specifically to see whether a candidate can tell the difference.

Interaction design is full of numbers even though it is not a quantitative discipline — how many people trigger a validation error, completion on mobile against desktop, how many reach a page and how many leave, whether a change made a difference, how many people a decision affects. At associate level the content is deliberately modest: percentages, fractions, proportions, simple averages, ratios, and reading values from tables.

### How this assessment maps to the role

- **Reading tables accurately** maps to **Evidence-based design**: identifying common sources and types of data. Error rates, device splits, and page analytics all arrive as tables.
- **Percentages and proportions** map to **Designing for everyone**: comparing completion between devices or user groups is how exclusion becomes visible in numbers.
- **Measuring change** maps to **Iterative design**: an iteration that has not been measured is a change, not an improvement.
- **Understanding scale** maps to **Designing strategically**: knowing how many people a decision affects.
- **Interpreting figures cautiously** maps to **Design communication**: a decision justified by a misread number is hard to defend twice.
- **Spotting an implausible figure** maps to **Evidence-based design**: framing hypotheses well starts with trusting the right data.

### Practice questions

**Question 1 (easy) — Error rate on a field**

Of 2,000 users who reached a page, 500 triggered a validation error on the date field. Ask for the percentage.

- A) 20%
- B) 25%
- C) 30%
- D) 40%

**Correct answer: B**

**Explanation:** 500÷2,000=25%. This tests basic percentage calculation, checkable by estimating a quarter first, since 1,000 would be half.

**Question 2 (easy) — Drop-off between pages**

A page is reached by 3,000 users; 2,400 continue past it. Ask how many drop off, and what percentage of those reaching the page that is.

- A) 600 users, 20%
- B) 600 users, 25%
- C) 2,400 users, 80%
- D) 600 users, 24%

**Correct answer: A**

**Explanation:** Drop-off is 3,000−2,400=600; as a proportion of those who reached the page, 600÷3,000=20%. This tests measuring drop-off against the number who arrived, not the number who continued (the denominator error in option B, using 2,400) — reporting 25% instead of 20% describes the page as worse than it is, and makes any comparison against a differently-computed figure meaningless.

**Question 3 (easy) — Reading a device table**

Completion: Desktop 4,250/5,000; Mobile 4,800/8,000; Tablet 850/1,000. Ask which device has a completion rate of exactly 60%.

- A) Desktop
- B) Mobile
- C) Tablet
- D) None

**Correct answer: B**

**Explanation:** Mobile is 4,800÷8,000=60% (desktop and tablet are both 85%). This tests reading a table efficiently — a faster route with round totals is asking what 60% of each total would be — and, in a strong candidate's answer, noticing desktop and tablet perform identically while mobile sits 25 points below, pointing at something specific to small screens.

**Question 4 (easy) — Average time on a task**

Five participants took 40, 55, 45, 60, 50 seconds to complete a task. Ask for the mean.

- A) 48 seconds
- B) 50 seconds
- C) 52 seconds
- D) 55 seconds

**Correct answer: B**

**Explanation:** Sum 250÷5=50. This tests basic averaging, checkable with a shortcut from a round guess — differences from 50 are −10, +5, −5, +10, 0, summing to zero, confirming the mean.

**Question 5 (easy) — Scale of a decision**

600,000 form submissions a year; a field is currently completed incorrectly by 3% of users, each needing to correct it. Ask how many corrections a year removing the problem would avoid.

- A) 1,800
- B) 18,000
- C) 20,000
- D) 180,000

**Correct answer: B**

**Explanation:** 0.03×600,000=18,000. This tests converting a percentage into a number of affected people — "3% of users" sounds like a rounding error, while "18,000 people a year having to correct this field" does not, and converting between the two is one of the most effective moves available when arguing for a small fix.

**Question 6 (moderate) — Comparing groups fairly**

Of 400 users on desktop, 340 completed a form. Of 250 on mobile, 100 completed. Ask which statement is correct.

- A) Both groups completed at similar rates.
- B) The rate was 85% on desktop and 40% on mobile.
- C) Desktop completed 240 more forms, so the difference is modest.
- D) The groups cannot be compared because they are different sizes.

**Correct answer: B**

**Explanation:** 340÷400=85%; 100÷250=40%. This tests converting to rates before comparing groups of different sizes — option D wrongly claims incomparability when converting to rates is precisely the correct method, and a 45-point gap this large would justify investigating what mobile users cannot get past.

**Question 7 (moderate) — Percentage change**

After a hint text change, weekly validation errors on a field fell from 900 to 675. Ask for the percentage decrease.

- A) 22%
- B) 25%
- C) 33%
- D) 75%

**Correct answer: B**

**Explanation:** (900−675)÷900=25%. This tests dividing by the original value, not the new one — option C divides by 675, the commonest error, which overstates every improvement described this way.

**Question 8 (moderate) — Working back to a total**

15% of users abandon a service at the address page, equal to 4,500 people a month. Ask how many reach the address page each month.

- A) 5,175
- B) 6,750
- C) 30,000
- D) 67,500

**Correct answer: C**

**Explanation:** 4,500÷0.15=30,000. This tests working back from a percentage and a count to the base, verifiable by reversing the calculation — establishing the base in ten seconds is what lets a candidate judge whether a quoted figure deserves the weight it is being given.

**Question 9 (moderate) — Ratio in device usage**

Traffic splits mobile:desktop in a 3:2 ratio; 45,000 visits a month. Ask how many are on desktop.

- A) 15,000
- B) 18,000
- C) 22,500
- D) 27,000

**Correct answer: B**

**Explanation:** 5 shares of 9,000 each; desktop takes 2 shares = 18,000 (mobile takes 3 = 27,000). This tests writing down what each share represents before calculating — option D answers the wrong half of the split, the trap for a candidate who calculates correctly and reads the question carelessly.

**Question 10 (moderate) — Choosing the right denominator**

Journey: 12,000 start, 9,600 pass eligibility, 7,200 reach the declaration, 6,480 submit. Ask what percentage of those reaching the declaration went on to submit.

- A) 54%
- B) 68%
- C) 75%
- D) 90%

**Correct answer: D**

**Explanation:** 6,480÷7,200=90%. This tests identifying the group the question names as the denominator — option A uses 12,000, answering a whole-journey question nobody asked, and the real losses here are 2,400 at eligibility and 2,400 between eligibility and declaration, against 720 at submission.

**Question 11 (harder) — Percentage points versus percentages**

Before a change, 40% of users completed a page without an error; afterwards, 52% did. Ask which statement is accurate.

- A) Error-free completion rose by 12%.
- B) Error-free completion rose by 12 percentage points, which is a 30% increase.
- C) Error-free completion rose by 30 percentage points.
- D) Error-free completion rose by 23%.

**Correct answer: B**

**Explanation:** 52−40=12 points; 12÷40=30% relative. This tests correctly labelling both figures — "rose 30%" and "rose 12 percentage points" describe the identical change, with the first sounding two and a half times more impressive, and being precise about which is meant is part of explaining a design decision honestly.

**Question 12 (harder) — When an average hides something**

Seven users' times to find a link, in seconds: 4, 5, 6, 6, 8, 9, 91. A colleague reports "the average was 18 seconds." Ask for the best comment.

- A) The calculation is wrong; the average is 6 seconds.
- B) The calculation is right, but the mean is misleading: six of seven users found the link within nine seconds and one extreme case is pulling the figure up. Report the median of 6 seconds with the range, and describe the 91-second case separately.
- C) The figure is fine as reported.
- D) The 91-second case should be excluded as an anomaly.

**Correct answer: B**

**Explanation:** 129÷7=18.4, arithmetically correct but describing no actual user, since six finished within nine seconds and one took 91. This tests recognising an outlier skewing a mean and reporting the median instead — and, in a strong answer, treating the outlier as the most interesting finding rather than excluding it (D, the most damaging option), since it likely marks a genuine defect the other six worked around.

### Administration tips

- Score for whether the candidate reads a numeric threshold or figure precisely rather than rounding toward a convenient answer.
- Note whether the candidate measures drop-off against the correct denominator (those who arrived, not those who continued).
- Watch for whether the candidate converts raw counts to rates before comparing groups of different sizes.
- Score for whether the candidate distinguishes percentage points from a relative percentage change.
- Note whether a mean skewed by an outlier is recognised and reported alongside or replaced by a more representative statistic.

### Common pitfalls to watch for when scoring

- Crediting a drop-off or completion rate calculated against the wrong denominator.
- Missing when a candidate stops after the first stage of a two-part calculation.
- Rewarding a comparison of raw counts across groups of different sizes rather than rates.
- Accepting "percentage" and "percentage points" used interchangeably without distinguishing them.
- Missing when a candidate excludes an outlier rather than reporting and investigating it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. Interaction design is a role that runs on documents — design standards, accessibility criteria, component specifications, content guidance, policy summaries, and the words users say. Getting any of those slightly wrong changes what gets built.

The classic format presents a short passage followed by statements to classify as True, False or Cannot Say — regardless of what a candidate otherwise knows. Cannot Say deserves particular attention because candidates avoid it, reaching for True or False to seem decisive when the honest answer is that the passage does not settle it. Small words carry the meaning — "all" is not "most," "may" is not "must," "should" is not "will" — a distinction that matters more in this discipline than most, since accessibility criteria and component specifications are written with unusual precision, and a great deal of poor practice comes from remembering the gist rather than the wording.

### How this assessment maps to the role

- **Reading precisely** maps to **Designing for everyone**: accessibility requirements are written documents.
- **Distinguishing statement from inference** maps to **Evidence-based design**: framing ideas as hypotheses.
- **Identifying the main point** maps to **Design communication**: explaining design decisions.
- **Understanding qualified language** maps to **Designing strategically**: knowing whether a pattern is mandatory or recommended.
- **Reading for what is absent** maps to **Designing for everyone**: noticing a specification never mentions keyboard operation has a direct consequence.
- **Following written direction exactly** maps to **Designing together**: feedback only works if understood as given.

### Practice questions

*Passage A — for Questions 1 to 4.* "All new public-facing services must use components from the Design System where a suitable component exists. Where no suitable component exists, teams may create a new one, provided it is documented and shared with the cross-government community. New components must be tested with assistive technology before use in a live service. Teams are encouraged, but not required, to contribute new components back to the Design System itself."

**Question 1 (easy)**

Statement: "New components must be tested with assistive technology before live use."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly in the third sentence. This tests the baseline reading, answerable quickly.

**Question 2 (easy)**

Statement: "Teams must contribute new components back to the Design System."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says teams are "encouraged, but not required" to contribute back — the statement's "must" contradicts this. This tests distinguishing two different obligations to two different destinations: a hard requirement to document and share, and a soft encouragement to contribute back — conflating them produces the wrong answer here and, in practice, a promise nobody asked for.

**Question 3 (moderate)**

Statement: "A team that creates a new component without documenting it has breached the requirements."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The permission to create a new component is conditional on documenting and sharing it; failing that condition means the permission does not apply. This tests distinguishing an explicit exemption (Question 2's False) from a conditional permission (where failing the condition is a breach, giving True here).

**Question 4 (moderate)**

Statement: "A service may use a component that is not in the Design System."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Design System components are required only "where a suitable component exists," and the passage expressly permits creating a new one otherwise, subject to conditions. This tests reading to the end of a provision — marking this False by reading the first sentence as a blanket requirement is exactly the error the passage's structure is testing.

*Passage B — for Questions 5 to 8.* "The review of the application form found that users on mobile devices completed more slowly than users on desktop and were more likely to abandon at the upload step. The review notes that mobile users differed from desktop users in several respects, including age and whether they were completing the form at home. The review did not assess the quality of completed applications. It recommends that the team consider whether a redesigned upload step would reduce mobile abandonment."

**Question 5 (easy)**

Statement: "Mobile users were more likely to abandon at the upload step than desktop users."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, respecting the passage's comparative framing ("more likely" rather than "usually"). A statement claiming mobile users usually abandon would overstate the passage and be Cannot Say.

**Question 6 (moderate)**

Statement: "The mobile interface causes users to abandon at the upload step."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage names two confounds (age, completing at home) that could equally explain the gap — someone away from home is less likely to have documents to hand, producing abandonment regardless of interface quality. This tests treating declared confounds as a warning against inferring causation — the design consequence differs entirely depending on the actual cause.

**Question 7 (moderate)**

Statement: "The redesigned upload step will reduce mobile abandonment."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The review recommends only that the team "consider whether" a redesign would help — a recommendation to evaluate, not a prediction of effect, and no redesign has happened. This tests distinguishing "consider whether X" from a firm recommendation to act, a phrase that recurs constantly in real review documents.

**Question 8 (harder)**

Statement: "Applications submitted on mobile are of lower quality."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states explicitly that quality was not assessed. This tests treating declared silence as establishing nothing in either direction — inferring lower quality from slower completion and more abandonment is exactly the overreach this item is built to catch, and could plausibly run the other way.

*Passage C — for Questions 9 to 12.* "Interactive components must be operable using a keyboard alone. Where a component uses a non-standard interaction, the team must provide a documented keyboard alternative. Focus order must follow the visual reading order of the page. Where a component displays an error, the error must be programmatically associated with the field it relates to; a visual association alone is not sufficient."

**Question 9 (easy)**

Statement: "Interactive components must work with a keyboard alone."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests the baseline reading — worth internalising beyond the test, since keyboard operability is the requirement most often broken by custom components built from generic elements with click handlers.

**Question 10 (moderate)**

Statement: "A visual association between an error and its field is sufficient."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states directly that a visual association alone is not sufficient. This tests catching a load-bearing word — "programmatically" — since a message placed visually next to a field is obvious to a sighted user and may be invisible to someone using a screen reader who encounters fields in markup order.

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
- B) Components must be operable and comprehensible without a mouse or sight — through keyboard operation, a focus order matching the visual order, documented alternatives where interactions are unusual, and errors associated in code rather than only visually.
- C) Focus order must follow visual reading order.
- D) Errors must be programmatically associated with their fields.

**Correct answer: B**

**Explanation:** This tests identifying a summary broad enough to cover every requirement without inventing anything — A overstates a conditional requirement into a prohibition, and C and D are each true of one sentence and silent on the rest.

### Administration tips

- Score for whether the candidate reads to the end of a passage before concluding what a provision requires, rather than stopping at an early sentence.
- Note whether the candidate distinguishes an explicit exemption ("not required") from a conditional permission (failing the condition is a breach).
- Watch for whether declared confounds are treated as a genuine limit on what can be concluded about causation.
- Score for whether the candidate distinguishes a condition ("where X, do Y") from a prohibition.
- Note whether a main-point item is answered with a summary covering the whole passage rather than one true detail promoted above the rest.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of the candidate's own knowledge rather than the passage.
- Missing when a candidate reads "encouraged" as "required," or a condition as a prohibition.
- Rewarding an association read as causation despite a declared confound in the passage.
- Accepting "consider whether X" read as "recommends X."
- Missing when a candidate selects a true-but-narrow detail as the main point rather than a summary covering the whole passage.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what a candidate would do. There is no passage to decode and no arithmetic — a dilemma of the kind this role produces, four or five possible responses, and a question asking which is most effective and often which is least.

This section measures judgement rather than knowledge, and specifically whether a candidate's instincts align with what the profession considers good practice at this level — the same scenario has different best answers for a trainee and for a head of profession. An associate interaction designer who overrules a developer is overstepping; one who never raises anything is under-performing.

Four principles carry most scenarios. Users come first, specifically users who cannot get past something — an interaction that excludes one group is not slightly worse for them, it is no interaction at all. Act within remit and be transparent at its edges — the pattern is attempt, then tell. Address problems directly and early, with the person involved. And separate the element from the flow — the distinctively interaction-design signature of a strong answer, since asking whether a control should be there at all is usually stronger than only fixing the control in front of you.

### How this assessment maps to the role

- **Protecting people who cannot get past something** maps to **Designing for everyone**.
- **Explaining a design position** maps to **Design communication**.
- **Working with others' perspectives** maps to **Designing together**.
- **Using evidence honestly** maps to **Evidence-based design**.
- **Working in cycles** maps to **Iterative design**.
- **Understanding where design sits** maps to **Leading design** and **Designing strategically**.

### Practice questions

**Question 1 (easy) — Not knowing how to do the task**

A senior designer asks for "the address lookup journey, including the manual entry fallback, prototyped by Thursday." The candidate has built simple prototypes but never a branching one. Ask for the most effective response.

- A) Say yes, then work it out alone from tutorials.
- B) Say yes, and add that this has not been done before and half an hour of guidance would be really useful before starting.
- C) Say it cannot be done because of no training.
- D) Say yes, and quietly ask another associate to help rather than telling the senior.

**Most effective: B. Least effective: C**

**Explanation:** Asking for guidance at this level, given a role that works under supervision, is doing the job correctly. This tests combining willingness with a specific, small, easy-to-grant request — option C is least effective, declining a development opportunity and handing the work back with nothing offered; option D leaves the senior with a false picture of the candidate's skills.

**Question 2 (easy) — Something noticed in an existing design**

Reviewing a live page, an error summary at the top does not link to the fields it describes, so a keyboard user must tab through the whole page to reach the problem. Ask for the most effective response.

- A) Say nothing; the page has been live for months and someone would have noticed.
- B) Raise it with a senior designer, describing exactly what was found and what a keyboard user has to do as a result.
- C) Raise a bug ticket without telling anyone.
- D) Note it for the next retrospective.

**Most effective: B. Least effective: A**

**Explanation:** Describing the consequence precisely — a keyboard user tabbing through a whole page to reach an error — is what makes it actionable. This tests raising a real defect through the right channel with the right detail — option A is least effective, since "someone would have noticed" is how defects survive for years; option D delays a two-minute conversation by weeks for a live problem.

**Question 3 (easy) — Conflicting instructions**

A senior designer asked for a flow diagram finished this morning; a delivery manager then asks for the prototype to be updated for tomorrow's show and tell, calling it urgent. Ask for the most effective response.

- A) Do what the delivery manager asked; they are more senior.
- B) Do what the senior designer asked and tell the delivery manager you are busy.
- C) Tell the delivery manager about the existing task, offer a specific workable option, and ask both to confirm the priority.
- D) Try to do both by working through lunch.

**Most effective: C. Least effective: D**

**Explanation:** Surfacing the conflict promptly with a concrete option — "I could update the prototype this morning and finish the flow diagram after lunch" — turns the candidate into part of the solution. This tests offering a specific workable alternative rather than bare escalation — option D is least effective, hiding the conflict, setting an unsustainable expectation, and leaving nobody aware the team is over-committing.

**Question 4 (easy) — A developer proposes a shortcut**

A developer says the agreed error handling will take two extra days, and proposes a single generic message reading "There is a problem with your answers." Ask for the most effective response.

- A) Agree; two days is a lot and the message still tells users something.
- B) Explain what the generic message costs users — they have to find the problem themselves, and someone using a screen reader may not be able to at all — and ask whether there is a middle option, such as specific messages for the two fields that fail most often, that fits the time available.
- C) Insist on the full agreed behaviour.
- D) Escalate to your senior designer without talking to the developer.

**Most effective: B. Least effective: A**

**Explanation:** Making the user cost concrete, treating the time constraint as legitimate, and proposing a middle path is what usually gets agreed in practice. This tests substituting rather than accepting a change that transfers cost to users — option A is least effective, accepting confusion and repeat submissions to save two days once.

**Question 5 (moderate) — Evidence that contradicts your design**

In testing, four of six participants clicked a secondary link instead of the primary button on a page the candidate designed and believes is right. Ask for the most effective response.

- A) Note the participants were unrepresentative and keep the design.
- B) Treat the result as a signal about the design rather than about the participants, look at what drew people to the link — wording, position, visual weight — and propose a change to test in the next round.
- C) Remove the secondary link.
- D) Ask for more participants before deciding.

**Most effective: B. Least effective: A**

**Explanation:** Four of six doing the same unexpected thing is a signal, applying regardless of intended design. This tests treating consistent behaviour as evidence about the design rather than the participants — option A is least effective, the single most reliable way for a designer to stop learning; option C acts on a diagnosis not yet made, since the button may simply be visually weak.

**Question 6 (moderate) — Pressure to reuse a pattern badly**

A stakeholder asks for the standard "check your answers" pattern on a page that is actually a list of documents the user must go and obtain, arguing it will be quicker and look consistent. Ask for the most effective response.

- A) Use the pattern; consistency matters and it is quicker.
- B) Explain that the pattern sets an expectation — that everything shown has already been done and can be changed — which is wrong here and will confuse users, and propose a different pattern that fits "things you still need to do," while keeping the same visual style so the service still looks consistent.
- C) Refuse and design something from scratch.
- D) Use the pattern but change its heading.

**Most effective: B. Least effective: D**

**Explanation:** The stakeholder's underlying goals — speed and consistency — are legitimate, and this tests addressing both directly while correcting a misapplied pattern, since a pattern is a set of learned expectations, not a layout. Option D is least effective, the worst of both worlds: the visual language still says "done" while the words say "to do," and users trust the layout.

**Question 7 (moderate) — Feedback that stings**

A senior designer says a flow is "confusing and doesn't show what happens when someone answers no," though the candidate believes it does. Ask for the most effective response.

- A) Point out where the "no" branch appears.
- B) Ask them to show you where they got lost, since if an experienced designer cannot follow the "no" branch then the flow is not communicating it — then fix that.
- C) Accept the criticism and redo the flow.
- D) Ask for the feedback in writing to consider later.

**Most effective: B. Least effective: A**

**Explanation:** Both things can be true — the branch is on the diagram, and the diagram does not communicate it. This tests converting feedback into information rather than winning the argument — option A is least effective, leaving the flow exactly as confusing as before and teaching the room that giving feedback is effortful.

**Question 8 (moderate) — Something that is not your job**

The letter a service sends after submission uses completely different wording from the confirmation screen the candidate designed, and users are likely to think they concern two different things; letters are handled by another team. Ask for the most effective response.

- A) Ignore it; letters are not your responsibility.
- B) Raise it with a senior designer, describing the mismatch and why it matters, and ask whether there is a route to the team that owns the letter.
- C) Contact the other team and ask them to change the letter.
- D) Change your confirmation screen to match the letter.

**Most effective: B. Least effective: A**

**Explanation:** A user experiences one service saying two different things, not two separate products — exactly the uncertainty that generates phone calls. This tests evidencing the problem and seeking a legitimate route through someone with standing — option A is least effective, describing an org chart rather than a user's experience; option D changes the controlled half to match a half that may itself be wrong.

**Question 9 (harder) — An accessibility problem found late**

Ten days before launch, a custom component is found unable to be operated with a keyboard. Ask for the most effective response.

- A) Launch and add it to the backlog.
- B) Raise it immediately with a senior designer and delivery manager, describing precisely what cannot be done and by whom, and ask for a decision — while checking whether a standard component could replace the custom one quickly.
- C) Try to fix the component alone in the ten days.
- D) Launch and note the gap in an accessibility statement.

**Most effective: B. Least effective: A**

**Explanation:** A component unusable by keyboard means some people cannot use the service at all, and weighing a delay against an exclusion is a decision for people with authority, though raising it precisely and now is entirely the candidate's to do. This tests naming the practical step nobody thinks of under pressure — checking whether a standard component can replace the custom one — over sending a genuine blocker to a backlog where it will remain unfixed (A, least effective).

**Question 10 (harder) — Being asked to design around a constraint you doubt**

A developer says a field cannot accept spaces in a postcode "because of the database," and research shows many users type a space and then see an error. Ask for the most effective response.

- A) Add a hint telling users not to use a space.
- B) Ask what the constraint actually is and whether the space could be stripped when the value is saved rather than rejected when it is typed — since the requirement is presumably about what is stored, not about what the user types.
- C) Insist the field accepts spaces.
- D) Escalate to your senior designer without asking the developer.

**Most effective: B. Least effective: A**

**Explanation:** "Because of the database" may be exactly true, a summary that could be satisfied differently, or an inherited assumption never revisited. This tests asking the productive question and proposing a specific mechanism — normalising on save rather than validating on entry — over making users accommodate an internal constraint (A, least effective), which is reliably ignored and produces longer pages with the same errors.

**Question 11 (harder) — A mistake of your own**

A prototype shared a week ago, which the team has been building from, is found to show a page order that does not match what was agreed. Ask what should happen.

- A) Correct it quietly and say nothing.
- B) Tell the team straight away, explain exactly what was wrong, and flag which work in the last week may have been built against the wrong order.
- C) Correct it and mention it at the next stand-up.
- D) Wait to see whether anyone noticed.

**Most effective: B. Least effective: D**

**Explanation:** A shared artefact has been wrong for a week and people have built against it, so the correction alone is not enough — this tests flagging downstream impact, the step most often skipped because it is the most uncomfortable. Option D is least effective, since waiting means the error persists and, if it emerges later, invites the question of why it was not raised sooner.

**Question 12 (harder) — An assumption in the room**

Someone says "we don't need to worry about screen reader users on this page — hardly anyone uses one," on a service with around 800,000 users a year. Ask for the most effective response.

- A) Let it go; the team has decided the direction.
- B) Bring the arithmetic into the room — even a very small percentage of 800,000 users is thousands of people a year — and ask what the team thinks should happen to them, so the decision is made knowingly rather than by assumption.
- C) Argue that all services must be accessible to everyone.
- D) Raise it privately with your senior designer afterwards.

**Most effective: B. Least effective: A**

**Explanation:** An intuition about proportion collapses against a concrete base number — even one per cent of 800,000 is 8,000 people a year. This tests contributing arithmetic that keeps the decision honest, an effective form of challenge available even to the most junior person in the room — option A is least effective, letting a numerically wrong assumption stand when the facts to correct it were available.

### Administration tips

- Score for whether the candidate attempts what can be competently handled and promptly tells the right person about what cannot, rather than struggling silently or escalating reflexively.
- Note whether the candidate treats consistent, unexpected research behaviour as a signal about the design rather than dismissing it as unrepresentative participants.
- Watch for whether the candidate asks what a stated technical constraint actually is before designing around it.
- Score for whether own errors are disclosed promptly, with downstream impact flagged.
- Note whether the candidate brings a measured argument (arithmetic, a specific consequence) rather than an assertion of principle when challenging an assumption.

### Common pitfalls to watch for when scoring

- Crediting an answer that ranks by seniority of the requester rather than by consequence.
- Missing when a candidate stays silent about a defect out of newness ("someone would have noticed").
- Rewarding a change that transfers cost onto users to save time elsewhere.
- Accepting advice telling users to compensate for an unaddressed design or technical constraint.
- Missing when a candidate delays disclosure of their own error rather than raising it and its downstream impact immediately.

## Conclusion

This guide has worked through pattern recognition and error checking against page patterns, component specifications and error message standards; the arithmetic that makes design judgements defensible — measuring drop-off against the correct denominator, converting a defect into a specific number of affected people, and recognising when a mean hides an outlier worth investigating; the discipline of reading design standards, accessibility criteria and review documents at exactly the strength the text supports, especially distinguishing a conditional permission from an outright exemption; and the situational judgement that defines a strong associate interaction designer — raising problems early with a measured value attached, asking what a stated constraint actually is, and disclosing an own mistake promptly with its downstream impact.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, and at this level the strongest answer is very often the one that asks for guidance rather than acting alone. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
