import { expect } from 'chai';

import sum from './sum.js';

describe('sum', function () {
    it('should return sum of arguments', () => {
        expect(sum(1, 2)).to.equal(3);
    });
});
