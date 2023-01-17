const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

const data = [];
const results1 = takeUntil(data, x => x < 0);
console.log(results1);

module.exports = takeUntil;
