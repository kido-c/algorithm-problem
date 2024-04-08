// 미로 탈출

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number); //미로 출구 위치 [x,y]
const arr = input.slice(1, N + 1).map((ele) => ele.split("").map(Number)); // 이차배열
//동빈의 위치 arr[0][0] (1,1)

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = []; //bfs는 큐를 쓰기 때문
let x = 0,
  y = 0;
queue.push([x, y]); // 갱신되는 동빈의 위치

while (queue.length !== 0) {
  const temp = queue.shift();
  x = temp[0];
  y = temp[1];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]; // 1의 위치 확인
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
      //배열 벗어 나면 무시
      continue;
    }

    if (arr[nx][ny] === 0) {
      // 0이면 괴물
      continue;
    }

    if (arr[nx][ny] === 1) {
      //처음 방문했을 때만
      arr[nx][ny] = arr[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(arr[N - 1][M - 1]);

// 정말 모르겠어요...
// 2차배열이면 무조건 bfs, dfs인가요?
