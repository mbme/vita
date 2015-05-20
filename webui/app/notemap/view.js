'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';

import {AtomView} from './atom';
import EditAtomView from './editor/view';
import ModalCreateNote from './modal-create-note';

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
        'atom:close':  'closeNote',
        'atom:edit':   'editNote',
        'atom:save':   'saveNote',
        'atom:delete': 'deleteNote'
    },

    onShow () {
        this.updateView();
    },

    updateView () {
        let View = this.model.get('edit') ? EditAtomView : AtomView;
        this.getRegion('content').show(new View({model: this.model}));
    },

    closeNote () {
        console.log('closing atom %s', this.model.getId());
        this.model.collection.remove(this.model);
    },

    editNote () {
        console.log('edit atom %s', this.model.getId());
        this.model.set('edit', true);
    },

    saveNote () {
        console.log('save atom %s', this.model.getId());
        bus.trigger('atom:save', this.model);
        this.model.set('edit', false);
    },

    deleteNote () {
        var id = this.model.getId();
        console.log('delete atom %s', id);
        bus.trigger('atom:delete', id);
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

    initialize (options) {
        this.collection = options.collection;
    },

    createNote () {
        console.log('create new note');
        bus.trigger('modal:open', new ModalCreateNote());
    }
});
