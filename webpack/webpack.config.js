var path = require('path');
var pkg = require('../package.json');
var argv = require('yargs').argv;
var webpack = require('webpack');

// webpack config merge util fn
var wpkMerge = require('webpack-merge');

// webpack validator config
var wpkValidator = require('webpack-validator');
var Joi = require('webpack-validator').Joi;
// This joi schema will be `Joi.concat`-ed with the internal schema
var wpkValidatorSchemaExtension = Joi.object({
  // this would just allow the property and doesn't perform any additional validation
  vue: Joi.any(),
  sassLoader: Joi.any()
});

// general path
//var APP_ROOT_PATH = path.normalize(path.resolve(process.env.PWD)); // process.cwd(), process.env.INIT_CWD, ./, __dirname
var APP_ROOT_PATH = process.cwd();
var workPath = {
    root: APP_ROOT_PATH,
    app: path.resolve(APP_ROOT_PATH, 'src'),
    dist: path.resolve(APP_ROOT_PATH, 'dist')
};


// [ wpkServerHMR ]
var serverHMR =  require('./config/serverHMR.js');

// [ normal server ]
var server = require('./config/server.js');

// base plugins and base loaders
var basePlugins = require('./config/basePlugins.js')(workPath);
var baseLoaders = require('./config/baseLoaders.js')(workPath);


// special plugins and special loaders
var loaderSassConfig = require('./config/loaderSassConfig.js');
var loaderVueConfig = require('./config/loaderVueConfig.js');


// extract bundle
var extractBundle = require('./config/extractBundle.js');

// clean dist
var clean = require('./config/clean.js');


var baseConfig = {
    context: workPath.root,
    cache: true,
    debug: true,
    entry: {
        app: path.resolve(workPath.app, 'main.js')
    },
    output: {
        path: workPath.dist,
        filename: 'js/[name].js'
    },
    module:{
        loaders: baseLoaders
    },
    plugins: basePlugins
};



var config;

switch(process.env.npm_lifecycle_event){
    case 'prod':
        config = wpkMerge(
            baseConfig, 
            {
                output: {
                    path: path.resolve(workPath.dist, '[hash:4]'),
                    filename: 'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/prod.json')
            },
            clean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loaderVueConfig(workPath),
            loaderSassConfig(workPath)
        );
         wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
        break;
    case 'build': 
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    path: path.resolve(workPath.dist, '[hash:4]'),
                    filename: 'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/build.json')
            },
            clean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loaderVueConfig(workPath),
            loaderSassConfig(workPath)
        );
    
        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
       
        // console.log(config)
        break;
    case 'server': 
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    filename: 'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/server.json')
            },
            clean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loaderVueConfig(workPath),
            loaderSassConfig(workPath),
            server(workPath.dist)
        );
        
        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension});
        webpack(config, function(){});
        
        break;
    

    case 'hmr':
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    chunkFilename: 'js/[name].js'
                }
            },
            clean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loaderVueConfig(workPath, true),
            loaderSassConfig(workPath),
            serverHMR()
        );

        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
        webpack(config, function(){});
        
        break;
    
    default:
        config = wpkMerge(baseConfig, {});
}

 module.exports =config;
// module.exports = wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension});