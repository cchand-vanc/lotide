let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💔 Assertion failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
