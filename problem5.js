/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const isDivisibleByAllNumbersTo = max => num => {
    for(let i = 1; i <= max; i++) {
        if(!(num % i === 0)) return false;
    }
    return true;
}


const firstNumberDivisibleByAllNumbersUpTo = num => {
    let counter = num;
    while (true) {
        if(isDivisibleByAllNumbersTo(num)(counter)) return counter;
        counter++;
    }   
}

console.log(firstNumberDivisibleByAllNumbersUpTo(20));
