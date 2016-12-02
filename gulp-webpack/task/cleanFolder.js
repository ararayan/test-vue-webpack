var gulp = require('gulp');

var clean = require('gulp-clean');

module.exports  = function(taskName, path){
    gulp.task(taskName, function(){
        return gulp.src(path, {read: false})
            .pipe(clean({force: true}));
    });
};
