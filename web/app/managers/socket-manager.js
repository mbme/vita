import { createComponent } from 'viter/viter';
import { basePath } from 'config';
import { useSocket } from 'controllers/app-controller';

// WebSocket connection manager
export default function createSocketManager () {
  let isConnecting = false;

  return createComponent({
    getState ({ socket }) {
      return socket;
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
