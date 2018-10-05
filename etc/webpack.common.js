const webpack = require("webpack");
const path = require("path");

const babelOptions = {
  presets: ["@babel/react", "@babel/flow", ["@babel/env", { targets: { esmodules: true } }]],
  plugins: ["idx", ["styled-components"], "ramda", "react-hot-loader/babel"],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/client/index.js"),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      src: path.resolve(__dirname, "../src"),
    },
  },
  loaderJs: {
    test: /\.js?$/,
    use: [
      {
        loader: "babel-loader",
        options: babelOptions,
      },
    ],
    exclude: /node_modules/,
  }
};
