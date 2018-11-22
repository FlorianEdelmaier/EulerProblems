/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const range = max => [...Array(max).keys()]

const sumIsEqualTo = sum => (v1, v2, v3) => v1 + v2 + v3 === sum;

const sizeIsAscending = (v1, v2, v3) => v1 < v2 && v2 < v3;

const isPythagorasCompliant = (v1, v2, v3) => v1 ** 2 + v2 ** 2 === v3 ** 2;

const problem9 = limiter => {
    const matrix = [];
    for(let x=0; x < (limiter + 1); x++) {
        for(let y=0; y < (limiter + 1 - x); y++) {
            for(let z=0; z < (limiter + 1 - y); z++) {
                if(x + y + z === 1000 && x < y && y < z && x ** 2 + y ** 2 === z ** 2)  {
                    matrix.push([x,y,z])
                }
            }
        }
    }
    return matrix;
}

console.table(problem9(1000))
