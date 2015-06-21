'use strict';

import Marionette from 'marionette';
import Radio from 'radio';

import str2cats from './str2cats';
import Watcher from 'helpers/watcher-behavior';

import FilesView from 'attachments/files';
import Record from './record';

let workspaceChannel = Radio.channel('workspace');
let modalsChannel = Radio.channel('modals');

export let RecordView = Marionette.LayoutView.extend({
    className: 'RecordView',

    template: require('./view.hbs'),

    regions: {
        'body': '.body'
    },

    events: {
        'click .js-edit':  'editRecord',
        'click .js-close': 'closeRecord'
    },

    onRender () {
        this.getRegion('body').show(new Record({model: this.model}));
    },

    editRecord () {
        workspaceChannel.trigger('note:edit', this.model.getId());
    },

    closeRecord () {
        workspaceChannel.trigger('note:close', this.model.getId());
    }
});

export let RecordEditView  = Marionette.LayoutView.extend({
    className: 'RecordView is-edit',
    template: require('./view-edit.hbs'),

    behaviors: {
        Watcher: {
            behaviorClass: Watcher,
            transformers: {
                categories: str2cats
            }
        }
    },

    regions: {
        'preview': '#tab-preview',
        'files':   '#tab-files'
    },

    modelEvents: {
        'change': 'onNoteChange'
    },

    events: {
        'click .js-preview': 'updatePreview',

        'click .js-save':   'saveRecord',
        'click .js-delete': 'deleteRecord',
        'click .js-close':  'closeRecord'
    },

    initialize() {
        this.listenTo(this.model.getAttachments(), 'add remove', this.onNoteChange);
    },

    onRender() {
        this.getRegion('preview').show(new Record({model: this.model}));
        this.getRegion('files').show(new FilesView({model: this.model}));
    },

    noteChanged: false,
    onNoteChange () {
        this.noteChanged = true;
    },

    updatePreview () {
        if (this.noteChanged) {
            this.getChildView('preview').render();
            this.noteChanged = false;
        }
    },

    closeRecord () {
        if (this.model.hasChanges()) {
            modalsChannel.request('confirmation', {
                title: 'Close record',
                body: `There are unsaved changes. Do you really want to close record <b>${this.model.getName()}</b>?`,
                'accept-text': 'Close'
            }).then(() => workspaceChannel.trigger('note:close', this.model.getId()));
        } else {
            workspaceChannel.trigger('note:close', this.model.getId());
        }
    },

    saveRecord () {
        if (!this.model.isValid(true)) {
            return false;
        }
        workspaceChannel.trigger('note:save', this.model.getId());
    },

    deleteRecord () {
        modalsChannel.request('confirmation', {
            title: 'Delete record',
            body: `Do you really want to delete record <b>${this.model.getName()}</b>?`,
            'accept-text': 'Delete'
        }).then(() => workspaceChannel.trigger('note:delete', this.model.getId()));
    }
});
