///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
import { ZipCodeValidator } from "../src/zip-code-validator";

var validator = new ZipCodeValidator();
var zipCode = "90045";

describe("the StringValidator", () => {
    it(`shows ${zipCode} is not acceptable`, () => {
        console.log("foo");
        var test = validator.isAcceptable(zipCode);
        expect(test).toBe(true);
    });
});
