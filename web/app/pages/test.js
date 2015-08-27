import React from 'react';
import {Container} from 'viter/viter';

export default class Test extends Container {
  stores = ['app', 'notes']

  getState (AppStore, NotesStore) {
    return {
      initialized: AppStore.initialized,
      selectedIds: AppStore.selectedIds,
      infos: NotesStore.infos
    };
  }

  render () {
    return (
      <div>
        <h1>
          HERE! {this.state.initialized ? "true" : "false"}
        </h1>
        {JSON.stringify(this.state.selectedIds)}
        <ul>
          {this.state.infos.map(info => <li key={info.id}>{JSON.stringify(info)}</li>)}
        </ul>
      </div>
    )
  }
}
