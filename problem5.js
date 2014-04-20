/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var isDivisibleByAllNumbersTo20 = function(x) {
    'use strict';
    var i = 1;
    for(i; i <= 20; i++) {
        if (!(x % i === 0)) return false;
    }
    return true;
}

//would be nice to have a generator (yield)
var problem5 = function() {
    var counter = 20;
    while (true) {
        if(isDivisibleByAllNumbersTo20(counter)) return counter;
        counter++;
    }   
}

var result = problem5();
console.log(result);
