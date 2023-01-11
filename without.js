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

let without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source.length === 0 || itemsToRemove.length === 0) {
      return console.log("Please include at least one element in both arrays!");
    } else if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return console.log(newArray);
};

without(["Charlie", 2, 2, "Henry", 0, "2"], ["Charlie", 2, 0]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);