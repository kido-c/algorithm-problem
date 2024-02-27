const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(1).map((v) => Number(v));
const result = [];
function solution(target) {
  const P = [0, 1, 1, 1];

  for (let i = 4; i <= target; i++) {
    let next = BigInt(P[i - 3]) + BigInt(P[i - 2]);
    P.push(next);
  }
  return BigInt(P[P.length - 1]);
}

for (let i = 0; i < cases.length; i++) {
  result.push(solution(cases[i]));
}
console.log(result.join("\n"));
