const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [N, M] = input;

const students = Number(N);
const orderTickets = M.split(" ").map(Number);

let stack = [];
let currentOrder = 1;

while (orderTickets.length > 0 || stack.length > 0) {
  let currentStudent = orderTickets[0];

  if (currentOrder === currentStudent) {
    orderTickets.shift();
    currentOrder++;
    continue;
  }

  if (currentOrder === stack[stack.length - 1]) {
    stack.pop();
    currentOrder++;
    continue;
  } else {
    if (orderTickets.length === 0) {
      break;
    }

    orderTickets.shift();
    stack.push(currentStudent);
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");
