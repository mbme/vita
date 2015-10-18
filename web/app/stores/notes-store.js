import {pick} from 'lodash';
import {key2id, byId} from 'helpers/utils';
import {List, Record} from 'immutable';

const NoteRecord = Record({
  nId: undefined,
  id: undefined,
  key: {
    type: undefined,
    id: undefined
  },
  edit: false,
  name: '',
  data: '',
  categories: []
});

export default function createNotesStore () {
  let idsMap = {}; // note.id : note.nId
  let _id = 0;
  function getPrivateId (id) {
    if (!idsMap.hasOwnProperty(id)) {
      idsMap[id] = _id += 1;
    }

    return idsMap[id];
  }

  let notes = List();

  function addNote(note) {
    notes = notes.push(NoteRecord(note));
  }

  function findNote(id) {
    return notes.findIndex(byId(id));
  }

  return {
    get notes () {
      return notes;
    },

    addNote (note) {
      note.id = key2id(note.key);
      note.nId = getPrivateId(note.id);
      addNote(note);
    },

    removeNote (id) {
      let pos = findNote(id);
      if (pos === -1) {
        return false;
      }

      notes = notes.delete(pos);

      return true;
    },

    getNote (id) {
      return notes.find(byId(id));
    },

    hasNote (id) {
      return !!this.getNote(id);
    },

    getPublicNoteData (id) {
      let note = this.getNote(id);
      if (note) {
        return pick(note, ['key', 'name', 'data', 'categories']);
      }
    },

    updateNote (id, data) {
      let pos = findNote(id);

      if (pos === -1) {
        return false;
      }

      notes = notes.update(pos, note => note.merge(data));

      return true;
    },

    editNote (id, edit = true) {
      return this.updateNote(id, {edit})
    },

    createNote (type) {
      addNote({
        nId: _id += 1,
        key: {type},
        edit: true
      });
    }
  };
}
