import React from 'react';
import {Container} from 'viter/viter';
import SearchItem from './search-item';

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
        {this.state.infos.map(info => <SearchItem key={info.id} note={info}/>)}
      </ul>
    )
  }
}
