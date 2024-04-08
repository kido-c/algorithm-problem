const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const COMMEND_COUNT = Number(input[0]);
const COMMEND_LIST = input
  .slice(1)
  .map((v) => v.split(" ").map((v) => Number(v)));

function command(stack, number, value) {
  let result;

  switch (number) {
    case 1:
      stack.push(value);
      break;
    case 2:
      stack.length === 0 ? (result = -1) : (result = stack.pop());
      break;
    case 3:
      result = stack.length;
      break;
    case 4:
      stack.length === 0 ? (result = 1) : (result = 0);
      break;
    case 5:
      stack.length === 0 ? (result = -1) : (result = stack[stack.length - 1]);
      break;
  }

  return [stack, result];
}

let stack = [];
let result = [];

for (let i = 0; i < COMMEND_COUNT; i++) {
  let [newStack, newResult] = [];
  if (COMMEND_LIST[i][0] === 1) {
    [newStack, newResult] = command(
      stack,
      COMMEND_LIST[i][0],
      COMMEND_LIST[i][1]
    );
  } else {
    [newStack, newResult] = command(stack, COMMEND_LIST[i][0]);
  }

  stack = newStack;
  newResult && result.push(newResult);
}

console.log(result.join("\n"));
