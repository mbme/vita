import {registerAction, getStore, getStores, publishStoreUpdate} from 'viter/viter';
import {contains} from 'lodash';
import {id2key} from 'helpers/utils';

registerAction('url:changed', function (page) {
  let AppStore = getStore('app');

  if (AppStore.page !== page) {

    AppStore.page = page;

    return 'app';
  }
});

registerAction('item:selected', function (...ids) {
  let [AppStore, NetStore] = getStores('app', 'net');

  // skip duplicate ids
  let newIds = ids.filter(id => !contains(AppStore.selectedIds, id));

  if (!newIds.length) {
    return;
  }

  AppStore.selectedIds.push(...newIds);

  let NotesStore = getStore('notes');

  // load selected notes
  newIds.forEach(function (id) {
    NetStore.addRequest('note-read', id2key(id)).then(function (note) {
      console.log('open note %s', id);

      NotesStore.addNote(note);

      return 'notes';
    }).then(publishStoreUpdate);
  });

  return ['app', 'net'];
});

registerAction('search:filter-changed', function (filter) {
  let AppStore = getStore('app');

  if (AppStore.searchFilter !== filter) {
    AppStore.searchFilter = filter;

    console.debug('search filter -> %s', filter);

    return 'app';
  }
});

registerAction('app:initialized', function () {
  let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');

  NetStore.addRequest('notes-list-read').then(function (items) {
    NotesInfoStore.resetInfos(items);

    return 'notes-info';
  }).then(publishStoreUpdate);

  return 'net';
});
