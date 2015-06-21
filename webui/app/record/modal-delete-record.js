'use strict';

import Marionette from 'marionette';
import Radio from 'radio';

let workspaceChannel = Radio.channel('workspace');

export default Marionette.ItemView.extend({
    className: 'ModalDeleteRecord',
    template: require('./modal-delete-record.hbs'),

    events: {
        'click .js-delete': 'deleteRecord'
    },

    deleteRecord () {
        workspaceChannel.trigger('note:delete', this.model.getId());
    }
});
