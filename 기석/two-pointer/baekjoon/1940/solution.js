/**  
backjoon 1940 주몽 문제
https://www.acmicpc.net/problem/1940
풀이 시간 22분, 문제를 잘 해석하는게 중요한 것 같다.
*/

const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const ingrentCount = Number(input[0]);
const matchCount = Number(input[1]);
const ingrents = input[2]
  .split(" ")
  .map((value) => Number(value))
  .sort((a, b) => a - b);

function solution(arr, match) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(sum);
    if (sum === match) {
      count++;
      left++;
    } else if (sum > match) {
      right--;
    } else if (sum < match) {
      left++;
    }
  }

  console.log(count);
}

solution(ingrents, matchCount);
