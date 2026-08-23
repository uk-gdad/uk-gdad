import { getLevelRows, getSkills, getProfessions, getSlugsFor } from '$lib/server/content';

export const prerender = true;

const ORIGIN = 'https://uk-gdad.github.io';

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
    ...getLevelRows().map((row) => `/roles/${row.slug}/`),
    ...getSlugsFor('upskilling').map((slug) => `/upskilling/${slug}/`),
    ...getSlugsFor('development').map((slug) => `/continuing-professional-development/${slug}/`),
    ...getSlugsFor('assessment').map((slug) => `/assessments/${slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${ORIGIN}${path}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
