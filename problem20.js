/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const Big = require("big.js");

const compose = (...fns) => data => fns.reduceRight((value, func) => func(value), data);

const factorial = x => {
    if(x > 1) {
        x = x.times(factorial(x.minus(1)));
    }
    return x.toFixed(0);
}

const toDigitArray = bigNr => bigNr.toString().split('').map(Number);

const sumOfDigitArray = arr => arr.reduce((acc, val) => acc + val, 0);

const sumOfFactorial = compose(sumOfDigitArray, toDigitArray, factorial);

console.log(sumOfFactorial(new Big(100)))