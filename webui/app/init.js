'use strict';

import 'base/radio.shim';

import $ from 'jquery';
import Radio from 'radio';
import Marionette from 'marionette';

import session from 'base/session';
import Storage from 'base/storage';

import SearchPanel from 'search-panel/view';
import BoardView from 'board/board';
import ModalsView from 'modals/view';


let app = new Marionette.Application();

app.addRegions({
    'sidePanel': '#side-panel',
    'main':      '#main',
    'modals':    '#modals'
});

app.on('start', function () {
    app.getRegion('sidePanel').show(new SearchPanel({collection: Storage.notes}));
    app.getRegion('main').show(new BoardView({collection: Storage.openNotes}));
    app.getRegion('modals').show(new ModalsView());

    $(document).on({
        'dragover': function (e) {
            // without this drop event doesn't work in chrome
            e.preventDefault();
        },
        'drop': function (e) {
            e.preventDefault();
        }
    });
});

// INIT
session.socket.connect().then(function () {
    console.log('websocket: connected');

    window.vita = {
        session,
        Storage
    };

    Storage.loadNotesList();
    app.start();

    // DISPATCH EVENTS
    let searchChan = Radio.channel('search');
    searchChan.on('note:selected', function (id) {
        Storage.openNote(id).then(function (note) {
            note.trigger('note:selected');
        });
    });

    let boardChan = Radio.channel('board');
    boardChan.on('note:create', Storage.createNote, Storage);
    boardChan.on('note:edit', Storage.editNote, Storage);
    boardChan.on('note:save', Storage.saveNote, Storage);
    boardChan.on('note:close', Storage.closeNote, Storage);
    boardChan.on('note:delete', Storage.deleteNote, Storage);
});
