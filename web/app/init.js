/* global DEV */
import { setStores } from 'viter/viter';
import page from 'page';

import 'helpers/hacks';

import { openNote } from 'actions/notes-actions';
import { changePage } from 'actions/app-actions';
import { getIdsFromUrl } from 'watchers/url-renderer';

import createStores from 'stores';
import createWatchers from 'watchers';

if (DEV) {
  document.title += ' [DEV]';
}

setStores(createStores());

let watchers = createWatchers();
watchers.forEach(w => w.init());

// START

page('/', function () {
  changePage('main');
});
page.start();

// init selected items from url
getIdsFromUrl().forEach(openNote);
