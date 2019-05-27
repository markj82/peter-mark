const {expect} = require('chai');
const {sum, minus} = require('../index');

describe('sum', () => {
  it('returns sum of two given numbers', () => {
    const a = 3;
    const b = 4;
    const actual = sum(a, b);
    const expected = 7;
    expect(actual).to.equal(expected);
  });
});

describe('minus', () => {
  it('returns sum of two given numbers', () => {


    const a = 5;
    const b = 10;
    const actual = minus(a, b);
    const expected = -5;
    expect(actual).to.equal(expected);

  });
});
