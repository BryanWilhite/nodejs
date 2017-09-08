/// <reference path="../typings-jquery/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function($) {
    "use strict";

    $(function() {
        var data = [
            {"asin":"B004QRKWKQ"},
            {"asin":"B005LKB0IU"},
            {"asin":"B005M02VJG"}
        ];

        $('#AmazonTemplate')
            .tmpl(data)
            .appendTo('#AmazonFlow');
    });
}(jQuery));
