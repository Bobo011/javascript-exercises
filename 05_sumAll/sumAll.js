const sumAll = function(num1,num2) {
//n(n+1)/2 
    let n =(num2 -num1+1);
    let sum = n * (num1+num2)/2;

    return sum;


};

console.log(sumAll(1,3))
// Do not edit below this line
module.exports = sumAll;
