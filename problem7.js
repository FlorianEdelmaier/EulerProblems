/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const isPrime = x => {
    for(let i = 2; i < x; i++) {
        if(x % i === 0) return false;
    }
    return x !== 0 && x !== 1;
}

function *primeGenerator() {
    let nr = 0;
    while(true) {
        if(isPrime(nr)) yield nr;
        nr++;
    }
}

const nthPrimeNumber = nr => {
    const pgen = primeGenerator();
    let result = [];
    [...Array(nr).keys()].map(i => result.push({counter: i+1, value: pgen.next().value}));
    return result;
}

console.log(nthPrimeNumber(10001).pop())