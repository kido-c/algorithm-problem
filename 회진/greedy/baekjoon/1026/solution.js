const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2].split(" ").map(Number);
const arr = [...B];
let num = 0;

for (let i = 0; i < N; i++) {
  const maxNum = Math.max(...arr);
  const idx = arr.indexOf(maxNum);
  num += maxNum * A[i];
  arr.splice(idx, 1);
}

console.log(num);
