const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(1).map((v) => Number(v));

// 1,2,3으로 합의 조합을 생각해야함

/**
 * if 7이라면
 *
 * 1+1+1+1+1+1+1
 * ...
 * 3+3+1
 */

// for (let i = 2; i <= 7; i++) {
//   for (let j = 2; j <= i; j++) {
//     console.log(i, j);
//   }
// }

const N = 4;
const M = 2;

const numberArr = [];

function recursion(targetNubmer, count) {
  if (count === 1) {
    return 1;
  } else {
    recursion(targetNubmer, count--);
  }
}

console.log(numberArr.join("\n"));
