'use strict';

import 'base/radio.shim';

import $ from 'jquery';
import Radio from 'radio';
import Marionette from 'marionette';

import session from 'base/session';
import Socket from 'base/socket';
import NotesManager from 'base/notes-manager';

import SearchPanel from 'search-panel/view';
import BoardView from 'board/view';
import ModalsView from 'modals/view';


let socket = new Socket(session.config.socketAddr);
let notesManager = new NotesManager(session.notes, session.openNotes);

let workspaceChannel = Radio.channel('workspace');

function loadNotesList () {
    socket.getNotesInfoList().then(function (result) {
        console.log('received list of %s notes', result.length);
        notesManager.updateList(result);
    });
}

workspaceChannel.on('note:open', function (id, edit) {
    if (notesManager.isNoteOpen(id)) {
        console.log('note %s already open', id);
    } else {
        socket.getNote(id).then(function (result) {
            console.log('open note %s', id);
            notesManager.openNote(result, edit);
        });
    }
});

workspaceChannel.on('note:edit', function (id) {
    let note = notesManager.getOpenNote(id);

    if (!note) {
        console.error('cannot edit note %s: not open', id);
        return;
    }

    console.log('edit note %s', id);
    note.edit(true);
});

workspaceChannel.on('note:close', function (id) {
    if (!notesManager.isNoteOpen(id)) {
        console.error('cannot close note %s: not open', id);
        return;
    }

    console.log('close note %s', id);
    notesManager.closeNote(id);
});

workspaceChannel.on('note:create', function (data) {
    socket.createNote(data).then(function (result) {

        loadNotesList();
        notesManager.openNote(result, true);
    });
});

workspaceChannel.on('note:save', function (id) {
    let note = notesManager.getOpenNote(id);

    if (!note) {
        console.error('cannot save note %s: not open', id);
        return;
    }

    console.log('saving note %s', id);
    socket.updateNote(note.toPublicJSON()).then(function () {
        loadNotesList();
        note.edit(false);
        note.commitAttributes();
    }, function (err) {
        console.error('cannot save note %s: %s', id, err);
    });
});

workspaceChannel.on('note:delete', function (id) {
    if (!notesManager.isNoteOpen(id)) {
        console.error('cannot delete note %s: not open', id);
        return;
    }

    console.log('delete note %s', id);
    socket.deleteNote(id).then(function () {
        loadNotesList();
        notesManager.closeNote(id);
    });
});

// INIT Application

let app = new Marionette.Application();

app.addRegions({
    'sidePanel': '#side-panel',
    'main':      '#main',
    'modals':    '#modals'
});

app.on('start', function () {
    app.getRegion('sidePanel').show(new SearchPanel({collection: session.notes}));
    app.getRegion('main').show(new BoardView({collection: session.openNotes}));
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

socket.connect().then(function () {
    console.log('websocket: connected');

    loadNotesList();
    app.start();
});
