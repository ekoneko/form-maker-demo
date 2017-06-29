const path = require('path');
const config = require('./webpack.config');

config.resolve.alias = {
  'form-maker': path.join(__dirname, '../form-maker/src')
};
config.devtool = 'inline-source-map';
config.module.rules[0] = {
  loader: 'ts-loader?happyPackMode=true',
  test: /\.tsx?$/
};

module.exports = config;
