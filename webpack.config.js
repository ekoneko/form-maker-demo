const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: 'index'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  output: {
    path: __dirname + '/lib',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader!ts-loader',
        test: /\.tsx?$/
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
