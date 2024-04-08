const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const BRAKET_INPUT = input.slice(1).map((v) => v.split(""));

let result = [];

for (let i = 0; i < BRAKET_INPUT.length; i++) {
  let stack = [];
  let rightBraket = [];

  for (let j = 0; j < BRAKET_INPUT[i].length; j++) {
    if (BRAKET_INPUT[i][j] === "(") {
      stack.push("(");
    } else {
      stack.length ? stack.pop() : rightBraket.push(")");
    }
  }

  if (stack.length === 0 && rightBraket.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
