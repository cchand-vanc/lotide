let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💔 Assertion failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  let shifted = [];
  for (let i = 1; i < array.length; i++) {
    shifted.push(array[i]);
  }
  return shifted;
};  

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);