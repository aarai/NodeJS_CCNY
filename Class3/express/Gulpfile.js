var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('client', function() {
  return

});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "localhost:3000",
        browser: "google chrome",
        port: 7000
    });
});

gulp.task('watch', function() {
    gulp.watch(["app.js"], reload);
    gulp.watch(["public/css/*.css"], function() {
      console.log('css changed')
      reload()
    });
})

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('nodemon', function (cb) {
  var started = false;

  return nodemon({script: 'app.js'}).on('start', function() {
		if (!started) {
			cb();
			started = true;
		}
  });
});
