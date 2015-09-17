/*eslint no-var:0*/
'use strict';

var path = require('path');
var webpack = require('webpack');

var base = __dirname;
var src = 'web';

var newConfig = function (dist, libs, noParseLibs) {
  noParseLibs = noParseLibs || [];

  var config = {
    entry: {
      app: ['init.js', 'main.css'],
      vendor: []
    },

    resolve: {
      root: [path.join(base, src, 'app'), path.join(base, src, 'styles')],
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
            "cacheDirectory": true,
            "optional": [
              "runtime"
            ]
          }},
        // CSS
        { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
        // RESOURCES
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url' },
      ]
    },

    postcss: function () {
      return [
        require('postcss-import')({
          glob: true,
          onImport: function (files) {
            files.forEach(this.addDependency);
          }.bind(this)
        }),
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-simple-vars')({
          variables: function () {
            return require(path.join(base, src, 'styles/variables'));
          }
        }),
        require('postcss-vertical-rhythm')(),
        require('postcss-clearfix'),
        require("postcss-calc"),
        require('autoprefixer-core')({ browsers: ['last 2 versions'] })
      ];
    },

    plugins: [
      new webpack.ProvidePlugin({
        $:               "jquery",
        jQuery:          "jquery",
        "window.jQuery": "jquery",
        "root.jQuery":   "jquery",
        React:           "react"
      }),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
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
  'page':        'page.js/page.js',

  'velocity':    'velocity/velocity.js',
  'velocity.ui': 'velocity/velocity.ui.js',
};
var noParseLibs = ['markdown-it', 'moment', 'react', 'rsvp', 'jquery', 'lodash', 'page'];

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
