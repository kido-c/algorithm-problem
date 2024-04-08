const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");
const board = input.slice(1).map((v) => v.split(""));

let count = 0;
for (let i = 0; i < N; i++) {
  let start = board[i][0];
  if (i > 0 && board[i - 1][0] === board[i][0]) {
    if (board[i - 1][0] === "B") {
      start = "W";
    }
    if (board[i - 1][0] === "W") {
      start = "B";
    }
  }
  for (let j = 0; j < M; j++) {
    let isOdd = (j + 1) % 2 !== 0;

    if (isOdd) {
      // 홀수

      start !== board[i][j] && count++;
    } else {
      // 짝수

      start === board[i][j] && count++;
    }
  }
}

console.log(count);
