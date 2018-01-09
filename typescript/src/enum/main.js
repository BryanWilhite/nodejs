"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_enum_1 = require("./models/my-enum");
let x = my_enum_1.MyEnum.Yours;
console.log(`is it yours? => ${x === 'yours'}`);
console.log(`is it really yours? => ${x === my_enum_1.MyEnum.Yours}`);
