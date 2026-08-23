import { getLevelRows } from '$lib/server/content';

export function load() {
  return { rows: getLevelRows() };
}
