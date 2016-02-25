export default function ({ app, net }) {
  return {
    updateFilter (filter) {
      if (app.getSearchFilter() === filter) {
        return;
      }

      console.debug('search filter -> %s', filter);

      app.setSearchFilter(filter);
    },

    openModal (id, view) {
      app.addModal(id, view);
    },

    closeModal (id) {
      app.removeModal(id);
    },

    changePage (page) {
      if (app.getPage() === page) {
        return;
      }

      app.setPage(page);
    },

    useSocket (socket) {
      net.setSocket(socket);
    }
  };
}
