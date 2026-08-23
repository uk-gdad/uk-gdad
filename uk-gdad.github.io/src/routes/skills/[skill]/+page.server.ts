import { error } from '@sveltejs/kit';
import { getSkill, getSkills } from '$lib/server/content';

export function entries() {
  return getSkills().map((skill) => ({ skill: skill.slug }));
}

export function load({ params }: { params: { skill: string } }) {
  const skill = getSkill(params.skill);
  if (!skill) error(404, `No skill named ${params.skill}`);

  // Group the role levels by profession so the page reads as "who needs this".
  const professions = new Map<string, { title: string; slug: string; rows: typeof skill.rows }>();
  for (const row of skill.rows) {
    const entry = professions.get(row.professionSlug) ?? {
      title: row.professionTitle,
      slug: row.professionSlug,
      rows: []
    };
    entry.rows.push(row);
    professions.set(row.professionSlug, entry);
  }

  return {
    title: skill.title,
    levelCount: skill.rows.length,
    professions: [...professions.values()].sort((a, b) => a.title.localeCompare(b.title))
  };
}
