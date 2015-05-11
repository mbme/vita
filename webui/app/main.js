'use strict';

import Marionette from 'marionette';

import session from './session';
import Socket from './base/socket';

import SearchPanel from './search-panel/view';
import NoteMapView from './notemap/view';


let app = new Marionette.Application();
let socket = new Socket(session.config.socketAddr);

app.addRegions({
    'sidePanel': '#side-panel',
    'main': '#main',
    'modals': '#modals'
});

app.on('start', function () {
    socket.getAtomInfoList().then(function (result) {
        console.log('received list of %s atoms', result.length);
        session.atomInfoList.reset(result);
    });

    app.getRegion('sidePanel').show(new SearchPanel());
    app.getRegion('main').show(new NoteMapView());

    session.bus.on("atom:open", function (id) {
        if (session.atomList.isOpen(id)) {
            console.log('atom %s already open', id);
        } else {
            socket.getAtom(id).then(function (result) {
                console.log('open atom ', id);
                session.atomList.add(result);
            });
        }
    });
});


socket.connect().then(function () {
    console.log('websocket: connected');

    app.start();
});
