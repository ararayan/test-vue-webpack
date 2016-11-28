var argv = require('yargs').argv;

var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var devWebpackConfig = require('./webpack.config.dev.js');
var WebpackDevServer = require("webpack-dev-server");
var gutil = require('gulp-util');

// const path define
var APP_ROOT_PATH = argv['APPROOTPATH'];//process.env.INIT_CWD;
var BUILD_PATH = path.resolve(APP_ROOT_PATH, 'dist');




// Development build 
gulp.task('webpack:build-dev', function(callback){
    // modify some webpack config options
    debugger;
    var devConfig = Object.create(devWebpackConfig);
    devConfig.devtool = "sourcemap";
    devConfig.debug = true;

    var entries = devConfig.entry;
    var keys = Object.keys(entries);
    keys.forEach(function(key){
        entries[key].unshift('webpack/hot/only-dev-server');
    });
    entries['client'] = 'webpack-dev-server/client?http://localhost:8080';
    devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    // create a single instance of the compiler to allow caching
 
    var devCompiler = webpack(devConfig);
    devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});



gulp.task('webpack:server', ['webpack:build-dev'], function(){

    var compiler = webpack(devWebpackConfig);
    var server = new WebpackDevServer(compiler, {
        // webpack-dev-server options
       
        contentBase: BUILD_PATH,
        // Can also be an array, or: contentBase: "http://localhost/",
        inline: true,
        hot: true,
        port: 8080,
        // Enable special support for Hot Module Replacement
        // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
        // Use "webpack/hot/dev-server" as additional module in your entry point
        // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 

        // historyApiFallback: false,
        // Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.

        // compress: false,
        // Set this if you want to enable gzip compression for assets

        // proxy: {
        //     "/\shit/": "http://localhost:9000"
        // },
        // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
        // Use "**" to proxy all paths to the specified server.
        // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
        // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).

        // setup: function(app) {
        //     // Here you can access the Express app object and add your own custom middleware to it.
        //     // For example, to define custom handlers for some paths:
        //     // app.get('/some/path', function(req, res) {
        //     //   res.json({ custom: 'response' });
        //     // });
        // },

        // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
        // staticOptions: {
        // },

        // clientLogLevel: "info",
        // Control the console log messages shown in the browser when using inline modus. Can be `error`, `warning`, `info` or `none`.

        // webpack-dev-middleware options
        // quiet: false,
        // noInfo: false,
        // lazy: true,
        // filename: "bundle.js",
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // },
        // It's a required option.
        publicPath: BUILD_PATH,
        headers: { "X-Custom-Header": "yes", "Access-Control-Allow-Origin": "*"  }, 
        // stats: { colors: true }
    });
    server.listen(8080, "localhost", function() {});
});
