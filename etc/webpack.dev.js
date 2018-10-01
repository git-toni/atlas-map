const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = {
  entry: [path.resolve(__dirname, "../src/index.js")],
  output: {
    path: path.resolve(__dirname, "../.tmp/static"),
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: common.resolve,
  module: {
    rules: [common.loaderJs],
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      title: "Atlas page",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/static"),
        to: path.resolve(__dirname, "../.tmp/static"),
      },
    ]),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
