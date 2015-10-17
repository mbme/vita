import {createDeferred, byId} from 'helpers/utils';
import {List} from 'immutable';

export default function createNetStore () {
  let reqId = 0;

  let requests = List();
  let socket = null;

  return {
    get socket () {
      return socket;
    },

    get requests () {
      return requests;
    },

    addRequest (method, params) {
      let request = {
        id: reqId += 1,
        method,
        params,
        deferred: createDeferred()
      };

      requests = requests.push(request);

      return request.deferred.promise;
    },

    removeRequest (id) {
      let pos = requests.findIndex(byId(id));

      if (pos === -1) {
        return false;
      }

      requests = requests.delete(pos);

      return true;
    },

    getRequest (id) {
      let pos = requests.findIndex(byId(id));
      if (pos > -1) {
        return requests.get(pos);
      }
    },

    setSocket (newSocket) {
      socket = newSocket;
    }
  };
}
