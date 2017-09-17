let gulp = require('gulp'),
    postcss =  require('gulp-postcss'),
    sourcemaps =  require('gulp-sourcemaps'),
    autoprefixer =  require('autoprefixer');     

gulp.task('autoprefixer',  function ()  {    
    return  gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});
