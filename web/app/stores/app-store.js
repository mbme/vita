import {List} from 'immutable';
import {byId} from 'helpers/utils';

export default function createAppStore () {
  let page = '';
  let searchFilter = '';
  let modals = List();

  return {
    get page () {
      return page;
    },

    get searchFilter () {
      return searchFilter;
    },

    get modals () {
      return modals;
    },

    setSearchFilter (newFilter = '') {
      searchFilter = newFilter;
    },

    setPage (newPage = '') {
      page = newPage;
    },

    addModal (id, view) {
      modals = modals.push({id, view});
    },

    removeModal (id) {
      let pos = modals.findIndex(byId(id));

      if (pos === -1) {
        return false;
      }

      modals = modals.delete(pos);

      return true;
    }
  };
}
