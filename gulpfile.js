var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("compile", function(){
    return gulp.src("es6-code/*.js")
                .pipe(babel())
                .pipe(gulp.dest('compiled'))
})