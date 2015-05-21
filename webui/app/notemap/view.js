'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';

import NoteView from './note';
import ModalCreateNote from './modal-create-note';

export default Marionette.CompositeView.extend({
    className: 'NoteMap',

    template: require('./view.hbs'),

    childView: NoteView,
    childViewContainer: 'ul.notes',

    events: {
        'click .js-note-add': 'createNote'
    },

    createNote () {
        console.log('create new note');
        bus.trigger('modal:open', new ModalCreateNote());
    }
});
