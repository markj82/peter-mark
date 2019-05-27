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
  it('returns sum of two given numbers, second example', () => {
    const a = 23;
    const b = 2;
    const actual = sum(a, b);
    const expected = 25;
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

describe('getEvenNumbers', () => {
    it('returns an array of all even numbers in the passed array', () => {
      expect(getEvenNumbers([1, 2, 3])).to.eql([2]);
      expect(getEvenNumbers([2, 4, 6])).to.eql([2, 4, 6]);
      expect(getEvenNumbers([1, 3, 5])).to.eql([]);
    });
  });
