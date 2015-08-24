import React from 'react';
import {Container, Stores} from 'viter/viter';

@Stores('app', 'test')
  export default class Test extends Container {
    getState (AppStore, TestStore) {
      return {
        initialized: AppStore.initialized
      };
    }

    render () {
      return (<h1>HERE! {this.state.initialized ? "true" : "false"}</h1>)
    }
  }
