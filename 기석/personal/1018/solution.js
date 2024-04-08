const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [T, ...board] = input;

const boardGraph = board.map((v) => v.split(""));

function makeChase(x, y) {
  let count = 0;
  let standard = boardGraph[x][y];
  let isOddstandardNumber = (x + y) % 2;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (isOddstandardNumber === 0) {
        if ((i + j) % 2 === 0 && standard !== boardGraph[i][j]) {
          count++;
        } else if ((i + j) % 2 !== 0 && standard === boardGraph[i][j]) {
          count++;
        }
      } else {
        if ((i + j) % 2 === 0 && standard === boardGraph[i][j]) {
          count++;
        } else if ((i + j) % 2 !== 0 && standard !== boardGraph[i][j]) {
          count++;
        }
      }
    }
  }

  return count;
}
const graph = T.split(" ").map(Number);
let arr = [];
for (let z = 0; z <= graph[0] - 8; z++) {
  for (let w = 0; w <= graph[1] - 8; w++) {
    arr.push(makeChase(z, w));
  }
}

console.log(arr);
console.log(Math.min(...arr));
