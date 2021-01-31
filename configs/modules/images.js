module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|webp|gif|ico)$/,
        exclude: /fonts|photos/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|svg|webp|gif|ico)$/,
        include: /photos/,
        loader: 'file-loader',
        options: {
          name: 'photos/[name].[ext]',
        },
      },
    ],
  },
};
