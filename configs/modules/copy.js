const CopyPlugin = require('copy-webpack-plugin');
const baseConfigWebpack = require('../webpack.config');

const source = baseConfigWebpack.externals.paths.source; //Папка source
const build = baseConfigWebpack.externals.paths.build; //Папка build

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `${source}/layout/manifest.json`,
          to: `${build}`,
          toType: 'dir',
        },
        {
          from: `${source}/layout/favicon/img/google-touch-sunny.png`,
          to: `${build}/images`,
          toType: 'dir',
        },
      ],
    }),
  ],
};
