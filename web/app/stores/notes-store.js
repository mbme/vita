import _ from 'lodash';
import {key2id} from 'helpers/utils';

export default function createNotesStore () {
  let idsMap = {}; // note.id : note._id
  let _id = 0;
  function getPrivateId (id) {
    if (!idsMap.hasOwnProperty(id)) {
      idsMap[id] = _id += 1;
    }

    return idsMap[id];
  }

  return {
    notes: [],

    addNote (note) {
      note.id = key2id(note.key);
      note._id = getPrivateId(note.id);
      this.notes.push(note);
      this.notes = this.notes.slice(0);
    },

    removeNote (id) {
      let removed = _.remove(this.notes, {id});
      if (removed.length) {
        this.notes = this.notes.slice(0);
      }

      return removed.length > 0;
    },

    getNote (id) {
      return _.find(this.notes, {id});
    },

    hasNote (id) {
      return !!this.getNote(id);
    },

    getPublicNoteData (id) {
      let note = this.getNote(id);
      if (!note) {
        return undefined;
      }

      return _.pick(note, ['key', 'name', 'data', 'categories']);
    },

    updateNote (id, data) {
      let note = this.getNote(id);

      if (!note) {
        return false;
      }

      _.assign(note, data);

      return true;
    },

    editNote (id, edit = true) {
      let note = this.getNote(id);

      if (!note) {
        return false;
      }

      note.edit = edit;

      return true;
    },

    createNote (type) {
      this.notes.push({
        _id: _id += 1,
        key: {type},
        edit: true,
        name: '',
        data: '',
        categories: []
      });
      this.notes = this.notes.slice(0);
    }
  };
}
