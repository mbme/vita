'use strict';

import Marionette from 'marionette';
import Radio from 'radio';

import {RecordView, RecordEditView} from 'record/view';
import rgb2hex from 'helpers/rgb2hex';

export default Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'Note',

    template: false,

    modelEvents: {
        'change:edit': 'updateView',
        'note:selected': 'highlightNote'
    },

    onShow () {
        this.addRegion('content', {
            el: this.$el
        });
        this.updateView();
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
        let View = this.model.isEdited() ? RecordEditView : RecordView;
        this.getRegion('content').show(new View({model: this.model}));
    }
});
