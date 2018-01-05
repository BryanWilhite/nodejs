import { MyClass } from './models/my-class';

let mine = new MyClass();
console.log(mine.getOneAndTwo());

mine = new MyClass({
    one: 'One',
    two: 'Two'
});
console.log(mine.getOneAndTwo());

mine = {
    one: 'Three',
    two: 'Four'
} as MyClass;
if (!mine.getOneAndTwo) {
    console.log('sorry, mine.getOneAndTwo is not a function');
}
