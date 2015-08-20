'use strict';

var Proc = require('child_process');
var del = require('del');

var gulp = require('gulp');
var gutil = require('gulp-util');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

var dist = './webui/';
var gosrc = './src/';
var port = 8080;

gulp.task('default', ['watch-skelet', 'webpack-dev-server']);

gulp.task('clean', function tasksClean (cb) {
    del([dist + '*.bundle.*'], cb);
});

gulp.task('webpack-dev-server', ['clean'], function (cb) {
    new WebpackDevServer(webpack(webpackConfig.dev), {
        contentBase: dist,
        publicPath: '/',
        stats: { colors: true },
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
    process.exit();
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
    });
});

gulp.task('watch-skelet', ['skelet'], function taskWatch () {
    gulp.watch(gosrc + '**/*.go', {
        readDelay: 5*1000
    }, ['skelet']);
});
