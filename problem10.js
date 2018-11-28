/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

const problem10 = x => {
    let result = 0;
    const pgen = primeGenerator();
    while(true) {
        let prime = pgen.next().value; 
    }
    return result;
}

// const nthPrimeNumber = nr => {
//     const pgen = primeGenerator();
//     let result = [];
//     [...Array(nr).keys()].map(i => result.push({counter: i+1, value: pgen.next().value}));
//     return result;
// }

// console.log(nthPrimeNumber(10001).pop())