'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

export default Marionette.ItemView.extend({
    className: 'ModalAddFiles',
    template: require('./modal-add-files.hbs'),

    events: {
        'click .js-upload': 'uploadFile'
    },

    initialize (options) {
        this.file = options.file;
        this.model = new Backbone.Model({
            name: this.file.name,
            size: this.file.size
        });
    },

    uploadFile () {
        this.trigger('file:upload', this.file);
    }
});
