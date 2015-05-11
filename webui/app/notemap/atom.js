'use strict';

import Marionette from 'marionette';

export let AtomView = Marionette.ItemView.extend({
    className: 'AtomView',

    template: require('./atom.hbs'),

    triggers: {
        'click .js-edit': 'atom:edit',
        'click .js-close': 'atom:close'
    }
});

export let EditAtomView = Marionette.ItemView.extend({
    className: 'AtomView is-edit',

    template: require('./atom-edit.hbs')
});
