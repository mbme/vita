'use strict';

import Marionette from 'marionette';

import bus from 'base/bus';
import {RecordView, RecordEditView} from './record/view';
import rgb2hex from 'helpers/rgb2hex';

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

        this.highlightNote();

        bus.on('note:open', this.maybeHighlight, this);
    },

    maybeHighlight (id) {
        if (id === this.model.getId()) {
            this.highlightNote();
        }
    },

    highlightNote () {
        let color = rgb2hex(this.$el.css('background-color'));

        $.Velocity.RunSequence([
            { e: this.$el,
              p: {backgroundColor: '#FFFF66'},
              o: {duration: 100}},
            { e: this.$el,
              p: {backgroundColor: color},
              o: {duration: 500}}
        ]);

        this.$el.velocity('scroll', {
            duration: 150,
            easing: 'spring'
        });
    },

    updateView () {
        let View = this.model.get('edit') ? RecordEditView : RecordView;
        this.getRegion('content').show(new View({model: this.model}));
    },

    onDestroy () {
        bus.off('note:open', this.maybeHighlight, this);
    }
});
