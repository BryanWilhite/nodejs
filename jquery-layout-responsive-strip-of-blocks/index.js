/// <reference path="../typings-jquery/node_modules/@types/jquery/index.d.ts" />
/*jslint browser: true, this: true, white: true */
/*global jQuery */
(function ($) {
    "use strict";

    var slideBlocks = function (event, direction) {
        //console.log("slideBlocks called...");
        var header = $(event.target).closest(".block-container.header");
        var wrapperContainer = header.next(".block-container.wrapper");
        var wrapperContainerWidth = wrapperContainer.width();
        var blockWrapper = $("> div", wrapperContainer);
        var duration = 500;
        var wrapperLeft = parseInt(blockWrapper.css("left"), 10);
        var cannotSlideLeft = function () {
            var fixedBlockWidth = 124;
            var blocks = $("span", blockWrapper);
            var totalWidth = fixedBlockWidth * blocks.length;
            var slideLeftLength = Math.abs(wrapperLeft) + wrapperContainerWidth;
            return (slideLeftLength >= totalWidth);
        };
        var getSlideRightLength = function () {
            var l = Math.abs(wrapperLeft);
            return (l > wrapperContainerWidth) ? wrapperContainerWidth : l;
        };
        // console.log(
        //     "blockWrapper:", blockWrapper,
        //     "wrapperContainer:", wrapperContainer,
        //     "wrapperContainerWidth:", wrapperContainerWidth,
        //     "wrapperLeft", wrapperLeft
        // );

        switch (direction) {
            case "left":
                if (cannotSlideLeft()) {
                    return;
                }
                blockWrapper.animate({
                    left: "-=" + wrapperContainer.width()
                }, duration);
                break;

            case "right":
                if (blockWrapper.position().left >= 0) {
                    return;
                }
                blockWrapper.animate({
                    left: "+=" + getSlideRightLength()
                }, duration);
                break;
        }
    };

    $(function () {
        var controls = $(".block-container.header > .controls");
        $(".command.left", controls).click(function (e) {
            slideBlocks(e, "right");
        });
        $(".command.right", controls).click(function (e) {
            slideBlocks(e, "left");
        });
    });
}(jQuery));