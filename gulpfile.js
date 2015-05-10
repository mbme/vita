'use strict';

var SIGINT = 'SIGINT';

var src = './webui/';
var dist = './webui/';

var gosrc = './go';
var goapp = './vita';

var port = 8080;

var webpackConfig = {
  debug : true,
  devtool : 'source-map',
  entry: src + 'app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.hbs$/, loader: 'handlebars-loader'}
    ]
  }};

var Proc = require('child_process');
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var webpack = require('gulp-webpack');
var size = require('gulp-size');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

function suppressError (error) {
  gutil.log(
    gutil.colors.cyan('Plumber') + gutil.colors.red(' found unhandled error:\n'),
    error.toString()
  );
  this.emit('end');
}

gulp.task('scripts', function taskScripts () {
  return gulp.src(webpackConfig.entry)
    .pipe(plumber(suppressError))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dist))
    .pipe(size({ title : 'js' }))
    .pipe(connect.reload());
});

gulp.task('styles', function taskStyles () {
  return gulp.src(src + 'app/bundle.scss')
    .pipe(plumber(suppressError))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist))
    .pipe(size({title: 'css'}))
    .pipe(connect.reload());
});

var skelet;
var killSkelet = function () {
  if (skelet) {
    skelet.kill(SIGINT);
    gutil.log('killed skelet');
    skelet = null;
  }
};

var startSkelet = function () {
  skelet = Proc.spawn(goapp);
  skelet.stdout.on('data', function(chunk) {
    gutil.log(gutil.colors.green(chunk.toString()));
  });
  skelet.stderr.on('data', function(chunk) {
    gutil.log(gutil.colors.red(chunk.toString()));
  });

  gutil.log('started skelet: PID', skelet.pid);
};

// handle Ctrl-C
process.on(SIGINT, function () {
  gutil.log('got a SIGINT, closing');
  killSkelet();
});

gulp.task('skelet', function taskSkelet() {
  Proc.exec('make build', function (error, stdout, stderr) {
    if (error) {
      gutil.log(gutil.colors.red('build failed:\n') + stderr);
      return;
    }

    killSkelet();
    startSkelet();
  });
});

gulp.task('watch', function taskWatch () {
  gulp.watch(src + 'app/**/*.js', ['scripts']);
  gulp.watch(src + 'app/**/*.scss', ['styles']);
  gulp.watch(gosrc + '**/*.go', {
    readDelay: 5*1000
  }, ['skelet']);
});

gulp.task('serve', function taskServ() {
  connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35728
    }
  });
});

gulp.task('clean', function tasksClean (cb) {
  del([goapp,
       dist + 'bundle.js',
       dist + 'bundle.js.map',
       dist + 'bundle.css',
       dist + 'bundle.css.map'], cb);
});

gulp.task('build', ['clean'], function taskBuild (){
  gulp.start(['scripts', 'styles']);
});

gulp.task('default', ['build', 'serve', 'watch']);
