import { getProfessions } from '$lib/server/content';

export function load() {
  return {
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: 'Professions — UK GDAD PCF',
    professions: getProfessions().map((profession) => ({
      slug: profession.slug,
      title: profession.title,
      levelCount: profession.levelCount,
      roles: profession.roles.map((role) => ({ slug: role.slug, title: role.title }))
    }))
  };
}
