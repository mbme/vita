import _ from 'lodash';
import {getStore, getStores, publishStoreUpdate} from 'viter/viter';
import {id2key} from 'helpers/utils';

function loadNotesList () {
  let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');

  NetStore.addRequest('notes-list-read').then(function (items) {
    NotesInfoStore.resetInfos(items);

    publishStoreUpdate('notes-info');
  });

  publishStoreUpdate('net');
}

export default {
  'app:initialized': loadNotesList,

  'note:open': function (id) {
    let [AppStore, NetStore, NotesStore] = getStores('app', 'net', 'notes');

    if (AppStore.isSelectedId(id)) {
      return;
    }

    AppStore.addSelectedId(id);

    // load selected note
    NetStore.addRequest('note-read', id2key(id)).then(function (note) {
      console.log('open note %s', id);

      NotesStore.addNote(note).sort(AppStore.selectedIds);

      return 'notes';
    }).then(publishStoreUpdate);

    return ['app', 'net'];
  },

  'note:save': function (id, changedData) {
    let [NotesStore, NetStore] = getStores('notes', 'net');

    if (_.isEmpty(changedData)) {
      console.log('note %s: not changed', id);
      return;
    }

    let publicNote = NotesStore.getPublicNoteData(id);
    if (!publicNote) {
      console.log('cannot save unknown note %s', id);
      return;
    }

    let data = _.assign(publicNote, changedData);

    // save-note
    NetStore.addRequest('note-update', data).then(function (note) {
      console.log('note %s saved', id);

      if (!NotesStore.updateNote(id, note) || !NotesStore.editNote(id, false)) {
        console.error('cannot update unknown note %s');
        return;
      }

      loadNotesList();

      return 'notes';
    }).then(publishStoreUpdate);

    return 'net';
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

  'note:edit': function (id, edit) {
    let NotesStore = getStore('notes');

    if (NotesStore.editNote(id, edit)) {
      return 'notes';
    }
  },

  'search:filter-changed': function (filter) {
    let AppStore = getStore('app');

    if (AppStore.searchFilter !== filter) {
      AppStore.setSearchFilter(filter);

      console.debug('search filter -> %s', filter);

      return 'app';
    }
  },

  'modal:open': function (modalConfig) {
    let AppStore = getStore('app');

    AppStore.addModal(modalConfig);

    return 'app';
  },

  'modal:close': function (modalId) {
    let AppStore = getStore('app');

    if (AppStore.removeModal(modalId)) {
      return 'app';
    }
  }
}
