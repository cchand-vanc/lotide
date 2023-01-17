let map = function (array, callback) {
  const results = [];
  for (item of array){
    results.push(callback(item));
  }
  return results;
};

const words = [];
const results1 = map(words, word => word[0]);


module.exports = map;
