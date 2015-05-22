'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

import bus from 'base/bus';
import ModalAddFiles from './modal-add-files';

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
    template: require('./file.hbs')
});

export default Marionette.CompositeView.extend({
    template: require('./files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    ui: {
        dropZone:         '.file-upload',
        fileSelectorForm: '.file-selector',
        uploadButton:     '.file-upload .upload-btn'
    },

    events: {
        'click  @ui.uploadButton':           'selectFile',
        'change @ui.fileSelectorForm input': 'onFileSelected',
        'drop   @ui.dropZone':               'onFileDropped'
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

    selectFile () {
        let $input = this.ui.fileSelectorForm.find('input');
        $input.click();
    },

    onFileSelected (e) {
        this.showFileDialog(e.target.files[0]);
        this.ui.fileSelectorForm[0].reset();
    },

    onFileDropped (e) {
        let files = e.originalEvent.dataTransfer.files;
        if (files.length) {
            this.showFileDialog(files[0]);
        }
    },

    showFileDialog (file) {
        bus.trigger('modal:open', new ModalAddFiles({file:file}));
    }
});
