import {CreateStoreWatcher} from 'viter/viter';

import React from 'react';
import TestPage from 'pages/test';

const PAGES = {
  'main': TestPage
};

// Page renderer
export default CreateStoreWatcher({
  stores: ['app'],

  getState (AppStore) {
    return AppStore.page;
  },

  shouldUpdate (state, newState) {
    return state !== newState;
  },

  render (state) {
    let Page = PAGES[state];

    if (Page) {
      React.render(<Page />, document.getElementById('content'));
    } else {
      console.error(`Unknown page "${state}"`);
    }
  }
});
