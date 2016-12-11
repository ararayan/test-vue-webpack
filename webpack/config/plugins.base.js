var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(workPath){

    return [
        // new webpack.optimize.CommonsChunkPlugin({
        
        //     name: ['util'],
            
        //     // (the filename of the commons chunk)
        //     filename: 'js/common/[name].js',
        //     // minChunks: Infinity,
        //     // (Modules must be shared between 3 entries)
        //     // async: true,
        //     chunks: ['app', 'util']
        //     // (Only use these entries)
        // }),
        // new webpack.HotModuleReplacementPlugin(),
        
        // new ExtractTextPlugin('style.css'),
        //使用 ProvidePlugin 加载使用率高的依赖库
        // new webpack.ProvidePlugin({
        //     // $: 'zepto'
        // }),
        // new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'My Vue App',
            filename: 'index.html',
            // cache: true, 
            template: path.resolve(workPath.app, 'index-template.html'),
            favicon: path.resolve(workPath.app, 'favicon.ico')
        }),
        // new webpack.optimize.DedupePlugin()
        // new CopyWebpackPlugin([{ from: path.resolve(APP_ROOT_PATH, 'src/index.html')}])
    ]
}

