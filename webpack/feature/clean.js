var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(dist, root) {
  return {
    plugins: [
      new CleanWebpackPlugin([dist], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: root //process.cwd()
      })
    ]
  };
}