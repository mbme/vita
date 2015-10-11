import { getStore, publishStoreUpdate } from 'viter/viter';

export default {
  'socket:connected': function (socket) {
    console.log('socket connected');

    let NetStore = getStore('net');
    NetStore.setSocket(socket);

    publishStoreUpdate('net');
  },

  'socket:disconnected': function (e) {
    console.error('socket disconnected', e);

    let NetStore = getStore('net');
    NetStore.setSocket(null);

    publishStoreUpdate('net');
  },

  'socket:message': function (msg) {
    let NetStore = getStore('net');

    let request = NetStore.getRequest(msg.id);
    if (!request) {
      console.error('unexpected message', msg);
      return;
    }

    if (msg.error) {
      request.deferred.reject(msg.error);
    } else {
      request.deferred.resolve(msg.result);
    }

    NetStore.removeRequest(msg.id);

    publishStoreUpdate('net');
  }
}
