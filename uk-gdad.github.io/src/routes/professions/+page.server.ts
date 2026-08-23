import { getProfessions } from '$lib/server/content';

export function load() {
  return {
    professions: getProfessions().map((profession) => ({
      slug: profession.slug,
      title: profession.title,
      levelCount: profession.levelCount,
      roles: profession.roles.map((role) => ({ slug: role.slug, title: role.title }))
    }))
  };
}
