import { createReactContainer } from 'viter/viter';
import NoteContainer from './note-container';

export default createReactContainer({
  displayName: 'Desk',

  stores:  ['notes'],

  getState (NotesStore) {
    return {
      notes: NotesStore.notes
    };
  },

  render () {
    let notes = this.state.notes.map(
      note => <NoteContainer key={note.nId} note={note} />
    ).reverse();

    return <ul className="Desk">{notes}</ul>;
  }
});
