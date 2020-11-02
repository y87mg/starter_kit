module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        include: /fonts/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
};
