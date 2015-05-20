'use strict';

import {NotesCollection, OpenNotesCollection} from 'base/models';

let session = {
    config: {
        socketAddr: "ws://test.dev:8081/ws"
    },

    notes: new NotesCollection(),
    openNotes: new OpenNotesCollection()
};

window.session = session;

export default session;
