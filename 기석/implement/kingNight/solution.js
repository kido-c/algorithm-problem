/**
 * 나이트 움직이기
 */

const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(fileSync).toString().trim();

const COORDINATE = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

const night = [COORDINATE[input[0]], Number(input[1])];

function solution(std) {
  let count = 0;

  const move = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
  ];

  for (let i = 0; i < move.length; i++) {
    let moveRight = [std[0] + move[i][0], std[1] + move[i][1]];
    let moveLeft = [std[0] - move[i][0], std[1] - move[i][1]];

    if (
      moveRight[0] > 0 &&
      moveRight[1] > 0 &&
      moveRight[0] <= 8 &&
      moveRight[1] <= 8
    ) {
      count++;
    }

    if (
      moveLeft[0] > 0 &&
      moveLeft[1] > 0 &&
      moveLeft[0] <= 8 &&
      moveLeft[1] <= 8
    ) {
      count++;
    }
  }

  return count;
}

console.log(solution(night));

/**
 * 소요시간 : 20분 내외
 * 좌표에대한 이동 처리만 해주고 영역을 벗어났는지만 잘
 * 체크해주면 무리없이 풀이되는 문제
 */
