let without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source.length === 0 || itemsToRemove.length === 0) {
      return console.log("Please include at least one element in both arrays!");
    } else if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return console.log(newArray);
};

module.exports = without;