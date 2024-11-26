import { expect } from 'expect';
import { MyClass } from './models/my-class.js';
describe('Object.assign in a constructor', function () {
    it('constructs with no parameters', function () {
        const mine = new MyClass();
        console.log(mine.getOneAndTwo());
    });
    it('constructs with anonymous object', function () {
        const mine = new MyClass({
            one: 'One',
            two: 'Two'
        });
        console.log(mine.getOneAndTwo());
    });
    it('can be cast into an effective interface with no methods', function () {
        const mine = {
            one: 'Three',
            two: 'Four'
        };
        expect(mine).toBeTruthy();
        if (!mine.getOneAndTwo) {
            console.log('sorry, mine.getOneAndTwo is not a function');
        }
    });
    it('can use `Object.assign()` to strip out relevant properties', function () {
        const mine = new MyClass({
            document: {
                id: 42,
                isActive: true,
                title: 'Document Title'
            },
            one: 'Five',
            two: 'Six'
        });
        console.log(mine.getOneAndTwo());
    });
});
