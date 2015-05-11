'use strict';

import Marionette from 'marionette';

import session from './session';
import Socket from './base/socket';
import SearchPanel from './search-panel/view';

let app = new Marionette.Application();

app.addRegions({
    'sidePanel': '#side-panel',
    'main': '#main',
    'modals': '#modals'
});

app.on('start', function () {
    let socket = new Socket(session.config.socketAddr);
    socket.connect().then(function () {
        console.log('websocket: connected');
        session.socket = socket;

        socket.getAtomInfoList().then(function (result) {
            console.log(result);
        });
    });

    app.getRegion('sidePanel').show(new SearchPanel());
});

app.start();
