const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const zero = input.slice(1).map((v) => Number(v));
const stack = [];
let result = 0;

for (let i = 0; i < zero.length; i++) {
  if (zero[i] === 0) {
    stack.pop();
  } else {
    stack.push(zero[i]);
  }
}

if (stack.length) {
  result = stack.reduce((acc, cur) => acc + cur);
}

console.log(result);
