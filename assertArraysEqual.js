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

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
