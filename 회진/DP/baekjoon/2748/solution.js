// 2748 피보나치 수2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input);
const dp = Array(n).fill(0);
dp[1] = 1;

for (let i = 1; i <= n; i++) {
  dp[i + 1] = BigInt(dp[i]) + BigInt(dp[i - 1]);
}

console.log(dp[n].toString());
