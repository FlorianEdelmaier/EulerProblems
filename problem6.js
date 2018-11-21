/*
The sum of the squares of the first ten natural numbers is 385
The square of the sum of the first ten natural numbers is 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const range = (n, predicate = i => i) => {
    if(!n instanceof Number) return [];
    return [...Array(n + 1).keys()].filter(i => predicate(i));
}

const problem6 = n => {
    const sumNumbersSquared = Math.pow(range(n).reduce((acc, num) => acc + num),2);
    const sumSquaredNumbers = range(n).map(n => Math.pow(n,2)).reduce((acc, num) => acc + num);
    return sumNumbersSquared - sumSquaredNumbers;
}

console.log(problem6(100));
