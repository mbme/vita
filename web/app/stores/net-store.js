import { remove } from 'lodash';

const NetStore = {
  socket: null,
  requests: [],

  removeRequest (id) {
    remove(this.requests, req => req.id === id);
  }
}

export default NetStore;
