'use strict';
/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * */

const range = (n, predicate = i => i) => {
        if(!n instanceof Number) return [];
        
        return [...Array(n).keys()].filter(i => predicate(i));
}

const isMultipleOf3Or5 = i => {
    if (!i instanceof Number) return false;
        return !(i % 3) || !(i % 5);
}

const problem1 = n => {
    if (!n instanceof Number) return 0;
        return range(n, isMultipleOf3Or5).reduce((previous, current) => previous + current);
}

console.log(problem1(1000));
