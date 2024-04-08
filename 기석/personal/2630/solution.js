const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(fileSync).toString().trim().split("\n");

let size = Number(input[0]);
const colorPaper = input.slice(1).map((v) => v.split(" ").map(Number));
let bluePaper = 0;
let whitePaper = 0;

/**
 *  r : 시작 x 좌표
 *  c : 시작 y 좌표
 *  n : 탐색해야할 사이즈
 */
function dividePaper(r, c, n) {
  // 모든 색상이 동일한지 확인

  if (isFillSameColor(r, c, n)) {
    if (colorPaper[r][c] === 1) {
      bluePaper++;
    } else {
      whitePaper++;
    }
    return;
  }

  // 모든 색상이 동일하지 않다면 나눠서 탐색

  let half = n / 2;

  dividePaper(r, c, half);
  dividePaper(r, c + half, half);
  dividePaper(r + half, c, half);
  dividePaper(r + half, c + half, half);
}

function isFillSameColor(r, c, n) {
  let start = colorPaper[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (colorPaper[i][j] !== start) return false;
    }
  }
  return true;
}

dividePaper(0, 0, size);

console.log(`${whitePaper}\n${bluePaper}`);
