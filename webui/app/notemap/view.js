'use strict';

import Marionette from 'marionette';
import session from '../session';

let NoteView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'Note z-depth-1',

    template: require('./note.hbs')
});

export default Marionette.CompositeView.extend({
    className: 'NoteMap',

    template: require('./view.hbs'),

    childView: NoteView,
    childViewContainer: 'ul',

    events: {
        'click .js-note-add': 'createNote'
    },

    initialize: function () {
        this.collection = session.atomList;
    },

    createNote: function () {
        console.log('create new note');
    }
});
