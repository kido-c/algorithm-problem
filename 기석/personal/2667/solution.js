const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const N = Number(input[0]);
const graph = input.slice(1).map((v) => v.split("").map(Number));
let visited = Array.from(Array(N), () => Array(N).fill(false));

const directX = [-1, 1, 0, 0];
const directY = [0, 0, -1, 1];

function dfs(x, y) {
  let count = 1;
  let stack = [[x, y]];

  visited[x][y] = true;

  while (stack.length !== 0) {
    let [x, y] = stack.shift();

    for (let w = 0; w < 4; w++) {
      let nx = x + directX[w];
      let ny = y + directY[w];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (!visited[nx][ny] && graph[nx][ny] === 1) {
        stack.push([nx, ny]);
        visited[nx][ny] = true;
        count++;
      }
    }
  }
  return count;
}

let roomCounts = [];

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph.length; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      let rooms = dfs(i, j);
      if (rooms > 0) {
        roomCounts.push(rooms);
      }
    }
  }
}

roomCounts.sort((a, b) => a - b);

console.log(`${roomCounts.length}\n${roomCounts.join("\n")}`);

// 런타임 에러가 나는데 왜나는지 모르겠다.
// input을 잘못 converting해서 그랬음
// 근데 왜 vs에서 돌리면 답을 잘 나왔을까
