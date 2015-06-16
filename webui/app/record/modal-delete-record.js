'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

import bus from 'base/bus';

export default Marionette.ItemView.extend({
    className: 'ModalDeleteRecord',
    template: require('./modal-delete-record.hbs'),

    events: {
        'click .js-delete': 'deleteRecord'
    },

    initialize (options) {
        this.model = new Backbone.Model({
            name: options.name,
            id: options.id
        });
    },

    deleteRecord () {
        bus.trigger('note:delete', this.model.get('id'));
    }
});
