const path = require("path");

module.exports = {
  publicPath: process.env.VUE_APP_STATIC_URL,
  outputDir: path.resolve(__dirname, "../static", "billing"),
  indexPath: path.resolve(__dirname, "../templates/", "billing", "index.html"),
  devServer: {
    proxy: "http://localhost:8000"
  }
};
