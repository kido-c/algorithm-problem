// 게임 맵 최단거리

function solution(maps) {
  const N = maps.length; //y
  const M = maps[0].length; //x
  const goalY = N - 1; //최종지점 y
  const goalX = M - 1; //최종지점 x
  const dy = [0, 0, 1, -1];
  const dx = [-1, 1, 0, 0];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curY, curX, move] = queue.shift(); // 현재 y, 현재 x, 이동한 칸수를 큐에 넣어줌 이동한 칸수를 넣어주지 않으면 반복문 4번 돌아야해서 런타임 에러 남
    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + dy[i]; //현재위치에서 한칸씩 옮겨감
      const nx = curX + dx[i];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && maps[ny][nx] === 1) {
        // 좌표를 벗어나지 않았고 옮길 수 있는 거리라면
        queue.push([ny, nx, move + 1]); // 큐에 현재 좌표를 넣어주고
        maps[ny][nx] = 0; // 현재 좌표는 다시 못 가도록 0으로 변경
      }
    }
  }

  return -1; // 다 돌았는데 최단거리 없으면 -1 반환
}

// 최단거리라서 미로탈출과 비슷하다고 생각했음
// 동일하게 작성하니 1/3은 안된다고 하고 1/3은 런타임오류
// 결국 다른 사람 풀이 확인함
