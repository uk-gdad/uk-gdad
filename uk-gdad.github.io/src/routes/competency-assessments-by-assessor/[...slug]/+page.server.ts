import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('competencyByAssessor');
export const load = documentLoad('competencyByAssessor');
