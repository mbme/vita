'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

import Watcher from 'helpers/watcher-behavior';

let Model = Backbone.Model.extend({
    validation: {
        name: {
            required: true
        }
    }
});

export default Marionette.ItemView.extend({
    className: 'ModalAddFiles',
    template: require('./modal-add-files.hbs'),

    behaviors: {
        Watcher: {
            behaviorClass: Watcher
        }
    },

    events: {
        'click .js-upload': 'uploadFile'
    },

    initialize (options) {
        this.file = options.file;
        this.model = new Model({
            name: this.file.name,
            size: this.file.size
        });
    },

    uploadFile () {
        if (!this.model.isValid(true)) {
            return false;
        }
        let name = this.model.get('name');
        this.trigger('file:upload', name, this.file);
    }
});
