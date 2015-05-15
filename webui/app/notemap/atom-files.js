'use strict';

import Backbone from 'backbone';
import Marionette from 'marionette';

let FileModel = Backbone.Model.extend({
    defaults: {
        name: '',
        size: 0,
        ts: 0,
        type: null
    }
});

let FileView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: require('./atom-file.hbs')
});

export default Marionette.CompositeView.extend({
    template: require('./atom-files.hbs'),

    childView: FileView,
    childViewContainer: 'table.files',

    events: {
        'click .file-upload a': 'onSelectFiles'
    },

    initialize () {
        this.collection = new Backbone.Collection(
            [{
                name: 'test.jpg',
                ts:  1430850772,
                size: 4096,
                type: 'image'
            },
             {
                 name: 'haha.txt',
                 ts: 1430310772,
                 size: 123,
                 type: 'text'
             },{
                 name: "long movie.avi",
                 ts: 1430860772,
                 size: 12432118,
                 type: 'video'
             }],
            {model: FileModel});
    },

    onSelectFiles () {
        console.log('selecting files');

        return false;
    }
});
