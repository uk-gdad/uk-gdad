// Turns a skills gap form's markdown into a page you can actually fill in.
//
// The markdown stays plain markdown — the source files are read on GitHub and
// printed as often as they are read on screen, so they carry no HTML. Three
// shapes are recognised at render time and become real controls:
//
//   **Q10.** …                     a numbered question, which names the field
//   *Your answer:*                 -> a labelled <textarea>
//   - [ ] 0 — None: …              -> a radio group, where the list is a rating
//   - [ ] Data protection — …      -> a checkbox group, for everything else
//
// Nothing is submitted anywhere: there is no form element and no action. Each
// field carries a `data-key`, which is the column heading in an export and the
// key in the saved answers — see `static/assets/gapform.js`.

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

/** A rating list: every item opens with a digit and a dash, as `2 — Working`. */
function isRating(items: Tokens.ListItem[]): boolean {
  return items.every((item) => /^\d+\s*[—–-]\s/.test(item.text));
}

/** `**Q10.** Which indicators …` — the number names every field in the block. */
const QUESTION = /^\*\*Q(\d+)\.\*\*/;

/**
 * Whether a question invites more than one answer. The forms say so: they ask
 * the reader to tick any that apply, or to tick three, or they ask "which of
 * these". Everything else offers one answer from a set — yes, mostly, no, not
 * sure — and a radio group is the honest control for that.
 */
function isMultiple(question: string): boolean {
  return /\btick\b/i.test(question) || /^which\b/i.test(question);
}

const ANSWER = /^\*Your answer:\*$/;

export type FormWriter = {
  /** Records a heading, so a rating group can be named after its skill. */
  heading(id: string, text: string, depth: number): void;
  /** Form markup for a paragraph, or null to render it as ordinary prose. */
  paragraph(text: string, html: string): string | null;
  /** Form markup for a task list, or null to render it as an ordinary list. */
  list(token: Tokens.List, label: (item: Tokens.ListItem) => string): string | null;
};

export function createFormWriter(): FormWriter {
  // The question a `*Your answer:*` or a set of choices belongs to, and the
  // skill a rating belongs to. Both are set by the token that introduces the
  // block, which the parser always reaches first.
  let question: number | null = null;
  let asked = '';
  let skill: { id: string; title: string } | null = null;
  let group = 0;
  // A question can carry both a tick list and a free-text follow-up, and both
  // would be `Q27`. The first keeps the number; the next takes a letter, so
  // every column heading in an export stays distinct.
  const used = new Map<string, number>();
  const keyFor = (base: string) => {
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    return seen ? `${base}${String.fromCharCode(97 + seen)}` : base;
  };

  return {
    heading(id, text, depth) {
      if (depth === 3 && text.startsWith('Skill:')) {
        skill = { id, title: text.slice('Skill:'.length).trim() };
      } else if (depth === 2) {
        skill = null;
      }
    },

    paragraph(text, html) {
      const numbered = QUESTION.exec(text);
      if (numbered) {
        question = Number(numbered[1]);
        asked = text.slice(numbered[0].length).trim();
        return `<p class="form-question" id="q${question}-prompt">${html}</p>\n`;
      }
      if (ANSWER.test(text)) {
        const key = keyFor(question === null ? `Answer ${(group += 1)}` : `Q${question}`);
        const name = question === null ? `answer-${group}` : `q${question}-answer`;
        return (
          `<div class="form-field">` +
          `<label class="form-label" for="${name}">Your answer:</label>` +
          `<textarea class="form-textarea" id="${name}" name="${name}" rows="6"` +
          ` data-key="${escapeAttribute(key)}"></textarea>` +
          `</div>\n`
        );
      }
      return null;
    },

    list(token, label) {
      const items = token.items;
      if (!items.length || !items.every((item) => item.task)) return null;

      // The `## Rating scale` section shows a filled-in answer as an example.
      // It stays an example: the same controls, ticked, and not clickable. It
      // carries no key, so it is neither saved nor exported.
      const example = items.some((item) => item.checked);
      const rating = isRating(items);
      const type = rating || !isMultiple(asked) ? 'radio' : 'checkbox';
      group += 1;
      const name = example
        ? `example-${group}`
        : rating
          ? `rate-${skill?.id ?? group}`
          : `q${question ?? group}`;
      const key = example ? '' : keyFor(rating ? `Rating: ${skill?.title ?? name}` : `Q${question ?? group}`);

      const choices = items
        .map((item, index) => {
          const id = `${name}-${index}`;
          const state = example ? ' checked disabled' : '';
          return (
            `<div class="form-choice">` +
            `<input class="form-${type}" type="${type}" id="${id}" name="${name}"` +
            ` value="${escapeAttribute(item.text.replace(/\s+/g, ' '))}"${state}>` +
            `<label for="${id}">${label(item)}</label>` +
            `</div>`
          );
        })
        .join('\n');

      // A rating names itself, because the question it sits under is the one
      // before the skill block rather than this one. Every other group is
      // labelled by the question that introduces it.
      const legend = rating
        ? `<legend class="visually-hidden">Rate yourself${
            skill ? `: ${escapeAttribute(skill.title)}` : ''
          }</legend>`
        : '';
      const labelled =
        rating || example || question === null ? '' : ` aria-labelledby="q${question}-prompt"`;
      const keyed = example ? '' : ` data-key="${escapeAttribute(key)}"`;

      return (
        `<fieldset class="form-choices${rating ? ' form-rating' : ''}"${labelled}${keyed}>\n` +
        `${legend}${choices}\n</fieldset>\n`
      );
    }
  };
}
