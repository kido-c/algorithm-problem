const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const testMount = input.slice(1);

const testArr = [];

let currentCase = [];

for (let i = 0; i < testMount.length; i++) {
  let current = testMount[i].split(" ").map(Number);
  if (current.length === 3) {
    testArr.push(currentCase);
    currentCase = [current];
  } else {
    currentCase.push(current);
  }
  if (i === testMount.length - 1) {
    testArr.push(currentCase);
  }
}

const inputCase = testArr.slice(1);

function makeGraph(Tcase) {
  let graph = Array.from(Array(Tcase[0][1]), () => Array(Tcase[0][0]).fill(0));

  for (let i = 1; i < Tcase.length; i++) {
    let [x, y] = Tcase[i];
    graph[y][x] = 1;
  }
  return graph;
}

const directX = [-1, 1, 0, 0];
const directY = [0, 0, -1, 1];

function solution(Tcase) {
  let visited = Array.from(Array(Tcase[0][1]), () =>
    Array(Tcase[0][0]).fill(false)
  );

  let graph = makeGraph(Tcase);

  let count = 0;

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[j][i] === 1 && !visited[j][i]) {
        dfs(j, i);
        count++;
      }
    }
  }

  function dfs(y, x) {
    let stack = [[x, x]];

    visited[y][x] = true;

    while (stack.length !== 0) {
      let [y, x] = stack.shift();

      for (let w = 0; w < 4; w++) {
        let ny = y + directY[w];
        let nx = x + directX[w];

        if (ny < 0 || ny >= Tcase[0][1] || nx < 0 || nx >= Tcase[0][0])
          continue;

        if (!visited[ny][nx] && graph[ny][nx] === 1) {
          stack.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
    }
  }

  return count;
}

let result = [];

for (let i = 0; i < inputCase.length; i++) {
  result.push(solution(inputCase[i]));
}

console.log(result.join("\n"));
