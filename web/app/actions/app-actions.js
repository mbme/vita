import { getStore, publishStoreUpdate } from 'viter/viter';

export function updateFilter (filter) {
  let AppStore = getStore('app');

  if (AppStore.searchFilter !== filter) {
    AppStore.setSearchFilter(filter);

    console.debug('search filter -> %s', filter);

    publishStoreUpdate('app');
  }
}

export function openModal (id, view) {
  let AppStore = getStore('app');

  AppStore.addModal(id, view);

  publishStoreUpdate('app');
}

export function closeModal (id) {
  let AppStore = getStore('app');

  if (AppStore.removeModal(id)) {
    publishStoreUpdate('app');
  }
}

export function changePage (page) {
  let AppStore = getStore('app');

  if (AppStore.page === page) {
    return;
  }

  AppStore.setPage(page);

  publishStoreUpdate('app');
}
