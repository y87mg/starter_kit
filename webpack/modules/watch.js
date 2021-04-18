const ignoreList = ['src', 'node_modules', 'webpack'];

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    ignored: ignoreList,
  },
};
