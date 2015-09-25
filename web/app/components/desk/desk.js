import {createReactContainer} from 'viter/viter';
import Note from './note';

export default createReactContainer({
  displayName: 'Desk',

  stores:  ['notes'],

  getState (NotesStore) {
    return {
      notes: NotesStore.notes
    };
  },

  render () {
    let {notes} = this.state;
    return (
      <ul className="Desk">
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
    )
  }
})
