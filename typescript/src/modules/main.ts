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
console.log(mine.getOneAndTwo());
