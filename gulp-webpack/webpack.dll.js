var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

var APP_ROOT_PATH = path.resolve( argv['APPROOTPATH'] || process.cwd() ); //process.env.INIT_CWD; // come from gulp 

// vendor list
var libList = ['vue', 'vue-router', 'vue-resource'];

module.exports = {
    cache: true,
    context: APP_ROOT_PATH,
    entry: {
        lib: libList,
    },
    output: {
        path: path.resolve(APP_ROOT_PATH, './dist/' ),
        filename: 'js/[name].js'
        // library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(APP_ROOT_PATH, 'dist/js/[name].manifest.json'),
            name: '[name]'
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        // root: path.resolve(APP_ROOT_PATH, 'src'),
        modulesDirectories: ['node_modules']
    }
};