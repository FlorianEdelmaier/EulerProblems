/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

var isPrime = function(x) {
    'use strict';
    if (!x instanceof Number) return false;
    if ( x == 1 ) { return false; }
    
    var i = 2;
    var maxN = Math.floor(Math.sqrt(x));
    for (i; i <= maxN; i++) {
        if (x % i == 0) { return false; }
    }
    return true;
}

var getPrimes = function(maxCount) {
    'use strict';
    var result = [];
    var nr = 0;
    if (!maxCount instanceof Number) return result;
    while (result.length <= maxCount) {
        if (isPrime(nr)) result.push(nr);
        nr++;
    }
    return result;
}

var result = getPrimes(10001).pop();
console.log(result);
