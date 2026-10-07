import { documentEntries, documentLoad } from '#lib/server/document.js';

export const entries = documentEntries('development');
export const load = documentLoad('development');
