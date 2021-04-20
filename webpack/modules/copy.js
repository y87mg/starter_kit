const CopyPlugin = require('copy-webpack-plugin');
const baseConfigWebpack = require('../config');

const source = baseConfigWebpack.externals.paths.source; //Папка src
const build = baseConfigWebpack.externals.paths.build; //Папка public

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `${source}/assets/manifest.json`,
          to: `${build}`,
          toType: 'dir',
        },
      ],
    }),
  ],
};
