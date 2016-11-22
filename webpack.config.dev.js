// node path module
var path = require('path');

// webpack
var webpack = require('webpack');

var sass = require('sass-loader');
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
   
    new webpack.optimize.CommonsChunkPlugin({
       
        name: ['util', 'vendor'],
        
        // (the filename of the commons chunk)
        filename: '[name].js',
        // minChunks: Infinity,
        // (Modules must be shared between 3 entries)
        // async: true,
        chunks: ['app', 'util']
        // (Only use these entries)
    }),
    // new webpack.HotModuleReplacementPlugin(),
    
    new ExtractTextPlugin('style.css'),
    //使用 ProvidePlugin 加载使用率高的依赖库
    // new webpack.ProvidePlugin({
    //     // $: 'zepto'
    // }),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{ from: 'src/index.html'}])
];




module.exports = {
    context: ROOT_PATH,
    cache: true,
    debug: true,
    entry: {app: [APP_PATH], util: [ './src/util/index.js' ], vendor: vendorList },
    output:{
        path: BUILD_PATH,
        filename: '[name].js',
        // static resource path
        publicPath: '/dist/'
        // 非主文件的命名规则，加缓存用到md5
        // chunkFilename: '[id].build.js?[chunkhash]'
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
                loader: 'babel'
                // query: {
                //     presets: ['es2015']
                // }
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
            scss: 'style!css!sass',
            js: 'babel'
        }
    },
    sassLoader: {
        includePaths: [path.resolve(ROOT_PATH, "src/style")]
    },
    // externals: {
    //     'vue': 'Vue',
    //     'vue-router':'VueRouter',
    //     'vue-resource': 'VueResource'
    // },
    plugins:  plugins
};

