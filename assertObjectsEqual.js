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

let eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (eqArrays(object1[item], object2[item]) === true) {
        return true; //This is the part that is throwing an error - not sure why. Ask instructor tomorow. Why is this not evaluating correctly?
      }
    }
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

let assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`💚 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`💔 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
