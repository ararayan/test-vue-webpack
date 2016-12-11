

module.exports = function(workPath){
    var config = {
        module: {
            loaders: [
                {
                    test: /\.(jpg|png)$/,
                    loader: 'url?limit=5000&name=./images/[name].[ext]',
                }
                // {

                //     test: /\.(png|jpg|jpeg|gif)$/,
                //     loader: 'file?name=./images/[name].[ext]',

                // }
            ]
        }
    };

    return config;

}