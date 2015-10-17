import _ from 'lodash';
import {getStore, getStores, publishStoreUpdate} from 'viter/viter';
import {id2key} from 'helpers/utils';
import {NOTE_TYPES} from 'const';

function loadNotesList () {
  let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');
  let NotesStore = getStore('notes');

  NetStore.addRequest('notes-list-read').then(function (items) {
    NotesInfoStore.resetInfos(items);

    NotesStore.notes.forEach(function (note) {
      NotesInfoStore.markSelected(note.id, true);
    });

    publishStoreUpdate('notes-info');
  });

  publishStoreUpdate('net');
}

function openNote (id) {
  let [NetStore, NotesStore] = getStores('net', 'notes');
  let NotesInfoStore = getStore('notes-info');

  if (NotesStore.hasNote(id)) {
    return;
  }

  // load selected note
  NetStore.addRequest('note-read', id2key(id)).then(function (note) {
    console.log('open note %s', id);

    NotesStore.addNote(note);

    publishStoreUpdate('notes');
  });

  NotesInfoStore.markSelected(id, true);
  publishStoreUpdate('notes-info', 'net');
}

function closeNote (id) {
  let NotesInfoStore = getStore('notes-info');
  let NotesStore = getStore('notes');

  NotesStore.removeNote(id);
  NotesInfoStore.markSelected(id, false);

  console.log('closed note %s', id);

  publishStoreUpdate('notes-info', 'notes');
}

function saveNote (id, changedData) {
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
}

function editNote (id, edit) {
  let NotesStore = getStore('notes');

  if (NotesStore.editNote(id, edit)) {
    publishStoreUpdate('notes');
  }
}

function deleteNote(id) {
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
}

function createNote () {
  let NotesStore = getStore('notes');

  NotesStore.createNote(NOTE_TYPES.RECORD);

  publishStoreUpdate('notes');
}

export default {
  'app:initialized': loadNotesList,

  'note:open': openNote,

  'note:save': saveNote,

  'note:close': closeNote,

  'note:edit': editNote,

  'note:delete': deleteNote,

  'note:create': createNote
}
