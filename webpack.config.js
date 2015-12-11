/*eslint no-var:0*/
'use strict';

var path = require('path');
var webpack = require('webpack');

var base = __dirname;
var src = 'web';

var config = {
  entry: {
    app: ['init.js', 'styles']
  },

  resolve: {
    root: [path.join(base, src, 'app')],
    alias: {
      'styles': path.join(base, src, 'styles/styles.js'),
      'velocity': 'velocity-animate'
    }
  },

  output: {
    path: null,
    filename: 'app.bundle.js'
  },

  module : {
    noParse: ['markdown-it'],
    loaders : [
      // JS
      { test: /\.js?$/, include: /app/, loaders: [
        'react-hot-loader', 'babel-loader?cacheDirectory=true'
      ]},
      // JSON
      { test: /\.json$/, loader: 'json-loader'},
      // CSS
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      // FONTS
      { test: /\.woff|\.woff2|\.svg|\.eot|\.ttf|\.png/, loader: 'url-loader?limit=10000' },
    ]
  },

  postcss: function () {
    return [
      require('postcss-import')({
        glob: true,
        addDependencyTo: webpack
      }),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-simple-vars')(),
      require('postcss-vertical-rhythm')(),
      require('postcss-color-function'),
      require("postcss-calc"),
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ];
  },

  plugins: [
    new webpack.ProvidePlugin({
      $:               "jquery",
      jQuery:          "jquery",
      "window.jQuery": "jquery",
      "root.jQuery":   "jquery",
      React:           "react",

      // Fetch API polyfill
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    // do not load moment locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = path.resolve('./target');

  config.debug = false;
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
      VITA_PORT: undefined,
      DEV: false
  }));
} else {
  config.output.path = path.resolve('./web');

  config.debug = true;
  config.devtool = 'eval';

  config.plugins.push(new webpack.DefinePlugin({
      VITA_PORT: 8081,
      DEV: true
  }));
}

module.exports = config;
