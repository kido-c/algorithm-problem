const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    answer += stack.length;
  } else if (input[i] === "(" && input[i + 1] !== ")") {
    stack.push(input[i]);
  } else if (input[i - 1] !== "(" && input[i] === ")") {
    stack.pop();
    answer += 1;
  }
}

console.log(answer);
