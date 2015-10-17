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

  'modal:open': function (modalConfig) {
    let AppStore = getStore('app');

    AppStore.addModal(modalConfig);

    publishStoreUpdate('app');
  },

  'modal:close': function (modalId) {
    let AppStore = getStore('app');

    if (AppStore.removeModal(modalId)) {
      publishStoreUpdate('app');
    }
  }
}
