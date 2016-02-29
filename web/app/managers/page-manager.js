import ReactDOM from 'react-dom';
import React from 'react';

import MainPage from 'components/pages/records';

// page === layout
const PAGES = {
  'main': MainPage,
};

// Page renderer
export default function createPageManager () {
  let currentPage;

  return function ({ page }) {
    if (!page || currentPage === page) {
      return;
    }
    currentPage = page;

    let Page = PAGES[page];
    let container = document.getElementById('container');

    if (Page) {
      ReactDOM.render(React.createElement(Page), container);
    } else {
      ReactDOM.unmountComponentAtNode(container);
      console.error(`Unknown page "${page}"`);
    }
  };
}
