import './styles/main.scss';

import {registerStore, StoreWatcher, bus} from 'viter/viter';
import AppStore from 'stores/app-store';
import {getQueryParam, parseIdsStr} from 'helpers/utils';
import {isEqual} from 'lodash';

import React from 'react';
import page from 'page';
import Test from './main';

import './actions';

registerStore('app', AppStore);

const PAGES = {
  'main': Test
};

// URL Query params renderer
StoreWatcher({
  stores: ['app'],

  getState (AppStore) {
    return AppStore.selectedIds.slice(0).sort();
  },

  shouldUpdate (state, newState) {
    return !isEqual(state, newState);
  },

  render (state) {
    page(`${location.pathname}?ids=(${state.join(',')})`);
  }
});

// Page renderer
StoreWatcher({
  stores: ['app'],

  getState (AppStore) {
    return AppStore.page;
  },

  shouldUpdate (state, newState) {
    return state !== newState;
  },

  render (state) {
    let Page = PAGES[state];

    if (!Page) {
      console.warn(`Unknown page "${state}"`);
      return;
    }

    React.render(<Page />, document.getElementById('content'));
  }
});


// init selected items from url
bus.publish('item:selected', ...parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids')));

page('/', function (ctx) {
  bus.publish('url:changed', 'main', ctx.querystring);
});
page.start();


setTimeout(function () {
  bus.publish('initialized');
  bus.publish('item:selected', 4);
}, 2000)
