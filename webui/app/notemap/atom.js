'use strict';

import Marionette from 'marionette';

export let RecordView = Marionette.ItemView.extend({
    className: 'RecordView',
    template: require('./record.hbs')
});

export let AtomView = Marionette.LayoutView.extend({
    className: 'AtomView',

    template: require('./atom.hbs'),

    regions: {
        'body': '.body'
    },

    triggers: {
        'click .js-edit':  'atom:edit',
        'click .js-close': 'atom:close'
    },

    onRender(){
        this.getRegion('body').show(new RecordView({model: this.model}));
    }
});
