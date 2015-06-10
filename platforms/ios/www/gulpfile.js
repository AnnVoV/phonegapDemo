var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    base64 = require('gulp-base64'),
    autoprefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  stylus: ['stylus/*.styl'],
  css: ['stylus/css/*.css']
};

//stylus to css
gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(autoprefix('last 2 versions'))
    //.pipe(minifycss({keepBreaks:true}))
    //.pipe(minifycss())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

//img to base64
gulp.task('base64', function(){
    return gulp.src(paths.css)
    .pipe(base64())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.css, ['base64']);
});

gulp.task('default', ['stylus','base64']);