import {registerAction, getStore} from 'viter/viter';
import {contains} from 'lodash';

registerAction('url:changed', function (page) {
  let AppStore = getStore('app');

  if (AppStore.page === page) {
    return;
  }

  AppStore.page = page;

  return 'app';
});

registerAction('item:selected', function (...ids) {
  let AppStore = getStore('app');

  let newIds = ids.filter(id => !contains(AppStore.selectedIds, id));

  if (!newIds.length) {
    return;
  }

  AppStore.selectedIds.push(...newIds);

  return 'app';
});
