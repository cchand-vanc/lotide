const eqArrays = require("./eqArrays");

let assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(`💚 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`💔 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;