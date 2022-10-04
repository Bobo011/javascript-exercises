//Removes an item from an array and creates a new one from the remainder
const removeFromArray = function(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

// Do not edit below this line
module.exports = removeFromArray;
