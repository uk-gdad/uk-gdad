import { getLevelRows, getProfessions, getSkills, getSlugsFor } from '$lib/server/content';

export function load() {
  const professions = getProfessions().map((profession) => ({
    slug: profession.slug,
    title: profession.title,
    roleCount: profession.roles.length,
    levelCount: profession.levelCount
  }));

  return {
    professions,
    counts: {
      professions: professions.length,
      roles: professions.reduce((total, profession) => total + profession.roleCount, 0),
      levels: getLevelRows().length,
      skills: getSkills().length,
      startHere: getSlugsFor('startHere').length,
      upskilling: getSlugsFor('upskilling').length,
      development: getSlugsFor('development').length,
      assessment: getSlugsFor('assessment').length,
      gapform: getSlugsFor('gapform').length
    }
  };
}
