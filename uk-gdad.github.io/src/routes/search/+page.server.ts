import { getLevelRows, getSkills } from '#lib/server/content.js';

export function load() {
  return {
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: 'Search — UK GDAD PCF',
    rows: getLevelRows(),
    skills: getSkills()
  };
}
