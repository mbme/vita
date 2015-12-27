import {getStore, publishStoreUpdate} from 'viter/viter';

export default {
  'search:filter-changed': function (filter) {
    let AppStore = getStore('app');

    if (AppStore.searchFilter !== filter) {
      AppStore.setSearchFilter(filter);

      console.debug('search filter -> %s', filter);

      publishStoreUpdate('app');
    }
  },

  'modal:open': function (id, view) {
    let AppStore = getStore('app');

    AppStore.addModal(id, view);

    publishStoreUpdate('app');
  },

  'modal:close': function (id) {
    let AppStore = getStore('app');

    if (AppStore.removeModal(id)) {
      publishStoreUpdate('app');
    }
  }
}
