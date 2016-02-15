/* eslint new-cap:[2, {"capIsNewExceptions": ["List"]}] */
/* global DEV */
import { initStore } from 'viter/store';
import EventBus from 'viter/bus';
import { List } from 'immutable';
import page from 'page';

import 'helpers/hacks';

import { openNote } from 'controllers/notes-controller';
import { changePage } from 'controllers/app-controller';
import { getIdsFromUrl } from 'managers/url-manager';

import createManagers from 'managers';

if (DEV) {
  document.title += ' [DEV]';
}

// global app bus
export const bus = new EventBus();

// setup Store properties
initStore({
  notes:        List(),
  infos:        List(),
  modals:       List(),
  requests:     List(),
  socket:       null,
  page:         '',
  searchFilter: ''
});

let managers = createManagers();
managers.forEach(w => w.init());

// START

let openIds = getIdsFromUrl();

page('/', function () {
  changePage('main');
});
page.start();

// open notes by ids from url
openIds.forEach(openNote);
