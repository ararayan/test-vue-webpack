var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(workPath, isHMR){
    return {
        module: {
            loaders: [ {
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
                scss: isHMR ? 'style!css!sass' : ExtractTextPlugin.extract('style', 'css!sass'),
                js: 'babel'
            }
        },
        plugins: isHMR ? [function(){}] : [ new ExtractTextPlugin('style/[name].[chunkhash:4].css', { allChunks: true})]
    };
}