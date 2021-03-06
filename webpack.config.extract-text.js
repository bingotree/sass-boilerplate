const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/main.scss',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader', // updates imports, url calls, allows for minification, wraps everything in common js module
            'postcss-loader', // run all post css hooks
            'sass-loader' // compiles sass to css
          ],
          fallback: 'style-loader' // phsyically injects module into the dom
        })
      }
    ],
  },
  plugins: [new ExtractTextPlugin('[name].css')],
  output: {
    path: path.resolve(__dirname, './dist'), // abs path
    filename: 'main.css.js'
  },
};
