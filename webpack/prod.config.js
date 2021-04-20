const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./config');
const watch = require('./modules/watch');
const imagesMin = require('./modules/images_min');
const pug = require('./modules/pug');
const html = require('./modules/html');
const css_prod = require('./modules/css_prod');
const providePlugin = require('./modules/provide_plugin');
const images = require('./modules/images');
const fonts = require('./modules/fonts');
const babel = require('./modules/babel');
const copy = require('./modules/copy');

module.exports = merge(
  {
    mode: 'production',
    optimization: {
      runtimeChunk: {
        name: `webpack`,
      },
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        name: `common`,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // получает имя, то есть node_modules/packageName/not/this/part.js
              // или node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              // имена npm-пакетов можно, не опасаясь проблем, использовать
              // в URL, но некоторые серверы не любят символы наподобие @
              return `${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
    ],
  },
  baseWebpackConfig,
  watch,
  babel,
  copy,
  html,
  css_prod,
  images,
  imagesMin,
  pug,
  providePlugin,
  fonts,
);
