import { ZipCodeValidator } from "./zip-code-validator";
const zip = "90045";
const validator = new ZipCodeValidator();
const test = validator.isAcceptable(zip);
console.log(`zip ${zip}: ${test}`);
//# sourceMappingURL=index.js.map