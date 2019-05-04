/* eslint-disable */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const babelConfig = require('./babel.config.json');
const config = require('../src/config.js');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, '..', 'src/app.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build/static/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: babelConfig.presets,
          plugins: babelConfig.plugins
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              }
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
        use: [
          'url-loader'
        ]
      }, {
        test: /\.(less|js)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: '@@CDN@@',
              replace: config.cdn,
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..' ,'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      NODE_PORT: '6060',
      NODE_SERVER: false
    })
  ],
  watch: true,
  devtool: 'source-map',
  target: 'web'
};
