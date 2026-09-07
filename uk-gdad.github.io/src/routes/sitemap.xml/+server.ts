import { getSkills, getProfessions, getSlugsFor } from '$lib/server/content';
import { resourceHref, type ResourceKind } from '$lib/types';

export const prerender = true;

const ORIGIN = 'https://uk-gdad.github.io';

const DOCUMENT_KINDS: ResourceKind[] = [
  'summary',
  'startHere',
  'upskilling',
  'development',
  'psychometricAssessmentByAssessor',
  'psychometricAssessmentByIndividual',
  'competencyAssessmentByAssessor',
  'competencyAssessmentByIndividual',
  'skillGapForm'
];

export function GET() {
  const paths = [
    '/',
    '/professions/',
    '/roles/',
    '/skills/',
    '/skills-self-assessment/',
    '/about/',
    ...getProfessions().map((profession) => `/professions/${profession.slug}/`),
    ...getSkills().map((skill) => `/skills/${skill.slug}/`),
    ...DOCUMENT_KINDS.flatMap((kind) =>
      getSlugsFor(kind).map((slug) => resourceHref(kind, slug))
    )
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${ORIGIN}${path}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
