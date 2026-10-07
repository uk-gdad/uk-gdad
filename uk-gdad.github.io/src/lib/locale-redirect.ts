// Which locale route, if any, a browser's language settings point at.
//
// A locale route is a top-level route directory named by a locale code, such
// as `src/routes/cy-gb/`. The list below is written by hand, because reading
// the route files would pull server-only modules into the browser bundle.
// Add a code here when its route exists; a locale with no route must not be
// listed, or visitors would be sent to a 404.

/** Locale codes that have a route, lower case and hyphenated: `cy-gb`. */
export const localeRoutes: string[] = [];

/** `cy_GB`, `cy-GB` and `cy-gb` are one code: `cy-gb`. */
export function normaliseLocale(code: string): string {
    return code.trim().replace(/_/g, '-').toLowerCase();
}

/**
 * The first preferred language that has a locale route, as `/cy-gb/`, or
 * undefined. A language matches a route exactly (`cy-GB` to `cy-gb`) or by
 * its language subtag alone (`cy` to `cy-gb`), tried in the browser's order of
 * preference.
 */
export function localeRouteFor(
    preferred: readonly string[],
    available: readonly string[] = localeRoutes
): string | undefined {
    for (const raw of preferred) {
        const code = normaliseLocale(raw);
        if (!code) continue;
        const match =
            available.find((route) => route === code) ??
            available.find((route) => route.split('-')[0] === code.split('-')[0]);
        if (match) return `/${match}/`;
    }
    return undefined;
}
