var gulp = require('gulp');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

var useref = require('gulp-useref');
// gulp.task('useref', function(){
  // return gulp.src('app/*.html')
    // .pipe(useref())
    // .pipe(gulp.dest('dist'))
// });

// Other requires...
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});