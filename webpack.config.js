/* eslint strict: 0, no-var: 0, object-shorthand: 0 */
'use strict';

var path = require('path');
var glob = require('glob');
var webpack = require('webpack');

var base = __dirname;
var src = path.join(base, 'web');
var appRoot = path.join(src, 'app');
var target = path.join(base, 'target');

var config = {
  entry: {
    app: ['init.js', 'styles']
  },

  resolve: {
    root: [appRoot],
    alias: {
      'styles': path.join(src, 'styles/styles.js')
    },

    // we need this to allow to import jsx files like js files (without extension)
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: null,
    filename: 'app.bundle.js'
  },

  module: {
    noParse: ['markdown-it'],
    loaders: [
      // JS and JSX
      { test: /\.jsx?$/, include: /app/, loaders: [
        'react-hot-loader', 'babel-loader?cacheDirectory=true'
      ] },
      // JSON
      { test: /\.json$/, loader: 'json-loader' },
      // CSS
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // FONTS
      { test: /\.woff|\.woff2|\.svg|\.eot|\.ttf|\.png/, loader: 'url-loader?limit=10000' },
    ]
  },

  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: this,
        resolve: function (id, cssBase) {
          return glob.sync(path.join(cssBase, id));
        }
      }),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-simple-vars')(),
      require('postcss-vertical-rhythm')(),
      require('postcss-color-function'),
      require('postcss-calc'),
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ];
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    // do not load moment locales
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

if (process.env.NODE_ENV === 'production') {

  config.output.path = target;

  config.debug = false;
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
    VITA_PORT: undefined,
    DEV:       false
  }));

} if (process.env.NODE_ENV === 'test') {

  config.entry.app = glob.sync(path.join(appRoot, '**/*.spec.js?(x)')).map(function (testPath) {
    return path.relative(appRoot, testPath);
  });
  config.output = {
    path:     target,
    filename: 'test.bundle.js'
  };

  config.target = 'node';
  config.debug = true;

  config.plugins.push(new webpack.DefinePlugin({
    VITA_PORT: 8081,
    DEV:       false
  }));

} else { // DEVELOPMENT
  config.output.path = path.resolve('./web');

  config.debug = true;
  config.devtool = 'eval';

  config.plugins.push(new webpack.DefinePlugin({
    VITA_PORT: 8081,
    DEV:       true
  }));
}

module.exports = config;
