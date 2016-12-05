var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(workPath){
    return {
        module: {
            loaders: [
                    {
                        test: /\.vue$/,
                        include: [workPath.app],
                        loader: 'vue'
                    }
            ]
        },
        resolve: {
            // you can now require('file') instead of require('file.js')
            // extensions: ['', '.vue', '.js']
            alias: {
                // 'vue': 'vue/dist/vue.js'
            }
        },
        vue: {
            loaders: {
                scss: ExtractTextPlugin.extract('style', 'css!sass'),
                js: 'babel'
            }
        },
        plugins: [new ExtractTextPlugin('style/[name].[chunkhash:4].css')]
    };
}