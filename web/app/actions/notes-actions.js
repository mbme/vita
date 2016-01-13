import _ from 'lodash';
import {getStore, publishStoreUpdate} from 'viter/viter';
import {id2key} from 'helpers/utils';
import {NOTE_TYPES} from 'const';
import * as Files from 'helpers/files';
import showFileUploadModal from 'helpers/file-upload-dialog';

function loadNotesList () {
  let NetStore = getStore('net');
  let NotesInfoStore = getStore('notes-info');
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

function openNotes (...ids) {
  let NetStore = getStore('net');
  let NotesStore = getStore('notes');
  let NotesInfoStore = getStore('notes-info');

  _.remove(ids, ::NotesStore.hasNote);

  if (!ids.length) {
    return;
  }

  let requests = ids.map(id => NetStore.addRequest('note-read', id2key(id)));
  publishStoreUpdate('net');

  Promise.all(requests).then(function (notes) {
    console.log('open notes %s', ids.join(', '));

    ids.forEach(id => NotesInfoStore.markSelected(id, true));
    notes.forEach(NotesStore.addNote);

    publishStoreUpdate('notes', 'notes-info');
  });

}

function closeNote (id) {
  let NotesInfoStore = getStore('notes-info');
  let NotesStore = getStore('notes');

  if (NotesStore.removeNote(id)) {
    NotesInfoStore.markSelected(id, false);

    console.log('closed note %s', id);

    publishStoreUpdate('notes-info', 'notes');
  } else {
    console.error('cannot close note with unknown id %s', id);
  }
}

function closeNoteByNid (nId) {
  let NotesStore = getStore('notes');
  NotesStore.removeNoteByNid(nId);
  console.log('closed note by nId %s', nId);
  publishStoreUpdate('notes');
}

function editNote (id, edit) {
  let NotesStore = getStore('notes');
  NotesStore.editNote(id, edit);
  console.log('edit note %s', id);
  publishStoreUpdate('notes');
}

function deleteNote(id) {
  let NetStore = getStore('net');
  let NotesStore = getStore('notes');

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

function newNote () {
  let NotesStore = getStore('notes');

  NotesStore.newNote(NOTE_TYPES.RECORD);

  console.log('add new note %s', NOTE_TYPES.RECORD);

  publishStoreUpdate('notes');
}

export function saveNote (id, changedData) {
  let NetStore = getStore('net');
  let NotesStore = getStore('notes');

  let note = NotesStore.getNote(id);
  if (!note) {
    console.error('cannot save unknown note %s', id);
    return Promise.reject();
  }

  if (_.isEmpty(changedData)) {
    console.log('note %s: not changed', id);
    return Promise.resolve(note);
  }

  let data = _.assign(note.getPublicData(), changedData);

  // save-note
  let promise = NetStore.addRequest('note-update', data).then(function (note) {
    console.log('note %s saved', id);
    NotesStore.updateNote(id, note);

    publishStoreUpdate('notes');

    loadNotesList();

    return NotesStore.getNote(id);
  });

  publishStoreUpdate('net');

  return promise;
}

export function createNote (nId, newData) {
  let NotesStore = getStore('notes');
  let NetStore = getStore('net');

  let note = NotesStore.getExistingNoteByNid(nId);

  let data = {
    type: note.key.type,
    name: newData.name || 'No name',
    data: newData.data,
    categories: newData.categories || ['uncategorized']
  };

  let promise = NetStore.addRequest('note-create', data).then(function (noteRaw) {
    let note = NotesStore.replaceNote(nId, noteRaw);
    console.log('new note %s saved', note);

    publishStoreUpdate('notes');

    loadNotesList();

    return note;
  });

  publishStoreUpdate('net');

  return promise;
}

function maybeCreateNote(note) {
  if (!note.isNew()) {
    return Promise.resolve(note);
  }

  return createNote(note.nId, {});
}

export function attachFile(nId, file) {
  let NotesStore = getStore('notes');

  showFileUploadModal(file, function (file, fileName) {
    return new Promise(function (resolve) {
      let note = NotesStore.getExistingNoteByNid(nId);
      resolve(maybeCreateNote(note))
    }).then(note => Files.uploadFile(note.key, fileName, file))
      .then(function (attachment) {
        NotesStore.addAttachment(nId, attachment);
        publishStoreUpdate('notes');
      });
  });
}

export function deleteFile(nId, fileName) {
  let NotesStore = getStore('notes');

  let note = NotesStore.getExistingNoteByNid(nId);

  Files.deleteFile(note.key, fileName).then(function () {
    NotesStore.removeAttachment(nId, fileName);
    publishStoreUpdate('notes');
  });
}

export default {
  'app:initialized': loadNotesList,

  'note:open': openNotes,

  'note:close': closeNote,
  'note:close-by-nId': closeNoteByNid,

  'note:edit': editNote,

  'note:delete': deleteNote,

  'note:new': newNote
}
