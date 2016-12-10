var urlLoader = require('url-loader');

module.exports = function(workPath){
    var config = {
        module: {
            loaders: [
                {

                    test: /\.(png|jpg|jpeg|gif)$/,
                    loader: 'url?limit=25000',
                    include: PATHS.images

                }
            ]
        }
    };

    return config;

}