const add = function(x,y) {
	let addition = x+y;

return addition;
};

const subtract = function(x,y) {
  let subtraction = x-y;
    
  return subtraction;
};

const sum = function(x,y) {
	let summation = x + y;

return summation;
};

const multiply = function(x,y) {
  let multiplication = x * y;

  return multiplication;
};

const power = function(x,y) {
	let powerOf = x ** y;
    
    return powerOf;
};
// 5! = 5 * 4 * 3 * 2 * 1
const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
for (var i = num - 1; i >= 1; i--) {
  num *= i;
}
return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
