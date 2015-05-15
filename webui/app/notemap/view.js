'use strict';

import Marionette from 'marionette';

import session from 'session';

import {AtomView} from './atom';
import EditAtomView from './editor/view';



let NoteView = Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'Note',

    template() {
        return '<div class="content"></div>';
    },

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

    onShow () {
        this.updateView();
    },

    updateView () {
        let View = this.model.get('edit') ? EditAtomView : AtomView;
        this.getRegion('content').show(new View({model: this.model}));
    },

    closeView () {
        console.log('closing atom %s', this.model.getId());
        this.model.collection.remove(this.model);
    },

    editView () {
        console.log('edit atom %s', this.model.getId());
        this.model.set('edit', true);
    }
});

export default Marionette.CompositeView.extend({
    className: 'NoteMap',

    template: require('./view.hbs'),

    childView: NoteView,
    childViewContainer: 'ul.notes',

    events: {
        'click .js-note-add': 'createNote'
    },

    initialize () {
        this.collection = session.atomList;
    },

    createNote () {
        console.log('create new note');
        this.collection.addAtom({
            edit: true
        });
    }
});
