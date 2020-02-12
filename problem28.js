/*
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 *      21 22 23 24 25
 *      20  7  8  9 10
 *      19  6  1  2 11
 *      18  5  4  3 12
 *      17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

const calcSumCornerNumbers = (x) => {
    rightUpperCorner = x * x;
    leftUpperCorner = rightUpperCorner - x + 1;
    rightLowerCorner = leftUpperCorner - x + 1;
    leftLowerCorner = rightLowerCorner - x + 1;
    return rightUpperCorner + leftUpperCorner + rightLowerCorner + leftLowerCorner;
}

const calcSpiralDiagonales = (x) => {
    let sum = 0;
    while(x > 1) {
        sum += calcSumCornerNumbers(x);
        x -= 2;
    }
    return sum + 1;
}

console.log(calcSpiralDiagonales(3));
