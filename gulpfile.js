'use strict';

var Proc = require('child_process');

var del = require('del');

var gulp = require('gulp');
var gutil = require('gulp-util');
var size = require('gulp-size');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var src = './webui/';
var dist = './webui/';

var gosrc = './src/';

var port = 8080;

function wrapPipe(taskFn) {
    return function(done) {
        var onSuccess = function() {
            done();
        };
        var onError = function(err) {
            gutil.log(gutil.colors.red('found unhandled error:\n'), err.toString());
            done(err);
        };
        var outStream = taskFn(onSuccess, onError);
        if(outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    };
}

gulp.task('scripts', function taskScripts (callback) {
    webpack(webpackConfig.dev, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        connect.reload();
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

gulp.task('styles', wrapPipe(function taskStyles () {
    return gulp.src(src + 'app/bundle.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist))
        .pipe(size({title: 'css'}))
        .pipe(filter('**/*.css'))
        .pipe(connect.reload());
}));

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
        connect.reload();
    });
});

gulp.task('watch', function taskWatch () {
    gulp.watch(
        [src + 'app/**/*.js', src + 'app/**/*.hbs'],{
            readDelay: 5*1000
        }, ['scripts']);
    gulp.watch(src + 'app/**/*.scss', {
        readDelay: 5*1000
    }, ['styles']);
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
    del([dist + 'vendor.bundle.js',
         dist + 'vendor.bundle.js.map',
         dist + 'bundle.js',
         dist + 'bundle.js.map',
         dist + 'bundle.css',
         dist + 'bundle.css.map'], cb);
});

gulp.task('build', ['clean'], function taskBuild (){
    return gulp.start(['scripts', 'styles']);
});

gulp.task('default', ['build', 'serve', 'skelet', 'watch']);
