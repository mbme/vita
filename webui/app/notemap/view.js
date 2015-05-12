'use strict';

import Marionette from 'marionette';
import session from '../session';
import {AtomView, EditAtomView} from './atom';

let NoteView = Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'Note',

    template: require('./note.hbs'),

    regions: {
        content: '.content'
    },

    modelEvents: {
        'change:edit': 'updateView'
    },

    childEvents: {
        'atom:close': 'closeView',
        'atom:edit':  'editView'
    },

    onShow: function () {
        this.updateView();
    },

    updateView: function () {
        var View = this.model.get('edit') ? EditAtomView : AtomView;
        this.getRegion('content').show(new View({model: this.model}));
    },

    closeView: function () {
        console.log('closing atom %s', this.model.getId());
        this.model.collection.remove(this.model);
    },

    editView: function () {
        console.log('edit atom %s', this.model.getId());
        this.model.set('edit', true);
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
        this.collection.addAtom({
            edit: true
        });
    }
});
