// 상하좌우
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const move = input[1].split(" ");

let x = 1,
  y = 1;

for (let i = 0; i < move.length; i++) {
  let nx = x;
  let ny = y;
  if (move[i] === "L" && ny > 1) {
    ny = y - 1;
  }
  if (move[i] === "R" && ny < N) {
    ny = y + 1;
  }
  if (move[i] === "U" && nx > 1) {
    nx = x - 1;
  }
  if (move[i] === "D" && nx < N) {
    nx = x + 1;
  }

  x = nx;
  y = ny;
}

console.log(x, y);
