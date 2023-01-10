let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💔 Assertion failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");