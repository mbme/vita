import { registerAction, getStore} from 'viter/viter';

registerAction('search:filter-changed', function (filter) {
  let AppStore = getStore('app');

  if (AppStore.searchFilter !== filter) {
    AppStore.searchFilter = filter;

    console.debug('search filter -> %s', filter);

    return 'app';
  }
});
