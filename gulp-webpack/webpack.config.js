var path = require('path');
var argv = require('yargs').argv;
var webpack = require('webpack');

var APP_ROOT_PATH = path.resolve( argv['APPROOTPATH'] || process.cwd() );

