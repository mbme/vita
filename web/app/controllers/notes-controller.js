import _ from 'lodash';
import { NOTE_TYPES } from 'const';
import { inBatch } from 'viter/store';

import { id2key } from 'helpers/utils';
import * as Files from 'helpers/files';
import showFileUploadModal from 'helpers/file-upload-dialog';

import NotesService from 'services/notes-service';
import NotesInfoService from 'services/notes-info-service';
import NetService from 'services/net-service';

const MinRecord = {
  name:       'No name',
  categories: ['uncategorized']
};

export function loadNotesList () {
  NetService.sendRequest('notes-list-read').then(function (items) {
    inBatch(function () {
      NotesInfoService.resetInfos(items);

      NotesService.getNotes().forEach(
        note => NotesInfoService.markSelected(note.id, true)
      );
    });
  });
}

export function openNote (id) {
  // check if already open
  if (NotesService.getNoteById(id)) {
    return Promise.reject();
  }

  return NetService.sendRequest('note-read', id2key(id)).then(function (data) {
    inBatch(function () {
      console.log('open note %s', id);

      NotesService.addNote(data);
      NotesInfoService.markSelected(id, true);
    });
  });
}

export function closeNote (nId) {
  let note = NotesService.getNote(nId);

  inBatch(function () {
    NotesService.removeNote(nId);

    if (note.isNew()) {
      console.log('closed new note ~%s', nId);
    } else {
      NotesInfoService.markSelected(note.id, false);
      console.log('closed note %s', note.id);
    }
  });
}

export function editNote (nId, edit) {
  let note = NotesService.editNote(nId, edit);
  console.log('edit note %s', note.id);
}

export function deleteNote (nId) {
  let note = NotesService.getNote(nId);

  NetService.sendRequest('note-delete', id2key(note.id)).then(function () {
    console.log('note %s deleted', note.id);
    loadNotesList();
    closeNote(nId);
  });
}

export function newNote () {
  NotesService.newNote(NOTE_TYPES.RECORD);

  console.log('add new note %s', NOTE_TYPES.RECORD);
}

export function saveNote (nId, changedData) {
  let note = NotesService.getNote(nId);

  if (_.isEmpty(changedData)) {
    console.log('note %s: not changed', note.id);
    return Promise.resolve(note);
  }

  let data = _.assign({
    key: id2key(note.id)
  }, changedData);
  return NetService.sendRequest('note-update', data).then(function (noteData) {
    let updatedNote = NotesService.updateNote(nId, noteData);
    console.log('note %s saved', updatedNote.id);

    loadNotesList();

    return updatedNote;
  });
}

export function createNote (nId, newData) {
  let { key } = NotesService.getNote(nId);

  let data = {
    type: key.type,
    name: newData.name || MinRecord.name,
    data: newData.data,
    categories: newData.categories || MinRecord.categories
  };

  return NetService.sendRequest('note-create', data).then(function (noteRaw) {
    let note = NotesService.updateNote(nId, noteRaw);

    loadNotesList();

    return note;
  });
}

function maybeCreateNote (note) {
  if (!note.isNew()) {
    return Promise.resolve(note);
  }

  return createNote(note.nId, {});
}

export function attachFile (nId, file) {
  showFileUploadModal(file, function (fileName) {
    return new Promise(function (resolve) {
      let note = NotesService.getNote(nId);
      resolve(maybeCreateNote(note));
    }).then(
      note => Files.uploadFile(note.key, fileName, file)
    ).then(
      attachment => NotesService.addAttachment(nId, attachment)
    );
  });
}

export function deleteFile (nId, fileName) {
  let note = NotesService.getNote(nId);

  Files.deleteFile(note.key, fileName).then(function () {
    NotesService.removeAttachment(nId, fileName);
  });
}
