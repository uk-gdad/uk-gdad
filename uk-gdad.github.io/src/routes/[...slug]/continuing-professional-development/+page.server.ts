import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('development');
export const load = documentLoad('development');
