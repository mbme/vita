/* eslint no-param-reassign: [2, {"props": false}] */

import { createDeferred, byId } from 'helpers/utils';
import { arrPush, arrFindPos, arrRemoveAt } from 'helpers/immutable';

export default function (STORE) {
  let reqId = 0;
  let deferreds = {};

  function sendRequest (method, params) {
    let request = {
      id: reqId += 1,
      method,
      params,
    };

    let deferred = createDeferred();
    deferreds[request.id] = deferred;

    STORE.requests = arrPush(STORE.requests, request);

    return deferred.promise;
  }

  function processResponse (msg) {
    let pos = arrFindPos(STORE.requests, byId(msg.id));
    if (pos === -1) {
      let errMsg = `unexpected response ${msg}`;
      console.error(errMsg);
      throw new Error(errMsg);
    }

    let deferred = deferreds[msg.id];
    delete deferreds[msg.id];

    if (msg.error) {
      deferred.reject(msg.error);
    } else {
      deferred.resolve(msg.result);
    }

    STORE.requests = arrRemoveAt(STORE.requests, pos);
  }

  return {
    setSocket (socket) {
      if (socket) {
        // process incoming messages
        socket.addEventListener('message', function (e) {
          processResponse(JSON.parse(e.data));
        });
      }

      STORE.socket = socket;
    },

    getNotesList () {
      return sendRequest('notes-list-read');
    },

    getNote (noteKey) {
      return sendRequest('note-read', noteKey);
    },

    deleteNote (noteKey) {
      return sendRequest('note-delete', noteKey);
    },

    updateNote (data) {
      return sendRequest('note-update', data);
    },

    createNote (data) {
      return sendRequest('note-create', data);
    },
  };
}
