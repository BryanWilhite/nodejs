define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && exports.numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    exports.ZipCodeValidator = ZipCodeValidator;
});
//# sourceMappingURL=zip-code-validator.js.map