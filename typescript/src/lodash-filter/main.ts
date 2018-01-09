import * as _ from 'lodash';

const data: number[] = [2, 4, 6, 8, 10];
console.log(`data: ${data}`);

let filtered = _(data).filter(i => i > 6).value();
console.log(`lodash filtered: ${filtered}`);

filtered = data.filter(i => i > 6);
console.log(`ES2015 filtered: ${filtered}`);
