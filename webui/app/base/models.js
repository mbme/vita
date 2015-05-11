'use strict';

import Backbone from 'backbone';


export let AtomInfo = Backbone.Model.extend({
    defaults: {
        id: null,
        name: null,
        type: null,
        data: null,
        ts_created: null,
        ts_updated: null,
        categories: []
    },

    getName: function () {
        return this.get('name');
    },

    getId: function () {
        return this.get('id');
    }
});

export let AtomCollection = Backbone.Collection.extend({
    model: AtomInfo,

    isOpen: function (id) {
        return !!this.get(id);
    }
});
