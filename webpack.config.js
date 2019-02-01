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
                    targets: {
                        // Target a recent browser to create a smaller bundle to analyse
                        chrome: 54
                    },
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
  entry: "./app/entry.js",
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js"
  }
};
