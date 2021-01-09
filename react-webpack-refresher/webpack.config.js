const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"], // need this to resolve .jsx file 
  },
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
          loader: "html-loader",
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  }
};
