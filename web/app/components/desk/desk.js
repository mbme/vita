import { createReactContainer } from 'viter/viter';

import RecordEditorView from './record/record-editor-view';
import RecordView from './record/record-view';

import { NOTE_TYPES } from 'const';

/**
 * Component which renders open notes.
 */
export default createReactContainer({
  displayName: 'Desk',

  getState ({ notes }) {
    return { notes };
  },

  renderNote (note) {
    if (note.key.type === NOTE_TYPES.RECORD) {
      if (note.edit) {
        return <RecordEditorView key={note.nId} note={note} />;
      }
      return <RecordView key={note.nId} note={note} />;
    }

    throw new Error(`unexpected note type ${note.key.type}`);
  },

  render () {
    let notes = this.state.notes.map(this.renderNote).reverse();

    return <ul className="Desk">{notes}</ul>;
  }
});
