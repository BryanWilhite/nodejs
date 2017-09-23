/// <reference path="../d3-shared/node_modules/@types/d3/index.d.ts" />
window.onload = function(e) {
    var width = 420,
        barHeight = 20;

    var getScale = d3.scaleLinear()
        .range([0, width]);

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }

    d3.tsv("./data/data.tsv", type, function(error, data) {

        getScale.domain([0, d3.max(data, function(d) {
            return d.value;
        })]);

        var chart = d3.select(".d3-svg-chart")
            .attr("width", width);

        chart.attr("height", barHeight * data.length);

        var bar = chart.selectAll("g").data(data) //data join to selection data
            .enter().append("g")
            .attr("transform", function(d, i) {
                return "translate(0," + i * barHeight + ")";
            });

        bar.append("rect")
            .attr("width", function(d) {
                return getScale(d.value);
            })
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", function(d) {
                return getScale(d.value) - 3;
            })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) {
                return d.value;
            });
    });
};
