import {getStore, getStores, publishStoreUpdate} from 'viter/viter';
import {id2key} from 'helpers/utils';

export default {
  'app:initialized': function () {
    let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');

    NetStore.addRequest('notes-list-read').then(function (items) {
      NotesInfoStore.resetInfos(items);

      return 'notes-info';
    }).then(publishStoreUpdate);

    return 'net';
  },

  'note:open': function (id) {
    let [AppStore, NetStore] = getStores('app', 'net');

    if (AppStore.isSelectedId(id)) {
      return;
    }

    AppStore.addSelectedId(id);

    let NotesStore = getStore('notes');

    // load selected note
    NetStore.addRequest('note-read', id2key(id)).then(function (note) {
      console.log('open note %s', id);

      NotesStore.addNote(note).sort(AppStore.selectedIds);

      return 'notes';
    }).then(publishStoreUpdate);

    return ['app', 'net'];
  },

  'note:close': function (id) {
    let [AppStore, NotesStore] = getStores('app', 'notes');

    if (!AppStore.removeSelectedId(id)) {
      return;
    }

    NotesStore.removeNote(id);

    console.log('closed note %s', id);

    return ['app', 'notes'];
  },

  'search:filter-changed': function (filter) {
    let AppStore = getStore('app');

    if (AppStore.searchFilter !== filter) {
      AppStore.setSearchFilter(filter);

      console.debug('search filter -> %s', filter);

      return 'app';
    }
  }
}
