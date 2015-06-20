'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';
import str2cats from './str2cats';
import Watcher from 'helpers/watcher-behavior';

import FilesView from 'attachments/files';
import ModalDeleteRecord from './modal-delete-record';
import Record from './record';

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
        bus.trigger('note:edit', this.model.getId());
    },

    closeRecord () {
        bus.trigger('note:close', this.model.getId());
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
        this.model.getAttachments().on('add remove', this.onNoteChange, this);
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
        // TODO check if there are uncommited changes
        bus.trigger('note:close', this.model.getId());
    },

    saveRecord () {
        if (!this.model.isValid(true)) {
            return false;
        }
        bus.trigger('note:save', this.model.getId());
    },

    deleteRecord () {
        bus.trigger('modal:open', new ModalDeleteRecord({model: this.model}));
    },

    onDestroy () {
        this.model.getAttachments().off('add remove', this.onNoteChange, this);
    }
});
