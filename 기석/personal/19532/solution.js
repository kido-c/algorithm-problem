const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c, d, e, f] = input;

function solution(a, b, c, d, e, f) {
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      let first = a * x + b * y === c;
      let second = d * x + e * y === f;

      if (first && second) {
        return [x, y];
      }
    }
  }
}

let result = solution(a, b, c, d, e, f);

console.log(result.join("\n"));
