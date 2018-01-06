import { IMyInterface } from './i-my-interface';

export class MyClass {
    document?: IMyInterface;
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
