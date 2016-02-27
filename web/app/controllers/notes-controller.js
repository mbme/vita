import _ from 'lodash';
import { NOTE_TYPES } from 'const';

import { id2key } from 'helpers/utils';
import * as Files from 'helpers/files';

const MinRecord = {
  name:       'No name',
  categories: ['uncategorized']
};

export default function ({ net, notes, notesInfo, inBatch }) {

  function loadNotesList () {
    net.getNotesList().then(function (items) {
      inBatch(function () {
        notesInfo.resetInfos(items);

        notes.getNotes().forEach(
          note => notesInfo.markSelected(note.id, true)
        );
      });
    });
  }

  function createNote (nId, newData) {
    let { key } = notes.getNote(nId);

    let data = {
      type: key.type,
      name: newData.name || MinRecord.name,
      data: newData.data,
      categories: newData.categories || MinRecord.categories
    };

    return net.createNote(data).then(function (noteRaw) {
      let note = notes.updateNote(nId, noteRaw);

      loadNotesList();

      return note;
    });
  }

  function closeNote (nId) {
    let note = notes.getNote(nId);

    inBatch(function () {
      notes.removeNote(nId);

      if (note.isNew()) {
        console.log('closed new note ~%s', nId);
      } else {
        notesInfo.markSelected(note.id, false);
        console.log('closed note %s', note.id);
      }
    });
  }

  return {
    loadNotesList,

    openNote (id) {
      // check if already open
      if (notes.getNoteById(id)) {
        return Promise.reject();
      }

      return net.getNote(id2key(id)).then(function (data) {
        inBatch(function () {
          console.log('open note %s', id);

          notes.addNote(data);
          notesInfo.markSelected(id, true);
        });
      });
    },

    closeNote,

    editNote (nId, edit) {
      let note = notes.editNote(nId, edit);
      console.log('edit note %s', note.id);
    },

    deleteNote (nId) {
      let note = notes.getNote(nId);

      net.deleteNote(id2key(note.id)).then(function () {
        console.log('note %s deleted', note.id);
        loadNotesList();
        closeNote(nId);
      });
    },

    newNote () {
      notes.newNote(NOTE_TYPES.RECORD);

      console.log('add new note %s', NOTE_TYPES.RECORD);
    },

    saveNote (nId, changedData) {
      let note = notes.getNote(nId);

      if (_.isEmpty(changedData)) {
        console.log('note %s: not changed', note.id);
        return Promise.resolve(note);
      }

      let data = _.assign({
        key: id2key(note.id)
      }, changedData);
      return net.updatedNote(data).then(function (noteData) {
        let updatedNote = notes.updateNote(nId, noteData);
        console.log('note %s saved', updatedNote.id);

        loadNotesList();

        return updatedNote;
      });
    },

    createNote,

    attachFile (nId, fileName, file) {
      return new Promise(function (resolve) {
        let note = notes.getNote(nId);

        if (note.isNew()) {
          resolve(createNote(note.nId, {}));
        } else {
          resolve(note);
        }
      }).then(
        note => Files.uploadFile(note.key, fileName, file)
      ).then(
        attachment => notes.addAttachment(nId, attachment)
      );
    },

    deleteFile (nId, fileName) {
      let note = notes.getNote(nId);

      Files.deleteFile(note.key, fileName).then(function () {
        notes.removeAttachment(nId, fileName);
      });
    }
  };
}
