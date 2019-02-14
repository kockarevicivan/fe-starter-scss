let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let minify = require('gulp-minify-css');

gulp.task('default', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(minify())
		.pipe(gulp.dest('assets/css'))
});

gulp.watch('scss/**/*.scss', ['default']);