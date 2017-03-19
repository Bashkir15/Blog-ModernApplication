const webpackConfig = require('./webpack.config.babel');

module.exports = function(config) {
  config.set({

    files: ['tests.webpack.js'],
    preprocessors: {
        'tests.webpack.js': ['webpack', 'sourcemap']
    }
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    webpack: webpackConfig,
    basePath: '',
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    concurrency: Infinity,
    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-webpack',
        'karma-phantomjs-launcher',
        'karma-spec-reporter',
        'karma-sourcemap-loader'
    ]
  });
}
