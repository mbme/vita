/*eslint no-var:0*/
'use strict';

var path = require('path');
var webpack = require('webpack');

var base = __dirname;
var src = 'web';

var newConfig = function (dist, noParseLibs) {
  noParseLibs = noParseLibs || [];

  var config = {
    entry: {
      app: ['init.js', 'main.css']
    },

    resolve: {
      root: [path.join(base, src, 'app')],
      alias: {
        'main.css': path.join(base, src, 'styles/main.css')
      }
    },

    output: {
      path: path.resolve(dist),
      filename: 'app.bundle.js'
    },

    module : {
      noParse: [],
      loaders : [
        // JS
        { test: /\.js?$/, include: /app/, loaders: ['babel?cacheDirectory=true']},
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
        require('autoprefixer')({ browsers: ['last 2 versions'] })
      ];
    },

    plugins: [
      new webpack.ProvidePlugin({
        $:               "jquery",
        jQuery:          "jquery",
        "window.jQuery": "jquery",
        "root.jQuery":   "jquery",
        React:           "react"
      })
    ]
  };

  config.module.noParse.push.apply(config.module.noParse, noParseLibs);

  return config;
};

var noParseLibs = ['markdown-it', 'moment', 'react', 'rsvp', 'jquery', 'lodash', 'page'];

var devConfig = newConfig('./web', noParseLibs);
devConfig.debug = true;
devConfig.devtool = 'eval';
devConfig.entry.app.push('webpack/hot/dev-server');
devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
devConfig.module.loaders[0].loaders.unshift('react-hot');

var prodConfig = newConfig('./target', noParseLibs);

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
