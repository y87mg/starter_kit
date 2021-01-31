module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|webp|gif|ico)$/,
        exclude: /fonts/,
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 75,
          },
          pngquant: {
            quality: [0.65, 1],
            speed: 4,
          },
          svgo: {
            prefixIds: true,
            removeElementsByAttr: true,
          },
          webp: {
            quality: 90,
          },
        },
      },
    ],
  },
};
