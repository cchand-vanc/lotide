const eqArrays = require('./eqArrays');

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


module.exports = eqObjects;