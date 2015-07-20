'use strict';

import $ from 'jquery';
import Radio from 'radio';
import Marionette from 'marionette';

import session from 'base/session';
import ModalAddFiles from './modal-add-files';

let modalsChan = Radio.channel('modals');

let FileView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: require('./file.hbs'),

    templateHelpers () {
        return {
            key: this.note.getKey()
        };
    },

    events: {
        'click .buttons span': 'showRemoveFileDialog'
    },

    initialize (options) {
        this.note = options.note;
    },

    showRemoveFileDialog () {
        modalsChan.request('confirmation', {
            title: 'Delete file',
            body: `Do you really want to delete file <b>${this.model.getName()}</b>?`,
            'accept-text': 'Delete'
        }).then(() => this.deleteFile());
    },

    deleteFile () {
        let id = this.note.getId();
        let key = this.note.getKey();
        let fileName = this.model.getName();
        $.ajax({
            type: 'DELETE',
            url: session.getServerAddress(`/notes/${key.type}/${key.id}/attachments/${fileName}`),
            crossDomain: true,
            success: () => {
                console.log('note %s: removed attachment %s', id, fileName);
                this.model.collection.remove(this.model);
            },
            error (_, err, description) {
                console.error('note %s: failed to remove attachment %s: %s %s', id, fileName, err, description);
            }
        });
    }
});

export default Marionette.CompositeView.extend({
    className: 'Files',
    template: require('./files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    childViewOptions () {
        return {
            note: this.model
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
        this.collection = this.model.getAttachments();
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

        modalsChan.trigger('modal:open', modal);
    },

    uploadFile (name, file) {
        let data = new FormData();

        data.append('name', name);
        data.append('file', file);

        let id = this.model.getId();
        let key = this.model.getKey();
        $.ajax({
            type: 'POST',
            url: session.getServerAddress(`/notes/${key.type}/${key.id}/attachments`),
            crossDomain: true,
            dataType: 'json',
            cache: 'false',
            contentType: false,
            processData: false,
            data: data,
            success: (resp) => {
                console.log('note %s attached file %s', id, name);
                this.collection.add(resp);
            },
            error (_, err, description) {
                console.error('note %s: failed to attach file %s: %s %s', id, name, err, description);
            }
        });
    }
});
