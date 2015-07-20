'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

export let Model = Backbone.Model.extend({
    defaults: {
        title: 'Confirmation',
        body: '',
        'reject-text': 'Cancel',
        'accept-text': 'Confirm'
    }
});

export let View = Marionette.ItemView.extend({
    template: require('./confirmation.hbs'),

    events: {
        'click .js-accept': 'accept'
    },

    initialize (options) {
        this.deferred = options.deferred;
    },

    accept () {
        this.deferred.resolve();
        this.deferred = null;
    },

    onDestroy () {
        if (this.deferred) {
            this.deferred.reject();
        }
    }
});
