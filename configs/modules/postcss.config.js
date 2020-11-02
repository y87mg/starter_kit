// yarn add postcss-loader autoprefixer css-mqpacker cssnano -D

module.exports = {
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
};
