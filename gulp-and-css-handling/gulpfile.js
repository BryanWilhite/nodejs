/// <reference path="../typings-gulp/node_modules/@types/gulp/index.d.ts" />
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    map = require("map-stream"),
    minify_css = require("gulp-minify-css"),
    vinyl_fs = require("vinyl-fs");

var cssFileName = "shared";
var stylesPath = "../css-shared";

var cssFiles = [
    "../css-shared/node_modules/normalize.css/normalize.css",
    "../css-shared/html.css",
];

var log = function(file, cb) {
    console.log(file.path);
    cb(null, file);
};

gulp.task("default", function() {
    console.log("run gulp dev or gulp prod");
});

gulp.task("dev", function() {
    console.log("concatenating DEV css...");

    vinyl_fs.src(cssFiles)
        .pipe(map(log))
        .pipe(concat(cssFileName + ".css"))
        .pipe(gulp.dest(stylesPath));
});

gulp.task("prod", function() {
    console.log("concatenating PROD css...");

    vinyl_fs.src(cssFiles)
        .pipe(map(log))
        .pipe(minify_css())
        .pipe(concat(cssFileName + ".min.css"))
        .pipe(gulp.dest(stylesPath));
});
