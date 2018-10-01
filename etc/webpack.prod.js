const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = {
  entry: [path.resolve(__dirname, "../src/index.js")],
  output: {
    path: path.resolve(__dirname, "../dist/static"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: common.resolve,
  module: {
    rules: [common.loaderJs],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Atlas page",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/static"),
        to: path.resolve(__dirname, "../dist/static"),
      },
    ]),
  ],
};
