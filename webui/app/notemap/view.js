'use strict';

import Marionette from 'marionette';
import session from '../session';

let NoteView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'Note z-depth-1',

    template: require('./note.hbs'),

    events: {
        'click .js-edit': 'editNote',
        'click .js-close': 'closeNote'
    },

    editNote: function () {
        console.log('edit atom %s', this.model.getId());
    },

    closeNote: function () {
        console.log('closing atom %s', this.model.getId());
        this.model.collection.remove(this.model);
    }
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
