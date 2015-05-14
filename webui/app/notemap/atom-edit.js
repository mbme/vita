'use strict';

import Marionette from 'marionette';

import str2cats from 'helpers/str2cats';
import {RecordView} from './atom';

export default Marionette.LayoutView.extend({
    className: 'AtomView is-edit',

    template: require('./atom-edit.hbs'),

    triggers: {
        'click .js-save':   'atom:save',
        'click .js-delete': 'atom:delete',
        'click .js-close':  'atom:close'
    },

    regions: {
        'preview': '#tab-preview'
    },

    ui: {
        name:      'input.name',
        categories: 'input.categories',
        data:       'textarea.data'
    },

    events: {
        'click .js-write':   'showWrite',
        'click .js-preview': 'showPreview',
        'click .js-files':   'showFiles',

        'change @ui.name':      'onNoteChange',
        'change @ui.categories': 'onNoteChange',
        'change @ui.data':       'onNoteChange'
    },

    initialize(options) {
        this.model = options.model.clone();
    },

    onRender() {
        this.getRegion('preview').show(new RecordView({model: this.model}));
    },

    showWrite() {
        console.log('write');
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

    showPreview () {
        if (this.syncModel()) {
            this.getRegion('preview').currentView.render();
        }
    },

    showFiles () {
        console.log('files');
    }
});
