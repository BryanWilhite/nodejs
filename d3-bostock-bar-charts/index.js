/// <reference path="../d3-shared/node_modules/@types/d3/index.d.ts" />
window.onload = function(e) {
    var data = [4, 8, 15, 16, 23, 42];
    var width = 420,
        barHeight = 20;

    var getScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    d3.select(".d3-chart")
        .selectAll("div").data(data) //data join to selection data
        .enter().append("div")
        .style("width", function(d) {
            return getScale(d) + "px";
        })
        .text(function(d) {
            return d;
        });

    var chart = d3.select(".d3-svg-chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g").data(data) //data join to selection data
        .enter().append("g")
        .attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")";
        });

    bar.append("rect")
        .attr("width", function(d) {
            return getScale(d);
        })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) {
            return getScale(d) - 3;
        })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) {
            return d;
        });
};
