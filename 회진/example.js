// 연결 요소의 개수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const newInput = input.map((ele) => ele.split(" ").map(Number));
const [N, M] = newInput[0];

//인접 행렬 만들기
let max = N; // 노드 갯수
let matrix = new Array(max + 1).fill(0).map((row) => new Array(max).fill(0)); //0으로 만들어진 N+1*N 행렬 만들어줌
for (let i = 1; i < N; i++) {
  matrix[newInput[i][0]][newInput[i][1] - 1] = 1; // 연결되어있다면 1로 변경
  matrix[newInput[i][1]][newInput[i][0] - 1] = 1; // 반대도 1로 변경
}

//인접 리스트 만들기 (객체)
let adjust = {}; // 객체 생성
for (let i = 0; i < N + 1; i++) {
  adjust[i] = []; // 객체에 노드 수 +1 만큼 빈 배열 넣어줌
}

for (let i = 1; i < N; i++) {
  // 연결되어있으면 값 추가해줌
  const [from, to] = newInput[i];
  adjust[from].push(newInput[i][1]);
  adjust[to].push(from);
}

//인접 리스트 만들기 (배열)
const list = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [from, to] = newInput[i];
  list[from].push(to);
  list[to].push(from);
}
