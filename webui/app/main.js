'use strict';

import Marionette from 'marionette';

import session from 'session';
import Socket from 'base/socket';

import SearchPanel from 'search-panel/view';
import NoteMapView from 'notemap/view';
import ModalsView from 'base/modals';


let app = new Marionette.Application();
let socket = new Socket(session.config.socketAddr);

app.addRegions({
    'sidePanel': '#side-panel',
    'main':      '#main',
    'modals':    '#modals'
});

function loadAtomsList () {
    socket.getAtomInfoList().then(function (result) {
        console.log('received list of %s atoms', result.length);
        session.atomInfoList.reset(result);
    });
}

app.on('start', function () {
    loadAtomsList();

    app.getRegion('sidePanel').show(new SearchPanel());
    app.getRegion('main').show(new NoteMapView());
    app.getRegion('modals').show(new ModalsView());

    session.bus.on("atom:open", function (id, edit) {
        if (session.atomList.isOpen(id)) {
            console.log('atom %s already open', id);
        } else {
            socket.getAtom(id).then(function (result) {
                console.log('open atom ', id);
                result.edit = Boolean(edit);
                session.atomList.addAtom(result);
            });
        }
    });

    session.bus.on('atom:create', function (atom) {
        socket.createAtom(atom).then(function (result) {
            loadAtomsList();
            session.bus.trigger('atom:open', result.id, true);
        });
    });
});


socket.connect().then(function () {
    console.log('websocket: connected');

    app.start();
});
