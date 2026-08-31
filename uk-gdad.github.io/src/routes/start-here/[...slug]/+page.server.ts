import { documentEntries, documentLoad } from '$lib/server/document';

export const entries = documentEntries('startHere');
export const load = documentLoad('startHere');
