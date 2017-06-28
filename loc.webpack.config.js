const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "src/index"
  },
  resolve: {
    modules: [
      path.join(__dirname),
      'node_modules'
    ],
    alias: {
      'form-maker': path.join(__dirname, '../form-maker/src')
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        loader: "ts-loader?happyPackMode=true",
        test: /\.tsx?$/,
      }, {
        loader: "source-map-loader",
        test: /\.js$/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  devtool: 'inline-source-map'
};

