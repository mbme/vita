import {bus, CreateStoreWatcher} from 'viter/viter';

const basePath = `${window.location.hostname}:${window.VITA_PORT || window.location.port}`;

// WebSocket connector handler
export default CreateStoreWatcher({
  stores: ['net'],

  getState (NetStore) {
    return NetStore.socket;
  },

  shouldUpdate (state, newState) {
    return newState === null;
  },

  render () {
    let socket = new WebSocket(`ws://${basePath}/ws`);
    socket.onopen = () => bus.publish('socket:connected', socket);
    socket.onclose = (e) => bus.publish('socket:disconnected', e);
    socket.onmessage = (evt) => bus.publish('socket:message', JSON.parse(evt.data));
  }
});
