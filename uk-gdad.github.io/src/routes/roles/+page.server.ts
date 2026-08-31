import { getLevelRows } from '$lib/server/content';

export function load() {
  return {
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: 'Find a role — UK GDAD PCF',
    rows: getLevelRows()
  };
}
