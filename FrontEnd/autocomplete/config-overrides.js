const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    https: require.resolve('https-browserify'),
  };
  return config;
};
