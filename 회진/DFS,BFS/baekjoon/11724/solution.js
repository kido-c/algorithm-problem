// 연결 요소의 개수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const newInput = input.map((ele) => ele.split(" ").map(Number));
const [node, edge, startNode] = newInput[0];

//인접 리스트 만들기
const list = Array.from({ length: node + 1 }, () => []);
for (let i = 1; i < node; i++) {
  const [from, to] = newInput[i];
  list[from].push(to);
  list[to].push(from);
}

const answer = { bfs: [], dfs: [] };
const stack = []; //dfs

const bfs = (start, idx) => {
  const visited = Array.from({ length: node + 1 }, () => false);
  let queue = [start]; //bfs
  // console.log(">>>", queue);
  while (queue.length) {
    const curNode = queue.shift();
    if (!visited[curNode]) {
      visited[curNode] = true;
      console.log(list[curNode]);
      // queue.push(list[curNode]);
      queue = [...queue, ...list[curNode].sort((a, b) => a - b)];
      answer.bfs.push(curNode);
      idx++;
    } else {
      idx++;
    }
  }
};

bfs(startNode, 0);
console.log(">>", answer.bfs);

// console.log(answer.bfs, answer.dfs);
