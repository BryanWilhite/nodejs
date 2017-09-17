let gulp = require('gulp'),
    postcss =  require('gulp-postcss'),
    sourcemaps =  require('gulp-sourcemaps'),
    autoprefixer =  require('autoprefixer'),
    vars =  require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('autoprefixer',  function ()  {    
    return  gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer(), vars(), nested() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});
