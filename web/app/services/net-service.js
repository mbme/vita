import { STORE } from 'viter/store';
import { createDeferred, byId } from 'helpers/utils';

let reqId = 0;

export default {
  sendRequest (method, params) {
    let request = {
      id: reqId += 1,
      method,
      params,
      deferred: createDeferred()
    };

    STORE.requests = STORE.requests.push(request);

    return request.deferred.promise;
  },

  processResponse (msg) {
    let pos = STORE.requests.findIndex(byId(msg.id));
    if (pos === -1) {
      let errMsg = `unexpected response ${msg}`;
      console.error(errMsg);
      throw new Error(errMsg);
    }

    let request = STORE.requests.get(pos);

    if (msg.error) {
      request.deferred.reject(msg.error);
    } else {
      request.deferred.resolve(msg.result);
    }

    STORE.requests = STORE.requests.delete(pos);
  },

  setSocket (newSocket) {
    STORE.socket = newSocket;
  }
};
