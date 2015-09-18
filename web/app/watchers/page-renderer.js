import {CreateStoreWatcher} from 'viter/viter';

import ReactDOM from 'react-dom';
import MainPage from 'pages/records';

const PAGES = {
  'main': MainPage
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
      ReactDOM.render(<Page />, document.getElementById('container'));
    } else {
      console.error(`Unknown page "${state}"`);
    }
  }
});
