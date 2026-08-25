// Answers on a skills gap form: kept in this browser, exported on request.
//
// This is the only JavaScript on a content page, and it runs on skills gap
// forms alone. Everything it touches is rendered by
// `src/lib/server/gapform.ts`, which gives each field a `data-key` — the column
// heading in an export, and the label in the JSON.
//
// Nothing leaves the browser. Answers are written to localStorage under the
// page's own path, so a reader can close the tab and come back; the exports
// build a file in memory and hand it to the browser's download.
//
// The toolbar is hidden in the markup and shown here, so a reader without
// JavaScript is never offered a button that cannot work.

(function () {
  'use strict';

  var tools = document.getElementById('gapform-tools');
  var status = document.getElementById('gapform-status');
  var keyed = document.querySelectorAll('[data-key]');
  if (!tools || !keyed.length) return;

  var STORE = 'uk-gdad-pcf:gapform:' + window.location.pathname;
  var SAVE_DELAY = 400;
  // Word for word the message in the markup — see `DocumentPage.svelte`.
  var SAVED = 'Your answers are saved in this browser as you type. Nothing is sent anywhere.';

  /** Every field on the page, in the order a reader meets them. */
  var fields = Array.prototype.map.call(keyed, function (element) {
    if (element.tagName === 'TEXTAREA') {
      return { key: element.dataset.key, name: element.name, kind: 'text', element: element };
    }
    var inputs = Array.prototype.slice.call(element.querySelectorAll('input'));
    return {
      key: element.dataset.key,
      name: inputs.length ? inputs[0].name : element.dataset.key,
      kind: element.classList.contains('form-rating')
        ? 'rating'
        : inputs.length && inputs[0].type === 'checkbox'
          ? 'choices'
          : 'choice',
      inputs: inputs
    };
  });

  /** What a reader has put in one field: a string, or a list for a tick list. */
  function read(field) {
    if (field.kind === 'text') return field.element.value;
    var chosen = field.inputs
      .filter(function (input) {
        return input.checked;
      })
      .map(function (input) {
        return input.value;
      });
    return field.kind === 'choices' ? chosen : chosen[0] || '';
  }

  function write(field, value) {
    if (field.kind === 'text') {
      field.element.value = typeof value === 'string' ? value : '';
      return;
    }
    var wanted = Array.isArray(value) ? value : value ? [value] : [];
    field.inputs.forEach(function (input) {
      input.checked = wanted.indexOf(input.value) !== -1;
    });
  }

  /** A rating exports as the number it starts with, which is what it means. */
  function ratingOf(value) {
    var found = /^(\d+)/.exec(value || '');
    return found ? found[1] : '';
  }

  function say(message) {
    if (status && status.textContent.trim() !== message) status.textContent = message;
  }

  // Saving ---------------------------------------------------------------

  var warned = false;

  function save() {
    var answers = {};
    fields.forEach(function (field) {
      answers[field.name] = read(field);
    });
    try {
      window.localStorage.setItem(
        STORE,
        JSON.stringify({ version: 1, saved: new Date().toISOString(), answers: answers })
      );
      // The status line is a live region, so a screen reader reads any change
      // aloud. Saving happens every few seconds while someone types, and a
      // timestamp here would interrupt them constantly. This is word for word
      // what the markup already says, so a routine save announces nothing;
      // only restoring, exporting, clearing and failing have anything to say.
      say(SAVED);
    } catch (error) {
      // Private browsing, a full store, or storage turned off altogether.
      if (!warned) {
        warned = true;
        say('This browser will not let the page save your answers. Export before you leave.');
      }
    }
  }

  function restore() {
    var saved;
    try {
      saved = window.localStorage.getItem(STORE);
    } catch (error) {
      return;
    }
    if (!saved) return;
    var stored;
    try {
      stored = JSON.parse(saved);
    } catch (error) {
      return;
    }
    var answers = (stored && stored.answers) || {};
    fields.forEach(function (field) {
      if (Object.prototype.hasOwnProperty.call(answers, field.name)) {
        write(field, answers[field.name]);
      }
    });
    say(
      stored && stored.saved
        ? 'Answers restored from this browser, saved ' + new Date(stored.saved).toLocaleString()
        : 'Answers restored from this browser.'
    );
  }

  var pending;
  function scheduleSave() {
    window.clearTimeout(pending);
    pending = window.setTimeout(save, SAVE_DELAY);
  }

  // Exporting ------------------------------------------------------------

  function title() {
    var heading = document.querySelector('h1');
    return heading ? heading.textContent.trim() : document.title;
  }

  function filename(extension) {
    var parts = window.location.pathname.split('/').filter(Boolean);
    var last = parts.length ? parts[parts.length - 1] : 'skills-gap-form';
    return last + '-skills-gap-form.' + extension;
  }

  function download(text, type, name) {
    var blob = new Blob([text], { type: type + ';charset=utf-8' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  /**
   * A TSV cell. Tabs and newlines are what would break the file, so they are
   * escaped rather than dropped, and the backslash that escapes them is
   * escaped first so that the round trip is exact.
   */
  function cell(value) {
    return String(value)
      .replace(/\\/g, '\\\\')
      .replace(/\t/g, '\\t')
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n');
  }

  function exportTsv() {
    var headings = ['Form', 'URL', 'Exported'];
    var values = [title(), window.location.href, new Date().toISOString()];
    fields.forEach(function (field) {
      var value = read(field);
      headings.push(field.key);
      values.push(
        field.kind === 'rating'
          ? ratingOf(value)
          : Array.isArray(value)
            ? value.join('; ')
            : value
      );
    });
    var tsv = headings.map(cell).join('\t') + '\n' + values.map(cell).join('\t') + '\n';
    download(tsv, 'text/tab-separated-values', filename('tsv'));
    say('Exported as TSV: one row of headings, one row of answers.');
  }

  function exportJson() {
    var answers = {};
    fields.forEach(function (field) {
      var value = read(field);
      if (field.kind === 'rating') {
        var rating = ratingOf(value);
        answers[field.key] = rating === '' ? null : Number(rating);
      } else {
        answers[field.key] = value;
      }
    });
    var record = {
      form: title(),
      url: window.location.href,
      exported: new Date().toISOString(),
      answers: answers
    };
    download(JSON.stringify(record, null, 2) + '\n', 'application/json', filename('json'));
    say('Exported as JSON.');
  }

  function clearAnswers() {
    var sure = window.confirm(
      'Clear every answer on this form, and delete the copy saved in this browser?'
    );
    if (!sure) return;
    fields.forEach(function (field) {
      write(field, field.kind === 'choices' ? [] : '');
    });
    try {
      window.localStorage.removeItem(STORE);
    } catch (error) {
      // Nothing was stored in the first place.
    }
    say('Answers cleared.');
  }

  // Wiring ---------------------------------------------------------------

  function on(id, handler) {
    var button = document.getElementById(id);
    if (button) button.addEventListener('click', handler);
  }

  on('gapform-export-tsv', exportTsv);
  on('gapform-export-json', exportJson);
  on('gapform-clear', clearAnswers);

  document.addEventListener('input', scheduleSave);
  document.addEventListener('change', scheduleSave);
  // Typing and closing the tab inside the save delay would lose the last few
  // words. `pagehide` covers closing, navigating away, and the mobile case of
  // switching apps, which `beforeunload` does not.
  window.addEventListener('pagehide', function () {
    window.clearTimeout(pending);
    save();
  });

  restore();
  tools.hidden = false;
})();
