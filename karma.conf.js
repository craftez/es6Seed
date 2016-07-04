var webpack = require('webpack');

module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    reporters: [
      'progress',
      'coverage'
    ],

    browsers: [
      'PhantomJS'
    ],

    logLevel: config.LOG_INFO,
    singleRun: true,
    colors: true,
    port: 9876,

    basePath: '',

    files: ['webpack.karma.context.js'],

    preprocessors: { 'webpack.karma.context.js': ['webpack'] },

    exclude: [],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: {
            devtool: 'eval',
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
                    {test: /\.scss$/, loader: 'style!css!postcss!sass'},
                    {test: /\.html$/, loader: 'html'},
                    {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'file'}
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
  });
};
