import { registerAction, getStores, publishStoreUpdate } from 'viter/viter';

registerAction('socket:connected', function () {
  let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');

  NetStore.addRequest('notes-list-read').then(function (items) {
    NotesInfoStore.resetInfos(items);

    return 'notes-info';
  }).then(publishStoreUpdate);

  return 'net';
});
