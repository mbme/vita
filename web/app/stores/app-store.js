import _ from 'lodash';

export default function createAppStore () {
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
