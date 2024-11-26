import { expect } from 'expect';
import { MyEnum } from './models/my-enum.js';
describe('MyEnum', function () {
    const x = MyEnum.Yours;
    it('is equal to itself (of course)', function () {
        expect(x).toEqual(MyEnum.Yours);
    });
    it('is equal to a magic string', function () {
        expect(x).toEqual('yours');
    });
});
