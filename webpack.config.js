var path = require('path');
var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./src/dist"),
    filename: "index.min.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}
