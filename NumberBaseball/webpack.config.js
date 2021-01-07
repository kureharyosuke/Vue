const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development", // production : 'production'
  devtool: "eval", // production : 'hidden-source-map'
  resolve: {
    extensions: [".js", ".vue"],
  },
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
  plgins: [new webpack.LoaderOptionsPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
};
