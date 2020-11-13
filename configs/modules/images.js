module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|webp|gif|ico)$/,
        exclude: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
};
