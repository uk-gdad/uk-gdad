import { error } from '@sveltejs/kit';
import { getProfession, getProfessions } from '$lib/server/content';

export function entries() {
  return getProfessions().map((profession) => ({ profession: profession.slug }));
}

export function load({ params }: { params: { profession: string } }) {
  const profession = getProfession(params.profession);
  if (!profession) error(404, `No profession named ${params.profession}`);
  return { profession };
}
