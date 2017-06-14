const path = require('path'),
    webpack = require('webpack');

const webpackConfig = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
  }
};

module.exports = webpackConfig
