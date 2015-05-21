'use strict';

import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'marionette';

import bus from 'base/bus';
import search from 'helpers/search';

const FILTER_DELAY_MS = 350;

let NoteInfo = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'NoteInfo list-group-item',

    template: require('./item.hbs'),

    events: {
        'click': 'onClick'
    },

    modelEvents: {
        'change:visible': 'onVisibilityChanged'
    },

    onRender () {
        if (!this.model.get('visible')) {
            this.el.classList.add('is-hidden');
        }
    },

    onVisibilityChanged () {
        this.el.classList.toggle('is-hidden');
    },

    onClick () {
        bus.trigger('note:open', this.model.getId());
    }
});

let NoteInfoList = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'list-group',
    childView: NoteInfo
});


export default Marionette.LayoutView.extend({
    className: 'SearchPanel',

    template: require('./view.hbs'),

    regions: {
        list: '.items-list'
    },

    events: {
        'keyup .js-search-input': 'onSearchUpdate'
    },

    modelEvents: {
        'change:term': 'updateVisibility'
    },

    initialize (options) {
        this.collection = options.collection;
        this.model = new Backbone.Model({
            term: ''
        });
        this.updateVisibility();
        this.collection.on('add remove reset', this.updateVisibility, this);
    },

    onRender () {
        this.getRegion('list').show(new NoteInfoList({
            collection: this.collection
        }));
    },

    onSearchUpdate: _.debounce(function (e) {
        this.model.set('term', e.target.value);
    }, FILTER_DELAY_MS),

    updateVisibility () {
        let term = this.model.get('term');
        this.collection.forEach(function (noteInfo) {
            noteInfo.set('visible', search(term, noteInfo.getName().toLowerCase()));
        });
        console.log('search term updated: %s', term);
    },

    onDestroy () {
        this.collection.off('add remove reset', this.updateVisibility, this);
    }
});
