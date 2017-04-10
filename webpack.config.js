var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  output: {
    filename: 'barcamp.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};