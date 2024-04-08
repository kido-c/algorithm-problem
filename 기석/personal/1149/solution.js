const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [T, ...testcase] = input;

const NumberTestcase = testcase.map((v) => v.split(" ").map(Number));

let dp = NumberTestcase;

for (let i = 1; i < NumberTestcase.length; i++) {
  dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[NumberTestcase.length - 1]));

/**
 * 반복문 내부 로직
 *
 * 현재의 값을 = 현재의 값과 이전 값들의 합중 작은것로 대체 ( 본인과 동일한 index 제외 )
 */
