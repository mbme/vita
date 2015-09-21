import {bus, CreateStoreWatcher} from 'viter/viter';
import {vitaPort} from 'config';

const basePath = `${window.location.hostname}:${vitaPort}`;

// WebSocket connector handler
export default CreateStoreWatcher({
  stores: ['net'],

  _isConnecting: false,

  getState (NetStore) {
    return NetStore.socket;
  },

  shouldUpdate (state, newState) {
    return newState === null && !this._isConnecting;
  },

  render () {
    this._isConnecting = true;

    let socket = new WebSocket(`ws://${basePath}/ws`);
    socket.onopen = () => {
      this._isConnecting = false;
      bus.publish('socket:connected', socket);
    };
    socket.onclose = (e) => bus.publish('socket:disconnected', e);
    socket.onmessage = (evt) => bus.publish('socket:message', JSON.parse(evt.data));
  }
});
