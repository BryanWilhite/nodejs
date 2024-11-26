import _ from 'lodash';
describe('lodash _.map()', function () {
    const data = [2, 4, 6, 8, 10];
    console.log(`data: ${data}`);
    it('works with legacy JavaScript', function () {
        const mapped = _(data).map(i => --i).value();
        console.log(`lodash mapped: ${mapped}`);
    });
    it('works like the ECMAScript equivalent, Array.map()', function () {
        const mapped = data.map(i => --i);
        console.log(`ES2015 mapped: ${mapped}`);
    });
});
