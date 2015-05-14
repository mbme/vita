'use strict';

var path = require('path');
var Proc = require('child_process');

var del = require('del');
var Webpack = require('webpack');

var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var size = require('gulp-size');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');


var SIGINT = 'SIGINT';

var base = __dirname;
var src = './webui/';
var dist = './webui/';

var gosrc = './go';
var goapp = './vita';

var port = 8080;

var moduleAliases = {
    'underscore': 'lodash/lodash.js',
    'backbone':   'backbone/backbone.js',
    'marionette': 'marionette/lib/backbone.marionette.js',
    'moment':     'moment/moment.js'
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
        app: src + 'app/main.js',
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
        new Webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new Webpack.optimize.DedupePlugin()
    ]
};

function suppressError (error) {
    gutil.log(
        gutil.colors.cyan('Plumber') + gutil.colors.red(' found unhandled error:\n'),
        error.toString()
    );
    this.emit('end');
}

gulp.task('scripts', function taskScripts () {
    return gulp.src(webpackConfig.entry.app)
        .pipe(plumber({errorHandler: suppressError}))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(dist))
        .pipe(size({ title : 'js' }))
        .pipe(connect.reload());
});

gulp.task('styles', function taskStyles () {
    return gulp.src(src + 'app/bundle.scss')
        .pipe(plumber({errorHandler: suppressError}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist))
        .pipe(size({title: 'css'}))
        .pipe(filter('**/*.css'))
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
    gulp.watch(
        [src + 'app/**/*.js', src + 'app/**/*.hbs'],{
            readDelay: 5*1000
        } ,['scripts']);
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
