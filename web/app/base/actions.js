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

let reqId = 0;
function createRequest(method, params) {
  return {
    id: reqId += 1,
    method,
    params
  }
}
registerAction('socket:connected', function (socket) {
  console.log('socket connected');

  let NetStore = getStore('net');
  NetStore.socket = socket;

  NetStore.requests.push(createRequest('notes-list-read'));

  return 'net';
});

registerAction('socket:disconnected', function (e) {
  console.error('socket disconnected', e);

  let NetStore = getStore('net');
  NetStore.socket = null;

  return 'net';
});

registerAction('socket:message', function (msg) {
  console.log(msg);

  let NetStore = getStore('net');
  NetStore.removeRequest(msg.id);

  return 'net'
})
