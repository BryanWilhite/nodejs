"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
if (!mine.getOneAndTwo) {
    console.log('sorry, mine.getOneAndTwo is not a function');
}
mine = new my_class_1.MyClass({
    document: {
        id: 42,
        isActive: true,
        title: 'Document Title'
    },
    one: 'Five',
    two: 'Six'
});
console.log(mine.getOneAndTwo());
