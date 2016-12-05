
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(workPath) {
  return {
    module: {
      loaders: [
        {
            test: /\.scss$/,
            include: [workPath.app],
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('style/[name].[chunkhash:4].css')
    ]
  };
}