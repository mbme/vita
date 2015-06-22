'use strict';

import Marionette from 'marionette';
import Radio from 'radio';

let modalsChan = Radio.channel('modals');

import NoteView from './note';
import ModalCreateNote from './modal-create-note';

export default Marionette.CompositeView.extend({
    className: 'Board',

    template: require('./board.hbs'),

    childView: NoteView,
    childViewContainer: 'ul.notes',

    events: {
        'click .js-note-add': 'createNote'
    },

    createNote () {
        console.log('create new note');
        modalsChan.trigger('modal:open', new ModalCreateNote());
    }
});
