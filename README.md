records trouble list:

    1. when use webpack 'extract-text-webpack-plugin' to extract the style;
        caz by use pwd as webpack context;

    2. process.env.PWD dir letter is uppercase, for example: D:\Ararayan\Private\test-vue-webpack;
       process.cwd() dir letter is lowercase, for example: d:\Ararayan\Private\test-vue-webpack;
    
    3. 'gulp --config path/to/gulpfile.js' will change process.cwd(); 
    
    4. npm run script can pass variable by use %variable(pwd)% on windows, other system may use ${variable}