'use strict';

import Backbone from 'backbone';

export let NoteModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: '',
        type: '',
        data: '',
        ts_created: null,
        ts_updated: null,
        categories: []
    },

    getName () {
        return this.get('name');
    },

    getId () {
        return this.get('id');
    }
});

export let NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    comparator: 'name'
});

export let OpenNotesCollection = Backbone.Collection.extend({
    model: NoteModel
});
