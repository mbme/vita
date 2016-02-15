import { STORE } from 'viter/store';
import { byId } from 'helpers/utils';

export default {
  getSearchFilter () {
    return STORE.searchFilter;
  },

  setSearchFilter (newFilter = '') {
    STORE.searchFilter = newFilter;
  },

  getPage () {
    return STORE.page;
  },

  setPage (newPage = '') {
    STORE.page = newPage;
  },

  addModal (id, view) {
    STORE.modals = STORE.modals.push({ id, view });
  },

  removeModal (id) {
    let pos = STORE.modals.findIndex(byId(id));

    if (pos === -1) {
      throw new Error(`cannot find modal with id=${id}`);
    }

    STORE.modals = STORE.modals.delete(pos);
  }
};
