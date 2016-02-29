import { basePath } from 'config';

// WebSocket connection manager
export default function createSocketManager () {
  let isConnecting = false;

  return function ({ socket }, actions) {
    if (socket || isConnecting) {
      return;
    }

    isConnecting = true;

    let newSocket = new WebSocket(`ws://${basePath}/ws`);
    newSocket.onopen = () => {
      isConnecting = false;
      console.log('socket connected');
      actions.useSocket(newSocket);
    };
    newSocket.onclose = (e) => {
      console.error('socket disconnected', e);
      actions.useSocket(null);
    };
  };
}
