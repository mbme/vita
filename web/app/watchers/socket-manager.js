import {bus, createComponent} from 'viter/viter';
import {vitaPort} from 'config';

const basePath = `${window.location.hostname}:${vitaPort}`;

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
      socket.onopen = () => {
        isConnecting = false;
        bus.publish('socket:connected', socket);
      };
      socket.onclose = (e) => bus.publish('socket:disconnected', e);
      socket.onmessage = (evt) => bus.publish('socket:message', JSON.parse(evt.data));
    }
  })
}
