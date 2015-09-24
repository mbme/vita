import {forEach} from 'lodash';
import {setStores, bus, registerAction} from 'viter/viter';

import 'helpers/hacks';

import AppStore from 'stores/app-store';
import NetStore from 'stores/net-store';
import NotesInfoStore from 'stores/notes-info-store';
import NotesStore from 'stores/notes';

import createQueryUpdater from 'watchers/query-renderer';
import createSocketManager from 'watchers/socket-connector';
import createPageManager from 'watchers/page-renderer';
import createMessageSender from 'watchers/message-sender';

import MainPage from 'pages/records';

import AppActions    from 'actions/app-actions';
import SocketActions from 'actions/socket-actions';
import UrlActions    from 'actions/url-actions';

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

let actions = [UrlActions, AppActions, SocketActions];
actions.forEach(function (actionsGroup) {
  forEach(actionsGroup, function (handler, action) {
    registerAction(action, handler);
  });
});

bus.publish('app:initialized');
