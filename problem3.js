/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var isPrime = function(x) {
    if (!x instanceof Number) return false;
    if ( x == 1 ) { return false; }
    
    var i = 2;
    var maxN = Math.floor(Math.sqrt(x));
    for (i; i <= maxN; i++) {
        if (x % i == 0) { return false; }
    }
    return true;
}

var getFactors = function(x) {
    var result = [];
    var i = 1;
    if (!x instanceof Number) return result;
    while (i <= x) {
        if (x % i === 0) {
            x /= i;
            result.push(i);
        }
        i++;
    }
    return result;
}

var result = getFactors(600851475143).filter(isPrime).pop();
console.log(result);
