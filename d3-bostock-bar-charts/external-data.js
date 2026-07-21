/// <reference path='../_shared/node_modules/@types/d3/index.d.ts' />
const width = d3.select('.container').node().getBoundingClientRect().width;
const barHeight = 20;

const getScale = d3.scaleLinear().range([0, width]);

// accessor function for d3.max that tells it how to evaluate each data point:
function type(d) {
    d.value = +d.value; // coerce to number, “d3.tsv isn’t smart enough to detect and convert types”

    return d;
}

d3.tsv('./data/data.tsv').then(data => {

    getScale.domain([0, d3.max(data, function(d) {
        return d.value;
    })]);

    const chart = d3.select('.d3-svg-chart.tsv').attr('width', width);

    chart.attr('height', barHeight * data.length);

    const bar = chart.selectAll('g').data(data) //data join to selection data
        .enter().append('g')
        .attr('transform', function(d, i) {
            return 'translate(0,' + i * barHeight + ')';
        });

    bar.append('rect')
        .attr('width', function(d) {
            console.log('yup',{d});
            return getScale(d.value);
        })
        .attr('height', barHeight - 1);

    bar.append('text')
        .attr('x', function(d) {
            return getScale(d.value) - 3;
        })
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .text(function(d) {
            return d.value;
        });
});
