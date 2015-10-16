import page from 'page';

import {createComponent} from 'viter/viter';

// URL Query params renderer
export default function crateUrlRenderer() {
  return createComponent({
    stores: ['app'],

    getState (AppStore) {
      return AppStore.selectedIds;
    },

    render (state) {
      let url = location.pathname;

      if (state.length) {
        url += `?ids=(${state.join(',')})`;
      }

      page(url);
    }
  });
}
