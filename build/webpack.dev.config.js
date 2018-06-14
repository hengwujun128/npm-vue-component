const merge = require("webpack-merge");
const base = require("./webpack.base.config");
const path = require("path");
const webpack = require("webpack");
module.exports = merge(base, {
  output: {
    filename: 'index.js'
  }
})