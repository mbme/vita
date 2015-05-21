'use strict';

import _ from 'underscore';
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
    },

    toPublicJSON () {
        return _.pick(
            this.toJSON(),
            ['id', 'name', 'type', 'data', 'categories']
        );
    }
});

export let NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    comparator: 'name'
});

export let OpenNotesCollection = Backbone.Collection.extend({
    model: NoteModel
});
