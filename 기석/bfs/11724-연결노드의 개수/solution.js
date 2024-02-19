const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const node = input[0].split(" ").map((value) => Number(value))[0];
const link = input[0].split(" ").map((value) => Number(value))[1];

const nodes = input
  .slice(1)
  .map((value) => value.split(" ").map((s) => Number(s)));

const visited = Array.from(Array(node), () => false);

let linkNode = [];
let count = 0;

for (let i = 0; i < nodes.length; i++) {
  if (linkNode[nodes[i][0]] - 1) {
    linkNode[nodes[i][0] - 1].push(nodes[i][1]);
  } else {
    linkNode[nodes[i][0] - 1] = [nodes[i][1]];
  }
}

const dfs = (n, s) => {
  visited[s] = true;
  for (let i = 0; i < n[s].length; i++) {
    if (!visited[n[s]]) {
      dfs(n, n[s]);
    }
  }
};

for (let i = 0; i < linkNode.length; i++) {
  dfs(linkNode, i);
  // 재귀를 다 돌았다면 1개 추가
  count++;
}

console.log(count);
console.log(visited);
