import { getSkills } from '#lib/server/content.js';

export function load() {
  // Where the framework has a page for a skill on this site, the tool links to
  // it. Match on the exact title: a qualified skill such as
  // "User focus (content design)" is a different skill from "User focus".
  const pages = new Map(getSkills().map((skill) => [skill.title, skill.slug]));
  return {
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: 'Skills self-assessment — UK GDAD PCF',
    pages: Object.fromEntries(pages)
  };
}
