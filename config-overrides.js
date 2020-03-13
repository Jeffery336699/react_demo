const {
  override,
  addLessLoader,
  fixBabelImports,
} = require("customize-cra");

module.exports = {
  webpack: override(
      addLessLoader({
        javascriptEnabled: true
      }),
      fixBabelImports("babel-plugin-import", {
        libraryName: "antd-mobile",
        style: true
      }),
  )
};




