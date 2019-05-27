const { expect } = require('chai');
const sum = require('../index');

describe('sum', () => {
    it('returns sum of two given numbers', () => {
        const a = 3;
        const b = 4;
        const actual = sum(a, b);
        const expected = 7;
        expect(actual).to.equal(expected);
    });
});