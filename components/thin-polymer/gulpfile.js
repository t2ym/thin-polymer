const gulp = require('gulp');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const crisper = require('gulp-crisper');
 
gulp.task('demo', () => {
  return gulp.src([ 'demo/native/*' ])
    .pipe(crisper({
      scriptInHead: false
    }))
    .pipe(gulpif('*.html', crisper()))
    .pipe(gulpif('*.js', babel({
      presets: [ 'es2015', 'stage-0' ]
    })))
    .pipe(gulp.dest('demo/babel'));
});
