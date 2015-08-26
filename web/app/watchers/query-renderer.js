import {isEqual} from 'lodash';
import page from 'page';

import {CreateStoreWatcher} from 'viter/viter';

// URL Query params renderer
export default CreateStoreWatcher({
  stores: ['app'],

  getState (AppStore) {
    return AppStore.selectedIds.slice(0).sort();
  },

  shouldUpdate (state, newState) {
    return !isEqual(state, newState);
  },

  render (state) {
    page(`${location.pathname}?ids=(${state.join(',')})`);
  }
});
