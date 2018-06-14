const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  // webpack4 必要参数
  mode: "production", // "production" | "development" | "none"
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    // 
    library: 'smart-modal',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },
  devServer: {

  },
  performance: {

  },
  // devtool: '#eval-source-map',
  plugins: [
    // use DefinePlugin 定义环境变量
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    // new VueLoaderPlugin(),
    new UglifyJSPlugin({
      // mangle: false,
      // beautify: true
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    })
  ]

}