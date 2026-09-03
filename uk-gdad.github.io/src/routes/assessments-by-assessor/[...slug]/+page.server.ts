import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('assessmentByAssessor');
export const load = documentLoad('assessmentByAssessor');
