"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
const root = 'http://songhaysystem.com/';
const path = 'one/two/three';
let uri = _.template('{{ root }}{{ path }}')({
    'root': root,
    'path': path
});
console.log(`lodash template: ${uri}`);
uri = `${root}${path}`;
console.log(`es5 template: ${uri}`);
