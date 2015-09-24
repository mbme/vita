import RSVP from 'rsvp';
import { remove, find } from 'lodash';
import {key2id} from 'helpers/utils';

export function createAppStore () {
  return {
    page: '',
    selectedIds: [],
    searchFilter: ''
  };
}

export function createNetStore () {
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
      remove(this.requests, req => req.id === id);
    },

    getRequest (id) {
      return find(this.requests, req => req.id === id);
    }
  };
}

export function createNotesStore () {
  return {
    notes: [],
    addNote (note) {
      note.id = key2id(note.key);
      this.notes.push(note);
    }
  };
}

export function createNotesInfoStore () {
  return {
    infos: [],

    resetInfos (infos) {
      this.infos = infos;
      infos.forEach(info => info.id = key2id(info.key));
    }
  };
}
