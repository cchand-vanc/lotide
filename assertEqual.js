let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("💚 Assertion passed: " + actual + " === " + expected);
  } else {
    return console.log("💔 Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("the", "the");
assertEqual("fox", "FOX");
assertEqual(567, 567);
assertEqual(123, 789);

