const size = 12;
const data = Array
    .from(Array(size).keys())
    .map((i) => `row: ${i}`);
data.forEach(i => console.log(i));
