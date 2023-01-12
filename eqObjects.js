let eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💚 Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💔 Assertion failed: ${actual} !== ${expected}`);
  }
};

let eqObjects = function (object1, object2){
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (eqArrays(object1[item], object2[item]) === true) {
        return true; 
      }
    }
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };

// console.log(eqObjects(shirtObject, anotherShirtObject))
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);


