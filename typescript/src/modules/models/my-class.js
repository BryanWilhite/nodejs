"use strict";
class MyClass {
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
        else {
            this.one = 'first';
            this.two = 'second';
        }
    }
    getOneAndTwo() {
        return `${this.one} and ${this.two}!`;
    }
}
exports.MyClass = MyClass;
