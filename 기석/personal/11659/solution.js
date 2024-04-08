/**
 * 누적합과 관련된 문제
 *
 * A~B 까지의 누적합은
 *
 * 일단 인덱스별로 누적합을 구한다음
 * let accNumber = [1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5]
 *
 * A~B의 누적합은 accNumber[B] - accNumber[A-1]
 *
 * A가 1일 때의 분기만 잘해주면 됨.
 */

const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [numberCount, testCase] = input[0];
const numbers = input[1];

const test = input.slice(2);

let sum = 0;

let accNumber = [];

numbers.forEach((v) => {
  accNumber.push(sum + v);
  sum += v;
});

let result = [];

for (let i = 0; i < testCase; i++) {
  let A = test[i][0];
  let B = test[i][1];

  if (A === 1) {
    result.push(accNumber[B - 1]);
  } else {
    result.push(accNumber[B - 1] - accNumber[A - 2]);
  }
}

console.log(result.join("\n"));
