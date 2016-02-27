/* eslint new-cap:[2, {"capIsNewExceptions": ["List"]}] */
/* global DEV */
import createStore from 'viter/store';
import * as viter from 'viter/viter';
import EventBus from 'viter/bus';
import { List } from 'immutable';
import page from 'page';

import 'helpers/hacks';

import { getIdsFromUrl } from 'managers/url-manager';

import createServices from 'services';
import createActions from 'controllers';

import createManagers from 'managers';

if (DEV) {
  document.title += ' [DEV]';
}

// global app bus
export const bus = new EventBus();

// setup Store properties
const STORE = createStore({
  notes:        List(),
  infos:        List(),
  requests:     List(),
  socket:       null,
  page:         '',
  searchFilter: ''
});

let actions = createActions(createServices(STORE), STORE);
viter.setStore(STORE);
viter.setActions(actions);

let managers = createManagers();
managers.forEach(w => w.init());

// START

let openIds = getIdsFromUrl();

page('/', function () {
  actions.changePage('main');
});
page.start();

// open notes by ids from url
openIds.forEach(actions.openNote);
