// 1463 1로 만들기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = Number(input);

const DP = new Array(num + 1).fill(0); // 맨앞의 0은 제외하니깐 +1까지

for (let i = 2; i <= num; i++) {
  // 0은 0, 1은 1이라 굳이 할 필요 없음
  DP[i] = DP[i - 1] + 1; // 왜 여기서 매번 1을 더해주는지 모르겠어요..

  if (i % 2 === 0) {
    // 2의 배수이면
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    // 3의 배수이면
    DP[i] = Math.min(DP[i], DP[i / 3] + 1); // 최소횟수를 구하는거기때문에 min으로 계산
  }
}

console.log(DP[num]);
