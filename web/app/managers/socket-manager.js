import { createComponent } from 'viter/viter';
import { basePath } from 'config';

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
      socket.onopen = () => {
        isConnecting = false;
        console.log('socket connected');
        this.actions.useSocket(socket);
      };
      socket.onclose = (e) => {
        console.error('socket disconnected', e);
        this.actions.useSocket(null);
      };
    },
  });
}
