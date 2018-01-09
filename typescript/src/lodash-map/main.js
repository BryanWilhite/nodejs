"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const data = [2, 4, 6, 8, 10];
console.log(`data: ${data}`);
let mapped = _(data).map(i => --i).value();
console.log(`lodash mapped: ${mapped}`);
mapped = data.map(i => --i);
console.log(`ES2015 mapped: ${mapped}`);
