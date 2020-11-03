const gulp = require("gulp"),
    concat = require("gulp-concat"),
    map = require("map-stream"),
    vinyl_fs = require("vinyl-fs");

const log = function(file, cb) {
    console.log(file.path);
    cb(null, file);
};

gulp.task("default", async function() {
    console.log("concatenating to lib.js...");
    const javascriptFiles = [
        "./node_modules/underscore/underscore.js",
        "./node_modules/audio5/audio5.js"
    ];

    vinyl_fs
        .src(javascriptFiles)
        .pipe(map(log))
        .pipe(concat("libs.js"))
        .pipe(gulp.dest("./"));
});
