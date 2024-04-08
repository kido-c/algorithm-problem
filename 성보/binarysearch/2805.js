// 백준 2805_나무 자르기
// https://www.acmicpc.net/problem/2805

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// m이 필요할 때 절단기 높이의 최대값
let start = 0;
let end = Math.max(...arr);
let height = 0;

while (start <= end) {
  let total = 0;
  const mid = Math.floor((start + end) / 2);

  for (const item of arr) {
    if (item > mid) {
      total += item - mid;
    }
  }

  // 더 많이 필요한 경우
  if (total < m) {
    end = mid - 1;

    // 덜 필요한 경우
  } else {
    height = mid;
    start = mid + 1;
  }
}
console.log(height);

// 문제푸는데 걸린 시간 15분
// 딱히 어려움은 없었다 근데 height의 값을 언제 바꿔주는지에서 헷갈려서 시간이 조금 걸렸다.
