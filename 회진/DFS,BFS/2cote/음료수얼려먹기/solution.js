// 얼음 얼려먹기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number); //[x,y]
const arr = input.slice(1, N + 1).map((ele) => ele.split("").map(Number)); // 이차배열

const dfs = (x, y) => {
  if (x <= -1 || x >= N || y <= -1 || y >= M) {
    //이부분 이해안됨
    return false;
  }
  if (arr[x][y] === 0) {
    arr[x][y] = 1;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  } else {
    return false;
  }
};

let answer = 0;
for (let i = 0; i < N; i++) {
  // 이부분도 이해안됨...
  for (let j = 0; j < M; j++) {
    if (dfs(i, j)) {
      answer += 1;
    }
  }
}

console.log(answer);
