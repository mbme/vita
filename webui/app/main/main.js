'use strict';

import $ from 'jquery';
import Marionette from 'marionette';

import session from 'base/session';

import SearchPanel from 'search-panel/view';
import NoteMapView from 'notemap/view';
import ModalsView from './modals';


let app = new Marionette.Application();

app.addRegions({
    'sidePanel': '#side-panel',
    'main':      '#main',
    'modals':    '#modals'
});

app.on('start', function () {
    app.getRegion('sidePanel').show(new SearchPanel({collection: session.notes}));
    app.getRegion('main').show(new NoteMapView({collection: session.openNotes}));
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

export default app;
