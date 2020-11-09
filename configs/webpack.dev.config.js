const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const pug = require('./modules/pug');
const html = require('./modules/html');
const css = require('./modules/css');
const providePlugin = require('./modules/provide_plugin');
const images = require('./modules/images');
const fonts = require('./modules/fonts');
const babel = require('./modules/babel');
const copy = require('./modules/copy');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      open: true,
      noInfo: true,
      port: 2717,
    },
  },
  baseWebpackConfig,
  babel,
  copy,
  html,
  css,
  images,
  pug,
  providePlugin,
  fonts,
);
