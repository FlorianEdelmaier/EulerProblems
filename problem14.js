/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const range = (n, predicate = i => i) => {
    if(!n instanceof Number) return [];
    return [...Array(n).keys()].filter(i => predicate(i));
}

const evenCollatz = x => x/2;

const oddCollatz = x => 3 * x + 1;

const isEven = x => x % 2 === 0;

const getNextCollatz = x => isEven(x) ? evenCollatz(x): oddCollatz(x);

const getCollatzSequence = x => {
	let nr = x;
	const result = [];
	while(nr > 1) {
		nr = getNextCollatz(nr);
		result.push(nr);
	}
	return result;
}

const calcMaxCollatzChainForNumbersUpTo = num => {
	let maxNum = { number: 0, chainLength: 0 };
	range(num).forEach(n => {
		const collatz = getCollatzSequence(n);
		if(maxNum.chainLength < collatz.length) {
			maxNum.number = n;
			maxNum.chainLength = collatz.length;
		}
	});
	return maxNum;
}

const problem14 = () => {
	console.log(calcMaxCollatzChainForNumbersUpTo(999999));
}

problem14();
