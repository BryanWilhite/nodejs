import * as expect from 'expect';

import { MyEnum } from './models/my-enum';

describe('MyEnum', function () {

    const x: MyEnum = MyEnum.Yours;

    it('is equal to itself (of course)', function () {
        expect(x).toEqual(MyEnum.Yours);
    });

    it('is equal to a magic string', function () {
        expect(x).toEqual('yours');
    });
});
