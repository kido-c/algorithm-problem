/**  
baekjoon 2805 나무자르기
https://www.acmicpc.net/problem/2805
40분 동안 풀었지만 통과 못함. -> 반례 찾지 못함
*/

const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const info = input[0].split(" ").map((value) => Number(value));
const trees = input[1].split(" ").map((value) => Number(value));
trees.sort((a, b) => a - b);

let result;
let start = 0;
let end = trees.length;

let test = trees.reduce((acc, cur) => acc + cur);
let testSize = (test - info[1]) / trees.length;

if (testSize % 1 === 0) {
  console.log(testSize);
} else {
  while (!result) {
    let middle = Math.floor((end + start) / 2);
    let slice = trees.slice(middle, end);
    let sum = slice.reduce((acc, cur) => acc + cur);
    let cutSize = (sum - info[1]) / slice.length;
    if (cutSize % 1 === 0) {
      result = cutSize;
      break;
    } else {
      start = middle;
    }
  }
  console.log(result);
}
