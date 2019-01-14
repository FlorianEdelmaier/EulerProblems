/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const Big = require("big.js");

const factorial = x => {
    if(x > 1) {
        x *= factorial(x - 1);
    }
    return x;
}

console.log(new Big(factorial(10)))
console.log(new Big(factorial(100).toFixed(0)))