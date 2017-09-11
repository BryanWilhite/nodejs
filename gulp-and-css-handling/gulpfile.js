/// <reference path="../typings-gulp/node_modules/@types/gulp/index.d.ts" />
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    map = require("map-stream"),
    minify_css = require("gulp-minify-css"),
    vinyl_fs = require("vinyl-fs");

var scriptsPath = "./Content/scripts";
var stylesPath = "./Content/styles";

var cssFiles = [
    "../bower_components/jquery-ui/themes/redmond/jquery-ui.css",
    "./Content/styles/_layout.css",
    "./Content/styles/_layout-nav.css",
    "./Content/styles/_layout-animation.css",
    "./Content/styles/_layout-footer.css",
    "./Content/styles/_layout-webfonts.css",
    "./Content/styles/_layout-app-dash.css",
    "./Content/styles/_layout-app-kb.css",
    "./Content/styles/_layout-app-youtube-uploads.css",
];

var log = function (file, cb) {
    console.log(file.path);
    cb(null, file);
};

gulp.task("default", function () {
    console.log("run gulp dev or gulp prod");
});

gulp.task("dev", function () {
    console.log("concatenating production libs...");

    vinyl_fs.src(cssFiles)
        .pipe(map(log))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(stylesPath));

    var javascriptFiles = [
        "../bower_components/**/underscore.js",
        "../bower_components/moment/moment.js",
        "../bower_components/angular/**/angular.js",
        "../bower_components/angular-sanitize/angular-sanitize.js",
        "../bower_components/angular-route/**/angular-route.js",
        "../bower_components/angular-animate/**/angular-animate.js",
        "../bower_components/jquery-legacy/dist/jquery.js",
        "../bower_components/bootstrap/dist/js/bootstrap.js",
        "../bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js",
        "../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js",
        "../bower_components/jquery-ui/**/jquery-ui.js",
        "../bower_components/handlebars/**/handlebars.js",
    ];

    vinyl_fs.src(javascriptFiles)
        .pipe(map(log))
        .pipe(concat("libs.js"))
        .pipe(gulp.dest(scriptsPath));
});

gulp.task("prod", function () {
    console.log("concatenating production libs...");

    var javascriptFiles = [
        "../bower_components/**/underscore-min.js",
        "../bower_components/moment/min/moment.min.js",
        "../bower_components/angular/**/angular.min.js",
        "../bower_components/angular-sanitize/angular-sanitize.min.js",
        "../bower_components/angular-route/**/angular-route.min.js",
        "../bower_components/angular-animate/**/angular-animate.min.js",
        "../bower_components/jquery-legacy/dist/jquery.min.js",
        "../bower_components/bootstrap/dist/js/bootstrap.min.js",
        "../bower_components/angular-ui-bootstrap-bower/ui-bootstrap.min.js",
        "../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js",
        "../bower_components/jquery-ui/**/jquery-ui.min.js",
        "../bower_components/handlebars/**/handlebars.min.js",
    ];

    vinyl_fs.src(cssFiles)
        .pipe(map(log))
        .pipe(minify_css())
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest(stylesPath));

    vinyl_fs.src(javascriptFiles)
        .pipe(map(log))
        .pipe(concat("libs.min.js"))
        .pipe(gulp.dest(scriptsPath));
});
