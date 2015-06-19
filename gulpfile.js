'use strict';

var path = require('path');
var Proc = require('child_process');

var del = require('del');
var webpack = require('webpack');

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpWebpack = require('gulp-webpack');
var size = require('gulp-size');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');


var base = __dirname;
var src = './webui/';
var dist = './webui/';

var gosrc = './src/';
var goapp = './bin/vita';

var port = 8080;

var moduleAliases = {
    'underscore':          'lodash/lodash.js',
    'backbone':            'backbone/backbone.js',
    'backbone-validation': 'backbone-validation/dist/backbone-validation-amd.js',
    'marionette':          'marionette/lib/backbone.marionette.js',
    'moment':              'moment/moment.js'
};

function objectValues(object) {
    return Object.keys(object).map(function (key) {
        return object[key];
    });
}

var webpackConfig = {
    debug : true,
    devtool : 'source-map',

    entry: {
        app: src + 'app/init.js',
        vendor: objectValues(moduleAliases).map(function (path) {
            return src + 'vendor/' + path;
        })
    },

    output: {
        path: base,
        filename: 'bundle.js'
    },

    externals: {
        'jquery': 'jQuery',
        'markdown-it': 'markdownit'
    },

    resolve: {
        root: path.join(base, src, 'app'),
        modulesDirectories: ['vendor', 'node_modules'],
        alias: moduleAliases
    },

    module : {
        loaders : [
            { test: /\.js?$/, include: /app/, loader: 'babel-loader',
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
            { test: /\.hbs$/, loader: 'handlebars-loader',
              query: {
                  helperDirs: [path.join(base, src, 'app/helpers'),
                               path.join(base, src, 'app/partials')]
              }}
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.optimize.DedupePlugin()
    ]
};

function printError(error) {
    gutil.log(gutil.colors.red('found unhandled error:\n'), error.toString());
}

function wrapPipe(taskFn) {
    return function(done) {
        var onSuccess = function() {
            done();
        };
        var onError = function(err) {
            printError(err);
            done(err);
        };
        var outStream = taskFn(onSuccess, onError);
        if(outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    };
}

gulp.task('scripts', wrapPipe(function taskScripts () {
    return gulp.src(webpackConfig.entry.app)
        .pipe(gulpWebpack(webpackConfig, null, function (err, stats) {
            if (err) {
                throw err;
            }

            var errors = stats.compilation.errors;
            if (errors.length) {
                throw errors;
            }
        }))
        .pipe(gulp.dest(dist))
        .pipe(size({ title : 'js' }))
        .pipe(connect.reload());
}));

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
    if (skelet) {
        skelet.kill("SIGINT");
        gutil.log('killed skelet');
        skelet = null;
    }
};

var startSkelet = function () {
    skelet = Proc.spawn(goapp, ['-p', 8081]);
    skelet.stdout.on('data', function(chunk) {
        gutil.log(gutil.colors.green(chunk.toString()));
    });
    skelet.stderr.on('data', function(chunk) {
        gutil.log(gutil.colors.red(chunk.toString()));
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

process.on("uncaughtException", function (err) {
    gutil.log('uncaught exception', err);
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
    del([goapp,
         dist + 'vendor.bundle.js',
         dist + 'vendor.bundle.js.map',
         dist + 'bundle.js',
         dist + 'bundle.js.map',
         dist + 'bundle.css',
         dist + 'bundle.css.map'], cb);
});

gulp.task('build', ['clean'], function taskBuild (){
    gulp.start(['scripts', 'styles']);
});

gulp.task('default', ['build', 'serve', 'skelet', 'watch']);
