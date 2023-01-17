// const tail = require("../tail");
// const assertArraysEqual = require('../assertArraysEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"])

const assert = require("chai").assert;
const expect = require("chai").expect;
const tail = require("../tail");

describe ("#tail", () => {

  it('returns ["Lighthouse", "Labs"] when the input is ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(["Lighthouse", "Labs"],tail(["Yo Yo", "Lighthouse", "Labs"]));
  });

  it('returns an empty array when the array is empty', () => {
    assert.deepEqual([], tail([]));
  });

});