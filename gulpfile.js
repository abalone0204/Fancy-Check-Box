var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
});


// Reload all Browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});


gulp.task('default', ['browser-sync'], function() {
    gulp.watch("app/**/*.*", ["bs-reload"]);
    gulp.watch("app/scss/*.scss", ["sass"]);

    // body...
});

// Sass

gulp.task('sass', function() {
            gulp.src('app/scss/*.scss')
                .pipe(sourcemaps.init())
                .pipe(sass())
                // .pipe(sourcemaps.write())
                .pipe(gulp.dest('app/css'));

                });