/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function ($) {
    "use strict";

    $(function () {

        var splashImages = [
            $(new Image()),
            $(new Image()),
            $(new Image()),
            $(new Image()),
            $(new Image())
        ];

        var splashImageSources = [
            "http://www.dummyimage.com/320x240/fff/000.jpg",
            "http://www.dummyimage.com/320x240/000/fff.jpg",
            "http://www.dummyimage.com/320x240/00ff00/fff.jpg",
            "http://www.dummyimage.com/320x240/c7c7c7/000.jpg",
            "http://www.dummyimage.com/320x240/0000ff/fff.jpg"
        ];

        splashImages[0]
            .css("z-index", 100)
            .hide()
            .attr("src", splashImageSources[0]);
        splashImages[1]
            .css("z-index", 101)
            .hide()
            .attr("src", splashImageSources[1]);
        splashImages[2]
            .css("z-index", 102)
            .hide()
            .attr("src", splashImageSources[2]);
        splashImages[3]
            .css("z-index", 103)
            .hide()
            .attr("src", splashImageSources[3]);
        splashImages[4]
            .css("z-index", 104)
            .hide()
            .attr("src", splashImageSources[4]);

        var intervalHandle = 0;
        var canDoSplashImages = true;
        var splashImagesIndex = 0;

        var doSplashImages = function () {
            var lastImage = $("#SlideshowFlow > img:visible");
            var currentImage = $(splashImages[splashImagesIndex]);

            $("#SlideshowFlow> div > a.Selected").removeClass("Selected");
            $("#SlideshowFlow> div > a:eq(" + splashImagesIndex + ")").addClass("Selected");

            if (lastImage) {
                lastImage.fadeOut("slow");
            }
            currentImage.fadeIn("slow");

            if (!canDoSplashImages) {
                window.clearInterval(intervalHandle);
                return;
            }

            splashImagesIndex += 1;
            if (splashImagesIndex > (splashImages.length - 1)) {
                splashImagesIndex = 0;
            }

            if (intervalHandle === 0) {
                intervalHandle = window.setInterval(window.rx.doSplashImages, 5000);
            }
        };

        $(window.document).ready(function () {

            var divArray = [
                "<div>",
                '<a href="#">1</a>',
                '<a href="#">2</a>',
                '<a href="#">3</a>',
                '<a href="#">4</a>',
                '<a href="#">5</a>',
                "</div>"
            ];

            $("#SlideshowFlow")
                .append(splashImages[0])
                .append(splashImages[1])
                .append(splashImages[2])
                .append(splashImages[3])
                .append(splashImages[4])
                .append(divArray.join(""));

            $("#SlideshowFlow> div > a").click(function (event) {
                event.preventDefault();
                var a = $(this);
                var index = parseInt(a.text(), 10);
                $("#SlideshowFlow> div > a.Selected").removeClass("Selected");
                a.addClass("Selected");
                splashImagesIndex = (index - 1);
                canDoSplashImages = false;
                doSplashImages(true);
            });

            doSplashImages();
        });

        var rx = {
            doSplashImages: doSplashImages
        };

        window.rx = rx;
    });

}(jQuery));