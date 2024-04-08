const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [N, nums, target] = input;

const convertSortNums = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const convertTarget = Number(target);

function solution(numbers, targetNum) {
  let count = 0;
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === targetNum) {
      count++;
      left++;
      right--;
    } else if (sum < targetNum) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

console.log(solution(convertSortNums, convertTarget));
