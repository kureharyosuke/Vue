const path = require("path"); //node module : path

module.exports = {
  entry: {
    app: path.join(__dirname, "./main.js"),
  },
  module: {
    rules: [{}],
  },
  plugins: [],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "./dist"),
  },
};
