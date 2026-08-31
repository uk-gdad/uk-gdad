import { getSkills } from '$lib/server/content';

export function load() {
  return {
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: 'Skills — UK GDAD PCF',
    skills: getSkills()
  };
}
