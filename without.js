let assertArraysEqual = function(firstArray, secondArray) {
  let trueStatement = `💚 Assertion passed: ${firstArray} === ${secondArray}`;
  let falseStatement = `💔 Assertion failed: ${firstArray} !== ${secondArray}`;
  if (firstArray.length !== secondArray.length) {
    return console.log(falseStatement);
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return console.log(falseStatement);
    }
  }
  return console.log(trueStatement);
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