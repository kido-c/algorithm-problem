const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input2.txt")
  .toString()
  .trim()
  .split("\n");

const [node, vertex, start] = input[0].split(" ").map((value) => Number(value));
const nodes = input
  .slice(1)
  .map((value) => value.split(" ").map((v) => Number(v)));

const linkedNode = Array.from(Array(node + 1), () => []);
const visited = Array.from(Array(node + 1), () => false);

const bfsResult = [];

for (let i = 0; i < nodes.length; i++) {
  const index = nodes[i][0];

  linkedNode[index].push(nodes[i][1]);
}

const dfs = (graph, current) => {
  visited[current] = true;
  if (visited[current]) bfsResult.push(current);

  for (let i = 0; i < graph[current].length; i++) {
    if (!visited[graph[current][i]]) {
      dfs(graph, graph[current][i]);
    }
  }
};

for (let j = 1; j < linkedNode.length; j++) {
  if (!visited[start]) {
    dfs(linkedNode, start);
  } else {
    dfs(linkedNode, j);
  }
}

dfs(linkedNode, start);

console.log(
  linkedNode,
  bfsResult.filter((v) => v)
);
