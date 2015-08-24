/*eslint no-var:0*/
'use strict';

var del = require('del');

var gulp = require('gulp');
var gutil = require('gulp-util');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

var dist = './web/';
var port = 8080;

gulp.task('default', ['webpack-dev-server']);

gulp.task('clean', function tasksClean (cb) {
  del([dist + '*.bundle.*'], cb);
});

gulp.task('webpack-dev-server', ['clean'], function (cb) {
  new WebpackDevServer(webpack(webpackConfig.dev), {
    contentBase: dist,
    publicPath: '/',
    stats: { colors: true },
    historyApiFallback: true, // for html5 history
    watchOptions: {
      aggregateTimeout: 4000
    }
  }).listen(port, "localhost", function (err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
    cb();
  });
});

gulp.task('scripts:prod', function taskProdScripts (callback) {
  webpack(webpackConfig.prod, function(err, stats) {
    if (err) {
      throw new gutil.PluginError("webpack", err);
    }
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});
