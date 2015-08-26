import {CreateStoreWatcher} from 'viter/viter';
import {contains} from 'lodash';

// Message handler
export default CreateStoreWatcher({
  stores: ['net'],

  _pending_requests: [],

  getState (NetStore) {
    return {
      socket: NetStore.socket,
      requests: NetStore.requests
    };
  },

  shouldUpdate (state, newState) {
    return newState.socket && newState.requests.length;
  },

  render ({socket: socket, requests: requests}) {
    // create new array of pending request ids to skip
    // ids of requests which were removed from 'requests' array
    let new_pending = [];
    requests.forEach(request => {
      if (!contains(this._pending_requests, request.id)) {
        socket.send(JSON.stringify(request));
      }
      new_pending.push(request.id);
    });
    this._pending_requests = new_pending;
  }
});
