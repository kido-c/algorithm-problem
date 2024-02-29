// 왕실의 나이트

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs").readFileSync(filePath, "utf-8").trim();

const x = resource.charCodeAt(0) - 97 + 1; // 알파벳을 숫자로 변환
const y = +resource[1];

function solution(x, y) {
  let answer = 0; //왕실의 나이트가 이동할 수 있는 경우의 수

  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  for (let i = 0; i < dx.length; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) {
      answer++;
    }
  }

  console.log(answer);
}

solution(x, y);
