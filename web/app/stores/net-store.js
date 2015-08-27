import RSVP from 'rsvp';
import { remove, find } from 'lodash';

let reqId = 0;

const NetStore = {
  socket: null,
  requests: [],

  addRequest (method, params) {
    let request = {
      id: reqId += 1,
      method,
      params,
      deferred: RSVP.defer()
    };

    this.requests.push(request);

    return request.deferred.promise;
  },

  removeRequest (id) {
    remove(this.requests, req => req.id === id);
  },

  getRequest (id) {
    return find(this.requests, req => req.id === id);
  }
}

export default NetStore;
