/**
 * 줄세우기 문제
 */

const fs = require("fs");
const fileSync =
  process.platform === "linux" ? `/dev/stdin` : __dirname + "/input.txt";

const input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, ...cases] = input;

function solution(testCase, aligns) {
  let result = [];

  for (let i = 0; i < testCase; i++) {
    const caseNumber = aligns[i][0];
    const caseAlign = aligns[i].slice(1);

    let steps = 0;

    for (let j = 0; j < caseAlign.length; j++) {
      let currentNumber = caseAlign[j];
      let compareNumbers = caseAlign.slice(0, j);

      compareNumbers.forEach((v) => {
        if (v > currentNumber) {
          steps++;
        }
      });
    }

    result.push(`${caseNumber} ${steps}`);
  }
  return result;
}

console.log(solution(N, cases).join("\n"));

/**
 * 소요시간 20분 내외
 * 코드를 구현하는것은 무리가 없었지만, 문제를 이해하는데 오래걸렸음
 */
