import _ from 'lodash';
import {getStore, publishStoreUpdate} from 'viter/viter';
import {id2key} from 'helpers/utils';
import {NOTE_TYPES} from 'const';

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
  if (NotesStore.removeNoteByNid(nId)) {
    console.log('closed note by nId %s', nId);

    publishStoreUpdate('notes');
  } else {
    console.error('cannot close note with unknown nId %s', nId);
  }
}

function saveNote (id, changedData) {
  let NetStore = getStore('net');
  let NotesStore = getStore('notes');

  if (_.isEmpty(changedData)) {
    console.log('note %s: not changed', id);
    NotesStore.editNote(id, false);
    publishStoreUpdate('notes');
    return;
  }

  let note = NotesStore.getNote(id);
  if (!note) {
    console.error('cannot save unknown note %s', id);
    return;
  }

  let data = _.assign(note.getPublicData(), changedData);

  // save-note
  NetStore.addRequest('note-update', data).then(function (note) {
    console.log('note %s saved', id);

    if (!NotesStore.updateNote(id, note) || !NotesStore.editNote(id, false)) {
      console.error('cannot update unknown note %s', id);
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
    console.log('edit note %s', id);
    publishStoreUpdate('notes');
  }
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

function createNote (nId, newData) {
  let NotesStore = getStore('notes');
  let NetStore = getStore('net');

  let note = NotesStore.getNoteByNid(nId);
  if (!note) {
    console.error('cannot create note with unknown nId %s', nId);
    return;
  }

  let data = {
    type: note.key.type,
    name: newData.name || 'No name',
    data: newData.data,
    categories: newData.categories || ['uncategorized']
  };

  NetStore.addRequest('note-create', data).then(function (note) {
    if (NotesStore.replaceNote(nId, note)) {
      console.log('new note %s saved', NotesStore.getIdByNid(nId));
      publishStoreUpdate('notes');
    } else {
      console.error('cannot update unknown note with nId %s', nId);
    }

    loadNotesList();
  });

  publishStoreUpdate('net');
}

export default {
  'app:initialized': loadNotesList,

  'note:open': openNotes,

  'note:save': saveNote,

  'note:close': closeNote,
  'note:close-by-nId': closeNoteByNid,

  'note:edit': editNote,

  'note:delete': deleteNote,

  'note:new': newNote,
  'note:create': createNote
}
