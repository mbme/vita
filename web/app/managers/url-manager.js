import { uniq, compact } from 'lodash';
import page from 'page';

import { match, getQueryParam } from 'helpers/utils';

function parseIdsStr (idsStr) {
  let matches = match(idsStr, /^\(([a-z0-9, :\/]*)\)$/);

  return uniq(match(matches[1], /(:[a-z]+\/[0-9]+)/g));
}

export function getIdsFromUrl () {
  return parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids'));
}

// URL Query params renderer
export default function crateUrlManager () {
  let currentNotes;
  return function ({ notes }) {
    if (currentNotes === notes) {
      return;
    }
    currentNotes = notes;

    let url = location.pathname;

    let ids = compact(notes.map(note => note.id).toArray());

    if (ids.length) {
      url += `?ids=(${ids.join(',')})`;
    }

    page(url);
  };
}
