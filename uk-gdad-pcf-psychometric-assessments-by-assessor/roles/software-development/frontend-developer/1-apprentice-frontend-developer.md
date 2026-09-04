# Apprentice Frontend Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for apprentice frontend developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and workplace behaviours that predict success in a role. For an apprentice frontend developer, that means practical, everyday thinking rather than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — HTML snippets, CSS class names, simple JavaScript, ticket boards, code review comments, and build steps — and decisions genuinely faced by someone spending most of their time learning: shadowing other developers, pairing on code and tests, writing simple user interfaces under direction, and building understanding of accessibility, web standards, and web performance.

At this level, the candidate is expected to design, code, test, correct and document simple user interfaces under the direction of others, follow team conventions exactly, and know when to ask for help. Nothing in this material assumes knowledge beyond apprentice level, and every item is grounded in the real day-to-day of the role.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Expect a wide range of prior test-taking exposure at this level — some candidates will have sat similar assessments before, others never — so brief every candidate on the format and offer the same ungraded warm-up before the timed sections begin. Score for method (working through rules or checklists systematically, checking every item rather than stopping early) as much as for the final answer, since that is the habit this material is designed to build. Use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact thinking skills this role uses every day, using realistic workplace materials — HTML snippets, CSS class names, simple JavaScript, ticket boards, code review comments, and build steps — rather than abstract puzzles.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

This is used for apprentice frontend developers because frontend work is detail work: a missing closing tag breaks a page, a class name that does not follow convention confuses the next developer, and a test that checks the wrong thing gives false confidence. The assessment measures whether a candidate can spot patterns, follow rules exactly, notice small errors, and think step by step.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (frontend developer)** and **Modern development standards**: naming conventions, folder structures, component templates, and the repeated shapes of HTML.
- **Logical deduction** maps to **Programming and build (frontend developer)** and **Web performance optimisation**: reasoning behind progressive enhancement — "if the browser does not support this feature, then the fallback must load."
- **Error checking** maps to **Accessibility** and **Programming and build (frontend developer)**: noticing a missing label, a skipped heading level, an image without alternative text.
- **Prioritisation** maps to **Leadership and guidance (frontend developer)** and **Community collaboration**: knowing what to do first, when to keep going, and when to ask for help.
- **Applied problem solving** maps to **User focus (frontend developer)** and **Prototyping**: taking a fuzzy situation, breaking it into steps, and reasoning towards a sensible next action.

### Practice questions

**Question 1 (easy) — Pattern recognition in CSS class names**

A team's CSS naming convention: every class starts with `app-`, then the component name, then two underscores and the element name if needed — e.g. `app-card`, `app-card__title`. A stylesheet contains: (1) `app-banner`; (2) `app-banner__heading`; (3) `app_banner__link`; (4) `app-banner__icon`. Ask which class name breaks the convention.

- A) Class 1
- B) Class 2
- C) Class 3
- D) Class 4

**Correct answer: C**

**Explanation:** Classes 1, 2 and 4 all start with `app-` and follow the pattern; class 3 starts with `app_banner` — an underscore where the hyphen should be. This tests checking a pattern character by character: in CSS, `app_banner__link` and `app-banner__link` are completely different names to the browser, so the style simply will not apply — a small difference with a real consequence.

**Question 2 (easy) — Logical deduction about progressive enhancement**

Team standard: "Every interactive feature must work without JavaScript, unless the team has agreed a documented exception." A developer says of a new postcode lookup feature: "This feature does not work without JavaScript." Ask which conclusion must be true.

- A) The team has broken its standard.
- B) The team has agreed a documented exception for this feature.
- C) Either the team has agreed a documented exception, or the standard has been broken.
- D) The feature should be rebuilt immediately.

**Correct answer: C**

**Explanation:** The standard is a rule with one allowed exception; the facts given do not establish whether that exception applies here, so neither A nor B is certain, and D is an action rather than a conclusion. This tests concluding only what is certain, before assuming a colleague has made a mistake — checking whether an exception was agreed comes before any accusation.

**Question 3 (easy) — Error checking heading levels**

Heading levels should not skip: `<h1>` can be followed by `<h2>`, `<h2>` by `<h3>`, and so on, but a page should not jump straight from `<h1>` to `<h3>`. Page outline: (1) `<h1>` Apply for a fishing licence; (2) `<h2>` Before you start; (3) `<h3>` What you will need; (4) `<h2>` How to apply; (5) `<h4>` Apply online. Ask which heading breaks the rule.

- A) Heading 2
- B) Heading 3
- C) Heading 4
- D) Heading 5

**Correct answer: D**

**Explanation:** Checking each step: `<h1>`→`<h2>` fine; `<h2>`→`<h3>` fine; `<h3>`→`<h2>` fine (moving back up starts a new section); `<h2>`→`<h4>` skips `<h3>` — the break. This tests checking each step in order rather than scanning the whole list at once, since skipped heading levels confuse screen reader users who navigate by headings.

**Question 4 (easy) — Prioritising the morning**

At 9:30am, four things are possible: (1) a pairing session at 10:00am, with a short ticket description to read beforehand; (2) an apprenticeship training quiz due Friday (today is Tuesday); (3) a typo noticed yesterday on a page the team owns, not yet reported; (4) unread newsletters in the inbox. Ask for the best thing to do first.

- A) Start the training quiz, because apprenticeship study always comes first.
- B) Read the ticket description, so the candidate is ready for the pairing session.
- C) Clear the inbox to concentrate later.
- D) Try to fix the typo before anyone notices.

**Correct answer: B**

**Explanation:** The pairing session is 30 minutes away and being unprepared wastes a colleague's time too — urgent and high impact together. This tests weighing urgency and impact on others jointly: the quiz has three days' slack, the typo should be raised with the team rather than fixed quietly and alone, and newsletters are never the priority.

**Question 5 (moderate) — Pattern recognition in a component library**

Component library pattern: each folder is named after its component and contains a template, style, and test file all named after the component (e.g. `button/` → `button.html`, `button.scss`, `button.test.js`). Folders: (1) `checkbox/` → `checkbox.html`, `checkbox.scss`, `checkbox.test.js`; (2) `radio/` → `radio.html`, `radio.scss`, `radios.test.js`; (3) `select/` → `select.html`, `select.scss`, `select.test.js`; (4) `textarea/` → `textarea.html`, `textarea.scss`, `textarea.test.js`. Ask which folder contains a file that breaks the pattern.

- A) Folder 1
- B) Folder 2
- C) Folder 3
- D) Folder 4

**Correct answer: B**

**Explanation:** Folder 2 is `radio`, but its test file is `radios.test.js` — an extra "s". This tests comparing each file name against its folder name one pair at a time rather than sweeping the list — many build tools find files by name pattern, so a mismatched name can mean a test silently never runs.

**Question 6 (moderate) — Logical deduction from a browser support table**

Browser support policy: (i) features on public pages must work in the two most recent versions of major browsers; (ii) an unsupported CSS feature requires a fallback; (iii) fallbacks must be tested before merging. A CSS feature is unsupported in one required browser; a fallback is written but not yet tested. Ask which statement must be true.

- A) The change can be merged now, because the fallback exists.
- B) The change cannot be merged yet.
- C) The CSS feature should be removed and only the fallback used.
- D) The browser support policy does not apply, because most browsers support the feature.

**Correct answer: B**

**Explanation:** Rule (ii) requires a fallback, which exists; but rule (iii) requires the fallback to be tested before merging, and it is not. This tests applying rules exactly as written, in full — not stopping once one condition is met — mirroring a code review where "almost meets the checklist" means "not yet ready".

**Question 7 (moderate) — Error checking a form snippet**

Rules: (i) every input needs a `<label>` linked by matching `for`/`id`; (ii) hint text goes in a separate element, not the `placeholder`; (iii) inputs collecting names need `autocomplete="name"`; (iv) label text must use sentence case. Code:
```
<label for="full-name">Full Name</label>
<div class="hint">As shown on your passport</div>
<input id="full-name" autocomplete="name" type="text">
```
Ask which rule is broken.

- A) Rule (i) — the label is not linked correctly
- B) Rule (ii) — hint text is in the wrong place
- C) Rule (iii) — the autocomplete attribute is missing
- D) Rule (iv) — the label is not in sentence case

**Correct answer: D**

**Explanation:** Rules (i)–(iii) are all met; the label reads "Full Name" instead of sentence case "Full name". This tests walking every rule in turn rather than stopping once several pass — a checklist habit for a first accessibility or code review.

**Question 8 (moderate) — Ordering build steps**

Build steps: install dependencies, compile Sass to CSS, run tests, deploy to staging. Rules: dependencies must be installed before anything else; tests must run after Sass compiles, since some tests check compiled CSS; deployment happens only if tests pass. Ask for the correct order.

- A) Install, test, compile, deploy
- B) Install, compile, test, deploy
- C) Compile, install, test, deploy
- D) Install, compile, deploy, test

**Correct answer: B**

**Explanation:** "Dependencies first" removes C; "tests after compile" removes A; "deploy only if tests pass" removes D — only install→compile→test→deploy satisfies all three rules. This tests using each rule to eliminate wrong answers rather than imagining the whole pipeline at once.

**Question 9 (moderate) — Applied problem solving on a broken page**

A page's footer styles are missing, but everything else looks fine. Known: footer styles live in `footer.scss`; every `.scss` file must be listed in `main.scss` to be compiled; the compiled CSS loads correctly (other styles work). Ask for the most likely cause to check first.

- A) The user's internet connection is slow.
- B) `footer.scss` is not listed in `main.scss`.
- C) The whole CSS file failed to load.
- D) The browser does not support CSS.

**Correct answer: B**

**Explanation:** Other styles working rules out C and D, and makes A irrelevant. The one fact fitting the evidence — footer styles specifically missing — is that `footer.scss` never made it into the compiled file. This tests eliminating causes the evidence contradicts and checking the most likely remaining one first.

**Question 10 (hard) — Multi-rule deduction about a code review**

Merge rules: (i) at least one developer approval; (ii) all automated tests passing; (iii) a change touching a form additionally needs an accessibility check; (iv) apprentice changes additionally need mentor approval. A change updates a form's error message, with: one junior developer approval, all tests passing, a completed accessibility check. Ask what is still missing before merging.

- A) Nothing — merge now.
- B) A second developer approval.
- C) Mentor approval.
- D) An accessibility check.

**Correct answer: C**

**Explanation:** Rules (i)–(iii) are all satisfied; rule (iv) applies because this is an apprentice's change, and mentor approval is not in the list given. This tests not stopping after three rules pass — rule (iv)'s "additionally" stacks on top of the general rules rather than replacing them.

**Question 11 (hard) — Scheduling with several constraints**

Booking three activities next week, one morning each: a pairing session (P), an accessibility workshop (W), protected study time (S). Rules: (i) the mentor is free only Monday and Thursday mornings and must attend P; (ii) W is offered only Tuesday or Wednesday; (iii) the study morning is Wednesday only, and study must come after pairing, since the study topic follows from the pairing session; (iv) at most one activity per morning. If W is booked for Tuesday, ask which day P must be.

- A) Monday
- B) Tuesday
- C) Wednesday
- D) Thursday

**Correct answer: A**

**Explanation:** S must be Wednesday (rule iii); P must be Monday or Thursday (rule i); since S must come after P, P on Thursday would put Wednesday's study before it — invalid — so P must be Monday. This tests anchoring the least flexible items first (study had only one possible day) and letting ordering rules eliminate the rest.

**Question 12 (hard) — Applied problem solving with a performance budget**

A performance budget caps a page at 500 KB; it currently totals 480 KB. Adding a decorative image (90 KB) and a new font weight (60 KB) is proposed. Two savings are available: compressing an existing hero image (120 KB) and removing an unused script (35 KB). Ask for the minimum action needed to stay within budget if both new items are added.

- A) Nothing — the additions fit within the budget.
- B) Apply the image compression only.
- C) Remove the unused script only.
- D) Apply both the compression and the script removal.

**Correct answer: D**

**Explanation:** New total 480+90+60=630 KB, requiring at least 130 KB saved. Compression alone gives 510 KB (still over); script removal alone gives 595 KB (over); both together give 475 KB (under). This tests computing the exact new total and required saving rather than accepting an option that "feels" close enough — a performance budget is a hard limit.

### Administration tips

- Score for whether the candidate checks a pattern or rule character by character rather than skimming for a general match.
- Note whether the candidate applies every stated rule in full, including the last one, rather than stopping once several pass.
- Watch for whether the candidate concludes only what a set of facts guarantees, resisting the urge to assume the more likely branch.
- Score scheduling items for whether the candidate anchors the least flexible constraint first.
- Note whether the candidate computes an exact figure (a budget, a required saving) rather than judging by an approximate feel.

### Common pitfalls to watch for when scoring

- Crediting a near-miss match (e.g. `radio`/`radios`, `app-`/`app_`) as compliant without a character-by-character check.
- Missing when a candidate stops a checklist after several rules pass, without checking the last one.
- Rewarding a conclusion that asserts more than the given facts guarantee (choosing one branch of a genuine disjunction).
- Accepting an answer that "should do" or "feels close enough" to a stated numeric limit rather than the exact figure.
- Missing when a candidate proposes an action rather than answering what must be true, in a deduction item.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate works with numbers in realistic workplace situations — percentages, averages, ratios, and reading tables and charts, rather than advanced mathematics.

Typical format: an online, timed test lasting 20 to 30 minutes with 15 to 25 questions, each showing data — a table, a chart, or a short description with numbers — followed by a question about it. A calculator is normally permitted.

This is used for apprentice frontend developers because frontend work is quietly full of numbers: page weights in kilobytes, performance budgets, test pass rates, accessibility issue counts by severity, and browser or device usage percentages that drive what must be supported.

### How this assessment maps to the role

- **Percentages and proportions** map to **Web performance optimisation**: page-weight budgets, file-size savings from compression, percentage changes in load time.
- **Reading tables and charts** maps to **User focus (frontend developer)** and **Communicating information**: device usage, task completion rates, error counts.
- **Averages and simple rates** map to **Programming and build (frontend developer)**: test suites, build times, and bug counts.
- **Ratios and comparisons** map to **Accessibility**: colour contrast expressed as a ratio (e.g. 4.5:1), and audit results comparing issue counts.
- **Careful, step-by-step arithmetic** maps to **Modern development standards** and **Community collaboration**: checking working before sharing it.

### Practice questions

**Question 1 (easy) — Percentage of a page-weight budget**

A performance budget allows 500 KB per page; the page currently totals 400 KB. Ask what percentage of the budget is used.

- A) 40%
- B) 75%
- C) 80%
- D) 90%

**Correct answer: C**

**Explanation:** 400 ÷ 500 = 0.8 = 80%. This tests basic percentage calculation with a quick sense-check: 400 is most, but not nearly all, of 500, ruling out 40% and 90% on sight.

**Question 2 (easy) — Counting test results**

A test suite has 250 automated tests; after a change, 240 pass. Ask how many fail, and the pass rate.

- A) 10 fail; 96% pass
- B) 10 fail; 94% pass
- C) 15 fail; 96% pass
- D) 40 fail; 84% pass

**Correct answer: A**

**Explanation:** Failures 250−240=10; pass rate 240÷250=96%. This tests computing both parts of a two-part answer rather than matching only the first number found — the wrong options deliberately pair one correct figure with one incorrect one.

**Question 3 (easy) — Reading a device usage table**

Visits last month: Mobile 60,000; Desktop 30,000; Tablet 10,000. Ask what fraction of all visits came from mobile.

- A) One half
- B) Three fifths
- C) Two thirds
- D) Three quarters

**Correct answer: B**

**Explanation:** Total 100,000; 60,000÷100,000 = 3/5. This tests forming a fraction from a table correctly — and, in a strong answer, recognising that three-fifths of users on mobile makes testing on a mobile-sized screen essential, not optional.

**Question 4 (easy) — Average build time**

Five build runs: 40, 45, 50, 55, 60 seconds. Ask for the mean.

- A) 45 seconds
- B) 48 seconds
- C) 50 seconds
- D) 52 seconds

**Correct answer: C**

**Explanation:** Sum 250 ÷ 5 = 50. This tests basic averaging, and in a strong answer, noticing the useful shortcut that evenly spaced values' mean is the middle value.

**Question 5 (moderate) — Percentage change in load time**

A page's load time improved from 4.0 seconds to 3.0 seconds. Ask for the percentage improvement.

- A) 10%
- B) 25%
- C) 33%
- D) 75%

**Correct answer: B**

**Explanation:** 1.0 ÷ 4.0 (the original) = 25%. The trap is dividing by the new value (1.0÷3.0≈33%, option C). This tests anchoring percentage change on the original value — the number a candidate should be able to identify by asking "compared with what?"

**Question 6 (moderate) — Accessibility audit table**

Issue counts across four pages: Start (0 critical, 4 minor); Form (3 critical, 5 minor); Confirmation (1 critical, 2 minor); Guidance (2 critical, 9 minor). Ask which page has the most issues in total, and how many critical issues exist across the service.

- A) Guidance page; 6 critical issues
- B) Form page; 6 critical issues
- C) Guidance page; 5 critical issues
- D) Form page; 8 critical issues

**Correct answer: A**

**Explanation:** Totals: Start 4, Form 8, Confirmation 3, Guidance 11 — Guidance highest. Critical issues total: 0+3+1+2=6. This tests answering exactly the two questions asked rather than blurring "most issues" with "most critical issues" — the Form page has the most critical issues, which is the trap in option B.

**Question 7 (moderate) — Sprint task ratio**

24 tasks total: 15 done, 6 in progress, the rest not started. Ask for the ratio of done to not-started tasks, in simplest form.

- A) 15:6
- B) 5:2
- C) 5:1
- D) 8:1

**Correct answer: C**

**Explanation:** Not started = 24−15−6=3; 15:3 simplifies to 5:1. This tests identifying exactly which two quantities are being compared and computing any missing value from the total first — option B is the done:in-progress ratio, a trap for grabbing the wrong pair.

**Question 8 (moderate) — File size savings from compression**

Three images of 300, 200, and 100 KB are compressed, each reduced by 40%. Ask for the total size after compression.

- A) 240 KB
- B) 360 KB
- C) 400 KB
- D) 440 KB

**Correct answer: B**

**Explanation:** Keeping 60% of the total 600 KB gives 360 KB. This tests the "keep the remainder" technique against the trap of computing the saving (600×0.4=240 KB, option A) and mistaking it for the remaining size.

**Question 9 (moderate) — Browser support percentages**

Browser shares: A 55%, B 25%, C 12%, D 5%, others 3%. Policy: fully support any browser used by at least 5% of visitors. Last month had 80,000 visitors. Ask how many visitors used unsupported browsers.

- A) 2,400
- B) 4,000
- C) 6,400
- D) 14,400

**Correct answer: A**

**Explanation:** "At least 5%" includes Browser D at exactly 5%, leaving only "others" (3%) unsupported: 3%×80,000=2,400. This tests reading a threshold word ("at least" includes the boundary) precisely — misreading it as "more than" produces option C.

**Question 10 (hard) — Performance score trend**

Monthly performance scores: April 60, May 66, June 72, July 78. Ask in which month, if the fixed monthly increase continues, the score first reaches at least 95.

- A) September
- B) October
- C) November
- D) December

**Correct answer: B**

**Explanation:** The score rises 6 points a month: August 84, September 90, October 96 — the first value at or above 95. This tests listing actual projected values rather than a quick division that risks a fencepost error (17÷6≈3 months rounds to September, the common wrong answer).

**Question 11 (hard) — Combining percentages from a two-way table**

A usability test had 40 participants: 25 mobile (80% completed), 15 desktop (60% completed). Ask how many failed to complete, and the overall completion rate.

- A) 11 failed; 72.5% overall
- B) 11 failed; 70% overall
- C) 9 failed; 77.5% overall
- D) 14 failed; 65% overall

**Correct answer: A**

**Explanation:** Mobile: 5 failed (20 completed); desktop: 6 failed (9 completed); total 11 failed, 29/40=72.5%. This tests computing each group separately rather than averaging the two percentages directly (80+60)/2=70%, option B — the mobile group is larger, so it should pull the overall rate above the midpoint.

**Question 12 (hard) — Contrast ratio and audit arithmetic**

Text style contrast ratios (threshold: at least 4.5:1): body 4.6:1, hint 3.9:1, link 4.5:1, button 7.2:1. Fixing a failing style takes 30 minutes. Ask how many styles fail, and the total fix time.

- A) 1 style fails; 30 minutes
- B) 2 styles fail; 60 minutes
- C) 2 styles fail; 30 minutes
- D) 3 styles fail; 90 minutes

**Correct answer: A**

**Explanation:** Only hint text (3.9:1) fails; link text at exactly 4.5:1 passes, since "at least" includes the boundary. This tests applying a threshold consistently at its boundary value — treating 4.5:1 as a fail (option B) is the common misreading.

### Administration tips

- Score for whether the candidate identifies which value is the "original" or denominator before computing a percentage change.
- Note whether the candidate computes group figures separately before combining, rather than averaging percentages from unequal groups.
- Watch for whether a stated threshold ("at least") is applied consistently at its boundary value.
- Score for whether both parts of a two-part question (a count and a rate, a total and a critical subset) are answered correctly and separately.
- Note whether the candidate lists projected values in a trend question rather than relying on a quick division prone to a fencepost error.

### Common pitfalls to watch for when scoring

- Crediting a percentage change computed against the new value instead of the original.
- Missing an unweighted average of two percentages from groups of different sizes.
- Rewarding a boundary value ("at least 5%", "at least 4.5:1") treated as failing the threshold.
- Accepting an answer to only one part of a two-part question.
- Missing a fencepost error in a trend-projection item.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands written information and reasons from it — a passage (a coding standard, an accessibility policy extract, an email from a mentor, a sprint note) followed by statements to classify True (the passage says or clearly implies it), False (the passage contradicts it), or Cannot say (the passage gives too little information either way).

Typical format: an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The candidate must judge each statement using only the passage — outside knowledge, even if correct, must be set aside.

This is used for apprentice frontend developers because so much of the work arrives as text: tickets, user stories, code review comments, coding standards, and messages from designers and stakeholders. Misreading a ticket wastes a day; misreading a standard ships a defect.

### How this assessment maps to the role

- **Reading comprehension** maps to **Communicating information**: understanding exactly what a stakeholder's words do and do not say.
- **True/false/cannot-say discipline** maps to **Programming and build (frontend developer)**: if a ticket does not specify a behaviour, the professional response is to ask, not assume.
- **Understanding rule language** maps to **Modern development standards** and **Accessibility**: reading modal verbs — "must" (required), "should" (recommended), "may" (optional) — at full precision.
- **Inference** maps to **User focus (frontend developer)**: working out what clearly follows from a user story, and what does not.
- **Judging clear writing** maps to **Community collaboration** and **Prototyping**: recognising writing others can act on.

### Practice questions

**Question 1 (easy) — Reading a coding standard**

Passage: "All new pages must be built using the team's component library. Existing pages should be migrated to the component library when they are next updated. Custom components may be created where the library has no suitable component, and any custom component must be reviewed by a senior developer before use."

Statement: "A new page may be built without using the component library if the developer prefers their own approach."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** New pages "must" use the library, with no exception for personal preference; the only flexibility is custom components where the library has no suitable option, and even then a senior review is required. This tests comparing the strength of language in the statement against the passage — "must" versus "may... if preferred" is a direct contradiction.

**Question 2 (easy) — An email from a mentor**

Passage: "Hi — great work on the banner component this week. Before our session on Thursday, please read the accessibility guidance I linked, especially the section on focus states. We'll pair on adding keyboard support to the banner. Don't worry if the guidance feels dense — we'll go through it together. Thanks, Priya."

Statement: "Priya expects the apprentice to add keyboard support to the banner before Thursday."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The only thing due before Thursday is reading the guidance; keyboard support is described as something to pair on together on Thursday itself. This tests catching a statement that reuses the passage's own words but changes the timing — matching words are not matching meaning.

**Question 3 (easy) — A sprint note**

Passage: "Sprint 14 goal: complete the question pages for the licence application. The team finished 18 of the 20 planned tasks. The two remaining tasks concern error message wording and will move to Sprint 15. User research on the completed pages is scheduled for the first week of Sprint 15."

Statement: "The team completed most of its planned tasks in Sprint 14."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** 18 of 20 is clearly "most" — 90%. This tests committing to True when a passage clearly and directly supports a statement, rather than defaulting to "cannot say" out of caution.

**Question 4 (easy) — An accessibility policy extract**

Passage: "Our service must meet the WCAG 2.2 AA standard. Automated accessibility checks run on every code change. Automated checks catch some, but not all, accessibility issues; manual testing is therefore carried out before each major release."

Statement: "Automated checks catch every accessibility issue before release."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states directly that automated checks catch "some, but not all" issues. This tests catching a quantity word ("some" vs "all") that flips the answer, and in a strong answer, recognising that automated checks are a floor, not a ceiling.

**Question 5 (moderate) — A progressive enhancement explainer**

Passage: "Progressive enhancement means building the core of a service with HTML first, so it works for everyone, then adding CSS for presentation and JavaScript for enhanced behaviour. If the JavaScript fails to load or run, users can still complete their task using the HTML core. Some enhancements, such as an autocomplete suggestion list, improve convenience but are not required to complete the task."

Statement: "Under progressive enhancement, a user whose browser fails to run JavaScript will be unable to complete their task."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states the opposite directly. This tests setting aside real-world experience with sites that do not follow progressive enhancement, and answering strictly from what this passage describes.

**Question 6 (moderate) — Cannot-say discipline with a ticket**

Passage (ticket): "As a user applying for a parking permit, I need to see clear error messages when I miss a required field, so that I can fix mistakes and complete my application. Acceptance criteria: error messages appear next to the relevant field; error messages are announced to screen reader users; the error summary at the top of the page links to each field with an error."

Statement: "The parking permit form currently shows unclear error messages."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The ticket describes the required future state, never the current one. This tests resisting a plausible-but-unstated inference — a ticket asking for clear errors does not establish that current errors are unclear.

**Question 7 (moderate) — Inference from a performance report**

Passage: "This month's performance report: the start page's load time improved after we compressed its images. The form page's load time did not change. The confirmation page was not measured this month because it was being rebuilt. All measurements were taken on a simulated slow mobile connection."

Statement: "The form page's images were compressed this month."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage says only that the form page's load time did not change, not whether its images were compressed. This tests the distinction between what was measured and what happened — a report's silence is not evidence either way.

**Question 8 (moderate) — Judging clear writing**

Four draft code review comments, tested against the team's guidance that feedback should be specific, kind, and actionable: (1) "This is wrong."; (2) "Consider renaming `data2` to `filteredResults` so the variable's purpose is clear — happy to pair on it."; (3) "I would never write it like this, but fine."; (4) "There might be some naming issues somewhere in this file." Ask which best follows the guidance.

- A) Comment 1
- B) Comment 2
- C) Comment 3
- D) Comment 4

**Correct answer: B**

**Explanation:** Comment 2 names the exact variable, proposes a concrete change, explains the benefit, and offers help — specific, kind, and actionable. This tests judging text against explicitly stated criteria one at a time, rather than by overall tone.

**Question 9 (moderate) — A standards document with modal verbs**

Passage: "Developers must not commit secrets, such as passwords or API keys, to the code repository. Developers should write a descriptive message for every commit. Developers may squash related commits before merging. Branch names should follow the pattern `feature/short-description`."

Statement: "A developer who merges without squashing their related commits has broken this standard."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** "May" grants permission, not a duty; choosing not to squash is within the standard. This tests distinguishing "must not" (prohibition), "should" (recommendation), and "may" (pure option) precisely — the vocabulary standards documents use deliberately.

**Question 10 (hard) — A dense policy extract**

Passage: "Services must publish an accessibility statement. The statement must be reviewed at least annually, and additionally whenever a significant change is made to the service. A statement review need not result in changes to the statement, but the review itself must be recorded. Where a review identifies inaccuracies, the statement must be corrected within 14 days of the review."

Statement: "A service that reviewed its accessibility statement eleven months ago, and has made no significant changes since, is currently in breach of this policy."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Eleven months is within the "at least annually" window, and no significant change has triggered an additional review. This tests distinguishing urgency ("should review soon") from an actual breach of a stated obligation.

**Question 11 (hard) — Multiple statements about one passage**

Passage: "Open by default: our code is published in public repositories unless there is a specific reason not to, such as security-sensitive configuration. Publishing code helps other teams reuse our work and helps the public see how their services are built. Before code is made public, the team checks it for secrets and personal data. Code that cannot be published is documented internally, with the reason recorded."

Statement: "All of the team's code is published in public repositories."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage's first sentence contains its own exception ("unless there is a specific reason not to"), and the final sentence confirms some code cannot be published. This tests spotting "unless"/"except" clauses before accepting a statement that converts a default into an absolute ("all", "always").

**Question 12 (hard) — Inference and tone in a stakeholder message**

Passage (message from a service designer): "Thanks for the prototype changes. In tomorrow's research sessions we're testing whether users understand the new eligibility questions, so please don't change any wording tonight. Layout tweaks are fine if anything's broken on mobile. We have five participants booked, including two screen reader users, so could you double-check the focus order on the questions page before 9am?"

Statement: "The designer considers testing the wording with users more important tomorrow than having a polished layout."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The wording is explicitly frozen for the research session, while layout changes are permitted only if something is broken — implying wording is the priority. This tests drawing a conclusion the text clearly implies without overreaching into a claim it does not support (e.g. that layout is unimportant, when focus order for screen reader users is explicitly still being checked).

### Administration tips

- Score for whether the candidate judges each statement strictly against the passage, resisting outside knowledge of how things "usually" work.
- Note whether the candidate catches modal verbs (must, should, may), quantifiers (all, some, none), and exception words (unless, except) that decide the answer.
- Watch for whether the candidate distinguishes what was measured or stated from what merely seems plausible.
- Score for whether the candidate commits to True or False when a passage clearly supports or contradicts a statement, rather than defaulting to Cannot say out of excessive caution.
- Note whether an inference is drawn at the strength the text actually supports, neither stronger nor weaker.

### Common pitfalls to watch for when scoring

- Crediting a statement judged from outside knowledge rather than the passage alone.
- Missing when a candidate treats a plausible but unstated inference as established fact.
- Rewarding a statement that converts a default-with-exceptions into an absolute, unchallenged.
- Accepting "should" and "must" as interchangeable in a candidate's reasoning.
- Missing when a candidate confuses "not measured" with "did not happen".

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace scenarios and asks the candidate to judge how effective different responses would be. There is no arithmetic or logic puzzle — the effective answers reflect good professional judgement for someone at apprentice level, scored against the behaviours UK government digital organisations value: user focus, openness, collaboration, asking for help at the right time, honesty about mistakes, and care for accessibility and inclusion.

Typical format: an online test of 20 to 40 minutes with 10 to 20 scenarios, asking for the most effective response, the least effective, a ranking, or a rating.

For an apprentice, this is arguably the most important of the four assessments, since the first year is full of judgement calls that have nothing to do with code — when to ask for help, how to own a mistake, how to respond to feedback that stings.

### How this assessment maps to the role

- **Asking for help and escalating well** maps to **Programming and build (frontend developer)**: working under direction means knowing when stuck too long, and bringing what has been tried to the conversation.
- **Responding to feedback** maps to **Leadership and guidance (frontend developer)** and **Community collaboration**: whether feedback is treated as a gift or a threat.
- **Honesty about mistakes** maps to **Modern development standards** and team good practice: fixing mistakes fast and blamelessly starts with speaking up early.
- **User and accessibility awareness** maps to **Accessibility** and **User focus (frontend developer)**: remembering the user, especially users with accessibility needs, when a deadline pushes the other way.
- **Working with others** maps to **Communicating information**, **Community collaboration**, and **Prototyping**: pairing, discussing options, and working in the open.

### Practice questions

**Question 1 (easy) — Stuck on a ticket**

Working on a small CSS change for two hours (expected: thirty minutes), several approaches tried, documentation read, but the layout still breaks on small screens. A mentor is at their desk. Ask for the most effective response.

- A) Keep trying alone — asking for help after only two hours would look bad.
- B) Ask the mentor for help, showing what has been tried so far.
- C) Move the ticket back to the backlog without telling anyone and pick up a different task.
- D) Post in the team channel that the ticket is impossible and should be redesigned.

**Correct answer: B**

**Explanation:** Asking after a genuine attempt, and showing what was tried, turns the conversation from "do it for me" into "teach me" and shows respect for a colleague's time. This tests the pattern of struggling briefly, gathering evidence of what was tried, then asking the nearest appropriate person — option A wastes time protecting an image nobody is grading, C hides a problem, and D escalates publicly with an unsupported conclusion.

**Question 2 (easy) — Having broken something**

A small merged change, which passed all team checks, is discovered the next morning to have broken the footer links; nobody else knows yet. Ask for the most effective response.

- A) Quietly fix it and say nothing — no harm done if it's fixed quickly.
- B) Tell the mentor or team straight away, explain what happened, and offer to fix it with support.
- C) Wait to see whether anyone else notices before deciding what to do.
- D) Explain to the person who noticed that the checks passed, so it isn't really a fault.

**Correct answer: B**

**Explanation:** Speaking up immediately makes the problem visible so it is fixed properly, shows honesty, and invites support. This tests recognising that a quiet fix might miss a second symptom, and that hiding a mistake and later being found out damages trust far more than the original mistake — while D confuses blame with a genuinely useful fact (that the checks have a gap) used defensively instead of constructively.

**Question 3 (easy) — Receiving tough feedback**

A code review leaves several critical comments, including "this duplicates a component we already have — please use `app-notification` instead," after two days spent building an alternative version. Ask for the most effective response.

- A) Reply explaining why the built version is better, to defend the two days spent.
- B) Delete the pull request and start again without replying.
- C) Thank the reviewer, ask any questions needed to understand the existing component, and make the change.
- D) Ask a mentor to tell the reviewer to be less critical of apprentices.

**Correct answer: C**

**Explanation:** Thanking the reviewer keeps the relationship warm, asking questions turns the review into teaching, and making the change delivers value. This tests treating a review as information that saves the team from duplication, rather than defending sunk cost (A), over-correcting by discarding the conversation (B), or escalating normal, professionally worded feedback as unkindness (D).

**Question 4 (easy) — Pairing gone quiet**

An hour into a two-hour pairing session with a developer who types fast and explains little, the apprentice has mostly watched and is now lost. Ask for the most effective response.

- A) Keep watching and nod along — interrupting would be rude.
- B) Say the session has become hard to follow, and ask to drive (type) for a while to learn by doing.
- C) Open a laptop and quietly work on the training course instead.
- D) End the session early, citing another meeting.

**Correct answer: B**

**Explanation:** Naming the problem honestly and proposing a concrete fix — swapping the driver role, standard pairing practice — is direct and constructive. This tests recognising that most colleagues respond well to this request, while A wastes the second hour and C and D are quiet withdrawals that leave the underlying pairing problem unaddressed.

**Question 5 (moderate) — Deadline pressure versus accessibility**

A page for a ministerial announcement is due tomorrow; new images lack alternative text, which team standards require. The lead developer says: "No time — we'll add alt text next sprint. It's just decorative stuff anyway." One image is unclear whether it is genuinely decorative or shows important information. Ask for the most effective response.

- A) Say nothing — the lead developer has made the call.
- B) Add the alt text after hours without telling anyone.
- C) Point out the informative-looking image specifically, suggest at least that one needs alt text before release, and offer to write it now.
- D) Report the lead developer to a line manager for planning to break accessibility standards.

**Correct answer: C**

**Explanation:** Narrowing the disagreement to the specific image that matters, explaining why, and offering to do the work converts an objection into help. This tests holding an accessibility line politely and proportionately, at the candidate's own level — A confuses hierarchy with correctness, B hides the disagreement while fixing one instance, and D escalates formally before trying the direct, friendly route.

**Question 6 (moderate) — A confusing user story**

A ticket reads "Update the date input so it works properly," with no acceptance criteria and at least three possible interpretations; the business analyst who wrote it is in meetings all morning. Ask for the most effective response.

- A) Guess the most likely meaning and build it.
- B) Post a short, specific question to the analyst asynchronously, listing the three interpretations, and work on another ticket until they reply.
- C) Wait at the analyst's desk until they come out of meetings.
- D) Ask a mentor to rewrite the ticket, since apprentices shouldn't work from unclear tickets.

**Correct answer: B**

**Explanation:** Listing named interpretations converts a vague question into a thirty-second multiple-choice answer for the analyst, while switching to another ticket keeps the sprint moving. This tests replying with named options rather than an open question, and continuing to deliver meanwhile — A risks building the wrong thing, C spends the morning waiting, and D outsources a conversation the candidate is capable of having.

**Question 7 (moderate) — Credit for the candidate's work**

At a show-and-tell, a developer demonstrates a component built mostly during pairing sessions with the apprentice, saying "I put this together last week" without mentioning them. Ask for the most effective response.

- A) Interrupt the demo to correct the record in front of everyone.
- B) Say nothing and quietly resent it.
- C) Afterwards, mention privately that being credited for shared work would be appreciated, assuming good intent.
- D) Email the head of the team explaining that the work was stolen.

**Correct answer: C**

**Explanation:** A private, prompt, good-faith request usually resolves the issue, since careless shorthand ("I put this together") is far more common than deliberate credit-taking. This tests a proportionate, low-drama response — A makes a small wrong into a public scene, B corrodes the relationship silently, and D escalates to the top with inflammatory framing before a two-minute conversation is tried.

**Question 8 (moderate) — Asked to skip the tests**

A colleague hurrying before their holiday asks: "Can you merge my branch this afternoon? The tests keep failing on something unrelated — just skip them, it'll be fine." Merging without passing tests is against team practice. Ask for the most effective response.

- A) Do it — the colleague is more senior and says the failures are unrelated.
- B) Refuse and report them to the team lead for asking.
- C) Decline to skip the tests, and offer to help look at the failures or ask a mentor how the team handles "unrelated" test failures.
- D) Say yes, but secretly not do it, so the problem goes away when the colleague leaves.

**Correct answer: C**

**Explanation:** Declining the rule-break while offering two constructive paths — investigating the failures, or involving a mentor — holds the standard while staying helpful. This tests not deferring to seniority over an agreed practice (A), not escalating over a request a conversation could resolve (B), and avoiding dishonesty in either direction (D).

**Question 9 (moderate) — Spotting a struggling peer**

Another apprentice, withdrawn lately, confides privately: "I'm completely lost on my project, my mentor is always busy, and I'm scared to say anything in case they end my apprenticeship." Ask for the most effective response.

- A) Reassure them that everyone feels lost and it will pass.
- B) Listen, share that asking for help is normal and expected, and encourage them to talk to their mentor or apprenticeship coordinator — offering to help plan what to say.
- C) Tell their mentor directly so the problem gets fixed.
- D) Advise them to keep quiet and quietly search for a different job.

**Correct answer: B**

**Explanation:** Listening first, normalising help-seeking, and guiding towards the proper channels while leaving the choice and the telling to them respects both empathy and their agency. This tests supporting a peer without breaking a confidence they shared privately (C breaks that trust) and without leaving them isolated (A is empty reassurance, D is corrosive advice).

**Question 10 (hard) — Research findings that were not wanted**

Two weeks were spent building an animated progress indicator; usability testing found several participants, including a screen reader user and a participant with a vestibular condition, struggled with it, and the researcher recommends removing the animation. Ask for the most effective response.

- A) Argue that two weeks of work shouldn't be discarded for a small sample of participants.
- B) Accept the findings, ask the researcher questions to understand the problems fully, and work with the interaction designer on a simpler, accessible version — salvaging what still fits.
- C) Suggest keeping the animation but adding a setting so users can turn it off if they complain.
- D) Accept the change but privately decide research sessions are unfair to developers.

**Correct answer: B**

**Explanation:** Accepting the evidence, understanding it fully, and collaborating on a fix honours the multidisciplinary approach the role expects. This tests recognising that consistent problems in a small usability sample are a real signal, not noise — A weighs personal effort against user harm, C keeps harm as the default and pushes the burden onto affected users, and D complies outwardly while rejecting the principle.

**Question 11 (hard) — An impossible estimate**

In sprint planning, asked how long a small component will take, with no prior experience of anything similar, while a senior developer whispers "just say two days." Ask for the most effective response.

- A) Say "two days" — the senior developer knows best.
- B) Say "I don't know," and stop there.
- C) Say a similar component has not been built before, give a range with reasoning, and offer to timebox a half-day investigation to firm the estimate up.
- D) Ask for the component to be assigned to someone more experienced instead.

**Correct answer: C**

**Explanation:** Being honest about inexperience while still offering a reasoned range and a standard technique — a timebox spike — gives the planner something usable. This tests honesty combined with usefulness — A borrows someone else's unverified number, B is honest but unhelpful, and D retreats from an appropriate growth opportunity.

**Question 12 (hard) — Least effective: the open-source shortcut**

Team standard: code must be open by default and reusable, and dependencies must be checked before adoption. An unmaintained third-party script (no licence file, last updated years ago) would solve a ticket instantly. Ask which response would be least effective among: (A) ask a mentor whether the team has an approved way to solve this, mentioning the script found; (B) copy the script's code into the project without attribution, since it is a small file; (C) look for an equivalent in the team's component library or a well-maintained library the team already uses; (D) post in the team channel asking if anyone has solved this before.

- A) Option A
- B) Option B
- C) Option C
- D) Option D

**Correct answer: B**

**Explanation:** Copying code with no licence file creates a genuine compliance risk, and doing so without attribution hides its origin, making it impossible to check for security issues or track upstream fixes — while also bypassing the team's stated dependency checks. This tests spotting the option with irreversibility, hidden information, and broken agreed practice together, against three options (A, C, D) that all use the team's collective knowledge before adopting outside code.

### Administration tips

- Score for whether the candidate's response involves appropriate support (asking with evidence, offering to help, involving a mentor) rather than acting entirely alone.
- Note whether a response fixes the immediate problem, protects the relationship, and improves things for next time — strong answers tend to do more than one of these.
- Watch for whether the candidate chooses silence, secrecy, or public confrontation, all of which cluster among weaker responses.
- Score for whether the candidate distinguishes seniority from correctness — deference to a senior colleague is never by itself a reason to skip a standard.
- Note whether details placed deliberately in a scenario (a specific user detail, a missing licence file) are used in the response.

### Common pitfalls to watch for when scoring

- Crediting a response that chooses silence over speaking up about a problem, however politely intended.
- Missing when a candidate defers to seniority as a substitute for holding an agreed standard.
- Rewarding escalation attempted before a direct, kind conversation is tried.
- Accepting a quiet, after-the-fact fix that leaves the underlying problem or disagreement unaddressed.
- Missing when a candidate defends sunk cost (time already spent) against clear user evidence or an existing reusable component.

## Conclusion

This guide has worked through pattern and rule checking in CSS, HTML and build pipelines, applying rules exactly as written without adding or removing conditions, and eliminating options systematically in scheduling and multi-rule deduction; percentages, ratios, weighted averages and threshold reading across page weights, test results, and accessibility audits; the discipline of judging True, False and Cannot say strictly from a passage, distinguishing modal verbs and quantity words; and the situational judgement calls that define the apprentice stage — asking for help with evidence of what has been tried, owning a mistake honestly and promptly, holding an accessibility line proportionately, and responding to feedback and to a struggling peer with care rather than either silence or overreaction.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward method and reasoning quality as much as the final choice, and this level in particular benefits from seeing exactly where a checklist or a reading habit broke down. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
