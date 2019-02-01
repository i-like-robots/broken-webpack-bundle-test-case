const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  mode: "development",
  devtool: false,
  entry: "./src/app.js",
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  }
};
