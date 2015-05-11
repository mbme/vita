'use strict';

import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'marionette';

import session from '../session';
import {fuzzySearch} from '../base/utils';

const FILTER_DELAY_MS = 350;

let AtomInfo = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'AtomInfo collection-item',
    template: require('./item.hbs'),

    events: {
        'click': 'onClick'
    },

    modelEvents: {
        'change:visible': 'onVisibilityChanged'
    },

    onRender: function () {
        if (!this.model.get('visible')) {
            this.el.classList.add('is-hidden');
        }
    },

    onVisibilityChanged: function () {
        this.el.classList.toggle('is-hidden');
    },

    onClick: function () {
        session.bus.trigger('atom:open', this.model.getId());
    }
});

let AtomInfoList = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'collection',
    childView: AtomInfo
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

    initialize: function () {
        this.collection = session.atomInfoList;
        this.model = new Backbone.Model({
            term: ''
        });
        this.updateVisibility();
        this.collection.on('add remove reset', this.updateVisibility, this);
    },

    onRender: function () {
        this.getRegion('list').show(new AtomInfoList({
            collection: this.collection
        }));
    },

    onSearchUpdate: _.debounce(function (e) {
        this.model.set('term', e.target.value);
    }, FILTER_DELAY_MS),

    updateVisibility: function () {
        let term = this.model.get('term');
        this.collection.forEach(function (atomInfo) {
            atomInfo.set('visible', fuzzySearch(term, atomInfo.getName().toLowerCase()));
        });
        console.log('search term updated: %s', term);
    },

    onDestroy: function () {
        this.collection.off('add remove reset', this.updateVisibility, this);
    }
});
