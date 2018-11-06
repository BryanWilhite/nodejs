/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/// <reference path="./node_modules/@types/mustache/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function($) {
    'use strict';

    $(function() {
        var data = {
            products: [
                {
                    asin: 'B004QRKWKQ'
                },
                {
                    asin: 'B005LKB0IU'
                },
                {
                    asin: 'B005M02VJG'
                }
            ]
        };

        var html = Mustache.render($('#AmazonTemplate').html(), data);
        $('#AmazonFlow').html(html);
    });
})(jQuery);
