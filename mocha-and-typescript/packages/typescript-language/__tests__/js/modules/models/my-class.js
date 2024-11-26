export class MyClass {
    document;
    one;
    two;
    constructor(init) {
        if (init) {
            this.one = null;
            this.two = null;
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
