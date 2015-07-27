'use strict';

var Proc = require('child_process');

var del = require('del');

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var src = './webui/';
var dist = './webui/';

var gosrc = './src/';

var port = 8080;

gulp.task('scripts', function taskScripts (callback) {
    webpack(webpackConfig.dev, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        gulp.src(src + 'bundle.js').pipe(connect.reload());
        callback();
    });
});

gulp.task('prodScripts', function taskProdScripts (callback) {
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

var skelet;
var killSkelet = function () {
    if (!skelet) {
        return;
    }

    skelet.kill("SIGINT");
    gutil.log('killed skelet');
    skelet = null;
};

var startSkelet = function () {
    skelet = Proc.spawn("make", ["run"]);

    skelet.stdout.on('data', function(chunk) {
        chunk.toString().split('\n').forEach(function (line) {
            if (!line.trim()) {
                return;
            }
            console.log(gutil.colors.green(line));
        });
    });

    skelet.stderr.on('data', function(chunk) {
        chunk.toString().split('\n').forEach(function (line) {
            if (!line.trim()) {
                return;
            }
            console.log(gutil.colors.red(line));
        });
    });

    gutil.log('started skelet: PID', skelet.pid);
};

// handle Ctrl-C
process.on("SIGINT", function () {
    gutil.log('got a SIGINT, closing');
    killSkelet();
});

process.on("exit", function () {
    gutil.log('exit, closing');
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

        gulp.src(src + 'bundle.js').pipe(connect.reload());
    });
});

gulp.task('watch', function taskWatch () {
    gulp.watch(
        [src + 'app/**/*.js',
         src + 'app/**/*.hbs',
         src + 'app/**/*.scss'],{
             readDelay: 5*1000
         }, ['scripts']);
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
    del([dist + '*.bundle.*'], cb);
});

gulp.task('build', ['clean'], function taskBuild (){
    return gulp.start(['scripts']);
});

gulp.task('default', ['build', 'serve', 'skelet', 'watch']);
