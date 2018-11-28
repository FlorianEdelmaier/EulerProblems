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
	range(limiter+1).forEach(x => {
		range(limiter+1-x).forEach(y => {
			range(limiter+1-y).forEach(z => {
				if(sumIsEqualTo(1000)(x,y,z) &&
				   sizeIsAscending(x,y,z) &&
				   isPythagorasCompliant(x,y,z)) {
					matrix.push([x,y,z])
				}
			})
		})
	})
    return matrix;
}

const result = problem9(1000).pop();

console.log(result[0]*result[1]*result[2]);
