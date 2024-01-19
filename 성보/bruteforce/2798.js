const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = "";
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const item = arr[i] + arr[j] + arr[k];
      if (item > answer && item <= M) {
        answer = item;
      }
    }
  }
}

console.log(answer);

// 문제 푸는데 걸린 시간 5분
// 문제 난이도 하하
// 시간복잡도 O(N^3)
// 사실 부르트포스 알고리즘 문제라는걸 알고 문제를 풀어서 빠르게 해결할 수 있었다고 생각한다.
// 처음으로 시간복잡도에 대해서 접근하는 방법을 조금은 알게된거같다. 근데 숫자가 매우 직관적이여서 그런걸수도..?
// 1초당 1억번 연산횟수 잡고 O(N^3)이여도 1,000,000번 수행하기 때문에 브루트포스로 풀 수 있었다.(완전탐색)
