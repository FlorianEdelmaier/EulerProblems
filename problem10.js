/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const range = (start=0, end=0, step=1) => {
    if(start === end || step === 0) return [];
    const length = Math.ceil(Math.abs(end - start) / step);

    return start > end ?
        Array.from({length}, (value, key) => start - key * step) :
        Array.from({length}, (value, key) => start + key * step);
}

const sieveOfEratosthenes = max => {
    const numbers = range(2, max);
    const primes = [];
    while(numbers.length) {
        primes.push(numbers.pop());
        numbers.forEach(n => {
            if(! n % primes[-1]) {
                numbers.pop()
            }
        })
    }
    return primes;



    let numbers = Array(max).fill(1);
    let primes = [2];

    range(3, Math.sqrt(max), 2).forEach(val => {
        if(array[val]) { range(val**2, max, val*2).forEach(val2 => array[val2] = 0)}
    })

    range(3, max, 2).forEach(val => {
        if(array[val]) output.push(val);
    })
    return output;
}


console.log(sieveOfEratosthenes(2000000).reduce((acc, val) => acc + val));
