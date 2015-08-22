/*eslint no-var:0*/
'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = __dirname;
var src = 'web';

var newConfig = function (dist, libs, noParseLibs) {
  noParseLibs = noParseLibs || [];

  var config = {
    entry: {
      app: 'init.js',
      vendor: []
    },

    resolve: {
      root: [path.join(base, src, 'app')],
      alias: {}
    },

    output: {
      path: path.resolve(dist),
      filename: 'app.bundle.js'
    },

    module : {
      noParse: [],
      loaders : [
        // JS
        { test: /\.js?$/, include: /app/, loader: 'babel',
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
        // CSS
        { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
        // SCSS
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
        // RESOURCES
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url' }
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        $:               "jquery",
        jQuery:          "jquery",
        "window.jQuery": "jquery",
        "root.jQuery":   "jquery"
      }),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      new ExtractTextPlugin("[name].bundle.css")
    ]
  };

  Object.keys(libs).forEach(function (name) {
    var libPath = path.join(base, src, 'vendor', libs[name]);
    config.entry.vendor.push(libPath);
    config.resolve.alias[name + '$'] = libPath;

    if (noParseLibs.indexOf(name) !== -1) {
      config.module.noParse.push(new RegExp(libPath));
    }
  });

  return config;
};

var libs = {
  'rsvp':        'rsvp/rsvp.js',
  'react':       'react/react.js',
  'markdown-it': 'markdown-it/dist/markdown-it.js',
  'moment':      'moment/moment.js',
  'jquery':      'jquery/dist/jquery.js',
  'lodash':      'lodash/lodash.js',

  'velocity':    'velocity/velocity.js',
  'velocity.ui': 'velocity/velocity.ui.js',
  'bootstrap':   'bootstrap-sass/assets/javascripts/bootstrap.js',
};
var noParseLibs = ['markdown-it', 'moment', 'react', 'rsvp', 'jquery', 'lodash'];

var devConfig = newConfig('./web', libs, noParseLibs);
devConfig.debug = true;
devConfig.devtool = 'eval';

var prodConfig = newConfig('./target', libs, noParseLibs);

prodConfig.debug = false;
prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false
  }
}));

module.exports = {
  dev: devConfig,
  prod: prodConfig
};
