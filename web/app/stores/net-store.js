import RSVP from 'rsvp';
import _ from 'lodash';

export default function createNetStore () {
  let reqId = 0;

  return {
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
      _.remove(this.requests, {id: id});
    },

    getRequest (id) {
      return _.find(this.requests, {id: id});
    },

    setSocket (socket) {
      this.socket = socket;
    }
  };
}
