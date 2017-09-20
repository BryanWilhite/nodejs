/// <reference path="../jquery-shared/node_modules/@types/jquery/index.d.ts" />
/*jslint this, white, browser */
/*global jQuery */
(function($) {
    "use strict";

    $(function() {
        $("table").data("trIndex", -1).delegate("td", "click", function() {
            var td = $(this);
            var tr = td.closest("tr");
            var table = td.closest("table");
            var lastColumnIndex = table.data("tdIndex");
            var lastRowIndex = table.data("trIndex");
            var currentColumnIndex = td.index() + 1;
            table.data("trIndex", tr.index() + 1);
            table.data("tdIndex", currentColumnIndex);

            if (lastColumnIndex > 0) {
                $("tbody tr td:nth-child(" + lastColumnIndex + ")", table).removeClass("SelectedColumn");
                $("thead tr th:nth-child(" + lastColumnIndex + ")", table).removeClass("SelectedColumn");
            }

            if (lastRowIndex > 0) {
                $("tbody tr:nth-child(" + lastRowIndex + ")", table).removeClass("SelectedRow");
            }

            if ((lastColumnIndex > 0) && (lastRowIndex > 0)) {
                $("tbody tr:nth-child(" + lastRowIndex + ") " +
                    "td:nth-child(" + lastColumnIndex + ")",
                table).removeClass("SelectedCell");
            }

            $("tbody tr td:nth-child(" + currentColumnIndex + ")", table).addClass("SelectedColumn");
            $("thead tr th:nth-child(" + currentColumnIndex + ")", table).addClass("SelectedColumn");

            tr.addClass("SelectedRow");
            td.removeClass("SelectedColumn").addClass("SelectedCell");
        });
    });
}(jQuery));
