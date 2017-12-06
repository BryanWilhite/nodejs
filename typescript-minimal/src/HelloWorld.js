var Hello = /** @class */ (function () {
    function Hello() {
        this.greeting = 'Hello';
    }
    return Hello;
}());
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var hello = new Hello();
        hello['dynamicProperty'] = 'World';
        console.log(hello.greeting + " " + hello['dynamicProperty']);
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=HelloWorld.js.map