import { pick } from 'lodash';

// Message sender
export default function createMessagesManager () {
  let sentRequests = {};

  return function ({ socket, requests }) {
    if (!socket) {
      return;
    }

    if (requests.length === 0) {
      sentRequests = {}; // cleanup requests registry
      return;
    }

    requests.forEach(function (request) {
      if (sentRequests[request.id]) {
        return;
      }
      socket.send(JSON.stringify(pick(request, 'id', 'method', 'params')));
      sentRequests[request.id] = true;
    });
  };
}
