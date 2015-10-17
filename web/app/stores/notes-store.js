import {pick} from 'lodash';
import {key2id, byId} from 'helpers/utils';
import {List, Map} from 'immutable';

export default function createNotesStore () {
  let idsMap = {}; // note.id : note._id
  let _id = 0;
  function getPrivateId (id) {
    if (!idsMap.hasOwnProperty(id)) {
      idsMap[id] = _id += 1;
    }

    return idsMap[id];
  }

  let notes = List();

  function addNote(note) {
    notes = notes.push(Map(note));
  }

  function findNote(id) {
    return notes.findIndex(byId(id));
  }

  return {
    get notes () {
      return notes;
    },

    addNote (note) {
      note.type = note.key.type;
      note.id = key2id(note.key);
      note._id = getPrivateId(note.id);
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
      if (!note) {
        return undefined;
      }

      return pick(note.toJS(), ['key', 'name', 'data', 'categories']);
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
        _id: _id += 1,
        type,
        key: {type},
        edit: true,
        name: '',
        data: '',
        categories: []
      });
    }
  };
}
