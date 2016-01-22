import { createComponent } from 'viter/viter';
import { basePath } from 'config';
import { useSocket } from 'actions/socket-actions';

// WebSocket connection manager
export default function createSocketManager () {
  let isConnecting = false;

  return createComponent({
    stores: ['net'],

    getState (NetStore) {
      return NetStore.socket;
    },

    shouldComponentUpdate (state, newState) {
      return newState === null && !isConnecting;
    },

    render () {
      isConnecting = true;

      let socket = new WebSocket(`ws://${basePath}/ws`);
      socket.onopen = function () {
        isConnecting = false;
        console.log('socket connected');
        useSocket(socket);
      };
      socket.onclose = function (e) {
        console.error('socket disconnected', e);
        useSocket(null);
      };
    }
  });
}
