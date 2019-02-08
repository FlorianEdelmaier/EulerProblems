/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const range = (n, predicate = i => i) => {
    return [...Array(n).keys()].filter(i => predicate(i));
}

const singles = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tenners = ['ten', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

const isOneDigitNumber = nStr => nStr.length === 1;
const isTwoDigitNumber = nStr => nStr.length === 2;
const isThreeDigitNumber = nStr => nStr.length === 3;
const is1Thousand = nStr => nStr === "1000";

const getSingleNumber = n => singles[n];
const getTwoDigitNumber = nAsString => {
    //console.log(nAsString);
    if(nAsString[0] === '1') return tens[parseInt(nAsString[1])];
    else return tenners[parseInt(nAsString[0] - 1)] + (parseInt(nAsString[1]) === 0 ? '' : '-' + singles[parseInt(nAsString[1])]);
}
const getThreeDigitNumber = nAsString => {
    const lastTwoDigits = (nAsString[1] === '0') ?
            (nAsString[2] === '0') ? '' : ' and ' + getSingleNumber(nAsString[2]) : 
            ' and ' + getTwoDigitNumber(nAsString[1] + nAsString[2]);
    return `${singles[parseInt(nAsString[0])]} hundred${lastTwoDigits}` 
}

const number2word = n => {
    const nAsString = n.toString();
    if(isOneDigitNumber(nAsString)) return getSingleNumber(n);
    else if(isTwoDigitNumber(nAsString)) {
        return getTwoDigitNumber(nAsString);
    }
    else if(isThreeDigitNumber(nAsString)) {
        return getThreeDigitNumber(nAsString)
    }
    else if(is1Thousand(nAsString)) {
        return "one thousand";
    }
    else throw Error("number not supported")
}

const words = range(1001)
				.map(n => number2word(n))
				.reduce((acc, cur) => [...acc,...cur.replace(/-/g,'').replace(/ /g,'').split('')], [])

console.log(words.length);
