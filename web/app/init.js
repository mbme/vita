import 'styles/main.scss';

import React from 'react';
import $ from 'jquery';
import page from 'page';
import {isEqual} from 'lodash';

import AppStore from 'stores/app-store';
import NetStore from 'stores/net-store';

import {registerStore, bus, StoreWatcher} from 'viter/viter';
import {getQueryParam, parseIdsStr} from 'helpers/utils';
import TestPage from 'pages/test';

import 'base/actions';

const basePath = `${window.location.hostname}:${window.VITA_PORT || window.location.port}`;

registerStore('app', AppStore);
registerStore('net', NetStore);

const PAGES = {
  'main': TestPage
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

    if (Page) {
      React.render(<Page />, document.getElementById('content'));
    } else {
      console.warn(`Unknown page "${state}"`);
    }
  }
});

// WebSocket connector handler
StoreWatcher({
  stores: ['net'],

  getState (NetStore) {
    return NetStore.socket;
  },

  shouldUpdate (state, newState) {
    return newState === null;
  },

  render () {
    let socket = new WebSocket(`ws://${basePath}/ws`);
    socket.onopen = () => bus.publish('socket:connected', socket);
    socket.onclose = (e) => bus.publish('socket:disconnected', e);
    socket.onmessage = (evt) => bus.publish('socket:message', evt.data);
  }
}, true);

// Message handler
StoreWatcher({
  stores: ['net'],

  getState (NetStore) {
    return {
      socket: NetStore.socket,
      requests: NetStore.requests
    };
  },

  shouldUpdate (state, newState) {
    return newState.socket && newState.requests.length;
  },

  render ({socket: socket, requests: requests}) {
    console.error("HERE", requests);
  }
});

// init selected items from url
bus.publish('item:selected', ...parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids')));

page('/', function () {
  bus.publish('url:changed', 'main');
});
page.start();

$(document).on({
  // without this drop event doesn't work in chrome
  'dragover': e => e.preventDefault(),
  'drop': e => e.preventDefault()
});

setTimeout(function () {
  bus.publish('initialized');
  bus.publish('item:selected', 4);
}, 2000)
