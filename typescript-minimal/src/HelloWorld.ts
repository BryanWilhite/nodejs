class Hello {
    constructor() {
        this.greeting = 'Hello';
    }
    greeting: string;
}

class Startup {
    public static main(): number {
        let hello = new Hello();

        hello['dynamicProperty'] = 'World';

        console.log(`${hello.greeting} ${hello['dynamicProperty']}`);

        return 0;
    }
}

Startup.main();
