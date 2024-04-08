const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const nodes = input
  .split("\n")
  .slice(2)
  .map((value) => value.split(" ").map((v) => Number(v)));

let linkNode = {};

for (let i = 0; i < nodes.length; i++) {
  if (linkNode[nodes[i][0]]) {
    linkNode[nodes[i][0]].push(nodes[i][1]);
  } else {
    linkNode[nodes[i][0]] = [nodes[i][1]];
  }
}

function solution(link, target) {
  const positions = [];
  let queue = [];
  let answer = 0;
  queue.push(target);

  while (queue.length !== 0) {
    let currentTarget = queue.shift();

    if (!positions.includes[currentTarget]) {
      positions.push(currentTarget);
      answer++;

      queue.push(...link[currentTarget]);
    }
  }

  return answer;
}

console.log(solution(linkNode, 1) - 1);

// const nodes = input
//   .split("\n")
//   .slice(2)
//   .map((value) => value.split(" ").map((v) => Number(v)));

// let linkNode = {};

// for (let i = 0; i < nodes.length; i++) {
//   if (linkNode[nodes[i][0]]) {
//     linkNode[nodes[i][0]].push(nodes[i][1]);
//   } else {
//     linkNode[nodes[i][0]] = [nodes[i][1]];
//   }
// }

// function solution(link, target) {
//   const positions = [target];
//   let queue = [target];

//   while (queue.length !== 0) {
//     let currentTarget = queue.shift();
//     if (link[currentTarget] && !positions.includes[currentTarget]) {
//       queue.push(...link[currentTarget]);
//       positions.push(...link[currentTarget]);
//     }
//   }

//   const set = new Set(positions);
//   console.log([...set].length - 1);
// }

// solution(linkNode, 1);

// console.log(linkNode);
