'use strict';

import session from 'base/session';
import bus from 'base/bus';
import Socket from 'base/socket';
import NotesManager from 'base/notes-manager';

import app from 'main/main';

let socket = new Socket(session.config.socketAddr);
let notesManager = new NotesManager(session.notes, session.openNotes);

function loadNotesList () {
    socket.getNotesInfoList().then(function (result) {
        console.log('received list of %s notes', result.length);
        notesManager.updateList(result);
    });
}

bus.on("note:open", function (id, edit) {
    if (notesManager.isNoteOpen(id)) {
        console.log('note %s already open', id);
    } else {
        socket.getNote(id).then(function (result) {
            console.log('open note %s', id);
            notesManager.openNote(result, edit);
        });
    }
});

bus.on('note:edit', function (id) {
    if (notesManager.isNoteOpen(id)) {
        console.log('edit note %s', id);
        notesManager.editNote(id);
    } else {
        console.log('cannot edit note %s: not open', id);
    }
});

bus.on('note:close', function (id) {
    console.log('close note %s', id);
    notesManager.closeNote(id);
});

bus.on('note:create', function (data) {
    socket.createNote(data).then(function (result) {

        loadNotesList();
        notesManager.openNote(result, true);
    });
});

bus.on('note:save', function (id) {
    console.log('saving note %s', id);
});

bus.on('note:delete', function (id) {
    console.log('deleting note %s', id);
});

socket.connect().then(function () {
    console.log('websocket: connected');

    loadNotesList();
    app.start();
});
