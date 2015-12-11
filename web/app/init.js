/* global DEV */
import {setStores, bus} from 'viter/viter';

import 'helpers/hacks';

import createStores from 'stores';
import createWatchers from 'watchers';
import getActions from 'actions';

import MainPage from 'components/pages/records';

setStores(createStores());

// page === layout
const PAGES = {
  'main': MainPage
};

let watchers = createWatchers(PAGES);
bus.subscribe('!stores-update', function (...args) {
  console.debug('updated stores: %s', args.join(', '));
  watchers.forEach(comp => comp(...args));
});

getActions().forEach(([action, handler]) => bus.subscribe(action, handler));


if (DEV) {
  document.title += ' [DEV]';
}

bus.publish('app:initialized');
