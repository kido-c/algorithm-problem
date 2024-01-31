// 기타레슨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number); //전체 재료의 갯수
const lecture = input[1].split(" ").map(Number);

// console.log(N, M, lecture);

const start = lecture[N - 1];
const end = lecture.reduce((a, b) => a + b, 0);

for (let i = 0; i < N; i++) {
  let num = 0;
  let a = 0;
  num += lecture[i];
  if (num > start) {
    a++;
  }
}
