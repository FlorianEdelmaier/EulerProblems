/*

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

       3
      7 4
     2 4 6
    8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                      75
                     95 64
                    17 47 82
                   18 35 87 10
                  20 04 82 47 65
                 19 01 23 75 03 34
                88 02 77 73 07 63 67
               99 65 04 28 06 16 70 92
              41 41 26 56 83 40 80 70 33
             41 48 72 33 47 32 37 16 94 29
           53 71 44 65 25 43 91 52 97 51 14
         70 11 33 28 77 73 17 78 39 68 17 57
       91 71 52 38 17 14 91 43 58 50 27 29 48
     63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/

const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;

const filePath = path.join(__dirname, 'problem18.txt');

class BinaryNode {
  constructor(value, leftNode = undefined, rightNode = undefined) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
  getMaxChildNode() {
    if(this.leftNode.value > this.rightNode.value) return this.leftNode;
    return this.rightNode;
  }
  hasChildren() {
    return this.leftNode || this.rightNode;
  }
}

const readTxtFile = fpath => fs.readFileSync(fpath).toString();
const parseToNodeArray = data => data.split(endOfLine).map(l => l.split(' ').map(strV => new BinaryNode(parseInt(strV))));
const createTree = nodeArray => {
  nodeArray.reverse().forEach((array, index) => {
    if((nodeArray.length - index) === 0) return;
    for(let i = 0; i < (array.length - 1); i++) {
      nodeArray[index + 1][i].leftNode = array[i];
      nodeArray[index + 1][i].rightNode = array[i+1];
    }
  })
  return nodeArray[nodeArray.length-1][0];
}

const walkMaximumPath = tree => {
  const result = [tree.value];
  let node = tree;
  while(node.hasChildren())  {
    node = node.getMaxChildNode();
    result.push(node.value);
  }
  return result;
}

const tree = createTree(parseToNodeArray(readTxtFile(filePath)))
console.log(walkMaximumPath(tree).reduce((acc, val) => acc + val, 0));