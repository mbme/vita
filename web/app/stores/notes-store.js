import _ from 'lodash';
import {key2id} from 'helpers/utils';

export default function createNotesStore () {
  return {
    notes: [],

    addNote (note) {
      note.id = key2id(note.key);
      this.notes.push(note);

      return this;
    },

    removeNote (id) {
      _.remove(this.notes, {id: id});

      return this;
    },

    getNote (id) {
      return _.find(this.notes, {id: id});
    },

    sort (orderedIds) {
      this.notes = _(orderedIds).map(::this.getNote).compact().value();

      return this;
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
