/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

var getAllProducts = function(limitMin, limitMax) {
    'use strict';
    var result = [];
    if (!limitMin instanceof Number || !limitMax instanceof Number) return result;
    var i = limitMin;
    for(i; i < limitMax; i++) {
        var j = limitMin;
        for(j; j < limitMax; j++) {
            result.push(i * j)
        }
    }
    return result;
}

var isPalindrome = function(n) {
    'use strict';
    if (!n instanceof Number) return false;
    var numberStr = n.toString();
    var c = 0;
    for (c; c < numberStr.length-c; c++) {
        if (numberStr[c] != numberStr[numberStr.length-c-1]) return false;
    }
    return true;
}

var compareNumbers = function(a, b) {
    'use strict';
    if (!a instanceof Number || !b instanceof Number) throw "Number comparator accepts only numbers.";
    return a - b;
}

var result = getAllProducts(100, 1000).filter(isPalindrome).sort(compareNumbers).pop();
console.log(result);


