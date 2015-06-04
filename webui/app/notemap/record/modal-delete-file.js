'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

export default Marionette.ItemView.extend({
    className: 'ModalDeleteFile',
    template: require('./modal-delete-file.hbs'),

    events: {
        'click .js-delete': 'deleteFile'
    },

    initialize (options) {
        this.model = new Backbone.Model({
            name: options.name
        });
    },

    deleteFile () {
        this.trigger('file:delete');
    }
});
