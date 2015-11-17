
var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon');

gulp.task('less', function () {
  return gulp.src('./public/src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/build/css'))
    .pipe(livereload());
});

gulp.task('babel', function() {
    return gulp.src('public/src/es6/main.js')
        .pipe(babel({
            presets: ['babel-preset-es2015']
        }))
        .pipe(gulp.dest('public/build/js'));
        livereload();
});

gulp.task('start', function () {
  nodemon({script: 'server.js' })
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('public/src/less/*.less', ['less']);
    gulp.watch('public/src/es6/*.js', ['babel']);
});

gulp.task('default', ['start','babel','less','watch']);
