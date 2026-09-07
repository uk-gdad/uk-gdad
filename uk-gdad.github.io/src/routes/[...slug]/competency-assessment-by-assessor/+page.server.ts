import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('competencyAssessmentByAssessor');
export const load = documentLoad('competencyAssessmentByAssessor');
