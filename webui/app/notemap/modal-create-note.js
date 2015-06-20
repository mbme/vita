'use strict';

import Marionette from 'marionette';
import Backbone from 'backbone';

import bus from 'base/bus';
import str2cats from 'record/str2cats';
import Watcher from 'helpers/watcher-behavior';

let Model = Backbone.Model.extend({
    validation: {
        name: {
            required: true
        },
        categories: {
            required: true
        }
    }
});

export default Marionette.ItemView.extend({
    className: 'ModalCreateNote',
    template: require('./modal-create-note.hbs'),

    behaviors: {
        Watcher: {
            behaviorClass: Watcher,
            transformers: {
                categories: str2cats
            }
        }
    },

    ui: {
        name:       'input.name',
        categories: 'input.categories'
    },

    events: {
        'click .js-create': 'createNote'
    },

    initialize () {
        this.model = new Model();
    },

    createNote () {
        if (!this.model.isValid(true)) {
            return false;
        }

        let name = this.model.get('name');
        let categories = this.model.get('categories');

        bus.trigger('note:create', {
            type: ':record',
            name,
            categories
        });
    }
});
