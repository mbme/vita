'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';
import Flow from 'flow';

import session from 'session';

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

let ModalAddFiles = Marionette.ItemView.extend({
    className: 'ModalAddFiles',
    template: require('./modal-add-files.hbs'),
    modalOptions: {
        backdrop: 'static'
    },
    initialize (options) {
        let file = options.file;
        this.model = new Backbone.Model({
            name: file.name,
            size: file.size
        });
    }
});

export default Marionette.CompositeView.extend({
    template: require('./atom-files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    ui: {
        dropZone: '.file-upload',
        uploadButton: '.file-upload .upload-btn'
    },

    flow: null,

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


        this.flow = new Flow({
            target: 'api/file',
            singleFile: true
        });
        if (!this.flow.support) {
            throw "unsupported browser";
        }

        this.flow.on('fileAdded', this.onFileAdded.bind(this));
    },

    onShow () {
        this.flow.assignBrowse(this.ui.uploadButton[0]);
        this.flow.assignDrop(this.ui.dropZone[0]);
    },

    onFileAdded (file) {
        console.log(file);
        session.bus.trigger('modal:open', new ModalAddFiles({file:file}));
    },

    onDestroy () {
        this.flow.off();
    }
});
