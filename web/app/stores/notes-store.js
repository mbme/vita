import _ from 'lodash';
import {key2id} from 'helpers/utils';

export default function createNotesStore () {
  return {
    notes: [],

    addNote (note) {
      note.id = key2id(note.key);
      this.notes.push(note);
    },

    removeNote (id) {
      let removed = _.remove(this.notes, {id: id});

      return removed.length > 0;
    },

    getNote (id) {
      return _.find(this.notes, {id: id});
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

    sort (orderedIds) {
      this.notes = _(orderedIds).map(::this.getNote).compact().value();
    },

    editNote (id, edit = true) {
      let note = this.getNote(id);

      if (!note) {
        return false;
      }

      note.edit = edit;

      return true;
    }
  };
}
