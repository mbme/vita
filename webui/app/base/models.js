'use strict';

import Backbone from 'backbone';


export let AtomInfo = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        type: null,
        ts_created: null,
        ts_updated: null,
        categories: []
    },

    getName: function () {
        return this.get('name');
    }
});
