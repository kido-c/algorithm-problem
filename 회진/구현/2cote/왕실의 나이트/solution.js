// 왕실의 나이트
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const [x, y] = input;

const move = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
  [1, 2],
  [-1, 2],
];
const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};
let nx = alphabet[x];
let ny = Number(y);
let result = 0;
for (let i = 0; i < move.length; i++) {
  const newX = nx + move[i][0];
  const newY = ny + move[i][1];
  if (newX > 0 && newY > 0 && newX <= 8 && newY <= 8) {
    result++;
  }
}
console.log(result);
