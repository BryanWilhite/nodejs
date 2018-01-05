"use strict";
const my_class_1 = require("./models/my-class");
let mine = new my_class_1.MyClass();
console.log(mine.getOneAndTwo());
mine = new my_class_1.MyClass({
    one: 'One',
    two: 'Two'
});
console.log(mine.getOneAndTwo());
mine = {
    one: 'Three',
    two: 'Four'
};
console.log(mine.getOneAndTwo());
