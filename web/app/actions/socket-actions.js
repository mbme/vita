import {registerAction, getStore} from 'viter/viter';

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
