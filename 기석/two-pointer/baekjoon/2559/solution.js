/**  
baekjoon 2559 수열 문제
https://www.acmicpc.net/problem/2559
40분 동안 풀었지만 통과 못함.

누적합으로 풀이
*/

const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const continuousDate = Number(input[0].split(" ")[1]);
const date = input[1].split(" ").map((value) => Number(value));

let accDate = [];
let sum = 0;

date.forEach((v) => {
  accDate.push(sum + v);
  sum += v;
});

let result = [];

for (let i = 0; i <= date.length - continuousDate; i++) {
  let A = i;
  let B = continuousDate + i;

  if (A === 0) {
    result.push(accDate[B - 1]);
  } else {
    result.push(accDate[B - 1] - accDate[A - 1]);
  }
}

console.log(result.sort((a, b) => a - b).at(-1));
