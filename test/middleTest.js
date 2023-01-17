// const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");

// middle([1, 2, 3, 4]);
// let secondArg = middle([1, 2, 3, 4]);
// assertArraysEqual([2,3], secondArg);


const middle = require("../middle");
const assert = require("chai").assert;

describe('#middle', () => {

  it('returns [2, 3] when the input is [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns an empty array when the array is empty', () => {
    assert.deepEqual([], middle([]));
  });

});