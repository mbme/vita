'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';
import str2cats from 'helpers/str2cats';

export default Marionette.ItemView.extend({
    className: 'ModalCreateNote',
    template: require('./modal-create-note.hbs'),

    ui: {
        name:       'input.name',
        categories: 'input.categories'
    },

    events: {
        'click .js-create': 'createNote'
    },

    createNote () {
        let name = this.ui.name.val();
        if (!name.trim()) {
            console.error('name must not be empty');
            return false;
        }

        let categories = str2cats(this.ui.categories.val());
        if (!categories.length) {
            console.error('categories must not be empty');
            return false;
        }

        bus.trigger('note:create', {
            type: ':record',
            name,
            categories
        });
    }
});
