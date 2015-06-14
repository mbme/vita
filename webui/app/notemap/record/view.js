'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';

import str2cats from 'helpers/str2cats';
import FilesView from './files';
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

    regions: {
        'preview': '#tab-preview',
        'files':   '#tab-files'
    },

    ui: {
        name:       'input.name',
        categories: 'input.categories',
        data:       'textarea.data'
    },

    events: {
        'change @ui.name, @ui.categories, @ui.data': 'onNoteChange',

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

    syncModel () {
        if (!this.noteChanged) {
            console.debug('model: nothing changed');
            return false;
        }
        this.noteChanged = false;

        let name = this.ui.name.val();
        let categories = str2cats(this.ui.categories.val());
        let data = this.ui.data.val();
        this.model.set({
            name, categories, data
        });

        return true;
    },

    updatePreview () {
        if (this.syncModel()) {
            this.getChildView('preview').render();
        }
    },

    closeRecord () {
        bus.trigger('note:close', this.model.getId());
    },

    saveRecord () {
        this.syncModel();
        bus.trigger('note:save', this.model.attributes);
    },

    deleteRecord () {
        bus.trigger('modal:open', new ModalDeleteRecord({
            id:   this.model.getId(),
            name: this.model.getName()
        }));
    },

    onDestroy () {
        this.model.getAttachments().off('add remove', this.onNoteChange, this);
    }
});
