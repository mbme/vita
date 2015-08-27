import 'styles/main.scss';

import $ from 'jquery';
import page from 'page';

import AppStore from 'stores/app-store';
import NetStore from 'stores/net-store';
import NotesStore from 'stores/notes-store';

import {setStores, bus} from 'viter/viter';
import {getQueryParam, parseIdsStr} from 'helpers/utils';

import QueryRenderer from 'watchers/query-renderer';
import SocketConnector from 'watchers/socket-connector';
import PageRenderer from 'watchers/page-renderer';
import MessageSender from 'watchers/message-sender';

import 'actions/app-actions';
import 'actions/socket-actions';
import 'actions/notes-actions';

setStores({
  'app':   AppStore,
  'net':   NetStore,
  'notes': NotesStore
});

QueryRenderer.start();
PageRenderer.start();
SocketConnector.start();
MessageSender.start();

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
