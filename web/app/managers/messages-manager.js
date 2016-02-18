import { createComponent } from 'viter/viter';
import { includes, pick } from 'lodash';

// Message sender
export default function createMessagesManager () {
  let pendingRequests = [];

  return createComponent({

    getState ({ socket, requests }) {
      return { socket, requests };
    },

    shouldComponentUpdate (state, newState) {
      return !newState.requests.isEmpty();
    },

    render ({ socket, requests }) {
      if (!socket) {
        pendingRequests = [];
        return;
      }

      // create new array of pending request ids to skip
      // ids of requests which were removed from 'requests' array
      let newPending = [];
      requests.forEach(request => {
        if (!includes(pendingRequests, request.id)) {
          socket.send(JSON.stringify(pick(request, 'id', 'method', 'params')));
          // FIXME check whats going on with "old" pendingRequests here
        }
        newPending.push(request.id);
      });

      pendingRequests = newPending;
    }
  });
}
