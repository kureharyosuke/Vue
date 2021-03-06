const path = require("path"); //node module : path
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development", // production : or 'production'
  devtool: "eval", // production: or "hidden-source-map"
  resolve: {
    extensions: [".js", ".vue"], // import [ .vue] 사용안해도 됨.
  },
  entry: {
    app: path.join(__dirname, "./main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 정규표현식
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist", // webpack-dev-server install  = add   publicPath: "/dist",
  },
};

// entry > module > plugins > output

/** Error : 1
 * version check =>  "vue": "^2.6.12"  = "vue-template-compiler": "^2.6.12",
 *  
 * rules: webapck error
 * ERROR in ./NumberBaseball.vue 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> <template>
|   <div>
|     <h1>{{ result }}</h1>
 @ ./main.js 2:0-50 
 */
