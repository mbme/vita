import {Container} from 'viter/viter';

export default class Desk extends Container {
  stores = ['notes']

  getState (NotesStore) {
    return {
      notes: NotesStore.notes
    };
  }

  render () {
    let {notes} = this.state;
    return (
      <ul className="Desk">
        {notes.map(note => <li key={note.id}>{JSON.stringify(note)}</li>)}
      </ul>
    )
  }
}
