import { IMyInterface } from './i-my-interface';

export class MyClass {
    document?: IMyInterface;
    one: string | null;
    two: string | null;

    constructor(init?: Partial<MyClass>) {
        if (init) {
            this.one = null;
            this.two = null;
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
