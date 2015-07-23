'use strict';

var path = require('path');
var webpack = require('webpack');

var base = __dirname;
var src = 'webui';

var newConfig = function (dist, libs) {
    var config = {
        entry: {
            app: 'init.js',
            vendor: []
        },

        resolve: {
            root: [path.join(base, src, 'app')],
            alias: {}
        },

        addLib: function (name, relPath) {
            var libPath = path.join(base, src, 'vendor', relPath);
            this.entry.vendor.push(libPath);
            this.resolve.alias[name + '$'] = libPath;
        },

        output: {
            path: dist,
            filename: 'bundle.js'
        },

        externals: {
            'jquery':      'jQuery',
            'markdown-it': 'markdownit',
            'moment':      'moment'
        },

        module : {
            noParse: [],
            loaders : [
                { test: /\.js?$/, include: /app/, loader: 'babel-loader',
                  query: {
                      "stage": 0,
                      "loose": true,
                      "blacklist": [
                          "es6.tailCall"
                      ],
                      "optional": [
                          "runtime"
                      ]
                  }},
                { test: /\.hbs$/, loader: 'handlebars-loader',
                  query: {
                      helperDirs: [path.join(base, src, 'app','helpers'),
                                   path.join(base, src, 'app','partials')]
                  }}
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
            new webpack.optimize.DedupePlugin()
        ]
    };

    Object.keys(libs).forEach(function (name) {
        config.addLib(name, libs[name]);
    });

    return config;
};

var devConfig = newConfig('./webui', {
    'underscore':          'lodash/lodash.js',
    'backbone':            'backbone/backbone.js',
    'backbone-validation': 'backbone-validation/dist/backbone-validation-amd.js',
    'marionette':          'marionette/lib/backbone.marionette.js',
    'radio':               'backbone.radio/build/backbone.radio.js',
    'rsvp':                'rsvp/rsvp.js'
});
devConfig.debug = true;
devConfig.devtool = 'eval';

var prodConfig = newConfig('./target', {
    'underscore':          'lodash/lodash.min.js',
    'backbone':            'backbone/backbone.js',
    'backbone-validation': 'backbone-validation/dist/backbone-validation-amd-min.js',
    'marionette':          'marionette/lib/backbone.marionette.min.js',
    'radio':               'backbone.radio/build/backbone.radio.min.js',
    'rsvp':                'rsvp/rsvp.min.js'
});

prodConfig.debug = false;

module.exports = {
    dev: devConfig,
    prod: prodConfig
};
