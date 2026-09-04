# Junior Accessibility Specialist - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for junior accessibility specialist. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and workplace judgement that predict success in a role. For a junior accessibility specialist, that means the material is not abstract brain-teasers with no connection to the job: the best assessments use materials the role genuinely handles — automated accessibility scan results, WCAG success criteria, simple HTML snippets, test scripts, and messages from a team — and decisions the role genuinely makes, such as spotting a missing alt attribute, following a test script carefully under supervision, or knowing when to ask for help.

A junior accessibility specialist learns on the job by assisting with accessibility testing, works under supervision, uses different types of testing, and is building knowledge of standards, legislation, and basic HTML, CSS, and JavaScript. The role also brings the voice of disabled users into a team's work, one of the most important things anyone in government digital services can do.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Expect a wide range of prior exposure to formal testing and to accessibility standards at this level — nobody applying for a junior role is expected to know everything, and the assessment is calibrated accordingly, with the strongest situational judgement responses often being ones where the candidate checks with a supervisor rather than acting alone. Score for whether the candidate reasons from the facts given rather than outside knowledge, and, in situational judgement, for whether a response reflects genuine junior-level behaviour — asking, escalating early, and keeping user impact central — rather than overreach.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — accessibility scan reports, snippets of HTML, WCAG checklists, test scripts, and simple page structures — that ask a candidate to reason quickly and carefully about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group of people at a similar level, often adaptive, with speed and accuracy reported separately.

For a junior accessibility specialist, cognitive ability is particularly relevant because the core daily work is careful, structured checking. Performing basic automated and manual checks on websites and documents means doing pattern recognition and error checking in miniature, dozens of times a day: does this image have alt text, does this heading order make sense, does this form label match its input.

### How this assessment maps to the role

- **Pattern recognition** maps to **Technical understanding (accessibility)**: performing basic automated and manual checks means spotting recurring accessibility issues — missing alt attributes, skipped heading levels, unlabelled form fields — across many pages, and noticing when something breaks the expected pattern.
- **Logical deduction** maps to **Technical understanding (accessibility)** and **Testing**: knowing some details of the standards and legislation, and knowing where to find more information, means reasoning correctly from a rule (such as a WCAG success criterion) to what it does and does not require in a specific case.
- **Error checking** maps to **Testing**: correctly executing test scripts under supervision depends on following each step exactly, noticing when an actual result differs from an expected result, and recording findings accurately so others can rely on them.
- **Prioritisation** maps to **Consultancy** and **Testing**: working under guidance to identify what advice or recommendations might be appropriate includes recognising which findings matter most.
- **Problem solving** maps to **Communicating information** and **User focus**: interpreting information and connecting findings back to user needs and user stories is decomposing a problem and communicating the pieces clearly.

### Practice questions

**Question 1 (easy) — Pattern recognition in scan results**

An automated accessibility checker across five pages of a service reports the count of "images missing alternative text" per page: Home 0, Start 0, Question 0, Check answers 7, Confirmation 0. Ask for the most sensible first thought about this pattern.

- A) The checker is broken, because most pages report zero.
- B) The check answers page is worth a closer look — it may use a different template or a recent change may have introduced the issue.
- C) All five pages need to be rebuilt from scratch.
- D) Seven missing alt texts is normal and needs no action.

**Correct answer: B**

**Explanation:** Four pages cluster at zero and one page stands out with seven issues — an outlier, and an outlier is a prompt to investigate, not a conclusion. This tests recognising a page that breaks a pattern and proposing a plausible cause (a different template, a recent change) rather than jumping to blaming the tool (A), over-reacting (C), or dismissing a real barrier that makes images invisible to screen reader users (D).

**Question 2 (easy) — Logical deduction from a WCAG rule**

Rule: "Every form input must have a visible label that is programmatically associated with the input." A manual check finds a search box with a visible label next to it. Ask which conclusion is safe based only on this information.

- A) The search box passes the rule.
- B) The search box fails the rule.
- C) It cannot be told yet — whether the visible label is programmatically associated with the input still needs checking.
- D) Search boxes are exempt from labelling rules.

**Correct answer: C**

**Explanation:** The rule has two parts joined by "and" — visible, and programmatically associated — and only the first has been confirmed. A label sitting next to a box visually but not associated in the code will not be announced by a screen reader when the input is focused. This tests checking every part of a rule before recording a result, rather than assuming the unconfirmed part is fine (A, B) or inventing an exemption that does not exist (D).

**Question 3 (easy) — Error checking a test script step**

A test script reads: "Step 4: Using only the keyboard, press Tab until focus reaches the 'Continue' button, then press Enter. Expected result: the next page loads." The tester performs the step: focus reaches the button, Enter is pressed, and nothing happens. Ask what should be recorded.

- A) Pass, because focus reached the button.
- B) Fail, with a note of the actual result: focus reached the button but pressing Enter did not load the next page.
- C) Nothing — skip the step and move on.
- D) Fail, and rewrite the test script so the step is easier.

**Correct answer: B**

**Explanation:** The expected result was "the next page loads," and nothing happened — a fail, and an important one, since a button that cannot be activated by keyboard blocks every user who cannot use a mouse. This tests recording both the outcome and a clear note of what actually happened, rather than confusing reaching a button with activating it (A), hiding a genuine barrier (C), or rewriting a script mid-test rather than executing it under supervision and reporting problems with it (D).

**Question 4 (easy) — Prioritising findings**

Four findings from a testing session: (A) a decorative border image has a slightly outdated colour; (B) the main navigation cannot be reached using the keyboard at all; (C) one paragraph uses a slightly informal tone; (D) a page title could be a little more descriptive. Ask which is most urgent to raise first.

- A) A
- B) B
- C) C
- D) D

**Correct answer: B**

**Explanation:** The navigation issue is a blocker — a keyboard-only user, which includes many screen reader users and people with motor impairments, cannot move around the service at all, preventing task completion. This tests recognising the finding that blocks task completion for the most users as the highest priority, rather than treating all four findings as equally weighted.

**Question 5 (moderate) — Pattern recognition in HTML headings**

A page's headings, in order: `<h1>` Apply for a Blue Badge; `<h2>` Before you start; `<h2>` What you will need; `<h4>` Proof of identity; `<h2>` How to apply. Ask which heading breaks the expected pattern.

- A) Heading 2 (Before you start)
- B) Heading 3 (What you will need)
- C) Heading 4 (Proof of identity)
- D) Heading 5 (How to apply)

**Correct answer: C**

**Explanation:** Headings should form a logical outline without skipping levels downwards; the page moves from `h1` to `h2` correctly, but the fourth heading jumps from `h2` straight to `h4`, skipping `h3`. This tests spotting a skipped heading level, which confuses screen reader users who navigate by headings — the other `h2` headings are siblings at the same level, which is normal.

**Question 6 (moderate) — Logical deduction about testing types**

A team's rule of thumb: "Automated checks can find roughly 30 to 40 per cent of accessibility issues; the rest need manual checks or assistive technology testing." A colleague says: "Our automated scan came back clean, so the page is accessible." Ask which response is most accurate.

- A) Agree — a clean automated scan means the page is accessible.
- B) Disagree — a clean scan is good news, but most issue types can only be found by manual and assistive technology testing, so more checks are needed.
- C) Disagree — automated scans are useless and should be abandoned.
- D) Agree — but only if the scan was run twice.

**Correct answer: B**

**Explanation:** The rule of thumb states automated tools catch only a minority of issue types — alt text quality, focus order, and screen reader experience all need human judgement. This tests recognising that a clean scan cannot support the conclusion "the page is accessible" — option A over-claims, C discards a fast, repeatable, regression-catching tool, and D adds a condition that changes nothing.

**Question 7 (moderate) — Error checking a findings table**

A team's convention: each row must have a unique ID in the format "A11Y-" plus a three-digit number, a WCAG reference, and a severity of High, Medium, or Low. Draft rows: A11Y-001 / 1.1.1 / High; A11Y-002 / 2.4.6 / Medium; A11Y-02 / 1.4.3 / High; A11Y-004 / 3.3.2 / Urgent. Ask how many rows break the convention.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: C**

**Explanation:** Row 3's ID ("A11Y-02") has only a two-digit number, breaking the three-digit format; row 4's severity ("Urgent") is not one of the three allowed values. This tests checking every field of every row against every part of a convention, without skimming — consistent IDs and severities are what let issues be referenced and sorted reliably.

**Question 8 (moderate) — Applied problem solving with alt text**

Four images' alt attributes: (1) a photo of a minister opening an office, `alt="Photo"`; (2) a decorative swirl divider, `alt=""`; (3) a chart showing complaint numbers falling from 400 to 150, `alt="Chart"`; (4) a linked department logo in the header, `alt="Department for Work and Pensions home"`. Ask which images have appropriate alternative text.

- A) 1 and 3
- B) 2 and 4
- C) 1, 2, and 4
- D) All four

**Correct answer: B**

**Explanation:** Image 1's alt text tells nothing about the content; image 3's fails the same way and worse, since the chart carries real information; image 2 is decorative, and empty alt text is exactly right, telling screen readers to skip it silently; image 4's alt text correctly describes the link's destination. This tests asking, for every image, what a user would miss if they could not see it, and matching the alt text to that.

**Question 9 (moderate) — Prioritisation of a working day**

Four items: (1) finish executing a test script needed by the end of today, feeding a service assessment on Thursday; (2) reply to a friendly question in the cross-government accessibility community channel; (3) read a blog post about a proposed future WCAG version; (4) re-run last week's automated scan, a routine monthly task due next week. Ask for the most sensible order.

- A) 2, 3, 4, 1 — quick tasks first
- B) 1, 2, 4, 3 — deadline-driven work first, then the community reply, then routine work, then reading
- C) 3, 1, 2, 4 — learning always comes first
- D) 4, 1, 2, 3 — scans before scripts

**Correct answer: B**

**Explanation:** Item 1 is both urgent and high impact, so it comes first; item 2 is quick and contributes to a genuine part of the role; item 4 is routine and not due for a week; item 3 has no deadline at all. This tests sequencing by urgency and impact together, rather than doing easy things first while a deadline burns (A), treating unscheduled learning as more urgent than a same-day commitment (C), or promoting a task due next week above one due today (D).

**Question 10 (hard) — Deduction across multiple test results**

A form page is tested three ways: (i) the automated scan reports zero issues; (ii) keyboard-only testing shows every field can be reached and completed; (iii) with a screen reader, the error message "Enter your postcode" is displayed on screen after invalid input, but the screen reader announces nothing. Ask which statement must be true.

- A) The page has no accessibility issues, because the scan was clean.
- B) The page has at least one accessibility issue that only assistive technology testing revealed.
- C) The keyboard testing was performed incorrectly.
- D) The screen reader software is faulty.

**Correct answer: B**

**Explanation:** Result (iii) shows a real defect — a screen reader user has no way of knowing their input was rejected. This tests recognising that each testing type detects different issue categories, so neither the clean scan nor the successful keyboard test contradicts the assistive technology finding — statement A is refuted by (iii), and C and D invent faults in the testing rather than accepting the evidence.

**Question 11 (hard) — Multi-step reasoning about a fix**

A developer proposes fixing a "focus not visible" issue by adding `*:focus { outline: none; }` and then a custom focus style only to buttons. The service also contains links, form inputs, and radio buttons. Ask for the logical consequence of this fix.

- A) The issue is fully fixed for all elements.
- B) Focus becomes visible on buttons but is now completely invisible on links, inputs, and radio buttons — making the overall situation worse for keyboard users.
- C) The fix has no effect at all.
- D) The fix only affects screen reader users.

**Correct answer: B**

**Explanation:** The blanket rule removes the browser's default focus indicator from every focusable element; the custom style restores it only for buttons, leaving links, inputs and radio buttons with no indicator at all. This tests reasoning through a CSS change step by step for every affected element, not just the one in the bug report — option D confuses user groups, since focus visibility mainly affects sighted keyboard users rather than screen reader users.

**Question 12 (hard) — Combining rules to reach a verdict**

Severity guide: (i) "Critical" if an issue prevents task completion for any user group; (ii) "High" if it causes significant difficulty but a workaround exists; (iii) if in doubt between two levels, choose the higher and flag it for supervisor review. A "Show password" toggle cannot be operated by keyboard; users can still type their password without it, but cannot check what they typed, causing many failed login attempts for users with dexterity impairments. Ask which severity should be recorded.

- A) Critical, with no flag.
- B) High, flagged for supervisor review.
- C) Low, because passwords still work.
- D) No severity — it is not an accessibility issue.

**Correct answer: B**

**Explanation:** Task completion is not strictly prevented, so rule (i) does not clearly apply, but a workaround exists that causes significant difficulty, fitting rule (ii)'s "High" — and since repeated failures might edge toward preventing completion for some users, rule (iii)'s escalation route applies too. This tests applying written rules faithfully and using the escalation route the rules themselves provide when a case sits near a boundary, rather than dismissing a real barrier (C, D) or skipping the flag (A).

### Administration tips

- Score for whether the candidate investigates an outlier or anomaly rather than jumping to a conclusion about it.
- Note whether the candidate checks every part of a compound rule (an "and", a conjunction) before recording a pass or fail.
- Watch for whether the candidate records an honest, precise actual result rather than a plausible-sounding pass.
- Score for whether prioritisation is based on user impact and urgency together, not on which item feels easiest or most familiar.
- Note whether the candidate reasons through the consequence of a proposed fix for every affected element, not just the one reported.

### Common pitfalls to watch for when scoring

- Crediting a conclusion drawn from a single clean or passing test result when other test types were not run.
- Missing when a candidate checks only part of a compound rule before recording a verdict.
- Rewarding a prioritisation that elevates a cosmetic or minor finding above one that blocks task completion.
- Accepting an answer that jumps to blaming a tool or a colleague rather than investigating an anomaly.
- Missing when a candidate does not trace a proposed fix through to every element or user group it affects.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how well a candidate understands and works with the numbers this role genuinely produces: counts of issues from scans, pass rates from test scripts, contrast ratios, percentages of pages affected, and simple time estimates for testing tasks. It is not a maths exam — nothing beyond percentages, ratios, averages, and reading tables and charts is required. It tests whether a candidate can extract the right numbers from workplace data, do the right simple calculation, and interpret the result sensibly.

Typical format: an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting a small table, chart, or short description of figures, followed by multiple-choice options. A basic on-screen calculator is usually allowed.

For a junior accessibility specialist, findings live in numbers: an automated scan finding 24 issues across 6 pages, 3 of 20 test script steps failing, a colour pair at a contrast ratio of 3.2:1 against a required 4.5:1. Getting these numbers right, and understanding what they do and do not mean, makes findings credible and useful.

### How this assessment maps to the role

- **Percentages and proportions** map to **Testing**: analysing simple test results means saying what share of steps passed, what share of pages had issues, and how results changed between test runs.
- **Ratios** map to **Technical understanding (accessibility)**: colour contrast is expressed as a ratio, and comparing a measured ratio against a required threshold is one of the most common numeric checks the role performs.
- **Averages and rates** map to **Testing** and **Consultancy**: average issues per page, or issues fixed per sprint, help a team see progress.
- **Reading tables and charts** maps to **Communicating information** and **User focus**: scan reports, survey results, and assistive technology usage data all arrive as tables and charts.
- **Sense-checking** maps to everything: noticing that a claimed "50 per cent improvement" does not match the underlying counts is exactly the careful scepticism the role needs.

### Practice questions

**Question 1 (easy) — Counting issues across pages**

An automated scan reports issues on each page: Home 4, Start 2, Question 6, Review 8, Confirmation 0. Ask for the total.

- A) 18
- B) 20
- C) 22
- D) 24

**Correct answer: B**

**Explanation:** 4 + 2 + 6 + 8 + 0 = 20. This tests basic addition, checked ideally by adding top-to-bottom and then bottom-to-top so the two totals confirm each other.

**Question 2 (easy) — Pass rate as a percentage**

A test script has 20 steps: 17 pass, 3 fail. Ask what percentage passed.

- A) 75%
- B) 80%
- C) 85%
- D) 90%

**Correct answer: C**

**Explanation:** 17 ÷ 20 × 100 = 85%. This tests basic percentage calculation, checkable via the complement: 3 fails is 15%, and 100% − 15% = 85%.

**Question 3 (easy) — Comparing a contrast ratio to a threshold**

WCAG requires normal-size body text to have a contrast ratio of at least 4.5:1. Four pairs measure 3.9:1, 4.5:1, 7.2:1, and 4.4:1. Ask how many meet the requirement.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** "At least 4.5:1" includes the boundary, so 4.5:1 and 7.2:1 pass, while 3.9:1 and 4.4:1 fail. This tests reading whether a threshold is inclusive ("at least") and resisting rounding a near-miss into a pass — 4.4:1 is a finding, however close to the line.

**Question 4 (easy) — Reading a simple table**

Issues found by testing type: Automated scan 18, Manual checks 27, Assistive technology testing 15. Ask what fraction of all issues was found by manual checks.

- A) 27/60
- B) 27/45
- C) 18/60
- D) 15/60

**Correct answer: A**

**Explanation:** The total across all three types is 60, and manual checks found 27, giving 27/60. This tests building the correct denominator from all categories the question includes, rather than leaving one out (B) or reading the wrong row (C, D).

**Question 5 (moderate) — Average issues per page**

Issues recorded across 8 manually checked pages: 3, 5, 2, 0, 6, 4, 2, 2. Ask for the average (mean) issues per page.

- A) 2.5
- B) 3
- C) 3.5
- D) 4

**Correct answer: B**

**Explanation:** Total 24 ÷ 8 pages = 3. This tests including every page in the denominator, even one with zero issues — dividing only by pages that had issues (24 ÷ 7 ≈ 3.4) overstates the average and is the common error the item catches.

**Question 6 (moderate) — Percentage change between scans**

Last month's scan found 40 issues; this month's finds 26. Ask by what percentage the issue count fell.

- A) 14%
- B) 26%
- C) 35%
- D) 65%

**Correct answer: C**

**Explanation:** (40 − 26) ÷ 40 × 100 = 35%. This tests dividing the change by the original value, not the new value — option A reports the raw change as a percentage and option D (65%) is the share remaining, a different question entirely.

**Question 7 (moderate) — Ratio of severities**

A findings report has 8 high, 12 medium, and 20 low severity issues. Ask for the ratio of high to medium to low, in simplest form.

- A) 8:12:20
- B) 4:6:10
- C) 2:3:5
- D) 1:2:3

**Correct answer: C**

**Explanation:** Dividing each figure by 4 gives 2:3:5. This tests reducing a ratio to its simplest form — a simplified ratio ("for every two high issues we have three medium and five low") communicates a severity mix more clearly to stakeholders than raw counts.

**Question 8 (moderate) — Time estimation for a testing task**

Manually checking 12 pages at about 25 minutes each, plus a 30-minute write-up buffer at the end. Ask roughly how long the whole task should be estimated at.

- A) About 3 hours
- B) About 4 hours
- C) About 5 and a half hours
- D) About 7 hours

**Correct answer: C**

**Explanation:** 12 × 25 = 300 minutes = 5 hours, plus the 30-minute buffer gives 5.5 hours. This tests building an honest estimate from a per-item rate times a count plus a buffer — underestimating (A, B) is the more dangerous direction, since it sets an expectation the work then fails to meet.

**Question 9 (moderate) — Reading a bar chart description**

A survey of 1,200 assistive technology users shows: JAWS 480, NVDA 360, VoiceOver 240, Other 120. Ask what percentage used NVDA.

- A) 20%
- B) 25%
- C) 30%
- D) 36%

**Correct answer: C**

**Explanation:** 360 ÷ 1,200 = 30%, checkable via the internal consistency of the chart (480+360+240+120=1,200, matching the stated survey size). This tests checking a chart's total against its stated base and computing a share correctly — option D comes from misreading the count 360 itself as a percentage.

**Question 10 (hard) — Combining percentages across two rounds**

A service has 60 accessibility issues; sprint one fixes 40% of them, sprint two fixes 50% of what remained after sprint one. Ask how many issues are still open after sprint two.

- A) 6
- B) 12
- C) 18
- D) 30

**Correct answer: C**

**Explanation:** Sprint one: 40% of 60 = 24 fixed, 36 remain. Sprint two: 50% of 36 = 18 fixed, 18 remain. This tests recognising that percentages taken from different bases cannot simply be added — 40% + 50% does not mean 90% of the original 60 are fixed, and the actual clearance is 42 of 60, or 70%.

**Question 11 (hard) — Weighted effort across issue severities**

Fixing effort: high 4 hours, medium 2 hours, low 1 hour. A report lists 5 high, 9 medium, 12 low, with 40 hours available, fixed strictly in severity order. Ask how many low-severity issues can be fixed this sprint.

- A) 0
- B) 2
- C) 4
- D) 12

**Correct answer: B**

**Explanation:** High: 5 × 4 = 20 hours, 20 remain. Medium: 9 × 2 = 18 hours, 2 remain. Low: 2 hours ÷ 1 hour each = 2 issues. This tests working through effort tier by tier and subtracting as each is consumed, rather than assuming unlimited time (D) or mis-multiplying a tier (C).

**Question 12 (hard) — Spotting a misleading summary**

A dashboard claims "Accessibility improving: issues per page down 50%!" Last quarter's scan covered 10 pages and found 30 issues; this quarter's covered 40 pages and found 60 issues. Ask whether the claim's arithmetic is correct, and what the fuller picture is.

- A) The claim is arithmetically correct — issues per page fell from 3.0 to 1.5 — but total issues doubled because coverage quadrupled, so the summary needs that context.
- B) The claim is wrong — issues went up from 30 to 60, so nothing improved.
- C) The claim is wrong — issues per page rose.
- D) The claim is correct and complete — no further context is needed.

**Correct answer: A**

**Explanation:** 30÷10=3.0 and 60÷40=1.5, a genuine 50% fall in the rate, ruling out B and C, but coverage quadrupled and the total backlog doubled. This tests reading behind a headline number to give a full and honest summary — quoting only the rate or only the total each tells an incomplete story.

### Administration tips

- Score for whether the candidate always identifies the correct base before computing a percentage.
- Note whether averages include every relevant item in the denominator, including ones with a zero value.
- Watch for whether percentages from different bases are kept separate rather than added together.
- Score for whether the candidate sense-checks a result (a pass rate over 100%, an average larger than the largest value) as implausible.
- Note whether a headline figure is checked against the fuller underlying data before being accepted at face value.

### Common pitfalls to watch for when scoring

- Crediting percentages from different bases added together as though they combine simply.
- Missing when a candidate divides an average by the wrong number of items.
- Rewarding a percentage change computed against the new value instead of the original.
- Accepting a chart count misread as a percentage.
- Missing when a candidate presents a favourable rate without the total or coverage context that qualifies it.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material of the kind this role handles every day: extracts from accessibility standards and regulations, guidance pages, emails from a team, audit findings, and user stories. The classic format presents a short passage followed by statements to be judged True (the passage supports it), False (the passage contradicts it), or Cannot Say (the passage gives too little information either way). Other formats test inference and clear-writing judgement.

Typical format: an online, timed test of 15 to 25 minutes with 15 to 25 questions, usually several statements per passage. The discipline it rewards is strict: answering using only the passage, not background knowledge — even where a candidate happens to know a fact is true in real life, if the passage does not support it, the correct answer is Cannot Say.

For a junior accessibility specialist this assessment is highly relevant. The role involves reading dense normative text and extracting exactly what it requires, no more and no less, and communicating findings and fixes in writing that developers, designers, and a supervisor will rely on.

### How this assessment maps to the role

- **Reading comprehension** maps to **Technical understanding (accessibility)**: understanding what a WCAG success criterion or a regulation actually requires — including its scope and exceptions — is a reading task before it is a technical one.
- **True/False/Cannot Say discipline** maps to **Testing**: recording only what was observed, without adding assumptions, is the same mental move as answering only from the passage.
- **Inference** maps to **Consultancy** and **Communicating information**: drawing sensible, supported conclusions from documents and previous work — and stopping before over-claiming.
- **Clear-writing judgement** maps to **Communicating information** and **User focus**: explaining an accessibility barrier so a busy developer understands it depends on choosing plain, direct wording.
- **Interpreting stakeholder needs** maps to **Communicating information**: listening to design and business stakeholders and interpreting information accurately is verbal reasoning applied in real time.

### Practice questions

*Passage for Questions 1–4.* "Public sector bodies in the UK must meet the requirements of the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018. Under these regulations, public sector websites must be perceivable, operable, understandable, and robust. Each website must also publish an accessibility statement describing its level of compliance and listing any known accessibility issues. The regulations allow limited exemptions; for example, some third-party content that is neither funded nor developed by the public sector body is not required to comply. Meeting the Web Content Accessibility Guidelines (WCAG) at level AA is generally considered the way to demonstrate compliance."

**Question 1 (easy)**

Statement: "Public sector websites must publish an accessibility statement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Stated directly in the passage. This tests the baseline habit of confirming a statement against the exact sentence that supports it, rather than answering from memory of the passage.

**Question 2 (easy)**

Statement: "All third-party content on public sector websites must comply with the regulations."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states the regulations "allow limited exemptions" for some third-party content, directly contradicting "all." This tests spotting an absolute word ("all") and checking it against a stated exception — a single exception is enough to make an "all" claim false.

**Question 3 (easy)**

Statement: "Most public sector websites currently fail to meet WCAG level AA."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage explains what the regulations require and how compliance is generally demonstrated, but says nothing about actual current compliance levels. This tests separating what the text establishes from what a candidate may otherwise know or believe.

**Question 4 (moderate) — Inference**

Ask which conclusion is best supported by the passage.

- A) A public sector website that meets WCAG level AA has definitely satisfied every legal requirement.
- B) Publishing an accessibility statement is optional good practice.
- C) A public sector body cannot rely solely on meeting WCAG AA, because it must also publish an accessibility statement.
- D) The regulations apply to private companies' websites.

**Correct answer: C**

**Explanation:** The passage sets out two distinct obligations — meeting the accessibility requirements, generally demonstrated via WCAG AA, and publishing a statement. This tests combining what is stated while respecting every hedge — option A over-reaches past the passage's hedged "generally considered," B contradicts "must," and D contradicts "public sector bodies."

*Passage for Questions 5–7.* "From: Priya (Senior Accessibility Specialist). To: Testing team. Subject: Changes to this sprint's testing. Hi all — two changes for this sprint. First, we're moving assistive technology testing of the renewals journey to next sprint, because the fix for the focus-order issue isn't merged yet and retesting before the fix would waste effort. Second, please add the new document downloads page to this sprint's manual checks; the content team published it on Tuesday and it hasn't been checked at all. Automated scans continue as scheduled. As always, log findings in the tracker by Friday midday so I can compile the report. Shout if anything is unclear. Thanks! Priya"

**Question 5 (moderate)**

Statement: "Assistive technology testing of the renewals journey has been cancelled."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Priya says the testing is "moving... to next sprint" — postponed, not cancelled. This tests distinguishing deferred from cancelled, a distinction that changes what a team actually does with a task.

**Question 6 (moderate) — Comprehension of instructions**

Ask what should happen to the document downloads page this sprint.

- A) It should receive assistive technology testing.
- B) It should be added to manual checks.
- C) It should be removed from automated scans.
- D) Nothing — it was already checked on Tuesday.

**Correct answer: B**

**Explanation:** Stated explicitly. This tests mapping each instruction in a multi-instruction email to its object and timing correctly — option A confuses two separate changes, C contradicts "automated scans continue as scheduled," and D misreads Tuesday as a check date rather than a publish date.

**Question 7 (moderate)**

Statement: "The focus-order fix will be merged before the end of this sprint."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The email says the fix "isn't merged yet" and gives no date or commitment for when it will be. This tests noticing an implied expectation and withholding it as unconfirmed — the natural reading fills the gap with "soon," but the text never states it.

*Passage for Questions 8–10.* "Audit finding A11Y-014: The service's date-of-birth field rejects valid entries when users type spaces (for example '01 02 1990'). The error message reads: 'Invalid input detected. Constraint violation: pattern mismatch.' Screen reader testing confirmed the message is announced. However, the message does not explain what format is expected, and the field's hint text says only 'Enter your date of birth'. Recommendation: accept common formats including spaces, and rewrite the error message to say what to do, for example: 'Enter your date of birth in the format DD MM YYYY'. Severity: Medium. This finding does not block task completion because users who guess a format without spaces can proceed."

**Question 8 (moderate)**

Statement: "The error message is not announced by screen readers."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The finding states testing "confirmed the message is announced" — directly contradicted by the statement. This tests recognising that an announced-but-unhelpful message is a different defect from an unannounced one, and reading the finding precisely enough to tell them apart.

**Question 9 (hard) — Inference from a finding**

Ask which statement is best supported by the finding.

- A) The severity is Medium partly because a workaround exists: users can proceed if they enter the date without spaces.
- B) The date field fails because of a screen reader defect.
- C) Accepting spaces in dates is legally required.
- D) The hint text 'Enter your date of birth' fully solves the problem.

**Correct answer: A**

**Explanation:** The finding's last sentence explicitly links the severity to the workaround. This tests connecting a conclusion (Medium severity) to its stated justification — option B contradicts the finding (the screen reader behaved correctly), C introduces an unstated legal claim, and D is contradicted by the finding's criticism of the hint text.

**Question 10 (hard) — Clear-writing judgement**

Explaining finding A11Y-014's user impact in one sentence for a sprint review of non-specialists. Ask which sentence is best.

- A) "The DOB widget's regex constraint violation surfaces a non-actionable validation string."
- B) "If someone types their date of birth with spaces, the form rejects it with an error that doesn't tell them how to fix it."
- C) "There is a problem with dates and errors and formats that users might not like very much at all."
- D) "The service is completely unusable and must be taken offline immediately."

**Correct answer: B**

**Explanation:** B states the trigger, behaviour, and harm in plain words a non-specialist audience can act on. This tests judging clarity by completeness and accuracy for the stated audience — A is jargon-dense, C is vague to the point of carrying no information, and D overstates severity, contradicting the finding's own statement that task completion is not blocked.

**Question 11 (hard) — Interpreting a user story**

User story: "As a screen reader user, I need form errors to be announced when they appear, so that I know my application has a problem and can fix it before submitting again." Ask which of the following is a genuine acceptance test for this story, rather than an assumption smuggled in from outside it.

- A) Errors must be announced by the screen reader when they appear.
- B) Errors must be shown in red text.
- C) The form must never produce errors.
- D) The user must complete the form within five minutes.

**Correct answer: A**

**Explanation:** The story's own words define its scope: announcement on appearance is the "what." This tests tracing an acceptance test back to the story's actual text rather than an assumption — B concerns visual styling never mentioned, C misreads the goal as elimination rather than communication of errors, and D invents an unstated time constraint.

**Question 12 (hard) — Reconciling two documents**

Document 1 (guidance page): "All videos published on the service must have captions." Document 2 (team email): "The welcome video is exempt from captioning because it has no dialogue or meaningful audio." Ask, based only on these two documents, for the most accurate answer to whether the welcome video needs captions.

- A) Yes — Document 1 says all videos must have captions, and it outranks emails.
- B) No — Document 2 says it is exempt, and emails are more recent.
- C) The documents conflict: the guidance states a rule with no exceptions, while the email claims an exemption; the right step is to check the source of the claimed exemption before answering.
- D) Neither document mentions the welcome video.

**Correct answer: C**

**Explanation:** Document 1 states an unqualified rule; Document 2 claims a specific exemption — the two cannot both be applied as written. This tests reporting a genuine conflict honestly rather than inventing a precedence rule the texts do not contain ("guidance outranks emails," "newer wins" in A and B) — the professional next step is to trace the exemption to its source before advising anyone.

### Administration tips

- Score for whether the candidate answers strictly from the passage, marking Cannot Say where the text is genuinely silent.
- Note whether the candidate distinguishes precise verbs (postponed vs cancelled, published vs checked) rather than treating them as interchangeable.
- Watch for whether an inference stays within what the passage's hedges actually support, rather than over-reaching.
- Score clear-writing items on completeness and accuracy for the stated audience, not formality.
- Note whether a candidate reports a genuine conflict between two documents honestly, rather than inventing an unstated rule to resolve it.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of the candidate's own knowledge rather than the passage.
- Missing when a candidate treats "Cannot Say" as a wrong or weak answer rather than the correct description of the text's silence.
- Rewarding an inference that goes beyond what a hedge ("generally considered") actually supports.
- Accepting a jargon-heavy or vague rewrite over a plain, accurate one in a clear-writing item.
- Missing when a candidate resolves a document conflict by inventing a precedence rule not stated in either text.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks a candidate to judge possible responses. There is often no single mathematically provable answer; some responses are clearly more effective than others, and the assessment measures whether the candidate can tell the difference. Common formats: choose the most effective response; choose the most and least effective; rank all responses; or rate each on a scale. Scenarios are drawn from the real texture of the role — supervised testing work, finding and reporting issues, asking for help, working in a multidisciplinary team, and advocating for users affected by accessibility barriers.

Typical format: untimed or generously timed (20 to 40 minutes for 10 to 20 scenarios), online, scored against a key agreed by subject-matter experts and experienced managers.

The scenarios are calibrated for this level: nobody applying for a junior role is expected to resolve a dispute between directors. The strongest responses at this level frequently include asking or checking with a supervisor — that is not a sign of weakness, but part of doing the junior role well.

### How this assessment maps to the role

- **User focus scenarios** map to **User focus** and this role's duty to be an advocate for people affected by accessibility barriers.
- **Supervision and escalation scenarios** map to **Testing** and **Consultancy**: knowing what to handle directly and what to raise, and raising it early and clearly.
- **Team communication scenarios** map to **Communicating information**: contributing findings clearly, listening to others' constraints, and interpreting what stakeholders need.
- **Learning and honesty scenarios** map to the level's "learns on the job" definition: admitting uncertainty, seeking feedback, and following through.
- **Community scenarios** map to this role's duty to engage with and contribute to the cross-government accessibility community.

### Practice questions

**Question 1 (easy) — A serious issue found late on Friday**

At 4:30pm on Friday, finishing a test script reveals the service's "Submit application" button cannot be activated using a keyboard. The service is due to go live Monday morning; a supervisor is still online. Ask for the most effective response.

- A) Log the issue in the tracker and go home — it will be seen on Monday.
- B) Message the supervisor now with a short, clear description of the issue and its impact, and log it in the tracker.
- C) Stay late and try to fix the code personally.
- D) Post about the issue in the cross-government community channel to ask what to do.

**Most effective: B. Least effective: C**

**Explanation:** A keyboard-inoperable submit button blocks the final step of a journey for keyboard and assistive technology users, with a Monday launch approaching — an escalation moment while there is still time to act. This tests raising a severe, time-critical finding to a supervisor promptly — option C exceeds the role (not a developer, an unreviewed late-Friday change is risky) and D shares an internal pre-launch problem outside the organisation before the team knows.

**Question 2 (easy) — Not understanding a test script step**

Halfway through a test script, a step says "verify the accessible name of the control." Ask for the most effective response when unsure what this means.

- A) Skip the step and mark it as passed so the run looks complete.
- B) Guess what it means and record whatever seems plausible.
- C) Pause, look it up briefly in the team's guidance, and if still unsure, ask a supervisor before recording anything for that step.
- D) Abandon the whole test run.

**Most effective: C. Least effective: A**

**Explanation:** The role is defined as learning on the job under supervision, and option C is the ideal sequence — resolve it independently if possible, ask rather than guess, and record nothing not genuinely verified. This tests honest handling of uncertainty — option A is falsification of results, the single most damaging thing a tester can do, since every downstream decision trusts the record.

**Question 3 (easy) — A developer dismisses a finding**

Reporting that a form field has no programmatically associated label, a developer replies: "Looks fine to me on my screen. Closing." Ask for the most effective response.

- A) Reopen the ticket with a note explaining that the label is visible but not associated in the code, describe the impact on screen reader users, and offer to demonstrate it.
- B) Let it go — the developer knows the code better.
- C) Reply: "Reopening. This is a WCAG violation and closing it is unprofessional."
- D) Complain to the developer's line manager about the closure.

**Most effective: A. Least effective: B**

**Explanation:** The developer checked visually while the defect is programmatic; option A resolves exactly that gap, is polite and educational, and offers a demonstration. This tests advocating for users across a misunderstanding without damaging a working relationship — option B abandons a genuine barrier, and D leaps two escalation levels over a first misunderstanding before direct engagement is tried.

**Question 4 (easy) — Invitation beyond current experience**

A service team invites a candidate to run a full accessibility audit by themselves, with their name as the sole auditor, though they have only assisted with audits before and the role level says audits are performed by more senior specialists. Ask for the most effective response.

- A) Accept — it is a great opportunity and details can be worked out later.
- B) Decline without telling anyone, to avoid embarrassment.
- C) Thank them for thinking of the candidate, explain that audits at this level are done with senior oversight, and bring the request to a supervisor so it can be resourced properly — asking to assist on it as a development opportunity.
- D) Accept, but secretly ask a friend in another department to do the hard parts.

**Most effective: C. Least effective: D**

**Explanation:** An audit issued under one name alone becomes an assurance artefact others rely on; performing one without the experience or mandate risks missed barriers shipping with apparent sign-off. This tests self-awareness about scope combined with converting an opportunity into supervised development — option D adds concealment and an accountability fiction on top of overreach.

**Question 5 (moderate) — Most and least effective under deadline pressure**

At sprint planning, a product manager proposes skipping accessibility checks this sprint to hit a deadline. As the only accessibility person in the room: (1) say nothing, being the most junior person present; (2) calmly note what the checks cover, the risk to disabled users, and suggest options such as checking only the highest-risk changes, then follow up with a supervisor; (3) tell the product manager skipping checks is illegal and the meeting should be stopped; (4) agree enthusiastically to build goodwill. Ask which is most and least effective.

- A) Most: 2; Least: 4
- B) Most: 2; Least: 1
- C) Most: 3; Least: 1
- D) Most: 1; Least: 3

**Correct answer: A**

**Explanation:** Response 2 raises the risk, proposes a proportionate middle path, and loops in a supervisor at the right point for a decision this consequential. This tests distinguishing degrees of advocacy failure — response 4 is worst because it actively endorses removing a safeguard and will be remembered as expert blessing from "the accessibility person," worse than silence (1) or clumsy but genuine advocacy (3, which at least attempts to protect users despite overstating standing).

**Question 6 (moderate) — A candidate's own possible mistake**

Compiling results, a candidate realises a step recorded yesterday as "pass" may have been confused with a similar step on another page, and the report goes out tomorrow. Ask for the most effective response.

- A) Leave it — it was probably fine.
- B) Change it to "fail" to be safe.
- C) Re-run the step now if possible; if not, tell a supervisor today that the result is unreliable and needs re-testing before the report goes out.
- D) Delete the step from the report so the question never arises.

**Most effective: C. Least effective: D**

**Explanation:** The best fix is simply re-performing the test; where that is impossible, honest disclosure lets a supervisor decide, and raising it today (before publication) matters. This tests correcting a possible error quickly and openly — option D conceals the problem entirely, worse than either guess (A ships unverified data, B corrupts it in the opposite direction with a false failure).

**Question 7 (moderate) — Balancing community contribution and deadlines**

A testing task due tomorrow will take the rest of today. A cross-government community member posts a question that would take about an hour to answer well. Ask for the most effective response.

- A) Spend the hour now — community always comes first.
- B) Ignore the post entirely — community is not real work.
- C) Post a brief note that help is available and will follow tomorrow after the deadline, then finish the testing task.
- D) Ask a supervisor to do the testing task so the post can be answered.

**Most effective: C. Least effective: D**

**Explanation:** The role genuinely includes contributing to the community, so ignoring it (B) is wrong on the role definition itself — but a committed deadline still outranks an unscheduled hour. This tests sequencing commitments by urgency and impact rather than treating every good activity as equally urgent — option D inverts the supervision relationship inappropriately.

**Question 8 (moderate) — A senior colleague uses outdated guidance**

A content designer shares a draft "accessibility checklist" for the team wiki that recommends a technique recent training identified as outdated and potentially harmful for screen reader users; the designer is senior and proud of the work. Ask for the most effective response.

- A) Say nothing — correcting a senior colleague is not appropriate.
- B) Post a public comment on the wiki: "This is wrong and shouldn't be used."
- C) Message the designer privately: thank them for the initiative, mention that one technique may have been superseded, share the training source, and offer to check it together with a supervisor or senior specialist.
- D) Quietly edit the wiki page without telling the designer.

**Most effective: C. Least effective: A**

**Explanation:** Option C protects users, protects the relationship (private, appreciative, evidence-based), and respects the candidate's level by proposing verification with a senior specialist rather than positioning themselves as the final authority. This tests advocating across a seniority gap without damaging a relationship — option A lets a harmful technique become institutionalised in team guidance.

**Question 9 (moderate) — Conflicting instructions**

A supervisor has assigned re-testing of Service A for the day; mid-morning, a delivery manager from Service B messages directly: "Need you to check our new pages today please — urgent." The supervisor is in workshops and slow to respond. Ask for the most effective response.

- A) Switch to Service B — the request said urgent.
- B) Refuse Service B outright.
- C) Tell the delivery manager the candidate is committed to another task today and is checking with the supervisor about priorities; message the supervisor with both demands and continue Service A until told otherwise.
- D) Try to do both by doing each half-heartedly.

**Most effective: C. Least effective: D**

**Explanation:** Re-prioritising supervisor-assigned work is the supervisor's call, and option C gives the delivery manager an honest status, gives the supervisor a crisp decision request, and keeps productive work going in the meantime. This tests handling competing demands without letting whoever asks loudest reorder a plan — option D delivers two unreliable half-jobs, worse than no testing, because people trust it.

**Question 10 (hard) — Pressure to soften findings**

Assisting a senior colleague with testing, 14 issues were found. Before the report goes out, a delivery manager informally asks: "Fourteen looks terrible for us at the service assessment. Some are tiny — could you drop the trivial ones from your list?" The senior colleague is away today. Ask for the most effective response.

- A) Drop the five smallest issues — being helpful builds relationships.
- B) Explain politely that findings can't be removed, but that the report can present severity clearly so small issues are visibly small; say the conversation will be flagged to the senior colleague leading the report.
- C) Tell the delivery manager they will be reported for attempted fraud.
- D) Say nothing to anyone and let the senior colleague find out whenever.

**Most effective: B. Least effective: A**

**Explanation:** The manager's real problem is how the findings will look, and accurate severity presentation is the legitimate solution; flagging the conversation to the report's owner is essential, since the same request may recur and targeted the most junior person involved. This tests refusing to falsify an assurance record while solving the underlying stakeholder problem legitimately — option A quietly falsifies the record and teaches stakeholders that pressure on juniors works.

**Question 11 (hard) — A user's complaint reaches the candidate**

A complaint forwarded from a contact centre describes a blind user spending 40 minutes failing to complete a form that was tested and passed last month; re-testing with the same script passes everything. Ask for the most effective response.

- A) Report back: "Re-tested, all passes — the user must have been mistaken."
- B) Report the passing results, but also note the limits of the script: ask whether the user's assistive technology, browser, or journey might differ from the tested setup, and suggest the team try to reproduce the user's actual conditions — treating the complaint as evidence, not error.
- C) Mark the complaint as resolved since the script passes.
- D) Rewrite the test script so it would have caught whatever the problem was.

**Most effective: B. Least effective: A**

**Explanation:** A passing script and a failing user are both facts; scripts sample reality by fixing one browser, one assistive technology, one path, while real users vary. This tests treating a persistent, unusual user complaint as a rich signal rather than letting a tidy test result overrule a messy real one — option A adds outright dismissiveness toward a disabled user, the opposite of advocacy, and D acts before understanding what actually needs catching.

**Question 12 (hard) — Ranking responses under launch pressure**

Two days before a high-profile launch, a service's PDF guidance document is found to be an untagged scan, completely unreadable by screen readers; the content team says a proper accessible version needs a week. (1) Raise it to a supervisor today with the facts and interim options — an accessible HTML version of key content, or the PDF with a note, an alternative-format contact route, and a dated commitment to replace it; (2) insist the launch be delayed a week; (3) say nothing until after launch to avoid being seen as a blocker; (4) fix the PDF personally tonight with an unfamiliar tagging tool and tell no one. Ask for the ranking from most to least effective.

- A) 1, 2, 4, 3
- B) 1, 2, 3, 4
- C) 2, 1, 3, 4
- D) 1, 4, 2, 3

**Correct answer: A**

**Explanation:** Response 1 surfaces the problem immediately with realistic interim options; response 2 is honest advocacy but prescribes the most drastic remedy while ignoring workable interim paths and sits above the candidate's level to decide. This tests ranking response 4 above response 3 as the subtle judgement — unsupervised, concealed, unfamiliar-tool remediation is misguided but attempts to help, while deliberately concealing a known barrier abandons the users the role exists to represent, which ranks lowest of all.

### Administration tips

- Score for whether the candidate's strongest responses reflect genuine junior-level behaviour — asking, checking, escalating early — rather than acting alone or beyond the role's scope.
- Note whether a response keeps the person warm while being firm about the issue, particularly across a seniority gap.
- Watch for whether a candidate distinguishes silence, clumsy advocacy, and active endorsement of a bad decision when ranking responses.
- Score for whether integrity is held under social or delivery pressure (softening findings, backdating results) rather than traded away.
- Note whether user impact remains visible in the candidate's reasoning throughout a scenario, not just at the start.

### Common pitfalls to watch for when scoring

- Crediting a "heroic" response — working alone, fixing something outside the role's remit, concealing a problem to seem self-sufficient.
- Missing when a candidate treats early, calm escalation as a weakness rather than a strength at this level.
- Rewarding over-escalation — a formal accusation or a line-manager complaint before a direct, polite conversation is tried.
- Accepting an enthusiastic endorsement of a decision that removes a safeguard, given for the sake of team harmony.
- Missing when a candidate's answer loses track of the disabled user's interest under delivery pressure.

## Conclusion

This guide has worked through pattern recognition and error checking across accessibility scan results, HTML structures and WCAG rules; the arithmetic that makes findings credible — counts, pass rates, contrast ratios, averages, and percentage change read carefully rather than added or divided by the wrong base; the discipline of reading standards, regulations, findings and team messages at exactly the strength the text supports; and the situational judgement that defines a strong junior specialist — raising serious issues early, asking rather than guessing, keeping results honest under pressure, and keeping disabled users at the centre of every judgement call.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, and at this level the strongest answer is frequently the one that checks with a supervisor rather than acts alone. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
