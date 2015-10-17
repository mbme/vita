import {createReactContainer} from 'viter/viter';

import RecordEditorView from './record/record-editor-view';
import RecordView from './record/record-view';

import {NOTE_TYPES} from 'const';

const VIEWS = {
  [NOTE_TYPES.RECORD]:             RecordView,
  [`${NOTE_TYPES.RECORD}:editor`]: RecordEditorView
};

function getNoteView(note) {
  let id = note.key.type;
  if (note.edit) {
    id += ':editor';
  }
  let view = VIEWS[id];

  if (!view) {
    throw `unknown note type ${id}`;
  }

  return view;
};

export default createReactContainer({
  displayName: 'Desk',

  stores:  ['notes'],

  getState (NotesStore) {
    return {
      notes: NotesStore.notes
    };
  },

  render () {
    let notes = this.state.notes.map(function (note) {
      let View = getNoteView(note);

      return <View key={note._id} note={note} />;
    });
    notes.reverse();

    return <ul className="Desk">{notes}</ul>
  }
})
