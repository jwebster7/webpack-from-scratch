// export a configuration object
// rules are a way to tell webpack what to do when it runs into certain file types.
// webpack = coordinator, loader = helper that converts code into appropriate versions
// babel-loader is the loader that transpiles jsx and newer js files into browser acceptible files.
// always need css loader
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html"
    })
  ]
};
