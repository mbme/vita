import _ from 'lodash';
import page from 'page';

import { createComponent } from 'viter/viter';
import { match, getQueryParam } from 'helpers/utils';

function parseIdsStr (idsStr) {
  let matches = match(idsStr, /^\(([a-z0-9, :\/]*)\)$/);

  return _.uniq(match(matches[1], /(:[a-z]+\/[0-9]+)/g));
}

export function getIdsFromUrl () {
  return parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids'));
}

// URL Query params renderer
export default function crateUrlManager () {
  return createComponent({

    getState ({ notes }) {
      return notes;
    },

    render (state) {
      let url = location.pathname;

      let ids = _.compact(state.map(note => note.id).toArray());

      if (ids.length) {
        url += `?ids=(${ids.join(',')})`;
      }

      page(url);
    },
  });
}
