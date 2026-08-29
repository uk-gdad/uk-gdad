// Shared load logic for the markdown document routes: start here, upskilling,
// continuing professional development, assessments, and skills gap forms.
// Each of those routes is the same page over a different content directory.

import { error } from '@sveltejs/kit';
import { getLevelContext, getSlugsFor, readDocument, renderMarkdown } from './content';
import { RESOURCES, normalizeSlug, type ResourceKind } from '$lib/types';

/** Prerender entries: one per level that actually has this kind of document. */
export function documentEntries(kind: ResourceKind) {
  return () => getSlugsFor(kind).map((slug) => ({ slug }));
}

export function documentLoad(kind: ResourceKind) {
  return ({ params }: { params: { slug: string } }) => {
    const slug = normalizeSlug(params.slug);
    const context = getLevelContext(slug);
    const markdown = readDocument(kind, slug);
    if (!context || !markdown) {
      error(404, `No ${kind} document for ${slug}`);
    }

    const resource = RESOURCES.find((entry) => entry.kind === kind)!;
    const { title, html, toc } = renderMarkdown(markdown, { kind, slug });

    return {
      kind,
      slug,
      resourceTitle: resource.title,
      title: title ?? `${resource.title}: ${context.level.title}`,
      html,
      toc,
      profession: { slug: context.profession.slug, title: context.profession.title },
      role: { title: context.role.title },
      level: { title: context.level.title, has: context.level.has }
    };
  };
}
