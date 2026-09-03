// Ticks on a continuing professional development checklist: kept in this
// browser, exported on request.
//
// This is the checklist's counterpart to `gapform.js`. Everything it touches
// is rendered by `src/lib/server/checklist.ts`, which gives each checkbox a
// `data-key` — the column heading in an export, and the label in the JSON.
//
// Nothing leaves the browser. Ticks are written to localStorage under the
// page's own path, so a reader can close the tab and come back; the exports
// build a file in memory and hand it to the browser's download.
//
// The toolbar is hidden in the markup and shown here, so a reader without
// JavaScript is never offered a button that cannot work.

(function () {
  'use strict';

  var tools = document.getElementById('cpdform-tools');
  var status = document.getElementById('cpdform-status');
  var boxes = document.querySelectorAll('input[type="checkbox"][data-key]');
  if (!tools || !boxes.length) return;

  var STORE = 'uk-gdad-pcf:cpdform:' + window.location.pathname;
  var SAVE_DELAY = 400;
  // Word for word the message in the markup — see `DocumentPage.svelte`.
  var SAVED = 'Your ticks are saved in this browser as you go. Nothing is sent anywhere.';

  var fields = Array.prototype.map.call(boxes, function (box) {
    return { key: box.dataset.key, element: box };
  });

  function say(message) {
    if (status && status.textContent.trim() !== message) status.textContent = message;
  }

  // Saving ---------------------------------------------------------------

  var warned = false;

  function save() {
    var ticks = {};
    fields.forEach(function (field) {
      ticks[field.key] = field.element.checked;
    });
    try {
      window.localStorage.setItem(
        STORE,
        JSON.stringify({ version: 1, saved: new Date().toISOString(), ticks: ticks })
      );
      // The status line is a live region, so a screen reader reads any change
      // aloud. Saving happens on every tick, and a timestamp here would
      // announce constantly. This is word for word what the markup already
      // says, so a routine save announces nothing; only restoring, exporting,
      // clearing and failing have anything to say.
      say(SAVED);
    } catch (error) {
      // Private browsing, a full store, or storage turned off altogether.
      if (!warned) {
        warned = true;
        say('This browser will not let the page save your ticks. Export before you leave.');
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
    var ticks = (stored && stored.ticks) || {};
    fields.forEach(function (field) {
      if (Object.prototype.hasOwnProperty.call(ticks, field.key)) {
        field.element.checked = !!ticks[field.key];
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
    var last = parts.length ? parts[parts.length - 1] : 'cpd-checklist';
    return last + '-cpd-checklist.' + extension;
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
    var headings = ['Checklist', 'URL', 'Exported'];
    var values = [title(), window.location.href, new Date().toISOString()];
    fields.forEach(function (field) {
      headings.push(field.key);
      values.push(field.element.checked ? 'Done' : '');
    });
    var tsv = headings.map(cell).join('\t') + '\n' + values.map(cell).join('\t') + '\n';
    download(tsv, 'text/tab-separated-values', filename('tsv'));
    say('Exported as TSV: one row of headings, one row of ticks.');
  }

  function exportJson() {
    var ticks = {};
    fields.forEach(function (field) {
      ticks[field.key] = field.element.checked;
    });
    var record = {
      checklist: title(),
      url: window.location.href,
      exported: new Date().toISOString(),
      ticks: ticks
    };
    download(JSON.stringify(record, null, 2) + '\n', 'application/json', filename('json'));
    say('Exported as JSON.');
  }

  function clearAnswers() {
    var sure = window.confirm(
      'Clear every tick on this checklist, and delete the copy saved in this browser?'
    );
    if (!sure) return;
    fields.forEach(function (field) {
      field.element.checked = false;
    });
    try {
      window.localStorage.removeItem(STORE);
    } catch (error) {
      // Nothing was stored in the first place.
    }
    say('Ticks cleared.');
  }

  // Wiring ---------------------------------------------------------------

  function on(id, handler) {
    var button = document.getElementById(id);
    if (button) button.addEventListener('click', handler);
  }

  on('cpdform-export-tsv', exportTsv);
  on('cpdform-export-json', exportJson);
  on('cpdform-clear', clearAnswers);

  document.addEventListener('change', scheduleSave);
  // Ticking and closing the tab inside the save delay would lose the last
  // click. `pagehide` covers closing, navigating away, and the mobile case of
  // switching apps, which `beforeunload` does not.
  window.addEventListener('pagehide', function () {
    window.clearTimeout(pending);
    save();
  });

  restore();
  tools.hidden = false;
})();
