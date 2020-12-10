module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|webp|gif|ico)$/,
        exclude: /fonts/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
};
