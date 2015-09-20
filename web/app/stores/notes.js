import {key2id} from 'helpers/utils';

const NotesStore = {
  notes: [],
  addNote (note) {
    note.id = key2id(note.key);
    this.notes.push(note);
  }
}

export default NotesStore;
