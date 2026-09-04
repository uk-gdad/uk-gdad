// Shared shapes for the UK GDAD PCF catalog.
//
// These types cross the server/client boundary: the catalog is read from the
// markdown in `content/` at build time, then serialised into each prerendered
// page. Keep them small — every field here is shipped to the browser.

/** One of the kinds of document the site publishes for a role level. */
export type ResourceKind =
  | 'summary'
  | 'startHere'
  | 'upskilling'
  | 'development'
  | 'assessmentByAssessor'
  | 'assessmentByYourself'
  | 'competencyByAssessor'
  | 'competencyByYourself'
  | 'gapform';

/** A role level: one markdown file per document kind, e.g. "Senior developer". */
export type Level = {
  /** Path within the content tree, without extension, e.g. `data/data-analyst/2-data-analyst`. */
  slug: string;
  /** Display name of the level, e.g. "Senior developer". */
  title: string;
  /** Leading number in the file name, used for ordering. Null when unnumbered. */
  order: number | null;
  /** Whether the level is marked NOT IN USE in the framework. */
  inUse: boolean;
  /** Which documents exist for this level. */
  has: Record<ResourceKind, boolean>;
};

/** A role, e.g. "Data analyst", holding the levels within it. */
export type Role = {
  slug: string;
  title: string;
  levels: Level[];
};

/** A profession, e.g. "Software development", holding its roles. */
export type Profession = {
  slug: string;
  title: string;
  roles: Role[];
  levelCount: number;
};

/** One skill as named in a role summary, e.g. "User focus". */
export type Skill = {
  slug: string;
  title: string;
  /** How many role levels list this skill. */
  levelCount: number;
};

/** A flat row for the searchable role finder. */
export type LevelRow = {
  slug: string;
  levelTitle: string;
  roleTitle: string;
  professionTitle: string;
  professionSlug: string;
  inUse: boolean;
};

/** Sections parsed out of a role summary document. */
export type Summary = {
  professionTitle: string;
  roleTitle: string;
  roleDescription: string[];
  roleDuties: string[];
  roleNotes: string[];
  levelTitle: string;
  levelDescription: string[];
  levelDuties: string[];
  levelNotes: string[];
  skills: { title: string; slug: string; points: string[] }[];
};

/** A heading extracted from a markdown document, for on-page contents. */
export type TocEntry = { id: string; text: string; depth: number };

export const RESOURCES: {
  kind: ResourceKind;
  title: string;
  short: string;
  base: string;
  description: string;
}[] = [
  {
    kind: 'startHere',
    title: 'Start here',
    short: 'Start here',
    base: '/start-here',
    description: 'A first orientation to the level, and a learning pathway to work through.'
  },
  {
    kind: 'summary',
    title: 'Role summary',
    short: 'Specification',
    base: '/roles',
    description: 'What the role does, what the level is accountable for, and the skills it needs.'
  },
  {
    kind: 'upskilling',
    title: 'Upskilling resources',
    short: 'Upskilling',
    base: '/upskilling',
    description: 'Courses, blog posts, research, videos and books for learning the role.'
  },
  {
    kind: 'development',
    title: 'Continuing professional development',
    short: 'Development',
    base: '/continuing-professional-development',
    description: 'A checklist for planning, doing and recording your ongoing development.'
  },
  {
    kind: 'assessmentByAssessor',
    title: 'Assessment (by assessor)',
    short: 'Assessment',
    base: '/assessments-by-assessor',
    description:
      'Cognitive, numeric, verbal and situational judgement items an assessor administers to a candidate.'
  },
  {
    kind: 'assessmentByYourself',
    title: 'Assessment (by yourself)',
    short: 'Practice',
    base: '/assessments-by-yourself',
    description:
      'The same four assessment types, as practice material you work through on your own.'
  },
  {
    kind: 'competencyByAssessor',
    title: 'Competency assessment (by assessor)',
    short: 'Competency',
    base: '/competency-assessments-by-assessor',
    description:
      'A skill-by-skill competency matrix an assessor rates a candidate or employee against.'
  },
  {
    kind: 'competencyByYourself',
    title: 'Competency assessment (by yourself)',
    short: 'Self-rating',
    base: '/competency-assessments-by-yourself',
    description: 'practice material for this kind of assessment that you can try on your own.'
  },
  {
    kind: 'gapform',
    title: 'Skills gap form',
    short: 'Gap form',
    base: '/skills-gap-forms',
    description: 'A form to fill in about the skills this level needs, and where your gaps are.'
  }
];

/** Turn a title into a URL-safe slug. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * A rest parameter keeps the trailing slash that `trailingSlash: 'always'`
 * appends, so `/roles/a/b/c/` arrives as `a/b/c/`. Content lookups need the
 * bare path.
 */
export function normalizeSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, '');
}
