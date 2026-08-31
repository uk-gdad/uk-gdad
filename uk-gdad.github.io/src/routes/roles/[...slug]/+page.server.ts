import { error } from '@sveltejs/kit';
import {
  getLevelContext,
  getSlugsFor,
  parseSummary,
  readDocument
} from '$lib/server/content';
import { normalizeSlug } from '$lib/types';

export function entries() {
  return getSlugsFor('summary').map((slug) => ({ slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const slug = normalizeSlug(params.slug);
  const context = getLevelContext(slug);
  const text = readDocument('summary', slug);
  if (!context || !text) error(404, `No role level at ${slug}`);

  return {
    slug,
    // page.data.title convention: the full <title> text, read by the root
    // layout for the tab title and for SharePicker.
    title: `${context.level.title} — ${context.role.title} — UK GDAD PCF`,
    summary: parseSummary(text),
    profession: { slug: context.profession.slug, title: context.profession.title },
    role: { slug: context.role.slug, title: context.role.title },
    level: {
      title: context.level.title,
      order: context.level.order,
      inUse: context.level.inUse,
      has: context.level.has
    },
    siblings: context.role.levels.map((level) => ({
      slug: level.slug,
      title: level.title,
      order: level.order
    }))
  };
}
