let assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(`💚 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`💔 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

let eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3, 4], true);
