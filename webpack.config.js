// node path module
var path = require('path');

// webpack
var webpack = require('webpack');

// When vue-loader detects the presence of babel-loader or buble-loader in the same project, 
// it will use them to process the <script> parts of all *.vue files
// Since vue-loader only processes *.vue files, 
// you'd need to tell Webpack to process normal *.js files with babel-loader or buble-loader in the Webpack config file
// Documention: http://vue-loader.vuejs.org/en/features/es2015.html
var vue = require('vue-loader');

// compile es6 to es5
var babel = require('babel-loader');

// extract text 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

// const path define
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

// plugin list
var plugin = [
    //提公用js到common.js文件中
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    //将样式统一发布到style.css中
    // new ExtractTextPlugin('style.css'),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    // new webpack.ProvidePlugin({
    //     $:'webpack-zepto'
    // }),
    // new CopyWebpackPlugin([{ from: __dirname + 'src/index.html', to: __dirname + 'dist'}])
];

module.exports = {
    context: __dirname,
    entry: [APP_PATH],
    output:{
        path: BUILD_PATH,
        filename: 'build.js',
        // 指向异步加载的路径
        publicPath: BUILD_PATH
        // 非主文件的命名规则，加缓存用到md5
        // chunkFilename: '[id].build.js?[chunkhash]'
    },
    module: {
        loaders: [
            // {
            //     test: /\.vue$/,
            //     loader: 'vue'
            // }
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            // },
            // {
            //     // "test" is commonly used to match the file extension
            //     test: /\.js$/,
            //     // "include" is commonly used to match the directories
            //     include: [path.resolve(ROOT_PATH, "src")],
            //     // "exclude" should be used to exclude exceptions
            //     // try to prefer "include" when possible
            //     // exclude: [],
            //     loader: 'babel',
            //     query: {
            //         presets: ['es2015']
            //     }
            // }
        ]
    },
    plugin: [
        new CopyWebpackPlugin([{ from: 'src/index.html', to:'dist/'}])
    ]
};