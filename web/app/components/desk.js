import {createReactContainer} from 'viter/viter';

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
        {notes.map(note => <li key={note.id}>{JSON.stringify(note)}</li>)}
      </ul>
    )
  }
})
