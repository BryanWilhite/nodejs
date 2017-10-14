/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/// <reference path="./node_modules/@types/underscore/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

/*jslint this, white, browser */
/*global _, jQuery, Audio5js */
(function($) {
    "use strict";

    var tracks = [
        {
            isPlaying: false,
            uri: "./mp3/Mikey Dread - 05.mp3"
        },
        {
            isPlaying: false,
            uri: "./mp3/Mikey Dread - 06.mp3"
        },
        {
            isPlaying: false,
            uri: "./mp3/Mikey Dread - 07.mp3"
        }
    ];

    var audio5js = null;

    var pre = function(id, message, overwrite) {
        if (overwrite) {
            $(id).text("");
        }
        var text = $(id).text();
        text = text ? text + "\n" : "";
        $(id).text(text + message);
    };

    var initAudio = function() {
        pre("#console-player", "initAudio");
        audio5js = new Audio5js({
            swf_path: "./node_modules/audio5/swf/audio5js.swf",
            throw_errors: true,
            format_time: true,
            ready: function(player) {
                this.on(
                    "error",
                    function() {
                        pre("#console-player", "error");
                    },
                    this
                );
                this.on(
                    "canplay",
                    function() {
                        pre("#console-player", "canplay");
                    },
                    this
                );
                this.on(
                    "play",
                    function() {
                        pre("#console-player", "play");
                    },
                    this
                );
                this.on(
                    "pause",
                    function() {
                        pre("#console-player", "pause");
                    },
                    this
                );
                this.on(
                    "ended",
                    function() {
                        pre("#console-player", "ended");
                    },
                    this
                );
                this.on(
                    "timeupdate",
                    function(position, duration) {
                        pre(
                            "#console-progress",
                            "position/duration: " + position + "/" + duration,
                            true
                        );
                    },
                    this
                );
                this.on(
                    "progress",
                    function(load_percent) {
                        pre(
                            "#console-load-progress",
                            "load_percent: " + load_percent,
                            true
                        );
                    },
                    this
                );
                pre("#console-player", "player ready");
            }
        });
    };

    $(function() {
        pre("#console-general", "document ready");
        initAudio();

        $("button").click(function() {
            var button = $(this);
            var index = button.attr("data-index");
            var track = tracks[index];
            pre(
                "#console-general",
                "track " +
                    index +
                    "[isPlaying: " +
                    track.isPlaying +
                    "]" +
                    ": " +
                    track.uri
            );

            var shouldChangeTrack = (audio5js.playing && !track.isPlaying);
            var shouldPause = (audio5js.playing && track.isPlaying);
            var shouldPlay = (!audio5js.playing && track.isPlaying);

            if (shouldPause) {
                audio5js.pause();
                return;
            } else if (shouldPlay) {
                audio5js.play();
                return;
            } else if (shouldChangeTrack) {
                audio5js.pause();
                initAudio();
            }

            _(tracks).each(function(element) {
                element.isPlaying = false;
            });

            audio5js.load(track.uri);
            audio5js.play();
            track.isPlaying = true;
        });
    });
})(jQuery);
