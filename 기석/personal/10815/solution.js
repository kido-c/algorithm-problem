const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, numbers, M, searchNumbers] = input;

const obj = {};

numbers.forEach((v) => {
  obj[v] = true;
});

let result = [];

searchNumbers.forEach((v) => {
  if (obj[v]) {
    result.push(1);
  } else {
    result.push(0);
  }
});
console.log(result.join(" "));
