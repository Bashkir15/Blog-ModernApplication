import webpackConfig from 'webpack.config.babel'
import path from 'path'
import yargs from 'yargs'

const argv = yargs.argv;

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
        'tests.webpack.js': [
            'webpack',
            'sourcemap'
        ]
    },

    webpack: webpackConfig,

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
