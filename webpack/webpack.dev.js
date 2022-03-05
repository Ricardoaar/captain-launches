const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",

  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
