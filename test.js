// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// add,
// subtract,
// sum,
// multiply,
// power,
// factorial

function add(x,y){
let addition = x+y;

return addition;

}

function subtract(x,y){
    let subtraction = x-y;
    
    return subtraction;
    
    }

function sum(x,y){
let summation = x + y;

return summation;

}

function multiply(x,y){
let multiplication = x * y;

return multiplication;

}

function power(x,y){
    let powerOf = x ** y;
    
    return powerOf;
    
    }

    

    function factorial(num){
        if (num === 0 || num === 1)
        return 1;
      for (var i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;

    }

    