// 나무자르기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0].split(" ").map(Number)[0];
const M = input[0].split(" ").map(Number)[1];
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let num = 0;
const arr = [];

for (let i = 1; i < N; i++) {
  const start = 0;
  const end = N - 1;
  num += trees[i] - trees[(start + end) / 2];
}

arr.push(num);

//중간 값을 찾아서 자른 값들을 더해 m과 비교 후 같으면 그 값을 리턴하고
// 크면 그보다 작은 값으로 자른 값들을 더해 m과 비교
// 작으면 그보다 큰 값으로 자른 값들을 더해 m과 비교
// 하는 거까지는 알았으나 못 풀겠어요..ㅜ
