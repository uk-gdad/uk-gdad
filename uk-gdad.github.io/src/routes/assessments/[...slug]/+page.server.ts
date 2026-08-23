import { documentEntries, documentLoad } from '$lib/server/document';

// These pages are static prose with nothing to hydrate, so they ship as plain
// HTML: no client-side router payload, which keeps the built site much smaller.
export const csr = false;

export const entries = documentEntries('assessment');
export const load = documentLoad('assessment');
