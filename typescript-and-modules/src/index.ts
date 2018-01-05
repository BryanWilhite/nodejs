import { StringValidator } from "./string-validator";
import { ZipCodeValidator } from "./zip-code-validator";

const zip = "90045";
const validator: StringValidator = new ZipCodeValidator();
const test = validator.isAcceptable(zip);

console.log(`zip ${zip}: ${test}`);