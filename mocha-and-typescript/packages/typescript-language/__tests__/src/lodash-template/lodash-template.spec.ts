import * as _ from 'lodash';

describe('lodash _.template()', function () {
    _.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

    const root = 'http://songhaysystem.com/';
    const path = 'one/two/three';

    it('works with legacy JavaScript', function () {
        const uri: string = _.template('{{ root }}{{ path }}')({
            'root': root,
            'path': path
        });

        console.log(`lodash template: ${uri}`);
    });

    it('is a subset of ECMAScript template literals', function () {
        const uri = `${root}${path}`;
        console.log(`es2015 template: ${uri}`);

        // conclusion: just use es2015 template literals
    });

});
