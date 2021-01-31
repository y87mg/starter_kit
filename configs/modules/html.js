const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfigWebpack = require('../webpack.config');

// common chunks - 'webpack', 'common'

//externals
const pages = baseConfigWebpack.externals.pages; //Папка с моими страницами
const pagesArray = baseConfigWebpack.externals.pagesArray; //Массив страниц

const generateHtml = function (theArray) {
  let myArray = [];

  theArray.forEach(function (element) {
    myArray.push(
      new HtmlWebpackPlugin({
        filename: `${element}.html`,
        chunks: ['webpack', 'common', element],
        template: `${pages}/${element}/${element}.pug`,
        minify: {
          collapseWhitespace: true,
          removeComments: false,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    );
  });

  return myArray;
};

let htmlPages = generateHtml(pagesArray);

module.exports = {
  plugins: htmlPages,
};
