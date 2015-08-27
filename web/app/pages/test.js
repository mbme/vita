import React from 'react';
import {Container} from 'viter/viter';

export default class Test extends Container {
  stores = ['app']

  getState (AppStore) {
    return {
      initialized: AppStore.initialized,
      selectedIds: AppStore.selectedIds
    };
  }

  render () {
    return (
      <div>
        <h1>
          HERE! {this.state.initialized ? "true" : "false"}
        </h1>
        {JSON.stringify(this.state.selectedIds)}
      </div>
    )
  }
}
