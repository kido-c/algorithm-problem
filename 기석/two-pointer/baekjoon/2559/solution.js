/**  
baekjoon 2559 수열 문제
https://www.acmicpc.net/problem/2559
40분 동안 풀었지만 통과 못함.
*/

const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const continuousDate = Number(input[0].split(" ")[1]);

const date = input[1].split(" ").map((value) => Number(value));

function solution(arr, continuous) {
  let max = 0;
  let sum = 0;
  let left = 0;

  while (left + continuous <= arr.length) {
    sum = arr.slice(left, left + continuous).reduce((acc, cur) => acc + cur);

    if (sum >= max) {
      max = sum;
      left++;
    } else if (sum < max) {
      left++;
    }
  }
  console.log(max);
}

solution(date, continuousDate);
