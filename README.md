records trouble list:

    1. when use webpack 'extract-text-webpack-plugin' to extract the style;
        throw error: 
            ERROR in ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"rem                                                                                                                                                                                               ove":true}!./~/style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?                                                                                                                                                                                               id=data-v-67a4b532!./~/sass-loader!./src/vue/shell/def.shell.scss
            Module build failed: Error: "extract-text-webpack-plugin" loader is used without                                                                                                                                                                                                the corresponding plugin, refer to https://github.com/webpack/extract-text-webp                                                                                                                                                                                               ack-plugin for the usage example
            at Object.module.exports.pitch (D:\Ararayan\Private\test-vue-webpack\node_mo                                                                                                                                                                                               dules\extract-text-webpack-plugin\loader.js:21:9)
            @ ./src/vue/shell/def.shell.vue 4:0-201

        caz by switch machine or node, exec "npm install" make node-sass error, Prompt "need to rebuild", 
        when rebuild, got the error again,  so i reinstall node-sass, and it work sucessfully;

    2. process.env.PWD dir letter is uppercase, for example: D:\Ararayan\Private\test-vue-webpack;
       process.cwd() dir letter is lowercase, for example: d:\Ararayan\Private\test-vue-webpack;
    
    3. 'gulp --config path/to/gulpfile.js' will change process.cwd(); 
    
    4. npm run script can pass variable by use %variable(pwd)% on windows, other system may use ${variable}