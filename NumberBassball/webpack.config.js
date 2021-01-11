const path = require("path"); //node module : path
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development", // or 'production'
  entry: {
    app: path.join(__dirname, "./main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 정규표현식
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "./dist"),
  },
};

/** rules: webapck error
 * ERROR in ./NumberBaseball.vue 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> <template>
|   <div>
|     <h1>{{ result }}</h1>
 @ ./main.js 2:0-50 
 */
