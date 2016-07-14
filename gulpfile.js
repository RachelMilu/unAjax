var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var gulpSequence = require('gulp-sequence');


gulp.task('clean:static', function () {
    return del(['build/static']);
});

gulp.task('build', ['build:static'], function () {
});

gulp.task('build:static', ['clean:static'], function () {
    var inputPath = './src/*.js';
    var outputPath = './build/static/';

    return gulp.src(inputPath)
        .pipe(concat('unajax.debug.js'))
        .pipe(gulp.dest(outputPath))
        .pipe(uglify())
        .pipe(rename({
            basename:'unajax',
            extname: ".js"
        }))
        .pipe(gulp.dest(outputPath));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*'], ['build'])
});

gulp.task('default', function (end) {
    gulpSequence('watch', 'build', end);
});

