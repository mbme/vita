import {createComponent} from 'viter/viter';

import ReactDOM from 'react-dom';

// Page renderer
export default function createPageManager (pages) {
  return createComponent({
    stores: ['app'],

    getState (AppStore) {
      return AppStore.page;
    },

    shouldUpdate (state, newState) {
      return newState && state !== newState;
    },

    render (state) {
      let Page = pages[state];

      if (Page) {
        ReactDOM.render(<Page />, document.getElementById('container'));
      } else {
        console.error(`Unknown page "${state}"`);
      }
    }
  });
}
