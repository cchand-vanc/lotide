let middle = function(input) {
  let middlePoint = [];
  let oddMiddle = input[Math.floor(input.length / 2)];
  let evenMiddle1 = input[(input.length / 2) - 1];
  let evenMiddle2 = input[input.length / 2];

  if (input.length > 2) {
    if (input.length % 2 !== 0) {
      middlePoint.push(oddMiddle);
    } else {
      middlePoint.push(evenMiddle1, evenMiddle2);
    }
    return middlePoint;
  } else {
    return middlePoint;
  }
};

module.exports = middle;
