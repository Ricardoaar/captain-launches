const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (environment) => {
  const { MODE } = environment;
  const envConfig = require(`./webpack.${MODE}.js`);
  return merge(commonConfig, envConfig);
};
