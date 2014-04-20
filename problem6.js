/*
The sum of the squares of the first ten natural numbers is 385
The square of the sum of the first ten natural numbers is 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var range = function(n, predicate) {
    'use strict';
    var i = 0;
    var result = [];

    if (!n instanceof Number) return result;
    var predicate = predicate || function(i) { return i; };

    for(i; i < n; i++) {
      if(predicate(i)) result.push(i);
    }
    return result;
}

var sum = function(previous, current) {
    'use strict';
    if (!previous instanceof Number) previous = 0;
    if (!current instanceof Number) current = 0;
    return previous + current;
}

var problem6 = function(n) {
    'use strict';
    if (!n instanceof Number) n = 11;
    var sumNumbersSquared = Math.pow(range(n).reduce(sum),2);
    var sumSquaredNumbers = range(n).map(function(n) { return Math.pow(n,2); }).reduce(sum);
    return sumNumbersSquared - sumSquaredNumbers;
}

console.log(problem6(101));
