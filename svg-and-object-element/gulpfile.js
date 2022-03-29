const gulp = require("gulp"),
    path = require("path"),
    svg_to_png = require("svg-to-png");

gulp.task("default", function() {
    console.log("converting SVG to PNG...");
    let input = path.join(__dirname, "circle.svg");
    return svg_to_png.convert(input, "./").then(function() {
        console.log("...converted SVG to PNG.");
    });
});
