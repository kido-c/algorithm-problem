const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const T = input[0];

function divideArr(originArr, divide, target) {
  let arr;
  let cut = divide * target;
  arr = originArr.slice(cut, cut + divide);
  return arr;
}

let testCase = [];

for (let i = 0; i < input.slice(1).length / 3; i++) {
  let didvedArr = divideArr(input.slice(1), 3, i);
  testCase.push(didvedArr);
}

let visited = Array.from(Array(8), () => new Array(8).fill(false));

const target = [7, 0];

function solution(graph, x, y, count) {
  visited[x][y] = true;

  if (x === target[0] && y === target[1]) {
    console.log("hit");
    console.log(count);
    return count;
  } else {
    const newRights = [
      [x + 2, y + 1],
      [x + 1, y + 2],
      [x + 2, y - 1],
      [x + 1, y - 2],
    ];

    const newLefts = [
      [x - 2, y + 1],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 1, y - 2],
    ];

    for (let i = 0; i < 4; i++) {
      if (
        newLefts[i][0] < 8 &&
        newLefts[i][0] >= 0 &&
        newLefts[i][1] < 8 &&
        newLefts[i][1] >= 0 &&
        !visited[newLefts[i][0]][newLefts[i][1]]
      ) {
        count++;
        solution(graph, newLefts[i][0], newLefts[i][1], count);
      }

      if (
        newRights[i][0] < 8 &&
        newRights[i][0] >= 0 &&
        newRights[i][1] < 8 &&
        newRights[i][1] >= 0 &&
        !visited[newRights[i][0]][newRights[i][1]]
      ) {
        count++;
        solution(graph, newRights[i][0], newRights[i][1], count);
      }
    }
  }
}

console.log(solution(visited, 0, 0, 1));
