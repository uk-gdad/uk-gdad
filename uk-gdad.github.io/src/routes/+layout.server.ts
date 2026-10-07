import { getLocales } from '#lib/server/content.js';

export function load() {
  return { locales: getLocales() };
}
