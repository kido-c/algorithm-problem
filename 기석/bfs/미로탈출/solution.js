const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const [N, M] = input
  .split("\n")[0]
  .split(" ")
  .map((value) => Number(value));

const graphNode = input
  .split("\n")
  .slice(1)
  .map((value) => value.split("").map((v) => Number(v)));

const directionX = [-1, 1, 0, 0];
const directionY = [0, 0, -1, 1];
const visited = Array.from(Array(N), () => Array(M).fill(false));

function bfs(graph, sx, sy) {
  const queue = [];
  queue.push([sx, sy]);
  // 방문 표시
  visited[sx][sy] = true;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    // 4방향 탐색
    for (let i = 0; i < 4; i++) {
      // 새로운 x 방향 ex) x === 1, nx === 0,2,1,1
      const nx = x + directionX[i];
      // 새로운 y 방향
      const ny = y + directionY[i];

      // 새로운 방향이 0 보다 작거나 행렬의 크기보다 크면 다음 반복문
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      // 방문 하지 않았고, 행렬의 해당 위치가 0이 아니라면
      if (!visited[nx][ny] && graph[nx][ny]) {
        // 탐색해야할 queue에 넣고
        queue.push([nx, ny]);
        // 방문 표시
        visited[nx][ny] = true;
        // 누적 방문
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }
}

function solution() {
  bfs(graphNode, 0, 0);
  console.log(graphNode[N - 1][M - 1]);
}

solution();
