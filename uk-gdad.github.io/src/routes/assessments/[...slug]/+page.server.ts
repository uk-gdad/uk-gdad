import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('assessment');
export const load = documentLoad('assessment');
