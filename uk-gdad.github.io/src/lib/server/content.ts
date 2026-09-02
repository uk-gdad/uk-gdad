// Reads the UK GDAD PCF markdown in `content/` at build time.
//
// Every page on this site is prerendered, so this module only ever runs in
// Node during `vite build` (and in the dev server). Nothing here reaches the
// browser: pages receive the parsed result, not the source markdown.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { marked } from 'marked';
import type {
  Level,
  LevelRow,
  Profession,
  ResourceKind,
  Role,
  Skill,
  Summary,
  TocEntry
} from '$lib/types';
import { slugify } from '$lib/types';
import { createFormWriter } from './gapform';
import { createChecklistWriter } from './checklist';

const CONTENT = join(process.cwd(), 'content');

const DIRECTORIES: Record<ResourceKind, string> = {
  summary: 'role-summaries',
  startHere: 'role-level-start-here',
  upskilling: 'upskilling-resources',
  development: 'continuing-professional-development-checklists',
  assessment: 'assessments',
  gapform: 'roles-skills-gap-forms'
};

/** Every markdown file under a directory, as slugs relative to it. */
function slugsUnder(directory: string): string[] {
  const root = join(CONTENT, directory);
  const found: string[] = [];
  const walk = (current: string) => {
    for (const entry of readdirSync(current).sort()) {
      const path = join(current, entry);
      if (statSync(path).isDirectory()) walk(path);
      else if (entry.endsWith('.md')) {
        found.push(relative(root, path).slice(0, -'.md'.length).split(sep).join('/'));
      }
    }
  };
  walk(root);
  return found;
}

function sourcePath(kind: ResourceKind, slug: string): string {
  return join(CONTENT, DIRECTORIES[kind], `${slug}.md`);
}

/** The raw markdown for one document, or null when that document does not exist. */
export function readDocument(kind: ResourceKind, slug: string): string | null {
  try {
    return readFileSync(sourcePath(kind, slug), 'utf8');
  } catch {
    return null;
  }
}

// --- Role summaries -------------------------------------------------------
//
// Summaries are plain text rather than markdown, in a shape the framework uses
// consistently across all 205 files:
//
//     Software development role: Software developer
//     - A software developer designs, runs and improves software.
//
//     In this role, you will:
//     - be responsible for writing clean, secure code
//
//     Role level: Senior developer
//     - A senior developer delivers and integrates software.
//
//     At this role level, you will:
//     - plan and lead development on sets of related stories
//
//     Skill: User focus
//     - collaborate with user researchers and can represent users internally

const ROLE_LINE = /^(.+?) role: (.+)$/;
const LEVEL_LINE = /^Role level: (.+)$/;
const SKILL_LINE = /^Skill: (.+)$/;

export function parseSummary(text: string): Summary {
  const summary: Summary = {
    professionTitle: '',
    roleTitle: '',
    roleDescription: [],
    roleDuties: [],
    roleNotes: [],
    levelTitle: '',
    levelDescription: [],
    levelDuties: [],
    levelNotes: [],
    skills: []
  };

  // Where subsequent bullets and stray prose lines belong.
  let points: string[] = summary.roleDescription;
  let notes: string[] = summary.roleNotes;

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    const role = ROLE_LINE.exec(line);
    const level = LEVEL_LINE.exec(line);
    const skill = SKILL_LINE.exec(line);

    if (role && !summary.roleTitle) {
      summary.professionTitle = role[1];
      summary.roleTitle = role[2];
      points = summary.roleDescription;
      notes = summary.roleNotes;
    } else if (line === 'In this role, you will:') {
      points = summary.roleDuties;
      notes = summary.roleNotes;
    } else if (level) {
      summary.levelTitle = level[1];
      points = summary.levelDescription;
      notes = summary.levelNotes;
    } else if (line === 'At this role level, you will:') {
      points = summary.levelDuties;
      notes = summary.levelNotes;
    } else if (skill) {
      // A summary sometimes names the same skill twice, with a different part
      // of the expectation under each. Merge those into one skill.
      const skillSlug = slugify(skill[1]);
      let entry = summary.skills.find((candidate) => candidate.slug === skillSlug);
      if (!entry) {
        entry = { title: skill[1], slug: skillSlug, points: [] };
        summary.skills.push(entry);
      }
      points = entry.points;
      notes = entry.points;
    } else if (line.startsWith('- ')) {
      points.push(line.slice(2).trim());
    } else {
      notes.push(line);
    }
  }

  return summary;
}

// --- Catalog --------------------------------------------------------------

let catalog: Profession[] | null = null;

/** Professions, roles and levels, built once from the role summaries. */
export function getProfessions(): Profession[] {
  if (catalog) return catalog;

  const professions = new Map<string, Profession>();
  const roles = new Map<string, Role>();

  for (const slug of slugsUnder(DIRECTORIES.summary)) {
    const segments = slug.split('/');
    if (segments.length < 2) continue;

    const summary = parseSummary(readFileSync(sourcePath('summary', slug), 'utf8'));
    const professionSlug = segments[0];
    // Most professions nest levels inside a role directory. A few name the
    // role at the file level instead, in which case the role holds one level.
    const roleSlug = segments.length > 2 ? segments[1] : segments[segments.length - 1];
    const roleKey = `${professionSlug}/${roleSlug}`;
    const fileName = segments[segments.length - 1];
    const numbered = /^(\d+)-/.exec(fileName);

    let profession = professions.get(professionSlug);
    if (!profession) {
      profession = {
        slug: professionSlug,
        title: summary.professionTitle || professionSlug,
        roles: [],
        levelCount: 0
      };
      professions.set(professionSlug, profession);
    }

    let role = roles.get(roleKey);
    if (!role) {
      role = { slug: roleSlug, title: summary.roleTitle || roleSlug, levels: [] };
      roles.set(roleKey, role);
      profession.roles.push(role);
    }

    // Retired levels say "NOT IN USE" where the level name would be, which
    // makes a poor page title. Name them after the role and flag them instead.
    const inUse = summary.levelTitle.toUpperCase() !== 'NOT IN USE';
    const level: Level = {
      slug,
      title: (inUse && summary.levelTitle) || summary.roleTitle || slug,
      order: numbered ? Number(numbered[1]) : null,
      inUse,
      has: {
        summary: true,
        startHere: exists('startHere', slug),
        upskilling: exists('upskilling', slug),
        development: exists('development', slug),
        assessment: exists('assessment', slug),
        gapform: exists('gapform', slug)
      }
    };
    role.levels.push(level);
    profession.levelCount += 1;
  }

  const byTitle = (a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title);
  catalog = [...professions.values()].sort(byTitle);
  for (const profession of catalog) {
    profession.roles.sort(byTitle);
    for (const role of profession.roles) {
      role.levels.sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || byTitle(a, b));
    }
  }
  return catalog;
}

function exists(kind: ResourceKind, slug: string): boolean {
  try {
    return statSync(sourcePath(kind, slug)).isFile();
  } catch {
    return false;
  }
}

export function getProfession(slug: string): Profession | undefined {
  return getProfessions().find((profession) => profession.slug === slug);
}

/** Every role level as a flat row, for the role finder and for prerendering. */
export function getLevelRows(): LevelRow[] {
  const rows: LevelRow[] = [];
  for (const profession of getProfessions()) {
    for (const role of profession.roles) {
      for (const level of role.levels) {
        rows.push({
          slug: level.slug,
          levelTitle: level.title,
          roleTitle: role.title,
          professionTitle: profession.title,
          professionSlug: profession.slug,
          inUse: level.inUse
        });
      }
    }
  }
  return rows;
}

/** The level rows that have a document of the given kind. */
export function getSlugsFor(kind: ResourceKind): string[] {
  if (kind === 'summary') return getLevelRows().map((row) => row.slug);
  return getLevelRows()
    .map((row) => row.slug)
    .filter((slug) => exists(kind, slug));
}

/** Where a level sits, for breadcrumbs and cross-links. */
export function getLevelContext(slug: string) {
  for (const profession of getProfessions()) {
    for (const role of profession.roles) {
      for (const level of role.levels) {
        if (level.slug === slug) return { profession, role, level };
      }
    }
  }
  return null;
}

// --- Skills ---------------------------------------------------------------

let skillIndex: Map<string, { title: string; rows: LevelRow[] }> | null = null;

function getSkillIndex() {
  if (skillIndex) return skillIndex;
  skillIndex = new Map();
  for (const row of getLevelRows()) {
    const summary = parseSummary(readFileSync(sourcePath('summary', row.slug), 'utf8'));
    for (const skill of summary.skills) {
      if (!skill.slug) continue;
      const entry = skillIndex.get(skill.slug) ?? { title: skill.title, rows: [] };
      entry.rows.push(row);
      skillIndex.set(skill.slug, entry);
    }
  }
  return skillIndex;
}

export function getSkills(): Skill[] {
  return [...getSkillIndex().entries()]
    .map(([slug, entry]) => ({ slug, title: entry.title, levelCount: entry.rows.length }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getSkill(slug: string): { title: string; rows: LevelRow[] } | undefined {
  return getSkillIndex().get(slug);
}

// --- Markdown -------------------------------------------------------------

/**
 * Resolve a link written inside the source markdown.
 *
 * The markdown was authored against the layout of the sibling repositories, so
 * it links to peer documents as relative `.md` paths such as
 * `../../upskills/data/data-analyst/2-data-analyst.md`. Map those onto this
 * site's URLs. Some links are placeholders rather than destinations — `TODO`,
 * or a sentence telling the reader what to search for — so anything that does
 * not resolve becomes plain text instead of a broken link.
 */
function resolveLink(href: string, from: { kind: ResourceKind; slug: string }): string | null {
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  if (!href.endsWith('.md')) return null;

  const segments = from.slug.split('/').slice(0, -1);
  for (const segment of href.slice(0, -'.md'.length).split('/')) {
    if (segment === '.' || segment === '') continue;
    else if (segment === '..') segments.pop();
    else segments.push(segment);
  }

  // The target's own slug is the tail of the path; whatever precedes it names
  // the kind of document, in whichever directory naming the author used.
  const known = new Set(getLevelRows().map((row) => row.slug));
  for (let index = 0; index < segments.length; index += 1) {
    const slug = segments.slice(index).join('/');
    if (!known.has(slug)) continue;

    const prefix = segments.slice(0, index).join('/');
    // Gap-form paths end in `/roles` like the summaries do, so they are tested
    // first — otherwise the summary pattern would claim them.
    const kind: ResourceKind = /skills-gap|gap-form/i.test(prefix)
      ? 'gapform'
      : /upskill/i.test(prefix)
        ? 'upskilling'
        : /assessment/i.test(prefix)
          ? 'assessment'
          : /continuing|professional|cpd|checklist/i.test(prefix)
            ? 'development'
            : /start-here/i.test(prefix)
              ? 'startHere'
              : /summar|^roles?$|\/roles?$/i.test(prefix)
                ? 'summary'
                : from.kind;

    if (kind !== 'summary' && !statSafe(kind, slug)) return null;
    const base = RESOURCE_BASES[kind];
    return `${base}/${slug}/`;
  }
  return null;
}

const RESOURCE_BASES: Record<ResourceKind, string> = {
  summary: '/roles',
  startHere: '/start-here',
  upskilling: '/upskilling',
  development: '/continuing-professional-development',
  assessment: '/assessments',
  gapform: '/skills-gap-forms'
};

function statSafe(kind: ResourceKind, slug: string): boolean {
  return exists(kind, slug);
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' '
};

function decodeEntities(text: string): string {
  return text.replace(/&(?:amp|lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity] ?? entity);
}

/**
 * Assessments give a worked answer straight after every question, so a
 * reader who wants to attempt it first has to look away from the page. This
 * wraps each one in a collapsible `<details>` — reusing the Lily Details
 * component's own `.details` styling — so the answer stays a deliberate
 * reveal instead of the next thing on the page.
 *
 * A question states its answer as "**Correct answer: …**", sometimes with
 * the reasoning in the same paragraph and sometimes in a separate
 * "**Explanation:**" paragraph that follows — occasionally with a bridging
 * label paragraph between the two ("Correct answer explanation follows.").
 * All three shapes are recognised the same way: gather the "Correct answer"
 * paragraph with every paragraph immediately after it whose own bold lead-in
 * contains "explain" or "explanation", and wrap the run.
 */
function wrapAssessmentAnswers(html: string): string {
  const PARAGRAPH = /<p>[\s\S]*?<\/p>\n/g;
  const BOLD_LEAD = /^<p>\s*<strong>([^<]*)<\/strong>/i;
  const isAnswer = (paragraph: string) => /^<p>\s*<strong>Correct answer\b/i.test(paragraph);
  const isContinuation = (paragraph: string) => {
    const lead = BOLD_LEAD.exec(paragraph);
    return !!lead && /expla/i.test(lead[1]);
  };

  let out = '';
  let lastEnd = 0;
  let group: string[] | null = null;
  let groupEnd = 0;

  const flush = () => {
    if (!group) return;
    out += `<details class="details assessment-answer">\n<summary>See Answer</summary>\n${group.join('')}</details>\n`;
    group = null;
  };

  let match: RegExpExecArray | null;
  while ((match = PARAGRAPH.exec(html))) {
    const paragraph = match[0];
    const start = match.index;
    // Anything between two matched paragraphs — a heading, a list — closes
    // whatever group was open: an answer's explanation never crosses one.
    if (start !== lastEnd) {
      flush();
      out += html.slice(lastEnd, start);
    }
    if (group && start === groupEnd && isContinuation(paragraph)) {
      group.push(paragraph);
    } else {
      flush();
      if (isAnswer(paragraph)) {
        group = [paragraph];
      } else {
        out += paragraph;
      }
    }
    groupEnd = start + paragraph.length;
    lastEnd = groupEnd;
  }
  flush();
  out += html.slice(lastEnd);
  return out;
}

/** Render markdown to HTML, lifting the leading heading out as the title. */
export function renderMarkdown(
  markdown: string,
  from: { kind: ResourceKind; slug: string }
): {
  title: string | null;
  html: string;
  toc: TocEntry[];
} {
  const tokens = marked.lexer(markdown);

  let title: string | null = null;
  if (tokens[0]?.type === 'heading' && tokens[0].depth === 1) {
    title = tokens[0].text;
    tokens.shift();
  }

  const toc: TocEntry[] = [];
  const used = new Map<string, number>();
  const identify = (text: string) => {
    const base = slugify(text) || 'section';
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    return seen ? `${base}-${seen}` : base;
  };

  // Skills gap forms are meant to be filled in, so their questions, answer
  // prompts, and tick lists become real form controls. A continuing
  // professional development checklist's task lists become tickable
  // checkboxes the same way. Every other document is prose and renders as
  // prose.
  const form =
    from.kind === 'gapform'
      ? createFormWriter()
      : from.kind === 'development'
        ? createChecklistWriter()
        : null;

  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens: headingTokens, depth }) {
    const text = this.parser.parseInline(headingTokens);
    // The contents list renders as text, so it needs the heading without its
    // markup and without the entities that escaping introduced.
    const plain = decodeEntities(text.replace(/<[^>]*>/g, ''));
    const id = identify(plain);
    if (depth === 2 || depth === 3) toc.push({ id, text: plain, depth });
    form?.heading(id, plain, depth);
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };

  const renderList = renderer.list;
  renderer.paragraph = function ({ tokens: paragraphTokens, text }) {
    const html = this.parser.parseInline(paragraphTokens);
    return form?.paragraph(text, html) ?? `<p>${html}</p>\n`;
  };
  renderer.list = function (token) {
    const fields = form?.list(token, (item) => this.parser.parseInline(item.tokens));
    return fields ?? renderList.call(this, token);
  };

  renderer.link = function ({ href, title, tokens: linkTokens }) {
    const text = this.parser.parseInline(linkTokens);
    const resolved = resolveLink(href, from);
    if (!resolved) return text;
    const attribute = title ? ` title="${title}"` : '';
    return `<a href="${resolved}"${attribute}>${text}</a>`;
  };

  let html = marked.parser(tokens, { renderer, gfm: true });
  if (from.kind === 'assessment') html = wrapAssessmentAnswers(html);
  return { title, html, toc };
}
