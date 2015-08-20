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

const IGNORED_ATTRS = ['edit', 'visible'];
const CATEGORY_REGEX = /^[a-zA-Z0-9]+$/g;

export let NoteModel = Backbone.Model.extend({
    defaults: {
        id: null,
        key: {},

        name: '',
        categories: '',
        data: '',

        timestamp: null,
        attachments: null,

        edit: false,
        visible: false
    },

    validation: {
        name: {
            required: true
        },
        categories: [{
            required: true,
            msg: 'At least 1 category must be specified'
        }, {
            fn: function (categories) {
                let seen = [];
                for (var category of categories) {
                    if (!category.match(CATEGORY_REGEX)) {
                        return `Invalid category "${category}"`;
                    }

                    let str = category.toLowerCase();

                    if (seen.indexOf(str) > -1) {
                        return `Duplicate category "${category}"`;
                    }

                    seen.push(str);
                }
            }
        }]
    },

    constructor (attrs, opts) {
        attrs = attrs || {};

        // put attachments array into collection
        attrs.attachments = new FilesCollection(attrs.attachments);

        if (attrs.key) {
            attrs.id = `${attrs.key.type}/${attrs.key.id}`;
        }

        Backbone.Model.call(this, attrs, opts);

        this.on('change', this.backupAttributes, this);
    },

    getName () {
        return this.get('name');
    },

    getId () {
        return this.get('id');
    },

    getKey () {
        return this.get('key');
    },

    getAttachments () {
        return this.get('attachments');
    },

    toPublicJSON () {
        return _.pick(
            this.toJSON(),
            ['key', 'name', 'data', 'categories']
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

        let changedAttrs = _.difference(_.keys(this.changed), IGNORED_ATTRS);

        if (changedAttrs.length) {
            this.backup = this.attributes;
        }
    },

    commitAttributes () {
        delete this.backup;
    },

    rollbackAttributes () {
        this.set(this.backup);
        delete this.backup;
    },

    hasChanges () {
        return !!this.backup;
    }
});
