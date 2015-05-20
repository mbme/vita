'use strict';

import session from 'base/session';
import bus from 'base/bus';
import Socket from 'base/socket';
import NotesManager from 'base/notes-manager';

import app from 'main/main';

let socket = new Socket(session.config.socketAddr);
let notesManager = new NotesManager(session.notes, session.openNotes);

function loadAtomsList () {
    socket.getAtomInfoList().then(function (result) {
        console.log('received list of %s atoms', result.length);
        notesManager.updateList(result);
    });
}

bus.on("atom:open", function (id, edit) {
    if (notesManager.isNoteOpen(id)) {
        console.log('atom %s already open', id);
    } else {
        socket.getAtom(id).then(function (result) {
            console.log('open atom ', id);
            notesManager.openNote(result, edit);
        });
    }
});

bus.on('atom:create', function (data) {
    socket.createAtom(data).then(function (result) {

        loadAtomsList();
        notesManager.openNote(result, true);
    });
});

socket.connect().then(function () {
    console.log('websocket: connected');

    loadAtomsList();
    app.start();
});
