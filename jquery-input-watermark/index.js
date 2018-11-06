/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global window, jQuery */

(function($) {
    'use strict';

    $(function() {
        var watermarkText = 'Search Product Catalog';
        $('#SearchForm input[type="text"]')
            .addClass('Watermark')
            .val(watermarkText)
            .focus(function() {
                if ($(this).val() === watermarkText) {
                    $(this)
                        .removeClass('Watermark')
                        .val('');
                }
            })
            .blur(function() {
                if ($(this).val() === watermarkText) {
                    $(this)
                        .val(watermarkText)
                        .addClass('Watermark');
                }
            });
    });
})(jQuery);
