/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

const range = (n, predicate = i => i) => {
    if(!n instanceof Number) return [];
    
    return [...Array(n).keys()].filter(i => predicate(i));
}

function *getFactor(x) {
    for(let i = 1; i <= Math.sqrt(x); i++) {
        if(x % i === 0) {
            yield i;
            yield x / i;
        }
    }
}

const isAbundantNumber = nr => {
    const factorsOfNr = [...getFactor(nr)].filter(val => val < nr);
    //console.log(factorsOfNr)
    const sumOfFactorsNr = factorsOfNr.reduce((agg, val) => agg + val, 0);
    console.log(nr, sumOfFactorsNr, nr < sumOfFactorsNr);
    if (nr < sumOfFactorsNr) return true;
    return false;
}

const abundantNumbers = range(300, i => i >= 12).filter(val => isAbundantNumber(val));

console.log(abundantNumbers);
