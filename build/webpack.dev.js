var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './dev/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dev'),
    publicPath: '/dev/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {   test: /\.css$/,   use: ExtractTextPlugin.extract({     fallback:
      // "style-loader",     use: ['css-loader', 'postcss-loader', 'sass-loader']   })
      // }
    ]
  },
  devServer: {
    noInfo: true
  },
  performance: {
    hints: false
  },
  // plugins: [new ExtractTextPlugin("styles.css")],
  devtool: '#eval-source-map'
}
