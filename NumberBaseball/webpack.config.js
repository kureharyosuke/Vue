const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "./main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plgins: [[new VueLoaderPlugin()]],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
};
