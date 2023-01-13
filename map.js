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

let map = function (array, callback) {
  const results = [];
  for (item of array){
    results.push(callback(item));
  }
  return results;
};

const words = ["nutter", "butter", "wagon", "wheel", "maple", "cream"];
const results1 = map(words, word => word[0]);

console.log(results1)
assertArraysEqual(["n", "b", "w", "w", "m", "c"], results1)