const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [nm, ...arr] = input;
const [n, m] = nm.split(" ").map((v) => +v);
const graph = arr.map((v1) => v1.split(""));

const directionX = [-1, 1, 0, 0];
const directionY = [0, 0, -1, 1];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const dfs = (graph, x, y) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + directionX[i];
    const ny = y + directionY[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

    // 재귀함수 탈출 조건 : 방문 했고, 다음 노드가 1인 경우
    if (!visited[nx][ny] && graph[nx][ny] === "0") {
      dfs(graph, nx, ny);
    }
  }
};

function solution(n, m, graph) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const cur = graph[i][j];
      if (!visited[i][j] && cur === "0") {
        dfs(graph, i, j);
        // 재귀를 다 돌았다면 1개 추가
        count++;
      }
    }
  }

  return count;
}

console.log(solution(n, m, graph));
