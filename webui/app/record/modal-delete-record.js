'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';

export default Marionette.ItemView.extend({
    className: 'ModalDeleteRecord',
    template: require('./modal-delete-record.hbs'),

    events: {
        'click .js-delete': 'deleteRecord'
    },

    deleteRecord () {
        bus.trigger('note:delete', this.model.getId());
    }
});
