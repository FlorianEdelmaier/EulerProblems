/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
Evaluate the sum of all the amicable numbers under 10000.
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

const isAmicableNumber = nr => {
    const factorsOfNr1 = [...getFactor(nr)]
    const sumOfFactorsNr1 = factorsOfNr1.reduce((agg, val) => val < nr ? agg + val : agg, 0);
    const factorsOfNr2 = [...getFactor(sumOfFactorsNr1)]
    const sumOfFactorsNr2 = factorsOfNr2.reduce((agg, val) => val < sumOfFactorsNr1 ? agg + val : agg, 0);
    if(nr === sumOfFactorsNr2 && sumOfFactorsNr1 !== sumOfFactorsNr2) return { isAmicableNumber: true, nr1: nr, nr2: sumOfFactorsNr1 }
    else return { isAmicableNumber: false }
}

const getAmicableNumbersBelow = max => range(max).map(val => isAmicableNumber(val)).filter(val => val.isAmicableNumber);

console.log(getAmicableNumbersBelow(10000).reduce((acc, val) => acc + val.nr1, 0));
