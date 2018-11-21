/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

const isPrime = x => {
    for(let i = 2; i < x; i++) {
        if(x % i === 0) return false;
    }
    return x !== 0 && x !== 1;
}

function *getFactor(x) {
    for(let i = 1; i <= Math.sqrt(x); i++) {
        if(x % i === 0) {
            yield i;
            yield x / i;
        }
    }
}

const factors = [...getFactor(600851475143)].sort((a, b) => a - b);
const primeFactors = factors.filter(isPrime);
console.log(primeFactors.pop());

// const result = getFactors(600851475143) //.filter(isPrime).pop();
//console.log([...getFactor(600851475143)]);
