import { getStore, publishStoreUpdate } from 'viter/viter';

function handleSocketMessage (msg) {
  let NetStore = getStore('net');

  NetStore.processResponse(msg);

  publishStoreUpdate('net');
}

export function useSocket (socket) {
  let NetStore = getStore('net');
  NetStore.setSocket(socket);

  if (socket) {
    socket.onmessage = function (e) {
      handleSocketMessage(JSON.parse(e.data));
    }
  }

  publishStoreUpdate('net');
}
