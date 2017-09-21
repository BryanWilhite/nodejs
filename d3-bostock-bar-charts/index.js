/// <reference path="../d3-shared/node_modules/@types/d3/index.d.ts" />
window.onload = function(e) {
    var data = [4, 8, 15, 16, 23, 42];

    var getScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    d3.select(".d3-chart")
        .selectAll("div").data(data) //data join to selection data
        .enter().append("div")
        .style("width", function(d) {
            return getScale(d) + "px";
        })
        .text(function(d) {
            return d;
        });
};
