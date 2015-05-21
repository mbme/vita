'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

export default Marionette.ItemView.extend({
    className: 'ModalAddFiles',
    template: require('./modal-add-files.hbs'),

    initialize (options) {
        let file = options.file;
        this.model = new Backbone.Model({
            name: file.name,
            size: file.size
        });
    }
});
