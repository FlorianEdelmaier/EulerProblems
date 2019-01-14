/*
    lattice path with 2 way restriction
    calculate as binomial coefficient coords to second corner
    bc (n k) is calculated as n!/((n-k)! * k!) 
*/

const factorial = x => {
    if(x > 1) {
        x *= factorial(x - 1);
    }
    return x;
}

const calcBinomialCoefficient = (x,y) =>
    factorial(x) / (factorial(x-y) * factorial(y));

const calcLatticePath = (x, y) => calcBinomialCoefficient(x + y, y);

console.log("binomial coefficient 2 x 2:", calcLatticePath(2,2));
console.log("binomial coefficient 20 x 20: ", calcLatticePath(20,20));
