import _ from 'lodash';
import page from 'page';

import {createComponent} from 'viter/viter';

// URL Query params renderer
export default function crateUrlRenderer() {
  return createComponent({
    stores: ['notes'],

    getState (NotesStore) {
      return NotesStore.notes;
    },

    render (state) {
      let url = location.pathname;

      let ids = _(state).map('id').compact().join(',');

      if (ids) {
        url += `?ids=(${ids})`;
      }

      page(url);
    }
  });
}
