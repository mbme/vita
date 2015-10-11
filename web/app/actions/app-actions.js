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

function closeNote (id) {
  let [AppStore, NotesStore] = getStores('app', 'notes');

  if (!AppStore.removeSelectedId(id)) {
    return;
  }

  NotesStore.removeNote(id);

  console.log('closed note %s', id);

  publishStoreUpdate('app', 'notes');
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

      NotesStore.addNote(note);
      NotesStore.sort(AppStore.selectedIds);

      publishStoreUpdate('notes');
    });

    publishStoreUpdate('app', 'net');
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

      publishStoreUpdate('notes');
    });

    publishStoreUpdate('net');
  },

  'note:close': closeNote,

  'note:edit': function (id, edit) {
    let NotesStore = getStore('notes');

    if (NotesStore.editNote(id, edit)) {
      publishStoreUpdate('notes');
    }
  },

  'note:delete': function (id) {
    let [NotesStore, NetStore] = getStores('notes', 'net');

    let note = NotesStore.getNote(id);

    if (!note) {
      console.error('cannot delete unknown note %s', id);
      return;
    }

    NetStore.addRequest('note-delete', id2key(id)).then(function () {
      console.log('note %s deleted', id);
      loadNotesList();
      closeNote(id);
    });

    publishStoreUpdate('net');
  },

  'search:filter-changed': function (filter) {
    let AppStore = getStore('app');

    if (AppStore.searchFilter !== filter) {
      AppStore.setSearchFilter(filter);

      console.debug('search filter -> %s', filter);

      publishStoreUpdate('app');
    }
  },

  'modal:open': function (modalConfig) {
    let AppStore = getStore('app');

    AppStore.addModal(modalConfig);

    publishStoreUpdate('app');
  },

  'modal:close': function (modalId) {
    let AppStore = getStore('app');

    if (AppStore.removeModal(modalId)) {
      publishStoreUpdate('app');
    }
  }
}
