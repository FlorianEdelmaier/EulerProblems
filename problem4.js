/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

const getAllProducts = (limitMin, limitMax) => {
    const result = new Set();
    if (!limitMin instanceof Number || !limitMax instanceof Number) return result;
    for(let i = limitMin; i < limitMax; i++) {
        for(let j = limitMin; j < limitMax; j++) {
            result.add(i * j)
        }
    }
    return result;
}

const isPalindrome = n => {
    var numberStr = n.toString();
    for (let c = 0; c < numberStr.length-c; c++) {
        if (numberStr[c] != numberStr[numberStr.length-c-1]) return false;
    }
    return true
}

const compareNumbers = (a,b) => a - b;

var result = [...getAllProducts(100, 1000)].filter(isPalindrome).sort(compareNumbers).pop();
console.log(result);

