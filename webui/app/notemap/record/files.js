'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';
import $ from 'jquery';

import bus from 'base/bus';
import session from 'base/session';
import ModalAddFiles from './modal-add-files';

let FileModel = Backbone.Model.extend({
    defaults: {
        name: '',
        size: 0,
        tsCreated: 0,
        mime: '',
        type: null
    }
});

let FileView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: require('./file.hbs'),

    templateHelpers () {
        return {
            noteId: this.options.noteId
        };
    }
});

export default Marionette.CompositeView.extend({
    template: require('./files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    childViewOptions () {
        return {
            noteId: this.model.getId()
        };
    },

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
            this.model.getAttachments(),
            {model: FileModel}
        );
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
        let modal = new ModalAddFiles({file:file});
        modal.on('file:upload', this.uploadFile, this);
        bus.trigger('modal:open', modal);
    },

    uploadFile (file) {
        let data = new FormData();
        data.append('file', file);

        let id = this.model.getId();
        $.ajax({
            type: 'POST',
            url: session.getServerAddress(`/notes/${id}/attachments`),
            crossDomain: true,
            dataType: 'json',
            cache: 'false',
            contentType: false,
            processData: false,
            data: data,
            success: (resp) => {
                console.log('note %s attached file %s', id, file.name);
                this.collection.add(resp);
            },
            error (_, err, description) {
                console.error('note %s: failed to attach file %s: %s %s', id, file.name, err, description);
            }
        });
    }
});
