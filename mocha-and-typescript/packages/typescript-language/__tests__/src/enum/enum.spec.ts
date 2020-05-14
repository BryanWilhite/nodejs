import * as assert from 'assert';

import { MyEnum } from './models/my-enum';

describe('MyEnum', function () {
    const x: MyEnum = MyEnum.Yours;

    it('is equal to itself (of course)', function () {
        assert.strictEqual(x, MyEnum.Yours);
    });

    it('is equal to a magic string', function () {
        assert.strictEqual(x, 'yours');
    });
});
