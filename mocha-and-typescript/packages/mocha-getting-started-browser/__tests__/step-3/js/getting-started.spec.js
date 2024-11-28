import { assert } from "chai";
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
    });
});
/**
 * wraps `setTimeout` in a `Promise`
 *
 * @tutorial https://javascript.info/task/delay-promise
 */
function delay(ms) {
    return new Promise((executor) => setTimeout(executor, ms));
}
describe('asynchronous testing', function () {
    const oneSecond = 1000;
    it('can happen with the `then()` callback and `done()`', function (done) {
        delay(oneSecond).then(() => {
            assert.ok(true);
            done();
        });
    });
    it.skip('can be an erroneous anti-pattern', function (done) {
        return delay(oneSecond).then(() => {
            assert.ok(true);
        })
            .then(() => done());
    });
    it('can happen with `async` and `await`', async function () {
        await delay(oneSecond);
        assert.ok(true);
    });
});
describe.skip('Mocha and the use of arrow functions', () => {
    it('my test', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        // this.timeout(1000);
        // in Typescript, the line above should not compile
        assert.ok(true);
    });
});
describe('hooks', function () {
    before(function () {
        console.log('`before()` runs once before the first test in this block');
    });
    after(function () {
        console.log('`after()` runs once after the last test in this block');
    });
    beforeEach(function () {
        console.log('`beforeEach()` runs before each test in this block');
    });
    afterEach(function () {
        console.log('`afterEach()` runs after each test in this block');
    });
    // test cases
    it('is test one', function () { assert.ok(true); });
    it('is test two', function () { assert.ok(true); });
    it('is test three', function () { assert.ok(true); });
});
