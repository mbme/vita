import React from 'react';
import {Container, Stores} from 'viter/viter';

@Stores('app')
  export default class Test extends Container {
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
