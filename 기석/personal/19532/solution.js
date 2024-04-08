const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ");

const [a, b, c, d, e, f] = input;

function solution(a, b, c, d, e, f) {
  let result = [];
  for (let x = -999; x <= 999; x++) {
    let sum;
    if (b === 0) {
      sum = d * x;
    } else {
      sum = d * x + (e * (c - a * x)) / b;
    }

    if (Number.isInteger(sum) && sum === f) {
      if (b === 0) {
        y = 0;
      }
      let y = (c - a * x) / b;
      result.push(x);
      result.push(y);
    }
  }
  return result;
}

console.log(
  solution(Number(a), Number(b), Number(c), Number(d), Number(e), Number(f))[0],
  solution(Number(a), Number(b), Number(c), Number(d), Number(e), Number(f))[1]
);
