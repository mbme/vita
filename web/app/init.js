import page from 'page';

import AppStore from 'stores/app-store';
import NetStore from 'stores/net-store';
import NotesInfoStore from 'stores/notes-info-store';
import NotesStore from 'stores/notes';

import {setStores, bus} from 'viter/viter';
import {getQueryParam, parseIdsStr} from 'helpers/utils';

import createQueryUpdater from 'watchers/query-renderer';
import createSocketManager from 'watchers/socket-connector';
import createPageManager from 'watchers/page-renderer';
import createMessageSender from 'watchers/message-sender';

import MainPage from 'pages/records';

import 'helpers/hacks';

import 'actions/app-actions';
import 'actions/socket-actions';

setStores({
  'app':   AppStore,
  'net':   NetStore,
  'notes-info': NotesInfoStore,
  'notes': NotesStore
});

// page === layout
const PAGES = {
  'main': MainPage
};

let components = [
  createPageManager(PAGES),
  createMessageSender(),
  createQueryUpdater(),
  createSocketManager()
];

bus.subscribe('!stores-update', function (...args) {
  console.debug('updated stores: %s', args.join(', '));
  components.forEach(comp => comp(...args));
});

// init selected items from url
bus.publish('item:selected', ...parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids')));

page('/', function () {
  bus.publish('url:changed', 'main');
});
page.start();

bus.publish('app:initialized');
