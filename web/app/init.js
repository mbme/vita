import * as viter from 'viter/viter';

import 'helpers/hacks';

import createStores from 'stores';
import createWatchers from 'watchers';
import getActions from 'actions';

import MainPage from 'components/pages/records';

viter.setStores(createStores());

// page === layout
const PAGES = {
  'main': MainPage
};

let watchers = createWatchers(PAGES);
viter.bus.subscribe('!stores-update', function (...args) {
  console.debug('updated stores: %s', args.join(', '));
  watchers.forEach(comp => comp(...args));
});

getActions().forEach(function ([action, handler]) {
  viter.registerAction(action, handler);
});

viter.bus.publish('app:initialized');
