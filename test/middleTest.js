const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

middle([1, 2, 3, 4]);
let secondArg = middle([1, 2, 3, 4]);
assertArraysEqual([2,3], secondArg);