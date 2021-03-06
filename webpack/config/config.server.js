
module.exports = function(options){
    var options = options || {};
    return {
        // entry: {
        //     client: 'webpack-dev-server/client?http://localhost:8080'
        // },
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000
        },
        devServer: {
            contentBase: options.path,
            // headers: { "X-Custom-Header": "yes", "Access-Control-Allow-Origin": "*"  },
            
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,

            // Unlike the cli flag, this doesn't set
            // HotModuleReplacementPlugin!
            // hot: true,
            // inline: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env to allow customization.
            //
            // If you use Vagrant or Cloud9, set
            // host: options.host || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: options.host || 'localhost', // Defaults to `localhost`
            port: options.port || 8080 // Defaults to 8080
        }
    };
};