'use strict';

import Marionette from 'marionette';

export default Marionette.ItemView.extend({
    className: 'AtomView',

    template: require('./atom.hbs'),

    triggers: {
        'click .js-edit':  'atom:edit',
        'click .js-close': 'atom:close'
    }
});
