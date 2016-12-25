/**
 * Adapted from angular2-webpack-starter
 */
const helpers = require('./helpers');
const path = require('path');
/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = {

  /**
   * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
   *
   * Do not change, leave as is or it wont work.
   * See: https://github.com/webpack/karma-webpack#source-maps
   */
  devtool: 'inline-source-map',


  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ path.resolve(__dirname, ''), 'node_modules']
  },

  module: {

    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
          helpers.root('node_modules/@ngrx')
        ]
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          sourceMap: false,
          inlineSourceMap: true,
          compilerOptions: {
            // Remove TypeScript helpers to be injected
            // below by DefinePlugin
            removeComments: true
          }
        },
        exclude: [/\.e2e\.ts$/]
      }
    ]

    // postLoaders: [
    //     {
    //         test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
    //         include: helpers.root('src'),
    //         exclude: [
    //             /\.(e2e|spec)\.ts$/,
    //             /node_modules/
    //         ]
    //     }
    // ]
  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
     * See: https://github.com/angular/angular/issues/11580
     */
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'), // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),

      /**
     * Plugin LoaderOptionsPlugin (experimental)
     *
     * See: https://gist.github.com/sokra/27b24881210b56bbaff7
     */
    new LoaderOptionsPlugin({
      debug: true,
      options: {

      }
    }),
  ],

  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
