import {forEach} from 'lodash';
import {setStores, bus, registerAction} from 'viter/viter';

import 'helpers/hacks';

import createStores from 'stores/creator';

import createUrlRenderer   from 'main/url-renderer';
import createSocketManager from 'main/socket-manager';
import createPageManager   from 'main/page-manager';
import createMessageSender from 'main/message-sender';

import MainPage from 'pages/records';

import AppActions    from 'actions/app-actions';
import SocketActions from 'actions/socket-actions';
import UrlActions    from 'actions/url-actions';

setStores(createStores());

// page === layout
const PAGES = {
  'main': MainPage
};

let components = [
  createPageManager(PAGES),
  createMessageSender(),
  createUrlRenderer(),
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
