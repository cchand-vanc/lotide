const { assert } = require('console');
const eqObjects = require('./eqObjects');

let assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`💚 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`💔 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;
