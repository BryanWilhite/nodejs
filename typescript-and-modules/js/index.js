define(["require", "exports", "./zip-code-validator"], function (require, exports, zip_code_validator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var zip = "90045";
    var validator = new zip_code_validator_1.ZipCodeValidator();
    var test = validator.isAcceptable(zip);
    console.log("zip " + zip + ": " + test);
});
