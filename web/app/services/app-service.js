/* eslint no-param-reassign: [2, {"props": false}] */

export default function (STORE) {
  return {
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
    }
  };
}
