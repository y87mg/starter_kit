const ignoreList = ['source', 'node_modules', 'configs'];

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    ignored: ignoreList,
  },
};
