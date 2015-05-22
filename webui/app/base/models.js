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
    comparator (m1, m2) {
        let n1 = m1.getName().toLowerCase();
        let n2 = m2.getName().toLowerCase();

        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        } else {
            return 0;
        }
    }
});

export let OpenNotesCollection = Backbone.Collection.extend({
    model: NoteModel
});
