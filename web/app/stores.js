import RSVP from 'rsvp';
import _ from 'lodash';
import {key2id} from 'helpers/utils';

export function createAppStore () {
  return {
    page: '',
    selectedIds: [],
    searchFilter: '',

    isSelectedId (id) {
      return _.contains(this.selectedIds, id);
    },

    addSelectedId (id) {
      this.selectedIds.unshift(id);
    },

    removeSelectedId (id) {
      let pos = this.selectedIds.indexOf(id);

      if (pos === -1) {
        return false;
      }

      _.pullAt(this.selectedIds, pos);

      return true;
    },

    resetSelectedIds (ids = []) {
      this.selectedIds = ids;
    },

    setSearchFilter (filter = '') {
      this.searchFilter = filter;
    },

    setPage (page = '') {
      this.page = page;
    }
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
      _.remove(this.requests, req => req.id === id);
    },

    getRequest (id) {
      return _.find(this.requests, req => req.id === id);
    },

    setSocket (socket) {
      this.socket = socket;
    }
  };
}

export function createNotesStore () {
  return {
    notes: [],

    addNote (note) {
      note.id = key2id(note.key);
      this.notes.push(note);

      return this;
    },

    removeNote (id) {
      _.remove(this.notes, note => note.id === id);

      return this;
    },

    getNote (id) {
      return _.find(this.notes, note => note.id === id);
    },

    sort (orderedIds) {
      this.notes = _(orderedIds).map(::this.getNote).compact().value();

      return this;
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
