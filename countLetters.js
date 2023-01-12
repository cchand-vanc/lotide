let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💔 Assertion failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(phrase) {
  let results = {};
  for (let letter of phrase) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
