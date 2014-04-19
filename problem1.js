/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

// var sumUpFilteredInRangeOfN = function(n, predicate) {
//     'use strict';
//     var n = n || 1;
//     var i = 0, sum = 0;
//     for (i = 0; i < n; i++) {
//         if (predicate(i)) {
//             sum += 1;
//         }
//     }
//     return sum;
// }

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

var isMultipleOf3Or5 = function(i) {
    'use strict';
    if (!i instanceof Number) {
        return false;
    }
    return !(i % 3) || !(i % 5);
}

var problem1 = function(n) {
    'use strict';
    var i = 0;

    if (!n instanceof Number) return 0;
    return range(n, isMultipleOf3Or5).reduce(function(previous, current) { return previous + current; });
}

var result = problem1(1000);
console.log(result);
