import _ from 'lodash';
describe('lodash _.filter()', function () {
    const data = [2, 4, 6, 8, 10];
    console.log(`data: ${data}`);
    it('works in classical JavaScript', function () {
        const filtered = _(data).filter((i) => i > 6).value();
        console.log(`lodash filtered: ${filtered}`);
    });
    it('is like ECMAScript 2015 Array.filter()', function () {
        const filtered = data.filter((i) => i > 6);
        console.log(`ES2015 filtered: ${filtered}`);
    });
});
