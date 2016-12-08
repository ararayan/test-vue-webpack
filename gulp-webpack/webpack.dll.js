var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

var APP_ROOT_PATH = path.resolve(process.env.PWD);  // process.cwd(), process.env.INIT_CWD, ./, __dirname

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
     
        function(){
            debugger;
        },
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        // root: path.resolve(APP_ROOT_PATH, 'src'),
        modulesDirectories: ['node_modules']
    }
};