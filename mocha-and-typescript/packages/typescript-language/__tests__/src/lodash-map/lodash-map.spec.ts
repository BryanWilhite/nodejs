import * as _ from 'lodash';

describe('lodash _.map()', function () {
    const data: number[] = [2, 4, 6, 8, 10];
    console.log(`data: ${data}`);

    let mapped = _(data).map(i => --i).value();
    console.log(`lodash mapped: ${mapped}`);

    mapped = data.map(i => --i);
    console.log(`ES2015 mapped: ${mapped}`);
});
