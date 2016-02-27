import { createComponent } from 'viter/viter';

import ReactDOM from 'react-dom';
import React from 'react';

import MainPage from 'components/pages/records';

// page === layout
const PAGES = {
  'main': MainPage,
};

// Page renderer
export default function createPageManager () {
  return createComponent({

    getState ({ page }) {
      return page;
    },

    shouldComponentUpdate (state, newState) {
      return newState && state !== newState;
    },

    render (state) {
      let Page = PAGES[state];
      let container = document.getElementById('container');

      if (Page) {
        ReactDOM.render(React.createElement(Page), container);
      } else {
        ReactDOM.unmountComponentAtNode(container);
        console.error(`Unknown page "${state}"`);
      }
    },
  });
}
