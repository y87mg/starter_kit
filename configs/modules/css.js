const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoader = 'css-loader';
const postCssLoader = 'postcss-loader';
const postCssLoaderOptions = {
  postcssOptions: {
    plugins: [
      require('autoprefixer')({ grid: 'autoplace' }),
      require('css-mqpacker'),
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
    ],
  },
};

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: cssLoader,
          },
          {
            loader: postCssLoader,
            options: postCssLoaderOptions,
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: cssLoader,
          },
          {
            loader: postCssLoader,
            options: postCssLoaderOptions,
          },
        ],
      },
    ],
  },
};
