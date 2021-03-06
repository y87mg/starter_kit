const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./config');
const pug = require('./modules/pug');
const html = require('./modules/html');
const css_dev = require('./modules/css_dev');
const providePlugin = require('./modules/provide_plugin');
const images = require('./modules/images');
const fonts = require('./modules/fonts');
const babel = require('./modules/babel');
const copy = require('./modules/copy');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      contentBase: baseWebpackConfig.externals.paths.source,
      open: true,
      compress: true,
      port: 2717,
    },
  },
  baseWebpackConfig,
  babel,
  copy,
  html,
  css_dev,
  images,
  pug,
  providePlugin,
  fonts,
);
