/*
2*15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2*1000?
*/

const Big = require('big.js')

const nr = new Big((2 ** 1000).toString())

console.log(nr.c)
console.log(nr.c.reduce((acc, val) => acc + val));