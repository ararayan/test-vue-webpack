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
    dist: path.resolve(APP_ROOT_PATH, 'dist'),
    images: path.resolve(APP_ROOT_PATH, 'src/images')
};


// [ wpkServerHMR ]
var configHMR =  require('./config/config.hmr.js');

// [ normal server ]
var configServer = require('./config/config.server.js');

// base plugins and base loaders
var pluginsBase = require('./config/plugins.base.js')(workPath);
var loadersBase = require('./config/loaders.base.js')(workPath);


// special plugins and special loaders
var configSassLoader = require('./config/config.sassLoader.js');
var configVue = require('./config/config.vue.js');


// extract bundle
var extractBundle = require('./config/extractBundle.js');

// clean dist
var pluginsClean = require('./config/plugins.clean.js');

var loadersImg = require('./config/loaders.img');

var pluginsHtml = require('./config/plugins.html.js');

var baseConfig = {
    context: workPath.root,
    cache: false,
    debug: true,
    entry: {
        app: path.resolve(workPath.app, 'main.js')
    },
    output: {
        path: workPath.dist,
        filename: 'js/[name].js',
        publicPath: ''
    },
    module:{
        loaders: loadersBase
    }
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
            // pluginsClean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loadersImg(workPath),
            configVue(workPath),
            sassLoader(workPath),
            pluginsHtml(workPath)
        );
         wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
        break;
    case 'test': 
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    path: path.resolve(workPath.dist, 'test'), //path.resolve(workPath.dist, '[hash:4]'),
                    filename: 'js/[name].js', //'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].js' //'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/test.json')
            },
           pluginsClean(path.resolve(workPath.dist, 'test'), workPath.root),
            
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loadersImg(workPath),
            configVue(workPath),
            configSassLoader(workPath),
            pluginsHtml(workPath)
        );
    
        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
       
        // console.log(config)
        break;
    case 'build': 
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    path: path.resolve(workPath.dist, 'build'),
                    path: path.resolve(workPath.dist, '[hash:4]'),
                    filename: 'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/build.json')
            },
            // pluginsClean(workPath.dist, workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loadersImg(workPath),
            configVue(workPath),
            configSassLoader(workPath),
            pluginsHtml(workPath)
        );

        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
        
        // console.log(config)
        break;
    case 'server': 
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    path: path.resolve(workPath.dist, 'server'),
                    filename: 'js/[name].[chunkhash:4].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: 'js/[name].[chunkhash:4].js'
                },
                recordsPath: path.resolve(workPath.root, 'webpack/records/server.json')
            },
            pluginsClean( path.resolve(workPath.dist, 'server'), workPath.root),
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            loadersImg(workPath),
            configVue(workPath),
            configSassLoader(workPath),
            pluginsHtml(workPath),
            configServer({path: workPath.dist})
        );
      
        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension});
        webpack(config, function(){});
        
        break;
    

    case 'hmr':
        config = wpkMerge(
            baseConfig,
            {
                output: {
                    path: path.resolve(workPath.dist, 'hmr'),
                    chunkFilename: 'js/[name].js'
                }
            },
            extractBundle({
                name: 'lib',
                entries: Object.keys(pkg.dependencies).filter(function(dep){ return dep != 'zepto' && dep != 'normalize.css';})
            }),
            pluginsClean(path.resolve(workPath.dist, 'hmr/images'), workPath.root),
            pluginsClean(path.resolve(workPath.dist, 'hmr/js'), workPath.root),
            loadersImg(workPath),
            configVue(workPath, true),
            configSassLoader(workPath),
            configHMR(),
            pluginsHtml(workPath)
        );

        wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension})
        webpack(config, function(){});
        
        break;
    
    default:
        config = wpkMerge(baseConfig, {});
}

 module.exports =config;
// module.exports = wpkValidator(config, {schemaExtension: wpkValidatorSchemaExtension});