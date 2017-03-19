
const webpackConfig = require('./webpack.config.babel');
const path = require('path');
const argv = require('yargs').argv;

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: [
        'mocha',
        'chai'
    ],

    files: [
        'tests.webpack.babel.js'
    ],

    preprocessors: {
        'tests.webpack.babel.js': [
            'webpack',
            'sourcemap'
        ]
    },

    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'
        },

        filename: function(file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
        },

        sourceFileName: function(file) {
            return file.originalPath;
        }
    },

    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    },

    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-webpack',
        'karma-phantomjs-launcher',
        'karma-spec-reporter',
        'karma-sourcemap-loader'
    ],

    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: !argv.watch
  });
}
