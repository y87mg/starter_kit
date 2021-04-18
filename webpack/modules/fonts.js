module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        include: /fonts/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
};
