'use strict';

import Marionette from 'marionette';

import {RecordView, RecordEditView} from './record/view';

export default Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'Note',

    template: false,

    modelEvents: {
        'change:edit': 'updateView'
    },

    onShow () {
        this.addRegion('content', {
            el: this.$el
        });
        this.updateView();
    },

    updateView () {
        let View = this.model.get('edit') ? RecordEditView : RecordView;
        this.getRegion('content').show(new View({model: this.model}));
    },
});
