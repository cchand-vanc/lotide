let tail = function(array) {
  let shifted = [];
  for (let i = 1; i < array.length; i++) {
    shifted.push(array[i]);
  }
  return shifted;
};  

module.exports = tail;
