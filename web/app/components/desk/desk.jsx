import { createReactComponent, connectReactComponent, PropTypes } from 'viter/viter';

import RecordView from './record/record-view';
import RecordEditorView from './record-editor/record-editor-view';

import { NOTE_TYPES } from 'const';

function renderNote (note) {
  if (note.key.type === NOTE_TYPES.RECORD) {
    if (note.edit) {
      return <RecordEditorView key={note.nId} note={note} />;
    }
    return <RecordView key={note.nId} note={note} />;
  }

  throw new Error(`unexpected note type ${note.key.type}`);
}

/**
 * Component which renders open notes.
 */
const Desk = createReactComponent({
  displayName: 'Desk',

  propTypes: {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  },

  render () {
    let notes = this.props.notes.map(renderNote).reverse();

    return <ul className="Desk">{notes}</ul>;
  },
});

export default connectReactComponent(Desk, { store: 'notes' });
