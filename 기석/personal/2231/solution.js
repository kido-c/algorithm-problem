// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();

const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

console.log(input);

function solution(number) {
  let sumArr = [];
  for (let i = 1; i <= number; i++) {
    let divideNubmer = i
      .toString()
      .split("")
      .reduce((acc, cur) => {
        return Number(acc) + Number(cur);
      }, 0);
    if (i + divideNubmer === number) {
      sumArr.push(i);
    }
  }
  return sumArr.length ? Math.min(...sumArr) : 0;
}

console.log(solution(Number(input)));
