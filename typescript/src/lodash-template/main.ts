import * as _ from 'lodash';

_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

const root = 'http://songhaysystem.com/';
const path = 'one/two/three';

let uri: string = _.template('{{ root }}{{ path }}')({
    'root': root,
    'path': path
});

console.log(`lodash template: ${uri}`);

uri = `${root}${path}`;
console.log(`es2015 template: ${uri}`);

// conclusion: just use es2015 template literals
