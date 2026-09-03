// Turns a continuing professional development checklist's task lists into
// tickable checkboxes.
//
// The markdown stays plain markdown — `- [ ] …` — so it reads the same on
// GitHub as it does in the browser; only the rendered page makes each item
// interactive. Every item sits under a `###` heading (a CPD phase, an event,
// or a named skill), and that heading names the item in an export, exactly as
// `gapform.ts` names a skills gap form's fields after the question that asks
// them. See `static/assets/cpdform.js`, which saves ticks to this browser and
// exports them, the same way `gapform.js` does for a skills gap form's
// answers.

import type { Tokens } from 'marked';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function escapeAttribute(text: string): string {
  return text.replace(/[&<>"]/g, (character) => ESCAPES[character]);
}

export type ChecklistWriter = {
  /** Records a heading, so an item can be named after the section it sits in. */
  heading(id: string, text: string, depth: number): void;
  /** Checklists carry no special paragraphs — every one renders as prose. */
  paragraph(text: string, html: string): string | null;
  /** Form markup for a task list, or null to render it as an ordinary list. */
  list(token: Tokens.List, label: (item: Tokens.ListItem) => string): string | null;
};

export function createChecklistWriter(): ChecklistWriter {
  // The `###` heading an item sits under, and how many items this section has
  // named so far — together they make a key like "Skill: User focus #2".
  let section = 'Checklist';
  let withinSection = 0;
  let item = 0;
  const used = new Map<string, number>();
  const keyFor = (base: string) => {
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    return seen ? `${base} (${seen + 1})` : base;
  };

  return {
    heading(_id, text, depth) {
      if (depth === 3) {
        section = text;
        withinSection = 0;
      } else if (depth === 2) {
        section = 'Checklist';
        withinSection = 0;
      }
    },

    paragraph() {
      return null;
    },

    list(token, label) {
      const items = token.items;
      if (!items.length || !items.every((entry) => entry.task)) return null;

      const choices = items
        .map((entry) => {
          withinSection += 1;
          item += 1;
          const key = keyFor(`${section} #${withinSection}`);
          const id = `cpd-item-${item}`;
          return (
            `<div class="form-choice">` +
            `<input class="form-checkbox" type="checkbox" id="${id}" name="${id}"` +
            ` value="1" data-key="${escapeAttribute(key)}">` +
            `<label for="${id}">${label(entry)}</label>` +
            `</div>`
          );
        })
        .join('\n');

      return `<div class="form-choices">\n${choices}\n</div>\n`;
    }
  };
}
