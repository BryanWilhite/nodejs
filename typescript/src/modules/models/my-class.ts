export class MyClass {
    one: string;
    two: string;

    constructor(init?: Partial<MyClass>) {
        if (init) {
            Object.assign(this, init);
        } else {
            this.one = 'first';
            this.two = 'second';
        }
    }

    getOneAndTwo(): string {
        return `${this.one} and ${this.two}!`;
    }
}
