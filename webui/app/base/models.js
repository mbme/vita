'use strict';

import _ from 'underscore';
import Backbone from 'backbone';

let FileModel = Backbone.Model.extend({
    defaults: {
        name: '',
        size: 0,
        tsCreated: 0,
        mime: '',
        type: null
    },
    idAttribute: 'name',

    getName () {
        return this.get('name');
    }
});

let FilesCollection = Backbone.Collection.extend({
    model: FileModel
});

export let NoteModel = Backbone.Model.extend({
    defaults: {
        id: null,
        type: '',

        name: '',
        categories: '',
        data: '',

        timestamp: null,
        attachments: null,

        edit: false
    },

    validation: {
        name: {
            required: true
        },
        categories: {
            required: true,
            msg: 'At least 1 category must be specified'
        }
    },

    constructor (attrs, opts) {
        attrs = attrs || {};

        // put attachments array into collection
        attrs.attachments = new FilesCollection(attrs.attachments);
        Backbone.Model.call(this, attrs, opts);

        this.on('change', this.backupAttributes, this);
    },

    getName () {
        return this.get('name');
    },

    getId () {
        return this.get('id');
    },

    getAttachments () {
        return this.get('attachments');
    },

    toPublicJSON () {
        return _.pick(
            this.toJSON(),
            ['id', 'name', 'type', 'data', 'categories']
        );
    },

    edit (edit) {
        this.set('edit', Boolean(edit));
    },

    isEdited () {
        return this.get('edit');
    },

    backupAttributes () {
        if (this.backup) {
            return;
        }
        this.backup = this.attributes;
    },

    commitAttributes () {
        delete this.backup;
    },

    rollbackAttributes () {
        this.set(this.backup);
        delete this.backup;
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
