// const gulp = require('gulp')
// const jsdoc = require('gulp-jsdoc3');
import gulp from 'gulp'
import jsdoc from 'gulp-jsdoc3'

gulp.task('doc', function (cb) {
    gulp.src(['README.md', './model/*.js', './services/*.js'], {read: false})
        .pipe(jsdoc(cb));
});

