import { registerAction, getStores, publishStoreUpdate } from 'viter/viter';

registerAction('socket:connected', function () {
  let [NetStore, NotesStore] = getStores('net', 'notes');

  NetStore.addRequest('notes-list-read').then(function (items) {
    NotesStore.resetInfos(items);

    return 'notes';
  }).then(publishStoreUpdate);

  return 'net';
});
