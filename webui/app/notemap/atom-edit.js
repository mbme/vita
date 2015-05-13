'use strict';

import Marionette from 'marionette';

export default Marionette.LayoutView.extend({
    className: 'AtomView is-edit',

    template: require('./atom-edit.hbs'),

    triggers: {
        'click .js-save':   'atom:save',
        'click .js-delete': 'atom:delete',
        'click .js-close':  'atom:close'
    },

    regions: {
        'preview': '#tab-preview'
    },

    events: {
        'click .js-write':   'showWrite',
        'click .js-preview': 'showPreview',
        'click .js-files':   'showFiles'
    },

    initialize(options) {
        this.model = options.model.clone();
    },

    onRender() {
        // this.getRegion('preview').show(new AtomView({model: this.model}));
    },

    showWrite() {
        console.log('write');
    },

    showPreview() {
        console.log('preview');
    },

    showFiles() {
        console.log('files');
    }
});
