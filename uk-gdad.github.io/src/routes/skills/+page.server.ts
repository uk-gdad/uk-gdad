import { getSkills } from '$lib/server/content';

export function load() {
  return { skills: getSkills() };
}
