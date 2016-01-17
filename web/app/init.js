/* global DEV */
import {setStores, bus} from 'viter/viter';
import page from 'page';

import 'helpers/hacks';

import {openNote} from 'actions/notes-actions';
import {changePage} from 'actions/app-actions';
import {getIdsFromUrl} from 'watchers/url-renderer';

import createStores from 'stores';
import createWatchers from 'watchers';

setStores(createStores());

let watchers = createWatchers();
bus.subscribe('!stores-update', function (...args) {
  console.debug('updated stores: %s', args.join(', '));
  watchers.forEach(comp => comp(...args));
});

if (DEV) {
  document.title += ' [DEV]';
}

// START

page('/', function () {
  changePage('main');
});
page.start();

// init selected items from url
getIdsFromUrl().forEach(openNote);
