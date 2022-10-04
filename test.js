// > A series of numbers in which each number ( Fibonacci number ) is the sum of the 
// two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8


const fibonacci = function(n) {
    let a = 0, b = 1, c = n;
  
    for(let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    
    return c;
};

console.log(fibonacci(5));
