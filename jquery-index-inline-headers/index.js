/// <reference path="../typings-jquery/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function($) {
    "use strict";

    $(function() {
        $('.group.tile').click(function(e) {
            var tile = $(this);
            tile.next('div').addBack().toggleClass('expanded');
        });
    });
}(jQuery));
