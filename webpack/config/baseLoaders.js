


module.exports = function(workPath){
    return [
            
            {
                // "test" is commonly used to match the file extension
                test: /\.js$/,
                // "include" is commonly used to match the directories
                include: [workPath.app],
                // "exclude" should be used to exclude exceptions
                // try to prefer "include" when possible
                // exclude: [],
                loader: 'babel'
                // query: {
                //     presets: ['es2015']
                // }
            }
        ];
}