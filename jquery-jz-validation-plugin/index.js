/// <reference path="../typings-jquery/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser*/
/*global jQuery*/
(function ($) {
    "use strict";

    $(function () {
        var form = $("#DataFormFlow");

        //Define click behavior for checkbox:
        $('input[type="checkbox"]', form).each(function () {
            var div = $(this).closest("div");
            $(this).click(function (event) {
                $('input[type="checkbox"]', div)
                    .not($(this).get(0)).attr("checked", false);
            });
        });

        //Format `required` asterisks:
        $("span.DataRequired, span.GroupDataRequired", form)
            .attr("title", "This field is required.");

        form.validate({
            debug: true,
            errorPlacement: function (error, element) {
                if (element.attr("name") === "CheckGroup[]" ||
                    element.attr("name") === "RadioGroup") {
                    var fieldset = element.closest("fieldset");
                    var span = $("legend span.GroupDataRequired", fieldset);
                    error.prependTo(span);
                } else {
                    error.insertAfter(element);
                }
            },
            messages: {
                "CheckGroup[]": "Please check something in this checkbox group.",
                "RadioGroup": "Please check something in this radio button group."
            },
            rules: {
                FullName: {
                    minlength: 2
                }
            },
            highlight: function (element, errorClass, validClass) {
                if (element.name && ((element.name === 'CheckGroup[]') ||
                        (element.name === 'RadioGroup'))) {
                    var fieldset = $(element).closest('fieldset');
                    fieldset.addClass(errorClass);
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                if (element.name && ((element.name === 'CheckGroup[]') ||
                        (element.name === 'RadioGroup'))) {
                    var fieldset = $(element).closest('fieldset');
                    fieldset.removeClass(errorClass);
                }
            }
        });
    });
}(jQuery));