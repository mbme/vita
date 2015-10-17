import {createComponent} from 'viter/viter';
import {contains, pick} from 'lodash';

// Message sender
export default function createMessageSender() {
  let pendingRequests = [];

  return createComponent({
    stores: ['net'],

    getState (NetStore) {
      return {
        socket: NetStore.socket,
        requests: NetStore.requests
      };
    },

    shouldComponentUpdate (state, newState) {
      return !newState.requests.isEmpty();
    },

    render ({socket, requests}) {
      if (!socket) {
        pendingRequests = [];
        return;
      }

      // create new array of pending request ids to skip
      // ids of requests which were removed from 'requests' array
      let newPending = [];
      requests.forEach(request => {
        if (!contains(pendingRequests, request.id)) {
          socket.send(JSON.stringify(pick(request, 'id', 'method', 'params')));
        }
        newPending.push(request.id);
      });

      pendingRequests = newPending;
    }
  });
};
