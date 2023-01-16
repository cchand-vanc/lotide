const tail = require("../tail");
const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"])
