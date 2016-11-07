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

// vendor list
var vendorList = ['vue', 'vue-router', 'vue-resource'];


var isExternal = function(module){
    var userRequest = module.userRequest;
    if( typeof(userRequest) !== 'string'){
        return false;
    }
    return userRequest.indexOf('bower_components') >= 0 ||
            userRequest.indexOf('node_modules') >= 0;
};



// plugin list
var plugins = [
    //提公用js到common.js文件中
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common' ,
    //     filename: 'util.js',
    //     chunks: ['common1']
    // }),
    new webpack.optimize.CommonsChunkPlugin({
       
        name: ['common', 'vendor'],
        
        // (the filename of the commons chunk)
        filename: '[name].js',
        // minChunks: Infinity,
        // (Modules must be shared between 3 entries)
        // async: true,
        chunks: ['app', 'common']
        // (Only use these entries)
    }),
    //将样式统一发布到style.css中
    new ExtractTextPlugin('style.css'),
    //使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        // $: 'zepto'
    }),
    new CopyWebpackPlugin([{ from: 'src/index.html'}])
];




module.exports = {
    context: ROOT_PATH,
    cache: true,
    entry: {app: [APP_PATH], common: [ './src/util/index.js' ], vendor: vendorList },
    output:{
        path: BUILD_PATH,
        filename: 'bundle.js',
        // 指向异步加载的路径
        publicPath: BUILD_PATH,
        // 非主文件的命名规则，加缓存用到md5
        chunkFilename: '[id].build.js?[chunkhash]'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                include: [path.resolve(ROOT_PATH, "src")],
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                include: [path.resolve(ROOT_PATH, "src")],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            },
            {
                // "test" is commonly used to match the file extension
                test: /\.js$/,
                // "include" is commonly used to match the directories
                include: [path.resolve(ROOT_PATH, "src")],
                // "exclude" should be used to exclude exceptions
                // try to prefer "include" when possible
                // exclude: [],
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins:  plugins
};

