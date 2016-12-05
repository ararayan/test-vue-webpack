var path = require('path');

module.exports = function(workPath){
    return {
        sassLoader: {
            includePaths: [path.resolve(workPath.app, "style")]
        }
    };
};