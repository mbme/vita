import {createReactComponent} from 'viter/viter';

import RecordEditorView from './record/record-editor-view';
import RecordView from './record/record-view';

import {NOTE_TYPES} from 'const';

const VIEWS = {
  [NOTE_TYPES.RECORD]:             RecordView,
  [`${NOTE_TYPES.RECORD}:editor`]: RecordEditorView
};

function getNoteView(note) {
  let viewId = note.key.type;
  if (note.edit) {
    viewId += ':editor';
  }
  let view = VIEWS[viewId];

  if (!view) {
    throw new Error(`unknown note type ${viewId}`);
  }

  return view;
};

export default createReactComponent({
  displayName: 'NoteContainer',

  shouldScroll: true,

  render() {
    let {note} = this.props;
    let View = getNoteView(note);

    // scroll only on first render
    let shouldScroll = this.shouldScroll;
    this.shouldScroll = false;

    return <View key={note.nId} note={note} shouldScroll={shouldScroll} />;
  }
});
