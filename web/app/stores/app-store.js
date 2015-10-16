import _ from 'lodash';

export default function createAppStore () {
  return {
    page: '',
    selectedIds: [], // @immutable
    searchFilter: '',
    modals: [], // @immutable

    isSelectedId (id) {
      return _.contains(this.selectedIds, id);
    },

    addSelectedId (id) {
      this.selectedIds = [id].concat(this.selectedIds);
    },

    removeSelectedId (id) {
      this.selectedIds = _.without(this.selectedIds, id);
    },

    resetSelectedIds (ids = []) {
      this.selectedIds = ids;
    },

    setSearchFilter (filter = '') {
      this.searchFilter = filter;
    },

    setPage (page = '') {
      this.page = page;
    },

    addModal (config) {
      this.modals = this.modals.concat(config);
    },

    removeModal (id) {
      let modal = _.find(this.modals, {id});

      if (!modal) {
        return false;
      }

      this.modals = _.without(this.modals, modal);

      return true;
    }
  };
}
