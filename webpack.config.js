'use strict';

var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var production = process.env.NODE_ENV === 'production';



var plugins = [
  new HtmlWebpackPlugin({
    template: 'src/layout.tpl.html',
    inject: 'body',
    filename: 'index.html'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name:      'main', 
    children:  true,
    minChunks: 2,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new CopyWebpackPlugin([
    { from: 'src/static' }
  ]),
]


if (production) {
  plugins = plugins.concat([
    new CleanPlugin('dist'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
        warnings: false, 
      },
    }),
    new webpack.DefinePlugin({
      __SERVER__:      !production,
      __DEVELOPMENT__: !production,
      __DEVTOOLS__:    !production,
      'process.env':   {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]);
}

module.exports = {
  debug:   !production,
  devtool: production ? false : 'eval',
  entry: ['babel-polyfill', './src'],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  devServer: {
    outputPath: path.join(__dirname, 'dist')
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: __dirname + '/src'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test:   /\.(png|gif|jpe?g|svg)$/i,
        loader: 'file',
        include: __dirname + '/src/img'
      },
      {
        test:   /\.scss/,
        loader: 'style!css!postcss!sass',
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  } 
}
