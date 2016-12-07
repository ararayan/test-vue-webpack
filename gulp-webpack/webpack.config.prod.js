// node path module
var path = require('path');

// webpack
var webpack = require('webpack');

// sass loader
var sass = require('sass-loader');

// vue loader
var vue = require('vue-loader');

// compile es6 to es5
var babel = require('babel-loader');

// extract text 
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// general html plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

// args
var argv = require('yargs').argv;



// const path define

var APP_ROOT_PATH = path.resolve(argv['APPROOTPATH'] || process.cwd() );//process.env.INIT_CWD; // come from gulp 


var APP_PATH = path.resolve(APP_ROOT_PATH, 'src/main.js');
var BUILD_PATH = path.resolve(APP_ROOT_PATH, 'dist');




// vendor list
var vendorList = ['vue-router', 'vue-resource'];




// plugin list
var plugins = [
 
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: [ 'vendor'],
        filename: 'js/common/[name].[chunkhash:8].js',
        chunks: ['app']
    }),
    
    // new ExtractTextPlugin('style.css'),

    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: 'My Vue App',
        filename: 'index.html',       
        template: path.resolve(APP_ROOT_PATH, 'src/index-template.html'),
        favicon: path.resolve(APP_ROOT_PATH, 'src/favicon.ico')
    })

];




module.exports = {
    context: APP_ROOT_PATH,
    cache: true,
    debug: false,
    entry: {app: [APP_PATH],  vendor: vendorList },
    output:{
        path: BUILD_PATH,
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: '/',
        // This is used for require.ensure. The setup
        // will work without but this is useful to set
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                include: [path.resolve(APP_ROOT_PATH, "src")],
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                include: [path.resolve(APP_ROOT_PATH, "src")],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            },
            {
                test: /\.js$/,
                include: [path.resolve(APP_ROOT_PATH, "src")],
                loader: 'babel'
            }
        ]
    },
    resolve: {
        alias: {
        }
    },
    vue: {
        loaders: {
            scss: 'style!css!sass',
            js: 'babel'
        }
    },
    sassLoader: {
        includePaths: [path.resolve(APP_ROOT_PATH, "src/style")]
    },
    plugins:  plugins
};



