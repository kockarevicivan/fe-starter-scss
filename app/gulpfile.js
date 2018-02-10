var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(gulp.dest('assets/css'))
});

gulp.watch('scss/**/*.scss', ['default']);