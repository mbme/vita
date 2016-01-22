/* eslint new-cap:[2, {"capIsNewExceptions": ["List"]}] */
import { createDeferred, byId } from 'helpers/utils';
import { List } from 'immutable';

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

    processResponse (msg) {
      let pos = requests.findIndex(byId(msg.id));
      if (pos === -1) {
        let errMsg = `unexpected response ${msg}`;
        console.error(errMsg);
        throw new Error(errMsg);
      }

      let request = requests.get(pos);

      if (msg.error) {
        request.deferred.reject(msg.error);
      } else {
        request.deferred.resolve(msg.result);
      }

      requests = requests.delete(pos);
    },

    setSocket (newSocket) {
      socket = newSocket;
    }
  };
}
