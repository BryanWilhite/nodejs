var size = 12;
var data = Array
    .from(Array(size).keys())
    .map(function (i) { return "row: " + i; });
data.forEach(function (i) { return console.log(i); });
