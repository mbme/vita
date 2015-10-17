import _ from 'lodash';

export default function createAppStore () {
  return {
    page: '',
    searchFilter: '',
    modals: [], // @immutable

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
