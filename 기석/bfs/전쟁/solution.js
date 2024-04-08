const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const field = input.map((v) => v.split(""));
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]; // 인접한 상하좌우 x,y좌표
let [white, blue] = [0, 0];

const bfs = (x, y) => {
  let cnt = 0;
  const queue = [[x, y]];
  const team = field[x][y]; // 현재 값
  field[x][y] = 0; // 방문 처리

  while (queue.length) {
    const [cx, cy] = queue.shift();
    cnt++; // 병사 수 증가

    for (let i = 0; i < 4; i++) {
      const nx = cx + dir[i][0];
      const ny = cy + dir[i][1];

      // 전쟁터 밖으로 벗어나지 않았고, 현재값과 다음 인접한 위치의 값이 같은 경우
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && field[nx][ny] == team) {
        field[nx][ny] = 0; // 방문 처리
        queue.push([nx, ny]);
      }
    }
  }
  // 현재 위치의 값이 'W'이면 white에 'B'이면 blue에 카운팅한 값의 제곱값 더하기
  team == "W" ? (white += cnt ** 2) : (blue += cnt ** 2);
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    // 해당 값이 0이 아닌 경우(방문하지 않은 경우) BFS 실행
    if (field[i][j]) bfs(i, j);
  }
}

console.log(white + " " + blue);

/**
 * 풀이 실패
 * 구글링 풀이 참조함.
 * 이전 아이스크림을 구하는 방식과 비슷하다고 생각했는데
 * 덩어리의 갯수를 구하는것에서 덩어리 요소의 갯수를 구하는 것을 구현이 떠오르지 않음.
 */
