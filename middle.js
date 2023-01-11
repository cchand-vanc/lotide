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

let assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(`💚 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`💔 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

let middle = function(input) {
  let middlePoint = [];
  let oddMiddle = input[Math.floor(input.length / 2)];
  let evenMiddle1 = input[(input.length / 2) - 1];
  let evenMiddle2 = input[input.length / 2];

  if (input.length % 2 !== 0) {
    middlePoint.push(oddMiddle);
  } else {
    middlePoint.push(evenMiddle1, evenMiddle2);
  }
  return middlePoint;
};

middle([1, 2, 3, 4, 5, 6]);
let secondArg = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual([3,4], secondArg);
