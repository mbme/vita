import NetService from 'services/net-service';
import AppService from 'services/app-service';

export function updateFilter (filter) {
  if (AppService.getSearchFilter() === filter) {
    return;
  }

  console.debug('search filter -> %s', filter);

  AppService.setSearchFilter(filter);
}

export function openModal (id, view) {
  AppService.addModal(id, view);
}

export function closeModal (id) {
  AppService.removeModal(id);
}

export function changePage (page) {
  if (AppService.getPage() === page) {
    return;
  }

  AppService.setPage(page);
}

export function useSocket (socket) {
  if (socket) {
    // process incoming messages
    socket.addEventListener('message', function (e) {
      NetService.processResponse(JSON.parse(e.data));
    });
  }

  NetService.setSocket(socket);
}
