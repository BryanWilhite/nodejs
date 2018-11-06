/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function($) {
    'use strict';

    $(function() {
        var splashColors = [
            'fff/000',
            '000/fff',
            '00ff00/fff',
            'c7c7c7/000',
            '0000ff/fff'
        ];

        var splashImages = Array.from(Array(5).keys()).map(function(i) {
            var image = $(new Image());
            image
                .css('z-index', 100 + i)
                .hide()
                .attr('src', 'http://www.dummyimage.com/320x240/' + splashColors[i] + '.jpg');
            return image;
        });

        var intervalHandle = 0;
        var canDoSplashImages = true;
        var splashImagesIndex = 0;

        var doSplashImages = function() {
            var lastImage = $('#SlideshowFlow > img:visible');
            var currentImage = $(splashImages[splashImagesIndex]);

            $('#SlideshowFlow> div > a.Selected').removeClass('Selected');
            $('#SlideshowFlow> div > a:eq(' + splashImagesIndex + ')').addClass(
                'Selected'
            );

            if (lastImage) {
                lastImage.fadeOut('slow');
            }
            currentImage.fadeIn('slow');

            if (!canDoSplashImages) {
                window.clearInterval(intervalHandle);
                return;
            }

            splashImagesIndex += 1;
            if (splashImagesIndex > splashImages.length - 1) {
                splashImagesIndex = 0;
            }

            if (intervalHandle === 0) {
                intervalHandle = window.setInterval(
                    window.rx.doSplashImages,
                    5000
                );
            }
        };

        $(window.document).ready(function() {
            var divArray = [
                '<div>',
                '<a href="#">1</a>',
                '<a href="#">2</a>',
                '<a href="#">3</a>',
                '<a href="#">4</a>',
                '<a href="#">5</a>',
                '</div>'
            ];

            $('#SlideshowFlow')
                .append(splashImages[0])
                .append(splashImages[1])
                .append(splashImages[2])
                .append(splashImages[3])
                .append(splashImages[4])
                .append(divArray.join(''));

            $('#SlideshowFlow> div > a').click(function(event) {
                event.preventDefault();
                var a = $(this);
                var index = parseInt(a.text(), 10);
                $('#SlideshowFlow> div > a.Selected').removeClass('Selected');
                a.addClass('Selected');
                splashImagesIndex = index - 1;
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
})(jQuery);
