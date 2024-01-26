// 수열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0].split(" ").map(Number)[0]; // 전체 날짜의 갯수
const K = input[0].split(" ").map(Number)[1]; // 묶을 날짜의 갯수
const temperature = input[1].split(" ").map(Number);
const arr = [];
let i = 0;

while (i <= N - K) {
  let num = 0;
  for (let j = i; j < i + K; j++) {
    num += temperature[j];
  }
  arr.push(num);
  i++;
}

console.log(Math.max(...arr));
