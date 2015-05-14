'use strict';

import Backbone from 'backbone';


export let AtomInfo = Backbone.Model.extend({
    defaults: {
        id: null,
        name: '',
        type: '',
        data: '',
        ts_created: null,
        ts_updated: null,
        categories: []
    },

    getName () {
        return this.get('name');
    },

    getId () {
        return this.get('id');
    }
});

export let AtomCollection = Backbone.Collection.extend({
    model: AtomInfo,

    isOpen (id) {
        return !!this.get(id);
    },

    addAtom (data) {
        this.add(data, {at: 0});
    }
});
