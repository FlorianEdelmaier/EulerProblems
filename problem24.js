/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
012   021   102   120   201   210
What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const permutator = intArr => {
    let result = [];
    let resultTmp = [];
    while(intArr.length > 0) {
        let nr = intArr.pop();
        if(result.length === 0) { result.push(nr.toString()); continue; }
        result.forEach(strValue => {
            const strArr = strValue.split('');
            for(let i=0; i < strArr.length; i++) {
                let tmp1 = [...strArr.filter((val, ind) => ind < i), nr, ...strArr.filter((val, ind) => ind >= i)];
                resultTmp.push(tmp1.join(''))
                resultTmp.push(tmp1.reverse().join(''))
                //console.log('add to resultNew',resultTmp)
            }
        })
        result = [...new Set(resultTmp)];
        resultTmp= [];
    }
    return result.sort();
}

const perms = permutator([0,1,2,3,4,5,6,7,8,9])
console.log(perms[999999])