import React from 'react';
import {Container} from 'viter/viter';

export default class SearchPanel extends Container {
  stores = ['notes-info']

  getState (NotesInfoStore) {
    return {
      infos: NotesInfoStore.infos
    };
  }

  render () {
    return (
      <ul className="SearchPanel">
        {this.state.infos.map(info => <li key={info.id}>{JSON.stringify(info)}</li>)}
      </ul>
    )
  }
}
