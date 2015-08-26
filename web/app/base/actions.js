import {registerAction, getStore} from 'viter/viter';
import {contains} from 'lodash';

registerAction('initialized', function () {
  let AppStore = getStore('app');
  AppStore.initialized = true;

  return 'app';
});

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

registerAction('socket:connected', function (socket) {
  console.log('socket connected');
  let NetStore = getStore('net');
  NetStore.socket = socket;

  return 'net';
});

registerAction('socket:disconnected', function (e) {
  console.error('socket disconnected', e);

  let NetStore = getStore('net');
  NetStore.socket = null;

  return 'net';
});
