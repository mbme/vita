'use strict';

import Marionette from 'marionette';
import Radio from 'radio';

import str2cats from 'record/str2cats';
import Watcher from 'helpers/watcher-behavior';
import {NoteModel} from 'base/models';

let boardChan = Radio.channel('board');

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
        this.model = new NoteModel();
    },

    createNote () {
        if (!this.model.isValid(true)) {
            return false;
        }

        let name = this.model.get('name');
        let categories = this.model.get('categories');

        boardChan.trigger('note:create', {
            type: ':record',
            name,
            categories
        });
    }
});
