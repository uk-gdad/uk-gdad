# Frontend Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for frontend developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a frontend developer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — accessibility requirements, browser and device behaviour, design specifications, performance data, and interface logic — and decisions genuinely made by someone building software components, primarily user interfaces, collaborating closely with other disciplines to develop designs and working prototypes based on user needs.

At this level, the role writes clean, well-tested code that follows web standards; codes accessibly following a progressive enhancement approach; creates code that is open by default and easy for others to reuse; coaches and mentors more junior colleagues; and holds a working understanding of HTML, CSS and JavaScript deep enough to know when not to reach for the third one. The role builds for a user base that includes people on old Android phones over intermittent mobile data, people using screen readers, people with motor impairments using switch access, and people who will use a service exactly once in their life at a difficult moment — not an edge case, but the population.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate distinguishes what an intuitive-but-wrong answer suggests (the largest byte saving, the loudest metric, the most obvious cause) from what the evidence actually supports — several items are deliberately built so the first plausible answer is a trap. Situational judgement items reward a candidate who makes a consequence visible to the person who owns the decision, early, rather than either resolving it unilaterally or deferring it silently; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, using material that looks like the job rather than abstract puzzles: accessibility requirements, browser and device behaviour, design specifications, performance data, and interface logic.

Typical format: an online test of 15 to 30 minutes covering logical deduction, pattern recognition, error checking, prioritisation, and applied problem solving, scored against a norm group at a comparable level, often adaptive.

Three things distinguish this section at frontend developer level: progressive enhancement is a reasoning discipline, not a style preference, and "what happens if this JavaScript does not run" has a real answer for real users; accessibility problems are usually structural, and an interface hard to make accessible is usually built on the wrong element; and browser behaviour is discovered rather than deduced, so a confident mental model is often the riskiest one.

### How this assessment maps to the role

- **Structural reasoning about markup** maps to **Accessibility**: building interfaces to a predefined set of standards.
- **Reasoning about failure modes** maps to progressive enhancement and **Programming and build (frontend developer)**.
- **Performance diagnosis** maps to **Web performance optimisation**: identifying and resolving issues.
- **Prioritisation under constraint** maps to **Leadership and guidance**: decisions of differing risk and complexity.
- **Integration reasoning** maps to **Systems integration (frontend developer)**.
- **Reading design intent** maps to **Prototyping** and **User focus**.

### Practice questions

**Question 1 (easy) — Deduction from a standard**

Standard: "All interactive components must be operable by keyboard, except components that duplicate functionality available elsewhere on the page in keyboard-operable form." A component is not keyboard-operable. Ask which conclusion must be true.

- A) The standard was breached.
- B) The functionality is duplicated elsewhere.
- C) Either the functionality is available elsewhere in keyboard-operable form, or the standard was breached.
- D) The component must be fixed.

**Correct answer: C**

**Explanation:** A rule with a stated exception, plus a fact silent on whether the exception applies, gives only the disjunction; A and B each pick a branch without evidence, and D prescribes an action rather than stating what must be true. This tests distinguishing what a policy guarantees from what a candidate would sensibly do next — logic and action are different questions.

**Question 2 (easy) — Progressive enhancement**

A form submits via JavaScript to avoid a page reload. Ask for the most important question to ask about it.

- A) Whether the JavaScript is minified.
- B) What happens when the JavaScript does not run — whether the form still submits through a normal HTML form action and produces a working result — because if it does not, users on failed script loads, blocked CDNs, or restricted browsers cannot complete the task at all.
- C) Whether it works in all supported browsers.
- D) Whether the response is accessible to screen readers.

**Correct answer: B**

**Explanation:** Progressive enhancement means the baseline works without JavaScript and the script improves it — the test is whether the form has a real `action` and `method` producing a valid result on their own. This tests recognising that script failure is not rare at population scale, and that D is a genuinely important question about the enhanced path, while B asks whether a path exists at all.

**Question 3 (moderate) — A structural accessibility problem**

A developer has built a dropdown using `<div>` elements with click handlers, now adding `role="button"`, `tabindex="0"` and keyboard event handlers to make it accessible. Ask for the strongest observation.

- A) The approach is fine as long as the ARIA is correct.
- B) The effort being spent reconstructing button behaviour is a signal that the wrong element was chosen — a native `<button>` provides focus handling, keyboard activation, and assistive technology semantics for free, and hand-built equivalents reliably miss something, most often the distinction between Enter and Space or a disabled state.
- C) They should add `aria-label` as well.
- D) The dropdown should be replaced with a `<select>`.

**Correct answer: B**

**Explanation:** Using the native element and reaching for ARIA only when nothing native fits is the general rule, because native elements carry behaviour tedious and error-prone to reproduce. This tests recognising that "the ARIA is correct" (option A) is the position that produces most inaccessible custom components, since the ARIA is usually correct and the behaviour is not.

**Question 4 (moderate) — Reading a bug report**

A user reports that a page "doesn't work on my phone." Ask for the strongest first step.

- A) Test on the assessor's own phone.
- B) Establish what "doesn't work" means and on what — which browser and version, what the user tried to do, and what happened instead — because "doesn't work" covers a layout problem, a script error, a timeout and unreadable contrast, which have nothing in common.
- C) Check the analytics for mobile errors.
- D) Reproduce it in the browser's device emulator.

**Correct answer: B**

**Explanation:** The report contains almost no information, and each possible meaning would send the investigation somewhere different. This tests recognising that device emulation (D) emulates viewport and touch, not the actual browser engine, CPU or memory pressure, and that a modern handset on office wifi (A) is the configuration least likely to reproduce anything.

**Question 5 (moderate) — Prioritising accessibility findings**

An audit returns four issues: a missing form label, a colour contrast ratio of 4.3:1 on body text, a decorative image with no `alt` attribute, and a modal that does not trap focus. Ask which is most urgent.

- A) The contrast ratio.
- B) The missing form label, because a form control with no accessible name is unusable by a screen reader user, blocking task completion entirely, whereas the others degrade the experience without preventing it.
- C) The modal focus trap.
- D) The decorative image.

**Correct answer: B**

**Explanation:** Prioritising by whether an issue blocks a task ranks the unlabelled control first (announced as "edit text, blank," with no way to know what it wants), the focus trap next (disorienting but usually recoverable), the contrast failure after that (a genuine failure most users can work through), and the missing decorative `alt` last (noise, not a blocker). This tests ranking severity by task-blocking consequence rather than by category or visibility.

**Question 6 (moderate) — A performance symptom**

A page scores well on synthetic performance tests but users report it feeling slow. Ask for the strongest explanation to investigate first.

- A) The tests are wrong.
- B) Synthetic tests typically run on a fast connection from a nearby location on a capable machine, so the gap usually means real users differ on one of those axes — slower devices where JavaScript execution dominates, or higher latency where round trips matter — and field data segmented by device and connection will show which.
- C) The users are exaggerating.
- D) The server is slow at peak.

**Correct answer: B**

**Explanation:** The lab-versus-field discrepancy is one of the most common situations in web performance, with a small number of usual causes — on a low-end Android device, JavaScript parse and execution can take several times longer than on a development machine. This tests naming the mechanism and the diagnostic rather than dismissing the data (A) or the users (C).

**Question 7 (moderate) — Design feedback before build**

A designer's specification includes a colour combination that fails contrast requirements. Ask for the strongest response.

- A) Build it as specified and raise it in testing.
- B) Raise it now with the specific numbers — the measured ratio, the required ratio, and one or two nearby colours that pass — because offering design feedback to mitigate the risk of failing accessibility testing is part of the role, and a colour value changed before build costs nothing while the same change after build means rework.
- C) Build it with a compliant colour and tell the designer.
- D) Ask the designer to check the contrast.

**Correct answer: B**

**Explanation:** This tests bringing measurement and a proposed solution, making the conversation collaborative rather than a rejection — C makes a design decision unilaterally that is not the developer's to make, and A defers a known failure to the most expensive point to fix it.

**Question 8 (hard) — An intermittent layout problem**

A component's layout breaks occasionally on one page but never in local development. Ask for the strongest hypothesis to test first.

- A) A CSS specificity conflict.
- B) Something varying at runtime that does not vary locally — most likely content length (real data includes names and addresses far longer than test fixtures) or a web font loading late and reflowing the layout — tested by trying the longest real content and simulating a slow font load.
- C) A browser bug.
- D) A race condition in JavaScript.

**Correct answer: B**

**Explanation:** "Never locally, occasionally in production" points at something differing between the two environments, and the two candidates in B are by far the most common in frontend work. This tests recognising that a CSS specificity conflict (A) would be consistent rather than occasional, while C and D are possible but rarer and do not explain the environment difference itself.

**Question 9 (hard) — Reuse and openness**

Building a component another team will likely need. Ask what most affects whether they can actually reuse it.

- A) Publishing it in a shared repository.
- B) Whether it can be used without adopting the author's assumptions — a component tightly coupled to page CSS, a particular data shape or a specific build setup is technically available and practically unusable, so the reusable version has a clear interface, no dependency on ambient styles, and documented behaviour.
- C) Writing good documentation.
- D) Making it configurable.

**Correct answer: B**

**Explanation:** Availability and reusability are different properties, and the gap between them is where shared component libraries fail. This tests recognising that a component with thirty options (D) can be harder to adopt than one that does one thing, and that documentation (C) does not help if the component cannot be dropped in at all.

**Question 10 (hard) — Distinguishing symptom from cause**

Screen reader users report that after submitting a form with errors, they do not realise anything has happened; the error messages are correctly marked up and associated with their fields. Ask for the strongest hypothesis.

- A) The error markup is wrong after all.
- B) The markup being correct is consistent with the problem: nothing has told the user that the submission failed or moved their attention to the errors, so focus probably remains where it was and there is no announcement — the usual fix is to move focus to an error summary at the top of the page, which both announces the failure and provides links to each field.
- C) The screen reader is not supported.
- D) The errors need `aria-live` regions.

**Correct answer: B**

**Explanation:** The scenario states the association markup is correct, redirecting attention to the question of attention itself — a sighted user sees the page change, but a screen reader user with focus unchanged and nothing announced has no signal at all. This tests recognising why the established error-summary-with-moved-focus pattern solves both the announcement and the navigation problem, while a live region (D) announces without providing a way to reach the problems.

**Question 11 (hard) — A trade-off between two user groups**

An interaction that would be much clearer for most users relies on hover, which does not exist on touch devices. Ask for the strongest approach.

- A) Implement the hover interaction; most users are on desktop.
- B) Treat hover as an enhancement over an interaction that works without it — accessible by tap and by keyboard, with hover adding convenience where available — because hover-only interactions exclude touch users, keyboard users and many assistive technology users simultaneously, and the excluded groups overlap heavily with those who most need the service to work.
- C) Build separate mobile and desktop versions.
- D) Replace hover with click for everyone.

**Correct answer: B**

**Explanation:** This tests applying progressive enhancement to interaction rather than only to script — building the version that works for everyone, then adding the hover affordance on top — while recognising that A weighs convenience for a majority against exclusion of a minority, the wrong comparison in a public service.

**Question 12 (hard) — Coaching judgement**

A junior colleague's pull request works correctly but uses a pattern the team has moved away from. Ask for the strongest response.

- A) Approve it; it works.
- B) Explain what the team moved to and why, in the review, and ask them to change it — because the reason is the transferable part, and a junior developer who understands why the pattern was abandoned will recognise the next instance, whereas one who is simply corrected will not.
- C) Change it personally before merging.
- D) Approve it and mention the pattern separately.

**Correct answer: B**

**Explanation:** This tests recognising that code review is where mentoring actually happens, and that "we moved away from this because it breaks when content wraps" teaches something reusable while "please use X instead" teaches one substitution — C removes both the learning and the colleague's ownership of their own change.

### Administration tips

- Score for whether the candidate concludes only what a stated policy guarantees, resisting the plausible action that goes beyond it.
- Note whether the candidate identifies the mechanism behind a discrepancy (lab vs field data, local vs production) rather than dismissing the data or the users.
- Watch for whether accessibility findings are prioritised by task-blocking consequence rather than by category or visibility.
- Score for whether the candidate reaches for a native or established pattern before proposing a custom or patched-together alternative.
- Note whether a proposed fix addresses the actual mechanism (e.g. attention/focus, not markup correctness) rather than the first plausible-sounding cause.

### Common pitfalls to watch for when scoring

- Crediting an answer that treats "the ARIA is correct" as sufficient without checking the underlying element choice.
- Missing when a candidate accepts device emulation as equivalent to real-device testing.
- Rewarding a prioritisation of accessibility findings by severity label alone rather than by task-blocking consequence.
- Accepting a design or API disagreement resolved unilaterally rather than through a conversation about underlying intent or cost.
- Missing when a candidate proposes a fix (e.g. a live region) that addresses part of a problem rather than its actual cause.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment tests whether a candidate can draw a defensible conclusion from data under time pressure. For a frontend developer the data is performance metrics, analytics segmented by device and browser, accessibility audit results, bundle sizes, and test coverage.

Typical format: 15 to 25 minutes with a calculator permitted, presenting tables and charts followed by questions — some computational, some asking what the data does and does not support.

Three habits matter particularly: averages hide the users who most need to be known about, since mean load time is dominated by fast connections and the users having a bad time are in the tail; percentages of a large user base are people, and a browser used by 0.4% of two million annual users is eight thousand people; and bytes are not time, since a reduction matters differently depending on whether it was images on a fast connection or JavaScript parsed on a slow phone.

### How this assessment maps to the role

- **Performance metrics** map to **Web performance optimisation**: identifying and resolving issues.
- **Segmented analytics** map to **User focus (frontend developer)**: championing research covering all users.
- **Accessibility audit data** maps to **Accessibility**.
- **Bundle and asset arithmetic** maps to **Systems integration (frontend developer)**: building static assets.
- **Coverage and defect figures** map to **Programming and build (frontend developer)**.
- **Presenting figures to stakeholders** maps to **Communicating information**.

### Practice questions

*Table 1 — Page load performance by device category, last 30 days*

| Device category | Sessions | Median LCP (s) | 75th percentile LCP (s) | 95th percentile LCP (s) |
|---|---|---|---|---|
| Desktop | 240,000 | 1.4 | 2.1 | 3.6 |
| High-end mobile | 180,000 | 1.9 | 3.0 | 5.2 |
| Mid-range mobile | 260,000 | 3.1 | 5.4 | 9.8 |
| Low-end mobile | 70,000 | 5.6 | 9.1 | 16.4 |

**Question 1 (easy) — Reading a table**

Ask how many sessions were on mobile devices of any kind.

- A) 440,000
- B) 510,000
- C) 330,000
- D) 750,000

**Correct answer: B**

**Explanation:** 180,000+260,000+70,000=510,000, or 68% of the 750,000 total. This tests basic table addition, establishing early that most of the table's striking figures describe most of the users.

**Question 2 (easy) — Comparing percentiles**

Ask approximately how many times slower the 75th percentile LCP on low-end mobile is than on desktop.

- A) About 2.5 times
- B) About 4.3 times
- C) About 6 times
- D) About 3 times

**Correct answer: B**

**Explanation:** 9.1÷2.1≈4.33. This tests a straightforward ratio calculation, noting that desktop passes the Core Web Vitals "good" threshold of 2.5s at the 75th percentile while every mobile category fails it.

**Question 3 (moderate) — Weighted median**

Ask for the approximate session-weighted median LCP across all four categories.

- A) About 2.5s
- B) About 2.8s
- C) About 3.0s
- D) About 1.9s

**Correct answer: A**

**Explanation:** (240,000×1.4 + 180,000×1.9 + 260,000×3.1 + 70,000×5.6) ÷ 750,000 = 2.50s. This tests weighting by sessions — the unweighted mean of the four medians (3.0s, option C) treats 70,000 low-end mobile sessions as equal in weight to 260,000 mid-range ones.

**Question 4 (moderate) — Users behind a percentage**

750,000 monthly sessions; a browser used by 0.6% has a rendering bug on a new component. Ask how many sessions a month are affected, and whether it warrants a fix.

- A) 450 sessions; not worth fixing.
- B) 4,500 sessions a month — around 54,000 a year — which is a small percentage and a large number of people, so whether it warrants a fix depends on what the bug does, not on the percentage.
- C) 45,000 sessions; must be fixed.
- D) 4,500 sessions; not worth fixing.

**Correct answer: B**

**Explanation:** 750,000×0.006=4,500. This tests converting a rate into a count before judging severity — a percentage in the tenths sounds negligible but describes substantial numbers of people at government service volumes, and severity (not the raw count or percentage alone) is what actually decides whether it is worth fixing.

**Question 5 (moderate) — Contrast ratio**

Body text at contrast ratio 4.2:1; a heading at 24px bold with ratio 3.1:1. Ask which passes WCAG 2.2 AA.

- A) Both pass.
- B) Neither passes.
- C) The heading passes; the body text does not.
- D) The body text passes; the heading does not.

**Correct answer: C**

**Explanation:** WCAG AA requires 4.5:1 for normal text and 3:1 for large text (at least 18pt/24px regular or 14pt/18.66px bold); the heading qualifies as large text and clears 3:1, while the body text falls short of 4.5:1. This tests knowing and applying the two different thresholds correctly.

*Table 2 — Bundle composition before and after optimisation*

| Asset type | Before (KB) | After (KB) |
|---|---|---|
| JavaScript | 480 | 190 |
| CSS | 120 | 95 |
| Images | 1,340 | 410 |
| Fonts | 180 | 90 |

**Question 6 (moderate) — Total reduction**

Ask for the approximate percentage reduction in total transferred bytes.

- A) About 45%
- B) About 63%
- C) About 71%
- D) About 55%

**Correct answer: B**

**Explanation:** Before 2,120KB, after 785KB, reduction 1,335KB ÷ 2,120KB ≈ 63%. This tests basic total percentage calculation — a useful figure, but not, as the next question shows, the one that best predicts the user-felt improvement.

**Question 7 (hard) — Which reduction matters most**

Ask which change in Table 2 is likely to most improve experience on a low-end mobile device.

- A) The image reduction, since it is the largest in bytes.
- B) The JavaScript reduction, because JavaScript must be parsed, compiled and executed on the main thread as well as downloaded, and on a low-end device that processing cost is several times higher than on a development machine — so 290KB less JavaScript typically buys more responsiveness than 930KB less image data, which mostly costs download time and can be lazy-loaded.
- C) The font reduction, because fonts block text rendering.
- D) They are equivalent per byte saved.

**Correct answer: B**

**Explanation:** This tests recognising the central asymmetry in web performance — bytes of JavaScript are far more expensive than bytes of image data — rather than picking the largest raw number (A), the intuitive but wrong answer.

**Question 8 (hard) — Accessibility audit arithmetic**

An audit of 40 pages found 96 issues: 12 critical, 31 serious, 38 moderate, 15 minor. Critical and serious average 90 minutes each to fix; moderate and minor average 25 minutes. Ask for the approximate total effort.

- A) About 65 hours
- B) About 87 hours
- C) About 42 hours
- D) About 110 hours

**Correct answer: B**

**Explanation:** (43×90 + 53×25)÷60 ≈ 86.6 hours. This tests a two-tier weighted calculation, converting an audit into a plannable figure — noting the 43 higher-severity issues account for three-quarters of the total effort.

**Question 9 (hard) — Interpreting a change**

After a release, bounce rate on a key page fell from 34% to 29% and average session duration fell from 4:10 to 3:20. Ask for the strongest interpretation.

- A) The release improved the page; bounce rate fell.
- B) Both metrics moved and they point in ambiguous directions — fewer people leaving immediately alongside shorter sessions is consistent with users finding what they need faster, and also with them giving up sooner — so a task completion measure is needed before calling it either way.
- C) The release made things worse; sessions are shorter.
- D) The two metrics are unrelated.

**Correct answer: B**

**Explanation:** This tests recognising session duration as one of the most frequently misread web analytics metrics — longer can mean engaged or lost, shorter can mean efficient or abandoned — rather than picking the metric that supports a preferred story (A, C).

**Question 10 (hard) — Sampling in performance data**

Real user monitoring samples 5% of sessions; 42 sessions with LCP above 20 seconds were recorded last week. Ask approximately how many such sessions occurred.

- A) 210
- B) 840
- C) 2,100
- D) 42

**Correct answer: B**

**Explanation:** 42×(1÷0.05)=840. This tests scaling a sampled figure by the inverse of the sampling rate — forgetting to scale is a common, consequential error, since 42 sounds like an anomaly and 840 sounds like a defect.

**Question 11 (hard) — Browser support decision**

A browser accounts for 1.2% of 750,000 monthly sessions. Supporting a feature in it takes about three days plus ongoing maintenance. Ask for the strongest framing.

- A) 1.2% is too small to justify three days.
- B) 1.2% is 9,000 sessions a month, so the question is what those users cannot do without the work — if the feature is an enhancement and the baseline still works for them, three days is poor value; if they cannot complete the task, 9,000 people a month is a strong case regardless of the percentage.
- C) All browsers should be supported equally.
- D) 9,000 sessions justifies the work.

**Correct answer: B**

**Explanation:** Neither the percentage nor the count alone answers this. This tests applying the correct decisive test — whether affected users can still complete their task through the baseline experience, which is precisely what progressive enhancement is for.

**Question 12 (hard) — Presenting a figure to a stakeholder**

Making a case for performance work to a service owner. Ask which figure is most persuasive and most honest.

- A) The median LCP improved from 3.1s to 2.2s.
- B) The proportion of sessions meeting the Core Web Vitals "good" threshold, broken down by device category — because it maps directly onto how many people had an acceptable experience, exposes that mid-range and low-end mobile users are the ones affected, and is harder to improve by helping users who were already fine.
- C) Total page weight fell by 63%.
- D) The Lighthouse score rose from 62 to 91.

**Correct answer: B**

**Explanation:** This tests choosing a count-of-people-helped figure segmented so the audience can see who they were, rather than an aggregate that could be driven entirely by users who were already fast (A) or a lab score on a simulated device (D) that a stakeholder will later discover does not describe real users.

### Administration tips

- Score for whether the candidate weights an average by session count or another relevant volume rather than averaging figures unweighted.
- Note whether the candidate converts a percentage into an absolute count before judging severity.
- Watch for whether a sampled figure is scaled by the inverse sampling rate before being interpreted.
- Score for whether the candidate distinguishes JavaScript bytes from image or other asset bytes when reasoning about performance impact.
- Note whether a proposed metric for a stakeholder conversation is segmented in a way that reveals who is actually affected, rather than an aggregate that could mask it.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of medians or rates across groups of unequal size.
- Missing when a candidate reads a small percentage (e.g. 0.6%) as negligible without converting it to a count.
- Rewarding a sampled count reported and interpreted as an absolute count.
- Accepting an assumption that the largest byte reduction produces the largest user-experienced improvement.
- Missing when a candidate presents a synthetic or lab-based score as evidence about real user experience.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment tests whether a candidate can determine precisely what a piece of written material establishes. For a frontend developer that material is accessibility standards, design system documentation, browser specifications, service standards, and research findings.

The commonest format presents a passage followed by statements to be marked True, False or Cannot Say. True means the passage establishes it, False means the passage contradicts it, and Cannot Say means it does neither — regardless of what a candidate happens to know, which is the main hazard at this level, since a candidate will frequently know the correct accessibility answer while the passage in front of them has not said it.

Three specifics matter: accessibility standards are written with precise conditions — thresholds, exceptions for content types, success criteria at certain conformance levels — and reading past a condition changes what a standard requires; "must", "should" and "may" are terms of art, and treating them loosely leads to building the wrong thing or blocking the wrong thing; and user research findings describe what was observed with particular participants, and generalising past that is the commonest misuse of research in a design conversation.

### How this assessment maps to the role

- **Reading accessibility standards precisely** maps to **Accessibility**: building to a predefined set of standards.
- **Reading specifications** maps to **Programming and build (frontend developer)**: working from agreed specifications.
- **Reading research findings** maps to **User focus (frontend developer)**.
- **Reading design system documentation** maps to **Prototyping** and establishing design patterns.
- **Reading strategy and policy** maps to **Strategic thinking**.
- **Precise communication** maps to **Communicating information**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Text and images of text must have a contrast ratio of at least 4.5:1 against their background. Large-scale text and images of large-scale text must have a ratio of at least 3:1. This requirement does not apply to text that is part of an inactive user interface component, that is pure decoration, that is not visible to anyone, or that is part of a picture containing significant other visual content. Logotypes are also exempt. User interface components and graphical objects required to understand content must have a contrast ratio of at least 3:1 against adjacent colours."

**Question 1 (easy)**

Statement: Body text must have a contrast ratio of at least 4.5:1.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly, and body text is neither large-scale nor covered by any listed exemption. This tests the baseline item — direct application of a stated rule.

**Question 2 (moderate)**

Statement: The border of an input field must have a contrast ratio of at least 4.5:1 against the background.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The 3:1 requirement applies to "user interface components and graphical objects", and a border is such a component, not text — the statement wrongly applies the text threshold. This tests reading which of two different thresholds applies to which category of element, a common and expensive error since it leads to rejecting compliant designs.

**Question 3 (moderate)**

Statement: Text appearing in a photograph of a street scene is exempt from the contrast requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The passage exempts text "part of a picture containing significant other visual content", which a street scene photograph satisfies. This tests applying an exemption clause correctly, while noting the exemption concerns text being incidental to a picture, not the text being unimportant.

**Question 4 (hard)**

Statement: A disabled button's label is exempt from the contrast requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** A disabled button is an inactive component, exempted under the passage's list. This tests answering what a standard requires rather than what is good practice — a genuinely low-contrast disabled state is often a real usability problem many teams choose to exceed the requirement to avoid, but the exemption exists regardless.

*Passage B — for Questions 5 to 8*

"The design system component library provides a date input pattern consisting of three separate text fields for day, month and year. Research with 340 participants found that this pattern produced fewer errors than a single text field or a calendar picker for entering dates in the past, such as a date of birth. The guidance notes that a calendar picker may be more appropriate for selecting dates in the near future, such as an appointment, where the day of the week is relevant. Teams departing from the component library pattern should record the reason and the research supporting the alternative. The component library is updated quarterly; proposals for new patterns are reviewed by the design system working group."

**Question 5 (easy)**

Statement: The design system's date input pattern uses three separate fields.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly. This tests straightforward direct extraction from the passage.

**Question 6 (moderate)**

Statement: The three-field pattern produces fewer errors than a calendar picker for booking an appointment.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The research finding is scoped to "entering dates in the past"; an appointment is a near-future date, explicitly a case where a calendar picker "may be more appropriate" — a preference statement, not a research result. This tests catching the characteristic misuse of a research finding: applying a result established in one context generally.

**Question 7 (moderate)**

Statement: A team may not use a calendar picker.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage contradicts this twice — a calendar picker "may be more appropriate" for near-future dates, and a route for departure (recording the reason and supporting research) exists. This tests recognising that departure is permitted and conditioned, not prohibited, and noting the obligation attached is "should", not "must".

**Question 8 (hard)**

Statement: A new pattern proposed to the design system working group will be available in the component library within three months.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage states quarterly updates and working group review, but not that review occurs within one quarter, results in acceptance, or that an accepted pattern appears in the next release. This tests refusing to chain several plausible-but-unestablished steps into a confident conclusion.

*Passage C — for Questions 9 to 12*

"Services must work without JavaScript for all essential functions, unless the department's technical design authority has agreed an exemption. Where an exemption is agreed, the service must still work with assistive technologies and must degrade gracefully when JavaScript fails to load. Services should be tested on the browsers used by at least 95% of the service's users, and must be tested with at least one screen reader on at least one desktop and one mobile platform. Testing on a physical device is preferred to emulation. Where a service is used predominantly on mobile, mobile testing should be prioritised accordingly."

**Question 9 (moderate)**

Statement: A service with an agreed exemption need not work when JavaScript fails to load.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage requires graceful degradation "even where an exemption is agreed". This tests recognising the second sentence exists precisely to close this exact inference — an exemption from working without JavaScript is distinct from an exemption from degrading gracefully when it fails.

**Question 10 (moderate)**

Statement: A service must be tested on the browsers used by at least 95% of its users.

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage uses "should" for the 95% browser coverage and "must" for screen reader testing in the same sentence. This tests distinguishing modal verbs precisely, especially where a deliberate contrast sits within one sentence — browser coverage is negotiable under pressure and screen reader testing is not.

**Question 11 (moderate)**

Statement: Emulated device testing does not satisfy the mobile screen reader requirement.

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** "Preferred to emulation" expresses a preference, not an exclusion. This tests distinguishing a preference (ranking two acceptable options) from a requirement (excluding one) — a professionally correct instinct that emulated screen reader testing is nearly worthless does not change what the passage actually states.

**Question 12 (hard)**

Statement: A service used predominantly on desktop must still be tested with a mobile screen reader.

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The screen reader requirement is unconditional; the prioritisation clause adjusts emphasis between two required activities, not the baseline obligation itself. This tests recognising that prioritisation between required activities does not exempt either — the same shape of error as an exception that turns out to be a mere preference.

### Administration tips

- Score for whether the candidate checks which of two distinct thresholds or rules applies to which category of element before answering.
- Note whether the candidate scopes a research finding to the context it was actually established in, rather than generalising it.
- Watch for whether a candidate distinguishes "should" from "must" precisely, including within a single sentence.
- Score for whether a candidate distinguishes a stated preference from a requirement.
- Note whether a candidate refuses to chain multiple unestablished steps into a confident conclusion.

### Common pitfalls to watch for when scoring

- Crediting an application of the text contrast ratio to a non-text user interface component.
- Missing when a candidate extends a research finding beyond the context it was established in.
- Rewarding a statement that reads "may be more appropriate" as an established research result.
- Accepting a reading of an exemption from one obligation as an exemption from all related obligations.
- Missing when a candidate reads a stated preference ("is preferred to") as a prohibition of the alternative.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment presents realistic scenarios and asks the candidate to identify effective and ineffective responses. For a frontend developer the scenarios involve working across disciplines, defending accessibility under delivery pressure, giving and receiving design feedback, mentoring, and handling technical disputes.

The commonest formats ask for the most and least effective response, or a rating, scored against a key derived from experienced practitioners in comparable roles.

Three patterns run through the strong answers: accessibility is not a negotiation won by refusing, and the effective move is almost always to make the cost and consequence visible early enough that nobody has to choose under pressure; the role works with designers, content designers, user researchers and backend developers who each hold information the candidate does not, and gathering their perspective before deciding is consistently stronger than resolving alone; and the role names resolving technical disputes among peers, so how a candidate disagrees is part of the job.

### How this assessment maps to the role

- **Championing accessibility** maps to **Accessibility**: championing it to internal stakeholders.
- **Cross-discipline collaboration** maps to **Community collaboration** and **User focus**.
- **Managing stakeholder expectations** maps to **Communicating information**.
- **Resolving disputes** maps to **Leadership and guidance (frontend developer)**.
- **Coaching** maps to the role level's mentoring responsibility.
- **Performance advocacy** maps to **Web performance optimisation**.

### Practice questions

**Question 1 (easy) — Accessibility under deadline**

Two days before release, a new component is found not to be keyboard operable; fixing it properly means restructuring it. Ask for the most and least effective response.

- Option A: Release it and fix it in the next sprint.
- Option B: Say clearly what it means — that keyboard and screen reader users cannot use this part of the service — and put the options to the service owner, including releasing without the component, releasing with a simpler accessible version, or delaying, because this is their decision and it needs to be made knowingly.
- Option C: Refuse to release.
- Option D: Add a keyboard handler as a quick patch.

**Most effective: B. Least effective: A.**

**Explanation:** B puts a plainly stated consequence and real options in front of the person who owns the decision, including a middle option (a simpler accessible version) frequently overlooked under pressure. A is least effective, since it releases a known barrier and "next sprint" for accessibility fixes has a poor track record. This tests routing an accessibility trade-off to its accountable owner rather than resolving it unilaterally (C) or patching it superficially (D).

**Question 2 (easy) — A designer's request you disagree with**

A designer asks for an animation believed to be distracting. Ask for the most and least effective response.

- Option A: Build it; design decisions are theirs.
- Option B: Ask what the animation is meant to do — draw attention to a change, signal progress, or provide continuity — and raise the concern in those terms, along with the practical point that it will need to respect reduced-motion preferences.
- Option C: Explain that animations harm performance.
- Option D: Build a subtler version.

**Most effective: B. Least effective: D.**

**Explanation:** Asking about intent turns a difference of taste into a discussion about whether the thing works, and often reveals a purpose achievable more simply. D is least effective: silently building something other than what was asked amounts to a decision made on the designer's behalf without telling them, damaging the relationship more than a direct disagreement would.

**Question 3 (moderate) — A stakeholder wants a component from another site**

A senior stakeholder wants a component copied from a commercial website; it does not fit the design system and has accessibility problems. Ask for the most and least effective response.

- Option A: Explain that it does not meet the design system standards.
- Option B: Find out what they liked about it — usually a specific quality such as feeling faster, looking more modern, or making one action more prominent — and propose how to achieve that within the design system, because the underlying want is almost always achievable and the specific component almost never is.
- Option C: Build it with the accessibility problems fixed.
- Option D: Explain the accessibility problems and decline.

**Most effective: B. Least effective: C.**

**Explanation:** "Make it like that site" is a symptom rather than a request; B finds the underlying quality and offers a route within the system. C is least effective: delivering a component outside the design system, inconsistent with the rest of the service, sets a precedent for being asked again.

**Question 4 (moderate) — Disagreement with a backend developer**

A backend developer proposes an API shape that would force awkward data handling in the frontend, believing it is cleaner on their side. Ask for the most and least effective response.

- Option A: Accept it; the API is their decision.
- Option B: Set out concretely what it costs on the frontend — the specific transformations, extra requests, or state that would need to be held — and look for a shape that serves both, since "cleaner" on either side is a judgement and the total cost across both is what matters.
- Option C: Escalate to a lead.
- Option D: Build the workarounds; it is not worth the argument.

**Most effective: B. Least effective: C.**

**Explanation:** B moves the conversation from two aesthetic preferences to a comparison of concrete costs, which is resolvable — resolving technical disputes taking all views into account is a named part of the role. C is least effective as a first move: escalating a routine technical disagreement between two developers signals an inability to work it out, and often returns a worse decision than either would have reached.

**Question 5 (moderate) — Research findings you disagree with**

User research shows people are not noticing a component believed to work well. Ask for the most and least effective response.

- Option A: Accept the finding and change the component.
- Option B: Ask the researcher about the specifics — what people were trying to do, where their attention was, how many participants and in what context — because that will show whether the fix is the component, its placement, or the surrounding content, and the answer is frequently not the component at all.
- Option C: Question the research methodology.
- Option D: Ask for the research to be repeated.

**Most effective: B. Least effective: C.**

**Explanation:** B gets the detail that distinguishes a component problem from a placement or page problem. C is least effective and is what defensiveness sounds like — challenging methodology before understanding the finding is the fastest way to stop being included in research.

**Question 6 (moderate) — Mentoring through a mistake**

A junior colleague being mentored has shipped a change that broke a page in one browser, and is visibly upset. Ask for the most and least effective response.

- Option A: Fix it quickly and reassure them.
- Option B: Get the fix done with them rather than for them, and separately treat it as a question about the process — a break that reached production means testing did not cover that browser, a team gap rather than their error.
- Option C: Tell them not to worry; everyone breaks things.
- Option D: Talk them through what they should have checked.

**Most effective: B. Least effective: A.**

**Explanation:** B does the fix together, so they learn the diagnosis, and reframes the incident accurately as a process gap. A is least effective: taking over the fix at the moment they feel worst confirms they cannot be trusted with it.

**Question 7 (hard) — Pressure to drop progressive enhancement**

A delivery manager asks whether the team could move faster by dropping the no-JavaScript baseline, noting "almost everyone has JavaScript." Ask for the most and least effective response.

- Option A: Explain that progressive enhancement is a government standard.
- Option B: Answer the actual question about speed honestly — for some components the baseline does cost time, for many it costs almost nothing — and set against it the number of sessions where scripts fail for reasons unrelated to whether the user "has JavaScript," along with what those users would be unable to do.
- Option C: Explain that JavaScript fails more often than people think.
- Option D: Agree, provided the critical journeys keep a baseline.

**Most effective: B. Least effective: A.**

**Explanation:** B is honest in both directions, including where the baseline genuinely costs time, and correctly reframes the risk as network and error failures rather than a user choice. A is least effective: citing a standard answers a cost question with an authority claim, inviting a search for an exemption.

**Question 8 (hard) — An accessibility problem in someone else's code**

Reviewing another team's component, in production and used by three services, it is found unusable with a screen reader. Ask for the most and least effective response.

- Option A: Report it through the accessibility reporting process.
- Option B: Contact the owning team directly with the specific problem and how it was found, offering to pair on the fix — and make sure the three consuming services know, because they carry the accessibility obligation to their users and may need an interim mitigation.
- Option C: Fix it and raise a pull request.
- Option D: Advise the three services to stop using it.

**Most effective: B. Least effective: D.**

**Explanation:** B tells the people who can fix it, offers help, and informs the services carrying the legal and moral obligation to their own users — the part most often skipped. D is least effective as a first move: telling three services to remove a production component before its owners have had a chance to fix it creates large disruption and is likely to be ignored.

**Question 9 (hard) — Performance work with no obvious sponsor**

The service is visibly slow for mid-range mobile users, but no one has asked for performance work and the backlog is full. Ask for the most and least effective response.

- Option A: Do it gradually alongside other work.
- Option B: Make it visible with the numbers segmented by device — what proportion of users are affected and what they experience — and put it to the service owner as a prioritisation decision, because performance work competes for the same time as everything else and needs to be chosen rather than smuggled in.
- Option C: Raise it at a retrospective.
- Option D: Add performance tickets to the backlog.

**Most effective: B. Least effective: A.**

**Explanation:** B uses evidence segmented by device to show the service owner a specific, identifiable group of affected users, making it a decision rather than an opinion. A is least effective: unsanctioned work alongside sanctioned work slows both, is invisible if it succeeds, and looks like a missed estimate if it does not.

**Question 10 (hard) — A dispute between two colleagues**

Two colleagues are in a stalled disagreement about a component's approach, slowing the team; neither has asked for intervention. Ask for the most and least effective response.

- Option A: Stay out of it; it is not the candidate's dispute.
- Option B: Get them together and focus the discussion on what each approach optimises for and what the team's actual constraints are, because a stalled technical disagreement is usually two people optimising for different things without having said so — and resolving disputes among peers is a named part of the role.
- Option C: Decide the question personally.
- Option D: Suggest they escalate to a lead.

**Most effective: B. Least effective: C.**

**Explanation:** B names the usually-unstated priority mismatch (readability vs performance, say) that resolves most stalled disputes in minutes. C is least effective: imposing an answer on a disagreement between peers who did not ask leaves both without ownership and does nothing about the underlying mismatch.

**Question 11 (hard) — A design system constraint that does not fit**

The design system's pattern does not fit a genuine need in the service. Ask for the most and least effective response.

- Option A: Use the pattern anyway; consistency matters.
- Option B: Establish precisely where it fails for the service's users, look for a way to meet the need within the system, and if there genuinely is not one, depart from it deliberately — documenting the reason and the evidence, and feeding it back to the design system team, because a pattern that does not fit a real need is information they need.
- Option C: Build a custom component.
- Option D: Ask the design system team to change the pattern.

**Most effective: B. Least effective: C.**

**Explanation:** B follows the sequence that keeps both the service and the system healthy, and the feedback loop is the part most often skipped — a documented mismatch is far more actionable to the system team than a general sense of awkwardness. C is least effective as a first move because it forks the system silently and the next team hits the same problem.

**Question 12 (hard) — Being asked to certify accessibility**

A service owner asks for confirmation that the service is accessible before launch, having tested with one screen reader and fixed the audit findings. Ask for the most and least effective response.

- Option A: Confirm it; the audit findings are fixed and it has been tested.
- Option B: Say precisely what has been done and what has not — which standard was tested against, with what tools, on what platforms, and what has not been covered, particularly testing with actual disabled users — because "is it accessible" is a question no single person can answer yes to, and an unqualified confirmation is one that cannot be supported.
- Option C: Say it meets WCAG 2.2 AA.
- Option D: Decline to confirm.

**Most effective: B. Least effective: A.**

**Explanation:** B gives the service owner an accurate picture for the accessibility statement they are legally required to publish, and names the largest gap — testing with disabled users, which nothing else substitutes for. A is least effective: it converts partial testing into an organisational claim that cannot be supported.

### Administration tips

- Score for whether a candidate routes an accessibility or design trade-off to its accountable owner, with real options and a plainly stated consequence, rather than resolving it unilaterally or deferring it silently.
- Note whether a candidate seeks the underlying intent or cost behind a request or a colleague's position before agreeing or disagreeing with it.
- Watch for whether escalation is used as a genuine last resort rather than a first move on a resolvable disagreement.
- Score for whether feedback to a junior colleague or another team includes the reason, not only the correction.
- Note whether a candidate states precisely what has and has not been done or tested, rather than offering an unqualified or overreaching confirmation.

### Common pitfalls to watch for when scoring

- Crediting a response that defers a known accessibility barrier to a later, unspecified point.
- Missing when a candidate silently substitutes their own decision for what was actually asked, without telling the requester.
- Rewarding an answer that cites a standard or policy in place of a substantive, honest answer to a cost or trade-off question.
- Accepting escalation of a routine technical disagreement before a direct conversation is attempted.
- Missing when a candidate gives an unqualified confirmation (e.g. "it is accessible") that overstates what was actually tested.

## Conclusion

This guide has worked through structural reasoning about markup and failure modes, performance diagnosis distinguishing lab from field evidence, and error checking against accessibility, design and definition-of-done standards; performance and accessibility arithmetic weighted correctly by session volume, scaled from samples, and framed by task-blocking severity rather than raw byte or percentage size; the discipline of reading accessibility standards, design system documentation and specifications at the precision their modal verbs and exemption clauses demand; and the situational judgement calls that define this role level — making an accessibility or design trade-off visible to its owner early, resolving cross-discipline disagreement through underlying intent and cost rather than authority, and coaching through the reason rather than the correction.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around who owns a decision and what evidence actually supports a conclusion. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
