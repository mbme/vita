'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

import str2cats from 'helpers/str2cats';
import {RecordView} from './atom';

let FileModel = Backbone.Model.extend({
    defaults: {
        name: '',
        size: 0,
        ts: 0,
        type: null
    }
});

let FileView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: require('./atom-file.hbs')
});

let FilesView = Marionette.CompositeView.extend({
    template: require('./atom-files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    events: {
        'click .file-upload a': 'onSelectFiles'
    },

    initialize () {
        this.collection = new Backbone.Collection(
            [{
                name: 'test.jpg',
                ts:  1430850772,
                size: 4096,
                type: 'image'
            },
             {
                 name: 'haha.txt',
                 ts: 1430310772,
                 size: 123,
                 type: 'text'
             },{
                 name: "long movie.avi",
                 ts: 1430860772,
                 size: 12432118,
                 type: 'video'
             }],
            {model: FileModel});
    },

    onSelectFiles () {
        console.log('selecting files');

        return false;
    }
});

export default Marionette.LayoutView.extend({
    className: 'AtomView is-edit',

    template: require('./atom-edit.hbs'),

    triggers: {
        'click .js-save':   'atom:save',
        'click .js-delete': 'atom:delete',
        'click .js-close':  'atom:close'
    },

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
        'click .js-write':   'showWrite',
        'click .js-preview': 'showPreview',
        'click .js-files':   'showFiles',

        'change @ui.name':       'onNoteChange',
        'change @ui.categories': 'onNoteChange',
        'change @ui.data':       'onNoteChange'
    },

    initialize(options) {
        this.model = options.model.clone();
    },

    onRender() {
        this.getRegion('preview').show(new RecordView({model: this.model}));
        this.getRegion('files').show(new FilesView({model: this.model}));
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
